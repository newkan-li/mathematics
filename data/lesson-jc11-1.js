window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["jc11_s0"] = {
    id: "jc11_s0",
    ch: "第五章 特征值和特征向量",
    title: "第五章 特征值和特征向量",
    book: "李永乐《数学复习全书·基础篇》",
    pages: [272, 283],
    img: "assets/img/jichu",
    content: [
      { p: 272, md: R`# 第五章　特征值和特征向量

## 本章考点

矩阵的特征值和特征向量的概念、性质　相似矩阵的概念及性质　矩阵可相似对角化的充分必要条件及相似对角矩阵　实对称矩阵的特征值、特征向量及其相似对角矩阵

## 一、特征值、特征向量

**定义**　设 \(A\) 是 \(n\) 阶矩阵，如果存在一个数 \(\lambda\) 及非零的 \(n\) 维列向量 \(\alpha\)，使得
\[
A\alpha=\lambda\alpha
\]
成立，则称 \(\lambda\) 是矩阵 \(A\) 的一个特征值，称非零向量 \(\alpha\) 是矩阵 \(A\) 属于特征值 \(\lambda\) 的一个特征向量.

由定义 \(A\alpha=\lambda\alpha,\alpha\ne0\)，即 \((\lambda E-A)\alpha=0,\alpha\ne0\)，可见特征向量 \(\alpha\) 是齐次方程组 \((\lambda E-A)x=0\) 的非零解.

**定义**　设 \(A=[a_{ij}]\) 为一个 \(n\) 阶矩阵，则行列式
\[
|\lambda E-A|=
\begin{vmatrix}
\lambda-a_{11}&-a_{12}&\cdots&-a_{1n}\\
-a_{21}&\lambda-a_{22}&\cdots&-a_{2n}\\
\vdots&\vdots&&\vdots\\
-a_{n1}&-a_{n2}&\cdots&\lambda-a_{nn}
\end{vmatrix}
\]
称为矩阵 \(A\) 的特征多项式，\(|\lambda E-A|=0\) 称为 \(A\) 的特征方程.

求特征值，特征向量的方法：

（1）先由 \(|\lambda E-A|=0\) 求矩阵 \(A\) 的特征值 \(\lambda_i\)（共 \(n\) 个）. 再由 \((\lambda_iE-A)x=0\) 求基础解系，即矩阵 \(A\) 属于特征值 \(\lambda_i\) 的线性无关的特征向量.

（2）用定义 \(A\alpha=\lambda\alpha\) 推理分析.

**定理 5.1**　如果 \(\lambda_1,\lambda_2,\cdots,\lambda_m\) 是矩阵 \(A\) 的互不相同的特征值，\(\alpha_1,\alpha_2,\cdots,\alpha_m\) 分别是与之对应的特征向量，则 \(\alpha_1,\alpha_2,\cdots,\alpha_m\) 线性无关.

**定理 5.2**　设 \(A\) 是 \(n\) 阶矩阵，\(\lambda_1,\lambda_2,\cdots,\lambda_n\) 是矩阵 \(A\) 的特征值，则

（1）\(\sum\lambda_i=\sum a_{ii}\)，

（2）\(|A|=\prod\lambda_i\).

**【注】**　如果 \(\alpha_1,\alpha_2,\cdots,\alpha_t\) 都是矩阵 \(A\) 的属于特征值 \(\lambda\) 的特征向量，那么当 \(k_1\alpha_1+k_2\alpha_2+\cdots+k_t\alpha_t\) 非零时，\(k_1\alpha_1+k_2\alpha_2+\cdots+k_t\alpha_t\) 仍是矩阵 \(A\) 属于特征值 \(\lambda\) 的特征向量.

如 \(A\alpha=\lambda\alpha,\alpha\ne0,\forall k\ne0\)，有 \(k\alpha\ne0\)，则
\[
A(k\alpha)=kA\alpha=k(\lambda\alpha)=\lambda(k\alpha)
\]
即若 \(\alpha\) 是矩阵 \(A\) 对应于特征值 \(\lambda\) 的特征向量，那么 \(k\alpha(k\ne0\text{ 时})\) 仍是 \(A\) 关于 \(\lambda\) 的特征向量.` },
      { p: 273, md: R`类似地，如 \(A\alpha_1=\lambda\alpha_1,A\alpha_2=\lambda\alpha_2\) 且 \(\alpha_1\ne0,\alpha_2\ne0\)，那么 \(\forall k_1,k_2\)，若 \(k_1\alpha_1+k_2\alpha_2\ne0\)

有
\[
\begin{aligned}
A(k_1\alpha_1+k_2\alpha_2)&=A(k_1\alpha_1)+A(k_2\alpha_2)\\
&=k_1A\alpha_1+k_2A\alpha_2\\
&=k_1(\lambda\alpha_1)+k_2(\lambda\alpha_2)\\
&=\lambda(k_1\alpha_1+k_2\alpha_2)
\end{aligned}
\]
即 \(k_1\alpha_1+k_2\alpha_2\) 仍是 \(A\) 关于 \(\lambda\) 的特征向量.

**例1**　求矩阵
\[
A=\begin{bmatrix}
17&-2&-2\\
-2&14&-4\\
-2&-4&14
\end{bmatrix}
\]
的特征值与特征向量.

**【解】**　由矩阵 \(A\) 的特征多项式
\[
|\lambda E-A|=
\begin{vmatrix}
\lambda-17&2&2\\
2&\lambda-14&4\\
2&4&\lambda-14
\end{vmatrix}
=
\begin{vmatrix}
\lambda-17&2&2\\
2&\lambda-14&4\\
0&18-\lambda&\lambda-18
\end{vmatrix}
=
\begin{vmatrix}
\lambda-17&4&2\\
2&\lambda-10&4\\
0&0&\lambda-18
\end{vmatrix}
\]
\[
=(\lambda-18)(\lambda^2-27\lambda+162)=(\lambda-18)^2(\lambda-9)
\]
得到矩阵 \(A\) 的特征值是 \(\lambda_1=\lambda_2=18,\lambda_3=9\).

当 \(\lambda=18\) 时，由 \((18E-A)x=0\)，即
\[
\begin{bmatrix}
1&2&2\\
2&4&4\\
2&4&4
\end{bmatrix}\to
\begin{bmatrix}
1&2&2\\
0&0&0\\
0&0&0
\end{bmatrix}
\]
得基础解系 \(\alpha_1=[-2,1,0]^{\mathrm T},\alpha_2=[-2,0,1]^{\mathrm T}\).

因此属于特征值 \(\lambda=18\) 的特征向量是 \(k_1\alpha_1+k_2\alpha_2\)（\(k_1,k_2\) 不全为 \(0\)）.

当 \(\lambda=9\) 时，由 \((9E-A)x=0\)，即
\[
\begin{bmatrix}
-8&2&2\\
2&-5&4\\
2&4&-5
\end{bmatrix}\to
\begin{bmatrix}
2&-5&4\\
2&4&-5\\
-8&2&2
\end{bmatrix}\to
\begin{bmatrix}
2&-5&4\\
0&9&-9\\
0&-18&18
\end{bmatrix}\to
\begin{bmatrix}
2&-5&4\\
0&1&-1\\
0&0&0
\end{bmatrix}
\]
\[
\to
\begin{bmatrix}
2&0&-1\\
0&1&-1\\
0&0&0
\end{bmatrix}\to
\begin{bmatrix}
1&0&-\frac12\\
0&1&-1\\
0&0&0
\end{bmatrix}
\]
得基础解系 \(\alpha_3=[1,2,2]^{\mathrm T}\).

因此属于特征值 \(\lambda=9\) 的特征向量是 \(k_3\alpha_3(k_3\ne0)\).

**例2**　求
\[
A=\begin{bmatrix}
-1&1&0\\
-4&3&0\\
1&0&2
\end{bmatrix}
\]
的特征值和特征向量.

**【解】**　由特征多项式` },
      { p: 274, md: R`\[
|\lambda E-A|=
\begin{vmatrix}
\lambda+1&-1&0\\
4&\lambda-3&0\\
-1&0&\lambda-2
\end{vmatrix}
=(\lambda-2)
\begin{vmatrix}
\lambda+1&-1\\
4&\lambda-3
\end{vmatrix}
=(\lambda-2)(\lambda^2-2\lambda+1)
\]
得到矩阵 \(A\) 的特征值 \(\lambda_1=\lambda_2=1,\lambda_3=2\).

当 \(\lambda_1=\lambda_2=1\) 时，解方程 \((E-A)x=0\)
\[
\begin{bmatrix}
2&-1&0\\
4&-2&0\\
-1&0&-1
\end{bmatrix}\to
\begin{bmatrix}
1&0&1\\
0&1&2\\
0&0&0
\end{bmatrix}
\]
得基础解系 \(\alpha_1=(-1,-2,1)^{\mathrm T}\).

所以特征值 \(\lambda_1=\lambda_2=1\) 的特征向量为 \(k_1\alpha_1(k_1\ne0)\).

当 \(\lambda_3=2\) 时，解方程 \((2E-A)x=0\)
\[
\begin{bmatrix}
3&-1&0\\
4&-1&0\\
-1&0&0
\end{bmatrix}\to
\begin{bmatrix}
1&0&0\\
0&1&0\\
0&0&0
\end{bmatrix}
\]
得基础解系 \(\alpha_2=(0,0,1)^{\mathrm T}\). 所以特征值 \(\lambda_3=2\) 的特征向量为 \(k_2\alpha_2(k_2\ne0)\).

**【注】**　通过例1和例2大家应当注意到当特征值是二重根时，有可能只有一个线性无关的特征向量，也可能有两个线性无关的特征向量，这一点在后面相似对角化问题上是重要的.

**例3**　求
\[
A=\begin{bmatrix}
-2&-1&2\\
0&-1&4\\
1&0&1
\end{bmatrix}
\]
的特征值，特征向量.

**【解】**　由特征多项式
\[
|\lambda E-A|=
\begin{vmatrix}
\lambda+2&1&-2\\
0&\lambda+1&-4\\
-1&0&\lambda-1
\end{vmatrix}
=
\begin{vmatrix}
\lambda+2&1&0\\
0&\lambda+1&2\lambda-2\\
-1&0&\lambda-1
\end{vmatrix}
\]
\[
=
\begin{vmatrix}
\lambda+2&1&0\\
2&\lambda+1&0\\
-1&0&\lambda-1
\end{vmatrix}
=(\lambda-1)(\lambda^2+3\lambda)
\]
矩阵 \(A\) 的特征值：\(\lambda_1=1,\lambda_2=0,\lambda_3=-3\).

对 \(\lambda=1\)，由 \((E-A)x=0\)，
\[
E-A=
\begin{bmatrix}
3&1&-2\\
0&2&-4\\
-1&0&0
\end{bmatrix}\to
\begin{bmatrix}
1&0&0\\
0&1&-2\\
0&0&0
\end{bmatrix}
\]
基础解系 \(\alpha_1=(0,2,1)^{\mathrm T}\).

\(\lambda=1\) 的所有特征向量：\(k_1\alpha_1=k_1(0,2,1)^{\mathrm T},k_1\ne0\).

对 \(\lambda=0\)，由 \((0E-A)x=0\)，
\[
0E-A=
\begin{bmatrix}
2&1&-2\\
0&1&-4\\
-1&0&-1
\end{bmatrix}\to
\begin{bmatrix}
1&0&1\\
0&1&-4\\
0&0&0
\end{bmatrix}
\]
基础解系 \(\alpha_2=(-1,4,1)^{\mathrm T}\).

\(\lambda=0\) 的所有特征向量：\(k_2\alpha_2=k_2(-1,4,1)^{\mathrm T},k_2\ne0\).` },
      { p: 275, md: R`对 \(\lambda=-3\)，由 \((-3E-A)x=0\)，
\[
-3E-A=
\begin{bmatrix}
-1&1&-2\\
0&-2&-4\\
-1&0&-4
\end{bmatrix}\to
\begin{bmatrix}
1&0&4\\
0&1&2\\
0&0&0
\end{bmatrix}
\]
基础解系 \(\alpha_3=(-4,-2,1)^{\mathrm T}\).

\(\lambda=-3\) 的所有特征向量：\(k_3\alpha_3=k_3(-4,-2,1)^{\mathrm T},k_3\ne0\).

**例4**　设 \(\lambda\) 是 \(n\) 阶矩阵 \(A\) 的特征值. 证明

（1）\(\lambda+k\) 是 \(A+kE\) 的特征值.

（2）\(\lambda^m\) 是 \(A^m\) 的特征值.

**【证】**　因 \(\lambda\) 是 \(A\) 的特征值，设 \(\alpha\) 是对应的特征向量.

即 \(A\alpha=\lambda\alpha,\alpha\ne0\).

（1）\((A+kE)\alpha=A\alpha+(kE)\alpha=\lambda\alpha+k\alpha=(\lambda+k)\alpha,\alpha\ne0\)，

所以 \(\lambda+k\) 是 \(A+kE\) 的特征值.

（2）由 \(A\alpha=\lambda\alpha,\alpha\ne0\)，有
\[
A^2\alpha=A(A\alpha)=A(\lambda\alpha)=\lambda A\alpha=\lambda^2\alpha
\]
递推地，\(A^m\alpha=\lambda^m\alpha,\alpha\ne0\).

所以 \(\lambda^m\) 是 \(A^m\) 的特征值.

**例5**　已知 \(A\) 是3阶矩阵，特征值是 \(-1,0,4\)，又知 \(A+B=2E\)，则矩阵 \(B\) 的特征值是____.

**【分析】**　设矩阵 \(A\) 属于特征值 \(-1\) 的特征向量是 \(\alpha_1\)，即 \(A\alpha_1=-\alpha_1\).

由 \(A+B=2E\) 有 \(B=2E-A\)，那么
\[
B\alpha_1=(2E-A)\alpha_1=2\alpha_1-A\alpha_1=3\alpha_1
\]
所以，\(3\) 是矩阵 \(B\) 的一个特征值，\(\alpha_1\) 是矩阵 \(B\) 关于特征值 \(\lambda=3\) 的特征向量.

类似地，由 \(A\alpha_2=0\alpha_2,A\alpha_3=4\alpha_3\)

知 \(B\alpha_2=(2E-A)\alpha_2=2\alpha_2,B\alpha_3=(2E-A)\alpha_3=-2\alpha_3\).

可知矩阵 \(B\) 的特征值是 \(3,2,-2\).

**例6**　设 \(A\) 是3阶矩阵，有特征值 \(1,-1,2\)，则下列矩阵中可逆矩阵是

（A）\(A+E\).　　　（B）\(A-E\).　　　（C）\(A+2E\).　　　（D）\(A-2E\).

**【分析】**　因 \(A\) 的特征值是 \(1,-1,2\). 于是

\(A+E\) 的特征值是 \(2,0,3\).

\(A-E\) 的特征值是 \(0,-2,1\).

\(A+2E\) 的特征值是 \(3,1,4\).

\(A-2E\) 的特征值是 \(-1,-3,0\).

又 \(|A|=\prod\lambda_i\)，故应选（C）.

**例7**　已知 \(A\) 是3阶矩阵，且 \(A^2+2A-3E=O\).` },
      { p: 276, md: R`证明矩阵 \(A\) 的特征值只能是 \(1\) 或 \(-3\).

**【证】**　设 \(\lambda\) 是 \(A\) 的特征值，\(\alpha\) 是其对应特征向量，则 \(A\alpha=\lambda\alpha,\alpha\ne0\)，

那么 \(A^2\alpha=A(\lambda\alpha)=\lambda A\alpha=\lambda^2\alpha\)

由 \(A^2+2A-3E=O\) 得 \((A^2+2A-3E)\alpha=0\).

即 \((\lambda^2+2\lambda-3)\alpha=0,\alpha\ne0\)

故 \(\lambda^2+2\lambda-3=(\lambda-1)(\lambda+3)=0\)

所以矩阵 \(A\) 的特征值只能是 \(1\) 或 \(-3\).

**例8**　已知 \(\alpha=(1,1,-1)^{\mathrm T}\) 是矩阵
\[
A=\begin{bmatrix}
2&-1&2\\
5&a&3\\
-1&b&-2
\end{bmatrix}
\]
的一个特征向量，则 \(a=\)____，\(b=\)____.

**【分析】**　设 \(\alpha\) 是对应于特征值 \(\lambda\) 的特征向量，即 \(A\alpha=\lambda\alpha\)，

那么
\[
\begin{bmatrix}
2&-1&2\\
5&a&3\\
-1&b&-2
\end{bmatrix}
\begin{bmatrix}
1\\1\\-1
\end{bmatrix}
=\lambda
\begin{bmatrix}
1\\1\\-1
\end{bmatrix}
\]
即
\[
\begin{cases}
2-1-2=\lambda,\\
5+a-3=\lambda,\\
-1+b+2=-\lambda
\end{cases}
\]
得 \(a=-3,b=0\).

### 练习 5.1

（1）矩阵
\[
A=\begin{bmatrix}
3&-4&-4\\
0&2&0\\
2&-2&-3
\end{bmatrix}
\]
，则 \(A\) 有一个特征向量

（A）\((1,0,-1)^{\mathrm T}\).　　（B）\((3,3,-6)^{\mathrm T}\).　　（C）\((1,1,-2)^{\mathrm T}\).　　（D）\((4,-1,2)^{\mathrm T}\).

（2）设 \(A\) 是3阶可逆矩阵，\(A^*\) 是 \(A\) 的伴随矩阵，如果 \(A\) 的特征值是 \(1,2,3\)，那么 \((A^*)^2+E\) 的最大特征值是____.

（3）求矩阵 \(A\) 的特征值，特征向量. \(A=\begin{bmatrix}1&1&-1\\1&-2&-1\\-3&1&3\end{bmatrix}\).

（4）求矩阵 \(A\) 的特征值，特征向量. \(A=\begin{bmatrix}-1&2&2\\2&-1&-2\\2&-2&-1\end{bmatrix}\).

（5）证明 \(A\) 和 \(A^{\mathrm T}\) 有相同的特征值，举2阶矩阵说明 \(A\) 和 \(A^{\mathrm T}\) 的特征向量可以不同.

（练习答案在297页）` },
      { p: 277, md: R`## 二、相似矩阵

**定义**　设 \(A,B\) 都是 \(n\) 阶矩阵，若存在可逆矩阵 \(P\)，使得 \(P^{-1}AP=B\)，则称 \(B\) 是 \(A\) 的相似矩阵，或 \(A\) 相似于 \(B\)，记成 \(A\sim B\).

若 \(A\sim\Lambda\)，其中 \(\Lambda\) 是对角阵，则称 \(A\) 可相似对角化. \(\Lambda\) 是 \(A\) 的相似标准形.

根据相似的定义，可知

**性质**　（1）\(A\sim A\)，反身性.

（2）若 \(A\sim B\Rightarrow B\sim A\)，对称性.

（3）若 \(A\sim B,B\sim C\Rightarrow A\sim C\)，传递性.

两个矩阵相似的必要条件
\[
A\sim B\Rightarrow
\begin{cases}
（1）\text{特征多项式相同，即 }|\lambda E-A|=|\lambda E-B|;\\
（2）A,B\text{ 有相同的特征值};\\
（3）r(A)=r(B);\\
（4）|A|=|B|=\prod_{i=1}^n\lambda_i;\\
（5）\sum_{i=1}^n a_{ii}=\sum_{i=1}^n b_{ii}=\sum_{i=1}^n\lambda_i.
\end{cases}
\]
由 \(A\sim B\)，注意联想：

（1）如 \(A\sim B\)，则 \(A^2\sim B^2\)，进而 \(A^n\sim B^n\).

因 \(A\sim B\) 有 \(P^{-1}AP=B\). 于是
\[
B^2=(P^{-1}AP)^2=(P^{-1}AP)(P^{-1}AP)=P^{-1}A^2P
\]
所以 \(A^2\sim B^2\).

（2）如 \(A\sim B\)，则 \(A+kE\sim B+kE\).

因 \(A\sim B\)，有 \(P^{-1}AP=B\). 那么
\[
P^{-1}(A+kE)P=P^{-1}AP+P^{-1}(kE)P=B+kE
\]
所以 \(A+kE\sim B+kE\).

（3）如 \(A\sim B\) 且 \(A\) 可逆，则 \(A^{-1}\sim B^{-1}\).

因 \(A\sim B\) 有 \(|A|=|B|\). 由 \(A\) 可逆知 \(|B|\ne0\)，即 \(B\) 必可逆.
\[
B^{-1}=(P^{-1}AP)^{-1}=P^{-1}A^{-1}(P^{-1})^{-1}=P^{-1}A^{-1}P
\]
所以 \(A^{-1}\sim B^{-1}\).

**定理 5.3**　\(n\) 阶方阵 \(A\) 可对角化的充分必要条件是 \(A\) 有 \(n\) 个线性无关的特征向量.

**推论**　若 \(n\) 阶矩阵 \(A\) 有 \(n\) 个不同的特征值 \(\lambda_1,\lambda_2,\cdots,\lambda_n\)，则 \(A\) 可相似对角化，且
\[
A\sim
\begin{bmatrix}
\lambda_1&&&\\
&\lambda_2&&\\
&&\ddots&\\
&&&\lambda_n
\end{bmatrix}
\]

**定理 5.4**　\(n\) 阶矩阵 \(A\) 可相似对角化的充分必要条件是 \(A\) 的每个特征值中，线性无关的特征向量的个数恰好等于该特征值的重数. 即
\[
A\sim\Lambda\Leftrightarrow \lambda_i\text{ 是 }A\text{ 的 }n_i\text{ 重特征值，则 }\lambda_i\text{ 有 }n_i\text{ 个线性无关的特征向量}
\]
\[
\Leftrightarrow\text{秩 }r(\lambda_iE-A)=n-n_i,\lambda_i\text{ 为 }n_i\text{ 重特征值}.
\]` },
      { p: 278, md: R`> **“求可逆矩阵 \(P\) 使 \(P^{-1}AP=\Lambda\)”解题步骤：**
>
> 1. 求出矩阵 \(A\)（设为3阶）的特征值 \(\lambda_1,\lambda_2,\lambda_3\)（可以有重根）
> 2. 求出线性无关的特征向量 \(\alpha_1,\alpha_2,\alpha_3\).
> 3. 构造可逆矩阵 \(P=(\alpha_1,\alpha_2,\alpha_3)\)，则有 \(P^{-1}AP=\Lambda=\begin{bmatrix}\lambda_1&&\\&\lambda_2&\\&&\lambda_3\end{bmatrix}\).

注意：若 \(A\alpha_1=\lambda_1\alpha_1,A\alpha_2=\lambda_2\alpha_2,A\alpha_3=\lambda_3\alpha_3\) 且 \(\alpha_1,\alpha_2,\alpha_3\) 线性无关，则有
\[
A(\alpha_1,\alpha_2,\alpha_3)=(\lambda_1\alpha_1,\lambda_2\alpha_2,\lambda_3\alpha_3)
=(\alpha_1,\alpha_2,\alpha_3)
\begin{bmatrix}
\lambda_1&&\\
&\lambda_2&\\
&&\lambda_3
\end{bmatrix}
\]
令 \(P=(\alpha_1,\alpha_2,\alpha_3)\)，则 \(P\) 可逆，记 \(\Lambda=\begin{bmatrix}\lambda_1&&\\&\lambda_2&\\&&\lambda_3\end{bmatrix}\).

即有 \(AP=P\Lambda\)，得 \(P^{-1}AP=\Lambda\)

故若 \(A\) 有 \(n\) 个线性无关的特征向量，则 \(A\sim\Lambda\).

反之，若 \(P^{-1}AP=\Lambda\Rightarrow AP=P\Lambda\)
\[
A(\alpha_1,\alpha_2,\alpha_3)=(\alpha_1,\alpha_2,\alpha_3)
\begin{bmatrix}
a_1&&\\
&a_2&\\
&&a_3
\end{bmatrix}
=(a_1\alpha_1,a_2\alpha_2,a_3\alpha_3)
\]
\(\Rightarrow A\alpha_1=a_1\alpha_1,A\alpha_2=a_2\alpha_2,A\alpha_3=a_3\alpha_3\)

因 \(P=(\alpha_1,\alpha_2,\alpha_3)\) 可逆 \(\Rightarrow\alpha_1,\alpha_2,\alpha_3\) 线性无关

故 \(A\sim\Lambda\)，则 \(A\) 有 \(n\) 个线性无关的特征向量.

**例9**　已知 \(A\sim B\)，若
\[
A=\begin{bmatrix}
-1&2&2\\
2&-1&2\\
2&2&-1
\end{bmatrix}
\]
，则 \(|B+E|=\)____.

**【分析】**　由 \(A\sim B\) 知 \(A+E\sim B+E\)，那么
\[
|B+E|=|A+E|=
\begin{vmatrix}
0&2&2\\
2&0&2\\
2&2&0
\end{vmatrix}=16
\]

**例10**　已知矩阵 \(A\) 和 \(B\) 相似，若
\[
B=\begin{bmatrix}
1&2&3\\
0&4&5\\
0&0&6
\end{bmatrix}
\]
，则秩 \(r(A-E)=\)____.

**【分析】**　由 \(A\sim B\) 知 \(A-E\sim B-E\)，故 \(r(A-E)=r(B-E)=2\).

**例11**　（2014，数农）已知
\[
A=\begin{bmatrix}
0&2&1\\
0&1&0\\
1&a&0
\end{bmatrix}
\]
相似于对角矩阵.` },
      { p: 279, md: R`（1）求 \(a\).

（2）求可逆矩阵 \(P\) 和 \(\Lambda\)，使 \(P^{-1}AP=\Lambda\) 并验算.

**【解】**　由 \(A\) 的特征多项式
\[
|\lambda E-A|=
\begin{vmatrix}
\lambda&-2&-1\\
0&\lambda-1&0\\
-1&-a&\lambda
\end{vmatrix}
=(\lambda-1)
\begin{vmatrix}
\lambda&-1\\
-1&\lambda
\end{vmatrix}
=(\lambda-1)^2(\lambda+1)
\]
\(A\) 的特征值：\(1,1,-1\).

（1）因 \(A\sim\Lambda\)，而 \(\lambda=1\) 是二重特征值，

那么 \(\lambda=1\) 应有2个线性无关的特征向量.

\((E-A)x=0\) 应有2个线性无关的解，

故 \(n-r(E-A)=3-r(E-A)=2\)，

即 \(r(E-A)=1\).

而
\[
E-A=
\begin{bmatrix}
1&-2&-1\\
0&0&0\\
-1&-a&1
\end{bmatrix}\to
\begin{bmatrix}
1&-2&-1\\
0&a+2&0\\
0&0&0
\end{bmatrix}
\]
\(\therefore a=-2\).

（2）把 \(a=-2\) 代入.

对 \(\lambda=1\)，由 \((E-A)x=0\)，
\[
\begin{bmatrix}
1&-2&-1\\
0&0&0\\
-1&2&1
\end{bmatrix}\to
\begin{bmatrix}
1&-2&-1\\
0&0&0\\
0&0&0
\end{bmatrix}
\]
得特征向量 \(\alpha_1=(2,1,0)^{\mathrm T},\alpha_2=(1,0,1)^{\mathrm T}\).

对 \(\lambda=-1\)，由 \((-E-A)x=0\)，

得特征向量 \(\alpha_3=(-1,0,1)^{\mathrm T}\).

令
\[
P=(\alpha_1,\alpha_2,\alpha_3)=
\begin{bmatrix}
2&1&-1\\
1&0&0\\
0&1&1
\end{bmatrix}
\]
则
\[
P^{-1}AP=\Lambda=
\begin{bmatrix}
1&&\\
&1&\\
&&-1
\end{bmatrix}
\]
验算如下：
\[
P^{-1}AP=
\begin{bmatrix}
2&1&-1\\
1&0&0\\
0&1&1
\end{bmatrix}^{-1}
\begin{bmatrix}
0&2&1\\
0&1&0\\
1&-2&0
\end{bmatrix}
\begin{bmatrix}
2&1&-1\\
1&0&0\\
0&1&1
\end{bmatrix}
\]
\[
=\frac12
\begin{bmatrix}
0&2&0\\
1&-2&1\\
-1&2&1
\end{bmatrix}
\begin{bmatrix}
0&2&1\\
0&1&0\\
1&-2&0
\end{bmatrix}
\begin{bmatrix}
2&1&-1\\
1&0&0\\
0&1&1
\end{bmatrix}
\]
\[
=\frac12
\begin{bmatrix}
0&2&0\\
1&-2&1\\
1&-2&-1
\end{bmatrix}
\begin{bmatrix}
2&1&-1\\
1&0&0\\
0&1&1
\end{bmatrix}
\]` },
      { p: 280, md: R`\[
=\frac12
\begin{bmatrix}
2&&\\
&2&\\
&&-2
\end{bmatrix}
=
\begin{bmatrix}
1&&\\
&1&\\
&&-1
\end{bmatrix}.
\]

**例12**　证明矩阵
\[
A=\begin{bmatrix}
1&1&0\\
-1&3&0\\
1&1&2
\end{bmatrix}
\]
不能相似对角化.

**【证】**　由特征多项式
\[
|\lambda E-A|=
\begin{vmatrix}
\lambda-1&-1&0\\
1&\lambda-3&0\\
-1&-1&\lambda-2
\end{vmatrix}
=(\lambda-2)
\begin{vmatrix}
\lambda-1&-1\\
1&\lambda-3
\end{vmatrix}
=(\lambda-2)^3
\]
得到矩阵 \(A\) 的特征值 \(\lambda_1=\lambda_2=\lambda_3=2\).

于是 \(n-r(2E-A)=3-2=1\)，说明齐次方程组 \((2E-A)x=0\) 只有一个线性无关的解，亦即 \(\lambda=2\) 只有1个线性无关的特征向量.

3重特征值只有1个线性无关的特征向量，故 \(A\) 不能相似对角化.

### 练习 5.2

（1）已知 \(A\sim B\)，若 \(A^2=E\)，则 \(B^2=\)____.

（2）已知3阶矩阵 \(A\) 的特征值为 \(1,2,3\). 对应的特征向量依次为 \(\alpha_1,\alpha_2,\alpha_3\). 若 \(P=(\alpha_3,\alpha_1,\alpha_2)\)，则 \(P^{-1}AP=\)____.

（3）下列矩阵中不能相似对角化的矩阵一共有
\[
\begin{bmatrix}1&1\\2&2\end{bmatrix}\quad
\begin{bmatrix}1&1\\-1&-1\end{bmatrix}\quad
\begin{bmatrix}2&-1&2\\5&-3&3\\-1&0&-2\end{bmatrix}\quad
\begin{bmatrix}1&0&0\\1&2&2\\1&1&3\end{bmatrix}
\]
（A）1个.　　（B）2个.　　（C）3个.　　（D）0个.

（4）已知
\[
A=\begin{bmatrix}
1&3&0\\
1&-1&0\\
a&-6&2
\end{bmatrix}
\]
可以相似对角化，求 \(a\) 并求可逆矩阵 \(P\) 使 \(P^{-1}AP=\Lambda\).

（练习答案在298页）

## 三、实对称矩阵

**定理 5.5**　实对称矩阵必可相似对角化.

**定理 5.6**　实对称矩阵的属于不同特征值对应的特征向量相互正交.

**定理 5.7**　设 \(A\) 为 \(n\) 阶实对称矩阵，则必存在正交阵 \(Q\)，使得 \(Q^{-1}AQ=Q^{\mathrm T}AQ=\Lambda\).` },
      { p: 281, md: R`> **“实对称矩阵用正交矩阵相似对角化”解题步骤**
>
> 1. 求出矩阵 \(A\)（设为3阶）的特征值 \(\lambda_1,\lambda_2,\lambda_3\).
> 2. 求出相应的特征向量 \(\alpha_1,\alpha_2,\alpha_3\).
> 3. 改造特征向量
>
> \(1^\circ\) 如果特征值不同，特征向量已正交，只需单位化，记为 \(\gamma_1,\gamma_2,\gamma_3\).
>
> \(2^\circ\) 如果特征值有重根，要先判断特征向量是否已正交？
>
> 若已正交则只需单位化；若不正交则要正交化处理，记为 \(\gamma_1,\gamma_2,\gamma_3\).
> 4. 把上述特征向量 \(\gamma_1,\gamma_2,\gamma_3\) 构成正交矩阵 \(Q=(\gamma_1,\gamma_2,\gamma_3)\).
>
> 即有 \(Q^{-1}AQ=\begin{bmatrix}\lambda_1&&\\&\lambda_2&\\&&\lambda_3\end{bmatrix}\).

**【注】**　\(A\) 是实对称矩阵，\(A\alpha_1=\lambda_1\alpha_1,A\alpha_2=\lambda_2\alpha_2,\lambda_1\ne\lambda_2\)

由 \(A\alpha_1=\lambda_1\alpha_1\Rightarrow\alpha_1^{\mathrm T}A^{\mathrm T}=\lambda_1\alpha_1^{\mathrm T}\Rightarrow\alpha_1^{\mathrm T}A=\lambda_1\alpha_1^{\mathrm T}\) 右乘 \(\alpha_2\)，得
\[
\lambda_1\alpha_1^{\mathrm T}\alpha_2=\alpha_1^{\mathrm T}A\alpha_2=\alpha_1^{\mathrm T}(\lambda_2\alpha_2)=\lambda_2\alpha_1^{\mathrm T}\alpha_2
\]
\[
(\lambda_1-\lambda_2)\alpha_1^{\mathrm T}\alpha_2=0
\]
因 \(\lambda_1\ne\lambda_2\)，故必有 \(\alpha_1^{\mathrm T}\alpha_2=0\)

即 \(\alpha_1\) 与 \(\alpha_2\) 正交.

**例13**　\(A\) 是3阶实对称矩阵，特征值是 \(1,2,3\)，\(\lambda_1=1\) 和 \(\lambda_2=2\) 的特征向量分别是 \(\alpha_1=(-1,-1,1)^{\mathrm T}\) 和 \(\alpha_2=(1,a,-1)^{\mathrm T}\)，则 \(\lambda=3\) 的特征向量为____.

**【分析】**　因 \(\lambda_1\ne\lambda_2\)，知 \(\alpha_1\) 与 \(\alpha_2\) 正交
\[
(\alpha_1,\alpha_2)=(-1)\cdot1+(-1)\cdot a+1\cdot(-1)=0
\]
\(\therefore a=-2\).

设 \(\lambda=3\) 的特征向量 \(\alpha=(x_1,x_2,x_3)^{\mathrm T}\)

则
\[
\begin{cases}
(\alpha,\alpha_1)=-x_1-x_2+x_3=0,\\
(\alpha,\alpha_2)=x_1-2x_2-x_3=0
\end{cases}
\]
\[
\begin{bmatrix}
-1&-1&1\\
1&-2&-1
\end{bmatrix}\to
\begin{bmatrix}
1&0&-1\\
0&1&0
\end{bmatrix}
\]
则 \(\alpha=k(1,0,1)^{\mathrm T},k\ne0\).

**例14**　已知 \(A\) 是3阶实对称矩阵，满足 \(A^2=A\)，若 \(r(A-E)=2\)，则 \(A\) 的特征值为____.

**【分析】**　设 \(A\alpha=\lambda\alpha\)，则 \(A^2\alpha=\lambda^2\alpha\)，于是由 \(A^2=A\)，\(A^2\alpha=A\alpha\) 即 \((\lambda^2-\lambda)\alpha=0\).

知矩阵 \(A\) 的特征值为1或0.

因 \(A\) 是实对称矩阵，知 \(A\sim\Lambda\) 那么 \(A-E\sim\Lambda-E\).

故 \(r(A-E)=r(\Lambda-E)=2\)，所以
\[
\Lambda=\begin{bmatrix}
1&&\\
&0&\\
&&0
\end{bmatrix}
\]
，即矩阵 \(A\) 的特征值为 \(1,0,0\).` },
      { p: 282, md: R`> **【注】**　注意和例7的区别. 在那里不能求出 \(A\) 的具体特征值！

**例15**　已知
\[
A=\begin{bmatrix}
1&a&-1\\
a&3&1\\
-1&1&1
\end{bmatrix}
\]
，如 \(r(A)=2\).

（1）求 \(a\).

（2）求正交矩阵 \(Q\) 和对角矩阵 \(\Lambda\)，使 \(Q^{-1}AQ=\Lambda\).

**【解】**　（1）因 \(A\) 中有2阶子式非零，于是
\[
r(A)=2\Leftrightarrow|A|=0
\]
而
\[
\begin{vmatrix}
1&a&-1\\
a&3&1\\
-1&1&1
\end{vmatrix}
=-(a+1)^2
\]
所以 \(a=-1\).

（2）由 \(A\) 的特征多项式
\[
|\lambda E-A|=
\begin{vmatrix}
\lambda-1&-a&1\\
-a&\lambda-3&-1\\
1&-1&\lambda-1
\end{vmatrix}
=\lambda(\lambda-1)(\lambda-4)
\]
\(A\) 的特征值：\(1,4,0\).

对 \(\lambda=1\)，由 \((E-A)x=0\) 得特征向量 \(\alpha_1=(-1,-1,1)^{\mathrm T}\).

对 \(\lambda=4\)，由 \((4E-A)x=0\) 得特征向量 \(\alpha_2=(-1,2,1)^{\mathrm T}\).

对 \(\lambda=0\)，由 \((0E-A)x=0\) 得特征向量 \(\alpha_3=(1,0,1)^{\mathrm T}\).

因实对称矩阵、特征值不同特征向量已正交单位化，有
\[
\gamma_1=\frac1{\sqrt3}
\begin{bmatrix}
-1\\-1\\1
\end{bmatrix},\quad
\gamma_2=\frac1{\sqrt6}
\begin{bmatrix}
-1\\2\\1
\end{bmatrix},\quad
\gamma_3=\frac1{\sqrt2}
\begin{bmatrix}
1\\0\\1
\end{bmatrix}
\]
令
\[
Q=(\gamma_1,\gamma_2,\gamma_3)=
\begin{bmatrix}
-\frac1{\sqrt3}&-\frac1{\sqrt6}&\frac1{\sqrt2}\\
-\frac1{\sqrt3}&\frac2{\sqrt6}&0\\
\frac1{\sqrt3}&\frac1{\sqrt6}&\frac1{\sqrt2}
\end{bmatrix}
\]
则
\[
Q^{-1}AQ=\Lambda=
\begin{bmatrix}
1&&\\
&4&\\
&&0
\end{bmatrix}.
\]

**例16**　已知 \(A\) 是3阶实对称矩阵，特征值是 \(3,0,0\)，对应于 \(\lambda=3\) 的特征向量 \(\alpha_1=(1,1,1)^{\mathrm T}\).

（1）求矩阵 \(A\) 关于 \(\lambda=0\) 的特征向量；

（2）求矩阵 \(A\)；

（3）求正交矩阵 \(Q\) 使 \(Q^{-1}AQ=\Lambda\).

**【解】**　（1）实对称矩阵特征值不同特征向量相互正交，设 \(\lambda=0\) 的特征向量 \(\alpha=(x_1,x_2,\)` },
      { p: 283, md: R`\(x_3)^{\mathrm T}\) 则 \(x_1+x_2+x_3=0\).

解出 \(\alpha_2=(-1,1,0)^{\mathrm T},\alpha_3=(-1,0,1)^{\mathrm T}\).

所以矩阵 \(A\) 关于 \(\lambda=0\) 的特征向量为 \(k_2\alpha_2+k_3\alpha_3,k_2,k_3\) 不全为 \(0\).

（2）由 \(A\alpha_1=3\alpha_1,A\alpha_2=0,A\alpha_3=0\) 有
\[
A(\alpha_1,\alpha_2,\alpha_3)=(3\alpha_1,0,0)
\]
故
\[
A=(3\alpha_1,0,0)(\alpha_1,\alpha_2,\alpha_3)^{-1}
\]
\[
=
\begin{bmatrix}
3&0&0\\
3&0&0\\
3&0&0
\end{bmatrix}
\begin{bmatrix}
1&-1&-1\\
1&1&0\\
1&0&1
\end{bmatrix}^{-1}
=
\begin{bmatrix}
3&0&0\\
3&0&0\\
3&0&0
\end{bmatrix}\cdot
\frac13
\begin{bmatrix}
1&1&1\\
-1&2&-1\\
-1&-1&2
\end{bmatrix}
\]
\[
=
\begin{bmatrix}
1&1&1\\
1&1&1\\
1&1&1
\end{bmatrix}.
\]

（3）对 \(\lambda=0\)，因为 \(\alpha_2,\alpha_3\) 不正交，故需正交化：

令 \(\beta_2=\alpha_2=(-1,1,0)^{\mathrm T}\)，
\[
\beta_3=\alpha_3-\frac{(\alpha_3,\beta_2)}{(\beta_2,\beta_2)}\beta_2
=
\begin{bmatrix}
-1\\0\\1
\end{bmatrix}
-\frac12
\begin{bmatrix}
-1\\1\\0
\end{bmatrix}
=
\frac12
\begin{bmatrix}
-1\\-1\\2
\end{bmatrix}.
\]
再单位化
\[
\gamma_1=\frac1{\sqrt3}
\begin{bmatrix}
1\\1\\1
\end{bmatrix},\quad
\gamma_2=\frac1{\sqrt2}
\begin{bmatrix}
-1\\1\\0
\end{bmatrix},\quad
\gamma_3=\frac1{\sqrt6}
\begin{bmatrix}
-1\\-1\\2
\end{bmatrix}
\]
令
\[
Q=(\gamma_1,\gamma_2,\gamma_3)=
\begin{bmatrix}
\frac1{\sqrt3}&-\frac1{\sqrt2}&-\frac1{\sqrt6}\\
\frac1{\sqrt3}&\frac1{\sqrt2}&-\frac1{\sqrt6}\\
\frac1{\sqrt3}&0&\frac2{\sqrt6}
\end{bmatrix}
\]
，有
\[
Q^{-1}AQ=
\begin{bmatrix}
3&&\\
&0&\\
&&0
\end{bmatrix}.
\]

**【注】**　有困难可到强化班再来处理！

### 练习 5.3

（1）已知 \(A\) 是4阶实对称矩阵，且 \(A^2-3A+2E=O\). 若齐次方程组 \((E-A)x=0\) 的每一个解均可由 \(\alpha\) 线性表出，则 \(A\) 的特征值是____.

（2）已知 \(A\) 是3阶实对称矩阵，秩为2，\(\lambda=6\) 是 \(A\) 的二重特征值，对应的特征向量是 \(\alpha_1=(1,1,0)^{\mathrm T}\) 和 \(\alpha_2=(2,1,1)^{\mathrm T}\)，求 \(A\) 的另一特征值和对应的特征向量.

（3）已知
\[
A=\begin{bmatrix}
2&0&0\\
0&3&2\\
0&2&3
\end{bmatrix}
\]
，求正交矩阵 \(Q\) 使 \(Q^{-1}AQ=\Lambda\).

（练习答案在298页）` },
    ],
    quiz: [{"q": "$\\lambda$ 是 $A$ 的特征值，则 $\\lambda$ 满足", "options": ["$|\\lambda E-A|=0$", "$|\\lambda E+A|=0$", "$\\lambda E-A=0$", "$|A|=0$"], "answer": 0, "explain": "特征方程。"}, {"q": "$n$ 阶矩阵 $A$ 的全部特征值之和等于", "options": ["$A$ 的迹", "$|A|$", "$r(A)$", "$0$"], "answer": 0, "explain": "特征值之和等于主对角线元素之和。"}, {"q": "属于不同特征值的特征向量", "options": ["线性无关", "线性相关", "正交", "相等"], "answer": 0, "explain": "不同特征值的特征向量线性无关。"}, {"q": "$n$ 阶矩阵 $A$ 可对角化的充要条件是", "options": ["$A$ 有 $n$ 个线性无关的特征向量", "$A$ 可逆", "$|A|\\ne0$", "$A$ 对称"], "answer": 0, "explain": "可对角化 ⇔ 有 $n$ 个线性无关特征向量。"}]
  };
})();
