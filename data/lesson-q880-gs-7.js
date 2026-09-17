window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q880_s6"] = {
    id: "q880_s6",
    ch: "880题 · 高数 · 第二章 一元函数微分学及其应用",
    title: "基础题·填空题",
    probTitle: "第二章 基础题 · 填空题（含原书解析）",
    book: "李林《精讲精练 880 题（数学二）》2026",
    problems: [
      { n: "(1)", q: R`$f(x)=\begin{cases}\arctan\dfrac1x,&x>0,\\ax+b,&x\leqslant0\end{cases}$ 在 $x=0$ 处可导，则 $a=\underline{\qquad},b=\underline{\qquad}$。`, a: R`$a=-1$，$b=\frac\pi2$`, sol: R`【解】由 $f(x)$ 在 $x=0$ 处可导知在 $x=0$ 处连续，$\lim\limits_{x\to0^-}f(x)=b$，$\lim\limits_{x\to0^+}f(x)=\lim\limits_{x\to0^+}\arctan\frac1x=\frac\pi2$，故 $b=\frac\pi2$，$f(0)=\frac\pi2$。
又 $f'_-(0)=a$，$f'_+(0)=\lim\limits_{x\to0^+}\frac{\arctan\frac1x-\frac\pi2}{x}\xlongequal{\text{洛必达}}\lim\limits_{x\to0^+}\frac{-\frac1{1+x^2}}{1}=-1$，由 $f'_-(0)=f'_+(0)$ 得 $a=-1$。` },
      { n: "(2)", q: R`设 $f(x)$ 在 $x=0$ 处可导，且 $f'(0)=2,f(0)=0$，则 $\lim\limits_{x\to0}\dfrac{f(1-\cos x)}{\ln(1+x^2)}=\underline{\qquad}$。`, a: R`$1$`, sol: R`【解】$\lim\limits_{x\to0}\frac{f(1-\cos x)}{\ln(1+x^2)}=\lim\limits_{x\to0}\frac{x^2}{\ln(1+x^2)}\cdot\frac{1-\cos x}{x^2}\cdot\frac{f(1-\cos x)-f(0)}{1-\cos x}=1\cdot\frac12\cdot f'(0)=\frac12\times2=1$。` },
      { n: "(3)", q: R`设 $y=f(x)$ 由方程 $x=\displaystyle\int_1^{y-x}\sin^2\left(\frac{\pi t}4\right)dt$ 确定，则 $\lim\limits_{n\to\infty}n\left[f\left(\frac1n\right)-1\right]=\underline{\qquad}$。`, a: R`$3$`, sol: R`【解】方程两边对 $x$ 求导：$1=(y'-1)\sin^2\left[\frac\pi4(y-x)\right]$，解得 $y'=\csc^2\left[\frac\pi4(y-x)\right]+1$。由 $x=0$ 时 $y=1$，得 $f(0)=1$，故 $y'|_{x=0}=3$，于是
$$\lim_{n\to\infty}n\left[f\left(\frac1n\right)-1\right]=\lim_{n\to\infty}\frac{f(\frac1n)-f(0)}{\frac1n}=f'(0)=3.$$` },
      { n: "(4)", q: R`设函数 $f(x)$ 有连续导数，且 $\lim\limits_{x\to0}\left[\dfrac{\sin x}{x^2}+\dfrac{f(x)}x\right]=2$，则 $f(x)$ 的一阶麦克劳林展开式为 $\underline{\qquad}$。`, a: R`$f(x)=-1+2x+o(x)$`, sol: R`【解】由 $\lim\limits_{x\to0}\frac{\sin x+xf(x)}{x^2}=2$ 知 $\sin x+xf(x)$ 与 $2x^2$ 是等价无穷小。又
$$\sin x+xf(x)=[x+o(x^2)]+x[f(0)+f'(0)x+o(x)]=[1+f(0)]x+f'(0)x^2+o(x^2),$$
故 $f(0)=-1,f'(0)=2$，所以 $f(x)=f(0)+f'(0)x+o(x)=-1+2x+o(x)$。` },
      { n: "(5)", q: R`设函数 $f(x)$ 在 $(-\infty,+\infty)$ 内连续，$f''(x)$ 的图形如图所示，则曲线 $y=f(x)$ 的拐点个数为 $\underline{\qquad}$。`, a: R`$2$`, sol: R`【解】由 $f''(x)$ 的图形可知 $f''(x_1)=f''(x_2)=0$，$f''(0)$ 不存在。在 $x=x_1$ 两侧 $f''$ 不变号，故不是拐点；在 $x=0,x=x_2$ 两侧 $f''$ 变号，故 $y=f(x)$ 有 2 个拐点。` },
      { n: "(6)", q: R`设 $f'(0)$ 存在，$f(0)=0$，且 $\lim\limits_{x\to0}\left[1+\dfrac{1-\cos f(x)}{\sin x}\right]^{\frac1x}=e$，则 $f'(0)=\underline{\qquad}$。`, a: R`$\pm\sqrt2$`, sol: R`【解】由已知得 $\lim\limits_{x\to0}\frac{1-\cos f(x)}{x\sin x}=1$。又当 $x\to0$ 时 $\sin x\sim x$，$1-\cos f(x)\sim\frac12f^2(x)$，故
$$1=\frac12\lim_{x\to0}\frac{f^2(x)}{x^2}=\frac12f'(0)\cdot f'(0),$$
解得 $f'(0)=\pm\sqrt2$。` },
      { n: "(7)", q: R`当 $x\to0$ 时，$x-\sin x\cos x$ 与 $ax^b$ 为等价无穷小，则 $a=\underline{\qquad},b=\underline{\qquad}$。`, a: R`$a=\frac23$，$b=3$`, sol: R`【解】$x-\sin x\cos x=x-\frac12\sin2x=x-\frac12\left[2x-\frac{(2x)^3}{3!}+o(x^3)\right]=\frac23x^3+o(x^3)\sim\frac23x^3$，故 $a=\frac23,b=3$。` },
      { n: "(8)", q: R`当 $x\to0$ 时，$e^x+\ln(1-x)-1$ 与 $x^n$ 是同阶无穷小，则 $n=\underline{\qquad}$。`, a: R`$3$`, sol: R`【解】$e^x=1+x+\frac12x^2+\frac16x^3+o(x^3)$，$\ln(1-x)=-x-\frac12x^2-\frac13x^3+o(x^3)$，故 $e^x+\ln(1-x)-1=-\frac16x^3+o(x^3)$，所以 $n=3$。` },
      { n: "(9)", q: R`曲线 $y=e^{-x^2}$ 的上凸区间是 $\underline{\qquad}$。`, a: R`$\left(-\frac{\sqrt2}2,\frac{\sqrt2}2\right)$`, sol: R`【解】$y''=2(2x^2-1)e^{-x^2}=0$ 得 $x=\pm\frac{\sqrt2}2$。当 $x\in\left(-\frac{\sqrt2}2,\frac{\sqrt2}2\right)$ 时 $y''<0$，故上凸区间为 $\left(-\frac{\sqrt2}2,\frac{\sqrt2}2\right)$。` },
      { n: "(10)", q: R`设 $f(x)=n^2e^{\frac xn}-(1+n)x$ 在 $x=x_n$ 处有水平切线，则 $\lim\limits_{n\to\infty}e^{x_n}=\underline{\qquad}$。`, a: R`$e$`, sol: R`【解】$f'(x)=ne^{\frac xn}-(1+n)$，由 $f'(x_n)=0$ 得 $x_n=n\ln\left(1+\frac1n\right)$，故 $\lim\limits_{n\to\infty}e^{x_n}=\lim\limits_{n\to\infty}e^{n\ln(1+\frac1n)}=e$。` },
      { n: "(11)", q: R`设曲线 $y=f(x)=\frac1{1+x^n}$，在其上点 $\left(1,\frac12\right)$ 处的切线与 $x$ 轴交于点 $(x_n,0)$，则 $\lim\limits_{n\to\infty}f(x_n)=\underline{\qquad}$。`, a: R`$\frac1{1+e^2}$`, sol: R`【解】$f'(1)=\frac{-nx^{n-1}}{(1+x^n)^2}\Big|_{x=1}=-\frac n4$，在 $\left(1,\frac12\right)$ 处切线为 $y-\frac12=-\frac n4(x-1)$。令 $y=0$ 得 $x_n=1+\frac2n$，故 $\lim\limits_{n\to\infty}f(x_n)=\lim\limits_{n\to\infty}\frac1{1+(1+\frac2n)^n}=\frac1{1+e^2}$。` },
      { n: "(12)", q: R`设连续函数 $y=f(x)$ 在点 $(1,0)$ 处满足 $\Delta y=\Delta x+o(\Delta x)$，则极限 $\lim\limits_{x\to0}\dfrac{\int_1^{e^x}f(t)dt}{x^2+\ln(1+x^3)}=\underline{\qquad}$。`, a: R`$\frac12$`, sol: R`【解】由 $\Delta y=\Delta x+o(\Delta x)$ 得 $f'(1)=1$，且 $f(1)=0$，$x^2+\ln(1+x^3)\sim x^2$。故
$$\text{原式}=\lim_{x\to0}\frac{\int_1^{e^x}f(t)dt}{x^2}\xlongequal{\text{洛必达}}\lim_{x\to0}\frac{e^xf(e^x)}{2x}=\frac12f'(1)=\frac12.$$` },
      { n: "(13)", q: R`设 $f(x)=x(2x-1)(3x-2)\cdots(100x-99)$，则 $f'(0)=\underline{\qquad}$。`, a: R`$-99!$`, sol: R`【解】记 $u(x)=x$，$v(x)=(2x-1)(3x-2)\cdots(100x-99)$，则 $f=uv$，$u(0)=0,u'(0)=1,v(0)=-99!$，故 $f'(0)=u'(0)v(0)+u(0)v'(0)=-99!$。` },
      { n: "(14)", q: R`设 $\dfrac{d}{dx}\left[f(x^3)\right]=\dfrac1x$，则 $f'(x)=\underline{\qquad}$。`, a: R`$\frac1{3x}$`, sol: R`【解】由 $\frac{d}{dx}[f(x^3)]=3x^2f'(x^3)=\frac1x$ 得 $f'(x^3)=\frac1{3x^3}$，所以 $f'(x)=\frac1{3x}$。` },
      { n: "(15)", q: R`设 $f(x)=\ln\left(\sqrt{1+x^2}-x\right)$，则 $f^{(5)}(0)=\underline{\qquad}$。`, a: R`$-9$`, sol: R`【解】$f'(x)=-\frac1{\sqrt{1+x^2}}=-(1+x^2)^{-\frac12}$，其在 $x=0$ 处的麦克劳林展开为 $f'(x)=-1+\frac12x^2-\frac38x^4-o(x^4)$，故 $f^{(5)}(0)=4!\times\left(-\frac38\right)=-9$。` },
      { n: "(16)", q: R`设 $f(x)$ 可导，且 $\lim\limits_{x\to0}\dfrac{f(1)-f(1-x)}{2x}=-1$，则曲线 $y=f(x)$ 在点 $(1,f(1))$ 处的切线斜率为 $\underline{\qquad}$。`, a: R`$-2$`, sol: R`【解】令 $-x=\Delta t$，$\lim\limits_{\Delta t\to0}\frac12\cdot\frac{f(1+\Delta t)-f(1)}{\Delta t}=\frac12f'(1)=-1$，故 $f'(1)=-2$，即切线斜率为 $-2$。` },
      { n: "(17)", q: R`设 $f(x)$ 是连续函数，且 $\lim\limits_{x\to1}\dfrac{f(2x-1)}{x-1}=1$，则 $\lim\limits_{t\to0}\dfrac{f[(1+\sin t)^2]-f(1+\sin t)}{t}=\underline{\qquad}$。`, a: R`$\frac12$`, sol: R`【解】由 $\lim\limits_{x\to1}\frac{f(2x-1)}{x-1}=1$ 得 $f(1)=0$，且 $2f'(1)=1$，故 $f'(1)=\frac12$。于是原式 $=2f'(1)-f'(1)=f'(1)=\frac12$。` },
      { n: "(18)", q: R`设 $\lim\limits_{x\to+\infty}\left(\sqrt{ax^2-x+3}-2x\right)=b$，其中 $a,b$ 为常数，$a>0$，则曲线 $y=\sqrt{ax^2-x+3}$ 在 $(0,+\infty)$ 内的斜渐近线方程为 $\underline{\qquad}$。`, a: R`$y=2x-\frac14$`, sol: R`【解】由 $\lim\limits_{x\to+\infty}x\left(\sqrt{a-\frac1x+\frac3{x^2}}-2\right)=b$ 知 $\sqrt a=2$，$a=4$。代入并有理化得 $b=\lim\limits_{x\to+\infty}\frac{-x+3}{\sqrt{4x^2-x+3}+2x}=\lim\limits_{x\to+\infty}\frac{-1+\frac3x}{\sqrt{4-\frac1x+\frac3{x^2}}+2}=-\frac14$，故斜渐近线为 $y=2x-\frac14$。` },
      { n: "(19)", q: R`设 $f(x)=\cos|x|+x^2|x|$ 在 $x=0$ 处存在的最高阶导数的阶数为 $\underline{\qquad}$。`, a: R`$2$`, sol: R`【解】在 $x=0$ 的邻域内 $\cos|x|=\cos x$，$x^2|x|$ 在 $x=0$ 处二阶可导、三阶不可导，故最高阶导数的阶数为 2。` },
      { n: "(20)", q: R`曲线 $x=a\cos^3t,y=a\sin^3t\ (a>0)$ 在 $t=\frac\pi4$ 处的曲率 $=\underline{\qquad}$。`, a: R`$\frac2{3a}$`, sol: R`【解】$\frac{dy}{dx}=\frac{3a\sin^2t\cos t}{-3a\cos^2t\sin t}=-\tan t$，$y''=\frac{1}{3a}\sec^4t\csc t$，故 $t=\frac\pi4$ 处曲率 $K=\frac{|y''|}{(1+y'^2)^{3/2}}=\left|\frac{2}{3a\sin2t}\right|=\frac2{3a}$。` },
      { n: "(21)", q: R`曲线 $y=2(x-1)^2$ 的最小曲率半径为 $\underline{\qquad}$。`, a: R`$\frac14$`, sol: R`【解】$y'=4(x-1)$，$y''=4$，曲率半径 $R=\frac{(1+y'^2)^{3/2}}{|y''|}=\frac{[1+16(x-1)^2]^{3/2}}4$，当 $x=1$ 时取最小值 $\frac14$。` },
      { n: "(22)", q: R`设函数 $y=y(x)$ 二阶可导，$\frac{dy}{dx}=(3-y)y^b\ (b>0)$，若曲线 $y=y(x)$ 有一个拐点为 $(a,2)$，则 $b=\underline{\qquad}$。`, a: R`$2$`, sol: R`【解】由 $(a,2)$ 为拐点知 $y(a)=2$，$y''(a)=0$。由 $\frac{dy}{dx}=(3-y)y^b$ 得 $\frac{d^2y}{dx^2}=\frac{dy}{dx}y^{b-1}[(3-y)b-y]$，其中 $\frac{dy}{dx}|_{x=a}=[3-y(a)][y(a)]^b=2^b\neq0$，故 $(3-2)b-2=0$，即 $b=2$。` },
      { n: "(23)", q: R`设 $f(x)$ 在 $(-\infty,+\infty)$ 内有定义，且对任意的 $x,y$，有 $f(x+y)-f(x)=[f(x)-1]y+\alpha(y)$，其中 $\lim\limits_{y\to0}\frac{\alpha(y)}y=0$，且 $f(0)=2$，则 $f(x)=\underline{\qquad}$。`, a: R`$e^x+1$`, sol: R`【解】视 $y$ 为 $\Delta x$，知 $f(x)$ 可微且 $d[f(x)]=[f(x)-1]dx$，即 $dx=\frac1{f(x)-1}d[f(x)]$。积分得 $x=\ln|f(x)-1|+C$，由 $f(0)=2$ 得 $C=0$，故 $f(x)=e^x+1$。` },
      { n: "(24)", q: R`设曲线 $y=x^2\ (0\leqslant x<+\infty)$ 在其上任一点 $(x,y)$ 处的曲率为 $\kappa$，曲线在区间 $[0,x]$ 上的一段弧长为 $s$，则 $\left.\frac{d\kappa}{ds}\right|_{x=\frac12}=\underline{\qquad}$。`, a: R`$-\frac32$`, sol: R`【解】$y'=2x,y''=2$，$\kappa=\frac{|y''|}{(1+y'^2)^{3/2}}=\frac2{\sqrt{(1+4x^2)^3}}$，$s=\int_0^x\sqrt{1+4t^2}dt$，故 $d\kappa=-\frac{24x}{\sqrt{(1+4x^2)^5}}dx$，$ds=\sqrt{1+4x^2}dx$，所以 $\frac{d\kappa}{ds}|_{x=\frac12}=-\frac{24x}{(1+4x^2)^3}\Big|_{x=\frac12}=-\frac32$。` },
      { n: "(25)", q: R`设 $y=y(x)$ 由参数方程 $\begin{cases}x=\frac t{1+t^3},\\y=\frac{t^2}{1+t^3}\end{cases}$ 确定，则曲线 $y=y(x)$ 的斜渐近线方程为 $\underline{\qquad}$。`, a: R`$x+y+\frac13=0$（即 $y=-x-\frac13$）`, sol: R`【解】当 $t\to-1$ 时 $x\to\infty$。$k=\lim\limits_{x\to\infty}\frac yx=\lim\limits_{t\to-1}\frac{t^2}{1+t^3}\cdot\frac{1+t^3}t=\lim\limits_{t\to-1}t=-1$，
$$b=\lim_{x\to\infty}(y-kx)=\lim_{t\to-1}\left(\frac{t^2}{1+t^3}+\frac t{1+t^3}\right)=\lim_{t\to-1}\frac{t(t+1)}{(t+1)(t^2-t+1)}=\lim_{t\to-1}\frac t{t^2-t+1}=-\frac13.$$
故斜渐近线为 $y=-x-\frac13$，即 $x+y+\frac13=0$。` }
    ]
  };
})();
