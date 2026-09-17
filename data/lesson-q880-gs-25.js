window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q880_s24"] = {
    id: "q880_s24",
    ch: "880题 · 高数 · 第三章 一元函数积分学及其应用",
    title: "综合题·解答题（五）",
    probTitle: "第三章 综合题 · 解答题 (25)–(35)（含原书解析）",
    book: "李林《精讲精练 880 题（数学二）》2026",
    problems: [
      { n: "(25)", q: R`证明：$f(x)=\int_0^x(t-t^2)\sin^{2n}t\,dt\ (x>0)$ 的最大值为 $f(1)$，且 $f(1)\leqslant\frac1{(2n+2)(2n+3)}$。`, a: R`见证明`, sol: R`【证】$f'(x)=(x-x^2)\sin^{2n}x=0$ 得驻点 $x=1,x=k\pi\ (k=1,2,\cdots)$。在 $x=k\pi$ 两侧 $f'(x)>0$，$x=k\pi$ 不是极值点；在 $x=1$ 两侧 $f'$ 由正变负，故 $x=1$ 是唯一极大值点，$f$ 在 $(0,1]$ 增、$[1,+\infty)$ 减，$f(1)$ 为最大值。又 $f(1)=\int_0^1(t-t^2)\sin^{2n}t\,dt\leqslant\int_0^1(t-t^2)t^{2n}dt=\frac1{2n+2}-\frac1{2n+3}=\frac1{(2n+2)(2n+3)}$。` },
      { n: "(26)", q: R`设 $f(x)$ 在 $[a,b]$ 上有二阶连续导数，且 $f(b)=f'(b)=0$，证明：$\int_a^bf(x)dx=\frac12\int_a^bf''(x)(x-a)^2dx$。`, a: R`见证明`, sol: R`【证】$\int_a^bf''(x)(x-a)^2dx=(x-a)^2f'(x)|_a^b-\int_a^b2(x-a)f'(x)dx=-2\int_a^b(x-a)d[f(x)]=-2\left[(x-a)f(x)|_a^b-\int_a^bf(x)dx\right]=2\int_a^bf(x)dx$（用 $f(b)=f'(b)=0$），故所证成立。
【注】技巧：把 $\int_a^bf(x)dx$ 写成 $\int_a^bf(x)\,d(x-a)$。` },
      { n: "(27)", q: R`设 $f(x)$ 在 $[a,b]$ 上二阶可导，且 $f''(x)>0$，证明：$f\left(\frac{a+b}2\right)<\frac1{b-a}\int_a^bf(x)dx<\frac{f(a)+f(b)}2$。`, a: R`见证明`, sol: R`【证】由 $f''(x)>0$ 知曲线下凸，在点 $\left(\frac{a+b}2,f\left(\frac{a+b}2\right)\right)$ 处的切线在曲线下方，故 $f(x)\geqslant f\left(\frac{a+b}2\right)+f'\left(\frac{a+b}2\right)\left(x-\frac{a+b}2\right)$，两边积分得 $\int_a^bf(x)dx\geqslant f\left(\frac{a+b}2\right)(b-a)$，即 $f\left(\frac{a+b}2\right)<\frac1{b-a}\int_a^bf(x)dx$。
又弦 $AB$ 在曲线上方，$f(x)\leqslant f(a)+\frac{f(b)-f(a)}{b-a}(x-a)$，积分得 $\int_a^bf(x)dx<\frac{f(a)+f(b)}2(b-a)$。故所证成立。` },
      { n: "(28)", q: R`(Ⅰ) 设 $f(x)$ 与 $g(x)$ 均在 $[a,b]$ 上连续，证明：$\left[\int_a^bf(x)g(x)dx\right]^2\leqslant\int_a^bf^2(x)dx\int_a^bg^2(x)dx$。
(Ⅱ) 设 $f(x)$ 在 $[a,b]$ 上有连续导数，且 $f(a)=f(b)=0$，证明：$\int_a^bf^2(x)dx\leqslant\frac{(b-a)^2}8\int_a^bf'^2(x)dx$。`, a: R`见证明`, sol: R`【证】(Ⅰ) 令 $F(t)=\int_a^tf^2dx\int_a^tg^2dx-\left[\int_a^tfg\,dx\right]^2$，则 $F'(t)=\int_a^t[f(t)g(x)-f(x)g(t)]^2dx\geqslant0$，$F$ 单调不减，$F(b)\geqslant F(a)=0$，即柯西积分不等式。
(Ⅱ) 由 $f(a)=0$ 知 $f(x)=\int_a^xf'(t)dt$，由 (Ⅰ) 得 $f^2(x)\leqslant(x-a)\int_a^xf'^2(t)dt$；同理对 $x\geqslant\frac{a+b}2$ 有 $f^2(x)\leqslant(b-x)\int_x^bf'^2(t)dt$。于是
$$\int_a^bf^2(x)dx\leqslant\int_a^{\frac{a+b}2}(x-a)dx\int_a^{\frac{a+b}2}f'^2dt+\int_{\frac{a+b}2}^b(b-x)dx\int_{\frac{a+b}2}^bf'^2dt=\frac{(b-a)^2}8\int_a^bf'^2(x)dx.$$` },
      { n: "(29)", q: R`设 $f(x)$ 在 $[a,b]\ (a<b)$ 上连续，并且 $\int_a^bf(x)dx=\int_a^bxf(x)dx=0$。证明：至少存在不同的 $\xi_1,\xi_2\in(a,b)$，使得 $f(\xi_1)=f(\xi_2)=0$。`, a: R`见证明`, sol: R`【证】令 $F(x)=\int_a^xf(t)dt$，则 $F(a)=F(b)=0$，且 $\int_a^bxf(x)dx=xF(x)|_a^b-\int_a^bF(x)dx=-\int_a^bF(x)dx=0$。由积分中值定理存在 $\xi\in(a,b)$ 使 $F(\xi)=0$。$F$ 在 $[a,\xi]$、$[\xi,b]$ 上用罗尔定理得 $F'(\xi_1)=F'(\xi_2)=0$，即 $f(\xi_1)=f(\xi_2)=0$。` },
      { n: "(30)", q: R`设 $f(x),g(x)$ 在 $[a,b]$ 上二阶可导，且满足 $f(a)>g(a),f(b)>g(b),\int_a^bf(x)dx=\int_a^bg(x)dx$。证明：至少存在一点 $\xi\in(a,b)$，使得 $f''(\xi)>g''(\xi)$。`, a: R`见证明`, sol: R`【证】由 $\int_a^b[f(x)-g(x)]dx=0$ 及 $f(a)-g(a)>0,f(b)-g(b)>0$ 知存在 $\eta\in(a,b)$ 使 $f(\eta)-g(\eta)<0$。由零点定理存在 $\xi_1\in(a,\eta),\xi_2\in(\eta,b)$ 使 $f(\xi_1)-g(\xi_1)=f(\xi_2)-g(\xi_2)=0$。在 $[a,\xi_1]$、$[\xi_2,b]$ 上用拉格朗日中值定理得 $f'(\eta_1)-g'(\eta_1)<0$，$f'(\eta_2)-g'(\eta_2)>0$；再在 $[\eta_1,\eta_2]$ 上用拉格朗日中值定理得 $f''(\xi)-g''(\xi)>0$，即 $f''(\xi)>g''(\xi)$。` },
      { n: "(31)", q: R`设 $f(x)$ 在 $(-a,a)(a>0)$ 内连续，且 $f'(0)=A\neq0$。证明：
(Ⅰ) 对 $x\in(0,a)$，存在 $\theta\in(0,1)$，使得 $\int_0^xf(t)dt+\int_0^{-x}f(t)dt=x[f(\theta x)-f(-\theta x)]$；
(Ⅱ) $\lim\limits_{x\to0^+}\theta=\frac12$。`, a: R`见证明`, sol: R`【证】(Ⅰ) 令 $F(x)=\int_0^xf(t)dt+\int_0^{-x}f(t)dt$，$F$ 在 $[0,x]$ 可导，由拉格朗日中值定理存在 $\theta\in(0,1)$ 使 $F(x)-F(0)=F'(\theta x)x$，即 $\int_0^xf+\int_0^{-x}f=x[f(\theta x)-f(-\theta x)]$。
(Ⅱ) 两边除以 $x^2$ 取极限，左边 $=\lim\limits_{x\to0^+}\frac{f(x)-f(-x)}{2x}=f'(0)=A$，右边 $=2A\lim\limits_{x\to0^+}\theta$，由 $A\neq0$ 得 $\lim\limits_{x\to0^+}\theta=\frac12$。` },
      { n: "(32)", q: R`设 $y=f(x)$ 在 $[0,1]$ 上是非负连续函数。
(Ⅰ) 证明：存在 $x_0\in(0,1)$，使得在 $[0,x_0]$ 上以 $f(x_0)$ 为高的矩形面积，等于在 $[x_0,1]$ 上以 $y=f(x)$ 为曲边的曲边梯形面积；
(Ⅱ) 又设 $f(x)$ 在 $(0,1)$ 内可导，且 $f'(x)>-\frac{2f(x)}x$，证明：(Ⅰ) 中的 $x_0$ 是唯一的。`, a: R`见证明`, sol: R`【证】(Ⅰ) 需证存在 $x_0\in(0,1)$ 使 $x_0f(x_0)=\int_{x_0}^1f(t)dt$。令 $F(x)=x\int_x^1f(t)dt$，则 $F(0)=F(1)=0$，由罗尔定理存在 $x_0\in(0,1)$ 使 $F'(x_0)=0$，即 $\int_{x_0}^1f(t)dt-x_0f(x_0)=0$，故 $x_0f(x_0)=\int_{x_0}^1f(t)dt$。
(Ⅱ) 令 $\varphi(x)=\int_x^1f(t)dt-xf(x)$，则 $\varphi'(x)=-2f(x)-xf'(x)<0$（由 $f'(x)>-\frac{2f(x)}x$ 且 $f\geqslant0$），故 $\varphi$ 单调递减，零点唯一，即 $x_0$ 唯一。` },
      { n: "(33)", q: R`设曲线 $y=f(x)$ 上任一点 $(x,f(x))$ 处的切线斜率为 $a^2x^2-4ax+3$，且 $y=f(x)$ 在 $x=1$ 处取得极小值 $0$。
(Ⅰ) 求 $f(x)$ 及 $f(x)$ 的其他极值；
(Ⅱ) 证明：$0\leqslant\int_0^1\sqrt{f(ut)}dt\leqslant\frac2{3u},u\in(0,1)$。`, a: R`(Ⅰ) $a=3$，$f(x)=3x^3-6x^2+3x$，极大值 $f\left(\frac13\right)=\frac49$`, sol: R`【解】(Ⅰ) $f'(x)=a^2x^2-4ax+3$，由 $f'(1)=a^2-4a+3=0$ 得 $a=1$ 或 $3$。$f''(x)=2a^2x-4a$，$f''(1)=2a^2-4a$；由 $f(1)$ 为极小值知 $f''(1)>0$，故 $a=3$。于是 $f'(x)=9x^2-12x+3$，$f(x)=\int_1^x(9t^2-12t+3)dt=3x^3-6x^2+3x$。另一驻点 $x=\frac13$，$f''\left(\frac13\right)=-6<0$，极大值 $f\left(\frac13\right)=\frac49$。
【证】(Ⅱ) $\int_0^1\sqrt{f(ut)}dt\xlongequal{ut=x}\frac1u\int_0^u\sqrt{f(x)}dx\leqslant\frac1u\int_0^1\sqrt{f(x)}dx\leqslant\frac1u\int_0^1\sqrt{\frac49}dx=\frac2{3u}$，且 $\int_0^1\sqrt{f(ut)}dt\geqslant0$，故所证成立。` },
      { n: "(34)", q: R`设 $f(x)$ 在 $(-\infty,+\infty)$ 内连续，且满足 $f(x+T)=f(x),T>0,f(-x)=f(x)$。
(Ⅰ) 证明：$\int_0^{nT}xf(x)dx=\frac{n^2T}2\int_0^Tf(x)dx$（$n$ 为正整数）；
(Ⅱ) 计算 $I=\int_0^{n\pi}x|\cos x|dx$。`, a: R`(Ⅱ) $n^2\pi$`, sol: R`【证】(Ⅰ) 令 $x=nT-t$，$\int_0^{nT}xf(x)dx=nT\int_0^{nT}f(t)dt-\int_0^{nT}tf(t)dt$，移项得 $\int_0^{nT}xf(x)dx=\frac{nT}2\int_0^{nT}f(x)dx$。又 $f$ 以 $T$ 为周期，$\int_0^{nT}f=n\int_0^Tf$，故 $\int_0^{nT}xf(x)dx=\frac{n^2T}2\int_0^Tf(x)dx$。
【解】(Ⅱ) $|\cos x|$ 以 $\pi$ 为周期的偶函数，由 (Ⅰ) 得 $I=\frac{n^2\pi}2\int_0^\pi|\cos x|dx=\frac{n^2\pi}2\left[\int_0^{\pi/2}\cos x\,dx+\int_{\pi/2}^\pi(-\cos x)dx\right]=n^2\pi$。` },
      { n: "(35)", q: R`设 $f(x)$ 在 $(-\infty,+\infty)$ 内有连续导数，证明：$\lim\limits_{a\to0^+}\frac1{4a^2}\int_{-a}^a[f(t+a)-f(t-a)]dt=f'(0)$。`, a: R`见证明`, sol: R`【证】由积分中值定理 $\lim\limits_{a\to0^+}\frac1{4a^2}\int_{-a}^a[f(t+a)-f(t-a)]dt=\lim\limits_{a\to0^+}\frac1{2a}[f(\xi+a)-f(\xi-a)]\ (-a\leqslant\xi\leqslant a)$，对 $f$ 在 $[\xi-a,\xi+a]$ 上用拉格朗日中值定理 $f(\xi+a)-f(\xi-a)=2af'(\eta)$，$\eta\in(\xi-a,\xi+a)$。由 $f'$ 连续，$\lim\limits_{a\to0^+}f'(\eta)=f'(0)$，故原式 $=f'(0)$。` }
    ]
  };
})();
