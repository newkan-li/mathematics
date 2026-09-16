window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["gs03_s3"].problems = [
    { n: 1, q: R`若 $f(x)$ 的导函数是 $\sin x$，则 $f(x)$ 有一个原函数为（ ）
（A）$1+\sin x$。　（B）$1-\sin x$。
（C）$1+\cos x$。　（D）$1-\cos x$。`, a: R`(B)`, sol: R`原书答案 (B)。` },
    { n: 2, q: R`设 $f(x)=\begin{cases}\cos x,x\geqslant0,\\\sin x,x<0,\end{cases}g(x)=\begin{cases}x\sin\dfrac{1}{x},&x\neq0,\\0,&x=0,\end{cases}$ 则在 $(-\infty,+\infty)$ 上（ ）
（A）$f(x)$ 与 $g(x)$ 都存在原函数。
（B）$f(x)$ 与 $g(x)$ 都不存在原函数。
（C）$f(x)$ 存在原函数，$g(x)$ 不存在原函数。
（D）$f(x)$ 不存在原函数，$g(x)$ 存在原函数。`, a: R`(D)`, sol: R`原书答案 (D)。` },
    { n: 3, q: R`（1）已知 $f(x)=\begin{cases}x^2,&0\leqslant x<1,\\1,&1\leqslant x\leqslant2,\end{cases}$ 设 $F(x)=\int_1^xf(t)\mathrm{d}t(0\leqslant x\leqslant2)$，则 $F(x)$ 为（ ）
（A）$\begin{cases}\dfrac{1}{3}x^3,&0\leqslant x<1,\\x,&1\leqslant x\leqslant2.\end{cases}$
（B）$\begin{cases}\dfrac{1}{3}x^3-\dfrac{1}{3},&0\leqslant x<1,\\x,&1\leqslant x\leqslant2.\end{cases}$
（C）$\begin{cases}\dfrac{1}{3}x^3,&0\leqslant x<1,\\x-1,&1\leqslant x\leqslant2.\end{cases}$
（D）$\begin{cases}\dfrac{1}{3}x^3-\dfrac{1}{3},&0\leqslant x<1,\\x-1,&1\leqslant x\leqslant2.\end{cases}$
（2）设 $f(x)=\begin{cases}\mathrm{e}^x,x\leqslant0,\\x^2+a,x>0.\end{cases}$ 则 $F(x)=\int_{-1}^xf(t)\mathrm{d}t$ 在 $x=0$ 处（ ）
（A）极限存在但不连续。　（B）连续但不可导。
（C）可导。　（D）是否可导与 $a$ 的取值有关。`, a: R`(1)(D) (2)(D)`, sol: R`原书答案 (1)(D) (2)(D)。` },
    { n: 4, q: R`设在区间 $[a,b]$ 上 $f(x)>0,f'(x)<0,f''(x)>0$。令 $S_1=\int_a^bf(x)\mathrm{d}x,S_2=f(b)(b-a),S_3=\dfrac{1}{2}[f(a)+f(b)](b-a)$，则（ ）
[图：$y=f(x)$ 的单调递减、下凸曲线，横轴 $x$ 上标有 $a,b$，曲线端点标 $f(a),f(b)$，图中以虚线绘出由 $x=a$ 到 $x=b$ 的曲边梯形]
（A）$S_1<S_2<S_3$。　（B）$S_2<S_1<S_3$。
（C）$S_3<S_1<S_2$。　（D）$S_2<S_3<S_1$。`, a: R`(B)`, sol: R`原书答案 (B)。` },
    { n: 5, q: R`设 $f(x)$ 连续，则 $\dfrac{\mathrm{d}}{\mathrm{d}x}\int_0^xtf(x^2-t^2)\mathrm{d}t=$（ ）
（A）$xf(x^2)$。　（B）$-xf(x^2)$。
（C）$2xf(x^2)$。　（D）$-2xf(x^2)$。`, a: R`(A)`, sol: R`原书答案 (A)。` },
    { n: 6, q: R`设 $f(x)$ 连续，且存在常数 $a$，满足 $5x^3+40=\int_a^xf(t)\mathrm{d}t$。当 $x\to0$ 时，$axf(x)$ 与 $c(\tan x-x)^k$ 是等价无穷小，则（ ）
（A）$k=3,c=4$。　（B）$k=2,c=-4$。
（C）$k=1,c=-30$。　（D）$k=1,c=-90$。`, a: R`(D)`, sol: R`原书答案 (D)。` },
    { n: 7, q: R`设 $a_n=\dfrac{3}{2}\int_0^{\frac{n}{n+1}}x^{n-1}\sqrt{1+x^n}\mathrm{d}x$，则极限 $\lim\limits_{n\to\infty}na_n$ 等于（ ）
（A）$(1+\mathrm{e})^{\frac{3}{2}}+1$。　（B）$(1+\mathrm{e}^{-1})^{\frac{3}{2}}-1$。
（C）$(1+\mathrm{e}^{-1})^{\frac{3}{2}}+1$。　（D）$(1+\mathrm{e})^{\frac{3}{2}}-1$。`, a: R`(B)`, sol: R`原书答案 (B)。` },
    { n: 8, q: R`$\lim\limits_{n\to\infty}\ln\sqrt[n]{\left(1+\dfrac{1}{n}\right)^2\left(1+\dfrac{2}{n}\right)^2\cdots\left(1+\dfrac{n}{n}\right)^2}$ 等于（ ）
（A）$\int_1^2\ln^2x\mathrm{d}x$。　（B）$2\int_1^2\ln x\mathrm{d}x$。
（C）$2\int_1^2\ln(1+x)\mathrm{d}x$。　（D）$\int_1^2\ln^2(1+x)\mathrm{d}x$。`, a: R`(B)`, sol: R`原书答案 (B)。` },
    { n: 9, q: R`设 $I_1=\int_0^{\frac{\pi}{2}}\sin(\sin x)\mathrm{d}x,I_2=\int_0^{\frac{\pi}{2}}\cos(\sin x)\mathrm{d}x$，则（ ）
（A）$I_1<1<I_2$。　（B）$1<I_1<I_2$。
（C）$I_2<1<I_1$。　（D）$I_1<I_2<1$。`, a: R`(A)`, sol: R`原书答案 (A)。` },
    { n: 10, q: R`设 $I=\int_0^{\frac{\pi}{4}}\ln\sin x\mathrm{d}x,J=\int_0^{\frac{\pi}{4}}\ln\cot x\mathrm{d}x,K=\int_0^{\frac{\pi}{4}}\ln\cos x\mathrm{d}x$，则 $I,J,K$ 的大小关系为（ ）
（A）$I<J<K$。　（B）$I<K<J$。
（C）$J<I<K$。　（D）$K<J<I$。`, a: R`(B)`, sol: R`原书答案 (B)。` },
    { n: 11, q: R`设 $I_k=\int_0^{k\pi}\mathrm{e}^{x^2}\sin x\mathrm{d}x(k=1,2,3)$，则有（ ）
（A）$I_1<I_2<I_3$。　（B）$I_3<I_2<I_1$。
（C）$I_2<I_3<I_1$。　（D）$I_2<I_1<I_3$。`, a: R`(D)`, sol: R`原书答案 (D)。` },
    { n: 12, q: R`曲线 $y=\sin^{\frac{3}{2}}x(0\leqslant x\leqslant\pi)$ 与 $x$ 轴围成的图形绕 $x$ 轴旋转所成的旋转体的体积为（ ）
（A）$\dfrac{4}{3}$。　（B）$\dfrac{4}{3}\pi$。　（C）$\dfrac{4}{3}\pi^2$。　（D）$\dfrac{2}{3}\pi$。`, a: R`(B)`, sol: R`原书答案 (B)。` },
    { n: 13, q: R`$\int\dfrac{x+5}{x^2-6x+13}\mathrm{d}x=$______。`, a: R`$\frac{1}{2}\ln(x^2-6x+13)+4\arctan\frac{x-3}{2}+C.$`, sol: R`原书答案 $\frac{1}{2}\ln(x^2-6x+13)+4\arctan\frac{x-3}{2}+C$。` },
    { n: 14, q: R`$\displaystyle\int\frac{\arcsin x}{x^2}\,dx=$______。`, a: R`$-\frac{\arcsin x}{x}-\ln\left(\frac{1}{x}+\sqrt{\frac{1}{x^2}-1}\right)+C.$`, sol: R`原书答案 $-\frac{\arcsin x}{x}-\ln\left(\frac{1}{x}+\sqrt{\frac{1}{x^2}-1}\right)+C$。` },
    { n: 15, q: R`$\displaystyle\int\frac{x^2e^x}{(x+2)^2}\,dx=$______。`, a: R`$-\frac{x^2e^x}{x+2}+xe^x-e^x+C.$`, sol: R`原书答案 $-\frac{x^2e^x}{x+2}+xe^x-e^x+C$。` },
    { n: 16, q: R`设 $f(x)$ 是连续函数，且 $\displaystyle\int_0^{x^3-1}f(t)\,dt=x$，则 $f(7)=$______。`, a: R`$\frac{1}{12}.$`, sol: R`原书答案 $\frac{1}{12}$。` },
    { n: 17, q: R`设 $f(x)$ 是连续函数，且 $f(x)=x+2\displaystyle\int_0^1f(t)\,dt$，则 $f(x)=$______。`, a: R`$x-1.$`, sol: R`原书答案 $x-1$。` },
    { n: 18, q: R`$\displaystyle\int_0^1\frac{x\,dx}{(2-x^2)\sqrt{1-x^2}}=$______。`, a: R`$\frac{\pi}{4}.$`, sol: R`原书答案 $\frac{\pi}{4}$。` },
    { n: 19, q: R`$\displaystyle\int_0^{\pi^2}\sqrt{x}\cos\sqrt{x}\,dx=$______。`, a: R`$-4\pi.$`, sol: R`原书答案 $-4\pi$。` },
    { n: 20, q: R`$\displaystyle\int_{-\frac{\pi}{2}}^{\frac{\pi}{2}}\left[\cos^2x+\int_0^xe^{-t^2}\,dt\right]\sin^2x\,dx=$______。`, a: R`$\frac{\pi}{8}.$`, sol: R`原书答案 $\frac{\pi}{8}$。` },
    { n: 21, q: R`$\displaystyle\int_0^{\pi}x\sqrt{\cos^2x-\cos^4x}\,dx=$______。`, a: R`$\frac{\pi}{2}.$`, sol: R`原书答案 $\frac{\pi}{2}$。` },
    { n: 22, q: R`设 $a>0$，则 $\displaystyle\int_0^{2a}x\sqrt{2ax-x^2}\,dx=$______。`, a: R`$\frac{\pi}{2}a^3.$`, sol: R`原书答案 $\frac{\pi}{2}a^3$。` },
    { n: 23, q: R`设 $f(x)=x-\displaystyle\int_0^{\pi}f(x)\cos x\,dx$，则 $f(x)=$______。`, a: R`$f(x)=x+2.$`, sol: R`原书答案 $f(x)=x+2$。` },
    { n: 24, q: R`设 $f(x)$ 为连续函数，且 $\displaystyle\int_0^xf(t)\,dt=3x^2-x\int_{-1}^{1}f(t)\,dt$，则 $f(x)=$______。`, a: R`$9x^2-2.$`, sol: R`原书答案 $9x^2-2$。` },
    { n: 25, q: R`$\displaystyle\lim_{n\to\infty}\frac{1}{n^2}\left[\sqrt{n^2-1}+\sqrt{n^2-2^2}+\cdots+\sqrt{n^2-(n-1)^2}\right]=$______。`, a: R`$\frac{\pi}{4}.$`, sol: R`原书答案 $\frac{\pi}{4}$。` },
    { n: 26, q: R`$\displaystyle\lim_{n\to\infty}\frac{1}{n}\left[\sqrt{1+\cos\frac{\pi}{n}}+\sqrt{1+\cos\frac{2\pi}{n}}+\cdots+\sqrt{1+\cos\frac{n\pi}{n}}\right]=$______。`, a: R`$\frac{2\sqrt{2}}{\pi}.$`, sol: R`原书答案 $\frac{2\sqrt{2}}{\pi}$。` },
    { n: 27, q: R`$\displaystyle\lim_{n\to\infty}\int_0^1e^{-x}\sin nx\,dx=$______。`, a: R`$0.$`, sol: R`原书答案 $0$。` },
    { n: 28, q: R`设函数 $f(x)$ 连续，且 $\displaystyle\int_0^xf(t-x)\,dt=(1+x^2)^x$，则 $\displaystyle\int_{-1}^{1}f(x)\,dx=$______。`, a: R`$\frac{3}{2}.$`, sol: R`原书答案 $\frac{3}{2}$。` },
    { n: 29, q: R`若 $\displaystyle\int_0^xf(t)\,dt=xe^x$，则 $\displaystyle\int_1^{+\infty}\frac{f(\ln x)}{x}\,dx=$______。`, a: R`$0.$`, sol: R`原书答案 $0$。` },
    { n: 30, q: R`$\displaystyle\int_2^{+\infty}\frac{dx}{(x+7)\sqrt{x-2}}=$______。`, a: R`$\frac{\pi}{3}.$`, sol: R`原书答案 $\frac{\pi}{3}$。` },
    { n: 31, q: R`函数 $y=\dfrac{x^2}{\sqrt{1-x^2}}$ 在区间 $\left[\dfrac{1}{2},\dfrac{\sqrt{3}}{2}\right]$ 上的平均值为______。`, a: R`$\frac{\sqrt{3}+1}{12}\pi.$`, sol: R`原书答案 $\frac{\sqrt{3}+1}{12}\pi$。` },
    { n: 32, q: R`由曲线 $y=x+\dfrac{1}{x}$，$x=2$ 及 $y=2$ 所围图形的面积 $S=$______。`, a: R`$\ln2-\frac{1}{2}.$`, sol: R`原书答案 $\ln2-\frac{1}{2}$。` },
    { n: 33, q: R`设曲线的极坐标方程为 $\rho=e^{a\theta}(a>0)$，则该曲线上相应于 $\theta$ 从 $0$ 变到 $2\pi$ 的一段弧与极轴所围成的图形的面积为______。`, a: R`$\frac{1}{4a}(e^{4\pi a}-1).$`, sol: R`原书答案 $\frac{1}{4a}(e^{4\pi a}-1)$。` },
    { n: 34, q: R`（数三不要求）曲线 $y=\displaystyle\int_0^x\tan t\,dt\left(0\leqslant x\leqslant\dfrac{\pi}{4}\right)$ 的弧长 $s=$______。`, a: R`$\ln(1+\sqrt{2}).$`, sol: R`原书答案 $\ln(1+\sqrt{2})$。` },
    { n: 35, q: R`（数三不要求）一根长为 $1$ 的细棒位于 $x$ 轴的区间 $[0,1]$ 上，若其线密度 $\rho=-x^2+2x+1$，则该细棒的质心坐标 $\bar{x}=$______。`, a: R`$\frac{11}{20}.$`, sol: R`原书答案 $\frac{11}{20}$。` },
    { n: 36, q: R`计算 $\int_0^1\frac{f(x)}{\sqrt{x}}\mathrm{d}x$，其中 $f(x)=\int_1^x\frac{\ln(1+t)}{t}\mathrm{d}t$。`, a: R`$8-2\pi-4\ln2.$`, sol: R`原书答案 $8-2\pi-4\ln2$。` },
    { n: 37, q: R`计算积分 $\int_{\frac{1}{2}}^{\frac{3}{2}}\frac{\mathrm{d}x}{\sqrt{|x-x^2|}}$。`, a: R`$\frac{\pi}{2}+\ln(2+\sqrt{3}).$`, sol: R`原书答案 $\frac{\pi}{2}+\ln(2+\sqrt{3})$。` },
    { n: 38, q: R`求极限 $\lim\limits_{x\to0}\frac{\int_0^x\left[\int_0^{u^2}\arctan(1+t)\mathrm{d}t\right]\mathrm{d}u}{x(1-\cos x)}$。`, a: R`$\frac{\pi}{6}.$`, sol: R`原书答案 $\frac{\pi}{6}$。` },
    { n: 39, q: R`设 $f(x)$ 为非负连续函数，且 $f(x)\int_0^xf(x-t)\mathrm{d}t=\sin^4x$，求 $f(x)$ 在 $\left[0,\frac{\pi}{2}\right]$ 上的平均值。`, a: R`$\sqrt{\frac{3}{2\pi}}.$`, sol: R`原书答案 $\sqrt{\frac{3}{2\pi}}$。` },
    { n: 40, q: R`设 $f(x)$ 在 $x=a$ 的某邻域内可导，且 $f(a)\neq0$，求极限
$$\lim_{x\to a}\left(\frac{1}{(x-a)f(a)}-\frac{1}{\int_a^xf(t)\mathrm{d}t}\right).$$`, a: R`$\frac{f'(a)}{2f^2(a)}.$`, sol: R`原书答案 $\frac{f'(a)}{2f^2(a)}$。` },
    { n: 41, q: R`函数 $f(x)$ 在 $[0,+\infty)$ 上可导，$f(0)=0$，且其反函数为 $g(x)$，若 $\int_x^{x+f(x)}g(t-x)\mathrm{d}t=x^2\ln(1+x)$，求 $f(x)$。`, a: R`$f(x)=(2x+1)\ln(1+x)-x.$`, sol: R`原书答案 $f(x)=(2x+1)\ln(1+x)-x$。` },
    { n: 42, q: R`设函数 $S(x)=\int_0^x|\cos t|\mathrm{d}t$，
(1) 当 $n$ 为正整数，且 $n\pi\leqslant x<(n+1)\pi$ 时，证明 $2n\leqslant S(x)<2(n+1)$；
(2) 求 $\lim\limits_{x\to+\infty}\frac{S(x)}{x}$。`, a: R`(1) 提示：当 $n\pi\leqslant x<(n+1)\pi$ 时，$\int_0^{n\pi}|\cos x|\mathrm{d}x\leqslant S(x)<\int_0^{(n+1)\pi}|\cos x|\mathrm{d}x$，再注意到 $|\cos x|$ 以 $\pi$ 为周期；(2) $\frac{2n}{(n+1)\pi}\leqslant\frac{S(x)}{x}<\frac{2(n+1)}{n\pi}$，$\lim\limits_{x\to+\infty}\frac{S(x)}{x}=\frac{2}{\pi}$。`, sol: R`原书提示如上。` },
    { n: 43, q: R`(1) 比较 $\int_0^1|\ln t|[\ln(1+t)]^n\mathrm{d}t$ 与 $\int_0^1t^n|\ln t|\mathrm{d}t$ $(n=1,2,\cdots)$ 的大小，说明理由；
(2) 记 $u_n=\int_0^1|\ln t|[\ln(1+t)]^n\mathrm{d}t$ $(n=1,2,\cdots)$，求极限 $\lim\limits_{n\to\infty}u_n$。`, a: R`(1) 提示：利用不等式 $\frac{x}{1+x}<\ln(1+x)<x\ (x>0)$；(2) $0\leqslant u_n\leqslant\int_0^1t^n|\ln t|\mathrm{d}t$，$\int_0^1t^n|\ln t|\mathrm{d}t=-\int_0^1t^n\ln t\,\mathrm{d}t=-\frac{1}{n+1}\int_0^1\ln t\,\mathrm{d}t^{n+1}$，然后分部积分，$\lim\limits_{n\to\infty}u_n=0$。`, sol: R`原书提示如上。` },
    { n: 44, q: R`设 $f(x)$ 在 $[0,1]$ 上连续，在 $(0,1)$ 内可导，且满足
$$f(1)=k\int_0^{\frac{1}{k}}xe^{1-x}f(x)\mathrm{d}x\quad(k>1),$$
证明至少存在一点 $\xi\in(0,1)$，使得 $f'(\xi)=(1-\xi^{-1})f(\xi)$。`, a: R`提示：考虑辅助函数 $F(x)=xe^{1-x}f(x)$，由 $f(1)=k\int_0^{\frac{1}{k}}xe^{1-x}f(x)\mathrm{d}x$ 及积分中值定理知，$F(1)=F(c)$，对 $F(x)$ 在区间 $[c,1]$ 上用罗尔定理本题得证。`, sol: R`原书提示如上。` },
    { n: 45, q: R`设函数 $f(x)$ 在 $[0,3]$ 上连续，在 $(0,3)$ 内存在二阶导数，且
$$2f(0)=\int_0^2f(x)\mathrm{d}x=f(2)+f(3).$$
(1) 证明存在 $\eta\in(0,2)$，使 $f(\eta)=f(0)$；
(2) 证明存在 $\xi\in(0,3)$，使 $f''(\xi)=0$。`, a: R`提示：由 $2f(0)=\int_0^2f(x)\mathrm{d}x=f(2)+f(3)$ 及积分中值定理得 $2f(0)=2f(c)=f(2)+f(3)$，即 $f(0)=f(c)=\frac{f(2)+f(3)}{2}$，由介值定理得存在 $\xi\in[2,3]$，使得 $\frac{f(2)+f(3)}{2}=f(\xi)$，即 $f(0)=f(c)=f(\xi)$，然后由罗尔定理可证明本题。`, sol: R`原书提示如上。` },
    { n: 46, q: R`设 $f(x)$ 在 $[0,a]$ $(a>0)$ 上连续，且 $\int_0^af(x)\mathrm{d}x=0$。试证 $\exists\xi\in(0,a)$ 使 $f(a-\xi)=-f(\xi)$。`, a: R`提示：考虑 $F(x)=\int_{a-x}^xf(t)\mathrm{d}t.$`, sol: R`原书提示：考虑 $F(x)=\int_{a-x}^xf(t)\mathrm{d}t$。` },
    { n: 47, q: R`设 $f(x)$ 在 $[0,1]$ 上连续，证明存在 $\xi\in(0,1)$，使 $\int_0^\xi f(t)\mathrm{d}t=(1-\xi)f(\xi)$；若又设 $f(x)>0$ 且单调减少，则这种 $\xi$ 是唯一的。`, a: R`提示：构造辅助函数用罗尔定理。`, sol: R`原书提示：构造辅助函数用罗尔定理。` },
    { n: 48, q: R`设 $y=f(x)$ 是区间 $[0,1]$ 上的任一非负连续函数。
(1) 试证存在 $x_0\in(0,1)$，使得在区间 $[0,x_0]$ 上以 $f(x_0)$ 为高的矩形面积，等于在区间 $[x_0,1]$ 上以 $y=f(x)$ 为曲边的曲边梯形面积。
(2) 又设 $f(x)$ 在区间 $(0,1)$ 内可导，且 $f'(x)>-\frac{2f(x)}{x}$，证明(1)中的 $x_0$ 是唯一的。`, a: R`提示：(1) 考虑辅助函数 $F(x)=x\int_x^1f(t)\mathrm{d}t$，对 $F(x)$ 在区间 $[0,1]$ 上用罗尔定理；(2) 考虑辅助函数 $\varphi(x)=\int_x^1f(t)\mathrm{d}t-xf(x)$，注意到 $\varphi'(x)<0$。`, sol: R`原书提示如上。` },
    { n: 49, q: R`设函数 $f(x)$ 在 $[0,1]$ 上有连续一阶导数，且 $f(0)=0$，试证至少存在一点 $\xi\in[0,1]$，使
$$f'(\xi)=2\int_0^1f(x)\,\mathrm{d}x.$$`, a: R`提示：令 $F(x)=f(x)-2x\int_0^1f(x)\mathrm{d}x$，则 $F(0)=0$。$\int_0^1F(x)\mathrm{d}x=\int_0^1f(x)\mathrm{d}x-\int_0^12x\,\mathrm{d}x\cdot\int_0^1f(x)\mathrm{d}x=\int_0^1f(x)\mathrm{d}x-\int_0^1f(x)\mathrm{d}x=0$。由积分中值定理得，$\exists c\in(0,1)$，使得 $\int_0^1F(x)\mathrm{d}x=F(c)=0$。在区间 $[0,c]$ 上对 $F(x)$ 用罗尔定理本题得证。`, sol: R`原书提示如上。` },
    { n: 50, q: R`设函数 $f(x)$ 在 $[-l,l]$ 上连续，在 $x=0$ 处可导，且 $f'(0)\neq0$。
(1) 证明：对 $\forall x\in(0,l)$，至少 $\exists\theta\in(0,1)$，使
$$\int_0^xf(t)\,\mathrm{d}t+\int_0^{-x}f(t)\,\mathrm{d}t=x\bigl[f(\theta x)-f(-\theta x)\bigr];$$
(2) 求极限 $\lim\limits_{x\to0^+}\theta$。`, a: R`(1) 对 $F(x)=\int_0^xf(t)\mathrm{d}t+\int_0^{-x}f(t)\mathrm{d}t$ 在区间 $[0,x]$ 上用拉格朗日中值定理；(2) $\frac{x[f(\theta x)-f(-\theta x)]}{2x^2\theta}=\frac{\int_0^xf(t)\mathrm{d}t+\int_0^{-x}f(t)\mathrm{d}t}{2x^2}$，$\lim\limits_{x\to0^+}\theta=\frac{1}{2}$。`, sol: R`原书答案如上。` },
    { n: 51, q: R`设 $f(x)$ 在 $[0,2\pi]$ 上具有二阶连续导数，且 $f''(x)\geqslant0$ 证明：
$$\int_0^{2\pi}f(x)\cos x\,\mathrm{d}x\geqslant0.$$`, a: R`提示：利用分部积分。`, sol: R`原书提示：利用分部积分。` },
    { n: 52, q: R`设函数 $f(x)$ 在区间 $[0,1]$ 上可导，且 $|f'(x)|<M$ 证明：
$$\left|\int_0^1f(x)\,\mathrm{d}x-\frac{1}{n}\sum_{k=1}^{n}f\!\left(\frac{k}{n}\right)\right|\leqslant\frac{M}{2n}.$$`, a: R`提示：将 $[0,1]$ 区间 $n$ 等分。$\left|\int_0^1f(x)\mathrm{d}x-\frac{1}{n}\sum_{k=1}^nf\left(\frac{k}{n}\right)\right|=\left|\sum_{k=1}^n\int_{\frac{k-1}{n}}^{\frac{k}{n}}f(x)\mathrm{d}x-\frac{1}{n}\sum_{k=1}^nf\left(\frac{k}{n}\right)\right|=\left|\sum_{k=1}^n\int_{\frac{k-1}{n}}^{\frac{k}{n}}f(x)\mathrm{d}x-\sum_{k=1}^n\int_{\frac{k-1}{n}}^{\frac{k}{n}}f\left(\frac{k}{n}\right)\mathrm{d}x\right|\leqslant\sum_{k=1}^n\int_{\frac{k-1}{n}}^{\frac{k}{n}}\left|f(x)-f\left(\frac{k}{n}\right)\right|\mathrm{d}x$。然后利用拉格朗日中值定理可证本题。`, sol: R`原书提示如上。` },
    { n: 53, q: R`设 $f(x)$ 满足 $f(1)=1$，$f'(x)=\dfrac{1}{x^2+f^2(x)}\ (x\geqslant1)$，试证 $\lim\limits_{x\to+\infty}f(x)$ 存在且不超过 $1+\dfrac{\pi}{4}$。`, a: R`提示：利用单调有界准则证明 $\lim\limits_{x\to+\infty}f(x)$ 存在。`, sol: R`原书提示：利用单调有界准则证明 $\lim\limits_{x\to+\infty}f(x)$ 存在。` },
    { n: 54, q: R`（数三不要求）一容器的内侧是由图中曲线绕 $y$ 轴旋转一周而成的曲面，该曲线由
$$x^2+y^2=2y\ \left(y\geqslant\frac{1}{2}\right)\ \text{与}\ x^2+y^2=1\ \left(y\leqslant\frac{1}{2}\right)$$
连接而成。
（图：直角坐标系，横轴为 $x$、纵轴为 $y$。上方为圆 $x^2+y^2=2y$（圆心在 $y$ 轴上，$y$ 轴标有 $2$、$1$），下方为圆 $x^2+y^2=1$（$y$ 轴标有 $\frac{1}{2}$、$0$、$-1$，横轴标有 $1$）；两圆在 $y=\frac{1}{2}$ 处相接，右侧旁注“$x^2+y^2=2y$”与“$x^2+y^2=1$”。）
(1) 求容器的容积；
(2) 若将容器内盛满的水从容器顶部全部抽出，至少需要做多少功？
（长度单位：m，重力加速度为 $\mathrm{gm/s^2}$，水的密度为 $10^3\mathrm{kg/m^3}$）。`, a: R`(1) $\frac{9\pi}{4}$；(2) $\frac{27\times10^3}{8}$。`, sol: R`原书答案 (1) $\frac{9\pi}{4}$；(2) $\frac{27\times10^3}{8}$。` },
    { n: 55, q: R`（数三不要求）设曲线 $L$ 的方程为 $y=\dfrac{1}{4}x^2-\dfrac{1}{2}\ln x\ (1\leqslant x\leqslant\mathrm{e})$。
(1) 求 $L$ 的弧长；
(2) 设 $D$ 是由曲线 $L$，直线 $x=1$，$x=\mathrm{e}$ 及 $x$ 轴所围平面图形。求 $D$ 的形心的横坐标。`, a: R`(1) $\frac{e^2+1}{4}$；(2) $\frac{3(e^2+1)(e^2-3)}{4(e^3-7)}$。`, sol: R`原书答案 (1) $\frac{e^2+1}{4}$；(2) $\frac{3(e^2+1)(e^2-3)}{4(e^3-7)}$。` },
    { n: 56, q: R`求曲线 $y=3-|x^2-1|$ 与 $x$ 轴围成的封闭图形绕直线 $y=3$ 旋转所得的旋转体体积。`, a: R`$\frac{448}{15}\pi.$`, sol: R`原书答案 $\frac{448}{15}\pi$。` },
    { n: 57, q: R`设有抛物线 $\Gamma:y=a-bx^2\ (a>0,\ b>0)$，试确定常数 $a,b$ 的值，使得
(1) $\Gamma$ 与直线 $y=x+1$ 相切；
(2) $\Gamma$ 与 $x$ 轴所围图形绕 $y$ 轴旋转所得旋转体体积最大。`, a: R`$a=\frac{2}{3};b=\frac{3}{4}.$`, sol: R`原书答案 $a=\frac{2}{3};b=\frac{3}{4}$。` },
    { n: 58, q: R`设曲线 $y=\dfrac{1}{x}$ 与直线 $y=x$ 及 $y=2$ 所围区域为 $D$，
(1) 求区域 $D$ 分别绕 $x$ 轴和 $y$ 轴旋转所得旋转体的体积；
(2) 求区域 $D$ 分别绕 $x=2$ 和 $y=2$ 旋转所得旋转体的体积。`, a: R`(1) $V_x=\frac{8\pi}{3};V_y=\frac{11}{6}\pi$；(2) $V_{x=2}=\pi\left(\frac{25}{6}-4\ln2\right);V_{y=2}=4\pi\left(\frac{5}{6}-\ln2\right)$。`, sol: R`原书答案如上。` },
    { n: 59, q: R`求曲线 $y=x^2$ 与直线 $y=x$ 所围区域 $D$ 绕直线 $y=x$ 旋转一周所得旋转体的体积。`, a: R`$\frac{\sqrt{2}}{60}\pi.$`, sol: R`原书答案 $\frac{\sqrt{2}}{60}\pi$。` },
    { n: 60, q: R`设平面域 $D$ 由曲线 $\rho=(1+\cos\theta)$ 所围成，试求
(1) 区域 $D$ 的面积；
(2) 区域 $D$ 绕极轴旋转一周所得旋转体的体积。`, a: R`(1) $\frac{3\pi}{2}$；(2) $\frac{8\pi}{3}$。`, sol: R`原书答案 (1) $\frac{3\pi}{2}$；(2) $\frac{8\pi}{3}$。` }
  ];
})();
