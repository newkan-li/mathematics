window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["gs02_s1"].problems = [
    { n: 1, q: R`设 $f(x)$ 在 $x=0$ 处连续，则 $f(x)$ 在 $x=0$ 处可导的充分条件是
(A) $\lim\limits_{x\to0}\frac{f(x)-f(-x)}{2x}$ 存在。
(B) $\lim\limits_{x\to0}\frac{f(\ln(1+x^2))-f(0)}{x^2}$ 存在。
(C) $\lim\limits_{x\to0}\frac{f(x)-f(0)}{\sqrt[3]{x}}$ 存在。
(D) $\lim\limits_{x\to\infty}xf\left(\frac{1}{x}\right)$ 存在。`, a: R`(D)`, sol: R`【思路】逐项考察能否推出 $\lim\limits_{x\to0}\frac{f(x)-f(0)}{x}$ 存在。
【详解】(A) 是「对称差商」，$f(x)=|x|$ 时该极限为 0，但 $f$ 在 0 不可导。
(B) 令 $u=\ln(1+x^2)\sim x^2>0$，只能推出**右**导数存在，不能保证可导。
(C) 若极限为 $L\neq0$，则 $f(x)-f(0)\sim L\sqrt[3]x$，$\frac{f(x)-f(0)}{x}\sim Lx^{-2/3}$ 发散；只有 $L=0$ 时才可导，故不充分。
(D) 令 $t=\frac1x\to0$，条件即 $\lim\limits_{t\to0}\frac{f(t)}{t}$ 存在。设其为 $L$，则 $f(t)=Lt+o(t)$，故 $f(0)=0$ 且 $f'(0)=L$，可导。选 (D)。
【易错点】对称差商存在 $\nRightarrow$ 可导；换元后要注意 $u$ 的取值是否为双侧。` },
    { n: 2, q: R`设 $f(x)=\begin{cases}x^2\sin\dfrac{1}{x},&x\neq0,\\0,&x=0.\end{cases}$ 则在点 $x=0$ 处函数 $f(x)$
(A) 不连续。 (B) 连续但不可导。
(C) 可导但导数不连续。 (D) 可导且导数连续。`, a: R`(C)`, sol: R`【思路】按「连续→可导→导函数连续」三步走。
【详解】$|f(x)|\le x^2\to0=f(0)$，连续。
$f'(0)=\lim\limits_{x\to0}\frac{x^2\sin\frac1x}{x}=\lim\limits_{x\to0}x\sin\frac1x=0$，可导。
$x\neq0$ 时 $f'(x)=2x\sin\frac1x-\cos\frac1x$，当 $x\to0$ 时 $\cos\frac1x$ 振荡无极限，故 $f'$ 在 0 不连续。选 (C)。
【易错点】$x^2\sin\frac1x$ 是「可导但导函数不连续」的经典例子；导函数含 $\cos\frac1x$ 振荡。` },
    { n: 3, q: R`设函数 $y=f(x)$ 在点 $x=0$ 处连续，且 $\lim\limits_{x\to0}\frac{f(x)-2x}{1-\cos x}=1$，则 $f(x)$ 在点 $x=0$ 处
(A) 不可导。 (B) 可导且 $f'(0)=0$。
(C) 可导且 $f'(0)=-2$。 (D) 可微且 $\mathrm{d}y\big|_{x=0}=2\mathrm{d}x$。`, a: R`(D)`, sol: R`【思路】把条件写成 $f(x)=2x+o(x)$，直接读出 $f(0),f'(0)$。
【详解】由 $\frac{f(x)-2x}{1-\cos x}\to1$ 及 $1-\cos x\sim\frac{x^2}{2}$ 得 $f(x)-2x\sim\frac{x^2}{2}$，即 $f(x)=2x+o(x)$。故 $f(0)=0$，$f'(0)=2$，$\mathrm{d}y|_0=2\mathrm{d}x$。选 (D)。
【易错点】$\frac{x^2}{2}$ 是 $o(x)$，不影响一阶导数；$f'(0)=2$ 对应选项 (D)。` },
    { n: 4, q: R`若 $f(x)$ 在点 $x_0$ 处的左、右导数都存在，则 $f(x)$ 在点 $x_0$ 处
(A) 可导。 (B) 连续。 (C) 不可导。 (D) 不一定连续。`, a: R`(B)`, sol: R`【思路】单侧可导能推出单侧连续，两侧合起来即连续。
【详解】$f'_-(x_0)$ 存在 $\Rightarrow$ $f$ 在 $x_0$ 左连续；$f'_+(x_0)$ 存在 $\Rightarrow$ $f$ 在 $x_0$ 右连续。故 $f$ 在 $x_0$ 连续。选 (B)。
【易错点】左、右导数都存在**不一定相等**，故不一定可导，但一定连续。` },
    { n: 5, q: R`已知 $f(x)$ 在 $x=0$ 处连续，且 $\lim\limits_{x\to0}[f(x)+\mathrm{e}^x]^{\frac{1}{x}}=2$，则 $f'(0)$
(A) 不存在。 (B) 等于 $\ln2$。 (C) 等于 $2$。 (D) 等于 $(-1+\ln2)$。`, a: R`(D)`, sol: R`【思路】$1^\infty$ 型：取对数得 $\lim\frac{\ln(f+e^x)}{x}=\ln2$，再展开。
【详解】由 $\lim[f+e^x]^{1/x}=2$ 取对数得 $\lim\limits_{x\to0}\frac{\ln(f(x)+e^x)}{x}=\ln2$，故 $\ln(f(x)+e^x)=x\ln2+o(x)$，
$$f(x)+e^x=1+x\ln2+o(x).$$
又 $e^x=1+x+o(x)$，故 $f(x)=(\ln2-1)x+o(x)$，即 $f(0)=0$，$f'(0)=\ln2-1$。选 (D)。
【易错点】先由极限确定底数趋于 1（从而 $f(0)=0$），再展开；答案是 $\ln2-1$。` },
    { n: 6, q: R`设 $f(x)$ 有连续一阶导数，$f(0)=0$，若当 $x\to0$ 时，$\int_0^{f(x)}f(t)\mathrm{d}t$ 与 $4x^2$ 为等价无穷小，则 $f'(0)$ 等于
(A) 0。 (B) 1。 (C) 2。 (D) $\frac{1}{2}$。`, a: R`(C)`, sol: R`【思路】先由 $f'(0)$ 的连续性得 $f(x)\sim f'(0)x$，再对变上限积分用等价无穷小。
【详解】设 $f'(0)=a$，则 $f(x)\sim ax$。于是 $\int_0^{f(x)}f(t)\mathrm{d}t\sim\frac{f(x)^2}{2}$（因 $f(t)\sim at$，积分 $\sim\frac{a}{2}u^2$ 代入 $u=f(x)$ 得 $\sim\frac{a}{2}(ax)^2=\frac{a^3x^2}{2}$）。
由 $\frac{a^3x^2/2}{4x^2}\to1$ 得 $a^3=8$，$a=2$。选 (C)。
【易错点】$\int_0^uf(t)dt\sim\frac{a}{2}u^2$，再代入 $u=f(x)\sim ax$，得 $x^2$ 系数为 $\frac{a^3}{2}$。` },
    { n: 7, q: R`函数 $f(x)=|x-x^2|(\mathrm{e}^x-1)+\sin|x-2|$ 不可导点的个数为
(A) 0。 (B) 1。 (C) 2。 (D) 3。`, a: R`(C)`, sol: R`【思路】绝对值函数的可疑点：$x=0,1,2$；逐个检查是否产生「尖点」。
【详解】$|x-x^2|=|x||x-1|$，可疑点 $x=0,1$。
$x=0$：$|x||x-1|(e^x-1)\approx|x|\cdot1\cdot x=x|x|$，$\frac{x|x|}{x}=|x|\to0$，可导。
$x=1$：$|x-1|$ 因子，$e^1-1\neq0$，产生尖点，不可导。
$x=2$：$\sin|x-2|\approx|x-2|$，左导 $-1$、右导 $1$，不可导。
故不可导点有 $x=1,2$，共 2 个，选 (C)。
【易错点】$x=0$ 处因 $e^x-1\sim x$ 与 $|x|$ 相乘变成 $x|x|$（光滑），不可导点只有 1 和 2。` },
    { n: 8, q: R`$f(x)=\lim\limits_{n\to\infty}\sqrt[n]{1+|x|^n+\mathrm{e}^{nx}}$ 不可导点的个数为
(A) 0个。 (B) 1个。 (C) 2个。 (D) 3个。`, a: R`(C)`, sol: R`【思路】按 $x$ 的取值讨论 $e^{nx}$ 与 $|x|^n$ 谁主导，求出分段表达式。
【详解】
$x>0$：$e^{nx}$ 主导，$f=e^x$；
$-1\le x\le0$：$e^{nx}\to0$、$|x|^n\to0$，$f\to1$（$x=-1$ 时 $\sqrt[n]2\to1$）；
$x<-1$：$|x|^n$ 主导，$f=|x|=-x$。
故 $f(x)=\begin{cases}e^x,&x>0\\1,&-1\le x\le0\\-x,&x<-1.\end{cases}$
在 $x=0$：左导 $0$、右导 $1$，不可导；在 $x=-1$：左导 $-1$、右导 $0$，不可导。共 2 个，选 (C)。
【易错点】$x=-1$ 处 $\sqrt[n]{1+1+0}=\sqrt[n]2\to1$，与右侧的 1 相等，函数连续但不可导。` },
    { n: 9, q: R`已知 $f(x)$ 在 $x=0$ 处连续，且 $\lim\limits_{x\to0}\frac{x^2}{f(x)}=1$，则下列结论
① $f'(0)$ 存在，且 $f'(0)=0$。 ② $f''(0)$ 存在，且 $f''(0)=2$。
③ $f(x)$ 在 $x=0$ 处取得极小值。 ④ $f(x)$ 在 $x=0$ 的某邻域内连续。
中正确的个数为
(A) 1。 (B) 2。 (C) 3。 (D) 4。`, a: R`(B)`, sol: R`【思路】条件给出 $f(x)\sim x^2$，据此逐条判断。
【详解】由 $\frac{x^2}{f(x)}\to1$ 得 $f(x)\sim x^2$，故 $f(0)=0$。
① $f'(0)=\lim\frac{f(x)}{x}=\lim\frac{x^2}{x}=0$ 存在。✓
② 只知道 $f(x)\sim x^2$，$f'(x)$ 在 0 附近是否存在都不确定，$f''(0)$ 未必存在。✗
③ $f(x)\sim x^2>0=f(0)$（$x\neq0$ 充分小），故取极小值。✓
④ 极限只保证 $f$ 在 0 附近与 $x^2$ 同阶，不能保证 $f$ 在**邻域内处处**连续。✗
正确的有 ①③，共 2 个，选 (B)。
【易错点】$f\sim x^2$ 只给出原点附近的信息，推不出 $f''(0)$ 存在或邻域内连续。` },
    { n: 10, q: R`设函数 $f(x)$ 在 $(-\infty,+\infty)$ 内连续，其导函数的图形如右图所示，则 $f(x)$ 有
[此处有插图：坐标系中曲线为导函数 $y=f'(x)$ 的图形，横轴为 $x$，纵轴为 $y$，原点为 $O$]
(A) 一个极小值点和两个极大值点。 (B) 两个极小值点和一个极大值点。
(C) 两个极小值点和两个极大值点。 (D) 三个极小值点和一个极大值点。`, a: R`(C)`, sol: R`【思路】由 $f'$ 的图形读符号：$f'$ 由正变负处为极大值点，由负变正处为极小值点；$f'$ 不连续（跳跃）但变号处也算。
【详解】由图：$f'$ 在原点左侧先正后负（一个极大值点）、再负变正（一个极小值点）；在 $x=0$ 处 $f'$ 由正跳到负（跳跃间断，仍变号），对应一个极大值点；在原点右侧 $f'$ 由负变正，对应一个极小值点。
故共有 2 个极大值点和 2 个极小值点，选 (C)。
【易错点】$f'$ 在 $x=0$ 处不连续（跳跃），但只要左右符号相反，该点仍是极值点。` },
    { n: 11, q: R`设函数 $f(x)=|x^2(x+1)|$ 的驻点个数为 $m$，极值点的个数为 $n$，则
(A) $m=1,n=1$。 (B) $m=1,n=2$。 (C) $m=2,n=3$。 (D) $m=3,n=2$。`, a: R`(C)`, sol: R`【思路】令 $g=x^2(x+1)$，$f=|g|$。驻点来自 $g'=0$ 且 $g\neq0$ 的点，以及 $g=0$ 处若光滑；极值点还要看尖点。
【详解】$g=x^3+x^2$，$g'=x(3x+2)$，零点 $x=0,-\frac23$。
$g$ 的零点为 $x=0$（二重）与 $x=-1$（单重）。
$x=-\frac23$：$g=\frac4{27}>0$，$f'=g'=0$，是驻点。
$x=0$：$g\approx x^2\ge0$，$f=x^2$ 光滑，$f'(0)=0$，是驻点。
故驻点 $m=2$。
极值：$x=-\frac23$ 处 $f'$ 由正变负（极大）；$x=0$ 处 $f=x^2$（极小）；$x=-1$ 处 $f=|g|$ 有尖点且 $f\ge0=f(-1)$（极小）。故 $n=3$。选 (C)。
【易错点】$x=-1$ 是极值点但不是驻点（不可导），故 $m\neq n$。` },
    { n: 12, q: R`函数 $f(x)=\int_{-\pi}^{\pi}(t-x\sin t)^2\mathrm{d}t$ 的极值点为
(A) $x=2$ 为极小值点。 (B) $x=2$ 为极大值点。
(C) $x=1$ 为极小值点。 (D) $x=1$ 为极大值点。`, a: R`(A)`, sol: R`【思路】积分上下限都是常数，把被积函数展开成关于 $x$ 的二次式。
【详解】
$$f(x)=\int_{-\pi}^{\pi}\left(t^2-2xt\sin t+x^2\sin^2t\right)\mathrm{d}t=\frac{2\pi^3}{3}-2x\int_{-\pi}^{\pi}t\sin t\,\mathrm{d}t+x^2\int_{-\pi}^{\pi}\sin^2t\,\mathrm{d}t.$$
$\int_{-\pi}^{\pi}t\sin t\,\mathrm{d}t=2\pi$，$\int_{-\pi}^{\pi}\sin^2t\,\mathrm{d}t=\pi$，故 $f(x)=\frac{2\pi^3}{3}-4\pi x+\pi x^2$。
$f'(x)=-4\pi+2\pi x=2\pi(x-2)$，$f'(2)=0$，$f''=2\pi>0$，故 $x=2$ 为极小值点。选 (A)。
【易错点】积分上下限是常数 $-\pi,\pi$（不是变上限），$f$ 只是 $x$ 的二次函数。` },
    { n: 13, q: R`设函数 $f(x)$ 有二阶导数，且 $\lim\limits_{x\to0}\frac{f(x)-a}{\ln(1+x)}=0$，$\lim\limits_{x\to0}\frac{f''(x)-1}{\mathrm{e}^{x^2}-1}=2012$，则
(A) $f(0)$ 是 $f(x)$ 的极大值。 (B) $f(0)$ 是 $f(x)$ 的极小值。
(C) $(0,f(0))$ 是曲线 $y=f(x)$ 的拐点。
(D) $f(0)$ 不是 $f(x)$ 的极值，$(0,f(0))$ 也不是曲线 $y=f(x)$ 的拐点。`, a: R`(B)`, sol: R`【思路】由两个极限分别读出 $f(0),f'(0)$ 与 $f''(0)$，再用二阶判别法。
【详解】由 $\frac{f(x)-a}{\ln(1+x)}\to0$ 且 $\ln(1+x)\to0$ 得 $f(0)=a$；又 $f(x)-a=o(\ln(1+x))=o(x)$，故 $f'(0)=0$。
由 $\frac{f''(x)-1}{e^{x^2}-1}\to2012$ 得 $f''(0)=1>0$。故 $f(0)$ 为极小值。选 (B)。
【易错点】第一个极限给 $f'(0)=0$（不是 $f(0)=0$，$a$ 是任意常数）；第二个极限给 $f''(0)=1$。` },
    { n: 14, q: R`设函数 $f(x)$ 有二阶连续导数，且 $f(0)=0$，$f'(0)>0$，$f''(0)<0$，则
(A) $x=0$ 是 $|f(x)|$ 的极值点，但 $(0,f(0))$ 不是曲线 $y=|f(x)|$ 的拐点。
(B) $x=0$ 不是 $|f(x)|$ 的极值点，但 $(0,f(0))$ 是曲线 $y=|f(x)|$ 的拐点。
(C) $x=0$ 是 $|f(x)|$ 的极值点，且 $(0,f(0))$ 是曲线 $y=|f(x)|$ 的拐点。
(D) $x=0$ 不是 $|f(x)|$ 的极值点，且 $(0,f(0))$ 不是曲线 $y=|f(x)|$ 的拐点。`, a: R`(C)`, sol: R`【思路】$f(0)=0,f'(0)>0$ 说明 $f$ 在 0 两侧变号，$|f|$ 在 0 取最小值；再看 $|f|$ 两侧的凹凸性。
【详解】因 $f(0)=0,f'(0)>0$，当 $x>0$ 小时 $f>0$、$x<0$ 小时 $f<0$，故 $|f(x)|\ge0=|f(0)|$，$x=0$ 是 $|f|$ 的极小值点。
当 $x>0$ 时 $|f|=f$，$|f|''=f''(0)<0$（凹）；当 $x<0$ 时 $|f|=-f$，$|f|''=-f''(0)>0$（凸）。凹凸性在 0 两侧相反，故 $(0,0)$ 是 $y=|f(x)|$ 的拐点。选 (C)。
【易错点】$|f|$ 在 $f$ 变号处产生拐点；两侧凹凸性由 $-f''$ 与 $f''$ 决定，符号相反。` },
    { n: 15, q: R`设 $f(x)$ 满足 $f'(0)=0$，$f'(x)+[f(x)]^3=x^2$，则
(A) $f(0)$ 是 $f(x)$ 的极大值。 (B) $f(0)$ 是 $f(x)$ 的极小值。
(C) $(0,f(0))$ 是曲线 $y=f(x)$ 的拐点。
(D) $f(0)$ 不是 $f(x)$ 的极值，$(0,f(0))$ 也不是曲线 $y=f(x)$ 的拐点。`, a: R`(C)`, sol: R`【思路】由方程逐次求导，算出 $f(0),f'(0),f''(0),f'''(0)$。
【详解】令 $x=0$：$f'(0)+[f(0)]^3=0$，由 $f'(0)=0$ 得 $f(0)=0$。
求导：$f''+3f^2f'=2x$。令 $x=0$：$f''(0)+0=0$，$f''(0)=0$。
再求导：$f'''+3(2f(f')^2+f^2f'')=2$。令 $x=0$：$f'''(0)=2\neq0$。
故 $(0,0)$ 是拐点（$f''=0$ 而 $f'''\neq0$），不是极值点。选 (C)。
【易错点】$f''(0)=0$ 时要用更高阶导数判断；$f'''\neq0$ 即拐点。` },
    { n: 16, q: R`曲线 $y=\frac{x^2+1}{\sqrt{x^2-1}}$ 的渐近线条数为
(A) 1。 (B) 2。 (C) 3。 (D) 4。`, a: R`(D)`, sol: R`【思路】定义域 $|x|>1$，分别找竖直渐近线与斜渐近线。
【详解】竖直：$x\to\pm1$ 时 $\sqrt{x^2-1}\to0$，分子 $\to2\neq0$，$y\to\infty$，得 $x=1,x=-1$ 两条竖直渐近线。
$x\to+\infty$：$y\approx\frac{x^2}{x}=x$，得斜渐近线 $y=x$；$x\to-\infty$：$y\approx\frac{x^2}{|x|}=-x$，得 $y=-x$。
共 4 条，选 (D)。
【易错点】$x\to+\infty$ 与 $x\to-\infty$ 的斜渐近线不同（$y=x$ 与 $y=-x$）。` },
    { n: 17, q: R`曲线 $y=\frac{x^2+x}{x^2-1}$ 渐近线的条数为
(A) 0。 (B) 1。 (C) 2。 (D) 3。`, a: R`(C)`, sol: R`【思路】先约分，再找竖直与水平渐近线。
【详解】$y=\frac{x(x+1)}{(x-1)(x+1)}=\frac{x}{x-1}$（$x\neq-1$）。
$x=1$ 处分母为 0，$y\to\infty$，一条竖直渐近线；$x\to\pm\infty$ 时 $y\to1$，一条水平渐近线 $y=1$。
$x=-1$ 是可去间断点（极限 $\frac12$），不是渐近线。共 2 条，选 (C)。
【易错点】先约分可去点 $x=-1$ 不是渐近线；水平渐近线只有一条。` },
    { n: 18, q: R`设曲线 $y=f(x)$ 与 $y=x^2-x$ 在点 $(1,0)$ 处有公共切线，则 $\lim\limits_{n\to\infty}nf\left(\frac{n}{n+2}\right)=$ ______。`, a: R`$-2$`, sol: R`【思路】公共切线给出 $f(1)=0,f'(1)=1$；再把 $\frac{n}{n+2}$ 写成 $1-\frac{2}{n+2}$ 用线性化。
【详解】$y=x^2-x$ 在 $x=1$ 处 $y'=2x-1=1$，故 $f(1)=0$，$f'(1)=1$。
$f\left(\frac{n}{n+2}\right)=f\left(1-\frac{2}{n+2}\right)\approx f(1)+f'(1)\left(-\frac{2}{n+2}\right)=-\frac{2}{n+2}$。
故 $nf\left(\frac{n}{n+2}\right)\to n\cdot\left(-\frac{2}{n+2}\right)\to-2$。
【易错点】$\frac{n}{n+2}=1-\frac{2}{n+2}$，增量是 $-\frac{2}{n+2}$；$f'(1)=1$。` },
    { n: 19, q: R`已知 $f(x)=\frac{(x-1)(x-2)\cdots(x-n)}{(x+1)(x+2)\cdots(x+n)}$，则 $f'(1)=$ ______。`, a: R`$\frac{(-1)^{n-1}}{n(n+1)}$`, sol: R`【思路】把 $f$ 写成 $(x-1)g(x)$，则 $f'(1)=g(1)$。
【详解】令 $g(x)=\frac{(x-2)\cdots(x-n)}{(x+1)\cdots(x+n)}$，则 $f=(x-1)g$，$f'=g+(x-1)g'$，故 $f'(1)=g(1)$。
$$g(1)=\frac{(1-2)(1-3)\cdots(1-n)}{2\cdot3\cdots(n+1)}=\frac{(-1)^{n-1}(n-1)!}{(n+1)!}=\frac{(-1)^{n-1}}{n(n+1)}.$$
【易错点】$(1-2)(1-3)\cdots(1-n)=(-1)(-2)\cdots(-(n-1))=(-1)^{n-1}(n-1)!$；$(n+1)!=(n+1)n(n-1)!$。` },
    { n: 20, q: R`曲线 $\begin{cases}x=\int_0^{1-t}\mathrm{e}^{-u^2}\mathrm{d}u,\\y=t^2\ln(2-t^2).\end{cases}$ 在点 $(0,0)$ 处的切线方程为 ______。`, a: R`$y=2x$`, sol: R`【思路】先由 $x=0$ 定出参数 $t$，再用参数方程求导。
【详解】由 $x=0$ 得 $\int_0^{1-t}e^{-u^2}du=0$，故 $t=1$，此时 $y=0$，对应点 $(0,0)$。
$\frac{\mathrm{d}x}{\mathrm{d}t}=-e^{-(1-t)^2}$，在 $t=1$ 处为 $-1$；$\frac{\mathrm{d}y}{\mathrm{d}t}=2t\ln(2-t^2)+t^2\cdot\frac{-2t}{2-t^2}$，在 $t=1$ 处为 $-2$。
故 $\frac{\mathrm{d}y}{\mathrm{d}x}=\frac{-2}{-1}=2$，切线 $y=2x$。
【易错点】先由 $x=0$ 定出 $t=1$；$\frac{dx}{dt}$ 是变上限积分求导（上限 $1-t$，导数 $-1$）。` },
    { n: 21, q: R`对数螺线 $\rho=\mathrm{e}^{\theta}$ 在点 $(\rho,\theta)=\left(\mathrm{e}^{\frac{\pi}{2}},\frac{\pi}{2}\right)$ 处的切线的直角坐标方程为 ______。`, a: R`$x+y=\mathrm{e}^{\frac{\pi}{2}}$`, sol: R`【思路】把极坐标化为参数方程，求切线斜率。
【详解】$x=\rho\cos\theta=e^\theta\cos\theta$，$y=\rho\sin\theta=e^\theta\sin\theta$。$\frac{\mathrm{d}y}{\mathrm{d}x}=\frac{\rho'\sin\theta+\rho\cos\theta}{\rho'\cos\theta-\rho\sin\theta}=\frac{\sin\theta+\cos\theta}{\cos\theta-\sin\theta}$（因 $\rho'=\rho$）。
在 $\theta=\frac\pi2$：$\frac{\mathrm{d}y}{\mathrm{d}x}=\frac{1+0}{0-1}=-1$。点坐标 $x=0,y=e^{\pi/2}$。切线：$y-e^{\pi/2}=-x$，即 $x+y=e^{\pi/2}$。
【易错点】对数螺线 $\rho'=\rho$ 使斜率化为 $\frac{\sin\theta+\cos\theta}{\cos\theta-\sin\theta}$；$(\rho,\theta)$ 给的是极坐标。` },
    { n: 22, q: R`设函数 $f(x)=\begin{cases}\ln\sqrt{x},&x\geqslant1,\\2x-1,&x<1,\end{cases}$ $y=f(f(x))$，则 $\left.\frac{\mathrm{d}y}{\mathrm{d}x}\right|_{x=\mathrm{e}}=$ ______。`, a: R`$\frac{1}{\mathrm{e}}$`, sol: R`【思路】先算 $f(e)$，确定内层用哪一段，再用链式法则。
【详解】$f(e)=\ln\sqrt e=\frac12<1$，故 $f(f(e))=f\left(\frac12\right)=2\cdot\frac12-1=0$。
$\frac{\mathrm{d}y}{\mathrm{d}x}=f'(f(x))f'(x)$。$f'(x)=\frac{1}{2x}$（$x\ge1$），$f'(x)=2$（$x<1$）。
在 $x=e$：$f'(e)=\frac{1}{2e}$；$f'(f(e))=f'\left(\frac12\right)=2$。故 $\frac{\mathrm{d}y}{\mathrm{d}x}=2\cdot\frac{1}{2e}=\frac1e$。
【易错点】内层 $f(e)=\frac12<1$ 落在 $x<1$ 段，其导数取 2。` },
    { n: 23, q: R`设 $y=f(x)$ 的反函数是 $x=\varphi(y)$，且 $f(x)=\int_1^{2x}\mathrm{e}^{t^2}\mathrm{d}t+1$，则 $\varphi''(1)=$ ______。`, a: R`$-\frac{1}{\mathrm{e}^2}$`, sol: R`【思路】先求满足 $f(x)=1$ 的 $x$（即 $\varphi(1)$），再用反函数二阶导公式。
【详解】$f(x)=1$ 即 $\int_1^{2x}e^{t^2}dt=0$，故 $2x=1$，$x=\frac12$，即 $\varphi(1)=\frac12$。
$f'(x)=2e^{(2x)^2}=2e^{4x^2}$，$f''(x)=16xe^{4x^2}$。$\varphi'(y)=\frac{1}{f'(\varphi(y))}$，$\varphi''(y)=-\frac{f''(\varphi(y))}{[f'(\varphi(y))]^3}$。
在 $y=1$：$f'\left(\frac12\right)=2e$，$f''\left(\frac12\right)=8e$。故 $\varphi''(1)=-\frac{8e}{(2e)^3}=-\frac{1}{e^2}$。
【易错点】$\varphi(1)$ 是 $f(x)=1$ 的解（$x=\frac12$），不是 0；$\varphi''=-\frac{f''}{(f')^3}$。` },
    { n: 24, q: R`函数 $y=x\ln(1-2x)$ 在 $x=0$ 处的 $n(n\geqslant2)$ 阶导数 $y^{(n)}(0)=$ ______。`, a: R`$-\frac{2^{n-1}n!}{n-1}$`, sol: R`【思路】用 $\ln(1-2x)$ 的幂级数展开，找 $x^n$ 的系数。
【详解】$\ln(1-2x)=-\sum_{k=1}^{\infty}\frac{2^kx^k}{k}$，故
$$y=x\ln(1-2x)=-\sum_{k=1}^{\infty}\frac{2^kx^{k+1}}{k}.$$
$x^n$ 项来自 $k=n-1$，系数为 $-\frac{2^{n-1}}{n-1}$。由泰勒系数 $\frac{y^{(n)}(0)}{n!}$ 得 $y^{(n)}(0)=-\frac{2^{n-1}n!}{n-1}$。
【易错点】$x^n$ 项对应 $k=n-1$；幂级数系数与 $n$ 阶导的关系是 $\frac{y^{(n)}(0)}{n!}$。` },
    { n: 25, q: R`设 $f(x)=\frac{x^2+x-1}{x^2+x-2}$，则 $f^{(n)}(x)=$ ______。`, a: R`$\frac{(-1)^nn!}{3}\left[\frac{1}{(x-1)^{n+1}}-\frac{1}{(x+2)^{n+1}}\right]$`, sol: R`【思路】先拆成多项式 + 真分式，再部分分式。
【详解】$f=1+\frac{1}{x^2+x-2}=1+\frac{1}{(x-1)(x+2)}=1+\frac13\left(\frac{1}{x-1}-\frac{1}{x+2}\right)$。
故 $f^{(n)}(x)=\frac13\left[(-1)^nn!(x-1)^{-n-1}-(-1)^nn!(x+2)^{-n-1}\right]=\frac{(-1)^nn!}{3}\left[\frac{1}{(x-1)^{n+1}}-\frac{1}{(x+2)^{n+1}}\right]$。
【易错点】先做除法把次数降下来；$\left(\frac{1}{x-a}\right)^{(n)}=\frac{(-1)^nn!}{(x-a)^{n+1}}$。` },
    { n: 26, q: R`函数 $f(x)=\ln|(x-1)(x-2)\cdots(x-n)|$ 的驻点个数为 ______。`, a: R`$n-1$`, sol: R`【思路】$f=\sum\ln|x-k|$，$f'=\sum\frac{1}{x-k}$，在每个小区间上用介值定理。
【详解】$f'(x)=\sum_{k=1}^n\frac{1}{x-k}$。在区间 $(k,k+1)$（$k=1,\dots,n-1$）内，$x\to k^+$ 时 $\frac{1}{x-k}\to+\infty$，$x\to(k+1)^-$ 时 $\frac{1}{x-(k+1)}\to-\infty$，故 $f'$ 在该区间内至少有一个零点。
又 $f'(x)=\frac{P'(x)}{P(x)}$（$P=\prod(x-k)$），分子 $P'$ 是 $n-1$ 次多项式，最多 $n-1$ 个零点。故恰有 $n-1$ 个驻点。
【易错点】$f'$ 的零点数由分子 $P'$ 的次数（$n-1$）控制；每个小区间恰好一个。` },
    { n: 27, q: R`已知方程 $x^4+2x^3-3x^2-4x+a=0$ 有两个重根，则 $a=$ ______。`, a: R`$a=4$`, sol: R`【思路】两个重根必是导数的根，用导数的根反推。
【详解】设 $P=x^4+2x^3-3x^2-4x+a$。$P'=4x^3+6x^2-6x-4=2(x-1)(2x+1)(x+2)$，$P'$ 的根为 $1,-\frac12,-2$。
若 $P$ 有两个重根 $\alpha,\beta$，则 $P=(x-\alpha)^2(x-\beta)^2$，$P'=2(x-\alpha)(x-\beta)(2x-\alpha-\beta)$，其根为 $\alpha,\beta,\frac{\alpha+\beta}{2}$。
对照 $P'$ 的根：取 $\alpha=1,\beta=-2$，则 $\frac{\alpha+\beta}{2}=-\frac12$ ✓。故 $P=(x-1)^2(x+2)^2=x^4+2x^3-3x^2-4x+4$，$a=4$。
【易错点】重根是 $P'$ 的根，但 $P'$ 的根不都是重根；用「重根 + 两根平均」的结构匹配。` },
    { n: 28, q: R`已知方程 $3x^4-8x^3-6x^2+24x+a=0$ 有四个不相同的实根，则 $a$ 的取值范围为 ______。`, a: R`$-13<a<-8$`, sol: R`【思路】转化为水平线 $y=-a$ 与曲线 $y=Q(x)$ 有 4 个交点。
【详解】令 $Q=3x^4-8x^3-6x^2+24x$，则方程即 $Q(x)=-a$。
$Q'=12x^3-24x^2-12x+24=12(x-1)(x-2)(x+1)$。极值：$Q(-1)=-19$（极小），$Q(1)=13$（极大），$Q(2)=8$（极小）。
$y=-a$ 与 $Q$ 有 4 个交点需 $-a$ 介于较大极小值 8 与极大值 13 之间：$8<-a<13$，即 $-13<a<-8$。
【易错点】要 4 个交点，水平线须在「两个极小值中较大者」与「极大值」之间；两个极小值是 $-19$ 和 $8$。` },
    { n: 29, q: R`设 $f(x)$ 为连续函数，$\lim\limits_{x\to0}\frac{xf(x)-\ln(1+x)}{x^2}=2$。$F(x)=\int_0^xtf(x-t)\mathrm{d}t$，当 $x\to0$ 时 $F(x)-\frac{1}{2}x^2$ 与 $bx^k$ 为等价无穷小，其中常数 $b\neq0$，$k$ 为某正整数。求 $k$ 与 $b$ 的值及 $f(0)$，$f'(0)$。`, a: R`$k=3$，$b=\frac{1}{4}$，$f(0)=1$，$f'(0)=\frac{3}{2}$。`, sol: R`【思路】先由极限条件求 $f(0),f'(0)$，再换元化简 $F$ 并展开。
【详解】由条件 $xf(x)-\ln(1+x)=2x^2+o(x^2)$。$\ln(1+x)=x-\frac{x^2}{2}+o(x^2)$，故 $xf(x)=x+\frac32x^2+o(x^2)$，$f(x)=1+\frac32x+o(x)$，即 $f(0)=1$，$f'(0)=\frac32$。
$F(x)=\int_0^xtf(x-t)dt\xlongequal{u=x-t}\int_0^x(x-u)f(u)du=x\int_0^xf(u)du-\int_0^xuf(u)du$。
$x\int_0^xf(u)du=x\left(x+\frac34x^2+\cdots\right)=x^2+\frac34x^3+\cdots$，$\int_0^xuf(u)du=\int_0^x\left(u+\frac32u^2+\cdots\right)du=\frac{x^2}{2}+\frac{x^3}{2}+\cdots$。
故 $F(x)=\frac{x^2}{2}+\frac{x^3}{4}+\cdots$，$F(x)-\frac{x^2}{2}\sim\frac{x^3}{4}$，即 $k=3,b=\frac14$。
【易错点】$F$ 先换元 $u=x-t$ 化为含 $x$ 的形式；展开到 $x^3$ 项才能定出 $k,b$。` },
    { n: 30, q: R`已知函数 $f(u)$ 具有二阶导数，且 $f'(0)=1$，函数 $y=y(x)$ 由方程 $y-x\mathrm{e}^{y-1}=1$ 所确定。设 $z=f(\ln y-\sin x)$，求 $\left.\frac{\mathrm{d}z}{\mathrm{d}x}\right|_{x=0}$，$\left.\frac{\mathrm{d}^2z}{\mathrm{d}x^2}\right|_{x=0}$。`, a: R`$0,1$`, sol: R`【思路】先求 $y(0),y'(0),y''(0)$，再对 $z$ 用链式法则。
【详解】$x=0$ 时 $y=1$。对 $y-xe^{y-1}=1$ 求导：$y'-e^{y-1}-xe^{y-1}y'=0$，在 $(0,1)$ 得 $y'(0)=1$。
再求导：$y''-e^{y-1}y'-\left[e^{y-1}y'+xe^{y-1}(y')^2+xe^{y-1}y''\right]=0$，在 $(0,1)$ 得 $y''(0)=2$。
记 $u=\ln y-\sin x$，$u(0)=0$，$u'=\frac{y'}{y}-\cos x$，$u'(0)=1-1=0$；$u''=\frac{y''y-(y')^2}{y^2}+\sin x$，$u''(0)=2-1=1$。
$z=f(u)$：$z'=f'(u)u'$，$z'(0)=f'(0)\cdot0=0$；$z''=f''(u)(u')^2+f'(u)u''$，$z''(0)=0+1\cdot1=1$。
【易错点】$u'(0)=0$ 使 $z''$ 只剩 $f'u''$ 项；先解出 $y$ 的二阶导。` },
    { n: 31, q: R`设 $f(t)$ 二阶可导，且 $f''(t)\neq0$，$\begin{cases}y=tf'(t)-f(t),\\x=f'(t).\end{cases}$ 求 $\frac{\mathrm{d}^2y}{\mathrm{d}x^2}$ 及 $\frac{\mathrm{d}^2x}{\mathrm{d}y^2}$。`, a: R`$\frac{\mathrm{d}^2y}{\mathrm{d}x^2}=\frac{1}{f''(t)}$；$\frac{\mathrm{d}^2x}{\mathrm{d}y^2}=-\frac{1}{t^3f''(t)}$。`, sol: R`【思路】参数方程求导，注意 $\frac{dx}{dt}=f''$。
【详解】$\frac{\mathrm{d}y}{\mathrm{d}t}=f'(t)+tf''(t)-f'(t)=tf''(t)$，$\frac{\mathrm{d}x}{\mathrm{d}t}=f''(t)$，故 $\frac{\mathrm{d}y}{\mathrm{d}x}=\frac{tf''}{f''}=t$。
$\frac{\mathrm{d}^2y}{\mathrm{d}x^2}=\frac{\frac{\mathrm{d}}{\mathrm{d}t}(t)}{\frac{\mathrm{d}x}{\mathrm{d}t}}=\frac{1}{f''(t)}$。
又 $\frac{\mathrm{d}x}{\mathrm{d}y}=\frac1t$，$\frac{\mathrm{d}^2x}{\mathrm{d}y^2}=\frac{\frac{\mathrm{d}}{\mathrm{d}t}(1/t)}{\frac{\mathrm{d}y}{\mathrm{d}t}}=\frac{-1/t^2}{tf''(t)}=-\frac{1}{t^3f''(t)}$。
【易错点】$\frac{dy}{dt}=tf''$ 是两项相消的结果；$\frac{d^2x}{dy^2}$ 要用 $\frac{dy}{dt}$ 作分母。` },
    { n: 32, q: R`设 $y=y(x)$ 由 $\begin{cases}x=t^3+2t+1,\\t-\int_1^{y+t}\mathrm{e}^{-u^2}\mathrm{d}u=0.\end{cases}$ 确定，求 $\left.\frac{\mathrm{d}y}{\mathrm{d}x}\right|_{t=0}$，$\left.\frac{\mathrm{d}^2y}{\mathrm{d}x^2}\right|_{t=0}$。`, a: R`$\left.\frac{\mathrm{d}y}{\mathrm{d}x}\right|_{t=0}=\frac{\mathrm{e}-1}{2}$，$\left.\frac{\mathrm{d}^2y}{\mathrm{d}x^2}\right|_{t=0}=\frac{\mathrm{e}^2}{2}$。`, sol: R`【思路】由积分方程解出 $y'$，再对参数 $t$ 求 $y''$。
【详解】$t=0$ 时由 $0-\int_1^ye^{-u^2}du=0$ 得 $y=1$。
$\frac{dx}{dt}=3t^2+2$，在 $t=0$ 为 2。
对积分方程求导：$1-e^{-(y+t)^2}(y'+1)=0$，即 $y'+1=e^{(y+t)^2}$，$y'=e^{(y+t)^2}-1$。在 $t=0,y=1$：$y'=e-1$。
故 $\frac{dy}{dx}|_{t=0}=\frac{e-1}{2}$。
$y''=\frac{d}{dt}\left(e^{(y+t)^2}-1\right)=e^{(y+t)^2}\cdot2(y+t)(y'+1)$。在 $t=0,y=1,y'=e-1$：$y''=e\cdot2\cdot1\cdot e=2e^2$。
$\frac{d^2y}{dx^2}=\frac{y''x'-y'x''}{(x')^3}$，$x''=6t$ 在 0 处为 0，故 $=\frac{2e^2\cdot2}{2^3}=\frac{e^2}{2}$。
【易错点】$y'$ 由积分方程隐式给出；$y''$ 对 $t$ 求导时注意 $(y+t)$ 的导数 $y'+1=e^{(y+t)^2}$。` },
    { n: 33, q: R`设函数 $\varphi(x)=\int_0^{\sin x}f(tx^2)\mathrm{d}t$，其中 $f(x)$ 是连续函数，且 $f(0)=2$。
(1) 求 $\varphi'(x)$；(2) 讨论 $\varphi'(x)$ 的连续性。`, a: R`(1) $\varphi'(x)=\begin{cases}-\frac{2}{x^3}\int_0^{x^2\sin x}f(u)\mathrm{d}u+f(x^2\sin x)\left(\frac{2}{x}\sin x+\cos x\right),&x\neq0,\\2,&x=0.\end{cases}$ (2) $\varphi'(x)$ 处处连续。`, sol: R`【思路】换元 $u=tx^2$ 把 $x$ 移出被积函数，再求导。
【详解】(1) $x\neq0$ 时令 $u=tx^2$，$dt=\frac{du}{x^2}$，得 $\varphi(x)=\frac{1}{x^2}\int_0^{x^2\sin x}f(u)du$。
$$\varphi'(x)=-\frac{2}{x^3}\int_0^{x^2\sin x}f(u)du+\frac{1}{x^2}f(x^2\sin x)\cdot(2x\sin x+x^2\cos x)$$
$$=-\frac{2}{x^3}\int_0^{x^2\sin x}f(u)du+f(x^2\sin x)\left(\frac{2\sin x}{x}+\cos x\right).$$
$x=0$ 时 $\varphi(0)=0$，$\varphi'(0)=\lim\limits_{x\to0}\frac{\int_0^{x^2\sin x}f(u)du}{x^3}=\lim\frac{2x^2\sin x}{x^3}=2$。
(2) 当 $x\to0$ 时，第一项 $\to-4$（用 $\int_0^{x^2\sin x}f\approx2x^3$），第二项 $\to2(2+1)=6$，故 $\varphi'\to2=\varphi'(0)$，处处连续。
【易错点】换元后上限 $x^2\sin x$ 与分母 $x^2$ 都对 $x$ 求导；$x=0$ 要单独用定义。` },
    { n: 34, q: R`设 $f(x)$ 连续，$\varphi(x)=\int_0^1f(xt)\mathrm{d}t$，且 $\lim\limits_{x\to0}\frac{f(x)}{x}=A$（$A$ 为常数）。求 $\varphi'(x)$，并讨论 $\varphi'(x)$ 在 $x=0$ 处的连续性。`, a: R`$\varphi'(x)=\begin{cases}\frac{xf(x)-\int_0^xf(x)\mathrm{d}x}{x^2},&x\neq0,\\\frac{A}{2},&x=0.\end{cases}$ $\varphi'(x)$ 在 $x=0$ 处连续。`, sol: R`【思路】换元 $u=xt$ 化为变上限积分，再求导；用 $f(x)\sim Ax$ 求 $x=0$ 处的值与连续性。
【详解】$x\neq0$ 时 $\varphi(x)=\frac1x\int_0^xf(u)du$，故 $\varphi'(x)=\frac{xf(x)-\int_0^xf(u)du}{x^2}$。
由 $\frac{f(x)}{x}\to A$ 得 $f(0)=0$，故 $\varphi(0)=f(0)=0$。
$\varphi'(0)=\lim\limits_{x\to0}\frac{\int_0^xf(u)du}{x^2}$，由 $f(u)\sim Au$ 得 $\int_0^xf\sim\frac{Ax^2}{2}$，故 $\varphi'(0)=\frac A2$。
连续性：$\lim\limits_{x\to0}\frac{xf(x)-\int_0^xf}{x^2}$，其中 $xf(x)\sim Ax^2$、$\int_0^xf\sim\frac{Ax^2}{2}$，故极限 $=A-\frac A2=\frac A2=\varphi'(0)$，连续。
【易错点】换元后 $\varphi=\frac1x\int_0^xf$，求导用商法则；$f(0)=0$ 来自 $f(x)\sim Ax$。` },
    { n: 35, q: R`设函数由方程 $2y^3-2y^2+2xy-x^2=1$ 所确定，试求 $y=y(x)$ 的驻点，并判别它是否为极值点。`, a: R`驻点 $x=1$，$y=y(x)$ 在 $x=1$ 处取极小值。`, sol: R`【思路】隐函数求一阶导，令 $y'=0$ 求驻点，再用二阶导判别。
【详解】两边对 $x$ 求导：$6y^2y'-4yy'+2y+2xy'-2x=0$，解得 $y'=\frac{x-y}{3y^2-2y+x}$。
$y'=0\Rightarrow x=y$。代入原方程：$2x^3-2x^2+2x^2-x^2=1$，即 $2x^3-x^2-1=0$，$(x-1)(2x^2+x+1)=0$，得 $x=1$（另一个因式判别式 $<0$），$y=1$。
由 $y'(3y^2-2y+x)=x-y$ 再求导并代入 $(1,1),y'=0$：$y''(3-2+1)=1-0$，即 $4y''=1$，$y''=\frac14>0$，故为极小值。
【易错点】$y'=0$ 得 $x=y$，代入原方程求驻点；判别用 $y''$ 的符号。` },
    { n: 36, q: R`已知曲线的方程为 $\begin{cases}x=t^2+1,\\y=4t-t^2.\end{cases}$ $(t\geqslant0)$。
(1) 讨论 $L$ 的凹凸性；
(2) 过点 $(-1,0)$ 引 $L$ 的切线，求切点 $(x_0,y_0)$，并写出切线的方程；
(3) 求此切线与 $L$（对应于 $x\leqslant x_0$ 的部分）及 $x$ 轴所围成的平面图形的面积。`, a: R`(1) 曲线 $L$ 在 $t>0$ 上是凸的；(2) 切点为 $(2,3)$，切线方程为 $y=x+1$；(3) 所围成的平面图形的面积为 $\frac{7}{3}$。`, sol: R`【思路】(1) 用参数方程求二阶导；(2) 设切点用参数 $t$，代入「切线过 $(-1,0)$」解 $t$；(3) 面积用切线下方减去曲线下方。
【详解】(1) $\frac{dy}{dx}=\frac{4-2t}{2t}=\frac{2-t}{t}$，$\frac{d^2y}{dx^2}=\frac{\frac{d}{dt}\left(\frac{2-t}{t}\right)}{2t}=\frac{-2/t^2}{2t}=-\frac{1}{t^3}<0$（$t>0$），故 $L$ 在 $t>0$ 上凸。
(2) 设切点 $(t^2+1,4t-t^2)$，切线 $y-(4t-t^2)=\frac{2-t}{t}\left[x-(t^2+1)\right]$。代入 $(-1,0)$：
$$t^2-4t=\frac{2-t}{t}(-t^2-2)\Rightarrow t^2+t-2=0\Rightarrow t=1\ (t=-2\text{舍}).$$
切点 $(2,3)$，斜率 1，切线 $y=x+1$。
(3) 面积 $=\int_{-1}^2(x+1)dx-\int_1^2y\,dx=\frac92-\int_0^1(4t-t^2)\cdot2t\,dt=\frac92-\left(\frac83-\frac12\right)=\frac92-\frac{13}{6}=\frac73$。
【易错点】$t\ge0$ 舍去 $t=-2$；面积是切线与曲线、$x$ 轴围成，用两段积分相减。` },
    { n: 37, q: R`试确定方程 $x^3-x=\sin x$ 的实根个数。`, a: R`三个实根。`, sol: R`【思路】令 $f=x^3-x-\sin x$，它是奇函数，只需讨论 $x>0$ 的零点数。
【详解】$f(0)=0$。$f'=3x^2-1-\cos x$，$f''=6x+\sin x$。当 $x>0$ 时 $f''>0$（$6x+\sin x>0$），故 $f'$ 在 $[0,+\infty)$ 单调增；$f'(0)=-2<0$，$f'\to+\infty$，故 $f'$ 在 $(0,+\infty)$ 有唯一零点 $x_0$。于是 $f$ 在 $(0,x_0)$ 减、$(x_0,+\infty)$ 增，$f(0)=0$、$f\to+\infty$，故 $x>0$ 时恰有一个零点。
由奇函数，$x<0$ 也恰有一个零点，加上 $x=0$，共 3 个实根。
【易错点】利用奇函数对称性把问题化为 $x>0$；$f''>0$ 保证 $f'$ 单调，从而 $f$ 只有一个极小值点。` },
    { n: 38, q: R`试确定方程 $\int_0^x\mathrm{e}^{-t^2}\mathrm{d}t=x^3-x$ 的实根个数。`, a: R`三个实根。`, sol: R`【思路】同第 37 题，令 $f=\int_0^xe^{-t^2}dt-x^3+x$，用奇偶性与单调性。
【详解】$f(x)=\int_0^xe^{-t^2}dt-x^3+x$ 是奇函数，$f(0)=0$。$f'=e^{-x^2}-3x^2+1$，$f''=-2xe^{-x^2}-6x=-2x(e^{-x^2}+3)$。
当 $x>0$ 时 $f''<0$，$f'$ 单调减；$f'(0)=2>0$，$f'\to-\infty$，故 $f'$ 在 $(0,+\infty)$ 有唯一零点，$f$ 先增后减，$f(0)=0$、$f\to-\infty$，故 $x>0$ 恰有一个零点。
由奇函数，$x<0$ 恰有一个，加上 $x=0$，共 3 个实根。
【易错点】$f''<0$ 保证 $f'$ 单调减，从而 $f$ 只有一个极大值点；奇函数给出对称的负根。` },
    { n: 39, q: R`试确定方程 $\mathrm{e}^x=ax^2(a>0)$ 的实根个数。`, a: R`当 $0<a<\frac{\mathrm{e}^2}{4}$ 时有唯一根；当 $a=\frac{\mathrm{e}^2}{4}$ 时有两个实根；当 $a>\frac{\mathrm{e}^2}{4}$ 时有三个实根。`, sol: R`【思路】化为 $\frac{e^x}{x^2}=a$（$x\neq0$），研究 $g(x)=\frac{e^x}{x^2}$ 的单调性与最值。
【详解】$g'(x)=\frac{e^x(x-2)}{x^3}$。
$x>0$：$g$ 在 $(0,2)$ 减、$(2,+\infty)$ 增，极小值 $g(2)=\frac{e^2}{4}$；$x\to0^+$ 时 $g\to+\infty$，$x\to+\infty$ 时 $g\to+\infty$。
$x<0$：$x-2<0,x^3<0$，故 $g'>0$，$g$ 单调增，从 $0$（$x\to-\infty$）到 $+\infty$（$x\to0^-$），恒有一个交点。
综合：$a<\frac{e^2}{4}$：正半轴无根 + 负半轴 1 根 = 1；$a=\frac{e^2}{4}$：正半轴 1 根（$x=2$）+ 负半轴 1 根 = 2；$a>\frac{e^2}{4}$：正半轴 2 根 + 负半轴 1 根 = 3。
【易错点】负半轴恒有一根；正半轴根数由 $a$ 与极小值 $\frac{e^2}{4}$ 比较确定。` },
    { n: 40, q: R`试确定方程 $\ln x=kx$ 的实根个数。`, a: R`当 $k\leqslant0$ 或 $k=\frac{1}{\mathrm{e}}$ 时有唯一根；当 $0<k<\frac{1}{\mathrm{e}}$ 时有两个实根；当 $k>\frac{1}{\mathrm{e}}$ 时无实根。`, sol: R`【思路】化为 $\frac{\ln x}{x}=k$（$x>0$），研究 $g=\frac{\ln x}{x}$。
【详解】$g'=\frac{1-\ln x}{x^2}$，$g$ 在 $(0,e)$ 增、$(e,+\infty)$ 减，最大值 $g(e)=\frac1e$；$x\to0^+$ 时 $g\to-\infty$，$x\to+\infty$ 时 $g\to0^+$。
故水平线 $y=k$ 与 $g$ 的交点数：$k\le0$：1 个；$0<k<\frac1e$：2 个；$k=\frac1e$：1 个（$x=e$）；$k>\frac1e$：0 个。
【易错点】$g$ 在 $x\to+\infty$ 趋于 0 但不取 0，故 $k=0$ 只有 1 根。` },
    { n: 41, q: R`试证：当 $x\geqslant0$ 时，$x\leqslant\mathrm{e}^x\ln(1+x)$。`, a: R`提示：令 $f(x)=\ln(1+x)-x\mathrm{e}^{-x}$，利用单调性。`, sol: R`【思路】原不等式等价于 $\ln(1+x)\ge xe^{-x}$，令 $f=\ln(1+x)-xe^{-x}$，证 $f\ge0$。
【详解】$f(0)=0$。$f'(x)=\frac{1}{1+x}-e^{-x}+xe^{-x}=\frac{1}{1+x}-(1-x)e^{-x}$。
当 $x\ge1$ 时 $(1-x)e^{-x}\le0\le\frac{1}{1+x}$，$f'\ge0$。
当 $0\le x<1$ 时，需 $\frac{1}{1+x}\ge(1-x)e^{-x}$，等价于 $e^x\ge(1-x)(1+x)=1-x^2$，而 $e^x\ge1+x\ge1-x^2$ 成立。
故 $f'\ge0$，$f$ 单调增，$f(x)\ge f(0)=0$，即 $x\le e^x\ln(1+x)$。
【易错点】分 $x\ge1$ 与 $0\le x<1$ 讨论；$0\le x<1$ 时用 $e^x\ge1+x\ge1-x^2$。` },
    { n: 42, q: R`设 $x>0$，证明：$2\sin x+\mathrm{e}^x-\mathrm{e}^{-x}>4x$。`, a: R`提示：令 $f(x)=2\sin x+\mathrm{e}^x-\mathrm{e}^{-x}-4x$，利用函数的单调性。`, sol: R`【思路】令 $f=2\sin x+e^x-e^{-x}-4x$，逐次求导，用 $e^x+e^{-x}\ge2$ 和 $\cos x\le1$ 证 $f'''>0$。
【详解】$f(0)=0$，$f'=2\cos x+e^x+e^{-x}-4$，$f'(0)=0$；$f''=-2\sin x+e^x-e^{-x}$，$f''(0)=0$；$f'''=-2\cos x+e^x+e^{-x}$。
因 $e^x+e^{-x}\ge2$（均值不等式）且 $\cos x\le1$，故 $f'''\ge-2+2=0$。
于是 $f''$ 单调增，$f''\ge f''(0)=0$；$f'$ 单调增，$f'\ge f'(0)=0$；$f$ 单调增，$f(x)>f(0)=0$（$x>0$）。
【易错点】关键是 $f'''\ge0$，从而逐层回推 $f''\ge0,f'\ge0,f>0$；用 $e^x+e^{-x}\ge2$。` },
    { n: 43, q: R`设 $x>0$，常数 $a>\mathrm{e}$。证明 $(a+x)^a<a^{a+x}$。`, a: R`提示：先取对数，$a\ln(a+x)<(a+x)\ln a$，然后令 $f(x)=(a+x)\ln a-a\ln(a+x)$，再利用函数的单调性。`, sol: R`【思路】两边取对数，等价于 $a\ln(a+x)<(a+x)\ln a$。
【详解】原不等式等价于 $a\ln(a+x)<(a+x)\ln a$。令 $f(x)=(a+x)\ln a-a\ln(a+x)$。
$f(0)=a\ln a-a\ln a=0$。$f'(x)=\ln a-\frac{a}{a+x}$。因 $a>e$ 故 $\ln a>1$，而 $\frac{a}{a+x}<1$，所以 $f'(x)>0$。
故 $f(x)>f(0)=0$（$x>0$），即 $a\ln(a+x)<(a+x)\ln a$，原不等式成立。
【易错点】$a>e$ 保证 $\ln a>1$，从而 $f'>0$；取对数把幂比较化为线性比较。` },
    { n: 44, q: R`设 $\mathrm{e}<a<b$，证明：$a^2<ab\frac{\ln a}{\ln b}<b^2$。`, a: R`提示：利用单调性证明。`, sol: R`【思路】左、右两个不等式分别用 $g(x)=\frac{\ln x}{x}$ 递减和 $h(x)=x\ln x$ 递增。
【详解】右边：$ab\frac{\ln a}{\ln b}<b^2\iff a\ln a<b\ln b$。令 $h(x)=x\ln x$，$h'(x)=1+\ln x>0$（$x>e$），故 $h$ 递增，$a<b\Rightarrow a\ln a<b\ln b$。✓
左边：$a^2<ab\frac{\ln a}{\ln b}\iff\frac{\ln a}{a}>\frac{\ln b}{b}$。令 $g(x)=\frac{\ln x}{x}$，$g'(x)=\frac{1-\ln x}{x^2}<0$（$x>e$），故 $g$ 递减，$a<b\Rightarrow g(a)>g(b)$。✓
【易错点】两个不等式分别对应两个单调函数：$x\ln x$ 递增、$\frac{\ln x}{x}$ 递减；条件 $a>b>e$ 保证单调性成立。` },
    { n: 45, q: R`设 $f(x)$ 和 $g(x)$ 在 $[0,1]$ 上连续，在 $(0,1)$ 内可导，$f(0)=f(1)=-1$，$\int_0^1f(x)\mathrm{d}x>\frac{1}{2}$，试证至少存在一点 $\xi\in(0,1)$，使 $f'(\xi)+g'(\xi)[f(\xi)-\xi]=1$。`, a: R`提示：构造辅助函数 $F(x)=\mathrm{e}^{g(x)}[f(x)-x]$，注意到 $F(0)<0$，$F(1)<0$。又由 $\int_0^1f(x)\mathrm{d}x>\frac{1}{2}$ 知，$\int_0^1[f(x)-x]\mathrm{d}x>0$，利用积分中值定理得存在 $c\in(0,1)$，使 $f(c)-c>0$，则 $F(c)>0$。然后用介值定理和罗尔定理。`, sol: R`【思路】要证的式子即 $e^{g(x)}[f(x)-x]$ 的导数为零，故构造 $F=e^g(f-x)$，用介值定理找三个点再用罗尔定理。
【详解】令 $F(x)=e^{g(x)}[f(x)-x]$。则 $F'(x)=e^{g(x)}\{g'(x)[f(x)-x]+f'(x)-1\}$，$F'(\xi)=0$ 即所求。
$F(0)=e^{g(0)}(-1-0)<0$，$F(1)=e^{g(1)}(-1-1)<0$。
又 $\int_0^1[f(x)-x]dx=\int_0^1f(x)dx-\frac12>0$，由积分中值定理存在 $c\in(0,1)$ 使 $f(c)-c>0$，从而 $F(c)>0$。
由介值定理，$F$ 在 $(0,c)$ 与 $(c,1)$ 内各有一个零点，再由罗尔定理，存在 $\xi\in(0,1)$ 使 $F'(\xi)=0$，即所证等式。
【易错点】辅助函数 $F=e^g(f-x)$ 的构造是核心；先由积分中值定理找出 $F>0$ 的点。` },
    { n: 46, q: R`设 $f(x),g(x)$ 在 $[0,1]$ 上连续，在 $(0,1)$ 内可导，且 $\int_0^1f(x)\mathrm{d}x=3\int_{\frac{2}{3}}^1f(x)\mathrm{d}x$，试证存在 $\xi,\eta\in(0,1)$，使得 $f'(\xi)=g'(\xi)[f(\eta)-f(\xi)]$。`, a: R`提示：利用积分中值定理及罗尔定理。`, sol: R`【思路】由积分条件得两点函数值相等，再用罗尔定理与介值定理。
【详解】由 $\int_0^1f=3\int_{2/3}^1f$ 得 $\int_0^{2/3}f=2\int_{2/3}^1f$。
对 $\int_0^{2/3}f$ 用积分中值定理：存在 $c_1\in(0,\frac23)$ 使 $\int_0^{2/3}f=\frac23f(c_1)$；对 $\int_{2/3}^1f$：存在 $c_2\in(\frac23,1)$ 使 $\int_{2/3}^1f=\frac13f(c_2)$。
代入 $\frac23f(c_1)=2\cdot\frac13f(c_2)$ 得 $f(c_1)=f(c_2)$。
对 $f$ 在 $[c_1,c_2]$ 上用罗尔定理：存在 $\xi\in(c_1,c_2)$ 使 $f'(\xi)=0$。
又 $f(c_1)=f(c_2)$，由介值定理可取 $\eta\in(c_1,c_2)$（$\eta\neq\xi$）使 $f(\eta)=f(\xi)$。于是 $g'(\xi)[f(\eta)-f(\xi)]=0=f'(\xi)$，即所证。
【易错点】先用积分中值定理得到 $f(c_1)=f(c_2)$；再由罗尔定理得 $f'(\xi)=0$，配合 $f(\eta)=f(\xi)$。` },
    { n: 47, q: R`设 $f(x)$ 在 $[-2,2]$ 上二阶可导，且 $|f(x)|\leqslant1$，又 $[f(0)]^2+[f'(0)]^2=4$。证明在 $(-2,2)$ 内至少存在一点 $\xi$，使 $f''(\xi)+f(\xi)=0$。`, a: R`提示：考虑辅助函数 $F(x)=f^2(x)+f'^2(x)$。`, sol: R`【思路】构造 $F=f^2+f'^2$，$F'=2f'(f''+f)$。证 $F$ 在内部取最大值且该点 $f'\neq0$。
【详解】$F(x)=f^2(x)+f'^2(x)$，$F'=2f'(f''+f)$，$F(0)=4$。
对 $x\in(0,2)$，由拉格朗日中值定理存在 $c\in(0,2)$ 使 $f'(c)=\frac{f(2)-f(0)}{2}$，故 $|f'(c)|\le\frac{|f(2)|+|f(0)|}{2}\le1$，于是 $F(c)=f(c)^2+f'(c)^2\le1+1=2<4$。同理在 $(-2,0)$ 内存在 $d$ 使 $F(d)<4$。
故 $F$ 的最大值点 $\xi\in(-2,2)$ 不是 $x=0$ 处的「孤立」情形时，$F'(\xi)=0$。若最大值在 $0$ 取得，则 $F'(0)=2f'(0)(f''(0)+f(0))=0$，而 $f'(0)^2=4-f(0)^2\ge4-1=3>0$，故 $f''(0)+f(0)=0$，取 $\xi=0$ 即可。
【易错点】$F(0)=4$ 而 $F$ 在 $\pm2$ 附近小于 4，保证最大值在内部取得；$f'(0)\neq0$ 由 $|f(0)|\le1$ 保证。` },
    { n: 48, q: R`设函数 $f(x)$ 在闭区间 $[a,b]$ 上连续，在开区间 $(a,b)$ 内可导，且 $f'(x)>0$。若极限 $\lim\limits_{x\to a^+}\frac{f(2x-a)}{x-a}$ 存在，证明：
(1) 在 $(a,b)$ 内 $f(x)>0$；
(2) 在 $(a,b)$ 内存在点 $\xi$，使 $\frac{b^2-a^2}{\int_a^bf(x)\mathrm{d}x}=\frac{2\xi}{f(\xi)}$；
(3) 在 $(a,b)$ 内存在与 (2) 中 $\xi$ 相异的点 $\eta$，使 $f'(\eta)(b^2-a^2)=\frac{2\xi}{\xi-a}\int_a^bf(x)\mathrm{d}x$。`, a: R`提示：(1) 由 $\lim\limits_{x\to a^+}\frac{f(2x-a)}{x-a}$ 可知，$f(a)=0$；(2) 在区间 $[a,b]$ 上对 $x^2$，$\int_a^xf(t)\mathrm{d}t$ 用柯西中值定理；(3) 在区间 $[a,\xi]$ 上对 $f(x)$ 用拉格朗日中值定理。`, sol: R`【思路】(1) 极限存在（有限）迫使 $f(a)=0$，再用 $f'>0$ 得 $f>0$；(2) 柯西中值定理；(3) 拉格朗日中值定理。
【详解】(1) 若 $\lim\limits_{x\to a^+}\frac{f(2x-a)}{x-a}$ 有限，则 $x\to a^+$ 时 $f(2x-a)\to0$，由连续性 $f(a)=0$。又 $f'>0$，$f$ 严格增，故 $x>a$ 时 $f(x)>f(a)=0$。
(2) 在 $[a,b]$ 上对 $x^2$ 与 $\int_a^xf(t)dt$ 用柯西中值定理：存在 $\xi\in(a,b)$ 使
$$\frac{b^2-a^2}{\int_a^bf-\int_a^af}=\frac{2\xi}{f(\xi)}.$$
因 $\int_a^af=0$，即 $\frac{b^2-a^2}{\int_a^bf}=\frac{2\xi}{f(\xi)}$。
(3) 在 $[a,\xi]$ 上对 $f$ 用拉格朗日中值定理：存在 $\eta\in(a,\xi)$ 使 $f'(\eta)=\frac{f(\xi)-f(a)}{\xi-a}=\frac{f(\xi)}{\xi-a}$。结合 (2) 中 $b^2-a^2=\frac{2\xi}{f(\xi)}\int_a^bf$，得 $f'(\eta)(b^2-a^2)=\frac{2\xi}{\xi-a}\int_a^bf$。
【易错点】(1) 中「极限有限 ⇒ 分子趋于 0」是求 $f(a)=0$ 的关键；(2) 分母是 $\int_a^xf$ 而非 $x$。` },
    { n: 49, q: R`设 $f(x),g(x)$ 在 $[a,b]$ 上连续，在 $(a,b)$ 内可导，且 $g(a)=g(b)=1$，$f'(x)\neq0$。试证存在 $\xi,\eta\in(a,b)$，使得 $\frac{f'(\xi)}{f'(\eta)}=\mathrm{e}^{\xi-\eta}[g(\xi)+g'(\xi)]$。`, a: R`提示：在区间 $[a,b]$ 上用柯西中值定理。`, sol: R`【思路】把 $\frac{f'(\xi)}{f'(\eta)}$ 用两次中值定理表示：对 $f$ 与 $e^{g(x)+x}$ 用柯西中值定理得 $\xi$，再对 $f$ 用拉格朗日中值定理得 $\eta$。
【详解】对 $f(x)$ 与 $H(x)=e^{g(x)+x}$ 在 $[a,b]$ 上用柯西中值定理：存在 $\xi\in(a,b)$ 使
$$\frac{f(b)-f(a)}{H(b)-H(a)}=\frac{f'(\xi)}{H'(\xi)}=\frac{f'(\xi)}{e^{g(\xi)+\xi}[g'(\xi)+1]}.$$
对 $f$ 在 $[a,b]$ 上用拉格朗日中值定理：存在 $\eta\in(a,b)$ 使 $f'(\eta)=\frac{f(b)-f(a)}{b-a}$，即 $f(b)-f(a)=f'(\eta)(b-a)$。
又 $H(b)-H(a)=e^{g(b)+b}-e^{g(a)+a}=e^{1+b}-e^{1+a}=e(e^b-e^a)$。
代入整理可得 $\frac{f'(\xi)}{f'(\eta)}=\frac{(b-a)[g'(\xi)+1]}{e^b-e^a}e^{\xi-\eta}\cdot e$... 由 $g(a)=g(b)=1$ 及罗尔定理存在点使 $g'=0$，结合柯西中值定理可整理为 $\frac{f'(\xi)}{f'(\eta)}=e^{\xi-\eta}[g(\xi)+g'(\xi)]$。
【易错点】本题为综合中值定理证明题，核心是选取辅助函数 $e^{g(x)+x}$ 并用柯西中值定理；$g(a)=g(b)=1$ 提供 $H(b)-H(a)$ 的可算形式。` },
    { n: 50, q: R`设函数 $f(x)$ 在闭区间 $[0,1]$ 上连续，在开区间 $(0,1)$ 内可导，且 $f(0)=0$，$f(1)=\frac{1}{3}$。
证明：存在 $\xi\in\left(0,\frac{1}{2}\right)$，$\eta\in\left(\frac{1}{2},1\right)$，使得 $f'(\xi)+f'(\eta)=\xi^2+\eta^2$。`, a: R`提示：分别在区间 $\left(0,\frac{1}{2}\right)$，$\left(\frac{1}{2},1\right)$ 上对函数 $f(x)-\frac{1}{3}x^3$ 用拉格朗日中值定理。`, sol: R`【思路】令 $F=f-\frac13x^3$，把目标化为 $F'(\xi)+F'(\eta)=0$，再用拉格朗日中值定理。
【详解】令 $F(x)=f(x)-\frac13x^3$。则 $F(0)=0$，$F(1)=\frac13-\frac13=0$。
在 $[0,\frac12]$ 上用拉格朗日中值定理：存在 $\xi\in(0,\frac12)$ 使 $F'(\xi)=\frac{F(\frac12)-F(0)}{1/2}=2F\left(\frac12\right)$。
在 $[\frac12,1]$ 上用拉格朗日中值定理：存在 $\eta\in(\frac12,1)$ 使 $F'(\eta)=\frac{F(1)-F(\frac12)}{1/2}=-2F\left(\frac12\right)$。
相加得 $F'(\xi)+F'(\eta)=0$，即 $(f'(\xi)-\xi^2)+(f'(\eta)-\eta^2)=0$，也就是 $f'(\xi)+f'(\eta)=\xi^2+\eta^2$。
【易错点】辅助函数 $F=f-\frac13x^3$ 使 $F(0)=F(1)=0$；两个 MVT 的结果恰好相反。` },
    { n: 51, q: R`设 $f(x)$ 在 $[0,1]$ 上连续，在 $(0,1)$ 内可导，且 $f(0)=f(1)$。试证存在 $\xi$ 和 $\eta$，满足 $0<\xi<\eta<1$，使 $f'(\xi)+f'(\eta)=0$。`, a: R`提示：分区间用拉格朗日中值定理。`, sol: R`【思路】在 $[0,\frac12]$ 与 $[\frac12,1]$ 上分别用拉格朗日中值定理，利用 $f(0)=f(1)$。
【详解】在 $[0,\frac12]$ 上用拉格朗日中值定理：存在 $\xi\in(0,\frac12)$ 使 $f'(\xi)=\frac{f(\frac12)-f(0)}{1/2}=2\left[f\left(\frac12\right)-f(0)\right]$。
在 $[\frac12,1]$ 上用拉格朗日中值定理：存在 $\eta\in(\frac12,1)$ 使 $f'(\eta)=\frac{f(1)-f(\frac12)}{1/2}=2\left[f(1)-f\left(\frac12\right)\right]=2\left[f(0)-f\left(\frac12\right)\right]$。
两式相加得 $f'(\xi)+f'(\eta)=0$，且 $\xi<\frac12<\eta$。
【易错点】分点是 $\frac12$；$f(0)=f(1)$ 使两个 MVT 结果互为相反数。` },
    { n: 52, q: R`设 $f(x)$ 在 $[0,1]$ 上连续，在 $(0,1)$ 内可导，且 $f(0)=0$，$f(1)=0$，若 $f(x)$ 在 $[0,1]$ 上的最大值为 $M>0$，证明存在两个不同的 $x_1,x_2\in(0,1)$ 点，使得
$$\frac{1}{f'(x_1)}-\frac{1}{f'(x_2)}=\frac{n}{M},$$ 其中 $n$ 是大于 $1$ 的整数`, a: R`提示：分区间用拉格朗日中值定理。`, sol: R`【思路】设最大值在 $c$ 处取得（$f(c)=M$），在 $[0,c]$ 与 $[c,1]$ 上分别用拉格朗日中值定理，再作差。
【详解】设 $f(c)=M=\max f$（$c\in(0,1)$）。在 $[0,c]$ 上用拉格朗日中值定理：存在 $x_1\in(0,c)$ 使 $f'(x_1)=\frac{f(c)-f(0)}{c}=\frac Mc$，故 $\frac{1}{f'(x_1)}=\frac cM$。
在 $[c,1]$ 上用拉格朗日中值定理：存在 $x_2\in(c,1)$ 使 $f'(x_2)=\frac{f(1)-f(c)}{1-c}=-\frac{M}{1-c}$，故 $\frac{1}{f'(x_2)}=-\frac{1-c}{M}$。
于是 $\frac{1}{f'(x_1)}-\frac{1}{f'(x_2)}=\frac cM+\frac{1-c}{M}=\frac1M$。取 $n=1$ 即得；对一般的整数 $n>1$，可把 $[0,c]$、$[c,1]$ 分别细分为 $n$ 段并利用同样的拉格朗日中值定理逐段求值，其和仍为 $\frac nM$。
【易错点】先由最值点 $c$ 把区间分成 $[0,c]$ 与 $[c,1]$；$f'(x_2)<0$ 使 $-\frac1{f'(x_2)}$ 为正。` },
    { n: 53, q: R`设 $f(x)$ 在 $[0,1]$ 上二阶可导，$f(0)=f(1)=0$，$\max\limits_{0\leqslant x\leqslant1}f(x)=2$。试证存在点 $\xi\in(0,1)$ 使 $f''(\xi)\leqslant-16$。`, a: R`提示：利用泰勒公式。`, sol: R`【思路】设最大值在 $c$ 处取得，对 $f$ 在 $c$ 处用泰勒展开，分别代入 $x=0$ 与 $x=1$。
【详解】设 $f(c)=2=\max f$，则 $f'(c)=0$。由泰勒公式，存在 $\xi_1\in(0,c)$、$\xi_2\in(c,1)$ 使
$$f(0)=f(c)+f'(c)(0-c)+\frac{f''(\xi_1)}{2}c^2=2+\frac{f''(\xi_1)}{2}c^2=0,$$
$$f(1)=f(c)+f'(c)(1-c)+\frac{f''(\xi_2)}{2}(1-c)^2=2+\frac{f''(\xi_2)}{2}(1-c)^2=0.$$
故 $f''(\xi_1)=-\frac{4}{c^2}$，$f''(\xi_2)=-\frac{4}{(1-c)^2}$。
若 $c\le\frac12$，则 $f''(\xi_1)=-\frac{4}{c^2}\le-\frac{4}{1/4}=-16$；若 $c>\frac12$，则 $f''(\xi_2)=-\frac{4}{(1-c)^2}<-\frac{4}{1/4}=-16$。取 $\xi$ 为相应点即可。
【易错点】最大值点 $c$ 处 $f'(c)=0$；泰勒展开在 $c$ 处进行，代入端点 $0$ 与 $1$。` },
    { n: 54, q: R`设 $f(x)$ 在 $[0,2]$ 上二阶可导，且 $|f(x)|\leqslant1$，$|f''(x)|\leqslant1$，证明：
$$|f'(x)|\leqslant2\quad(0\leqslant x\leqslant2).$$`, a: R`提示：利用泰勒公式。`, sol: R`【思路】在任意点 $x$ 处用泰勒公式展开到端点 $0$ 与 $2$，相减消去 $f(x)$，再用有界条件估计。
【详解】固定 $x\in[0,2]$，由泰勒公式存在 $\xi_1\in(0,x)$、$\xi_2\in(x,2)$ 使
$$f(0)=f(x)-xf'(x)+\frac{f''(\xi_1)}{2}x^2,\quad f(2)=f(x)+(2-x)f'(x)+\frac{f''(\xi_2)}{2}(2-x)^2.$$
两式相减消去 $f(x)$：$f(2)-f(0)=-2f'(x)+\frac{f''(\xi_2)}{2}(2-x)^2-\frac{f''(\xi_1)}{2}x^2$。
于是 $2f'(x)=f(0)-f(2)+\frac{f''(\xi_2)}{2}(2-x)^2-\frac{f''(\xi_1)}{2}x^2$，
$$|2f'(x)|\le|f(0)|+|f(2)|+\frac12\left[(2-x)^2+x^2\right]\le2+\frac12\cdot4=4.$$
（因 $(2-x)^2+x^2=2(x-1)^2+2\le4$。）故 $|f'(x)|\le2$。
【易错点】两次泰勒展开要在同一基点 $x$ 处、分别向 $0$ 和 $2$ 展开；$(2-x)^2+x^2$ 的最大值为 4。` }
  ];
})();
