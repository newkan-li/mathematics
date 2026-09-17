window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q880_s22"] = {
    id: "q880_s22",
    ch: "880题 · 高数 · 第三章 一元函数积分学及其应用",
    title: "综合题·解答题（三）",
    probTitle: "第三章 综合题 · 解答题 (13)–(18)（含原书解析）",
    book: "李林《精讲精练 880 题（数学二）》2026",
    problems: [
      { n: "(13)", q: R`设 $f(x)$ 满足 $e^{-x}-\frac{x^2}2=1+\int_0^xf(t-x)dt$，求 $f(x)$ 在 $(-\infty,+\infty)$ 内的最值。`, a: R`最大值 $f(0)=-1$，无最小值`, sol: R`【解】$\int_0^xf(t-x)dt\xlongequal{t-x=u}\int_{-x}^0f(u)du$，故 $e^{-x}-\frac{x^2}2=1+\int_{-x}^0f(u)du$。两边求导得 $-e^{-x}-x=-f(-x)$，即 $f(-x)=e^{-x}+x$，故 $f(x)=e^x-x$。
$f'(x)=e^x-1=0$ 得 $x=0$；$x<0$ 时 $f'<0$，$x>0$ 时 $f'>0$，故 $f(0)=-1$ 为极小值也是最小值；又 $\lim\limits_{x\to\pm\infty}f(x)=+\infty$，故 $f$ 无最大值。
（注：原书此处给出最大值 $f(0)=-1$、无最小值；按 $f(x)=e^x-x$ 实为最小值 $f(0)=1$。）` },
      { n: "(14)", q: R`求 $f(x)=\int_0^{x^2}(2-t)e^{-t}dt$ 的最大值和最小值。`, a: R`最小值 $0$，最大值 $1+e^{-2}$`, sol: R`【解】$f$ 为偶函数，只需求 $[0,+\infty)$ 上的最值。$f'(x)=2x(2-x^2)e^{-x^2}=0$ 得 $x=0,\sqrt2$。$0<x<\sqrt2$ 时 $f'>0$，$x>\sqrt2$ 时 $f'<0$。又 $\lim\limits_{x\to+\infty}f(x)=\int_0^{+\infty}(2-t)e^{-t}dt=1$。比较 $f(0)=0$，$f(\sqrt2)=1+e^{-2}$，故最小值 $0$，最大值 $1+e^{-2}$。` },
      { n: "(15)", q: R`证明：$\lim\limits_{n\to\infty}\int_0^1\frac{x^n}{1+x}dx=0$。`, a: R`见证明`, sol: R`【证】方法一：$x\in[0,1]$ 时 $0\leqslant\frac{x^n}{1+x}\leqslant x^n$，故 $0\leqslant\int_0^1\frac{x^n}{1+x}dx\leqslant\int_0^1x^ndx=\frac1{n+1}\to0$，由夹逼准则原式 $=0$。
方法二：由积分第一中值定理 $\int_0^1\frac{x^n}{1+x}dx=\frac1{1+\xi}\int_0^1x^ndx=\frac1{(1+\xi)(1+n)}\ (0<\xi<1)$，故极限为 0。
【注】推广的积分第一中值定理：$f$ 连续、$g$ 可积且不变号，则存在 $\xi$ 使 $\int_a^bfg=f(\xi)\int_a^bg$。` },
      { n: "(16)", q: R`求极限 $\lim\limits_{n\to\infty}\left(\frac{2^{\frac1n}}{n+1}+\frac{2^{\frac2n}}{n+\frac12}+\cdots+\frac{2^{\frac nn}}{n+\frac1n}\right)$。`, a: R`$\frac1{\ln2}$`, sol: R`【解】设 $x_n$ 为所求和，则 $\frac n{n+1}\left(2^{\frac1n}+\cdots+2^{\frac nn}\right)\frac1n\leqslant x_n\leqslant\frac1n\left(2^{\frac1n}+\cdots+2^{\frac nn}\right)$。由定积分定义 $\lim\limits_{n\to\infty}\left(2^{\frac1n}+\cdots+2^{\frac nn}\right)\frac1n=\int_0^12^xdx=\frac1{\ln2}$，且 $\lim\limits_{n\to\infty}\frac n{n+1}=1$，由夹逼准则 $x_n\to\frac1{\ln2}$。` },
      { n: "(17)", q: R`求极限 $\lim\limits_{n\to\infty}\frac1n\sqrt[n]{n(n+1)(n+2)\cdots(2n-1)}$。`, a: R`$\frac4e$`, sol: R`【解】令 $x_n=\frac1n\sqrt[n]{n(n+1)\cdots(2n-1)}=\sqrt[n]{\frac nn\cdot\frac{n+1}n\cdots\frac{n+(n-1)}n}$，则 $\ln x_n=\frac1n\sum\limits_{k=0}^{n-1}\ln\left(1+\frac kn\right)$，故
$$\lim_{n\to\infty}\ln x_n=\int_0^1\ln(1+x)dx=2\ln2-1=\ln\frac4e,$$
故原极限 $=\frac4e$。` },
      { n: "(18)", q: R`设 $f(x)=x^2$，$f[g(x)]=-x^2+2x+3$，且 $g(x)\geqslant0$。
(Ⅰ) 求 $g(x)$ 的定义域与值域；
(Ⅱ) 求 $\lim\limits_{n\to\infty}\sum\limits_{k=1}^n\frac kn e^{\frac kn}\cdot\frac1{n+g(x)}$。`, a: R`(Ⅰ) 定义域 $[-1,3]$，值域 $[0,2]$；(Ⅱ) $1$`, sol: R`【解】(Ⅰ) $g^2(x)=-x^2+2x+3$，$g(x)=\sqrt{-x^2+2x+3}$，由 $-x^2+2x+3\geqslant0$ 得定义域 $[-1,3]$；$g$ 在 $x=1$ 取最大 $2$，$g(-1)=g(3)=0$，故值域 $[0,2]$。
(Ⅱ) 由 $0\leqslant g(x)\leqslant2$ 得 $\frac1{n+2}\leqslant\frac1{n+g(x)}\leqslant\frac1n$，故
$$\frac n{n+2}\sum_{k=1}^n\frac kn e^{\frac kn}\cdot\frac1n\leqslant\sum_{k=1}^n\frac kn e^{\frac kn}\frac1{n+g(x)}\leqslant\sum_{k=1}^n\frac kn e^{\frac kn}\cdot\frac1n.$$
两端极限均为 $\int_0^1xe^xdx=(xe^x-e^x)|_0^1=1$，由夹逼准则原极限 $=1$。` }
    ]
  };
})();
