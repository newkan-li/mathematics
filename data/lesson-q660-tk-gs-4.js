window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q660_s16"] = {
    id: "q660_s16",
    ch: "660题 · 填空题 · 高等数学",
    title: "填空题 第 376–400 题",
    probTitle: "填空题（含原书详解）",
    book: "《数学基础过关660题（数学二）》",
    problems: [
      { n: 376, q: R`设 $I=\lim\limits_{x\to+\infty}\dfrac1{x^a}\displaystyle\int_0^{x^2}\sqrt{1+t^4}\,\mathrm dt=b$（存在），$b\neq0$，则 $a=\underline{\qquad}$，$b=\underline{\qquad}$。`, a: R`$a=6$，$b=\frac13$`, sol: R`【分析】若 $a\leqslant0$ 则 $I=+\infty$，故 $a>0$，$I$ 为 $\frac\infty\infty$ 型。由洛必达法则
$$I=\lim_{x\to+\infty}\frac{\sqrt{1+x^8}\cdot2x}{ax^{a-1}}=\frac2a\lim_{x\to+\infty}\frac{x^5\sqrt{1+\frac1{x^8}}}{x^{a-1}}=\frac2a\lim_{x\to+\infty}\frac{\sqrt{1+\frac1{x^8}}}{x^{a-6}}=\begin{cases}+\infty,&0<a<6,\\\frac13,&a=6,\\0,&a>6.\end{cases}$$
故 $a=6,b=\frac13$。` },
      { n: 377, q: R`设 $f(x)=\displaystyle\int_0^{x^2}e^{-t^2}\mathrm dt$，则 $f(x)$ 的极值为 $\underline{\qquad}$，$f(x)$ 的拐点坐标为 $\underline{\qquad}$。`, a: R`极小值 $0$；拐点 $\left(\pm\frac{\sqrt2}2,\displaystyle\int_0^{\frac12}e^{-t^2}\mathrm dt\right)$`, sol: R`【分析】$f'(x)=2xe^{-x^4}=0$ 得 $x=0$；$x<0$ 时 $f'<0$，$x>0$ 时 $f'>0$，故极小值点 $x=0$，极小值 $f(0)=0$。
$f''(x)=2e^{-x^4}(1-4x^4)=0$ 得 $x=\pm\frac{\sqrt2}2$；$f''$ 在两侧变号，故拐点为 $\left(\pm\frac{\sqrt2}2,\int_0^{1/2}e^{-t^2}dt\right)$。` },
      { n: 378, q: R`设 $f(x)$ 是定义于 $x\geqslant1$ 的正值连续函数，则 $F(x)=\displaystyle\int_1^x\left[\left(\dfrac2x+\ln x\right)-\left(\dfrac2t+\ln t\right)\right]f(t)\,\mathrm dt\ (x\geqslant1)$ 的极小值点是 $x=\underline{\qquad}$。`, a: R`$2$`, sol: R`【分析】$F(x)=\left(\frac2x+\ln x\right)\int_1^xf(t)dt-\int_1^x\left(\frac2t+\ln t\right)f(t)dt$，故
$$F'(x)=\left(-\frac2{x^2}+\frac1x\right)\int_1^xf(t)dt+\left(\frac2x+\ln x\right)f(x)-\left(\frac2x+\ln x\right)f(x)=\frac{x-2}{x^2}\int_1^xf(t)dt.$$
由 $f>0$ 知 $\int_1^xf(t)dt$ 的符号与 $x-1$ 相同，故 $F'$ 在 $0<x<2$ 时为负、$x>2$ 时为正，$x=2$ 为极小值点。` },
      { n: 379, q: R`设 $f(x),\varphi(x)$ 均为连续函数，$a\neq0$ 为常数，$\displaystyle\int_0^af(\varphi(a-x))\mathrm dx=A$，则 $I=\displaystyle\int_0^ax\left[f(\varphi(x))+f(\varphi(a-x))\right]\mathrm dx=\underline{\qquad}$。`, a: R`$aA$`, sol: R`【分析】令 $x=a-t$：$\int_0^axf(\varphi(x))dx=\int_a^0(a-t)f(\varphi(a-t))(-dt)=a\int_0^af(\varphi(a-x))dx-\int_0^axf(\varphi(a-x))dx$。
代入 $I$ 得 $I=a\int_0^af(\varphi(a-x))dx=aA$。` },
      { n: 380, q: R`设 $f(x)=x^2-x\displaystyle\int_0^2f(x)\mathrm dx+2\displaystyle\int_0^1f(x)\mathrm dx$，则 $f(x)=\underline{\qquad}$。`, a: R`$f(x)=x^2-\frac43x+\frac23$`, sol: R`【分析】设 $\int_0^1f(x)dx=a$，$\int_0^2f(x)dx=b$，则 $f(x)=x^2-bx+2a$。两边在 $[0,1]$、$[0,2]$ 上积分：
$a=\frac13-\frac b2+2a$，即 $a-\frac12b=-\frac13$；$b=\frac83-2b+4a$，即 $4a-3b=-\frac83$。解得 $a=\frac13,b=\frac43$，故 $f(x)=x^2-\frac43x+\frac23$。
【评注】$\int_a^bf(x)dx$ 是确定常数，这是解本题的关键。` },
      { n: 381, q: R`$f(x)=\begin{cases}xe^{-x^2},&x\geqslant0,\\\dfrac1{1+\cos x},&-1<x<0,\end{cases}$ 则 $\displaystyle\int_1^4f(x-2)\mathrm dx=\underline{\qquad}$。`, a: R`$\tan\frac12-\frac12e^{-4}+\frac12$`, sol: R`【分析】令 $x-2=t$，$\int_1^4f(x-2)dx=\int_{-1}^2f(t)dt=\int_{-1}^0\frac{dt}{1+\cos t}+\int_0^2te^{-t^2}dt$
$=\frac12\int_{-1}^0\sec^2\frac t2dt-\frac12\int_0^2e^{-t^2}d(-t^2)=\tan\frac t2\Big|_{-1}^0-\frac12e^{-t^2}\Big|_0^2=\tan\frac12-\frac12e^{-4}+\frac12$。` },
      { n: 382, q: R`$I=\displaystyle\int_{-\frac12}^{\frac12}\left(\dfrac{x\arcsin x}{\sqrt{1-x^2}}+\dfrac{\sin x}{\sqrt{1-x^2}}\right)\mathrm dx=\underline{\qquad}$。`, a: R`$1-\frac{\sqrt3}6\pi$`, sol: R`【分析】$\frac{\sin x}{\sqrt{1-x^2}}$ 为奇函数，积分为 0。故
$$I=2\int_0^{1/2}\frac{x\arcsin x}{\sqrt{1-x^2}}dx=-2\int_0^{1/2}\arcsin x\,d\sqrt{1-x^2}=-2\left[\sqrt{1-x^2}\arcsin x\right]_0^{1/2}+2\int_0^{1/2}dx=1-\frac{\sqrt3}6\pi.$$` },
      { n: 383, q: R`$f(x)=\dfrac1{1+\sin^2x},x\in[0,\pi]$，则 $f(x)$ 在 $[0,\pi]$ 上的全体原函数是 $\underline{\qquad}$。`, a: R`$F(x)+C$，其中 $F(x)=\begin{cases}\frac1{\sqrt2}\arctan(\sqrt2\tan x)-\frac\pi{2\sqrt2},&0\leqslant x<\frac\pi2,\\0,&x=\frac\pi2,\\\frac1{\sqrt2}\arctan(\sqrt2\tan x)+\frac\pi{2\sqrt2},&\frac\pi2<x\leqslant\pi.\end{cases}$`, sol: R`【分析】$\int\frac{dx}{1+\sin^2x}=\int\frac{d\tan x}{1+2\tan^2x}=\frac1{\sqrt2}\arctan(\sqrt2\tan x)+C$，但在 $x=\frac\pi2$ 无定义。将两段在 $x=\frac\pi2$ 处连续拼接（取 $F(\frac\pi2)=0$，两段分别加减 $\frac\pi{2\sqrt2}$）即得 $[0,\pi]$ 上的原函数 $F(x)$，全体原函数为 $F(x)+C$。` },
      { n: 384, q: R`$I=\displaystyle\int_{-1}^1\dfrac{\mathrm dx}{1+e^{\frac1x}}=\underline{\qquad}$。`, a: R`$1$`, sol: R`【分析】令 $x=-t$：$I=\int_{-1}^1\frac{e^{1/t}}{1+e^{1/t}}dt=\int_{-1}^1\frac{e^{1/x}}{1+e^{1/x}}dx$。两式相加：
$$2I=\int_{-1}^1\frac{1+e^{1/x}}{1+e^{1/x}}dx=\int_{-1}^1dx=2,$$
故 $I=1$。
【评注】$\int_a^bf(x)dx$ 难算时，可变形为 $I=\int_a^bg(x)dx$，两者相加得 $2I=\int_a^b[f+g]dx$。` },
      { n: 385, q: R`$I=\displaystyle\int_0^\pi x\sqrt{\cos^2x-\cos^4x}\,\mathrm dx=\underline{\qquad}$。`, a: R`$\frac\pi2$`, sol: R`【分析】$\sqrt{\cos^2x-\cos^4x}=|\cos x|\sin x$。令 $x=t+\frac\pi2$：
$$I=\int_{-\pi/2}^{\pi/2}\left(t+\frac\pi2\right)|\sin t|\cos t\,dt=0+\frac\pi2\int_{-\pi/2}^{\pi/2}|\sin t|\cos t\,dt=\pi\int_0^{\pi/2}\sin t\cos t\,dt=\pi\cdot\frac12\sin^2t\Big|_0^{\pi/2}=\frac\pi2.$$
（含 $t$ 的项为奇函数积分为 0。）` },
      { n: 386, q: R`设 $|y|<1$，则 $I(y)=\displaystyle\int_{-1}^1|x-y|e^x\mathrm dx=\underline{\qquad}$。`, a: R`$2e^y-ey-\frac{y+2}{e}$`, sol: R`【分析】被积函数分段：$x\leqslant y$ 时 $(y-x)e^x$，$x>y$ 时 $(x-y)e^x$。以 $y$ 为分界点分段积分：
$$I=\int_{-1}^y(y-x)e^xdx+\int_y^1(x-y)e^xdx=-\frac{y+1}{e}+e^y-\frac1e+(1-y)e-(e-e^y)=2e^y-ey-\frac{y+2}{e}.$$` },
      { n: 387, q: R`设 $f(x)$ 的原函数 $F(x)$ 恒正，且 $F(0)=1$，当 $x\geqslant0$ 时有 $f(x)F(x)=\sin^22x$，则 $f(x)=\underline{\qquad}$。`, a: R`$\frac{\sin^22x}{\sqrt{x-\frac14\sin4x+1}}$`, sol: R`【分析】$F'(x)=f(x)$，故 $\left(\frac12F^2(x)\right)'=F'F=\sin^22x$，积分得 $F^2(x)=\int\sin^22x\,dx=\frac12\int(1-\cos4x)dx=x-\frac14\sin4x+C$。
由 $F(0)=1$ 得 $C=1$，且 $F>0$，故 $F(x)=\sqrt{x-\frac14\sin4x+1}$，$f(x)=\frac{\sin^22x}{F(x)}=\frac{\sin^22x}{\sqrt{x-\frac14\sin4x+1}}$。` },
      { n: 388, q: R`设 $f(x)$ 有一阶导数且满足 $\displaystyle\int_0^1f(tx)\mathrm dt=f(x)+x\sin x$，则 $f(x)=\underline{\qquad}$。`, a: R`$-x\sin x+\cos x+C$`, sol: R`【分析】令 $tx=s$，原式改为 $\frac1x\int_0^xf(s)ds=f(x)+x\sin x$，即 $\int_0^xf(s)ds=xf(x)+x^2\sin x$。两边求导：
$f(x)=xf'(x)+f(x)+(x^2\sin x)'$，即 $f'(x)=-\frac{(x^2\sin x)'}{x}$。故
$$f(x)=-\int\frac{d(x^2\sin x)}{x}=-x\sin x+\int x^2\sin x\left(-\frac1{x^2}\right)dx=-x\sin x+\cos x+C.$$` },
      { n: 389, q: R`设 $f(x)=\max\{1,x^2\}$，则 $\displaystyle\int_1^xf(t)\mathrm dt=\underline{\qquad}$。`, a: R`$\begin{cases}\frac13x^3-\frac53,&x<-1,\\x-1,&-1\leqslant x\leqslant1,\\\frac13x^3-\frac13,&x>1.\end{cases}$`, sol: R`【分析】$f(x)=\max\{1,x^2\}=\begin{cases}x^2,&x<-1,\\1,&-1\leqslant x\leqslant1,\\x^2,&x>1.\end{cases}$
分段积分：$x<-1$ 时 $\int_1^xf=\int_1^{-1}1dt+\int_{-1}^xt^2dt=-2+\frac13x^3+\frac13=\frac13x^3-\frac53$；$-1\leqslant x\leqslant1$ 时 $\int_1^x1dt=x-1$；$x>1$ 时 $\int_1^xt^2dt=\frac13x^3-\frac13$。
【评注】分段函数的变限积分用分段积分法或拼接法求原函数。` },
      { n: 390, q: R`设星形线方程为 $\begin{cases}x=a\cos^3t,\\y=a\sin^3t,\end{cases}$ 则它所围成的面积 $A$ 为 $\underline{\qquad}$，它的弧长 $L$ 为 $\underline{\qquad}$，它绕 $x$ 轴旋转而生成的旋转体体积 $V$ 为 $\underline{\qquad}$。`, a: R`$A=\frac38\pi a^2$；$L=6a$；$V=\frac{32}{105}\pi a^3$`, sol: R`【分析】由对称性：
$$A=4\int_0^ay\,dx=12a^2\int_0^{\pi/2}(\sin^4t-\sin^6t)dt=12a^2\left[\frac{1\cdot3}{2\cdot4}-\frac{1\cdot3\cdot5}{2\cdot4\cdot6}\right]\frac\pi2=\frac38\pi a^2;$$
$$L=4\int_0^{\pi/2}\sqrt{(x')^2+(y')^2}dt=4\int_0^{\pi/2}3a\cos t\sin t\,dt=6a;$$
$$V=2\int_0^a\pi y^2dx=6\pi a^3\int_0^{\pi/2}\sin^7t(1-\sin^2t)dt=6\pi a^3\cdot\frac{16}{315}=\frac{32}{105}\pi a^3.$$` },
      { n: 391, q: R`在曲线 $y=x^2\ (0\leqslant x\leqslant1)$ 上取一点 $(t,t^2),(0<t<1)$，设 $A_1$ 是曲线 $y=x^2\ (0\leqslant x\leqslant1)$、直线 $y=t^2$ 和 $x=0$ 围成的面积；$A_2$ 是由曲线 $y=x^2$、直线 $y=t^2$ 和 $x=1$ 围成的面积，则 $t$ 取 $\underline{\qquad}$ 时 $A=A_1+A_2$ 取最小值。`, a: R`$\frac12$`, sol: R`【分析】$A_1=\int_0^t(t^2-x^2)dx$，$A_2=\int_t^1(x^2-t^2)dx$，故
$$A(t)=2\int_0^t(t^2-x^2)dx+\int_0^1(x^2-t^2)dx=\frac43t^3-t^2+\frac13,\quad A'(t)=2t(2t-1),$$
$0<t<\frac12$ 时 $A'<0$，$t>\frac12$ 时 $A'>0$，故 $t=\frac12$ 时 $A$ 取最小值。` },
      { n: 392, q: R`设有曲线 $y=\sqrt{x-1}$，过原点作其切线，则以曲线、切线及 $x$ 轴所围成平面图形绕 $x$ 轴旋转一圈所得到的表面积为 $\underline{\qquad}$。`, a: R`$\frac16(11\sqrt5-1)\pi$`, sol: R`【分析】设切点 $(x_0,\sqrt{x_0-1})$，切线 $y=\frac{1}{2\sqrt{x_0-1}}x$。代入切点得 $x_0=2,y_0=1$，切线 $y=\frac12x$。
切线旋转侧面积 $S_1=\int_0^22\pi\cdot\frac12x\sqrt{1+\frac14}dx=\sqrt5\pi$；
曲线旋转侧面积 $S_2=\int_1^22\pi\sqrt{x-1}\sqrt{1+\frac1{4(x-1)}}dx=\pi\int_1^2\sqrt{4x-3}dx=\frac\pi6(5\sqrt5-1)$。
故 $S=S_1+S_2=\frac16(11\sqrt5-1)\pi$。` },
      { n: 393, q: R`已知抛物叶形线的一部分：$y^2=\dfrac{x}{9}(3-x)^2\ (0\leqslant x\leqslant3)$，它围成的图形为 $M$，则 $M$ 的面积 $A=\underline{\qquad}$，$M$ 的质心（形心）$(\bar x,\bar y)=\underline{\qquad}$。`, a: R`$A=\frac85\sqrt3$；$(\bar x,\bar y)=\left(\frac97,0\right)$`, sol: R`【分析】上半部分 $y=\frac13\sqrt x(3-x)$，由对称性
$$A=2\int_0^3\frac13\sqrt x(3-x)dx=\frac23\int_0^3 3\sqrt x\,dx-\frac23\int_0^3x^{3/2}dx=\frac85\sqrt3.$$
由对称性 $\bar y=0$，$\bar x=\dfrac{2\int_0^3xy\,dx}{A}=\dfrac{\frac23\int_0^3x(3-x)\sqrt x\,dx}{\frac85\sqrt3}=\frac97$。` },
      { n: 394, q: R`三叶玫瑰线的一瓣 $r=a\sin3\theta\ \left(0\leqslant\theta\leqslant\dfrac\pi3\right)$ 所围图形的面积 $A=\underline{\qquad}$。`, a: R`$\frac\pi{12}a^2$`, sol: R`【分析】由极坐标面积公式
$$A=\frac12\int_0^{\pi/3}r^2d\theta=\frac12\int_0^{\pi/3}a^2\sin^23\theta\,d\theta=\frac{a^2}{4}\int_0^{\pi/3}(1-\cos6\theta)d\theta=\frac{a^2}{4}\cdot\frac\pi3-\frac{a^2}{4}\cdot\frac16\sin6\theta\Big|_0^{\pi/3}=\frac\pi{12}a^2.$$` },
      { n: 395, q: R`在水平放置的椭圆底柱形容器内储存某种液体，其中椭圆方程为 $\dfrac{x^2}{4}+y^2=1$（单位：m），则当液面过点 $(0,y)(-1\leqslant y\leqslant1)$ 处水平线时，容器内液体的体积是 $\underline{\qquad}$，当容器内储满了液体后，以 $0.16\,\mathrm{m^3/min}$ 的速度将液体从容器顶端抽出，则当液面降至 $y=0$ 时，液面下降的速度为 $\underline{\qquad}$，如果液体的密度为 $1000\,\mathrm{kg/m^3}$，抽出全部液体所作的功为 $\underline{\qquad}$。`, a: R`$V=\left[8(\arcsin y+y\sqrt{1-y^2})+4\pi\right]\,\mathrm{m^3}$；$0.01\,\mathrm{m/min}$；$8000g\pi\,\mathrm J$`, sol: R`【分析】液面高 $y$ 时体积 $V=4\cdot2\int_{-1}^y2\sqrt{1-y^2}dy=16\int_{-\pi/2}^{\arcsin y}\cos^2t\,dt=[8(\arcsin y+y\sqrt{1-y^2})+4\pi]\,\mathrm{m^3}$。
$\frac{dV}{dt}=16\sqrt{1-y^2}\frac{dy}{dt}$，$y=0$ 时 $\frac{dy}{dt}=\frac{0.16}{16}=0.01\,\mathrm{m/min}$。
$$W=4\cdot1000g\int_{-1}^14\sqrt{1-y^2}(1-y)dy=4000g\cdot4\cdot\frac\pi2=8000g\pi\,\mathrm J.$$` },
      { n: 396, q: R`$I=\displaystyle\int_1^{+\infty}\dfrac{\mathrm dx}{x^2(x+1)}=\underline{\qquad}$。`, a: R`$1-\ln2$`, sol: R`【分析】$\frac1{x^2(x+1)}=\frac{(x+1)-x}{x^2(x+1)}=\frac1{x^2}-\frac1{x(x+1)}$，故
$$I=\int_1^{+\infty}\frac{dx}{x^2}-\int_1^{+\infty}\frac{dx}{x(x+1)}=1-\int_1^{+\infty}\left(\frac1x-\frac1{x+1}\right)dx=1-\ln\frac{x}{x+1}\Big|_1^{+\infty}=1-\ln2.$$` },
      { n: 397, q: R`$\displaystyle\int\dfrac{\mathrm dx}{x\sqrt{2x^2-1}}=\underline{\qquad}$（此处为 $1$ 到 $+\infty$ 的定积分）。`, a: R`$\frac\pi4$`, sol: R`【分析】$\int_1^{+\infty}\frac{dx}{x\sqrt{2x^2-1}}=\int_1^{+\infty}\frac{dx}{\sqrt2x^2\sqrt{1-\left(\frac1{\sqrt2x}\right)^2}}=\int_1^{+\infty}\frac{-d\left(\frac1{\sqrt2x}\right)}{\sqrt{1-\left(\frac1{\sqrt2x}\right)^2}}=-\arcsin\frac1{\sqrt2x}\Big|_1^{+\infty}=\arcsin\frac1{\sqrt2}=\frac\pi4$。` },
      { n: 398, q: R`设 $f(x)$ 可导且 $f(0)=0,f(1)=1,\lim\limits_{x\to+\infty}f(x)=1,\lim\limits_{x\to-\infty}f(x)=2$，则 $\displaystyle\int_1^{+\infty}f'(1-x)\mathrm dx=\underline{\qquad}$。`, a: R`$-2$`, sol: R`【分析】$\frac{d}{dx}f(1-x)=-f'(1-x)$，故
$$\int_1^{+\infty}f'(1-x)dx=-\int_1^{+\infty}\frac{d}{dx}f(1-x)dx=-f(1-x)\Big|_{x=1}^{x=+\infty}=-\left[\lim_{t\to-\infty}f(t)-f(0)\right]=-(2-0)=-2.$$` },
      { n: 399, q: R`设 $n$ 为自然数，则 $I_n=\displaystyle\int_0^{+\infty}x^ne^{-x}\mathrm dx=\underline{\qquad}$。`, a: R`$n!$`, sol: R`【分析】分部积分得递推公式
$$I_n=-\int_0^{+\infty}x^n\,de^{-x}=-x^ne^{-x}\Big|_0^{+\infty}+n\int_0^{+\infty}x^{n-1}e^{-x}dx=nI_{n-1}.$$
故 $I_n=n(n-1)\cdots2I_1=n!I_0=n!$，其中 $I_0=\int_0^{+\infty}e^{-x}dx=1$。` },
      { n: 400, q: R`$\displaystyle\int_0^{+\infty}\dfrac{xe^{-x}}{(1+e^{-x})^2}\mathrm dx=\underline{\qquad}$。`, a: R`$\ln2$`, sol: R`【分析】恒等变形后分部积分：
$$\int_0^{+\infty}\frac{xe^{-x}}{(1+e^{-x})^2}dx=\int_0^{+\infty}\frac{xe^x}{(e^x+1)^2}dx=-\int_0^{+\infty}x\,d\left(\frac1{e^x+1}\right)=-\frac{x}{e^x+1}\Big|_0^{+\infty}+\int_0^{+\infty}\frac{dx}{e^x+1}$$
$$=-\int_0^{+\infty}\frac{de^{-x}}{1+e^{-x}}=-\ln(1+e^{-x})\Big|_0^{+\infty}=\ln2.$$
【评注】不可直接对 $\int_0^{+\infty}x\,d\left(\frac1{1+e^{-x}}\right)$ 用分部积分公式（因 $\frac{x}{1+e^{-x}}\to+\infty$），应先积到 $[0,b]$ 再取极限。` }
    ]
  };
})();
