window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q880_s60"] = {
    id: "q880_s60",
    ch: "880题 · 线代 · 第八章 矩阵",
    title: "综合题·填空题",
    probTitle: "第八章 综合题 · 填空题（含原书解析）",
    book: "李林《精讲精练 880 题（数学二）》2026",
    problems: [
      { n: "(1)", q: R`设 $A,B$ 是 $n$ 阶方阵，$|A|=2$，$|B|=3$，$A^*,B^*$ 分别是 $A,B$ 的伴随矩阵，$C=\begin{pmatrix}A&O\\O&B\end{pmatrix}$，则 $C^*=\underline{\qquad}$。`, a: R`$\begin{pmatrix}3A^*&O\\O&2B^*\end{pmatrix}$`, sol: R`【解】$C^*=|C|C^{-1}=|A||B|\begin{pmatrix}A^{-1}&O\\O&B^{-1}\end{pmatrix}=\begin{pmatrix}|B|A^*&O\\O&|A|B^*\end{pmatrix}=\begin{pmatrix}3A^*&O\\O&2B^*\end{pmatrix}$。
【注】$\begin{pmatrix}A&O\\O&B\end{pmatrix}^{-1}=\begin{pmatrix}A^{-1}&O\\O&B^{-1}\end{pmatrix}$，$\begin{pmatrix}O&A\\B&O\end{pmatrix}^{-1}=\begin{pmatrix}O&B^{-1}\\A^{-1}&O\end{pmatrix}$。` },
      { n: "(2)", q: R`设 $A$ 是 $n$ 阶可逆矩阵，$A$ 的每行元素之和均为 $k$，则 $A^{-1}$ 的每行元素之和均为 $\underline{\qquad}$。`, a: R`$\frac1k$`, sol: R`【解】将 $A$ 按列分块 $A=(\alpha_1,\cdots,\alpha_n)$，由 $A^{-1}A=E$ 得 $A^{-1}\alpha_i=e_i$，故 $A^{-1}(\alpha_1+\cdots+\alpha_n)=(1,\cdots,1)^T$，即 $k(\beta_1+\cdots+\beta_n)=(1,\cdots,1)^T$，故 $A^{-1}$ 的每行元素之和均为 $\frac1k$。` },
      { n: "(3)", q: R`设 $A=\begin{pmatrix}1&-1&-1&-1\\-1&1&-1&-1\\-1&-1&1&-1\\-1&-1&-1&1\end{pmatrix}$，则 $A^n(n\geqslant1)=\underline{\qquad}$。`, a: R`$\begin{cases}4^{k-1}A,&n=2k-1,\\4^kE,&n=2k\end{cases}(k=1,2,\cdots)$`, sol: R`【解】$A^2=4E$，$A^3=4A$，故 $A^n=\begin{cases}4^{k-1}A,&n=2k-1,\\4^kE,&n=2k\end{cases}$。` },
      { n: "(4)", q: R`设 $A=\begin{pmatrix}0&1&0&0\\0&0&1&0\\0&0&0&1\\0&0&0&0\end{pmatrix}$，则 $(E+A)^{-1}=\underline{\qquad}$。`, a: R`$\begin{pmatrix}1&-1&1&-1\\0&1&-1&1\\0&0&1&-1\\0&0&0&1\end{pmatrix}$`, sol: R`【解】$A^4=O$，故 $(E+A)(E-A+A^2-A^3)=E$，即 $(E+A)^{-1}=E-A+A^2-A^3=\begin{pmatrix}1&-1&1&-1\\0&1&-1&1\\0&0&1&-1\\0&0&0&1\end{pmatrix}$。
【注】$A^k=O$ 时 $(E-A)^{-1}=E+A+\cdots+A^{k-1}$。` }
    ]
  };
})();
