window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q660_s4"] = {
    id: "q660_s4",
    ch: "660题 · 选择题 · 高等数学",
    title: "选择题 第 101–125 题",
    probTitle: "选择题（含原书详解）",
    book: "《数学基础过关660题（数学二）》",
    problems: [
      { n: 101, q: R`设 $f(x)$ 在 $[a,b]$ 连续，则下列结论中正确的个数为
① $f(x)$ 在 $[a,b]$ 的任意子区间 $[\alpha,\beta]$ 上 $\int_{\alpha}^{\beta}f(x)\mathrm{d}x=0$，则 $f(x)=0$（$\forall x\in[a,b]$）。
② $f(x)\geqslant0$（$x\in[a,b]$），又 $\int_a^bf(x)\mathrm{d}x=0$，则 $f(x)=0$（$x\in[a,b]$）。
③ $[\alpha,\beta]\subset[a,b]$，则 $\int_a^bf(x)\mathrm{d}x\geqslant\int_{\alpha}^{\beta}f(x)\mathrm{d}x$。
(A) 0。 (B) 1。 (C) 2。 (D) 3。`, a: R`(C)`, sol: R`【分析】① 正确：取 $\beta=x$，由 $\int_a^xf(t)dt=0$ 求导得 $f(x)=0$。
② 正确：由 $0\le\int_a^xf\le\int_a^bf=0$ 得 $\int_a^xf=0$，求导得 $f=0$。
③ 错误：由定积分几何意义，$f$ 在 $[\alpha,\beta]$ 上可正可负时 $\int_\alpha^\beta f$ 与 $\int_a^bf$ 的大小不确定（可取 $f$ 使 $\int_\alpha^\beta f<0$）。
正确的有 ①、②，共 2 个，选 (C)。
【评注】①、② 也可用反证法：若 $f(x_0)>0$，由连续性在某小区间上 $f>0$，其积分 $>0$，矛盾。` },
      { n: 102, q: R`$\dfrac{\mathrm{d}}{\mathrm{d}x}\int_{\cos^2x}^{2x^3}\dfrac{1}{\sqrt{1+t^2}}\mathrm{d}t=$
(A) $\dfrac{1}{\sqrt{1+4x^6}}-\dfrac{1}{\sqrt{1+\cos^4x}}$。 (B) $\dfrac{6x^2}{\sqrt{1+4x^6}}-\dfrac{\sin2x}{\sqrt{1+\cos^4x}}$。
(C) $\dfrac{6x^2}{\sqrt{1+4x^6}}+\dfrac{\sin2x}{\sqrt{1+\cos^4x}}$。 (D) $\dfrac{6x^2}{\sqrt{1+4x^6}}-\dfrac{1}{\sqrt{1+\cos^4x}}$。`, a: R`(C)`, sol: R`【分析】
$$\frac{\mathrm{d}}{\mathrm{d}x}\int_{\cos^2x}^{2x^3}\frac{1}{\sqrt{1+t^2}}dt=\frac{1}{\sqrt{1+4x^6}}(2x^3)'-\frac{1}{\sqrt{1+\cos^4x}}(\cos^2x)'$$
$$=\frac{6x^2}{\sqrt{1+4x^6}}+\frac{\sin2x}{\sqrt{1+\cos^4x}}.$$
（$(\cos^2x)'=-2\sin x\cos x=-\sin2x$，故第二项为 $-\frac{1}{\sqrt{1+\cos^4x}}\cdot(-\sin2x)=+\frac{\sin2x}{\sqrt{1+\cos^4x}}$。）选 (C)。
【评注】变限积分求导公式 $\frac{d}{dx}\int_{u(x)}^{v(x)}f=f(v)v'-f(u)u'$。` },
      { n: 103, q: R`$I=\int_0^1\dfrac{x}{\sqrt{x(1-x)}}\mathrm{d}x=$
(A) $\pi$。 (B) $\dfrac\pi2$。 (C) $\dfrac\pi4$。 (D) $\dfrac\pi8$。`, a: R`(B)`, sol: R`【分析1】分母配方：$x(1-x)=\frac14-\left(x-\frac12\right)^2$。令 $t=x-\frac12$，
$$I=\int_{-1/2}^{1/2}\frac{t+\frac12}{\sqrt{\frac14-t^2}}dt=\frac12\cdot2\int_0^{1/2}\frac{dt}{\sqrt{\frac14-t^2}}=\int_0^{1/2}\frac{d(2t)}{\sqrt{1-(2t)^2}}=\arcsin2t\Big|_0^{1/2}=\frac\pi2.$$
【分析2】令 $x=\sin^2t$：$I=\int_0^{\pi/2}2\sin^2t\,dt=2\cdot\frac\pi4=\frac\pi2$。选 (B)。
【评注】$\int_0^1\frac{x}{\sqrt{x(1-x)}}dx=\int_0^1\sqrt{\frac{x}{1-x}}dx$；用 $x=\sin^2t$ 最简。` },
      { n: 104, q: R`积分 $I=\int_0^1\dfrac{x^4}{\sqrt{1-x}}\mathrm{d}x=$
(A) $\dfrac{156}{315}$。 (B) $\dfrac{256}{315}$。 (C) $\dfrac{198}{315}$。 (D) $\dfrac{208}{315}$。`, a: R`(B)`, sol: R`【分析1】多次分部积分可化为 $\frac{64}{5}\cdot\frac27\cdot\frac29=\frac{256}{315}$（略）。
【分析2】令 $x=\sin^2t$：
$$I=\int_0^{\pi/2}\frac{\sin^8t}{\sqrt{1-\sin^2t}}\cdot2\sin t\cos t\,dt=2\int_0^{\pi/2}\sin^9t\,dt=2\cdot\frac{8!!}{9!!}=2\cdot\frac{8\cdot6\cdot4\cdot2}{9\cdot7\cdot5\cdot3}=\frac{256}{315}.$$
选 (B)。
【评注】$\int_0^{\pi/2}\sin^nt\,dt=\frac{(n-1)!!}{n!!}$（$n$ 为奇数）。` },
      { n: 105, q: R`设 $f(x)$ 为连续函数，$\int_0^{\frac\pi2}f(x\cos x)\cos x\,\mathrm{d}x=A$，则 $\int_0^{\frac\pi2}f(x\cos x)x\sin x\,\mathrm{d}x=$
(A) 0。 (B) $A$。 (C) $-A$。 (D) $2A$。`, a: R`(B)`, sol: R`【分析】考察两积分之差：
$$\int_0^{\pi/2}f(x\cos x)\cos x\,dx-\int_0^{\pi/2}f(x\cos x)x\sin x\,dx=\int_0^{\pi/2}f(x\cos x)[\cos x\,dx+x\,d\cos x]$$
$$=\int_0^{\pi/2}f(x\cos x)\,d(x\cos x)=F(x\cos x)\Big|_0^{\pi/2}=F(0)-F(0)=0,$$
其中 $F$ 是 $f$ 的一个原函数（$x=\frac\pi2$ 时 $x\cos x=0$，$x=0$ 时也为 0）。故两积分相等，选 (B)。
【评注】识别全微分 $d(x\cos x)=\cos x\,dx+x\,d\cos x$ 是本题关键。` },
      { n: 106, q: R`设连续函数 $f(x)$ 满足 $f(2x)=2f(x)$，则 $\int_1^2xf(x)\mathrm{d}x=a\int_0^1xf(x)\mathrm{d}x$，其中 $a$ 为
(A) 5。 (B) 6。 (C) 7。 (D) 8。`, a: R`(C)`, sol: R`【分析】
$$\int_0^2xf(x)dx\xlongequal{x=2t}\int_0^12tf(2t)\cdot2dt\xlongequal{f(2t)=2f(t)}8\int_0^1tf(t)dt,$$
故 $\int_1^2xf(x)dx=\int_0^2xf(x)dx-\int_0^1xf(x)dx=8\int_0^1xf(x)dx-\int_0^1xf(x)dx=7\int_0^1xf(x)dx$。选 (C)。
【评注】先算 $\int_0^2$ 再减去 $\int_0^1$；换元 $x=2t$ 后用条件 $f(2t)=2f(t)$。` },
      { n: 107, q: R`设 $\sin x\ln|x|$ 是 $f(x)$ 的一个原函数，则不定积分 $\int xf'(x)\mathrm{d}x=$
(A) $x\cos x\ln|x|+x\cdot\dfrac{\sin x}{|x|}-\sin x\ln|x|+C$。 (B) $x\cos x\ln|x|+\sin x-\sin x\ln|x|+C$。
(C) $\cos x\ln|x|-\dfrac{\sin x}{|x|}-\sin x\ln|x|+C$。 (D) 以上均不正确。`, a: R`(B)`, sol: R`【分析】由 $F=\sin x\ln|x|$ 是 $f$ 的原函数，$f=F'=\cos x\ln|x|+\frac{\sin x}{x}$。
$$\int xf'(x)dx=\int x\,df=xf(x)-\int f(x)dx=x\left(\cos x\ln|x|+\frac{\sin x}{x}\right)-\sin x\ln|x|+C$$
$$=x\cos x\ln|x|+\sin x-\sin x\ln|x|+C.$$
选 (B)。
【评注】$(\ln|x|)'=\frac1x$，故 $\frac{\sin x}{x}\cdot x=\sin x$。` },
      { n: 108, q: R`$I=\int_0^{100\pi}\sqrt{1+\cos2x}\,\mathrm{d}x=$
(A) $200\sqrt2$。 (B) $50\sqrt2$。 (C) $100\sqrt2$。 (D) $200$。`, a: R`(A)`, sol: R`【分析】$\sqrt{1+\cos2x}=\sqrt{2\cos^2x}=\sqrt2|\cos x|$，$|\cos x|$ 以 $\pi$ 为周期，
$$I=\sqrt2\int_0^{100\pi}|\cos x|dx=\sqrt2\cdot100\int_0^\pi|\cos x|dx=100\sqrt2\cdot2\int_0^{\pi/2}\cos x\,dx=200\sqrt2.$$
选 (A)。
【评注】$\int_0^\pi|\cos x|dx=2$；$\sqrt{1+\cos2x}=\sqrt2|\cos x|$ 的绝对值不能丢。` },
      { n: 109, q: R`函数 $F(x)=\int_x^{x+\pi}\ln(1+\cos^2t)\cos2t\,\mathrm{d}t$
(A) 为正数。 (B) 为负数。 (C) 恒为零。 (D) 不是常数。`, a: R`(A)`, sol: R`【分析】被积函数以 $\pi$ 为周期，故 $F(x)$ 在每个周期上积分相同，$F(x)=F(0)$。
$$F(0)=\int_0^\pi\ln(1+\cos^2t)\cos2t\,dt=\frac12\int_0^\pi\ln(1+\cos^2t)\,d\sin2t$$
$$=\frac12\ln(1+\cos^2t)\sin2t\Big|_0^\pi-\frac12\int_0^\pi\frac{-2\cos t\sin t}{1+\cos^2t}\sin2t\,dt=\frac12\int_0^\pi\frac{\sin^22t}{1+\cos^2t}dt>0.$$
选 (A)。
【评注】先用周期性得 $F(x)=F(0)$，再用分部积分化为非负被积函数。` },
      { n: 110, q: R`设 $f(x)=\int_0^x\left(e^{\cos t}-e^{-\cos t}\right)\mathrm{d}t$，则
(A) $f(x)=f(x+2\pi)$。 (B) $f(x)>f(x+2\pi)$。 (C) $f(x)<f(x+2\pi)$。 (D) 当 $x>0$ 时 $f(x)>f(x+2\pi)$，当 $x<0$ 时 $f(x)<f(x+2\pi)$。`, a: R`(A)`, sol: R`【分析】被积函数 $g(t)=e^{\cos t}-e^{-\cos t}$ 以 $2\pi$ 为周期，故
$$f(x+2\pi)-f(x)=\int_x^{x+2\pi}g(t)dt=\int_{-\pi}^{\pi}g(t)dt=2\int_0^\pi g(t)dt.$$
令 $t=\pi-u$：$\int_0^\pi g(t)dt=\int_0^\pi\left[e^{\cos(\pi-u)}-e^{-\cos(\pi-u)}\right]d(\pi-u)=\int_0^\pi\left[e^{-\cos u}-e^{\cos u}\right]du=-\int_0^\pi g(u)du$。
故 $\int_0^\pi g=0$，$f(x+2\pi)=f(x)$。选 (A)。
【评注】周期函数变上限积分以 $T$ 为周期的充要条件是 $\int_0^Tg=0$；本题由对称性得该积分为 0。` },
      { n: 111, q: R`设 $f(x)=\begin{cases}x^2,&x\geqslant0,\\\cos x,&x<0,\end{cases}$ $g(x)=\begin{cases}x\sin\dfrac1x,&x\neq0,\\0,&x=0.\end{cases}$ 则在区间 $(-1,1)$ 上
(A) $f(x)$ 与 $g(x)$ 都存在原函数。 (B) $f(x)$ 与 $g(x)$ 都不存在原函数。
(C) $f(x)$ 存在原函数，$g(x)$ 不存在原函数。 (D) $f(x)$ 不存在原函数，$g(x)$ 存在原函数。`, a: R`(D)`, sol: R`【分析】$g$ 在 $(-1,1)$ 连续，故存在原函数。
$f$ 在 $x=0$ 处 $f(0^+)=0$、$f(0^-)=1$，为第一类（跳跃）间断点。由「导函数无第一类间断点」，$f$ 在 $(-1,1)$ 不存在原函数。选 (D)。
【评注】有第一类间断点的函数不存在原函数；连续函数必存在原函数。` },
      { n: 112, q: R`数列极限 $I=\lim\limits_{n\to\infty}\int_1^{\sqrt3}\dfrac{\sqrt[n]{x}}{1+x^2}\,\mathrm{d}x=$
(A) $\dfrac{\sqrt3}{12}\pi$。 (B) $\dfrac\pi{12}$。 (C) $\dfrac\pi3$。 (D) $\dfrac\pi2$。`, a: R`(B)`, sol: R`【分析】用适当放大缩小法：$1\le x\le\sqrt3$ 时 $1\le\sqrt[n]{x}\le3^{\frac1{2n}}$，故
$$\int_1^{\sqrt3}\frac{dx}{1+x^2}\le\int_1^{\sqrt3}\frac{\sqrt[n]{x}}{1+x^2}dx\le3^{\frac1{2n}}\int_1^{\sqrt3}\frac{dx}{1+x^2}.$$
由 $\lim\limits_{n\to\infty}3^{\frac1{2n}}=1$ 及夹逼定理，
$$I=\int_1^{\sqrt3}\frac{dx}{1+x^2}=\arctan x\Big|_1^{\sqrt3}=\frac\pi3-\frac\pi4=\frac\pi{12}.$$
选 (B)。
【评注】「适当放大缩小」处理含 $\sqrt[n]{x}$ 的极限积分。` },
      { n: 113, q: R`设正数列 $\{a_n\}$ 满足 $\lim\limits_{n\to\infty}\int_0^{a_n}x^n\,\mathrm{d}x=2$，则 $\lim\limits_{n\to\infty}a_n=$
(A) 2。 (B) 1。 (C) 0。 (D) $\dfrac12$。`, a: R`(B)`, sol: R`【分析】$\int_0^{a_n}x^ndx=\frac{a_n^{n+1}}{n+1}=y_n\to2$，故 $a_n=(n+1)^{\frac1{n+1}}y_n^{\frac1{n+1}}$。
由 $\lim\limits_{n\to\infty}(n+1)^{\frac1{n+1}}=1$、$\lim\limits_{n\to\infty}y_n^{\frac1{n+1}}=2^0=1$，得 $\lim\limits_{n\to\infty}a_n=1$。选 (B)。
【评注】$\lim y_n^{\frac1{n+1}}=\lim e^{\frac{\ln y_n}{n+1}}=e^0=1$（$y_n$ 有界）。` },
      { n: 114, q: R`数列极限 $\lim\limits_{n\to\infty}\dfrac{\int_0^{n\pi}|\sin x|\,\mathrm{d}x}{(n+1)\pi}=$
(A) 0。 (B) 不存在。 (C) $\dfrac2\pi$。 (D) $\dfrac1\pi$。`, a: R`(C)`, sol: R`【分析】$|\sin x|$ 以 $\pi$ 为周期，$\int_0^\pi|\sin x|dx=2$，故 $\int_0^{n\pi}|\sin x|dx=n\int_0^\pi|\sin x|dx=2n$。
$$\lim_{n\to\infty}\frac{2n}{(n+1)\pi}=\frac2\pi.$$
选 (C)。
【评注】$\int_0^{n\pi}|\sin x|dx=2n$；分子分母同阶。` },
      { n: 115, q: R`数列极限 $\lim\limits_{n\to\infty}\left(\dfrac{n}{n^2+1^2}+\dfrac{n}{n^2+2^2}+\cdots+\dfrac{n}{n^2+n^2}\right)=$
(A) $\dfrac\pi2$。 (B) $\dfrac\pi4$。 (C) $\dfrac\pi3$。 (D) $\dfrac\pi6$。`, a: R`(B)`, sol: R`【分析】
$$x_n=\frac1n\left[\frac{1}{1+\left(\frac1n\right)^2}+\frac{1}{1+\left(\frac2n\right)^2}+\cdots+\frac{1}{1+\left(\frac nn\right)^2}\right],$$
这是 $f(x)=\dfrac{1}{1+x^2}$ 在 $[0,1]$ 上（$n$ 等分，取右端点）的积分和，故
$$\lim_{n\to\infty}x_n=\int_0^1\frac{dx}{1+x^2}=\arctan x\Big|_0^1=\frac\pi4.$$
选 (B)。
【评注】识别黎曼和：$\frac{n}{n^2+k^2}=\frac1n\cdot\frac{1}{1+(k/n)^2}$。` },
      { n: 116, q: R`设 $f(x)$ 在 $[-a,a]$ 上是连续的偶函数，$a>0$，$g(x)=\int_{-a}^a|x-t|f(t)\,\mathrm{d}t$，则在 $[-a,a]$ 上
(A) $g(x)$ 是单调增的。 (B) $g(x)$ 是单调减的。 (C) $g(x)$ 是偶函数。 (D) $g(x)$ 是奇函数。`, a: R`(C)`, sol: R`【分析】
$$g(-x)=\int_{-a}^a|-x-t|f(t)dt=\int_{-a}^a|x+t|f(t)dt\xlongequal{t=-u}\int_a^{-a}|x-u|f(-u)d(-u)=\int_{-a}^a|x-u|f(u)du=g(x),$$
故 $g$ 为偶函数。选 (C)。
【评注】利用 $f$ 为偶函数作换元 $t=-u$；对称区间上偶函数的积分性质。` },
      { n: 117, q: R`设 $f(x)$ 可导，$f(0)=0$，$f'(0)=2$，$F(x)=\int_0^xt^2f(x^3-t^3)\,\mathrm{d}t$，$g(x)=\dfrac{x^7}{5}+\dfrac{x^6}{6}$，则当 $x\to0$ 时，$F(x)$ 是 $g(x)$ 的
(A) 低阶无穷小。 (B) 高阶无穷小。 (C) 等价无穷小。 (D) 同阶但非等价无穷小。`, a: R`(D)`, sol: R`【分析】令 $s=x^3-t^3$，
$$F(x)=-\frac13\int_0^xf(x^3-t^3)d(x^3-t^3)=-\frac13\int_{x^3}^0f(s)ds=\frac13\int_0^{x^3}f(s)ds.$$
故
$$\lim_{x\to0}\frac{F(x)}{g(x)}=\lim_{x\to0}\frac{\frac13\int_0^{x^3}f(s)ds}{\frac16x^6}=2\lim_{x\to0}\frac{f(x^3)\cdot3x^2}{6x^5}=\lim_{x\to0}\frac{f(x^3)}{x^3}=f'(0)=2,$$
其中 $g(x)\sim\frac16x^6$。极限为常数 2，故同阶但非等价。选 (D)。
【评注】$F(x)=\frac13\int_0^{x^3}f(s)ds$；$f(x^3)\sim f'(0)x^3$。` },
      { n: 118, q: R`设有可导函数 $f(x)$ 且 $f'(0)\neq0$，又存在有界函数 $\theta(x)\neq0$（$x\neq0$）满足 $\int_0^xf(t)\,\mathrm{d}t=xf(\theta x)$，则 $\lim\limits_{x\to0}\theta(x)=$
(A) 0。 (B) $\dfrac12$。 (C) 1。 (D) 2。`, a: R`(B)`, sol: R`【分析】把等式改写为
$$\int_0^xf(t)dt-f(0)x=x^2\left[\frac{f(\theta x)-f(0)}{\theta x}\right]\cdot\theta.$$
两边除以 $x^2$ 并令 $x\to0$：
$$\lim_{x\to0}\theta=\lim_{x\to0}\frac{\left(\int_0^xf(t)dt-f(0)x\right)/x^2}{\frac{f(\theta x)-f(0)}{\theta x}}=\frac{1}{f'(0)}\lim_{x\to0}\frac{f(x)-f(0)}{2x}=\frac{1}{2}\cdot\frac{f'(0)}{f'(0)}=\frac12.$$
选 (B)。
【评注】$f(\theta x)-f(0)\sim f'(0)\theta x$；分子用洛必达法则。` },
      { n: 119, q: R`设 $a>0$，$f(x)$ 在 $[0,a]$ 连续，并且当 $0\leqslant x\leqslant\dfrac a2$ 时 $f(x)+f(a-x)=0$，则 $\int_0^af(x)\,\mathrm{d}x$
(A) $>0$。 (B) $<0$。 (C) $=0$。 (D) 以上均不对。`, a: R`(C)`, sol: R`【分析】分段并换元：
$$I=\int_0^{a/2}f(x)dx+\int_{a/2}^af(x)dx=\int_0^{a/2}f(x)dx+\int_0^{a/2}f(a-t)dt=\int_0^{a/2}[f(x)+f(a-x)]dx=0.$$
选 (C)。
【评注】对第二个积分作 $t=a-x$ 换元，再用条件 $f(x)+f(a-x)=0$。` },
      { n: 120, q: R`设 $f(x)$ 在 $[a,b]$ 连续，则 $f(x)$ 在 $[a,b]$ 非负且在 $[a,b]$ 的 $\forall$ 子区间上不恒为零是 $F(x)=\int_a^xf(t)\,\mathrm{d}t$ 在 $[a,b]$ 单调增加的
(A) 充分非必要条件。 (B) 必要非充分条件。 (C) 充要条件。 (D) 既非充分又非必要条件。`, a: R`(C)`, sol: R`【分析】$F$ 在 $[a,b]$ 可导，$F$ 单调增 $\iff F'(x)=f(x)\ge0$（$x\in(a,b)$）且在 $(a,b)$ 的任意子区间内 $F'\not\equiv0$。
而 $f\ge0$ 且任意子区间内不恒为零 $\iff$ 上式。故为充要条件，选 (C)。
【评注】「单调增加」的导数刻画：$F'\ge0$ 且 $F'$ 在任意子区间内不恒为零。` },
      { n: 121, q: R`设 $f(t)=\int_0^1\ln\sqrt{x^2+t^2}\,\mathrm{d}x$，则 $f(t)$ 在 $t=0$ 处
(A) 不连续。 (B) 连续但不可导。 (C) 可导，但 $f'(t)$ 在 $t=0$ 不连续。 (D) 可导且 $f'(t)$ 在 $t=0$ 连续。`, a: R`(B)`, sol: R`【分析】分部积分求 $f$：
$$f(t)=\frac12\ln(1+t^2)-1+t\arctan\frac1t\quad(t\neq0),\qquad f(0)=\int_0^1\ln x\,dx=-1.$$
由 $\lim\limits_{t\to0}f(t)=-1+0=-1=f(0)$，$f$ 在 0 连续。
又 $\lim\limits_{t\to0^\pm}\dfrac{f(t)-f(0)}{t}=\lim\limits_{t\to0^\pm}\left[\dfrac{1}{2t}\ln(1+t^2)+\arctan\dfrac1t\right]=\pm\dfrac\pi2$，左右导数不等，故 $f$ 在 0 不可导。选 (B)。
【评注】$\int\ln(x^2+t^2)dx$ 用分部积分；$\arctan\frac1t$ 在 $0^\pm$ 的极限为 $\pm\frac\pi2$。` },
      { n: 122, q: R`设 $f(x)$ 在 $x=0$ 的某邻域内连续，在 $x=0$ 处可导，且 $f(0)=0$。
$$\varphi(x)=\begin{cases}\dfrac{1}{x^2}\displaystyle\int_0^xtf(t)\,\mathrm{d}t,&x\neq0,\\0,&x=0.\end{cases}$$ 则 $\varphi(x)$ 在 $x=0$ 处
(A) 不连续。 (B) 连续但不可导。 (C) 可导但 $\varphi'(x)$ 在 $x=0$ 不连续。 (D) 可导且 $\varphi'(x)$ 在 $x=0$ 连续。`, a: R`(D)`, sol: R`【分析】
$$\lim_{x\to0}\varphi(x)=\lim_{x\to0}\frac{\int_0^xtf(t)dt}{x^2}\xlongequal{\text{洛必达}}\lim_{x\to0}\frac{xf(x)}{2x}=\frac12f(0)=0=\varphi(0),$$
故 $\varphi$ 在 0 连续。
$x\neq0$ 时 $\varphi'(x)=\dfrac{f(x)}{x}-\dfrac{2\int_0^xtf(t)dt}{x^3}$，于是
$$\lim_{x\to0}\varphi'(x)=f'(0)-2\lim_{x\to0}\frac{xf(x)}{3x^2}=f'(0)-\frac23f'(0)=\frac13f'(0),$$
故 $\varphi'(0)=\frac13f'(0)$，且 $\varphi'$ 在 0 连续。选 (D)。
【评注】用结论：若 $F$ 在 $a$ 连续、去心邻域可导且 $\lim\limits_{x\to a}F'(x)=A$，则 $F'(a)=A$。` },
      { n: 123, q: R`方程 $\displaystyle\int_0^x\sqrt{1+t^4}\,\mathrm{d}t+\int_{\cos x}^0e^{-t^2}\,\mathrm{d}t=0$ 根的个数
(A) 0。 (B) 1。 (C) 2。 (D) 3。`, a: R`(B)`, sol: R`【分析】设 $F(x)=\int_0^x\sqrt{1+t^4}dt+\int_{\cos x}^0e^{-t^2}dt$，$F$ 连续，$F(0)=\int_1^0e^{-t^2}dt<0$，$F\left(\frac\pi2\right)=\int_0^{\pi/2}\sqrt{1+t^4}dt>0$，由零点定理至少一根。
$$F'(x)=\sqrt{1+x^4}+e^{-\cos^2x}\sin x.$$
因 $\sqrt{1+x^4}\ge1$（等号仅 $x=0$），$|e^{-\cos^2x}\sin x|\le1$，且 $F'(0)=1>0$，故 $F'(x)>0$，$F$ 严格单调增，根唯一。选 (B)。
【评注】「零点存在 + 严格单调」是判断根的个数的标准两步。` },
      { n: 124, q: R`设 $f(x)=\begin{cases}\sqrt{4+x},&x>0,\\0,&x=0,\\\sqrt{1-x},&x<0,\end{cases}$ $F(x)=\displaystyle\int_0^xf(t)\,\mathrm{d}t$，则
(A) $F(x)$ 在 $x=0$ 点不连续。 (B) $F(x)$ 在 $x=0$ 点不可导。
(C) $F(x)$ 在 $x=0$ 点可导，$F'(0)=f(0)$。 (D) $F(x)$ 在 $x=0$ 点可导，但 $F'(0)\neq f(0)$。`, a: R`(B)`, sol: R`【分析】由变限积分求导，$F'_+(0)=f(0^+)=\sqrt{4}=2$，$F'_-(0)=f(0^-)=\sqrt1=1$，左右导数不等，故 $F$ 在 0 不可导。选 (B)。
【评注】变限积分的左右导数等于被积函数的单侧极限（被积函数在相应侧连续时），与 $f(0)$ 的取值无关。` },
      { n: 125, q: R`设函数 $f(x)$ 连续，则在下列变上限积分定义的函数中，必为偶函数的是
(A) $\displaystyle\int_0^xt[f(t)-f(-t)]\,\mathrm{d}t$。 (B) $\displaystyle\int_0^xt[f(t)+f(-t)]\,\mathrm{d}t$。
(C) $\displaystyle\int_0^xf(t^2)\,\mathrm{d}t$。 (D) $\displaystyle\int_0^x[f(t)]^2\,\mathrm{d}t$。`, a: R`(B)`, sol: R`【分析】结论：若 $g$ 连续且为奇函数，则 $\int_0^xg(t)dt$ 为偶函数。
(B) 中 $g(t)=t[f(t)+f(-t)]$，$g(-t)=-t[f(-t)+f(t)]=-g(t)$，为奇函数，故积分为偶函数。选 (B)。
(A)(C)(D) 中被积函数均为偶函数，积分为奇函数（取 $f(x)=x$ 验证）。
【评注】「奇函数的变上限积分为偶，偶函数的变上限积分为奇」。` }
    ]
  };
})();
