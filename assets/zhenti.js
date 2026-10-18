(function () {
  var YEARS = [];
  for (var y = 2012; y <= 2026; y++) YEARS.push(y);
  var PREFIX = "math_";
  function jget(n, d) { try { return JSON.parse(localStorage.getItem(PREFIX + n)) || d; } catch (e) { return d; } }
  function jset(n, v) { try { localStorage.setItem(PREFIX + n, JSON.stringify(v)); } catch (e) { } }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
      return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c];
    });
  }
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

  var year = 2026, filter = "all", loading = {}, printMode = "";
  var store = jget("zt", {});
  var tabsHost = document.getElementById("zt-years");
  var statHost = document.getElementById("zt-stat");
  var filterHost = document.getElementById("zt-filters");
  var listHost = document.getElementById("zt-list");

  function yearStore() { return store[year] || (store[year] = {}); }
  function save() { jset("zt", store); }

  function ensureYear(y, cb) {
    if (window.ZT && window.ZT[y]) return cb();
    if (loading[y]) { loading[y].push(cb); return; }
    loading[y] = [cb];
    var s = document.createElement("script");
    s.src = "data/zhenti/zt-" + y + ".js?v=20261020a";
    s.onload = function () { var a = loading[y] || []; delete loading[y]; a.forEach(function (f) { f(); }); };
    s.onerror = function () { listHost.innerHTML = '<p class="empty">真题数据加载失败，请刷新重试。</p>'; };
    document.head.appendChild(s);
  }

  function drawTabs() {
    tabsHost.innerHTML = "";
    YEARS.slice().reverse().forEach(function (y) {
      var b = document.createElement("button");
      b.className = "navbtn" + (y === year ? " on" : "");
      b.textContent = y;
      b.onclick = function () { year = y; filter = "all"; ensureYear(y, drawAll); };
      tabsHost.appendChild(b);
    });
  }

  function counts() {
    var d = window.ZT && window.ZT[year];
    if (!d) return { total: 0, done: 0, ok: 0, ch: 0, chDone: 0, chOk: 0 };
    var st = yearStore(), c = { total: d.questions.length, done: 0, ok: 0, ch: 0, chDone: 0, chOk: 0 };
    d.questions.forEach(function (q) {
      var s = st[q.n]; if (!s) return;
      if (q.options) { c.ch++; if (s.pick != null) { c.chDone++; if (s.ok) c.chOk++; } }
      if (s.pick != null || s.done) { c.done++; if (s.ok) c.ok++; }
    });
    return c;
  }

  function drawStat() {
    var c = counts();
    var s = "已答 " + c.done + "/" + c.total + " · 正确 " + c.ok;
    if (c.ch) s += " · 选择题 " + c.chOk + "/" + c.chDone;
    statHost.textContent = s;
  }

  function drawFilters() {
    filterHost.innerHTML = "";
    [["all", "全部"], ["undo", "未做"], ["wrong", "错题"]].forEach(function (o) {
      var b = document.createElement("button");
      b.className = "navbtn" + (filter === o[0] ? " on" : "");
      b.textContent = o[1];
      b.onclick = function () { filter = o[0]; drawFilters(); drawList(); };
      filterHost.appendChild(b);
    });
  }

  function pass(q) {
    var s = yearStore()[q.n];
    if (filter === "undo") return !(s && (s.pick != null || s.done));
    if (filter === "wrong") return !!(s && s.ok === false);
    return true;
  }

  function reveal(card, q) {
    var sol = card.querySelector(".zt-sol");
    if (sol) { sol.hidden = false; typeset([sol]); }
  }

  function updateStat() { drawStat(); }

  function markChoice(card, q, pick) {
    var st = yearStore()[q.n];
    if (st && st.pick != null) return;
    yearStore()[q.n] = { pick: pick, ok: pick === q.ai };
    save();
    var opts = card.querySelectorAll(".qopt");
    Array.prototype.forEach.call(opts, function (b) {
      var i = parseInt(b.getAttribute("data-opt"), 10);
      b.classList.add("locked");
      if (i === q.ai) b.classList.add("right");
      if (i === pick && pick !== q.ai) b.classList.add("wrong");
    });
    reveal(card, q);
    updateStat();
  }

  function grade(card, q, ok) {
    var st = yearStore()[q.n];
    if (st && st.done) return;
    yearStore()[q.n] = { done: true, ok: ok };
    save();
    var btns = card.querySelectorAll("[data-grade]");
    Array.prototype.forEach.call(btns, function (b) {
      b.disabled = true;
      var isOk = b.getAttribute("data-grade") === "ok";
      if ((isOk && ok) || (!isOk && !ok)) b.classList.add(ok ? "on" : "wrong");
    });
    reveal(card, q);
    updateStat();
  }

  function card(q) {
    var st = yearStore()[q.n] || {};
    var isCh = !!q.options;
    var div = document.createElement("div");
    div.className = "fitem zt-item";
    var h = '<div class="zt-h"><span class="zt-no">' + q.n + "</span>" +
      '<span class="zt-type">' + esc(q.type || "") + "</span>" +
      (q.kp ? '<span class="zt-kp" title="' + esc(q.kp) + '">🏷 ' + esc(q.kp.length > 48 ? q.kp.slice(0, 48) + "…" : q.kp) + "</span>" : "") + "</div>";
    h += '<div class="zt-stem">' + md(q.stem) + "</div>";
    if (isCh) {
      h += '<div class="qopts">';
      q.options.forEach(function (o, i) {
        h += '<button class="qopt" data-opt="' + i + '">' + "ABCD"[i] + ". " + esc(o) + "</button>";
      });
      h += "</div>";
    } else {
      h += '<div class="navrow"><button class="navbtn" data-show>显示答案与解析</button></div>';
    }
    h += '<div class="zt-sol" hidden><div class="zt-ans"><b>答案：</b>' + (q.answer ? esc(q.answer) : (isCh ? "" : "见解析")) + '</div><div class="ansbox">' + md(q.sol) + "</div></div>";
    if (!isCh) {
      h += '<div class="navrow zt-grade"><button class="navbtn" data-grade="ok">✓ 我做对了</button><button class="navbtn" data-grade="no">✗ 我做错了</button></div>';
    }
    div.innerHTML = h;

    if (isCh && st.pick != null) {
      Array.prototype.forEach.call(div.querySelectorAll(".qopt"), function (b) {
        var i = parseInt(b.getAttribute("data-opt"), 10);
        b.classList.add("locked");
        if (i === q.ai) b.classList.add("right");
        if (i === st.pick && st.pick !== q.ai) b.classList.add("wrong");
      });
      reveal(div, q);
    }
    if (!isCh && st.done) {
      Array.prototype.forEach.call(div.querySelectorAll("[data-grade]"), function (b) {
        b.disabled = true;
        var isOk = b.getAttribute("data-grade") === "ok";
        if ((isOk && st.ok) || (!isOk && !st.ok)) b.classList.add(st.ok ? "on" : "wrong");
      });
      reveal(div, q);
    }
    if (isCh) {
      Array.prototype.forEach.call(div.querySelectorAll(".qopt"), function (b) {
        b.onclick = function () { markChoice(div, q, parseInt(b.getAttribute("data-opt"), 10)); };
      });
    } else {
      var show = div.querySelector("[data-show]");
      if (show) show.onclick = function () { reveal(div, q); show.disabled = true; show.textContent = "已显示答案与解析"; };
      Array.prototype.forEach.call(div.querySelectorAll("[data-grade]"), function (b) {
        b.onclick = function () { grade(div, q, b.getAttribute("data-grade") === "ok"); };
      });
    }
    return div;
  }

  function drawList() {
    var d = window.ZT && window.ZT[year];
    if (!d) { listHost.innerHTML = '<p class="empty">加载中…</p>'; return; }
    var ph = document.getElementById("zt-print-head");
    if (ph) ph.textContent = year + " 年数学二真题（数学二）";
    listHost.innerHTML = "";
    var arr = d.questions.filter(pass);
    if (!arr.length) { listHost.innerHTML = '<p class="empty">当前筛选下没有题目。</p>'; return; }
    arr.forEach(function (q) { listHost.appendChild(card(q)); });
    typeset([listHost]);
    drawStat();
  }

  function setPrintMode(mode, doPrint) {
    printMode = mode || "";
    document.body.classList.remove("print-paper", "print-answer");
    if (printMode) document.body.classList.add("print-" + printMode);
    if (printMode === "answer") {
      Array.prototype.forEach.call(document.querySelectorAll(".zt-sol"), function (el) { el.hidden = false; });
      typeset([listHost]);
    }
    if (doPrint) {
      if (window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([listHost]).then(function () { window.print(); });
      else setTimeout(function () { window.print(); }, 800);
    }
  }
  function drawAll() { drawTabs(); drawFilters(); drawList(); }

  document.getElementById("zt-print-paper").onclick = function () { setPrintMode("paper", true); };
  document.getElementById("zt-print-answer").onclick = function () { setPrintMode("answer", true); };
  window.addEventListener("afterprint", function () { document.body.classList.remove("print-paper", "print-answer"); });

  document.getElementById("zt-reset").onclick = function () {
    if (!window.ZT || !window.ZT[year]) return;
    if (!confirm("确定清空 " + year + " 年的作答记录？")) return;
    store[year] = {}; save(); drawAll();
  };

  var qp = new URLSearchParams(location.search);
  var qy = parseInt(qp.get("year"), 10);
  if (qy >= 2012 && qy <= 2026) year = qy;
  var qm = qp.get("mode");
  ensureYear(year, function () {
    var h = parseInt((location.hash || "").replace("#", ""), 10);
    if (!qy && h >= 2012 && h <= 2026) year = h;
    ensureYear(year, function () {
      drawAll();
      if (qm === "paper" || qm === "answer") setPrintMode(qm, false);
    });
  });
})();
