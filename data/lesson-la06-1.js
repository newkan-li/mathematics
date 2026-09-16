window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["la06_s0"] = {
    id: "la06_s0",
    ch: "第六章 二次型",
    title: "二次型",
    book: "《线性代数辅导讲义》",
    pages: [154, 171],
    img: "assets/img/xiandai",
    content: [
      { p: 154, md: R`### 一、知识结构网络图
**二次型**
- **矩阵表示** —— $x^TAx$ —— 二次型的秩
- **标准形**
  - 惯性定理 —— 正、负惯性指数
  - 合同 —— $C^TAC=B$，$C$ 可逆
  - 化标准形
    - 配方法 → 一次一个字母
    - 正交变换法 → 特征值 → 相似
- **正定**
  - 定义：$\forall x\neq0,\ x^TAx>0$
  - 充要条件：特征值全大于 $0$；正惯性指数 $p=n$；顺序主子式全大于 $0$；$A=C^TEC$，$C$ 可逆
  - 必要条件：$a_{ii}>0$；$|A|>0$

【评注】二次型的两大板块要复习整理清楚，一个是标准形，一个是正定性。

(1) 了解二次型的概念，掌握用矩阵形式表示二次型，了解合同变换和合同矩阵的概念。

(2) 理解二次型秩的概念，了解二次型的标准形、规范形等概念，了解惯性定理的条件和结论，掌握用正交变换化二次型为标准形的方法，了解用配方法化二次型为标准形的方法。

(3) 理解正定二次型、正定矩阵的概念，掌握正定矩阵的性质。` },
      { p: 155, md: R`### 二、基本内容与重要结论
#### 重要概念
**定义 6.1** 含有 $n$ 个变量 $x_1,x_2,\cdots,x_n$ 的二次齐次函数
$$f(x_1,x_2,\cdots,x_n)=a_{11}x_1^2+a_{22}x_2^2+\cdots+a_{nn}x_n^2+2a_{12}x_1x_2+2a_{13}x_1x_3+\cdots+2a_{1n}x_1x_n+2a_{23}x_2x_3+\cdots+2a_{2n}x_2x_n+\cdots+2a_{n-1,n}x_{n-1}x_n$$
称为 $n$ 元二次型。如规定 $a_{ij}=a_{ji}$，$\forall i,j=1,2,\cdots,n$，则二次型有矩阵表示
$$f(x_1,x_2,\cdots,x_n)=x^TAx,\tag{6.1}$$
其中 $x=(x_1,x_2,\cdots,x_n)^T$，$A=(a_{ij})$ 且 $A^T=A$ 是对称矩阵，称 $A$ 为二次型的矩阵。秩 $r(A)$ 称为二次型的秩，记为 $r(f)$。

例如，二元二次型 $f(x_1,x_2)=x_1^2+5x_2^2+6x_1x_2$，有
$$f(x_1,x_2)=x_1^2+3x_1x_2+3x_1x_2+5x_2^2=x_1(x_1+3x_2)+x_2(3x_1+5x_2)=(x_1x_2)\begin{pmatrix}x_1+3x_2\\3x_1+5x_2\end{pmatrix}=(x_1x_2)\begin{pmatrix}1&3\\3&5\end{pmatrix}\begin{pmatrix}x_1\\x_2\end{pmatrix}=x^TAx$$
为二次型的矩阵表示。

又如，作矩阵乘法，易知
$$(x_1x_2x_3)\begin{pmatrix}1&2&3\\4&5&6\\7&8&9\end{pmatrix}\begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix}=x_1^2+5x_2^2+9x_3^2+6x_1x_2+10x_1x_3+14x_2x_3\quad(*)$$
是三元二次型，但 $(*)$ 不是二次型的矩阵表示，此二次型的矩阵为
$$A=\begin{pmatrix}1&3&5\\3&5&7\\5&7&9\end{pmatrix}.$$

**定义 6.2** 如果二次型中只含有变量的平方项，所有混合项 $x_ix_j(i\neq j)$ 的系数全是零，即
$$x^TAx=d_1x_1^2+d_2x_2^2+\cdots+d_nx_n^2,\tag{6.2}$$
这样的二次型称为标准形。

在标准形中，如平方项的系数 $d_j$ 为 $1,-1$ 或 $0$，
$$x^TAx=x_1^2+x_2^2+\cdots+x_p^2-x_{p+1}^2-\cdots-x_{p+q}^2,\tag{6.3}$$` },
      { p: 156, md: R`则称其为二次型的规范形。

**定义 6.3** 在二次型 $x^TAx$ 的标准形中，正平方项的个数 $p$ 称为二次型的正惯性指数，负平方项的个数 $q$ 称为二次型的负惯性指数。

**定义 6.4** 如果
$$\begin{cases}x_1=c_{11}y_1+c_{12}y_2+\cdots+c_{1n}y_n\\x_2=c_{21}y_1+c_{22}y_2+\cdots+c_{2n}y_n\\\cdots\quad\cdots\quad\cdots\quad\cdots\\x_n=c_{n1}y_1+c_{n2}y_2+\cdots+c_{nn}y_n\end{cases}\tag{6.4}$$
满足
$$|C|=\begin{vmatrix}c_{11}&c_{12}&\cdots&c_{1n}\\c_{21}&c_{22}&\cdots&c_{2n}\\\cdots&\cdots&&\cdots\\c_{n1}&c_{n2}&\cdots&c_{nn}\end{vmatrix}\neq0,$$
称 (6.4) 为由 $x=(x_1,x_2,\cdots,x_n)^T$ 到 $y=(y_1,y_2,\cdots,y_n)^T$ 的坐标变换。

【注】坐标变换 (6.4) 用矩阵描述，即
$$\begin{pmatrix}x_1\\x_2\\\vdots\\x_n\end{pmatrix}=\begin{pmatrix}c_{11}&c_{12}&\cdots&c_{1n}\\c_{21}&c_{22}&\cdots&c_{2n}\\\cdots&\cdots&&\cdots\\c_{n1}&c_{n2}&\cdots&c_{nn}\end{pmatrix}\begin{pmatrix}y_1\\y_2\\\vdots\\y_n\end{pmatrix},$$
或 $x=Cy$，其中 $C$ 是可逆矩阵。

**定义 6.5** 两个实对称矩阵 $A$ 和 $B$，如存在可逆矩阵 $C$，使得
$$C^TAC=B,\tag{6.5}$$
就称矩阵 $A$ 和 $B$ 合同，记作 $A\simeq B$。并称由 $A$ 到 $B$ 的变换为合同变换，称 $C$ 为合同变换的矩阵。

注意，$n$ 元二次型 $f(x_1,x_2,\cdots,x_n)=x^TAx$ 经坐标变换 $x=Cy$，有
$$x^TAx=(Cy)^TA(Cy)=y^TC^TACy=y^TBy,$$
其中 $B=C^TAC$。因为 $B^T=(C^TAC)^T=C^TA^T(C^T)^T=C^TAC=B$，说明 $y^TBy$ 是二次型的矩阵表示。即以 $x_1,x_2,\cdots,x_n$ 为自变量的二次型经坐标变换 $x=Cy$ 成为以 $y_1,y_2,\cdots,y_n$ 为自变量的二次型。二次型矩阵由 $A$ 转换为 $B$，经坐标变换二次型矩阵是合同的。

特别地，若 $x=Cy$ 是正交变换，即 $C$ 是正交矩阵，则有 $B=C^TAC=C^{-1}AC$，即经过正交变换，二次型矩阵不仅合同而且相似。

**定义 6.6** 对二次型 $x^TAx$，如果对任何 $x\neq0$，恒有 $x^TAx>0$，则称二次型 $x^TAx$ 是正定二次型，并称实对称矩阵 $A$ 是正定矩阵。

例如，二次型 $f(x_1,x_2,x_3)=x_1^2+5x_2^2-4x_3^2+2x_1x_2$，平方项 $x_3^2$ 的系数是 $-4$，` },
      { p: 157, md: R`如果取 $x=(0,0,1)^T\neq0$，则有 $f(0,0,1)=-4<0$，说明这个二次型不是正定的。二次型的矩阵 $A=\begin{pmatrix}1&1&0\\1&5&0\\0&0&-4\end{pmatrix}$ 也不是正定矩阵。由此知 $A$ 正定的必要条件是 $a_{ii}>0$。

#### 主要定理
**定理 6.1** 变量 $x=(x_1,x_2,\cdots,x_n)^T$ 的 $n$ 元二次型 $x^TAx$ 经坐标变换 $x=Cy$ 后，成为变量 $y=(y_1,y_2,\cdots,y_n)^T$ 的 $n$ 元二次型 $y^TBy$，其中 $B=C^TAC$。

**定理 6.2** 任意的 $n$ 元二次型 $x^TAx$ 都可以通过坐标变换化成标准形 $d_1y_1^2+d_2y_2^2+\cdots+d_ny_n^2$，其中 $d_i(i=1,2,\cdots,n)$ 是实数。

**定理 6.3** 任一 $n$ 阶实对称矩阵 $A$，总可以合同于一个对角矩阵，即
$$C^TAC=\begin{pmatrix}d_1&&&\\&d_2&&\\&&\ddots&\\&&&d_n\end{pmatrix}.\tag{6.6}$$

**定理 6.4**（惯性定理）对于一个二次型，不论选取怎样的坐标变换使它化为仅含平方项的标准形，其中正平方项的个数 $p$，负平方项的个数 $q$ 都是由所给二次型唯一确定的。

例如，对于二次型 $f(x_1,x_2,x_3)=(x_1+x_2)^2+(x_2-x_3)^2+(x_3+x_1)^2$，因为 $f(x_1,x_2,x_3)=2x_1^2+2x_2^2+2x_3^2+2x_1x_2-2x_2x_3+2x_3x_1$，所以二次型 $f$ 的矩阵是
$$A=\begin{pmatrix}2&1&1\\1&2&-1\\1&-1&2\end{pmatrix}.$$
易见 $|\lambda E-A|=\lambda(\lambda-3)^2$，即矩阵 $A$ 的特征值是 $3,3,0$。所以在正交变换下二次型的标准形是 $3y_1^2+3y_2^2$。从而正惯性指数 $p=2$，负惯性指数 $q=0$。或用配方法，有
$$f(x_1,x_2,x_3)=2\left(x_1+\dfrac12x_2+\dfrac12x_3\right)^2+\dfrac32(x_2-x_3)^2,$$
亦知 $p=2,q=0$。` },
      { p: 158, md: R`【评注】如果认为二次型的标准形是
$$f=y_1^2+y_2^2+y_3^2\tag{1}$$
从而秩 $p=3,q=0$ 就不正确了。因为对于
$$\begin{cases}y_1=x_1+x_2\\y_2=\quad\quad\ x_2-x_3\\y_3=x_1\quad\quad+x_3\end{cases}\tag{2}$$
有行列式 $\begin{vmatrix}1&1&0\\0&1&-1\\1&0&1\end{vmatrix}=0$，从而 (2) 不是坐标变换，那么 (1) 也就不是标准形。

**定理 6.5** 对任一个 $n$ 元二次型 $x^TAx$，其中 $A$ 是 $n$ 阶实对称矩阵，必存在正交变换 $x=Qy$（$Q$ 是正交矩阵），使得 $x^TAx$ 化成标准形 $\lambda_1y_1^2+\lambda_2y_2^2+\cdots+\lambda_ny_n^2$，这里 $\lambda_1,\lambda_2,\cdots,\lambda_n$ 是 $A$ 的 $n$ 个特征值。

**定理 6.6** $n$ 元二次型 $x^TAx$ 正定的充分必要条件有：
(1) $A$ 的正惯性指数是 $n$；
(2) $A$ 与 $E$ 合同，即存在可逆矩阵 $C$，使 $C^TAC=E$；
(3) $A$ 的所有特征值 $\lambda_i(i=1,2,\cdots,n)$ 均为正数；
(4) $A$ 的各阶顺序主子式均大于零。

**推论** $x^TAx$ 正定的必要条件是：(1) $a_{ii}>0$；(2) $|A|>0$。

### 三、典型例题分析选讲
#### 二次型的标准形
【例6.1】（2002,1）已知实二次型 $f(x_1,x_2,x_3)=a(x_1^2+x_2^2+x_3^2)+4x_1x_2+4x_1x_3+4x_2x_3$ 经正交变换 $x=Py$ 可化成标准形 $f=6y_1^2$，则 $a=$______。
【分析】二次型 $x^TAx$ 必存在坐标变换 $x=Cy$ 化其为标准形 $y^T\Lambda y$。即实对称矩阵 $A$ 必存在可逆矩阵 $C$ 使其与对角矩阵 $\Lambda$ 合同，亦即 $C^TAC=\Lambda$。如果选择正交变换，即 $C$ 是正交矩阵，那么 $\Lambda=C^TAC=C^{-1}AC$，说明在正交变换下，$A$ 不仅与 $\Lambda$ 合同而且 $A$ 与 $\Lambda$ 相似，因此 $\Lambda$ 就是 $A$ 的特征值。另一方面，在二次型 $y^T\Lambda y$ 中，$\Lambda$ 就是标准形平方项的系数。` },
      { p: 159, md: R`因此，二次型 $x^TAx$ 经正交变换化为标准形时，标准形中平方项的系数就是二次型矩阵 $A$ 的特征值。

本题中，$f=6y_1^2=6y_1^2+0y_2^2+0y_3^2$，即矩阵 $A$ 的特征值是 $6,0,0$。利用 $\sum a_{ii}=\sum\lambda_i$，可知 $a+a+a=6+0+0$，即 $a=2$。
或者，利用正交变换下二次型的矩阵相似，有 $\begin{pmatrix}a&2&2\\2&a&2\\2&2&a\end{pmatrix}\sim\begin{pmatrix}6&&\\&0&\\&&0\end{pmatrix}$，亦可求出 $a$。

【例6.2】已知二次型 $x^TAx=x_1^2-5x_2^2+x_3^2+2ax_1x_2+2x_1x_3+2bx_2x_3$ 的秩为 2，$(2,1,2)^T$ 是 $A$ 的特征向量，那么经正交变换二次型的标准形是______。
【分析】求二次型 $x^TAx$ 在正交变换下的标准形也就是求二次型矩阵 $A$ 的特征值。由于 $A=\begin{pmatrix}1&a&1\\a&-5&b\\1&b&1\end{pmatrix}$，从 $(2,1,2)^T$ 是 $A$ 的特征向量，有 $\begin{pmatrix}1&a&1\\a&-5&b\\1&b&1\end{pmatrix}\begin{pmatrix}2\\1\\2\end{pmatrix}=\lambda_1\begin{pmatrix}2\\1\\2\end{pmatrix}$，即 $\begin{cases}2+a+2=2\lambda_1\\2a-5+2b=\lambda_1\\2+b+2=2\lambda_1\end{cases}$，解出：$a=b=2,\lambda_1=3$。
从秩 $r(A)=2$，知 $|A|=0$，于是 $\lambda_2=0$ 是 $A$ 的特征值。再由 $\sum a_{ii}=\sum\lambda_i$，有 $1+(-5)+1=3+0+\lambda_3$，知 $\lambda_3=-6$ 是 $A$ 的特征值。
因此，正交变换下二次型的标准形是：$3y_1^2-6y_3^2$。

【例6.3】已知二次型 $f(x_1,x_2,x_3)=x_1^2+5x_2^2+5x_3^2+2x_1x_2-4x_1x_3$。
(1) 写出二次型 $f$ 的矩阵表达式。
(2) 用正交变换把二次型 $f$ 化成标准形，并写出相应的正交矩阵。
(3) 当 $x^Tx=2$ 时，求 $f(x_1,x_2,x_3)$ 的极大值。
【解】(1) $f$ 的矩阵表示为 $f(x_1,x_2,x_3)=x^TAx=(x_1\ x_2\ x_3)\begin{pmatrix}1&1&-2\\1&5&0\\-2&0&5\end{pmatrix}\begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix}$。` },
      { p: 160, md: R`(2) 由矩阵 $A$ 的特征多项式
$$|\lambda E-A|=\begin{vmatrix}\lambda-1&-1&2\\-1&\lambda-5&0\\2&0&\lambda-5\end{vmatrix}=\begin{vmatrix}\lambda-1&-1&2\\-1&\lambda-5&0\\0&2(\lambda-5)&\lambda-5\end{vmatrix}=\begin{vmatrix}\lambda-1&-5&2\\-1&\lambda-5&0\\0&0&\lambda-5\end{vmatrix}=(\lambda-5)(\lambda^2-6\lambda),$$
得到 $A$ 的特征值是：$0,5,6$。
当 $\lambda=0$ 时，由 $(0E-A)x=0$，即 $\begin{pmatrix}-1&-1&2\\-1&-5&0\\2&0&-5\end{pmatrix}\to\begin{pmatrix}1&5&0\\2&0&-5\\0&0&0\end{pmatrix}$，得基础解系 $\alpha_1=(5,-1,2)^T$，即 $\lambda=0$ 的特征向量。
当 $\lambda=5$ 时，由 $(5E-A)x=0$，即 $\begin{pmatrix}4&-1&2\\-1&0&0\\2&0&0\end{pmatrix}\to\begin{pmatrix}1&0&0\\0&1&-2\\0&0&0\end{pmatrix}$，得基础解系 $\alpha_2=(0,2,1)$，即 $\lambda=5$ 的特征向量。
当 $\lambda=6$ 时，由 $(6E-A)x=0$，即 $\begin{pmatrix}5&-1&2\\-1&1&0\\2&0&1\end{pmatrix}\to\begin{pmatrix}1&-1&0\\0&2&1\\0&0&0\end{pmatrix}$，得基础解系 $\alpha_3=(1,1,-2)^T$，即 $\lambda=6$ 的特征向量。
对于实对称矩阵，特征值不同特征向量已正交，故只需单位化，有 $\gamma_1=\dfrac{1}{\sqrt{30}}\begin{pmatrix}5\\-1\\2\end{pmatrix},\gamma_2=\dfrac{1}{\sqrt5}\begin{pmatrix}0\\2\\1\end{pmatrix},\gamma_3=\dfrac{1}{\sqrt6}\begin{pmatrix}1\\1\\-2\end{pmatrix}$。
那么，令 $P=(\gamma_1,\gamma_2,\gamma_3)=\begin{pmatrix}\frac{5}{\sqrt{30}}&0&\frac{1}{\sqrt6}\\-\frac{1}{\sqrt{30}}&\frac{2}{\sqrt5}&\frac{1}{\sqrt6}\\\frac{2}{\sqrt{30}}&\frac{1}{\sqrt5}&-\frac{2}{\sqrt6}\end{pmatrix}$，经正交变换 $x=Py$，二次型化为标准形 $f(x_1,x_2,x_3)=x^TAx=y^T\Lambda y=5y_2^2+6y_3^2$。
(3) $x^Tx=(Py)^T(Py)=y^TP^TPy=y^Ty=y_1^2+y_2^2+y_3^2=2$，$x^TAx=5y_2^2+6y_3^2\leqslant6(y_1^2+y_2^2+y_3^2)$，` },
      { p: 161, md: R`所以，$f_{max}=12$。
【评注】要掌握用正交变换化二次型为标准形的方法，标准形中平方项的系数是二次型矩阵的特征值，所用的正交变换矩阵就是经过改造的二次型矩阵的特征向量。具体解题步骤如下：
(1) 写出二次型矩阵 $A$；(2) 求矩阵 $A$ 的特征值；(3) 求矩阵 $A$ 的特征向量；(4) 改造特征向量（单位化、Schmidt 正交化）$\gamma_1,\cdots,\gamma_n$；(5) 构造正交矩阵 $P=(\gamma_1,\gamma_2,\cdots,\gamma_n)$。则经坐标变换 $x=Py$，得 $x^TAx=y^T\Lambda y=\lambda_1y_1^2+\lambda_2y_2^2+\cdots+\lambda_ny_n^2$。
【注意】特征值的顺序与正交矩阵 $P$ 中对应的特征向量的顺序是一致的。所涉及的求参数的方法与特征值中所归纳的方法是一样的。

【例6.4】（2003,3）设二次型 $f(x_1,x_2,x_3)=x^TAx=ax_1^2+2x_2^2-2x_3^2+2bx_1x_3\ (b>0)$，其中二次型矩阵 $A$ 的特征值之和为 1，特征值之积为 $-12$。
(1) 求 $a,b$ 的值；(2) 利用正交变换将二次型 $f$ 化为标准形，并写出所用的正交变换和对应的正交矩阵。
【解】(1) 二次型 $f$ 的矩阵为 $A=\begin{pmatrix}a&0&b\\0&2&0\\b&0&-2\end{pmatrix}$。设 $A$ 的特征值为 $\lambda_i(i=1,2,3)$，由题设，有 $\sum\lambda_i=a-2+(-2)=1$，$\prod\lambda_i=|A|=2(-2a-b^2)=-12$，解出 $a=1,b=2$（已知 $b>0$）。
(2) 由矩阵 $A$ 的特征多项式
$$|\lambda E-A|=\begin{vmatrix}\lambda-1&0&-2\\0&\lambda-2&0\\-2&0&\lambda+2\end{vmatrix}=(\lambda-2)\begin{vmatrix}\lambda-1&2\\-2&\lambda+2\end{vmatrix}=(\lambda-2)^2(\lambda+3),$$
解出 $A$ 的特征值 $\lambda_1=\lambda_2=2,\lambda_3=-3$。
对 $\lambda=2$，由 $(2E-A)x=0$，即 $\begin{pmatrix}1&0&-2\\0&0&0\\-2&0&4\end{pmatrix}\to\begin{pmatrix}1&0&-2\\0&0&0\\0&0&0\end{pmatrix}$，` },
      { p: 162, md: R`得基础解系 $\alpha_1=(0,1,0)^T,\alpha_2=(2,0,1)^T$，即 $\lambda=2$ 的线性无关的特征向量。
对 $\lambda=-3$，由 $(-3E-A)x=0$，即 $\begin{pmatrix}-4&0&-2\\0&-5&0\\-2&0&-1\end{pmatrix}\to\begin{pmatrix}2&0&1\\0&1&0\\0&0&0\end{pmatrix}$，得基础解系 $\alpha_3=(1,0,-2)^T$，即 $\lambda=-3$ 的特征向量。
由于 $\alpha_1,\alpha_2$ 已正交，故只需单位化，有 $\gamma_1=(0,1,0)^T,\gamma_2=\dfrac{1}{\sqrt5}(2,0,1)^T,\gamma_3=\dfrac{1}{\sqrt5}(1,0,-2)^T$。
那么，令 $P=(\gamma_1,\gamma_2,\gamma_3)=\begin{pmatrix}0&\frac{2}{\sqrt5}&\frac{1}{\sqrt5}\\1&0&0\\0&\frac{1}{\sqrt5}&-\frac{2}{\sqrt5}\end{pmatrix}$，则在正交变换 $x=Py$ 下，二次型 $f$ 有标准形 $f(x_1,x_2,x_3)=x^TAx=y^T\Lambda y=2y_1^2+2y_2^2-3y_3^2$。

【例6.5】已知二次型 $f(x_1,x_2,x_3)=x_1^2+x_2^2+x_3^2-4x_1x_2-4x_1x_3+2ax_2x_3$ 通过正交变换 $x=Py$ 化成标准形 $f=3y_1^2+3y_2^2+by_3^2$，求参数 $a,b$ 及正交矩阵 $P$。
【解】二次型 $f$ 及其标准形的矩阵分别是 $A=\begin{pmatrix}1&-2&-2\\-2&1&a\\-2&a&1\end{pmatrix}$ 与 $\Lambda=\begin{pmatrix}3&&\\&3&\\&&b\end{pmatrix}$。在正交变换下 $A$ 与 $\Lambda$ 相似，故有
$$\begin{cases}1+1+1=3+3+b\\|3E-A|=\begin{vmatrix}2&2&2\\2&2&-a\\2&-a&2\end{vmatrix}=-2(a+2)^2=0\end{cases}$$
解出：$a=-2,b=-3$。那么，矩阵 $A$ 的特征值是 $3,3,-3$。
对 $\lambda=3$，由 $(3E-A)x=0$，即 $\begin{pmatrix}2&2&2\\2&2&2\\2&2&2\end{pmatrix}\to\begin{pmatrix}1&1&1\\0&0&0\\0&0&0\end{pmatrix}$，得基础解系 $\alpha_1=(-1,1,0)^T,\alpha_2=(-1,0,1)^T$，即 $\lambda=3$ 的线性无关的特征向量。
对 $\lambda=-3$，由 $(-3E-A)x=0$，即 $\begin{pmatrix}-4&2&2\\2&-4&2\\2&2&-4\end{pmatrix}\to\begin{pmatrix}1&-2&1\\0&1&-1\\0&0&0\end{pmatrix}$，` },
      { p: 163, md: R`得基础解系 $\alpha_3=(1,1,1)^T$，即 $\lambda=-3$ 的特征向量。
因为 $\lambda=3$ 的特征向量 $\alpha_1,\alpha_2$ 不正交，故需 Schmidt 正交化。令 $\beta_1=\alpha_1=\begin{pmatrix}-1\\1\\0\end{pmatrix}$，则 $\beta_2=\alpha_2-\dfrac{(\alpha_2,\beta_1)}{(\beta_1,\beta_1)}\beta_1=\begin{pmatrix}-1\\0\\1\end{pmatrix}-\dfrac12\begin{pmatrix}-1\\1\\0\end{pmatrix}=\dfrac12\begin{pmatrix}-1\\-1\\2\end{pmatrix}$。
单位化，有 $\gamma_1=\dfrac{1}{\sqrt2}\begin{pmatrix}-1\\1\\0\end{pmatrix},\gamma_2=\dfrac{1}{\sqrt6}\begin{pmatrix}1\\1\\-2\end{pmatrix},\gamma_3=\dfrac{1}{\sqrt3}\begin{pmatrix}1\\1\\1\end{pmatrix}$。
那么，所用坐标变换 $x=Py$ 中，正交矩阵 $P=(\gamma_1,\gamma_2,\gamma_3)=\begin{pmatrix}-\frac{1}{\sqrt2}&\frac{1}{\sqrt6}&\frac{1}{\sqrt3}\\\frac{1}{\sqrt2}&\frac{1}{\sqrt6}&\frac{1}{\sqrt3}\\0&-\frac{2}{\sqrt6}&\frac{1}{\sqrt3}\end{pmatrix}$。

【例6.6】用配方法化二次型 $f(x_1,x_2,x_3)=x_1^2+5x_2^2+5x_3^2+2x_1x_2-4x_1x_3$ 为标准形，并写出所用坐标变换。
【解】$f(x_1,x_2,x_3)=x_1^2+5x_2^2+5x_3^2+2x_1x_2-4x_1x_3=x_1^2+2x_1(x_2-2x_3)+(x_2-2x_3)^2+5x_2^2+5x_3^2-(x_2-2x_3)^2=(x_1+x_2-2x_3)^2+4x_2^2+4x_2x_3+x_3^2=(x_1+x_2-2x_3)^2+(2x_2+x_3)^2$。
令 $\begin{cases}y_1=x_1+x_2-2x_3\\y_2=\quad\quad2x_2+x_3\\y_3=\quad\quad\quad\quad x_3\end{cases}$，亦即 $\begin{cases}x_1=y_1-\frac12y_2+\frac52y_3\\x_2=\quad\quad\frac12y_2-\frac12y_3\\x_3=\quad\quad\quad\quad y_3\end{cases}$，则有 $f=y_1^2+y_2^2$。

【例6.7】用配方法化二次型` },
      { p: 164, md: R`$f(x_1,x_2,x_3)=2x_1x_2+4x_1x_3$ 为标准形，并写出所用坐标变换。
【解】在 $f$ 中不含平方项，由于含有 $x_1x_2$，故可先令 $\begin{cases}x_1=y_1+y_2\\x_2=y_1-y_2\\x_3=y_3\end{cases}$ 作出平方项，然后再配方即
$$f=2x_1x_2+4x_1x_3=2(y_1+y_2)(y_1-y_2)+4(y_1+y_2)y_3=2y_1^2-2y_2^2+4y_1y_3+4y_2y_3=2y_1^2+4y_1y_3+2y_3^2-2y_2^2+4y_2y_3-2y_3^2=2(y_1+y_3)^2-2(y_2-y_3)^2.$$
再令 $\begin{cases}z_1=y_1+y_3\\z_2=y_2-y_3\\z_3=y_3\end{cases}$，即 $\begin{cases}y_1=z_1-z_3\\y_2=z_2+z_3\\y_3=z_3\end{cases}$，即经坐标变换 $\begin{cases}x_1=z_1+z_2\\x_2=z_1-z_2-2z_3\\x_3=z_3\end{cases}$，二次型化为标准形 $f=2z_1^2-2z_2^2$。

#### 二次型的正定性
【例6.8】二次型 $x_1^2+4x_2^2+4x_3^2+2tx_1x_2-2x_1x_3+4x_2x_3$ 正定，则 $t$______。
【分析】二次型矩阵 $A=\begin{pmatrix}1&t&-1\\t&4&2\\-1&2&4\end{pmatrix}$ 的顺序主子式应全大于 $0$，即 $\Delta_1=1>0$，$\Delta_2=\begin{vmatrix}1&t\\t&4\end{vmatrix}=4-t^2>0\Rightarrow t\in(-2,2)$，$\Delta_3=|A|=-4t^2-4t+8>0\Rightarrow t\in(-2,1)$。可见 $t\in(-2,1)$ 时，二次型正定。

【例6.9】设 $A$ 是 3 阶实对称矩阵，且满足 $A^2+2A=0$，若 $kA+E$ 是正定矩阵，则 $k$______。` },
      { p: 165, md: R`【分析】由 $A^2+2A=0$ 知矩阵 $A$ 的特征值是 $0$ 或 $-2$，那么 $kA$ 的特征值是 $0$ 或 $-2k$，$kA+E$ 的特征值是 $1$ 或 $1-2k$。又因正定的充分必要条件是特征值全大于 $0$，故 $k<\dfrac12$。

【例6.10】下列矩阵中，正定矩阵是
(A) $\begin{pmatrix}1&2&1\\2&5&0\\1&0&-3\end{pmatrix}$ (B) $\begin{pmatrix}1&3&4\\3&9&2\\4&2&6\end{pmatrix}$ (C) $\begin{pmatrix}1&2&3\\2&5&7\\3&7&10\end{pmatrix}$ (D) $\begin{pmatrix}2&-2&0\\-2&5&-1\\0&-1&2\end{pmatrix}$
【分析】(A) 中 $a_{33}=-3<0$，(B) 中二阶主子式 $\begin{vmatrix}1&3\\3&9\end{vmatrix}=0$，(C) 中行列式 $|A|=0$，它们均不是正定矩阵。所以应选 (D)。或直接地，(D) 中三个顺序主子式 $\Delta_1=2,\ \Delta_2=6,\ \Delta_3=5$ 全大于 $0$，而知 (D) 正定。

【例6.11】已知 $A$ 与 $A-E$ 均是 $n$ 阶正定矩阵，证明 $E-A^{-1}$ 是正定矩阵。
【证】（特征值法）(1) 由于 $(E-A^{-1})^T=E^T-(A^{-1})^T=E-(A^T)^{-1}=E-A^{-1}$，知矩阵 $E-A^{-1}$ 是对称矩阵。(2) 设 $\lambda$ 是矩阵 $A$ 的特征值，那么 $A-E$ 的特征值是 $\lambda-1$，$E-A^{-1}$ 的特征值是 $1-\dfrac1\lambda$。由 $A,A-E$ 正定，知 $\lambda>0,\lambda-1>0$。故 $E-A^{-1}$ 的特征值 $\dfrac{\lambda-1}{\lambda}>0$。所以矩阵 $E-A^{-1}$ 正定。

【例6.12】（1999,3）设 $A$ 为 $m\times n$ 实矩阵，$E$ 为 $n$ 阶单位矩阵，已知矩阵 $B=\lambda E+A^TA$，试证：当 $\lambda>0$ 时，矩阵 $B$ 为正定矩阵。
【证】（定义法）(1) 因为 $B^T=(\lambda E+A^TA)^T=(\lambda E)^T+(A^TA)^T=\lambda E+A^T(A^T)^T=B$，所以 $B$ 是 $n$ 阶实对称矩阵。(2) 构造二次型 $x^TBx$，有
$$x^TBx=x^T(\lambda E+A^TA)x=\lambda x^Tx+x^TA^TAx=\lambda x^Tx+(Ax)^T(Ax).$$
因为 $\forall x\neq0$，恒有 $x^Tx>0$，$(Ax)^T(Ax)\geqslant0$，所以，当 $\lambda>0$ 时，$\forall x\neq0$，恒有 $x^TBx=\lambda x^Tx+(Ax)^T(Ax)>0$，即二次型 $x^TBx$ 正定，故 $B$ 是正定矩阵。` },
      { p: 166, md: R`【证法2】（用特征值）$B$ 的对称性略，设 $\mu$ 是矩阵 $A^TA$ 的任一特征值，$X$ 是相应的特征向量，即 $A^TAX=\mu X$，$X\neq0$，用 $X^T$ 左乘上式的两端得，$(AX)^T(AX)=\mu X^TX$。由 $X\neq0$，必有 $X^TX>0$，$(AX)^T(AX)\geqslant0$，故 $\mu\geqslant0$。因为 $B=\lambda E+A^TA$ 的特征值是 $\lambda+\mu$，可见当 $\lambda>0$ 时必有 $\lambda+\mu>0$，即 $B$ 的特征值全大于 $0$。所以 $B$ 是正定矩阵。
【评注】要会用定义法，要熟悉内积 $x^Tx$，$(Ax)^T(Ax)$。本题是当年数学三考的最不好的一个题，得零分者居然高达 62%。

【例6.13】设 $A$ 是 $n$ 阶正定矩阵，$B$ 是 $n$ 阶反对称矩阵，证明矩阵 $A-B^2$ 可逆。
【证】因为 $A$ 是正定矩阵，知 $A^T=A$，$B$ 是反对称矩阵 $B^T=-B$。于是 $(A-B^2)^T=(A+B^TB)^T=A^T+(B^TB)^T=A^T+B^TB=A-B^2$，即 $A-B^2$ 是对称矩阵。构造二次型 $x^T(A-B^2)x$，有 $x^T(A-B^2)x=x^T(A+B^TB)x=x^TAx+(Bx)^T(Bx)$。因 $\forall x\neq0$，恒有 $x^TAx>0$，$(Bx)^T(Bx)\geqslant0$，即 $\forall x\neq0$，恒有 $x^T(A-B^2)x>0$，所以 $x^T(A-B^2)x$ 是正定二次型，那么 $|A-B^2|>0$，矩阵 $A-B^2$ 可逆。

【例6.14】已知 $A$ 是 $n$ 阶正定矩阵，证明存在 $n$ 阶正定矩阵 $B$，使 $A=B^2$。
【证】因为 $A$ 是正定矩阵，所以 $A$ 是实对称矩阵。故存在正交矩阵 $P$ 使 $P^{-1}AP=\Lambda=\begin{pmatrix}\lambda_1&&&&\\&\lambda_2&&&\\&&\ddots&\\&&&\lambda_n\end{pmatrix}$，且 $\lambda_i>0\ (i=1,2,\cdots,n)$。那么
$$A=P\Lambda P^{-1}=P\begin{pmatrix}\sqrt{\lambda_1}&&&&\\&\sqrt{\lambda_2}&&&\\&&\ddots&\\&&&\sqrt{\lambda_n}\end{pmatrix}\begin{pmatrix}\sqrt{\lambda_1}&&&&\\&\sqrt{\lambda_2}&&&\\&&\ddots&\\&&&\sqrt{\lambda_n}\end{pmatrix}P^{-1}=P\begin{pmatrix}\sqrt{\lambda_1}&&&&\\&\sqrt{\lambda_2}&&&\\&&\ddots&\\&&&\sqrt{\lambda_n}\end{pmatrix}P^{-1}P\begin{pmatrix}\sqrt{\lambda_1}&&&&\\&\sqrt{\lambda_2}&&&\\&&\ddots&\\&&&\sqrt{\lambda_n}\end{pmatrix}P^{-1}=B^2,$$
其中` },
      { p: 167, md: R`$$B=P\begin{pmatrix}\sqrt{\lambda_1}&&&&\\&\sqrt{\lambda_2}&&&\\&&\ddots&\\&&&\sqrt{\lambda_n}\end{pmatrix}P^{-1}.$$
一方面 $B\sim\begin{pmatrix}\sqrt{\lambda_1}&&&&\\&\sqrt{\lambda_2}&&&\\&&\ddots&\\&&&\sqrt{\lambda_n}\end{pmatrix}$，说明矩阵 $B$ 的特征值是 $\sqrt{\lambda_1},\sqrt{\lambda_2},\cdots,\sqrt{\lambda_n}$，均大于 $0$。另一方面，由 $P$ 是正交矩阵 $P^{-1}=P^T$，知 $B$ 是对称矩阵。从而 $B$ 是正定矩阵，且满足 $A=B^2$。

【例6.15】已知 $A$ 是 $n$ 阶正定矩阵，$n$ 维非零列向量 $\alpha_1,\alpha_2,\cdots,\alpha_s$ 满足 $\alpha_i^TA\alpha_j=0\ (i\neq j,\ i,j=1,2,\cdots,s)$，证明 $\alpha_1,\alpha_2,\cdots,\alpha_s$ 线性无关。
【证】设 $k_1\alpha_1+k_2\alpha_2+\cdots+k_s\alpha_s=0$ (1)。用 $\alpha_1^TA$ 左乘 (1) 式，有 $k_1\alpha_1^TA\alpha_1+k_2\alpha_1^TA\alpha_2+\cdots+k_s\alpha_1^TA\alpha_s=0$ (2)。因为 $\alpha_1^TA\alpha_j=0\ (i\neq j$ 时$)$，(2) 式为 $k_1\alpha_1^TA\alpha_1=0$ (3)。因为 $A$ 正定，$\alpha_1\neq0$，有 $\alpha_1^TA\alpha_1>0$。故必有 $k_1=0$。同理可证 $k_2=0,\cdots,k_s=0$。因此向量组 $\alpha_1,\alpha_2,\cdots,\alpha_s$ 线性无关。

#### 矩阵的等价、相似、合同
$A$ 与 $B$ 等价 $\Leftrightarrow A$ 经过初等变换得到 $B$ $\Leftrightarrow PAQ=B$，其中 $P,Q$ 可逆 $\Leftrightarrow r(A)=r(B)$，$A$ 与 $B$ 同型矩阵
$A$ 与 $B$ 相似 $\Leftrightarrow P^{-1}AP=B$
$A$ 与 $B$ 合同 $\Leftrightarrow C^TAC=B$，$C$ 可逆 $\Leftrightarrow x^TAx$ 与 $x^TBx$ 有相同的正、负惯性指数

【例6.16】矩阵 $A=\begin{pmatrix}1&0\\0&2\end{pmatrix}$，$B=\begin{pmatrix}1&0\\0&4\end{pmatrix}$ 等价、合同但不相似。
因为秩 $r(A)=r(B)$，所以 $A$ 与 $B$ 等价。因为 $A$ 与 $B$ 特征值不相同，所以 $A,B$ 不相似。因为 $x^TAx=x_1^2+2x_2^2$ 与 $x^TBx=x_1^2+4x_2^2$ 有相同的正、负惯性指数，所以 $A$ 与 $B$ 合同。或直接地` },
      { p: 168, md: R`$$\begin{pmatrix}1&\\&\sqrt2\end{pmatrix}^T\begin{pmatrix}1&\\&2\end{pmatrix}\begin{pmatrix}1&\\&\sqrt2\end{pmatrix}=\begin{pmatrix}1&\\&4\end{pmatrix},$$
而知 $A$ 与 $B$ 合同。

【例6.17】矩阵 $A=\begin{pmatrix}1&\\&2\end{pmatrix}$ 与 $B=\begin{pmatrix}1&\\&-4\end{pmatrix}$ 不合同。
这是因为：如果 $C^TAC=B$，那么 $|B|=|C^TAC|=|C|^2|A|>0$ 而 $|B|<0$。

【例6.18】判断 $A=\begin{pmatrix}1&1&1\\1&1&1\\1&1&1\end{pmatrix},\ B=\begin{pmatrix}3&0&0\\0&0&0\\0&0&0\end{pmatrix}$ 是否等价、相似、合同。
【分析】因为秩 $r(A)=1,r(B)=1$，所以 $A$ 与 $B$ 等价。由 $|\lambda E-A|=\lambda^3-3\lambda^2$，知矩阵 $A$ 的特征值是 $3,0,0$，又因 $A$ 是实对称矩阵。所以 $A$ 必能相似对角化，且 $A\sim\begin{pmatrix}3&&\\&0&\\&&0\end{pmatrix}$，即 $A$ 与 $B$ 相似。实对称矩阵 $A\sim B\Rightarrow A$ 与 $B$ 有相同的特征值 $\Rightarrow x^TAx$ 与 $x^TBx$ 有相同的正、负惯性指数 $\Rightarrow A$ 与 $B$ 合同。所以本题 $A$ 与 $B$ 相似、合同、等价均成立。
【评注】实对称矩阵 $A$ 与 $B$ 相似 $\Rightarrow A$ 与 $B$ 合同，但 $A$ 与 $B$ 合同 $\nRightarrow A$ 与 $B$ 相似。

【例6.19】设 $A$ 是 3 阶实对称矩阵，将矩阵 $A$ 的 1,2 两行互换后再 1,2 两列互换得到的矩阵是 $B$，试判断 $A$ 与 $B$ 是否等价、相似、合同？
【解】矩阵 $A$ 经初等变换得到矩阵 $B$，故 $A$ 与 $B$ 必等价。用初等矩阵描述，有 $\begin{pmatrix}0&1&0\\1&0&0\\0&0&1\end{pmatrix}A\begin{pmatrix}0&1&0\\1&0&0\\0&0&1\end{pmatrix}=B$。因为 $\begin{pmatrix}0&1&0\\1&0&0\\0&0&1\end{pmatrix}^{-1}=\begin{pmatrix}0&1&0\\1&0&0\\0&0&1\end{pmatrix}$，$\begin{pmatrix}0&1&0\\1&0&0\\0&0&1\end{pmatrix}^T=\begin{pmatrix}0&1&0\\1&0&0\\0&0&1\end{pmatrix}$，所以 $A$ 与 $B$ 既相似也合同。` }
    ],
    quiz: [
      { q: R`二次型 $x^TAx$ 的矩阵 $A$ 是`, options: [R`实对称矩阵`, R`可逆矩阵`, R`对角矩阵`, R`正交矩阵`], answer: 0, explain: R`规定 $a_{ij}=a_{ji}$，故 $A^T=A$ 为实对称矩阵。` },
      { q: R`二次型的秩 $r(f)$ 指的是`, options: [R`$r(A)$`, R`正惯性指数`, R`负惯性指数`, R`$p+q$ 的平方`], answer: 0, explain: R`二次型的秩就是其矩阵的秩。` },
      { q: R`用正交变换化二次型为标准形，标准形中平方项的系数是`, options: [R`二次型矩阵的特征值`, R`矩阵的对角元素`, R`任意实数`, R`特征向量的模`], answer: 0, explain: R`正交变换下 $A$ 与 $\Lambda$ 相似，$\Lambda$ 的对角元即特征值。` },
      { q: R`$n$ 元二次型 $x^TAx$ 正定的充要条件是`, options: [R`正惯性指数 $p=n$`, R`$|A|>0$`, R`$a_{ii}>0$`, R`$r(A)=n`], answer: 0, explain: R`定理 6.6；$|A|>0$、$a_{ii}>0$ 只是必要条件。` },
      { q: R`$A$ 正定的充分必要条件是各阶顺序主子式`, options: [R`全大于 $0$`, R`全小于 $0$`, R`全等于 $0$`, R`之和大于 $0$`], answer: 0, explain: R`定理 6.6(4)。` },
      { q: R`实对称矩阵 $A$ 与 $B$ 相似，则`, options: [R`一定合同`, R`一定不合同`, R`不一定合同`, R`合同当且仅当可逆`], answer: 0, explain: R`实对称矩阵相似 $\Rightarrow$ 特征值相同 $\Rightarrow$ 正负惯性指数相同 $\Rightarrow$ 合同。` },
      { q: R`$A$ 与 $B$ 合同的充要条件是`, options: [R`$x^TAx$ 与 $x^TBx$ 有相同的正、负惯性指数`, R`$r(A)=r(B)$`, R`$A,B$ 有相同特征值`, R`$|A|=|B|`], answer: 0, explain: R`惯性定理；等价只需秩相同，相似需特征值相同。` },
      { q: R`$A$ 正定的必要条件是`, options: [R`$a_{ii}>0$ 且 $|A|>0$`, R`$a_{ii}<0$`, R`$|A|<0$`, R`$r(A)<n$`], answer: 0, explain: R`由例 6.6 及推论。` },
      { q: R`若 $A$ 是 $n$ 阶正定矩阵，则 $A$ 的特征值`, options: [R`全大于 $0$`, R`全小于 $0$`, R`有正有负`, R`全为 $0$`], answer: 0, explain: R`正定的充要条件之一。` },
      { q: R`配方法化二次型为标准形，所作的坐标变换`, options: [R`必须是可逆线性变换`, R`必须是正交变换`, R`可以不可逆`, R`必须是恒等变换`], answer: 0, explain: R`坐标变换要求变换矩阵可逆。` }
    ]
  };
})();
