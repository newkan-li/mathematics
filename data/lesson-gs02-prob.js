window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["gs02_s1"].problems = [
    { n: 1, q: R`设 $f(x)$ 在 $x=0$ 处连续，则 $f(x)$ 在 $x=0$ 处可导的充分条件是
(A) $\lim\limits_{x\to0}\frac{f(x)-f(-x)}{2x}$ 存在。
(B) $\lim\limits_{x\to0}\frac{f(\ln(1+x^2))-f(0)}{x^2}$ 存在。
(C) $\lim\limits_{x\to0}\frac{f(x)-f(0)}{\sqrt[3]{x}}$ 存在。
(D) $\lim\limits_{x\to\infty}xf\left(\frac{1}{x}\right)$ 存在。`, a: R`(D)`, sol: R`原书答案 (D)。` },
    { n: 2, q: R`设 $f(x)=\begin{cases}x^2\sin\dfrac{1}{x},&x\neq0,\\0,&x=0.\end{cases}$ 则在点 $x=0$ 处函数 $f(x)$
(A) 不连续。 (B) 连续但不可导。
(C) 可导但导数不连续。 (D) 可导且导数连续。`, a: R`(C)`, sol: R`原书答案 (C)。` },
    { n: 3, q: R`设函数 $y=f(x)$ 在点 $x=0$ 处连续，且 $\lim\limits_{x\to0}\frac{f(x)-2x}{1-\cos x}=1$，则 $f(x)$ 在点 $x=0$ 处
(A) 不可导。 (B) 可导且 $f'(0)=0$。
(C) 可导且 $f'(0)=-2$。 (D) 可微且 $\mathrm{d}y\big|_{x=0}=2\mathrm{d}x$。`, a: R`(D)`, sol: R`原书答案 (D)。` },
    { n: 4, q: R`若 $f(x)$ 在点 $x_0$ 处的左、右导数都存在，则 $f(x)$ 在点 $x_0$ 处
(A) 可导。 (B) 连续。 (C) 不可导。 (D) 不一定连续。`, a: R`(B)`, sol: R`原书答案 (B)。` },
    { n: 5, q: R`已知 $f(x)$ 在 $x=0$ 处连续，且 $\lim\limits_{x\to0}[f(x)+\mathrm{e}^x]^{\frac{1}{x}}=2$，则 $f'(0)$
(A) 不存在。 (B) 等于 $\ln2$。 (C) 等于 $2$。 (D) 等于 $(-1+\ln2)$。`, a: R`(D)`, sol: R`原书答案 (D)。` },
    { n: 6, q: R`设 $f(x)$ 有连续一阶导数，$f(0)=0$，若当 $x\to0$ 时，$\int_0^{f(x)}f(t)\mathrm{d}t$ 与 $4x^2$ 为等价无穷小，则 $f'(0)$ 等于
(A) 0。 (B) 1。 (C) 2。 (D) $\frac{1}{2}$。`, a: R`(C)`, sol: R`原书答案 (C)。` },
    { n: 7, q: R`函数 $f(x)=|x-x^2|(\mathrm{e}^x-1)+\sin|x-2|$ 不可导点的个数为
(A) 0。 (B) 1。 (C) 2。 (D) 3。`, a: R`(C)`, sol: R`原书答案 (C)。` },
    { n: 8, q: R`$f(x)=\lim\limits_{n\to\infty}\sqrt[n]{1+|x|^n+\mathrm{e}^{nx}}$ 不可导点的个数为
(A) 0个。 (B) 1个。 (C) 2个。 (D) 3个。`, a: R`(C)`, sol: R`原书答案 (C)。` },
    { n: 9, q: R`已知 $f(x)$ 在 $x=0$ 处连续，且 $\lim\limits_{x\to0}\frac{x^2}{f(x)}=1$，则下列结论
① $f'(0)$ 存在，且 $f'(0)=0$。 ② $f''(0)$ 存在，且 $f''(0)=2$。
③ $f(x)$ 在 $x=0$ 处取得极小值。 ④ $f(x)$ 在 $x=0$ 的某邻域内连续。
中正确的个数为
(A) 1。 (B) 2。 (C) 3。 (D) 4。`, a: R`(B)`, sol: R`原书答案 (B)。` },
    { n: 10, q: R`设函数 $f(x)$ 在 $(-\infty,+\infty)$ 内连续，其导函数的图形如右图所示，则 $f(x)$ 有
[此处有插图：坐标系中曲线为导函数 $y=f'(x)$ 的图形，横轴为 $x$，纵轴为 $y$，原点为 $O$]
(A) 一个极小值点和两个极大值点。 (B) 两个极小值点和一个极大值点。
(C) 两个极小值点和两个极大值点。 (D) 三个极小值点和一个极大值点。`, a: R`(C)`, sol: R`原书答案 (C)。` },
    { n: 11, q: R`设函数 $f(x)=|x^2(x+1)|$ 的驻点个数为 $m$，极值点的个数为 $n$，则
(A) $m=1,n=1$。 (B) $m=1,n=2$。 (C) $m=2,n=3$。 (D) $m=3,n=2$。`, a: R`(C)`, sol: R`原书答案 (C)。` },
    { n: 12, q: R`函数 $f(x)=\int_{-\pi}^{x}(t-x\sin t)^2\mathrm{d}t$ 的极值点为
(A) $x=2$ 为极小值点。 (B) $x=2$ 为极大值点。
(C) $x=1$ 为极小值点。 (D) $x=1$ 为极大值点。`, a: R`(A)`, sol: R`原书答案 (A)。` },
    { n: 13, q: R`设函数 $f(x)$ 有二阶导数，且 $\lim\limits_{x\to0}\frac{f(x)-a}{\ln(1+x)}=0$，$\lim\limits_{x\to0}\frac{f''(x)-1}{\mathrm{e}^{x^2}-1}=2012$，则
(A) $f(0)$ 是 $f(x)$ 的极大值。 (B) $f(0)$ 是 $f(x)$ 的极小值。
(C) $(0,f(0))$ 是曲线 $y=f(x)$ 的拐点。
(D) $f(0)$ 不是 $f(x)$ 的极值，$(0,f(0))$ 也不是曲线 $y=f(x)$ 的拐点。`, a: R`(B)`, sol: R`原书答案 (B)。` },
    { n: 14, q: R`设函数 $f(x)$ 有二阶连续导数，且 $f(0)=0$，$f'(0)>0$，$f''(0)<0$，则
(A) $x=0$ 是 $|f(x)|$ 的极值点，但 $(0,f(0))$ 不是曲线 $y=|f(x)|$ 的拐点。
(B) $x=0$ 不是 $|f(x)|$ 的极值点，但 $(0,f(0))$ 是曲线 $y=|f(x)|$ 的拐点。
(C) $x=0$ 是 $|f(x)|$ 的极值点，且 $(0,f(0))$ 是曲线 $y=|f(x)|$ 的拐点。
(D) $x=0$ 不是 $|f(x)|$ 的极值点，且 $(0,f(0))$ 不是曲线 $y=|f(x)|$ 的拐点。`, a: R`(C)`, sol: R`原书答案 (C)。` },
    { n: 15, q: R`设 $f(x)$ 满足 $f'(0)=0$，$f'(x)+[f(x)]^3=x^2$，则
(A) $f(0)$ 是 $f(x)$ 的极大值。 (B) $f(0)$ 是 $f(x)$ 的极小值。
(C) $(0,f(0))$ 是曲线 $y=f(x)$ 的拐点。
(D) $f(0)$ 不是 $f(x)$ 的极值，$(0,f(0))$ 也不是曲线 $y=f(x)$ 的拐点。`, a: R`(C)`, sol: R`原书答案 (C)。` },
    { n: 16, q: R`曲线 $y=\frac{x^2+1}{\sqrt{x^2-1}}$ 的渐近线条数为
(A) 1。 (B) 2。 (C) 3。 (D) 4。`, a: R`(D)`, sol: R`原书答案 (D)。` },
    { n: 17, q: R`曲线 $y=\frac{x^2+x}{x^2-1}$ 渐近线的条数为
(A) 0。 (B) 1。 (C) 2。 (D) 3。`, a: R`(C)`, sol: R`原书答案 (C)。` },
    { n: 18, q: R`设曲线 $y=f(x)$ 与 $y=x^2-x$ 在点 $(1,0)$ 处有公共切线，则 $\lim\limits_{n\to\infty}nf\left(\frac{n}{n+2}\right)=$ ______。`, a: R`$-2$`, sol: R`原书答案 $-2$。` },
    { n: 19, q: R`已知 $f(x)=\frac{(x-1)(x-2)\cdots(x-n)}{(x+1)(x+2)\cdots(x+n)}$，则 $f'(1)=$ ______。`, a: R`$\frac{(-1)^{n-1}}{n(n+1)}$`, sol: R`原书答案 $\frac{(-1)^{n-1}}{n(n+1)}$。` },
    { n: 20, q: R`曲线 $\begin{cases}x=\int_0^{1-t}\mathrm{e}^{-u^2}\mathrm{d}u,\\y=t^2\ln(2-t^2).\end{cases}$ 在点 $(0,0)$ 处的切线方程为 ______。`, a: R`$y=2x$`, sol: R`原书答案 $y=2x$。` },
    { n: 21, q: R`对数螺线 $\rho=\mathrm{e}^{\theta}$ 在点 $(\rho,\theta)=\left(\mathrm{e}^{\frac{\pi}{2}},\frac{\pi}{2}\right)$ 处的切线的直角坐标方程为 ______。`, a: R`$x+y=\mathrm{e}^{\frac{\pi}{2}}$`, sol: R`原书答案 $x+y=\mathrm{e}^{\frac{\pi}{2}}$。` },
    { n: 22, q: R`设函数 $f(x)=\begin{cases}\ln\sqrt{x},&x\geqslant1,\\2x-1,&x<1,\end{cases}$ $y=f(f(x))$，则 $\left.\frac{\mathrm{d}y}{\mathrm{d}x}\right|_{x=\mathrm{e}}=$ ______。`, a: R`$\frac{1}{\mathrm{e}}$`, sol: R`原书答案 $\frac{1}{\mathrm{e}}$。` },
    { n: 23, q: R`设 $y=f(x)$ 的反函数是 $x=\varphi(y)$，且 $f(x)=\int_1^{2x}\mathrm{e}^{t^2}\mathrm{d}t+1$，则 $\varphi''(1)=$ ______。`, a: R`$-\frac{1}{\mathrm{e}^2}$`, sol: R`原书答案 $-\frac{1}{\mathrm{e}^2}$。` },
    { n: 24, q: R`函数 $y=x\ln(1-2x)$ 在 $x=0$ 处的 $n(n\geqslant2)$ 阶导数 $y^{(n)}(0)=$ ______。`, a: R`$-\frac{2^{n-1}n!}{n-1}$`, sol: R`原书答案 $-\frac{2^{n-1}n!}{n-1}$。` },
    { n: 25, q: R`设 $f(x)=\frac{x^2+x-1}{x^2+x-2}$，则 $f^{(n)}(x)=$ ______。`, a: R`$\frac{(-1)^nn!}{3}\left[\frac{1}{(x-1)^{n+1}}-\frac{1}{(x+2)^{n+1}}\right]$`, sol: R`原书答案 $\frac{(-1)^nn!}{3}\left[\frac{1}{(x-1)^{n+1}}-\frac{1}{(x+2)^{n+1}}\right]$。` },
    { n: 26, q: R`函数 $f(x)=\ln|(x-1)(x-2)\cdots(x-n)|$ 的驻点个数为 ______。`, a: R`$n-1$`, sol: R`原书答案 $n-1$。` },
    { n: 27, q: R`已知方程 $x^4+2x^3-3x^2-4x+a=0$ 有两个重根，则 $a=$ ______。`, a: R`$a=4$`, sol: R`原书答案 $a=4$。` },
    { n: 28, q: R`已知方程 $3x^4-8x^3-6x^2+24x+a=0$ 有四个不相同的实根，则 $a$ 的取值范围为 ______。`, a: R`$-13<a<-8$`, sol: R`原书答案 $-13<a<-8$。` },
    { n: 29, q: R`设 $f(x)$ 为连续函数，$\lim\limits_{x\to0}\frac{xf(x)-\ln(1+x)}{x^2}=2$。$F(x)=\int_0^xtf(x-t)\mathrm{d}t$，当 $x\to0$ 时 $F(x)-\frac{1}{2}x^2$ 与 $bx^k$ 为等价无穷小，其中常数 $b\neq0$，$k$ 为某正整数。求 $k$ 与 $b$ 的值及 $f(0)$，$f'(0)$。`, a: R`$k=3$，$b=\frac{1}{4}$，$f(0)=1$，$f'(0)=\frac{3}{2}$。`, sol: R`原书答案：$k=3$，$b=\frac{1}{4}$，$f(0)=1$，$f'(0)=\frac{3}{2}$。` },
    { n: 30, q: R`已知函数 $f(u)$ 具有二阶导数，且 $f'(0)=1$，函数 $y=y(x)$ 由方程 $y-x\mathrm{e}^{y-1}=1$ 所确定。设 $z=f(\ln y-\sin x)$，求 $\left.\frac{\mathrm{d}z}{\mathrm{d}x}\right|_{x=0}$，$\left.\frac{\mathrm{d}^2z}{\mathrm{d}x^2}\right|_{x=0}$。`, a: R`$0,1$`, sol: R`原书答案 $0,1$。` },
    { n: 31, q: R`设 $f(t)$ 二阶可导，且 $f''(t)\neq0$，$\begin{cases}y=tf'(t)-f(t),\\x=f'(t).\end{cases}$ 求 $\frac{\mathrm{d}^2y}{\mathrm{d}x^2}$ 及 $\frac{\mathrm{d}^2x}{\mathrm{d}y^2}$。`, a: R`$\frac{\mathrm{d}^2y}{\mathrm{d}x^2}=\frac{1}{f''(t)}$；$\frac{\mathrm{d}^2x}{\mathrm{d}y^2}=-\frac{1}{t^3f''(t)}$。`, sol: R`原书答案如上。` },
    { n: 32, q: R`设 $y=y(x)$ 由 $\begin{cases}x=t^3+2t+1,\\t-\int_1^{y+t}\mathrm{e}^{-u^2}\mathrm{d}u=0.\end{cases}$ 确定，求 $\left.\frac{\mathrm{d}y}{\mathrm{d}x}\right|_{t=0}$，$\left.\frac{\mathrm{d}^2y}{\mathrm{d}x^2}\right|_{t=0}$。`, a: R`$\left.\frac{\mathrm{d}y}{\mathrm{d}x}\right|_{t=0}=\frac{\mathrm{e}-1}{2}$，$\left.\frac{\mathrm{d}^2y}{\mathrm{d}x^2}\right|_{t=0}=\frac{\mathrm{e}^2}{2}$。`, sol: R`原书答案如上。` },
    { n: 33, q: R`设函数 $\varphi(x)=\int_0^{\sin x}f(tx^2)\mathrm{d}t$，其中 $f(x)$ 是连续函数，且 $f(0)=2$。
(1) 求 $\varphi'(x)$；(2) 讨论 $\varphi'(x)$ 的连续性。`, a: R`(1) $\varphi'(x)=\begin{cases}-\frac{2}{x^3}\int_0^{x^2\sin x}f(u)\mathrm{d}u+f(x^2\sin x)\left(\frac{2}{x}\sin x+\cos x\right),&x\neq0,\\2,&x=0.\end{cases}$ (2) $\varphi'(x)$ 处处连续。`, sol: R`原书答案如上。` },
    { n: 34, q: R`设 $f(x)$ 连续，$\varphi(x)=\int_0^1f(xt)\mathrm{d}t$，且 $\lim\limits_{x\to0}\frac{f(x)}{x}=A$（$A$ 为常数）。求 $\varphi'(x)$，并讨论 $\varphi'(x)$ 在 $x=0$ 处的连续性。`, a: R`$\varphi'(x)=\begin{cases}\frac{xf(x)-\int_0^xf(x)\mathrm{d}x}{x^2},&x\neq0,\\\frac{A}{2},&x=0.\end{cases}$ $\varphi'(x)$ 在 $x=0$ 处连续。`, sol: R`原书答案如上。` },
    { n: 35, q: R`设函数由方程 $2y^3-2y^2+2xy-x^2=1$ 所确定，试求 $y=y(x)$ 的驻点，并判别它是否为极值点。`, a: R`驻点 $x=1$，$y=y(x)$ 在 $x=1$ 处取极小值。`, sol: R`原书答案：驻点 $x=1$，$y=y(x)$ 在 $x=1$ 处取极小值。` },
    { n: 36, q: R`已知曲线的方程为 $\begin{cases}x=t^2+1,\\y=4t-t^2.\end{cases}$ $(t\geqslant0)$。
(1) 讨论 $L$ 的凹凸性；
(2) 过点 $(-1,0)$ 引 $L$ 的切线，求切点 $(x_0,y_0)$，并写出切线的方程；
(3) 求此切线与 $L$（对应于 $x\leqslant x_0$ 的部分）及 $x$ 轴所围成的平面图形的面积。`, a: R`(1) 曲线 $L$ 在 $t>0$ 上是凸的；(2) 切点为 $(2,3)$，切线方程为 $y=x+1$；(3) 所围成的平面图形的面积为 $\frac{7}{3}$。`, sol: R`原书答案如上。` },
    { n: 37, q: R`试确定方程 $x^3-x=\sin x$ 的实根个数。`, a: R`三个实根。`, sol: R`原书提示：令 $f(x)=x^3-x-\sin x$，由于 $f(x)$ 是奇函数，则其零点关于原点对称，因此只需讨论 $(0,+\infty)$ 上的零点个数，$f(x)$ 在该区间上只有一个零点，原方程有三个实根。` },
    { n: 38, q: R`试确定方程 $\int_0^x\mathrm{e}^{-t^2}\mathrm{d}t=x^3-x$ 的实根个数。`, a: R`三个实根。`, sol: R`原书提示：与上题类似三个实根。` },
    { n: 39, q: R`试确定方程 $\mathrm{e}^x=ax^2(a>0)$ 的实根个数。`, a: R`当 $0<a<\frac{\mathrm{e}^2}{4}$ 时有唯一根；当 $a=\frac{\mathrm{e}^2}{4}$ 时有两个实根；当 $a>\frac{\mathrm{e}^2}{4}$ 时有三个实根。`, sol: R`原书答案如上。` },
    { n: 40, q: R`试确定方程 $\ln x=kx$ 的实根个数。`, a: R`当 $k\leqslant0$ 或 $k=\frac{1}{\mathrm{e}}$ 时有唯一根；当 $0<k<\frac{1}{\mathrm{e}}$ 时有两个实根；当 $k>\frac{1}{\mathrm{e}}$ 时无实根。`, sol: R`原书提示：考虑曲线 $y=\frac{\ln x}{x}$ 与 $y=k$ 的交点个数。答案如上。` },
    { n: 41, q: R`试证：当 $x\geqslant0$ 时，$x\leqslant\mathrm{e}^x\ln(1+x)$。`, a: R`提示：令 $f(x)=\ln(1+x)-x\mathrm{e}^{-x}$，利用单调性。`, sol: R`原书提示：令 $f(x)=\ln(1+x)-x\mathrm{e}^{-x}$，利用单调性。` },
    { n: 42, q: R`设 $x>0$，证明：$2\sin x+\mathrm{e}^x-\mathrm{e}^{-x}>4x$。`, a: R`提示：令 $f(x)=2\sin x+\mathrm{e}^x-\mathrm{e}^{-x}-4x$，利用函数的单调性。`, sol: R`原书提示：令 $f(x)=2\sin x+\mathrm{e}^x-\mathrm{e}^{-x}-4x$，利用函数的单调性。` },
    { n: 43, q: R`设 $x>0$，常数 $a>\mathrm{e}$。证明 $(a+x)^a<a^{a+x}$。`, a: R`提示：先取对数，$a\ln(a+x)<(a+x)\ln a$，然后令 $f(x)=(a+x)\ln a-a\ln(a+x)$，再利用函数的单调性。`, sol: R`原书提示如上。` },
    { n: 44, q: R`设 $\mathrm{e}<a<b$，证明：$a^2<ab\frac{\ln a}{\ln b}<b^2$。`, a: R`提示：利用单调性证明。`, sol: R`原书提示：利用单调性证明。` },
    { n: 45, q: R`设 $f(x)$ 和 $g(x)$ 在 $[0,1]$ 上连续，在 $(0,1)$ 内可导，$f(0)=f(1)=-1$，$\int_0^1f(x)\mathrm{d}x>\frac{1}{2}$，试证至少存在一点 $\xi\in(0,1)$，使 $f'(\xi)+g'(\xi)[f(\xi)-\xi]=1$。`, a: R`提示：构造辅助函数 $F(x)=\mathrm{e}^{g(x)}[f(x)-x]$，注意到 $F(0)<0$，$F(1)<0$。又由 $\int_0^1f(x)\mathrm{d}x>\frac{1}{2}$ 知，$\int_0^1[f(x)-x]\mathrm{d}x>0$，利用积分中值定理得存在 $c\in(0,1)$，使 $f(c)-c>0$，则 $F(c)>0$。然后用介值定理和罗尔定理。`, sol: R`原书提示如上。` },
    { n: 46, q: R`设 $f(x),g(x)$ 在 $[0,1]$ 上连续，在 $(0,1)$ 内可导，且 $\int_0^1f(x)\mathrm{d}x=3\int_{\frac{2}{3}}^1f(x)\mathrm{d}x$，试证存在 $\xi,\eta\in(0,1)$，使得 $f'(\xi)=g'(\xi)[f(\eta)-f(\xi)]$。`, a: R`提示：利用积分中值定理及罗尔定理。`, sol: R`原书提示：利用积分中值定理及罗尔定理。` },
    { n: 47, q: R`设 $f(x)$ 在 $[-2,2]$ 上二阶可导，且 $|f(x)|\leqslant1$，又 $[f(0)]^2+[f'(0)]^2=4$。证明在 $(-2,2)$ 内至少存在一点 $\xi$，使 $f''(\xi)+f(\xi)=0$。`, a: R`提示：考虑辅助函数 $F(x)=f^2(x)+f'^2(x)$。`, sol: R`原书提示：考虑辅助函数 $F(x)=f^2(x)+f'^2(x)$。` },
    { n: 48, q: R`设函数 $f(x)$ 在闭区间 $[a,b]$ 上连续，在开区间 $(a,b)$ 内可导，且 $f'(x)>0$。若极限 $\lim\limits_{x\to a^+}\frac{f(2x-a)}{x-a}$ 存在，证明：
(1) 在 $(a,b)$ 内 $f(x)>0$；
(2) 在 $(a,b)$ 内存在点 $\xi$，使 $\frac{b^2-a^2}{\int_a^bf(x)\mathrm{d}x}=\frac{2\xi}{f(\xi)}$；
(3) 在 $(a,b)$ 内存在与 (2) 中 $\xi$ 相异的点 $\eta$，使 $f'(\eta)(b^2-a^2)=\frac{2\xi}{\xi-a}\int_a^bf(x)\mathrm{d}x$。`, a: R`提示：(1) 由 $\lim\limits_{x\to a^+}\frac{f(2x-a)}{x-a}$ 可知，$f(a)=0$；(2) 在区间 $[a,b]$ 上对 $x^2$，$\int_a^xf(t)\mathrm{d}t$ 用柯西中值定理；(3) 在区间 $[a,\xi]$ 上对 $f(x)$ 用拉格朗日中值定理。`, sol: R`原书提示如上。` },
    { n: 49, q: R`设 $f(x),g(x)$ 在 $[a,b]$ 上连续，在 $(a,b)$ 内可导，且 $g(a)=g(b)=1$，$f'(x)\neq0$。试证存在 $\xi,\eta\in(a,b)$，使得 $\frac{f'(\xi)}{f'(\eta)}=\mathrm{e}^{\xi-\eta}[g(\xi)+g'(\xi)]$。`, a: R`提示：在区间 $[a,b]$ 上用柯西中值定理。`, sol: R`原书提示：在区间 $[a,b]$ 上用柯西中值定理。` },
    { n: 50, q: R`设函数 $f(x)$ 在闭区间 $[0,1]$ 上连续，在开区间 $(0,1)$ 内可导，且 $f(0)=0$，$f(1)=\frac{1}{3}$。
证明：存在 $\xi\in\left(0,\frac{1}{2}\right)$，$\eta\in\left(\frac{1}{2},1\right)$，使得 $f'(\xi)+f'(\eta)=\xi^2+\eta^2$。`, a: R`提示：分别在区间 $\left(0,\frac{1}{2}\right)$，$\left(\frac{1}{2},1\right)$ 上对函数 $f(x)-\frac{1}{3}x^3$ 用拉格朗日中值定理。`, sol: R`原书提示如上。` },
    { n: 51, q: R`设 $f(x)$ 在 $[0,1]$ 上连续，在 $(0,1)$ 内可导，且 $f(0)=f(1)$。试证存在 $\xi$ 和 $\eta$，满足 $0<\xi<\eta<1$，使 $f'(\xi)+f'(\eta)=0$。`, a: R`提示：分区间用拉格朗日中值定理。`, sol: R`原书提示：分区间用拉格朗日中值定理。` },
    { n: 52, q: R`设 $f(x)$ 在 $[0,1]$ 上连续，在 $(0,1)$ 内可导，且 $f(0)=0$，$f(1)=0$，若 $f(x)$ 在 $[0,1]$ 上的最大值为 $M>0$，证明存在两个不同的 $x_1,x_2\in(0,1)$ 点，使得
$$\frac{1}{f'(x_1)}-\frac{1}{f'(x_2)}=\frac{n}{M},$$ 其中 $n$ 是大于 $1$ 的整数`, a: R`提示：分区间用拉格朗日中值定理。`, sol: R`原书提示：分区间用拉格朗日中值定理。` },
    { n: 53, q: R`设 $f(x)$ 在 $[0,1]$ 上二阶可导，$f(0)=f(1)=0$，$\max\limits_{0\leqslant x\leqslant1}f(x)=2$。试证存在点 $\xi\in(0,1)$ 使 $f''(\xi)\leqslant-16$。`, a: R`提示：利用泰勒公式。`, sol: R`原书提示：利用泰勒公式。` },
    { n: 54, q: R`设 $f(x)$ 在 $[0,2]$ 上二阶可导，且 $|f(x)|\leqslant1$，$|f''(x)|\leqslant1$，证明：
$$|f'(x)|\leqslant2\quad(0\leqslant x\leqslant2).$$`, a: R`提示：利用泰勒公式。`, sol: R`原书提示：利用泰勒公式。` }
  ];
})();
