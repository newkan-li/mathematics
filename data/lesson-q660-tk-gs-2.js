window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q660_s14"] = {
    id: "q660_s14",
    ch: "660题 · 填空题 · 高等数学",
    title: "填空题 第 326–350 题",
    probTitle: "填空题（含原书详解）",
    book: "《数学基础过关660题（数学二）》",
    problems: [
      { n: 326, q: R`$[x]$ 表示 $x$ 的最大整数部分，则 $\lim\limits_{x\to0}x\left[\dfrac2x\right]=\underline{\qquad}$。`, a: R`$2$`, sol: R`【分析】由 $\dfrac2x-1<\left[\dfrac2x\right]\leqslant\dfrac2x$：当 $x>0$ 时 $2-x<x\left[\dfrac2x\right]\leqslant2$；当 $x<0$ 时 $2\leqslant x\left[\dfrac2x\right]<2-x$。又 $\lim\limits_{x\to0}(2-x)=2$，由夹逼定理得极限为 2。
【评注】用夹逼定理求极限，关键在找出合适的两侧估计。` },
      { n: 327, q: R`设 $\{a_n\}$ 为数列，$\lim\limits_{n\to\infty}\dfrac{a_{n+1}}{a_n}=q,|q|<1$，则 $\lim\limits_{n\to\infty}a_n=\underline{\qquad}$。`, a: R`$0$`, sol: R`【分析】取 $q_0$ 满足 $|q|<q_0<1$。由 $\lim\left|\frac{a_{n+1}}{a_n}\right|=|q|<q_0$，存在 $N$，当 $n\geqslant N$ 时 $|a_{n+1}|<q_0|a_n|$，递推得 $|a_n|<q_0^{n-N}|a_N|\to0$，故 $\lim\limits_{n\to\infty}a_n=0$。
【评注】由此可求 $\lim\frac{n^n}{(n!)^2}=0$、$\lim\frac{e^n}{n!}=0$ 等。` },
      { n: 328, q: R`数列 $x_n=n\left[e\left(1+\dfrac1n\right)^n-1\right]$，则 $\lim\limits_{n\to\infty}x_n=\underline{\qquad}$。`, a: R`$\frac12$`, sol: R`【分析】$e\left(1+\frac1n\right)^n-1\sim\ln\left[e\left(1+\frac1n\right)^n\right]=1-n\ln\left(1+\frac1n\right)$，故
$$\lim_{n\to\infty}x_n=\lim_{n\to\infty}\left[1-n\ln\left(1+\frac1n\right)\right].$$
用泰勒公式 $\ln(1+t)=t-\frac12t^2+o(t^2)$（$t=\frac1n$）：$1-n\left(\frac1n-\frac1{2n^2}+o(\frac1{n^2})\right)=\frac12+n^2o(\frac1{n^2})\to\frac12$。
【评注】$\infty\cdot0$ 型可用等价无穷小替换、泰勒公式或化 $\frac00$ 型用洛必达法则。` },
      { n: 329, q: R`设 $\lim\limits_{n\to\infty}x_n=a$，则当 $a>1$ 时 $\lim\limits_{n\to\infty}x_n^n=\underline{\qquad}$，当 $|a|<1$ 时 $\lim\limits_{n\to\infty}x_n^n=\underline{\qquad}$。`, a: R`$+\infty$；$0$`, sol: R`【分析】$a>1$ 时取 $q$ 使 $a>q>1$，存在 $N$ 当 $n>N$ 时 $x_n>q$，故 $x_n^n>q^n\to+\infty$，即 $\lim x_n^n=+\infty$。
$|a|<1$ 时取 $q$ 使 $|a|<q<1$，当 $n>N$ 时 $|x_n|<q$，故 $|x_n|^n<q^n\to0$，即 $\lim x_n^n=0$。
【评注】用极限的不等式性质作放大缩小；$\lim x_n=0\iff\lim|x_n|=0$。` },
      { n: 330, q: R`极限 $I=\lim\limits_{n\to\infty}\displaystyle\int_0^1\ln(1+x^n)\,\mathrm dx=\underline{\qquad}$。`, a: R`$0$`, sol: R`【分析】由 $0<\ln(1+t)<t\ (t>0)$ 得
$$0<\int_0^1\ln(1+x^n)dx<\int_0^1x^n dx=\frac1{n+1}\to0,$$
由夹逼定理得 $I=0$。` },
      { n: 331, q: R`设 $a_0>0,a_n=a_{n-1}(a_{n-1}+1)\ (n=1,2,\cdots)$，则 $\lim\limits_{n\to\infty}a_n=\underline{\qquad}$。`, a: R`$+\infty$`, sol: R`【分析】$a_n>0$，且 $a_n=a_{n-1}(a_{n-1}+1)>a_{n-1}$，$\{a_n\}$ 单调上升。
若 $\lim a_n=a$ 为有限值，则 $a>0$ 且 $a=a(a+1)$，得 $a=0$，矛盾。故 $\lim\limits_{n\to\infty}a_n=+\infty$。
【评注】单调有界定理的逆用：若极限有限将导出矛盾，则发散到 $+\infty$。` },
      { n: 332, q: R`设 $f(x)=\begin{cases}x^3,&(x<-1),\\2-x,&(-1\leqslant x\leqslant0),\\2+x,&(x>0),\end{cases}$ $g(x)=\begin{cases}x^2,&(x<0),\\-x,&(x\geqslant0),\end{cases}$ 则 $\lim\limits_{x\to0}f(g(x))=\underline{\qquad}$。`, a: R`$2$`, sol: R`【分析】$g(x)$ 在 $x=0$ 连续，$g(0)=0$；$f(u)$ 在 $u=0$ 连续（左、右极限均为 2，$f(0)=2$）。故复合函数 $f(g(x))$ 在 $x=0$ 连续，$\lim\limits_{x\to0}f(g(x))=f(g(0))=f(0)=2$。` },
      { n: 333, q: R`设 $f(x)$ 连续，$x\to a$ 时 $f(x)$ 是 $(x-a)$ 的 $n$ 阶无穷小，则 $x\to a$ 时 $\displaystyle\int_a^xf(t)\,\mathrm dt$ 是 $(x-a)$ 的 $\underline{\qquad}$ 阶无穷小（填阶数）。`, a: R`$n+1$`, sol: R`【分析】已知 $\lim\limits_{x\to a}\frac{f(x)}{(x-a)^n}=A\neq0$，用洛必达法则：
$$\lim_{x\to a}\frac{\int_a^xf(t)dt}{(x-a)^{n+1}}=\lim_{x\to a}\frac{f(x)}{(n+1)(x-a)^n}=\frac{A}{n+1}\neq0,$$
故 $\int_a^xf(t)dt$ 是 $(x-a)$ 的 $n+1$ 阶无穷小。` },
      { n: 334, q: R`已知当 $x\to0$ 时 $F(x)=\displaystyle\int_0^{x-\sin x}\ln(1+t)\,\mathrm dt$ 是 $x^n$ 的同阶无穷小，则 $n=\underline{\qquad}$。`, a: R`$6$`, sol: R`【分析】用洛必达法则与等价无穷小（$\ln(1+(x-\sin x))\sim x-\sin x$，$1-\cos x\sim\frac12x^2$）：
$$\lim_{x\to0}\frac{F(x)}{x^n}=\lim_{x\to0}\frac{\ln(1+(x-\sin x))(1-\cos x)}{nx^{n-1}}=\frac12\lim_{x\to0}\frac{x-\sin x}{nx^{n-3}}=\frac12\lim_{x\to0}\frac{1-\cos x}{n(n-3)x^{n-4}},$$
取 $n=6$ 时极限为 $\frac1{72}\neq0$，故 $n=6$。` },
      { n: 335, q: R`设函数 $f(x)$ 在 $x=1$ 连续，且 $f(1)=1$，则 $\lim\limits_{x\to+\infty}\ln\left[2+f\left(x^{\frac1x}\right)\right]=\underline{\qquad}$。`, a: R`$\ln3$`, sol: R`【分析】先求 $\lim\limits_{x\to+\infty}x^{1/x}=e^{\lim\frac{\ln x}{x}}=e^0=1$。由 $f$ 在 $x=1$ 连续得 $\lim\limits_{x\to+\infty}f(x^{1/x})=f(1)=1$，故 $\lim\limits_{x\to+\infty}\ln[2+f(x^{1/x})]=\ln3$。` },
      { n: 336, q: R`设 $f(x)=\begin{cases}\dfrac{\ln(1+x^2)}{1+x^2},&(-\infty<x\leqslant1),\\Ae^{\arctan x},&(1<x<+\infty),\end{cases}$ $f(x)$ 在 $(-\infty,+\infty)$ 处连续，则 $A=\underline{\qquad}$。`, a: R`$\frac12e^{-\frac\pi4}\ln2$`, sol: R`【分析】分段函数在分段点连续 $\iff$ 两侧表达式在 $x=1$ 取值相等：$Ae^{\arctan1}=\dfrac{\ln2}{2}$，即 $Ae^{\pi/4}=\frac{\ln2}{2}$，故 $A=\frac12e^{-\pi/4}\ln2$。` },
      { n: 337, q: R`设 $f(x)=\begin{cases}6,&x\leqslant0,\\\dfrac{e^{ax^3}-1}{x-\arcsin x},&x>0\end{cases}$ $g(x)=\begin{cases}\dfrac{3\sin(x-1)}{x-1},&x<1,\\e^{bx}+1,&x\geqslant1\end{cases}$ 若 $f(x)+g(x)$ 在 $(-\infty,+\infty)$ 连续，则 $a=\underline{\qquad}$ 且 $b=\underline{\qquad}$。`, a: R`$a=-1$，$b=\ln2$`, sol: R`【分析】$f$ 在 $x=0$ 左连续 $f(0)=6$，而
$$\lim_{x\to0^+}\frac{e^{ax^3}-1}{x-\arcsin x}=\lim_{t\to0^+}\frac{at^3}{\sin t-t}=-6a\ (t=\arcsin x),$$
仅当 $-6a=6$ 即 $a=-1$ 时 $f$ 在 $x=0$ 连续。
$g$ 在 $x=1$ 右连续 $g(1)=e^b+1$，而 $\lim\limits_{x\to1^-}\frac{3\sin(x-1)}{x-1}=3$，仅当 $e^b+1=3$ 即 $b=\ln2$ 时连续。
故 $a=-1,b=\ln2$。` },
      { n: 338, q: R`设 $f(x)=\dfrac{e^x-b}{(x-a)(x-b)}$ 有无穷间断点 $x=e$，可去间断点 $x=1$，则 $(a,b)=\underline{\qquad}$。`, a: R`$(1,e)$`, sol: R`【分析】间断点只能是 $x=a,x=b$。若 $a=1,b=e$，则 $f(x)=\frac{e^x-e}{(x-1)(x-e)}$，$\lim\limits_{x\to1}f(x)=\frac{e}{1-e}$（可去），$\lim\limits_{x\to e}f(x)=\infty$（无穷），符合题意。
若 $a=e,b=1$，则 $x=1$ 与 $x=e$ 均为无穷间断点，不合。故 $(a,b)=(1,e)$。` },
      { n: 339, q: R`设 $f(x)=\lim\limits_{n\to\infty}\dfrac{x+x^2e^{nx}}{1+e^{nx}}$，则 $f(x)$ 的连续区间是 $\underline{\qquad}$。`, a: R`$(-\infty,+\infty)$`, sol: R`【分析】分 $x<0$、$x=0$、$x>0$ 讨论：$x<0$ 时 $e^{nx}\to0$，$f=x$；$x=0$ 时 $f=0$；$x>0$ 时分子分母同除 $e^{nx}$，$f=x^2$。故 $f(x)=\begin{cases}x,&x\leqslant0,\\x^2,&x>0,\end{cases}$ 处处连续，连续区间为 $(-\infty,+\infty)$。` },
      { n: 340, q: R`设 $f(x)=\begin{cases}\arctan x,&x\leqslant1,\\\dfrac12(e^{x^2-1}-x)+\dfrac\pi4,&x>1,\end{cases}$ 则 $f'(x)=\underline{\qquad}$。`, a: R`$f'(x)=\begin{cases}\dfrac1{1+x^2},&x\leqslant1,\\\dfrac12(2xe^{x^2-1}-1),&x>1.\end{cases}$`, sol: R`【分析】$x<1$ 时 $f'(x)=\frac1{1+x^2}$，$x>1$ 时 $f'(x)=\frac12(2xe^{x^2-1}-1)$。在 $x=1$：$f'_-(1)=\frac12$，$f'_+(1)=\frac12(2-1)=\frac12$，故 $f'(1)=\frac12$。` },
      { n: 341, q: R`函数 $f(x)$ 满足 $f(0)=0,f'(0)>0$，则 $J=\lim\limits_{x\to0^+}x^{f(x)}=\underline{\qquad}$。`, a: R`$1$`, sol: R`【分析】由 $f'(0)=\lim\limits_{x\to0}\frac{f(x)}{x}>0$，存在 $\delta>0$ 当 $x\in(0,\delta)$ 时 $f(x)>0$。
$J=e^{\lim\limits_{x\to0^+}f(x)\ln x}$，而 $\lim\limits_{x\to0^+}f(x)\ln x=\lim\limits_{x\to0^+}\frac{f(x)}{x}(x\ln x)=f'(0)\cdot0=0$（用 $\lim x\ln x=0$），故 $J=e^0=1$。` },
      { n: 342, q: R`设 $f(x)=\begin{cases}\dfrac{\arctan x}{x},&x\neq0,\\1,&x=0,\end{cases}$ 则 $f'(x)=\underline{\qquad}$。`, a: R`$f'(x)=\begin{cases}\dfrac{x-(1+x^2)\arctan x}{x^2(1+x^2)},&x\neq0,\\0,&x=0.\end{cases}$`, sol: R`【分析】$x\neq0$ 时 $f'(x)=\dfrac{\frac{x}{1+x^2}-\arctan x}{x^2}=\dfrac{x-(1+x^2)\arctan x}{x^2(1+x^2)}$。
$x=0$ 时按定义：$f'(0)=\lim\limits_{x\to0}\frac{\frac{\arctan x}{x}-1}{x}=\lim\limits_{x\to0}\frac{\arctan x-x}{x^2}=\lim\limits_{x\to0}\frac{\frac1{1+x^2}-1}{2x}=0$。
【评注】分段点处导数一般用定义求，或连续时用 $\lim\limits_{x\to x_0}f'(x)$。` },
      { n: 343, q: R`设 $f'(1)=1$，则 $I=\lim\limits_{x\to0}\dfrac{f(1+x)-f(1-2\sin x)}{x+2\sin x}=\underline{\qquad}$。`, a: R`$1$`, sol: R`【分析】用导数定义：
$$I=\lim_{x\to0}\left[\frac{f(1+x)-f(1)}{x}\cdot\frac{x}{x+2\sin x}+\frac{f(1-2\sin x)-f(1)}{-2\sin x}\cdot\frac{2\sin x}{x+2\sin x}\right]=f'(1)\cdot\frac13+f'(1)\cdot\frac23=f'(1)=1.$$` },
      { n: 344, q: R`设 $f(x)$ 在 $x=0$ 可导且 $f(0)=1,f'(0)=3$，则数列极限 $I=\lim\limits_{n\to\infty}\left(f\left(\dfrac1n\right)\right)^{\frac1{1-\cos\frac1n}}=\underline{\qquad}$。`, a: R`$e^6$`, sol: R`【分析】$I=e^{\lim\limits_{n\to\infty}\frac{1}{1-\cos\frac1n}\ln f(\frac1n)}$，而
$$\lim_{n\to\infty}\frac{1}{1-\cos\frac1n}\ln f\left(\frac1n\right)=\lim_{n\to\infty}\frac{1}{\frac12\cdot\frac1{n^2}}\left[\ln f\left(\frac1n\right)-\ln f(0)\right]=2\lim_{n\to\infty}\frac{\ln f(\frac1n)-\ln f(0)}{\frac1n}=2\cdot\frac{f'(0)}{f(0)}=6,$$
故 $I=e^6$（用 $(\ln f)'|_{x=0}=\frac{f'(0)}{f(0)}$）。
【评注】不可直接用洛必达，因题设未设 $f$ 在 0 邻域可导。` },
      { n: 345, q: R`设 $\varphi(x)=\begin{cases}x^2\arctan\dfrac1x,&x<0,\\\ln(1+x^2),&x\geqslant0,\end{cases}$ $f(x)$ 可导，则 $\dfrac{\mathrm d}{\mathrm dx}f[\varphi(x)]=\underline{\qquad}$。`, a: R`$\begin{cases}f'\left(x^2\arctan\frac1x\right)\left(2x\arctan\frac1x-\frac{x^2}{1+x^2}\right),&x<0,\\f'(\ln(1+x^2))\cdot\frac{2x}{1+x^2},&x\geqslant0.\end{cases}$`, sol: R`【分析】先求 $\varphi'(x)$：$x>0$ 时 $\varphi'(x)=\frac{2x}{1+x^2}$；$x<0$ 时 $\varphi'(x)=2x\arctan\frac1x-\frac{x^2}{1+x^2}$。在 $x=0$ 处 $\varphi'_-(0)=0$，$\varphi'_+(0)=0$，故 $\varphi'(0)=0$。
由复合函数求导法得 $\frac{d}{dx}f(\varphi(x))=f'(\varphi(x))\varphi'(x)$，即上式。` },
      { n: 346, q: R`当 $\sin x>0,\cos x>0$ 时 $y=(\sin x)^{\cos x}+\log_{\sin x}\cos x$，则 $y'=\underline{\qquad}$。`, a: R`$(\sin x)^{1+\cos x}(\cot^2x-\ln\sin x)-\dfrac{\tan x}{\ln\sin x}-\cot x\dfrac{\ln\cos x}{\ln^2\sin x}$`, sol: R`【分析】$\left((\sin x)^{\cos x}\right)'=(e^{\cos x\ln\sin x})'=(\sin x)^{\cos x}\left(-\sin x\ln\sin x+\frac{\cos^2x}{\sin x}\right)=(\sin x)^{1+\cos x}(\cot^2x-\ln\sin x)$；
$\left(\log_{\sin x}\cos x\right)'=\left(\frac{\ln\cos x}{\ln\sin x}\right)'=\dfrac{-\frac{\sin x}{\cos x}\ln\sin x-\frac{\cos x}{\sin x}\ln\cos x}{\ln^2\sin x}=-\dfrac{\tan x}{\ln\sin x}-\cot x\dfrac{\ln\cos x}{\ln^2\sin x}$。
两者相加即得。` },
      { n: 347, q: R`设可导函数 $f(x)$ 的原函数是 $F(x)$，可导函数 $g(x)$ 的原函数是 $G(x)$，$g(x)$ 与 $f(x)$ 互为反函数，则 $\dfrac{\mathrm dF(g(x))}{\mathrm dx}\cdot\dfrac{\mathrm dG(f(x))}{\mathrm dx}=\underline{\qquad}$。`, a: R`$x^2f'(x)g'(x)$`, sol: R`【分析】$\frac{dF(g(x))}{dx}=F'(g(x))g'(x)=f(g(x))g'(x)$，$\frac{dG(f(x))}{dx}=G'(f(x))f'(x)=g(f(x))f'(x)$。
因 $f,g$ 互为反函数，$f(g(x))=x$、$g(f(x))=x$，故乘积 $=xg'(x)\cdot xf'(x)=x^2f'(x)g'(x)$。` },
      { n: 348, q: R`设质点 $P$ 在直角坐标系 $xOy$ 的 $y$ 轴上作匀速运动，速度为 $c$，定点 $A$ 在 $x$ 轴上 $x=a>0$ 处，记 $AP$ 之长为 $l$，$AP$ 与 $x$ 轴夹角为 $\theta$，则直线段 $AP$ 的角速度与 $l^2$ 之积等于 $\underline{\qquad}$。`, a: R`$ac$`, sol: R`【分析】$P$ 点坐标 $(0,y)$，$\tan\theta=\frac ya$。两边对 $t$ 求导：$\frac{1}{\cos^2\theta}\frac{d\theta}{dt}=\frac1a\frac{dy}{dt}$。以 $\cos^2\theta=\frac{a^2}{l^2}$、$\frac{dy}{dt}=c$ 代入得 $\frac{l^2}{a^2}\frac{d\theta}{dt}=\frac ca$，故 $l^2\frac{d\theta}{dt}=ac$。` },
      { n: 349, q: R`设 $f(x)$ 在 $x=a$ 处二阶导数存在，则 $I=\lim\limits_{h\to0}\dfrac{\dfrac{f(a+h)-f(a)}{h}-f'(a)}{h}=\underline{\qquad}$。`, a: R`$\frac12f''(a)$`, sol: R`【分析】$I=\lim\limits_{h\to0}\frac{f(a+h)-f(a)-hf'(a)}{h^2}\xlongequal{\text{洛必达}}\lim\limits_{h\to0}\frac{f'(a+h)-f'(a)}{2h}=\frac12f''(a)$。
【评注】由 $f''(a)$ 存在知 $f'$ 在 $a$ 邻域可导，故第一步可用洛必达；也可用泰勒公式 $f(a+h)=f(a)+f'(a)h+\frac12f''(a)h^2+o(h^2)$ 直接得结果。` },
      { n: 350, q: R`曲线 $y=e^{x^3}$ 过原点的切线是 $\underline{\qquad}$。`, a: R`$y=\sqrt[3]{3}\,e^{\frac13}x$`, sol: R`【分析】$(0,0)$ 不在曲线上，设切点 $(x_0,e^{x_0^3})$。$y'=3x^2e^{x^3}$，切线 $y-e^{x_0^3}=3x_0^2e^{x_0^3}(x-x_0)$。代入 $(0,0)$ 得 $e^{x_0^3}=3x_0^3e^{x_0^3}$，$x_0^3=\frac13$，斜率 $k=3x_0^2e^{x_0^3}=\sqrt[3]{3}e^{1/3}$，故切线为 $y=\sqrt[3]{3}e^{1/3}x$。
【评注】求过已知点的切线，先判断点是否在曲线上；不在则先求切点。` }
    ]
  };
})();
