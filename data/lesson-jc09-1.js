window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["jc09_s0"] = {
    id: "jc09_s0",
    ch: "第三章 向量",
    title: "第三章 向量",
    book: "李永乐《数学复习全书·基础篇》",
    pages: [246, 259],
    img: "assets/img/jichu",
    content: [
      { p: 246, md: R`# 第三章 向量

## 本章考点

向量的概念 向量的线性组合与线性表示 向量组的线性相关与线性无关 向量组的极大线性无关组 等价向量组 向量组的秩 向量组的秩与矩阵的秩之间的关系 向量的内积 线性无关向量组的正交规范化方法 施密特（Schmidt）方法

数一还有向量空间，可参看《复习全书（提高篇）》或《线性代数辅导讲义》相关内容.

向量是初学线性代数时的一个难点，主要表现在对定义的理解、语言的表述、逻辑推理的合理性等方面.当然也是考研的重点.

## 一、向量的概念、向量组的概念

**定义** \(n\) 个数 \(a_1,a_2,\cdots,a_n\) 所组成的有序数组
\[
\boldsymbol{\alpha}=(a_1,a_2,\cdots,a_n)^{\mathrm{T}}\ \text{或}\ \boldsymbol{\alpha}=(a_1,a_2,\cdots,a_n)
\]
叫做 \(n\) 维向量，其中 \(a_1,a_2,\cdots,a_n\) 叫做向量 \(\boldsymbol{\alpha}\) 的分量（或坐标），前一个表示式称为列向量，后者称为行向量.

相等 \(\boldsymbol{\alpha}=\boldsymbol{\beta}\Leftrightarrow \boldsymbol{\alpha},\boldsymbol{\beta}\) 同维，且对应分量 \(a_i=b_i,\ i=1,2,\cdots,n\).

**向量的基本运算**

加法 \(\boldsymbol{\alpha}+\boldsymbol{\beta}=(a_1+b_1,a_2+b_2,\cdots,a_n+b_n)\).

数乘 \(k\boldsymbol{\alpha}=(ka_1,ka_2,\cdots,ka_n)\).

若干个同维数的行向量（或同维数的列向量）所组成的集合叫做向量组.

\(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_r\) 及 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_r,\cdots,\boldsymbol{\alpha}_s\)（其中 \(s\geqslant r\)），称 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_r\) 是 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_s\) 的部分组，\(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_s\) 是整体组.

向量组
\[
\boldsymbol{\alpha}_1=[a_{11},a_{21},\cdots,a_{r1}]^{\mathrm{T}},\ \boldsymbol{\alpha}_2=[a_{12},a_{22},\cdots,a_{r2}]^{\mathrm{T}},\cdots,\boldsymbol{\alpha}_m=[a_{1m},a_{2m},\cdots,a_{rm}]^{\mathrm{T}}
\]
及
\[
\tilde{\boldsymbol{\alpha}}_1=[a_{11},a_{21},\cdots,a_{r1},\cdots,a_{s1}]^{\mathrm{T}},\ \tilde{\boldsymbol{\alpha}}_2=[a_{12},a_{22},\cdots,a_{r2},\cdots,a_{s2}]^{\mathrm{T}},\cdots,\tilde{\boldsymbol{\alpha}}_m=[a_{1m},a_{2m},\cdots,a_{rm},\cdots,a_{sm}]^{\mathrm{T}}
\]
其中 \(s\geqslant r\)，则称 \(\tilde{\boldsymbol{\alpha}}_1,\tilde{\boldsymbol{\alpha}}_2,\cdots,\tilde{\boldsymbol{\alpha}}_m\) 为向量组 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_m\) 的**延伸组**（或称 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_m\) 是 \(\tilde{\boldsymbol{\alpha}}_1,\tilde{\boldsymbol{\alpha}}_2,\cdots,\tilde{\boldsymbol{\alpha}}_m\) 的**缩短组**）.

## 二、线性表出、线性相关

**定义** \(m\) 个 \(n\) 维向量 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_m\) 及 \(m\) 个数 \(k_1,k_2,\cdots,k_m\)，则向量
\[
k_1\boldsymbol{\alpha}_1+k_2\boldsymbol{\alpha}_2+\cdots+k_m\boldsymbol{\alpha}_m
\]
称为向量 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_m\) 的一个线性组合，\(k_1,k_2,\cdots,k_m\) 称为这个线性组合的系数.` },
      { p: 247, md: R`若 \(\boldsymbol{\beta}\) 能表示成 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_m\) 的线性组合，即
\[
\boldsymbol{\beta}=k_1\boldsymbol{\alpha}_1+k_2\boldsymbol{\alpha}_2+\cdots+k_m\boldsymbol{\alpha}_m
\]
则称 \(\boldsymbol{\beta}\) 能由 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_m\) 线性表出.

**定义** 对 \(m\) 个 \(n\) 维向量 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_m\)，若存在不全为零的数 \(k_1,k_2,\cdots,k_m\)，使得
\[
k_1\boldsymbol{\alpha}_1+k_2\boldsymbol{\alpha}_2+\cdots+k_m\boldsymbol{\alpha}_m=\boldsymbol{0}
\]
成立，则称向量组 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_m\) 线性相关，否则称它们线性无关.

显然含有零向量，相等向量或成比例向量的向量组是线性相关的；单个向量时，零向量是线性相关的.

\(m\) 个 \(n\) 维向量 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_m\) 线性无关，下面几种表述等价：

- 对任意不全为零的数 \(k_1,k_2,\cdots,k_m\)，均有
\[
k_1\boldsymbol{\alpha}_1+k_2\boldsymbol{\alpha}_2+\cdots+k_m\boldsymbol{\alpha}_m\neq\boldsymbol{0}
\]
- 当且仅当 \(k_1=k_2=\cdots=k_m=0\) 时才有
\[
k_1\boldsymbol{\alpha}_1+k_2\boldsymbol{\alpha}_2+\cdots+k_m\boldsymbol{\alpha}_m=\boldsymbol{0}
\]
成立.
- 不存在不全为零的数 \(k_1,k_2,\cdots,k_m\)，使得
\[
k_1\boldsymbol{\alpha}_1+k_2\boldsymbol{\alpha}_2+\cdots+k_m\boldsymbol{\alpha}_m=\boldsymbol{0}
\]
成立.

（向量组 \(\boldsymbol{\varepsilon}_1=(1,0,\cdots,0),\boldsymbol{\varepsilon}_2=(0,1,0,\cdots,0),\cdots,\boldsymbol{\varepsilon}_n=(0,0,\cdots,0,1)\) 是线性无关的，单个向量是非零向量时，是线性无关的；两个向量不成比例时，是线性无关的.）

**定理 3.1** 向量 \(\boldsymbol{\beta}\) 可由 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_m\) 线性表出
\[
\Leftrightarrow \exists\ \text{实数 } k_1,k_2,\cdots,k_m \text{ 使 } k_1\boldsymbol{\alpha}_1+k_2\boldsymbol{\alpha}_2+\cdots+k_m\boldsymbol{\alpha}_m=\boldsymbol{\beta}.
\]
\[
\Leftrightarrow \text{方程组 }
[\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_m]
\begin{bmatrix}
x_1\\
x_2\\
\vdots\\
x_m
\end{bmatrix}
=\boldsymbol{\beta}\ \text{有解.}
\]
\[
\Leftrightarrow \text{秩 } r(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_m)
=r(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_m,\boldsymbol{\beta}).
\]

**定理 3.2** 向量组 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_m\)（\(\boldsymbol{\alpha}_j=(a_{1j},a_{2j},\cdots,a_{nj})^{\mathrm{T}},j=1,2,\cdots,m\)）线性相关 \(\Leftrightarrow\) 以 \(\boldsymbol{\alpha}_j\) 为列向量的齐次线性方程组
\[
x_1\boldsymbol{\alpha}_1+x_2\boldsymbol{\alpha}_2+\cdots+x_m\boldsymbol{\alpha}_m=\boldsymbol{0}
\]
即
\[
\begin{cases}
a_{11}x_1+a_{12}x_2+\cdots+a_{1m}x_m=0\\
a_{21}x_1+a_{22}x_2+\cdots+a_{2m}x_m=0\\
\cdots\cdots\cdots\\
a_{n1}x_1+a_{n2}x_2+\cdots+a_{nm}x_m=0
\end{cases}
\]
有非零解.

**推论 1** \(n\) 个 \(n\) 维向量 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_n\) 线性相关 \(\Leftrightarrow\) 行列式 \(|\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_n|=0\).

**推论 2** 任何 \(n+1\) 个 \(n\) 维向量必线性相关.

**定理 3.3** 任何部分组 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_r\) 相关 \(\Rightarrow\) 整体组 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_r,\cdots,\boldsymbol{\alpha}_s\) 相关，整体组 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_r,\cdots,\boldsymbol{\alpha}_s\) 无关 \(\Rightarrow\) 任何部分组 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_r\) 无关，反之都不成立.

> \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_r\) 及 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_r,\cdots,\boldsymbol{\alpha}_s\)（其中 \(s>r\)），称 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_r\) 是 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_s\) 的部分组，\(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_s\) 是整体组.

**定理 3.4** \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_m\) 线性无关 \(\Rightarrow\) 延伸组 \(\tilde{\boldsymbol{\alpha}}_1,\tilde{\boldsymbol{\alpha}}_2,\cdots,\tilde{\boldsymbol{\alpha}}_m\) 线性无关；` },
      { p: 248, md: R`\(\tilde{\boldsymbol{\alpha}}_1,\tilde{\boldsymbol{\alpha}}_2,\cdots,\tilde{\boldsymbol{\alpha}}_m\) 线性相关 \(\Rightarrow\) 缩短组 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_m\) 线性相关，反之均不成立.

> 向量组 \(\boldsymbol{\alpha}_1=[a_{11},a_{21},\cdots,a_{r1}]^{\mathrm{T}},\boldsymbol{\alpha}_2=[a_{12},a_{22},\cdots,a_{r2}]^{\mathrm{T}},\cdots,\boldsymbol{\alpha}_m=[a_{1m},a_{2m},\cdots,a_{rm}]^{\mathrm{T}}\) 及 \(\tilde{\boldsymbol{\alpha}}_1=[a_{11},a_{21},\cdots,a_{r1},\cdots,a_{s1}]^{\mathrm{T}},\tilde{\boldsymbol{\alpha}}_2=[a_{12},a_{22},\cdots,a_{r2},\cdots,a_{s2}]^{\mathrm{T}},\cdots,\tilde{\boldsymbol{\alpha}}_m=[a_{1m},a_{2m},\cdots,a_{rm},\cdots,a_{sm}]^{\mathrm{T}}\)，其中 \(s\geqslant r\)，则称 \(\tilde{\boldsymbol{\alpha}}_1,\tilde{\boldsymbol{\alpha}}_2,\cdots,\tilde{\boldsymbol{\alpha}}_m\) 为向量组 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_m\) 的延伸组（或称 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_m\) 是 \(\tilde{\boldsymbol{\alpha}}_1,\tilde{\boldsymbol{\alpha}}_2,\cdots,\tilde{\boldsymbol{\alpha}}_m\) 的缩短组）.

**定理 3.5** 向量组 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_s\ (s\geqslant 2)\) 线性相关 \(\Leftrightarrow\) 至少有一个向量 \(\boldsymbol{\alpha}_i\) 可以由其余向量线性表出.

**定理 3.6** 若向量组 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_s\) 线性无关，而向量组 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_s,\boldsymbol{\beta}\) 线性相关，则 \(\boldsymbol{\beta}\) 可由 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_s\) 线性表出，且表示法唯一.

**定理 3.7** 设有两个向量组（Ⅰ）\(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_s\)，（Ⅱ）\(\boldsymbol{\beta}_1,\boldsymbol{\beta}_2,\cdots,\boldsymbol{\beta}_t\).

（1）若 \(\boldsymbol{\beta}_i\ (i=1,2,\cdots,t)\) 均可由（Ⅰ）线性表出，且 \(t>s\)，则（Ⅱ）\(\boldsymbol{\beta}_1,\boldsymbol{\beta}_2,\cdots,\boldsymbol{\beta}_t\) 线性相关.

（2）若 \(\boldsymbol{\beta}_i\ (i=1,2,\cdots,t)\) 均可由（Ⅰ）线性表出，且 \(\boldsymbol{\beta}_1,\boldsymbol{\beta}_2,\cdots,\boldsymbol{\beta}_t\) 线性无关，则 \(t\leqslant s\).

**例1** 设 \(\boldsymbol{\alpha}_1=(1,2,3)^{\mathrm{T}},\boldsymbol{\alpha}_2=(1,3,4)^{\mathrm{T}},\boldsymbol{\alpha}_3=(2,-1,1)^{\mathrm{T}},\boldsymbol{\beta}=(2,5,t)^{\mathrm{T}}\)，问 \(t\) 取何值时，（1）向量 \(\boldsymbol{\beta}\) 不能由 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3\) 线性表出？

（2）向量 \(\boldsymbol{\beta}\) 能由 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3\) 线性表出，并写出此表达式.

**【解】** 设 \(x_1\boldsymbol{\alpha}_1+x_2\boldsymbol{\alpha}_2+x_3\boldsymbol{\alpha}_3=\boldsymbol{\beta}\)，按分量写出有
\[
x_1(1,2,3)^{\mathrm{T}}+x_2(1,3,4)^{\mathrm{T}}+x_3(2,-1,1)^{\mathrm{T}}=(2,5,t)^{\mathrm{T}}
\]
即
\[
\begin{cases}
x_1+x_2+2x_3=2\\
2x_1+3x_2-x_3=5\\
3x_1+4x_2+x_3=t
\end{cases}
\]
作初等行变换得
\[
\overline{\boldsymbol{A}}=
\left[\begin{array}{ccc|c}
1&1&2&2\\
2&3&-1&5\\
3&4&1&t
\end{array}\right]\to
\left[\begin{array}{ccc|c}
1&1&2&2\\
0&1&-5&1\\
0&1&-5&t-6
\end{array}\right]\to
\left[\begin{array}{ccc|c}
1&1&2&2\\
0&1&-5&1\\
0&0&0&t-7
\end{array}\right],
\]
（1）当 \(t\neq 7\) 时，方程组无解，即向量 \(\boldsymbol{\beta}\) 不能由 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3\) 线性表出.

（2）当 \(t=7\) 时，方程组有解
\[
\overline{\boldsymbol{A}}\to
\left[\begin{array}{ccc|c}
1&1&2&2\\
0&1&-5&1\\
0&0&0&0
\end{array}\right]\to
\left[\begin{array}{ccc|c}
1&0&7&1\\
0&1&-5&1\\
0&0&0&0
\end{array}\right],
\]
令 \(x_3=t\) 得 \(x_2=1+5t,x_1=1-7t\)，所以 \(\boldsymbol{\beta}=(1-7t)\boldsymbol{\alpha}_1+(1+5t)\boldsymbol{\alpha}_2+t\boldsymbol{\alpha}_3\)，\(t\) 为任意常数.

**例2** 设 \(\boldsymbol{\alpha}_1=(1+\lambda,1,1)^{\mathrm{T}},\boldsymbol{\alpha}_2=(1,1+\lambda,1)^{\mathrm{T}},\boldsymbol{\alpha}_3=(1,1,1+\lambda)^{\mathrm{T}},\boldsymbol{\beta}=(0,\lambda,\lambda^2)^{\mathrm{T}}\)，当 \(\lambda\) 取什么值时：（1）\(\boldsymbol{\beta}\) 不能由 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3\) 线性表示？

（2）\(\boldsymbol{\beta}\) 可由 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3\) 线性表示，并写出该表示式.

**【解】** 设 \(x_1\boldsymbol{\alpha}_1+x_2\boldsymbol{\alpha}_2+x_3\boldsymbol{\alpha}_3=\boldsymbol{\beta}\)，按分量写出得方程组
\[
\begin{cases}
(1+\lambda)x_1+x_2+x_3=0\\
x_1+(1+\lambda)x_2+x_3=\lambda\\
x_1+x_2+(1+\lambda)x_3=\lambda^2
\end{cases}
\]` },
      { p: 249, md: R`由
\[
\overline{\boldsymbol{A}}=
\left[\begin{array}{ccc|c}
1+\lambda&1&1&0\\
1&1+\lambda&1&\lambda\\
1&1&1+\lambda&\lambda^2
\end{array}\right]\to
\left[\begin{array}{ccc|c}
1+\lambda&1&1&0\\
-\lambda&\lambda&0&\lambda\\
-\lambda&0&\lambda&\lambda^2
\end{array}\right],
\]
若 \(\lambda=0\)，同解方程组
\[
x_1+x_2+x_3=0
\]
令 \(x_2=t,x_3=u\) 得 \(x_1=-t-u\).

故 \(\boldsymbol{\beta}=-(t+u)\boldsymbol{\alpha}_1+t\boldsymbol{\alpha}_2+u\boldsymbol{\alpha}_3\)，\(t,u\) 是任意常数.

若 \(\lambda\neq 0\)，
\[
\overline{\boldsymbol{A}}\to
\left[\begin{array}{ccc|c}
1+\lambda&1&1&0\\
-1&1&0&1\\
-1&0&1&\lambda
\end{array}\right]\to
\left[\begin{array}{ccc|c}
\lambda+3&0&0&-\lambda-1\\
-1&1&0&1\\
-1&0&1&\lambda
\end{array}\right].
\]
若 \(\lambda=-3\)，方程组无解，\(\boldsymbol{\beta}\) 不能由 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3\) 线性表出

若 \(\lambda\neq -3\)，解出
\[
x_1=-\frac{\lambda+1}{\lambda+3},\quad x_2=\frac{2}{\lambda+3},\quad x_3=\frac{\lambda^2+2\lambda-1}{\lambda+3}
\]
故
\[
\boldsymbol{\beta}=-\frac{\lambda+1}{\lambda+3}\boldsymbol{\alpha}_1+\frac{2}{\lambda+3}\boldsymbol{\alpha}_2+\frac{\lambda^2+2\lambda-1}{\lambda+3}\boldsymbol{\alpha}_3.
\]

**例3** 已知 \(\boldsymbol{\alpha},\boldsymbol{\beta}_1,\boldsymbol{\beta}_2,\boldsymbol{\beta}_3,\boldsymbol{\gamma}_1,\boldsymbol{\gamma}_2\) 都是 \(n\) 维向量，试证如果 \(\boldsymbol{\alpha}\) 可由 \(\boldsymbol{\beta}_1,\boldsymbol{\beta}_2,\boldsymbol{\beta}_3\) 线性表出，\(\boldsymbol{\beta}_1,\boldsymbol{\beta}_2,\boldsymbol{\beta}_3\) 可由 \(\boldsymbol{\gamma}_1,\boldsymbol{\gamma}_2\) 线性表出，则 \(\boldsymbol{\alpha}\) 可由 \(\boldsymbol{\gamma}_1,\boldsymbol{\gamma}_2\) 线性表出.

**【证】** 据已知条件，可设
\[
\begin{aligned}
\boldsymbol{\alpha}&=k_1\boldsymbol{\beta}_1+k_2\boldsymbol{\beta}_2+k_3\boldsymbol{\beta}_3\\
\boldsymbol{\beta}_1&=l_{11}\boldsymbol{\gamma}_1+l_{12}\boldsymbol{\gamma}_2\\
\boldsymbol{\beta}_2&=l_{21}\boldsymbol{\gamma}_1+l_{22}\boldsymbol{\gamma}_2\\
\boldsymbol{\beta}_3&=l_{31}\boldsymbol{\gamma}_1+l_{32}\boldsymbol{\gamma}_2
\end{aligned}
\]
那么
\[
\begin{aligned}
\boldsymbol{\alpha}&=k_1(l_{11}\boldsymbol{\gamma}_1+l_{12}\boldsymbol{\gamma}_2)+k_2(l_{21}\boldsymbol{\gamma}_1+l_{22}\boldsymbol{\gamma}_2)+k_3(l_{31}\boldsymbol{\gamma}_1+l_{32}\boldsymbol{\gamma}_2)\\
&=(k_1l_{11}+k_2l_{21}+k_3l_{31})\boldsymbol{\gamma}_1+(k_1l_{12}+k_2l_{22}+k_3l_{32})\boldsymbol{\gamma}_2
\end{aligned}
\]
即 \(\boldsymbol{\alpha}\) 可由 \(\boldsymbol{\gamma}_1,\boldsymbol{\gamma}_2\) 线性表出.

**例4** 判断向量组
\[
\boldsymbol{\alpha}_1=(1,2,-1,4),\ \boldsymbol{\alpha}_2=(0,-1,-5,3),\ \boldsymbol{\alpha}_3=(2,5,3,5)
\]
的线性相关性.

**【解】** 设 \(x_1\boldsymbol{\alpha}_1+x_2\boldsymbol{\alpha}_2+x_3\boldsymbol{\alpha}_3=\boldsymbol{0}\)，按分量写出
\[
x_1(1,2,-1,4)+x_2(0,-1,-5,3)+x_3(2,5,3,5)=(0,0,0,0)
\]
即
\[
\begin{cases}
x_1+2x_3=0\\
2x_1-x_2+5x_3=0\\
-x_1-5x_2+3x_3=0\\
4x_1+3x_2+5x_3=0
\end{cases}
\]
对系数矩阵作初等变换有
\[
\boldsymbol{A}=
\begin{bmatrix}
1&0&2\\
2&-1&5\\
-1&-5&3\\
4&3&5
\end{bmatrix}\to
\begin{bmatrix}
1&0&2\\
0&1&-1\\
0&0&0\\
0&0&0
\end{bmatrix}\]` },
      { p: 250, md: R`由 \(r(\boldsymbol{A})<n\)，齐次方程组 \(\boldsymbol{A}x=\boldsymbol{0}\) 必有非零解，故 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3\) 线性相关.

**例5** 判断向量组的线性相关性

（1）\(\boldsymbol{\alpha}_1=(3,4,2)^{\mathrm{T}},\boldsymbol{\alpha}_2=(2,1,-7)^{\mathrm{T}},\boldsymbol{\alpha}_3=(1,2,4)^{\mathrm{T}}\).

（2）\(\boldsymbol{\alpha}_1=(1,2)^{\mathrm{T}},\boldsymbol{\alpha}_2=(3,4)^{\mathrm{T}},\boldsymbol{\alpha}_3=(5,6)^{\mathrm{T}}\).

**【解】** 已知向量的坐标，判断向量组的线性相关就是转化为齐次方程组考查有无非零解.

（1）设 \(x_1\boldsymbol{\alpha}_1+x_2\boldsymbol{\alpha}_2+x_3\boldsymbol{\alpha}_3=\boldsymbol{0}\).按分量写出，即
\[
\begin{cases}
3x_1+2x_2+x_3=0\\
4x_1+x_2+2x_3=0\\
2x_1-7x_2+4x_3=0
\end{cases}
\]
由于系数行列式
\[
\begin{vmatrix}
3&2&1\\
4&1&2\\
2&-7&4
\end{vmatrix}
=
\begin{vmatrix}
1&2&-3\\
0&1&0\\
-6&-7&18
\end{vmatrix}
=0
\]
齐次方程组必有非零解，所以 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3\) 线性相关.

（2）设 \(x_1\boldsymbol{\alpha}_1+x_2\boldsymbol{\alpha}_2+x_3\boldsymbol{\alpha}_3=\boldsymbol{0}\)，按分量写出，有
\[
\begin{cases}
x_1+3x_2+5x_3=0\\
2x_1+4x_2+6x_3=0
\end{cases}
\]
由 \(r(\boldsymbol{A})<n\) 齐次方程组必有非零解，故 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3\) 必线性相关.

**例6** （1）已知向量组 \(\boldsymbol{\alpha}_1=(1,3,2)^{\mathrm{T}},\boldsymbol{\alpha}_2=(-1,1,2)^{\mathrm{T}},\boldsymbol{\alpha}_3=(0,a,3)^{\mathrm{T}}\) 线性相关，求 \(a\).

（2）判断向量组 \(\boldsymbol{\alpha}_1=(1,0,2,3)^{\mathrm{T}},\boldsymbol{\alpha}_2=(1,1,3,5)^{\mathrm{T}},\boldsymbol{\alpha}_3=(1,-1,a,1)^{\mathrm{T}}\) 的线性相关性.

**【解】** （1）\(n\) 个 \(n\) 维向量 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_n\) 线性相关 \(\Leftrightarrow |\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_n|=0\)
\[
|\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3|=
\begin{vmatrix}
1&-1&0\\
3&1&a\\
2&2&3
\end{vmatrix}
=
\begin{vmatrix}
1&0&0\\
3&4&a\\
2&4&3
\end{vmatrix}
=4(3-a),
\]
所以 \(a=3\) 时，向量组 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3\) 线性相关.

（2）设 \(x_1\boldsymbol{\alpha}_1+x_2\boldsymbol{\alpha}_2+x_3\boldsymbol{\alpha}_3=\boldsymbol{0}\)，按分量写出.即
\[
\begin{cases}
x_1+x_2+x_3=0\\
x_2-x_3=0\\
2x_1+3x_2+ax_3=0\\
3x_1+5x_2+x_3=0
\end{cases}
\]
对系数矩阵作初等行变换有
\[
\boldsymbol{A}=
\begin{bmatrix}
1&1&1\\
0&1&-1\\
2&3&a\\
3&5&1
\end{bmatrix}\to
\begin{bmatrix}
1&1&1\\
0&1&-1\\
0&1&a-2\\
0&2&-2
\end{bmatrix}\to
\begin{bmatrix}
1&1&1\\
0&1&-1\\
0&0&a-1\\
0&0&0
\end{bmatrix}.
\]
可见 \(a=1\) 时，秩 \(r(\boldsymbol{A})=2<3\)，齐次方程组 \(\boldsymbol{A}x=\boldsymbol{0}\) 有非零解.从而 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3\) 线性相关.

当 \(a\neq 1\) 时，秩 \(r(\boldsymbol{A})=3\)，齐次方程组 \(\boldsymbol{A}x=\boldsymbol{0}\) 只有零解，那么 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3\) 线性无关.` },
      { p: 251, md: R`**例7** 设 \(\boldsymbol{A}=(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_n),\boldsymbol{B}=(\boldsymbol{\beta}_1,\boldsymbol{\beta}_2,\cdots,\boldsymbol{\beta}_n),\boldsymbol{AB}=(\boldsymbol{\gamma}_1,\boldsymbol{\gamma}_2,\cdots,\boldsymbol{\gamma}_n)\) 均是 \(n\) 阶矩阵，记向量组

（Ⅰ）：\(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_n\)，（Ⅱ）：\(\boldsymbol{\beta}_1,\boldsymbol{\beta}_2,\cdots,\boldsymbol{\beta}_n\)，（Ⅲ）：\(\boldsymbol{\gamma}_1,\boldsymbol{\gamma}_2,\cdots,\boldsymbol{\gamma}_n\)，

若（Ⅲ）线性相关，则

（A）（Ⅰ）（Ⅱ）均线性相关.

（B）（Ⅰ）或（Ⅱ）至少有一个线性相关.

（C）（Ⅰ）必线性相关.

（D）（Ⅱ）必线性相关.

**【分析】** （Ⅲ）线性相关 \(\Leftrightarrow |\boldsymbol{AB}|=0\)
\[
\Leftrightarrow |\boldsymbol{A}|=0\ \text{或}\ |\boldsymbol{B}|=0
\]
所以应选（B）.

**例8** （1997，数三）向量组 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3\) 线性无关，则下列向量组中线性无关的是

（A）\(\boldsymbol{\alpha}_1+\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_2+\boldsymbol{\alpha}_3,\boldsymbol{\alpha}_3-\boldsymbol{\alpha}_1\).

（B）\(\boldsymbol{\alpha}_1+\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_2+\boldsymbol{\alpha}_3,\boldsymbol{\alpha}_1+2\boldsymbol{\alpha}_2+\boldsymbol{\alpha}_3\).

（C）\(\boldsymbol{\alpha}_1+2\boldsymbol{\alpha}_2,2\boldsymbol{\alpha}_2+3\boldsymbol{\alpha}_3,3\boldsymbol{\alpha}_3+\boldsymbol{\alpha}_1\).

（D）\(\boldsymbol{\alpha}_1+\boldsymbol{\alpha}_2+\boldsymbol{\alpha}_3,2\boldsymbol{\alpha}_1-3\boldsymbol{\alpha}_2+22\boldsymbol{\alpha}_3,3\boldsymbol{\alpha}_1+5\boldsymbol{\alpha}_2-5\boldsymbol{\alpha}_3\).

**【分析】** 由观察法

（A）\((\boldsymbol{\alpha}_1+\boldsymbol{\alpha}_2)-(\boldsymbol{\alpha}_2+\boldsymbol{\alpha}_3)+(\boldsymbol{\alpha}_3-\boldsymbol{\alpha}_1)=\boldsymbol{0}\).

（B）\((\boldsymbol{\alpha}_1+\boldsymbol{\alpha}_2)+(\boldsymbol{\alpha}_2+\boldsymbol{\alpha}_3)-(\boldsymbol{\alpha}_1+2\boldsymbol{\alpha}_2+\boldsymbol{\alpha}_3)=\boldsymbol{0}\).

知（A）（B）均线性相关，然后可用秩继续分析

令 \(\boldsymbol{\beta}_1=\boldsymbol{\alpha}_1+2\boldsymbol{\alpha}_2,\boldsymbol{\beta}_2=2\boldsymbol{\alpha}_2+3\boldsymbol{\alpha}_3,\boldsymbol{\beta}_3=3\boldsymbol{\alpha}_3+\boldsymbol{\alpha}_1\)

则
\[
(\boldsymbol{\beta}_1,\boldsymbol{\beta}_2,\boldsymbol{\beta}_3)=(\boldsymbol{\alpha}_1+2\boldsymbol{\alpha}_2,2\boldsymbol{\alpha}_2+3\boldsymbol{\alpha}_3,3\boldsymbol{\alpha}_3+\boldsymbol{\alpha}_1)
=(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3)
\begin{bmatrix}
1&0&1\\
2&2&0\\
0&3&3
\end{bmatrix},
\]
由
\[
|\boldsymbol{C}|=
\begin{vmatrix}
1&0&1\\
2&2&0\\
0&3&3
\end{vmatrix}=12\neq 0,
\]
矩阵 \(\boldsymbol{C}\) 可逆，又 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3\) 线性无关，知 \(r(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3)=3\)，

于是 \(r(\boldsymbol{\beta}_1,\boldsymbol{\beta}_2,\boldsymbol{\beta}_3)=r[(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3)\boldsymbol{C}]=r(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3)=3\)，

从而 \(\boldsymbol{\beta}_1,\boldsymbol{\beta}_2,\boldsymbol{\beta}_3\) 必线性无关，即（C）必线性无关.

关于（D），
\[
(\boldsymbol{\beta}_1,\boldsymbol{\beta}_2,\boldsymbol{\beta}_3)=(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3)
\begin{bmatrix}
1&2&3\\
1&-3&5\\
1&22&-5
\end{bmatrix},
\]
因
\[
\begin{vmatrix}
1&2&3\\
1&-3&5\\
1&22&-5
\end{vmatrix}=0,\ r(\boldsymbol{C})=2,
\]
那么 \(r(\boldsymbol{\beta}_1,\boldsymbol{\beta}_2,\boldsymbol{\beta}_3)=r[(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3)\boldsymbol{C}]\leqslant r(\boldsymbol{C})=2\).

可推断出（D）线性相关.

**例9** 已知 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3\) 线性无关，证明 \(\boldsymbol{\alpha}_1+\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_2+\boldsymbol{\alpha}_3,\boldsymbol{\alpha}_3+\boldsymbol{\alpha}_1\) 线性无关.

**【证】** 记 \(\boldsymbol{\beta}_1=\boldsymbol{\alpha}_1+\boldsymbol{\alpha}_2,\boldsymbol{\beta}_2=\boldsymbol{\alpha}_2+\boldsymbol{\alpha}_3,\boldsymbol{\beta}_3=\boldsymbol{\alpha}_3+\boldsymbol{\alpha}_1\)，则
\[
(\boldsymbol{\beta}_1,\boldsymbol{\beta}_2,\boldsymbol{\beta}_3)=(\boldsymbol{\alpha}_1+\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_2+\boldsymbol{\alpha}_3,\boldsymbol{\alpha}_3+\boldsymbol{\alpha}_1)
=(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3)
\begin{bmatrix}
1&0&1\\
1&1&0\\
0&1&1
\end{bmatrix}\]` },
      { p: 252, md: R`由于
\[
\begin{vmatrix}
1&0&1\\
1&1&0\\
0&1&1
\end{vmatrix}=2\neq 0
\]
知矩阵
\[
\begin{bmatrix}
1&0&1\\
1&1&0\\
0&1&1
\end{bmatrix}
\]
可逆.

又因 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3\) 线性无关，从而 \(r(\boldsymbol{\beta}_1,\boldsymbol{\beta}_2,\boldsymbol{\beta}_3)=r(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3)=3\)，所以向量组 \(\boldsymbol{\alpha}_1+\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_2+\boldsymbol{\alpha}_3,\boldsymbol{\alpha}_3+\boldsymbol{\alpha}_1\) 线性无关.

或者，设 \(k_1(\boldsymbol{\alpha}_1+\boldsymbol{\alpha}_2)+k_2(\boldsymbol{\alpha}_2+\boldsymbol{\alpha}_3)+k_3(\boldsymbol{\alpha}_3+\boldsymbol{\alpha}_1)=\boldsymbol{0}\)

即
\[
(k_1+k_3)\boldsymbol{\alpha}_1+(k_1+k_2)\boldsymbol{\alpha}_2+(k_2+k_3)\boldsymbol{\alpha}_3=\boldsymbol{0}
\]
因 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3\) 线性无关.故
\[
\begin{cases}
k_1+k_3=0\\
k_1+k_2=0\\
k_2+k_3=0
\end{cases}
\qquad (*)
\]
由
\[
\begin{vmatrix}
1&0&1\\
1&1&0\\
0&1&1
\end{vmatrix}\neq 0,
\]
得齐次方程组 \((*)\) 只有零解，即必有 \(k_1=0,k_2=0,k_3=0\).

所以向量组 \(\boldsymbol{\alpha}_1+\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_2+\boldsymbol{\alpha}_3,\boldsymbol{\alpha}_3+\boldsymbol{\alpha}_1\) 必线性无关.

**例10** 证明定理：如果 \(n\) 维向量 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_s\) 线性无关，\(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_s,\boldsymbol{\beta}\) 线性相关则向量 \(\boldsymbol{\beta}\) 可由 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_s\) 线性表出且表示法唯一.

**【证】** 因为 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_s,\boldsymbol{\beta}\) 线性相关，故存在不全为0的 \(k_1,k_2,\cdots,k_s,k\) 使得
\[
k_1\boldsymbol{\alpha}_1+k_2\boldsymbol{\alpha}_2+\cdots+k_s\boldsymbol{\alpha}_s+k\boldsymbol{\beta}=\boldsymbol{0}.
\]
如果其中 \(k=0\).那么必有 \(k_1,k_2,\cdots,k_s\) 不全为0，而
\[
k_1\boldsymbol{\alpha}_1+k_2\boldsymbol{\alpha}_2+\cdots+k_s\boldsymbol{\alpha}_s=\boldsymbol{0}
\]
这与已知条件 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_s\) 线性无关相矛盾.所以必有 \(k\neq 0\)，那么
\[
\boldsymbol{\beta}=\left(-\frac{k_1}{k}\right)\boldsymbol{\alpha}_1+\left(-\frac{k_2}{k}\right)\boldsymbol{\alpha}_2+\cdots+\left(-\frac{k_s}{k}\right)\boldsymbol{\alpha}_s,
\]
即向量 \(\boldsymbol{\beta}\) 可由 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_s\) 线性表出.

若 \(\boldsymbol{\beta}\) 有两种不同的表示法，设
\[
\boldsymbol{\beta}=x_1\boldsymbol{\alpha}_1+x_2\boldsymbol{\alpha}_2+\cdots+x_s\boldsymbol{\alpha}_s
\]
\[
\boldsymbol{\beta}=y_1\boldsymbol{\alpha}_1+y_2\boldsymbol{\alpha}_2+\cdots+y_s\boldsymbol{\alpha}_s
\]
两式相减，得
\[
(x_1-y_1)\boldsymbol{\alpha}_1+(x_2-y_2)\boldsymbol{\alpha}_2+\cdots+(x_s-y_s)\boldsymbol{\alpha}_s=\boldsymbol{0},
\]
因为是两种不同的表示法，\(x_i-y_i\) 不可能全为0，于是 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_s\) 线性相关，与已知条件矛盾.故 \(\boldsymbol{\beta}\) 的表示法唯一.

**例11** 证明定理：向量组 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_s\ (s\geqslant 2)\) 线性相关的充分必要条件是至少有一个向量 \(\boldsymbol{\alpha}_i\) 可由其余的向量 \(\boldsymbol{\alpha}_1,\cdots,\boldsymbol{\alpha}_{i-1},\boldsymbol{\alpha}_{i+1},\cdots,\boldsymbol{\alpha}_s\) 线性表出.

**【证】** 必要性

若 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_s\) 线性相关，则存在不全为0的 \(k_1,k_2,\cdots,k_s\) 使
\[
k_1\boldsymbol{\alpha}_1+k_2\boldsymbol{\alpha}_2+\cdots+k_s\boldsymbol{\alpha}_s=\boldsymbol{0}
\]
不妨设 \(k_1\neq 0\)，则有
\[
k_1\boldsymbol{\alpha}_1=-k_2\boldsymbol{\alpha}_2-k_3\boldsymbol{\alpha}_3-\cdots-k_s\boldsymbol{\alpha}_s,
\]
那么
\[
\boldsymbol{\alpha}_1=\left(-\frac{k_2}{k_1}\right)\boldsymbol{\alpha}_2+\left(-\frac{k_3}{k_1}\right)\boldsymbol{\alpha}_3+\cdots+\left(-\frac{k_s}{k_1}\right)\boldsymbol{\alpha}_s,
\]
即 \(\boldsymbol{\alpha}_1\) 可由 \(\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3,\cdots,\boldsymbol{\alpha}_s\) 线性表出.` },
      { p: 253, md: R`充分性

如果 \(\boldsymbol{\alpha}_i\) 可由 \(\boldsymbol{\alpha}_1,\cdots,\boldsymbol{\alpha}_{i-1},\boldsymbol{\alpha}_{i+1},\cdots,\boldsymbol{\alpha}_s\) 线性表出.设
\[
\boldsymbol{\alpha}_i=k_1\boldsymbol{\alpha}_1+\cdots+k_{i-1}\boldsymbol{\alpha}_{i-1}+k_{i+1}\boldsymbol{\alpha}_{i+1}+\cdots+k_s\boldsymbol{\alpha}_s,
\]
即有
\[
k_1\boldsymbol{\alpha}_1+\cdots+k_{i-1}\boldsymbol{\alpha}_{i-1}-\boldsymbol{\alpha}_i+k_{i+1}\boldsymbol{\alpha}_{i+1}+\cdots+k_s\boldsymbol{\alpha}_s=\boldsymbol{0}
\]
组合系数 \(k_1,\cdots,k_{i-1},-1,k_{i+1},\cdots,k_s\) 不全为0，所以 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_s\) 线性相关.

**例12** 证明定理：设 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_s\) 是 \(m\) 维向量，\(\boldsymbol{\beta}_1,\boldsymbol{\beta}_2,\cdots,\boldsymbol{\beta}_s\) 是 \(n\) 维向量.令
\[
\boldsymbol{\gamma}_1=\begin{bmatrix}\boldsymbol{\alpha}_1\\ \boldsymbol{\beta}_1\end{bmatrix},\ \boldsymbol{\gamma}_2=\begin{bmatrix}\boldsymbol{\alpha}_2\\ \boldsymbol{\beta}_2\end{bmatrix},\cdots,\boldsymbol{\gamma}_s=\begin{bmatrix}\boldsymbol{\alpha}_s\\ \boldsymbol{\beta}_s\end{bmatrix},
\]
那么

（1）若 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_s\) 线性无关，则 \(\boldsymbol{\gamma}_1,\boldsymbol{\gamma}_2,\cdots,\boldsymbol{\gamma}_s\) 必线性无关.

（2）若 \(\boldsymbol{\gamma}_1,\boldsymbol{\gamma}_2,\cdots,\boldsymbol{\gamma}_s\) 线性相关，则 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_s\) 必线性相关.

**【证】** 构造两个齐次方程组
\[
(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_s)
\begin{bmatrix}
x_1\\
x_2\\
\vdots\\
x_s
\end{bmatrix}
=\boldsymbol{0}
\qquad(\mathrm{I})
\]
\[
(\boldsymbol{\gamma}_1,\boldsymbol{\gamma}_2,\cdots,\boldsymbol{\gamma}_s)
\begin{bmatrix}
x_1\\
x_2\\
\vdots\\
x_s
\end{bmatrix}
=\boldsymbol{0}
\qquad(\mathrm{II})
\]
即
\[
\begin{cases}
(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_s)x=\boldsymbol{0}&(\mathrm{I})\\
(\boldsymbol{\beta}_1,\boldsymbol{\beta}_2,\cdots,\boldsymbol{\beta}_s)x=\boldsymbol{0}&(\mathrm{III})
\end{cases}
\]
由于（Ⅱ）的前 \(m\) 个方程就是（Ⅰ）的所有方程，于是
\[
\{(\mathrm{II})\text{ 的解}\}\subset\{(\mathrm{I})\text{ 的解}\}.
\]
（1）当 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_s\) 线性无关时，（Ⅰ）只有零解，因此（Ⅱ）也仅有零解，故 \(\boldsymbol{\gamma}_1,\boldsymbol{\gamma}_2,\cdots,\boldsymbol{\gamma}_s\) 必线性无关.

（2）当 \(\boldsymbol{\gamma}_1,\boldsymbol{\gamma}_2,\cdots,\boldsymbol{\gamma}_s\) 线性相关时，（Ⅱ）有非零解，因此（Ⅰ）必有非零解，故 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_s\) 一定线性相关.

**练习 3.1**

（1）已知 \(\boldsymbol{\alpha}_1=(1,2,1)^{\mathrm{T}},\boldsymbol{\alpha}_2=(2,a,3)^{\mathrm{T}},\boldsymbol{\alpha}_3=(5,7,2)^{\mathrm{T}}\) 线性相关，则 \(a=\) ______.

（2）已知 \(\boldsymbol{\beta}=(1,-4,a)^{\mathrm{T}}\) 可由 \(\boldsymbol{\alpha}_1=(1,2,3)^{\mathrm{T}},\boldsymbol{\alpha}_2=(2,1,0)^{\mathrm{T}},\boldsymbol{\alpha}_3=(4,-1,-6)^{\mathrm{T}}\) 线性表示，则 \(a=\) ______.

（3）设向量组 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3\) 线性无关，则下列向量组中线性无关的是

（A）\(\boldsymbol{\alpha}_1+\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_2+\boldsymbol{\alpha}_3,\boldsymbol{\alpha}_3-\boldsymbol{\alpha}_1\).

（B）\(\boldsymbol{\alpha}_1-\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_2-\boldsymbol{\alpha}_3,\boldsymbol{\alpha}_3-\boldsymbol{\alpha}_1\).

（C）\(\boldsymbol{\alpha}_1+\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_2+\boldsymbol{\alpha}_3,\boldsymbol{\alpha}_1+2\boldsymbol{\alpha}_2+\boldsymbol{\alpha}_3\).

（D）\(\boldsymbol{\alpha}_1+\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_2+\boldsymbol{\alpha}_3,\boldsymbol{\alpha}_3+\boldsymbol{\alpha}_1\).

（练习答案在297页）` },
      { p: 254, md: R`## 三、向量组的秩、矩阵的秩

### 1. 向量组的秩

**定义** 向量组 \(\boldsymbol{\alpha}_{i_1},\boldsymbol{\alpha}_{i_2},\cdots,\boldsymbol{\alpha}_{i_r}\ (1\leqslant i_1<i_2<\cdots<i_r\leqslant s)\) 是向量组 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_s\) 的部分组，满足条件

（1）\(\boldsymbol{\alpha}_{i_1},\boldsymbol{\alpha}_{i_2},\cdots,\boldsymbol{\alpha}_{i_r}\) 线性无关；

（2）\(\boldsymbol{\alpha}_{i_1},\boldsymbol{\alpha}_{i_2},\cdots,\boldsymbol{\alpha}_{i_r}\) 中加入任一向量 \(\boldsymbol{\alpha}_i\ (1\leqslant i\leqslant s)\)，则向量组 \(\boldsymbol{\alpha}_{i_1},\boldsymbol{\alpha}_{i_2},\cdots,\boldsymbol{\alpha}_{i_r},\boldsymbol{\alpha}_i\) 线性相关.

则称向量组 \(\boldsymbol{\alpha}_{i_1},\boldsymbol{\alpha}_{i_2},\cdots,\boldsymbol{\alpha}_{i_r}\) 是向量组 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_s\) 的极大线性无关组.

条件（2）的等价说法是：向量组中任一向量 \(\boldsymbol{\alpha}_i\ (1\leqslant i\leqslant s)\) 均可由 \(\boldsymbol{\alpha}_{i_1},\boldsymbol{\alpha}_{i_2},\cdots,\boldsymbol{\alpha}_{i_r}\) 线性表出.

向量组的极大无关组一般不唯一，但极大无关组的向量个数是一样的.只有一个零向量组成的向量组没有极大线性无关组，一个线性无关向量组的极大线性无关组就是该向量组本身.

向量组的极大线性无关组的向量个数称为向量组的秩，记为 \(r(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_s)\).

**定义** 设向量组（Ⅰ）\(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_s\)；（Ⅱ）\(\boldsymbol{\beta}_1,\boldsymbol{\beta}_2,\cdots,\boldsymbol{\beta}_t\).

若（Ⅰ）中的每个向量 \(\boldsymbol{\alpha}_i,i=1,2,\cdots,s\)，均可由（Ⅱ）线性表出，则称（Ⅰ）可由（Ⅱ）线性表出；若向量组（Ⅰ）、（Ⅱ）可以相互表出，则称向量组（Ⅰ）、（Ⅱ）是等价向量组，记成（Ⅰ）\(\cong\)（Ⅱ）.

向量组和它的极大线性无关组是等价向量组.

一个向量组中各极大无关组之间是等价向量组，且向量个数相同.

**定理 3.8** 如果向量组（Ⅰ）可由向量组（Ⅱ）线性表出，则 \(r(\mathrm{I})\leqslant r(\mathrm{II})\).

**推论** 如果向量组（Ⅰ）和（Ⅱ）等价，则 \(r(\mathrm{I})=r(\mathrm{II})\).

**例13** 向量组 \(\boldsymbol{\alpha}_1=(1,-1,2,4)^{\mathrm{T}},\boldsymbol{\alpha}_2=(0,3,1,2)^{\mathrm{T}},\boldsymbol{\alpha}_3=(3,0,7,14)^{\mathrm{T}},\boldsymbol{\alpha}_4=(1,-2,2,0)^{\mathrm{T}},\boldsymbol{\alpha}_5=(2,-1,5,2)^{\mathrm{T}}\) 的极大线性无关组是______.

**【分析】** 列向量作初等行变换化为阶梯形，有
\[
(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3,\boldsymbol{\alpha}_4,\boldsymbol{\alpha}_5)=
\begin{bmatrix}
1&0&3&1&2\\
-1&3&0&-2&-1\\
2&1&7&2&5\\
4&2&14&0&2
\end{bmatrix}\to
\begin{bmatrix}
1&0&3&1&2\\
0&1&1&0&1\\
0&0&0&1&2\\
0&0&0&0&0
\end{bmatrix}
\stackrel{\text{记}}{=}(\boldsymbol{\beta}_1,\boldsymbol{\beta}_2,\boldsymbol{\beta}_3,\boldsymbol{\beta}_4,\boldsymbol{\beta}_5)
\]
此时每行第1个非0数在第一，二，四列，故 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_4\) 是一个极大线性无关组.

**【注】** 由
\[
(3,1,0,0)^{\mathrm{T}}=3(1,0,0,0)^{\mathrm{T}}+(0,1,0,0)^{\mathrm{T}}
\]
\[
(2,1,2,0)^{\mathrm{T}}=(0,1,0,0)^{\mathrm{T}}+2(1,0,1,0)^{\mathrm{T}}
\]
即 \(\boldsymbol{\beta}_3=3\boldsymbol{\beta}_1+\boldsymbol{\beta}_2,\boldsymbol{\beta}_5=\boldsymbol{\beta}_2+2\boldsymbol{\beta}_4\)，故知 \(\boldsymbol{\alpha}_3=3\boldsymbol{\alpha}_1+\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_5=\boldsymbol{\alpha}_2+2\boldsymbol{\alpha}_4\).

于是用极大线性无关组 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_4\) 表示出 \(\boldsymbol{\alpha}_3\) 和 \(\boldsymbol{\alpha}_5\).

**例14** 向量组（Ⅰ）：\(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3\)；（Ⅱ）：\(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3,\boldsymbol{\alpha}_4\)；（Ⅲ）：\(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3,\boldsymbol{\alpha}_5\).若秩 \(r(\mathrm{I})=r(\mathrm{II})=3,r(\mathrm{III})=4\).则 \(r(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3,\boldsymbol{\alpha}_4+\boldsymbol{\alpha}_5)=\) ______.

**【分析】** 由 \(r(\mathrm{I})=3\) 知 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3\) 线性无关，

\(r(\mathrm{II})=3\) 知 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3,\boldsymbol{\alpha}_4\) 线性相关，

故 \(\boldsymbol{\alpha}_4\) 可由 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3\) 线性表出，那么向量组 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3,\boldsymbol{\alpha}_4+\boldsymbol{\alpha}_5\) 与 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3,\boldsymbol{\alpha}_5\) 可以互相线性表示，即向量组等价.` },
      { p: 255, md: R`所以 \(r(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3,\boldsymbol{\alpha}_4+\boldsymbol{\alpha}_5)=4\).

或设 \(\boldsymbol{\alpha}_4=k_1\boldsymbol{\alpha}_1+k_2\boldsymbol{\alpha}_2+k_3\boldsymbol{\alpha}_3\)，则
\[
(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3,\boldsymbol{\alpha}_4+\boldsymbol{\alpha}_5)
=(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3,k_1\boldsymbol{\alpha}_1+k_2\boldsymbol{\alpha}_2+k_3\boldsymbol{\alpha}_3+\boldsymbol{\alpha}_5)
\]
\[
=(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3,\boldsymbol{\alpha}_5)
\begin{bmatrix}
1&0&0&k_1\\
0&1&0&k_2\\
0&0&1&k_3\\
0&0&0&1
\end{bmatrix}
\]
由于矩阵
\[
\begin{bmatrix}
1&0&0&k_1\\
0&1&0&k_2\\
0&0&1&k_3\\
0&0&0&1
\end{bmatrix}
\]
可逆，故 \(r(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3,\boldsymbol{\alpha}_4+\boldsymbol{\alpha}_5)=r(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3,\boldsymbol{\alpha}_5)=4\).

**练习 3.2**

（1）已知向量组 \(\boldsymbol{\alpha}_1=(1,2,3,4),\boldsymbol{\alpha}_2=(2,3,4,5),\boldsymbol{\alpha}_3=(3,4,5,6),\boldsymbol{\alpha}_4=(4,5,6,7)\)，则该向量组的秩是______.

（2）已知向量组 \(\boldsymbol{\alpha}_1=(1,-1,0,5)^{\mathrm{T}},\boldsymbol{\alpha}_2=(2,0,1,4)^{\mathrm{T}},\boldsymbol{\alpha}_3=(3,1,2,3)^{\mathrm{T}},\boldsymbol{\alpha}_4=(4,2,3,a)^{\mathrm{T}}\)，其中 \(a\) 是参数.求该向量组的秩与一个极大线性无关组，并将其余向量用该极大线性无关组线性表示.

（练习答案在297页）

### 2. 矩阵的秩

**定义** 在 \(m\times n\) 矩阵 \(\boldsymbol{A}\) 中，任取 \(k\) 行与 \(k\) 列（\(k\leqslant m,k\leqslant n\)），位于这些行与列的交叉点上的 \(k^2\) 个元素按其在原来矩阵 \(\boldsymbol{A}\) 中的次序可构成一个 \(k\) 阶行列式，称其为矩阵 \(\boldsymbol{A}\) 的一个 \(k\) 阶子式.

**定义（矩阵的秩）** 设 \(\boldsymbol{A}\) 是 \(m\times n\) 矩阵，若 \(\boldsymbol{A}\) 中存在 \(r\) 阶子式不等于零，\(r\) 阶以上子式均等于零，则称矩阵 \(\boldsymbol{A}\) 的秩为 \(r\)，记成 \(r(\boldsymbol{A})\)，零矩阵的秩规定为0.

秩 \(r(\boldsymbol{A})=r\Leftrightarrow\) 矩阵 \(\boldsymbol{A}\) 中非零子式的最高阶数是 \(r\).

\(r(\boldsymbol{A})<r\Leftrightarrow \boldsymbol{A}\) 中每一个 \(r\) 阶子式全为0.

\(r(\boldsymbol{A})\geqslant r\Leftrightarrow \boldsymbol{A}\) 中有 \(r\) 阶子式不为0.

特别地，\(r(\boldsymbol{A})=0\Leftrightarrow \boldsymbol{A}=\boldsymbol{O}\)，

\(\boldsymbol{A}\neq\boldsymbol{O}\Leftrightarrow r(\boldsymbol{A})\geqslant 1\).

若 \(\boldsymbol{A}\) 是 \(n\) 阶矩阵，\(r(\boldsymbol{A})=n\Leftrightarrow |\boldsymbol{A}|\neq 0\Leftrightarrow \boldsymbol{A}\) 可逆.

\(r(\boldsymbol{A})<n\Leftrightarrow |\boldsymbol{A}|=0\Leftrightarrow \boldsymbol{A}\) 不可逆.

若 \(\boldsymbol{A}\) 是 \(m\times n\) 矩阵，则 \(r(\boldsymbol{A})\leqslant \min(m,n)\).

**定理 3.9** 经初等变换矩阵的秩不变.

**矩阵秩的公式**
\[
r(\boldsymbol{A})=r(\boldsymbol{A}^{\mathrm{T}});\ r(\boldsymbol{A}^{\mathrm{T}}\boldsymbol{A})=r(\boldsymbol{A}).
\]` },
      { p: 256, md: R`当 \(k\neq 0\) 时，\(r(k\boldsymbol{A})=r(\boldsymbol{A})\)；\(r(\boldsymbol{A}+\boldsymbol{B})\leqslant r(\boldsymbol{A})+r(\boldsymbol{B})\).

\(r(\boldsymbol{AB})\leqslant\min(r(\boldsymbol{A}),r(\boldsymbol{B}))\)，\(\max(r(\boldsymbol{A}),r(\boldsymbol{B}))\leqslant r(\boldsymbol{A},\boldsymbol{B})\leqslant r(\boldsymbol{A})+r(\boldsymbol{B})\).

若 \(\boldsymbol{A}\) 可逆，则 \(r(\boldsymbol{AB})=r(\boldsymbol{B}),r(\boldsymbol{BA})=r(\boldsymbol{B})\).

若 \(\boldsymbol{A}\) 是 \(m\times n\) 矩阵，\(\boldsymbol{B}\) 是 \(n\times s\) 矩阵，\(\boldsymbol{AB}=\boldsymbol{O}\)，则 \(r(\boldsymbol{A})+r(\boldsymbol{B})\leqslant n\).

分块矩阵 \(r\begin{pmatrix}\boldsymbol{A}&\boldsymbol{O}\\\boldsymbol{O}&\boldsymbol{B}\end{pmatrix}=r(\boldsymbol{A})+r(\boldsymbol{B})\).

**定理 3.10（三秩相等）** 设 \(\boldsymbol{A}\) 是 \(m\times n\) 矩阵，将 \(\boldsymbol{A}\) 以行及列分块，得
\[
\boldsymbol{A}_{m\times n}=
\begin{bmatrix}
\boldsymbol{\alpha}_1\\
\boldsymbol{\alpha}_2\\
\vdots\\
\boldsymbol{\alpha}_m
\end{bmatrix}
=[\boldsymbol{\beta}_1,\boldsymbol{\beta}_2,\cdots,\boldsymbol{\beta}_n]
\]
则有 \(r(\boldsymbol{A})\)（矩阵 \(\boldsymbol{A}\) 的秩）\(=r(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_m)\)（\(\boldsymbol{A}\) 的行秩）\(=r(\boldsymbol{\beta}_1,\boldsymbol{\beta}_2,\cdots,\boldsymbol{\beta}_n)\)（\(\boldsymbol{A}\) 的列秩）.

例如：矩阵
\[
\boldsymbol{A}=
\begin{bmatrix}
1&2&-1&3\\
0&0&1&5\\
0&0&0&0
\end{bmatrix}.
\]
\(\boldsymbol{A}\) 中有二阶子式
\[
\begin{vmatrix}
1&-1\\
0&1
\end{vmatrix}\neq 0,
\]
\(\boldsymbol{A}\) 中三阶子式
\[
\begin{vmatrix}
1&2&-1\\
0&0&1\\
0&0&0
\end{vmatrix},
\begin{vmatrix}
1&2&3\\
0&0&5\\
0&0&0
\end{vmatrix},
\begin{vmatrix}
2&-1&3\\
0&1&5\\
0&0&0
\end{vmatrix}
\]
全为0.故 \(r(\boldsymbol{A})=2\).

\(\boldsymbol{A}\) 的列向量
\[
\boldsymbol{\alpha}_1=\begin{bmatrix}1\\0\\0\end{bmatrix},\boldsymbol{\alpha}_2=\begin{bmatrix}2\\0\\0\end{bmatrix},\boldsymbol{\alpha}_3=\begin{bmatrix}-1\\1\\0\end{bmatrix},\boldsymbol{\alpha}_4=\begin{bmatrix}3\\5\\0\end{bmatrix},
\]
极大无关组是 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_3\)，

故 \(\boldsymbol{A}\) 的列秩 \(r(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3,\boldsymbol{\alpha}_4)=2\).

\(\boldsymbol{A}\) 的行向量组 \(\boldsymbol{\beta}_1=(1,2,-1,3),\boldsymbol{\beta}_2=(0,0,1,5),\boldsymbol{\beta}_3=(0,0,0,0)\)，极大无关组是 \(\boldsymbol{\beta}_1,\boldsymbol{\beta}_2\)，

故 \(\boldsymbol{A}\) 的行秩 \(r(\boldsymbol{\beta}_1,\boldsymbol{\beta}_2,\boldsymbol{\beta}_3)=2\).

**例15** （1）已知矩阵
\[
\boldsymbol{A}=
\begin{bmatrix}
1&1&2&a&3\\
2&3&5&5&4\\
2&2&3&1&4\\
1&0&1&1&5
\end{bmatrix}
\]
的秩 \(r(\boldsymbol{A})=3\)，则 \(a=\) ______.

（2）设
\[
\boldsymbol{A}=
\begin{bmatrix}
k&1&1&1\\
1&k&1&1\\
1&1&k&1\\
1&1&1&k
\end{bmatrix},
\]
且秩 \(r(\boldsymbol{A})=3\)，则 \(k=\) ______.

**【分析】** （1）经初等变换矩阵的秩不变，对矩阵 \(\boldsymbol{A}\) 作初等变换
\[
\boldsymbol{A}=
\begin{bmatrix}
1&1&2&a&3\\
2&3&5&5&4\\
2&2&3&1&4\\
1&0&1&1&5
\end{bmatrix}\to
\begin{bmatrix}
1&0&1&1&5\\
2&3&5&5&4\\
2&2&3&1&4\\
1&1&2&a&3
\end{bmatrix}\to
\begin{bmatrix}
1&0&1&1&5\\
0&3&3&3&-6\\
0&2&1&-1&-6\\
0&1&1&a-1&-2
\end{bmatrix}
\]
\[
\to
\begin{bmatrix}
1&0&1&1&5\\
0&1&1&1&-2\\
0&0&1&3&2\\
0&0&0&a-2&0
\end{bmatrix}
\]
可见 \(a=2\) 时，秩 \(r(\boldsymbol{A})=3\).` },
      { p: 257, md: R`（2）由
\[
|\boldsymbol{A}|=
\begin{vmatrix}
k&1&1&1\\
1&k&1&1\\
1&1&k&1\\
1&1&1&k
\end{vmatrix}
=(k+3)(k-1)^3
\]
若 \(k=1\) 知 \(r(\boldsymbol{A})=1\)，故 \(k=-3\).

**例16** 已知 \(\boldsymbol{A}\) 是 \(m\times n\) 矩阵，\(\boldsymbol{B}\) 是 \(n\times m\) 矩阵，且 \(\boldsymbol{AB}=\boldsymbol{E}\).证明 \(r(\boldsymbol{A})=r(\boldsymbol{B})=m\).

**【证】** 因 \(\boldsymbol{AB}=\boldsymbol{E}\)（\(m\) 阶）

有
\[
m=r(\boldsymbol{E})=r(\boldsymbol{AB})\leqslant r(\boldsymbol{A})\qquad(1)
\]
又 \(\boldsymbol{A}\) 是 \(m\times n\) 矩阵，有 \(r(\boldsymbol{A})\leqslant m\qquad(2)\)

比较（1）（2），得 \(r(\boldsymbol{A})=m\)

类似地，\(r(\boldsymbol{B})=m\).

**例17** 已知向量组

（Ⅰ）\(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_s\) 和（Ⅱ）\(\boldsymbol{\beta}_1,\boldsymbol{\beta}_2,\cdots,\boldsymbol{\beta}_t\)

若（Ⅰ）可由（Ⅱ）线性表示.证明

（1）\(r(\mathrm{I})\leqslant r(\mathrm{II})\).

（2）若 \(s>t\)，则（Ⅰ）必线性相关.

**【证】** （1）因（Ⅰ）可由（Ⅱ）线性表出，

设
\[
\boldsymbol{\alpha}_1=c_{11}\boldsymbol{\beta}_1+c_{21}\boldsymbol{\beta}_2+\cdots+c_{t1}\boldsymbol{\beta}_t
\]
\[
\cdots
\]
\[
\boldsymbol{\alpha}_s=c_{1s}\boldsymbol{\beta}_1+c_{2s}\boldsymbol{\beta}_2+\cdots+c_{ts}\boldsymbol{\beta}_t
\]
即存在矩阵 \(\boldsymbol{C}=[c_{ij}]\)，使
\[
(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_s)=(\boldsymbol{\beta}_1,\boldsymbol{\beta}_2,\cdots,\boldsymbol{\beta}_t)\boldsymbol{C}
\]
那么
\[
r(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_s)=r[(\boldsymbol{\beta}_1,\boldsymbol{\beta}_2,\cdots,\boldsymbol{\beta}_t)\boldsymbol{C}]
\]
\[
\leqslant r(\boldsymbol{\beta}_1,\boldsymbol{\beta}_2,\cdots,\boldsymbol{\beta}_t)
\]
即 \(r(\mathrm{I})\leqslant r(\mathrm{II})\).

（2）若 \(s>t\)，则
\[
r(\mathrm{I})\leqslant r(\mathrm{II})=r(\boldsymbol{\beta}_1,\boldsymbol{\beta}_2,\cdots,\boldsymbol{\beta}_t)\leqslant t<s
\]
\(\therefore \boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_s\) 必线性相关.

**练习 3.3**

（1）设 \(\boldsymbol{A},\boldsymbol{B}\) 都是 \(n\) 阶非零矩阵，且 \(\boldsymbol{AB}=\boldsymbol{O}\)，则 \(\boldsymbol{A}\) 和 \(\boldsymbol{B}\) 的秩

（A）必有一个等于0.

（B）都小于 \(n\).

（C）一个小于 \(n\)，一个等于 \(n\).

（D）都等于 \(n\).

（2）设 \(\boldsymbol{A}\) 是秩为 \(r\) 的 \(m\times n\) 矩阵，\(\boldsymbol{C}\) 是 \(n\) 阶可逆矩阵，\(\boldsymbol{B}=\boldsymbol{AC}\).若 \(r(\boldsymbol{B})=r_1\)，则

（A）\(r=r_1\).

（B）\(r<r_1\).

（C）\(r>r_1\).

（D）\(r\) 和 \(r_1\) 关系与 \(\boldsymbol{C}\) 有关.

（练习答案在297页）` },
      { p: 258, md: R`## 四、正交规范化、正交矩阵

### 1. 内积

**定义** 设有 \(n\) 维向量 \(\boldsymbol{\alpha}=(a_1,a_2,\cdots,a_n)^{\mathrm{T}},\boldsymbol{\beta}=(b_1,b_2,\cdots,b_n)^{\mathrm{T}}\)，令
\[
(\boldsymbol{\alpha},\boldsymbol{\beta})=\boldsymbol{\alpha}^{\mathrm{T}}\boldsymbol{\beta}=\boldsymbol{\beta}^{\mathrm{T}}\boldsymbol{\alpha}=\sum_{i=1}^{n}a_ib_i
\]
则称 \((\boldsymbol{\alpha},\boldsymbol{\beta})\) 为向量 \(\boldsymbol{\alpha},\boldsymbol{\beta}\) 的内积.

内积满足下列性质

（1）\((\boldsymbol{\alpha},\boldsymbol{\beta})=(\boldsymbol{\beta},\boldsymbol{\alpha})\)（对称性）；

（2）\(\lambda(\boldsymbol{\alpha},\boldsymbol{\beta})=(\lambda\boldsymbol{\alpha},\boldsymbol{\beta})=(\boldsymbol{\alpha},\lambda\boldsymbol{\beta})\)（线性性）；

（3）\((\boldsymbol{\alpha}+\boldsymbol{\beta},\boldsymbol{\gamma})=(\boldsymbol{\alpha},\boldsymbol{\gamma})+(\boldsymbol{\beta},\boldsymbol{\gamma})\)（线性性）；

（4）\((\boldsymbol{\alpha},\boldsymbol{\alpha})\geqslant 0\)，等号成立当且仅当 \(\boldsymbol{\alpha}=\boldsymbol{0}\)（正定性）.

**定义** 设
\[
|\boldsymbol{\alpha}|=\sqrt{(\boldsymbol{\alpha},\boldsymbol{\alpha})}=\sqrt{a_1^2+a_2^2+\cdots+a_n^2}
\]
称为向量 \(\boldsymbol{\alpha}=(a_1,a_2,\cdots,a_n)^{\mathrm{T}}\) 的模（长度），\(|\boldsymbol{\alpha}|=1\) 时称 \(\boldsymbol{\alpha}\) 为单位向量.

**定义** 两个向量 \(\boldsymbol{\alpha},\boldsymbol{\beta}\) 夹角的余弦为
\[
\cos\widehat{(\boldsymbol{\alpha},\boldsymbol{\beta})}
=\frac{(\boldsymbol{\alpha},\boldsymbol{\beta})}{|\boldsymbol{\alpha}||\boldsymbol{\beta}|}.
\]
当 \((\boldsymbol{\alpha},\boldsymbol{\beta})=0\) 时，则 \(\cos\widehat{(\boldsymbol{\alpha},\boldsymbol{\beta})}=0,\widehat{(\boldsymbol{\alpha},\boldsymbol{\beta})}=\frac{\pi}{2}\)，此时称向量 \(\boldsymbol{\alpha},\boldsymbol{\beta}\) 正交.

### 2. 施密特正交化

**施密特（Schmidt）标准正交化方法**

设向量组 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3\) 线性无关，其标准正交化的方法如下（又称正交规范化）：

先正交化，取
\[
\begin{aligned}
\boldsymbol{\beta}_1&=\boldsymbol{\alpha}_1,\\
\boldsymbol{\beta}_2&=\boldsymbol{\alpha}_2-\frac{(\boldsymbol{\alpha}_2,\boldsymbol{\beta}_1)}{(\boldsymbol{\beta}_1,\boldsymbol{\beta}_1)}\boldsymbol{\beta}_1,\\
\boldsymbol{\beta}_3&=\boldsymbol{\alpha}_3-\frac{(\boldsymbol{\alpha}_3,\boldsymbol{\beta}_1)}{(\boldsymbol{\beta}_1,\boldsymbol{\beta}_1)}\boldsymbol{\beta}_1-\frac{(\boldsymbol{\alpha}_3,\boldsymbol{\beta}_2)}{(\boldsymbol{\beta}_2,\boldsymbol{\beta}_2)}\boldsymbol{\beta}_2,
\end{aligned}
\]
则 \(\boldsymbol{\beta}_1,\boldsymbol{\beta}_2,\boldsymbol{\beta}_3\) 是正交向量组.

再将 \(\boldsymbol{\beta}_1,\boldsymbol{\beta}_2,\boldsymbol{\beta}_3\) 单位化.取
\[
\boldsymbol{\eta}_1=\frac{\boldsymbol{\beta}_1}{|\boldsymbol{\beta}_1|},\boldsymbol{\eta}_2=\frac{\boldsymbol{\beta}_2}{|\boldsymbol{\beta}_2|},\boldsymbol{\eta}_3=\frac{\boldsymbol{\beta}_3}{|\boldsymbol{\beta}_3|},
\]
则 \(\boldsymbol{\eta}_1,\boldsymbol{\eta}_2,\boldsymbol{\eta}_3\) 是标准正交向量组，即有
\[
(\boldsymbol{\eta}_i,\boldsymbol{\eta}_j)=
\begin{cases}
0,&i\neq j\\
1,&i=j
\end{cases}.
\]

### 3. 正交矩阵

**定义** 设 \(\boldsymbol{A}\) 为 \(n\) 阶矩阵，若 \(\boldsymbol{AA}^{\mathrm{T}}=\boldsymbol{A}^{\mathrm{T}}\boldsymbol{A}=\boldsymbol{E}\)，则称 \(\boldsymbol{A}\) 为正交矩阵.

**定理 3.11** 如 \(\boldsymbol{A}\) 是正交矩阵 \(\Leftrightarrow \boldsymbol{A}^{\mathrm{T}}=\boldsymbol{A}^{-1}\)

\(\Leftrightarrow \boldsymbol{A}\) 的行（列）向量都是单位向量且两两正交

**例18** 与向量 \(\boldsymbol{\alpha}_1=(1,3,2)^{\mathrm{T}},\boldsymbol{\alpha}_2=(1,1,-2)^{\mathrm{T}}\) 都正交的单位向量是______.` },
      { p: 259, md: R`**【分析】** 设 \(\boldsymbol{\alpha}=(x_1,x_2,x_3)^{\mathrm{T}}\) 与 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2\) 都正交，则
\[
\begin{cases}
(\boldsymbol{\alpha},\boldsymbol{\alpha}_1)=x_1+3x_2+2x_3=0\\
(\boldsymbol{\alpha},\boldsymbol{\alpha}_2)=x_1+x_2-2x_3=0
\end{cases}
\]
\[
\begin{bmatrix}
1&3&2\\
1&1&-2
\end{bmatrix}\to
\begin{bmatrix}
1&3&2\\
0&1&2
\end{bmatrix}\to
\begin{bmatrix}
1&0&-4\\
0&1&2
\end{bmatrix}
\]
得 \(\boldsymbol{\alpha}=(4,-2,1)^{\mathrm{T}}\)，再单位化有 \(\pm\frac{1}{\sqrt{21}}(4,-2,1)^{\mathrm{T}}\) 为所求.

**例19** 已知 \(n\) 维向量 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_s\) 是两两正交的非零向量.

证明 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_s\) 线性无关.

**【证】** 设
\[
k_1\boldsymbol{\alpha}_1+k_2\boldsymbol{\alpha}_2+\cdots+k_s\boldsymbol{\alpha}_s=\boldsymbol{0}
\qquad(1)
\]
由于 \(\boldsymbol{\alpha}_i,\boldsymbol{\alpha}_j\) 两两正交，即 \(\boldsymbol{\alpha}_i^{\mathrm{T}}\boldsymbol{\alpha}_j=0\)，用 \(\boldsymbol{\alpha}_i^{\mathrm{T}}\) 左乘（1）式两端，得
\[
k_i\boldsymbol{\alpha}_i^{\mathrm{T}}\boldsymbol{\alpha}_i=0
\]
因 \(\boldsymbol{\alpha}_i\neq\boldsymbol{0}\)，故 \(\boldsymbol{\alpha}_i^{\mathrm{T}}\boldsymbol{\alpha}_i\neq 0\)，从而必有 \(k_i=0\).

类似可证 \(k_2=0,\cdots,k_s=0\).于是向量组 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_s\) 线性无关.

**例20** 已知 \(\boldsymbol{\alpha}_1=(1,1,1)^{\mathrm{T}},\boldsymbol{\alpha}_2=(-1,0,-1)^{\mathrm{T}},\boldsymbol{\alpha}_3=(-1,2,3)^{\mathrm{T}}\)，试用施密特正交化将这组向量正交规范化.

**【解】** 先正交化
\[
\boldsymbol{\beta}_1=\boldsymbol{\alpha}_1=
\begin{bmatrix}
1\\
1\\
1
\end{bmatrix}
\]
\[
\boldsymbol{\beta}_2=\boldsymbol{\alpha}_2-\frac{(\boldsymbol{\alpha}_2,\boldsymbol{\beta}_1)}{(\boldsymbol{\beta}_1,\boldsymbol{\beta}_1)}\boldsymbol{\beta}_1
=
\begin{bmatrix}
-1\\
0\\
-1
\end{bmatrix}
+\frac{2}{3}
\begin{bmatrix}
1\\
1\\
1
\end{bmatrix}
=\frac{1}{3}
\begin{bmatrix}
-1\\
2\\
-1
\end{bmatrix}
\]
\[
\boldsymbol{\beta}_3=\boldsymbol{\alpha}_3-\frac{(\boldsymbol{\alpha}_3,\boldsymbol{\beta}_1)}{(\boldsymbol{\beta}_1,\boldsymbol{\beta}_1)}\boldsymbol{\beta}_1-\frac{(\boldsymbol{\alpha}_3,\boldsymbol{\beta}_2)}{(\boldsymbol{\beta}_2,\boldsymbol{\beta}_2)}\boldsymbol{\beta}_2
=
\begin{bmatrix}
-1\\
2\\
3
\end{bmatrix}
-\frac{4}{3}
\begin{bmatrix}
1\\
1\\
1
\end{bmatrix}
-\frac{1}{3}
\begin{bmatrix}
-1\\
2\\
-1
\end{bmatrix}
=
\begin{bmatrix}
-2\\
0\\
2
\end{bmatrix}
\]
再单位化
\[
\boldsymbol{\gamma}_1=\frac{1}{\sqrt{3}}
\begin{bmatrix}
1\\
1\\
1
\end{bmatrix},
\boldsymbol{\gamma}_2=\frac{1}{\sqrt{6}}
\begin{bmatrix}
-1\\
2\\
-1
\end{bmatrix},
\boldsymbol{\gamma}_3=\frac{1}{\sqrt{2}}
\begin{bmatrix}
-1\\
0\\
1
\end{bmatrix}.
\]` },
    ],
    quiz: [{"q": "向量组 $\\alpha_1,\\cdots,\\alpha_s$ 线性相关等价于", "options": ["存在不全为零的数 $k_i$ 使 $\\sum k_i\\alpha_i=0$", "全为零时 $\\sum k_i\\alpha_i=0$", "任意 $k_i$ 使 $\\sum k_i\\alpha_i=0$", "向量组中只有一个向量"], "answer": 0, "explain": "线性相关的定义。"}, {"q": "向量组的秩等于", "options": ["最大线性无关组所含向量个数", "向量个数", "矩阵的阶数", "零向量个数"], "answer": 0, "explain": "秩的定义。"}, {"q": "若向量组线性无关，则其任一部分组", "options": ["线性无关", "线性相关", "可能相关", "必含零向量"], "answer": 0, "explain": "无关组的任何部分组都无关。"}, {"q": "$n$ 个 $n$ 维向量线性无关的充要条件是", "options": ["由它们构成的矩阵行列式非零", "矩阵秩小于 $n$", "存在零向量", "向量两两正交"], "answer": 0, "explain": "方阵列向量无关 ⇔ 行列式非零。"}]
  };
})();
