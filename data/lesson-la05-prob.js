window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["la05_s0"].problems = [
    { n: 1, q: R`填空题
(1) 若 $1$ 是矩阵 $A=\begin{pmatrix}2&-1&2\\5&a&3\\-1&1&-2\end{pmatrix}$ 的特征值，则 $a=$______。
(2) 已知矩阵 $A=\begin{pmatrix}3&a\\1&5\end{pmatrix}$ 只有一个线性无关的特征向量，则 $a=$______。
(3) $A$ 是 4 阶矩阵，伴随矩阵 $A^*$ 的特征值是 $1,-2,-4,8$，则矩阵 $A$ 的特征值是______。`, a: R`(1) $-4$；(2) $-1$；(3) $4,-2,-1,\dfrac12$`, sol: R`【思路】(1) 特征值 $\iff|E-A|=0$；(2) 只有一个独立特征向量 $\iff$ 特征值为二重根；(3) 用 $A^*$ 与 $A$ 的特征值关系 $|A|/\lambda$。
【详解】(1) $|E-A|=\begin{vmatrix}-1&1&-2\\-5&1-a&-3\\1&-1&3\end{vmatrix}$，第 3 行加第 1 行得 $(0,0,1)$，按第 3 行展开：$=1\cdot(-1)^{3+3}\begin{vmatrix}-1&1\\-5&1-a\end{vmatrix}=-(1-a)+5=a+4$。令 $=0$ 得 $a=-4$。
(2) 只有一个线性无关特征向量 ⇒ 特征值是二重根。$|\lambda E-A|=(\lambda-3)(\lambda-5)-a=\lambda^2-8\lambda+15-a=(\lambda-4)^2$，故 $15-a=16$，$a=-1$。
(3) $|A^*|=1(-2)(-4)(8)=64=|A|^{n-1}=|A|^3\Rightarrow|A|=4$。若 $\lambda$ 是 $A$ 的特征值，则 $|A|/\lambda$ 是 $A^*$ 的特征值，由 $4/\lambda\in\{1,-2,-4,8\}$ 得 $\lambda=4,-2,-1,\frac12$。
【易错点】(2) 中「只有一个特征向量」不是「只有一个特征值」，而是重根但几何重数不足；(3) 用 $|A^*|=|A|^{n-1}$ 反解 $|A|$。` },
    { n: 2, q: R`选择题
(1) 矩阵 $A=\begin{pmatrix}1&1&1\\1&3&1\\1&1&1\end{pmatrix}$ 的三个特征值是
(A) $1,4,0$ (B) $2,3,0$ (C) $2,4,0$ (D) $2,4,-1$
(2) 与矩阵 $A=\begin{pmatrix}1&2\\0&3\end{pmatrix}$ 不相似的矩阵是
(A) $\begin{pmatrix}1&0\\2&3\end{pmatrix}$ (B) $\begin{pmatrix}3&5\\0&1\end{pmatrix}$ (C) $\begin{pmatrix}1&1\\3&3\end{pmatrix}$ (D) $\begin{pmatrix}2&1\\1&2\end{pmatrix}$`, a: R`(1)(A)　(2)(C)`, sol: R`【思路】(1) 用「迹 = 特征值之和」「$|A|=0$ 有零特征值」缩小选项，再验证；(2) 相似的必要条件是特征值相同。
【详解】(1) 第 1、3 行相同 ⇒ $|A|=0$，故有特征值 0，排除 (D)。又 $\sum\lambda_i=\operatorname{tr}A=5$，(C) 的和为 6，排除。验证 $\lambda=1$：$|E-A|=\begin{vmatrix}0&-1&-1\\-1&-2&-1\\-1&-1&0\end{vmatrix}=0$，故 $1$ 是特征值，选 (A)。
(2) $A$ 的特征值为 $1,3$。(A)(B)(D) 的特征值均为 $1,3$ 且可对角化，与 $A$ 相似；(C) $\begin{pmatrix}1&1\\3&3\end{pmatrix}$ 的迹为 4、行列式为 0，特征值为 $4,0$，与 $A$ 特征值不同，不相似。选 (C)。
【易错点】相似必同特征值；判断相似还要看是否可对角化（本题 A 可对角化）。` },
    { n: 3, q: R`已知 $A$ 是 3 阶实对称矩阵，特征值是 $1,1,-2$，其中属于 $\lambda=-2$ 的特征向量是 $\boldsymbol\alpha=(1,0,1)^T$，求 $A^3$。`, a: R`$A^3=\begin{pmatrix}-\dfrac72&0&-\dfrac92\\0&1&0\\-\dfrac92&0&-\dfrac72\end{pmatrix}$`, sol: R`【思路】实对称矩阵不同特征值的特征向量正交，由此求 $\lambda=1$ 的特征向量；再 $A=P\Lambda P^{-1}$、$A^3=P\Lambda^3P^{-1}$。
【详解】设 $\lambda=1$ 的特征向量 $\beta=(x_1,x_2,x_3)^T$ 与 $\alpha$ 正交：$x_1+x_3=0$。取 $\beta_1=(0,1,0)^T,\beta_2=(-1,0,1)^T$。
令 $P=(\beta_1,\beta_2,\alpha)=\begin{pmatrix}0&-1&1\\1&0&0\\0&1&1\end{pmatrix}$，$\Lambda=\operatorname{diag}(1,1,-2)$，则 $A=P\Lambda P^{-1}$，
$$P^{-1}=\begin{pmatrix}0&1&0\\-\frac12&0&\frac12\\\frac12&0&\frac12\end{pmatrix},\quad A^3=P\operatorname{diag}(1,1,-8)P^{-1}=\begin{pmatrix}-\frac72&0&-\frac92\\0&1&0\\-\frac92&0&-\frac72\end{pmatrix}.$$
（验证：$\operatorname{tr}A^3=1+1-8=-6$，与所得矩阵的迹 $-\frac72+1-\frac72=-6$ 一致。）
【易错点】原书答案第 (1,1) 元素印为 $-\frac12$，按 $A^3=P\Lambda^3P^{-1}$ 计算应为 $-\frac72$（用迹校验可确认）；正交条件 $x_1+x_3=0$ 是关键。` },
    { n: 4, q: R`已知 $\lambda=2$ 是矩阵 $A=\begin{pmatrix}4&2&2\\2&4&a\\2&a&a+2\end{pmatrix}$ 的二重特征值，求 $a$ 的值并求正交矩阵 $Q$ 使 $Q^{-1}AQ=\Lambda$。`, a: R`$a=2$；$Q=\begin{pmatrix}-\dfrac{1}{\sqrt2}&-\dfrac{1}{\sqrt6}&\dfrac{1}{\sqrt3}\\\dfrac{1}{\sqrt2}&-\dfrac{1}{\sqrt6}&\dfrac{1}{\sqrt3}\\0&\dfrac{2}{\sqrt6}&\dfrac{1}{\sqrt3}\end{pmatrix}$，$Q^{-1}AQ=\operatorname{diag}(2,2,8)$`, sol: R`【思路】$A$ 实对称，$\lambda=2$ 二重 ⇒ 可用「迹」与「$|A|$」求 $a$ 和第三特征值，再正交对角化。
【详解】$\operatorname{tr}A=4+4+(a+2)=10+a$，故第三特征值 $\lambda_3=10+a-(2+2)=6+a$。
$|A|=\lambda_1\lambda_2\lambda_3=4(6+a)$。另一方面
$$|A|=\begin{vmatrix}4&2&2\\2&4&a\\2&a&a+2\end{vmatrix}=-4a^2+20a+8.$$
由 $-4a^2+20a+8=4(6+a)$ 得 $a^2-4a+4=0$，$a=2$。
此时 $A=\begin{pmatrix}4&2&2\\2&4&2\\2&2&4\end{pmatrix}$，特征值 $2,2,8$。
$\lambda=2$：$x_1+x_2+x_3=0$，取 $\alpha_1=(-1,1,0)^T,\alpha_2=(-1,0,1)^T$；$\lambda=8$：$\alpha_3=(1,1,1)^T$。
对 $\alpha_1,\alpha_2$ 作 Schmidt 正交化并单位化，$\alpha_3$ 单位化：
$$Q=\begin{pmatrix}-\frac{1}{\sqrt2}&-\frac{1}{\sqrt6}&\frac{1}{\sqrt3}\\\frac{1}{\sqrt2}&-\frac{1}{\sqrt6}&\frac{1}{\sqrt3}\\0&\frac{2}{\sqrt6}&\frac{1}{\sqrt3}\end{pmatrix},\quad Q^{-1}AQ=\operatorname{diag}(2,2,8).$$
【易错点】实对称矩阵必可正交对角化；重根对应的特征向量要先正交化再单位化。` },
    { n: 5, q: R`已知 $A,B$ 均 $n$ 阶矩阵，且 $A$ 可逆，证明 $AB$ 与 $BA$ 有相同的特征值。`, a: R`证明 $AB$ 与 $BA$ 有相同的特征值。`, sol: R`【思路】用相似：$A^{-1}(AB)A=BA$；或用特征多项式相等。
【详解】因 $A$ 可逆，$A^{-1}(AB)A=BA$，即 $AB\sim BA$，相似矩阵有相同的特征多项式（从而特征值相同）。
（也可直接算：$|\lambda E-AB|=|\lambda A A^{-1}-AB|=|A||\lambda A^{-1}-B|=|\lambda A^{-1}-B||A|=|(\lambda A^{-1}-B)A|=|\lambda E-BA|$。）
【易错点】$AB$ 与 $BA$ 一般不同（阶数相同但元素不同），但特征值相同；$A$ 可逆是构造相似的关键。` },
    { n: 6, q: R`设 $A$ 是 $n$ 阶矩阵，$A\neq0$ 但 $A^3=0$，证明 $A$ 不能相似对角化。`, a: R`证明 $A$ 不能相似对角化。`, sol: R`【思路】先证特征值全为 0，再看 0 的特征子空间维数是否达到 $n$。
【详解】设 $\lambda$ 是 $A$ 的特征值，$\alpha\neq0$ 是对应特征向量，$A\alpha=\lambda\alpha$。则 $A^3\alpha=\lambda^3\alpha$。由 $A^3=0$ 得 $\lambda^3\alpha=0$，故 $\lambda=0$。
所以 $A$ 的特征值全为 0。若 $A$ 可对角化，则 $A\sim 0$（零矩阵），即 $A=0$，与 $A\neq0$ 矛盾。
（也可看特征子空间维数：$n-r(0E-A)=n-r(A)$，由 $A\neq0$ 得 $r(A)\ge1$，故 $n-r(A)\le n-1<n$，0 没有 $n$ 个线性无关的特征向量。）
【易错点】幂零矩阵的特征值全为 0；对角化要求每个特征值的几何重数等于代数重数，这里 0 的几何重数不足。` }
  ];
})();
