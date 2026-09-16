(function () {
  var A = window.MathApp || {};

  /* ---------- 轻量 Markdown 渲染（保留 $..$ / $$..$$ 数学，正文做 HTML 转义） ---------- */
  function inline(s) {
    return s.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  }
  function parseChoice(p) {
    var m = p.a && /^\(([A-D])\)$/.exec(String(p.a).trim());
    if (!m || !p.q) return null;
    var q = p.q, idx = [], i;
    for (i = 0; i < 4; i++) idx.push(q.indexOf("(" + "ABCD"[i] + ")"));
    for (i = 0; i < 4; i++) if (idx[i] < 0) return null;
    for (i = 1; i < 4; i++) if (idx[i] < idx[i - 1]) return null;
    var stem = q.slice(0, idx[0]).trim(), opts = [];
    for (i = 0; i < 4; i++) {
      var end = i < 3 ? idx[i + 1] : q.length;
      opts.push(q.slice(idx[i] + 3, end).replace(/^[、:：\s]+/, "").replace(/[\s　]+$/, ""));
    }
    return { stem: stem, options: opts, answer: m[1].charCodeAt(0) - 65 };
  }
  function renderMarkdown(md) {
    var lines = String(md).replace(/\r/g, "").split("\n");
    var html = [], para = [], list = null, listType = "ul", listStart = 1, quote = [], math = null, ex = null;
    function ih(text) { return inline(A.esc(text)); }
    function closeEx() {
      if (!ex) return;
      if (ex.a) html.push("</div>");
      if (ex.q) html.push("</div>");
      html.push("</div>"); ex = null;
    }
    function fp() {
      if (!para.length) return;
      var text = para.join(" "); para = [];
      if (/^【例/.test(text)) {
        closeEx();
        html.push('<div class="ex"><div class="ex-q">' + ih(text));
        ex = { q: true, a: false };
        return;
      }
      if (/^【解|^【证|^【分析/.test(text)) {
        if (!ex) { html.push('<div class="ex">'); ex = { q: false, a: false }; }
        if (ex.q) { html.push("</div>"); ex.q = false; }
        if (ex.a) html.push('<hr class="exhr">');
        else { html.push('<div class="ex-a">'); ex.a = true; }
        html.push('<p class="solp">' + ih(text) + "</p>");
        return;
      }
      html.push("<p>" + ih(text) + "</p>");
    }
    function fl() {
      if (!list) return;
      var open = "<" + listType + (listType === "ol" ? ' start="' + listStart + '"' : "") + ">";
      html.push(open + list.map(function (x) { return "<li>" + ih(x) + "</li>"; }).join("") + "</" + listType + ">");
      list = null;
    }
    function fq() {
      if (!quote.length) return;
      html.push('<div class="notes">' + quote.map(ih).join("<br>") + "</div>"); quote = [];
    }
    function fa() { fp(); fl(); fq(); }
    for (var i = 0; i < lines.length; i++) {
      var t = lines[i].trim();
      if (math !== null) {
        var ci = t.indexOf("$$");
        if (ci >= 0) {
          math.push(t.slice(0, ci));
          html.push('<div class="fml">$$' + A.esc(math.join("\n")) + "$$</div>");
          math = null;
          var rest = t.slice(ci + 2).trim();
          if (rest) para.push(rest);
        } else math.push(t);
        continue;
      }
      if (t === "" || /^-{3,}$/.test(t) || /^[·•*]\s*\d+\s*[·•*]?$/.test(t)) { fa(); continue; }
      var img = /^!\[(.*)\]\(([^)\s]+)\)\s*$/.exec(t);
      if (img) { fa(); html.push('<figure class="fig"><img loading="lazy" src="' + img[2] + '" alt="' + A.esc(img[1]) + '">' + (img[1] ? '<figcaption>' + A.esc(img[1]) + '</figcaption>' : '') + '</figure>'); continue; }
      if (/^\$\$/.test(t)) {
        fa();
        var r0 = t.slice(2), c0 = r0.indexOf("$$");
        if (c0 >= 0) {
          html.push('<div class="fml">$$' + A.esc(r0.slice(0, c0)) + "$$</div>");
          var after = r0.slice(c0 + 2).trim(); if (after) para.push(after);
        } else math = [r0];
        continue;
      }
      var h = /^(#{1,4})\s+(.*)$/.exec(t);
      if (h) {
        fa(); closeEx();
        var lv = h[1].length, tag = lv <= 2 ? "h3" : (lv === 3 ? "h4" : "h5");
        var cls = lv <= 2 ? "lh" : (lv === 3 ? "lh2" : "lh3");
        html.push("<" + tag + ' class="' + cls + '">' + ih(h[2]) + "</" + tag + ">");
        continue;
      }
      if (/^【注】/.test(t)) { fa(); quote.push(t); continue; }
      if (/^>\s?/.test(t)) { fp(); fl(); quote.push(t.replace(/^>\s?/, "")); continue; }
      var ol = /^(\d+)[.)]\s+(.*)$/.exec(t);
      if (ol) {
        fp(); fq();
        if (!list) { list = []; listType = "ol"; listStart = parseInt(ol[1], 10); }
        list.push(ol[2]);
        continue;
      }
      var ul = /^[-•]\s+(.*)$/.exec(t);
      if (ul) {
        fp(); fq();
        if (!list) { list = []; listType = "ul"; }
        list.push(ul[1]);
        continue;
      }
      fl(); fq(); para.push(t);
    }
    fa(); closeEx();
    if (math !== null) html.push('<div class="fml">$$' + A.esc(math.join("\n")) + "$$</div>");
    return html.join("\n");
  }

  function typeset(nodes) { if (window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise(nodes); }

  function lessonHtml(L) {
    var html = "";
    if (L.content) {
      L.content.forEach(function (pg) {
        html += '<div class="pg" id="' + L.id + "-p" + pg.p + '">' + renderMarkdown(pg.md) + "</div>";
      });
    } else if (L.blocks) {
      L.blocks.forEach(function (b) {
        if (b.t === "h") html += '<h3 class="lh">' + A.esc(b.x) + "</h3>";
        else if (b.t === "h2") html += '<h4 class="lh2">' + A.esc(b.x) + "</h4>";
        else if (b.t === "p") html += "<p>" + A.esc(b.x) + "</p>";
        else if (b.t === "note") html += '<div class="notes">' + A.esc(b.x) + "</div>";
        else if (b.t === "fml") html += '<div class="fml">' + A.esc(b.x) + "</div>";
        else if (b.t === "ex") html += '<div class="ex"><div class="ex-q">' + A.esc(b.q) + '</div>' +
          '<details class="sol"><summary>解答</summary><div class="ansbox">' + A.esc(b.sol) + "</div></details></div>";
      });
    }
    if (L.problems) {
      html += '<h3 class="lh">练习题精选（含详细解答）</h3>';
      html += '<p class="sub">选择题直接点选项判分；解答/证明题点「显示答案与解答」后自评对错，均计入统计。</p>';
      html += '<div class="navrow"><span class="chip" data-probstat></span><button class="navbtn" data-probreset>重做本节练习</button></div>';
      L.problems.forEach(function (p) {
        var c = parseChoice(p);
        html += '<div class="prob" id="' + L.id + "-p" + p.n + '">' +
          '<div class="prob-q"><span class="pn">' + p.n + ".</span> " + A.esc(c ? c.stem : p.q) + "</div>";
        if (c) {
          html += '<div class="qopts">';
          c.options.forEach(function (o, j) {
            html += '<button class="qopt" data-opt="' + j + '">' + A.esc(o) + "</button>";
          });
          html += "</div>";
        } else {
          html += '<div class="navrow"><button class="navbtn" data-show>显示答案与解答</button></div>';
        }
        html += '<div data-sol hidden><div class="ansbox">' +
          (p.a ? '<p class="prob-a">答案：' + A.esc(p.a) + "</p>" : "") +
          (p.sol ? renderMarkdown(p.sol) : "") + "</div></div>";
        html += "</div>";
      });
    }
    if (L.img && L.pages) {
      html += '<details class="pages"><summary>📖 对照原书原页（可选，正文不依赖）</summary><div class="imglist">';
      for (var pp = L.pages[0]; pp <= L.pages[1]; pp++) {
        html += '<figure><img loading="lazy" src="' + L.img + "/p-" + String(pp).padStart(3, "0") +
          '.jpg" alt="p' + pp + '"><figcaption>第 ' + pp + " 页</figcaption></figure>";
      }
      html += "</div></details>";
    }
    return html;
  }

  function makeQuiz(L, qhost, scoreEl, resetBtn) {
    if (!qhost || !L.quiz) return;
    var store = A.jget("quiz", {});
    function keyOf(i) { return L.id + "_q" + i; }
    function draw() {
      qhost.innerHTML = "";
      var answered = 0, correct = 0;
      L.quiz.forEach(function (q, i) {
        var key = keyOf(i), st = store[key] || {};
        var d = A.el("div", "qitem"); d.id = L.id + "-q" + i;
        d.innerHTML = '<div class="qq">' + (i + 1) + ". " + A.esc(q.q) + "</div>";
        var opts = A.el("div", "qopts");
        q.options.forEach(function (o, j) {
          var b = document.createElement("button");
          b.className = "qopt"; b.innerHTML = A.esc(o);
          if (st.pick != null) {
            b.classList.add("locked");
            if (j === q.answer) b.classList.add("right");
            if (j === st.pick && st.pick !== q.answer) b.classList.add("wrong");
          }
          b.onclick = function () { pick(i, j); };
          opts.appendChild(b);
        });
        d.appendChild(opts);
        if (st.pick != null) {
          d.appendChild(A.el("div", "qexp", (st.pick === q.answer ? "✅ 正确　" : "❌ 错误　") + A.esc(q.explain || "")));
          answered++; if (st.pick === q.answer) correct++;
        }
        qhost.appendChild(d);
      });
      if (scoreEl) scoreEl.textContent = "已答 " + answered + "/" + L.quiz.length + " · 正确 " + correct;
      typeset([qhost]);
    }
    function pick(i, j) {
      var q = L.quiz[i], key = keyOf(i), all = A.jget("quiz", {});
      var st = all[key] || {}; if (st.pick != null) return;
      st.pick = j; st.ok = (j === q.answer); st.wrong = !st.ok;
      st.q = q.q; st.options = q.options; st.answer = q.answer; st.explain = q.explain;
      all[key] = st; A.jset("quiz", all); store = all;
      if (st.ok) A.srsRate(key, 2); else A.srsRate(key, 0);
      draw();
    }
    if (resetBtn) resetBtn.onclick = function () {
      var all = A.jget("quiz", {});
      L.quiz.forEach(function (q, i) { delete all[keyOf(i)]; A.srsForget(keyOf(i)); });
      A.jset("quiz", all); store = all; draw();
    };
    draw();
  }

  function initProblems(root, L) {
    if (!L.problems || !root) return;
    var store = A.jget("prob", {});
    function keyOf(n) { return L.id + ":" + n; }
    function stats() {
      var ans = 0, ok = 0;
      L.problems.forEach(function (p) { var st = store[keyOf(p.n)]; if (st) { ans++; if (st.ok) ok++; } });
      var el = root.querySelector("[data-probstat]");
      if (el) el.textContent = "已答 " + ans + "/" + L.problems.length + " · 正确 " + ok;
    }
    L.problems.forEach(function (p) {
      var box = root.querySelector("#" + L.id + "-p" + p.n);
      if (!box) return;
      var key = keyOf(p.n), st = store[key];
      var solBox = box.querySelector("[data-sol]");
      function reveal() { if (solBox) { solBox.hidden = false; typeset([solBox]); } }
      var c = parseChoice(p);
      if (c) {
        var btns = box.querySelectorAll("[data-opt]");
        function paint() {
          Array.prototype.forEach.call(btns, function (b) {
            var j = parseInt(b.getAttribute("data-opt"), 10);
            b.classList.add("locked");
            if (j === c.answer) b.classList.add("right");
            if (st && st.pick === j && j !== c.answer) b.classList.add("wrong");
          });
        }
        Array.prototype.forEach.call(btns, function (b) {
          b.onclick = function () {
            if (store[key]) return;
            var j = parseInt(b.getAttribute("data-opt"), 10);
            store[key] = { pick: j, ok: (j === c.answer), q: c.stem, options: c.options, answer: c.answer };
            A.jset("prob", store); st = store[key];
            paint(); reveal(); stats();
          };
        });
        if (st) { paint(); reveal(); }
      } else {
        var showBtn = box.querySelector("[data-show]");
        var wrap = A.el("div", "navrow");
        var okB = document.createElement("button"); okB.className = "navbtn"; okB.textContent = "✓ 我做对了";
        var noB = document.createElement("button"); noB.className = "navbtn"; noB.textContent = "✗ 我做错了";
        function paintGrade() {
          if (!st) return;
          okB.disabled = noB.disabled = true;
          okB.style.borderColor = st.ok ? "var(--ok)" : "var(--line)";
          noB.style.borderColor = !st.ok ? "var(--no)" : "var(--line)";
        }
        okB.onclick = function () { if (store[key]) return; store[key] = { ok: true, q: p.q, a: p.a, sol: p.sol }; A.jset("prob", store); st = store[key]; reveal(); paintGrade(); stats(); };
        noB.onclick = function () { if (store[key]) return; store[key] = { ok: false, q: p.q, a: p.a, sol: p.sol }; A.jset("prob", store); st = store[key]; reveal(); paintGrade(); stats(); };
        wrap.appendChild(okB); wrap.appendChild(noB); box.appendChild(wrap);
        if (showBtn) showBtn.onclick = function () { reveal(); showBtn.disabled = true; showBtn.textContent = "已显示答案与解答"; };
        if (st) { reveal(); paintGrade(); }
      }
    });
    var reset = root.querySelector("[data-probreset]");
    if (reset) reset.onclick = function () {
      L.problems.forEach(function (p) { delete store[keyOf(p.n)]; });
      A.jset("prob", store);
      location.reload();
    };
    stats();
  }

  /* ---------- 章节整页模式（gs01.html 等） ---------- */
  var chapterHost = document.getElementById("chapter");
  if (chapterHost) {
    var cid = document.body.dataset.chapter || "gs01";
    var ids = Object.keys(window.LESSONS || {}).filter(function (k) { return k.indexOf(cid + "_s") === 0; });
    ids.sort(function (a, b) { return (a.split("_s")[1] | 0) - (b.split("_s")[1] | 0); });
    var html = "";
    ids.forEach(function (k) {
      var L = window.LESSONS[k];
      html += '<section class="sec" id="' + k + '"><h2>' + A.esc(L.title) +
        ' <span class="bsub">讲义第 ' + L.pages[0] + "–" + L.pages[1] + " 页</span></h2>" +
        '<div class="lessonbody">' + lessonHtml(L) + "</div>" +
        '<div class="quizwrap"><h3 class="lh">✍️ 本节自测</h3>' +
        '<div class="navrow"><span class="chip" data-score="' + k + '"></span>' +
        '<button class="navbtn" data-reset="' + k + '">重做本节</button></div>' +
        '<div data-quiz="' + k + '"></div></div></section>';
    });
    chapterHost.innerHTML = html;
    ids.forEach(function (k) {
      var L = window.LESSONS[k];
      makeQuiz(L, chapterHost.querySelector('[data-quiz="' + k + '"]'),
        chapterHost.querySelector('[data-score="' + k + '"]'),
        chapterHost.querySelector('[data-reset="' + k + '"]'));
      initProblems(chapterHost, L);
    });

    var nav = document.getElementById("lnav");
    if (nav) {
      var toc = '<div class="toc"><div class="toc-h">📑 本章目录</div>';
      ids.forEach(function (k) {
        var L = window.LESSONS[k];
        toc += '<div class="toc-sec"><a class="toc-l1" href="#' + k + '">' + A.esc(L.title) +
          ' <span class="toc-pg">p' + L.pages[0] + "–" + L.pages[1] + "</span></a>";
        var sec = chapterHost.querySelector("#" + k);
        var body = sec ? sec.querySelector(".lessonbody") : null;
        var hs = body ? body.querySelectorAll("h3.lh, h4.lh2, h5.lh3") : [];
        if (hs.length) {
          toc += '<div class="toc-l2s">';
          Array.prototype.forEach.call(hs, function (h, i) {
            var hid = k + "-h" + i; h.id = hid;
            toc += '<a class="toc-l2" href="#' + hid + '">' + A.esc(h.textContent) + "</a>";
          });
          toc += "</div>";
        }
        toc += "</div>";
      });
      toc += "</div>";
      nav.innerHTML = toc;
    }
    typeset([chapterHost]);
    return;
  }

  /* ---------- 单节模式（lesson.html?id=...） ---------- */
  var host = document.getElementById("lesson");
  if (!host) return;
  var id = (/[?&]id=([^&]+)/.exec(location.search) || [])[1] || "gs01_s0";
  var L = (window.LESSONS || {})[id];
  if (!L) { host.innerHTML = '<p class="empty">未找到该节内容。</p>'; return; }

  document.title = L.ch + " " + L.title + " · 考研数学";
  var h1 = document.getElementById("ltitle"); if (h1) h1.textContent = L.ch + " · " + L.title;
  var meta = document.getElementById("lmeta");
  if (meta) meta.innerHTML = A.esc(L.book) + " ｜ 讲义第 " + L.pages[0] + "–" + L.pages[1] + " 页 ｜ <a href=\"index.html\">← 返回首页</a>";

  var lnav = document.getElementById("lnav");
  if (lnav) {
    var prefix = L.id.split("_s")[0];
    var kids = Object.keys(window.LESSONS).filter(function (k) { return k.indexOf(prefix + "_s") === 0; });
    kids.sort(function (a, b) { return (a.split("_s")[1] | 0) - (b.split("_s")[1] | 0); });
    lnav.innerHTML = "";
    kids.forEach(function (k) {
      var a = document.createElement("a");
      a.className = "navbtn"; a.href = "lesson.html?id=" + k; a.textContent = window.LESSONS[k].title;
      if (k === L.id) a.style.borderColor = "var(--acc)";
      lnav.appendChild(a);
    });
  }

  host.innerHTML = lessonHtml(L);
  typeset([host]);
  makeQuiz(L, document.getElementById("quiz"), document.getElementById("quizscore"), document.getElementById("quizreset"));
  initProblems(host, L);
})();
