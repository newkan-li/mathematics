window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q660_s11"] = {
    id: "q660_s11",
    ch: "660题 · 选择题 · 线性代数",
    title: "选择题 第 276–300 题",
    probTitle: "选择题（含原书详解）",
    book: "《数学基础过关660题（数学二）》",
    problems: [
      { n: 276, q: R`设 $\boldsymbol A$ 是 $n$ 阶矩阵，对于齐次线性方程组 (Ⅰ) $\boldsymbol A^n\boldsymbol x=\boldsymbol 0$ 和 (Ⅱ) $\boldsymbol A^{n+1}\boldsymbol x=\boldsymbol 0$，现有四个命题
① (Ⅰ) 的解必是 (Ⅱ) 的解；
② (Ⅱ) 的解必是 (Ⅰ) 的解；
③ (Ⅰ) 的解不是 (Ⅱ) 的解；
④ (Ⅱ) 的解不是 (Ⅰ) 的解。
以上命题中正确的是
(A) ①②。 (B) ①④。 (C) ③④。 (D) ②③。`, a: R`(A)`, sol: R`【分析】若 $\boldsymbol A^n\boldsymbol\alpha=\boldsymbol 0$，则 $\boldsymbol A^{n+1}\boldsymbol\alpha=\boldsymbol A(\boldsymbol A^n\boldsymbol\alpha)=\boldsymbol 0$，即 (Ⅰ) 的解必是 (Ⅱ) 的解，① 正确。
反之，设 $\boldsymbol A^{n+1}\boldsymbol\alpha=\boldsymbol 0$，若 $\boldsymbol A^n\boldsymbol\alpha\neq\boldsymbol 0$，则 $\boldsymbol\alpha,\boldsymbol A\boldsymbol\alpha,\boldsymbol A^2\boldsymbol\alpha,\cdots,\boldsymbol A^n\boldsymbol\alpha$ 线性无关（用 $\boldsymbol A^n$ 左乘线性组合式可逐个推出系数为 0），但这是 $n+1$ 个 $n$ 维向量，必线性相关，矛盾。故必有 $\boldsymbol A^n\boldsymbol\alpha=\boldsymbol 0$，(Ⅱ) 的解必是 (Ⅰ) 的解，② 正确。选 (A)。
【评注】$\boldsymbol A^n\boldsymbol x=\boldsymbol 0$ 与 $\boldsymbol A^{n+1}\boldsymbol x=\boldsymbol 0$ 同解。` },
      { n: 277, q: R`设矩阵 $\boldsymbol A=\begin{bmatrix}1&2&-2\\4&-3&3\\2&-1&1\end{bmatrix}$，那么矩阵 $\boldsymbol A$ 的三个特征值是
(A) $1,0,-2$。 (B) $1,1,-3$。 (C) $3,0,-2$。 (D) $2,0,-3$。`, a: R`(D)`, sol: R`【分析】由 $\sum\lambda_i=\sum a_{ii}=1+(-3)+1=-1$，排除 (C)。
$\boldsymbol A$ 中第 2、3 两列成比例，故 $|\boldsymbol A|=0$，$\lambda=0$ 必是特征值，排除 (B)。
若 (A) 正确则 $\lambda=1$，但 $|\boldsymbol E-\boldsymbol A|=\begin{vmatrix}0&-2&2\\-4&4&-3\\-2&1&0\end{vmatrix}=-4\neq0$，$\lambda=1$ 不是特征值，排除 (A)。选 (D)。
【评注】用 $\sum\lambda_i=\sum a_{ii}$、$\prod\lambda_i=|\boldsymbol A|$ 及特殊值法排除。` },
      { n: 278, q: R`已知 $\boldsymbol A$ 是四阶矩阵，$\boldsymbol A^*$ 是 $\boldsymbol A$ 的伴随矩阵，若 $\boldsymbol A^*$ 的特征值是 $1,-1,2,4$，那么不可逆矩阵是
(A) $\boldsymbol A-\boldsymbol E$。 (B) $2\boldsymbol A-\boldsymbol E$。 (C) $\boldsymbol A+2\boldsymbol E$。 (D) $\boldsymbol A-4\boldsymbol E$。`, a: R`(C)`, sol: R`【分析】$|\boldsymbol A^*|=-8$，又 $|\boldsymbol A^*|=|\boldsymbol A|^{n-1}=|\boldsymbol A|^3$（$n=4$），故 $|\boldsymbol A|=-2$。由 $\boldsymbol A^*$ 的特征值 $\lambda^*$ 与 $\boldsymbol A$ 的特征值 $\lambda$ 满足 $\lambda\lambda^*=|\boldsymbol A|$，得 $\lambda=\dfrac{|\boldsymbol A|}{\lambda^*}$，即 $\boldsymbol A$ 的特征值为 $-2,2,-1,-\dfrac12$。
故 $\boldsymbol A+2\boldsymbol E$ 的特征值为 $0,4,1,\dfrac32$，含 0，不可逆。选 (C)。
【评注】$\boldsymbol A^*$ 与 $\boldsymbol A$ 特征值关系 $\lambda\lambda^*=|\boldsymbol A|$；$\boldsymbol A+k\boldsymbol E$ 的特征值为 $\lambda+k$。` },
      { n: 279, q: R`已知 $\boldsymbol A$ 是 $n$ 阶可逆矩阵，那么与 $\boldsymbol A$ 有相同特征值的矩阵是
(A) $\boldsymbol A^{\mathrm T}$。 (B) $\boldsymbol A^2$。 (C) $\boldsymbol A^{-1}$。 (D) $\boldsymbol A-\boldsymbol E$。`, a: R`(A)`, sol: R`【分析】$|\lambda\boldsymbol E-\boldsymbol A^{\mathrm T}|=|(\lambda\boldsymbol E-\boldsymbol A)^{\mathrm T}|=|\lambda\boldsymbol E-\boldsymbol A|$，故 $\boldsymbol A$ 与 $\boldsymbol A^{\mathrm T}$ 有相同的特征值。选 (A)。
由 $\boldsymbol{A\alpha}=\lambda\boldsymbol\alpha$ 可得 $\boldsymbol A^2\boldsymbol\alpha=\lambda^2\boldsymbol\alpha$、$\boldsymbol A^{-1}\boldsymbol\alpha=\frac1\lambda\boldsymbol\alpha$、$(\boldsymbol A-\boldsymbol E)\boldsymbol\alpha=(\lambda-1)\boldsymbol\alpha$，特征值不同，排除 (B)(C)(D)。
【评注】$\boldsymbol A^{\mathrm T}$ 与 $\boldsymbol A$ 特征多项式相同；$\boldsymbol A^2,\boldsymbol A^{-1},\boldsymbol A-\boldsymbol E$ 的特征值分别为 $\lambda^2,\frac1\lambda,\lambda-1$。` },
      { n: 280, q: R`矩阵 $\boldsymbol A=\begin{bmatrix}3&-4&-4\\0&2&0\\2&-2&-3\end{bmatrix}$ 有一个特征向量是
(A) $(1,0,-1)^{\mathrm T}$。 (B) $(3,3,-6)^{\mathrm T}$。 (C) $(4,-1,2)^{\mathrm T}$。 (D) $(1,1,-2)^{\mathrm T}$。`, a: R`(C)`, sol: R`【分析】若 $\boldsymbol\alpha$ 是特征向量，则 $\boldsymbol\alpha$ 与 $\boldsymbol{A\alpha}$ 对应分量成比例。
(A) 中 $\boldsymbol A(1,0,-1)^{\mathrm T}=(7,0,5)^{\mathrm T}$，与 $(1,0,-1)^{\mathrm T}$ 不成比例，排除 (A)。
(C) 中 $\boldsymbol A(4,-1,2)^{\mathrm T}=(8,-2,4)^{\mathrm T}=2(4,-1,2)^{\mathrm T}$，是 $\lambda=2$ 的特征向量。选 (C)。
【评注】用定义法验证，不必先求特征值。` },
      { n: 281, q: R`已知 $\boldsymbol\alpha=(1,-2,3)^{\mathrm T}$ 是矩阵 $\boldsymbol A=\begin{bmatrix}3&2&-1\\a&-2&2\\3&b&-1\end{bmatrix}$ 的特征向量，则
(A) $a=-2,b=6$。 (B) $a=2,b=-6$。 (C) $a=2,b=6$。 (D) $a=-2,b=-6$。`, a: R`(A)`, sol: R`【分析】由定义 $\boldsymbol{A\alpha}=\lambda\boldsymbol\alpha$：
$$\begin{bmatrix}3&2&-1\\a&-2&2\\3&b&-1\end{bmatrix}\begin{bmatrix}1\\-2\\3\end{bmatrix}=\lambda\begin{bmatrix}1\\-2\\3\end{bmatrix},$$
对应分量相等得 $3-4-3=\lambda$，$a+4+6=-2\lambda$，$3-2b-3=3\lambda$，故 $\lambda=-4$，$a=-2$，$b=6$。选 (A)。
【评注】利用特征值、特征向量定义建立方程组求参数。` },
      { n: 282, q: R`设 $\boldsymbol A$ 是 $n$ 阶矩阵，$\boldsymbol P$ 是 $n$ 阶可逆矩阵，$n$ 维列向量 $\boldsymbol\alpha$ 是矩阵 $\boldsymbol A$ 的属于特征值 $\lambda$ 的特征向量，那么在下列矩阵中
(1) $\boldsymbol A^2$。　(2) $\boldsymbol P^{-1}\boldsymbol{AP}$。　(3) $\boldsymbol A^{\mathrm T}$。　(4) $\boldsymbol E-\frac12\boldsymbol A$。
$\boldsymbol\alpha$ 肯定是其特征向量的矩阵共有
(A) 1 个。 (B) 2 个。 (C) 3 个。 (D) 4 个。`, a: R`(B)`, sol: R`【分析】(1) $\boldsymbol A^2\boldsymbol\alpha=\boldsymbol A(\lambda\boldsymbol\alpha)=\lambda^2\boldsymbol\alpha$，$\boldsymbol\alpha$ 是 $\boldsymbol A^2$ 的特征向量。
(4) $(\boldsymbol E-\frac12\boldsymbol A)\boldsymbol\alpha=\boldsymbol\alpha-\frac12\lambda\boldsymbol\alpha=(1-\frac12\lambda)\boldsymbol\alpha$，$\boldsymbol\alpha$ 是特征向量。
(2) $(\boldsymbol P^{-1}\boldsymbol{AP})(\boldsymbol P^{-1}\boldsymbol\alpha)=\lambda(\boldsymbol P^{-1}\boldsymbol\alpha)$，特征向量是 $\boldsymbol P^{-1}\boldsymbol\alpha$ 而非 $\boldsymbol\alpha$。
(3) $(\lambda\boldsymbol E-\boldsymbol A)\boldsymbol x=\boldsymbol 0$ 与 $(\lambda\boldsymbol E-\boldsymbol A^{\mathrm T})\boldsymbol x=\boldsymbol 0$ 不一定同解。
故肯定是特征向量的有 2 个。选 (B)。
【评注】相似矩阵的特征向量不一定相同；$\boldsymbol A$ 与 $\boldsymbol A^{\mathrm T}$ 特征值相同但特征向量一般不同。` },
      { n: 283, q: R`设 $\boldsymbol A$ 是 $n$ 阶矩阵，下列命题中正确的是
(A) 若 $\boldsymbol\alpha$ 是 $\boldsymbol A^{\mathrm T}$ 的特征向量，那么 $\boldsymbol\alpha$ 是 $\boldsymbol A$ 的特征向量。
(B) 若 $\boldsymbol\alpha$ 是 $\boldsymbol A^*$ 的特征向量，那么 $\boldsymbol\alpha$ 是 $\boldsymbol A$ 的特征向量。
(C) 若 $\boldsymbol\alpha$ 是 $\boldsymbol A^2$ 的特征向量，那么 $\boldsymbol\alpha$ 是 $\boldsymbol A$ 的特征向量。
(D) 若 $\boldsymbol\alpha$ 是 $2\boldsymbol A$ 的特征向量，那么 $\boldsymbol\alpha$ 是 $\boldsymbol A$ 的特征向量。`, a: R`(D)`, sol: R`【分析】若 $(2\boldsymbol A)\boldsymbol\alpha=\lambda\boldsymbol\alpha$，则 $\boldsymbol{A\alpha}=\frac\lambda2\boldsymbol\alpha$，$\boldsymbol\alpha$ 是 $\boldsymbol A$ 的特征向量，(D) 正确。
反例：$\boldsymbol A=\begin{bmatrix}0&1&0\\0&0&1\\0&0&0\end{bmatrix}$ 时，$\boldsymbol\alpha_1=(0,0,1)^{\mathrm T}$ 是 $\boldsymbol A^{\mathrm T}$ 的特征向量但不是 $\boldsymbol A$ 的特征向量，(A) 错；$\boldsymbol\alpha_2=(0,1,0)^{\mathrm T}$ 是 $\boldsymbol A^2=\boldsymbol A^*$ 的特征向量但不是 $\boldsymbol A$ 的特征向量，(B)(C) 错。
选 (D)。
【评注】由 $2\boldsymbol A$ 的特征向量反推 $\boldsymbol A$ 的特征向量成立；$k\boldsymbol A$ 的特征值与 $\boldsymbol A$ 只差倍数。` },
      { n: 284, q: R`已知三阶矩阵 $\boldsymbol A$ 与三维非零列向量 $\boldsymbol\alpha$，若向量组 $\boldsymbol\alpha,\boldsymbol{A\alpha},\boldsymbol A^2\boldsymbol\alpha$ 线性无关，而 $\boldsymbol A^3\boldsymbol\alpha=3\boldsymbol{A\alpha}-2\boldsymbol A^2\boldsymbol\alpha$，那么矩阵 $\boldsymbol A$ 属于特征值 $\lambda=-3$ 的特征向量是
(A) $\boldsymbol\alpha$。 (B) $\boldsymbol{A\alpha}+2\boldsymbol\alpha$。
(C) $\boldsymbol A^2\boldsymbol\alpha-\boldsymbol{A\alpha}$。 (D) $\boldsymbol A^2\boldsymbol\alpha+2\boldsymbol{A\alpha}-3\boldsymbol\alpha$。`, a: R`(C)`, sol: R`【分析】把 $\boldsymbol A^3\boldsymbol\alpha+2\boldsymbol A^2\boldsymbol\alpha-3\boldsymbol{A\alpha}=\boldsymbol 0$ 因式分解：
$$(\boldsymbol A+3\boldsymbol E)(\boldsymbol A^2\boldsymbol\alpha-\boldsymbol{A\alpha})=\boldsymbol 0.$$
因 $\boldsymbol\alpha,\boldsymbol{A\alpha},\boldsymbol A^2\boldsymbol\alpha$ 线性无关，$\boldsymbol A^2\boldsymbol\alpha-\boldsymbol{A\alpha}\neq\boldsymbol 0$，故它是 $\boldsymbol A+3\boldsymbol E$ 属于特征值 0 的特征向量，即 $\boldsymbol A$ 属于 $\lambda=-3$ 的特征向量。选 (C)。
【评注】也可逐个验算：对 (C)，$\boldsymbol A(\boldsymbol A^2\boldsymbol\alpha-\boldsymbol{A\alpha})=-3(\boldsymbol A^2\boldsymbol\alpha-\boldsymbol{A\alpha})$ 等价于原式。` },
      { n: 285, q: R`设 $\boldsymbol A$ 是三阶矩阵，其特征值是 $1,3,-2$，相应的特征向量依次为 $\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3$，若 $\boldsymbol P=[\boldsymbol\alpha_1,2\boldsymbol\alpha_3,-\boldsymbol\alpha_2]$，则 $\boldsymbol P^{-1}\boldsymbol{AP}=$
(A) $\begin{bmatrix}1&&\\&-2&\\&&3\end{bmatrix}$。 (B) $\begin{bmatrix}1&&\\&-4&\\&&-3\end{bmatrix}$。 (C) $\begin{bmatrix}1&&\\&-2&\\&&-3\end{bmatrix}$。 (D) $\begin{bmatrix}1&&\\&3&\\&&-2\end{bmatrix}$。`, a: R`(A)`, sol: R`【分析】$2\boldsymbol\alpha_3$ 仍是 $\lambda=-2$ 的特征向量，$-\boldsymbol\alpha_2$ 仍是 $\lambda=3$ 的特征向量。$\boldsymbol P$ 的列依次对应特征值 $1,-2,3$，故 $\boldsymbol P^{-1}\boldsymbol{AP}=\begin{bmatrix}1&&\\&-2&\\&&3\end{bmatrix}$。选 (A)。
【评注】$P^{-1}AP=\Lambda$ 时，$P$ 的列向量是 $\boldsymbol A$ 的特征向量，$\Lambda$ 的对角元是相应特征值，位置须一一对应。` },
      { n: 286, q: R`已知 $\boldsymbol P^{-1}\boldsymbol{AP}=\begin{bmatrix}1&0&0\\0&5&0\\0&0&5\end{bmatrix}$，$\boldsymbol\alpha_1$ 是矩阵 $\boldsymbol A$ 属于特征值 $\lambda=1$ 的特征向量，$\boldsymbol\alpha_2$ 与 $\boldsymbol\alpha_3$ 是矩阵 $\boldsymbol A$ 属于特征值 $\lambda=5$ 的线性无关特征向量，那么矩阵 $\boldsymbol P$ 不能是
(A) $[\boldsymbol\alpha_1,-\boldsymbol\alpha_2,\boldsymbol\alpha_3]$。 (B) $[\boldsymbol\alpha_1,\boldsymbol\alpha_2+\boldsymbol\alpha_3,\boldsymbol\alpha_2-2\boldsymbol\alpha_3]$。
(C) $[\boldsymbol\alpha_1,\boldsymbol\alpha_3,\boldsymbol\alpha_2]$。 (D) $[\boldsymbol\alpha_1+\boldsymbol\alpha_2,\boldsymbol\alpha_1-\boldsymbol\alpha_2,\boldsymbol\alpha_3]$。`, a: R`(D)`, sol: R`【分析】由 $\boldsymbol P^{-1}\boldsymbol{AP}=\Lambda$ 知 $\boldsymbol P$ 的三列须分别为 $\lambda=1,5,5$ 的特征向量。
(A) $-\boldsymbol\alpha_2$ 仍是 $\lambda=5$ 的特征向量，正确；(B) $\boldsymbol\alpha_2+\boldsymbol\alpha_3$、$\boldsymbol\alpha_2-2\boldsymbol\alpha_3$ 仍是 $\lambda=5$ 的特征向量且线性无关，正确；(C) 两个 $\lambda=5$ 的特征向量互换位置，正确。
(D) 中 $\boldsymbol\alpha_1+\boldsymbol\alpha_2,\boldsymbol\alpha_1-\boldsymbol\alpha_2$ 是不同特征值的特征向量之和，不再是 $\boldsymbol A$ 的特征向量，故 $\boldsymbol P$ 不能是 (D)。选 (D)。
【评注】同一特征值的特征向量的线性组合仍是特征向量；不同特征值的特征向量之和一般不是特征向量。` },
      { n: 287, q: R`已知矩阵 $\boldsymbol A=\begin{bmatrix}1&2\\0&3\end{bmatrix}$，那么下列矩阵中
① $\begin{bmatrix}1&5\\0&3\end{bmatrix}$；② $\begin{bmatrix}3&0\\-6&1\end{bmatrix}$；③ $\begin{bmatrix}1&2\\4&3\end{bmatrix}$；④ $\begin{bmatrix}2&-1\\-1&2\end{bmatrix}$。
与矩阵 $\boldsymbol A$ 相似的矩阵个数为
(A) 1。 (B) 2。 (C) 3。 (D) 4。`, a: R`(C)`, sol: R`【分析】$\boldsymbol A$ 有两个不同特征值 1、3，故只要特征值同为 1、3 就相似于 $\begin{bmatrix}1&\\&3\end{bmatrix}$。
①、② 分别是上、下三角阵，特征值为 1、3，与 $\boldsymbol A$ 相似；
④ $|\lambda\boldsymbol E-\boldsymbol B|=\begin{vmatrix}\lambda-2&1\\1&\lambda-2\end{vmatrix}=(\lambda-3)(\lambda-1)$，特征值也是 1、3，相似；
③ $|\lambda\boldsymbol E-\boldsymbol B|=\begin{vmatrix}\lambda-1&-2\\-4&\lambda-3\end{vmatrix}=(\lambda-5)(\lambda+1)$，特征值为 5、$-1$，不相似。
故有 3 个。选 (C)。
【评注】$n$ 阶矩阵有 $n$ 个互异特征值必可对角化，特征值相同即相似。` },
      { n: 288, q: R`下列矩阵中，不能相似对角化的矩阵是
(A) $\begin{bmatrix}1&0&-1\\0&2&3\\-1&3&5\end{bmatrix}$。 (B) $\begin{bmatrix}1&0&0\\2&3&0\\-1&5&-1\end{bmatrix}$。
(C) $\begin{bmatrix}1&0&-1\\2&0&-2\\-3&0&3\end{bmatrix}$。 (D) $\begin{bmatrix}1&2&3\\0&1&3\\0&0&-1\end{bmatrix}$。`, a: R`(D)`, sol: R`【分析】(A) 实对称矩阵必可相似对角化。
(B) 下三角阵，对角元 $1,3,-1$ 互异，有三个不同特征值，必可对角化。
(C) 秩 1 矩阵，$\lambda=0$ 至少二重，$\sum a_{ii}=4$ 得特征值 $4,0,0$，且 $r(0\boldsymbol E-\boldsymbol A)=r(\boldsymbol A)=1$，$\lambda=0$ 有 $3-1=2$ 个线性无关特征向量，可对角化。
(D) 上三角阵，特征值 $1,1,-1$；对二重根 $\lambda=1$，$r(\boldsymbol E-\boldsymbol A)=r\begin{bmatrix}0&-2&-3\\0&0&-3\\0&0&2\end{bmatrix}=2$，只有 $3-2=1$ 个线性无关特征向量，不能对角化。选 (D)。
【评注】重根 $\lambda$ 的线性无关特征向量个数 $<n-r(\lambda\boldsymbol E-\boldsymbol A)$ 对应值时不能对角化。` },
      { n: 289, q: R`下列矩阵中，$\boldsymbol A$ 和 $\boldsymbol B$ 相似的是
(A) $\boldsymbol A=\begin{bmatrix}2&0&1\\0&0&0\\0&0&0\end{bmatrix}$，$\boldsymbol B=\begin{bmatrix}2&0&0\\0&0&1\\0&0&0\end{bmatrix}$。
(B) $\boldsymbol A=\begin{bmatrix}1&2&0\\2&3&-1\\0&-1&5\end{bmatrix}$，$\boldsymbol B=\begin{bmatrix}2&1&-1\\1&2&0\\-1&0&2\end{bmatrix}$。
(C) $\boldsymbol A=\begin{bmatrix}2&0&1\\0&0&0\\0&0&0\end{bmatrix}$，$\boldsymbol B=\begin{bmatrix}2&3&0\\0&0&0\\0&0&0\end{bmatrix}$。
(D) $\boldsymbol A=\begin{bmatrix}2&&\\&2&\\&&-3\end{bmatrix}$，$\boldsymbol B=\begin{bmatrix}1&&\\&3&\\&&-2\end{bmatrix}$。`, a: R`(C)`, sol: R`【分析】相似的必要条件：秩相等、$|\boldsymbol A|=|\boldsymbol B|$、特征值相同、主对角元之和相等。
(A) 秩不等；(B) 主对角线之和不等（$9\neq6$）；(D) 特征值不等。均不相似。
(C) 中 $|\lambda\boldsymbol E-\boldsymbol A|=\lambda^2(\lambda-2)$，特征值 $2,0,0$，$r(0\boldsymbol E-\boldsymbol A)=1$ 故 $\lambda=0$ 有两个线性无关特征向量，$\boldsymbol A\sim\begin{bmatrix}2&&\\&0&\\&&0\end{bmatrix}$；同理 $\boldsymbol B\sim\begin{bmatrix}2&&\\&0&\\&&0\end{bmatrix}$，故 $\boldsymbol A\sim\boldsymbol B$。选 (C)。
【评注】先用必要条件排除，再证可对角化后同对角阵。` },
      { n: 290, q: R`设 $\boldsymbol A$ 是三阶矩阵，$\boldsymbol B=\begin{bmatrix}b_{11}&b_{12}&b_{13}\\b_{21}&b_{22}&b_{23}\\b_{31}&b_{32}&b_{33}\end{bmatrix}$ 是三阶可逆阵，且 $\boldsymbol{AB}=\begin{bmatrix}b_{12}&2b_{11}&-b_{13}\\b_{22}&2b_{21}&-b_{23}\\b_{32}&2b_{31}&-b_{33}\end{bmatrix}$，则 $\boldsymbol A\sim$
(A) $\begin{bmatrix}2&0&0\\0&1&0\\0&0&-1\end{bmatrix}$。 (B) $\begin{bmatrix}-1&0&0\\0&1&0\\0&0&2\end{bmatrix}$。
(C) $\begin{bmatrix}0&2&0\\1&0&0\\0&0&-1\end{bmatrix}$。 (D) $\begin{bmatrix}2&0&0\\0&0&1\\0&-1&0\end{bmatrix}$。`, a: R`(C)`, sol: R`【分析】$\boldsymbol{AB}$ 由 $\boldsymbol B$ 作列变换得到：将 $\boldsymbol B$ 的 1、2 列互换，再将第 2 列乘 2、第 3 列乘 $-1$，即
$$\boldsymbol{AB}=\boldsymbol B\begin{bmatrix}0&1&0\\1&0&0\\0&0&1\end{bmatrix}\begin{bmatrix}1&&\\&2&\\&&1\end{bmatrix}\begin{bmatrix}1&&\\&1&\\&&-1\end{bmatrix}=\boldsymbol B\begin{bmatrix}0&2&0\\1&0&0\\0&0&-1\end{bmatrix}.$$
因 $\boldsymbol B$ 可逆，两边左乘 $\boldsymbol B^{-1}$ 得 $\boldsymbol B^{-1}\boldsymbol{AB}=\begin{bmatrix}0&2&0\\1&0&0\\0&0&-1\end{bmatrix}$，故 $\boldsymbol A\sim\begin{bmatrix}0&2&0\\1&0&0\\0&0&-1\end{bmatrix}$。选 (C)。
【评注】列变换右乘初等阵；$\boldsymbol B^{-1}\boldsymbol{AB}$ 与 $\boldsymbol A$ 相似。` },
      { n: 291, q: R`设 $\boldsymbol A$ 是三阶不可逆矩阵，已知 $\boldsymbol{Ax}=\boldsymbol\beta$ 有解 $\boldsymbol\alpha$，$\boldsymbol{Ax}=\boldsymbol\alpha$ 有解 $\boldsymbol\beta$，其中 $\boldsymbol\alpha,\boldsymbol\beta$ 非零，且 $\boldsymbol\alpha\neq\boldsymbol\beta$，则 $\boldsymbol A\sim$
(A) $\begin{bmatrix}1&0&0\\0&1&0\\0&0&-1\end{bmatrix}$。 (B) $\begin{bmatrix}1&0&0\\0&-1&0\\0&0&0\end{bmatrix}$。
(C) $\begin{bmatrix}1&0&0\\0&1&0\\0&0&0\end{bmatrix}$。 (D) $\begin{bmatrix}1&0&0\\0&-1&0\\0&0&2\end{bmatrix}$。`, a: R`(B)`, sol: R`【分析】$\boldsymbol A$ 不可逆，$|\boldsymbol A|=0$，故 $\lambda_1=0$。
由 $\boldsymbol{A\alpha}=\boldsymbol\beta$、$\boldsymbol{A\beta}=\boldsymbol\alpha$ 得
$\boldsymbol A(\boldsymbol\alpha+\boldsymbol\beta)=\boldsymbol\alpha+\boldsymbol\beta$，$\lambda_2=1$，特征向量 $\boldsymbol\alpha+\boldsymbol\beta\neq\boldsymbol 0$；
$\boldsymbol A(\boldsymbol\alpha-\boldsymbol\beta)=-(\boldsymbol\alpha-\boldsymbol\beta)$，$\lambda_3=-1$，特征向量 $\boldsymbol\alpha-\boldsymbol\beta\neq\boldsymbol 0$（因 $\boldsymbol\alpha\neq\boldsymbol\beta$）。
故 $\boldsymbol A$ 的特征值为 $0,1,-1$，与 (B) 相似。选 (B)。
【评注】由 $\boldsymbol{A\alpha}=\boldsymbol\beta,\boldsymbol{A\beta}=\boldsymbol\alpha$ 构造 $\boldsymbol\alpha\pm\boldsymbol\beta$ 找出特征值与特征向量。` },
      { n: 292, q: R`设 $\boldsymbol A,\boldsymbol B,\boldsymbol C,\boldsymbol D$ 都是 $n$ 阶矩阵，且 $\boldsymbol A\sim\boldsymbol C,\boldsymbol B\sim\boldsymbol D$，则必有
(A) $(\boldsymbol A+\boldsymbol B)\sim(\boldsymbol C+\boldsymbol D)$。 (B) $\begin{bmatrix}\boldsymbol A&\boldsymbol O\\\boldsymbol O&\boldsymbol B\end{bmatrix}\sim\begin{bmatrix}\boldsymbol C&\boldsymbol O\\\boldsymbol O&\boldsymbol D\end{bmatrix}$。
(C) $\boldsymbol{AB}\sim\boldsymbol{CD}$。 (D) $\begin{bmatrix}\boldsymbol O&\boldsymbol A\\\boldsymbol B&\boldsymbol O\end{bmatrix}\sim\begin{bmatrix}\boldsymbol O&\boldsymbol C\\\boldsymbol D&\boldsymbol O\end{bmatrix}$。`, a: R`(B)`, sol: R`【分析】由 $\boldsymbol A\sim\boldsymbol C$ 存在可逆 $\boldsymbol P$ 使 $\boldsymbol P^{-1}\boldsymbol{AP}=\boldsymbol C$，由 $\boldsymbol B\sim\boldsymbol D$ 存在可逆 $\boldsymbol Q$ 使 $\boldsymbol Q^{-1}\boldsymbol{BQ}=\boldsymbol D$。则
$$\begin{bmatrix}\boldsymbol P&\boldsymbol O\\\boldsymbol O&\boldsymbol Q\end{bmatrix}^{-1}\begin{bmatrix}\boldsymbol A&\boldsymbol O\\\boldsymbol O&\boldsymbol B\end{bmatrix}\begin{bmatrix}\boldsymbol P&\boldsymbol O\\\boldsymbol O&\boldsymbol Q\end{bmatrix}=\begin{bmatrix}\boldsymbol C&\boldsymbol O\\\boldsymbol O&\boldsymbol D\end{bmatrix},$$
故 (B) 成立。选 (B)。
【评注】(A)(C) 一般需同一相似变换阵，不成立；(D) 中分块位置不同，一般也不成立。` },
      { n: 293, q: R`已知 $\boldsymbol A$ 是 $n$ 阶可逆矩阵，若 $\boldsymbol A\sim\boldsymbol B$，则下列命题中
(1) $\boldsymbol{AB}\sim\boldsymbol{BA}$。 (2) $\boldsymbol A^2\sim\boldsymbol B^2$。 (3) $\boldsymbol A^{-1}\sim\boldsymbol B^{-1}$。 (4) $\boldsymbol A^{\mathrm T}\sim\boldsymbol B^{\mathrm T}$，
正确的命题共有
(A) 4 个。 (B) 3 个。 (C) 2 个。 (D) 1 个。`, a: R`(A)`, sol: R`【分析】$\boldsymbol A$ 可逆，$\boldsymbol A^{-1}(\boldsymbol{AB})\boldsymbol A=\boldsymbol{BA}$，故 $\boldsymbol{AB}\sim\boldsymbol{BA}$，(1) 正确。
由 $\boldsymbol A\sim\boldsymbol B$，存在可逆 $\boldsymbol P$ 使 $\boldsymbol P^{-1}\boldsymbol{AP}=\boldsymbol B$，则
$\boldsymbol B^2=\boldsymbol P^{-1}\boldsymbol A^2\boldsymbol P$，$\boldsymbol B^{-1}=\boldsymbol P^{-1}\boldsymbol A^{-1}\boldsymbol P$，$\boldsymbol B^{\mathrm T}=(\boldsymbol P^{-1}\boldsymbol{AP})^{\mathrm T}=[(\boldsymbol P^{-1})^{\mathrm T}]^{-1}\boldsymbol A^{\mathrm T}(\boldsymbol P^{-1})^{\mathrm T}$，故 (2)(3)(4) 均正确。共 4 个。选 (A)。
【评注】相似关系在幂、逆、转置下保持。` },
      { n: 294, q: R`已知 $\boldsymbol A$ 是三阶矩阵，$r(\boldsymbol A)=1$，则 $\lambda=0$
(A) 必是 $\boldsymbol A$ 的二重特征值。 (B) 至少是 $\boldsymbol A$ 的二重特征值。
(C) 至多是 $\boldsymbol A$ 的二重特征值。 (D) 一重、二重、三重特征值都有可能。`, a: R`(B)`, sol: R`【分析】$r(\boldsymbol A_{3\times3})=1$，即 $r(0\boldsymbol E-\boldsymbol A)=1$，故 $(0\boldsymbol E-\boldsymbol A)\boldsymbol x=\boldsymbol 0$ 有两个线性无关特征向量，$\lambda=0$ 的重数 $\geqslant2$，即至少是二重特征值（也可能三重）。如 $\boldsymbol A=\begin{bmatrix}0&0&1\\0&0&0\\0&0&0\end{bmatrix}$，$r(\boldsymbol A)=1$ 而 $\lambda=0$ 是三重特征值。选 (B)。
【评注】$\lambda$ 的线性无关特征向量个数 $\leqslant$ 特征值重数。` },
      { n: 295, q: R`三阶矩阵 $\boldsymbol A$ 的特征值全为零，则必有
(A) 秩 $r(\boldsymbol A)=0$。 (B) 秩 $r(\boldsymbol A)=1$。 (C) 秩 $r(\boldsymbol A)=2$。 (D) 条件不足，不能确定。`, a: R`(D)`, sol: R`【分析】举例：$\begin{bmatrix}0&0&0\\0&0&0\\0&0&0\end{bmatrix},\begin{bmatrix}0&1&0\\0&0&0\\0&0&0\end{bmatrix},\begin{bmatrix}0&1&0\\0&0&1\\0&0&0\end{bmatrix}$ 特征值全为零，而秩分别为 $0,1,2$。故仅由特征值全为零不能确定秩。选 (D)。
【评注】若还知 $\boldsymbol A$ 有 $k$ 个线性无关特征向量，则 $r(\boldsymbol A)=n-k$。` },
      { n: 296, q: R`$n$ 阶矩阵 $\boldsymbol A$ 和 $\boldsymbol B$ 具有相同的特征值是 $\boldsymbol A$ 与 $\boldsymbol B$ 相似的
(A) 充分必要条件。 (B) 必要而非充分条件。 (C) 充分而非必要条件。 (D) 既非充分也非必要条件。`, a: R`(B)`, sol: R`【分析】由 $\boldsymbol A\sim\boldsymbol B$ 得 $|\lambda\boldsymbol E-\boldsymbol B|=|\boldsymbol P^{-1}(\lambda\boldsymbol E-\boldsymbol A)\boldsymbol P|=|\lambda\boldsymbol E-\boldsymbol A|$，故 $\boldsymbol A,\boldsymbol B$ 有相同特征值，是必要条件。
反之不然，如 $\boldsymbol A=\begin{bmatrix}0&0\\0&0\end{bmatrix}$、$\boldsymbol B=\begin{bmatrix}0&1\\0&0\end{bmatrix}$ 特征值同为 0，但 $r(\boldsymbol A)\neq r(\boldsymbol B)$，不相似。故为必要而非充分条件。选 (B)。
【评注】相同特征值只是相似的必要条件，不能保证相似。` },
      { n: 297, q: R`$n$ 阶矩阵 $\boldsymbol A$ 与 $\boldsymbol B$ 有相同的特征向量是 $\boldsymbol A$ 与 $\boldsymbol B$ 相似的
(A) 充分必要条件。 (B) 充分而非必要条件。 (C) 必要而非充分条件。 (D) 既不充分又不必要条件。`, a: R`(D)`, sol: R`【分析】由 $\boldsymbol A\sim\boldsymbol B$ 知 $\boldsymbol A\boldsymbol\alpha=\lambda\boldsymbol\alpha$ 时 $\boldsymbol B(\boldsymbol P^{-1}\boldsymbol\alpha)=\lambda(\boldsymbol P^{-1}\boldsymbol\alpha)$，特征向量为 $\boldsymbol P^{-1}\boldsymbol\alpha$ 而非 $\boldsymbol\alpha$，故相同特征向量不是必要条件。
反之，若 $\boldsymbol A,\boldsymbol B$ 有相同特征向量但特征值不同（$\boldsymbol{A\alpha}=\lambda\boldsymbol\alpha$，$\boldsymbol{B\alpha}=\mu\boldsymbol\alpha$，$\lambda\neq\mu$），则 $\boldsymbol A,\boldsymbol B$ 不相似，故也不是充分条件。选 (D)。
【评注】相似矩阵的特征向量一般不同（相差可逆变换）。` },
      { n: 298, q: R`$n$ 阶矩阵 $\boldsymbol A$ 具有 $n$ 个线性无关的特征向量是 $\boldsymbol A$ 与对角矩阵相似的
(A) 充分必要条件。 (B) 充分而非必要条件。 (C) 必要而非充分条件。 (D) 既不充分也不必要条件。`, a: R`(A)`, sol: R`【分析】若 $\boldsymbol A\sim\Lambda$，即 $\boldsymbol P^{-1}\boldsymbol{AP}=\Lambda$，令 $\boldsymbol P=[\boldsymbol\gamma_1,\cdots,\boldsymbol\gamma_n]$，则 $\boldsymbol A\boldsymbol\gamma_i=a_i\boldsymbol\gamma_i$，且 $\boldsymbol\gamma_1,\cdots,\boldsymbol\gamma_n$ 线性无关，即 $\boldsymbol A$ 有 $n$ 个线性无关特征向量。
反之，若 $\boldsymbol A$ 有 $n$ 个线性无关特征向量 $\boldsymbol\alpha_1,\cdots,\boldsymbol\alpha_n$ 满足 $\boldsymbol A\boldsymbol\alpha_i=\lambda_i\boldsymbol\alpha_i$，取 $\boldsymbol P=[\boldsymbol\alpha_1,\cdots,\boldsymbol\alpha_n]$ 可逆，则 $\boldsymbol P^{-1}\boldsymbol{AP}=\Lambda$。故为充要条件。选 (A)。
【评注】$\boldsymbol A$ 可对角化 $\iff$ 有 $n$ 个线性无关特征向量；此时 $\boldsymbol P$ 的列是特征向量，$\Lambda$ 的对角元次序与之一致。` },
      { n: 299, q: R`设三阶矩阵 $\boldsymbol A$ 的特征值是 $0,1,-1$，则下列命题中不正确的是
(A) 矩阵 $\boldsymbol A-\boldsymbol E$ 是不可逆矩阵。 (B) 矩阵 $\boldsymbol A+\boldsymbol E$ 和对角矩阵相似。
(C) 矩阵 $\boldsymbol A$ 属于 $1$ 与 $-1$ 的特征向量相互正交。 (D) 方程组 $\boldsymbol{Ax}=\boldsymbol 0$ 的基础解系由一个向量构成。`, a: R`(C)`, sol: R`【分析】$\boldsymbol A$ 的特征值为 $0,1,-1$。
(A) $\boldsymbol A-\boldsymbol E$ 的特征值为 $-1,0,-2$，含 0，不可逆，正确。
(B) $\boldsymbol A+\boldsymbol E$ 的特征值为 $1,2,0$，三个互异，可对角化，正确。
(D) $\boldsymbol A$ 有三个互异特征值，$r(\boldsymbol A)=2$，$n-r(\boldsymbol A)=1$，基础解系由一个向量构成，正确。
(C) 只有当 $\boldsymbol A$ 是实对称矩阵时，不同特征值的特征向量才相互正交；一般矩阵仅线性无关，不一定正交。(C) 不正确。选 (C)。
【评注】「不同特征值特征向量正交」是实对称矩阵的性质，一般矩阵无此结论。` },
      { n: 300, q: R`设 $\boldsymbol A_{3\times3}\sim\begin{bmatrix}1&0&0\\0&-1&0\\0&0&2\end{bmatrix}$，$\boldsymbol B=\boldsymbol A^3-2\boldsymbol A^2-\boldsymbol A+5\boldsymbol E$，则 $\boldsymbol B=$
(A) $\boldsymbol E$。 (B) $-\boldsymbol E$。 (C) $2\boldsymbol E$。 (D) $3\boldsymbol E$。`, a: R`(D)`, sol: R`【分析】由 $\boldsymbol A\sim\Lambda$，存在可逆阵 $\boldsymbol P$ 使 $\boldsymbol A=\boldsymbol P\Lambda\boldsymbol P^{-1}$，代入 $\boldsymbol B$：
$$\boldsymbol B=\boldsymbol P(\Lambda^3-2\Lambda^2-\Lambda+5\boldsymbol E)\boldsymbol P^{-1}.$$
其中 $\Lambda=\operatorname{diag}(1,-1,2)$，逐项计算 $\Lambda^3-2\Lambda^2-\Lambda+5\boldsymbol E=\operatorname{diag}(1,-1,8)-2\operatorname{diag}(1,1,4)-\operatorname{diag}(1,-1,2)+5\boldsymbol E=\operatorname{diag}(3,3,3)$。
故 $\boldsymbol B=\boldsymbol P(3\boldsymbol E)\boldsymbol P^{-1}=3\boldsymbol E$。选 (D)。
【评注】矩阵多项式作用于相似矩阵：$\boldsymbol A\sim\Lambda\Rightarrow f(\boldsymbol A)\sim f(\Lambda)$，$f(\boldsymbol A)=\boldsymbol Pf(\Lambda)\boldsymbol P^{-1}$。` }
    ]
  };
})();
