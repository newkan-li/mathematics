window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q660_s13"] = {
    id: "q660_s13",
    ch: "660题 · 填空题 · 高等数学",
    title: "填空题 第 311–325 题",
    probTitle: "填空题（含原书详解）",
    book: "《数学基础过关660题（数学二）》",
    problems: [
      { n: 311, q: R`设 $g(x)=\begin{cases}4-x^2,&x\leqslant0,\\4+x^2,&x>0,\end{cases}$ $f(x)=\begin{cases}x^2+1,&x<0,\\-x,&x\geqslant0,\end{cases}$ 则 $g(f(x))=\underline{\qquad}$。`, a: R`$g(f(x))=\begin{cases}4+(x^2+1)^2,&x<0,\\4-x^2,&x\geqslant0.\end{cases}$`, sol: R`【分析】$g(f(x))=\begin{cases}4-f^2(x),&f(x)\leqslant0,\\4+f^2(x),&f(x)>0.\end{cases}$
由 $f(x)$ 的定义知：$x<0$ 时 $f(x)=x^2+1>0$；$x>0$ 时 $f(x)=-x<0$；$x=0$ 时 $f(x)=0$。故
$$g(f(x))=\begin{cases}4+(x^2+1)^2,&x<0,\\4-(-x)^2,&x\geqslant0\end{cases}=\begin{cases}4+(x^2+1)^2,&x<0,\\4-x^2,&x\geqslant0.\end{cases}$$` },
      { n: 312, q: R`$I=\lim\limits_{x\to+\infty}\dfrac{x^3e^x(3e^x+1)}{[1+(e^x+1)^2](1+e^x)}=\underline{\qquad}$。`, a: R`$0$`, sol: R`【分析】$\frac\infty\infty$ 型，分子分母同除以 $(e^x)^3$：
$$I=\lim_{x\to+\infty}\frac{x^3e^{-x}(3+e^{-x})}{[e^{-2x}+(1+e^{-x})^2](e^{-x}+1)}=\lim_{x\to+\infty}\frac{x^3}{e^x}\cdot\lim_{x\to+\infty}\frac{3+e^{-x}}{[e^{-2x}+(1+e^{-x})^2](e^{-x}+1)}=0\times3=0,$$
其中用洛必达法则知 $\lim\limits_{x\to+\infty}\frac{x^3}{e^x}=0$。
【评注】求 $\frac\infty\infty$（或 $\frac00$）型极限可先约去分子分母中极限为 $\infty$（或 0）的因子，再用四则运算法则。` },
      { n: 313, q: R`设 $\alpha>0,\beta>0$ 为常数，则 $I=\lim\limits_{x\to+\infty}x^\alpha e^{-\beta x}=\underline{\qquad}$。`, a: R`$0$`, sol: R`【分析】$I=\lim\limits_{x\to+\infty}\left(\dfrac{x}{e^{\frac\beta\alpha x}}\right)^\alpha$。由洛必达法则 $\lim\limits_{x\to+\infty}\dfrac{x}{e^{\frac\beta\alpha x}}=\lim\limits_{x\to+\infty}\dfrac{1}{\frac\beta\alpha e^{\frac\beta\alpha x}}=0$，故 $I=0$。
【评注】由此可得 $\lim\limits_{x\to+\infty}\frac{x^\alpha}{a^{\beta x}}=0\ (a>1)$，$\lim\limits_{x\to0^+}x^\alpha|\ln x|^\beta=0$，$\lim\limits_{x\to+\infty}\frac{\ln^\beta x}{x^\alpha}=0$（换元化为本例）。` },
      { n: 314, q: R`$I=\lim\limits_{x\to0}\left(\dfrac{\sin x}{x}\right)^{\frac{1}{1-\cos x}}=\underline{\qquad}$。`, a: R`$e^{-\frac13}$`, sol: R`【分析】$1^\infty$ 型。$I=e^{\lim\limits_{x\to0}\frac{1}{1-\cos x}\ln\frac{\sin x}{x}}$，而
$$J=\lim_{x\to0}\frac{1}{1-\cos x}\ln\frac{\sin x}{x}=\lim_{x\to0}\frac{2}{x^2}\left(\frac{\sin x}{x}-1\right)=2\lim_{x\to0}\frac{\sin x-x}{x^3}=2\lim_{x\to0}\frac{\cos x-1}{3x^2}=-\frac13,$$
故 $I=e^{-1/3}$（用 $1-\cos x\sim\frac12x^2$，$\ln(1+t)\sim t$）。
【评注】$1^\infty$ 型：$\lim u^v=e^{\lim v(u-1)}$（当 $u\to1,v\to\infty$）。` },
      { n: 315, q: R`$I=\lim\limits_{x\to0}\dfrac{x^2-\displaystyle\int_0^{x^2}\cos t^2\,\mathrm dt}{\sin^{10}x}=\underline{\qquad}$。`, a: R`$\frac1{10}$`, sol: R`【分析】$\sin^{10}x\sim x^{10}$，故 $I=\lim\limits_{x\to0}\dfrac{x^2-\int_0^{x^2}\cos t^2dt}{x^{10}}$。令 $u=x^2$：
$$I=\lim_{u\to0^+}\frac{u-\int_0^u\cos t^2dt}{u^5}\xlongequal{\text{洛必达}}\lim_{u\to0^+}\frac{1-\cos u^2}{5u^4}=\lim_{u\to0^+}\frac{\frac12u^4}{5u^4}=\frac1{10}.$$` },
      { n: 316, q: R`$I=\lim\limits_{x\to0}\dfrac{(1-\sqrt{\cos x})(1-\sqrt[3]{\cos x})\cdots(1-\sqrt[n]{\cos x})}{(1-\cos x)^n}=\underline{\qquad}$。`, a: R`$\frac1{n!}$`, sol: R`【分析】用等价无穷小 $\sqrt[m]{1+t}-1\sim\frac tm\ (t\to0)$，得 $\sqrt[m]{\cos x}-1\sim\frac{\cos x-1}{m}$，于是
$$I=\lim_{x\to0}\prod_{m=2}^n\frac{\sqrt[m]{\cos x}-1}{\cos x-1}=\prod_{m=2}^n\frac1m=\frac{1}{2}\cdot\frac13\cdots\frac1n=\frac1{n!}.$$
【评注】也可用 $\lim\limits_{x\to0}\frac{1-\sqrt[m]{\cos x}}{1-\cos x}=\frac1m$（洛必达），逐项相乘。` },
      { n: 317, q: R`设 $a>0,a\neq1$，且 $I=\lim\limits_{x\to+\infty}x^p\left(a^{\frac1x}-a^{\frac{1}{x+1}}\right)=\ln a$，则 $p=\underline{\qquad}$。`, a: R`$2$`, sol: R`【分析】$a^{\frac1x}-a^{\frac1{x+1}}=a^{\frac1{x+1}}\left(a^{\frac{1}{x(x+1)}}-1\right)\sim a^{\frac1{x+1}}\cdot\dfrac{\ln a}{x(x+1)}\ (x\to+\infty)$，故
$$I=\ln a\cdot\lim_{x\to+\infty}\frac{x^p}{x(x+1)}=\ln a\ (\text{当 }p=2).$$
【评注】$p<2$ 时 $I=0$，$p>2$ 时 $I=+\infty$。` },
      { n: 318, q: R`$I=\lim\limits_{x\to0}\dfrac{(e^{x^2}-1)(\sqrt{1+x}-\sqrt{1-x})}{[\ln(1-x)+\ln(1+x)]\sin\dfrac{x}{1+x}}=\underline{\qquad}$。`, a: R`$-1$`, sol: R`【分析】$x\to0$ 时 $e^{x^2}-1\sim x^2$，$\sqrt{1+x}-\sqrt{1-x}=\frac{2x}{\sqrt{1+x}+\sqrt{1-x}}$，$\ln(1-x^2)\sim-x^2$，$\sin\frac{x}{1+x}\sim x$，故
$$I=\lim_{x\to0}\frac{x^2\cdot\frac{2x}{\sqrt{1+x}+\sqrt{1-x}}}{-x^2\cdot x}=-1.$$
【评注】正确使用等价无穷小因子代换可简化计算。` },
      { n: 319, q: R`$I=\lim\limits_{x\to+\infty}\left(\sqrt[6]{x^6+x^5}-\sqrt[6]{x^6-x^5}\right)=\underline{\qquad}$。`, a: R`$\frac13$`, sol: R`【分析】$\sqrt[6]{x^6\pm x^5}=x\sqrt[6]{1\pm\frac1x}$，故
$$I=\lim_{x\to+\infty}x\left(\sqrt[6]{1+\tfrac1x}-1\right)-\lim_{x\to+\infty}x\left(\sqrt[6]{1-\tfrac1x}-1\right)=\frac16+\frac16=\frac13,$$
其中 $(1+t)^a-1\sim at\ (t\to0)$。
【评注】$\infty-\infty$ 型先恒等变形再用等价无穷小，或化为 $\frac00$ 型用洛必达法则。` },
      { n: 320, q: R`设 $a,b,p$ 为非零常数，则 $I=\lim\limits_{x\to0}\dfrac{a+be^{\frac1x}}{a-be^{\frac1x}}\cdot\dfrac{\sin px}{|x|}=\underline{\qquad}$。`, a: R`$-p$`, sol: R`【分析】$\lim\limits_{x\to0}e^{\frac1x}$ 不存在（左、右极限不同），须分左右极限。
$$\lim_{x\to0^+}\frac{a+be^{\frac1x}}{a-be^{\frac1x}}\cdot\frac{\sin px}{x}=\lim_{x\to0^+}\frac{ae^{-\frac1x}+b}{ae^{-\frac1x}-b}\cdot p=\frac{0+b}{0-b}\cdot p=-p,$$
$$\lim_{x\to0^-}\frac{a+be^{\frac1x}}{a-be^{\frac1x}}\cdot\frac{\sin px}{-x}=\frac{a+0}{a-0}\cdot(-p)=-p.$$
故 $I=-p$。
【评注】含 $e^{1/x}$、$|x|$ 的极限须分左右讨论。` },
      { n: 321, q: R`设 $\lim\limits_{x\to0}\dfrac{\ln\left(1+x+\dfrac{f(x)}{x}\right)}{x}=3$，则 $\lim\limits_{x\to0}\dfrac{f(x)}{x^2}=\underline{\qquad}$。`, a: R`$2$`, sol: R`【分析】由题设 $\lim\limits_{x\to0}\frac{\ln\left(1+x+\frac{f(x)}{x}\right)}{x}=3$。分母为无穷小，故分子也为无穷小，进而 $\lim\limits_{x\to0}\left(x+\frac{f(x)}{x}\right)=0$，且 $\ln\left(1+x+\frac{f(x)}{x}\right)\sim x+\frac{f(x)}{x}$。故 $\lim\limits_{x\to0}\frac{x+\frac{f(x)}{x}}{x}=3$，得
$$\lim_{x\to0}\frac{f(x)}{x^2}=2.$$
【评注】由 $\lim\limits_{x\to0}\left(x+\frac{f(x)}{x}\right)=0$ 得 $\lim\limits_{x\to0}\frac{f(x)}{x}=0$，于是在原条件下还可求得 $\lim\limits_{x\to0}\left(1+\frac{f(x)}{x}\right)^{\frac1x}=e^2$。` },
      { n: 322, q: R`$I=\lim\limits_{x\to0}\dfrac{1}{x^2}\left\{\ln(1+2x-x^2)-6\left[(1+x)^{\frac13}-1\right]\right\}=\underline{\qquad}$。`, a: R`$-\frac73$`, sol: R`【分析】用泰勒公式：$\ln(1+2x-x^2)=2x-3x^2+o(x^2)$，$(1+x)^{1/3}-1=\frac13x-\frac19x^2+o(x^2)$，故
$$I=\lim_{x\to0}\frac1{x^2}\left[(2x-3x^2)-6\left(\frac13x-\frac19x^2\right)+o(x^2)\right]=\lim_{x\to0}\frac1{x^2}\left(-3+\frac23\right)x^2=-\frac73.$$
【评注】也可用洛必达法则两次求得。` },
      { n: 323, q: R`设 $x_n=\left(1+\dfrac1{2^2}\right)\left(1+\dfrac1{2^4}\right)\cdots\left(1+\dfrac1{2^{2^n}}\right)$，则 $\lim\limits_{n\to\infty}x_n=\underline{\qquad}$。`, a: R`$\frac43$`, sol: R`【分析】用平方差公式化简：
$$\left(1-\frac1{2^2}\right)x_n=\left(1-\frac1{2^2}\right)\left(1+\frac1{2^2}\right)\cdots\left(1+\frac1{2^{2^n}}\right)=1-\frac1{2^{2^{n+1}}},$$
故 $\lim\limits_{n\to\infty}x_n=\frac43\lim\limits_{n\to\infty}\left(1-\frac1{2^{2^{n+1}}}\right)=\frac43$。
【评注】恒等变形（乘 $(1-\frac1{2^2})$ 凑平方差）是求数列极限的重要方法。` },
      { n: 324, q: R`设 $x_n=\left(\sum\limits_{k=1}^n\dfrac1{2(1+2+\cdots+k)}\right)^n$，则 $\lim\limits_{n\to\infty}x_n=\underline{\qquad}$。`, a: R`$\frac1e$`, sol: R`【分析】$2(1+2+\cdots+k)=k(k+1)$，故
$$x_n=\left(\sum_{k=1}^n\frac1{k(k+1)}\right)^n=\left(\sum_{k=1}^n\left(\frac1k-\frac1{k+1}\right)\right)^n=\left(1-\frac1{n+1}\right)^n\to e^{-1}.$$` },
      { n: 325, q: R`设 $a_1,a_2,\cdots,a_m$ 为正数（$m\geqslant2$），则 $I=\lim\limits_{n\to\infty}\left(a_1^n+a_2^n+\cdots+a_m^n\right)^{\frac1n}=\underline{\qquad}$。`, a: R`$\max\{a_1,a_2,\cdots,a_m\}$`, sol: R`【分析】不妨设 $a_1$ 为最大值，则
$$I=a_1\lim_{n\to\infty}\left(1+\left(\frac{a_2}{a_1}\right)^n+\cdots+\left(\frac{a_m}{a_1}\right)^n\right)^{\frac1n}=a_1\cdot1=a_1.$$
也可用夹逼定理：$a_1\leqslant(a_1^n+\cdots+a_m^n)^{1/n}\leqslant a_1m^{1/n}\to a_1$。故 $I=\max\{a_1,\cdots,a_m\}$。
【评注】「最大项」型极限：提出最大项后用幂指数运算法则或夹逼定理。` }
    ]
  };
})();
