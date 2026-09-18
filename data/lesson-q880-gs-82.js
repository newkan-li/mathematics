window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q880_s81"] = {
    id: "q880_s81",
    ch: "880题 · 线代 · 第十一章 相似矩阵",
    title: "综合题·填空题",
    probTitle: "第十一章 综合题 · 填空题（含原书解析）",
    book: "李林《精讲精练 880 题（数学二）》2026",
    problems: [
      { n: "(1)", q: R`设 $A$ 是 3 阶方阵，$\alpha$ 为 3 维列向量，$P=(\alpha,A\alpha,A^2\alpha)$ 为可逆矩阵，$B=P^{-1}AP$，且 $A^3\alpha+2A^2\alpha=3A\alpha$，则 $|A+E|=\underline{\qquad}$。`, a: R`$-4$`, sol: R`【解】$AP=A(\alpha,A\alpha,A^2\alpha)=(A\alpha,A^2\alpha,A^3\alpha)=(A\alpha,A^2\alpha,3A\alpha-2A^2\alpha)=PB$，其中 $B=\begin{pmatrix}0&0&0\\1&0&3\\0&1&-2\end{pmatrix}$，故 $|A+E|=|B+E|=\begin{vmatrix}1&0&0\\1&1&3\\0&1&-1\end{vmatrix}=-4$。` },
      { n: "(2)", q: R`设 $A_{3\times3}$ 是秩为 1 的实对称矩阵，$\lambda_1=2$ 是 $A$ 的一个特征值，对应的特征向量为 $\alpha_1=(-1,1,1)^T$，则方程组 $Ax=0$ 的基础解系为 $\underline{\qquad}$。`, a: R`$\alpha_2=(1,1,0)^T,\alpha_3=(1,0,1)^T$`, sol: R`【解】$r(A)=1$，$A$ 实对称，故 $A\sim\operatorname{diag}(2,0,0)$，$\lambda_2=\lambda_3=0$。其特征向量与 $\alpha_1$ 正交，解 $-x_1+x_2+x_3=0$ 得 $\alpha_2=(1,1,0)^T,\alpha_3=(1,0,1)^T$，即 $Ax=0$ 的基础解系。` },
      { n: "(3)", q: R`设 3 阶矩阵 $A$ 的特征值为 $0,1,2$，$B=A^3-2A^2$，则 $r(B)=\underline{\qquad}$。`, a: R`$1$`, sol: R`【解】$A$ 有三个不同特征值，必可对角化，$P^{-1}AP=\operatorname{diag}(0,1,2)$，则 $P^{-1}BP=\operatorname{diag}(0,-1,0)$，故 $r(B)=r(\operatorname{diag}(0,-1,0))=1$。` },
      { n: "(4)", q: R`设 $\alpha_1,\alpha_2,\cdots,\alpha_k\ (k>1)$ 是 $n$ 维正交单位实列向量组，$A=\sum\limits_{i=1}^k\alpha_i\alpha_i^T$，$E$ 是 $n$ 阶单位矩阵，则行列式 $|(A+E)^*|=\underline{\qquad}$。`, a: R`$2^{k(n-1)}$`, sol: R`【解】由正交单位性得 $A^2=A$，$A$ 为实对称矩阵，$r(A)=k$，故 $A$ 有 $k$ 重特征值 1 和 $n-k$ 重特征值 0，$A+E$ 有 $k$ 重特征值 2 和 $n-k$ 重特征值 1，故 $|(A+E)^*|=|A+E|^{n-1}=(2^k)^{n-1}=2^{k(n-1)}$。` }
    ]
  };
})();
