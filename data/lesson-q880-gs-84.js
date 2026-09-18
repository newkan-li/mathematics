window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q880_s83"] = {
    id: "q880_s83",
    ch: "880题 · 线代 · 第十一章 相似矩阵",
    title: "拓展题",
    probTitle: "第十一章 拓展题（含原书解析）",
    book: "李林《精讲精练 880 题（数学二）》2026",
    problems: [
      { n: "(1)", q: R`设 $A$ 是 3 阶实对称矩阵，且 $A^2-2A=O$，$r(A)=1$。方程组 $Ax=0$ 的通解为 $k_1(1,1,0)^T+k_2(1,0,1)^T$（$k_1,k_2$ 为任意常数）。(Ⅰ) 求可逆矩阵 $P$ 及对角矩阵 $\Lambda$，使得 $P^{-1}AP=\Lambda$；(Ⅱ) 求矩阵 $A$。`, a: R`(Ⅰ) $P=\begin{pmatrix}1&1&-1\\1&0&1\\0&1&1\end{pmatrix}$，$\Lambda=\operatorname{diag}(0,0,2)$；(Ⅱ) $A=\frac23\begin{pmatrix}1&-1&-1\\-1&1&1\\-1&1&1\end{pmatrix}$`, sol: R`【解】(Ⅰ) $A$ 的特征值为 0 或 2，由实对称且 $r(A)=1$ 得 $\lambda_1=\lambda_2=0,\lambda_3=2$。$\lambda=0$ 对应 $\alpha_1=(1,1,0)^T,\alpha_2=(1,0,1)^T$；$\lambda_3=2$ 对应 $\alpha_3$ 与二者正交，解得 $\alpha_3=(-1,1,1)^T$。令 $P=(\alpha_1,\alpha_2,\alpha_3)=\begin{pmatrix}1&1&-1\\1&0&1\\0&1&1\end{pmatrix}$，则 $P^{-1}AP=\operatorname{diag}(0,0,2)$。
(Ⅱ) $P^{-1}=\frac13\begin{pmatrix}1&2&-1\\1&-1&2\\-1&1&1\end{pmatrix}$，$A=P\Lambda P^{-1}=\frac23\begin{pmatrix}1&-1&-1\\-1&1&1\\-1&1&1\end{pmatrix}$。` },
      { n: "(2)", q: R`设 $A=\begin{pmatrix}k&-2&2\\-3&3&-1\\-15&8&-6\end{pmatrix}$，$B=\begin{pmatrix}1&0&2\\0&2&0\\0&4&-1\end{pmatrix}$，且 $A\sim B$，求 $k$ 的值及可逆矩阵 $P$，使得 $P^{-1}AP=B$。`, a: R`$k=5$；$P=\begin{pmatrix}1&-\frac83&0\\1&-\frac{11}3&1\\-1&\frac13&2\end{pmatrix}$`, sol: R`【解】由 $\operatorname{tr}A=\operatorname{tr}B$ 得 $k+3-6=1+2-1$，故 $k=5$。$|\lambda E-B|=(\lambda-1)(\lambda-2)(\lambda+1)$，特征值 $1,2,-1$。$B$ 对应特征向量 $\alpha_1=(1,0,0)^T,\alpha_2=(8,3,4)^T,\alpha_3=(1,0,-1)^T$；$A$ 对应特征向量 $\beta_1=(1,1,-1)^T,\beta_2=(0,1,1)^T,\beta_3=(1,0,-3)^T$。令 $P=P_2P_1^{-1}$，则 $P^{-1}AP=B$，其中 $P=\begin{pmatrix}1&-\frac83&0\\1&-\frac{11}3&1\\-1&\frac13&2\end{pmatrix}$。` },
      { n: "(3)", q: R`设数列 $\{a_n\},\{b_n\}$ 满足 $a_0=1$，$b_0=-1$，且 $\begin{cases}a_n=a_{n-1}+2b_{n-1}\\b_n=-a_{n-1}+4b_{n-1}\end{cases}$，记 $\alpha_n=\begin{pmatrix}a_n\\b_n\end{pmatrix}$，矩阵 $A$ 满足 $A\alpha_{n-1}=\alpha_n$，求 $A^n$ 及 $\lim\limits_{n\to\infty}\frac{b_n}{a_n}$。`, a: R`$A^n=\begin{pmatrix}2^{n+1}-3^n&-2^{n+1}+2\cdot3^n\\2^n-3^n&-2^n+2\cdot3^n\end{pmatrix}$；$\lim\limits_{n\to\infty}\frac{b_n}{a_n}=1$`, sol: R`【解】$A=\begin{pmatrix}1&2\\-1&4\end{pmatrix}$，$|\lambda E-A|=(\lambda-2)(\lambda-3)$，特征值 $2,3$。$\lambda=2$ 对应 $\xi_1=(2,1)^T$；$\lambda=3$ 对应 $\xi_2=(1,1)^T$。令 $P=(\xi_1,\xi_2)$，则 $A=P\Lambda P^{-1}$，$A^n=P\Lambda^nP^{-1}=\begin{pmatrix}2^{n+1}-3^n&-2^{n+1}+2\cdot3^n\\2^n-3^n&-2^n+2\cdot3^n\end{pmatrix}$。由 $\begin{pmatrix}a_n\\b_n\end{pmatrix}=A^n\begin{pmatrix}a_0\\b_0\end{pmatrix}=A^n\begin{pmatrix}1\\-1\end{pmatrix}=\begin{pmatrix}2^{n+2}-3^{n+1}\\2^{n+1}-3^{n+1}\end{pmatrix}$，故 $\lim\limits_{n\to\infty}\frac{b_n}{a_n}=\lim\limits_{n\to\infty}\frac{2^{n+1}-3^{n+1}}{2^{n+2}-3^{n+1}}=1$。` }
    ]
  };
})();
