window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q880_s25"] = {
    id: "q880_s25",
    ch: "880题 · 高数 · 第三章 一元函数积分学及其应用",
    title: "综合题·解答题（六）",
    probTitle: "第三章 综合题 · 解答题 (36)–(44)（含原书解析）",
    book: "李林《精讲精练 880 题（数学二）》2026",
    problems: [
      { n: "(36)", q: R`设曲线 $y=a\sqrt x\ (a>0)$ 与 $y=\ln\sqrt x$ 在点 $(x_0,y_0)$ 处有公切线。求：
(Ⅰ) 常数 $a$ 及点 $(x_0,y_0)$；
(Ⅱ) 两曲线与 $x$ 轴所围图形绕 $x$ 轴旋转一周所得旋转体的体积。`, a: R`(Ⅰ) $a=e^{-1}$，切点 $(e^2,1)$；(Ⅱ) $\frac\pi2$`, sol: R`【解】(Ⅰ) $y=a\sqrt x$ 与 $y=\ln\sqrt x$ 的导数分别为 $y'=\frac a{2\sqrt x}$、$y'=\frac1{2x}$。由公切线 $\begin{cases}a\sqrt{x_0}=\ln\sqrt{x_0},\\\frac a{2\sqrt{x_0}}=\frac1{2x_0},\end{cases}$ 解得 $x_0=e^2,a=e^{-1}$，切点 $(e^2,1)$。
(Ⅱ) $V=\int_0^{e^2}\pi\left(\frac{\sqrt x}e\right)^2dx-\int_1^{e^2}\pi(\ln\sqrt x)^2dx=\frac\pi{e^2}\int_0^{e^2}x\,dx-\frac\pi4\int_1^{e^2}(\ln x)^2dx=\frac\pi2e^2-\frac\pi4\left[x(\ln x)^2-2x\ln x+2x\right]\Big|_1^{e^2}=\frac\pi2e^2-\frac\pi2(e^2-1)=\frac\pi2$。` },
      { n: "(37)", q: R`设 $f(x)$ 在 $[a,b]$ 上可导，$f(a)>0,f'(x)>0$，$S_1(x)$ 与 $S_2(x)$ 为如图所示阴影部分的面积。证明：存在唯一的 $\xi$，使得 $\frac{S_1(\xi)}{S_2(\xi)}=k$（$k$ 为正的常数）。`, a: R`见证明`, sol: R`【证】$S_1(x)=(x-a)f(x)-\int_a^xf(t)dt$，$S_2(x)=\int_x^bf(t)dt-(b-x)f(x)$。令 $F(x)=S_1(x)-kS_2(x)$，由 $f'(x)>0$ 知 $f(a)<f(x)<f(b)$，得 $F(a)=-k\int_a^b[f(t)-f(a)]dt<0$，$F(b)=\int_a^b[f(b)-f(t)]dt>0$，由零点定理存在 $\xi\in(a,b)$ 使 $F(\xi)=0$，即 $\frac{S_1(\xi)}{S_2(\xi)}=k$。
又 $F'(x)=f'(x)(x-a)+kf'(x)(b-x)>0$，故 $F$ 严格单调增加，$\xi$ 唯一。` },
      { n: "(38)", q: R`求曲线 $4y=\int_0^2x\sqrt{12-x^2u^2}du\ (x\geqslant0)$ 的全长。`, a: R`$\frac{2\pi}3+\frac{\sqrt3}2$`, sol: R`【解】$\int_0^2x\sqrt{12-x^2u^2}du\xlongequal{xu=t}\int_0^{2x}\sqrt{12-t^2}dt$，故 $4y=\int_0^{2x}\sqrt{12-t^2}dt$，两边求导得 $y'=\frac14\sqrt{12-4x^2}\cdot2=\sqrt{3-x^2}$。故
$$s=\int_0^{\sqrt3}\sqrt{1+y'^2}dx=\int_0^{\sqrt3}\sqrt{4-x^2}dx\xlongequal{x=2\sin t}4\int_0^{\pi/3}\cos^2t\,dt=2\left(t+\frac12\sin2t\right)\Big|_0^{\pi/3}=\frac{2\pi}3+\frac{\sqrt3}2.$$` },
      { n: "(39)", q: R`设平面图形 $D$ 由 $x^2+y^2\leqslant2x$ 与 $y\geqslant x$ 确定，求图形 $D$ 绕直线 $x=2$ 旋转一周所得旋转体的体积。`, a: R`$2\pi\left(\frac\pi4-\frac13\right)$`, sol: R`【解】$D$ 的边界为 $x=1-\sqrt{1-y^2}$ 与 $x=y\ (0\leqslant y\leqslant1)$。微元 $\mathrm dV=2\pi[\sqrt{1-y^2}-(1-y)^2]\mathrm dy$，故
$$V=\int_0^12\pi[\sqrt{1-y^2}-(1-y)^2]dy=2\pi\left(\frac\pi4-\frac13\right).$$` },
      { n: "(40)", q: R`求曲线 $y=e^{-x}\sqrt{\sin x}\ (x\geqslant0)$ 绕 $x$ 轴旋转所得旋转体的体积。`, a: R`$\frac\pi{5(1-e^{-2\pi})}$`, sol: R`【解】定义域 $x\in[2k\pi,(2k+1)\pi]$。$V=\sum\limits_{k=0}^\infty\pi\int_{2k\pi}^{(2k+1)\pi}e^{-2x}\sin x\,dx\xlongequal{x=t+2k\pi}\sum\limits_{k=0}^\infty\pi e^{-4k\pi}\int_0^\pi e^{-2t}\sin t\,dt=\frac{\pi(1+e^{-2\pi})}5\cdot\frac1{1-e^{-4\pi}}=\frac\pi{5(1-e^{-2\pi})}$。` },
      { n: "(41)", q: R`设摆线 $\begin{cases}x=a(t-\sin t),\\y=a(1-\cos t)\end{cases}(0\leqslant t\leqslant2\pi,a>0)$ 与 $x$ 轴所围平面图形为 $D$。求：
(Ⅰ) $D$ 绕 $x$ 轴、$y$ 轴各旋转一周所得旋转体的体积；
(Ⅱ) $D$ 绕直线 $y=2a$ 旋转一周所得旋转体的体积。`, a: R`(Ⅰ) $V_x=5\pi^2a^3$，$V_y=6\pi^3a^3$；(Ⅱ) $V_{y=2a}=7\pi^2a^3$`, sol: R`【解】(Ⅰ) 由摆线一拱的旋转体体积公式，$V_x=\pi\int_0^{2\pi a}y^2dx=5\pi^2a^3$；$V_y=2\pi\int_0^{2\pi a}x y\,dx=6\pi^3a^3$。
(Ⅱ) $V_{y=2a}=\pi(2a)^2\cdot2\pi a-\int_0^{2\pi a}\pi(2a-y)^2dx=8\pi^2a^3-\pi a^3\int_0^{2\pi}(1+\cos t)^2(1-\cos t)dt=8\pi^2a^3-\pi a^3\int_0^{2\pi}\sin^2t(1+\cos t)dt=7\pi^2a^3$。` },
      { n: "(42)", q: R`求圆 $(x-2)^2+y^2=1$ 绕 $y$ 轴旋转一周所得旋转体的表面积。`, a: R`$8\pi^2$`, sol: R`【解】参数方程 $x=2+\cos t,y=\sin t\ (0\leqslant t\leqslant2\pi)$，故
$$S=2\pi\int_0^{2\pi}x(t)\sqrt{x'^2+y'^2}dt=2\pi\int_0^{2\pi}(2+\cos t)dt=8\pi^2.$$` },
      { n: "(43)", q: R`求双纽线 $r^2=a^2\cos2\theta\ (a>0)$ 绕极轴旋转所成旋转曲面的面积。`, a: R`$2\pi a^2(2-\sqrt2)$`, sol: R`【解】由对称性考虑 $\theta\in\left[0,\frac\pi2\right]$，$S=4\pi\int_0^{\pi/4}r\sin\theta\sqrt{r^2+r'^2}d\theta$。由 $r^2=a^2\cos2\theta$ 得 $r'=-\frac{a^2\sin2\theta}r$，$r^2+r'^2=\frac{a^4}{r^2}$，故 $S=4\pi\int_0^{\pi/4}a^2\sin\theta\,d\theta=4\pi a^2(1-\frac{\sqrt2}2)=2\pi a^2(2-\sqrt2)$。` },
      { n: "(44)", q: R`设平面区域 $D=\left\{(x,y)\left|\frac{1-x}{1+x}\leqslant y\leqslant\sqrt{1-x^2},0\leqslant x\leqslant1\right.\right\}$，求 $D$ 绕 $y$ 轴旋转一周所得旋转体的体积 $V$。`, a: R`$2\pi\left(2\ln2-\frac76\right)$`, sol: R`【解】$V=2\pi\int_0^1x\left(\sqrt{1-x^2}-\frac{1-x}{1+x}\right)dx=2\pi\left[\int_0^1x\sqrt{1-x^2}dx-\int_0^1\frac{x-x^2}{1+x}dx\right]=2\pi\left[\frac13+\frac12-2(1-\ln2)\right]=2\pi\left(2\ln2-\frac76\right)$。` }
    ]
  };
})();
