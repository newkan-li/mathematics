window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["la01_s0"] = {
    id: "la01_s0",
    ch: "第一章 行列式",
    title: "行列式",
    book: "《线性代数辅导讲义》",
    pages: [10, 34],
    img: "assets/img/xiandai",
    content: [
      { p: 10, md: R`### 一、知识结构网络图
- **概念** —— 不同行不同列元素乘积的代数和（共 $n!$ 项）
- **性质**
  - 经转置行列式的值不变
  - 某行有公因数 $k$，可把 $k$ 提到行列式外
  - 某行所有元素都是两个数的和，则可写成两个行列式之和
  - 两行互换行列式变号
  - 某行的 $k$ 倍加至另一行，行列式的值不变
- **展开式**
  - $|A|=\sum\limits_{j=1}^{n}a_{ij}A_{ij}$（按 $i$ 行展开）
  - $|A|=\sum\limits_{i=1}^{n}a_{ij}A_{ij}$（按 $j$ 列展开）
  - —— **代数余子式**
- **计算**
  - 数字型：三角化法、公式法、递推法
  - 抽象型：用行列式性质、用矩阵性质、用特征值 $|A|=\prod\lambda_i$
- **证 $|A|=0$**：$Ax=0$ 有非零解、反证法、$r(A)<n$、$0$ 是 $A$ 的特征值、$|A|=-|A|$
- **应用**：$Ax=0$ 有非零解、伴随矩阵求逆法、线性相关（无关）判定、可逆的证明、克莱姆法则、特征值计算` },
      { p: 11, md: R`【评注】(1) 二、三阶行列式
$$\begin{vmatrix}a&b\\c&d\end{vmatrix}=ad-bc$$
$$\begin{vmatrix}a_1&a_2&a_3\\b_1&b_2&b_3\\c_1&c_2&c_3\end{vmatrix}=a_1b_2c_3+a_2b_3c_1+a_3b_1c_2-a_3b_2c_1-a_2b_1c_3-a_1b_3c_2$$
这样的计算方法对 4 阶及 4 阶以上行列式不适用。
(2) 对行列式的性质 3 要理解正确。例如
$$\begin{vmatrix}a_1+b_1&a_2+b_2&a_3+b_3\\c_1&c_2&c_3\\d_1&d_2&d_3\end{vmatrix}=\begin{vmatrix}a_1&a_2&a_3\\c_1&c_2&c_3\\d_1&d_2&d_3\end{vmatrix}+\begin{vmatrix}b_1&b_2&b_3\\c_1&c_2&c_3\\d_1&d_2&d_3\end{vmatrix}$$
对于 $n$ 阶矩阵 $A=(a_{ij}),B=(b_{ij})$，有 $A+B=(a_{ij}+b_{ij})$，由于行列式 $|A+B|$ 中每一行都是两个数的和，所以若用性质 3 把行列式 $|A+B|$ 拆开，则 $|A+B|$ 应当是 $2^n$ 个 $n$ 阶行列式之和。因此 $|A+B|\neq|A|+|B|$。
特别地，
$$\begin{vmatrix}\lambda-a_{11}&-a_{12}&-a_{13}\\-a_{21}&\lambda-a_{22}&-a_{23}\\-a_{31}&-a_{32}&\lambda-a_{33}\end{vmatrix}=\begin{vmatrix}\lambda-a_{11}&0-a_{12}&0-a_{13}\\0-a_{21}&\lambda-a_{22}&0-a_{23}\\0-a_{31}&0-a_{32}&\lambda-a_{33}\end{vmatrix}$$
$$=\begin{vmatrix}\lambda&0&0\\0&\lambda&0\\0&0&\lambda\end{vmatrix}+\begin{vmatrix}\lambda&-a_{12}&-a_{13}\\0&-a_{22}&-a_{23}\\0&-a_{32}&-a_{33}\end{vmatrix}+\begin{vmatrix}-a_{11}&0&-a_{13}\\-a_{21}&\lambda&-a_{23}\\-a_{31}&0&-a_{33}\end{vmatrix}+\begin{vmatrix}-a_{11}&-a_{12}&0\\-a_{21}&-a_{22}&0\\-a_{31}&-a_{32}&\lambda\end{vmatrix}+\begin{vmatrix}-a_{11}&0&0\\-a_{21}&\lambda&0\\-a_{31}&0&\lambda\end{vmatrix}+\begin{vmatrix}\lambda&-a_{12}&0\\0&-a_{22}&0\\0&-a_{32}&\lambda\end{vmatrix}+\begin{vmatrix}\lambda&0&-a_{13}\\0&\lambda&-a_{23}\\0&0&-a_{33}\end{vmatrix}+\begin{vmatrix}-a_{11}&-a_{12}&-a_{13}\\-a_{21}&-a_{22}&-a_{23}\\-a_{31}&-a_{32}&-a_{33}\end{vmatrix}$$
$$=\lambda^3-(a_{11}+a_{22}+a_{33})\lambda^2+\left(\begin{vmatrix}a_{11}&a_{12}\\a_{21}&a_{22}\end{vmatrix}+\begin{vmatrix}a_{22}&a_{23}\\a_{32}&a_{33}\end{vmatrix}+\begin{vmatrix}a_{11}&a_{13}\\a_{31}&a_{33}\end{vmatrix}\right)\lambda-\begin{vmatrix}a_{11}&a_{12}&a_{13}\\a_{21}&a_{22}&a_{23}\\a_{31}&a_{32}&a_{33}\end{vmatrix}$$
(3) 要会用行列式性质及展开定理计算数字型行列式
(4) 要熟悉抽象型行列式的计算。` },
      { p: 12, md: R`### 二、基本内容与重要结论
#### 基本概念
**定义 1.1** 由 $1,2,\cdots,n$ 组成的有序数组称为一个 $n$ 阶排列。通常用 $j_1j_2\cdots j_n$ 表示 $n$ 阶排列。
**定义 1.2** 一个排列中，如果一个大的数排在小的数之前，就称这两个数构成一个逆序。一个排列的逆序总数称为这个排列的逆序数。用 $\tau(j_1j_2\cdots j_n)$ 表示排列 $j_1j_2\cdots j_n$ 的逆序数。
如果一个排列的逆序数是偶数，则称这个排列为偶排列，否则称为奇排列。
例如，在 5 级排列 25134 中，有逆序 21,51,53,54，因此排列 25134 的逆序数为 4，即 $\tau(25134)=4$。所以排列 25134 是偶排列。
**定义 1.3** $n$ 阶行列式
$$\begin{vmatrix}a_{11}&a_{12}&\cdots&a_{1n}\\a_{21}&a_{22}&\cdots&a_{2n}\\\vdots&\vdots&&\vdots\\a_{n1}&a_{n2}&\cdots&a_{nn}\end{vmatrix}$$
是所有取自不同行不同列的 $n$ 个元素的乘积
$$a_{1j_1}a_{2j_2}\cdots a_{nj_n}$$
的代数和，这里 $j_1j_2\cdots j_n$ 是 $1,2,\cdots,n$ 的一个排列。当 $j_1j_2\cdots j_n$ 是偶排列时，该项的前面带正号；当 $j_1j_2\cdots j_n$ 是奇排列时，该项的前面带负号，即
$$\begin{vmatrix}a_{11}&a_{12}&\cdots&a_{1n}\\a_{21}&a_{22}&\cdots&a_{2n}\\\vdots&\vdots&&\vdots\\a_{n1}&a_{n2}&\cdots&a_{nn}\end{vmatrix}=\sum_{j_1j_2\cdots j_n}(-1)^{\tau(j_1j_2\cdots j_n)}a_{1j_1}a_{2j_2}\cdots a_{nj_n}\tag{1.1}$$
这里 $\sum\limits_{j_1j_2\cdots j_n}$ 表示对所有 $n$ 阶排列求和。式 (1.1) 称为 $n$ 阶行列式的完全展开式。
例如，若已知 $a_{14}a_{2j}a_{31}a_{42}$ 是四阶行列式中的一项，那么根据行列式的定义，它应是不同行不同列元素的乘积。因此必有 $j=3$。
由于 $a_{14}a_{23}a_{31}a_{42}$ 列的逆序数
$$\tau(4312)=3+2+0=5$$
是奇数，所以该项所带符号为负号。
**定义 1.4** 在 $n$ 阶行列式` },
      { p: 13, md: R`$$D=\begin{vmatrix}a_{11}&a_{12}&\cdots&a_{1n}\\a_{21}&a_{22}&\cdots&a_{2n}\\\vdots&\vdots&&\vdots\\a_{n1}&a_{n2}&\cdots&a_{nn}\end{vmatrix}$$
中划去元素 $a_{ij}$ 所在的第 $i$ 行、第 $j$ 列，由剩下的元素按原来的排法构成一个 $n-1$ 阶的行列式
$$\begin{vmatrix}a_{11}&\cdots&a_{1,j-1}&a_{1,j+1}&\cdots&a_{1n}\\\vdots&&\vdots&\vdots&&\vdots\\a_{i-1,1}&\cdots&a_{i-1,j-1}&a_{i-1,j+1}&\cdots&a_{i-1,n}\\a_{i+1,1}&\cdots&a_{i+1,j-1}&a_{i+1,j+1}&\cdots&a_{i+1,n}\\\vdots&&\vdots&\vdots&&\vdots\\a_{n1}&\cdots&a_{n,j-1}&a_{n,j+1}&\cdots&a_{nn}\end{vmatrix}$$
称其为 $a_{ij}$ 的余子式，记为 $M_{ij}$。而称 $(-1)^{i+j}M_{ij}$ 为 $a_{ij}$ 的代数余子式，记为 $A_{ij}$，即
$$A_{ij}=(-1)^{i+j}M_{ij}\tag{1.2}$$
例如，若已知行列式 $\begin{vmatrix}1&2&a\\0&1&-1\\3&4&5\end{vmatrix}$ 的代数余子式 $A_{21}=2$ 即已知
$$(-1)^{2+1}\begin{vmatrix}2&a\\4&5\end{vmatrix}=2$$
从而 $a=3$。
#### 重要定理
**定理 1.1** $n$ 阶行列式
$$D=\begin{vmatrix}a_{11}&a_{12}&\cdots&a_{1n}\\a_{21}&a_{22}&\cdots&a_{2n}\\\vdots&\vdots&&\vdots\\a_{n1}&a_{n2}&\cdots&a_{nn}\end{vmatrix}$$
等于它的任意一行的所有元素与它们各自对应的代数余子式的乘积之和，即
$$D=a_{k1}A_{k1}+a_{k2}A_{k2}+\cdots+a_{kn}A_{kn}\quad(k=1,2,\cdots,n).\tag{1.3}$$
公式 (1.3) 称为行列式按第 $k$ 行的展开公式。
**定理 1.2** $n$ 阶行列式 $D$ 等于它的任意一列的所有元素与它们各自对应的代数余子式的乘积之和，即
$$D=a_{1k}A_{1k}+a_{2k}A_{2k}+\cdots+a_{nk}A_{nk}\quad(k=1,2,\cdots,n).\tag{1.4}$$
公式 (1.4) 称为行列式按第 $k$ 列的展开公式。
**定理 1.3** 设 $n$ 阶行列式` },
      { p: 14, md: R`$$D=\begin{vmatrix}a_{11}&a_{12}&\cdots&a_{1n}\\a_{21}&a_{22}&\cdots&a_{2n}\\\vdots&\vdots&&\vdots\\a_{n1}&a_{n2}&\cdots&a_{nn}\end{vmatrix}$$
元素 $a_{ij}$ 的代数余子式为 $A_{ij}$，当 $i\neq k\ (i,k=1,2,\cdots,n)$ 时，有
$$a_{i1}A_{k1}+a_{i2}A_{k2}+\cdots+a_{in}A_{kn}=0\tag{1.5}$$
当 $j\neq k\ (j,k=1,2,\cdots,n)$ 时，有
$$a_{1j}A_{1k}+a_{2j}A_{2k}+\cdots+a_{nj}A_{nk}=0\tag{1.6}$$
【评注】根据代数余子式的性质 (1.3) 与 (1.5)，对于
矩阵 $A=\begin{bmatrix}a_{11}&a_{12}&a_{13}\\a_{21}&a_{22}&a_{23}\\a_{31}&a_{32}&a_{33}\end{bmatrix}$ 和行列式 $|A|=\begin{vmatrix}a_{11}&a_{12}&a_{13}\\a_{21}&a_{22}&a_{23}\\a_{31}&a_{32}&a_{33}\end{vmatrix}$，我们有
$$\begin{bmatrix}a_{11}&a_{12}&a_{13}\\a_{21}&a_{22}&a_{23}\\a_{31}&a_{32}&a_{33}\end{bmatrix}\begin{bmatrix}A_{11}&A_{21}&A_{31}\\A_{12}&A_{22}&A_{32}\\A_{13}&A_{23}&A_{33}\end{bmatrix}=\begin{bmatrix}|A|&0&0\\0&|A|&0\\0&0&|A|\end{bmatrix}=|A|\begin{bmatrix}1&0&0\\0&1&0\\0&0&1\end{bmatrix}$$
即 $AA^*=|A|E$，类似地由 (1.4) 与 (1.6) 有 $A^*A=|A|E$
$$AA^*=A^*A=|A|E$$
这是一个重要的公式，要会灵活运用，关于伴随矩阵 $A^*$ 要防止两种错误：
(1) 行列式 $|A|$ 中第 $i$ 行元素的代数余子式在伴随矩阵 $A^*$ 中是第 $i$ 列；
(2) 求代数余子式 $A_{ij}$ 时，不要忘记所带正负号 $(-1)^{i+j}$。
#### 主要公式
(1) 上（下）三角行列式的值等于主对角线元素的乘积
$$\begin{vmatrix}a_{11}&a_{12}&\cdots&a_{1n}\\&a_{22}&\cdots&a_{2n}\\&&\ddots&\vdots\\&&&a_{nn}\end{vmatrix}=\begin{vmatrix}a_{11}&&&\\a_{21}&a_{22}&&\\\vdots&\vdots&\ddots&\\a_{n1}&a_{n2}&\cdots&a_{nn}\end{vmatrix}=a_{11}a_{22}\cdots a_{nn}\tag{1.7}$$
(2) 关于副对角线的行列式` },
      { p: 15, md: R`$$\begin{vmatrix}a_{11}&a_{12}&\cdots&a_{1,n-1}&a_{1n}\\a_{21}&a_{22}&\cdots&a_{2,n-1}&0\\\vdots&\vdots&&\vdots&\vdots\\a_{n1}&0&\cdots&0&0\end{vmatrix}=\begin{vmatrix}0&\cdots&0&a_{1n}\\0&\cdots&a_{2,n-1}&a_{2n}\\\vdots&&\vdots&\vdots\\a_{n1}&\cdots&a_{n,n-1}&a_{nn}\end{vmatrix}=(-1)^{\frac{n(n-1)}{2}}a_{1n}a_{2,n-1}\cdots a_{n1}\tag{1.8}$$
(3) 两个特殊的拉普拉斯展开式
$$\begin{vmatrix}a_{11}&\cdots&a_{1n}&c_{11}&\cdots&c_{1m}\\\vdots&&\vdots&\vdots&&\vdots\\a_{n1}&\cdots&a_{nn}&c_{n1}&\cdots&c_{nm}\\0&\cdots&0&b_{11}&\cdots&b_{1m}\\\vdots&&\vdots&\vdots&&\vdots\\0&\cdots&0&b_{m1}&\cdots&b_{mm}\end{vmatrix}=\begin{vmatrix}a_{11}&\cdots&a_{1n}&0&\cdots&0\\\vdots&&\vdots&\vdots&&\vdots\\a_{n1}&\cdots&a_{nn}&0&\cdots&0\\c_{11}&\cdots&c_{n1}&b_{11}&\cdots&b_{1m}\\\vdots&&\vdots&\vdots&&\vdots\\c_{m1}&\cdots&c_{mn}&b_{m1}&\cdots&b_{mm}\end{vmatrix}=\begin{vmatrix}a_{11}&\cdots&a_{1n}\\\vdots&&\vdots\\a_{n1}&\cdots&a_{nn}\end{vmatrix}\cdot\begin{vmatrix}b_{11}&\cdots&b_{1m}\\\vdots&&\vdots\\b_{m1}&\cdots&b_{mm}\end{vmatrix}\tag{1.9}$$
$$\begin{vmatrix}c_{11}&\cdots&c_{1m}&a_{11}&\cdots&a_{1n}\\\vdots&&\vdots&\vdots&&\vdots\\c_{n1}&\cdots&c_{nm}&a_{n1}&\cdots&a_{nn}\\b_{11}&\cdots&b_{1m}&0&\cdots&0\\\vdots&&\vdots&\vdots&&\vdots\\b_{m1}&\cdots&b_{mm}&0&\cdots&0\end{vmatrix}=\begin{vmatrix}0&\cdots&0&a_{11}&\cdots&a_{1n}\\\vdots&&\vdots&\vdots&&\vdots\\0&\cdots&0&a_{n1}&\cdots&a_{nn}\\b_{11}&\cdots&b_{1m}&c_{11}&\cdots&c_{1n}\\\vdots&&\vdots&\vdots&&\vdots\\b_{m1}&\cdots&b_{mm}&c_{m1}&\cdots&c_{mn}\end{vmatrix}=(-1)^{mn}\begin{vmatrix}a_{11}&\cdots&a_{1n}\\\vdots&&\vdots\\a_{n1}&\cdots&a_{nn}\end{vmatrix}\cdot\begin{vmatrix}b_{11}&\cdots&b_{1m}\\\vdots&&\vdots\\b_{m1}&\cdots&b_{mm}\end{vmatrix}\tag{1.10}$$
(4) 范德蒙行列式
$$\begin{vmatrix}1&1&\cdots&1\\x_1&x_2&\cdots&x_n\\x_1^2&x_2^2&\cdots&x_n^2\\\vdots&\vdots&&\vdots\\x_1^{n-1}&x_2^{n-1}&\cdots&x_n^{n-1}\end{vmatrix}=\prod_{1\leqslant j<i\leqslant n}(x_i-x_j)\tag{1.11}$$
(5) 特征多项式
设 $A=(a_{ij})$ 是 3 阶矩阵，则 $A$ 的特征多项式
$$|\lambda E-A|=\lambda^3-(a_{11}+a_{22}+a_{33})\lambda^2+s_2\lambda-|A|\tag{1.12}$$
其中 $s_2=\begin{vmatrix}a_{11}&a_{12}\\a_{21}&a_{22}\end{vmatrix}+\begin{vmatrix}a_{11}&a_{13}\\a_{31}&a_{33}\end{vmatrix}+\begin{vmatrix}a_{22}&a_{23}\\a_{32}&a_{33}\end{vmatrix}$` },
      { p: 16, md: R`【评注】设 $A$ 是 $n$ 阶矩阵，$\alpha$ 是 $n$ 维非零列向量，若
$$A\alpha=\lambda\alpha,\ \alpha\neq0$$
则称 $\lambda$ 是矩阵 $A$ 的特征值，$\alpha$ 是矩阵 $A$ 属于特征值 $\lambda$ 的特征向量。
由 $A\alpha=\lambda\alpha\Rightarrow\lambda\alpha-A\alpha=0\Rightarrow(\lambda E-A)\alpha=0$
知 $\alpha$ 是齐次方程组 $(\lambda E-A)x=0$ 的非零解，故系数行列式 $|\lambda E-A|=0$。
关于 (1.12) 的推导请参看 P1 之点评 (2)。
特别地，若秩 $r(A)=1$，由 (1.12) 知特征多项式
$$|\lambda E-A|=\lambda^3-\left(\sum a_{ii}\right)\lambda^2=\left(\lambda-\sum a_{ii}\right)\lambda^2$$
那么，矩阵 $A$ 的特征值是 $\lambda_1=\sum a_{ii},\ \lambda_2=\lambda_3=0$。
【例1.1】（1992,3）设 $A$ 为 $m$ 阶方阵，$B$ 为 $n$ 阶方阵，且 $|A|=a,|B|=b$，$C=\begin{pmatrix}0&A\\B&0\end{pmatrix}$，则 $|C|=$______。
【分析】由拉普拉斯展开式 (1.10)，有
$$|C|=\begin{vmatrix}O&A\\B&O\end{vmatrix}=(-1)^{mn}|A||B|=(-1)^{mn}ab$$
所以应填 $(-1)^{mn}ab$。
【例1.2】（1996,1）四阶行列式
$$\begin{vmatrix}a_1&0&0&b_1\\0&a_2&b_2&0\\0&b_3&a_3&0\\b_4&0&0&a_4\end{vmatrix}$$
的值等于
(A) $a_1a_2a_3a_4-b_1b_2b_3b_4$
(B) $a_1a_2a_3a_4+b_1b_2b_3b_4$
(C) $(a_1a_2-b_1b_2)(a_3a_4-b_3b_4)$
(D) $(a_2a_3-b_2b_3)(a_1a_4-b_1b_4)$
【分析】本题解法较多，较简单的方法是用两列对换，两行对换，把零元素调至行列式的一角，就可用拉普拉斯展开式，例如
$$\begin{vmatrix}a_1&0&0&b_1\\0&a_2&b_2&0\\0&b_3&a_3&0\\b_4&0&0&a_4\end{vmatrix}=-\begin{vmatrix}a_1&b_1&0&0\\0&0&b_2&a_2\\0&0&a_3&b_3\\b_4&a_4&0&0\end{vmatrix}=\begin{vmatrix}a_1&b_1&0&0\\b_4&a_4&0&0\\0&0&a_3&b_3\\0&0&b_2&a_2\end{vmatrix}=\begin{vmatrix}a_1&b_1\\b_4&a_4\end{vmatrix}\begin{vmatrix}a_3&b_3\\b_2&a_2\end{vmatrix}$$
而知应选 (D)。
【例1.3】$\begin{vmatrix}b+c&c+a&a+b\\a&b&c\\a^2&b^2&c^2\end{vmatrix}=$______。
注：(1992,3) 意为本题选自 1992 年数学三真题，下同。` },
      { p: 17, md: R`【分析】把第 2 行加至第 1 行，提取公因式，即为范德蒙行列式
$$\begin{vmatrix}b+c&c+a&a+b\\a&b&c\\a^2&b^2&c^2\end{vmatrix}=\begin{vmatrix}a+b+c&a+b+c&a+b+c\\a&b&c\\a^2&b^2&c^2\end{vmatrix}=(a+b+c)\begin{vmatrix}1&1&1\\a&b&c\\a^2&b^2&c^2\end{vmatrix}=(a+b+c)(b-a)(c-a)(c-b)$$
【例1.4】设 $A$ 是 3 阶矩阵且 $\lambda_1,\lambda_2,\lambda_3$ 是矩阵 $A$ 的 3 个特征值，那么由 (1.12) 有
$$|\lambda E-A|=\lambda^3-(a_{11}+a_{22}+a_{33})\lambda^2+s_2\lambda-|A|=(\lambda-\lambda_1)(\lambda-\lambda_2)(\lambda-\lambda_3)=\lambda^3-(\lambda_1+\lambda_2+\lambda_3)\lambda^2+(\lambda_1\lambda_2+\lambda_2\lambda_3+\lambda_1\lambda_2)\lambda-\lambda_1\lambda_2\lambda_3$$
比较同次方的系数，有
$$|A|=\prod_{i=1}^{3}\lambda_i\text{ 与 }\sum_{i=1}^{3}a_{ii}=\sum_{i=1}^{3}\lambda_i$$
### 方阵的行列式
(1) 若 $A$ 是 $n$ 阶矩阵，$A^{\mathrm T}$ 是 $A$ 的转置矩阵，则 $|A^{\mathrm T}|=|A|$；(1.12)
(2) 若 $A$ 是 $n$ 阶矩阵，则 $|kA|=k^n|A|$；(1.13)
(3) 若 $A,B$ 都是 $n$ 阶矩阵，则 $|AB|=|A||B|$；(1.14)
(4) 若 $A$ 是 $n$ 阶矩阵，则 $|A^*|=|A|^{n-1}$；(1.15)
(5) 若 $A$ 是 $n$ 阶可逆矩阵，则 $|A^{-1}|=|A|^{-1}$；(1.16)
(6) 若 $A$ 是 $n$ 阶矩阵，$\lambda_i\ (i=1,2,\cdots,n)$ 是 $A$ 的特征值，则 $|A|=\prod_{i=1}^{n}\lambda_i$；(1.17)
(7) 若 $A\sim B$，则 $|A|=|B|$。(1.18)
### 克莱姆法则
若线性方程组
$$\begin{cases}a_{11}x_1+a_{12}x_2+\cdots+a_{1n}x_n=b_1\\a_{21}x_1+a_{22}x_2+\cdots+a_{2n}x_n=b_2\\\cdots\quad\cdots\quad\cdots\\a_{n1}x_1+a_{n2}x_2+\cdots+a_{nn}x_n=b_n\end{cases}$$
的系数行列式
$$D=\begin{vmatrix}a_{11}&a_{12}&\cdots&a_{1n}\\a_{21}&a_{22}&\cdots&a_{2n}\\\vdots&\vdots&&\vdots\\a_{n1}&a_{n2}&\cdots&a_{nn}\end{vmatrix}\neq0$$` },
      { p: 18, md: R`则方程组有唯一解
$$x_1=\frac{D_1}{D},x_2=\frac{D_2}{D},\cdots,x_n=\frac{D_n}{D}\tag{1.19}$$
其中
$$D_j=\sum_{i=1}^{n}b_iA_{ij}=\begin{vmatrix}a_{11}&\cdots&a_{1j-1}&b_1&a_{1j+1}&\cdots&a_{1n}\\a_{21}&\cdots&a_{2j-1}&b_2&a_{2j+1}&\cdots&a_{2n}\\\vdots&&\vdots&\vdots&\vdots&&\vdots\\a_{n1}&\cdots&a_{nj-1}&b_n&a_{nj+1}&\cdots&a_{nn}\end{vmatrix}$$
**推论1** 若齐次线性方程组
$$\begin{cases}a_{11}x_1+a_{12}x_2+\cdots+a_{1n}x_n=0\\a_{21}x_1+a_{22}x_2+\cdots+a_{2n}x_n=0\\\cdots\quad\cdots\quad\cdots\\a_{n1}x_1+a_{n2}x_2+\cdots+a_{nn}x_n=0\end{cases}$$
的系数行列式不为 0，则方程组只有零解。
**推论2** 若齐次线性方程组
$$\begin{cases}a_{11}x_1+a_{12}x_2+\cdots+a_{1n}x_n=0\\a_{21}x_1+a_{22}x_2+\cdots+a_{2n}x_n=0\\\cdots\quad\cdots\quad\cdots\quad\cdots\\a_{n1}x_1+a_{n2}x_2+\cdots+a_{nn}x_n=0\end{cases}$$
有非零解，则系数行列式 $|A|=0$。
【例1.5】三元一次方程组
$$\begin{cases}x_1+x_2+x_3=1\\2x_1-x_2+3x_3=4\\4x_1+x_2+9x_3=16\end{cases}$$
的解中，未知数 $x_2$ 的值必为
(A) 1 (B) $\frac{5}{2}$ (C) $\frac{7}{3}$ (D) $\frac{1}{6}$
【分析】因为方程组的系数矩阵行列式是范德蒙行列式，由 (1.11) 有
$$D=\begin{vmatrix}1&1&1\\2&-1&3\\4&1&9\end{vmatrix}=(-1-2)(3-2)(3-(-1))=-12.$$
根据克莱姆法则，$x_2=\frac{D_2}{D}$ 其中
$$D_2=\begin{vmatrix}1&1&1\\2&4&3\\4&16&9\end{vmatrix}=(4-2)(3-2)(3-4)=-2$$
于是 $x_2=\frac{1}{6}$，所以应选 (D)。
【例1.6】齐次线性方程组` },
      { p: 19, md: R`$$\begin{cases}\lambda x_1+x_2+x_3=0\\x_1+\lambda x_2+x_3=0\\\lambda^2x_1+2x_2+\lambda x_3=0\end{cases}$$
有非零解，则 $\lambda=$______。
【分析】$x_1=0,x_2=0,x_3=0$ 必是齐次线性方程组的解，现在方程组又有非零解，说明方程组的解不唯一，那么，根据克莱姆法则必有系数行列式为 0。因为
$$D=\begin{vmatrix}\lambda&1&1\\1&\lambda&1\\\lambda^2&2&\lambda\end{vmatrix}=\begin{vmatrix}\lambda-1&1-\lambda&0\\1&\lambda&1\\\lambda^2&2&\lambda\end{vmatrix}=\begin{vmatrix}\lambda-1&0&0\\1&\lambda+1&1\\\lambda^2&\lambda^2+2&\lambda\end{vmatrix}=(\lambda-1)(\lambda-2)$$
所以，$\lambda$ 为 1 或 2。
### 三、典型例题分析选讲
#### 数字型行列式
【例1.7】（1999,2）记行列式 $\begin{vmatrix}x-2&x-1&x-2&x-3\\2x-2&2x-1&2x-2&2x-3\\3x-3&3x-2&4x-5&3x-5\\4x&4x-3&5x-7&4x-3\end{vmatrix}$ 为 $f(x)$，则方程 $f(x)=0$ 的根的个数为
(A) 1 (B) 2 (C) 3 (D) 4
【分析】同方程 $f(x)=0$ 有几个根，也就是问 $f(x)$ 是 $x$ 的几次多项式。将第 1 列的 $-1$ 倍依次加至其余各列，有
$$f(x)=\begin{vmatrix}x-2&1&0&-1\\2x-2&1&0&-1\\3x-3&1&x-2&-2\\4x&-3&x-7&-3\end{vmatrix}\xrightarrow{(2)+(4)}\begin{vmatrix}x-2&1&0&0\\2x-2&1&0&0\\3x-3&1&x-2&-1\\4x&-3&x-7&-6\end{vmatrix}=\begin{vmatrix}x-2&1\\2x-2&1\end{vmatrix}\begin{vmatrix}x-2&-1\\x-7&-6\end{vmatrix}\qquad(\text{拉普拉斯}(1.9))$$
易见 $f(x)$ 是二次多项式，故应选 (B)。` },
      { p: 20, md: R`【评注】本题难度值 0.55。由于行列式的每一个位置都含有 $x$，若立即展开处理是不妥的，应当先恒等变形消除一些 $x$ 再展开。不要错误地认为这样的 $f(x)$ 一定是 4 次多项式，其实适当选系数可构造出 0 至 4 任一次数的多项式。
【例1.8】计算
$$D=\begin{vmatrix}a_1+x&a_2&a_3&a_4\\-x&x&0&0\\0&-x&x&0\\0&0&-x&x\end{vmatrix}=______.$$
【分析】各列均加至第 1 列，并按第 1 列展开有
$$D=\begin{vmatrix}x+\sum_{i=1}^{4}a_i&a_2&a_3&a_4\\0&x&0&0\\0&-x&x&0\\0&0&-x&x\end{vmatrix}=(x+\sum_{i=1}^{4}a_i)\begin{vmatrix}x&0&0\\-x&x&0\\0&-x&x\end{vmatrix}$$
由 (1.7) 知，$D=x^3(x+\sum_{i=1}^{4}a_i)$。
【例1.9】4 阶行列式
$$D=\begin{vmatrix}a_1&-1&0&0\\a_2&x&-1&0\\a_3&0&x&-1\\a_4&0&0&x\end{vmatrix}=______.$$
【分析】对本题可用逐行相加的技巧，第一行的 $x$ 倍加至第二行，然后第二行的 $x$ 倍加至第三行，如此继续，有
$$D=\begin{vmatrix}a_1&-1&0&0\\a_1x+a_2&0&-1&0\\a_3&0&x&-1\\a_4&0&0&x\end{vmatrix}=\begin{vmatrix}a_1&-1&0&0\\a_1x+a_2&0&-1&0\\a_1x^2+a_2x+a_3&0&0&-1\\a_4&0&0&x\end{vmatrix}=\begin{vmatrix}a_1&-1&0&0\\a_1x+a_2&0&-1&0\\a_1x^2+a_2x+a_3&0&0&-1\\a_1x^3+a_2x^2+a_3x+a_4&0&0&0\end{vmatrix}=(a_1x^3+a_2x^2+a_3x+a_4)(-1)^{4+1}(-1)^3$$` },
      { p: 21, md: R`$$=a_1x^3+a_2x^2+a_3x+a_4$$
【例1.10】4 阶行列式
$$D=\begin{vmatrix}1&1&1&1\\1&2&0&0\\1&0&3&0\\1&0&0&4\end{vmatrix}=______.$$
【分析】对于爪型行列式，将其转化为上（或下）三角行列式。
$$D=2\cdot3\cdot4\begin{vmatrix}1&1&1&1\\\frac{1}{2}&1&0&0\\\frac{1}{3}&0&1&0\\\frac{1}{4}&0&0&1\end{vmatrix}=24\begin{vmatrix}1-\frac{1}{2}-\frac{1}{3}-\frac{1}{4}&0&0&0\\\frac{1}{2}&1&0&0\\\frac{1}{3}&0&1&0\\\frac{1}{4}&0&0&1\end{vmatrix}=24(1-\frac{1}{2}-\frac{1}{3}-\frac{1}{4})=-2.$$
【评注】对于爪型行列式，可用主对角线元素化其为上（下）三角型来计算；对于另一类爪型行列式，可用副对角线元素化其为上（下）三角型来计算。
【例1.11】行列式
$$D_5=\begin{vmatrix}4&3&0&0&0\\1&4&3&0&0\\0&1&4&3&0\\0&0&1&4&3\\0&0&0&1&4\end{vmatrix}$$
的值
(A) 264 (B) 364 (C) $-264$ (D) $-364$
【分析】对于这类三对角线行列式通常可用递推法，例如按第 1 列展开，有
$$D_5=4\begin{vmatrix}4&3&0&0\\1&4&3&0\\0&1&4&3\\0&0&1&4\end{vmatrix}-\begin{vmatrix}3&0&0&0\\1&4&3&0\\0&1&4&3\\0&0&1&4\end{vmatrix}=4D_4-3D_3$$
于是
$$D_5-D_4=3(D_4-D_3)=3^2(D_3-D_2)=3^3(D_2-D_1)=3^5$$
那么
$$D_5=D_4+3^5=D_3+3^4+3^5=D_2+3^3+3^4+3^5$$` },
      { p: 22, md: R`$$=D_1+3^2+3^3+3^4+3^5=364.$$
【例1.12】（1997,4）设 $n$ 阶矩阵
$$A=\begin{pmatrix}0&1&1&\cdots&1&1\\1&0&1&\cdots&1&1\\1&1&0&\cdots&1&1\\\cdots&\cdots&\cdots&\cdots&\cdots&\cdots\\1&1&1&\cdots&0&1\\1&1&1&\cdots&1&0\end{pmatrix}$$
则 $|A|=$______。
【分析】把第 $2,3,\cdots,n$ 各行均加至第 1 行，提取公因数 $n-1$ 后，再把第 1 行的 $-1$ 倍分别加至第 $2,3,\cdots,n$ 各行，则有
$$|A|=(n-1)\begin{vmatrix}1&1&1&\cdots&1&1\\0&-1&0&\cdots&0&0\\0&0&-1&\cdots&0&0\\\cdots&\cdots&\cdots&\cdots&\cdots&\cdots\\0&0&0&\cdots&-1&0\\0&0&0&\cdots&0&-1\end{vmatrix}=(-1)^{n-1}(n-1)$$
【评注】如果对特征值熟悉，亦可 $A=B-E$，其中
$$B=\begin{pmatrix}1&1&1&\cdots&1\\1&1&1&\cdots&1\\\cdots&\cdots&\cdots&\cdots&\cdots\\1&1&1&\cdots&1\end{pmatrix}$$
由秩 $r(B)=1$，知 $B$ 的特征值为 $n,0,\cdots,0$，从而矩阵 $A$ 的特征值是 $n-1,-1,-1,\cdots,-1$，据 (1.17)，得 $|A|=(-1)^{n-1}(n-1)$。
【例1.13】计算 $n$ 阶行列式
$$D_n=\begin{vmatrix}1&a_1&0&\cdots&0\\0&1&a_2&\cdots&0\\\vdots&\vdots&\vdots&&\vdots\\0&0&0&\cdots&a_{n-1}\\a_n&0&0&\cdots&1\end{vmatrix}=______.$$
【分析】按第 1 列展开，有
$$D_n=1\cdot(-1)^{1+1}\begin{vmatrix}1&a_2&&\\&1&\ddots&\\&&\ddots&a_{n-1}\\0&&&1\end{vmatrix}+a_n(-1)^{n+1}\begin{vmatrix}a_1&&0\\1&a_2&\\&\ddots&\ddots\\&&1&a_{n-1}\end{vmatrix}$$` },
      { p: 23, md: R`$$=1+(-1)^{n+1}a_1a_2\cdots a_n$$
【例1.14】计算 $n$ 阶行列式
$$D_n=\begin{vmatrix}a&b&b&\cdots&b\\b&a&b&\cdots&b\\b&b&a&\cdots&b\\\vdots&\vdots&\vdots&&\vdots\\b&b&b&\cdots&a\end{vmatrix}$$
【分析】每列元素都是一个 $a$ 与 $n-1$ 个 $b$，故可把每行均加至第一行，提取公因式 $a+(n-1)b$，再化为上三角行列式，即
$$D_n=\begin{vmatrix}a+(n-1)b&a+(n-1)b&a+(n-1)b&\cdots&a+(n-1)b\\b&a&b&\cdots&b\\b&b&a&\cdots&b\\\vdots&\vdots&\vdots&&\vdots\\b&b&b&\cdots&a\end{vmatrix}=[a+(n-1)b]\begin{vmatrix}1&1&1&\cdots&1\\b&a&b&\cdots&b\\b&b&a&\cdots&b\\\vdots&\vdots&\vdots&&\vdots\\b&b&b&\cdots&a\end{vmatrix}$$
$$=[a+(n-1)b]\begin{vmatrix}1&1&1&\cdots&1\\0&a-b&0&\cdots&0\\0&0&a-b&\cdots&0\\\vdots&\vdots&\vdots&&\vdots\\0&0&0&\cdots&a-b\end{vmatrix}=[a+(n-1)b](a-b)^{n-1}$$
#### 含参数行列式
【例1.15】若 $\begin{vmatrix}\lambda-3&1&-1\\1&\lambda-5&1\\-1&1&\lambda-3\end{vmatrix}=0$，则 $\lambda=$______。
【分析】这是 $\lambda$ 的三次方程，对于三次方程尽力用因式分解法求其根。
$$\begin{vmatrix}\lambda-3&1&-1\\1&\lambda-5&1\\-1&1&\lambda-3\end{vmatrix}=\begin{vmatrix}\lambda-2&0&2-\lambda\\1&\lambda-5&1\\-1&1&\lambda-3\end{vmatrix}=\begin{vmatrix}\lambda-2&0&0\\1&\lambda-5&2\\-1&1&\lambda-4\end{vmatrix}=(\lambda-2)\begin{vmatrix}\lambda-5&2\\1&\lambda-4\end{vmatrix}=(\lambda-2)(\lambda-3)(\lambda-6)$$` },
      { p: 24, md: R`所以 $\lambda$ 为 2,3 和 6。
本题的解法很多，例如
$$\begin{vmatrix}\lambda-3&1&-1\\1&\lambda-5&1\\-1&1&\lambda-3\end{vmatrix}=\begin{vmatrix}\lambda-3&\lambda-3&\lambda-3\\1&\lambda-5&1\\-1&1&\lambda-3\end{vmatrix}=\begin{vmatrix}\lambda-3&0&0\\1&\lambda-6&0\\-1&2&\lambda-2\end{vmatrix}=(\lambda-3)(\lambda-6)(\lambda-2)$$
【评注】对于特征多项式应两行（或列）加加减减，至多是三行（或列）的加加减减找出 $\lambda-a$ 的公因式，然后再解一个二次方程，就可求出矩阵 $A$ 的三个特征值，这一类行列式的计算要掌握好。
【例1.16】若 $\begin{vmatrix}\lambda-3&-2&2\\k&\lambda+1&-k\\-4&-2&\lambda+3\end{vmatrix}=0$，则 $\lambda=$______。
【分析】把第 3 列加至第 1 列，第 1 列有公因式 $\lambda-1$。
$$\begin{vmatrix}\lambda-3&-2&2\\k&\lambda+1&-k\\-4&-2&\lambda+3\end{vmatrix}=\begin{vmatrix}\lambda-1&-2&2\\0&\lambda+1&-k\\\lambda-1&-2&\lambda+3\end{vmatrix}=\begin{vmatrix}\lambda-1&-2&2\\0&\lambda+1&-k\\0&0&\lambda+1\end{vmatrix}=(\lambda-1)(\lambda+1)^2=0$$
所以 $\lambda$ 为 $1,-1,-1$。
【例1.17】若 $\begin{vmatrix}\lambda-a&-1&-1\\-1&\lambda-a&1\\-1&1&\lambda-a\end{vmatrix}=0$，则 $\lambda=$______。
【分析】把第二行加至第一行，第一行有公因式 $\lambda-a-1$
$$\begin{vmatrix}\lambda-a&-1&-1\\-1&\lambda-a&1\\-1&1&\lambda-a\end{vmatrix}=\begin{vmatrix}\lambda-a-1&\lambda-a-1&0\\-1&\lambda-a&1\\-1&1&\lambda-a\end{vmatrix}=\begin{vmatrix}\lambda-a-1&0&0\\-1&\lambda-a+1&1\\-1&2&\lambda-a\end{vmatrix}=(\lambda-a-1)\begin{vmatrix}\lambda-a+1&1\\2&\lambda-a\end{vmatrix}=(\lambda-a-1)^2(\lambda-a+2)$$
所以 $\lambda$ 为 $a+1,a+1,a-2$。` },
      { p: 25, md: R`【评注】例 1.16 与例 1.17 分别是数学四在 1999 年与 2001 年解答题中所出现的行列式，前者特征值与参数 $k$ 无关，后者特征值与参数 $a$ 有关，应当会计算这些含参数的行列式。
#### 抽象行列式
【例1.18】设 $A,B$ 均为 $n$ 阶矩阵，$|A|=2$，$|B|=-3$，则 $|2A^*B^T|=$______。
【分析】由于 $|kA|=k^n|A|$，$|AB|=|A||B|$，$|A^*|=|A|^{n-1}$，$|A^T|=|A|$，故
$$|2A^*B^T|=2^n|A^*B^T|=2^n|A^*||B^T|=2^n|A|^{n-1}|B|=-3\cdot2^{2n-1}$$
【例1.19】设 $A,B$ 均为 $n$ 阶矩阵，$|A|=2$，$|B|=-3$，则 $|A^{-1}B^*-A^*B^{-1}|=$______。
【分析】由于 $|A+B|$ 没有运算公式，对这一类行列式通常应当用矩阵性质恒等变形将其化为乘积的形式。
因为 $A^{-1}=\frac{A^*}{|A|}$ 或 $A^*=|A|A^{-1}$，所以本题有两种置换方法
$$|A^{-1}B^*-A^*B^{-1}|=|A^{-1}(-3B^{-1})-(2A^{-1})B^{-1}|=|-5A^{-1}B^{-1}|=(-5)^n|A^{-1}||B^{-1}|=(-1)^{n+1}\frac{5^n}{6}$$
$$|A^{-1}B^*-A^*B^{-1}|=\left|\left(\frac{1}{2}A^*\right)B^*-A^*\left(-\frac{1}{3}B^*\right)\right|=\left|\frac{5}{6}A^*B^*\right|=\left(\frac{5}{6}\right)^n|A^*||B^*|=\left(\frac{5}{6}\right)^n\cdot2^{n-1}(-3)^{n-1}=(-1)^{n-1}\frac{5^n}{6}$$
【例1.20】设矩阵 $A=\begin{pmatrix}2&1&0\\1&2&0\\0&0&1\end{pmatrix}$ 矩阵 $B$ 满足 $A^*BA=4E-3BA$，其中 $E$ 为单位矩阵，$A^*$ 是 $A$ 的伴随矩阵，则 $|B|=$______。
【分析】由于 $AA^*=|A|E$，易知本题 $|A|=3$，那么，对已知矩阵方程左乘 $A$，右乘 $A^{-1}$ 得
$$3B=4E-3AB$$
即有 $3(E+A)B=4E$。两边取行列式，有
$$3^3|E+A|\cdot|B|=4^3\text{ 又 }|E+A|=\begin{vmatrix}3&1&0\\1&3&0\\0&0&2\end{vmatrix}=16$$` },
      { p: 26, md: R`故 $|B|=\frac{4}{27}$。
【例1.21】已知 $\alpha_1,\alpha_2,\alpha_3,\beta,\gamma$ 均为 4 维列向量，若 4 阶行列式 $|\alpha_1\ \alpha_2\ \alpha_3\ \gamma|=a$，$|\beta+\gamma\ \alpha_1\ \alpha_2\ \alpha_3|=b$，那么 4 阶行列式 $|2\beta\ \alpha_3\ \alpha_2\ \alpha_1|=$
(A) $2a-b$ (B) $2b-a$ (C) $-2a-2b$ (D) $-2a+2b$
【分析】利用行列式性质，有
$$|2\beta\ \alpha_3\ \alpha_2\ \alpha_1|=2|\beta\ \alpha_3\ \alpha_2\ \alpha_1|$$
由于
$$|\beta+\gamma\ \alpha_1\ \alpha_2\ \alpha_3|=|\beta\ \alpha_1\ \alpha_2\ \alpha_3|+|\gamma\ \alpha_1\ \alpha_2\ \alpha_3|=-|\beta\ \alpha_3\ \alpha_2\ \alpha_1|-|\alpha_1\ \alpha_2\ \alpha_3\ \gamma|$$
所以
$$|\beta\ \alpha_3\ \alpha_2\ \alpha_1|=-|\beta+\gamma\ \alpha_1\ \alpha_2\ \alpha_3|-|\alpha_1\ \alpha_2\ \alpha_3\ \gamma|=-a-b$$
故应选 (C)。
【例1.22】已知 $A$ 是 3 阶矩阵，$\alpha_1\ \alpha_2\ \alpha_3$ 是 3 维线性无关的列向量，若 $A\alpha_1=\alpha_1+\alpha_2$，$A\alpha_2=\alpha_2+\alpha_3$，$A\alpha_3=\alpha_3+\alpha_1$，则行列式 $|A|=$______。
【分析】利用分块矩阵，有
$$A(\alpha_1\ \alpha_2\ \alpha_3)=(\alpha_1+\alpha_2,\alpha_2+\alpha_3,\alpha_3+\alpha_1)$$
两边取行列式，并用行列式乘法公式 (1.13)，有
$$|A||\alpha_1\ \alpha_2\ \alpha_3|=|\alpha_1+\alpha_2\ \alpha_2+\alpha_3\ \alpha_3+\alpha_1|=2|\alpha_1+\alpha_2+\alpha_3\ \alpha_2+\alpha_3\ \alpha_3+\alpha_1|=2|\alpha_1+\alpha_2+\alpha_3\ -\alpha_1\ -\alpha_2|=2|\alpha_3\ -\alpha_1\ -\alpha_2|=2|\alpha_3\ \alpha_1\ \alpha_2|=2|\alpha_1\ \alpha_2\ \alpha_3|$$
因为 $\alpha_1,\alpha_2,\alpha_3$ 线性无关，行列式 $|\alpha_1\ \alpha_2\ \alpha_3|\neq0$，从而得 $|A|=2$。
或者，
$$A(\alpha_1\ \alpha_2\ \alpha_3)=(\alpha_1+\alpha_2,\alpha_2+\alpha_3,\alpha_3+\alpha_1)$$
即 $A(\alpha_1\ \alpha_2\ \alpha_3)=(\alpha_1\ \alpha_2\ \alpha_3)\begin{pmatrix}1&0&1\\1&1&0\\0&1&1\end{pmatrix}$ (*)
记 $P=(\alpha_1\ \alpha_2\ \alpha_3)$，则由 $\alpha_1,\alpha_2,\alpha_3$ 线性无关，知 $P$ 是可逆矩阵，从而
$$P^{-1}AP=\begin{pmatrix}1&0&1\\1&1&0\\0&1&1\end{pmatrix}$$
由 (1.18) 知
$$|A|=\begin{vmatrix}1&0&1\\1&1&0\\0&1&1\end{vmatrix}=2$$` },
      { p: 27, md: R`其实由 (*) 式两边取行列式，即可得上式。
【例1.23】若 3 阶矩阵 $A$ 与 $B$ 相似，矩阵 $A$ 的特征值为 $\frac{1}{2},\frac{1}{3},\frac{1}{4}$ 则行列式 $|B^{-1}-E|=$______。
【分析】由 $A\sim B$ 知 $A$ 与 $B$ 有相同的特征值，于是矩阵 $B$ 的特征值是 $\frac{1}{2},\frac{1}{3},\frac{1}{4}$，那么 $B^{-1}$ 的特征值是 2,3,4，从而 $B^{-1}-E$ 的特征值是 1,2,3，于是 $|B^{-1}-E|=1\times2\times3=6$。
或者，由 $A\sim B$ 即 $P^{-1}AP=B$ 知 $P^{-1}A^{-1}P=B^{-1}$，进而 $P^{-1}(A^{-1}-E)P=B^{-1}-E$ 即 $|B^{-1}-E|=|A^{-1}-E|$，又因 $A$ 有 3 个不同的特征值
$$A\sim\Lambda=\begin{pmatrix}\frac{1}{2}&&\\&\frac{1}{3}&\\&&\frac{1}{4}\end{pmatrix}\Rightarrow A^{-1}\sim\begin{pmatrix}2&&\\&3&\\&&4\end{pmatrix}\Rightarrow A^{-1}-E\sim\begin{pmatrix}1&&\\&2&\\&&3\end{pmatrix}$$
从而 $|A^{-1}-E|=\begin{vmatrix}1&&\\&2&\\&&3\end{vmatrix}=6$。故 $|B^{-1}-E|=6$。
若现在看本题有困难可在复习第五章特征值之后再来处理。
【评注】对于抽象型行列式的计算，可能涉及矩阵的恒等变形（如例 1.18—1.20），可能考查行列式的性质（如例 1.21,1.22 解法一），也可能用特征值、相似等处理（如例 1.22 解法二，例 1.23），这一类题目计算量一般不会很大，但涉及知识点多，公式法则多。
#### 矩阵秩的概念
矩阵 $A$ 中非零子式的最高阶数称为矩阵 $A$ 的秩记为 $r(A)$。例如，矩阵
$$A=\begin{pmatrix}1&3&6&-1&1\\0&2&4&0&3\\0&0&0&1&2\end{pmatrix}$$
其中有 3 阶子式
$$\begin{vmatrix}1&3&-1\\0&2&0\\0&0&1\end{vmatrix}\neq0$$
而 $A$ 中又没有 4 阶子式，故 $A$ 中不为零的子式最高是 3 阶，所以秩 $r(A)=3$。
关于矩阵的秩要理解清楚：` },
      { p: 28, md: R`$r(A)=r\Leftrightarrow A$ 中有 $r$ 阶子式不为 0，任何 $r+1$ 阶子式（若还有）必全为 0。
$r(A)<r\Leftrightarrow A$ 中 $r$ 阶子式全为 0
$r(A)\geqslant r\Leftrightarrow A$ 中有 $r$ 阶子式不为 0
特别地，
$r(A)=0\Leftrightarrow A=0$
$A\neq0\Leftrightarrow r(A)\geqslant1$
若 $A$ 是 $n$ 阶矩阵，$r(A)=n\Leftrightarrow|A|\neq0\Leftrightarrow A$ 可逆
$r(A)<n\Leftrightarrow|A|=0\Leftrightarrow A$ 不可逆
若 $A$ 是 $m\times n$ 矩阵，则 $r(A)\leqslant\min(m,n)$
#### 关于 $|A|=0$
【例1.24】设 $A$ 是 $n$ 阶非 0 矩阵，满足 $A^2=A$，且 $A\neq E$，证明行列式 $|A|=0$。
【证法一】（反证法）若 $|A|\neq0$，那么 $A$ 可逆，用 $A^{-1}$ 左乘 $A^2=A$ 的两端，得
$$A=A^{-1}A^2=A^{-1}A=E$$
与 $A\neq E$ 矛盾，故 $|A|=0$
【证法二】（用秩）据已知有 $A(A-E)=0$，那么
$$r(A)+r(A-E)\leqslant n$$
因为 $A\neq E$，即 $A-E\neq0$，那么秩 $r(A-E)\geqslant1$ 从而秩 $r(A)<n$，故 $|A|=0$。
【证法三】（用 $Ax=0$ 有非零解）据已知有 $A(A-E)=0$，即 $A-E$ 的列向量是齐次方程组 $Ax=0$ 的解，又因 $A-E\neq0$，所以 $Ax=0$ 有非零解，从而 $|A|=0$。
【评注】$AB=0$ 是考研题中一个常见的已知条件，对于 $AB=0$ 应当有两种思路：
设 $A$ 是 $m\times n$ 矩阵，$B$ 是 $n\times s$ 矩阵，若 $AB=0$，则
(1) $B$ 的列向量是齐次方程组 $Ax=0$ 的解
(2) $r(A)+r(B)\leqslant n$
【例1.25】设 $A=E-\zeta\zeta^T$，其中 $E$ 为 3 阶单位矩阵，$\zeta$ 为 3 维非零列向量，$\zeta^T$ 是 $\zeta$ 的转置，若 $\zeta^T\zeta=1$，证明 $|A|=0$（1996,1 改写）。
【证法一】（用特征值）由于 $\zeta^T\zeta=1$，且 $\zeta\neq0$，有
$$A\zeta=(E-\zeta\zeta^T)\zeta=\zeta-\zeta(\zeta^T\zeta)=\zeta-\zeta=0\zeta$$
按定义知 $\lambda=0$ 是矩阵 $A$ 的特征值（$\zeta$ 是属于 $\lambda=0$ 的特征向量），所以 $|A|=0$。
【证法二】（用特征值）因为 $\zeta$ 是 3 维非零列向量，故 $\zeta\zeta^T$ 是秩为 1 的三阶矩阵，据 (1.12) 有
$$|\lambda E-\zeta\zeta^T|=\lambda^3-\lambda^2=0$$
即矩阵 $\zeta\zeta^T$ 的特征值是 1,0,0，那么矩阵 $A=E-\zeta\zeta^T$ 的特征值是 0,1,1。所以 $|A|=0$。` },
      { p: 29, md: R`【评注】本题的证法很多，你还能用别的方法吗？如果对证法二有困难，可在复习完特征值之后再来看这种解法。
【例1.26】设 $A$ 为 $n$ 阶矩阵，满足 $AA^T=E$（$E$ 为 $n$ 阶单位矩阵，$A^T$ 是 $A$ 的转置矩阵），$|A|<0$，证明 $|A+E|=0$。
【证】因为
$$|A+E|=|A+AA^T|=|A(E+A^T)|=|A(E+A)^T|=|A||E+A|$$
所以 $(1-|A|)|A+E|=0$
又因 $|A|<0$ 于是 $1-|A|>0$
故必有 $|A+E|=0$
【例1.27】（1994,1）设 $A$ 为 $n$ 阶非零矩阵，$A^*$ 是 $A$ 的伴随矩阵，$A^T$ 是 $A$ 的转置矩阵，当 $A^*=A^T$ 时，证明 $|A|\neq0$。
【证】由于 $A^*=A^T$，即
$$\begin{pmatrix}A_{11}&A_{21}&\cdots&A_{n1}\\A_{12}&A_{22}&\cdots&A_{n2}\\\vdots&\vdots&&\vdots\\A_{1n}&A_{2n}&\cdots&A_{nn}\end{pmatrix}=\begin{pmatrix}a_{11}&a_{21}&\cdots&a_{n1}\\a_{12}&a_{22}&\cdots&a_{n2}\\\vdots&\vdots&&\vdots\\a_{1n}&a_{2n}&\cdots&a_{nn}\end{pmatrix}$$
即 $A_{ij}=a_{ij}\ (i,j=1,2,\cdots,n)$
因为 $A\neq0$，不妨设 $a_{ij}\neq0$，那么用按行展开公式 (1.3)，有
$$|A|=a_{i1}A_{i1}+a_{i2}A_{i2}+\cdots+a_{in}A_{in}=a_{i1}^2+a_{i2}^2+\cdots+a_{in}^2>0$$
故 $|A|\neq0$
#### 代数余子式求和
【例1.28】设 $|A|=\begin{vmatrix}1&2&3&4\\2&3&4&1\\3&4&1&2\\4&1&2&3\end{vmatrix}$
则 (1) $A_{12}+2A_{22}+3A_{32}+4A_{42}=$______；
(2) $A_{31}+2A_{32}+A_{34}=$______。
【分析】(1) 由于 $a_{11}=1,a_{21}=2,a_{31}=3,a_{41}=4$，据 (1.6) 立即有
$$A_{12}+2A_{22}+3A_{32}+4A_{42}=a_{11}A_{12}+a_{21}A_{22}+a_{31}A_{32}+a_{41}A_{42}=0$$
(2) 因为 $A_{ij}$ 与元素 $a_{ij}$ 的大小无关，可构造一个行列式（用 $A_{3j}$ 的系数置换 $|A|$ 第 3 行的元素），即
$$|B|=\begin{vmatrix}1&2&3&4\\2&3&4&1\\1&2&0&1\\4&1&2&3\end{vmatrix}$$` },
      { p: 30, md: R`则行列式 $|A|$ 与 $|B|$ 第三行元素的代数余子式是一样的，一方面，对 $|B|$ 按第三行展开（用 (1.3)）有
$$|B|=A_{31}+2A_{32}+A_{34}$$
另一方面，对行列式 $|B|$ 恒等变形，有
$$|B|=\begin{vmatrix}1&2&3&4\\2&3&4&1\\1&2&0&1\\4&1&2&3\end{vmatrix}=\begin{vmatrix}1&2&3&4\\2&3&4&1\\0&0&-3&-3\\4&1&2&3\end{vmatrix}=\begin{vmatrix}1&2&3&1\\2&3&4&-3\\0&0&-3&0\\4&1&2&1\end{vmatrix}=-3\begin{vmatrix}1&2&1\\2&3&-3\\4&1&1\end{vmatrix}=-3\begin{vmatrix}1&0&0\\2&-1&-5\\4&-1&-3\end{vmatrix}=96$$
所以，$A_{31}+2A_{32}+A_{34}=96$。
【例1.29】（2001,4）设行列式
$$D=\begin{vmatrix}3&0&4&0\\2&2&2&2\\0&-7&0&0\\5&3&-2&2\end{vmatrix}$$
则第 4 行各元素余子式之和的值为______。
【分析】本题主要考查余子式的概念及三阶行列式的计算，所谓 $a_{ij}$ 的余子式 $M_{ij}$，就是把行列式 $|A|$ 中划去 $a_{ij}$ 所在的第 $i$ 行与第 $j$ 列后所得到的 $n-1$ 阶行列式，根据余子式的定义，即求
$$\begin{vmatrix}0&4&0\\2&2&2\\-7&0&0\end{vmatrix}+\begin{vmatrix}3&4&0\\2&2&2\\0&0&0\end{vmatrix}+\begin{vmatrix}3&0&0\\2&2&2\\0&-7&0\end{vmatrix}+\begin{vmatrix}3&0&4\\2&2&2\\0&-7&0\end{vmatrix}=-7\cdot8+0+3\cdot14+(-7)(-1)^{3+2}(-2)=-28$$
或者，转换为代数余子式来求解，即
$$M_{41}+M_{42}+M_{43}+M_{44}=-A_{41}+A_{42}-A_{43}+A_{44}=\begin{vmatrix}3&0&4&0\\2&2&2&2\\0&-7&0&0\\-1&1&-1&1\end{vmatrix}=(-7)(-1)^{3+2}\begin{vmatrix}3&4&0\\2&2&2\\-1&-1&1\end{vmatrix}=-28.$$
【评注】本题难度值仅为 0.2，是一个值得考生思考的问题，复习要全面，概念要清晰，计算要准确，如若求第 4 行元素代数余子式的和，则有
$$A_{41}+A_{42}+A_{43}+A_{44}=\frac{1}{2}(2A_{41}+2A_{42}+2A_{43}+2A_{44})=\frac{1}{2}(a_{21}A_{41}+a_{22}A_{42}+a_{23}A_{43}+a_{24}A_{44})=0$$` }
    ],
    quiz: [
      { q: R`$n$ 阶行列式的完全展开式共有多少项？`, options: [R`$n$ 项`, R`$n!$ 项`, R`$2^n$ 项`, R`$n^2$ 项`], answer: 1, explain: R`取自不同行不同列的元素乘积共有 $n!$ 项。` },
      { q: R`排列 25134 的逆序数是`, options: [R`$2$`, R`$3$`, R`$4$`, R`$5$`], answer: 2, explain: R`逆序为 $21,51,53,54$，共 $4$ 个。` },
      { q: R`下列等式正确的是`, options: [R`$|A+B|=|A|+|B|$`, R`$|A+B|\neq|A|+|B|$`, R`$|kA|=k|A|$`, R`$|A^*|=|A|^n$`], answer: 1, explain: R`$|kA|=k^n|A|$，$|A^*|=|A|^{n-1}$，一般 $|A+B|\neq|A|+|B|$。` },
      { q: R`设 $A$ 为 $n$ 阶矩阵，$|kA|=$`, options: [R`$k|A|$`, R`$k^n|A|$`, R`$k^{n-1}|A|$`, R`$|A|$`], answer: 1, explain: R`每一行提出一个 $k$，共 $n$ 行。` },
      { q: R`设 $A,B$ 为 $n$ 阶矩阵，则 $|AB|=$`, options: [R`$|A|+|B|$`, R`$|A||B|$`, R`$|A||B|^{-1}$`, R`$|BA|^{-1}$`], answer: 1, explain: R`$|AB|=|A||B|$。` },
      { q: R`$n$ 阶矩阵 $A$ 可逆的充要条件是`, options: [R`$|A|=0$`, R`$|A|\neq0$`, R`$r(A)<n$`, R`$A^*=0$`], answer: 1, explain: R`$r(A)=n\Leftrightarrow|A|\neq0\Leftrightarrow A$ 可逆。` },
      { q: R`若齐次线性方程组 $Ax=0$ 有非零解，则`, options: [R`$|A|\neq0$`, R`$|A|=0$`, R`$r(A)=n$`, R`$A=E$`], answer: 1, explain: R`有非零解 $\Leftrightarrow$ 系数行列式 $|A|=0$。` },
      { q: R`设 $AB=0$，$A$ 是 $m\times n$ 矩阵，$B$ 是 $n\times s$ 矩阵，则`, options: [R`$r(A)+r(B)\leqslant n$`, R`$r(A)+r(B)\geqslant n$`, R`$r(A)+r(B)=n$`, R`$r(A)r(B)=0$`], answer: 0, explain: R`$B$ 的列向量是 $Ax=0$ 的解，故 $r(A)+r(B)\leqslant n$。` },
      { q: R`$|A|=0$ 的必要条件是`, options: [R`$A$ 的两行成比例`, R`$A$ 中必有一行为其余各行的线性组合`, R`$A$ 中有一列全为 $0$`, R`$A$ 中任一列均为其余各列的线性组合`], answer: 1, explain: R`只要有一行是其余各行的线性组合即可保证 $|A|=0$，且为必要条件。` },
      { q: R`计算 $n$ 阶行列式 $\begin{vmatrix}a&b&\cdots&b\\b&a&\cdots&b\\\vdots&\vdots&&\vdots\\b&b&\cdots&a\end{vmatrix}=$`, options: [R`$[a+(n-1)b](a-b)^{n-1}$`, R`$[a-(n-1)b](a+b)^{n-1}$`, R`$a^n-b^n$`, R`$(a-b)^n$`], answer: 0, explain: R`各行加至第一行，提取公因式后化为上三角。` }
    ]
  };
})();
