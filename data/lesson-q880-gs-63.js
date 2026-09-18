window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q880_s62"] = {
    id: "q880_s62",
    ch: "880题 · 线代 · 第八章 矩阵",
    title: "拓展题",
    probTitle: "第八章 拓展题（含原书解析）",
    book: "李林《精讲精练 880 题（数学二）》2026",
    problems: [
      { n: "(1)", q: R`设 $A=\begin{pmatrix}3&2&2\\0&1&1\\0&0&3\end{pmatrix},B=\begin{pmatrix}1&0&0\\0&0&0\\0&0&-1\end{pmatrix}$，若矩阵 $X$ 满足 $AX+2B=BA+2X$，求 $X^2$。`, a: R`$X^2=\begin{pmatrix}1&2&-2\\0&0&1\\0&0&1\end{pmatrix}$`, sol: R`【解】$AX+2B=BA+2X$ 变形为 $(A-2E)X=B(A-2E)$。$A-2E=\begin{pmatrix}1&2&2\\0&-1&1\\0&0&1\end{pmatrix}$ 可逆，故 $X=(A-2E)^{-1}B(A-2E)$，$X^2=(A-2E)^{-1}B^2(A-2E)=\begin{pmatrix}1&2&-2\\0&0&1\\0&0&1\end{pmatrix}$。` },
      { n: "(2)", q: R`设列向量 $\alpha=(1,2,1)^T,\beta=\left(1,\frac12,0\right)^T,\gamma=(0,0,8)^T,A=\alpha\beta^T,B=\beta^T\alpha$，且 $2B^2A^2x=A^4x+B^4x+\gamma$，求 $x$。`, a: R`$x=\left(k,2k,k-\frac12\right)^T$（$k$ 为任意常数）`, sol: R`【解】$B=\beta^T\alpha=2$ 为数，$A^2=\alpha(\beta^T\alpha)\beta^T=2A=BA$，$A^4=B^3A$。代入得 $(B^3A-B^4E)x=\gamma$，其中 $A=\begin{pmatrix}1&\frac12&0\\2&1&0\\1&\frac12&0\end{pmatrix},B=2$，即 $\begin{pmatrix}-8&4&0\\16&-8&0\\8&4&-16\end{pmatrix}x=\begin{pmatrix}0\\0\\8\end{pmatrix}$，解得 $x=\left(k,2k,k-\frac12\right)^T$，$k$ 为任意常数。` }
    ]
  };
})();
