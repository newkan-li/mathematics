window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q880_s9"] = {
    id: "q880_s9",
    ch: "880题 · 高数 · 第二章 一元函数微分学及其应用",
    title: "综合题·选择题",
    probTitle: "第二章 综合题 · 选择题（含原书解析）",
    book: "李林《精讲精练 880 题（数学二）》2026",
    problems: [
      { n: "(1)", q: R`设 $f(x)$ 在 $(1-\delta,1+\delta)(\delta>0)$ 内存在导数，$f'(x)$ 严格单调减少，且 $f(1)=f'(1)=1$，则（ ）。
(A) 在 $(1-\delta,1)$ 和 $(1,1+\delta)$ 内，均有 $f(x)<x$
(B) 在 $(1-\delta,1)$ 和 $(1,1+\delta)$ 内，均有 $f(x)>x$
(C) 在 $(1-\delta,1)$ 内 $f(x)<x$；在 $(1,1+\delta)$ 内 $f(x)>x$
(D) 在 $(1-\delta,1)$ 内 $f(x)>x$；在 $(1,1+\delta)$ 内 $f(x)<x$`, a: R`(A)`, sol: R`【解】令 $F(x)=f(x)-x$，则 $F'(x)=f'(x)-1$，$F(1)=0$。因 $f'$ 严格单调减少，当 $x\in(1-\delta,1)$ 时 $f'(x)>f'(1)=1$，$F'(x)>0$，$F$ 单调增加，$F(x)<F(1)=0$，故 $f(x)<x$；当 $x\in(1,1+\delta)$ 时 $f'(x)<f'(1)=1$，$F'(x)<0$，$F$ 单调减少，$F(x)<F(1)=0$，故 $f(x)<x$。选项 A 正确。` },
      { n: "(2)", q: R`设 $f(x)$ 在 $[0,+\infty)$ 上二阶可导，$f(0)=0$，$f''(x)<0$，当 $0<a<x<b$ 时，有（ ）。
(A) $af(x)>xf(a)$
(B) $bf(x)>xf(b)$
(C) $xf(x)>bf(b)$
(D) $xf(x)>af(a)$`, a: R`(B)`, sol: R`【解】令 $F(x)=\frac{f(x)}x$，则 $F'(x)=\frac{xf'(x)-f(x)}{x^2}=\frac{xf'(x)-f'(\xi)x}{x^2}\ (0<\xi<x<b)$，由 $f''(x)<0$ 得 $f'(x)<f'(\xi)$，故 $F'(x)<0$，$F$ 单调减少，所以 $\frac{f(x)}x>\frac{f(b)}b$，即 $bf(x)>xf(b)$。选项 B 正确。` },
      { n: "(3)", q: R`设 $f(x)$ 在 $[a,b]$ 上可导，$f(x)$ 在 $x=a$ 处取得最小值，在 $x=b$ 处取得最大值，则（ ）。
(A) $f'_+(a)<0$ 且 $f'_-(b)<0$
(B) $f'_+(a)>0$ 且 $f'_-(b)<0$
(C) $f'_+(a)\geqslant0$ 且 $f'_-(b)\geqslant0$
(D) $f'_+(a)<0$ 且 $f'_-(b)>0$`, a: R`(C)`, sol: R`【解】反证：若 $f'_+(a)<0$，由保号性知在 $a$ 右侧 $f(x)<f(a)$，与 $f(a)$ 为最小值矛盾，故 $f'_+(a)\geqslant0$；同理 $f'_-(b)\geqslant0$。选项 C 正确。` },
      { n: "(4)", q: R`设 $f(x)$ 在 $[0,1]$ 上有二阶导数，且 $f(0)=f(1)$，$f''(x)\neq0$，则下列选项正确的是（ ）。
(A) 至少存在一点 $\xi\in(0,1)$，使得 $f(\xi)=0$
(B) 在 $(0,1)$ 内，$f'(x)\neq0$
(C) 存在唯一一点 $\xi\in(0,1)$，使得 $f'(\xi)=0$
(D) 至少存在不同两点 $\xi_1,\xi_2\in(0,1)$，使得 $f'(\xi_1)=f'(\xi_2)=0$`, a: R`(C)`, sol: R`【解】由 $f''(x)\neq0$ 知 $f$ 不恒为常数，又 $f(0)=f(1)$，故最大值或最小值在 $(0,1)$ 内取得，设为 $f(\xi)$，则 $f'(\xi)=0$。
唯一性：若另有 $\eta\in(0,1)$ 使 $f'(\eta)=0$，由罗尔定理存在介于 $\xi,\eta$ 之间的 $x_0$ 使 $f''(x_0)=0$，与 $f''(x)\neq0$ 矛盾。故 $\xi$ 唯一，选项 C 正确。` },
      { n: "(5)", q: R`设 $f(x)$ 在 $x=0$ 的某邻域内有定义，则 $F(x)=f(x)|\sin x|$ 在 $x=0$ 处可导的充要条件是（ ）。
(A) $\lim\limits_{x\to0}f(x)$ 存在
(B) $\lim\limits_{x\to0}f(x)=f(0)$
(C) $f(x)$ 在 $x=0$ 处可导
(D) $\lim\limits_{x\to0^-}f(x)$ 与 $\lim\limits_{x\to0^+}f(x)$ 均存在，且 $\lim\limits_{x\to0^-}f(x)=-\lim\limits_{x\to0^+}f(x)$`, a: R`(D)`, sol: R`【解】$F'_-(0)=\lim\limits_{x\to0^-}\frac{-f(x)\sin x}{x}=-\lim\limits_{x\to0^-}f(x)$，$F'_+(0)=\lim\limits_{x\to0^+}\frac{f(x)\sin x}{x}=\lim\limits_{x\to0^+}f(x)$，故 $F$ 在 $0$ 可导 $\Leftrightarrow F'_-(0)=F'_+(0)\Leftrightarrow-\lim\limits_{x\to0^-}f(x)=\lim\limits_{x\to0^+}f(x)$，选项 D 正确。` },
      { n: "(6)", q: R`设 $f(x)$ 在 $(-\infty,+\infty)$ 内是连续的奇函数，$F(x)=\int_0^{|x|}f(t)dt$，则正确的是（ ）。
(A) $F(x)$ 是不可导的奇函数
(B) $F(x)$ 是可导的偶函数
(C) $F(x)$ 是不可导的偶函数
(D) $F(x)$ 是可导的奇函数`, a: R`(B)`, sol: R`【解】$F'_+(0)=\lim\limits_{x\to0^+}\frac{\int_0^xf(t)dt}{x}=f(0)=0$，$F'_-(0)=\lim\limits_{x\to0^-}\frac{\int_0^xf(t)dt}{x}=\lim\limits_{x\to0^-}[-f(-x)]=0$，故 $F'(0)=0$，$F$ 在 $(-\infty,+\infty)$ 内可导。记 $h(x)=\int_0^xf(t)dt$，由 $f$ 为奇函数知 $h$ 为偶函数，故 $F(x)=h(|x|)$ 为偶函数，选项 B 正确。` },
      { n: "(7)", q: R`设 $f(x)$ 在 $(-1,1)$ 内可导，且 $\lim\limits_{x\to0}\frac{f(x)}{x^2}=1$，则（ ）。
(A) $\lim\limits_{x\to0}\frac{f'(x)}x$ 存在
(B) $\lim\limits_{x\to0}\frac{f'(x)}x$ 不存在
(C) $f'(0)=0,f''(0)=2$
(D) $f(0)$ 是 $f(x)$ 的极小值`, a: R`(D)`, sol: R`【解】由 $\lim\limits_{x\to0}\frac{f(x)}{x^2}=1$ 知 $f(0)=0$，且 $\lim\limits_{x\to0}\frac{f(x)-f(0)}x=f'(0)=0$，故 $x=0$ 是驻点；又由保号性在去心邻域内 $f(x)>0=f(0)$，故 $f(0)$ 为极小值，选项 D 正确。
【注】A、B 不一定：如 $f(x)=x^3\sin\frac1x+x^2$（$x\neq0$），$f(0)=0$，满足条件但 $\lim\limits_{x\to0}\frac{f'(x)}x$ 不存在；C 亦然。` },
      { n: "(8)", q: R`设 $y=f(x)$ 由 $\begin{cases}x=t|t|,\\y=|t|\int_0^{|t|}e^{u^2}du\end{cases}$ 确定，则下列选项中正确的是（ ）。
(A) $f'(x)$ 在 $x=0$ 处连续
(B) $f(x)$ 在 $x=0$ 处不连续
(C) $f'(0)$ 不存在
(D) $f'(0)$ 存在`, a: R`(C)`, sol: R`【解】当 $t>0$ 时 $x=t^2,y=t\int_0^te^{u^2}du$；当 $t<0$ 时 $x=-t^2,y=-t\int_0^{-t}e^{u^2}du$。由导数定义 $f'_+(0)=\lim\limits_{t\to0^+}\frac{t\int_0^te^{u^2}du}{t^2}=\lim\limits_{t\to0^+}e^{t^2}=1$，$f'_-(0)=\lim\limits_{t\to0^-}\frac{-t\int_0^{-t}e^{u^2}du}{-t^2}=\lim\limits_{t\to0^-}(-e^{t^2})=-1$，故 $f'(0)$ 不存在，选项 C 正确（且 $f$ 在 $0$ 处连续，B、D、A 错）。` },
      { n: "(9)", q: R`设 $f(x)=\lim\limits_{n\to\infty}\frac{n\arctan(nx)}{\sqrt{n^2+nx}}$，则 $F(x)=\int_{-1}^xf(t)dt$ 在 $x\in[-1,1]$ 上是（ ）。
(A) 连续但不可导的奇函数
(B) 连续但不可导的偶函数
(C) 可导的偶函数
(D) 可导的奇函数`, a: R`(B)`, sol: R`【解】$f(x)=\lim\limits_{n\to\infty}\frac{\arctan(nx)}{\sqrt{1+\frac xn}}=\begin{cases}\frac\pi2,&x>0,\\0,&x=0,\\-\frac\pi2,&x<0,\end{cases}$ 故 $x=0$ 是 $f$ 的跳跃间断点，$f$ 可积，$F$ 连续但在 $0$ 处不可导；又 $f$ 为奇函数，故 $F$ 是连续的偶函数，选项 B 正确。
【注】设 $F(x)=\int_a^xf(t)dt$：若 $x_0$ 为 $f$ 的可去间断点，则 $F$ 在 $x_0$ 可导且 $F'(x_0)=\lim\limits_{x\to x_0}f(x)$；若 $x_0$ 为跳跃间断点，则 $F$ 连续但不可导，且 $F'_-(x_0)=\lim\limits_{x\to x_0^-}f(x)$，$F'_+(x_0)=\lim\limits_{x\to x_0^+}f(x)$。` },
      { n: "(10)", q: R`设 $y=f(x)$ 在 $x_0$ 的某邻域内有四阶连续导数，且 $f'(x_0)=f''(x_0)=f'''(x_0)=0$，且 $f^{(4)}(x_0)<0$，则（ ）。
(A) $f(x)$ 在 $x_0$ 处取得极小值
(B) $f(x)$ 在 $x_0$ 处取得极大值
(C) $(x_0,f(x_0))$ 是 $y=f(x)$ 的拐点
(D) $f(x)$ 在 $x_0$ 的某邻域内单调减少`, a: R`(B)`, sol: R`【解】由泰勒公式 $f(x)=f(x_0)+\frac{f^{(4)}(\xi)}{4!}(x-x_0)^4$，$x\in(x_0-\delta,x_0+\delta)$，故 $f(x)-f(x_0)=\frac{f^{(4)}(\xi)}{4!}(x-x_0)^4<0$，$f$ 在 $x_0$ 处取得极大值，选项 B 正确。` },
      { n: "(11)", q: R`设 $f(x)$ 在 $[a,b]$ 上可导，$f(x)$ 在 $x=a$ 处取得最小值，在 $x=b$ 处取得最大值，$F(x)=\int_0^xf(t)dt$，$x\in[a,b]$，则（ ）。
(A) $F''_+(a)>0$ 且 $F''_-(b)<0$
(B) $F''_+(a)\geqslant0$ 且 $F''_-(b)\geqslant0$
(C) $F''_+(a)<0$ 且 $F''_-(b)<0$
(D) $F''_+(a)<0$ 且 $F''_-(b)>0$`, a: R`(B)`, sol: R`【解】$F'(x)=f(x)$ 在 $x=a$ 取最小值、$x=b$ 取最大值。反证：若 $F''_+(a)=\lim\limits_{x\to a^+}\frac{f(x)-f(a)}{x-a}<0$，由保号性在 $a$ 右侧 $f(x)<f(a)$，与最小值矛盾，故 $F''_+(a)\geqslant0$；同理 $F''_-(b)\geqslant0$。选项 B 正确。` },
      { n: "(12)", q: R`设 $f(x)$ 在 $x_0$ 的某邻域内连续，且 $\lim\limits_{x\to x_0}\frac{f(x)-f(x_0)}{(x-x_0)^n}=1$，则（ ）。
(A) 当 $n$ 为奇数时，$x_0$ 是 $f(x)$ 的极大值点
(B) 当 $n$ 为奇数时，$x_0$ 是 $f(x)$ 的极小值点
(C) 当 $n$ 为偶数时，$x_0$ 是 $f(x)$ 的极小值点
(D) 当 $n$ 为偶数时，$x_0$ 是 $f(x)$ 的极大值点`, a: R`(C)`, sol: R`【解】由保号性在 $x_0$ 去心邻域内 $\frac{f(x)-f(x_0)}{(x-x_0)^n}>0$，即 $f(x)-f(x_0)$ 的符号由 $(x-x_0)^n$ 确定。当 $n$ 为奇数时 $f$ 在 $x_0$ 两侧异号，$x_0$ 不是极值点（排除 A、B）；当 $n$ 为偶数时两侧均 $f(x)>f(x_0)$，$x_0$ 是极小值点，选项 C 正确。` },
      { n: "(13)", q: R`设 $f(x)$ 在 $(-\infty,+\infty)$ 内可导，则下列命题正确的是（ ）。
(A) 若 $\lim\limits_{x\to-\infty}f(x)=-\infty$，则必有 $\lim\limits_{x\to-\infty}f'(x)=-\infty$
(B) 若 $\lim\limits_{x\to-\infty}f'(x)=-\infty$，则必有 $\lim\limits_{x\to-\infty}f(x)=-\infty$
(C) 若 $\lim\limits_{x\to+\infty}f(x)=+\infty$，则必有 $\lim\limits_{x\to+\infty}f'(x)=+\infty$
(D) 若 $\lim\limits_{x\to+\infty}f'(x)=+\infty$，则必有 $\lim\limits_{x\to+\infty}f(x)=+\infty$`, a: R`(D)`, sol: R`【解】由 $\lim\limits_{x\to+\infty}f'(x)=+\infty$，存在 $x_0$ 和 $M>1$，当 $x>x_0$ 时 $f'(x)>M$，由拉格朗日中值定理 $f(x)=f(x_0)+f'(\xi)(x-x_0)>f(x_0)+(x-x_0)\to+\infty$，故选项 D 正确。` },
      { n: "(14)", q: R`设 $k>0$，方程 $\ln x-\frac xe+k=0$ 在 $(0,+\infty)$ 内不同实根的个数为（ ）。
(A) 0
(B) 1
(C) 2
(D) 3`, a: R`(C)`, sol: R`【解】令 $f(x)=\ln x-\frac xe+k$，$f'(x)=\frac1x-\frac1e=\frac{e-x}{ex}$，令 $f'=0$ 得 $x=e$，$x=e$ 为最大值点，最大值 $f(e)=k>0$。$f$ 在 $(0,e)$ 增、$(e,+\infty)$ 减，故图象与 $x$ 轴有两个交点，方程有两个不同实根，选项 C 正确。` },
      { n: "(15)", q: R`设当 $x\neq0$ 时，方程 $kx+\frac1{x^2}=1$ 有且只有一个实根，则（ ）。
(A) $|k|>\frac29\sqrt3$
(B) $|k|<\frac29\sqrt3$
(C) $k=\frac29\sqrt3$
(D) $k=-\frac29\sqrt3$`, a: R`(A)`, sol: R`【解】$k\neq0$，原方程与 $kx^3-x^2+1=0$ 同解。令 $f(x)=kx^3-x^2+1$，$f'(x)=x(3kx-2)$，驻点 $x=0,\frac2{3k}$；$f''(x)=2(3kx-1)$，$f''(0)<0$，$f''\left(\frac2{3k}\right)=2>0$，故 $f(0)=1>0$ 为极大值。要有唯一实根，需 $f\left(\frac2{3k}\right)>0$，即 $\frac{8k}{27k^3}-\frac4{9k^2}+1>0$，解得 $|k|>\frac29\sqrt3$，选项 A 正确。` },
      { n: "(16)", q: R`设 $f(x)$ 在 $[0,+\infty)$ 上二阶可导，$f(0)=0$，$f'(0)<0$，$f''(x)\geqslant M>0$，则方程 $f(x)=0$ 在 $(0,+\infty)$ 内不同实根的个数为（ ）。
(A) 3
(B) 2
(C) 1
(D) 0`, a: R`(C)`, sol: R`【解】由 $f'(0)<0$ 及保号性存在 $x_1>0$ 使 $f(x_1)<0$；由 $f''(x)\geqslant M>0$ 知 $f'(x)\to+\infty$，从而 $f(x)\to+\infty\ (x\to+\infty)$，故存在 $x_2>x_1$ 使 $f(x_2)>0$，由零点定理 $f=0$ 至少有一根。又 $f''\geqslant M>0$ 知 $f=0$ 在 $[0,+\infty)$ 上至多两根，而 $f(0)=0$，故在 $(0,+\infty)$ 内只有一根，选项 C 正确。` },
      { n: "(17)", q: R`设可导函数 $f(x)$，$x\in[0,1]$ 满足 $f'(x)\geqslant M>0$，且 $f\left(\frac12\right)\geqslant0$，则在区间（ ）上，有 $f(x)\geqslant\frac14M$。
(A) $\left[0,\frac14\right]$
(B) $\left[\frac14,\frac12\right]$
(C) $\left[\frac12,\frac34\right]$
(D) $\left[\frac34,1\right]$`, a: R`(D)`, sol: R`【解】由拉格朗日中值定理 $f\left(\frac34\right)-f\left(\frac12\right)=f'(\xi)\cdot\frac14\geqslant\frac14M$，$\xi\in\left(\frac12,\frac34\right)$，即 $f\left(\frac34\right)\geqslant\frac14M+f\left(\frac12\right)\geqslant\frac14M$。又 $f'(x)>0$ 知 $f$ 单调增，故在 $\left[\frac34,1\right]$ 上 $f(x)\geqslant f\left(\frac34\right)\geqslant\frac14M$，选项 D 正确。` },
      { n: "(18)", q: R`设函数 $f_1(x),f_2(x)$ 有二阶连续导数，且 $f_1''(x)>0,f_2''(x)>0$，若曲线 $y=f_1(x)$ 与 $y=f_2(x)$ 在点 $(x_0,y_0)$ 处有公切线 $y=g(x)$，且在该点处曲线 $y=f_1(x)$ 的曲率半径小于 $y=f_2(x)$ 的曲率半径，则在点 $x_0$ 的某邻域内有（ ）。
(A) $g(x)\geqslant f_2(x)\geqslant f_1(x)$
(B) $g(x)\geqslant f_1(x)\geqslant f_2(x)$
(C) $f_1(x)\geqslant f_2(x)\geqslant g(x)$
(D) $f_1(x)\geqslant g(x)\geqslant f_2(x)$`, a: R`(C)`, sol: R`【解】由 $f_1''>0,f_2''>0$ 知两曲线均为凹函数，且 $y=f_1$ 在该点处曲率大于 $y=f_2$ 的曲率。由图形可知在 $x_0$ 的某邻域内有 $f_1(x)\geqslant f_2(x)\geqslant g(x)$，选项 C 正确。` },
      { n: "(19)", q: R`设 $f'(x)$ 在 $[0,4]$ 上连续，曲线 $y=f'(x)$ 与 $x=0,y=0,x=4$ 围成如图所示的三个区域，其面积 $S_1,S_2,S_3$ 满足 $S_2>S_1>S_3$，则下列选项中正确的是（ ）。
(A) $f(1)>f(3)>f(4)$
(B) $f(4)>f(3)>f(1)$
(C) $f(3)>f(4)>f(1)$
(D) $f(4)>f(1)>f(3)$`, a: R`(C)`, sol: R`【解】由图形知 $x\in(0,1)$ 时 $f'<0$，$x\in(1,3)$ 时 $f'>0$，$x\in(3,4)$ 时 $f'<0$。由拉格朗日中值定理 $f(3)-f(1)=2f'(\xi_1)>0$，$f(4)-f(3)=f'(\xi_2)<0$；又 $f(4)-f(1)=\int_1^4f'(x)dx=S_2-S_3>0$，故 $f(3)>f(4)>f(1)$，选项 C 正确。` },
      { n: "(20)", q: R`设 $f(x)$ 在 $[0,1]$ 上二阶可导，且 $f''(x)>0,f(0)=f(1)$。当 $x\in(0,1)$ 时，下列结论正确的是（ ）。
① $(1-x)[f(x)-f(0)]<x[f(1)-f(x)]$；　② $(1-x)[f(x)-f(0)]>x[f(1)-f(x)]$；
③ $x[f(x)-f(0)]<(1-x)[f(1)-f(x)]$；　④ $x[f(x)-f(0)]>(1-x)[f(1)-f(x)]$。
(A) ①④
(B) ②③
(C) ②④
(D) ①③`, a: R`(D)`, sol: R`【解】①可变形为 $\frac{f(x)-f(0)}x<\frac{f(1)-f(x)}{1-x}$。由拉格朗日中值定理 $f'(\xi_1)=\frac{f(x)-f(0)}x\ (\xi_1\in(0,x))$，$f'(\xi_2)=\frac{f(1)-f(x)}{1-x}\ (\xi_2\in(x,1))$；由 $f''>0$ 知 $f'$ 单调增，$\xi_1<\xi_2$ 故 $f'(\xi_1)<f'(\xi_2)$，①正确。
③可变形为 $f(x)<f(1)=f(0)$，由①正确知 $f(x)<f(0)=f(1)$，③正确。选项 D 正确。` },
      { n: "(21)", q: R`设在 $[0,+\infty)$ 上的可导函数 $y=f(x)$ 满足 $y'-p(x)y>0$，且 $f(0)\geqslant0$，其中 $p(x)$ 在 $[0,+\infty)$ 上为正值连续函数，当 $0<a<b$ 时，下列选项中正确的是（ ）。
(A) $f(0)<f(a)<f(b)$
(B) $f(b)<f(a)<f(0)$
(C) $f(b)<f(0)<f(a)$
(D) $f(a)<f(0)<f(b)$`, a: R`(A)`, sol: R`【解】由 $y'-p(x)y>0$ 两边乘 $e^{-\int_0^xp(t)dt}$ 得 $\left[f(x)e^{-\int_0^xp(t)dt}\right]'>0$，故 $f(x)e^{-\int_0^xp(t)dt}$ 单调递增，$f(x)e^{-\int_0^xp(t)dt}>f(0)\geqslant0$，从而 $f(x)>0\ (x>0)$，且 $f'(x)>p(x)f(x)>0$，$f$ 单调增。故 $0<a<b$ 时 $f(0)<f(a)<f(b)$，选项 A 正确。` },
      { n: "(22)", q: R`设 $\lim\limits_{x\to x_0^-}f'(x)=\lim\limits_{x\to x_0^+}f'(x)=1$，则（ ）。
(A) $f(x)$ 在 $x=x_0$ 处必可导且 $f'(x_0)=1$
(B) $f(x)$ 在 $x=x_0$ 处必连续但不可导
(C) $f(x)$ 在 $x=x_0$ 处必存在极限但不连续
(D) $f(x)$ 在 $x=x_0$ 处的某去心邻域内单调递增`, a: R`(D)`, sol: R`【解】由 $\lim\limits_{x\to x_0}f'(x)=1>0$ 及保号性知 $f$ 在 $x_0$ 的去心邻域内单调递增，选项 D 正确。
A、B、C 不一定，例如 $f(x)=\begin{cases}x+1,&x>0,\\x,&x\leqslant0,\end{cases}$ 则 $x\neq0$ 时 $f'(x)=1$，$\lim\limits_{x\to0^\pm}f'(x)=1$，但 $f$ 在 $x=0$ 处不连续、不可导。
【注】注意区别 $f'_-(x_0),f'_+(x_0)$ 均存在与 $\lim\limits_{x\to x_0^\pm}f'(x)$。` }
    ]
  };
})();
