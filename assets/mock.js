(function () {
  var YEARS = [];
  for (var y = 2012; y <= 2026; y++) YEARS.push(y);
  var PREFIX = "math_";
  var DUR = 180 * 60 * 1000;
  var SUBJ_MAX = [10, 10, 10, 11, 11, 18];
  function jget(n, d) { try { return JSON.parse(localStorage.getItem(PREFIX + n)) || d; } catch (e) { return d; } }
  function jset(n, v) { try { localStorage.setItem(PREFIX + n, JSON.stringify(v)); } catch (e) { } }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]; }); }
  function md(s) {
    s = esc(s);
    s = s.replace(/!\[([^\]]*)\]\(([^)\s]+)\)/g, function (_, alt, src) {
      return '<figure class="zt-fig"><img loading="lazy" src="' + src + '" alt="' + alt + '"><figcaption>' + alt + "</figcaption></figure>";
    });
    s = s.replace(/^#### (.*)$/gm, '<h5 class="lh3">$1</h5>');
    s = s.replace(/^### (.*)$/gm, '<h4 class="lh2">$1</h4>');
    s = s.replace(/^## (.*)$/gm, '<h3 class="lh">$1</h3>');
    s = s.replace(/\*\*([^*]+)\*\*/g, "<b>$1</b>");
    return '<div class="zt-md">' + s + "</div>";
  }
  function typeset(nodes) { if (window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise(nodes); else setTimeout(function () { typeset(nodes); }, 300); }
  function shuffle(a) { for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }

  var host = document.getElementById("mkhost"), report = document.getElementById("mkreport");
  var timerEl = document.getElementById("mk-timer"), submitBtn = document.getElementById("mk-submit");
  var state = null, loading = 0;

  function save() { jset("mock", state); }
  function qOf(ref) {
    var d = window.ZT && window.ZT[ref.y];
    if (!d) return null;
    return d.questions.filter(function (q) { return q.n === ref.n; })[0] || null;
  }
  function sectionOf(i) { return i < 10 ? "choice" : (i < 16 ? "fill" : "subj"); }
  function maxOf(i) { return sectionOf(i) === "choice" || sectionOf(i) === "fill" ? 5 : SUBJ_MAX[i - 16]; }

  function loadAll(cb) {
    var todo = YEARS.filter(function (y) { return !(window.ZT && window.ZT[y]); });
    if (!todo.length) return cb();
    loading = todo.length;
    todo.forEach(function (y) {
      var s = document.createElement("script");
      s.src = "data/zhenti/zt-" + y + ".js?v=20261021d";
      s.onload = s.onerror = function () { if (--loading === 0) cb(); };
      document.head.appendChild(s);
    });
  }

  function newPaper() {
    var pool = { choice: [], fill: [], subj: [] };
    YEARS.forEach(function (y) {
      var d = window.ZT && window.ZT[y]; if (!d) return;
      d.questions.forEach(function (q) {
        var it = { y: y, q: q };
        if (q.type === "选择题") pool.choice.push(it);
        else if (q.type === "填空题") pool.fill.push(it);
        else pool.subj.push(it);
      });
    });
    if (pool.choice.length < 10 || pool.fill.length < 6 || pool.subj.length < 6) { alert("题库不完整，无法生成试卷。"); return; }
    shuffle(pool.choice); shuffle(pool.fill); shuffle(pool.subj);
    var picks = pool.choice.slice(0, 10).concat(pool.fill.slice(0, 6)).concat(pool.subj.slice(0, 6));
    state = { paper: picks.map(function (it) { return { y: it.y, n: it.q.n }; }), startedAt: Date.now(), submitted: false, choice: {}, fill: {}, fillOk: {}, subj: {}, work: {} };
    save(); render();
  }

  function start() {
    if (state && !state.submitted && !confirm("当前试卷还没交卷，确定重新开始？")) return;
    newPaper();
  }

  function submit(auto) {
    if (!state || state.submitted) return;
    if (!auto) {
      var blank = 0;
      for (var i = 0; i < 22; i++) {
        var s = sectionOf(i);
        if (s === "choice" && state.choice[i] == null) blank++;
        else if (s === "fill" && !(state.fill[i] || "").trim()) blank++;
        else if (s === "subj" && !(state.work[i] || "").trim()) blank++;
      }
      if (blank && !confirm("还有 " + blank + " 题未作答，确定交卷？")) return;
    }
    state.submitted = true;
    state.endedAt = Date.now();
    save(); render();
  }

  function score() {
    var cs = 0, fs = 0, ss = 0, ungraded = 0;
    state.paper.forEach(function (ref, i) {
      var q = qOf(ref); if (!q) return;
      if (i < 10) { if (state.choice[i] === q.ai) cs += 5; }
      else if (i < 16) { if (state.fillOk[i] === true) fs += 5; else if (state.fillOk[i] == null) ungraded++; }
      else {
        var v = Number(state.subj[i] == null ? 0 : state.subj[i]);
        if (state.subj[i] == null) ungraded++;
        ss += Math.max(0, Math.min(SUBJ_MAX[i - 16], v));
      }
    });
    return { cs: cs, fs: fs, ss: ss, total: cs + fs + ss, ungraded: ungraded };
  }

  function renderReport() {
    if (!state || !state.submitted) { report.innerHTML = ""; return; }
    var s = score();
    var used = Math.max(0, Math.min(DUR, (state.endedAt || Date.now()) - state.startedAt));
    var mins = Math.round(used / 60000);
    report.innerHTML = '<section class="sec mock-report"><h2>成绩报告</h2>' +
      '<div class="mock-total">总分 <b>' + s.total + "</b> / 150</div>" +
      '<div class="mock-break">选择题 ' + s.cs + "/50 · 填空题 " + s.fs + "/30 · 解答题 " + s.ss + "/70 · 用时约 " + mins + " 分钟" +
      (s.ungraded ? " · 还有 " + s.ungraded + " 题待自评" : " · 已完成自评") + "</div>" +
      '<p class="sub">选择题已自动判分；填空/解答请在下面对应题目处自评。</p></section>';
    typeset([report]);
  }

  function renderQ(ref, i) {
    var q = qOf(ref); if (!q) return "";
    var type = sectionOf(i), max = maxOf(i);
    var h = '<div class="fitem mock-q" id="mk-q' + i + '"><div class="mock-qh"><b>第 ' + (i + 1) + ' 题</b><span class="chip">' + esc(q.type) + " · " + max + " 分</span></div>" +
      '<div class="zt-stem">' + md(q.stem) + "</div>";
    if (type === "choice") {
      h += '<div class="qopts">';
      (q.options || []).forEach(function (o, j) {
        var cls = "qopt";
        if (state.submitted) {
          if (j === q.ai) cls += " right";
          if (state.choice[i] === j && j !== q.ai) cls += " wrong";
        } else if (state.choice[i] === j) cls += " on";
        h += '<button class="' + cls + '" data-choice="' + i + '" data-opt="' + j + '">' + "ABCD"[j] + ". " + esc(o) + "</button>";
      });
      h += "</div>";
    } else if (type === "fill") {
      h += '<input class="mock-input" data-fill="' + i + '" placeholder="填写答案（可写 LaTeX）" value="' + esc(state.fill[i] || "") + '"' + (state.submitted ? " disabled" : "") + ">";
    } else {
      h += '<textarea class="mock-work" data-work="' + i + '" placeholder="可写思路/关键步骤（不参与自动判分）"' + (state.submitted ? " disabled" : "") + ">" + esc(state.work[i] || "") + "</textarea>";
    }
    if (state.submitted) {
      h += '<div class="mock-sol"><div class="ansbox"><p><b>答案：</b>' + esc(q.answer || "见解析") + "</p>" + md(q.sol) + "</div>";
      if (type === "fill") {
        h += '<div class="mock-grade"><span class="sub">自评：</span><button class="navbtn' + (state.fillOk[i] === true ? " on" : "") + '" data-fg="' + i + '" data-ok="1">✓ 得 5 分</button><button class="navbtn' + (state.fillOk[i] === false ? " wrong" : "") + '" data-fg="' + i + '" data-ok="0">✗ 得 0 分</button></div>';
      } else if (type === "subj") {
        h += '<div class="mock-grade"><span class="sub">自评得分：</span><input type="number" class="mock-score" data-sg="' + i + '" min="0" max="' + max + '" step="1" value="' + (state.subj[i] == null ? "" : state.subj[i]) + '"> / ' + max + " 分</div>";
      }
      h += "</div>";
    }
    h += "</div>";
    return h;
  }

  function render() {
    if (!state) {
      host.innerHTML = '<section class="sec"><h2>数学二模拟卷</h2><p>10 道选择（50 分）+ 6 道填空（30 分）+ 6 道解答（70 分），限时 <b>180 分钟</b>，满分 <b>150</b>。</p><p>题目从近 15 年数学二真题中随机抽取。选择题自动判分，填空/解答交卷后自评。</p><div class="navrow"><button class="navbtn" id="mk-start">开始新卷</button></div></section>';
      document.getElementById("mk-start").onclick = start;
      timerEl.textContent = "未开始"; submitBtn.disabled = true; report.innerHTML = "";
      return;
    }
    var h = '<section class="sec mock-sec"><h2>一、选择题 <span class="bsub">每题 5 分，共 50 分</span></h2>';
    for (var i = 0; i < 10; i++) h += renderQ(state.paper[i], i);
    h += '</section><section class="sec mock-sec"><h2>二、填空题 <span class="bsub">每题 5 分，共 30 分</span></h2>';
    for (i = 10; i < 16; i++) h += renderQ(state.paper[i], i);
    h += '</section><section class="sec mock-sec"><h2>三、解答题 <span class="bsub">共 70 分</span></h2>';
    for (i = 16; i < 22; i++) h += renderQ(state.paper[i], i);
    h += "</section>";
    host.innerHTML = h;
    bind();
    typeset([host]);
    submitBtn.disabled = state.submitted;
    renderReport();
    updateTimer();
  }

  function bind() {
    Array.prototype.forEach.call(host.querySelectorAll("[data-choice]"), function (b) {
      b.onclick = function () {
        if (state.submitted) return;
        var i = +b.getAttribute("data-choice"), j = +b.getAttribute("data-opt");
        state.choice[i] = j; save();
        var card = b.closest(".mock-q");
        if (card) Array.prototype.forEach.call(card.querySelectorAll(".qopt"), function (x) { x.classList.remove("on"); });
        b.classList.add("on");
      };
    });
    Array.prototype.forEach.call(host.querySelectorAll("[data-fill]"), function (el) {
      el.oninput = function () { state.fill[+el.getAttribute("data-fill")] = el.value; save(); };
    });
    Array.prototype.forEach.call(host.querySelectorAll("[data-work]"), function (el) {
      el.oninput = function () { state.work[+el.getAttribute("data-work")] = el.value; save(); };
    });
    Array.prototype.forEach.call(host.querySelectorAll("[data-fg]"), function (b) {
      b.onclick = function () {
        var i = +b.getAttribute("data-fg"), ok = b.getAttribute("data-ok") === "1";
        state.fillOk[i] = ok; save(); render();
      };
    });
    Array.prototype.forEach.call(host.querySelectorAll("[data-sg]"), function (el) {
      el.onchange = function () {
        var i = +el.getAttribute("data-sg"), max = maxOf(i), v = Number(el.value);
        if (isNaN(v)) v = 0; v = Math.max(0, Math.min(max, Math.round(v)));
        state.subj[i] = v; save(); renderReport();
      };
    });
  }

  function updateTimer() {
    if (!state) { timerEl.textContent = "未开始"; return; }
    if (state.submitted) { timerEl.textContent = "已交卷"; return; }
    var left = state.startedAt + DUR - Date.now();
    if (left <= 0) { timerEl.textContent = "00:00"; submit(true); return; }
    var m = Math.floor(left / 60000), s = Math.floor((left % 60000) / 1000);
    timerEl.textContent = (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s;
  }

  document.getElementById("mk-new").onclick = start;
  submitBtn.onclick = function () { submit(false); };
  window.addEventListener("beforeunload", save);
  setInterval(function () { if (!document.hidden) updateTimer(); }, 1000);

  loadAll(function () {
    state = jget("mock", null);
    render();
  });
})();
