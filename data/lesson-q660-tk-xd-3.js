window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q660_s21"] = {
    id: "q660_s21",
    ch: "660题 · 填空题 · 线性代数",
    title: "填空题 第 491–515 题",
    probTitle: "填空题（含原书详解）",
    book: "《数学基础过关660题（数学二）》",
    problems: [
      { n: 491, q: R`已知齐次线性方程组 (Ⅰ) $\begin{cases}a_{11}x_1+a_{12}x_2+a_{13}x_3+a_{14}x_4=0\\a_{21}x_1+a_{22}x_2+a_{23}x_3+a_{24}x_4=0\end{cases}$ 有通解 $k_1(2,-1,0,1)^{\mathrm T}+k_2(3,2,1,0)^{\mathrm T}$，则方程组 (Ⅱ) $\begin{cases}a_{11}x_1+a_{12}x_2+a_{13}x_3+a_{14}x_4=0\\a_{21}x_1+a_{22}x_2+a_{23}x_3+a_{24}x_4=0\\x_1-2x_2+x_4=0\end{cases}$ 的通解是 $\underline{\qquad}$。`, a: R`$k(17,9,5,1)^{\mathrm T}$（$k$ 为任意常数）`, sol: R`【分析】(Ⅱ) 的通解在 (Ⅰ) 的通解中，是 (Ⅰ) 的通解里满足 (Ⅱ) 第 3 个方程的解。设 (Ⅰ) 通解为
$$k_1(2,-1,0,1)^{\mathrm T}+k_2(3,2,1,0)^{\mathrm T}=(2k_1+3k_2,-k_1+2k_2,k_2,k_1)^{\mathrm T},$$
代入 $x_1-2x_2+x_4=0$：$(2k_1+3k_2)-2(-k_1+2k_2)+k_1=0$，即 $5k_1=k_2$。
代入得 $k_1(17,9,5,1)^{\mathrm T}$，即通解为 $k(17,9,5,1)^{\mathrm T}$。` },
      { n: 492, q: R`已知方程组 (Ⅰ) $\begin{cases}x_1+2x_2-x_3=0\\2x_1+3x_2+x_3=0\end{cases}$ (Ⅱ) $x_1+5x_3=0$，那么(Ⅰ)与(Ⅱ)的公共解是 $\underline{\qquad}$。`, a: R`$k(-5,3,1)^{\mathrm T}$（$k$ 为任意常数）`, sol: R`【分析】公共解即两解集的交集，联立 (Ⅰ)(Ⅱ) 得方程组 (Ⅲ)，对系数矩阵作初等行变换：
$$\begin{bmatrix}1&2&-1\\2&3&1\\1&0&5\end{bmatrix}\to\begin{bmatrix}1&2&-1\\0&1&-3\\0&0&0\end{bmatrix},$$
$r=2$，$n-r=1$，取 $x_3=1$ 得 $x_2=3,x_1=-5$，基础解系 $(-5,3,1)^{\mathrm T}$。故公共解为 $k(-5,3,1)^{\mathrm T}$。` },
      { n: 493, q: R`已知非齐次线性方程组 (Ⅰ) 与 (Ⅱ) 同解，其中 (Ⅰ) $\begin{cases}x_1+x_2-2x_3=5\\x_2+x_3=2\end{cases}$ (Ⅱ) $\begin{cases}ax_1+4x_2+x_3=11\\2x_1+5x_2-ax_3=16\end{cases}$，则 $a=\underline{\qquad}$。`, a: R`$1$`, sol: R`【分析】(Ⅰ) 的通解为 $(3,2,0)^{\mathrm T}+k(3,-1,1)^{\mathrm T}=(3k+3,2-k,k)^{\mathrm T}$，代入 (Ⅱ)：
$$\begin{cases}a(3+3k)+4(2-k)+k=11,\\2(3+3k)+5(2-k)-ak=16.\end{cases}$$
整理得 $\begin{cases}(k+1)(a-1)=0\\k(1-a)=0\end{cases}$，因 $k$ 任意，故 $a=1$。此时 (Ⅰ) 的解全满足 (Ⅱ)，且两者系数矩阵秩均为 2、通解结构相同，故同解。` },
      { n: 494, q: R`已知 $\boldsymbol A=\begin{bmatrix}3&2&2\\2&3&-2\\2&2&3\end{bmatrix}$，$\boldsymbol A^*$ 是 $\boldsymbol A$ 的伴随矩阵，那么 $\boldsymbol A^*$ 的特征值是 $\underline{\qquad}$。`, a: R`$1,7,7$`, sol: R`【分析】方法一（定义）：求出 $\boldsymbol A^*=\begin{bmatrix}5&-2&-2\\-2&5&-2\\-2&-2&5\end{bmatrix}$，$|\lambda\boldsymbol E-\boldsymbol A^*|=(\lambda-1)(\lambda-7)^2$，故特征值 $1,7,7$。
方法二：$\boldsymbol A=\boldsymbol E+\boldsymbol B$（$\boldsymbol B$ 为全 2 阵），$r(\boldsymbol B)=1$，$\boldsymbol B$ 的特征值为 $6,0,0$，故 $\boldsymbol A$ 的特征值为 $7,1,1$，$|\boldsymbol A|=7$。由 $\boldsymbol A^*$ 特征值 $\frac{|\boldsymbol A|}\lambda$ 得 $1,7,7$。` },
      { n: 495, q: R`已知三阶矩阵 $\boldsymbol A$ 的特征值是 $\frac12,\frac13,\frac14$，又三阶矩阵 $\boldsymbol B$ 满足关系式 $\boldsymbol A^{-1}\boldsymbol{BA}=6\boldsymbol A+\boldsymbol{BA}$，则矩阵 $\boldsymbol B$ 的特征值是 $\underline{\qquad}$。`, a: R`$6,3,2$`, sol: R`【分析】$\boldsymbol A^{-1}\boldsymbol{BA}=6\boldsymbol A+\boldsymbol{BA}\Rightarrow\boldsymbol A^{-1}\boldsymbol B=6\boldsymbol E+\boldsymbol B\Rightarrow(\boldsymbol A^{-1}-\boldsymbol E)\boldsymbol B=6\boldsymbol E$，故 $\boldsymbol B=6(\boldsymbol A^{-1}-\boldsymbol E)^{-1}$。
$\boldsymbol A$ 的特征值 $\frac12,\frac13,\frac14$，故 $\boldsymbol A^{-1}$ 的特征值 $2,3,4$，$\boldsymbol A^{-1}-\boldsymbol E$ 的特征值 $1,2,3$，$(\boldsymbol A^{-1}-\boldsymbol E)^{-1}$ 的特征值 $1,\frac12,\frac13$，故 $\boldsymbol B$ 的特征值为 $6,3,2$。` },
      { n: 496, q: R`设 $\boldsymbol A$ 是主对角线元素之和为 $-5$ 的三阶矩阵，且满足 $\boldsymbol A^2+2\boldsymbol A-3\boldsymbol E=\boldsymbol O$，那么矩阵 $\boldsymbol A$ 的三个特征值是 $\underline{\qquad}$。`, a: R`$1,-3,-3$`, sol: R`【分析】设 $\boldsymbol A\boldsymbol\alpha=\lambda\boldsymbol\alpha$（$\boldsymbol\alpha\neq\boldsymbol 0$），由 $\boldsymbol A^2+2\boldsymbol A-3\boldsymbol E=\boldsymbol O$ 得 $(\lambda^2+2\lambda-3)\boldsymbol\alpha=\boldsymbol 0$，即 $(\lambda+3)(\lambda-1)=0$，$\lambda$ 只能取 $1$ 或 $-3$。
再由 $\sum\lambda_i=\sum a_{ii}=-5$，三个特征值只能是 $1,-3,-3$。` },
      { n: 497, q: R`已知 $\boldsymbol\alpha=(a,1,1)^{\mathrm T}$ 是矩阵 $\boldsymbol A=\begin{bmatrix}-1&2&2\\2&a&-2\\2&-2&-1\end{bmatrix}$ 的逆矩阵的特征向量，那么 $\boldsymbol\alpha$ 在矩阵 $\boldsymbol A$ 中对应的特征值是 $\underline{\qquad}$。`, a: R`$-5$`, sol: R`【分析】设 $\boldsymbol A^{-1}\boldsymbol\alpha=\lambda_0\boldsymbol\alpha$，则 $\boldsymbol\alpha=\lambda_0\boldsymbol A\boldsymbol\alpha$，即
$$\begin{cases}\lambda_0(-a+2+2)=a,\\\lambda_0(2a+a-2)=1,\\\lambda_0(2a-2-1)=1.\end{cases}$$
由后两式 $3a-2=2a-3=\frac1{\lambda_0}$，得 $a=-1$，$\lambda_0=-\frac15$。$\boldsymbol A$ 与 $\boldsymbol A^{-1}$ 同一特征向量的特征值互为倒数，故 $\boldsymbol A$ 中对应的特征值为 $-5$。
【评注】已知特征向量求参数，用定义 $A^{-1}\boldsymbol\alpha=\lambda\boldsymbol\alpha$ 建立方程组，不必求 $\boldsymbol A^{-1}$。` },
      { n: 498, q: R`设 $\boldsymbol\alpha=(1,-1,a)^{\mathrm T}$ 是 $\boldsymbol A=\begin{bmatrix}a&2&2\\2&-1&-2\\2&-2&-1\end{bmatrix}$ 的伴随矩阵 $\boldsymbol A^*$ 的特征向量，其中 $r(\boldsymbol A^*)=3$，则 $a=\underline{\qquad}$。`, a: R`$-1$`, sol: R`【分析】设 $\boldsymbol A^*\boldsymbol\alpha=\lambda_0\boldsymbol\alpha$，两边左乘 $\boldsymbol A$：$\boldsymbol{AA}^*\boldsymbol\alpha=|\boldsymbol A|\boldsymbol\alpha=\lambda_0\boldsymbol A\boldsymbol\alpha$，即
$$\begin{cases}\lambda_0(a-2+2a)=|\boldsymbol A|,\\\lambda_0(2+1-2a)=-|\boldsymbol A|,\\\lambda_0(2+2-a)=a|\boldsymbol A|.\end{cases}$$
因 $r(\boldsymbol A^*)=3$，$|\boldsymbol A^*|\neq0$，$\lambda_0\neq0$。由前两式解得 $a=-1$（此时 $|\boldsymbol A|=-5$，$\lambda_0=1$）。
【评注】利用定义把 $\boldsymbol A^*$ 的关系变形到 $\boldsymbol A$ 的关系式求参数，无需求出 $\boldsymbol A^*$。` },
      { n: 499, q: R`设 $\boldsymbol A$ 是三阶矩阵，$\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3$ 是三维线性无关的列向量，且 $\boldsymbol A\boldsymbol\alpha_1=\boldsymbol\alpha_1,\boldsymbol A\boldsymbol\alpha_2=-\boldsymbol\alpha_3,\boldsymbol A\boldsymbol\alpha_3=\boldsymbol\alpha_2+2\boldsymbol\alpha_3$，则矩阵 $\boldsymbol A$ 的三个特征值是 $\underline{\qquad}$。`, a: R`$1,1,1$`, sol: R`【分析】由条件 $\boldsymbol A[\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3]=[\boldsymbol\alpha_1,-\boldsymbol\alpha_3,\boldsymbol\alpha_2+2\boldsymbol\alpha_3]=[\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3]\boldsymbol B$，其中 $\boldsymbol B=\begin{bmatrix}1&0&0\\0&0&1\\0&-1&2\end{bmatrix}$。
$\boldsymbol P=[\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3]$ 可逆，故 $\boldsymbol A\sim\boldsymbol B$。$|\lambda\boldsymbol E-\boldsymbol B|=(\lambda-1)^3$，$\boldsymbol B$ 的特征值为 $1,1,1$，故 $\boldsymbol A$ 的特征值也为 $1,1,1$。` },
      { n: 500, q: R`已知 $\boldsymbol\alpha$ 是三维列向量，$\boldsymbol\alpha^{\mathrm T}$ 是 $\boldsymbol\alpha$ 的转置，若矩阵 $\boldsymbol\alpha\boldsymbol\alpha^{\mathrm T}$ 相似于 $\begin{bmatrix}2&2&2\\2&2&2\\2&2&2\end{bmatrix}$，则 $\boldsymbol\alpha^{\mathrm T}\boldsymbol\alpha=\underline{\qquad}$。`, a: R`$6$`, sol: R`【分析】设 $\boldsymbol\alpha=(a_1,a_2,a_3)^{\mathrm T}$，则 $\boldsymbol\alpha\boldsymbol\alpha^{\mathrm T}=\begin{bmatrix}a_1^2&a_1a_2&a_1a_3\\a_1a_2&a_2^2&a_2a_3\\a_1a_3&a_2a_3&a_3^2\end{bmatrix}$，其主对角线元素之和即迹 $=\boldsymbol\alpha^{\mathrm T}\boldsymbol\alpha=a_1^2+a_2^2+a_3^2$。
相似矩阵迹相同，故 $\boldsymbol\alpha^{\mathrm T}\boldsymbol\alpha=2+2+2=6$。` },
      { n: 501, q: R`已知 $\boldsymbol A$ 是三阶方阵，其特征值分别为 $1,2,-3$，则行列式 $|\boldsymbol A|$ 中主对角线元素的代数余子式之和 $A_{11}+A_{22}+A_{33}=\underline{\qquad}$。`, a: R`$-7$`, sol: R`【分析】$A_{11}+A_{22}+A_{33}$ 恰是伴随矩阵 $\boldsymbol A^*$ 的迹。$|\boldsymbol A|=1\cdot2\cdot(-3)=-6$，$\boldsymbol A^*$ 的特征值为 $\frac{|\boldsymbol A|}\lambda$，即 $-6,-3,2$。
故 $A_{11}+A_{22}+A_{33}=\operatorname{tr}(\boldsymbol A^*)=-6-3+2=-7$。` },
      { n: 502, q: R`设 $\boldsymbol A=\begin{bmatrix}0&-2&2\\2&4&-2\\a&2&0\end{bmatrix}$ 有二重特征值，则 $a=\underline{\qquad}$。`, a: R`$2$ 或 $\frac32$`, sol: R`【分析】$|\lambda\boldsymbol E-\boldsymbol A|=(\lambda-2)\left(\lambda^2-2\lambda-2(a-2)\right)$。
若 $\lambda=2$ 是二重根，则 $2^2-2\cdot2-2(a-2)=0$，得 $a=2$；
若 $\lambda^2-2\lambda-2(a-2)$ 为完全平方 $(\lambda-1)^2$，则 $-2(a-2)=1$，得 $a=\frac32$。
故 $a=2$ 或 $\frac32$。` },
      { n: 503, q: R`设 $\boldsymbol A$ 是三阶实对称矩阵，存在正交阵 $\boldsymbol Q=[\boldsymbol\xi_1,\boldsymbol\xi_2,\boldsymbol\xi_3]$，使得 $\boldsymbol Q^{-1}\boldsymbol{AQ}=\boldsymbol Q^{\mathrm T}\boldsymbol{AQ}=\begin{bmatrix}1&0&0\\0&2&0\\0&0&3\end{bmatrix}$，则矩阵 $\boldsymbol B=\boldsymbol A-\boldsymbol\xi_1\boldsymbol\xi_1^{\mathrm T}$ 的特征值是 $\underline{\qquad}$。`, a: R`$0,2,3$`, sol: R`【分析】$\boldsymbol A$ 有特征值 $1,2,3$，对应特征向量 $\boldsymbol\xi_1,\boldsymbol\xi_2,\boldsymbol\xi_3$，且 $\boldsymbol\xi_i^{\mathrm T}\boldsymbol\xi_j=\delta_{ij}$。
$\boldsymbol B\boldsymbol\xi_i=\boldsymbol A\boldsymbol\xi_i-\boldsymbol\xi_1(\boldsymbol\xi_1^{\mathrm T}\boldsymbol\xi_i)$：$i=1$ 时 $=\boldsymbol\xi_1-\boldsymbol\xi_1=\boldsymbol 0$；$i=2,3$ 时 $=i\boldsymbol\xi_i$。故 $\boldsymbol B$ 的特征值为 $0,2,3$。` },
      { n: 504, q: R`设 $\boldsymbol\alpha=(1,-1,a)^{\mathrm T},\boldsymbol\beta=(1,a,2)^{\mathrm T},\boldsymbol A=\boldsymbol E+\boldsymbol\alpha\boldsymbol\beta^{\mathrm T}$，且 $\lambda=3$ 是矩阵 $\boldsymbol A$ 的特征值，则矩阵 $\boldsymbol A$ 属于特征值 $\lambda=3$ 的特征向量是 $\underline{\qquad}$。`, a: R`$k(1,-1,1)^{\mathrm T}$（$k$ 为非零任意常数）`, sol: R`【分析】令 $\boldsymbol B=\boldsymbol\alpha\boldsymbol\beta^{\mathrm T}$，$r(\boldsymbol B)=1$，$\boldsymbol\beta^{\mathrm T}\boldsymbol\alpha=a+1$，故 $\boldsymbol B$ 的特征值为 $a+1,0,0$，$\boldsymbol A=\boldsymbol E+\boldsymbol B$ 的特征值为 $a+2,1,1$。
由 $\lambda=3$ 是特征值得 $a+2=3$，$a=1$。此时 $\boldsymbol B\boldsymbol\alpha=\boldsymbol\alpha(\boldsymbol\beta^{\mathrm T}\boldsymbol\alpha)=2\boldsymbol\alpha$，即 $\boldsymbol\alpha=(1,-1,1)^{\mathrm T}$ 是 $\boldsymbol A$ 属于 $\lambda=3$ 的特征向量。故特征向量为 $k(1,-1,1)^{\mathrm T}$（$k\neq0$）。
【评注】特征向量应写成通解并注明任意常数非零。` },
      { n: 505, q: R`已知矩阵 $\boldsymbol A=\begin{bmatrix}3&1&2\\0&2&a\\0&0&3\end{bmatrix}$ 和对角矩阵相似，则 $a=\underline{\qquad}$。`, a: R`$-2$`, sol: R`【分析】$|\lambda\boldsymbol E-\boldsymbol A|=(\lambda-2)(\lambda-3)^2$，特征值为 $2,3,3$。有二重根，$\boldsymbol A$ 可对角化 $\iff\lambda=3$ 有两个线性无关特征向量 $\iff r(3\boldsymbol E-\boldsymbol A)=1$。
$$3\boldsymbol E-\boldsymbol A=\begin{bmatrix}0&-1&-2\\0&1&-a\\0&0&0\end{bmatrix}\to\begin{bmatrix}0&-1&-2\\0&0&-a-2\\0&0&0\end{bmatrix},$$
故 $a=-2$。` },
      { n: 506, q: R`已知 $\boldsymbol A$ 是四阶实对称矩阵，秩 $r(\boldsymbol A)=3$，矩阵 $\boldsymbol A$ 满足 $\boldsymbol A^4-\boldsymbol A^3-\boldsymbol A^2-2\boldsymbol A=\boldsymbol O$，则与 $\boldsymbol A$ 相似的对角矩阵是 $\underline{\qquad}$。`, a: R`$\operatorname{diag}(2,2,2,0)$`, sol: R`【分析】设 $\boldsymbol A\boldsymbol\alpha=\lambda\boldsymbol\alpha$（$\boldsymbol\alpha\neq\boldsymbol 0$），由 $\boldsymbol A^4-\boldsymbol A^3-\boldsymbol A^2-2\boldsymbol A=\boldsymbol O$ 得 $\lambda(\lambda-2)(\lambda^2+\lambda+1)=0$。
实对称矩阵特征值为实数，故 $\lambda$ 只能取 $0$ 或 $2$。由 $r(\boldsymbol A)=3$，特征值必为 $2,2,2,0$，故 $\boldsymbol A\sim\operatorname{diag}(2,2,2,0)$。` },
      { n: 507, q: R`已知矩阵 $\boldsymbol A=\begin{bmatrix}1&-1&a\\1&3&5\\0&0&2\end{bmatrix}$ 只有一个线性无关的特征向量，那么 $\boldsymbol A$ 的三个特征值是 $\underline{\qquad}$。`, a: R`$2,2,2$`, sol: R`【分析】若 $\boldsymbol A$ 有两个不同特征值，则至少有两个线性无关的特征向量，与题设矛盾，故特征值只能是三重根。
由 $\sum a_{ii}=\sum\lambda_i$ 得 $1+3+2=3\lambda$，即 $\lambda=2$，故三个特征值均为 $2$。` },
      { n: 508, q: R`已知 $\boldsymbol A=\begin{bmatrix}3&2&-2\\0&-1&0\\a&2&-3\end{bmatrix}\sim\boldsymbol B=\begin{bmatrix}1&0&0\\0&-1&0\\0&0&-1\end{bmatrix}$，则 $a=\underline{\qquad}$。`, a: R`$4$`, sol: R`【分析】$\boldsymbol A\sim\boldsymbol B$，特征值同为 $1,-1,-1$。将 $\lambda=1$ 代入特征方程：
$$|\boldsymbol E-\boldsymbol A|=\begin{vmatrix}-2&-2&2\\0&2&0\\-a&2&4\end{vmatrix}=2(-8+2a)=0,$$
得 $a=4$。` },
      { n: 509, q: R`$\boldsymbol A$ 是三阶矩阵，$\boldsymbol\xi,\boldsymbol\alpha,\boldsymbol\beta$ 是三个三维线性无关的列向量，其中 $\boldsymbol{Ax}=\boldsymbol 0$ 有解 $\boldsymbol\xi$，$\boldsymbol{Ax}=\boldsymbol\beta$ 有解 $\boldsymbol\alpha$，$\boldsymbol{Ax}=\boldsymbol\alpha$ 有解 $\boldsymbol\beta$，则 $\boldsymbol A\sim\underline{\qquad}$。`, a: R`$\begin{bmatrix}0&0&0\\0&1&0\\0&0&-1\end{bmatrix}$`, sol: R`【分析】由 $\boldsymbol A\boldsymbol\xi=\boldsymbol 0=0\boldsymbol\xi$ 得 $\lambda_1=0$；由 $\boldsymbol A\boldsymbol\alpha=\boldsymbol\beta$、$\boldsymbol A\boldsymbol\beta=\boldsymbol\alpha$ 得
$$\boldsymbol A(\boldsymbol\alpha+\boldsymbol\beta)=\boldsymbol\alpha+\boldsymbol\beta,\quad \boldsymbol A(\boldsymbol\alpha-\boldsymbol\beta)=-(\boldsymbol\alpha-\boldsymbol\beta).$$
$\boldsymbol\alpha\pm\boldsymbol\beta\neq\boldsymbol 0$，故 $\lambda_2=1,\lambda_3=-1$。三阶矩阵有三个不同特征值 $0,1,-1$，故 $\boldsymbol A\sim\operatorname{diag}(0,1,-1)$。` },
      { n: 510, q: R`已知 $\boldsymbol A\sim\begin{bmatrix}1&0\\0&2\end{bmatrix}$，则 $\boldsymbol B=(\boldsymbol A-\boldsymbol E)(\boldsymbol A-2\boldsymbol E)=\underline{\qquad}$。`, a: R`$\boldsymbol O$`, sol: R`【分析】$\boldsymbol A\sim\Lambda$，存在可逆阵 $\boldsymbol P$ 使 $\boldsymbol A=\boldsymbol P\Lambda\boldsymbol P^{-1}$，故
$$\boldsymbol B=\boldsymbol P(\Lambda-\boldsymbol E)(\Lambda-2\boldsymbol E)\boldsymbol P^{-1}=\boldsymbol P\begin{bmatrix}0&0\\0&1\end{bmatrix}\begin{bmatrix}-1&0\\0&0\end{bmatrix}\boldsymbol P^{-1}=\boldsymbol O.$$
【评注】用相似对角阵计算矩阵多项式。` },
      { n: 511, q: R`设 $f(x_1,x_2)=\begin{vmatrix}-2&3&x_1\\3&-5&x_2\\x_1&x_2&0\end{vmatrix}$，则二次型的对应矩阵是 $\underline{\qquad}$。`, a: R`$\begin{bmatrix}5&3\\3&2\end{bmatrix}$`, sol: R`【分析】按第 3 列展开：
$$f=x_1\begin{vmatrix}3&-5\\x_2&0\end{vmatrix}-x_2\begin{vmatrix}-2&3\\x_1&x_2\end{vmatrix}=3x_1x_2+5x_1^2+2x_2^2+3x_1x_2=5x_1^2+6x_1x_2+2x_2^2,$$
故对应矩阵为 $\begin{bmatrix}5&3\\3&2\end{bmatrix}$。` },
      { n: 512, q: R`已知三元二次型 $f(x_1,x_2,x_3)=x_1^2+x_2^2+x_3^2+2ax_1x_2+2ax_1x_3+2ax_2x_3$ 的秩为 2，则二次型的正惯性指数 $p=\underline{\qquad}$。`, a: R`$2$`, sol: R`【分析】二次型矩阵 $\boldsymbol A=\begin{bmatrix}1&a&a\\a&1&a\\a&a&1\end{bmatrix}$，$|\boldsymbol A|=(2a+1)(a-1)^2$。由 $r(\boldsymbol A)=2$ 且 $a=1$ 时 $r(\boldsymbol A)=1$ 不合，故 $a=-\frac12$。
此时 $|\lambda\boldsymbol E-\boldsymbol A|=\lambda\left(\lambda-\frac32\right)^2$，特征值 $\frac32,\frac32,0$，故正惯性指数 $p=2$。` },
      { n: 513, q: R`二次型 $f(x_1,x_2,x_3,x_4)=x_3^2+4x_4^2+2x_1x_2+4x_3x_4$ 的规范形是 $\underline{\qquad}$。`, a: R`$y_1^2+y_2^2-y_3^2$`, sol: R`【分析】二次型矩阵 $\boldsymbol A=\begin{bmatrix}0&1&0&0\\1&0&0&0\\0&0&1&2\\0&0&2&4\end{bmatrix}$，$|\lambda\boldsymbol E-\boldsymbol A|=\lambda(\lambda-1)(\lambda+1)(\lambda-5)$，特征值 $1,5,-1,0$，故 $p=2,q=1$，规范形为 $y_1^2+y_2^2-y_3^2$。
（配方法：$f=2x_1x_2+(x_3+2x_4)^2$，令 $x_1=\frac1{\sqrt2}(y_1+y_3),x_2=\frac1{\sqrt2}(y_1-y_3),x_3+2x_4=y_2$，同样得规范形。）` },
      { n: 514, q: R`已知二次型 $f(x_1,x_2,x_3)=\boldsymbol x^{\mathrm T}\boldsymbol{Ax}=2x_1^2+2x_2^2+ax_3^2+4x_1x_3+2tx_2x_3$ 经正交变换 $\boldsymbol x=\boldsymbol{Py}$ 可化成标准形 $f=y_1^2+2y_2^2+7y_3^2$，则 $t=\underline{\qquad}$。`, a: R`$\pm1$`, sol: R`【分析】正交变换下标准形平方项系数即 $\boldsymbol A$ 的特征值，且 $\boldsymbol A$ 与对角阵相似。$\boldsymbol A=\begin{bmatrix}2&0&2\\0&2&t\\2&t&a\end{bmatrix}$，由相似性：
$$\begin{cases}2+2+a=1+2+7,\\|\boldsymbol E-\boldsymbol A|=\begin{vmatrix}-1&0&-2\\0&-1&-t\\-2&-t&1-a\end{vmatrix}=0,\end{cases}$$
即 $a=6,t^2=1$，故 $t=\pm1$。` },
      { n: 515, q: R`已知矩阵 $\boldsymbol A=\begin{bmatrix}1&1&-2\\1&-2&1\\-2&1&1\end{bmatrix}$ 与二次型 $\boldsymbol x^{\mathrm T}\boldsymbol{Bx}=3x_1^2+ax_3^2$ 的矩阵 $\boldsymbol B$ 合同，则 $a$ 的取值范围是 $\underline{\qquad}$。`, a: R`$a<0$`, sol: R`【分析】$\boldsymbol A$ 与 $\boldsymbol B$ 合同 $\iff$ 两二次型正、负惯性指数相同。$|\lambda\boldsymbol E-\boldsymbol A|=\lambda(\lambda-3)(\lambda+3)$，故 $p_A=1,q_A=1$。
$\boldsymbol B$ 对应二次型 $3x_1^2+ax_3^2$，当 $a<0$ 时 $p_B=1,q_B=1$，与 $\boldsymbol A$ 相同，故 $a<0$。
【评注】不要误以为 $a=-3$（$a=-3$ 时二者还相似）。` }
    ]
  };
})();
