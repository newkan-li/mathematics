window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q880_s76"] = {
    id: "q880_s76",
    ch: "880题 · 线代 · 第十章 线性方程组",
    title: "拓展题",
    probTitle: "第十章 拓展题（含原书解析）",
    book: "李林《精讲精练 880 题（数学二）》2026",
    problems: [
      { n: "(1)", q: R`设 $A=\begin{pmatrix}1&-2&3\\a_{21}&a_{22}&a_{23}\\a_{31}&a_{32}&a_{33}\end{pmatrix}$ 有特征向量 $\alpha_1=(1,2,1)^T,\alpha_2=(-1,1,1)^T,\alpha_3=(-1,3,2)^T$，求方程组 $\begin{cases}x_1-2x_2+3x_3=-1\\a_{21}x_1+a_{22}x_2+a_{23}x_3=3\\a_{31}x_1+a_{32}x_2+a_{33}x_3=2\end{cases}$ 的通解。`, a: R`$k_1\alpha_1+k_2\alpha_2+\alpha_3$，即 $k_1(1,2,1)^T+k_2(-1,1,1)^T+(-1,3,2)^T$`, sol: R`【解】由 $A\alpha_1$ 的第 1 分量为 $1\cdot1-2\cdot2+3\cdot1=0$，知 $\lambda_1=0$，即 $A\alpha_1=0$；同理 $A\alpha_2=0$；由 $A\alpha_3$ 的第 1 分量 $=-1-6+6=-1=\lambda_3\cdot(-1)$，知 $\lambda_3=1$，即 $A\alpha_3=\alpha_3$。故 $r(A)=1$，$Ax=0$ 有 2 个基础解，所求通解为 $k_1\alpha_1+k_2\alpha_2+\alpha_3$。` },
      { n: "(2)", q: R`设 $A=\frac12\begin{pmatrix}1&2a&1\\-1&\sqrt2&2b\\\sqrt2&2c&-\sqrt2\end{pmatrix}$。(Ⅰ) 若 $A$ 是正交矩阵，求 $a,b,c$ 的值；(Ⅱ) 当 $A$ 为正交矩阵时，求方程组 $Ax=\begin{pmatrix}1\\1\\1\end{pmatrix}$ 的解。`, a: R`(Ⅰ) $a=\frac1{\sqrt2},b=-\frac12,c=0$；(Ⅱ) $x=\frac1{\sqrt2}(1,2,-1)^T$`, sol: R`【解】(Ⅰ) $A$ 的列向量为两两正交的单位向量，由内积为零得 $\begin{cases}2a-\sqrt2+2\sqrt2c=0\\1-2b-2=0\\2a+2\sqrt2b-2\sqrt2c=0\end{cases}$，解得 $a=\frac1{\sqrt2},b=-\frac12,c=0$。
(Ⅱ) $x=A^{-1}(1,1,1)^T=A^T(1,1,1)^T=\frac1{\sqrt2}(1,2,-1)^T$。` }
    ]
  };
})();
