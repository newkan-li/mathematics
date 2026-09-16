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

【例3.23】（2003,4）设有向量组 (Ⅰ)：$\alpha_1=(1,0,2)^T,\alpha_2=(1,1,3)^T,\alpha_3=(1,-1,a+2)^T$；(Ⅱ)：$\beta_1=(1,2,a+3)^T,\beta_2=(2,1,a+6)^T,\beta_3=(2,1,a+4)^T$。试问：当 $a$ 为何值时，向量组 (Ⅰ) 与 (Ⅱ) 等价？（本题完整解答见讲义后续，属本章综合应用）` },
      { p: 79, md: R`【例3.23（续）】当 $a$ 为何值时，向量组 (Ⅰ) 与 (Ⅱ) 等价？
【解】对 $(\alpha_1,\alpha_2,\alpha_3;\beta_1,\beta_2,\beta_3)$ 作初等行变换，有
$$(\alpha_1,\alpha_2,\alpha_3;\beta_1,\beta_2,\beta_3)=\begin{pmatrix}1&1&1&1&2&2\\0&1&-1&2&1&1\\2&3&a+2&a+3&a+6&a+4\end{pmatrix}\to\begin{pmatrix}1&1&1&1&2&2\\0&1&-1&2&1&1\\0&1&a&a+1&a+2&a\end{pmatrix}\to\begin{pmatrix}1&1&1&1&2&2\\0&1&-1&2&1&1\\0&0&a+1&a-1&a-1&a+1\end{pmatrix}.$$
由 $x_1\alpha_1+x_2\alpha_2+x_3\alpha_3=\beta_1$ 知，只要 $a\neq-1$ 方程组总有唯一解，即 $\beta_1$ 必可由 (Ⅰ) 线性表出；而 $a=-1$ 时方程组无解。由 $\beta_2,\beta_3$ 对应的方程组知 $a\neq-1$ 时均有解，故 $a\neq-1$ 时 (Ⅱ) 可由 (Ⅰ) 线性表出。反之，由 $|\beta_1,\beta_2,\beta_3|=\begin{vmatrix}1&2&2\\2&1&1\\a+3&a+6&a+4\end{vmatrix}=\begin{vmatrix}1&2&0\\2&1&0\\a+3&a+6&-2\end{vmatrix}=6\neq0$ 知 $\forall a$，(Ⅰ) 总可由 (Ⅱ) 线性表出。因此 $a\neq-1$ 时向量组 (Ⅰ) 与 (Ⅱ) 等价；$a=-1$ 时不等价。

【例3.24】（1992,1）设向量组 $\alpha_1,\alpha_2,\alpha_3$ 线性相关，向量组 $\alpha_2,\alpha_3,\alpha_4$ 线性无关，问：(1) $\alpha_1$ 能否由 $\alpha_2,\alpha_3$ 线性表出？(2) $\alpha_4$ 能否由 $\alpha_1,\alpha_2,\alpha_3$ 线性表出？
【解】(1) $\alpha_1$ 能由 $\alpha_2,\alpha_3$ 线性表出。
【证法1】因为 $\alpha_2,\alpha_3,\alpha_4$ 线性无关，那么它的部分组 $\alpha_2,\alpha_3$ 线性无关（定理 3.3）。又因 $\alpha_1,\alpha_2,\alpha_3$ 线性相关，故 $\alpha_1$ 可以由 $\alpha_2,\alpha_3$ 线性表出（定理 3.6）。` },
      { p: 80, md: R`【证法2】因为 $\alpha_1,\alpha_2,\alpha_3$ 线性相关，故存在不全为零的数 $k_1,k_2,k_3$，使得 $k_1\alpha_1+k_2\alpha_2+k_3\alpha_3=\mathbf0$，其中必有 $k_1\neq0$。否则若 $k_1=0$，则 $k_2,k_3$ 不全为零使 $k_2\alpha_2+k_3\alpha_3=\mathbf0$，即 $\alpha_2,\alpha_3$ 线性相关，进而 $\alpha_2,\alpha_3,\alpha_4$ 线性相关（定理 3.3），与已知矛盾。于是 $\alpha_1=-\dfrac{k_2}{k_1}\alpha_2-\dfrac{k_3}{k_1}\alpha_3$，即 $\alpha_1$ 可由 $\alpha_2,\alpha_3$ 线性表出。
(2) $\alpha_4$ 不能由 $\alpha_1,\alpha_2,\alpha_3$ 线性表出。
【证法1】（反证法）若 $\alpha_4$ 能由 $\alpha_1,\alpha_2,\alpha_3$ 线性表出，设 $\alpha_4=k_1\alpha_1+k_2\alpha_2+k_3\alpha_3$。由 (1) 知 $\alpha_1=l_2\alpha_2+l_3\alpha_3$，代入整理得 $\alpha_4=(k_1l_2+k_2)\alpha_2+(k_1l_3+k_3)\alpha_3$，即 $\alpha_4$ 可由 $\alpha_2,\alpha_3$ 线性表出，从而 $\alpha_2,\alpha_3,\alpha_4$ 线性相关（定理 3.5），与已知矛盾。
【证法2】考察方程组 $x_1\alpha_1+x_2\alpha_2+x_3\alpha_3=\alpha_4$。因为 $\alpha_1,\alpha_2,\alpha_3$ 线性相关，故 $r(A)=r(\alpha_1,\alpha_2,\alpha_3)<3$；又 $\alpha_2,\alpha_3,\alpha_4$ 线性无关，故 $r(\overline A)=r(\alpha_1,\alpha_2,\alpha_3,\alpha_4)\geqslant3$。于是 $r(A)\neq r(\overline A)$，方程组无解，因此 $\alpha_4$ 不能由 $\alpha_1,\alpha_2,\alpha_3$ 线性表出。

【例3.25】设向量 $\beta$ 可以由向量组 $\alpha_1,\alpha_2,\cdots,\alpha_m$ 线性表出，但 $\beta$ 不能由 $\alpha_1,\alpha_2,\cdots,\alpha_{m-1}$ 线性表出。判断：(1) $\alpha_m$ 能否由 $\alpha_1,\cdots,\alpha_{m-1},\beta$ 线性表出？(2) $\alpha_m$ 能否由 $\alpha_1,\cdots,\alpha_{m-1}$ 线性表出？
【解】(1) $\alpha_m$ 可以由 $\alpha_1,\cdots,\alpha_{m-1},\beta$ 线性表出。因为 $\beta$ 可由 $\alpha_1,\cdots,\alpha_m$ 线性表出，故可设 $\beta=l_1\alpha_1+\cdots+l_{m-1}\alpha_{m-1}+l_m\alpha_m$ (1)，此时必有 $l_m\neq0$（否则与已知矛盾）。那么 $\alpha_m=\dfrac{1}{l_m}(\beta-l_1\alpha_1-\cdots-l_{m-1}\alpha_{m-1})$。
(2) $\alpha_m$ 不能由 $\alpha_1,\cdots,\alpha_{m-1}$ 线性表出。若不然，设 $\alpha_m=k_1\alpha_1+\cdots+k_{m-1}\alpha_{m-1}$ (2)，` },
      { p: 81, md: R`将 (2) 代入 (1)，整理得 $\beta=(l_1+l_mk_1)\alpha_1+\cdots+(l_{m-1}+l_mk_{m-1})\alpha_{m-1}$，说明 $\beta$ 可由 $\alpha_1,\cdots,\alpha_{m-1}$ 线性表出，与已知矛盾。故 $\alpha_m$ 不能由 $\alpha_1,\cdots,\alpha_{m-1}$ 线性表出。

【例3.26】（2000,1）设 $n$ 维列向量组 $\alpha_1,\cdots,\alpha_m\ (m<n)$ 线性无关，则 $n$ 维列向量组 $\beta_1,\cdots,\beta_m$ 线性无关的充分必要条件为 (A) 向量组 $\alpha_1,\cdots,\alpha_m$ 可由 $\beta_1,\cdots,\beta_m$ 线性表示 (B) $\beta_1,\cdots,\beta_m$ 可由 $\alpha_1,\cdots,\alpha_m$ 线性表示 (C) 两向量组等价 (D) 矩阵 $A=(\alpha_1,\cdots,\alpha_m)$ 与 $B=(\beta_1,\cdots,\beta_m)$ 等价
【分析】简记 (Ⅰ):$\alpha_1,\cdots,\alpha_m$，(Ⅱ):$\beta_1,\cdots,\beta_m$。(Ⅱ) 线性无关 $\Leftrightarrow r(\text{Ⅱ})=m$。(A) 若 (Ⅰ) 可由 (Ⅱ) 表出，则 $r(\text{Ⅰ})\leqslant r(\text{Ⅱ})$，又 $m=r(\text{Ⅰ})\leqslant r(\text{Ⅱ})\leqslant m$，得 $r(\text{Ⅱ})=m$，充分性成立；但当 $m<n$ 时不必要，如 $\alpha_1=(1,0,0)^T,\alpha_2=(0,1,0)^T,\beta_1=(1,0,0)^T,\beta_2=(0,0,1)^T$。(B) 若 (Ⅱ) 可由 (Ⅰ) 表出，则 $r(\text{Ⅱ})\leqslant m$，不能确定，且不必要，故既不充分也不必要。(C) 由 (A)(B) 知只是充分条件。(D) $A,B$ 等价 $\Leftrightarrow r(A)=r(B)$。若 $A,B$ 等价，则 $r(B)=r(A)=m$，$\beta_1,\cdots,\beta_m$ 线性无关，充分性成立；` },
      { p: 82, md: R`反之若两向量组均线性无关，则 $r(\alpha_1,\cdots,\alpha_m)=r(\beta_1,\cdots,\beta_m)=m$，从而 $r(A)=r(B)$，即 $A,B$ 等价，必要性成立。故应选 (D)。
【评注】两个"等价"概念要区分：向量组个数相同且等价 $\Rightarrow$ 对应矩阵等价；但矩阵等价 $\nRightarrow$ 向量组等价。

#### 向量组的秩
【例3.27】如果向量组 (Ⅰ):$\alpha_{i_1},\cdots,\alpha_{i_r}$ 与 (Ⅱ):$\alpha_{j_1},\cdots,\alpha_{j_t}$ 都是向量组 $\alpha_1,\cdots,\alpha_s$ 的极大线性无关组，证明 $r=t$。
【证】因为 $\alpha_{i_1},\cdots,\alpha_{i_r}$ 是极大线性无关组，所以 $\alpha_{i_1},\cdots,\alpha_{i_r},\alpha_{j_k}\ (k=1,\cdots,t)$ 线性相关，于是 $\alpha_{j_k}$ 可由 $\alpha_{i_1},\cdots,\alpha_{i_r}$ 线性表出。从而 (Ⅱ) 可由 (Ⅰ) 线性表出。又 (Ⅱ) 线性无关，所以 $t\leqslant r$（定理 3.7）。同理 $r\leqslant t$，故 $r=t$。
【评注】极大线性无关组往往不唯一，成员可不一样，但所含向量个数相同，由此引出向量组秩的概念。

【例3.28】已知向量组 $\alpha_1=(1,1,1,3)^T,\alpha_2=(1,3,-5,-1)^T,\alpha_3=(-2,-6,10,a)^T,\alpha_4=(4,1,6,a+10)^T$ 线性相关，则其极大线性无关组是______。
【分析】$(\alpha_1,\alpha_2,\alpha_3,\alpha_4)=\begin{pmatrix}1&1&-2&4\\1&3&-6&1\\1&-5&10&6\\3&-1&a&a+10\end{pmatrix}\to\begin{pmatrix}1&1&-2&4\\0&2&-4&-3\\0&-6&12&2\\0&-4&a+6&a-2\end{pmatrix}\to\begin{pmatrix}1&1&-2&4\\0&2&-4&-3\\0&0&0&-7\\0&0&a-2&a-8\end{pmatrix}$。那么线性相关 $\Leftrightarrow r(\alpha_1,\alpha_2,\alpha_3,\alpha_4)<4\Leftrightarrow a=2$。此时 $r=3$，极大线性无关组是 $\alpha_1,\alpha_2,\alpha_4$ 或 $\alpha_1,\alpha_3,\alpha_4$。

【例3.29】（2006,$\frac34$）设 4 维向量组 $\alpha_1=(1+a,1,1,1)^T,\alpha_2=(2,2+a,2,2)^T,\alpha_3=(3,3,3+a)^T,\alpha_4=(4,4,4,4+a)^T$，问 $a$ 为何值时 $\alpha_1,\alpha_2,\alpha_3,\alpha_4$ 线性相关？当线性相关时求其一个极大线性无关组，并将其余向量用该极大线性无关组线性表示。` },
      { p: 83, md: R`【解】记 $A=(\alpha_1,\alpha_2,\alpha_3,\alpha_4)$，则 $|A|=\begin{vmatrix}1+a&2&3&4\\1&2+a&3&4\\1&2&3+a&4\\1&2&3&4+a\end{vmatrix}=(a+10)a^3$，那么当 $a=0$ 或 $a=-10$ 时，$\alpha_1,\alpha_2,\alpha_3,\alpha_4$ 线性相关。
当 $a=0$ 时，$\alpha_1$ 为极大线性无关组，且 $\alpha_2=2\alpha_1,\alpha_3=3\alpha_1,\alpha_4=4\alpha_1$。
当 $a=-10$ 时，对 $A$ 作初等行变换，有 $A=\begin{pmatrix}-9&2&3&4\\1&-8&3&4\\1&2&-7&4\\1&2&3&-6\end{pmatrix}\to\begin{pmatrix}-9&2&3&4\\10&-10&0&0\\10&0&-10&0\\10&0&0&-10\end{pmatrix}\to\begin{pmatrix}-9&2&3&4\\1&-1&0&0\\1&0&-1&0\\1&0&0&-1\end{pmatrix}\to\begin{pmatrix}0&0&0&0\\1&-1&0&0\\1&0&-1&0\\1&0&0&-1\end{pmatrix}=(\beta_1,\beta_2,\beta_3,\beta_4)$。由于 $\beta_2,\beta_3,\beta_4$ 是极大线性无关组且 $\beta_1=-\beta_2-\beta_3-\beta_4$，故 $\alpha_2,\alpha_3,\alpha_4$ 为极大线性无关组，且 $\alpha_1=-\alpha_2-\alpha_3-\alpha_4$。

【例3.30】已知向量组 (Ⅰ):$\alpha_1,\cdots,\alpha_s$ 与 (Ⅱ):$\alpha_1,\cdots,\alpha_s,\beta_1,\cdots,\beta_t$ 有相同的秩，证明 $\beta_1,\cdots,\beta_t$ 可以由 $\alpha_1,\cdots,\alpha_s$ 线性表出。
【证】设 $\alpha_{i_1},\cdots,\alpha_{i_r}$ 是 (Ⅰ) 的极大线性无关组，它也是 (Ⅱ) 中 $r$ 个线性无关的向量。又 $r(\text{Ⅱ})=r(\text{Ⅰ})=r$，从而它也是 (Ⅱ) 的极大线性无关组。因此 $\beta_1,\cdots,\beta_t$ 可由 $\alpha_{i_1},\cdots,\alpha_{i_r}$ 线性表出，也就可由 $\alpha_1,\cdots,\alpha_s$ 线性表出。

【例3.31】设向量组 (Ⅰ) 可由向量组 (Ⅱ) 线性表出，且秩 $r(\text{Ⅰ})=r(\text{Ⅱ})$，证明向量组 (Ⅰ) 与 (Ⅱ) 等价。` },
      { p: 84, md: R`【证】设 $r(\text{Ⅰ})=r(\text{Ⅱ})=r$，且 $\alpha_1,\cdots,\alpha_r$ 与 $\beta_1,\cdots,\beta_r$ 分别是 (Ⅰ)(Ⅱ) 的极大线性无关组。由 (Ⅰ) 可由 (Ⅱ) 表出，$\alpha_1,\cdots,\alpha_r$ 可由 $\beta_1,\cdots,\beta_r$ 表出，那么 $r(\alpha_1,\cdots,\alpha_r,\beta_1,\cdots,\beta_r)=r(\beta_1,\cdots,\beta_r)=r$。又 $\alpha_1,\cdots,\alpha_r$ 线性无关，于是它是该向量组的极大线性无关组，从而 $\beta_1,\cdots,\beta_r$ 可由 $\alpha_1,\cdots,\alpha_r$ 表出，进而 (Ⅱ) 可由 (Ⅰ) 表出。故 (Ⅰ) 与 (Ⅱ) 等价。
【评注】若 (Ⅰ)(Ⅱ) 等价，则 $r(\text{Ⅰ})=r(\text{Ⅱ})$；但 $r(\text{Ⅰ})=r(\text{Ⅱ})$ 时不一定等价，如 $\alpha_1=(1,0,0)^T,\alpha_2=(0,1,0)^T$ 与 $\beta_1=(1,0,0)^T,\beta_2=(0,0,1)^T$。

#### 矩阵的秩
【例3.32】设矩阵 $A=\begin{pmatrix}1&1&1&1\\0&-1&1&b\\2&a&3&4\\3&1&5&7\end{pmatrix}$，求矩阵 $A$ 的秩。
【解】$A\to\begin{pmatrix}1&1&1&1\\0&-1&1&b\\0&a-2&1&2\\0&-2&2&4\end{pmatrix}\to\begin{pmatrix}1&1&1&1\\0&-1&1&b\\0&0&a-1&ab-2b+2\\0&0&0&4-2b\end{pmatrix}$。当 $a\neq1$ 且 $b\neq2$ 时 $r(A)=4$；当 $a=1$ 且 $b=2$ 时 $r(A)=2$；当 $a\neq1$ 且 $b=2$ 或 $a=1$ 且 $b\neq2$ 时 $r(A)=3$。

【例3.33】设 $A=\begin{pmatrix}2&3&4\\6&t&2\\4&6&3\end{pmatrix},B=\begin{pmatrix}1\\3\\0\end{pmatrix}(2\ \ 3\ \ 4)$，若秩 $r(A+AB)=2$，则 $t=$______。` },
      { p: 85, md: R`【分析】$r(A+AB)=r[A(E+B)]$，而 $E+B=E+\begin{pmatrix}1\\3\\0\end{pmatrix}(2\ \ 3\ \ 4)=\begin{pmatrix}3&3&4\\6&10&12\\0&0&1\end{pmatrix}$ 可逆，故 $r(A+AB)=r(A)=2$。对 $A$ 作初等变换 $A=\begin{pmatrix}2&3&4\\6&t&2\\4&6&3\end{pmatrix}\to\begin{pmatrix}2&3&4\\0&t-9&-10\\0&0&-5\end{pmatrix}$，那么 $r(A)=2\Leftrightarrow t=9$。

【例3.34】设 $A$ 是 $m\times n$ 矩阵，$B$ 是 $n\times s$ 矩阵，证明秩 $r(AB)\leqslant\min(r(A),r(B))$。
【证】对 $ABx=0$ (Ⅰ) 与 $Bx=0$ (Ⅱ)：若 $\alpha$ 是 (Ⅱ) 的解，则 $(AB)\alpha=A(B\alpha)=A0=0$，即 (Ⅱ) 解集是 (Ⅰ) 解集的子集。又 (Ⅰ) 解向量秩为 $s-r(AB)$，(Ⅱ) 解向量秩为 $s-r(B)$，故 $s-r(B)\leqslant s-r(AB)$，即 $r(AB)\leqslant r(B)$。另一方面 $r(AB)=r((AB)^T)=r(B^TA^T)\leqslant r(A^T)=r(A)$。命题得证。
【证法二】记 $AB=C$，对 $A,C$ 按列分块得 $(\alpha_1,\cdots,\alpha_n)\begin{pmatrix}b_{ij}\end{pmatrix}=(\gamma_1,\cdots,\gamma_s)$，说明 $AB$ 的列向量可由 $A$ 的列向量线性表出，故 $r(AB)=r(\gamma_1,\cdots,\gamma_s)\leqslant r(\alpha_1,\cdots,\alpha_n)=r(A)$；` },
      { p: 86, md: R`类似地按行分块得 $AB$ 的行向量可由 $B$ 的行向量线性表出，故 $r(AB)\leqslant r(B)$。

【例3.35】设 $A$ 是 $m\times n$ 矩阵，$B$ 是 $n\times s$ 矩阵，若 $AB=0$，证明 $r(A)+r(B)\leqslant n$。
【证】对 $B$ 按列分块 $B=(\beta_1,\beta_2,\cdots,\beta_s)$，则 $AB=(A\beta_1,A\beta_2,\cdots,A\beta_s)=(0,0,\cdots,0)$，于是 $A\beta_j=0$，即 $B$ 的列向量均是 $Ax=0$ 的解。由于 $Ax=0$ 解向量的秩为 $n-r(A)$，所以 $r(\beta_1,\cdots,\beta_s)\leqslant n-r(A)$；又 $r(\beta_1,\cdots,\beta_s)=r(B)$，从而 $r(A)+r(B)\leqslant n$。
【评注】关于 $AB=0$ 应有两个重要思路：(1) $B$ 的列向量是方程组 $Ax=0$ 的解；(2) 秩 $r(A)+r(B)\leqslant n$。

【例3.36】设 $A$ 是 3 阶实对称矩阵，若 $A^2=0$，证明 $A=0$。
【证】设 $A=\begin{pmatrix}a_{11}&a_{12}&a_{13}\\a_{12}&a_{22}&a_{23}\\a_{13}&a_{23}&a_{33}\end{pmatrix}$，由 $A^2$ 的对角元得 $a_{11}^2+a_{12}^2+a_{13}^2=0$ 等，即 $a_{11}=a_{12}=a_{13}=0$ 等，故 $A=0$。
【评注】由 $AB=0\nRightarrow A=0$，由 $A^2=0\nRightarrow A=0$（如 $A=\begin{pmatrix}0&1\\0&0\end{pmatrix}$）；但 $A$ 为实对称矩阵时由 $A^2=0$ 可推 $A=0$。

【例3.37】设 $A$ 是 4 阶矩阵，若 $\alpha_1=(1,9,9,9)^T,\alpha_2=(2,0,0,0)^T,\alpha_3=(2,0,0,1)^T$ 是线性方程组 $Ax=b$ 的三个解，证明 $A^*=0$。` },
      { p: 87, md: R`【证】因为 $\alpha_1-\alpha_2=(-1,9,9,9)^T,\alpha_1-\alpha_3=(-1,9,9,8)^T$ 是齐次方程组 $Ax=0$ 的两个线性无关的解，所以 $n-r(A)\geqslant2$。又 $n=4$，故 $r(A)\leqslant2$，说明 $A$ 中 3 阶子式全为 $0$，因而伴随矩阵 $A^*=0$。

#### Schmidt 正交化
【例3.38】如果向量组 $\alpha_1,\alpha_2,\alpha_3$ 线性无关，令 $\beta_1=\alpha_1$，$\beta_2=\alpha_2-\dfrac{(\alpha_2,\beta_1)}{(\beta_1,\beta_1)}\beta_1$，$\beta_3=\alpha_3-\dfrac{(\alpha_3,\beta_1)}{(\beta_1,\beta_1)}\beta_1-\dfrac{(\alpha_3,\beta_2)}{(\beta_2,\beta_2)}\beta_2$，那么 $\beta_1,\beta_2,\beta_3$ 两两正交，称为正交向量组。将其单位化 $\gamma_1=\dfrac{\beta_1}{\|\beta_1\|},\gamma_2=\dfrac{\beta_2}{\|\beta_2\|},\gamma_3=\dfrac{\beta_3}{\|\beta_3\|}$，则 $\alpha_1,\alpha_2,\alpha_3$ 到 $\gamma_1,\gamma_2,\gamma_3$ 这一过程称为 Schmidt 正交化。
例如 $\alpha_1=(0,1,2)^T,\alpha_2=(1,0,1)^T,\alpha_3=(1,1,0)^T$，则 $\beta_1=\begin{pmatrix}0\\1\\2\end{pmatrix}$，$\beta_2=\begin{pmatrix}1\\0\\1\end{pmatrix}-\dfrac25\begin{pmatrix}0\\1\\2\end{pmatrix}=\dfrac15\begin{pmatrix}5\\-2\\1\end{pmatrix}$，$\beta_3=\begin{pmatrix}1\\1\\0\end{pmatrix}-\dfrac15\begin{pmatrix}0\\1\\2\end{pmatrix}-\dfrac{3}{30}\begin{pmatrix}5\\-2\\1\end{pmatrix}=\dfrac12\begin{pmatrix}1\\2\\-1\end{pmatrix}$。单位化得 $\gamma_1=\dfrac{1}{\sqrt5}\begin{pmatrix}0\\1\\2\end{pmatrix},\gamma_2=\dfrac{1}{\sqrt{30}}\begin{pmatrix}5\\-2\\1\end{pmatrix},\gamma_3=\dfrac{1}{\sqrt6}\begin{pmatrix}1\\2\\-1\end{pmatrix}$。

#### 向量空间$^{*}$
**定义3.8** 全体 $n$ 维向量连同向量的加法和数乘运算合称为 $n$ 维向量空间。（$^{*}$ 仅数学一要求）` },
      { p: 88, md: R`**定义3.9** 设 $W$ 是 $n$ 维向量的非空集合，如果满足 (1) $\forall\alpha,\beta\in W$ 必有 $\alpha+\beta\in W$；(2) $\forall\alpha\in W$ 及任一实数 $k$ 必有 $k\alpha\in W$，则称 $W$ 是 $n$ 维向量空间的子空间。
**定义3.10** 如果向量空间 $V$ 中的 $m$ 个向量 $\alpha_1,\cdots,\alpha_m$ 满足 (1) $\alpha_1,\cdots,\alpha_m$ 线性无关；(2) 对 $V$ 中任意向量 $\beta$，$\beta$ 均可由 $\alpha_1,\cdots,\alpha_m$ 线性表出，则称 $\alpha_1,\cdots,\alpha_m$ 为向量空间 $V$ 的一个基底（基），$m$ 称为维数，记作 $\dim V=m$。向量 $\beta$ 的表示系数称为 $\beta$ 在基底下的坐标。
**定义3.11** 设 $e_1,\cdots,e_n$ 是向量空间的一组基，如果 $(e_i,e_j)=\begin{cases}1,&i=j\\0,&i\neq j\end{cases}$，则称 $e_1,\cdots,e_n$ 为规范正交基。
【例3.39】齐次方程组 $Ax=0$ 的解向量的集合 $W$ 是 $n$ 维向量空间的子空间，称为解空间。例如 $A=\begin{pmatrix}1&1&0&-1\\0&1&0&1\end{pmatrix}$，则基础解系 $\eta_1=(0,0,1,0)^T,\eta_2=(2,-1,0,1)^T$ 是解空间的基，维数 $n-r(A)=4-2=2$。$\eta_1,\eta_2$ 已经正交，单位化 $\gamma_1=(0,0,1,0)^T,\gamma_2=\dfrac{1}{\sqrt6}(2,-1,0,1)^T$ 就是规范正交基。
**定义3.12** 在 $n$ 维向量空间给定两组基 (Ⅰ) $\alpha_1,\cdots,\alpha_n$，(Ⅱ) $\beta_1,\cdots,\beta_n$，若 $\beta_1=c_{11}\alpha_1+c_{21}\alpha_2+\cdots+c_{n1}\alpha_n,\cdots,\beta_n=c_{1n}\alpha_1+\cdots+c_{nn}\alpha_n$，即 $(\beta_1\ \beta_2\ \cdots\ \beta_n)=(\alpha_1\ \alpha_2\ \cdots\ \alpha_n)C$，其中 $C=\begin{pmatrix}c_{11}&c_{12}&\cdots&c_{1n}\\\cdots&\cdots&&\cdots\\c_{n1}&c_{n2}&\cdots&c_{nn}\end{pmatrix}$` },
      { p: 89, md: R`称为由基 $\alpha_1,\cdots,\alpha_n$ 到基 $\beta_1,\cdots,\beta_n$ 的过渡矩阵。
【例3.40】（2003,1）从 $R^2$ 的基 $\alpha_1=\begin{pmatrix}1\\0\end{pmatrix},\alpha_2=\begin{pmatrix}1\\-1\end{pmatrix}$ 到基 $\beta_1=\begin{pmatrix}1\\1\end{pmatrix},\beta_2=\begin{pmatrix}1\\2\end{pmatrix}$ 的过渡矩阵为______。
【分析】$\beta_1=2\alpha_1-\alpha_2,\beta_2=3\alpha_1-2\alpha_2$，故过渡矩阵 $C=\begin{pmatrix}2&3\\-1&-2\end{pmatrix}$。或 $C=(\alpha_1\alpha_2)^{-1}(\beta_1\beta_2)=\begin{pmatrix}1&1\\0&-1\end{pmatrix}^{-1}\begin{pmatrix}1&1\\1&2\end{pmatrix}=\begin{pmatrix}1&1\\0&-1\end{pmatrix}\begin{pmatrix}1&1\\1&2\end{pmatrix}=\begin{pmatrix}2&3\\-1&-2\end{pmatrix}$。
**定理3.10** 两个基底间的过渡矩阵 $C$ 是可逆矩阵。
**定理3.11** 若向量 $\gamma$ 在基底 $\alpha_1,\cdots,\alpha_n$ 的坐标为 $x_1,\cdots,x_n$，在基底 $\beta_1,\cdots,\beta_n$ 的坐标为 $y_1,\cdots,y_n$，则坐标变换公式为 $\begin{pmatrix}x_1\\\vdots\\x_n\end{pmatrix}=C\begin{pmatrix}y_1\\\vdots\\y_n\end{pmatrix}$ 或 $x=Cy$。
**定理3.12** 若 $n$ 维向量 $\alpha_1,\cdots,\alpha_s$ 非零且两两正交，则 $\alpha_1,\cdots,\alpha_s$ 线性无关。
**定理3.13** 若 $e_1,\cdots,e_n$ 是规范正交基，设 $(\varepsilon_1,\cdots,\varepsilon_n)=(e_1,\cdots,e_n)C$，则 $\varepsilon_1,\cdots,\varepsilon_n$ 是规范正交基的充要条件是 $C$ 为正交矩阵。
【例3.41】（1987,1）已知三维向量空间的一组基底为 $\alpha_1=(1,1,0),\alpha_2=(1,0,1),\alpha_3=(0,1,1)$，则向量 $u=(2,0,0)$ 在上述基底的坐标是______。
【分析】若 $x_1\alpha_1+x_2\alpha_2+x_3\alpha_3=u$，按分量写出有 $\begin{cases}x_1+x_2=2\\x_1+x_3=0\\x_2+x_3=0\end{cases}$，解得 $x_1=1,x_2=1,x_3=-1$，即坐标是 $(1,1,-1)$。` },
      { p: 90, md: R`【例3.42】已知 $\alpha_1=(1,2,1)^T,\alpha_2=(2,3,3)^T,\alpha_3=(3,7,1)^T$ 与 $\beta_1=(2,1,1)^T,\beta_2=(5,2,2)^T,\beta_3=(1,3,4)^T$ 是 $R^3$ 的两组基，那么在这两组基下有相同坐标的向量是______。
【分析】设 $\gamma=x_1\alpha_1+x_2\alpha_2+x_3\alpha_3=x_1\beta_1+x_2\beta_2+x_3\beta_3$，代入整理得 $\begin{cases}-x_1-3x_2+2x_3=0\\x_1+x_2+4x_3=0\\x_2-3x_3=0\end{cases}$，解出 $x_1=-7t,x_2=3t,x_3=t$。所以 $\gamma=-7t(1,2,1)^T+3t(2,3,3)^T+t(3,7,1)^T=(2t,2t,3t)^T$。` }
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
