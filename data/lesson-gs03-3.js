window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["gs03_s2"] = {
    id: "gs03_s2",
    ch: "第三章 一元函数积分学",
    title: "第三节 反常积分",
    book: "武忠祥《高等数学辅导讲义》",
    pages: [110, 113],
    img: "assets/img/gaoshu",
    content: [
      { p: 110, md: R`（第二节 题型四 续）【例6】设 $f(x)$ 在 $[0,1]$ 上有连续导数，且 $f(0)=0$，求证 $\displaystyle\int_0^1f^2(x)dx\leqslant\dfrac12\int_0^1f'^2(x)dx$。

【证】由 $f(x)=\displaystyle\int_0^xf'(t)dt$，$f^2(x)=\left(\displaystyle\int_0^xf'(t)dt\right)^2\leqslant\int_0^11^2dt\cdot\int_0^xf'^2(t)dt=x\int_0^xf'^2(t)dt\leqslant x\int_0^1f'^2(t)dt$（柯西积分不等式），故 $\displaystyle\int_0^1f^2(x)dx\leqslant\int_0^1x\,dx\cdot\int_0^1f'^2(t)dt=\dfrac12\int_0^1f'^2(t)dt$。

【注】若再加条件 $f(1)=0$，可证 $\displaystyle\int_0^1f^2(x)dx\leqslant\dfrac14\int_0^1f'^2(x)dx$ 及 $\leqslant\dfrac18\int_0^1f'^2(x)dx$。

### 一、考试内容要点精讲
#### （一）无穷区间上的反常积分
定义1：设 $f(x)$ 为 $[a,+\infty)$ 上的连续函数，若 $\lim\limits_{t\to+\infty}\int_a^tf(x)dx$ 存在，则称此极限为 $f(x)$ 在 $[a,+\infty)$ 上的反常积分，记作 $\displaystyle\int_a^{+\infty}f(x)dx=\lim\limits_{t\to+\infty}\int_a^tf(x)dx$，此时称收敛，否则称发散。

定义2：$\displaystyle\int_{-\infty}^bf(x)dx=\lim\limits_{t\to-\infty}\int_t^bf(x)dx$。

定义3：$\displaystyle\int_{-\infty}^{+\infty}f(x)dx=\int_{-\infty}^0f(x)dx+\int_0^{+\infty}f(x)dx$，当且仅当两个积分都收敛时收敛。` },
      { p: 111, md: R`常用结论：$\displaystyle\int_a^{+\infty}\dfrac{1}{x^p}dx\begin{cases}p>1,&\text{收敛}\\p\leqslant1,&\text{发散}\end{cases}\quad(a>0)$。

#### （二）无界函数的反常积分
若 $f(x)$ 在点 $a$ 的任一邻域内都无界，则点 $a$ 称为 $f(x)$ 的瑕点（无界点）。无界函数的反常积分也称瑕积分。

定义1：设 $f(x)$ 在 $(a,b]$ 上连续，$a$ 为瑕点，若 $\lim\limits_{t\to a^+}\int_t^bf(x)dx$ 存在，则称 $\displaystyle\int_a^bf(x)dx=\lim\limits_{t\to a^+}\int_t^bf(x)dx$ 收敛。
定义2：$\displaystyle\int_a^bf(x)dx=\lim\limits_{t\to b^-}\int_a^tf(x)dx$（$b$ 为瑕点）。
定义3：$c\in(a,b)$ 为瑕点，$\displaystyle\int_a^bf(x)dx=\int_a^cf(x)dx+\int_c^bf(x)dx$，当且仅当两者都收敛时收敛。

常用结论：$\displaystyle\int_a^b\dfrac{1}{(x-a)^p}dx\begin{cases}p<1,&\text{收敛}\\p\geqslant1,&\text{发散}\end{cases}$；$\displaystyle\int_a^b\dfrac{1}{(b-x)^p}dx\begin{cases}p<1,&\text{收敛}\\p\geqslant1,&\text{发散}\end{cases}$。

### 二、常考题型的方法与技巧
### 题型一　反常积分的概念与敛散性
【例1】下列广义积分发散的是 (A) $\displaystyle\int_{-1}^1\dfrac{dx}{\sin x}$　(B) $\displaystyle\int_{-1}^1\dfrac{dx}{\sqrt{1-x^2}}$　(C) $\displaystyle\int_0^{+\infty}e^{-x^2}dx$　(D) $\displaystyle\int_2^{+\infty}\dfrac{dx}{x\ln^2x}$

【解1】排除法：$\displaystyle\int_{-1}^1\dfrac{dx}{\sqrt{1-x^2}}=\arcsin x\Big|_{-1}^1=\pi$，收敛；` },
      { p: 112, md: R`$\displaystyle\int_0^{+\infty}e^{-x^2}dx$ 肯定收敛（概率积分 $\dfrac{1}{\sqrt{2\pi}}\int_{-\infty}^{+\infty}e^{-\frac{x^2}{2}}dx=1$）；$\displaystyle\int_2^{+\infty}\dfrac{dx}{x\ln^2x}=-\dfrac{1}{\ln x}\Big|_2^{+\infty}=\dfrac{1}{\ln2}$，收敛。故应选 (A)。

【解2】直接法：$\displaystyle\int_{-1}^1\dfrac{dx}{\sin x}=\int_{-1}^0\dfrac{dx}{\sin x}+\int_0^1\dfrac{dx}{\sin x}$。因 $x\to0^+$ 时 $\sin x\sim x$，故 $\displaystyle\int_0^1\dfrac{dx}{\sin x}$ 与 $\displaystyle\int_0^1\dfrac1x dx$ 同敛散，而 $\int_0^1\dfrac{dx}{x}$ 发散，故原积分发散。选 (A)。

【例2】设函数 $f(x)=\begin{cases}\dfrac{1}{(x-1)^{a-1}},&1<x<e\\\dfrac{1}{x\ln^{a+1}x},&x\geqslant e\end{cases}$，若 $\displaystyle\int_1^{+\infty}f(x)dx$ 收敛，则 (A) $a<-2$　(B) $a>2$　(C) $-2<a<0$　(D) $0<a<2$

【解】$\displaystyle\int_1^{+\infty}f(x)dx=\int_1^e\dfrac{dx}{(x-1)^{a-1}}+\int_e^{+\infty}\dfrac{dx}{x\ln^{a+1}x}$。由前者收敛知 $a-1<1$，即 $a<2$；由后者 $\xrightarrow{t=\ln x}\displaystyle\int_1^{+\infty}\dfrac{dt}{t^{a+1}}$ 收敛知 $a+1>1$，即 $a>0$。故 $0<a<2$，选 (D)。

### 题型二　反常积分计算
【例1】计算 $\displaystyle\int_1^{+\infty}\dfrac{\arctan x}{x^2}dx$。

【解】原式 $=-\displaystyle\int_1^{+\infty}\arctan x\,d\dfrac1x=-\dfrac{\arctan x}{x}\Big|_1^{+\infty}+\int_1^{+\infty}\dfrac{dx}{x(1+x^2)}=\dfrac\pi4+\ln\dfrac{x}{\sqrt{1+x^2}}\Big|_1^{+\infty}=\dfrac\pi4+\dfrac12\ln2$。

【例2】计算 $\displaystyle\int_3^{+\infty}\dfrac{dx}{(x-1)^4\sqrt{x^2-2x}}$。

【解】原式 $=\displaystyle\int_3^{+\infty}\dfrac{dx}{(x-1)^4\sqrt{(x-1)^2-1}}\xrightarrow{x-1=\sec t}\int_{\frac\pi3}^{\frac\pi2}\dfrac{\sec t\tan t}{\sec^4t\tan t}dt=\int_{\frac\pi3}^{\frac\pi2}\cos^3t\,dt=\dfrac23-\dfrac{3\sqrt3}{8}$。

【例3】计算 $\displaystyle\int_0^{+\infty}\dfrac{xe^{-x}}{(1+e^{-x})^2}dx$。` },
      { p: 113, md: R`【解】原式 $=\displaystyle\int_0^{+\infty}\dfrac{xe^x}{(1+e^x)^2}dx=-\int_0^{+\infty}x\,d\dfrac{1}{1+e^x}=-\dfrac{x}{1+e^x}\Big|_0^{+\infty}+\int_0^{+\infty}\dfrac{dx}{1+e^x}=\int_0^{+\infty}\dfrac{e^{-x}}{1+e^{-x}}dx=-\ln(1+e^{-x})\Big|_0^{+\infty}=\ln2$。

【例4】求证 $\displaystyle\int_0^{+\infty}\dfrac{x^2}{1+x^4}dx=\int_0^{+\infty}\dfrac{1}{1+x^4}dx$，并求其值。

【解】令 $x=\dfrac1t$，左端 $=\displaystyle\int_0^{+\infty}\dfrac{x^2}{1+x^4}dx=\int_{+\infty}^0\dfrac{\frac{1}{t^2}}{1+\frac{1}{t^4}}\left(-\dfrac{1}{t^2}\right)dt=\int_0^{+\infty}\dfrac{1}{1+t^4}dt=$ 右端。

原式 $=\dfrac12\displaystyle\int_0^{+\infty}\dfrac{x^2+1}{1+x^4}dx=\dfrac12\int_0^{+\infty}\dfrac{1+\frac{1}{x^2}}{x^2+\frac{1}{x^2}}dx=\dfrac12\int_0^{+\infty}\dfrac{d\left(x-\frac1x\right)}{\left(x-\frac1x\right)^2+2}=\dfrac{1}{2\sqrt2}\arctan\dfrac{x-\frac1x}{\sqrt2}\Big|_0^{+\infty}=\dfrac{1}{2\sqrt2}\left[\dfrac\pi2-\left(-\dfrac\pi2\right)\right]=\dfrac{\pi}{2\sqrt2}$。` }
    ],
    quiz: [
      { q: R`$\displaystyle\int_a^{+\infty}\frac{1}{x^p}dx\ (a>0)$ 收敛的条件是`, options: [R`$p>1$`, R`$p<1$`, R`$p\geqslant1$`, R`$p\leqslant1$`], answer: 0, explain: R`无穷区间 $p$ 积分，$p>1$ 收敛。` },
      { q: R`$\displaystyle\int_a^b\frac{1}{(x-a)^p}dx$ 收敛的条件是`, options: [R`$p<1$`, R`$p>1$`, R`$p\geqslant1$`, R`$p\leqslant0$`], answer: 0, explain: R`瑕积分（瑕点在 $a$），$p<1$ 收敛。` },
      { q: R`无界函数的反常积分也称为`, options: [R`瑕积分`, R`定积分`, R`变限积分`, R`重积分`], answer: 0, explain: R`以瑕点为特征，称瑕积分。` },
      { q: R`$\displaystyle\int_{-1}^1\frac{dx}{\sqrt{1-x^2}}=$`, options: [R`$\pi$`, R`发散`, R`$0$`, R`$1$`], answer: 0, explain: R`$=\arcsin x|_{-1}^1=\pi$，收敛。` },
      { q: R`$\displaystyle\int_0^{+\infty}e^{-x^2}dx$`, options: [R`收敛`, R`发散`, R`等于 $1$`, R`等于 $0$`], answer: 0, explain: R`概率积分，收敛（$=\frac{\sqrt\pi}{2}$）。` },
      { q: R`$\displaystyle\int_1^{+\infty}\frac{\arctan x}{x^2}dx=$`, options: [R`$\dfrac\pi4+\dfrac12\ln2$`, R`$\dfrac\pi4$`, R`$\dfrac12\ln2$`, R`发散`], answer: 0, explain: R`分部积分计算得该值。` },
      { q: R`$\displaystyle\int_2^{+\infty}\frac{dx}{x\ln^2x}=$`, options: [R`$\dfrac{1}{\ln2}$`, R`$\ln2$`, R`发散`, R`$0$`], answer: 0, explain: R`$=-\frac{1}{\ln x}|_2^{+\infty}=\frac{1}{\ln2}$。` },
      { q: R`反常积分 $\displaystyle\int_{-\infty}^{+\infty}f(x)dx$ 收敛的充要条件是`, options: [R`$\displaystyle\int_{-\infty}^0f$ 与 $\int_0^{+\infty}f$ 都收敛`, R`$\displaystyle\int_0^{+\infty}f$ 收敛`, R`$\displaystyle\int_{-\infty}^0f$ 收敛`, R`$f$ 有界`], answer: 0, explain: R`需两端积分都收敛。` },
      { q: R`$\displaystyle\int_0^{+\infty}\frac{xe^{-x}}{(1+e^{-x})^2}dx=$`, options: [R`$\ln2$`, R`$1$`, R`$\dfrac12$`, R`$0$`], answer: 0, explain: R`计算得 $\ln2$。` },
      { q: R`$\displaystyle\int_0^{+\infty}\frac{dx}{1+x^4}=$`, options: [R`$\dfrac{\pi}{2\sqrt2}$`, R`$\dfrac{\pi}{4}$`, R`$\dfrac{\pi}{2}$`, R`发散`], answer: 0, explain: R`由对称性求得 $\frac{\pi}{2\sqrt2}$。` }
    ]
  };
})();
