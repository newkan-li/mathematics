window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["la06_s0"].problems = [
    { n: 1, q: R`填空题
(1) 二次型 $f(x_1,x_2,x_3)=x_1^2-3x_2^2-2x_1x_2+2x_1x_3-6x_2x_3$ 的秩 $r(f)=$______。
(2) 二次型 $5x_1^2+x_2^2+tx_3^2+4x_1x_2-2x_1x_3-2x_2x_3$ 正定，则 $t$______。
(3) 二次型 $f=x_1^2-x_2x_3$ 的规范形是______。`, a: R`(1) $2$；(2) $t>2$；(3) $y_1^2+y_2^2-y_3^2$`, sol: R`【提示】(1) 二次型的秩也就是二次型矩阵的秩。$A=\begin{pmatrix}1&-1&1\\-1&-3&-3\\1&-3&0\end{pmatrix}$，计算得 $r(A)=2$。
(2) 用顺序主子式。$A=\begin{pmatrix}5&2&-1\\2&1&-1\\-1&-1&t\end{pmatrix}$，$\Delta_1=5>0$，$\Delta_2=\begin{vmatrix}5&2\\2&1\end{vmatrix}=1>0$，$\Delta_3=|A|=t-2>0$，故 $t>2$。
(3) 求二次型矩阵 $A=\begin{pmatrix}1&0&0\\0&0&-\frac{1}{2}\\0&-\frac{1}{2}&0\end{pmatrix}$ 的特征值，可知正、负惯性指数，即可知规范形。或用配方法之技巧，令 $\begin{cases}x_1=y_1\\x_2=y_2+y_3\\x_3=y_2-y_3\end{cases}$ 化成标准形。` },
    { n: 2, q: R`选择题
(1) 对于 $n$ 元二次型 $x^{\mathrm{T}}Ax$，下述结论中正确的是
(A) 化 $x^{\mathrm{T}}Ax$ 为标准形的坐标变换是唯一的
(B) 化 $x^{\mathrm{T}}Ax$ 为规范形的坐标变换是唯一的
(C) $x^{\mathrm{T}}Ax$ 的标准形是唯一的
(D) $x^{\mathrm{T}}Ax$ 的规范形是唯一的
(2) $n$ 元二次型 $x^{\mathrm{T}}Ax$ 正定的充分必要条件是
(A) 存在正交矩阵 $P$，$P^{\mathrm{T}}AP=E$ (B) 负惯性指数为零
(C) $A$ 与单位矩阵合同 (D) 存在 $n$ 阶矩阵 $C$，使 $A=C^{\mathrm{T}}C$`, a: R`(1)(D)　(2)(C)`, sol: R`【提示】(1) 化二次型为标准形即可用正交变换法也可用配方法，所用坐标变换不同，标准形也可以不同，故 (A)、(C) 均不正确。化二次型为规范形一般用配方法，或者先正交变换法化为标准形后再用配方法化为规范形，方法不同所用坐标变换也就可不同，故 (B) 不正确。规范形实际上由二次型的正、负惯性指数所确定，而正负惯性指数在坐标变换下是不变的（惯性定理 6.4），故仅 (D) 正确。
(2) (A) 是充分条件，并不必要。因为 $P$ 是正交矩阵，那么 $P^{-1}AP=P^{\mathrm{T}}AP=E$，表明 $A$ 的特征值全是 1，所以 $A$ 正定。但 $A$ 正定时特征值可以不会是 1。(B) 是必要条件，并不充分，因为 $x^{\mathrm{T}}Ax$ 正定的充要条件是 $p=n$。显然有 $q=0$，但 $q=0$ 不能保证必有 $p=n$。例如 $f(x_1,x_2,x_3)=x_1^2+3x_2^2$，$p=2,q=0$，并不是 3 元正定二次型。(D) 中矩阵 $C$ 是否可逆不明确，若 $C$ 不可逆则 $|A|=|C^{\mathrm{T}}C|=|C|^2=0$，矩阵 $A$ 不可能正定。关于 (C) 的直接证明：若 $A$ 与 $E$ 合同，即对二次型 $x^{\mathrm{T}}Ax$ 存在坐标变换 $x=Cy$，使 $x^{\mathrm{T}}Ax=y^{\mathrm{T}}Ey=y_1^2+y_2^2+\cdots+y_n^2$，那么 $\forall X\neq0$，由 $C$ 可逆，知 $X=CY$ 中必有 $Y\neq0$，因此恒有 $X^{\mathrm{T}}AX=Y^{\mathrm{T}}Y>0$，即二次型 $x^{\mathrm{T}}Ax$ 正定。反之，若经坐标变换 $x=Cy$ 化二次型为标准形 $f=d_1y_1^2+d_2y_2^2+\cdots+d_ny_n^2$，如果 $d_n\leqslant0$，那么取 $y_0=(0,0,\cdots,0,1)^{\mathrm{T}}$，有 $x_0=Cy_0\neq0$，而 $x_0^{\mathrm{T}}Ax_0=d_n\leqslant0$，与 $x^{\mathrm{T}}Ax$ 正定相矛盾。故必有 $d_i>0\ (i=1,2,\cdots,n)$。于是再经坐标变换 $z_1=\sqrt{d_1}y_1,z_2=\sqrt{d_2}y_2,\cdots,z_n=\sqrt{d_n}y_n$，有 $f=x^{\mathrm{T}}Ax=z_1^2+z_2^2+\cdots+z_n^2$。` },
    { n: 3, q: R`已知二次型 $f(x_1,x_2,x_3)=5x_1^2+5x_2^2+cx_3^2+2x_1x_2+4x_1x_3-4x_2x_3$ 的秩为 2，求 $c$ 并用正交变换把 $f$ 化成标准形，写出相应的正交矩阵。`, a: R`$c=2$；$P=\begin{pmatrix}\frac{1}{\sqrt{2}}&\frac{1}{\sqrt{3}}&-\frac{1}{\sqrt{6}}\\\frac{1}{\sqrt{2}}&-\frac{1}{\sqrt{3}}&\frac{1}{\sqrt{6}}\\0&\frac{1}{\sqrt{3}}&\frac{2}{\sqrt{6}}\end{pmatrix}$；标准形 $f=6y_1^2+6y_2^2$`, sol: R`二次型矩阵 $A=\begin{pmatrix}5&1&2\\1&5&-2\\2&-2&c\end{pmatrix}$，$r(A)=2$。$A$ 中有 2 阶子式非 0，故 $r(A)=2\Leftrightarrow|A|=24(c-2)=0$，得 $c=2$。由 $|\lambda E-A|=\begin{vmatrix}\lambda-5&-1&-2\\-1&\lambda-5&2\\-2&2&\lambda-2\end{vmatrix}=\lambda(\lambda-6)^2$ 可求出 $A$ 的特征值。$\lambda=6$ 的特征向量 $\alpha_1=(1,1,0)^{\mathrm{T}},\alpha_2=(2,0,1)^{\mathrm{T}}$；$\lambda=0$ 的特征向量 $\alpha_3=(-1,1,2)^{\mathrm{T}}$。对 $\alpha_1,\alpha_2$ 要 Schmidt 正交化，$\alpha_3$ 要单位化。令 $P=\begin{pmatrix}\frac{1}{\sqrt{2}}&\frac{1}{\sqrt{3}}&-\frac{1}{\sqrt{6}}\\\frac{1}{\sqrt{2}}&-\frac{1}{\sqrt{3}}&\frac{1}{\sqrt{6}}\\0&\frac{1}{\sqrt{3}}&\frac{2}{\sqrt{6}}\end{pmatrix}$，经 $\begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix}=P\begin{pmatrix}y_1\\y_2\\y_3\end{pmatrix}$，有 $x^{\mathrm{T}}Ax=y^{\mathrm{T}}By=6y_1^2+6y_2^2$。` },
    { n: 4, q: R`已知 $A$ 是 $n$ 阶正定矩阵，证明 $A$ 的伴随矩阵 $A^{*}$ 是正定矩阵。`, a: R`$A^{*}$ 是对称矩阵且其特征值均大于 0，故 $A^{*}$ 是正定矩阵。`, sol: R`由 $A$ 正定知 $A$ 是可逆的对称矩阵，又 $A^{*}=|A|A^{-1}$，故 $(A^{*})^{\mathrm{T}}=(|A|A^{-1})^{\mathrm{T}}=|A|(A^{-1})^{\mathrm{T}}=|A|(A^{\mathrm{T}})^{-1}=|A|A^{-1}=A^{*}$，即 $A^{*}$ 是对称矩阵。若 $\lambda$ 是矩阵 $A$ 的特征值，则 $A^{*}$ 的特征值是 $\frac{|A|}{\lambda}$，由 $A$ 正定有 $\lambda>0$，$|A|>0$，故 $A^{*}$ 的特征值大于 0。` },
    { n: 5, q: R`设 $A$ 为 $n$ 阶实对称矩阵，且 $|A|<0$，证明存在 $n$ 维列向量 $X_0$，使得 $X_0^{\mathrm{T}}AX_0<0$。`, a: R`存在 $x_0\neq0$，使 $x_0^{\mathrm{T}}Ax_0<0$。`, sol: R`由 $|A|<0$，知 $r(A)=n$，即二次型 $f=x^{\mathrm{T}}Ax$ 的秩为 $n$，且 $f$ 不正定（理由？）。经坐标变换 $x=Cy$ 化 $f$ 为规范形
$$f=y_1^2+y_2^2+\cdots+y_p^2-y_{p+1}^2-\cdots-y_n^2$$
$(\because f$ 不正定，$p<n$ 又 $r(A)=n$ $\therefore q=n-p>0)$
取 $y_0=(0,0,\cdots,0,1)^{\mathrm{T}}$，有 $f(y_0)=-1<0$。那么 $x_0=Cy_0\neq0$，而 $x_0^{\mathrm{T}}Ax_0=y_0^{\mathrm{T}}C^{\mathrm{T}}ACy_0=y_0^{\mathrm{T}}\Lambda y_0=-1<0$，即有 $x_0\neq0$ 而 $x_0^{\mathrm{T}}Ax_0<0$。` }
  ];
})();
