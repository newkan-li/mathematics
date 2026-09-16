window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["gs01_s1"] = {
    id: "gs01_s1",
    ch: "第一章 函数 极限 连续",
    title: "第二节 极限",
    book: "《高等数学辅导讲义》",
    pages: [13, 39],
    img: "assets/img/gaoshu",
    content: [
      { p: 13, md: R`## 第二节 极限
### 一、考试内容要点精讲
#### (一) 极限的概念
**1. 数列极限**
$\lim\limits_{n\to\infty}x_n=a$：$\forall\varepsilon>0$，$\exists N(\varepsilon)>0$，当 $n>N$ 时，有 $|x_n-a|<\varepsilon$。
【注】(1) $\lim\limits_{n\to\infty}x_n=a$ 的几何意义是：对于 $a$ 点的任何 $\varepsilon$ 邻域即开区间 $(a-\varepsilon,a+\varepsilon)$，一定存在 $N$，当 $n>N$ 即第 $N$ 项以后的点 $x_n$ 都落在开区间 $(a-\varepsilon,a+\varepsilon)$ 内，而只有有限个（最多只有 $N$ 个）在这区间之外。
(2) 数列 $\{x_n\}$ 的极限是否存在，如果存在极限值等于多少与数列的前有限项无关。
(3) $\lim\limits_{n\to\infty}x_n=a\Leftrightarrow\lim\limits_{k\to\infty}x_{2k-1}=\lim\limits_{k\to\infty}x_{2k}=a$。
**2. 函数极限**
1) 自变量趋于无穷大时函数的极限
$\lim\limits_{x\to\infty}f(x)=A$：$\forall\varepsilon>0$，$\exists X(\varepsilon)>0$，当 $|x|>X$ 时，有 $|f(x)-A|<\varepsilon$。
$\lim\limits_{x\to+\infty}f(x)=A$：$\forall\varepsilon>0$，$\exists X(\varepsilon)>0$，当 $x>X$ 时，有 $|f(x)-A|<\varepsilon$。
$\lim\limits_{x\to-\infty}f(x)=A$：$\forall\varepsilon>0$，$\exists X(\varepsilon)>0$，当 $x<-X$ 时，有 $|f(x)-A|<\varepsilon$。
【注】在函数极限中 $x\to\infty$ 是指 $|x|\to+\infty$，而在数列极限中，$n\to\infty$ 是指 $n\to+\infty$。
定理 $\quad\lim\limits_{x\to\infty}f(x)=A\Leftrightarrow\lim\limits_{x\to+\infty}f(x)=\lim\limits_{x\to-\infty}f(x)=A$。
2) 自变量趋于有限值时函数的极限
(1) 极限 $\lim\limits_{x\to x_0}f(x)=A$：$\forall\varepsilon>0$，$\exists\delta(\varepsilon)>0$，当 $0<|x-x_0|<\delta$ 时，有 $|f(x)-A|<\varepsilon$。
【注】函数 $f(x)$ 在点 $x_0$ 处的极限是否存在，如果存在极限值等于多少仅与 $f(x)$ 在 $x_0$ 点的去心邻域 $\mathring{U}(x_0,\delta)$ 内的函数值有关，而与 $f(x)$ 在 $x_0$ 是否有定义，如果有定义函数值等于多少无关。
(2) 左极限：$\lim\limits_{x\to x_0^-}f(x)=f(x_0^-)$；
(3) 右极限：$\lim\limits_{x\to x_0^+}f(x)=f(x_0^+)$；` },
      { p: 14, md: R`定理 $\quad\lim\limits_{x\to x_0}f(x)=A\Leftrightarrow\lim\limits_{x\to x_0^+}f(x)=\lim\limits_{x\to x_0^-}f(x)=A$。
【注】需要分左、右极限求极限的问题主要有三种：
(1) 分段函数在分界点处的极限，而在该分界点两侧函数表达式不同（这里也包括带有绝对值的函数，如 $\lim\limits_{x\to0}\frac{|x|}{x}$）；
(2) $e^{\infty}$ 型极限（如 $\lim\limits_{x\to0}e^{\frac{1}{x}}$，$\lim\limits_{x\to\infty}e^x$，$\lim\limits_{x\to\infty}e^{-x}$）；
$\lim\limits_{x\to0^-}e^{\frac{1}{x}}=0$，$\lim\limits_{x\to0^+}e^{\frac{1}{x}}=+\infty$，则 $\lim\limits_{x\to0}e^{\frac{1}{x}}$ 不存在；
$\lim\limits_{x\to-\infty}e^x=0$，$\lim\limits_{x\to+\infty}e^x=+\infty$，则 $\lim\limits_{x\to\infty}e^x$ 不存在。
【注】$e^{\infty}\neq\infty$，$e^{+\infty}=+\infty$，$e^{-\infty}=0$。
(3) $\arctan\infty$ 型极限（如 $\lim\limits_{x\to0}\arctan\frac{1}{x}$，$\lim\limits_{x\to\infty}\arctan x$）。
$\lim\limits_{x\to0^-}\arctan\frac{1}{x}=-\frac{\pi}{2}$，$\lim\limits_{x\to0^+}\arctan\frac{1}{x}=\frac{\pi}{2}$，则 $\lim\limits_{x\to0}\arctan\frac{1}{x}$ 不存在；
$\lim\limits_{x\to-\infty}\arctan x=-\frac{\pi}{2}$，$\lim\limits_{x\to+\infty}\arctan x=\frac{\pi}{2}$，则 $\lim\limits_{x\to\infty}\arctan x$ 不存在。
【注】$\arctan\infty\neq\frac{\pi}{2}$，$\arctan(+\infty)=\frac{\pi}{2}$，$\arctan(-\infty)=-\frac{\pi}{2}$。
#### (二) 极限的性质
1. 局部有界性：若极限 $\lim\limits_{x\to x_0}f(x)$ 存在，则 $f(x)$ 在点 $x_0$ 某去心邻域内有界；
2. 保号性：设 $\lim\limits_{x\to x_0}f(x)=A$，则
(1) 若 $A>0$（或 $A<0$）$\Rightarrow\exists\delta>0$，当 $x\in\mathring{U}(x_0,\delta)$ 时，$f(x)>0$（或 $f(x)<0$）。
(2) 若 $\exists\delta>0$，当 $x\in\mathring{U}(x_0,\delta)$ 时，$f(x)\geqslant0$（或 $f(x)\leqslant0$）$\Rightarrow A\geqslant0$（或 $A\leqslant0$）。
【注】由保号性不难得到保序性：设 $\lim\limits_{x\to x_0}f(x)=A$，$\lim\limits_{x\to x_0}g(x)=B$，则
(1) 若 $A>B\Rightarrow\exists\delta>0$，当 $x\in\mathring{U}(x_0,\delta)$ 时，$f(x)>g(x)$。
(2) 若 $\exists\delta>0$，当 $x\in\mathring{U}(x_0,\delta)$ 时，$f(x)\geqslant g(x)\Rightarrow A\geqslant B$。
3. 极限值与无穷小之间的关系：
$\lim f(x)=A\Leftrightarrow f(x)=A+\alpha(x)$，其中 $\lim\alpha(x)=0$。
【注】数列极限有对应的以上三条性质。
#### (三) 极限存在准则
1. 夹逼准则
若存在 $N$，当 $n>N$ 时，$x_n\leqslant y_n\leqslant z_n$，且 $\lim\limits_{n\to\infty}x_n=\lim\limits_{n\to\infty}z_n=a$，则 $\lim\limits_{n\to\infty}y_n=a$。
2. 单调有界准则
单调有界数列必有极限。即单调增、有上界的数列必有极限，单调减、有下界的数列必有极限。` },
      { p: 15, md: R`【注】函数极限有对应的以上两条准则。
#### (四) 无穷小
1. 无穷小的概念
若 $f(x)$ 当 $x\to x_0$（或 $x\to\infty$）时的极限为零，则称 $f(x)$ 为 $x\to x_0$（或 $x\to\infty$）时的无穷小。
2. 无穷小的比较 设 $\lim\alpha(x)=0,\lim\beta(x)=0$。
(1) 高阶：若 $\lim\frac{\beta(x)}{\alpha(x)}=0$，记为 $\beta(x)=o(\alpha(x))$；
(2) 同阶：若 $\lim\frac{\beta(x)}{\alpha(x)}=C\neq0$；
(3) 等价：若 $\lim\frac{\beta(x)}{\alpha(x)}=1$，记为 $\alpha(x)\sim\beta(x)$；
(4) 无穷小的阶：若 $\lim\frac{\beta(x)}{[\alpha(x)]^k}=C\neq0$，称 $\beta(x)$ 是 $\alpha(x)$ 的 $k$ 阶无穷小。
3. 无穷小的性质
(1) 有限个无穷小的和仍是无穷小；
(2) 有限个无穷小的积仍是无穷小；
(3) 无穷小量与有界量的积仍是无穷小。
【注】以上前两条中的“有限”二字不可少。
#### (五) 无穷大
1. 无穷大的概念
若 $\lim\limits_{x\to x_0}f(x)=\infty$（或 $\lim\limits_{x\to\infty}f(x)=\infty$），则称 $f(x)$ 为 $x\to x_0$（或 $x\to\infty$）时的无穷大。
2. 常用的一些无穷大的比较
(1) 当 $x\to+\infty$ 时，$\ln^\alpha x\ll x^\beta\ll a^x$（其中 $\alpha>0,\beta>0,a>1$）。
(2) 当 $n\to\infty$ 时，$\ln^\alpha n\ll n^\beta\ll a^n\ll n!\ll n^n$（其中 $\alpha>0,\beta>0,a>1$）。
3. 无穷大与无界变量的关系 无穷大 $\Rightarrow$ 无界变量
数列 $\{x_n\}$ 是无穷大量：$\forall M>0,\exists N$，当 $n>N$ 时，恒有 $|x_n|>M$。
数列 $\{x_n\}$ 是无界变量：$\forall M>0,\exists N$，使 $|x_N|>M$。
无穷大量一定是无界变量；但无界变量不一定是无穷大量。
例：数列 $x_n=\begin{cases}n,n\text{为奇数}\\0,n\text{为偶数}\end{cases}$ 是无界变量，但不是无穷大。
4. 无穷大与无穷小的关系
在自变量的同一变化过程中，若 $f(x)$ 是无穷大，则 $\frac{1}{f(x)}$ 是无穷小；若 $f(x)$ 是无穷小，且 $f(x)\neq0$，则 $\frac{1}{f(x)}$ 是无穷大。` },
      { p: 16, md: R`### 二、常考题型的方法与技巧
#### 题型一 极限的概念、性质及存在准则
【例1】设 $\lim\limits_{n\to\infty}a_n=a$，且 $a\neq0$，则当 $n$ 充分大时有
(A) $|a_n|>\frac{|a|}{2}$。 (B) $|a_n|<\frac{|a|}{2}$。 (C) $a_n>a-\frac{1}{n}$。 (D) $a_n<a+\frac{1}{n}$。
【解1】直接法
由 $\lim\limits_{n\to\infty}a_n=a$，且 $a\neq0$ 知 $\lim\limits_{n\to\infty}|a_n|=|a|>0$，则当 $n$ 充分大时有 $|a_n|>\frac{|a|}{2}$。
故应选 (A)。
【解2】排除法
若取 $a_n=2+\frac{2}{n}$，显然 $a=2$，则 (B) 和 (D) 都不正确；
若取 $a_n=2-\frac{2}{n}$，显然 $a=2$，则 (C) 不正确；
故应选 (A)。
【例2】设 $\{a_n\},\{b_n\},\{c_n\}$ 均为非负数列，且 $\lim a_n=0,\lim b_n=1,\lim c_n=\infty$，则必有
(A) $a_n<b_n$ 对任意 $n$ 成立。 (B) $b_n<c_n$ 对任意 $n$ 成立。
(C) 极限 $\lim a_nc_n$ 不存在。 (D) 极限 $\lim b_nc_n$ 不存在。
【解1】直接法
由 $\lim b_n=1,\lim c_n=\infty$ 知 $\lim b_nc_n=\infty$。故选 (D)。
【解2】排除法
由题设条件可知 $\lim a_n<\lim b_n<\lim c_n$，但这只能得到，存在 $N>0$，当 $n>N$ 时，有 $a_n<b_n<c_n$，而不能得到对任意的 $n$ 有 $a_n<b_n<c_n$，从而 (A)、(B) 均不正确。
事实上取 $a_n=\frac{100}{n},b_n=\frac{n+10}{n+1},c_n=n$，显然符合题设条件，但 (A)、(B) 选项的结论都不成立。
若取 $a_n=\frac{1}{n^2},c_n=n$，显然 $\lim a_n=0,\lim c_n=\infty$，而 $\lim a_nc_n=\lim\limits_{n\to\infty}\frac{n}{n^2}=0$，从而 (C) 不正确。
故应选 (D)。
【例3】设对任意的 $x$ 总有 $\varphi(x)\leqslant f(x)\leqslant g(x)$，且 $\lim\limits_{x\to\infty}[g(x)-\varphi(x)]=0$，则 $\lim\limits_{x\to\infty}f(x)$
(A) 存在且等于零。 (B) 存在但不一定为零。
(C) 一定不存在。 (D) 不一定存在。
【解】(1) 令 $\varphi(x)=1-\frac{1}{x^2},g(x)=1+\frac{1}{x^2},f(x)=1$，显然 $\varphi(x)\leqslant f(x)\leqslant g(x)$，且 $\lim\limits_{x\to\infty}[g(x)-\varphi(x)]=0$，此时 $\lim\limits_{x\to\infty}f(x)=1$，则 (A) 和 (C) 不正确。` },
      { p: 17, md: R`(2) 令 $\varphi(x)=x-\frac{1}{x^2},f(x)=x,g(x)=x+\frac{1}{x^2}$，则 $\varphi(x)\leqslant f(x)\leqslant g(x)$，且 $\lim\limits_{x\to\infty}[g(x)-\varphi(x)]=0$，但 $\lim\limits_{x\to\infty}f(x)=\infty$（不存在）。从而 (B) 不正确。
故应选 (D)。
【注】不难看出，本题就是在极限的夹逼准则的基础上改造出来的。以上是通过举反例用排除法。事实上，这里的反例可更简单。
在 (1) 中令 $\varphi(x)=f(x)=g(x)=1$；在 (2) 中令 $\varphi(x)=f(x)=g(x)=x$。
【例4】设数列 $\{x_n\}$ 与 $\{y_n\}$ 满足 $\lim\limits_{n\to\infty}x_ny_n=0$，则下列断言正确的是
(A) 若 $x_n$ 发散，则 $y_n$ 必发散。 (B) 若 $x_n$ 无界，则 $y_n$ 必有界。
(C) 若 $x_n$ 有界，则 $y_n$ 必为无穷小。 (D) 若 $\frac{1}{x_n}$ 为无穷小，则 $y_n$ 必为无穷小。
【解1】直接法
由于 $y_n=(x_ny_n)\cdot\frac{1}{x_n}$，则 $\lim\limits_{n\to\infty}y_n=\lim\limits_{n\to\infty}(x_ny_n)\lim\limits_{n\to\infty}\frac{1}{x_n}=0\cdot0=0$。故应选 (D)。
【解2】排除法
若取 $x_n=n,y_n=\frac{1}{n^2}$，显然 (A) 不正确。
若取 $x_n=\begin{cases}n,n\text{为偶数},\\0,n\text{为奇数},\end{cases}$ $y_n=\begin{cases}0,n\text{为偶数},\\n,n\text{为奇数},\end{cases}$ 则 $\lim\limits_{n\to\infty}x_ny_n=0$，且 $x_n$ 无界，但 $y_n$ 也无界，故 (B) 不正确。
若取 $x_n=\frac{1}{n^2},y_n=n$，显然 (C) 不正确。
故应选 (D)。
【例5】设 $a_n>0\ (n=1,2,\cdots),S_n=a_1+a_2+\cdots+a_n$，则数列 $\{S_n\}$ 有界是数列 $\{a_n\}$ 收敛的
(A) 充分必要条件。 (B) 充分非必要条件。
(C) 必要非充分条件。 (D) 既非充分也非必要条件。
【解】显然数列 $\{S_n\}$ 单调增，若 $\{S_n\}$ 有界，则 $\{S_n\}$ 收敛，又 $a_n=S_n-S_{n-1}$，故数列 $\{a_n\}$ 收敛。
但当数列 $\{a_n\}$ 收敛时，数列 $\{S_n\}$ 未必有界，如 $a_n=1$，此时 $S_n=n$ 无界。故应选 (B)。
【例6】(Ⅰ) 证明：对任意的正整数 $n$，都有 $\frac{1}{n+1}<\ln(1+\frac{1}{n})<\frac{1}{n}$ 成立。
(Ⅱ) 设 $a_n=1+\frac{1}{2}+\cdots+\frac{1}{n}-\ln n\ (n=1,2,\cdots)$，证明数列 $\{a_n\}$ 收敛。
【证】(Ⅰ) 根据拉格朗日中值定理，存在 $\xi\in(n,n+1)$，使得` },
      { p: 18, md: R`$\ln(1+\frac{1}{n})=\ln(n+1)-\ln n=\frac{1}{\xi}$，
所以 $\frac{1}{n+1}<\ln(1+\frac{1}{n})=\frac{1}{\xi}<\frac{1}{n}$。
(Ⅱ) 当 $n\geqslant1$ 时，由 (Ⅰ) 知
$a_{n+1}-a_n=\frac{1}{n+1}-\ln(1+\frac{1}{n})<0$，
且 $a_n=1+\frac{1}{2}+\cdots+\frac{1}{n}-\ln n>\ln(1+1)+\ln(1+\frac{1}{2})+\cdots+\ln(1+\frac{1}{n})-\ln n$
$=\ln2+\ln\frac{3}{2}+\cdots+\ln\frac{n+1}{n}-\ln n=\ln\left(2\cdot\frac{3}{2}\cdot\frac{4}{3}\cdot\cdots\cdot\frac{n+1}{n}\right)-\ln n$
$=\ln(1+n)-\ln n>0$，
所以数列 $\{a_n\}$ 单调下降且有下界，故 $\{a_n\}$ 收敛。
#### 题型二 求极限
**一、求极限的常用方法**
**方法1 利用有理运算法则求极限**
若 $\lim f(x)=A,\lim g(x)=B$，则
$\lim[f(x)\pm g(x)]=\lim f(x)\pm\lim g(x)=A\pm B$；
$\lim[f(x)\cdot g(x)]=\lim f(x)\cdot\lim g(x)=A\cdot B$；
$\lim\frac{f(x)}{g(x)}=\frac{\lim f(x)}{\lim g(x)}=\frac{A}{B}$ $(B\neq0)$。
推论：1) 若 $\lim f(x)=A\neq0$，则
$\lim f(x)g(x)=A\lim g(x)$；
$\lim\frac{g(x)}{f(x)}=\frac{1}{A}\lim g(x)$；
（即：极限非零的因子的极限可先求出来）
2) 若 $\lim\frac{f(x)}{g(x)}$ 存在，且 $\lim g(x)=0$，则 $\lim f(x)=0$；
3) 若 $\lim\frac{f(x)}{g(x)}=A\neq0$，且 $\lim f(x)=0$，则 $\lim g(x)=0$。
【注】(1) 若 $\lim f(x)$ 存在，$\lim g(x)$ 不存在，则 $\lim[f(x)\pm g(x)]$ 一定不存在；
(2) 若 $\lim f(x)$ 和 $\lim g(x)$ 都不存在，则 $\lim[f(x)\pm g(x)]$ 不一定存在。
**方法2 利用基本极限求极限**
常用的基本极限
$\lim\limits_{x\to0}\frac{\sin x}{x}=1$；$\lim\limits_{x\to0}(1+x)^{\frac{1}{x}}=\mathrm{e}$；$\lim\limits_{x\to\infty}(1+\frac{1}{x})^x=\mathrm{e}$；
$\lim\limits_{x\to0}\frac{a^x-1}{x}=\ln a$ $(a>0)$；$\lim\limits_{n\to\infty}\sqrt[n]{n}=1$；` },
      { p: 19, md: R`$\lim\limits_{x\to\infty}\frac{a_nx^n+a_{n-1}x^{n-1}+\cdots+a_1x+a_0}{b_mx^m+b_{m-1}x^{m-1}+\cdots+b_1x+b_0}=\begin{cases}\frac{a_n}{b_m},&n=m,\\0,&n<m,\\\infty,&n>m;\end{cases}$
$\lim\limits_{n\to\infty}x^n=\begin{cases}0,&|x|<1,\\\infty,&|x|>1,\\1,&x=1,\\\text{不存在},&x=-1;\end{cases}$ $\lim\limits_{x\to\infty}\mathrm{e}^{nx}=\begin{cases}0,&x<0,\\+\infty,&x>0,\\1,&x=0.\end{cases}$
**方法3 利用等价无穷小代换求极限**
1. 常用等价无穷小 当 $x\to0$ 时，
1) $x\sim\sin x\sim\tan x\sim\arcsin x\sim\arctan x\sim\ln(1+x)\sim\mathrm{e}^x-1$；
$(1+x)^\alpha-1\sim\alpha x$，$1-\cos x\sim\frac{1}{2}x^2$，$a^x-1\sim x\ln a$。
2) $x-\sin x\sim\frac{x^3}{6}$，$\arcsin x-x\sim\frac{x^3}{6}$，$x-\ln(1+x)\sim\frac{x^2}{2}$，
$\tan x-x\sim\frac{x^3}{3}$，$x-\arctan x\sim\frac{x^3}{3}$。
【注】(1) 这五个等价无穷小中前 3 个要记住，后两个可由前两个推得。
事实上由 $x-\sin x\sim\frac{x^3}{6}$ 得，$\arcsin(\sin x)-\sin x\sim\frac{x^3}{6}\sim\frac{\sin^3x}{6}$，从而有 $\arcsin x-x\sim\frac{x^3}{6}$；同理可由 $\tan x-x\sim\frac{x^3}{3}$ 推得 $x-\arctan x\sim\frac{x^3}{3}$。
(2) 由这几个等价无穷小及等价无穷小的性质（若 $\alpha\sim\beta$，则 $\alpha=\beta+o(\beta)$）可得到几个泰勒公式。
事实上由 $\tan x-x\sim\frac{x^3}{3}$ 得，$(\tan x-x)=\frac{x^3}{3}+o(x^3)$，即
$\tan x=x+\frac{x^3}{3}+o(x^3)$。
同理可得 $\arcsin x=x+\frac{x^3}{6}+o(x^3)$，$\arctan x=x-\frac{x^3}{3}+o(x^3)$。
3) 设 $f(x)$ 和 $g(x)$ 在 $x=0$ 的某邻域内连续，且 $\lim\limits_{x\to0}\frac{f(x)}{g(x)}=1$，则
$\int_0^xf(t)\mathrm{d}t\sim\int_0^xg(t)\mathrm{d}t$。
【注】特别地如果当 $x\to0$ 时，$f(x)\sim g(x)$，则 $\int_0^xf(t)\mathrm{d}t\sim\int_0^xg(t)\mathrm{d}t$。
例如当 $x\to0$ 时，$\ln(1+x^2)\sim x^2$，则 $\int_0^x\ln(1+t^2)\mathrm{d}t\sim\int_0^xt^2\mathrm{d}t=\frac{1}{3}x^3$。
2. 等价无穷小代换的原则
1) 乘、除关系可以换；
若 $\alpha\sim\alpha_1,\beta\sim\beta_1$，则 $\lim\frac{\alpha}{\beta}=\lim\frac{\alpha_1}{\beta}=\lim\frac{\alpha}{\beta_1}=\lim\frac{\alpha_1}{\beta_1}$。` },
      { p: 20, md: R`2) 加、减关系在一定条件下可以换；
(1) 若 $\alpha\sim\alpha_1,\beta\sim\beta_1$，且 $\lim\frac{\alpha_1}{\beta_1}=A\neq1$。则 $\alpha-\beta\sim\alpha_1-\beta_1$。
(2) 若 $\alpha\sim\alpha_1,\beta\sim\beta_1$，且 $\lim\frac{\alpha_1}{\beta_1}=A\neq-1$。则 $\alpha+\beta\sim\alpha_1+\beta_1$。
【例】求极限 $\lim\limits_{x\to0}\frac{\tan x-\sin x}{x^3}$。
【解1】$\lim\limits_{x\to0}\frac{\tan x-\sin x}{x^3}=\lim\limits_{x\to0}\frac{\tan x(1-\cos x)}{x^3}=\lim\limits_{x\to0}\frac{x\cdot\frac{1}{2}x^2}{x^3}$（等价代换）$=\frac{1}{2}$。
【解2】$\lim\limits_{x\to0}\frac{\tan x-\sin x}{x^3}=\lim\limits_{x\to0}\frac{(\tan x-x)-(\sin x-x)}{x^3}=\lim\limits_{x\to0}\frac{(\frac{1}{3}x^3)-(-\frac{1}{6}x^3)}{x^3}$（等价代换）$=\frac{1}{2}$。
**方法4 利用洛必达法则求极限**
若 1) $\lim\limits_{x\to x_0}f(x)=\lim\limits_{x\to x_0}g(x)=0(\infty)$；
2) $f(x)$ 和 $g(x)$ 在 $x_0$ 的某去心邻域内可导，且 $g'(x)\neq0$；
3) $\lim\limits_{x\to x_0}\frac{f'(x)}{g'(x)}$ 存在（或 $\infty$）；
则 $\lim\limits_{x\to x_0}\frac{f(x)}{g(x)}=\lim\limits_{x\to x_0}\frac{f'(x)}{g'(x)}$。
【注】洛必达法则可用来求七种类型不定式的极限，即 $\frac{0}{0},\frac{\infty}{\infty},\infty-\infty,0\cdot\infty,1^\infty,\infty^0,0^0$，其中前两种 $\frac{0}{0},\frac{\infty}{\infty}$ 直接用洛必达法则，后五种均可化为前两种。
$\frac{0}{0},\frac{\infty}{\infty}\Longleftarrow\begin{cases}0\cdot\infty\Longleftarrow\begin{cases}1^\infty\\\infty^0\\0^0\end{cases}\\\infty-\infty\end{cases}$
【例1】求极限 $\lim\limits_{x\to1}\frac{\ln\cos(x-1)}{1-\sin\frac{\pi}{2}x}$。
【解】原式 $=\lim\limits_{x\to1}\frac{-\tan(x-1)}{-\frac{\pi}{2}\cos\frac{\pi}{2}x}$（洛必达法则）
$=\frac{2}{\pi}\lim\limits_{x\to1}\frac{x-1}{\cos\frac{\pi}{2}x}$（等价无穷小代换）` },
      { p: 21, md: R`$=\frac{2}{\pi}\lim\limits_{x\to1}\frac{1}{-\frac{\pi}{2}\sin\frac{\pi}{2}x}=-\frac{4}{\pi^2}$。
【例2】求极限 $\lim\limits_{x\to\infty}(x+\sqrt{1+x^2})^{\frac{1}{x}}$。
【解】$\lim\limits_{x\to\infty}(x+\sqrt{1+x^2})^{\frac{1}{x}}=\lim\limits_{x\to\infty}\mathrm{e}^{\frac{\ln(x+\sqrt{1+x^2})}{x}}$，
$\lim\limits_{x\to\infty}\frac{\ln(x+\sqrt{1+x^2})}{x}=\lim\limits_{x\to\infty}\frac{\frac{1}{\sqrt{1+x^2}}}{1}$（洛必达法则）$=0$，
则 $\lim\limits_{x\to\infty}(x+\sqrt{1+x^2})^{\frac{1}{x}}=\mathrm{e}^0=1$。
**方法5 利用泰勒公式求极限**
定理（带 Peano 余项的泰勒公式）设 $f(x)$ 在 $x=x_0$ 处 $n$ 阶可导，则
$f(x)=f(x_0)+f'(x_0)(x-x_0)+\frac{f''(x_0)}{2!}(x-x_0)^2+\cdots+\frac{f^{(n)}(x_0)}{n!}(x-x_0)^n+o((x-x_0)^n)$。
特别是当 $x_0=0$ 时，$f(x)=f(0)+f'(0)x+\frac{f''(0)}{2!}x^2+\cdots+\frac{f^{(n)}(0)}{n!}x^n+o(x^n)$。
几个常用的泰勒公式
(1) $\mathrm{e}^x=1+x+\frac{x^2}{2!}+\cdots+\frac{x^n}{n!}+o(x^n)$。
(2) $\sin x=x-\frac{x^3}{3!}+\cdots+(-1)^{n-1}\frac{x^{2n-1}}{(2n-1)!}+o(x^{2n-1})$。
(3) $\cos x=1-\frac{x^2}{2!}+\cdots+(-1)^n\frac{x^{2n}}{(2n)!}+o(x^{2n})$。
(4) $\ln(1+x)=x-\frac{x^2}{2}+\cdots+(-1)^{n-1}\frac{x^n}{n}+o(x^n)$。
【例】求极限 $\lim\limits_{x\to0}\frac{x-\ln(1+x)-\frac{1}{2}x\sin x}{x^3}$。
【解】$\lim\limits_{x\to0}\frac{x-\ln(1+x)-\frac{1}{2}x\sin x}{x^3}=\lim\limits_{x\to0}\frac{x-\left[x-\frac{x^2}{2}+\frac{x^3}{3}+o(x^3)\right]-\frac{1}{2}x\left[x-\frac{x^3}{3!}+o(x^3)\right]}{x^3}$（泰勒公式）$=\lim\limits_{x\to0}\frac{-\frac{x^3}{3}+o(x^3)}{x^3}=-\frac{1}{3}$。
**方法6 利用夹逼准则求极限**
【例】求极限 $\lim\limits_{n\to\infty}\left[\frac{1}{n^2+1}+\frac{2}{n^2+2}+\cdots+\frac{n}{n^2+n}\right]$。
【解】$\frac{1+2+\cdots+n}{n^2+n}\leqslant\left[\frac{1}{n^2+1}+\frac{2}{n^2+2}+\cdots+\frac{n}{n^2+n}\right]\leqslant\frac{1+2+\cdots+n}{n^2+1}$，` },
      { p: 22, md: R`$\lim\limits_{n\to\infty}\frac{1+2+\cdots+n}{n^2+n}=\lim\limits_{n\to\infty}\frac{\frac{1}{2}n(n+1)}{n^2+n}=\frac{1}{2}$，
$\lim\limits_{n\to\infty}\frac{1+2+\cdots+n}{n^2+1}=\lim\limits_{n\to\infty}\frac{\frac{1}{2}n(n+1)}{n^2+1}=\frac{1}{2}$，
则 $\lim\limits_{n\to\infty}\left[\frac{1}{n^2+1}+\frac{2}{n^2+2}+\cdots+\frac{n}{n^2+n}\right]=\frac{1}{2}.$
【注】$1+2+\cdots+n=\frac{1}{2}n(n+1).$
**方法7 利用定积分的定义求极限**
【例】求极限 $\lim\limits_{n\to\infty}\left[\frac{1}{n+1}+\frac{1}{n+2}+\cdots+\frac{1}{n+n}\right].$
【解】$\lim\limits_{n\to\infty}\left[\frac{1}{n+1}+\frac{1}{n+2}+\cdots+\frac{1}{n+n}\right]=\lim\limits_{n\to\infty}\frac{1}{n}\left[\frac{1}{1+\frac{1}{n}}+\frac{1}{1+\frac{2}{n}}+\cdots+\frac{1}{1+\frac{n}{n}}\right]$
$=\int_0^1\frac{1}{1+x}\mathrm{d}x=\ln2.$
【注】由定积分定义可知，若将区间 $[0,1]$ $n$ 等分，第 $k$ 个子区间上的 $\xi_k$ 取该子区间右端点，此时 $\Delta x_k=\frac{1}{n},\xi_k=\frac{k}{n}$，则
$\int_0^1f(x)\mathrm{d}x=\lim\limits_{\lambda\to0}\sum_{k=1}^{n}f(\xi_k)\Delta x_k=\lim\limits_{n\to\infty}\sum_{k=1}^{n}f\left(\frac{k}{n}\right)\cdot\frac{1}{n}=\lim\limits_{n\to\infty}\frac{1}{n}\sum_{k=1}^{n}f\left(\frac{k}{n}\right).$
上式右端是一种常见的积分和式的极限。所以，用定积分定义求极限一般方法是：先提“可爱因子”$\frac{1}{n}$，然后再确定被积函数和积分区间。
**方法8 利用单调有界准则求极限**
【例】设 $x_1>0,x_{n+1}=\frac{1}{2}\left(x_n+\frac{1}{x_n}\right),n=1,2,\cdots$。求极限 $\lim\limits_{n\to\infty}x_n$。
【解】由题设知 $x_n>0$，且
$x_{n+1}=\frac{1}{2}\left(x_n+\frac{1}{x_n}\right)=\frac{1}{2}\left[(\sqrt{x_n})^2+\left(\frac{1}{\sqrt{x_n}}\right)^2\right]\geqslant\frac{1}{2}\cdot2\sqrt{x_n}\cdot\frac{1}{\sqrt{x_n}}=1$，
$\frac{x_{n+1}}{x_n}=\frac{1}{2}\left[1+\frac{1}{x_n^2}\right]\leqslant\frac{1}{2}\left[1+\frac{1}{1}\right]=1$，
则数列 $\{x_n\}$ 单调减且有下界，故极限 $\lim\limits_{n\to\infty}x_n$ 存在。设 $\lim\limits_{n\to\infty}x_n=a$，由极限保号性知 $a\geqslant1$。
对等式 $x_{n+1}=\frac{1}{2}\left(x_n+\frac{1}{x_n}\right)$ 两端取极限，得 $a=\frac{1}{2}\left(a+\frac{1}{a}\right)$，又 $a\geqslant1$，由此解得 $a=1$。
**二、求极限常见题型**
#### （一）函数的极限
求函数的极限，常见的是 7 种不定式。即 $\frac{0}{0},\frac{\infty}{\infty},\infty-\infty,0\cdot\infty,1^\infty,\infty^0,0^0$。这里考查的重` },
      { p: 23, md: R`点是“$\frac{0}{0}$”型和“$1^\infty$”型。
**1. “$\frac{0}{0}$”型极限**
常用的方法有三种
1) 洛必达法则；
2) 等价无穷小代换；
3) 泰勒公式。
以上三种方法使用的同时要注意将原式化简，常用的方法有极限非零的因子极限先求出来、有理化及变量代换等。
【例1】求极限 $\lim\limits_{x\to0}\frac{\sqrt{1+\tan x}-\sqrt{1+\sin x}}{x\ln(1+x)-x^2}$。
【解1】原式 $=\lim\limits_{x\to0}\left\{\frac{\tan x-\sin x}{x[\ln(1+x)-x]}\cdot\frac{1}{\sqrt{1+\tan x}+\sqrt{1+\sin x}}\right\}$（有理化）
$=\frac{1}{2}\lim\limits_{x\to0}\frac{\tan x[1-\cos x]}{x[\ln(1+x)-x]}$（极限非零的因子的极限先求出来）
$=\frac{1}{2}\lim\limits_{x\to0}\frac{x\cdot\frac{1}{2}x^2}{x\left(-\frac{1}{2}x^2\right)}$（等价代换）
$=-\frac{1}{2}$。
【解2】由拉格朗日中值定理得
原式 $=\lim\limits_{x\to0}\frac{\frac{1}{2\sqrt{1+\xi}}(\tan x-\sin x)}{x[\ln(1+x)-x]}$（$\xi$ 在 $\tan x$ 与 $\sin x$ 之间）
$=\frac{1}{2}\lim\limits_{x\to0}\frac{\tan x-\sin x}{x[\ln(1+x)-x]}$。以下同解 1。
【例2】求极限 $\lim\limits_{x\to0}\frac{e^{x^2}-e^{2-2\cos x}}{x^4}$。
【解1】$\lim\limits_{x\to0}\frac{e^{x^2}-e^{2-2\cos x}}{x^4}=\lim\limits_{x\to0}\frac{e^{2-2\cos x}[e^{x^2-2+2\cos x}-1]}{x^4}$
$=\lim\limits_{x\to0}\frac{x^2-2+2\cos x}{x^4}$（极限非零的因子极限先求出来，等价代换）
$=\lim\limits_{x\to0}\frac{x^2-2+2\left[1-\frac{x^2}{2!}+\frac{x^4}{4!}+o(x^4)\right]}{x^4}$（泰勒公式）
$=\frac{1}{12}$。
【解2】由拉格朗日中值定理得
$\lim\limits_{x\to0}\frac{e^{x^2}-e^{2-2\cos x}}{x^4}=\lim\limits_{x\to0}\frac{e^{\xi}[x^2-2+2\cos x]}{x^4}$（$\xi$ 在 $x^2$ 与 $2-\cos x$ 之间）` },
      { p: 24, md: R`$=\lim\limits_{x\to0}\frac{x^2-2+2\cos x}{x^4}=\lim\limits_{x\to0}\frac{2x-2\sin x}{4x^3}$（洛必达法则）
$=\frac{1}{2}\lim\limits_{x\to0}\frac{\frac{1}{6}x^3}{x^3}$（$x-\sin x\sim\frac{1}{6}x^3$）$=\frac{1}{12}$。
【例3】求极限 $\lim\limits_{x\to0}\frac{\arcsin x-\sin x}{\arctan x-\tan x}$。
【解1】原式 $=\lim\limits_{x\to0}\frac{\frac{1}{\sqrt{1-x^2}}-\cos x}{\frac{1}{1+x^2}-\frac{1}{\cos^2x}}=\lim\limits_{x\to0}\frac{1-\sqrt{1-x^2}\cos x}{\cos^2x-1-x^2}\cdot\lim\limits_{x\to0}\frac{(1+x^2)\cos^2x}{\sqrt{1-x^2}}$
$=\lim\limits_{x\to0}\frac{1-\sqrt{1-x^2}\cos x}{-\sin^2x-x^2}=-\lim\limits_{x\to0}\frac{1-(1-x^2)\cos^2x}{\sin^2x+x^2}\cdot\lim\limits_{x\to0}\frac{1}{1+\sqrt{1-x^2}\cos x}$
$=-\frac{1}{2}\lim\limits_{x\to0}\frac{\sin^2x+x^2\cos^2x}{\sin^2x+x^2}=-\frac{1}{2}\lim\limits_{x\to0}\frac{\frac{\sin^2x}{x^2}+\cos^2x}{\frac{\sin^2x}{x^2}+1}=-\frac{1}{2}$。
【解2】原式 $=\lim\limits_{x\to0}\frac{(\arcsin x-x)-(\sin x-x)}{(\arctan x-x)-(\tan x-x)}=\lim\limits_{x\to0}\frac{\left(\frac{1}{6}x^3\right)-\left(-\frac{1}{6}x^3\right)}{\left(-\frac{1}{3}x^3\right)-\left(\frac{1}{3}x^3\right)}$（等价代换）$=\lim\limits_{x\to0}\frac{\frac{1}{3}x^3}{-\frac{2}{3}x^3}=-\frac{1}{2}$。
【例4】求极限 $\lim\limits_{x\to0}\frac{x\int_0^x\ln(1+t^2)\mathrm{d}t}{x^2-\sin^2x}$。
【解】原式 $=\lim\limits_{x\to0}\frac{x\cdot\frac{1}{3}x^3}{(x+\sin x)(x-\sin x)}$ $\left(\int_0^x\ln(1+t^2)\mathrm{d}t\sim\int_0^xt^2\mathrm{d}t=\frac{1}{3}x^3\right)$
$=\lim\limits_{x\to0}\frac{x\cdot\frac{1}{3}x^3}{2x\cdot\frac{1}{6}x^3}$ $\left(x+\sin x\sim2x;x-\sin x\sim\frac{1}{6}x^3\right)$
$=1$。
【例5】求极限 $\lim\limits_{x\to0}\frac{xe^x-\sin x}{(1+x)^x-1}$。
【分析】本题是一个 $\frac{0}{0}$ 型极限，由于分母中出现幂指函数，直接用洛必达法则不方便，则先改写分母中的幂指函数为指数函数，然后用等价代换。
$(1+x)^x-1=e^{x\ln(1+x)}-1\sim x\ln(1+x)\sim x^2$。` },
      { p: 25, md: R`【解1】$\lim\limits_{x\to0}\frac{xe^x-\sin x}{(1+x)^x-1}=\lim\limits_{x\to0}\frac{xe^x-\sin x}{x^2}=\lim\limits_{x\to0}\frac{e^x+xe^x-\cos x}{2x}=\lim\limits_{x\to0}\frac{2e^x+xe^x+\sin x}{2}=1$。
【解2】$\lim\limits_{x\to0}\frac{xe^x-\sin x}{(1+x)^x-1}=\lim\limits_{x\to0}\frac{xe^x-\sin x}{x^2}=\lim\limits_{x\to0}\frac{xe^x-x+x-\sin x}{x^2}=\lim\limits_{x\to0}\frac{x(e^x-1)}{x^2}+\lim\limits_{x\to0}\frac{x-\sin x}{x^2}=1$。
【注】当 $x\to0$ 时，$(1+x)^\alpha-1\sim\alpha x$，这个结论推广可得，若 $\alpha(x)\to0,\alpha(x)\beta(x)\to0$，则 $(1+\alpha(x))^{\beta(x)}-1\sim\alpha(x)\beta(x)$，由此可得 $(1+x)^x-1\sim x^2$。
【例6】$\lim\limits_{x\to0}\frac{\cos x-e^{-\frac{x^2}{2}}}{x^2[x+\ln(1-x)]}$。
【解】$\ln(1-x)=-x-\frac{x^2}{2}+o(x^2)$，$\cos x=1-\frac{x^2}{2!}+\frac{x^4}{4!}+o(x^4)$，$e^{-\frac{x^2}{2}}=1-\frac{x^2}{2}+\frac{x^4}{2^22!}+o(x^4)$。
原式 $=\lim\limits_{x\to0}\frac{-\frac{1}{12}x^4+o(x^4)}{x^2\left[-\frac{x^2}{2}+o(x^2)\right]}=\frac{1}{6}$。
【注】也可由 $x-\ln(1+x)\sim\frac{x^2}{2}$ 得，$x+\ln(1-x)=-[-x-\ln(1-x)]\sim-\frac{x^2}{2}$。
**2. “$\frac{\infty}{\infty}$”型极限**
常用的方法有两种
1) 洛必达法则；
2) 分子分母同除以分子和分母各项中最高阶的无穷大。
【例1】求极限 $\lim\limits_{x\to+\infty}\frac{\int_0^x(1+t^2)e^{t^2}\mathrm{d}t}{xe^{x^2}+x^2}$。
【解】原式 $=\lim\limits_{x\to+\infty}\frac{e^{x^2}+x^2e^{x^2}}{e^{x^2}+2x^2e^{x^2}+2x}$（洛必达法则）
$=\lim\limits_{x\to+\infty}\frac{\frac{1}{x^2}+1}{\frac{1}{x^2}+2+\frac{2}{xe^{x^2}}}$（分子分母同除以 $x^2e^{x^2}$）
$=\frac{1}{2}$。
【例2】求极限 $\lim\limits_{x\to+\infty}\frac{2^x+x^{100}}{2e^x+\ln^{10}x}$。` },
      { p: 26, md: R`【解】原式 $=\lim\limits_{x\to+\infty}\frac{\left(\frac{2}{e}\right)^x+\frac{x^{100}}{e^x}}{2+\frac{\ln^{10}x}{e^x}}$（分子分母同除以 $e^x$）$=0$。
【例3】求极限 $\lim\limits_{x\to-\infty}\frac{\sqrt{4x^2+x-1}+x+1}{\sqrt{x^2+\sin x}}$。
【解1】原式 $=\lim\limits_{x\to-\infty}\frac{\sqrt{4+\frac{1}{x}-\frac{1}{x^2}}-1-\frac{1}{x}}{\sqrt{1+\frac{\sin x}{x^2}}}$（分子分母同除以 $-x$）$=1$。
【解2】原式 $=\lim\limits_{x\to-\infty}\frac{\sqrt{4x^2+x-1}}{\sqrt{x^2+\sin x}}+\lim\limits_{x\to-\infty}\frac{x}{\sqrt{x^2+\sin x}}+\lim\limits_{x\to-\infty}\frac{1}{\sqrt{x^2+\sin x}}$（拆项）$=2-1+0=1$。
**3. “$\infty-\infty$”型极限**
常用的方法有
1) 通分化为 $\frac{0}{0}$（适用于分式差）；
2) 根式有理化（适用于根式差）；
3) 变量代换或泰勒公式。
【例1】求极限 $\lim\limits_{x\to0}\left(\frac{1}{x^2}-\cot^2x\right)$。
【解】原式 $=\lim\limits_{x\to0}\left(\frac{1}{x^2}-\frac{1}{\tan^2x}\right)=\lim\limits_{x\to0}\frac{\tan^2x-x^2}{x^2\tan^2x}$（通分化为 $\frac{0}{0}$）
$=\lim\limits_{x\to0}\frac{\tan x+x}{x}\cdot\frac{\tan x-x}{x^3}=2\lim\limits_{x\to0}\frac{\frac{1}{3}x^3}{x^3}=\frac{2}{3}$。
【例2】求极限 $\lim\limits_{x\to+\infty}\left(\sqrt{x+\sqrt{x+\sqrt{x}}}-\sqrt{x}\right)$
【解1】原式 $=\lim\limits_{x\to+\infty}\frac{\sqrt{x+\sqrt{x}}}{\sqrt{x+\sqrt{x+\sqrt{x}}}+\sqrt{x}}$（有理化）
$=\lim\limits_{x\to+\infty}\frac{\sqrt{1+\frac{1}{\sqrt{x}}}}{\sqrt{1+\sqrt{\frac{1}{x}+\frac{1}{x\sqrt{x}}}}+1}$（分子分母同除 $\sqrt{x}$）$=\frac{1}{2}$。
【解2】原式 $=\lim\limits_{x\to+\infty}\sqrt{x}\left[\sqrt{1+\sqrt{\frac{1}{x}+\frac{1}{x\sqrt{x}}}}-1\right]$（提出 $\sqrt{x}$）` },
      { p: 27, md: R`$=\lim\limits_{x\to+\infty}\sqrt{x}\cdot\frac{1}{2}\sqrt{\frac{1}{x}+\frac{1}{x\sqrt{x}}}$（等价代换）$=\frac{1}{2}$。
【例3】求极限 $\lim\limits_{x\to\infty}\left[x-x^2\ln\left(1+\frac{1}{x}\right)\right]$。
【解1】令 $x=\frac{1}{t}$，则原式 $=\lim\limits_{t\to0}\left[\frac{1}{t}-\frac{1}{t^2}\ln(1+t)\right]=\lim\limits_{t\to0}\frac{t-\ln(1+t)}{t^2}=\lim\limits_{t\to0}\frac{\frac{1}{2}t^2}{t^2}=\frac{1}{2}$。
【解2】由 $\ln(1+x)$ 的泰勒公式得 $\ln\left(1+\frac{1}{x}\right)=\frac{1}{x}-\frac{1}{2x^2}+o\left(\frac{1}{x^2}\right)$，则原式 $=\lim\limits_{x\to\infty}\left[x-x^2\left(\frac{1}{x}-\frac{1}{2x^2}+o\left(\frac{1}{x^2}\right)\right)\right]=\lim\limits_{x\to\infty}\left[\frac{1}{2}-x^2\cdot o\left(\frac{1}{x^2}\right)\right]=\frac{1}{2}$。
【解3】原式 $=\lim\limits_{x\to\infty}x^2\left[\frac{1}{x}-\ln\left(1+\frac{1}{x}\right)\right]=\lim\limits_{x\to\infty}x^2\left(\frac{1}{2}\cdot\frac{1}{x^2}\right)$（等价无穷小代换）$=\frac{1}{2}$。
【例4】$\lim\limits_{x\to+\infty}\left(\frac{x^{1+x}}{(1+x)^x}-\frac{x}{e}\right)$。
【解】原式 $=\lim\limits_{x\to+\infty}\left(\frac{x}{\left(1+\frac{1}{x}\right)^x}-\frac{x}{e}\right)=\lim\limits_{x\to+\infty}\frac{x\left[e-\left(1+\frac{1}{x}\right)^x\right]}{e\left(1+\frac{1}{x}\right)^x}$
$=\frac{1}{e^2}\lim\limits_{x\to+\infty}\frac{e-\left(1+\frac{1}{x}\right)^x}{\frac{1}{x}}$（令 $\frac{1}{x}=t$）
$=\frac{-1}{e^2}\lim\limits_{t\to0^+}\frac{(1+t)^{\frac{1}{t}}-e}{t}=\frac{-1}{e^2}\lim\limits_{t\to0^+}\frac{e^{\frac{\ln(1+t)}{t}}-e}{t}=-\frac{1}{e}\lim\limits_{t\to0^+}\frac{e^{\frac{\ln(1+t)-t}{t}}-1}{t}$
$=-\frac{1}{e}\lim\limits_{t\to0^+}\frac{\ln(1+t)-t}{t^2}$ $\left(e^{\frac{\ln(1+t)-t}{t}}-1\sim\frac{\ln(1+t)-t}{t}\right)$
$=-\frac{1}{e}\lim\limits_{t\to0^+}\frac{-\frac{1}{2}t^2}{t^2}=\frac{1}{2e}$。
**4. “$0\cdot\infty$”型极限**
常用的方法是化为“$\frac{0}{0}$”型或“$\frac{\infty}{\infty}$”型
【例1】求极限 $\lim\limits_{x\to1}\ln x\ln|1-x|$
【解】$\ln x=\ln[1+(x-1)]\sim x-1$，
$\lim\limits_{x\to1}\ln x\ln|1-x|=\lim\limits_{x\to1}(x-1)\ln|1-x|=\lim\limits_{x\to1}\frac{\ln|1-x|}{\frac{1}{x-1}}=\lim\limits_{x\to1}\frac{-\frac{1}{1-x}}{-\frac{1}{(x-1)^2}}=0$。` },
      { p: 28, md: R`**5. “$1^\infty$”型极限**
常用的方法有三种
1) 凑基本极限 $\lim[1+\varphi(x)]^{\frac{1}{\varphi(x)}}=e$，其中 $\lim\varphi(x)=0(\varphi(x)\neq0)$；
2) 改写成指数 $\lim[f(x)]^{g(x)}=\lim e^{g(x)\ln f(x)}$，用洛必达法则；
3) 利用结论：若 $\lim\alpha(x)=0,\lim\beta(x)=\infty$，且 $\lim\alpha(x)\beta(x)=A$，则 $\lim[1+\alpha(x)]^{\beta(x)}=e^A$。
【例1】求极限 $\lim\limits_{x\to0^+}(\cos\sqrt{x})^{\frac{1}{x}}$。
【解1】$\lim\limits_{x\to0^+}(\cos\sqrt{x})^{\frac{1}{x}}=\lim\limits_{x\to0^+}\left\{[1+(\cos\sqrt{x}-1)]^{\frac{1}{\cos\sqrt{x}-1}}\right\}^{\frac{\cos\sqrt{x}-1}{x}}$，
$\lim\limits_{x\to0^+}\frac{\cos\sqrt{x}-1}{x}=\lim\limits_{x\to0^+}\frac{-\frac{1}{2}(\sqrt{x})^2}{x}=-\frac{1}{2}$，
则 $\lim\limits_{x\to0^+}(\cos\sqrt{x})^{\frac{1}{x}}=e^{-\frac{1}{2}}$。
【解2】$\lim\limits_{x\to0^+}(\cos\sqrt{x})^{\frac{1}{x}}=\lim\limits_{x\to0^+}e^{\frac{\ln\cos\sqrt{x}}{x}}$，
$\lim\limits_{x\to0^+}\frac{\ln\cos\sqrt{x}}{x}=\lim\limits_{x\to0^+}\frac{\frac{-\sin\sqrt{x}}{\cos\sqrt{x}}\cdot\frac{1}{2\sqrt{x}}}{1}=-\frac{1}{2}\lim\limits_{x\to0^+}\frac{\tan\sqrt{x}}{\sqrt{x}}=-\frac{1}{2}$，
则 $\lim\limits_{x\to0^+}(\cos\sqrt{x})^{\frac{1}{x}}=e^{-\frac{1}{2}}$。
【解3】由于 $(\cos\sqrt{x})^{\frac{1}{x}}=[1+(\cos\sqrt{x}-1)]^{\frac{1}{x}}$，且
$\lim\limits_{x\to0^+}\frac{\cos\sqrt{x}-1}{x}=\lim\limits_{x\to0^+}\frac{-\frac{1}{2}(\sqrt{x})^2}{x}=-\frac{1}{2}$，
则 $\lim\limits_{x\to0^+}(\cos\sqrt{x})^{\frac{1}{x}}=e^{-\frac{1}{2}}$。
【注】以上三种方法中解法 3 简单。
【例2】求极限 $\lim\limits_{x\to0}\left(\frac{\arcsin x}{x}\right)^{\frac{1}{1-\cos x}}$。
【解】由于 $\left(\frac{\arcsin x}{x}\right)^{\frac{1}{1-\cos x}}=\left(1+\frac{\arcsin x-x}{x}\right)^{\frac{1}{1-\cos x}}$，且
$\lim\limits_{x\to0}\frac{\arcsin x-x}{x(1-\cos x)}=\lim\limits_{x\to0}\frac{\frac{1}{6}x^3}{\frac{1}{2}x^3}$ $\left(\arcsin x-x\sim\frac{1}{6}x^3,1-\cos x\sim\frac{1}{2}x^2\right)$
$=\frac{1}{3}$，则原式 $=e^{\frac{1}{3}}$。` },
      { p: 29, md: R`【例3】极限 $\lim\limits_{x\to\infty}\left(\frac{x^2}{(x-a)(x+b)}\right)^x=$
(A) 1。 (B) e。 (C) $e^{a-b}$。 (D) $e^{b-a}$。
【解】$\lim\limits_{x\to\infty}\left(\frac{x^2}{(x-a)(x+b)}\right)^x=\lim\limits_{x\to\infty}\left(\frac{x}{x-a}\right)^x\left(\frac{x}{x+b}\right)^x=\lim\limits_{x\to\infty}\left(1-\frac{a}{x}\right)^{-x}\left(1+\frac{b}{x}\right)^{-x}=e^a\cdot e^{-b}=e^{a-b}$。
故应选 (C)。
【例4】求极限 $\lim\limits_{x\to0}(\cos2x+2x\sin x)^{\frac{1}{x^4}}$。
【解】由于 $(\cos2x+2x\sin x)^{\frac{1}{x^4}}=[1+(\cos2x-1+2x\sin x)]^{\frac{1}{x^4}}$，
而 $\lim\limits_{x\to0}\frac{\cos2x-1+2x\sin x}{x^4}=\lim\limits_{x\to0}\frac{-2\sin^2x+2x\sin x}{x^4}=\lim\limits_{x\to0}\frac{2\sin x(x-\sin x)}{x^4}=\lim\limits_{x\to0}\frac{2x\left(\frac{1}{6}x^3\right)}{x^4}$（等价代换）$=\frac{1}{3}$，
则原式 $=e^{\frac{1}{3}}$。
**6. “$\infty^0$”和“$0^0$”型极限**
这两种极限求极限的函数一定是幂指函数，即 $\lim[f(x)]^{g(x)}$，求解的方法是将其改写成指数形式 $\lim[f(x)]^{g(x)}=\lim e^{g(x)\ln f(x)}$，从而就化为“$0\cdot\infty$”型极限。
【例1】求极限 $\lim\limits_{x\to0^+}x^{(x^x-1)}$。
【解】由于 $\lim\limits_{x\to0^+}x^x=\lim\limits_{x\to0^+}e^{x\ln x}$，
$\lim\limits_{x\to0^+}x\ln x=\lim\limits_{x\to0^+}\frac{\ln x}{\frac{1}{x}}=\lim\limits_{x\to0^+}\frac{\frac{1}{x}}{-\frac{1}{x^2}}=0$，
则 $\lim\limits_{x\to0^+}x^x=1$，所求极限为“$0^0$”。
$\lim\limits_{x\to0^+}x^{(x^x-1)}=\lim\limits_{x\to0^+}e^{(x^x-1)\ln x}$，
$\lim\limits_{x\to0^+}(x^x-1)\ln x=\lim\limits_{x\to0^+}(e^{x\ln x}-1)\ln x=\lim\limits_{x\to0^+}x\ln^2x$ $[(e^{x\ln x}-1)\sim x\ln x]$
$=\lim\limits_{x\to0^+}\frac{\ln^2x}{\frac{1}{x}}=\lim\limits_{x\to0^+}\frac{2\ln x\cdot\frac{1}{x}}{-\frac{1}{x^2}}=2\lim\limits_{x\to0^+}\frac{\ln x}{-\frac{1}{x}}=2\lim\limits_{x\to0^+}\frac{\frac{1}{x}}{\frac{1}{x^2}}=0$，
则 $\lim\limits_{x\to0^+}x^{(x^x-1)}=e^0=1$。` },
      { p: 30, md: R`#### （二）数列的极限
求数列极限，常见的是三种类型，即 $n$ 项和的数列极限、$n$ 项乘积的数列极限和用递推关系 $x_{n+1}=f(x_n)$ 定义的数列极限。
**1. $n$ 项和的数列极限**
常用方法：
1) 夹逼原理； 2) 定积分定义； 3) 级数求和。
【例1】求极限 $\lim\limits_{n\to\infty}\left(\frac{n}{n^2+1}+\frac{n}{n^2+2}+\cdots+\frac{n}{n^2+n}\right)$。
【解】由于 $\frac{n^2}{n^2+n}\leqslant\left(\frac{n}{n^2+1}+\frac{n}{n^2+2}+\cdots+\frac{n}{n^2+n}\right)\leqslant\frac{n^2}{n^2+1}$，
且 $\lim\limits_{n\to\infty}\frac{n^2}{n^2+n}=\lim\limits_{n\to\infty}\frac{n^2}{n^2+1}=1$，
则 $\lim\limits_{n\to\infty}\left(\frac{n}{n^2+1}+\frac{n}{n^2+2}+\cdots+\frac{n}{n^2+n}\right)=1$。
【例2】求极限 $\lim\limits_{n\to\infty}\left(\frac{n}{n^2+1^2}+\frac{n}{n^2+2^2}+\cdots+\frac{n}{n^2+n^2}\right)$。
【解】$\lim\limits_{n\to\infty}\left(\frac{n}{n^2+1^2}+\frac{n}{n^2+2^2}+\cdots+\frac{n}{n^2+n^2}\right)=\lim\limits_{n\to\infty}\frac{1}{n}\left[\frac{1}{1+\left(\frac{1}{n}\right)^2}+\frac{1}{1+\left(\frac{2}{n}\right)^2}+\cdots+\frac{1}{1+\left(\frac{n}{n}\right)^2}\right]=\int_0^1\frac{1}{1+x^2}dx=\frac{\pi}{4}$。
【注】用定积分定义求极限的一种常用且有效的方法是先提“可爱因子”$\frac{1}{n}$，然后再分析被积函数和积分区间，一种常见的极限式
$\lim\limits_{n\to\infty}\frac{1}{n}\sum_{k=1}^{n}f\left(\frac{k}{n}\right)=\int_0^1f(x)dx$。
【例3】求极限 $\lim\limits_{n\to\infty}\sum_{k=1}^{n}\frac{k}{n^2}\ln\left(1+\frac{k}{n}\right)$。
【解】$\lim\limits_{n\to\infty}\sum_{k=1}^{n}\frac{k}{n^2}\ln\left(1+\frac{k}{n}\right)=\lim\limits_{n\to\infty}\frac{1}{n}\sum_{k=1}^{n}\frac{k}{n}\ln\left(1+\frac{k}{n}\right)$（提可爱因子 $\frac{1}{n}$）
$=\int_0^1x\ln(1+x)dx=\frac{1}{2}\int_0^1\ln(1+x)dx^2=\frac{x^2}{2}\ln(1+x)\bigg|_0^1-\frac{1}{2}\int_0^1\frac{x^2}{1+x}dx=\frac{1}{4}$。` },
      { p: 31, md: R`【例4】求极限 $\lim\limits_{n\to\infty}\left(\frac{\sin\frac{\pi}{n}}{n+1}+\frac{\sin\frac{2\pi}{n}}{n+\frac{1}{2}}+\cdots+\frac{\sin\frac{n\pi}{n}}{n+\frac{1}{n}}\right)$。
【解】$\frac{1}{n+1}\left(\sin\frac{\pi}{n}+\sin\frac{2\pi}{n}+\cdots+\sin\frac{n\pi}{n}\right)\leqslant\left(\frac{\sin\frac{\pi}{n}}{n+1}+\frac{\sin\frac{2\pi}{n}}{n+\frac{1}{2}}+\cdots+\frac{\sin\frac{n\pi}{n}}{n+\frac{1}{n}}\right)$
$\leqslant\frac{1}{n+\frac{1}{n}}\left(\sin\frac{\pi}{n}+\sin\frac{2\pi}{n}+\cdots+\sin\frac{n}{n}\pi\right)<\frac{1}{n}\left(\sin\frac{\pi}{n}+\sin\frac{2\pi}{n}+\cdots+\sin\frac{n}{n}\pi\right)$，
$\lim\limits_{n\to\infty}\frac{1}{n+1}\left(\sin\frac{\pi}{n}+\sin\frac{2\pi}{n}+\cdots+\sin\frac{n\pi}{n}\right)=\lim\limits_{n\to\infty}\frac{n}{n+1}\cdot\frac{1}{n}\left(\sin\frac{\pi}{n}+\sin\frac{2\pi}{n}+\cdots+\sin\frac{n\pi}{n}\right)$
$=\lim\limits_{n\to\infty}\frac{1}{n}\left(\sin\frac{\pi}{n}+\sin\frac{2\pi}{n}+\cdots+\sin\frac{n\pi}{n}\right)=\int_0^1\sin(\pi x)dx=\frac{2}{\pi}$，
则原式 $=\frac{2}{\pi}$。
【例5】设 $x_n=1+\frac{2}{2}+\frac{3}{2^2}+\cdots+\frac{n}{2^{n-1}}$，则 $\lim\limits_{n\to\infty}x_n=$______。
【分析】由级数定义知 $\lim\limits_{n\to\infty}x_n=\sum_{n=1}^{\infty}\frac{n}{2^{n-1}}$，考虑幂级数 $S(x)=\sum_{n=1}^{\infty}nx^{n-1}$，$|x|<1$，则 $\lim\limits_{n\to\infty}x_n=\sum_{n=1}^{\infty}\frac{n}{2^{n-1}}=S\left(\frac{1}{2}\right)$，所以，先求 $S(x)$。
【解】$S(x)=\sum_{n=1}^{\infty}nx^{n-1}=\left(\sum_{n=0}^{\infty}x^n\right)'=\left(\frac{1}{1-x}\right)'=\frac{1}{(1-x)^2}$，则 $\lim\limits_{n\to\infty}x_n=\sum_{n=1}^{\infty}\frac{n}{2^{n-1}}=S\left(\frac{1}{2}\right)=\frac{1}{\left(1-\frac{1}{2}\right)^2}=4$。
【注】本题数学二不要求。
【例6】证明 $\lim\limits_{n\to\infty}\sqrt[n]{a_1^n+a_2^n+\cdots+a_m^n}=\max\limits_{1\leqslant i\leqslant m}a_i$，其中 $a_i>0\ (i=1,2,\cdots,m)$，并利用该结论求下列极限
1) $\lim\limits_{n\to\infty}\sqrt[n]{1^n+2^n+3^n}$；
2) $\lim\limits_{n\to\infty}(a^{-n}+b^{-n})^{\frac{1}{n}}\ (0<a<b)$；
3) $\lim\limits_{n\to\infty}\sqrt[n]{1+x^n+\left(\frac{x^2}{2}\right)^n}\ (x\geqslant0)$。
【解】令 $\max\limits_{1\leqslant i\leqslant m}a_i=a$，则` },
      { p: 32, md: R`$a=\sqrt[n]{a^n}\leqslant\sqrt[n]{a_1^n+a_2^n+\cdots+a_m^n}\leqslant\sqrt[n]{ma^n}=\sqrt[n]{m}a$。
又 $\lim\limits_{n\to\infty}\sqrt[n]{m}=1$，则由夹逼原理知 $\lim\limits_{n\to\infty}\sqrt[n]{a_1^n+a_2^n+\cdots+a_m^n}=a=\max\limits_{1\leqslant i\leqslant m}a_i$。
1) $\lim\limits_{n\to\infty}\sqrt[n]{1+2^n+3^n}=\max\{1,2,3\}=3$。
2) $\lim\limits_{n\to\infty}(a^{-n}+b^{-n})^{\frac{1}{n}}=\lim\limits_{n\to\infty}\sqrt[n]{\left(\frac{1}{a}\right)^n+\left(\frac{1}{b}\right)^n}=\max\left\{\frac{1}{a},\frac{1}{b}\right\}=\frac{1}{a}$。
3) $\lim\limits_{n\to\infty}\sqrt[n]{1+x^n+\left(\frac{x^2}{2}\right)^n}=\max\left\{1,x,\frac{x^2}{2}\right\}=\begin{cases}1,&0\leqslant x<1,\\x,&1\leqslant x<2,\\\frac{x^2}{2},&x\geqslant2.\end{cases}$
这里是用几何方法得出结果的，即如上图画 3 条线 $y=1,y=x,y=\frac{x^2}{2}$。
【注】本题中所证的结论是一个常用结论。
**2. $n$ 项连乘的数列极限**
常用方法：
1) 夹逼原理； 2) 取对数化为 $n$ 项和。
【例1】设 $a_n=\sqrt[n]{\frac{1}{2}\cdot\frac{3}{4}\cdots\frac{2n-1}{2n}}$，求极限 $\lim\limits_{n\to\infty}a_n$。
【解】显然 $a_n\leqslant1$，又
$a_n=\sqrt[n]{\frac{1}{2}\cdot\frac{3}{4}\cdots\frac{2n-1}{2n}}=\sqrt[n]{\frac{3}{2}\cdot\frac{5}{4}\cdots\frac{2n-1}{2n-2}\cdot\frac{1}{2n}}\geqslant\sqrt[n]{\frac{1}{2n}}$，
$\lim\limits_{n\to\infty}\sqrt[n]{\frac{1}{2n}}=\lim\limits_{n\to\infty}\frac{1}{\sqrt[n]{2}\cdot\sqrt[n]{n}}=1$，
则 $\lim\limits_{n\to\infty}a_n=1$。
【例2】求 $\lim\limits_{n\to\infty}\frac{1}{n}\sqrt[n]{(n+1)(n+2)\cdots(n+n)}$。
【解】令 $y_n=\frac{1}{n}\sqrt[n]{(n+1)(n+2)\cdots(2n)}$，则
$\lim\limits_{n\to\infty}\ln y_n=\lim\limits_{n\to\infty}\left[\frac{1}{n}[\ln(n+1)+\ln(n+2)+\cdots+\ln(2n)]-\ln n\right]$
$=\lim\limits_{n\to\infty}\frac{1}{n}\left[\ln\left(1+\frac{1}{n}\right)+\ln\left(1+\frac{2}{n}\right)+\cdots+\ln\left(1+\frac{n}{n}\right)\right]$
$=\int_0^1\ln(1+x)dx=[(x+1)\ln(1+x)-x]\bigg|_0^1=2\ln2-1$，
故原式 $=e^{2\ln2-1}=\frac{4}{e}$。
【注】同样的方法可求得 $\lim\limits_{n\to\infty}\frac{\sqrt[n]{n!}}{n}=\frac{1}{e}$。` },
      { p: 33, md: R`**3. 递推关系 $x_1=a,x_{n+1}=f(x_n)\ (n=1,2,\cdots)$ 定义的数列**
常用方法
方法 1：先证数列 $\{x_n\}$ 收敛（常用单调有界准则），然后令 $\lim\limits_{n\to\infty}x_n=A$，等式 $x_{n+1}=f(x_n)$ 两端取极限得 $A=f(A)$，由此求得极限 $A$。
方法 2：先令 $\lim\limits_{n\to\infty}x_n=A$，然后等式 $x_{n+1}=f(x_n)$ 两端取极限解得 $A$，得到极限初步结果，最后再证明 $\lim\limits_{n\to\infty}x_n=A$。
一般来说，当数列 $\{x_n\}$ 具有单调性时用方法 1，而当数列 $\{x_n\}$ 不具有单调性或单调性很难判定时用方法 2。单调性判定常用有三种方法：
1) 若 $x_{n+1}-x_n\geqslant0\ (\leqslant0)$，则 $\{x_n\}$ 单调增（单调减）；
2) 设 $\{x_n\}$ 不变号，
(1) 若 $x_n>0$，则当 $\frac{x_{n+1}}{x_n}\geqslant1\ (\leqslant1)$ 时，$\{x_n\}$ 单调增（单调减）；
(2) 若 $x_n<0$，则当 $\frac{x_{n+1}}{x_n}\geqslant1\ (\leqslant1)$ 时，$\{x_n\}$ 单调减（单调增）；
3) 设数列 $\{x_n\}$ 由 $x_1=a,x_{n+1}=f(x_n)\ (n=1,2,\cdots),x_n\in I$ 所确定，
(1) 若 $f(x)$ 在 $I$ 上单调增，则
当 $x_1\leqslant x_2$ 时，$\{x_n\}$ 单调增；
当 $x_1\geqslant x_2$ 时，$\{x_n\}$ 单调减；
(2) 若 $f(x)$ 在 $I$ 上单调减，则 $\{x_n\}$ 不单调。
【例1】设 $0<x_1<3,x_{n+1}=\sqrt{x_n(3-x_n)}\ (n=1,2,\cdots)$，证明：数列 $\{x_n\}$ 极限存在并求此极限。
【证】由 $0<x_1<3,x_{n+1}=\sqrt{x_n(3-x_n)}$ 知 $0<x_n<3$，从而有
$x_{n+1}=\sqrt{x_n(3-x_n)}\leqslant\frac{1}{2}[(\sqrt{x_n})^2+(\sqrt{3-x_n})^2]=\frac{3}{2}$，
即 $\{x_n\}$ 上有界。而
$x_{n+1}-x_n=\sqrt{x_n(3-x_n)}-x_n=\frac{x_n(3-x_n)-x_n^2}{\sqrt{x_n(3-x_n)}+x_n}=\frac{x_n(3-2x_n)}{\sqrt{x_n(3-x_n)}+x_n}\geqslant0$，
故 $\{x_n\}$ 单调增。或者由 $\frac{x_{n+1}}{x_n}=\sqrt{\frac{3}{x_n}-1}\geqslant\sqrt{\frac{3}{\frac{3}{2}}-1}=1$ 知 $\{x_n\}$ 递增。
故 $\lim\limits_{n\to\infty}x_n$ 存在，不妨设 $\lim\limits_{n\to\infty}x_n=a$。
对等式 $x_{n+1}=\sqrt{x_n(3-x_n)}$ 两端取极限得 $a=\sqrt{a(3-a)}$，由此解得 $a=\frac{3}{2}$ 或 $a=0$（舍去），由于 $0<x_1\leqslant x_n<3$，故由极限的保号性知，$0<x_1\leqslant a\leqslant3$。
则 $\lim\limits_{n\to\infty}x_n=\frac{3}{2}$。
【例2】设 $x_1=\sqrt{6},x_2=\sqrt{6+\sqrt{6}},\cdots,x_n=\sqrt{6+\sqrt{6+\sqrt{6+\cdots+\sqrt{6}}}}$，求极限 $\lim\limits_{n\to\infty}x_n$。` },
      { p: 34, md: R`【解1】$x_{n+1}=\sqrt{6+x_n}$，令 $f(x)=\sqrt{6+x}$，由于 $f'(x)=\frac{1}{2\sqrt{6+x}}>0$，则 $f(x)$ 单调增，又 $x_1<x_2$，则 $\{x_n\}$ 单调增。
又 $x_1=\sqrt{6}<3$，若 $x_n<3$，则 $x_{n+1}=\sqrt{6+x_n}<3$，从而 $x_n<3$，即数列 $\{x_n\}$ 上有界，则 $\lim\limits_{n\to\infty}x_n$ 存在。设 $\lim\limits_{n\to\infty}x_n=a$，由于 $0<x_1<3$，故极限的保号性知，$0\leqslant a\leqslant3$。$x_{n+1}=\sqrt{6+x_n}$ 两端取极限知，$a=\sqrt{6+a}$，解得 $a=3$，或 $a=-2$（舍去）。则 $\lim\limits_{n\to\infty}x_n=3$。
【解2】直接证明 $\lim\limits_{n\to\infty}x_n=3$。
由 $x_{n+1}=\sqrt{6+x_n}$ 知
$|x_n-3|=\left|\sqrt{6+x_{n-1}}-3\right|=\frac{|x_{n-1}-3|}{\sqrt{6+x_{n-1}}+3}<\frac{1}{3}|x_{n-1}-3|<\frac{1}{3^2}|x_{n-2}-3|<\cdots<\frac{1}{3^{n-1}}|x_1-3|\to0\quad(n\to\infty)$
则 $\lim\limits_{n\to\infty}x_n=3$。
【例3】设数列 $\{x_n\}$ 满足 $0<x_1<\pi,x_{n+1}=\sin x_n\ (n=1,2,\cdots)$。
1) 证明 $\lim\limits_{n\to\infty}x_n$ 存在，并求该极限；
2) 计算 $\lim\limits_{n\to\infty}\left(\frac{x_{n+1}}{x_n}\right)^{\frac{1}{x_n^2}}$。
【解】1) 证明：由 $0<x_1<\pi,x_{n+1}=\sin x_n$ 知 $x_{n+1}=\sin x_n\leqslant x_n$。
即 $\{x_n\}$ 递减，且 $x_n>0$ 有下界，则 $\lim\limits_{n\to\infty}x_n$ 存在。
设 $\lim\limits_{n\to\infty}x_n=a$，由 $x_{n+1}=\sin x_n$ 知 $a=\sin a$，从而有 $a=0$，即 $\lim\limits_{n\to\infty}x_n=0$。
2) 由于 $\lim\limits_{n\to\infty}\left(\frac{x_{n+1}}{x_n}\right)^{\frac{1}{x_n^2}}=\lim\limits_{n\to\infty}\left(\frac{\sin x_n}{x_n}\right)^{\frac{1}{x_n^2}}$，我们考虑极限 $\lim\limits_{x\to0}\left(\frac{\sin x}{x}\right)^{\frac{1}{x^2}}$。
由于 $\lim\limits_{x\to0}\left(\frac{\sin x}{x}\right)^{\frac{1}{x^2}}=\lim\limits_{x\to0}\left(1+\frac{\sin x-x}{x}\right)^{\frac{1}{x^2}}$，且 $\lim\limits_{x\to0}\frac{\sin x-x}{x^3}=\lim\limits_{x\to0}\frac{-\frac{1}{6}x^3}{x^3}=-\frac{1}{6}$，
则 $\lim\limits_{x\to0}\left(\frac{\sin x}{x}\right)^{\frac{1}{x^2}}=e^{-\frac{1}{6}}$。故 $\lim\limits_{n\to\infty}\left(\frac{x_{n+1}}{x_n}\right)^{\frac{1}{x_n^2}}=e^{-\frac{1}{6}}$。
【注】本题用到一个常用不等式 $\sin x<x<\tan x,x\in\left(0,\frac{\pi}{2}\right)$。
【例4】设 $x_1=2,x_{n+1}=2+\frac{1}{x_n}\ (n=1,2,\cdots)$，求极限 $\lim\limits_{n\to\infty}x_n$。
【分析】令 $f(x)=2+\frac{1}{x}$，则 $x_{n+1}=f(x_n)$，显然 $f(x)$ 在 $(0,+\infty)$ 上单调减，故 $\{x_n\}$ 不具有单调性，因此用方法 2。
【解】令 $\lim\limits_{n\to\infty}x_n=a$，则 $\lim\limits_{n\to\infty}x_{n+1}=\lim\limits_{n\to\infty}\left(2+\frac{1}{x_n}\right)$，即 $a=2+\frac{1}{a}$，解得 $a=1\pm\sqrt{2}$。
由题设知 $x_n\geqslant2$，故由极限的保号性知，$a\geqslant2$，从而 $a=1+\sqrt{2}$。以下证明 $\lim\limits_{n\to\infty}x_n=1+\sqrt{2}$。` },
      { p: 35, md: R`$|x_n-a|=\left|\left(2+\frac{1}{x_{n-1}}\right)-\left(2+\frac{1}{a}\right)\right|=\left|\frac{x_{n-1}-a}{ax_{n-1}}\right|\leqslant\frac{|x_{n-1}-a|}{2a}\leqslant\frac{|x_{n-1}-a|}{2}\leqslant\frac{|x_{n-2}-a|}{2^2}\leqslant\cdots\leqslant\frac{|x_1-a|}{2^{n-1}}\to0\quad(n\to\infty)$。
#### 题型三 确定极限式中的参数
【例1】若 $\lim\limits_{x\to0}\frac{\int_0^x\frac{t^2}{\sqrt{a^2+t^2}}dt}{bx-\sin x}=1$，求 $a,b$，其中 $a,b$ 为正数。
【解1】$1=\lim\limits_{x\to0}\frac{\int_0^x\frac{t^2}{\sqrt{a^2+t^2}}dt}{bx-\sin x}=\lim\limits_{x\to0}\frac{\frac{x^2}{\sqrt{a^2+x^2}}}{b-\cos x}$（洛必达法则）
$=\frac{1}{a}\lim\limits_{x\to0}\frac{x^2}{1-\cos x}$（$b=1$，否则上式右端为 0，左端为 1，矛盾）
$=\frac{1}{a}\lim\limits_{x\to0}\frac{x^2}{\frac{1}{2}x^2}=\frac{2}{a}$，
则 $a=2,b=1$。
【解2】由于当 $t\to0$ 时，$\frac{t^2}{\sqrt{a^2+t^2}}\sim\frac{t^2}{a}$，则
$1=\lim\limits_{x\to0}\frac{\int_0^x\frac{t^2}{\sqrt{a^2+t^2}}dt}{bx-\sin x}=\lim\limits_{x\to0}\frac{\int_0^x\frac{t^2}{a}dt}{bx-\sin x}=\frac{1}{3a}\lim\limits_{x\to0}\frac{x^3}{bx-\sin x}$
若 $b\neq1$，$\frac{1}{3a}\lim\limits_{x\to0}\frac{x^3}{bx-x}=0$，
等式左右两端矛盾，则 $b=1$，且
$1=\frac{1}{3a}\lim\limits_{x\to0}\frac{x^3}{x-\sin x}=\frac{1}{3a}\lim\limits_{x\to0}\frac{x^3}{\frac{x^3}{6}}=\frac{2}{a}$，
则 $a=2,b=1$。
【例2】若 $\lim\limits_{x\to-\infty}\left(\sqrt{x^2+x+1}+ax+b\right)=0$，求 $a,b$。
【解1】由 $\lim\limits_{x\to-\infty}\left(\sqrt{x^2+x+1}+ax+b\right)=0$ 可知，$a>0$。
原式 $=\lim\limits_{x\to-\infty}\frac{(x^2+x+1)-(ax+b)^2}{\sqrt{x^2+x+1}-(ax+b)}$（有理化）
$=\lim\limits_{x\to-\infty}\frac{(1-a^2)x^2+(1-2ab)x+(1-b^2)}{\sqrt{x^2+x+1}-(ax+b)}=0$，
则 $1-a^2=0,1-2ab=0$，由此可得 $a=1,b=\frac{1}{2}$。
【解2】原式 $=\lim\limits_{x\to-\infty}(-x)\left(\sqrt{1+\frac{1}{x}+\frac{1}{x^2}}-a-\frac{b}{x}\right)=0$。
因此 $1-a=0$，即 $a=1$。
$b=-\lim\limits_{x\to-\infty}\left(\sqrt{x^2+x+1}+x\right)=-\lim\limits_{x\to-\infty}\frac{x+1}{\sqrt{x^2+x+1}-x}$` },
      { p: 36, md: R`$=\lim\limits_{x\to-\infty}\frac{1+\frac{1}{x}}{\sqrt{1+\frac{1}{x}+\frac{1}{x^2}}+1}=\frac{1}{2}.$
【解3】等式 $\lim\limits_{x\to-\infty}(\sqrt{x^2+x+1}+ax+b)=0$ 两端同除 $x$ 可得
$a=-\lim\limits_{x\to-\infty}\frac{\sqrt{x^2+x+1}}{x}=1$，
$b=-\lim\limits_{x\to-\infty}(\sqrt{x^2+x+1}+x)=\lim\limits_{x\to-\infty}x\left(\sqrt{1+\frac{1}{x}+\frac{1}{x^2}}-1\right)$（提出 $-x$）
$=\lim\limits_{x\to-\infty}\left[x\cdot\frac{1}{2}\left(\frac{1}{x}+\frac{1}{x^2}\right)\right]$（等价代换）$=\frac{1}{2}.$
【例3】若 $\lim\limits_{x\to+\infty}[(x^n+7x^4+1)^m-x]=b,(n>4,b\neq0)$，求 $n,m,b$。
【解】$(x^n+7x^4+1)$ 中最高次项为 $x^n$，由题设知 $nm=1$，即 $m=\frac{1}{n}$。
$\lim\limits_{x\to+\infty}[(x^n+7x^4+1)^m-x]=\lim\limits_{x\to+\infty}[(x^n+7x^4+1)^{\frac{1}{n}}-x]=\lim\limits_{x\to+\infty}x\left[\sqrt[n]{1+\frac{7x^4}{x^n}+\frac{1}{x^n}}-1\right]=\lim\limits_{x\to+\infty}x\cdot\frac{1}{n}\left(\frac{7x^4}{x^n}+\frac{1}{x^n}\right)=b\neq0$，（等价代换）
则 $n=5,b=\frac{7}{5},m=\frac{1}{5}$。
【例4】设 $\lim\limits_{n\to\infty}\frac{n^{2018}}{n^\alpha-(n-1)^\alpha}=\lambda\neq0$，求 $\alpha$ 及 $\lambda$。
【解】$\lambda=\lim\limits_{n\to\infty}\frac{n^{2018}}{n^\alpha-(n-1)^\alpha}=\lim\limits_{n\to\infty}\frac{n^{2018}}{n^\alpha\left[1-\left(1-\frac{1}{n}\right)^\alpha\right]}=\lim\limits_{n\to\infty}\frac{n^{2018}}{n^\alpha\cdot\frac{\alpha}{n}}$ $\left(\left[1-\left(1-\frac{1}{n}\right)^\alpha\right]\sim\frac{\alpha}{n}\right)$
$=\frac{1}{\alpha}\lim\limits_{n\to\infty}\frac{n^{2018}}{n^{\alpha-1}}$，
则 $\alpha=2019,\lambda=\frac{1}{2019}$。
#### 题型四 无穷小量阶的比较
由无穷小量阶的定义可知，比较两个无穷小阶的问题就是求 $\frac{0}{0}$ 型极限，所以常用的方法就是求 $\frac{0}{0}$ 型极限的常用三种方法。
1) 洛必达法则（求导定阶）
若当 $x\to0$ 时 $f(x)$ 是无穷小量，且 $f'(x)$ 是 $x$ 的 $k(k\geqslant0)$ 阶无穷小，则 $f(x)$ 是 $x\to0$` },
      { p: 37, md: R`时的 $k+1$ 阶无穷小量。
2) 等价无穷小代换
若当 $x\to0$ 时 $f(x)$ 是无穷小量，且 $f(x)\sim Ax^k(A\neq0,k>0)$，则 $f(x)$ 是 $x\to0$ 时的 $k$ 阶无穷小量。
如当 $x\to0$ 时，$(1-\cos x)\sin x\sim\frac{1}{2}x^2\cdot x$，则当 $x\to0$ 时，$(1-\cos x)\sin x$ 是 $x$ 的 3 阶无穷小。
3) 泰勒公式
【例1】把 $x\to0^+$ 时的无穷小 $\alpha=\int_0^x\cos t^2dt,\beta=\int_0^{x^2}\tan\sqrt{t}dt,\gamma=\int_0^{\sqrt{x}}\sin t^3dt$ 进行排序，使排在后面的是前一个的高阶无穷小，则正确的排列顺序是
(A) $\alpha,\beta,\gamma$。 (B) $\alpha,\gamma,\beta$。 (C) $\beta,\alpha,\gamma$。 (D) $\beta,\gamma,\alpha$。
【解1】（用定义直接比较）
$\lim\limits_{x\to0^+}\frac{\alpha}{\beta}=\lim\limits_{x\to0^+}\frac{\cos x^2}{2x\tan x}=\infty$，
则 $\beta$ 是 $\alpha$ 的高阶无穷小，(C) 和 (D) 选项不正确。
$\lim\limits_{x\to0^+}\frac{\beta}{\gamma}=\lim\limits_{x\to0^+}\frac{2x\tan x}{\sin x^{\frac{3}{2}}\cdot\frac{1}{2\sqrt{x}}}=4\lim\limits_{x\to0^+}\frac{x^2}{x}=0$，
则 $\beta$ 是 $\gamma$ 的高阶无穷小，即 $\beta$ 应排在 $\gamma$ 后面，(A) 不正确，故应选 (B)。
【解2】（利用定义确定 $\alpha,\beta,\gamma$ 是 $x$ 的几阶无穷小）
由 $\lim\limits_{x\to0^+}\frac{\int_0^x\cos t^2dt}{x^k}=\lim\limits_{x\to0^+}\frac{\cos x^2}{kx^{k-1}}=a\neq0$ 可知 $k=1$。
由 $\lim\limits_{x\to0^+}\frac{\int_0^{x^2}\tan\sqrt{t}dt}{x^k}=\lim\limits_{x\to0^+}\frac{2x\tan x}{kx^{k-1}}=a\neq0$ 可知 $k=3$。
由 $\lim\limits_{x\to0^+}\frac{\int_0^{\sqrt{x}}\sin t^3dt}{x^k}=\lim\limits_{x\to0^+}\frac{\frac{1}{2\sqrt{x}}\sin x^{\frac{3}{2}}}{kx^{k-1}}=\lim\limits_{x\to0^+}\frac{\frac{1}{2}x}{kx^{k-1}}=a\neq0$ 可知 $k=2$。
则正确的排序是 $\alpha,\gamma,\beta$。
【解3】（求导定阶）
由于 $\frac{d\alpha}{dx}=\cos x^2\sim1$，$x$ 的 0 阶无穷小，
$\frac{d\beta}{dx}=2x\tan x\sim2x^2$，$x$ 的 2 阶无穷小，
$\frac{d\gamma}{dx}=\frac{1}{2\sqrt{x}}\sin x^{\frac{3}{2}}\sim\frac{1}{2}x$，$x$ 的 1 阶无穷小，
则 $\alpha,\gamma,\beta$ 分别是 $x$ 的 1 阶、3 阶、2 阶无穷小，正确的排序是 $\alpha,\gamma,\beta$。
【解4】（利用若 $\lim\limits_{x\to0}\frac{f(x)}{g(x)}=1$，则 $\int_0^{\varphi(x)}f(t)dt\sim\int_0^{\varphi(x)}g(t)dt$，其中 $\lim\limits_{x\to0}\varphi(x)=0$）
$\alpha=\int_0^x\cos t^2dt\sim\int_0^x1dt=x$，` },
      { p: 38, md: R`$\beta=\int_0^{x^2}\tan\sqrt{t}dt\sim\int_0^{x^2}\sqrt{t}dt=\frac{2}{3}x^3$，
$\gamma=\int_0^{\sqrt{x}}\sin t^3dt\sim\int_0^{\sqrt{x}}t^3dt=\frac{1}{4}x^2$，
则正确的排序是 $\alpha,\gamma,\beta$。
【例2】当 $x\to0$ 时，$f(x)=x-\sin ax$ 与 $g(x)=x^2\ln(1-bx)$ 是等价无穷小，则
(A) $a=1,b=-\frac{1}{6}$。 (B) $a=1,b=\frac{1}{6}$。
(C) $a=-1,b=-\frac{1}{6}$。 (D) $a=-1,b=\frac{1}{6}$。
【解1】$1=\lim\limits_{x\to0}\frac{f(x)}{g(x)}=\lim\limits_{x\to0}\frac{x-\sin ax}{-bx^3}$ $\qquad(\ln(1-bx)\sim-bx)$
$\xrightarrow{\text{洛必达}}\lim\limits_{x\to0}\frac{1-a\cos ax}{-3bx^2}$ $\qquad(a=1,\text{否则该极限为}\infty,\text{与题设矛盾})$
$=\lim\limits_{x\to0}\frac{\frac{1}{2}x^2}{-3bx^2}=-\frac{1}{6b}$，
则 $b=-\frac{1}{6}$。
【解2】$1=\lim\limits_{x\to0}\frac{f(x)}{g(x)}=\lim\limits_{x\to0}\frac{x-\sin ax}{-bx^3}=\lim\limits_{x\to0}\frac{x-\left[ax-\frac{(ax)^3}{3!}+o(x^3)\right]}{-bx^3}=\lim\limits_{x\to0}\frac{(1-a)x+\frac{(ax)^3}{3!}-o(x^3)}{-bx^3}$，
则 $a=1,b=-\frac{1}{6}$。
【解3】由题设知 $1=\lim\limits_{x\to0}\frac{f(x)}{g(x)}=\lim\limits_{x\to0}\frac{x-\sin ax}{-bx^3}$。
从本题选项可看出，$a=1$ 或 $a=-1$，将 $a=1$ 代入上式得
$1=\lim\limits_{x\to0}\frac{x-\sin x}{-bx^3}=\lim\limits_{x\to0}\frac{\frac{1}{6}x^3}{-bx^3}$，
则 $b=-\frac{1}{6}$，故应选 (A)。
【例3】已知函数 $f(x)=\frac{1+x}{\sin x}-\frac{1}{x}$，记 $a=\lim\limits_{x\to0}f(x)$。
(Ⅰ) 求 $a$ 的值；
(Ⅱ) 若当 $x\to0$ 时，$f(x)-a$ 与 $x^k$ 是同阶无穷小，求常数 $k$ 的值。
【解】(Ⅰ) 由题意
$a=\lim\limits_{x\to0}\left(\frac{1+x}{\sin x}-\frac{1}{x}\right)=\lim\limits_{x\to0}\frac{x-\sin x}{x\sin x}+\lim\limits_{x\to0}\frac{x}{\sin x}=0+1=1$。$(x-\sin x\sim\frac{1}{6}x^3)$
(Ⅱ) 因为
$f(x)-a=\frac{1+x}{\sin x}-\frac{1}{x}-1=\frac{x+x^2-\sin x-x\sin x}{x\sin x}=\frac{(1+x)(x-\sin x)}{x\sin x}$，` },
      { p: 39, md: R`$\lim\limits_{x\to0}\frac{f(x)-a}{x^k}=\lim\limits_{x\to0}\frac{(1+x)(x-\sin x)}{x^{k+1}\sin x}=\lim\limits_{x\to0}\frac{(1+x)(x-\sin x)}{x^{k+2}}=\lim\limits_{x\to0}\frac{x-\sin x}{x^{k+2}}=\lim\limits_{x\to0}\frac{\frac{1}{6}x^3}{x^{k+2}}$，
当 $k=1$ 时，有 $\lim\limits_{x\to0}\frac{f(x)-a}{x^k}=\frac{1}{6}$。此时 $f(x)-a$ 与 $x$ 是同阶无穷小 $(x\to0)$，因此 $k=1$。
【例4】设 $p(x)=a+bx+cx^2+dx^3$。当 $x\to0$ 时，若 $p(x)-\tan x$ 是比 $x^3$ 高阶的无穷小，则下列结论中错误的是
(A) $a=0$。 (B) $b=1$。 (C) $c=0$。 (D) $d=\frac{1}{6}$。
【解1】由题设知 $\lim\limits_{x\to0}\frac{p(x)-\tan x}{x^3}=0$，显然，$a=0$，此时
$\lim\limits_{x\to0}\frac{p(x)-\tan x}{x^3}=\lim\limits_{x\to0}\frac{bx+cx^2+dx^3-\tan x}{x^3}=\lim\limits_{x\to0}\frac{b+2cx+3dx^2-\sec^2x}{3x^2}.$
由上式可知，$b=1$，否则，等式右端极限为 $\infty$，则左端极限也为 $\infty$，与题设矛盾。
$0=\lim\limits_{x\to0}\frac{p(x)-\tan x}{x^3}=\lim\limits_{x\to0}\frac{1+2cx+3dx^2-\sec^2x}{3x^2}=\lim\limits_{x\to0}\frac{2c}{3x}+d-\frac{1}{3}$，$\quad(1-\sec^2x=-\tan^2x)$
则 $c=0,d=\frac{1}{3}$。故应选 (D)。
【解2】由 $x\to0$ 时，$\tan x$ 的泰勒公式 $\tan x=x+\frac{1}{3}x^3+o(x^3)$。
又 $\lim\limits_{x\to0}\frac{p(x)-\tan x}{x^3}=\lim\limits_{x\to0}\frac{a+(b-1)x+cx^2+\left(d-\frac{1}{3}\right)x^3+o(x^3)}{x^3}=0$，
则 $a=0,b=1,c=0,d=\frac{1}{3}$，故应选 (D)。
【解3】由题设知
$0=\lim\limits_{x\to0}\frac{p(x)-\tan x}{x^3}=\lim\limits_{x\to0}\frac{[p(x)-x]-(\tan x-x)}{x^3}=\lim\limits_{x\to0}\frac{p(x)-x}{x^3}-\lim\limits_{x\to0}\frac{\tan x-x}{x^3}=\lim\limits_{x\to0}\frac{p(x)-x}{x^3}-\lim\limits_{x\to0}\frac{\frac{1}{3}x^3}{x^3}=\lim\limits_{x\to0}\frac{p(x)-x}{x^3}-\frac{1}{3}$，即
$\lim\limits_{x\to0}\frac{p(x)-x}{x^3}=\lim\limits_{x\to0}\frac{a+(b-1)x+cx^2+dx^3}{x^3}=\frac{1}{3}$，
则 $a=0,b=1,c=0,d=\frac{1}{3}$。故应选 (D)。
【例5】已知 $x\to0$ 时，$e^{-x^2}-\cos\sqrt{2}x$ 与 $ax^n$ 是等价无穷小，求 $n,a$。
【解】$e^{-x^2}=1-x^2+\frac{x^4}{2!}+o(x^4)$，$\cos\sqrt{2}x=1-\frac{2x^2}{2!}+\frac{4x^4}{4!}+o(x^4)$，
$\lim\limits_{x\to0}\frac{e^{-x^2}-\cos\sqrt{2}x}{ax^n}=\lim\limits_{x\to0}\frac{\frac{1}{3}x^4+o(x^4)}{ax^n}=1$，
则 $a=\frac{1}{3},n=4$。` }
    ],
    quiz: [
      { q: R`下列极限中，必须分左、右极限讨论的是`, options: [R`$\displaystyle\lim_{x\to0}\frac{\sin x}{x}$`, R`$\displaystyle\lim_{x\to0}e^{\frac1x}$`, R`$\displaystyle\lim_{x\to0}x\sin\frac1x$`, R`$\displaystyle\lim_{x\to0}\frac{\ln(1+x)}{x}$`], answer: 1, explain: R`$e^\infty$ 型左右极限不同（$0$ 与 $+\infty$），极限不存在。` },
      { q: R`$\displaystyle\lim_{x\to0}\frac{1-\cos x}{x^2}=$`, options: [R`$0$`, R`$\dfrac12$`, R`$1$`, R`$2$`], answer: 1, explain: R`$1-\cos x\sim\frac12x^2$。` },
      { q: R`当 $x\to0$ 时，$x-\sin x$ 是 $x$ 的几阶无穷小`, options: [R`$1$ 阶`, R`$2$ 阶`, R`$3$ 阶`, R`$4$ 阶`], answer: 2, explain: R`$x-\sin x\sim\dfrac{x^3}{6}$。` },
      { q: R`$\displaystyle\lim_{x\to0}\frac{\tan x-x}{x^3}=$`, options: [R`$\dfrac13$`, R`$\dfrac16$`, R`$-\dfrac13$`, R`$0$`], answer: 0, explain: R`$\tan x-x\sim\dfrac{x^3}{3}$。` },
      { q: R`等价无穷小代换在下列哪种运算中可直接使用`, options: [R`加法`, R`减法`, R`乘除法`, R`任何运算`], answer: 2, explain: R`乘、除关系可换；加减需满足 $\lim\frac{\alpha_1}{\beta_1}\neq\pm1$ 等条件。` },
      { q: R`设 $\lim_{n\to\infty}a_n=a\neq0$，则当 $n$ 充分大时必有`, options: [R`$|a_n|>\dfrac{|a|}{2}$`, R`$|a_n|<\dfrac{|a|}{2}$`, R`$a_n>a-\dfrac1n$`, R`$a_n<a+\dfrac1n$`], answer: 0, explain: R`由保号性，$|a_n|\to|a|>0$。` },
      { q: R`关于无穷大量与无界变量，正确的是`, options: [R`两者等价`, R`无穷大一定是无界变量`, R`无界变量一定是无穷大`, R`两者无关`], answer: 1, explain: R`无穷大 $\Rightarrow$ 无界；反之不成立。` },
      { q: R`洛必达法则可直接适用于下列哪些未定式`, options: [R`$\dfrac00$ 与 $\dfrac\infty\infty$`, R`只有 $\dfrac00$`, R`只有 $\dfrac\infty\infty$`, R`$0\cdot\infty$`], answer: 0, explain: R`后五种不定式需先化为前两种。` },
      { q: R`$\displaystyle\lim_{n\to\infty}\frac1n\left[\frac{1}{1+\frac1n}+\frac{1}{1+\frac2n}+\cdots+\frac{1}{1+\frac nn}\right]=$`, options: [R`$\ln2$`, R`$1$`, R`$0$`, R`$e$`], answer: 0, explain: R`定积分定义 $=\int_0^1\frac{1}{1+x}dx=\ln2$。` },
      { q: R`单调有界数列`, options: [R`一定发散`, R`一定收敛`, R`一定无界`, R`敛散性不定`], answer: 1, explain: R`单调有界准则。` },
      { q: R`$\displaystyle\lim_{x\to0^+}(\cos\sqrt x)^{\frac1x}=$`, options: [R`$e^{\frac12}$`, R`$e^{-\frac12}$`, R`$1$`, R`$e$`], answer: 1, explain: R`$\frac{\cos\sqrt x-1}{x}\to-\frac12$，故为 $e^{-\frac12}$。` },
      { q: R`若数列 $\{x_n\}$ 单调增且有上界，则 $\{x_n\}$`, options: [R`收敛`, R`发散`, R`无界`, R`不单调`], answer: 0, explain: R`单调有界准则：必有极限。` }
    ]
  };
})();
