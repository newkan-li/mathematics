window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["la04_s0"].problems = [
    { n: 1, q: R`（填空题）方程 $x_1-2x_2+3x_3-4x_4=0$ 的通解是______。`, a: R`$k_1(2,1,0,0)^T+k_2(-3,0,1,0)^T+k_3(4,0,0,1)^T$`, sol: R`【思路】4 个未知数、1 个方程，$n-r=4-1=3$，基础解系含 3 个解，选 3 个自由变量。
【详解】$r(A)=1$，$n-r=3$。取 $x_2,x_3,x_4$ 为自由变量，由 $x_1=2x_2-3x_3+4x_4$：
$(x_2,x_3,x_4)=(1,0,0)$ 得 $\eta_1=(2,1,0,0)^T$；
$(0,1,0)$ 得 $\eta_2=(-3,0,1,0)^T$；
$(0,0,1)$ 得 $\eta_3=(4,0,0,1)^T$。
通解 $k_1\eta_1+k_2\eta_2+k_3\eta_3$。
【易错点】自由变量个数 $=n-r(A)$；每个自由变量取 1、其余取 0，得到基础解系。` },
    { n: 2, q: R`（填空题）设矩阵 $A=\begin{pmatrix}1&1&2-a\\3-2a&2-a&1\\2-a&2-a&1\end{pmatrix},b=\begin{pmatrix}1\\a\\-1\end{pmatrix}$，若方程组 $Ax=b$ 有解且不唯一，则 $a=$______。`, a: R`$a=3$`, sol: R`【思路】有解且不唯一 $\iff r(A)=r(\bar A)<3$。先由 $|A|=0$ 缩小范围，再逐一检验。
【详解】$|A|=\begin{vmatrix}1&1&2-a\\3-2a&2-a&1\\2-a&2-a&1\end{vmatrix}=(a-1)^2(3-a)$。要有非唯一解需 $|A|=0$，即 $a=1$ 或 $a=3$。
对增广矩阵作初等行变换：$\bar A\to\begin{pmatrix}1&1&2-a&1\\0&a-1&-2a^2+7a-5&3a-3\\0&0&-a^2+4a-3&a-3\end{pmatrix}$。
$a=3$ 时 $r(A)=r(\bar A)<3$，符合；$a=1$ 时 $r(A)=1$，$r(\bar A)=2$，无解。故 $a=3$。
【易错点】$|A|=0$ 只是「有唯一解」的反面，还要区分「无解」与「无穷多解」；必须检验增广矩阵的秩。` },
    { n: 3, q: R`（填空题）设 $\alpha_1,\alpha_2,\alpha_3$ 是 4 元非齐次线性方程组 $Ax=b$ 的 3 个解向量，且秩 $r(A)=3$，若 $\alpha_1=(1,2,3,4)^T,2\alpha_2-3\alpha_3=(0,1,-1,0)^T$，则方程组 $Ax=b$ 的通解是______。`, a: R`$(1,2,3,4)^T+k(1,3,2,4)^T$`, sol: R`【思路】$n-r(A)=1$，只需一个特解与一个导出组的非零解。利用「解的组合」构造。
【详解】$r(A)=3$，$n-r=4-3=1$，通解形如 $\alpha+k\eta$。
特解取 $\alpha_1=(1,2,3,4)^T$。
$\alpha_1+2\alpha_2-3\alpha_3=\alpha_1+(2\alpha_2-3\alpha_3)$ 满足 $A(\alpha_1+2\alpha_2-3\alpha_3)=b+2b-3b=0$，故它是导出组 $Ax=0$ 的解：
$$\eta=\alpha_1+(2\alpha_2-3\alpha_3)=(1,2,3,4)^T+(0,1,-1,0)^T=(1,3,2,4)^T\neq0.$$
故通解为 $(1,2,3,4)^T+k(1,3,2,4)^T$。
【易错点】要用「非齐次解的组合」凑出齐次解：系数之和为 0 的组合（如 $\alpha_1+2\alpha_2-3\alpha_3$）才是 $Ax=0$ 的解。` },
    { n: 4, q: R`（选择题）设齐次线性方程组 $Ax=0$ 的一个基础解系是 $\eta_1,\eta_2,\eta_3,\eta_4$，则此方程组的基础解系还可以是
(A) $\eta_1+\eta_2,\eta_2+\eta_3,\eta_3+\eta_4,\eta_4+\eta_1$
(B) $\eta_1-\eta_2,\eta_2-\eta_3,\eta_3+\eta_4,\eta_4+\eta_1$
(C) $\eta_1,\eta_2+\eta_3,\eta_1+\eta_2-\eta_3+\eta_4$
(D) $\eta_1-\eta_2,\eta_2-\eta_3,\eta_3-\eta_4,\eta_4+\eta_1$`, a: R`(D)`, sol: R`【思路】基础解系必须含 4 个线性无关的解。个数不足或线性相关都不行。
【详解】(C) 只有 3 个向量，个数不符。
(A)：$(\eta_1+\eta_2)-(\eta_2+\eta_3)+(\eta_3+\eta_4)-(\eta_4+\eta_1)=0$，线性相关。
(B)：$(\eta_1-\eta_2)+(\eta_2-\eta_3)+(\eta_3+\eta_4)-(\eta_4+\eta_1)=0$，线性相关。
(D)：坐标矩阵 $\begin{pmatrix}1&-1&0&0\\0&1&-1&0\\0&0&1&-1\\1&0&0&1\end{pmatrix}$ 的行列式 $=2\neq0$，线性无关。选 (D)。
【易错点】判断是否为基础解系要看「个数 = $n-r$」且「线性无关」两个条件。` },
    { n: 5, q: R`（选择题）设 $A$ 是 $m\times n$ 矩阵，秩 $r(A)=n-2$，若 $\alpha_1,\alpha_2,\alpha_3$ 是非齐次线性方程组 $Ax=b$ 的三个线性无关的解，$k_1,k_2$ 为任意常数，则方程组的通解是
(A) $k_1(\alpha_1+\alpha_2)+k_2(\alpha_2-\alpha_3)$
(B) $\alpha_1+k_1(\alpha_2+\alpha_3)+k_2(\alpha_1+\alpha_3)$
(C) $\alpha_1+k_1(\alpha_3-\alpha_1)+k_2(\alpha_3-\alpha_2)$
(D) $\alpha_1+k_1(\alpha_2-\alpha_3)+k_2(\alpha_3-\alpha_2)$`, a: R`(C)`, sol: R`【思路】通解 = 一个特解 + 导出组基础解系（$n-r=2$ 个线性无关的齐次解）。
【详解】$n-r(A)=2$，通解形如 $\alpha+k_1\eta_1+k_2\eta_2$。
(A) 只有齐次部分，缺特解。
(B) $\alpha_2+\alpha_3,\alpha_1+\alpha_3$ 不是 $Ax=0$ 的解（$A(\alpha_i+\alpha_j)=2b\neq0$）。
(D) $\alpha_2-\alpha_3$ 与 $\alpha_3-\alpha_2$ 互为相反数，线性相关。
(C)：特解 $\alpha_1$，$\alpha_3-\alpha_1,\alpha_3-\alpha_2$ 都是 $Ax=0$ 的解，且由 $\alpha_1,\alpha_2,\alpha_3$ 线性无关知它们线性无关，构成基础解系。选 (C)。
【易错点】区分「$Ax=b$ 的解」与「$Ax=0$ 的解」：只有两个非齐次解之差才是齐次解。` },
    { n: 6, q: R`设 $A=\begin{pmatrix}1&2\\3&4\end{pmatrix}$，求与矩阵 $A$ 可交换的矩阵。`, a: R`$\begin{pmatrix}-3t+u&2t\\3t&u\end{pmatrix}$（$t,u$ 为任意常数）`, sol: R`【思路】设 $X$ 为 2×2 待定矩阵，由 $AX=XA$ 逐元素列方程。
【详解】设 $X=\begin{pmatrix}x_1&x_2\\x_3&x_4\end{pmatrix}$，$AX=XA$ 即
$$\begin{pmatrix}x_1+2x_3&x_2+2x_4\\3x_1+4x_3&3x_2+4x_4\end{pmatrix}=\begin{pmatrix}x_1+3x_2&2x_1+4x_2\\x_3+3x_4&2x_3+4x_4\end{pmatrix}.$$
比较得 $2x_3=3x_2$，$x_4=x_1+x_3$（另两式与之等价）。令 $x_2=2t$、$x_1=u$，则 $x_3=3t$、$x_4=u+3t$，即
$$X=\begin{pmatrix}u&2t\\3t&u+3t\end{pmatrix}=\begin{pmatrix}-3t+u&2t\\3t&u\end{pmatrix}.$$
【易错点】4 个方程中有冗余，实际只有 2 个独立条件（解空间 2 维）；最后统一用两个自由参数表示。` },
    { n: 7, q: R`设矩阵 $A=\begin{pmatrix}1&2&1&2\\0&1&a&a\\1&a&0&1\end{pmatrix}$，若齐次线性方程组 $Ax=0$ 的基础解系有 2 个线性无关的解向量，试求方程组 $Ax=0$ 的通解。`, a: R`$k_1\eta_1+k_2\eta_2$，其中 $\eta_1=(1,-1,1,0)^T,\eta_2=(0,-1,0,1)^T$`, sol: R`【思路】基础解系含 2 个向量 ⇒ $n-r(A)=2$ ⇒ $r(A)=2$，由此定 $a$，再解方程。
【详解】$A$ 是 $3\times4$ 矩阵，$4-r(A)=2\Rightarrow r(A)=2$。对 $A$ 作初等行变换：
$$A\to\begin{pmatrix}1&2&1&2\\0&1&a&a\\0&0&-(a-1)^2&-(a-1)^2\end{pmatrix}.$$
秩为 2 $\iff a=1$。此时 $A\to\begin{pmatrix}1&0&-1&0\\0&1&1&1\\0&0&0&0\end{pmatrix}$，即 $x_1=x_3,\ x_2=-x_3-x_4$。
取 $(x_3,x_4)=(1,0)$ 得 $\eta_1=(1,-1,1,0)^T$；取 $(0,1)$ 得 $\eta_2=(0,-1,0,1)^T$。
通解 $k_1\eta_1+k_2\eta_2$。
【易错点】由「基础解系含 2 个向量」反推 $r(A)=2$；阶梯形第三行的系数含 $(a-1)^2$，故 $a=1$。` },
    { n: 8, q: R`已知 $4\times3$ 矩阵 $A=(\alpha_1\ \alpha_2\ \alpha_3)$，其中 $\alpha_1,\alpha_2,\alpha_3$ 均为 4 维列向量，若非齐次线性方程组 $Ax=\beta$ 的通解为 $(1,2,-1)^T+k(1,-2,3)^T$，令 $B=(\alpha_1,\alpha_2,\alpha_3,\beta+\alpha_3)$，试求方程组 $By=\alpha_1-\alpha_2$ 的通解。`, a: R`$(1,-1,0,0)^T+k_1(1,-2,3,0)^T+k_2(1,2,0,-1)^T$`, sol: R`【思路】由 $Ax=\beta$ 的通解读出三个信息（秩、特解、齐次解），再对 $B$ 找特解与两个齐次解。
【详解】由通解 $(1,2,-1)^T+k(1,-2,3)^T$ 知
$$r(A)=2,\quad \alpha_1+2\alpha_2-\alpha_3=\beta,\quad \alpha_1-2\alpha_2+3\alpha_3=0.$$
于是 $r(B)=r(\alpha_1,\alpha_2,\alpha_3,\beta+\alpha_3)=r(\alpha_1,\alpha_2,\alpha_3,\alpha_1+2\alpha_2)=2$，故 $By=\alpha_1-\alpha_2$ 的解含 2 个齐次自由度。
特解：$B(1,-1,0,0)^T=\alpha_1-\alpha_2$。
齐次解：$B(1,-2,3,0)^T=\alpha_1-2\alpha_2+3\alpha_3=0$；$B(1,2,0,-1)^T=\alpha_1+2\alpha_2-(\beta+\alpha_3)=0$。
故通解 $(1,-1,0,0)^T+k_1(1,-2,3,0)^T+k_2(1,2,0,-1)^T$。
【易错点】把 $\beta$ 用 $\alpha_1+2\alpha_2-\alpha_3$ 替换后再求 $B$ 的秩与齐次解；齐次解的个数为 $4-r(B)=2$。` }
  ];
})();
