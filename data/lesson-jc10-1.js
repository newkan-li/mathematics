window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["jc10_s0"] = {
    id: "jc10_s0",
    ch: "第四章 线性方程组",
    title: "第四章 线性方程组",
    book: "李永乐《数学复习全书·基础篇》",
    pages: [260, 271],
    img: "assets/img/jichu",
    content: [
      { p: 260, md: R`# 第四章 线性方程组

## 本章考点

线性方程组有解和无解的判定 非齐次线性方程组的解与相应的齐次线性方程组（导出组）的解之间的关系 线性方程组解的性质和解的结构 齐次线性方程组的基础解系和通解 非齐次线性方程组的通解

## 一、基本概念

我们称
\[
\begin{cases}
a_{11}x_1+a_{12}x_2+\cdots+a_{1n}x_n=b_1,\\
a_{21}x_1+a_{22}x_2+\cdots+a_{2n}x_n=b_2,\\
\cdots\\
a_{m1}x_1+a_{m2}x_2+\cdots+a_{mn}x_n=b_m
\end{cases}
\qquad (\mathrm{I})
\]
是 \(n\) 个未知数 \(m\) 个方程的非齐次线性方程组，其中 \(x_1,x_2,\cdots,x_n\) 代表 \(n\) 个未知数，而 \(b_1,b_2,\cdots,b_m\) 是不全为 \(0\) 的常数.

利用矩阵乘法，方程组（I）可表示为：
\[
\begin{bmatrix}
a_{11}&a_{12}&\cdots&a_{1n}\\
a_{21}&a_{22}&\cdots&a_{2n}\\
\vdots&\vdots&&\vdots\\
a_{m1}&a_{m2}&\cdots&a_{mn}
\end{bmatrix}
\begin{bmatrix}
x_1\\
x_2\\
\vdots\\
x_n
\end{bmatrix}
=
\begin{bmatrix}
b_1\\
b_2\\
\vdots\\
b_m
\end{bmatrix}
\]
于是方程组（I）的矩阵形式：
\[
\boldsymbol{A}\boldsymbol{x}=\boldsymbol{b}
\]
称 \(\boldsymbol{A}\) 为方程组（I）的系数矩阵.

对矩阵 \(\boldsymbol{A}\) 按列分块，记 \(\boldsymbol{A}=(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_n)\)，则方程组（I）有向量形式
\[
x_1\boldsymbol{\alpha}_1+x_2\boldsymbol{\alpha}_2+\cdots+x_n\boldsymbol{\alpha}_n=\boldsymbol{\beta}
\]
其中 \(\boldsymbol{\alpha}_j=(a_{1j},a_{2j},\cdots,a_{mj})^{\mathrm{T}},j=1,2,\cdots,n,\boldsymbol{\beta}=(b_1,b_2,\cdots,b_m)^{\mathrm{T}}\).

如果 \(\forall j=1,2,\cdots,m\) 恒有 \(b_j=0\)，则称
\[
\begin{cases}
a_{11}x_1+a_{12}x_2+\cdots+a_{1n}x_n=0\\
a_{21}x_1+a_{22}x_2+\cdots+a_{2n}x_n=0\\
\cdots\\
a_{m1}x_1+a_{m2}x_2+\cdots+a_{mn}x_n=0
\end{cases}
\qquad (\mathrm{II})
\]
为齐次线性方程组（也称（II）是（I）的导出组），其矩阵形式为：
\[
\boldsymbol{A}\boldsymbol{x}=\boldsymbol{0}
\]
而齐次方程组（II）的向量形式，则是` },
      { p: 261, md: R`\[
x_1\boldsymbol{\alpha}_1+x_2\boldsymbol{\alpha}_2+\cdots+x_n\boldsymbol{\alpha}_n=\boldsymbol{0}
\]

若将一组数 \(c_1,c_2,\cdots,c_n\) 分别代替方程组（I）（或（II））中的 \(x_1,x_2,\cdots,x_n\) 使（I）（或（II））中 \(m\) 个等式都成立，则称 \((c_1,c_2,\cdots,c_n)^{\mathrm{T}}\) 是方程组（I）（或（II））的一个解.

解方程组就是要求出方程组的所有的解.

求方程组的解就是要对所列方程组作同解变形，而同解变形的方法：

（1）两个方程互换位置；

（2）用非零常数乘方程的两端；

（3）把某个方程的 \(k\) 倍加到另一个方程上.

同解变形所对应的矩阵语言就是矩阵的初等行变换.

## 二、齐次线性方程组

对于齐次线性方程组
\[
\begin{cases}
a_{11}x_1+a_{12}x_2+\cdots+a_{1n}x_n=0\\
a_{21}x_1+a_{22}x_2+\cdots+a_{2n}x_n=0\\
\cdots\\
a_{m1}x_1+a_{m2}x_2+\cdots+a_{mn}x_n=0
\end{cases}
\qquad (\mathrm{II})
\]
易见 \(x_1=0,x_2=0,\cdots,x_n=0\) 必满足每一个方程.故 \((0,0,\cdots,0)^{\mathrm{T}}\) 一定是齐次线性方程组的一个解，称其为零解.除去零解之外，如果齐次方程组还有其他的解，那些解就称为非零解.

**基础解系** 如果 \(\boldsymbol{\eta}_1,\boldsymbol{\eta}_2,\cdots,\boldsymbol{\eta}_t\) 是齐次方程组 \(\boldsymbol{A}\boldsymbol{x}=\boldsymbol{0}\) 的解，而且满足

（1）\(\boldsymbol{\eta}_1,\boldsymbol{\eta}_2,\cdots,\boldsymbol{\eta}_t\) 线性无关，

（2）\(\boldsymbol{A}\boldsymbol{x}=\boldsymbol{0}\) 的任一个解 \(\boldsymbol{\eta}\) 都可由 \(\boldsymbol{\eta}_1,\boldsymbol{\eta}_2,\cdots,\boldsymbol{\eta}_t\) 线性表出，

则称 \(\boldsymbol{\eta}_1,\boldsymbol{\eta}_2,\cdots,\boldsymbol{\eta}_t\) 是 \(\boldsymbol{A}\boldsymbol{x}=\boldsymbol{0}\) 的一个基础解系.

**解的性质** 如果 \(\boldsymbol{\eta}_1,\boldsymbol{\eta}_2,\cdots,\boldsymbol{\eta}_t\) 是齐次方程组 \(\boldsymbol{A}\boldsymbol{x}=\boldsymbol{0}\) 的解，则对任意常数 \(k_1,k_2,\cdots,k_t\)，
\[
k_1\boldsymbol{\eta}_1+k_2\boldsymbol{\eta}_2+\cdots+k_t\boldsymbol{\eta}_t
\]
仍是该齐次方程组的解.

**定理 4.1** 齐次方程组 \(\boldsymbol{A}_{m\times n}\boldsymbol{x}=\boldsymbol{0}\) 有非零解 \(\Leftrightarrow r(\boldsymbol{A})<n\).

**推论** 1. 当 \(m<n\) 时，\(\boldsymbol{A}\boldsymbol{x}=\boldsymbol{0}\) 必有非零解.

2. 当 \(m=n\) 时，\(\boldsymbol{A}\boldsymbol{x}=\boldsymbol{0}\) 有非零解 \(\Leftrightarrow |\boldsymbol{A}|=0\).

**定理 4.2** 如齐次线性方程组（II）系数矩阵的秩 \(r(\boldsymbol{A})=r<n\)，则（II）有 \(n-r\) 个线性无关的解，且（II）的任一个解都可由这 \(n-r\) 个线性无关的解线性表出（即（II）的基础解系由 \(n-r\) 个解向量构成）.

**定理 4.3** 若 \(\boldsymbol{\eta}_1,\boldsymbol{\eta}_2,\cdots,\boldsymbol{\eta}_t\) 是齐次方程组（II）的基础解系，则（II）的通解是 \(k_1\boldsymbol{\eta}_1+k_2\boldsymbol{\eta}_2+\cdots+k_t\boldsymbol{\eta}_t\)，\(k_1,k_2,\cdots,k_t\) 是任意常数.

**例1** 求齐次方程组
\[
\begin{cases}
5x_1+7x_2+2x_3=0\\
3x_1+5x_2+6x_3-4x_4=0\\
4x_1+5x_2-2x_3+3x_4=0
\end{cases}
\]
的基础解系和通解.

**【解】** 对系数矩阵作初等行变换，有
\[
\boldsymbol{A}=
\begin{bmatrix}
5&7&2&0\\
3&5&6&-4\\
4&5&-2&3
\end{bmatrix}
\to
\begin{bmatrix}
1&2&4&-3\\
3&5&6&-4\\
4&5&-2&3
\end{bmatrix}
\to
\begin{bmatrix}
1&2&4&-3\\
0&-1&-6&5\\
0&-3&-18&15
\end{bmatrix}
\]` },
      { p: 262, md: R`\[
\to
\begin{bmatrix}
1&2&4&-3\\
0&1&6&-5\\
0&0&0&0
\end{bmatrix}
\to
\begin{bmatrix}
1&0&-8&7\\
0&1&6&-5\\
0&0&0&0
\end{bmatrix}
\]
得同解方程组：
\[
\begin{cases}
x_1-8x_3+7x_4=0\\
x_2+6x_3-5x_4=0
\end{cases}
\quad\text{即}\quad
\begin{cases}
x_1=8x_3-7x_4\\
x_2=-6x_3+5x_4
\end{cases}
\]
令 \(x_3=1,x_4=0\Rightarrow x_2=-6,x_1=8\)，

\(x_3=0,x_4=1\Rightarrow x_2=5,x_1=-7\)，

故基础解系为 \(\boldsymbol{\eta}_1=(8,-6,1,0)^{\mathrm{T}},\boldsymbol{\eta}_2=(-7,5,0,1)^{\mathrm{T}}\).

通解是：\(k_1\boldsymbol{\eta}_1+k_2\boldsymbol{\eta}_2,k_1,k_2\) 是任意常数.

或者，令 \(x_3=t,x_4=u\)，得通解：
\[
\begin{cases}
x_1=8t-7u\\
x_2=-6t+5u\\
x_3=t\\
x_4=u
\end{cases}
\]
亦即
\[
\boldsymbol{x}=t
\begin{bmatrix}
8\\-6\\1\\0
\end{bmatrix}
+u
\begin{bmatrix}
-7\\5\\0\\1
\end{bmatrix},
\]
基础解系为：
\[
\begin{bmatrix}
8\\-6\\1\\0
\end{bmatrix},
\begin{bmatrix}
-7\\5\\0\\1
\end{bmatrix}.
\]

**例2** 求齐次方程组
\[
\begin{cases}
2x_1-x_2-7x_3+5x_4=0\\
x_1-2x_2-5x_3-2x_4=0\\
x_1+x_2-2x_3-2x_4=0
\end{cases}
\]
的通解.

**【解】** 对系数矩阵作初等行变换，有
\[
\boldsymbol{A}=
\begin{bmatrix}
2&-1&-7&5\\
1&-2&-5&-2\\
1&1&-2&-2
\end{bmatrix}
\to
\begin{bmatrix}
1&1&-2&-2\\
1&-2&-5&-2\\
2&-1&-7&5
\end{bmatrix}
\to
\begin{bmatrix}
1&1&-2&-2\\
0&-3&-3&0\\
0&-3&-3&9
\end{bmatrix}
\]

\[
\to
\begin{bmatrix}
1&1&-2&-2\\
0&1&1&0\\
0&0&0&1
\end{bmatrix}
\to
\begin{bmatrix}
1&0&-3&0\\
0&1&1&0\\
0&0&0&1
\end{bmatrix}
\]
得同解方程组
\[
\begin{cases}
x_1-3x_3=0\\
x_2+x_3=0\\
x_4=0
\end{cases}
\quad\text{即}\quad
\begin{cases}
x_1=3x_3\\
x_2=-x_3\\
x_4=0
\end{cases}
\]
令 \(x_3=1\Rightarrow x_4=0,x_2=-1,x_1=3\).

故基础解系为 \(\boldsymbol{\eta}=(3,-1,1,0)^{\mathrm{T}}\).

通解为：\(k\boldsymbol{\eta},k\) 为任意常数.

或者，令 \(x_3=t\)，解出` },
      { p: 263, md: R`\[
\begin{cases}
x_1=3t\\
x_2=-t\\
x_3=t\\
x_4=0
\end{cases}
\]
亦即 \(\boldsymbol{x}=t(3,-1,1,0)^{\mathrm{T}}\).

**【注】** 如何加减消元？怎样求解？要重视这里的基本计算.

对自由变量既可以用 \((1,0,0),(0,1,0),(0,0,1)\) 来赋值，也可用 \(t,u,v\).

**例3** 要使 \(\boldsymbol{\alpha}_1=(1,0,2)^{\mathrm{T}},\boldsymbol{\alpha}_2=(0,1,-1)^{\mathrm{T}}\) 都是齐次线性方程组 \(\boldsymbol{A}\boldsymbol{x}=\boldsymbol{0}\) 的解，则 \(\boldsymbol{A}\) 可以为
\[
\begin{array}{ll}
\text{(A)}
\begin{bmatrix}
-2&1&1\\
4&-2&-2
\end{bmatrix},&
\text{(B)}
\begin{bmatrix}
2&0&1\\
0&1&1
\end{bmatrix},\\[10pt]
\text{(C)}
\begin{bmatrix}
-2&0&1\\
4&0&-2
\end{bmatrix},&
\text{(D)}
\begin{bmatrix}
-1&0&2\\
0&1&-1
\end{bmatrix}.
\end{array}
\]

**【分析】** 因为 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2\) 线性无关，所以 \(\boldsymbol{A}\boldsymbol{x}=\boldsymbol{0}\) 有 \(2\) 个线性无关的解，于是 \(n-r(\boldsymbol{A})\geqslant 2\).即知 \(r(\boldsymbol{A})\leqslant 1\)，可排除（B）（D）.

下面应排查 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2\) 是不是 \(\boldsymbol{A}\boldsymbol{x}=\boldsymbol{0}\) 的解.由在（C）中
\[
\boldsymbol{A}\boldsymbol{\alpha}_2=
\begin{bmatrix}
-2&0&1\\
4&0&-2
\end{bmatrix}
\begin{bmatrix}
0\\1\\-1
\end{bmatrix}
=
\begin{bmatrix}
-1\\2
\end{bmatrix}
\neq\boldsymbol{0}.
\]
即 \(\boldsymbol{\alpha}_2\) 不是（C）的解.故应选（A）.

**例4** 已知 \(\boldsymbol{A}\) 是 \(5\times 4\) 矩阵，\(\boldsymbol{\eta}_1,\boldsymbol{\eta}_2\) 是 \(\boldsymbol{A}\boldsymbol{x}=\boldsymbol{0}\) 的基础解系，则 \(\boldsymbol{A}^{\mathrm{T}}\boldsymbol{y}=\boldsymbol{0}\) 的基础解系

（A）不存在.　　　　　　　　（B）有一个非零解.

（C）有 \(2\) 个线性无关的解.　　（D）有 \(3\) 个线性无关的解.

**【分析】** 齐次方程组 \(\boldsymbol{A}\boldsymbol{x}=\boldsymbol{0}\) 的基础解系由 \(n-r(\boldsymbol{A})\) 个线性无关的解所构成.因 \(\boldsymbol{A}\) 是 \(5\times 4\) 矩阵，于是
\[
4-r(\boldsymbol{A})=2,
\]
那么 \(r(\boldsymbol{A})=2\)，于是 \(r(\boldsymbol{A}^{\mathrm{T}})=r(\boldsymbol{A})=2\).

又 \(\boldsymbol{A}^{\mathrm{T}}\) 是 \(4\times 5\) 矩阵，从而 \(\boldsymbol{A}^{\mathrm{T}}\boldsymbol{y}=\boldsymbol{0}\) 的基础解系由
\[
5-r(\boldsymbol{A}^{\mathrm{T}})=5-2=3
\]
个线性无关的解所构成，故应选（D）.

## 练习4.1

（1）齐次方程组 \(x_1-2x_2+3x_3-4x_4=0\) 的基础解系是__________.

（2）齐次方程组
\[
\begin{cases}
\lambda x_1+x_2+x_3=0\\
x_1+\lambda x_2+x_3=0\\
x_1+x_2+x_3=0
\end{cases}
\]
只有零解，则 \(\lambda\) 应满足的条件是__________.` },
      { p: 264, md: R`（3）设 \(\boldsymbol{A}\) 是 \(4\times 5\) 矩阵，\(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3\) 是齐次方程组 \(\boldsymbol{A}^{\mathrm{T}}\boldsymbol{x}=\boldsymbol{0}\) 的基础解系，则秩 \(r(\boldsymbol{A})=\)

（A）4.　　　　（B）3.　　　　（C）2.　　　　（D）1.

（4）求齐次方程组
\[
\begin{cases}
x_1+x_2-3x_4-x_5=0\\
x_1-x_2+4x_3-x_4=0\\
4x_1-2x_2+12x_3-2x_4-3x_5=0
\end{cases}
\]
的通解.

（练习答案在 297 页）

## 三、非齐次线性方程组

**解的性质** 1. 设 \(\boldsymbol{\xi}_1,\boldsymbol{\xi}_2\) 是方程组 \(\boldsymbol{A}\boldsymbol{x}=\boldsymbol{b}\) 的两个解，则 \(\boldsymbol{\xi}_1-\boldsymbol{\xi}_2\) 是导出组 \(\boldsymbol{A}\boldsymbol{x}=\boldsymbol{0}\) 的解.

2. 设 \(\boldsymbol{\xi}\) 是方程组 \(\boldsymbol{A}\boldsymbol{x}=\boldsymbol{b}\) 的解，\(\boldsymbol{\eta}\) 是导出组 \(\boldsymbol{A}\boldsymbol{x}=\boldsymbol{0}\) 的解，\(k\) 是任意常数，则 \(\boldsymbol{\xi}+k\boldsymbol{\eta}\) 是方程组 \(\boldsymbol{A}\boldsymbol{x}=\boldsymbol{b}\) 的解.

**定理 4.4** \(\boldsymbol{A}\boldsymbol{x}=\boldsymbol{b}\) 有解 \(\Leftrightarrow r(\boldsymbol{A})=r(\overline{\boldsymbol{A}})\)
\[
\Leftrightarrow \boldsymbol{b}\text{ 可由 }\boldsymbol{A}\text{ 的列向量线性表出.}
\]
\[
\boldsymbol{A}\boldsymbol{x}=\boldsymbol{b}\text{ 无解}\Leftrightarrow r(\boldsymbol{A})+1=r(\overline{\boldsymbol{A}}).
\]

**【注】** \(\overline{\boldsymbol{A}}=[\boldsymbol{A},\boldsymbol{b}]\) 称为方程组 \(\boldsymbol{A}\boldsymbol{x}=\boldsymbol{b}\) 的增广矩阵.

**定理 4.5**（解的结构）设 \(\boldsymbol{\alpha}\) 是 \(\boldsymbol{A}\boldsymbol{x}=\boldsymbol{b}\) 的解，\(\boldsymbol{\eta}_1,\boldsymbol{\eta}_2,\cdots,\boldsymbol{\eta}_t\) 是导出组 \(\boldsymbol{A}\boldsymbol{x}=\boldsymbol{0}\) 的基础解系，则方程组 \(\boldsymbol{A}\boldsymbol{x}=\boldsymbol{b}\) 的通解为
\[
\boldsymbol{\alpha}+k_1\boldsymbol{\eta}_1+k_2\boldsymbol{\eta}_2+\cdots+k_t\boldsymbol{\eta}_t,
\]
其中 \(k_1,k_2,\cdots,k_t\) 是任意常数.

**例5** 解方程组
\[
\begin{cases}
x_1+x_2+x_3+x_4+x_5=2\\
2x_1+3x_2+x_3+x_4-3x_5=0\\
x_1+2x_3+3x_4+3x_5=4\\
4x_1+5x_2+3x_3+2x_4+2x_5=6
\end{cases}
\]
**【解】** 对增广矩阵作初等行变换，有
\[
\overline{\boldsymbol{A}}=
\left[\begin{array}{ccccc|c}
1&1&1&1&1&2\\
2&3&1&1&-3&0\\
1&0&2&3&3&4\\
4&5&3&2&2&6
\end{array}\right]
\to
\left[\begin{array}{ccccc|c}
1&1&1&1&1&2\\
0&1&-1&-1&-5&-4\\
0&0&0&1&-3&-2\\
0&0&0&0&0&0
\end{array}\right]
\]
\[
\to
\left[\begin{array}{ccccc|c}
1&1&1&0&4&4\\
0&1&-1&0&-8&-6\\
0&0&0&1&-3&-2\\
0&0&0&0&0&0
\end{array}\right]
\to
\left[\begin{array}{ccccc|c}
1&0&2&0&12&10\\
0&1&-1&0&-8&-6\\
0&0&0&1&-3&-2\\
0&0&0&0&0&0
\end{array}\right]
\]
得同解方程组` },
      { p: 265, md: R`\[
\begin{cases}
x_1+2x_3+12x_5=10\\
x_2-x_3-8x_5=-6\\
x_4-3x_5=-2
\end{cases}
\qquad (*)
\]
令 \(x_3=0,x_5=0\) 得方程组 \(\boldsymbol{A}\boldsymbol{x}=\boldsymbol{b}\) 的一个特解
\[
\boldsymbol{\alpha}=(10,-6,0,-2,0)^{\mathrm{T}}.
\]
对应的齐次方程组
\[
\begin{cases}
x_1+2x_3+12x_5=0\\
x_2-x_3-8x_5=0\\
x_4-3x_5=0
\end{cases}
\]
得 \(\boldsymbol{A}\boldsymbol{x}=\boldsymbol{0}\) 的同解方程组
\[
\begin{cases}
x_1=-2x_3-12x_5\\
x_2=x_3+8x_5\\
x_4=3x_5
\end{cases}
\]
分别令 \(x_3=1,x_5=0\) 和 \(x_3=0,x_5=1\) 得 \(\boldsymbol{A}\boldsymbol{x}=\boldsymbol{0}\) 的基础解系
\[
\boldsymbol{\eta}_1=(-2,1,1,0,0)^{\mathrm{T}},\boldsymbol{\eta}_2=(-12,8,0,3,1)^{\mathrm{T}}.
\]
所以方程组的通解：
\[
(10,-6,0,-2,0)^{\mathrm{T}}+k_1(-2,1,1,0,0)^{\mathrm{T}}+k_2(-12,8,0,3,1)^{\mathrm{T}},k_1,k_2\text{ 为任意常数.}
\]
或对同解方程组（*）

令 \(x_3=t,x_5=u\)，解出
\[
\begin{cases}
x_1=10-2t-12u\\
x_2=-6+t+8u\\
x_3=t\\
x_4=-2+3u\\
x_5=u
\end{cases}
\]
亦得通解 \(\boldsymbol{x}=(10,-6,0,-2,0)^{\mathrm{T}}+t(-2,1,1,0,0)^{\mathrm{T}}+u(-12,8,0,3,1)^{\mathrm{T}},t,u\) 为任意常数.

**例6** 解方程组
\[
\begin{cases}
3x_1+4x_2+x_3+2x_4=3\\
6x_1+8x_2+3x_3+7x_4=7\\
9x_1+12x_2+x_3=7
\end{cases}
\]
**【解】** 对增广矩阵作初等行变换，有
\[
\overline{\boldsymbol{A}}=
\left[\begin{array}{cccc|c}
3&4&1&2&3\\
6&8&3&7&7\\
9&12&1&0&7
\end{array}\right]
\to
\left[\begin{array}{cccc|c}
3&4&1&2&3\\
0&0&1&3&1\\
0&0&0&0&0
\end{array}\right]
\to
\left[\begin{array}{cccc|c}
1&\frac{4}{3}&0&-\frac{1}{3}&\frac{2}{3}\\
0&0&1&3&1\\
0&0&0&0&0
\end{array}\right]
\]
得同解方程组
\[
\begin{cases}
x_1=-\frac{4}{3}x_2+\frac{1}{3}x_4+\frac{2}{3}\\
x_3=-3x_4+1
\end{cases}
\qquad (*)
\]
令 \(x_2=0,x_4=0\)，则 \(x_1=\frac{2}{3},x_3=1\) 得方程组 \(\boldsymbol{A}\boldsymbol{x}=\boldsymbol{b}\) 的特解 \(\boldsymbol{\alpha}=\left(\frac{2}{3},0,1,0\right)^{\mathrm{T}}\).` },
      { p: 266, md: R`此时对应的齐次方程组为
\[
\begin{cases}
x_1=-\frac{4}{3}x_2+\frac{1}{3}x_4\\
x_3=-3x_4
\end{cases}
\]
令 \(x_2=1,x_4=0\Rightarrow x_1=-\frac{4}{3},x_3=0\)；

\(x_2=0,x_4=1\Rightarrow x_1=\frac{1}{3},x_3=-3\).

于是导出组的基础解系是
\[
\boldsymbol{\eta}_1=\left(-\frac{4}{3},1,0,0\right)^{\mathrm{T}},\boldsymbol{\eta}_2=\left(\frac{1}{3},0,-3,1\right)^{\mathrm{T}}.
\]
从而方程组的通解为
\[
\boldsymbol{x}=\boldsymbol{\alpha}+k_1\boldsymbol{\eta}_1+k_2\boldsymbol{\eta}_2,k_1,k_2\text{ 是任意实数}
\]
或对同解方程组（*）

令 \(x_2=t,x_4=u\)，得
\[
\begin{cases}
x_1=\frac{2}{3}-\frac{4}{3}t+\frac{1}{3}u\\
x_2=t\\
x_3=1-3u\\
x_4=u
\end{cases}
\]
从而有通解
\[
\boldsymbol{x}=\left(\frac{2}{3},0,1,0\right)^{\mathrm{T}}+t\left(-\frac{4}{3},1,0,0\right)^{\mathrm{T}}+u\left(\frac{1}{3},0,-3,1\right)^{\mathrm{T}}.
\]

**例7**（1993，数三）已知线性方程组
\[
\begin{cases}
x_1+x_2+ax_3=4\\
-x_1+ax_2+x_3=a^2\\
x_1-x_2+2x_3=-4
\end{cases}
\]
有无穷多解，求 \(a\) 的值并求这些解.

**【解】** 对增广矩阵作初等行变换，有
\[
\overline{\boldsymbol{A}}=
\left[\begin{array}{ccc|c}
1&1&a&4\\
-1&a&1&a^2\\
1&-1&2&-4
\end{array}\right]
\to
\left[\begin{array}{ccc|c}
1&-1&2&-4\\
1&1&a&4\\
-1&a&1&a^2
\end{array}\right]
\]
\[
\to
\left[\begin{array}{ccc|c}
1&-1&2&-4\\
0&2&a-2&8\\
0&a-1&3&a^2-4
\end{array}\right]
\to
\left[\begin{array}{ccc|c}
1&-1&2&-4\\
0&2&a-2&8\\
0&0&\frac{(a+1)(4-a)}{2}&a(a-4)
\end{array}\right],
\]
由于方程组有无穷多解 \(\Leftrightarrow r(\boldsymbol{A})=r(\overline{\boldsymbol{A}})\leqslant 2\).

故 \(a=4\).

\[
\overline{\boldsymbol{A}}\to
\left[\begin{array}{ccc|c}
1&-1&2&-4\\
0&2&2&8\\
0&0&0&0
\end{array}\right]
\to
\left[\begin{array}{ccc|c}
1&0&3&0\\
0&1&1&4\\
0&0&0&0
\end{array}\right]
\]
令 \(x_3=0\)，得方程组的特解 \(\boldsymbol{\alpha}=(0,4,0)^{\mathrm{T}}\)，

令 \(x_3=1\)，得导出组的基础解系 \(\boldsymbol{\eta}=(-3,-1,1)^{\mathrm{T}}\)，

所以方程组的通解为 \(\boldsymbol{x}=\boldsymbol{\alpha}+k\boldsymbol{\eta},k\) 为任意常数.` },
      { p: 267, md: R`**例8**（1995，数一）设线性方程组
\[
\begin{cases}
x_1+3x_2+2x_3+x_4=1\\
x_2+ax_3-ax_4=-1\\
x_1+2x_2+3x_4=3
\end{cases}
\]
问 \(a\) 为何值时方程组有解？并在有解时求出方程组的通解.

**【解】** 对增广矩阵作初等行变换，有
\[
\overline{\boldsymbol{A}}=
\left[\begin{array}{cccc|c}
1&3&2&1&1\\
0&1&a&-a&-1\\
1&2&0&3&3
\end{array}\right]
\to
\left[\begin{array}{cccc|c}
1&3&2&1&1\\
0&1&a&-a&-1\\
0&-1&-2&2&2
\end{array}\right]
\]
\[
\to
\left[\begin{array}{cccc|c}
1&3&2&1&1\\
0&1&2&-2&-2\\
0&0&a-2&2-a&1
\end{array}\right]
\]
当 \(a=2\) 时，\(r(\boldsymbol{A})=2,r(\overline{\boldsymbol{A}})=3\) 方程组无解.

当 \(a\neq 2\) 时，\(r(\boldsymbol{A})=r(\overline{\boldsymbol{A}})=3<n\)，方程组有无穷多解.
\[
\overline{\boldsymbol{A}}\to
\left[\begin{array}{cccc|c}
1&3&2&1&1\\
0&1&2&-2&-2\\
0&0&1&-1&\frac{1}{a-2}
\end{array}\right]
\to
\left[\begin{array}{cccc|c}
1&3&0&3&\frac{a-4}{a-2}\\
0&1&0&0&\frac{2-2a}{a-2}\\
0&0&1&-1&\frac{1}{a-2}
\end{array}\right]
\]
\[
\to
\left[\begin{array}{cccc|c}
1&0&0&3&\frac{7a-10}{a-2}\\
0&1&0&0&\frac{2-2a}{a-2}\\
0&0&1&-1&\frac{1}{a-2}
\end{array}\right],
\]
所以方程组的通解为
\[
\boldsymbol{x}=\left(\frac{7a-10}{a-2},\frac{2-2a}{a-2},\frac{1}{a-2},0\right)^{\mathrm{T}}+k(-3,0,1,1)^{\mathrm{T}},k\text{ 为任意常数.}
\]

**例9** 设 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3\) 是 \(4\) 元非齐次线性方程组 \(\boldsymbol{A}\boldsymbol{x}=\boldsymbol{b}\) 的三个解向量，且秩 \(r(\boldsymbol{A})=3\).\(\boldsymbol{\alpha}_1=(1,2,3,4)^{\mathrm{T}},\boldsymbol{\alpha}_2+\boldsymbol{\alpha}_3=(0,1,2,3)^{\mathrm{T}}\)，则方程组 \(\boldsymbol{A}\boldsymbol{x}=\boldsymbol{b}\) 的通解是__________.

**【分析】** 由 \(n-r(\boldsymbol{A})=4-3=1\)，所以方程组的通解形式为 \(\boldsymbol{\alpha}+k\boldsymbol{\eta}\)，现在特解已知可取 \(\boldsymbol{\alpha}_1\)，下面就是应找出导出组 \(\boldsymbol{A}\boldsymbol{x}=\boldsymbol{0}\) 的一个非零解.

因为 \(\boldsymbol{A}\boldsymbol{\alpha}_i=\boldsymbol{b},(i=1,2,3)\) 有 \(\boldsymbol{A}[2\boldsymbol{\alpha}_1-(\boldsymbol{\alpha}_2+\boldsymbol{\alpha}_3)]=\boldsymbol{0}\).即
\[
2\boldsymbol{\alpha}_1-(\boldsymbol{\alpha}_2+\boldsymbol{\alpha}_3)=(2,3,4,5)^{\mathrm{T}}
\]
是 \(\boldsymbol{A}\boldsymbol{x}=\boldsymbol{0}\) 的一个非零解.于是方程组的通解为 \((1,2,3,4)^{\mathrm{T}}+k(2,3,4,5)^{\mathrm{T}},k\) 是任意常数.

**例10**（2002，数一、二）已知 \(4\) 阶方阵 \(\boldsymbol{A}=(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3,\boldsymbol{\alpha}_4),\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3,\boldsymbol{\alpha}_4\) 均为 \(4\) 维列向量，其中 \(\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3,\boldsymbol{\alpha}_4\) 线性无关，\(\boldsymbol{\alpha}_1=2\boldsymbol{\alpha}_2-\boldsymbol{\alpha}_3\)，如果 \(\boldsymbol{\beta}=\boldsymbol{\alpha}_1+\boldsymbol{\alpha}_2+\boldsymbol{\alpha}_3+\boldsymbol{\alpha}_4\)，求线性方程组 \(\boldsymbol{A}\boldsymbol{x}=\boldsymbol{\beta}\) 的通解.

**【解】** 由 \(\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3,\boldsymbol{\alpha}_4\) 线性无关
\[
\Rightarrow r(\boldsymbol{A})=r(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3,\boldsymbol{\alpha}_4)\geqslant 3
\qquad (1)
\]` },
      { p: 268, md: R`又 \(\boldsymbol{\alpha}_1=2\boldsymbol{\alpha}_2-\boldsymbol{\alpha}_3\Rightarrow \boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3\) 线性相关

\(\Rightarrow \boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3,\boldsymbol{\alpha}_4\) 线性相关

\(\Rightarrow r(\boldsymbol{A})<4\qquad (2)\)

\(\therefore r(\boldsymbol{A})=3\)

\(n-r(\boldsymbol{A})=4-3=1\)

由
\[
(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3,\boldsymbol{\alpha}_4)
\begin{bmatrix}
1\\1\\1\\1
\end{bmatrix}
=\boldsymbol{\alpha}_1+\boldsymbol{\alpha}_2+\boldsymbol{\alpha}_3+\boldsymbol{\alpha}_4=\boldsymbol{\beta}
\]
知 \((1,1,1,1)^{\mathrm{T}}\) 是 \(\boldsymbol{A}\boldsymbol{x}=\boldsymbol{\beta}\) 的一个特解.

又 \(\boldsymbol{\alpha}_1=2\boldsymbol{\alpha}_2-\boldsymbol{\alpha}_3\Rightarrow \boldsymbol{\alpha}_1-2\boldsymbol{\alpha}_2+\boldsymbol{\alpha}_3+0\boldsymbol{\alpha}_4=\boldsymbol{0}\)
\[
\boldsymbol{A}
\begin{bmatrix}
1\\-2\\1\\0
\end{bmatrix}
=(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3,\boldsymbol{\alpha}_4)
\begin{bmatrix}
1\\-2\\1\\0
\end{bmatrix}
=\boldsymbol{0}
\]
知 \((1,-2,1,0)^{\mathrm{T}}\) 是 \(\boldsymbol{A}\boldsymbol{x}=\boldsymbol{0}\) 的非零解.

\(\therefore \boldsymbol{A}\boldsymbol{x}=\boldsymbol{\beta}\) 的通解为 \(\boldsymbol{x}=(1,1,1,1)^{\mathrm{T}}+k(1,-2,1,0)^{\mathrm{T}},k\) 为任意常数.

**【注】** 没有方程组一般由秩开始，搞清解的结构再分析推理，把特解、基础解系讲清楚.

## 练习4.2

1. 已知方程组
\[
\begin{bmatrix}
a&1&1\\
1&a&1\\
1&1&a
\end{bmatrix}
\begin{bmatrix}
x_1\\x_2\\x_3
\end{bmatrix}
=
\begin{bmatrix}
1\\1\\-2
\end{bmatrix}
\]
有无穷多解，则 \(a=\)__________.

2. 解方程组
\[
\begin{cases}
x_1+x_2+x_3=0\\
x_1+x_2-x_3-x_4=1\\
5x_1+5x_2-3x_3-4x_4=4
\end{cases}
\]

3. 已知方程组
\[
\begin{cases}
x_1+x_2+2x_3=a\\
3x_1-x_2-6x_3=a+2\\
x_1+4x_2+11x_3=a+3
\end{cases}
\]
问 \(a\) 为何值时方程组有解？并在有解时求其通解.

（练习答案在 297 页）` },
      { p: 269, md: R`## 四、公共解、同解

请在复习好方程组求解这些基础知识后，再参看《复习全书（提高篇）》或《线性代数辅导讲义》的相关内容.

## 五、方程组的应用

**例11** 求和矩阵 \(\boldsymbol{A}=\begin{bmatrix}0&1\\0&0\end{bmatrix}\) 可交换的矩阵.

**【解】** 设 \(\boldsymbol{X}=\begin{bmatrix}x_1&x_2\\x_3&x_4\end{bmatrix}\) 与矩阵 \(\boldsymbol{A}\) 可交换，即
\[
\begin{bmatrix}
0&1\\0&0
\end{bmatrix}
\begin{bmatrix}
x_1&x_2\\x_3&x_4
\end{bmatrix}
=
\begin{bmatrix}
x_1&x_2\\x_3&x_4
\end{bmatrix}
\begin{bmatrix}
0&1\\0&0
\end{bmatrix}
\]
即
\[
\begin{bmatrix}
x_3&x_4\\0&0
\end{bmatrix}
=
\begin{bmatrix}
0&x_1\\0&x_3
\end{bmatrix},
\]
得齐次方程组
\[
\begin{cases}
x_1-x_4=0\\
x_3=0
\end{cases}
\qquad (*)
\]
令 \(x_2=1,x_4=0\Rightarrow x_3=0,x_1=0\)

\(x_2=0,x_4=1\Rightarrow x_3=0,x_1=1\)

方程组（*）的通解
\[
\boldsymbol{x}=k_1(0,1,0,0)^{\mathrm{T}}+k_2(1,0,0,1)^{\mathrm{T}},k_1,k_2\text{ 是任意常数.}
\]
故 \(\begin{bmatrix}k_2&k_1\\0&k_2\end{bmatrix}\) 与矩阵 \(\boldsymbol{A}\) 可交换，\(k_1,k_2\) 是任意常数.

**例12** 若
\[
\begin{bmatrix}
1&2&3\\
2&3&4
\end{bmatrix}
\boldsymbol{X}
=
\begin{bmatrix}
4&5\\
5&6
\end{bmatrix},
\]
则 \(\boldsymbol{X}=\)__________.

**【分析】** 设 \(\boldsymbol{X}=\begin{bmatrix}x_1&y_1\\x_2&y_2\\x_3&y_3\end{bmatrix}\)，则有
\[
\begin{cases}
x_1+2x_2+3x_3=4\\
2x_1+3x_2+4x_3=5
\end{cases}
\qquad
\begin{cases}
y_1+2y_2+3y_3=5\\
2y_1+3y_2+4y_3=6
\end{cases}
\]
两个方程组系数矩阵一样，故可
\[
\left[\begin{array}{ccc|cc}
1&2&3&4&5\\
2&3&4&5&6
\end{array}\right]
\to
\left[\begin{array}{ccc|cc}
1&2&3&4&5\\
0&-1&-2&-3&-4
\end{array}\right]
\to
\left[\begin{array}{ccc|cc}
1&0&-1&-2&-3\\
0&1&2&3&4
\end{array}\right]
\]
解出
\[
\begin{bmatrix}
x_1\\x_2\\x_3
\end{bmatrix}
=
\begin{bmatrix}
-2\\3\\0
\end{bmatrix}
+k_1
\begin{bmatrix}
1\\-2\\1
\end{bmatrix},
\qquad
\begin{bmatrix}
y_1\\y_2\\y_3
\end{bmatrix}
=
\begin{bmatrix}
-3\\4\\0
\end{bmatrix}
+k_2
\begin{bmatrix}
1\\-2\\1
\end{bmatrix},
\]
故
\[
\boldsymbol{X}=
\begin{bmatrix}
-2+k_1&-3+k_2\\
3-2k_1&4-2k_2\\
k_1&k_2
\end{bmatrix},
k_1,k_2\text{ 是任意常数.}
\]

**例13** 已知向量组 \(\boldsymbol{\alpha}_1=(1,3,1,1)^{\mathrm{T}},\boldsymbol{\alpha}_2=(-1,1,3,1)^{\mathrm{T}},\boldsymbol{\alpha}_3=(5,7,a,1)^{\mathrm{T}}\) 线性相关，则 \(a=\)__________.` },
      { p: 270, md: R`**【分析】** \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3\) 线性相关 \(\Leftrightarrow [\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3]\begin{bmatrix}x_1\\x_2\\x_3\end{bmatrix}=\boldsymbol{0}\) 有非零解.
\[
[\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3]=
\begin{bmatrix}
1&-1&5\\
3&1&7\\
1&3&a\\
1&1&1
\end{bmatrix}
\to
\begin{bmatrix}
1&-1&5\\
0&4&-8\\
0&4&a-5\\
0&2&-4
\end{bmatrix}
\to
\begin{bmatrix}
1&-1&5\\
0&1&-2\\
0&0&a+3\\
0&0&0
\end{bmatrix}
\]
得 \(a=-3\).

**例14** 已知 \(\boldsymbol{\alpha}_1=(2,3,3)^{\mathrm{T}},\boldsymbol{\alpha}_2=(1,0,3)^{\mathrm{T}},\boldsymbol{\alpha}_3=(3,5,a+2)^{\mathrm{T}}\)，若 \(\boldsymbol{\beta}_1=(4,-3,15)^{\mathrm{T}}\) 可由 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3\) 线性表示，但 \(\boldsymbol{\beta}_2=(2,5,a)^{\mathrm{T}}\) 不能由 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3\) 线性表出，写出 \(\boldsymbol{\beta}_1\) 由 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3\) 线性表示的表达式.

**【解】** \(\boldsymbol{\beta}_1\) 可由 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3\) 线性表示，即方程组 \(x_1\boldsymbol{\alpha}_1+x_2\boldsymbol{\alpha}_2+x_3\boldsymbol{\alpha}_3=\boldsymbol{\beta}_1\) 有解，

\(\boldsymbol{\beta}_2\) 不能由 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3\) 线性表示，即方程组 \(y_1\boldsymbol{\alpha}_1+y_2\boldsymbol{\alpha}_2+y_3\boldsymbol{\alpha}_3=\boldsymbol{\beta}_2\) 无解.
\[
[\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3|\boldsymbol{\beta}_1,\boldsymbol{\beta}_2]=
\left[\begin{array}{ccc|cc}
2&1&3&4&2\\
3&0&5&-3&5\\
3&3&a+2&15&a
\end{array}\right]
\to
\left[\begin{array}{ccc|cc}
-1&1&-2&7&-3\\
3&0&5&-3&5\\
0&3&a-3&18&a-5
\end{array}\right]
\]
\[
\to
\left[\begin{array}{ccc|cc}
1&-1&2&-7&3\\
0&3&-1&18&-4\\
0&0&a-2&0&a-1
\end{array}\right]
\]
\(\forall a\)，方程组
\[
\begin{cases}
x_1-x_2+2x_3=-7\\
3x_2-x_3=18\\
(a-2)x_3=0
\end{cases}
\]
一定有解，即 \(\boldsymbol{\beta}_1\) 一定能由 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3\) 线性表出.

当且仅当 \(a=2\) 时
\[
\begin{cases}
y_1-y_2+2y_3=3\\
3y_2-y_3=-4\\
0y_3=1
\end{cases}
\]
无解，即 \(\boldsymbol{\beta}_2\) 不能由 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3\) 线性表示.

当 \(a=2\) 时，
\[
\left[\begin{array}{ccc|c}
1&-1&2&-7\\
0&3&-1&18\\
0&0&0&0
\end{array}\right]
\to
\left[\begin{array}{ccc|c}
1&5&0&29\\
0&-3&1&-18\\
0&0&0&0
\end{array}\right]
\]
得方程组通解
\[
\boldsymbol{x}=(29,0,-18)^{\mathrm{T}}+k(-5,1,3)^{\mathrm{T}},
\]
那么
\[
\boldsymbol{\beta}_1=(29-5k)\boldsymbol{\alpha}_1+k\boldsymbol{\alpha}_2+(-18+3k)\boldsymbol{\alpha}_3,k\text{ 为任意常数.}
\]

**例15** 求一个齐次线性方程组，使它的基础解系为
\[
\boldsymbol{\eta}_1=(4,3,1,2)^{\mathrm{T}},\boldsymbol{\eta}_2=(0,1,3,-2)^{\mathrm{T}}
\]
**【解】** 设所求齐次方程组为 \(\boldsymbol{A}\boldsymbol{x}=\boldsymbol{0}\).

由 \(n-r(\boldsymbol{A})=2\)，且 \(n=4\)，知 \(r(\boldsymbol{A})=2\).

又 \(\boldsymbol{A}(\boldsymbol{\eta}_1,\boldsymbol{\eta}_2)=\boldsymbol{0}\)，转置得
\[
\begin{bmatrix}
\boldsymbol{\eta}_1^{\mathrm{T}}\\
\boldsymbol{\eta}_2^{\mathrm{T}}
\end{bmatrix}
\boldsymbol{A}^{\mathrm{T}}=\boldsymbol{0}
\]` },
      { p: 271, md: R`考查齐次方程组 \(\boldsymbol{B}\boldsymbol{x}=\begin{bmatrix}\boldsymbol{\eta}_1^{\mathrm{T}}\\\boldsymbol{\eta}_2^{\mathrm{T}}\end{bmatrix}\boldsymbol{x}=\boldsymbol{0}\).

由 \(n-r(\boldsymbol{B})=4-2=2\)，从而 \(\boldsymbol{B}\boldsymbol{x}=\boldsymbol{0}\) 的基础解系是 \(\boldsymbol{A}^{\mathrm{T}}\) 的列向量.
\[
\boldsymbol{B}=
\begin{bmatrix}
\boldsymbol{\eta}_1^{\mathrm{T}}\\
\boldsymbol{\eta}_2^{\mathrm{T}}
\end{bmatrix}
=
\begin{bmatrix}
4&3&1&2\\
0&1&3&-2
\end{bmatrix}
\to
\begin{bmatrix}
4&0&-8&8\\
0&1&3&-2
\end{bmatrix}
\to
\begin{bmatrix}
1&0&-2&2\\
0&1&3&-2
\end{bmatrix}
\]
令 \(x_3=1,x_4=0\)，解出 \(x_1=2,x_2=-3\)，

令 \(x_3=0,x_4=1\)，解出 \(x_1=-2,x_2=2\)，

于是 \(\boldsymbol{B}\boldsymbol{x}=\boldsymbol{0}\) 的基础解系为
\[
(2,-3,1,0)^{\mathrm{T}},(-2,2,0,1)^{\mathrm{T}}.
\]
故
\[
\boldsymbol{A}=
\begin{bmatrix}
2&-3&1&0\\
-2&2&0&1
\end{bmatrix}.
\]
那么所求齐次方程组是
\[
\begin{cases}
2x_1-3x_2+x_3=0\\
-2x_1+2x_2+x_4=0
\end{cases}
\]
**【注】** 所求方程组是不唯一的.

志不强者智不达。

——《墨子》` },
    ],
    quiz: [{"q": "齐次方程组 $Ax=0$ 有非零解的充要条件是", "options": ["$r(A)<n$", "$r(A)=n$", "$r(A)=r(A|b)$", "$|A|\\ne0$"], "answer": 0, "explain": "未知数个数 $n$，秩小于 $n$ 时有自由未知量。"}, {"q": "非齐次方程组 $Ax=b$ 有解的充要条件是", "options": ["$r(A)=r(A|b)$", "$r(A)<n$", "$|A|\\ne0$", "$b=0$"], "answer": 0, "explain": "系数矩阵与增广矩阵秩相等。"}, {"q": "$Ax=0$ 的基础解系所含解向量个数为", "options": ["$n-r(A)$", "$r(A)$", "$n$", "$n+r(A)$"], "answer": 0, "explain": "自由未知量个数。"}, {"q": "$Ax=b$ 的通解可表示为", "options": ["一个特解 + $Ax=0$ 的通解", "两个特解之和", "$Ax=0$ 的通解", "任意特解"], "answer": 0, "explain": "非齐次通解结构。"}]
  };
})();
