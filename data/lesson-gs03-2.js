window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["gs03_s1"] = {
    id: "gs03_s1",
    ch: "第三章 一元函数积分学",
    title: "第二节 定积分",
    book: "武忠祥《高等数学辅导讲义》",
    pages: [94, 109],
    img: "assets/img/gaoshu",
    content: [
      { p: 94, md: R`由 $F(0)=1$ 得 $F(x)=\sqrt{\dfrac{e^x}{1+x}}$，从而 $f(x)=\dfrac{1}{F(x)}\dfrac{xe^x}{2(1+x)^2}=\dfrac{xe^x}{2(1+x)^2}\sqrt{\dfrac{1+x}{e^x}}$。

【例4】设 $f'(e^x)=\sin x$，求 $f(x)$。
【解1】令 $e^x=t$，则 $f'(t)=\sin\ln t$，从而
$$f(t)=\int\sin\ln tdt=t\sin\ln t-\int t\cos\ln t\cdot\dfrac1tdt=t\sin\ln t-t\cos\ln t-\int t\sin\ln t\cdot\dfrac1tdt,$$
则 $f(t)=\dfrac t2[\sin\ln t-\cos\ln t]+C$。
【解2】等式 $f'(e^x)=\sin x$ 两端对 $e^x$ 积分得
$$f(e^x)=\int\sin xde^x=e^x\sin x-\int e^x\cos xdx=e^x\sin x-e^x\cos x-\int\sin xde^x,$$
则 $f(e^x)=\dfrac{e^x}{2}[\sin x-\cos x]+C$，从而 $f(x)=\dfrac x2[\sin\ln x-\cos\ln x]+C$。

【例5】求不定积分 $\displaystyle\int e^{-|x|}dx$。
【解】$\displaystyle\int e^{-|x|}dx=\begin{cases}-e^{-x}+C_1,&x\geqslant0\\e^x+C_2,&x<0\end{cases}$。$e^{-|x|}$ 连续，原函数 $F(x)$ 必连续，从而 $F(x)$ 在 $x=0$ 连续。由于 $\lim\limits_{x\to0^+}F(x)=\lim\limits_{x\to0^+}(-e^{-x}+C_1)=-1+C_1$，$\lim\limits_{x\to0^-}F(x)=\lim\limits_{x\to0^-}(e^x+C_2)=1+C_2$，故有 $-1+C_1=1+C_2$，令 $C_1=C$，则 $C_2=-2+C$。因此 $\displaystyle\int e^{-|x|}dx=\begin{cases}-e^{-x}+C,&x\geqslant0\\e^x-2+C,&x<0\end{cases}$。

## 一、考试内容要点精讲
### （一）定积分的概念
设函数 $f(x)$ 在区间 $[a,b]$ 上有定义，在区间 $[a,b]$ 内任意插入 $n-1$ 个分点 $a=x_0<x_1<\cdots<x_n=b$，将 $[a,b]$ 分成 $n$ 个小区间 $[x_{i-1},x_i]$，记 $\Delta x_i=x_i-x_{i-1}$。在 $[x_{i-1},x_i]$ 上任取一点 $\xi_i$，作和式 $\sum\limits_{i=1}^nf(\xi_i)\Delta x_i$，记 $\lambda=\max\{\Delta x_1,\cdots,\Delta x_n\}$。若 $\lim\limits_{\lambda\to0}\sum\limits_{i=1}^nf(\xi_i)\Delta x_i$ 存在，且此极限值不依赖于区间 $[a,b]$ 的分法，也不依赖于点 $\xi_i$ 的取` },
      { p: 95, md: R`法，则称此极限值为 $f(x)$ 在区间 $[a,b]$ 上的定积分，记为 $\int_a^bf(x)dx$，即 $\int_a^bf(x)dx=\lim\limits_{\lambda\to0}\sum\limits_{i=1}^nf(\xi_i)\Delta x_i$。
【注】(1) 定积分表示一个数值，它取决于积分区间 $[a,b]$ 与被积函数 $f(x)$，与积分变量无关，因此有 $\int_a^bf(x)dx=\int_a^bf(t)dt$。
(2) 若 $f(x)$ 在区间 $[0,1]$ 上连续，则积分 $\int_0^1f(x)dx$ 存在。将 $[0,1]$ 区间 $n$ 等分，此时 $\Delta x_i=\dfrac1n$，取 $\xi_i=\dfrac in$，由定积分的定义得
$$\int_0^1f(x)dx=\lim_{\lambda\to0}\sum_{i=1}^nf(\xi_i)\Delta x_i=\lim_{n\to\infty}\dfrac1n\sum_{i=1}^nf\left(\dfrac in\right).$$
等式右端的极限可通过等式左端的积分来计算。

### （二）定积分的几何意义
1) 设 $\int_a^bf(x)dx$ 存在，若在 $[a,b]$ 上 $f(x)\geqslant0$，则 $\int_a^bf(x)dx$ 的值等于以曲线 $y=f(x)$，$x=a$，$x=b$ 及 $x$ 轴所围成的曲边梯形的面积。
2) 若在 $[a,b]$ 上 $f(x)\leqslant0$，则 $\int_a^bf(x)dx$ 的值等于上述曲边梯形面积的负值。
3) 若在 $[a,b]$ 上 $f(x)$ 的值有正也有负，则 $\int_a^bf(x)dx$ 在几何上表示 $x$ 轴上方图形的面积减去下方图形的面积所得之差。

### （三）可积性
1. 必要条件：若 $\int_a^bf(x)dx$ 存在，则 $f(x)$ 在 $[a,b]$ 上有界。
2. 充分条件：① 若 $f(x)$ 在 $[a,b]$ 上连续，则 $\int_a^bf(x)dx$ 必定存在；② 若 $f(x)$ 在 $[a,b]$ 上有界，且只有有限个间断点，则 $\int_a^bf(x)dx$ 必定存在；③ 若 $f(x)$ 在 $[a,b]$ 上只有有限个第一类间断点，则 $\int_a^bf(x)dx$ 必定存在。

### （四）定积分的计算
1) 牛顿—莱布尼兹公式：如果函数 $F(x)$ 是连续函数 $f(x)$ 在区间 $[a,b]$ 上的一个原函数，则 $\int_a^bf(x)dx=F(b)-F(a)$。` },
      { p: 96, md: R`2) 换元积分法：设 $f(x)$ 在区间 $[a,b]$ 上连续，函数 $x=\varphi(t)$ 满足：(1) $\varphi(\alpha)=a,\varphi(\beta)=b$；(2) $\varphi(t)$ 在 $[\alpha,\beta]$（或 $[\beta,\alpha]$）上具有连续导数，且其值域 $R_\varphi=[a,b]$，则
$$\int_a^bf(x)dx=\int_\alpha^\beta f(\varphi(t))\varphi'(t)dt.$$
3) 分部积分法：设函数 $u(x)$ 和 $v(x)$ 在 $[a,b]$ 上有连续一阶导数，则 $\int_a^budv=uv\Big|_a^b-\int_a^bvdu$。
4) 利用奇偶性和周期性：(1) 设 $f(x)$ 为 $[-a,a]$ 上的连续函数 $(a>0)$，则 $\int_{-a}^af(x)dx=\begin{cases}0,&f(x)\text{ 为奇函数时}\\2\int_0^af(x)dx,&f(x)\text{ 为偶函数时}\end{cases}$；(2) 设 $f(x)$ 是以 $T$ 为周期的连续函数，则对任给数 $a$，总有 $\int_a^{a+T}f(x)dx=\int_0^Tf(x)dx$。
5) 利用公式：(1) $\displaystyle\int_0^{\frac\pi2}\sin^nxdx=\int_0^{\frac\pi2}\cos^nxdx=\begin{cases}\dfrac{n-1}{n}\cdot\dfrac{n-3}{n-2}\cdots\dfrac12\cdot\dfrac\pi2,&n\text{ 为偶数}\\\dfrac{n-1}{n}\cdot\dfrac{n-3}{n-2}\cdots\dfrac23,&n\text{ 为大于 }1\text{ 的奇数}\end{cases}$；(2) $\displaystyle\int_0^\pi xf(\sin x)dx=\dfrac\pi2\int_0^\pi f(\sin x)dx$（其中 $f(x)$ 连续）。

### （五）变上限积分：$\displaystyle\int_a^xf(t)dt$
**定理** 若 $f(x)$ 在 $[a,b]$ 上连续，则 $\int_a^xf(t)dt$ 在 $[a,b]$ 上可导且 $\left(\int_a^xf(t)dt\right)'=f(x)$。
变上限求导的三个类型：(1) $\left(\int_{\varphi(x)}^{\psi(x)}f(t)dt\right)'=f(\psi(x))\psi'(x)-f(\varphi(x))\varphi'(x)$；(2) $\left(\int_{\varphi(x)}^{\psi(x)}f(x,t)dt\right)'$；(3) $\left(\int_a^bf(x,t)dt\right)'$。

【例1】设 $f$ 连续，试求下列函数的导数：1) $\displaystyle\int_{e^x}^{x^2}f(t)dt$；2) $\displaystyle\int_0^x(t-x)f(t)dt$；3) $\displaystyle\int_0^x\sin(x-t)^2dt$；4) $\displaystyle\int_1^2f(x+t)dt$。
【解】1) $\left(\displaystyle\int_{e^x}^{x^2}f(t)dt\right)'=2xf(x^2)-e^xf(e^x)$。` },
      { p: 97, md: R`2) $\displaystyle\int_0^x(t-x)f(t)dt=\int_0^xtf(t)dt-x\int_0^xf(t)dt$，$\dfrac{d}{dx}\displaystyle\int_0^x(t-x)f(t)dt=xf(x)-xf(x)-\int_0^xf(t)dt=-\int_0^xf(t)dt$。
3) $\displaystyle\int_0^x\sin(x-t)^2dt\xlongequal{x-t=u}\int_0^x\sin u^2du$，$\dfrac{d}{dx}\displaystyle\int_0^x\sin(x-t)^2dt=\dfrac{d}{dx}\int_0^x\sin u^2du=\sin x^2$。
4) $\displaystyle\int_1^2f(x+t)dt\xlongequal{x+t=u}\int_{x+1}^{x+2}f(u)du$，$\dfrac{d}{dx}\displaystyle\int_1^2f(x+t)dt=f(x+2)-f(x+1)$。

### （六）定积分的性质
1) 不等式：① 若 $f(x)\leqslant g(x),x\in[a,b]$，则 $\int_a^bf(x)dx\leqslant\int_a^bg(x)dx$；② 若 $f(x)$ 在 $[a,b]$ 上连续，则 $m(b-a)\leqslant\int_a^bf(x)dx\leqslant M(b-a)$，其中 $m,M$ 分别为最小值与最大值；③ $\left|\int_a^bf(x)dx\right|\leqslant\int_a^b|f(x)|dx$。
2) 积分中值定理：① 若 $f(x)$ 在 $[a,b]$ 上连续，则 $\int_a^bf(x)dx=f(\xi)(b-a),a<\xi<b$；② 若 $f(x),g(x)$ 在 $[a,b]$ 上连续，且 $g(x)$ 不变号，则 $\int_a^bf(x)g(x)dx=f(\xi)\int_a^bg(x)dx,a\leqslant\xi\leqslant b$。
【注】注意这里的 $\xi$ 是在开区间里，这给这个定理的应用带来方便。

【例2】设 $f(x)$ 在 $[a,b]$ 上连续，在 $(a,b)$ 内可导，且 $\dfrac{1}{b-a}\displaystyle\int_a^bf(x)dx=f(b)$。求证：在 $(a,b)$ 内至少存在一点 $c$，使 $f'(c)=0$。
【证】由积分中值定理得 $\displaystyle\int_a^bf(x)dx=f(\xi)(b-a),a<\xi<b$。代入 $\dfrac{1}{b-a}\displaystyle\int_a^bf(x)dx=f(b)$ 得 $f(\xi)=f(b)$，由罗尔定理得至少存在一点 $c\in(\xi,b)\subset(a,b)$ 使 $f'(c)=0$。

## 二、常考题型的方法与技巧
### 题型一　定积分的概念、性质及几何意义
【例1】求 $\displaystyle\lim\limits_{n\to\infty}\left[\left(1+\dfrac{1^2}{n^2}\right)\left(1+\dfrac{2^2}{n^2}\right)\cdots\left(1+\dfrac{n^2}{n^2}\right)\right]^{\frac1n}$。
【解】令 $y_n=\left[\left(1+\dfrac{1^2}{n^2}\right)\left(1+\dfrac{2^2}{n^2}\right)\cdots\left(1+\dfrac{n^2}{n^2}\right)\right]^{\frac1n}$，则` },
      { p: 98, md: R`$$\ln y_n=\dfrac1n\left[\ln\left(1+\dfrac{1^2}{n^2}\right)+\ln\left(1+\dfrac{2^2}{n^2}\right)+\cdots+\ln\left(1+\dfrac{n^2}{n^2}\right)\right]$$
$$\lim_{n\to\infty}\ln y_n=\int_0^1\ln(1+x^2)dx=x\ln(1+x^2)\Big|_0^1-\int_0^1\dfrac{2x^2}{1+x^2}dx=\ln2-2\left(1-\dfrac\pi4\right).$$
原式 $=e^{\ln2-2\left(1-\frac\pi4\right)}=2e^{\frac\pi2-2}$。

【例2】设 $f(x)$ 连续，且 $\lim\limits_{x\to+\infty}f(x)=1$，则 $\displaystyle\lim\limits_{x\to+\infty}\int_x^{x+2}t\sin\left(\dfrac3t\right)f(t)dt=$______。
【解】$\displaystyle\lim_{x\to+\infty}\int_x^{x+2}t\sin\left(\dfrac3t\right)f(t)dt$（利用积分中值定理）$=\lim\limits_{x\to+\infty}2\xi\sin\left(\dfrac3\xi\right)f(\xi)\quad(x<\xi<x+2)=6$。

【例3】求极限 $\displaystyle\lim\limits_{n\to\infty}\int_0^1x^n\sqrt{1+x^2}dx$。
【解1】由于 $0\leqslant\displaystyle\int_0^1x^n\sqrt{1+x^2}dx<\sqrt2\int_0^1x^ndx=\dfrac{\sqrt2}{n+1}$，而 $\lim\limits_{n\to\infty}\dfrac{\sqrt2}{n+1}=0$，故 $\lim\limits_{n\to\infty}\int_0^1x^n\sqrt{1+x^2}dx=0$。
【解2】由积分中值定理得 $\displaystyle\int_0^1x^n\sqrt{1+x^2}dx=\sqrt{1+\xi_n^2}\int_0^1x^ndx$。由于 $\int_0^1x^ndx=\dfrac{1}{n+1}\to0\ (n\to\infty)$ 为无穷小量，$\sqrt{1+(\xi_n)^2}$ 介于 $1$ 与 $\sqrt2$ 之间为有界量，则 $\lim\limits_{n\to\infty}\int_0^1x^n\sqrt{1+x^2}dx=0$。
【注】利用本题思想可得：若 $f(x)$ 在 $[0,1]$ 上连续，则 $\lim\limits_{n\to\infty}\int_0^1x^nf(x)dx=0$。

【例4】连续函数 $y=f(x)$ 在区间 $[-3,-2],[2,3]$ 上的图形分别是直径为 $1$ 的上、下半圆周，在区间 $[-2,0],[0,2]$ 的图形分别是直径为 $2$ 的下、上半圆周。设 $F(x)=\displaystyle\int_0^xf(t)dt$，则下列结论正确的是 (A) $F(3)=-\dfrac34F(-2)$ (B) $F(3)=\dfrac54F(2)$ (C) $F(-3)=\dfrac34F(2)$ (D) $F(-3)=-\dfrac54F(-2)$` },
      { p: 99, md: R`【解】由图可知 $f(x)$ 是奇函数，则 $F(x)=\displaystyle\int_0^xf(t)dt$ 是偶函数，则 $F(-2)=F(2)=\dfrac\pi2$（几何意义），$F(-3)=F(3)=\dfrac\pi2-\dfrac\pi8=\dfrac38\pi$（几何意义），故 (C) 正确。

### 题型二　定积分计算
【例1】$I=\displaystyle\int_{-1}^1\dfrac{2x^2+\sin x}{1+\sqrt{1-x^2}}dx$。
【解】$I=4\displaystyle\int_0^1\dfrac{x^2}{1+\sqrt{1-x^2}}dx=4\int_0^1\left[1-\sqrt{1-x^2}\right]dx=4-4\int_0^1\sqrt{1-x^2}dx=4-\pi$。
【注】由定积分的几何意义知 $\displaystyle\int_0^a\sqrt{a^2-x^2}dx=\dfrac\pi4a^2$，$\int_0^a\sqrt{2ax-x^2}dx=\dfrac\pi4a^2$，$\int_0^{2a}\sqrt{2ax-x^2}dx=\dfrac\pi2a^2\ (a>0)$。

【例2】$I=\displaystyle\int_0^{n\pi}\sqrt{1-\sin2x}dx$。
【解1】原式 $=n\displaystyle\int_0^\pi\sqrt{1-\sin2x}dx$（周期性）$=n\int_0^\pi\sqrt{(\cos x-\sin x)^2}dx=n\int_0^\pi|\cos x-\sin x|dx=n\int_0^{\frac\pi4}(\cos x-\sin x)dx+n\int_{\frac\pi4}^\pi(\sin x-\cos x)dx=2\sqrt2n$。
【解2】原式 $=n\displaystyle\int_{\frac\pi4}^{\frac{5\pi}4}\sqrt{1-\sin2x}dx=n\int_{\frac\pi4}^{\frac{5\pi}4}\sqrt{(\cos x-\sin x)^2}dx=n\int_{\frac\pi4}^{\frac{5\pi}4}(\sin x-\cos x)dx=2\sqrt2n$。

【例3】$I=\displaystyle\int_0^\pi x\sin^nxdx\ (n\geqslant1)$。
【解】$I=\displaystyle\int_0^\pi x\sin^nxdx=\dfrac\pi2\int_0^\pi\sin^nxdx$（利用 $\int_0^\pi xf(\sin x)dx=\dfrac\pi2\int_0^\pi f(\sin x)dx$）
$$=\pi\int_0^{\frac\pi2}\sin^nxdx\quad(\text{在区间}[0,\pi]\text{上}\sin x\text{关于}x=\dfrac\pi2\text{对称})=\begin{cases}\dfrac{n-1}{n}\cdot\dfrac{n-3}{n-2}\cdots\dfrac12\cdot\dfrac\pi2\cdot\pi,&n\text{ 为偶数}\\\dfrac{n-1}{n}\cdot\dfrac{n-3}{n-2}\cdots\dfrac23\cdot\pi,&n\text{ 为大于 }1\text{ 的奇数}\\\pi,&n=1\end{cases}$$` },
      { p: 100, md: R`【注】特别的 $\displaystyle\int_0^\pi x\sin xdx=\dfrac\pi2\int_0^\pi\sin xdx=\pi$ 比用分部积分方便。

【例4】$I=\displaystyle\int_0^1\dfrac{xdx}{(2-x^2)\sqrt{1-x^2}}$。
【解】令 $x=\sin t$，则 $I=\displaystyle\int_0^{\frac\pi2}\dfrac{\sin t\cos tdt}{(2-\sin^2t)\cos t}=\int_0^{\frac\pi2}\dfrac{-d\cos t}{1+\cos^2t}=-\arctan\cos t\Big|_0^{\frac\pi2}=\dfrac\pi4$。

【例5】$I=\displaystyle\int_0^3\arcsin\sqrt{\dfrac{x}{1+x}}dx$。
【解】令 $\arcsin\sqrt{\dfrac{x}{1+x}}=t$，则 $x=\tan^2t$，从而 $I=\displaystyle\int_0^{\frac\pi3}td\tan^2t=t\tan^2t\Big|_0^{\frac\pi3}-\int_0^{\frac\pi3}\tan^2tdt=\dfrac{4\pi}{3}-\sqrt3$。

【例6】设 $f(x)=\displaystyle\int_0^x\dfrac{\sin t}{\pi-t}dt$，计算 $\displaystyle\int_0^\pi f(x)dx$。
【解1】$\displaystyle\int_0^\pi f(x)dx=xf(x)\Big|_0^\pi-\int_0^\pi x\dfrac{\sin x}{\pi-x}dx=\pi\int_0^\pi\dfrac{\sin t}{\pi-t}dt-\int_0^\pi\dfrac{x\sin x}{\pi-x}dx=\int_0^\pi\sin xdx=2$。
【解2】$\displaystyle\int_0^\pi f(x)dx=\int_0^\pi f(x)d(x-\pi)=(x-\pi)f(x)\Big|_0^\pi-\int_0^\pi\dfrac{(x-\pi)\sin x}{\pi-x}dx=\int_0^\pi\sin xdx=2$。
【解3】$\displaystyle\int_0^\pi f(x)dx=\int_0^\pi dx\int_0^x\dfrac{\sin t}{\pi-t}dt$（累次积分交换次序）$=\int_0^\pi dt\int_t^\pi\dfrac{\sin t}{\pi-t}dx=\int_0^\pi\sin xdx=2$。

【例7】$I=\displaystyle\int_0^2f(x-1)dx$，其中 $f(x)=\begin{cases}\dfrac{1}{1+x},&x\geqslant0\\\dfrac{1}{1+e^x},&x<0\end{cases}$。
【解】令 $x-1=t$，则 $I=\displaystyle\int_{-1}^1f(t)dt=\int_{-1}^0\dfrac{dt}{1+e^t}+\int_0^1\dfrac{dt}{1+t}=\int_{-1}^0\dfrac{e^{-t}}{1+e^{-t}}dt+\ln(1+t)\Big|_0^1=-\ln(1+e^{-t})\Big|_{-1}^0+\ln2=\ln(1+e)$。` },
      { p: 101, md: R`【例8】$I=\displaystyle\int_0^{\frac\pi2}\dfrac{\sin x}{\sin x+\cos x}dx$。
【解1】令 $\displaystyle\int\dfrac{\sin x}{\sin x+\cos x}dx=\int\dfrac{A(\cos x-\sin x)+B(\sin x+\cos x)}{\sin x+\cos x}dx$，则 $\begin{cases}1=-A+B\\0=A+B\end{cases}$，解得 $A=-\dfrac12,B=\dfrac12$。
$$I=\dfrac12\int_0^{\frac\pi2}\dfrac{(\sin x-\cos x)+(\sin x+\cos x)}{\sin x+\cos x}dx=\dfrac12\left(-\ln(\sin x+\cos x)+x\right)\Big|_0^{\frac\pi2}=\dfrac\pi4.$$
【解2】令 $x=\dfrac\pi2-t$，则 $I=\displaystyle\int_0^{\frac\pi2}\dfrac{\sin x}{\sin x+\cos x}dx=\int_0^{\frac\pi2}\dfrac{\cos t}{\sin t+\cos t}dt=\dfrac12\left[\int_0^{\frac\pi2}\dfrac{\sin x}{\sin x+\cos x}dx+\int_0^{\frac\pi2}\dfrac{\cos x}{\sin x+\cos x}dx\right]=\dfrac12\int_0^{\frac\pi2}dx=\dfrac\pi4$。
【注】积分 $\displaystyle\int_0^{\frac\pi2}\dfrac{\sin^px}{\sin^px+\cos^px}dx$ 和 $\int_0^{\frac\pi2}\dfrac{1}{1+\tan^px}dx\ (p>0)$ 都可用解法 2 的方法求解。

【例9】$I=\displaystyle\int_{-\frac\pi2}^{\frac\pi2}\dfrac{e^x}{1+e^x}\sin^4xdx$。
【解】$I=\displaystyle\int_{-\frac\pi2}^{\frac\pi2}\dfrac{e^x}{1+e^x}\sin^4xdx=\int_{-\frac\pi2}^{\frac\pi2}\dfrac{e^{-t}}{1+e^{-t}}\sin^4tdt\quad(x=-t)=\int_{-\frac\pi2}^{\frac\pi2}\dfrac{1}{1+e^t}\sin^4tdt$
$$=\dfrac12\left[\int_{-\frac\pi2}^{\frac\pi2}\dfrac{e^x}{1+e^x}\sin^4xdx+\int_{-\frac\pi2}^{\frac\pi2}\dfrac{1}{1+e^x}\sin^4xdx\right]=\dfrac12\int_{-\frac\pi2}^{\frac\pi2}\sin^4xdx=\int_0^{\frac\pi2}\sin^4xdx=\dfrac34\cdot\dfrac12\cdot\dfrac\pi2=\dfrac{3\pi}{16}.$$

【例10】已知 $f(x)$ 连续，$\displaystyle\int_0^xtf(x-t)dt=1-\cos x$，求 $\displaystyle\int_0^{\frac\pi2}f(x)dx$ 的值。
【解】令 $x-t=u$ 得 $\displaystyle\int_0^xtf(x-t)dt=\int_0^x(x-u)f(u)du=x\int_0^xf(u)du-\int_0^xuf(u)du$，
$$\dfrac{d}{dx}\int_0^xtf(x-t)dt=\int_0^xf(u)du+xf(x)-xf(x)=\int_0^xf(u)du,$$
从而有 $\displaystyle\int_0^xf(u)du=\sin x$。令 $x=\dfrac\pi2$ 得 $\displaystyle\int_0^{\frac\pi2}f(u)du=\sin\dfrac\pi2=1$。` },
      { p: 102, md: R`【例11】设 $f'(x)=\arcsin(x-1)^2$，$f(0)=0$，求 $\displaystyle\int_0^1f(x)dx$。
【解1】$\displaystyle\int_0^1f(x)dx=xf(x)\Big|_0^1-\int_0^1x\arcsin(x-1)^2dx=f(1)-\int_0^1x\arcsin(x-1)^2dx$
$$=\int_0^1f'(x)dx-\int_0^1x\arcsin(x-1)^2dx=\int_0^1(1-x)\arcsin(x-1)^2dx=\dfrac12\int_0^1\arcsin udu\quad(\text{令}(x-1)^2=u)$$
$$=\dfrac12u\arcsin u\Big|_0^1-\dfrac12\int_0^1\dfrac{u}{\sqrt{1-u^2}}du=\dfrac\pi4-\dfrac12.$$
【解2】$\displaystyle\int_0^1f(x)dx=\int_0^1f(x)d(x-1)=(x-1)f(x)\Big|_0^1-\int_0^1(x-1)\arcsin(x-1)^2dx=\int_0^1(1-x)\arcsin(x-1)^2dx$。以下同解法 1。

【例12】若 $f(x)=\dfrac{x}{1+\cos^2x}-\displaystyle\int_{-\pi}^\pi f(x)\sin xdx$，求 $f(x)$。
【解】等式 $f(x)=\dfrac{x}{1+\cos^2x}-\displaystyle\int_{-\pi}^\pi f(x)\sin xdx$ 两端同乘 $\sin x$ 并从 $-\pi$ 到 $\pi$ 积分得
$$\int_{-\pi}^\pi f(x)\sin xdx=\int_{-\pi}^\pi\dfrac{x\sin x}{1+\cos^2x}dx=2\int_0^\pi\dfrac{x\sin x}{1+\cos^2x}dx=\pi\int_0^\pi\dfrac{\sin x}{1+\cos^2x}dx=-\pi\arctan\cos x\Big|_0^\pi=\dfrac{\pi^2}{2}.$$
则 $f(x)=\dfrac{x}{1+\cos^2x}-\dfrac{\pi^2}{2}$。

### 题型三　变上限积分函数及其应用
与变上限积分有关的题目主要考查变上限积分函数的连续性、可导性及奇偶性，其中变上限求导是重点。其常用的结论有：
1. 连续性：若 $f(x)$ 在 $[a,b]$ 可积，则 $\displaystyle\int_a^xf(t)dt$ 在 $[a,b]$ 上连续。
2. 可导性：有关 $F(x)=\displaystyle\int_a^xf(t)dt$ 的可导性的结论：1) $f(x)$ 连续 $\longrightarrow$ $F(x)$ 可导；2) $f(x)$ 可去 $\longrightarrow$ $F(x)$ 可导；` },
      { p: 103, md: R`3) $f(x)$ 跳跃 $\longrightarrow$ $F(x)$ 连续但不可导。
3. 奇偶性：1) 若 $f(x)$ 为奇函数，则 $\int_0^xf(t)dt$ 为偶函数；2) 若 $f(x)$ 为偶函数，则 $\int_0^xf(t)dt$ 为奇函数。

【例1】设 $f(x)$ 是奇函数，除 $x=0$ 外处处连续，$x=0$ 是第一类间断点，则 $\int_0^xf(t)dt$ 是 (A) 连续的奇函数 (B) 在 $x=0$ 间断的奇函数 (C) 连续的偶函数 (D) 在 $x=0$ 间断的偶函数
【解】由于 $f(x)$ 是奇函数，则 $\int_0^xf(t)dt$ 是偶函数。由题设知 $f(x)$ 可积，则 $\int_0^xf(t)dt$ 连续，故选 (C)。

【例2】设 $g(x)=\int_0^xf(u)du$，其中 $f(x)=\begin{cases}\dfrac12(x^2+1),&0\leqslant x<1\\\dfrac13(x-1),&1\leqslant x\leqslant2\end{cases}$，则 $g(x)$ 在区间 $(0,2)$ 内 (A) 无界 (B) 递减 (C) 不连续 (D) 连续
【解】由于 $x=1$ 为 $f(x)$ 的跳跃间断点（第一类），则 $f(x)$ 在 $[0,2]$ 上可积，从而 $g(x)=\int_0^xf(u)du$ 在 $(0,2)$ 内连续。故应选 (D)。

【例3】设 $f(x)$ 是连续函数，$F(x)$ 是 $f(x)$ 的原函数，则 (A) $f(x)$ 是奇函数 $\Rightarrow F(x)$ 必是偶函数 (B) $f(x)$ 是偶函数 $\Rightarrow F(x)$ 必是奇函数 (C) $f(x)$ 是周期函数 $\Rightarrow F(x)$ 必是周期函数 (D) $f(x)$ 是单调增函数 $\Rightarrow F(x)$ 必是单调增函数
【解】由 $f(x)$ 连续且为奇函数可知，$G(x)=\int_0^xf(u)du$ 为偶函数，而 $F(x)=G(x)+C$，则 $F(x)$ 为偶函数。故应选 (A)。

【例4】设 $F(x)$ 是连续函数 $f(x)$ 的一个原函数，"$M\Leftrightarrow N$"表示"M 的充分必要条件是 N"，则必有 (A) $F(x)$ 是偶函数 $\Leftrightarrow f(x)$ 是奇函数 (B) $F(x)$ 是奇函数 $\Leftrightarrow f(x)$ 是偶函数 (C) $F(x)$ 是周期函数 $\Leftrightarrow f(x)$ 是周期函数 (D) $F(x)$ 是单调函数 $\Leftrightarrow f(x)$ 是单调函数
【解】由上题可知 (A) 正确。

【例5】设函数 $f(x)=\begin{cases}\sin x,&0\leqslant x<\pi\\2,&\pi\leqslant x\leqslant2\pi\end{cases}$，$F(x)=\int_0^xf(t)dt$，则 (A) $x=\pi$ 是函数 $F(x)$ 的跳跃间断点 (B) $x=\pi$ 是函数 $F(x)$ 的可去间断点 (C) $F(x)$ 在 $x=\pi$ 处连续但不可导 (D) $F(x)$ 在 $x=\pi$ 处可导` },
      { p: 104, md: R`【解1】$F(x)=\displaystyle\int_0^xf(t)dt=\begin{cases}\int_0^x\sin tdt,&0\leqslant x<\pi\\\int_0^\pi\sin tdt+\int_\pi^x2dt,&\pi\leqslant x\leqslant2\pi\end{cases}=\begin{cases}1-\cos x,&0\leqslant x<\pi\\2+2x-2\pi,&\pi\leqslant x\leqslant2\pi\end{cases}$
因为 $\lim\limits_{x\to\pi^-}F(x)=\lim\limits_{x\to\pi^+}F(x)=F(\pi)=2$，所以 $F(x)$ 在 $x=\pi$ 处连续。
而 $F'_-(\pi)=\lim\limits_{x\to\pi^-}\dfrac{F(x)-F(\pi)}{x-\pi}=\lim\limits_{x\to\pi^-}\dfrac{1-\cos x-2}{x-\pi}=\lim\limits_{x\to\pi^-}\dfrac{\sin x}{1}=0$，$F'_+(\pi)=\lim\limits_{x\to\pi^+}\dfrac{F(x)-F(\pi)}{x-\pi}=\lim\limits_{x\to\pi^+}\dfrac{2+2x-2\pi-2}{x-\pi}=2$，由此可知 $F'_-(\pi)\neq F'_+(\pi)$，即 $F(x)$ 在 $x=\pi$ 处不可导。故应选 (C)。
【解2】由于 $x=\pi$ 为 $f(x)$ 的跳跃间断点，则 $F(x)=\int_0^xf(t)dt$ 在 $x=\pi$ 处连续但不可导，故应选 (C)。

【例6】设函数 $f(x)$ 连续，且 $f(0)\neq0$，求极限 $\lim\limits_{x\to0}\dfrac{\int_0^x(x-t)f(t)dt}{x\int_0^xf(x-t)dt}$。
【解1】$\displaystyle\int_0^xf(x-t)dt=\int_0^xf(u)du$（令 $x-t=u$），
原式 $=\lim\limits_{x\to0}\dfrac{x\int_0^xf(t)dt-\int_0^xtf(t)dt}{x\int_0^xf(t)dt}=\lim\limits_{x\to0}\dfrac{\int_0^xf(t)dt+xf(x)-xf(x)}{\int_0^xf(t)dt+xf(x)}$（洛必达法则）
$$=\lim_{x\to0}\dfrac{\int_0^xf(t)dt}{\int_0^xf(t)dt+xf(x)}=\lim_{x\to0}\dfrac{xf(c)}{xf(c)+xf(x)}\quad(\text{积分中值定理，}c\text{ 在 }0\text{ 与 }x\text{ 之间})=\dfrac{f(0)}{f(0)+f(0)}=\dfrac12.$$
【解2】同【解1】原式 $=\lim\limits_{x\to0}\dfrac{x\int_0^xf(t)dt-\int_0^xtf(t)dt}{x\int_0^xf(t)dt}$。上式分子分母同除 $x^2$，又
$$\lim_{x\to0}\dfrac{x\int_0^xf(t)dt}{x^2}=\lim_{x\to0}\dfrac{\int_0^xf(t)dt}{x}=\lim_{x\to0}\dfrac{f(x)}{1}=f(0),$$` },
      { p: 105, md: R`$$\lim_{x\to0}\dfrac{\int_0^xtf(t)dt}{x^2}=\lim_{x\to0}\dfrac{xf(x)}{2x}=\lim_{x\to0}\dfrac{f(x)}{2}=\dfrac{f(0)}{2},$$
则原式 $=\dfrac{f(0)-\dfrac{f(0)}{2}}{f(0)}=\dfrac12$。
【解3】同【解1】原式 $=\lim\limits_{x\to0}\dfrac{x\int_0^xf(t)dt-\int_0^xtf(t)dt}{x\int_0^xf(t)dt}$。由 $f(0)\neq0$ 得，当 $x\to0$ 时 $\int_0^xf(t)dt\sim\int_0^xf(0)dt=f(0)x$，$\int_0^xtf(t)dt\sim\int_0^xf(0)tdt=\dfrac{f(0)}{2}x^2$，则
原式 $=\lim\limits_{x\to0}\dfrac{x\int_0^xf(t)dt-\int_0^xtf(t)dt}{x\int_0^xf(t)dt}=\lim\limits_{x\to0}\dfrac{f(0)x^2-\dfrac{f(0)}{2}x^2}{f(0)x^2}=\dfrac12$。

【例7】设 $F(x)=\int_x^{x+2\pi}e^{\sin t}\cdot\sin tdt$，则 $F(x)$______ (A) 为正常数 (B) 为负常数 (C) 为 $0$ (D) 不是常数
【解】由 $F'(x)=e^{\sin(x+2\pi)}\sin(x+2\pi)-e^{\sin x}\sin x=0$ 知 $F(x)=C$。也可由 $e^{\sin t}\sin t$ 以 $2\pi$ 为周期得 $F(x)=\int_x^{x+2\pi}e^{\sin t}\sin tdt=\int_0^{2\pi}e^{\sin t}\sin tdt=C$。又 $F(0)=\int_0^{2\pi}e^{\sin t}\sin tdt=-\int_0^{2\pi}e^{\sin t}d\cos t=-e^{\sin t}\cos t\Big|_0^{2\pi}+\int_0^{2\pi}e^{\sin t}\cos^2tdt=\int_0^{2\pi}e^{\sin t}\cos^2tdt>0$，故 $F(x)$ 为正常数，应选 (A)。
【注】说明积分 $\int_0^{2\pi}e^{\sin t}\sin tdt>0$ 最简单的方法是几何的方法。

【例8】试证：$F(x)=\int_0^x(t-t^2)\sin^{2n}tdt$ 在 $x\geqslant0$ 上最大值不超过 $\dfrac{1}{(2n+2)(2n+3)}$。
【证】令 $F'(x)=(x-x^2)\sin^{2n}x=0$，得 $x=1$，$x=k\pi$，$k=1,2,\cdots$。由于在 $x=k\pi$ 邻近两侧 $F'(x)$ 不变号，则 $x=k\pi$ 不是 $F(x)$ 的极值点。当 $0<x<1$ 时 $F'(x)>0$，当 $x>1$ 时 $F'(x)<0$，则 $F(x)$ 在 $x=1$ 取极大值，又因为 $x=1$ 为 $F(x)$ 在 $[0,+\infty)$ 上唯一的极值点，则该极大值为最大值。` },
      { p: 106, md: R`$F(1)=\displaystyle\int_0^1(t-t^2)\sin^{2n}tdt\leqslant\int_0^1(t-t^2)t^{2n}dt=\dfrac{1}{(2n+2)(2n+3)}$。原题得证。

【例9】设 $f(x)$ 在区间 $[0,+\infty)$ 上可导，$f(0)=0$，且其反函数为 $g(x)$。若 $\int_0^{f(x)}g(t)dt=x^2e^x$，求 $f(x)$。
【解】等式 $\int_0^{f(x)}g(t)dt=x^2e^x$ 两端对 $x$ 求导得 $g[f(x)]f'(x)=2xe^x+x^2e^x$，而 $g[f(x)]=x$，故 $xf'(x)=2xe^x+x^2e^x$，$f'(x)=2e^x+xe^x\ (x>0)$，$f(x)=\int(2e^x+xe^x)dx=(x+1)e^x+C\ (x>0)$。由 $f(x)$ 在区间 $[0,+\infty)$ 上可导知 $0=f(0)=\lim\limits_{x\to0^+}f(x)=\lim\limits_{x\to0^+}[(x+1)e^x+C]=1+C$，即有 $C=-1$，从而 $f(x)=(x+1)e^x-1$。

【例10】设函数 $f(x)$ 在 $(0,+\infty)$ 内连续，$f(1)=\dfrac52$，且对所有 $x,t\in(0,+\infty)$ 满足条件 $\int_1^{xt}f(u)du=t\int_1^xf(u)du+x\int_1^tf(u)du$，求 $f(x)$。
【解】等式 $\int_1^{xt}f(u)du=t\int_1^xf(u)du+x\int_1^tf(u)du$ 两端对 $t$ 求导得 $xf(xt)=\int_1^xf(u)du+xf(t)$。令 $t=1$ 得 $xf(x)=\int_1^xf(u)du+\dfrac52x$，上式两端对 $x$ 求导得 $f(x)+xf'(x)=f(x)+\dfrac52$，即 $f'(x)=\dfrac52\cdot\dfrac1x$，从而 $f(x)=\dfrac52\ln x+C$。又 $f(1)=\dfrac52$，代入得 $C=\dfrac52$，从而 $f(x)=\dfrac52(\ln x+1)$。` },
      { p: 107, md: R`【例11】设 $f(t)$ 连续，$f(t)>0$，$f(-t)=f(t)$。令 $F(x)=\int_{-a}^a|x-t|f(t)dt$，$-a\leqslant x\leqslant a$。1) 试证曲线 $y=F(x)$ 在 $[-a,a]$ 上是凹的；2) 当 $x$ 为何值时，$F(x)$ 取得最小值；3) 若 $F(x)$ 的最小值可表示为 $f(a)-a^2-1$，试求 $f(t)$。
【解】1)【证】由于
$$F(x)=\int_{-a}^a|x-t|f(t)dt=\int_{-a}^x(x-t)f(t)dt+\int_x^a(t-x)f(t)dt=x\int_{-a}^xf(t)dt-\int_{-a}^xtf(t)dt+\int_x^atf(t)dt-x\int_x^af(t)dt,$$
$$F'(x)=\int_{-a}^xf(t)dt+xf(x)-xf(x)-xf(x)+xf(x)-\int_x^af(t)dt=\int_{-a}^xf(t)dt-\int_x^af(t)dt,$$
$$F''(x)=f(x)+f(x)=2f(x)>0,$$
故曲线 $y=F(x)$ 在 $[-a,a]$ 上是凹的。
2) 令 $F'(x)=\int_{-a}^xf(t)dt-\int_x^af(t)dt=0$，得 $F'(0)=0$（$f(x)$ 为偶函数）。又 $F''(x)>0$，则 $F'(x)$ 单调增，从而 $x=0$ 为 $F(x)$ 在 $[-a,a]$ 上唯一的驻点。又 $F''(0)>0$，则 $F(x)$ 在 $x=0$ 取极小值，由唯一性知 $F(x)$ 在 $x=0$ 取最小值。
3) $F(x)$ 在 $[-a,a]$ 上最小值为 $F(0)=\int_{-a}^a|t|f(t)dt=2\int_0^atf(t)dt$，从而有 $2\int_0^atf(t)dt=f(a)-a^2-1$，上式两端对 $a$ 求导得 $2af(a)=f'(a)-2a$，解此一阶线性微分方程得 $f(a)=Ce^{a^2}-1$。又 $f(0)=1$，则 $C=2$，从而 $f(t)=2e^{t^2}-1$。

### 题型四　积分不等式
证明积分不等式常用的方法：1) 变量代换；2) 积分中值定理；3) 变上限积分；4) 柯西积分不等式 $\left(\int_a^bf(x)g(x)dx\right)^2\leqslant\int_a^bf^2(x)dx\int_a^bg^2(x)dx$。

【例1】设 $I_1=\int_0^{\frac\pi4}\dfrac{\tan x}{x}dx$，$I_2=\int_0^{\frac\pi4}\dfrac{x}{\tan x}dx$，则 (A) $I_1>I_2>1$ (B) $1>I_1>I_2$` },
      { p: 108, md: R`(C) $I_2>I_1>1$ (D) $1>I_2>I_1$
【解】由于 $\sin x<x<\tan x\ \left(0<x<\dfrac\pi2\right)$，则 $\dfrac{x}{\tan x}<\dfrac{\tan x}{x}$，即 $I_2<I_1$，从而 (C) 和 (D) 均不正确。又 $I_2=\int_0^{\frac\pi4}\dfrac{x}{\tan x}dx<\int_0^{\frac\pi4}dx=\dfrac\pi4<1$，则 (A) 不正确，故应选 (B)。

【例2】设 $f(x)$ 在 $[0,1]$ 上连续，非负，单调减。求证：$\int_0^af(x)dx\geqslant a\int_0^1f(x)dx\ (0<a<1)$。
【证1】只要证 $\int_0^af(x)dx\geqslant a\int_0^af(x)dx+a\int_a^1f(x)dx$，即 $(1-a)\int_0^af(x)dx\geqslant a\int_a^1f(x)dx$。由积分中值定理知 $(1-a)\int_0^af(x)dx=a(1-a)f(c_1)$，$0<c_1<a$，$a\int_a^1f(x)dx=a(1-a)f(c_2)$，$a<c_2<1$。由于 $f(x)$ 单调减，则 $f(c_1)>f(c_2)$，从而 $(1-a)\int_0^af(x)dx\geqslant a\int_a^1f(x)dx$。原题得证。
【证2】$\int_0^af(x)dx=a\int_0^1f(at)dt$（令 $x=at$）$=a\int_0^1f(ax)dx$。由于 $f(x)$ 单调减，而 $ax<x$，则 $f(ax)\geqslant f(x)$，从而有 $a\int_0^1f(ax)dx\geqslant a\int_0^1f(x)dx$，即 $\int_0^af(x)dx\geqslant a\int_0^1f(x)dx$。

【例3】设 $f(x)$ 在 $[0,1]$ 上可导，且 $f(0)=0$，$0<f'(x)<1$。求证：$\left(\int_0^1f(x)dx\right)^2>\int_0^1f^3(x)dx$。
【证】令 $F(x)=\left(\int_0^xf(t)dt\right)^2-\int_0^xf^3(t)dt$，只要证 $F(1)>0$。由 $f(0)=0$，$0<f'(x)<1$ 知 $f(x)>0$，$x\in(0,1]$。又 $F'(x)=2f(x)\int_0^xf(t)dt-f^3(x)=f(x)\left[2\int_0^xf(t)dt-f^2(x)\right]$，令 $\varphi(x)=2\int_0^xf(t)dt-f^2(x)$，则 $\varphi'(x)=2f(x)-2f(x)f'(x)=2f(x)(1-f'(x))>0$，` },
      { p: 109, md: R`从而 $\varphi(x)$ 单调增。又 $\varphi(0)=0$，则 $\varphi(x)>0$，$x\in(0,1]$，从而 $F'(x)>0$，$x\in(0,1]$，则 $F(x)$ 单调增，从而 $F(1)>F(0)=0$，原题得证。

【例4】设函数 $f(x),g(x)$ 在区间 $[a,b]$ 上连续，且 $f(x)$ 单调增加，$0\leqslant g(x)\leqslant1$。证明：(Ⅰ) $0\leqslant\int_a^xg(t)dt\leqslant(x-a)$，$x\in[a,b]$；(Ⅱ) $\int_a^{a+\int_a^bg(t)dt}f(x)dx\leqslant\int_a^bf(x)g(x)dx$。
【证】(Ⅰ) 由 $0\leqslant g(x)\leqslant1$ 得 $0\leqslant\int_a^xg(t)dt\leqslant\int_a^x1dt=(x-a)$，$x\in[a,b]$。
(Ⅱ) 令 $F(u)=\int_a^uf(x)g(x)dx-\int_a^{a+\int_a^ug(t)dt}f(x)dx$，只要证明 $F(b)\geqslant0$。显然 $F(a)=0$，只要证明 $F(u)$ 单调增。
$$F'(u)=f(u)g(u)-f\left(a+\int_a^ug(t)dt\right)g(u)=g(u)\left[f(u)-f\left(a+\int_a^ug(t)dt\right)\right].$$
由 (Ⅰ) 的结论 $0\leqslant\int_a^xg(t)dt\leqslant(x-a)$ 知 $a\leqslant a+\int_a^xg(t)dt\leqslant x$，即 $a\leqslant a+\int_a^ug(t)dt\leqslant u$。又 $f(x)$ 单调增加，则 $f(x)\geqslant f\left(a+\int_a^ug(t)dt\right)$，因此 $F'(u)\geqslant0$，从而 $F(b)\geqslant0$，即 $\int_a^{a+\int_a^bg(t)dt}f(x)dx\leqslant\int_a^bf(x)g(x)dx$。

【例5】设 $f(x)$ 在 $[a,b]$ 上有连续导数，$f(a)=0$，求证：$\max\limits_{a\leqslant x\leqslant b}|f'(x)|\geqslant\dfrac{2}{(b-a)^2}\int_a^b|f(x)|dx$。
【证1】由于 $f(x)=\int_a^xf'(t)dt$，故 $|f(x)|=\left|\int_a^xf'(t)dt\right|\leqslant\int_a^x|f'(t)|dt\leqslant(x-a)\max\limits_{a\leqslant x\leqslant b}|f'(x)|$，$\int_a^b|f(x)|dx\leqslant\int_a^b(x-a)dx\cdot\max\limits_{a\leqslant x\leqslant b}|f'(x)|=\dfrac12(b-a)^2\max\limits_{a\leqslant x\leqslant b}|f'(x)|$，从而 $\max\limits_{a\leqslant x\leqslant b}|f'(x)|\geqslant\dfrac{2}{(b-a)^2}\int_a^b|f(x)|dx$。
【证2】由拉格朗日中值定理知 $f(x)=f(x)-f(a)=f'(\xi)(x-a)$，则当 $a\leqslant x\leqslant b$ 时，$|f(x)|=|f'(\xi)|(x-a)\leqslant\max\limits_{a\leqslant x\leqslant b}|f'(x)|(x-a)$。上式两端从 $a$ 到 $b$ 积分得 $\int_a^b|f(x)|dx\leqslant\int_a^b(x-a)dx\cdot\max\limits_{a\leqslant x\leqslant b}|f'(x)|=\dfrac12(b-a)^2\max\limits_{a\leqslant x\leqslant b}|f'(x)|$，` }
    ],
    quiz: [
      { q: R`定积分的值取决于`, options: [R`积分区间与被积函数`, R`积分变量`, R`分法`, R`$\xi_i$ 的取法`], answer: 0, explain: R`定积分是数值，与积分变量无关。` },
      { q: R`若 $f(x)$ 在 $[a,b]$ 上连续，则 $\displaystyle\int_a^bf(x)dx$`, options: [R`必存在`, R`不一定存在`, R`一定不存在`, R`为无穷`], answer: 0, explain: R`连续是可积的充分条件。` },
      { q: R`$\left(\displaystyle\int_a^xf(t)dt\right)'=$（$f$ 连续）`, options: [R`$f(x)$`, R`$f'(x)$`, R`$f(x)-f(a)$`, R`$0$`], answer: 0, explain: R`变上限积分求导还原被积函数。` },
      { q: R`$\displaystyle\int_{-a}^af(x)dx=0$ 当 $f(x)$ 为`, options: [R`奇函数`, R`偶函数`, R`周期函数`, R`单调函数`], answer: 0, explain: R`奇函数在对称区间上积分为 0。` },
      { q: R`若 $f(x)$ 为偶函数，则 $\displaystyle\int_0^xf(t)dt$ 为`, options: [R`奇函数`, R`偶函数`, R`周期函数`, R`非奇非偶`], answer: 0, explain: R`连续偶函数的变上限积分为奇函数。` },
      { q: R`若 $f$ 有跳跃间断点，则 $F(x)=\displaystyle\int_a^xf(t)dt$ 在间断点处`, options: [R`连续但不可导`, R`可导`, R`不连续`, R`可导且导数连续`], answer: 0, explain: R`跳跃间断 $\Rightarrow F$ 连续但不可导。` },
      { q: R`$\displaystyle\int_0^{\frac\pi2}\sin^2x\,dx=$`, options: [R`$\dfrac\pi4$`, R`$\dfrac\pi2$`, R`$1$`, R`$0$`], answer: 0, explain: R`偶次公式 $\frac12\cdot\frac\pi2=\frac\pi4$。` },
      { q: R`$\displaystyle\int_0^\pi xf(\sin x)dx=$`, options: [R`$\dfrac\pi2\displaystyle\int_0^\pi f(\sin x)dx$`, R`$\displaystyle\int_0^\pi f(\sin x)dx$`, R`$\pi\displaystyle\int_0^\pi f(\sin x)dx$`, R`$0$`], answer: 0, explain: R`常用公式。` },
      { q: R`牛顿—莱布尼兹公式是 $\displaystyle\int_a^bf(x)dx=$`, options: [R`$F(b)-F(a)$`, R`$F(a)-F(b)$`, R`$F(b)+F(a)$`, R`$F'(b)-F'(a)$`], answer: 0, explain: R`其中 $F$ 为 $f$ 的原函数。` },
      { q: R`若 $f(x)\leqslant g(x)$ 在 $[a,b]$ 上成立，则`, options: [R`$\displaystyle\int_a^bf\leqslant\int_a^bg$`, R`$\displaystyle\int_a^bf\geqslant\int_a^bg$`, R`$\displaystyle\int_a^bf=\int_a^bg$`, R`不能比较`], answer: 0, explain: R`定积分的不等式性质。` }
    ]
  };
})();
