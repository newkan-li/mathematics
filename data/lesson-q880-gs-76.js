window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q880_s75"] = {
    id: "q880_s75",
    ch: "880题 · 线代 · 第十章 线性方程组",
    title: "综合题·解答题",
    probTitle: "第十章 综合题 · 解答题（含原书解析）",
    book: "李林《精讲精练 880 题（数学二）》2026",
    problems: [
      { n: "(1)", q: R`设 $A$ 是 $m\times n$ 矩阵，$r(A)=n-2$，非齐次线性方程组 $Ax=b$ 的 3 个解向量 $\alpha_1,\alpha_2,\alpha_3$ 满足 $\alpha_1+\alpha_2=(1,2,3,4)^T$，$\alpha_2+2\alpha_3=(-2,1,5,3)^T$，$2\alpha_3+3\alpha_1=(11,5,-6,7)^T$，求方程组 $Ax=b$ 的通解。`, a: R`$k_1(7,4,-1,6)^T+k_2(12,2,-14,0)^T+\left(\frac12,1,\frac32,2\right)^T$`, sol: R`【解】$A\left(\frac{\alpha_1+\alpha_2}2\right)=b$，取 $\eta^*=\frac12(\alpha_1+\alpha_2)=\left(\frac12,1,\frac32,2\right)^T$。由 $A[3(\alpha_1+\alpha_2)-2(\alpha_2+2\alpha_3)]=0$ 得 $\eta_1=(7,4,-1,6)^T$；由 $A[(2\alpha_3+3\alpha_1)-(\alpha_1+\alpha_2)-(\alpha_2+2\alpha_3)]=0$ 得 $\eta_2=(12,2,-14,0)^T$，二者线性无关。$r(A)=n-2$ 故为基础解系，通解为 $k_1\eta_1+k_2\eta_2+\eta^*$。` },
      { n: "(2)", q: R`设 $A=(\alpha_1,\alpha_2,\alpha_3,\alpha_4)$ 是 4 阶矩阵，非齐次线性方程组 $Ax=\beta$ 的通解为 $(1,2,2,1)^T+k(1,-2,4,0)^T$，$k$ 为任意常数，记 $B=(\alpha_3,\alpha_2,\alpha_1,\beta-\alpha_4)$。(Ⅰ) 证明：$r(B)=2$；(Ⅱ) 求方程组 $Bx=\alpha_1-\alpha_2$ 的通解。`, a: R`(Ⅰ) 证明见解析；(Ⅱ) $(0,-1,1,0)^T+k_1(4,-2,1,0)^T+k_2(2,-4,0,1)^T$`, sol: R`【证】(Ⅰ) 由解结构知 $r(A)=3$，且 $\alpha_1+2\alpha_2+2\alpha_3+\alpha_4=\beta$，$\alpha_1-2\alpha_2+4\alpha_3=0$。故 $B=(\alpha_3,\alpha_2,\alpha_1,\alpha_1+2\alpha_2+2\alpha_3)$，$r(B)=r(\alpha_3,\alpha_2,\alpha_1)=2$。
【解】(Ⅱ) $(0,-1,1,0)^T$ 是 $Bx=\alpha_1-\alpha_2$ 的一个解；$(4,-2,1,0)^T,(2,-4,0,1)^T$ 是 $Bx=0$ 的两个线性无关的解，构成基础解系，故通解为 $(0,-1,1,0)^T+k_1(4,-2,1,0)^T+k_2(2,-4,0,1)^T$。` },
      { n: "(3)", q: R`设 $A$ 为 $3\times4$ 矩阵，$r(A)=1$，若向量组 $\alpha_1=(1,2,0,2)^T,\alpha_2=(-1,-1,1,a)^T,\alpha_3=(1,-1,a,5)^T,\alpha_4=(2,a,-3,-5)^T$ 与方程组 $Ax=0$ 的基础解系等价，求 $Ax=0$ 的通解。`, a: R`见解析（分 $a=-3,a=1,a=4$ 讨论）`, sol: R`【解】$\alpha_i$ 均为 $Ax=0$ 的解，$r(A)=1$，$Ax=0$ 有 3 个线性无关的解，故 $r(\alpha_1,\alpha_2,\alpha_3,\alpha_4)=3$。对其作初等行变换得 $\begin{pmatrix}1&-1&1&2\\0&1&-3&a-4\\0&0&a+3&1-a\\0&0&0&(1-a)(a-4)\end{pmatrix}$。
当 $a=-3$ 时，$\alpha_1,\alpha_2,\alpha_4$ 为极大无关组，通解 $k_1(1,2,0,2)^T+k_2(1,1,-1,3)^T+k_3(2,-3,-3,-5)^T$；当 $a=1$ 时，通解 $k_1(1,2,0,2)^T+k_2(-1,-1,1,1)^T+k_3(1,-1,1,5)^T$；当 $a=4$ 时，通解 $k_1(1,2,0,2)^T+k_2(-1,-1,1,4)^T+k_3(1,-1,4,5)^T$。` },
      { n: "(4)", q: R`设 $A$ 是 3 阶方阵，$A=(a_{ij})_{3\times3}$，且 $a_{ij}=A_{ij},i,j=1,2,3$，其中 $A_{ij}$ 为 $a_{ij}$ 的代数余子式，$a_{33}\neq0$，$b=(a_{13},a_{23},a_{33})^T$，求非齐次线性方程组 $Ax=b$ 的解。`, a: R`$(0,0,1)^T$`, sol: R`【解】$|A|=a_{13}^2+a_{23}^2+a_{33}^2>0$，故 $r(A)=3$，$Ax=b$ 有唯一解 $x=A^{-1}b=\frac{A^*}b$。$A^*=A^T$，故 $x=\frac1{|A|}\begin{pmatrix}0\\0\\|A|\end{pmatrix}=(0,0,1)^T$。` },
      { n: "(5)", q: R`设 $A$ 是 $m\times n$ 矩阵，$b$ 为 $m$ 维列向量，证明：线性方程组 $A^TAx=A^Tb$ 必有解。`, a: R`证明见解析`, sol: R`【证】只要证 $r(A^TA)=r(A^TA\vdots A^Tb)$。记 $A=(\alpha_1,\cdots,\alpha_n)$，则 $r(A^TA\vdots A^Tb)=r[A^T(\alpha_1,\cdots,\alpha_n\vdots b)]\leqslant r(A^T)=r(A^TA)$，又 $r(A^TA\vdots A^Tb)\geqslant r(A^TA)$，故相等，方程组必有解。` },
      { n: "(6)", q: R`设 $A$ 是 3 阶矩阵，向量 $\beta=(3,3,3)^T$，非齐次线性方程组 $Ax=\beta$ 的通解为 $k_1(1,2,-2)^T+k_2(2,1,2)^T+(1,1,1)^T$，$k_1,k_2$ 为任意常数。(Ⅰ) 证明：任意 3 维列向量 $\alpha$ 可由 $A$ 的三个特征向量线性表示；(Ⅱ) 若 $\alpha=(1,2,-1)^T$，求 $A\alpha$。`, a: R`(Ⅰ) 证明见解析；(Ⅱ) $(3,3,3)^T$`, sol: R`【证】(Ⅰ) 由 $A(1,1,1)^T=(3,3,3)^T=3(1,1,1)^T$ 知 $\lambda_1=3$ 对应特征向量 $\alpha_1=(1,1,1)^T$；由 $A(1,2,-2)^T=0,A(2,1,2)^T=0$ 知 $\lambda_2=\lambda_3=0$ 对应特征向量 $\alpha_2=(1,2,-2)^T,\alpha_3=(2,1,2)^T$。$|\alpha_1,\alpha_2,\alpha_3|=-3\neq0$，故线性无关，可作为 $\mathbf R^3$ 的基，任意 3 维向量可由其线性表示。
【解】(Ⅱ) 设 $\alpha=x_1\alpha_1+x_2\alpha_2+x_3\alpha_3$，解得 $(x_1,x_2,x_3)^T=\left(1,\frac23,-\frac13\right)^T$，故 $A\alpha=3x_1\alpha_1=3(1,1,1)^T=(3,3,3)^T$。` },
      { n: "(7)", q: R`设 $n$ 阶方阵 $A$ 的行列式 $|A|=0$，$A$ 有一个代数余子式 $A_{ij}\neq0$，证明：$Ax=0$ 的通解为 $k(A_{i1},A_{i2},\cdots,A_{in})^T$，$k$ 为任意常数。`, a: R`证明见解析`, sol: R`【证】由 $|A|=0$ 且 $A_{ij}\neq0$ 知 $r(A)=n-1$，$Ax=0$ 只有一个线性无关的解。由 $AA^*=|A|E=O$ 知 $A^*$ 的每一列都是 $Ax=0$ 的解，而 $A_{ij}\neq0$ 说明第 $i$ 行的代数余子式构成的列 $(A_{i1},\cdots,A_{in})^T\neq0$，即为基础解系，故通解为 $k(A_{i1},A_{i2},\cdots,A_{in})^T$。` },
      { n: "(8)", q: R`设 4 维列向量组 $\alpha_1,\alpha_2,\alpha_3,\alpha_4$，且 $\alpha_1,\alpha_2,\alpha_3$ 线性无关，$\alpha_4=\alpha_1+\alpha_2+2\alpha_3$，$B=(\alpha_1-\alpha_2,\alpha_2+\alpha_3,-\alpha_1+k\alpha_2+\alpha_3)$，方程组 $Bx=\alpha_4$ 有无穷多解。求：(Ⅰ) $k$ 的值；(Ⅱ) 方程组的通解。`, a: R`(Ⅰ) $k=2$；(Ⅱ) $(1,2,0)^T+k_1(1,-1,1)^T$`, sol: R`【解】(Ⅰ) $B=(\alpha_1,\alpha_2,\alpha_3)\begin{pmatrix}1&0&-1\\-1&1&k\\0&1&1\end{pmatrix}$，由 $Bx=\alpha_4$ 有无穷多解知 $r(B)<3$，故 $\begin{vmatrix}1&0&-1\\-1&1&k\\0&1&1\end{vmatrix}=0$，得 $k=2$。
(Ⅱ) 由 $\alpha_1,\alpha_2,\alpha_3$ 线性无关，原方程等价于 $\begin{pmatrix}1&0&-1\\-1&1&2\\0&1&1\end{pmatrix}x=\begin{pmatrix}1\\1\\2\end{pmatrix}$，解得通解为 $(1,2,0)^T+k_1(1,-1,1)^T$。` }
    ]
  };
})();
