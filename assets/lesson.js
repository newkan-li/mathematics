(function () {
  var A = window.MathApp || {};
  var host = document.getElementById("lesson");
  if (!host) return;
  var id = (/[?&]id=([^&]+)/.exec(location.search) || [])[1] || "gs01_s0";
  var L = (window.LESSONS || {})[id];
  if (!L) { host.innerHTML = '<p class="empty">未找到该节内容。</p>'; return; }

  document.title = L.ch + " " + L.title + " · 考研数学";
  var h1 = document.getElementById("ltitle"); if (h1) h1.textContent = L.ch + " · " + L.title;
  var meta = document.getElementById("lmeta");
  if (meta) meta.innerHTML = A.esc(L.book) + " ｜ 讲义第 " + L.pages[0] + "–" + L.pages[1] + " 页 ｜ <a href=\"index.html\">← 返回首页</a>";

  var nav = document.getElementById("lnav");
  if (nav) {
    var prefix = L.id.split("_s")[0];
    var ids = Object.keys(window.LESSONS).filter(function (k) { return k.indexOf(prefix + "_s") === 0; });
    ids.sort(function (a, b) { return (a.split("_s")[1] | 0) - (b.split("_s")[1] | 0); });
    nav.innerHTML = "";
    ids.forEach(function (k) {
      var a = document.createElement("a");
      a.className = "navbtn";
      a.href = "lesson.html?id=" + k;
      a.textContent = window.LESSONS[k].title;
      if (k === L.id) a.style.borderColor = "var(--acc)";
      nav.appendChild(a);
    });
  }

  function typeset(nodes) { if (window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise(nodes); }

  var html = "";
  L.blocks.forEach(function (b) {
    if (b.t === "h") html += '<h3 class="lh">' + A.esc(b.x) + '</h3>';
    else if (b.t === "h2") html += '<h4 class="lh2">' + A.esc(b.x) + '</h4>';
    else if (b.t === "p") html += '<p>' + A.esc(b.x) + '</p>';
    else if (b.t === "note") html += '<div class="notes">' + A.esc(b.x) + '</div>';
    else if (b.t === "fml") html += '<div class="fml">' + A.esc(b.x) + '</div>';
    else if (b.t === "ex") html += '<div class="ex"><div class="ex-q">' + A.esc(b.q) + '</div>' +
      '<details class="sol"><summary>解答</summary><div class="ansbox">' + A.esc(b.sol) + '</div></details></div>';
  });
  html += '<details class="pages"><summary>📖 对照讲义原页（可选）</summary><div class="imglist">';
  for (var p = L.pages[0]; p <= L.pages[1]; p++) {
    html += '<figure><img loading="lazy" src="' + L.img + '/p-' + String(p).padStart(3, "0") +
      '.jpg" alt="p' + p + '"><figcaption>第 ' + p + ' 页</figcaption></figure>';
  }
  html += '</div></details>';
  host.innerHTML = html;
  typeset([host]);

  var qhost = document.getElementById("quiz");
  if (!qhost || !L.quiz) return;
  var store = A.jget("quiz", {});
  function keyOf(i) { return L.id + "_q" + i; }

  function draw() {
    qhost.innerHTML = "";
    var answered = 0, correct = 0;
    L.quiz.forEach(function (q, i) {
      var key = keyOf(i), st = store[key] || {};
      var d = A.el("div", "qitem"); d.id = "q" + i;
      d.innerHTML = '<div class="qq">' + (i + 1) + ". " + A.esc(q.q) + '</div>';
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
    var sc = document.getElementById("quizscore");
    if (sc) sc.textContent = "已答 " + answered + "/" + L.quiz.length + " · 正确 " + correct;
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

  var reset = document.getElementById("quizreset");
  if (reset) reset.onclick = function () {
    var all = A.jget("quiz", {});
    L.quiz.forEach(function (q, i) { delete all[keyOf(i)]; A.srsForget(keyOf(i)); });
    A.jset("quiz", all); store = all; draw();
  };

  draw();
})();
