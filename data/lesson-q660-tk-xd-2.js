window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q660_s20"] = {
    id: "q660_s20",
    ch: "660题 · 填空题 · 线性代数",
    title: "填空题 第 466–490 题",
    probTitle: "填空题（含原书详解）",
    book: "《数学基础过关660题（数学二）》",
    problems: [
      { n: 466, q: R`若 $\begin{bmatrix}1&1\\2&2\end{bmatrix}\boldsymbol X=\begin{bmatrix}2&3\\4&6\end{bmatrix}$，则 $\boldsymbol X=\underline{\qquad}$。`, a: R`$\begin{bmatrix}2-t&3-u\\t&u\end{bmatrix}$（$t,u$ 为任意实数）`, sol: R`【分析】系数矩阵不可逆，设 $\boldsymbol X=\begin{bmatrix}x_1&y_1\\x_2&y_2\end{bmatrix}$，由
$$\begin{bmatrix}1&1\\2&2\end{bmatrix}\begin{bmatrix}x_1&y_1\\x_2&y_2\end{bmatrix}=\begin{bmatrix}2&3\\4&6\end{bmatrix}$$
得 $x_1+x_2=2$，$y_1+y_2=3$，故 $x_1=2-t,x_2=t,y_1=3-u,y_2=u$，即 $\boldsymbol X=\begin{bmatrix}2-t&3-u\\t&u\end{bmatrix}$。
【评注】两列系数矩阵相同、常数项不同，可合并增广矩阵一起消元。` },
      { n: 467, q: R`已知 $\boldsymbol A=\begin{bmatrix}1&2&3&4\\2&3&4&5\\3&4&5&6\\4&5&6&7\end{bmatrix}$，$\boldsymbol B=\begin{bmatrix}0&1&-1&2\\0&-1&2&3\\0&0&1&4\\0&0&0&2\end{bmatrix}$，则秩 $r(\boldsymbol{AB}+2\boldsymbol A)=\underline{\qquad}$。`, a: R`$2$`, sol: R`【分析】$\boldsymbol{AB}+2\boldsymbol A=\boldsymbol A(\boldsymbol B+2\boldsymbol E)$，而
$$\boldsymbol B+2\boldsymbol E=\begin{bmatrix}2&1&-1&2\\0&1&2&3\\0&0&3&4\\0&0&0&4\end{bmatrix}$$
为上三角阵，$|\boldsymbol B+2\boldsymbol E|=24\neq0$ 可逆，故 $r(\boldsymbol{AB}+2\boldsymbol A)=r(\boldsymbol A)$。
对 $\boldsymbol A$ 作初等行变换：$\boldsymbol A\to\begin{bmatrix}1&2&3&4\\0&-1&-2&-3\\0&0&0&0\\0&0&0&0\end{bmatrix}$，故 $r(\boldsymbol A)=2$，即 $r(\boldsymbol{AB}+2\boldsymbol A)=2$。` },
      { n: 468, q: R`设 $\boldsymbol A=\begin{bmatrix}0&1&0&0\\0&0&1&0\\0&0&0&1\\0&0&0&0\end{bmatrix}$，$\boldsymbol A^*$ 是 $\boldsymbol A$ 的伴随矩阵，则 $r(\boldsymbol A^*)^*=\underline{\qquad}$。`, a: R`$0$`, sol: R`【分析】由伴随矩阵秩的公式：$r(\boldsymbol A)=3$（$n=4$），故 $r(\boldsymbol A^*)=1$；又 $r(\boldsymbol A^*)=1<n-1=3$，故 $r(\boldsymbol A^*)^*=0$。
【评注】直接计算：$\boldsymbol A^*=\begin{bmatrix}0&0&0&-1\\0&0&0&0\\0&0&0&0\\0&0&0&0\end{bmatrix}$，$(\boldsymbol A^*)^*=\boldsymbol O$，故秩为 0。` },
      { n: 469, q: R`设 $\boldsymbol A$ 是五阶矩阵，$\boldsymbol A^*$ 是 $\boldsymbol A$ 的伴随矩阵，若 $\boldsymbol\eta_1,\boldsymbol\eta_2$ 是齐次线性方程组 $\boldsymbol{Ax}=\boldsymbol 0$ 的两个分量不成比例的解，那么秩 $r(\boldsymbol A^*)=\underline{\qquad}$。`, a: R`$0$`, sol: R`【分析】$\boldsymbol\eta_1,\boldsymbol\eta_2$ 分量不成比例，故线性无关，$\boldsymbol{Ax}=\boldsymbol 0$ 至少有两个线性无关解，$n-r(\boldsymbol A)\geqslant2$，$n=5$，故 $r(\boldsymbol A)\leqslant3<4=n-1$。
于是 $\boldsymbol A$ 的 4 阶子式全为 0，代数余子式 $A_{ij}$ 恒为 0，$\boldsymbol A^*=\boldsymbol O$，$r(\boldsymbol A^*)=0$。
【评注】用 $r(\boldsymbol A^*)=\begin{cases}n,&r(\boldsymbol A)=n,\\1,&r(\boldsymbol A)=n-1,\\0,&r(\boldsymbol A)<n-1\end{cases}$ 立即得结论。` },
      { n: 470, q: R`设 $\boldsymbol A=\begin{bmatrix}2&2&1\\1&-2&2\end{bmatrix}$ 经初等行变换化成阶梯形矩阵 $\boldsymbol B=\begin{bmatrix}1&-2&2\\0&2&-1\end{bmatrix}$，初等变换过程为
$$\boldsymbol A=\begin{bmatrix}2&2&1\\1&-2&2\end{bmatrix}\to\begin{bmatrix}1&-2&2\\2&2&1\end{bmatrix}\to\begin{bmatrix}1&-2&2\\0&6&-3\end{bmatrix}\to\begin{bmatrix}1&-2&2\\0&2&-1\end{bmatrix}=\boldsymbol B.$$
故知有可逆阵 $\boldsymbol P$，使得 $\boldsymbol{PA}=\boldsymbol B$，其中 $\boldsymbol P=\underline{\qquad}$。`, a: R`$\begin{bmatrix}0&1\\\frac13&-\frac23\end{bmatrix}$`, sol: R`【分析】初等行变换相当于左乘初等阵：
$$\boldsymbol B=E_2\left(\tfrac13\right)E_{12}(-2)E_{12}\boldsymbol A,$$
故 $\boldsymbol P=E_2(\frac13)E_{12}(-2)E_{12}=\begin{bmatrix}1&0\\0&\frac13\end{bmatrix}\begin{bmatrix}1&0\\-2&1\end{bmatrix}\begin{bmatrix}0&1\\1&0\end{bmatrix}=\begin{bmatrix}0&1\\\frac13&-\frac23\end{bmatrix}$。
【评注】应验算 $\boldsymbol{PA}=\boldsymbol B$ 是否成立。` },
      { n: 471, q: R`设 $\boldsymbol A=\begin{bmatrix}1&0&1\\-1&-2&2\\0&2&a\end{bmatrix}\cong\boldsymbol B=\begin{bmatrix}1&0&1\\2&-1&0\\4&-1&2\end{bmatrix}$，则 $a=\underline{\qquad}$。`, a: R`$-3$`, sol: R`【分析】$\boldsymbol A_{3\times3}\cong\boldsymbol B_{3\times3}\iff r(\boldsymbol A)=r(\boldsymbol B)$。
$\boldsymbol B\to\begin{bmatrix}1&0&1\\0&-1&-2\\0&0&0\end{bmatrix}$，$r(\boldsymbol B)=2$；$\boldsymbol A\to\begin{bmatrix}1&0&1\\0&-2&3\\0&0&a+3\end{bmatrix}$，$r(\boldsymbol A)=2\iff a=-3$。故 $a=-3$。` },
      { n: 472, q: R`已知向量组 $\boldsymbol\alpha_1=(1,2,-1,1)^{\mathrm T},\boldsymbol\alpha_2=(2,0,t,0)^{\mathrm T},\boldsymbol\alpha_3=(0,-4,5,t)^{\mathrm T}$ 线性无关，则 $t$ 的取值范围为 $\underline{\qquad}$。`, a: R`$(-\infty,+\infty)$`, sol: R`【分析】向量个数(3)与维数(4)不同，用秩分析。$\boldsymbol A=[\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3]\to\begin{bmatrix}1&2&0\\0&1&1\\0&0&3-t\\0&0&t+2\end{bmatrix}$，对任意 $t$ 恒有 $r(\boldsymbol A)=3$，故对任意 $t$ 都线性无关，取值范围 $(-\infty,+\infty)$。
【评注】$\boldsymbol\alpha_1,\cdots,\boldsymbol\alpha_s$ 线性无关 $\iff r(\boldsymbol\alpha_1,\cdots,\boldsymbol\alpha_s)=s\iff$ 齐次方程组只有零解。` },
      { n: 473, q: R`设 $n$ 维向量 $\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3$ 满足 $2\boldsymbol\alpha_1-\boldsymbol\alpha_2+3\boldsymbol\alpha_3=\boldsymbol 0$，$\boldsymbol\beta$ 是任意 $n$ 维向量，若 $\boldsymbol\beta+\boldsymbol\alpha_1,\boldsymbol\beta+\boldsymbol\alpha_2,a\boldsymbol\beta+\boldsymbol\alpha_3$ 线性相关，则 $a=\underline{\qquad}$。`, a: R`$-\frac13$`, sol: R`【分析】存在不全为零的 $k_1,k_2,k_3$ 使 $k_1(\boldsymbol\beta+\boldsymbol\alpha_1)+k_2(\boldsymbol\beta+\boldsymbol\alpha_2)+k_3(a\boldsymbol\beta+\boldsymbol\alpha_3)=\boldsymbol 0$，整理得
$$(k_1+k_2+ak_3)\boldsymbol\beta+(k_1\boldsymbol\alpha_1+k_2\boldsymbol\alpha_2+k_3\boldsymbol\alpha_3)=\boldsymbol 0.$$
取 $k_1=2,k_2=-1,k_3=3$（使 $k_1\boldsymbol\alpha_1+k_2\boldsymbol\alpha_2+k_3\boldsymbol\alpha_3=\boldsymbol 0$），再令 $\boldsymbol\beta$ 的系数为 0：$2-1+3a=0$，故 $a=-\frac13$。` },
      { n: 474, q: R`已知 $\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3$ 线性无关，若 $\boldsymbol\alpha_1+2\boldsymbol\alpha_2+\boldsymbol\alpha_3,\boldsymbol\alpha_1+a\boldsymbol\alpha_2,3\boldsymbol\alpha_2-a\boldsymbol\alpha_3$ 线性相关，则 $a=\underline{\qquad}$。`, a: R`$3$ 或 $-1$`, sol: R`【分析】存在不全为零的 $x_1,x_2,x_3$ 使 $x_1(\boldsymbol\alpha_1+2\boldsymbol\alpha_2+\boldsymbol\alpha_3)+x_2(\boldsymbol\alpha_1+a\boldsymbol\alpha_2)+x_3(3\boldsymbol\alpha_2-a\boldsymbol\alpha_3)=\boldsymbol 0$，即
$$(x_1+x_2)\boldsymbol\alpha_1+(2x_1+ax_2+3x_3)\boldsymbol\alpha_2+(x_1-ax_3)\boldsymbol\alpha_3=\boldsymbol 0.$$
由 $\boldsymbol\alpha_i$ 线性无关得齐次方程组 $\begin{cases}x_1+x_2=0\\2x_1+ax_2+3x_3=0\\x_1-ax_3=0\end{cases}$ 有非零解，故系数行列式
$$\begin{vmatrix}1&1&0\\2&a&3\\1&0&-a\end{vmatrix}=-a^2+2a+3=(a-3)(a+1)=0,$$
即 $a=3$ 或 $-1$。` },
      { n: 475, q: R`向量组 $\boldsymbol\alpha_1=(1,-2,0,3)^{\mathrm T},\boldsymbol\alpha_2=(2,-5,-3,6)^{\mathrm T},\boldsymbol\alpha_3=(0,1,3,0)^{\mathrm T},\boldsymbol\alpha_4=(2,-1,4,7)^{\mathrm T}$ 的一个极大线性无关组是 $\underline{\qquad}$。`, a: R`$\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_4$（不唯一）`, sol: R`【分析】对列向量组作初等行变换：
$$[\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3,\boldsymbol\alpha_4]\to\begin{bmatrix}1&2&0&2\\0&-1&1&3\\0&0&0&1\\0&0&0&0\end{bmatrix},$$
秩为 3，非零行首个非零元所在列为 1、2、4 列，故 $\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_4$ 是极大线性无关组。
【评注】极大线性无关组一般不唯一（如 $\boldsymbol\alpha_1,\boldsymbol\alpha_3,\boldsymbol\alpha_4$ 也是）。` },
      { n: 476, q: R`已知向量 $\boldsymbol\beta=(1,a,-1)^{\mathrm T}$ 可以由 $\boldsymbol\alpha_1=(a+2,7,1)^{\mathrm T},\boldsymbol\alpha_2=(1,-1,2)^{\mathrm T}$ 线性表出，则 $a=\underline{\qquad}$。`, a: R`$3$ 或 $-4$`, sol: R`【分析】$\boldsymbol\alpha_1,\boldsymbol\alpha_2$ 分量不成比例，线性无关，故 $\boldsymbol\beta$ 可由其表出 $\iff\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\beta$ 线性相关 $\iff|\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\beta|=0$。
$$\begin{vmatrix}a+2&1&1\\7&-1&a\\1&2&-1\end{vmatrix}=-2(a^2+a-12)=0,$$
故 $a=3$ 或 $a=-4$。
【评注】仅知三者线性相关不能保证 $\boldsymbol\beta$ 可表出，须先判断 $\boldsymbol\alpha_1,\boldsymbol\alpha_2$ 线性无关。` },
      { n: 477, q: R`已知 $\boldsymbol\alpha_1=(2,3,3)^{\mathrm T},\boldsymbol\alpha_2=(1,0,3)^{\mathrm T},\boldsymbol\alpha_3=(3,5,a+2)^{\mathrm T}$，若 $\boldsymbol\beta_1=(4,-3,15)^{\mathrm T}$ 可由 $\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3$ 线性表出，$\boldsymbol\beta_2=(-2,-5,a)^{\mathrm T}$ 不能由 $\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3$ 线性表出，则 $a=\underline{\qquad}$。`, a: R`$2$`, sol: R`【分析】两方程组的系数矩阵相同，可联合消元：
$$[\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3\mid\boldsymbol\beta_1,\boldsymbol\beta_2]\to\begin{bmatrix}-1&1&-2&7&3\\0&3&-1&18&4\\0&0&a-2&0&a+1\end{bmatrix}.$$
对 $\boldsymbol\beta_1$ 恒有解；对 $\boldsymbol\beta_2$，当 $a=2$ 时 $r(\boldsymbol A)=2<r(\overline{\boldsymbol A})=3$ 无解，故 $a=2$。` },
      { n: 478, q: R`已知 $\boldsymbol\alpha_1=(1,4,2)^{\mathrm T},\boldsymbol\alpha_2=(2,7,3)^{\mathrm T},\boldsymbol\alpha_3=(0,1,a)^{\mathrm T}$ 可以表示任意一个三维向量，则 $a$ 的取值为 $\underline{\qquad}$。`, a: R`$a\neq1$`, sol: R`【分析】三个三维向量可表示任一三维向量 $\iff$ 它们线性无关 $\iff|\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3|\neq0$。
$$\begin{vmatrix}1&2&0\\4&7&1\\2&3&a\end{vmatrix}=1-a\neq0,$$
故 $a\neq1$。` },
      { n: 479, q: R`与 $\boldsymbol\alpha_1=(1,2,3,-1)^{\mathrm T},\boldsymbol\alpha_2=(0,1,1,2)^{\mathrm T},\boldsymbol\alpha_3=(2,1,3,0)^{\mathrm T}$ 都正交的单位向量是 $\underline{\qquad}$。`, a: R`$\pm\frac1{\sqrt3}(1,1,-1,0)^{\mathrm T}$`, sol: R`【分析】设 $\boldsymbol\beta=(x_1,x_2,x_3,x_4)^{\mathrm T}$ 与三者都正交，则 $\begin{cases}x_1+2x_2+3x_3-x_4=0\\x_2+x_3+2x_4=0\\2x_1+x_2+3x_3=0\end{cases}$，系数矩阵初等行变换得基础解系 $\boldsymbol\beta=(-1,-1,1,0)^{\mathrm T}$。
单位化得 $\pm\frac1{\sqrt3}(1,1,-1,0)^{\mathrm T}$。
【评注】齐次方程组的解向量与其系数矩阵的行向量正交。` },
      { n: 480, q: R`向量 $\boldsymbol\alpha_1=(1,1,2,3)^{\mathrm T},\boldsymbol\alpha_2=(-1,1,4,-1)^{\mathrm T}$ 的 Schmidt 正交规范化向量组是 $\underline{\qquad}$。`, a: R`$\frac1{\sqrt{15}}(1,1,2,3)^{\mathrm T},\frac1{\sqrt{39}}(-2,1,5,-3)^{\mathrm T}$`, sol: R`【分析】先正交化：$\boldsymbol\beta_1=\boldsymbol\alpha_1=(1,1,2,3)^{\mathrm T}$，
$$\boldsymbol\beta_2=\boldsymbol\alpha_2-\frac{(\boldsymbol\alpha_2,\boldsymbol\beta_1)}{(\boldsymbol\beta_1,\boldsymbol\beta_1)}\boldsymbol\beta_1=(-1,1,4,-1)^{\mathrm T}-\frac13(1,1,2,3)^{\mathrm T}=\frac23(-2,1,5,-3)^{\mathrm T},$$
取 $\boldsymbol\beta_2=(-2,1,5,-3)^{\mathrm T}$。再单位化得 $\boldsymbol\gamma_1=\frac1{\sqrt{15}}(1,1,2,3)^{\mathrm T}$，$\boldsymbol\gamma_2=\frac1{\sqrt{39}}(-2,1,5,-3)^{\mathrm T}$。` },
      { n: 481, q: R`四元齐次线性方程组 $\begin{cases}x_1+2x_4=0\\x_3-3x_4=0\end{cases}$ 的基础解系是 $\underline{\qquad}$。`, a: R`$(0,1,0,0)^{\mathrm T},(-2,0,3,1)^{\mathrm T}$`, sol: R`【分析】系数矩阵 $\boldsymbol A=\begin{bmatrix}1&0&0&2\\0&0&1&-3\end{bmatrix}$，$r(\boldsymbol A)=2$，$n-r=2$，有两个自由变量，取 $x_2,x_4$。
令 $x_2=1,x_4=0$ 得 $x_3=0,x_1=0$，解 $\boldsymbol\eta_1=(0,1,0,0)^{\mathrm T}$；
令 $x_2=0,x_4=1$ 得 $x_3=3,x_1=-2$，解 $\boldsymbol\eta_2=(-2,0,3,1)^{\mathrm T}$。
【评注】方程组中未出现的 $x_2$ 系数为 0，系数矩阵中应补 0。` },
      { n: 482, q: R`已知齐次线性方程组 $\begin{cases}ax_1-3x_2+3x_3=0\\x_1+(a+2)x_2+3x_3=0\\2x_1+x_2-x_3=0\end{cases}$ 有无穷多解，则 $a=\underline{\qquad}$。`, a: R`$-5$ 或 $-6$`, sol: R`【分析】三未知数三方程齐次方程组有无穷多解 $\iff|\boldsymbol A|=0$。
$$|\boldsymbol A|=\begin{vmatrix}a&-3&3\\1&a+2&3\\2&1&-1\end{vmatrix}=(a+5)\begin{vmatrix}a&3\\2&-1\end{vmatrix}=(a+5)(-a-6)=0,$$
故 $a=-5$ 或 $a=-6$。` },
      { n: 483, q: R`已知方程组 $\begin{cases}x_1+x_2+2x_3=a\\3x_1-x_2-6x_3=a+2\\x_1+4x_2+11x_3=a+3\end{cases}$ 有无穷多解，那么 $a=\underline{\qquad}$。`, a: R`$3$`, sol: R`【分析】有无穷多解 $\iff r(\boldsymbol A)=r(\overline{\boldsymbol A})<n$。对增广矩阵作初等行变换：
$$\overline{\boldsymbol A}\to\begin{bmatrix}1&1&2&a\\0&1&3&1\\0&0&0&6-2a\end{bmatrix},$$
$r(\boldsymbol A)=2$，$r(\overline{\boldsymbol A})=2\iff6-2a=0$，即 $a=3$。` },
      { n: 484, q: R`已知方程组 $\begin{cases}x_1+2x_2-x_3+3x_4=1\\2x_1+x_2+4x_3+3x_4=5\\ax_2+2x_3-x_4=-6\end{cases}$ 无解，则 $a=\underline{\qquad}$。`, a: R`$-1$`, sol: R`【分析】无解 $\iff r(\boldsymbol A)\neq r(\overline{\boldsymbol A})$。对增广矩阵作初等行变换：
$$\overline{\boldsymbol A}\to\begin{bmatrix}1&2&-1&3&1\\0&1&-2&1&-1\\0&a+1&0&0&-7\end{bmatrix},$$
当 $a=-1$ 时 $r(\boldsymbol A)=2,r(\overline{\boldsymbol A})=3$，方程组无解，故 $a=-1$。` },
      { n: 485, q: R`设 $\boldsymbol\alpha_1=(6,-1,1)^{\mathrm T}$ 与 $\boldsymbol\alpha_2=(-7,4,2)^{\mathrm T}$ 是线性方程组 $\begin{cases}a_1x_1+a_2x_2+a_3x_3=a_4\\x_1+3x_2-2x_3=1\\2x_1+5x_2+x_3=8\end{cases}$ 的两个解，那么此方程组的通解是 $\underline{\qquad}$。`, a: R`$(6,-1,1)^{\mathrm T}+k(13,-5,-1)^{\mathrm T}$（$k$ 为任意常数）`, sol: R`【分析】$\boldsymbol\alpha_1,\boldsymbol\alpha_2$ 是不同解，故 $r(\boldsymbol A)=r(\overline{\boldsymbol A})<3$；又 $\begin{vmatrix}1&3\\2&5\end{vmatrix}=-1\neq0$，$r(\boldsymbol A)\geqslant2$，故 $r(\boldsymbol A)=2$，$n-r(\boldsymbol A)=1$。
$\boldsymbol\alpha_1-\boldsymbol\alpha_2=(13,-5,-1)^{\mathrm T}$ 是导出组的非零解（基础解系），故通解为 $(6,-1,1)^{\mathrm T}+k(13,-5,-1)^{\mathrm T}$。` },
      { n: 486, q: R`设 $\boldsymbol A_{n\times n}\boldsymbol x=\boldsymbol 0$，其中 $|\boldsymbol A|=0$，余子式 $M_{1n}\neq0$，则 $\boldsymbol{Ax}=\boldsymbol 0$ 的通解是 $\underline{\qquad}$。`, a: R`$k[M_{11},-M_{12},\cdots,(-1)^{n+1}M_{1n}]^{\mathrm T}$（$k$ 为任意常数）`, sol: R`【分析】$|\boldsymbol A|=0,\boldsymbol{AA}^*=|\boldsymbol A|\boldsymbol E=\boldsymbol O$，$\boldsymbol A^*$ 的任一列都是 $\boldsymbol{Ax}=\boldsymbol 0$ 的解。
由 $M_{1n}\neq0$ 得 $r(\boldsymbol A)=n-1$，故 $\boldsymbol A^*$ 的非零列即基础解系。取 $\boldsymbol A^*$ 第 $n$ 列（含 $A_{1n}=(-1)^{n+1}M_{1n}\neq0$），通解为
$$k(A_{11},A_{12},\cdots,A_{1n})^{\mathrm T}=k(M_{11},-M_{12},\cdots,(-1)^{n+1}M_{1n})^{\mathrm T}.$$` },
      { n: 487, q: R`设线性方程组 $\boldsymbol A_{3\times4}\boldsymbol x=\boldsymbol b$ 有通解 $k[1,2,-1,1]^{\mathrm T}+[1,-1,0,2]^{\mathrm T}$（$k$ 为任意常数），则方程组 $\boldsymbol B_{3\times3}\boldsymbol x=\boldsymbol b$（其系数矩阵为 $\boldsymbol A$ 去掉第 1 列）有一个特解是 $\underline{\qquad}$。`, a: R`$(-3,1,1)^{\mathrm T}$`, sol: R`【分析】方程组(2)比(1)少一个未知量。若(2)有解 $\boldsymbol\xi=(a,b,c)^{\mathrm T}$，则 $\boldsymbol\eta=(0,a,b,c)^{\mathrm T}$ 必是(1)的解。
在(1)的通解中选 $k$ 使第一个分量为 0：$k=-1$，得特解 $(0,-3,1,1)^{\mathrm T}$，故(2)的一个特解为 $(-3,1,1)^{\mathrm T}$。` },
      { n: 488, q: R`设线性方程组 $\boldsymbol A_{3\times3}\boldsymbol x=\boldsymbol b$ 有唯一解 $\boldsymbol\xi=[1,2,3]^{\mathrm T}$，方程组 $\boldsymbol B_{3\times4}\boldsymbol y=\boldsymbol b$（其系数矩阵为 $\boldsymbol A$ 增加第 4 列）有特解 $\boldsymbol\eta=[-2,1,4,2]^{\mathrm T}$，则方程组(2)的通解是 $\underline{\qquad}$。`, a: R`$k(-3,-1,1,2)^{\mathrm T}+(-2,1,4,2)^{\mathrm T}$（$k$ 为任意常数）`, sol: R`【分析】$\boldsymbol A\boldsymbol x=\boldsymbol b$ 有唯一解，$r(\boldsymbol A)=3$；$\boldsymbol B$ 为 $3\times4$，$r(\boldsymbol B)=3$，齐次方程组 $\boldsymbol{By}=\boldsymbol 0$ 的基础解系含 $4-3=1$ 个向量。
$\boldsymbol\eta_1=(1,2,3,0)^{\mathrm T}$ 也是(2)的特解（前 3 个分量满足 $\boldsymbol A\boldsymbol x=\boldsymbol b$，第 4 个为 0）。故基础解系为 $\boldsymbol\eta-\boldsymbol\eta_1=(-3,-1,1,2)^{\mathrm T}$，通解为 $k(-3,-1,1,2)^{\mathrm T}+(-2,1,4,2)^{\mathrm T}$。` },
      { n: 489, q: R`设 $r(\boldsymbol A_{3\times3})=2$，方程组 $\boldsymbol{Ax}=\boldsymbol b$ 有解 $\boldsymbol\eta_1,\boldsymbol\eta_2,\boldsymbol\eta_3$，其中 $\boldsymbol\eta_1+\boldsymbol\eta_2=(4,2,3)^{\mathrm T}$，$\boldsymbol\eta_2+\boldsymbol\eta_3=(5,7,-3)^{\mathrm T}$，则 $\boldsymbol{Ax}=\boldsymbol b$ 的通解是 $\underline{\qquad}$。`, a: R`$k(-1,-5,6)^{\mathrm T}+\frac12(4,2,3)^{\mathrm T}$（$k$ 为任意常数）`, sol: R`【分析】$r(\boldsymbol A)=2$，$n-r=1$，通解形式 $k\boldsymbol\xi+\boldsymbol\eta$。
$\boldsymbol\xi=(\boldsymbol\eta_1+\boldsymbol\eta_2)-(\boldsymbol\eta_2+\boldsymbol\eta_3)=(-1,-5,6)^{\mathrm T}$ 是 $\boldsymbol{Ax}=\boldsymbol 0$ 的基础解系；$\boldsymbol\eta=\frac12(\boldsymbol\eta_1+\boldsymbol\eta_2)=\frac12(4,2,3)^{\mathrm T}$ 是 $\boldsymbol{Ax}=\boldsymbol b$ 的特解。
故通解为 $k(-1,-5,6)^{\mathrm T}+\frac12(4,2,3)^{\mathrm T}$。` },
      { n: 490, q: R`设 $\boldsymbol A=[a_{ij}]$ 是三阶正交矩阵，其中 $a_{33}=-1$，$\boldsymbol b=(0,0,5)^{\mathrm T}$，则线性方程组 $\boldsymbol{Ax}=\boldsymbol b$ 的解是 $\underline{\qquad}$。`, a: R`$(0,0,-5)^{\mathrm T}$`, sol: R`【分析】由正交阵定义 $\boldsymbol{AA}^{\mathrm T}=\boldsymbol A^{\mathrm T}\boldsymbol A=\boldsymbol E$，$\boldsymbol A$ 的列向量与行向量都是单位向量，故第 3 列、第 3 行的前两个分量为 0：
$$\boldsymbol A=\begin{bmatrix}a_{11}&a_{12}&0\\a_{21}&a_{22}&0\\0&0&-1\end{bmatrix}.$$
故 $\boldsymbol x=\boldsymbol A^{-1}\boldsymbol b=\boldsymbol A^{\mathrm T}\boldsymbol b=\begin{bmatrix}a_{11}&a_{21}&0\\a_{12}&a_{22}&0\\0&0&-1\end{bmatrix}\begin{bmatrix}0\\0\\5\end{bmatrix}=(0,0,-5)^{\mathrm T}$。` }
    ]
  };
})();
