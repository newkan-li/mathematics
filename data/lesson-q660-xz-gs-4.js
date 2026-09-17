window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q660_s3"] = {
    id: "q660_s3",
    ch: "660题 · 选择题 · 高等数学",
    title: "选择题 第 76–100 题",
    probTitle: "选择题（含原书详解）",
    book: "《数学基础过关660题（数学二）》",
    problems: [
      { n: 76, q: R`设 $f(x)$ 在 $(1-\delta,1+\delta)$ 内存在导数，$f'(x)$ 单调减少，且 $f(1)=f'(1)=1$，则
(A) 在 $(1-\delta,1)$ 和 $(1,1+\delta)$ 内均有 $f(x)<x$。
(B) 在 $(1-\delta,1)$ 和 $(1,1+\delta)$ 内均有 $f(x)>x$。
(C) 在 $(1-\delta,1)$ 内有 $f(x)>x$，在 $(1,1+\delta)$ 内有 $f(x)<x$。
(D) 在 $(1-\delta,1)$ 内有 $f(x)<x$，在 $(1,1+\delta)$ 内有 $f(x)>x$。`, a: R`(A)`, sol: R`【分析】设 $F(x)=f(x)-x$，则 $F'(x)=f'(x)-1$，$F'(x)$ 单调减少，$F'(1)=0$，$F(1)=0$。
当 $x\in(1-\delta,1)$ 时 $F'(x)>F'(1)=0$，故 $F$ 在 $(1-\delta,1]$ 递增，$F(x)<F(1)=0$；当 $x\in(1,1+\delta)$ 时 $F'(x)<0$，故 $F$ 在 $[1,1+\delta)$ 递减，$F(x)<F(1)=0$。因此两侧均有 $f(x)<x$。选 (A)。
【评注】$f'$ 单调减少 ⇒ $f$ 为凸函数 ⇒ 曲线在点 $(1,1)$ 处切线 $y=x$ 的下方。` },
      { n: 77, q: R`函数 $f(x)=\arctan x+\dfrac12\arcsin\dfrac{2x}{1+x^2}$ 在 $[1,+\infty)$
(A) 单调上升。 (B) 单调下降。 (C) 为常数。 (D) 有两个单调性区间。`, a: R`(C)`, sol: R`【分析】
$$f'(x)=\frac{1}{1+x^2}+\frac12\cdot\frac{1}{\sqrt{1-\left(\frac{2x}{1+x^2}\right)^2}}\cdot\frac{2(1+x^2-2x^2)}{(1+x^2)^2}=\frac{1}{1+x^2}-\frac{1}{1+x^2}=0\quad(x>1),$$
又 $f$ 在 $[1,+\infty)$ 连续，故 $f$ 在 $[1,+\infty)$ 为常数。选 (C)。
【评注】化简时注意 $\sqrt{(x^2-1)^2}=x^2-1$（$x>1$）；导数为零且连续 ⇒ 常数。` },
      { n: 78, q: R`设 $y(x)$ 在 $[a,b]$ 二阶可导，满足 $y(a)=y(b)=0$ 且 $y''(x)+cy(x)=0$（$x\in(a,b)$），其中 $c<0$ 为常数，则 $y(x)$ 在 $(a,b)$ 内
(A) 恒为正。 (B) 恒为负。 (C) 恒为 $0$。 (D) 变号。`, a: R`(C)`, sol: R`【分析】由 $y''(x)=-cy(x)$：若 $x_0$ 是极大值点，则 $y''(x_0)\le0\Rightarrow y(x_0)\le0$；若 $x_0$ 是极小值点，则 $y''(x_0)\ge0\Rightarrow y(x_0)\ge0$。故 $y$ 在 $(a,b)$ 不能有取正值的极大值点或取负值的极小值点。
再由 $y(a)=y(b)=0$，若 $y$ 在 $(a,b)$ 不恒为零，则必有取正值的极大值点或取负值的极小值点，矛盾。故 $y\equiv0$。选 (C)。
【评注】$c<0$ 时方程的解为双曲函数（指数型），在两端为零的条件下只能恒为零。` },
      { n: 79, q: R`设 $f(x)$ 在 $[a,b]$ 上有定义，在 $(a,b)$ 内可导，则
(A) 当 $f(a)\cdot f(b)<0$ 时，$\exists\xi\in(a,b)$ 使 $f(\xi)=0$。
(B) 对 $\forall\xi\in(a,b)$，有 $\lim\limits_{x\to\xi}[f(x)-f(\xi)]=0$。
(C) 当 $f(a)=f(b)$ 时 $\exists\xi\in(a,b)$，使 $f'(\xi)=0$。
(D) $\exists\xi\in(a,b)$，使 $f(b)-f(a)=f'(\xi)(b-a)$。`, a: R`(B)`, sol: R`【分析】题设只在 $(a,b)$ 内可导，未设 $[a,b]$ 上连续，故 (A)(C)(D) 都不一定成立（如 $f(x)=\begin{cases}-1,&a\le x<b,\\1,&x=b\end{cases}$ 破坏 (A)；$f(x)=\begin{cases}x,&a\le x<b,\\a,&x=b\end{cases}$ 破坏 (C)(D)）。
(B) 正确：$f$ 在 $\xi$ 可导 ⇒ 在 $\xi$ 连续 ⇒ $\lim\limits_{x\to\xi}[f(x)-f(\xi)]=0$。选 (B)。
【评注】中值定理（罗尔、拉格朗日）需「闭区间连续、开区间可导」，缺一不可。` },
      { n: 80, q: R`设 $f(x),g(x)$ 在 $(-\infty,+\infty)$ 可导，$g(x)>0$ 且
$$\begin{vmatrix}f(x)&g(x)\\f'(x)&g'(x)\end{vmatrix}<0,$$
又 $a<b$，$f(a)=0$，则 $\dfrac{f(x)}{g(x)}$ 在 $(a,b]$
(A) 恒正。 (B) 恒负。 (C) 至少有一个零点。 (D) 单调下降。`, a: R`(A)`, sol: R`【分析】
$$\left(\frac{f(x)}{g(x)}\right)'=\frac{f'(x)g(x)-f(x)g'(x)}{g^2(x)}=-\frac{1}{g^2(x)}\begin{vmatrix}f(x)&g(x)\\f'(x)&g'(x)\end{vmatrix}>0,$$
故 $\dfrac{f(x)}{g(x)}$ 在 $[a,b]$ 单调上升，于是 $\dfrac{f(x)}{g(x)}>\left.\dfrac{f(x)}{g(x)}\right|_{x=a}=\dfrac{f(a)}{g(a)}=0$（$x\in(a,b]$）。选 (A)。
【评注】行列式即 $f'g-fg'$，与商的导数公式相差一个负号。` },
      { n: 81, q: R`设 $f(x)=x^3-3x^2-9x-4$，则 $f(x)$ 在 $(-\infty,+\infty)$ 零点个数为
(A) 1。 (B) 2。 (C) 3。 (D) 0。`, a: R`(C)`, sol: R`【分析】$f'(x)=3x^2-6x-9=3(x-3)(x+1)$，$f$ 在 $(-\infty,-1],[3,+\infty)$ 递增，在 $[-1,3]$ 递减。
$f(-1)=1>0$，$f(3)=-31<0$，且 $\lim\limits_{x\to\pm\infty}f(x)=\pm\infty$。
故 $f$ 在 $(-\infty,-1)$、$(-1,3)$、$(3,+\infty)$ 各恰有一个零点，共 3 个。选 (C)。
【评注】三次函数零点个数由两个极值点的符号确定：$f(-1)>0>f(3)$ 时必有三个零点。` },
      { n: 82, q: R`在区间 $(-\infty,+\infty)$ 内方程 $x^2-x\sin x-\cos x=0$
(A) 无实根。 (B) 有且仅有一个实根。 (C) 有且仅有两个实根。 (D) 有无穷多个实根。`, a: R`(C)`, sol: R`【分析】设 $f(x)=x^2-x\sin x-\cos x$，$f$ 为偶函数，只需讨论 $x\ge0$。
$f(0)=-1<0$，$f(\pi)=\pi^2+1>0$；当 $x\in(0,+\infty)$ 时 $f'(x)=x(2-\cos x)>0$，故 $f$ 在 $[0,+\infty)$ 单调增，有唯一正根。由偶性，$(-\infty,+\infty)$ 内有且仅有两个实根。选 (C)。
【评注】利用偶函数把问题限制到 $x\ge0$；$f'>0$ 保证正根唯一。` },
      { n: 83, q: R`函数 $f(x)$ 在 $[1,2]$ 有二阶导数，$f(2)=0$，$F(x)=(x-1)^2f(x)$，则 $F''(x)$ 在 $(1,2)$ 上
(A) 没有零点。 (B) 必有零点。 (C) 若有零点，必不止一个。 (D) 若有零点必唯一。`, a: R`(B)`, sol: R`【分析】$F$ 在 $[1,2]$ 连续、$(1,2)$ 可导，$F(1)=0$，$F(2)=(2-1)^2f(2)=0$，由罗尔定理存在 $x_0\in(1,2)$ 使 $F'(x_0)=0$。
又 $F'(x)=2(x-1)f(x)+(x-1)^2f'(x)$，故 $F'(1)=0$。对 $F'$ 在 $[1,x_0]$ 上用罗尔定理，存在 $\xi\in(1,x_0)\subset(1,2)$ 使 $F''(\xi)=0$。故 $F''$ 必有零点，选 (B)。
【评注】关键是 $F(1)=F(2)=0$ 与 $F'(1)=0$，两次用罗尔定理。` },
      { n: 84, q: R`设 $f(x)$ 在 $[a,b]$ 连续，在 $(a,b)$ 二阶可导，又 $f(a)=f(b)$，$f'(x)$ 在 $[a,b]$ 连续，$f'_+(a)<0$，则
(A) $\exists\xi\in(a,b)$，$f''(\xi)<0$。 (B) $\exists\xi\in(a,b)$，$f''(\xi)=0$。
(C) $\exists\xi\in(a,b)$，$f''(\xi)>0$。 (D) 对 $\forall x\in(a,b)$，$f(x)>f(a)$。`, a: R`(C)`, sol: R`【分析】由罗尔定理存在 $\xi_0\in(a,b)$ 使 $f'(\xi_0)=0$。对 $f'$ 在 $[a,\xi_0]$ 上用拉格朗日中值定理，存在 $\xi\in(a,\xi_0)$ 使
$$f''(\xi)=\frac{f'(\xi_0)-f'_+(a)}{\xi_0-a}=\frac{-f'_+(a)}{\xi_0-a}>0.$$
选 (C)。
【评注】$f'_+(a)<0$ 且 $f'(\xi_0)=0$ 说明 $f'$ 上升，故某处 $f''>0$。` },
      { n: 85, q: R`设 $f(x)$ 在 $[0,+\infty)$ 上可导且有 $n$ 个不同的零点：$0<x_1<x_2<\cdots<x_n$，则 $f(x)+f'(x)$ 在 $[0,+\infty)$ 内正确的性质是
(A) 至少有 $n$ 个零点。 (B) 至少有 $n-1$ 个零点。 (C) 恰有 $n$ 个零点。 (D) 至多有 $n$ 个零点。`, a: R`(B)`, sol: R`【分析】$f(x)+f'(x)$ 与 $(e^xf(x))'=e^x(f(x)+f'(x))$ 有相同的零点，$f(x)$ 与 $e^xf(x)$ 有相同的零点。
$e^xf(x)$ 在 $[0,+\infty)$ 可导且有 $n$ 个不同零点，由罗尔定理，$(e^xf(x))'$ 至少有 $n-1$ 个零点，即 $f(x)+f'(x)$ 至少有 $n-1$ 个零点。选 (B)。
【评注】技巧：把 $f+f'$ 看成 $(e^xf)'/e^x$，从而可用罗尔定理。` },
      { n: 86, q: R`设 $f(x)$ 在 $[a,b]$ 连续，在 $(a,b)$ 二阶可导，又 $f(a)=f(b)$，$f''(x)\neq0$（$x\in(a,b)$），则下列结论成立的是
(A) 在 $(a,b)$ 内 $f'(x)\neq0$。 (B) $\exists\xi_1,\xi_2\in(a,b)$，$f'(\xi_1)=f'(\xi_2)=0$。
(C) $\exists$ 唯一 $\xi\in(a,b)$，$f'(\xi)=0$。 (D) 至少 $\exists$ 一点 $\xi\in(a,b)$，$f(\xi)=0$。`, a: R`(C)`, sol: R`【分析】由 $f(a)=f(b)$ 及罗尔定理，存在 $\xi\in(a,b)$ 使 $f'(\xi)=0$。
又 $f''(x)\neq0$ 在 $(a,b)$ 恒正或恒负 ⇒ $f'$ 在 $(a,b)$ 严格单调 ⇒ $f'$ 的零点唯一。选 (C)。
【评注】$f''$ 不变号 ⇒ $f'$ 单调 ⇒ 零点唯一；此时 $f$ 为凸或凹函数，$(a,b)$ 内 $f>0$ 或 $f<0$。` },
      { n: 87, q: R`设 $f(x)$ 在 $[a,b]$ 连续，在 $(a,b)$ 内有二阶导数，且 $f(a)=f(b)=0$，$f(c)>0$，其中 $a<c<b$，则以下命题正确的是
(A) 至少 $\exists$ 一点 $\xi\in(a,b)$，使得 $f''(\xi)>0$。
(B) 至少 $\exists$ 一点 $\xi\in(a,b)$，使得 $f''(\xi)=0$。
(C) 至少 $\exists$ 一点 $\xi\in(a,b)$，使得 $f''(\xi)<0$。
(D) 对 $\forall x\in(a,b)$，$f''(x)<0$。`, a: R`(C)`, sol: R`【分析】分别在 $[a,c]$、$[c,b]$ 上用拉格朗日中值定理，存在 $\xi_1\in(a,c)$、$\xi_2\in(c,b)$ 使
$$f'(\xi_1)=\frac{f(c)-f(a)}{c-a}>0,\qquad f'(\xi_2)=\frac{f(b)-f(c)}{b-c}<0.$$
再对 $f'$ 在 $[\xi_1,\xi_2]$ 上用拉格朗日中值定理，存在 $\xi\in(\xi_1,\xi_2)$ 使
$$f''(\xi)=\frac{f'(\xi_2)-f'(\xi_1)}{\xi_2-\xi_1}<0.$$
选 (C)。
【评注】先用拉格朗日得到 $f'$ 一正一负，再用拉格朗日得到 $f''<0$。` },
      { n: 88, q: R`设 $f(x)$ 在 $(a,b)$ 可导，$x_0\in(a,b)$ 是 $f'(x)$ 的间断点，则该间断点一定是
(A) 可去间断点。 (B) 跳跃间断点。 (C) 无穷型间断点。 (D) 非无穷型第二类间断点。
注：若 $\lim\limits_{x\to x_0^\pm}g(x)$ 中有一个为 $\infty$，称 $x_0$ 是 $g(x)$ 的无穷型间断点。`, a: R`(D)`, sol: R`【分析】若 $\lim\limits_{x\to x_0^\pm}f'(x)=A_\pm$ 均存在，则由洛必达法则 $f'_\pm(x_0)=\lim\limits_{x\to x_0^\pm}f'(x)=A_\pm$，又 $f'(x_0)$ 存在故 $A_+=A_-=f'(x_0)$，$f'$ 在 $x_0$ 连续，矛盾。故 $f'$ 的间断点不是第一类（可去、跳跃）。
若 $\lim\limits_{x\to x_0^+}f'(x)=\infty$，则 $f'_+(x_0)=\infty$ 不存在，与 $f'(x_0)$ 存在矛盾，故也不是无穷型。所以只能是**非无穷型第二类**间断点。选 (D)。
【评注】导函数无第一类间断点和无穷型间断点（Darboux 定理的推论）。例：$f(x)=x^2\sin\frac1x$ 的导函数在 0 处为振荡型第二类间断点。` },
      { n: 89, q: R`设 $f(x)$ 在 $x=0$ 四阶可导，且在 $x=0$ 某邻域
$$F(x)=\begin{cases}\dfrac{f(x)}{\ln(1+x^4)-\ln(1-x^4)},&x\neq0,\\1,&x=0,\end{cases}$$
在 $x=0$ 连续，则必有 $f^{(4)}(0)=$
(A) 24。 (B) 36。 (C) 48。 (D) 64。`, a: R`(C)`, sol: R`【分析】由 $F$ 在 0 连续，$\lim\limits_{x\to0}\dfrac{f(x)}{\ln(1+x^4)-\ln(1-x^4)}=1$，即
$$f(x)\sim\ln\frac{1+x^4}{1-x^4}=\ln\left(1+\frac{2x^4}{1-x^4}\right)\sim\frac{2x^4}{1-x^4}\sim2x^4.$$
故 $f(x)=2x^4+o(x^4)$。与四阶麦克劳林公式比较得 $f(0)=f'(0)=f''(0)=f^{(3)}(0)=0$，$\dfrac{f^{(4)}(0)}{4!}=2$，即 $f^{(4)}(0)=48$。选 (C)。
【评注】等价无穷小给出 $f\sim2x^4$；比较系数时 $f^{(4)}(0)=2\cdot4!=48$。` },
      { n: 90, q: R`设 $F(x)$ 是 $f(x)$ 在 $(a,b)$ 上的一个原函数，则 $f(x)+F(x)$ 在 $(a,b)$ 上
(A) 可导。 (B) 连续。 (C) 存在原函数。 (D) 是初等函数。`, a: R`(C)`, sol: R`【分析】$F'=f$，故 $F$ 连续，从而 $F$ 存在原函数，$f=F'$ 也存在原函数，故 $f+F$ 存在原函数。选 (C)。
(A) 错：$f$ 有原函数不一定可导；(B) 错：$f$ 可能有原函数但不连续（如 $x^2\sin\frac1x$ 的导函数）；(D) 错：如 $e^{x^2}$ 的原函数非初等。
【评注】有原函数 ≠ 连续 ≠ 可导 ≠ 初等；但原函数本身连续。` },
      { n: 91, q: R`设 $f(x)$ 一阶可导，$f(x)>0$，$f'(x)>0$，则当 $\Delta x>0$ 时
(A) $\int_x^{x+\Delta x}f(t)\mathrm{d}t>f(x)\Delta x>0$。 (B) $\int_x^{x+\Delta x}f(t)\mathrm{d}t<f(x)\Delta x<0$。
(C) $f(x)\Delta x>\int_x^{x+\Delta x}f(t)\mathrm{d}t>0$。 (D) $f(x)\Delta x<\int_x^{x+\Delta x}f(t)\mathrm{d}t<0$。`, a: R`(A)`, sol: R`【分析】由积分中值定理，存在 $\xi\in(x,x+\Delta x)$ 使
$$\int_x^{x+\Delta x}f(t)\mathrm{d}t=f(\xi)\Delta x>f(x)\Delta x>0,$$
其中用到 $f$ 单调增（$f'>0$）故 $f(\xi)>f(x)$。选 (A)。
【评注】几何意义：曲边梯形面积大于以左端点为高的矩形面积。` },
      { n: 92, q: R`考查下列叙述：
① 设 $f^2(x)$ 在 $x=x_0$ 连续，则 $f(x)$ 在 $x=x_0$ 连续。
② 设 $f(x)$ 在 $x=x_0$ 连续，则 $|f(x)|$ 在 $x=x_0$ 连续。
③ 设 $|f(x)|$ 在 $[a,b]$ 可积，则 $f(x)$ 在 $[a,b]$ 可积。
④ 设 $f(x)$ 在 $[a,b]$ 有界，只有有限个间断点，则 $|f(x)|$ 在 $[a,b]$ 可积，即在 $[a,b]$ 存在定积分。
我们可知
(A) 只有 ①，② 正确。 (B) 只有 ②，③ 正确。 (C) 只有 ②，④ 正确。 (D) 只有 ③，④ 正确。`, a: R`(C)`, sol: R`【分析】② 正确（$f$ 连续 ⇒ $|f|$ 连续）。④ 正确（$f$ 有界且有限个间断点 ⇒ 可积，$|f|$ 也有界且间断点更少）。
① 错：$f(x)=\begin{cases}1,&x>0\\-1,&x\le0\end{cases}$，$f^2\equiv1$ 连续但 $f$ 在 0 间断。
③ 错：$f(x)=\begin{cases}1,&x\text{ 有理}\\-1,&x\text{ 无理}\end{cases}$，$|f|\equiv1$ 可积但 $f$ 不可积。
故只有 ②、④ 正确，选 (C)。
【评注】连续、可积的性质对复合/绝对值是单向的。` },
      { n: 93, q: R`下列函数在指定区间上不存在定积分的是
(A) $f(x)=\begin{cases}\sin\dfrac1x,&x\neq0,\\1,&x=0,\end{cases}$ $x\in[-1,1]$。
(B) $f(x)=\operatorname{sgn}x=\begin{cases}1,&x>0,\\0,&x=0,\\-1,&x<0,\end{cases}$ $x\in[a,b]$。
(C) $f(x)=\begin{cases}\tan x,&x\in\left(-\dfrac\pi2,\dfrac\pi2\right),\\0,&x=\pm\dfrac\pi2,\end{cases}$ $x\in\left[-\dfrac\pi2,\dfrac\pi2\right]$。
(D) $f(x)=\begin{cases}\dfrac{\sin x}{x},&x\neq0,\\1,&x=0,\end{cases}$ $x\in[-1,1]$。`, a: R`(C)`, sol: R`【分析】定积分存在的必要条件是 $f$ 在区间上有界。
(C) 中 $\tan x$ 在 $\left(-\frac\pi2,\frac\pi2\right)$ 无界，故在 $\left[-\frac\pi2,\frac\pi2\right]$ 上不存在定积分。
(A)(B)(D) 均有界且至多有限个间断点，可积。选 (C)。
【评注】可积的充分条件：有界 + 至多有限个间断点（或有限个第一类间断点）。` },
      { n: 94, q: R`在下列定积分中，积分值等于零的是
(A) $\int_{-1}^1x^7\sin^9x\,\mathrm{d}x$。 (B) $\int_{-1}^1x\ln(x+\sqrt{x^2+1})\mathrm{d}x$。
(C) $\int_{-\pi}^{2\pi}\cos^5x\,\mathrm{d}x$。 (D) $\int_{-\pi}^{2\pi}\sin^5x\,\mathrm{d}x$。`, a: R`(C)`, sol: R`【分析】(A) $x^7\sin^9x$ 为偶函数，积分 $=2\int_0^1x^7\sin^9x\,dx>0$。
(B) $\ln(x+\sqrt{x^2+1})$ 为奇函数，$x\ln(x+\sqrt{x^2+1})$ 为偶函数，积分 $>0$。
(D) $\int_{-\pi}^{2\pi}\sin^5x\,dx=\int_{-\pi}^{\pi}\sin^5x\,dx+\int_\pi^{2\pi}\sin^5x\,dx=\int_\pi^{2\pi}\sin^5x\,dx<0$。
(C) $\int_{-\pi}^{2\pi}\cos^5x\,dx\xlongequal{x=t-\frac\pi2}\int_{-\frac\pi2}^{2\pi+\frac\pi2}\sin^5t\,dt=0$（奇函数在一个周期上的积分为零）。选 (C)。
【评注】利用奇偶性与周期性；$\int_a^{a+T}f=\int_0^Tf$（$f$ 以 $T$ 为周期）。` },
      { n: 95, q: R`下列结论正确的是
(A) $\int_0^{2\pi}\dfrac{\sin x}{x}\mathrm{d}x>0$。 (B) $\int_{-2}^2x^32^{x^2}\mathrm{d}x<0$。
(C) $\lim\limits_{n\to\infty}\int_0^1\dfrac{x^n}{1+x}\mathrm{d}x>0$。 (D) $\int_{-1}^2e^x\cos^2x\,\mathrm{d}x>0$。`, a: R`(A)`, sol: R`【分析】(A) $\int_0^{2\pi}\frac{\sin x}{x}dx=\int_0^\pi\left[\frac1x-\frac1{\pi+x}\right]\sin x\,dx>0$（括号内为正，$\sin x>0$），正确。
(B) $x^32^{x^2}$ 为奇函数，积分 $=0$，错。
(C) $0<\int_0^1\frac{x^n}{1+x}dx<\int_0^1x^ndx=\frac1{n+1}\to0$，极限为 0，错。
(D) $\int_{-1}^2e^x\cos^2x\,dx=-\int_1^2e^x\cos^2x\,dx<0$，错。
选 (A)。
【评注】判断含 $\sin x$ 的积分符号常用「变量替换化到同一区间再比较被积函数」。` },
      { n: 96, q: R`设 $I=\int_1^2\dfrac{\mathrm{d}x}{(1+x)\sqrt{x}}$，$J=\int_1^2\dfrac{\mathrm{d}x}{(1+x^2)\sqrt[3]{x}}$，$K=\int_1^2\dfrac{\mathrm{d}x}{(1+x^2)\sqrt{x}}$，则 $I,J,K$ 三个数的大小关系是：
(A) $I<J<K$。 (B) $J<K<I$。 (C) $K<J<I$。 (D) $I<K<J$。`, a: R`(C)`, sol: R`【分析】当 $1<x\le2$ 时，$1+x<1+x^2$，$\sqrt[3]{x}<\sqrt{x}$，故
$$(1+x)\sqrt[3]{x}<(1+x^2)\sqrt[3]{x}<(1+x^2)\sqrt{x},$$
取倒数得 $\dfrac{1}{(1+x^2)\sqrt{x}}<\dfrac{1}{(1+x^2)\sqrt[3]{x}}<\dfrac{1}{(1+x)\sqrt[3]{x}}$（$x=1$ 时相等），积分得 $K<J<I$。选 (C)。
【评注】比较定积分大小：化到同一区间，比较被积函数。` },
      { n: 97, q: R`设 $I_1=\int_0^{\frac\pi2}\dfrac{\sin x}{x}\mathrm{d}x$，$I_2=\int_0^{\frac\pi2}\dfrac{x}{\sin x}\mathrm{d}x$，则
(A) $I_1<1<I_2$。 (B) $1<I_1<I_2$。 (C) $I_2<1<I_1$。 (D) $I_1<I_2<1$。`, a: R`(B)`, sol: R`【分析】$x\in\left(0,\frac\pi2\right]$ 时 $\sin x<x$，故 $\dfrac{\sin x}{x}<1<\dfrac{x}{\sin x}$，从而 $I_1<I_2$。
又 $\dfrac{\sin x}{x}$ 在 $\left(0,\frac\pi2\right]$ 递减（$\left(\frac{\sin x}{x}\right)'=\frac{x\cos x-\sin x}{x^2}<0$），且 $\left.\frac{\sin x}{x}\right|_{\pi/2}=\frac2\pi<1$，故 $\frac{\sin x}{x}>\frac2\pi$，于是 $I_1=\int_0^{\pi/2}\frac{\sin x}{x}dx>1$。故 $1<I_1<I_2$。选 (B)。
【评注】比较 $I_1$ 与 1 时用 $1=\int_0^{\pi/2}\frac2\pi dx$，再比较被积函数与 $\frac2\pi$（由 $\frac{\sin x}{x}$ 递减得）。` },
      { n: 98, q: R`设 $\delta>0$，在区间 $(-\delta,\delta)$ 内 $f''(x)>0$，又 $f(0)=0$，$f'(0)=0$。记 $I=\int_{-\delta}^{\delta}f(x)\mathrm{d}x$，则
(A) $I=0$。 (B) $I>0$。 (C) $I<0$。 (D) 不确定。`, a: R`(B)`, sol: R`【分析】由 $f'(0)=0$、$f''(x)>0$ 知 $f'$ 单调增，故 $x\in(-\delta,0)$ 时 $f'(x)<0$、$x\in(0,\delta)$ 时 $f'(x)>0$，$f$ 在 $(-\delta,0)$ 减、$(0,\delta)$ 增，且 $f(0)=0$，故 $x\in(-\delta,\delta),x\neq0$ 时 $f(x)>0$，从而 $I>0$。选 (B)。
【评注】$f''>0$ 且 $f(0)=f'(0)=0$ ⇒ $f(x)>0$（$x\neq0$），即 $f$ 在 0 处取严格极小值 0。` },
      { n: 99, q: R`设 $f(x)$ 在 $[0,1]$ 连续，在 $(0,1)$ 可导且 $f'(x)<0$（$x\in(0,1)$），则
(A) 当 $0<x<1$ 时 $\int_0^xf(t)\mathrm{d}t>\int_0^1xf(t)\mathrm{d}t$。 (B) 当 $0<x<1$ 时 $\int_0^xf(t)\mathrm{d}t=\int_0^1xf(t)\mathrm{d}t$。
(C) 当 $0<x<1$ 时 $\int_0^xf(t)\mathrm{d}t<\int_0^1xf(t)\mathrm{d}t$。 (D) 以上结论均不正确。`, a: R`(A)`, sol: R`【分析】令 $F(x)=\int_0^xf(t)\mathrm{d}t-\int_0^1xf(t)\mathrm{d}t$（注意右端 $\int_0^1xf(t)dt=x\int_0^1f(t)dt$）。则 $F(0)=F(1)=0$，
$$F'(x)=f(x)-\int_0^1f(t)\mathrm{d}t,\qquad F''(x)=f'(x)<0\quad(0<x<1),$$
故 $F'$ 单调减，由 $F(0)=F(1)=0$ 及罗尔定理存在 $\xi\in(0,1)$ 使 $F'(\xi)=0$，于是 $F'>0$（$0<x<\xi$）、$F'<0$（$\xi<x<1$），从而 $F(x)>0$（$x\in(0,1)$）。即 $\int_0^xf>\int_0^1xf$。选 (A)。
【评注】注意 $\int_0^1xf(t)dt$ 中 $x$ 是常数，$=x\int_0^1f(t)dt$。` },
      { n: 100, q: R`下列用牛顿—莱布尼兹公式计算定积分的做法中，错误的做法一共有
① $\int_0^{\pi}\sqrt{\sin^3x-\sin^5x}\mathrm{d}x=\int_0^{\pi}\sin^{\frac32}x\cos x\,\mathrm{d}x=\dfrac25\sin^{\frac52}x\Big|_0^{\pi}=0$。
② $\int_{-1}^1\dfrac{\mathrm{d}x}{x}=\ln|x|\Big|_{-1}^1=0$。
③ $\int_0^{\pi}\dfrac{\sec^2x}{2+\tan^2x}\mathrm{d}x=\dfrac{1}{\sqrt2}\arctan\dfrac{\tan x}{\sqrt2}\Big|_0^{\pi}=0$。
④ $\int_{-1}^1\dfrac{\mathrm{d}}{\mathrm{d}x}\left(\arctan\dfrac1x\right)\mathrm{d}x=\arctan\dfrac1x\Big|_{-1}^1=\dfrac\pi2$。
(A) 1个。 (B) 2个。 (C) 3个。 (D) 4个。`, a: R`(D)`, sol: R`【分析】逐一分析，四种做法全部错误：
① $\frac25\sin^{5/2}x$ 只在 $\left[0,\frac\pi2\right]$ 上是原函数，在 $\left[\frac\pi2,\pi\right]$ 上应取 $-\frac25\sin^{5/2}x$（因 $|\cos x|$）。
② $\frac1x$ 在 $x=0$ 无定义且无界，$[-1,1]$ 上不存在定积分。
③ $\frac{1}{\sqrt2}\arctan\frac{\tan x}{\sqrt2}$ 在 $x=\frac\pi2$ 无定义，不是整个 $[0,\pi]$ 上的原函数。
④ $\arctan\frac1x$ 在 $x=0$ 无定义，不能在 $[-1,1]$ 上用牛顿—莱布尼兹公式。
四者皆错，选 (D)。
【评注】用牛顿—莱布尼兹公式前必须确认被积函数可积且原函数在整个区间上连续。` }
    ]
  };
})();
