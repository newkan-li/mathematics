window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["la05_s0"] = {
    id: "la05_s0",
    ch: "第五章 特征值与特征向量",
    title: "特征值、特征向量及相似对角化",
    book: "《线性代数辅导讲义》",
    pages: [120, 153],
    img: "assets/img/xiandai",
    content: [
      { p: 120, md: R`### 一、知识结构网络图
**特征值**
- **定义**：$Ax=\lambda x,\ x\neq0$。
- **求法**：特征值——定义法、特征多项式法 $|\lambda E-A|=0$；特征向量——定义法、基础解系法 $(\lambda E-A)x=0$。
- **性质**：不同特征值的特征向量线性无关；$k$ 重特征值至多有 $k$ 个线性无关的特征向量；$|A|=\prod\lambda_i$，$\sum a_{ii}=\sum\lambda_i$。
- **相似**：**定义** $P^{-1}AP=B$；**性质（必要条件）** $r(A)=r(B)$，$|A|=|B|$，$|\lambda E-A|=|\lambda E-B|$，$\sum a_{ii}=\sum b_{ii}$；**可对角化**——$\Leftrightarrow A$ 有 $n$ 个线性无关的特征向量，$\Leftrightarrow r(\lambda_iE-A)=n-n_i$（$\lambda_i$ 为 $n_i$ 重特征值）；$\Leftarrow A$ 有 $n$ 个不同的特征值，$\Leftarrow A$ 是实对称矩阵。
- **实对称矩阵隐含的信息**：与对角矩阵相似；可用正交矩阵对角化；不同特征值的特征向量必正交；特征值必是实数；$k$ 重特征值必有 $k$ 个线性无关的特征向量。` },
      { p: 121, md: R`常用关联矩阵的特征值与特征向量：

| $A$ | $kA+E$ | $A+kE$ | $A^{-1}$ | $A^*$ | $A^n$ | $P^{-1}AP$ |
|---|---|---|---|---|---|---|
| $\lambda$ | $k\lambda+1$ | $\lambda+k$ | $\dfrac1\lambda$ | $\dfrac{|A|}{\lambda}$ | $\lambda^n$ | $\lambda$ |
| $X$ | $X$ | $X$ | $X$ | $X$ | $X$ | $P^{-1}X$ |

【评注】特征值是线性代数的重要内容之一，也是考研的热点。(1) 要理解特征值、特征向量的概念，掌握矩阵特征值的性质，掌握求特征值、特征向量的方法。(2) 要理解矩阵相似的概念，掌握相似矩阵的性质，搞清矩阵能相似对角化的条件，掌握将矩阵化为相似对角矩阵的方法。(3) 要熟悉实对称矩阵特征值、特征向量的特殊性质，掌握用正交矩阵化实对称矩阵为对角矩阵的方法。

### 二、基本内容与重要结论
#### 基本概念
**定义 5.1** 设 $A$ 是 $n$ 阶矩阵，如果存在一个数 $\lambda$ 及非零的 $n$ 维列向量 $\alpha$，使得 $A\alpha=\lambda\alpha$ (5.1) 成立，则称 $\lambda$ 是矩阵 $A$ 的一个特征值，称非零向量 $\alpha$ 是矩阵 $A$ 属于特征值 $\lambda$ 的一个特征向量。
**定义 5.2** 设 $A=(a_{ij})$ 为一个 $n$ 阶矩阵，则行列式 $|\lambda E-A|=\begin{vmatrix}\lambda-a_{11}&-a_{12}&\cdots&-a_{1n}\\-a_{21}&\lambda-a_{22}&\cdots&-a_{2n}\\\vdots&\vdots&&\vdots\\-a_{n1}&-a_{n2}&\cdots&\lambda-a_{nn}\end{vmatrix}$ (5.2) 称为矩阵 $A$ 的特征多项式，$|\lambda E-A|=0$ 称为 $A$ 的特征方程。
【评注】由 $A\alpha=\lambda\alpha,\alpha\neq0$ 有 $(\lambda E-A)\alpha=0,\alpha\neq0$，$\alpha$ 是齐次方程组 $(\lambda E-A)x=0$ 的非零解。(1) 先由 $|\lambda E-A|=0$ 求矩阵 $A$ 的特征值 $\lambda_i$（共 $n$ 个）。` },
      { p: 122, md: R`(2) 再由 $(\lambda_iE-A)x=0$ 求基础解系，即矩阵 $A$ 属于特征值 $\lambda_i$ 的线性无关的特征向量。
**定义 5.3** 设 $A$ 和 $B$ 都是 $n$ 阶矩阵，如果存在可逆矩阵 $P$，使得 $P^{-1}AP=B$ (5.3)，则称矩阵 $A$ 和 $B$ 相似，记作 $A\sim B$。特别地，如果 $A$ 能与对角矩阵相似，则称 $A$ 可对角化。

#### 重要定理
**定理 5.1** 如果 $\alpha_1,\alpha_2,\cdots,\alpha_t$ 都是矩阵 $A$ 的属于特征值 $\lambda$ 的特征向量，那么当 $k_1\alpha_1+\cdots+k_t\alpha_t$ 非零时，它仍是矩阵 $A$ 属于特征值 $\lambda$ 的特征向量。
**定理 5.2** 设 $A$ 是 $n$ 阶矩阵，$\lambda_1,\cdots,\lambda_n$ 是矩阵 $A$ 的特征值，则 (1) $\sum\lambda_i=\sum a_{ii}$ (5.4)；(2) $|A|=\prod\lambda_i$ (5.5)。
**定理 5.3** 如果 $\lambda_1,\cdots,\lambda_m$ 是矩阵 $A$ 的互不相同的特征值，$\alpha_1,\cdots,\alpha_m$ 分别是与之对应的特征向量，则 $\alpha_1,\cdots,\alpha_m$ 线性无关。
**定理 5.4** 如果 $A$ 是 $n$ 阶矩阵，$\lambda_i$ 是 $A$ 的 $m$ 重特征值，则属于 $\lambda_i$ 的线性无关的特征向量的个数不超过 $m$ 个。
**定理 5.5** 如果 $n$ 阶矩阵 $A$ 与 $B$ 相似，则 $A$ 与 $B$ 有相同的特征多项式，从而有相同的特征值，即若 $A\sim B$，则 $|\lambda E-A|=|\lambda E-B|$ (5.6)。
**定理 5.6** $n$ 阶方阵 $A$ 可对角化的充分必要条件是 $A$ 有 $n$ 个线性无关的特征向量。
【评注】若 $n$ 阶矩阵 $A\sim\Lambda$，则有 $P^{-1}AP=\Lambda$，于是 $AP=P\Lambda$。下设 $n=3$，$A(\gamma_1,\gamma_2,\gamma_3)=(\gamma_1\ \gamma_2\ \gamma_3)\begin{pmatrix}a_1&0&0\\0&a_2&0\\0&0&a_3\end{pmatrix}$，即 $A\gamma_i=a_i\gamma_i$。因为 $P=(\gamma_1\ \gamma_2\ \gamma_3)$ 可逆，故 $\gamma_1,\gamma_2,\gamma_3$ 线性无关，由 $A\gamma_i=a_i\gamma_i,\gamma_i\neq0$ 知 $\gamma_i$ 是 $A$ 属于特征值 $a_i$ 的特征向量。
**定理 5.7** 若 $n$ 阶矩阵 $A$ 有 $n$ 个不同的特征值 $\lambda_1,\cdots,\lambda_n$，则 $A$ 可相似对角化，且` },
      { p: 123, md: R`$$A\sim\begin{pmatrix}\lambda_1&&&\\&\lambda_2&&\\&&\ddots&\\&&&\lambda_n\end{pmatrix}\tag{5.7}$$
**定理 5.8** $n$ 阶矩阵 $A$ 可相似对角化的充分必要条件是 $A$ 的每个特征值中，线性无关的特征向量的个数恰好等于该特征值的重数。即 $A\sim\Lambda\Leftrightarrow\lambda_i$ 是 $A$ 的 $n_i$ 重特征值，则 $\lambda_i$ 有 $n_i$ 个线性无关的特征向量 (5.8) $\Leftrightarrow$ 秩 $r(\lambda_iE-A)=n-n_i$ (5.9)。
**定理 5.9** 实对称矩阵 $A$ 的不同特征值 $\lambda_1,\lambda_2$ 所对应的特征向量 $\alpha_1,\alpha_2$ 必正交。
**定理 5.10** 实对称矩阵 $A$ 的特征值都是实数。
**定理 5.11** $n$ 阶实对称阵 $A$ 必可对角化，且总存在正交阵 $Q$，使得 $Q^{-1}AQ=Q^TAQ=\begin{pmatrix}\lambda_1&&&\\&\lambda_2&&\\&&\ddots&\\&&&\lambda_n\end{pmatrix}$ (5.10)，其中 $\lambda_1,\cdots,\lambda_n$ 是 $A$ 的特征值。

### 三、典型例题分析选讲
#### 特征值、特征向量
【例5.1】求矩阵 $A=\begin{pmatrix}17&-2&-2\\-2&14&-4\\-2&-4&14\end{pmatrix}$ 的特征值与特征向量。
【解】由矩阵 $A$ 的特征多项式
$$|\lambda E-A|=\begin{vmatrix}\lambda-17&2&2\\2&\lambda-14&4\\2&4&\lambda-14\end{vmatrix}=\begin{vmatrix}\lambda-17&2&2\\2&\lambda-14&4\\0&18-\lambda&\lambda-18\end{vmatrix}=\begin{vmatrix}\lambda-17&4&2\\2&\lambda-10&4\\0&0&\lambda-18\end{vmatrix}=(\lambda-18)(\lambda^2-27\lambda+162)=(\lambda-18)^2(\lambda-9)$$
得到矩阵 $A$ 的特征值是 $\lambda_1=\lambda_2=18,\lambda_3=9$。当 $\lambda=18$ 时，由 $(18E-A)x=0$，即 $\begin{pmatrix}1&2&2\\2&4&4\\2&4&4\end{pmatrix}\to\begin{pmatrix}1&2&2\\0&0&0\\0&0&0\end{pmatrix}$，` },
      { p: 124, md: R`得基础解系 $\alpha_1=(-2,1,0)^T,\alpha_2=(-2,0,1)^T$，因此属于特征值 $\lambda=18$ 的特征向量是 $k_1\alpha_1+k_2\alpha_2$（$k_1,k_2$ 不全为 $0$）。当 $\lambda=9$ 时，由 $(9E-A)x=0$，即 $\begin{pmatrix}-8&2&2\\2&-5&4\\2&4&-5\end{pmatrix}\to\begin{pmatrix}2&-5&4\\0&1&-1\\0&0&0\end{pmatrix}$，得基础解系 $\alpha_3=(1,2,2)^T$，因此属于特征值 $\lambda=9$ 的特征向量是 $k_3\alpha_3$（$k_3\neq0$）。

【例5.2】求矩阵 $A=\begin{pmatrix}1&0&0\\2&3&0\\4&5&6\end{pmatrix}$ 的特征值与特征向量。
【解】由特征多项式 $|\lambda E-A|=\begin{vmatrix}\lambda-1&0&0\\-2&\lambda-3&0\\-4&-5&\lambda-6\end{vmatrix}=(\lambda-1)(\lambda-3)(\lambda-6)$，得特征值 $\lambda_1=1,\lambda_2=3,\lambda_3=6$。对 $\lambda=1$，$(E-A)x=0$ 即 $\begin{pmatrix}0&0&0\\-2&-2&0\\-4&-5&-5\end{pmatrix}\to\begin{pmatrix}1&1&0\\0&1&5\\0&0&0\end{pmatrix}$，基础解系 $\alpha_1=(5,-5,1)^T$。对 $\lambda=3$，$(3E-A)x=0$ 即 $\begin{pmatrix}2&0&0\\-2&0&0\\-4&-5&-3\end{pmatrix}\to\begin{pmatrix}1&0&0\\0&5&3\\0&0&0\end{pmatrix}$，基础解系 $\alpha_2=(0,3,-5)^T$。对 $\lambda=6$，$(6E-A)x=0$ 即 $\begin{pmatrix}5&0&0\\-2&3&0\\-4&-5&0\end{pmatrix}$，基础解系 $\alpha_3=(0,0,1)^T$。
【评注】上三角矩阵、下三角矩阵、对角矩阵的特征值就是矩阵主对角线上的元素。

【例5.3】求矩阵 $A=\begin{pmatrix}2&1&3\\4&2&6\\6&3&9\end{pmatrix}$ 的特征值与特征向量。
【解】由特征多项式` },
      { p: 125, md: R`$$|\lambda E-A|=\begin{vmatrix}\lambda-2&-1&-3\\-4&\lambda-2&-6\\-6&-3&\lambda-9\end{vmatrix}=\begin{vmatrix}\lambda-2&-1&0\\-4&\lambda-2&-3\lambda\\-6&-3&\lambda\end{vmatrix}=\begin{vmatrix}\lambda-2&-1&0\\-22&\lambda-11&0\\-6&-3&\lambda\end{vmatrix}=\lambda(\lambda^2-13\lambda)$$
得到矩阵 $A$ 的特征值是 $\lambda_1=13,\lambda_2=\lambda_3=0$。对 $\lambda=13$，$(13E-A)x=0$ 即 $\begin{pmatrix}11&-1&-3\\-4&11&-6\\-6&-3&4\end{pmatrix}\to\begin{pmatrix}11&-1&-3\\-26&13&0\\0&0&0\end{pmatrix}$，基础解系 $\alpha_1=(1,2,3)^T$。对 $\lambda=0$，$(0E-A)x=0$ 即 $\begin{pmatrix}-2&-1&-3\\-4&-2&-6\\-6&-3&-9\end{pmatrix}\to\begin{pmatrix}2&1&3\\0&0&0\\0&0&0\end{pmatrix}$，基础解系 $\alpha_2=(-1,2,0)^T,\alpha_3=(-3,0,2)^T$，属于 $\lambda=0$ 的特征向量是 $k_2\alpha_2+k_3\alpha_3$（$k_2,k_3$ 不全为 $0$）。
【评注】设 $A=(a_{ij})$ 是 3 阶矩阵，则 $|\lambda E-A|=\lambda^3-\sum a_{ii}\lambda^2+S_2\lambda-|A|$，其中 $S_2=\begin{vmatrix}a_{11}&a_{12}\\a_{21}&a_{22}\end{vmatrix}+\begin{vmatrix}a_{11}&a_{13}\\a_{31}&a_{33}\end{vmatrix}+\begin{vmatrix}a_{22}&a_{23}\\a_{32}&a_{33}\end{vmatrix}$。若秩 $r(A)=1$，则 $|\lambda E-A|=\lambda^3-\sum a_{ii}\lambda^2=(\lambda-\sum a_{ii})\lambda^2$，特征值 $\lambda_1=\sum a_{ii},\lambda_2=\lambda_3=0$。

【例5.4】求矩阵 $A=\begin{pmatrix}3&-1&3&0\\1&1&4&-1\\0&0&5&-3\\0&0&3&-1\end{pmatrix}$ 的特征值与特征向量。
【解】由特征多项式` },
      { p: 126, md: R`$$|\lambda E-A|=\begin{vmatrix}\lambda-3&1&-3&0\\-1&\lambda-1&-4&1\\0&0&\lambda-5&3\\0&0&-3&\lambda+1\end{vmatrix}=\begin{vmatrix}\lambda-3&1\\-1&\lambda-1\end{vmatrix}\cdot\begin{vmatrix}\lambda-5&3\\-3&\lambda+1\end{vmatrix}=(\lambda^2-4\lambda+4)(\lambda^2-4\lambda+4)=(\lambda-2)^4$$
得到矩阵 $A$ 的特征值是 $\lambda=2$（4 重根）。当 $\lambda=2$ 时，$(2E-A)x=0$ 即 $\begin{pmatrix}-1&1&-3&0\\-1&1&-4&1\\0&0&-3&3\\0&0&-3&3\end{pmatrix}\to\begin{pmatrix}-1&1&-3&0\\0&0&-1&1\\0&0&0&0\\0&0&0&0\end{pmatrix}$，基础解系 $\alpha_1=(1,1,0,0)^T,\alpha_2=(-3,0,1,1)^T$，属于 $\lambda=2$ 的特征向量是 $k_1\alpha_1+k_2\alpha_2$（$k_1,k_2$ 不全为 $0$）。

【例5.5】设 $A$ 是 $n$ 阶矩阵，$\alpha$ 是矩阵 $A$ 属于特征值 $\lambda$ 的特征向量，即 $A\alpha=\lambda\alpha,\alpha\neq0$。那么 $(A+kE)\alpha=A\alpha+k\alpha=(\lambda+k)\alpha$，说明矩阵 $A+kE$ 的特征值是 $\lambda+k$，对应特征向量是 $\alpha$。$A^2\alpha=A(\lambda\alpha)=\lambda A\alpha=\lambda^2\alpha$，说明 $A^2$ 的特征值是 $\lambda^2$，对应特征向量是 $\alpha$。如果 $A$ 可逆，则 $\lambda A^{-1}\alpha=\alpha,\alpha\neq0\Rightarrow A^{-1}\alpha=\dfrac1\lambda\alpha$，说明 $A^{-1}$ 的特征值是 $\dfrac1\lambda$。如果 $P^{-1}AP=B$，则 $B(P^{-1}\alpha)=(P^{-1}AP)(P^{-1}\alpha)=P^{-1}A\alpha=\lambda(P^{-1}\alpha)$，说明 $P^{-1}AP$ 的特征值是 $\lambda$，对应特征向量是 $P^{-1}\alpha$。

【例5.6】设 $A$ 是 $n$ 阶矩阵，满足 $A^2=A$，求矩阵 $A$ 的特征值。
【解】设 $\lambda$ 是 $A$ 的任一特征值，$\alpha$ 是 $A$ 属于 $\lambda$ 的特征向量，即 $A\alpha=\lambda\alpha,\alpha\neq0$。于是 $A^2\alpha=A(\lambda\alpha)=\lambda A\alpha=\lambda^2\alpha$。由 $A^2=A$ 得 $\lambda^2\alpha=\lambda\alpha$，即 $(\lambda^2-\lambda)\alpha=0,\alpha\neq0$，故 $\lambda^2-\lambda=0$，因此 $\lambda=1$ 或 $\lambda=0$。` },
      { p: 127, md: R`【评注】因为满足 $A^2=A$ 的矩阵 $A$ 不唯一，如 $\begin{pmatrix}1&0\\0&1\end{pmatrix},\begin{pmatrix}0&0\\0&0\end{pmatrix},\begin{pmatrix}1&0\\0&0\end{pmatrix},\begin{pmatrix}-1&-1\\2&2\end{pmatrix}$ 等均满足 $A^2=A$，所以仅条件 $A^2=A$ 并不能确定 $A$ 的特征值，只知道特征值只能取自 $1$ 或 $0$。

【例5.7】$A$ 是 $n$ 阶矩阵，行列式 $|A|=2$，若矩阵 $A+E$ 不可逆，则矩阵 $A$ 的伴随矩阵 $A^*$ 必有特征值______。
【分析】矩阵 $A+E$ 不可逆即 $|A+E|=0$，亦即 $|-E-A|=(-1)^n|E+A|=0$，故 $\lambda=-1$ 必是 $A$ 的特征值。又因 $|A|=2$，所以 $A^*$ 必有特征值 $-2$。

【例5.8】设 $A$ 是 3 阶矩阵，且 $A$ 的各行元素之和均为 5，则矩阵 $A$ 必有特征值______。
【分析】$A$ 各行元素之和均为 5，即 $A\begin{pmatrix}1\\1\\1\end{pmatrix}=\begin{pmatrix}5\\5\\5\end{pmatrix}=5\begin{pmatrix}1\\1\\1\end{pmatrix}$，故 $A$ 必有特征值 $\lambda=5$，特征向量 $(1,1,1)^T$。

【例5.9】已知 $A=\begin{pmatrix}2&2&1\\2&5&2\\3&6&4\end{pmatrix}$，$A^*$ 是 $A$ 的伴随矩阵，求 $A^*$ 的特征值与特征向量。
【解】$A^*=\begin{pmatrix}8&-2&-1\\-2&5&-2\\-3&-6&6\end{pmatrix}$。由 $A^*$ 的特征多项式` },
      { p: 128, md: R`$$|\lambda E-A^*|=\begin{vmatrix}\lambda-8&2&1\\2&\lambda-5&2\\3&6&\lambda-6\end{vmatrix}=\begin{vmatrix}\lambda-8&2&1\\18-2\lambda&\lambda-9&0\\3&6&\lambda-6\end{vmatrix}=\begin{vmatrix}\lambda-4&2&1\\0&\lambda-9&0\\15&6&\lambda-6\end{vmatrix}=(\lambda-9)(\lambda^2-10\lambda+9)=(\lambda-9)^2(\lambda-1)$$
得 $A^*$ 的特征值 $\lambda_1=\lambda_2=9,\lambda_3=1$。对 $\lambda=9$，$(9E-A^*)x=0$ 即 $\begin{pmatrix}1&2&1\\2&4&2\\3&6&3\end{pmatrix}\to\begin{pmatrix}1&2&1\\0&0&0\\0&0&0\end{pmatrix}$，基础解系 $\alpha_1=(-2,1,0)^T,\alpha_2=(-1,0,1)^T$。对 $\lambda=1$，$(E-A^*)x=0$ 即 $\begin{pmatrix}-7&2&1\\2&-4&2\\3&6&-5\end{pmatrix}\to\begin{pmatrix}1&-2&1\\0&12&-8\\0&0&0\end{pmatrix}$，基础解系 $\alpha_3=(1,2,3)^T$。
【解法二】因为 $|\lambda E-A|=\begin{vmatrix}\lambda-2&-2&-1\\-2&\lambda-5&-2\\-3&-6&\lambda-4\end{vmatrix}=\begin{vmatrix}\lambda-1&-2&-1\\0&\lambda-5&-2\\1-\lambda&-6&\lambda-4\end{vmatrix}=\begin{vmatrix}\lambda-1&-2&-1\\0&\lambda-5&-2\\0&-8&\lambda-5\end{vmatrix}=(\lambda-1)\begin{vmatrix}\lambda-5&-2\\-8&\lambda-5\end{vmatrix}=(\lambda-9)(\lambda-1)^2$，所以 $A$ 的特征值为 $9,1,1$。由 $|A|=\prod\lambda_i$ 知 $|A|=9$，故 $A^*$ 的特征值为 $1,9,9$。由 $(9E-A)x=0$ 即 $\begin{pmatrix}7&-2&-1\\-2&4&-2\\-3&-6&5\end{pmatrix}\to\begin{pmatrix}1&-2&1\\0&-12&8\\0&0&0\end{pmatrix}$，得基础解系 $\alpha_1=(1,2,3)^T$，因此 $A^*$ 属于 $\lambda=1$ 的特征向量为 $k_1\alpha_1$。由 $(E-A)x=0$ 即 $\begin{pmatrix}-1&-2&-1\\-2&-4&-2\\-3&-6&-3\end{pmatrix}\to\begin{pmatrix}1&2&1\\0&0&0\\0&0&0\end{pmatrix}$，` },
      { p: 129, md: R`得基础解系 $\alpha_2=(-2,1,0)^T,\alpha_3=(-1,0,1)^T$，因此 $A^*$ 属于 $\lambda=9$ 的特征向量为 $k_2\alpha_2+k_3\alpha_3$（$k_2,k_3$ 不全为 $0$）。
【评注】解法一是直接求 $A^*$ 的特征值与特征向量，易想到但计算量大；解法二是间接法，利用相关联矩阵的特征值、特征向量之间的关系而求解，计算量小但综合灵活。本题还可看出 $A=B+E$，$r(B)=1$，利用秩 1 矩阵特征值结论可立即求解。

【例5.10】（2003,1）设矩阵 $A=\begin{pmatrix}3&2&2\\2&3&2\\2&2&3\end{pmatrix}$，$P=\begin{pmatrix}0&1&0\\1&0&1\\0&0&1\end{pmatrix}$，$B=P^{-1}A^*P$，求 $B+2E$ 的特征值与特征向量，其中 $A^*$ 为 $A$ 的伴随矩阵，$E$ 为 3 阶单位矩阵。
【解】由于 $A=\begin{pmatrix}3&2&2\\2&3&2\\2&2&3\end{pmatrix}=E+C$，$C$ 的元素全为 $2$，$r(C)=1$。$|\lambda E-C|=\lambda^3-6\lambda^2$，$C$ 的特征值是 $6,0,0$，$A$ 的特征值是 $7,1,1$。$|A|=\prod\lambda_i=7$，由 $A\alpha=\lambda\alpha$ 知 $A^*\alpha=\dfrac{|A|}{\lambda}\alpha$，故 $A^*$ 的特征值是 $1,7,7$，$B=P^{-1}A^*P$ 的特征值是 $1,7,7$，$B+2E$ 的特征值是 $3,9,9$。由 $(B+2E)(P^{-1}\alpha)=\left(\dfrac{|A|}{\lambda}+2\right)(P^{-1}\alpha)$，$C$ 属于 $\lambda=6$ 的特征向量 $\alpha_1=(1,1,1)^T$，属于 $\lambda=0$ 的特征向量可取 $\alpha_2=(-1,1,0)^T,\alpha_3=(-1,0,1)^T$，它们就是 $A$ 分别属于 7 与 1 的特征向量。由 $P^{-1}=\begin{pmatrix}0&1&-1\\1&0&0\\0&0&1\end{pmatrix}$，得` },
      { p: 130, md: R`$$P^{-1}\alpha_1=\begin{pmatrix}0&1&-1\\1&0&0\\0&0&1\end{pmatrix}\begin{pmatrix}1\\1\\1\end{pmatrix}=\begin{pmatrix}0\\1\\1\end{pmatrix}$$
于是 $B+2E$ 属于特征值 $\lambda=3$ 的特征向量是 $k_1\begin{pmatrix}0\\1\\1\end{pmatrix},k_1\neq0$。类似地 $P^{-1}\alpha_2=\begin{pmatrix}1\\-1\\0\end{pmatrix},P^{-1}\alpha_3=\begin{pmatrix}-1\\-1\\1\end{pmatrix}$，那么 $B+2E$ 属于 $\lambda=9$ 的特征向量为 $k_2\begin{pmatrix}1\\-1\\0\end{pmatrix}+k_3\begin{pmatrix}-1\\-1\\1\end{pmatrix}$（$k_2,k_3$ 不全为 $0$）。
【解法二】先求 $A^*=\begin{pmatrix}5&-2&-2\\-2&5&-2\\-2&-2&5\end{pmatrix},P^{-1}=\begin{pmatrix}0&1&-1\\1&0&0\\0&0&1\end{pmatrix}$，故 $B=P^{-1}A^*P=\begin{pmatrix}7&0&0\\-2&5&-4\\-2&-2&3\end{pmatrix}$，$B+2E=\begin{pmatrix}9&0&0\\-2&7&-4\\-2&-2&5\end{pmatrix}$。$|\lambda E-(B+2E)|=\begin{vmatrix}\lambda-9&0&0\\2&\lambda-7&4\\2&2&\lambda-5\end{vmatrix}=(\lambda-9)(\lambda^2-12\lambda+27)=(\lambda-9)^2(\lambda-3)$，得特征值 $9,9,3$。当 $\lambda=9$ 时，$\begin{pmatrix}0&0&0\\2&2&4\\2&2&4\end{pmatrix}\to\begin{pmatrix}1&1&2\\0&0&0\\0&0&0\end{pmatrix}$，基础解系 $\eta_1=\begin{pmatrix}-1\\1\\0\end{pmatrix},\eta_2=\begin{pmatrix}-2\\0\\1\end{pmatrix}$。` },
      { p: 131, md: R`所以对应于 $\lambda=9$ 的特征向量是 $k_1\eta_1+k_2\eta_2=k_1\begin{pmatrix}-1\\1\\0\end{pmatrix}+k_2\begin{pmatrix}-2\\0\\1\end{pmatrix}$（$k_1,k_2$ 不全为 $0$）。当 $\lambda=3$ 时，$(3E-(B+2E))x=0$ 即 $\begin{pmatrix}-6&0&0\\2&-4&4\\2&2&-2\end{pmatrix}\to\begin{pmatrix}1&0&0\\0&1&-1\\0&0&0\end{pmatrix}$，基础解系 $\eta_3=\begin{pmatrix}0\\1\\1\end{pmatrix}$，属于 $\lambda=3$ 的特征向量为 $k_3\begin{pmatrix}0\\1\\1\end{pmatrix},k_3\neq0$。

【例5.11】设 $\alpha_1,\alpha_2$ 是矩阵 $A$ 属于不同特征值的特征向量，证明 $\alpha_1+\alpha_2$ 不是矩阵 $A$ 的特征向量。
【证】设 $A\alpha_1=\lambda_1\alpha_1,A\alpha_2=\lambda_2\alpha_2$ 且 $\lambda_1\neq\lambda_2$。若 $\alpha_1+\alpha_2$ 是 $A$ 属于特征值 $\mu$ 的特征向量，即 $A(\alpha_1+\alpha_2)=\mu(\alpha_1+\alpha_2)$。由 $A(\alpha_1+\alpha_2)=A\alpha_1+A\alpha_2=\lambda_1\alpha_1+\lambda_2\alpha_2$ 得 $(\mu-\lambda_1)\alpha_1+(\mu-\lambda_2)\alpha_2=0$。因为不同特征值的特征向量线性无关（定理 5.3），有 $\mu-\lambda_1=0,\mu-\lambda_2=0$，这与 $\lambda_1\neq\lambda_2$ 矛盾。所以 $\alpha_1+\alpha_2$ 不是 $A$ 的特征向量。
【评注】请把本题与定理 5.1 区别开，不要混淆。

#### 相似、相似对角化
【例5.12】若 3 阶矩阵 $A$ 相似于 $B$，矩阵 $A$ 的特征值是 $1,2,3$，那么行列式 $|2B-E|=$______。
【分析】因为 $A\sim B$，故 $A$ 与 $B$ 有相同的特征值，那么 $2B$ 的特征值是 $2,4,6$，$2B-E$ 的特征值是 $1,3,5$，从而 $|2B-E|=15$。

【例5.13】（2003,4）设矩阵` },
      { p: 132, md: R`$B=\begin{pmatrix}0&0&1\\0&1&0\\1&0&0\end{pmatrix}$，已知矩阵 $A$ 相似于 $B$，则秩 $(A-2E)$ 与秩 $(A-E)$ 之和等于 (A) 2 (B) 3 (C) 4 (D) 5
【分析】由 $A\sim B$ 有 $P^{-1}AP=B$，那么 $r(A-2E)=r(B-2E),r(A-E)=r(B-E)$。易见 $B-2E=\begin{pmatrix}-2&0&1\\0&-1&0\\1&0&-2\end{pmatrix},B-E=\begin{pmatrix}-1&0&1\\0&0&0\\1&0&-1\end{pmatrix}$ 的秩分别为 $3$ 与 $1$，故应选 (C)。

【例5.14】$n$ 阶矩阵 $A\sim B$ 的充分条件是 (A) $A^2$ 与 $B^2$ 相似 (B) $A$ 与 $B$ 有相同的特征值 (C) $A$ 与 $B$ 有相同的特征向量 (D) $A$ 与 $B$ 均和对角矩阵 $\Lambda$ 相似
【分析】(A) 由 $P^{-1}AP=B$ 有 $P^{-1}A^2P=B^2$，知 $A^2\sim B^2$，但反之不成立（如 $A=\begin{pmatrix}0&1\\0&0\end{pmatrix},B=\begin{pmatrix}0&0\\0&0\end{pmatrix}$，$r(A)\neq r(B)$，$A$ 与 $B$ 不相似但 $A^2=B^2$），(A) 是必要非充分条件。(B) 亦必要非充分（同上例特征值同为 $0$ 但不相似）。(C) 不是充分条件。(D) 若 $A\sim\Lambda,B\sim\Lambda$，则 $P_1^{-1}AP_1=\Lambda=P_2^{-1}BP_2$，得 $P_2P_1^{-1}AP_1P_2^{-1}=B$，令 $P=P_1P_2^{-1}$，则 $P^{-1}AP=B$，即 $A\sim B$，(D) 是充分条件。
【评注】条件 (D) 不是必要的，因为当 $A,B$ 不能相似对角化时，$A$ 与 $B$ 仍可能相似，只要它们与同一个矩阵 $C$ 相似即可。` },
      { p: 133, md: R`【例5.15】不能相似对角化的矩阵是 (A) $\begin{pmatrix}1&2&1\\0&3&0\\0&0&0\end{pmatrix}$ (B) $\begin{pmatrix}1&2&1\\0&1&0\\0&0&3\end{pmatrix}$ (C) $\begin{pmatrix}1&1&1\\2&2&2\\3&3&3\end{pmatrix}$ (D) $\begin{pmatrix}1&2&3\\2&4&5\\3&5&6\end{pmatrix}$
【分析】(A) 特征值是 $1,3,0$，有 3 个不同特征值，可对角化。(B) 特征值是 $1,1,3$，$r(E-A)=r\begin{pmatrix}0&-2&-1\\0&0&0\\0&0&2\end{pmatrix}=2$，$(E-A)x=0$ 的基础解系仅一个向量，即 $\lambda=1$ 只有一个线性无关的特征向量，故 $A$ 不能相似对角化。(C) $r(A)=1$，$|\lambda E-A|=\lambda^3-6\lambda^2$，特征值 $6,0,0$，$r(0E-A)=r(A)=1$，$\lambda=0$ 有 2 个线性无关的特征向量，可对角化。(D) 实对称矩阵必可相似对角化。故应选 (B)。

【例5.16】已知 $A=\begin{pmatrix}2&1&-1\\1&2&1\\-1&1&2\end{pmatrix},B=\begin{pmatrix}2&0&1\\-1&3&1\\2&0&1\end{pmatrix}$，判断 $A$ 与 $B$ 是否相似，并说明理由。
【分析】$A$ 是实对称矩阵必可对角化。$A$ 与 $B$ 是否相似，先看 $B$ 能否对角化，如 $B$ 不能对角化则肯定不相似；如 $B$ 能对角化，再检查是否有相同特征值。
【解】对于 $B$，由特征方程 $|\lambda E-B|=\begin{vmatrix}\lambda-2&0&-1\\1&\lambda-3&-1\\-2&0&\lambda-1\end{vmatrix}=(\lambda-3)\begin{vmatrix}\lambda-2&-1\\-2&\lambda-1\end{vmatrix}=\lambda(\lambda-3)^2=0$，可得 $B$ 的特征值是 $3,3,0$。当 $\lambda=3$ 时，$r(3E-B)=r\begin{pmatrix}1&0&-1\\1&0&-1\\-2&0&2\end{pmatrix}=1=n-n_i$，所以 $B$ 可对角化。` },
      { p: 134, md: R`又因 $|\lambda E-A|=\begin{vmatrix}\lambda-2&-1&1\\-1&\lambda-2&-1\\1&-1&\lambda-2\end{vmatrix}=\begin{vmatrix}\lambda-3&\lambda-3&0\\-1&\lambda-2&-1\\0&\lambda-3&\lambda-3\end{vmatrix}=\lambda(\lambda-3)^2$，所以 $A\sim B$。理由：$A,B$ 均可对角化，且都与 $\begin{pmatrix}3&&\\&3&\\&&0\end{pmatrix}$ 相似。
【评注】特征值相同是矩阵相似的必要条件。特征值相同的矩阵不一定相似（如 $C=\begin{pmatrix}3&1&-1\\0&3&2\\0&0&0\end{pmatrix}$ 的特征值也是 $3,3,0$，但 $r(3E-C)=2\neq n-n_i$，$C$ 不能对角化，与 $A,B$ 均不相似）。但若 $A,B$ 是实对称矩阵，$A$ 与 $B$ 有相同的特征值是相似的充分必要条件。

【例5.17】已知矩阵 $A=\begin{pmatrix}1&a&-3\\-1&4&-3\\1&-2&5\end{pmatrix}$ 的特征值有重根，判断矩阵 $A$ 能否相似对角化，并说明理由。
【解】由特征多项式 $|\lambda E-A|=\begin{vmatrix}\lambda-1&-a&3\\1&\lambda-4&3\\-1&2&\lambda-5\end{vmatrix}=\begin{vmatrix}\lambda-1&-a&3\\1&\lambda-4&3\\0&\lambda-2&\lambda-2\end{vmatrix}=(\lambda-2)(\lambda^2-8\lambda+10+a)$。如果 $\lambda=2$ 是重根，则 $2^2-16+10+a=0$，解出 $a=2$。此时 $\lambda^2-8\lambda+12=(\lambda-2)(\lambda-6)$，特征值是 $2,2,6$。对于 $\lambda=2$，$r(2E-A)=r\begin{pmatrix}1&-2&3\\1&-2&3\\-1&2&-3\end{pmatrix}=1$，故 $\lambda=2$ 有 2 个线性无关的特征向量，$A$ 可以相似对角化。` },
      { p: 135, md: R`若 $\lambda=2$ 不是重根，则 $\lambda^2-8\lambda+10+a$ 是完全平方，于是 $8^2-4(10+a)=0$，解出 $a=6$，特征值是 $2,4,4$。对于 $\lambda=4$，$r(4E-A)=r\begin{pmatrix}3&-6&3\\1&0&3\\-1&2&-1\end{pmatrix}=2$，说明 $\lambda=4$ 只有 1 个线性无关的特征向量，$A$ 不能相似对角化。

#### 求相似对角化时的可逆矩阵 $P$
【例5.18】已知 $A=\begin{pmatrix}-4&-10&0\\1&3&0\\3&6&1\end{pmatrix}$，判断 $A$ 能否对角化？若能对角化，求可逆矩阵 $P$ 化 $A$ 为相似标准形。
【解】先求特征值。$|\lambda E-A|=\begin{vmatrix}\lambda+4&10&0\\-1&\lambda-3&0\\-3&-6&\lambda-1\end{vmatrix}=(\lambda-1)\begin{vmatrix}\lambda+4&10\\-1&\lambda-3\end{vmatrix}=(\lambda-1)^2(\lambda+2)$，得到 $A$ 的特征值 $\lambda_1=\lambda_2=1,\lambda_3=-2$。再求特征向量：对 $\lambda_1=1$，$(E-A)x=0$ 即 $\begin{pmatrix}5&10&0\\-1&-2&0\\-3&-6&0\end{pmatrix}\to\begin{pmatrix}1&2&0\\0&0&0\\0&0&0\end{pmatrix}$，基础解系 $\alpha_1=(-2,1,0)^T,\alpha_2=(0,0,1)^T$。对 $\lambda_2=-2$，$(-2E-A)x=0$ 即 $\begin{pmatrix}2&10&0\\-1&-5&0\\-3&-6&-3\end{pmatrix}\to\begin{pmatrix}1&5&0\\1&2&1\\0&0&0\end{pmatrix}$，基础解系 $\alpha_3=(-5,1,3)^T$。因为 $\lambda_1$ 有两个线性无关的特征向量，所以 $A$ 能对角化。令 $P=\begin{pmatrix}-2&0&-5\\1&0&1\\0&1&3\end{pmatrix}$，则 $P^{-1}AP=\begin{pmatrix}1&&\\&1&\\&&-2\end{pmatrix}$。` }
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
