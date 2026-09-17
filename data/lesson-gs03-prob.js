window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["gs03_s3"].problems = [
    { n: 1, q: R`若 $f(x)$ 的导函数是 $\sin x$，则 $f(x)$ 有一个原函数为（ ）
（A）$1+\sin x$。　（B）$1-\sin x$。
（C）$1+\cos x$。　（D）$1-\cos x$。`, a: R`(B)`, sol: R`【思路】「$F$ 是 $f$ 的原函数」即 $F'=f$，而 $f'=\sin x$，故 $F''=\sin x$；逐个验证二阶导。
【详解】$f'=\sin x$，若 $F$ 是 $f$ 的原函数则 $F'=f$，从而 $F''=f'=\sin x$。
(A) $F=1+\sin x$，$F''=-\sin x$ ✗；(B) $F=1-\sin x$，$F''=\sin x$ ✓；
(C) $F=1+\cos x$，$F''=-\cos x$ ✗；(D) $F=1-\cos x$，$F''=\cos x$ ✗。选 (B)。
【易错点】注意区分「$f$ 的原函数」与「$f'$ 的原函数」：这里要求 $F'=f$ 且 $f'=\sin x$，即 $F''=\sin x$。` },
    { n: 2, q: R`设 $f(x)=\begin{cases}\cos x,x\geqslant0,\\\sin x,x<0,\end{cases}g(x)=\begin{cases}x\sin\dfrac{1}{x},&x\neq0,\\0,&x=0,\end{cases}$ 则在 $(-\infty,+\infty)$ 上（ ）
（A）$f(x)$ 与 $g(x)$ 都存在原函数。
（B）$f(x)$ 与 $g(x)$ 都不存在原函数。
（C）$f(x)$ 存在原函数，$g(x)$ 不存在原函数。
（D）$f(x)$ 不存在原函数，$g(x)$ 存在原函数。`, a: R`(D)`, sol: R`【思路】连续函数必有原函数；含跳跃间断点的函数必无原函数（导函数具有介值性）。
【详解】$f$ 在 $x=0$ 处 $f(0^+)=1$、$f(0^-)=0$，是跳跃间断点。由「导函数具有介值性（Darboux 定理）」，$f$ 不存在原函数。
$g$ 在 $x=0$ 处 $|g(x)|\le|x|\to0=g(0)$，连续，故 $g$ 存在原函数。选 (D)。
【易错点】判断「是否存在原函数」看连续性/介值性：跳跃间断点使原函数不存在；连续则必存在。` },
    { n: 3, q: R`（1）已知 $f(x)=\begin{cases}x^2,&0\leqslant x<1,\\1,&1\leqslant x\leqslant2,\end{cases}$ 设 $F(x)=\int_1^xf(t)\mathrm{d}t(0\leqslant x\leqslant2)$，则 $F(x)$ 为（ ）
（A）$\begin{cases}\dfrac{1}{3}x^3,&0\leqslant x<1,\\x,&1\leqslant x\leqslant2.\end{cases}$
（B）$\begin{cases}\dfrac{1}{3}x^3-\dfrac{1}{3},&0\leqslant x<1,\\x,&1\leqslant x\leqslant2.\end{cases}$
（C）$\begin{cases}\dfrac{1}{3}x^3,&0\leqslant x<1,\\x-1,&1\leqslant x\leqslant2.\end{cases}$
（D）$\begin{cases}\dfrac{1}{3}x^3-\dfrac{1}{3},&0\leqslant x<1,\\x-1,&1\leqslant x\leqslant2.\end{cases}$
（2）设 $f(x)=\begin{cases}\mathrm{e}^x,x\leqslant0,\\x^2+a,x>0.\end{cases}$ 则 $F(x)=\int_{-1}^xf(t)\mathrm{d}t$ 在 $x=0$ 处（ ）
（A）极限存在但不连续。　（B）连续但不可导。
（C）可导。　（D）是否可导与 $a$ 的取值有关。`, a: R`(1)(D) (2)(D)`, sol: R`【思路】(1) 按 $x<1$、$x\ge1$ 分段积分；(2) 用变上限积分的连续性/可导性结论。
【详解】(1) $0\le x<1$：$F(x)=-\int_x^1t^2dt=\frac{x^3}{3}-\frac13$；$1\le x\le2$：$F(x)=\int_1^x1dt=x-1$。选 (D)。
(2) 变上限积分 $F$ 连续（被积函数有界），且 $F'(0^\pm)=f(0^\pm)$。$f(0^-)=e^0=1$，$f(0^+)=a$。故 $F$ 在 0 可导 $\iff a=1$，与 $a$ 有关。选 (D)。
【易错点】(2) 中 $F$ 连续与 $a$ 无关（变上限积分必连续），但可导要求左右导数相等，即 $a=1$。` },
    { n: 4, q: R`设在区间 $[a,b]$ 上 $f(x)>0,f'(x)<0,f''(x)>0$。令 $S_1=\int_a^bf(x)\mathrm{d}x,S_2=f(b)(b-a),S_3=\dfrac{1}{2}[f(a)+f(b)](b-a)$，则（ ）
[图：$y=f(x)$ 的单调递减、下凸曲线，横轴 $x$ 上标有 $a,b$，曲线端点标 $f(a),f(b)$，图中以虚线绘出由 $x=a$ 到 $x=b$ 的曲边梯形]
（A）$S_1<S_2<S_3$。　（B）$S_2<S_1<S_3$。
（C）$S_3<S_1<S_2$。　（D）$S_2<S_3<S_1$。`, a: R`(B)`, sol: R`【思路】$S_2$ 是「以最小值 $f(b)$ 为高的矩形」，$S_3$ 是「梯形（弦）」，曲线下凸（$f''>0$）时曲线在弦下方、在矩形上方。
【详解】$f$ 单调减（$f'<0$）且下凸（$f''>0$）。$S_2=f(b)(b-a)$ 是最小值矩形面积（曲线在 $y=f(b)$ 上方，故 $S_2<S_1$）。
$S_3=\frac12[f(a)+f(b)](b-a)$ 是弦梯形面积；下凸曲线位于弦下方，故 $S_1<S_3$。综上 $S_2<S_1<S_3$。选 (B)。
【易错点】下凸（$f''>0$）⇒ 曲线在弦下方；单调减 ⇒ 曲线在最小值矩形上方。` },
    { n: 5, q: R`设 $f(x)$ 连续，则 $\dfrac{\mathrm{d}}{\mathrm{d}x}\int_0^xtf(x^2-t^2)\mathrm{d}t=$（ ）
（A）$xf(x^2)$。　（B）$-xf(x^2)$。
（C）$2xf(x^2)$。　（D）$-2xf(x^2)$。`, a: R`(A)`, sol: R`【思路】换元把 $x$ 从被积函数中移出，再用变上限积分求导。
【详解】令 $u=x^2-t^2$，$\mathrm{d}u=-2t\,\mathrm{d}t$，$t\,\mathrm{d}t=-\frac12\mathrm{d}u$：
$$\int_0^xtf(x^2-t^2)\mathrm{d}t=\int_{x^2}^{0}f(u)\left(-\frac12\right)\mathrm{d}u=\frac12\int_0^{x^2}f(u)\mathrm{d}u.$$
故 $\frac{\mathrm{d}}{\mathrm{d}x}=\frac12f(x^2)\cdot2x=xf(x^2)$。选 (A)。
【易错点】换元后上限变 $x^2$，求导时还要乘 $(x^2)'=2x$。` },
    { n: 6, q: R`设 $f(x)$ 连续，且存在常数 $a$，满足 $5x^3+40=\int_a^xf(t)\mathrm{d}t$。当 $x\to0$ 时，$axf(x)$ 与 $c(\tan x-x)^k$ 是等价无穷小，则（ ）
（A）$k=3,c=4$。　（B）$k=2,c=-4$。
（C）$k=1,c=-30$。　（D）$k=1,c=-90$。`, a: R`(D)`, sol: R`【思路】先求 $a$ 与 $f$，再用 $\tan x-x\sim\frac{x^3}{3}$ 比较。
【详解】令 $x=a$：$5a^3+40=0\Rightarrow a=-2$。求导：$15x^2=f(x)$。
故 $axf(x)=-2x\cdot15x^2=-30x^3$。又 $\tan x-x\sim\frac{x^3}{3}$，故 $c(\tan x-x)^k\sim c\frac{x^{3k}}{3^k}$。
等价要求 $k=1$，$c\cdot\frac13=-30$，即 $c=-90$。选 (D)。
【易错点】$\tan x-x\sim\frac{x^3}{3}$（有系数 $\frac13$），故 $c=-90$ 而非 $-30$。` },
    { n: 7, q: R`设 $a_n=\dfrac{3}{2}\int_0^{\frac{n}{n+1}}x^{n-1}\sqrt{1+x^n}\mathrm{d}x$，则极限 $\lim\limits_{n\to\infty}na_n$ 等于（ ）
（A）$(1+\mathrm{e})^{\frac{3}{2}}+1$。　（B）$(1+\mathrm{e}^{-1})^{\frac{3}{2}}-1$。
（C）$(1+\mathrm{e}^{-1})^{\frac{3}{2}}+1$。　（D）$(1+\mathrm{e})^{\frac{3}{2}}-1$。`, a: R`(B)`, sol: R`【思路】换元 $u=1+x^n$ 算出 $a_n$，再求 $na_n$ 的极限。
【详解】令 $u=1+x^n$，$\mathrm{d}u=nx^{n-1}\mathrm{d}x$：
$$a_n=\frac32\int_1^{1+(\frac{n}{n+1})^n}\sqrt u\,\frac{\mathrm{d}u}{n}=\frac{1}{n}\left[\left(1+\left(\frac{n}{n+1}\right)^n\right)^{3/2}-1\right].$$
故 $na_n=\left(1+\left(\frac{n}{n+1}\right)^n\right)^{3/2}-1\to\left(1+e^{-1}\right)^{3/2}-1$。选 (B)。
【易错点】$\left(\frac{n}{n+1}\right)^n=\left(1-\frac1{n+1}\right)^n\to e^{-1}$；换元时 $\int\sqrt u\,du=\frac23u^{3/2}$ 与前面的 $\frac32$ 相消。` },
    { n: 8, q: R`$\lim\limits_{n\to\infty}\ln\sqrt[n]{\left(1+\dfrac{1}{n}\right)^2\left(1+\dfrac{2}{n}\right)^2\cdots\left(1+\dfrac{n}{n}\right)^2}$ 等于（ ）
（A）$\int_1^2\ln^2x\mathrm{d}x$。　（B）$2\int_1^2\ln x\mathrm{d}x$。
（C）$2\int_1^2\ln(1+x)\mathrm{d}x$。　（D）$\int_1^2\ln^2(1+x)\mathrm{d}x$。`, a: R`(B)`, sol: R`【思路】把连乘取对数化为黎曼和。
【详解】原式 $=\lim\frac1n\sum_{k=1}^n2\ln\left(1+\frac kn\right)=2\int_0^1\ln(1+x)\mathrm{d}x\xlongequal{u=1+x}2\int_1^2\ln u\,\mathrm{d}u$。选 (B)。
【易错点】$\ln\sqrt[n]{\prod a_k}=\frac1n\sum\ln a_k$；换元 $u=1+x$ 把积分区间变为 $[1,2]$。` },
    { n: 9, q: R`设 $I_1=\int_0^{\frac{\pi}{2}}\sin(\sin x)\mathrm{d}x,I_2=\int_0^{\frac{\pi}{2}}\cos(\sin x)\mathrm{d}x$，则（ ）
（A）$I_1<1<I_2$。　（B）$1<I_1<I_2$。
（C）$I_2<1<I_1$。　（D）$I_1<I_2<1$。`, a: R`(A)`, sol: R`【思路】用 $\sin t\le t$ 与 $\cos t\ge\cos x$ 把两个积分与 1 比较。
【详解】在 $[0,\frac\pi2]$ 上 $\sin x\in[0,1]$，故 $\sin(\sin x)\le\sin x$，于是 $I_1\le\int_0^{\pi/2}\sin x\mathrm{d}x=1$（严格小于）。
又 $\sin x\le x$ 且 $\cos$ 在 $[0,1]$ 递减，故 $\cos(\sin x)\ge\cos x$，$I_2\ge\int_0^{\pi/2}\cos x\mathrm{d}x=1$（严格大于）。选 (A)。
【易错点】$t\in[0,1]$ 时 $\sin t\le t$、$\cos t\ge\cos1>0$；比较时注意 $\cos$ 递减。` },
    { n: 10, q: R`设 $I=\int_0^{\frac{\pi}{4}}\ln\sin x\mathrm{d}x,J=\int_0^{\frac{\pi}{4}}\ln\cot x\mathrm{d}x,K=\int_0^{\frac{\pi}{4}}\ln\cos x\mathrm{d}x$，则 $I,J,K$ 的大小关系为（ ）
（A）$I<J<K$。　（B）$I<K<J$。
（C）$J<I<K$。　（D）$K<J<I$。`, a: R`(B)`, sol: R`【思路】在 $(0,\frac\pi4)$ 上比较被积函数的符号与大小。
【详解】在 $(0,\frac\pi4)$ 上 $\sin x<\cos x<1$，故 $\ln\sin x<\ln\cos x<0$，即 $I<K<0$。
又 $\cot x=\frac{\cos x}{\sin x}>1$，故 $\ln\cot x>0$，即 $J>0$。综上 $I<K<J$。选 (B)。
【易错点】$\ln$ 在 $(0,1)$ 为负，故 $I,K<0$；$\cot x>1$ 使 $J>0$。` },
    { n: 11, q: R`设 $I_k=\int_0^{k\pi}\mathrm{e}^{x^2}\sin x\mathrm{d}x(k=1,2,3)$，则有（ ）
（A）$I_1<I_2<I_3$。　（B）$I_3<I_2<I_1$。
（C）$I_2<I_3<I_1$。　（D）$I_2<I_1<I_3$。`, a: R`(D)`, sol: R`【思路】按 $\sin x$ 的正负把区间分段，并比较各段绝对值的大小（$e^{x^2}$ 递增）。
【详解】$I_1=\int_0^\pi e^{x^2}\sin x\mathrm{d}x>0$。
$I_2-I_1=\int_\pi^{2\pi}e^{x^2}\sin x\mathrm{d}x$，令 $x=\pi+t$ 得 $=-\int_0^\pi e^{(\pi+t)^2}\sin t\mathrm{d}t<-\int_0^\pi e^{t^2}\sin t\mathrm{d}t=-I_1$，故 $I_2<0<I_1$。
$I_3-I_1=\int_\pi^{3\pi}e^{x^2}\sin x\mathrm{d}x=-\int_0^\pi e^{(\pi+t)^2}\sin t\mathrm{d}t+\int_0^\pi e^{(2\pi+t)^2}\sin t\mathrm{d}t>0$（后段指数更大），故 $I_3>I_1$。
所以 $I_2<I_1<I_3$。选 (D)。
【易错点】$e^{x^2}$ 递增使后段绝对值更大；负段使 $I_2<0$，正段使 $I_3>I_1$。` },
    { n: 12, q: R`曲线 $y=\sin^{\frac{3}{2}}x(0\leqslant x\leqslant\pi)$ 与 $x$ 轴围成的图形绕 $x$ 轴旋转所成的旋转体的体积为（ ）
（A）$\dfrac{4}{3}$。　（B）$\dfrac{4}{3}\pi$。　（C）$\dfrac{4}{3}\pi^2$。　（D）$\dfrac{2}{3}\pi$。`, a: R`(B)`, sol: R`【思路】旋转体体积公式 $V=\pi\int y^2dx$。
【详解】$V=\pi\int_0^\pi(\sin^{3/2}x)^2dx=\pi\int_0^\pi\sin^3x\mathrm{d}x=\pi\cdot\frac43=\frac{4\pi}{3}$。选 (B)。
【易错点】$\int_0^\pi\sin^3x\mathrm{d}x=\frac43$（对称区间化为 $2\int_0^{\pi/2}\sin^3x\mathrm{d}x=\frac43$）。` },
    { n: 13, q: R`$\int\dfrac{x+5}{x^2-6x+13}\mathrm{d}x=$______。`, a: R`$\frac{1}{2}\ln(x^2-6x+13)+4\arctan\frac{x-3}{2}+C.$`, sol: R`【思路】配方后拆成 $\frac{u}{u^2+a^2}$ 与 $\frac{1}{u^2+a^2}$ 两部分。
【详解】$x^2-6x+13=(x-3)^2+4$，$x+5=(x-3)+8$。
$$\int\frac{x-3}{(x-3)^2+4}\mathrm{d}x+\int\frac{8}{(x-3)^2+4}\mathrm{d}x=\frac12\ln(x^2-6x+13)+8\cdot\frac12\arctan\frac{x-3}{2}+C.$$
【易错点】$\int\frac{du}{u^2+a^2}=\frac1a\arctan\frac ua$，本题 $a=2$，故系数为 4。` },
    { n: 14, q: R`$\displaystyle\int\frac{\arcsin x}{x^2}\,dx=$______。`, a: R`$-\frac{\arcsin x}{x}-\ln\left(\frac{1}{x}+\sqrt{\frac{1}{x^2}-1}\right)+C.$`, sol: R`【思路】分部积分，$u=\arcsin x$，$\mathrm{d}v=\frac{dx}{x^2}$。
【详解】$v=-\frac1x$，$I=-\frac{\arcsin x}{x}+\int\frac{1}{x\sqrt{1-x^2}}\mathrm{d}x$。
$\int\frac{dx}{x\sqrt{1-x^2}}$，令 $x=\sin t$：$=\int\frac{\mathrm{d}t}{\sin t}=\ln\left|\tan\frac t2\right|+C=\ln\left|\frac{x}{1+\sqrt{1-x^2}}\right|+C=-\ln\left(\frac1x+\sqrt{\frac1{x^2}-1}\right)+C$。
故 $I=-\frac{\arcsin x}{x}-\ln\left(\frac1x+\sqrt{\frac1{x^2}-1}\right)+C$。
【易错点】$\int\frac{dx}{x\sqrt{1-x^2}}$ 的结果可写成 $\ln\frac{x}{1+\sqrt{1-x^2}}$ 或 $-\ln(\frac1x+\sqrt{\frac1{x^2}-1})$，两者相等。` },
    { n: 15, q: R`$\displaystyle\int\frac{x^2e^x}{(x+2)^2}\,dx=$______。`, a: R`$-\frac{x^2e^x}{x+2}+xe^x-e^x+C.$`, sol: R`【思路】观察 $\left(\frac{e^x}{x+2}\right)'=\frac{e^x(x+1)}{(x+2)^2}$，把被积函数拆成可积组合。
【详解】$\frac{x^2}{(x+2)^2}=1-\frac{4x+4}{(x+2)^2}=1-\frac{4}{x+2}+\frac{4}{(x+2)^2}$。
注意到 $\left(\frac{e^x}{x+2}\right)'=\frac{e^x(x+1)}{(x+2)^2}$，可验证
$$\int\frac{x^2e^x}{(x+2)^2}\mathrm{d}x=-\frac{x^2e^x}{x+2}+xe^x-e^x+C.$$
（求导验证：$F'=\frac{x^2e^x}{(x+2)^2}$。）
【易错点】此类题可先猜测含 $\frac{e^x}{x+2}$ 的形式再求导验证；直接分部较繁。` },
    { n: 16, q: R`设 $f(x)$ 是连续函数，且 $\displaystyle\int_0^{x^3-1}f(t)\,dt=x$，则 $f(7)=$______。`, a: R`$\frac{1}{12}.$`, sol: R`【思路】两边对 $x$ 求导，得 $f$ 的表达式。
【详解】求导：$f(x^3-1)\cdot3x^2=1$，即 $f(x^3-1)=\frac{1}{3x^2}$。
令 $x^3-1=7\Rightarrow x=2$，故 $f(7)=\frac{1}{3\cdot4}=\frac1{12}$。
【易错点】变上限积分上限是 $x^3-1$，求导要乘 $(x^3-1)'=3x^2$。` },
    { n: 17, q: R`设 $f(x)$ 是连续函数，且 $f(x)=x+2\displaystyle\int_0^1f(t)\,dt$，则 $f(x)=$______。`, a: R`$x-1.$`, sol: R`【思路】$\int_0^1f$ 是常数，设为 $A$，解一次方程。
【详解】设 $A=\int_0^1f(t)dt$，则 $f(x)=x+2A$。代入：
$$A=\int_0^1(x+2A)\mathrm{d}x=\frac12+2A\Rightarrow A=-\frac12.$$
故 $f(x)=x-1$。
【易错点】把定积分视为常数是解此类「函数方程」的关键。` },
    { n: 18, q: R`$\displaystyle\int_0^1\frac{x\,dx}{(2-x^2)\sqrt{1-x^2}}=$______。`, a: R`$\frac{\pi}{4}.$`, sol: R`【思路】令 $x=\sin t$，化为 $\frac{\sin t}{1+\cos^2t}$ 型，再用 $u=\cos t$。
【详解】$x=\sin t$，$\mathrm{d}x=\cos t\,\mathrm{d}t$：
$$\int_0^{\pi/2}\frac{\sin t\cos t}{(2-\sin^2t)\cos t}\mathrm{d}t=\int_0^{\pi/2}\frac{\sin t}{1+\cos^2t}\mathrm{d}t.$$
令 $u=\cos t$，$\mathrm{d}u=-\sin t\,\mathrm{d}t$：$=\int_0^1\frac{\mathrm{d}u}{1+u^2}=\frac\pi4$。
【易错点】$2-\sin^2t=1+\cos^2t$；换元后区间反向再取负号。` },
    { n: 19, q: R`$\displaystyle\int_0^{\pi^2}\sqrt{x}\cos\sqrt{x}\,dx=$______。`, a: R`$-4\pi.$`, sol: R`【思路】令 $t=\sqrt x$ 化为 $\int t^2\cos t$ 的分部积分。
【详解】$t=\sqrt x$，$x=t^2$，$\mathrm{d}x=2t\,\mathrm{d}t$：$=\int_0^\pi t\cos t\cdot2t\,\mathrm{d}t=2\int_0^\pi t^2\cos t\,\mathrm{d}t$。
$\int t^2\cos t\,\mathrm{d}t=t^2\sin t+2t\cos t-2\sin t$。代入：$[t^2\sin t+2t\cos t-2\sin t]_0^\pi=(0-2\pi-0)-0=-2\pi$。
故原式 $=2\cdot(-2\pi)=-4\pi$。
【易错点】$t=\sqrt x$ 时 $\mathrm{d}x=2t\,\mathrm{d}t$，别忘了因子 $t$；$\int t^2\cos t$ 用两次分部积分。` },
    { n: 20, q: R`$\displaystyle\int_{-\frac{\pi}{2}}^{\frac{\pi}{2}}\left[\cos^2x+\int_0^xe^{-t^2}\,dt\right]\sin^2x\,dx=$______。`, a: R`$\frac{\pi}{8}.$`, sol: R`【思路】拆成两项，第一项用倍角公式，第二项用奇偶性。
【详解】$\int_{-\pi/2}^{\pi/2}\cos^2x\sin^2x\,\mathrm{d}x=\frac14\int_{-\pi/2}^{\pi/2}\sin^22x\,\mathrm{d}x=\frac14\cdot\frac12\int_{-\pi/2}^{\pi/2}(1-\cos4x)\mathrm{d}x=\frac14\cdot\frac12\cdot\pi=\frac\pi8$。
第二项：$\sin^2x$ 为偶、$\int_0^xe^{-t^2}dt$ 为奇，乘积为奇函数，积分 $=0$。故原式 $=\frac\pi8$。
【易错点】识别第二项为奇函数（偶×奇=奇）是简化关键。` },
    { n: 21, q: R`$\displaystyle\int_0^{\pi}x\sqrt{\cos^2x-\cos^4x}\,dx=$______。`, a: R`$\frac{\pi}{2}.$`, sol: R`【思路】化简根式后利用 $\int_0^\pi xg(\sin x)dx=\frac\pi2\int_0^\pi g(\sin x)dx$。
【详解】$\sqrt{\cos^2x-\cos^4x}=|\cos x|\sqrt{1-\cos^2x}=|\cos x||\sin x|=|\sin x\cos x|$，它是 $\sin x$ 的函数。
由 $\int_0^\pi xg(\sin x)\mathrm{d}x=\frac\pi2\int_0^\pi g(\sin x)\mathrm{d}x$：
$$I=\frac\pi2\int_0^\pi|\sin x\cos x|\mathrm{d}x=\frac\pi2\cdot2\int_0^{\pi/2}\sin x\cos x\,\mathrm{d}x=\pi\left[\frac{\sin^2x}{2}\right]_0^{\pi/2}=\frac\pi2.$$
【易错点】先化简 $|\sin x\cos x|$，再用对称公式；$\int_0^{\pi/2}\sin x\cos x\,dx=\frac12$。` },
    { n: 22, q: R`设 $a>0$，则 $\displaystyle\int_0^{2a}x\sqrt{2ax-x^2}\,dx=$______。`, a: R`$\frac{\pi}{2}a^3.$`, sol: R`【思路】配方成半圆，用对称性。
【详解】$2ax-x^2=a^2-(x-a)^2$。令 $u=x-a$：
$$\int_{-a}^a(u+a)\sqrt{a^2-u^2}\,\mathrm{d}u=\int_{-a}^au\sqrt{a^2-u^2}\,\mathrm{d}u+a\int_{-a}^a\sqrt{a^2-u^2}\,\mathrm{d}u.$$
第一项被积为奇函数，积分 $=0$；第二项是半径 $a$ 的半圆面积 $\frac{\pi a^2}{2}$。故 $=a\cdot\frac{\pi a^2}{2}=\frac{\pi a^3}{2}$。
【易错点】换元 $u=x-a$ 后把 $x\sqrt{a^2-u^2}$ 拆成奇函数项与半圆面积项。` },
    { n: 23, q: R`设 $f(x)=x-\displaystyle\int_0^{\pi}f(x)\cos x\,dx$，则 $f(x)=$______。`, a: R`$f(x)=x+2.$`, sol: R`【思路】把定积分设为常数 $A$，再代入求 $A$。
【详解】设 $A=\int_0^\pi f(x)\cos x\,\mathrm{d}x$，则 $f=x-A$。代入：
$$A=\int_0^\pi(x-A)\cos x\,\mathrm{d}x=\int_0^\pi x\cos x\,\mathrm{d}x-A\int_0^\pi\cos x\,\mathrm{d}x.$$
$\int_0^\pi\cos x\,dx=0$，$\int_0^\pi x\cos x\,dx=[x\sin x+\cos x]_0^\pi=-2$。故 $A=-2$，$f=x+2$。
【易错点】$\int_0^\pi\cos x\,dx=0$ 使 $A$ 的方程很简洁；$\int_0^\pi x\cos x\,dx=-2$。` },
    { n: 24, q: R`设 $f(x)$ 为连续函数，且 $\displaystyle\int_0^xf(t)\,dt=3x^3-x\int_{-1}^{1}f(t)\,dt$，则 $f(x)=$______。`, a: R`$9x^2-2.$`, sol: R`【思路】把 $\int_{-1}^1f$ 设为常数 $A$，求导得 $f$，再由 $A$ 的定义定出 $A$。
【详解】设 $A=\int_{-1}^1f(t)\mathrm{d}t$，则 $\int_0^xf(t)dt=3x^3-xA$。求导：$f(x)=9x^2-A$。
于是 $A=\int_{-1}^1(9t^2-A)\mathrm{d}t=9\cdot\frac23-2A=6-2A$，得 $A=2$。故 $f(x)=9x^2-2$。
【易错点】先由求导得 $f$ 含未知常数 $A$，再用 $A=\int_{-1}^1f$ 自洽求 $A$。` },
    { n: 25, q: R`$\displaystyle\lim_{n\to\infty}\frac{1}{n^2}\left[\sqrt{n^2-1}+\sqrt{n^2-2^2}+\cdots+\sqrt{n^2-(n-1)^2}\right]=$______。`, a: R`$\frac{\pi}{4}.$`, sol: R`【思路】提出 $\frac1n$ 化为黎曼和。
【详解】原式 $=\lim\frac{1}{n}\sum_{k=1}^{n-1}\frac{\sqrt{n^2-k^2}}{n}=\lim\frac1n\sum_{k=1}^{n-1}\sqrt{1-\left(\frac kn\right)^2}=\int_0^1\sqrt{1-x^2}\mathrm{d}x=\frac\pi4$。
【易错点】$\frac{1}{n^2}\sqrt{n^2-k^2}=\frac1n\sqrt{1-(k/n)^2}$；$\int_0^1\sqrt{1-x^2}dx$ 是四分之一单位圆面积。` },
    { n: 26, q: R`$\displaystyle\lim_{n\to\infty}\frac{1}{n}\left[\sqrt{1+\cos\frac{\pi}{n}}+\sqrt{1+\cos\frac{2\pi}{n}}+\cdots+\sqrt{1+\cos\frac{n\pi}{n}}\right]=$______。`, a: R`$\frac{2\sqrt{2}}{\pi}.$`, sol: R`【思路】黎曼和 + 半角公式。
【详解】原式 $=\int_0^1\sqrt{1+\cos\pi x}\,\mathrm{d}x=\int_0^1\sqrt2\left|\cos\frac{\pi x}{2}\right|\mathrm{d}x=\sqrt2\int_0^1\cos\frac{\pi x}{2}\mathrm{d}x=\sqrt2\cdot\frac2\pi=\frac{2\sqrt2}{\pi}$。
【易错点】$1+\cos\theta=2\cos^2\frac\theta2$；在 $[0,1]$ 上 $\cos\frac{\pi x}{2}\ge0$ 故去绝对值。` },
    { n: 27, q: R`$\displaystyle\lim_{n\to\infty}\int_0^1e^{-x}\sin nx\,dx=$______。`, a: R`$0.$`, sol: R`【思路】直接积分后用有界性估计。
【详解】$\int_0^1e^{-x}\sin nx\,\mathrm{d}x=\frac{-e^{-x}(\sin nx+n\cos nx)}{1+n^2}\Big|_0^1=\frac{-e^{-1}(\sin n+n\cos n)+n}{1+n^2}$。
分子被 $n+1$ 控制，分母为 $n^2+1$，故极限为 $0$。
【易错点】$\int e^{ax}\sin bx\,dx$ 的原函数；用夹逼/有界性说明趋于 0（Riemann–Lebesgue）。` },
    { n: 28, q: R`设函数 $f(x)$ 连续，且 $\displaystyle\int_0^xf(t-x)\,dt=(1+x^2)^x$，则 $\displaystyle\int_{-1}^{1}f(x)\,dx=$______。`, a: R`$\frac{3}{2}.$`, sol: R`【思路】换元把左端化为 $\int_{-x}^0f$，再用 $x=\pm1$ 代入。
【详解】令 $u=t-x$，$\mathrm{d}t=\mathrm{d}u$：$\int_{-x}^0f(u)\mathrm{d}u=(1+x^2)^x$。
取 $x=1$：$\int_{-1}^0f(u)\mathrm{d}u=2$；取 $x=-1$：$\int_1^0f(u)\mathrm{d}u=(2)^{-1}=\frac12$，即 $\int_0^1f=-\frac12$。
故 $\int_{-1}^1f=\int_{-1}^0f+\int_0^1f=2-\frac12=\frac32$。
【易错点】换元后积分区间为 $[-x,0]$；$x=-1$ 时右端为 $(1+1)^{-1}=\frac12$。` },
    { n: 29, q: R`若 $\displaystyle\int_0^xf(t)\,dt=xe^{-x}$，则 $\displaystyle\int_1^{+\infty}\frac{f(\ln x)}{x}\,dx=$______。`, a: R`$0.$`, sol: R`【思路】换元 $u=\ln x$，把所求积分化为 $\int_0^\infty f(u)du$，再由条件求 $f$。
【详解】$\int_1^{+\infty}\frac{f(\ln x)}{x}\mathrm{d}x\xlongequal{u=\ln x}\int_0^{+\infty}f(u)\mathrm{d}u$。
由 $\int_0^xf(t)dt=xe^{-x}$ 求导：$f(x)=e^{-x}(1-x)$。故
$$\int_0^{+\infty}(1-u)e^{-u}\mathrm{d}u=\int_0^\infty e^{-u}\mathrm{d}u-\int_0^\infty ue^{-u}\mathrm{d}u=1-1=0.$$
【易错点】$f(x)=(xe^{-x})'=e^{-x}(1-x)$；$\int_0^\infty ue^{-u}du=1$。` },
    { n: 30, q: R`$\displaystyle\int_2^{+\infty}\frac{dx}{(x+7)\sqrt{x-2}}=$______。`, a: R`$\frac{\pi}{3}.$`, sol: R`【思路】令 $t=\sqrt{x-2}$ 化为有理函数积分。
【详解】$t=\sqrt{x-2}$，$x=t^2+2$，$\mathrm{d}x=2t\,\mathrm{d}t$：
$$\int_0^\infty\frac{2t\,\mathrm{d}t}{(t^2+9)t}=\int_0^\infty\frac{2\,\mathrm{d}t}{t^2+9}=\frac23\left[\arctan\frac t3\right]_0^\infty=\frac23\cdot\frac\pi2=\frac\pi3.$$
【易错点】换元后分母 $x+7=t^2+9$；$\int_0^\infty\frac{dt}{t^2+9}=\frac{\pi}{2\cdot3}$。` },
    { n: 31, q: R`函数 $y=\dfrac{x^2}{\sqrt{1-x^2}}$ 在区间 $\left[\dfrac{1}{2},\dfrac{\sqrt{3}}{2}\right]$ 上的平均值为______。`, a: R`$\frac{\sqrt{3}+1}{12}\pi.$`, sol: R`【思路】平均值 $=\frac{1}{b-a}\int_a^by\,dx$，用三角换元。
【详解】$x=\sin t$：$\int\frac{x^2}{\sqrt{1-x^2}}\mathrm{d}x=\int\sin^2t\,\mathrm{d}t=\frac t2-\frac{\sin2t}{4}$。
$x=\frac12\Rightarrow t=\frac\pi6$；$x=\frac{\sqrt3}{2}\Rightarrow t=\frac\pi3$。故积分 $=\left[\frac t2-\frac{\sin2t}{4}\right]_{\pi/6}^{\pi/3}=\frac\pi{12}$。
平均值 $=\frac{\pi/12}{\frac{\sqrt3}{2}-\frac12}=\frac{\pi}{12}\cdot\frac{2}{\sqrt3-1}=\frac{\pi(\sqrt3+1)}{12}$。
【易错点】平均值要除以区间长度 $\frac{\sqrt3-1}{2}$；有理化 $\frac{2}{\sqrt3-1}=\sqrt3+1$。` },
    { n: 32, q: R`由曲线 $y=x+\dfrac{1}{x}$，$x=2$ 及 $y=2$ 所围图形的面积 $S=$______。`, a: R`$\ln2-\frac{1}{2}.$`, sol: R`【思路】先求交点定积分限，再判断上下曲线。
【详解】$x+\frac1x=2\Rightarrow x^2-2x+1=0\Rightarrow x=1$。故区域为 $1\le x\le2$，上界 $y=x+\frac1x$、下界 $y=2$（因 $x+\frac1x\ge2$）。
$$S=\int_1^2\left(x+\frac1x-2\right)\mathrm{d}x=\left[\frac{x^2}{2}+\ln x-2x\right]_1^2=\left(2+\ln2-4\right)-\left(\frac12-2\right)=\ln2-\frac12.$$
【易错点】由 $x+\frac1x\ge2$（均值不等式）知曲线在上方；积分限由交点 $x=1$ 定出。` },
    { n: 33, q: R`设曲线的极坐标方程为 $\rho=e^{a\theta}(a>0)$，则该曲线上相应于 $\theta$ 从 $0$ 变到 $2\pi$ 的一段弧与极轴所围成的图形的面积为______。`, a: R`$\frac{1}{4a}(e^{4\pi a}-1).$`, sol: R`【思路】极坐标面积公式 $S=\frac12\int\rho^2d\theta$。
【详解】$S=\frac12\int_0^{2\pi}e^{2a\theta}\mathrm{d}\theta=\frac12\cdot\frac{e^{2a\theta}}{2a}\Big|_0^{2\pi}=\frac{1}{4a}(e^{4\pi a}-1)$。
【易错点】极坐标面积公式是 $\frac12\int\rho^2d\theta$（不要漏 $\frac12$）；$\int e^{2a\theta}d\theta=\frac{e^{2a\theta}}{2a}$。` },
    { n: 34, q: R`（数三不要求）曲线 $y=\displaystyle\int_0^x\tan t\,dt\left(0\leqslant x\leqslant\dfrac{\pi}{4}\right)$ 的弧长 $s=$______。`, a: R`$\ln(1+\sqrt{2}).$`, sol: R`【思路】弧长公式 $s=\int\sqrt{1+y'^2}dx$，注意 $y'=\tan x$。
【详解】$y'=\tan x$，$\sqrt{1+y'^2}=\sqrt{1+\tan^2x}=\sec x$。
$$s=\int_0^{\pi/4}\sec x\,\mathrm{d}x=\left[\ln(\sec x+\tan x)\right]_0^{\pi/4}=\ln(\sqrt2+1)-\ln1=\ln(1+\sqrt2).$$
【易错点】$y=\int_0^x\tan t\,dt$ 的导数由变上限积分得 $y'=\tan x$；$\int\sec x\,dx=\ln|\sec x+\tan x|$。` },
    { n: 35, q: R`（数三不要求）一根长为 $1$ 的细棒位于 $x$ 轴的区间 $[0,1]$ 上，若其线密度 $\rho=-x^2+2x+1$，则该细棒的质心坐标 $\bar{x}=$______。`, a: R`$\frac{11}{20}.$`, sol: R`【思路】$\bar x=\frac{\int_0^1x\rho\,dx}{\int_0^1\rho\,dx}$。
【详解】$\int_0^1\rho\,\mathrm{d}x=\int_0^1(-x^2+2x+1)\mathrm{d}x=-\frac13+1+1=\frac53$。
$\int_0^1x\rho\,\mathrm{d}x=\int_0^1(-x^3+2x^2+x)\mathrm{d}x=-\frac14+\frac23+\frac12=\frac{11}{12}$。
$\bar x=\frac{11/12}{5/3}=\frac{11}{20}$。
【易错点】质心是「一阶矩 / 质量」；$\int_0^1x\rho$ 与 $\int_0^1\rho$ 都要算。` },
    { n: 36, q: R`计算 $\int_0^1\frac{f(x)}{\sqrt{x}}\mathrm{d}x$，其中 $f(x)=\int_1^x\frac{\ln(1+t)}{t}\mathrm{d}t$。`, a: R`$8-2\pi-4\ln2.$`, sol: R`【思路】分部积分，$u=f(x)$，$\mathrm{d}v=\frac{dx}{\sqrt x}$，再用 $f(1)=0$。
【详解】$v=2\sqrt x$，$f(1)=0$：
$$I=\left[2\sqrt xf(x)\right]_0^1-\int_0^12\sqrt x\cdot\frac{\ln(1+x)}{x}\mathrm{d}x=0-2\int_0^1\frac{\ln(1+x)}{\sqrt x}\mathrm{d}x.$$
令 $x=t^2$：$I=-4\int_0^1\ln(1+t^2)\mathrm{d}t$。
$\int_0^1\ln(1+t^2)\mathrm{d}t=[t\ln(1+t^2)]_0^1-\int_0^1\frac{2t^2}{1+t^2}\mathrm{d}t=\ln2-2\int_0^1\left(1-\frac1{1+t^2}\right)\mathrm{d}t=\ln2-2+\frac\pi2$。
故 $I=-4(\ln2-2+\frac\pi2)=8-2\pi-4\ln2$。
【易错点】分部积分后 $f(1)=0$ 使边界项消失；换元 $x=t^2$ 得 $\int\ln(1+t^2)$。` },
    { n: 37, q: R`计算积分 $\int_{\frac{1}{2}}^{\frac{3}{2}}\frac{\mathrm{d}x}{\sqrt{|x-x^2|}}$。`, a: R`$\frac{\pi}{2}+\ln(2+\sqrt{3}).$`, sol: R`【思路】以 $x=1$ 为分界去掉绝对值，分别配方。
【详解】$x-x^2=x(1-x)$：在 $[\frac12,1]$ 上为正，$[1,\frac32]$ 上为负。
$$\int_{1/2}^1\frac{\mathrm{d}x}{\sqrt{x(1-x)}}=\int_{1/2}^1\frac{\mathrm{d}x}{\sqrt{\frac14-(x-\frac12)^2}}=\left[\arcsin(2x-1)\right]_{1/2}^1=\frac\pi2.$$
$$\int_1^{3/2}\frac{\mathrm{d}x}{\sqrt{x^2-x}}=\int_1^{3/2}\frac{\mathrm{d}x}{\sqrt{(x-\frac12)^2-\frac14}}=\left[\operatorname{arcosh}(2x-1)\right]_1^{3/2}=\ln(2+\sqrt3).$$
合计 $\frac\pi2+\ln(2+\sqrt3)$。
【易错点】分界点 $x=1$；$\operatorname{arcosh}2=\ln(2+\sqrt3)$。` },
    { n: 38, q: R`求极限 $\lim\limits_{x\to0}\frac{\int_0^x\left[\int_0^{u^2}\arctan(1+t)\mathrm{d}t\right]\mathrm{d}u}{x(1-\cos x)}$。`, a: R`$\frac{\pi}{6}.$`, sol: R`【思路】用等价无穷小估计分子分母的阶。
【详解】内层 $\int_0^{u^2}\arctan(1+t)dt\sim\arctan1\cdot u^2=\frac\pi4u^2$。故分子 $\sim\int_0^x\frac\pi4u^2du=\frac{\pi}{12}x^3$。
分母 $\sim x\cdot\frac{x^2}{2}=\frac{x^3}{2}$。故极限 $=\frac{\pi/12}{1/2}=\frac\pi6$。
【易错点】$\arctan(1+0)=\frac\pi4$；分子是三阶无穷小（两次积分），分母也是三阶。` },
    { n: 39, q: R`设 $f(x)$ 为非负连续函数，且 $f(x)\int_0^xf(x-t)\mathrm{d}t=\sin^4x$，求 $f(x)$ 在 $\left[0,\frac{\pi}{2}\right]$ 上的平均值。`, a: R`$\sqrt{\frac{3}{2\pi}}.$`, sol: R`【思路】换元后令 $F(x)=\int_0^xf$，把方程化为 $(F^2)'=2\sin^4x$。
【详解】$\int_0^xf(x-t)dt=\int_0^xf(u)du=F(x)$，故 $F'F=\sin^4x$，即 $\frac12(F^2)'=\sin^4x$。
$F^2=2\int_0^x\sin^4t\,dt$（$F(0)=0$），$F=\sqrt{2\int_0^x\sin^4t\,dt}$。
平均值 $=\frac{1}{\pi/2}\int_0^{\pi/2}f\,dx=\frac2\pi[F(\frac\pi2)-F(0)]=\frac2\pi\sqrt{2\int_0^{\pi/2}\sin^4t\,dt}$。
$\int_0^{\pi/2}\sin^4t\,dt=\frac{3\pi}{16}$，故 $=\frac2\pi\sqrt{\frac{3\pi}{8}}=\sqrt{\frac{3}{2\pi}}$。
【易错点】关键是 $F'F=\frac12(F^2)'$；平均值用 $F$ 的端点差表示。` },
    { n: 40, q: R`设 $f(x)$ 在 $x=a$ 的某邻域内可导，且 $f(a)\neq0$，求极限
$$\lim_{x\to a}\left(\frac{1}{(x-a)f(a)}-\frac{1}{\int_a^xf(t)\mathrm{d}t}\right).$$`, a: R`$\frac{f'(a)}{2f^2(a)}.$`, sol: R`【思路】通分后用泰勒展开到二阶。
【详解】令 $G(x)=\int_a^xf(t)dt$，则 $G(a)=0,G'(a)=f(a),G''(a)=f'(a)$，$G(x)=f(a)(x-a)+\frac{f'(a)}{2}(x-a)^2+o((x-a)^2)$。
$$\frac{1}{(x-a)f(a)}-\frac{1}{G(x)}=\frac{G(x)-(x-a)f(a)}{(x-a)f(a)G(x)}.$$
分子 $=\frac{f'(a)}{2}(x-a)^2+o((x-a)^2)$；分母 $\approx(x-a)f(a)\cdot f(a)(x-a)=f^2(a)(x-a)^2$。
故极限 $=\frac{f'(a)/2}{f^2(a)}=\frac{f'(a)}{2f^2(a)}$。
【易错点】分母用 $G(x)\approx f(a)(x-a)$ 估计；分子需展开到 $(x-a)^2$ 项。` },
    { n: 41, q: R`函数 $f(x)$ 在 $[0,+\infty)$ 上可导，$f(0)=0$，且其反函数为 $g(x)$，若 $\int_x^{x+f(x)}g(t-x)\mathrm{d}t=x^2\ln(1+x)$，求 $f(x)$。`, a: R`$f(x)=(2x+1)\ln(1+x)-x.$`, sol: R`【思路】换元 $u=t-x$ 后用 $g(f(x))=x$ 化简，再积分。
【详解】$u=t-x$：$\int_0^{f(x)}g(u)\mathrm{d}u=x^2\ln(1+x)$。求导：
$$g(f(x))f'(x)=2x\ln(1+x)+\frac{x^2}{1+x}.$$
由 $g(f(x))=x$：$xf'(x)=2x\ln(1+x)+\frac{x^2}{1+x}$，$f'(x)=2\ln(1+x)+\frac{x}{1+x}$。
$f=\int\left(2\ln(1+x)+\frac{x}{1+x}\right)\mathrm{d}x=2(1+x)\ln(1+x)-2(1+x)+x-\ln(1+x)+C$。
由 $f(0)=0$ 得 $C=2$，故 $f(x)=(2x+1)\ln(1+x)-x$。
【易错点】反函数关系 $g(f(x))=x$ 是化简关键；积分 $\int\ln(1+x)dx=(1+x)\ln(1+x)-(1+x)$。` },
    { n: 42, q: R`设函数 $S(x)=\int_0^x|\cos t|\mathrm{d}t$，
(1) 当 $n$ 为正整数，且 $n\pi\leqslant x<(n+1)\pi$ 时，证明 $2n\leqslant S(x)<2(n+1)$；
(2) 求 $\lim\limits_{x\to+\infty}\frac{S(x)}{x}$。`, a: R`(1) 提示：当 $n\pi\leqslant x<(n+1)\pi$ 时，$\int_0^{n\pi}|\cos x|\mathrm{d}x\leqslant S(x)<\int_0^{(n+1)\pi}|\cos x|\mathrm{d}x$，再注意到 $|\cos x|$ 以 $\pi$ 为周期；(2) $\frac{2n}{(n+1)\pi}\leqslant\frac{S(x)}{x}<\frac{2(n+1)}{n\pi}$，$\lim\limits_{x\to+\infty}\frac{S(x)}{x}=\frac{2}{\pi}$。`, sol: R`【思路】(1) 用 $|\cos x|$ 的周期性算出每个周期上的积分；(2) 夹逼。
【详解】(1) 因 $|\cos x|$ 以 $\pi$ 为周期且 $\int_0^\pi|\cos x|dx=2$，故 $\int_0^{n\pi}|\cos x|dx=2n$。
当 $n\pi\le x<(n+1)\pi$：$S(x)\ge\int_0^{n\pi}|\cos|=2n$；$S(x)<\int_0^{(n+1)\pi}|\cos|=2(n+1)$。
(2) 由 (1) 及 $n\pi\le x<(n+1)\pi$：$\frac{2n}{(n+1)\pi}<\frac{S(x)}{x}\le\frac{2(n+1)}{n\pi}$。令 $x\to+\infty$（$n\to\infty$），两端都趋于 $\frac2\pi$，故极限 $=\frac2\pi$。
【易错点】$\int_0^\pi|\cos x|dx=2$；夹逼时注意 $x$ 与 $n\pi,(n+1)\pi$ 的大小关系。` },
    { n: 43, q: R`(1) 比较 $\int_0^1|\ln t|[\ln(1+t)]^n\mathrm{d}t$ 与 $\int_0^1t^n|\ln t|\mathrm{d}t$ $(n=1,2,\cdots)$ 的大小，说明理由；
(2) 记 $u_n=\int_0^1|\ln t|[\ln(1+t)]^n\mathrm{d}t$ $(n=1,2,\cdots)$，求极限 $\lim\limits_{n\to\infty}u_n$。`, a: R`(1) 提示：利用不等式 $\frac{x}{1+x}<\ln(1+x)<x\ (x>0)$；(2) $0\leqslant u_n\leqslant\int_0^1t^n|\ln t|\mathrm{d}t$，$\int_0^1t^n|\ln t|\mathrm{d}t=-\int_0^1t^n\ln t\,\mathrm{d}t=-\frac{1}{n+1}\int_0^1\ln t\,\mathrm{d}t^{n+1}$，然后分部积分，$\lim\limits_{n\to\infty}u_n=0$。`, sol: R`【思路】(1) 用 $\ln(1+t)<t$ 比较被积函数；(2) 夹逼。
【详解】(1) 对 $t\in(0,1)$，$\ln(1+t)<t$（$x>0$ 时 $\ln(1+x)<x$），故 $[\ln(1+t)]^n<t^n$，从而
$$\int_0^1|\ln t|[\ln(1+t)]^n\mathrm{d}t<\int_0^1t^n|\ln t|\mathrm{d}t.$$
(2) 由 (1)，$0\le u_n\le\int_0^1t^n|\ln t|\mathrm{d}t$。而
$$\int_0^1t^n|\ln t|\mathrm{d}t=-\int_0^1t^n\ln t\,\mathrm{d}t=-\left[\frac{t^{n+1}}{n+1}\ln t\right]_0^1+\int_0^1\frac{t^n}{n+1}\mathrm{d}t=\frac{1}{(n+1)^2}.$$
故 $0\le u_n\le\frac{1}{(n+1)^2}\to0$，即 $\lim u_n=0$。
【易错点】$\int_0^1t^n|\ln t|dt=\frac{1}{(n+1)^2}$（分部积分，边界项为 0）。` },
    { n: 44, q: R`设 $f(x)$ 在 $[0,1]$ 上连续，在 $(0,1)$ 内可导，且满足
$$f(1)=k\int_0^{\frac{1}{k}}xe^{1-x}f(x)\mathrm{d}x\quad(k>1),$$
证明至少存在一点 $\xi\in(0,1)$，使得 $f'(\xi)=(1-\xi^{-1})f(\xi)$。`, a: R`提示：考虑辅助函数 $F(x)=xe^{1-x}f(x)$，由 $f(1)=k\int_0^{\frac{1}{k}}xe^{1-x}f(x)\mathrm{d}x$ 及积分中值定理知，$F(1)=F(c)$，对 $F(x)$ 在区间 $[c,1]$ 上用罗尔定理本题得证。`, sol: R`【思路】目标式即 $F'=0$，其中 $F=xe^{1-x}f(x)$；用积分中值定理造出 $F$ 的两个等值点。
【详解】令 $F(x)=xe^{1-x}f(x)$，则 $F'=e^{1-x}[f(1-x)+xf']$，$F'(\xi)=0$ 即 $f'(\xi)=\frac{\xi-1}{\xi}f(\xi)=(1-\xi^{-1})f(\xi)$。
$F(1)=1\cdot e^0f(1)=f(1)=k\int_0^{1/k}xe^{1-x}f(x)\mathrm{d}x=k\int_0^{1/k}F(x)\mathrm{d}x$。
由积分中值定理，存在 $c\in(0,\frac1k)$ 使 $\int_0^{1/k}F=F(c)\cdot\frac1k$，故 $F(1)=k\cdot F(c)\cdot\frac1k=F(c)$。
对 $F$ 在 $[c,1]$ 上用罗尔定理，存在 $\xi\in(c,1)$ 使 $F'(\xi)=0$，即所证。
【易错点】辅助函数 $F=xe^{1-x}f$ 的构造；由 $f(1)=k\int_0^{1/k}F$ 与中值定理得 $F(1)=F(c)$。` },
    { n: 45, q: R`设函数 $f(x)$ 在 $[0,3]$ 上连续，在 $(0,3)$ 内存在二阶导数，且
$$2f(0)=\int_0^2f(x)\mathrm{d}x=f(2)+f(3).$$
(1) 证明存在 $\eta\in(0,2)$，使 $f(\eta)=f(0)$；
(2) 证明存在 $\xi\in(0,3)$，使 $f''(\xi)=0$。`, a: R`提示：由 $2f(0)=\int_0^2f(x)\mathrm{d}x=f(2)+f(3)$ 及积分中值定理得 $2f(0)=2f(c)=f(2)+f(3)$，即 $f(0)=f(c)=\frac{f(2)+f(3)}{2}$，由介值定理得存在 $\xi\in[2,3]$，使得 $\frac{f(2)+f(3)}{2}=f(\xi)$，即 $f(0)=f(c)=f(\xi)$，然后由罗尔定理可证明本题。`, sol: R`【思路】(1) 积分中值定理；(2) 找到三个等值点，两次罗尔。
【详解】(1) 由积分中值定理，存在 $\eta\in(0,2)$ 使 $\int_0^2f=2f(\eta)$。又 $2f(0)=\int_0^2f$，故 $f(\eta)=f(0)$。
(2) 由 $\frac{f(2)+f(3)}{2}=f(0)$ 及介值定理（$f$ 在 $[2,3]$ 连续），存在 $d\in[2,3]$ 使 $f(d)=\frac{f(2)+f(3)}{2}=f(0)$。
于是 $f(0)=f(\eta)=f(d)$，其中 $\eta\in(0,2)$、$d\in[2,3]$。由罗尔定理：在 $[0,\eta]$ 上存在 $\xi_1$ 使 $f'(\xi_1)=0$；在 $[\eta,d]$ 上存在 $\xi_2$ 使 $f'(\xi_2)=0$；再在 $[\xi_1,\xi_2]$ 上用罗尔定理，存在 $\xi$ 使 $f''(\xi)=0$。
【易错点】(2) 关键是造出三个等值点 $0,\eta,d$，从而 $f'$ 有两个零点，再用罗尔得 $f''=0$。` },
    { n: 46, q: R`设 $f(x)$ 在 $[0,a]$ $(a>0)$ 上连续，且 $\int_0^af(x)\mathrm{d}x=0$。试证 $\exists\xi\in(0,a)$ 使 $f(a-\xi)=-f(\xi)$。`, a: R`提示：考虑 $F(x)=\int_{a-x}^xf(t)\mathrm{d}t.$`, sol: R`【思路】构造 $F(x)=\int_{a-x}^xf$，它在两端点取相同的值。
【详解】令 $F(x)=\int_{a-x}^xf(t)\mathrm{d}t$。则 $F(0)=\int_a^0f=-\int_0^af=0$，$F(a)=\int_0^af=0$。
由罗尔定理，存在 $\xi\in(0,a)$ 使 $F'(\xi)=0$。而 $F'(x)=f(x)+f(a-x)$（上限求导 $f(x)$，下限 $a-x$ 求导给 $-f(a-x)\cdot(-1)$）。
故 $f(\xi)+f(a-\xi)=0$，即 $f(a-\xi)=-f(\xi)$。
【易错点】$F'=f(x)+f(a-x)$ 的符号；$\int_0^af=0$ 使 $F(0)=F(a)=0$。` },
    { n: 47, q: R`设 $f(x)$ 在 $[0,1]$ 上连续，证明存在 $\xi\in(0,1)$，使 $\int_0^\xi f(t)\mathrm{d}t=(1-\xi)f(\xi)$；若又设 $f(x)>0$ 且单调减少，则这种 $\xi$ 是唯一的。`, a: R`提示：构造辅助函数用罗尔定理。`, sol: R`【思路】构造 $H(x)=(1-x)\int_0^xf$，两端点为零，用罗尔定理；唯一性用 $H'$ 严格单调。
【详解】令 $G(x)=\int_0^xf$，$H(x)=(1-x)G(x)$。$H(0)=1\cdot0=0$，$H(1)=0\cdot G(1)=0$。由罗尔定理，存在 $\xi\in(0,1)$ 使 $H'(\xi)=0$。
$H'=-G+(1-x)G'=-G+(1-x)f$。故 $H'(\xi)=0$ 即 $\int_0^\xi f=(1-\xi)f(\xi)$。
唯一性：$H''=-f+(1-x)f'-f=-2f+(1-x)f'$。当 $f>0$、$f'<0$ 时，$-2f<0$ 且 $(1-x)f'<0$，故 $H''<0$，$H'$ 严格递减，$H'=0$ 至多一个根。结合 $H(0)=H(1)=0$，这样的 $\xi$ 唯一。
【易错点】$H''<0$ 说明 $H'$ 严格单调，从而零点唯一。` },
    { n: 48, q: R`设 $y=f(x)$ 是区间 $[0,1]$ 上的任一非负连续函数。
(1) 试证存在 $x_0\in(0,1)$，使得在区间 $[0,x_0]$ 上以 $f(x_0)$ 为高的矩形面积，等于在区间 $[x_0,1]$ 上以 $y=f(x)$ 为曲边的曲边梯形面积。
(2) 又设 $f(x)$ 在区间 $(0,1)$ 内可导，且 $f'(x)>-\frac{2f(x)}{x}$，证明(1)中的 $x_0$ 是唯一的。`, a: R`提示：(1) 考虑辅助函数 $F(x)=x\int_x^1f(t)\mathrm{d}t$，对 $F(x)$ 在区间 $[0,1]$ 上用罗尔定理；(2) 考虑辅助函数 $\varphi(x)=\int_x^1f(t)\mathrm{d}t-xf(x)$，注意到 $\varphi'(x)<0$。`, sol: R`【思路】(1) 条件即 $x_0f(x_0)=\int_{x_0}^1f$，构造 $F=x\int_x^1f$；(2) 用导数判唯一。
【详解】(1) 令 $F(x)=x\int_x^1f(t)\mathrm{d}t$。$F(0)=0\cdot\int_0^1f=0$，$F(1)=1\cdot0=0$。由罗尔定理，存在 $x_0\in(0,1)$ 使 $F'(x_0)=0$。
$F'=\int_x^1f+x(-f(x))=\int_x^1f-xf(x)$，故 $\int_{x_0}^1f=x_0f(x_0)$，即矩形面积等于曲边梯形面积。
(2) 令 $\varphi(x)=\int_x^1f(t)dt-xf(x)$。$\varphi'=-f-f-xf'=-2f-xf'<0$（由 $f'>-\frac{2f}{x}$ 得 $-xf'<2f$，故 $-2f-xf'<0$）。故 φ 严格递减，零点 $x_0$ 唯一。
【易错点】(1) 的辅助函数 $F=x\int_x^1f$ 两端为零；(2) 由条件得 $\varphi'<0$ 即唯一。` },
    { n: 49, q: R`设函数 $f(x)$ 在 $[0,1]$ 上有连续一阶导数，且 $f(0)=0$，试证至少存在一点 $\xi\in[0,1]$，使
$$f'(\xi)=2\int_0^1f(x)\,\mathrm{d}x.$$`, a: R`提示：令 $F(x)=f(x)-2x\int_0^1f(x)\mathrm{d}x$，则 $F(0)=0$。$\int_0^1F(x)\mathrm{d}x=\int_0^1f(x)\mathrm{d}x-\int_0^12x\,\mathrm{d}x\cdot\int_0^1f(x)\mathrm{d}x=\int_0^1f(x)\mathrm{d}x-\int_0^1f(x)\mathrm{d}x=0$。由积分中值定理得，$\exists c\in(0,1)$，使得 $\int_0^1F(x)\mathrm{d}x=F(c)=0$。在区间 $[0,c]$ 上对 $F(x)$ 用罗尔定理本题得证。`, sol: R`【思路】构造 $F=f-2x\int_0^1f$，证 $F$ 在 $[0,1]$ 上积分为零，从而有 $F(c)=0$，再用罗尔。
【详解】令 $A=\int_0^1f(x)dx$，$F(x)=f(x)-2Ax$。$F(0)=f(0)-0=0$。
$\int_0^1F(x)dx=\int_0^1f-2A\int_0^1x\,dx=A-2A\cdot\frac12=0$。由积分中值定理，存在 $c\in(0,1)$ 使 $F(c)=0$。
于是 $F(0)=F(c)=0$，由罗尔定理存在 $\xi\in(0,c)$ 使 $F'(\xi)=0$。$F'=f'-2A$，即 $f'(\xi)=2\int_0^1f$。
【易错点】辅助函数 $F=f-2x\int_0^1f$ 使 $F(0)=0$ 且 $\int_0^1F=0$，从而 $F$ 有两个零点。` },
    { n: 50, q: R`设函数 $f(x)$ 在 $[-l,l]$ 上连续，在 $x=0$ 处可导，且 $f'(0)\neq0$。
(1) 证明：对 $\forall x\in(0,l)$，至少 $\exists\theta\in(0,1)$，使
$$\int_0^xf(t)\,\mathrm{d}t+\int_0^{-x}f(t)\,\mathrm{d}t=x\bigl[f(\theta x)-f(-\theta x)\bigr];$$
(2) 求极限 $\lim\limits_{x\to0^+}\theta$。`, a: R`(1) 对 $F(x)=\int_0^xf(t)\mathrm{d}t+\int_0^{-x}f(t)\mathrm{d}t$ 在区间 $[0,x]$ 上用拉格朗日中值定理；(2) $\frac{x[f(\theta x)-f(-\theta x)]}{2x^2\theta}=\frac{\int_0^xf(t)\mathrm{d}t+\int_0^{-x}f(t)\mathrm{d}t}{2x^2}$，$\lim\limits_{x\to0^+}\theta=\frac{1}{2}$。`, sol: R`【思路】(1) 构造 $F(u)=\int_0^uf+\int_0^{-u}f$，用拉格朗日中值定理；(2) 用 $f$ 在 0 的展开求 $\theta$ 的极限。
【详解】(1) 令 $F(u)=\int_0^uf(t)dt+\int_0^{-u}f(t)dt$。在 $[0,x]$ 上用拉格朗日中值定理：存在 $\theta\in(0,1)$ 使 $F(x)-F(0)=F'(\theta x)\cdot x$。
$F(0)=0$，$F'(u)=f(u)-f(-u)$（$\int_0^{-u}f$ 的导数为 $-f(-u)$）。故 $F(x)=x[f(\theta x)-f(-\theta x)]$，即所证。
(2) 由 (1)：$f(\theta x)-f(-\theta x)=\frac{F(x)}{x}$。当 $x\to0^+$，$F(x)\approx f'(0)x^2$（展开 $\int_0^{\pm x}f$ 得 $f'(0)x^2$），故 $\frac{F(x)}{x}\approx f'(0)x$。
又 $f(\theta x)-f(-\theta x)\approx2f'(0)\theta x$。比较得 $2\theta\to1$，即 $\lim\theta=\frac12$。
【易错点】$F'=f(u)-f(-u)$；$\theta$ 的极限由 $f(\theta x)-f(-\theta x)\approx2f'(0)\theta x$ 与 $F(x)/x\approx f'(0)x$ 比较得到。` },
    { n: 51, q: R`设 $f(x)$ 在 $[0,2\pi]$ 上具有二阶连续导数，且 $f''(x)\geqslant0$ 证明：
$$\int_0^{2\pi}f(x)\cos x\,\mathrm{d}x\geqslant0.$$`, a: R`提示：利用分部积分。`, sol: R`【思路】两次分部积分，把积分化为 $\int f''\cdot(1-\cos x)$，被积函数非负。
【详解】取 $K(x)=1-\cos x$，则 $K''=\cos x$，$K(0)=K(2\pi)=0$，$K'(0)=K'(2\pi)=0$，且 $K\ge0$。
两次分部积分：
$$\int_0^{2\pi}f\cos x\,dx=\int_0^{2\pi}fK''dx=[fK'-f'K]_0^{2\pi}+\int_0^{2\pi}f''K\,dx.$$
边界项因 $K,K'$ 在端点为零而消失，故 $=\int_0^{2\pi}f''(x)(1-\cos x)dx\ge0$。
【易错点】构造 $K=1-\cos x$ 满足 $K''=\cos x$ 且端点条件，使分部积分的边界项消失。` },
    { n: 52, q: R`设函数 $f(x)$ 在区间 $[0,1]$ 上可导，且 $|f'(x)|<M$ 证明：
$$\left|\int_0^1f(x)\,\mathrm{d}x-\frac{1}{n}\sum_{k=1}^{n}f\!\left(\frac{k}{n}\right)\right|\leqslant\frac{M}{2n}.$$`, a: R`提示：将 $[0,1]$ 区间 $n$ 等分。$\left|\int_0^1f(x)\mathrm{d}x-\frac{1}{n}\sum_{k=1}^nf\left(\frac{k}{n}\right)\right|=\left|\sum_{k=1}^n\int_{\frac{k-1}{n}}^{\frac{k}{n}}f(x)\mathrm{d}x-\frac{1}{n}\sum_{k=1}^nf\left(\frac{k}{n}\right)\right|=\left|\sum_{k=1}^n\int_{\frac{k-1}{n}}^{\frac{k}{n}}f(x)\mathrm{d}x-\sum_{k=1}^n\int_{\frac{k-1}{n}}^{\frac{k}{n}}f\left(\frac{k}{n}\right)\mathrm{d}x\right|\leqslant\sum_{k=1}^n\int_{\frac{k-1}{n}}^{\frac{k}{n}}\left|f(x)-f\left(\frac{k}{n}\right)\right|\mathrm{d}x$。然后利用拉格朗日中值定理可证本题。`, sol: R`【思路】把积分与和式的差写成各小区间上的差，再用 $|f(x)-f(k/n)|\le M|k/n-x|$ 积分。
【详解】$\int_0^1f-\frac1n\sum_{k=1}^nf(\frac kn)=\sum_{k=1}^n\int_{(k-1)/n}^{k/n}\left[f(x)-f\left(\frac kn\right)\right]\mathrm{d}x$。
对 $x\in[\frac{k-1}{n},\frac kn]$，由拉格朗日中值定理 $|f(x)-f(\frac kn)|\le M|\frac kn-x|$，故
$$\left|\int_{(k-1)/n}^{k/n}\left[f(x)-f\left(\frac kn\right)\right]\mathrm{d}x\right|\le M\int_0^{1/n}s\,\mathrm{d}s=\frac{M}{2n^2}.$$
对 $k=1,\dots,n$ 求和得 $\le n\cdot\frac{M}{2n^2}=\frac{M}{2n}$。
【易错点】每个小区间上的误差是 $\frac{M}{2n^2}$（不是 $\frac{M}{n^2}$），因为 $\int_0^{1/n}s\,ds=\frac{1}{2n^2}$。` },
    { n: 53, q: R`设 $f(x)$ 满足 $f(1)=1$，$f'(x)=\dfrac{1}{x^2+f^2(x)}\ (x\geqslant1)$，试证 $\lim\limits_{x\to+\infty}f(x)$ 存在且不超过 $1+\dfrac{\pi}{4}$。`, a: R`提示：利用单调有界准则证明 $\lim\limits_{x\to+\infty}f(x)$ 存在。`, sol: R`【思路】$f'>0$ 单调增；又 $f\ge1$ 使 $f'\le\frac{1}{x^2+1}$，积分得上界。
【详解】$f'(x)=\frac{1}{x^2+f^2(x)}>0$，故 $f$ 在 $[1,+\infty)$ 上单调增。
又 $f(x)\ge f(1)=1$，故 $f'(x)\le\frac{1}{x^2+1}$。于是
$$f(x)=1+\int_1^xf'(t)\mathrm{d}t\le1+\int_1^x\frac{\mathrm{d}t}{t^2+1}\le1+\int_1^{+\infty}\frac{\mathrm{d}t}{t^2+1}=1+\left(\frac\pi2-\frac\pi4\right)=1+\frac\pi4.$$
故 $f$ 单调增且有上界 $1+\frac\pi4$，极限存在且不超过 $1+\frac\pi4$。
【易错点】由 $f\ge1$ 得 $f^2\ge1$，从而 $f'\le\frac{1}{x^2+1}$；用 $\arctan$ 的原函数估计上界。` },
    { n: 54, q: R`（数三不要求）一容器的内侧是由图中曲线绕 $y$ 轴旋转一周而成的曲面，该曲线由
$$x^2+y^2=2y\ \left(y\geqslant\frac{1}{2}\right)\ \text{与}\ x^2+y^2=1\ \left(y\leqslant\frac{1}{2}\right)$$
连接而成。
（图：直角坐标系，横轴为 $x$、纵轴为 $y$。上方为圆 $x^2+y^2=2y$（圆心在 $y$ 轴上，$y$ 轴标有 $2$、$1$），下方为圆 $x^2+y^2=1$（$y$ 轴标有 $\frac{1}{2}$、$0$、$-1$，横轴标有 $1$）；两圆在 $y=\frac{1}{2}$ 处相接，右侧旁注“$x^2+y^2=2y$”与“$x^2+y^2=1$”。）
(1) 求容器的容积；
(2) 若将容器内盛满的水从容器顶部全部抽出，至少需要做多少功？
（长度单位：m，重力加速度为 $\mathrm{gm/s^2}$，水的密度为 $10^3\mathrm{kg/m^3}$）。`, a: R`(1) $\frac{9\pi}{4}$；(2) $\frac{27\times10^3}{8}$。`, sol: R`【思路】(1) 用 $V=\pi\int x^2dy$ 分段积分；(2) 用 $W=\rho g\int(\text{顶}-y)\pi x^2dy$。
【详解】(1) 下段 $y\in[-1,\frac12]$：$x^2=1-y^2$；上段 $y\in[\frac12,2]$：$x^2=2y-y^2$。
$$V=\pi\int_{-1}^{1/2}(1-y^2)\mathrm{d}y+\pi\int_{1/2}^2(2y-y^2)\mathrm{d}y=\frac{9\pi}{8}+\frac{9\pi}{8}=\frac{9\pi}{4}.$$
(2) 从顶部 $y=2$ 抽水，$W=10^3g\int_{-1}^2(2-y)\pi x^2\mathrm{d}y$。计算得
$$\int_{-1}^{1/2}(2-y)(1-y^2)\mathrm{d}y=\frac{153}{64},\quad\int_{1/2}^2(2-y)(2y-y^2)\mathrm{d}y=\frac{63}{64},$$
合计 $\frac{216}{64}=\frac{27}{8}$，故 $W=10^3g\pi\cdot\frac{27}{8}=\frac{27\times10^3}{8}\pi g$（即 $\frac{27\times10^3}{8}$，单位含 $\pi g$）。
【易错点】(1) 分界点 $y=\frac12$；(2) 功的微元是 $\rho g(\text{顶}-y)\pi x^2dy$，顶为 $y=2$。` },
    { n: 55, q: R`（数三不要求）设曲线 $L$ 的方程为 $y=\dfrac{1}{4}x^2-\dfrac{1}{2}\ln x\ (1\leqslant x\leqslant\mathrm{e})$。
(1) 求 $L$ 的弧长；
(2) 设 $D$ 是由曲线 $L$，直线 $x=1$，$x=\mathrm{e}$ 及 $x$ 轴所围平面图形。求 $D$ 的形心的横坐标。`, a: R`(1) $\frac{e^2+1}{4}$；(2) $\frac{3(e^2+1)(e^2-3)}{4(e^3-7)}$。`, sol: R`【思路】(1) $1+y'^2$ 恰为完全平方；(2) 形心横坐标 $\bar x=\frac{\int xy\,dx}{\int y\,dx}$。
【详解】(1) $y'=\frac x2-\frac{1}{2x}$，$1+y'^2=1+\frac{x^2}{4}-\frac12+\frac{1}{4x^2}=\left(\frac x2+\frac1{2x}\right)^2$。
$$s=\int_1^e\left(\frac x2+\frac1{2x}\right)\mathrm{d}x=\left[\frac{x^2}{4}+\frac12\ln x\right]_1^e=\frac{e^2+1}{4}.$$
(2) $\int_1^ey\,dx=\int_1^e\left(\frac14x^2-\frac12\ln x\right)\mathrm{d}x=\frac{e^3-1}{12}-\frac12=\frac{e^3-7}{12}$。
$\int_1^exy\,dx=\int_1^e\left(\frac14x^3-\frac12x\ln x\right)\mathrm{d}x=\frac{e^4-1}{16}-\frac{e^2+1}{8}=\frac{e^4-2e^2-3}{16}$。
$$\bar x=\frac{(e^4-2e^2-3)/16}{(e^3-7)/12}=\frac{3(e^2-3)(e^2+1)}{4(e^3-7)}.$$
【易错点】$1+y'^2$ 是完全平方，开方后 $\frac x2+\frac1{2x}>0$；形心是「一阶矩/面积」。` },
    { n: 56, q: R`求曲线 $y=3-|x^2-1|$ 与 $x$ 轴围成的封闭图形绕直线 $y=3$ 旋转所得的旋转体体积。`, a: R`$\frac{448}{15}\pi.$`, sol: R`【思路】分段写出 $y$，用「垫圈法」：绕 $y=3$，外半径 $3$，内半径 $3-y$。
【详解】$|x|\le1$：$y=2+x^2$（$3-y=1-x^2$）；$1\le|x|\le2$：$y=4-x^2$（$3-y=x^2-1$）；交 $x$ 轴于 $x=\pm2$。
$$V=\pi\int_{-2}^2\left[9-(3-y)^2\right]\mathrm{d}x=2\pi\left\{\int_0^1\left[9-(1-x^2)^2\right]\mathrm{d}x+\int_1^2\left[9-(x^2-1)^2\right]\mathrm{d}x\right\}.$$
$\int_0^1(8+2x^2-x^4)dx=\frac{127}{15}$，$\int_1^2(8+2x^2-x^4)dx=\frac{97}{15}$。
$$V=2\pi\left(\frac{127}{15}+\frac{97}{15}\right)=2\pi\cdot\frac{224}{15}=\frac{448}{15}\pi.$$
【易错点】绕 $y=3$ 旋转用外半径 3、内半径 $3-y$；分段点 $x=\pm1$。` },
    { n: 57, q: R`设有抛物线 $\Gamma:y=a-bx^2\ (a>0,\ b>0)$，试确定常数 $a,b$ 的值，使得
(1) $\Gamma$ 与直线 $y=x+1$ 相切；
(2) $\Gamma$ 与 $x$ 轴所围图形绕 $y$ 轴旋转所得旋转体体积最大。`, a: R`$a=\frac{2}{3};b=\frac{3}{4}.$`, sol: R`【思路】(1) 相切给 $a$ 与 $b$ 的关系；(2) 用柱壳法写体积，再对 $b$ 求极值。
【详解】(1) 相切：斜率相等 $-2bx=1\Rightarrow x=-\frac{1}{2b}$；代入两式相等：$a-\frac{1}{4b}=1-\frac{1}{2b}$，得 $a=1-\frac{1}{4b}$。
(2) 体积（绕 $y$ 轴，柱壳）：$V=2\pi\int_0^{\sqrt{a/b}}x(a-bx^2)\mathrm{d}x=2\pi\left[\frac{ax^2}{2}-\frac{bx^4}{4}\right]_0^{\sqrt{a/b}}=\frac{\pi a^2}{2b}$。
代入 $a=1-\frac{1}{4b}$：$V=\frac{\pi}{2b}\left(1-\frac{1}{4b}\right)^2$。令 $t=\frac{1}{4b}$，$V=2\pi t(1-t)^2$，$\frac{dV}{dt}=2\pi(1-t)(1-3t)=0\Rightarrow t=\frac13$。
故 $b=\frac34$，$a=1-\frac13=\frac23$。
【易错点】相切条件含斜率与函数值；柱壳法体积 $\frac{\pi a^2}{2b}$，极值点 $t=\frac13$。` },
    { n: 58, q: R`设曲线 $y=\dfrac{1}{x}$ 与直线 $y=x$ 及 $y=2$ 所围区域为 $D$，
(1) 求区域 $D$ 分别绕 $x$ 轴和 $y$ 轴旋转所得旋转体的体积；
(2) 求区域 $D$ 分别绕 $x=2$ 和 $y=2$ 旋转所得旋转体的体积。`, a: R`(1) $V_x=\frac{8\pi}{3};V_y=\frac{11}{6}\pi$；(2) $V_{x=2}=\pi\left(\frac{25}{6}-4\ln2\right);V_{y=2}=4\pi\left(\frac{5}{6}-\ln2\right)$。`, sol: R`【思路】$D$ 的下边界在 $x\in[\frac12,1]$ 为 $y=\frac1x$、在 $[1,2]$ 为 $y=x$，上边界为 $y=2$。
【详解】(1) $V_x=\pi\int_{1/2}^1(4-\frac1{x^2})dx+\pi\int_1^2(4-x^2)dx=\pi+\frac{5\pi}{3}=\frac{8\pi}{3}$。
$V_y=2\pi\left[\int_{1/2}^1x(2-\frac1x)dx+\int_1^2x(2-x)dx\right]=2\pi\left[\frac14+\frac23\right]=\frac{11\pi}{6}$。
(2) 绕 $x=2$（柱壳）：$V_{x=2}=2\pi\left[\int_{1/2}^1(2-x)(2-\frac1x)dx+\int_1^2(2-x)^2dx\right]=2\pi\left[\frac74-2\ln2+\frac13\right]=\pi\left(\frac{25}{6}-4\ln2\right)$。
绕 $y=2$（垫圈，内半径 $2-y_{\text{下}}$）：$V_{y=2}=\pi\left[\int_{1/2}^1(2-\frac1x)^2dx+\int_1^2(2-x)^2dx\right]=\pi\left[3-4\ln2+\frac13\right]=4\pi\left(\frac56-\ln2\right)$。
【易错点】$D$ 下边界在 $x=1$ 处分段；绕 $y=2$ 用 $(2-y_{\text{下}})^2$（区域贴着 $y=2$）。` },
    { n: 59, q: R`求曲线 $y=x^2$ 与直线 $y=x$ 所围区域 $D$ 绕直线 $y=x$ 旋转一周所得旋转体的体积。`, a: R`$\frac{\sqrt{2}}{60}\pi.$`, sol: R`【思路】绕斜直线旋转，取沿 $y=x$ 的方向 $u$ 与垂直距离 $v$，用垫圈法。
【详解】令 $u=\frac{x+y}{\sqrt2}$（沿轴）、$v=\frac{y-x}{\sqrt2}$（到轴的距离）。$D$ 的下边界在轴上（$y=x$，$v=0$），上边界为 $y=x^2$，其到轴的距离 $r=\frac{x-x^2}{\sqrt2}$。
沿轴方向 $\frac{du}{dx}=\frac{1+2x}{\sqrt2}$，$u$ 从 0 到 $\sqrt2$。
$$V=\pi\int r^2\mathrm{d}u=\pi\int_0^1\frac{(x-x^2)^2}{2}\cdot\frac{1+2x}{\sqrt2}\mathrm{d}x=\frac{\pi}{2\sqrt2}\int_0^1(x-x^2)^2(1+2x)\mathrm{d}x.$$
$(x-x^2)^2(1+2x)=x^2-3x^4+2x^5$，$\int_0^1(x^2-3x^4+2x^5)dx=\frac13-\frac35+\frac13=\frac{1}{15}$。
故 $V=\frac{\pi}{2\sqrt2}\cdot\frac{1}{15}=\frac{\sqrt2\pi}{60}$。
【易错点】绕斜直线旋转要用垂直于轴的距离作半径；$(x-x^2)^2(1+2x)$ 展开后积分得 $\frac1{15}$。` },
    { n: 60, q: R`设平面域 $D$ 由曲线 $\rho=(1+\cos\theta)$ 所围成，试求
(1) 区域 $D$ 的面积；
(2) 区域 $D$ 绕极轴旋转一周所得旋转体的体积。`, a: R`(1) $\frac{3\pi}{2}$；(2) $\frac{8\pi}{3}$。`, sol: R`【思路】(1) 极坐标面积公式；(2) 绕极轴旋转的公式 $V=\frac{2\pi}{3}\int_0^\pi\rho^3\sin\theta\,d\theta$。
【详解】(1) $S=\frac12\int_0^{2\pi}(1+\cos\theta)^2\mathrm{d}\theta=\frac12\int_0^{2\pi}(1+2\cos\theta+\cos^2\theta)\mathrm{d}\theta=\frac12(2\pi+0+\pi)=\frac{3\pi}{2}$。
(2) $V=\frac{2\pi}{3}\int_0^\pi(1+\cos\theta)^3\sin\theta\,\mathrm{d}\theta$。令 $u=\cos\theta$：
$$V=\frac{2\pi}{3}\int_{-1}^1(1+u)^3\mathrm{d}u=\frac{2\pi}{3}\cdot\frac{(1+u)^4}{4}\Big|_{-1}^1=\frac{2\pi}{3}\cdot4=\frac{8\pi}{3}.$$
【易错点】绕极轴旋转公式 $V=\frac{2\pi}{3}\int_0^\pi\rho^3\sin\theta d\theta$；换元 $u=\cos\theta$ 后 $\int_{-1}^1(1+u)^3du=4$。` }
  ];
})();
