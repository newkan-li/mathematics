window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q880_s45"] = {
    id: "q880_s45",
    ch: "880题 · 高数 · 第六章 微分方程及其应用",
    title: "基础题·解答题",
    probTitle: "第六章 基础题 · 解答题（含原书解析）",
    book: "李林《精讲精练 880 题（数学二）》2026",
    problems: [
      { n: "(1)", q: R`求 $x^2y''-y'^2=0$ 过点 $P(1,0)$，且在点 $P$ 与 $y=x-1$ 相切的积分曲线。`, a: R`$y=\frac12(x^2-1)$`, sol: R`【解】$y(1)=0,y'(1)=1$。令 $y'=p$，得 $x^2p'-p^2=0$，分离变量积分得 $\frac1p=\frac1x+C_1$。由 $y'(1)=1$ 得 $C_1=0$，故 $p=x$，$y=\frac12x^2+C_2$。由 $y(1)=0$ 得 $C_2=-\frac12$，故 $y=\frac12(x^2-1)$。` },
      { n: "(2)", q: R`设 $f(x)$ 是连续函数，且 $f(x)=\cos x-\int_0^x(x-t)f(t)dt$，求 $f(x)$。`, a: R`$f(x)=\cos x-\frac12x\sin x$`, sol: R`【解】$f(x)=\cos x-x\int_0^xf(t)dt+\int_0^xtf(t)dt$，求导得 $f'(x)=-\sin x-\int_0^xf(t)dt$，再求导得 $f''(x)+f(x)=-\cos x$。特征根 $\pm i$，令 $f^*=x(A\cos x+B\sin x)$ 代入得 $A=0,B=-\frac12$。由 $f(0)=1,f'(0)=0$ 得 $C_1=1,C_2=0$，故 $f(x)=\cos x-\frac12x\sin x$。` },
      { n: "(3)", q: R`设 $f(x)$ 可导，对任何实数 $x,y$ 满足 $f(x+y)=e^xf(y)+e^yf(x)$，且 $f'(0)=e$，求 $f(x)$。`, a: R`$f(x)=xe^{x+1}$`, sol: R`【解】$f(0)=0$。由导数定义 $f'(x)=e^xf'(0)+f(x)=e^{x+1}+f(x)$，即 $f'(x)-f(x)=e^{x+1}$，解得 $f(x)=xe^{x+1}+Ce^x$。由 $f(0)=0$ 得 $C=0$，故 $f(x)=xe^{x+1}$。` },
      { n: "(4)", q: R`求微分方程 $y'''-y'=0$ 的一条积分曲线，使此积分曲线在原点处有拐点，且以直线 $y=2x$ 为切线。`, a: R`$y=e^x-e^{-x}$`, sol: R`【解】$y(0)=0,y'(0)=2,y''(0)=0$。特征根 $r_1=0,r_2=1,r_3=-1$，通解 $y=C_1+C_2e^x+C_3e^{-x}$。代入初始条件解得 $C_1=0,C_2=1,C_3=-1$，故 $y=e^x-e^{-x}$。` },
      { n: "(5)", q: R`设 $f(u)$ 有二阶连续导数，$z=f\left(\sqrt{x^2+y^2}\right)$ 满足 $\frac{\partial^2z}{\partial x^2}+\frac{\partial^2z}{\partial y^2}=x^2+y^2$，求 $z$ 的表达式。`, a: R`$z=\frac1{16}(x^2+y^2)^2+C_1\ln\sqrt{x^2+y^2}+C_2$`, sol: R`【解】令 $\sqrt{x^2+y^2}=u$，由轮换对称性得 $\frac{\partial^2z}{\partial x^2}+\frac{\partial^2z}{\partial y^2}=f''(u)+\frac1uf'(u)=u^2$，即 $[uf'(u)]'=u^3$，积分得 $f(u)=\frac1{16}u^4+C_1\ln u+C_2$，故 $z=\frac1{16}(x^2+y^2)^2+C_1\ln\sqrt{x^2+y^2}+C_2$。` },
      { n: "(6)", q: R`利用变换 $u=e^x$，求微分方程 $y''-(2e^x+1)y'+e^{2x}y=e^{3x}$ 的通解。`, a: R`$y=(C_1+C_2e^x)e^{e^x}+e^x+2$`, sol: R`【解】$u=e^x$，则 $y'=u\frac{dy}{du}$，$y''=u\frac{dy}{du}+u^2\frac{d^2y}{du^2}$，代入得 $\frac{d^2y}{du^2}-2\frac{dy}{du}+y=u$。特征根 $r_1=r_2=1$，令 $y^*=au+b$ 得 $y^*=u+2$，通解 $y=(C_1+C_2u)e^u+u+2$，即 $y=(C_1+C_2e^x)e^{e^x}+e^x+2$。` },
      { n: "(7)", q: R`设 $L$ 是一条平面曲线，其上任意一点 $P(x,y)\ (x>0)$ 到原点的距离恒等于该点处的切线在 $y$ 轴上的截距，且 $L$ 过点 $\left(\frac12,0\right)$。求：(Ⅰ) 曲线 $L$ 的方程；(Ⅱ) $L$ 位于第一象限部分的一条切线，使该切线与 $L$ 以及两坐标轴所围的面积最小。`, a: R`(Ⅰ) $y=\frac14-x^2$；(Ⅱ) $x=\frac{\sqrt3}6$`, sol: R`【解】(Ⅰ) 切线在 $y$ 轴上截距为 $y-xy'$，由 $\sqrt{x^2+y^2}=y-xy'$ 得 $y'=\frac yx-\sqrt{1+\left(\frac yx\right)^2}$。令 $\frac yx=u$，分离变量积分得 $y+\sqrt{x^2+y^2}=C$。由过 $\left(\frac12,0\right)$ 得 $C=\frac12$，即 $y=\frac14-x^2$。
(Ⅱ) 第一象限内切线 $Y=-2xX+x^2+\frac14$，与两坐标轴交点确定面积 $A(x)=\frac12\cdot\frac{\left(x^2+\frac14\right)^2}{2x}-\int_0^{1/2}\left(\frac14-x^2\right)dx$，令 $A'(x)=\frac1{4x^2}\left(x^2+\frac14\right)\left(3x^2-\frac14\right)=0$ 得 $x=\frac{\sqrt3}6$。` },
      { n: "(8)", q: R`设 $\overset{\frown}{OA}$ 是连接 $O(0,0)$ 和 $A(1,1)$ 的一段向上凸的曲线弧，$P(x,y)$ 为 $\overset{\frown}{OA}$ 上任一点，曲线弧 $\overset{\frown}{OP}$ 与有向线段 $\overline{OP}$ 所围图形的面积为 $x^2$，求曲线弧 $\overset{\frown}{OA}$ 的方程。`, a: R`$y=x-4x\ln x\ (0<x\leqslant1)$`, sol: R`【解】设 $y=y(x)$，面积 $\int_0^xy(t)dt-\frac12xy=x^2$，两边求导得 $y-\frac12y-\frac12xy'=2x$，即 $y'-\frac1xy=-4$，通解 $y=x(C-4\ln x)$。由 $y(1)=1$ 得 $C=1$，故 $y=x-4x\ln x\ (0<x\leqslant1)$。
【注】$y=x-4x\ln x$ 在 $x=0$ 处为可去间断点，令 $y(0)=0$ 则过原点。` },
      { n: "(9)", q: R`设 $y=y(x)$ 满足 $xy'-(2x^2-1)y=x^3\ (x\geqslant1)$，$y(1)=a$。(Ⅰ) 求 $y(x)$；(Ⅱ) 若 $\lim\limits_{x\to+\infty}\frac{y(x)}x$ 存在，求曲线 $y=y(x)$ 的斜渐近线方程。`, a: R`(Ⅰ) $y(x)=-\frac x2-\frac1{2x}+(1+a)e^{-1}\frac{e^{x^2}}x$；(Ⅱ) $y=-\frac12x$`, sol: R`【解】(Ⅰ) 方程化为 $y'-\left(2x-\frac1x\right)y=x^2$，通解 $y=\frac1xe^{x^2}\left(\int x^3e^{-x^2}dx+C\right)=-\frac x2-\frac1{2x}+\frac{Ce^{x^2}}x$。由 $y(1)=a$ 得 $C=(1+a)e^{-1}$，故 $y(x)=-\frac x2-\frac1{2x}+(1+a)e^{-1}\frac{e^{x^2}}x$。
(Ⅱ) $\frac{y(x)}x=-\frac12-\frac1{2x^2}+(1+a)e^{-1}\frac{e^{x^2}}{x^2}$。因 $\lim\limits_{x\to+\infty}\frac{e^{x^2}}{x^2}=+\infty$，仅当 $a=-1$ 时极限 $=-\frac12$ 存在，此时 $\lim\limits_{x\to+\infty}\left[y(x)+\frac12x\right]=0$，故斜渐近线为 $y=-\frac12x$。` },
      { n: "(10)", q: R`设 $f(x)$ 满足 $xf'(x)-f(x)=a(1-\ln x)+x^2\ (x>0,a\neq0)$，$f(1)=1-a$。(Ⅰ) 求 $f(x)$ 的表达式；(Ⅱ) 若方程 $f(x)=0$ 在 $x\in(0,+\infty)$ 内有唯一实根，求 $a$ 的取值范围。`, a: R`(Ⅰ) $f(x)=a\ln x+x^2-ax$；(Ⅱ) $a\in(0,+\infty)$`, sol: R`【解】(Ⅰ) 方程化为 $f'(x)-\frac1xf(x)=a\left(\frac1x-\frac{\ln x}x\right)+x$，通解 $f(x)=a\ln x+x^2+Cx$。由 $f(1)=1-a$ 得 $C=-a$，故 $f(x)=a\ln x+x^2-ax$。
(Ⅱ) $f(x)=0$ 即 $\frac1a=\frac{x-\ln x}{x^2}$。令 $g(x)=\frac{x-\ln x}{x^2}$，$g'(x)=\frac{2\ln x-x-1}{x^3}$。令 $h(x)=2\ln x-x-1$，$h'=\frac{2-x}x$，$h$ 在 $x=2$ 取最大值 $h(2)=2\ln2-3<0$，故 $g'(x)<0$，$g$ 单调递减。又 $\lim\limits_{x\to0^+}g=+\infty,\lim\limits_{x\to+\infty}g=0$，值域 $(0,+\infty)$，故 $\frac1a>0$，即 $a\in(0,+\infty)$。` },
      { n: "(11)", q: R`设 $f(x)$ 满足 $xf'(x)-3f(x)=2x$，$f(1)=\frac13k-1$，$k>0$。(Ⅰ) 求 $f(x)$ 的表达式；(Ⅱ) 求 $f(x)$ 在 $x\in\left[0,\frac1k\right]$ 上的最小值与最大值。`, a: R`(Ⅰ) $f(x)=\frac13kx^3-x$；(Ⅱ) 见解析`, sol: R`【解】(Ⅰ) $f'(x)-\frac3xf(x)=2$，通解 $f(x)=Cx^3-x$。由 $f(1)=\frac13k-1$ 得 $C=\frac13k$，故 $f(x)=\frac13kx^3-x$。
(Ⅱ) 令 $f'(x)=kx^2-1=0$ 得驻点 $x=\sqrt{\frac1k}$。当 $0<k<1$ 时驻点落在 $\left(0,\frac1k\right)$ 内，最小值 $f\left(\sqrt{\frac1k}\right)=-\frac23\sqrt{\frac1k}$。当 $0<k<\frac13$ 时 $f\left(\frac1k\right)=\frac{1-3k}{3k^2}>0=f(0)$，最大值为 $f\left(\frac1k\right)$；当 $\frac13<k<1$ 时 $f\left(\frac1k\right)<0=f(0)$，最大值为 $f(0)$；当 $k=\frac13$ 时 $f(0)=f\left(\frac1k\right)=0$ 同为最大值。` }
    ]
  };
})();
