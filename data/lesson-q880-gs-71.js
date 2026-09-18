window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q880_s70"] = {
    id: "q880_s70",
    ch: "880题 · 线代 · 第十章 线性方程组",
    title: "基础题·选择题",
    probTitle: "第十章 基础题 · 选择题（含原书解析）",
    book: "李林《精讲精练 880 题（数学二）》2026",
    problems: [
      { n: "(1)", q: R`已知 $\eta_1,\eta_2$ 是非齐次线性方程组 $Ax=b$ 的两个不同解，$\xi_1,\xi_2$ 是对应齐次线性方程组 $Ax=0$ 的基础解系，$k_1,k_2$ 为任意常数，则 $Ax=b$ 的通解为（ ）。
(A) $k_1\xi_1+k_2(\xi_1+\xi_2)+\frac{\eta_1-\eta_2}2$
(B) $k_1\xi_1+k_2(\xi_1-\xi_2)+\frac{\eta_1+\eta_2}2$
(C) $k_1\xi_1+k_2(\eta_1+\eta_2)+\frac{\eta_1-\eta_2}2$
(D) $k_1\xi_1+k_2(\eta_1-\eta_2)+\frac{\eta_1+\eta_2}2$`, a: R`(B)`, sol: R`【解】$\frac{\eta_1+\eta_2}2$ 是 $Ax=b$ 的解，$\xi_1$ 与 $\xi_1-\xi_2$ 线性无关，是 $Ax=0$ 的基础解系，故选项 B 正确。` },
      { n: "(2)", q: R`设 $A$ 是 $n(n\geqslant3)$ 阶矩阵，$A^*$ 是 $A$ 的伴随矩阵，线性方程组 $AX=0$ 有两个线性无关的解，则（ ）。
(A) $AX=0$ 与 $A^*X=0$ 同解
(B) $A^*X=0$ 的解均是 $AX=0$ 的解
(C) $AX=0$ 的解均是 $A^*X=0$ 的解
(D) $AX=0$ 与 $A^*X=0$ 没有非零公共解`, a: R`(C)`, sol: R`【解】由 $AX=0$ 有两个线性无关解知 $n-r(A)\geqslant2$，即 $r(A)\leqslant n-2$，故 $r(A^*)=0$，$A^*=O$，任意 $n$ 维向量都是 $A^*X=0$ 的解，故 $AX=0$ 的解都是 $A^*X=0$ 的解，选项 C 正确。` },
      { n: "(3)", q: R`设 $A$ 是 $n$ 阶矩阵，对方程组 (Ⅰ)$Ax=0$ 和 (Ⅱ)$A^TAx=0$，必有（ ）。
(A) (Ⅱ) 的解是 (Ⅰ) 的解，(Ⅰ) 的解也是 (Ⅱ) 的解
(B) (Ⅱ) 的解是 (Ⅰ) 的解，但 (Ⅰ) 的解不是 (Ⅱ) 的解
(C) (Ⅰ) 的解不是 (Ⅱ) 的解，(Ⅱ) 的解也不是 (Ⅰ) 的解
(D) (Ⅰ) 的解是 (Ⅱ) 的解，但 (Ⅱ) 的解不是 (Ⅰ) 的解`, a: R`(A)`, sol: R`【解】由 $Ax=0$ 得 $A^TAx=0$。反之若 $A^TAx=0$，令 $Ax=b$，则 $b^Tb=x^TA^TAx=0$，故 $b=0$，即 $Ax=0$。两方程组同解，选项 A 正确。` },
      { n: "(4)", q: R`设 $A$ 是 $n$ 阶矩阵，若对任意的 $n$ 维列向量 $\alpha$，有 $A^*\alpha=0$，则 $Ax=0$ 的基础解系所含解向量的个数 $k$ 满足（ ）。
(A) $k=0$
(B) $k=1$
(C) $k>1$
(D) $k=n$`, a: R`(C)`, sol: R`【解】$A^*\alpha=0$ 对任意 $\alpha$ 成立，故 $r(A^*)=0$，由秩关系得 $r(A)<n-1$，故 $k=n-r(A)>1$，选项 C 正确。` },
      { n: "(5)", q: R`设方程组 $\begin{cases}\lambda x_1+x_2+\lambda^2x_3=0\\x_1+\lambda x_2+x_3=0\\x_1+x_2+\lambda x_3=0\end{cases}$ 的系数矩阵为 $A$，若存在 3 阶矩阵 $B\neq O$，使得 $AB=O$，则必有（ ）。
(A) $\lambda=-2$ 且 $|B|=0$
(B) $\lambda=-2$ 且 $|B|\neq0$
(C) $\lambda=1$ 且 $|B|=0$
(D) $\lambda=1$ 且 $|B|\neq0$`, a: R`(C)`, sol: R`【解】$B\neq O$ 知 $Ax=0$ 有非零解，故 $|A|=(\lambda-1)^2=0$，$\lambda=1$。若 $|B|\neq0$ 则 $B$ 可逆，由 $AB=O$ 得 $A=O$，矛盾，故 $|B|=0$，选项 C 正确。` },
      { n: "(6)", q: R`设方程组 $\begin{cases}2x_1-3x_2+x_3=b_1\\x_1-2x_2+x_3=b_2\\2x_1+kx_2+3x_3=b_3\end{cases}$ 有解，则（ ）。
(A) 当 $k\neq-5$ 时，$(b_1,b_2,b_3)^T$ 为任意非零列向量
(B) 当 $k=-5$ 时，$(b_1,b_2,b_3)^T$ 为任意列向量
(C) 当 $k=-5$ 时，$b_1+b_3=4b_2$
(D) 当 $k\neq-5$ 时，$b_1+b_3=4b_2$`, a: R`(C)`, sol: R`【解】对增广矩阵作初等行变换得 $\begin{pmatrix}1&-2&1&b_2\\0&1&-1&b_1-2b_2\\0&k+5&0&b_1+b_3-4b_2\end{pmatrix}$。$k\neq-5$ 时对任意 $b$ 有解；$k=-5$ 时有解需 $b_1+b_3-4b_2=0$，选项 C 正确。` },
      { n: "(7)", q: R`设矩阵 $A_{m\times n},B_{n\times m}$，则（ ）。
(A) 当 $m>n$ 时，$AB$ 必可逆
(B) 当 $m>n$ 时，必有 $|AB|=0$
(C) 当 $n>m$ 时，必有 $r(AB)<m$
(D) 当 $n>m$ 时，$ABx=0$ 必有唯一解`, a: R`(B)`, sol: R`【解】$r(AB)\leqslant r(A)\leqslant n<m$，而 $AB$ 为 $m$ 阶矩阵，故 $|AB|=0$，选项 B 正确。` },
      { n: "(8)", q: R`设矩阵 $A_{m\times n},B_{n\times m}$ 满足 $AB=E$，其中 $E$ 是单位矩阵，$\alpha$ 与 $\beta$ 为非零列向量，则正确的是（ ）。
(A) 方程组 $AX=\alpha$ 有唯一解，方程组 $BX=\beta$ 有唯一解
(B) 方程组 $AX=\alpha$ 有无穷多解，方程组 $BX=\beta$ 有无穷多解
(C) 方程组 $AX=0$ 仅有零解，方程组 $BX=\beta$ 有解
(D) 方程组 $AX=\alpha$ 有解，方程组 $BX=0$ 仅有零解`, a: R`(D)`, sol: R`【解】由 $AB=E$ 得 $r(A)=r(B)=m$，故 $r(A,\alpha)=m$，$AX=\alpha$ 有解；$B$ 的列向量组线性无关，$BX=0$ 仅有零解。选项 D 正确。` }
    ]
  };
})();
