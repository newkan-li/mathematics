window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["jc07_s9"] = {
    id: "jc07_s9",
    ch: "第一章 行列式",
    title: "零基础进阶题",
    probTitle: "第一章 行列式 零基础进阶题（含原书解析）",
    book: "李永乐《复习全书·基础篇 零基础进阶题》",
    pages: [35, 37],
    img: "assets/img/jcadv",
    problems: [
      { n: "1", q: R`四阶行列式中包含 \(a_{21}a_{42}\)，且符号为正的项是______。`, a: "", sol: R`根据行列式的定义，四阶行列式中包含 \(a_{21}a_{42}\) 的项为 \(a_{13}a_{21}a_{34}a_{42}\) 和 \(a_{14}a_{21}a_{33}a_{42}\). 由于排列 3142 的逆序数为 3，所以 \(a_{13}a_{21}a_{34}a_{42}\) 的符号为负. 由于排列 4132 的逆序数为 4，所以 \(a_{14}a_{21}a_{33}a_{42}\) 的符号为正，故正确答案为 \(a_{14}a_{21}a_{33}a_{42}\).` },
      { n: "2", q: R`行列式 \(D_4=\begin{vmatrix}1&x&x&x\\x&1&0&0\\x&0&1&0\\x&0&0&1\end{vmatrix}=\) ______。`, a: "", sol: R`将第 \(2,3,4\) 列的 \(-x\) 倍加到第 1 列
\[
D_4=
\begin{vmatrix}
1&x&x&x\\
x&1&0&0\\
x&0&1&0\\
x&0&0&1
\end{vmatrix}
=
\begin{vmatrix}
1-3x^2&x&x&x\\
0&1&0&0\\
0&0&1&0\\
0&0&0&1
\end{vmatrix}
=1-3x^2.
\]

**【评注】** 这是典型的爪形行列式，其一般做法是用主对角线上的元素将第一列除 \(a_{11}\) 外的其余元素变为 0，从而将行列式化为上三角形行列式. 类似地，可以计算 \(n\) 阶行列式
\[
D_n=
\begin{vmatrix}
1&x&\cdots&x\\
x&1&\cdots&0\\
\vdots&\vdots&\ddots&0\\
x&0&\cdots&1
\end{vmatrix}
\]` },
      { n: "3", q: R`设矩阵 \(A=[\alpha,\gamma_1,\gamma_2,\gamma_3]\) 与 \(B=[\beta,\gamma_1,\gamma_2,\gamma_3]\) 都是 4 阶方阵，且行列式 \(|A|=5\)，\(|B|=1\)，则 \(|A+B|=\) ______。`, a: "", sol: R`\[
\begin{aligned}
|A+B|
&=|\alpha+\beta,2\gamma_1,2\gamma_2,2\gamma_3|
=8|\alpha+\beta,\gamma_1,\gamma_2,\gamma_3|\\
&=8\left(|\alpha,\gamma_1,\gamma_2,\gamma_3|+|\beta,\gamma_1,\gamma_2,\gamma_3|\right)
=8(5+1)=48.
\end{aligned}
\]` },
      { n: "4", q: R`设 \(n\) 阶矩阵 \(A\) 和 \(B\) 只有最后一列不同，且 \(|A|=2\)，\(|B|=3\)，则 \(|2A-B|=\) ______。`, a: "", sol: R`根据已知条件，设矩阵 \(A=(\alpha_1,\alpha_2,\cdots,\alpha_{n-1},\alpha_n)\)，\(B=(\alpha_1,\alpha_2,\cdots,\alpha_{n-1},\beta)\)，则
\[
\begin{aligned}
|2A-B|
&=|\alpha_1,\alpha_2,\cdots,\alpha_{n-1},2\alpha_n-\beta|\\
&=|\alpha_1,\alpha_2,\cdots,\alpha_{n-1},2\alpha_n|
+|\alpha_1,\alpha_2,\cdots,\alpha_{n-1},-\beta|\\
&=2|\alpha_1,\alpha_2,\cdots,\alpha_{n-1},\alpha_n|
-|\alpha_1,\alpha_2,\cdots,\alpha_{n-1},\beta|
=2\times2-3=1.
\end{aligned}
\]` },
      { n: "5", q: R`设某三阶行列式的第 2 行元素依次为 \(-1,2,3\)，对应的余子式依次为 \(-3,-2,1\)，则此行列式的值为______。`, a: "", sol: R`由题设 \(a_{21}=-1,a_{22}=2,a_{23}=3\)，对应的余子式为 \(M_{21}=-3,M_{22}=-2,M_{23}=1\)，于是相应的代数余子式为 \(A_{21}=3,A_{22}=-2,A_{23}=-1\)，从而行列式的值为 \(a_{21}A_{21}+a_{22}A_{22}+a_{23}A_{23}=(-1)\times3+2\times(-2)+3\times(-1)=-10\).` },
      { n: "6", q: R`如果行列式 \(\begin{vmatrix}1&0&2\\x&3&1\\4&x&5\end{vmatrix}\) 中，\(a_{12}\) 的代数余子式为 \(A_{12}=-1\)，则 \(a_{21}\) 的代数余子式 \(A_{21}=\) ______。`, a: "", sol: R`由代数余子式的定义，\(a_{12}\) 的代数余子式
\[
A_{12}=-
\begin{vmatrix}
x&1\\
4&5
\end{vmatrix},
\]
由题设 \(A_{12}=-1\)，所
以 \(x=1\). 故
\[
A_{21}=-
\begin{vmatrix}
0&2\\
x&5
\end{vmatrix}
=2x=2.
\]` },
      { n: "7", q: R`二次多项式
\[
f(x)=\begin{vmatrix}2&8&5&7\\5&4&x&8\\1&x&2&3\\1&4&3&-1\end{vmatrix}
\]
中，\(x^2\) 的系数为

(A)9.　　(B)7.　　(C)5.　　(D)\(-7\).`, a: "(A)", sol: R`根据行列式的定义，含 \(x^2\) 的项有两项，一项为 \(a_{14}a_{23}a_{32}a_{41}=7x^2\)，由于排列 4321 的逆序数为 \(1+2+3=6\)，该项符号为正，故为 \(7x^2\). 另一项为 \(a_{11}a_{23}a_{32}a_{44}=-2x^2\)，由于排列 1324 的逆序数为 1，该项符号为负，故为 \(-(-2x^2)=2x^2\). 所以含 \(x^2\) 的项为 \(7x^2+2x^2=9x^2\)，其系数为 9，正确选项是 (A).

本题也可以通过计算行列式求解，比较麻烦.` },
      { n: "8", q: R`\[
\begin{vmatrix}101&100&201\\202&200&398\\297&300&601\end{vmatrix}
\]

(A)2000.　　(B)2400.　　(C)\(-2000\).　　(D)1600.`, a: "(B)", sol: R`先将行列式第 2 列的 \((-1)\) 倍加到第 1 列，再将第 2 列的 \((-2)\) 倍加到第 3 列
\[
\begin{aligned}
\begin{vmatrix}
101&100&201\\
202&200&398\\
297&300&601
\end{vmatrix}
&=
\begin{vmatrix}
1&100&1\\
2&200&-2\\
-3&300&1
\end{vmatrix}
=100
\begin{vmatrix}
1&1&1\\
2&2&-2\\
-3&3&1
\end{vmatrix}\\
&=100
\begin{vmatrix}
1&1&1\\
0&0&-4\\
0&6&4
\end{vmatrix}
=2400.
\end{aligned}
\]` },
      { n: "9", q: R`已知 \(A=\begin{bmatrix}a_{11}&a_{12}&a_{13}\\a_{21}&a_{22}&a_{23}\\3&3&3\end{bmatrix}\)，且 \(|A|=6\)，则 \(|A|\) 的第 3 行元素的代数余子式之和 \(A_{31}+A_{32}+A_{33}=\)

(A)6.　　(B)18.　　(C)2.　　(D)3.`, a: "(C)", sol: R`由行列式展开定理
\[
|A|=
\begin{vmatrix}
a_{11}&a_{12}&a_{13}\\
a_{21}&a_{22}&a_{23}\\
3&3&3
\end{vmatrix}
=3A_{31}+3A_{32}+3A_{33}=3(A_{31}+A_{32}+A_{33}),
\]
由题设 \(|A|=6\)，所以 \(A_{31}+A_{32}+A_{33}=2\).` },
      { n: "10", q: R`计算行列式
\[
\begin{vmatrix}a&1&0&0\\-1&b&1&0\\0&-1&c&1\\0&0&-1&d\end{vmatrix}.
\]`, a: "", sol: R`\[
\begin{aligned}
\begin{vmatrix}
a&1&0&0\\
-1&b&1&0\\
0&-1&c&1\\
0&0&-1&d
\end{vmatrix}
&=
\begin{vmatrix}
0&1+ab&a&0\\
-1&b&1&0\\
0&-1&c&1\\
0&0&-1&d
\end{vmatrix}
=
\begin{vmatrix}
1+ab&a&0\\
-1&c&1\\
0&-1&d
\end{vmatrix}\\
&=
\begin{vmatrix}
1+ab&a&ad\\
-1&c&1+cd\\
0&-1&0
\end{vmatrix}
=
\begin{vmatrix}
1+ab&ad\\
-1&1+cd
\end{vmatrix}\\
&=(1+ab)(1+cd)+ad=abcd+ab+cd+ad+1.
\end{aligned}
\]` },
      { n: "11", q: R`计算 \(n\) 阶行列式
\[
D_n=\begin{vmatrix}n+1&1&\cdots&1\\1&n+1&\cdots&1\\\vdots&\vdots&\ddots&\vdots\\1&1&\cdots&n+1\end{vmatrix}.
\]`, a: "", sol: R`由于行列式每一列的元素和均为 \(2n\)，将各行加到第一行得
\[
\begin{aligned}
D_n&=
\begin{vmatrix}
2n&2n&2n&\cdots&2n\\
1&n+1&1&\cdots&1\\
1&1&n+1&\cdots&1\\
\vdots&\vdots&\vdots&\ddots&\vdots\\
1&1&1&\cdots&n+1
\end{vmatrix}\\
&=2n
\begin{vmatrix}
1&1&1&\cdots&1\\
1&n+1&1&\cdots&1\\
1&1&n+1&\cdots&1\\
\vdots&\vdots&\vdots&\ddots&\vdots\\
1&1&1&\cdots&n+1
\end{vmatrix}.
\end{aligned}
\]
\[
=2n
\begin{vmatrix}
1&1&1&\cdots&1\\
0&n&0&\cdots&0\\
0&0&n&\cdots&0\\
\vdots&\vdots&\vdots&\ddots&\vdots\\
0&0&0&\cdots&n
\end{vmatrix}
=2n^n.
\]` },
      { n: "12", q: R`求解线性方程组
\[
\begin{cases}
2x_1+x_2-3x_3+x_4=1,\\
x_1+2x_2-3x_3+x_4=0,\\
x_2-2x_3+x_4=1,\\
-x_1+3x_2-4x_3=0.
\end{cases}
\]
**作业超链接**　《基础过关660题》

| 类别 | 知识点 | 题号 |
|---|---|---|
| 数一 | 数字型行列式的计算 | 276 277 278 279 280 281 341 342 343 |
| 数一 | 抽象型行列式的计算 | 283 |
| 数一 | 行列式的性质 | 282 344 345 346 |
| 数二 | 数字型行列式的计算 | 276 277 278 279 280 281 341 342 343 |
| 数二 | 抽象型行列式的计算 | 283 347 348 |
| 数二 | 行列式的性质 | 282 344 345 346 |
| 数三 | 数字型行列式的计算 | 276 277 278 279 280 281 341 342 343 |
| 数三 | 抽象型行列式的计算 | 283 |
| 数三 | 行列式的性质 | 282 344 345 346 |`, a: "", sol: R`方程组的系数行列式
\[
D=
\begin{vmatrix}
2&1&-3&1\\
1&2&-3&1\\
0&1&-2&1\\
-1&3&-4&0
\end{vmatrix}
=6\ne0,
\]
由 Cramer 法则知方程组有唯一解. 因为
\[
D_1=
\begin{vmatrix}
1&1&-3&1\\
0&2&-3&1\\
1&1&-2&1\\
0&3&-4&0
\end{vmatrix}
=-3,
\]
\[
D_2=
\begin{vmatrix}
2&1&-3&1\\
1&0&-3&1\\
0&1&-2&1\\
-1&0&-4&0
\end{vmatrix}
=-9,
\]
\[
D_3=
\begin{vmatrix}
2&1&1&1\\
1&2&0&1\\
0&1&1&1\\
-1&3&0&0
\end{vmatrix}
=-6,
\]
\[
D_4=
\begin{vmatrix}
2&1&-3&1\\
1&2&-3&0\\
0&1&-2&1\\
-1&3&-4&0
\end{vmatrix}
=3,
\]
故 \(x_1=\dfrac{D_1}{D}=-\dfrac{1}{2},x_2=\dfrac{D_2}{D}=-\dfrac{3}{2},x_3=\dfrac{D_3}{D}=-1,x_4=\dfrac{D_4}{D}=\dfrac{1}{2}\).

### 第二章　矩阵` },
    ]
  };
})();
