(function () {
  var V = window.VIDEOS || [];
  var PREFIX = "math_";
  function jget(n, d) { try { return JSON.parse(localStorage.getItem(PREFIX + n)) || d; } catch (e) { return d; } }
  function jset(n, v) { try { localStorage.setItem(PREFIX + n, JSON.stringify(v)); } catch (e) { } }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]; }); }

  var done = jget("video_done", {});
  var teacher = "", cid = "", q = "";
  var teacherHost = document.getElementById("vteachers");
  var chHost = document.getElementById("vchs");
  var listHost = document.getElementById("vlist");
  var search = document.getElementById("vsearch");
  var countHost = document.getElementById("vcount");
  var modal = document.getElementById("vmodal");
  var frame = document.getElementById("vframe");
  var mtitle = document.getElementById("vtitle");
  var mlink = document.getElementById("vlink");

  function chip(text, on, fn) {
    var b = document.createElement("button");
    b.className = "navbtn" + (on ? " on" : "");
    b.textContent = text;
    b.onclick = fn;
    return b;
  }

  function drawTeachers() {
    teacherHost.innerHTML = "";
    teacherHost.appendChild(chip("全部老师", teacher === "", function () { teacher = ""; drawTeachers(); drawList(); }));
    ["武忠祥", "李永乐"].forEach(function (t) {
      if (!V.some(function (v) { return v.teacher === t; })) return;
      teacherHost.appendChild(chip(t, teacher === t, function () { teacher = teacher === t ? "" : t; drawTeachers(); drawList(); }));
    });
  }

  function drawChs() {
    chHost.innerHTML = "";
    var seen = {}, arr = [];
    V.forEach(function (v) { if (!seen[v.cid]) { seen[v.cid] = 1; arr.push({ cid: v.cid, ch: v.ch }); } });
    chHost.appendChild(chip("全部章节", cid === "", function () { cid = ""; drawChs(); drawList(); }));
    arr.forEach(function (o) {
      chHost.appendChild(chip(o.ch, cid === o.cid, function () { cid = cid === o.cid ? "" : o.cid; drawChs(); drawList(); }));
    });
  }

  function match(v) {
    if (teacher && v.teacher !== teacher) return false;
    if (cid && v.cid !== cid) return false;
    if (q) {
      var s = (v.title + " " + v.ch + " " + v.author + " " + v.note).toLowerCase();
      if (s.indexOf(q.toLowerCase()) < 0) return false;
    }
    return true;
  }

  function openModal(v) {
    mtitle.textContent = v.title;
    mlink.href = "https://www.bilibili.com/video/" + v.bvid + "/";
    frame.src = "https://player.bilibili.com/player.html?bvid=" + encodeURIComponent(v.bvid) + "&page=1&high_quality=1&danmaku=0&autoplay=1";
    modal.classList.add("on");
    document.body.classList.add("vmodal-open");
  }
  function closeModal() {
    modal.classList.remove("on");
    document.body.classList.remove("vmodal-open");
    frame.src = "about:blank";
  }

  function drawList() {
    listHost.innerHTML = "";
    var arr = V.filter(match);
    if (countHost) countHost.textContent = "共 " + arr.length + " 个微课";
    if (!arr.length) { listHost.innerHTML = '<p class="empty">没有匹配的微课。</p>'; return; }
    arr.forEach(function (v) {
      var d = document.createElement("div");
      d.className = "video-card";
      d.innerHTML =
        '<div class="vc-top"><span class="vbadge">' + esc(v.teacher) + '</span><span class="vdur">' + esc(v.dur) + "</span></div>" +
        '<div class="vtitle">' + esc(v.title) + "</div>" +
        '<div class="vmeta">' + esc(v.ch) + " · " + esc(v.author) + "</div>" +
        '<div class="vnote">' + esc(v.note) + "</div>" +
        '<div class="vacts"><button class="navbtn" data-play>▶ 播放</button>' +
        '<a class="navbtn" href="https://www.bilibili.com/video/' + v.bvid + '/" target="_blank" rel="noopener">B站原页</a>' +
        '<a class="navbtn" href="' + v.cid + '.html">对应章节</a>' +
        (v.ex && v.ex.length ? '<a class="navbtn" href="practice.html?cid=' + v.cid + '&ex=' + v.ex.join(",") + '" target="_blank" rel="noopener" data-practice="' + v.cid + '">📝 配套练习 ' + v.ex.length + '</a>' : '') +
        '<button class="navbtn" data-done>' + (done[v.id] ? "✓ 已看" : "标记已看") + "</button></div>";
      d.querySelector("[data-play]").onclick = function () { openModal(v); };
      var px = d.querySelector("[data-practice]");
      if (px) px.onclick = function (e) {
        var w = window.open(px.href, "practice_" + v.cid, "width=1000,height=900,resizable=yes,scrollbars=yes");
        if (w) e.preventDefault();
      };
      var db = d.querySelector("[data-done]");
      if (done[v.id]) db.classList.add("on");
      db.onclick = function () {
        done[v.id] = !done[v.id];
        if (!done[v.id]) delete done[v.id];
        jset("video_done", done);
        db.textContent = done[v.id] ? "✓ 已看" : "标记已看";
        db.classList.toggle("on", !!done[v.id]);
      };
      listHost.appendChild(d);
    });
  }

  document.getElementById("vclose").onclick = closeModal;
  modal.addEventListener("click", function (e) { if (e.target === modal) closeModal(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && modal.classList.contains("on")) closeModal(); });
  search.oninput = function () { q = search.value.trim(); drawList(); };
  document.getElementById("vreset").onclick = function () { teacher = ""; cid = ""; q = ""; search.value = ""; drawTeachers(); drawChs(); drawList(); };

  drawTeachers(); drawChs(); drawList();
})();
