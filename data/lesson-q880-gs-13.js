window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q880_s12"] = {
    id: "q880_s12",
    ch: "880题 · 高数 · 第二章 一元函数微分学及其应用",
    title: "综合题·解答题（二）",
    probTitle: "第二章 综合题 · 解答题 (17)–(32)（含原书解析）",
    book: "李林《精讲精练 880 题（数学二）》2026",
    problems: [
      { n: "(17)", q: R`设函数 $f(x)$ 有二阶连续导数，且 $(x-1)f''(x)=1-e^{1-x}+2(x-1)f'(x)$，证明：当 $x=x_0$ 是 $f(x)$ 的极值点时，$f(x)$ 在 $x_0$ 处取得极小值。`, a: R`见证明`, sol: R`【证】由 $x_0$ 为极值点知 $f'(x_0)=0$，代入条件得 $f''(x_0)=\frac{1-e^{1-x_0}}{x_0-1}$。当 $x_0\neq1$ 时，若 $x_0>1$ 则 $1-e^{1-x_0}>0$，$x_0-1>0$，$f''(x_0)>0$；若 $x_0<1$ 则 $1-e^{1-x_0}<0$，$x_0-1<0$，$f''(x_0)>0$，故为极小值。
当 $x_0=1$ 时，由 $f'(1)=0$ 及 $f''(1)=\lim\limits_{x\to1}f''(x)=\lim\limits_{x\to1}\frac{1-e^{1-x}}{x-1}=1>0$，故 $f$ 在 $x=1$ 处取得极小值。综上，$f$ 在 $x=x_0$ 处取得极小值。` },
      { n: "(18)", q: R`求椭圆 $x^2-xy+y^2=3$ 上纵坐标最大和最小的点。`, a: R`纵坐标最大点 $(1,2)$；最小点 $(-1,-2)$`, sol: R`【解】方程两边对 $x$ 求导：$2x-y-xy'+2yy'=0$，得 $y'=\frac{y-2x}{2y-x}$。令 $y'=0$ 得 $y=2x$，代入原方程得 $x=1,y=2$ 或 $x=-1,y=-2$。$y'$ 不存在的点为 $x=2y$，代入得 $x=2,y=1$ 或 $x=-2,y=-1$。
比较可得 $x=1$（$y=2$）为纵坐标最大值点，$x=-1$（$y=-2$）为纵坐标最小值点。即纵坐标最大的点为 $(1,2)$，最小的点为 $(-1,-2)$。` },
      { n: "(19)", q: R`设曲线 $y=\frac1{\sqrt x}$ 的一条切线与 $x$ 轴和 $y$ 轴围成一个平面图形 $D$，如图所示。
(Ⅰ) 记切点的横坐标为 $a$，求切线方程和图形 $D$ 的面积；
(Ⅱ) 当切点沿曲线趋于无穷远时，该面积的变化趋势如何？`, a: R`(Ⅰ) 切线 $y-\frac1{\sqrt a}=-\frac1{2\sqrt{a^3}}(x-a)$，面积 $S=\frac94\sqrt a$；(Ⅱ) $a\to+\infty$ 时 $S\to+\infty$；$a\to0^+$ 时 $S\to0$`, sol: R`【解】(Ⅰ) $y'=-\frac12x^{-\frac32}$，曲线在 $P\left(a,\frac1{\sqrt a}\right)$ 处切线为 $y-\frac1{\sqrt a}=-\frac1{2\sqrt{a^3}}(x-a)$，与坐标轴交于 $A(3a,0)$、$B\left(0,\frac3{2\sqrt a}\right)$，故 $D$ 的面积 $S=\frac12\cdot3a\cdot\frac3{2\sqrt a}=\frac94\sqrt a$。
(Ⅱ) $\lim\limits_{a\to+\infty}S=+\infty$；$\lim\limits_{a\to0^+}S=0$。` },
      { n: "(20)", q: R`设 $f(x)=\arctan x$，求 $f^{(n)}(0)$。`, a: R`$f^{(2k)}(0)=0$；$f^{(2k+1)}(0)=(-1)^k(2k)!$`, sol: R`【解】$f'(x)=\frac1{1+x^2}$，即 $(1+x^2)f'(x)=1$。两边求 $(n-1)$ 阶导，用莱布尼茨公式得
$$f^{(n)}(x)(1+x^2)+(n-1)f^{(n-1)}(x)\cdot2x+\frac{(n-1)(n-2)}2f^{(n-2)}(x)\cdot2=0,$$
令 $x=0$ 得 $f^{(n)}(0)=-(n-1)(n-2)f^{(n-2)}(0)$。由 $f(0)=0$ 得 $f^{(2k)}(0)=0$；由 $f'(0)=1$ 得 $f'''(0)=-2!$，$f^{(5)}(0)=4!$，归纳得 $f^{(2k+1)}(0)=(-1)^k(2k)!$。
【注】也可由 $\arctan x=x-\frac{x^3}3+\frac{x^5}5-\cdots+(-1)^k\frac{x^{2k+1}}{2k+1}+\cdots$ 得。` },
      { n: "(21)", q: R`设 $f(x)=a_1\sin x+a_2\sin2x+\cdots+a_n\sin nx$，其中 $a_1,a_2,\cdots,a_n$ 为实数，$n$ 为正整数。
(Ⅰ) 求 $f'(0)$；
(Ⅱ) 若 $|f(x)|\leqslant|\sin x|$，证明：$|a_1+2a_2+\cdots+na_n|\leqslant1$。`, a: R`(Ⅰ) $f'(0)=a_1+2a_2+\cdots+na_n$`, sol: R`【解】(Ⅰ) $f'(x)=a_1\cos x+2a_2\cos2x+\cdots+na_n\cos nx$，故 $f'(0)=a_1+2a_2+\cdots+na_n$。
【证】(Ⅱ) $|f'(0)|=\left|\lim\limits_{x\to0}\frac{f(x)-f(0)}{x-0}\right|=\lim\limits_{x\to0}\left|\frac{f(x)}x\right|\leqslant\lim\limits_{x\to0}\left|\frac{\sin x}x\right|=1$，故 $|a_1+2a_2+\cdots+na_n|\leqslant1$。` },
      { n: "(22)", q: R`已知 $f(x)$ 可导，证明：曲线 $y=f(x)\ (f(x)>0)$ 与曲线 $y=f(x)\sin x$ 在交点处相切。`, a: R`见证明`, sol: R`【证】设交点为 $(x_0,y_0)$，则 $f(x_0)=f(x_0)\sin x_0$，由 $f(x_0)>0$ 得 $\sin x_0=1$，即 $x_0=\frac\pi2+2n\pi$（$n$ 为整数）。
曲线 $y=f(x)$ 在交点处的斜率为 $f'(x_0)$；曲线 $y=f(x)\sin x$ 在交点处的斜率为 $[f(x)\sin x]'|_{x_0}=f'(x_0)\sin x_0+f(x_0)\cos x_0=f'(x_0)$（因 $\sin x_0=1,\cos x_0=0$）。故两曲线在交点处相切。` },
      { n: "(23)", q: R`确定 $k$ 的取值，使方程 $x^3+2x^2+x=k$ 有 $3$ 个不同实根。`, a: R`$-\frac4{27}<k<0$`, sol: R`【解】令 $f(x)=x^3+2x^2+x$，$f'(x)=3x^2+4x+1=(3x+1)(x+1)$，驻点 $x=-1,-\frac13$。$f''(x)=6x+4$，$f''(-1)=-2<0$，故 $f(-1)=0$ 为极大值；$f''\left(-\frac13\right)=2>0$，故 $f\left(-\frac13\right)=-\frac4{27}$ 为极小值。故当 $-\frac4{27}<k<0$ 时方程有三个不同实根。` },
      { n: "(24)", q: R`设 $R=R(x)$ 是抛物线 $y=\sqrt x$ 上任一点 $M(x,y)\ (x\geqslant1)$ 处的曲率半径，$s=s(x)$ 是该抛物线上介于点 $A(1,1)$ 与 $M$ 之间的弧长，计算 $3R\frac{d^2R}{ds^2}-\left(\frac{dR}{ds}\right)^2$ 的值。`, a: R`$9$`, sol: R`【解】$y'=\frac1{2\sqrt x}$，$y''=-\frac1{4\sqrt{x^3}}$，故 $R=\frac{(1+y'^2)^{3/2}}{|y''|}=\frac12(4x+1)^{3/2}$。$s=\int_1^x\sqrt{1+\frac1{4t}}dt$，则
$$\frac{dR}{ds}=\frac{dR}{dx}\cdot\frac{dx}{ds}=\frac{\frac32\cdot\frac12(4x+1)^{1/2}\cdot4}{\sqrt{1+\frac1{4x}}}=6\sqrt x,\quad \frac{d^2R}{ds^2}=\frac{d}{dx}(6\sqrt x)\cdot\frac{dx}{ds}=\frac6{\sqrt{4x+1}},$$
故 $3R\frac{d^2R}{ds^2}-\left(\frac{dR}{ds}\right)^2=3\cdot\frac12(4x+1)^{3/2}\cdot\frac6{\sqrt{4x+1}}-36x=9$。` },
      { n: "(25)", q: R`设 $f(x)$ 有二阶连续导数，$f(0)=f'(0)=0,f''(0)>0,u=u(x)$ 是曲线 $y=f(x)$ 在点 $(x,f(x))$ 处的切线在 $x$ 轴上的截距，求 $\lim\limits_{x\to0}\frac x{u(x)}$。`, a: R`$2$`, sol: R`【解】切线 $Y=f(x)+f'(x)(X-x)$，令 $Y=0$ 得截距 $u(x)=x-\frac{f(x)}{f'(x)}$，故
$$\lim_{x\to0}\frac x{u(x)}=\lim_{x\to0}\frac{xf'(x)}{xf'(x)-f(x)}\xlongequal{\text{洛必达}}\lim_{x\to0}\frac{f'(x)+xf''(x)}{xf''(x)}=1+\lim_{x\to0}\frac{f'(x)}{xf''(x)}=1+\frac{f''(0)}{f''(0)}=2.$$` },
      { n: "(26)", q: R`设 $f(x)$ 在 $x_0$ 的某邻域内有定义，证明：$f(x)$ 在 $x_0$ 处可导的充分必要条件是存在在 $x=x_0$ 处连续的函数 $g(x)$，使得 $f(x)-f(x_0)=(x-x_0)g(x)$。`, a: R`见证明`, sol: R`【证】充分性：由 $f(x)-f(x_0)=(x-x_0)g(x)$ 知当 $x\neq x_0$ 时 $g(x)=\frac{f(x)-f(x_0)}{x-x_0}$，由 $g$ 在 $x_0$ 连续得 $\lim\limits_{x\to x_0}\frac{f(x)-f(x_0)}{x-x_0}=\lim\limits_{x\to x_0}g(x)=g(x_0)$，故 $f'(x_0)=g(x_0)$。
必要性：设 $f$ 在 $x_0$ 可导，令 $g(x)=\begin{cases}\frac{f(x)-f(x_0)}{x-x_0},&x\neq x_0,\\f'(x_0),&x=x_0,\end{cases}$ 则 $\lim\limits_{x\to x_0}g(x)=f'(x_0)=g(x_0)$，$g$ 在 $x_0$ 连续。` },
      { n: "(27)", q: R`证明：方程 $\sum\limits_{k=0}^{2n+1}\frac{x^k}{k!}=0$（$n$ 为正整数）有且仅有一个实根。`, a: R`见证明`, sol: R`【证】令 $f(x)=\sum\limits_{k=0}^{2n+1}\frac{x^k}{k!}$，$F(x)=e^{-x}f(x)$，则 $F'(x)=-\frac{x^{2n+1}e^{-x}}{(2n+1)!}$。当 $x<0$ 时 $F'>0$，$F$ 单调增；$\lim\limits_{x\to-\infty}F(x)=-\infty$，$F(0)=1>0$，故在 $(-\infty,0)$ 内 $F=0$ 有且仅有一根。当 $x>0$ 时 $F'<0$，$F$ 单调减；$\lim\limits_{x\to+\infty}F(x)=0$，$F(0)=1>0$，故在 $(0,+\infty)$ 内无根。
故 $F=0$ 有且仅有一个实根；由 $e^{-x}>0$ 知 $f=0$ 与 $F=0$ 同根，故 $f(x)=0$ 有且仅有一个实根。
【注】方程 $\sum\limits_{k=0}^{2n}\frac{x^k}{k!}=0$ 无实根。` },
      { n: "(28)", q: R`设函数 $y=y(x)$ 由参数方程 $\begin{cases}x=t^3+3t+k,\\y=t^3-3t+k\end{cases}$ 确定，讨论方程 $y(x)=0$ 不同实根的个数。`, a: R`$-2<k<2$ 时 3 个；$k=\pm2$ 时 2 个；$k<-2$ 或 $k>2$ 时 1 个`, sol: R`【解】$y'(x)=\frac{3t^2-3}{3t^2+3}=\frac{t^2-1}{t^2+1}$，$y''(x)=\frac{4t}{3(t^2+1)^3}$。令 $y'=0$ 得 $t=\pm1$：$t=1$ 对应点 $(4+k,-2+k)$，$t=-1$ 对应点 $(-4+k,2+k)$。
$|t|>1$ 时 $y'>0$ 增，$|t|<1$ 时 $y'<0$ 减；故 $y(4+k)=-2+k$ 为极小值，$y(-4+k)=2+k$ 为极大值。当 $x\to+\infty$ 时 $y\to+\infty$，当 $x\to-\infty$ 时 $y\to-\infty$。故
① 当 $2+k>0$ 且 $-2+k<0$，即 $-2<k<2$ 时，$y(x)=0$ 有三个不同实根；
② 当 $k=-2$ 或 $k=2$ 时，有两个不同实根；
③ 当 $k<-2$ 或 $k>2$ 时，有一个实根。` },
      { n: "(29)", q: R`设 $f(x)$ 在区间 $(a,b)$ 内可导，$f'(x)$ 在 $(a,b)$ 内严格单调增加，对任意的 $x_1,x_2\in(a,b)$，且 $x_1\neq x_2,0<\lambda<1$。证明：$f[\lambda x_1+(1-\lambda)x_2]<\lambda f(x_1)+(1-\lambda)f(x_2)$。`, a: R`见证明`, sol: R`【证】不妨设 $x_1<x_2$，令 $x=\lambda x_1+(1-\lambda)x_2$，则 $x_1<x<x_2$。由拉格朗日中值定理
$$f(x)-f(x_1)=f'(\xi_1)(1-\lambda)(x_2-x_1)\ (x_1<\xi_1<x),\quad f(x_2)-f(x)=f'(\xi_2)\lambda(x_2-x_1)\ (x<\xi_2<x_2).$$
①$\times\lambda-$②$\times(1-\lambda)$ 得 $f(x)-\lambda f(x_1)-(1-\lambda)f(x_2)=\lambda(1-\lambda)(x_2-x_1)[f'(\xi_1)-f'(\xi_2)]$。由 $f'$ 严格单调增加知 $f'(\xi_1)<f'(\xi_2)$，故 $f(x)<\lambda f(x_1)+(1-\lambda)f(x_2)$，即所证。
【注】此即 $f$ 为凹函数的定义（$f''>0$）。` },
      { n: "(30)", q: R`设函数 $f(x)$ 在区间 $(a,b)$ 内可导，行列式 $|A|=\begin{vmatrix}1&x_1&f(x_1)\\1&x_2&f(x_2)\\1&x_3&f(x_3)\end{vmatrix}$。证明：导函数 $f'(x)$ 在 $(a,b)$ 内严格单调递增的充分必要条件是对 $(a,b)$ 内任意的 $x_1<x_2<x_3$，有 $|A|>0$。`, a: R`见证明`, sol: R`【证】将 $|A|$ 化简得
$$|A|=(x_2-x_1)[f(x_3)-f(x_2)]-(x_3-x_2)[f(x_2)-f(x_1)],$$
故 $|A|>0\iff\frac{f(x_3)-f(x_2)}{x_3-x_2}>\frac{f(x_2)-f(x_1)}{x_2-x_1}$。
必要性：由拉格朗日中值定理存在 $\xi_1\in(x_1,x_2),\xi_2\in(x_2,x_3)$ 使 $f'(\xi_1)=\frac{f(x_2)-f(x_1)}{x_2-x_1}$，$f'(\xi_2)=\frac{f(x_3)-f(x_2)}{x_3-x_2}$。由 $f'$ 严格递增及 $\xi_1<\xi_2$ 得 $f'(\xi_1)<f'(\xi_2)$，即 $|A|>0$。
充分性：任取 $x_1<x_0<x_2$，取 $s,t$ 使 $x_1<s<x_0<t<x_2$，由已知得 $\frac{f(s)-f(x_1)}{s-x_1}<\frac{f(x_0)-f(s)}{x_0-s}$ 与 $\frac{f(t)-f(x_0)}{t-x_0}<\frac{f(x_2)-f(t)}{x_2-t}$，令 $s\to x_1^+,t\to x_2^-$ 得 $f'(x_1)\leqslant\frac{f(x_0)-f(x_1)}{x_0-x_1}<\frac{f(x_2)-f(x_0)}{x_2-x_0}\leqslant f'(x_2)$，故 $f'(x_1)<f'(x_2)$。由任意性 $f'$ 严格递增。` },
      { n: "(31)", q: R`设 $f(x)$ 在 $[a,b]$ 上二阶可导，$|f'(x)|\leqslant k<1,f'(x_0)=0,f''(x_0)\neq0,x_0\in(a,b)$，且满足 $f(x_0)=x_0$，$\forall x_1\in[a,b],x_{n+1}=f(x_n)\ (n=1,2,\cdots)$。
(Ⅰ) 证明：$\lim\limits_{n\to\infty}x_n$ 存在，且 $\lim\limits_{n\to\infty}x_n=x_0$；
(Ⅱ) 求极限 $\lim\limits_{n\to\infty}\frac{x_{n+1}-x_0}{(x_n-x_0)^2}$。`, a: R`(Ⅱ) $\frac12f''(x_0)$`, sol: R`【证】(Ⅰ) 由拉格朗日中值定理 $|x_{n+1}-x_0|=|f(x_n)-f(x_0)|=|f'(\xi)||x_n-x_0|\leqslant k|x_n-x_0|\leqslant\cdots\leqslant k^n|x_1-x_0|$，由 $0\leqslant k<1$ 知 $k^n\to0$，故 $\lim\limits_{n\to\infty}x_n=x_0$。
【解】(Ⅱ) 由泰勒公式 $f(x_n)=f(x_0)+f'(x_0)(x_n-x_0)+\frac12f''(x_0)(x_n-x_0)^2+o[(x_n-x_0)^2]$，故
$$\lim_{n\to\infty}\frac{x_{n+1}-x_0}{(x_n-x_0)^2}=\lim_{n\to\infty}\frac{\frac12f''(x_0)(x_n-x_0)^2+o[(x_n-x_0)^2]}{(x_n-x_0)^2}=\frac12f''(x_0).$$` },
      { n: "(32)", q: R`设 $f(x)$ 在 $[0,1]$ 上连续，在 $(0,1)$ 内可导，且 $f(0)=0,f(1)=1$。证明：
(Ⅰ) 存在 $\xi_1$ 与 $\xi_2$ 满足 $0<\xi_1<\xi_2<1$，使得 $f'(\xi_1)+f'(\xi_2)=2$；
(Ⅱ) 在 $(0,1)$ 内存在 $\xi$ 与 $\eta$，使得 $\eta f'(\xi)=f(\eta)f'(\eta)$。`, a: R`见证明`, sol: R`【证】(Ⅰ) 由拉格朗日中值定理存在 $\xi_1\in\left(0,\frac12\right)$ 使 $f'(\xi_1)=2f\left(\frac12\right)$，存在 $\xi_2\in\left(\frac12,1\right)$ 使 $f'(\xi_2)=2\left[1-f\left(\frac12\right)\right]$，两式相加得 $f'(\xi_1)+f'(\xi_2)=2$，且 $\xi_1<\xi_2$。
(Ⅱ) 由拉格朗日中值定理存在 $\xi\in(0,1)$ 使 $f'(\xi)=\frac{f(1)-f(0)}{1-0}=1$。令 $F(x)=f^2(x)$，$G(x)=x^2$，则 $F(0)=G(0)=0$，$F(1)=G(1)=1$，由柯西中值定理存在 $\eta\in(0,1)$ 使 $\frac{f(\eta)f'(\eta)}\eta=\frac{F(1)-F(0)}{G(1)-G(0)}=1$，即 $\frac{f(\eta)f'(\eta)}\eta=1$。故 $f'(\xi)=\frac{f(\eta)f'(\eta)}\eta$，即 $\eta f'(\xi)=f(\eta)f'(\eta)$。` }
    ]
  };
})();
