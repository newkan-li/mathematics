window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q880_s21"] = {
    id: "q880_s21",
    ch: "880题 · 高数 · 第三章 一元函数积分学及其应用",
    title: "综合题·解答题（二）",
    probTitle: "第三章 综合题 · 解答题 (7)–(12)（含原书解析）",
    book: "李林《精讲精练 880 题（数学二）》2026",
    problems: [
      { n: "(7)", q: R`求极限 $\lim\limits_{x\to0}\frac{\frac12\int_0^{2x}x\sqrt{4-x^2u^2}du-2x}{\sqrt{1+2x^3}-1}$。`, a: R`$-\frac13$`, sol: R`【解】当 $x\to0$ 时 $\sqrt{1+2x^3}-1\sim x^3$；又 $\frac12\int_0^{2x}x\sqrt{4-x^2u^2}du\xlongequal{xu=t}\frac12\int_0^{2x}\sqrt{4-t^2}dt$，故
$$\text{原式}=\lim_{x\to0}\frac{\frac12\int_0^{2x}\sqrt{4-t^2}dt-2x}{x^3}=\lim_{x\to0}\frac{\frac12\sqrt{4-4x^2}\cdot2-2}{3x^2}=\lim_{x\to0}\frac{2(\sqrt{1-x^2}-1)}{3x^2}=-\frac13.$$` },
      { n: "(8)", q: R`设 $f(x)$ 连续，$\lim\limits_{x\to0}\frac{f(x)}x=2$，求 $\lim\limits_{x\to0}\frac{\int_0^xf(x)f(x-t)dt}{\int_0^xtf(x-t)dt}$。`, a: R`$6$`, sol: R`【解】$\int_0^xf(x-t)dt=\int_0^xf(u)du$，$\int_0^xtf(x-t)dt=x\int_0^xf(u)du-\int_0^xuf(u)du$，故
$$\text{原式}=\lim_{x\to0}\frac{f(x)}{x}\cdot\frac{x\int_0^xf(x-t)dt}{\int_0^xtf(x-t)dt}=2\lim_{x\to0}\frac{x\int_0^xf(u)du}{x\int_0^xf(u)du-\int_0^xuf(u)du}=2+2\lim_{x\to0}\frac{f(x)/x}{\int_0^xf(u)du/x^2}.$$
又 $\lim\limits_{x\to0}\frac{\int_0^xf(u)du}{x^2}=\lim\limits_{x\to0}\frac{f(x)}{2x}=1$，故原式 $=2+2\cdot\frac21=6$。` },
      { n: "(9)", q: R`设 $f(x)$ 在 $(-\infty,0]$ 上连续，且满足 $\int_0^xtf(t^2-x^2)dt=\frac{x^2}{1+x^2}-\frac12\ln(1+x^2)$，求函数 $f(x)$ 及其极值。`, a: R`$f(x)=\frac{1+x}{(1-x)^2}\ (x\leqslant0)$；极小值 $f(-3)=-\frac18$`, sol: R`【解】$\int_0^xtf(t^2-x^2)dt=\frac12\int_{-x^2}^0f(u)du$，故 $-\frac12\int_0^{-x^2}f(u)du=\frac{x^2}{1+x^2}-\frac12\ln(1+x^2)$。令 $t=-x^2$，得 $-\frac12\int_0^tf(u)du=\frac{-t}{1-t}-\frac12\ln(1-t)$，两边对 $t$ 求导得 $f(t)=\frac2{(1-t)^2}-\frac1{1-t}=\frac{1+t}{(1-t)^2}$，即 $f(x)=\frac{1+x}{(1-x)^2}\ (x\leqslant0)$。
由 $f'(x)=\frac{x+3}{(1-x)^3}$ 知 $x=-3$ 为唯一驻点，且 $f(-3)=-\frac18$ 为极小值。` },
      { n: "(10)", q: R`计算 $\lim\limits_{x\to0}\frac{\int_0^{2x}\left|1-\frac tx\right|\sin t\,dt}{x^2}$。`, a: R`$1$`, sol: R`【解】令 $\frac tx=u$，则原式 $=\lim\limits_{x\to0}\frac1x\int_0^2|1-u|\sin(xu)du=\lim\limits_{x\to0}\frac1x\left[\int_0^1(1-u)\sin(xu)du+\int_1^2(u-1)\sin(xu)du\right]$。分部积分计算得 $=\lim\limits_{x\to0}\left(\frac{1-\cos2x}{x^2}+\frac{\sin2x-2\sin x}{x^3}\right)=2-1=1$。` },
      { n: "(11)", q: R`设 $f(x)$ 在 $(0,+\infty)$ 内一阶可导，$g(x)$ 为 $f(x)$ 的反函数，且 $g(x)$ 连续，若 $\int_1^{f(x)}g(t)dt=x^2e^x-4e^2-\int_1^{x-1}f(t+1)dt$，$f(2)=1$，求 $f(x)$ 的表达式。`, a: R`$f(x)=xe^x+\frac{2-4e^2}{x}\ (x>0)$`, sol: R`【解】两边对 $x$ 求导，得 $g[f(x)]f'(x)=2xe^x+x^2e^x-f(x)$，由 $g(f(x))=x$ 得 $xf'(x)=2xe^x+x^2e^x-f(x)$，即 $f'(x)+\frac1xf(x)=(2+x)e^x$，解得 $f(x)=\frac1x(x^2e^x+C)$。由 $f(2)=1$ 得 $C=2-4e^2$，故 $f(x)=xe^x+\frac{2-4e^2}{x}$。` },
      { n: "(12)", q: R`设 $f(x)$ 在 $[1,2]$ 上可导，且 $\int_0^xtf(2x-t)dt=\frac12\arctan x^2$，$f(1)=\frac12$，证明：至少存在一点 $\xi\in(1,2)$，使得 $f'(\xi)=0$。`, a: R`见证明`, sol: R`【证】令 $2x-t=u$，则 $\int_0^xtf(2x-t)dt=2x\int_x^{2x}f(u)du-\int_x^{2x}uf(u)du$，故 $2x\int_x^{2x}f(u)du-\int_x^{2x}uf(u)du=\frac12\arctan x^2$。两边对 $x$ 求导得 $2\int_x^{2x}f(u)du-xf(x)=\frac{x}{1+x^4}$。令 $x=1$ 得 $2\int_1^2f(u)du=\frac12+f(1)=1$，故 $\int_1^2f(u)du=\frac12$。
由积分中值定理存在 $\xi_1\in(1,2)$ 使 $f(\xi_1)=\frac12$。又 $f(1)=\frac12$，由罗尔定理存在 $\xi\in(1,\xi_1)\subset(1,2)$ 使 $f'(\xi)=0$。` }
    ]
  };
})();
