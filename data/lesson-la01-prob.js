window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["la01_s0"].problems = [
    { n: 1, q: R`（填空题）设 $A=\begin{pmatrix}1&2&-1\\0&3&5\\2&4&2\end{pmatrix}$，$A^*$ 是 $A$ 的伴随矩阵，则 $\left|\frac{1}{2}A^*\right|=$______。`, a: R`$18$`, sol: R`【提示】不必去求伴随矩阵 $A^*$，根据 $|kA|=k^n|A|$，$|A^*|=|A|^{n-1}$，有
$$\left|\frac{1}{2}A^*\right|=\left(\frac{1}{2}\right)^3|A^*|=\frac{1}{8}|A|^2$$
由 $|A|=\begin{vmatrix}1&2&-1\\0&3&5\\2&4&2\end{vmatrix}=12$，得 $\frac{1}{8}\times144=18$。` },
    { n: 2, q: R`（填空题）$\begin{vmatrix}1-a&a&0&0\\-1&1-a&a&0\\0&-1&1-a&a\\0&0&-1&1-a\end{vmatrix}=$______。`, a: R`$1-a+a^2-a^3+a^4$`, sol: R`【提示】把各列均加至第 1 列，然后按第 1 列展开，可建立递推关系，即
$$D_4=\begin{vmatrix}1-a&a&0&0\\-1&1-a&a&0\\0&-1&1-a&a\\0&0&-1&1-a\end{vmatrix}=\begin{vmatrix}1&a&0&0\\0&1-a&a&0\\0&-1&1-a&a\\-a&0&-1&1-a\end{vmatrix}=D_3+(-a)\cdot(-1)^{4+1}a^3=D_3+a^4$$
那么 $D_3=D_2+(-a)(-1)^{3+1}a^2=D_2-a^3$，$D_2=D_1+(-a)(-1)^{2+1}a=1-a+a^2$，三个式子相加可得 $D_4$。` },
    { n: 3, q: R`（填空题）$\begin{vmatrix}1&2&3&\cdots&n\\-1&0&3&\cdots&n\\-1&-2&0&\cdots&n\\\vdots&\vdots&\vdots&&\vdots\\-1&-2&-3&\cdots&0\end{vmatrix}=$______。`, a: R`$n!$`, sol: R`【提示】把第一行分别加至其它各行。` },
    { n: 4, q: R`（填空题）$\begin{vmatrix}1&2&3&\cdots&n-1&n\\-1&1&0&\cdots&0&0\\0&-1&1&\cdots&0&0\\\vdots&\vdots&\vdots&&\vdots&\vdots\\0&0&0&\cdots&-1&1\end{vmatrix}=$______。`, a: R`$\frac{1}{2}n(n+1)$`, sol: R`【提示】把每列均加至第 1 列。` },
    { n: 5, q: R`（填空题）$\begin{vmatrix}a&0&0&\cdots&0&b\\b&a&0&\cdots&0&0\\0&b&a&\cdots&0&0\\\vdots&\vdots&\vdots&&\vdots&\vdots\\0&0&0&\cdots&b&a\end{vmatrix}=$______。`, a: R`$a^n+(-1)^{n+1}b^n$`, sol: R`【提示】本题已有大量的 0，可立即用展开公式来计算，建议按第 1 行展开，比按第 1 列展开要简洁。` },
    { n: 6, q: R`（填空题）$\begin{vmatrix}a_1+b&a_2&a_3&\cdots&a_n\\a_1&a_2+b&a_3&\cdots&a_n\\a_1&a_2&a_3+b&\cdots&a_n\\\vdots&\vdots&\vdots&&\vdots\\a_1&a_2&a_3&\cdots&a_n+b\end{vmatrix}=$______。`, a: R`$b^{n-1}(\sum a_i+b)$`, sol: R`【提示】把各列均加至第 1 列，提取公因式 $b+\sum a_j$ 然后把第 1 行的 $-1$ 倍分别加至其余各行，可得上三角行列式。` },
    { n: 7, q: R`（选择题）$\alpha,\beta,\gamma_1,\gamma_2,\gamma_3$ 均为 4 维列向量，已知 $|A|=|\alpha\ \gamma_1\ \gamma_2\ \gamma_3|=5$，$|B|=|\beta\ \gamma_1\ \gamma_2\ \gamma_3|=-1$，则 $|A+B|=$
(A) 4　(B) 6　(C) 32　(D) 48`, a: R`(C)`, sol: R`【提示】
$$|A+B|=|\alpha+\beta\ 2\gamma_1\ 2\gamma_2\ 2\gamma_3|=8|\alpha+\beta\ \gamma_1\ \gamma_2\ \gamma_3|=8(|\alpha\ \gamma_1\ \gamma_2\ \gamma_3|+|\beta\ \gamma_1\ \gamma_2\ \gamma_3|)=8(5-1)=32$$
故应选 (C)。` },
    { n: 8, q: R`（选择题）设 $A$ 是 $m\times n$ 矩阵，$B$ 是 $n\times m$ 矩阵，则
(A) 当 $m>n$，必有行列式 $|AB|\neq0$
(B) 当 $m>n$，必有行列式 $|AB|=0$
(C) 当 $n>m$，必有行列式 $|AB|\neq0$
(D) 当 $n>m$，必有行列式 $|AB|=0$`, a: R`(B)`, sol: R`【提示】因为 $AB$ 是 $m$ 阶矩阵，行列式 $|AB|=0$ 的充分必要条件是秩 $r(AB)<m$。由于 $r(AB)\leqslant r(B)\leqslant\min(m,n)$，可见当 $m>n$ 时，必有 $r(AB)\leqslant r(B)\leqslant n<m$，故应选 (B)。或者，由于方程组 $Bx=0$ 的解必是方程组 $ABx=0$ 的解，而 $Bx=0$ 是 $n$ 个方程 $m$ 个未知数的齐次线性方程组，因此当 $m>n$ 时，方程组 $Bx=0$ 必有非零解，从而 $ABx=0$ 有非零解，那么行列式 $|AB|=0$。` },
    { n: 9, q: R`（选择题）设 $A$ 为 $n$ 阶矩阵，则行列式 $|A|=0$ 的必要条件是
(A) $A$ 的两行元素对应成比例
(B) $A$ 中必有一行为其余各行的线性组合
(C) $A$ 中有一列元素全为 $0$
(D) $A$ 中任一列均为其余各列的线性组合`, a: R`(B)`, sol: R`【提示】(A)、(C) 均是 $|A|=0$ 的充分条件并不必要，只要有一行（列）是其余各行（列）的线性组合就可保证 $|A|=0$，且这是必要条件。故应选 (B)。` },
    { n: 10, q: R`求 $x$ 的值：$\begin{vmatrix}x-1&1&2\\1&x-5&0\\2&0&x-5\end{vmatrix}=0$。`, a: R`$x=5,6,0$`, sol: R`【提示】把第 2 行的 $-2$ 倍加至第 3 行，可出 $x-5$ 的公因式，即
$$\begin{vmatrix}x-1&1&2\\1&x-5&0\\2&0&x-5\end{vmatrix}=\begin{vmatrix}x-1&1&2\\1&x-5&0\\0&-2(x-5)&x-5\end{vmatrix}=(x-5)\begin{vmatrix}x-1&1&2\\1&x-5&0\\0&-2&1\end{vmatrix}=(x-5)\begin{vmatrix}x-1&5&2\\1&x-5&0\\0&0&1\end{vmatrix}=(x-5)(x^2-6x)$$` },
    { n: 11, q: R`求 $x$ 的值：$\begin{vmatrix}1&1&1&1\\2&x&3&1\\3&3&x&6\\4&4&6&x\end{vmatrix}=0$。`, a: R`$x=1,2,6$`, sol: R`【提示】把第 1 行的 $-3$ 倍、$-4$ 倍分别加至第 3 行与第 4 行，可用拉普拉斯展开式，即
$$\begin{vmatrix}1&1&1&1\\2&x&3&1\\3&3&x&6\\4&4&6&x\end{vmatrix}=\begin{vmatrix}1&1&1&1\\2&x&3&1\\0&0&x-3&3\\0&0&2&x-4\end{vmatrix}=\begin{vmatrix}1&1\\2&x\end{vmatrix}\begin{vmatrix}x-3&3\\2&x-4\end{vmatrix}=0$$` },
    { n: 12, q: R`已知 $A$ 是 $n$ 阶矩阵，满足 $A^2=E$，$A\neq E$，证明 $|A+E|=0$。`, a: R`证明 $|A+E|=0$。`, sol: R`由 $A^2=E$ 得 $(A+E)(A-E)=0$。因为 $A\neq E$，故齐次方程组 $(A+E)x=0$ 有非零解。从而 $|A+E|=0$。
【评注】请参看例 1.24 的各种证明方法。` },
    { n: 13, q: R`已知 $a,b,c$ 不全为零，证明齐次方程组 $\begin{cases}ax_2+bx_3+cx_4=0\\ax_1+x_2=0\\bx_1+x_3=0\\cx_1+x_4=0\end{cases}$ 只有零解。`, a: R`证明方程组只有零解。`, sol: R`由于系数行列式
$$\begin{vmatrix}0&a&b&c\\a&1&0&0\\b&0&1&0\\c&0&0&1\end{vmatrix}=\begin{vmatrix}-a^2-b^2-c^2&0&0&0\\a&1&0&0\\b&0&1&0\\c&0&0&1\end{vmatrix}=-(a^2+b^2+c^2)\neq0$$
故只有零解。
【评注】请参看例 1.10 爪型行列式的计算。` }
  ];
})();
