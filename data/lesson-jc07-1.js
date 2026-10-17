window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["jc07_s0"] = {
    id: "jc07_s0",
    ch: "第一章 行列式",
    title: "第一章 行列式",
    book: "李永乐《数学复习全书·基础篇》",
    pages: [216, 227],
    img: "assets/img/jichu",
    content: [
      { p: 216, md: R`# 第一章 行列式

**本章考点**

- 行列式的概念和基本性质 行列式按行（列）展开定理
- 线性方程组的克拉默（Cramer）法则

## 一、行列式的概念

行列式是一个数，它是不同行不同列元素乘积的代数和.

例如，大家所熟悉的三阶行列式

\[
\begin{vmatrix}
a_1&a_2&a_3\\
b_1&b_2&b_3\\
c_1&c_2&c_3
\end{vmatrix}
=a_1b_2c_3+a_2b_3c_1+a_3b_1c_2-a_3b_2c_1-a_2b_1c_3-a_1b_3c_2.
\]

其每一项都是3个数的乘积，从字母看 \(a,b,c\) 各有一个，说明这三个数一个在第一行，一个在第二行，一个在第三行；而从下标看数字 \(1,2,3\) 各有一个，说明这三个数分别来自第一列，第二列和第三列.

在这六项中，有3项带“+”号，3项带“-”号，大家可以用对角线方法来记忆：

当行列式的元素中有较多的“0”时，用对角线法来计算行列式的值是简便的.

例如，

\[
\begin{vmatrix}
0&1&2\\
3&0&4\\
5&6&0
\end{vmatrix}
=0\times0\times0+1\times4\times5+2\times3\times6-2\times0\times5-1\times3\times0-0\times4\times6=56.
\]

\[
\begin{vmatrix}
1&0&-1\\
2&-2&1\\
0&-3&4
\end{vmatrix}
=-8+0+6-0-0-(-3)=1.
\]

一般地，我们应当用行列式的性质将其恒等变形化简，再通过展开公式（用降阶法）来计算行列式的值.

关于 \(n\) 阶行列式的概念大家要有一个简单了解：` },
      { p: 217, md: R`### n 阶行列式

\[
\begin{vmatrix}
a_{11}&a_{12}&\cdots&a_{1n}\\
a_{21}&a_{22}&\cdots&a_{2n}\\
\vdots&\vdots&&\vdots\\
a_{n1}&a_{n2}&\cdots&a_{nn}
\end{vmatrix}
\]

是所有取自不同行不同列的 \(n\) 个元素的乘积

\[
a_{1j_1}a_{2j_2}\cdots a_{nj_n}
\]

的代数和，这里 \(j_1j_2\cdots j_n\) 是 \(1,2,\cdots,n\) 的一个排列. 当 \(j_1j_2\cdots j_n\) 是偶排列时，该项的前面带正号；当 \(j_1j_2\cdots j_n\) 是奇排列时，该项的前面带负号，即

\[
\begin{vmatrix}
a_{11}&a_{12}&\cdots&a_{1n}\\
a_{21}&a_{22}&\cdots&a_{2n}\\
\vdots&\vdots&&\vdots\\
a_{n1}&a_{n2}&\cdots&a_{nn}
\end{vmatrix}
=\sum_{j_1j_2\cdots j_n}(-1)^{\tau(j_1j_2\cdots j_n)}a_{1j_1}a_{2j_2}\cdots a_{nj_n}
\tag{1}
\]

这里 \(\sum_{j_1j_2\cdots j_n}\) 表示对所有 \(n\) 阶排列求和. 式（1）称为 \(n\) 阶行列式的完全展开式.

**【注】** 所谓排列是指由 \(n\) 个数 \(1,2,\cdots,n\) 所构成的一个有序数组，通常用 \(j_1,j_2,\cdots,j_n\) 表示 \(n\) 阶排列，显然共有 \(n!\) 个 \(n\) 阶排列.

一个排列中，如果一个大的数排在小的数之前，就称这两个数构成一个逆序. 一个排列的逆序总数称为这个排列的逆序数，用 \(\tau(j_1j_2\cdots j_n)\) 表示排列 \(j_1j_2\cdots j_n\) 的逆序数.

如果一个排列的逆序数是偶数，则称这个排列为偶排列，否则称为奇排列.

例如，\(a_{12}a_{24}a_{33}a_{41}\) 是四阶行列式中的一项，那么该项所带的符号由 \(\tau(2431)=1+2+1=4\)（即2有1个逆序，4有2个逆序，3有1个逆序）是偶排列，故取正号.

又如，\(a_{13}a_{25}a_{31}a_{42}a_{54}\) 是五阶行列式中的一项，由 \(\tau(35124)=2+3=5\) 是奇排列，故在行列式中应取负号.

**例1** 4阶行列式

\[
|A|=\begin{vmatrix}
0&0&0&a\\
0&0&b&0\\
0&c&0&0\\
d&0&0&0
\end{vmatrix}
=\underline{\qquad}.
\]

**【分析】** 因为行列式 \(|A|\) 一般项为 \(a_{1j_1}a_{2j_2}a_{3j_3}a_{4j_4}\)，由于有较多的 \(a_{ij}=0\)，易分析只有 \(a_{14}a_{23}a_{32}a_{41}\) 这一项非0，而逆序数 \(\tau(4321)=3+2+1=6\)，所以行列式 \(|A|=abcd\).

**【注】** 这也提示我们，三阶行列式的对角线法到四阶行列式失效. 今后计算四阶行列式必须用展开公式法.

**例2** （1）写出4阶行列式中含有因子 \(a_{12}a_{34}\) 且带负号的项\_\_\_\_\_\_\_\_.

（2）多项式

\[
f(x)=\begin{vmatrix}
x&2x&1&0\\
2&x-1&1&3\\
1&2&x&-1\\
x&5&6&2
\end{vmatrix}
\]

中，\(x^3\) 的系数为\_\_\_\_\_\_\_\_.

**【分析】** （1）一般项：\(a_{1j_1}a_{2j_2}a_{3j_3}a_{4j_4}\)，\(j_1j_2j_3j_4\) 是1到4的排列. 现 \(j_1=2,j_3=4\). 于是 \(j_2j_4\) 只能取自1和3，` },
      { p: 218, md: R`\(\tau(2143)=1+1\) 偶排列

\(\tau(2341)=1+1+1\) 奇排列

\(\therefore\) 仅 \(a_{12}a_{23}a_{34}a_{41}\) 为所求.

（2）不同行不同列元素乘积的代数和.

若 \(x^3\) 中的 \(x\) 出现 \(a_{1j}\)，则只有两种可能：\(a_{11}a_{22}a_{33}a_{44}\) 和 \(a_{12}a_{24}a_{33}a_{41}\)；若 \(x^3\) 中的 \(x\) 不出现 \(a_{1j}\)，则只有 \(a_{14}a_{22}a_{33}a_{41}\) 一项. 因 \(a_{14}=0\)，故只有两项出现 \(x^3\).

由 \(\tau(1234)=0,\tau(2431)=4\)，均为偶排列，带正号，

即有 \(x(x-1)x\cdot2\) 和 \(2x\cdot3\cdot x\cdot x\) 含 \(x^3\)

\(\therefore x^3\) 的系数为8.

## 二、行列式的性质

记

\[
|A|=\begin{vmatrix}
a_{11}&a_{12}&\cdots&a_{1n}\\
a_{21}&a_{22}&\cdots&a_{2n}\\
\vdots&\vdots&&\vdots\\
a_{n1}&a_{n2}&\cdots&a_{nn}
\end{vmatrix},
\quad
|A^T|=\begin{vmatrix}
a_{11}&a_{21}&\cdots&a_{n1}\\
a_{12}&a_{22}&\cdots&a_{n2}\\
\vdots&\vdots&&\vdots\\
a_{1n}&a_{2n}&\cdots&a_{nn}
\end{vmatrix},
\]

行列式 \(|A^T|\) 称为 \(|A|\) 的转置行列式.

**性质1** 经过转置行列式的值不变，即 \(|A^T|=|A|\).

\[
\begin{vmatrix}
a_1&a_2&a_3\\
b_1&b_2&b_3\\
c_1&c_2&c_3
\end{vmatrix}
=\begin{vmatrix}
a_1&b_1&c_1\\
a_2&b_2&c_2\\
a_3&b_3&c_3
\end{vmatrix}
\]

由此可知行列式行的性质与列的性质是对等的.（为方便说明，行列式都以3阶为例）.

**性质2** 两行（或列）互换位置，行列式的值变号.

特别地，两行（或列）相同，行列式的值为0.

**性质3** 某行（或列）如有公因子 \(k\)，则可把 \(k\) 提出行列式记号外.（亦即用数 \(k\) 乘行列式 \(|A|\) 等于用 \(k\) 乘它的某行（或列））.

特别地：（1）某行（或列）的元素全为0，行列式的值为0.

（2）若两行（或列）的元素对应成比例，行列式的值为0.

**性质4** 如果行列式某行（或列）是两个元素之和，则可把行列式拆成两个行列式之和.

\[
\begin{vmatrix}
a_1+b_1&a_2+b_2&a_3+b_3\\
c_1&c_2&c_3\\
d_1&d_2&d_3
\end{vmatrix}
=\begin{vmatrix}
a_1&a_2&a_3\\
c_1&c_2&c_3\\
d_1&d_2&d_3
\end{vmatrix}
+\begin{vmatrix}
b_1&b_2&b_3\\
c_1&c_2&c_3\\
d_1&d_2&d_3
\end{vmatrix}
\]

**性质5** 把某行（或列）的 \(k\) 倍加到另一行（或列），行列式的值不变.

\[
\begin{vmatrix}
a_1&a_2&a_3\\
b_1&b_2&b_3\\
c_1&c_2&c_3
\end{vmatrix}
=\begin{vmatrix}
a_1&a_2&a_3\\
b_1+ka_1&b_2+ka_2&b_3+ka_3\\
c_1&c_2&c_3
\end{vmatrix}
\]

**例3** 证明：任意的 \(a,b,c\) 恒有

\[
\begin{vmatrix}
1&1&1\\
a&b&c\\
b+c&c+a&a+b
\end{vmatrix}=0
\]

**【证】** 由行列式性质，有` },
      { p: 219, md: R`\[
\begin{vmatrix}
1&1&1\\
a&b&c\\
b+c&c+a&a+b
\end{vmatrix}
=\begin{vmatrix}
1&1&1\\
a&b&c\\
a+b+c&a+b+c&a+b+c
\end{vmatrix}
\quad(\text{第二行加到第三行})
\]

\[
=(a+b+c)\begin{vmatrix}
1&1&1\\
a&b&c\\
1&1&1
\end{vmatrix}
\quad(\text{第三行提公因式 }a+b+c)
\]

\[
=0.\quad(\text{两行相同行列式为 }0)
\]

**例4** 证明

\[
\begin{vmatrix}
b_1+c_1&c_1+a_1&a_1+b_1\\
b_2+c_2&c_2+a_2&a_2+b_2\\
b_3+c_3&c_3+a_3&a_3+b_3
\end{vmatrix}
=2\begin{vmatrix}
a_1&b_1&c_1\\
a_2&b_2&c_2\\
a_3&b_3&c_3
\end{vmatrix}.
\]

**【证】** **方法一** 把第二列、第三列均加至第一列，并提出第一列的公因式2，得

\[
\begin{vmatrix}
b_1+c_1&c_1+a_1&a_1+b_1\\
b_2+c_2&c_2+a_2&a_2+b_2\\
b_3+c_3&c_3+a_3&a_3+b_3
\end{vmatrix}
=2\begin{vmatrix}
a_1+b_1+c_1&c_1+a_1&a_1+b_1\\
a_2+b_2+c_2&c_2+a_2&a_2+b_2\\
a_3+b_3+c_3&c_3+a_3&a_3+b_3
\end{vmatrix}
\]

\[
=2\begin{vmatrix}
a_1+b_1+c_1&-b_1&-c_1\\
a_2+b_2+c_2&-b_2&-c_2\\
a_3+b_3+c_3&-b_3&-c_3
\end{vmatrix}
\quad(\text{把第一列的 }-1\text{ 倍分别加至第二列和第三列})
\]

\[
=2\begin{vmatrix}
a_1&-b_1&-c_1\\
a_2&-b_2&-c_2\\
a_3&-b_3&-c_3
\end{vmatrix}
\quad(\text{把第二列、第三列均加至第一列})
\]

\[
=2\begin{vmatrix}
a_1&b_1&c_1\\
a_2&b_2&c_2\\
a_3&b_3&c_3
\end{vmatrix}.
\quad(\text{把第二列、第三列分别提出公因数 }-1)
\]

**【注】** 倍加性质是行列式计算中常用的.

**方法二** 本题也可用一些同学不太熟悉的拆开（性质4）来处理：由于行列式每一列都是2个数的和，那么用拆开性质左端的行列式可表示成8个行列式之和，但因两列相等行列式的值为0，所以这里有6个行列式的值为0.

例如，当第一列选 \(\begin{pmatrix}b_1\\b_2\\b_3\end{pmatrix}\) 时，若第二列选 \(\begin{pmatrix}a_1\\a_2\\a_3\end{pmatrix}\)，则第三列不论如何选择，其行列式的值必为0. 故

\[
\begin{vmatrix}
b_1+c_1&c_1+a_1&a_1+b_1\\
b_2+c_2&c_2+a_2&a_2+b_2\\
b_3+c_3&c_3+a_3&a_3+b_3
\end{vmatrix}
=\begin{vmatrix}
b_1&c_1&a_1\\
b_2&c_2&a_2\\
b_3&c_3&a_3
\end{vmatrix}
+\begin{vmatrix}
c_1&a_1&b_1\\
c_2&a_2&b_2\\
c_3&a_3&b_3
\end{vmatrix}
\]

\[
\stackrel{*}{=}
\begin{vmatrix}
a_1&b_1&c_1\\
a_2&b_2&c_2\\
a_3&b_3&c_3
\end{vmatrix}
+\begin{vmatrix}
a_1&b_1&c_1\\
a_2&b_2&c_2\\
a_3&b_3&c_3
\end{vmatrix}
=2\begin{vmatrix}
a_1&b_1&c_1\\
a_2&b_2&c_2\\
a_3&b_3&c_3
\end{vmatrix}.
\]

* 前者先一、三两列互换，然后再二、三列互换；后者先一、二两列互换，然后再二、三列互换.` },
      { p: 220, md: R`**例5** 证明

\[
D=\begin{vmatrix}
0&a_{12}&a_{13}\\
-a_{12}&0&a_{23}\\
-a_{13}&-a_{23}&0
\end{vmatrix}=0.
\]

**【证】** 由行列式性质

\[
D=\begin{vmatrix}
0&-a_{12}&-a_{13}\\
a_{12}&0&-a_{23}\\
a_{13}&a_{23}&0
\end{vmatrix}
\quad(\text{经转置行列式值不变})
\]

\[
=(-1)^3\begin{vmatrix}
0&a_{12}&a_{13}\\
-a_{12}&0&a_{23}\\
-a_{13}&-a_{23}&0
\end{vmatrix}
\quad(\text{每行提取公因数 }-1)
\]

\[
=-D,
\]

\(\therefore D=0.\)

## 三、行列式按行（或列）展开公式

在 \(n\) 阶行列式

\[
D=\begin{vmatrix}
a_{11}&a_{12}&\cdots&a_{1n}\\
a_{21}&a_{22}&\cdots&a_{2n}\\
\vdots&\vdots&&\vdots\\
a_{n1}&a_{n2}&\cdots&a_{nn}
\end{vmatrix}
\]

中划去 \(a_{ij}\) 所在的第 \(i\) 行、第 \(j\) 列的元素，由剩下的元素按原来的位置排法构成的一个 \(n-1\) 阶的行列式

\[
\begin{vmatrix}
a_{11}&\cdots&a_{1,j-1}&a_{1,j+1}&\cdots&a_{1n}\\
\vdots&&\vdots&\vdots&&\vdots\\
a_{i-1,1}&\cdots&a_{i-1,j-1}&a_{i-1,j+1}&\cdots&a_{i-1,n}\\
a_{i+1,1}&\cdots&a_{i+1,j-1}&a_{i+1,j+1}&\cdots&a_{i+1,n}\\
\vdots&&\vdots&\vdots&&\vdots\\
a_{n1}&\cdots&a_{n,j-1}&a_{n,j+1}&\cdots&a_{nn}
\end{vmatrix}
\]

称其为 \(a_{ij}\) 的余子式，记为 \(M_{ij}\)；称 \((-1)^{i+j}M_{ij}\) 为 \(a_{ij}\) 的代数余子式，记为 \(A_{ij}\)，即

\[
A_{ij}=(-1)^{i+j}M_{ij}
\]

**定理1.1** \(n\) 阶行列式等于它的任何一行（列）元素与其对应的代数余子式乘积之和，即

\[
|A|=a_{i1}A_{i1}+a_{i2}A_{i2}+\cdots+a_{in}A_{in}=\sum_{k=1}^n a_{ik}A_{ik},\quad i=1,2,\cdots,n
\]

\[
|A|=a_{1j}A_{1j}+a_{2j}A_{2j}+\cdots+a_{nj}A_{nj}=\sum_{k=1}^n a_{kj}A_{kj},\quad j=1,2,\cdots,n
\]

前一个公式称 \(|A|\) 按第 \(i\) 行展开的展开式，后一个公式称 \(|A|\) 按第 \(j\) 列展开的展开式.

**定理1.2** 行列式的任一行（列）元素与另一行（列）元素的代数余子式乘积之和为0，即

\[
\sum_{k=1}^n a_{ik}A_{jk}=a_{i1}A_{j1}+a_{i2}A_{j2}+\cdots+a_{in}A_{jn}=0,\quad i\ne j
\]

\[
\sum_{k=1}^n a_{ki}A_{kj}=a_{1i}A_{1j}+a_{2i}A_{2j}+\cdots+a_{ni}A_{nj}=0,\quad i\ne j
\]

在用展开公式的时候，还要注意下面几个特殊情况的配合：` },
      { p: 221, md: R`### 1. 上（下）三角形行列式的值等于主对角线元素的乘积

\[
\begin{vmatrix}
a_{11}&a_{12}&\cdots&a_{1n}\\
0&a_{22}&\cdots&a_{2n}\\
\vdots&\vdots&\ddots&\vdots\\
0&0&\cdots&a_{nn}
\end{vmatrix}
=\begin{vmatrix}
a_{11}&0&\cdots&0\\
a_{21}&a_{22}&\cdots&0\\
\vdots&\vdots&\ddots&\vdots\\
a_{n1}&a_{n2}&\cdots&a_{nn}
\end{vmatrix}
=a_{11}a_{22}\cdots a_{nn}
\]

### 2. 关于副对角线的行列式

\[
\begin{vmatrix}
a_{11}&a_{12}&\cdots&a_{1,n-1}&a_{1n}\\
a_{21}&a_{22}&\cdots&a_{2,n-1}&0\\
\vdots&\vdots&&\vdots&\vdots\\
a_{n1}&0&\cdots&0&0
\end{vmatrix}
=\begin{vmatrix}
0&\cdots&0&a_{1n}\\
0&\cdots&a_{2,n-1}&a_{2n}\\
\vdots&&\vdots&\vdots\\
a_{n1}&\cdots&a_{n,n-1}&a_{nn}
\end{vmatrix}
=(-1)^{\frac{n(n-1)}{2}}a_{1n}a_{2,n-1}\cdots a_{n1}
\]

### 3. 两个特殊的拉普拉斯展开式

如果 \(A\) 和 \(B\) 分别是 \(m\) 阶和 \(n\) 阶矩阵，则

\[
\begin{vmatrix}
A&*\\
O&B
\end{vmatrix}
=\begin{vmatrix}
A&O\\
*&B
\end{vmatrix}
=|A|\cdot|B|,
\]

\[
\begin{vmatrix}
O&A\\
B&*
\end{vmatrix}
=\begin{vmatrix}
*&A\\
B&O
\end{vmatrix}
=(-1)^{mn}|A|\cdot|B|
\]

### 4. 范德蒙德行列式

\[
\begin{vmatrix}
1&1&\cdots&1\\
x_1&x_2&\cdots&x_n\\
x_1^2&x_2^2&\cdots&x_n^2\\
\vdots&\vdots&&\vdots\\
x_1^{n-1}&x_2^{n-1}&\cdots&x_n^{n-1}
\end{vmatrix}
=\prod_{1\le j<i\le n}(x_i-x_j)
\]

**例6** 计算行列式的值

（1）
\[
\begin{vmatrix}
1&4&-1&4\\
2&2&2&3\\
3&-1&6&2\\
4&0&5&3
\end{vmatrix}
=\underline{\qquad};
\]

（2）
\[
\begin{vmatrix}
0&5&2&0\\
8&3&5&4\\
7&2&4&1\\
0&4&1&0
\end{vmatrix}
=\underline{\qquad}.
\]

**【分析】** 计算行列式要用展开公式，在用展开公式之前一般先用行列式的性质把该行列式的某一行（或列）化出较多的0.

（1）例如，把第二行的 \(-2\) 倍加至第一行，然后把第三行的2倍加至第二行，得

\[
\begin{vmatrix}
1&4&-1&4\\
2&2&2&3\\
3&-1&6&2\\
4&0&5&3
\end{vmatrix}
=\begin{vmatrix}
-3&0&-5&-2\\
8&0&14&7\\
3&-1&6&2\\
4&0&5&3
\end{vmatrix}
=(-1)\times(-1)^{3+2}\begin{vmatrix}
-3&-5&-2\\
8&14&7\\
4&5&3
\end{vmatrix}
\]

\[
=\begin{vmatrix}
1&0&1\\
8&14&7\\
4&5&3
\end{vmatrix}
=\begin{vmatrix}
1&0&0\\
8&14&-1\\
4&5&-1
\end{vmatrix}
=1\times(-1)^{1+1}\begin{vmatrix}
14&-1\\
5&-1
\end{vmatrix}=-9.
\]

（2）除用（1）的思路例如在第四行现构造出一个0，用展开公式之外，还应有拉普拉斯的设想

\[
\begin{vmatrix}
0&5&2&0\\
8&3&5&4\\
7&2&4&1\\
0&4&1&0
\end{vmatrix}
=-\begin{vmatrix}
0&5&2&0\\
0&4&1&0\\
7&2&4&1\\
8&3&5&4
\end{vmatrix}
=\begin{vmatrix}
2&5&0&0\\
1&4&0&0\\
4&2&7&1\\
5&3&8&4
\end{vmatrix}
\]` },
      { p: 222, md: R`\[
=\begin{vmatrix}
2&5\\
1&4
\end{vmatrix}\cdot\begin{vmatrix}
7&1\\
8&4
\end{vmatrix}=60.
\]

**例7** 计算行列式的值

\[
D=\begin{vmatrix}
a+x&a&a&a\\
a&a+x&a&a\\
a&a&a+x&a\\
a&a&a&a+x
\end{vmatrix}
=\underline{\qquad}.
\]

**【分析一】** 把每一行都加至第一行，有

\[
D=\begin{vmatrix}
4a+x&4a+x&4a+x&4a+x\\
a&a+x&a&a\\
a&a&a+x&a\\
a&a&a&a+x
\end{vmatrix}
=(4a+x)\begin{vmatrix}
1&1&1&1\\
a&a+x&a&a\\
a&a&a+x&a\\
a&a&a&a+x
\end{vmatrix}
\]

\[
=(4a+x)\begin{vmatrix}
1&1&1&1\\
0&x&0&0\\
0&0&x&0\\
0&0&0&x
\end{vmatrix}
=(4a+x)x^3.
\]

**【分析二】** 把第一行的 \(-1\) 倍分别加到其他各行，有

\[
D=\begin{vmatrix}
a+x&a&a&a\\
-x&x&0&0\\
-x&0&x&0\\
-x&0&0&x
\end{vmatrix}
=\begin{vmatrix}
4a+x&a&a&a\\
0&x&0&0\\
0&0&x&0\\
0&0&0&x
\end{vmatrix}
=(4a+x)x^3.
\]

**【分析三】** 先把第三行的 \(-1\) 倍加到第四行，然后把第二行的 \(-1\) 倍加到第三行，最后把第一行的 \(-1\) 倍加到第二行，有

\[
D=\begin{vmatrix}
a+x&a&a&a\\
-x&x&0&0\\
0&-x&x&0\\
0&0&-x&x
\end{vmatrix}
=\begin{vmatrix}
4a+x&a&a&a\\
0&x&0&0\\
0&-x&x&0\\
0&0&-x&x
\end{vmatrix}
=(4a+x)\begin{vmatrix}
x&0&0\\
-x&x&0\\
0&-x&x
\end{vmatrix}
\]

\[
=(4a+x)x^3.
\]

**【分析四】**
\[
D=\begin{vmatrix}
a+x&a+0&a+0&a+0\\
a+0&a+x&a+0&a+0\\
a+0&a+0&a+x&a+0\\
a+0&a+0&a+0&a+x
\end{vmatrix}
\]
用拆开性质应该是16个行列式的和，你能写出不为0的那5个行列式吗？

**例8** 计算

\[
D=\begin{vmatrix}
1+x&1&1&1\\
1&1-x&1&1\\
1&1&1+y&1\\
1&1&1&1-y
\end{vmatrix}
=\underline{\qquad}.
\]

**【分析一】** （用按行展开公式）第二行的 \(-1\) 倍加到第一行，再第一列的 \(-1\) 倍加到第二列，然后按第一行展开，` },
      { p: 223, md: R`\[
D=\begin{vmatrix}
x&x&0&0\\
1&1-x&1&1\\
1&1&1+y&1\\
1&1&1&1-y
\end{vmatrix}
=\begin{vmatrix}
x&0&0&0\\
1&-x&1&1\\
1&0&1+y&1\\
1&0&1&1-y
\end{vmatrix}
\]

\[
=x\begin{vmatrix}
-x&1&1\\
0&1+y&1\\
0&1&1-y
\end{vmatrix}
=-x^2\begin{vmatrix}
1+y&1\\
1&1-y
\end{vmatrix}=x^2y^2.
\]

**【分析二】** （爪型处理）第一行的 \(-1\) 倍分别加到其他每一行

\[
D=\begin{vmatrix}
1+x&1&1&1\\
-x&-x&0&0\\
-x&0&y&0\\
-x&0&0&-y
\end{vmatrix}
=\begin{vmatrix}
x&1&1&1\\
0&-x&0&0\\
-x&0&y&0\\
-x&0&0&-y
\end{vmatrix}
=\begin{vmatrix}
x+\frac{x}{y}&1&1&1\\
0&-x&0&0\\
0&0&y&0\\
-x&0&0&-y
\end{vmatrix}
\]

\[
=\begin{vmatrix}
x&1&1&1\\
0&-x&0&0\\
0&0&y&0\\
0&0&0&-y
\end{vmatrix}
=x^2y^2.
\]

**【分析三】** （拆开法）
\[
D=\begin{vmatrix}
1+x&1+0&1+0&1+0\\
1+0&1-x&1+0&1+0\\
1+0&1+0&1+y&1+0\\
1+0&1+0&1+0&1-y
\end{vmatrix}
\]
[共有16个四阶子式，当选第一子列时，其他各列只能选第二子列，否则行列式值必为0]

\[
=\begin{vmatrix}
1&0&0&0\\
1&-x&0&0\\
1&0&y&0\\
1&0&0&-y
\end{vmatrix}
+\begin{vmatrix}
x&1&0&0\\
0&1&0&0\\
0&1&y&0\\
0&1&0&-y
\end{vmatrix}
+\begin{vmatrix}
x&0&1&0\\
0&-x&1&0\\
0&0&1&0\\
0&0&1&-y
\end{vmatrix}
\]

\[
+\begin{vmatrix}
x&0&0&1\\
0&-x&0&1\\
0&0&y&1\\
0&0&0&1
\end{vmatrix}
+\begin{vmatrix}
x&0&0&0\\
0&-x&0&0\\
0&0&y&0\\
0&0&0&-y
\end{vmatrix}
\]

\[
=xy^2-xy^2+x^2y-x^2y+x^2y^2=x^2y^2.
\]

**例9** 证明范德蒙德（Vandermonde）行列式

\[
D_n=\begin{vmatrix}
1&1&\cdots&1\\
x_1&x_2&\cdots&x_n\\
x_1^2&x_2^2&\cdots&x_n^2\\
\vdots&\vdots&&\vdots\\
x_1^{n-1}&x_2^{n-1}&\cdots&x_n^{n-1}
\end{vmatrix}
=\prod_{1\le j<i\le n}(x_i-x_j).
\]

**【证】** （用归纳法）

\(n=2\) 时，

\[
D_2=\begin{vmatrix}1&1\\
x_1&x_2
\end{vmatrix}=x_2-x_1,
\]

命题成立.

设 \(D_{n-1}=\prod_{1\le j<i\le n-1}(x_i-x_j)\) 成立.` },
      { p: 224, md: R`对 \(D_n\)，从第 \(n\) 行开始，依次把上一行的 \(-x_1\) 倍加至下一行，有

\[
D_n=\begin{vmatrix}
1&1&1&\cdots&1\\
0&x_2-x_1&x_3-x_1&\cdots&x_n-x_1\\
0&x_2(x_2-x_1)&x_3(x_3-x_1)&\cdots&x_n(x_n-x_1)\\
\vdots&\vdots&\vdots&&\vdots\\
0&x_2^{n-2}(x_2-x_1)&x_3^{n-2}(x_3-x_1)&\cdots&x_n^{n-2}(x_n-x_1)
\end{vmatrix}
\]

\[
=(x_2-x_1)(x_3-x_1)\cdots(x_n-x_1)\begin{vmatrix}
1&1&\cdots&1\\
x_2&x_3&\cdots&x_n\\
x_2^2&x_3^2&\cdots&x_n^2\\
\vdots&\vdots&&\vdots\\
x_2^{n-2}&x_3^{n-2}&\cdots&x_n^{n-2}
\end{vmatrix}
\]

\[
\stackrel{*}{=}(x_2-x_1)(x_3-x_1)\cdots(x_n-x_1)\cdot\prod_{2\le j<i\le n}(x_i-x_j)
\]

\[
=\prod_{1\le j<i\le n}(x_i-x_j).
\]

* 上式右端的行列式是 \(n-1\) 阶范德蒙德行列式，归纳假设可用.

**例10** （1）已知
\[
\begin{vmatrix}
\lambda-1&1&-1\\
-2&\lambda-4&2\\
3&3&\lambda-5
\end{vmatrix}=0,\text{求 }\lambda;
\]

（2）已知
\[
\begin{vmatrix}
\lambda&-2&2\\
-2&\lambda-4&-4\\
2&-4&\lambda+3
\end{vmatrix}=0,\text{求 }\lambda.
\]

**【分析】** 这是 \(\lambda\) 的三次方程，故应用观察法对行列式恒等变形以期某一行（或列）出现 \(\lambda-a\) 的因式，好破译三次方程.

**【解】** （1）把第三列加到第一列，有

\[
\begin{vmatrix}
\lambda-1&1&-1\\
-2&\lambda-4&2\\
3&3&\lambda-5
\end{vmatrix}
=\begin{vmatrix}
\lambda-2&1&-1\\
0&\lambda-4&2\\
\lambda-2&3&\lambda-5
\end{vmatrix}
=\begin{vmatrix}
\lambda-2&1&-1\\
0&\lambda-4&2\\
0&2&\lambda-4
\end{vmatrix}
\]

\[
=(\lambda-2)\begin{vmatrix}
\lambda-4&2\\
2&\lambda-4
\end{vmatrix}
=(\lambda-2)(\lambda^2-8\lambda+12)
\]

\[
=(\lambda-2)^2(\lambda-6).
\]

所以 \(\lambda_1=\lambda_2=2,\lambda_3=6\).

（2）把第一列的 \(-2\) 倍加至第三列，有

\[
\begin{vmatrix}
\lambda&-2&2\\
-2&\lambda-4&-4\\
2&-4&\lambda+3
\end{vmatrix}
=\begin{vmatrix}
\lambda&-2&2-2\lambda\\
-2&\lambda-4&0\\
2&-4&\lambda-1
\end{vmatrix}
=\begin{vmatrix}
\lambda+4&-10&0\\
-2&\lambda-4&0\\
2&-4&\lambda-1
\end{vmatrix}
\]

\[
=(\lambda-1)\begin{vmatrix}
\lambda+4&-10\\
-2&\lambda-4
\end{vmatrix}
=(\lambda-1)(\lambda^2-36)=0.
\]

所以 \(\lambda_1=1,\lambda_2=6,\lambda_3=-6\).` },
      { p: 225, md: R`## 四、克拉默法则

**定理1.3**（克拉默法则）

若 \(n\) 个方程 \(n\) 个未知量构成的非齐次线性方程组

\[
\begin{cases}
a_{11}x_1+a_{12}x_2+\cdots+a_{1n}x_n=b_1\\
a_{21}x_1+a_{22}x_2+\cdots+a_{2n}x_n=b_2\\
\cdots\cdots\cdots\cdots\\
a_{n1}x_1+a_{n2}x_2+\cdots+a_{nn}x_n=b_n
\end{cases}
\tag{1}
\]

的系数行列式 \(|A|\ne0\)，则方程组（1）有唯一解，且

\[
x_i=\frac{|A_i|}{|A|},i=1,2,\cdots,n
\]

其中 \(|A_i|\) 是 \(|A|\) 中第 \(i\) 列元素（即 \(x_i\) 的系数）替换成方程组右端的常数项 \(b_1,b_2,\cdots,b_n\) 所构成的行列式.

**【注】** 若 \(|A|=0\)，方程组可能无解，也可能有无穷多解，但一定不是有唯一解.

**推论** 若包含 \(n\) 个方程 \(n\) 个未知量的齐次线性方程组

\[
\begin{cases}
a_{11}x_1+a_{12}x_2+\cdots+a_{1n}x_n=0\\
a_{21}x_1+a_{22}x_2+\cdots+a_{2n}x_n=0\\
\cdots\cdots\cdots\cdots\\
a_{n1}x_1+a_{n2}x_2+\cdots+a_{nn}x_n=0
\end{cases}
\tag{2}
\]

的系数行列式 \(|A|\ne0\)，则方程组（2）只有零解.

反之，若齐次线性方程组（2）有非零解，则其系数行列式必为0，即 \(|A|=0\).

**例11** 方程组

\[
\begin{cases}
x_1+x_2+x_3=1\\
2x_1-x_2-3x_3=0\\
4x_1+x_2+9x_3=0
\end{cases}
\]

的解中，\(x_1=\underline{\qquad}\).

**【分析】** 系数行列式是范德蒙德行列式

\[
D=\begin{vmatrix}
1&1&1\\
2&-1&-3\\
4&1&9
\end{vmatrix}
=(-1-2)(-3-2)[-3-(-1)]=-30
\]

又
\[
D_1=\begin{vmatrix}
1&1&1\\
0&-1&-3\\
0&1&9
\end{vmatrix}=-6,
\]
故 \(x_1=\frac{1}{5}\).

**例12** 已知 \(A(1,2),B(4,0)\) 是平面上的两个点，则经过 \(A,B\) 两点的直线方程是\_\_\_\_\_\_\_\_.

**【分析】** 设所求直线方程为 \(ax+by+c=0\)，

\(P(x,y)\) 是该直线上任意一点，则 \((x,y),(1,2),(4,0)\) 应满足直线方程，即有

\[
\begin{cases}
ax+by+c=0\\
a+2b+c=0\\
4a+c=0
\end{cases}
\tag{1}
\]` },
      { p: 226, md: R`因存在经过 \(A,B\) 两点的直线，那么 \(a,b,c\) 不全为0，即齐次方程组（1）必有非零解，从而

\[
\begin{vmatrix}
x&y&1\\
1&2&1\\
4&0&1
\end{vmatrix}=0
\]

\(\therefore 2x+3y-8=0\) 为所求.

## 练习1

（1）
\[
\begin{vmatrix}
1&1&1\\
-1&0&1\\
-2&-2&0
\end{vmatrix}
=\underline{\qquad}.
\]

（2）
\[
\begin{vmatrix}
b+c&c+a&a+b\\
a&b&c\\
a^2&b^2&c^2
\end{vmatrix}
=\underline{\qquad}.
\]

（3）
\[
\begin{vmatrix}
a_1&0&0&b_1\\
0&a_2&b_2&0\\
0&b_3&a_3&0\\
b_4&0&0&a_4
\end{vmatrix}
=\underline{\qquad}.
\]

（4）已知
\[
\begin{vmatrix}
\lambda-3&1&2\\
-2&\lambda&2\\
-2&1&\lambda+1
\end{vmatrix}=0,\text{求 }\lambda.
\]

（5）已知
\[
\begin{vmatrix}
\lambda+1&0&-2\\
-1&\lambda-2&1\\
-1&-3&\lambda
\end{vmatrix}=0,\text{求 }\lambda.
\]

（6）已知齐次方程组

\[
\begin{cases}
x_1+2x_2-x_3=0\\
2x_1-x_2+\lambda x_3=0\\
3x_1+x_2+x_3=0
\end{cases}
\]

有非零解，则 \(\lambda=\underline{\qquad}\).

（练习答案在297页）` },
      { p: 227, md: R`# 第二章 矩阵

**本章考点**

矩阵的概念 单位矩阵、数量矩阵、对角矩阵、三角矩阵、对称矩阵和反对称矩阵以及它们的性质 矩阵的线性运算 矩阵的乘法 方阵的幂 方阵乘积的行列式 矩阵的转置 逆矩阵的概念和性质 矩阵可逆的充分必要条件 伴随矩阵 矩阵的初等变换 初等矩阵 矩阵的秩 矩阵的等价 分块矩阵及其运算

## 一、矩阵的概念及运算

### 1. 矩阵的概念

**定义** \(m\times n\) 个数排成如下 \(m\) 行 \(n\) 列的一个表格

\[
\begin{bmatrix}
a_{11}&a_{12}&\cdots&a_{1n}\\
a_{21}&a_{22}&\cdots&a_{2n}\\
\vdots&\vdots&&\vdots\\
a_{m1}&a_{m2}&\cdots&a_{mn}
\end{bmatrix}
\]

称为一个 \(m\times n\) 矩阵，当 \(m=n\) 时，矩阵 \(A\) 称为 \(n\) 阶矩阵或叫 \(n\) 阶方阵.

如果一个矩阵的所有元素都是0，即

\[
\begin{bmatrix}
0&0&\cdots&0\\
0&0&\cdots&0\\
\vdots&\vdots&&\vdots\\
0&0&\cdots&0
\end{bmatrix}
\]

则称这个矩阵是零矩阵，可简记为 \(O\).

两个矩阵 \(A=[a_{ij}]_{m\times n},B=[b_{ij}]_{s\times t}\)，如果 \(m=s,n=t\)，则称 \(A\) 与 \(B\) 是同型矩阵.

两个同型矩阵 \(A=[a_{ij}]_{m\times n},B=[b_{ij}]_{m\times n}\)，如果对应的元素都相等，即

\(a_{ij}=b_{ij}(i=1,2,\cdots,m;j=1,2,\cdots,n)\)，则称矩阵 \(A\) 与 \(B\) 相等，记作 \(A=B\).

\(n\) 阶方阵 \(A=[a_{ij}]_{n\times n}\) 的元素所构成的行列式

\[
\begin{vmatrix}
a_{11}&a_{12}&\cdots&a_{1n}\\
a_{21}&a_{22}&\cdots&a_{2n}\\
\vdots&\vdots&&\vdots\\
a_{n1}&a_{n2}&\cdots&a_{nn}
\end{vmatrix}
\]

称为 \(n\) 阶矩阵 \(A\) 的行列式，记成 \(|A|\) 或 \(\det A\).

**【注】** 矩阵 \(A\) 是一个表格，而行列式 \(|A|\) 是一个数，这里的概念与符号不要混淆. \(A=\)` },
    ],
    quiz: [{"q": "交换行列式的两行，行列式的值", "options": ["变号", "不变", "变为倒数", "变为零"], "answer": 0, "explain": "行列式交换两行（列）变号。"}, {"q": "若 $A,B$ 均为 $n$ 阶方阵，则 $|AB|=$", "options": ["$|A||B|$", "$|A|+|B|$", "$|A|-|B|$", "$|A|/|B|$"], "answer": 0, "explain": "行列式乘法性质。"}, {"q": "上三角行列式的值等于", "options": ["主对角线元素之积", "副对角线元素之积", "所有元素之和", "零"], "answer": 0, "explain": "三角行列式等于对角元乘积。"}, {"q": "将行列式某一行所有元素乘以 $k$，则行列式的值", "options": ["乘以 $k$", "不变", "除以 $k$", "加上 $k$"], "answer": 0, "explain": "某行有公因子可提出。"}]
  };
})();
