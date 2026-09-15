window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["gs01_s2"] = {
    id: "gs01_s2",
    ch: "第一章 函数 极限 连续",
    title: "第三节 连续",
    book: "武忠祥《高等数学辅导讲义》",
    pages: [40, 48],
    img: "assets/img/gaoshu",
    content: [
      { p: 40, md: R`### 一、考试内容要点精讲
#### （一）连续的概念
若 $\lim_{x\to x_{0}} f(x) = f(x_{0})$（或 $\lim_{\Delta x\to 0}\Delta y = 0$），则称 $f(x)$ 在 $x_{0}$ 处连续。

左右连续概念：若 $\lim_{x\to x_{0}^{-}} f(x) = f(x_{0})$，则称 $f(x)$ 在 $x_{0}$ 处左连续。

若 $\lim_{x\to x_{0}^{+}} f(x) = f(x_{0})$，则称 $f(x)$ 在 $x_{0}$ 处右连续。

**定理** $f(x)$ 连续 $\Leftrightarrow f(x)$ 左连续且右连续

#### （二）间断点及其类型
1. 间断点的概念

若 $f(x)$ 在 $x_{0}$ 某去心邻域有定义，但在 $x_{0}$ 处不连续，则称点 $x = x_{0}$ 为函数 $f(x)$ 的间断点。

2. 间断点的分类

我们根据左、右极限是否都存在把间断点分为以下两类

1) 第一类间断点：左、右极限均存在的间断点

可去间断点：左、右极限存在且相等的间断点；

跳跃间断点：左、右极限都存在但不相等的间断点。

2) 第二类间断点：左、右极限中至少有一个不存在的间断点

无穷间断点：左、右极限中至少有一个为无穷，如 $x = 0$ 为 $f(x) = \frac{1}{x}$ 的无穷间断点；

振荡间断点：如 $x = 0$ 为 $f(x) = \sin\frac{1}{x}$ 的振荡间断点。

#### （三）连续函数的性质
1) 连续函数的和、差、积、商（分母不为零）及复合仍连续；

2) 基本初等函数在其定义域内连续；初等函数在其定义区间内连续；` },
      { p: 41, md: R`3) 闭区间上连续函数的性质

(1) 有界性：若 $f(x)$ 在 $[a,b]$ 上连续，则 $f(x)$ 在 $[a,b]$ 上有界。

(2) 最值性：若 $f(x)$ 在 $[a,b]$ 上连续，则 $f(x)$ 在 $[a,b]$ 上必有最大值和最小值。

(3) 介值性：若 $f(x)$ 在 $[a,b]$ 上连续，且 $f(a) \neq f(b)$，则对 $f(a)$ 与 $f(b)$ 之间任一数 $C$，至少存在一个 $\xi \in (a,b)$，使得 $f(\xi) = C$。

推论：若 $f(x)$ 在 $[a,b]$ 上连续，则 $f(x)$ 在 $[a,b]$ 可取到介于最小值 $m$ 与最大值 $M$ 之间的任何值。

(4) 零点定理：若 $f(x)$ 在 $[a,b]$ 连续，且 $f(a)\cdot f(b) < 0$，则必 $\exists\, \xi \in (a,b)$，使 $f(\xi) = 0$。

### 二、常考题型的方法与技巧
### 题型一　讨论连续性及间断点类型

【例1】 设函数 $f(x) = \frac{x}{a + e^{bx}}$ 在 $(-\infty, + \infty)$ 内连续，且 $\lim_{x\to - \infty} f(x) = 0$，则常数 $a, b$ 应满足

(A) $a < 0, b < 0$.　　(B) $a > 0, b > 0$.

(C) $a \le 0, b > 0$.　　(D) $a \ge 0, b < 0$.

【解】 由 $f(x) = \frac{x}{a + e^{bx}}$ 在 $(-\infty, + \infty)$ 连续知，$a + e^{bx} \neq 0$. 又由 $\lim_{x\to - \infty} f(x) = 0$ 知，$\lim_{x\to - \infty} e^{bx} = + \infty$，则 $b < 0$. 再由 $a + e^{bx} \neq 0$ 知，$a \ge 0$，故应选 (D).

【例2】 设 $f(x)$ 和 $\varphi(x)$ 在 $(-\infty, + \infty)$ 上有定义，$f(x)$ 为连续函数，且 $f(x) \neq 0$，$\varphi(x)$ 有间断点，则

(A) $\varphi[f(x)]$ 必有间断点.　　(B) $[\varphi(x)]^{2}$ 必有间断点.

(C) $f[\varphi(x)]$ 必有间断点.　　(D) $\frac{\varphi(x)}{f(x)}$ 必有间断点.

【解1】 直接法：直接证明选项 (D) 正确，用反证法：若 $\frac{\varphi(x)}{f(x)}$ 无间断点，由题设知 $\frac{\varphi(x)}{f(x)}$ 在 $(-\infty, + \infty)$ 有定义，则连续。由 $f(x)$ 的连续知 $\varphi(x) = \frac{\varphi(x)}{f(x)} f(x)$ 必连续，这与 $\varphi(x)$ 有间断点矛盾，故应选 (D).

【解2】 排除法：设 $f(x) \equiv 1, \varphi(x) = \begin{cases} 1, & x \ge 0, \\ -1, & x < 0, \end{cases}$ 显然 $f(x), \varphi(x)$ 符合题设条件，而 $\varphi[f(x)] \equiv 1, \varphi^{2}(x) \equiv 1, f[\varphi(x)] \equiv 1$ 都处处连续，则 (A)、(B)、(C) 都不正确，故应选 (D).

【例3】 讨论函数 $f(x) = \frac{x\arctan\frac{1}{x-1}}{\sin\frac{\pi}{2}x}$ 的连续性并指出间断点类型。` },
      { p: 42, md: R`【解】 由于 $f(x) = \frac{x\arctan\frac{1}{x-1}}{\sin\frac{\pi}{2}x}$ 为初等函数，则除 $x = 1, x = 2k\ (k = 0, \pm 1, \pm 2\cdots)$ 外 $f(x)$ 处处连续。

当 $x = 1$ 时，$f(1^{-}) = \lim_{x\to 1^{-}}\frac{x\arctan\frac{1}{x-1}}{\sin\frac{\pi}{2}x} = -\frac{\pi}{2}$,

$$f(1^{+}) = \lim_{x\to 1^{+}}\frac{x\arctan\frac{1}{x-1}}{\sin\frac{\pi}{2}x} = \frac{\pi}{2},$$

则 $x = 1$ 为跳跃间断点。

当 $x = 0$ 时，$\lim_{x\to 0}\frac{x\arctan\frac{1}{x-1}}{\sin\frac{\pi}{2}x} = -\frac{\pi}{4}\lim_{x\to 0}\frac{x}{\frac{\pi}{2}x} = -\frac{1}{2}$，则 $x = 0$ 为可去间断点。

当 $x = 2k\ (k = \pm 1, \pm 2\cdots)$ 时，$\lim_{x\to 2k}\frac{x\arctan\frac{1}{x-1}}{\sin\frac{\pi}{2}x} = \infty$，则 $x = 2k\ (k = \pm 1, \pm 2\cdots)$ 为无穷间断点。

【例4】 求函数 $f(x) = \frac{\ln|x|}{|x-1|}\sin x$ 的间断点并指出其类型。

【解】 显然 $x = 0$ 和 $x = 1$ 为 $f(x)$ 的间断点，其余点处都连续。

$$\lim_{x\to 0} f(x) = \lim_{x\to 0}\frac{\ln|x|}{|x-1|}\sin x = \lim_{x\to 0}\frac{\ln|x|}{\frac{1}{x}} = \lim_{x\to 0}\frac{\frac{1}{x}}{-\frac{1}{x^{2}}} = 0,$$

则 $x = 0$ 为可去间断点。

$$\lim_{x\to 1} f(x) = \sin 1 \cdot \lim_{x\to 1}\frac{\ln|x|}{|x-1|} = \sin 1 \cdot \lim_{x\to 1}\frac{\ln x}{|x-1|} = \sin 1 \cdot \lim_{x\to 1}\frac{\ln[1+(x-1)]}{|x-1|} = \sin 1 \cdot \lim_{x\to 1}\frac{x-1}{|x-1|},$$

$$\lim_{x\to 1^{+}} f(x) = \sin 1, \lim_{x\to 1^{-}} f(x) = -\sin 1,$$

则 $x = 1$ 为跳跃间断点。

【例5】 求极限 $\lim_{t\to x}\left(\frac{\sin t}{\sin x}\right)^{\frac{x}{\sin t - \sin x}}$，记此极限为 $f(x)$，求函数 $f(x)$ 的间断点并指出类型。

【解】 $f(x)$ 的定义式知在 $x = k\pi, (k = 0, \pm 1, \pm 2, \cdots)$ 处没有定义，当 $x \neq k\pi$ 时，由于 $\left(\frac{\sin t}{\sin x}\right)^{\frac{x}{\sin t - \sin x}} = \left(1 + \frac{\sin t - \sin x}{\sin x}\right)^{\frac{x}{\sin t - \sin x}}$，而 $\lim_{t\to x}\frac{\sin t - \sin x}{\sin x} \cdot \frac{x}{\sin t - \sin x} = \frac{x}{\sin x}$，` },
      { p: 43, md: R`则 $f(x)=\lim_{t\to x}\left(\frac{\sin t}{\sin x}\right)^{\frac{x}{\sin t-\sin x}}=e^{\frac{x}{\sin x}}.$

显然 $x=0,\ x=k\pi\ (k=\pm1,\pm2\cdots)$ 为 $f(x)$ 所有的间断点。

由于 $\lim\limits_{x\to0}f(x)=\lim\limits_{x\to0}e^{\frac{x}{\sin x}}=e$, 则 $x=0$ 为可去间断点。

而 $x=k\pi\ (k=\pm1,\pm2,\cdots)$ 时, $f(x)$ 的左、右极限总有一个是无穷, 则都为第二类间断点。

【例6】 求函数 $f(x)=\lim\limits_{n\to\infty}\frac{x^{n+2}-x^{-n}}{x^n+x^{-n}}$ 的间断点并指出其类型。

【解】 由 $f(x)=\lim\limits_{n\to\infty}\frac{x^{n+2}-x^{-n}}{x^n+x^{-n}}$, 可知 $f(0)$ 无意义。

当 $x\neq0$ 时, $f(x)=\lim\limits_{n\to\infty}\frac{x^{2n+2}-1}{x^{2n}+1}=\begin{cases}-1, & 0<|x|<1,\\ x^{2}, & |x|>1,\\ 0, & |x|=1.\end{cases}$

由于 $\lim\limits_{x\to0}f(x)=-1$, 则 $x=0$ 为可去间断点。

$$f(1^{-})=\lim_{x\to1^{-}}f(x)=\lim_{x\to1^{-}}(-1)=-1,$$

$$f(1^{+})=\lim_{x\to1^{+}}f(x)=\lim_{x\to1^{+}}x^{2}=1,$$

则 $x=1$ 为跳跃间断点。

由于 $f(x)$ 是偶函数, 则 $x=-1$ 也是跳跃间断点。

### 题型二 介值定理、最值定理及零点定理的证明题
【例1】 设 $f(x)$ 在 $(a,b)$ 内非负连续, 且 $x_1,x_2,\cdots x_n\in(a,b)$, 证明存在 $\xi\in(a,b)$ 使 $f(\xi)=\sqrt[n]{f(x_1)f(x_2)\cdots f(x_n)}$.

【证】 令 $c=\min\limits_{1\le i\le n}x_i,\ d=\max\limits_{1\le i\le n}x_i$, 则 $[c,d]\subset(a,b)$, 且 $f(x)$ 在闭区间 $[c,d]$ 上连续。设 $f(x)$ 在 $[c,d]$ 上的最大值为 $M$, 最小值为 $m$, 则

$$m=\sqrt[n]{m^n}\le\sqrt[n]{f(x_1)f(x_2)\cdots f(x_n)}\le\sqrt[n]{M^n}=M.$$

由介值定理知存在 $\xi\in[c,d]\subset(a,b)$, 使 $f(\xi)=\sqrt[n]{f(x_1)f(x_2)\cdots f(x_n)}$.

【例2】 设 $f(x)$ 在 $[0,1]$ 连续, 非负且 $f(0)=f(1)=0$. 求证: $\exists\xi\in[0,1]$, 使 $f(\xi+l)=f(\xi)$, 其中 $0<l<1$.

【证】 令 $F(x)=f(x+l)-f(x),\ x\in[0,1-l]$, 则

$$F(0)=f(l)-f(0)\ge0,$$

$$F(1-l)=f(1)-f(1-l)\le0.$$

若以上二式中至少有一个等号成立, 原题结论显然成立。若以上二式中的等号都不成立, 此时 $F(0)>0,\ F(1-l)<0$, 则由零点定理知存在 $\xi\in(0,1-l)\subset(0,1)$, 使 $F(\xi)=0$, 即 $f(\xi+l)=f(\xi)$.

【例3】 设 $f(x)$ 在 $[0,1]$ 连续, $f(0)=f(1)$. 求证: $\exists\xi\in[0,1]$, 使 $f(\xi+\frac{1}{4})=f(\xi)$.

【证】 令 $F(x)=f(x+\frac{1}{4})-f(x),\ x\in[0,\frac{3}{4}]$, 本题只要证 $F(x)$ 在 $[0,\frac{3}{4}]$ 上有零点。` },
      { p: 44, md: R`由于 $F(0)=f(\frac{1}{4})-f(0),\ F(\frac{1}{4})=f(\frac{1}{2})-f(\frac{1}{4})$,

$$F(\frac{1}{2})=f(\frac{3}{4})-f(\frac{1}{2}),\ F(\frac{3}{4})=f(1)-f(\frac{3}{4}),$$

相加得 $F(0)+F(\frac{1}{4})+F(\frac{1}{2})+F(\frac{3}{4})=f(1)-f(0)=0$.

反证: 若 $F(x)$ 在 $[0,\frac{3}{4}]$ 内无零点, 则由连续性知 $F(x)$ 恒正或恒负。不妨设 $F(x)>0$, 那么 $F(0)+F(\frac{1}{4})+F(\frac{1}{2})+F(\frac{3}{4})>0$, 矛盾, 故 $F(x)$ 在 $[0,\frac{3}{4}]$ 上必有零点。

即 $\exists\xi\in[0,1]$, 使 $f(\xi+\frac{1}{4})=f(\xi)$.

【注】 在本题条件下用同样的方法可证明一个更一般的结论对于任意正整数 $n\ (n\ge2)$, 必存在 $x_n\in[0,1]$, 使 $f(x_n)=f\left(x_n+\frac{1}{n}\right)$.

【例4】 设 $f(x)$ 在 $(-\infty,+\infty)$ 上连续, 且 $\lim\limits_{x\to\infty}\frac{f(x)}{x}=0$, 试证存在 $\xi\in(-\infty,+\infty)$, 使 $f(\xi)+\xi=0$.

【证】 令 $F(x)=f(x)+x$, 则 $\lim\limits_{x\to\infty}\frac{F(x)}{x}=\lim\limits_{x\to\infty}\left(\frac{f(x)}{x}+1\right)=1>0$. 由极限的保号性知, 存在 $X>0$, 当 $|x|>X$ 时, $\frac{F(x)}{x}>0$.

取 $a>X$, 则 $\frac{F(a)}{a}>0,\ \frac{F(-a)}{-a}>0$, 从而有 $F(-a)<0,\ F(a)>0$. 由零点定理知, 存在 $\xi\in(-a,a)\subset(-\infty,+\infty)$, 使 $F(\xi)=0$, 即 $f(\xi)+\xi=0$.` }
    ],
    problems: [
      { n: 1, q: R`函数 $f(x)=x\tan x\,e^{\sin x}$ 是 (A) 单调函数　(B) 周期函数　(C) 偶函数　(D) 无界函数`, a: R`(D)`, sol: R`定义域 $\{x\mid \cos x\neq0\}$ 关于原点对称，但 $f(-x)=-x\tan x\,e^{-\sin x}\neq\pm f(x)$，非奇非偶；含因子 $x$ 故非周期。取 $x\to\frac{\pi}{2}^{-}$，$\tan x\to+\infty$，$x\tan x\,e^{\sin x}\to+\infty$，故无界。选 (D)。` },
      { n: 2, q: R`下列四个函数中 (1) $x\sin\frac1x$ (2) $\frac1x\sin\frac1x$ (3) $\frac{\sin x}{x}$ (4) $x\sin x$ 在 $(0,+\infty)$ 上有界的共有 (A) 1个　(B) 2个　(C) 3个　(D) 4个`, a: R`(B)`, sol: R`(1) $|x\sin\frac1x|\leqslant1$（因 $|\sin t|\leqslant|t|$），有界；(3) $|\frac{\sin x}{x}|\leqslant1$，有界；(2) 取 $x=\frac{1}{\frac{\pi}{2}+2k\pi}$ 时 $|\frac1x\sin\frac1x|=\frac1x\to\infty$，无界；(4) $x\to\infty$ 时无界。故有界 2 个，选 (B)。` },
      { n: 3, q: R`设 $f(x)$ 连续，则下列必为偶函数的是 (A) $\int_0^xf(t^2)dt$　(B) $\int_0^xf^2(t)dt$　(C) $\int_0^xt[f(t)-f(-t)]dt$　(D) $\int_0^xt[f(t)+f(-t)]dt$`, a: R`(D)`, sol: R`记 $g(t)=f(t)+f(-t)$ 为偶函数，$G(x)=\int_0^xtg(t)dt$。$G(-x)=\int_0^{-x}tg(t)dt$，令 $t=-u$ 得 $G(-x)=\int_0^xug(u)du=G(x)$，故 (D) 为偶函数。而 (C) 中 $t[f(t)-f(-t)]$ 为偶函数，其原函数为奇函数；(A)(B) 不一定为偶。选 (D)。` },
      { n: 4, q: R`设有数列 $\{x_n\},\{y_n\}$，正确的是 (A) 若 $\lim x_ny_n=0$ 则必有 $\lim x_n=0$ 或 $\lim y_n=0$　(B) 若 $\lim x_ny_n=\infty$ 则必有 $\lim x_n=\infty$ 或 $\lim y_n=\infty$　(C) 若 $x_ny_n$ 有界则 $x_n,y_n$ 都有界　(D) 若 $x_ny_n$ 无界则必有 $x_n$ 无界或 $y_n$ 无界`, a: R`(D)`, sol: R`(D) 是逆否命题：若 $x_n,y_n$ 都有界，则 $x_ny_n$ 有界。故 $x_ny_n$ 无界必至少一个无界，正确。(A) 反例 $x_n=n,\ y_n=\frac1{n^2}$；(C) 反例 $x_n=n,\ y_n=\frac1n$。选 (D)。` },
      { n: 5, q: R`设 $\lim x_ny_n=\infty$，则结论错误的是 (A) $\lim x_n=\infty$ 与 $\lim y_n=\infty$ 至少一个成立　(B) 至少一个为无界变量　(C) 若 $x_n$ 是无穷小则 $y_n$ 必无界　(D) 若 $\lim x_n=a\neq\infty$ 则 $y_n$ 必为无穷大`, a: R`(A)`, sol: R`(A) 错：取 $x_n=n$（$n$ 偶），$x_n=1$（$n$ 奇）；$y_n=1$（$n$ 偶），$y_n=n$（$n$ 奇），则 $x_ny_n=n\to\infty$，但 $x_n$ 不趋于 $\infty$、$y_n$ 也不趋于 $\infty$。(B)(C)(D) 均正确。选 (A)。` },
      { n: 6, q: R`设 $a_n\le b_n\le a_{n+1}$ 对一切 $n$ 成立，则 (A) 均收敛且极限相等　(B) 均发散且趋于 $+\infty$　(C) 具有相同敛散性　(D) 具有不同敛散性`, a: R`(C)`, sol: R`由 $a_n\le b_n\le a_{n+1}$ 知 $a_n\le a_{n+1}$，$\{a_n\}$ 单调增。若 $\{a_n\}$ 收敛于 $L$，则 $a_{n+1}\to L$，夹逼得 $b_n\to L$；若 $\{a_n\}$ 发散（单调增必趋于 $+\infty$），则 $b_n\ge a_n\to+\infty$。故两者同敛散，选 (C)。` },
      { n: 7, q: R`设 $\lim_{x\to0}\varphi(x)=0$，命题 (1) $\lim\frac{\sin\varphi(x)}{\varphi(x)}=1$ (2) $\lim(1+\varphi(x))^{1/\varphi(x)}=e$ (3) 若 $f'(x_0)=A$ 则 $\lim\frac{f(x_0+\varphi(x))-f(x_0)}{\varphi(x)}=A$ (4) 若 $\lim_{u\to0}f(u)=A$ 则 $\lim f[\varphi(x)]=A$ 中正确的个数 (A) 0　(B) 2　(C) 3　(D) 4`, a: R`(A)`, sol: R`(1)(2)(3) 均需 $\varphi(x)\neq0$，题设未给（如 $\varphi\equiv0$ 时无意义），故不成立；(4) 中 $\varphi(x)\to0$ 可能取到 $0$，而 $\lim_{u\to0}f(u)=A$ 不约束 $f(0)$，故不成立。正确个数为 0，选 (A)。` },
      { n: 8, q: R`$\lim_{x\to\infty}\frac{e^{\sin(1/x)}-1}{(1+1/x)^\alpha-(1+1/x)}=A\neq0$ 的充要条件是 (A) $\alpha>1$　(B) $\alpha\neq1$　(C) $\alpha>0$　(D) 与 $\alpha$ 无关`, a: R`(B)`, sol: R`令 $t=\frac1x\to0$。分子 $e^{\sin t}-1\sim\sin t\sim t$；分母 $(1+t)^\alpha-(1+t)=(1+t)[(1+t)^{\alpha-1}-1]\sim(\alpha-1)t$。原式 $\to\frac{1}{\alpha-1}$，为非零有限数 $\Leftrightarrow\alpha\neq1$。选 (B)。` },
      { n: 9, q: R`已知 $\lim_{x\to0}\frac{\ln(1+2x)+xf(x)}{x^2}=1$，则 $\lim_{x\to0}\frac{2+f(x)}{x}=$ (A) 1　(B) 2　(C) 3　(D) 4`, a: R`(C)`, sol: R`$\ln(1+2x)=2x-2x^2+o(x^2)$，故分子 $=x[2+f(x)]-2x^2+o(x^2)$。除以 $x^2$：$\frac{2+f(x)}{x}-2+o(1)=1$，故 $\lim\frac{2+f(x)}{x}=3$。选 (C)。` },
      { n: 10, q: R`设 $f$ 连续，$\lim_{x\to0}\frac{f(x)}{1-\cos x}=2$，且 $x\to0$ 时 $\int_0^{\sin^2x}f(t)dt$ 是 $x$ 的 $n$ 阶无穷小，则 $n=$ (A) 3　(B) 4　(C) 5　(D) 6`, a: R`(D)`, sol: R`由 $\lim\frac{f(x)}{1-\cos x}=2$ 得 $f(x)\sim2(1-\cos x)\sim x^2$，即 $f(t)\sim t^2$。故 $\int_0^u f(t)dt\sim\int_0^ut^2dt=\frac{u^3}{3}$。取 $u=\sin^2x\sim x^2$，得 $\int_0^{\sin^2x}f(t)dt\sim\frac{x^6}{3}$，$n=6$。选 (D)。` },
      { n: 11, q: R`当 $x\to0$，$f(x)=\arctan x-\sin ax$ 与 $g(x)=bx\ln\sqrt{a+x^2}$ 等价，则 (A) $a=b=1$　(B) $a=2,b=\frac13$　(C) $a=1,b=\frac12$　(D) $a=1,b=-\frac13$`, a: R`(D)`, sol: R`$\arctan x=x-\frac{x^3}{3}+o(x^3)$，$\sin ax=ax-\frac{a^3x^3}{6}+o(x^3)$，故 $f=(1-a)x+\left(-\frac13+\frac{a^3}{6}\right)x^3+o(x^3)$。$g\sim bx\cdot\frac12\ln a$。要等价须 $a=1$，此时 $f=-\frac{x^3}{6}+o(x^3)$，$g\sim\frac b2x^3$，令 $-\frac16=\frac b2$ 得 $b=-\frac13$。选 (D)。` },
      { n: 12, q: R`当 $x\to0$，$f(x)=3\sin x-\sin3x$ 与 $cx^k$ 等价，则 (A) $k=1,c=4$　(B) $k=1,c=-4$　(C) $k=3,c=4$　(D) $k=3,c=-4$`, a: R`(C)`, sol: R`$3\sin x=3x-\frac{x^3}{2}+o(x^3)$，$\sin3x=3x-\frac{27x^3}{6}+o(x^3)=3x-\frac{9x^3}{2}+o(x^3)$，相减得 $f=4x^3+o(x^3)$，故 $k=3,c=4$。选 (C)。` },
      { n: 13, q: R`当 $x\to0^+$，最高阶的无穷小是 (A) $\sqrt{1+x^4}-e^{x^2}$　(B) $\tan x-\sin x$　(C) $\int_0^{\sin x}\sin t^2dt$　(D) $\int_0^{1-\cos x}\sin^{3/2}t\,dt$`, a: R`(D)`, sol: R`(A) $\sqrt{1+x^4}-e^{x^2}=(1+\frac{x^4}{2})-(1+x^2+\frac{x^4}{2})+o(x^2)=-x^2+o(x^2)$，2 阶；(B) $\tan x-\sin x\sim\frac{x^3}{3}$，3 阶；(C) $\int_0^{\sin x}t^2dt=\frac{\sin^3x}{3}\sim\frac{x^3}{3}$，3 阶；(D) $\int_0^{1-\cos x}t^{3/2}dt=\frac25(1-\cos x)^{5/2}\sim\frac25\left(\frac{x^2}{2}\right)^{5/2}\sim\frac{1}{5\sqrt2}x^5$，5 阶。最高阶为 (D)。` },
      { n: 14, q: R`$f(x)=\frac{(e^{1/x}+e)\tan x}{x(e^{1/x}-e)}$ 在 $[-\pi,\pi]$ 上的第一类间断点是 $x=$ (A) 0　(B) 1　(C) $-\frac\pi2$　(D) $\frac\pi2$`, a: R`(A)`, sol: R`$x\to0^+$ 时 $e^{1/x}\to\infty$，$f\sim\frac{e^{1/x}\tan x}{x\,e^{1/x}}=\frac{\tan x}{x}\to1$；$x\to0^-$ 时 $e^{1/x}\to0$，$f\sim\frac{e\tan x}{-x\,e}=-\frac{\tan x}{x}\to-1$。左右极限存在且不等，故 $x=0$ 为第一类跳跃间断点。$x=1,\pm\frac\pi2$ 处为第二类。选 (A)。` },
      { n: 15, q: R`$f(x)=\frac{x^2-x}{x^2-1}\sqrt{1+\frac1{x^2}}$ 的无穷间断点个数为 (A) 0　(B) 1　(C) 2　(D) 3`, a: R`(B)`, sol: R`$\frac{x^2-x}{x^2-1}=\frac{x}{x+1}\ (x\neq1)$，故 $f=\frac{x}{x+1}\cdot\frac{\sqrt{x^2+1}}{|x|}$。$x=1$ 为可去；$x=-1$ 时分母 $x+1\to0$、分子不为零，$f\to\infty$，为无穷间断点；$x=0$ 时左右极限分别为 $\pm1$，为跳跃。无穷间断点仅 $x=-1$，共 1 个。选 (B)。` },
      { n: 16, q: R`$f(x)=\frac{|x|^x-1}{x(x+1)\ln|x|}$ 的可去间断点个数为 (A) 0　(B) 1　(C) 2　(D) 3`, a: R`(C)`, sol: R`$|x|^x-1=e^{x\ln|x|}-1\sim x\ln|x|\ (x\to0)$。$x\to0$：$f\sim\frac{x\ln|x|}{x\ln|x|}=1$，可去；$x\to1$：$\ln|x|\to0$，用展开得极限 $\frac12$，可去；$x\to-1$：$x+1\to0$、$x\ln|x|\neq0$，$f\to\infty$，非可去。可去共 2 个。选 (C)。` },
      { n: 17, q: R`$f(x)=\frac{(x^2+a^2)(x-1)}{e^{1/x}+b}$ 在 $\mathbb{R}$ 上有一个可去间断点和一个跳跃间断点，则 (A) $a=1,b=-1$　(B) $a=0,b=1$　(C) $a\neq0,b=-e$　(D) $a=e,b=-1$`, a: R`(C)`, sol: R`须 $a\neq0$ 使 $x=0$ 处分子不为零。$x\to0^+$：$e^{1/x}\to\infty$，$f\to0$；$x\to0^-$：$e^{1/x}\to0$，$f\to\frac{-a^2}{1+b}$。要使 $x=0$ 为跳跃，需 $1+b\neq0$。可去间断点来自分母为零：$e^{1/x}=-b$，取 $b=-e$ 得 $x=1$，此时分子 $(1+a^2)\cdot0=0$，为可去。故 $a\neq0,b=-e$。选 (C)。` },
      { n: 18, q: R`$f(x)=\lim_{n\to\infty}\frac{2e^{(n+1)x}+1}{e^{nx}+x^2+1}$，则 $f(x)$ (A) 仅一个可去间断点　(B) 仅一个跳跃间断点　(C) 两个可去间断点　(D) 两个跳跃间断点`, a: R`(B)`, sol: R`$x>0$ 时分子分母同除 $e^{nx}$，$f\to2e^x$；$x<0$ 时 $e^{nx}\to0$，$f\to\frac{1}{x^2+1}$；$x=0$ 时 $f=\frac{2+1}{1+0+1}=\frac32$。左极限 $\frac{1}{0+1}=1$，右极限 $2e^0=2$，均存在且不等，故仅 $x=0$ 一个跳跃间断点。选 (B)。` },
      { n: 19, q: R`$\lim_{x\to0}\frac{x-\arcsin x}{(\arcsin x)^3}=$`, a: R`$-\frac16$`, sol: R`$\arcsin x=x+\frac{x^3}{6}+o(x^3)$，故 $x-\arcsin x=-\frac{x^3}{6}+o(x^3)$；又 $(\arcsin x)^3\sim x^3$。原式 $=-\frac16$。` },
      { n: 20, q: R`已知 $\lim_{x\to0}\frac{\alpha x^a}{\sqrt{1+x\arctan x}-\sqrt{\cos x}}=\frac83$，则 $a=$`, a: R`$2$`, sol: R`分母 $=\frac{(1+x\arctan x)-\cos x}{\sqrt{1+x\arctan x}+\sqrt{\cos x}}$。$x\arctan x\sim x^2$，$1+x\arctan x-\cos x=(1+x^2)-(1-\frac{x^2}{2})+o(x^2)=\frac32x^2+o(x^2)$，分母 $\sim\frac{\frac32x^2}{2}=\frac34x^2$。故原式 $=\frac{4\alpha}{3}x^{a-2}\to\frac83$，得 $a=2$（且 $\alpha=2$）。` },
      { n: 21, q: R`曲线 $y=f(x)$ 在 $(0,0)$ 处切线过 $(1,2)$，则 $\lim_{x\to0}\left(\cos x+\int_0^xf(t)dt\right)^{1/x^2}=$`, a: R`$e^{1/2}$`, sol: R`切线斜率 $=\frac{2-0}{1-0}=2$，故 $f(0)=0,\ f'(0)=2$，$f(t)=2t+o(t)$。$\int_0^xf(t)dt=x^2+o(x^2)$。$\cos x+\int_0^xf=\left(1-\frac{x^2}{2}\right)+x^2+o(x^2)=1+\frac{x^2}{2}+o(x^2)$。原式 $=e^{1/2}$。` },
      { n: 22, q: R`$\lim_{x\to0}\left[\frac1{\ln(x+\sqrt{1+x^2})}-\frac1{\ln(1+x)}\right]=$`, a: R`$-\frac12$`, sol: R`记 $A=\ln(x+\sqrt{1+x^2})=x-\frac{x^3}{6}+o(x^3)$，$B=\ln(1+x)=x-\frac{x^2}{2}+\frac{x^3}{3}+o(x^3)$。$\frac1A-\frac1B=\frac{B-A}{AB}$，$B-A=-\frac{x^2}{2}+o(x^2)$，$AB\sim x^2$。原式 $\to-\frac12$。` },
      { n: 23, q: R`设 $n$ 为正整数，则 $\lim_{x\to\infty}\left[\frac{x^n}{(x-1)(x-2)\cdots(x-n)}\right]^x=$`, a: R`$e^{\frac{n(n+1)}2}$`, sol: R`$\frac{x^n}{(x-1)\cdots(x-n)}=\prod_{k=1}^n\left(1-\frac kx\right)^{-1}=1+\frac{1}{x}\sum_{k=1}^nk+o\!\left(\frac1x\right)=1+\frac{n(n+1)}{2x}+o\!\left(\frac1x\right)$。故原式 $=e^{\frac{n(n+1)}2}$。` },
      { n: 24, q: R`求 $\lim_{x\to0}\left(\frac{\ln(x+\sqrt{1+x^2})}{x}\right)^{1/x^2}=$`, a: R`$e^{-1/6}$`, sol: R`$\ln(x+\sqrt{1+x^2})=x-\frac{x^3}{6}+o(x^3)$，故 $\frac{\ln(x+\sqrt{1+x^2})}{x}=1-\frac{x^2}{6}+o(x^2)$，取 $\frac1{x^2}$ 次幂得 $e^{-1/6}$。` },
      { n: 25, q: R`设 $x_n=(1+\frac1{n^2})(1+\frac2{n^2})\cdots(1+\frac n{n^2})$，则 $\lim_{n\to\infty}x_n=$`, a: R`$e^{1/2}$`, sol: R`取对数：$\ln x_n=\sum_{k=1}^n\ln\!\left(1+\frac{k}{n^2}\right)\sim\sum_{k=1}^n\frac{k}{n^2}=\frac{n(n+1)/2}{n^2}\to\frac12$，故 $x_n\to e^{1/2}$。` },
      { n: 26, q: R`$\lim_{n\to\infty}\frac{\sqrt1+\sqrt2+\cdots+\sqrt n}{\sqrt{n(1+2+\cdots+n)}}=$`, a: R`$\frac{2\sqrt2}{3}$`, sol: R`分子 $\sum_{k=1}^n\sqrt k\sim\frac23n^{3/2}$；分母 $\sqrt{n\cdot\frac{n(n+1)}2}\sim\frac{1}{\sqrt2}n^{3/2}$。原式 $\to\frac{2/3}{1/\sqrt2}=\frac{2\sqrt2}{3}$。（按教材题意）` },
      { n: 27, q: R`确定 $a,b$，使 $x\to0$ 时 $f(x)=e^x-\frac{1+ax}{1+bx}$ 为 $x$ 的三阶无穷小。`, a: R`$a=\frac12,\ b=-\frac12$`, sol: R`$\frac{1+ax}{1+bx}=(1+ax)(1-bx+b^2x^2-b^3x^3+\cdots)=1+(a-b)x+(b^2-ab)x^2+(-b^3+ab^2)x^3+\cdots$，$e^x=1+x+\frac{x^2}{2}+\frac{x^3}{6}+\cdots$。故 $f=(1-a+b)x+\left(\frac12-b^2+ab\right)x^2+\left(\frac16+b^3-ab^2\right)x^3+\cdots$。令前两系数为零：$a-b=1$，$\frac12-b^2+ab=0$，解得 $b=-\frac12,a=\frac12$（三次项系数 $-\frac1{12}\neq0$，确为三阶无穷小）。` },
      { n: 28, q: R`当 $x\to0$ 时，$1-\cos x\cos2x\cos3x$ 与 $ax^n$ 为等价无穷小，求 $n,a$。`, a: R`$n=2,\ a=7$`, sol: R`$\cos x\cos2x\cos3x=(1-\frac{x^2}{2}+\cdots)(1-2x^2+\cdots)(1-\frac92x^2+\cdots)=1-\left(\frac12+2+\frac92\right)x^2+\cdots=1-7x^2+\cdots$，故 $1-\cos x\cos2x\cos3x=7x^2+o(x^2)$，$n=2,a=7$。` },
      { n: 29, q: R`已知 $\lim_{x\to0}\frac{(1+\sin2x^2)^{1/x^2}-e^2}{x^n}=a\ (a\neq0)$，求 $a,n$。`, a: R`$n=2,\ a=-2e^2$`, sol: R`$(1+\sin2x^2)^{1/x^2}=e^{\frac{\ln(1+\sin2x^2)}{x^2}}$。$\ln(1+\sin2x^2)=\sin2x^2-\frac{\sin^22x^2}{2}+\cdots=2x^2-2x^4+\cdots$，除以 $x^2$ 得 $2-2x^2+\cdots$。故 $=e^2e^{-2x^2+\cdots}=e^2(1-2x^2+\cdots)$，减去 $e^2$ 得 $-2e^2x^2+\cdots$，$n=2,a=-2e^2$。` },
      { n: 30, q: R`确定 $a,b,c$，使 $\lim_{x\to0}\frac{ax-\sin x}{\int_b^x\frac{\ln(1+t^3)}t dt}=c\ (c\neq0)$。`, a: R`$a=1,\ b=0,\ c=\frac12$`, sol: R`分母在 $x\to0$ 时须趋于 $0$，故 $\int_b^0\frac{\ln(1+t^3)}t dt=0$，得 $b=0$。此时分母 $\sim\int_0^xt^2dt=\frac{x^3}{3}$。分子 $ax-\sin x=(a-1)x+\frac{x^3}{6}+o(x^3)$，须 $a=1$，分子 $\sim\frac{x^3}{6}$。原式 $\to\frac{1/6}{1/3}=\frac12$，故 $a=1,b=0,c=\frac12$。` },
      { n: 31, q: R`求 $\lim_{x\to0}\left(\frac1{\ln(1+x^2)}-\frac1{\sin^2x}\right)$。`, a: R`$\frac16$`, sol: R`通分：$\frac{\sin^2x-\ln(1+x^2)}{\ln(1+x^2)\sin^2x}$。$\sin^2x=x^2-\frac{x^4}{3}+o(x^4)$，$\ln(1+x^2)=x^2-\frac{x^4}{2}+o(x^4)$，分子 $=\frac{x^4}{6}+o(x^4)$，分母 $\sim x^4$。原式 $\to\frac16$。` },
      { n: 32, q: R`求 $\lim_{x\to0^+}\frac{x^x-(\sin x)^x}{x^2\ln(1+x)}$。`, a: R`$\frac16$`, sol: R`$x^x-(\sin x)^x=x^x\left[1-\left(\frac{\sin x}{x}\right)^x\right]$。$\left(\frac{\sin x}{x}\right)^x=e^{x\ln\frac{\sin x}{x}}$，$\ln\frac{\sin x}{x}\sim-\frac{x^2}{6}$，故 $x\ln\frac{\sin x}{x}\sim-\frac{x^3}{6}$，$1-(\cdots)^x\sim\frac{x^3}{6}$，又 $x^x\to1$。分母 $\sim x^3$。原式 $\to\frac16$。` },
      { n: 33, q: R`求 $\lim_{x\to0}\frac{\ln(1+x^2)-\ln(1+\sin^2x)}{x\sin^3x}$。`, a: R`$\frac13$`, sol: R`$\ln(1+x^2)=x^2-\frac{x^4}{2}+o(x^4)$；$\ln(1+\sin^2x)=\sin^2x-\frac{\sin^4x}{2}+o(x^4)=\left(x^2-\frac{x^4}{3}\right)-\frac{x^4}{2}+o(x^4)=x^2-\frac56x^4+o(x^4)$。分子 $=\left(-\frac12+\frac56\right)x^4=\frac13x^4$；分母 $x\sin^3x\sim x^4$。原式 $\to\frac13$。` },
      { n: 34, q: R`求 $\lim_{x\to+\infty}\frac{\int_1^x[t^2(e^{1/t}-1)-t]dt}{x^2\ln(1+1/x)}$。`, a: R`$\frac12$`, sol: R`$t^2(e^{1/t}-1)=t^2\left(\frac1t+\frac1{2t^2}+\frac1{6t^3}+\cdots\right)=t+\frac12+\frac1{6t}+\cdots$，故被积函数 $=\frac12+\frac1{6t}+\cdots\to\frac12$。分子 $\sim\int_1^x\frac12dt\sim\frac{x}{2}$；分母 $x^2\ln(1+\frac1x)\sim x^2\cdot\frac1x=x$。原式 $\to\frac12$。` },
      { n: 35, q: R`求下列极限 (1) $\lim_{x\to0}\left(\frac{\ln(1+x)}x\right)^{1/(e^x-1)}$ (2) $\lim_{x\to0}\left(\frac{e^x+e^{2x}+\cdots+e^{nx}}n\right)^{1/x}$ (3) $\lim_{n\to\infty}(n\tan\frac1n)^{n^2}$ (4) $\lim_{n\to\infty}\tan^n(\frac\pi4+\frac2n)$`, a: R`(1) $e^{-1/2}$　(2) $e^{(n+1)/2}$　(3) $e^{1/3}$　(4) $e^4$`, sol: R`(1) $\frac{\ln(1+x)}x=1-\frac x2+\cdots$，$\ln(\cdot)\sim-\frac x2$，$\frac1{e^x-1}\sim\frac1x$，乘积 $\to-\frac12$，极限 $e^{-1/2}$。
(2) 记 $S=\frac1n\sum_{k=1}^ne^{kx}=1+\frac1n\cdot\frac{n(n+1)}2x+\cdots=1+\frac{(n+1)x}{2}+\cdots$，$\ln S\sim\frac{(n+1)x}{2}$，乘 $\frac1x$ 得 $\frac{n+1}{2}$，极限 $e^{(n+1)/2}$。
(3) $n\tan\frac1n=1+\frac1{3n^2}+\cdots$，取 $n^2$ 次幂得 $e^{1/3}$。
(4) $\tan(\frac\pi4+u)=\frac{1+\tan u}{1-\tan u}\approx1+2u$，取 $u=\frac2n$ 得 $\approx1+\frac4n$，取 $n$ 次幂得 $e^4$。` },
      { n: 36, q: R`求下列极限 (1) $\lim_{x\to+\infty}(x+\sqrt{1+x^2})^{1/x}$ (2) $\lim_{x\to0^+}(x^{1/x}-1)^{1/\ln x}$`, a: R`(1) $1$　(2) 见解答`, sol: R`(1) $\frac{\ln(x+\sqrt{1+x^2})}{x}\to0$，故原式 $=e^0=1$。
(2) 题面疑为印刷/识别误差：$x\to0^+$ 时 $x^{1/x}=e^{\frac{\ln x}{x}}\to0$，底数 $x^{1/x}-1\to-1$ 为负数，指数 $\frac1{\ln x}\to0$，原式在实数范围无意义。原书答案为 $e^{-1}$，对应形如 $(1-u)^{1/u}$ 的结构；请以教材原题为准。` },
      { n: 37, q: R`已知 $f$ 在 $x=0$ 某邻域可导，$\lim_{x\to0}\left(\frac{\sin x}{x^2}+\frac{f(x)}x\right)=2$，求 $f(0),f'(0)$ 及 $\lim_{x\to0}\frac{x}{f(x)+e^x}$。`, a: R`$f(0)=-1,\ f'(0)=2,\ \lim\frac{x}{f(x)+e^x}=\frac13$`, sol: R`$\frac{\sin x}{x^2}=\frac1x-\frac x6+\cdots$；$\frac{f(x)}x=\frac{f(0)}x+f'(0)+\cdots$。极限存在要求 $\frac1x+\frac{f(0)}x\to0$，故 $f(0)=-1$；再由 $-\frac x6+f'(0)+\cdots\to2$ 得 $f'(0)=2$。于是 $f(x)=-1+2x+\cdots$，$e^x=1+x+\cdots$，$f(x)+e^x=3x+\cdots$，故 $\lim\frac{x}{f(x)+e^x}=\frac13$。` },
      { n: 38, q: R`求 $\lim_{n\to\infty}\left(\frac1{\sqrt{n^6+n}}+\frac{2^2}{\sqrt{n^6+2n}}+\cdots+\frac{n^2}{\sqrt{n^6+n^2}}\right)$。`, a: R`$\frac13$`, sol: R`第 $k$ 项 $\frac{k^2}{\sqrt{n^6+kn}}\sim\frac{k^2}{n^3}$。原式 $\to\lim\frac1{n^3}\sum_{k=1}^nk^2=\lim\frac{n(n+1)(2n+1)}{6n^3}=\frac13$。` },
      { n: 39, q: R`求 $\lim_{n\to\infty}\left(\frac1{\sqrt{n^2}}+\frac1{\sqrt{n^2-1^2}}+\cdots+\frac1{\sqrt{n^2-(n-1)^2}}\right)$。`, a: R`$\frac\pi2$`, sol: R`原式 $=\sum_{k=0}^{n-1}\frac1{\sqrt{n^2-k^2}}=\sum_{k=0}^{n-1}\frac1n\cdot\frac1{\sqrt{1-(k/n)^2}}\to\int_0^1\frac{dx}{\sqrt{1-x^2}}=\arcsin1=\frac\pi2$。` },
      { n: 40, q: R`求 $\lim_{n\to\infty}\left(\frac{n+1}{1^2+n^2}+\frac{n+\frac12}{2^2+n^2}+\cdots+\frac{n+\frac1n}{n^2+n^2}\right)$。`, a: R`$\frac\pi4$`, sol: R`第 $k$ 项 $=\frac{n+\frac1k}{n^2+k^2}=\frac1n\cdot\frac{1+\frac1{nk}}{1+(k/n)^2}$。其中 $\frac{1/(nk)}{1+(k/n)^2}$ 部分求和后 $\to0$，故原式 $\to\int_0^1\frac{dx}{1+x^2}=\frac\pi4$。` },
      { n: 41, q: R`求 $f(x)=\begin{cases}\frac{x|x+1|}{\ln|x|},&x\neq0\\1,&x=0\end{cases}$ 的间断点并指出类型。`, a: R`$x=1$ 无穷；$x=-1$ 跳跃；$x=0$ 可去`, sol: R`$x=1$：$\ln|x|=0$、分子 $2\neq0$，$f\to\infty$，无穷间断点。$x=-1$：分子 $\to0$、分母 $\ln|x|\to0$，令 $x=-1+\varepsilon$，$f\approx\frac{-|\varepsilon|}{-\varepsilon}=\pm1$，左右极限存在不等，跳跃间断点。$x=0$：$f\to0\neq f(0)=1$，可去间断点。` },
      { n: 42, q: R`设 $f(x)=\lim_{n\to\infty}\frac{x^{2n-1}+ax^2+bx}{x^{2n}+1}$ 在 $\mathbb{R}$ 上连续，求 $a,b$。`, a: R`$a=0,\ b=1$`, sol: R`$|x|>1$ 时 $f\to\frac1x$；$|x|<1$ 时 $f\to ax^2+bx$；$|x|=1$ 时 $f(1)=\frac{1+a+b}{2}$，$f(-1)=\frac{-1+a-b}{2}$。在 $x=1$ 处连续：$a+b=1$ 且 $\frac{1+a+b}{2}=1$（一致）；在 $x=-1$ 处：$a-b=-1$ 且 $\frac{-1+a-b}{2}=-1$（一致）。解得 $a=0,b=1$。` },
      { n: 43, q: R`设 $f$ 在 $[0,+\infty)$ 单调减少且非负连续，$a_n=\sum_{k=1}^nf(k)-\int_1^nf(x)dx$，证明 $\{a_n\}$ 极限存在。`, a: R`证明见解答`, sol: R`$a_{n+1}-a_n=f(n+1)-\int_n^{n+1}f(x)dx$。因 $f$ 单调减，$f(x)\ge f(n+1)$（$x\in[n,n+1]$），故 $\int_n^{n+1}f\ge f(n+1)$，得 $a_{n+1}-a_n\le0$，$\{a_n\}$ 单调减。又 $f(x)\le f(k)$（$x\in[k,k+1]$）给出 $\int_1^nf\le\sum_{k=1}^{n-1}f(k)\le\sum_{k=1}^nf(k)$，故 $a_n\ge0$。单调减有下界，极限存在。` },
      { n: 44, q: R`设 $x_1=\sqrt2,\ x_{n+1}=\sqrt{3+2x_n}$，证明 $\{x_n\}$ 收敛并求极限。`, a: R`极限为 $3$`, sol: R`$x_2=\sqrt{3+2\sqrt2}=1+\sqrt2>x_1$。$f(x)=\sqrt{3+2x}$ 单调增，故 $\{x_n\}$ 单调增；又若 $x_n<3$ 则 $x_{n+1}=\sqrt{3+2x_n}<\sqrt9=3$，故有上界。极限存在，设为 $L$，$L=\sqrt{3+2L}\Rightarrow L^2=3+2L\Rightarrow L=3$（舍 $-1$）。` },
      { n: 45, q: R`设 $x_1=1,\ x_{n+1}=\frac{x_n+2}{x_n+1}$，证明 $\lim_{n\to\infty}x_n=\sqrt2$。`, a: R`证明见解答`, sol: R`$x_{n+1}-\sqrt2=\frac{x_n+2-\sqrt2(x_n+1)}{x_n+1}=\frac{(1-\sqrt2)(x_n-\sqrt2)}{x_n+1}$。故 $|x_{n+1}-\sqrt2|=\frac{\sqrt2-1}{x_n+1}|x_n-\sqrt2|\le\frac12|x_n-\sqrt2|\le\cdots\le\frac1{2^n}|x_1-\sqrt2|\to0$，故 $x_n\to\sqrt2$。` },
      { n: 46, q: R`设 $f(x)=\ln x+\frac1x$。(1) 求最小值；(2) 设 $\{x_n\}$ 满足 $\ln x_n+\frac1{x_{n+1}}<1$，证明 $\lim x_n$ 存在并求之。`, a: R`(1) 最小值 $1$（在 $x=1$）；(2) 极限 $1$`, sol: R`(1) $f'(x)=\frac1x-\frac1{x^2}=\frac{x-1}{x^2}$，$x=1$ 为极小值点，$f(1)=1$，且为全局最小值。
(2) 由最小值 $\ln x_n+\frac1{x_n}\ge1$，与题设 $\ln x_n+\frac1{x_{n+1}}<1$ 比较得 $\frac1{x_{n+1}}<\frac1{x_n}$，即 $x_{n+1}>x_n$，$\{x_n\}$ 递增；又 $\ln x_n<1$ 得 $x_n<e$，有上界，故收敛于 $L$。取极限得 $\ln L+\frac1L\le1$ 且 $\ge1$，故 $=1$，$L=1$。` },
      { n: 47, q: R`设 $x_1>0,\ x_{n+1}=\ln(1+x_n)$，证明 (1) $\{x_n\}$ 收敛并求极限；(2) 计算 $\lim\left(\frac{x_{n+1}}{x_n}\right)^{1/x_n}$ 及 $\lim\left[\frac1{x_n}-\frac1{x_{n+1}}\right]$。`, a: R`(1) 极限 $0$；(2) $e^{-1/2}$ 与 $-\frac12$`, sol: R`(1) $\ln(1+x)<x\ (x>0)$ 得 $x_{n+1}<x_n$，递减且 $x_n>0$，收敛于 $L$，$L=\ln(1+L)\Rightarrow L=0$。
(2) $x_{n+1}=x_n-\frac{x_n^2}{2}+o(x_n^2)$，故 $\frac{x_{n+1}}{x_n}=1-\frac{x_n}{2}+o(x_n)$，$\ln\frac{x_{n+1}}{x_n}\sim-\frac{x_n}{2}$，乘 $\frac1{x_n}$ 得 $-\frac12$，极限 $e^{-1/2}$。又 $x_{n+1}-x_n=-\frac{x_n^2}{2}+o(x_n^2)$，$\frac1{x_n}-\frac1{x_{n+1}}=\frac{x_{n+1}-x_n}{x_nx_{n+1}}\sim\frac{-\frac12x_n^2}{x_n^2}=-\frac12$。` },
      { n: 48, q: R`设 $f$ 在 $[0,2a]$ 连续，$f(0)=f(2a)$，求证存在 $\xi\in[0,a]$ 使 $f(\xi)=f(\xi+a)$。`, a: R`证明见解答`, sol: R`令 $F(x)=f(x)-f(x+a),\ x\in[0,a]$。$F(0)=f(0)-f(a)$，$F(a)=f(a)-f(2a)=f(a)-f(0)=-F(0)$。若 $F(0)=0$ 取 $\xi=0$；否则 $F(0)$ 与 $F(a)$ 异号，由零点定理存在 $\xi\in(0,a)$ 使 $F(\xi)=0$，即 $f(\xi)=f(\xi+a)$。` },
      { n: 49, q: R`设 $f$ 在 $[a,b]$ 连续，$x_i\in[a,b],\ t_i>0,\ \sum_{i=1}^nt_i=1$，试证存在 $\xi\in[a,b]$ 使 $f(\xi)=t_1f(x_1)+\cdots+t_nf(x_n)$。`, a: R`证明见解答`, sol: R`设 $m=\min_{[a,b]}f,\ M=\max_{[a,b]}f$，则 $m\le f(x_i)\le M$。由 $\sum t_i=1$ 得 $m=\sum t_im\le\sum t_if(x_i)\le\sum t_iM=M$。由介值定理，存在 $\xi\in[a,b]$ 使 $f(\xi)=\sum_{i=1}^nt_if(x_i)$。` }
    ],
    quiz: [
      { q: R`$f(x)$ 在 $x_0$ 处连续的充要条件是`, options: [R`在 $x_0$ 左连续`, R`在 $x_0$ 右连续`, R`在 $x_0$ 左连续且右连续`, R`在 $x_0$ 有定义`], answer: 2, explain: R`连续 $\Leftrightarrow$ 左连续且右连续，且等于函数值。` },
      { q: R`$x=0$ 是 $f(x)=\sin\frac1x$ 的`, options: [R`可去间断点`, R`跳跃间断点`, R`振荡间断点`, R`无穷间断点`], answer: 2, explain: R`$x\to0$ 时函数值在 $[-1,1]$ 内无限振荡，属第二类振荡间断点。` },
      { q: R`第一类间断点是指`, options: [R`左、右极限都存在的间断点`, R`至少一个单侧极限不存在`, R`极限为无穷`, R`函数无定义`], answer: 0, explain: R`按左右极限是否都存在分类。` },
      { q: R`可去间断点的特征是`, options: [R`左右极限存在且相等，但不等于函数值或函数无定义`, R`左右极限存在但不等`, R`极限为无穷`, R`振荡不存在`], answer: 0, explain: R`补定义或改定义即可连续。` },
      { q: R`闭区间上连续函数的性质不包括`, options: [R`有界性`, R`最值性`, R`介值性`, R`可导性`], answer: 3, explain: R`连续不一定可导。` },
      { q: R`设 $f$ 在 $[a,b]$ 连续且 $f(a)f(b)<0$，则`, options: [R`存在 $\xi\in(a,b)$ 使 $f(\xi)=0$`, R`$f$ 单调`, R`$f$ 可导`, R`$f$ 有最大值`], answer: 0, explain: R`零点定理。` },
      { q: R`$x=0$ 是 $f(x)=\frac1x$ 的`, options: [R`可去间断点`, R`跳跃间断点`, R`无穷间断点`, R`振荡间断点`], answer: 2, explain: R`左右极限均为无穷。` },
      { q: R`设 $f$ 在 $[0,1]$ 连续且 $f(0)=f(1)$，则必存在 $\xi$ 使`, options: [R`$f(\xi)=f(\xi+\frac12)$`, R`$f(\xi)=0$`, R`$f'(\xi)=0$`, R`$f(\xi)=f(0)$`], answer: 0, explain: R`令 $F(x)=f(x+\frac12)-f(x)$，$F(0)+F(\frac12)=0$。` },
      { q: R`跳跃间断点的左、右极限`, options: [R`存在且相等`, R`存在但不等`, R`至少一个不存在`, R`都为无穷`], answer: 1, explain: R`第一类、左右极限都存在但不相等。` },
      { q: R`初等函数在其定义区间内`, options: [R`连续`, R`可导`, R`有界`, R`单调`], answer: 0, explain: R`初等函数在其定义区间内连续。` },
      { q: R`$x=0$ 是 $f(x)=\frac{x}{|x|}$ 的`, options: [R`可去间断点`, R`跳跃间断点`, R`无穷间断点`, R`振荡间断点`], answer: 1, explain: R`左极限 $-1$、右极限 $1$。` },
      { q: R`若 $f\in C[a,b]$，则 $f$ 在 $[a,b]$ 上`, options: [R`有界`, R`无界`, R`单调`, R`可导`], answer: 0, explain: R`闭区间连续函数的有界性。` }
    ]
  };
})();
