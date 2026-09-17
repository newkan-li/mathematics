window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q880_s17"] = {
    id: "q880_s17",
    ch: "880题 · 高数 · 第三章 一元函数积分学及其应用",
    title: "基础题·解答题（二）",
    probTitle: "第三章 基础题 · 解答题 (11)–(21)（含原书解析）",
    book: "李林《精讲精练 880 题（数学二）》2026",
    problems: [
      { n: "(11)", q: R`设 $f(x)$ 在 $[0,\pi]$ 上有二阶连续导数，$f(0)=2,f(\pi)=1$，计算 $I=\int_0^\pi[f(x)+f''(x)]\sin x\,dx$。`, a: R`$I=3$`, sol: R`【解】$\int_0^\pi f''(x)\sin x\,dx=\sin x\,f'(x)|_0^\pi-\int_0^\pi f'(x)\cos x\,dx=-\int_0^\pi\cos x\,d[f(x)]=-f(x)\cos x|_0^\pi-\int_0^\pi f(x)\sin x\,dx=f(\pi)+f(0)-\int_0^\pi f(x)\sin x\,dx=3-\int_0^\pi f(x)\sin x\,dx$。
故 $I=\int_0^\pi f(x)\sin x\,dx+\left(3-\int_0^\pi f(x)\sin x\,dx\right)=3$。` },
      { n: "(12)", q: R`设 $g(x)=\int_0^{\sin x}f(tx^2)dt$，其中 $f(x)$ 是连续函数，且 $f(0)=1$，求 $g'(x)$。`, a: R`$x\neq0$ 时 $g'(x)=-\frac2{x^3}\int_0^{x^2\sin x}f(u)du+\left(\frac2x\sin x+\cos x\right)f(x^2\sin x)$；$g'(0)=1$`, sol: R`【解】令 $tx^2=u$，$x\neq0$ 时 $g(x)=\frac1{x^2}\int_0^{x^2\sin x}f(u)du$，故
$$g'(x)=-\frac2{x^3}\int_0^{x^2\sin x}f(u)du+\frac1{x^2}f(x^2\sin x)(2x\sin x+x^2\cos x).$$
当 $x=0$ 时 $g(0)=0$，$g'(0)=\lim\limits_{x\to0}\frac{\int_0^{x^2\sin x}f(u)du}{x^3}=\lim\limits_{x\to0}\frac{(2x\sin x+x^2\cos x)f(x^2\sin x)}{3x^2}=1\cdot f(0)=1$。` },
      { n: "(13)", q: R`设 $f(x)$ 在 $[0,a]$ 上具有二阶导数 $(a>0)$，且 $f(x)>0,f''(x)>0$，证明：$\int_0^af(x)dx>af\left(\frac a2\right)$。`, a: R`见证明`, sol: R`【证】将 $f(x)$ 在 $x=\frac a2$ 处泰勒展开：$f(x)=f\left(\frac a2\right)+f'\left(\frac a2\right)\left(x-\frac a2\right)+\frac{f''(\xi)}2\left(x-\frac a2\right)^2\geqslant f\left(\frac a2\right)+f'\left(\frac a2\right)\left(x-\frac a2\right)$。两边积分：
$$\int_0^af(x)dx\geqslant\int_0^a\left[f\left(\frac a2\right)+f'\left(\frac a2\right)\left(x-\frac a2\right)\right]dx=af\left(\frac a2\right).$$` },
      { n: "(14)", q: R`设 $f(x)$ 在 $[a,b]$ 上连续且单调增加，证明：$\int_a^bxf(x)dx\geqslant\frac{a+b}2\int_a^bf(x)dx$。`, a: R`见证明`, sol: R`【证】令 $F(x)=\int_a^xtf(t)dt-\frac{a+x}2\int_a^xf(t)dt$，则
$$F'(x)=xf(x)-\frac12\int_a^xf(t)dt-\frac{a+x}2f(x)=\frac{x-a}2f(x)-\frac12f(\xi)(x-a)=\frac{x-a}2[f(x)-f(\xi)]\geqslant0$$
（$a\leqslant\xi\leqslant x$，由 $f$ 单调增加）。故 $F$ 单调增加，$F(b)\geqslant F(a)=0$，即所证。` },
      { n: "(15)", q: R`设 $f(x)$ 在 $[a,b]$ 上连续，且 $y=f(x)$ 的图形关于直线 $x=\frac{a+b}2$ 对称，证明：$\int_a^bxf(x)dx=\frac{a+b}2\int_a^bf(x)dx$。`, a: R`见证明`, sol: R`【证】令 $x=a+b-t$，$\int_a^bxf(x)dx=\int_a^b(a+b-t)f(a+b-t)dt$。由对称性 $f(x)=f(a+b-x)$，故
$$\int_a^bxf(x)dx=(a+b)\int_a^bf(x)dx-\int_a^bxf(x)dx,$$
移项得 $\int_a^bxf(x)dx=\frac{a+b}2\int_a^bf(x)dx$。
【注】若 $y=f(x)$ 关于直线 $x=a$ 对称，则 $f(x)=f(2a-x)$；关于点 $(a,0)$ 对称，则 $f(x)=-f(2a-x)$。` },
      { n: "(16)", q: R`设 $f(x)$ 在 $[0,+\infty)$ 上连续，且单调增加，证明：当 $0<a<b$ 时，有 $\int_a^bxf(x)dx\geqslant\frac12\left[b\int_0^bf(x)dx-a\int_0^af(x)dx\right]$。`, a: R`见证明`, sol: R`【证】令 $F(x)=\int_a^xtf(t)dt-\frac12\left[x\int_0^xf(t)dt-a\int_0^af(t)dt\right]$，则
$$F'(x)=xf(x)-\frac12xf(x)-\frac12\int_0^xf(t)dt=\frac12xf(x)-\frac12\int_0^xf(t)dt\geqslant\frac12xf(x)-\frac12xf(x)=0,$$
故 $F$ 单调增加，$F(b)\geqslant F(a)=0$，即所证。` },
      { n: "(17)", q: R`求 $f(x)=\int_0^x\frac{2t-1}{t^2-t+1}dt$ 在 $[-1,1]$ 上的最大值与最小值。`, a: R`最大值 $\ln3$；最小值 $\ln\frac34$`, sol: R`【解】$f'(x)=\frac{2x-1}{x^2-x+1}=0$ 得 $x=\frac12$。$f(1)=\ln(t^2-t+1)|_0^1=0$，$f(-1)=\ln3$，$f\left(\frac12\right)=\ln\frac34$。故最小值 $\ln\frac34$，最大值 $\ln3$。` },
      { n: "(18)", q: R`设点 $A(a,0)(a>0)$，梯形 $OABC$ 的面积为 $S$，曲边梯形 $OABC$ 的面积为 $S_1$，其曲边由 $y=\frac12+x^2$ 确定，证明：$\frac S{S_1}<\frac32$。`, a: R`见证明`, sol: R`【证】$y(0)=\frac12$，$y(a)=a^2+\frac12$，故 $S=\frac12\left(\frac12+a^2+\frac12\right)a=\frac12a(a^2+1)$，$S_1=\int_0^a\left(x^2+\frac12\right)dx=\frac13a\left(a^2+\frac32\right)$，故 $\frac S{S_1}=\frac{\frac12a(a^2+1)}{\frac13a(a^2+\frac32)}=\frac{3(a^2+1)}{2(a^2+\frac32)}<\frac32$。` },
      { n: "(19)", q: R`设曲线 $y=\sin x\left(0\leqslant x\leqslant\frac\pi2\right)$，直线 $y=k(0\leqslant k\leqslant1)$ 与 $x=0$ 所围面积为 $S_1$，$y=\sin x\left(0\leqslant x\leqslant\frac\pi2\right)$，$y=k$ 与 $x=\frac\pi2$ 所围面积为 $S_2$，求 $S=S_1+S_2$ 的最小值。`, a: R`$\sqrt2-1$`, sol: R`【解】设交点横坐标为 $x$（$\sin x=k$），$S_1=\int_0^x(k-\sin t)dt=kx+\cos x-1$，$S_2=\int_x^{\pi/2}(\sin t-k)dt=\cos x+kx-\frac\pi2k$。代入 $k=\sin x$ 得 $S=2(x\sin x+\cos x)-\left(1+\frac\pi2\sin x\right)$，$S'=2x\cos x-\frac\pi2\cos x=0$ 得 $x=\frac\pi4$。比较 $S(0)=1$，$S\left(\frac\pi4\right)=\sqrt2-1$，$S\left(\frac\pi2\right)=\frac\pi2-1$，故最小值 $S\left(\frac\pi4\right)=\sqrt2-1$。` },
      { n: "(20)", q: R`设曲线 $y=\sin x\left(0\leqslant x\leqslant\frac\pi2\right),y=1$ 及 $x=0$ 所围平面图形为 $D_1$，$y=\sin x(0\leqslant x\leqslant\pi)$ 及 $y=0$ 所围平面图形为 $D_2$。求：
(Ⅰ) $D_1$ 绕直线 $x=\frac\pi2$ 旋转一周所得体积 $V_1$；
(Ⅱ) $D_2$ 绕 $y$ 轴旋转一周所得体积 $V_2$。`, a: R`(Ⅰ) $\frac{\pi^3}4-\pi^2+2\pi$；(Ⅱ) $2\pi^2$`, sol: R`【解】(Ⅰ) 微元 $\mathrm dV_1=\left[\pi\left(\frac\pi2\right)^2-\pi\left(\frac\pi2-x\right)^2\right]\mathrm dy=\left[\pi^2\arcsin y-\pi(\arcsin y)^2\right]\mathrm dy$，故
$$V_1=\int_0^1\mathrm dV_1=\pi^2\int_0^1\arcsin y\,dy-\pi\int_0^1(\arcsin y)^2dy=\frac{\pi^3}4-\pi^2+2\pi.$$
(Ⅱ) $\mathrm dV_2=2\pi x\sin x\,dx$，$V_2=\int_0^\pi2\pi x\sin x\,dx=2\pi^2$。` },
      { n: "(21)", q: R`设星形线 $\begin{cases}x=a\cos^3t,\\y=a\sin^3t\end{cases}(0\leqslant t\leqslant2\pi,a>0)$。求：
(Ⅰ) 所围面积 $A$；
(Ⅱ) 弧长 $L$；
(Ⅲ) 绕 $x$ 轴旋转一周所得体积 $V$ 和表面积 $S$。`, a: R`(Ⅰ) $\frac{3\pi a^2}8$；(Ⅱ) $6a$；(Ⅲ) $V=\frac{32}{105}\pi a^3$，$S=\frac{12}5\pi a^2$`, sol: R`【解】(Ⅰ) $A=4\int_0^ay\,dx=12a^2\int_0^{\pi/2}(\sin^4t-\sin^6t)dt=\frac{3\pi a^2}8$。
(Ⅱ) $L=4\int_0^{\pi/2}\sqrt{x'^2+y'^2}dt=4\int_0^{\pi/2}3a\sin t\cos t\,dt=6a$。
(Ⅲ) $V=2\int_0^a\pi y^2dx=6\pi a^3\int_0^{\pi/2}\sin^7t(1-\sin^2t)dt=\frac{32}{105}\pi a^3$；$S=2\int_0^{\pi/2}2\pi y\sqrt{x'^2+y'^2}dt=12\pi a^2\int_0^{\pi/2}\sin^4t\cos t\,dt=\frac{12}5\pi a^2$。
【注】参数方程求旋转体体积/面积，先在直角坐标系写出表达式，再代入参数方程换元。` }
    ]
  };
})();
