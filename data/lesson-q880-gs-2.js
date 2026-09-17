window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q880_s1"] = {
    id: "q880_s1",
    ch: "880题 · 高数 · 第一章 函数、极限、连续",
    title: "综合题·选择题",
    probTitle: "第一章 综合题 · 选择题（含原书解析）",
    book: "李林《精讲精练 880 题（数学二）》2026",
    problems: [
      { n: "(1)", q: R`$\lim\limits_{x\to\infty}\frac{e^{\sin\frac1x}-1}{\left(1+\frac1x\right)^k-\left(1+\frac1x\right)}=a\neq0$ 成立的充要条件是（ ）。
(A) $k\neq1$
(B) $k>1$
(C) $k>0$
(D) 与 $k$ 无关`, a: R`(A)`, sol: R`【解】令 $\frac1x=t$，则
$$\text{原式}=\lim_{t\to0}\frac{e^{\sin t}-1}{(1+t)^k-(1+t)}=\lim_{t\to0}\frac{\sin t}{(1+t)\left[(1+t)^{k-1}-1\right]}=\lim_{t\to0}\frac{t}{(k-1)t(1+t)}=\frac1{k-1}=a\neq0,$$
故 $k\neq1$，选项 A 正确。` },
      { n: "(2)", q: R`已知 $\lim\limits_{x\to0}\frac{2\arctan x-\ln\frac{1+x}{1-x}}{x^p}=c\neq0$，则（ ）。
(A) $p=3,c=-\frac43$
(B) $p=-3,c=\frac43$
(C) $p=\frac43,c=3$
(D) $p=-\frac43,c=-3$`, a: R`(A)`, sol: R`【解】由
$$\lim_{x\to0}\frac{2\arctan x-\ln\frac{1+x}{1-x}}{x^p}=\lim_{x\to0}\frac{\frac2{1+x^2}-\frac1{1+x}-\frac1{1-x}}{px^{p-1}}=\lim_{x\to0}\frac{-\frac{4x^2}{1-x^4}}{px^{p-1}}=-\frac4p\lim_{x\to0}\frac1{x^{p-3}(1-x^4)}=c,$$
可得 $p=3,c=-\frac43$，选项 A 正确。` },
      { n: "(3)", q: R`设当 $x\to0$ 时，$\alpha(x)=\tan x-\sin x,\beta(x)=\sqrt{1+x^2}-\sqrt{1-x^2},\gamma(x)=\int_0^{1-\cos x}\sin t\,dt$ 都是无穷小，将它们关于 $x$ 的阶数从低到高排列，正确的顺序为（ ）。
(A) $\alpha(x),\beta(x),\gamma(x)$
(B) $\alpha(x),\gamma(x),\beta(x)$
(C) $\gamma(x),\alpha(x),\beta(x)$
(D) $\beta(x),\alpha(x),\gamma(x)$`, a: R`(D)`, sol: R`【解】当 $x\to0$ 时，
$$\beta(x)=\sqrt{1+x^2}-\sqrt{1-x^2}=\frac{2x^2}{\sqrt{1+x^2}+\sqrt{1-x^2}}\sim x^2,$$
$$\alpha(x)=\tan x-\sin x=(1-\cos x)\tan x\sim\frac{x^3}2,$$
$$\gamma(x)=\int_0^{1-\cos x}\sin t\,dt=-\cos t\Big|_0^{1-\cos x}=1-\cos(1-\cos x)\sim\frac{(1-\cos x)^2}2\sim\frac{x^4}8,$$
故阶数从低到高为 $\beta,\alpha,\gamma$，选项 D 正确。` },
      { n: "(4)", q: R`设 $y=y(x)$ 是方程 $y''+2y'+y=e^{3x}$ 的解，且满足 $y(0)=y'(0)=0$，则当 $x\to0$ 时，与 $y(x)$ 为等价无穷小的是（ ）。
(A) $\sin x^2$
(B) $\sin x$
(C) $\ln(1+x^2)$
(D) $\ln\sqrt{1+x^2}$`, a: R`(D)`, sol: R`【解】依题设 $\lim\limits_{x\to0}y(x)=y(0)=0$，$\lim\limits_{x\to0}y'(x)=y'(0)=0$，$\lim\limits_{x\to0}y''(x)=\lim\limits_{x\to0}\left[e^{3x}-2y'(x)-y(x)\right]=1$，故
$$\lim_{x\to0}\frac{\ln\sqrt{1+x^2}}{y(x)}=\frac12\lim_{x\to0}\frac{\ln(1+x^2)}{y(x)}=\frac12\lim_{x\to0}\frac{x^2}{y(x)}=\frac12\lim_{x\to0}\frac{2x}{y'(x)}=\frac12\lim_{x\to0}\frac2{y''(x)}=1.$$
选项 D 正确。` },
      { n: "(5)", q: R`设 $F(x)=\begin{cases}\frac{f(x)}x,&x\neq0,\\f(0),&x=0,\end{cases}$ 其中 $f(x)$ 在 $x=0$ 处可导，且 $f'(0)\neq0,f(0)=0$，则（ ）。
(A) $x=0$ 是 $F(x)$ 的连续点
(B) $x=0$ 是 $F(x)$ 的第一类间断点
(C) $x=0$ 是 $F(x)$ 的第二类间断点
(D) 以上说法均错误`, a: R`(B)`, sol: R`【解】因为 $\lim\limits_{x\to0}F(x)=\lim\limits_{x\to0}\frac{f(x)}x=\lim\limits_{x\to0}\frac{f(x)-f(0)}{x-0}=f'(0)\neq0=F(0)$，所以 $x=0$ 是 $F(x)$ 的第一类间断点，选项 B 正确。` },
      { n: "(6)", q: R`设 $f(x)=\begin{cases}(x+1)\arctan\frac1{x^2-1},&x\neq\pm1,\\0,&x=\pm1,\end{cases}$ 则 $f(x)$（ ）。
(A) 在 $x=1,x=-1$ 处都连续
(B) 在 $x=1,x=-1$ 处都间断
(C) 在 $x=-1$ 处间断，$x=1$ 处连续
(D) 在 $x=-1$ 处连续，$x=1$ 处间断`, a: R`(D)`, sol: R`【解】当 $x\to-1$ 时，$\arctan\frac1{x^2-1}$ 有界，$x+1\to0$，故 $\lim\limits_{x\to-1}f(x)=0=f(-1)$，即 $f(x)$ 在 $x=-1$ 处连续。又 $\lim\limits_{x\to1^-}f(x)=-\pi$，$\lim\limits_{x\to1^+}f(x)=\pi$，所以 $f(x)$ 在 $x=1$ 处间断，选项 D 正确。` },
      { n: "(7)", q: R`$f(x)=\frac{x\ln|x|}{|x-1|}e^{\frac1{(x-1)(x-2)}}$ 的无穷间断点的个数为（ ）。
(A) 0
(B) 1
(C) 2
(D) 3`, a: R`(C)`, sol: R`【解】$f(x)$ 有 3 个间断点：$x=0,x=1,x=2$。
当 $x\to0$ 时，$\frac1{|x-1|}e^{\frac1{(x-1)(x-2)}}\to e^{\frac12}$，且 $\lim\limits_{x\to0}x\ln|x|=\lim\limits_{x\to0}\frac{\ln|x|}{1/x}=\lim\limits_{x\to0}(-x)=0$，故 $\lim\limits_{x\to0}f(x)=0$，$x=0$ 为可去间断点。
又 $\lim\limits_{x\to1^-}e^{\frac1{(x-1)(x-2)}}=+\infty$，$\lim\limits_{x\to1^-}\frac{x\ln|x|}{x-1}=\lim\limits_{x\to1^-}\frac{\ln|x|}{1-x}=-1$，故 $\lim\limits_{x\to1^-}f(x)=\infty$，$x=1$ 为无穷间断点。
当 $x\to2^+$ 时，$\frac{x\ln|x|}{x-1}\to2\ln2$，$\lim\limits_{x\to2^+}e^{\frac1{(x-1)(x-2)}}=+\infty$，故 $\lim\limits_{x\to2^+}f(x)=\infty$，$x=2$ 为无穷间断点。选项 C 正确。` },
      { n: "(8)", q: R`下列结论中错误的是（ ）。
(A) 设 $\lim\limits_{n\to\infty}a_n=a>1$，则存在 $M>1$，当 $n$ 充分大时，有 $a_n>M$
(B) 设 $a=\lim\limits_{n\to\infty}a_n<\lim\limits_{n\to\infty}b_n=b$，则当 $n$ 充分大时，有 $a_n<b_n$
(C) 设 $M\leqslant a_n\leqslant N\ (n=1,2,\cdots)$，若 $\lim\limits_{n\to\infty}a_n=a$，则 $M\leqslant a\leqslant N$
(D) 若 $\lim\limits_{n\to\infty}a_n=a\neq0$，则当 $n$ 充分大时，$a_n>a-\frac1n$`, a: R`(D)`, sol: R`【解】对 A：取 $M=\frac{a+1}2>1$，令 $x_n=a_n-\frac{a+1}2$，则 $\lim\limits_{n\to\infty}x_n=\frac{a-1}2>0$，由保号性知 $n$ 充分大时 $a_n>\frac{a+1}2=M$。
对 B：令 $x_n=b_n-a_n$，$\lim\limits_{n\to\infty}x_n=b-a>0$，由保号性知 $n$ 充分大时 $x_n>0$，即 $a_n<b_n$。
对 C：令 $x_n=N-a_n\geqslant0$，由保号性得 $N-a\geqslant0$，即 $a\leqslant N$，同理 $M\leqslant a$。
对 D：取 $a_n=2-\frac2n$，则 $\lim\limits_{n\to\infty}a_n=2\neq0$，而 $a_n=2-\frac2n\leqslant2-\frac1n$，故 D 错误（应选 D）。` },
      { n: "(9)", q: R`设 $\{x_n\}$ 与 $\{y_n\}$ 为两个数列，则下列说法正确的是（ ）。
(A) 若 $\{x_n\}$ 与 $\{y_n\}$ 无界，则 $\{x_n+y_n\}$ 无界
(B) 若 $\{x_n\}$ 与 $\{y_n\}$ 无界，则 $\{x_ny_n\}$ 无界
(C) 若 $\{x_n\}$ 与 $\{y_n\}$ 中，一个有界，一个无界，则 $\{x_ny_n\}$ 无界
(D) 若 $\{x_n\}$ 与 $\{y_n\}$ 均为无穷大，则 $\{x_ny_n\}$ 一定为无穷大`, a: R`(D)`, sol: R`【解】取 $x_n=n,y_n=-n$，均无界但 $x_n+y_n$ 有界，排除 A。取 $x_n=n[1+(-1)^n],y_n=n[1-(-1)^n]$，均无界但 $x_ny_n=0$ 有界，排除 B。取 $x_n=n,y_n=0$，一有界一无界但 $x_ny_n$ 有界，排除 C。故选 D。` },
      { n: "(10)", q: R`设数列 $\{x_n\}$ 单调减少，$\{y_n\}$ 单调增加，且 $\lim\limits_{n\to\infty}(x_n-y_n)=0$，则下列选项正确的是（ ）。
(A) $\lim\limits_{n\to\infty}x_n=0,\lim\limits_{n\to\infty}y_n=0$
(B) $\lim\limits_{n\to\infty}x_n,\lim\limits_{n\to\infty}y_n$ 均存在，且 $\lim\limits_{n\to\infty}x_n=\lim\limits_{n\to\infty}y_n$
(C) $\lim\limits_{n\to\infty}x_n$ 存在，$\lim\limits_{n\to\infty}y_n$ 不存在
(D) $\lim\limits_{n\to\infty}x_n$ 与 $\lim\limits_{n\to\infty}y_n$ 均不存在`, a: R`(B)`, sol: R`【解】反证：若 $\lim\limits_{n\to\infty}y_n$ 不存在，由 $\{y_n\}$ 单调增加知 $\lim\limits_{n\to\infty}y_n=+\infty$；又 $\lim\limits_{n\to\infty}(x_n-y_n)=0$，则 $\lim\limits_{n\to\infty}x_n=+\infty$，与 $\{x_n\}$ 单调减少矛盾，故 $\lim\limits_{n\to\infty}y_n$ 存在。同理 $\lim\limits_{n\to\infty}x_n$ 存在。由 $\lim\limits_{n\to\infty}(x_n-y_n)=0$ 知两者相等，选项 B 正确。` },
      { n: "(11)", q: R`设正项数列 $\{x_n\},\{y_n\}$ 满足 $e^{x_n}=x_n+e^{y_n}\ (n=1,2,\cdots)$，且 $\lim\limits_{n\to\infty}x_n=0$，则当 $n\to\infty$ 时，正确的是（ ）。
(A) $y_n$ 是比 $x_n$ 高阶的无穷小
(B) $x_n$ 是比 $y_n$ 高阶的无穷小
(C) $y_n$ 与 $x_n$ 是等价无穷小
(D) $x_n$ 与 $y_n$ 是同阶但不等价无穷小`, a: R`(A)`, sol: R`【解】由 $e^{x_n}=x_n+e^{y_n}$ 得 $y_n=\ln(e^{x_n}-x_n)$，故
$$\lim_{n\to\infty}\frac{y_n}{x_n}=\lim_{n\to\infty}\frac{\ln(e^{x_n}-x_n)}{x_n}=\lim_{n\to\infty}\frac{e^{x_n}-x_n-1}{x_n}\xlongequal{x_n=t}\lim_{t\to0^+}\frac{e^t-t-1}{t}=\lim_{t\to0^+}\frac{e^t-1}1=0.$$
故 $y_n$ 是比 $x_n$ 高阶的无穷小，选项 A 正确。` },
      { n: "(12)", q: R`设 $f(n)$ 表示方程 $x(1+\ln x)=n$ 的正实根，其中 $x\geqslant1$，$n$ 为正整数，则下列选项正确的是（ ）。
(A) $\{f(n)\}$ 收敛
(B) $\left\{\frac{f(n)}n\right\}$ 发散
(C) $\left\{\frac{f(n)\ln n}n\right\}$ 收敛
(D) $\left\{\frac{f(n)\ln n}n\right\}$ 发散`, a: R`(C)`, sol: R`【解】令 $g(x)=x(1+\ln x)$，则 $f(t)$ 是 $g(x)=t\ (t\in[1,+\infty))$ 的反函数，$g(1)=1$。当 $x\geqslant1$ 时 $g'(x)=2+\ln x>0$，且 $\lim\limits_{x\to+\infty}g(x)=+\infty$，故 $f(t)$ 严格单调递增，$\lim\limits_{t\to+\infty}f(t)=+\infty$，故 $\{f(n)\}$ 发散，排除 A。
由 $f(n)(1+\ln f(n))=n$ 得 $\frac{f(n)}n=\frac1{1+\ln f(n)}\to0$，故 $\left\{\frac{f(n)}n\right\}$ 收敛，排除 B。
由反函数求导法则 $f'(t)=\frac1{2+\ln f(t)}$，则
$$\lim_{t\to+\infty}\frac{f(t)\ln t}{t}=\lim_{t\to+\infty}\frac{\ln t}{1+\ln f(t)}\xlongequal{\text{洛必达}}\lim_{t\to+\infty}\frac{1/t}{f'(t)/f(t)}=\lim_{t\to+\infty}\frac{2+\ln f(t)}{1+\ln f(t)}=1,$$
所以 $\left\{\frac{f(n)\ln n}n\right\}$ 收敛，选项 C 正确。` },
      { n: "(13)", q: R`设 $\{x_n\}$ 为数列，则下列结论正确的是（ ）。
① 若 $\{\arctan x_n\}$ 收敛，则 $\{x_n\}$ 收敛；　② 若 $\{\arctan x_n\}$ 单调，则 $\{x_n\}$ 收敛；
③ 若 $x_n\in[-1,1]$，且 $\{x_n\}$ 收敛，则 $\{\arcsin x_n\}$ 收敛；
④ 若 $x_n\in[-1,1]$，且 $\{x_n\}$ 单调，则 $\{\arcsin x_n\}$ 收敛。
(A) ①②
(B) ③④
(C) ①③
(D) ②④`, a: R`(B)`, sol: R`【解】取 $x_n=n$，则 $\{\arctan n\}$ 收敛且单调，但 $\{x_n\}$ 发散，故①②不正确。
由于 $\arcsin x$ 连续，当 $\{x_n\}$ 收敛时 $\lim\limits_{n\to\infty}\arcsin x_n=\arcsin\left(\lim\limits_{n\to\infty}x_n\right)$ 存在，③正确。
又 $\arcsin x$ 单调递增且有界，当 $\{x_n\}$ 单调时 $\{\arcsin x_n\}$ 单调有界，故收敛，④正确。选 B。` },
      { n: "(14)", q: R`下列极限存在的是（ ）。
(A) $\lim\limits_{x\to1}\frac1{1+2^{\frac1{1-x}}}$
(B) $\lim\limits_{x\to+\infty}\left(1+\frac{\sin x}x\right)^x$
(C) $\lim\limits_{n\to\infty}[n+(-1)^n(n+1)]$
(D) $\lim\limits_{n\to\infty}\left(\frac1{1^2}+\frac1{2^2}+\cdots+\frac1{n^2}\right)^{\frac1n}$`, a: R`(D)`, sol: R`【解】对 D：由 $\frac1{n^2}\cdot n<\frac1{1^2}+\frac1{2^2}+\cdots+\frac1{n^2}<\frac1{1^2}\cdot n$ 得 $\sqrt[n]{\frac1n}<\left(\frac1{1^2}+\cdots+\frac1{n^2}\right)^{\frac1n}<\sqrt[n]n$，两端极限均为 1，故原极限为 1，存在，选 D。
A：$x\to1^-$ 时极限为 0，$x\to1^+$ 时为 1，不存在。
B：取 $x_n=n\pi$、$y_n=\left(2n+\frac12\right)\pi$，得 $f(x_n)\to1$、$f(y_n)\to e$，由海涅定理知不存在。
C：数列无界，极限不存在。` },
      { n: "(15)", q: R`设 $f(x)$ 在 $(-\infty,+\infty)$ 内为连续的奇函数，$a$ 为常数，则必为偶函数的是（ ）。
(A) $\int_0^x du\int_a^u tf(t)\,dt$
(B) $\int_a^x du\int_0^u f(t)\,dt$
(C) $\int_0^x du\int_a^u f(t)\,dt$
(D) $\int_a^x du\int_0^u tf(t)\,dt`, a: R`(D)`, sol: R`【解】由 $f$ 为奇函数知 $tf(t)$ 为偶函数，故 $\int_0^u tf(t)\,dt$ 是关于 $u$ 的奇函数，则 $\int_{-a}^x\left[\int_0^u tf(t)\,dt\right]du$ 是关于 $x$ 的偶函数，选项 D 正确。
【注】结论：设 $f(x)$ 连续，$a\neq0$ 为常数，则当 $f(x)$ 是奇函数时 $\int_a^xf(t)\,dt$ 为偶函数；当 $f(x)$ 是偶函数时 $\int_a^xf(t)\,dt$ 不一定为奇函数。` },
      { n: "(16)", q: R`设 $f(x)=\lim\limits_{t\to+\infty}\frac{x+2^{tx}}{1+2^{tx}}$，则 $F(x)=\int_{-1}^xf(t)\,dt$ 在 $x=0$ 处（ ）。
(A) 可导
(B) 不连续
(C) 不可导但连续
(D) 无法判定`, a: R`(C)`, sol: R`【解】当 $x>0$ 时 $f(x)=1$；当 $x=0$ 时 $f(0)=\frac12$；当 $x<0$ 时 $f(x)=x$。即
$$f(x)=\begin{cases}1,&x>0,\\\frac12,&x=0,\\x,&x<0.\end{cases}$$
$x=0$ 是 $f(x)$ 的第一类间断点，所以 $F(x)$ 在 $x=0$ 处连续但不可导，选项 C 正确。
【注】设 $F(x)=\int_a^xf(t)\,dt$，若 $f(x)$ 可积则 $F(x)$ 连续；若 $f(x)$ 连续则 $F(x)$ 可导。题中 $f$ 只有一个第一类间断点，故可积。` },
      { n: "(17)", q: R`设 $f(x)=\begin{cases}\frac{(x^3-1)\sin x}{|x|(1+x^2)},&x\neq0,\\0,&x=0,\end{cases}$ $x\in(-\infty,+\infty)$，则（ ）。
(A) $f(x)$ 在 $(-\infty,+\infty)$ 内有界
(B) 存在 $X>0$，当 $|x|<X$ 时 $f(x)$ 有界，当 $|x|>X$ 时 $f(x)$ 无界
(C) 存在 $X>0$，当 $|x|<X$ 时 $f(x)$ 无界，当 $|x|>X$ 时 $f(x)$ 有界
(D) 对任意 $X>0$，当 $|x|\leqslant X$ 时 $f(x)$ 有界，但在 $(-\infty,+\infty)$ 内无界`, a: R`(A)`, sol: R`【解】由 $\lim\limits_{x\to0^-}f(x)=1$、$\lim\limits_{x\to0^+}f(x)=-1$ 及极限有界性，存在 $\delta>0$ 使 $|x|<\delta$ 时 $f(x)$ 有界；又 $\lim\limits_{x\to\pm\infty}\frac{x^3-1}{|x|(1+x^2)}=\pm1$，且 $|\sin x|\leqslant1$，故存在充分大的 $X>0$，当 $|x|>X$ 时 $f(x)$ 有界；$f(x)$ 在 $[\delta,X]$、$[-X,-\delta]$ 上连续故有界。从而 $f(x)$ 在 $(-\infty,+\infty)$ 内有界，选项 A 正确。
【注】判别有界性的常用方法：① 闭区间上连续必有界；② 开区间内连续且两端极限都存在则有界（无穷区间也成立）；③ 若 $f'(x)$ 在有限区间 $(a,b)$ 内有界，则 $f(x)$ 在 $(a,b)$ 内有界（证：由拉格朗日中值定理 $|f(x)|\leqslant|f(x_0)|+|f'(\xi)||x-x_0|$）。此结论对 $(-\infty,+\infty)$ 不成立。` }
    ]
  };
})();
