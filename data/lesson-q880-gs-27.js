window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q880_s26"] = {
    id: "q880_s26",
    ch: "880题 · 高数 · 第三章 一元函数积分学及其应用",
    title: "综合题·解答题（七，本章完）",
    probTitle: "第三章 综合题 · 解答题 (45)–(60)（含原书解析）",
    book: "李林《精讲精练 880 题（数学二）》2026",
    problems: [
      { n: "(45)", q: R`设 $f(x)=x^n\sqrt{1-x^2},x\in[0,1]$ 与 $y=0$ 所围平面区域的面积为 $S_n$，$g(x)=\sin^{\frac n2}x,x\in\left[0,\frac\pi2\right]$ 与 $y=0$ 所围平面区域绕 $x$ 轴旋转一周所得体积为 $V_n\ (n=1,2,\cdots)$，求极限 $\lim\limits_{n\to\infty}\frac{\pi S_n}{V_n}$。`, a: R`$0$`, sol: R`【解】$V_n=\pi\int_0^{\pi/2}(\sin^{n/2}x)^2dx=\pi\int_0^{\pi/2}\sin^nx\,dx$，$\pi S_n=\pi\int_0^1x^n\sqrt{1-x^2}dx\xlongequal{x=\sin t}\pi\int_0^{\pi/2}\sin^nt\cos^2t\,dt=V_n-V_{n+2}$。由 $V_{n+2}=\frac{n+1}{n+2}V_n$ 得 $\pi S_n=\frac1{n+2}V_n$，故 $\lim\limits_{n\to\infty}\frac{\pi S_n}{V_n}=\lim\limits_{n\to\infty}\frac1{n+2}=0$。` },
      { n: "(46)", q: R`设 $f(x)=\begin{cases}\lim\limits_{t\to\infty}\frac x{1+x^2-e^{tx}},&x\neq0,\\0,&x=0,\end{cases}$ 曲线 $y=f(x)$ 与 $y=\frac12x$ 以及 $x=1$ 所围图形为 $D$。试求：
(Ⅰ) $D$ 的面积；
(Ⅱ) $D$ 绕 $x$ 轴旋转一周所得旋转体的体积。`, a: R`(Ⅰ) $\frac12\ln2$；(Ⅱ) $\frac{\pi^2}8-\frac\pi4$`, sol: R`【解】(Ⅰ) $x\geqslant0$ 时 $f(x)=\lim\limits_{t\to+\infty}\frac x{1+x^2-e^{tx}}=0$；$x<0$ 时 $f(x)=\frac x{1+x^2}$。故 $f(x)=\begin{cases}0,&x\geqslant0,\\\frac x{1+x^2},&x<0.\end{cases}$ $y=f(x)$ 与 $y=\frac12x$ 的交点为 $\left(-1,-\frac12\right),(0,0)$。
$$A=\int_{-1}^0\left(\frac12x-\frac x{1+x^2}\right)dx+\frac12\times\frac12\times1=\frac14+\left[\frac14x^2-\frac12\ln(1+x^2)\right]\Big|_{-1}^0=\frac12\ln2.$$
(Ⅱ) $x\geqslant0$ 部分绕 $x$ 轴旋转为圆锥，$V_1=\frac13\pi\left(\frac12\right)^2\cdot1=\frac\pi{12}$；$x\leqslant0$ 部分 $V_2=\pi\int_{-1}^0\frac{x^2}{(1+x^2)^2}dx-\frac\pi{12}$，故 $V=V_1+V_2=\pi\int_{-1}^0\frac{x^2}{(1+x^2)^2}dx=\pi\left[\arctan x\Big|_{-1}^0-\int_{-1}^0\frac{dx}{(1+x^2)^2}\right]$。又 $\int_{-1}^0\frac{dx}{(1+x^2)^2}=\int_{-\pi/4}^0\cos^2u\,du=\frac12\left(\frac\pi4+\frac12\right)$，故 $V=\pi\left[\frac\pi4-\frac12\left(\frac\pi4+\frac12\right)\right]=\frac{\pi^2}8-\frac\pi4$。` },
      { n: "(47)", q: R`设曲线 $y=\sin x$ 在 $x\in[0,n\pi]\ (n=1,2,\cdots)$ 上与 $x$ 轴所围成的区域为 $D$，$D$ 绕 $y$ 轴旋转一周所得旋转体的体积为 $a_n$。求：
(Ⅰ) $a_n$；
(Ⅱ) 极限 $\lim\limits_{n\to\infty}\sum\limits_{k=1}^n\frac{2k\pi^2}{a_n}\sin\frac{k\pi}{2n}$。`, a: R`(Ⅰ) $a_n=2n^2\pi^2$；(Ⅱ) $\frac4{\pi^2}$`, sol: R`【解】(Ⅰ) $a_n=2\pi\int_0^{n\pi}x|\sin x|dx\xlongequal{x=n\pi-t}2\pi\int_0^{n\pi}(n\pi-t)|\sin t|dt=2n\pi^2\int_0^{n\pi}|\sin t|dt-a_n$，移项得 $a_n=n\pi^2\int_0^{n\pi}|\sin t|dt=n^2\pi^2\int_0^\pi\sin t\,dt=2n^2\pi^2$。
(Ⅱ) 原式 $=\lim\limits_{n\to\infty}\sum\limits_{k=1}^n\frac k{n^2}\sin\frac{k\pi}{2n}=\frac4{\pi^2}\int_0^{\pi/2}x\sin x\,dx=\frac4{\pi^2}$。` },
      { n: "(48)", q: R`将半径为 $R$ 的球沉入水中，它与水面相切，设球的密度与水的密度相等，现将球从水中取出，问至少需要做功多少？`, a: R`$\frac43\pi\rho gR^4$`, sol: R`【解】建系使球心在 $(0,R)$，球方程 $x^2+(y-R)^2=R^2$。微元 $\mathrm dW=\rho g(2R-y)\pi[R^2-(y-R)^2]\mathrm dy$，故
$$W=\int_0^{2R}\rho g\pi(2R-y)[R^2-(y-R)^2]dy=\frac43\pi\rho gR^4.$$` },
      { n: "(49)", q: R`设图所示的三角形薄板为同一等腰三角形薄板，已知其底为 $2b$、高为 $h$，将其垂直放入静水中，图1是其底与水面相齐，图2是其顶点与水面相齐，设图1与图2薄板一侧所受压力分别为 $P_1$ 和 $P_2$，求 $\frac{P_2}{P_1}$。`, a: R`$2$`, sol: R`【解】图1中直线 $AC:y=\frac{b(h-x)}h$，$\mathrm dP_1=2\rho gxy\,dx=\frac{2\rho gb}h(h-x)x\,dx$，$P_1=\int_0^h\frac{2\rho gb}h(h-x)x\,dx=\frac13\rho gbh^2$。图2中直线 $OA:y=\frac{bx}h$，$P_2=\int_0^h\frac{2\rho gb}hx^2dx=\frac23\rho gbh^2$。故 $\frac{P_2}{P_1}=2$。` },
      { n: "(50)", q: R`已知曲线 $L$ 的极坐标方程为 $r=1+\cos\theta\left(0\leqslant\theta\leqslant\frac\pi2\right)$。求：
(Ⅰ) 曲线 $L$ 在 $\theta=\frac\pi4$ 对应点处的切线 $T$ 的直角坐标方程；
(Ⅱ) 曲线 $L$、切线 $T$ 与 $x$ 轴所围图形的面积。`, a: R`(Ⅰ) $y=(1-\sqrt2)x+1+\frac{\sqrt2}2$；(Ⅱ) $\frac98-\frac{3\pi}{16}+\frac{3\sqrt2}8$`, sol: R`【解】(Ⅰ) 参数方程 $x=(1+\cos\theta)\cos\theta,y=(1+\cos\theta)\sin\theta$，$\frac{dy}{dx}=\frac{\cos\theta+\cos2\theta}{-\sin\theta-\sin2\theta}$，$\frac{dy}{dx}\Big|_{\theta=\pi/4}=1-\sqrt2$。点 $x=y=\frac12(1+\sqrt2)$，切线 $y=(1-\sqrt2)x+1+\frac{\sqrt2}2$。
(Ⅱ) 曲边三角形面积 $A_1=\frac12\int_0^{\pi/4}(1+\cos\theta)^2d\theta=\frac3{16}\pi+\frac18+\frac{\sqrt2}2$；切线与 $x$ 轴截距 $x=2+\frac32\sqrt2$，故所围面积 $S=\frac12\left(2+\frac32\sqrt2\right)\frac{1+\sqrt2}2-\left(\frac{3\pi}{16}+\frac18+\frac{\sqrt2}2\right)=\frac98-\frac{3\pi}{16}+\frac{3\sqrt2}8$。` },
      { n: "(51)", q: R`求曲线 $y=3-|x^2-1|$ 与 $x$ 轴围成封闭图形绕直线 $y=3$ 旋转所得旋转体的体积。`, a: R`$\frac{448\pi}{15}$`, sol: R`【解】由对称性只考虑 $x\in[0,2]$，$y=\begin{cases}x^2+2,&0\leqslant x\leqslant1,\\4-x^2,&1<x\leqslant2.\end{cases}$ 微元 $\mathrm dV=\pi\{3^2-[3-y]^2\}dx$，故 $V=2(V_1+V_2)=2\pi\int_0^1(8+2x^2-x^4)dx+2\pi\int_1^2(8+2x^2-x^4)dx=\frac{448\pi}{15}$。` },
      { n: "(52)", q: R`设心形线 $r=4(1+\cos\theta)$ 与 $\theta=0,\theta=\frac\pi2$ 所围图形为 $D$，求 $D$ 绕极轴旋转一周所得旋转体的体积。`, a: R`$160\pi$`, sol: R`【解】参数方程 $x=4(1+\cos\theta)\cos\theta,y=4(1+\cos\theta)\sin\theta$，$V=\int_0^8\pi y^2dx=\int_{\pi/2}^0\pi\cdot16(1+\cos\theta)^2\sin^2\theta\cdot4(-\sin\theta-2\sin\theta\cos\theta)d\theta=64\pi\int_0^{\pi/2}(1+\cos\theta)^2\sin^3\theta(1+2\cos\theta)d\theta=160\pi$。` },
      { n: "(53)", q: R`设 $D$ 是位于曲线 $y=\frac1{x(\ln x)^{\alpha+1}}\ (\alpha>0,2\leqslant x<+\infty)$ 下方、$x$ 轴上方的无界区域。求：
(Ⅰ) $D$ 的面积 $S(\alpha)$；
(Ⅱ) $S(\alpha)$ 的最小值。`, a: R`(Ⅰ) $\frac1{\alpha(\ln2)^\alpha}$；(Ⅱ) $-\ln(\ln2)\cdot(\ln2)^{\frac1{\ln(\ln2)}}$`, sol: R`【解】(Ⅰ) $S(\alpha)=\int_2^{+\infty}\frac{dx}{x(\ln x)^{\alpha+1}}=\int_2^{+\infty}(\ln x)^{-\alpha-1}d(\ln x)=-\frac1\alpha(\ln x)^{-\alpha}\Big|_2^{+\infty}=\frac1{\alpha(\ln2)^\alpha}$。
(Ⅱ) 令 $f(\alpha)=\alpha(\ln2)^\alpha$，$f'(\alpha)=(\ln2)^\alpha[1+\alpha\ln(\ln2)]=0$ 得 $\alpha_0=-\frac1{\ln(\ln2)}$，为最大值点，故 $S$ 的最小值为 $\frac1{f(\alpha_0)}=-\ln(\ln2)\cdot(\ln2)^{\frac1{\ln(\ln2)}}$。` },
      { n: "(54)", q: R`设 $f(x)$ 在 $[0,+\infty)$ 上连续且单调减少，$f(x)\geqslant0$，$a_n=\sum\limits_{k=1}^nf(k)-\int_1^nf(x)dx\ (n=1,2,\cdots)$，证明：$\lim\limits_{n\to\infty}a_n$ 存在。`, a: R`见证明`, sol: R`【证】由 $f$ 单调减，$f(k+1)\leqslant\int_k^{k+1}f(x)dx\leqslant f(k)$，故 $a_{n+1}-a_n=f(n+1)-\int_n^{n+1}f(x)dx\leqslant0$，$\{a_n\}$ 单调减少。又 $f(k)-\int_k^{k+1}f(x)dx\geqslant0$，$\int_n^{n+1}f(x)dx\geqslant0$，故 $a_n\geqslant0$ 有下界。由单调有界准则 $\lim\limits_{n\to\infty}a_n$ 存在。` },
      { n: "(55)", q: R`设 $a_n=\int_0^1x^n\sqrt{1-x^2}dx$，$b_n=\int_0^{\frac\pi2}\sin^nx\cos^nx\,dx$，求 $\lim\limits_{n\to\infty}\frac{b_n}{a_n}$。`, a: R`$0$`, sol: R`【解】$b_n=2^{-n-1}\int_0^\pi\sin^nx\,dx=2^{-n}\int_0^{\pi/2}\sin^nx\,dx=2^{-n}c_n$。$a_n\xlongequal{x=\sin t}\int_0^{\pi/2}\sin^nt\cos^2t\,dt=c_n-c_{n+2}$，而 $c_{n+2}=\frac{n+1}{n+2}c_n$，故 $a_n=\frac1{n+2}c_n=\frac{2^n}{n+2}b_n$，$\lim\limits_{n\to\infty}\frac{b_n}{a_n}=\lim\limits_{n\to\infty}\frac{n+2}{2^n}=0$。` },
      { n: "(56)", q: R`设 $f(x)$ 在 $[a,b]$ 上连续，在 $(a,b)$ 内可导，$f'(x)>0$。证明：存在唯一的 $\xi\in(a,b)$，使得 $y=f(x)$ 与 $y=f(\xi),x=a$ 所围图形的面积 $S_1$，和 $y=f(x)$ 与 $y=f(\xi),x=b$ 所围图形的面积 $S_2$，满足 $S_1=3S_2$。`, a: R`见证明`, sol: R`【证】即证存在唯一 $\xi$ 使 $\int_a^\xi[f(\xi)-f(x)]dx=3\int_\xi^b[f(x)-f(\xi)]dx$。令 $F(x)=\int_a^x[f(x)-f(t)]dt-3\int_x^b[f(t)-f(x)]dt$。由 $f'>0$ 得 $F(a)=-3\int_a^b[f(t)-f(a)]dt<0$，$F(b)=\int_a^b[f(b)-f(t)]dt>0$，由零点定理存在 $\xi$ 使 $F(\xi)=0$。又 $F'(x)=f'(x)[(x-a)+3(b-x)]>0$，$F$ 严格单调增，$\xi$ 唯一。` },
      { n: "(57)", q: R`求心形线 $r=1+\cos\theta$ 与 $r=3\cos\theta$ 所围公共部分图形的面积。`, a: R`$\frac54\pi$`, sol: R`【解】$r=3\cos\theta$ 即 $x^2+y^2=3x$。由 $\begin{cases}r=1+\cos\theta\\r=3\cos\theta\end{cases}$ 得 $\theta=\frac\pi3$。由对称性
$$A=2\left[\frac12\int_0^{\pi/3}(1+\cos\theta)^2d\theta+\frac12\int_{\pi/3}^{\pi/2}9\cos^2\theta\,d\theta\right]=\int_0^{\pi/3}\left(\frac32+2\cos\theta+\frac12\cos2\theta\right)d\theta+\frac92\int_{\pi/3}^{\pi/2}(1+\cos2\theta)d\theta=\frac54\pi.$$` },
      { n: "(58)", q: R`设曲线族 $y=kx^2\ (k>0)$，对于每个 $k\geqslant\frac4{\pi^2}$，曲线 $y=kx^2$ 与 $y=\sin x\left(0<x\leqslant\frac\pi2\right)$ 交于唯一点 $(t,\sin t)$，其中 $t=t(k)$。$S_1$ 表示 $y=kx^2$ 与 $y=\sin x$ 所围区域的面积，$S_2$ 表示 $y=\sin x$ 与 $y=\sin t$ 及 $x=\frac\pi2$ 所围区域的面积。
(Ⅰ) 写出 $S_1+S_2$ 关于 $t$ 的函数表达式；
(Ⅱ) 证明：$S_1+S_2$ 有最小值。`, a: R`(Ⅰ) $f(t)=1+\frac23t\sin t-\frac\pi2\sin t$，$t\in\left(0,\frac\pi2\right]$`, sol: R`【解】(Ⅰ) 由 $k=\frac{\sin t}{t^2}$，$S_1+S_2=\int_0^t\left(\sin x-\frac{\sin t}{t^2}x^2\right)dx+\int_t^{\pi/2}(\sin x-\sin t)dx=1-\frac13t\sin t-\left(\frac\pi2-t\right)\sin t=1+\frac23t\sin t-\frac\pi2\sin t$。
【证】(Ⅱ) $f'(t)=\frac23\sin t+\frac23t\cos t-\frac\pi2\cos t$，$f'_+(0)=-\frac\pi2<0$，$f'\left(\frac\pi2\right)=\frac23>0$，由零点定理存在 $t_0\in\left(0,\frac\pi2\right)$ 使 $f'(t_0)=0$；又 $f''(t)=\frac43\cos t+\left(\frac\pi2-\frac23t\right)\sin t>0$，故 $f$ 有唯一极小值点 $t_0$，即 $S_1+S_2$ 有最小值。` },
      { n: "(59)", q: R`设曲线 $L:y=\tan x^2\left(0\leqslant x\leqslant\frac{\sqrt\pi}2\right)$。
(Ⅰ) 求由 $y=1$ 与曲线 $L$ 以及 $y$ 轴围成的图形 $D$ 绕 $y$ 轴旋转一周所得旋转体的体积 $V$；
(Ⅱ) 设 (Ⅰ) 中旋转体内盛满水，问将水抽完至少需要做多少功？用 $W$ 表示所做的功，用 $\rho$ 表示水的密度，用 $g$ 表示重力加速度。`, a: R`(Ⅰ) $\frac{\pi^2}4-\frac\pi2\ln2$；(Ⅱ) $\frac{\pi\rho g}2(1-\ln2)$`, sol: R`【解】(Ⅰ) 由 $y=\tan x^2$ 得 $x=\sqrt{\arctan y}\ (0\leqslant y\leqslant1)$，故 $V=\pi\int_0^1x^2(y)dy=\pi\int_0^1\arctan y\,dy=\frac{\pi^2}4-\frac\pi2\ln2$。
(Ⅱ) $W=\rho g\pi\int_0^1(1-y)\arctan y\,dy=\pi\rho g\left(\frac\pi4-\frac{\ln2}2-\int_0^1y\arctan y\,dy\right)$，而 $\int_0^1y\arctan y\,dy=\frac\pi4-\frac12$，故 $W=\frac{\pi\rho g}2(1-\ln2)$。` },
      { n: "(60)", q: R`设非负函数 $f(x)$ 在区间 $[0,1]$ 上有连续的二阶导数，且 $f(0)=1$，$f''(x)<0$，证明：
(Ⅰ) 当 $x\in[0,1]$ 时，有 $\int_0^xf(t)dt\geqslant\frac12[xf(x)+x]$；
(Ⅱ) $\int_0^1\left(\frac23-x\right)f(x)dx\geqslant\frac16$。`, a: R`见证明`, sol: R`【证】(Ⅰ) 令 $F(x)=\int_0^xf(t)dt-\frac12[xf(x)+x]$，则 $F(0)=0$。$F'(x)=\frac12[f(x)-1]-\frac12xf'(x)=\frac12x[f'(\xi)-f'(x)]\ (\ 0<\xi<x)$，由 $f''<0$ 知 $f'$ 单调减，$f'(\xi)>f'(x)$，故 $F'(x)>0$，$F(x)\geqslant F(0)=0$。
(Ⅱ) 由 $\int_0^1xf(x)dx=\int_0^1f(x)dx-\int_0^1\left[\int_0^xf(t)dt\right]dx$ 及 (Ⅰ) 得 $\int_0^1\left[\int_0^xf(t)dt\right]dx\geqslant\frac12\int_0^1xf(x)dx+\frac14$，故 $\int_0^1f(x)dx-\int_0^1xf(x)dx\geqslant\frac12\int_0^1xf(x)dx+\frac14$，即 $\int_0^1\left(\frac23-x\right)f(x)dx\geqslant\frac16$。` }
    ]
  };
})();
