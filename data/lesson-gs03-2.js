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
      { p: 94, md: R`### 一、考试内容要点精讲
#### （一）定积分的概念
设函数 $f(x)$ 在区间 $[a,b]$ 上有定义，任意插入分点 $a=x_0<x_1<\cdots<x_n=b$，将 $[a,b]$ 分成 $n$ 个小区间 $[x_{i-1},x_i]$，记 $\Delta x_i=x_i-x_{i-1}$。在 $[x_{i-1},x_i]$ 上任取 $\xi_i$，作和式 $\sum\limits_{i=1}^nf(\xi_i)\Delta x_i$，记 $\lambda=\max\{\Delta x_1,\cdots,\Delta x_n\}$。若 $\lim\limits_{\lambda\to0}\sum\limits_{i=1}^nf(\xi_i)\Delta x_i$ 存在，且不依赖于分法与 $\xi_i$ 的取法，则称此极限为 $f(x)$ 在 $[a,b]$ 上的定积分，记为 $\displaystyle\int_a^bf(x)dx=\lim\limits_{\lambda\to0}\sum\limits_{i=1}^nf(\xi_i)\Delta x_i$。` },
      { p: 95, md: R`【注】(1) 定积分是一个数值，只取决于积分区间与被积函数，与积分变量无关，$\displaystyle\int_a^bf(x)dx=\int_a^bf(t)dt$。

(2) 若 $f(x)$ 在 $[0,1]$ 上连续，将 $[0,1]$ $n$ 等分，$\Delta x_i=\dfrac1n$，取 $\xi_i=\dfrac in$，则 $\displaystyle\int_0^1f(x)dx=\lim\limits_{n\to\infty}\dfrac1n\sum_{i=1}^nf\left(\dfrac in\right)$。

#### （二）定积分的几何意义
1) 若在 $[a,b]$ 上 $f(x)\geqslant0$，则 $\int_a^bf(x)dx$ 等于曲边梯形的面积；
2) 若 $f(x)\leqslant0$，则等于面积的负值；
3) 若 $f(x)$ 有正有负，则等于 $x$ 轴上方面积减去下方面积。

#### （三）可积性
1. 必要条件：若 $\int_a^bf(x)dx$ 存在，则 $f(x)$ 在 $[a,b]$ 上有界。
2. 充分条件：① $f(x)$ 连续；② $f(x)$ 有界且只有有限个间断点；③ $f(x)$ 只有有限个第一类间断点。以上均保证可积。

#### （四）定积分的计算
1) 牛顿—莱布尼兹公式：若 $F(x)$ 是连续函数 $f(x)$ 在 $[a,b]$ 上的一个原函数，则 $\displaystyle\int_a^bf(x)dx=F(b)-F(a)$。` },
      { p: 96, md: R`2) 换元积分法：设 $f(x)$ 在 $[a,b]$ 上连续，$x=\varphi(t)$ 满足 (1) $\varphi(\alpha)=a,\varphi(\beta)=b$；(2) $\varphi(t)$ 在 $[\alpha,\beta]$（或 $[\beta,\alpha]$）上具有连续导数，值域 $R_\varphi=[a,b]$，则 $\displaystyle\int_a^bf(x)dx=\int_\alpha^\beta f(\varphi(t))\varphi'(t)dt$。
3) 分部积分法：$\displaystyle\int_a^bu\,dv=uv\Big|_a^b-\int_a^bv\,du$。
4) 奇偶性与周期性：(1) $f$ 为 $[-a,a]$ 上连续函数，则 $\displaystyle\int_{-a}^af(x)dx=\begin{cases}0,&f\ \text{为奇函数}\\2\int_0^af(x)dx,&f\ \text{为偶函数}\end{cases}$；(2) $f$ 以 $T$ 为周期的连续函数，则 $\displaystyle\int_a^{a+T}f(x)dx=\int_0^Tf(x)dx$。
5) 利用公式：(1) $\displaystyle\int_0^{\frac\pi2}\sin^nx\,dx=\int_0^{\frac\pi2}\cos^nx\,dx=\begin{cases}\dfrac{n-1}{n}\dfrac{n-3}{n-2}\cdots\dfrac12\dfrac\pi2,&n\ \text{为偶数}\\\dfrac{n-1}{n}\dfrac{n-3}{n-2}\cdots\dfrac23,&n\ \text{为大于1的奇数}\end{cases}$；(2) $\displaystyle\int_0^\pi xf(\sin x)dx=\dfrac\pi2\int_0^\pi f(\sin x)dx$。

#### （五）变上限积分 $\displaystyle\int_a^xf(t)dt$
**定理** 若 $f(x)$ 在 $[a,b]$ 上连续，则 $\displaystyle\int_a^xf(t)dt$ 在 $[a,b]$ 上可导且 $\left(\displaystyle\int_a^xf(t)dt\right)'=f(x)$。
变上限求导的三个类型：(1) $\left(\displaystyle\int_{\varphi(x)}^{\psi(x)}f(t)dt\right)'=f(\psi(x))\psi'(x)-f(\varphi(x))\varphi'(x)$；(2) $\left(\displaystyle\int_{\varphi(x)}^{\psi(x)}f(x,t)dt\right)'$；(3) $\left(\displaystyle\int_a^bf(x,t)dt\right)'$。

【例1】设 $f$ 连续，求下列函数的导数：1) $\displaystyle\int_{e^x}^{x^2}f(t)dt$；2) $\displaystyle\int_0^x(t-x)f(t)dt$；3) $\displaystyle\int_0^x\sin(x-t)^2dt$；4) $\displaystyle\int_1^xf(x+t)dt$。

【解】1) $\left(\displaystyle\int_{e^x}^{x^2}f(t)dt\right)'=2xf(x^2)-e^xf(e^x)$。` },
      { p: 97, md: R`2) $\displaystyle\int_0^x(t-x)f(t)dt=\int_0^xtf(t)dt-x\int_0^xf(t)dt$，$\left(\displaystyle\int_0^x(t-x)f(t)dt\right)'=xf(x)-xf(x)-\int_0^xf(t)dt=-\int_0^xf(t)dt$。
3) $\displaystyle\int_0^x\sin(x-t)^2dt\xlongequal{x-t=u}\int_0^x\sin u^2du$，故导数为 $\sin x^2$。
4) $\displaystyle\int_1^xf(x+t)dt\xlongequal{x+t=u}\int_{x+1}^{x+2}f(u)du$，故导数为 $f(x+2)-f(x+1)$。

#### （六）定积分的性质
1) 不等式：① 若 $f(x)\leqslant g(x)$，则 $\int_a^bf\leqslant\int_a^bg$；② 若 $f$ 连续，则 $m(b-a)\leqslant\int_a^bf(x)dx\leqslant M(b-a)$（$m,M$ 为最值）；③ $\left|\int_a^bf(x)dx\right|\leqslant\int_a^b|f(x)|dx$。
2) 积分中值定理：① 若 $f$ 在 $[a,b]$ 上连续，则 $\int_a^bf(x)dx=f(\xi)(b-a)$，$a<\xi<b$；② 若 $f,g$ 连续且 $g$ 不变号，则 $\int_a^bf(x)g(x)dx=f(\xi)\int_a^bg(x)dx$。

【注】① 中 $\xi$ 在开区间内，这给应用带来方便。

【例2】设 $f(x)$ 在 $[a,b]$ 上连续，在 $(a,b)$ 内可导，且 $\dfrac{1}{b-a}\int_a^bf(x)dx=f(b)$。求证：在 $(a,b)$ 内至少存在一点 $c$ 使 $f'(c)=0$。

【证】由积分中值定理 $\int_a^bf(x)dx=f(\xi)(b-a)$，$a<\xi<b$，代入得 $f(\xi)=f(b)$，由罗尔定理得至少存在 $c\in(\xi,b)\subset(a,b)$ 使 $f'(c)=0$。

### 二、常考题型的方法与技巧
### 题型一　定积分的概念、性质及几何意义
【例1】求 $\lim\limits_{n\to\infty}\left[\left(1+\dfrac{1^2}{n^2}\right)\left(1+\dfrac{2^2}{n^2}\right)\cdots\left(1+\dfrac{n^2}{n^2}\right)\right]^{\frac1n}$。` },
      { p: 98, md: R`【解】令 $y_n=\left[\prod_{k=1}^n\left(1+\dfrac{k^2}{n^2}\right)\right]^{\frac1n}$，则 $\ln y_n=\dfrac1n\left[\ln\left(1+\dfrac{1^2}{n^2}\right)+\cdots+\ln\left(1+\dfrac{n^2}{n^2}\right)\right]$，$\lim\limits_{n\to\infty}\ln y_n=\displaystyle\int_0^1\ln(1+x^2)dx=x\ln(1+x^2)\Big|_0^1-\int_0^1\dfrac{2x^2}{1+x^2}dx=\ln2-2\left(1-\dfrac\pi4\right)$，故原式 $=2e^{\frac\pi2-2}$。

【例2】设 $f(x)$ 连续，且 $\lim\limits_{x\to+\infty}f(x)=1$，则 $\lim\limits_{x\to+\infty}\displaystyle\int_x^{x+2}t\sin\left(\dfrac3t\right)f(t)dt=$______。

【解】由积分中值定理，$=\lim\limits_{x\to+\infty}2\xi\sin\left(\dfrac3\xi\right)f(\xi)=2\cdot3\cdot1=6$（$x<\xi<x+2$）。

【例3】求极限 $\lim\limits_{n\to\infty}\displaystyle\int_0^1x^n\sqrt{1+x^2}dx$。

【解1】$0\leqslant\displaystyle\int_0^1x^n\sqrt{1+x^2}dx<\sqrt2\int_0^1x^ndx=\dfrac{\sqrt2}{n+1}\to0$，故极限为 $0$。
【解2】由积分中值定理 $\int_0^1x^n\sqrt{1+x^2}dx=\sqrt{1+\xi_n^2}\int_0^1x^ndx$，因 $\int_0^1x^ndx=\dfrac{1}{n+1}\to0$ 为无穷小、$\sqrt{1+\xi_n^2}$ 有界，故极限为 $0$。

【注】若 $f(x)$ 在 $[0,1]$ 上连续，则 $\lim\limits_{n\to\infty}\int_0^1x^nf(x)dx=0$。

【例4】连续函数 $y=f(x)$ 在 $[-3,-2],[2,3]$ 上为直径 $1$ 的上、下半圆周，在 $[-2,0],[0,2]$ 上为直径 $2$ 的下、上半圆周，$F(x)=\int_0^xf(t)dt$，则 (A) $F(3)=-\frac34F(-2)$　(B) $F(3)=\frac54F(2)$　(C) $F(-3)=\frac34F(2)$　(D) $F(-3)=-\frac54F(-2)$` },
      { p: 99, md: R`【解】由图 $f(x)$ 为奇函数，则 $F(x)=\int_0^xf(t)dt$ 为偶函数，故 $F(-2)=F(2)=\dfrac\pi2$（几何意义），$F(-3)=F(3)=\dfrac\pi2-\dfrac\pi8=\dfrac{3\pi}{8}$（几何意义），故 (C) 正确。

### 题型二　定积分计算
【例1】$I=\displaystyle\int_{-1}^1\dfrac{2x^2+\sin x}{1+\sqrt{1-x^2}}dx$。

【解】$I=4\displaystyle\int_0^1\dfrac{x^2}{1+\sqrt{1-x^2}}dx=4\int_0^1[1-\sqrt{1-x^2}]dx=4-4\int_0^1\sqrt{1-x^2}dx=4-\pi$。

【注】由几何意义 $\displaystyle\int_0^a\sqrt{a^2-x^2}dx=\dfrac\pi4a^2$，$\int_0^a\sqrt{2ax-x^2}dx=\dfrac\pi4a^2$，$\int_0^{2a}\sqrt{2ax-x^2}dx=\dfrac\pi2a^2$。

【例2】$I=\displaystyle\int_0^{n\pi}\sqrt{1-\sin2x}dx$。

【解1】由周期性 $I=n\displaystyle\int_0^\pi\sqrt{(\cos x-\sin x)^2}dx=n\int_0^\pi|\cos x-\sin x|dx=n\left[\int_0^{\frac\pi4}(\cos x-\sin x)dx+\int_{\frac\pi4}^\pi(\sin x-\cos x)dx\right]=2\sqrt2\,n$。

【解2】$I=n\displaystyle\int_{\frac\pi4}^{\frac{5\pi}{4}}(\sin x-\cos x)dx=2\sqrt2\,n$。

【例3】$I=\displaystyle\int_0^\pi x\sin^nx\,dx\ (n\geqslant1)$。

【解】$I=\dfrac\pi2\displaystyle\int_0^\pi\sin^nx\,dx=\pi\int_0^{\frac\pi2}\sin^nx\,dx$，结果为 $n$ 为偶数时 $\dfrac{n-1}{n}\dfrac{n-3}{n-2}\cdots\dfrac12\cdot\dfrac\pi2\cdot\pi$；$n$ 为大于 $1$ 的奇数时 $\dfrac{n-1}{n}\cdots\dfrac23\cdot\pi$；$n=1$ 时为 $\pi$。` },
      { p: 100, md: R`【注】特别地 $\displaystyle\int_0^\pi x\sin x\,dx=\dfrac\pi2\int_0^\pi\sin x\,dx=\pi$，比用分部积分方便。

【例4】$I=\displaystyle\int_0^1\dfrac{x\,dx}{(2-x^2)\sqrt{1-x^2}}$。

【解】令 $x=\sin t$，$I=\displaystyle\int_0^{\frac\pi2}\dfrac{\sin t\cos t\,dt}{(2-\sin^2t)\cos t}=\int_0^{\frac\pi2}\dfrac{-d\cos t}{1+\cos^2t}=-\arctan\cos t\Big|_0^{\frac\pi2}=\dfrac\pi4$。

【例5】$I=\displaystyle\int_0^3\arcsin\sqrt{\dfrac{x}{1+x}}dx$。

【解】令 $\arcsin\sqrt{\dfrac{x}{1+x}}=t$，则 $x=\tan^2t$，$I=\displaystyle\int_0^{\frac\pi3}t\,d(\tan^2t)=t\tan^2t\Big|_0^{\frac\pi3}-\int_0^{\frac\pi3}\tan^2t\,dt=\dfrac{4\pi}{3}-\sqrt3$。

【例6】设 $f(x)=\displaystyle\int_0^x\dfrac{\sin t}{\pi-t}dt$，计算 $\displaystyle\int_0^\pi f(x)dx$。

【解1】$\displaystyle\int_0^\pi f(x)dx=xf(x)\Big|_0^\pi-\int_0^\pi\dfrac{x\sin x}{\pi-x}dx=\pi\int_0^\pi\dfrac{\sin t}{\pi-t}dt-\int_0^\pi\dfrac{x\sin x}{\pi-x}dx=\int_0^\pi\sin x\,dx=2$。
【解2】$\displaystyle\int_0^\pi f(x)dx=\int_0^\pi f(x)d(x-\pi)=(x-\pi)f(x)\Big|_0^\pi-\int_0^\pi\dfrac{(x-\pi)\sin x}{\pi-x}dx=\int_0^\pi\sin x\,dx=2$。
【解3】累次积分交换次序：$\displaystyle\int_0^\pi dx\int_0^x\dfrac{\sin t}{\pi-t}dt=\int_0^\pi dt\int_t^\pi\dfrac{\sin t}{\pi-t}dx=\int_0^\pi\sin x\,dx=2$。

【例7】$I=\displaystyle\int_0^2f(x-1)dx$，其中 $f(x)=\begin{cases}\dfrac{1}{1+x},&x\geqslant0\\\dfrac{1}{1+e^x},&x<0\end{cases}$。

【解】令 $x-1=t$，$I=\displaystyle\int_{-1}^1f(t)dt=\int_{-1}^0\dfrac{dt}{1+e^t}+\int_0^1\dfrac{dt}{1+t}=-\ln(1+e^{-t})\Big|_{-1}^0+\ln2=\ln(1+e)$。` },
      { p: 101, md: R`【例8】$I=\displaystyle\int_0^{\frac\pi2}\dfrac{\sin x}{\sin x+\cos x}dx$。

【解1】令被积函数 $\dfrac{\sin x}{\sin x+\cos x}=\dfrac{A(\cos x-\sin x)+B(\sin x+\cos x)}{\sin x+\cos x}$，由 $\begin{cases}1=-A+B\\0=A+B\end{cases}$ 得 $A=-\dfrac12,B=\dfrac12$，$I=\dfrac12\displaystyle\int_0^{\frac\pi2}\dfrac{(\sin x-\cos x)+(\sin x+\cos x)}{\sin x+\cos x}dx=\dfrac12(-\ln(\sin x+\cos x)+x)\Big|_0^{\frac\pi2}=\dfrac\pi4$。
【解2】令 $x=\dfrac\pi2-t$，则 $I=\displaystyle\int_0^{\frac\pi2}\dfrac{\cos t}{\sin t+\cos t}dt$，与原式相加取半得 $I=\dfrac12\int_0^{\frac\pi2}dx=\dfrac\pi4$。

【注】$\displaystyle\int_0^{\frac\pi2}\dfrac{\sin^px}{\sin^px+\cos^px}dx$ 与 $\int_0^{\frac\pi2}\dfrac{dx}{1+\tan^px}\ (p>0)$ 都可用解法2。

【例9】$I=\displaystyle\int_{-\frac\pi2}^{\frac\pi2}\dfrac{e^x}{1+e^x}\sin^4x\,dx$。

【解】令 $x=-t$，$I=\displaystyle\int_{-\frac\pi2}^{\frac\pi2}\dfrac{1}{1+e^t}\sin^4t\,dt$，与原式相加取半得 $I=\dfrac12\displaystyle\int_{-\frac\pi2}^{\frac\pi2}\sin^4x\,dx=\int_0^{\frac\pi2}\sin^4x\,dx=\dfrac34\cdot\dfrac12\cdot\dfrac\pi2=\dfrac{3\pi}{16}$。

【例10】已知 $f(x)$ 连续，$\displaystyle\int_0^xtf(x-t)dt=1-\cos x$，求 $\displaystyle\int_0^{\frac\pi2}f(x)dx$。

【解】令 $x-t=u$，$\displaystyle\int_0^xtf(x-t)dt=\int_0^x(x-u)f(u)du=x\int_0^xf(u)du-\int_0^xuf(u)du$，求导得 $\displaystyle\int_0^xf(u)du=\sin x$，令 $x=\dfrac\pi2$ 得 $\displaystyle\int_0^{\frac\pi2}f(u)du=1$。` },
      { p: 102, md: R`【例11】设 $f'(x)=\arcsin(x-1)^2$，$f(0)=0$，求 $\displaystyle\int_0^1f(x)dx$。

【解1】$\displaystyle\int_0^1f(x)dx=xf(x)\Big|_0^1-\int_0^1x\arcsin(x-1)^2dx=\int_0^1f'(x)dx-\int_0^1x\arcsin(x-1)^2dx=\int_0^1(1-x)\arcsin(x-1)^2dx=\dfrac12\int_0^1\arcsin u\,du=\dfrac\pi4-\dfrac12$（令 $(x-1)^2=u$）。
【解2】$\displaystyle\int_0^1f(x)dx=\int_0^1f(x)d(x-1)=(x-1)f(x)\Big|_0^1-\int_0^1(x-1)\arcsin(x-1)^2dx=\int_0^1(1-x)\arcsin(x-1)^2dx$，以下同解1。

【例12】若 $f(x)=\dfrac{x}{1+\cos^2x}-\displaystyle\int_{-\pi}^\pi f(x)\sin x\,dx$，求 $f(x)$。

【解】两端同乘 $\sin x$ 并从 $-\pi$ 到 $\pi$ 积分得 $\displaystyle\int_{-\pi}^\pi f(x)\sin x\,dx=\int_{-\pi}^\pi\dfrac{x\sin x}{1+\cos^2x}dx=2\int_0^\pi\dfrac{x\sin x}{1+\cos^2x}dx=\pi\int_0^\pi\dfrac{\sin x}{1+\cos^2x}dx=-\pi\arctan\cos x\Big|_0^\pi=\dfrac{\pi^2}{2}$，则 $f(x)=\dfrac{x}{1+\cos^2x}-\dfrac{\pi^2}{2}$。

### 题型三　变上限积分函数及其应用
与变上限积分有关的题目主要考查其连续性、可导性及奇偶性，其中变上限求导是重点。
1. 连续性：若 $f(x)$ 在 $[a,b]$ 上可积，则 $\int_a^xf(t)dt$ 在 $[a,b]$ 上连续。
2. 可导性：$F(x)=\int_a^xf(t)dt$ 时，1) $f$ 连续 $\Rightarrow F$ 可导；2) $f$ 可去 $\Rightarrow F$ 可导；` },
      { p: 103, md: R`3) $f$ 跳跃 $\Rightarrow F$ 连续但不可导。
3. 奇偶性：1) 若 $f(x)$ 为奇函数，则 $\int_0^xf(t)dt$ 为偶函数；2) 若 $f(x)$ 为偶函数，则 $\int_0^xf(t)dt$ 为奇函数。

【例1】设 $f(x)$ 是奇函数，除 $x=0$ 外处处连续，$x=0$ 是第一类间断点，则 $\int_0^xf(t)dt$ 是 (A) 连续的奇函数 (B) 在 $x=0$ 间断的奇函数 (C) 连续的偶函数 (D) 在 $x=0$ 间断的偶函数

【解】$f$ 为奇函数 $\Rightarrow\int_0^xf(t)dt$ 为偶函数；$f$ 可积 $\Rightarrow\int_0^xf(t)dt$ 连续。选 (C)。

【例2】设 $g(x)=\int_0^xf(u)du$，其中 $f(x)=\begin{cases}\frac12(x^2+1),&0\leqslant x<1\\\frac13(x-1),&1\leqslant x\leqslant2\end{cases}$，则 $g(x)$ 在 $(0,2)$ 内 (A) 无界 (B) 递减 (C) 不连续 (D) 连续

【解】$x=1$ 为 $f$ 的跳跃间断点，$f$ 在 $[0,2]$ 上可积，从而 $g$ 连续。选 (D)。

【例3】设 $f(x)$ 连续，$F(x)$ 是 $f(x)$ 的原函数，则 (A) $f$ 奇 $\Rightarrow F$ 必偶 (B) $f$ 偶 $\Rightarrow F$ 必奇 (C) $f$ 周期 $\Rightarrow F$ 必周期 (D) $f$ 单调增 $\Rightarrow F$ 必单调增

【解】由 $f$ 连续且奇知 $G(x)=\int_0^xf(u)du$ 为偶函数，$F=G+C$ 也为偶函数。选 (A)。

【例4】设 $F(x)$ 是连续函数 $f(x)$ 的一个原函数，则必有 (A) $F$ 偶 $\Leftrightarrow f$ 奇 (B) $F$ 奇 $\Leftrightarrow f$ 偶 (C) $F$ 周期 $\Leftrightarrow f$ 周期 (D) $F$ 单调 $\Leftrightarrow f$ 单调

【解】由上题 (A) 正确。

【例5】设 $f(x)=\begin{cases}\sin x,&0\leqslant x<\pi\\2,&\pi\leqslant x\leqslant2\pi\end{cases}$，$F(x)=\int_0^xf(t)dt$，则 (A) $x=\pi$ 是 $F$ 的跳跃间断点 (B) 可去间断点 (C) $F$ 在 $x=\pi$ 连续但不可导 (D) $F$ 在 $x=\pi$ 可导` },
      { p: 104, md: R`【解1】$F(x)=\begin{cases}1-\cos x,&0\leqslant x<\pi\\2+2x-2\pi,&\pi\leqslant x\leqslant2\pi\end{cases}$。$\lim\limits_{x\to\pi^-}F=\lim\limits_{x\to\pi^+}F=F(\pi)=2$，连续；$F'_-(π)=\lim\limits_{x\to\pi^-}\dfrac{1-\cos x-2}{x-\pi}=0$，$F'_+(π)=\lim\limits_{x\to\pi^+}\dfrac{2x-2\pi}{x-\pi}=2$，左右导数不等，不可导。选 (C)。
【解2】$x=\pi$ 为 $f$ 的跳跃间断点，则 $F(x)=\int_0^xf(t)dt$ 在 $x=\pi$ 处连续但不可导。选 (C)。

【例6】设函数 $f(x)$ 连续，且 $f(0)\neq0$，求极限 $\lim\limits_{x\to0}\dfrac{\int_0^x(x-t)f(t)dt}{x\int_0^xf(x-t)dt}$。

【解1】$\int_0^xf(x-t)dt=\int_0^xf(u)du$（令 $x-t=u$）。原式 $=\lim\limits_{x\to0}\dfrac{x\int_0^xf(t)dt-\int_0^xtf(t)dt}{x\int_0^xf(t)dt}$，用洛必达法则得 $\lim\limits_{x\to0}\dfrac{\int_0^xf(t)dt}{\int_0^xf(t)dt+xf(x)}$，再用积分中值定理得 $\dfrac{f(0)}{f(0)+f(0)}=\dfrac12$。
【解2】原式分子分母同除 $x^2$，由 $\lim\limits_{x\to0}\dfrac{\int_0^xf(t)dt}{x}=f(0)$，` },
      { p: 105, md: R`$\lim\limits_{x\to0}\dfrac{\int_0^xtf(t)dt}{x^2}=\dfrac{f(0)}{2}$，得原式 $=\dfrac{f(0)-\frac{f(0)}2}{f(0)}=\dfrac12$。
【解3】当 $x\to0$ 时 $\int_0^xf(t)dt\sim f(0)x$，$\int_0^xtf(t)dt\sim\dfrac{f(0)}2x^2$，故原式 $=\lim\limits_{x\to0}\dfrac{f(0)x^2-\frac{f(0)}2x^2}{f(0)x^2}=\dfrac12$。

【例7】设 $F(x)=\int_x^{x+2\pi}e^{\sin t}\sin t\,dt$，则 $F(x)$ (A) 为正常数 (B) 为负常数 (C) 为 $0$ (D) 不是常数

【解】由 $F'(x)=e^{\sin(x+2\pi)}\sin(x+2\pi)-e^{\sin x}\sin x=0$ 知 $F(x)=C$。又 $F(0)=\int_0^{2\pi}e^{\sin t}\sin t\,dt=-\int_0^{2\pi}e^{\sin t}d\cos t=\int_0^{2\pi}e^{\sin t}\cos^2t\,dt>0$，故为正常数。选 (A)。

【例8】试证 $F(x)=\int_0^x(t-t^2)\sin^{2n}t\,dt$ 在 $x\geqslant0$ 上最大值不超过 $\dfrac{1}{(2n+2)(2n+3)}$。

【证】令 $F'(x)=(x-x^2)\sin^{2n}x=0$ 得 $x=1$ 及 $x=k\pi\ (k=1,2,\cdots)$。在 $x=k\pi$ 两侧 $F'$ 不变号，不是极值点；当 $0<x<1$ 时 $F'>0$，$x>1$ 时 $F'<0$，故 $x=1$ 取极大值，且为 $[0,+\infty)$ 上唯一极值点，即最大值。` },
      { p: 106, md: R`$F(1)=\displaystyle\int_0^1(t-t^2)\sin^{2n}t\,dt\leqslant\int_0^1(t-t^2)t^{2n}dt=\dfrac{1}{(2n+2)(2n+3)}$。原题得证。

【例9】设 $f(x)$ 在 $[0,+\infty)$ 上可导，$f(0)=0$，其反函数为 $g(x)$。若 $\displaystyle\int_0^{f(x)}g(t)dt=x^2e^x$，求 $f(x)$。

【解】两端对 $x$ 求导得 $g[f(x)]f'(x)=2xe^x+x^2e^x$，而 $g[f(x)]=x$，故 $xf'(x)=2xe^x+x^2e^x$，即 $f'(x)=2e^x+xe^x\ (x>0)$，$f(x)=(x+1)e^x+C$。由 $f$ 在 $[0,+\infty)$ 可导，$0=f(0)=\lim\limits_{x\to0^+}[(x+1)e^x+C]=1+C$，得 $C=-1$，故 $f(x)=(x+1)e^x-1$。

【例10】设 $f(x)$ 在 $(0,+\infty)$ 内连续，$f(1)=\dfrac52$，且对任意 $x,t>0$ 满足 $\displaystyle\int_1^{xt}f(u)du=t\int_1^xf(u)du+x\int_1^tf(u)du$，求 $f(x)$。

【解】两端对 $t$ 求导得 $xf(xt)=\displaystyle\int_1^xf(u)du+xf(t)$，令 $t=1$ 得 $xf(x)=\int_1^xf(u)du+\dfrac52x$，再对 $x$ 求导得 $f(x)+xf'(x)=f(x)+\dfrac52$，即 $f'(x)=\dfrac{5}{2x}$，$f(x)=\dfrac52\ln x+C$。由 $f(1)=\dfrac52$ 得 $C=\dfrac52$，故 $f(x)=\dfrac52(\ln x+1)$。` },
      { p: 107, md: R`【例11】设 $f(t)$ 连续，$f(t)>0$，$f(-t)=f(t)$。令 $F(x)=\displaystyle\int_{-a}^a|x-t|f(t)dt$，$-a\leqslant x\leqslant a$。1) 证曲线 $y=F(x)$ 在 $[-a,a]$ 上是凹的；2) 当 $x$ 为何值时 $F(x)$ 取最小值；3) 若最小值可表示为 $f(a)-a^2-1$，求 $f(t)$。

【解】1) $F(x)=\displaystyle\int_{-a}^x(x-t)f(t)dt+\int_x^a(t-x)f(t)dt$，$F'(x)=\int_{-a}^xf(t)dt-\int_x^af(t)dt$，$F''(x)=2f(x)>0$，故曲线是凹的。
2) 令 $F'(x)=0$，因 $f$ 为偶函数得 $F'(0)=0$；又 $F''>0$，$x=0$ 为唯一驻点且取极小值，即最小值。
3) 最小值 $F(0)=\displaystyle\int_{-a}^a|t|f(t)dt=2\int_0^atf(t)dt=f(a)-a^2-1$，两端对 $a$ 求导得 $2af(a)=f'(a)-2a$，解得 $f(a)=Ce^{a^2}-1$，由 $f(0)=1$ 得 $C=2$，故 $f(t)=2e^{t^2}-1$。

### 题型四　积分不等式
证明积分不等式常用方法：1) 变量代换；2) 积分中值定理；3) 变上限积分；4) 柯西积分不等式 $\left(\int_a^bf(x)g(x)dx\right)^2\leqslant\int_a^bf^2(x)dx\int_a^bg^2(x)dx$。

【例1】设 $I_1=\displaystyle\int_0^{\frac\pi4}\dfrac{\tan x}{x}dx$，$I_2=\displaystyle\int_0^{\frac\pi4}\dfrac{x}{\tan x}dx$，则 (A) $I_1>I_2>1$ (B) $1>I_1>I_2$` },
      { p: 108, md: R`(C) $I_2>I_1>1$ (D) $1>I_2>I_1$

【解】由 $\sin x<x<\tan x\ (0<x<\frac\pi2)$ 得 $\dfrac{x}{\tan x}<\dfrac{\tan x}{x}$，即 $I_2<I_1$，(C)(D) 不正确；又 $I_2=\displaystyle\int_0^{\frac\pi4}\dfrac{x}{\tan x}dx<\int_0^{\frac\pi4}dx=\dfrac\pi4<1$，(A) 不正确。选 (B)。

【例2】设 $f(x)$ 在 $[0,1]$ 上连续、非负、单调减，求证：$\displaystyle\int_0^af(x)dx\geqslant a\int_0^1f(x)dx\ (0<a<1)$。

【证1】只要证 $(1-a)\displaystyle\int_0^af(x)dx\geqslant a\int_a^1f(x)dx$。由积分中值定理，$(1-a)\int_0^af(x)dx=a(1-a)f(c_1)\ (0<c_1<a)$，$a\int_a^1f(x)dx=a(1-a)f(c_2)\ (a<c_2<1)$；由 $f$ 单调减知 $f(c_1)>f(c_2)$，原题得证。
【证2】$\displaystyle\int_0^af(x)dx=a\int_0^1f(ax)dx$（令 $x=at$）。由 $f$ 单调减且 $ax<x$ 知 $f(ax)\geqslant f(x)$，故 $a\int_0^1f(ax)dx\geqslant a\int_0^1f(x)dx$。

【例3】设 $f(x)$ 在 $[0,1]$ 上可导，$f(0)=0$，$0<f'(x)<1$。求证 $\left(\displaystyle\int_0^1f(x)dx\right)^2>\int_0^1f^3(x)dx$。

【证】令 $F(x)=\left(\displaystyle\int_0^xf(t)dt\right)^2-\int_0^xf^3(t)dt$，只要证 $F(1)>0$。由 $f(0)=0,0<f'<1$ 知 $f(x)>0$。$F'(x)=f(x)\left[2\displaystyle\int_0^xf(t)dt-f^2(x)\right]$，令 $\varphi(x)=2\displaystyle\int_0^xf(t)dt-f^2(x)$，$\varphi'(x)=2f(x)(1-f'(x))>0$，` },
      { p: 109, md: R`从而 $\varphi(x)$ 单调增，又 $\varphi(0)=0$，则 $\varphi(x)>0\ (x\in(0,1])$，故 $F'(x)>0$，$F(x)$ 单调增，$F(1)>F(0)=0$。原题得证。

【例4】设 $f(x),g(x)$ 在 $[a,b]$ 上连续，$f(x)$ 单调增加，$0\leqslant g(x)\leqslant1$。证明：(Ⅰ) $0\leqslant\displaystyle\int_a^xg(t)dt\leqslant(x-a)$；(Ⅱ) $\displaystyle\int_a^{a+\int_a^bg(t)dt}f(x)dx\leqslant\int_a^bf(x)g(x)dx$。

【证】(Ⅰ) 由 $0\leqslant g\leqslant1$ 得 $0\leqslant\displaystyle\int_a^xg(t)dt\leqslant x-a$。
(Ⅱ) 令 $F(u)=\displaystyle\int_a^uf(x)g(x)dx-\int_a^{a+\int_a^ug(t)dt}f(x)dx$，只要证 $F(b)\geqslant0$。$F(a)=0$，$F'(u)=f(u)g(u)-f\left(a+\int_a^ug(t)dt\right)g(u)=g(u)\left[f(u)-f\left(a+\int_a^ug(t)dt\right)\right]$。由 (Ⅰ) 知 $a\leqslant a+\displaystyle\int_a^ug(t)dt\leqslant u$，又 $f$ 单调增，故 $F'(u)\geqslant0$，$F(b)\geqslant0$，原题得证。

【例5】设 $f(x)$ 在 $[a,b]$ 上有连续导数，$f(a)=0$，求证 $\max\limits_{a\leqslant x\leqslant b}|f'(x)|\geqslant\dfrac{2}{(b-a)^2}\displaystyle\int_a^b|f(x)|dx$。

【证1】由 $f(x)=\displaystyle\int_a^xf'(t)dt$ 得 $|f(x)|\leqslant\int_a^x|f'(t)|dt\leqslant(x-a)\max|f'(x)|$，故 $\displaystyle\int_a^b|f(x)|dx\leqslant\int_a^b(x-a)dx\cdot\max|f'(x)|=\dfrac12(b-a)^2\max|f'(x)|$，原题得证。
【证2】由拉格朗日中值定理 $f(x)=f'(\xi)(x-a)$，则 $|f(x)|\leqslant\max|f'(x)|(x-a)$，两端从 $a$ 到 $b$ 积分得 $\displaystyle\int_a^b|f(x)|dx\leqslant\dfrac12(b-a)^2\max|f'(x)|$。` }
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
