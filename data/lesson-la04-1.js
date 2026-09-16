window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["la04_s0"] = {
    id: "la04_s0",
    ch: "第四章 线性方程组",
    title: "线性方程组",
    book: "《线性代数辅导讲义》",
    pages: [93, 119],
    img: "assets/img/xiandai",
    content: [
      { p: 93, md: R`### 一、知识结构网络图
**矩阵形式**：$Ax=b$，$Ax=0$；初等行变换 $\longrightarrow$ 阶梯形。有解判定 $r(A)=r(\overline A)$ $\to$ 解的结构 $\to$ 导出组 $\to$ 通解；有非 $0$ 解 $r(A)<n$ $\to$ 基础解系。
**向量形式**：$x_1\alpha_1+\cdots+x_n\alpha_n=\beta\Leftrightarrow$ 方程组有解 $\Leftrightarrow\beta$ 可由 $\alpha_1,\cdots,\alpha_n$ 表出；$x_1\alpha_1+\cdots+x_n\alpha_n=0\Leftrightarrow$ 有非 $0$ 解 $\Leftrightarrow\alpha_1,\cdots,\alpha_n$ 线性相关。
**解的性质**：若 $\alpha_1,\alpha_2$ 是 $Ax=b$ 的解，则 $\alpha_1-\alpha_2$ 是 $Ax=0$ 的解；若 $\eta_1,\eta_2$ 是 $Ax=0$ 的解，则 $k_1\eta_1+k_2\eta_2$ 是 $Ax=0$ 的解；若 $\alpha$ 是 $Ax=b$ 的解、$\eta$ 是 $Ax=0$ 的解，则 $\alpha+\eta$ 是 $Ax=b$ 的解。
**解的结构**：特解、通解、自由变量。
如果 (1) $\alpha_1,\cdots,\alpha_t$ 是 $Ax=0$ 的解；(2) $\alpha_1,\cdots,\alpha_t$ 线性无关；(3) $Ax=0$ 的任一个解可由 $\alpha_1,\cdots,\alpha_t$ 线性表出，则称 $\alpha_1,\cdots,\alpha_t$ 是 $Ax=0$ 的基础解系，此时 $n-r(A)=t$。` },
      { p: 94, md: R`【评注】线性方程组在代数中地位重要，是考研热点之一。这一部分解题思路比较清晰，但考生中有些忽视基本运算、对概念的理解有偏差，出错率较高。
(1) 理解线性方程组解的概念。
(2) 非齐次线性方程组 $Ax=b$ 可能有解（唯一解或无穷多解）亦可能无解，要理解方程组有解的充要条件是秩 $r(A)=r(\overline A)$。
(3) $n$ 元齐次方程组 $Ax=0$ 必有零解，问题是除去零解之外是否还有其它解（即非零解）？判断方法是检查 $r(A)<n$？特殊情况可检查行列式 $|A|=0$？要理解基础解系这一概念，其实它就是解向量的极大线性无关组，要掌握基础解系的求法与证明。
(4) 要熟悉线性方程组解的性质，掌握解的结构，熟练运用初等行变换求通解（特解、导出组基础解系）。

### 二、基本内容与重要结论
#### 基本概念
方程组
$$\begin{cases}a_{11}x_1+a_{12}x_2+\cdots+a_{1n}x_n=b_1\\a_{21}x_1+a_{22}x_2+\cdots+a_{2n}x_n=b_2\\\cdots\\a_{m1}x_1+a_{m2}x_2+\cdots+a_{mn}x_n=b_m\end{cases}\tag{4.1}$$
称为 $n$ 个未知数 $m$ 个方程的非齐次线性方程组。如果 $b_i=0\ (\forall i)$，则称方程组为齐次线性方程组，它是 (4.1) 的导出组（也称 (4.2) 为 (4.1) 对应的齐次线性方程组）。若将一组数 $c_1,\cdots,c_n$ 分别代替 $x_1,\cdots,x_n$ 使 $m$ 个等式都成立，则称有序数组 $(c_1,\cdots,c_n)$ 是方程组的一组解。解方程就是要找出方程组的全部解。` },
      { p: 95, md: R`线性方程组 (4.1) 的全体系数及常数项所构成的矩阵 $\overline A=\begin{pmatrix}a_{11}&a_{12}&\cdots&a_{1n}&b_1\\a_{21}&a_{22}&\cdots&a_{2n}&b_2\\\vdots&\vdots&&\vdots&\vdots\\a_{m1}&a_{m2}&\cdots&a_{mn}&b_m\end{pmatrix}$ 称为增广矩阵，而由全体系数组成的矩阵 $A$ 称为系数矩阵。方程组 (4.1) 可以用矩阵表示为 $Ax=b$，其中 $x=(x_1,\cdots,x_n)^T,b=(b_1,\cdots,b_m)^T$。如果两个方程组有相同的解集合，则称它们是同解方程组。
**定义 4.1** 下列三种变换称为线性方程组的初等变换：(1) 用一个非零常数乘方程的两边；(2) 把某方程的 $k$ 倍加到另一方程上；(3) 互换两个方程的位置。线性方程组经初等变换化为阶梯形方程组后，每个方程中的第一个未知量通常称为主变量，其余的未知量称为自由变量。
**定义 4.2** 向量组 $\eta_1,\eta_2,\cdots,\eta_t$ 称为齐次线性方程组 $Ax=0$ 的基础解系，如果 (1) $\eta_1,\cdots,\eta_t$ 是 $Ax=0$ 的解；(2) $\eta_1,\cdots,\eta_t$ 线性无关；(3) $Ax=0$ 的任一解都可由 $\eta_1,\cdots,\eta_t$ 线性表出。如果 $\eta_1,\cdots,\eta_t$ 是 $Ax=0$ 一组基础解系，那么对任意常数 $c_1,\cdots,c_t$，$c_1\eta_1+\cdots+c_t\eta_t$ 是齐次方程组 $Ax=0$ 的通解。

#### 主要定理
**定理 4.1** 线性方程组的初等变换把线性方程组变成与它同解的方程组。` },
      { p: 96, md: R`**定理 4.2** 设 $n$ 元线性方程组为 (4.1)，对它的增广矩阵施行高斯消元法，得到阶梯形矩阵
$$\overline A\longrightarrow\cdots\longrightarrow\begin{pmatrix}c_{11}&c_{12}&\cdots&c_{1r}&\cdots&c_{1n}&d_1\\&c_{21}&\cdots&c_{2r}&\cdots&c_{2n}&d_2\\&&\ddots&\vdots&&\vdots&\vdots\\&&&c_{rr}&\cdots&c_{rn}&d_r\\&&&&&0&d_{r+1}\\&&&&&&0\end{pmatrix}$$
如果 $d_{r+1}\neq0$，方程组 (4.1) 无解；如果 $d_{r+1}=0$，方程组有解，而且当 $r=n$ 时有唯一解，当 $r<n$ 时有无穷多解。
**定理 4.3** 齐次方程组 (4.2) 有非零解 $\Leftrightarrow r(A)<n\Leftrightarrow A$ 的列向量线性相关。
**推论 1** 当 $m<n$（方程个数 $<$ 未知数个数）时，齐次线性方程组 (4.2) 必有非零解。
**推论 2** 当 $m=n$ 时，齐次线性方程组 (4.2) 有非零解的充分必要条件是行列式 $|A|=0$。
**定理 4.4**（有解判定定理）非齐次线性方程组 $Ax=b$ 有解的充分必要条件是其系数矩阵和增广矩阵的秩相等，即 $r(A)=r(\overline A)$。
**定理 4.5**（齐次方程组解的性质）如果 $\eta_1,\eta_2$ 是齐次线性方程组 $Ax=0$ 的两个解，那么其线性组合仍是该齐次线性方程 $Ax=0$ 的解。
**定理 4.6**（线性方程组解的性质）(1) 如果 $\alpha,\beta$ 是线性方程组 $Ax=b$ 的两个解，则 $\alpha-\beta$ 是导出组 $Ax=0$ 的解；(2) 如果 $\alpha$ 是线性方程组 $Ax=b$ 的解，$\eta$ 是导出组 $Ax=0$ 的解，则 $\alpha+\eta$ 是 $Ax=b$ 的解。
**定理 4.7** 设齐次线性方程组 (4.2) 系数矩阵的秩 $r(A)=r<n$，则 $Ax=0$ 的基础解系由 $n-r$ 个解向量构成，即 $Ax=0$ 有 $n-r(A)$ 个线性无关的解向量。
**定理 4.8**（解的结构）对非齐次线性方程组 $Ax=b$，若 $r(A)=r(\overline A)=r$，且已知 $\eta_1,\cdots,\eta_{n-r}$ 是导出组 $Ax=0$ 的基础解系，$\xi_0$ 是 $Ax=b$ 的某个已知解，则 $Ax=b$ 的通解为 $\xi_0+c_1\eta_1+\cdots+c_{n-r}\eta_{n-r}$，其中 $c_1,\cdots,c_{n-r}$ 为任意常数。
**定理 4.9** 非齐次线性方程组 $Ax=b$ 无解 $\Leftrightarrow r(A)+1=r(\overline A)\Leftrightarrow b$ 不能由 $A$ 的列向量线性表出。` },
      { p: 97, md: R`### 三、典型例题分析选讲
#### 基础解系
【例4.1】设 $A=\begin{pmatrix}1&0&3&1&2\\2&1&7&4&3\\-1&2&-1&3&0\end{pmatrix}$，则 $Ax=0$ 的基础解系中所含解向量的个数是______。
【分析】由于 $Ax=0$ 的基础解系由 $n-r(A)$ 个解向量所构成，故应计算秩 $r(A)$。
$$A=\begin{pmatrix}1&0&3&1&2\\2&1&7&4&3\\-1&2&-1&3&0\end{pmatrix}\to\begin{pmatrix}1&0&3&1&2\\0&1&1&2&-1\\0&2&2&4&2\end{pmatrix}\to\begin{pmatrix}1&0&3&1&2\\0&1&1&2&-1\\0&0&0&0&4\end{pmatrix}$$
由于 $r(A)=3$，那么 $n-r(A)=5-3=2$，所以基础解系中所含解向量个数为 $2$。

【例4.2】齐次方程组 $\begin{cases}x_1+2x_2+3x_3+4x_4=0\\2x_1+3x_2+4x_3+5x_4=0\\3x_1+4x_2+5x_3+6x_4=0\\4x_1+5x_2+6x_3+7x_4=0\end{cases}$ 的基础解系是 (A) $(-3,0,1,0)^T,(2,-3,0,1)^T$ (B) $k_1(1,-2,1,0)^T+k_2(2,-3,0,1)^T$ (C) $(2,-3,0,1)^T,(1,-\frac32,0,\frac12)^T$ (D) $(-3,4,1,-2)^T,(3,-5,1,1)^T$
【分析】对系数矩阵作初等行变换，有 $\begin{pmatrix}1&2&3&4\\2&3&4&5\\3&4&5&6\\4&5&6&7\end{pmatrix}\to\begin{pmatrix}1&2&3&4\\0&-1&-2&-3\\0&-2&-4&-6\\0&-3&-6&-9\end{pmatrix}\to\begin{pmatrix}1&2&3&4\\0&1&2&3\\0&0&0&0\\0&0&0&0\end{pmatrix}$。因为 $r(A)=2,n-r(A)=4-2=2$，所以基础解系由 2 个线性无关的解所构成。(A) 中 $(-3,0,1,0)^T$ 不是方程组的解；(B) 是通解形式不是基础解系；(C) 中两个解线性相关；唯 (D) 符合定义 4.2。
【评注】判断基础解系要从是不是解、是否线性无关及解向量个数三方面来思考。` },
      { p: 98, md: R`【例4.3】齐次方程组 $\begin{cases}x_1+x_2+3x_4-x_5=0\\2x_2+x_3+2x_4+x_5=0\\x_4+3x_5=0\end{cases}$ 的基础解系是______。
【分析】系数矩阵 $A=\begin{pmatrix}1&1&0&3&-1\\0&2&1&2&1\\0&0&0&1&3\end{pmatrix}$ 已是阶梯形，由秩 $r(A)=3$，知 $n-r(A)=5-3=2$。令 $x_3=1,x_5=0$ 得 $x_4=0,x_2=-\frac12,x_1=\frac12$；令 $x_3=0,x_5=1$ 得 $x_4=-3,x_2=\frac52,x_1=\frac{15}2$。故基础解系是 $\eta_1=(\frac12,-\frac12,1,0,0)^T,\eta_2=(\frac{15}2,\frac52,0,-3,1)^T$。
【评注】如何确定自由变量并赋值？(1) 对系数矩阵作初等行变换化其为阶梯形；(2) 由秩 $r(A)$ 确定自由变量的个数 $n-r(A)$；(3) 找出一个秩为 $r(A)$ 的矩阵，则其余的 $n-r(A)$ 列对应的就是自由变量；(4) 每次给一个自由变量赋值为 $1$，其余的自由变量赋值为 $0$（共需赋值 $n-r(A)$ 次）。对阶梯形方程组由下往上依次求解，就可得到方程组的解。

【例4.4】已知齐次方程组 $\begin{cases}x_1+2x_2+x_3=0\\x_1+ax_2+2x_3=0\\ax_1+4x_2+3x_3=0\\2x_1+(a+2)x_2-5x_3=0\end{cases}$ 有非零解，则 $a=$______。
【分析】齐次方程组有非零解的充分必要条件是系数矩阵的秩小于 $n$。由于 $A=\begin{pmatrix}1&2&1\\1&a&2\\a&4&3\\2&a+2&-5\end{pmatrix}\to\begin{pmatrix}1&2&1\\0&a-2&1\\0&4-2a&3-a\\0&a-2&-7\end{pmatrix}\to\begin{pmatrix}1&2&1\\0&a-2&1\\0&0&5-a\\0&0&-8\end{pmatrix}$，可见秩 $r(A)<3\Leftrightarrow a=2$。
【评注】由于本题 $A$ 是 $4\times3$ 矩阵，故对 $Ax=0$ 作有非零解判定时应当用矩阵的秩，而不是用行列式。` },
      { p: 99, md: R`【例4.5】设 $A$ 是 $n$ 阶矩阵，秩 $r(A)=n-1$。(1) 若矩阵 $A$ 各行元素之和均为 $0$，则方程组 $Ax=0$ 的通解是______；(2) 若行列式 $|A|$ 的代数余子式 $A_{11}\neq0$，则方程组 $Ax=0$ 的通解是______。
【分析】由于 $n-r(A)=n-(n-1)=1$，故 $Ax=0$ 的通解形式为 $k\eta$，我们只需寻找出 $Ax=0$ 的一个非零解就可以了。
(1) 各行元素之和均为 $0$，即 $a_{i1}+a_{i2}+\cdots+a_{in}=0$，所以 $x_1=1,x_2=1,\cdots,x_n=1$ 是 $Ax=0$ 的一个解，因此通解为 $k(1,1,\cdots,1)^T$。
(2) 由秩 $r(A)=n-1$ 知 $|A|=0$，那么 $AA^*=|A|E=0$，故伴随矩阵 $A^*$ 的每一列都是 $Ax=0$ 的解。由 $A_{11}\neq0$，故 $(A_{11},A_{12},\cdots,A_{1n})^T$ 是 $Ax=0$ 的非零解，因此通解是 $k(A_{11},A_{12},\cdots,A_{1n})^T$。

【例4.6】（2004,1）设有齐次线性方程组 $\begin{cases}(1+a)x_1+x_2+\cdots+x_n=0\\2x_1+(2+a)x_2+\cdots+2x_n=0\\\cdots\\nx_1+nx_2+\cdots+(n+a)x_n=0\end{cases}(n\geqslant2)$，试问 $a$ 为何值时该方程组有非零解，并求其通解。
【解法一】对系数矩阵作初等行变换 $A=\begin{pmatrix}1+a&1&1&\cdots&1\\2&2+a&2&\cdots&2\\3&3&3+a&\cdots&3\\\cdots\\n&n&n&\cdots&n+a\end{pmatrix}\to\begin{pmatrix}1+a&1&1&\cdots&1\\-2a&a&0&\cdots&0\\-3a&0&a&\cdots&0\\\cdots\\-na&0&0&\cdots&a\end{pmatrix}=B$。
(1) 若 $a=0$，秩 $r(A)=1$，方程组有非零解，其同解方程组为 $x_1+x_2+\cdots+x_n=0$，` },
      { p: 100, md: R`由此得基础解系 $\eta_1=(-1,1,0,\cdots,0)^T,\eta_2=(-1,0,1,\cdots,0)^T,\cdots,\eta_{n-1}=(-1,0,0,\cdots,1)^T$，所以通解是 $k_1\eta_1+\cdots+k_{n-1}\eta_{n-1}$。
(2) 若 $a\neq0$，对 $B$ 继续作初等行变换得 $\begin{pmatrix}a+\frac12n(n+1)&0&0&\cdots&0\\-2&1&0&\cdots&0\\-3&0&1&\cdots&0\\\cdots\\-n&0&0&\cdots&1\end{pmatrix}$，故当 $a=-\frac12n(n+1)$ 时，秩 $r(A)=n-1<n$，方程组也有非零解，其同解方程组为 $\begin{cases}-2x_1+x_2=0\\-3x_1+x_3=0\\\cdots\\-nx_1+x_n=0\end{cases}$，得基础解系 $\eta=(1,2,\cdots,n)^T$，通解为 $k\eta$。
【解法二】由于系数行列式 $|A|=\begin{vmatrix}1+a&1&\cdots&1\\2&2+a&\cdots&2\\\vdots&\vdots&&\vdots\\n&n&\cdots&n+a\end{vmatrix}=\begin{vmatrix}a+\frac{(n+1)n}2&a+\frac{(n+1)n}2&\cdots&a+\frac{(n+1)n}2\\2&2+a&\cdots&2\\\vdots&\vdots&&\vdots\\n&n&\cdots&n+a\end{vmatrix}=\begin{vmatrix}a+\frac{(n+1)n}2&0&\cdots&0\\2&a&\cdots&0\\\vdots&\vdots&&\vdots\\n&0&\cdots&a\end{vmatrix}=\left(a+\frac12(n+1)n\right)a^{n-1}$，那么 $Ax=0$ 有非零解 $\Leftrightarrow|A|=0\Leftrightarrow a=0$ 或 $a=-\frac12(n+1)n$。` },
      { p: 101, md: R`(1) 若 $a=0$，对系数矩阵作初等行变换 $A\to\begin{pmatrix}1&1&1&\cdots&1\\0&0&0&\cdots&0\\\vdots&\vdots&\vdots&&\vdots\\0&0&0&\cdots&0\end{pmatrix}$，故同解方程组为 $x_1+x_2+\cdots+x_n=0$，由此得基础解系 $\eta_1=(-1,1,0,\cdots,0)^T,\eta_2=(-1,0,1,\cdots,0)^T,\cdots,\eta_{n-1}=(-1,0,0,\cdots,1)^T$，通解为 $k_1\eta_1+\cdots+k_{n-1}\eta_{n-1}$。
(2) 若 $a=-\frac12(n+1)n$，对系数矩阵作初等行变换得 $\begin{pmatrix}0&0&0&\cdots&0\\-2&1&0&\cdots&0\\-3&0&1&\cdots&0\\\vdots&\vdots&\vdots&&\vdots\\-n&0&0&\cdots&1\end{pmatrix}$，故同解方程组为 $\begin{cases}-2x_1+x_2=0\\-3x_1+x_3=0\\\cdots\\-nx_1+x_n=0\end{cases}$，基础解系为 $\eta=(1,2,\cdots,n)^T$，通解为 $k\eta$。

#### 解方程组
【例4.7】解方程组` },
      { p: 102, md: R`$$\begin{cases}2x_1-2x_2+x_3-x_4+x_5=1\\x_1+2x_2-x_3+x_4-2x_5=1\\4x_1-10x_2+5x_3-5x_4+7x_5=1\\2x_1-14x_2+7x_3-7x_4+11x_5=-1\end{cases}$$
【解】对增广矩阵作初等变换化为阶梯形，有
$$\overline A=\begin{pmatrix}2&-2&1&-1&1&1\\1&2&-1&1&-2&1\\4&-10&5&-5&7&1\\2&-14&7&-7&11&-1\end{pmatrix}\to\begin{pmatrix}1&2&-1&1&-2&1\\2&-2&1&-1&1&1\\4&-10&5&-5&7&1\\2&-14&7&-7&11&-1\end{pmatrix}\to\begin{pmatrix}1&2&-1&1&-2&1\\0&-6&3&-3&5&-1\\0&-18&9&-9&15&-3\\0&-18&9&-9&15&-3\end{pmatrix}\to\begin{pmatrix}1&2&-1&1&-2&1\\0&6&-3&3&-5&1\\0&0&0&0&0&0\\0&0&0&0&0&0\end{pmatrix}.$$
由于 $r(A)=r(\overline A)$ 方程组有解，其同解的线性方程组是 $\begin{cases}x_1+2x_2-x_3+x_4-2x_5=1\\6x_2-3x_3+3x_4-5x_5=1\end{cases}$。移项得 $\begin{cases}x_1+2x_2=1+x_3-x_4+2x_5\\6x_2=1+3x_3-3x_4+5x_5\end{cases}$。
(1) 先求特解 $\alpha$，取 $x_3=x_4=x_5=0$ 得 $\alpha=(\frac23,\frac16,0,0,0)^T$。
(2) 再求导出组的基础解系，得 $\begin{cases}x_1+2x_2=x_3-x_4+2x_5\\6x_2=3x_3-3x_4+5x_5\end{cases}$，此时 $n-r(A)=5-2=3$，$x_3,x_4,x_5$ 是自由变量。令 $x_3=1,x_4=0,x_5=0$ 得 $\eta_1=(0,\frac12,1,0,0)^T$；令 $x_3=0,x_4=1,x_5=0$ 得 $\eta_2=(0,-\frac12,0,1,0)^T$；令 $x_3=0,x_4=0,x_5=1$ 得 $\eta_3=(\frac13,\frac56,0,0,1)^T$。故通解是 $\alpha+k_1\eta_1+k_2\eta_2+k_3\eta_3$。` },
      { p: 103, md: R`【评注】非齐次线性方程组的求解方法：(1) 对增广矩阵作初等行变换化为阶梯形矩阵；(2) 求导出组的一个基础解系；(3) 求方程组的一个特解（可令自由变量全为 $0$）；(4) 按解的结构写出通解。注意当方程组中含有参数时，讨论要严谨不要丢情况。

【例4.8】当 $a$ 取何值时，线性方程组 $\begin{cases}-x_1-4x_2+x_3=1\\ax_2-3x_3=3\\x_1+3x_2+(a+1)x_3=0\end{cases}$ 无解、有唯一解、有无穷多解？并在有解时求其所有解。
【解】对增广矩阵作初等行变换，有 $\overline A=\begin{pmatrix}-1&-4&1&1\\0&a&-3&3\\1&3&a+1&0\end{pmatrix}\to\begin{pmatrix}-1&-4&1&1\\0&a&-3&3\\0&-1&a+2&1\end{pmatrix}\to\begin{pmatrix}-1&-4&1&1\\0&-1&a+2&1\\0&0&a^2+2a-3&a+3\end{pmatrix}$。
若 $a=1$，则 $r(A)=2,r(\overline A)=3$，方程组无解。若 $a=-3$，则 $r(A)=r(\overline A)=2<3$，方程组有无穷多解。若 $a\neq1$ 且 $a\neq-3$，则 $r(A)=r(\overline A)=3$，方程组有唯一解。
当 $a=-3$ 时，$\overline A\to\begin{pmatrix}1&4&-1&-1\\0&1&1&-1\\0&0&0&0\end{pmatrix}$，方程组通解是 $(3,-1,0)^T+k(5,-1,1)^T$。
当 $a\neq1$ 且 $a\neq-3$ 时，$\overline A\to\begin{pmatrix}1&4&-1&-1\\0&1&-(a+2)&-1\\0&0&a-1&1\end{pmatrix}$，得 $x_3=\frac1{a-1},x_2=\frac3{a-1},x_1=-\frac{a+10}{a-1}$，唯一解是 $\left(\frac{a+10}{1-a},\frac3{a-1},\frac1{a-1}\right)^T$。

【例4.9】已知线性方程组` },
      { p: 104, md: R`$$\begin{cases}x_1-x_2-2x_3+3x_4=0\\x_1-3x_2-5x_3+2x_4=-1\\x_1+x_2+ax_3+4x_4=1\\x_1+7x_2+10x_3+7x_4=b\end{cases}$$
讨论参数 $a,b$ 取何值时方程组有解、无解；当有解时，试用其导出组的基础解系表示通解。
【解】对增广矩阵作初等行变换，有 $\overline A=\begin{pmatrix}1&-1&-2&3&0\\1&-3&-5&2&-1\\1&1&a&4&1\\1&7&10&7&b\end{pmatrix}\to\begin{pmatrix}1&-1&-2&3&0\\0&-2&-3&-1&-1\\0&2&a+2&1&1\\0&8&12&4&b\end{pmatrix}\to\begin{pmatrix}1&-1&-2&3&0\\0&2&3&1&1\\0&0&a-1&0&0\\0&0&0&0&b-4\end{pmatrix}$。
当 $b\neq4$ 时 $r(A)\neq r(\overline A)$ 方程组无解。当 $b=4$ 时 $\forall a$ 恒有 $r(A)=r(\overline A)$，方程组有解。若 $a\neq1$，$r(A)=r(\overline A)=3$，通解为 $\left(\frac12,\frac12,0,0\right)^T+k\left(-\frac72,-\frac12,0,1\right)^T$；若 $a=1$，$r(A)=r(\overline A)=2$，通解为 $\left(\frac12,\frac12,0,0\right)^T+k_1\left(\frac12,-\frac32,1,0\right)^T+k_2\left(-\frac72,-\frac12,0,1\right)^T$。
【评注】这一类题目另一种表述为：设 $\alpha_1=(1,1,1,1)^T,\alpha_2=(-1,-3,1,7)^T,\alpha_3=(-2,-5,a,10)^T,\alpha_4=(2,3,4,7)^T,\beta=(0,-1,1,b)^T$，试讨论当 $a,b$ 为何值时 (1) $\beta$ 不能由 $\alpha_1,\alpha_2,\alpha_3,\alpha_4$ 线性表示；(2) $\beta$ 可由 $\alpha_1,\alpha_2,\alpha_3,\alpha_4$ 线性表示，并求出表示式。

【例4.10】（2006,$\frac12$,9分）已知非齐次线性方程组 $\begin{cases}x_1+x_2+x_3+x_4=-1\\4x_1+3x_2+5x_3-x_4=-1\\ax_1+x_2+3x_3+bx_4=1\end{cases}$ 有 3 个线性无关的解。(Ⅰ) 证明方程组系数矩阵 $A$ 的秩 $r(A)=2$；(Ⅱ) 求 $a,b$ 的值及方程组的通解。
【解】(Ⅰ) 设 $\alpha_1,\alpha_2,\alpha_3$ 是非齐次方程组 $Ax=b$ 的 3 个线性无关的解，那么 $\alpha_1$` },
      { p: 105, md: R`$-\alpha_2,\alpha_2-\alpha_3$ 是 $Ax=0$ 线性无关的解。所以 $n-r(A)\geqslant2$，即 $r(A)\leqslant2$。显然矩阵 $A$ 中有 2 阶子式非 $0$，又有 $r(A)\geqslant2$，从而秩 $r(A)=2$。
(Ⅱ) 对增广矩阵作初等行变换，有 $\overline A=\begin{pmatrix}1&1&1&1&-1\\4&3&5&-1&-1\\a&1&3&b&1\end{pmatrix}\to\begin{pmatrix}1&1&1&1&-1\\0&-1&1&-5&3\\0&1-a&3-a&b-a&a+1\end{pmatrix}\to\begin{pmatrix}1&1&1&1&-1\\0&1&-1&5&-3\\0&0&4-2a&b+4a-5&4-2a\end{pmatrix}$。由秩 $r(A)=r(\overline A)=2$ 知 $a=2,b=-3$。取 $x_3,x_4$ 为自由变量，得方程组通解为 $\begin{pmatrix}2\\-3\\0\\0\end{pmatrix}+k_1\begin{pmatrix}-2\\1\\1\\0\end{pmatrix}+k_2\begin{pmatrix}4\\-5\\0\\1\end{pmatrix}$，其中 $k_1,k_2$ 为任意实数。

【例4.11】（2000,2）已知 $\alpha=\begin{pmatrix}1\\2\\1\end{pmatrix},\beta=\begin{pmatrix}1\\\frac12\\0\end{pmatrix},\gamma=\begin{pmatrix}0\\0\\8\end{pmatrix},A=\alpha\beta^T,B=\beta^T\alpha$，求解方程 $2B^2A^2x=A^4x+B^4x+\gamma$。
【解】由于 $A=\alpha\beta^T=\begin{pmatrix}1\\2\\1\end{pmatrix}(1\ \ \frac12\ \ 0)=\begin{pmatrix}1&\frac12&0\\2&1&0\\1&\frac12&0\end{pmatrix}$，$B=\beta^T\alpha=(1\ \ \frac12\ \ 0)\begin{pmatrix}1\\2\\1\end{pmatrix}=2$。又 $A^2=(\alpha\beta^T)(\alpha\beta^T)=\alpha(\beta^T\alpha)\beta^T=2A$，于是 $A^4=8A$，代入原方程整理有 $8(A-2E)x=\gamma$，即 $\begin{pmatrix}-1&\frac12&0\\2&-1&0\\1&\frac12&-2\end{pmatrix}\begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix}=\begin{pmatrix}0\\0\\1\end{pmatrix}$。对增广矩阵作初等行变换，有` },
      { p: 106, md: R`$$\begin{pmatrix}-1&\frac12&0&0\\2&-1&0&0\\1&\frac12&-2&1\end{pmatrix}\to\begin{pmatrix}2&-1&0&0\\0&1&-2&1\\0&0&0&0\end{pmatrix}$$
特解 $\alpha=(\frac12,1,0)^T$，基础解系 $\eta=(1,2,1)^T$，故通解是 $\alpha+k\eta$。

【例4.12】（2002,$\frac12$）已知 4 阶方程 $A=(\alpha_1,\alpha_2,\alpha_3,\alpha_4)$，$\alpha_1,\alpha_2,\alpha_3,\alpha_4$ 均为 4 维列向量，其中 $\alpha_2,\alpha_3,\alpha_4$ 线性无关，$\alpha_1=2\alpha_2-\alpha_3$，如果 $\beta=\alpha_1+\alpha_2+\alpha_3+\alpha_4$，求线性方程组 $Ax=\beta$ 的通解。
【分析】本题没有给出系数矩阵而又需要求出通解，通常加减消元之路堵塞，应当抽象地用解的结构与性质来分析探讨。
【解】因为 $\alpha_2,\alpha_3,\alpha_4$ 线性无关，又 $\alpha_1=2\alpha_2-\alpha_3$，故 $\alpha_1,\alpha_2,\alpha_3,\alpha_4$ 线性相关，从而 $r(A)=r(\alpha_1,\alpha_2,\alpha_3,\alpha_4)=3$，那么 $n-r(A)=4-3=1$。由于 $\alpha_1-2\alpha_2+\alpha_3+0\alpha_4=0$，即 $(\alpha_1,\alpha_2,\alpha_3,\alpha_4)\begin{pmatrix}1\\-2\\1\\0\end{pmatrix}=0$，所以 $Ax=0$ 的基础解系是 $(1,-2,1,0)^T$。再由 $\beta=\alpha_1+\alpha_2+\alpha_3+\alpha_4=(\alpha_1,\alpha_2,\alpha_3,\alpha_4)\begin{pmatrix}1\\1\\1\\1\end{pmatrix}=A\begin{pmatrix}1\\1\\1\\1\end{pmatrix}$，知 $(1,1,1,1)^T$ 是 $Ax=\beta$ 的解。故通解为 $(1,1,1,1)^T+k(1,-2,1,0)^T$。
【解法二】（构造与 $Ax=\beta$ 同解的方程组）设 $x=(x_1,x_2,x_3,x_4)^T$ 是 $Ax=\beta$ 的任一解，则 $(\alpha_1,\alpha_2,\alpha_3,\alpha_4)\begin{pmatrix}x_1\\x_2\\x_3\\x_4\end{pmatrix}=\beta=\alpha_1+\alpha_2+\alpha_3+\alpha_4$，即 $x_1\alpha_1+x_2\alpha_2+x_3\alpha_3+x_4\alpha_4=\alpha_1+\alpha_2+\alpha_3+\alpha_4$。` },
      { p: 107, md: R`将 $\alpha_1=2\alpha_2-\alpha_3$ 代入上式，整理得 $(2x_1+x_2-3)\alpha_2+(-x_1+x_3)\alpha_3+(x_4-1)\alpha_4=0$。因为 $\alpha_2,\alpha_3,\alpha_4$ 线性无关，故必有 $\begin{cases}2x_1+x_2=3\\-x_1+x_3=0\\x_4=1\end{cases}$，解此方程组即得到通解 $(1,1,1,1)^T+k(1,-2,1,0)^T$。
【评注】要会分析求解这一类抽象的线性方程组，本题满分 6 分，数一人均 2.94 分，数二均 2.16 分。

#### 有解判定、解的结构、性质
【例4.13】（2000,1）已知方程组 $\begin{pmatrix}1&2&1\\2&3&a+2\\1&a&-2\end{pmatrix}\begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix}=\begin{pmatrix}1\\3\\0\end{pmatrix}$ 无解，则 $a=$______。
【分析】方程组无解的充分必要条件是 $r(A)\neq r(\overline A)$。对增广矩阵作初等行变换，有 $\begin{pmatrix}1&2&1&1\\2&3&a+2&3\\1&a&-2&0\end{pmatrix}\to\begin{pmatrix}1&2&1&1\\0&-1&a&1\\0&a-2&-3&-1\end{pmatrix}\to\begin{pmatrix}1&2&1&1\\0&-1&a&1\\0&0&a^2-2a-3&a-3\end{pmatrix}$。那么当 $a=-1$ 时 $\overline A\to\begin{pmatrix}1&2&1&1\\0&-1&-1&1\\0&0&0&-4\end{pmatrix}$，即 $r(A)=2,r(\overline A)=3$，方程组无解，故应填 $a=-1$。
【评注】本题正确率为 $55\%$，有较多考生计算行列式 $|A|=-(a+1)(a-3)$ 而认为 $a=-1$ 或 $a=3$ 时方程组无解，这是错误的。因为 $|A|\neq0$ 时方程组有唯一解，而 $|A|=0$ 时方程组既可能无解也可能有无穷多解。

【例4.14】线性方程组 $Ax=b$ 经初等行变换其增广矩阵化为 $\begin{pmatrix}1&0&3&2&-1\\&a-3&2&6&a-1\\&&a-2&a&-2\\&&&-3&a+1\end{pmatrix}$` },
      { p: 108, md: R`若方程组无解，则 $a=$ (A) $-1$ (B) $1$ (C) $2$ (D) $3$
【分析】非齐次线性方程组 $Ax=b$ 无解的充分必要条件是 $r(A)\neq r(\overline A)$。当 $a=-1$ 时 $r(A)=r(\overline A)=4$，方程组必有唯一解，(A) 不正确（注意此时第 4 个方程是 $-3x_4=0$，不要与 $0x_4=3$ 相混淆）。当 $a=1$ 时仍有 $r(A)=r(\overline A)=4$，(B) 不正确。当 $a=2$ 时 $\overline A\to\begin{pmatrix}1&0&3&2&-1\\&-1&2&6&1\\&&2&&-2\\&&&-3&3\end{pmatrix}\to\begin{pmatrix}1&0&3&2&-1\\&-1&2&6&1\\&&1&&-1\\&&&&0\end{pmatrix}$，$r(A)=r(\overline A)<4$，方程组有无穷多解，(C) 不正确。当 $a=3$ 时 $\overline A\to\begin{pmatrix}1&0&3&2&-1\\&2&6&&2\\&1&3&&-2\\&&-3&&4\end{pmatrix}$，可观察出二、三两个方程矛盾，方程组无解，故应选 (D)。

【例4.15】下列命题中，正确的命题是 (A) $n$ 元方程组 $Ax=b$ 有唯一解 $\Leftrightarrow|A|\neq0$ (B) 若 $Ax=0$ 只有零解，那么 $Ax=b$ 有唯一解 (C) 若 $Ax=0$ 有非零解，则 $Ax=b$ 有无穷多解 (D) 若 $Ax=b$ 有两个不同的解，那么 $Ax=0$ 有无穷多解
【分析】(A) $n$ 元方程组只表明有 $n$ 个未知数，方程个数不一定是 $n$，$A$ 不一定是 $n$ 阶矩阵，行列式不存在。(B) $Ax=0$ 只有零解 $\Leftrightarrow r(A)=n$；$Ax=b$ 有唯一解 $\Leftrightarrow r(A)=r(\overline A)=n$，而 $r(A)=n\nRightarrow r(\overline A)=n$，故 (B) 不正确。(C) $Ax=0$ 有非零解 $\Leftrightarrow r(A)<n$；$Ax=b$ 有无穷多解 $\Leftrightarrow r(A)=r(\overline A)<n$，也不正确。(D) 若 $Ax=b$ 有两个不同的解，则其差为 $Ax=0$ 的非零解，$Ax=0$ 有无穷多解，正确。故应选 (D)。` },
      { p: 109, md: R`(C) 当 $r(A)<n$ 时 $\Leftrightarrow r(A)=r(\overline A)<n$，故 (C) 不正确。例如 $\begin{cases}x_1+x_2=0\\2x_1+2x_2=0\end{cases}$ 与 $\begin{cases}x_1+x_2=1\\2x_1+2x_2=3\end{cases}$，虽 $Ax=0$ 有非零解，但 $Ax=b$ 可以无解。(D) 若 $\alpha_1,\alpha_2$ 是 $Ax=b$ 的两个不同的解，则 $\alpha_1-\alpha_2$ 是 $Ax=0$ 的非零解，从而 $Ax=0$ 有无穷多解，(D) 正确。故应选 (D)。

【例4.16】设 $A$ 是 $m\times n$ 矩阵，非齐次线性方程组 $Ax=b$ 有解的充分条件是 (A) 秩 $r(A)=m$ (B) $A$ 的行向量组线性相关 (C) 秩 $r(A)=n$ (D) $A$ 的列向量组线性相关
【分析】$Ax=b$ 有解的充分必要条件是 $r(A)=r(\overline A)$。由于 $\overline A=[A,b]$ 是 $m\times(n+1)$ 矩阵，$r(A)\leqslant r(\overline A)\leqslant m$。如果 $r(A)=m$，则必有 $r(A)=r(\overline A)=m$，所以方程组有解。但当 $r(A)=r(\overline A)<m$ 时方程组仍有解，故 (A) 是充分条件。而 (B)、(C)、(D) 均不能保证 $r(A)=r(\overline A)$。

【例4.17】线性方程组 $Ax=b$ 的系数矩阵是 $4\times5$ 矩阵，且 $A$ 的行向量组线性无关，则错误命题是 (A) 齐次方程组 $A^Tx=0$ 只有零解 (B) 齐次方程组 $A^TAx=0$ 必有非零解 (C) $\forall b$，方程组 $Ax=b$ 必有无穷多解 (D) $\forall b$，方程组 $A^Tx=b$ 必有唯一解
【分析】由 $A$ 的行向量组线性无关得 $r(A)=4$。(A) $A^T$ 是 $5\times4$ 矩阵，$r(A^T)=r(A)=4$，齐次方程组只有零解，正确。(B) $A^TA$ 是 5 阶矩阵，$r(A^TA)\leqslant r(A)=4<5$，故 $A^TAx=0$ 必有非零解，正确。(C) $A$ 是 $4\times5$ 矩阵，行向量组线性无关，其延伸组必线性无关，故 $r(A)=r(A,b)=4<5$，即 $Ax=b$ 必有无穷多解，正确。(D) $A^T$ 的列向量只是 4 个线性无关的 5 维向量，不能表示任一个 5 维向量，故 $A^Tx=b$ 有可能无解，(D) 不正确。故应选 (D)。

【例4.18】（2001,3）设 $A$ 是 $n$ 阶矩阵，$\alpha$ 是 $n$ 维列向量，若秩 $r\begin{pmatrix}A&\alpha\\\alpha^T&0\end{pmatrix}=r(A)$，则线性方程组 (A) $Ax=\alpha$ 必有无穷多解 (B) $Ax=\alpha$ 必有唯一解 (C) $\begin{pmatrix}A&\alpha\\\alpha^T&0\end{pmatrix}\begin{pmatrix}x\\y\end{pmatrix}=0$ 仅有零解` },
      { p: 110, md: R`(D) $\begin{pmatrix}A&\alpha\\\alpha^T&0\end{pmatrix}\begin{pmatrix}x\\y\end{pmatrix}=0$ 必有非零解
【分析】对于齐次方程组 $Ax=0$，(1) 只有零解与 (2) 必有非零解，两者必居其一且仅居其一，因此 (C) 与 (D) 中必有一个正确。$A$ 是 $n$ 阶矩阵，$\begin{pmatrix}A&\alpha\\\alpha^T&0\end{pmatrix}$ 是 $n+1$ 阶矩阵，由于 $r\begin{pmatrix}A&\alpha\\\alpha^T&0\end{pmatrix}=r(A)\leqslant n<n+1$，故应选 (D)。

【例4.19】设 $A$ 是秩为 2 的 $4\times5$ 矩阵，已知非齐次线性方程组 $Ax=b$ 有解，则解集中线性无关的解向量个数为 (A) 2 (B) 3 (C) 4 (D) 5
【分析】由秩 $r(A)=2$ 知 $Ax=0$ 的基础解系有 $n-r(A)=5-2=3$ 个解向量，设 $\alpha$ 是 $Ax=b$ 的某个解，$\eta_1,\eta_2,\eta_3$ 是 $Ax=0$ 的基础解系。那么 $\alpha,\alpha+\eta_1,\alpha+\eta_2,\alpha+\eta_3$ 是 $Ax=b$ 的 4 个线性无关的解，且 $Ax=b$ 的任一个解均可以由它们线性表出。这是因为：若 $k\alpha+k_1(\alpha+\eta_1)+k_2(\alpha+\eta_2)+k_3(\alpha+\eta_3)=0$ (1)，用 $A$ 左乘 (1) 式，并把 $A\alpha=b\neq0,A\eta_i=0$ 代入，可得 $(k+k_1+k_2+k_3)b=0$，于是 $k+k_1+k_2+k_3=0$ (2)。由 (1) 又有 $(k+k_1+k_2+k_3)\alpha+k_1\eta_1+k_2\eta_2+k_3\eta_3=0$，把 (2) 代入得 $k_1\eta_1+k_2\eta_2+k_3\eta_3=0$，因为 $\eta_1,\eta_2,\eta_3$ 线性无关，故 $k_1=k_2=k_3=0$。再代入 (2) 式，可知 $k=k_1=k_2=k_3=0$，即它们线性无关。若 $\gamma$ 是 $Ax=b$ 的任一解，则 $\gamma-\alpha$ 是 $Ax=0$ 的解，可由 $\eta_1,\eta_2,\eta_3$ 线性表出，设 $\gamma-\alpha=k_1\eta_1+k_2\eta_2+k_3\eta_3$，那么 $\gamma=(1-k_1-k_2-k_3)\alpha+k_1(\alpha+\eta_1)+k_2(\alpha+\eta_2)+k_3(\alpha+\eta_3)$，即 $\gamma$ 必可由它们线性表出。
【评注】当方程组 $Ax=b$ 有解时，解向量的极大线性无关组有 $n-r(A)+1$ 个向量。

【例4.20】4 元方程组 $Ax=b$ 中，系数矩阵的秩 $r(A)=3$，$X_1,X_2,X_3$ 是方程` },
      { p: 111, md: R`组的三个解，若 $X_1=(1,1,1,1)^T$，$X_2+X_3=(2,3,4,5)^T$，则方程组通解为______。
【分析】由于 $n-r(A)=4-3=1$，故通解形式为 $\alpha+k\eta$。因为 $X_1$ 是 $Ax=b$ 的解，故 $\alpha$ 可取为 $X_1$。由 $A(X_2+X_3)=2b,A(2X_1)=2b$ 知 $A(X_2+X_3-2X_1)=0$，即 $(0,1,2,3)^T$ 是 $Ax=0$ 的解，所以方程组的通解为 $(1,1,1,1)^T+k(0,1,2,3)^T$。

【例4.21】已知 $\xi_1=(-9,1,2,11)^T,\xi_2=(1,-5,13,0)^T,\xi_3=(-7,-9,24,11)^T$ 是方程组 $\begin{cases}a_1x_1+7x_2+a_3x_3+x_4=d_1\\3x_1+b_2x_2+2x_3+2x_4=d_2\\9x_1+4x_2+x_3+7x_4=2\end{cases}$ 的解，则方程组的通解是______。
【分析】只有知道秩 $r(A)$，算出 $n-r(A)$ 就知解的结构。因为系数矩阵 $A$ 中有 2 阶子式不为零，故 $r(A)\geqslant2$；又因 $\xi_1-\xi_2=(-10,6,-11,11)^T,\xi_1-\xi_3=(-2,10,-22,0)^T$ 是 $Ax=0$ 的线性无关的解，而有 $n-r(A)\geqslant2$，即 $r(A)\leqslant2$。从而 $r(A)=2$。所以方程组的通解为 $\begin{pmatrix}-9\\1\\2\\11\end{pmatrix}+k_1\begin{pmatrix}-10\\6\\-11\\11\end{pmatrix}+k_2\begin{pmatrix}1\\-5\\13\\0\end{pmatrix}$。
【评注】本题亦可利用解的概念先求出参数，然后再解方程组，但计算繁琐。

【例4.22】已知方程组 $\begin{cases}a_{11}x_1+a_{12}x_2+\cdots+a_{1n}x_n=b_1\\a_{21}x_1+a_{22}x_2+\cdots+a_{2n}x_n=b_2\\\cdots\\a_{m1}x_1+a_{m2}x_2+\cdots+a_{mn}x_n=b_m\end{cases}$ (Ⅰ)` },
      { p: 112, md: R`与 $\begin{cases}a_{11}x_1+a_{21}x_2+\cdots+a_{m1}x_m=0\\a_{12}x_1+a_{22}x_2+\cdots+a_{m2}x_m=0\\\cdots\\a_{1n}x_1+a_{2n}x_2+\cdots+a_{mn}x_m=0\\b_1x_1+b_2x_2+\cdots+b_mx_m=1\end{cases}$ (Ⅱ)，证明方程组 (Ⅰ) 有解的充分必要条件是方程组 (Ⅱ) 无解。
【证】方程组 (Ⅰ) 有解 $\Leftrightarrow r(A_1)=r(\overline A_1)$，方程组 (Ⅱ) 无解 $\Leftrightarrow r(A_2)\neq r(\overline A_2)$。必要性：若 $r(A_1)=r(\overline A_1)$，由于 $A_2=\overline A_1^T$，故 $r(A_2)=r(\overline A_1^T)=r(\overline A_1)=r(A_1)$；又 $r(\overline A_2)=r(A_2)+1=r(A_1)+1$，于是 $r(A_2)\neq r(\overline A_2)$，故方程组 (Ⅱ) 无解。充分性：若方程组 (Ⅱ) 无解，则 $r(\overline A_2)=r(A_2)+1$，由必要性知 $r(A_2)=r(\overline A_1)$，于是 $r(\overline A_1)+1=r(A_1)+1$，所以 $r(A_1)=r(\overline A_1)$，即方程组 (Ⅰ) 有解。` },
      { p: 113, md: R`### 公共解、同解
【例4.23】（2003,1）设有齐次线性方程组 $Ax=0$ 和 $Bx=0$，其中 $A,B$ 均为 $m\times n$ 矩阵，现有 4 个命题：(1) 若 $Ax=0$ 的解均是 $Bx=0$ 的解，则秩 $r(A)\geqslant r(B)$；(2) 若秩 $r(A)\geqslant r(B)$，则 $Ax=0$ 的解均是 $Bx=0$ 的解；(3) 若 $Ax=0$ 与 $Bx=0$ 同解，则秩 $r(A)=r(B)$；(4) 若秩 $r(A)=r(B)$，则 $Ax=0$ 与 $Bx=0$ 同解。以上命题中正确的是 (A)(1)(2) (B)(1)(3) (C)(2)(4) (D)(3)(4)
【分析】显然命题 (4) 错误，可排除 (C),(D)。(A) 与 (B) 均含命题 (1)，所以命题 (1) 必然正确，那么命题 (2) 和 (3) 哪一个正确？因为命题 (1) 正确，若 $Bx=0$ 的解均是 $Ax=0$ 的解，则必有 $r(B)\geqslant r(A)$ 正确。那么当 $Ax=0$ 与 $Bx=0$ 同解时，必有 $r(A)\geqslant r(B)\geqslant r(A)$，即 $r(A)=r(B)$，可见命题 (3) 正确，所以应选 (B)。
【评注】命题 (1) 可直接证明：设 $\alpha_1,\cdots,\alpha_t$ 是 $Ax=0$ 的基础解系，$\beta_1,\cdots,\beta_s$ 是 $Bx=0$ 的基础解系。因为 $Ax=0$ 的解均是 $Bx=0$ 的解，所以 $\alpha_1,\cdots,\alpha_t$ 必可由 $\beta_1,\cdots,\beta_s$ 线性表出，又 $\alpha_1,\cdots,\alpha_t$ 线性无关，故 $t\leqslant s$，即 $t=n-r(A)\leqslant n-r(B)=s$，从而 $r(A)\geqslant r(B)$。

【例4.24】设有两个 4 元齐次线性方程组 (Ⅰ) $\begin{cases}x_1+x_2=0\\x_2-x_4=0\end{cases}$，(Ⅱ) $\begin{cases}x_1-x_2+x_3=0\\x_2-x_3+x_4=0\end{cases}$。(1) 求 (Ⅰ) 的基础解系；(2) 试问 (Ⅰ) 和 (Ⅱ) 是否有非零公共解？若有，则求出所有的非零公共解。
【解】因为 $r(A)=2$，$n-r(A)=2$，给自由变量 $x_3,x_4$ 赋值得基础解系 $\xi_1=(0,0,1,0)^T,\xi_2=(-1,1,0,1)^T$。` },
      { p: 114, md: R`关于公共解：1°. 把 (Ⅰ)(Ⅱ) 联立起来直接求解，即 $A=\begin{pmatrix}1&1&0&0\\0&1&0&-1\\1&-1&1&0\\0&1&-1&1\end{pmatrix}\to\begin{pmatrix}1&1&0&0\\0&1&0&-1\\0&-2&1&0\\0&0&-1&2\end{pmatrix}\to\begin{pmatrix}1&1&0&0\\0&1&0&-1\\0&0&1&-2\\0&0&0&0\end{pmatrix}$。由于 $n-r(A)=1$，基础解系是 $(-1,1,2,1)^T$，从而公共解：$k(-1,1,2,1)^T$。
2°. 通过 (Ⅰ) 与 (Ⅱ) 各自的通解寻找公共解。先求 (Ⅱ) 的基础解系 $\eta_1=(0,1,1,0)^T,\eta_2=(-1,-1,0,1)^T$，令 $k_1\xi_1+k_2\xi_2=l_1\eta_1+l_2\eta_2$，即 $(-k_2,k_2,k_1,k_2)^T=(-l_2,l_1-l_2,l_1,l_2)^T$，比较分量得 $k_1=l_1=2k_2=2l_2$，所以公共解是 $k_2(-1,1,2,1)^T$。
3°. 把 (Ⅰ) 的通解代入 (Ⅱ) 中求公共解：$k_1\xi_1+k_2\xi_2=(-k_2,k_2,k_1,k_2)^T$ 满足 (Ⅱ) 的方程，故 $\begin{cases}-k_2-k_2+k_1=0\\k_2-k_1+k_2=0\end{cases}$，解出 $k_1=2k_2$。

【例4.25】（2007,1,2,3,4）设线性方程组 $\begin{cases}x_1+2x_2+x_3=0\\x_1+x_2+ax_3=0\\x_1+4x_2+a^2x_3=0\end{cases}$ (1) 与方程 $x_1+2x_2+x_3=a-1$ (2) 有公共解，求 $a$ 的值及所有公共解。
【解】把两个方程联立，对增广矩阵加减消元有 $\overline A=\left(\begin{array}{ccc|c}1&1&1&0\\1&2&a&0\\1&4&a^2&0\\1&2&1&a-1\end{array}\right)\to\left(\begin{array}{ccc|c}1&1&1&0\\0&1&a-1&0\\0&3&a^2-1&0\\0&1&0&a-1\end{array}\right)\to\left(\begin{array}{ccc|c}1&1&1&0\\0&1&a-1&0\\0&0&(a-1)(a-2)&0\\0&0&1-a&a-1\end{array}\right)$。当 $a\neq1$ 且 $a\neq2$ 时方程组无解，从而没有公共解。当 $a=1$ 时 $\overline A\to\left(\begin{array}{ccc|c}1&1&1&0\\0&1&0&0\\0&0&0&0\\0&0&0&0\end{array}\right)$，通解是 $k(1,0,-1)^T$。` },
      { p: 115, md: R`即 (1) 与 (2) 的公共解是 $k(1,0,-1)^T$。当 $a=2$ 时 $\overline A\to\left(\begin{array}{ccc|c}1&1&1&0\\0&1&1&0\\0&0&-1&1\\0&0&0&0\end{array}\right)$，方程组有唯一解 $(0,1,-1)^T$，即公共解是 $(0,1,-1)^T$。

【例4.26】设 $A$ 与 $B$ 均是 $n$ 阶矩阵，且秩 $r(A)+r(B)<n$，证明方程组 $Ax=0$ 与 $Bx=0$ 有非零公共解。
【证】构造齐次线性方程组 $\begin{cases}Ax=0\\Bx=0\end{cases}$ (1)。设 $\alpha_{i1},\cdots,\alpha_{ir}$ 与 $\beta_{j1},\cdots,\beta_{jt}$ 分别是 $A$ 与 $B$ 行向量组的极大线性无关组，那么矩阵 $\begin{pmatrix}A\\B\end{pmatrix}$ 的行向量组可由 $\alpha_{i1},\cdots,\alpha_{ir},\beta_{j1},\cdots,\beta_{jt}$ 线性表出。从而 $r\begin{pmatrix}A\\B\end{pmatrix}\leqslant r(\alpha_{i1},\cdots,\alpha_{ir},\beta_{j1},\cdots,\beta_{jt})\leqslant r+t=r(A)+r(B)<n$，所以方程组 (1) 有非零解，即 $Ax=0$ 与 $Bx=0$ 有非零公共解。

【例4.27】（2005,3,4）已知齐次方程组 (Ⅰ) $\begin{cases}x_1+2x_2+3x_3=0\\2x_1+3x_2+5x_3=0\\x_1+x_2+ax_3=0\end{cases}$ 和 (Ⅱ) $\begin{cases}x_1+bx_2+cx_3=0\\2x_1+b^2x_2+(c+1)x_3=0\end{cases}$ 同解，求 $a,b,c$ 的值。
【解】因为方程组 (Ⅱ) 中方程的个数小于未知量的个数，故 (Ⅱ) 必有无穷多解，那么由 (Ⅰ) 与 (Ⅱ) 同解知 (Ⅰ) 必有无穷多解。于是 $|A|=\begin{vmatrix}1&2&3\\2&3&5\\1&1&a\end{vmatrix}=2-a=0$，从而 $a=2$。此时 $A=\begin{pmatrix}1&2&3\\2&3&5\\1&1&2\end{pmatrix}\to\begin{pmatrix}1&0&1\\0&1&1\\0&0&0\end{pmatrix}$，故 $k(-1,-1,1)^T$ 是 (Ⅰ) 的通解。把 $x_1=-k,x_2=-k,x_3=k$ 代入 (Ⅱ)，有 $\begin{cases}(-1-b+c)k=0\\(-2-b^2+c+1)k=0\end{cases}$，那么 $b^2-b=0$，可得 $b=1,c=2$ 或 $b=0,c=1$。` },
      { p: 116, md: R`当 $b=1,c=2$，对方程组 (Ⅱ) 的系数矩阵 $B$ 作初等行变换，有 $B=\begin{pmatrix}1&1&2\\2&1&3\end{pmatrix}\to\begin{pmatrix}1&0&1\\0&1&1\end{pmatrix}$，故 (Ⅰ) 与 (Ⅱ) 同解。当 $b=0,c=1$ 时 $B=\begin{pmatrix}1&0&1\\2&0&2\end{pmatrix}\to\begin{pmatrix}1&0&1\\0&0&0\end{pmatrix}$，故 (Ⅰ) 与 (Ⅱ) 不同解。综上所述，当 $a=2,b=1,c=2$ 时，(Ⅰ) 与 (Ⅱ) 同解。

【例4.28】设 $A$ 是 $m\times n$ 阶矩阵，证明齐次线性方程组 (Ⅰ) $A^TAx=0$ 与 (Ⅱ) $Ax=0$ 同解。
【证】如果 $\alpha$ 是 (Ⅱ) 的解，则 $A\alpha=0$，显然 $A^TA\alpha=0$，即 $\alpha$ 是 (Ⅰ) 的解，故 (Ⅱ) 的解全是 (Ⅰ) 的解。若 $\alpha$ 是 (Ⅰ) 的解，即 $A^TA\alpha=0$，那么 $\alpha^TA^TA\alpha=0$ 即 $(A\alpha)^T(A\alpha)=0$，即 $\|A\alpha\|^2=0$，故 $A\alpha=0$，所以 $\alpha$ 必是 (Ⅱ) 的解。即 (Ⅰ) 的解全是 (Ⅱ) 的解，从而 (Ⅰ) 与 (Ⅱ) 同解。
【评注】若 $\alpha=(a_1,\cdots,a_n)^T$，则 $\alpha^T\alpha=a_1^2+\cdots+a_n^2$，那么 $\alpha^T\alpha=0\Leftrightarrow a_i=0\Leftrightarrow\alpha=0$。因为 (Ⅰ) 与 (Ⅱ) 同解，它们的基础解系所含向量个数相同，即有 $n-r(A^TA)=n-r(A)$，故 $r(A^TA)=r(A)$。` }
    ],
    quiz: [
      { q: R`非齐次线性方程组 $Ax=b$ 有解的充要条件是`, options: [R`$r(A)=r(\overline A)$`, R`$r(A)=n$`, R`$|A|\neq0$`, R`$b=0$`], answer: 0, explain: R`有解判定定理。` },
      { q: R`$n$ 元齐次方程组 $Ax=0$ 有非零解的充要条件是`, options: [R`$r(A)<n$`, R`$r(A)=n$`, R`$m=n$`, R`$b\neq0$`], answer: 0, explain: R`有非零解 $\Leftrightarrow r(A)<n$。` },
      { q: R`$n$ 元齐次方程组 $Ax=0$ 的基础解系含 $n-r(A)$ 个解向量，其中 $r(A)=r$，则通解为`, options: [R`$c_1\eta_1+\cdots+c_{n-r}\eta_{n-r}$`, R`$\eta_0+c_1\eta_1$`, R`$c\eta_0$`, R`$0$`], answer: 0, explain: R`齐次方程组通解为基础解系的线性组合。` },
      { q: R`设 $\alpha,\beta$ 是 $Ax=b$ 的两个解，则 $\alpha-\beta$ 是`, options: [R`$Ax=0$ 的解`, R`$Ax=b$ 的解`, R`$0$`, R`$b$`], answer: 0, explain: R`两解之差为导出组的解。` },
      { q: R`设 $\alpha$ 是 $Ax=b$ 的解，$\eta$ 是 $Ax=0$ 的解，则 $\alpha+\eta$ 是`, options: [R`$Ax=b$ 的解`, R`$Ax=0$ 的解`, R`$0$`, R`$b$`], answer: 0, explain: R`非齐次解加齐次解仍为非齐次解。` },
      { q: R`非齐次线性方程组 $Ax=b$ 的通解为`, options: [R`特解 + 导出组通解`, R`导出组通解`, R`特解`, R`$0$`], answer: 0, explain: R`解的结构定理。` },
      { q: R`当 $m<n$（方程个数少于未知数个数）时，齐次方程组 $Ax=0$`, options: [R`必有非零解`, R`只有零解`, R`无解`, R`有唯一解`], answer: 0, explain: R`$r(A)\leqslant m<n$，故有非零解。` },
      { q: R`当 $m=n$ 时，齐次方程组 $Ax=0$ 有非零解的充要条件是`, options: [R`$|A|=0$`, R`$|A|\neq0$`, R`$r(A)=n$`, R`$b=0$`], answer: 0, explain: R`$m=n$ 时可用行列式判定。` },
      { q: R`设 $A$ 是 $n$ 阶矩阵，$r(A)=n-1$，且 $A$ 各行元素之和均为 $0$，则 $Ax=0$ 的通解是`, options: [R`$k(1,1,\cdots,1)^T$`, R`$k(A_{11},\cdots,A_{1n})^T$`, R`$0$`, R`$k(1,0,\cdots,0)^T$`], answer: 0, explain: R`各行和为 $0$ 使 $(1,\cdots,1)^T$ 为解，$n-r(A)=1$。` },
      { q: R`非齐次线性方程组 $Ax=b$ 无解的充要条件是`, options: [R`$r(A)+1=r(\overline A)$`, R`$r(A)=r(\overline A)$`, R`$r(A)<n$`, R`$|A|=0$`], answer: 0, explain: R`无解 $\Leftrightarrow r(A)\neq r(\overline A)$，即 $r(A)+1=r(\overline A)$。` }
    ]
  };
})();
