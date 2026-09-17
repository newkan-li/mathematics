window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q880_s0"] = {
    id: "q880_s0",
    ch: "880题 · 高数 · 第一章 函数、极限、连续",
    title: "基础题",
    probTitle: "第一章 基础题（含原书解析）",
    book: "李林《精讲精练 880 题（数学二）》2026",
    problems: [
      { n: "(1)", q: R`函数 $f(x)=|x\sin x|e^{\cos x},x\in(-\infty,+\infty)$，是（ ）。
(A) 单调函数
(B) 周期函数
(C) 偶函数
(D) 有界函数`, a: R`(C)`, sol: R`【解】对函数 $f(x)$ 取绝对值得 $|f(x)|=|x||\sin x|e^{\cos x}$，其中 $|\sin x|$ 不恒等于 $0$，$e^{\cos x}>0$，故根据 $|x|$ 可断定 $f(x)$ 不是有界函数，也不是周期函数。再由 $f(0)=0$，$f\left(\frac\pi2\right)=\frac\pi2$，$f(\pi)=0$，可知 $f(x)$ 不是单调函数。对 $\forall x\in(-\infty,+\infty)$，有
$$f(-x)=|(-x)\sin(-x)|e^{\cos(-x)}=|x\sin x|e^{\cos x}=f(x),$$
故 $f(x)$ 是偶函数，选 C。` },
      { n: "(2)", q: R`设函数 $f(x)=\cos(\sin x),g(x)=\sin(\cos x)$，则当 $x\in\left(0,\frac\pi2\right)$ 时，（ ）。
(A) $f(x)$ 单调增加，$g(x)$ 单调减少
(B) $f(x)$ 单调减少，$g(x)$ 单调增加
(C) $f(x)$ 与 $g(x)$ 都单调增加
(D) $f(x)$ 与 $g(x)$ 都单调减少`, a: R`(D)`, sol: R`【解】在区间 $\left(0,\frac\pi2\right)$ 内，$\sin x$ 单调增加，$\cos x$ 单调减少。任取 $x_1,x_2\in\left(0,\frac\pi2\right)$ 且 $x_1<x_2$，则 $\sin x_1<\sin x_2$，故 $\cos(\sin x_1)>\cos(\sin x_2)$，所以 $f(x)$ 单调减少。又 $\cos x_1>\cos x_2$，则 $\sin(\cos x_1)>\sin(\cos x_2)$，故 $g(x)$ 单调减少，选 D。
【注】① 复合函数的单调性：设 $f(x)$ 单调增加，$g(x)$ 单调减少，则 $f[f(x)],g[g(x)]$ 都单调增加；$f[g(x)],g[f(x)]$ 都单调减少（假设复合有意义）。
② 复合函数的奇偶性：设 $f(x)$ 是偶函数，$g(x)$ 是奇函数，则 $f[f(x)],f[g(x)],g[f(x)]$ 都是偶函数；$g[g(x)]$ 是奇函数。` },
      { n: "(3)", q: R`设函数 $f(x)=\sqrt{1+x+x^2}-\sqrt{1-x+x^2}$，则（ ）。
(A) $f(x)$ 为偶函数
(B) $f(x)$ 为奇函数
(C) $f(x)$ 为无界函数
(D) $\lim\limits_{x\to+\infty}f(x)=1$`, a: R`(B)`, sol: R`【解】由 $f(-x)=\sqrt{1-x+x^2}-\sqrt{1+x+x^2}=-f(x)$，知 $f(x)$ 是奇函数，且
$$\lim_{x\to+\infty}f(x)=\lim_{x\to+\infty}\frac{2x}{\sqrt{1+x+x^2}+\sqrt{1-x+x^2}}=\lim_{x\to+\infty}\frac{2}{\sqrt{\frac1{x^2}+\frac1x+1}+\sqrt{\frac1{x^2}-\frac1x+1}}=1,$$
故选项 B 正确。同理 $\lim\limits_{x\to-\infty}f(x)=-1$，选项 D 错误；由极限的有界性知选项 C 错误。` },
      { n: "(4)", q: R`设当 $x\to+\infty$ 时，$f(x),g(x)$ 都是无穷大，则当 $x\to+\infty$ 时，下列结论正确的是（ ）。
(A) $f(x)-g(x)$ 是无穷小
(B) $f(x)+g(x)$ 是无穷大
(C) $\frac{g(x)}{f(x)}\to1$
(D) $\frac{f(x)+g(x)}{f(x)g(x)}$ 是无穷小`, a: R`(D)`, sol: R`【解】由题可得 $\lim\limits_{x\to+\infty}\frac{f(x)+g(x)}{f(x)g(x)}=\lim\limits_{x\to+\infty}\frac1{g(x)}+\lim\limits_{x\to+\infty}\frac1{f(x)}=0$，故选项 D 正确。` },
      { n: "(5)", q: R`当 $x\to0$ 时，$\frac1{x^2}\sin\frac1x$ 是（ ）。
(A) 无穷大
(B) 无穷小
(C) 有界但非无穷小
(D) 无界但非无穷大`, a: R`(D)`, sol: R`【解】当 $x\to0$ 时，$\frac1{x^2}\to+\infty$，$\sin\frac1x$ 在 $-1\sim1$ 之间振荡且重复取零值，故可排除 A、B。
取 $x_n=\frac1{2n\pi+\frac\pi2}\ (n=1,2,\cdots)$，则 $x_n\to0$ 时 $f(x_n)=\left(2n+\frac12\right)^2\pi^2\to\infty$，故 $\frac1{x^2}\sin\frac1x$ 不是无穷小，也不是有界量。再令 $y_n=\frac1{n\pi}\ (n=1,2,\cdots)$，则 $y_n\to0$ 时 $f(y_n)=0$，故它不是无穷大，排除 C。选 D。` },
      { n: "(6)", q: R`已知 $\lim\limits_{x\to\infty}\left(\frac{x^2}{x+1}-ax-b\right)=0$，则（ ）。
(A) $a=1,b=1$
(B) $a=-1,b=1$
(C) $a=1,b=-1$
(D) $a=-1,b=-1$`, a: R`(C)`, sol: R`【解】由已知 $\lim\limits_{x\to\infty}\frac{(1-a)x^2-(a+b)x-b}{x+1}=0$，得 $1-a=0,a+b=0$，即 $a=1,b=-1$，选 C。
【注】由 $\lim\limits_{x\to\infty}\left[\frac{x^2}{x+1}-(ax+b)\right]=0$ 及渐近线定义，知 $y=ax+b$ 是 $y=\frac{x^2}{x+1}$ 的斜渐近线。` },
      { n: "(7)", q: R`设当 $x\to0$ 时，$(x-\sin x)\tan x$ 是比 $\ln(1+x^n)$ 高阶的无穷小，而 $\ln(1+x^n)$ 是比 $x^2$ 高阶的无穷小，则 $n=$（ ）。
(A) 4
(B) 3
(C) 2
(D) 1`, a: R`(B)`, sol: R`【解】当 $x\to0$ 时，$\ln(1+x^n)\sim x^n$，由 $\sin x=x-\frac{x^3}{3!}+o(x^3)$ 知 $(x-\sin x)\tan x\sim\frac{x^4}{6}$。由已知 $4>n$ 且 $n>2$，故 $n=3$，选 B。` },
      { n: "(8)", q: R`当 $x\to0$ 时，$e^x-\frac{1+ax^2}{1+bx}$ 与 $x^3$ 是同阶无穷小，则（ ）。
(A) $a=\frac12,b=1$
(B) $a=-\frac12,b=1$
(C) $a=\frac12,b=-1$
(D) $a=-\frac12,b=-1$`, a: R`(D)`, sol: R`【解】依题设 $\lim\limits_{x\to0}\frac{e^x(1+bx)-(1+ax^2)}{x^3}\neq0$，将 $e^x=1+x+\frac12x^2+\frac16x^3+o(x^3)$ 代入得
$$\lim_{x\to0}\frac{(1+b)x+\left(\frac12+b-a\right)x^2+\left(\frac16+\frac12b\right)x^3+\frac16bx^4}{x^3}\neq0,$$
故 $1+b=0,\ \frac12+b-a=0,\ \frac16+\frac12b\neq0$，解得 $a=-\frac12,b=-1$，选 D。` },
      { n: "(9)", q: R`设 $f(x)=\ln^2x,g(x)=x,h(x)=e^{\frac x2}\ (x>1)$，则当 $x$ 充分大时，（ ）。
(A) $f(x)<g(x)<h(x)$
(B) $g(x)<h(x)<f(x)$
(C) $h(x)<g(x)<f(x)$
(D) $g(x)<f(x)<h(x)$`, a: R`(A)`, sol: R`【解】由 $\lim\limits_{x\to+\infty}\frac{f(x)}{g(x)}=\lim\limits_{x\to+\infty}\frac{\ln^2x}{x}=0<1$，故 $x$ 充分大时 $f(x)<g(x)$；又 $\lim\limits_{x\to+\infty}\frac{h(x)}{g(x)}=\lim\limits_{x\to+\infty}\frac{e^{x/2}}{x}=+\infty>1$，故 $h(x)>g(x)$。选 A。
【注】本质是无穷大量阶的比较，从低阶到高阶有 $\ln^\lambda n,\ n^\varepsilon,\ a^n,\ n!,\ n^n$（$n\to\infty$，$\lambda\geqslant1,a>1$）。` },
      { n: "(10)", q: R`设 $\lim\limits_{n\to\infty}a_n$ 与 $\lim\limits_{n\to\infty}b_n$ 均不存在，则下列选项正确的是（ ）。
(A) 若 $\lim\limits_{n\to\infty}(a_n+b_n)$ 不存在，则 $\lim\limits_{n\to\infty}(a_n-b_n)$ 必不存在
(B) 若 $\lim\limits_{n\to\infty}(a_n+b_n)$ 不存在，则 $\lim\limits_{n\to\infty}(a_n-b_n)$ 必存在
(C) 若 $\lim\limits_{n\to\infty}(a_n+b_n)$ 存在，则 $\lim\limits_{n\to\infty}(a_n-b_n)$ 必不存在
(D) 若 $\lim\limits_{n\to\infty}(a_n+b_n)$ 存在，则 $\lim\limits_{n\to\infty}(a_n-b_n)$ 必存在`, a: R`(C)`, sol: R`【解】对选项 C 用反证法：若 $\lim\limits_{n\to\infty}(a_n-b_n)$ 存在，则 $\lim\limits_{n\to\infty}[(a_n-b_n)+(a_n+b_n)]=\lim\limits_{n\to\infty}2a_n$ 存在，与已知 $\lim\limits_{n\to\infty}a_n$ 不存在矛盾，故 C 正确。` },
      { n: "(11)", q: R`设正值数列 $\{x_n\}$ 和 $\{y_n\}$ 满足 $\lim\limits_{n\to\infty}x_n^{y_n}=\lim\limits_{n\to\infty}y_n^{x_n}=e$，则 $\lim\limits_{n\to\infty}(x_n+y_n-2)=$（ ）。
(A) $e$
(B) $2e$
(C) 2
(D) 1`, a: R`(C)`, sol: R`【解】由 $\lim\limits_{n\to\infty}x_n^{y_n}=e$，据极限与无穷小的关系得 $x_n=\sqrt[n]{e+a_n}$，其中 $a_n\to0\ (n\to\infty)$，则
$$x_n-1=\sqrt[n]{e+a_n}-1\sim\frac1n\ln(e+a_n)\sim\frac1n\ (n\to\infty).$$
同理 $y_n-1\sim\frac1n$，故
$$\lim_{n\to\infty}n(x_n+y_n-2)=\lim_{n\to\infty}[n(x_n-1)+n(y_n-1)]=1+1=2.$$
（注：此处由 $\lim x_n^{y_n}=e$ 得 $\lim n(x_n-1)=1$。）选 C。` },
      { n: "(12)", q: R`函数 $f(x)=\frac{2+e^{\frac1x}}{1+e^{\frac2x}}+\frac{\sin x}{|x|}$ 在 $x=0$ 处为（ ）。
(A) 可去间断点
(B) 跳跃间断点
(C) 无穷间断点
(D) 振荡间断点`, a: R`(A)`, sol: R`【解】$f(x)$ 在 $x=0$ 处间断，考虑左右极限：
$$\lim_{x\to0^-}\left(\frac{2+e^{\frac1x}}{1+e^{\frac2x}}-\frac{\sin x}{x}\right)=2-1=1,$$
$$\lim_{x\to0^+}\left(\frac{2e^{-\frac2x}+e^{-\frac1x}}{e^{-\frac2x}+1}+\frac{\sin x}{x}\right)=0+1=1,$$
故 $x=0$ 是 $f(x)$ 的可去间断点，选 A。` },
      { n: "填(1)", q: R`设 $f(x)=\begin{cases}1,&|x|\leqslant1,\\0,&|x|>1,\end{cases}$ 则 $f\{f[f(x)]\}=\underline{\qquad}$。`, a: R`$1$`, sol: R`【解】由已知 $f[f(x)]=\begin{cases}1,&|f(x)|\leqslant1,\\0,&|f(x)|>1.\end{cases}$ 因 $|f(x)|\leqslant1$，故 $f[f(x)]=1$，从而 $f\{f[f(x)]\}=1$。` },
      { n: "填(2)", q: R`当 $x\to0$ 时，$(1+ax^2)^{\frac13}-1$ 与 $\cos x-1$ 是等价无穷小，则 $a=\underline{\qquad}$。`, a: R`$-\frac32$`, sol: R`【解】当 $x\to0$ 时，$(1+ax^2)^{\frac13}-1\sim\frac13ax^2$，$\cos x-1\sim-\frac12x^2$，由等价无穷小得 $\frac13a=-\frac12$，即 $a=-\frac32$。` },
      { n: "填(3)", q: R`设函数 $f(x)=\begin{cases}\dfrac{\sin2x+e^{2ax}-1}{x},&x\neq0,\\a,&x=0\end{cases}$ 在 $x=0$ 处连续，则 $a=\underline{\qquad}$。`, a: R`$-2$`, sol: R`【解】$\lim\limits_{x\to0}\frac{\sin2x+e^{2ax}-1}{x}=\lim\limits_{x\to0}\frac{\sin2x}{x}+\lim\limits_{x\to0}\frac{e^{2ax}-1}{x}=2+2a$。由连续性 $\lim\limits_{x\to0}f(x)=f(0)$，得 $2+2a=a$，故 $a=-2$。` },
      { n: "填(4)", q: R`设 $a>0$，若 $\lim\limits_{x\to+\infty}x^p\left(a^{\frac1x}-a^{\frac1{x+1}}\right)$ 存在，则 $p$ 的取值范围为 $\underline{\qquad}$。`, a: R`$p\leqslant2$`, sol: R`【解】$x^p\left(a^{\frac1x}-a^{\frac1{x+1}}\right)=x^p a^{\frac1{x+1}}\left(a^{\frac1{x(x+1)}}-1\right)\sim x^p a^{\frac1{x+1}}\cdot\frac{\ln a}{x(x+1)}$，要使其极限存在，需 $p\leqslant2$。当 $p<2$ 时极限为 $0$；当 $p=2$ 时极限为 $\ln a$。故 $p\leqslant2$。` },
      { n: "填(5)", q: R`$\lim\limits_{x\to+\infty}\dfrac{x^3+x^2+1}{e^x+x^3}(\sin x+\cos x)=\underline{\qquad}$。`, a: R`$0$`, sol: R`【解】$\lim\limits_{x\to+\infty}\frac{x^3+x^2+1}{e^x+x^3}=\lim\limits_{x\to+\infty}\frac{3x^2+2x}{e^x+3x^2}=\lim\limits_{x\to+\infty}\frac{6x+2}{e^x+6x}=\lim\limits_{x\to+\infty}\frac{6}{e^x+6}=0$，而 $|\sin x+\cos x|\leqslant2$ 有界，故原式 $=0$。
【注】当 $x\to+\infty$ 时 $e^x$ 是比 $x^3$ 高阶的无穷大，故 $\lim\limits_{x\to+\infty}\frac{x^3+x^2+1}{e^x+x^3}=0$。` },
      { n: "填(6)", q: R`$\lim\limits_{x\to0}\dfrac{e^{x^2}-e^{2-2\cos x}}{e^{x^4}-1}=\underline{\qquad}$。`, a: R`$\frac1{12}$`, sol: R`【解】当 $x\to0$ 时 $e^{x^4}-1\sim x^4$，故
$$\text{原式}=\lim_{x\to0}\frac{e^{x^2}-e^{2-2\cos x}}{x^4}=\lim_{x\to0}e^{2-2\cos x}\cdot\frac{e^{x^2-2+2\cos x}-1}{x^4}=\lim_{x\to0}\frac{x^2-2+2\cos x}{x^4}$$
$$=\lim_{x\to0}\frac{2x-2\sin x}{4x^3}=\frac12\lim_{x\to0}\frac{1-\cos x}{3x^2}=\frac16\lim_{x\to0}\frac{\frac12x^2}{x^2}=\frac1{12}.$$
【注】分子提取公因式 $e^{2-2\cos x}$ 是常用技巧，一般三种情形可考虑提取公因式：① $\infty-\infty$；② 指数函数；③ 幂函数。` },
      { n: "填(7)", q: R`设 $f(x)=a+bx+cx^2+dx^3-\tan x$，当 $x\to0$ 时 $f(x)$ 是比 $x^3$ 高阶的无穷小，则 $a+b+c+d=\underline{\qquad}$。`, a: R`$\frac43$`, sol: R`【解】当 $x\to0$ 时 $\tan x=x+\frac13x^3+o(x^3)$，故
$$\lim_{x\to0}\frac{f(x)}{x^3}=\lim_{x\to0}\frac{a+(b-1)x+cx^2+\left(d-\frac13\right)x^3+o(x^3)}{x^3}=0,$$
得 $a=0,b=1,c=0,d=\frac13$，故 $a+b+c+d=\frac43$。` },
      { n: "解(1)", q: R`设 $f(x)$ 是定义在 $(-a,a)$ 内的函数。证明：$f(x)$ 可以表示为一个偶函数与一个奇函数之和。`, a: R`见证明`, sol: R`【证】令 $f_1(x)=f(x)+f(-x)$，$f_2(x)=f(x)-f(-x)$，则
$$f_1(-x)=f(-x)+f(x)=f_1(x),\quad f_2(-x)=f(-x)-f(x)=-f_2(x),$$
故 $f_1(x)$ 是偶函数，$f_2(x)$ 是奇函数，且
$$f(x)=\frac{f(x)+f(-x)}{2}+\frac{f(x)-f(-x)}{2},$$
即 $f(x)$ 可以表示为一个偶函数与一个奇函数之和。` },
      { n: "解(2)", q: R`设函数 $f(x)$ 满足 $af(x)+bf\left(\frac1x\right)=\frac cx$，其中 $a,b,c$ 均为常数，且 $|a|\neq|b|$，求 $f(x)$ 的表达式，并证明 $f(x)$ 是奇函数。`, a: R`$f(x)=\frac{c}{a^2-b^2}\left(\frac ax-bx\right)$，奇函数`, sol: R`【证】已知 $af(x)+bf\left(\frac1x\right)=\frac cx$。① 在①中用 $\frac1x$ 代替 $x$，得 $af\left(\frac1x\right)+bf(x)=cx$。②
由 ①$\times a-$②$\times b$ 得 $(a^2-b^2)f(x)=\frac{ac}{x}-bcx$。由 $|a|\neq|b|$ 知
$$f(x)=\frac{c}{a^2-b^2}\left(\frac ax-bx\right).$$
而 $f(-x)=\frac{c}{a^2-b^2}\left(-\frac ax+bx\right)=-f(x)$，所以 $f(x)$ 是奇函数。` },
      { n: "解(3)", q: R`设函数 $f(x)$ 在区间 $(-a,a)$ 内有定义，其中 $a>0$，且对任意 $x_1,x_2\in(-a,a)$，有 $|f(x_1)-f(x_2)|\leqslant|x_1-x_2|$，证明：$F(x)=f(x)+x$ 在 $(-a,a)$ 内单调增加。`, a: R`见证明`, sol: R`【证】任取 $x_1,x_2\in(-a,a)$ 且 $x_2>x_1$，由已知 $|f(x_2)-f(x_1)|\leqslant x_2-x_1$。而
$$f(x_1)-f(x_2)\leqslant|f(x_2)-f(x_1)|\leqslant x_2-x_1,$$
故 $f(x_1)+x_1\leqslant f(x_2)+x_2$，即 $F(x_1)\leqslant F(x_2)$，所以 $F(x)$ 在 $(-a,a)$ 内单调增加。` },
      { n: "解(4)", q: R`设数列 $\{x_n\}$ 满足 $\lim\limits_{k\to\infty}x_{2k}=\lim\limits_{k\to\infty}x_{2k+1}=a$。证明：$\lim\limits_{n\to\infty}x_n=a$。`, a: R`见证明`, sol: R`【证】由 $\lim\limits_{k\to\infty}x_{2k}=a$，$\forall\varepsilon>0$，$\exists N_1$，当 $2k>N_1$ 时 $|x_{2k}-a|<\varepsilon$；由 $\lim\limits_{k\to\infty}x_{2k+1}=a$，对上述 $\varepsilon$，$\exists N_2$，当 $2k+1>N_2$ 时 $|x_{2k+1}-a|<\varepsilon$。
取 $N=\max\{N_1,N_2\}$，则当 $n>N$ 时 $|x_n-a|<\varepsilon$，故 $\lim\limits_{n\to\infty}x_n=a$。` },
      { n: "解(5)", q: R`求下列极限：
(Ⅰ) $\lim\limits_{x\to\infty}\frac{x^2-x\sin x}{x^2+x\sin\frac1x}$；
(Ⅱ) $\lim\limits_{x\to+\infty}\left(\frac{a^{\frac1x}+b^{\frac1x}+c^{\frac1x}}{3}\right)^x$（$a,b,c$ 为正数）；
(Ⅲ) $\lim\limits_{x\to0}\frac{\ln(\sin^2x+e^x)-x}{\ln(e^{2x}-x^2)-2x}$；
(Ⅳ) $\lim\limits_{x\to0}\frac{(1+x)^{\frac3x}-e^3}{x}$；
(Ⅴ) $\lim\limits_{x\to0}\frac{e^{\tan x}-e^x}{x^3}$；
(Ⅵ) $\lim\limits_{x\to0}\cot x\left(\frac1{\sin x}-\frac1x\right)$；
(Ⅶ) $\lim\limits_{x\to0}(1-x^2)^{\frac1{1-\sqrt{1-x^2}}}$；
(Ⅷ) $\lim\limits_{x\to0^+}x^{\sin x}$。`, a: R`(Ⅰ) $1$；(Ⅱ) $(abc)^{\frac13}$；(Ⅲ) $-1$；(Ⅳ) $-\frac32e^3$；(Ⅴ) $\frac13$；(Ⅵ) $\frac16$；(Ⅶ) $e^{-2}$；(Ⅷ) $1$`, sol: R`【解】(Ⅰ) $\lim\limits_{x\to\infty}\frac{x^2-x\sin x}{x^2+x\sin\frac1x}=\lim\limits_{x\to\infty}\frac{1-\frac1x\sin x}{1+\frac1x\sin\frac1x}=1$。
(Ⅱ) $\lim\limits_{x\to+\infty}\frac{a^{\frac1x}+b^{\frac1x}+c^{\frac1x}-3}{3\cdot\frac1x}=\frac13(\ln a+\ln b+\ln c)=\ln(abc)^{\frac13}$，故原式 $=e^{\ln(abc)^{1/3}}=(abc)^{\frac13}$。
(Ⅲ) $\lim\limits_{x\to0}\frac{\ln(\sin^2x+e^x)-\ln e^x}{\ln(e^{2x}-x^2)-\ln e^{2x}}=\lim\limits_{x\to0}\frac{\ln\left(1+\frac{\sin^2x}{e^x}\right)}{\ln\left(1-\frac{x^2}{e^{2x}}\right)}=\lim\limits_{x\to0}\frac{\frac{\sin^2x}{e^x}}{-\frac{x^2}{e^{2x}}}=\lim\limits_{x\to0}(-e^x)\frac{\sin^2x}{x^2}=-1$。
(Ⅳ) $\lim\limits_{x\to0}\frac{e^{\frac{3\ln(1+x)}{x}}-e^3}{x}=e^3\lim\limits_{x\to0}\frac{e^{\frac{3\ln(1+x)}{x}-3}-1}{x}=e^3\lim\limits_{x\to0}\frac{\frac{3\ln(1+x)}{x}-3}{x}=3e^3\lim\limits_{x\to0}\frac{\ln(1+x)-x}{x^2}=-\frac32e^3$。
(Ⅴ) $\lim\limits_{x\to0}\frac{e^{\tan x}-e^x}{x^3}=\lim\limits_{x\to0}e^x\cdot\frac{e^{\tan x-x}-1}{x^3}=\lim\limits_{x\to0}\frac{\tan x-x}{x^3}=\lim\limits_{x\to0}\frac{\frac13x^3}{x^3}=\frac13$。
(Ⅵ) $\lim\limits_{x\to0}\frac{x-\sin x}{\tan x\cdot\sin x\cdot x}=\lim\limits_{x\to0}\frac{x-\sin x}{x^3}=\lim\limits_{x\to0}\frac{1-\cos x}{3x^2}=\lim\limits_{x\to0}\frac{\frac12x^2}{3x^2}=\frac16$。
(Ⅶ) $\lim\limits_{x\to0}(1-x^2)^{\frac1{1-\sqrt{1-x^2}}}=\lim\limits_{x\to0}\left[(1-x^2)^{-\frac1{x^2}}\right]^{-\frac{x^2}{1-\sqrt{1-x^2}}}$，而 $\lim\limits_{x\to0}\frac{-x^2}{1-\sqrt{1-x^2}}=\lim\limits_{x\to0}\frac{-x^2(1+\sqrt{1-x^2})}{x^2}=-2$，故原式 $=e^{-2}$。
(Ⅷ) $\lim\limits_{x\to0^+}x^{\sin x}=e^{\lim\limits_{x\to0^+}\sin x\ln x}=e^{\lim\limits_{x\to0^+}x\ln x}=e^{\lim\limits_{x\to0^+}\frac{\ln x}{1/x}}=e^{\lim\limits_{x\to0^+}\frac{1/x}{-1/x^2}}=e^0=1$。` },
      { n: "解(6)", q: R`求下列极限：
(Ⅰ) $\lim\limits_{n\to\infty}\left(\frac1{n^2+n+1}+\frac2{n^2+n+2}+\cdots+\frac n{n^2+n+n}\right)$；
(Ⅱ) $\lim\limits_{n\to\infty}\left[\sqrt{1+2+\cdots+n}-\sqrt{1+2+\cdots+(n-1)}\right]$；
(Ⅲ) $\lim\limits_{n\to\infty}\sum\limits_{k=1}^n\frac1{4k^2-1}$；
(Ⅳ) $\lim\limits_{n\to\infty}\sqrt[n]{1+\frac12+\frac13+\cdots+\frac1n}$；
(Ⅴ) $\lim\limits_{n\to\infty}\left(\frac{1+\sqrt[n]3}{2}\right)^n$。`, a: R`(Ⅰ) $\frac12$；(Ⅱ) $\frac{\sqrt2}2$；(Ⅲ) $\frac12$；(Ⅳ) $1$；(Ⅴ) $\sqrt3$`, sol: R`【解】(Ⅰ) 由 $\frac{\frac12n(n+1)}{n^2+n+n}\leqslant\frac1{n^2+n+1}+\frac2{n^2+n+2}+\cdots+\frac n{n^2+n+n}\leqslant\frac{\frac12n(n+1)}{n^2+n+1}$，两端极限均为 $\frac12$，由夹逼准则原式 $=\frac12$。
(Ⅱ) $\lim\limits_{n\to\infty}\left[\sqrt{\frac{n(n+1)}{2}}-\sqrt{\frac{n(n-1)}{2}}\right]=\lim\limits_{n\to\infty}\frac1{\sqrt2}\cdot\frac{2n}{\sqrt{n(n+1)}+\sqrt{n(n-1)}}=\frac{\sqrt2}2$。
(Ⅲ) 由 $\frac1{4n^2-1}=\frac12\left(\frac1{2n-1}-\frac1{2n+1}\right)$ 得 $\sum\limits_{k=1}^n\frac1{4k^2-1}=\frac12\left(1-\frac1{2n+1}\right)$，故原式 $=\frac12$。
(Ⅳ) 由 $1\leqslant\sqrt[n]{1+\frac12+\cdots+\frac1n}\leqslant\sqrt[n]{n}$，而 $\lim\limits_{n\to\infty}\sqrt[n]n=1$，由夹逼准则原式 $=1$。
(Ⅴ) $\lim\limits_{n\to\infty}n\left(\frac{1+\sqrt[n]3}{2}-1\right)=\lim\limits_{n\to\infty}n\cdot\frac{\sqrt[n]3-1}{2}=\frac12\ln3$，故原式 $=e^{\frac12\ln3}=\sqrt3$。
【注】常用结论：$\lim\limits_{n\to\infty}\sqrt[n]n=1$，$\lim\limits_{n\to\infty}\sqrt[n]a=1\ (a>0)$。` },
      { n: "解(7)", q: R`求 $f(x)=(1+x)^{\frac{x}{\tan\left(x-\frac\pi4\right)}}$ 在 $(0,2\pi)$ 内的间断点，并指出其类型。`, a: R`$x=\frac\pi4,\frac{5\pi}4$ 为第二类间断点；$x=\frac{3\pi}4,\frac{7\pi}4$ 为可去间断点`, sol: R`【解】$f(x)$ 在 $(0,2\pi)$ 内的间断点为 $x=\frac\pi4,\frac{3\pi}4,\frac{5\pi}4,\frac{7\pi}4$。
由 $\lim\limits_{x\to(\frac\pi4)^+}f(x)=+\infty$，$\lim\limits_{x\to(\frac{5\pi}4)^+}f(x)=+\infty$，知 $x=\frac\pi4,\frac{5\pi}4$ 为第二类间断点。
由 $\lim\limits_{x\to\frac{3\pi}4}f(x)=1$，$\lim\limits_{x\to\frac{7\pi}4}f(x)=1$，知 $x=\frac{3\pi}4,\frac{7\pi}4$ 为第一类（可去）间断点。` },
      { n: "解(8)", q: R`讨论函数 $f(x)=\lim\limits_{n\to\infty}\frac{x^{n+2}-x^{-n}}{x^n+x^{-n}}$ 的连续性。`, a: R`在 $(-\infty,-1),(-1,0),(0,1),(1,+\infty)$ 内连续；$x=0$ 为可去间断点，$x=\pm1$ 为第一类间断点`, sol: R`【解】先求极限得 $f(x)$ 的表达式，再讨论连续性。当 $x\neq0$ 时 $f(x)=\lim\limits_{n\to\infty}\frac{x^{2n+2}-1}{x^{2n}+1}=\begin{cases}-1,&0<|x|<1,\\0,&|x|=1,\\x^2,&|x|>1,\end{cases}$ 故在 $(-\infty,-1),(-1,0),(0,1),(1,+\infty)$ 内连续。
又 $\lim\limits_{x\to-1^-}f(x)=1$，$\lim\limits_{x\to-1^+}f(x)=-1$；$\lim\limits_{x\to0}f(x)=-1$；$\lim\limits_{x\to1^-}f(x)=-1$，$\lim\limits_{x\to1^+}f(x)=1$。所以 $f(x)$ 在 $x=0,\pm1$ 处间断，都是第一类间断点，其中 $x=0$ 是可去间断点。` },
      { n: "解(9)", q: R`设 $f(x)$ 在 $[a,b]$ 上连续，且 $a<c<d<b$，证明：在 $(a,b)$ 内必存在一点 $\xi$，使得 $mf(c)+nf(d)=(m+n)f(\xi)$，其中 $m,n$ 为任意给定的自然数。`, a: R`见证明`, sol: R`【证】由 $f(x)$ 在 $[a,b]$ 上连续，知 $f(x)$ 在 $[c,d]$ 上取得最小值 $k$ 和最大值 $K$。由于 $(m+n)k\leqslant mf(c)+nf(d)\leqslant(m+n)K$，当 $m,n$ 同时为 $0$ 时命题成立；当 $m,n$ 不同时为 $0$ 时，
$$k\leqslant\frac{mf(c)+nf(d)}{m+n}\leqslant K.$$
由介值定理，存在 $\xi\in[c,d]\subset(a,b)$，使 $f(\xi)=\frac{mf(c)+nf(d)}{m+n}$，即 $mf(c)+nf(d)=(m+n)f(\xi)$。` },
      { n: "解(10)", q: R`设 $x_1=\sqrt a\ (a>0)$，$x_{n+1}=\sqrt{a+x_n}$，证明：$\lim\limits_{n\to\infty}x_n$ 存在，并求其值。`, a: R`$\lim\limits_{n\to\infty}x_n=\frac{1+\sqrt{1+4a}}2$`, sol: R`【证】由 $x_{n+1}=\sqrt{a+x_n}$ 不难用数学归纳法证得 $\{x_n\}$ 严格单调增加。又 $x_{n+1}=\sqrt{a+x_n}$ 得 $x_{n+1}^2=a+x_n$，所以 $x_{n+1}=\frac a{x_{n+1}}+\frac{x_n}{x_{n+1}}<\frac a{x_{n+1}}+1$。而 $x_{n+1}>\sqrt a$，故 $x_{n+1}<\frac a{\sqrt a}+1=\sqrt a+1$，即 $\{x_n\}$ 有上界，故 $\lim\limits_{n\to\infty}x_n$ 存在。
设 $\lim\limits_{n\to\infty}x_n=A$，对 $x_{n+1}^2=a+x_n$ 两边取极限得 $A^2=a+A$，解得 $A=\frac{1+\sqrt{1+4a}}2$（负根舍去）。` },
      { n: "解(11)", q: R`设 $x_1=a\geqslant0$，$y_1=b\geqslant0$，$a\leqslant b$，$x_{n+1}=\sqrt{x_ny_n}$，$y_{n+1}=\frac{x_n+y_n}{2}\ (n=1,2,\cdots)$，证明：$\lim\limits_{n\to\infty}x_n=\lim\limits_{n\to\infty}y_n$。`, a: R`见证明`, sol: R`【证】由已知 $x_{n+1}\geqslant0,y_{n+1}\geqslant0,x_n\leqslant y_n$，可推得
$$x_{n+1}=\sqrt{x_ny_n}\geqslant\sqrt{x_n^2}=x_n,\quad y_{n+1}=\frac{x_n+y_n}{2}\leqslant\frac{y_n+y_n}{2}=y_n,$$
故 $\{x_n\}$ 单调增加，$\{y_n\}$ 单调减少。又 $x_1\leqslant x_n\leqslant y_{n+1}\leqslant y_1$，故两数列都有界，由单调有界准则知 $\lim\limits_{n\to\infty}x_n,\lim\limits_{n\to\infty}y_n$ 都存在，设为 $A,B$。
对 $x_{n+1}=\sqrt{x_ny_n}$、$y_{n+1}=\frac{x_n+y_n}{2}$ 两端取极限得 $A=\sqrt{AB}$，$B=\frac{A+B}{2}$，由此得 $A=B$，即 $\lim\limits_{n\to\infty}x_n=\lim\limits_{n\to\infty}y_n$。` }
    ]
  };
})();
