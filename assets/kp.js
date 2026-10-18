(function () {
  var M = window.MANIFEST || [], L = window.LESSONS || {};
  var order = {};
  M.forEach(function (m, i) { order[m.id] = i; });
  var items = [];
  Object.keys(L).forEach(function (k) {
    if (!/_s9$/.test(k)) return;
    var cid = k.split("_")[0];
    var ch = (M.filter(function (x) { return x.id === cid; })[0] || {}).title || cid;
    (L[k].problems || []).forEach(function (p, i) {
      var tags = String(p.kp || "").split("·").filter(Boolean);
      items.push({ cid: cid, ch: ch, n: p.n, i: i, kp: p.kp || "", tags: tags, ord: (order[cid] == null ? 99 : order[cid]) });
    });
  });
  items.sort(function (a, b) { return a.ord - b.ord || (parseInt(a.n, 10) - parseInt(b.n, 10)); });

  var state = { tag: "", ch: "", q: "" };
  try {
    var qs = new URLSearchParams(location.search);
    state.tag = qs.get("tag") || "";
  } catch (e) { }

  var chHost = document.getElementById("kpchs");
  var tagHost = document.getElementById("kptags");
  var listHost = document.getElementById("kplist");
  var search = document.getElementById("kpsearch");
  var reset = document.getElementById("kpreset");

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  var counts = {};
  items.forEach(function (it) { it.tags.forEach(function (t) { counts[t] = (counts[t] || 0) + 1; }); });
  var tagList = Object.keys(counts).sort(function (a, b) { return counts[b] - counts[a] || a.localeCompare(b); });

  function chip(text, on, fn) {
    var b = document.createElement("button");
    b.className = "chip" + (on ? " on" : "");
    b.textContent = text;
    b.onclick = fn;
    return b;
  }

  function drawChs() {
    chHost.innerHTML = "";
    var seen = {}, arr = [];
    items.forEach(function (it) { if (!seen[it.cid]) { seen[it.cid] = 1; arr.push({ cid: it.cid, ch: it.ch }); } });
    chHost.appendChild(chip("全部章节", state.ch === "", function () { state.ch = ""; drawChs(); drawList(); }));
    arr.forEach(function (o) {
      chHost.appendChild(chip(o.ch, state.ch === o.cid, function () {
        state.ch = state.ch === o.cid ? "" : o.cid;
        drawChs(); drawList();
      }));
    });
  }

  var expanded = false;
  function tagBtn(t) {
    return chip(t + " " + counts[t], state.tag === t, function () {
      state.tag = state.tag === t ? "" : t;
      drawTags(); drawList();
    });
  }
  function drawTags() {
    tagHost.innerHTML = "";
    tagHost.classList.toggle("expanded", expanded);
    tagHost.appendChild(chip("全部考点", state.tag === "", function () { state.tag = ""; drawTags(); drawList(); }));
    var shown = tagList;
    if (!expanded) {
      shown = tagList.slice(0, 16);
      if (state.tag && shown.indexOf(state.tag) < 0) shown = [state.tag].concat(shown);
    }
    shown.forEach(function (t) { tagHost.appendChild(tagBtn(t)); });
    if (tagList.length > 16) {
      if (expanded) {
        tagHost.appendChild(chip("收起", false, function () { expanded = false; drawTags(); }));
      } else {
        tagHost.appendChild(chip("更多考点 +" + (tagList.length - 16), false, function () { expanded = true; drawTags(); }));
      }
    }
  }

  function match(it) {
    if (state.ch && it.cid !== state.ch) return false;
    if (state.tag && it.tags.indexOf(state.tag) < 0) return false;
    if (state.q) {
      var s = (it.ch + " 第" + it.n + "题 " + it.kp).toLowerCase();
      if (s.indexOf(state.q.toLowerCase()) < 0) return false;
    }
    return true;
  }

  function drawList() {
    var arr = items.filter(match);
    var h = '<p class="sub">共 ' + arr.length + " 题" + (state.tag ? " · 考点「" + esc(state.tag) + "」" : "") + "</p>";
    if (!arr.length) h += '<p class="empty">没有匹配的题目，试试其他考点或关键词。</p>';
    arr.forEach(function (it) {
      h += '<div class="fitem"><div class="fh"><a href="' + it.cid + '.html#' + it.cid + "_s9-p" + it.i + '">' +
        esc(it.ch) + " · 第 " + esc(it.n) + " 题</a></div>" +
        '<div class="fnote">🏷 考点：' + it.tags.map(function (t) {
          return '<a href="adv-kp.html?tag=' + encodeURIComponent(t) + '">' + esc(t) + "</a>";
        }).join(" · ") + "</div></div>";
    });
    listHost.innerHTML = h;
  }

  search.oninput = function () { state.q = search.value.trim(); drawList(); };
  reset.onclick = function () { state = { tag: "", ch: "", q: "" }; expanded = false; search.value = ""; drawChs(); drawTags(); drawList(); };

  drawChs(); drawTags(); drawList();
})();
