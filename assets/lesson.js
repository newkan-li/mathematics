(function () {
  var A = window.MathApp || {};

  /* ---------- 轻量 Markdown 渲染（保留 $..$ / $$..$$ 数学，正文做 HTML 转义） ---------- */
  function inline(s) {
    return s.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
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
      html += '<p class="sub">共 ' + L.problems.length + " 题，点开每题「详细解答」查看过程。</p>";
      L.problems.forEach(function (p) {
        html += '<div class="prob" id="' + L.id + "-p" + p.n + '">' +
          '<div class="prob-q"><span class="pn">' + p.n + ".</span> " + A.esc(p.q) + "</div>" +
          (p.sol || p.a
            ? '<details class="sol"><summary>详细解答</summary><div class="ansbox">' +
              (p.a ? '<p class="prob-a">答案：' + A.esc(p.a) + "</p>" : "") +
              (p.sol ? renderMarkdown(p.sol) : "") + "</div></details>"
            : "") +
          "</div>";
      });
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
})();
