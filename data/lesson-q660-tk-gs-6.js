window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q660_s18"] = {
    id: "q660_s18",
    ch: "660题 · 填空题 · 高等数学",
    title: "填空题 第 423–440 题（高等数学完）",
    probTitle: "填空题（含原书详解）",
    book: "《数学基础过关660题（数学二）》",
    problems: [
      { n: 423, q: R`设积分区域 $D$ 由曲线 $y=\ln x$ 以及直线 $x=2,y=0$ 围成，则二重积分 $\displaystyle\iint_D\dfrac{e^{xy}}{x^x-1}\mathrm d\sigma=\underline{\qquad}$。`, a: R`$\ln2$`, sol: R`【分析】$D=\{1\leqslant x\leqslant2,0\leqslant y\leqslant\ln x\}$，故
$$\iint_D\frac{e^{xy}}{x^x-1}d\sigma=\int_1^2\frac{dx}{x^x-1}\int_0^{\ln x}e^{xy}dy=\int_1^2\frac{e^{x\ln x}-1}{x(x^x-1)}dx=\int_1^2\frac{dx}{x}=\ln2.$$` },
      { n: 424, q: R`设 $f(x,y)$ 在单位圆 $x^2+y^2\leqslant1$ 上有连续的偏导数，且在边界上取值为零，$f(0,0)=2018$，则 $\lim\limits_{\varepsilon\to0^+}\dfrac1{2\pi}\displaystyle\iint_{\varepsilon^2\leqslant x^2+y^2\leqslant1}\dfrac{xf'_x+yf'_y}{x^2+y^2}\mathrm dx\mathrm dy=\underline{\qquad}$。`, a: R`$-2018$`, sol: R`【分析】设 $x=r\cos\theta,y=r\sin\theta$，则 $r\frac{\partial f}{\partial r}=xf'_x+yf'_y$。化极坐标：
$$\lim_{\varepsilon\to0^+}\frac1{2\pi}\int_0^{2\pi}d\theta\int_\varepsilon^1\frac{r\frac{\partial f}{\partial r}}{r^2}\cdot r\,dr=\lim_{\varepsilon\to0^+}\frac1{2\pi}\int_0^{2\pi}f(r\cos\theta,r\sin\theta)\Big|_{r=\varepsilon}^{r=1}d\theta.$$
因 $f$ 在边界上为 0，故 $=\lim\limits_{\varepsilon\to0^+}\frac1{2\pi}\int_0^{2\pi}[-f(\varepsilon\cos\theta,\varepsilon\sin\theta)]d\theta=-f(0,0)=-2018$。` },
      { n: 425, q: R`已知 $y=y(x)$ 在任意点 $x$ 处的增量 $\Delta y=\dfrac{y\Delta x}{1+x^2}+\alpha$，其中 $\alpha$ 是 $\Delta x$ 的高阶无穷小（$\Delta x\to0$ 时），$y(0)=\pi$，则 $y(1)=\underline{\qquad}$。`, a: R`$\pi e^{\frac\pi4}$`, sol: R`【分析】$\frac{\Delta y}{\Delta x}=\frac y{1+x^2}+\frac\alpha{\Delta x}$，令 $\Delta x\to0$ 得 $\frac{dy}{dx}=\frac y{1+x^2}$，即 $\frac{dy}y=\frac{dx}{1+x^2}$，积分得 $\ln|y|=\arctan x+C_1$，$y=Ce^{\arctan x}$。
由 $y(0)=\pi$ 得 $C=\pi$，故 $y=\pi e^{\arctan x}$，$y(1)=\pi e^{\pi/4}$。` },
      { n: 426, q: R`设 $a>0$ 是常数，连续函数 $f(x)$ 满足 $\lim\limits_{x\to+\infty}f(x)=b$，$y=y(x)$ 是微分方程 $y'+ay=f(x)$ 的解，则 $\lim\limits_{x\to+\infty}y(x)=\underline{\qquad}$。`, a: R`$\frac ba$`, sol: R`【分析】两边乘 $e^{ax}$ 得 $(e^{ax}y)'=e^{ax}f(x)$，积分得 $y(x)=y(0)e^{-ax}+\frac{\int_0^xe^{at}f(t)dt}{e^{ax}}$。
由洛必达法则 $\lim\limits_{x\to+\infty}\frac{\int_0^xe^{at}f(t)dt}{e^{ax}}=\lim\limits_{x\to+\infty}\frac{e^{ax}f(x)}{ae^{ax}}=\frac ba$，故 $\lim\limits_{x\to+\infty}y(x)=\frac ba$。` },
      { n: 427, q: R`把 $x^2$ 看成 $y$ 的函数，求解微分方程 $(y^4-3x^2)\mathrm dy+xy\,\mathrm dx=0$，则该方程的通解是 $\underline{\qquad}$。`, a: R`$x^2=Cy^6+y^4$（$C$ 为任意常数）`, sol: R`【分析】改写为 $2(y^4-3x^2)dy+y\,dx^2=0$，即 $\frac{dx^2}{dy}-\frac6yx^2=-2y^3$，这是以 $x^2$ 为未知函数的一阶线性方程。
积分因子 $\mu=e^{-\int\frac6ydy}=\frac1{y^6}$，得 $\frac{d}{dy}\left(\frac{x^2}{y^6}\right)=-\frac2{y^3}$，积分得 $\frac{x^2}{y^6}=\frac1{y^2}+C$，即 $x^2=Cy^6+y^4$。` },
      { n: 428, q: R`已知连续函数 $f(x)$ 满足条件 $f(x)=\displaystyle\int_0^{2x}f\left(\dfrac t2\right)\mathrm dt+xe^x$，则 $f(x)=\underline{\qquad}$。`, a: R`$2e^{2x}-(x+2)e^x$`, sol: R`【分析】两端对 $x$ 求导：$f'(x)=2f(x)+(x+1)e^x$；原方程令 $x=0$ 得 $f(0)=0$。故 $y=f(x)$ 是初值问题 $\begin{cases}y'-2y=(x+1)e^x\\y(0)=0\end{cases}$ 的特解。
积分因子 $e^{-2x}$：$(e^{-2x}y)'=(x+1)e^{-x}$，积分得 $y=Ce^{2x}-(x+2)e^x$，由 $y(0)=0$ 得 $C=2$，故 $f(x)=2e^{2x}-(x+2)e^x$。` },
      { n: 429, q: R`微分方程 $yy''+2(y')^2=0$ 满足初始条件 $y(0)=1,y'(0)=-1$ 的特解是 $\underline{\qquad}$。`, a: R`$y=\sqrt[3]{1-3x}$`, sol: R`【分析】方程不显含 $x$，令 $y'=p(y)$，则 $y''=p\frac{dp}{dy}$，代入得 $yp\frac{dp}{dy}+2p^2=0$，即 $y\frac{dp}{dy}+2p=0$。
分离变量积分得 $p=\frac{C_1}{y^2}$。由 $x=0$ 时 $y=1,p=-1$ 得 $C_1=-1$，故 $y'=-\frac1{y^2}$，即 $y^2dy+dx=0$，积分得 $y^3+3x=C_2$。由 $y(0)=1$ 得 $C_2=1$，故 $y=\sqrt[3]{1-3x}$。` },
      { n: 430, q: R`设 $y=y(x)$ 是微分方程 $(3x^2+2)y''=6xy'$ 的一个特解，且当 $x\to0$ 时 $y(x)$ 是与 $e^x-1$ 等价的无穷小量，则该特解是 $\underline{\qquad}$。`, a: R`$y=\frac12x^3+x$`, sol: R`【分析】方程不显含 $y$，令 $p=y'$，则 $\frac{dp}p=\frac{6x\,dx}{3x^2+2}$，积分得 $\ln|p|=\ln(3x^2+2)+C$，故 $y'=C_1(3x^2+2)$，再积分得 $y=C_1x^3+2C_1x+C_2$。
由 $\lim\limits_{x\to0}\frac y{e^x-1}=\lim\limits_{x\to0}\frac yx=1$ 得 $y(0)=0,y'(0)=1$，故 $C_2=0$，$2C_1=1$，$C_1=\frac12$，特解 $y=\frac12x^3+x$。` },
      { n: 431, q: R`当 $y>0$ 时，微分方程 $(x-2xy-y^2)\mathrm dy+y^2\mathrm dx=0$ 的通解为 $\underline{\qquad}$。`, a: R`$x=y^2\left(Ce^{\frac1y}+1\right)$（$C$ 为任意常数）`, sol: R`【分析】$y>0$ 时改写为 $\frac{dx}{dy}+\left(\frac1{y^2}-\frac2y\right)x=1$，以 $y$ 为自变量的一阶线性方程。
积分因子 $\mu=e^{\int(\frac1{y^2}-\frac2y)dy}=e^{-\frac1y-2\ln y}=\frac1{y^2}e^{-1/y}$，得 $\frac{d}{dy}\left(\frac{x}{y^2}e^{-1/y}\right)=\frac1{y^2}e^{-1/y}$，积分得 $\frac{x}{y^2}e^{-1/y}=e^{-1/y}+C$，即 $x=y^2(Ce^{1/y}+1)$。
【评注】解微分方程时 $x,y$ 地位可看作相同，既可把 $y$ 看作 $x$ 的函数，也可把 $x$ 看作 $y$ 的函数。` },
      { n: 432, q: R`若通过点 $(1,0)$ 的曲线 $y=y(x)$ 上每一点 $(x,y)$ 处切线的斜率等于 $1+\dfrac yx+\left(\dfrac yx\right)^2$，则此曲线的方程是 $\underline{\qquad}$。`, a: R`$y=x\tan(\ln x)$`, sol: R`【分析】由题设 $y'=1+\frac yx+\left(\frac yx\right)^2$，$y(1)=0$。令 $u=\frac yx$，得 $\begin{cases}x\frac{du}{dx}+u=1+u+u^2\\u(1)=0\end{cases}$，即 $\frac{du}{1+u^2}=\frac{dx}x$。
积分得 $\arctan u=\ln x+C$，由 $u(1)=0$ 得 $C=0$，故 $\arctan\frac yx=\ln x$，即 $y=x\tan(\ln x)$。` },
      { n: 433, q: R`方程 $y''+y'-2y=(6x+2)e^x$ 满足 $y(0)=3,y'(0)=0$ 的特解 $y^*=\underline{\qquad}$。`, a: R`$(x^2+2)e^x+e^{-2x}$`, sol: R`【分析】特征方程 $\lambda^2+\lambda-2=0$，特征根 $\lambda_1=1,\lambda_2=-2$，齐次通解 $C_1e^x+C_2e^{-2x}$。
非齐次项 $(6x+2)e^x$ 对应 $\lambda=1$ 为单根，设特解 $y^*=x(Ax+B)e^x=(Ax^2+Bx)e^x$，代入得 $[3(2Ax+B)+2A]e^x=(6x+2)e^x$，故 $A=1,B=0$，$y^*=x^2e^x$。
通解 $y=C_1e^x+C_2e^{-2x}+x^2e^x$，由 $y(0)=3,y'(0)=0$ 解得 $C_1=2,C_2=1$，故 $y^*=(x^2+2)e^x+e^{-2x}$。` },
      { n: 434, q: R`$y''+4y=\cos2x$ 的通解为 $y=\underline{\qquad}$。`, a: R`$\frac x4\sin2x+C_1\cos2x+C_2\sin2x$（$C_1,C_2$ 为任意常数）`, sol: R`【分析】特征方程 $\lambda^2+4=0$，$\lambda=\pm2i$，齐次通解 $C_1\cos2x+C_2\sin2x$。
$\lambda\pm\omega i=\pm2i$ 是特征根，设特解 $y^*=x(A\cos2x+B\sin2x)$，代入得 $-4A\sin2x+4B\cos2x=\cos2x$，故 $A=0,B=\frac14$，$y^*=\frac x4\sin2x$。
【评注】形如 $y''+4y=p\cos2x$、$q\sin2x$ 或二者之和，特解都应设为 $x(A\cos2x+B\sin2x)$。` },
      { n: 435, q: R`已知 $y_1=xe^x+e^{2x},y_2=xe^x+e^{-x},y_3=xe^x+e^{2x}-e^{-x}$ 是某二阶线性非齐次微分方程的三个解，则此微分方程为 $\underline{\qquad}$。`, a: R`$y''-y'-2y=(1-2x)e^x$`, sol: R`【分析】$y_1-y_3=e^{-x}$、$y_1-y_2=e^{2x}-e^{-x}$ 是齐次解，故 $e^{-x}$ 与 $e^{2x}$ 是齐次方程两个线性无关解，特征根 $-1,2$，特征方程 $\lambda^2-\lambda-2=0$，齐次方程 $y''-y'-2y=0$。
设非齐次方程 $y''-y'-2y=f(x)$，把非齐次解 $y_2-e^{-x}=xe^x$ 代入得 $f(x)=(xe^x)''-(xe^x)'-2(xe^x)=(1-2x)e^x$。故所求方程 $y''-y'-2y=(1-2x)e^x$。` },
      { n: 436, q: R`设 $u=u(\sqrt{x^2+y^2})\ (r=\sqrt{x^2+y^2}>0)$ 有二阶连续的偏导数，且满足 $\dfrac{\partial^2u}{\partial x^2}+\dfrac{\partial^2u}{\partial y^2}-\dfrac1x\dfrac{\partial u}{\partial x}+u=x^2+y^2$，则 $u(\sqrt{x^2+y^2})=\underline{\qquad}$。`, a: R`$C_1\cos\sqrt{x^2+y^2}+C_2\sin\sqrt{x^2+y^2}+x^2+y^2-2$（$C_1,C_2$ 为任意常数）`, sol: R`【分析】$u=u(r)$，$\frac{\partial u}{\partial x}=\frac xr u'$，$\frac{\partial^2u}{\partial x^2}=\frac{x^2}{r^2}u''+\left(\frac1r-\frac{x^2}{r^3}\right)u'$，同理对 $y$。相加并减去 $\frac1x\frac{\partial u}{\partial x}=\frac1r u'$ 得
$$\frac{d^2u}{dr^2}+u=r^2,$$
通解 $u=C_1\cos r+C_2\sin r+r^2-2$，即 $u(\sqrt{x^2+y^2})=C_1\cos\sqrt{x^2+y^2}+C_2\sin\sqrt{x^2+y^2}+x^2+y^2-2$。` },
      { n: 437, q: R`已知连续函数 $f(x)$ 满足 $\displaystyle\int_0^xf(t)\mathrm dt=x+\sin x+\int_0^xtf(x-t)\mathrm dt$，则 $f(x)=\underline{\qquad}$。`, a: R`$\frac32e^x+\frac12(\sin x+\cos x)$`, sol: R`【分析】$\int_0^xtf(x-t)dt\xlongequal{x-t=u}\int_0^x(x-u)f(u)du=x\int_0^xf(u)du-\int_0^xuf(u)du$。代入原方程并求导：
$$f(x)=1+\cos x+\int_0^xf(t)dt+xf(x)-xf(x),\ \text{即}\ f(x)=1+\cos x+\int_0^xf(t)dt.$$
令 $x=0$ 得 $f(0)=2$，再求导得 $f'(x)=-\sin x+f(x)$，即 $y'-y=-\sin x$，$y(0)=2$。解之得 $f(x)=\frac32e^x+\frac12(\sin x+\cos x)$。` },
      { n: 438, q: R`三阶常系数齐次线性微分方程 $y'''+y''-y'-y=0$ 满足初值 $y(0)=4,y'(0)=4$ 与 $y''(0)=0$ 的特解是 $y^*(x)=\underline{\qquad}$。`, a: R`$3e^x+e^{-x}+2xe^{-x}$`, sol: R`【分析】特征方程 $\lambda^3+\lambda^2-\lambda-1=0$，特征根 $\lambda_1=1,\lambda_2=\lambda_3=-1$，通解 $y=C_1e^x+C_2e^{-x}+C_3xe^{-x}$。
$y(0)=C_1+C_2=4$；$y'(0)=C_1-C_2+C_3=4$；$y''(0)=C_1+C_2-2C_3=0$。解得 $C_1=3,C_2=1,C_3=2$，故 $y^*=3e^x+e^{-x}+2xe^{-x}$。` },
      { n: 439, q: R`设 $y=y(x)$ 是二阶常系数线性微分方程 $y''+2my'+n^2y=0$ 满足 $y(0)=a$ 与 $y'(0)=b$ 的特解，其中 $m>n>0$，则 $\displaystyle\int_0^{+\infty}y(x)\mathrm dx=\underline{\qquad}$。`, a: R`$\frac1{n^2}(2ma+b)$`, sol: R`【分析】特征方程 $\lambda^2+2m\lambda+n^2=0$，特征根 $\lambda_{1,2}=-m\pm\sqrt{m^2-n^2}<0$，故任一解 $y$ 满足 $\lim\limits_{x\to+\infty}y=0$，且 $\lim\limits_{x\to+\infty}y'=0$。
对 $y''+2my'+n^2y=0$ 在 $[0,+\infty)$ 上积分：
$$0=y'(x)\Big|_0^{+\infty}+2my(x)\Big|_0^{+\infty}+n^2\int_0^{+\infty}y\,dx=-(2ma+b)+n^2\int_0^{+\infty}y\,dx,$$
故 $\int_0^{+\infty}y\,dx=\frac1{n^2}(2ma+b)$。` },
      { n: 440, q: R`设函数 $f(x)$ 满足 $xf'(x)-3f(x)=-6x^2$，且由曲线 $y=f(x)$ 与直线 $x=1$ 及 $x$ 轴所围成的平面图形 $D$ 绕 $x$ 轴旋转一周得旋转体的体积最小，则 $f(x)=\underline{\qquad}$。`, a: R`$6x^2-7x^3$`, sol: R`【分析】$xy'-3y=-6x^2$ 化为 $y'-\frac3xy=-6x$，通解 $y=Cx^3+6x^2$。曲线过原点，旋转体体积
$$V(C)=\pi\int_0^1(Cx^3+6x^2)^2dx=\pi\left(\frac{C^2}7+2C+\frac{36}5\right),$$
$V'(C)=\pi\left(\frac{2C}7+2\right)=0$ 得 $C=-7$（且为最小值点），故 $f(x)=6x^2-7x^3$。` }
    ]
  };
})();
