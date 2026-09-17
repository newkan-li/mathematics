window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q660_s15"] = {
    id: "q660_s15",
    ch: "660题 · 填空题 · 高等数学",
    title: "填空题 第 351–375 题",
    probTitle: "填空题（含原书详解）",
    book: "《数学基础过关660题（数学二）》",
    problems: [
      { n: 351, q: R`设函数 $f(x)$ 在 $x=0$ 处连续，且 $\lim\limits_{x\to0}\dfrac{f(x)}{e^x-1}=2$，则曲线 $y=f(x)$ 在 $x=0$ 处的法线方程为 $\underline{\qquad}$。`, a: R`$y=-\frac12x$`, sol: R`【分析】由连续性 $\lim\limits_{x\to0}f(x)=f(0)$，又 $\lim\limits_{x\to0}\frac{f(x)}{e^x-1}=2\Rightarrow\lim\limits_{x\to0}f(x)=0$，故 $f(0)=0$。
$$f'(0)=\lim_{x\to0}\frac{f(x)-f(0)}{x}=\lim_{x\to0}\frac{f(x)}{e^x-1}\cdot\frac{e^x-1}{x}=2\times1=2,$$
故法线斜率为 $-\frac12$，法线方程 $y=-\frac12x$。` },
      { n: 352, q: R`设 $y=y(x)$ 由参数方程 $\begin{cases}x=\dfrac12\ln(1+t^2)\\y=\arctan t\end{cases}$ 确定，则 $\dfrac{\mathrm dy}{\mathrm dx}=\underline{\qquad}$，$\dfrac{\mathrm d^2y}{\mathrm dx^2}=\underline{\qquad}$，$y=y(x)$ 在任意点处的曲率 $K=\underline{\qquad}$。`, a: R`$\frac1t$；$-\frac{1+t^2}{t^3}$；$\frac1{\sqrt{1+t^2}}$`, sol: R`【分析】$\frac{dy}{dx}=\frac{y'_t}{x'_t}=\frac{\frac1{1+t^2}}{\frac{t}{1+t^2}}=\frac1t$；
$$\frac{d^2y}{dx^2}=\frac{\left(\frac1t\right)'_t}{x'_t}=-\frac1{t^2}\cdot\frac{1+t^2}{t}=-\frac{1+t^2}{t^3};$$
$$K=\frac{|y''|}{(1+y'^2)^{3/2}}=\frac{\frac{1+t^2}{|t|^3}}{\left(1+\frac1{t^2}\right)^{3/2}}=\frac1{\sqrt{1+t^2}}.$$
【评注】注意 $\frac{d^2y}{dx^2}=\frac{(\frac{dy}{dx})'_t}{x'_t}$，易犯的错误是漏除 $x'_t$。` },
      { n: 353, q: R`设 $y=y(x)$ 由方程 $y=\sin(x+y)$ 确定，则 $\dfrac{\mathrm d^2y}{\mathrm dx^2}=\underline{\qquad}$。`, a: R`$-\frac{y}{(1-\cos(x+y))^3}$`, sol: R`【分析】两边对 $x$ 求导：$\frac{dy}{dx}=\cos(x+y)\left(1+\frac{dy}{dx}\right)$，解出 $\frac{dy}{dx}=\frac{\cos(x+y)}{1-\cos(x+y)}$（即 $1+y'=\frac1{1-\cos(x+y)}$）。
再求导：$y''=\frac{d}{dx}\left(\frac1{1-\cos(x+y)}\right)=-\frac{\sin(x+y)}{(1-\cos(x+y))^2}(1+y')$，代入 $1+y'$ 得
$$y''=-\frac{\sin(x+y)}{(1-\cos(x+y))^3}=-\frac{y}{(1-\cos(x+y))^3}.$$` },
      { n: 354, q: R`作变量替换 $x=e^t$，方程 $ax^2\dfrac{\mathrm d^2y}{\mathrm dx^2}+bx\dfrac{\mathrm dy}{\mathrm dx}+cy=0$ 简化为 $\underline{\qquad}$。`, a: R`$a\frac{\mathrm d^2y}{\mathrm dt^2}+(b-a)\frac{\mathrm dy}{\mathrm dt}+cy=0$`, sol: R`【分析】$t=\ln x$，$\frac{dy}{dx}=\frac1x\frac{dy}{dt}$，$\frac{d^2y}{dx^2}=-\frac1{x^2}\frac{dy}{dt}+\frac1{x^2}\frac{d^2y}{dt^2}$。代入原方程得 $a\frac{d^2y}{dt^2}+(b-a)\frac{dy}{dt}+cy=0$。
【评注】$x<0$ 时令 $x=-e^t$，即 $t=\ln|x|$，结论相同。` },
      { n: 355, q: R`设 $f(x)=\ln\dfrac{1-2x}{1+3x}$，$n\geqslant2$，则 $f^{(n)}(0)=\underline{\qquad}$。`, a: R`$(-1)^{n-1}(n-1)!\left[(-2)^n-3^n\right]$`, sol: R`【分析】$f(x)=\ln(1-2x)-\ln(1+3x)$，由 $(\ln(1+ax))^{(n)}=(-1)^{n-1}a^n(n-1)!(1+ax)^{-n}$ 得
$$f^{(n)}(0)=(-1)^{n-1}(n-1)!\left[(-2)^n-3^n\right].$$
【评注】也可由 $\ln(1+t)$ 的泰勒展开比较系数得 $f^{(n)}(0)=n!a_n$。` },
      { n: 356, q: R`设 $f(x)=x^{100}e^{x^2}$，则 $f^{(200)}(0)=\underline{\qquad}$。`, a: R`$\frac{200!}{50!}$`, sol: R`【分析】$f(x)=x^{100}\left(\sum\limits_{k=0}^{n}\frac{x^{2k}}{k!}+o(x^{2n})\right)=\sum\limits_{k=0}^{n}\frac{x^{2k+100}}{k!}+o(x^{2n+100})$。取 $n=50$，$x^{200}$ 项系数为 $\frac1{50!}$，故 $f^{(200)}(0)=200!\cdot\frac1{50!}$。
【评注】泰勒公式唯一性：$f(x)=A_0+A_1(x-x_0)+\cdots+A_n(x-x_0)^n+o((x-x_0)^n)\Rightarrow f^{(n)}(x_0)=n!A_n$。` },
      { n: 357, q: R`设有界函数 $f(x)$ 在 $(c,+\infty)$ 内可导，且 $\lim\limits_{x\to+\infty}f'(x)=b$，则 $b=\underline{\qquad}$。`, a: R`$0$`, sol: R`【分析】若 $b>0$（或 $<0$），取 $a$ 满足 $0<a<b$，则存在 $x_0$，当 $x\geqslant x_0$ 时 $f'(x)>a$。在 $[x_0,x]$ 上用拉格朗日中值定理得 $f(x)>a(x-x_0)+f(x_0)\to+\infty$，与 $f$ 有界矛盾。故 $b=0$。
【评注】也可由 $\lim\limits_{x\to+\infty}\frac{f(x)}{x}=\lim f'(x)=b$ 及 $f$ 有界知 $\lim\frac{f(x)}{x}=0$，故 $b=0$。` },
      { n: 358, q: R`设函数 $f(x)$ 在 $(a,+\infty)$ 内可导，且任意 $x\in(a,+\infty)$ 有 $|f'(x)|\leqslant M$（$M$ 为常数），则 $\lim\limits_{x\to\infty}\dfrac{f(x)}{x^2}=\underline{\qquad}$。`, a: R`$0$`, sol: R`【分析】取定点 $x_0\in(a,+\infty)$，由拉格朗日中值定理
$$\left|\frac{f(x)}{x^2}\right|=\left|\frac{f'( \xi)(x-x_0)+f(x_0)}{x^2}\right|\leqslant\frac{M|x-x_0|+|f(x_0)|}{x^2}\to0,$$
由夹逼定理得 $\lim\limits_{x\to+\infty}\frac{f(x)}{x^2}=0$。
【评注】也可用洛必达法则 $\lim\frac{f(x)}{x^2}=\lim\frac{f'(x)}{2x}=0$。` },
      { n: 359, q: R`数列极限 $I=\lim\limits_{n\to\infty}n^2\left(\arctan\dfrac2n-\arctan\dfrac2{n+1}\right)=\underline{\qquad}$。`, a: R`$2$`, sol: R`【分析】用拉格朗日中值定理，$f(x)=\arctan x$ 在 $\left[\frac2{n+1},\frac2n\right]$ 上：
$$\arctan\frac2n-\arctan\frac2{n+1}=f'(\xi)\cdot\frac{2}{n(n+1)}=\frac1{1+\xi^2}\cdot\frac2{n(n+1)}\sim\frac2{n(n+1)},$$
其中 $\frac1{1+\xi^2}\to1$。故 $I=\lim\limits_{n\to\infty}n^2\cdot\frac2{n(n+1)}=2$。
【评注】$\infty\cdot0$ 型 $x_n[f(y_n)-f(z_n)]$ 可考虑用拉格朗日中值定理。` },
      { n: 360, q: R`函数 $y=\dfrac{(x-3)^2}{4(x-1)}$ 的单调增区间是 $\underline{\qquad}$，单调减区间是 $\underline{\qquad}$，极值是 $\underline{\qquad}$，凹区间是 $\underline{\qquad}$，凸区间是 $\underline{\qquad}$。`, a: R`增区间 $(-\infty,-1],[3,+\infty)$；减区间 $[-1,1),(1,3]$；极大值 $f(-1)=-2$，极小值 $f(3)=0$；凹区间 $(1,+\infty)$；凸区间 $(-\infty,1)$`, sol: R`【分析】$y=\frac14(x-1)-1+\frac1{x-1}$，$y'=\frac{(x-3)(x+1)}{4(x-1)^2}$，$y''=\frac2{(x-1)^3}$。
$y'=0$ 得 $x=-1,3$；$x=1$ 处无定义。列表：$(-\infty,-1)$ 增凸，$x=-1$ 极大值 $-2$，$(-1,1)$ 减凸，$(1,3)$ 减凹，$x=3$ 极小值 0，$(3,+\infty)$ 增凹。` },
      { n: 361, q: R`设 $(1,3)$ 是曲线 $y=x^3+ax^2+bx+14$ 的拐点，则 $a=\underline{\qquad}$，$b=\underline{\qquad}$。`, a: R`$-3$，$-9$`, sol: R`【分析】$y''=6x+2a$，$(1,3)$ 为拐点 $\Rightarrow y(1)=1+a+b+14=3$，$y''(1)=6+2a=0$，解得 $a=-3,b=-9$。此时 $y''=6(x-1)$ 在 $x=1$ 两侧变号，确为拐点。` },
      { n: 362, q: R`设 $f(x)=xe^x$，则 $f^{(n)}(x)$ 在 $x=\underline{\qquad}$ 处取极小值 $\underline{\qquad}$。`, a: R`$-(n+1)$；$-\frac1{e^{n+1}}$`, sol: R`【分析】由归纳得 $f^{(n)}(x)=(x+n)e^x$。$\left(f^{(n)}\right)'=(x+n+1)e^x=0$ 得 $x=-(n+1)$；$\left(f^{(n)}\right)''|_{x=-(n+1)}=(x+n+2)e^x|_{x=-(n+1)}=e^{-(n+1)}>0$，故为极小值，$f^{(n)}(-(n+1))=-e^{-(n+1)}$。` },
      { n: 363, q: R`设 $y=y(x)$ 是由方程 $2y^3-2y^2+2xy-x^2=1$ 确定的，则 $y=y(x)$ 的极值点是 $\underline{\qquad}$。`, a: R`$x=1$`, sol: R`【分析】两边对 $x$ 求导：$6y^2y'-4yy'+2y+2xy'-2x=0$，即 $y'(3y^2-2y+x)=x-y$。令 $y'=0$ 得 $x=y$，代入原方程得 $2x^3-x^2-1=(x-1)(2x^2+x+1)=0$，唯一驻点 $x=1$（此时 $y=1$）。
再对 $y'(3y^2-2y+x)=x-y$ 求导并代入 $x=1,y=1,y'=0$ 得 $y''(1)=\frac12>0$，故 $x=1$ 是极小值点。` },
      { n: 364, q: R`设 $f(x)=3x^2+Ax^{-3}\ (x>0)$，$A$ 为正常数，则 $A$ 至少为 $\underline{\qquad}$ 时，有 $f(x)\geqslant20\ (x>0)$。`, a: R`$64$`, sol: R`【分析】$f(x)\geqslant20\iff 20x^3-3x^5\leqslant A$。设 $g(x)=20x^3-3x^5$，$g'(x)=15x^2(4-x^2)$，$x=2$ 为 $g$ 的最大值点，$g(2)=64$，故 $A$ 至少为 64。` },
      { n: 365, q: R`函数 $f(x)=|4x^3-18x^2+27|$ 在 $[0,2]$ 上的最小值等于 $\underline{\qquad}$，最大值等于 $\underline{\qquad}$。`, a: R`$0$；$27$`, sol: R`【分析】设 $\varphi(x)=4x^3-18x^2+27$，$\varphi'(x)=12x(x-3)<0\ (0<x<2)$，$\varphi$ 在 $[0,2]$ 单调下降，$\varphi(0)=27,\varphi(2)=-13$，存在唯一 $x_0\in(0,2)$ 使 $\varphi(x_0)=0$。
故 $f(0)=27$，$f(x_0)=0$，$f(2)=13$，最小值为 0，最大值为 27。` },
      { n: 366, q: R`设 $f(x)=x\sin\dfrac1x\ \left(x\in\left[\dfrac2\pi,+\infty\right)\right)$，则 $f(x)$ 的值域是 $\underline{\qquad}$。`, a: R`$\left[\frac2\pi,1\right)$`, sol: R`【分析】$f'(x)=\sin\frac1x-\frac1x\cos\frac1x$，$f''(x)=-\frac1{x^3}\sin\frac1x<0$，故 $f'$ 递减；又 $\lim\limits_{x\to+\infty}f'(x)=0$，故 $f'(x)>0$，$f$ 在 $\left[\frac2\pi,+\infty\right)$ 递增。
$f\left(\frac2\pi\right)=\frac2\pi$，$\lim\limits_{x\to+\infty}f(x)=\lim\limits_{x\to+\infty}\frac{\sin\frac1x}{\frac1x}=1$，故值域为 $\left[\frac2\pi,1\right)$。` },
      { n: 367, q: R`$I=\displaystyle\int\dfrac{\mathrm dx}{x^2(1-x^4)}=\underline{\qquad}$。`, a: R`$-\frac1x+\frac14\ln\left|\frac{1+x}{1-x}\right|-\frac12\arctan x+C$`, sol: R`【分析】$\frac1{x^2(1-x^4)}=\frac1{x^2}+\frac{x^2}{1-x^4}$，而 $\frac{x^2}{1-x^4}=\frac{x^2-1+1}{(1-x^2)(1+x^2)}=-\frac1{1+x^2}+\frac1{1-x^4}$ 的拆分给出
$$I=\int\frac{dx}{x^2}+\frac12\int\frac{dx}{1-x^2}-\frac12\int\frac{dx}{1+x^2}=-\frac1x+\frac14\ln\left|\frac{1+x}{1-x}\right|-\frac12\arctan x+C.$$` },
      { n: 368, q: R`$I=\displaystyle\int\sqrt{\dfrac{3-2x}{3+2x}}\,\mathrm dx=\underline{\qquad}$。`, a: R`$\frac32\arcsin\frac{2x}{3}+\frac12\sqrt{9-4x^2}+C$`, sol: R`【分析】$I=\int\frac{3-2x}{\sqrt{9-4x^2}}dx=\int\frac{dx}{\sqrt{1-(\frac{2x}{3})^2}}+\frac14\int\frac{d(9-4x^2)}{\sqrt{9-4x^2}}=\frac32\arcsin\frac{2x}{3}+\frac12\sqrt{9-4x^2}+C$。
【评注】也可令 $t=\sqrt{\frac{3-2x}{3+2x}}$ 作根式代换。` },
      { n: 369, q: R`已知 $\displaystyle\int f'(x^3)\,\mathrm dx=x^3+C$（$C$ 为任意常数），则 $f(x)=\underline{\qquad}$。`, a: R`$\frac95x^{\frac53}+C$`, sol: R`【分析】两边求导：$f'(x^3)=3x^2$。令 $t=x^3$（$x=t^{1/3}$），则 $f'(t)=3t^{2/3}$，积分得 $f(t)=\frac95t^{5/3}+C$，即 $f(x)=\frac95x^{5/3}+C$。` },
      { n: 370, q: R`$I=\displaystyle\int\dfrac{\sin x}{\sin x+\cos x}\,\mathrm dx=\underline{\qquad}$。`, a: R`$\frac12x-\frac14\ln|1+\sin2x|+C$`, sol: R`【分析】将 $\sin x=\alpha(\sin x+\cos x)+\beta(\sin x+\cos x)'$，由 $\alpha-\beta=1,\alpha+\beta=0$ 得 $\alpha=\frac12,\beta=-\frac12$，故
$$I=\frac12\int\frac{\sin x+\cos x}{\sin x+\cos x}dx-\frac12\int\frac{(\sin x+\cos x)'}{\sin x+\cos x}dx=\frac12x-\frac12\ln|\sin x+\cos x|+C.$$
（$\frac12x-\frac12\ln|\sin x+\cos x|=\frac12x-\frac14\ln|1+\sin2x|$。）
【评注】此法适用于 $\int\frac{\sin x}{a\sin x+b\cos x}dx$、$\int\frac{\cos x}{a\sin x+b\cos x}dx$。` },
      { n: 371, q: R`$I=\displaystyle\int\dfrac{\sqrt{x+1}+2}{(x+1)^2-\sqrt{x+1}}\,\mathrm dx=\underline{\qquad}$。`, a: R`$\ln\left|\frac{x+2-2\sqrt{x+1}}{x+2+\sqrt{x+1}}\right|-\frac2{\sqrt3}\arctan\frac{2\sqrt{x+1}+1}{\sqrt3}+C$`, sol: R`【分析】令 $\sqrt{x+1}=t$，$x=t^2-1$，$dx=2tdt$：
$$I=2\int\frac{t+2}{t^3-1}dt=2\int\left(\frac1{t-1}-\frac{t+1}{t^2+t+1}\right)dt=2\ln|t-1|-\ln|t^2+t+1|-\frac2{\sqrt3}\arctan\frac{2t+1}{\sqrt3}+C,$$
代回 $t=\sqrt{x+1}$ 即得。` },
      { n: 372, q: R`$I=\displaystyle\int\dfrac{xe^x}{\sqrt{1+e^x}}\,\mathrm dx=\underline{\qquad}$。`, a: R`$2x\sqrt{1+e^x}-4\sqrt{1+e^x}-2\ln\left|\frac{\sqrt{1+e^x}-1}{\sqrt{1+e^x}+1}\right|+C$`, sol: R`【分析】先分部积分：$I=\int2x\,d\sqrt{1+e^x}=2x\sqrt{1+e^x}-2\int\sqrt{1+e^x}dx$。再令 $\sqrt{1+e^x}=t$，$x=\ln(t^2-1)$，$dx=\frac{2t}{t^2-1}dt$：
$$\int\sqrt{1+e^x}dx=\int\frac{2t^2}{t^2-1}dt=2t+\ln\left|\frac{t-1}{t+1}\right|+C=2\sqrt{1+e^x}+\ln\left|\frac{\sqrt{1+e^x}-1}{\sqrt{1+e^x}+1}\right|+C,$$
代入即得。` },
      { n: 373, q: R`$I=\displaystyle\int\dfrac{x^4+1}{1+x^6}\,\mathrm dx=\underline{\qquad}$。`, a: R`$\arctan x+\frac13\arctan x^3+C$`, sol: R`【分析】$1+x^6=1+(x^2)^3=(1+x^2)(x^4-x^2+1)$，故
$$I=\int\frac{x^4-x^2+1+x^2}{(1+x^2)(x^4-x^2+1)}dx=\int\frac{dx}{1+x^2}+\int\frac{x^2dx}{1+x^6}=\arctan x+\frac13\int\frac{d(x^3)}{1+(x^3)^2}=\arctan x+\frac13\arctan x^3+C.$$` },
      { n: 374, q: R`设 $a>0$，则 $I=\displaystyle\int_{-a}^{a}\sqrt{a^2-x^2}\ln\dfrac{x+\sqrt{1+x^2}}{3}\,\mathrm dx=\underline{\qquad}$。`, a: R`$-\frac\pi2a^2\ln3$`, sol: R`【分析】$I=\int_{-a}^a\sqrt{a^2-x^2}\ln(x+\sqrt{1+x^2})dx-\ln3\int_{-a}^a\sqrt{a^2-x^2}dx$。
因 $\ln(x+\sqrt{1+x^2})$ 为奇函数，第一项为 0；由几何意义 $\int_{-a}^a\sqrt{a^2-x^2}dx=\frac\pi2a^2$（半圆面积）。故 $I=-\frac\pi2a^2\ln3$。
【评注】对称区间上的定积分注意被积函数奇偶性；$\int_0^a\sqrt{a^2-x^2}dx$ 为四分之一圆面积。` },
      { n: 375, q: R`$I=\displaystyle\int_0^1\left(\sqrt{2x-x^2}-\sqrt{(1-x^2)^3}\right)\mathrm dx=\underline{\qquad}$。`, a: R`$\frac\pi{16}$`, sol: R`【分析】$I=\int_0^1\sqrt{2x-x^2}dx-\int_0^1(1-x^2)^{3/2}dx$。
$\int_0^1\sqrt{1-(x-1)^2}dx\xlongequal{x-1=t}\int_{-1}^0\sqrt{1-t^2}dt=\frac\pi4$（单位圆面积的四分之一）；
$\int_0^1(1-x^2)^{3/2}dx\xlongequal{x=\sin t}\int_0^{\pi/2}\cos^4t\,dt=\frac34\cdot\frac12\cdot\frac\pi2=\frac{3\pi}{16}$。
故原式 $=\frac\pi4-\frac{3\pi}{16}=\frac\pi{16}$。
【评注】记住 $\int_0^{\pi/2}\cos^nx\,dx$ 的递推结论。` }
    ]
  };
})();
