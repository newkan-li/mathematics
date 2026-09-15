(function () {
  var PREFIX = "math_";
  function k(n) { return PREFIX + n; }
  function jget(n, d) { try { return JSON.parse(localStorage.getItem(k(n))) || d; } catch (e) { return d; } }
  function jset(n, v) { try { localStorage.setItem(k(n), JSON.stringify(v)); } catch (e) { } }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (m) { return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[m]; }); }
  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }

  /* ---------- SRS ---------- */
  function srsAll() { return jget("srs", {}); }
  function srsGet(id) { return srsAll()[id]; }
  function srsRate(id, q) { // q:0不会 1模糊 2会
    var all = srsAll(), r = all[id] || { reps: 0, ef: 2.5, iv: 0 };
    if (q === 0) { r.reps = 0; r.iv = 0; r.ef = Math.max(1.3, r.ef - 0.2); }
    else {
      r.ef = Math.max(1.3, r.ef + (q === 2 ? 0.1 : -0.15));
      r.iv = r.reps === 0 ? 1 : Math.round(r.iv * r.ef);
      r.reps++;
    }
    r.due = Date.now() + (r.iv || 0) * 86400000;
    all[id] = r; jset("srs", all);
  }
  function srsDue() {
    var now = Date.now(), out = [];
    var all = srsAll();
    Object.keys(all).forEach(function (id) { if (all[id].due <= now) out.push(id); });
    return out;
  }

  /* ---------- 章节标记 ---------- */
  function marks() { return jget("marks", {}); }
  function renderMarks() {
    document.querySelectorAll(".mark").forEach(function (host) {
      var cid = host.dataset.ch, si = host.dataset.sec, key = cid + "_s" + si;
      var m = marks()[key] || {};
      host.innerHTML = "";
      [["read", "✅ 已读", "on"], ["conf", "❓ 不懂", "conf"]].forEach(function (o) {
        var b = document.createElement("button");
        b.textContent = o[1];
        if (m[o[0]]) b.className = "on";
        b.onclick = function () {
          var all = marks(); var cur = all[key] || {}; cur[o[0]] = !cur[o[0]];
          all[key] = cur; jset("marks", all); renderMarks();
        };
        host.appendChild(b);
      });
      if (m.read) { var s = document.createElement("span"); s.className = "chip"; s.textContent = "已读"; host.appendChild(s); }
    });
  }

  /* ---------- 首页看板 ---------- */
  function renderDash() {
    var host = document.getElementById("dash"); if (!host) return;
    var mk = marks(), readN = 0, confN = 0;
    Object.keys(mk).forEach(function (kk) { if (mk[kk].read) readN++; if (mk[kk].conf) confN++; });
    var M = window.MANIFEST || [], total = 0;
    M.forEach(function (m) { total += m.nsec; });
    host.innerHTML = '<div class="dash-grid"><div>章节 <b>' + M.length + '</b></div>' +
      '<div>小节进度 <b>' + readN + "/" + total + '</b></div>' +
      '<div>不懂 <b>' + confN + '</b></div>' +
      '<div>待复习 <b>' + srsDue().length + '</b></div></div>';
    M.forEach(function (m) {
      var el = document.getElementById("prog_" + m.id); if (!el) return;
      var done = 0;
      for (var i = 0; i < m.nsec; i++) if ((mk[m.id + "_s" + i] || {}).read) done++;
      el.textContent = "进度 " + done + "/" + m.nsec + (done === m.nsec ? " ✔" : "");
    });
  }

  /* ---------- 公式手册 ---------- */
  function renderFormula() {
    var host = document.getElementById("flist"); if (!host) return;
    var data = window.FORMULAS || [], q = "";
    var search = document.getElementById("fsearch");
    function draw() {
      var html = "";
      data.forEach(function (f, i) {
        var txt = (f.ch + " " + f.name + " " + (f.body || "") + " " + (f.note || "")).toLowerCase();
        if (q && txt.indexOf(q) < 0) return;
        html += '<div class="fitem"><div class="fh">' + esc(f.ch) + " · " + esc(f.name) + '</div>' +
          '<div class="fbody">' + (f.body || "") + '</div>' +
          (f.note ? '<div class="fnote">' + esc(f.note) + "</div>" : "") + "</div>";
      });
      host.innerHTML = html || '<p class="empty">没有匹配的公式。</p>';
      if (window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([host]);
    }
    if (search) search.oninput = function () { q = search.value.trim().toLowerCase(); draw(); };
    draw();
  }

  /* ---------- 方法库 ---------- */
  function renderMethods() {
    var host = document.getElementById("mlist"); if (!host) return;
    var data = window.METHODS || [];
    var html = "";
    data.forEach(function (m) {
      html += '<div class="mitem"><div class="mh">' + esc(m.ch) + " · " + esc(m.name) + '</div>' +
        '<div>' + (m.body || "") + "</div>" +
        (m.note ? '<div class="mnote">' + esc(m.note) + "</div>" : "") + "</div>";
    });
    host.innerHTML = html || '<p class="empty">暂无内容。</p>';
    if (window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([host]);
  }

  /* ---------- 闪卡（公式） ---------- */
  function renderFlashcards() {
    var host = document.getElementById("fchost"); if (!host) return;
    var cards = (window.FORMULAS || []).map(function (f, i) {
      return { id: "fc_" + i, front: f.name, back: f.body, ch: f.ch };
    });
    var ctl = document.getElementById("fcctl");
    if (ctl) ctl.innerHTML = '<p class="chip">共 ' + cards.length + ' 张 · 点击卡片翻面</p>';
    var i = 0;
    function draw() {
      if (!cards.length) { host.innerHTML = '<p class="empty">暂无闪卡。</p>'; return; }
      var c = cards[i];
      host.innerHTML = '<div class="fitem"><div class="fh">' + (i + 1) + " / " + cards.length + " · " + esc(c.ch) + '</div>' +
        '<div class="fbody" style="font-size:18px">' + esc(c.front) + '</div>' +
        '<div class="fbody" id="fcback" style="display:none;margin-top:10px">' + (c.back || "") + '</div>' +
        '<div class="mark" style="margin-top:10px"><button id="fcshow">显示答案</button>' +
        '<button id="fcp">上一张</button><button id="fcn">下一张</button></div></div>';
      document.getElementById("fcshow").onclick = function () {
        document.getElementById("fcback").style.display = "block";
        if (window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([host]);
      };
      document.getElementById("fcp").onclick = function () { i = (i - 1 + cards.length) % cards.length; draw(); };
      document.getElementById("fcn").onclick = function () { i = (i + 1) % cards.length; draw(); };
    }
    draw();
  }

  /* ---------- 错题本 / 复习 ---------- */
  function renderWrong() {
    var host = document.getElementById("whost"); if (!host) return;
    host.innerHTML = '<p class="empty">做题后做错的题会自动出现在这里。</p>';
  }
  function renderReview() {
    var host = document.getElementById("reviewhost"); if (!host) return;
    var due = srsDue();
    var el = document.getElementById("duecount"); if (el) el.textContent = due.length;
    host.innerHTML = due.length ? '<p class="chip">待复习 ' + due.length + ' 项</p>' :
      '<p class="empty">今天没有待复习的内容。去学习并标记「已读」后会自动安排复习。</p>';
  }


  /* ---------- 660 题 ---------- */
  function renderQ660() {
    var host = document.getElementById("q660view"); if (!host) return;
    var Q = window.Q660 || { sections: [] };
    var tabs = document.getElementById("q660tabs");
    var info = document.getElementById("q660info");
    var marks = jget("q660", {});
    var sec = 0, page = Q.sections[0] ? Q.sections[0].a : 9;
    function clampSec() { var S = Q.sections[sec]; if (page < S.a) page = S.a; if (page > S.b) page = S.b; }
    function drawTabs() {
      tabs.innerHTML = "";
      Q.sections.forEach(function (S, i) {
        var b = el("button", "navbtn", S.name);
        if (i === sec) b.style.borderColor = "var(--acc)";
        b.onclick = function () { sec = i; page = S.a; clampSec(); draw(); };
        tabs.appendChild(b);
      });
    }
    function draw() {
      clampSec();
      drawTabs();
      var S = Q.sections[sec];
      host.innerHTML = '<figure><img src="' + Q.img + '/p-' + String(page).padStart(3, "0") + '.jpg" alt="p' + page + '"><figcaption>' + S.name + ' · 第 ' + page + ' 页</figcaption></figure>';
      var mk = document.getElementById("q660mark");
      var st = marks[page] || {};
      mk.innerHTML = "";
      [["ok", "✓ 做对", "on"], ["no", "✗ 做错", "conf"]].forEach(function (o) {
        var b = document.createElement("button");
        b.textContent = o[1];
        if (st[o[0]]) b.className = "on";
        b.onclick = function () {
          var m = jget("q660", {}); var c = m[page] || {}; c[o[0]] = !c[o[0]];
          m[page] = c; jset("q660", m); marks = m; draw();
        };
        mk.appendChild(b);
      });
      var nOk = 0, nNo = 0;
      Object.keys(marks).forEach(function (k) { if (marks[k].ok) nOk++; if (marks[k].no) nNo++; });
      if (info) info.textContent = "已做对 " + nOk + " 页 · 做错 " + nNo + " 页";
    }
    var prev = document.getElementById("q660prev"), next = document.getElementById("q660next"),
      jump = document.getElementById("q660jump"), go = document.getElementById("q660go");
    if (prev) prev.onclick = function () { page--; draw(); };
    if (next) next.onclick = function () { page++; draw(); };
    if (go) go.onclick = function () { var v = parseInt(jump.value, 10); if (v) { page = v; draw(); } };
    if (jump) jump.onkeydown = function (e) { if (e.key === "Enter" && go) go.click(); };
    draw();
  }

  window.addEventListener("DOMContentLoaded", function () {
    var page = document.body.dataset.page;
    if (page === "index") renderDash();
    else if (page === "chapter") renderMarks();
    else if (page === "formula") renderFormula();
    else if (page === "methods") renderMethods();
    else if (page === "flashcards") renderFlashcards();
    else if (page === "wrong") renderWrong();
    else if (page === "review") renderReview();
    else if (page === "q660") renderQ660();
  });
})();
