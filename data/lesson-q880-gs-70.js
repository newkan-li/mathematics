window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q880_s69"] = {
    id: "q880_s69",
    ch: "880题 · 线代 · 第九章 向量组",
    title: "拓展题",
    probTitle: "第九章 拓展题（含原书解析）",
    book: "李林《精讲精练 880 题（数学二）》2026",
    problems: [
      { n: "(1)", q: R`设向量组 $\alpha_1=(1,1,1,2)^T,\alpha_2=(3,a+4,2a+5,a+7)^T,\alpha_3=(4,6,8,10)^T,\alpha_4=(2,3,2a+3,5)^T,\alpha=(0,1,3,b)^T$。(Ⅰ) 求向量组 $\alpha_1,\alpha_2,\alpha_3,\alpha_4$ 的秩及其一个极大线性无关组；(Ⅱ) 若 $\alpha$ 不能由 $\alpha_1,\alpha_2,\alpha_3,\alpha_4$ 线性表示，求 $a,b$ 的取值。`, a: R`(Ⅰ) $a\neq\frac12$ 时秩为 3，极大无关组 $\alpha_1,\alpha_3,\alpha_4$；$a=\frac12$ 时秩为 2，极大无关组 $\alpha_1,\alpha_2$；(Ⅱ) $a=\frac12$ 或 $b\neq1$`, sol: R`【解】对 $(\alpha_1,\alpha_2,\alpha_3,\alpha_4\mid\alpha)$ 作初等行变换得 $\begin{pmatrix}1&3&4&2&\vdots&0\\0&a+1&2&1&\vdots&1\\0&0&0&2a-1&\vdots&1\\0&0&0&0&\vdots&b-1\end{pmatrix}$。
(Ⅰ) $a\neq\frac12$ 时 $r=3$，$\alpha_1,\alpha_3,\alpha_4$ 为极大无关组；$a=\frac12$ 时 $r=2$，$\alpha_1,\alpha_2$ 为极大无关组。
(Ⅱ) $\alpha$ 不能线性表示即方程组无解，故 $a=\frac12$ 或 $b\neq1$。` },
      { n: "(2)", q: R`设 $A=(\alpha_1,\alpha_2,\alpha_3)$，$\alpha_1=(0,3,c)^T,\alpha_2=(a,2,1)^T,\alpha_3=(b,1,0)^T$，$B=(\beta_1,\beta_2,\beta_3)$，$\beta_1=(1,2,-3)^T,\beta_2=(3,0,1)^T,\beta_3=(9,6,-7)^T$，且 $r(A)=r(B)$，$\alpha_2,\alpha_3$ 可由 $\beta_1,\beta_2,\beta_3$ 线性表示。(Ⅰ) 求 $a,b,c$ 的值；(Ⅱ) 若 $BX=A$，求矩阵 $X$。`, a: R`(Ⅰ) $a=13,b=5,c=-5$；(Ⅱ) $X=\begin{pmatrix}\frac32-3k_1&1-3k_2&\frac12-3k_3\\-\frac12-2k_1&4-2k_2&\frac32-2k_3\\k_1&k_2&k_3\end{pmatrix}$`, sol: R`【解】(Ⅰ) 对 $(\beta_1,\beta_2,\beta_3,\alpha_1,\alpha_2,\alpha_3)$ 作初等行变换得 $\begin{pmatrix}1&3&9&0&a&b\\0&-6&-12&3&2-2a&1-2b\\0&0&0&c+5&\frac{13-a}{3}&\frac{5-b}{3}\end{pmatrix}$。由 $\alpha_2,\alpha_3$ 可由 $\beta_1,\beta_2,\beta_3$ 线性表示得 $a=13,b=5$，由 $r(A)=r(B)$ 得 $c=-5$。
(Ⅱ) 解 $BX=A$，令 $X=(x_{ij})$，分别解三个非齐次方程组，得 $X=\begin{pmatrix}\frac32-3k_1&1-3k_2&\frac12-3k_3\\-\frac12-2k_1&4-2k_2&\frac32-2k_3\\k_1&k_2&k_3\end{pmatrix}$，$k_1,k_2,k_3$ 为任意常数。` }
    ]
  };
})();
