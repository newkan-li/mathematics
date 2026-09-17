window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q880_s11"] = {
    id: "q880_s11",
    ch: "880题 · 高数 · 第二章 一元函数微分学及其应用",
    title: "综合题·解答题（一）",
    probTitle: "第二章 综合题 · 解答题 (1)–(16)（含原书解析）",
    book: "李林《精讲精练 880 题（数学二）》2026",
    problems: [
      { n: "(1)", q: R`设 $f(x)=\begin{cases}ax^2+b\sin x+c,&x\leqslant0,\\\ln(1+x),&x>0,\end{cases}$ 问 $a,b,c$ 为何值时，$f(x)$ 在 $x=0$ 处一阶导数连续，但二阶导数不存在？`, a: R`$b=1$，$c=0$，$a\neq-\frac12$`, sol: R`【解】$\lim\limits_{x\to0^-}f(x)=c$，$\lim\limits_{x\to0^+}f(x)=0$，$f(0)=c$，由连续性 $c=0$。
$f'_+(0)=\lim\limits_{x\to0^+}\frac{\ln(1+x)}x=1$，$f'_-(0)=\lim\limits_{x\to0^-}\frac{ax^2+b\sin x}x=b$，由 $f'$ 在 $0$ 连续知 $b=1$，且
$$f'(x)=\begin{cases}2ax+\cos x,&x<0,\\1,&x=0,\\\frac1{1+x},&x>0.\end{cases}$$
$f''_+(0)=\lim\limits_{x\to0^+}\frac{\frac1{1+x}-1}x=-1$，$f''_-(0)=\lim\limits_{x\to0^-}\frac{2ax+\cos x-1}x=2a$，故当 $a\neq-\frac12$ 时 $f''(0)$ 不存在。` },
      { n: "(2)", q: R`设 $z=f[\varphi(x)+y^2]$，其中 $x,y$ 满足 $y+e^y=x$，$f,\varphi$ 均具有二阶导数，求 $\frac{dz}{dx},\frac{d^2z}{dx^2}$。`, a: R`见解析`, sol: R`【解】由 $y+e^y=x$ 两边对 $x$ 求导得 $y'+e^yy'=1$，即 $y'=\frac1{1+e^y}$，故 $y''=\frac{-e^y}{(1+e^y)^3}$。由 $z=f[\varphi(x)+y^2]$ 得
$$\frac{dz}{dx}=f'[\varphi(x)+y^2]\left[\varphi'(x)+2yy'\right]=f'[\varphi(x)+y^2]\left[\varphi'(x)+\frac{2y}{1+e^y}\right],$$
$$\frac{d^2z}{dx^2}=f''[\varphi(x)+y^2]\left[\varphi'(x)+\frac{2y}{1+e^y}\right]^2+f'[\varphi(x)+y^2]\left[\varphi''(x)+\frac2{(1+e^y)^2}-\frac{2ye^y}{(1+e^y)^3}\right].$$` },
      { n: "(3)", q: R`已知 $f(x)$ 是周期为 5 的连续函数，$f(x)$ 在 $x=1$ 的某邻域内满足 $f(1+\sin x)-3f(1-\sin x)=8x+\alpha(x)$，其中 $\alpha(x)$ 是当 $x\to0$ 时比 $x$ 高阶的无穷小，且 $f(x)$ 在 $x=1$ 处可导，求曲线 $y=f(x)$ 在点 $(6,f(6))$ 处的切线方程。`, a: R`$2x-y-12=0$`, sol: R`【解】令 $x\to0$，由 $f(1)-3f(1)=0$ 得 $f(1)=0$。又
$$\lim_{x\to0}\frac{f(1+\sin x)-3f(1-\sin x)}{\sin x}=\lim_{x\to0}\left[\frac{8x}{\sin x}+\frac{\alpha(x)}x\cdot\frac x{\sin x}\right]=8,$$
即 $\lim\limits_{x\to0}\left[\frac{f(1+\sin x)-f(1)}{\sin x}+3\frac{f(1-\sin x)-f(1)}{-\sin x}\right]=8$，故 $f'(1)+3f'(1)=8$，$f'(1)=2$。
由 $f(x+5)=f(x)$ 得 $f(6)=f(1)=0$，$f'(6)=f'(1)=2$，故切线为 $y=2(x-6)$，即 $2x-y-12=0$。` },
      { n: "(4)", q: R`设 $f(x)=nx(1-x)^n$（$n$ 为正整数），求 $f(x)$ 在 $[0,1]$ 上的最大值 $M(n)$ 及 $\lim\limits_{n\to\infty}M(n)$。`, a: R`$M(n)=\left(\frac n{n+1}\right)^{n+1}$；$\lim\limits_{n\to\infty}M(n)=e^{-1}$`, sol: R`【解】$f'(x)=n(1-x)^{n-1}[1-(n+1)x]$，令 $f'=0$ 得 $x_0=\frac1{n+1}$。当 $0<x<\frac1{n+1}$ 时 $f'>0$，当 $\frac1{n+1}<x<1$ 时 $f'<0$，故 $x_0$ 为极大值点；又 $f(0)=f(1)=0$，故
$$M(n)=f(x_0)=\frac n{n+1}\left(1-\frac1{n+1}\right)^n=\left(\frac n{n+1}\right)^{n+1},\quad\lim_{n\to\infty}M(n)=e^{-1}.$$` },
      { n: "(5)", q: R`设 $f(x)=\begin{cases}|x|^p\sin\frac1x,&x\neq0,\\0,&x=0.\end{cases}$ 问：
(Ⅰ) 当 $p$ 为何值时，$f(x)$ 在 $x=0$ 处连续？
(Ⅱ) 当 $p$ 为何值时，$f(x)$ 在 $x=0$ 处可导？
(Ⅲ) 当 $p$ 为何值时，$f'(x)$ 在 $x=0$ 处连续？`, a: R`(Ⅰ) $p>0$；(Ⅱ) $p>1$；(Ⅲ) $p>2$`, sol: R`【解】(Ⅰ) $p\leqslant0$ 时 $\lim\limits_{x\to0}|x|^p\sin\frac1x$ 不存在，$x=0$ 为间断点；$p>0$ 时 $\lim\limits_{x\to0}|x|^p\sin\frac1x=0=f(0)$，故 $p>0$ 时连续。
(Ⅱ) $p>1$ 时，$f'_-(0)=-\lim\limits_{x\to0^-}|x|^{p-1}\sin\frac1x=0$，$f'_+(0)=\lim\limits_{x\to0^+}|x|^{p-1}\sin\frac1x=0$，故 $f'(0)=0$，即 $p>1$ 时可导。
(Ⅲ) $p>2$ 时 $f'(0)=0$；$x>0$ 时 $f'(x)=px^{p-1}\sin\frac1x-x^{p-2}\cos\frac1x\to0\ (x\to0^+)$；$x<0$ 时同理 $f'(x)\to0\ (x\to0^-)$。故 $p>2$ 时 $f'$ 在 $x=0$ 处连续。` },
      { n: "(6)", q: R`设 $f(x)$ 在 $[0,1]$ 上二阶可导，且 $\lim\limits_{x\to0^+}\frac{f(x)}x=\lim\limits_{x\to1^-}\frac{f(x)}{x-1}=1$，证明：
(Ⅰ) 至少存在一点 $\xi\in(0,1)$，使得 $f(\xi)=0$；
(Ⅱ) 至少存在一点 $\eta\in(0,1)$，使得 $f''(\eta)=f(\eta)$。`, a: R`见证明`, sol: R`【证】(Ⅰ) 由 $\lim\limits_{x\to0^+}\frac{f(x)}x=1$ 得 $f(0)=0,f'_+(0)=1>0$，由保号性存在 $x_1\in(0,\delta_1)$ 使 $f(x_1)>0$；由 $\lim\limits_{x\to1^-}\frac{f(x)}{x-1}=1$ 得 $f(1)=0,f'_-(1)=1>0$，存在 $x_2\in(1-\delta_2,1)$ 使 $f(x_2)<0$。由零点定理存在 $\xi\in(x_1,x_2)\subset(0,1)$ 使 $f(\xi)=0$。
(Ⅱ) 令 $g(x)=f(x)e^{-x}$，由 $g(0)=g(\xi)=g(1)=0$，在 $[0,\xi]$、$[\xi,1]$ 上用罗尔定理得 $g'(\xi_1)=g'(\xi_2)=0$，即 $f'(\xi_1)-f(\xi_1)=0$，$f'(\xi_2)-f(\xi_2)=0$。令 $F(x)=e^x[f'(x)-f(x)]$，在 $[\xi_1,\xi_2]$ 上用罗尔定理得 $F'(\eta)=0$，即 $e^\eta[f''(\eta)-f(\eta)]=0$，故 $f''(\eta)=f(\eta)$。` },
      { n: "(7)", q: R`设 $f(x)$ 与 $g(x)$ 在 $[a,b]$ 上连续，在 $(a,b)$ 内可导，且 $f(a)=g(b)=0$，证明：至少存在一点 $\xi\in(a,b)$，使得 $f'(\xi)\int_\xi^bg(t)dt+g'(\xi)\int_a^\xi f(t)dt=0$。`, a: R`见证明`, sol: R`【证】令 $F(x)=f(x)\int_x^bg(t)dt+g(x)\int_a^xf(t)dt$，则 $F(a)=f(a)\int_a^bg(t)dt+g(a)\cdot0=0$，$F(b)=f(b)\cdot0+g(b)\int_a^bf(t)dt=0$。由罗尔定理存在 $\xi\in(a,b)$ 使 $F'(\xi)=0$，即
$$f'(\xi)\int_\xi^bg(t)dt-f(\xi)g(\xi)+g(\xi)f(\xi)+g'(\xi)\int_a^\xi f(t)dt=f'(\xi)\int_\xi^bg(t)dt+g'(\xi)\int_a^\xi f(t)dt=0.$$` },
      { n: "(8)", q: R`在 $x=0$ 的右邻域内，用多项式 $e+ax+bx^2$ 近似表示函数 $f(x)=(1+x)^{\frac1x}$，使其误差是比 $x^2$ 高阶的无穷小（$x\to0^+$），求 $a,b$ 的值。`, a: R`$a=-\frac12e$，$b=\frac{11}{24}e$`, sol: R`【解】$f(x)=(1+x)^{\frac1x}=e^{\frac{\ln(1+x)}x}$，由 $\ln(1+x)=x-\frac12x^2+\frac13x^3+o(x^3)$ 得
$$e^{\frac{\ln(1+x)}x}=e^{1-\frac12x+\frac13x^2+o(x^2)}=e\cdot e^{-\frac12x+\frac13x^2+o(x^2)}=e\left[1+\left(-\frac12x+\frac13x^2\right)+\frac1{2!}\left(-\frac12x\right)^2+o(x^2)\right]$$
$$=e-\frac12ex+\frac{11}{24}ex^2+o(x^2),$$
故 $a=-\frac12e,b=\frac{11}{24}e$。` },
      { n: "(9)", q: R`设 $f(x)$ 在 $[a,b]$ 上可导，证明：
(Ⅰ) 若 $f'_+(a)f'_-(b)<0$，则存在 $\xi\in(a,b)$，使得 $f'(\xi)=0$；
(Ⅱ) 若 $f'_+(a)\neq f'_-(b)$，则对介于 $f'_+(a)$ 和 $f'_-(b)$ 之间的每个实数 $\mu$，都存在 $\xi\in(a,b)$，使得 $f'(\xi)=\mu$。`, a: R`见证明`, sol: R`【证】(Ⅰ) 不妨设 $f'_+(a)<0,f'_-(b)>0$。由 $f'_+(a)<0$ 存在 $x_1\in(a,a+\delta_1)$ 使 $f(x_1)<f(a)$，故 $f(a)$ 不是最小值；由 $f'_-(b)>0$ 可推 $f(b)$ 不是最小值。故最小值在 $(a,b)$ 内某点 $\xi$ 取得，$f'(\xi)=0$。
(Ⅱ) 令 $g(x)=f(x)-\mu x$，则 $g'_+(a)g'_-(b)<0$，由 (Ⅰ) 存在 $\xi\in(a,b)$ 使 $g'(\xi)=0$，即 $f'(\xi)=\mu$。
【注】本题说明导函数具有介值定理性质（达布定理），不需要 $f'$ 连续。` },
      { n: "(10)", q: R`设函数 $f(x)$ 在区间 $[a,b]$ 上有二阶导数，且 $f(a)=f(b)=0$，$f'_+(a)f'_-(b)>0$。证明：在 $(a,b)$ 内存在两点 $\xi$ 与 $\eta$，使得 $f(\xi)=0$，$f''(\eta)=0$。`, a: R`见证明`, sol: R`【证】先证存在 $\xi\in(a,b)$ 使 $f(\xi)=0$。反证：若在 $(a,b)$ 内恒 $f(x)>0$，则 $f'_+(a)=\lim\limits_{x\to a^+}\frac{f(x)}{x-a}\geqslant0$，$f'_-(b)=\lim\limits_{x\to b^-}\frac{f(x)}{x-b}\leqslant0$，故 $f'_+(a)f'_-(b)\leqslant0$，与题设矛盾；若恒 $f(x)<0$ 同理矛盾。故存在 $\xi\in(a,b)$ 使 $f(\xi)=0$。
由 $f(a)=f(\xi)=f(b)$，在 $[a,\xi]$、$[\xi,b]$ 上用罗尔定理得 $f'(\eta_1)=f'(\eta_2)=0$，再对 $f'$ 在 $[\eta_1,\eta_2]$ 上用罗尔定理得存在 $\eta$ 使 $f''(\eta)=0$。` },
      { n: "(11)", q: R`设 $f(x)$ 在 $[0,1]$ 上连续，在 $(0,1)$ 内可导，已知在 $(0,1)$ 内，$\forall x_1<x_2$，有 $f\left(\frac{x_1+x_2}2\right)\geqslant\frac{f(x_1)+f(x_2)}2$，证明：在 $(0,1)$ 内存在 $\xi_1,\xi_2$，且 $\xi_1<\xi_2$，使得 $f'(\xi_1)\geqslant f'(\xi_2)$。`, a: R`见证明`, sol: R`【证】令 $x_0=\frac{x_1+x_2}2$，题设即 $f(x_0)-f(x_1)\geqslant f(x_2)-f(x_0)$。由拉格朗日中值定理
$$f(x_0)-f(x_1)=f'(\xi_1)(x_0-x_1),\quad f(x_2)-f(x_0)=f'(\xi_2)(x_2-x_0),$$
其中 $\xi_1\in(x_1,x_0),\xi_2\in(x_0,x_2)$，故 $\xi_1<\xi_2$。又 $x_0-x_1=x_2-x_0>0$，故 $f'(\xi_1)\geqslant f'(\xi_2)$。` },
      { n: "(12)", q: R`设 $f(x)$ 在 $[0,+\infty)$ 上有二阶导数，$f(0)=0$，$f'_+(0)<0$，$f''(x)\geqslant M>0$（$x>0$）。证明：$f(x)=0$ 在 $(0,+\infty)$ 内有唯一实根。`, a: R`见证明`, sol: R`【证】由 $f'_+(0)<0$ 存在 $x_1>0$ 使 $f(x_1)<0$。由 $f''(x)\geqslant M>0$ 得 $f'(x)=f'(0)+f''(\xi_1)x\geqslant f'(0)+Mx\to+\infty$，故存在 $x_0$ 使 $x>x_0$ 时 $f'(x)>1$；再由拉格朗日中值定理 $f(x)=f(x_0)+f'(\xi_2)(x-x_0)\geqslant f(x_0)+(x-x_0)\to+\infty$，存在 $x_2$ 使 $f(x_2)>0$。由零点定理 $f=0$ 在 $(x_1,x_2)$ 内至少一根。
若有两根 $a_1<a_2$，由罗尔定理存在 $b_1\in(0,a_1)$、$b_2\in(a_1,a_2)$ 使 $f'(b_1)=f'(b_2)=0$，再用罗尔定理存在 $c$ 使 $f''(c)=0$，与 $f''\geqslant M>0$ 矛盾。故唯一。` },
      { n: "(13)", q: R`设 $f(x)$ 在 $[0,1]$ 上二阶可导，$f(0)=f(1)=0$，$f''(x)>0$，且 $f(x)$ 在 $[0,1]$ 上的最小值为 $m<0$。
(Ⅰ) 证明：方程 $nf'(x)=m$（$n$ 为正整数）在 $x\in(0,1)$ 内有唯一实根 $x_n$；
(Ⅱ) 在第 (Ⅰ) 问的基础上，证明 $\lim\limits_{n\to\infty}x_n$ 存在，并求 $\lim\limits_{n\to\infty}f(x_n)$。`, a: R`(Ⅱ) $\lim\limits_{n\to\infty}x_n=x_0$，$\lim\limits_{n\to\infty}f(x_n)=m$`, sol: R`【解】(Ⅰ) 设 $f(x_0)=m$，则 $x_0\in(0,1)$，$f'(x_0)=0$。由拉格朗日中值定理存在 $\xi\in(0,x_0)$ 使 $f'(\xi)=\frac{m}{x_0}<\frac mn<f'(x_0)$；对 $f'$ 在 $[\xi,x_0]$ 上用介值定理，存在 $x_n\in(\xi,x_0)\subset(0,1)$ 使 $f'(x_n)=\frac mn$，即 $nf'(x_n)=m$。由 $f''>0$ 知 $f'$ 严格单调递增，故 $x_n$ 唯一。
(Ⅱ) $f'(x_n)=\frac mn<\frac m{n+1}=f'(x_{n+1})$，故 $x_n<x_{n+1}<x_0$，$\{x_n\}$ 单调递增有上界，$\lim\limits_{n\to\infty}x_n=A$ 存在。由 $f'$ 连续，$f'(A)=\lim\limits_{n\to\infty}\frac mn=0$，又 $f'$ 严格单调递增，故 $A=x_0$，从而 $\lim\limits_{n\to\infty}f(x_n)=f(x_0)=m$。` },
      { n: "(14)", q: R`设 $f(x)$ 在 $[0,1]$ 上连续，在 $(0,1)$ 内可导，$f(x)\neq0$，且 $\lim\limits_{x\to0^+}\frac{f(x+1)}x$ 存在，证明：
(Ⅰ) 存在 $\xi\in(0,1)$，使得 $\frac{1-e}{e\int_0^1f(t)dt}=-\frac1{e^\xi f(\xi)}$；
(Ⅱ) 存在 $\eta\in(0,1)$，使得 $e\int_0^1f(t)dt=(e-1)e^\xi(\xi-1)f'(\eta)$。`, a: R`见证明`, sol: R`【证】(Ⅰ) 由 $\lim\limits_{x\to0^+}\frac{f(x+1)}x$ 存在知 $\lim\limits_{x\to0^+}f(x+1)=0=f(1)$。对 $e^{-x}$ 与 $\int_0^xf(t)dt$ 在 $[0,1]$ 上用柯西中值定理，得 $\frac{e^{-1}-1}{\int_0^1f(t)dt}=-\frac{e^{-\xi}}{f(\xi)}$，$0<\xi<1$，即 $\frac{1-e}{e\int_0^1f(t)dt}=-\frac1{e^\xi f(\xi)}$。
(Ⅱ) 由拉格朗日中值定理 $f(1)-f(\xi)=f'(\eta)(1-\xi)$（$\xi<\eta<1$），即 $f(\xi)=(\xi-1)f'(\eta)$，代入 (Ⅰ) 整理得 $e\int_0^1f(t)dt=(e-1)e^\xi(\xi-1)f'(\eta)$。` },
      { n: "(15)", q: R`设 $f(x)$ 在 $[0,1]$ 上具有二阶导数，且 $|f(x)|\leqslant a,|f''(x)|\leqslant b$，其中 $a,b$ 都是非负常数，$c$ 是 $(0,1)$ 内任一点。
(Ⅰ) 写出 $f(x)$ 在 $x=c$ 处带拉格朗日余项的一阶泰勒公式；
(Ⅱ) 证明：$|f'(c)|\leqslant2a+\frac b2$。`, a: R`见证明`, sol: R`【解】(Ⅰ) $f(x)=f(c)+f'(c)(x-c)+\frac{f''(\xi)}{2!}(x-c)^2$，$\xi$ 介于 $x$ 与 $c$ 之间。
【证】(Ⅱ) 分别令 $x=0,x=1$：
$$f(0)=f(c)+f'(c)(0-c)+\frac{f''(\xi_1)}2c^2,\quad f(1)=f(c)+f'(c)(1-c)+\frac{f''(\xi_2)}2(1-c)^2,$$
两式相减得 $f(1)-f(0)=f'(c)+\frac12[f''(\xi_2)(1-c)^2-f''(\xi_1)c^2]$，故
$$|f'(c)|\leqslant|f(1)|+|f(0)|+\frac b2[(1-c)^2+c^2]\leqslant2a+\frac b2,$$
其中 $(1-c)^2+c^2\leqslant1$。` },
      { n: "(16)", q: R`证明下列结论：
(Ⅰ) 设 $f(x)=\int_0^x\frac{dt}{1+t^2}+\int_0^{\frac1x}\frac{dt}{1+t^2}\ (x>0)$，则 $f(x)=\frac\pi2$；
(Ⅱ) 当 $x\geqslant1$ 时，$\arctan x-\frac12\arccos\frac{2x}{1+x^2}=\frac\pi4$。`, a: R`见证明`, sol: R`【证】(Ⅰ) $f'(x)=\frac1{1+x^2}+\frac1{1+\frac1{x^2}}\left(-\frac1{x^2}\right)=0$，故 $f(x)\equiv c$。又 $f(1)=2\int_0^1\frac{dt}{1+t^2}=2\arctan t|_0^1=\frac\pi2$，故 $f(x)=\frac\pi2$。
(Ⅱ) 当 $x=1$ 时左边 $=\frac\pi4-\frac12\arccos1=\frac\pi4$。当 $x>1$ 时，令 $f(x)=\arctan x-\frac12\arccos\frac{2x}{1+x^2}-\frac\pi4$，则
$$f'(x)=\frac1{1+x^2}+\frac12\cdot\frac1{\sqrt{1-\frac{4x^2}{(1+x^2)^2}}}\cdot\frac{2(1-x^2)}{(1+x^2)^2}=\frac1{1+x^2}+\frac{1+x^2}{x^2-1}\cdot\frac{1-x^2}{(1+x^2)^2}=0,$$
故 $f(x)\equiv c$；又 $f$ 在 $[1,+\infty)$ 连续，$f(1)=0$，故 $f(x)=0$，即所证等式成立。` }
    ]
  };
})();
