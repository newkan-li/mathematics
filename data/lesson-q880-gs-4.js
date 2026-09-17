window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q880_s3"] = {
    id: "q880_s3",
    ch: "880题 · 高数 · 第一章 函数、极限、连续",
    title: "综合题·解答题",
    probTitle: "第一章 综合题 · 解答题（含原书解析）",
    book: "李林《精讲精练 880 题（数学二）》2026",
    problems: [
      { n: "(1)", q: R`设数列 $\{a_n\}$ 满足 $\lim\limits_{n\to\infty}\frac{a_{n+1}}{a_n}=q$，且 $|q|<1$，证明：$\lim\limits_{n\to\infty}a_n=0$。`, a: R`见证明`, sol: R`【证】考虑数列 $\{|a_n|\}$，有 $\lim\limits_{n\to\infty}\left|\frac{a_{n+1}}{a_n}\right|=|q|<1$，由极限保号性知存在 $N$，当 $n>N$ 时 $\left|\frac{a_{n+1}}{a_n}\right|<1$，即 $|a_{n+1}|<|a_n|$，故 $\{|a_n|\}$ 单调减少；又 $|a_n|\geqslant0$，由单调有界准则 $\lim\limits_{n\to\infty}|a_n|=a$ 存在。
反证：若 $a\neq0$，则 $\lim\limits_{n\to\infty}\frac{|a_{n+1}|}{|a_n|}=\frac aa=1$，与 $\lim\limits_{n\to\infty}\left|\frac{a_{n+1}}{a_n}\right|=|q|<1$ 矛盾，故 $a=0$，从而 $\lim\limits_{n\to\infty}a_n=0$。` },
      { n: "(2)", q: R`设 $a_k=2^{2^k}$，$u_n=a_1a_2\cdots a_n\ (n=1,2,\cdots)$，求 $\lim\limits_{n\to\infty}u_n$。`, a: R`$2$`, sol: R`【解】$u_n=2^{\frac12}\cdot2^{\frac14}\cdots2^{\frac1{2^n}}=2^{\frac12+\frac14+\cdots+\frac1{2^n}}$，而 $\lim\limits_{n\to\infty}\left(\frac12+\frac14+\cdots+\frac1{2^n}\right)=\frac{\frac12}{1-\frac12}=1$，故 $\lim\limits_{n\to\infty}u_n=2^1=2$。
【注】相乘因子不是有限项，不能用极限的四则运算法则。` },
      { n: "(3)", q: R`设数列 $x_n=(1+a)^n+(1-a)^n$，证明：$\lim\limits_{n\to\infty}\frac{x_{n+1}}{x_n}=\begin{cases}1+|a|,&a\neq0,\\1,&a=0.\end{cases}$`, a: R`见证明`, sol: R`【证】分 $a=0,a>0,a<0$ 讨论。
当 $a=0$ 时 $x_n=2$，故 $\lim\limits_{n\to\infty}\frac{x_{n+1}}{x_n}=1$；
当 $a>0$ 时，
$$\lim_{n\to\infty}\frac{x_{n+1}}{x_n}=\lim_{n\to\infty}\frac{(1+a)^{n+1}+(1-a)^{n+1}}{(1+a)^n+(1-a)^n}=\lim_{n\to\infty}\frac{1+a+\left(\frac{1-a}{1+a}\right)^n(1-a)}{1+\left(\frac{1-a}{1+a}\right)^n}=1+a,$$
其中 $\left|\frac{1-a}{1+a}\right|<1$，故其 $n$ 次幂趋于 0；
当 $a<0$ 时，同理可证 $\lim\limits_{n\to\infty}\frac{x_{n+1}}{x_n}=1-a=1+|a|$。即所证等式成立。` },
      { n: "(4)", q: R`证明：$\lim\limits_{n\to\infty}\sqrt[n]{a_1^n+a_2^n+\cdots+a_k^n}=\max\{a_1,a_2,\cdots,a_k\}\ (a_i>0;\ i=1,2,\cdots,k)$。`, a: R`见证明`, sol: R`【证】令 $\max\{a_1,a_2,\cdots,a_k\}=a$，则
$$a=\sqrt[n]{a^n}\leqslant\sqrt[n]{a_1^n+a_2^n+\cdots+a_k^n}\leqslant\sqrt[n]{ka^n},$$
而 $\lim\limits_{n\to\infty}\sqrt[n]{ka^n}=\lim\limits_{n\to\infty}a\sqrt[n]k=a$，故由夹逼准则 $\lim\limits_{n\to\infty}\sqrt[n]{a_1^n+\cdots+a_k^n}=\max\{a_1,\cdots,a_k\}$。` },
      { n: "(5)", q: R`(Ⅰ) 设 $x_1=1,x_2=2,x_{n+2}=\frac12(3x_{n+1}-x_n)\ (n=1,2,\cdots)$，求 $\lim\limits_{n\to\infty}x_n$；
(Ⅱ) 设 $x_1=1,x_2=2,x_{n+2}=\frac12(x_n+x_{n+1})$，求 $\lim\limits_{n\to\infty}x_n$。`, a: R`(Ⅰ) $3$；(Ⅱ) $\frac53$`, sol: R`【解】(Ⅰ) 由 $x_{n+2}=\frac12(3x_{n+1}-x_n)$ 得 $\frac{x_{n+2}-x_{n+1}}{x_{n+1}-x_n}=\frac12$。令 $y_n=x_{n+1}-x_n$，则 $\{y_n\}$ 是以 $\frac12$ 为公比的等比数列。当 $n\geqslant2$ 时，
$$x_n=1+1+\frac12+\frac1{2^2}+\cdots+\frac1{2^{n-2}}=1+2\left(1-\frac1{2^{n-1}}\right),$$
故 $\lim\limits_{n\to\infty}x_n=3$。
(Ⅱ) 由 $x_{n+2}=\frac12(x_n+x_{n+1})$ 得 $x_{n+2}-x_{n+1}=-\frac12(x_{n+1}-x_n)$。当 $n>3$ 时，
$$x_n-x_{n-1}=\left(-\frac12\right)^{n-2}(x_2-x_1)=\left(-\frac12\right)^{n-2},$$
故 $x_n=1+\sum\limits_{k=0}^{n-2}\left(-\frac12\right)^k=1+\frac23\left[1-\left(-\frac12\right)^{n-1}\right]$，所以 $\lim\limits_{n\to\infty}x_n=\frac53$。` },
      { n: "(6)", q: R`设 $f_n(x)=1-(1-\cos x)^n\ (n=1,2,\cdots)$。
(Ⅰ) 证明：方程 $f_n(x)=\frac12$ 在 $\left(0,\frac\pi2\right)$ 内有且仅有一个实根 $x_n$；
(Ⅱ) 设 $x_n\in\left(0,\frac\pi2\right)$ 满足 $f_n(x_n)=\frac12$，证明：$\arccos\frac1n<x_n<\frac\pi2$，且 $\lim\limits_{n\to\infty}x_n=\frac\pi2$。`, a: R`见证明`, sol: R`【证】(Ⅰ) $f_n(x)$ 在 $\left[0,\frac\pi2\right]$ 上连续，$f_n(0)=1$，$f_n\left(\frac\pi2\right)=0$，而 $0<\frac12<1$，由介值定理至少存在 $x_n\in\left(0,\frac\pi2\right)$ 使 $f_n(x_n)=\frac12$。又 $f_n'(x)=-n(1-\cos x)^{n-1}\sin x<0\ \left(0<x<\frac\pi2\right)$，故 $f_n(x)$ 严格单调减少，$x_n$ 唯一。
(Ⅱ) 由 $f_n\left(\arccos\frac1n\right)=1-\left(1-\frac1n\right)^n$，$\lim\limits_{n\to\infty}f_n\left(\arccos\frac1n\right)=1-\frac1e>\frac12$，且 $f_n\left(\arccos\frac1n\right)$ 单调减少，故 $f_n\left(\arccos\frac1n\right)>\frac12$。又 $f_n$ 单调减少，故 $\arccos\frac1n<x_n<\frac\pi2$。而 $\lim\limits_{n\to\infty}\arccos\frac1n=\frac\pi2$，由夹逼准则 $\lim\limits_{n\to\infty}x_n=\frac\pi2$。` },
      { n: "(7)", q: R`(Ⅰ) 证明：方程 $x=1+2\ln x$ 在 $(e,+\infty)$ 内有唯一实根 $\xi$；
(Ⅱ) 取 $x_0\in(e,\xi)$，令 $x_n=1+2\ln x_{n-1}\ (n=1,2,\cdots)$，证明：$\lim\limits_{n\to\infty}x_n=\xi$。`, a: R`见证明`, sol: R`【证】(Ⅰ) 令 $f(x)=x-1-2\ln x$，则 $f(e)=e-3<0$，且 $\lim\limits_{x\to+\infty}f(x)=+\infty$，由零点定理 $f(x)=0$ 在 $(e,+\infty)$ 内至少有一个实根。又 $f'(x)=1-\frac2x>0\ (x\in(e,+\infty))$，故实根唯一，记为 $\xi$。
(Ⅱ) 由 (Ⅰ) 知当 $x\in(e,\xi)$ 时 $f(x)<0$，即 $1+2\ln x>x$。当 $e<x_0<\xi$ 时，$x_1=1+2\ln x_0>x_0$，且 $x_1=1+2\ln x_0<1+2\ln\xi=\xi$。假设 $x_n>x_{n-1}$ 且 $x_n<\xi$，则 $x_{n+1}=1+2\ln x_n>x_n$，$x_{n+1}=1+2\ln x_n<\xi$。由数学归纳法 $\{x_n\}$ 单调增加有上界，故 $\lim\limits_{n\to\infty}x_n$ 存在，记为 $A$。对 $x_n=1+2\ln x_{n-1}$ 取极限得 $A=1+2\ln A$，即 $A$ 为方程 $x=1+2\ln x$ 的实根，由 (Ⅰ) 知 $A=\xi$。` },
      { n: "(8)", q: R`设 $f(x)$ 在 $[0,1]$ 上连续，且 $f(0)=f(1)$，证明：
(Ⅰ) 至少存在一点 $\xi\in(0,1)$，使得 $f(\xi)=f\left(\xi+\frac12\right)$；
(Ⅱ) 至少存在一点 $\xi\in(0,1)$，使得 $f(\xi)=f\left(\xi+\frac1n\right)$（$n\geqslant2$ 为自然数）。`, a: R`见证明`, sol: R`【证】(Ⅰ) 令 $g(x)=f(x)-f\left(x+\frac12\right)$，$x\in\left[0,\frac12\right]$，则 $g(0)=f(0)-f\left(\frac12\right)$，$g\left(\frac12\right)=f\left(\frac12\right)-f(1)$。若 $g\left(\frac12\right)=0$ 取 $\xi=\frac12$；否则由 $f(0)=f(1)$ 知 $g(0)g\left(\frac12\right)<0$，由零点定理存在 $\xi\in\left(0,\frac12\right)\subset(0,1)$ 使 $g(\xi)=0$，即 $f(\xi)=f\left(\xi+\frac12\right)$。
(Ⅱ) 令 $F(x)=f\left(x+\frac1n\right)-f(x)$，$x\in\left[0,\frac{n-1}n\right]$，则 $F(0)+F\left(\frac1n\right)+\cdots+F\left(\frac{n-1}n\right)=f(1)-f(0)=0$。若各项全为 0，结论显然；若不全为 0，则必有正有负，由零点定理存在 $\xi\in(0,1)$ 使 $F(\xi)=0$，即 $f(\xi)=f\left(\xi+\frac1n\right)$。
【注】可推广为：设 $f(x)$ 在 $[a,b]$ 上连续，$f(a)=f(b)$，则至少存在 $\xi\in(a,b)$ 使 $f(\xi)=f\left(\xi+\frac{b-a}n\right)$。` },
      { n: "(9)", q: R`计算极限 $\lim\limits_{x\to0}\frac{\int_0^x[(3+2\tan t)^t-3^t]dt}{e^{3x^3}-1}$。`, a: R`$\frac2{27}$`, sol: R`【解】$e^{3x^3}-1\sim3x^3\ (x\to0)$，原式为 $\frac00$ 型。由洛必达法则，
$$\text{原式}=\lim_{x\to0}\frac{(3+2\tan x)^x-3^x}{9x^2}=\lim_{x\to0}\frac{3^x\left[\left(1+\frac23\tan x\right)^x-1\right]}{9x^2}=\lim_{x\to0}\frac{e^{x\ln(1+\frac23\tan x)}-1}{9x^2}=\lim_{x\to0}\frac{x\cdot\frac23\tan x}{9x^2}=\frac2{27}.$$` },
      { n: "(10)", q: R`求极限 $\lim\limits_{x\to+\infty}\frac{\frac1{x^3}\int_1^x\left[(1+t^2)\sin\frac1t-\cos t\right]dt}{1-e^{\frac1x}}$。`, a: R`$-\frac12$`, sol: R`【解】当 $x\to+\infty$ 时 $1-e^{\frac1x}\sim-\frac1x$，故
$$\lim_{x\to+\infty}\frac{\frac1{x^3}\int_1^x\left[(1+t^2)\sin\frac1t-\cos t\right]dt}{1-e^{\frac1x}}=\lim_{x\to+\infty}\frac{\int_1^x\left[(1+t^2)\sin\frac1t-\cos t\right]dt}{-x^2}$$
$$\xlongequal{\text{洛必达}}\lim_{x\to+\infty}\frac{(1+x^2)\sin\frac1x-\cos x}{-2x}=\lim_{x\to+\infty}\frac{x^2\sin\frac1x}{-2x}+\lim_{x\to+\infty}\frac{\sin\frac1x-\cos x}{-2x}.$$
由 $\sin\frac1x-\cos x$ 有界、分母趋于无穷，第二项为 0；又 $\lim\limits_{x\to+\infty}\frac{x^2\sin\frac1x}{-2x}=-\frac12\lim\limits_{x\to+\infty}\frac{\sin\frac1x}{\frac1x}=-\frac12$，故原式 $=-\frac12$。
【注】不能对 $\lim\limits_{x\to+\infty}\frac{(1+x^2)\sin\frac1x-\cos x}{-2x}$ 用洛必达法则，因为分子导数含 $\sin x$ 项，极限不存在。` },
      { n: "(11)", q: R`求 $\lim\limits_{x\to\infty}x^2\left[e^{\left(1+\frac1x\right)^x}-\left(1+\frac1x\right)^{ex}\right]$。`, a: R`$\frac18e^{e+1}$`, sol: R`【解】令 $\frac1x=t$，则
$$\lim_{x\to\infty}x^2\left[e^{\left(1+\frac1x\right)^x}-\left(1+\frac1x\right)^{ex}\right]=\lim_{t\to0}\frac{e^{(1+t)^{\frac1t}}-e^{\frac{e\ln(1+t)}t}}{t^2}.$$
由拉格朗日中值定理，$e^{(1+t)^{\frac1t}}-e^{\frac{e\ln(1+t)}t}=e^{\xi}\left[(1+t)^{\frac1t}-\frac{e\ln(1+t)}t\right]$，其中 $\xi$ 介于两者之间，$t\to0$ 时 $\xi\to e$。故
$$\text{原式}=e^e\lim_{t\to0}\frac{e^{\frac{\ln(1+t)}t}-\frac{e\ln(1+t)}t}{t^2}.$$
令 $u=\frac{\ln(1+t)}t$，由 $\frac{\ln(1+t)}t-1=-\frac t2+\frac{t^2}3+o(t^2)$ 得 $(u-1)^2\sim\frac{t^2}4$，则原式 $=e^e\lim\limits_{u\to1}\frac{e^u-eu}{4(u-1)^2}=e^e\lim\limits_{u\to1}\frac{e^u-e}{8(u-1)}=\frac18e^{e+1}$。` },
      { n: "(12)", q: R`求 $\lim\limits_{n\to\infty}\frac{n\left(\sqrt[n]{n+1}-\sqrt[n+1]{n}\right)}{\left(\sqrt[n]e-1\right)\ln n}$。`, a: R`$1$`, sol: R`【解】由拉格朗日中值定理，
$$\sqrt[n]{n+1}-\sqrt[n+1]{n}=e^{\frac{\ln(1+n)}n}-e^{\frac{\ln n}{n+1}}=e^{\xi_n}\left[\frac{\ln(1+n)}n-\frac{\ln n}{n+1}\right],$$
其中 $\xi_n$ 介于 $\frac{\ln n}{n+1}$ 与 $\frac{\ln(n+1)}n$ 之间，$\lim\limits_{n\to\infty}\xi_n=0$。又
$$\frac{\ln(1+n)}n-\frac{\ln n}{n+1}=\frac{(n+1)\ln(n+1)-n\ln n}{n(n+1)}=\frac1{n(n+1)}\left[\ln\left(1+\frac1n\right)^n+\ln(1+n)\right],$$
故原极限 $=\lim\limits_{n\to\infty}\frac{ne^{\xi_n}}{n+1}\left[\frac1{\ln n}\ln\left(1+\frac1n\right)^n+\frac{\ln(n+1)}{\ln n}\right]=1\cdot(0+1)=1$（用 $\sqrt[n]e-1\sim\frac1n$）。` },
      { n: "(13)", q: R`若极限 $\lim\limits_{x\to+\infty}\frac1x\int_0^x\left[\frac{at^{1+t}}{(1+t)^t}-t\right]dt=b$ 存在，$a>0$，求 $a,b$ 的值。`, a: R`$a=e$，$b=\frac12$`, sol: R`【解】由洛必达法则，
$$\lim_{x\to+\infty}\frac1x\int_0^x\left[\frac{at^{1+t}}{(1+t)^t}-t\right]dt=\lim_{x\to+\infty}x\left[\frac{a}{(1+\frac1x)^x}-1\right]=\lim_{x\to+\infty}x\left[ae^{-x\ln(1+\frac1x)}-1\right]=b.$$
故 $\lim\limits_{x\to+\infty}\left[e^{\ln a-x\ln(1+\frac1x)}-1\right]=0$，即 $\ln a-x\ln\left(1+\frac1x\right)\to0$，所以 $a=e$。从而
$$b=\lim_{x\to+\infty}x\left[1-x\ln\left(1+\frac1x\right)\right]\xlongequal{\frac1x=y}\lim_{y\to0^+}\frac{y-\ln(1+y)}{y^2}=\lim_{y\to0^+}\frac{1-\frac1{1+y}}{2y}=\frac12.$$` },
      { n: "(14)", q: R`设 $0<x_1<\pi$，$x_{n+1}=\sin x_n$。
(Ⅰ) 证明：$\lim\limits_{n\to\infty}x_n$ 存在，并求值；
(Ⅱ) 求 $\lim\limits_{n\to\infty}\left(\frac{x_{n+1}}{x_n}\right)^{\frac1{x_n^2}}$。`, a: R`(Ⅰ) $0$；(Ⅱ) $e^{-\frac16}$`, sol: R`【证】(Ⅰ) 显然 $x_n>0$ 有下界。又 $\sin x<x\ (x>0)$，故 $x_{n+1}=\sin x_n<x_n$，$\{x_n\}$ 单调减少，故 $\lim\limits_{n\to\infty}x_n$ 存在，记为 $A$。对 $x_{n+1}=\sin x_n$ 取极限得 $A=\sin A$，故 $A=0$。
【解】(Ⅱ) $\lim\limits_{n\to\infty}\left(\frac{x_{n+1}}{x_n}\right)^{\frac1{x_n^2}}=\lim\limits_{t\to0}\left(\frac{\sin t}t\right)^{\frac1{t^2}}\xlongequal{1^\infty\text{型}}e^{\lim\limits_{t\to0}\frac{\sin t-t}{t^3}}$，而 $\lim\limits_{t\to0}\frac{\sin t-t}{t^3}=\lim\limits_{t\to0}\frac{\cos t-1}{3t^2}=-\frac16$，故原式 $=e^{-\frac16}$。` },
      { n: "(15)", q: R`设 $\frac1{n+1}<\ln\left(1+\frac1n\right)<\frac1n$，证明：极限 $\lim\limits_{n\to\infty}\left(1+\frac12+\cdots+\frac1n-\ln n\right)$ 存在。`, a: R`见证明`, sol: R`【证】令 $x_n=1+\frac12+\cdots+\frac1n-\ln n$，则由 $x_{n+1}-x_n=\frac1{n+1}-\ln\left(1+\frac1n\right)<0$ 知 $\{x_n\}$ 单调减少。又
$$x_{n+1}=(x_{n+1}-x_n)+(x_n-x_{n-1})+\cdots+(x_2-x_1)+x_1>\left(\frac1{n+1}-\frac1n\right)+\left(\frac1n-\frac1{n-1}\right)+\cdots+\left(\frac12-1\right)+1=\frac1{n+1}>0,$$
可知 $\{x_n\}$ 有下界，故 $\lim\limits_{n\to\infty}x_n$ 存在。` },
      { n: "(16)", q: R`设 $x_1>0$，数列 $\{x_n\}$ 满足 $x_{n+1}=\ln(e^{x_n}-1)-\ln x_n$，证明：$\lim\limits_{n\to\infty}x_n$ 存在，并求值。`, a: R`$0$`, sol: R`【证】由 $x_{n+1}=\ln\frac{e^{x_n}-1}{x_n}$ 知 $e^{x_{n+1}}=\frac{e^{x_n}-1}{x_n}$。由 $x_1>0$ 及当 $x>0$ 时 $e^x-1>x$，得 $e^{x_2}=\frac{e^{x_1}-1}{x_1}>1$，故 $x_2>0$，归纳知 $x_n>0$，$\{x_n\}$ 有下界。
又由拉格朗日中值定理 $e^{x_{n+1}}=\frac{e^{x_n}-e^0}{x_n-0}=e^{\xi_n}<e^{x_n}$（$0<\xi_n<x_n$），而 $e^x$ 单调增加，故 $x_{n+1}<x_n$，$\{x_n\}$ 单调减少，由单调有界准则 $\lim\limits_{n\to\infty}x_n$ 存在。
记 $\lim\limits_{n\to\infty}x_n=a$，由 $x_ne^{x_{n+1}}=e^{x_n}-1$ 取极限得 $ae^a=e^a-1$，解得 $a=0$。` },
      { n: "(17)", q: R`求下列极限：
(Ⅰ) 当 $|x|<1$ 时，求 $\lim\limits_{n\to\infty}(1+x)(1+x^2)(1+x^4)\cdots(1+x^{2^n})$；
(Ⅱ) 当 $x\neq0$ 时，求 $\lim\limits_{n\to\infty}\cos\frac x2\cos\frac x4\cdots\cos\frac x{2^n}$；
(Ⅲ) $\lim\limits_{x\to\frac\pi2}\frac{(1-\sqrt{\sin x})(1-\sqrt[3]{\sin x})\cdots(1-\sqrt[n]{\sin x})}{(1-\sin x)^{n-1}}$。`, a: R`(Ⅰ) $\frac1{1-x}$；(Ⅱ) $\frac{\sin x}x$；(Ⅲ) $\frac1{n!}$`, sol: R`【解】(Ⅰ) 原极限 $=\lim\limits_{n\to\infty}\frac{(1-x)(1+x)(1+x^2)\cdots(1+x^{2^n})}{1-x}=\lim\limits_{n\to\infty}\frac{1-x^{2^{n+1}}}{1-x}$。当 $|x|<1$ 时 $x^{2^{n+1}}\to0$，故原极限 $=\frac1{1-x}$。
(Ⅱ) 原极限 $=\lim\limits_{n\to\infty}\frac{2^n\sin\frac x{2^n}\cos\frac x2\cos\frac x4\cdots\cos\frac x{2^n}}{2^n\sin\frac x{2^n}}$，逐次用倍角公式 $2\sin\theta\cos\theta=\sin2\theta$，得 $=\lim\limits_{n\to\infty}\frac{\sin x}{2^n\sin\frac x{2^n}}=\frac{\sin x}x$。
(Ⅲ) 原极限 $=\lim\limits_{x\to\frac\pi2}\prod\limits_{k=2}^n\frac{1-\sqrt[k]{\sin x}}{1-\sin x}=\frac12\cdot\frac13\cdots\frac1n=\frac1{n!}$。` },
      { n: "(18)", q: R`求下列极限：
(Ⅰ) 设 $\lim\limits_{x\to0}\frac{\ln\left[1+\frac{f(x)}{\sin x}\right]}{a^x-1}=\frac12\ (a>0,a\neq1)$，求 $\lim\limits_{x\to0}\frac{f(x)}{x^2}$；
(Ⅱ) 设 $f(x)$ 是三次多项式，且有 $\lim\limits_{x\to2a}\frac{f(x)}{x-2a}=\lim\limits_{x\to4a}\frac{f(x)}{x-4a}=1\ (a\neq0)$，求 $\lim\limits_{x\to3a}\frac{f(x)}{x-3a}$。`, a: R`(Ⅰ) $\frac12\ln a$；(Ⅱ) $-\frac12$`, sol: R`【解】(Ⅰ) 由 $\lim\limits_{x\to0}\frac{\ln\left[1+\frac{f(x)}{\sin x}\right]}{a^x-1}=\frac12$，用极限与无穷小关系得 $\frac{\ln\left[1+\frac{f(x)}{\sin x}\right]}{a^x-1}=\frac12+\alpha\ (\alpha\to0)$。又 $a^x-1\sim x\ln a$，故 $\ln\left[1+\frac{f(x)}{\sin x}\right]\sim\frac12x\ln a$，从而 $\frac{f(x)}{\sin x}\sim\frac12x\ln a$，即 $\frac{f(x)}x\sim\frac12\sin x\ln a$，故 $\lim\limits_{x\to0}\frac{f(x)}{x^2}=\frac12\ln a$。
(Ⅱ) 由两极限均为 1 知 $f(2a)=f(4a)=0$，故 $x-2a,x-4a$ 均为 $f(x)$ 的因式，令 $f(x)=A(x-2a)(x-4a)(x-B)$。由 $\lim\limits_{x\to2a}\frac{f(x)}{x-2a}=-2Aa(2a-B)=1$，$\lim\limits_{x\to4a}\frac{f(x)}{x-4a}=2Aa(4a-B)=1$，解得 $A=\frac1{2a^2}$，$B=3a$，故 $\lim\limits_{x\to3a}\frac{f(x)}{x-3a}=\frac1{2a^2}(a)(-a)=-\frac12$。` },
      { n: "(19)", q: R`设 $f(x)$ 在 $(a,b)$ 内连续，且 $\lim\limits_{x\to a^+}f(x)=-\infty$，$\lim\limits_{x\to b^-}f(x)=-\infty$，证明：$f(x)$ 在 $(a,b)$ 内有最大值。`, a: R`见证明`, sol: R`【证】由 $\lim\limits_{x\to a^+}f(x)=-\infty$、$\lim\limits_{x\to b^-}f(x)=-\infty$ 及极限定义，对 $M=f\left(\frac{a+b}2\right)$，存在 $c,d$ 使 $a<c<\frac{a+b}2<d<b$，当 $a<x\leqslant c$ 或 $d\leqslant x<b$ 时都有 $f(x)<M$。
又 $f(x)$ 在 $[c,d]\subset(a,b)$ 上连续，由最大值定理存在 $\xi\in[c,d]$ 使 $f(\xi)\geqslant f(x)\ (x\in[c,d])$，特别 $f(\xi)\geqslant f\left(\frac{a+b}2\right)$。于是：当 $x\in(a,c)$ 或 $x\in(d,b)$ 时 $f(x)<f\left(\frac{a+b}2\right)\leqslant f(\xi)$；当 $x\in[c,d]$ 时 $f(x)\leqslant f(\xi)$。故 $f(\xi)$ 为 $f(x)$ 在 $(a,b)$ 内的最大值。
【注】若条件改为 $\lim\limits_{x\to a^+}f(x)=\lim\limits_{x\to b^-}f(x)=+\infty$，则 $f(x)$ 在 $(a,b)$ 内有最小值。` },
      { n: "(20)", q: R`设 $x_1=\frac12$，$x_{n+1}=x_n^2+x_n\ (n=1,2,\cdots)$，求极限 $\lim\limits_{n\to\infty}\left(\frac1{x_1+1}+\frac1{x_2+1}+\cdots+\frac1{x_n+1}\right)$。`, a: R`$2$`, sol: R`【解】$\{x_n\}$ 是正项数列，$x_{n+1}=x_n(1+x_n)>x_n$，故 $\{x_n\}$ 单调增加，$x_n\geqslant x_1=\frac12\neq0$，$\left\{\frac1{x_n}\right\}$ 单调减少有下界 0，故 $\lim\limits_{n\to\infty}\frac1{x_n}$ 存在，记为 $A$。由 $x_{n+1}=x_n(x_n+1)$ 得
$$\frac1{x_n+1}=\frac{x_n}{x_{n+1}}=\frac{x_{n+1}-x_n}{x_nx_{n+1}}=\frac1{x_n}-\frac1{x_{n+1}},$$
故 $S_n=\sum\limits_{k=1}^n\frac1{x_k+1}=\frac1{x_1}-\frac1{x_{n+1}}=2-\frac1{x_{n+1}}$。由上式取极限得 $\lim\limits_{n\to\infty}\frac1{x_n+1}=0$，故 $\lim\limits_{n\to\infty}x_n=\infty$，$A=0$，从而 $\lim\limits_{n\to\infty}S_n=2-A=2$。` },
      { n: "(21)", q: R`设 $a_n=\int_0^1\sin x^n\,dx$，$b_n=\int_0^1\sin^n x\,dx\ (n=1,2,\cdots)$，证明：
(Ⅰ) $0\leqslant b_n\leqslant a_n$；
(Ⅱ) $\lim\limits_{n\to\infty}a_n=\lim\limits_{n\to\infty}b_n=0$。`, a: R`见证明`, sol: R`【证】(Ⅰ) 在 $[0,1]$ 上 $\sin x\geqslant0$，$\sin^n x\geqslant0$，故 $b_n\geqslant0$。令 $f(x)=\sin x^n-\sin^n x\ (0\leqslant x\leqslant1)$，则 $f'(x)=nx^{n-1}\cos x^n-n\sin^{n-1}x\cos x$。
因 $x\in[0,1]$ 时 $x\geqslant\sin x\geqslant0$，故 $x^{n-1}\geqslant\sin^{n-1}x\geqslant0$；又 $0\leqslant x^n\leqslant x\leqslant1<\frac\pi2$，故 $\cos x^n\geqslant\cos x>0$，从而 $f'(x)\geqslant0$，$f$ 在 $[0,1]$ 上单调增加。又 $f(0)=0$，故 $f(x)\geqslant0$，即 $\sin x^n\geqslant\sin^n x$，于是 $0\leqslant b_n\leqslant a_n$。
(Ⅱ) 由 $0\leqslant\sin x^n\leqslant x^n\ (0\leqslant x\leqslant1)$ 得 $0\leqslant a_n\leqslant\int_0^1x^n dx=\frac1{n+1}\to0$，由夹逼准则 $\lim\limits_{n\to\infty}a_n=0$，再由 $0\leqslant b_n\leqslant a_n$ 得 $\lim\limits_{n\to\infty}b_n=0$。` },
      { n: "(22)", q: R`设 $x_1\in\left(0,\frac\pi4\right)$，数列 $\{x_n\}$ 满足 $x_n=\frac12(x_{n+1}+\tan x_n)\ (n=1,2,\cdots)$。
(Ⅰ) 证明 $\lim\limits_{n\to\infty}x_n$ 存在，并求其值；
(Ⅱ) 求极限 $\lim\limits_{n\to\infty}\left(\frac{x_{n+1}}{x_n}\right)^{\frac1{x_n^2}}$。`, a: R`(Ⅰ) $0$；(Ⅱ) $e^{-\frac13}$`, sol: R`【证】(Ⅰ) 由已知 $x_{n+1}=2x_n-\tan x_n$。设 $0<x_n<\frac\pi4$，令 $f(x)=2x-\tan x$，则 $f'(x)=2-\sec^2x>0\ (0<x<\frac\pi4)$，故 $f$ 单调递增，$0<f(x)<f\left(\frac\pi4\right)=\frac\pi2-1<\frac\pi4$。由数学归纳法 $0<x_{n+1}<\frac\pi4$，即 $\{x_n\}$ 有界，且 $x_{n+1}-x_n=x_n-\tan x_n<0$，故 $\{x_n\}$ 单调递减。由单调有界准则 $\lim\limits_{n\to\infty}x_n$ 存在，记为 $a$。对 $x_{n+1}=2x_n-\tan x_n$ 取极限得 $a=2a-\tan a$，即 $\tan a=a$，故 $a=0$。
【解】(Ⅱ) $\lim\limits_{n\to\infty}\left(\frac{x_{n+1}}{x_n}\right)^{\frac1{x_n^2}}=e^{\lim\limits_{x\to0^+}\frac1{x^2}\ln\frac{2x-\tan x}x}=e^{\lim\limits_{x\to0^+}\frac1{x^2}\ln\left[1+\left(1-\frac{\tan x}x\right)\right]}=e^{\lim\limits_{x\to0^+}\frac1{x^2}\left(1-\frac{\tan x}x\right)}=e^{\lim\limits_{x\to0^+}\frac{x-\tan x}{x^3}}=e^{-\frac13}$。` },
      { n: "(23)", q: R`(Ⅰ) 证明：方程 $\sin x=(\ln x)^{\frac1n}\ (n=1,2,\cdots)$ 在 $\left(\frac\pi2,e\right)$ 内有唯一实根 $x_n$；
(Ⅱ) 在第 (Ⅰ) 小题的基础上，求极限 $\lim\limits_{n\to\infty}\left(\frac{\pi\sin x_n}{2x_n}\right)^{\frac1{x_n-\frac\pi2}}$。`, a: R`(Ⅱ) $e^{-\frac2\pi}$`, sol: R`【证】(Ⅰ) 令 $f(x)=(\ln x)^{\frac1n}-\sin x$，则 $f$ 在 $\left[\frac\pi2,e\right]$ 上可导，且 $f\left(\frac\pi2\right)=\left(\ln\frac\pi2\right)^{\frac1n}-1<0$，$f(e)=1-\sin e>0$。由零点定理 $f(x)=0$ 在 $\left(\frac\pi2,e\right)$ 内有实根 $x_n$。又 $f'(x)=\frac1{nx}(\ln x)^{\frac1n-1}-\cos x>0$（在 $\left(\frac\pi2,e\right)$ 内 $\ln x>0$，$\cos x<0$），故实根唯一。
【解】(Ⅱ) 由 (Ⅰ) 知 $\frac\pi2<x_n<e$，即 $\ln\frac\pi2<\ln x_n<1$，故 $\left(\ln\frac\pi2\right)^{\frac1n}<(\ln x_n)^{\frac1n}<1$，即 $\left(\ln\frac\pi2\right)^{\frac1n}<\sin x_n<1$。而 $\lim\limits_{n\to\infty}\left(\ln\frac\pi2\right)^{\frac1n}=1$，由夹逼准则 $\lim\limits_{n\to\infty}\sin x_n=1$，故 $\lim\limits_{n\to\infty}x_n=\frac\pi2$。
所求极限为 $1^\infty$ 型：$\lim\limits_{n\to\infty}\left(\frac{\pi\sin x_n}{2x_n}\right)^{\frac1{x_n-\frac\pi2}}=e^{\lim\limits_{n\to\infty}\frac1{x_n-\frac\pi2}\ln\frac{\pi\sin x_n}{2x_n}}$，而
$$\lim_{n\to\infty}\frac1{x_n-\frac\pi2}\ln\frac{\pi\sin x_n}{2x_n}=\lim_{n\to\infty}\frac1{x_n-\frac\pi2}\cdot\frac{\pi\sin x_n-2x_n}{2x_n}\xlongequal{x_n=t}\lim_{t\to\frac\pi2}\frac{\pi\sin t-2t}{2t\left(t-\frac\pi2\right)}\xlongequal{\text{洛必达}}\lim_{t\to\frac\pi2}\frac{\pi\cos t-2}{4t-\pi}=-\frac2\pi,$$
故原式 $=e^{-\frac2\pi}$。` }
    ]
  };
})();
