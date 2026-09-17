window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q880_s23"] = {
    id: "q880_s23",
    ch: "880题 · 高数 · 第三章 一元函数积分学及其应用",
    title: "综合题·解答题（四）",
    probTitle: "第三章 综合题 · 解答题 (19)–(24)（含原书解析）",
    book: "李林《精讲精练 880 题（数学二）》2026",
    problems: [
      { n: "(19)", q: R`设 $f(x)$ 是连续的偶函数，函数 $g(x)$ 连续，且满足 $g(x)\cdot g(-x)=1$。
(Ⅰ) 证明：$\int_{-a}^a\frac{f(x)}{1+g(x)}dx=\int_0^af(x)dx$；
(Ⅱ) 计算 $\int_{-\frac\pi4}^{\frac\pi4}\frac{dx}{(1+e^x)\cos^2x}$。`, a: R`(Ⅱ) $1$`, sol: R`【证】(Ⅰ) $\int_{-a}^0\frac{f(x)}{1+g(x)}dx\xlongequal{x=-t}\int_0^a\frac{f(-x)}{1+g(-x)}dx$。由 $g(x)g(-x)=1,f(-x)=f(x)$，故
$$\int_{-a}^a\frac{f(x)}{1+g(x)}dx=\int_0^a\left[\frac{f(-x)}{1+g(-x)}+\frac{f(x)}{1+g(x)}\right]dx=\int_0^a\frac{f(x)[2+g(x)+g(-x)]}{2+g(x)+g(-x)}dx=\int_0^af(x)dx.$$
【解】(Ⅱ) 取 $g(x)=e^x$，$f(x)=\frac1{\cos^2x}$，满足条件，故 $\int_{-\pi/4}^{\pi/4}\frac{dx}{(1+e^x)\cos^2x}=\int_0^{\pi/4}\frac{dx}{\cos^2x}=\tan x|_0^{\pi/4}=1$。` },
      { n: "(20)", q: R`设 $\int_0^{+\infty}f(x)dx$ 收敛，且 $f(x)=\frac1{1+x^2}-\frac{e^{-x}}{1+e^x}\int_0^{+\infty}f(x)dx$，求 $\int_0^{+\infty}f(x)dx$。`, a: R`$\frac\pi{2(2-\ln2)}$`, sol: R`【解】记 $A=\int_0^{+\infty}f(x)dx$，两边积分得 $A=\int_0^{+\infty}\frac{dx}{1+x^2}-A\int_0^{+\infty}\frac{e^{-x}}{1+e^x}dx$。其中 $\int_0^{+\infty}\frac{dx}{1+x^2}=\frac\pi2$，$\int_0^{+\infty}\frac{e^{-x}}{1+e^x}dx=\int_0^{+\infty}\left(\frac1{e^x}-\frac1{e^x+1}\right)dx=1-\ln2$，故 $A=\frac\pi2-(1-\ln2)A$，解得 $A=\frac\pi{2(2-\ln2)}$。` },
      { n: "(21)", q: R`设 $a_n=\int_0^{\frac\pi4}\tan^nx\,dx$，证明：$\frac1{2(n+1)}<a_n<\frac1{2(n-1)}\ (n\geqslant2)$。`, a: R`见证明`, sol: R`【证】令 $\tan x=t$，$a_n=\int_0^1\frac{t^n}{1+t^2}dt$。由 $\frac{t^n}{1+t^2}<\frac{t^n}{2t}=\frac{t^{n-1}}2$ 得 $a_n<\int_0^1\frac{t^{n-1}}2dt=\frac1{2n}<\frac1{2(n-1)}$；由 $\frac{t^n}{1+t^2}>\frac{t^n}2$ 得 $a_n>\int_0^1\frac{t^n}2dt=\frac1{2(n+1)}$。故 $\frac1{2(n+1)}<a_n<\frac1{2(n-1)}$。` },
      { n: "(22)", q: R`设 $a_n=\int_0^\pi x\sin^nx\,dx\ (n=1,2,\cdots)$。
(Ⅰ) 证明：$a_n=\frac{n-1}na_{n-2}\ (n=3,4,\cdots)$；
(Ⅱ) 求 $\lim\limits_{n\to\infty}\frac{a_n}{a_{n-1}}$。`, a: R`(Ⅱ) $1$`, sol: R`【解】(Ⅰ) $a_n=-\int_0^\pi x\sin^{n-1}x\,d(\cos x)=\int_0^\pi\sin^{n-1}x\,d(\sin x)+(n-1)\int_0^\pi x\sin^{n-2}x(1-\sin^2x)dx=(n-1)a_{n-2}-(n-1)a_n$，移项得 $a_n=\frac{n-1}na_{n-2}$。
(Ⅱ) 由 $a_{n+1}-a_n=\int_0^\pi x\sin^nx(\sin x-1)dx<0$ 知 $\{a_n\}$ 单调递减，故 $a_n<a_{n-1}<a_{n-2}$，又 $a_n>0$，故 $\frac{n-1}n=\frac{a_n}{a_{n-2}}<\frac{a_n}{a_{n-1}}<1$，由夹逼准则 $\lim\limits_{n\to\infty}\frac{a_n}{a_{n-1}}=1$。` },
      { n: "(23)", q: R`求积分 $I_n=\int_0^1x\ln^nx\,dx\ (n\geqslant0\text{ 且为整数})$ 的递推关系，并计算 $I_n$。`, a: R`$I_n=\frac{(-1)^nn!}{2^{n+1}}$`, sol: R`【解】$I_n=\frac12\int_0^1\ln^nx\,d(x^2)=\frac12x^2\ln^nx|_0^1-\frac n2\int_0^1x\ln^{n-1}x\,dx=-\frac n2I_{n-1}$（用 $\lim\limits_{x\to0^+}x^2\ln^nx=0$）。递推得 $I_n=\left(-\frac n2\right)\left(-\frac{n-1}2\right)\cdots\left(-\frac12\right)I_0$，而 $I_0=\int_0^1x\,dx=\frac12$，故 $I_n=\frac{(-1)^nn!}{2^{n+1}}$。` },
      { n: "(24)", q: R`(Ⅰ) 求积分 $I_n=\int\frac1{(x^2+a^2)^n}dx\ (n\geqslant1,a>0)$ 的递推关系；
(Ⅱ) 计算 $I=\int\frac{3x+4}{(x^2+2x+2)^2}dx$。`, a: R`(Ⅰ) $I_{n+1}=\frac1{2na^2}\left[(2n-1)I_n+\frac x{(x^2+a^2)^n}\right]$，$I_1=\frac1a\arctan\frac xa+C$；(Ⅱ) $I=\frac{x-2}{2(x^2+2x+2)}+\frac12\arctan(x+1)+C$`, sol: R`【解】(Ⅰ) $I_n=\frac x{(x^2+a^2)^n}+2nI_n-2na^2I_{n+1}$，故 $I_{n+1}=\frac1{2na^2}\left[(2n-1)I_n+\frac x{(x^2+a^2)^n}\right]$，$I_1=\frac1a\arctan\frac xa+C$。
(Ⅱ) $I=\frac32\int\frac{2x+2}{(x^2+2x+2)^2}dx+\int\frac{dx}{(x^2+2x+2)^2}$，令 $u=x+1$ 用 (Ⅰ) 结果计算得 $I=-\frac3{2(x^2+2x+2)}+\frac{x+1}{2(x^2+2x+2)}+\frac12\arctan(x+1)+C=\frac{x-2}{2(x^2+2x+2)}+\frac12\arctan(x+1)+C$。` }
    ]
  };
})();
