window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["la05_s0"] = {
    id: "la05_s0",
    ch: "第五章 特征值与特征向量",
    title: "特征值与特征向量",
    book: "《线性代数辅导讲义》",
    pages: [120, 153],
    img: "assets/img/xiandai",
    content: [
      { p: 120, md: R`### 一、知识结构网络图
**特征值**
- 定义：$Ax=\lambda x,\ x\neq0$
- 求法
  - 特征值：定义法；特征多项式法 $|\lambda E-A|=0$
  - 特征向量：定义法；基础解系法 $(\lambda E-A)x=0$
- 性质
  - 不同特征值的特征向量线性无关
  - $k$ 重特征值至多有 $k$ 个线性无关的特征向量
  - $|A|=\prod\lambda_i$，$\sum a_{ii}=\sum\lambda_i$
- 相似
  - 定义 $P^{-1}AP=B$
  - 性质（必要条件）：$r(A)=r(B)$；$|A|=|B|$；$|\lambda E-A|=|\lambda E-B|$；$\sum a_{ii}=\sum b_{ii}$
  - 可对角化 $\Leftrightarrow$：$A$ 有 $n$ 个线性无关的特征向量；$r(\lambda_iE-A)=n-n_i$（$\lambda_i$ 为 $n_i$ 重特征值）
  - $\Leftarrow$：$A$ 有 $n$ 个不同的特征值；$A$ 是实对称矩阵
- 实对称矩阵隐含的信息
  - 与对角矩阵相似
  - 可用正交矩阵对角化
  - 不同特征值的特征向量必____
  - 特征值必是实数
  - $k$ 重特征值必有 $k$ 个线性无关的____` },
      { p: 121, md: R`| $A$ | $kA+E$ | $A+kE$ | $A^{-1}$ | $A^{*}$ | $A^{n}$ | $P^{-1}AP$ |
| --- | --- | --- | --- | --- | --- | --- |
| $\lambda$ | $k\lambda+1$ | $\lambda+k$ | $\frac{1}{\lambda}$ | $\frac{|A|}{\lambda}$ | $\lambda^{n}$ | $\lambda$ |
| $X$ | $X$ | $X$ | $X$ | $X$ | $X$ | $P^{-1}X$ |

【评注】特征值是线性代数的重要内容之一，也是考研的热点，复习应认真仔细。
(1) 要理解特征值、特征向量的概念，掌握矩阵特征值的性质，掌握求矩阵特征值、特征向量的方法。
(2) 要理解矩阵相似的概念，掌握相似矩阵的性质，搞清矩阵能相似对角化的条件，掌握将矩阵化为相似对角矩阵的方法。
(3) 要熟悉实对称矩阵特征值、特征向量的特殊性质，掌握用正交矩阵化实对称矩阵为对角矩阵的方法。
### 二、基本内容与重要结论
#### 基本概念
**定义 5.1** 设 $A$ 是 $n$ 阶矩阵，如果存在一个数 $\lambda$ 及非零的 $n$ 维列向量 $\alpha$，使得
$$A\alpha=\lambda\alpha\tag{5.1}$$
成立，则称 $\lambda$ 是矩阵 $A$ 的一个特征值，称非零向量 $\alpha$ 是矩阵 $A$ 属于特征值 $\lambda$ 的一个特征向量。
**定义 5.2** 设 $A=(a_{ij})$ 为一个 $n$ 阶矩阵，则行列式
$$|\lambda E-A|=\begin{vmatrix}\lambda-a_{11}&-a_{12}&\cdots&-a_{1n}\\-a_{21}&\lambda-a_{22}&\cdots&-a_{2n}\\\vdots&\vdots&&\vdots\\-a_{n1}&-a_{n2}&\cdots&\lambda-a_{nn}\end{vmatrix}\tag{5.2}$$
称为矩阵 $A$ 的特征多项式，$|\lambda E-A|=0$ 称为 $A$ 的特征方程。
【评注】由 $A\alpha=\lambda\alpha,\alpha\neq0$ 有 $\quad(\lambda E-A)\alpha=0,\alpha\neq0$，$\alpha$ 是齐次方程组 $(\lambda E-A)x=0$ 的非零解。
(1) 先由 $|\lambda E-A|=0$ 求矩阵 $A$ 的特征值 $\lambda_i$（共 $n$ 个）。` },
      { p: 122, md: R`(2) 再由 $(\lambda_iE-A)x=0$ 求基础解系，即矩阵 $A$ 属于特征值 $\lambda_i$ 的线性无关的特征向量。
**定义 5.3** 设 $A$ 和 $B$ 都是 $n$ 阶矩阵，如果存在可逆矩阵 $P$，使得
$$P^{-1}AP=B,\tag{5.3}$$
则称矩阵 $A$ 和 $B$ 相似，记作 $A\sim B$。
特别地，如果 $A$ 能与对角矩阵相似，则称 $A$ 可对角化。
#### 重要定理
**定理 5.1** 如果 $\alpha_1,\alpha_2,\cdots,\alpha_t$ 都是矩阵 $A$ 的属于特征值 $\lambda$ 的特征向量，那么当 $k_1\alpha_1+k_2\alpha_2+\cdots+k_t\alpha_t$ 非零时，$k_1\alpha_1+k_2\alpha_2+\cdots+k_t\alpha_t$ 仍是矩阵 $A$ 属于特征值 $\lambda$ 的特征向量。
**定理 5.2** 设 $A$ 是 $n$ 阶矩阵，$\lambda_1,\lambda_2,\cdots,\lambda_n$ 是矩阵 $A$ 的特征值，则
(1) $\sum\lambda_i=\sum a_{ii}$ (5.4)
(2) $|A|=\prod\lambda_i$ (5.5)
**定理 5.3** 如果 $\lambda_1,\lambda_2,\cdots,\lambda_m$ 是矩阵 $A$ 的互不相同的特征值，$\alpha_1,\alpha_2,\cdots,\alpha_m$ 分别是与之对应的特征向量，则 $\alpha_1,\alpha_2,\cdots,\alpha_m$ 线性无关。
**定理 5.4** 如果 $A$ 是 $n$ 阶矩阵，$\lambda_i$ 是 $A$ 的 $m$ 重特征值，则属于 $\lambda_i$ 的线性无关的特征向量的个数不超过 $m$ 个。
**定理 5.5** 如果 $n$ 阶矩阵 $A$ 与 $B$ 相似，则 $A$ 与 $B$ 有相同的特征多项式，从而 $A$ 与 $B$ 有相同的特征值。
即若 $A\sim B$，则 $|\lambda E-A|=|\lambda E-B|$ (5.6)
**定理 5.6** $n$ 阶方阵 $A$ 可对角化的充分必要条件是 $A$ 有 $n$ 个线性无关的特征向量。
【评注】若 $n$ 阶矩阵 $A\sim\Lambda$，则有 $P^{-1}AP=\Lambda$，于是 $AP=P\Lambda$。（下设 $n=3$）
$$A(\gamma_1,\gamma_2,\gamma_3)=(\gamma_1\ \gamma_2\ \gamma_3)\begin{pmatrix}a_1&0&0\\0&a_2&0\\0&0&a_3\end{pmatrix}$$
即 $\quad(A\gamma_1,A\gamma_2,A\gamma_3)=(a_1\gamma_1,a_2\gamma_2,a_3\gamma_3)$
即 $\quad A\gamma_1=a_1\gamma_1$，$A\gamma_2=a_2\gamma_2$，$A\gamma_3=a_3\gamma_3$。
因为矩阵 $P=(\gamma_1\ \gamma_2\ \gamma_3)$ 可逆，故 $\gamma_1,\gamma_2,\gamma_3$ 线性无关
那么，由 $A\gamma_i=a_i\gamma_i,\gamma_i\neq0$，而知 $\gamma_i$ 是矩阵 $A$ 的属于特征值 $a_i$ 的特征向量。
即 $\quad A\sim\Lambda\Rightarrow$ 矩阵 $A$ 有 $n$ 个线性无关的特征向量。
**定理 5.7** 若 $n$ 阶矩阵 $A$ 有 $n$ 个不同的特征值 $\lambda_1,\lambda_2,\cdots,\lambda_n$，则 $A$ 可相似对角化，且` },
      { p: 123, md: R`$$A\sim\begin{pmatrix}\lambda_1&&&\\&\lambda_2&&\\&&\ddots&\\&&&\lambda_n\end{pmatrix}\tag{5.7}$$
**定理 5.8** $n$ 阶矩阵 $A$ 可相似对角化的充分必要条件是 $A$ 的每个特征值中，线性无关的特征向量的个数恰好等于该特征值的重数。即
$A\sim\Lambda\Leftrightarrow\lambda_i$ 是 $A$ 的 $n_i$ 重特征值，则 $\lambda_i$ 有 $n_i$ 个线性无关的特征向量 (5.8)
$\Leftrightarrow$ 秩 $r(\lambda_iE-A)=n-n_i$，$\lambda_i$ 为 $n_i$ 重特征值 (5.9)
**定理 5.9** 实对称矩阵 $A$ 的不同特征值 $\lambda_1,\lambda_2$ 所对应的特征向量 $\alpha_1,\alpha_2$ 必正交。
**定理 5.10** 实对称矩阵 $A$ 的特征值都是实数。
**定理 5.11** $n$ 阶实对称阵 $A$ 必可对角化，且总存在正交阵 $Q$，使得
$$Q^{-1}AQ=Q^{T}AQ=\begin{pmatrix}\lambda_1&&&\\&\lambda_2&&\\&&\ddots&\\&&&\lambda_n\end{pmatrix},\tag{5.10}$$
其中 $\lambda_1,\lambda_2,\cdots,\lambda_n$ 是 $A$ 的特征值。
### 三、典型例题分析选讲
#### 特征值、特征向量
【例5.1】求矩阵 $A=\begin{pmatrix}17&-2&-2\\-2&14&-4\\-2&-4&14\end{pmatrix}$ 的特征值与特征向量。
【解】由矩阵 $A$ 的特征多项式
$$|\lambda E-A|=\begin{vmatrix}\lambda-17&2&2\\2&\lambda-14&4\\2&4&\lambda-14\end{vmatrix}=\begin{vmatrix}\lambda-17&2&2\\2&\lambda-14&4\\0&18-\lambda&\lambda-18\end{vmatrix}=\begin{vmatrix}\lambda-17&4&2\\2&\lambda-10&4\\0&0&\lambda-18\end{vmatrix}=(\lambda-18)(\lambda^2-27\lambda+162)=(\lambda-18)^2(\lambda-9)$$
得到矩阵 $A$ 的特征值是 $\lambda_1=\lambda_2=18$，$\lambda_3=9$
当 $\lambda=18$ 时，由 $(18E-A)x=0$，即
$$\begin{pmatrix}1&2&2\\2&4&4\\2&4&4\end{pmatrix}\to\begin{pmatrix}1&2&2\\0&0&0\\0&0&0\end{pmatrix}$$` },
      { p: 124, md: R`得基础解系 $\alpha_1=(-2,1,0)^{T}$，$\alpha_2=(-2,0,1)^{T}$，因此属于特征值 $\lambda=18$ 的特征向量是 $k_1\alpha_1+k_2\alpha_2$（$k_1,k_2$ 不全为 0）
当 $\lambda=9$ 时，由 $(9E-A)x=0$，即
$$\begin{pmatrix}-8&2&2\\2&-5&4\\2&4&-5\end{pmatrix}\to\begin{pmatrix}2&-5&4\\0&1&-1\\0&0&0\end{pmatrix}$$
得基础解系 $\alpha_3=(1,2,2)^{T}$，因此属于特征值 $\lambda=9$ 的特征向量是 $k_3\alpha_3$（$k_3\neq0$）
【例5.2】求矩阵 $A=\begin{pmatrix}1&0&0\\2&3&0\\4&5&6\end{pmatrix}$ 的特征值与特征向量。
【解】由矩阵 $A$ 的特征多项式
$$|\lambda E-A|=\begin{vmatrix}\lambda-1&0&0\\-2&\lambda-3&0\\-4&-5&\lambda-6\end{vmatrix}=(\lambda-1)(\lambda-3)(\lambda-6)$$
得矩阵 $A$ 的特征值是：$\lambda_1=1$，$\lambda_2=3$，$\lambda_3=6$。
对 $\lambda=1$，由 $(E-A)x=0$，即
$$\begin{pmatrix}0&0&0\\-2&-2&0\\-4&-5&-5\end{pmatrix}\to\begin{pmatrix}1&1&0\\0&1&5\\0&0&0\end{pmatrix}$$
得基础解系 $\alpha_1=(5,-5,1)^{T}$，因此属于特征值 $\lambda=1$ 的特征向量是 $k_1\alpha_1$（$k_1\neq0$）
对 $\lambda=3$，由 $(3E-A)x=0$，即
$$\begin{pmatrix}2&0&0\\-2&0&0\\-4&-5&-3\end{pmatrix}\to\begin{pmatrix}1&0&0\\0&5&3\\0&0&0\end{pmatrix}$$
得基础解系 $\alpha_2=(0,3,-5)^{T}$，因此属于特征值 $\lambda=3$ 的特征向量是 $k_2\alpha_2$（$k_2\neq0$）
对 $\lambda=6$，由 $(6E-A)x=0$，即
$$\begin{pmatrix}5&0&0\\-2&3&0\\-4&-5&0\end{pmatrix}$$
得基础解系 $\alpha_3=(0,0,1)^{T}$，因此属于特征值 $\lambda=6$ 的特征向量是 $k_3\alpha_3$（$k_3\neq0$）
【评注】上三角矩阵、下三角矩阵、对角矩阵的特征值就是矩阵主对角线上的元素。
【例5.3】求矩阵 $A=\begin{pmatrix}2&1&3\\4&2&6\\6&3&9\end{pmatrix}$ 的特征值与特征向量。
【解】由矩阵 $A$ 的特征多项式` },
      { p: 125, md: R`$$|\lambda E-A|=\begin{vmatrix}\lambda-2&-1&-3\\-4&\lambda-2&-6\\-6&-3&\lambda-9\end{vmatrix}=\begin{vmatrix}\lambda-2&-1&0\\-4&\lambda-2&-3\lambda\\-6&-3&\lambda\end{vmatrix}=\begin{vmatrix}\lambda-2&-1&0\\-22&\lambda-11&0\\-6&-3&\lambda\end{vmatrix}=\lambda(\lambda^2-13\lambda)$$
得到矩阵 $A$ 的特征值是 $\lambda_1=13$，$\lambda_2=\lambda_3=0$。
对 $\lambda=13$，由 $(13E-A)x=0$，即
$$\begin{pmatrix}11&-1&-3\\-4&11&-6\\-6&-3&4\end{pmatrix}\to\begin{pmatrix}11&-1&-3\\-26&13&0\\0&0&0\end{pmatrix}$$
得基础解系 $\alpha_1=(1,2,3)^{T}$，因此属于特征值 $\lambda=13$ 的特征向量是 $k_1\alpha_1$（$k_1\neq0$）
对 $\lambda=0$，由 $(0E-A)x=0$，即
$$\begin{pmatrix}-2&-1&-3\\-4&-2&-6\\-6&-3&-9\end{pmatrix}\to\begin{pmatrix}2&1&3\\0&0&0\\0&0&0\end{pmatrix}$$
得基础解系 $\alpha_2=(-1,2,0)^{T}$，$\alpha_3=(-3,0,2)^{T}$，因此属于特征值 $\lambda=0$ 的特征向量是 $k_2\alpha_2+k_3\alpha_3$（$k_2,k_3$ 不全为 0）。
【评注】设 $A=(a_{ij})$ 是 3 阶矩阵，则
$$|\lambda E-A|=\begin{vmatrix}\lambda-a_{11}&-a_{12}&-a_{13}\\-a_{21}&\lambda-a_{22}&-a_{23}\\-a_{31}&-a_{32}&\lambda-a_{33}\end{vmatrix}=\lambda^3-\sum a_{ii}\lambda^2+S_2\lambda-|A|$$
其中 $S_2=\begin{vmatrix}a_{11}&a_{12}\\a_{21}&a_{22}\end{vmatrix}+\begin{vmatrix}a_{11}&a_{13}\\a_{31}&a_{33}\end{vmatrix}+\begin{vmatrix}a_{22}&a_{23}\\a_{32}&a_{33}\end{vmatrix}$
若秩 $r(A)=1$，则 $|\lambda E-A|=\lambda^3-\sum a_{ii}\lambda^2=(\lambda-\sum a_{ii})\lambda^2$
矩阵 $A$ 的特征值：$\lambda_1=\sum a_{ii}$，$\lambda_2=\lambda_3=0$。
【例5.4】求矩阵 $A=\begin{pmatrix}3&-1&3&0\\1&1&4&-1\\0&0&5&-3\\0&0&3&-1\end{pmatrix}$ 的特征值与特征向量。
【解】由矩阵 $A$ 的特征多项式` },
      { p: 126, md: R`$$|\lambda E-A|=\begin{vmatrix}\lambda-3&1&-3&0\\-1&\lambda-1&-4&1\\0&0&\lambda-5&3\\0&0&-3&\lambda+1\end{vmatrix}=\begin{vmatrix}\lambda-3&1\\-1&\lambda-1\end{vmatrix}\cdot\begin{vmatrix}\lambda-5&3\\-3&\lambda+1\end{vmatrix}=(\lambda^2-4\lambda+4)(\lambda^2-4\lambda+4)=(\lambda-2)^4$$
得到矩阵 $A$ 的特征值是 $\lambda=2$（4 重根）。
当 $\lambda=2$ 时，由 $(2E-A)x=0$，即
$$\begin{pmatrix}-1&1&-3&0\\-1&1&-4&1\\0&0&-3&3\\0&0&-3&3\end{pmatrix}\to\begin{pmatrix}-1&1&-3&0\\0&0&-1&1\\0&0&0&0\\0&0&0&0\end{pmatrix}$$
得到基础解系是 $\alpha_1=(1,1,0,0)^T$，$\alpha_2=(-3,0,1,1)^T$，因此属于特征值 $\lambda=2$ 的特征向量是 $k_1\alpha_1+k_2\alpha_2$（$k_1,k_2$ 不全为 0）。
【例5.5】设 $A$ 是 $n$ 阶矩阵，$\alpha$ 是矩阵 $A$ 属于特征值 $\lambda$ 的特征向量，即
$$A\alpha=\lambda\alpha,\quad\alpha\neq0$$
那么 $(A+kE)\alpha=A\alpha+k\alpha=(\lambda+k)\alpha$，说明矩阵 $A+kE$ 的特征值是 $\lambda+k$，对应的特征向量是 $\alpha$。
$A^2\alpha=A(\lambda\alpha)=\lambda A\alpha=\lambda^2\alpha$，说明矩阵 $A^2$ 的特征值是 $\lambda^2$，对应的特征向量是 $\alpha$。
如果矩阵 $A$ 可逆，则有 $\lambda A^{-1}\alpha=\alpha,\alpha\neq0\Rightarrow A^{-1}\alpha=\dfrac{1}{\lambda}\alpha$，说明矩阵 $A^{-1}$ 的特征值是 $\dfrac{1}{\lambda}$，对应的特征向量是 $\alpha$。
如果 $P^{-1}AP=B$，则 $B(P^{-1}\alpha)=(P^{-1}AP)(P^{-1}\alpha)=P^{-1}A\alpha=\lambda(P^{-1}\alpha)$，说明 $P^{-1}AP$ 的特征值是 $\lambda$，对应的特征向量是 $P^{-1}\alpha$。
【例5.6】设 $A$ 是 $n$ 阶矩阵，满足 $A^2=A$，求矩阵 $A$ 的特征值。
【解】设 $\lambda$ 是矩阵 $A$ 的任一特征值，$\alpha$ 是矩阵 $A$ 属于特征值 $\lambda$ 的特征向量。即 $A\alpha=\lambda\alpha,\alpha\neq0$
于是 $A^2\alpha=A(\lambda\alpha)=\lambda A\alpha=\lambda^2\alpha$
由 $A^2=A$ 得 $A^2\alpha=A\alpha$ 亦即 $\lambda^2\alpha=\lambda\alpha$
那么 $(\lambda^2-\lambda)\alpha=0,\alpha\neq0$
故 $\lambda^2-\lambda=0$
因此 $\lambda=1$ 或 $\lambda=0$` },
      { p: 127, md: R`【评注】因为满足 $A^2=A$ 的矩阵 $A$ 不唯一。例如
$$\begin{pmatrix}1&0\\0&1\end{pmatrix}^2=\begin{pmatrix}1&0\\0&1\end{pmatrix},\quad\begin{pmatrix}0&0\\0&0\end{pmatrix}^2=\begin{pmatrix}0&0\\0&0\end{pmatrix},\begin{pmatrix}1&0\\0&0\end{pmatrix}^2=\begin{pmatrix}1&0\\0&0\end{pmatrix},\quad\begin{pmatrix}-1&-1\\2&2\end{pmatrix}^2=\begin{pmatrix}-1&-1\\2&2\end{pmatrix},\cdots$$
所以仅条件 $A^2=A$ 并不能确定矩阵 $A$ 的特征值。只是知道矩阵 $A$ 的特征值只能取 1 或 0。
【例5.7】$A$ 是 $n$ 阶矩阵，行列式 $|A|=2$，若矩阵 $A+E$ 不可逆，则矩阵 $A$ 的伴随矩阵 $A^*$ 必有特征值______。
【分析】本题矩阵 $A$ 没有具体给出，故应当用定义法来分析推断。
矩阵 $A+E$ 不可逆，即 $|A+E|=0$，亦即 $|-E-A|=(-1)^n|E+A|=0$
故 $\lambda=-1$ 必是矩阵 $A$ 的特征值。又因 $|A|=2$，所以 $A^*$ 必有特征值 $-2$。
【例5.8】设 $A$ 是 3 阶矩阵，且矩阵 $A$ 的各行元素之和均为 5，则矩阵 $A$ 必有特征值______。
【分析】矩阵 $A=(a_{ij})$ 各行元素之和均为 5，即
$$\begin{cases}a_{11}+a_{12}+a_{13}=5\\a_{21}+a_{22}+a_{23}=5\\a_{31}+a_{32}+a_{33}=5\end{cases}$$
用矩阵表示，有 $\begin{pmatrix}a_{11}&a_{12}&a_{13}\\a_{21}&a_{22}&a_{23}\\a_{31}&a_{32}&a_{33}\end{pmatrix}\begin{pmatrix}1\\1\\1\end{pmatrix}=\begin{pmatrix}5\\5\\5\end{pmatrix}$
即 $A\begin{pmatrix}1\\1\\1\end{pmatrix}=5\begin{pmatrix}1\\1\\1\end{pmatrix}$
故矩阵 $A$ 必有特征值 $\lambda=5$，可知必有特征向量 $(1,1,1)^T$。
【例5.9】已知 $A=\begin{pmatrix}2&2&1\\2&5&2\\3&6&4\end{pmatrix}$，$A^*$ 是 $A$ 的伴随矩阵，求 $A^*$ 的特征值与特征向量。
【解】矩阵 $A$ 的伴随矩阵 $A^*=\begin{pmatrix}8&-2&-1\\-2&5&-2\\-3&-6&6\end{pmatrix}$
由伴随矩阵 $A^*$ 的特征多项式` },
      { p: 128, md: R`$$|\lambda E-A^*|=\begin{vmatrix}\lambda-8&2&1\\2&\lambda-5&2\\3&6&\lambda-6\end{vmatrix}=\begin{vmatrix}\lambda-8&2&1\\18-2\lambda&\lambda-9&0\\3&6&\lambda-6\end{vmatrix}=\begin{vmatrix}\lambda-4&2&1\\0&\lambda-9&0\\15&6&\lambda-6\end{vmatrix}=(\lambda-9)(\lambda^2-10\lambda+9)=(\lambda-9)^2(\lambda-1)$$
得伴随矩阵 $A^*$ 的特征值 $\lambda_1=\lambda_2=9,\lambda_3=1$。
对 $\lambda=9$，由 $(9E-A^*)x=0$，即
$$\begin{pmatrix}1&2&1\\2&4&2\\3&6&3\end{pmatrix}\to\begin{pmatrix}1&2&1\\0&0&0\\0&0&0\end{pmatrix}$$
得基础解系 $\alpha_1=(-2,1,0)^T,\alpha_2=(-1,0,1)^T$，因此 $A^*$ 属于特征值 $\lambda=9$ 的特征向量是 $k_1\alpha_1+k_2\alpha_2$（$k_1,k_2$ 不全为 0）
对 $\lambda=1$，由 $(E-A^*)x=0$，即
$$\begin{pmatrix}-7&2&1\\2&-4&2\\3&6&-5\end{pmatrix}\to\begin{pmatrix}1&-2&1\\0&12&-8\\0&0&0\end{pmatrix}$$
得基础解系 $\alpha_3=(1,2,3)^T$，因此 $A^*$ 属于特征值 $\lambda=1$ 的特征向量是 $k_3\alpha_3$（$k_3\neq0$）。
【解法二】因为
$$|\lambda E-A|=\begin{vmatrix}\lambda-2&-2&-1\\-2&\lambda-5&-2\\-3&-6&\lambda-4\end{vmatrix}=\begin{vmatrix}\lambda-1&-2&-1\\0&\lambda-5&-2\\1-\lambda&-6&\lambda-4\end{vmatrix}=\begin{vmatrix}\lambda-1&-2&-1\\0&\lambda-5&-2\\0&-8&\lambda-5\end{vmatrix}=(\lambda-1)\begin{vmatrix}\lambda-5&-2\\-8&\lambda-5\end{vmatrix}=(\lambda-9)(\lambda-1)^2$$
所以矩阵 $A$ 的特征值为 $9,1,1$。由 $|A|=\prod\lambda_i$ 知 $|A|=9$，故伴随矩阵 $A^*$ 的特征值为 $1,9,9$。
由 $(9E-A)x=0$，即
$$\begin{pmatrix}7&-2&-1\\-2&4&-2\\-3&-6&5\end{pmatrix}\to\begin{pmatrix}1&-2&1\\0&-12&8\\0&0&0\end{pmatrix}$$
得基础解系 $\alpha_1=(1,2,3)^T$。因此 $A^*$ 属于 $\lambda=1$ 的特征向量为 $k_1\alpha_1,k_1\neq0$。
由 $(E-A)x=0$，即
$$\begin{pmatrix}-1&-2&-1\\-2&-4&-2\\-3&-6&-3\end{pmatrix}\to\begin{pmatrix}1&2&1\\0&0&0\\0&0&0\end{pmatrix}$$` },
      { p: 129, md: R`得基础解系 $\alpha_2=(-2,1,0)^T,\alpha_3=(-1,0,1)^T$
因此 $A^*$ 属于 $\lambda=9$ 的特征向量为 $k_2\alpha_2+k_3\alpha_3$（$k_2,k_3$ 不全为 0）
【评注】解法一是直接求 $A^*$ 的特征值与特征向量，易想到但计算量大。解法二是间接法，利用相关联矩阵的特征值、特征向量之间的关系而求解，计算量小但综合性灵活性要求高。
若能由本题的特殊性看出 $A=\begin{pmatrix}1&2&1\\2&4&2\\3&6&3\end{pmatrix}+\begin{pmatrix}1&0&0\\0&1&0\\0&0&1\end{pmatrix}=B+E$，而秩 $r(B)=1$，那么利用例 5.3 评注可立即求出矩阵 $B$ 的特征值进而可转换为 $A$ 及 $A^*$ 的特征值。
【例5.10】（2003,1）设矩阵 $A=\begin{pmatrix}3&2&2\\2&3&2\\2&2&3\end{pmatrix}$，$P=\begin{pmatrix}0&1&0\\1&0&1\\0&0&1\end{pmatrix}$，$B=P^{-1}A^*P$，求 $B+2E$ 的特征值与特征向量，其中 $A^*$ 为 $A$ 的伴随矩阵，$E$ 为 3 阶单位矩阵。
【解】由于 $A=\begin{pmatrix}3&2&2\\2&3&2\\2&2&3\end{pmatrix}=\begin{pmatrix}1&0&0\\0&1&0\\0&0&1\end{pmatrix}+\begin{pmatrix}2&2&2\\2&2&2\\2&2&2\end{pmatrix}=E+C$
因为秩 $r(C)=1$，有 $|\lambda E-C|=\lambda^3-6\lambda^2$
矩阵 $C$ 的特征值是 $6,0,0$。那么矩阵 $A$ 的特征值是 $7,1,1$。
因为 $|A|=\prod\lambda_i=7$，若 $A\alpha=\lambda\alpha$ 则 $A^*\alpha=\dfrac{|A|}{\lambda}\alpha$，而知 $A^*$ 的特征值是 $1,7,7$。于是 $B=P^{-1}A^*P$ 的特征值是 $1,7,7$，那么矩阵 $B+2E$ 的特征值是 $3,9,9$。
由 $A\alpha=\lambda\alpha$，有 $A^*\alpha=\dfrac{|A|}{\lambda}\alpha$。
那么 $B(P^{-1}\alpha)=(P^{-1}A^*P)(P^{-1}\alpha)=P^{-1}A^*\alpha=\dfrac{|A|}{\lambda}(P^{-1}\alpha)$
从而 $(B+2E)(P^{-1}\alpha)=\left(\dfrac{|A|}{\lambda}+2\right)(P^{-1}\alpha)$
因为矩阵 $C$ 属于特征值 $\lambda=6$ 的特征向量为 $\alpha_1=(1,1,1)^T$
而属于特征值 $\lambda=0$ 的特征向量可取为 $\alpha_2=(-1,1,0)^T,\quad\alpha_3=(-1,0,1)^T$
它们就是矩阵 $A$ 分别属于特征值 7 与 1 的特征向量。
由 $P^{-1}=\begin{pmatrix}0&1&-1\\1&0&0\\0&0&1\end{pmatrix}$，得` },
      { p: 130, md: R`$$P^{-1}\alpha_1=\begin{pmatrix}0&1&-1\\1&0&0\\0&0&1\end{pmatrix}\begin{pmatrix}1\\1\\1\end{pmatrix}=\begin{pmatrix}0\\1\\1\end{pmatrix}$$
于是 $B+2E$ 属于特征值 $\lambda=3$ 的特征向量是 $k_1\begin{pmatrix}0\\1\\1\end{pmatrix},(k_1\neq0)$
类似地 $P^{-1}\alpha_2=\begin{pmatrix}1\\-1\\0\end{pmatrix},\quad P^{-1}\alpha_3=\begin{pmatrix}-1\\-1\\1\end{pmatrix}$
那么 $B+2E$ 属于特征值 $\lambda=9$ 的特征向量为 $k_2\begin{pmatrix}1\\-1\\0\end{pmatrix}+k_3\begin{pmatrix}-1\\-1\\1\end{pmatrix},\quad k_2,k_3$ 不全为 $0.$
【解法二】先分别求出 $A^*$ 与 $P^{-1}$，有
$$A^*=\begin{pmatrix}5&-2&-2\\-2&5&-2\\-2&-2&5\end{pmatrix},\quad P^{-1}=\begin{pmatrix}0&1&-1\\1&0&0\\0&0&1\end{pmatrix}$$
故 $B=P^{-1}A^*P=\begin{pmatrix}7&0&0\\-2&5&-4\\-2&-2&3\end{pmatrix}$
从而 $B+2E=\begin{pmatrix}9&0&0\\-2&7&-4\\-2&-2&5\end{pmatrix}$
有特征多项式
$$|\lambda E-(B+2E)|=\begin{vmatrix}\lambda-9&0&0\\2&\lambda-7&4\\2&2&\lambda-5\end{vmatrix}=(\lambda-9)(\lambda^2-12\lambda+27)=(\lambda-9)^2(\lambda-3)$$
得到 $B+2E$ 的特征值为 $9,9,3$。
当 $\lambda=9$ 时，由 $[9E-(B+2E)]x=0$，有
$$\begin{pmatrix}0&0&0\\2&2&4\\2&2&4\end{pmatrix}\to\begin{pmatrix}1&1&2\\0&0&0\\0&0&0\end{pmatrix}$$
得基础解系 $\eta_1=\begin{pmatrix}-1\\1\\0\end{pmatrix},\quad\eta_2=\begin{pmatrix}-2\\0\\1\end{pmatrix}$` },
      { p: 131, md: R`所以对应于 $\lambda=9$ 的特征向量是 $k_1\eta_1+k_2\eta_2=k_1\begin{pmatrix}-1\\1\\0\end{pmatrix}+k_2\begin{pmatrix}-2\\0\\1\end{pmatrix},k_1,k_2$ 不全为 $0.$
当 $\lambda=3$ 时，由 $(3E-(B+2E))x=0$，即
$$\begin{pmatrix}-6&0&0\\2&-4&4\\2&2&-2\end{pmatrix}\to\begin{pmatrix}1&0&0\\0&1&-1\\0&0&0\end{pmatrix}$$
得基础解系 $\eta_3=\begin{pmatrix}0\\1\\1\end{pmatrix}$
所以属于 $\lambda=3$ 的特征向量为 $k_3\eta_3=k_3\begin{pmatrix}0\\1\\1\end{pmatrix},\quad k_3\neq0.$
【例5.11】设 $\alpha_1,\alpha_2$ 是矩阵 $A$ 属于不同特征值的特征向量，证明 $\alpha_1+\alpha_2$ 不是矩阵 $A$ 的特征向量。
【证】按已知，设 $A\alpha_1=\lambda_1\alpha_1,A\alpha_2=\lambda_2\alpha_2$ 且 $\lambda_1\neq\lambda_2$。若 $\alpha_1+\alpha_2$ 是矩阵 $A$ 属于特征值 $\mu$ 的特征向量，即 $A(\alpha_1+\alpha_2)=\mu(\alpha_1+\alpha_2)$
那么，由 $A(\alpha_1+\alpha_2)=A\alpha_1+A\alpha_2=\lambda_1\alpha_1+\lambda_2\alpha_2$
得 $(\mu-\lambda_1)\alpha_1+(\mu-\lambda_2)\alpha_2=0$
因为不同特征值的特征向量线性无关（定理 5.3），有 $\mu-\lambda_1=0,\mu-\lambda_2=0$
这与 $\lambda_1\neq\lambda_2$ 相矛盾。所以 $\alpha_1+\alpha_2$ 不是 $A$ 的特征向量。
【评注】请把本题与定理 5.1 区别开，不要混淆。
#### 相似、相似对角化
【例5.12】若 3 阶矩阵 $A$ 相似于 $B$，矩阵 $A$ 的特征值是 $1,2,3$，那么行列式 $|2B-E|=$______。
【分析】因为 $A\sim B$，故 $A$ 与 $B$ 有相同的特征值，那么，$2B$ 的特征值是 $2,4,6$，$2B-E$ 的特征值是 $1,3,5$。从而 $|2B-E|=15$。
或者，由 $P^{-1}AP=B$，有 $P^{-1}(2A-E)P=2B-E$，又因 $2A-E$ 的特征值是 $1,3,5$，故 $|2B-E|=|2A-E|=15$。
【例5.13】（2003,4）设矩阵` },
      { p: 132, md: R`$$B=\begin{pmatrix}0&0&1\\0&1&0\\1&0&0\end{pmatrix}$$
已知矩阵 $A$ 相似于 $B$，则秩 $(A-2E)$ 与秩 $(A-E)$ 之和等于
(A) 2 (B) 3 (C) 4 (D) 5
【分析】由 $A\sim B$，有 $P^{-1}AP=B$，那么 $P^{-1}(A-2E)P=B-2E,P^{-1}(A-E)P=B-E$
从而 $r(A-2E)=r(B-2E),r(A-E)=r(B-E)$
易见 $B-2E=\begin{pmatrix}-2&0&1\\0&-1&0\\1&0&-2\end{pmatrix},B-E=\begin{pmatrix}-1&0&1\\0&0&0\\1&0&-1\end{pmatrix}$
的秩分别为 3 与 1，故应选 (C)。
【例5.14】$n$ 阶矩阵 $A\sim B$ 的充分条件是
(A) $A^2$ 与 $B^2$ 相似
(B) $A$ 与 $B$ 有相同的特征值
(C) $A$ 与 $B$ 有相同的特征向量
(D) $A$ 与 $B$ 均和对角矩阵 $\Lambda$ 相似
【分析】如果 $A\sim B$，则有 $P^{-1}AP=B$，那么 $P^{-1}A^2P=(P^{-1}AP)(P^{-1}AP)=B^2$
知 $A^2\sim B^2$，但 $A^2\sim B^2$ 时，推不出 $A\sim B$。例如
$$A=\begin{pmatrix}0&1\\0&0\end{pmatrix},\quad B=\begin{pmatrix}0&0\\0&0\end{pmatrix}$$
由于 $r(A)\neq r(B)$，显见 $A$ 与 $B$ 不相似。但 $A^2=B^2$，而有 $A^2\sim B^2$。所以 (A) 是必要条件不是充分条件。
条件 (B) 亦是必要条件不是充分条件。由 $P^{-1}AP=B$，有
$$|\lambda E-B|=|\lambda E-P^{-1}AP|=|P^{-1}(\lambda E-A)P|=|\lambda E-A|$$
即 $A,B$ 有相同的特征值。但条件 (A) 中例子告诉我们虽然 $A,B$ 有相同的特征值 $\lambda_1=\lambda_2=0$，但 $A$ 与 $B$ 是不相似的。
如果 $\alpha$ 是矩阵 $A$ 属于特征值 $\lambda$ 的特征向量，$\alpha$ 是矩阵 $B$ 属于特征值 $\mu$ 的特征向量，虽然 $A$ 与 $B$ 有相同的特征向量，但由于特征值的不同，所以 $A$ 与 $B$ 不可能相似。(C) 不是充分条件。
若 $A\sim\Lambda,B\sim\Lambda$。则有 $P_1^{-1}AP_1=\Lambda=P_2^{-1}BP_2$
那么 $P_2P_1^{-1}AP_1P_2^{-1}=B$
令 $P=P_1P_2^{-1}$，则有 $P^{-1}AP=B$，即 $A\sim B$。所以 (D) 是充分条件。
【评注】条件 (D) 不是必要的，因为当 $A,B$ 不能相似对角化时，矩阵 $A$ 与 $B$ 仍有可能相似，只要它们与同一个矩阵 $C$ 相似即可。` },
      { p: 133, md: R`【例5.15】不能相似对角化的矩阵是
(A) $\begin{pmatrix}1&2&1\\0&3&0\\0&0&0\end{pmatrix}$ (B) $\begin{pmatrix}1&2&1\\0&1&0\\0&0&3\end{pmatrix}$ (C) $\begin{pmatrix}1&1&1\\2&2&2\\3&3&3\end{pmatrix}$ (D) $\begin{pmatrix}1&2&3\\2&4&5\\3&5&6\end{pmatrix}$
【分析】(A) 中矩阵的特征值是 1,3,0，有 3 个不同的特征值，故可相似对角化。
(B) 矩阵 $A$ 的特征值是 1,1,3。
因为 $\quad r(E-A)=r\begin{pmatrix}0&-2&-1\\0&0&0\\0&0&2\end{pmatrix}=2$
故 $(E-A)x=0$ 的基础解系中仅一个向量，即 $\lambda=1$，只有一个线性无关的特征向量，所以 $A$ 不能相似对角化。
(C) 由于 $r(A)=1$，有 $|\lambda E-A|=\lambda^3-\sum a_{ii}\lambda^2=\lambda^3-6\lambda^2$
矩阵 $A$ 的特征值是 6,0,0。
因为 $r(0E-A)=r(A)=1$，说明 $(0E-A)x=0$ 的基础解系由 2 个解向量所构成。所以 $\lambda=0$ 有 2 个线性无关的特征向量。$A$ 可以相似对角化。
(D) $A$ 是实对称矩阵，$A$ 必可相似对角化。故应选 (B)。
【例5.16】已知 $A=\begin{pmatrix}2&1&-1\\1&2&1\\-1&1&2\end{pmatrix},B=\begin{pmatrix}2&0&1\\-1&3&1\\2&0&1\end{pmatrix}$，判断 $A$ 与 $B$ 是否相似，并说明理由。
【分析】$A$ 是实对称矩阵必可对角化，$A$ 与 $B$ 是否相似首先要看 $B$ 能否对角化，如 $B$ 不能对角化则 $A$ 与 $B$ 肯定不相似，如 $B$ 能对角化，则应进一步检查 $A,B$ 是否有相同的特征值。特征值一致时才相似。
【解】对于 $B$，由特征方程
$$|\lambda E-B|=\begin{vmatrix}\lambda-2&0&-1\\1&\lambda-3&-1\\-2&0&\lambda-1\end{vmatrix}=(\lambda-3)\begin{vmatrix}\lambda-2&-1\\-2&\lambda-1\end{vmatrix}=\lambda(\lambda-3)^2=0$$
可得矩阵 $B$ 的特征值是 3,3,0。
当 $\lambda=3$ 时，$\quad r(3E-B)=r\begin{pmatrix}1&0&-1\\1&0&-1\\-2&0&2\end{pmatrix}=1=n-n_i$，所以 $B$ 可对角化。` },
      { p: 134, md: R`又因
$$|\lambda E-A|=\begin{vmatrix}\lambda-2&-1&1\\-1&\lambda-2&-1\\1&-1&\lambda-2\end{vmatrix}=\begin{vmatrix}\lambda-3&\lambda-3&0\\-1&\lambda-2&-1\\0&\lambda-3&\lambda-3\end{vmatrix}=\lambda(\lambda-3)^2,$$
所以 $A\sim B$。
理由：$A,B$ 均可对角化，且都与 $\begin{pmatrix}3&&\\&3&\\&&0\end{pmatrix}$ 相似。
【评注】特征值相同是矩阵相似的必要条件（定理 5.5）。例如
$$\begin{pmatrix}1&\\&2\end{pmatrix}\text{与}\begin{pmatrix}2&\\&3\end{pmatrix}$$
肯定不相似。因为它们的特征值不同。
可是特征值相同的矩阵不一定相似。例如
$$C=\begin{pmatrix}3&1&-1\\0&3&2\\0&0&0\end{pmatrix}$$
的特征值也是 3,3,0。但因 $r(3E-C)=2\neq n-n_i$，所以 $C$ 不能对角化，那么 $C$ 与 $A,B$ 均不相似。
但若 $A,B$ 是实对称矩阵，$A$ 与 $B$ 有相同的特征值是 $A$ 与 $B$ 相似的充分必要条件。
【例5.17】已知矩阵 $A=\begin{pmatrix}1&a&-3\\-1&4&-3\\1&-2&5\end{pmatrix}$ 的特征值有重根，判断矩阵 $A$ 能否相似对角化，并说明理由。
【解】由矩阵 $A$ 的特征多项式
$$|\lambda E-A|=\begin{vmatrix}\lambda-1&-a&3\\1&\lambda-4&3\\-1&2&\lambda-5\end{vmatrix}=\begin{vmatrix}\lambda-1&-a&3\\1&\lambda-4&3\\0&\lambda-2&\lambda-2\end{vmatrix}=(\lambda-2)(\lambda^2-8\lambda+10+a)$$
如果 $\lambda=2$ 是重根，则 $\lambda^2-8\lambda+10+a$ 中含有 $\lambda-2$ 的因式，于是 $2^2-16+10+a=0$，解出 $a=2$。此时 $\lambda^2-8\lambda+12=(\lambda-2)(\lambda-6)$，矩阵 $A$ 的 3 个特征值是 2,2,6。
对于 $\lambda=2$，由于
$$r(2E-A)=r\begin{pmatrix}1&-2&3\\1&-2&3\\-1&2&-3\end{pmatrix}=1$$
故 $\lambda=2$ 有 2 个线性无关的特征向量，$A$ 可以相似对角化。` },
      { p: 135, md: R`若 $\lambda=2$ 不是重根，则 $\lambda^2-8\lambda+10+a$ 是完全平方，于是 $8^2-4(10+a)=0$
解出 $a=6$ 矩阵 $A$ 的特征值是 2,4,4。
对于 $\lambda=4$，由于
$$r(4E-A)=r\begin{pmatrix}3&-6&3\\1&0&3\\-1&2&-1\end{pmatrix}=2$$
说明 $\lambda=4$ 只有 1 个线性无关的特征向量，$A$ 不能相似对角化。
#### 求相似对角化时的可逆矩阵 $P$
提示 若 $P^{-1}AP=\Lambda$，则 $P$ —— $A$ 的特征向量，$\Lambda$ —— $A$ 的特征值。
【例5.18】已知 $A=\begin{pmatrix}-4&-10&0\\1&3&0\\3&6&1\end{pmatrix}$，判断 $A$ 能否对角化？若能对角化，则可逆矩阵 $P$ 化 $A$ 为相似标准形。
【解】先求 $A$ 的特征值。从 $A$ 的特征多项式
$$|\lambda E-A|=\begin{vmatrix}\lambda+4&10&0\\-1&\lambda-3&0\\-3&-6&\lambda-1\end{vmatrix}=(\lambda-1)\begin{vmatrix}\lambda+4&10\\-1&\lambda-3\end{vmatrix}=(\lambda-1)^2(\lambda+2)$$
得到 $A$ 的特征值 $\lambda_1=\lambda_2=1,\lambda_3=-2$。
再求特征向量：
对 $\lambda_1=1$，解齐次方程组 $(E-A)x=0$，即
$$\begin{pmatrix}5&10&0\\-1&-2&0\\-3&-6&0\end{pmatrix}\to\begin{pmatrix}1&2&0\\0&0&0\\0&0&0\end{pmatrix}$$
得到基础解系 $\alpha_1=(-2,1,0)^T,\alpha_2=(0,0,1)^T$，即对应 $\lambda_1=1$ 的特征向量。
对 $\lambda_2=-2$，由 $(-2E-A)x=0$，即
$$\begin{pmatrix}2&10&0\\-1&-5&0\\-3&-6&-3\end{pmatrix}\to\begin{pmatrix}1&5&0\\1&2&1\\0&0&0\end{pmatrix},$$
得到基础解系 $\alpha_3=(-5,1,3)^T$，是属于 $\lambda_2=-2$ 的特征向量。
因为 $\lambda_1$ 有两个线性无关的特征向量，所以 $A$ 能对角化。
令
$$P=\begin{pmatrix}-2&0&-5\\1&0&1\\0&1&3\end{pmatrix}$$` },
      { p: 136, md: R`则
$$P^{-1}AP=\Lambda=\begin{pmatrix}1&&\\&1&\\&&-2\end{pmatrix}.$$
【评注】求 $A$ 相似标准形的方法（对可对角化的矩阵）
(1) 求 $A$ 的特征值 $\lambda_1,\lambda_2,\cdots,\lambda_s$，设 $\lambda_i$ 是 $n_i$ 重根；
(2) 对每个特征值 $\lambda_i$，求 $(\lambda_iE-A)x=0$ 的基础解系，设为 $X_{i1},X_{i2},\cdots,X_{in_i}$；
(3) 令 $P=(X_{11},X_{12},\cdots,X_{1n_1},X_{21},X_{22},\cdots,X_{2n_2},\cdots,X_{s1},X_{s2},\cdots,X_{sn_s})$，则
$$P^{-1}AP=\operatorname{diag}(\lambda_1,\cdots,\lambda_1,\lambda_2,\cdots,\lambda_2,\cdots,\lambda_s,\cdots,\lambda_s),$$
其中有 $n_i$ 个 $\lambda_i\ (i=1,2,\cdots,s)$。
【例5.19】（2004,3）设 $n$ 阶矩阵
$$A=\begin{pmatrix}1&b&\cdots&b\\b&1&\cdots&b\\\vdots&\vdots&&\vdots\\b&b&\cdots&1\end{pmatrix}$$
(Ⅰ) 求 $A$ 的特征值和特征向量；(Ⅱ) 求可逆矩阵 $P$，使得 $P^{-1}AP$ 为对角矩阵。
【解】(Ⅰ) 由于
$$A=\begin{pmatrix}b&b&\cdots&b\\b&b&\cdots&b\\\vdots&\vdots&&\vdots\\b&b&\cdots&b\end{pmatrix}+\begin{pmatrix}1-b&&&\\&1-b&&\\&&\ddots&\\&&&1-b\end{pmatrix}=B+(1-b)E$$
(1) 若 $b\neq0$，则由秩 $r(B)=1$，有 $|\lambda E-B|=\lambda^n-nb\lambda^{n-1}$
知 $B$ 的特征值是 $nb,0,0,\cdots,0$（$n-1$ 个 0）。从而 $A$ 的特征值：
$$\lambda_1=1+(n-1)b,\quad\lambda_2=\cdots=\lambda_n=1-b$$
对于 $B$，当 $\lambda=0$ 时，由 $(0E-B)x=0$ 有
$$0E-B=\begin{pmatrix}-b&-b&\cdots&-b\\-b&-b&\cdots&-b\\\vdots&\vdots&&\vdots\\-b&-b&\cdots&-b\end{pmatrix}\to\begin{pmatrix}1&1&\cdots&1\\0&0&\cdots&0\\\vdots&\vdots&&\vdots\\0&0&\cdots&0\end{pmatrix}$$
解得基础解系
$$\eta_1=(1,-1,0,\cdots,0)^T,\eta_2=(1,0,-1,\cdots,0)^T,\cdots,\eta_{n-1}=(1,0,0,\cdots,-1)^T$$
它们是 $B$ 属于特征值 $\lambda=0$ 的特征向量，也是矩阵 $A$ 属于特征值 $\lambda=1-b$ 的特征向量。故 $\lambda=1-b$ 的全部特征向量为：
$$k_1\eta_1+k_2\eta_2+\cdots+k_{n-1}\eta_{n-1}\quad(k_1,k_2,\cdots,k_{n-1}\text{ 不全为 }0)$$` },
      { p: 137, md: R`对于 $B$，由于 $B^2=nbB$，有 $B(\gamma_1,\gamma_2,\cdots,\gamma_n)=nb(\gamma_1,\gamma_2,\cdots,\gamma_n)$
知 $\gamma_1$ 是 $B$ 属于特征值 $\lambda=nb$ 的特征向量。所以矩阵 $A$ 属于特征值 $\lambda=1+(n-1)b$ 的特征向量是：
$$k(1,1,\cdots,1)^T\quad(k\text{ 为任意非零常数})$$
(2) 若 $b=0$，则 $A=E$，此时 $A$ 的特征值是 $\lambda_1=\cdots=\lambda_n=1$，任意非零向量均为特征向量。
(Ⅱ) 当 $b\neq0$ 时，$A$ 有 $n$ 个线性无关的特征向量，令
$$P=\begin{pmatrix}1&1&\cdots&1&1\\-1&0&\cdots&0&1\\0&-1&\cdots&0&1\\\vdots&\vdots&&\vdots&\vdots\\0&0&\cdots&-1&1\end{pmatrix}$$
则有
$$P^{-1}AP=\Lambda=\begin{pmatrix}1-b&&&\\&1-b&&\\&&\ddots&\\&&&1-b\\&&&&1+(n-1)b\end{pmatrix}$$
当 $b=0$ 时，因为 $A=E$，那么对任意可逆矩阵 $P$，均有 $P^{-1}AP=E$
【评注】本题如果能观察出矩阵 $A$ 可表示为 $B+kE$ 的形式，其中 $r(B)=1$，那么 $A$ 的特征值、特征向量问题用矩阵 $B$ 的特征值、特征向量来中转是简便的。另一思路请直接计算 $A$ 的特征值与特征向量。
(Ⅰ) $1^\circ$ 当 $b\neq0$ 时，
$$|\lambda E-A|=\begin{vmatrix}\lambda-1&-b&\cdots&-b\\-b&\lambda-1&\cdots&-b\\\vdots&\vdots&&\vdots\\-b&-b&\cdots&\lambda-1\end{vmatrix}=\cdots=[\lambda-1-(n-1)b][\lambda-(1-b)]^{n-1}.$$
故 $A$ 的特征值为 $\lambda_1=1+(n-1)b,\lambda_2=\cdots=\lambda_n=1-b$。
对于 $\lambda_1=1+(n-1)b$，设 $A$ 的属于特征值 $\lambda_1$ 的一个特征向量为 $\xi_1$，则按定义
$$\begin{pmatrix}1&b&\cdots&b\\b&1&\cdots&b\\\vdots&\vdots&&\vdots\\b&b&\cdots&1\end{pmatrix}\xi_1=[1+(n-1)b]\xi_1,$$
解得 $\xi_1=(1,1,\cdots,1)^T$，所以全部特征向量为` },
      { p: 138, md: R`$k\xi_1=k(1,1,\cdots,1)^T$（$k$ 为任意非零常数）。
对于 $\lambda_2=\cdots=\lambda_n=1-b$，解齐次线性方程组 $[(1-b)E-A]x=0$，由
$$(1-b)E-A=\begin{pmatrix}-b&-b&\cdots&-b\\-b&-b&\cdots&-b\\\vdots&\vdots&&\vdots\\-b&-b&\cdots&-b\end{pmatrix}\to\begin{pmatrix}1&1&\cdots&1\\0&0&\cdots&0\\\vdots&\vdots&&\vdots\\0&0&\cdots&0\end{pmatrix},$$
解得基础解系
$$\xi_2=(1,-1,0,\cdots,0)^T,\xi_3=(1,0,-1,\cdots,0)^T,\cdots\quad\cdots\quad\xi_n=(1,0,0,\cdots,-1)^T.$$
故全部特征向量为 $k_2\xi_2+k_3\xi_3+\cdots+k_n\xi_n$（$k_2,\cdots,k_n$ 是不全为零的常数）。
$2^\circ$ 当 $b=0$ 时，特征值 $\lambda_1=\cdots=\lambda_n=1$，任意非零列向量均为特征向量。
【例5.20】（2005,4）设 $A$ 为 3 阶矩阵，$\alpha_1,\alpha_2,\alpha_3$ 是线性无关的 3 维列向量，且满足 $A\alpha_1=\alpha_1+\alpha_2+\alpha_3,A\alpha_2=2\alpha_2+\alpha_3,A\alpha_3=2\alpha_2+3\alpha_3$。
(1) 求矩阵 $B$ 使得 $A(\alpha_1,\alpha_2,\alpha_3)=(\alpha_1,\alpha_2,\alpha_3)B$；
(2) 求矩阵 $A$ 的特征值；
(3) 求可逆矩阵 $P$，使得 $P^{-1}AP$ 为对角矩阵。
【解】(1) 按已知条件，有
$$A(\alpha_1,\alpha_2,\alpha_3)=(\alpha_1+\alpha_2+\alpha_3,2\alpha_2+\alpha_3,2\alpha_2+3\alpha_3)=(\alpha_1,\alpha_2,\alpha_3)\begin{pmatrix}1&0&0\\1&2&2\\1&1&3\end{pmatrix}$$
所以矩阵 $B=\begin{pmatrix}1&0&0\\1&2&2\\1&1&3\end{pmatrix}$。
(2) 因为 $\alpha_1,\alpha_2,\alpha_3$ 线性无关，矩阵 $P_1=(\alpha_1,\alpha_2,\alpha_3)$ 可逆，所以 $P_1^{-1}AP_1=B$ 即 $A\sim B$。
由 $|\lambda E-B|=\begin{vmatrix}\lambda-1&0&0\\-1&\lambda-2&-2\\-1&-1&\lambda-3\end{vmatrix}=(\lambda-1)^2(\lambda-4)$
知矩阵 $B$ 的特征值是 $1,1,4$。从而矩阵 $A$ 的特征值是 $1,1,4$。
(3) 对矩阵 $B$，由 $(E-B)x=0$ 得特征向量 $\beta_1=(-1,1,0)^T,\beta_2=(-2,0,1)^T$
由 $(4E-B)x=0$ 得特征向量 $\beta_3=(0,1,1)^T$
那么令 $P_2=(\beta_1,\beta_2,\beta_3)$，则有 $P_2^{-1}BP_2=\begin{pmatrix}1&&\\&1&\\&&4\end{pmatrix}$` },
      { p: 139, md: R`于是 $P_2^{-1}P_1^{-1}AP_1P_2=\begin{pmatrix}1&&\\&1&\\&&4\end{pmatrix}$
故当 $P=P_1P_2=(\alpha_1,\alpha_2,\alpha_3)\begin{pmatrix}-1&-2&0\\1&0&1\\0&1&1\end{pmatrix}=(-\alpha_1+\alpha_2,-2\alpha_1+\alpha_3,\alpha_2+\alpha_3)$ 时 $P^{-1}AP=\Lambda$。
#### 用相似求 $A^n$
提示 若 $A\sim\Lambda$。则 $P^{-1}AP=\Lambda$。从而 $P^{-1}A^nP=\Lambda^n$ 故 $A^n=P\Lambda^nP^{-1}$。
【例5.21】已知 $A=\begin{pmatrix}1&1\\2&2\end{pmatrix}$，求 $A^n$。
【解】先求 $A$ 的特征值。由 $A$ 的特征方程
$$|\lambda E-A|=\begin{vmatrix}\lambda-1&-1\\-2&\lambda-2\end{vmatrix}=\lambda^2-3\lambda=0$$
得到 $A$ 的特征值是 $\lambda_1=3,\lambda_2=0$。
2 阶矩阵 $A$ 有两个不同特征值，故 $A$ 可以对角化。求 $A$ 的特征向量，有
当 $\lambda_1=3$ 时，从 $(3E-A)x=0$，得 $\alpha_1=\begin{pmatrix}1\\2\end{pmatrix}$；
当 $\lambda_2=0$ 时，从 $(0E-A)x=0$，得 $\alpha_2=\begin{pmatrix}1\\-1\end{pmatrix}$。
构造可逆矩阵 $P=(\alpha_1\ \alpha_2)=\begin{pmatrix}1&1\\2&-1\end{pmatrix}$，
则 $A=P\Lambda P^{-1}$，从而
$$A^n=P\Lambda^nP^{-1}=\begin{pmatrix}1&1\\2&-1\end{pmatrix}\begin{pmatrix}3^n&\\&0\end{pmatrix}\cdot\frac{1}{3}\begin{pmatrix}1&1\\2&-1\end{pmatrix}=\begin{pmatrix}3^{n-1}&3^{n-1}\\2\cdot3^{n-1}&2\cdot3^{n-1}\end{pmatrix}.$$
【说明】本题 $r(A)=1$，用特征值对角化方法求 $A^n$ 是麻烦的，简捷的解法应当是：
由 $A=\begin{pmatrix}1\\2\end{pmatrix}(1\ 1)$ 知
$$A^2=\begin{pmatrix}1\\2\end{pmatrix}[1\ 1]\begin{pmatrix}1\\2\end{pmatrix}[1\ 1]=\begin{pmatrix}1\\2\end{pmatrix}\left([1\ 1]\begin{pmatrix}1\\2\end{pmatrix}\right)[1\ 1]=3A.$$
递推地，$A^n=3^{n-1}A=\begin{pmatrix}3^{n-1}&3^{n-1}\\2\cdot3^{n-1}&2\cdot3^{n-1}\end{pmatrix}$。
【例5.22】设 $A=\begin{pmatrix}3&4\\-1&-1\end{pmatrix},P=\begin{pmatrix}2&3\\-1&-1\end{pmatrix},B=P^{-1}AP$` },
      { p: 140, md: R`求 $A^{100}$
【分析】因为 $A$ 与 $B$ 相似，有 $B^{100}=P^{-1}A^{100}P$，从而可利用 $B^{100}$ 间接求出 $A^{100}$。
【解】$B=P^{-1}AP=\begin{pmatrix}2&3\\-1&-1\end{pmatrix}^{-1}\begin{pmatrix}3&4\\-1&-1\end{pmatrix}\begin{pmatrix}2&3\\-1&-1\end{pmatrix}=\begin{pmatrix}-1&-3\\1&2\end{pmatrix}\begin{pmatrix}3&4\\-1&-1\end{pmatrix}\begin{pmatrix}2&3\\-1&-1\end{pmatrix}=\begin{pmatrix}1&1\\0&1\end{pmatrix}$
因为 $B=\begin{pmatrix}1&1\\0&1\end{pmatrix}=\begin{pmatrix}1&0\\0&1\end{pmatrix}+\begin{pmatrix}0&1\\0&0\end{pmatrix}=E+C$
故 $B^{100}=(E+C)^{100}=E+100C=\begin{pmatrix}1&100\\0&1\end{pmatrix}$
那么 $A^{100}=(PBP^{-1})^{100}=(PBP^{-1})(PBP^{-1})\cdots(PBP^{-1})=PB^{100}P^{-1}=\begin{pmatrix}2&3\\-1&-1\end{pmatrix}\begin{pmatrix}1&100\\0&1\end{pmatrix}\begin{pmatrix}-1&-3\\1&2\end{pmatrix}=\begin{pmatrix}201&400\\-100&-199\end{pmatrix}$。
【例5.23】设 $\begin{cases}x_n=x_{n-1}+2y_{n-1},\\y_n=4x_{n-1}+3y_{n-1},\end{cases}$ 且 $x_0=2,y_0=1$，求 $x_{100}$。
【分析】将方程组表示成矩阵形式，且根据递推关系，推出 $[x_n,y_n]^T$ 和 $[x_0,y_0]^T$ 的关系式。这是矩阵 $A$ 的 $n$ 次幂 $A^n$ 的一个具体应用的例子，其中 $A^n$ 的计算，又是特征值特征向量的一个典型应用。
【解】由
$$\begin{pmatrix}x_n\\y_n\end{pmatrix}=\begin{pmatrix}1&2\\4&3\end{pmatrix}\begin{pmatrix}x_{n-1}\\y_{n-1}\end{pmatrix}=\begin{pmatrix}1&2\\4&3\end{pmatrix}^2\begin{pmatrix}x_{n-2}\\y_{n-2}\end{pmatrix}=\cdots=\begin{pmatrix}1&2\\4&3\end{pmatrix}^n\begin{pmatrix}x_0\\y_0\end{pmatrix},$$
问题归结到计算方阵的 $n$ 次幂。设 $A=\begin{pmatrix}1&2\\4&3\end{pmatrix}$，
由 $A$ 的特征多项式
$$|\lambda E-A|=\begin{vmatrix}\lambda-1&-2\\-4&\lambda-3\end{vmatrix}=\lambda^2-4\lambda-5=(\lambda-5)(\lambda+1),$$
得到 $A$ 的特征值为 $\lambda_1=5,\lambda_2=-1$。
当 $\lambda_1=5$ 时，由 $(5E-A)x=\begin{pmatrix}4&-2\\-4&2\end{pmatrix}\begin{pmatrix}x_1\\x_2\end{pmatrix}=0$，得特征向量 $\xi_1=[1,2]^T$。
当 $\lambda_2=-1$ 时，由 $(-E-A)x=\begin{pmatrix}-2&-2\\-4&-4\end{pmatrix}\begin{pmatrix}x_1\\x_2\end{pmatrix}=0$，得特征向量 $\xi_2=[1,-1]^T$。` },
      { p: 141, md: R`故有可逆矩阵 $P=(\xi_1\ \xi_2)=\begin{pmatrix}1&1\\2&-1\end{pmatrix}$，
使得 $A=P\Lambda P^{-1}$，其中 $\Lambda=\begin{pmatrix}5&\\&-1\end{pmatrix},P^{-1}=\frac{1}{3}\begin{pmatrix}1&1\\2&-1\end{pmatrix}$。
那么
$$\begin{pmatrix}x_{100}\\y_{100}\end{pmatrix}=A^{100}\begin{pmatrix}x_0\\y_0\end{pmatrix}=(P\Lambda P^{-1})^{100}\begin{pmatrix}x_0\\y_0\end{pmatrix}=P\Lambda^{100}P^{-1}\begin{pmatrix}x_0\\y_0\end{pmatrix}=\begin{pmatrix}1&1\\2&-1\end{pmatrix}\begin{pmatrix}5^{100}&0\\0&1\end{pmatrix}\frac{1}{3}\begin{pmatrix}1&1\\2&-1\end{pmatrix}\begin{pmatrix}2\\1\end{pmatrix}=\begin{pmatrix}1&1\\2&-1\end{pmatrix}\begin{pmatrix}5^{100}&0\\0&1\end{pmatrix}\frac{1}{3}\begin{pmatrix}3\\3\end{pmatrix}=\begin{pmatrix}1&1\\2&-1\end{pmatrix}\begin{pmatrix}5^{100}\\1\end{pmatrix}=\begin{pmatrix}5^{100}+1\\2\cdot5^{100}-1\end{pmatrix},$$
得 $x_{100}=5^{100}+1$。
#### 求参数的问题
【例5.24】若 $\alpha=(3,-1,a)^T$ 是矩阵 $A=\begin{pmatrix}-1&0&2\\1&2&-1\\1&3&a\end{pmatrix}$ 的特征向量，则 $a=$______。
【分析】按定义，$A\alpha=\lambda\alpha$ 于是有
$$\begin{pmatrix}-1&0&2\\1&2&-1\\1&3&a\end{pmatrix}\begin{pmatrix}3\\-1\\a\end{pmatrix}=\lambda\begin{pmatrix}3\\-1\\a\end{pmatrix}$$
即
$$\begin{cases}-3+0+2a=3\lambda\\3-2-a=-\lambda,\\3-3+a^2=a\lambda.\end{cases}$$
解出 $a=0$。
【例5.25】已知 $\begin{pmatrix}2&-2&0\\-2&1&-2\\0&-2&x\end{pmatrix}\sim\begin{pmatrix}1&0&0\\0&y&0\\0&0&-2\end{pmatrix}$，则 $y=$______。
【分析】由于 $A\sim B$，有 $2+1+x=1+y+(-2)$ (1)
由 1 是矩阵 $A$ 的特征值，即
$$|E-A|=\begin{vmatrix}-1&2&0\\2&0&2\\0&2&1-x\end{vmatrix}=4x=0\tag{2}$$` },
      { p: 142, md: R`可见 $y=4$。
【例5.26】（2000,4）设矩阵 $A=\begin{pmatrix}1&-1&1\\x&4&y\\-3&-3&5\end{pmatrix}$，已知 $A$ 有 3 个线性无关的特征向量，$\lambda=2$ 是 $A$ 的二重特征值，试求可逆矩阵 $P$，使得 $P^{-1}AP$ 为对角形矩阵。
【解】因为矩阵 $A$ 有 3 个线性无关的特征向量，而 $\lambda=2$ 是其二重特征值，故 $\lambda=2$ 必有 2 个线性无关的特征向量，因此方程组 $(2E-A)x=0$ 的基础解系由 2 个解向量所构成，故秩 $r(2E-A)=1$。由
$$2E-A=\begin{pmatrix}1&1&-1\\-x&-2&-y\\3&3&-3\end{pmatrix}\to\begin{pmatrix}1&1&-1\\2-x&0&-y-2\\0&0&0\end{pmatrix}$$
知 $x=2,y=-2$。
对矩阵 $A=\begin{pmatrix}1&-1&1\\2&4&-2\\-3&-3&5\end{pmatrix}$
由特征多项式
$$|\lambda E-A|=\begin{vmatrix}\lambda-1&1&-1\\-2&\lambda-4&2\\3&3&\lambda-5\end{vmatrix}=\begin{vmatrix}\lambda-2&0&-1\\0&\lambda-2&2\\\lambda-2&\lambda-2&\lambda-5\end{vmatrix}=(\lambda-2)^2(\lambda-6)$$
得到矩阵 $A$ 的特征值：$\lambda_1=\lambda_2=2,\lambda_3=6$。
对 $\lambda=2$，由 $(2E-A)x=0$，即
$$\begin{pmatrix}1&1&-1\\-2&-2&2\\3&3&-3\end{pmatrix}\to\begin{pmatrix}1&1&-1\\0&0&0\\0&0&0\end{pmatrix}$$
得到特征向量 $\alpha_1=(-1,1,0)^T,\alpha_2=(1,0,1)^T$
对 $\lambda=6$，由 $(6E-A)x=0$，即
$$\begin{pmatrix}5&1&-1\\-2&2&2\\3&3&1\end{pmatrix}\to\begin{pmatrix}-1&1&1\\0&3&2\\0&0&0\end{pmatrix}$$
得到特征向量 $\alpha_3=(1,-2,3)^T$
那么，令 $P=(\alpha_1,\alpha_2,\alpha_3)=\begin{pmatrix}-1&1&1\\1&0&-2\\0&1&3\end{pmatrix}$
有 $P^{-1}AP=\Lambda=\begin{pmatrix}2&&\\&2&\\&&6\end{pmatrix}$` },
      { p: 143, md: R`【评注】当已知条件与特征值相关联时，可以由
(1) 特征值，特征向量定义
(2) 相似的必要条件
(3) 相似对角化的理论
等几个方面去思考，寻找突破口来求参数。
#### 反求矩阵 $A$
【例5.27】（1995,4）设三阶矩阵 $A$ 满足 $A\alpha_i=i\alpha_i\ (i=1,2,3)$，其中列向量 $\alpha_1=(1,2,2)^T,\alpha_2=(2,-2,1)^T,\alpha_3=(-2,-1,2)^T$，试求矩阵 $A$。
【解】由 $A\alpha_1=\alpha_1,A\alpha_2=2\alpha_2,A\alpha_3=3\alpha_3$，知 $\alpha_1,\alpha_2,\alpha_3$ 是矩阵 $A$ 不同特征值的特征向量，它们线性无关。利用分块矩阵，有
$$A(\alpha_1,\alpha_2,\alpha_3)=(\alpha_1,2\alpha_2,3\alpha_3)$$
因为矩阵 $(\alpha_1,\alpha_2,\alpha_3)$ 可逆，故
$$A=(\alpha_1\ 2\alpha_2\ 3\alpha_3)(\alpha_1\ \alpha_2\ \alpha_3)^{-1}=\begin{pmatrix}1&4&-6\\2&-4&-3\\2&2&6\end{pmatrix}\cdot\frac{1}{9}\begin{pmatrix}1&2&2\\2&-2&1\\-2&-1&2\end{pmatrix}=\frac{1}{3}\begin{pmatrix}7&0&-2\\0&5&-2\\-2&-2&6\end{pmatrix}$$
【解法二】因为矩阵 $A$ 有 3 个不同的特征值，所以 $A$ 可相似对角化，有
$$P^{-1}AP=\Lambda=\begin{pmatrix}1&&\\&2&\\&&3\end{pmatrix},P=(\alpha_1,\alpha_2,\alpha_3)$$
那么 $A=P\Lambda P^{-1}=\cdots$ 下略
【例5.28】已知方程组
$$\begin{cases}x_1+2x_2+x_3=3\\2x_1+(a+4)x_2-5x_3=6\\-x_1-2x_2+ax_3=-3\end{cases}$$
有无穷多解，矩阵 $A$ 的特征值是 $1,-1,0$，对应的特征向量依次是 $\alpha_1=(1,2a,-1)^T,\alpha_2=(a-2,-1,a+1)^T,\alpha_3=(a,a+3,a+2)^T$，求矩阵 $A$ 及 $A^{100}$。
【解】对方程组增广矩阵作初等行变换，有
$$\begin{pmatrix}1&2&1&3\\2&a+4&-5&6\\-1&-2&a&-3\end{pmatrix}\to\begin{pmatrix}1&2&1&3\\0&a&-7&0\\0&0&a+1&0\end{pmatrix}$$
当 $a=-1$ 及 $a=0$ 时，方程组均有无穷多解。
若 $a=-1$，$\alpha_1=(1,-2,-1)^T,\alpha_2=(-3,-1,0)^T,\alpha_3=(-1,2,1)^T$ 线性相关，不合题意。` },
      { p: 144, md: R`当 $a=0$ 时，$\boldsymbol{\alpha}_1=(1,0,-1)^T,\boldsymbol{\alpha}_2=(-2,-1,1)^T,\boldsymbol{\alpha}_3=(0,3,2)^T$ 线性无关。
按特征值，特征向量定义，有 $A(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3)=(\boldsymbol{\alpha}_1,-\boldsymbol{\alpha}_2,\boldsymbol{0})$
那么 $A=(\boldsymbol{\alpha}_1,-\boldsymbol{\alpha}_2,\boldsymbol{0})(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3)^{-1}=\begin{pmatrix}1&2&0\\0&1&0\\-1&-1&0\end{pmatrix}\begin{pmatrix}1&-2&0\\0&-1&3\\-1&1&2\end{pmatrix}^{-1}=\begin{pmatrix}-11&8&-12\\-3&2&-3\\8&-6&9\end{pmatrix}$
因为 $A$ 有 3 个不同的特征值，故 $A\sim\Lambda=\begin{pmatrix}1&&\\&-1&\\&&0\end{pmatrix}$
有 $P^{-1}AP=\Lambda$，其中 $P=(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3)$
于是 $A=P\Lambda P^{-1}$
那么 $A^2=(P\Lambda P^{-1})(P\Lambda P^{-1})=P\Lambda^2P^{-1}$
归纳地
$$A^{100}=P\Lambda^{100}P^{-1}=\begin{pmatrix}1&-2&0\\0&-1&3\\-1&1&2\end{pmatrix}\begin{pmatrix}1&&\\&1&\\&&0\end{pmatrix}\begin{pmatrix}-5&4&-6\\-3&2&-3\\-1&1&-1\end{pmatrix}=\begin{pmatrix}1&0&0\\3&-2&3\\2&-2&3\end{pmatrix}$$
#### 实对称矩阵
提示 实对称矩阵有哪些特殊的性质？
【例5.29】设 $A$ 是 3 阶实对称矩阵，秩 $r(A)=2$，若 $A^2=A$，则 $A$ 的特征值是______。
【分析】设 $\lambda$ 是 $A$ 的任一特征值，$\boldsymbol{\alpha}$ 是属于 $\lambda$ 的特征向量，即 $A\boldsymbol{\alpha}=\lambda\boldsymbol{\alpha},\boldsymbol{\alpha}\neq\boldsymbol{0}$。
那么 $A^2\boldsymbol{\alpha}=A(\lambda\boldsymbol{\alpha})=\lambda A\boldsymbol{\alpha}=\lambda^2\boldsymbol{\alpha}$
由 $A^2=A$，有 $\lambda^2\boldsymbol{\alpha}=\lambda\boldsymbol{\alpha}$，即 $(\lambda^2-\lambda)\boldsymbol{\alpha}=\boldsymbol{0}$ 且 $\boldsymbol{\alpha}\neq\boldsymbol{0}$
故矩阵 $A$ 的特征值是 1 或 0。
因为 $A$ 是实对称矩阵，知 $A\sim\Lambda$，且 $\Lambda$ 由 $A$ 的特征值所构成，根据秩 $r(A)=r(\Lambda)$，有
$$\Lambda=\begin{pmatrix}1&&\\&1&\\&&0\end{pmatrix}$$` },
      { p: 145, md: R`所以矩阵 $A$ 的特征值是 1,1,0。
【例5.30】设 $A=\begin{pmatrix}3&-2&-4\\-2&6&-2\\-4&-2&3\end{pmatrix}$，求正交矩阵 $P$ 使 $P^{-1}AP=\Lambda$。
【解】由 $A$ 的特征多项式
$$|\lambda E-A|=\begin{vmatrix}\lambda-3&2&4\\2&\lambda-6&2\\4&2&\lambda-3\end{vmatrix}=\begin{vmatrix}\lambda-7&0&7-\lambda\\2&\lambda-6&2\\4&2&\lambda-3\end{vmatrix}=\begin{vmatrix}\lambda-7&0&0\\2&\lambda-6&4\\4&2&\lambda+1\end{vmatrix}=(\lambda-7)(\lambda^2-5\lambda-14)$$
矩阵 $A$ 的特征值为 $\lambda_1=\lambda_2=7,\lambda_3=-2$。
对 $\lambda=7$，由 $(7E-A)\boldsymbol{x}=\boldsymbol{0}$，即
$$\begin{pmatrix}4&2&4\\2&1&2\\4&2&4\end{pmatrix}\to\begin{pmatrix}2&1&2\\0&0&0\\0&0&0\end{pmatrix}$$
得特征向量 $\boldsymbol{\alpha}_1=(-1,2,0)^T,\boldsymbol{\alpha}_2=(-1,0,1)^T$
对 $\lambda=-2$，由 $(-2E-A)\boldsymbol{x}=\boldsymbol{0}$，即
$$\begin{pmatrix}-5&2&4\\2&-8&2\\4&2&-5\end{pmatrix}\to\begin{pmatrix}1&-4&1\\0&2&-1\\0&0&0\end{pmatrix}$$
得特征向量 $\boldsymbol{\alpha}_3=(2,1,2)^T$
由于 $\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2$ 是同一个特征值的特征向量，现在不正交，故应 Schmidt 正交化
$$\boldsymbol{\beta}_1=\boldsymbol{\alpha}_1=\begin{pmatrix}-1\\2\\0\end{pmatrix}$$
$$\boldsymbol{\beta}_2=\boldsymbol{\alpha}_2-\frac{(\boldsymbol{\alpha}_2,\boldsymbol{\beta}_1)}{(\boldsymbol{\beta}_1,\boldsymbol{\beta}_1)}\boldsymbol{\beta}_1=\begin{pmatrix}-1\\0\\1\end{pmatrix}-\frac{1}{5}\begin{pmatrix}-1\\2\\0\end{pmatrix}=\frac{1}{5}\begin{pmatrix}-4\\-2\\5\end{pmatrix}$$
单位化，有 $\boldsymbol{\alpha}_1=\frac{1}{\sqrt{3}}\begin{pmatrix}-1\\2\\0\end{pmatrix},\boldsymbol{\alpha}_2=\frac{1}{3\sqrt{5}}\begin{pmatrix}-4\\-2\\5\end{pmatrix}$
再对 $\boldsymbol{\alpha}_3$ 单位化，有 $\boldsymbol{\alpha}_3=\frac{1}{3}\begin{pmatrix}2\\1\\2\end{pmatrix}$
那么，令` },
      { p: 146, md: R`$$P=(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3)=\begin{pmatrix}-\frac{1}{\sqrt{5}}&-\frac{4}{3\sqrt{5}}&\frac{2}{3}\\\frac{2}{\sqrt{5}}&-\frac{2}{3\sqrt{5}}&\frac{1}{3}\\0&\frac{\sqrt{5}}{3}&\frac{2}{3}\end{pmatrix}$$
则有 $P^{-1}AP=\Lambda=\begin{pmatrix}7&&\\&7&\\&&-2\end{pmatrix}$
【评注】用正交矩阵把实对称矩阵 $A$ 化为对角矩阵的步骤：
(1) 求矩阵 $A$ 的特征值
(2) 求矩阵 $A$ 的特征向量
(3) 单位化当特征值有重根时，可能还要 Schmidt 正交化
(4) 构造正交矩阵 $P$，得 $P^{-1}AP=\Lambda$（$P$ 与 $\Lambda$ 次序要协调一致）
【例5.31】（2001,3,4）设矩阵
$$A=\begin{pmatrix}1&1&a\\1&a&1\\a&1&1\end{pmatrix},\boldsymbol{\beta}=\begin{pmatrix}1\\1\\-2\end{pmatrix},$$
已知线性方程组 $A\boldsymbol{x}=\boldsymbol{\beta}$ 有解但不唯一。试求 (1) $a$ 的值；(2) 正交矩阵 $Q$，使 $Q^TAQ$ 为对角矩阵。
【分析】方程组有解且不唯一，即方程组有无穷多解，故可由 $r(A)=r(\overline{A})<3$ 来求 $a$ 的值。$Q$ 是正交矩阵，有 $Q^T=Q^{-1}$，故 $Q^TAQ=\Lambda$ 即 $Q^{-1}AQ=\Lambda$，为此应当求出 $A$ 的特征值与特征向量，然后可构造正交矩阵 $Q$。
【解】对方程组的增广矩阵作初等行变换，有
$$\overline{A}=\begin{pmatrix}1&1&a&1\\1&a&1&1\\a&1&1&-2\end{pmatrix}\to\begin{pmatrix}1&1&a&1\\0&a-1&1-a&0\\0&1-a&1-a^2&-a-2\end{pmatrix}\to\begin{pmatrix}1&1&a&1\\0&a-1&1-a&0\\0&0&(a-1)(a+2)&a+2\end{pmatrix}$$
因为方程组有无穷多解，所以 $r(A)=r(\overline{A})<3$，求出 $a=-2$。
由 $A$ 的特征多项式
$$|\lambda E-A|=\begin{vmatrix}\lambda-1&-1&2\\-1&\lambda+2&-1\\2&-1&\lambda-1\end{vmatrix}=\begin{vmatrix}\lambda-3&0&3-\lambda\\-1&\lambda+2&-1\\2&-1&\lambda-1\end{vmatrix}$$` },
      { p: 147, md: R`$$=\begin{vmatrix}\lambda-3&0&0\\-1&\lambda+2&-2\\2&-1&\lambda+1\end{vmatrix}=(\lambda-3)(\lambda^2+3\lambda)$$
得 $A$ 的特征值是 $3,-3,0$。
对 $\lambda=3$，由 $(3E-A)\boldsymbol{x}=\boldsymbol{0}$，即
$$\begin{pmatrix}2&-1&2\\-1&5&-1\\2&-1&2\end{pmatrix}\to\begin{pmatrix}-1&5&-1\\0&9&0\\0&0&0\end{pmatrix}$$
得特征向量 $\boldsymbol{\alpha}_1=(-1,0,1)^T$。
对 $\lambda=-3$，由 $(-3E-A)\boldsymbol{x}=\boldsymbol{0}$，即
$$\begin{pmatrix}-4&-1&2\\-1&-1&-1\\2&-1&-4\end{pmatrix}\to\begin{pmatrix}1&1&1\\0&3&6\\0&0&0\end{pmatrix}$$
得特征向量 $\boldsymbol{\alpha}_2=(1,-2,1)^T$
对 $\lambda=0$，由 $(0E-A)\boldsymbol{x}=\boldsymbol{0}$，即
$$\begin{pmatrix}-1&-1&2\\-1&2&-1\\2&-1&-1\end{pmatrix}\to\begin{pmatrix}1&1&-2\\0&3&-3\\0&0&0\end{pmatrix}$$
得特征向量 $\boldsymbol{\alpha}_3=(1,1,1)^T$
实对称矩阵特征值不同特征向量已经正交，故只需单位化，有
$$\boldsymbol{\alpha}_1=\frac{1}{\sqrt{2}}\begin{pmatrix}-1\\0\\1\end{pmatrix},\boldsymbol{\alpha}_2=\frac{1}{\sqrt{6}}\begin{pmatrix}-1\\-2\\1\end{pmatrix},\boldsymbol{\alpha}_3=\frac{1}{\sqrt{3}}\begin{pmatrix}1\\1\\1\end{pmatrix}$$
那么令
$$Q=(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3)=\begin{pmatrix}-\frac{1}{\sqrt{2}}&\frac{1}{\sqrt{6}}&\frac{1}{\sqrt{3}}\\0&-\frac{2}{\sqrt{6}}&\frac{1}{\sqrt{3}}\\\frac{1}{\sqrt{2}}&\frac{1}{\sqrt{6}}&\frac{1}{\sqrt{3}}\end{pmatrix}$$
得 $Q^TAQ=Q^{-1}AQ=\Lambda=\begin{pmatrix}3&&\\&-3&\\&&0\end{pmatrix}$。
【例5.32】已知 $A$ 是 3 阶实对称矩阵，特征值是 $3,-6,0$，$\lambda=3$ 的特征向量是 $\boldsymbol{\alpha}_1=(1,a,1)^T$，$\lambda=-6$ 的特征向量是 $\boldsymbol{\alpha}_2=(a,a+1,1)^T$，求矩阵 $A$。
【解】因为 $A$ 是实对称矩阵，不同特征值的特征向量相互正交，故
$$\boldsymbol{\alpha}_1^T\boldsymbol{\alpha}_2=a+a(a+1)+1=0$$
所以 $a=-1$` },
      { p: 148, md: R`设 $\lambda=0$ 的特征向量 $\boldsymbol{\alpha}_3=(x_1,x_2,x_3)^T$，则
$$\begin{cases}\boldsymbol{\alpha}_3^T\boldsymbol{\alpha}_1=x_1-x_2+x_3=0\\\boldsymbol{\alpha}_3^T\boldsymbol{\alpha}_2=-x_1+x_3=0\end{cases}$$
解出 $\boldsymbol{\alpha}_3=(1,2,1)^T$
由 $A(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3)=(3\boldsymbol{\alpha}_1,-6\boldsymbol{\alpha}_2,\boldsymbol{0})$
得 $A=(3\boldsymbol{\alpha}_1,-6\boldsymbol{\alpha}_2,\boldsymbol{0})(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3)^{-1}=\begin{pmatrix}3&6&0\\-3&0&0\\3&-6&0\end{pmatrix}\begin{pmatrix}1&-1&1\\-1&0&2\\1&1&1\end{pmatrix}^{-1}=\begin{pmatrix}-2&-1&4\\-1&1&-1\\4&-1&-2\end{pmatrix}$
【例5.33】（2007,1,2,3,4）设 3 阶对称矩阵 $A$ 的特征值 $\lambda_1=1,\lambda_2=2,\lambda_3=-2$。$\boldsymbol{\alpha}_1=(1,-1,1)^T$ 是 $A$ 的属于 $\lambda_1$ 的一个特征向量，记 $B=A^5-4A^3+E$ 其中 $E$ 为 3 阶单位矩阵
(Ⅰ) 验证 $\boldsymbol{\alpha}_1$ 是矩阵 $B$ 的特征向量，并求 $B$ 的全部特征值与特征向量；
(Ⅱ) 求矩阵 $B$。
【解】(Ⅰ) 利用若 $A\boldsymbol{\alpha}=\lambda\boldsymbol{\alpha}$，则 $A^n\boldsymbol{\alpha}=\lambda^n\boldsymbol{\alpha}$，我们有
$$B\boldsymbol{\alpha}_1=(A^5-4A^3+E)\boldsymbol{\alpha}_1=(\lambda_1^5-4\lambda_1^3+1)\boldsymbol{\alpha}_1=-2\boldsymbol{\alpha}_1,$$
所以 $\boldsymbol{\alpha}_1$ 是矩阵 $B$ 属于特征值 $\mu_1=-2$ 的特征向量。
又若 $A\boldsymbol{\alpha}_2=\lambda_2\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_2\neq\boldsymbol{0},A\boldsymbol{\alpha}_3=\lambda_3\boldsymbol{\alpha}_3,\boldsymbol{\alpha}_3\neq\boldsymbol{0}$，且 $\lambda_2\neq\lambda_3$ 则 $\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3$ 线性无关。
由于 $B\boldsymbol{\alpha}_2=(\lambda_2^5-4\lambda_2^3+1)\boldsymbol{\alpha}_2=\boldsymbol{\alpha}_2,B\boldsymbol{\alpha}_3=(\lambda_3^5-4\lambda_3^3+1)\boldsymbol{\alpha}_3=\boldsymbol{\alpha}_3$
所以 $\mu_2=\mu_3=1$ 是矩阵 $B$ 的二重特征值。因为 $A$ 是对称矩阵知 $B$ 是对称矩阵。
若 $\boldsymbol{\alpha}=(x_1,x_2,x_3)^T$ 是矩阵 $B$ 属于特征值 $\mu=1$ 的特征向量。则不同特征值的特征向量相互正交，即
$$\boldsymbol{\alpha}^T\boldsymbol{\alpha}_1=x_1-x_2+x_3=0$$
所以 $\boldsymbol{\alpha}_2=(1,1,0)^T,\boldsymbol{\alpha}_3=(0,1,1)^T$ 是 $B$ 属于特征值 $\mu=1$ 的特征向量。
综上所述，$B$ 的特征值 $-2,1,1$。属于 $-2$ 的特征向量是 $k_1(1,-1,1)^T,k_1\neq0$ 属于 1 特征向量是 $k_2(1,1,0)^T+k_3(0,1,1)^T,k_2,k_3$ 不全为 0。
(Ⅱ) 由 $B\boldsymbol{\alpha}_1=-2\boldsymbol{\alpha}_1,B\boldsymbol{\alpha}_2=\boldsymbol{\alpha}_2,B\boldsymbol{\alpha}_3=\boldsymbol{\alpha}_3$，有 $B(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3)=(-2\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3)$
故 $B=(-2\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3)(\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3)^{-1}=\begin{pmatrix}-2&1&0\\2&1&1\\-2&0&1\end{pmatrix}\begin{pmatrix}1&1&0\\-1&1&1\\1&0&1\end{pmatrix}^{-1}=\begin{pmatrix}0&1&-1\\1&0&1\\-1&1&0\end{pmatrix}$
【例5.34】$n$ 阶矩阵` },
      { p: 149, md: R`$$A=\begin{pmatrix}a&1&1&\cdots&1\\1&a&1&\cdots&1\\1&1&a&\cdots&1\\\vdots&\vdots&\vdots&&\vdots\\1&1&1&\cdots&a\end{pmatrix}$$
求秩 $r(A)$
【解】因为
$$A=\begin{pmatrix}a-1&&&&\\&a-1&&&\\&&a-1&&\\&&&\ddots&\\&&&&a-1\end{pmatrix}+\begin{pmatrix}1&1&1&\cdots&1\\1&1&1&\cdots&1\\1&1&1&\cdots&1\\\cdots&\cdots&\cdots&\cdots&\cdots\\1&1&1&\cdots&1\end{pmatrix}=(a-1)E+B$$
而矩阵 $B$ 的秩为 1，有 $|\lambda E-B|=\lambda^n-n\lambda^{n-1}$
得到矩阵 $B$ 的特征值是 $n,0,0,\cdots,0$（$n-1$ 个）
因此矩阵 $A$ 的特征值是 $n+a-1,a-1,a-1,\cdots,a-1$
又因 $A$ 是实对称矩阵，故 $A\sim\Lambda=\begin{pmatrix}n+a-1&&&\\&a-1&&\\&&\ddots&\\&&&a-1\end{pmatrix}$
那么
$$r(A)=\begin{cases}n&\text{若 }a\neq1\text{ 且 }a\neq1-n\\n-1&\text{若 }a=1-n\\1&\text{若 }a=1\end{cases}$$
【评注】求矩阵的秩通常是用初等变换或定义法。例如，由
$$|A|=\begin{vmatrix}a&1&1&\cdots&1\\1&a&1&\cdots&1\\1&1&a&\cdots&1\\\cdots&\cdots&\cdots&\cdots&\cdots\\1&1&1&\cdots&a\end{vmatrix}=(a+n-1)\begin{vmatrix}1&1&1&\cdots&1\\1&a&1&\cdots&1\\1&1&a&\cdots&1\\\cdots&\cdots&\cdots&\cdots&\cdots\\1&1&1&\cdots&a\end{vmatrix}=(a+n-1)(a-1)^{n-1}$$
然后再分三种情况分析判断。
本题的解法是一种特殊情况下的特殊解法。
【例5.35】设 $A$ 是实对称矩阵，$\lambda_1$ 与 $\lambda_2$ 是 $A$ 不同的特征值，$\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2$ 分别是属于 $\lambda_1$ 与 $\lambda_2$ 的特征向量，证明 $\boldsymbol{\alpha}_1$ 与 $\boldsymbol{\alpha}_2$ 正交。
【证】据已知有` },
      { p: 150, md: R`$A^T=A,A\alpha_1=\lambda_1\alpha_1,A\alpha_2=\lambda_2\alpha_2,\lambda_1\neq\lambda_2$
那么 $\lambda_2\alpha_1^T\alpha_2=\alpha_1^TA\alpha_2=\alpha_1^TA^T\alpha_2=(A\alpha_1)^T\alpha_2=(\lambda_1\alpha_1)^T\alpha_2=\lambda_1\alpha_1^T\alpha_2$
所以 $\quad(\lambda_2-\lambda_1)\alpha_1^T\alpha_2=0\quad$ 又 $\lambda_1\neq\lambda_2$
故 $\quad\alpha_1^T\alpha_2=0$，即 $\alpha_1$ 与 $\alpha_2$ 正交。
【例5.36】设 $A$ 是实对称矩阵，证明 $A$ 的特征值必是实数。
【分析】要证 $\lambda$ 是实数就是要证 $\lambda=\overline{\lambda}$（共轭）
【证】设 $\lambda$ 是 $A$ 的特征值，$\alpha$ 是属于特征值 $\lambda$ 的特征向量，即 $A\alpha=\lambda\alpha,\alpha\neq0$
两边取共轭，有 $\overline{A\alpha}=\overline{\lambda\alpha}$
从而 $\quad\overline{A}\,\overline{\alpha}=\overline{\lambda}\,\overline{\alpha}$
因为 $A$ 是实矩阵，$\overline{A}=A$，故有 $A\overline{\alpha}=\overline{\lambda}\,\overline{\alpha}$
用 $\alpha^T$ 左乘上式的两端，得 $\alpha^TA\overline{\alpha}=\overline{\lambda}\alpha^T\overline{\alpha}$
因为 $A$ 是实对称 $A^T=A$，有 $\alpha^TA\overline{\alpha}=\alpha^TA^T\overline{\alpha}=(A\alpha)^T\overline{\alpha}=(\lambda\alpha)^T\overline{\alpha}=\lambda\alpha^T\overline{\alpha}$
于是 $\quad(\overline{\lambda}-\lambda)\alpha^T\overline{\alpha}=0$，因为 $\alpha\neq0$，故 $\alpha^T\overline{\alpha}>0$，所以 $\overline{\lambda}=\lambda$，即 $\lambda$ 是实数。
注：设 $\alpha=(a_1+b_1i,a_2+b_2i,\cdots,a_n+b_ni)^T\neq0$，则
$\alpha^T\overline{\alpha}=a_1^2+b_1^2+a_2^2+b_2^2+\cdots+a_n^2+b_n^2>0$
【评注】对于实对称矩阵的特征值问题，要把握好定理 5.9—5.11，利用隐含的信息来处理问题。
### 四、练习题精选
1. 填空题
(1) 若 1 是矩阵 $A=\begin{pmatrix}2&-1&2\\5&a&3\\-1&1&-2\end{pmatrix}$ 的特征值，则 $a=$______。
(2) 已知矩阵 $A=\begin{pmatrix}3&a\\1&5\end{pmatrix}$ 只有一个线性无关的特征向量，则 $a=$______。
(3) $A$ 是 4 阶矩阵，伴随矩阵 $A^*$ 的特征值是 $1,-2,-4,8$，则矩阵 $A$ 的特征值是______。` }
    ],
    quiz: [
      { q: R`设 $A\alpha=\lambda\alpha,\alpha\neq0$，则 $\lambda$ 称为`, options: [R`$A$ 的特征值`, R`$A$ 的特征向量`, R`$A$ 的秩`, R`$A$ 的迹`], answer: 0, explain: R`特征值定义。` },
      { q: R`矩阵 $A$ 的特征值 $\lambda$ 由下列哪个方程求出`, options: [R`$|\lambda E-A|=0$`, R`$|\lambda E-A|\neq0$`, R`$Ax=0$`, R`$A\alpha=\alpha$`], answer: 0, explain: R`特征方程 $|\lambda E-A|=0$。` },
      { q: R`若 $\lambda_1,\cdots,\lambda_n$ 是 $n$ 阶矩阵 $A$ 的全部特征值，则 $|A|=$`, options: [R`$\prod\lambda_i$`, R`$\sum\lambda_i$`, R`$0$`, R`$n$`], answer: 0, explain: R`$|A|=\prod\lambda_i$，$\sum a_{ii}=\sum\lambda_i$。` },
      { q: R`属于不同特征值的特征向量`, options: [R`线性无关`, R`线性相关`, R`相等`, R`正交`], answer: 0, explain: R`定理 5.3。` },
      { q: R`$n$ 阶矩阵 $A$ 可对角化的充要条件是`, options: [R`$A$ 有 $n$ 个线性无关的特征向量`, R`$A$ 有 $n$ 个不同特征值`, R`$|A|\neq0$`, R`$A$ 是实对称矩阵`], answer: 0, explain: R`定理 5.6；有 $n$ 个不同特征值、实对称都是充分条件。` },
      { q: R`若 $A\sim B$，则下列不正确的是`, options: [R`$A$ 与 $B$ 有相同的特征向量`, R`$|A|=|B|$`, R`$|\lambda E-A|=|\lambda E-B|$`, R`$r(A)=r(B)$`], answer: 0, explain: R`相似矩阵特征值相同，但特征向量一般不同。` },
      { q: R`$n_i$ 重特征值 $\lambda_i$ 有 $n_i$ 个线性无关特征向量的等价条件是`, options: [R`$r(\lambda_iE-A)=n-n_i$`, R`$r(\lambda_iE-A)=n$`, R`$r(\lambda_iE-A)=0$`, R`$r(A)=n_i$`], answer: 0, explain: R`定理 5.8。` },
      { q: R`实对称矩阵 $A$ 的不同特征值对应的特征向量`, options: [R`必正交`, R`必线性相关`, R`必相等`, R`必为单位向量`], answer: 0, explain: R`定理 5.9。` },
      { q: R`若 $\lambda$ 是 $A$ 的特征值，则 $A^*$（$A$ 可逆）的特征值是`, options: [R`$\dfrac{|A|}{\lambda}$`, R`$\lambda$`, R`$\dfrac1\lambda$`, R`$|A|\lambda$`], answer: 0, explain: R`$A^*=|A|A^{-1}$，$A^{-1}$ 特征值 $\frac1\lambda$。` },
      { q: R`$A$ 是实对称矩阵，则`, options: [R`必可正交相似对角化`, R`特征值必为复数`, R`不可对角化`, R`特征向量必线性相关`], answer: 0, explain: R`实对称矩阵总存在正交阵 $Q$ 使 $Q^TAQ$ 为对角阵。` }
    ]
  };
})();
