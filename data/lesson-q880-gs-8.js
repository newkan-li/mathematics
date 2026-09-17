window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q880_s7"] = {
    id: "q880_s7",
    ch: "880题 · 高数 · 第二章 一元函数微分学及其应用",
    title: "基础题·解答题（一）",
    probTitle: "第二章 基础题 · 解答题 (1)–(17)（含原书解析）",
    book: "李林《精讲精练 880 题（数学二）》2026",
    problems: [
      { n: "(1)", q: R`计算下列函数的导数：
(Ⅰ) $y=\dfrac1{\sqrt x\cdot\sqrt[3]x}$；
(Ⅱ) $y=x^{a^a}+a^{x^a}+a^{a^x}\ (a>0)$；
(Ⅲ) $y=2^{|\sin x|}$；
(Ⅳ) $y=\ln|\tan x+\sec x|$。`, a: R`见解析`, sol: R`【解】(Ⅰ) $y=\frac1{\sqrt x\cdot\sqrt[3]x}=x^{-\frac49}$，所以 $y'=-\frac49x^{-\frac{13}9}$。
(Ⅱ) $y'=a^ax^{a^a-1}+a^{x^a}(\ln a)(x^a)'+a^{a^x}(\ln a)(a^x)'=a^ax^{a^a-1}+a(\ln a)x^{a-1}a^{x^a}+(\ln a)^2a^xa^{a^x}$。
【注】$x^{a^a}$ 视为幂函数。
(Ⅲ) 由 $|\sin x|=\sqrt{\sin^2x}$，$y=2^{|\sin x|}=2^{\sqrt{\sin^2x}}$，则
$$y'=2^{|\sin x|}(\ln2)\frac{2\sin x\cos x}{2\sqrt{\sin^2x}}=2^{|\sin x|}(\ln2)\sin2x\cdot\frac1{2|\sin x|}\quad(\sin x\neq0).$$
【注】当 $\sin x=0$ 时，$y=2^{|\sin x|}$ 的左、右导数分别存在且异号。
(Ⅳ) $y'=\frac1{\tan x+\sec x}(\sec^2x+\sec x\tan x)=\sec x$。
【注】$(\ln|x|)'=\frac1x\ (x\neq0)$。` },
      { n: "(2)", q: R`求下列函数的导数：
(Ⅰ) $y=(1+x^2)^{\sin x}$；
(Ⅱ) $y=\ln\dfrac1{\sqrt x+\sqrt{x^2+1}}$。`, a: R`见解析`, sol: R`【解】(Ⅰ) 取对数 $\ln|y|=\ln(1+x^2)\sin x$，两边对 $x$ 求导得 $\frac1yy'=\ln(1+x^2)\cos x+\frac{2x\sin x}{1+x^2}$，故
$$y'=(1+x^2)^{\sin x}\left[\ln(1+x^2)\cos x+\frac{2x\sin x}{1+x^2}\right].$$
(Ⅱ) $y=-\frac12\ln(x+\sqrt{x^2+1})$，$y'=-\frac12\cdot\frac1{x+\sqrt{x^2+1}}\left(1+\frac x{\sqrt{x^2+1}}\right)=-\frac1{2\sqrt{x^2+1}}$。` },
      { n: "(3)", q: R`求下列函数的微分：
(Ⅰ) $y=\varphi\left(\arctan\frac1x\right)$，其中 $\varphi$ 可导，求 $dy$；
(Ⅱ) 设 $y=y(x)$ 由 $e^{x+y}-y\sin x=0$ 确定，求 $dy$；
(Ⅲ) 设 $y=y(x)$ 由 $\begin{cases}x=2t,\\y=5t^2+1\end{cases}$ 确定，求 $dy$。`, a: R`见解析`, sol: R`【解】(Ⅰ) $dy=\varphi'\left(\arctan\frac1x\right)\cdot\frac1{1+(\frac1x)^2}\cdot\left(-\frac1{x^2}\right)dx=-\varphi'\left(\arctan\frac1x\right)\frac1{1+x^2}dx$。
(Ⅱ) $d(e^{x+y}-y\sin x)=0$，即 $e^{x+y}(dx+dy)-(\sin x\,dy+y\cos x\,dx)=0$，故 $dy=\frac{y\cos x-e^{x+y}}{e^{x+y}-\sin x}dx$。
(Ⅲ) 由 $t=\frac x2$ 得 $y=\frac{5x^2}4+1$，故 $dy=d\left(\frac{5x^2}4+1\right)=\frac52x\,dx$。` },
      { n: "(4)", q: R`设 $y=y(x)$ 由方程 $\sqrt{x^2+y^2}=e^{\arctan\frac yx}$ 确定，求 $\frac{d^2y}{dx^2}$。`, a: R`$\frac{d^2y}{dx^2}=\frac{2(x^2+y^2)}{(x-y)^3}$`, sol: R`【解】方程两边取对数得 $\frac12\ln(x^2+y^2)=\arctan\frac yx$，再对 $x$ 求导：
$$\frac12\cdot\frac{2x+2yy'}{x^2+y^2}=\frac1{1+(\frac yx)^2}\cdot\frac{y'x-y}{x^2},$$
解得 $y'=\frac{x+y}{x-y}$，且 $y''=\frac{2xy'-2y}{(x-y)^2}$。代入 $y'$ 得 $y''=\frac{2(x^2+y^2)}{(x-y)^3}$。` },
      { n: "(5)", q: R`设 $y=y(x)$ 由参数方程 $\begin{cases}x=t-\sin t,\\y=1-\cos t\end{cases}$ 确定，求 $\frac{dy}{dx},\frac{d^2y}{dx^2}$。`, a: R`$\frac{dy}{dx}=\frac{\sin t}{1-\cos t}$；$\frac{d^2y}{dx^2}=-\frac1{(1-\cos t)^2}$`, sol: R`【解】$\frac{dy}{dx}=\frac{dy/dt}{dx/dt}=\frac{\sin t}{1-\cos t}$，$\frac{d^2y}{dx^2}=\frac{d}{dt}\left(\frac{\sin t}{1-\cos t}\right)\cdot\frac1{dx/dt}=-\frac1{(1-\cos t)^2}$。` },
      { n: "(6)", q: R`求心形线 $r=1-\cos\theta$ 在对应于 $\theta=\frac\pi2$ 处的切线方程。`, a: R`$x+y=1$`, sol: R`【解】化参数方程 $x=(1-\cos\theta)\cos\theta$，$y=(1-\cos\theta)\sin\theta$，$\theta$ 为参数。
$$\frac{dy}{dx}\Big|_{\theta=\frac\pi2}=\frac{\cos\theta(1-\cos\theta)+\sin^2\theta}{-\sin\theta(1-\cos\theta)+\cos\theta\sin\theta}\Big|_{\theta=\frac\pi2}=-1,\quad x\left(\frac\pi2\right)=0,\ y\left(\frac\pi2\right)=1,$$
故切线为 $y-1=-(x-0)$，即 $x+y=1$。` },
      { n: "(7)", q: R`设 $f(x)=\begin{cases}x^k\sin\frac1x,&x\neq0,\\0,&x=0.\end{cases}$ 问：
(Ⅰ) 当 $k$ 为何值时，$f(x)$ 在 $x=0$ 处不可导？
(Ⅱ) 当 $k$ 为何值时，$f(x)$ 在 $x=0$ 处可导，但导函数不连续？
(Ⅲ) 当 $k$ 为何值时，$f(x)$ 在 $x=0$ 处导函数连续？`, a: R`(Ⅰ) $k\leqslant1$；(Ⅱ) $1<k\leqslant2$；(Ⅲ) $k>2$`, sol: R`【解】(Ⅰ) $\lim\limits_{x\to0}\frac{f(x)-f(0)}x=\lim\limits_{x\to0}x^{k-1}\sin\frac1x$，当 $k\leqslant1$ 时 $f'(0)$ 不存在；当 $k>1$ 时 $f'(0)=0$。
(Ⅱ) 当 $k>1$ 时 $f'(x)=\begin{cases}kx^{k-1}\sin\frac1x-x^{k-2}\cos\frac1x,&x\neq0,\\0,&x=0.\end{cases}$ 若 $k\leqslant2$，$\lim\limits_{x\to0}f'(x)$ 不存在，故 $1<k\leqslant2$ 时可导但导函数不连续。
(Ⅲ) 当 $k>2$ 时 $\lim\limits_{x\to0}f'(x)=0=f'(0)$，导函数连续。
【注】求 $f'(0)$ 应用导数定义，不能直接对 $x^k\sin\frac1x$ 求导后取 $x=0$。` },
      { n: "(8)", q: R`设 $f(x)$ 在 $(0,+\infty)$ 内满足 $f(xy)=f(x)+f(y)$，且 $f'(1)=1$，证明：$f(x)$ 在 $(0,+\infty)$ 内可导，并求 $f(x)$。`, a: R`$f(x)=\ln x$`, sol: R`【证】令 $x=y=1$ 得 $f(1)=0$。则
$$f'(x)=\lim_{\Delta x\to0}\frac{f(x+\Delta x)-f(x)}{\Delta x}=\lim_{\Delta x\to0}\frac{f\left(1+\frac{\Delta x}x\right)-f(1)}{\frac{\Delta x}x}\cdot\frac1x=\frac{f'(1)}x=\frac1x,$$
故 $f(x)$ 在 $(0,+\infty)$ 内可导。由 $f'(x)=\frac1x$ 积分得 $f(x)=\ln x+C$，由 $f(1)=0$ 得 $C=0$，故 $f(x)=\ln x$。` },
      { n: "(9)", q: R`设 $f(x)=\begin{cases}e^{-\frac1{x^2}},&x\neq0,\\0,&x=0,\end{cases}$ 求 $f^{(n)}(0)$。`, a: R`$f^{(n)}(0)=0$`, sol: R`【解】$f'(0)=\lim\limits_{x\to0}\frac{e^{-\frac1{x^2}}}{x}=0$；当 $x\neq0$ 时 $f'(x)=\frac2{x^3}e^{-\frac1{x^2}}$，故
$$f''(0)=\lim_{x\to0}\frac1x\cdot\frac2{x^3}e^{-\frac1{x^2}}=\lim_{x\to0}\frac2{x^4}e^{-\frac1{x^2}}=0.$$
同理 $f^{(k)}(0)=0\ (k=3,4,\cdots)$，所以 $f^{(n)}(0)=0$。
【注】利用洛必达法则，对任意正整数 $k$，$\lim\limits_{x\to0}\frac{e^{-\frac1{x^2}}}{x^k}=0$。` },
      { n: "(10)", q: R`设气体以 $100\ \mathrm{cm^3/s}$ 的速率注入球状气球，求当半径为 $10\mathrm{cm}$ 时，气球半径增加的速率。（设气体压力不变）`, a: R`$\frac1{4\pi}\ \mathrm{cm/s}$`, sol: R`【解】设 $t$ 时刻体积 $V=\frac43\pi r^3$，两边对 $t$ 求导 $\frac{dV}{dt}=4\pi r^2\frac{dr}{dt}$。由 $\frac{dV}{dt}=100,r=10$ 得 $100=4\pi\cdot100\frac{dr}{dt}$，故 $\frac{dr}{dt}=\frac1{4\pi}$，即半径增加速率为 $\frac1{4\pi}\ \mathrm{cm/s}$。` },
      { n: "(11)", q: R`一动点 $P$ 在曲线 $9y=4x^2$ 上运动，已知点 $P$ 横坐标变化速率为 $30\ \mathrm{cm/s}$，当点 $P$ 经过 $(3,4)$ 时，从原点到点 $P$ 的距离 $S$ 变化率为多少？（设坐标轴的单位长度为 $1\mathrm{cm}$）`, a: R`$82\ \mathrm{cm/s}$`, sol: R`【解】设 $P(x,y)$，$\frac{dx}{dt}=30$。由 $9y=4x^2$ 对 $t$ 求导得 $9\frac{dy}{dt}=8x\frac{dx}{dt}$，即 $\frac{dy}{dt}=\frac{80x}3$。又 $S=\sqrt{x^2+y^2}$，
$$\frac{dS}{dt}=\frac1{\sqrt{x^2+y^2}}\left(x\frac{dx}{dt}+y\frac{dy}{dt}\right)=\frac1{\sqrt{x^2+y^2}}\left(30x+\frac{80}3xy\right),$$
代入 $x=3,y=4$ 得 $\frac{dS}{dt}=82$，即 $S$ 的变化率为 $82\ \mathrm{cm/s}$。` },
      { n: "(12)", q: R`设 $f(x)$ 二阶可导，$f(0)=0,f'(0)=1,f''(0)=2$，求 $\lim\limits_{x\to0}\frac{f(x)-x}{x^2}$。`, a: R`$1$`, sol: R`【解】$\lim\limits_{x\to0}\frac{f(x)-x}{x^2}\xlongequal{\text{洛必达}}\lim\limits_{x\to0}\frac{f'(x)-1}{2x}=\lim\limits_{x\to0}\frac{f'(x)-f'(0)}{2x}=\frac12f''(0)=1$。
【注】不能第二次洛必达写成 $\lim\limits_{x\to0}\frac{f''(x)}2=\frac12f''(0)$，因题设未保证 $f''(x)$ 连续。也可用泰勒公式 $f(x)=x+x^2+o(x^2)$ 直接得结果。` },
      { n: "(13)", q: R`设函数 $f(x)$ 在 $x=0$ 处连续，且 $\lim\limits_{x\to0}\frac{xf(x)-(1+x)^{2x}+1}{x^2}=1$。证明 $f(x)$ 在 $x=0$ 处可导，并求 $f'(0)$。`, a: R`$f'(0)=3$`, sol: R`【证】由题设 $\frac{xf(x)-(1+x)^{2x}+1}{x^2}=1+\alpha\ (\alpha\to0)$，即 $xf(x)-e^{2x\ln(1+x)}+1=x^2+x^2\alpha$，故
$$f(x)=x+x\alpha+\frac1x\left[e^{2x\ln(1+x)}-1\right].$$
由 $f$ 在 $x=0$ 连续，$f(0)=\lim\limits_{x\to0}f(x)=\lim\limits_{x\to0}\frac{e^{2x\ln(1+x)}-1}x=\lim\limits_{x\to0}\frac{2x\ln(1+x)}x=0$。于是
$$f'(0)=\lim_{x\to0}\frac{f(x)-f(0)}x=1+\lim_{x\to0}\frac{e^{2x\ln(1+x)}-1}{x^2}=1+\lim_{x\to0}\frac{2x^2}{x^2}=3.$$` },
      { n: "(14)", q: R`证明：$f(x)=\begin{cases}1+x^2,&0\leqslant x\leqslant1,\\1-x^2,&-1\leqslant x<0\end{cases}$ 满足拉格朗日中值定理，并求满足定理的 $\xi$ 的值。`, a: R`$\xi_1=\frac12,\xi_2=-\frac12$`, sol: R`【证】由 $\lim\limits_{x\to0^+}f(x)=\lim\limits_{x\to0^-}f(x)=1=f(0)$ 知 $f$ 在 $x=0$ 连续，故 $f$ 在 $[-1,1]$ 上连续。又 $f'_+(0)=\lim\limits_{x\to0^+}\frac{(1+x^2)-1}x=0$，$f'_-(0)=\lim\limits_{x\to0^-}\frac{(1-x^2)-1}x=0$，故 $f$ 在 $(-1,1)$ 内可导，满足拉格朗日中值定理。
由 $f'(\xi)=\frac{f(1)-f(-1)}{1-(-1)}=1$，而 $f'(x)=\begin{cases}2x,&0\leqslant x\leqslant1,\\-2x,&-1\leqslant x<0,\end{cases}$ 解得 $\xi_1=\frac12,\xi_2=-\frac12$。` },
      { n: "(15)", q: R`设 $f(x)$ 在 $[a,b]$ 上连续，在 $(a,b)$ 内可导，$0<a<b$，且 $f(a)=f(b)=0$，证明：
(Ⅰ) 至少存在一点 $\xi\in(a,b)$，使得 $2f(\xi)+\xi f'(\xi)=0$；
(Ⅱ) 至少存在一点 $\eta\in(a,b)$，使得 $2\eta f(\eta)-f'(\eta)=0$。`, a: R`见证明`, sol: R`【证】(Ⅰ) 令 $F(x)=x^2f(x)$，则 $F(a)=F(b)=0$，由罗尔定理存在 $\xi\in(a,b)$ 使 $F'(\xi)=0$，即 $2\xi f(\xi)+\xi^2f'(\xi)=0$，故 $2f(\xi)+\xi f'(\xi)=0$。
(Ⅱ) 令 $G(x)=e^{-x^2}f(x)$，则 $G(a)=G(b)=0$，由罗尔定理存在 $\eta\in(a,b)$ 使 $G'(\eta)=0$，即 $-2\eta e^{-\eta^2}f(\eta)+e^{-\eta^2}f'(\eta)=0$，故 $2\eta f(\eta)-f'(\eta)=0$。` },
      { n: "(16)", q: R`设 $f(x)$ 在 $[a,b]$ 上连续，在 $(a,b)$ 内可导，$0<a<b$，且 $f(a)=0$，证明：至少存在一点 $\xi\in(a,b)$，使得 $af(\xi)+(\xi-b)f'(\xi)=0$。`, a: R`见证明`, sol: R`【证】令 $F(x)=(b-x)^af(x)$，由 $F(a)=F(b)=0$，由罗尔定理存在 $\xi\in(a,b)$ 使 $F'(\xi)=0$，即 $(b-\xi)^{a-1}[(b-\xi)f'(\xi)-af(\xi)]=0$，故 $(b-\xi)f'(\xi)-af(\xi)=0$，即 $af(\xi)+(\xi-b)f'(\xi)=0$。` },
      { n: "(17)", q: R`设 $f(x)$ 在 $[0,+\infty)$ 上连续，在 $(0,+\infty)$ 内可导，且 $f(0)=0$，$\lim\limits_{x\to+\infty}f(x)=0$，证明：至少存在一点 $\xi\in(0,+\infty)$，使得 $f'(\xi)=0$。`, a: R`见证明`, sol: R`【证】若 $f(x)\equiv0$，结论显然。否则存在 $x_0\in(0,+\infty)$ 使 $f(x_0)\neq0$，不妨设 $f(x_0)>0$。由 $f(0)=0$ 及 $\lim\limits_{x\to+\infty}f(x)=0$，存在充分大的 $X>x_0$ 使 $f(X)<f(x_0)$，则 $f$ 在 $[0,X]$ 上的最大值在 $(0,X)$ 内某点 $\xi$ 取到，由费马定理 $f'(\xi)=0$。若 $f(x_0)<0$ 同理考虑最小值。故存在 $\xi\in(0,+\infty)$ 使 $f'(\xi)=0$。` }
    ]
  };
})();
