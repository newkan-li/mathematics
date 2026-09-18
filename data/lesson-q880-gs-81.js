window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q880_s80"] = {
    id: "q880_s80",
    ch: "880题 · 线代 · 第十一章 相似矩阵",
    title: "综合题·选择题",
    probTitle: "第十一章 综合题 · 选择题（含原书解析）",
    book: "李林《精讲精练 880 题（数学二）》2026",
    problems: [
      { n: "(1)", q: R`设 $A,B$ 是 $n$ 阶可逆矩阵，且 $A^{-1}\sim B^{-1}$，则下列结果 ① $AB\sim BA$ ② $A\sim B$ ③ $A^2\sim B^2$ ④ $A^T\sim B^T$ 中正确的个数为（ ）。
(A) 1
(B) 2
(C) 3
(D) 4`, a: R`(D)`, sol: R`【解】由 $BA=A^{-1}(AB)A$ 知 $AB\sim BA$（①正确）；由 $P^{-1}A^{-1}P=B^{-1}$ 两边取逆得 $P^{-1}AP=B$，故 $A\sim B$（②正确）；取转置得 $A^T\sim B^T$（④正确）；$A^2\sim B^2$（③正确）。选项 D 正确。` },
      { n: "(2)", q: R`设矩阵 $B$ 相似于 $A=\begin{pmatrix}1&1&0&0\\1&1&0&0\\0&0&2&2\\0&0&2&2\end{pmatrix}$，则 $r_1=r(B),r_2=r(B-E),r_3=r(B-2E)$ 满足（ ）。
(A) $r_1<r_2<r_3$
(B) $r_2<r_3<r_1$
(C) $r_3<r_1<r_2$
(D) $r_1<r_3<r_2$`, a: R`(D)`, sol: R`【解】$A$ 为实对称矩阵，$|\lambda E-A|=\lambda^2(\lambda-2)(\lambda-4)$，特征值 $0,0,2,4$。$B\sim A$ 且可对角化，故 $r(B)=4-2=2$，$r(B-2E)=r(2E-B)=4-1=3$，$r(B-E)=4$（1 非特征值）。故 $r_1=2<r_3=3<r_2=4$，选项 D 正确。` },
      { n: "(3)", q: R`与 $\Lambda=\begin{pmatrix}0&&\\&1&\\&&1\end{pmatrix}$ 既相似又合同的矩阵是（ ）。
(A) $A=\begin{pmatrix}1&0&0\\0&1&-1\\0&2&-2\end{pmatrix}$
(B) $B=\begin{pmatrix}1&0&0\\0&-1&-2\\0&-2&-4\end{pmatrix}$
(C) $C=\begin{pmatrix}1&0&0\\0&-\frac12&\frac12\\0&\frac12&-\frac12\end{pmatrix}$
(D) $D=\begin{pmatrix}1&0&0\\0&-1&2\\0&2&2\end{pmatrix}$`, a: R`(C)`, sol: R`【解】A 特征值 $0,1,-1$ 与 Λ 相似但非实对称不合同；B 特征值 $0,1,-5$ 不相似；C 特征值 $0,-1,1$ 与 Λ 相似且正负惯性指数相同故合同，正确；D 特征值 $1,3,-2$ 不相似。选项 C 正确。` },
      { n: "(4)", q: R`下列矩阵中，与矩阵 $\begin{pmatrix}1&1&0\\0&1&1\\0&0&1\end{pmatrix}$ 相似的是（ ）。
(A) $\begin{pmatrix}1&1&-1\\0&1&1\\0&0&1\end{pmatrix}$
(B) $\begin{pmatrix}1&0&-1\\0&1&1\\0&0&1\end{pmatrix}$
(C) $\begin{pmatrix}1&1&-1\\0&1&0\\0&0&1\end{pmatrix}$
(D) $\begin{pmatrix}1&0&-1\\0&1&0\\0&0&1\end{pmatrix}$`, a: R`(A)`, sol: R`【解】五矩阵特征值均为 $1,1,1$，均不可对角化。由 $r(E-A)=2$，只有 $r(E-A_1)=2$ 与之相等，故只有 A 与已知矩阵相似。选项 A 正确。
【注】$A\sim B\Rightarrow r(\lambda E-A)=r(\lambda E-B)$。` },
      { n: "(5)", q: R`设 $n$ 阶矩阵 $A$ 有特征值 $\lambda_1=1,\lambda_2=-1$，对应的特征向量为 $\alpha_1,\alpha_2$，$k$ 为任意常数，则下列选项中正确的是（ ）。
(A) $k\alpha_1$ 必是 $A$ 的特征向量
(B) $\alpha_1-\alpha_2$ 必是 $A$ 的特征向量
(C) $\alpha_1+\alpha_2$ 必是 $A$ 的特征向量
(D) $\alpha_1+\alpha_2$ 必是 $A^2$ 的特征向量`, a: R`(D)`, sol: R`【解】$A^2\alpha_1=\alpha_1,A^2\alpha_2=\alpha_2$，故 $A^2(\alpha_1+\alpha_2)=\alpha_1+\alpha_2$，且 $\alpha_1+\alpha_2\neq0$，所以 $\alpha_1+\alpha_2$ 是 $A^2$ 的特征向量，选项 D 正确。A 中 $k=0$ 时为零向量，错误。` },
      { n: "(6)", q: R`设 $A$ 是 3 阶实对称矩阵，$\alpha=(-1,1,1)^T$ 满足 $(A-2E)\alpha=0$，且 $r(A)=1$，$k_1,k_2$ 为任意常数，则方程组 $AX=0$ 的通解为（ ）。
(A) $k_1(1,1,0)^T+k_2(1,-1,0)^T$
(B) $k_1(1,1,0)^T+k_2(1,0,1)^T$
(C) $k_1(1,1,0)^T+k_2(1,1,1)^T$
(D) $k_1(1,1,0)^T+k_2(1,0,-1)^T$`, a: R`(B)`, sol: R`【解】由 $(A-2E)\alpha=0$ 知 $\lambda_1=2$ 对应特征向量 $\alpha_1=(-1,1,1)^T$。$r(A)=1$ 且 $A$ 实对称，故 $A\sim\operatorname{diag}(2,0,0)$，$\lambda_2=\lambda_3=0$ 对应特征向量与 $\alpha_1$ 正交，解 $-x_1+x_2+x_3=0$ 得 $\beta_1=(1,1,0)^T,\beta_2=(1,0,1)^T$，即 $AX=0$ 的基础解系。选项 B 正确。` },
      { n: "(7)", q: R`设 3 维列向量 $\alpha_1,\alpha_2,\alpha_3$ 线性无关，$A=(a_{ij})_{3\times3}$ 满足 $A\alpha_1=\alpha_1,A\alpha_2=\alpha_2+\alpha_3,A\alpha_3=\alpha_1+\alpha_3$，$A_{ij}$ 是 $a_{ij}$ 的代数余子式，则 $A_{11}+A_{22}+A_{33}=$（ ）。
(A) 1
(B) 2
(C) 3
(D) 4`, a: R`(C)`, sol: R`【解】$A(\alpha_1,\alpha_2,\alpha_3)=(\alpha_1,\alpha_2,\alpha_3)\begin{pmatrix}1&0&1\\0&1&0\\0&1&1\end{pmatrix}$，$A$ 与 $B$ 相似，$|\lambda E-B|=(\lambda-1)^3$，故 $A$ 特征值均为 1，$|A|=1$，$A^*$ 特征值均为 1，故 $A_{11}+A_{22}+A_{33}=\operatorname{tr}(A^*)=3$，选项 C 正确。` }
    ]
  };
})();
