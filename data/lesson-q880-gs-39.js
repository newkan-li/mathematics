window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q880_s38"] = {
    id: "q880_s38",
    ch: "880题 · 高数 · 第五章 重积分及其应用",
    title: "基础题·解答题",
    probTitle: "第五章 基础题 · 解答题（含原书解析）",
    book: "李林《精讲精练 880 题（数学二）》2026",
    problems: [
      { n: "(1)", q: R`计算下列二重积分：
(Ⅰ) 设 $D$ 由 $x-y=0,x+y=0$ 及 $x=1$ 所围，求 $I=\iint_Dxy(x-y)dxdy$；
(Ⅱ) 设 $D$ 由 $y=\sqrt x,y=x$ 所围，求 $I=\iint_D\frac{\sin y}ydxdy$；
(Ⅲ) 设 $D$ 由 $y=x^2\ (x\geqslant0),y=1,x=0$ 所围，求 $I=\iint_D\frac{xy}{\sqrt{1+y^3}}dxdy$；
(Ⅳ) 设 $D:-1\leqslant x\leqslant\sin y,|y|\leqslant\frac\pi2$，求 $I=\iint_Dx\left(e^{x^2+\cos^2y}\sin y-1\right)dxdy$。`, a: R`(Ⅰ) $-\frac2{15}$；(Ⅱ) $1-\sin1$；(Ⅲ) $\frac13(\sqrt2-1)$；(Ⅳ) $\frac\pi4$`, sol: R`【解】(Ⅰ) 先对 $y$ 积分：$I=\int_0^1dx\int_{-x}^xxy(x-y)dy=\int_0^1\left(\frac{x^2y^2}2-\frac{xy^3}3\right)\Big|_{-x}^xdx=-\frac23\int_0^1x^4dx=-\frac2{15}$。
(Ⅱ) $\int\frac{\sin y}ydy$ 非初等，故先对 $x$ 积分：$I=\int_0^1dy\int_{y^2}^y\frac{\sin y}ydx=\int_0^1(1-y)\sin y\,dy=1-\sin1$。
(Ⅲ) 先对 $x$ 积分：$I=\int_0^1\frac y{\sqrt{1+y^3}}dy\int_0^{\sqrt y}x\,dx=\frac12\int_0^1\frac{y^2}{\sqrt{1+y^3}}dy=\frac12\cdot\frac23(1+y^3)^{1/2}\Big|_0^1=\frac13(\sqrt2-1)$。
(Ⅳ) $D$ 关于 $y$ 轴对称，$xe^{x^2+\cos^2y}\sin y$ 关于 $x$ 为奇函数积分为 0；$I_2=\iint_Dx\,dxdy=2\int_0^{\pi/2}dy\int_{-1}^{-\sin y}x\,dx=-\frac\pi4$，故 $I=0-(-\frac\pi4)=\frac\pi4$。` },
      { n: "(2)", q: R`设 $D=\{(x,y)\mid x^2+y^2\leqslant1,x^2+y^2\leqslant2x,y\geqslant0\}$，计算 $I=\iint_Dxy\,dxdy$。`, a: R`$\frac5{48}$`, sol: R`【解】两圆交点为 $A\left(\frac12,\frac{\sqrt3}2\right)$。$I=\int_0^{\sqrt3/2}dy\int_{1-\sqrt{1-y^2}}^{\sqrt{1-y^2}}xy\,dx=\frac12\int_0^{\sqrt3/2}y[1-y^2-(1-\sqrt{1-y^2})^2]dy=\int_0^{\sqrt3/2}\left(y\sqrt{1-y^2}-\frac12y\right)dy=\left[-\frac13(1-y^2)^{3/2}-\frac14y^2\right]\Big|_0^{\sqrt3/2}=\frac5{48}$。` },
      { n: "(3)", q: R`设 $D=\{(x,y)\mid1\leqslant x+y\leqslant2,x\geqslant0,y\geqslant0\}$，计算 $I=\iint_D\frac{xe^{(x+y)^2}}{x+y}dxdy$。`, a: R`$\frac{e^4-e}4$`, sol: R`【解】$D$ 关于直线 $y=x$ 对称，$I=\frac12\iint_D e^{(x+y)^2}dxdy=\frac12\int_0^{\pi/2}d\theta\int_{1/(\cos\theta+\sin\theta)}^{2/(\cos\theta+\sin\theta)}e^{r^2(\cos\theta+\sin\theta)^2}r\,dr=\frac14(e^4-e)\int_0^{\pi/2}\frac{d\theta}{(\cos\theta+\sin\theta)^2}=\frac{e^4-e}4$。` },
      { n: "(4)", q: R`设 $D:x^2+y^2\leqslant\sqrt2x,0\leqslant y\leqslant x$，计算 $I=\iint_D\left|\sqrt{x^2+y^2}-1\right|dxdy$。`, a: R`$\frac{11}{36}-\frac\pi{24}$`, sol: R`【解】用 $r=1$ 将 $D$ 分为 $D_1,D_2$，则 $I=\iint_{D_1}(1-r)r\,drd\theta+\iint_{D_2}(r-1)r\,drd\theta=2\iint_{D_1}(1-r)r\,drd\theta-\iint_D(1-r)r\,drd\theta$，计算得 $I=\frac{11}{36}-\frac\pi{24}$。` },
      { n: "(5)", q: R`设 $D:x^2+y^2\leqslant9$，计算 $I=\iint_D\left|x^2+y^2-4\right|dxdy$。`, a: R`$\frac{41}2\pi$`, sol: R`【解】用 $r=2$ 分为 $D_1,D_2$，$I=\iint_D(r^2-4)r\,drd\theta-2\iint_{D_1}(r^2-4)r\,drd\theta=2\pi\left(\frac{r^4}4-2r^2\right)\Big|_0^3-4\pi\left(\frac{r^4}4-2r^2\right)\Big|_0^2=\frac{41}2\pi$。` },
      { n: "(6)", q: R`设 $D=\{(x,y)\mid0\leqslant x\leqslant2,0\leqslant y\leqslant\sqrt{2x-x^2}\}$，计算 $I=\iint_D|x+y-2|dxdy$。`, a: R`$1$`, sol: R`【解】直线 $x+y-2=0$ 将 $D$ 分为 $D_1,D_2$。$I=2\iint_{D_1}(x+y-2)dxdy-\iint_D(x+y-2)dxdy=I_1-I_2$。计算得 $I_1=\frac53-\frac\pi2$，$I_2=\frac23-\frac\pi2$，故 $I=1$。` },
      { n: "(7)", q: R`设 $D:1\leqslant x^2+y^2\leqslant2x,y\geqslant0$，计算 $I=\iint_D\frac{y}{(1+x^2+y^2)\sqrt{x^2+y^2}}dxdy$。`, a: R`$\frac12\left(\ln\frac52-1+\arctan2-\frac\pi4\right)$`, sol: R`【解】交点为 $A\left(\frac12,\frac{\sqrt3}2\right)$。$I=\int_0^{\pi/3}d\theta\int_1^{2\cos\theta}\frac{\sin\theta}{1+r^2}dr=\frac12\int_{\pi/3}^0\cdots$，令 $u=\cos\theta$ 得 $I=\frac12\int_{1/2}^1[\ln(1+4u^2)-\ln2]du=\frac12\left(\ln\frac52-1+\arctan2-\frac\pi4\right)$。` },
      { n: "(8)", q: R`设 $D:0\leqslant x\leqslant2,0\leqslant y\leqslant2$，计算 $I=\iint_D[1+x+y]dxdy$，其中 $[1+x+y]$ 表示不超过 $1+x+y$ 的最大整数。`, a: R`$10$`, sol: R`【解】直线 $x+y=i\ (i=1,2,3,4)$ 将 $D$ 分为 4 个区域 $D_k$，其上 $[1+x+y]=k$，故 $I=\iint_{D_1}1+\iint_{D_2}2+\iint_{D_3}3+\iint_{D_4}4=10$。` },
      { n: "(9)", q: R`设 $D=\{(x,y)\mid0\leqslant x\leqslant1,0\leqslant y\leqslant1\}$，计算 $I=\iint_D\max\{2x-x^2,(1-y)^2\}dxdy$。`, a: R`$\frac13+\frac\pi8$`, sol: R`【解】$2x-x^2=(1-y)^2$ 即 $(x-1)^2+(y-1)^2=1$，将 $D$ 分为 $D_1,D_2$，则 $I=\iint_{D_1}(1-y)^2dxdy+\iint_{D_2}(2x-x^2)dxdy=\frac13+\int_0^1\sqrt{1-(x-1)^2}d(x-1)-2\int_0^1(x-1)^2\sqrt{1-(x-1)^2}d(x-1)=\frac13+\frac\pi4-2\left(\frac\pi4-\frac{3\pi}{16}\right)=\frac13+\frac\pi8$。` },
      { n: "(10)", q: R`计算 $I=\iint_D\operatorname{sgn}(x^2-y^2+2)dxdy$，其中 $D:x^2+y^2\leqslant4$。`, a: R`$\frac{4\pi}3+4\ln(2+\sqrt3)$`, sol: R`【解】双曲线 $x^2-y^2+2=0$ 将 $D$ 分为 $D_1,D_2,D_3$，$\operatorname{sgn}=1$ 在 $D_2$ 上、$-1$ 在 $D_1\cup D_3$ 上，故 $I=\iint_{D_2}-\iint_{D_1}-\iint_{D_3}=\iint_D-4\iint_{D_1}=4\pi-4\int_{-1}^1dx\int_{\sqrt{2+x^2}}^{\sqrt{4-x^2}}dy=\frac{4\pi}3+4\ln(2+\sqrt3)$。` },
      { n: "(11)", q: R`设 $f(x,y)=\begin{cases}\dfrac1{(x^2+y^2)^2},&1\leqslant x\leqslant3,\dfrac{\sqrt3}3x\leqslant y\leqslant x,\\0,&\text{其他},\end{cases}$ $D$ 由 $x=3,x=1,y=0,y=3$ 所围，计算 $I=\iint_Df(x,y)dxdy$。`, a: R`$\frac{\pi+6-3\sqrt3}{54}$`, sol: R`【解】将 $D$ 分成三块，只有中间那块非零。$I=\int_{\pi/6}^{\pi/4}d\theta\int_{\sec\theta}^{3\sec\theta}\frac{r}{r^4}dr=\frac49\int_{\pi/6}^{\pi/4}\cos^2\theta\,d\theta=\frac29\int_{\pi/6}^{\pi/4}(1+\cos2\theta)d\theta=\frac{\pi+6-3\sqrt3}{54}$。` }
    ]
  };
})();
