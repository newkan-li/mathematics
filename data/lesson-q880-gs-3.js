window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q880_s2"] = {
    id: "q880_s2",
    ch: "880题 · 高数 · 第一章 函数、极限、连续",
    title: "综合题·填空题",
    probTitle: "第一章 综合题 · 填空题（含原书解析）",
    book: "李林《精讲精练 880 题（数学二）》2026",
    problems: [
      { n: "(1)", q: R`当 $x\to0$ 时，$f(x)=3x-4\sin x+\sin x\cos x$ 是关于 $x$ 的 $\underline{\qquad}$ 阶无穷小。`, a: R`$5$`, sol: R`【解】$f(x)=3x-4\sin x+\frac12\sin2x$
$$=3x-4\left[x-\frac{x^3}{3!}+\frac{x^5}{5!}+o(x^6)\right]+\frac12\left[2x-\frac{(2x)^3}{3!}+\frac{(2x)^5}{5!}+o(x^6)\right]=\frac1{10}x^5+o(x^6),$$
故 $f(x)$ 是关于 $x$ 的 5 阶无穷小。` },
      { n: "(2)", q: R`极限 $\lim\limits_{x\to0}\dfrac{(\cos x-e^{x^2})\sin x^2}{\dfrac{x^2}2+1-\sqrt{1+x^2}}=\underline{\qquad}$。`, a: R`$-12$`, sol: R`【解】由 $\sqrt{1+x^2}=1+\frac12x^2-\frac18x^4+o(x^4)$ 得 $\frac{x^2}2+1-\sqrt{1+x^2}=\frac{x^4}8+o(x^4)$。
又 $\sin x^2\sim x^2$，$\cos x=1-\frac{x^2}2+o(x^2)$，$e^{x^2}=1+x^2+o(x^2)$，故 $(\cos x-e^{x^2})\sin x^2=-\frac32x^4+o(x^4)$。原式 $=\lim\limits_{x\to0}\frac{-\frac32x^4+o(x^4)}{\frac{x^4}8+o(x^4)}=-12$。` },
      { n: "(3)", q: R`设 $f(x)$ 是连续函数，$\lim\limits_{x\to0}\dfrac{f(x)}{1-\cos x}=-1$，当 $x\to0$ 时，$\displaystyle\int_0^{\sin^2x}f(t)\,dt$ 是关于 $x$ 的 $n$ 阶无穷小，则 $n=\underline{\qquad}$。`, a: R`$6$`, sol: R`【解】由 $\lim\limits_{x\to0}\frac{f(x)}{1-\cos x}=-1$ 知当 $x\to0$ 时 $f(x)\sim-(1-\cos x)\sim-\frac{x^2}2$。又
$$\lim_{x\to0}\frac{\int_0^{\sin^2x}f(t)\,dt}{x^n}=\lim_{x\to0}\frac{f(\sin^2x)\cdot2\sin x\cos x}{nx^{n-1}}=\frac2n\lim_{x\to0}\frac{xf(x^2)}{x^{n-1}}=\frac1n\lim_{x\to0}\frac{-x^5}{x^{n-1}},$$
故 $n-1=5$，即 $n=6$。` },
      { n: "(4)", q: R`设 $\lim\limits_{x\to a}\dfrac{f(x)-b}{x-a}=A$，则 $\lim\limits_{x\to a}\dfrac{e^{f(x)}-e^b}{x-a}=\underline{\qquad}$。`, a: R`$Ae^b$`, sol: R`【解】由 $\lim\limits_{x\to a}\frac{f(x)-b}{x-a}=A$ 知 $\lim\limits_{x\to a}f(x)=b$。对 $e^u$ 在 $b$ 与 $f(x)$ 之间用拉格朗日中值定理，$e^{f(x)}-e^b=e^{\xi_x}[f(x)-b]$，其中 $\xi_x\to b$。故
$$\lim_{x\to a}\frac{e^{f(x)}-e^b}{x-a}=\lim_{x\to a}\frac{e^{\xi_x}[f(x)-b]}{x-a}=Ae^b.$$` },
      { n: "(5)", q: R`设 $a_n=\dfrac32\displaystyle\int_0^{\frac n{n+1}}x^{n-1}\sqrt{1+x^n}\,dx$，则 $\lim\limits_{n\to\infty}na_n=\underline{\qquad}$。`, a: R`$\left(1+e^{-1}\right)^{\frac32}-1$`, sol: R`【解】$a_n=\frac32\cdot\frac1n\int_0^{\frac n{n+1}}(1+x^n)^{\frac12}d(1+x^n)=\frac1n\left\{\left[1+\left(\frac n{n+1}\right)^n\right]^{\frac32}-1\right\}$。
由 $\lim\limits_{n\to\infty}\left(\frac{n+1}n\right)^n=e$ 知 $\lim\limits_{n\to\infty}\left(\frac n{n+1}\right)^n=\frac1e$，故 $\lim\limits_{n\to\infty}na_n=(1+e^{-1})^{\frac32}-1$。` },
      { n: "(6)", q: R`设 $k\neq\frac12$，则 $\lim\limits_{n\to\infty}\left[\dfrac{n-2nk+1}{n(1-2k)}\right]^n=\underline{\qquad}$。`, a: R`$e^{\frac1{1-2k}}$`, sol: R`【解】$\frac{n-2nk+1}{n(1-2k)}=1+\frac1{n(1-2k)}$，故
$$\lim_{n\to\infty}\left[\frac{n-2nk+1}{n(1-2k)}\right]^n=\lim_{n\to\infty}\left[1+\frac1{n(1-2k)}\right]^n=\lim_{n\to\infty}\left\{\left[1+\frac1{n(1-2k)}\right]^{n(1-2k)}\right\}^{\frac1{1-2k}}=e^{\frac1{1-2k}}.$$
【注】原书解析先取对数：$\lim\limits_{n\to\infty}\ln\left[\frac{n-2nk+1}{n(1-2k)}\right]^n=\frac1{1-2k}$，故原极限为 $e^{\frac1{1-2k}}$。` },
      { n: "(7)", q: R`设 $0<a_1<a_2$，则 $\lim\limits_{n\to\infty}(a_1^{-n}+a_2^{-n})^{\frac1n}=\underline{\qquad}$。`, a: R`$a_1^{-1}$`, sol: R`【解】由 $0<a_1<a_2$，$\lim\limits_{n\to\infty}\left(a_1^{-n}+a_2^{-n}\right)^{\frac1n}=\lim\limits_{n\to\infty}a_1^{-1}\left[1+\left(\frac{a_1}{a_2}\right)^n\right]^{\frac1n}=a_1^{-1}$。
【注】也可用结论 $\lim\limits_{n\to\infty}\sqrt[n]{a_1^n+\cdots+a_k^n}=\max\{a_i\}$，或夹逼准则 $\frac1{a_1}<\sqrt[n]{\left(\frac1{a_1}\right)^n+\left(\frac1{a_2}\right)^n}<\frac{\sqrt[n]2}{a_1}$。` },
      { n: "(8)", q: R`设 $\lim\limits_{x\to-\infty}(\sqrt[3]{1-x^6}-ax^2-b)=0$，则 $a=\underline{\qquad}$，$b=\underline{\qquad}$。`, a: R`$a=-1$，$b=0$`, sol: R`【解】由已知 $\lim\limits_{x\to-\infty}\left(\sqrt[3]{x^{-6}-1}-a-bx^{-2}\right)=0$（分子分母同乘 $\frac1{x^2}$ 形式），易知 $a=-1$。代回得 $\lim\limits_{x\to-\infty}\left(\sqrt[3]{1-x^6}+x^2-b\right)=0$，故
$$b=\lim_{x\to-\infty}\left(\sqrt[3]{1-x^6}+x^2\right)=\lim_{x\to-\infty}\frac1{\sqrt[3]{(1-x^6)^2}-x^2\sqrt[3]{1-x^6}+x^4}=0,$$
故 $a=-1,b=0$。` },
      { n: "(9)", q: R`设 $\lim\limits_{x\to0}\left\{a[x]+\dfrac{\ln(1+e^{\frac2x})}{\ln(1+e^{\frac1x})}\right\}=b$，其中 $[x]$ 表示不超过 $x$ 的最大整数，则 $a=\underline{\qquad}$，$b=\underline{\qquad}$。`, a: R`$a=-2$，$b=2$`, sol: R`【解】由 $\lim\limits_{x\to0^+}[x]=0$、$\lim\limits_{x\to0^-}[x]=-1$，分左右极限：
$$\lim_{x\to0^+}\frac{\ln(1+e^{\frac2x})}{\ln(1+e^{\frac1x})}=\lim_{x\to0^+}\frac{2+x\ln(1+e^{-\frac2x})}{1+x\ln(1+e^{-\frac1x})}=2=b,$$
$$\lim_{x\to0^-}\left\{-a+\frac{\ln(1+e^{\frac2x})}{\ln(1+e^{\frac1x})}\right\}=-a+\lim_{x\to0^-}\frac{e^{\frac2x}}{e^{\frac1x}}=-a+0=2,$$
故 $a=-2,b=2$。` },
      { n: "(10)", q: R`已知连续函数 $y=f(x)$ 关于点 $(a,0)\ (a\neq0)$ 对称，则对常数 $c$，$I=\displaystyle\int_{-c}^cf(a-x)\,dx=\underline{\qquad}$。`, a: R`$0$`, sol: R`【解】由 $y=f(x)$ 关于点 $(a,0)$ 对称知 $f(a+x)=-f(a-x)$，即 $f(a-x)$ 关于 $x$ 是奇函数，故对称区间上积分为 0，$I=0$。
【注】① $y=f(x)$ 关于直线 $x=a$ 对称 $\Leftrightarrow f(a+x)=f(a-x)\Rightarrow f(a\pm x)$ 关于 $x$ 为偶函数；② 关于点 $(a,0)$ 对称 $\Leftrightarrow f(a+x)=-f(a-x)\Rightarrow f(a\pm x)$ 关于 $x$ 为奇函数。` },
      { n: "(11)", q: R`设函数 $y=y(x)$ 由方程 $y^2+xy+x^2-x=0$ 确定，且 $y(1)=-1$，则 $\lim\limits_{x\to1}\dfrac{(x-1)^2}{1+y(x)}=\underline{\qquad}$。`, a: R`$1$`, sol: R`【解】方程两边对 $x$ 求导：$2yy'+y+xy'+2x-1=0$，解得 $y'=-\frac{y+2x-1}{2y+x}$，由 $y(1)=-1$ 得 $y'(1)=0$。故
$$\lim_{x\to1}\frac{(x-1)^2}{1+y(x)}\xlongequal{\text{洛必达}}\lim_{x\to1}\frac{2(x-1)}{y'(x)}=-2\lim_{x\to1}\frac{2xy-2y+x^2-x}{y+2x-1}\xlongequal{\text{洛必达}}-2\lim_{x\to1}\frac{2xy'+2y-2y'+2x-1}{y'+2}=-2\times\left(-\frac12\right)=1.$$` },
      { n: "(12)", q: R`设 $f''(1)$ 存在，$f'(1)\neq0$，则 $\lim\limits_{x\to1}\left[\dfrac1{f'(1)(x-1)}-\dfrac1{f(x)-f(1)}\right]=\underline{\qquad}$。`, a: R`$\frac{f''(1)}{2[f'(1)]^2}$`, sol: R`【解】原式为 $\infty-\infty$ 型，先通分再用泰勒公式：
$$\text{原式}=\lim_{x\to1}\frac{f(x)-f(1)-f'(1)(x-1)}{f'(1)(x-1)[f(x)-f(1)]}=\lim_{x\to1}\frac{\frac12f''(1)(x-1)^2+o[(x-1)^2]}{f'(1)(x-1)[f(x)-f(1)]}=\frac{f''(1)}{2[f'(1)]^2}.$$` }
    ]
  };
})();
