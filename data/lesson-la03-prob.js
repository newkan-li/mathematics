window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["la03_s0"].problems = [
    { n: 1, q: R`（填空题）向量 $\boldsymbol{\alpha}_1=(1,4,2)^T,\boldsymbol{\alpha}_2=(2,7,3)^T,\boldsymbol{\alpha}_3=(0,1,a)^T$ 可以表示任一个 3 维向量，则 $a$ 的取值为______。`, a: R`$a\neq1$`, sol: R`【思路】「$n$ 个 $n$ 维向量能表示任一 $n$ 维向量」等价于它们线性无关，即行列式非零。
【详解】3 个 3 维向量能张成整个 $\mathbb{R}^3$ $\iff$ 它们线性无关 $\iff$ 行列式非零。
$$\begin{vmatrix}1&2&0\\4&7&1\\2&3&a\end{vmatrix}=1(7a-3)-2(4a-2)+0=7a-3-8a+4=1-a.$$
由 $1-a\neq0$ 得 $a\neq1$。
【易错点】「表示任一向量」是「线性无关（张成）」而非「线性相关」；$n$ 个 $n$ 维向量用行列式判断。` },
    { n: 2, q: R`（填空题）已知向量组 $\boldsymbol{\alpha}_1=(1,3,2,a)^T,\boldsymbol{\alpha}_2=(2,7,a,3)^T,\boldsymbol{\alpha}_3=(0,a,5,-5)^T$ 线性相关，则 $a=$______。`, a: R`$a=-1$`, sol: R`【思路】线性相关 $\iff$ 齐次方程组 $x_1\alpha_1+x_2\alpha_2+x_3\alpha_3=0$ 有非零解 $\iff$ 系数矩阵的秩小于向量个数。
【详解】对 $(\alpha_1,\alpha_2,\alpha_3)$ 作初等行变换：
$$(\alpha_1,\alpha_2,\alpha_3)=\begin{pmatrix}1&2&0\\3&7&a\\2&a&5\\a&3&-5\end{pmatrix}\to\begin{pmatrix}1&2&0\\0&1&a\\0&a-4&5\\0&3-2a&-5\end{pmatrix}\to\begin{pmatrix}1&2&0\\0&1&a\\0&0&5+4a-a^2\\0&0&2a^2-3a-5\end{pmatrix}.$$
因 $5+4a-a^2=(5-a)(1+a)$、$2a^2-3a-5=(2a-5)(a+1)$，只有 $a=-1$ 时两数同时为零，秩才小于 3。故 $a=-1$。
【易错点】线性相关要求秩 $<3$；两个含 $a$ 的表达式都含因子 $(a+1)$，是它们能同时为零的关键。` },
    { n: 3, q: R`（填空题）向量组 $\boldsymbol{\alpha}_1=(1,3,6,2)^T,\boldsymbol{\alpha}_2=(2,1,2,-1)^T,\boldsymbol{\alpha}_3=(1,-1,a,-2)^T$ 的秩为 2，则 $a=$______。`, a: R`$a=-2$`, sol: R`【思路】初等行变换不改变秩，化行阶梯形后令非零行数等于 2。
【详解】对 $(\alpha_1,\alpha_2,\alpha_3)$ 作初等行变换：
$$\begin{pmatrix}1&2&1\\3&1&-1\\6&2&a\\2&-1&-2\end{pmatrix}\to\begin{pmatrix}1&2&1\\0&-5&-4\\0&-10&a-6\\0&-5&-4\end{pmatrix}\to\begin{pmatrix}1&2&1\\0&5&4\\0&0&a+2\\0&0&0\end{pmatrix}.$$
秩为 2 $\iff a+2=0$，即 $a=-2$。
【易错点】化简时注意第 3 行减去 2 倍第 2 行；令阶梯形非零行数为 2 即可。` },
    { n: 4, q: R`（选择题）设向量组 $\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3$ 线性无关，则线性无关的向量组是
(A) $\boldsymbol{\alpha}_1-\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3-\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2-\boldsymbol{\alpha}_3$
(B) $\boldsymbol{\alpha}_1-\boldsymbol{\alpha}_2,2\boldsymbol{\alpha}_2+3\boldsymbol{\alpha}_3,\boldsymbol{\alpha}_1+\boldsymbol{\alpha}_3$
(C) $\boldsymbol{\alpha}_1-\boldsymbol{\alpha}_2,2\boldsymbol{\alpha}_2+\boldsymbol{\alpha}_3,\boldsymbol{\alpha}_1+\boldsymbol{\alpha}_2+\boldsymbol{\alpha}_3$
(D) $\boldsymbol{\alpha}_1+\boldsymbol{\alpha}_2,2\boldsymbol{\alpha}_1+3\boldsymbol{\alpha}_2,5\boldsymbol{\alpha}_1+8\boldsymbol{\alpha}_2$`, a: R`(B)`, sol: R`【思路】把每组向量用基 $\alpha_1,\alpha_2,\alpha_3$ 的坐标表示，看坐标矩阵是否满秩；或用「多数向量可由少数向量表出必相关」。
【详解】(A)：$(\alpha_1-\alpha_2)+(\alpha_3-\alpha_1)+(\alpha_2-\alpha_3)=0$，相关。
(C)：$(\alpha_1-\alpha_2)+(2\alpha_2+\alpha_3)-(\alpha_1+\alpha_2+\alpha_3)=0$，相关。
(D)：三个向量都可由 $\alpha_1,\alpha_2$ 线性表出（3 个向量在 2 维空间），必相关。
(B)：在基 $\alpha_1,\alpha_2,\alpha_3$ 下坐标矩阵为 $\begin{pmatrix}1&0&1\\-1&2&0\\0&3&1\end{pmatrix}$，其行列式 $=1(2-0)-0+1(-3-0)=2-3=-1\neq0$，故线性无关。选 (B)。
【易错点】(D) 用「向量个数 > 张成空间维数必相关」可秒判；判断 (B) 要用坐标矩阵的行列式。` },
    { n: 5, q: R`（选择题）设 $\boldsymbol{\alpha}_1=\begin{pmatrix}1\\0\\6\\a_1\end{pmatrix},\boldsymbol{\alpha}_2=\begin{pmatrix}1\\-1\\2\\a_2\end{pmatrix},\boldsymbol{\alpha}_3=\begin{pmatrix}2\\0\\7\\a_3\end{pmatrix},\boldsymbol{\alpha}_4=\begin{pmatrix}0\\0\\0\\a_4\end{pmatrix}$，其中 $a_1,a_2,a_3,a_4$ 为任意实数，则
(A) $\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3$ 必线性相关 (B) $\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3$ 必线性无关
(C) $\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3,\boldsymbol{\alpha}_4$ 必线性相关 (D) $\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\alpha}_3,\boldsymbol{\alpha}_4$ 必线性无关`, a: R`(B)`, sol: R`【思路】「无关向量组的延伸组仍无关」；$\alpha_4$ 含参数 $a_4$，其相关性不确定。
【详解】取 $\alpha_1,\alpha_2,\alpha_3$ 的前三个分量 $(1,0,6),(1,-1,2),(2,0,7)$，其行列式
$$\begin{vmatrix}1&1&2\\0&-1&0\\6&2&7\end{vmatrix}=(-1)\cdot(-1)^{2+2}\begin{vmatrix}1&2\\6&7\end{vmatrix}=-(7-12)=5\neq0,$$
故 $(1,0,6)^T,(1,-1,2)^T,(2,0,7)^T$ 线性无关，从而其延伸组 $\alpha_1,\alpha_2,\alpha_3$ 线性无关，(B) 对。
又 $|\alpha_1,\alpha_2,\alpha_3,\alpha_4|=5a_4$，当 $a_4=0$ 时相关、$a_4\neq0$ 时无关，故 (C)(D) 都不一定。选 (B)。
【易错点】「延伸组」指在每个向量后添加分量；无关向量组添加分量后仍无关。` },
    { n: 6, q: R`（选择题）设 $A$ 是 $m\times n$ 矩阵，且其列向量组线性无关，$B$ 是 $n$ 阶矩阵，满足 $AB=A$，则秩 $r(B)$
(A) 等于 $n$ (B) 小于 $n$ (C) 等于 1 (D) 不能确定`, a: R`(A)`, sol: R`【思路】由 $AB=A$ 得 $A(B-E)=0$，用秩不等式 $r(A)+r(B-E)\le n$。
【详解】$A$ 的列向量组线性无关 ⇒ $r(A)=n$。由 $AB=A$ 得 $A(B-E)=0$。
由 $A(B-E)=0$ 及秩的不等式 $r(A)+r(B-E)\le n$（$B-E$ 的列都是 $Ax=0$ 的解），得
$$r(B-E)\le n-r(A)=n-n=0,$$
故 $B-E=0$，即 $B=E$，$r(B)=n$。选 (A)。
【易错点】$A(B-E)=0$ 说明 $B-E$ 的每一列都在 $Ax=0$ 的解空间中，故 $r(B-E)\le n-r(A)$。` },
    { n: 7, q: R`已知 $n$ 维向量组 (Ⅰ) $\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_s$ 与 (Ⅱ) $\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_s,\boldsymbol{\beta}$ 有相同的秩，证明 $\boldsymbol{\beta}$ 可以由 $\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_s$ 线性表出。`, a: R`证明 $\boldsymbol{\beta}$ 可由 $\boldsymbol{\alpha}_1,\cdots,\boldsymbol{\alpha}_s$ 线性表出。`, sol: R`【思路】「$\beta$ 可由 $\alpha_1,\ldots,\alpha_s$ 表出」等价于线性方程组 $x_1\alpha_1+\cdots+x_s\alpha_s=\beta$ 有解，等价于 $r(A)=r(\bar A)$。
【详解】记 $A=(\alpha_1,\ldots,\alpha_s)$，$\bar A=(\alpha_1,\ldots,\alpha_s,\beta)$。
由题设 $r(A)=r(\bar A)$（两组秩相同），即增广矩阵与系数矩阵秩相等，故方程组 $Ax=\beta$ 有解，即 $\beta$ 可由 $\alpha_1,\ldots,\alpha_s$ 线性表出。
（也可用极大无关组说明：设 $\alpha_{i_1},\ldots,\alpha_{i_r}$ 是 (Ⅰ) 的极大无关组，由 $r(Ⅰ)=r(Ⅱ)$ 知它也是 (Ⅱ) 的极大无关组，于是 $\alpha_{i_1},\ldots,\alpha_{i_r},\beta$ 线性相关，$\beta$ 可由其表出，进而可由 $\alpha_1,\ldots,\alpha_s$ 表出。）
【易错点】核心等价关系：$\beta$ 可表出 $\iff r(\alpha_1,\ldots,\alpha_s)=r(\alpha_1,\ldots,\alpha_s,\beta)$。` },
    { n: 8, q: R`已知 $n$ 维向量 $\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_s$ 非零且两两正交，证明 $\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\cdots,\boldsymbol{\alpha}_s$ 线性无关。`, a: R`证明 $\boldsymbol{\alpha}_1,\cdots,\boldsymbol{\alpha}_s$ 线性无关。`, sol: R`【思路】设线性组合为零，用 $\alpha_i^T$ 左乘，利用正交性逐个逼出系数为零。
【详解】设 $k_1\alpha_1+k_2\alpha_2+\cdots+k_s\alpha_s=0$。对任意 $i$，用 $\alpha_i^T$ 左乘：
$$k_1\alpha_i^T\alpha_1+\cdots+k_i\alpha_i^T\alpha_i+\cdots+k_s\alpha_i^T\alpha_s=0.$$
由两两正交，$j\neq i$ 时 $\alpha_i^T\alpha_j=0$，故只剩 $k_i\alpha_i^T\alpha_i=0$。又 $\alpha_i^T\alpha_i=\|\alpha_i\|^2>0$（$\alpha_i\neq0$），故 $k_i=0$（$i=1,\ldots,s$）。
所以 $\alpha_1,\ldots,\alpha_s$ 线性无关。
【易错点】「非零」保证 $\|\alpha_i\|^2>0$，否则无法推出 $k_i=0$；正交性是消去其余项的关键。` },
    { n: 9, q: R`设 $\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2,\boldsymbol{\beta}_1,\boldsymbol{\beta}_2$ 均是 3 维列向量，且 $\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2$ 线性无关，$\boldsymbol{\beta}_1,\boldsymbol{\beta}_2$ 线性无关，证明存在非零向量 $\boldsymbol{\gamma}$，使得 $\boldsymbol{\gamma}$ 既可由 $\boldsymbol{\alpha}_1,\boldsymbol{\alpha}_2$ 线性表出也可由 $\boldsymbol{\beta}_1,\boldsymbol{\beta}_2$ 线性表出。
当 $\boldsymbol{\alpha}_1=\begin{pmatrix}1\\0\\2\end{pmatrix},\boldsymbol{\alpha}_2=\begin{pmatrix}2\\-1\\3\end{pmatrix},\boldsymbol{\beta}_1=\begin{pmatrix}-3\\2\\-5\end{pmatrix},\boldsymbol{\beta}_2=\begin{pmatrix}0\\1\\1\end{pmatrix}$ 时，求出所有的向量 $\boldsymbol{\gamma}$。`, a: R`$\boldsymbol{\gamma}=k(0,1,1)^T$`, sol: R`【思路】4 个 3 维向量必线性相关，组合式中有非零解，把含 $\alpha$ 与含 $\beta$ 的部分分别移到两边即得 $\gamma$。
【详解】$\alpha_1,\alpha_2,\beta_1,\beta_2$ 是 4 个 3 维向量，必线性相关，故存在不全为零的 $k_1,k_2,l_1,l_2$ 使
$$k_1\alpha_1+k_2\alpha_2+l_1\beta_1+l_2\beta_2=0.$$
其中 $k_1,k_2$ 必不全为零：否则 $l_1\beta_1+l_2\beta_2=0$，由 $\beta_1,\beta_2$ 线性无关得 $l_1=l_2=0$，与「不全为零」矛盾。
取 $\gamma=k_1\alpha_1+k_2\alpha_2=-l_1\beta_1-l_2\beta_2$，它非零且可由两组分别表出。
具体计算：解 $x_1\alpha_1+x_2\alpha_2+y_1\beta_1+y_2\beta_2=0$，由前两式得 $y_1=0,\ x_1=-2y_2,\ x_2=y_2$。于是
$$\gamma=x_1\alpha_1+x_2\alpha_2=y_2(-2\alpha_1+\alpha_2)=y_2(0,-1,-1)=-y_2(0,1,1).$$
故所有 $\gamma=k(0,1,1)^T$（$k$ 为任意常数）。
【易错点】要说明 $k_1,k_2$ 不全为零（否则与 $\beta$ 组无关矛盾）；最后用自由参数 $y_2$ 表示所有解。` }
  ];
})();
