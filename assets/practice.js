(function () {
  var PREFIX = "math_";
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

  var qs = new URLSearchParams(location.search);
  var cid = qs.get("cid") || "jc01";
  var ex = (qs.get("ex") || "1").split(",").map(function (x) { return parseInt(x, 10); }).filter(function (x) { return x > 0; });
  var host = document.getElementById("phost"), meta = document.getElementById("pmeta");
  var store = jget("prob", {});
  function keyOf(n) { return cid + "_s9:" + n; }
  function save() { jset("prob", store); }

  function reveal(card) { var s = card.querySelector(".zt-sol"); if (s) { s.hidden = false; typeset([s]); } }

  function parseChoice(p) {
    var m = p.a && /^\(([A-D])\)$/.exec(String(p.a).trim());
    if (!m || !p.q) return null;
    var q = String(p.q).replace(/（([A-D])）/g, "($1)"), idx = [];
    for (var i = 0; i < 4; i++) idx.push(q.indexOf("(" + "ABCD"[i] + ")"));
    for (i = 0; i < 4; i++) if (idx[i] < 0) return null;
    for (i = 1; i < 4; i++) if (idx[i] < idx[i - 1]) return null;
    var stem = q.slice(0, idx[0]).trim(), opts = [];
    for (i = 0; i < 4; i++) {
      var end = i < 3 ? idx[i + 1] : q.length;
      opts.push(q.slice(idx[i] + 3, end).replace(/^[、:：\s]+/, "").replace(/[\s　]+$/, ""));
    }
    return { stem: stem, options: opts, ai: "ABCD".indexOf(m[1]) };
  }

  function card(q, idx) {
    var st = store[keyOf(q.n)] || {};
    var c = parseChoice(q), isCh = !!c;
    var d = document.createElement("div");
    d.className = "fitem practice-q";
    var h = '<div class="mock-qh"><b>第 ' + (idx + 1) + ' 题</b><span class="chip">' + (isCh ? "选择题" : "解答/证明") +
      (q.kp ? " · " + esc(q.kp) : "") + "</span></div>" +
      '<div class="zt-stem">' + md(isCh ? c.stem : q.q) + "</div>";
    if (isCh) {
      h += '<div class="qopts">';
      c.options.forEach(function (o, i) {
        h += '<button class="qopt" data-opt="' + i + '">' + "ABCD"[i] + ". " + esc(o) + "</button>";
      });
      h += "</div>";
    } else {
      h += '<div class="navrow"><button class="navbtn" data-show>显示答案与解析</button></div>';
    }
    h += '<div class="zt-sol" hidden><div class="ansbox"><p><b>答案：</b>' + esc(q.a || "见解析") + "</p>" + md(q.sol) + "</div>";
    if (!isCh) h += '<div class="navrow zt-grade"><button class="navbtn" data-grade="ok">✓ 我做对了</button><button class="navbtn" data-grade="no">✗ 我做错了</button></div>';
    h += "</div>";
    d.innerHTML = h;

    if (isCh) {
      var mark = function () {
        Array.prototype.forEach.call(d.querySelectorAll(".qopt"), function (b) {
          var i = +b.getAttribute("data-opt");
          b.classList.add("locked");
          if (i === c.ai) b.classList.add("right");
          if (st.pick === i && i !== c.ai) b.classList.add("wrong");
        });
        reveal(d);
      };
      if (st.pick != null) mark();
      Array.prototype.forEach.call(d.querySelectorAll(".qopt"), function (b) {
        b.onclick = function () {
          if (st.pick != null) return;
          var i = +b.getAttribute("data-opt");
          st = { pick: i, ok: i === c.ai, q: c.stem, options: c.options, answer: q.a };
          store[keyOf(q.n)] = st; save(); mark();
        };
      });
    } else {
      var show = d.querySelector("[data-show]");
      if (show) show.onclick = function () { reveal(d); show.disabled = true; show.textContent = "已显示答案与解析"; };
      Array.prototype.forEach.call(d.querySelectorAll("[data-grade]"), function (b) {
        b.onclick = function () {
          if (store[keyOf(q.n)]) return;
          var ok = b.getAttribute("data-grade") === "ok";
          store[keyOf(q.n)] = { ok: ok, q: q.q, a: q.a, sol: q.sol };
          save(); reveal(d);
          Array.prototype.forEach.call(d.querySelectorAll("[data-grade]"), function (x) { x.disabled = true; });
          b.classList.add(ok ? "on" : "wrong");
        };
      });
      if (st.ok != null) {
        reveal(d);
        Array.prototype.forEach.call(d.querySelectorAll("[data-grade]"), function (x) { x.disabled = true; });
        var yes = d.querySelector('[data-grade="ok"]'), no = d.querySelector('[data-grade="no"]');
        if (st.ok && yes) yes.classList.add("on");
        if (!st.ok && no) no.classList.add("wrong");
      }
    }
    return d;
  }
  var s = document.createElement("script");
  s.src = "data/lesson-" + cid + "-adv.js?v=20261022b";
  s.onload = function () {
    var L = window.LESSONS && window.LESSONS[cid + "_s9"];
    if (!L) { host.innerHTML = '<p class="empty">未找到该章练习。</p>'; return; }
    document.title = L.ch + " · 配套练习";
    meta.textContent = L.ch + " ｜ 共 " + ex.length + " 題 ｜ 做完自动进入错题本";
    ex.forEach(function (n, i) {
      var q = L.problems.filter(function (p) { return +p.n === n; })[0];
      if (q) host.appendChild(card(q, i));
    });
    document.getElementById("pfull").href = cid + ".html#" + cid + "_s9-p" + (ex[0] - 1);
    typeset([host]);
  };
  s.onerror = function () { host.innerHTML = '<p class="empty">练习数据加载失败。</p>'; };
  document.head.appendChild(s);

  document.getElementById("pclose").onclick = function () {
    try { window.close(); } catch (e) { }
    setTimeout(function () { if (!window.closed) history.back(); }, 200);
  };
})();
