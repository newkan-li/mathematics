window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q880_s73"] = {
    id: "q880_s73",
    ch: "880题 · 线代 · 第十章 线性方程组",
    title: "综合题·选择题",
    probTitle: "第十章 综合题 · 选择题（含原书解析）",
    book: "李林《精讲精练 880 题（数学二）》2026",
    problems: [
      { n: "(1)", q: R`设 $A$ 是 $m\times n$ 矩阵，$m<n$，且 $A$ 的行向量组线性无关，$b_1,b_2$ 分别为 $m$ 维、$n$ 维非零列向量，则下列选项错误的是（ ）。
(A) $A^Tx=0$ 只有零解
(B) $A^TAx=0$ 必有非零解
(C) $Ax=b_1$ 必有无穷多个解
(D) $A^Tx=b_2$ 必有唯一解`, a: R`(D)`, sol: R`【解】$r(A)=m$。$A^T$ 是 $n\times m$ 矩阵，$r(A^T)=m$，$A^Tx=0$ 只有零解（A 对）；$r(A^TA)\leqslant r(A)=m<n$，$A^TAx=0$ 必有非零解（B 对）；$r(A)=r(A\vdots b_1)=m<n$，$Ax=b_1$ 有无穷多解（C 对）；$A^T$ 的列向量只有 $m$ 个线性无关的 $n$ 维向量，不能表示任一 $n$ 维向量，$A^Tx=b_2$ 可能无解，D 错误。` },
      { n: "(2)", q: R`设 $A$ 是 $m\times n$ 矩阵，则非齐次线性方程组 $Ax=b$ 有无穷多解的充分必要条件是（ ）。
(A) $r(A\vdots b)<n$
(B) $Ax=0$ 有非零解
(C) $Ax=b$ 有两个不同解
(D) $A$ 的列向量组线性相关`, a: R`(C)`, sol: R`【解】$Ax=b$ 有无穷多解 $\Leftrightarrow r(A)=r(A\vdots b)<n$。若 $Ax=b$ 有两个不同解 $\alpha_1,\alpha_2$，则 $\alpha_1-\alpha_2$ 是 $Ax=0$ 的非零解，$r(A)<n$ 且 $Ax=b$ 有解，故有无穷多解；反之显然。选项 C 正确。` },
      { n: "(3)", q: R`设 $A^T=(\alpha_1,\alpha_2,\cdots,\alpha_{n-1})$ 是 $n\times(n-1)$ 矩阵，$r(A^T)=n-1$，$\beta_1,\beta_2$ 是与 $\alpha_1,\alpha_2,\cdots,\alpha_{n-1}$ 都正交的两个不同的 $n$ 维列向量，$k$ 是任意常数，则方程组 $Ax=0$ 的通解为（ ）。
(A) $k(\beta_1-\beta_2)$
(B) $k(\beta_1+\beta_2)$
(C) $k\beta_1$
(D) $k\beta_2$`, a: R`(A)`, sol: R`【解】由 $\alpha_i^T\beta_j=0$ 得 $A\beta_j=0$，故 $\beta_1,\beta_2$ 是 $Ax=0$ 的两个解。$r(A)=n-1$，$Ax=0$ 的基础解系含 1 个向量，故 $\beta_1-\beta_2$ 是基础解系（$\beta_1\neq\beta_2$），通解 $k(\beta_1-\beta_2)$。选项 A 正确。` },
      { n: "(4)", q: R`设向量组 $\alpha_1=(1,1,a)^T,\alpha_2=(1,-2,b)^T,\alpha_3=(-2,1,c)^T$ 的秩为 $a$，若 $\beta=(1,2,0)^T$ 可由 $\alpha_1,\alpha_2,\alpha_3$ 线性表示，且表示法不唯一，则（ ）。
(A) $a=2,b=8,c=-10$
(B) $a=2,b=8,c=10$
(C) $a=1,b=-8,c=10$
(D) $a=1,b=-8,c=-10$`, a: R`(A)`, sol: R`【解】$A=(\alpha_1,\alpha_2,\alpha_3)$，由表示法不唯一知 $r(A)=r(A,\beta)<3$。$A$ 有 2 阶子式 $\begin{vmatrix}1&1\\1&-2\end{vmatrix}\neq0$，故 $r(A)=2=a$。对 $(A,\beta)$ 作初等行变换，由 $r(A)=r(A,\beta)=2$ 得 $b+c+2=0,\frac13b-\frac83=0$，得 $b=8,c=-10$。选项 A 正确。` },
      { n: "(5)", q: R`设 $n$ 维实列向量 $\alpha$ 满足 $\alpha^T\alpha=2$，$A,B$ 均为 $n$ 阶矩阵，$E$ 为 $n$ 阶单位矩阵，且 $A(E-2\alpha\alpha^T)=B$，则（ ）。
(A) 方程组 $BX=0$ 与方程组 $(E-2\alpha\alpha^T)X=0$ 同解
(B) 方程组 $B^TX=0$ 与方程组 $(E-2\alpha\alpha^T)X=0$ 同解
(C) 方程组 $BX=0$ 与方程组 $AX=0$ 同解
(D) 方程组 $B^TX=0$ 与方程组 $A^TX=0$ 同解`, a: R`(D)`, sol: R`【解】$r(\alpha\alpha^T)=1$，$E-2\alpha\alpha^T$ 特征值为 $-3,1,\cdots,1$，故可逆。由 $B=A(E-2\alpha\alpha^T)$ 及 $A=B(E-2\alpha\alpha^T)^{-1}$ 知 $B$ 与 $A$ 的列向量组等价，故 $B^T$ 与 $A^T$ 的行向量组等价，$B^TX=0$ 与 $A^TX=0$ 同解，选项 D 正确。` },
      { n: "(6)", q: R`设 $A$ 为 $n$ 阶矩阵，下列命题中正确的是（ ）。
① $A^nX=0$ 与 $A^{n+1}X=0$ 同解；② $A^{n+1}X=0$ 的解不一定是 $A^nX=0$ 的解；③ $A^nX=0$ 与 $(A^T)^nA^nX=0$ 同解；④ $(A^T)^nA^nX=0$ 的解不一定是 $A^nX=0$ 的解。
(A) ①②
(B) ①③
(C) ②④
(D) ③④`, a: R`(B)`, sol: R`【解】① $A^nX=0$ 的解显然是 $A^{n+1}X=0$ 的解；反之若 $A^{n+1}\alpha=0$ 但 $A^n\alpha\neq0$，可证 $\alpha,A\alpha,\cdots,A^n\alpha$ 线性无关，与 $n+1$ 个 $n$ 维向量必相关矛盾，故 $A^n\alpha=0$，两方程组同解，①正确。③ 由 $(A^n)^TA^n\alpha=0$ 左乘 $\alpha^T$ 得 $(A^n\alpha)^T(A^n\alpha)=0$，故 $A^n\alpha=0$，两方程组同解，③正确。选项 B 正确。` },
      { n: "(7)", q: R`设 $n$ 阶非零实矩阵 $A$ 满足 $A^T+A=O$，$X$ 为 $n$ 维实列向量，则下列选项正确的是（ ）。
(A) 方程组 $AX=X$ 有无穷多解
(B) 方程组 $AX=-X$ 有无穷多解
(C) 方程组 $AX=X$ 只有零解
(D) 方程组 $AX=-X$ 无解`, a: R`(C)`, sol: R`【解】$AX=X$ 即 $(A-E)X=0$，两边左乘 $X^T$ 得 $X^TAX=X^TX$。由 $A^T=-A$ 得 $X^TAX=0$，故 $X^TX=0$，即 $X=0$，只有零解。同理 $AX=-X$ 也只有零解。选项 C 正确。` },
      { n: "(8)", q: R`设 $A$ 是 $n$ 阶实对称矩阵，$B$ 是 $n$ 阶实矩阵，若对任意 $n$ 维非零列向量 $\alpha$，都有 $\alpha^T(AB+B^TA)\alpha>0$，则下列选项正确的是（ ）。
(A) 方程组 $ABX=\alpha$ 有无穷多解
(B) 方程组 $ABX=\alpha$ 无解
(C) 方程组 $AX=\alpha$ 有唯一解
(D) 方程组 $AX=\alpha$ 无解`, a: R`(C)`, sol: R`【解】$\alpha^T(AB+B^TA)\alpha=2(A\alpha)^T(B\alpha)>0$，故 $A\alpha\neq0,B\alpha\neq0$，$A,B$ 均可逆，$r(A)=r(A,\alpha)=n$，$AX=\alpha$ 有唯一解，选项 C 正确。` }
    ]
  };
})();
