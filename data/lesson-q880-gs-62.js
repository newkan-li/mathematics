window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q880_s61"] = {
    id: "q880_s61",
    ch: "880题 · 线代 · 第八章 矩阵",
    title: "综合题·解答题",
    probTitle: "第八章 综合题 · 解答题（含原书解析）",
    book: "李林《精讲精练 880 题（数学二）》2026",
    problems: [
      { n: "(1)", q: R`设 $A=\begin{pmatrix}0&0&0&1\\0&0&0&2\\0&0&0&3\\3&2&1&0\end{pmatrix}$，求 $A^n(n\geqslant1)$。`, a: R`$A^n=\begin{cases}\begin{pmatrix}O&10^{k-1}\alpha\\10^{k-1}\beta^T&O\end{pmatrix},&n=2k-1,\\[2mm]\begin{pmatrix}10^{k-1}\alpha\beta^T&O\\O&10^k\end{pmatrix},&n=2k\end{cases}$`, sol: R`【解】令 $\alpha=(1,2,3)^T,\beta^T=(3,2,1)$，则 $A=\begin{pmatrix}O&\alpha\\\beta^T&0\end{pmatrix}$。$A^3=\beta^T\alpha A=10A$，$A^4=10A^2$，其中 $\alpha\beta^T=\begin{pmatrix}3&2&1\\6&4&2\\9&6&3\end{pmatrix},\beta^T\alpha=10$，故 $A^n=\begin{cases}10^{k-1}A,&n=2k-1,\\10^{k-1}A^2,&n=2k\end{cases}$。` },
      { n: "(2)", q: R`设 $A=\begin{pmatrix}-1&1&1&-1\\1&-1&-1&1\\1&-1&-1&1\\-1&1&1&-1\end{pmatrix}$，证明：$A^2+4A=O$，并求 $(E+A)^{-1}$。`, a: R`$(E+A)^{-1}=\frac13(A+3E)$`, sol: R`【证】$A^2=-4A$，即 $A^2+4A=O$。
【解】$(E+A)^2=E+2A+A^2=E+2A-4A=-2(E+A)+3E$，即 $(E+A)(A+3E)=3E$，故 $(E+A)^{-1}=\frac13(A+3E)$。` },
      { n: "(3)", q: R`设 $A=\begin{pmatrix}0&1&0\\1&0&0\\0&1&1\end{pmatrix}$，证明：$A^n=A^{n-2}+A^2-E\ (n\geqslant3)$，并计算 $A^{100}$。`, a: R`$A^{100}=50A^2-49E=\begin{pmatrix}1&0&0\\0&1&0\\50&50&1\end{pmatrix}$`, sol: R`【证】$A^3=A+A^2-E$，归纳可证 $A^n=A^{n-2}+A^2-E\ (n\geqslant3)$。
【解】$A^{100}=A^{98}+A^2-E=\cdots=A^2+49(A^2-E)=50A^2-49E=\begin{pmatrix}1&0&0\\0&1&0\\50&50&1\end{pmatrix}$。` },
      { n: "(4)", q: R`设 $A=\begin{pmatrix}1&1&2\\0&-2&-4\\-1&-1&-1\end{pmatrix}$，证明：$A$ 可逆，并将 $A$ 表示为初等矩阵的乘积。`, a: R`$A=E_{31}(-1)E_{12}\left(-\frac12\right)E_2(-2)E_{23}(2)$`, sol: R`【证】$|A|=-2\neq0$，故 $A$ 可逆。
【解】对 $A$ 作初等行变换化为 $E$：$E_{23}(-2)E_2\left(-\frac12\right)E_{12}\left(\frac12\right)E_{31}(1)A=E$，故 $A=E_{31}(-1)E_{12}\left(-\frac12\right)E_2(-2)E_{23}(2)$。` },
      { n: "(5)", q: R`设 $A=\begin{pmatrix}1&0&0\\0&-2&0\\0&0&1\end{pmatrix}$，且 $A^*BA=2BA-8E$，求 $B$。`, a: R`$B=\begin{pmatrix}2&0&0\\0&-4&0\\0&0&2\end{pmatrix}$`, sol: R`【解】由 $(A^*-2E)BA=-8E$ 得 $B=-8(A^*-2E)^{-1}A^{-1}=-8[A(A^*-2E)]^{-1}=-8(|A|E-2A)^{-1}$。$|A|=-2$，故 $B=4(E+A)^{-1}=4\operatorname{diag}\left(\frac12,-1,\frac12\right)=\operatorname{diag}(2,-4,2)$。
【注】$A^*$ 特征值为 $\frac{|A|}{\lambda_i}$，可证 $A^*-2E$ 可逆。` },
      { n: "(6)", q: R`设矩阵 $X$ 满足 $\begin{pmatrix}1&0&1\\2&1&-1\\-1&-1&2\end{pmatrix}X=\begin{pmatrix}0&1\\2&0\\-2&1\end{pmatrix}$，求 $X$。`, a: R`$X=\begin{pmatrix}-k_1&1-k_2\\2+3k_1&-2+3k_2\\k_1&k_2\end{pmatrix}$（$k_1,k_2$ 任意常数）`, sol: R`【解】记系数矩阵为 $A$，$|A|=0$，$A$ 不可逆。令 $X=\begin{pmatrix}x_1&y_1\\x_2&y_2\\x_3&y_3\end{pmatrix}$，分别解两个非齐次方程组。对增广矩阵作初等行变换得通解 $(x_1,x_2,x_3)^T=k_1(-1,3,1)^T+(0,2,0)^T$，$(y_1,y_2,y_3)^T=k_2(-1,3,1)^T+(1,-2,0)^T$，故 $X=\begin{pmatrix}-k_1&1-k_2\\2+3k_1&-2+3k_2\\k_1&k_2\end{pmatrix}$。` },
      { n: "(7)", q: R`设分块矩阵 $P=\begin{pmatrix}A&C\\O&B\end{pmatrix}$ 为正交矩阵，$A,B$ 分别是 $m$ 阶和 $n$ 阶方阵，证明：$A$ 与 $B$ 是正交矩阵。`, a: R`证明见解析`, sol: R`【证】由 $P^TP=E$ 得 $\begin{pmatrix}A^TA&A^TC\\C^TA&C^TC+B^TB\end{pmatrix}=E$，故 $A^TA=E_m,A^TC=O,C^TA=O,C^TC+B^TB=E_n$。由 $P$ 正交可逆，$|P|=|A||B|\neq0$，故 $A$ 可逆，$A^T$ 可逆，由 $A^TC=O$ 得 $C=O$，于是 $B^TB=E_n$，即 $A,B$ 均为正交矩阵。` }
    ]
  };
})();
