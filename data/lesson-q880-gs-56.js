window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q880_s55"] = {
    id: "q880_s55",
    ch: "880题 · 线代 · 第七章 行列式",
    title: "拓展题",
    probTitle: "第七章 拓展题（含原书解析）",
    book: "李林《精讲精练 880 题（数学二）》2026",
    problems: [
      { n: "(1)", q: R`设矩阵 $A$ 为 3 阶非零实矩阵，$A^T=A^*$，且 $|E+A|=|E-A|=0$，计算行列式 $|A^2-A-3E|$。`, a: R`$-3$`, sol: R`【解】由 $AA^T=|A|E$ 得 $|A|^2=|A|^3$，即 $|A|^2(1-|A|)=0$。$A\neq O$ 且 $a_{ji}=A_{ji}$，故 $|A|=a_{11}^2+a_{12}^2+a_{13}^2\neq0$，于是 $|A|=1$。由 $|E+A|=0$ 得特征值 $\lambda_1=-1$，由 $|E-A|=0$ 得 $\lambda_2=1$，由 $|A|=\lambda_1\lambda_2\lambda_3$ 得 $\lambda_3=-1$。$A^2-A-3E$ 的特征值为 $-1,-3,-1$，故 $|A^2-A-3E|=-3$。` },
      { n: "(2)", q: R`设 $A$ 为 3 阶非零实矩阵，且 $A^T=kA^*$（$k$ 为非零常数）。(Ⅰ) 证明：$A$ 是可逆矩阵；(Ⅱ) 求行列式 $|A^{-1}|+|(A^*)^{-1}|$。`, a: R`(Ⅰ) 证明见解析；(Ⅱ) $k^3+k^6$`, sol: R`【证】(Ⅰ) $A\neq O$，不妨设 $a_{11}\neq0$，由 $a_{ji}=kA_{ji}$ 得 $|A|=a_{11}A_{11}+a_{12}A_{12}+a_{13}A_{13}=\frac1k(a_{11}^2+a_{12}^2+a_{13}^2)\neq0$，故 $A$ 可逆。
【解】(Ⅱ) 由 $AA^*=\frac1kAA^T=|A|E$，取行列式得 $\frac1{k^3}|A|^2=|A|^3$，由 $|A|\neq0$ 得 $|A|=\frac1{k^3}$，故 $|A^{-1}|=k^3$。又 $(A^*)^{-1}=\frac A{|A|}$，故 $|(A^*)^{-1}|=\frac1{|A|^2}=k^6$，所以 $|A^{-1}|+|(A^*)^{-1}|=k^3+k^6$。` },
      { n: "(3)", q: R`设 3 阶矩阵 $A$ 的特征值为 $1,-1,2$，计算行列式 $\left||A|\cdot\begin{pmatrix}O&A^*\\-2E&A\end{pmatrix}\right|$。`, a: R`$2^{11}$`, sol: R`【解】$|A|=1\times(-1)\times2=-2$，$|A^*|=|A|^2=4$。故 $\left||A|\begin{pmatrix}O&A^*\\-2E&A\end{pmatrix}\right|=|A|^6\cdot(-1)^9|A^*|\cdot|-2E|=(-2)^6\times(-1)\times4\times(-8)=2^{11}$。` },
      { n: "(4)", q: R`设行列式 $|A|=\begin{vmatrix}2&2&2&2\\1&a_1&a_2&a_3\\1&b_1&b_2&b_3\\1&c_1&c_2&c_3\end{vmatrix}=1$，$A_{ij}$ 是 $|A|$ 中元素 $a_{ij}$ 的代数余子式，求 $\sum\limits_{i=1}^4\sum\limits_{j=1}^4A_{ij}$。`, a: R`$\frac12$`, sol: R`【解】$|A|=2(A_{11}+A_{12}+A_{13}+A_{14})=1$，故 $A_{11}+A_{12}+A_{13}+A_{14}=\frac12$。由错位展开公式，其余三行代数余子式之和均为 0，故 $\sum\limits_{i=1}^4\sum\limits_{j=1}^4A_{ij}=\frac12$。
【注】错位展开公式：$i\neq j$ 时 $a_{i1}A_{j1}+a_{i2}A_{j2}+\cdots+a_{in}A_{jn}=0$。` }
    ]
  };
})();
