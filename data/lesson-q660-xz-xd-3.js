window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q660_s10"] = {
    id: "q660_s10",
    ch: "660题 · 选择题 · 线性代数",
    title: "选择题 第 251–275 题",
    probTitle: "选择题（含原书详解）",
    book: "《数学基础过关660题（数学二）》",
    problems: [
      { n: 251, q: R`向量组 $\boldsymbol\alpha_1=(1,3,5,-1)^{\mathrm T},\boldsymbol\alpha_2=(2,-1,-3,4)^{\mathrm T},\boldsymbol\alpha_3=(6,4,4,6)^{\mathrm T},\boldsymbol\alpha_4=(7,7,9,1)^{\mathrm T},\boldsymbol\alpha_5=(3,2,2,3)^{\mathrm T}$ 的极大线性无关组是
(A) $\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_5$。 (B) $\boldsymbol\alpha_1,\boldsymbol\alpha_3,\boldsymbol\alpha_5$。
(C) $\boldsymbol\alpha_2,\boldsymbol\alpha_3,\boldsymbol\alpha_4$。 (D) $\boldsymbol\alpha_3,\boldsymbol\alpha_4,\boldsymbol\alpha_5$。`, a: R`(C)`, sol: R`【分析】对列向量组作初等行变换：
$$[\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3,\boldsymbol\alpha_4,\boldsymbol\alpha_5]=\begin{bmatrix}1&2&6&7&3\\3&-1&4&7&2\\5&-3&4&9&2\\-1&4&6&1&3\end{bmatrix}\to\begin{bmatrix}1&2&6&7&3\\0&1&2&2&1\\0&0&0&2&0\\0&0&0&0&0\end{bmatrix},$$
秩为 3。三阶子式 $\begin{vmatrix}2&6&7\\1&2&2\\0&0&2\end{vmatrix}\neq0$，故 $\boldsymbol\alpha_2,\boldsymbol\alpha_3,\boldsymbol\alpha_4$ 为极大线性无关组。选 (C)。
【评注】极大无关组不唯一；化阶梯形后取每行首个非零元所在列（1、2、4 列）最简便。` },
      { n: 252, q: R`已知两个 $n$ 维向量组
(Ⅰ) $\boldsymbol\alpha_1,\boldsymbol\alpha_2,\cdots,\boldsymbol\alpha_s$ 与 (Ⅱ) $\boldsymbol\alpha_1,\boldsymbol\alpha_2,\cdots,\boldsymbol\alpha_s,\boldsymbol\alpha_{s+1},\cdots,\boldsymbol\alpha_{s+t}$，记向量组的秩分别为 $r(\text{Ⅰ}),r(\text{Ⅱ})$，则下列条件中不能判定(Ⅰ) 是(Ⅱ) 的极大线性无关组的是
(A) $r(\text{Ⅰ})=r(\text{Ⅱ})$，(Ⅱ) 可由(Ⅰ) 线性表出。 (B) $s=r(\text{Ⅱ})$，(Ⅰ) 与(Ⅱ) 是等价向量组。
(C) $r(\text{Ⅰ})=r(\text{Ⅱ})$，(Ⅰ) 线性无关。 (D) $r(\text{Ⅰ})=r(\text{Ⅱ})=s$。`, a: R`(A)`, sol: R`【分析】(Ⅰ) 是(Ⅱ) 的极大无关组须：(Ⅰ) 线性无关，且能表示(Ⅱ)。
(A) 中仅 $r(\text{Ⅰ})=r(\text{Ⅱ})$ 及 (Ⅱ) 可由 (Ⅰ) 表出，不能保证 (Ⅰ) 线性无关（如 (Ⅰ) 本身相关但秩相等），故不能判定。选 (A)。
(B) 中 $r(\text{Ⅱ})=s$ 且等价，则 $r(\text{Ⅰ})=s$，(Ⅰ) 线性无关，可判定；(D) 同理；(C) 由 (Ⅰ) 无关且秩相等知 (Ⅱ) 中向量都可由 (Ⅰ) 表出，可判定。
【评注】极大无关组判定：线性无关 + 能表出其余向量。` },
      { n: 253, q: R`已知四维向量组 $\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3,\boldsymbol\alpha_4$ 线性无关，且向量 $\boldsymbol\beta_1=\boldsymbol\alpha_1+\boldsymbol\alpha_3+\boldsymbol\alpha_4,\boldsymbol\beta_2=\boldsymbol\alpha_2-\boldsymbol\alpha_4,\boldsymbol\beta_3=\boldsymbol\alpha_3+\boldsymbol\alpha_4,\boldsymbol\beta_4=\boldsymbol\alpha_2+\boldsymbol\alpha_3,\boldsymbol\beta_5=2\boldsymbol\alpha_1+\boldsymbol\alpha_2+\boldsymbol\alpha_3$，则 $r(\boldsymbol\beta_1,\boldsymbol\beta_2,\boldsymbol\beta_3,\boldsymbol\beta_4,\boldsymbol\beta_5)=$
(A) 1。 (B) 2。 (C) 3。 (D) 4。`, a: R`(C)`, sol: R`【分析】将表出关系写成矩阵形式：
$$[\boldsymbol\beta_1,\boldsymbol\beta_2,\boldsymbol\beta_3,\boldsymbol\beta_4,\boldsymbol\beta_5]=[\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3,\boldsymbol\alpha_4]\boldsymbol C,\quad \boldsymbol C=\begin{bmatrix}1&0&0&0&2\\0&1&0&1&1\\1&0&1&1&1\\1&-1&1&0&0\end{bmatrix}.$$
因 $\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3,\boldsymbol\alpha_4$ 线性无关，$\boldsymbol A=[\boldsymbol\alpha_1,\cdots,\boldsymbol\alpha_4]$ 可逆，故 $r(\boldsymbol\beta_1,\cdots,\boldsymbol\beta_5)=r(\boldsymbol C)$。对 $\boldsymbol C$ 作初等行变换得秩为 3。选 (C)。
【评注】可逆阵左乘不改变秩。` },
      { n: 254, q: R`设向量组(Ⅰ) $\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3,\boldsymbol\alpha_4$ 线性无关，则与向量组(Ⅰ) 等价的向量组是
(A) $\boldsymbol\alpha_1+\boldsymbol\alpha_2,\boldsymbol\alpha_2+\boldsymbol\alpha_3,\boldsymbol\alpha_3+\boldsymbol\alpha_4,\boldsymbol\alpha_4+\boldsymbol\alpha_1$。
(B) $\boldsymbol\alpha_1+\boldsymbol\alpha_2,\boldsymbol\alpha_2+\boldsymbol\alpha_3,\boldsymbol\alpha_3+\boldsymbol\alpha_4$。
(C) $\boldsymbol\alpha_1+\boldsymbol\alpha_2,\boldsymbol\alpha_2-\boldsymbol\alpha_3,\boldsymbol\alpha_3+\boldsymbol\alpha_4,\boldsymbol\alpha_4-\boldsymbol\alpha_1$。
(D) $\boldsymbol\alpha_1,\boldsymbol\alpha_1+\boldsymbol\alpha_2,\boldsymbol\alpha_2+\boldsymbol\alpha_3,\boldsymbol\alpha_3+\boldsymbol\alpha_4,\boldsymbol\alpha_4-\boldsymbol\alpha_1$。`, a: R`(D)`, sol: R`【分析】(Ⅰ) 线性无关，$r(\text{Ⅰ})=4$，等价的向量组秩必为 4。
(B) 只有三个向量，$r\leqslant3$，排除；
(A) 因 $(\boldsymbol\alpha_1+\boldsymbol\alpha_2)-(\boldsymbol\alpha_2+\boldsymbol\alpha_3)+(\boldsymbol\alpha_3+\boldsymbol\alpha_4)-(\boldsymbol\alpha_4+\boldsymbol\alpha_1)=\boldsymbol 0$ 相关，$r\leqslant3$，排除；
(C) 因 $(\boldsymbol\alpha_1+\boldsymbol\alpha_2)-(\boldsymbol\alpha_2-\boldsymbol\alpha_3)-(\boldsymbol\alpha_3+\boldsymbol\alpha_4)+(\boldsymbol\alpha_4-\boldsymbol\alpha_1)=\boldsymbol 0$ 相关，排除。
(D) 可由 (Ⅰ) 表出，且反向可表（$\boldsymbol\alpha_1=\boldsymbol\beta_1$，$\boldsymbol\alpha_2=\boldsymbol\beta_2-\boldsymbol\beta_1$ 等），故等价。选 (D)。
【评注】等价 $\iff$ 可相互表出；等价必等秩，等秩未必等价。` },
      { n: 255, q: R`某五元齐次线性方程组经高斯消元，系数矩阵化为 $\begin{bmatrix}1&-1&2&3&-4\\&1&5&-2\\&&2&0\end{bmatrix}$（阶梯形），选取自由变量的取法共有
(A) 1 个。 (B) 2 个。 (C) 3 个。 (D) 4 个。`, a: R`(D)`, sol: R`【分析】系数矩阵的秩 $r(\boldsymbol A)=3$，故自由变量有 $n-r=5-3=2$ 个。
自由变量可取 $x_1,x_5$；$x_1,x_3$；$x_2,x_5$；$x_2,x_3$，共 4 种。选 (D)。
【评注】自由变量不唯一，但去掉其对应列后剩下 $r$ 列须线性无关；主变量对应每行首个非零元所在列。` },
      { n: 256, q: R`已知 $\boldsymbol\alpha_1,\boldsymbol\alpha_2$ 是非齐次线性方程组 $\boldsymbol{Ax}=\boldsymbol b$ 的两个不同的解，那么
$$\boldsymbol\alpha_1-\boldsymbol\alpha_2,\quad 3\boldsymbol\alpha_1-2\boldsymbol\alpha_2,\quad \frac13(\boldsymbol\alpha_1+2\boldsymbol\alpha_2),\quad \frac12(\boldsymbol\alpha_1+\boldsymbol\alpha_2)$$
中，仍是线性方程组 $\boldsymbol{Ax}=\boldsymbol b$ 特解的共有
(A) 4 个。 (B) 3 个。 (C) 2 个。 (D) 1 个。`, a: R`(B)`, sol: R`【分析】$3\boldsymbol\alpha_1-2\boldsymbol\alpha_2$、$\frac13(\boldsymbol\alpha_1+2\boldsymbol\alpha_2)$、$\frac12(\boldsymbol\alpha_1+\boldsymbol\alpha_2)$ 的系数之和均为 1，故都是 $\boldsymbol{Ax}=\boldsymbol b$ 的解。
而 $\boldsymbol A(\boldsymbol\alpha_1-\boldsymbol\alpha_2)=\boldsymbol b-\boldsymbol b=\boldsymbol 0$，$\boldsymbol\alpha_1-\boldsymbol\alpha_2$ 是 $\boldsymbol{Ax}=\boldsymbol 0$ 的解，不是 $\boldsymbol{Ax}=\boldsymbol b$ 的解。故共 3 个。选 (B)。
【评注】若 $\boldsymbol\alpha_i$ 是 $\boldsymbol{Ax}=\boldsymbol b$ 的解，则 $k_1\boldsymbol\alpha_1+\cdots+k_t\boldsymbol\alpha_t$ 当 $\sum k_i=1$ 时仍是 $\boldsymbol{Ax}=\boldsymbol b$ 的解，当 $\sum k_i=0$ 时是 $\boldsymbol{Ax}=\boldsymbol 0$ 的解。` },
      { n: 257, q: R`已知 $\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3$ 是非齐次线性方程组 $\boldsymbol{Ax}=\boldsymbol b$ 的三个不同的解，那么下列向量
$$\boldsymbol\alpha_1-\boldsymbol\alpha_2,\quad \boldsymbol\alpha_1+\boldsymbol\alpha_2-2\boldsymbol\alpha_3,\quad \frac23(\boldsymbol\alpha_2-\boldsymbol\alpha_1),\quad \boldsymbol\alpha_1-3\boldsymbol\alpha_2+2\boldsymbol\alpha_3$$
中是导出组 $\boldsymbol{Ax}=\boldsymbol 0$ 解的向量共有
(A) 4 个。 (B) 3 个。 (C) 2 个。 (D) 1 个。`, a: R`(A)`, sol: R`【分析】四个向量的系数和分别为 $1-1=0$、$1+1-2=0$、$\frac23(1-1)=0$、$1-3+2=0$，均为 0，故都是 $\boldsymbol{Ax}=\boldsymbol 0$ 的解，共 4 个。选 (A)。
【评注】系数和为 0 的线性组合是导出组 $\boldsymbol{Ax}=\boldsymbol 0$ 的解。` },
      { n: 258, q: R`齐次方程组 $\begin{cases}x_1+2x_3-x_4=0\\x_1+x_2+x_4=0\end{cases}$ 的基础解系是
(A) $(-2,2,1,0)^{\mathrm T},(1,2,0,1)^{\mathrm T}$。 (B) $(-1,0,1,1)^{\mathrm T},(2,0,-2,-2)^{\mathrm T}$。
(C) $(-2,2,1,0)^{\mathrm T},(2,2,-3,-4)^{\mathrm T}$。 (D) $(1,-2,0,1)^{\mathrm T}$。`, a: R`(C)`, sol: R`【分析】基础解系须满足：是解、线性无关、个数为 $n-r(\boldsymbol A)$。$r(\boldsymbol A)=2$，$n-r=4-2=2$，排除 (D)。
(B) 中两向量线性相关，排除。
(A) 与 (C) 中 $(-2,2,1,0)^{\mathrm T}$ 是解；将 (A) 的 $(1,2,0,1)^{\mathrm T}$ 代入方程知不是解，排除 (A)。故 (C) 正确。选 (C)。
【评注】基础解系三要素：解、线性无关、个数 $n-r(\boldsymbol A)$。` },
      { n: 259, q: R`已知 $\boldsymbol\alpha_1=(1,1,-1)^{\mathrm T},\boldsymbol\alpha_2=(1,2,0)^{\mathrm T}$ 是齐次方程组 $\boldsymbol{Ax}=\boldsymbol 0$ 的基础解系，那么下列向量中 $\boldsymbol{Ax}=\boldsymbol 0$ 的解向量是
(A) $(1,-1,3)^{\mathrm T}$。 (B) $(2,1,-3)^{\mathrm T}$。 (C) $(2,2,-5)^{\mathrm T}$。 (D) $(2,-2,6)^{\mathrm T}$。`, a: R`(B)`, sol: R`【分析】$\boldsymbol{Ax}=\boldsymbol 0$ 的任一解都可由基础解系 $\boldsymbol\alpha_1,\boldsymbol\alpha_2$ 表出，即 $x_1\boldsymbol\alpha_1+x_2\boldsymbol\alpha_2=\boldsymbol\xi$ 有解。
(A) 与 (D) 成比例，若 (A) 是解则 (D) 也是，故 (A)(D) 均排除。
对 $\boldsymbol\xi_2=(2,1,-3)^{\mathrm T}$、$\boldsymbol\xi_3=(2,2,-5)^{\mathrm T}$ 作增广矩阵初等行变换：
$$(\boldsymbol\alpha_1,\boldsymbol\alpha_2\mid\boldsymbol\xi_2,\boldsymbol\xi_3)=\begin{bmatrix}1&1&2&2\\1&2&1&2\\-1&0&-3&-5\end{bmatrix}\to\begin{bmatrix}1&1&2&2\\0&1&-1&0\\0&0&0&-3\end{bmatrix},$$
可见 $\boldsymbol\xi_3$ 不能由 $\boldsymbol\alpha_1,\boldsymbol\alpha_2$ 表出，故 (C) 不成立，选 (B)。
【评注】$\boldsymbol\xi$ 是解 $\iff$ 可由基础解系线性表出。` },
      { n: 260, q: R`已知 $\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3$ 是线性非齐次方程组 $\boldsymbol{Ax}=\boldsymbol b$ 三个解向量，则下列向量中仍是 $\boldsymbol{Ax}=\boldsymbol b$ 的解是
(A) $\boldsymbol\alpha_1-\boldsymbol\alpha_2-\boldsymbol\alpha_3$。 (B) $a\boldsymbol\alpha_1+(1-a)\boldsymbol\alpha_2-\boldsymbol\alpha_3$。
(C) $\frac12(\boldsymbol\alpha_1+(1+a)\boldsymbol\alpha_2-a\boldsymbol\alpha_3)$。 (D) $a\boldsymbol\alpha_1-2\boldsymbol\alpha_2-3a\boldsymbol\alpha_3$。`, a: R`(C)`, sol: R`【分析】把各选项代入 $\boldsymbol A$：(A) 系数和 $1-1-1=-1$，得 $-\boldsymbol b$；(B) 系数和 $a+(1-a)-1=0$，得 $\boldsymbol 0$；(D) 系数和 $a-2-3a=-2(1+a)$，得 $-2(1+a)\boldsymbol b$。
(C) 的系数和 $\frac12[1+(1+a)-a]=1$，故 $\boldsymbol A[\frac12(\boldsymbol\alpha_1+(1+a)\boldsymbol\alpha_2-a\boldsymbol\alpha_3)]=\frac12[\boldsymbol b+(1+a)\boldsymbol b-a\boldsymbol b]=\boldsymbol b$。选 (C)。
【评注】系数和为 1 的组合仍是非齐次解。` },
      { n: 261, q: R`设 $\boldsymbol\eta_1,\boldsymbol\eta_2,\boldsymbol\eta_3,\boldsymbol\eta_4$ 是齐次线性方程组 $\boldsymbol{Ax}=\boldsymbol 0$ 的基础解系，则 $\boldsymbol{Ax}=\boldsymbol 0$ 的基础解系还可以是
(A) $\boldsymbol\eta_1-\boldsymbol\eta_2,\boldsymbol\eta_2+\boldsymbol\eta_3,\boldsymbol\eta_3-\boldsymbol\eta_4,\boldsymbol\eta_4+\boldsymbol\eta_1$。
(B) $\boldsymbol\eta_1+\boldsymbol\eta_2,\boldsymbol\eta_2+\boldsymbol\eta_3+\boldsymbol\eta_4,\boldsymbol\eta_1-\boldsymbol\eta_2+\boldsymbol\eta_3$。
(C) $\boldsymbol\eta_1+\boldsymbol\eta_2,\boldsymbol\eta_2+\boldsymbol\eta_3,\boldsymbol\eta_3+\boldsymbol\eta_4,\boldsymbol\eta_4+\boldsymbol\eta_1$。
(D) $\boldsymbol\eta_1+\boldsymbol\eta_2,\boldsymbol\eta_2-\boldsymbol\eta_3,\boldsymbol\eta_3+\boldsymbol\eta_4,\boldsymbol\eta_4+\boldsymbol\eta_1$。`, a: R`(D)`, sol: R`【分析】基础解系须为 4 个线性无关的解，(B) 只有 3 个，排除。
(A) 中 $(\boldsymbol\eta_1-\boldsymbol\eta_2)+(\boldsymbol\eta_2+\boldsymbol\eta_3)-(\boldsymbol\eta_3-\boldsymbol\eta_4)-(\boldsymbol\eta_4+\boldsymbol\eta_1)=\boldsymbol 0$，相关，排除；
(C) 中 $(\boldsymbol\eta_1+\boldsymbol\eta_2)-(\boldsymbol\eta_2+\boldsymbol\eta_3)+(\boldsymbol\eta_3+\boldsymbol\eta_4)-(\boldsymbol\eta_4+\boldsymbol\eta_1)=\boldsymbol 0$，相关，排除。
(D) 中 $[\boldsymbol\eta_1+\boldsymbol\eta_2,\boldsymbol\eta_2-\boldsymbol\eta_3,\boldsymbol\eta_3+\boldsymbol\eta_4,\boldsymbol\eta_4+\boldsymbol\eta_1]=[\boldsymbol\eta_1,\boldsymbol\eta_2,\boldsymbol\eta_3,\boldsymbol\eta_4]\boldsymbol C$，$\boldsymbol C=\begin{bmatrix}1&0&0&1\\1&1&0&0\\0&-1&1&0\\0&0&1&1\end{bmatrix}$，$|\boldsymbol C|=2\neq0$，故线性无关，是基础解系。选 (D)。
【评注】$[\boldsymbol\beta_1,\cdots,\boldsymbol\beta_n]=[\boldsymbol\eta_1,\cdots,\boldsymbol\eta_n]\boldsymbol C$ 且 $|\boldsymbol C|\neq0$ 时仍为基础解系。` },
      { n: 262, q: R`设 $\boldsymbol A$ 是 $m\times n$ 矩阵，$\boldsymbol A^{\mathrm T}$ 是 $\boldsymbol A$ 的转置，若 $\boldsymbol\eta_1,\boldsymbol\eta_2,\cdots,\boldsymbol\eta_t$ 是齐次方程组 $\boldsymbol A^{\mathrm T}\boldsymbol x=\boldsymbol 0$ 的基础解系，则秩 $r(\boldsymbol A)=$
(A) $t$。 (B) $n-t$。 (C) $m-t$。 (D) $n-m$。`, a: R`(C)`, sol: R`【分析】$\boldsymbol A^{\mathrm T}$ 是 $n\times m$ 矩阵，$\boldsymbol A^{\mathrm T}\boldsymbol x=\boldsymbol 0$ 是 $n$ 个方程、$m$ 个未知数的方程组，其基础解系含 $m-r(\boldsymbol A^{\mathrm T})=m-r(\boldsymbol A)$ 个向量，故 $m-r(\boldsymbol A)=t$，即 $r(\boldsymbol A)=m-t$。选 (C)。
【评注】$r(\boldsymbol A)=r(\boldsymbol A^{\mathrm T})$；看清 $\boldsymbol A^{\mathrm T}\boldsymbol x=\boldsymbol 0$ 的未知数个数是 $m$。` },
      { n: 263, q: R`要使 $\boldsymbol\alpha_1=(2,1,1)^{\mathrm T},\boldsymbol\alpha_2=(1,-2,-1)^{\mathrm T}$ 都是齐次线性方程组 $\boldsymbol{Ax}=\boldsymbol 0$ 的解，只要系数矩阵 $\boldsymbol A$ 为
(A) $\begin{bmatrix}2&1&1\\1&-2&-1\end{bmatrix}$。 (B) $\begin{bmatrix}1&3&-5\\-1&-3&5\end{bmatrix}$。
(C) $\begin{bmatrix}1&-4&2\\1&2&-1\end{bmatrix}$。 (D) $\begin{bmatrix}1&-3&1\\2&-6&2\end{bmatrix}$。`, a: R`(B)`, sol: R`【分析】$\boldsymbol\alpha_1,\boldsymbol\alpha_2$ 线性无关，故 $\boldsymbol{Ax}=\boldsymbol 0$ 至少有两个线性无关解，$n-r(\boldsymbol A)\geqslant2$，即 $r(\boldsymbol A)\leqslant3-2=1$。(A)(C) 系数矩阵秩为 2，排除。
(B) 与 (D) 中，$\boldsymbol\alpha_2$ 不是 (D) 的解（$1\cdot1-3\cdot(-2)+1\cdot(-1)=6\neq0$），排除 (D)。选 (B)。
【评注】先用秩排除，再用解的定义验证。` },
      { n: 264, q: R`$a=1$ 是齐次方程组 $\begin{cases}x_1+x_2+x_3=0\\x_1+2x_2+ax_3=0\\x_1+4x_2+a^2x_3=0\end{cases}$ 有非零解的
(A) 充分必要条件。 (B) 充分而非必要条件。 (C) 必要而非充分条件。 (D) 既非充分又非必要条件。`, a: R`(B)`, sol: R`【分析】三方程三未知数的齐次方程组有非零解 $\iff|\boldsymbol A|=0$。而
$$|\boldsymbol A|=\begin{vmatrix}1&1&1\\1&2&a\\1&4&a^2\end{vmatrix}=(a-1)(a-2).$$
$a=1$ 能保证 $|\boldsymbol A|=0$，但 $|\boldsymbol A|=0$ 也可由 $a=2$ 得到，故 $a=1$ 是充分而非必要条件。选 (B)。
【评注】$|\boldsymbol A|=0$ 是 $n$ 阶齐次方程组有非零解的充要条件；此处 $|\boldsymbol A|$ 为范德蒙型。` },
      { n: 265, q: R`已知 $\boldsymbol\eta_1,\boldsymbol\eta_2$ 是 $n$ 元齐次线性方程组 $\boldsymbol{Ax}=\boldsymbol 0$ 的 $2$ 个不同的解，$k$ 是任意常数，若秩 $r(\boldsymbol A)=n-1$，则 $\boldsymbol{Ax}=\boldsymbol 0$ 的通解是
(A) $k\boldsymbol\eta_1$。 (B) $k\boldsymbol\eta_2$。 (C) $k(\boldsymbol\eta_1+\boldsymbol\eta_2)$。 (D) $k(\boldsymbol\eta_1-\boldsymbol\eta_2)$。`, a: R`(D)`, sol: R`【分析】$n-r(\boldsymbol A)=n-(n-1)=1$，故通解为 $k\boldsymbol\eta$（$\boldsymbol\eta\neq\boldsymbol 0$）。
$\boldsymbol\eta_1,\boldsymbol\eta_2$ 可能为零向量，$\boldsymbol\eta_1+\boldsymbol\eta_2$ 也可能为零向量，故 (A)(B)(C) 不一定成立。
因 $\boldsymbol\eta_1\neq\boldsymbol\eta_2$，必有 $\boldsymbol\eta_1-\boldsymbol\eta_2\neq\boldsymbol 0$，是 $\boldsymbol{Ax}=\boldsymbol 0$ 的非零解，故 (D) 正确。选 (D)。
【评注】注意「不同的解」与「线性无关的解」的区别。` },
      { n: 266, q: R`设 $\boldsymbol A=\begin{bmatrix}3&a+2&4\\5&a&a+5\\1&-1&2\end{bmatrix}$，若齐次方程组 $\boldsymbol{Ax}=\boldsymbol 0$ 的任一非零解均可以用 $\boldsymbol\alpha=(1,1,0)^{\mathrm T}$ 线性表出，那么必有 $a=$
(A) 3。 (B) $-5$。 (C) 3 或 $-5$。 (D) 5 或 $-3$。`, a: R`(B)`, sol: R`【分析】由题意 $\boldsymbol{Ax}=\boldsymbol 0$ 的基础解系只有一个向量，故 $r(\boldsymbol A)=3-1=2$。对 $\boldsymbol A$ 作初等行变换：
$$\boldsymbol A\to\begin{bmatrix}1&-1&2\\0&a+5&-2\\0&a+5&a-5\end{bmatrix}\to\begin{bmatrix}1&-1&2\\0&a+5&-2\\0&0&a-3\end{bmatrix}.$$
且 $\boldsymbol\alpha=(1,1,0)^{\mathrm T}$ 须是解，代入得 $a=-5$。选 (B)。
（$a=3$ 时 $r(\boldsymbol A)=2$，但基础解系为 $(-7,1,4)^{\mathrm T}$，不是 $\boldsymbol\alpha$，故 (C) 不成立。）
【评注】先由秩确定 $a$ 的可能值，再用解的定义筛选。` },
      { n: 267, q: R`设 $\boldsymbol{Ax}=\boldsymbol b$ 有通解 $k_1\boldsymbol\xi_1+k_2\boldsymbol\xi_2+\boldsymbol\eta=k_1(1,0,1)^{\mathrm T}+k_2(-1,3,2)^{\mathrm T}+(0,1,-1)^{\mathrm T}$，则下列向量中不是 $\boldsymbol{Ax}=\boldsymbol b$ 的解向量的是
(A) $\boldsymbol\alpha_1=(3,-5,-4)^{\mathrm T}$。 (B) $\boldsymbol\alpha_2=(0,4,2)^{\mathrm T}$。
(C) $\boldsymbol\alpha_3=(3,-2,-1)^{\mathrm T}$。 (D) $\boldsymbol\alpha_4=(3,1,-4)^{\mathrm T}$。`, a: R`(D)`, sol: R`【分析】$\boldsymbol\alpha_i$ 是 $\boldsymbol{Ax}=\boldsymbol b$ 的解 $\iff\boldsymbol\xi_1x_1+\boldsymbol\xi_2x_2=\boldsymbol\alpha_i-\boldsymbol\eta$ 有解。作增广矩阵初等行变换：
$$[\boldsymbol\xi_1,\boldsymbol\xi_2\mid\boldsymbol\alpha_1-\boldsymbol\eta,\boldsymbol\alpha_2-\boldsymbol\eta,\boldsymbol\alpha_3-\boldsymbol\eta,\boldsymbol\alpha_4-\boldsymbol\eta]=\begin{bmatrix}1&-1&3&0&3&3\\0&3&-6&3&-3&0\\1&2&-3&3&0&-3\end{bmatrix}\to\begin{bmatrix}1&-1&3&0&3&3\\0&3&-6&3&-3&0\\0&0&0&0&0&-6\end{bmatrix},$$
可见 $\boldsymbol\alpha_4-\boldsymbol\eta$ 不能由 $\boldsymbol\xi_1,\boldsymbol\xi_2$ 表出，$\boldsymbol\alpha_4$ 不是解。选 (D)。
【评注】$\boldsymbol\alpha$ 是解 $\iff\boldsymbol\alpha-\boldsymbol\eta$ 可由基础解系表出。` },
      { n: 268, q: R`下列非齐次线性方程组中，无解的方程组是
(A) $\begin{cases}x_1+x_2-x_3=1,\\x_2=2,\\x_2-2x_3=3.\end{cases}$ (B) $\begin{cases}x_1+x_2+x_3=0,\\x_2-2x_3=1,\\x_2+3x_3=6.\end{cases}$
(C) $\begin{cases}x_1-x_2+2x_3=1,\\-2x_1+2x_2-4x_3=-3,\\x_1+3x_2-2x_3=1.\end{cases}$ (D) $\begin{cases}x_1-2x_2-x_3=1,\\2x_1+3x_2-4x_3=2,\\3x_1+x_2-5x_3=3.\end{cases}$`, a: R`(C)`, sol: R`【分析】(C) 中第一个方程乘以 $-2$ 得 $-2x_1+2x_2-4x_3=-2$，与第二个方程 $-2x_1+2x_2-4x_3=-3$ 矛盾，方程组无解。选 (C)。
(A)(B) 系数行列式不为零，有唯一解；(D) 中第一个方程加第二个方程等于第三个方程，$r(\boldsymbol A)=r(\overline{\boldsymbol A})=2$，有无穷多解。
【评注】增广矩阵中系数成比例而常数项不成比例时无解。` },
      { n: 269, q: R`设 $\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3,\boldsymbol\alpha_4,\boldsymbol\alpha_5$ 都是四维列向量，$\boldsymbol A=[\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3,\boldsymbol\alpha_4]$，非齐次线性方程组 $\boldsymbol{Ax}=\boldsymbol\alpha_5$ 有通解 $k\boldsymbol\xi+\boldsymbol\eta=k(1,-1,2,0)^{\mathrm T}+(2,1,0,1)^{\mathrm T}$，则下列关系式中不正确的是
(A) $2\boldsymbol\alpha_1+\boldsymbol\alpha_2+\boldsymbol\alpha_4-\boldsymbol\alpha_5=\boldsymbol 0$。 (B) $\boldsymbol\alpha_5-\boldsymbol\alpha_1-2\boldsymbol\alpha_2-3\boldsymbol\alpha_4=\boldsymbol 0$。
(C) $\boldsymbol\alpha_1-\boldsymbol\alpha_2+2\boldsymbol\alpha_3-\boldsymbol\alpha_5=\boldsymbol 0$。 (D) $\boldsymbol\alpha_5-\boldsymbol\alpha_1+4\boldsymbol\alpha_3-3\boldsymbol\alpha_2=\boldsymbol 0$。`, a: R`(C)`, sol: R`【分析】由通解 $\boldsymbol x=k\boldsymbol\xi+\boldsymbol\eta$ 知 $\boldsymbol\alpha_5=\boldsymbol A(k\boldsymbol\xi+\boldsymbol\eta)=(k+2)\boldsymbol\alpha_1+(1-k)\boldsymbol\alpha_2+2k\boldsymbol\alpha_3+\boldsymbol\alpha_4$，即 $\boldsymbol\alpha_5-(k+2)\boldsymbol\alpha_1-(1-k)\boldsymbol\alpha_2-2k\boldsymbol\alpha_3-\boldsymbol\alpha_4=\boldsymbol 0$，此式中 $\boldsymbol\alpha_4$ 的系数恒为 $-1\neq0$，故线性组合为零不能不含 $\boldsymbol\alpha_4$。
(C) 中不含 $\boldsymbol\alpha_4$，不正确。当 $k=0,1,-2$ 时分别得 (A)(B)(D) 正确。选 (C)。
【评注】由通解代入 $\boldsymbol\alpha_5=\boldsymbol{Ax}$ 得到关于 $\boldsymbol\alpha_i$ 的恒等关系。` },
      { n: 270, q: R`已知方程组 $\begin{cases}(2-\lambda)x_1+2x_2-2x_3=1\\2x_1+(5-\lambda)x_2-4x_3=2\\-2x_1-4x_2+(5-\lambda)x_3=-\lambda-1\end{cases}$ 有两个不同的解，则 $\lambda=$
(A) $-1$。 (B) 10。 (C) 1。 (D) 2。`, a: R`(C)`, sol: R`【分析】方程组有两个不同解 $\iff$ 有无穷多解 $\iff r(\boldsymbol A)=r(\overline{\boldsymbol A})<n$。由 $|\boldsymbol A|=0$ 排查：
$$|\boldsymbol A|=\begin{vmatrix}2-\lambda&2&-2\\2&5-\lambda&-4\\-2&-4&5-\lambda\end{vmatrix}=(\lambda-1)^2(10-\lambda).$$
故 $\lambda=1$ 或 $10$，排除 (A)(D)。把 $\lambda=1$ 代入增广矩阵：
$$\overline{\boldsymbol A}=\begin{bmatrix}1&2&-2&1\\2&4&-4&2\\-2&-4&4&-2\end{bmatrix}\to\begin{bmatrix}1&2&-2&1\\0&0&0&0\\0&0&0&0\end{bmatrix},$$
$r(\boldsymbol A)=r(\overline{\boldsymbol A})<3$，有无穷多解。选 (C)。
【评注】$|\boldsymbol A|=0$ 是无解或无穷多解的必要条件；需代回验证增广矩阵。` },
      { n: 271, q: R`设 $\boldsymbol A$ 为秩是 $r$ 的 $m\times n$ 矩阵，非齐次线性方程组 $\boldsymbol{Ax}=\boldsymbol b$ 有解的充分条件是
(A) $r=m$。 (B) $m=n$。 (C) $r=n$。 (D) $m<n$。`, a: R`(A)`, sol: R`【分析】$r(\boldsymbol A)=m$ 说明 $\boldsymbol A$ 的行向量组线性无关，其延伸组（增广矩阵的行向量）也线性无关，故 $r(\overline{\boldsymbol A})=m=r(\boldsymbol A)$，方程组必有解，(A) 是充分条件。
(B) $m=n$ 时增广矩阵的秩不能保证等于 $r$；(C) $r=n$ 时 $r(\overline{\boldsymbol A})$ 可能为 $n+1$；(D) $m<n$ 时有解与否仍不确定。故 (B)(C)(D) 均不是充分条件。选 (A)。
【评注】$\boldsymbol{Ax}=\boldsymbol b$ 有解 $\iff r(\boldsymbol A)=r(\overline{\boldsymbol A})$。` },
      { n: 272, q: R`设 $\boldsymbol A$ 为 $m\times n$ 矩阵，下列命题中正确的是
(A) 若 $\boldsymbol A$ 中有 $n$ 阶子式不为零，则 $\boldsymbol{Ax}=\boldsymbol 0$ 仅有零解。
(B) 若 $\boldsymbol A$ 中有 $n$ 阶子式不为零，则 $\boldsymbol{Ax}=\boldsymbol b$ 必有唯一解。
(C) 若 $\boldsymbol A$ 中有 $m$ 阶子式不为零，则 $\boldsymbol{Ax}=\boldsymbol 0$ 仅有零解。
(D) 若 $\boldsymbol A$ 中有 $m$ 阶子式不为零，则 $\boldsymbol{Ax}=\boldsymbol b$ 必有唯一解。`, a: R`(A)`, sol: R`【分析】$\boldsymbol A$ 中有 $n$ 阶子式不为零，而 $\boldsymbol A$ 中不存在 $n+1$ 阶子式，故 $r(\boldsymbol A)=n$。于是 $\boldsymbol{Ax}=\boldsymbol 0$（$n$ 个未知数）只有零解，(A) 正确。
(B) 此时 $r(\boldsymbol A)=n$，但增广矩阵的秩可能为 $n+1$，可能无解，不正确。
(C)(D) $r(\boldsymbol A)=m$ 时 $\boldsymbol{Ax}=\boldsymbol 0$ 是否有非零解、$\boldsymbol{Ax}=\boldsymbol b$ 是否唯一解都不确定（仅当 $m=n$ 才唯一）。选 (A)。
【评注】$n$ 阶子式非零 $\Rightarrow r(\boldsymbol A)\geqslant n$，结合无 $n+1$ 阶子式得 $r=n$。` },
      { n: 273, q: R`已知四阶方阵 $\boldsymbol A=[\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3,\boldsymbol\alpha_4]$，$\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3,\boldsymbol\alpha_4$ 均为四维列向量，其中 $\boldsymbol\alpha_1,\boldsymbol\alpha_2$ 线性无关，若 $\boldsymbol\alpha_1+2\boldsymbol\alpha_2-\boldsymbol\alpha_3=\boldsymbol\beta$，$\boldsymbol\alpha_1+\boldsymbol\alpha_2+\boldsymbol\alpha_3+\boldsymbol\alpha_4=\boldsymbol\beta$，$2\boldsymbol\alpha_1+3\boldsymbol\alpha_2+\boldsymbol\alpha_3+2\boldsymbol\alpha_4=\boldsymbol\beta$，$k_1,k_2$ 为任意常数，那么 $\boldsymbol{Ax}=\boldsymbol\beta$ 的通解为
(A) $\begin{bmatrix}1\\2\\-1\\0\end{bmatrix}+k_1\begin{bmatrix}1\\1\\1\\1\end{bmatrix}+k_2\begin{bmatrix}2\\3\\1\\2\end{bmatrix}$。 (B) $\begin{bmatrix}1\\1\\1\\1\end{bmatrix}+k_1\begin{bmatrix}1\\2\\0\\1\end{bmatrix}+k_2\begin{bmatrix}0\\1\\-2\\-1\end{bmatrix}$。
(C) $\begin{bmatrix}2\\3\\1\\2\end{bmatrix}+k_1\begin{bmatrix}2\\3\\0\\1\end{bmatrix}+k_2\begin{bmatrix}1\\1\\2\\2\end{bmatrix}$。 (D) $\begin{bmatrix}0\\1\\-2\\-1\end{bmatrix}+k_1\begin{bmatrix}1\\2\\0\\1\end{bmatrix}+k_2\begin{bmatrix}1\\1\\2\\2\end{bmatrix}$。`, a: R`(B)`, sol: R`【分析】由三式知 $\boldsymbol\gamma_1=(1,2,-1,0)^{\mathrm T},\boldsymbol\gamma_2=(1,1,1,1)^{\mathrm T},\boldsymbol\gamma_3=(2,3,1,2)^{\mathrm T}$ 都是 $\boldsymbol{Ax}=\boldsymbol\beta$ 的解。
取 $\boldsymbol\eta_1=\boldsymbol\gamma_1-\boldsymbol\gamma_2=(0,1,-2,-1)^{\mathrm T},\boldsymbol\eta_2=\boldsymbol\gamma_3-\boldsymbol\gamma_2=(1,2,0,1)^{\mathrm T}$ 是 $\boldsymbol{Ax}=\boldsymbol 0$ 的线性无关解，故 $n-r(\boldsymbol A)\geqslant2$，$r(\boldsymbol A)\leqslant2$；又 $\boldsymbol\alpha_1,\boldsymbol\alpha_2$ 线性无关，$r(\boldsymbol A)\geqslant2$，故 $r(\boldsymbol A)=2$，$n-r(\boldsymbol A)=2$，$\boldsymbol\eta_1,\boldsymbol\eta_2$ 即基础解系。
以 $\boldsymbol\gamma_2=(1,1,1,1)^{\mathrm T}$ 为特解，通解为 $\boldsymbol\gamma_2+k_1\boldsymbol\eta_2+k_2\boldsymbol\eta_1$，即 (B)。选 (B)。
【评注】特解 + 基础解系；注意 (A)(C) 特解对但基础解系错，(D) 特解错。` },
      { n: 274, q: R`设 $\boldsymbol A$ 为 $n$ 阶矩阵，$\boldsymbol A^{\mathrm T}$ 是 $\boldsymbol A$ 的转置矩阵，对于线性方程组 (Ⅰ) $\boldsymbol{Ax}=\boldsymbol 0$ 和 (Ⅱ) $\boldsymbol A^{\mathrm T}\boldsymbol{Ax}=\boldsymbol 0$，必有
(A) (Ⅰ) 的解是 (Ⅱ) 的解，(Ⅱ) 的解也是 (Ⅰ) 的解。
(B) (Ⅰ) 的解是 (Ⅱ) 的解，(Ⅱ) 的解不是 (Ⅰ) 的解。
(C) (Ⅱ) 的解是 (Ⅰ) 的解，(Ⅰ) 的解不是 (Ⅱ) 的解。
(D) (Ⅱ) 的解不是 (Ⅰ) 的解，(Ⅰ) 的解也不是 (Ⅱ) 的解。`, a: R`(A)`, sol: R`【分析】若 $\boldsymbol\alpha$ 是 (Ⅰ) 的解，$\boldsymbol{A\alpha}=\boldsymbol 0$，则 $\boldsymbol A^{\mathrm T}\boldsymbol{A\alpha}=\boldsymbol A^{\mathrm T}\boldsymbol 0=\boldsymbol 0$，故 (Ⅰ) 的解必是 (Ⅱ) 的解。
反之，若 $\boldsymbol A^{\mathrm T}\boldsymbol{A\alpha}=\boldsymbol 0$，左乘 $\boldsymbol\alpha^{\mathrm T}$ 得 $(\boldsymbol{A\alpha})^{\mathrm T}(\boldsymbol{A\alpha})=0$，即 $\boldsymbol{A\alpha}$ 各分量的平方和为 0，故 $\boldsymbol{A\alpha}=\boldsymbol 0$，(Ⅱ) 的解也是 (Ⅰ) 的解。选 (A)。
【评注】$\boldsymbol{Ax}=\boldsymbol 0$ 与 $\boldsymbol A^{\mathrm T}\boldsymbol{Ax}=\boldsymbol 0$ 同解；$\boldsymbol\alpha^{\mathrm T}\boldsymbol\alpha=0\iff\boldsymbol\alpha=\boldsymbol 0$（实向量）。` },
      { n: 275, q: R`设 $\boldsymbol A$ 是 $n$ 阶矩阵，经过若干次初等行变换后得到的矩阵记为 $\boldsymbol B$，则下列结论：
① $r(\boldsymbol A)=r(\boldsymbol B)$；② $|\boldsymbol A|=|\boldsymbol B|$；③ $\boldsymbol{Ax}=\boldsymbol 0$ 和 $\boldsymbol{Bx}=\boldsymbol 0$ 同解；④ $\boldsymbol{Ax}=\boldsymbol b$ 和 $\boldsymbol{Bx}=\boldsymbol b$ 同解。
中正确的是
(A) ①,②。 (B) ③,④。 (C) ①,③。 (D) ②,④。`, a: R`(C)`, sol: R`【分析】$\boldsymbol A$ 经初等行变换得 $\boldsymbol B$，即存在可逆阵 $\boldsymbol P$ 使 $\boldsymbol{PA}=\boldsymbol B$，故 $r(\boldsymbol A)=r(\boldsymbol B)$，① 成立。
若 $\boldsymbol{Ax}=\boldsymbol 0$，则 $\boldsymbol{Bx}=\boldsymbol{PAx}=\boldsymbol 0$；反之 $\boldsymbol{Bx}=\boldsymbol 0$ 左乘 $\boldsymbol P^{-1}$ 得 $\boldsymbol{Ax}=\boldsymbol 0$，故同解，③ 成立。选 (C)。
② $|\boldsymbol B|=|\boldsymbol P||\boldsymbol A|$，$|\boldsymbol P|$ 不一定为 1，不成立；④ 左乘 $\boldsymbol P$ 得 $\boldsymbol{PAx}=\boldsymbol{Pb}\neq\boldsymbol b$，不成立。
【评注】只作初等行变换时齐次方程组同解，这是高斯消元法的理论依据；非齐次须对增广矩阵作行变换才保持同解。` }
    ]
  };
})();
