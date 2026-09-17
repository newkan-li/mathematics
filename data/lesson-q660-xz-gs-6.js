window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q660_s5"] = {
    id: "q660_s5",
    ch: "660题 · 选择题 · 高等数学",
    title: "选择题 第 126–150 题",
    probTitle: "选择题（含原书详解）",
    book: "《数学基础过关660题（数学二）》",
    problems: [
      { n: 126, q: R`设 $F(x)=\displaystyle\int_0^x\left(\int_0^{u^2}\ln(1+t^2)\,\mathrm{d}t\right)\mathrm{d}u$，则曲线 $y=F(x)$
(A) 在 $(-\infty,0)$ 是凹的，在 $(0,+\infty)$ 是凸的。
(B) 在 $(-\infty,0)$ 是凸的，在 $(0,+\infty)$ 是凹的。
(C) 在 $(-\infty,+\infty)$ 是凹的。
(D) 在 $(-\infty,+\infty)$ 是凸的。`, a: R`(B)`, sol: R`【分析】$F'(x)=\int_0^{x^2}\ln(1+t^2)dt$，$F''(x)=2x\ln(1+x^4)$，故
$$F''(x)\begin{cases}>0,&x>0,\\=0,&x=0,\\<0,&x<0.\end{cases}$$
即 $y=F(x)$ 在 $(-\infty,0)$ 是凸的，在 $(0,+\infty)$ 是凹的。选 (B)。
【评注】$F''$ 的符号即曲线的凹凸性；$\ln(1+x^4)>0$（$x\neq0$）。` },
      { n: 127, q: R`设 $F(x)=\displaystyle\int_0^x(2t-x)f(t)\,\mathrm{d}t$，$f(x)$ 可导，且 $f'(x)>0$，则
(A) $F(0)$ 是极大值。 (B) $F(0)$ 是极小值。
(C) $F(0)$ 不是极值，但 $(0,F(0))$ 是曲线 $F(x)$ 的拐点坐标。
(D) $F(0)$ 不是极值，$(0,F(0))$ 也不是曲线 $F(x)$ 的拐点坐标。`, a: R`(C)`, sol: R`【分析】$F(x)=2\int_0^xtf(t)dt-x\int_0^xf(t)dt$，故
$$F'(x)=2xf(x)-\int_0^xf(t)dt-xf(x)=xf(x)-\int_0^xf(t)dt,$$
$$F''(x)=f(x)+xf'(x)-f(x)=xf'(x).$$
$F''(0)=0$，且由 $f'(x)>0$：$x<0$ 时 $F''<0$、$x>0$ 时 $F''>0$，故 $(0,F(0))$ 是拐点。
又 $x<0$ 时 $F'$ 递减、$x>0$ 时 $F'$ 递增，且 $F'(0)=0$，故恒有 $F'(x)>0$，$F$ 单调增，$F(0)$ 不是极值。选 (C)。
【评注】$F''$ 变号 ⇒ 拐点；$F'$ 不变号 ⇒ 无极值。` },
      { n: 128, q: R`下列叙述错误的是
(A) 设 $f(x)$ 在 $[-a,a]$ 连续为奇函数，则 $f(x)$ 在 $[-a,a]$ 的全体原函数为偶函数。
(B) 设 $f(x)$ 在 $[-a,a]$ 连续为偶函数，则 $f(x)$ 在 $[-a,a]$ 的全体原函数为奇函数。
(C) 设 $f(x)$ 在 $(-\infty,+\infty)$ 连续，以 $T$ 为周期且为奇函数，则 $\displaystyle\int_0^xf(x)\,\mathrm{d}x$ 也是以 $T$ 为周期的函数。
(D) 设 $f(x)$ 在 $(-\infty,+\infty)$ 连续，以 $T$ 为周期，又 $\displaystyle\int_0^{+\infty}f(x)\,\mathrm{d}x$ 收敛，则 $\displaystyle\int_0^xf(t)\,\mathrm{d}t$ 也是以 $T$ 为周期的函数。`, a: R`(B)`, sol: R`【分析】$\int f(x)dx=\int_0^xf(t)dt+C$。当 $f$ 为偶函数时 $\int_0^xf$ 为奇函数，但只有 $C=0$ 时 $\int_0^xf+C$ 才是奇函数，故 (B) 错（应是「有且仅有一个原函数为奇函数」）。
(A) 正确：$f$ 奇 ⇒ $\int_0^xf$ 偶，加任意常数仍偶。
(C)(D) 正确：$\int_0^xf$ 以 $T$ 为周期 $\iff\int_0^Tf=0$；奇函数有 $\int_0^Tf=\int_{-T/2}^{T/2}f=0$，故 (C) 对；$\int_0^{+\infty}f$ 收敛 ⇒ $\int_0^{nT}f=n\int_0^Tf$ 收敛 ⇒ $\int_0^Tf=0$，故 (D) 对。选 (B)。
【评注】奇函数原函数全为偶；偶函数原函数中只有一个（$C=0$）为奇。` },
      { n: 129, q: R`曲线 $y=e^{-x}\sin x$（$0\leqslant x\leqslant3\pi$）与 $x$ 轴所围成的面积可表为
(A) $-\int_0^{3\pi}e^{-x}\sin x\,\mathrm{d}x$。 (B) $\int_0^{3\pi}e^{-x}\sin x\,\mathrm{d}x$。
(C) $\int_0^{\pi}e^{-x}\sin x\,\mathrm{d}x-\int_{\pi}^{2\pi}e^{-x}\sin x\,\mathrm{d}x+\int_{2\pi}^{3\pi}e^{-x}\sin x\,\mathrm{d}x$。
(D) $\int_0^{2\pi}e^{-x}\sin x\,\mathrm{d}x-\int_{2\pi}^{3\pi}e^{-x}\sin x\,\mathrm{d}x$。`, a: R`(C)`, sol: R`【分析】$0\le x\le\pi$、$2\pi\le x\le3\pi$ 时 $y\ge0$；$\pi\le x\le2\pi$ 时 $y\le0$。故面积
$$\int_0^\pi e^{-x}\sin x\,dx-\int_\pi^{2\pi}e^{-x}\sin x\,dx+\int_{2\pi}^{3\pi}e^{-x}\sin x\,dx.$$
选 (C)。
【评注】面积是 $|y|$ 的积分，负的部分要变号。` },
      { n: 130, q: R`设 $f(x)$ 在 $[a,b]$ 上二阶可导，且 $f(x)>0$，下面不等式
$$f(a)(b-a)<\int_a^bf(x)\,\mathrm{d}x<(b-a)\frac{f(a)+f(b)}{2}$$
成立的条件是
(A) $f'(x)>0$，$f''(x)<0$。 (B) $f'(x)<0$，$f''(x)>0$。
(C) $f'(x)>0$，$f''(x)>0$。 (D) $f'(x)<0$，$f''(x)<0$。`, a: R`(C)`, sol: R`【分析】不等式的几何意义：矩形面积 $<$ 曲边梯形面积 $<$ 梯形面积，需过 $(a,f(a))$ 的水平线在曲线下方、弦在曲线上方。这要求 $f$ 在 $[a,b]$ 单调上升且凹（下凸）。
故需 $f'(x)>0$、$f''(x)>0$。选 (C)。
【评注】$f'>0$ ⇒ 曲线在左端点水平线上方；$f''>0$ ⇒ 曲线在弦下方。` },
      { n: 131, q: R`曲线 $\sqrt x+\sqrt y=\sqrt2$ 与坐标轴所围成图形的面积为
(A) $\dfrac13$。 (B) $1$。 (C) $\dfrac14$。 (D) $\dfrac23$。`, a: R`(D)`, sol: R`【分析1】令 $\sqrt x=\sqrt2\cos^2t$、$\sqrt y=\sqrt2\sin^2t$，即 $x=2\cos^4t$、$y=2\sin^4t$（$t$ 从 $\frac\pi2$ 到 $0$）。面积
$$S=\int_0^2y\,dx=\int_{\pi/2}^02\sin^4t\cdot(-8\cos^3t\sin t)dt=16\int_0^{\pi/2}\sin^5t(1-\sin^2t)d\sin t=16\left(\frac16-\frac18\right)=\frac23.$$
【分析2】$y=(\sqrt2-\sqrt x)^2$（$0\le x\le2$），$S=\int_0^2(2-2\sqrt{2x}+x)dx=6-\frac{16}{3}=\frac23$。选 (D)。
【评注】曲线关于 $y=x$ 对称，位于第一象限，与坐标轴交于 $(2,0),(0,2)$。` },
      { n: 132, q: R`由曲线 $y=\operatorname{ch}x=\dfrac{e^x+e^{-x}}{2}$ 及三条直线 $x=-1$，$x=1$，$y=0$ 围成的曲边梯形绕 $y$ 轴旋转一周而成的旋转体的体积等于
(A) $4\pi\left(1-\dfrac1e\right)$。 (B) $2\pi\left(1-\dfrac1e\right)$。 (C) $4\pi\left(1+\dfrac1e\right)$。 (D) $2\pi\left(1+\dfrac1e\right)$。`, a: R`(B)`, sol: R`【分析】$y=\operatorname{ch}x$ 为偶函数，用柱壳法（只算 $[0,1]$）：
$$V=2\pi\int_0^1x\operatorname{ch}x\,dx=2\pi\cdot\frac12\int_0^1x(e^x+e^{-x})dx=\pi\left[xe^x\Big|_0^1-\int_0^1e^xdx-xe^{-x}\Big|_0^1+\int_0^1e^{-x}dx\right]=2\pi\left(1-\frac1e\right).$$
选 (B)。
【评注】偶函数只需算右半再乘 2；柱壳法 $V=2\pi\int xf(x)dx$。` },
      { n: 133, q: R`由曲线 $y=1-(x-1)^2$ 及直线 $y=0$ 围成图形绕 $y$ 轴旋转而成立体的体积 $V$ 是
(A) $\int_0^1\pi(1+\sqrt{1+y})^2\,\mathrm{d}y$。 (B) $\int_0^1\pi(1-\sqrt{1-y})^2\,\mathrm{d}y$。
(C) $\int_0^1\pi\left[(1+\sqrt{1-y})-(1-\sqrt{1-y})\right]^2\,\mathrm{d}y$。 (D) $\int_0^1\pi\left[(1+\sqrt{1-y})^2-(1-\sqrt{1-y})^2\right]\mathrm{d}y$。`, a: R`(D)`, sol: R`【分析】把曲线写成 $x=1\pm\sqrt{1-y}$（$0\le y\le1$），是两段曲线绕 $y$ 轴旋转，故体积为两旋转体之差：
$$V=\pi\int_0^1(1+\sqrt{1-y})^2dy-\pi\int_0^1(1-\sqrt{1-y})^2dy=\pi\int_0^1\left[(1+\sqrt{1-y})^2-(1-\sqrt{1-y})^2\right]dy.$$
选 (D)。
【评注】绕 $y$ 轴用垫圈法（外半径减内半径的平方差）；也可用柱壳法 $V=2\pi\int_0^2x[1-(x-1)^2]dx=\frac{8\pi}{3}$。` },
      { n: 134, q: R`曲线 $r=ae^{b\theta}$（$a>0,b>0$）从 $\theta=0$ 到 $\theta=a$（$a>0$）的一段弧长为
(A) $s=\int_0^aae^{b\theta}\sqrt{1+b^2}\,\mathrm{d}\theta$。 (B) $s=\int_0^a\sqrt{1+(abe^{b\theta})}\,\mathrm{d}\theta$。
(C) $s=\int_0^a\sqrt{1+(ae^{b\theta})^2}\,\mathrm{d}\theta$。 (D) $s=\int_0^aabe^{b\theta}\sqrt{1+(abe^{b\theta})^2}\,\mathrm{d}\theta$。`, a: R`(A)`, sol: R`【分析】极坐标弧长公式 $s=\int_\alpha^\beta\sqrt{r^2+(r')^2}\,d\theta$。$r=ae^{b\theta}$，$r'=abe^{b\theta}$，故
$$s=\int_0^a\sqrt{(ae^{b\theta})^2+(abe^{b\theta})^2}\,d\theta=\int_0^aae^{b\theta}\sqrt{1+b^2}\,d\theta.$$
选 (A)。
【评注】对数螺线的弧长与 $r$ 成正比（相差因子 $\sqrt{1+b^2}$）。` },
      { n: 135, q: R`旋轮线的一枝 $x=a(t-\sin t),y=a(1-\cos t)$（$0\leqslant t\leqslant2\pi$）的质心是
(A) $\left(\pi a,\dfrac43a\right)$。 (B) $\left(\pi a,\dfrac23a\right)$。 (C) $\left(\pi a,\dfrac54a\right)$。 (D) $\left(\pi a,\dfrac74a\right)$。`, a: R`(A)`, sol: R`【分析】弧长 $s=\int_0^{2\pi}\sqrt{x'^2+y'^2}\,dt=\int_0^{2\pi}2a\sin\frac t2dt=8a$。
$\int_0^{2\pi}y\sqrt{x'^2+y'^2}dt=\int_0^{2\pi}a(1-\cos t)\cdot2a\sin\frac t2dt=8a^2\int_0^\pi\sin^3u\,du=\frac{32}{3}a^2$。
由对称性 $\bar x=\pi a$，$\bar y=\dfrac{\frac{32}3a^2}{8a}=\dfrac43a$。选 (A)。
【评注】旋轮线关于 $x=\pi a$ 对称，$\bar x=\pi a$；$\bar y=\frac{\int y\,ds}{\int ds}$。` },
      { n: 136, q: R`峰值为 $V_m$，周期为 $T$ 的三角形波的电压平均值为
(A) $\dfrac{V_m}{2}$。 (B) $\dfrac{V_m}{\sqrt3}$。 (C) $\dfrac{V_m}{4}$。 (D) $\dfrac{V_m}{\sqrt2}$。`, a: R`(A)`, sol: R`【分析】三角形波电压 $V(t)$ 在 $\left[-\frac T2,\frac T2\right]$ 上是偶函数，$0\le t\le\frac T2$ 时 $V(t)=-\frac{2V_m}{T}\left(t-\frac T2\right)$。一个周期的平均电压
$$\bar V=\frac1T\int_{-T/2}^{T/2}V(t)dt=\frac2T\int_0^{T/2}-\frac{2V_m}{T}\left(t-\frac T2\right)dt=\frac{V_m}{2}.$$
选 (A)。
【评注】平均值即 $\frac1T\int_0^TV(t)dt$；利用偶函数简化。` },
      { n: 137, q: R`设无穷长直线 $L$ 的线密度为 1，引力常数为 $k$，则 $L$ 对距直线为 $a$ 的单位质点 $A$ 的引力为
(A) $\dfrac{2k}{a}$。 (B) $\dfrac{k}{a}$。 (C) $\dfrac{2k}{a^2}$。 (D) $\dfrac{k}{a^2}$。`, a: R`(A)`, sol: R`【分析】取 $L$ 为 $x$ 轴，$A$ 在 $(0,a)$。对微元 $[x,x+dx]$，引力沿 $y$ 轴的分量 $dF_y=\frac{k\,dx}{a^2+x^2}\cdot\frac{a}{\sqrt{a^2+x^2}}=\frac{ka\,dx}{(a^2+x^2)^{3/2}}$。故
$$F_y=\int_{-\infty}^{+\infty}\frac{ka\,dx}{(a^2+x^2)^{3/2}}=2ka\int_0^{+\infty}\frac{dx}{(a^2+x^2)^{3/2}}\xlongequal{x=a\tan t}\frac2a k\int_0^{\pi/2}\cos t\,dt=\frac{2k}{a}.$$
选 (A)。
【评注】由对称性水平分量抵消，只算竖直分量；换元 $x=a\tan t$。` },
      { n: 138, q: R`半圆形闸门半径为 $R$（米），将其垂直放入水中，且直径与水面齐。设 $\rho g=1$。若坐标原点取在圆心，$x$ 轴正向朝下，则闸门所受压力 $p$ 为
(A) $\int_0^R\sqrt{R^2-x^2}\,\mathrm{d}x$。 (B) $\int_0^R2\sqrt{R^2-x^2}\,\mathrm{d}x$。
(C) $\int_0^R2x\sqrt{R^2-x^2}\,\mathrm{d}x$。 (D) $\int_0^R2(R-x)\sqrt{R^2-x^2}\,\mathrm{d}x$。`, a: R`(C)`, sol: R`【分析】任取 $[x,x+dx]\subset[0,R]$，相应小横条所受压力微元 $dp=x\cdot2y\,dx=2x\sqrt{R^2-x^2}dx$，故 $p=\int_0^R2x\sqrt{R^2-x^2}dx$。选 (C)。
【评注】水压力 $p=\int(\text{深度})\cdot(\text{宽度})\,dx$；深度即 $x$，宽度为 $2\sqrt{R^2-x^2}$。` },
      { n: 139, q: R`设 $b>0$ 为常数，$\varphi(x)=\dfrac{2}{\sqrt{\pi b}}\int_0^xe^{-\frac{t^2}{b}}\,\mathrm{d}t$，并知 $\int_0^{+\infty}e^{-t^2}\,\mathrm{d}t=\dfrac{\sqrt\pi}{2}$，则
$\int_0^{+\infty}(1-\varphi(x))\,\mathrm{d}x=$
(A) $\dfrac{1}{2\sqrt{\pi b}}$。 (B) $\dfrac{1}{\sqrt{\pi b}}$。 (C) $\sqrt{\dfrac b\pi}$。 (D) $\sqrt{\dfrac{b}{2\pi}}$。`, a: R`(C)`, sol: R`【分析】先求 $\lim\limits_{x\to+\infty}\varphi(x)=\frac{2}{\sqrt{\pi b}}\int_0^{+\infty}e^{-t^2/b}dt=1$，且 $\lim\limits_{x\to+\infty}x(1-\varphi(x))=\lim\limits_{x\to+\infty}\frac{-e^{-x^2/b}}{\frac{\sqrt{\pi b}}{2}\cdot(-x^{-2})}=0$（洛必达）。
分部积分：
$$\int_0^{+\infty}(1-\varphi(x))dx=x(1-\varphi(x))\Big|_0^{+\infty}+\int_0^{+\infty}x\varphi'(x)dx=\frac{2}{\sqrt{\pi b}}\int_0^{+\infty}xe^{-x^2/b}dx=\sqrt{\frac b\pi}.$$
选 (C)。
【评注】先算 $\lim x(1-\varphi)$（为 0），再分部积分；$\int_0^\infty xe^{-x^2/b}dx=\frac b2$。` },
      { n: 140, q: R`关于 $\int_{-\infty}^{+\infty}\sin2x\cdot e^{|x|}\,\mathrm{d}x$，下列结论正确的是
(A) 取值为零。 (B) 取正值。 (C) 发散。 (D) 取负值。`, a: R`(C)`, sol: R`【分析】$\int_0^{+\infty}\sin2x\,e^{|x|}dx=\int_0^{+\infty}e^x\sin2x\,dx=\frac{e^x(\sin2x-2\cos2x)}{5}\Big|_0^{+\infty}$，因 $\lim\limits_{x\to+\infty}\frac{e^x(\sin2x-2\cos2x)}{5}$ 不存在，故发散。选 (C)。
【评注】$\int_{-\infty}^{+\infty}f$ 收敛需 $\int_0^{+\infty}f$ 与 $\int_{-\infty}^0f$ 都收敛；不要与有限对称区间上奇函数积分为零混淆。` },
      { n: 141, q: R`设二元函数 $f(x,y)=\dfrac{x^2y^2}{(x-y)^2+x^2y^2}$，则 $\lim\limits_{(x,y)\to(0,0)}f(x,y)$
(A) 等于 0。 (B) 等于 1。 (C) 等于 $-1$。 (D) 不存在。`, a: R`(D)`, sol: R`【分析】沿 $x=y\neq0$：$f(x,x)=\frac{x^4}{x^4}=1\to1$；沿 $y=0$：$f(x,0)=0\to0$。两路径极限不同，故重极限不存在。选 (D)。
【评注】证明重极限不存在：找两条路径使极限不同（或沿某路径极限不存在）。` },
      { n: 142, q: R`设二元函数 $f(x,y)=\left(\dfrac{xy}{x^2+y^2}\right)^{x^2}$，则 $\lim\limits_{\substack{x\to+\infty\\y\to+\infty}}f(x,y)=$
(A) e。 (B) 0。 (C) $+\infty$。 (D) 不存在。`, a: R`(B)`, sol: R`【分析】由 $xy\le\frac{x^2+y^2}{2}$（$x,y>0$），
$$0\le f(x,y)\le\left(\frac12\right)^{x^2}\to0,$$
由夹逼原理 $\lim\limits_{\substack{x\to+\infty\\y\to+\infty}}f(x,y)=0$。选 (B)。
【评注】用基本不等式 $xy\le\frac{x^2+y^2}{2}$ 放缩；$\left(\frac12\right)^{x^2}\to0$。` },
      { n: 143, q: R`函数 $f(x,y)$ 的两个偏导数在点 $(x_0,y_0)$ 处连续是函数 $f(x,y)$ 在该点处可微的
(A) 充分但非必要条件。 (B) 必要但非充分条件。 (C) 充分必要条件。 (D) 既不充分也不必要条件。`, a: R`(A)`, sol: R`【分析】基本定理：若 $f_x,f_y$ 在 $(x_0,y_0)$ 连续，则 $f$ 在 $(x_0,y_0)$ 可微（充分条件）。反之不成立：$f=(x^2+y^2)\sin\frac1{x^2+y^2}$ 在 $(0,0)$ 可微但偏导数不连续。故为充分非必要。选 (A)。
【评注】偏导数连续 ⇒ 可微 ⇒ 连续/偏导存在；反之均不成立。` },
      { n: 144, q: R`设函数 $f(x,y)$ 在点 $(x_0,y_0)$ 处的两个偏导数 $f_x'(x_0,y_0)$ 和 $f_y'(x_0,y_0)$ 都存在，则
(A) $\lim\limits_{(x,y)\to(x_0,y_0)}f(x,y)$ 存在。
(B) $\lim\limits_{x\to x_0}f(x,y_0)$ 及 $\lim\limits_{y\to y_0}f(x_0,y)$ 都存在。
(C) $f(x,y)$ 在点 $(x_0,y_0)$ 处必连续。
(D) $f(x,y)$ 在点 $(x_0,y_0)$ 处必可微。`, a: R`(B)`, sol: R`【分析】$f'_x(x_0,y_0)$ 存在 ⇒ 一元函数 $f(x,y_0)$ 在 $x_0$ 可导 ⇒ 连续 ⇒ $\lim\limits_{x\to x_0}f(x,y_0)$ 存在；同理 $\lim\limits_{y\to y_0}f(x_0,y)$ 存在。选 (B)。
(A)(C)(D) 均错：如 $f=\frac{xy}{x^2+y^2}$（$(0,0)$ 处补 0）在 0 两偏导存在但不连续、不可微、重极限不存在。
【评注】偏导存在只保证沿两条坐标轴方向的连续性。` },
      { n: 145, q: R`设 $f(x,y)=\begin{cases}\dfrac{x^3y}{x^6+y^2},&x^2+y^2\neq0,\\0,&x^2+y^2=0,\end{cases}$ 则函数 $f(x,y)$ 在点 $(0,0)$ 处
(A) 不连续，且偏导数 $f_x'(0,0)$ 和 $f_y'(0,0)$ 不存在。
(B) 连续，但偏导数 $f_x'(0,0)$ 和 $f_y'(0,0)$ 不存在。
(C) 连续且偏导数 $f_x'(0,0)$ 和 $f_y'(0,0)$ 都存在。
(D) 不连续，但偏导数 $f_x'(0,0)$ 和 $f_y'(0,0)$ 都存在。`, a: R`(D)`, sol: R`【分析】$f(x,0)=0$、$f(0,y)=0$，故 $f'_x(0,0)=0$、$f'_y(0,0)=0$，偏导存在。
沿 $y=x^3$：$\lim\limits_{x\to0}\frac{x^3\cdot x^3}{x^6+x^6}=\frac12\neq f(0,0)$，故 $f$ 在 $(0,0)$ 不连续。选 (D)。
【评注】偏导存在但重极限不存在（不连续）是常见反例；用 $y=x^3$ 路径。` },
      { n: 146, q: R`设函数 $f(x,y)=\begin{cases}xy\sin\dfrac1{\sqrt{x^2+y^2}},&x^2+y^2\neq0,\\0,&x^2+y^2=0,\end{cases}$ 则 $f(x,y)$ 在点 $(0,0)$ 处
(A) 不连续。 (B) 连续，但偏导数 $f_x'(0,0)$ 和 $f_y'(0,0)$ 不存在。
(C) 连续且偏导数 $f_x'(0,0)$ 和 $f_y'(0,0)$ 都存在，但不可微。
(D) 全微分存在但一阶偏导函数 $f_x'$ 和 $f_y'$ 不连续。`, a: R`(D)`, sol: R`【分析】$\Delta z=\Delta x\Delta y\sin\frac1{\sqrt{\Delta x^2+\Delta y^2}}=\rho\cdot\frac{\Delta x}{\rho}\frac{\Delta y}{\rho}\sin\frac1\rho=o(\rho)$，故 $f$ 在 $(0,0)$ 可微（从而连续），且 $f'_x(0,0)=f'_y(0,0)=0$。
但 $x^2+y^2\neq0$ 时 $f'_x=y\sin\frac1{\sqrt{x^2+y^2}}-\frac{yx^2}{(x^2+y^2)^{3/2}}\cos\frac1{\sqrt{x^2+y^2}}$，沿 $y=x$ 极限不存在，故 $f'_x$ 在 $(0,0)$ 不连续；同理 $f'_y$。选 (D)。
【评注】可微 ⇏ 偏导连续；$xy\sin\frac1\rho$ 型是可微但偏导不连续的标准例子。` },
      { n: 147, q: R`设函数 $f(x,y)=\begin{cases}\dfrac{x^4-y^4}{x^2+y^2},&x^2+y^2\neq0,\\0,&x^2+y^2=0,\end{cases}$ 则 $f(x,y)$ 在 $(0,0)$ 处
(A) 连续，但偏导数 $f_x'(0,0)$ 和 $f_y'(0,0)$ 不存在。
(B) 连续且偏导数 $f_x'(0,0)$ 和 $f_y'(0,0)$ 都存在，但不可微。
(C) 可微但 $f_x'$ 和 $f_y'$ 不连续。
(D) 可微且 $f_x'$ 和 $f_y'$ 连续。`, a: R`(D)`, sol: R`【分析】$x^2+y^2\neq0$ 时
$$f'_x=\frac{4x^3(x^2+y^2)-2x(x^4-y^4)}{(x^2+y^2)^2},\qquad f'_y=\frac{-4y^3(x^2+y^2)-2y(x^4-y^4)}{(x^2+y^2)^2}.$$
由 $f(x,0)=0$、$f(0,y)=0$ 得 $f'_x(0,0)=f'_y(0,0)=0$。利用 $\left|\frac{x^2}{x^2+y^2}\right|\le1$、$\left|\frac{y^2}{x^2+y^2}\right|\le1$ 得 $|f'_x|\le8|x|$、$|f'_y|\le8|y|$，故 $\lim f'_x=0=f'_x(0,0)$、$\lim f'_y=0=f'_y(0,0)$，偏导在 $(0,0)$ 连续，从而可微。选 (D)。
【评注】用放缩证明偏导连续，再用「偏导连续 ⇒ 可微」。` },
      { n: 148, q: R`设 $f(x,y)$ 在 $(0,0)$ 连续，且 $\lim\limits_{(x,y)\to(0,0)}\dfrac{f(x,y)-1}{x^2+y^2}=2$，则 $f(x,y)$ 在 $(0,0)$ 处
(A) 不存在偏导数。 (B) 存在偏导数但不可微。
(C) 可微且 $\dfrac{\partial f(0,0)}{\partial x}\neq0$，$\dfrac{\partial f(0,0)}{\partial y}\neq0$。
(D) 可微且 $\dfrac{\partial f(0,0)}{\partial x}=\dfrac{\partial f(0,0)}{\partial y}=0$。`, a: R`(D)`, sol: R`【分析】由条件 $\lim f=f(0,0)=1$，且 $\frac{f(x,y)-f(0,0)}{x^2+y^2}=2+\alpha$（$\alpha\to0$），故
$$f(x,y)-f(0,0)=2(x^2+y^2)+(x^2+y^2)\alpha=o(\rho)=0\cdot\Delta x+0\cdot\Delta y+o(\rho),$$
由可微定义，$f$ 在 $(0,0)$ 可微且 $f'_x(0,0)=f'_y(0,0)=0$。选 (D)。
【评注】$2(x^2+y^2)=o(\rho)$；线性主部系数为零即偏导为零。` },
      { n: 149, q: R`已知 $\dfrac{(x+ay)\,\mathrm{d}x+y\,\mathrm{d}y}{(x+y)^2}$ 为某函数的全微分，则 $a$ 等于
(A) 2。 (B) 1。 (C) 0。 (D) $-1$。`, a: R`(A)`, sol: R`【分析】设 $du=\frac{(x+ay)dx+ydy}{(x+y)^2}$，则 $u_x=\frac{x+ay}{(x+y)^2}$、$u_y=\frac{y}{(x+y)^2}$。由 $u_{xy}=u_{yx}$：
$$u_{xy}=\frac{(a-2)x-ay}{(x+y)^3},\qquad u_{yx}=\frac{-2y}{(x+y)^3},$$
故 $(a-2)x-ay=-2y$ 恒成立 ⇒ $a=2$。选 (A)。
【评注】$Pdx+Qdy$ 为全微分的必要条件 $\frac{\partial P}{\partial y}=\frac{\partial Q}{\partial x}$；由 $x,y$ 恒等式比较系数。` },
      { n: 150, q: R`设 $f(x,y)=(x-2)^2\sqrt y-x(y^2-1)\arcsin\sqrt{\dfrac{x^2+a^2}{y^2}}$，则 $\mathrm{d}f(x,y)\Big|_{(0,1)}=$
(A) $-4\mathrm{d}x+\mathrm{d}y$。 (B) $-4\mathrm{d}x+2\mathrm{d}y$。 (C) $-2\mathrm{d}x+2\mathrm{d}y$。 (D) $-4\mathrm{d}x+\mathrm{d}y$。`, a: R`(B)`, sol: R`【分析】$f(x,y)$ 在 $(0,1)$ 可微。由先代后求：
$$f(x,1)=(x-2)^2\Rightarrow f'_x(0,1)=\left.2(x-2)\right|_{x=0}=-4,$$
$$f(0,y)=4\sqrt y\Rightarrow f'_y(0,1)=\left.\frac2{\sqrt y}\right|_{y=1}=2.$$
故 $df|_{(0,1)}=-4dx+2dy$。选 (B)。
【评注】求指定点偏导用「先代后求」：$f'_x(0,1)=\frac{d}{dx}f(x,1)|_{x=0}$。` }
    ]
  };
})();
