window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q880_s71"] = {
    id: "q880_s71",
    ch: "880题 · 线代 · 第十章 线性方程组",
    title: "基础题·填空题",
    probTitle: "第十章 基础题 · 填空题（含原书解析）",
    book: "李林《精讲精练 880 题（数学二）》2026",
    problems: [
      { n: "(1)", q: R`设方程组 $\begin{cases}x_1+2x_2+x_3=3\\2x_1+(k+4)x_2-5x_3=6\\-x_1-2x_2+kx_3=-3\end{cases}$ 有无穷多解，则 $k=\underline{\qquad}$。`, a: R`$k=-1$ 或 $k=0$`, sol: R`【解】对增广矩阵作初等行变换得 $\begin{pmatrix}1&2&1&3\\0&k&-7&0\\0&0&k+1&0\end{pmatrix}$，由有无穷多解知 $r(A)=r(\overline A)<3$，故 $k=-1$ 或 $k=0$。` },
      { n: "(2)", q: R`设 $A=\begin{pmatrix}1&2&1\\2&3&a+2\\1&a&-2\end{pmatrix}$，$\beta_1=(1,3,4)^T$，$\beta_2=(0,1,2)^T$，若方程组 $AX=\beta_1$ 有解，且 $AX=\beta_2$ 无解，则 $a=\underline{\qquad}$。`, a: R`$-1$`, sol: R`【解】对 $(A,\beta_1,\beta_2)$ 作初等行变换得 $\begin{pmatrix}1&2&1&1&0\\0&1&-a&-1&-1\\0&0&a^2-2a-3&a+1&a\end{pmatrix}$。由题设 $r(A)=r(A,\beta_1)$ 且 $r(A)\neq r(A,\beta_2)$，需 $a^2-2a-3=0$，得 $a=-1$ 或 $a=3$。当 $a=-1$ 时符合；当 $a=3$ 时 $AX=\beta_1$ 无解，不合。故 $a=-1$。` }
    ]
  };
})();
