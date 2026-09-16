window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["la02_s0"] = {
    id: "la02_s0",
    ch: "第二章 矩阵",
    title: "矩阵",
    book: "《线性代数辅导讲义》",
    pages: [35, 62],
    img: "assets/img/xiandai",
    content: [
      { p: 35, md: R`### 一、知识结构网络图
**矩阵**
- **概念** —— $m\times n$ 个数排成的 $m$ 行 $n$ 列的表格
- **运算** —— $\begin{cases}A+B,kA\\AB\\A^{\mathrm T}\end{cases}\longrightarrow$ 方阵的幂
- **初等变换**
  - **初等矩阵** —— 初等矩阵 $P$ 左乘 $A$ 所得 $PA$ 就是 $A$ 作了一次与 $P$ 同样的行变换
    $$E_i^{-1}(k)=E_i\left(\frac{1}{k}\right),\ E_{ij}^{-1}=E_{ij},\ E_{ij}^{-1}(k)=E_{ij}(-k)$$
  - **等价** —— $A\overset{r}{\longrightarrow}\cdots\overset{r}{\longrightarrow}B\iff PAQ=B,\ P,Q$ 可逆
- **逆矩阵**
  - **求法**
    - 用定义：$(A\vdots E)\overset{r}{\longrightarrow}(E\vdots A^{-1})$
    - 用伴随：$A^{-1}=\frac{1}{|A|}A^*$
    - 用分块：$\begin{pmatrix}A&0\\0&B\end{pmatrix}^{-1}=\begin{pmatrix}A^{-1}&0\\0&B^{-1}\end{pmatrix},\ \begin{pmatrix}0&A\\B&0\end{pmatrix}^{-1}=\begin{pmatrix}0&B^{-1}\\A^{-1}&0\end{pmatrix}$
  - **证法** —— $|A|\ne0$；$r(A)=n$；特征值；反证法
- **秩**
  - **计算** —— 初等变换法、定义法
  - **性质** —— $r(AB)\leqslant\min[r(A),r(B)]$；如 $A$ 可逆，则 $r(AB)=r(B)$
- **特殊矩阵**
  - **伴随矩阵** $A^*=\begin{pmatrix}A_{11}&A_{21}&\cdots&A_{n1}\\A_{12}&A_{22}&\cdots&A_{n2}\\\vdots&\vdots&&\vdots\\A_{1n}&A_{2n}&\cdots&A_{nn}\end{pmatrix},\ AA^*=A^*A=|A|E$
  - **对称矩阵** $A^{\mathrm T}=A\iff a_{ij}=a_{ji}$
  - **反对称矩阵** $A^{\mathrm T}=-A\iff a_{ii}=0,a_{ij}=-a_{ji}$
  - **正交矩阵** $AA^{\mathrm T}=A^{\mathrm T}A=E\iff A^{-1}=A^{\mathrm T}$
  - **对角矩阵** $\Lambda_1\Lambda_2=\Lambda_2\Lambda_1$，
    $$\begin{pmatrix}a_1&&&\\&a_2&&\\&&\ddots&\\&&&a_n\end{pmatrix}^n=\begin{pmatrix}a_1^n&&&\\&a_2^n&&\\&&\ddots&\\&&&a_n^n\end{pmatrix}$$
    $$\begin{pmatrix}a_1&&\\&a_2&\\&&a_3\end{pmatrix}^{-1}=\begin{pmatrix}\frac{1}{a_1}&&\\&\frac{1}{a_2}&\\&&\frac{1}{a_3}\end{pmatrix},\ \text{其中 }a_1,a_2,a_3\text{ 非 }0.$$` },
      { p: 36, md: R`【评注】矩阵是线性代数的核心内容，它贯穿线性代数的始终。复习时要引起考生足够的重视，概念要清晰，符号要习惯，运算要正确、迅速、简捷。
(1) 理解矩阵的概念，了解几种特殊矩阵（单位矩阵、对角矩阵、数量矩阵、三角矩阵、对称矩阵、反对称矩阵、正交矩阵）的定义及性质。
(2) 掌握矩阵运算（加、减、数乘、乘法）及其运算规律，掌握矩阵转置的性质，掌握行列式乘法公式，了解方阵的幂。
(3) 理解逆矩阵的概念，掌握矩阵可逆的充要条件，掌握可逆矩阵的性质，理解伴随矩阵的概念，会用伴随矩阵求矩阵的逆。
(4) 掌握矩阵的初等变换，了解初等矩阵的性质及矩阵等价的概念，理解矩阵秩的要领，掌握用初等变换求矩阵的逆和秩。
(5) 了解分块矩阵的概念，掌握分块矩阵的运算。
### 二、基本内容与重要结论
#### 基本概念
**定义 2.1** $m\times n$ 个数排成如下 $m$ 行 $n$ 列的一个表格
$$\begin{pmatrix}a_{11}&a_{12}&\cdots&a_{1n}\\a_{21}&a_{22}&\cdots&a_{2n}\\\vdots&\vdots&&\vdots\\a_{m1}&a_{m2}&\cdots&a_{mn}\end{pmatrix}$$
称为是一个 $m\times n$ 矩阵，当 $m=n$ 时，矩阵 $A$ 称为 $n$ 阶矩阵或叫 $n$ 阶方阵。
如果一个矩阵的所有元素都是 $0$，即
$$\begin{pmatrix}0&0&\cdots&0\\0&0&\cdots&0\\\vdots&\vdots&&\vdots\\0&0&\cdots&0\end{pmatrix}$$
则称这个矩阵是零矩阵，可简记为 $\mathbf{0}$。
两个矩阵 $A=(a_{ij})_{m\times n}$，$B=(b_{ij})_{s\times t}$，如果 $m=s,n=t$，则称 $A$ 与 $B$ 是同型矩阵。
两个同型矩阵 $A=(a_{ij})_{m\times n}$，$B=(b_{ij})_{m\times n}$，如果对应的元素都相等，即 $a_{ij}=b_{ij}\ (i=1,2,\cdots,m,\ j=1,2,\cdots,n)$，则称矩阵 $A$ 与 $B$ 相等，记作 $A=B$。
**定义 2.2** 设 $A=(a_{ij})$，$B=(b_{ij})$ 是两个 $m\times n$ 矩阵，则 $m\times n$ 矩阵
$$C=(c_{ij})=(a_{ij}+b_{ij})$$
称为矩阵 $A$ 与 $B$ 的和，记为 $A+B=C$。` },
      { p: 37, md: R`**定义 2.3** 设 $A=(a_{ij})$ 是 $m\times n$ 矩阵，$k$ 是一个常数，则 $m\times n$ 矩阵 $(ka_{ij})$ 称为数 $k$ 与矩阵 $A$ 的数乘，记为 $kA$。
**定义 2.4** $n$ 阶方阵 $A=(a_{ij})_{n\times n}$ 的元素所构成的行列式
$$\begin{vmatrix}a_{11}&a_{12}&\cdots&a_{1n}\\a_{21}&a_{22}&\cdots&a_{2n}\\\vdots&\vdots&&\vdots\\a_{n1}&a_{n2}&\cdots&a_{nn}\end{vmatrix}$$
称为 $n$ 阶矩阵 $A$ 的行列式，记成 $|A|$ 或 $\det A$。如果 $A$ 是 $n$ 阶矩阵，则
$$|kA|=k^n|A|.$$
【评注】矩阵是表格，行列式是数，这两个概念要区分清楚，当矩阵 $A\ne B$ 时，行列式 $|A|$ 与 $|B|$ 是否相等是不清楚的。例如
$$A=\begin{pmatrix}1&0\\0&2\end{pmatrix},\ B=\begin{pmatrix}2&0\\0&1\end{pmatrix}$$
虽 $A\ne B$，但 $|A|=|B|$。特别地，当 $A\ne0$ 时，行列式 $|A|$ 是否为 $0$ 是不清楚的。例如
$$A=\begin{pmatrix}1&1\\0&0\end{pmatrix}\text{ 或 }A=\begin{pmatrix}1&2\\3&4\end{pmatrix}$$
虽均有 $A\ne0$，但行列式 $|A|$ 前者为 $0$，后者不为 $0$。
**定义 2.5** 设 $A=(a_{ij})$ 是 $m\times n$ 矩阵，$B=(b_{ij})$ 是 $n\times s$ 矩阵，那么 $m\times s$ 矩阵 $C=(c_{ij})$，其中
$$c_{ij}=a_{i1}b_{1j}+a_{i2}b_{2j}+\cdots+a_{in}b_{nj}=\sum_{k=1}^{n}a_{ik}b_{kj}\qquad(2.2)$$
称为 $A$ 与 $B$ 的乘积，记为 $C=AB$。
矩阵的乘法可图示如下：
$$\begin{pmatrix}\cdots\cdots\cdots\cdots\cdots\cdots\cdots\\a_{i1}\quad a_{i2}\quad\cdots\quad a_{in}\\\cdots\cdots\cdots\cdots\cdots\cdots\cdots\end{pmatrix}\begin{pmatrix}\vdots&b_{1j}&\vdots\\\vdots&b_{2j}&\vdots\\\vdots&\vdots&\vdots\\\vdots&b_{nj}&\vdots\end{pmatrix}=\begin{pmatrix}\vdots&\vdots&\vdots\\\cdots&c_{ij}&\cdots\\\vdots&\vdots&\vdots\end{pmatrix}$$
$i$ 指示行，$j$ 指示列；三个矩阵的规模依次为 $m\times n$、$n\times s$、$m\times s$。
【评注】矩阵的乘法运算是重要的、基本的、也是一些考生不重视常出错的地方。首先，要会作乘法运算，例如` },
      { p: 38, md: R`设 $\boldsymbol{\alpha}=\begin{pmatrix}1\\2\\3\end{pmatrix}$，$\boldsymbol{\beta}=\begin{pmatrix}2\\0\\1\end{pmatrix}$，则
$$\boldsymbol{\alpha}\boldsymbol{\beta}^{\mathrm T}=\begin{pmatrix}1\\2\\3\end{pmatrix}(2\quad0\quad1)=\begin{pmatrix}2&0&1\\4&0&2\\6&0&3\end{pmatrix}$$
$$\boldsymbol{\beta}^{\mathrm T}\boldsymbol{\alpha}=(2\quad0\quad1)\begin{pmatrix}1\\2\\3\end{pmatrix}=5$$
前者 $\boldsymbol{\alpha}\boldsymbol{\beta}^{\mathrm T}$ 是 $3$ 阶矩阵，后者 $\boldsymbol{\beta}^{\mathrm T}\boldsymbol{\alpha}$ 是一个数，这里的运算要正确，符号不应混淆。
其次，关于矩阵乘法要注意三个方面：
(1) 矩阵乘法没有交换律，$AB\ne BA$
例如，$A=\begin{pmatrix}0&1\\1&0\end{pmatrix},B=\begin{pmatrix}1&2\\3&4\end{pmatrix}$，则
$$AB=\begin{pmatrix}0&1\\1&0\end{pmatrix}\begin{pmatrix}1&2\\3&4\end{pmatrix}=\begin{pmatrix}3&4\\1&2\end{pmatrix}$$
$$BA=\begin{pmatrix}1&2\\3&4\end{pmatrix}\begin{pmatrix}0&1\\1&0\end{pmatrix}=\begin{pmatrix}2&1\\4&3\end{pmatrix}$$
特别地
$$(A+B)^2=(A+B)(A+B)=A^2+AB+BA+B^2\ne A^2+2AB+B^2$$
但 $(A+E)^2=A^2+2A+E$
(2) 由 $AB=0\not\Rightarrow A=0$ 或 $B=0$
例如
$$A=\begin{pmatrix}1&1\\2&2\end{pmatrix},B=\begin{pmatrix}1&-3\\-1&3\end{pmatrix}\text{ 虽 }A\ne0,B\ne0,$$
但
$$AB=\begin{pmatrix}1&1\\2&2\end{pmatrix}\begin{pmatrix}1&-3\\-1&3\end{pmatrix}=\begin{pmatrix}0&0\\0&0\end{pmatrix}=\mathbf{0}$$
在这里，矩阵运算与数的运算不要混淆。
(3) 由 $AB=AC,A\ne0\not\Rightarrow B=C$
例如，$A=\begin{pmatrix}1&2\\3&6\end{pmatrix},B=\begin{pmatrix}3&4\\-1&2\end{pmatrix},C=\begin{pmatrix}1&2\\0&3\end{pmatrix}$
有 $AB=\begin{pmatrix}1&2\\3&6\end{pmatrix}\begin{pmatrix}3&4\\-1&2\end{pmatrix}=\begin{pmatrix}1&8\\3&24\end{pmatrix}=\begin{pmatrix}1&2\\3&6\end{pmatrix}\begin{pmatrix}1&2\\0&3\end{pmatrix}=AC$
显然 $B\ne C$。
但若 $A$ 是 $m\times n$ 矩阵，秩 $r(A)=n$，则由 $AB=AC$ 可知 $B=C$。这是因为：
$AB=AC\Rightarrow A(B-C)=0\Rightarrow r(A)+r(B-C)\leqslant n\Rightarrow r(B-C)=0$，故 $B-C=0$，即 $B=C$。` },
      { p: 39, md: R`**定义 2.6** 把矩阵 $A$ 的行换成同序数的列得到一个新矩阵，称为矩阵 $A$ 的转置矩阵，记为 $A^{\mathrm T}$。
**定义 2.7** 设 $A=(a_{ij})$ 是 $n$ 阶矩阵，行列式 $|A|$ 的各个元素 $a_{ij}$ 的代数余子式所构成的如下的矩阵
$$A^*=\begin{pmatrix}A_{11}&A_{21}&\cdots&A_{n1}\\A_{12}&A_{22}&\cdots&A_{n2}\\\vdots&\vdots&&\vdots\\A_{1n}&A_{2n}&\cdots&A_{nn}\end{pmatrix}$$
称为矩阵 $A$ 的伴随矩阵。
【评注】设 $A=\begin{pmatrix}a&b\\c&d\end{pmatrix}$，由行列式 $\begin{vmatrix}a&b\\c&d\end{vmatrix}$ 得到代数余子式 $A_{11}=d,A_{12}=-c,A_{21}=-b,A_{22}=a$，所以矩阵 $A$ 的伴随矩阵
$$A^*=\begin{pmatrix}A_{11}&A_{21}\\A_{12}&A_{22}\end{pmatrix}=\begin{pmatrix}d&-b\\-c&a\end{pmatrix}.$$
对于 $2$ 阶矩阵，用主对角线对接，副对角线变号即可求出伴随矩阵。
例如，$\begin{pmatrix}1&-1\\2&3\end{pmatrix}^*=\begin{pmatrix}3&1\\-2&1\end{pmatrix},\begin{pmatrix}0&1\\1&0\end{pmatrix}^*=\begin{pmatrix}0&-1\\-1&0\end{pmatrix}$
**定义 2.8** 设 $A$ 是 $n$ 阶矩阵，如果存在 $n$ 阶矩阵 $B$ 使得
$$AB=BA=E(\text{单位矩阵})\qquad(2.3)$$
成立，则称 $A$ 是可逆矩阵或非奇异矩阵，$B$ 是 $A$ 的逆矩阵。
例如，$\begin{pmatrix}1&3\\1&2\end{pmatrix}\begin{pmatrix}-2&3\\1&-1\end{pmatrix}=\begin{pmatrix}-2&3\\1&-1\end{pmatrix}\begin{pmatrix}1&3\\1&2\end{pmatrix}=\begin{pmatrix}1&0\\0&1\end{pmatrix}$
所以矩阵 $\begin{pmatrix}1&3\\1&2\end{pmatrix}$ 可逆，且 $\begin{pmatrix}1&3\\1&2\end{pmatrix}^{-1}=\begin{pmatrix}-2&3\\1&-1\end{pmatrix}$
**定义 2.9** 对 $m\times n$ 矩阵，下列三种变换
(1) 用非零常数 $k$ 乘矩阵的某一行（列）；
(2) 互换矩阵某两行（列）的位置；
(3) 把某行（列）的 $k$ 倍加至另一行（列）；
称为是矩阵的初等行（列）变换，统称为矩阵的初等变换。
**定义 2.10** 如果矩阵 $A$ 经过有限次初等变换变成矩阵 $B$，则称矩阵 $A$ 与矩阵 $B$ 等价，记作 $A\cong B$。
**定义 2.11** 单位矩阵 $E$ 经过一次初等变换所得到的矩阵称为初等矩阵。
例如，$3$ 阶单位矩阵作如下初等变换
$$E_{1,2}=\begin{pmatrix}0&1&0\\1&0&0\\0&0&1\end{pmatrix}\quad E\text{ 一，二两行互换（或一，二两列互换）}$$` },
      { p: 40, md: R`$$E_{12}(3)=\begin{pmatrix}1&0&0\\3&1&0\\0&0&1\end{pmatrix}\quad E\text{ 第一行的 }3\text{ 倍加至第二行（或第二列的 }3\text{ 倍加至第一列）}$$
$$E_3(-2)=\begin{pmatrix}1&0&0\\0&1&0\\0&0&-2\end{pmatrix}\quad E\text{ 第三行乘以 }-2\text{（或第三列乘以 }-2\text{）}$$
均是初等矩阵。
**定义 2.12** 在 $m\times n$ 矩阵 $A$ 中，任取 $k$ 行与 $k$ 列 $(k\leqslant m,k\leqslant n)$，位于这些行与列的交叉点上的 $k^2$ 个元素按其在原来矩阵 $A$ 中的次序可构成一个 $k$ 阶行列式，称其为矩阵 $A$ 的一个 $k$ 阶子式。
**定义 2.13** 矩阵 $A$ 的非零子式的最高阶数称为矩阵 $A$ 的秩，记为 $r(A)$。零矩阵的秩规定为 $0$。
#### 重要定理
**定理 2.1**（行列式乘法公式）设 $A,B$ 是 $n$ 阶方阵，则
$$|AB|=|A|\cdot|B|.\qquad(2.4)$$
**定理 2.2** 若 $A$ 是可逆矩阵，则矩阵 $A$ 的逆矩阵唯一，记为 $A^{-1}$。
**定理 2.3** $n$ 阶矩阵 $A$ 可逆 $\iff|A|\ne0$
$\iff r(A)=n$
$\iff A=P_1P_2\cdots P_s,P_i$ 是初等矩阵
$\iff0$ 不是矩阵 $A$ 的特征值
**定理 2.4** 若 $A$ 是 $n$ 阶矩阵，且满足 $AB=E$，则必有 $BA=E$。
【评注】按可逆矩阵定义，若 $AB=BA=E$，则称 $A$ 是可逆矩阵，$B$ 是 $A$ 的逆矩阵。由定理 2.4，$AB=E$ 可保证 $BA=E$，因而用定义法求 $A^{-1}$ 时我们的工作量可减少一半。只需检验 $AB=E$ 就可以了。但要注意的是定理 2.4 的条件 $A$ 是 $n$ 阶矩阵不能忽略。显然，对于
$$AB=\begin{pmatrix}1&0&3\\0&1&5\end{pmatrix}\begin{pmatrix}1&0\\0&1\\0&0\end{pmatrix}=\begin{pmatrix}1&0\\0&1\end{pmatrix}$$
我们并不能说 $A$ 可逆。
【例2.1】（2001,1）设矩阵 $A$ 满足 $A^2+A-4E=0$，其中 $E$ 为单位矩阵，则 $(A-E)^{-1}=$______。
【分析】因为矩阵 $A$ 的元素没有具体给出，因此用伴随矩阵，用初等行变换求逆的路均堵塞。应当考虑用定义法。
由于` },
      { p: 41, md: R`$$(A-E)(A+2E)-2E=A^2+A-4E=0$$
故
$$(A-E)(A+2E)=2E$$
得
$$(A-E)\cdot\frac{1}{2}(A+2E)=E$$
按定义及定理 2.4 知
$$(A-E)^{-1}=\frac{1}{2}(A+2E)$$
【评注】本题考查用定义法求逆，是常规题，但难度为 $0.57$，即有 $43\%$ 的考生不会用定义法求逆。这是值得考生思考的。复习是否全面、仔细？
【例2.2】（2003,4）设 $A,B$ 均为三阶矩阵，$E$ 是三阶单位矩阵，已知 $AB=2A+B,B=\begin{pmatrix}2&0&2\\0&4&0\\2&0&2\end{pmatrix}$，则 $(A-E)^{-1}=$______。
【分析】由已知，有
$$AB-B-2A+2E=2E$$
即
$$(A-E)B-2(A-E)=2E$$
即
$$(A-E)(B-2E)=2E$$
按可逆定义，知
$$(A-E)^{-1}=\frac{1}{2}(B-2E)=\begin{pmatrix}0&0&1\\0&1&0\\1&0&0\end{pmatrix}$$
**定理 2.5** 用初等矩阵 $P$ 左（右）乘矩阵 $A$，其结果 $PA$（$AP$）就是对矩阵 $A$ 作一次相应的行（列）初等变换。
**定理 2.6** 初等矩阵均可逆，且其逆是同类型的初等矩阵。即
$$E_i^{-1}(k)=E_i\left(\frac{1}{k}\right),E_{ij}^{-1}(k)=E_{ij}(-k),E_{ij}^{-1}=E_{ij}.$$
**定理 2.7** 矩阵 $A$ 与 $B$ 等价的充分必要条件是存在可逆矩阵 $P$ 与 $Q$，使 $PAQ=B$。
【例2.3】设
$$A=\begin{pmatrix}a_{11}&a_{12}&a_{13}\\a_{21}&a_{22}&a_{23}\\a_{31}&a_{32}&a_{33}\end{pmatrix},\quad B=\begin{pmatrix}a_{11}&a_{13}&a_{12}\\a_{21}&a_{23}&a_{22}\\a_{31}+2a_{11}&a_{33}+2a_{13}&a_{32}+2a_{12}\end{pmatrix}$$
$$P_1=\begin{pmatrix}1&0&0\\0&0&1\\0&1&0\end{pmatrix}\qquad P_2=\begin{pmatrix}1&0&2\\0&1&0\\0&0&1\end{pmatrix},\quad P_3=\begin{pmatrix}1&0&0\\0&1&0\\2&0&1\end{pmatrix}$$
则 $B=$
(A) $P_3AP_2$ (B) $P_2AP_3$ (C) $P_3AP_1$ (D) $P_2AP_1$` },
      { p: 42, md: R`【分析】把矩阵 $A$ 的第一行的 2 倍加至第三行，然后再二、三列两列对换即得到矩阵 $B$，初等行变换用 $P_3$ 来实现，初等列变换用 $P_1$ 来完成，故 $B=P_3AP_1$。应选 (C)。
【例2.4】与矩阵 $A=\begin{pmatrix}1&2&0\\2&4&0\\0&0&9\end{pmatrix}$ 等价的矩阵是
(A) $\begin{pmatrix}1&0&0\\0&0&0\\0&0&0\end{pmatrix}$ (B) $\begin{pmatrix}1&0&0\\0&2&0\\0&0&0\end{pmatrix}$ (C) $\begin{pmatrix}1&0&0\\0&2&0\\0&0&3\end{pmatrix}$ (D) 以上都不正确
【分析】显然行列式 $|A|=0$，但矩阵 $A$ 中有 2 阶子式非 0，故秩 $r(A)=2$。所以与 $A$ 等价的矩阵是 (B)。
其实，把矩阵 $A$ 第 1 行的 $-2$ 倍加至第 2 行，再把第 1 列的 $-2$ 倍加至第 2 行，然后 2、3 两行对换后再 2、3 两列对换，最后第 2 行乘以 $\frac{2}{9}$ 即得 (B)。
$$\begin{pmatrix}1&2&0\\2&4&0\\0&0&9\end{pmatrix}\to\begin{pmatrix}1&2&0\\0&0&0\\0&0&9\end{pmatrix}\to\begin{pmatrix}1&0&0\\0&0&0\\0&0&9\end{pmatrix}\to\begin{pmatrix}1&0&0\\0&0&9\\0&0&0\end{pmatrix}\to\begin{pmatrix}1&0&0\\0&9&0\\0&0&0\end{pmatrix}\to\begin{pmatrix}1&0&0\\0&2&0\\0&0&0\end{pmatrix}$$
请你用初等矩阵把上述初等变换描述清楚。
**定理 2.8** 秩 $r(A)=A$ 的列秩 $=A$ 的行秩
**定理 2.9** 经初等变换矩阵的秩不变
#### 主要公式
(1) 转置
$(A^T)^T=A$；$(A+B)^T=A^T+B^T$；$(kA)^T=kA^T$；$(AB)^T=B^TA^T$。(2.5)
(2) 可逆
$(A^{-1})^{-1}=A$；$(kA)^{-1}=\frac{1}{k}A^{-1}\ (k\neq0)$；$(AB)^{-1}=B^{-1}A^{-1}$；$(A^n)^{-1}=(A^{-1})^n$；$(A^{-1})^T=(A^T)^{-1}$；$|A^{-1}|=\frac{1}{|A|}$；$A^{-1}=\frac{1}{|A|}A^*$。(2.6)` },
      { p: 43, md: R`(3) 伴随
$AA^*=A^*A=|A|E$；$A^*=|A|A^{-1}$；$|A^*|=|A|^{n-1}$；$(A^*)^{-1}=(A^{-1})^*=\frac{1}{|A|}A$；$(A^*)^T=(A^T)^*$；$r(A^*)=\begin{cases}n&\text{如果 }r(A)=n,\\1&\text{如果 }r(A)=n-1,\\0&\text{如果 }r(A)<n-1.\end{cases}$(2.7)
(4) 秩
$r(A)=r(A^T)$；当 $k\neq0$ 时，$r(kA)=r(A)$；$r(A+B)\leqslant r(A)+r(B)$；$r(AB)\leqslant\min(r(A),r(B))$；若 $A$ 可逆，则 $r(AB)=r(B)$，$r(BA)=r(B)$；若 $A$ 是 $m\times n$ 矩阵，$B$ 是 $n\times s$ 矩阵，$AB=0$，则 $r(A)+r(B)\leqslant n$。(2.8)
(5) 分块矩阵
若 $B,C$ 分别是 $m$ 阶与 $s$ 阶矩阵，则
$$\begin{pmatrix}B&0\\0&C\end{pmatrix}^n=\begin{pmatrix}B^n&0\\0&C^n\end{pmatrix}\qquad(2.9)$$
若 $B,C$ 分别是 $m$ 阶，$n$ 阶可逆矩阵，则
$$\begin{pmatrix}B&0\\0&C\end{pmatrix}^{-1}=\begin{pmatrix}B^{-1}&0\\0&C^{-1}\end{pmatrix},\begin{pmatrix}0&B\\C&0\end{pmatrix}^{-1}=\begin{pmatrix}0&C^{-1}\\B^{-1}&0\end{pmatrix}\qquad(2.10)$$
若 $A$ 是 $m\times n$ 矩阵，$B$ 是 $n\times s$ 矩阵且 $AB=0$，对 $B$ 和 $0$ 矩阵按列分块有
$AB=A(B_1,B_2,\cdots,B_s)=(AB_1,AB_2,\cdots,AB_s)=(0,0,\cdots,0)$
$AB_i=0\quad(i=1,2,\cdots,s)$。
即 $B$ 的列向量是齐次方程组 $Ax=0$ 的解。
若 $AB=C$，其中 $A$ 是 $m\times n$ 矩阵，$B$ 是 $n\times s$ 矩阵，则对 $B,C$ 按行分块有
$$\begin{pmatrix}a_{11}&a_{12}&\cdots&a_{1n}\\a_{21}&a_{22}&\cdots&a_{2n}\\\vdots&\vdots&&\vdots\\a_{m1}&a_{m2}&\cdots&a_{mn}\end{pmatrix}\begin{pmatrix}\beta_1\\\beta_2\\\vdots\\\beta_n\end{pmatrix}=\begin{pmatrix}\alpha_1\\\alpha_2\\\vdots\\\alpha_m\end{pmatrix},$$
即
$$\begin{cases}a_{11}\beta_1+a_{12}\beta_2+\cdots+a_{1n}\beta_n=\alpha_1,\\a_{21}\beta_1+a_{22}\beta_2+\cdots+a_{2n}\beta_n=\alpha_2,\\\cdots\cdots\cdots\cdots\cdots\cdots\cdots\cdots\cdots\cdots\cdots\cdots\\a_{m1}\beta_1+a_{m2}\beta_2+\cdots+a_{mn}\beta_n=\alpha_m.\end{cases}$$` },
      { p: 44, md: R`可见 $AB$ 的行向量 $\alpha_1,\alpha_2,\cdots,\alpha_m$ 可由 $B$ 的行向量 $\beta_1,\beta_2,\cdots,\beta_n$ 线性表出，类似地，对矩阵 $A,C$ 按列分块，有
$$(\gamma_1\ \gamma_2\ \cdots\ \gamma_n)\begin{pmatrix}b_{11}&b_{12}&\cdots&b_{1s}\\b_{21}&b_{22}&\cdots&b_{2s}\\\cdots&\cdots&&\cdots\\b_{n1}&b_{n2}&\cdots&b_{ns}\end{pmatrix}=(\delta_1,\delta_2,\cdots,\delta_s)$$
由此得
$$\begin{cases}b_{11}\gamma_1+b_{21}\gamma_2+\cdots+b_{n1}\gamma_n=\delta_1,\\b_{12}\gamma_1+b_{22}\gamma_2+\cdots+b_{n2}\gamma_n=\delta_2,\\\cdots\cdots\cdots\cdots\cdots\cdots\cdots\cdots\cdots\cdots\cdots\cdots\\b_{1s}\gamma_1+b_{2s}\gamma_2+\cdots+b_{ns}\gamma_n=\delta_s,\end{cases}$$
即 $AB$ 的列向量可由 $A$ 的列向量线性表出。
### 三、典型例题分析选讲
#### 矩阵运算
【例2.5】已知 $\alpha=(1\quad2\quad1)^T,\beta=(1\quad\frac{1}{2}\quad0)^T,A=\alpha\beta^T$，则 $A^4=$______（2000,2 节选）。
【分析】因为矩阵乘法有结合律，注意到 $\beta^T\alpha$ 是一个数，这就有
$A^2=(\alpha\beta^T)(\alpha\beta^T)=\alpha(\beta^T\alpha)\beta^T=2\alpha\beta^T=2A$
归纳地，
$$A^4=2^3A=2^3\begin{pmatrix}1\\2\\1\end{pmatrix}(1\quad\frac{1}{2}\quad0)=8\begin{pmatrix}1&\frac{1}{2}&0\\2&1&0\\1&\frac{1}{2}&0\end{pmatrix}=\begin{pmatrix}8&4&0\\16&8&0\\8&4&0\end{pmatrix}$$
【例2.6】已知 $A=\begin{pmatrix}2&4&-6\\1&2&-3\\4&8&-12\end{pmatrix}$，则 $A^n=$______。
【分析】因为 $A=\begin{pmatrix}2\\1\\4\end{pmatrix}(1\quad2\quad-3)$
故 $A^2=\begin{pmatrix}2\\1\\4\end{pmatrix}(1\quad2\quad-3)\begin{pmatrix}2\\1\\4\end{pmatrix}(1\quad2\quad-3)=-8\begin{pmatrix}2\\1\\4\end{pmatrix}(1\quad2\quad-3)$` },
      { p: 45, md: R`即 $A^2=-8A$
归纳地 $A^n=(-8)^{n-1}A$。
【评注】若秩 $r(A)=1$，则 $A$ 可分解为两个矩阵的乘积，有 $A^2=lA$ 之规律，从而 $A^n=l^{n-1}A$。
$$A=\begin{pmatrix}a_1b_1&a_1b_2&a_1b_3\\a_2b_1&a_2b_2&a_2b_3\\a_3b_1&a_3b_2&a_3b_3\end{pmatrix}=\begin{pmatrix}a_1\\a_2\\a_3\end{pmatrix}(b_1\ b_2\ b_3)=\alpha\beta^T$$
那么 $A^2=(\alpha\beta^T)(\alpha\beta^T)=\alpha(\beta^T\alpha)\beta^T=l\alpha\beta^T=lA$，其中 $l=\beta^T\alpha=\alpha^T\beta=a_1b_1+a_2b_2+a_3b_3=\sum a_{ii}$
【例2.7】若 $A=\begin{pmatrix}0&0&0\\2&0&0\\1&3&0\end{pmatrix}$，则 $A^2=$______，$A^3=$______。
【分析】由矩阵乘法，有
$$A^2=\begin{pmatrix}0&0&0\\2&0&0\\1&3&0\end{pmatrix}\begin{pmatrix}0&0&0\\2&0&0\\1&3&0\end{pmatrix}=\begin{pmatrix}0&0&0\\0&0&0\\6&0&0\end{pmatrix}$$
$$A^3=\begin{pmatrix}0&0&0\\0&0&0\\6&0&0\end{pmatrix}\begin{pmatrix}0&0&0\\2&0&0\\1&3&0\end{pmatrix}=\begin{pmatrix}0&0&0\\0&0&0\\0&0&0\end{pmatrix}=0$$
【例2.8】若 $A=\begin{pmatrix}1&2&3\\0&1&4\\0&0&1\end{pmatrix}$，则 $A^n=$______。
【分析】以例 2.7 为背景，本题可把 $A$ 分解为两个矩阵之和，即
$$A=\begin{pmatrix}1&0&0\\0&1&0\\0&0&1\end{pmatrix}+\begin{pmatrix}0&2&3\\0&0&4\\0&0&0\end{pmatrix}=E+B$$
那么
$$A^n=(E+B)^n=E^n+nE^{n-1}B+\frac{n(n-1)}{2}E^{n-2}B^2=\begin{pmatrix}1&0&0\\0&1&0\\0&0&1\end{pmatrix}+n\begin{pmatrix}0&2&3\\0&0&4\\0&0&0\end{pmatrix}+\frac{n(n-1)}{2}\begin{pmatrix}0&0&8\\0&0&0\\0&0&0\end{pmatrix}$$` },
      { p: 46, md: R`$$=\begin{pmatrix}1&2n&4n^2-n\\0&1&4n\\0&0&1\end{pmatrix}$$
【例2.9】设 $A=\begin{pmatrix}3&1&0&0\\0&3&0&0\\0&0&3&9\\0&0&1&3\end{pmatrix}$，则 $A^n=$______。
【分析】由分块矩阵公式 (2.9) $\begin{pmatrix}B&0\\0&C\end{pmatrix}^n=\begin{pmatrix}B^n&0\\0&C^n\end{pmatrix}$，我们只需分别算出 $\begin{pmatrix}3&1\\0&3\end{pmatrix}$ 与 $\begin{pmatrix}3&9\\1&3\end{pmatrix}$ 的 $n$ 次幂。
因为 $\begin{pmatrix}3&1\\0&3\end{pmatrix}=\begin{pmatrix}3&0\\0&3\end{pmatrix}+\begin{pmatrix}0&1\\0&0\end{pmatrix}=3E+B$
故 $\begin{pmatrix}3&1\\0&3\end{pmatrix}^n=(3E+B)^n=(3E)^n+n(3E)^{n-1}B=\begin{pmatrix}3^n&0\\0&3^n\end{pmatrix}+n\cdot3^{n-1}\begin{pmatrix}0&1\\0&0\end{pmatrix}=\begin{pmatrix}3^n&n\cdot3^{n-1}\\0&3^n\end{pmatrix}$
而矩阵 $\begin{pmatrix}3&9\\1&3\end{pmatrix}$ 的秩为 1，有 $\begin{pmatrix}3&9\\1&3\end{pmatrix}^n=6^{n-1}\begin{pmatrix}3&9\\1&3\end{pmatrix}$
从而
$$A^n=\begin{pmatrix}3^n&n\cdot3^{n-1}&0&0\\0&3^n&0&0\\0&0&3\cdot6^{n-1}&9\cdot6^{n-1}\\0&0&6^{n-1}&3\cdot6^{n-1}\end{pmatrix}$$
【例2.10】（2007,1,2,3,4）设矩阵 $A=\begin{pmatrix}0&1&0&0\\0&0&1&0\\0&0&0&1\\0&0&0&0\end{pmatrix}$，则 $A^3$ 的秩为______。
【分析】因为 $A^2=\begin{pmatrix}0&1&0&0\\0&0&1&0\\0&0&0&1\\0&0&0&0\end{pmatrix}\begin{pmatrix}0&1&0&0\\0&0&1&0\\0&0&0&1\\0&0&0&0\end{pmatrix}=\begin{pmatrix}0&0&1&0\\0&0&0&1\\0&0&0&0\\0&0&0&0\end{pmatrix}$，
$A^3=\begin{pmatrix}0&0&1&0\\0&0&0&1\\0&0&0&0\\0&0&0&0\end{pmatrix}\begin{pmatrix}0&1&0&0\\0&0&1&0\\0&0&0&1\\0&0&0&0\end{pmatrix}=\begin{pmatrix}0&0&0&1\\0&0&0&0\\0&0&0&0\\0&0&0&0\end{pmatrix}$
所以秩 $r(A^3)=1$。` },
      { p: 47, md: R`【评注】由例 2.7 知
$$\begin{pmatrix}0&*&*\\0&0&*\\0&0&0\end{pmatrix}^2=\begin{pmatrix}0&0&*\\0&0&0\\0&0&0\end{pmatrix},\begin{pmatrix}0&*&*\\0&0&*\\0&0&0\end{pmatrix}^3=0$$
由本题要了解到
$$\begin{pmatrix}0&*&*&*\\0&0&*&*\\0&0&0&*\\0&0&0&0\end{pmatrix}^2=\begin{pmatrix}0&0&*&*\\0&0&0&*\\0&0&0&0\\0&0&0&0\end{pmatrix},\begin{pmatrix}0&*&*&*\\0&0&*&*\\0&0&0&*\\0&0&0&0\end{pmatrix}^3=\begin{pmatrix}0&0&0&*\\0&0&0&0\\0&0&0&0\\0&0&0&0\end{pmatrix}$$
【例2.11】已知 $A=\begin{pmatrix}2&0&1\\0&3&0\\2&0&2\end{pmatrix},B=\begin{pmatrix}1&0&0\\0&-1&0\\0&0&0\end{pmatrix}$，若 $X$ 满足 $AX+2B=BA+2X$，则 $X^4=$______。
【分析】由矩阵方程，有 $AX-2X=BA-2B$，即 $(A-2E)X=B(A-2E)$。
因为 $A-2E=\begin{pmatrix}0&0&1\\0&1&0\\2&0&0\end{pmatrix}$ 可逆，故 $X=(A-2E)^{-1}B(A-2E)$。
那么 $X^4=(A-2E)^{-1}B^4(A-2E)=\begin{pmatrix}0&0&\frac{1}{2}\\0&1&0\\1&0&0\end{pmatrix}\begin{pmatrix}1&0&0\\0&1&0\\0&0&0\end{pmatrix}\begin{pmatrix}0&0&1\\0&1&0\\2&0&0\end{pmatrix}=\begin{pmatrix}0&0&0\\0&1&0\\0&0&1\end{pmatrix}$
【评注】本题涉及矩阵方程、相似求幂、分块求逆等知识点。
注意，若 $P^{-1}AP=B$，则 $A=PBP^{-1}$，那么 $A^2=(PBP^{-1})(PBP^{-1})=PB(P^{-1}P)BP^{-1}=PB^2P^{-1}$，一般地，$A^n=PB^nP^{-1}$` },
      { p: 48, md: R`另外，$\begin{pmatrix}0&0&a_1\\0&a_2&0\\a_3&0&0\end{pmatrix}^{-1}=\begin{pmatrix}0&0&\frac{1}{a_3}\\0&\frac{1}{a_2}&0\\\frac{1}{a_1}&0&0\end{pmatrix}$ 应熟悉。
【例2.12】（2004,4）设 $A=\begin{pmatrix}0&-1&0\\1&0&0\\0&0&-1\end{pmatrix}$，$B=P^{-1}AP$，其中 $P$ 为 3 阶可逆矩阵，则 $B^{2004}-2A^2=$______。
【分析】由于 $\begin{pmatrix}A&0\\0&B\end{pmatrix}^n=\begin{pmatrix}A^n&0\\0&B^n\end{pmatrix}$，又 $\begin{pmatrix}a_1&&\\&a_2&\\&&a_3\end{pmatrix}^n=\begin{pmatrix}a_1^n&&\\&a_2^n&\\&&a_3^n\end{pmatrix}$，易见 $\begin{pmatrix}0&-1\\1&0\end{pmatrix}^2=\begin{pmatrix}-1&0\\0&-1\end{pmatrix}$，所以 $A^2=\begin{pmatrix}0&-1&0\\1&0&0\\0&0&-1\end{pmatrix}^2=\begin{pmatrix}-1&0&0\\0&-1&0\\0&0&1\end{pmatrix}$。
那么 $A^{2004}=(A^2)^{1002}=E$。
又因 $B=P^{-1}AP$ 有 $B^{2004}=P^{-1}A^{2004}P=P^{-1}EP=E$。
故 $B^{2004}-2A^2=E-2A^2=\begin{pmatrix}3&0&0\\0&3&0\\0&0&-1\end{pmatrix}$。
【例2.13】设某种生物最多存活 30 天，将其分为 3 个年龄组 $[0,10),[10,20),[20,30)$，统计资料表明在 10 天内各年龄组的繁殖率及死亡率如下表
年龄区间　　繁殖率　　死亡率
$[0,10)$　　0　　50%
$[10,20)$　　200%　　75%
$[20,30)$　　150%　　100%
设第 $n$ 个 10 天后各年龄组该生物的个数依次为 $x_n,y_n,z_n$，则 $\begin{pmatrix}x_{n+1}\\y_{n+1}\\z_{n+1}\end{pmatrix}$ 与 $\begin{pmatrix}x_n\\y_n\\z_n\end{pmatrix}$ 的关系式的矩阵形式 $\begin{pmatrix}x_{n+1}\\y_{n+1}\\z_{n+1}\end{pmatrix}=A\begin{pmatrix}x_n\\y_n\\z_n\end{pmatrix}$ 中，$A=$______。
【分析】10 天后 $[0,10)$ 年龄组的生物是当初这期间各年龄组繁殖的总和，而 $[10,20)$ 年龄组的生物是 $[0,10)$ 年龄组中存活下来的，$[20,30)$ 年龄组的生物则是` },
      { p: 49, md: R`$[10,20)$ 年龄组中存活下来的。
第一个年龄组的 $x_n$ 个生物，经过 10 天年龄为 $[10,20)$，由于存活率是 $50\%$，所以 10 天后，第二个年龄组生物个数 $y_{n+1}=\frac{1}{2}x_n$。同理第二个年龄组的 $y_n$ 个生物，经过 10 天年龄为 $[20,30)$，由于存活率是 $25\%$，故 $z_{n+1}=\frac{1}{4}y_n$。而第三个年龄组的 $y_n$ 个生物，经过 10 天全部死亡。
第二个年龄组的 $y_n$ 个生物在这 10 天当中繁殖的新生命有 $2y_n$ 个，其年龄是 $[0,10)$，第三个年龄组的 $z_n$ 个生物在这 10 天中繁殖的新生命有 $\frac{3}{2}z_n$ 个，其年龄是 $[0,10)$，所以 $x_{n+1}=2y_n+\frac{3}{2}z_n$。因此有
$$\begin{cases}x_{n+1}=2y_n+\frac{3}{2}z_n,\\y_{n+1}=\frac{1}{2}x_n,\\z_{n+1}=\frac{1}{4}y_n,\end{cases}$$
用矩阵乘法表示，即
$$\begin{pmatrix}x_{n+1}\\y_{n+1}\\z_{n+1}\end{pmatrix}=\begin{pmatrix}0&2&\frac{3}{2}\\\frac{1}{2}&0&0\\0&\frac{1}{4}&0\end{pmatrix}\begin{pmatrix}x_n\\y_n\\z_n\end{pmatrix},\text{于是 }A=\begin{pmatrix}0&2&\frac{3}{2}\\\frac{1}{2}&0&0\\0&\frac{1}{4}&0\end{pmatrix}.$$
#### 伴随矩阵
【例2.14】设 $A$ 是 $n$ 阶可逆矩阵，$A^*$ 是 $A$ 的伴随矩阵，由于 $AA^*=A^*A=|A|E$，又 $|A|\neq0$，故有
$$A\cdot\frac{A^*}{|A|}=\frac{A^*}{|A|}A=E\Rightarrow A^{-1}=\frac{A^*}{|A|}$$
$$\frac{A}{|A|}\cdot A^*=A^*\cdot\frac{A}{|A|}=E\Rightarrow(A^*)^{-1}=\frac{A}{|A|}$$
【例2.15】（1998,2）设 $A$ 是任一 $n(n\geqslant3)$ 阶方阵，$A^*$ 是其伴随矩阵，又 $k$ 为常数，且 $k\neq0,\pm1$，则必有 $(kA)^*=$ (A) $kA^*$ (B) $k^{n-1}A^*$ (C) $k^nA^*$ (D) $k^{-1}A^*$
【分析】对任何 $n$ 阶矩阵都要成立的关系式，对特殊的 $n$ 阶矩阵自然也要成立，那么当 $A$ 可逆时，由 $A^*=|A|A^{-1}$ 有
$$(kA)^*=|kA|(kA)^{-1}=k^n|A|\cdot\frac{1}{k}A^{-1}=k^{n-1}A^*.$$` },
      { p: 50, md: R`故应选 (B)。
请你用定义法证明，当 $A$ 不可逆时，仍有 $(kA)^*=k^{n-1}A^*$。
【例2.16】（1996,3）设 $n$ 阶矩阵 $A$ 非奇异（$n\geqslant2$），$A^*$ 是 $A$ 的伴随矩阵，则 (A) $(A^*)^*=|A|^{n-1}A$ (B) $(A^*)^*=|A|^{n+1}A$ (C) $(A^*)^*=|A|^{n-2}A$ (D) $(A^*)^*=|A|^{n+2}A$
【分析】因为 $A$ 可逆，由 $A^*=|A|A^{-1}$ 有
$$(A^*)^*=|A^*|(A^*)^{-1}=|A|^{n-1}\cdot\frac{A}{|A|}=|A|^{n-2}A$$
故应选 (C)。
【例2.17】已知 $A=\frac{1}{2}\begin{pmatrix}1&3&0\\2&5&0\\1&-1&2\end{pmatrix}$，则 $(A^{-1})^*=$______。
【分析】若 $A$ 可逆，由 $A^*=|A|A^{-1}$ 有
$$(A^{-1})^*=|A^{-1}|(A^{-1})^{-1}=\frac{A}{|A|}.$$
现在
$$|A|=\frac{1}{8}\begin{vmatrix}1&3&0\\2&5&0\\1&-1&2\end{vmatrix}=-\frac{1}{4}$$
故
$$(A^{-1})^*=\frac{A}{|A|}=-2\begin{pmatrix}1&3&0\\2&5&0\\1&-1&2\end{pmatrix}$$
【评注】由例 2.14 及本题知，当 $A$ 可逆时，$(A^*)^{-1}=(A^{-1})^*=|A|^{-1}A$。
【例2.18】（2002,4）设 $A,B$ 为 $n$ 阶矩阵，$A^*,B^*$ 分别是 $A,B$ 对应的伴随矩阵，分块矩阵 $C=\begin{pmatrix}A&0\\0&B\end{pmatrix}$，则 $C$ 的伴随矩阵 $C^*=$ (A) $\begin{pmatrix}|A|A^*&0\\0&|B|B^*\end{pmatrix}$ (B) $\begin{pmatrix}|B|B^*&0\\0&|A|A^*\end{pmatrix}$ (C) $\begin{pmatrix}|A|B^*&0\\0&|B|A^*\end{pmatrix}$ (D) $\begin{pmatrix}|B|A^*&0\\0&|A|B^*\end{pmatrix}$
【分析】可以类同例 2.15 加强条件，由 $C$ 可逆知
$$C^*=|C|C^{-1}=\begin{vmatrix}A&0\\0&B\end{vmatrix}\begin{pmatrix}A&0\\0&B\end{pmatrix}^{-1}=|A||B|\begin{pmatrix}A^{-1}&0\\0&B^{-1}\end{pmatrix}=\begin{pmatrix}|A||B|A^{-1}&0\\0&|A||B|B^{-1}\end{pmatrix}$$
故应选 (D)。亦可利用伴随矩阵的重要关系式 $CC^*=|C|E=|A||B|E$` },
      { p: 51, md: R`利用观察法
$$\begin{pmatrix}A&0\\0&B\end{pmatrix}\begin{pmatrix}\ ?\ &\ \\\ &\ \end{pmatrix}=\begin{pmatrix}|A||B|E&0\\0&|A||B|E\end{pmatrix}$$
而选 (D)。
【例2.19】设矩阵 $A,B$ 满足 $A^*BA=2BA-4E$，其中 $A=\begin{pmatrix}1&0&0\\0&1&0\\0&0&-2\end{pmatrix}$，$A^*$ 是 $A$ 的伴随矩阵，则 $|B|=$______。
【分析】先化简矩阵方程，左乘 $A$ 右乘 $A^{-1}$ 有
$$A(A^*BA)A^{-1}=A(2BA)A^{-1}-A(4E)A^{-1}$$
根据 $AA^*=|A|E$，及本题中 $|A|=-2$，上式简化为 $AB+B=2E$，即 $(A+E)B=2E$。两边取行列式，得 $|A+E||B|=|2E|=8$，又 $|A+E|=-4$，故 $|B|=-2$。
【例2.20】设 $A$ 是 $n$ 阶矩阵，$A^*$ 是 $A$ 的伴随矩阵，证明：
$$r(A^*)=\begin{cases}n&\text{若 }r(A)=n,\\1&\text{若 }r(A)=n-1,\\0&\text{若 }r(A)<n-1.\end{cases}$$
【证】若秩 $r(A)=n$，则 $|A|\neq0$，由于 $|A^*|=|A|^{n-1}$，故 $|A^*|\neq0$，所以秩 $r(A^*)=n$。
若秩 $r(A)<n-1$，则 $A$ 中所有 $n-1$ 阶子式均为 $0$，即行列式 $|A|$ 的所有代数余子式均为 $0$，即 $A^*=0$，故 $r(A^*)=0$。
若秩 $r(A)=n-1$，则 $|A|=0$ 且 $A$ 中存在 $n-1$ 阶子式不为 $0$。那么，由 $|A|=0$ 有 $AA^*=|A|E=0$，从而 $r(A)+r(A^*)\leqslant n$，得 $r(A^*)\leqslant1$。又因 $A$ 中有 $n-1$ 阶子式非 $0$，知有 $A_{ij}\neq0$，即 $A^*\neq0$，得 $r(A^*)\geqslant1$，故 $r(A^*)=1$。
【例2.21】设 $A$ 是 $n$ 阶可逆矩阵，若矩阵 $A$ 的特征值是 $\lambda$，则伴随矩阵 $A^*$ 的特征值是______。
【分析】设矩阵 $A$ 属于特征值 $\lambda$ 的特征向量是 $\alpha$，即 $A\alpha=\lambda\alpha,\alpha\neq0$。那么 $A^*A\alpha=\lambda A^*\alpha$。由 $A^*A=|A|E$，故有 $\lambda A^*\alpha=|A|\alpha$。因为 $|A|\neq0,\alpha\neq0$，上式右端非 $0$，从而 $\lambda\neq0$，于是有
$$A^*\alpha=\frac{|A|}{\lambda}\alpha,\alpha\neq0$$
即伴随矩阵 $A^*$ 的特征值是 $\frac{|A|}{\lambda}$。` },
      { p: 52, md: R`【例2.22】已知
$$|A|=\begin{vmatrix}0&1&0&0\\0&0&\frac{1}{2}&0\\0&0&0&\frac{1}{3}\\\frac{1}{4}&0&0&0\end{vmatrix}$$
那么行列式 $|A|$ 所有元素的代数余子式之和为______。
【分析】由于 $A^*=(A_{ij})$，只要能求出 $A$ 的伴随矩阵，就可求出 $\sum A_{ij}$。因为 $A^*=|A|A^{-1}$，而
$$|A|=\frac{1}{4}\cdot(-1)^{4+1}\cdot\frac{1}{3!}=-\frac{1}{4!}$$
又由分块求逆，有
$$\begin{pmatrix}0&1&0&0\\0&0&\frac{1}{2}&0\\0&0&0&\frac{1}{3}\\\frac{1}{4}&0&0&0\end{pmatrix}^{-1}=\begin{pmatrix}0&0&0&4\\1&0&0&0\\0&2&0&0\\0&0&3&0\end{pmatrix}$$
从而
$$A^*=-\frac{1}{4!}\begin{pmatrix}0&0&0&4\\1&0&0&0\\0&2&0&0\\0&0&3&0\end{pmatrix}$$
故
$$\sum A_{ij}=-\frac{1}{4!}(1+2+3+4)=-\frac{5}{12}.$$
#### 可逆矩阵
【例2.23】若 $A=\begin{pmatrix}2&2&3\\1&-1&0\\-1&2&1\end{pmatrix}$，则 $A^{-1}=$______。
【分析】（用伴随矩阵）因为
$$A_{11}=\begin{vmatrix}-1&0\\2&1\end{vmatrix}=-1,\quad A_{12}=-\begin{vmatrix}1&0\\-1&1\end{vmatrix}=-1,\quad A_{13}=\begin{vmatrix}1&-1\\-1&2\end{vmatrix}=1,$$
$$A_{21}=-\begin{vmatrix}2&3\\2&1\end{vmatrix}=4,\quad A_{22}=\begin{vmatrix}2&3\\-1&1\end{vmatrix}=5,\quad A_{23}=-\begin{vmatrix}2&2\\-1&2\end{vmatrix}=-6,$$` },
      { p: 53, md: R`$$A_{31}=\begin{vmatrix}2&3\\-1&0\end{vmatrix}=3,\quad A_{32}=-\begin{vmatrix}2&3\\1&0\end{vmatrix}=3,\quad A_{33}=\begin{vmatrix}2&2\\1&-1\end{vmatrix}=-4.$$
又
$$|A|=\begin{vmatrix}2&2&3\\1&-1&0\\-1&2&1\end{vmatrix}=\begin{vmatrix}4&2&3\\0&-1&0\\1&2&1\end{vmatrix}=-1$$
故
$$A^{-1}=\frac{A^*}{|A|}=-\begin{pmatrix}-1&4&3\\-1&5&3\\1&-6&-4\end{pmatrix}=\begin{pmatrix}1&-4&-3\\1&-5&-3\\-1&6&4\end{pmatrix}$$
（用初等行变换）
$$[A\vdots E]=\begin{pmatrix}2&2&3&1&0&0\\1&-1&0&0&1&0\\-1&2&1&0&0&1\end{pmatrix}\to\begin{pmatrix}1&-1&0&0&1&0\\-1&2&1&0&0&1\\2&2&3&1&0&0\end{pmatrix}\to\begin{pmatrix}1&-1&0&0&1&0\\0&1&1&0&1&1\\0&4&3&1&-2&0\end{pmatrix}\to\begin{pmatrix}1&-1&0&0&1&0\\0&1&1&0&1&1\\0&0&-1&1&-6&-4\end{pmatrix}\to\begin{pmatrix}1&0&0&1&-4&-3\\0&1&0&1&-5&-3\\0&0&-1&1&-6&-4\end{pmatrix}\to\begin{pmatrix}1&0&0&1&-4&-3\\0&1&0&1&-5&-3\\0&0&1&-1&6&4\end{pmatrix}$$
故
$$A^{-1}=\begin{pmatrix}1&-4&-3\\1&-5&-3\\-1&6&4\end{pmatrix}$$
【评注】(1) 求代数余子式 $A_{ij}=(-1)^{i+j}M_{ij}$ 时，不要忘记正负号，组装伴随矩阵
$$A^*=\begin{pmatrix}A_{11}&A_{21}&A_{31}\\A_{12}&A_{22}&A_{32}\\A_{13}&A_{23}&A_{33}\end{pmatrix}\text{时，不要排错位置。}$$
(2) 用初等行变换求 $A^{-1}$ 的常规步骤：
$$(A\quad E)\xrightarrow{由上往下}(\triangle\ \approx)\xrightarrow{由下往上}(\backslash\ \times)\xrightarrow{某行乘\ k}(E\quad A^{-1})$$
【例2.24】若 $A$ 是 $n$ 阶矩阵，满足 $A^2+3A-2E=0$，则 $(A+E)^{-1}=$______。
【分析】因为
$$(A+E)(A+2E)-4E=A^2+3A-2E=0$$
有
$$(A+E)(A+2E)=4E$$
$$(A+E)\cdot\frac{1}{4}(A+2E)=E$$
故
$$(A+E)^{-1}=\frac{1}{4}(A+2E).$$` },
      { p: 54, md: R`【例2.25】已知 $A$ 是 $n$ 阶矩阵，满足 $A^3=2E,B=A^2+2A+E$，则 $B^{-1}=$______。
【分析】因为 $B=A^2+2A+E=(A+E)^2$，由 $A^3=2E$ 有
$$A^3+E=3E\Rightarrow(A+E)(A^2-A+E)=3E\Rightarrow(A+E)^{-1}=\frac{1}{3}(A^2-A+E)$$
那么
$$B^{-1}=[(A+E)^2]^{-1}=[(A+E)^{-1}]^2=\frac{1}{9}(A^2-A+E)^2$$
【例2.26】（2000,2）设 $A=\begin{pmatrix}1&0&0&0\\-2&3&0&0\\0&-4&5&0\\0&0&-6&7\end{pmatrix}$，$E$ 为 4 阶单位矩阵，且 $B=(E+A)^{-1}(E-A)$，则 $(E+B)^{-1}=$______。
【分析】对于 $(A+B)^{-1}$ 没有运算法则，通常用单位矩阵恒等变形的技巧化为乘积的形式。
$$(E+B)^{-1}=[E+(E+A)^{-1}(E-A)]^{-1}=[(E+A)^{-1}(E+A)+(E+A)^{-1}(E-A)]^{-1}=[(E+A)^{-1}(E+A+E-A)]^{-1}=[2(E+A)^{-1}]^{-1}=\frac{1}{2}(E+A)=\begin{pmatrix}1&0&0&0\\-1&2&0&0\\0&-2&3&0\\0&0&-3&4\end{pmatrix}$$
本题是考生失误较多的一个考题，难度是 0.29，这里涉及的思路方法应很好体会。
【例2.27】已知 $A,B$ 均为 $n$ 阶矩阵，且 $A$ 与 $E-AB$ 都是可逆矩阵，证明 $E-BA$ 可逆。
【证】$|E-BA|=|A^{-1}A-BA|=|(A^{-1}-B)A|=|A^{-1}-B||A|=|A||A^{-1}-B|=|A(A^{-1}-B)|=|E-AB|\neq0$，故 $E-BA$ 可逆。
#### 初等变换
【例2.28】已知
$$A=\begin{pmatrix}a_{11}&a_{12}&a_{13}\\a_{21}&a_{22}&a_{23}\\a_{31}&a_{32}&a_{33}\end{pmatrix},\quad B=\begin{pmatrix}a_{13}&-a_{11}+a_{12}&a_{11}\\a_{23}&-a_{21}+a_{22}&a_{21}\\a_{33}&-a_{31}+a_{32}&a_{31}\end{pmatrix}$$` },
      { p: 55, md: R`$$P_1=\begin{pmatrix}0&0&1\\0&1&0\\1&0&0\end{pmatrix},\quad P_2=\begin{pmatrix}1&1&0\\0&1&0\\0&0&1\end{pmatrix},\quad P_3=\begin{pmatrix}1&-1&0\\0&1&0\\0&0&1\end{pmatrix}$$
其中 $A$ 可逆，那么 $B^{-1}=$ (A) $A^{-1}P_1P_2$ (B) $P_1P_2A^{-1}$ (C) $P_1P_3A^{-1}$ (D) $P_3P_1A^{-1}$
【分析】把矩阵 $A$ 的第 1 列的 $-1$ 倍加至第 2 列，再 1、3 两列对调即得到矩阵 $B$。故 $B=AP_3P_1$，那么，
$$B^{-1}=(AP_3P_1)^{-1}=P_1^{-1}P_3^{-1}A^{-1}=P_1P_2A^{-1}$$
所以应选 (B)。
注意，若先 1、3 两列对调，再把第 3 列的 $-1$ 倍加至第 2 列亦得到矩阵 $B$，用初等矩阵描述即
$$B=A\begin{pmatrix}0&0&1\\0&1&0\\1&0&0\end{pmatrix}\begin{pmatrix}1&0&0\\0&1&0\\0&-1&1\end{pmatrix}$$
那么，
$$B^{-1}=\begin{pmatrix}1&0&0\\0&1&0\\0&1&1\end{pmatrix}\begin{pmatrix}0&0&1\\0&1&0\\1&0&0\end{pmatrix}A^{-1}=\begin{pmatrix}0&0&1\\0&1&0\\1&1&0\end{pmatrix}A^{-1}$$
这与 $B^{-1}=P_1P_2A^{-1}$ 是一样的。
【例2.29】（2004,$\frac12$）设 $A$ 是 3 阶方阵，将 $A$ 的第 1 列与第 2 列交换得 $B$，再把 $B$ 的第 2 列加到第 3 列得 $C$，则满足 $AQ=C$ 的可逆矩阵 $Q$ 为
(A) $\begin{pmatrix}0&1&0\\1&0&0\\1&0&1\end{pmatrix}$ (B) $\begin{pmatrix}0&1&0\\1&0&1\\0&0&1\end{pmatrix}$ (C) $\begin{pmatrix}0&1&0\\1&0&0\\0&1&1\end{pmatrix}$ (D) $\begin{pmatrix}0&1&1\\1&0&0\\0&0&1\end{pmatrix}$
【分析】按题意，用初等矩阵描述，有
$$A\begin{pmatrix}0&1&0\\1&0&0\\0&0&1\end{pmatrix}=B,\quad B\begin{pmatrix}1&0&0\\0&1&1\\0&0&1\end{pmatrix}=C$$
那么
$$A\begin{pmatrix}0&1&0\\1&0&0\\0&0&1\end{pmatrix}\begin{pmatrix}1&0&0\\0&1&1\\0&0&1\end{pmatrix}=C$$
从而 $Q=\begin{pmatrix}0&1&0\\1&0&0\\0&0&1\end{pmatrix}\begin{pmatrix}1&0&0\\0&1&1\\0&0&1\end{pmatrix}=\begin{pmatrix}0&1&1\\1&0&0\\0&0&1\end{pmatrix}$，所以应选 (D)。` },
      { p: 56, md: R`【例2.30】（2005,$\frac12$）设 $A$ 为 $n(n\geqslant2)$ 阶可逆矩阵，交换 $A$ 的第一行与第二行得到矩阵 $B$，$A^*$ 与 $B^*$ 分别为 $A$ 和 $B$ 的伴随矩阵，则
(A) 交换 $A^*$ 的第一列与第二列，得 $B^*$
(B) 交换 $A^*$ 的第一行与第二行，得 $B^*$
(C) 交换 $A^*$ 的第一列与第二列，得 $-B^*$
(D) 交换 $A^*$ 的第一行与第二行，得 $-B^*$
【答案】(C)
【分析】按题意，有 $E_{12}A=B$，于是 $A^{-1}E_{12}^{-1}=B^{-1}$。因为 $E_{12}^{-1}=E_{12},A^{-1}=\dfrac{A^*}{|A|}$，从而 $\dfrac{A^*}{|A|}E_{12}=\dfrac{B^*}{|B|}$。又因矩阵 $A$ 的两行互换得到 $B$，而知 $|A|=-|B|$。于是 $A^*E_{12}=-B^*$。即 $A^*$ 的一、二两列互换得到 $-B^*$。所以应选 (C)。
【评注】本题考查初等矩阵的两个定理，一是左乘右乘，一是初等矩阵的逆矩阵公式。如果对 $n$ 阶初等矩阵的符号不习惯，不妨把 $A$ 想成是 3 阶矩阵，那么
$$\begin{pmatrix}0&1&0\\1&0&0\\0&0&1\end{pmatrix}A=B\Rightarrow A^{-1}\begin{pmatrix}0&1&0\\1&0&0\\0&0&1\end{pmatrix}^{-1}=B^{-1},$$
即 $A^{-1}\begin{pmatrix}0&1&0\\1&0&0\\0&0&1\end{pmatrix}=B^{-1}$
即 $\dfrac{A^*}{|A|}\begin{pmatrix}0&1&0\\1&0&0\\0&0&1\end{pmatrix}=\dfrac{B^*}{|B|}$，即 $A^*\begin{pmatrix}0&1&0\\1&0&0\\0&0&1\end{pmatrix}=-B^*$
而知应选 (C)。
【例2.31】$\begin{pmatrix}1&0&0\\0&1&0\\0&2&1\end{pmatrix}^{2000}\begin{pmatrix}1&2&3\\2&3&4\\3&4&5\end{pmatrix}\begin{pmatrix}0&0&1\\0&1&0\\1&0&0\end{pmatrix}^{2001}=$______。
【分析】因为
$$\begin{pmatrix}1&2&3\\2&3&4\\3&4&5\end{pmatrix}\begin{pmatrix}0&0&1\\0&1&0\\1&0&0\end{pmatrix}=\begin{pmatrix}3&2&1\\4&3&2\\5&4&3\end{pmatrix},$$
$$\begin{pmatrix}1&2&3\\2&3&4\\3&4&5\end{pmatrix}\begin{pmatrix}0&0&1\\0&1&0\\1&0&0\end{pmatrix}^{2}=\begin{pmatrix}1&2&3\\2&3&4\\3&4&5\end{pmatrix},$$` },
      { p: 57, md: R`所以
$$\begin{pmatrix}1&2&3\\2&3&4\\3&4&5\end{pmatrix}\begin{pmatrix}0&0&1\\0&1&0\\1&0&0\end{pmatrix}^{2001}=\begin{pmatrix}3&2&1\\4&3&2\\5&4&3\end{pmatrix}$$
又因
$$\begin{pmatrix}1&0&0\\0&1&0\\0&2&1\end{pmatrix}\begin{pmatrix}3&2&1\\4&3&2\\5&4&3\end{pmatrix}=\begin{pmatrix}1&0&0\\0&1&0\\0&2&1\end{pmatrix}\begin{pmatrix}\alpha_1\\\alpha_2\\\alpha_3\end{pmatrix}=\begin{pmatrix}\alpha_1\\\alpha_2\\\alpha_3+2\alpha_2\end{pmatrix}$$
$$\begin{pmatrix}1&0&0\\0&1&0\\0&2&1\end{pmatrix}^{2}\begin{pmatrix}3&2&1\\4&3&2\\5&4&3\end{pmatrix}=\begin{pmatrix}1&0&0\\0&1&0\\0&2&1\end{pmatrix}\begin{pmatrix}\alpha_1\\\alpha_2\\\alpha_3+2\alpha_2\end{pmatrix}=\begin{pmatrix}\alpha_1\\\alpha_2\\\alpha_3+2\alpha_2+2\alpha_2\end{pmatrix}$$
故 $\begin{pmatrix}1&0&0\\0&1&0\\0&2&1\end{pmatrix}^{2000}\begin{pmatrix}\alpha_1\\\alpha_2\\\alpha_3\end{pmatrix}=\begin{pmatrix}\alpha_1\\\alpha_2\\\alpha_3+2000(2\alpha_2)\end{pmatrix}=\begin{pmatrix}3&2&1\\4&3&2\\16005&12004&8003\end{pmatrix}$
【例2.32】（2004,$\frac34$）设 $n$ 阶矩阵 $A$ 与 $B$ 等价，则必有
(A) 当 $|A|=a(a\neq0)$ 时，$|B|=a$
(B) 当 $|A|=a(a\neq0)$ 时，$|B|=-a$
(C) 当 $|A|\neq0$ 时，$|B|=0$
(D) 当 $|A|=0$ 时，$|B|=0$
【分析】按定义 2.10，所谓矩阵 $A$ 与 $B$ 等价，即 $A$ 经初等变换可得到矩阵 $B$。而 $A$ 与 $B$ 等价的充分必要条件是 $A$ 与 $B$ 有相同的秩。
经过初等变换行列式的值不一定相等，也不一定是相反数，例如把矩阵 $A$ 的第一行乘以 5 得到矩阵 $B$，那么矩阵 $A$ 与 $B$ 等价，而 $|A|=a$ 时，$|B|=5a$。可见 (A) 与 (B) 均不正确。
若 $|A|\neq0$，说明秩 $r(A)=n$，而 $|B|=0$，说明秩 $r(B)<n$，因此 (C) 不正确。
当 $|A|=0$ 时，$r(A)<n$，由 $A$ 与 $B$ 等价，知秩 $r(B)=r(A)<n$，因而 $|B|=0$，即 (D) 正确。
#### 矩阵方程
【例2.33】已知 $X=XA+B$，其中 $A=\begin{pmatrix}1&1\\1&1\end{pmatrix},B=\begin{pmatrix}1&2\\3&4\end{pmatrix}$，则 $X=$______。
【分析】由 $X=XA+B$ 得 $X(E-A)=B$，因为 $E-A=\begin{pmatrix}0&-1\\-1&0\end{pmatrix}$ 可逆，有 $X=B(E-A)^{-1}$` },
      { p: 58, md: R`$=\begin{pmatrix}1&2\\3&4\end{pmatrix}\begin{pmatrix}0&-1\\-1&0\end{pmatrix}^{-1}=-\begin{pmatrix}1&2\\3&4\end{pmatrix}\begin{pmatrix}0&1\\1&0\end{pmatrix}=-\begin{pmatrix}2&1\\4&3\end{pmatrix}.$
【评注】对于矩阵方程，经恒等变形之后有三种可能的形式：$AX=B;XA=B;AXC=B$。如果矩阵 $A、C$ 是可逆的，则依次有 $X=A^{-1}B;\quad X=BA^{-1};\quad X=A^{-1}BC^{-1}$，然后经计算就可求出 $X$。
因为矩阵乘法没有交换律，所以在恒等变形时，运算法则一定要正确。
例如，在本题中，不要把 $X=XA+B$ 错误地变形为 $(A-E)X=B$，而得到 $X=(A-E)^{-1}B=-\begin{pmatrix}0&1\\1&0\end{pmatrix}\begin{pmatrix}1&2\\3&4\end{pmatrix}=-\begin{pmatrix}3&4\\1&2\end{pmatrix}$，这是一个特别要防止的错误。
【例2.34】已知 $A,B$ 均 3 阶矩阵，矩阵 $X$ 满足 $AXA-BXB=BXA-AXB+E$，其中 $E$ 是 3 阶单位矩阵，则 $X=$
(A) $(A^2-B^2)^{-1}$ (B) $(A-B)^{-1}(A+B)^{-1}$ (C) $(A+B)^{-1}(A-B)^{-1}$ (D) 条件不足，不能确定
【分析】据已知，有 $AXA-BXA+AXB-BXB=E$，即 $(A-B)XA+(A-B)XB=E$，即 $(A-B)X(A+B)=E$。上式右端是单位矩阵，说明矩阵 $A-B,A+B$ 均可逆，那么左乘 $(A-B)^{-1}$，右乘 $(A+B)^{-1}$，即知 $X=(A-B)^{-1}(A+B)^{-1}$，故应选 (B)。
【例2.35】（2000,1）设矩阵 $A$ 的伴随矩阵
$$A^*=\begin{pmatrix}1&0&0&0\\0&1&0&0\\1&0&1&0\\0&-3&0&8\end{pmatrix}$$
且 $ABA^{-1}=BA^{-1}+3E$，其中 $E$ 为 4 阶单位矩阵，求矩阵 $B$。
【解法一】由 $|A^*|=|A|^{n-1}$，有 $|A|^3=8$，得 $|A|=2$。用 $A$ 右乘矩阵方程的两端，得 $AB-B=3A$ (1)。
因为 $A^*A=AA^*=|A|E$，用 $A^*$ 左乘上式的两端，并将 $|A|=2$ 代入，得 $(2E-A^*)B=6E$，于是 $2E-A^*$ 是可逆矩阵。从而` },
      { p: 59, md: R`$B=6(2E-A^*)^{-1}=6\begin{pmatrix}1&0&0&0\\0&1&0&0\\-1&0&1&0\\0&3&0&-6\end{pmatrix}^{-1}=6\begin{pmatrix}1&0&0&0\\0&1&0&0\\1&0&1&0\\0&\frac{1}{2}&0&-\frac{1}{6}\end{pmatrix}=\begin{pmatrix}6&0&0&0\\0&6&0&0\\6&0&6&0\\0&3&0&-1\end{pmatrix}$
【解法二】同前，由 (1) 式有 $B=3(A-E)^{-1}A$。因为 $AA^*=|A|E$ 有 $A=|A|(A^*)^{-1}$，得 $A=2(A^*)^{-1}=2\begin{pmatrix}1&0&0&0\\0&1&0&0\\1&0&1&0\\0&-3&0&8\end{pmatrix}^{-1}=\begin{pmatrix}2&0&0&0\\0&2&0&0\\-2&0&2&0\\0&\frac{3}{4}&0&\frac{1}{4}\end{pmatrix}$。于是 $(A-E)^{-1}=\begin{pmatrix}1&0&0&0\\0&1&0&0\\-2&0&1&0\\0&\frac{3}{4}&0&-\frac{3}{4}\end{pmatrix}^{-1}=\begin{pmatrix}1&0&0&0\\0&1&0&0\\2&0&1&0\\0&1&0&-\frac{4}{3}\end{pmatrix}$。因此 $B=3\begin{pmatrix}1&0&0&0\\0&1&0&0\\2&0&1&0\\0&1&0&-\frac{4}{3}\end{pmatrix}\begin{pmatrix}2&0&0&0\\0&2&0&0\\-2&0&2&0\\0&\frac{3}{4}&0&\frac{1}{4}\end{pmatrix}=\begin{pmatrix}6&0&0&0\\0&6&0&0\\6&0&6&0\\0&3&0&-1\end{pmatrix}$
【例2.36】已知 $AX=B$，其中
$$A=\begin{pmatrix}1&3&3\\2&6&9\\-1&-3&3\end{pmatrix},B=\begin{pmatrix}2&-1&1\\7&4&-1\\4&13&-7\end{pmatrix}$$
求矩阵 $X$。
【分析】如 $A$ 可逆，则 $X=A^{-1}B$，现在的 $A$ 是不可逆的，可转换为解非齐次线性方程组。
【解】设 $X=\begin{pmatrix}x_1&y_1&z_1\\x_2&y_2&z_2\\x_3&y_3&z_3\end{pmatrix}$` },
      { p: 60, md: R`则 $\begin{pmatrix}1&3&3\\2&6&9\\-1&-3&3\end{pmatrix}\begin{pmatrix}x_1&y_1&z_1\\x_2&y_2&z_2\\x_3&y_3&z_3\end{pmatrix}=\begin{pmatrix}2&-1&1\\7&4&-1\\4&13&-7\end{pmatrix}$，即
$$\begin{cases}x_1+3x_2+3x_3=2\\2x_1+6x_2+9x_3=7\\-x_1-3x_2+3x_3=4\end{cases}\quad\begin{cases}y_1+3y_2+3y_3=-1\\2y_1+6y_2+9y_3=4\\-y_1-3y_2+3y_3=13\end{cases}\quad\begin{cases}z_1+3z_2+3z_3=1\\2z_1+6z_2+9z_3=-1\\-z_1-3z_2+3z_3=-7\end{cases}$$
这三个方程组的系数矩阵完全一样，区别仅在常数项，为简洁这三个方程组的高斯消元可同时进行，即
$$\begin{pmatrix}1&3&3&2&-1&1\\2&6&9&7&4&-1\\-1&-3&3&4&13&-7\end{pmatrix}\to\begin{pmatrix}1&3&3&2&-1&1\\0&0&3&3&6&-3\\0&0&6&6&12&-6\end{pmatrix}\to\begin{pmatrix}1&3&3&2&-1&1\\0&0&3&3&6&-3\\0&0&0&0&0&0\end{pmatrix}.$$
从 $\begin{cases}x_1+3x_2+3x_3=2\\3x_3=3\end{cases}$ 解出 $\begin{cases}x_1=-3t-1,\\x_2=t,\\x_3=1.\end{cases}$ 类似地 $\begin{cases}y_1=-3u-7,\\y_2=u,\\y_3=2.\end{cases}$ $\begin{cases}z_1=-3v+4,\\z_2=v,\\z_3=-1.\end{cases}$
从而 $X=\begin{pmatrix}-3t-1&-3u-7&-3v+4\\t&u&v\\1&2&-1\end{pmatrix},\forall t,u,v.$
### 四、练习题精选
1. 填空题
(1) 已知 $A$ 是 3 阶矩阵，且所有元素都是 $-1$，则 $A^4+2A^3=$______。
(2) 设 $A$ 是 $n$ 阶矩阵，满足 $(A-E)^3=(A+E)^3$，则 $(A-2E)^{-1}=$______。
(3)（2006,4,4 分）已知 $A=\begin{pmatrix}-3&2&-2\\2&a&3\\3&-1&1\end{pmatrix},B$ 是 3 阶非零矩阵，且 $AB=0$，则 $a=$______。` }
    ],
    quiz: [
      { q: R`设 $A,B$ 为 $n$ 阶矩阵，则 $|AB|=$`, options: [R`$|A||B|$`, R`$|A|+|B|$`, R`$|A|^n|B|$`, R`$|B||A|^{-1}$`], answer: 0, explain: R`行列式乘法公式。` },
      { q: R`$n$ 阶矩阵 $A$ 可逆的充要条件是`, options: [R`$|A|\neq0$`, R`$|A|=0$`, R`$r(A)<n$`, R`$A=0$`], answer: 0, explain: R`可逆 $\Leftrightarrow|A|\neq0\Leftrightarrow r(A)=n$。` },
      { q: R`$(AB)^{-1}=$`, options: [R`$B^{-1}A^{-1}$`, R`$A^{-1}B^{-1}$`, R`$A^{-1}B$`, R`$BA$`], answer: 0, explain: R`$(AB)^{-1}=B^{-1}A^{-1}$。` },
      { q: R`$(AB)^T=$`, options: [R`$B^TA^T$`, R`$A^TB^T$`, R`$A^TB$`, R`$AB$`], answer: 0, explain: R`$(AB)^T=B^TA^T$。` },
      { q: R`$A^{-1}=$`, options: [R`$\dfrac{1}{|A|}A^*$`, R`$|A|A^*$`, R`$|A|^{-1}A$`, R`$\dfrac{1}{|A|}A$`], answer: 0, explain: R`$AA^*=|A|E$。` },
      { q: R`若 $r(A)=n-1$，则 $r(A^*)=$`, options: [R`$1$`, R`$n$`, R`$n-1$`, R`$0$`], answer: 0, explain: R`$r(A^*)=\begin{cases}n,&r(A)=n\\1,&r(A)=n-1\\0,&r(A)<n-1\end{cases}$。` },
      { q: R`若 $A,B$ 都是 $n$ 阶矩阵且 $AB=0$，则`, options: [R`$r(A)+r(B)\leqslant n$`, R`$r(A)+r(B)\geqslant n$`, R`$A=0$ 或 $B=0$`, R`$B=A$`], answer: 0, explain: R`$AB=0$ 时 $B$ 的列向量是 $Ax=0$ 的解，故 $r(A)+r(B)\leqslant n$。` },
      { q: R`$(kA)^*=$`, options: [R`$k^{n-1}A^*$`, R`$kA^*$`, R`$k^nA^*$`, R`$k^{-1}A^*$`], answer: 0, explain: R`$(kA)^*=k^{n-1}A^*$。` },
      { q: R`$\begin{pmatrix}B&0\\0&C\end{pmatrix}^n=$`, options: [R`$\begin{pmatrix}B^n&0\\0&C^n\end{pmatrix}$`, R`$\begin{pmatrix}B^n&C^n\\0&0\end{pmatrix}$`, R`$\begin{pmatrix}0&B^n\\C^n&0\end{pmatrix}$`, R`$\begin{pmatrix}B&C\\0&0\end{pmatrix}^n$`], answer: 0, explain: R`分块对角矩阵的幂。` },
      { q: R`若 $r(A)=1$，则 $A^n=$`, options: [R`$l^{n-1}A$（其中 $A^2=lA$）`, R`$A$`, R`$0$`, R`$nA$`], answer: 0, explain: R`秩 1 矩阵可分解为 $\alpha\beta^T$，$A^2=lA$。` }
    ]
  };
})();
