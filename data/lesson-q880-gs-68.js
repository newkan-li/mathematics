window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q880_s67"] = {
    id: "q880_s67",
    ch: "880题 · 线代 · 第九章 向量组",
    title: "综合题·填空题",
    probTitle: "第九章 综合题 · 填空题（含原书解析）",
    book: "李林《精讲精练 880 题（数学二）》2026",
    problems: [
      { n: "(1)", q: R`设向量组 $\alpha_1=(1,k+2,3)^T,\alpha_2=(2,-1,1)^T,\alpha_3=(k-1,1,-1)^T$ 线性相关，但任意两个向量线性无关，则 $k=\underline{\qquad}$。`, a: R`$-5$`, sol: R`【解】由线性相关 $|\alpha_1,\alpha_2,\alpha_3|=(k+1)(k+5)=0$，得 $k=-1$ 或 $k=-5$。当 $k=-1$ 时 $\alpha_2$ 与 $\alpha_3$ 线性相关，不合题意；故 $k=-5$。` }
    ]
  };
})();
