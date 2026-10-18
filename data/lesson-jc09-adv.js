window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["jc09_s9"] = {
    id: "jc09_s9",
    ch: "第三章 向量",
    title: "零基础进阶题",
    probTitle: "第三章 向量 零基础进阶题（含原书解析）",
    book: "李永乐《复习全书·基础篇 零基础进阶题》",
    pages: [41, 43],
    img: "assets/img/jcadv",
    problems: [
      { n: "1", q: R`设 \(A=\begin{bmatrix}1&2&-2\\2&1&2\\3&0&4\end{bmatrix},\boldsymbol{\alpha}=\begin{pmatrix}a\\1\\1\end{pmatrix}\)，若 \(A\boldsymbol{\alpha}\) 与 \(\boldsymbol{\alpha}\) 线性相关，则 \(a=\) ______。`, a: "", sol: R`由于 \(A\alpha\) 与 \(\alpha\) 线性相关，\(\alpha\neq0\)，所以存在数 \(\lambda\) 使得 \(A\alpha=\lambda\alpha\)，即
\[
\begin{bmatrix}
1&2&-2\\
2&1&2\\
3&0&4
\end{bmatrix}
\begin{bmatrix}a\\1\\1\end{bmatrix}
=\lambda\begin{bmatrix}a\\1\\1\end{bmatrix},
\]
于是
\[
\begin{cases}
a=\lambda a,\\
2a+3=\lambda,\\
3a+4=\lambda,
\end{cases}
\]
解得 \(a=-1\).` },
      { n: "2", q: R`如果向量 \(\boldsymbol{\alpha}=(1,-2,2,-1)\) 与向量 \(\boldsymbol{\beta}=(1,1,k,3)\) 正交，则常数 \(k=\) ______。`, a: "", sol: R`由于向量 \(\alpha=(1,-2,2,-1)\) 与向量 \(\beta=(1,1,k,3)\) 正交，故 \((\alpha,\beta)=1-2+2k-3=0\)，所以 \(k=2\).` },
      { n: "3", q: R`设向量组 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3\) 线性无关，则下列向量组中线性相关的是

(A) \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_1+\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_1+\boldsymbol{\alpha}_2+\boldsymbol{\alpha}_3\).

(B) \(\boldsymbol{\alpha}_1+\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_2+\boldsymbol{\alpha}_3,\boldsymbol{\alpha}_1+\boldsymbol{\alpha}_3\).

(C) \(\boldsymbol{\alpha}_1+\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3,\boldsymbol{\alpha}_3+\boldsymbol{\alpha}_1\).

(D) \(\boldsymbol{\alpha}_1+\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_2+\boldsymbol{\alpha}_3,-\boldsymbol{\alpha}_1+\boldsymbol{\alpha}_3\).`, a: "(D)", sol: R`由于 \(\alpha_1,\alpha_2,\alpha_3\) 线性无关，

· 123 ·
复习全书基础篇

\[
(\alpha_1,\alpha_1+\alpha_2,\alpha_1+\alpha_2+\alpha_3)
=(\alpha_1,\alpha_2,\alpha_3)
\begin{bmatrix}
1&1&1\\
0&1&1\\
0&0&1
\end{bmatrix},
\]
且
\[
\begin{vmatrix}
1&1&1\\
0&1&1\\
0&0&1
\end{vmatrix}\neq0,
\]
所以选项(A)中的向量组 \(\alpha_1,\alpha_1+\alpha_2,\alpha_1+\alpha_2+\alpha_3\) 线性无关.

\[
(\alpha_1+\alpha_2,\alpha_2+\alpha_3,\alpha_1+\alpha_3)
=(\alpha_1,\alpha_2,\alpha_3)
\begin{bmatrix}
1&0&1\\
1&1&0\\
0&1&1
\end{bmatrix},
\]
且
\[
\begin{vmatrix}
1&0&1\\
1&1&0\\
0&1&1
\end{vmatrix}=2\neq0,
\]
所以选项(B)中的向量组 \(\alpha_1+\alpha_2,\alpha_2+\alpha_3,\alpha_1+\alpha_3\) 线性无关.

\[
(\alpha_1+\alpha_2,\alpha_3,\alpha_3+\alpha_1)
=(\alpha_1,\alpha_2,\alpha_3)
\begin{bmatrix}
1&0&1\\
1&0&0\\
0&1&1
\end{bmatrix},
\]
且
\[
\begin{vmatrix}
1&0&1\\
1&0&0\\
0&1&1
\end{vmatrix}=1\neq0,
\]
所以选项(C)中的向量组 \(\alpha_1+\alpha_2,\alpha_3,\alpha_3+\alpha_1\) 线性无关.

\[
(\alpha_1+\alpha_2,\alpha_2+\alpha_3,-\alpha_1+\alpha_3)
=(\alpha_1,\alpha_2,\alpha_3)
\begin{bmatrix}
1&0&-1\\
1&1&0\\
0&1&1
\end{bmatrix},
\]
且
\[
\begin{vmatrix}
1&0&-1\\
1&1&0\\
0&1&1
\end{vmatrix}=0,
\]
所以选项(D)中的向量组 \(\alpha_1+\alpha_2,\alpha_2+\alpha_3,-\alpha_1+\alpha_3\) 线性相关.
综上，正确选项为(D).

**【评注】** 若向量组 \(\alpha_1,\alpha_2,\alpha_3\) 线性无关，向量组 \(\beta_1,\beta_2,\beta_3\) 可由 \(\alpha_1,\alpha_2,\alpha_3\) 线性表示，且 \(\beta_1,\beta_2,\beta_3=(\alpha_1,\alpha_2,\alpha_3)C\)，则 \(|C|\neq0\) 时，向量组 \(\beta_1,\beta_2,\beta_3\) 线性无关，\(|C|=0\) 时，向量组 \(\beta_1,\beta_2,\beta_3\) 线性相关.` },
      { n: "4", q: R`设 \(A,B\) 为 \(n\) 阶方阵，\(P,Q\) 为 \(n\) 阶可逆矩阵，则下列命题不正确的是

(A) 若 \(B=AQ\)，则 \(A\) 的列向量组与 \(B\) 的列向量组等价.

(B) 若 \(B=PA\)，则 \(A\) 的行向量组与 \(B\) 的行向量组等价.

(C) 若 \(B=PAQ\)，则 \(A\) 的行(列)向量组与 \(B\) 的行(列)向量组等价.

(D) 若 \(B=PAQ\)，则矩阵 \(A\) 与 \(B\) 等价.`, a: "(C)", sol: R`(A) 选项中的命题正确，证明如下：

在 \(B=AQ\) 中，若记 \(A=[\alpha_1,\alpha_2,\cdots,\alpha_n]\)，\(B=[\beta_1,\beta_2,\cdots,\beta_n]\)，\(Q=[q_{ij}]\)，则有
\[
[\beta_1,\beta_2,\cdots,\beta_n]
=[\alpha_1,\alpha_2,\cdots,\alpha_n]
\begin{bmatrix}
q_{11}&q_{12}&\cdots&q_{1n}\\
q_{21}&q_{22}&\cdots&q_{2n}\\
\vdots&\vdots&&\vdots\\
q_{n1}&q_{n2}&\cdots&q_{nn}
\end{bmatrix}
\]

故
\[
\beta_1=q_{11}\alpha_1+q_{21}\alpha_2+\cdots+q_{n1}\alpha_n,
\]
\[
\beta_2=q_{12}\alpha_1+q_{22}\alpha_2+\cdots+q_{n2}\alpha_n,
\]
\[
\cdots
\]
\[
\beta_n=q_{1n}\alpha_1+q_{2n}\alpha_2+\cdots+q_{nn}\alpha_n.
\]
从而向量组 \(\beta_1,\beta_2,\cdots,\beta_n\) 可由向量组 \(\alpha_1,\alpha_2,\cdots,\alpha_n\) 线性表示. 另一方面，由于矩阵 \(Q\) 可逆，则 \(A=BQ^{-1}\)，类似地可得，向量组 \(\alpha_1,\alpha_2,\cdots,\alpha_n\) 可由向量组 \(\beta_1,\beta_2,\cdots,\beta_n\) 线性表示，所以向量组 \(\alpha_1,\alpha_2,\cdots,\alpha_n\) 与向量组 \(\beta_1,\beta_2,\cdots,\beta_n\) 等价.

· 124 ·
参考答案

(B) 选项中的命题正确，证明如下：

由于 \(B=PA\)，所以 \(B^{T}=A^{T}P^{T}\)，又 \(P\) 为可逆矩阵，故 \(P^{T}\) 也可逆，由选项(A)中的证明知 \(B^{T}\) 的列向量组与 \(A^{T}\) 的列向量组等价，即 \(A\) 的行向量组与 \(B\) 的行向量组等价.

(C) 选项中的命题不正确，例如

若
\[
A=\begin{bmatrix}1&0\\0&0\end{bmatrix},
B=\begin{bmatrix}0&0\\1&1\end{bmatrix},
P=\begin{bmatrix}0&1\\1&0\end{bmatrix},
Q=\begin{bmatrix}1&1\\0&1\end{bmatrix},
\]
则
\[
PAQ=
\begin{bmatrix}0&1\\1&0\end{bmatrix}
\begin{bmatrix}1&0\\0&0\end{bmatrix}
\begin{bmatrix}1&1\\0&1\end{bmatrix}
=
\begin{bmatrix}0&0\\1&0\end{bmatrix}
\begin{bmatrix}1&1\\0&1\end{bmatrix}
=
\begin{bmatrix}0&0\\1&1\end{bmatrix}
=B.
\]
矩阵 \(A\) 的行(列)向量组与 \(B\) 的行(列)向量组均不等价.

(D) 选项中的命题正确，因为矩阵 \(A\) 与矩阵 \(B\) 等价 \(\Leftrightarrow A\) 可经初等变换变为矩阵 \(B\Leftrightarrow\) 存在可逆矩阵 \(P,Q\) 使得 \(PAQ=B\).` },
      { n: "5", q: R`设 \(a_i,b_i\ (i=1,2,3,4)\) 均为非零实数，
\[
A=\begin{bmatrix}
a_1b_1 & a_1b_2 & a_1b_3 & a_1b_4\\
a_2b_1 & a_2b_2 & a_2b_3 & a_2b_4\\
a_3b_1 & a_3b_2 & a_3b_3 & a_3b_4\\
a_4b_1 & a_4b_2 & a_4b_3 & a_4b_4
\end{bmatrix},
\]
则 \(A\) 的秩为

(A) 4.　　(B) 3.　　(C) 2.　　(D) 1.`, a: "(D)", sol: R`由于
\[
A=\begin{bmatrix}
a_1b_1&a_1b_2&a_1b_3&a_1b_4\\
a_2b_1&a_2b_2&a_2b_3&a_2b_4\\
a_3b_1&a_3b_2&a_3b_3&a_3b_4\\
a_4b_1&a_4b_2&a_4b_3&a_4b_4
\end{bmatrix}
=\begin{bmatrix}a_1\\a_2\\a_3\\a_4\end{bmatrix}(b_1,b_2,b_3,b_4),
\]
所以
\[
r(A)\leqslant r\begin{bmatrix}a_1\\a_2\\a_3\\a_4\end{bmatrix}\leqslant1.
\]
另一方面，由题设 \(A\neq O\)，所以 \(r(A)\geqslant1\)，故 \(r(A)=1\).` },
      { n: "6", q: R`若 \(A=\begin{bmatrix}a_{11}&a_{12}&a_{13}\\a_{21}&a_{22}&a_{23}\\a_{31}&a_{32}&a_{33}\end{bmatrix}\) 是实正交阵，则下列结论不正确的是

(A) \(|A|=1\).

(B) \(AA^{\mathrm{T}}=A^{\mathrm{T}}A=E\).

(C) \(a_{11}^2+a_{12}^2+a_{13}^2=1\).

(D) \(a_{11}a_{21}+a_{12}a_{22}+a_{13}a_{23}=0\).`, a: "(A)", sol: R`注意矩阵 \(A\) 为正交矩阵 \(\Leftrightarrow AA^{T}=E\Leftrightarrow A^{T}A=E\Leftrightarrow\) 矩阵 \(A\) 的列(行)向量组两两正交，且每一个列(行)向量均为单位向量.
所以选项(B)(C)(D)中的结论均正确，现举例说明(A)中的结论不正确，
\[
A=\begin{bmatrix}1&0&0\\0&1&0\\0&0&-1\end{bmatrix},
A^{T}A=
\begin{bmatrix}1&0&0\\0&1&0\\0&0&-1\end{bmatrix}
\begin{bmatrix}1&0&0\\0&1&0\\0&0&-1\end{bmatrix}
=E,
\]
即 \(A\) 为正交矩阵，但 \(|A|=-1\).` },
      { n: "7", q: R`设 \(\boldsymbol{\alpha}_1=(1,2,-3)^{\mathrm{T}},\boldsymbol{\alpha}_2=(-3,4,7)^{\mathrm{T}},\boldsymbol{\alpha}_3=(7,-3,2)^{\mathrm{T}},\boldsymbol{\beta}=(2,-1,3)^{\mathrm{T}}\)，问 \(\boldsymbol{\beta}\) 能否由 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3\) 线性表示，若能，写出表示式.`, a: "", sol: R`考虑线性方程组
\[
x_1\alpha_1+x_2\alpha_2+x_3\alpha_3=\beta,
\]
即
\[
\begin{cases}
x_1-3x_2+7x_3=2\\
2x_1+4x_2-3x_3=-1\\
-3x_1+7x_2+2x_3=3
\end{cases}
\]
由于系数行列式非零，方程组有唯一解，其解为
\[
x_1=-\frac{27}{98},x_2=\frac{19}{98},x_3=\frac{20}{49},
\]
所以 \(\beta\) 可由 \(\alpha_1,\alpha_2,\alpha_3\) 线性表示，且
\[
\beta=-\frac{27}{98}\alpha_1+\frac{19}{98}\alpha_2+\frac{20}{49}\alpha_3.
\]

· 125 ·
复习全书基础篇` },
      { n: "8", q: R`设向量组 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3\) 线性无关，\(\boldsymbol{\beta}_1=\boldsymbol{\alpha}_1+\boldsymbol{\alpha}_2,\boldsymbol{\beta}_2=\boldsymbol{\alpha}_2+\boldsymbol{\alpha}_3,\boldsymbol{\beta}_3=\boldsymbol{\alpha}_1+\boldsymbol{\alpha}_3\)，证明向量组 \(\boldsymbol{\beta}_1,\boldsymbol{\beta}_2,\boldsymbol{\beta}_3\) 线性无关.`, a: "", sol: R`设 \(k_1,k_2,k_3\) 使得
\[
k_1\beta_1+k_2\beta_2+k_3\beta_3=0,
\]
即
\[
k_1(\alpha_1+\alpha_2)+k_2(\alpha_2+\alpha_3)+k_3(\alpha_1+\alpha_3)=0,
\]
于是
\[
(k_1+k_3)\alpha_1+(k_1+k_2)\alpha_2+(k_2+k_3)\alpha_3=0.
\]
由于向量组 \(\alpha_1,\alpha_2,\alpha_3\) 线性无关，所以
\[
\begin{cases}
k_1+k_3=0,\\
k_1+k_2=0,\\
k_2+k_3=0,
\end{cases}
\]
又
\[
\begin{vmatrix}
1&1&0\\
0&1&1\\
1&0&1
\end{vmatrix}=2\neq0,
\]
故 \(k_1=k_2=k_3=0\)，因此 \(\beta_1,\beta_2,\beta_3\) 线性无关.` },
      { n: "9", q: R`设向量组 \(\boldsymbol{\alpha}_1=\begin{pmatrix}1\\3\\1\\5\end{pmatrix},\boldsymbol{\alpha}_2=\begin{pmatrix}1\\2\\1\\4\end{pmatrix},\boldsymbol{\alpha}_3=\begin{pmatrix}1\\1\\2\\3\end{pmatrix},\boldsymbol{\alpha}_4=\begin{pmatrix}2\\5\\2\\9\end{pmatrix},\boldsymbol{\alpha}_5=\begin{pmatrix}1\\1\\3\\3\end{pmatrix}\)，求向量组的秩与一个极大线性无关组，并将其他向量用所求的极大线性无关组表示.`, a: "", sol: R`对矩阵 \(A=(\alpha_1,\alpha_2,\alpha_3,\alpha_4,\alpha_5)\) 进行初等行变换
\[
A=\begin{bmatrix}
1&1&1&2&1\\
3&2&1&5&1\\
1&1&2&2&3\\
5&4&3&9&3
\end{bmatrix}
\to
\begin{bmatrix}
1&1&1&2&1\\
0&-1&-2&-1&-2\\
0&0&1&0&2\\
0&-1&-2&-1&-2
\end{bmatrix}
\to
\begin{bmatrix}
1&0&0&1&1\\
0&1&0&1&-2\\
0&0&1&0&2\\
0&0&0&0&0
\end{bmatrix}
\]
所以向量组的秩为 3，\(\alpha_1,\alpha_2,\alpha_3\) 为一个极大线性无关组，且 \(\alpha_4=\alpha_1+\alpha_2,\alpha_5=\alpha_1-2\alpha_2+2\alpha_3\).

**【评注】** 对矩阵 \(A=[\alpha_1,\alpha_2,\alpha_3,\alpha_4,\alpha_5]\) 作初等行变换得矩阵 \(B=[\beta_1,\beta_2,\beta_3,\beta_4,\beta_5]\)，则矩阵 \(A\) 与 \(B\) 对应的列有相同的线性关系.` },
      { n: "10", q: R`试用施密特(Schmidt)正交化方法将向量组 \(\boldsymbol{\alpha}_1=(1,0,0)^{\mathrm{T}},\boldsymbol{\alpha}_2=(1,1,0)^{\mathrm{T}},\boldsymbol{\alpha}_3=(1,1,1)^{\mathrm{T}}\)，化为正交向量组.`, a: "", sol: R`由施密特正交化方法，令
\[
\beta_1=\alpha_1=\begin{bmatrix}1\\0\\0\end{bmatrix},
\]
\[
\beta_2=\alpha_2-\frac{(\alpha_2,\beta_1)}{(\beta_1,\beta_1)}\beta_1
=\begin{bmatrix}1\\1\\0\end{bmatrix}-\begin{bmatrix}1\\0\\0\end{bmatrix}
=\begin{bmatrix}0\\1\\0\end{bmatrix},
\]
\[
\beta_3=\alpha_3-\frac{(\alpha_3,\beta_1)}{(\beta_1,\beta_1)}\beta_1
-\frac{(\alpha_3,\beta_2)}{(\beta_2,\beta_2)}\beta_2
=\begin{bmatrix}1\\1\\1\end{bmatrix}
-\begin{bmatrix}1\\0\\0\end{bmatrix}
-\begin{bmatrix}0\\1\\0\end{bmatrix}
=\begin{bmatrix}0\\0\\1\end{bmatrix}.
\]
则 \(\beta_1,\beta_2,\beta_3\) 为所求正交向量组.` },
      { n: "11", q: R`设 \(\boldsymbol{\alpha}_1=\frac{1}{3}(1,2,2)^{\mathrm{T}},\boldsymbol{\alpha}_2=\frac{1}{\sqrt{5}}(-2,1,0)^{\mathrm{T}}\)，求向量 \(\boldsymbol{\alpha}_3\) 使得 \(A=[\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3]\) 为正交矩阵.
#`, a: "", sol: R`设 \(\alpha_3=(x_1,x_2,x_3)^{T}\)，由于 \(\alpha_3\) 与 \(\alpha_1,\alpha_2\) 均正交，所以 \((\alpha_1,\alpha_3)=0,(\alpha_2,\alpha_3)=0\)，于是
\[
\begin{cases}
x_1+2x_2+2x_3=0,\\
-2x_1+x_2=0,
\end{cases}
\]
求得基础解系 \(\xi=(-2,-4,5)^{T}\)，
从而
\[
\alpha_3=\frac{1}{3\sqrt{5}}(-2,-4,5)^{T}
\]
或
\[
\alpha_3=-\frac{1}{3\sqrt{5}}(-2,-4,5)^{T}
\]
均使得 \(A=(\alpha_1,\alpha_2,\alpha_3)\) 为正

· 126 ·` },
    ]
  };
})();
