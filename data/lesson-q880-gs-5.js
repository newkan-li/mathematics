window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q880_s4"] = {
    id: "q880_s4",
    ch: "880题 · 高数 · 第一章 函数、极限、连续",
    title: "拓展题",
    probTitle: "第一章 拓展题（含原书解析）",
    book: "李林《精讲精练 880 题（数学二）》2026",
    problems: [
      { n: "(1)", q: R`设 $f(x)$ 在 $[a,b]$ 上可导，且 $|f'(x)|<1$，当 $x\in[a,b]$ 时，有 $a<f(x)<b$，$F(x)=\frac12[x+f(x)]$，证明：
(Ⅰ) 存在 $x^*\in(a,b)$，使得 $F(x^*)=x^*$；
(Ⅱ) 对 $x_0\in[a,b]$，数列 $\{x_n\}$ 满足 $x_{n+1}=F(x_n)\ (n=1,2,\cdots)$，有 $\lim\limits_{n\to\infty}x_n=x^*$。`, a: R`见证明`, sol: R`【证】(Ⅰ) 令 $G(x)=F(x)-x=\frac12[f(x)-x]$，由 $a<f(x)<b$ 知 $G(a)=\frac12[f(a)-a]>0$，$G(b)=\frac12[f(b)-b]<0$，由零点定理存在 $x^*\in(a,b)$ 使 $G(x^*)=0$，即 $F(x^*)=x^*$。
(Ⅱ) 由已知 $x_0\in[a,b]$，$x_n=F(x_{n-1})\in[a,b]$，故 $\{x_n\}$ 有界。又 $F'(x)=\frac12[1+f'(x)]>0$（因 $|f'(x)|<1$），由拉格朗日中值定理
$$x_n-x_{n-1}=F(x_{n-1})-F(x_{n-2})=F'(\xi)(x_{n-1}-x_{n-2}),\quad\xi\text{ 介于 }x_{n-1}\text{ 与 }x_{n-2}\text{ 之间},$$
可知当 $x_1>x_0$ 时 $\{x_n\}$ 单调增加，当 $x_1<x_0$ 时 $\{x_n\}$ 单调减少，故 $\lim\limits_{n\to\infty}x_n$ 存在。对 $x_{n+1}=F(x_n)$ 取极限，由 (Ⅰ) 知 $\lim\limits_{n\to\infty}x_n=x^*$。` },
      { n: "(2)", q: R`(Ⅰ) 设 $f(x)$ 是 $[0,+\infty)$ 上单调减少且非负的连续函数。证明：$f(k+1)\leqslant\int_k^{k+1}f(x)\,dx\leqslant f(k)\ (k=1,2,\cdots)$；
(Ⅱ) 证明：$\ln(1+n)\leqslant1+\frac12+\cdots+\frac1n\leqslant1+\ln n$，并求极限 $\lim\limits_{n\to\infty}\frac{1+\frac12+\cdots+\frac1n}{\ln n}$。`, a: R`(Ⅱ) 极限 $=1$`, sol: R`【证】(Ⅰ) 由 $f(x)$ 单调减少且非负连续，当 $x\in[k,k+1]$ 时 $f(k+1)\leqslant f(x)\leqslant f(k)$，故 $\int_k^{k+1}f(k+1)dx\leqslant\int_k^{k+1}f(x)dx\leqslant\int_k^{k+1}f(k)dx$，即 $f(k+1)\leqslant\int_k^{k+1}f(x)dx\leqslant f(k)$。
(Ⅱ) 取 $f(x)=\frac1x\ (x>0)$，由 (Ⅰ) 得 $\frac1{n+1}\leqslant\int_n^{n+1}\frac1x dx\leqslant\frac1n$，于是
$$\ln(1+n)\leqslant1+\frac12+\cdots+\frac1n\leqslant1+\ln n.$$
由上式得 $\frac{\ln(1+n)}{\ln n}\leqslant\frac{1+\frac12+\cdots+\frac1n}{\ln n}\leqslant\frac{1+\ln n}{\ln n}$，而两端极限均为 1，故由夹逼准则 $\lim\limits_{n\to\infty}\frac{1+\frac12+\cdots+\frac1n}{\ln n}=1$。` },
      { n: "(3)", q: R`设 $f_n(x)=x^n-\cos x\ (n=1,2,\cdots)$。
(Ⅰ) 证明方程 $f_n(x)=0$ 在 $x\in(0,1)$ 内有唯一实根 $x_n$；
(Ⅱ) 求 $\lim\limits_{n\to\infty}(1-x_n)^{\frac1n\ln\cos x_n}$。`, a: R`(Ⅱ) $1$`, sol: R`【证】(Ⅰ) 由 $f_n(x)=x^n-\cos x$，$f_n(0)=-1<0$，$f_n(1)=1-\cos1>0$，由零点定理 $f_n(x)=0$ 在 $(0,1)$ 内至少有一个实根 $x_n$。又 $f_n'(x)=nx^{n-1}+\sin x>0\ (x\in(0,1))$，故 $f_n(x)$ 严格单调递增，实根唯一。
【解】(Ⅱ) 先证 $\lim\limits_{n\to\infty}x_n$ 存在。由 (Ⅰ) 知 $0<x_n<1$，即 $\{x_n\}$ 有界。由 $x_n^n=\cos x_n$、$x_{n+1}^{n+1}=\cos x_{n+1}$ 得 $\cos x_{n+1}=x_{n+1}^{n+1}$，从而
$$f_n(x_{n+1})=x_{n+1}^n-\cos x_{n+1}=x_{n+1}^n-x_{n+1}^{n+1}=x_{n+1}^n(1-x_{n+1})>0=f_n(x_n),$$
故 $x_{n+1}>x_n$（$f_n$ 单调递增），即 $\{x_n\}$ 单调递增，由单调有界准则 $\lim\limits_{n\to\infty}x_n$ 存在。
由 $x_n^n=\cos x_n$ 得 $\ln x_n=\frac1n\ln\cos x_n$，故 $\lim\limits_{n\to\infty}\ln x_n=\lim\limits_{n\to\infty}\frac1n\ln\cos x_n=0$，所以 $\lim\limits_{n\to\infty}x_n=1$。于是
$$\lim_{n\to\infty}(1-x_n)^{\frac1n\ln\cos x_n}=\lim_{n\to\infty}(1-x_n)^{\ln x_n}=e^{\lim\limits_{n\to\infty}\ln x_n\ln(1-x_n)}=e^0=1,$$
其中 $\lim\limits_{n\to\infty}\ln x_n\ln(1-x_n)\xlongequal{x_n=t}\lim\limits_{t\to1^-}\ln t\ln(1-t)\xlongequal{1-t=u}\lim\limits_{u\to0^+}\ln(1-u)\ln u=-\lim\limits_{u\to0^+}u\ln u=0$。` },
      { n: "(4)", q: R`(Ⅰ) 证明：$\frac1n-\ln\left(1+\frac1n\right)<\frac1{2n^2}$（$n$ 为正整数）；
(Ⅱ) 求极限 $\lim\limits_{n\to\infty}\left(1+\frac1{n^2}\right)\left(1+\frac2{n^2}\right)\cdots\left(1+\frac n{n^2}\right)$。`, a: R`(Ⅱ) $e^{\frac12}$`, sol: R`【证】(Ⅰ) 令 $f(x)=x-\ln(1+x)-\frac12x^2\ (x>0)$，则 $f'(x)=1-\frac1{1+x}-x=\frac{-x^2}{1+x}<0\ (x>0)$，故 $f(x)$ 单调递减，于是 $n$ 为正整数时 $f\left(\frac1n\right)=\frac1n-\ln\left(1+\frac1n\right)-\frac1{2n^2}<f(0)=0$，即 $\frac1n-\ln\left(1+\frac1n\right)<\frac1{2n^2}$。
【解】(Ⅱ) 记 $a_n=\prod\limits_{i=1}^n\left(1+\frac i{n^2}\right)$，则 $\ln a_n=\sum\limits_{i=1}^n\ln\left(1+\frac i{n^2}\right)$。由 (Ⅰ) 知
$$\sum_{i=1}^n\ln\left(1+\frac i{n^2}\right)=\sum_{i=1}^n\left[\ln\left(1+\frac i{n^2}\right)-\frac i{n^2}\right]+\sum_{i=1}^n\frac i{n^2}.$$
而 $\lim\limits_{n\to\infty}\sum\limits_{i=1}^n\frac i{n^2}=\lim\limits_{n\to\infty}\frac1n\sum\limits_{i=1}^n\frac in=\int_0^1x\,dx=\frac12$；又 $-\frac12\sum\limits_{i=1}^n\left(\frac i{n^2}\right)^2<\sum\limits_{i=1}^n\left[\ln\left(1+\frac i{n^2}\right)-\frac i{n^2}\right]<0$，且
$$\lim_{n\to\infty}\left[-\frac12\sum_{i=1}^n\left(\frac i{n^2}\right)^2\right]=-\frac12\lim_{n\to\infty}\frac1n\sum_{i=1}^n\frac{i^2}{n^2}\cdot\frac1n=-\frac12\cdot\frac13\cdot0=0,$$
由夹逼准则 $\lim\limits_{n\to\infty}\sum\limits_{i=1}^n\left[\ln\left(1+\frac i{n^2}\right)-\frac i{n^2}\right]=0$，从而 $\lim\limits_{n\to\infty}\ln a_n=\frac12$，故 $\lim\limits_{n\to\infty}a_n=e^{\frac12}$。` },
      { n: "(5)", q: R`设 $f(x)$ 在 $[0,1]$ 上有二阶导数，且 $f'(x)>0$，$f''(x)>0$，$f(0)=0$。取 $x_1\in(0,1)$，数列 $\{x_n\}$ 满足 $(x_{n+1}-x_n)f'(x_n)+f(x_n)=0\ (n=1,2,\cdots)$。证明 $\lim\limits_{n\to\infty}x_n$ 存在，并求其值。`, a: R`$0$`, sol: R`【解】由 $(x_{n+1}-x_n)f'(x_n)+f(x_n)=0$ 得 $x_{n+1}=x_n-\frac{f(x_n)}{f'(x_n)}$。
先证 $\{x_n\}$ 有下界。由 $x_1>0$，假设 $x_n>0$，只需证 $x_{n+1}=x_n-\frac{f(x_n)}{f'(x_n)}>0$，即 $(x_n-0)f'(x_n)-[f(x_n)-f(0)]>0$。由拉格朗日中值定理 $f(x_n)-f(0)=f'(\xi_n)x_n\ (0<\xi_n<x_n)$，即证 $x_n[f'(x_n)-f'(\xi_n)]>0$。由 $f''(x)>0$ 知 $f'$ 单调递增，故上式成立，由归纳法 $\{x_n\}$ 有下界 0。
再证 $\{x_n\}$ 单调递减：$x_{n+1}-x_n=-\frac{f(x_n)}{f'(x_n)}$，由 $f'(x)>0$ 知 $f(x_n)>f(0)=0$，故 $x_{n+1}-x_n<0$，即 $\{x_n\}$ 单调递减，由单调有界准则 $\lim\limits_{n\to\infty}x_n$ 存在。
记 $\lim\limits_{n\to\infty}x_n=A$，对 $(x_{n+1}-x_n)f'(x_n)+f(x_n)=0$ 取极限得 $f(A)=0$。由 $f$ 严格单调且 $f(0)=0$ 知 $A=0$，即 $\lim\limits_{n\to\infty}x_n=0$。` }
    ]
  };
})();
