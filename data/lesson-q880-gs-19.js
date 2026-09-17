window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q880_s18"] = {
    id: "q880_s18",
    ch: "880题 · 高数 · 第三章 一元函数积分学及其应用",
    title: "综合题·选择题",
    probTitle: "第三章 综合题 · 选择题（含原书解析）",
    book: "李林《精讲精练 880 题（数学二）》2026",
    problems: [
      { n: "(1)", q: R`设在 $(-1,1)$ 内 $f(x)$ 是奇函数，$F(x)$ 是 $f(x)$ 在 $(-1,1)$ 内的一个原函数，则在 $(-1,1)$ 内 $f(x)+F(x)$（ ）。
(A) 是可导的偶函数
(B) 是连续的奇函数
(C) 存在原函数
(D) 存在原函数且原函数为奇函数`, a: R`(C)`, sol: R`【解】由 $F'(x)=f(x)$ 知 $F$ 连续，故 $F$ 存在原函数，从而 $f+F$ 存在原函数，选项 C 正确。
由 $f$ 为奇函数知 $F$ 为连续的偶函数，但 $f+F$ 无奇偶性，排除 D。$f$ 有原函数但不一定连续，如 $F(x)=x^2\cos\frac1x\ (x\neq0),F(0)=0$ 时 $f=F'$ 在 $x=0$ 不连续，故 $f+F$ 不连续，排除 A、B。` },
      { n: "(2)", q: R`设 $F(x)=\int_x^{x+2\pi}e^{\sin t}\sin t\,dt$，则正确的是（ ）。
(A) $F(x)$ 为正的常数
(B) $F(x)$ 为负的常数
(C) $F(x)$ 不是常数
(D) $F(x)$ 恒为零`, a: R`(A)`, sol: R`【解】$e^{\sin t}\sin t$ 以 $2\pi$ 为周期，故 $F(x)=\int_0^{2\pi}e^{\sin t}\sin t\,dt=-e^{\sin t}\cos t|_0^{2\pi}+\int_0^{2\pi}\cos^2t\,e^{\sin t}dt=\int_0^{2\pi}\cos^2t\,e^{\sin t}dt>0$，选项 A 正确。
【注】设 $f(x+T)=f(x)$ 连续，则 $\int_a^{a+T}f(x)dx=\int_0^Tf(x)dx$。` },
      { n: "(3)", q: R`设 $\delta>0$，在 $(-\delta,\delta)$ 内有 $|f(x)|\leqslant x^2$，$f''(x)>0$，$I=\int_{-\delta}^\delta f(x)dx$，则（ ）。
(A) $I=0$
(B) $I>0$
(C) $I<0$
(D) 不能确定`, a: R`(B)`, sol: R`【解】由 $|f(x)|\leqslant x^2$ 得 $f(0)=0$，且 $0\leqslant|f'(0)|=\lim\limits_{x\to0}\left|\frac{f(x)}x\right|\leqslant\lim\limits_{x\to0}\frac{x^2}{|x|}=0$，故 $f'(0)=0$。由 $f''(x)>0$ 知 $f'$ 单调增，故 $(-\delta,0)$ 内 $f'<0$、$(0,\delta)$ 内 $f'>0$，$f$ 在 $x=0$ 取最小值 $f(0)=0$，从而 $f(x)\geqslant0$ 且仅 $x=0$ 处为 0，$I>0$，选项 B 正确。` },
      { n: "(4)", q: R`设 $I_1=\int_0^{\frac\pi2}\sin(\sin x)dx$，$I_2=\int_0^{\frac\pi2}\cos(\sin x)dx$，则（ ）。
(A) $I_1<1<I_2$
(B) $I_2<1<I_1$
(C) $1<I_1<I_2$
(D) $I_1<I_2<1$`, a: R`(A)`, sol: R`【解】$x\in\left(0,\frac\pi2\right)$ 时 $\sin x<x$，故 $\sin(\sin x)<\sin x$，$\cos(\sin x)>\cos x$，于是 $I_1<\int_0^{\pi/2}\sin x\,dx=1$，$I_2>\int_0^{\pi/2}\cos x\,dx=1$，故 $I_1<1<I_2$，选项 A 正确。` },
      { n: "(5)", q: R`设 $I_1=\int_0^{\frac\pi2}\frac{\cos x}{1+x^2}dx$，$I_2=\int_0^{\frac\pi2}\frac{\sin x}{1+x^2}dx$，$I_3=\int_0^{\frac\pi2}\frac{\sin x}{(1+x)^2}dx$，则（ ）。
(A) $I_2>I_1>I_3$
(B) $I_3>I_2>I_1$
(C) $I_1>I_2>I_3$
(D) $I_2>I_3>I_1$`, a: R`(C)`, sol: R`【解】$(1+x)^2\geqslant1+x^2$，故 $I_2>I_3$。作差 $I_1-I_2=\int_0^{\pi/2}\frac{\cos x-\sin x}{1+x^2}dx$，经代换可化为 $\int_0^{\pi/4}(\cos x-\sin x)\frac{(\frac\pi2-x)^2-x^2}{(1+x^2)[1+(\frac\pi2-x)^2]}dx>0$，故 $I_1>I_2$。综上 $I_1>I_2>I_3$，选项 C 正确。` },
      { n: "(6)", q: R`设 $f(x)$ 为可导函数，且 $f'(x)<0$，则下列命题正确的是（ ）。
① 当 $0<t<1$ 时，$\int_0^tf(x)dx<\int_0^1f(x)dx$；② 当 $0<t<1$ 时，$\int_0^tf(x)dx>\int_0^1f(x)dx$；
③ 当 $x\geqslant0$ 时，$\int_0^xxf(t)dt\geqslant2\int_0^xtf(t)dt$；④ 当 $x\geqslant0$ 时，$\int_0^xxf(t)dt\leqslant2\int_0^xtf(t)dt$。
(A) ①④
(B) ②③
(C) ②④
(D) ①③`, a: R`(B)`, sol: R`【解】取 $f(x)=-x$，则 $f'(x)=-1<0$。$0<t<1$ 时 $\int_0^tf=-t^2/2>\int_0^1f=-t/2$，②正确。
令 $F(x)=\int_0^xxf(t)dt-2\int_0^xtf(t)dt$，则 $F'(x)=\int_0^xf(t)dt-xf(x)=x[f(\xi)-f(x)]\geqslant0\ (0<\xi<x)$（因 $f$ 单调减），故 $F(x)\geqslant0$，③正确。选 B。` },
      { n: "(7)", q: R`设 $f(x)$ 在 $[0,1]$ 上可导，$f(x)>0$，$f'(x)<0$，$F(x)=\int_0^xf(t)dt$，则在 $x\in(0,1)$ 内，有（ ）。
(A) $xf(1)>2\int_0^1F(x)dx$
(B) $F(1)>2\int_0^1F(x)dx$
(C) $F(x)<2\int_0^1F(x)dx$
(D) $F(x)>2\int_0^1F(x)dx`, a: R`(C)`, sol: R`【解】$F'(x)=f(x)>0$，$F''(x)=f'(x)<0$，故 $F$ 单调增且上凸。弦 $OA$ 的方程为 $y=xF(1)$，且 $F(x)>xF(1)\ (x\in(0,1))$，故 $\int_0^1F(x)dx>\int_0^1xF(1)dx=\frac12F(1)$，即 $F(1)<2\int_0^1F(x)dx$，排除 B。又 $F(x)<F(1)<2\int_0^1F(x)dx$，选项 C 正确。` },
      { n: "(8)", q: R`设函数 $f(x)$ 在 $[0,a](a>0)$ 上有二阶连续导数，且 $f(0)=0$，$f''(x)>0$，则下列选项正确的是（ ）。
(A) $3\int_0^axf(x)dx<2\int_0^aaf(x)dx$
(B) $3\int_0^axf(x)dx>2\int_0^aaf(x)dx$
(C) $2\int_0^axf(x)dx>3\int_0^aaf(x)dx$
(D) $2\int_0^axf(x)dx<3\int_0^aaf(x)dx`, a: R`(B)`, sol: R`【解】令 $F(t)=\int_0^txf(x)dx-\frac23t\int_0^tf(x)dx$，则 $F'(t)=\frac13tf(t)-\frac23\int_0^tf(x)dx$，$F''(t)=\frac13t[f'(t)-f'(\xi)]>0\ (0<\xi<t)$，故 $F'>0$，$F(t)>0$，取 $t=a$ 得 $\int_0^axf(x)dx>\frac23a\int_0^af(x)dx$，即 $3\int_0^axf(x)dx>2a\int_0^af(x)dx$，选项 B 正确。` },
      { n: "(9)", q: R`设 $f(x)$ 二阶可导，则下列结论正确的是（ ）。
① 当 $f'(x)<0$ 时，$\int_{-\pi}^\pi f(x)\sin x\,dx<0$；② 当 $f'(x)<0$ 时，$\int_{-\pi}^\pi f(x)\sin x\,dx>0$；
③ 当 $f''(x)>0$ 时，$\int_{-\pi}^\pi f(x)\cos x\,dx>0$；④ 当 $f''(x)>0$ 时，$\int_{-\pi}^\pi f(x)\cos x\,dx<0$。
(A) ②③
(B) ①②
(C) ②④
(D) ①④`, a: R`(D)`, sol: R`【解】$\int_{-\pi}^\pi f(x)\sin x\,dx=\int_0^\pi[f(x)-f(-x)]\sin x\,dx$，由 $f'<0$ 知 $f(x)\leqslant f(-x)$，故该积分 $<0$，①正确。
$\int_{-\pi}^\pi f(x)\cos x\,dx=f(x)\sin x|_{-\pi}^\pi-\int_{-\pi}^\pi f'(x)\sin x\,dx=-\int_{-\pi}^\pi f'(x)\sin x\,dx$，由 $f''>0$ 知 $f'$ 单调增，$(-f')'<0$，由①知该积分 $<0$，④正确。选 D。` },
      { n: "(10)", q: R`设反常积分 $\int_1^{+\infty}x^k\left(e^{-\cos\frac1x}-e^{-1}\right)dx$ 收敛，则正确的是（ ）。
(A) $k>-1$
(B) $k<-1$
(C) $k>1$
(D) $k<1$`, a: R`(D)`, sol: R`【解】$e^{-\cos\frac1x}-e^{-1}=e^{-1}(e^{1-\cos\frac1x}-1)\sim e^{-1}(1-\cos\frac1x)\sim\frac1{2ex^2}$，故 $x^k(e^{-\cos\frac1x}-e^{-1})\sim\frac1{2ex^{2-k}}$。当 $2-k>1$ 即 $k<1$ 时收敛，当 $k\geqslant1$ 时发散，选项 D 正确。
【注】$\int_a^{+\infty}\frac{dx}{x^p}$ 当 $p>1$ 收敛，$p\leqslant1$ 发散。` },
      { n: "(11)", q: R`设连续函数 $f(x)$ 满足 $f(x)=f(2a-x)(a\neq0)$，$b$ 为常数，则 $I=\int_{-b}^bf(a-x)dx=$（ ）。
(A) $2\int_0^bf(2a-x)dx$
(B) $2\int_{-b}^bf(2a-x)dx$
(C) $2\int_0^bf(a-x)dx$
(D) $0$`, a: R`(C)`, sol: R`【解】由 $f(x)=f(2a-x)$ 得 $f(a+x)=f(a-x)$，故
$$\int_{-b}^0f(a-x)dx\xlongequal{x=-t}\int_0^bf(a+t)dt=\int_0^bf(a-x)dx,$$
所以 $I=2\int_0^bf(a-x)dx$，选项 C 正确。` },
      { n: "(12)", q: R`设螺线 $r=\theta(0\leqslant\theta\leqslant2\pi)$ 与极轴所围区域的面积为 $A$，则 $A=$（ ）。
(A) $\lim\limits_{n\to\infty}\sum\limits_{i=1}^n\frac{4\pi^3i^2}{n^3}$
(B) $\lim\limits_{n\to\infty}\sum\limits_{i=1}^n\frac{4\pi^3i^2}{n^2}$
(C) $\lim\limits_{n\to\infty}\sum\limits_{i=1}^n\frac{8\pi^3i^2}{n^3}$
(D) $\lim\limits_{n\to\infty}\sum\limits_{i=1}^n\frac{2\pi^3i^2}{n^2}$`, a: R`(A)`, sol: R`【解】$A=\int_0^{2\pi}\frac12r^2(\theta)d\theta=\lim\limits_{n\to\infty}\sum\limits_{i=1}^n\frac12\left(\frac{2\pi i}{n}\right)^2\frac{2\pi}n=\lim\limits_{n\to\infty}\sum\limits_{i=1}^n\frac{4\pi^3i^2}{n^3}$，选项 A 正确。` },
      { n: "(13)", q: R`设 $f(x)$ 有连续导数，$f(0)=0$，$f'(0)=6$，$\alpha(x)=\int_0^{x^3}f(t)dt$，$\beta(x)=\left[\int_0^xf(t)dt\right]^3$，则当 $x\to0$ 时，$\alpha(x)$ 与 $\beta(x)$ 是（ ）。
(A) 同阶无穷小
(B) 等价无穷小
(C) 高阶无穷小
(D) 低阶无穷小`, a: R`(A)`, sol: R`【解】令 $g(x)=\int_0^xf(t)dt$，则 $\lim\limits_{x\to0}\frac{g(x)}{x^2}=\lim\limits_{x\to0}\frac{f'(x)}2=3$，故 $g(x)\sim3x^2$，$g(x^3)\sim3x^6$，$\beta(x)=g^3(x)\sim27x^6$。故 $\lim\limits_{x\to0}\frac{\alpha(x)}{\beta(x)}=\frac{3x^6}{27x^6}=\frac19$，同阶无穷小，选项 A 正确。` },
      { n: "(14)", q: R`设 $I=\frac1s\int_0^sf\left(t+\frac xs\right)dx$，$s>0,t>0$，则正确的是（ ）。
(A) $I$ 仅依赖于 $s$
(B) $I$ 仅依赖于 $t$
(C) $I$ 依赖于 $s,t$
(D) $I$ 依赖于 $s,t,x$`, a: R`(B)`, sol: R`【解】令 $t+\frac xs=u$，则 $du=\frac1sdx$，$I=\frac1s\int_t^{t+1}f(u)s\,du=\int_t^{t+1}f(u)du$，故 $I$ 仅依赖于 $t$，选项 B 正确。` },
      { n: "(15)", q: R`下列积分存在且不为零的是（ ）。
(A) $\int_0^1\frac1{(4x-1)^3}dx$
(B) $\int_{-\infty}^{+\infty}\frac x{\sqrt{1+x^2}}dx$
(C) $\int_{-1}^1x\ln\frac{2+x}{2-x}dx$
(D) $\int_{-\frac\pi2}^{\frac\pi2}e^{x^2}\sin x\,dx$`, a: R`(C)`, sol: R`【解】$x\ln\frac{2+x}{2-x}$ 为偶函数且在 $[0,1]$ 上 $\geqslant0$，故 $\int_{-1}^1x\ln\frac{2+x}{2-x}dx=2\int_0^1x\ln\frac{2+x}{2-x}dx>0$，选项 C 正确。
A 中 $x=\frac14$ 为瑕点且发散；B 发散；D 中 $e^{x^2}\sin x$ 为奇函数，积分为 0。` },
      { n: "(16)", q: R`设反常积分 $\int_0^{+\infty}\frac{\ln(1+x)}{x^p}dx$ 收敛，则（ ）。
(A) $0<p<2$
(B) $1<p<2$
(C) $0<p\leqslant1$
(D) $p>1$`, a: R`(B)`, sol: R`【解】拆为 $\int_0^1+\int_1^{+\infty}$。前者：$x\to0$ 时 $\frac{\ln(1+x)}{x^p}\sim\frac1{x^{p-1}}$，收敛需 $p<2$。后者：$p>1$ 时收敛，$0<p\leqslant1$ 时发散。综上 $1<p<2$，选项 B 正确。` },
      { n: "(17)", q: R`设积分 $I=\int_1^{+\infty}\frac{dx}{x^p\ln^qx}(p>0,q>0)$ 收敛，则（ ）。
(A) $p>1$ 且 $q<1$
(B) $p>1$ 且 $q>1$
(C) $p<1$ 且 $q<1$
(D) $p<1$ 且 $q>1$`, a: R`(A)`, sol: R`【解】$\int_1^e\frac{dx}{x^p\ln^qx}$ 与 $\int_1^e\frac{dx}{(x-1)^q}$ 敛散性相同，收敛需 $q<1$，排除 B、D。
$q<1$ 时：$p=1$ 时 $\int_e^{+\infty}\frac{dx}{x\ln^qx}=\frac1{1-q}\ln^{1-q}x|_e^{+\infty}=\infty$ 发散；$p<1$ 时发散；$p>1$ 时 $\int_e^{+\infty}\frac{dx}{x^p\ln^qx}<\int_e^{+\infty}\frac{dx}{x^p}$ 收敛。故 $p>1,q<1$，选项 A 正确。` },
      { n: "(18)", q: R`设积分 $\int_0^{+\infty}\frac{x^{1-p}\arctan x}{2+x^p}dx\ (p>0)$ 收敛，则 $p$ 的取值范围为（ ）。
(A) $1<p<3$
(B) $2<p<3$
(C) $1\leqslant p<2$
(D) $0<p<3$`, a: R`(A)`, sol: R`【解】拆为 $\int_0^1+\int_1^{+\infty}$。前者：$\lim\limits_{x\to0^+}x^{-(1-p)-1}\cdot\frac{x^{1-p}\arctan x}{2+x^p}=\frac12$，收敛需 $p<3$。后者：$\lim\limits_{x\to+\infty}x^{p-(1-p)}\cdot\frac{x^{1-p}\arctan x}{2+x^p}=\frac\pi2$，收敛需 $p>1$。故 $1<p<3$，选项 A 正确。` },
      { n: "(19)", q: R`已知 $I=\int_0^{+\infty}\left(\frac1{\sqrt{x^2+4}}-\frac a{x+2}\right)dx$ 收敛，则（ ）。
(A) $a=1,I=\ln4$
(B) $a>1,I=\ln2$
(C) $a=1,I=\ln2$
(D) $a<1,I=\ln4$`, a: R`(C)`, sol: R`【解】$I=\left[\ln(x+\sqrt{x^2+4})-a\ln(x+2)\right]\Big|_0^{+\infty}=\lim\limits_{x\to+\infty}\ln\frac{x+\sqrt{x^2+4}}{(x+2)^a}-\ln2+a\ln2$。$a\neq1$ 时极限为 $\infty$ 发散；$a=1$ 时 $I=\ln\left(\lim\limits_{x\to+\infty}\frac{x+\sqrt{x^2+4}}{x+2}\right)=\ln2$，选项 C 正确。` }
    ]
  };
})();
