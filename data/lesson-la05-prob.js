window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["la05_s0"].problems = [
    { n: 1, q: R`填空题
(1) 若 $1$ 是矩阵 $A=\begin{pmatrix}2&-1&2\\5&a&3\\-1&1&-2\end{pmatrix}$ 的特征值，则 $a=$______。
(2) 已知矩阵 $A=\begin{pmatrix}3&a\\1&5\end{pmatrix}$ 只有一个线性无关的特征向量，则 $a=$______。
(3) $A$ 是 4 阶矩阵，伴随矩阵 $A^*$ 的特征值是 $1,-2,-4,8$，则矩阵 $A$ 的特征值是______。`, a: R`(1) $-4$；(2) $-1$；(3) $4,-2,-1,\dfrac12$`, sol: R`【提示】(1) $1$ 是 $A$ 的特征值，即 $|E-A|=0$。
$$|E-A|=\begin{vmatrix}-1&1&-2\\-5&1-a&-3\\1&-1&3\end{vmatrix}=\begin{vmatrix}-1&1&-2\\-5&1-a&-3\\0&0&1\end{vmatrix}=a+4$$
(2) 因为矩阵 $A$ 只有一个线性无关的特征向量，故 $A$ 的特征值必是二重根。
$$|\lambda E-A|=\begin{vmatrix}\lambda-3&-a\\-1&\lambda-5\end{vmatrix}=\lambda^2-8\lambda+15-a=(\lambda-4)^2$$
故 $a=-1$。
(3) 由 $|A|=\prod\lambda_i$ 及 $|A^*|=|A|^{n-1}$ 知 $|A^*|=1(-2)(-4)8=|A|^3\Rightarrow|A|=4$。又若 $A$ 的特征值是 $\lambda$，则 $A^*$ 的特征值是 $\dfrac{|A|}{\lambda}$，有 $\dfrac4\lambda=1,\dfrac4\lambda=-2,\dfrac4\lambda=-4,\dfrac4\lambda=8$，而知 $A$ 的特征值是 $4,-2,-1,\dfrac12$。` },
    { n: 2, q: R`选择题
(1) 矩阵 $A=\begin{pmatrix}1&1&1\\1&3&1\\1&1&1\end{pmatrix}$ 的三个特征值是
(A) $1,4,0$ (B) $2,3,0$ (C) $2,4,0$ (D) $2,4,-1$
(2) 与矩阵 $A=\begin{pmatrix}1&2\\0&3\end{pmatrix}$ 不相似的矩阵是
(A) $\begin{pmatrix}1&0\\2&3\end{pmatrix}$ (B) $\begin{pmatrix}3&5\\0&1\end{pmatrix}$ (C) $\begin{pmatrix}1&1\\3&3\end{pmatrix}$ (D) $\begin{pmatrix}2&1\\1&2\end{pmatrix}$`, a: R`(1)(A)　(2)(C)`, sol: R`【提示】(1) 易见 $|A|=0$，$0$ 必是 $A$ 的特征值，可排除 (D)，由 $\sum\lambda_i=\sum a_{ii}=5$，可排除 (C)，对于 (A) 和 (B) 可任选一个不同的特征值计算，由于
$$|E-A|=\begin{vmatrix}0&-1&-1\\-1&-2&-1\\-1&-1&0\end{vmatrix}=0,$$
知 $\lambda=1$ 必是特征值，因而应选 (A)。
(2) 矩阵 $A$ 的特征值是 $1,3$。$A\sim\Lambda=\begin{pmatrix}1&\\&3\end{pmatrix}$，矩阵 (A)、(B)、(D) 的特征值也均是 $1,3$，它们都可相似对角化，也就都与 $A$ 相似。矩阵 (C) 的特征值是 $4,0$，它不与 $A$ 相似，因为相似的必要条件是有相同的特征值。` },
    { n: 3, q: R`已知 $A$ 是 3 阶实对称矩阵，特征值是 $1,1,-2$，其中属于 $\lambda=-2$ 的特征向量是 $\boldsymbol\alpha=(1,0,1)^T$，求 $A^3$。`, a: R`$A^3=\begin{pmatrix}-\dfrac12&0&-\dfrac92\\0&1&0\\-\dfrac92&0&-\dfrac72\end{pmatrix}$`, sol: R`设 $\lambda=1$ 的特征向量是 $\boldsymbol\beta=(x_1,x_2,x_3)^T$，因为 $A$ 是实对称矩阵，$\boldsymbol\alpha$ 与 $\boldsymbol\beta$ 正交，$\boldsymbol\alpha^T\boldsymbol\beta=x_1+x_3=0$，得属于 $\lambda=1$ 的特征向量 $\boldsymbol\beta_1=(0,1,0)^T,\boldsymbol\beta_2=(-1,0,1)^T$。因为 $A$ 是实对称矩阵，必可相似对角化，有 $P^{-1}AP=\Lambda=\begin{pmatrix}1&&\\&1&\\&&-2\end{pmatrix}$，其中 $P=(\boldsymbol\beta_1,\boldsymbol\beta_2,\boldsymbol\alpha)$。那么 $A=P\Lambda P^{-1}$，$A^3=(P\Lambda P^{-1})(P\Lambda P^{-1})(P\Lambda P^{-1})=P\Lambda^3P^{-1}=\begin{pmatrix}0&-1&1\\1&0&0\\0&1&1\end{pmatrix}\begin{pmatrix}1&&\\&1&\\&&-8\end{pmatrix}\begin{pmatrix}0&\dfrac12&0\\-\dfrac12&0&\dfrac12\\\dfrac12&0&\dfrac12\end{pmatrix}=\begin{pmatrix}-\dfrac12&0&-\dfrac92\\0&1&0\\-\dfrac92&0&-\dfrac72\end{pmatrix}$。` },
    { n: 4, q: R`已知 $\lambda=2$ 是矩阵 $A=\begin{pmatrix}4&2&2\\2&4&a\\2&a&a+2\end{pmatrix}$ 的二重特征值，求 $a$ 的值并求正交矩阵 $Q$ 使 $Q^{-1}AQ=\Lambda$。`, a: R`$a=2$；$Q=\begin{pmatrix}-\dfrac{1}{\sqrt2}&-\dfrac{1}{\sqrt6}&\dfrac{1}{\sqrt3}\\\dfrac{1}{\sqrt2}&-\dfrac{1}{\sqrt6}&\dfrac{1}{\sqrt3}\\0&\dfrac{2}{\sqrt6}&\dfrac{1}{\sqrt3}\end{pmatrix}$，$Q^{-1}AQ=\operatorname{diag}(2,2,8)$`, sol: R`$A$ 是实对称矩阵，$\lambda=2$ 是二重根，故 $\lambda=2$ 必有 2 个线性无关的特征向量，秩 $r(2E-A)=1$ 可求出 $a=2$。$A=\begin{pmatrix}4&2&2\\2&4&2\\2&2&4\end{pmatrix}$。由 $\sum\lambda_i=\sum a_{ii}$ 知 $2+2+\lambda_3=4+4+4$。对 $\lambda=2$ 可求出特征向量 $\boldsymbol\alpha_1=(-1,1,0)^T,\boldsymbol\alpha_2=(-1,0,1)^T$。对 $\lambda=8$ 可求出特征向量 $\boldsymbol\alpha_3=(1,1,1)^T$。为构造正交矩阵 $\boldsymbol\alpha_1,\boldsymbol\alpha_2$ 需 Schmidt 正交化，$\boldsymbol\alpha_3$ 需单位化，得 $Q=\begin{pmatrix}-\dfrac{1}{\sqrt2}&-\dfrac{1}{\sqrt6}&\dfrac{1}{\sqrt3}\\\dfrac{1}{\sqrt2}&-\dfrac{1}{\sqrt6}&\dfrac{1}{\sqrt3}\\0&\dfrac{2}{\sqrt6}&\dfrac{1}{\sqrt3}\end{pmatrix}$ 则 $Q^{-1}AQ=\begin{pmatrix}2&&\\&2&\\&&8\end{pmatrix}$。` },
    { n: 5, q: R`已知 $A,B$ 均 $n$ 阶矩阵，且 $A$ 可逆，证明 $AB$ 与 $BA$ 有相同的特征值。`, a: R`证明 $AB$ 与 $BA$ 有相同的特征值。`, sol: R`（用 $AB$ 与 $BA$ 有相同的特征多项式）
$$|\lambda E-AB|=|\lambda AA^{-1}-AB|=|A(\lambda A^{-1}-B)|=|A||\lambda A^{-1}-B|=|\lambda A^{-1}-B|\cdot|A|=|\lambda E-BA|.$$
（用相似矩阵有相同的特征值）因为 $A$ 可逆，有 $A^{-1}(AB)A=BA$，即 $AB\sim BA$，因而 $AB$ 与 $BA$ 有相同的特征值。` },
    { n: 6, q: R`设 $A$ 是 $n$ 阶矩阵，$A\neq0$ 但 $A^3=0$，证明 $A$ 不能相似对角化。`, a: R`证明 $A$ 不能相似对角化。`, sol: R`设 $\lambda$ 是 $A$ 的任一特征值，$\boldsymbol\alpha$ 是属于 $\lambda$ 的特征向量。即 $A\boldsymbol\alpha=\lambda\boldsymbol\alpha,\boldsymbol\alpha\neq0$。
那么 $A^3\boldsymbol\alpha=\lambda^3\boldsymbol\alpha$。又因 $A^3=0$ 可知 $\lambda=0$。即矩阵 $A$ 的特征值是 $\lambda=0$（$n$ 个）。
对于齐次方程组 $(0E-A)x=0$，由于 $r(0E-A)=r(A)\geqslant1$，那么 $n-r(0E-A)\leqslant n-1$，$\lambda=0$ 没有 $n$ 个线性无关的特征向量，故 $A$ 不能相似对角化。` }
  ];
})();
