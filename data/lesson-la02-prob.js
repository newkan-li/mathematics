window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["la02_s0"].problems = [
    { n: 1, q: R`（填空题）已知 $A$ 是 3 阶矩阵，且所有元素都是 $-1$，则 $A^4+2A^3=$______。`, a: R`$\begin{pmatrix}9&9&9\\9&9&9\\9&9&9\end{pmatrix}$`, sol: R`【思路】全同元素的矩阵秩为 1，满足 $A^2=(\operatorname{tr}A)A$，用它降次。
【详解】$A$ 各行相同，$r(A)=1$，且 $\operatorname{tr}A=-3$，故 $A^2=(\operatorname{tr}A)A=-3A$。
于是 $A^3=A\cdot A^2=-3A^2=9A$，$A^4=-27A$。所以
$$A^4+2A^3=(-27+18)A=-9A=9\begin{pmatrix}1&1&1\\1&1&1\\1&1&1\end{pmatrix}=\begin{pmatrix}9&9&9\\9&9\\9&9&9\end{pmatrix}.$$
（即每个元素为 9。）
【易错点】秩 1 矩阵的降次公式 $A^2=(\operatorname{tr}A)A$ 只对「各列成比例」的矩阵成立；$A$ 全为 $-1$ 时 $\operatorname{tr}A=-3$。` },
    { n: 2, q: R`（填空题）设 $A$ 是 $n$ 阶矩阵，满足 $(A-E)^3=(A+E)^3$，则 $(A-2E)^{-1}=$______。`, a: R`$-\dfrac{3A+6E}{13}$`, sol: R`【思路】先展开条件化简出 $A^2$，再设 $(A-2E)^{-1}=aA+bE$ 待定。
【详解】展开 $(A-E)^3=(A+E)^3$：两边 $A^3,3A$ 相消，得 $-3A^2-E=3A^2+E$，即 $3A^2+E=0$，$A^2=-\dfrac13E$。
设 $(A-2E)(aA+bE)=E$，展开：$aA^2+(b-2a)A-2bE=-\dfrac a3E+(b-2a)A-2bE$。
令 $b-2a=0$、$-\dfrac a3-2b=1$，解得 $a=-\dfrac3{13},b=-\dfrac6{13}$。故 $(A-2E)^{-1}=-\dfrac{3A+6E}{13}$。
【易错点】展开时 $A^3$ 与一次项相消；用 $A^2=-\frac13E$ 把二次降为常数。` },
    { n: 3, q: R`（填空题）（2006,4,4 分）已知 $A=\begin{pmatrix}-3&2&-2\\2&a&3\\3&-1&1\end{pmatrix},B$ 是 3 阶非零矩阵，且 $AB=0$，则 $a=$______。`, a: R`$-3$`, sol: R`【思路】$AB=0$ 且 $B\neq0$ ⇒ $Ax=0$ 有非零解 ⇒ $|A|=0$。
【详解】$B\neq0$ 且 $AB=0$，说明 $B$ 有非零列是 $Ax=0$ 的解，故 $|A|=0$。
将第 3 列加到第 2 列：$|A|=\begin{vmatrix}-3&0&-2\\2&a+3&3\\3&0&1\end{vmatrix}$，按第 2 列展开：
$$|A|=(a+3)(-1)^{2+2}\begin{vmatrix}-3&-2\\3&1\end{vmatrix}=(a+3)(-3+6)=3(a+3)=0.$$
故 $a=-3$。
【易错点】由 $AB=0,B\neq0$ 只能得 $|A|=0$（不能得 $|B|=0$）；列变换后按含零列展开最简。` },
    { n: 4, q: R`（填空题）（2006,4,4 分）设矩阵 $A=\begin{pmatrix}2&1\\-1&2\end{pmatrix},E$ 为 2 阶单位矩阵，矩阵 $B$ 满足 $BA=B+2E$，则 $B=$______。`, a: R`$\begin{pmatrix}1&-1\\1&1\end{pmatrix}$`, sol: R`【思路】由 $BA=B+2E$ 移项提出 $B$，化为 $B=2(A-E)^{-1}$。
【详解】$BA-B=2E\Rightarrow B(A-E)=2E\Rightarrow B=2(A-E)^{-1}$。
$A-E=\begin{pmatrix}1&1\\-1&1\end{pmatrix}$，$|A-E|=2$，故 $(A-E)^{-1}=\dfrac12\begin{pmatrix}1&-1\\1&1\end{pmatrix}$。
所以 $B=\begin{pmatrix}1&-1\\1&1\end{pmatrix}$。
【易错点】二阶求逆公式 $\begin{pmatrix}a&b\\c&d\end{pmatrix}^{-1}=\frac{1}{ad-bc}\begin{pmatrix}d&-b\\-c&a\end{pmatrix}$；注意 $B$ 在左边，提公因式时顺序不变。` },
    { n: 5, q: R`（填空题）设 $A$ 是 3 阶矩阵，$A^*$ 是 $A$ 的伴随矩阵，若 $|A|=4$，则 $\left|A^*-\left(\frac{1}{2}A\right)^{-1}\right|=$______。`, a: R`$2$`, sol: R`【思路】用 $A^*=|A|A^{-1}$ 与 $(kA)^{-1}=\frac1kA^{-1}$ 把括号内统一成 $A^{-1}$。
【详解】$(\frac12A)^{-1}=2A^{-1}$，$A^*=|A|A^{-1}=4A^{-1}$，故
$$A^*-\left(\frac12A\right)^{-1}=4A^{-1}-2A^{-1}=2A^{-1}.$$
$$\left|A^*-\left(\frac12A\right)^{-1}\right|=|2A^{-1}|=2^3|A^{-1}|=8\cdot\frac14=2.$$
【易错点】$|2A^{-1}|=2^3|A^{-1}|$（按阶数 3 提公因子）；$|A^{-1}|=\frac{1}{|A|}=\frac14$。` },
    { n: 6, q: R`（选择题）已知 $A=\begin{pmatrix}2&0&-3\\-1&4&-1\\1&-1&2\end{pmatrix}$，则 $A$ 的伴随矩阵 $A^*=$
(A) $\begin{pmatrix}14&3&12\\0&28&-5\\9&-2&16\end{pmatrix}$ (B) $\begin{pmatrix}7&-1&-3\\3&7&2\\12&5&8\end{pmatrix}$
(C) $\begin{pmatrix}7&3&12\\1&7&5\\-3&2&8\end{pmatrix}$ (D) $\begin{pmatrix}7&-3&12\\-1&7&-5\\-3&-2&8\end{pmatrix}$`, a: R`(C)`, sol: R`【思路】按定义求各代数余子式 $A_{ij}=(-1)^{i+j}M_{ij}$，再转置组装。
【详解】$A_{11}=8-1=7$，$A_{12}=-(-2+1)=1$，$A_{13}=1-4=-3$；
$A_{21}=-(0-3)=3$，$A_{22}=4+3=7$，$A_{23}=-(-2-0)=2$；
$A_{31}=0+12=12$，$A_{32}=-(-2-3)=5$，$A_{33}=8$。
$$A^*=\begin{pmatrix}A_{11}&A_{21}&A_{31}\\A_{12}&A_{22}&A_{32}\\A_{13}&A_{23}&A_{33}\end{pmatrix}=\begin{pmatrix}7&3&12\\1&7&5\\-3&2&8\end{pmatrix}.$$
选 (C)。
【易错点】伴随矩阵是「代数余子式矩阵的转置」，第 $i$ 行第 $j$ 列放 $A_{ji}$；勿丢符号 $(-1)^{i+j}$。` },
    { n: 7, q: R`（选择题）$A,B$ 均为 $n$ 阶矩阵，$AB=0$，且 $B\neq0$，则必有
(A) $(A+B)^2=A^2+B^2$ (B) $|B|\neq0$
(C) $|B^*|\neq0$ (D) $|A^*|=0$`, a: R`(D)`, sol: R`【思路】$AB=0,B\neq0$ ⇒ $|A|=0$ ⇒ $|A^*|=0$。
【详解】由 $AB=0$ 且 $B\neq0$，$B$ 的非零列是 $Ax=0$ 的非零解，故 $|A|=0$，从而 $|A^*|=|A|^{n-1}=0$，选 (D)。
(A) 需 $BA=0$，一般不成立；(B)(C) 都要求 $|B|\neq0$，与题设无必然关系。
【易错点】$AB=0$ 推不出 $BA=0$；由 $AB=0$ 得到的是 $|A|=0$（不是 $|B|=0$）。` },
    { n: 8, q: R`（选择题）设 $A=\begin{pmatrix}1&a&a&a\\a&1&a&a\\a&a&1&a\\a&a&a&1\end{pmatrix}$，若 $A$ 的伴随矩阵 $A^*$ 的秩为 1，则 $a=$
(A) 1 (B) $-1$ (C) $-\frac{1}{3}$ (D) 3`, a: R`(C)`, sol: R`【思路】用 $r(A^*)$ 与 $r(A)$ 的关系：$n$ 阶矩阵 $r(A^*)=1$ ⇒ $r(A)=n-1$ ⇒ $|A|=0$ 且 $r(A)=n-1$。
【详解】$n=4$，$r(A^*)=1$ 说明 $r(A)=3$，故 $|A|=0$。
把各列加到第 1 列，第 1 列全为 $3a+1$，提出后其余列为单位阵的差，计算得
$$|A|=(3a+1)(1-a)^3.$$
令 $|A|=0$ 得 $a=-\frac13$ 或 $a=1$。当 $a=1$ 时 $A$ 为全 1 矩阵，$r(A)=1$，此时 $r(A^*)=0$，不合题意。故 $a=-\frac13$。选 (C)。
【易错点】$r(A^*)=1$ 要求 $r(A)=n-1=3$（不是 $r(A)=1$）；$a=1$ 时 $r(A)=1$ 要排除。` },
    { n: 9, q: R`设 $A$ 是 $n$ 阶矩阵，若 $(A+E)^m=0$，证明矩阵 $A$ 可逆。`, a: R`证明 $A$ 可逆。`, sol: R`【思路】把 $(A+E)^m=0$ 展开，提出因子 $A$，凑成 $A\cdot M=E$ 的形式。
【详解】展开 $(A+E)^m=0$：
$$A^m+C_m^1A^{m-1}+C_m^2A^{m-2}+\cdots+C_m^{m-1}A+E=0.$$
移项并把含 $A$ 的项提出 $A$：
$$A\left(A^{m-1}+C_m^1A^{m-2}+\cdots+C_m^{m-1}E\right)=-E.$$
故 $A\cdot\left[-\left(A^{m-1}+C_m^1A^{m-2}+\cdots+C_m^{m-1}E\right)\right]=E$，即 $A$ 可逆，且 $A^{-1}=-\left(A^{m-1}+C_m^1A^{m-2}+\cdots+C_m^{m-1}E\right)$。
【易错点】$m$ 项展开中除 $A^m$ 与 $E$ 外，其余每项都含 $A$，故可整体提出 $A$；结论只要求「可逆」，用定义 $A\cdot M=E$ 即可。` },
    { n: 10, q: R`设 $B$ 是 $m\times n$ 矩阵，$BB^T$ 可逆，$A=E-B^T(BB^T)^{-1}B$，其中 $E$ 是 $n$ 阶单位矩阵。证明：(1) $A^T=A$；(2) $A^2=A$。`, a: R`证明 (1) $A^T=A$；(2) $A^2=A$。`, sol: R`【思路】(1) 转置运算（注意 $(BB^T)^T=BB^T$）；(2) 直接乘并利用中间项相消。
【详解】(1)
$$A^T=E^T-\left[B^T(BB^T)^{-1}B\right]^T=E-B^T\left[(BB^T)^{-1}\right]^T(B^T)^T=E-B^T(BB^T)^{-1}B=A,$$
其中用到 $\left[(BB^T)^{-1}\right]^T=(BB^T)^{-1}$（因 $BB^T$ 对称）。
(2) 记 $M=B^T(BB^T)^{-1}B$，则 $A=E-M$，且
$$M^2=B^T(BB^T)^{-1}B\cdot B^T(BB^T)^{-1}B=B^T(BB^T)^{-1}(BB^T)(BB^T)^{-1}B=B^T(BB^T)^{-1}B=M.$$
故 $A^2=(E-M)^2=E-2M+M^2=E-M=A$。
【易错点】$M^2=M$ 是关键（中间 $BB^T(BB^T)^{-1}=E$ 相消）；$A$ 是幂等且对称的矩阵（投影矩阵）。` }
  ];
})();
