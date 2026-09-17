window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q660_s2"] = {
    id: "q660_s2",
    ch: "660题 · 选择题 · 高等数学",
    title: "选择题 第 51–75 题",
    probTitle: "选择题（含原书详解）",
    book: "《数学基础过关660题（数学二）》",
    problems: [
      { n: 51, q: R`设曲线 $y=\ln x$ 与曲线 $y=k\sqrt{x}$ 在点 $(x_0,y_0)$ 处有公切线，则常数 $k$ 与切点分别为
(A) $\dfrac{1}{\sqrt{e}}$，$(e,1)$。 (B) $\dfrac{4}{e^2}$，$(e^4,4)$。
(C) $\dfrac{3}{e^{\frac32}}$，$(e^3,2)$。 (D) $\dfrac{2}{e}$，$(e^2,2)$。`, a: R`(D)`, sol: R`【分析】$(x_0,y_0)$ 同时满足
$$y_0=\ln x_0=k\sqrt{x_0}\quad①,\qquad y'(x_0)=\frac{1}{x_0}=\frac{k}{2\sqrt{x_0}}\quad②.$$
由 ② 得 $k=\dfrac{2}{\sqrt{x_0}}$，代入 ① 得 $y_0=\ln x_0=2$，故 $(x_0,y_0)=(e^2,2)$，$k=\dfrac2e$。选 (D)。
【评注】公切线给出「函数值相等」与「导数相等」两个方程。` },
      { n: 52, q: R`曲线 $xy=a^2$（$a>0$）在点 $\left(x_0,\dfrac{a^2}{x_0}\right)$ 处的切线与两坐标轴围成的三角形的面积等于
(A) $a^2$。 (B) $2a^2$。 (C) $\dfrac12x_0a^2$。 (D) $x_0a^2$。`, a: R`(B)`, sol: R`【分析】切线斜率 $k=y'(x_0)=-\dfrac{a^2}{x_0^2}$，切线方程为
$$y=\frac{a^2}{x_0}-\frac{a^2}{x_0^2}(x-x_0).$$
令 $y=0$ 得 $x$ 轴截距 $x^*=2x_0$；令 $x=0$ 得 $y$ 轴截距 $y^*=\dfrac{2a^2}{x_0}$。故三角形面积
$$S=\frac12|x^*y^*|=\frac12\cdot2x_0\cdot\frac{2a^2}{x_0}=2a^2.$$
选 (B)。
【评注】双曲线 $xy=a^2$ 上任一点切线与两坐标轴围成的三角形面积为常数 $2a^2$。` },
      { n: 53, q: R`设 $f(x)$ 在 $x_0$ 可导，且 $f'(x_0)>0$，则 $\exists\delta>0$，使得
(A) $f(x)$ 在 $(x_0-\delta,x_0+\delta)$ 单调上升。
(B) $f(x)>f(x_0)$，$x\in(x_0-\delta,x_0+\delta)$，$x\neq x_0$。
(C) $f(x)>f(x_0)$，$x\in(x_0,x_0+\delta)$。
(D) $f(x)<f(x_0)$，$x\in(x_0,x_0+\delta)$。`, a: R`(C)`, sol: R`【分析】由导数定义 $f'(x_0)=\lim\limits_{x\to x_0}\dfrac{f(x)-f(x_0)}{x-x_0}>0$ 及极限的保号性知，存在 $\delta>0$，当 $0<|x-x_0|<\delta$ 时 $\dfrac{f(x)-f(x_0)}{x-x_0}>0$，即 $x\in(x_0,x_0+\delta)$ 时 $f(x)>f(x_0)$，$x\in(x_0-\delta,x_0)$ 时 $f(x)<f(x_0)$。选 (C)。
【评注】$f'(x_0)>0$ 只能保证 $x_0$ 右侧函数值增大，不能保证整个邻域内单调上升（(A) 需 $f'$ 在 $x_0$ 连续）。` },
      { n: 54, q: R`以下四个结论中正确的是：
(A) 设 $f(x)$ 在 $[-a,a]$ 是偶函数，$f'_+(0)$ 存在，则 $f'(0)$ 存在。
(B) 设 $f(x)$ 在 $[-a,a]$ 是偶函数，则 $x=0$ 是 $f(x)$ 的极值点。
(C) 设 $f(x)$ 在 $[-a,a]$ 是奇函数，$f'_+(0)$ 存在，则 $f'(0)$ 存在。
(D) 设 $f(x)$ 在 $x=x_0$ 可导，则曲线 $y=f(x)$ 在 $(x_0,f(x_0))$ 处存在切线，反之亦然。`, a: R`(C)`, sol: R`【分析】(C) 正确：奇函数有 $f(0)=0$，且
$$f'_+(0)=\lim_{x\to0^+}\frac{f(x)}{x}=\lim_{x\to0^+}\frac{-f(-x)}{x}\xlongequal{t=-x}\lim_{t\to0^-}\frac{f(t)}{t}=f'_-(0),$$
故 $f'(0)$ 存在。
(A)(B)(D) 均错：(A) 偶函数可只在右导数存在而左右导数不等；(B) 如 $f(x)=x^3\sin\frac1x$（偶）在 0 非极值点；(D) 反之不成立（如 $y=\sqrt{x}$ 在 0 有垂直切线但不可导）。选 (C)。
【评注】奇函数若右导数存在，则左导数必存在且相等；偶函数无此性质。` },
      { n: 55, q: R`设 $f(x)$ 对一切 $x\in(-\infty,+\infty)$ 满足方程 $(x-1)f''(x)+2(x-1)[f'(x)]^3=1-e^{1-x}$，且 $f(x)$ 在 $x=a$（$a\neq1$）处 $f'(a)=0$，则 $x=a$
(A) 是 $f(x)$ 的极小值点。 (B) 是 $f(x)$ 的极大值点。
(C) 不是 $f(x)$ 的极值点。 (D) 是 $f(x)$ 的拐点。`, a: R`(A)`, sol: R`【分析】$f'(a)=0$，代入方程得 $(a-1)f''(a)=1-e^{1-a}$，故
$$f''(a)=\frac{e^{1-a}-1}{1-a}.$$
当 $a<1$ 时 $1-a>0$、$e^{1-a}-1>0$，$f''(a)>0$；当 $a>1$ 时 $1-a<0$、$e^{1-a}-1<0$，仍 $f''(a)>0$。总之 $f''(a)>0$，故 $x=a$ 是极小值点。选 (A)。
【评注】利用 $f'(a)=0$ 消去 $[f'(a)]^3$ 项，再用 $f''(a)$ 的符号判断；注意 $\dfrac{e^{1-a}-1}{1-a}>0$ 对一切 $a\neq1$ 成立。` },
      { n: 56, q: R`设函数 $f(x)=\begin{cases}\ln x-x,&x\geqslant1,\\x^2-2x,&x<1,\end{cases}$ 则
(A) $x=1$ 是 $f(x)$ 的极小值点。 (B) $x=1$ 是 $f(x)$ 的极大值点。
(C) $(1,f(1))$ 是 $y=f(x)$ 拐点。 (D) $(1,f(1))$ 不是 $y=f(x)$ 拐点。`, a: R`(C)`, sol: R`【分析】$f$ 处处连续。$f'(x)=\begin{cases}\frac1x-1,&x>1,\\2(x-1),&x<1,\end{cases}<0$，故 $f$ 在 $(-\infty,+\infty)$ 单调下降，无极值。
$f''(x)=\begin{cases}-\frac{1}{x^2}<0,&x>1,\\2>0,&x<1,\end{cases}$，在 $x=1$ 两侧 $f''$ 变号，故 $(1,f(1))$ 是拐点。选 (C)。
【评注】$f$ 单调下降 ⇒ 无极值；$f''$ 变号 ⇒ 拐点。` },
      { n: 57, q: R`设 $f(x)=\begin{cases}2-\cos x,&x\leqslant0,\\\sqrt{x}+1,&x>0,\end{cases}$ 则
(A) $x=0$ 是 $f(x)$ 的极值点，但 $(0,1)$ 不是曲线 $y=f(x)$ 的拐点。
(B) $x=0$ 不是 $f(x)$ 的极值点，但 $(0,1)$ 是曲线 $y=f(x)$ 的拐点。
(C) $x=0$ 是 $f(x)$ 的极值点，且 $(0,1)$ 是曲线 $y=f(x)$ 的拐点。
(D) $x=0$ 不是 $f(x)$ 的极值点，$(0,1)$ 也不是曲线 $y=f(x)$ 的拐点。`, a: R`(C)`, sol: R`【分析】$f$ 在 $(-\infty,+\infty)$ 连续。在 $x\in\left(-\frac\pi2,\frac\pi2\right),x\neq0$：
$$f'(x)=\begin{cases}\sin x<0,&-\frac\pi2<x<0,\\\frac{1}{2\sqrt{x}}>0,&0<x<\frac\pi2,\end{cases}\qquad f''(x)=\begin{cases}\cos x>0,&-\frac\pi2<x<0,\\-\frac14x^{-\frac32}<0,&0<x<\frac\pi2.\end{cases}$$
$f'$ 在 0 两侧变号 ⇒ $x=0$ 是极值点；$f''$ 在 0 两侧变号 ⇒ $(0,1)$ 是拐点。选 (C)。
【评注】判断极值点/拐点只需看 $f'$、$f''$ 在 $x_0$ 两侧是否变号，不必要求 $f'(x_0)$、$f''(x_0)$ 存在。` },
      { n: 58, q: R`设 $f(x)=x\sin x+\cos x$，下列命题中正确的是
(A) $f(0)$ 是极大值，$f\left(\dfrac\pi2\right)$ 是极小值。
(B) $f(0)$ 是极小值，$f\left(\dfrac\pi2\right)$ 是极大值。
(C) $f(0),f\left(\dfrac\pi2\right)$ 均是极大值。
(D) $f(0),f\left(\dfrac\pi2\right)$ 均是极小值。`, a: R`(B)`, sol: R`【分析1】$f'(x)=x\cos x+\sin x-\sin x=x\cos x$。取 $\delta$ 充分小，$x\in(-\delta,0)$ 时 $f'<0$，$x\in(0,\delta)$ 时 $f'>0$，故 $f(0)$ 为极小值；$x\in\left(\frac\pi2-\delta,\frac\pi2\right)$ 时 $f'>0$，$x\in\left(\frac\pi2,\frac\pi2+\delta\right)$ 时 $f'<0$，故 $f\left(\frac\pi2\right)$ 为极大值。
【分析2】$f''(x)=\cos x-x\sin x$。$f'(0)=0$，$f''(0)=1>0\Rightarrow f(0)$ 极小；$f'\left(\frac\pi2\right)=0$，$f''\left(\frac\pi2\right)=-\frac\pi2<0\Rightarrow f\left(\frac\pi2\right)$ 极大。选 (B)。
【评注】先用一阶导数变号法（第一充分条件），也可用二阶导数法（第二充分条件）。` },
      { n: 59, q: R`设 $f(x)$ 具有二阶连续导数，且 $f'(1)=0$，$\lim\limits_{x\to1}\dfrac{f''(x)}{(x-1)^2}=\dfrac12$，则
(A) $f(1)$ 是 $f(x)$ 的极大值。 (B) $f(1)$ 是 $f(x)$ 的极小值。
(C) $(1,f(1))$ 是曲线 $f(x)$ 的拐点坐标。
(D) $f(1)$ 不是 $f(x)$ 的极值，$(1,f(1))$ 也不是曲线 $f(x)$ 的拐点坐标。`, a: R`(B)`, sol: R`【分析1】由 $\lim\limits_{x\to1}\dfrac{f''(x)}{(x-1)^2}=\dfrac12>0$ 及保号性，存在 $\delta>0$，当 $0<|x-1|<\delta$ 时 $f''(x)>0$，故 $f'$ 在 $(1-\delta,1+\delta)$ 单调增，于是 $x<1$ 时 $f'(x)<f'(1)=0$、$x>1$ 时 $f'(x)>f'(1)=0$，故 $f(1)$ 为极小值。选 (B)。
【分析2】$f''>0$ 说明该邻域内 $f$ 为凹函数，$f(x)>f(1)+f'(1)(x-1)=f(1)$。选 (B)。
【评注】$f''$ 在 $x=1$ 两侧同号（都为正），故 $(1,f(1))$ 不是拐点。` },
      { n: 60, q: R`设 $f(x)$ 在 $(-\infty,+\infty)$ 可导，$x_0\neq0$，$(x_0,f(x_0))$ 是 $y=f(x)$ 的拐点，则
(A) $x_0$ 必是 $f'(x)$ 的驻点。
(B) $(-x_0,-f(x_0))$ 必是 $y=-f(-x)$ 的拐点。
(C) $(-x_0,-f(-x_0))$ 必是 $y=-f(x)$ 的拐点。
(D) 对 $\forall x>x_0$ 与 $x<x_0$，$y=f(x)$ 的凹凸性相反。`, a: R`(B)`, sol: R`【分析1】拐点处 $f''(x_0)$ 不一定存在，故 (A) 不选；拐点是局部性质，只在 $x_0$ 某邻域内凹凸性相反，故 (D) 不选。(C) 中 $y=-f(x)$ 与 $y=f(x)$ 关于 $x$ 轴对称，$(-x_0,-f(-x_0))$ 未必是拐点（如 $y=(x-1)^3$）。因此选 (B)。
【分析2】$y=f(x)$ 与 $y=-f(-x)$ 的图形关于原点对称，$x_0\neq0$，$(x_0,f(x_0))$ 是 $y=f(x)$ 的拐点 $\Rightarrow(-x_0,-f(x_0))$ 是 $y=-f(-x)$ 的拐点。选 (B)。
【评注】注意区分对称变换：关于原点对称对应 $y=-f(-x)$，关于 $x$ 轴对称对应 $y=-f(x)$。` },
      { n: 61, q: R`设函数 $f(x)$ 在 $(-\infty,+\infty)$ 上有定义，则下述命题中正确的是
(A) 若 $f(x)$ 在 $(-\infty,+\infty)$ 上可导且单调增加，则对一切 $x\in(-\infty,+\infty)$，都有 $f'(x)>0$。
(B) 若 $f(x)$ 在点 $x_0$ 处取得极值，则 $f'(x_0)=0$。
(C) 若 $f''(x_0)=0$，则 $(x_0,f(x_0))$ 是曲线 $y=f(x)$ 的拐点坐标。
(D) 若 $f'(x_0)=0$，$f''(x_0)=0$，$f'''(x_0)\neq0$，则 $x_0$ 一定不是 $f(x)$ 的极值点。`, a: R`(D)`, sol: R`【分析】(A) 错：单调增只保证 $f'\ge0$（如 $f(x)=x^3$，$f'(0)=0$）。
(B) 错：极值点可能不可导（如 $f(x)=|x|$ 在 0）。
(C) 错：$f''(x_0)=0$ 不一定变号（如 $f(x)=x^4$ 在 0，无拐点）。
(D) 正确：由带佩亚诺余项的泰勒公式，$f(x)-f(x_0)=(x-x_0)^3\left[\frac{f'''(x_0)}{3!}+o(1)\right]$，在 $x_0$ 两侧符号相反，故 $x_0$ 不是极值点。选 (D)。
【评注】$f'(x_0)=f''(x_0)=0,f'''(x_0)\neq0$ 时 $(x_0,f(x_0))$ 恰是拐点，且 $x_0$ 不是极值点。` },
      { n: 62, q: R`函数 $y=f(x)$ 在 $(-\infty,+\infty)$ 连续，其二阶导函数的图形如图所示，则 $y=f(x)$ 的拐点的个数是
(A) $1$。 (B) $2$。 (C) $3$。 (D) $4$。`, a: R`(C)`, sol: R`【分析】只需考察 $f''(x)=0$ 的点与 $f''$ 不存在的点。
由图 $f''(x_1)=f''(x_4)=0$，且 $x=x_1,x_4$ 两侧 $f''$ 变号，故 $(x_1,f(x_1)),(x_4,f(x_4))$ 是拐点。
$x=0$ 处 $f''$ 不存在，但 $f$ 在 0 连续，且 0 两侧 $f''$ 变号，故 $(0,f(0))$ 也是拐点。
而 $f''(x_3)=0$，但 $x_3$ 两侧 $f''>0$（同为凹），$(x_3,f(x_3))$ 不是拐点。共 3 个拐点，选 (C)。
【评注】拐点处 $f''$ 必须变号；$f''=0$ 或不存在只是「候选点」。` },
      { n: 63, q: R`设 $[0,+\infty)$ 区间上 $y=f(x)$ 的导函数的图形如图所示，则 $y=f(x)$ 的拐点的个数是
(A) $1$。 (B) $2$。 (C) $3$。 (D) $4$。`, a: R`(C)`, sol: R`【分析】拐点的候选点是 $f''=0$（即 $f'$ 的驻点）与 $f''$ 不存在（$f'$ 的尖点）。
由 $f'$ 的图形，$f'$ 的驻点为 $x_1,x_3,x_6$，$f'$ 的尖点为 $x_4$。
$x_1,x_6$ 两侧 $f'$ 单调性相反 ⇒ 凹凸性相反 ⇒ 是拐点；$x_3$ 两侧 $f'$ 均单调上升（$f$ 均为凹），不是拐点；$x_4$ 处 $f'$ 有尖点且两侧 $f'$ 单调性相反，$(x_4,f(x_4))$ 是拐点。共 3 个拐点，选 (C)。
【评注】由 $f'$ 的单调性判断 $f$ 的凹凸性：$f'$ 递增 ⇒ $f$ 凹（$f''>0$），$f'$ 递减 ⇒ $f$ 凸。` },
      { n: 64, q: R`设 $f(x)$ 在 $[a,b]$ 可导，$f(a)=\max\limits_{x\in[a,b]}f(x)$，则
(A) $f'_+(a)=0$。 (B) $f'_+(a)\ge0$。 (C) $f'_+(a)<0$。 (D) $f'_+(a)\le0$。`, a: R`(D)`, sol: R`【分析】由 $f(a)$ 是最大值，对 $x>a$ 有 $\dfrac{f(x)-f(a)}{x-a}\le0$，故
$$f'_+(a)=\lim_{x\to a^+}\frac{f(x)-f(a)}{x-a}\le0.$$
选 (D)。
【评注】最值点处的单侧导数：$f(a)=\max$ ⇒ $f'_+(a)\le0$；$f(a)=\min$ ⇒ $f'_+(a)\ge0$；$f(b)=\max$ ⇒ $f'_-(b)\ge0$；$f(b)=\min$ ⇒ $f'_-(b)\le0$。` },
      { n: 65, q: R`数列 $1,\sqrt{2},\sqrt[3]{3},\cdots,\sqrt[n]{n},\cdots$ 的最大项为
(A) $\sqrt{2}$。 (B) $\sqrt[3]{3}$。 (C) $\sqrt[4]{4}$。 (D) $\sqrt[5]{5}$。`, a: R`(B)`, sol: R`【分析】设 $f(x)=x^{\frac1x}$（$x\ge1$），$f'(x)=x^{\frac1x}\dfrac{1-\ln x}{x^2}$，故 $1\le x<e$ 时递增、$x>e$ 时递减。
最大项在 $x=e$ 两侧的整数项中，即比较 $\sqrt2$ 与 $\sqrt[3]{3}$：
$$\sqrt2=\sqrt[6]{8}<\sqrt[6]{9}=\sqrt[3]{3},$$
故最大项为 $\sqrt[3]{3}$。选 (B)。
【评注】不能对数列直接求导，应先构造连续函数 $f(x)=x^{1/x}$ 讨论单调性，再比较相邻整数项。` },
      { n: 66, q: R`函数 $f(x)=xe^{-\frac14x^2}$（$-\infty<x<+\infty$）的最大值为
(A) $\sqrt2e^{-\frac12}$。 (B) $e^{-\frac14}$。 (C) $2e^{-1}$。 (D) $3e^{-\frac94}$。`, a: R`(A)`, sol: R`【分析】$f$ 为奇函数，$x<0$ 时 $f<0$，$x>0$ 时 $f>0$，只需在 $[0,+\infty)$ 上分析。
$$f'(x)=e^{-\frac14x^2}-\frac12x^2e^{-\frac14x^2}=\frac12e^{-\frac14x^2}(2-x^2)\begin{cases}>0,&0<x<\sqrt2,\\=0,&x=\sqrt2,\\<0,&x>\sqrt2,\end{cases}$$
故最大值 $f(\sqrt2)=\sqrt2e^{-\frac12}$。选 (A)。
【评注】利用奇偶性把问题限制到 $x\ge0$；$f(\sqrt2)$ 也是全局最大值。` },
      { n: 67, q: R`设 $f(x)=ax^3-6ax^2+b$ 在区间 $[-1,2]$ 上的最大值是 $3$，最小值是 $-29$，且 $a>0$，则
(A) $a=2$，$b=-29$。 (B) $a=3$，$b=2$。 (C) $a=2$，$b=3$。 (D) 以上都不对。`, a: R`(C)`, sol: R`【分析】$f'(x)=3ax^2-12ax=3ax(x-4)$，驻点 $x=0$（$x=4$ 舍去）。
$f(0)=b$，$f(-1)=-7a+b$，$f(2)=-16a+b$。因 $a>0$，$f(0)$ 最大、$f(2)$ 最小，故
$$\begin{cases}f(0)=b=3,\\f(2)=-16a+b=-29,\end{cases}\Rightarrow b=3,\ a=2.$$
选 (C)。
【评注】闭区间最值需比较驻点值与端点值；$a>0$ 保证开口向上。` },
      { n: 68, q: R`原点 $O(0,0)$ 与曲线 $y=\dfrac{1}{2\sqrt{x}}$ 之间的最短距离为
(A) $\dfrac12$。 (B) $\dfrac{\sqrt2}{2}$。 (C) $\dfrac{\sqrt3}{2}$。 (D) $\dfrac{\sqrt5}{2}$。`, a: R`(C)`, sol: R`【分析1】点 $O$ 与曲线上的点 $\left(x,\dfrac{1}{2\sqrt{x}}\right)$ 的距离平方为 $f(x)=x^2+\dfrac{1}{4x}$（$x>0$）。
$$f'(x)=2x-\frac{1}{4x^2}=\frac{2\left(x^3-\frac18\right)}{x^2}\begin{cases}<0,&0<x<\frac12,\\=0,&x=\frac12,\\>0,&x>\frac12,\end{cases}$$
故最小值 $f\left(\frac12\right)=\frac34$，$d=\dfrac{\sqrt3}{2}$。选 (C)。
【分析2】用拉格朗日乘数法（条件 $y=\frac{1}{2\sqrt{x}}$），或利用「最短距离处半径是法线」，均得同一点 $\left(\frac12,\frac{\sqrt2}{2}\right)$。选 (C)。
【评注】把「距离」平方后求最值可避免根号；也可用几何法（连线为法线）。` },
      { n: 69, q: R`设 $f(x)$ 在 $[a,+\infty)$ 连续，又 $f(x)$ 在 $[a,x_0]$ 单调上升，在 $[x_0,+\infty)$ 单调下降，$\lim\limits_{x\to+\infty}f(x)=l$，则 $f(x)$ 在 $[a,+\infty)$ 上相应的值域是
(A) $[f(a),f(x_0)]$。 (B) $[l,f(x_0)]$。 (C) $(l,f(x_0)]$。 (D) 以上均不对。`, a: R`(D)`, sol: R`【分析】由单调性：$x\in[a,x_0]$ 时 $f(a)\le f(x)\le f(x_0)$；$x\ge x_0$ 时 $l<f(x)\le f(x_0)$。
若 $f(a)\le l$，则值域为 $[f(a),f(x_0)]$；若 $f(a)>l$，则值域为 $(l,f(x_0)]$。故 (A)(B)(C) 都不一定，选 (D)。
【评注】端值 $f(a)$ 与极限 $l$ 的大小关系未定，故值域需分两种情形讨论。` },
      { n: 70, q: R`曲线 $y=(x+2)e^{-\frac1x}$
(A) 仅有水平渐近线。 (B) 仅有垂直渐近线。
(C) 既有垂直又有水平渐近线。 (D) 既有垂直又有斜渐近线。`, a: R`(D)`, sol: R`【分析】$\lim\limits_{x\to0}(x+2)e^{-\frac1x}=+\infty$（$x\to0^+$），故 $x=0$ 为垂直渐近线。
$$\lim_{x\to\infty}\frac{(x+2)e^{-\frac1x}}{x}=e,\qquad\lim_{x\to\infty}\left[(x+2)e^{-\frac1x}-ex\right]=e,$$
故 $y=e(x+1)$ 为斜渐近线。选 (D)。
【评注】同一侧若有斜渐近线就不会有水平渐近线；本题 $x\to+\infty$ 与 $x\to-\infty$ 的斜渐近线相同。` },
      { n: 71, q: R`曲线 $y=2x-\sqrt{x^2-1}$ 的斜渐近线为
(A) $\begin{cases}y=-x,&x\to+\infty,\\y=3x,&x\to-\infty.\end{cases}$ (B) $\begin{cases}y=x,&x\to+\infty,\\y=3x,&x\to-\infty.\end{cases}$
(C) $\begin{cases}y=3x,&x\to+\infty,\\y=x,&x\to-\infty.\end{cases}$ (D) $\begin{cases}y=3x,&x\to+\infty,\\y=-x,&x\to-\infty.\end{cases}$`, a: R`(B)`, sol: R`【分析】$x\to+\infty$：$\lim\limits_{x\to+\infty}\dfrac yx=\lim\limits_{x\to+\infty}\left(2-\sqrt{1-\frac1{x^2}}\right)=1$，$\lim\limits_{x\to+\infty}(y-x)=\lim\limits_{x\to+\infty}\dfrac{1}{x+\sqrt{x^2-1}}=0$，故斜渐近线 $y=x$。
$x\to-\infty$：$\lim\limits_{x\to-\infty}\dfrac yx=\lim\limits_{x\to-\infty}\left(2+\sqrt{\frac{x^2-1}{x^2}}\right)=3$，$\lim\limits_{x\to-\infty}(y-3x)=0$，故斜渐近线 $y=3x$。选 (B)。
【评注】$x\to\pm\infty$ 时 $\sqrt{x^2-1}$ 的化简不同（$x<0$ 时 $\sqrt{x^2}=|x|=-x$）。` },
      { n: 72, q: R`设 $f(x)$ 处处可导，则下面命题正确的是
(A) 若 $\lim\limits_{x\to-\infty}f(x)=-\infty$，则必有 $\lim\limits_{x\to-\infty}f'(x)=-\infty$。
(B) $\lim\limits_{x\to-\infty}f'(x)=-\infty$，则必有 $\lim\limits_{x\to-\infty}f(x)=-\infty$。
(C) $\lim\limits_{x\to+\infty}f(x)=+\infty$，则必有 $\lim\limits_{x\to+\infty}f'(x)=+\infty$。
(D) $\lim\limits_{x\to+\infty}f'(x)=+\infty$，则必有 $\lim\limits_{x\to+\infty}f(x)=+\infty$。`, a: R`(D)`, sol: R`【分析1】举反例排除 (A)(B)(C)：$f(x)=x$ 时 $\lim\limits_{x\to+\infty}f=+\infty$ 但 $f'=1$，排除 (A)(C)；$f(x)=x^2$ 时 $\lim\limits_{x\to-\infty}f'=-\infty$ 但 $\lim\limits_{x\to-\infty}f=+\infty$，排除 (B)。
【分析2】证 (D)：若 $\lim\limits_{x\to+\infty}f'(x)=+\infty$，则存在 $x_0$，当 $x>x_0$ 时 $f'(x)>1$，由拉格朗日中值定理 $f(x)-f(x_0)=f'(\xi)(x-x_0)>x-x_0\to+\infty$，故 $\lim\limits_{x\to+\infty}f(x)=+\infty$。选 (D)。
【评注】$f'$ 趋于 $+\infty$ 是比 $f$ 趋于 $+\infty$ 更强的条件；反之不成立。` },
      { n: 73, q: R`以下四个命题中，正确的是
(A) 若 $f'(x)$ 在 $(a,b)$ 内连续，则 $f(x)$ 在 $(a,b)$ 内有界。
(B) 若 $f(x)$ 在 $(a,b)$ 内连续，则 $f(x)$ 在 $(a,b)$ 内有界。
(C) 若 $f'(x)$ 在 $(a,b)$ 内有界，则 $f(x)$ 在 $(a,b)$ 内有界。
(D) 若 $f(x)$ 在 $(a,b)$ 内有界，则 $f'(x)$ 在 $(a,b)$ 内有界。`, a: R`(C)`, sol: R`【分析1】举反例：(A)(B) 取 $f(x)=\dfrac{1}{x-a}$（连续但无界）；(D) 取 $f(x)=\sqrt{x-a}$（有界但 $f'$ 无界）。故 (A)(B)(D) 错。
【分析2】证 (C)：取 $x_0\in(a,b)$，由拉格朗日中值定理，对 $\forall x\in(a,b)$，$|f(x)|\le|f(x_0)|+|f'(\xi)||x-x_0|\le|f(x_0)|+M|b-a|$，故 $f$ 在 $(a,b)$ 有界。选 (C)。
【评注】在有界区间上，$f'$ 有界 ⇒ $f$ 有界；但 $f$ 有界推不出 $f'$ 有界（如 $\sqrt{x-a}$）。` },
      { n: 74, q: R`设 $f(x)$ 在 $(a,+\infty)$ 可导，则 $f'(x)$ 在 $(a,+\infty)$ 有界是 $f(x)$ 在 $(a,+\infty)$ 有界的
(A) 必要非充分条件。 (B) 充分非必要条件。
(C) 充分且必要条件。 (D) 既非充分也非必要条件。`, a: R`(D)`, sol: R`【分析】反例：$f(x)=x$，$f'=1$ 有界但 $f$ 无界；$f(x)=\sin x^2$，$f$ 有界但 $f'=2x\cos x^2$ 无界（取 $x_n=\sqrt{n\pi}$，$f'(x_n)=(-1)^n2\sqrt{n\pi}\to\infty$）。故既非充分也非必要，选 (D)。
【评注】无穷区间上 $f$ 与 $f'$ 的有界性无确定关系；有界区间上 $f'$ 有界 ⇒ $f$ 有界（第 73 题）。` },
      { n: 75, q: R`设 $f(x)$ 在 $(0,+\infty)$ 二阶可导，满足 $f(0)=0$，$f''(x)<0$（$x>0$），又设 $b>a>0$，则 $a<x<b$ 时恒有
(A) $af(x)>xf(a)$。 (B) $bf(x)>xf(b)$。 (C) $xf(x)>bf(b)$。 (D) $xf(x)>af(a)$。`, a: R`(B)`, sol: R`【分析】考察 $\dfrac{f(x)}{x}$ 的单调性：
$$\left(\frac{f(x)}{x}\right)'=\frac{xf'(x)-f(x)}{x^2}.$$
令 $g(x)=xf'(x)-f(x)$，则 $g(0)=0$，$g'(x)=xf''(x)<0$（$x>0$），故 $g(x)<0$，从而 $\left(\dfrac{f(x)}{x}\right)'<0$，$\dfrac{f(x)}{x}$ 在 $(0,+\infty)$ 单调下降。
当 $a<x<b$ 时 $\dfrac{f(x)}{x}>\dfrac{f(b)}{b}$，即 $bf(x)>xf(b)$。选 (B)。
【评注】把选项改写为 $\dfrac{f(x)}{x}$ 与 $\dfrac{f(\cdot)}{\cdot}$ 的比较；$f''<0$ 说明 $\dfrac{f(x)}{x}$ 递减。` }
    ]
  };
})();
