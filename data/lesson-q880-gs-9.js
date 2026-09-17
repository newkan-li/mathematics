window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q880_s8"] = {
    id: "q880_s8",
    ch: "880题 · 高数 · 第二章 一元函数微分学及其应用",
    title: "基础题·解答题（二）",
    probTitle: "第二章 基础题 · 解答题 (18)–(34)（含原书解析）",
    book: "李林《精讲精练 880 题（数学二）》2026",
    problems: [
      { n: "(18)", q: R`设 $f(x)$ 在 $[0,+\infty)$ 上连续，在 $(0,+\infty)$ 内可导，且 $0\leqslant f(x)\leqslant\frac x{1+x^2}$，证明：至少存在一点 $\xi\in(0,+\infty)$，使得 $f'(\xi)=\frac{1-\xi^2}{(1+\xi^2)^2}$。`, a: R`见证明`, sol: R`【证】令 $F(x)=f(x)-\frac x{1+x^2}$，则 $F(0)=0$，且由 $0\leqslant f(x)\leqslant\frac x{1+x^2}$ 及夹逼准则知 $f(0)=0$，$\lim\limits_{x\to+\infty}f(x)=0$，故 $\lim\limits_{x\to+\infty}F(x)=0$。由上一题结论，至少存在 $\xi\in(0,+\infty)$ 使 $F'(\xi)=0$，即 $f'(\xi)=\frac{1-\xi^2}{(1+\xi^2)^2}$。` },
      { n: "(19)", q: R`设 $f(x)$ 在 $[0,1]$ 上连续，在 $(0,1)$ 内可导，且 $f''(x)\leqslant0$，$f(0)=0$，证明：对任意 $x_0\in[0,1]$，有 $f(x_0)\leqslant2f\left(\frac{x_0}2\right)$。`, a: R`见证明`, sol: R`【证】对 $f$ 在 $\left[0,\frac{x_0}2\right]$、$\left[\frac{x_0}2,x_0\right]$ 上分别用拉格朗日中值定理：
$$f\left(\frac{x_0}2\right)-f(0)=f'(\xi_1)\frac{x_0}2\ \left(0<\xi_1<\frac{x_0}2\right),\quad f(x_0)-f\left(\frac{x_0}2\right)=f'(\xi_2)\frac{x_0}2\ \left(\frac{x_0}2<\xi_2<x_0\right).$$
两式相减得 $f(x_0)-2f\left(\frac{x_0}2\right)+f(0)=[f'(\xi_2)-f'(\xi_1)]\frac{x_0}2$。由 $f''(x)\leqslant0$ 知 $f'$ 单调减少，$\xi_1<\xi_2$ 故 $f'(\xi_2)-f'(\xi_1)\leqslant0$，又 $f(0)=0$，故 $f(x_0)\leqslant2f\left(\frac{x_0}2\right)$。` },
      { n: "(20)", q: R`设 $f(x)$ 在 $[0,1]$ 上可导，$f(0)=0$，$f(1)=1$，且 $f(x)$ 不恒等于 $x$，证明：存在一点 $\xi\in(0,1)$，使得 $f'(\xi)>1$。`, a: R`见证明`, sol: R`【证】由 $f(x)$ 不恒等于 $x$，存在 $x_0\in(0,1)$ 使 $f(x_0)\neq x_0$。若 $f(x_0)>x_0$，由拉格朗日中值定理存在 $\xi_1\in(0,x_0)$ 使 $f'(\xi_1)=\frac{f(x_0)-f(0)}{x_0}>\frac{x_0}{x_0}=1$；若 $f(x_0)<x_0$，存在 $\xi_2\in(x_0,1)$ 使 $f'(\xi_2)=\frac{f(1)-f(x_0)}{1-x_0}>\frac{1-x_0}{1-x_0}=1$。故存在 $\xi\in(0,1)$ 使 $f'(\xi)>1$。` },
      { n: "(21)", q: R`设 $f(x)$ 在 $[0,1]$ 上连续，在 $(0,1)$ 内可导，且 $f(0)=0,f(1)=1$。证明：
(Ⅰ) 存在一点 $x_0\in(0,1)$，使得 $f(x_0)=2(1-x_0)$；
(Ⅱ) 存在 $\xi$ 与 $\eta\in(0,1)$，且 $\xi\neq\eta$，使得 $f'(\xi)[1+f'(\eta)]=2$。`, a: R`见证明`, sol: R`【证】(Ⅰ) 令 $F(x)=f(x)-2(1-x)$，则 $F$ 在 $[0,1]$ 上连续，$F(0)=-2<0,F(1)=1>0$，由零点定理存在 $x_0\in(0,1)$ 使 $F(x_0)=0$，即 $f(x_0)=2(1-x_0)$。
(Ⅱ) 对 $f$ 在 $[0,x_0]$、$[x_0,1]$ 上分别用拉格朗日中值定理，存在 $\xi\in(0,x_0),\eta\in(x_0,1)$ 使
$$f'(\xi)=\frac{f(x_0)}{x_0}=\frac{2(1-x_0)}{x_0},\quad f'(\eta)=\frac{1-f(x_0)}{1-x_0}=\frac{2x_0-1}{1-x_0},$$
故 $f'(\xi)[1+f'(\eta)]=\frac{2(1-x_0)}{x_0}\left(1+\frac{2x_0-1}{1-x_0}\right)=2$。` },
      { n: "(22)", q: R`设 $f(x)$ 在 $[0,1]$ 上二阶可导，$|f''(x)|\leqslant1$，$f(x)$ 在 $(0,1)$ 内取得最小值，证明：$|f'(0)|+|f'(1)|\leqslant1$。`, a: R`见证明`, sol: R`【证】设 $f$ 在 $x_0\in(0,1)$ 取最小值，则 $f'(x_0)=0$。由拉格朗日中值定理
$$f'(x_0)-f'(0)=f''(\xi_1)x_0\ (0<\xi_1<x_0),\quad f'(1)-f'(x_0)=f''(\xi_2)(1-x_0)\ (x_0<\xi_2<1),$$
故 $|f'(0)|=|f''(\xi_1)|x_0\leqslant x_0$，$|f'(1)|=|f''(\xi_2)|(1-x_0)\leqslant1-x_0$，两式相加得 $|f'(0)|+|f'(1)|\leqslant1$。` },
      { n: "(23)", q: R`设 $f(x)$ 在 $[a,b]$ 上连续，在 $(a,b)$ 内可导，$f(a)=f(b)$，且 $f(x)$ 在 $[a,b]$ 上不恒为常数。证明：存在相异的 $\xi,\eta\in(a,b)$，使得 $f'(\xi)\cdot f'(\eta)<0$。`, a: R`见证明`, sol: R`【证】由 $f$ 不恒为常数且 $f(a)=f(b)$，存在 $c\in(a,b)$ 使 $f(c)\neq f(a)=f(b)$。不妨设 $f(c)>f(a)=f(b)$，由拉格朗日中值定理存在 $\xi\in(a,c)$、$\eta\in(c,b)$ 使 $f'(\xi)=\frac{f(c)-f(a)}{c-a}>0$，$f'(\eta)=\frac{f(b)-f(c)}{b-c}<0$，故 $f'(\xi)f'(\eta)<0$。` },
      { n: "(24)", q: R`设 $f(x)$ 在 $[0,1]$ 上二阶可导，且 $f(0)=f(1)=2\int_{\frac12}^1f(x)dx$，证明：
(Ⅰ) 至少存在一点 $\xi\in(0,1)$，使得 $f''(\xi)=0$；
(Ⅱ) 对 $\forall\lambda\in\mathbb R$，至少存在一点 $\eta\in(0,1)$，使得 $f''(\eta)-\lambda f'(\eta)=0$。`, a: R`见证明`, sol: R`【证】(Ⅰ) 由积分中值定理，存在 $c\in\left(\frac12,1\right)$ 使 $2\int_{1/2}^1f(x)dx=2f(c)\left(1-\frac12\right)=f(c)$，故 $f(0)=f(c)=f(1)$。在 $[0,c]$、$[c,1]$ 上用罗尔定理得 $f'(\xi_1)=0\ (0<\xi_1<c)$，$f'(\xi_2)=0\ (c<\xi_2<1)$。再在 $[\xi_1,\xi_2]$ 上用罗尔定理得 $f''(\xi)=0$，$\xi\in(\xi_1,\xi_2)\subset(0,1)$。
(Ⅱ) 令 $F(x)=e^{-\lambda x}f'(x)$，则 $F(\xi_1)=F(\xi_2)=0$，由罗尔定理存在 $\eta\in(\xi_1,\xi_2)\subset(0,1)$ 使 $F'(\eta)=0$，即 $e^{-\lambda\eta}[f''(\eta)-\lambda f'(\eta)]=0$，故 $f''(\eta)-\lambda f'(\eta)=0$。` },
      { n: "(25)", q: R`设 $f(x)$ 在 $[a,b]$ 上连续，在 $(a,b)$ 内可导，$0<a<b$，证明：存在 $\xi,\eta\in(a,b)$，使得 $2\eta f'(\xi)=(b+a)f'(\eta)$。`, a: R`见证明`, sol: R`【证】对 $f(x)$ 及 $x^2$ 在 $[a,b]$ 上用柯西中值定理，得 $\frac{f(b)-f(a)}{b^2-a^2}=\frac{f'(\eta)}{2\eta}$，$a<\eta<b$，即 $\frac{f(b)-f(a)}{b-a}=\frac{(b+a)f'(\eta)}{2\eta}$。再由拉格朗日中值定理存在 $\xi\in(a,b)$ 使 $f'(\xi)=\frac{f(b)-f(a)}{b-a}$，故 $2\eta f'(\xi)=(b+a)f'(\eta)$。` },
      { n: "(26)", q: R`设 $a,b$ 为正数，证明：至少存在一点 $\xi\in(a,b)$，使得 $\frac{ae^b-be^a}{a-b}=e^\xi(1-\xi)$。`, a: R`见证明`, sol: R`【证】左边分子、分母同除以 $ab$：$\frac{\frac{e^b}b-\frac{e^a}a}{\frac1b-\frac1a}=e^\xi(1-\xi)$。对 $F(x)=\frac{e^x}x$、$G(x)=\frac1x$ 在 $[a,b]$ 上用柯西中值定理：
$$\frac{\frac{e^b}b-\frac{e^a}a}{\frac1b-\frac1a}=\frac{\frac{\xi e^\xi-e^\xi}{\xi^2}}{-\frac1{\xi^2}}=e^\xi(1-\xi),\quad a<\xi<b,$$
故原等式成立。` },
      { n: "(27)", q: R`证明下列不等式：
(Ⅰ) 当 $0<x<\pi$ 时，有 $\sin\frac x2>\frac x\pi$；
(Ⅱ) 当 $e<a<b$ 时，有 $a^b>b^a$；
(Ⅲ) 当 $x>0$ 时，有 $(x^2-1)\ln x\geqslant(x-1)^2$；
(Ⅳ) 若 $\lim\limits_{x\to0}\frac{f(x)}x=1$，且 $f''(x)>0$，有 $f(x)\geqslant x$。`, a: R`见证明`, sol: R`【证】(Ⅰ) 令 $f(x)=\frac{\sin\frac x2}x-\frac1\pi$，则 $f'(x)=\frac{(\frac x2-\tan\frac x2)\cos\frac x2}{x^2}<0\ (0<x<\pi)$，$f$ 单调减少，故 $f(x)>f(\pi)=0$，即 $\sin\frac x2>\frac x\pi$。
(Ⅱ) 令 $f(x)=x\ln a-a\ln x\ (x\geqslant a)$，$f'(x)=\ln a-\frac ax$。由 $e<a<b$ 得 $\ln a>1$，故 $f'(x)>1-\frac ax\geqslant0$，$f$ 单调增加，$f(b)>f(a)$，即 $b\ln a>a\ln b$，故 $a^b>b^a$。
(Ⅲ) 令 $f(x)=(x^2-1)\ln x-(x-1)^2$，$f'(x)=2x\ln x-x+2-\frac1x$，$f'(1)=0$；$f''(x)=2\ln x+1+\frac1{x^2}$，$f''(1)>0$；$f'''(x)=\frac{2(x^2-1)}{x^3}$，故 $f''$ 在 $(0,1)$ 减、$(1,+\infty)$ 增，$x=1$ 处取最小值且 $f''(1)>0$，从而 $f''(x)>0$，$f'$ 单调增；由 $f'(1)=0$ 知 $f$ 在 $x=1$ 取最小值 $f(1)=0$，故 $f(x)\geqslant0$。
(Ⅳ) 由 $\lim\limits_{x\to0}\frac{f(x)}x=1$ 得 $f(0)=0,f'(0)=1$。由泰勒公式 $f(x)=f(0)+f'(0)x+\frac{f''(\xi)}2x^2=x+\frac{f''(\xi)}2x^2\geqslant x$（$f''>0$）。` },
      { n: "(28)", q: R`设 $x>0$，证明：$\left(1+\frac1{2x}\right)\left(1+\frac1x\right)^x>e$。`, a: R`见证明`, sol: R`【证】原不等式两边取对数，即证 $\ln\frac{2x+1}{2x}+\ln\left(1+\frac1x\right)^x>1$。令 $f(x)=\ln\frac{2x+1}{2x}+x\ln\frac{x+1}x-1$，则 $\lim\limits_{x\to+\infty}f(x)=\ln1+\ln e-1=0$，
$$f'(x)=-\frac1{(2x+1)x}+\ln\frac{x+1}x-\frac1{x+1},\quad\lim_{x\to+\infty}f'(x)=0,$$
$$f''(x)=\frac{4x+1}{(2x^2+x)^2}-\frac1{x^2+x}+\frac1{(x+1)^2}=\frac{5x^2+5x+1}{(2x^2+x)^2(x+1)^2}>0.$$
故 $f'(x)$ 单调增且 $\lim\limits_{x\to+\infty}f'(x)=0$，从而 $x>0$ 时 $f'(x)<0$，$f$ 单调减且 $\lim\limits_{x\to+\infty}f(x)=0$，故 $f(x)>0$，原不等式成立。` },
      { n: "(29)", q: R`求函数 $y=(x-1)e^{\frac{x+\arctan x}2}$ 的单调区间与极值，并求其渐近线。`, a: R`减区间 $(-1,0)$，增区间 $(-\infty,-1)$、$(0,+\infty)$；极大 $f(-1)=-2e^{\frac\pi4}$，极小 $f(0)=-e^{\frac\pi2}$；斜渐近线 $y=e^\pi(x-2)$ 与 $y=x-2$`, sol: R`【解】$y'=\frac{x^2+x}{1+x^2}e^{\frac{\pi}2+\arctan x}$（注：原书 $e$ 指数含 $\arctan x$ 项），令 $y'=0$ 得 $x=0,-1$。列表：$(-\infty,-1)$ 增，$x=-1$ 极大 $f(-1)=-2e^{\frac\pi4}$，$(-1,0)$ 减，$x=0$ 极小 $f(0)=-e^{\frac\pi2}$，$(0,+\infty)$ 增。
当 $x\to+\infty$：$k_1=\lim\limits_{x\to+\infty}\frac yx=e^\pi$，$b_1=\lim\limits_{x\to+\infty}(y-e^\pi x)=-2e^\pi$，故 $y=e^\pi(x-2)$；当 $x\to-\infty$：$k_2=1,b_2=-2$，故 $y=x-2$。无水平、铅直渐近线。` },
      { n: "(30)", q: R`设 $f(x)=\begin{cases}x^{2x},&x>0,\\x+2,&x\leqslant0,\end{cases}$ 求 $f(x)$ 的单调区间与极值。`, a: R`增区间 $(-\infty,0)$、$\left(\frac1e,+\infty\right)$，减区间 $\left(0,\frac1e\right)$；极大 $f(0)=2$，极小 $f\left(\frac1e\right)=e^{-\frac2e}$`, sol: R`【解】$\lim\limits_{x\to0^+}f(x)=\lim\limits_{x\to0^+}x^{2x}=e^{\lim\limits_{x\to0^+}2x\ln x}=1$，$\lim\limits_{x\to0^-}f(x)=2$，故 $f$ 在 $x=0$ 不连续、不可导。$f'(x)=\begin{cases}2x^{2x}(\ln x+1),&x>0,\\1,&x<0.\end{cases}$ 令 $f'(x)=0$ 得 $x=\frac1e$。
$x<0$ 时 $f'>0$；$0<x<\frac1e$ 时 $f'<0$，故 $f(0)=2$ 为极大值；$\frac1e<x$ 时 $f'>0$，故 $f\left(\frac1e\right)=e^{-\frac2e}$ 为极小值。增区间 $(-\infty,0)$、$\left(\frac1e,+\infty\right)$，减区间 $\left(0,\frac1e\right)$。` },
      { n: "(31)", q: R`设函数 $y=y(x)$ 由参数方程 $\begin{cases}x=t\ln t,\\y=\frac1t\ln t\end{cases}(t\geqslant1)$ 确定，求 $y=y(x)$ 的单调区间、凹凸区间、极值和拐点。`, a: R`增 $(0,e)$，减 $(e,+\infty)$；极大 $y(e)=\frac1e$；凹 $\left(\sqrt2e^{\sqrt2},+\infty\right)$，凸 $\left(0,\sqrt2e^{\sqrt2}\right)$；拐点 $\left(\sqrt2e^{\sqrt2},\frac{\sqrt2}{e^{\sqrt2}}\right)$`, sol: R`【解】$\frac{dy}{dx}=\frac{y'(t)}{x'(t)}=\frac{1-\ln t}{t^2(1+\ln t)}$，$\frac{d^2y}{dx^2}=\frac{2(\ln^2t-2)}{t^3(1+\ln t)^3}$。令 $\frac{dy}{dx}=0$ 得 $t=e$，令 $\frac{d^2y}{dx^2}=0$ 得 $t=e^{\sqrt2}$。
列表（$t=1$ 对应 $x=0$；$t=e$ 对应 $x=e$；$t=e^{\sqrt2}$ 对应 $x=\sqrt2e^{\sqrt2}$）：在 $(0,e)$ 上 $y'>0$ 增，$(e,+\infty)$ 上 $y'<0$ 减，故 $y(e)=\frac1e$ 为极大值；在 $\left(0,\sqrt2e^{\sqrt2}\right)$ 上 $y''<0$（凸），在 $\left(\sqrt2e^{\sqrt2},+\infty\right)$ 上 $y''>0$（凹），拐点 $\left(\sqrt2e^{\sqrt2},\frac{\sqrt2}{e^{\sqrt2}}\right)$。` },
      { n: "(32)", q: R`设函数 $y=f(x)$ 由参数方程 $\begin{cases}x=\frac1t,\\y=\frac1{\ln(1+t)}-\frac1t\end{cases}(0<t\leqslant1)$ 确定。证明：$\frac1{\ln2}-1\leqslant f(x)<\frac12$。`, a: R`见证明`, sol: R`【证】$\frac{dy}{dx}=\frac{dy/dt}{dt}\cdot\frac{dt}{dx}=\frac{t^2-(1+t)\ln^2(1+t)}{(1+t)\ln^2(1+t)}\ (0<t\leqslant1)$，且 $(1+t)\ln^2(1+t)>0$。令 $g(t)=t^2-(1+t)\ln^2(1+t)$，则 $g'(t)=2t-2\ln(1+t)-\ln^2(1+t)$，$g''(t)=\frac2{1+t}[t-\ln(1+t)]>0\ (t>0)$，故 $g'$ 单调增且 $g'_+(0)=0$，$g'(t)>0$，$g$ 单调增，$g(t)>g(0)=0$，所以 $f'(x)>0$，$f$ 单调增。
当 $0<t\leqslant1$ 时 $1\leqslant x<+\infty$，$f(1)=\frac1{\ln2}-1$，且
$$\lim_{x\to+\infty}f(x)=\lim_{t\to0^+}\left[\frac1{\ln(1+t)}-\frac1t\right]=\lim_{t\to0^+}\frac{t-\ln(1+t)}{t^2}=\frac12,$$
故 $\frac1{\ln2}-1\leqslant f(x)<\frac12$。` },
      { n: "(33)", q: R`对数曲线 $y=\ln x$ 上哪一点的曲率半径最小？求出该点的曲率半径。`, a: R`点 $\left(\frac{\sqrt2}2,-\frac12\ln2\right)$；最小曲率半径 $\frac{3\sqrt3}2$`, sol: R`【解】$y'=\frac1x,y''=-\frac1{x^2}$，曲率半径 $R=\frac{(1+y'^2)^{3/2}}{|y''|}=\frac{(1+x^2)^{3/2}}x$。令 $R'=\frac{(1+x^2)^{1/2}}{x^2}(2x^2-1)=0$ 得 $x=\frac{\sqrt2}2$，且 $R''=\frac{2x^4+x^2+2}{x^3\sqrt{1+x^2}}>0$，故 $x=\frac{\sqrt2}2$ 时曲率半径最小，点为 $\left(\frac{\sqrt2}2,-\frac12\ln2\right)$，最小曲率半径 $R=\frac{3\sqrt3}2$。` },
      { n: "(34)", q: R`证明：方程 $2^x-x^2-1=0$ 有且仅有三个不同实根。`, a: R`见证明`, sol: R`【证】令 $f(x)=2^x-x^2-1$，显然 $x=0,x=1$ 是两根；又 $f(2)=-1<0,f(5)=6>0$，由零点定理 $f=0$ 在 $(2,5)$ 内至少有一根，故至少三个实根。
又 $f'''(x)=2^x(\ln2)^3\neq0$，若 $f=0$ 有四个不同实根，反复用罗尔定理可得 $f'''(\xi)=0$，矛盾，故至多三个实根。综上，方程有且仅有三个不同实根。
【注】一般地，若 $f^{(n)}(x)\neq0$，则 $f(x)=0$ 至多有 $n$ 个不同实根。` }
    ]
  };
})();
