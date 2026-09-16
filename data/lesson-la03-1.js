window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["la03_s0"] = {
    id: "la03_s0",
    ch: "第三章 n维向量",
    title: "n维向量",
    book: "《线性代数辅导讲义》",
    pages: [63, 92],
    img: "assets/img/xiandai",
    content: [
      { p: 63, md: R`### 一、知识结构网络图
**$n$ 维向量**
- **运算**：加法、数乘、内积 $\longrightarrow$ Schmidt 正交化。
- **线性表示**：概念——如果 $\beta=k_1\alpha_1+\cdots+k_s\alpha_s$，称 $\beta$ 可由 $\alpha_1,\cdots,\alpha_s$ 线性表出；判定——$\Leftrightarrow$ 方程组 $x_1\alpha_1+\cdots+x_s\alpha_s=\beta$ 有解，$\Leftrightarrow r(\alpha_1,\cdots,\alpha_s)=r(\alpha_1,\cdots,\alpha_s,\beta)$，$\Leftarrow\alpha_1,\cdots,\alpha_s$ 无关且 $\alpha_1,\cdots,\alpha_s,\beta$ 相关；等价——若 $\alpha_1,\cdots,\alpha_s$ 与 $\beta_1,\cdots,\beta_t$ 可互相线性表出。
- **线性相关**：概念——若存在不全为 $0$ 的 $k_1,\cdots,k_s$ 使 $k_1\alpha_1+\cdots+k_s\alpha_s=0$；判定（充要条件）——$(\alpha_1,\alpha_2,\cdots,\alpha_s)x=0$ 有非 $0$ 解，$r(\alpha_1,\alpha_2,\cdots,\alpha_s)<s$，某 $\alpha_i$ 可由其余表出；充分条件——$n+1$ 个 $n$ 维向量，多数向量能用少数向量表示。
- **线性无关**：概念——如果 $k_1\alpha_1+\cdots+k_s\alpha_s=0$ 则必有 $k_1=\cdots=k_s=0$；判定——$\Leftrightarrow(\alpha_1,\cdots,\alpha_s)x=0$ 只有零解，$\Leftrightarrow r(\alpha_1,\cdots,\alpha_s)=s$，$\Leftrightarrow\forall i$，$\alpha_i$ 不能由其余的表示，$\Leftarrow$ 阶梯形向量组。
- **极大线性无关组**：概念、求法。
- **向量组的秩** $\longleftrightarrow$ 矩阵的秩。
- **向量空间**$^{*}$：概念（解空间）、基（坐标、过渡矩阵、规范正交基）。
（$^{*}$ 仅数学一要求）` },
      { p: 64, md: R`【评注】$n$ 维向量概念抽象逻辑推理要求高，是线性代数的难点之一，复习时要注意。
(1) 理解向量的线性组合、线性表示、线性相关与线性无关等概念，掌握向量线性相关、线性无关的有关性质及判别法。
(2) 理解向量组的极大线性无关组的概念，掌握求向量组的极大线性无关组的方法。
(3) 了解向量组等价的概念，理解向量组的秩的概念，了解矩阵的秩与其行（列）向量组的秩之间的关系，会求向量组的秩。
(4) 了解向量内积的概念，掌握线性无关向量组正交规范化的施密特（Schmidt）方法。

### 二、基本内容与重要结论
#### 基本概念
**定义 3.1** $n$ 个数 $a_1,a_2,\cdots,a_n$ 所组成的有序数组 $\alpha=(a_1,a_2,\cdots,a_n)^T$ 或 $\alpha=(a_1,a_2,\cdots,a_n)$ 叫做 $n$ 维向量，其中 $a_1,\cdots,a_n$ 叫做向量 $\alpha$ 的分量（或坐标），前一个表示式称为列向量，后者称为行向量。
设 $n$ 维向量 $\alpha=(a_1,\cdots,a_n)^T$，$\beta=(b_1,\cdots,b_n)^T$，则向量加法 $\alpha+\beta=(a_1+b_1,\cdots,a_n+b_n)^T$；数乘向量 $k\alpha=(ka_1,\cdots,ka_n)^T$；向量内积 $(\alpha,\beta)=\alpha^T\beta=\beta^T\alpha=a_1b_1+a_2b_2+\cdots+a_nb_n$。
【评注】(1) 向量 $\alpha=(a_1,\cdots,a_n)^T$ 的长度 $\|\alpha\|=\sqrt{\alpha^T\alpha}=\sqrt{a_1^2+a_2^2+\cdots+a_n^2}$。例如 $\alpha=(1,2,3)^T$，则 $\alpha^T\alpha=14$，$\|\alpha\|=\sqrt{14}$，$\dfrac{1}{\sqrt{14}}(1,2,3)^T$ 是单位向量。
(2) $\alpha^T\alpha=0\Leftrightarrow a_1^2+\cdots+a_n^2=0\Leftrightarrow\alpha=\mathbf0$。
(3) 若 $(\alpha,\beta)=0$，即 $a_1b_1+\cdots+a_nb_n=0$，称 $\alpha$ 与 $\beta$ 正交，记为 $\alpha\perp\beta$。
**定义 3.2** 设 $\alpha_1,\alpha_2,\cdots,\alpha_s$ 是 $n$ 维向量，$k_1,k_2,\cdots,k_s$ 是一组实数，称 $k_1\alpha_1+k_2\alpha_2+\cdots+k_s\alpha_s$ 是 $\alpha_1,\alpha_2,\cdots,\alpha_s$ 的线性组合。` },
      { p: 65, md: R`**定义 3.3** 对 $n$ 维向量 $\alpha_1,\alpha_2,\cdots,\alpha_s$ 和 $\beta$，如存在实数 $k_1,k_2,\cdots,k_s$ 使得 $k_1\alpha_1+k_2\alpha_2+\cdots+k_s\alpha_s=\beta$，则称 $\beta$ 是 $\alpha_1,\alpha_2,\cdots,\alpha_s$ 的线性组合，或者说 $\beta$ 可由 $\alpha_1,\alpha_2,\cdots,\alpha_s$ 线性表出（示）。
例如 $\alpha_1=(1,0)^T,\alpha_2=(2,1)^T,\alpha_3=(1,-1)^T,\beta=(3,2)^T$，则 $\beta=-\alpha_1+2\alpha_2+0\alpha_3=2\alpha_1+\alpha_2-\alpha_3=5\alpha_1+0\alpha_2-2\alpha_3=\cdots$，即 $\beta$ 可由 $\alpha_1,\alpha_2,\alpha_3$ 线性表出，且表示法不唯一。又如 $\alpha_1=(1,0)^T,\alpha_2=(2,0)^T,\beta=(0,3)^T$，那么无论 $k_1,k_2$ 取何值，恒有 $k_1\alpha_1+k_2\alpha_2\neq\beta$，即 $\beta$ 不能由 $\alpha_1,\alpha_2$ 线性表出。
**定义 3.4** 对 $n$ 维向量 $\alpha_1,\alpha_2,\cdots,\alpha_s$，如果存在不全为零的数使得 $k_1\alpha_1+k_2\alpha_2+\cdots+k_s\alpha_s=\mathbf0$，则称向量组 $\alpha_1,\alpha_2,\cdots,\alpha_s$ 线性相关；否则，称向量组 $\alpha_1,\alpha_2,\cdots,\alpha_s$ 线性无关。

【例3.1】判断下列向量组的线性相关性：(1) $\alpha_1=(1,2,3)^T,\alpha_2=(2,3,4)^T,\alpha_3=(0,0,0)^T$；(2) $\alpha_1=(1,2,3)^T,\alpha_2=(2,4,6)^T,\alpha_3=(3,0,5)^T$；(3) $\alpha_1=(1,2,3)^T,\alpha_2=(2,3,4)^T,\alpha_3=(3,5,7)^T$；(4) $\alpha_1=(1,2,3)^T,\alpha_2=(0,4,5)^T,\alpha_3=(0,0,6)^T$。
(1) 因为 $0\alpha_1+0\alpha_2+\alpha_3=\mathbf0$，组合系数 $0,0,1$ 不全为 $0$，故 $\alpha_1,\alpha_2,\alpha_3$ 线性相关。
(2) 因为 $2\alpha_1-\alpha_2+0\alpha_3=\mathbf0$，组合系数 $2,-1,0$ 不全为 $0$，故线性相关。
(3) 因为 $\alpha_1+\alpha_2-\alpha_3=\mathbf0$，组合系数 $1,1,-1$ 不全为 $0$，故线性相关。
(4) 如果 $k_1\alpha_1+k_2\alpha_2+k_3\alpha_3=\mathbf0$，按分量写出有 $\begin{cases}k_1=0\\2k_1+4k_2=0\\3k_1+5k_2+6k_3=0\end{cases}$，可见 $k_1\alpha_1+k_2\alpha_2+k_3\alpha_3=\mathbf0\Leftrightarrow k_1=0,k_2=0,k_3=0$，故 $\alpha_1,\alpha_2,\alpha_3$ 线性无关。

**定义 3.5** 设有两个 $n$ 维向量组 (I) $\alpha_1,\alpha_2,\cdots,\alpha_s$；(II) $\beta_1,\beta_2,\cdots,\beta_t$。如果 (I) 中每个向量 $\alpha_i$ 都可由 (II) 中的向量线性表出，则称向量组 (I) 可由向量组 (II) 线性表出。如果这两个向量组可以互相线性表出，则称这两个向量组等价。` },
      { p: 66, md: R`例如已知向量组 (1) $\alpha_1=(1,0,0)^T,\alpha_2=(0,1,0)^T,\alpha_3=(0,0,1)^T$ 与 $\beta_1=(1,1,1)^T,\beta_2=(1,1,0)^T,\beta_3=(1,0,0)^T$。由于 $\beta_1=\alpha_1+\alpha_2+\alpha_3,\beta_2=\alpha_1+\alpha_2,\beta_3=\alpha_1$，$\alpha_1=\beta_3,\alpha_2=\beta_2-\beta_3,\alpha_3=\beta_1-\beta_2$，知 $\alpha_1,\alpha_2,\alpha_3$ 与 $\beta_1,\beta_2,\beta_3$ 可互相线性表出，所以是等价向量组。
(2) $\alpha_1=(1,0,0)^T,\alpha_2=(1,2,0)^T$ 与 $\beta_1=(2,1,1)^T,\beta_2=(0,1,1)^T,\beta_3=(3,1,0)^T$。由 $\alpha_1=\dfrac12\beta_1-\dfrac12\beta_2$，$\alpha_2=-\dfrac52\beta_1+\dfrac52\beta_2+2\beta_3$，知 $\alpha_1,\alpha_2$ 可由 $\beta_1,\beta_2,\beta_3$ 线性表出。但 $\beta_1,\beta_2$ 不能由 $\alpha_1,\alpha_2$ 线性表出，所以两个向量组不等价。

**定义 3.6** 在向量组 $\alpha_1,\alpha_2,\cdots,\alpha_s$ 中，如存在 $r$ 个向量 $\alpha_{i_1},\alpha_{i_2},\cdots,\alpha_{i_r}$ 线性无关，再加进任一个向量 $\alpha_j$ 后向量组 $\alpha_{i_1},\cdots,\alpha_{i_r},\alpha_j$ 就线性相关，则称 $\alpha_{i_1},\cdots,\alpha_{i_r}$ 是向量组的一个极大线性无关组。
**定义 3.7** 向量组 $\alpha_1,\cdots,\alpha_s$ 的极大线性无关组中所含向量的个数 $r$ 称为这个向量组的秩。
例如向量组 $\alpha_1=\binom10,\alpha_2=\binom00,\alpha_3=\binom11,\alpha_4=\binom20,\alpha_5=\binom01,\alpha_6=\binom35$ 中，$\alpha_1,\alpha_3$ 线性无关，再添加任一个 $\alpha_j$，向量组 $\alpha_1,\alpha_3,\alpha_j$ 必线性相关，所以 $\alpha_1,\alpha_3$ 是一个极大线性无关组，秩 $r(\alpha_1,\cdots,\alpha_6)=2$。

#### 重要定理
**定理 3.1** 向量 $\beta$ 可由向量组 $\alpha_1,\cdots,\alpha_s$ 线性表出 $\Leftrightarrow$ 非齐次线性方程组 $(\alpha_1,\alpha_2,\cdots,\alpha_s)\begin{pmatrix}x_1\\x_2\\\vdots\\x_s\end{pmatrix}=\beta$ 有解 $\Leftrightarrow$ 秩 $r(\alpha_1,\cdots,\alpha_s)=r(\alpha_1,\cdots,\alpha_s,\beta)$。
**定理 3.2** 向量组 $\alpha_1,\cdots,\alpha_s$ 线性相关 $\Leftrightarrow$ 齐次线性方程组 $(\alpha_1,\cdots,\alpha_s)\begin{pmatrix}x_1\\\vdots\\x_s\end{pmatrix}=\mathbf0$ 有非零解 $\Leftrightarrow$ 向量组的秩 $r(\alpha_1,\cdots,\alpha_s)<s$。` },
      { p: 67, md: R`**推论 1** $n$ 个 $n$ 维向量 $\alpha_1,\alpha_2,\cdots,\alpha_n$ 线性相关的充分必要条件是行列式 $|\alpha_1,\alpha_2,\cdots,\alpha_n|=0$。
**推论 2** $n+1$ 个 $n$ 维向量一定线性相关。
**定理 3.3** 如果向量组 $\alpha_1,\cdots,\alpha_s$ 的一个部分组线性相关，那么向量组 $\alpha_1,\cdots,\alpha_s$ 亦线性相关；反之，如果 $\alpha_1,\cdots,\alpha_s$ 线性无关，那么它的任一部分组都线性无关。
**定理 3.4** 设 $\alpha_1,\cdots,\alpha_s$ 是 $m$ 维向量，$\beta_1,\cdots,\beta_s$ 是 $n$ 维向量，令 $\gamma_1=\begin{pmatrix}\alpha_1\\\beta_1\end{pmatrix},\cdots,\gamma_s=\begin{pmatrix}\alpha_s\\\beta_s\end{pmatrix}$，其中 $\gamma_1,\cdots,\gamma_s$ 是 $m+n$ 维向量。如果 $\alpha_1,\cdots,\alpha_s$ 线性无关，则 $\gamma_1,\cdots,\gamma_s$ 线性无关；反之，若 $\gamma_1,\cdots,\gamma_s$ 线性相关，则 $\alpha_1,\cdots,\alpha_s$ 线性相关。
【评注】通常称 $\gamma_1,\cdots,\gamma_s$ 是 $\alpha_1,\cdots,\alpha_s$ 的延伸组，而 $\alpha_1,\cdots,\alpha_s$ 是 $\gamma_1,\cdots,\gamma_s$ 的缩短组。定理 3.3 描述的是向量个数的增减与线性相关性的联系，定理 3.4 描述的是向量维数的增减与线性相关性的联系，两者不要混淆。
**定理 3.5** 如果 $\alpha_1,\cdots,\alpha_s\ (s\geqslant2)$ 线性相关，则其中必有一个向量可用其余的向量线性表出；反之，若有一个向量可用其余的 $s-1$ 个向量线性表出，则这 $s$ 个向量必线性相关。
**定理 3.6** 如果 $\alpha_1,\cdots,\alpha_s$ 线性无关，$\alpha_1,\cdots,\alpha_s,\beta$ 线性相关，则 $\beta$ 可由 $\alpha_1,\cdots,\alpha_s$ 线性表出，且表示法唯一。
**定理 3.7** 如果向量组 $\beta_1,\cdots,\beta_s$ 可由向量组 $\alpha_1,\cdots,\alpha_t$ 线性表出，而且 $s>t$，那么 $\beta_1,\cdots,\beta_s$ 线性相关。即如果多数向量能用少数向量线性表出，那么多数向量一定线性相关。
**推论** 如 $\beta_1,\cdots,\beta_s$ 线性无关，且它可由 $\alpha_1,\cdots,\alpha_t$ 线性表出，则 $s\leqslant t$。
**定理 3.8** 设 $\beta_1,\cdots,\beta_t$ 可由 $\alpha_1,\cdots,\alpha_s$ 线性表出，则 $r(\beta_1,\cdots,\beta_t)\leqslant r(\alpha_1,\cdots,\alpha_s)$。**推论** 如果 (I),(II) 是两个等价的向量组，则 $r(\mathrm{I})=r(\mathrm{II})$。
**定理 3.9** 如果 $r(A)=r$，则 $A$ 中有 $r$ 个线性无关的列向量，而其他列向量都是这 $r$ 个线性无关列向量的线性组合，也就是 $r(A)=A$ 的列秩。一般地，$r(A)=A$ 的行秩 $=A$ 的列秩。` },
      { p: 68, md: R`【评注】(1) 向量组的线性相关（无关）是一抽象概念，在理解时要仔细体会"有一组"与"任一组"。对于向量组 $\alpha_1,\cdots,\alpha_s$，恒有 $0\alpha_1+\cdots+0\alpha_s=\mathbf0$，是否线性相关，其实就是问除上述情况外，能否再找到一组数使得 $k_1\alpha_1+\cdots+k_s\alpha_s=\mathbf0$ 仍能成立。如若可以（即有一组不全为零的 $k_1,\cdots,k_s$）则线性相关；如若不行，则对任一组不全为 $0$ 的数恒有 $k_1\alpha_1+\cdots+k_s\alpha_s\neq\mathbf0$，线性无关。
(2) 要知道 3 维向量线性相关（无关）的几何意义：$1^\circ$ $\alpha_1,\alpha_2$ 线性相关 $\Leftrightarrow\alpha_1,\alpha_2$ 坐标成比例（共线）；$2^\circ$ $\alpha_1,\alpha_2,\alpha_3$ 线性相关 $\Leftrightarrow\alpha_1,\alpha_2,\alpha_3$ 共面。
(3) 要搞清向量组的线性相关、齐次方程组有非零解、向量组的秩等知识点的联系与转换；要搞清线性相关、线性表出之间的联系与转换。

【例3.2】（2002,3）设三阶矩阵 $A=\begin{pmatrix}1&2&-2\\2&1&2\\3&0&4\end{pmatrix}$，三维列向量 $\alpha=(a,1,1)^T$，已知 $A\alpha$ 与 $\alpha$ 线性相关，则 $a=$______。
【分析】两个向量线性相关的充分必要条件是这两个向量的坐标成比例。由于 $A\alpha=\begin{pmatrix}1&2&-2\\2&1&2\\3&0&4\end{pmatrix}\begin{pmatrix}a\\1\\1\end{pmatrix}=\begin{pmatrix}a\\2a+3\\3a+4\end{pmatrix}$，所以有 $\dfrac aa=\dfrac{2a+3}{1}=\dfrac{3a+4}{1}$，可解出 $a=-1$。` },
      { p: 69, md: R`【例3.3】若 $n$ 维向量 $\alpha_1,\alpha_2,\cdots,\alpha_s$ 线性相关，判断下列向量组的线性相关性：(1) $\alpha_1,\alpha_2,\cdots,\alpha_s,\alpha_{s+1}$；(2) $\alpha_1,\alpha_2,\cdots,\alpha_{s-1}$。
【分析】(1) 因为 $\alpha_1,\cdots,\alpha_s$ 线性相关，故存在不全为 $0$ 的 $k_1,\cdots,k_s$ 使得 $k_1\alpha_1+\cdots+k_s\alpha_s=\mathbf0$，那么 $k_1\alpha_1+\cdots+k_s\alpha_s+0\alpha_{s+1}=\mathbf0$，而 $k_1,\cdots,k_s,0$ 不全为零，所以 $\alpha_1,\cdots,\alpha_s,\alpha_{s+1}$ 必线性相关。
(2) $\alpha_1,\cdots,\alpha_{s-1}$ 的线性相关性不确定。
从坐标上看 $\begin{pmatrix}1\\1\end{pmatrix},\begin{pmatrix}1\\2\end{pmatrix},\begin{pmatrix}2\\2\end{pmatrix}$ 相关 $\Rightarrow\begin{cases}\begin{pmatrix}1\\1\end{pmatrix},\begin{pmatrix}1\\2\end{pmatrix}\text{ 线性无关}\\\begin{pmatrix}1\\1\end{pmatrix},\begin{pmatrix}2\\2\end{pmatrix}\text{ 线性相关}\end{cases}$。
【评注】本题 (1) 实际上是给出定理 3.3 的一个证明；而 (2) 表明向量个数的增减对线性相关性的影响是单向的。

### 三、典型例题分析选讲
#### 正交矩阵
【例3.4】由定义知，若 $AA^T=A^TA=E$，则称矩阵 $A$ 是正交矩阵。(1) $A$ 是正交矩阵 $\Leftrightarrow A^T=A^{-1}$；(2) $A$ 是正交矩阵 $\Rightarrow|A|^2=1$；(3) 设 $A=\begin{pmatrix}a_1&b_1&c_1\\a_2&b_2&c_2\\a_3&b_3&c_3\end{pmatrix}$ 是正交矩阵，那么由 $A^TA=E$ 得 $\begin{pmatrix}a_1&a_2&a_3\\b_1&b_2&b_3\\c_1&c_2&c_3\end{pmatrix}\begin{pmatrix}a_1&b_1&c_1\\a_2&b_2&c_2\\a_3&b_3&c_3\end{pmatrix}=\begin{pmatrix}1&0&0\\0&1&0\\0&0&1\end{pmatrix}$，即 $a_1^2+a_2^2+a_3^2=1$，$a_1b_1+a_2b_2+a_3b_3=0$ 等。若令 $\alpha_1=(a_1,a_2,a_3)^T,\alpha_2=(b_1,b_2,b_3)^T,\alpha_3=(c_1,c_2,c_3)^T$，则上述关系式表明 $\alpha_1^T\alpha_1=1,\alpha_1^T\alpha_2=0,\cdots$，说明正交矩阵的列向量长度均为 $1$，列向量两两正交。类似地，利用 $AA^T=E$ 可知正交矩阵的行向量长度均为 $1$，行向量两两正交。` },
      { p: 70, md: R`【例3.5】在实对称矩阵求特征向量构造正交矩阵的问题上，常见的错误是：(1) $\begin{pmatrix}1&0&1\\0&1&0\\1&0&-1\end{pmatrix}$；(2) $\begin{pmatrix}1&0&0\\0&1&0\\1&0&0\end{pmatrix}$；(3) $\begin{pmatrix}1&1&1\\1&-1&0\\1&0&-1\end{pmatrix}$；(4) $\begin{pmatrix}\frac{1}{\sqrt3}&\frac{1}{\sqrt2}&\frac{1}{\sqrt2}\\\frac{1}{\sqrt3}&-\frac{1}{\sqrt2}&0\\\frac{1}{\sqrt3}&0&\frac{1}{\sqrt2}\end{pmatrix}$。要想清原因，引以为戒。

【例3.6】设 $A,B$ 均 $n$ 阶正交矩阵，且 $|A|+|B|=0$，证明 $|A+B|=0$。
【证】$|A+B|=|EA+B|=|B(B^TA+E)|=|B(B^TA+A^TA)|=|B(B^T+A^T)A|=|B(A+B)^TA|=|B|\cdot|(A+B)^T|\cdot|A|=-|B|^2\cdot|A+B|=-|A+B|$，所以 $|A+B|=0$。
【评注】处理行列式 $|A+B|$ 时，要注意单位矩阵 $E$ 恒等变形的技巧。

#### 线性相关
【例3.7】下列向量组中，线性无关的是 (A) $(1,2,3,4)^T,(2,3,4,5)^T,(0,0,0,0)^T$ (B) $(1,2,-1)^T,(3,5,6)^T,(0,7,9)^T,(1,0,2)^T$ (C) $(a,1,2,3)^T,(b,1,2,3)^T,(c,3,4,5)^T,(d,0,0,0)^T$ (D) $(a,1,b,0,0)^T,(c,0,d,6,0)^T,(a,0,c,5,6)^T$
【分析】(A) 中有零向量必线性相关（$0\alpha_1+0\alpha_2+\alpha_3=\mathbf0$，系数 $0,0,1$ 不全为 $0$）。(B) 是 4 个三维向量必线性相关（定理 3.2 推论 2）。(C) 是 4 个四维向量，由 $\begin{vmatrix}a&b&c&d\\1&1&3&0\\2&2&4&0\\3&3&5&0\end{vmatrix}=-d\begin{vmatrix}1&1&3\\2&2&4\\3&3&5\end{vmatrix}=0$ 从而线性相关。(D) 中因为 $\begin{vmatrix}1&0&0\\0&6&5\\0&0&6\end{vmatrix}\neq0$，知 $(1,0,0)^T,(0,6,0)^T,(0,5,6)^T$ 线性无关，那么其延伸组 $(a,1,b,0,0)^T,(c,0,d,6,0)^T,(a,0,c,5,6)^T$ 必线性无关。故应选 (D)。` },
      { p: 71, md: R`【例3.8】若 $\alpha_1=(1,3,4,-2)^T,\alpha_2=(2,1,3,t)^T,\alpha_3=(3,-1,2,0)^T$ 线性相关，则 $t=$______。
【分析】设 $x_1\alpha_1+x_2\alpha_2+x_3\alpha_3=\mathbf0$，按分量写出，即有 $\begin{cases}x_1+2x_2+3x_3=0\\3x_1+x_2-x_3=0\\4x_1+3x_2+2x_3=0\\-2x_1+tx_2=0\end{cases}$。对系数矩阵 $(\alpha_1,\alpha_2,\alpha_3)$ 作初等行变换，有
$$\begin{pmatrix}1&2&3\\3&1&-1\\4&3&2\\-2&t&0\end{pmatrix}\to\begin{pmatrix}1&2&3\\0&-5&-10\\0&-5&-10\\0&t+4&6\end{pmatrix}\to\begin{pmatrix}1&2&3\\0&1&2\\0&t+4&6\\0&0&0\end{pmatrix}\to\begin{pmatrix}1&2&3\\0&1&2\\0&0&6-2(t+4)\\0&0&0\end{pmatrix}$$
$\alpha_1,\alpha_2,\alpha_3$ 线性相关 $\Leftrightarrow(\alpha_1,\alpha_2,\alpha_3)\begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix}=\mathbf0$ 有非零解 $\Leftrightarrow$ 秩 $r(\alpha_1,\alpha_2,\alpha_3)<3$。故 $6-2(t+4)=0$，即 $t=-1$。

【例3.9】若 $\alpha_1=(1,2,3,1)^T,\alpha_2=(1,1,2,-1)^T,\alpha_3=(2,6,a,5)^T,\alpha_4=(3,4,7,-1)^T$ 线性相关，则 $a=$______。
【分析】4 个 4 维向量计算行列式，有 $|\alpha_1,\alpha_2,\alpha_3,\alpha_4|=\begin{vmatrix}1&1&2&3\\2&1&6&4\\3&2&a&7\\1&-1&5&-1\end{vmatrix}=\begin{vmatrix}1&1&2&3\\0&-1&2&-2\\0&-1&a-6&-2\\0&-2&3&-4\end{vmatrix}=\begin{vmatrix}-1&2&-2\\-1&a-6&-2\\-2&3&-4\end{vmatrix}=0$，说明 $\forall a$，$\alpha_1,\alpha_2,\alpha_3,\alpha_4$ 恒线性相关。
【评注】若已知向量的坐标而要判断线性相关性通常是看齐次方程组是否有非零解（如例3.8），特殊情况下（$n$ 个 $n$ 维向量）可用行列式（如例3.9）。若向量的坐标没有给出，通常用定义法或用秩的理论来分析判断论证。` },
      { p: 72, md: R`【例3.10】设 $A$ 是 $n$ 阶矩阵，$\alpha$ 是 $n$ 维列向量，若 $A^{m-1}\alpha\neq\mathbf0,A^m\alpha=\mathbf0$，证明向量组 $\alpha,A\alpha,A^2\alpha,\cdots,A^{m-1}\alpha$ 线性无关。
【证】（用定义、同乘）设 $k_1\alpha+k_2A\alpha+k_3A^2\alpha+\cdots+k_mA^{m-1}\alpha=\mathbf0$ (1)。由于 $A^m\alpha=\mathbf0$ 知 $A^{m+1}\alpha=\mathbf0,A^{m+2}\alpha=\mathbf0,\cdots$。用 $A^{m-1}$ 左乘 (1) 式两端，并把 $A^{m+1}\alpha=\mathbf0,A^{m+2}\alpha=\mathbf0,\cdots$ 代入，有 $k_1A^{m-1}\alpha=\mathbf0$ (2)。因为 $A^{m-1}\alpha\neq\mathbf0$，故 $k_1=0$。把 $k_1=0$ 代入 (1) 式，有 $k_2A\alpha+k_3A^2\alpha+\cdots+k_mA^{m-1}\alpha=\mathbf0$。用 $A^{m-2}$ 左乘上式，可知 $k_2A^{m-1}\alpha=\mathbf0$，从而 $k_2=0$。类似可得 $k_1=\cdots=k_m=0$。所以 $\alpha,A\alpha,A^2\alpha,\cdots,A^{m-1}\alpha$ 线性无关。

【例3.11】设 $A$ 是 $n$ 阶矩阵，$X_1,X_2,X_3$ 是 $n$ 维列向量，若 $AX_1=X_1\neq\mathbf0,AX_2=X_1+X_2,AX_3=X_2+X_3$，证明向量组 $X_1,X_2,X_3$ 线性无关。
【证】（用定义、同乘）设 $k_1X_1+k_2X_2+k_3X_3=\mathbf0$ (1)。由于 $(A-E)X_1=\mathbf0,(A-E)X_2=X_1,(A-E)X_3=X_2$，用 $A-E$ 左乘 (1) 式两端，得 $k_2X_1+k_3X_2=\mathbf0$ (2)。再用 $A-E$ 左乘 (2) 式两端，有 $k_3X_1=\mathbf0$。因为 $X_1\neq\mathbf0$，故 $k_3=0$。先后代入 (2) 与 (1) 式得 $k_2=0,k_1=0$。因此向量组 $X_1,X_2,X_3$ 线性无关。` },
      { p: 73, md: R`【例3.12】（2001,4）设 $\alpha_i=(a_{i1},a_{i2},\cdots,a_{in})^T\ (i=1,2,\cdots,r,r<n)$ 是 $n$ 维实向量，且 $\alpha_1,\alpha_2,\cdots,\alpha_r$ 线性无关。已知 $\beta=(b_1,b_2,\cdots,b_n)^T$ 是线性方程组 $\begin{cases}a_{11}x_1+a_{12}x_2+\cdots+a_{1n}x_n=0\\\cdots\\a_{r1}x_1+a_{r2}x_2+\cdots+a_{rn}x_n=0\end{cases}$ 的非零解向量，试判断向量组 $\alpha_1,\alpha_2,\cdots,\alpha_r,\beta$ 的线性相关性。
【解】（用定义、同乘）设 $k_1\alpha_1+k_2\alpha_2+\cdots+k_r\alpha_r+l\beta=\mathbf0$ (1)。因为 $\beta$ 为齐次方程组的非零解，有 $a_{11}b_1+\cdots+a_{1n}b_n=0,\cdots,a_{r1}b_1+\cdots+a_{rn}b_n=0$，即 $\beta^T\alpha_1=0,\beta^T\alpha_2=0,\cdots,\beta^T\alpha_r=0$。用 $\beta^T$ 左乘 (1) 式两端，并把 $\beta^T\alpha_i=0$ 代入，得 $l\beta^T\beta=0$ (2)。因为 $\beta\neq\mathbf0$，有 $\beta^T\beta=b_1^2+\cdots+b_n^2>0$，故必有 $l=0$，代入 (1) 式得 $k_1\alpha_1+\cdots+k_r\alpha_r=\mathbf0$ (3)。因为 $\alpha_1,\cdots,\alpha_r$ 线性无关，由 (3) 知 $k_1=0,\cdots,k_r=0$。从而向量组 $\alpha_1,\cdots,\alpha_r,\beta$ 线性无关。
【评注】由于不熟悉向量的内积，不清楚 $\beta$ 是齐次方程组的解即内积 $\beta^T\alpha_i=0$，也就分析不到应当用 $\beta^T$ 左乘 (1) 式，本题难度 $0.21$ 但区分度高。

【例3.13】已知 $n$ 维向量 $\alpha_1,\alpha_2,\alpha_3$ 线性无关，证明 $3\alpha_1+2\alpha_2,\alpha_2-\alpha_3,4\alpha_3-5\alpha_1$ 线性无关。
【证】（用定义、重组）设 $k_1(3\alpha_1+2\alpha_2)+k_2(\alpha_2-\alpha_3)+k_3(4\alpha_3-5\alpha_1)=\mathbf0$ (1)，即 $(3k_1-5k_3)\alpha_1+(2k_1+k_2)\alpha_2+(-k_2+4k_3)\alpha_3=\mathbf0$ (2)。` },
      { p: 74, md: R`由于 $\alpha_1,\alpha_2,\alpha_3$ 线性无关，那么 $\begin{cases}3k_1-5k_3=0\\2k_1+k_2=0\\-k_2+4k_3=0\end{cases}$ (3)。因为 $\begin{vmatrix}3&0&-5\\2&1&0\\0&-1&4\end{vmatrix}=22\neq0$，齐次方程组 (3) 只有零解 $k_1=0,k_2=0,k_3=0$。故向量组 $3\alpha_1+2\alpha_2,\alpha_2-\alpha_3,4\alpha_3-5\alpha_1$ 线性无关。

【例3.14】设 $\alpha_1,\alpha_2,\cdots,\alpha_t$ 是齐次方程组 $Ax=\mathbf0$ 的基础解系，$\beta$ 不是 $Ax=\mathbf0$ 的解，证明 $\beta+\alpha_1,\beta+\alpha_2,\cdots,\beta+\alpha_t$ 线性无关。
【证】（用定义、同乘且重组）设 $k_1(\beta+\alpha_1)+k_2(\beta+\alpha_2)+\cdots+k_t(\beta+\alpha_t)=\mathbf0$ (1)。因为 $A\alpha_i=\mathbf0\ (i=1,\cdots,t),A\beta\neq\mathbf0$，用 $A$ 左乘 (1) 式两端，得 $(k_1+k_2+\cdots+k_t)A\beta=\mathbf0$，从而 $k_1+k_2+\cdots+k_t=0$ (2)。由 (1) 式又有 $(k_1+\cdots+k_t)\beta+k_1\alpha_1+\cdots+k_t\alpha_t=\mathbf0$ (3)。将 (2) 式代入 (3) 式，得 $k_1\alpha_1+\cdots+k_t\alpha_t=\mathbf0$。因为 $\alpha_1,\cdots,\alpha_t$ 是基础解系，它们线性无关，故必有 $k_1=0,\cdots,k_t=0$。因此向量组 $\beta+\alpha_1,\cdots,\beta+\alpha_t$ 线性无关。

【例3.15】设 4 维列向量 $\alpha_1,\alpha_2,\alpha_3$ 线性无关，且与 4 维列向量 $\beta_1,\beta_2$ 均正交，证明 $\beta_1,\beta_2$ 线性相关。
【证】（用秩）构造矩阵 $A=\begin{pmatrix}\alpha_1^T\\\alpha_2^T\\\alpha_3^T\end{pmatrix}$，则 $A$ 是秩为 $3$ 的 $3\times4$ 矩阵。由于 $A\beta_i=\begin{pmatrix}\alpha_1^T\\\alpha_2^T\\\alpha_3^T\end{pmatrix}\beta_i=\begin{pmatrix}0\\0\\0\end{pmatrix}\ (i=1,2)$，所以 $\beta_1,\beta_2$ 均是齐次方程组 $Ax=\mathbf0$ 的解。那么 $r(\beta_1,\beta_2)\leqslant n-r(A)=4-3=1$，从而 $\beta_1,\beta_2$ 线性相关。` },
      { p: 75, md: R`【例3.16】已知 $n$ 维向量 $\alpha_1,\alpha_2,\alpha_3$ 线性无关，若 $\beta_1,\beta_2,\beta_3$ 可用 $\alpha_1,\alpha_2,\alpha_3$ 线性表出，设 $(\beta_1,\beta_2,\beta_3)=(\alpha_1,\alpha_2,\alpha_3)C$，证明 $\beta_1,\beta_2,\beta_3$ 线性无关的充分必要条件是 $|C|\neq0$。
【证】记 $A=(\alpha_1,\alpha_2,\alpha_3),B=(\beta_1,\beta_2,\beta_3)$。必要性：若 $\beta_1,\beta_2,\beta_3$ 线性无关，则秩 $r(B)=3$。又 $r(B)=r(AC)\leqslant r(C)\leqslant3$，因此秩 $r(C)=3$，即 $C$ 可逆，$|C|\neq0$。充分性：若 $|C|\neq0$，即 $C$ 可逆，那么 $r(B)=r(AC)=r(A)=3$，所以 $\beta_1,\beta_2,\beta_3$ 线性无关。

【例3.17】已知向量组 $\alpha_1,\alpha_2,\alpha_3$ 线性无关，向量组 $\alpha_1+a\alpha_2,\alpha_1+2\alpha_2+\alpha_3,a\alpha_1-\alpha_3$ 线性相关，则 $a=$______。
【分析】利用例3.16，由 $\begin{vmatrix}1&1&a\\a&2&0\\0&1&-1\end{vmatrix}=\begin{vmatrix}1&a+1&a\\a&2&0\\0&0&-1\end{vmatrix}=a^2+a-2=0$，知 $a=1$ 或 $a=-2$。

【例3.18】（1997,$\frac34$）已知向量组 $\alpha_1,\alpha_2,\alpha_3$ 线性无关，则下列向量组中，线性无关的是 (A) $\alpha_1+\alpha_2,\alpha_2+\alpha_3,\alpha_3-\alpha_1$ (B) $\alpha_1+\alpha_2,\alpha_2+\alpha_3,\alpha_1+2\alpha_2+\alpha_3$ (C) $\alpha_1+2\alpha_2,2\alpha_2+3\alpha_3,3\alpha_3+\alpha_1$ (D) $\alpha_1+\alpha_2+\alpha_3,2\alpha_1-3\alpha_2+22\alpha_3,3\alpha_1+5\alpha_2-5\alpha_3$
【分析】利用观察法，易见 (A) $(\alpha_1+\alpha_2)-(\alpha_2+\alpha_3)+(\alpha_3-\alpha_1)=\mathbf0$；(B) $(\alpha_1+\alpha_2)+(\alpha_2+\alpha_3)-(\alpha_1+2\alpha_2+\alpha_3)=\mathbf0$，故 (A),(B) 均线性相关。对于 (C) 和 (D)，简单地加加减减是得不到 $\mathbf0$，应立即转化为计算行列式（其背景是例3.16）。由于 $\begin{vmatrix}1&0&1\\2&2&0\\0&3&3\end{vmatrix}=12\neq0$，(C) 线性无关；$\begin{vmatrix}1&2&3\\1&-3&5\\1&22&-5\end{vmatrix}=\begin{vmatrix}1&2&3\\0&-5&2\\0&20&-8\end{vmatrix}=0$，(D) 线性相关。故应选 (C)。` },
      { p: 76, md: R`【例3.19】（2006,2,4分）设 $\alpha_1,\alpha_2,\cdots,\alpha_s$ 均为 $n$ 维列向量，$A$ 是 $m\times n$ 矩阵，下列选项正确的是 (A) 若 $\alpha_1,\cdots,\alpha_s$ 线性相关，则 $A\alpha_1,\cdots,A\alpha_s$ 线性相关 (B) 若 $\alpha_1,\cdots,\alpha_s$ 线性相关，则 $A\alpha_1,\cdots,A\alpha_s$ 线性无关 (C) 若 $\alpha_1,\cdots,\alpha_s$ 线性无关，则 $A\alpha_1,\cdots,A\alpha_s$ 线性相关 (D) 若 $\alpha_1,\cdots,\alpha_s$ 线性无关，则 $A\alpha_1,\cdots,A\alpha_s$ 线性无关
【分析】因为 $(A\alpha_1,A\alpha_2,\cdots,A\alpha_s)=A(\alpha_1,\alpha_2,\cdots,\alpha_s)$，所以 $r(A\alpha_1,\cdots,A\alpha_s)\leqslant r(\alpha_1,\cdots,\alpha_s)$。又因为 $\alpha_1,\cdots,\alpha_s$ 线性相关，有 $r(\alpha_1,\cdots,\alpha_s)<s$，从而 $r(A\alpha_1,\cdots,A\alpha_s)<s$，所以 $A\alpha_1,\cdots,A\alpha_s$ 线性相关。故应选 (A)。注意，当 $\alpha_1,\cdots,\alpha_s$ 线性无关时，若秩 $r(A)=n$，则向量组 $A\alpha_1,\cdots,A\alpha_s$ 线性无关，否则可以线性相关。

【例3.20】设 $\alpha_1,\alpha_2,\cdots,\alpha_s$ 是 $m$ 维向量，$\beta_1,\beta_2,\cdots,\beta_s$ 是 $n$ 维向量，令 $\gamma_1=\begin{pmatrix}\alpha_1\\\beta_1\end{pmatrix},\gamma_2=\begin{pmatrix}\alpha_2\\\beta_2\end{pmatrix},\cdots,\gamma_s=\begin{pmatrix}\alpha_s\\\beta_s\end{pmatrix}$。如果 $\alpha_1,\alpha_2,\cdots,\alpha_s$ 线性无关，证明 $\gamma_1,\gamma_2,\cdots,\gamma_s$ 线性无关。
【证】设 $x_1\gamma_1+x_2\gamma_2+\cdots+x_s\gamma_s=\mathbf0$，即 $(\gamma_1,\gamma_2,\cdots,\gamma_s)\begin{pmatrix}x_1\\x_2\\\vdots\\x_s\end{pmatrix}=\mathbf0$ (1)，即 $(\alpha_1,\alpha_2,\cdots,\alpha_s)\begin{pmatrix}x_1\\\vdots\\x_s\end{pmatrix}=\mathbf0$ (2)，$(\beta_1,\cdots,\beta_s)\begin{pmatrix}x_1\\\vdots\\x_s\end{pmatrix}=\mathbf0$ (3)。` },
      { p: 77, md: R`由于齐次方程组 (1) 的前 $m$ 个方程即是方程组 (2)，那么 (1) 的解必是 (2) 的解。因为 $\alpha_1,\cdots,\alpha_s$ 线性无关，齐次方程组 (2) 只有零解。因此齐次方程组 (1) 也仅有零解，故 $\gamma_1,\cdots,\gamma_s$ 线性无关。
【评注】如果对分块矩阵不熟悉、不习惯，不妨译成具体的方程组来体会。

【例3.21】证明：如果 $\beta_1,\beta_2,\beta_3$ 可由 $\alpha_1,\alpha_2$ 线性表出，则 $\beta_1,\beta_2,\beta_3$ 线性相关。
【证】因为 $\beta_1,\beta_2,\beta_3$ 可由 $\alpha_1,\alpha_2$ 线性表出，故可设 $\beta_1=a_{11}\alpha_1+a_{21}\alpha_2,\beta_2=a_{12}\alpha_1+a_{22}\alpha_2,\beta_3=a_{13}\alpha_1+a_{23}\alpha_2$。如果 $k_1\beta_1+k_2\beta_2+k_3\beta_3=\mathbf0$ (1)，即 $k_1(a_{11}\alpha_1+a_{21}\alpha_2)+k_2(a_{12}\alpha_1+a_{22}\alpha_2)+k_3(a_{13}\alpha_1+a_{23}\alpha_2)=\mathbf0$ (2)，即 $(a_{11}k_1+a_{12}k_2+a_{13}k_3)\alpha_1+(a_{21}k_1+a_{22}k_2+a_{23}k_3)\alpha_2=\mathbf0$ (3)。由于齐次线性方程组 $\begin{cases}a_{11}x_1+a_{12}x_2+a_{13}x_3=0\\a_{21}x_1+a_{22}x_2+a_{23}x_3=0\end{cases}$ (4) 中，方程个数 $<$ 未知数个数，方程组 (4) 必有非零解。那么取 $k_1,k_2,k_3$ 为此方程组的非零解，可知有不全为 $0$ 的 $k_1,k_2,k_3$ 使 (3) 成立，从而有不全为 $0$ 的 $k_1,k_2,k_3$ 使 (1) 成立，故 $\beta_1,\beta_2,\beta_3$ 线性相关。
【评注】本题其实是定理 3.7 的一个特殊情况，即若多数向量可用少数向量线性表出，则多数向量一定线性相关。

#### 线性表出
【例3.22】已知 $\alpha_1=(1,2,-3,1)^T,\alpha_2=(5,-5,a,11)^T,\alpha_3=(1,-3,6,3)^T,\beta=(2,-1,3,b)^T$，试问当 $a,b$ 取何值时 $\beta$ 可以由 $\alpha_1,\alpha_2,\alpha_3$ 线性表示，并写出其表达式。` },
      { p: 78, md: R`【解】设 $x_1\alpha_1+x_2\alpha_2+x_3\alpha_3=\beta$，按分量写出，即有 $\begin{cases}x_1+5x_2+x_3=2\\2x_1-5x_2-3x_3=-1\\-3x_1+ax_2+6x_3=3\\x_1+11x_2+3x_3=b\end{cases}$。对增广矩阵 $(\alpha_1,\alpha_2,\alpha_3,\beta)$ 作初等行变换，有
$$\begin{pmatrix}1&5&1&2\\2&-5&-3&-1\\-3&a&6&3\\1&11&3&b\end{pmatrix}\to\begin{pmatrix}1&5&1&2\\0&-15&-5&-5\\0&a+15&9&9\\0&6&2&b-2\end{pmatrix}\to\begin{pmatrix}1&5&1&2\\0&3&1&1\\0&0&\dfrac{12-a}{3}&\dfrac{12-a}{3}\\0&0&0&b-4\end{pmatrix}.$$
如果 $b\neq4$，方程组无解，$\beta$ 不能由 $\alpha_1,\alpha_2,\alpha_3$ 线性表出。如果 $b=4$，秩 $r(A)=r(\overline A)$，方程组有解，$\beta$ 可由 $\alpha_1,\alpha_2,\alpha_3$ 线性表出。
(1) 当 $a\neq12$ 时，方程组有唯一解 $x_3=1,x_2=0,x_1=1$，即 $\beta=\alpha_1+\alpha_3$。
(2) 当 $a=12$ 时，方程组有无穷多解 $x_2=t,x_3=1-3t,x_1=1-2t$，即 $\beta=(1-2t)\alpha_1+t\alpha_2+(1-3t)\alpha_3$，$t$ 为任意实数。
【评注】若已知向量的坐标而要判断能否线性表出，通常转换为非齐次线性方程组是否有解的讨论；如果向量的坐标没有给出，通常用线性相关及秩的理论分析、推理。

【例3.23】（2003,4）设有向量组 (Ⅰ)：$\alpha_1=(1,0,2)^T,\alpha_2=(1,1,3)^T,\alpha_3=(1,-1,a+2)^T$；(Ⅱ)：$\beta_1=(1,2,a+3)^T,\beta_2=(2,1,a+6)^T,\beta_3=(2,1,a+4)^T$。试问：当 $a$ 为何值时，向量组 (Ⅰ) 与 (Ⅱ) 等价？（本题完整解答见讲义后续，属本章综合应用）` }
    ],
    quiz: [
      { q: R`向量 $\beta$ 可由 $\alpha_1,\cdots,\alpha_s$ 线性表出的充要条件是`, options: [R`$r(\alpha_1,\cdots,\alpha_s)=r(\alpha_1,\cdots,\alpha_s,\beta)$`, R`$r(\alpha_1,\cdots,\alpha_s)=s$`, R`$\beta=0$`, R`$s=1$`], answer: 0, explain: R`对应非齐次方程组有解。` },
      { q: R`$n+1$ 个 $n$ 维向量`, options: [R`一定线性相关`, R`一定线性无关`, R`可能无关`, R`必有一个零向量`], answer: 0, explain: R`定理 3.2 推论 2。` },
      { q: R`$n$ 个 $n$ 维向量线性相关的充要条件是`, options: [R`$|\alpha_1,\alpha_2,\cdots,\alpha_n|=0$`, R`$|\alpha_1,\cdots,\alpha_n|\neq0$`, R`$r=n$`, R`含有零向量`], answer: 0, explain: R`定理 3.2 推论 1。` },
      { q: R`若向量组线性相关，则其部分组`, options: [R`线性相关性不确定`, R`一定线性相关`, R`一定线性无关`, R`必含零向量`], answer: 0, explain: R`个数增减对相关性的影响是单向的。` },
      { q: R`若多数向量可由少数向量线性表出，则多数向量`, options: [R`一定线性相关`, R`一定线性无关`, R`等价`, R`秩相等`], answer: 0, explain: R`定理 3.7。` },
      { q: R`$A$ 是正交矩阵，则`, options: [R`$A^T=A^{-1}$`, R`$A^T=-A$`, R`$A^2=E$`, R`$A=0$`], answer: 0, explain: R`$AA^T=E$ 即 $A^T=A^{-1}$。` },
      { q: R`两个等价向量组`, options: [R`秩相等`, R`向量个数相等`, R`完全相同`, R`秩都为零`], answer: 0, explain: R`等价向量组秩相等。` },
      { q: R`若 $\alpha_1,\alpha_2,\alpha_3$ 线性无关，则下列线性无关的是`, options: [R`$\alpha_1+2\alpha_2,2\alpha_2+3\alpha_3,3\alpha_3+\alpha_1$`, R`$\alpha_1+\alpha_2,\alpha_2+\alpha_3,\alpha_3-\alpha_1$`, R`$\alpha_1+\alpha_2,\alpha_2+\alpha_3,\alpha_1+2\alpha_2+\alpha_3$`, R`以上都相关`], answer: 0, explain: R`对应系数行列式非零则线性无关。` },
      { q: R`$(\beta_1,\beta_2,\beta_3)=(\alpha_1,\alpha_2,\alpha_3)C$，且 $\alpha_1,\alpha_2,\alpha_3$ 线性无关，则 $\beta_1,\beta_2,\beta_3$ 线性无关 $\Leftrightarrow$`, options: [R`$|C|\neq0$`, R`$|C|=0$`, R`$r(C)=0$`, R`$C=0$`], answer: 0, explain: R`例 3.16 的结论。` },
      { q: R`若 $\alpha_1,\cdots,\alpha_s$ 线性相关，则 $A\alpha_1,\cdots,A\alpha_s$`, options: [R`一定线性相关`, R`一定线性无关`, R`秩为 $s$`, R`必为零向量`], answer: 0, explain: R`$r(A\alpha_1,\cdots,A\alpha_s)\leqslant r(\alpha_1,\cdots,\alpha_s)<s$。` }
    ]
  };
})();
