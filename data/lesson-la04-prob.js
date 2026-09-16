window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["la04_s0"].problems = [
    { n: 1, q: R`（填空题）方程 $x_1-2x_2+3x_3-4x_4=0$ 的通解是______。`, a: R`$k_1(2,1,0,0)^T+k_2(-3,0,1,0)^T+k_3(4,0,0,1)^T$`, sol: R`由 $n-r(A)=4-1=3$ 先明确基础解系中解向量的个数，再确定自由量求解。取 $x_2,x_3,x_4$ 为自由变量：令 $(x_2,x_3,x_4)=(1,0,0)$ 得 $\eta_1=(2,1,0,0)^T$；令 $(0,1,0)$ 得 $\eta_2=(-3,0,1,0)^T$；令 $(0,0,1)$ 得 $\eta_3=(4,0,0,1)^T$。` },
    { n: 2, q: R`（填空题）设矩阵 $A=\begin{pmatrix}1&1&2-a\\3-2a&2-a&1\\2-a&2-a&1\end{pmatrix},b=\begin{pmatrix}1\\a\\-1\end{pmatrix}$，若方程组 $Ax=b$ 有解且不唯一，则 $a=$______。`, a: R`$a=3$`, sol: R`方程组 $Ax=b$ 有解且不唯一，即方程组 $Ax=b$ 有无穷多解，亦即秩 $r(A)=r(\overline A)<3$。对增广矩阵作初等行变换：
$$\overline A=\begin{pmatrix}1&1&2-a&1\\3-2a&2-a&1&a\\2-a&2-a&1&-1\end{pmatrix}\to\begin{pmatrix}1&1&2-a&1\\0&a-1&-2a^2+7a-5&3a-3\\0&0&-a^2+4a-3&a-3\end{pmatrix}$$
若 $a=3$，$\overline A\to\begin{pmatrix}1&1&-1&1\\0&2&-2&6\\0&0&0&0\end{pmatrix}$，$r(A)=r(\overline A)<3$；
若 $a=1$，$\overline A\to\begin{pmatrix}1&1&1&1\\0&0&0&-2\\0&0&0&0\end{pmatrix}$，$r(A)=1,r(\overline A)=2$。
或者，方程组 $Ax=b$ 有无穷多解的必要条件是 $|A|=0$，
$$|A|=\begin{vmatrix}1&1&2-a\\3-2a&2-a&1\\2-a&2-a&1\end{vmatrix}=(a-1)^2(3-a)$$
然后再判断 $a=1$？$a=3$？` },
    { n: 3, q: R`（填空题）设 $\alpha_1,\alpha_2,\alpha_3$ 是 4 元非齐次线性方程组 $Ax=b$ 的 3 个解向量，且秩 $r(A)=3$，若 $\alpha_1=(1,2,3,4)^T,2\alpha_2-3\alpha_3=(0,1,-1,0)^T$，则方程组 $Ax=b$ 的通解是______。`, a: R`$(1,2,3,4)^T+k(1,3,2,4)^T$`, sol: R`$n-r(A)=4-3=1$，通解形式为 $\alpha+k\eta$。其中特解可取为 $\alpha_1$。而 $\alpha_1+2\alpha_2-3\alpha_3=(\alpha_1-\alpha_3)+2(\alpha_2-\alpha_3)$ 是 $Ax=0$ 的解，即 $Ax=0$ 的基础解系。计算得 $(1,2,3,4)^T+(0,1,-1,0)^T=(1,3,2,4)^T$，故通解为 $(1,2,3,4)^T+k(1,3,2,4)^T$。` },
    { n: 4, q: R`（选择题）设齐次线性方程组 $Ax=0$ 的一个基础解系是 $\eta_1,\eta_2,\eta_3,\eta_4$，则此方程组的基础解系还可以是
(A) $\eta_1+\eta_2,\eta_2+\eta_3,\eta_3+\eta_4,\eta_4+\eta_1$
(B) $\eta_1-\eta_2,\eta_2-\eta_3,\eta_3+\eta_4,\eta_4+\eta_1$
(C) $\eta_1,\eta_2+\eta_3,\eta_1+\eta_2-\eta_3+\eta_4$
(D) $\eta_1-\eta_2,\eta_2-\eta_3,\eta_3-\eta_4,\eta_4+\eta_1$`, a: R`(D)`, sol: R`基础解系应当是 4 个线性无关的解，(C) 中向量个数不符，(A)、(B) 均线性相关。(A) 中 $(\eta_1+\eta_2)-(\eta_2+\eta_3)+(\eta_3+\eta_4)-(\eta_4+\eta_1)=0$；只有 (D) 符合。故应选 (D)。` },
    { n: 5, q: R`（选择题）设 $A$ 是 $m\times n$ 矩阵，秩 $r(A)=n-2$，若 $\alpha_1,\alpha_2,\alpha_3$ 是非齐次线性方程组 $Ax=b$ 的三个线性无关的解，$k_1,k_2$ 为任意常数，则方程组的通解是
(A) $k_1(\alpha_1+\alpha_2)+k_2(\alpha_2-\alpha_3)$
(B) $\alpha_1+k_1(\alpha_2+\alpha_3)+k_2(\alpha_1+\alpha_3)$
(C) $\alpha_1+k_1(\alpha_3-\alpha_1)+k_2(\alpha_3-\alpha_2)$
(D) $\alpha_1+k_1(\alpha_2-\alpha_3)+k_2(\alpha_3-\alpha_2)$`, a: R`(C)`, sol: R`按解的结构，通解形式为 $\alpha+k_1\eta_1+k_2\eta_2$。(A) 不符合通解形式，缺 $Ax=b$ 之特解；(B) 中 $\alpha_2+\alpha_3,\alpha_1+\alpha_3$ 不是导出组 $Ax=0$ 的解，(D) 中 $\alpha_2-\alpha_3,\alpha_3-\alpha_2$ 线性相关，不符合基础解系线性无关之要求。故应选 (C)。` },
    { n: 6, q: R`设 $A=\begin{pmatrix}1&2\\3&4\end{pmatrix}$，求与矩阵 $A$ 可交换的矩阵。`, a: R`$\begin{pmatrix}-3t+u&2t\\3t&u\end{pmatrix}$（$t,u$ 为任意常数）`, sol: R`所谓与矩阵 $A$ 可交换，即满足 $AB=BA$ 之矩阵 $B$。设 $X=\begin{pmatrix}x_1&x_2\\x_3&x_4\end{pmatrix}$ 与 $A$ 可交换，即
$$\begin{pmatrix}1&2\\3&4\end{pmatrix}\begin{pmatrix}x_1&x_2\\x_3&x_4\end{pmatrix}=\begin{pmatrix}x_1&x_2\\x_3&x_4\end{pmatrix}\begin{pmatrix}1&2\\3&4\end{pmatrix}$$
即 $\begin{pmatrix}x_1+2x_3&x_2+2x_4\\3x_1+4x_3&3x_2+4x_4\end{pmatrix}=\begin{pmatrix}x_1+3x_2&2x_1+4x_2\\x_3+3x_4&2x_3+4x_4\end{pmatrix}$。解方程组，知 $\begin{pmatrix}-3t+u&2t\\3t&u\end{pmatrix}$（$t,u$ 为任意常数）是与 $A$ 可交换的所有的矩阵。` },
    { n: 7, q: R`设矩阵 $A=\begin{pmatrix}1&2&1&2\\0&1&a&a\\1&a&0&1\end{pmatrix}$，若齐次线性方程组 $Ax=0$ 的基础解系有 2 个线性无关的解向量，试求方程组 $Ax=0$ 的通解。`, a: R`$k_1\eta_1+k_2\eta_2$，其中 $\eta_1=(1,-1,1,0)^T,\eta_2=(0,-1,0,1)^T$`, sol: R`$A$ 是 $3\times4$ 矩阵，说明 $Ax=0$ 是 3 个方程 4 个未知数的齐次方程组，基础解系含 2 个解向量表明 $4-r(A)=2$，得 $r(A)=2$。对 $A$ 作初等行变换，有
$$A=\begin{pmatrix}1&2&1&2\\0&1&a&a\\1&a&0&1\end{pmatrix}\to\begin{pmatrix}1&2&1&2\\0&1&a&a\\0&a-2&-1&-1\end{pmatrix}\to\begin{pmatrix}1&2&1&2\\0&1&a&a\\0&0&-(a-1)^2&-(a-1)^2\end{pmatrix}$$
秩 $r(A)=2\Leftrightarrow a=1$。取 $x_3,x_4$ 为自由变量，令 $x_3=1,x_4=0$ 得 $\eta_1=(1,-1,1,0)^T$，令 $x_3=0,x_4=1$ 得 $\eta_2=(0,-1,0,1)^T$。方程组 $Ax=0$ 的通解：$k_1\eta_1+k_2\eta_2$。` },
    { n: 8, q: R`已知 $4\times3$ 矩阵 $A=(\alpha_1\ \alpha_2\ \alpha_3)$，其中 $\alpha_1,\alpha_2,\alpha_3$ 均为 4 维列向量，若非齐次线性方程组 $Ax=\beta$ 的通解为 $(1,2,-1)^T+k(1,-2,3)^T$，令 $B=(\alpha_1,\alpha_2,\alpha_3,\beta+\alpha_3)$，试求方程组 $By=\alpha_1-\alpha_2$ 的通解。`, a: R`$(1,-1,0,0)^T+k_1(1,-2,3,0)^T+k_2(1,2,0,-1)^T$`, sol: R`由方程组 $Ax=\beta$ 解的结构知三件事：
$$r(\alpha_1,\alpha_2,\alpha_3)=r(A)=n-1=3-1=2\tag{1}$$
$$(\alpha_1,\alpha_2,\alpha_3)\begin{pmatrix}1\\2\\-1\end{pmatrix}=\beta\quad\text{即}\quad\alpha_1+2\alpha_2-\alpha_3=\beta\tag{2}$$
$$(\alpha_1,\alpha_2,\alpha_3)\begin{pmatrix}1\\-2\\3\end{pmatrix}=0\quad\text{即}\quad\alpha_1-2\alpha_2+3\alpha_3=0\tag{3}$$
从而 $r(B)=r(\alpha_1,\alpha_2,\alpha_3,\alpha_3+\beta)=r(\alpha_1,\alpha_2,\alpha_3,\alpha_1+2\alpha_2)=r(\alpha_1,\alpha_2,\alpha_3)=2$。
又因 $(\alpha_1,\alpha_2,\alpha_3,\alpha_3+\beta)\begin{pmatrix}1\\-1\\0\\0\end{pmatrix}=\alpha_1-\alpha_2$，说明 $(1,-1,0,0)^T$ 是方程组 $By=\alpha_1-\alpha_2$ 的解。
再分析寻找 $By=0$ 的 $n-r(B)=4-2=2$ 个线性无关的解，注意 (3) 与 (2) 的运用。
$$B\begin{pmatrix}1\\-2\\3\\0\end{pmatrix}=(\alpha_1,\alpha_2,\alpha_3,\alpha_3+\beta)\begin{pmatrix}1\\-2\\3\\0\end{pmatrix}=\alpha_1-2\alpha_2+3\alpha_3\overset{(3)}{=}0$$
$$B\begin{pmatrix}1\\2\\0\\-1\end{pmatrix}\overset{(2)}{=}(\alpha_1,\alpha_2,\alpha_3,\alpha_1+2\alpha_2)\begin{pmatrix}1\\2\\0\\-1\end{pmatrix}=\alpha_1+2\alpha_2-(\alpha_1+2\alpha_2)=0$$
故方程组通解为：$(1,-1,0,0)^T+k_1(1,-2,3,0)^T+k_2(1,2,0,-1)^T$。` }
  ];
})();
