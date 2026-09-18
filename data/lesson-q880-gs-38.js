window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q880_s37"] = {
    id: "q880_s37",
    ch: "880题 · 高数 · 第五章 重积分及其应用",
    title: "基础题·填空题",
    probTitle: "第五章 基础题 · 填空题（含原书解析）",
    book: "李林《精讲精练 880 题（数学二）》2026",
    problems: [
      { n: "(1)", q: R`二重积分 $I=\int_0^1x^2dx\int_x^1e^{-y^2}dy=\underline{\qquad}$。`, a: R`$\frac16-\frac1{3e}$`, sol: R`【解】交换积分次序：$I=\int_0^1e^{-y^2}dy\int_0^yx^2dx=\frac13\int_0^1y^3e^{-y^2}dy\xlongequal{\text{分部积分}}\frac16-\frac1{3e}$。` },
      { n: "(2)", q: R`二重积分 $I=\int_1^2dx\int_{\sqrt x}^x\sin\frac{\pi x}{2y}dy+\int_2^4dx\int_{\sqrt x}^2\sin\frac{\pi x}{2y}dy=\underline{\qquad}$。`, a: R`$\frac4{\pi^3}(2+\pi)$`, sol: R`【解】交换积分次序：$I=\int_1^2dy\int_y^{y^2}\sin\frac{\pi x}{2y}dx=\int_1^2\frac{2y}\pi\left(\cos\frac\pi2-\cos\frac{\pi y}2\right)dy=-\frac2\pi\int_1^2y\cos\frac{\pi y}2dy\xlongequal{\text{分部积分}}\frac4{\pi^3}(2+\pi)$。` },
      { n: "(3)", q: R`$I=\int_0^1\frac13x^{-\frac23}dx\int_{\arctan x}^{\frac\pi4}\csc2y\,dy=\underline{\qquad}$。`, a: R`$\frac32$`, sol: R`【解】交换积分次序得 $I=\int_0^{\pi/4}\csc2y\,dy\int_0^{\tan y}\frac13x^{-2/3}dx=\int_0^{\pi/4}\frac{\tan^{1/3}y}{\sin2y}dy=\frac12\int_0^{\pi/4}\tan^{-2/3}y\,d(\tan y)=\frac32\tan^{1/3}y\Big|_0^{\pi/4}=\frac32$。` },
      { n: "(4)", q: R`设 $f(t)=\int_0^tdx\int_x^te^{-(x-y)^2}dy\ (t\geqslant0)$，则 $f''(1)=\underline{\qquad}$。`, a: R`$e^{-1}$`, sol: R`【解】交换积分次序得 $f(t)=\int_0^tdy\int_0^ye^{-(x-y)^2}dx$，故 $f'(t)=\int_0^te^{-(x-t)^2}dx\xlongequal{x-t=u}-\int_0^{-t}e^{-u^2}du$，$f''(t)=e^{-t^2}$，$f''(1)=e^{-1}$。` },
      { n: "(5)", q: R`设 $D:x^2+y^2\leqslant4,x\geqslant0,y\geqslant0$，如果 $f(x)$ 在 $[0,+\infty)$ 上连续且取正值，则二重积分 $I=\iint_D\frac{a\sqrt{f(x)}+b\sqrt{f(y)}}{\sqrt{f(x)}+\sqrt{f(y)}}dxdy=\underline{\qquad}$。`, a: R`$\frac{a+b}2\pi$`, sol: R`【解】$D$ 关于直线 $y=x$ 对称，故 $I=\frac12\iint_D\left[\frac{a\sqrt{f(x)}+b\sqrt{f(y)}}{\sqrt{f(x)}+\sqrt{f(y)}}+\frac{a\sqrt{f(y)}+b\sqrt{f(x)}}{\sqrt{f(y)}+\sqrt{f(x)}}\right]dxdy=\frac{a+b}2\iint_Ddxdy=\frac{a+b}2\cdot\frac{\pi\cdot2^2}4=\frac{a+b}2\pi$。` },
      { n: "(6)", q: R`设 $f(x)$ 在 $[0,1]$ 上连续，且 $\int_0^1f(x)dx=A$，则 $I=\int_0^1dx\int_x^1f(x)f(y)dy=\underline{\qquad}$。`, a: R`$\frac{A^2}2$`, sol: R`【解】令 $F(x)=\int_x^1f(y)dy$，$F'(x)=-f(x)$，则 $I=-\int_0^1F(x)d[F(x)]=-\frac12F^2(x)\Big|_0^1=\frac{A^2}2$。
【注】也可交换积分次序后两式相加得 $2I=A^2$。` },
      { n: "(7)", q: R`设 $D:x^2+y^2\leqslant1,x\geqslant0,y\geqslant0$，则 $I=\iint_D\frac{1+x-y}{1+x^2+y^2}dxdy=\underline{\qquad}$。`, a: R`$\frac\pi4\ln2$`, sol: R`【解】$D$ 关于 $y=x$ 对称，故 $I=\frac12\iint_D\left(\frac{1+x-y}{1+x^2+y^2}+\frac{1+y-x}{1+y^2+x^2}\right)dxdy=\iint_D\frac{dxdy}{1+x^2+y^2}=\int_0^{\pi/2}d\theta\int_0^1\frac{r}{1+r^2}dr=\frac\pi2\cdot\frac12\ln(1+r^2)\Big|_0^1=\frac\pi4\ln2$。` },
      { n: "(8)", q: R`设 $D:-1\leqslant x\leqslant0,1-\sqrt{1-x^2}\leqslant y\leqslant-x$，则 $I=\iint_D\frac{dx\,dy}{\sqrt{x^2+y^2}\sqrt{4-x^2-y^2}}=\underline{\qquad}$。`, a: R`$\frac{\pi^2}{32}$`, sol: R`【解】用极坐标，$\frac{3\pi}4\leqslant\theta\leqslant\pi$，$0\leqslant r\leqslant2\sin\theta$，故 $I=\int_{3\pi/4}^\pi d\theta\int_0^{2\sin\theta}\frac{dr}{\sqrt{4-r^2}}=\int_{3\pi/4}^\pi\arcsin\frac r2\Big|_0^{2\sin\theta}d\theta=\int_{3\pi/4}^\pi(\pi-\theta)d\theta=\frac{\pi^2}{32}$。` },
      { n: "(9)", q: R`设 $D:2x\leqslant x^2+y^2,0\leqslant y\leqslant x\leqslant2$，则 $I=\iint_D\frac{dx\,dy}{\sqrt{x^2+y^2}}=\underline{\qquad}$。`, a: R`$2\ln(1+\sqrt2)-\sqrt2$`, sol: R`【解】极坐标下 $r=2\cos\theta$（圆 $x^2+y^2=2x$）、$r=2\sec\theta$（直线 $x=2$）、$\theta=\frac\pi4$，故 $I=\int_0^{\pi/4}d\theta\int_{2\cos\theta}^{2\sec\theta}dr=2\int_0^{\pi/4}(\sec\theta-\cos\theta)d\theta=2\ln(1+\sqrt2)-\sqrt2$。` },
      { n: "(10)", q: R`设 $D=\{(x,y)\mid0\leqslant y\leqslant1-x,0\leqslant x\leqslant1\}$，则 $\iint_De^{\frac x{x+y}}dxdy=\underline{\qquad}$。`, a: R`$\frac12(e-1)$`, sol: R`【解】极坐标下 $0\leqslant\theta\leqslant\frac\pi2$，$0\leqslant r\leqslant\frac1{\cos\theta+\sin\theta}$，故 $I=\int_0^{\pi/2}d\theta\int_0^{1/(\cos\theta+\sin\theta)}e^{\frac{\cos\theta}{\cos\theta+\sin\theta}}r\,dr=-\frac12e^{\frac{\cos\theta}{\cos\theta+\sin\theta}}\Big|_0^{\pi/2}=\frac12(e-1)$。` },
      { n: "(11)", q: R`设 $D:x^2+y^2\leqslant1$，则 $I=\iint_D\left(\frac{x^2}4+\frac{y^2}9\right)dxdy=\underline{\qquad}$。`, a: R`$\frac{13\pi}{144}$`, sol: R`【解】$D$ 关于 $y=x$ 对称，由轮换对称性 $\iint_Dx^2dxdy=\iint_Dy^2dxdy=\frac12\iint_D(x^2+y^2)dxdy=\frac12\int_0^{2\pi}d\theta\int_0^1r^3dr=\frac\pi4$，故 $I=\frac14\cdot\frac\pi4+\frac19\cdot\frac\pi4=\frac{13\pi}{144}$。` }
    ]
  };
})();
