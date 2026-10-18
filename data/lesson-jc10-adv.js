window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["jc10_s9"] = {
    id: "jc10_s9",
    ch: "第四章 线性方程组",
    title: "零基础进阶题",
    probTitle: "第四章 线性方程组 零基础进阶题（含原书解析）",
    book: "李永乐《复习全书·基础篇 零基础进阶题》",
    pages: [44, 47],
    img: "assets/img/jcadv",
    problems: [
      { n: "1", q: R`若方程组
\[
\begin{pmatrix}
1 & 2 & 1\\
2 & 3 & a+2\\
1 & a & -2
\end{pmatrix}
\begin{pmatrix}
x_1\\x_2\\x_3
\end{pmatrix}
=
\begin{pmatrix}
1\\3\\0
\end{pmatrix}
\]
无解，则 \(a=\underline{\qquad}\)．`, a: "", sol: R`对方程组的增广矩阵施行初等行变换：
\[
(A|b)=
\begin{pmatrix}
1&2&1&1\\
2&3&a+2&3\\
1&a&-2&0
\end{pmatrix}
\xrightarrow[r_3-r_1]{r_2-2r_1}
\begin{pmatrix}
1&2&1&1\\
0&-1&a&1\\
0&a-2&-3&-1
\end{pmatrix}
\xrightarrow{r_3+(a-2)r_2}
\begin{pmatrix}
1&2&1&1\\
0&-1&a&1\\
0&0&(a+1)(a-3)&a-3
\end{pmatrix}
\]
由方程组无解，知 \(r(A)<r(A|b)\)，从而 \(a=-1\).` },
      { n: "2", q: R`若 3 阶方阵 \(A\) 的秩为 2，\(\xi,\eta\) 是非齐次线性方程组 \(Ax=b\) 的两个不同的解，则该方程组的通解为 \underline{\qquad}．`, a: "", sol: R`因为 \(\boldsymbol{\xi},\boldsymbol{\eta}\) 是非齐次线性方程组 \(A\boldsymbol{x}=\boldsymbol{b}\) 的两个不同的解，故 \(A\boldsymbol{\xi}=\boldsymbol{b},A\boldsymbol{\eta}=\boldsymbol{b}\)，
又 \(A\boldsymbol{\xi}-A\boldsymbol{\eta}=\boldsymbol{b}-\boldsymbol{b}=\boldsymbol{0}\)，
所以 \(\boldsymbol{\xi}-\boldsymbol{\eta}\) 是 \(A\boldsymbol{x}=\boldsymbol{0}\) 的一个解，
又因为 \(A\) 为 \(3\) 阶方阵且 \(r(A)=2\)，
所以齐次线性方程组中只有 \(n-r(A)=3-2=1\) 个解向量，
因此 \(A\boldsymbol{x}=\boldsymbol{b}\) 的通解为 \(\boldsymbol{x}=k(\boldsymbol{\xi}-\boldsymbol{\eta})+\boldsymbol{\xi},k\in\mathbf{R}\).` },
      { n: "3", q: R`线性方程组
\[
\begin{cases}
ax+y-z+w=0,\\
4x+ay-2z+w=0,\\
ax+y-z-w=0
\end{cases}
\]
(A)无解．　　(B)仅有零解．
(C)有无穷多解．　　(D)解的情况依 \(a\) 的值而定．`, a: "(C)", sol: R`因未知数个数 \((4)>\) 方程个数 \((3)\)，
故有无穷多组解.
故选(C).` },
      { n: "4", q: R`设线性方程组 \(Ax=b\) 的增广矩阵为 \(\overline{A}=(A\vdots b)\)，若 \(\overline{A}\) 在初等行变换的过程中有一行变为 \((0,\cdots,0,1)\)，则该方程组
(A)可能有唯一解．　　(B)可能有无穷多解．
(C)无解．　　(D)解的情况不能确定．`, a: "(C)", sol: R`由题可知 \(r(\overline{A})>r(A)\)，
故方程组无解.
故选(C).` },
      { n: "5", q: R`向量 \(b\) 可由矩阵 \(A\) 的列向量组线性表示的充要条件是线性方程组 \(Ax=b\)
(A)有解．　　(B)有唯一解．　　(C)有无穷多解．　　(D)无解．`, a: "(A)", sol: R`设矩阵 \(A=[\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_n]\)，\(\boldsymbol{\alpha}_i\) 是矩阵 \(A\) 的列向量
则向量 \(\boldsymbol{b}\) 可由 \(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_n\) 线性表出
\(\Leftrightarrow \exists x_1,x_2,\cdots,x_n\) 使得 \(x_1\boldsymbol{\alpha}_1+x_2\boldsymbol{\alpha}_2+\cdots+x_n\boldsymbol{\alpha}_n=\boldsymbol{b}\)
\[
\Leftrightarrow \exists x_1,x_2,\cdots,x_n \text{ 使得 }
[\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_n]
\begin{pmatrix}
x_1\\
x_2\\
\vdots\\
x_n
\end{pmatrix}
=\boldsymbol{b}
\]
\[
\Leftrightarrow
[\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_n]
\begin{pmatrix}
x_1\\
x_2\\
\vdots\\
x_n
\end{pmatrix}
=\boldsymbol{b}
\text{ 有解}
\]
\(\Leftrightarrow A\boldsymbol{x}=\boldsymbol{b}\) 有解.

**【注】** \(A\boldsymbol{x}=\boldsymbol{b}\) 可能有唯一解，无穷多解，取决于矩阵 \(A\) 是否满秩. 故选(A).` },
      { n: "6", q: R`齐次线性方程组
\[
\begin{cases}
x_1+2x_3=0,\\
x_2-2x_3+x_5=0,\\
x_4+x_5=0
\end{cases}
\]
的一个基础解系是
(A)\((-2,2,1,0,0)^{\mathrm T},(0,-1,0,-1,1)^{\mathrm T}\)．
(B)\(k_1(-2,2,1,0,0)^{\mathrm T}+k_2(0,-1,0,-1,1)^{\mathrm T}\)．
(C)\((2,-2,1,0,0)^{\mathrm T},(0,1,0,1,1)^{\mathrm T}\)．
(D)\((-2,2,0,0,0)^{\mathrm T},(0,-1,0,-1,0)^{\mathrm T}\)．`, a: "(A)", sol: R`\[
\begin{cases}
x_1+2x_3=0,\\
x_2-2x_3+x_5=0,\\
x_4+x_5=0
\end{cases}
\quad\text{可变形为}\quad
\begin{cases}
x_1=-2x_3,\\
x_2=2x_3-x_5,\\
x_3=x_3,\\
x_4=-x_5,\\
x_5=x_5
\end{cases}
\quad (x_3,x_5 \text{ 为自由未知量}).
\]
\[
\left(
\text{当 }
\begin{cases}
x_3=1,\\
x_5=0
\end{cases}
\text{ 时，}
\begin{cases}
x_1=-2,\\
x_2=2,\\
x_3=1,\\
x_4=0,\\
x_5=0,
\end{cases}
\quad
\text{当 }
\begin{cases}
x_3=0,\\
x_5=1
\end{cases}
\text{ 时，}
\begin{cases}
x_1=0,\\
x_2=-1,\\
x_3=0,\\
x_4=-1,\\
x_5=1.
\end{cases}
\right)
\]
故齐次线性方程组的一个基础解系为
\[
(-2,2,1,0,0)^T,(0,-1,0,-1,1)^T.
\]
故选(A).` },
      { n: "7", q: R`求解非齐次线性方程组
\[
\begin{cases}
x_1+x_2+x_3=3,\\
x_2-x_3=0,\\
-x_1-x_2+2x_3=0,\\
2x_1-x_2+x_3=2.
\end{cases}
\]`, a: "", sol: R`对增广矩阵施行初等行变换：
\[
(A|b)=
\begin{pmatrix}
1&1&1&3\\
0&1&-1&0\\
-1&-1&2&0\\
2&-1&1&2
\end{pmatrix}
\xrightarrow[r_4-2r_1]{r_3+r_1}
\begin{pmatrix}
1&1&1&3\\
0&1&-1&0\\
0&0&3&3\\
0&-3&-1&-4
\end{pmatrix}
\]
\[
\xrightarrow{r_4+3r_2}
\begin{pmatrix}
1&1&1&3\\
0&1&-1&0\\
0&0&3&3\\
0&0&-4&-4
\end{pmatrix}
\xrightarrow[r_4+4r_3]{r_3\div3}
\begin{pmatrix}
1&1&1&3\\
0&1&-1&0\\
0&0&1&1\\
0&0&0&0
\end{pmatrix}
\]
\[
\xrightarrow[\substack{c_2-c_1\\c_3-c_1\\c_4-2c_1}]{r_2+r_3}
\begin{pmatrix}
1&0&0&1\\
0&1&0&1\\
0&0&1&1\\
0&0&0&0
\end{pmatrix}
\]
\(r(A)=r(A|b)=3\)，故方程组有唯一解：
\[
\boldsymbol{x}=
\begin{pmatrix}
1\\
1\\
1
\end{pmatrix}.
\]` },
      { n: "8", q: R`求解非齐次线性方程组
\[
\begin{cases}
x_1+4x_3=8,\\
2x_2-5x_3+x_4=-10,\\
x_1+x_2-x_3+x_4=-2.
\end{cases}
\]`, a: "", sol: R`\[
(A|b)=
\begin{pmatrix}
1&0&4&0&8\\
0&2&-5&1&-10\\
1&1&-1&1&-2
\end{pmatrix}
\xrightarrow{r_3-r_1}
\begin{pmatrix}
1&0&4&0&8\\
0&2&-5&1&-10\\
0&1&-5&1&-10
\end{pmatrix}
\]
\[
\xrightarrow[r_3-r_2]{r_2-r_3}
\begin{pmatrix}
1&0&4&0&8\\
0&1&0&0&0\\
0&0&-5&1&-10
\end{pmatrix}
\xrightarrow[r_1-4r_3]{-\frac{1}{5}r_3}
\begin{pmatrix}
1&0&0&\frac{4}{5}&0\\
0&1&0&0&0\\
0&0&1&-\frac{1}{5}&2
\end{pmatrix}
\]
由 \(r(A)=r(A|b)=3<4\)，故方程组有无穷多解.
由
\[
\begin{cases}
x_1+\frac{4}{5}x_4=0,\\
x_2=0,\\
x_3-\frac{1}{5}x_4=2
\end{cases}
\quad\text{得}\quad
\begin{cases}
x_1=-\frac{4}{5}x_4,\\
x_2=0,\\
x_3=\frac{1}{5}x_4+2,\\
x_4=x_4,
\end{cases}
\]
其中 \(x_4\) 为自由未知量，
所以方程组的通解为
\[
\boldsymbol{x}=k
\begin{pmatrix}
-4\\
0\\
1\\
5
\end{pmatrix}
+
\begin{pmatrix}
0\\
0\\
2\\
0
\end{pmatrix}
,k\in\mathbf{R}.
\]` },
      { n: "9", q: R`求解齐次线性方程组
\[
\begin{cases}
x_1+2x_2-x_3=0,\\
2x_1+4x_2+7x_3=0.
\end{cases}
\]`, a: "", sol: R`对方程组的系数矩阵施行初等行变换，得
\[
A=
\begin{pmatrix}
1&2&-1\\
2&4&7
\end{pmatrix}
\to
\begin{pmatrix}
1&2&-1\\
0&0&9
\end{pmatrix}
\to
\begin{pmatrix}
1&2&0\\
0&0&1
\end{pmatrix},
\]
由 \(r(A)=2\)，故方程组有非零解，由
\[
\begin{cases}
x_1+2x_2=0,\\
x_3=0
\end{cases}
\]
知该方程组的通解为
\[
\boldsymbol{x}=k
\begin{pmatrix}
-2\\
1\\
0
\end{pmatrix}
,k\in\mathbf{R}.
\]` },
      { n: "10", q: R`讨论 \(\lambda\) 满足什么条件时，方程组
\[
\begin{cases}
\lambda x_1+x_2+x_3=0,\\
x_1+\lambda x_2+x_3=0,\\
x_1+x_2+x_3=0
\end{cases}
\]
只有零解．`, a: "", sol: R`对方程组的系数矩阵施行初等行变换，得
\[
\begin{pmatrix}
\lambda&1&1\\
1&\lambda&1\\
1&1&1
\end{pmatrix}
\to
\begin{pmatrix}
1&1&1\\
1&\lambda&1\\
\lambda&1&1
\end{pmatrix}
\to
\begin{pmatrix}
1&1&1\\
0&\lambda-1&0\\
0&1-\lambda&1-\lambda
\end{pmatrix}
\to
\begin{pmatrix}
1&1&1\\
0&\lambda-1&0\\
0&0&1-\lambda
\end{pmatrix},
\]
由方程组只有零解，知 \(r(A)=3\)，从而 \(\lambda\neq1\)，即仅当 \(\lambda\neq1\) 时方程组只有零解.` },
      { n: "11", q: R`求齐次线性方程组
\[
\begin{cases}
3x_1+2x_2-5x_3+4x_4=0,\\
3x_1-x_2+4x_3-5x_4=0,\\
3x_1+5x_2-14x_3+13x_4=0
\end{cases}
\]
的一个基础解系及通解．`, a: "", sol: R`对方程组的系数矩阵进行初等行变换，得
\[
\begin{pmatrix}
3&2&-5&4\\
3&-1&4&-5\\
3&5&-14&13
\end{pmatrix}
\to
\begin{pmatrix}
3&2&-5&4\\
0&-3&9&-9\\
0&0&0&0
\end{pmatrix}
\to
\begin{pmatrix}
1&0&\frac{1}{3}&-\frac{2}{3}\\
0&1&-3&3\\
0&0&0&0
\end{pmatrix},
\]
一个基础解系为 \(\boldsymbol{\xi}_1=\left(-\frac{1}{3},3,1,0\right)^T,\boldsymbol{\xi}_2=\left(\frac{2}{3},-3,0,1\right)^T\)，
所求方程组的通解为
\[
\boldsymbol{x}=k_1\boldsymbol{\xi}_1+k_2\boldsymbol{\xi}_2, k_1,k_2\in\mathbf{R}.
\]` },
      { n: "12", q: R`应用线性方程组解的结构理论，求线性方程组
\[
\begin{cases}
x_1-x_2+2x_3+4x_4=5,\\
-2x_1+2x_2-4x_3-5x_4=-4
\end{cases}
\]
的通解．`, a: "", sol: R`对方程组的增广矩阵进行初等行变换，得
\[
(A|b)=
\begin{pmatrix}
1&-1&2&4&5\\
-2&2&-4&-5&-4
\end{pmatrix}
\to
\begin{pmatrix}
1&-1&2&4&5\\
0&0&0&3&6
\end{pmatrix}
\to
\begin{pmatrix}
1&-1&2&0&-3\\
0&0&0&1&2
\end{pmatrix}
\]
对应齐次线性方程组的一个基础解系为 \(\boldsymbol{\xi}_1=(1,1,0,0)^T,\boldsymbol{\xi}_2=(-2,0,1,0)^T\)，所求方程组的一个特解为 \(\boldsymbol{\eta}=(-3,0,0,2)^T\)，于是所求方程组的通解为
\[
\boldsymbol{x}=k_1\boldsymbol{\xi}_1+k_2\boldsymbol{\xi}_2+\boldsymbol{\eta}, k_1,k_2\in\mathbf{R}.
\]` },
      { n: "13", q: R`求非齐次线性方程组
\[
\begin{cases}
x_1+x_3=4,\\
x_2-x_3+x_4=-3,\\
x_1+x_2+x_4=1,\\
-x_2+3x_3+x_4=-3
\end{cases}
\]
的通解．`, a: "", sol: R`\[
(A|b)=
\begin{pmatrix}
1&0&1&0&4\\
0&1&-1&1&-3\\
1&1&0&1&1\\
0&-1&3&1&-3
\end{pmatrix}
\to
\begin{pmatrix}
1&0&1&0&4\\
0&1&-1&1&-3\\
0&1&-1&1&-3\\
0&-1&3&1&-3
\end{pmatrix}
\]
\[
\to
\begin{pmatrix}
1&0&1&0&4\\
0&1&-1&1&-3\\
0&0&1&1&-3\\
0&0&0&0&0
\end{pmatrix}
\to
\begin{pmatrix}
1&0&0&-1&7\\
0&1&0&2&-6\\
0&0&1&1&-3\\
0&0&0&0&0
\end{pmatrix}.
\]
故方程组的通解为 \(\boldsymbol{x}=k(1,-2,-1,1)^T+(7,-6,-3,0)^T,k\in\mathbf{R}\).` },
      { n: "14", q: R`求线性方程组
\[
\begin{cases}
x_1+2x_2+2x_3+x_4=0,\\
x_1+2x_2+2x_3-x_4=0
\end{cases}
\]
的一个基础解系，并将该基础解系标准正交化．`, a: "", sol: R`对方程组的系数矩阵进行初等行变换，得
\[
A=
\begin{pmatrix}
1&2&2&1\\
1&2&2&-1
\end{pmatrix}
\to
\begin{pmatrix}
1&2&2&0\\
0&0&0&1
\end{pmatrix},
\]
因此基础解系为 \(\boldsymbol{\xi}_1=(-2,1,0,0)^T,\boldsymbol{\xi}_2=(-2,0,1,0)^T\).
将其正交化，得 \(\boldsymbol{\alpha}_1=(-2,1,0,0)^T\)，
\[
\boldsymbol{\alpha}_2=\boldsymbol{\xi}_2-\frac{(\boldsymbol{\xi}_1,\boldsymbol{\xi}_2)}{(\boldsymbol{\xi}_1,\boldsymbol{\xi}_1)}\boldsymbol{\xi}_1=(-2,0,1,0)^T-\frac{4}{5}(-2,1,0,0)^T=-\frac{1}{5}(2,4,-5,0)^T,
\]
再标准化，得
\[
\boldsymbol{e}_1=\frac{\boldsymbol{\alpha}_1}{\|\boldsymbol{\alpha}_1\|}=\frac{1}{\sqrt{5}}(-2,1,0,0)^T,\quad
\boldsymbol{e}_2=\frac{\boldsymbol{\alpha}_2}{\|\boldsymbol{\alpha}_2\|}=\frac{1}{3\sqrt{5}}(2,4,-5,0)^T.
\]` },
      { n: "15", q: R`设 \(\boldsymbol{\eta}\) 是非齐次线性方程组 \(Ax=b\) 的一个解，\(\boldsymbol{\xi}_1,\boldsymbol{\xi}_2,\cdots,\boldsymbol{\xi}_{n-r}\) 是对应的齐次线性方程组的一个基础解系．证明：\(\boldsymbol{\eta},\boldsymbol{\xi}_1,\boldsymbol{\xi}_2,\cdots,\boldsymbol{\xi}_{n-r}\) 线性无关．`, a: "", sol: R`设 \(k\boldsymbol{\eta}+k_1\boldsymbol{\xi}_1+\cdots+k_{n-r}\boldsymbol{\xi}_{n-r}=\boldsymbol{0}\)，则
\[
A(k\boldsymbol{\eta}+k_1\boldsymbol{\xi}_1+\cdots+k_{n-r}\boldsymbol{\xi}_{n-r})=A\boldsymbol{0}=\boldsymbol{0},
\]
即有 \(k\boldsymbol{b}=\boldsymbol{0}\)，由 \(\boldsymbol{b}\neq\boldsymbol{0}\) 知 \(k=0\)，于是
\[
k_1\boldsymbol{\xi}_1+\cdots+k_{n-r}\boldsymbol{\xi}_{n-r}=\boldsymbol{0}.
\]
又由 \(\boldsymbol{\xi}_1,\boldsymbol{\xi}_2,\cdots,\boldsymbol{\xi}_{n-r}\) 线性无关，知 \(k_1=\cdots=k_{n-r}=0\)，即 \(\boldsymbol{\eta},\boldsymbol{\xi}_1,\boldsymbol{\xi}_2,\cdots,\boldsymbol{\xi}_{n-r}\) 线性无关.` },
      { n: "16", q: R`已知齐次线性方程组（Ⅰ）为
\[
\begin{cases}
3x_1-x_2+8x_3+x_4=0,\\
x_1+3x_2-9x_3+7x_4=0,
\end{cases}
\]
及齐次线性方程组（Ⅱ）的基础解系 \(\boldsymbol{\xi}_1=(-3,7,2,0)^{\mathrm T},\boldsymbol{\xi}_2=(-1,-2,0,1)^{\mathrm T}\)，求方程组（Ⅰ）和（Ⅱ）的公共解．`, a: "", sol: R`方程组（Ⅱ）的通解为
\[
k_1\boldsymbol{\xi}_1+k_2\boldsymbol{\xi}_2=(-3k_1-k_2,7k_1-2k_2,2k_1,k_2)^T
\]
其中 \(k_1,k_2\) 为任意常数，将该通解代入方程组（Ⅰ）得
\[
3(-3k_1-k_2)-(7k_1-2k_2)+8\cdot 2k_1+k_2=-16k_1+16k_1-3k_2+3k_2=0,
\]
\[
(-3k_1-k_2)+3(7k_1-2k_2)-9\cdot 2k_1+7k_2=-21k_1+21k_1-7k_2+7k_2=0,
\]
即方程组（Ⅱ）的解均是方程组（Ⅰ）的解，
所以公共解为 \(k_1(-3,7,2,0)^T+k_2(-1,-2,0,1)^T\)（\(k_1,k_2\) 为任意常数）.` },
      { n: "17", q: R`已知齐次线性方程组
\[
(\mathrm I)\begin{cases}
x_1+x_2+ax_4=0,\\
3x_1-x_2-x_3=0,
\end{cases}
\quad\text{与}\quad
(\mathrm{II})\begin{cases}
x_1-3x_2+bx_3+4x_4=0,\\
2x_1-2x_2-x_3+cx_4=0
\end{cases}
\]
同解，求 \(a,b,c\) 的值．`, a: "", sol: R`（Ⅰ）的系数矩阵 \(A=
\begin{pmatrix}
1&1&0&a\\
3&-1&-1&0
\end{pmatrix}
\)，

（Ⅱ）的系数矩阵 \(B=
\begin{pmatrix}
1&-3&b&4\\
2&-2&-1&c
\end{pmatrix}
\),

（Ⅰ）与（Ⅱ）同解 \(\Leftrightarrow r(A)=r(B)=r
\begin{pmatrix}
A\\
B
\end{pmatrix}
\).

显然 \(r(A),r(B)\) 都为 \(2\)，因此 \(r
\begin{pmatrix}
A\\
B
\end{pmatrix}=2
\).

\[
\begin{pmatrix}
A\\
B
\end{pmatrix}=
\begin{pmatrix}
1&1&0&a\\
3&-1&-1&0\\
1&-3&b&4\\
2&-2&-1&c
\end{pmatrix}
\to
\begin{pmatrix}
1&1&0&a\\
0&-4&-1&-3a\\
0&-4&b&4-a\\
0&-4&-1&c-2a
\end{pmatrix}
\to
\begin{pmatrix}
1&1&0&a\\
0&-4&-1&-3a\\
0&0&b+1&4+2a\\
0&0&0&c+a
\end{pmatrix}
\]
所以 \(b+1=0,4+2a=0,a+c=0\).
即 \(a=-2,b=-1,c=2\).

# 第五章 特征值和特征向量` },
    ]
  };
})();
