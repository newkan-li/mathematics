window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q880_s74"] = {
    id: "q880_s74",
    ch: "880题 · 线代 · 第十章 线性方程组",
    title: "综合题·填空题",
    probTitle: "第十章 综合题 · 填空题（含原书解析）",
    book: "李林《精讲精练 880 题（数学二）》2026",
    problems: [
      { n: "(1)", q: R`设 $\alpha_1,\alpha_2,\alpha_3,\beta$ 均为三维列向量，$A=(\beta-\alpha_1-2\alpha_2-3\alpha_3,\alpha_1,\alpha_2,\alpha_3)$，则方程组 $Ax=\beta$ 的一个特解为 $\underline{\qquad}$。`, a: R`$(1,1,2,3)^T$`, sol: R`【解】取 $x_1=x_2=1,x_3=2,x_4=3$，则 $Ax=(\beta-\alpha_1-2\alpha_2-3\alpha_3)+1\cdot\alpha_1+2\alpha_2+3\alpha_3=\beta$，故 $Ax=\beta$ 有一个特解 $(1,1,2,3)^T$。` },
      { n: "(2)", q: R`设 $A=(a_{ij})_{3\times3}$ 为实矩阵，且 $A_{ij}=a_{ij}\ (i,j=1,2,3)$，其中 $A_{ij}$ 为 $a_{ij}$ 的代数余子式，$a_{33}=1,|A|=1$，则方程组 $A\begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix}=\begin{pmatrix}0\\0\\1\end{pmatrix}$ 的解为 $\underline{\qquad}$。`, a: R`$(0,0,1)^T$`, sol: R`【解】$A_{ij}=a_{ij}$ 即 $A^*=A^T$，故 $\begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix}=A^{-1}\begin{pmatrix}0\\0\\1\end{pmatrix}=\frac{A^*}{|A|}\begin{pmatrix}0\\0\\1\end{pmatrix}=A^T\begin{pmatrix}0\\0\\1\end{pmatrix}=\begin{pmatrix}a_{31}\\a_{32}\\1\end{pmatrix}$。又 $|A|=a_{31}^2+a_{32}^2+1=1$，得 $a_{31}=a_{32}=0$，故解为 $(0,0,1)^T$。` },
      { n: "(3)", q: R`设 $A$ 是 2 阶矩阵，线性方程组 $AX=\begin{pmatrix}3\\2\end{pmatrix}$ 的通解为 $k(-2,1)^T+(3,-4)^T$。若 $\beta=(5,-10)^T$，则 $\beta^TA\beta=\underline{\qquad}$。`, a: R`$-15$`, sol: R`【解】记 $\xi=(-2,1)^T,\eta=(3,-4)^T$，则 $A\xi=0,A\eta=(3,2)^T$。设 $\beta=k_1\xi+k_2\eta=(5,-10)^T$，解得 $k_1=2,k_2=3$，故 $A\beta=A(2\xi+3\eta)=3A\eta=(9,6)^T$，$\beta^TA\beta=(5,-10)\begin{pmatrix}9\\6\end{pmatrix}=-15$。` },
      { n: "(4)", q: R`设 $A$ 为 3 阶矩阵，$\alpha$ 为 3 维非零列向量，向量组 $\alpha,A\alpha,A^2\alpha$ 线性无关，且 $A^3\alpha+2A^2\alpha-3A\alpha=0$，则 $\operatorname{tr}A=\underline{\qquad}$。`, a: R`$-2$`, sol: R`【解】由 $A^3\alpha+2A^2\alpha-3A\alpha=0$ 得 $(0E-A)(A^2\alpha+2A\alpha-3\alpha)=0$ 等，故 $A$ 有特征值 $0,1,-3$（对应特征向量 $A^2\alpha+2A\alpha-3\alpha,A^2\alpha+3A\alpha,-A^2\alpha+A\alpha$），故 $\operatorname{tr}A=0+1-3=-2$。` }
    ]
  };
})();
