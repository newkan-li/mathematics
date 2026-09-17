window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q880_s10"] = {
    id: "q880_s10",
    ch: "880题 · 高数 · 第二章 一元函数微分学及其应用",
    title: "综合题·填空题",
    probTitle: "第二章 综合题 · 填空题（含原书解析）",
    book: "李林《精讲精练 880 题（数学二）》2026",
    problems: [
      { n: "(1)", q: R`设函数 $f(x)=\left[\tan\left(\frac\pi4x\right)-1\right]\left[\tan\left(\frac\pi4x^2\right)-2\right]\cdots\left[\tan\left(\frac\pi4x^{100}\right)-100\right]$，则 $f'(1)=\underline{\qquad}$。`, a: R`$-\frac{99!}2\pi$`, sol: R`【解】令 $f(x)=\left[\tan\left(\frac\pi4x\right)-1\right]g(x)$，其中 $g(1)=(-1)(-2)\cdots(-99)=-99!$。则
$$f'(1)=\left[\tan\left(\frac\pi4x\right)-1\right]'\Big|_{x=1}\cdot g(1)+0=\frac\pi4\cdot\frac1{\cos^2\frac\pi4}\cdot(-99!)=-\frac{99!}2\pi.$$` },
      { n: "(2)", q: R`设 $f(x)=3x^2+kx^{-3}$，若对任意 $x\in(0,+\infty)$，都有 $f(x)\geqslant20$，则 $k$ 至少为 $\underline{\qquad}$。`, a: R`$64$`, sol: R`【解】$f'(x)=6x-3kx^{-4}=0$ 得唯一驻点 $x=\sqrt[5]{\frac k2}$，且 $f''(x)=6+12kx^{-5}>0$，故 $f\left(\sqrt[5]{\frac k2}\right)=5\left(\frac k2\right)^{\frac25}$ 为最小值。由 $5\left(\frac k2\right)^{\frac25}\geqslant20$ 解得 $k\geqslant64$，即 $k$ 至少为 64。` },
      { n: "(3)", q: R`函数 $y=e^{-x}\left(1+x+\frac{x^2}{2!}+\cdots+\frac{x^n}{n!}\right)$（$n$ 为正奇数）的极大值为 $\underline{\qquad}$。`, a: R`$1$`, sol: R`【解】$y'=\left[1+x+\cdots+\frac{x^{n-1}}{(n-1)!}\right]e^{-x}-\left(1+x+\cdots+\frac{x^n}{n!}\right)e^{-x}=-\frac{x^n}{n!}e^{-x}=0$ 得 $x=0$。因 $n$ 为奇数，$x<0$ 时 $y'>0$，$x>0$ 时 $y'<0$，故 $f(0)=1$ 为极大值。` },
      { n: "(4)", q: R`设 $f(x)=\begin{cases}-\frac1x,&x<0,\\1+\ln x,&x>0.\end{cases}$ 若 $f(a)=f(b),a<0<b$，则 $b-a$ 的最小值为 $\underline{\qquad}$。`, a: R`$2$`, sol: R`【解】由 $f(a)=f(b)$ 得 $-\frac1a=1+\ln b$，即 $b=e^{-\frac1a-1}$，故 $b-a=e^{-\frac1a-1}-a$。令 $g(t)=e^{-\frac1t-1}-t\ (t<0)$，$g'(t)=\frac{e^{-\frac1t-1}-t^2}{t^2}=0$ 得唯一驻点 $t=-1$；$t<-1$ 时 $g'<0$，$t>-1$ 时 $g'>0$，故 $t=-1$ 为极小值点也是最小值点，$g(-1)=2$，即 $b-a$ 的最小值为 2。` },
      { n: "(5)", q: R`已知 $f(x)$ 在 $(-\infty,+\infty)$ 内可导，且 $\lim\limits_{x\to\infty}f'(x)=e$，$\lim\limits_{x\to\infty}\left(\frac{x+k}{x-k}\right)^x=\lim\limits_{x\to\infty}[f(x)-f(x-1)]$，则 $k=\underline{\qquad}$。`, a: R`$\frac12$`, sol: R`【解】$k\neq0$，$\lim\limits_{x\to\infty}\left(\frac{x+k}{x-k}\right)^x=\lim\limits_{x\to\infty}\left[\left(1+\frac{2k}{x-k}\right)^{\frac{x-k}{2k}}\right]^{\frac{2kx}{x-k}}=e^{2k}$。由拉格朗日中值定理 $f(x)-f(x-1)=f'(\xi)\ (\xi\in(x-1,x))$，故 $\lim\limits_{x\to\infty}[f(x)-f(x-1)]=\lim\limits_{x\to\infty}f'(\xi)=e$，于是 $e^{2k}=e$，$k=\frac12$。` },
      { n: "(6)", q: R`设 $y=f(x)$ 在 $(-\infty,\infty)$ 内连续，且其导函数 $f'(x)$ 的图形如图所示，其中 $x=0$ 和 $x=x_5$ 是 $f'(x)$ 的铅直渐近线，则 $y=f(x)$ 极值点的个数为 $\underline{\qquad}$，拐点的个数为 $\underline{\qquad}$。`, a: R`$4$，$3$`, sol: R`【解】由图知 $f'(x_1)=f'(x_3)=f'(x_4)=f'(x_6)=0$，$f'(0)$ 与 $f'(x_5)$ 不存在，可能的极值点为 $x_1,x_3,0,x_4,x_6,x_5$。在 $x_1,x_3,0,x_4$ 两侧 $f'$ 异号，故有 4 个极值点。
又 $f''(x_2)=f''(x_6)=0$，$f''(0),f''(x_5)$ 不存在；在 $x_2,x_6,x_5$ 两侧 $f''$ 变号，故拐点有 3 个。` },
      { n: "(7)", q: R`设 $f(x)$ 在 $x=x_0$ 处可导，且 $f(x_0)\neq0$，则 $\lim\limits_{x\to\infty}\left[\frac{f\left(x_0+\frac1x\right)}{f(x_0)}\right]^x=\underline{\qquad}$。`, a: R`$e^{\frac{f'(x_0)}{f(x_0)}}$`, sol: R`【解】$1^\infty$ 型。$\lim\limits_{x\to\infty}\left[1+\frac{f(x_0+\frac1x)-f(x_0)}{f(x_0)}\right]^x$，而 $\lim\limits_{x\to\infty}\frac{f(x_0+\frac1x)-f(x_0)}{\frac1x}=f'(x_0)$，故原极限 $=e^{\frac{f'(x_0)}{f(x_0)}}$。` },
      { n: "(8)", q: R`设 $y=f(x)$ 在 $x_0$ 处有三阶连续导数，$f'(x_0)=1,f''(x_0)=2,f'''(x_0)=3$，$y=f(x)$ 有反函数 $x=g(y)$，且 $y_0=f(x_0)$，则 $g'''(y_0)=\underline{\qquad}$。`, a: R`$9$`, sol: R`【解】由反函数求导法则 $g'(y)=\frac1{f'(x)}$，$g''(y)=-\frac{f''(x)}{[f'(x)]^3}$，$g'''(y)=-\frac{f'''(x)[f'(x)]^3-3[f'(x)]^2[f''(x)]^2}{[f'(x)]^7}$，代入得
$$g'''(y_0)=-\frac{3\cdot1-3\cdot4}{1}=9.$$` },
      { n: "(9)", q: R`设 $f(x)$ 为 $(-1,+\infty)$ 内的连续函数，$f(x)=\int_0^xe^{-f(t)}dt$，若 $g(x)=xf(x+1)$，则 $g^{(n)}(0)\ (n>2)=\underline{\qquad}$。`, a: R`$n!\dfrac{(-1)^{n-2}}{(n-1)2^{n-1}}$`, sol: R`【解】$f'(x)=e^{-f(x)}$，即 $e^{f(x)}f'(x)=1$，积分得 $e^{f(x)}=x+C$，即 $f(x)=\ln(x+C)$。由 $f(0)=0$ 得 $C=1$，故 $f(x)=\ln(x+1)$。$g(x)=x\ln(x+2)=x\ln2+x\ln\left(1+\frac x2\right)=x\ln2+\frac{x^2}2-\frac1{2\cdot2^2}x^3+\cdots+\frac{(-1)^{n-1}}{n\cdot2^n}x^{n+1}+o(x^{n+1})$，故 $g^{(n)}(0)=n!\cdot\frac{(-1)^{n-2}}{(n-1)2^{n-1}}$。` },
      { n: "(10)", q: R`设 $x=f(y)$ 是单调可导函数 $y=g(x)$ 的反函数，且 $g(1)=2,g'(1)=-\frac{\sqrt3}3$，则 $\lim\limits_{y\to2}\left[(y-2)\cdot\frac{f(y)-f(2)}{(\ln y-\ln2)^2}\right]=\underline{\qquad}$。`, a: R`$-4\sqrt3$`, sol: R`【解】由 $f'(y)=\frac1{g'(x)}$ 及 $y=2$ 时 $x=1$，得 $f'(2)=\frac1{g'(1)}=-\sqrt3$。故
$$\lim_{y\to2}\left[(y-2)\frac{f(y)-f(2)}{(\ln y-\ln2)^2}\right]=\lim_{y\to2}\frac{f(y)-f(2)}{y-2}\cdot\frac{(y-2)^2}{(\ln y-\ln2)^2}=4f'(2)=-4\sqrt3.$$` }
    ]
  };
})();
