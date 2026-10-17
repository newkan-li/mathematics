window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["jc12_s0"] = {
    id: "jc12_s0",
    ch: "第六章 二次型",
    title: "第六章 二次型",
    book: "李永乐《数学复习全书·基础篇》",
    pages: [284, 299],
    img: "assets/img/jichu",
    content: [
      { p: 284, md: R`# 第六章　二次型

## 本章考点

二次型及其矩阵表示　合同变换与合同矩阵　二次型的秩　惯性定理　二次型的标准形和规范形　用正交变换和配方法化二次型为标准形　二次型及其矩阵的正定性

## 一、二次型及其标准形

**定义**　\(n\) 个变量的一个二次齐次多项式
\[
\begin{aligned}
f(x_1,x_2,\cdots,x_n)&=a_{11}x_1^2+2a_{12}x_1x_2+2a_{13}x_1x_3+\cdots+2a_{1n}x_1x_n\\
&\quad +a_{22}x_2^2+2a_{23}x_2x_3+\cdots+2a_{2n}x_2x_n\\
&\quad +\cdots+a_{nn}x_n^2
\end{aligned}
\tag{①}
\]
称为 \(n\) 个变量的二次型，系数均为实数时，称为 \(n\) 元实二次型.

若令 \(a_{ij}=a_{ji},i<j\)，则 \(2a_{ij}x_ix_j=a_{ij}x_ix_j+a_{ji}x_jx_i\)，那么二次型 ① 可以写成矩阵形式：
\[
f(x_1,x_2,\cdots,x_n)=\sum_{i=1}^{n}\sum_{j=1}^{n}a_{ij}x_ix_j
=[x_1,x_2,\cdots,x_n]
\begin{bmatrix}
a_{11}&a_{12}&\cdots&a_{1n}\\
a_{21}&a_{22}&\cdots&a_{2n}\\
\vdots&\vdots&&\vdots\\
a_{n1}&a_{n2}&\cdots&a_{nn}
\end{bmatrix}
\begin{bmatrix}
x_1\\
x_2\\
\vdots\\
x_n
\end{bmatrix}
=\boldsymbol{x}^{\mathrm{T}}\boldsymbol{A}\boldsymbol{x}.
\]
其中 \(\boldsymbol{A}\) 是对称矩阵，称为二次型 \(f\) 的对应矩阵.

例如：\(f(x_1,x_2,x_3)=x_1^2+2x_2^2+x_3^2+2x_1x_2+4x_1x_3+6x_2x_3\)
\[
=[x_1,x_2,x_3]
\begin{bmatrix}
1&1&2\\
1&2&3\\
2&3&1
\end{bmatrix}
\begin{bmatrix}
x_1\\
x_2\\
x_3
\end{bmatrix}
=\boldsymbol{x}^{\mathrm{T}}\boldsymbol{A}\boldsymbol{x}
\]
\[
\boldsymbol{A}=
\begin{bmatrix}
1&1&2\\
1&2&3\\
2&3&1
\end{bmatrix},\quad
\boldsymbol{A}^{\mathrm{T}}=\boldsymbol{A},\quad
\boldsymbol{x}=
\begin{bmatrix}
x_1\\
x_2\\
x_3
\end{bmatrix}.
\]

注意：当 \(\boldsymbol{A}\) 是对称阵时，二次型 \(f(x_1,x_2,\cdots,x_n)=\boldsymbol{x}^{\mathrm{T}}\boldsymbol{A}\boldsymbol{x}\) 和 \(\boldsymbol{A}\) 一一对应.

**定义**　若二次型 \(f(x_1,x_2,\cdots,x_n)\) 只有平方项，没有混合项（即混合项的系数全为零），即
\[
f(x_1,x_2,\cdots,x_n)=\boldsymbol{x}^{\mathrm{T}}\boldsymbol{A}\boldsymbol{x}
=a_1x_1^2+a_2x_2^2+\cdots+a_nx_n^2
\]
则称二次型为标准形（又称平方和）.

在二次型的标准形中，若平方项的系数 \(a_i\) 只是 \(1,-1,0\)，即
\[
f(x_1,x_2,\cdots,x_n)=\boldsymbol{x}^{\mathrm{T}}\boldsymbol{A}\boldsymbol{x}
=x_1^2+x_2^2+\cdots+x_p^2-x_{p+1}^2-\cdots-x_{p+q}^2
\]` },
      { p: 285, md: R`则称为二次型的规范形（系数中 \(1\) 的个数是 \(p\) 个，\(-1\) 的个数是 \(q\) 个，\(0\) 的个数是 \(n-(p+q)\) 个）.

**定义**　在二次型 \(\boldsymbol{x}^{\mathrm{T}}\boldsymbol{A}\boldsymbol{x}\) 的标准形中，正平方项的个数 \(p\) 称为二次型的正惯性指数，负平方项的个数 \(q\) 称为二次型的负惯性指数.

**定义**　二次型 \(\boldsymbol{x}^{\mathrm{T}}\boldsymbol{A}\boldsymbol{x}\) 矩阵 \(\boldsymbol{A}\) 的秩称为二次型的秩.

**【注】**　对于
\[
f=(x_1,x_2,x_3)
\begin{bmatrix}
1&3&0\\
1&0&0\\
0&4&-1
\end{bmatrix}
\begin{bmatrix}
x_1\\
x_2\\
x_3
\end{bmatrix}
\]
有
\[
f=(x_1+x_2,3x_1+4x_3,-x_3)
\begin{bmatrix}
x_1\\
x_2\\
x_3
\end{bmatrix}
=(x_1+x_2)x_1+(3x_1+4x_3)x_2-x_3^2
\]
故 \(f=x_1^2-x_3^2+4x_1x_2+4x_2x_3\)，三元二次型，其二次型矩阵
\[
\boldsymbol{A}=
\begin{bmatrix}
1&2&0\\
2&0&2\\
0&2&-1
\end{bmatrix},\quad
\text{秩}\ r(f)=r(\boldsymbol{A})=2.
\]
虽 \(\boldsymbol{x}^{\mathrm{T}}\begin{bmatrix}1&3&0\\1&0&0\\0&4&-1\end{bmatrix}\boldsymbol{x}\) 是二次型，但矩阵 \(\begin{bmatrix}1&3&0\\1&0&0\\0&4&-1\end{bmatrix}\) 不是二次型矩阵，其秩也不是二次型的秩.

**定义（合同）**　设 \(\boldsymbol{A},\boldsymbol{B}\) 是两个 \(n\) 阶方阵，若存在可逆阵 \(\boldsymbol{C}\)，使得 \(\boldsymbol{C}^{\mathrm{T}}\boldsymbol{A}\boldsymbol{C}=\boldsymbol{B}\)，则称 \(\boldsymbol{A}\) 合同于 \(\boldsymbol{B}\)，记成 \(\boldsymbol{A}\simeq\boldsymbol{B}\).

合同矩阵有如下性质

反身性：\(\boldsymbol{A}\simeq\boldsymbol{A}\).

对称性：若 \(\boldsymbol{A}\simeq\boldsymbol{B}\)，则 \(\boldsymbol{B}\simeq\boldsymbol{A}\).

传递性：若 \(\boldsymbol{A}\simeq\boldsymbol{B},\boldsymbol{B}\simeq\boldsymbol{C}\)，则 \(\boldsymbol{A}\simeq\boldsymbol{C}\).

对于三元二次型 \(f(x_1,x_2,x_3)=\boldsymbol{x}^{\mathrm{T}}\boldsymbol{A}\boldsymbol{x}\)
如果
\[
\begin{cases}
x_1=c_{11}y_1+c_{12}y_2+c_{13}y_3\\
x_2=c_{21}y_1+c_{22}y_2+c_{23}y_3\\
x_3=c_{31}y_1+c_{32}y_2+c_{33}y_3
\end{cases}
\qquad (*)
\]
满足
\[
|\boldsymbol{C}|=
\begin{vmatrix}
c_{11}&c_{12}&c_{13}\\
c_{21}&c_{22}&c_{23}\\
c_{31}&c_{32}&c_{33}
\end{vmatrix}\neq 0
\]
则称 \((*)\) 是由 \(\boldsymbol{x}=(x_1,x_2,x_3)^{\mathrm{T}}\) 到 \(\boldsymbol{y}=(y_1,y_2,y_3)^{\mathrm{T}}\) 的坐标变换.
用矩阵描述即：\(\boldsymbol{x}=\boldsymbol{C}\boldsymbol{y}\).
注意　以 \(\boldsymbol{x}=(x_1,x_2,x_3)^{\mathrm{T}}\) 为自变量的二次型 \(\boldsymbol{x}^{\mathrm{T}}\boldsymbol{A}\boldsymbol{x}\) 经坐标变换 \(\boldsymbol{x}=\boldsymbol{C}\boldsymbol{y}\) 后将成以 \(\boldsymbol{y}=(y_1,y_2,y_3)^{\mathrm{T}}\) 为自变量的二次型 \(\boldsymbol{y}^{\mathrm{T}}\boldsymbol{B}\boldsymbol{y}\)，其中 \(\boldsymbol{B}=\boldsymbol{C}^{\mathrm{T}}\boldsymbol{A}\boldsymbol{C}\). 可见经坐标变换二次型矩阵 \(\boldsymbol{A}\) 和 \(\boldsymbol{B}\) 是合同的.

**定理 6.1**　对任意一个 \(n\) 元二次型 \(f(x_1,x_2,\cdots,x_n)=\boldsymbol{x}^{\mathrm{T}}\boldsymbol{A}\boldsymbol{x}\)，必存在正交变换 \(\boldsymbol{x}=\boldsymbol{Q}\boldsymbol{y}\)，其中 \(\boldsymbol{Q}\) 是正交阵，化二次型为标准形. 即
\[
f(x_1,x_2,\cdots,x_n)=\boldsymbol{x}^{\mathrm{T}}\boldsymbol{A}\boldsymbol{x}
\xrightarrow{\boldsymbol{x}=\boldsymbol{Q}\boldsymbol{y}}
\boldsymbol{y}^{\mathrm{T}}\boldsymbol{Q}^{\mathrm{T}}\boldsymbol{A}\boldsymbol{Q}\boldsymbol{y}
=\lambda_1y_1^2+\lambda_2y_2^2+\cdots+\lambda_ny_n^2
\]` },
      { p: 286, md: R`其中 \(\lambda_1,\lambda_2,\cdots,\lambda_n\) 是 \(\boldsymbol{A}\) 的 \(n\) 个特征值.
用矩阵的语言表达，即对任意一个 \(n\) 阶实对称阵 \(\boldsymbol{A}\)，必存在正交阵 \(\boldsymbol{Q}\)，使得
\[
\boldsymbol{Q}^{-1}\boldsymbol{A}\boldsymbol{Q}=\boldsymbol{Q}^{\mathrm{T}}\boldsymbol{A}\boldsymbol{Q}=\boldsymbol{\Lambda}
\]
其中
\[
\boldsymbol{\Lambda}=
\begin{bmatrix}
\lambda_1&0&\cdots&0\\
0&\lambda_2&\cdots&0\\
\vdots&\vdots&&\vdots\\
0&0&\cdots&\lambda_n
\end{bmatrix},
\]
\(\lambda_i(i=1,2,\cdots,n)\) 是 \(\boldsymbol{A}\) 的特征值，即 \(\boldsymbol{A}\) 必既相似又合同于对角阵.

**【注】**　正交变换法只能化二次型为标准形，平方项的系数即是特征值.

**定理 6.2**　任一个 \(n\) 元二次型 \(f(x_1,x_2,\cdots,x_n)=\boldsymbol{x}^{\mathrm{T}}\boldsymbol{A}\boldsymbol{x}\)，都可以通过（配方法）可逆线性变换 \(\boldsymbol{x}=\boldsymbol{C}\boldsymbol{y}\)，其中 \(\boldsymbol{C}\) 是可逆阵，化成标准形. 即
\[
f(x_1,x_2,\cdots,x_n)=\boldsymbol{x}^{\mathrm{T}}\boldsymbol{A}\boldsymbol{x}
\xrightarrow{\boldsymbol{x}=\boldsymbol{C}\boldsymbol{y}}
\boldsymbol{y}^{\mathrm{T}}\boldsymbol{C}^{\mathrm{T}}\boldsymbol{A}\boldsymbol{C}\boldsymbol{y}
=d_1y_1^2+d_2y_2^2+\cdots+d_ny_n^2
\]
用矩阵的语言表达，即对任意一个 \(n\) 阶实对称阵 \(\boldsymbol{A}\)，一定存在可逆阵 \(\boldsymbol{C}\)，使得 \(\boldsymbol{C}^{\mathrm{T}}\boldsymbol{A}\boldsymbol{C}=\boldsymbol{\Lambda}\).
其中
\[
\boldsymbol{\Lambda}=
\begin{bmatrix}
d_1&0&\cdots&0\\
0&d_2&\cdots&0\\
\vdots&\vdots&&\vdots\\
0&0&\cdots&d_n
\end{bmatrix}.
\]

**定理 6.3（惯性定理）**　对一个二次型 \(\boldsymbol{x}^{\mathrm{T}}\boldsymbol{A}\boldsymbol{x}\) 经坐标变换化为标准形，其正惯性指数和负惯性指数都是唯一确定的.

**例1**　已知二次型
\[
f(x_1,x_2,x_3)=x_1^2-x_2^2+cx_3^2+2x_1x_2-2x_1x_3+6x_2x_3
\]
的秩为 \(2\)，则 \((1)c=\underline{\qquad}\)；\((2)\) 正惯性指数 \(p=\underline{\qquad}\).

**【分析】**　二次型矩阵
\[
\boldsymbol{A}=
\begin{bmatrix}
1&1&-1\\
1&-1&3\\
-1&3&c
\end{bmatrix}
\]
\((1)r(f)=2\Leftrightarrow r(\boldsymbol{A})=2\)
\[
\boldsymbol{A}=
\begin{bmatrix}
1&1&-1\\
1&-1&3\\
-1&3&c
\end{bmatrix}
\to
\begin{bmatrix}
1&1&-1\\
0&1&-2\\
0&0&c+7
\end{bmatrix}
\]
\(\therefore c=-7\).
\((2)\) 由配方法
\[
\begin{aligned}
f&=x_1^2-x_2^2-7x_3^2+2x_1x_2-2x_1x_3+6x_2x_3\\
&=[x_1^2+2x_1(x_2-x_3)+(x_2-x_3)^2]-x_2^2-7x_3^2+6x_2x_3-(x_2-x_3)^2\\
&=(x_1+x_2-x_3)^2-2(x_2-2x_3)^2
\end{aligned}
\]
得标准形 \(f=y_1^2-2y_2^2\)
\(\therefore p=1\).` },
      { p: 287, md: R`**例2**　用配方法化二次型
\[
f(x_1,x_2,x_3)=2x_1^2+3x_2^2+5x_3^2+4x_1x_2-8x_2x_3-4x_3x_1
\]
为标准形，写出所用坐标变换，并验证 \(\boldsymbol{C}^{\mathrm{T}}\boldsymbol{A}\boldsymbol{C}=\boldsymbol{\Lambda}\).

**【解】**　先把所有含 \(x_1\) 的项配成一个完全平方，即有
\[
\begin{aligned}
f&=2[x_1^2+2x_1(x_2-x_3)+(x_2-x_3)^2]+3x_2^2+5x_3^2-8x_2x_3-2(x_2-x_3)^2\\
&=2(x_1+x_2-x_3)^2+x_2^2+3x_3^2-4x_2x_3
\end{aligned}
\]
再把所有含 \(x_2\) 的项配成一个完全平方，即
\[
\begin{aligned}
f&=2(x_1+x_2-x_3)^2+(x_2^2-4x_2x_3+4x_3^2)+3x_3^2-4x_3^2\\
&=2(x_1+x_2-x_3)^2+(x_2-2x_3)^2-x_3^2
\end{aligned}
\]
引入新变量. 令
\[
\begin{cases}
y_1=x_1+x_2-x_3\\
y_2=x_2-2x_3\\
y_3=x_3
\end{cases}
\quad\text{即}\quad
\begin{cases}
x_1=y_1-y_2-y_3\\
x_2=y_2+2y_3\\
x_3=y_3
\end{cases}
\]
则有 \(f\) 的标准形 \(f=2y_1^2+y_2^2-y_3^2\).
用矩阵描述即：二次型矩阵
\[
\boldsymbol{A}=
\begin{bmatrix}
2&2&-2\\
2&3&-4\\
-2&-4&5
\end{bmatrix},
\]
经坐标变换 \(\boldsymbol{x}=\boldsymbol{C}\boldsymbol{y}\)
\[
\begin{bmatrix}
x_1\\
x_2\\
x_3
\end{bmatrix}
=
\begin{bmatrix}
1&-1&-1\\
0&1&2\\
0&0&1
\end{bmatrix}
\begin{bmatrix}
y_1\\
y_2\\
y_3
\end{bmatrix}
\]
有
\[
\boldsymbol{x}^{\mathrm{T}}\boldsymbol{A}\boldsymbol{x}
=(\boldsymbol{C}\boldsymbol{y})^{\mathrm{T}}\boldsymbol{A}(\boldsymbol{C}\boldsymbol{y})
=\boldsymbol{y}^{\mathrm{T}}\boldsymbol{\Lambda}\boldsymbol{y}
=2y_1^2+y_2^2-y_3^2.
\]
验证：
\[
\begin{aligned}
\boldsymbol{C}^{\mathrm{T}}\boldsymbol{A}\boldsymbol{C}
&=
\begin{bmatrix}
1&0&0\\
-1&1&0\\
-1&2&1
\end{bmatrix}
\begin{bmatrix}
2&2&-2\\
2&3&-4\\
-2&-4&5
\end{bmatrix}
\begin{bmatrix}
1&-1&-1\\
0&1&2\\
0&0&1
\end{bmatrix}\\
&=
\begin{bmatrix}
2&2&-2\\
0&1&-2\\
0&0&-1
\end{bmatrix}
\begin{bmatrix}
1&-1&-1\\
0&1&2\\
0&0&1
\end{bmatrix}
=
\begin{bmatrix}
2&0&0\\
0&1&0\\
0&0&-1
\end{bmatrix}
\end{aligned}
\]

**【注】**　对 \(f=2(x_1+x_2-x_3)^2+(x_2-2x_3)^2-x_3^2\)
如今
\[
\begin{cases}
y_1=\sqrt{2}x_1+\sqrt{2}x_2-\sqrt{2}x_3\\
y_2=x_2-2x_3\\
y_3=x_3
\end{cases}
\quad\text{即}\quad
\begin{cases}
x_1=\frac{1}{\sqrt{2}}y_1-y_2-y_3\\
x_2=y_2+2y_3\\
x_3=y_3
\end{cases}
\]
则有 \(f\) 的规范形 \(f=y_1^2+y_2^2-y_3^2\).
用配方法可得到规范形.

**例3**　二次型 \(f(x_1,x_2,x_3)=x_1^2+3x_2^2+x_3^2+2ax_1x_2+2x_1x_3+2x_2x_3\)，经正交变换 \(\boldsymbol{x}=\boldsymbol{P}\boldsymbol{y}\) 化为标准形 \(y_1^2+4y_2^2\)，则 \(a=\underline{\qquad}\).

**【分析】**　二次型 \(\boldsymbol{x}^{\mathrm{T}}\boldsymbol{A}\boldsymbol{x}\) 经正交变换化为标准形 \(y_1^2+4y_2^2\)，那么标准形中的平方项系数 \(1,4,0\) 就是 \(\boldsymbol{A}\) 的特征值.` },
      { p: 288, md: R`现 \(\boldsymbol{A}=\begin{bmatrix}1&a&1\\a&3&1\\1&1&1\end{bmatrix}\)，由
\[
|\boldsymbol{A}|=
\begin{vmatrix}
1&a&1\\
a&3&1\\
1&1&1
\end{vmatrix}
=
\begin{vmatrix}
0&a-1&0\\
a&3&1\\
1&1&1
\end{vmatrix}
=-(a-1)^2=0
\]
得 \(a=1\).

**例4**　二次型 \(f(x_1,x_2)=\boldsymbol{x}^{\mathrm{T}}\boldsymbol{A}\boldsymbol{x}\) 经正交变换 \(\boldsymbol{x}=\boldsymbol{Q}\boldsymbol{y}\) 化为标准形 \(y_1^2+3y_2^2\)，若 \(\boldsymbol{Q}\) 的第一列是 \(\left[\frac{1}{\sqrt{2}},\frac{1}{\sqrt{2}}\right]^{\mathrm{T}}\)，则 \(\boldsymbol{Q}=\underline{\qquad}\).

**【分析】**　二次型 \(\boldsymbol{x}^{\mathrm{T}}\boldsymbol{A}\boldsymbol{x}\) 经正交变换 \(\boldsymbol{x}=\boldsymbol{Q}\boldsymbol{y}\) 化为标准形 \(y_1^2+3y_2^2\)，那么标准形中平方项系数 \(1,3\) 就是矩阵 \(\boldsymbol{A}\) 的特征值，而正交矩阵 \(\boldsymbol{Q}\) 就是 \(\boldsymbol{A}\) 的特征向量.
已知 \(\boldsymbol{Q}\) 的第一列是 \(\left[\frac{1}{\sqrt{2}},\frac{1}{\sqrt{2}}\right]^{\mathrm{T}}\)，即矩阵 \(\boldsymbol{A}\) 关于 \(\lambda=1\) 的特征向量是 \(\left[\frac{1}{\sqrt{2}},\frac{1}{\sqrt{2}}\right]^{\mathrm{T}}\). 设 \(\lambda=3\) 的特征向量是 \(\boldsymbol{\alpha}=[x_1,x_2]^{\mathrm{T}}\).
于是 \(\frac{1}{\sqrt{2}}x_1+\frac{1}{\sqrt{2}}x_2=0\)，解出基础解系 \([1,-1]^{\mathrm{T}}\)，单位化为 \(\left[\frac{1}{\sqrt{2}},-\frac{1}{\sqrt{2}}\right]^{\mathrm{T}}\).
所以
\[
\boldsymbol{Q}=
\begin{bmatrix}
\frac{1}{\sqrt{2}}&\frac{1}{\sqrt{2}}\\
\frac{1}{\sqrt{2}}&-\frac{1}{\sqrt{2}}
\end{bmatrix}.
\]

**例5**　用正交变换化二次型 \(f(x_1,x_2,x_3)=x_1^2-x_2^2+2x_3^2+4x_2x_3\) 为标准形，写出所用坐标变换，并用 \(\boldsymbol{Q}^{\mathrm{T}}\boldsymbol{A}\boldsymbol{Q}=\boldsymbol{\Lambda}\) 验证.

**【解】**　二次型矩阵
\[
\boldsymbol{A}=
\begin{bmatrix}
1&0&0\\
0&-1&2\\
0&2&2
\end{bmatrix}
\]
矩阵 \(\boldsymbol{A}\) 的特征多项式
\[
|\lambda\boldsymbol{E}-\boldsymbol{A}|=
\begin{vmatrix}
\lambda-1&0&0\\
0&\lambda+1&-2\\
0&-2&\lambda-2
\end{vmatrix}
=(\lambda-1)
\begin{vmatrix}
\lambda+1&-2\\
-2&\lambda-2
\end{vmatrix}
=(\lambda-1)(\lambda-3)(\lambda+2),
\]
得矩阵 \(\boldsymbol{A}\) 的特征值：\(1,3,-2\).
当 \(\lambda=1\) 时，由 \((\boldsymbol{E}-\boldsymbol{A})\boldsymbol{x}=\boldsymbol{0}\)
\[
\begin{bmatrix}
0&0&0\\
0&2&-2\\
0&-2&-1
\end{bmatrix}
\to
\begin{bmatrix}
0&1&0\\
0&0&1\\
0&0&0
\end{bmatrix}
\]
得特征向量 \(\boldsymbol{\alpha}_1=(1,0,0)^{\mathrm{T}}\).
当 \(\lambda=3\) 时，由 \((3\boldsymbol{E}-\boldsymbol{A})\boldsymbol{x}=\boldsymbol{0}\)` },
      { p: 289, md: R`\[
\begin{bmatrix}
2&0&0\\
0&4&-2\\
0&-2&1
\end{bmatrix}
\to
\begin{bmatrix}
1&0&0\\
0&-2&1\\
0&0&0
\end{bmatrix}
\]
得特征向量 \(\boldsymbol{\alpha}_2=(0,1,2)^{\mathrm{T}}\).
当 \(\lambda=-2\) 时，由 \((-2\boldsymbol{E}-\boldsymbol{A})\boldsymbol{x}=\boldsymbol{0}\)
\[
\begin{bmatrix}
-3&0&0\\
0&-1&-2\\
0&-2&-4
\end{bmatrix}
\to
\begin{bmatrix}
1&0&0\\
0&1&2\\
0&0&0
\end{bmatrix}
\]
得特征向量 \(\boldsymbol{\alpha}_3=(0,-2,1)^{\mathrm{T}}\).
实对称矩阵特征值不同特征向量相互正交，故只需单位化
\[
\boldsymbol{\gamma}_1=(1,0,0)^{\mathrm{T}},\quad
\boldsymbol{\gamma}_2=\frac{1}{\sqrt{5}}(0,1,2)^{\mathrm{T}},\quad
\boldsymbol{\gamma}_3=\frac{1}{\sqrt{5}}(0,-2,1)^{\mathrm{T}}
\]
那么令 \(\boldsymbol{x}=\boldsymbol{Q}\boldsymbol{y}\)，其中 \(\boldsymbol{Q}=(\boldsymbol{\gamma}_1,\boldsymbol{\gamma}_2,\boldsymbol{\gamma}_3)\)
即
\[
\begin{bmatrix}
x_1\\
x_2\\
x_3
\end{bmatrix}
=
\begin{bmatrix}
1&0&0\\
0&\frac{1}{\sqrt{5}}&-\frac{2}{\sqrt{5}}\\
0&\frac{2}{\sqrt{5}}&\frac{1}{\sqrt{5}}
\end{bmatrix}
\begin{bmatrix}
y_1\\
y_2\\
y_3
\end{bmatrix}
\]
有
\[
\boldsymbol{x}^{\mathrm{T}}\boldsymbol{A}\boldsymbol{x}
=\boldsymbol{y}^{\mathrm{T}}(\boldsymbol{Q}^{\mathrm{T}}\boldsymbol{A}\boldsymbol{Q})\boldsymbol{y}
=\boldsymbol{y}^{\mathrm{T}}(\boldsymbol{Q}^{-1}\boldsymbol{A}\boldsymbol{Q})\boldsymbol{y}
=y_1^2+3y_2^2-2y_3^2.
\]
\[
\begin{aligned}
\boldsymbol{Q}^{\mathrm{T}}\boldsymbol{A}\boldsymbol{Q}
&=\boldsymbol{Q}^{-1}\boldsymbol{A}\boldsymbol{Q}\\
&=
\begin{bmatrix}
1&0&0\\
0&\frac{1}{\sqrt{5}}&\frac{2}{\sqrt{5}}\\
0&-\frac{2}{\sqrt{5}}&\frac{1}{\sqrt{5}}
\end{bmatrix}
\begin{bmatrix}
1&0&0\\
0&-1&2\\
0&2&2
\end{bmatrix}
\begin{bmatrix}
1&0&0\\
0&\frac{1}{\sqrt{5}}&-\frac{2}{\sqrt{5}}\\
0&\frac{2}{\sqrt{5}}&\frac{1}{\sqrt{5}}
\end{bmatrix}\\
&=
\begin{bmatrix}
1&0&0\\
0&\frac{3}{\sqrt{5}}&\frac{6}{\sqrt{5}}\\
0&\frac{4}{\sqrt{5}}&-\frac{2}{\sqrt{5}}
\end{bmatrix}
\begin{bmatrix}
1&0&0\\
0&\frac{1}{\sqrt{5}}&-\frac{2}{\sqrt{5}}\\
0&\frac{2}{\sqrt{5}}&\frac{1}{\sqrt{5}}
\end{bmatrix}
=
\begin{bmatrix}
1&0&0\\
0&3&0\\
0&0&-2
\end{bmatrix}
\end{aligned}
\]

**例6**　用正交变换化二次型
\[
f(x_1,x_2,x_3)=x_1^2+4x_2^2+x_3^2-4x_1x_2-8x_1x_3-4x_2x_3
\]
为标准形，并写出所用坐标变换.

**【解】**　二次型矩阵
\[
\boldsymbol{A}=
\begin{bmatrix}
1&-2&-4\\
-2&4&-2\\
-4&-2&1
\end{bmatrix}
\]
矩阵 \(\boldsymbol{A}\) 的特征多项式
\[
|\lambda\boldsymbol{E}-\boldsymbol{A}|=
\begin{vmatrix}
\lambda-1&2&4\\
2&\lambda-4&2\\
4&2&\lambda-1
\end{vmatrix}
=
\begin{vmatrix}
\lambda-5&0&5-\lambda\\
2&\lambda-4&2\\
4&2&\lambda-1
\end{vmatrix}
=
\begin{vmatrix}
\lambda-5&0&0\\
2&\lambda-4&4\\
4&2&\lambda+3
\end{vmatrix}
\]` },
      { p: 290, md: R`\[
=(\lambda-5)
\begin{vmatrix}
\lambda-4&4\\
2&\lambda+3
\end{vmatrix}
=(\lambda-5)^2(\lambda+4),
\]
得矩阵 \(\boldsymbol{A}\) 的特征值：\(5,5,-4\).
当 \(\lambda=5\) 时，由 \((5\boldsymbol{E}-\boldsymbol{A})\boldsymbol{x}=\boldsymbol{0}\)
\[
\begin{bmatrix}
4&2&4\\
2&1&2\\
4&2&4
\end{bmatrix}
\to
\begin{bmatrix}
2&1&2\\
0&0&0\\
0&0&0
\end{bmatrix}
\]
得特征向量 \(\boldsymbol{\alpha}_1=(1,-2,0)^{\mathrm{T}},\boldsymbol{\alpha}_2=(0,-2,1)^{\mathrm{T}}\).
当 \(\lambda=-4\) 时，由 \((-4\boldsymbol{E}-\boldsymbol{A})\boldsymbol{x}=\boldsymbol{0}\)
\[
\begin{bmatrix}
-5&2&4\\
2&-8&2\\
4&2&-5
\end{bmatrix}
\to
\begin{bmatrix}
1&-2&0\\
0&-2&1\\
0&0&0
\end{bmatrix}
\]
得特征向量 \(\boldsymbol{\alpha}_3=(2,1,2)^{\mathrm{T}}\).
\(\lambda=5\) 的特征向量 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2\) 不正交，用施密特正交化有：
\[
\boldsymbol{\beta}_1=\boldsymbol{\alpha}_1=(1,-2,0)^{\mathrm{T}}
\]
\[
\boldsymbol{\beta}_2=\boldsymbol{\alpha}_2-\frac{(\boldsymbol{\alpha}_2,\boldsymbol{\beta}_1)}{(\boldsymbol{\beta}_1,\boldsymbol{\beta}_1)}\boldsymbol{\beta}_1
=
\begin{bmatrix}
0\\
-2\\
1
\end{bmatrix}
-\frac{4}{5}
\begin{bmatrix}
1\\
-2\\
0
\end{bmatrix}
=
\frac{1}{5}
\begin{bmatrix}
-4\\
-2\\
5
\end{bmatrix}
\]
单位化得
\[
\boldsymbol{\gamma}_1=\frac{1}{\sqrt{5}}
\begin{bmatrix}
1\\
-2\\
0
\end{bmatrix},\quad
\boldsymbol{\gamma}_2=\frac{1}{3\sqrt{5}}
\begin{bmatrix}
-4\\
-2\\
5
\end{bmatrix},\quad
\boldsymbol{\gamma}_3=\frac{1}{3}
\begin{bmatrix}
2\\
1\\
2
\end{bmatrix}
\]
那么令
\[
\boldsymbol{Q}=(\boldsymbol{\gamma}_1,\boldsymbol{\gamma}_2,\boldsymbol{\gamma}_3)=
\begin{bmatrix}
\frac{1}{\sqrt{5}}&-\frac{4}{3\sqrt{5}}&\frac{2}{3}\\[2mm]
-\frac{2}{\sqrt{5}}&-\frac{2}{3\sqrt{5}}&\frac{1}{3}\\[2mm]
0&\frac{5}{3\sqrt{5}}&\frac{2}{3}
\end{bmatrix},
\]
经 \(\boldsymbol{x}=\boldsymbol{Q}\boldsymbol{y}\) 有
\[
\boldsymbol{x}^{\mathrm{T}}\boldsymbol{A}\boldsymbol{x}
=\boldsymbol{y}^{\mathrm{T}}(\boldsymbol{Q}^{\mathrm{T}}\boldsymbol{A}\boldsymbol{Q})\boldsymbol{y}
=\boldsymbol{y}^{\mathrm{T}}(\boldsymbol{Q}^{-1}\boldsymbol{A}\boldsymbol{Q})\boldsymbol{y}
=5y_1^2+5y_2^2-4y_3^2
\]

**“用正交变换化二次型为标准形”，解题步骤**

1. 写出二次型矩阵 \(\boldsymbol{A}\).
2. 求出 \(\boldsymbol{A}\) 的特征值 \(\lambda_1,\lambda_2,\lambda_3\).
3. 求出相应的特征向量 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3\).
4. 改造特征向量为 \(\boldsymbol{\gamma}_1,\boldsymbol{\gamma}_2,\boldsymbol{\gamma}_3\).
   1° 如果特征值不同只需单位化.
   2° 如果特征值有重根，要先判断特征向量是否已正交？若已正交则只需单位化，否则 Schmidt 正交化.
5. 构造正交矩阵 \(\boldsymbol{Q}=(\boldsymbol{\gamma}_1,\boldsymbol{\gamma}_2,\boldsymbol{\gamma}_3)\)

则经 \(\boldsymbol{x}=\boldsymbol{Q}\boldsymbol{y}\) 有
\[
\boldsymbol{x}^{\mathrm{T}}\boldsymbol{A}\boldsymbol{x}
=\boldsymbol{y}^{\mathrm{T}}\boldsymbol{\Lambda}\boldsymbol{y}
=\lambda_1y_1^2+\lambda_2y_2^2+\lambda_3y_3^2
\]` },
      { p: 291, md: R`**例7**　已知二次型
\[
f(x_1,x_2,x_3)=5x_1^2+5x_2^2+cx_3^2-2x_1x_2+6x_1x_3-6x_2x_3
\]
的秩为 \(2\).

\((1)\) 求 \(c\) 的值；

\((2)\) 求二次型的正惯性指数、负惯性指数.

**【解】**　\((1)\) 二次型矩阵
\[
\boldsymbol{A}=
\begin{bmatrix}
5&-1&3\\
-1&5&-3\\
3&-3&c
\end{bmatrix}
\]
二次型的秩 \(r(f)=r(\boldsymbol{A})=2\)，
\[
\boldsymbol{A}=
\begin{bmatrix}
5&-1&3\\
-1&5&-3\\
3&-3&c
\end{bmatrix}
\to
\begin{bmatrix}
4&4&0\\
-1&5&-3\\
3&-3&c
\end{bmatrix}
\to
\begin{bmatrix}
1&1&0\\
0&6&-3\\
0&-6&c
\end{bmatrix}
\]
解出 \(c=3\).

\((2)\) 由
\[
|\lambda\boldsymbol{E}-\boldsymbol{A}|=
\begin{vmatrix}
\lambda-5&1&-3\\
1&\lambda-5&3\\
-3&3&\lambda-3
\end{vmatrix}
=\lambda(\lambda-4)(\lambda-9)
\]
得特征值为：\(4,9,0\).
所以正惯性指数 \(p=2\)，负惯性指数 \(q=0\).

**【注】**　也可用配方法，有：
\[
f=5\left(x_1-\frac{1}{5}x_2+\frac{3}{5}x_3\right)^2+\frac{6}{5}(2x_2-x_3)^2
\]
而得 \(p=2,q=0\).

**例8**　与矩阵
\[
\boldsymbol{A}=
\begin{bmatrix}
1&2&0\\
2&1&0\\
0&0&2
\end{bmatrix}
\]
合同的矩阵是

(A) \(\begin{bmatrix}1&&\\&1&\\&&0\end{bmatrix}\).　(B) \(\begin{bmatrix}1&&\\&1&\\&&-1\end{bmatrix}\).　(C) \(\begin{bmatrix}1&&\\&-1&\\&&-1\end{bmatrix}\).　(D) \(\begin{bmatrix}1&&\\&-1&\\&&0\end{bmatrix}\).

**【分析】**　\(\boldsymbol{A}\simeq\boldsymbol{B}\Leftrightarrow p_{\boldsymbol{A}}=p_{\boldsymbol{B}},q_{\boldsymbol{A}}=q_{\boldsymbol{B}}\).

\((1)\) 由特征值
\[
|\lambda\boldsymbol{E}-\boldsymbol{A}|=
\begin{vmatrix}
\lambda-1&-2&0\\
-2&\lambda-1&0\\
0&0&\lambda-2
\end{vmatrix}
=(\lambda-2)(\lambda-3)(\lambda+1)
\]
知二次型的标准形为 \(2y_1^2+3y_2^2-y_3^2\)，即 \(p=2,q=1\). 所以选 (B).

\((2)\) 用配方法
\[
\begin{aligned}
\boldsymbol{x}^{\mathrm{T}}\boldsymbol{A}\boldsymbol{x}
&=x_1^2+x_2^2+2x_3^2+4x_1x_2\\
&=(x_1^2+4x_1x_2+4x_2^2)-4x_2^2+x_2^2+2x_3^2\\
&=(x_1+2x_2)^2-3x_2^2+2x_3^2\\
&=y_1^2-3y_2^2+2y_3^2
\end{aligned}
\]` },
      { p: 292, md: R`亦知 \(p=2,q=1\). 选(B).

**例9** 已知
\[
\boldsymbol{A}=
\begin{bmatrix}
1&-2&0\\
-2&2&2\\
0&2&-2
\end{bmatrix},
\]
\(C\) 是 3 阶可逆矩阵，且 \(C^{\mathrm T}AC=\Lambda\)，则 \(C=\) __________.

**【分析】** \(C^{\mathrm T}AC=\Lambda\) 且 \(C\) 可逆，即 \(A\simeq\Lambda\)，亦即二次型 \(x^{\mathrm T}Ax\) 经坐标变换 \(x=Cy\) 化成标准形 \(y^{\mathrm T}\Lambda y\)，求矩阵 \(C\) 就是求二次型化为标准形时的坐标变换矩阵.
\[
\begin{aligned}
x^{\mathrm T}Ax&=x_1^2+2x_2^2-2x_3^2-4x_1x_2+4x_2x_3\\
&=(x_1^2-4x_1x_2+4x_2^2)-2x_2^2+4x_2x_3-2x_3^2\\
&=(x_1-2x_2)^2-2(x_2-x_3)^2
\end{aligned}
\]
令
\[
\begin{cases}
y_1=x_1-2x_2\\
y_2=x_2-x_3\\
y_3=x_3
\end{cases}
\quad\text{即}\quad
\begin{bmatrix}
x_1\\x_2\\x_3
\end{bmatrix}=
\begin{bmatrix}
1&2&2\\
0&1&1\\
0&0&1
\end{bmatrix}
\begin{bmatrix}
y_1\\y_2\\y_3
\end{bmatrix}
\]
故当
\[
C=
\begin{bmatrix}
1&2&2\\
0&1&1\\
0&0&1
\end{bmatrix}
\]
时，
\[
C^{\mathrm T}AC=\Lambda=
\begin{bmatrix}
1&&\\
&-2&\\
&&0
\end{bmatrix}.
\]

**【注】** 坐标变换不唯一，矩阵 \(C\) 不唯一，也可用正交变换化二次型为标准形.

## 二、正定二次型

**定义（正定）** 若对于任意的非零向量 \(x=(x_1,x_2,\cdots,x_n)^{\mathrm T}\)，恒有
\[
f(x_1,x_2,\cdots,x_n)=\sum_{i=1}^n\sum_{j=1}^n a_{ij}x_ix_j=x^{\mathrm T}Ax>0
\]
则称二次型 \(f\) 为正定二次型，对应矩阵为正定矩阵.

例如：三元二次型 \(f(x_1,x_2,x_3)=x_1^2+3x_2^2+5x_3^2\)，
\[
\forall x=
\begin{bmatrix}
t\\u\\v
\end{bmatrix}\ne\boldsymbol{0},
\]
恒有 \(f(t,u,v)=t^2+3u^2+5v^2>0\).
所以二次型 \(f\) 正定，矩阵
\[
A=
\begin{bmatrix}
1&&\\
&3&\\
&&5
\end{bmatrix}
\]
是正定矩阵.

又如三元二次型 \(f(x_1,x_2,x_3)=x_1^2+4x_2^2+5x_1x_2\) 不是正定二次型，因为当 \(x=(0,1,0)^{\mathrm T}\) 时，\(f(0,1,0)=0\) 不满足 \(\forall x\ne0,f>0\) 的要求.

**定理 6.4** 可逆线性变换不改变二次型的正定性.

由定理可知，对一般的二次型（或对称阵）应设法作可逆线性变换化成标准形（或规范形），看 \(d_i\) 是否均大于零来判别其正定性.

**定理 6.5** \(f\) 正定的充要条件
\[
f(x_1,x_2,\cdots,x_n)=x^{\mathrm T}Ax\text{ 正定}
\]
\(\Leftrightarrow A\) 的正惯性指数 \(p=n\)

\(\Leftrightarrow A\simeq E\)，即存在可逆阵 \(C\)，使得 \(C^{\mathrm T}AC=E\)

\(\Leftrightarrow A=D^{\mathrm T}D\)，其中 \(D\) 是可逆阵
` },
      { p: 293, md: R`\(\Leftrightarrow A\) 的全部特征值 \(\lambda_i>0,i=1,2,\cdots,n\),

\(\Leftrightarrow A\) 的全部顺序主子式大于零，即

若
\[
A=
\begin{bmatrix}
a_{11}&a_{12}&\cdots&a_{1n}\\
a_{21}&a_{22}&\cdots&a_{2n}\\
\vdots&\vdots&&\vdots\\
a_{n1}&a_{n2}&\cdots&a_{nn}
\end{bmatrix}
\]
正定 \(\Leftrightarrow a_{11}>0,\begin{vmatrix}a_{11}&a_{12}\\a_{21}&a_{22}\end{vmatrix}>0,\cdots,|A|>0.\)

**定理 6.6** \(f=x^{\mathrm T}Ax\) 正定的必要条件

若二次型 \(f(x_1,x_2,\cdots,x_n)=x^{\mathrm T}Ax\) 正定，则

（1）\(A\) 的主对角元素 \(a_{ii}>0\).

（2）\(A\) 的行列式 \(|A|>0\).

**例10** 下列矩阵中，正定矩阵是

（A）
\[
\begin{bmatrix}
1&2&0\\
2&3&0\\
0&0&5
\end{bmatrix}.
\]
（B）
\[
\begin{bmatrix}
1&2&0\\
2&5&0\\
0&0&3
\end{bmatrix}.
\]
（C）
\[
\begin{bmatrix}
3&0&0\\
0&1&-2\\
0&-2&4
\end{bmatrix}.
\]
（D）
\[
\begin{bmatrix}
3&0&0\\
0&1&-2\\
0&-2&5
\end{bmatrix}.
\]

**【分析】** （A）中 2 阶主子式 \(\begin{vmatrix}1&2\\2&3\end{vmatrix}<0\)，（B）中 \(a_{33}<0\)，（C）中 \(|A|=0\)，故均不正定，唯有（D）的顺序主子式全大于 0.

**例11** 判别二次型
\[
f(x_1,x_2,x_3)=2x_1^2+5x_2^2+5x_3^2+4x_1x_2-4x_1x_3-8x_2x_3
\]
的正定性.

**【解】** 方法一（用顺序主子式）二次型矩阵
\[
A=
\begin{bmatrix}
2&2&-2\\
2&5&-4\\
-2&-4&5
\end{bmatrix}.
\]
\[
\Delta_1=2>0,\quad
\Delta_2=
\begin{vmatrix}
2&2\\
2&5
\end{vmatrix}=6>0,\quad
\Delta_3=|A|=10>0
\]
所以 \(f\) 是正定二次型.

方法二（用特征值）由 \(A\) 的特征多项式
\[
\begin{aligned}
|\lambda E-A|
&=
\begin{vmatrix}
\lambda-2&-2&2\\
-2&\lambda-5&4\\
2&4&\lambda-5
\end{vmatrix}
=
\begin{vmatrix}
\lambda-2&-2&2\\
-2&\lambda-5&4\\
0&\lambda-1&\lambda-1
\end{vmatrix}\\
&=
\begin{vmatrix}
\lambda-2&-4&2\\
-2&\lambda-9&4\\
0&0&\lambda-1
\end{vmatrix}
=(\lambda-1)
\begin{vmatrix}
\lambda-2&-4\\
-2&\lambda-9
\end{vmatrix}
=(\lambda-1)^2(\lambda-10)
\end{aligned}
\]
\(A\) 的特征值 \(1,1,10\) 全大于 0，所以二次型 \(f\) 正定.

方法三（用配方法）
\[
\begin{aligned}
f&=2[x_1^2+2x_1(x_2-x_3)+(x_2-x_3)^2]+5x_2^2+5x_3^2-8x_2x_3-2(x_2-x_3)^2\\
&=2(x_1+x_2-x_3)^2+3x_2^2-4x_2x_3+3x_3^2\\
&=2(x_1+x_2-x_3)^2+3\left(x_2^2-\frac43x_2x_3+\left(\frac23x_3\right)^2\right)+3x_3^2-\frac43x_3^2\\
&=2(x_1+x_2-x_3)^2+3\left(x_2-\frac23x_3\right)^2+\frac53x_3^2
\end{aligned}
\]
` },
      { p: 294, md: R`可知正惯性指数 \(p=3\)，负惯性指数 \(q=0\)，故二次型正定.

**例12** 已知二次型
\[
f(x_1,x_2,x_3)=x_1^2+4x_2^2+4x_3^2+2tx_1x_2-2x_1x_3+4x_2x_3
\]
正定，求 \(t\) 的取值.

**【解】** 二次型矩阵
\[
A=
\begin{bmatrix}
1&t&-1\\
t&4&2\\
-1&2&4
\end{bmatrix}.
\]
其顺序主子式
\[
\Delta_1=1,\quad
\Delta_2=
\begin{vmatrix}
1&t\\
t&4
\end{vmatrix}=4-t^2,\quad
\Delta_3=|A|=-4t^2-4t+8
\]
正定的充分必要条件是顺序主子式全大于 0，故
\[
4-t^2=(2-t)(2+t)>0,\quad t\in(-2,2)
\]
\[
-4t^2-4t+8=-4(t-1)(t+2)>0,\quad t\in(-2,1)
\]
故 \(t\in(-2,1)\) 时，二次型 \(f\) 正定.

**例13** 设
\[
A=
\begin{bmatrix}
0&1&1\\
1&2&1\\
1&1&0
\end{bmatrix},
\]
若 \(A+kE\) 是正定矩阵，则 \(k\) __________.

**【分析】** \(A\) 正定 \(\Leftrightarrow A\) 的特征值 \(\lambda>0\).
\[
|\lambda E-A|=
\begin{vmatrix}
\lambda&-1&-1\\
-1&\lambda-2&-1\\
-1&-1&\lambda
\end{vmatrix}
=
\begin{vmatrix}
\lambda+1&0&-\lambda-1\\
-1&\lambda-2&-1\\
-1&-1&\lambda
\end{vmatrix}
=\lambda(\lambda+1)(\lambda-3)
\]
\(A\) 的特征值为：\(0,-1,3\)，

\(A+kE\) 的特征值为：\(k,k-1,k+3\)，
\[
A+kE\text{ 正定}
\Leftrightarrow
\begin{cases}
k>0\\
k-1>0\\
k+3>0
\end{cases}
\Leftrightarrow k>1.
\]

**例14** 已知 \(A\) 是正定矩阵，证明 \(A^*\) 是正定矩阵.

**【证】** 因 \(A\) 正定 \(\Rightarrow A^{\mathrm T}=A\)，\(A\) 可逆且 \(|A|>0\).

由 \((A^*)^{\mathrm T}=(A^{\mathrm T})^*=A^*\Rightarrow A^*\) 是对称矩阵.

方法一（用定义）因 \(A\) 可逆，\(x=Ay\) 是坐标变换，且 \(\forall x\ne0\) 必有 \(y\ne0\)，那么 \(\forall x\ne0\)，
\[
x^{\mathrm T}A^*x\stackrel{x=Ay}{=}(Ay)^{\mathrm T}A^*(Ay)=y^{\mathrm T}(|A|A)y=|A|y^{\mathrm T}Ay
\]
因 \(A\) 正定，\(|A|>0,y^{\mathrm T}Ay>0\)，从而 \(\forall x\ne0,x^{\mathrm T}A^*x=|A|y^{\mathrm T}Ay>0\)，故 \(A^*\) 正定.

方法二（用特征值）设 \(A^*\alpha=\lambda\alpha,\alpha\ne0\)

于是 \(AA^*\alpha=\lambda A\alpha\)，即 \(\lambda A\alpha=|A|\alpha\)

由 \(A\) 可逆知 \(A^*\) 必可逆，那么 \(A^*\) 的特征值 \(\lambda\ne0\)

从而有 \(A\alpha=\frac{|A|}{\lambda}\alpha\)，即 \(\frac{|A|}{\lambda}\) 是 \(A\) 的特征值.
` },
      { p: 295, md: R`因 \(A\) 正定，得 \(\frac1\lambda|A|>0\)，而 \(|A|>0\)，故必有 \(\lambda>0\)，

\(\therefore A^*\) 正定.

## 练习 6

（1）二次型 \(f(x_1,x_2,x_3)=x_1^2+x_2^2+ax_3^2-2x_1x_3+4x_2x_3\) 的秩为 2，则 \(a=\) __________.

（2）二次型 \(f(x_1,x_2,x_3)=2x_2^2+2x_1x_3\) 的规范形是__________.

（3）矩阵
\[
A=
\begin{bmatrix}
1&-1&0\\
-1&1&0\\
0&0&2
\end{bmatrix}
\]
的合同标准形是__________.

（4）已知二次型 \(f(x_1,x_2,x_3)=x_2^2+2x_1x_2-4x_1x_3-2x_2x_3\)，用正交变换法化其为标准形，并写出所用坐标变换.

（5）判断二次型 \(f(x_1,x_2,x_3)=(x_1-x_2)^2+(x_2-x_3)^2+(x_3-x_1)^2\) 的正定性.

（练习答案在 298 页）

> 道虽迩，不行不至，事虽小，不为不成。
>
> ——《荀子》
` },
      { p: 296, md: R`# 练习题答案

## 练习 1

（1）2 （2）\((a+b+c)(b-a)(c-a)(c-b)\) 可用范德蒙？

（3）\((a_2a_3-b_2b_3)(a_1a_4-b_1b_4)\) 可用拉普拉斯或直接展开.

（4）0 或 1 （5）1 或 \(-1\) （6）2

## 练习 2.1

注意这 6 个符号，是矩阵？还是数？数与矩阵的关系.

（1）
\[
\begin{bmatrix}
1&2&-1\\
3&6&-3\\
2&4&-2
\end{bmatrix}
\]
（2）
\[
\begin{bmatrix}
1&3&2\\
2&6&4\\
-1&-3&-2
\end{bmatrix}
\]
（3）5 （4）5 （5）
\[
\begin{bmatrix}
1&3&2\\
3&9&6\\
2&6&4
\end{bmatrix}
\]
（6）6

## 练习 2.2

（1）\(x_1^2+7x_2^2+8x_1x_2\) （2）\(x_1^2+2x_2^2+3x_3^2+2x_1x_3-2x_2x_3\) （3）
\[
\begin{bmatrix}
0&6\\
0&6
\end{bmatrix}
\]

## 练习 2.3

（1）D （2）
\[
\begin{bmatrix}
-4&-3\\
-1&-1
\end{bmatrix}
\]
（3）
\[
\begin{bmatrix}
3&0&0\\
0&2&0\\
0&0&1
\end{bmatrix}
\]
（4）
\[
\begin{bmatrix}
1&-4&-3\\
1&-5&-3\\
-1&6&4
\end{bmatrix}
\]

## 练习 2.4

（1）
\[
\begin{bmatrix}
2&1&3\\
10&8&12\\
8&7&9
\end{bmatrix}
\]
（2）
\[
\begin{bmatrix}
2&5&4\\
1&3&1\\
1&5&2
\end{bmatrix}
\]
（3）
\[
\begin{bmatrix}
1&-2&1\\
0&2&2\\
0&3&0
\end{bmatrix}
\]
（4）
\[
\begin{bmatrix}
1&0&1&0\\
0&1&-1&0\\
0&0&0&1
\end{bmatrix}
\]

## 练习 2.5

（1）24（有同学得 \(-24\) 吗？） （2）\(\frac{27}{5}\)（注意 \(A^*=|A|A^{-1}\)）

## 练习 3.1

（1）\(a=5\) （2）\(a=-9\) （3）D

## 练习 3.2

（1）\(r=2\)

（2）当 \(a=2\) 时，\(r=2\). 极大无关组 \(\alpha_1,\alpha_2\)，\(\alpha_3=-\alpha_1+2\alpha_2,\alpha_4=-2\alpha_1+3\alpha_2\).

当 \(a\ne2\) 时，\(r=3\). 极大无关组 \(\alpha_1,\alpha_2,\alpha_4\)，\(\alpha_3=-\alpha_1+2\alpha_2\).

## 练习 3.3

（1）B （2）A

## 练习 4.1

（1）\((2,1,0,0)^{\mathrm T},(-3,0,1,0)^{\mathrm T},(4,0,0,1)^{\mathrm T}\) （2）\(\lambda\ne1\)

（3）D （4）\(k_1(-2,2,1,0,0)^{\mathrm T}+k_2(3,2,0,1,2)^{\mathrm T}\)，\(k_1,k_2\) 为任意常数

## 练习 4.2

（1）\(a=-2\) （2）\((0,0,0,-1)^{\mathrm T}+k_1(-1,1,0,0)^{\mathrm T}+k_2(-1,0,1,-2)^{\mathrm T}\)，\(k_1,k_2\) 为任意常数

（3）当 \(a=3\) 时方程组有解，\((2,1,0)^{\mathrm T}+k(1,-3,1)^{\mathrm T}\)，\(k\) 为任意常数

## 练习 5.1

（1）D （2）37

（3）特征值：\(4,0,-2\)，特征向量依次为 \(k_1(7,4,-17)^{\mathrm T},k_2(1,0,1)^{\mathrm T},k_3(1,-2,1)^{\mathrm T},k_1,k_2,k_3\) 全不为 0
` },
      { p: 297, md: R`（4）特征值：\(1,1,-5\)，\(\lambda=1\) 时特征向量为 \(k_1(1,1,0)^{\mathrm T}+k_2(1,0,1)^{\mathrm T},k_1,k_2\) 不全为 0；\(\lambda=-5\) 时特征向量为 \(k_3(-1,1,1)^{\mathrm T},k_3\ne0\)

（5）因 \(|\lambda E-A|=|(\lambda E-A)^{\mathrm T}|=|(\lambda E)^{\mathrm T}-A^{\mathrm T}|=|\lambda E-A^{\mathrm T}|\)，故 \(A\) 和 \(A^{\mathrm T}\) 有相同的特征值.

例如
\[
A=
\begin{bmatrix}
0&1\\
0&0
\end{bmatrix},
\]
则 \(A\) 和 \(A^{\mathrm T}\) 的特征值都是 \(\lambda_1=\lambda_2=0\).

但矩阵 \(A\) 关于 \(\lambda=0\) 的特征向量是 \(k(1,0)^{\mathrm T}\)，而 \(A^{\mathrm T}\) 的特征向量是 \(k(0,1)^{\mathrm T}\).

## 练习 5.2

（1）E （2）
\[
P^{-1}AP=
\begin{bmatrix}
3&&\\
&1&\\
&&2
\end{bmatrix}
\]
（3）B（其中第二和第三两个矩阵不能相似对角化）

（4）\(a=2\)，
\[
P=
\begin{bmatrix}
3&0&-1\\
1&0&1\\
0&1&2
\end{bmatrix}
\]
时
\[
P^{-1}AP=
\begin{bmatrix}
2&&\\
&2&\\
&&-2
\end{bmatrix}
\]

## 练习 5.3

（1）2 2 2 1 注：\(\alpha\) 是 \((E-A)x=0\) 的基础解系，\(r(E-A)=3;A\sim\Lambda\Rightarrow r(E-\Lambda)=3\).

（2）\(\lambda=0\)，特征向量 \(k(-1,1,1)^{\mathrm T}\) 注：\(r(A)=2\Rightarrow|A|=0\)，所以 \(\lambda=0\) 是特征值.

（2）
\[
Q=
\begin{bmatrix}
0&1&0\\
\frac{1}{\sqrt2}&0&\frac{1}{\sqrt2}\\
-\frac{1}{\sqrt2}&0&\frac{1}{\sqrt2}
\end{bmatrix}
\]
时，
\[
Q^{-1}AQ=
\begin{bmatrix}
1&&\\
&2&\\
&&5
\end{bmatrix}
\]

## 练习 6

（1）5 （2）\(y_1^2+y_2^2-y_3^2\) （3）
\[
\begin{bmatrix}
1&&\\
&1&\\
&&0
\end{bmatrix}
\]

（4）
\[
x=
\begin{bmatrix}
\frac{1}{\sqrt3}&\frac{1}{\sqrt2}&-\frac{1}{\sqrt6}\\
\frac{1}{\sqrt3}&0&\frac{2}{\sqrt6}\\
-\frac{1}{\sqrt3}&\frac{1}{\sqrt2}&\frac{1}{\sqrt6}
\end{bmatrix}
y,\quad
x^{\mathrm T}Ax=y^{\mathrm T}Ay=3y_1^2-2y_2^2
\]

（5）不正定. 对二次型矩阵
\[
A=
\begin{bmatrix}
2&-1&-1\\
-1&2&-1\\
-1&-1&2
\end{bmatrix},
\]
有 \(|A|=0\)，所以二次型不是正定二次型. 注意若令
\[
\begin{cases}
y_1=x_1-x_2\\
y_2=x_2-x_3\\
y_3=-x_1+x_3
\end{cases}
\quad(*),
\]
则因
\[
\begin{vmatrix}
1&-1&0\\
0&1&-1\\
-1&0&1
\end{vmatrix}=0
\]
而知 \((*)\) 不是坐标变换.
` },
      { p: 298, md: R`# 第三篇 概率论与数理统计
` },
      { p: 299, md: R`# 第一章 随机事件和概率

## 本章考点

随机事件与样本空间 事件的关系与运算 完备事件组 概率的概念 概率的基本性质 古典型概率 几何型概率 条件概率 概率的基本公式（加法公式、减法公式、乘法公式、全概率公式以及贝叶斯（Bayes）公式）事件的独立性 独立重复试验

## 第一节 随机事件、事件间的关系与运算

### 一、随机试验

**定义** 对随机现象进行观察或实验称为随机试验，简称试验，记作 \(E\). 它具有如下特点：

（1）可以在相同条件下重复进行；

（2）所得的可能结果不止一个，且所有可能结果都能事前已知；

（3）每次具体实验之前无法预知会出现哪个结果.

例如，抛一枚硬币，记录其结果是正面向上还是反面向上；测试灯泡使用寿命有多长；购买福利彩票中奖或不中奖；等等，都可看成随机试验.

### 二、随机事件

**定义** 随机试验的每一可能结果称为样本点，记作 \(\omega\). 由所有样本点全体组成的集合称为样本空间，记作 \(\Omega\).

**【注】** 显然，样本点是组成样本空间的元素.

**定义** 样本空间的子集称为随机事件，简称事件，常用字母 \(A,B,C\) 等表示.

随机事件是由样本空间中的元素即样本点组成，由一个样本点组成的子集是最简单事件，称为基本事件. 因此，也可将随机事件看成是由基本事件组成.

如果一次试验的结果为某一基本事件出现，就称该基本事件出现或发生. 如果组成事件 \(A\) 的一个基本事件出现或发生，也称事件 \(A\) 出现或发生.

把 \(\Omega\) 看成一事件，则每次试验必有 \(\Omega\) 中某一基本事件（即样本点）发生，也就是每次试验 \(\Omega\) 必然发生，称 \(\Omega\) 为必然事件.

把不包含任何样本点的空集 \(\varnothing\) 看成一个事件. 每次试验 \(\varnothing\) 必不发生，称 \(\varnothing\) 为不可能事件.
` },
    ],
    quiz: [{"q": "二次型 $f=x^TAx$ 的矩阵 $A$ 是", "options": ["对称矩阵", "反对称矩阵", "对角矩阵", "单位矩阵"], "answer": 0, "explain": "二次型矩阵取对称形式。"}, {"q": "二次型正定的充要条件是", "options": ["各阶顺序主子式全大于零", "$|A|<0$", "$r(A)<n$", "特征值全为负"], "answer": 0, "explain": "顺序主子式判别法。"}, {"q": "正惯性指数等于", "options": ["标准形中正平方项的个数", "负平方项个数", "零的个数", "矩阵的秩"], "answer": 0, "explain": "正特征值（正平方项）的个数。"}, {"q": "两个二次型合同的充要条件是", "options": ["有相同的正、负惯性指数", "有相同的秩", "有相同的行列式", "有相同的迹"], "answer": 0, "explain": "惯性定理：合同 ⇔ 正负惯性指数相同。"}]
  };
})();
