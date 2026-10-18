(function () {
  function close(m) {
    m.classList.remove("on");
    document.body.classList.remove("vmodal-open");
    var f = m.querySelector("#vframe");
    if (f) f.src = "about:blank";
  }
  window.openVideoModal = function (bvid, title) {
    var m = document.getElementById("vmodal");
    if (!m) {
      m = document.createElement("div");
      m.id = "vmodal";
      m.innerHTML = '<div class="vbox"><div class="vhd"><b id="vtitle"></b><button class="navbtn" id="vclose">关闭</button></div>' +
        '<iframe id="vframe" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen scrolling="no" frameborder="0" src="about:blank"></iframe>' +
        '<div class="vfoot"><a id="vlink" target="_blank" rel="noopener">在 B 站打开</a> ｜ 视频版权归原作者</div></div>';
      document.body.appendChild(m);
      m.addEventListener("click", function (e) { if (e.target === m) close(m); });
      m.querySelector("#vclose").onclick = function () { close(m); };
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && m.classList.contains("on")) close(m);
      });
    }
    m.querySelector("#vtitle").textContent = title || "视频微课";
    m.querySelector("#vlink").href = "https://www.bilibili.com/video/" + bvid + "/";
    m.querySelector("#vframe").src = "https://player.bilibili.com/player.html?bvid=" + encodeURIComponent(bvid) + "&page=1&high_quality=1&danmaku=0&autoplay=1";
    m.classList.add("on");
    document.body.classList.add("vmodal-open");
  };
})();
