window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["gs04_s0"].problems = [
    { n: 1, q: R`已知函数 $y=y(x)$ 在任意点处的增量 $\Delta y=\frac{y\Delta x}{1+x^2}+\alpha$，且当 $\Delta x\to0$ 时，$\alpha$ 是 $\Delta x$ 的高阶无穷小，$y(0)=\pi$，则 $y(1)$ 等于
(A) $2\pi$。 (B) $\pi$。 (C) $e^{\frac{\pi}{4}}$。 (D) $\pi e^{\frac{\pi}{4}}$。`, a: R`(D)`, sol: R`答案 (D)。由 $\Delta y=\frac{y\Delta x}{1+x^2}+o(\Delta x)$ 得 $y'=\frac{y}{1+x^2}$，解得 $\ln y=\arctan x+C$，$y=Ce^{\arctan x}$，由 $y(0)=\pi$ 得 $C=\pi$，$y(1)=\pi e^{\frac{\pi}{4}}$。` },
    { n: 2, q: R`方程 $y''+2y'+y=3xe^{-x}$ 的特解形式为
(A) $Axe^{-x}$。 (B) $(Ax+B)e^{-x}$。 (C) $(Ax+B)xe^{-x}$。 (D) $(Ax+B)x^2e^{-x}$。`, a: R`(D)`, sol: R`答案 (D)。$\lambda=-1$ 是特征方程 $r^2+2r+1=(r+1)^2=0$ 的二重根，故 $k=2$，特解设为 $x^2(Ax+B)e^{-x}$。` },
    { n: 3, q: R`具有特解 $y_1=e^{-x},y_2=2xe^{-x},y_3=3e^x$ 的三阶常系数齐次线性微分方程是
(A) $y'''-y''-y'+y=0$。 (B) $y'''+y''-y'-y=0$。 (C) $y'''-6y''+11y'-6y=0$。 (D) $y'''-2y''-y'+2y=0$。`, a: R`(B)`, sol: R`答案 (B)。特征根为 $-1$（二重）与 $1$，特征方程为 $(r+1)^2(r-1)=r^3+r^2-r-1=0$，即 $y'''+y''-y'-y=0$。` },
    { n: 4, q: R`微分方程 $y''-4y'+8y=e^{2x}(1+\cos2x)$ 的特解可设为 $y^*=$
(A) $Ae^{2x}+e^{2x}(B\cos2x+C\sin2x)$。
(B) $Axe^{2x}+e^{2x}(B\cos2x+C\sin2x)$。
(C) $Ae^{2x}+xe^{2x}(B\cos2x+C\sin2x)$。
(D) $Axe^{2x}+xe^{2x}(B\cos2x+C\sin2x)$。`, a: R`(C)`, sol: R`答案 (C)。特征根 $r=2\pm2i$。对 $e^{2x}$：$\lambda=2$ 不是特征根，取 $Ae^{2x}$；对 $e^{2x}\cos2x$：$\alpha\pm\beta i=2\pm2i$ 是单特征根，取 $xe^{2x}(B\cos2x+C\sin2x)$。` },
    { n: 5, q: R`函数 $y=C_1e^x+C_2e^{-2x}+xe^x$ 满足的一个微分方程是
(A) $y''-y'-2y=3xe^x$。 (B) $y''-y'-2y=3e^x$。 (C) $y''+y'-2y=3xe^x$。 (D) $y''+y'-2y=3e^x$。`, a: R`(D)`, sol: R`答案 (D)。齐次通解对应特征根 $1,-2$，齐次方程 $y''+y'-2y=0$；特解 $xe^x$（$\lambda=1$ 为单根）代入得 $f(x)=3e^x$。` },
    { n: 6, q: R`在下列微分方程中，以 $y=C_1e^x+C_2\cos2x+C_3\sin2x$（$C_1,C_2,C_3$ 为任意常数）为通解的是
(A) $y'''+y''-4y'-4y=0$。 (B) $y'''+y''+4y'+4y=0$。 (C) $y'''-y''-4y'+4y=0$。 (D) $y'''-y''+4y'-4y=0$。`, a: R`(D)`, sol: R`答案 (D)。特征根为 $1,\pm2i$，特征方程为 $(r-1)(r^2+4)=r^3-r^2+4r-4=0$，即 $y'''-y''+4y'-4y=0$。` },
    { n: 7, q: R`微分方程 $y''-\lambda^2y=e^{\lambda x}+e^{-\lambda x}(\lambda>0)$ 的特解形式为
(A) $a(e^{\lambda x}+e^{-\lambda x})$。 (B) $ax(e^{\lambda x}+e^{-\lambda x})$。 (C) $x(ae^{\lambda x}+be^{-\lambda x})$。 (D) $x^2(ae^{\lambda x}+be^{-\lambda x})$。`, a: R`(C)`, sol: R`答案 (C)。特征根 $\pm\lambda$，$\lambda$ 与 $-\lambda$ 均为单特征根，故分别取 $xae^{\lambda x}$ 与 $xbe^{-\lambda x}$。` },
    { n: 8, q: R`方程 $x\ln x\,dy+(y-\ln x)dx=0$ 满足初始条件 $y|_{x=e}=1$ 的特解为______。`, a: R`$y=\frac12\left(\ln x+\frac{1}{\ln x}\right)$`, sol: R`答案 $y=\frac12\left(\ln x+\frac{1}{\ln x}\right)$。` },
    { n: 9, q: R`微分方程 $(y+x^3)dx-2x\,dy=0$ 满足 $y|_{x=1}=\frac65$ 的特解为______。`, a: R`$y=\frac15x^3+\sqrt{x}$`, sol: R`答案 $y=\frac15x^3+\sqrt{x}$。` },
    { n: 10, q: R`方程 $(1+e^{\frac xy})y\,dx+(y-x)dy=0$ 的通解为______。`, a: R`$ye^{\frac yx}+x=C$`, sol: R`答案 $ye^{\frac yx}+x=C$。` },
    { n: 11, q: R`已知方程 $y''+ay'+by=0$ 的通解为 $y=C_1e^x+C_2e^{-x}$，则方程 $y''+ay'+by=e^x$ 满足初始条件 $y(0)=0,y'(0)=\frac32$ 的特解为______。`, a: R`$y=\frac12(e^x-e^{-x}+xe^x)$`, sol: R`答案 $y=\frac12(e^x-e^{-x}+xe^x)$。` },
    { n: 12, q: R`方程 $y''+y=x+\cos x$ 的通解为______。`, a: R`$y=C_1\cos x+C_2\sin x+x+\frac12x\sin x$`, sol: R`答案 $y=C_1\cos x+C_2\sin x+x+\frac12x\sin x$。` },
    { n: 13, q: R`设函数 $y(x)$ 满足 $y''+(x-1)y'+x^2y=e^x$，且 $y'(0)=1$。若 $\lim\limits_{x\to0}\frac{y(x)-x}{x^2}=a$，则 $a=$______。`, a: R`$a=1$`, sol: R`答案 $a=1$。` },
    { n: 14, q: R`二阶常系数非齐次线性微分方程 $y''-4y'+3y=2e^{2x}$ 的通解为______。`, a: R`$y=C_1e^{3x}+C_2e^x-2e^{2x}$`, sol: R`答案 $y=C_1e^{3x}+C_2e^x-2e^{2x}$。` },
    { n: 15, q: R`三阶常系数线性齐次微分方程 $y'''-2y''+y'-2y=0$ 的通解为______。`, a: R`$y=C_1e^{2x}+C_2\cos x+C_3\sin x$`, sol: R`答案 $y=C_1e^{2x}+C_2\cos x+C_3\sin x$。` },
    { n: 16, q: R`（仅数三要求）差分方程 $2y_{t+1}+10y_t-5t=0$ 的通解为______。`, a: R`$y_t=C(-5)^t+\frac{5}{12}\left(t-\frac16\right)$`, sol: R`答案 $y_t=C(-5)^t+\frac{5}{12}\left(t-\frac16\right)$。` },
    { n: 17, q: R`（仅数三要求）差分方程 $y_{t+1}-2y_t=4(3+t)2^t$ 的通解为______。`, a: R`$y_t=C2^t+(5t+t^2)2^t$`, sol: R`答案 $y_t=C2^t+(5t+t^2)2^t$。` },
    { n: 18, q: R`设函数 $y=y(x)$ 满足微分方程 $y''-3y'+2y=2e^x$，且其图形在点 $(0,1)$ 处的切线与曲线 $y=x^2-x+1$ 在该点的切线重合，求函数 $y=y(x)$。`, a: R`$y=(1-2x)e^x$`, sol: R`答案 $y=(1-2x)e^x$。` },
    { n: 19, q: R`已知 $y_1=3,y_2=3+x^2,y_3=3+e^x$ 是某二阶线性非齐次方程的三个特解，求该微分方程及通解。`, a: R`$y=C_1x^2+C_2e^x+3;(2x-x^2)y''+(x^2-2)y'+2(1-x)y=6(1-x)$`, sol: R`答案 $y=C_1x^2+C_2e^x+3$；方程为 $(2x-x^2)y''+(x^2-2)y'+2(1-x)y=6(1-x)$。` },
    { n: 20, q: R`求微分方程 $y''+(x+e^{2y})y'^3=0$ 的通解。`, a: R`$x=C_1e^y+C_2e^{-y}+\frac13e^{2y}$`, sol: R`答案 $x=C_1e^y+C_2e^{-y}+\frac13e^{2y}$。` },
    { n: 21, q: R`设函数 $f(x)$ 具有连续的一阶导数，且满足 $f(x)=\int_0^x(x^2-t^2)f'(t)dt+x^2$，求 $f(x)$ 的表达式。`, a: R`$f(x)=e^{x^2}-1$`, sol: R`答案 $f(x)=e^{x^2}-1$。` },
    { n: 22, q: R`设 $f(x)$ 连续，且满足 $\int_0^xf(t)dt=x+\int_0^xtf(x-t)dt$，求 $f(x)$。`, a: R`$f(x)=e^x$`, sol: R`答案 $f(x)=e^x$。` },
    { n: 23, q: R`设 $f(x)$ 为连续函数，且满足 $f(x)=e^x+e^x\int_0^x[f(t)]^2dt$。试求 $f(x)$。`, a: R`$f(x)=\frac{2}{3e^{-x}-e^x}$`, sol: R`答案 $f(x)=\frac{2}{3e^{-x}-e^x}$。` },
    { n: 24, q: R`函数 $f(x)$ 在 $[0,+\infty)$ 上可导，$f(0)=1$，且满足等式 $f'(x)+f(x)-\frac{1}{x+1}\int_0^xf(t)dt=0$。(1) 求导数 $f'(x)$；(2) 证明：当 $x\geq0$ 时，成立不等式 $e^{-x}\leq f(x)\leq1$。`, a: R`(1) $f'(x)=-\frac{e^{-x}}{x+1}$。(2) 提示：考虑 $\int_0^xf'(x)dx=-\int_0^x\frac{e^{-x}}{x+1}dx$。`, sol: R`(1) $f'(x)=-\frac{e^{-x}}{x+1}$。(2) 提示：考虑 $\int_0^xf'(x)dx=-\int_0^x\frac{e^{-x}}{x+1}dx$。` },
    { n: 25, q: R`设 $f(x)$ 连续，且 $f(t)=\iint_{x^2+y^2\leq t^2}(x^2+y^2)f(\sqrt{x^2+y^2})dxdy+t^4\ (t\geq0)$，求 $f(x)$。`, a: R`$f(x)=\frac{2}{\pi}\left(e^{\frac{\pi}{2}x^4}-1\right)$`, sol: R`答案 $f(x)=\frac{2}{\pi}\left(e^{\frac{\pi}{2}x^4}-1\right)$。` },
    { n: 26, q: R`设 $f(x)$ 在 $(-\infty,+\infty)$ 上有定义，$f'(0)=2$，对任意的 $x,y$，$f(x+y)=e^xf(y)+e^yf(x)$，求 $f(x)$。`, a: R`$f(x)=2xe^x$`, sol: R`答案 $f(x)=2xe^x$。` },
    { n: 27, q: R`设 $f(x)$ 在 $[1,+\infty)$ 上有连续二阶导数，$f(1)=0,f'(1)=1$，且 $z=(x^2+y^2)f(x^2+y^2)$ 满足 $\frac{\partial^2z}{\partial x^2}+\frac{\partial^2z}{\partial y^2}=0$，求 $f(x)$ 在 $[1,+\infty)$ 上的最大值。`, a: R`$f(x)=\frac{\ln x}{x},f_{\max}(e)=\frac1e$`, sol: R`答案 $f(x)=\frac{\ln x}{x}$，最大值 $f(e)=\frac1e$。` },
    { n: 28, q: R`设函数 $u(x,y)$ 的全微分 $du=[e^x+f''(x)]y\,dx+f(x)dy$，其中 $f$ 具有二阶连续的导数，且 $f(0)=4,f'(0)=3$，求 $f(x)$ 及 $u(x,y)$。`, a: R`$f(x)=4e^x-xe^x;u(x,y)=y(4-x)e^x+C$`, sol: R`答案 $f(x)=4e^x-xe^x$，$u(x,y)=y(4-x)e^x+C$。` },
    { n: 29, q: R`求过原点的曲线 $y=y(x)$，使曲线上任一点 $P$ 的法线段 $PQ$（$Q$ 是过 $P$ 点作曲线法线与 $x$ 轴的交点）的中点位于抛物线 $2y^2=x$ 上。`, a: R`$y^2=2x+1-e^{2x}$`, sol: R`答案 $y^2=2x+1-e^{2x}$。` },
    { n: 30, q: R`设函数 $f(x)$ 在 $[0,1]$ 上连续，在 $(0,1)$ 内大于零，且满足微分方程 $xf'(x)=f(x)+\frac32ax^2$。曲线 $y=f(x)$ 与直线 $x=1,y=0$ 围成区域 $D$ 的面积为 $2$，求：(1) $f(x)$；(2) 使 $D$ 绕 $x$ 轴旋转一周而成旋转体体积为最小的 $a$。`, a: R`(1) $f(x)=(4-a)x+\frac32ax^2$。(2) $a=-5$ 时 $V$ 最大。`, sol: R`(1) $f(x)=(4-a)x+\frac32ax^2$。(2) $a=-5$ 时 $V$ 最大。` },
    { n: 31, q: R`设曲线 $L$ 位于 $xOy$ 平面的第一象限内，$L$ 上任一点 $M$ 处的切线与 $y$ 轴总相交，交点记为 $A$。已知 $|MA|=|OA|$，且 $L$ 过点 $\left(\frac32,\frac32\right)$，求 $L$ 的方程。`, a: R`$y=\sqrt{3x-x^2}(0<x<3)$`, sol: R`答案 $y=\sqrt{3x-x^2}\ (0<x<3)$。` },
    { n: 32, q: R`（数三不要求）在上半平面一条向上凹的曲线，其上任一点 $P(x,y)$ 处的曲率等于此曲线在该点的法线段 $PQ$ 长度的倒数（$Q$ 是法线与 $x$ 轴的交点），且曲线在点 $(1,1)$ 处的切线与 $x$ 轴平行。`, a: R`$y=\frac12(e^{x-1}+e^{-(x-1)})$`, sol: R`答案 $y=\frac12(e^{x-1}+e^{-(x-1)})$。` },
    { n: 33, q: R`设 $L$ 是一条平面曲线，其上任意一点 $P(x,y)(x>0)$ 到坐标原点的距离，恒等于该点处的切线在 $y$ 轴上的截距，且 $L$ 经过点 $\left(\frac12,0\right)$。(1) 试求曲线 $L$ 的方程；(2) 设 $L$ 位于第一象限部分的一条切线，使该切线与 $L$ 以及两坐标轴所围图形的面积最小。`, a: R`(1) $y=\frac14-x^2$；(2) $y=-\frac{\sqrt3}{3}x+\frac13$。`, sol: R`(1) $y=\frac14-x^2$；(2) $y=-\frac{\sqrt3}{3}x+\frac13$。` },
    { n: 34, q: R`设 $y=y(x)$ 是区间 $(-\pi,\pi)$ 内过点 $\left(-\frac{\pi}{\sqrt2},\frac{\pi}{\sqrt2}\right)$ 的光滑曲线。当 $-\pi<x<0$ 时，曲线上任一点处的法线都过原点；当 $0\leq x<\pi$ 时，函数 $y(x)$ 满足 $y''+y+x=0$。求函数 $y(x)$ 的表达式。`, a: R`$y=\begin{cases}\sqrt{\pi^2-x^2},&-\pi<x<0,\\\pi\cos x+\sin x-x,&0\leq x<\pi.\end{cases}$`, sol: R`答案 $y=\begin{cases}\sqrt{\pi^2-x^2},&-\pi<x<0,\\\pi\cos x+\sin x-x,&0\leq x<\pi.\end{cases}$` },
    { n: 35, q: R`已知曲线 $L$：$\begin{cases}x=f(t)\\y=\cos t\end{cases}(0\leq t<\frac{\pi}{2})$，其中函数 $f(t)$ 具有连续导数，且 $f(0)=0$，$f'(t)>0\ (0<t<\frac{\pi}{2})$。若曲线 $L$ 的切线与 $x$ 轴的交点到切点的距离恒为 $1$，求函数 $f(t)$ 的表达式，并求以曲线 $L$ 及 $x$ 轴和 $y$ 轴为边界的区域的面积。`, a: R`$f(t)=\ln(\sec t+\tan t)-\sin t;S=\frac{\pi}{4}$`, sol: R`答案 $f(t)=\ln(\sec t+\tan t)-\sin t$，$S=\frac{\pi}{4}$。` },
    { n: 36, q: R`在 $xOy$ 坐标平面上，连续曲线 $L$ 过点 $M(1,0)$，其上任意点 $P(x,y)(x\neq0)$ 处的切线斜率与直线 $OP$ 的斜率之差等于 $ax$（常数 $a>0$）。(1) 求 $L$ 的方程；(2) 当 $L$ 与直线 $y=ax$ 所围成平面图形的面积为 $\frac83$ 时，确定 $a$ 的值。`, a: R`(1) $y=ax^2-ax$；(2) $a=2$。`, sol: R`(1) $y=ax^2-ax$；(2) $a=2$。` }
  ];
})();
