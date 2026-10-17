window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["jc08_s0"] = {
    id: "jc08_s0",
    ch: "第二章 矩阵",
    title: "第二章 矩阵",
    book: "李永乐《数学复习全书·基础篇》",
    pages: [228, 245],
    img: "assets/img/jichu",
    content: [
      { p: 228, md: R`\(\boldsymbol{O}\) 与 \(|\boldsymbol{A}|=0\) 是不同的，不能搞错。当 \(\boldsymbol{A}\ne\boldsymbol{O}\) 时可以有 \(|\boldsymbol{A}|=0\)，当然也可能有 \(|\boldsymbol{A}|\ne0\)；这些基本常识要想清楚。

### 2. 矩阵的运算

**定义（加法）** 两个同型矩阵（行数与列数分别相等）可以相加，且
\[
\boldsymbol{A}+\boldsymbol{B}=[a_{ij}]_{m\times n}+[b_{ij}]_{m\times n}=[a_{ij}+b_{ij}]_{m\times n}.
\]

**定义（数量乘法，简称数乘）** 设 \(k\) 是数，\(\boldsymbol{A}=[a_{ij}]_{m\times n}\) 是矩阵，则定义数与矩阵的乘法为
\[
k\boldsymbol{A}=k[a_{ij}]_{m\times n}=[ka_{ij}]_{m\times n}.
\]

例如，\(\boldsymbol{A}=\begin{pmatrix}1&3&-2\\0&-4&5\end{pmatrix}\)，\(\boldsymbol{B}=\begin{pmatrix}8&3&5\\1&2&-6\end{pmatrix}\)，则
\[
\boldsymbol{A}+\boldsymbol{B}
=
\begin{pmatrix}
1+8&3+3&-2+5\\
0+1&-4+2&5+(-6)
\end{pmatrix}
=
\begin{pmatrix}
9&6&3\\
1&-2&-1
\end{pmatrix},
\]
\[
3\boldsymbol{A}
=
\begin{pmatrix}
3\times1&3\times3&3\times(-2)\\
3\times0&3\times(-4)&3\times5
\end{pmatrix}
=
\begin{pmatrix}
3&9&-6\\
0&-12&15
\end{pmatrix}.
\]

**定义（乘法）** 设 \(\boldsymbol{A}\) 是一个 \(m\times s\) 矩阵，\(\boldsymbol{B}\) 是一个 \(s\times n\) 矩阵（\(\boldsymbol{A}\) 的列数 \(=\boldsymbol{B}\) 的行数），则 \(\boldsymbol{A},\boldsymbol{B}\) 可乘，且乘积 \(\boldsymbol{AB}\) 是一个 \(m\times n\) 矩阵。记成 \(\boldsymbol{C}=\boldsymbol{AB}=[c_{ij}]_{m\times n}\)，其中 \(\boldsymbol{C}\) 的第 \(i\) 行、第 \(j\) 列元素 \(c_{ij}\) 是 \(\boldsymbol{A}\) 的第 \(i\) 行 \(s\) 个元素和 \(\boldsymbol{B}\) 的第 \(j\) 列的 \(s\) 个对应元素两两乘积之和，即
\[
c_{ij}=\sum_{k=1}^{s}a_{ik}b_{kj}
=a_{i1}b_{1j}+a_{i2}b_{2j}+\cdots+a_{is}b_{sj}.
\]

矩阵的乘法可图示如下：
\[
\begin{array}{ccc}
i\begin{pmatrix}
\cdots&\cdots&\cdots&\cdots\\
a_{i1}&a_{i2}&\cdots&a_{is}\\
\cdots&\cdots&\cdots&\cdots
\end{pmatrix}
&
\underset{j}{\begin{pmatrix}
\vdots&&\vdots\\
b_{1j}&&\\
b_{2j}&&\\
\vdots&&\\
b_{sj}&&\\
\vdots&&
\end{pmatrix}}
&
\begin{pmatrix}
&\vdots&\\
\cdots&c_{ij}&\cdots\\
&\vdots&
\end{pmatrix}i\\[2mm]
m\times s&s\times n&m\times n
\end{array}
\]

特别地，设 \(\boldsymbol{A}\) 是一个 \(n\) 阶方阵，则记
\[
\underbrace{\boldsymbol{A}\cdot\boldsymbol{A}\cdots\boldsymbol{A}}_{k\text{个}}=\boldsymbol{A}^{k}
\]
称为 \(\boldsymbol{A}\) 的 \(k\) 次幂。

例如，\(\boldsymbol{A}=\begin{pmatrix}1&2\\3&6\end{pmatrix}\)，\(\boldsymbol{B}=\begin{pmatrix}10&-4\\-5&2\end{pmatrix}\)，则
\[
\boldsymbol{AB}
=
\begin{pmatrix}1&2\\3&6\end{pmatrix}
\begin{pmatrix}10&-4\\-5&2\end{pmatrix}
=
\begin{pmatrix}
1\times10+2\times(-5)&1\times(-4)+2\times2\\
3\times10+6\times(-5)&3\times(-4)+6\times2
\end{pmatrix}
=
\begin{pmatrix}0&0\\0&0\end{pmatrix},
\]
\[
\boldsymbol{BA}
=
\begin{pmatrix}10&-4\\-5&2\end{pmatrix}
\begin{pmatrix}1&2\\3&6\end{pmatrix}
=
\begin{pmatrix}-2&-4\\1&2\end{pmatrix},
\]
\[
\boldsymbol{A}^{2}
=
\begin{pmatrix}1&2\\3&6\end{pmatrix}
\begin{pmatrix}1&2\\3&6\end{pmatrix}
=
\begin{pmatrix}7&14\\21&42\end{pmatrix}
=7\boldsymbol{A}.
\]

矩阵的乘法是基本的也是重要的，注意不要和习惯的数字运算相混淆：（1）矩阵的乘法一般没有交换律；（2）矩阵有零因子，即当 \(\boldsymbol{A}\ne\boldsymbol{O},\boldsymbol{B}\ne\boldsymbol{O}\) 时，有可能 \(\boldsymbol{AB}=\boldsymbol{O}\)（或者说当 \(\boldsymbol{AB}=\boldsymbol{O}\) 时 \(\nRightarrow \boldsymbol{A}=\boldsymbol{O}\) 或 \(\boldsymbol{B}=\boldsymbol{O}\)）；（3）矩阵没有消去律，即当 \(\boldsymbol{AB}=\boldsymbol{AC},\boldsymbol{A}\ne\boldsymbol{O}\) 时 \(\nRightarrow \boldsymbol{B}=\boldsymbol{C}\)。` },
      { p: 229, md: R`关于单位矩阵 \(\boldsymbol{E}\)
\[
\begin{pmatrix}1&0\\0&1\end{pmatrix},\quad
\begin{pmatrix}1&0&0\\0&1&0\\0&0&1\end{pmatrix},\cdots
\]
\[
\begin{pmatrix}1&2&3\\4&5&6\end{pmatrix}
\begin{pmatrix}1&0&0\\0&1&0\\0&0&1\end{pmatrix}
=
\begin{pmatrix}1&2&3\\4&5&6\end{pmatrix};
\quad
\begin{pmatrix}1&0\\0&1\end{pmatrix}
\begin{pmatrix}1&2&3\\4&5&6\end{pmatrix}
=
\begin{pmatrix}1&2&3\\4&5&6\end{pmatrix}.
\]

关于对角矩阵
\[
\begin{pmatrix}a_1&0&0\\0&a_2&0\\0&0&a_3\end{pmatrix}
\begin{pmatrix}b_1&0&0\\0&b_2&0\\0&0&b_3\end{pmatrix}
=
\begin{pmatrix}
a_1b_1&0&0\\
0&a_2b_2&0\\
0&0&a_3b_3
\end{pmatrix}.
\]
（1）\(\boldsymbol{\Lambda}_1\boldsymbol{\Lambda}_2=\boldsymbol{\Lambda}_2\boldsymbol{\Lambda}_1\)。

（2）
\[
\begin{pmatrix}a_1&0&0\\0&a_2&0\\0&0&a_3\end{pmatrix}^{n}
=
\begin{pmatrix}
a_1^{n}&0&0\\
0&a_2^{n}&0\\
0&0&a_3^{n}
\end{pmatrix}.
\]

（3）
\[
\begin{pmatrix}a_1&0&0\\0&a_2&0\\0&0&a_3\end{pmatrix}^{-1}
=
\begin{pmatrix}
\dfrac{1}{a_1}&0&0\\
0&\dfrac{1}{a_2}&0\\
0&0&\dfrac{1}{a_3}
\end{pmatrix}
\quad(a_i\ne0).
\]

关于 \(\boldsymbol{\alpha}\boldsymbol{\beta}^{\mathrm T},\boldsymbol{\beta}\boldsymbol{\alpha}^{\mathrm T},\boldsymbol{\alpha}^{\mathrm T}\boldsymbol{\beta},\boldsymbol{\beta}^{\mathrm T}\boldsymbol{\alpha},\boldsymbol{\alpha}\boldsymbol{\alpha}^{\mathrm T},\boldsymbol{\alpha}^{\mathrm T}\boldsymbol{\alpha}\)。

设 \(\boldsymbol{\alpha}=[a_1,a_2,a_3]^{\mathrm T},\boldsymbol{\beta}=[b_1,b_2,b_3]^{\mathrm T}\)，则
\[
\boldsymbol{\alpha}\boldsymbol{\beta}^{\mathrm T}
=
\begin{pmatrix}a_1\\a_2\\a_3\end{pmatrix}
[b_1,b_2,b_3]
=
\begin{pmatrix}
a_1b_1&a_1b_2&a_1b_3\\
a_2b_1&a_2b_2&a_2b_3\\
a_3b_1&a_3b_2&a_3b_3
\end{pmatrix},
\]
\[
\boldsymbol{\beta}^{\mathrm T}\boldsymbol{\alpha}
=
[b_1,b_2,b_3]
\begin{pmatrix}a_1\\a_2\\a_3\end{pmatrix}
=
a_1b_1+a_2b_2+a_3b_3,
\]
\[
\boldsymbol{\beta}\boldsymbol{\alpha}^{\mathrm T}
=
\begin{pmatrix}b_1\\b_2\\b_3\end{pmatrix}
[a_1,a_2,a_3]
=
\begin{pmatrix}
a_1b_1&a_2b_1&a_3b_1\\
a_1b_2&a_2b_2&a_3b_2\\
a_1b_3&a_2b_3&a_3b_3
\end{pmatrix},
\]
\[
\boldsymbol{\alpha}^{\mathrm T}\boldsymbol{\beta}
=
[a_1,a_2,a_3]
\begin{pmatrix}b_1\\b_2\\b_3\end{pmatrix}
=
a_1b_1+a_2b_2+a_3b_3,
\]
\[
\boldsymbol{\alpha}\boldsymbol{\alpha}^{\mathrm T}
=
\begin{pmatrix}a_1\\a_2\\a_3\end{pmatrix}
[a_1,a_2,a_3]
=
\begin{pmatrix}
a_1^{2}&a_1a_2&a_1a_3\\
a_2a_1&a_2^{2}&a_2a_3\\
a_3a_1&a_3a_2&a_3^{2}
\end{pmatrix},
\]
\[
\boldsymbol{\alpha}^{\mathrm T}\boldsymbol{\alpha}
=
[a_1,a_2,a_3]
\begin{pmatrix}a_1\\a_2\\a_3\end{pmatrix}
=
a_1^{2}+a_2^{2}+a_3^{2}.
\]` },
      { p: 230, md: R`**【注】** （1）如 \(\boldsymbol{A}=\boldsymbol{\alpha}\boldsymbol{\beta}^{\mathrm T}\)，则 \(\boldsymbol{A}^{\mathrm T}=\boldsymbol{\beta}\boldsymbol{\alpha}^{\mathrm T}\) 且 \(r(\boldsymbol{A})=r(\boldsymbol{A}^{\mathrm T})=1\)。

（2）\(\boldsymbol{\alpha}^{\mathrm T}\boldsymbol{\beta}=\boldsymbol{\beta}^{\mathrm T}\boldsymbol{\alpha}=\operatorname{tr}(\boldsymbol{A})\)。

（3）\(\boldsymbol{\alpha}\boldsymbol{\alpha}^{\mathrm T}\) 是对称矩阵，\(\boldsymbol{\alpha}^{\mathrm T}\boldsymbol{\alpha}\) 是平方和。

**练习 2.1**

若 \(\boldsymbol{\alpha}=[1,3,2]^{\mathrm T},\boldsymbol{\beta}=[1,2,-1]^{\mathrm T}\)，则

（1）\(\begin{pmatrix}1\\3\\2\end{pmatrix}[1,2,-1]=\) \underline{\qquad\qquad}。

（2）\(\begin{pmatrix}1\\2\\-1\end{pmatrix}[1,3,2]=\) \underline{\qquad\qquad}。

（3）\([1,2,-1]\begin{pmatrix}1\\3\\2\end{pmatrix}=\) \underline{\qquad\qquad}。

（4）\([1,3,2]\begin{pmatrix}1\\2\\-1\end{pmatrix}=\) \underline{\qquad\qquad}。

（5）\(\begin{pmatrix}1\\3\\2\end{pmatrix}[1,3,2]=\) \underline{\qquad\qquad}。

（6）\([1,2,-1]\begin{pmatrix}1\\2\\-1\end{pmatrix}=\) \underline{\qquad\qquad}。

（练习答案在 297 页）

**定义（转置）** 将 \(m\times n\) 型矩阵 \(\boldsymbol{A}=[a_{ij}]_{m\times n}\) 的行列互换得到的 \(n\times m\) 矩阵 \([a_{ji}]_{n\times m}\) 称为 \(\boldsymbol{A}\) 的转置矩阵，记为 \(\boldsymbol{A}^{\mathrm T}\)，即若
\[
\boldsymbol{A}=
\begin{pmatrix}
a_{11}&a_{12}&\cdots&a_{1n}\\
a_{21}&a_{22}&\cdots&a_{2n}\\
\vdots&\vdots&&\vdots\\
a_{m1}&a_{m2}&\cdots&a_{mn}
\end{pmatrix},
\quad
\boldsymbol{A}^{\mathrm T}=
\begin{pmatrix}
a_{11}&a_{21}&\cdots&a_{m1}\\
a_{12}&a_{22}&\cdots&a_{m2}\\
\vdots&\vdots&&\vdots\\
a_{1n}&a_{2n}&\cdots&a_{mn}
\end{pmatrix}.
\]

**定义（矩阵多项式）** 设 \(\boldsymbol{A}\) 是 \(n\) 阶矩阵，\(f(x)=a_mx^{m}+\cdots+a_1x+a_0\) 是 \(x\) 的多项式，则称
\[
a_m\boldsymbol{A}^{m}+a_{m-1}\boldsymbol{A}^{m-1}+\cdots+a_1\boldsymbol{A}+a_0\boldsymbol{E}
\]
为矩阵多项式，记为 \(f(\boldsymbol{A})\)。

**运算法则**

（1）**加法** \(\boldsymbol{A},\boldsymbol{B},\boldsymbol{C}\) 是同型矩阵，则
\[
\boldsymbol{A}+\boldsymbol{B}=\boldsymbol{B}+\boldsymbol{A}\qquad\text{交换律}
\]
\[
(\boldsymbol{A}+\boldsymbol{B})+\boldsymbol{C}=\boldsymbol{A}+(\boldsymbol{B}+\boldsymbol{C})\qquad\text{结合律}
\]
\[
\boldsymbol{A}+\boldsymbol{O}=\boldsymbol{A}\qquad\text{其中 }\boldsymbol{O}\text{ 是元素全为零的同型矩阵}
\]
\[
\boldsymbol{A}+(-\boldsymbol{A})=\boldsymbol{O}
\]

（2）**数乘矩阵**
\[
k(m\boldsymbol{A})=(km)\boldsymbol{A}=m(k\boldsymbol{A});\quad(k+m)\boldsymbol{A}=k\boldsymbol{A}+m\boldsymbol{A}
\]
\[
k(\boldsymbol{A}+\boldsymbol{B})=k\boldsymbol{A}+k\boldsymbol{B};\quad1\boldsymbol{A}=\boldsymbol{A},0\boldsymbol{A}=\boldsymbol{O}
\]` },
      { p: 231, md: R`（3）**乘法** \(\boldsymbol{A},\boldsymbol{B},\boldsymbol{C}\) 满足运算条件时
\[
(\boldsymbol{AB})\boldsymbol{C}=\boldsymbol{A}(\boldsymbol{BC})
\]
\[
\boldsymbol{A}(\boldsymbol{B}+\boldsymbol{C})=\boldsymbol{AB}+\boldsymbol{AC}
\]
\[
(\boldsymbol{B}+\boldsymbol{C})\boldsymbol{A}=\boldsymbol{BA}+\boldsymbol{CA}
\]

（4）**转置**
\[
(\boldsymbol{A}+\boldsymbol{B})^{\mathrm T}=\boldsymbol{A}^{\mathrm T}+\boldsymbol{B}^{\mathrm T};\quad(k\boldsymbol{A})^{\mathrm T}=k\boldsymbol{A}^{\mathrm T}
\]
\[
(\boldsymbol{AB})^{\mathrm T}=\boldsymbol{B}^{\mathrm T}\boldsymbol{A}^{\mathrm T};\quad(\boldsymbol{A}^{\mathrm T})^{\mathrm T}=\boldsymbol{A}
\]

**例1** 若
\[
\begin{pmatrix}1&2&3\\4&5&6\\7&8&9\end{pmatrix}
-\boldsymbol{X}
+
\begin{pmatrix}1\\2\\0\end{pmatrix}
[2,0,-1]
=
3\begin{pmatrix}1&0&0\\2&2&0\\3&3&3\end{pmatrix},
\]
则 \(\boldsymbol{X}=\) \underline{\qquad\qquad}。

**【分析】**
\[
\begin{aligned}
\boldsymbol{X}
&=
\begin{pmatrix}1&2&3\\4&5&6\\7&8&9\end{pmatrix}
+
\begin{pmatrix}1\\2\\0\end{pmatrix}[2,0,-1]
-
3\begin{pmatrix}1&0&0\\2&2&0\\3&3&3\end{pmatrix}\\
&=
\begin{pmatrix}1&2&3\\4&5&6\\7&8&9\end{pmatrix}
+
\begin{pmatrix}2&0&-1\\4&0&-2\\0&0&0\end{pmatrix}
-
\begin{pmatrix}3&0&0\\6&6&0\\9&9&9\end{pmatrix}
=
\begin{pmatrix}0&2&2\\2&-1&4\\-2&-1&0\end{pmatrix}.
\end{aligned}
\]

**例2** 设 \(\boldsymbol{A}=\begin{pmatrix}1&0\\0&-1\end{pmatrix},\boldsymbol{B}=\begin{pmatrix}1&2\\3&4\end{pmatrix}\)，则

（1）\(\boldsymbol{AB}-\boldsymbol{BA}=\) \underline{\qquad\qquad}；（2）\((\boldsymbol{AB})^{2}=\) \underline{\qquad\qquad}；（3）\(\boldsymbol{A}^{2}\boldsymbol{B}^{2}=\) \underline{\qquad\qquad}。

**【分析】** （1）
\[
\begin{aligned}
\boldsymbol{AB}-\boldsymbol{BA}
&=
\begin{pmatrix}1&0\\0&-1\end{pmatrix}
\begin{pmatrix}1&2\\3&4\end{pmatrix}
-
\begin{pmatrix}1&2\\3&4\end{pmatrix}
\begin{pmatrix}1&0\\0&-1\end{pmatrix}\\
&=
\begin{pmatrix}1&2\\-3&-4\end{pmatrix}
-
\begin{pmatrix}1&-2\\3&-4\end{pmatrix}
=
\begin{pmatrix}0&4\\-6&0\end{pmatrix}.
\end{aligned}
\]
（2）
\[
(\boldsymbol{AB})^{2}
=
\left(
\begin{pmatrix}1&0\\0&-1\end{pmatrix}
\begin{pmatrix}1&2\\3&4\end{pmatrix}
\right)^{2}
=
\begin{pmatrix}1&2\\-3&-4\end{pmatrix}^{2}
=
\begin{pmatrix}-5&-6\\9&10\end{pmatrix}.
\]
（3）
\[
\boldsymbol{A}^{2}\boldsymbol{B}^{2}
=
\begin{pmatrix}1&0\\0&-1\end{pmatrix}^{2}
\begin{pmatrix}1&2\\3&4\end{pmatrix}^{2}
=
\begin{pmatrix}1&0\\0&1\end{pmatrix}
\begin{pmatrix}7&10\\15&22\end{pmatrix}
=
\begin{pmatrix}7&10\\15&22\end{pmatrix}.
\]

**例3** 方程组
\[
\begin{cases}
x_1+2x_2-x_3+4x_4=2\\
2x_1-x_2+x_3+x_4=1\\
x_1+7x_2-4x_3+11x_4=5
\end{cases}
\]
用矩阵可以表示为
\[
\begin{pmatrix}
1&2&-1&4\\
2&-1&1&1\\
1&7&-4&11
\end{pmatrix}
\begin{pmatrix}x_1\\x_2\\x_3\\x_4\end{pmatrix}
=
\begin{pmatrix}2\\1\\5\end{pmatrix}.
\]
若记 \(\boldsymbol{A}=\begin{pmatrix}1&2&-1&4\\2&-1&1&1\\1&7&-4&11\end{pmatrix}\) 称为方程组系数矩阵，未知数 \(\boldsymbol{x}=[x_1,x_2,x_3,x_4]^{\mathrm T}\)，常数` },
      { p: 232, md: R`项 \(\boldsymbol{b}=[2,1,5]^{\mathrm T}\)，则方程组表示为：\(\boldsymbol{Ax}=\boldsymbol{b}\)。

如果对系数矩阵 \(\boldsymbol{A}\) 按列分块。记 \(\boldsymbol{A}=[\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3,\boldsymbol{\alpha}_4]\)。

由分块矩阵乘法，有
\[
[\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3,\boldsymbol{\alpha}_4]
\begin{pmatrix}x_1\\x_2\\x_3\\x_4\end{pmatrix}
=\boldsymbol{b}
\]
得
\[
x_1\boldsymbol{\alpha}_1+x_2\boldsymbol{\alpha}_2+x_3\boldsymbol{\alpha}_3+x_4\boldsymbol{\alpha}_4=\boldsymbol{b}.
\]
那么用向量的语言：方程组问题就可转换为向量 \(\boldsymbol{b}\) 由向量 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3,\boldsymbol{\alpha}_4\) 线性表出的问题。

**例4** 设 \(\boldsymbol{A}=\boldsymbol{E}-\boldsymbol{\xi}\boldsymbol{\xi}^{\mathrm T}\)，其中 \(\boldsymbol{\xi}\) 是 \(n\) 维非零列向量。

证明：\(\boldsymbol{A}^{2}=\boldsymbol{A}\Leftrightarrow \boldsymbol{\xi}^{\mathrm T}\boldsymbol{\xi}=1\)。

**【证】**
\[
\boldsymbol{A}^{2}
=
(\boldsymbol{E}-\boldsymbol{\xi}\boldsymbol{\xi}^{\mathrm T})(\boldsymbol{E}-\boldsymbol{\xi}\boldsymbol{\xi}^{\mathrm T})
=
\boldsymbol{E}-\boldsymbol{\xi}\boldsymbol{\xi}^{\mathrm T}-\boldsymbol{\xi}\boldsymbol{\xi}^{\mathrm T}
+\boldsymbol{\xi}\boldsymbol{\xi}^{\mathrm T}\boldsymbol{\xi}\boldsymbol{\xi}^{\mathrm T}
\]
\[
=
\boldsymbol{A}+\boldsymbol{\xi}(\boldsymbol{\xi}^{\mathrm T}\boldsymbol{\xi})\boldsymbol{\xi}^{\mathrm T}
-\boldsymbol{\xi}\boldsymbol{\xi}^{\mathrm T}
=
\boldsymbol{A}+(\boldsymbol{\xi}^{\mathrm T}\boldsymbol{\xi}-1)\boldsymbol{\xi}\boldsymbol{\xi}^{\mathrm T}.
\]
因为 \(\boldsymbol{\xi}\ne\boldsymbol{0}\)，所以 \(\boldsymbol{\xi}\boldsymbol{\xi}^{\mathrm T}\ne\boldsymbol{O}\)。
\[
\boldsymbol{A}^{2}=\boldsymbol{A}
\Leftrightarrow
(\boldsymbol{\xi}^{\mathrm T}\boldsymbol{\xi}-1)\boldsymbol{\xi}\boldsymbol{\xi}^{\mathrm T}=\boldsymbol{O}
\]
\[
\Leftrightarrow \boldsymbol{\xi}^{\mathrm T}\boldsymbol{\xi}-1=0
\]
\[
\Leftrightarrow \boldsymbol{\xi}^{\mathrm T}\boldsymbol{\xi}=1.
\]

### 3. 常见的矩阵

设 \(\boldsymbol{A}\) 是 \(n\) 阶矩阵。

（1）**单位阵**：主对角元素为 \(1\)，其余元素为 \(0\) 的矩阵称为单位阵，记成 \(\boldsymbol{E}_n\)。

（2）**数量阵**：数 \(k\) 与单位阵 \(\boldsymbol{E}\) 的积 \(k\boldsymbol{E}\) 称为数量阵。

（3）**对角阵**：非对角元素都是 \(0\) 的矩阵（即 \(\forall i\ne j\) 恒有 \(a_{ij}=0\)）称为对角阵，记成 \(\boldsymbol{\Lambda}\)。
\[
\boldsymbol{\Lambda}=\operatorname{diag}[a_1,a_2,\cdots,a_n].
\]

（4）**上（下）三角阵**：当 \(i>j\)（\(i<j\)）时，有 \(a_{ij}=0\) 的矩阵称为上（下）三角阵。

（5）**对称阵**：满足 \(\boldsymbol{A}^{\mathrm T}=\boldsymbol{A}\)，即 \(a_{ij}=a_{ji}\) 的矩阵称为对称阵。

（6）**反对称阵**：满足 \(\boldsymbol{A}^{\mathrm T}=-\boldsymbol{A}\)，即 \(a_{ij}=-a_{ji},a_{ii}=0\) 的矩阵称为反对称阵。

**练习 2.2**

（1）\([x_1,x_2]\begin{pmatrix}1&3\\5&7\end{pmatrix}\begin{pmatrix}x_1\\x_2\end{pmatrix}=\) \underline{\qquad\qquad}。

（2）\([x_1,x_2,x_3]\begin{pmatrix}1&0&1\\0&2&-1\\1&-1&3\end{pmatrix}\begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix}=\) \underline{\qquad\qquad}。

（3）已知 \(\boldsymbol{A}=\begin{pmatrix}1&2\\0&3\end{pmatrix}\)，若 \(f(x)=2x^{2}-5x+3\)，则 \(f(\boldsymbol{A})=\) \underline{\qquad\qquad}。

（练习答案在 297 页）` },
      { p: 233, md: R`## 二、伴随矩阵、可逆矩阵

### 1. 伴随矩阵的概念与公式

**伴随矩阵：** 由矩阵 \(\boldsymbol{A}\) 的行列式 \(|\boldsymbol{A}|\) 所有的代数余子式所构成的形如
\[
\begin{pmatrix}
A_{11}&A_{21}&\cdots&A_{n1}\\
A_{12}&A_{22}&\cdots&A_{n2}\\
\vdots&\vdots&&\vdots\\
A_{1n}&A_{2n}&\cdots&A_{nn}
\end{pmatrix}
\]
的矩阵称为矩阵 \(\boldsymbol{A}\) 的伴随矩阵，记为 \(\boldsymbol{A}^{*}\)。

例如，\(\boldsymbol{A}=\begin{pmatrix}2&1&2\\-1&0&3\\1&-2&1\end{pmatrix}\)，则计算代数余子式，得
\[
A_{11}=
\begin{vmatrix}0&3\\-2&1\end{vmatrix}=6,
\quad
A_{12}=-
\begin{vmatrix}-1&3\\1&1\end{vmatrix}=4,
\quad
A_{13}=
\begin{vmatrix}-1&0\\1&-2\end{vmatrix}=2,
\]
\[
A_{21}=-
\begin{vmatrix}1&2\\-2&1\end{vmatrix}=-5,
\quad
A_{22}=
\begin{vmatrix}2&2\\1&1\end{vmatrix}=0,
\quad
A_{23}=-
\begin{vmatrix}2&1\\1&-2\end{vmatrix}=5,
\]
\[
A_{31}=
\begin{vmatrix}1&2\\0&3\end{vmatrix}=3,
\quad
A_{32}=-
\begin{vmatrix}2&2\\-1&3\end{vmatrix}=-8,
\quad
A_{33}=
\begin{vmatrix}2&1\\-1&0\end{vmatrix}=1.
\]
按定义
\[
\boldsymbol{A}^{*}=
\begin{pmatrix}
6&-5&3\\
4&0&-8\\
2&5&1
\end{pmatrix}.
\]

**伴随矩阵的公式：**
\[
\boldsymbol{AA}^{*}=\boldsymbol{A}^{*}\boldsymbol{A}=|\boldsymbol{A}|\boldsymbol{E}
\]
\[
(\boldsymbol{A}^{*})^{-1}=(\boldsymbol{A}^{-1})^{*}
=\frac{1}{|\boldsymbol{A}|}\boldsymbol{A}
\quad(|\boldsymbol{A}|\ne0)
\]
\[
(k\boldsymbol{A})^{*}=k^{n-1}\boldsymbol{A}^{*}
\]
\[
(\boldsymbol{A}^{*})^{\mathrm T}=(\boldsymbol{A}^{\mathrm T})^{*}
\]
\[
|\boldsymbol{A}^{*}|=|\boldsymbol{A}|^{n-1}
\]
\[
(\boldsymbol{A}^{*})^{*}=|\boldsymbol{A}|^{n-2}\boldsymbol{A}
\quad(n\ge2)
\]

### 2. 可逆矩阵的概念与定理

**定义** 设 \(\boldsymbol{A}\) 是 \(n\) 阶矩阵，如果存在 \(n\) 阶矩阵 \(\boldsymbol{B}\) 使得
\[
\boldsymbol{AB}=\boldsymbol{BA}=\boldsymbol{E}\quad(\text{单位矩阵})
\]
成立，则称 \(\boldsymbol{A}\) 是可逆矩阵或非奇异矩阵，\(\boldsymbol{B}\) 是 \(\boldsymbol{A}\) 的逆矩阵，记成 \(\boldsymbol{A}^{-1}=\boldsymbol{B}\)。

**定理 2.1** 若 \(\boldsymbol{A}\) 可逆，则 \(\boldsymbol{A}\) 的逆矩阵唯一。

**定理 2.2** \(\boldsymbol{A}\) 可逆 \(\Leftrightarrow |\boldsymbol{A}|\ne0\)。

**定理 2.3** 设 \(\boldsymbol{A}\) 和 \(\boldsymbol{B}\) 是 \(n\) 阶矩阵且 \(\boldsymbol{AB}=\boldsymbol{E}\)，则 \(\boldsymbol{BA}=\boldsymbol{E}\)。

### 3. \(n\) 阶矩阵 \(\boldsymbol{A}\) 可逆的充分必要条件

（1）存在 \(n\) 阶矩阵 \(\boldsymbol{B}\)，使 \(\boldsymbol{AB}=\boldsymbol{E}\)（或 \(\boldsymbol{BA}=\boldsymbol{E}\)）。

（2）\(|\boldsymbol{A}|\ne0\)，或秩 \(r(\boldsymbol{A})=n\)，或 \(\boldsymbol{A}\) 的列（行）向量线性无关。` },
      { p: 234, md: R`（3）齐次方程组 \(\boldsymbol{Ax}=\boldsymbol{0}\) 只有零解。

（4）\(\forall \boldsymbol{b}\)，非齐次线性方程组 \(\boldsymbol{Ax}=\boldsymbol{b}\) 总有唯一解。

（5）矩阵 \(\boldsymbol{A}\) 的特征值全不为 \(0\)。

### 4. 逆矩阵的运算性质

若 \(k\ne0,\boldsymbol{A}\) 可逆，则 \((k\boldsymbol{A})^{-1}=\dfrac{1}{k}\boldsymbol{A}^{-1}\)；若 \(\boldsymbol{A},\boldsymbol{B}\) 可逆，则 \((\boldsymbol{AB})^{-1}=\boldsymbol{B}^{-1}\boldsymbol{A}^{-1}\)，特别地 \((\boldsymbol{A}^{2})^{-1}=(\boldsymbol{A}^{-1})^{2}\)；

若 \(\boldsymbol{A}^{\mathrm T}\) 可逆，则 \((\boldsymbol{A}^{\mathrm T})^{-1}=(\boldsymbol{A}^{-1})^{\mathrm T}\)；\((\boldsymbol{A}^{-1})^{-1}=\boldsymbol{A}\)；\(|\boldsymbol{A}^{-1}|=\dfrac{1}{|\boldsymbol{A}|}\)。

**注意** 即使 \(\boldsymbol{A},\boldsymbol{B}\) 和 \(\boldsymbol{A}+\boldsymbol{B}\) 都可逆，一般地 \((\boldsymbol{A}+\boldsymbol{B})^{-1}\ne\boldsymbol{A}^{-1}+\boldsymbol{B}^{-1}\)。

### 5. 求逆矩阵的方法

**方法一** 用公式，若 \(|\boldsymbol{A}|\ne0\)，则 \(\boldsymbol{A}^{-1}=\dfrac{1}{|\boldsymbol{A}|}\boldsymbol{A}^{*}\)。

**方法二** 初等变换法
\[
(\boldsymbol{A}\mid\boldsymbol{E})
\xrightarrow{\text{初等行变换}}
(\boldsymbol{E}\mid\boldsymbol{A}^{-1}).
\]

**方法三** 用定义求 \(\boldsymbol{B}\)，使 \(\boldsymbol{AB}=\boldsymbol{E}\) 或 \(\boldsymbol{BA}=\boldsymbol{E}\)，则 \(\boldsymbol{A}\) 可逆，且 \(\boldsymbol{A}^{-1}=\boldsymbol{B}\)。

**方法四** 用分块矩阵。设 \(\boldsymbol{B},\boldsymbol{C}\) 都是可逆矩阵，则
\[
\begin{pmatrix}\boldsymbol{B}&\boldsymbol{O}\\\boldsymbol{O}&\boldsymbol{C}\end{pmatrix}^{-1}
=
\begin{pmatrix}\boldsymbol{B}^{-1}&\boldsymbol{O}\\\boldsymbol{O}&\boldsymbol{C}^{-1}\end{pmatrix};
\quad
\begin{pmatrix}\boldsymbol{O}&\boldsymbol{B}\\\boldsymbol{C}&\boldsymbol{O}\end{pmatrix}^{-1}
=
\begin{pmatrix}\boldsymbol{O}&\boldsymbol{C}^{-1}\\\boldsymbol{B}^{-1}&\boldsymbol{O}\end{pmatrix}.
\]

**例5** 若 \(\boldsymbol{A}=\begin{pmatrix}1&1&1\\1&2&1\\1&1&3\end{pmatrix}\)，则 \(\boldsymbol{A}^{-1}=\) \underline{\qquad\qquad}。

**【分析】** 用行变换 \((\boldsymbol{A}\mid\boldsymbol{E})\to(\boldsymbol{E}\mid\boldsymbol{A}^{-1})\) 的方法：
\[
\left(\begin{array}{ccc|ccc}
1&1&1&1&0&0\\
1&2&1&0&1&0\\
1&1&3&0&0&1
\end{array}\right)
\to
\left(\begin{array}{ccc|ccc}
1&1&1&1&0&0\\
0&1&0&-1&1&0\\
0&0&2&-1&0&1
\end{array}\right)
\to
\left(\begin{array}{ccc|ccc}
1&1&1&1&0&0\\
0&1&0&-1&1&0\\
0&0&1&-\dfrac{1}{2}&0&\dfrac{1}{2}
\end{array}\right)
\]
\[
\to
\left(\begin{array}{ccc|ccc}
1&1&0&\dfrac{3}{2}&0&-\dfrac{1}{2}\\
0&1&0&-1&1&0\\
0&0&1&-\dfrac{1}{2}&0&\dfrac{1}{2}
\end{array}\right)
\to
\left(\begin{array}{ccc|ccc}
1&0&0&\dfrac{5}{2}&-1&-\dfrac{1}{2}\\
0&1&0&-1&1&0\\
0&0&1&-\dfrac{1}{2}&0&\dfrac{1}{2}
\end{array}\right).
\]
故
\[
\boldsymbol{A}^{-1}=
\begin{pmatrix}
\dfrac{5}{2}&-1&-\dfrac{1}{2}\\
-1&1&0\\
-\dfrac{1}{2}&0&\dfrac{1}{2}
\end{pmatrix}.
\]

**【注】** 非常重要的基础计算，必须动手做题，千万别大意！` },
      { p: 235, md: R`**例6** 设
\[
\boldsymbol{A}=
\begin{pmatrix}
0&a_1&0&\cdots&0\\
0&0&a_2&\cdots&0\\
\vdots&\vdots&\vdots&&\vdots\\
0&0&0&\cdots&a_{n-1}\\
a_n&0&0&\cdots&0
\end{pmatrix},
\]
其中 \(a_i\ne0,i=1,2,\cdots,n\)，则 \(\boldsymbol{A}^{*}=\) \underline{\qquad\qquad}。

**【分析】** 对 \(\boldsymbol{A}\) 分块
\[
\boldsymbol{A}=
\left(\begin{array}{c|cccc}
0&a_1&0&\cdots&0\\
\vdots&\vdots&\vdots&&\vdots\\
0&0&0&\cdots&a_{n-1}\\
\hline
a_n&0&0&\cdots&0
\end{array}\right)
=
\begin{pmatrix}\boldsymbol{O}&\boldsymbol{A}_1\\\boldsymbol{A}_2&\boldsymbol{O}\end{pmatrix}
\]
则
\[
|\boldsymbol{A}|=(-1)^{n+1}a_1a_2\cdots a_n\ne0
\]
\(\boldsymbol{A}\) 可逆，且
\[
\boldsymbol{A}^{-1}=
\begin{pmatrix}
0&0&\cdots&0&\dfrac{1}{a_n}\\
\dfrac{1}{a_1}&0&\cdots&0&0\\
0&\dfrac{1}{a_2}&\cdots&0&0\\
\vdots&\vdots&&\vdots&\vdots\\
0&0&\cdots&\dfrac{1}{a_{n-1}}&0
\end{pmatrix}.
\]
\[
\therefore
\boldsymbol{A}^{*}=|\boldsymbol{A}|\boldsymbol{A}^{-1}
=
(-1)^{n+1}\prod_{i=1}^{n}a_i
\begin{pmatrix}
0&0&\cdots&0&\dfrac{1}{a_n}\\
\dfrac{1}{a_1}&0&\cdots&0&0\\
0&\dfrac{1}{a_2}&\cdots&0&0\\
\vdots&\vdots&&\vdots&\vdots\\
0&0&\cdots&\dfrac{1}{a_{n-1}}&0
\end{pmatrix}.
\]

**【注】** 这里用到了
\[
\begin{pmatrix}\boldsymbol{O}&\boldsymbol{A}\\\boldsymbol{B}&\boldsymbol{O}\end{pmatrix}^{-1}
=
\begin{pmatrix}\boldsymbol{O}&\boldsymbol{B}^{-1}\\\boldsymbol{A}^{-1}&\boldsymbol{O}\end{pmatrix};
\quad
\begin{pmatrix}
a_1&&&\\
&a_2&&\\
&&\ddots&\\
&&&a_n
\end{pmatrix}^{-1}
=
\begin{pmatrix}
\dfrac{1}{a_1}&&&\\
&\dfrac{1}{a_2}&&\\
&&\ddots&\\
&&&\dfrac{1}{a_n}
\end{pmatrix}.
\]

**例7** （1995，数三）设 \(\boldsymbol{A}=\begin{pmatrix}1&0&0\\2&2&0\\3&4&5\end{pmatrix}\)，\(\boldsymbol{A}^{*}\) 是 \(\boldsymbol{A}\) 的伴随矩阵，则 \((\boldsymbol{A}^{*})^{-1}=\) \underline{\qquad\qquad}。

**【分析】** 因 \(\boldsymbol{AA}^{*}=|\boldsymbol{A}|\boldsymbol{E}\)，有
\[
\frac{1}{|\boldsymbol{A}|}\boldsymbol{A}\cdot\boldsymbol{A}^{*}=\boldsymbol{E}
\]` },
      { p: 236, md: R`即
\[
(\boldsymbol{A}^{*})^{-1}=\frac{1}{|\boldsymbol{A}|}\boldsymbol{A}.
\]
现 \(|\boldsymbol{A}|=10\)。
\[
\therefore
(\boldsymbol{A}^{*})^{-1}
=
\frac{1}{10}
\begin{pmatrix}
1&0&0\\
2&2&0\\
3&4&5
\end{pmatrix}.
\]

**例8** 设 \(\boldsymbol{\alpha}=\left(\dfrac{1}{2},0,\cdots,0,\dfrac{1}{2}\right)^{\mathrm T}\) 是 \(n\) 维列向量，矩阵 \(\boldsymbol{A}=\boldsymbol{E}-\boldsymbol{\alpha}\boldsymbol{\alpha}^{\mathrm T},\boldsymbol{B}=\boldsymbol{E}+a\boldsymbol{\alpha}\boldsymbol{\alpha}^{\mathrm T}\)，若 \(\boldsymbol{B}\) 是 \(\boldsymbol{A}\) 的逆矩阵，则 \(a=\) \underline{\qquad\qquad}。

**【分析】**
\[
\boldsymbol{AB}
=
(\boldsymbol{E}-\boldsymbol{\alpha}\boldsymbol{\alpha}^{\mathrm T})(\boldsymbol{E}+a\boldsymbol{\alpha}\boldsymbol{\alpha}^{\mathrm T})
=
\boldsymbol{E}+a\boldsymbol{\alpha}\boldsymbol{\alpha}^{\mathrm T}
-\boldsymbol{\alpha}\boldsymbol{\alpha}^{\mathrm T}
-a\boldsymbol{\alpha}\boldsymbol{\alpha}^{\mathrm T}\boldsymbol{\alpha}\boldsymbol{\alpha}^{\mathrm T}
\]
\[
=
\boldsymbol{E}+(a-1-a\boldsymbol{\alpha}^{\mathrm T}\boldsymbol{\alpha})\boldsymbol{\alpha}\boldsymbol{\alpha}^{\mathrm T}.
\]
又
\[
\boldsymbol{\alpha}^{\mathrm T}\boldsymbol{\alpha}
=
\left(\frac{1}{2},0,\cdots,0,\frac{1}{2}\right)
\begin{pmatrix}
\dfrac{1}{2}\\0\\\vdots\\0\\\dfrac{1}{2}
\end{pmatrix}
=
\frac{1}{2},
\]
故
\[
\boldsymbol{AB}
=
\boldsymbol{E}+\left(a-1-\frac{1}{2}a\right)\boldsymbol{\alpha}\boldsymbol{\alpha}^{\mathrm T}
=
\boldsymbol{E}.
\]
\[
\Leftrightarrow \left(\frac{1}{2}a-1\right)\boldsymbol{\alpha}\boldsymbol{\alpha}^{\mathrm T}=\boldsymbol{O},
\]
所以 \(a=2\)。

**例9** \(\boldsymbol{A}\) 是 \(n\) 阶矩阵满足 \(\boldsymbol{A}^{2}-3\boldsymbol{A}-2\boldsymbol{E}=\boldsymbol{O}\)，则 \((\boldsymbol{A}+\boldsymbol{E})^{-1}=\) \underline{\qquad\qquad}。

**【分析】** 本题矩阵 \(\boldsymbol{A}\) 没有具体元素，应考虑用定义法：

由
\[
(\boldsymbol{A}+\boldsymbol{E})(\boldsymbol{A}-4\boldsymbol{E})+2\boldsymbol{E}
=
\boldsymbol{A}^{2}-3\boldsymbol{A}-2\boldsymbol{E}
=
\boldsymbol{O}
\]
即
\[
(\boldsymbol{A}+\boldsymbol{E})(\boldsymbol{A}-4\boldsymbol{E})=-2\boldsymbol{E}
\]
即
\[
(\boldsymbol{A}+\boldsymbol{E})\cdot\frac{1}{2}(4\boldsymbol{E}-\boldsymbol{A})=\boldsymbol{E}
\]
故
\[
(\boldsymbol{A}+\boldsymbol{E})^{-1}=\frac{1}{2}(4\boldsymbol{E}-\boldsymbol{A}).
\]

**例10** 设 \(\boldsymbol{A},\boldsymbol{B}\) 都是 \(3\) 阶矩阵，且 \(\boldsymbol{AB}=2\boldsymbol{A}+\boldsymbol{B}\)，若 \(\boldsymbol{B}=\begin{pmatrix}2&0&2\\0&4&0\\2&0&2\end{pmatrix}\)，则 \((\boldsymbol{A}-\boldsymbol{E})^{-1}=\) \underline{\qquad\qquad}。

**【分析】** 由 \(\boldsymbol{AB}=2\boldsymbol{A}+\boldsymbol{B}\)，有
\[
\boldsymbol{AB}-\boldsymbol{B}-2\boldsymbol{A}+2\boldsymbol{E}=2\boldsymbol{E},
\]
即
\[
(\boldsymbol{A}-\boldsymbol{E})(\boldsymbol{B}-2\boldsymbol{E})=2\boldsymbol{E}.
\]
故
\[
(\boldsymbol{A}-\boldsymbol{E})^{-1}
=
\frac{1}{2}(\boldsymbol{B}-2\boldsymbol{E})
=
\begin{pmatrix}
0&0&1\\
0&1&0\\
1&0&0
\end{pmatrix}.
\]

**例11** （2001，数二）已知 \(\boldsymbol{A}=\begin{pmatrix}1&0&0\\1&1&0\\1&1&1\end{pmatrix},\boldsymbol{B}=\begin{pmatrix}0&1&1\\1&0&1\\1&1&0\end{pmatrix}\)，矩阵 \(\boldsymbol{X}\) 满足` },
      { p: 237, md: R`\[
AXA+BXB=AXB+BXA+E
\]
则 \(X=\) ______.

**【分析】**
\[
AXA+BXB-AXB-BXA=E
\]
\[
(A-B)XA-(A-B)XB=E
\]
\[
(A-B)X(A-B)=E
\]
\[
X=[(A-B)^{-1}]^{2}
=\left(\begin{pmatrix}1&-1&-1\\0&1&-1\\0&0&1\end{pmatrix}^{-1}\right)^{2}
=\begin{pmatrix}1&1&2\\0&1&1\\0&0&1\end{pmatrix}^{2}
=\begin{pmatrix}1&2&5\\0&1&2\\0&0&1\end{pmatrix}.
\]

**例12** 设 \(f(x)=x^{100}+x^{99}+\cdots+x+1\)，
\[
A=\begin{pmatrix}1&0&0\\0&0&1\\0&0&0\end{pmatrix}
\]
求 \(f(A)\) 和 \(f(A)^{-1}\).

**【分析】** 因
\[
A^{2}=\begin{pmatrix}1&0&0\\0&0&1\\0&0&0\end{pmatrix}
\begin{pmatrix}1&0&0\\0&0&1\\0&0&0\end{pmatrix}
=\begin{pmatrix}1&0&0\\0&0&0\\0&0&0\end{pmatrix},
\]
又
\[
A^{3}=A^{2}A
=\begin{pmatrix}1&0&0\\0&0&0\\0&0&0\end{pmatrix}
\begin{pmatrix}1&0&0\\0&0&1\\0&0&0\end{pmatrix}
=\begin{pmatrix}1&0&0\\0&0&0\\0&0&0\end{pmatrix}
=A^{2}.
\]
知 \(A^{m}=A^{2}\)（当 \(m\geq2\) 时），故
\[
\begin{aligned}
f(A)&=A^{100}+\cdots+A^{2}+A+E=99A^{2}+A+E\\
&=\begin{pmatrix}99&0&0\\0&0&0\\0&0&0\end{pmatrix}
+\begin{pmatrix}1&0&0\\0&0&1\\0&0&0\end{pmatrix}
+\begin{pmatrix}1&0&0\\0&1&0\\0&0&1\end{pmatrix}
=\begin{pmatrix}101&0&0\\0&1&1\\0&0&1\end{pmatrix}.
\end{aligned}
\]
\[
f(A)^{-1}
=\begin{pmatrix}101&0&0\\0&1&1\\0&0&1\end{pmatrix}^{-1}
=\begin{pmatrix}\frac{1}{101}&0&0\\0&1&-1\\0&0&1\end{pmatrix}.
\]

**例13** \(A\) 是 \(n\) 阶可逆矩阵，证明非齐次线性方程组 \(Ax=b\) 有唯一解 \(A^{-1}b\).

**【证】** 先证 \(Ax=b\) 有解.

因为
\[
A(A^{-1}b)=(AA^{-1})b=Eb=b
\]
所以 \(A^{-1}b\) 是方程组的解，故方程组 \(Ax=b\) 有解.

再证唯一性，设 \(\boldsymbol{\alpha}\) 是 \(Ax=b\) 的任一个解，则 \(A\boldsymbol{\alpha}=b\). 那么
\[
A^{-1}(A\boldsymbol{\alpha})=A^{-1}b
\]
\[
(A^{-1}A)\boldsymbol{\alpha}=A^{-1}b
\]
\(\Rightarrow\boldsymbol{\alpha}=A^{-1}b\)，即 \(Ax=b\) 的解唯一.

**【注】** 以三元一次方程组
\[
\begin{cases}
a_{11}x_1+a_{12}x_2+a_{13}x_3=b_1,\\
a_{21}x_1+a_{22}x_2+a_{23}x_3=b_2,\\
a_{31}x_1+a_{32}x_2+a_{33}x_3=b_3
\end{cases}
\]
` },
      { p: 238, md: R`为例，注意到：唯一解 \(\boldsymbol{\alpha}=(x_1,x_2,x_3)^{\mathrm T}\) 有
\[
\boldsymbol{\alpha}=A^{-1}\boldsymbol{b}
=\frac{1}{|A|}A^*\boldsymbol{b}
=\frac{1}{|A|}
\begin{pmatrix}
A_{11}&A_{21}&A_{31}\\
A_{12}&A_{22}&A_{32}\\
A_{13}&A_{23}&A_{33}
\end{pmatrix}
\begin{pmatrix}b_1\\b_2\\b_3\end{pmatrix}
\]
\[
x_1=\frac{1}{|A|}(b_1A_{11}+b_2A_{21}+b_3A_{31})
=\frac{1}{|A|}
\begin{vmatrix}
b_1&a_{12}&a_{13}\\
b_2&a_{22}&a_{23}\\
b_3&a_{32}&a_{33}
\end{vmatrix};
\]
\(x_2,x_3\) 下略. 这就是克拉默法则的矩阵法证明吧！

**练习 2.3**

(1)（1991，数一）\(A,B,C\) 均为 \(n\) 阶矩阵，且 \(ABC=E\)，则必有  
(A) \(ACB=E\).　　(B) \(CBA=E\).  
(C) \(BAC=E\).　　(D) \(BCA=E\).

(2) 已知
\[
\begin{pmatrix}1&-5\\-1&4\end{pmatrix}X
=\begin{pmatrix}1&2\\0&-1\end{pmatrix},
\]
则 \(X=\) ______.

(3)（1995，数一）已知 \(A^{-1}BA=6A+BA\)，若
\[
A=\begin{pmatrix}\frac{1}{3}&0&0\\0&\frac{1}{4}&0\\0&0&\frac{1}{7}\end{pmatrix},
\]
则 \(B=\) ______.

(4) 已知
\[
A=\begin{pmatrix}2&2&3\\1&-1&0\\-1&2&1\end{pmatrix},
\]
则 \(A^{-1}=\) ______.

（练习答案在 297 页）

## 三、初等变换、初等矩阵

### 1. 初等变换与初等矩阵的概念

**定义**（初等变换） 设 \(A\) 是 \(m\times n\) 矩阵，

(1) 用某个非零常数 \(k(k\neq0)\) 乘 \(A\) 的某行（列）的每个元素；

(2) 互换 \(A\) 的某两行（列）的位置；

(3) 将 \(A\) 的某行（列）元素的 \(k\) 倍加到另一行（列），` },
      { p: 239, md: R`称为矩阵的三种初等行（列）变换，且分别称为初等倍乘、互换、倍加行（列）变换，统称初等变换.

**定义**（初等矩阵） 由单位矩阵经一次初等变换得到的矩阵称为初等矩阵，它们分别是（以 3 阶为例）.

(1) 倍乘初等矩阵，记 \(E(i(k))\).
\[
E(2(k))=\begin{pmatrix}1&0&0\\0&k&0\\0&0&1\end{pmatrix}
\]
\(E(2(k))\) 表示由单位阵 \(E\) 的第二行（或第二列）乘 \(k(k\neq0)\) 倍得到的矩阵.

(2) 互换初等矩阵，记 \(E(i,j)\).
\[
E(1,2)=\begin{pmatrix}0&1&0\\1&0&0\\0&0&1\end{pmatrix}
\]
\(E(1,2)\) 表示由单位阵 \(E\) 的第一，二行（或一，二列）互换得到的矩阵.

(3) 倍加初等矩阵，记 \(E(ij(k))\).
\[
E(13(k))=\begin{pmatrix}1&0&0\\0&1&0\\k&0&1\end{pmatrix}
\]
\(E(13(k))\) 表示由单位阵 \(E\) 的第一行的 \(k\) 倍加到第三行得到的矩阵. 当看成列变换时，应是 \(E\) 的第三列的 \(k\) 倍加到第一列得到的矩阵.

**定义**（等价矩阵） 矩阵 \(A\) 经过有限次初等变换变成矩阵 \(B\)，则称 \(A\) 与 \(B\) 等价，记成 \(A\cong B\). 若 \(A\cong\begin{pmatrix}E_r&O\\O&O\end{pmatrix}\)，则后者称为 \(A\) 的等价标准形.（\(A\) 的等价标准形是与 \(A\) 等价的所有矩阵中的最简矩阵）.

### 2. 初等矩阵与初等变换的性质

(1) 初等矩阵的转置仍是初等矩阵.

(2) 初等矩阵均是可逆阵，且其逆矩阵仍是初等矩阵.
\[
E(i,j)^{-1}=E(i,j);\quad
E(i(k))^{-1}=E\left(i\left(\frac{1}{k}\right)\right);\quad
E(ij(k))^{-1}=E(ij(-k))
\]

(3) 用初等矩阵 \(P\) 左乘（右乘）\(A\)，其结果 \(PA(AP)\)，相当于对 \(A\) 作相应的初等行（列）变换.

**定理 2.4** 矩阵 \(A\) 可逆的充分必要条件是它能表示成一些初等矩阵的乘积
\[
P_t\cdots P_2P_1A=E
\]

### 3. 行阶梯矩阵，行最简矩阵

**行阶梯矩阵**

(1) 如果矩阵中有零行（即这一行元素全是 0），则零行在矩阵的底部.

(2) 每个非零行的主元（即该行最左边的第 1 个非零元），它们的列指标随着行指标的递增而严格增大.

例
\[
\begin{pmatrix}2&1&3\\0&0&0\\0&0&5\end{pmatrix},\quad
\begin{pmatrix}1&3&-2\\0&1&4\\0&2&5\end{pmatrix}
\]
都不是行阶梯矩阵.` },
      { p: 240, md: R`例
\[
\begin{pmatrix}1&2&0&3\\0&1&-1&5\\0&0&0&6\end{pmatrix},\quad
\begin{pmatrix}3&0&1&-4\\0&0&2&7\\0&0&0&0\end{pmatrix}
\]
是行阶梯矩阵.

**行最简矩阵**

一个行阶梯矩阵，如果还满足：

非零行的主元都是 1，且主元所在的列的其他元素都是 0，则称其为行最简矩阵.

例
\[
\begin{pmatrix}1&0&3&1\\0&1&1&0\\0&0&0&1\end{pmatrix},\quad
\begin{pmatrix}1&1&2&0\\0&1&3&0\\0&0&0&1\end{pmatrix},\quad
\begin{pmatrix}1&-1&0&0\\0&2&1&0\\0&0&0&1\end{pmatrix}
\]
都不是行最简矩阵.

例
\[
\begin{pmatrix}1&0&-1&0\\0&1&2&0\\0&0&0&1\end{pmatrix},\quad
\begin{pmatrix}1&0&0&2\\0&0&1&3\\0&0&0&0\end{pmatrix}
\]
是行最简矩阵.

如 \(A\xrightarrow{\text{行}}B\)，即 \(P_t\cdots P_2P_1A=B\). 记 \(P=P_t\cdots P_2P_1\) 有 \(PA=B\).

由 \(P_t\cdots P_2P_1A=B\) 和 \(P_t\cdots P_2P_1E=P\) 表明当 \(A\) 经行变换得到 \(B\) 时，\(E\) 在同样的行变换下得到 \(P\)，即 \((A\mid E)\to(B\mid P)\).

**例14**（1995，数一）设
\[
A=\begin{pmatrix}
a_{11}&a_{12}&a_{13}\\
a_{21}&a_{22}&a_{23}\\
a_{31}&a_{32}&a_{33}
\end{pmatrix},\quad
B=\begin{pmatrix}
a_{21}&a_{22}&a_{23}\\
a_{11}&a_{12}&a_{13}\\
a_{31}+a_{11}&a_{32}+a_{12}&a_{33}+a_{13}
\end{pmatrix},
\]
\[
P_1=\begin{pmatrix}0&1&0\\1&0&0\\0&0&1\end{pmatrix},\quad
P_2=\begin{pmatrix}1&0&0\\0&1&0\\1&0&1\end{pmatrix},
\]
则必有

(A) \(AP_1P_2=B\).　　(B) \(AP_2P_1=B\).　　(C) \(P_1P_2A=B\).　　(D) \(P_2P_1A=B\).

**【分析】** 观察到矩阵 \(A\) 经过两次初等行变换可得到 \(B\)，按初等矩阵的性质应该是左乘初等矩阵，排除 (A)(B).

\(P_1P_2A\) 表示先把 \(A\) 的第一行加至第三行，然后再一、二两行互换，这正是矩阵 \(B\)，所以应当选 (C).

而 \(P_2P_1A\) 表示先把 \(A\) 的一、二两行互换，然后再把第一行加至第三行，那么这时的矩阵是
\[
\begin{pmatrix}
a_{21}&a_{22}&a_{23}\\
a_{11}&a_{12}&a_{13}\\
a_{31}+a_{21}&a_{32}+a_{22}&a_{33}+a_{23}
\end{pmatrix}
\]

**例15** 已知 \(A\) 是 3 阶矩阵，将 \(A\) 矩阵的 1，3 两行互换得到 \(B\)，再将 \(B\) 的第 2 列的 \(-1\) 倍加到第 3 列得到
\[
C=\begin{pmatrix}7&8&1\\4&5&1\\1&2&1\end{pmatrix},
\]
则 \(A=\) ______.

**【分析】** 由已知
\[
P_1A=B,\quad
P_1=\begin{pmatrix}0&0&1\\0&1&0\\1&0&0\end{pmatrix}
\]` },
      { p: 241, md: R`\[
BP_2=C,\quad
P_2=\begin{pmatrix}1&0&0\\0&1&-1\\0&0&1\end{pmatrix}
\]
\[
P_1AP_2=C
\]
\[
\begin{aligned}
A&=P_1^{-1}CP_2^{-1}\\
&=\begin{pmatrix}0&0&1\\0&1&0\\1&0&0\end{pmatrix}
\begin{pmatrix}7&8&1\\4&5&1\\1&2&1\end{pmatrix}
\begin{pmatrix}1&0&0\\0&1&1\\0&0&1\end{pmatrix}\\
&=\begin{pmatrix}1&2&3\\4&5&6\\7&8&9\end{pmatrix}.
\end{aligned}
\]

**例16** 已知
\[
A=\begin{pmatrix}1&-1&-1&3\\2&-1&-3&1\\3&2&-5&2\end{pmatrix},
\]
化其为行最简矩阵 \(F\)，并求一个可逆矩阵 \(P\) 使 \(PA=F\).

**【解】** 对矩阵 \(A\) 作初等行变换
\[
(A,E)=
\left(\begin{array}{cccc|ccc}
1&-1&-1&3&1&0&0\\
2&-1&-3&1&0&1&0\\
3&2&-5&2&0&0&1
\end{array}\right)
\to
\left(\begin{array}{cccc|ccc}
1&-1&-1&3&1&0&0\\
0&1&-1&-5&-2&1&0\\
0&5&-2&-7&-3&0&1
\end{array}\right)
\]
\[
\to
\left(\begin{array}{cccc|ccc}
1&-1&-1&3&1&0&0\\
0&1&-1&-5&-2&1&0\\
0&0&3&18&7&-5&1
\end{array}\right)
\to
\left(\begin{array}{cccc|ccc}
1&0&-2&-2&-1&1&0\\
0&1&-1&-5&-2&1&0\\
0&0&1&6&\frac{7}{3}&-\frac{5}{3}&\frac{1}{3}
\end{array}\right)
\]
\[
\to
\left(\begin{array}{cccc|ccc}
1&0&0&10&\frac{11}{3}&-\frac{7}{3}&\frac{2}{3}\\
0&1&0&1&\frac{1}{3}&-\frac{2}{3}&\frac{1}{3}\\
0&0&1&6&\frac{7}{3}&-\frac{5}{3}&\frac{1}{3}
\end{array}\right)
\]
矩阵 \(A\) 的行最简矩阵
\[
F=\begin{pmatrix}1&0&0&10\\0&1&0&1\\0&0&1&6\end{pmatrix}.
\]
\[
P=\frac{1}{3}\begin{pmatrix}11&-7&2\\1&-2&1\\7&-5&1\end{pmatrix}
\]
有 \(PA=F\).

**例17** 已知矩阵
\[
A=\begin{pmatrix}a&1&1\\1&a&1\\1&1&a\end{pmatrix}
\]
和矩阵
\[
B=\begin{pmatrix}1&2&-1\\2&3&5\\3&6&-3\end{pmatrix}
\]
等价，则 \(a=\) ______.

**【分析】** \(A\) 和 \(B\) 等价 \(\Leftrightarrow A\) 经初等变换得到矩阵 \(B\)
\[
\Leftrightarrow\exists\ \text{可逆矩阵 }P\text{ 和 }Q\text{ 使 }PAQ=B
\]
\[
\Leftrightarrow r(A)=r(B)
\]
明显 \(r(B)=2\).` },
      { p: 242, md: R`而
\[
|A|=\begin{vmatrix}a&1&1\\1&a&1\\1&1&a\end{vmatrix}=(a+2)(a-1)^{2}
\]
当 \(a=1\) 时，\(r(A)=1\).

当 \(a=-2\) 时，\(A\) 中
\[
\begin{vmatrix}-2&1\\1&-2\end{vmatrix}\neq0,
\]
而 \(|A|=0\)，从而 \(r(A)=2\)

\(\therefore A\) 和 \(B\) 等价 \(\Leftrightarrow a=-2\).

**练习 2.4**

(1)
\[
\begin{pmatrix}1&0&0\\0&2&0\\0&0&1\end{pmatrix}
\begin{pmatrix}1&2&3\\4&5&6\\7&8&9\end{pmatrix}
\begin{pmatrix}0&1&0\\1&0&0\\0&0&1\end{pmatrix}
=\underline{\qquad\qquad}.
\]

(2)
\[
\begin{pmatrix}0&1&0\\1&0&0\\0&0&1\end{pmatrix}
\begin{pmatrix}1&2&1\\2&3&4\\1&4&2\end{pmatrix}
\begin{pmatrix}1&1&0\\0&1&0\\0&0&1\end{pmatrix}
=\underline{\qquad\qquad}.
\]

(3) 设 \(A\) 是 3 阶矩阵，把 \(A\) 的二、三两列互换得到 \(B\)，把 \(B\) 的第三行的 \(-1\) 倍加到第一行得到 \(C\)，若
\[
A=\begin{pmatrix}1&1&1\\0&2&2\\0&0&3\end{pmatrix},
\]
则 \(C=\) ______.

(4) 将
\[
A=\begin{pmatrix}1&2&-1&3\\3&1&2&-6\\-1&3&-4&9\end{pmatrix}
\]
化为行最简矩阵.

（练习答案在 297 页）

## 四、分块矩阵

### 1. 分块矩阵的概念

将矩阵用若干纵线和横线分成许多小块，每一小块称为原矩阵的子矩阵（或子块），把子块看成原矩阵的一个元素，则原矩阵叫分块矩阵.

由于不同的需要，同一个矩阵可以用不同的方法分块，构成不同的分块矩阵.` },
      { p: 243, md: R`\[
A=\begin{pmatrix}
a_{11}&a_{12}&\cdots&a_{1n}\\
a_{21}&a_{22}&\cdots&a_{2n}\\
\vdots&\vdots&&\vdots\\
a_{m1}&a_{m2}&\cdots&a_{mn}
\end{pmatrix}
=\begin{pmatrix}
\boldsymbol{\alpha}_1\\
\boldsymbol{\alpha}_2\\
\vdots\\
\boldsymbol{\alpha}_m
\end{pmatrix}
\]
其中 \(\boldsymbol{\alpha}_i=[a_{i1},a_{i2},\cdots,a_{in}],i=1,2,\cdots,m\)，是 \(A\) 的子矩阵，\(A\) 是以行分块的分块矩阵.
\[
B=\begin{pmatrix}
b_{11}&b_{12}&\cdots&b_{1n}\\
b_{21}&b_{22}&\cdots&b_{2n}\\
\vdots&\vdots&&\vdots\\
b_{m1}&b_{m2}&\cdots&b_{mn}
\end{pmatrix}
=[\boldsymbol{\beta}_1,\boldsymbol{\beta}_2,\cdots,\boldsymbol{\beta}_n]
\]
其中 \(\boldsymbol{\beta}_j=[b_{1j},b_{2j},\cdots,b_{mj}]^{\mathrm T},j=1,2,\cdots,n\)，是 \(B\) 的子矩阵，\(B\) 是以列分块的分块矩阵.
\[
C=\left(\begin{array}{cc|ccc}
c_{11}&c_{12}&0&0&0\\
c_{21}&c_{22}&0&0&0\\ \hline
c_{31}&c_{32}&c_{33}&c_{34}&c_{35}\\
c_{41}&c_{42}&c_{43}&c_{44}&c_{45}
\end{array}\right)
=\begin{pmatrix}C_1&O\\C_3&C_4\end{pmatrix}
\]
其中
\[
C_1=\begin{pmatrix}c_{11}&c_{12}\\c_{21}&c_{22}\end{pmatrix},\quad
O=\begin{pmatrix}0&0&0\\0&0&0\end{pmatrix},\quad
C_3=\begin{pmatrix}c_{31}&c_{32}\\c_{41}&c_{42}\end{pmatrix},\quad
C_4=\begin{pmatrix}c_{33}&c_{34}&c_{35}\\c_{43}&c_{44}&c_{45}\end{pmatrix}
\]
是 \(C\) 的子矩阵.

### 2. 分块矩阵的运算

对矩阵适当地分块处理（要保证相对应子块的运算能够合理进行），就有如下运算法则：
\[
\begin{pmatrix}A_1&A_2\\A_3&A_4\end{pmatrix}
+\begin{pmatrix}B_1&B_2\\B_3&B_4\end{pmatrix}
=\begin{pmatrix}A_1+B_1&A_2+B_2\\A_3+B_3&A_4+B_4\end{pmatrix}
\]
\[
\begin{pmatrix}A&B\\C&D\end{pmatrix}
\begin{pmatrix}X&Y\\Z&W\end{pmatrix}
=\begin{pmatrix}AX+BZ&AY+BW\\CX+DZ&CY+DW\end{pmatrix}
\]
\[
\begin{pmatrix}A&B\\C&D\end{pmatrix}^{\mathrm T}
=\begin{pmatrix}A^{\mathrm T}&C^{\mathrm T}\\B^{\mathrm T}&D^{\mathrm T}\end{pmatrix}
\]
若 \(B,C\) 分别是 \(m\) 阶与 \(s\) 阶矩阵，则
\[
\begin{pmatrix}B&O\\O&C\end{pmatrix}^{n}
=\begin{pmatrix}B^{n}&O\\O&C^{n}\end{pmatrix}
\]
若 \(B,C\) 分别是 \(m\) 阶与 \(n\) 阶可逆矩阵，则
\[
\begin{pmatrix}B&O\\O&C\end{pmatrix}^{-1}
=\begin{pmatrix}B^{-1}&O\\O&C^{-1}\end{pmatrix},\quad
\begin{pmatrix}O&B\\C&O\end{pmatrix}^{-1}
=\begin{pmatrix}O&C^{-1}\\B^{-1}&O\end{pmatrix}
\]

**例18** 已知 \(B,C\) 分别是 \(m\) 阶与 \(n\) 阶可逆矩阵，证明 \(\begin{pmatrix}B&O\\O&C\end{pmatrix}\) 可逆，且
\[
\begin{pmatrix}B&O\\O&C\end{pmatrix}^{-1}
=\begin{pmatrix}B^{-1}&O\\O&C^{-1}\end{pmatrix}
\]

**【证】** 由 \(B,C\) 均可逆，有
\[
\begin{vmatrix}B&O\\O&C\end{vmatrix}=|B|\cdot|C|\neq0,
\]
所以 \(\begin{pmatrix}B&O\\O&C\end{pmatrix}\) 可逆.

设
\[
\begin{pmatrix}B&O\\O&C\end{pmatrix}^{-1}
=\begin{pmatrix}X&Y\\Z&W\end{pmatrix},
\]
则` },
      { p: 244, md: R`\[
\begin{pmatrix}B&O\\O&C\end{pmatrix}
\begin{pmatrix}X&Y\\Z&W\end{pmatrix}
=\begin{pmatrix}E&O\\O&E\end{pmatrix}
\]
即
\[
\begin{cases}
BX=E & (1)\\
BY=O & (2)\\
CZ=O & (3)\\
CW=E & (4)
\end{cases}
\]
由 (1) 有 \(X=B^{-1}\).

由 (2)，因 \(B\) 可逆，有 \(Y=B^{-1}O=O\).

类似地 \(Z=O,W=C^{-1}\).

所以
\[
\begin{pmatrix}B&O\\O&C\end{pmatrix}^{-1}
=\begin{pmatrix}B^{-1}&O\\O&C^{-1}\end{pmatrix}.
\]

例如
\[
\begin{pmatrix}
5&2&0&0\\
2&1&0&0\\
0&0&1&-2\\
0&0&1&1
\end{pmatrix}^{-1}
=\begin{pmatrix}
1&-2&0&0\\
-2&5&0&0\\
0&0&\frac{1}{3}&\frac{2}{3}\\
0&0&-\frac{1}{3}&\frac{1}{3}
\end{pmatrix}
\]
因为
\[
\begin{pmatrix}5&2\\2&1\end{pmatrix}^{-1}
=\begin{pmatrix}1&-2\\-2&5\end{pmatrix},\quad
\begin{pmatrix}1&-2\\1&1\end{pmatrix}^{-1}
=\frac{1}{3}\begin{pmatrix}1&2\\-1&1\end{pmatrix}.
\]

**例19** 已知 \(X=ABA\)，其中
\[
A=\begin{pmatrix}
1&0&0&1\\
0&1&1&0\\
0&1&-1&0\\
1&0&0&-1
\end{pmatrix},\quad
B=\begin{pmatrix}
0&0&0&1\\
0&0&1&0\\
0&1&0&0\\
1&0&0&0
\end{pmatrix}
\]
则 \(X=\) ______.

**【分析】** 把 \(A,B\) 各分成四个 \(2\times2\) 的小矩阵，即
\[
A=\left(\begin{array}{cc|cc}
1&0&0&1\\
0&1&1&0\\ \hline
0&1&-1&0\\
1&0&0&-1
\end{array}\right)
=\begin{pmatrix}E&C\\C&-E\end{pmatrix},\quad
B=\left(\begin{array}{cc|cc}
0&0&0&1\\
0&0&1&0\\ \hline
0&1&0&0\\
1&0&0&0
\end{array}\right)
=\begin{pmatrix}O&C\\C&O\end{pmatrix}
\]
由于
\[
C^{2}=\begin{pmatrix}0&1\\1&0\end{pmatrix}
\begin{pmatrix}0&1\\1&0\end{pmatrix}=E,
\]
就有
\[
\begin{aligned}
X&=\begin{pmatrix}E&C\\C&-E\end{pmatrix}
\begin{pmatrix}O&C\\C&O\end{pmatrix}
\begin{pmatrix}E&C\\C&-E\end{pmatrix}\\
&=\begin{pmatrix}E&C\\-C&E\end{pmatrix}
\begin{pmatrix}E&C\\C&-E\end{pmatrix}
=\begin{pmatrix}2E&O\\O&-2E\end{pmatrix}
\end{aligned}
\]
即
\[
X=\begin{pmatrix}
2&0&0&0\\
0&2&0&0\\
0&0&-2&0\\
0&0&0&-2
\end{pmatrix}.
\]` },
      { p: 245, md: R`## 五、方阵的行列式

### 抽象 \(n\) 阶方阵行列式公式

1. 若 \(A\) 是 \(n\) 阶矩阵，\(A^{\mathrm T}\) 是 \(A\) 的转置矩阵，则 \(|A^{\mathrm T}|=|A|\)；

2. 若 \(A\) 是 \(n\) 阶矩阵，则 \(|kA|=k^{n}|A|\)；

3. （行列式乘法公式）若 \(A,B\) 都是 \(n\) 阶矩阵，则 \(|AB|=|A||B|\)；

特别地 \(|A^{2}|=|A|^{2}\).

4. 若 \(A\) 是 \(n\) 阶矩阵，\(A^*\) 是 \(A\) 的伴随矩阵，则 \(|A^*|=|A|^{n-1}\)；

5. 若 \(A\) 是 \(n\) 阶可逆矩阵，\(A^{-1}\) 是 \(A\) 的逆矩阵，则 \(|A^{-1}|=|A|^{-1}\)；

6. 设 \(A\) 是 \(m\) 阶矩阵，\(B\) 是 \(n\) 阶矩阵
\[
\begin{vmatrix}A&O\\C&B\end{vmatrix}
=\begin{vmatrix}A&D\\O&B\end{vmatrix}
=|A|\cdot|B|;
\]
\[
\begin{vmatrix}O&A\\B&C\end{vmatrix}
=\begin{vmatrix}D&A\\B&O\end{vmatrix}
=(-1)^{mn}|A|\cdot|B|.
\]

**【注】** 一般情况 \(|A+B|\neq|A|+|B|\)，\(|A-B|\neq|A|-|B|\)，\(|kA|\neq k|A|\).

**例20** 设 \(A,B\) 均为 \(n\) 阶矩阵，\(|A|=2\)，\(|B|=-3\)，则 \(|2A^*B^{-1}|=\) ______.

**【分析】**
\[
|2A^*B^{-1}|
=2^{n}|A^*B^{-1}|
=2^{n}|A^*||B^{-1}|
=2^{n}|A|^{n-1}|B|^{-1}
=-\frac{2^{2n-1}}{3}.
\]
本题用到的公式依次是
\[
|kA|=k^{n}|A|,\quad
|AB|=|A||B|,\quad
|A^*|=|A|^{n-1},\quad
|A^{-1}|=\frac{1}{|A|}.
\]

**例21** 设 \(A\) 是 4 阶矩阵，如果 \(|A|=-\frac{2}{3}\)，则 \(|3A^*+4A^{-1}|=\) ______.

**【分析】** 因
\[
A^*=|A|A^{-1}=-\frac{2}{3}A^{-1},
\]
又
\[
|A^{-1}|=\frac{1}{|A|}=-\frac{3}{2},
\]
则有
\[
\begin{aligned}
|3A^*+4A^{-1}|
&=|-2A^{-1}+4A^{-1}|=|2A^{-1}|\\
&=2^{4}|A^{-1}|=-3\times2^{3}=-24.
\end{aligned}
\]

**练习 2.5**

(1) 设 \(A,B\) 均为 4 阶矩阵，\(|A|=3\)，\(|B|=2\)，则 \(|-A^{\mathrm T}B^*|=\) ______.

(2) 设 \(A\) 是 3 阶矩阵且 \(|A|=5\)，则 \(\left|A^*-\left(\frac{1}{2}A\right)^{-1}\right|=\) ______.

（练习答案在 297 页）` },
    ],
    quiz: [{"q": "$(AB)^T=$", "options": ["$B^TA^T$", "$A^TB^T$", "$AB$", "$BA$"], "answer": 0, "explain": "转置的反序法则。"}, {"q": "若 $A$ 可逆，则 $A^{-1}=$", "options": ["$\\frac{1}{|A|}A^*$", "$\\frac{1}{|A|}A$", "$A^*$", "$|A|A^*$"], "answer": 0, "explain": "伴随矩阵求逆公式。"}, {"q": "$r(AB)$ 与 $r(A),r(B)$ 的关系是", "options": ["$r(AB)\\le\\min\\{r(A),r(B)\\}$", "$r(AB)\\ge r(A)$", "$r(AB)=r(A)+r(B)$", "$r(AB)=r(A)r(B)$"], "answer": 0, "explain": "乘积的秩不超过任一因子的秩。"}, {"q": "初等变换对矩阵的秩", "options": ["不改变", "可能改变", "一定增大", "一定减小"], "answer": 0, "explain": "初等变换不改变秩。"}]
  };
})();
