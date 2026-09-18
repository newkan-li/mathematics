window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q880_s64"] = {
    id: "q880_s64",
    ch: "880题 · 线代 · 第九章 向量组",
    title: "基础题·填空题",
    probTitle: "第九章 基础题 · 填空题（含原书解析）",
    book: "李林《精讲精练 880 题（数学二）》2026",
    problems: [
      { n: "(1)", q: R`已知向量 $\alpha_1=(1,2,3)^T,\alpha_2=(2,-1,1)^T,\alpha_3=(-2,k,4)^T$ 线性相关，则 $k=\underline{\qquad}$。`, a: R`$6$`, sol: R`【解】$A=(\alpha_1,\alpha_2,\alpha_3)=\begin{pmatrix}1&2&-2\\2&-1&k\\3&1&4\end{pmatrix}\to\begin{pmatrix}1&2&-2\\0&-5&k+4\\0&0&6-k\end{pmatrix}$，由线性相关得 $r(A)<3$，故 $k=6$。` },
      { n: "(2)", q: R`设向量组 (Ⅰ)$\alpha_1=(1,1,2)^T,\alpha_2=(2,3,3)^T$；(Ⅱ)$\beta_1=(2,3,5)^T,\beta_2=(-1,0,1)^T$，则既可由 (Ⅰ) 线性表示，又可由 (Ⅱ) 线性表示的非零列向量为 $\underline{\qquad}$。`, a: R`$k(5,6,9)^T,\ k\neq0$`, sol: R`【解】设 $\gamma=x_1\alpha_1+x_2\alpha_2=-y_1\beta_1-y_2\beta_2$，即 $x_1\alpha_1+x_2\alpha_2+y_1\beta_1+y_2\beta_2=\mathbf0$。对 $(\alpha_1,\alpha_2,\beta_1,\beta_2)$ 作初等行变换化为最简形 $\begin{pmatrix}1&0&0&-3\\0&1&0&-1\\0&0&1&2\end{pmatrix}$，令 $y_2=k\neq0$，得 $\gamma=k(5,6,9)^T$。` }
    ]
  };
})();
