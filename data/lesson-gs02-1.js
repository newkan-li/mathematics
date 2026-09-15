window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["gs02_s0"] = {
    id: "gs02_s0",
    ch: "第二章 一元函数微分学",
    title: "第一节 导数与微分",
    book: "武忠祥《高等数学辅导讲义》",
    pages: [49, 62],
    img: "assets/img/gaoshu",
    content: [
      { p: 49, md: R`### 一、考试内容要点精讲
#### （一）导数概念
定义 1（导数）设函数 $y=f(x)$ 在 $x_0$ 的某邻域内有定义，如果极限

$$\lim_{\Delta x\to0}\frac{\Delta y}{\Delta x}=\lim_{\Delta x\to0}\frac{f(x_0+\Delta x)-f(x_0)}{\Delta x}$$

存在，则称 $f(x)$ 在点 $x_0$ 处可导，并称此极限值为 $f(x)$ 在点 $x_0$ 处的导数，记为 $f'(x_0)$，或 $y'|_{x=x_0}$，或 $\left.\dfrac{dy}{dx}\right|_{x=x_0}$。如果上述极限不存在，则称 $f(x)$ 在点 $x_0$ 处不可导。

【注】常用的导数定义的等价形式有：

$$f'(x_0)=\lim_{x\to x_0}\frac{f(x)-f(x_0)}{x-x_0},\qquad f'(x_0)=\lim_{h\to0}\frac{f(x_0+h)-f(x_0)}{h}.$$

定义 2（左导数）若左极限

$$\lim_{\Delta x\to0^-}\frac{\Delta y}{\Delta x}=\lim_{x\to x_0^-}\frac{f(x)-f(x_0)}{x-x_0}$$

存在，则称该极限值为 $f(x)$ 在点 $x_0$ 处的左导数，记为 $f'_-(x_0)$。

定义 3（右导数）若右极限

$$\lim_{\Delta x\to0^+}\frac{\Delta y}{\Delta x}=\lim_{x\to x_0^+}\frac{f(x)-f(x_0)}{x-x_0}$$

存在，则称该极限值为 $f(x)$ 在点 $x_0$ 处的右导数，记为 $f'_+(x_0)$。

**定理** 可导 $\Leftrightarrow$ 左右导数都存在且相等。

#### （二）微分概念
定义 若 $\Delta y=f(x_0+\Delta x)-f(x_0)=A\Delta x+o(\Delta x)$，其中 $A$ 为不依赖于 $\Delta x$ 的常数，则称函数 $f(x)$ 在点 $x_0$ 处可微，称 $A\Delta x$ 为函数 $f(x)$ 在点 $x_0$ 处相应于自变量增量 $\Delta x$ 的微分，记为 $dy=A\Delta x$。

**定理** 函数 $y=f(x)$ 在点 $x_0$ 处可微的充分必要条件是 $f(x)$ 在点 $x_0$ 处可导，且有 $dy=f'(x_0)\Delta x=f'(x_0)dx$。` },
      { p: 50, md: R`#### （三）导数与微分的几何意义
1) 导数 $f'(x_0)$ 在几何上表示曲线 $y=f(x)$ 在点 $(x_0,f(x_0))$ 处切线的斜率。

2) 微分 $dy=f'(x_0)dx$ 在几何上表示曲线 $y=f(x)$ 的切线上的增量；$\Delta y=f(x_0+\Delta x)-f(x_0)$ 表示曲线上的增量，且 $\Delta y\approx dy$。

#### （四）连续、可导、可微之间的关系
【注】1) 连续 $\nRightarrow$ 可导，连续 $\nRightarrow$ 可微，经典反例为 $f(x)=|x|$；

2) $f(x)$ 可导 $\Rightarrow f(x)$ 连续；$f(x)$ 可导 $\nRightarrow f'(x)$ 连续，$f(x)$ 可导 $\nRightarrow \lim\limits_{x\to x_0}f'(x)$ 存在。

例如 $f(x)=\begin{cases}x^2\sin\dfrac1x,&x\neq0\\0,&x=0\end{cases}$ 处处可导，但 $\lim\limits_{x\to0}f'(x)$ 不存在，从而 $f'(x)$ 在 $x=0$ 处也不连续。

#### （五）求导公式
1) $(C)'=0$；2) $(x^\alpha)'=\alpha x^{\alpha-1}$；3) $(a^x)'=a^x\ln a$；4) $(e^x)'=e^x$；5) $(\log_a x)'=\dfrac{1}{x\ln a}$；6) $(\ln|x|)'=\dfrac1x$；7) $(\sin x)'=\cos x$；8) $(\cos x)'=-\sin x$；9) $(\tan x)'=\sec^2x$；10) $(\cot x)'=-\csc^2x$；11) $(\sec x)'=\sec x\tan x$；12) $(\csc x)'=-\csc x\cot x$；13) $(\arcsin x)'=\dfrac{1}{\sqrt{1-x^2}}$；14) $(\arccos x)'=-\dfrac{1}{\sqrt{1-x^2}}$；15) $(\arctan x)'=\dfrac{1}{1+x^2}$；16) $(\operatorname{arccot}x)'=-\dfrac{1}{1+x^2}$。

#### （六）求导法则
**（1）有理运算法则** 设 $u=u(x),v=v(x)$ 在 $x$ 处可导，则

1) $(u\pm v)'=u'\pm v'$；2) $(uv)'=u'v+uv'$；3) $\left(\dfrac uv\right)'=\dfrac{u'v-uv'}{v^2}\ (v\neq0)$。` },
      { p: 51, md: R`**（2）复合函数求导法** 设 $u=\varphi(x)$ 在 $x$ 处可导，$y=f(u)$ 在对应点处可导，则复合函数 $y=f[\varphi(x)]$ 在 $x$ 处可导，且

$$\frac{dy}{dx}=\frac{dy}{du}\cdot\frac{du}{dx}=f'(u)\varphi'(x).$$

**（3）隐函数求导法** 设 $y=y(x)$ 是由方程 $F(x,y)=0$ 所确定的可导函数，可在方程两边对 $x$ 求导，得到含 $y'$ 的方程，解出 $y'$。

【注】$y'$ 也可由隐函数求导公式 $\dfrac{dy}{dx}=-\dfrac{F'_x}{F'_y}$ 得到。

**（4）反函数的导数** 若 $x=\varphi(y)$ 在某区间内单调、可导，且 $\varphi'(y)\neq0$，则其反函数 $y=f(x)$ 在对应区间内也可导，且 $f'(x)=\dfrac{1}{\varphi'(y)}$，即 $\dfrac{dy}{dx}=\dfrac{1}{\frac{dx}{dy}}$。

**（5）参数方程求导法（数学三不要求）** 设 $y=y(x)$ 由 $\begin{cases}x=\varphi(t)\\y=\psi(t)\end{cases}$ 确定，则

1) 若 $\varphi(t),\psi(t)$ 可导且 $\varphi'(t)\neq0$，则 $\dfrac{dy}{dx}=\dfrac{\psi'(t)}{\varphi'(t)}$；

2) 若 $\varphi(t),\psi(t)$ 二阶可导且 $\varphi'(t)\neq0$，则 $\dfrac{d^2y}{dx^2}=\dfrac{\psi''(t)\varphi'(t)-\varphi''(t)\psi'(t)}{\varphi'^3(t)}$。

**（6）对数求导法** 若 $y=y(x)$ 由多个因式的乘除、乘幂构成，或是幂指函数，可先取对数再两边对 $x$ 求导。

**（7）高阶导数**
1) 定义：$f^{(n)}(x_0)=\lim\limits_{\Delta x\to0}\dfrac{f^{(n-1)}(x_0+\Delta x)-f^{(n-1)}(x_0)}{\Delta x}$。

2) 常用公式：① $(\sin x)^{(n)}=\sin\left(x+n\cdot\dfrac\pi2\right)$；② $(\cos x)^{(n)}=\cos\left(x+n\cdot\dfrac\pi2\right)$；③ $(u\pm v)^{(n)}=u^{(n)}\pm v^{(n)}$；④ $(uv)^{(n)}=\sum\limits_{k=0}^nC_n^ku^{(k)}v^{(n-k)}$。

### 二、常考题型的方法与技巧
### 题型一　导数与微分概念
本题型主要有三种：1) 利用导数定义求极限；2) 利用导数定义求导数；3) 利用导数定义判断函数的可导性。` },
      { p: 52, md: R`#### （一）利用导数定义求极限
【例1】设 $f(-1)=1$，$f'(-1)=2$，则 $\lim\limits_{x\to1}\dfrac{f(2-3x)-1}{x-1}=$______。

【解1】$\lim\limits_{x\to1}\dfrac{f(2-3x)-1}{x-1}=\lim\limits_{x\to1}\dfrac{f[-1+3(1-x)]-f(-1)}{3(1-x)}\cdot\dfrac{3(1-x)}{x-1}=f'(-1)\cdot(-3)=-6$。

【解2】取 $f(x)=2x+3$，显然满足条件，代入得 $\lim\limits_{x\to1}\dfrac{f(2-3x)-1}{x-1}=\lim\limits_{x\to1}\dfrac{6(1-x)}{x-1}=-6$。

【例2】设 $f'(a)$ 存在，且 $f(a)\neq0$，求极限 $\lim\limits_{n\to\infty}\left[\dfrac{f\left(a+\frac1n\right)}{f(a)}\right]^n$。

【分析】这是一个 $1^\infty$ 型极限。

【解】原式 $=\lim\limits_{n\to\infty}\left[1+\dfrac{f\left(a+\frac1n\right)-f(a)}{f(a)}\right]^n$，又 $\lim\limits_{n\to\infty}\dfrac{f\left(a+\frac1n\right)-f(a)}{f(a)}\cdot n=\dfrac{1}{f(a)}\lim\limits_{n\to\infty}\dfrac{f\left(a+\frac1n\right)-f(a)}{\frac1n}=\dfrac{f'(a)}{f(a)}$，则原式 $=e^{\frac{f'(a)}{f(a)}}$。

【例3】设函数 $f(x)$ 在 $x=0$ 处可导，且 $f(0)=0$，则 $\lim\limits_{x\to0}\dfrac{x^2f(x)-2f(x^3)}{x^3}=$ (A) $-2f'(0)$　(B) $-f'(0)$　(C) $f'(0)$　(D) $0$

【解1】直接法：原式 $=\lim\limits_{x\to0}\dfrac{f(x)}{x}-2\lim\limits_{x\to0}\dfrac{f(x^3)}{x^3}=f'(0)-2f'(0)=-f'(0)$。

【解2】排除法：取 $f(x)=x$，则 $f'(0)=1$，原式 $=\lim\limits_{x\to0}\dfrac{x^3-2x^3}{x^3}=-1$，故 (A)(C)(D) 都不正确，选 (B)。

【例4】设曲线 $y=f(x)$ 与 $y=x^2-x$ 在点 $(1,0)$ 处有公共切线，则 $\lim\limits_{n\to\infty}nf\left(\dfrac{n}{n+2}\right)=$______。

【解1】由公共切线知 $f(1)=0$，$f'(1)=(2x-1)|_{x=1}=1$。` },
      { p: 53, md: R`$\lim\limits_{n\to\infty}nf\left(\dfrac{n}{n+2}\right)=\lim\limits_{n\to\infty}\dfrac{-2n}{n+2}\cdot\dfrac{f\left(1+\frac{-2}{n+2}\right)-f(1)}{\frac{-2}{n+2}}=-2f'(1)=-2$。

【解2】取 $f(x)=x-1$，代入得 $\lim\limits_{n\to\infty}n\left(\dfrac{n}{n+2}-1\right)=\lim\limits_{n\to\infty}\dfrac{-2n}{n+2}=-2$。

#### （二）利用导数定义求导数
【例1】设函数 $f(x)=(e^x-1)(e^{2x}-2)\cdots(e^{nx}-n)$，$n$ 为正整数，则 $f'(0)=$ (A) $(-1)^{n-1}(n-1)!$　(B) $(-1)^n(n-1)!$　(C) $(-1)^{n-1}n!$　(D) $(-1)^nn!$

【解1】显然 $f(0)=0$，由定义 $f'(0)=\lim\limits_{x\to0}\dfrac{f(x)}{x}=\lim\limits_{x\to0}\dfrac{e^x-1}{x}\lim\limits_{x\to0}(e^{2x}-2)\cdots(e^{nx}-n)=(1-2)(1-3)\cdots(1-n)=(-1)^{n-1}(n-1)!$。

【解2】令 $g(x)=(e^{2x}-2)\cdots(e^{nx}-n)$，则 $f'(x)=e^xg(x)+(e^x-1)g'(x)$，$f'(0)=g(0)=(-1)^{n-1}(n-1)!$。

【例2】设 $f(x)=\begin{cases}(1+x^2)^{\frac{1}{\sin x}},&x\neq0\\1,&x=0\end{cases}$，则 $f'(0)=$______。

【解】$f'(0)=\lim\limits_{x\to0}\dfrac{f(x)-f(0)}{x}=\lim\limits_{x\to0}\dfrac{(1+x^2)^{\frac{1}{\sin x}}-1}{x}=\lim\limits_{x\to0}\dfrac{\ln(1+x^2)}{x\sin x}=\lim\limits_{x\to0}\dfrac{x^2}{x^2}=1$。

【注】分段函数在分界点处的导数一般都要用定义求。

#### （三）利用导数定义判定可导性
【例1】设函数 $f(x)$ 在 $x=0$ 处连续，下列命题错误的是 (A) 若 $\lim\limits_{x\to0}\dfrac{f(x)}{x}$ 存在，则 $f(0)=0$　(B) 若 $\lim\limits_{x\to0}\dfrac{f(x)+f(-x)}{x}$ 存在，则 $f(0)=0$　(C) 若 $\lim\limits_{x\to0}\dfrac{f(x)}{x}$ 存在，则 $f'(0)$ 存在　(D) 若 $\lim\limits_{x\to0}\dfrac{f(x)-f(-x)}{x}$ 存在，则 $f'(0)$ 存在

【解1】直接法：令 $f(x)=|x|$，则 $f'(0)$ 不存在，但 $\lim\limits_{x\to0}\dfrac{f(x)-f(-x)}{x}=0$ 存在，故 (D) 的命题错误，选 (D)。

【解2】排除法：由 $\lim\limits_{x\to0}\dfrac{f(x)}{x}$ 存在且分母趋于零，得 $\lim\limits_{x\to0}f(x)=0$；又 $f$ 在 $x=0$ 连续，则 $f(0)=0$，即 (A) 正确，同理 (B) 正确。` },
      { p: 54, md: R`由 $\lim\limits_{x\to0}\dfrac{f(x)}{x}=0$ 知 $f(0)=0$，则 $\lim\limits_{x\to0}\dfrac{f(x)}{x}=\lim\limits_{x\to0}\dfrac{f(x)-f(0)}{x}=0=f'(0)$，从而 (C) 也正确。故应选 (D)。

【例2】设 $f(0)=0$，则 $f(x)$ 在点 $x=0$ 可导的充要条件为 (A) $\lim\limits_{h\to0}\dfrac{1}{h^2}f(1-\cos h)$ 存在　(B) $\lim\limits_{h\to0}\dfrac1hf(1-e^h)$ 存在　(C) $\lim\limits_{h\to0}\dfrac{1}{h^2}f(h-\sin h)$ 存在　(D) $\lim\limits_{h\to0}\dfrac1h[f(2h)-f(h)]$ 存在

【解1】直接法：$\lim\limits_{h\to0}\dfrac1hf(1-e^h)=\lim\limits_{h\to0}\dfrac{f(1-e^h)-f(0)}{1-e^h}\cdot\dfrac{1-e^h}{h}=-\lim\limits_{t\to0}\dfrac{f(t)-f(0)}{t}=-f'(0)$（令 $1-e^h=t$），故应选 (B)。

【解2】排除法：(A) 中 $1-\cos h\to0^+$，只能推得右导数存在，不正确；(C) 中 $\lim\limits_{h\to0}\dfrac{h-\sin h}{h^2}=0$，取 $f(x)=x^{\frac23}$，极限存在但 $f'(0)=\infty$，不正确；(D) 取 $f(x)=\begin{cases}1,&x\neq0\\0,&x=0\end{cases}$，$f'(0)$ 不存在但 $\lim\limits_{h\to0}\dfrac1h[f(2h)-f(h)]=0$，不正确。故应选 (B)。

【例3】设 $f(x)$ 可导，$F(x)=f(x)(1+|\sin x|)$，则 $f(0)=0$ 是 $F(x)$ 在 $x=0$ 可导的 (A) 充分必要条件　(B) 充分条件但非必要条件　(C) 必要条件但非充分条件　(D) 既非充分又非必要条件` },
      { p: 55, md: R`【解】由于 $F(x)=f(x)+f(x)|\sin x|$，$f(x)$ 可导，故 $F(x)$ 在 $x=0$ 可导的充要条件是 $f(x)|\sin x|$ 在 $x=0$ 可导。令 $\varphi(x)=f(x)|\sin x|$，则

$$\lim_{x\to0}\frac{\varphi(x)-\varphi(0)}{x-0}=\lim_{x\to0}\frac{f(x)|\sin x|}{x}=\begin{cases}f(0),&x\to0^+\\-f(0),&x\to0^-\end{cases}$$

从而 $f(0)=0$ 是 $\varphi(x)$ 在 $x=0$ 可导的充要条件，故应选 (A)。

【注】常用结论：设 $f(x)=\varphi(x)|x-a|$，$\varphi(x)$ 在 $x=a$ 处连续，则 $f(x)$ 在 $x=a$ 处可导的充要条件是 $\varphi(a)=0$。

【例4】函数 $f(x)=(x^2-x-2)|x^3-x|$ 不可导的点的个数是 (A) 3　(B) 2　(C) 1　(D) 0

【解1】$f(x)=(x-2)(x+1)|x+1||x-1||x|$。不可导点最多三个：$x=-1,1,0$。在 $x=1$，$f(x)=|x-1|\varphi(x)$，其中 $\varphi(x)=(x-2)(x+1)|x+1||x|$，$\varphi(1)=-4\neq0$，由注知 $f$ 在 $x=1$ 不可导；同理 $x=0$ 不可导，而 $x=-1$ 可导。故应选 (B)。

【解2】由 $|x|$ 在 $x=0$ 不可导而 $x|x|$ 在 $x=0$ 可导可知，$f(x)$ 在 $x=0,x=1$ 不可导，在 $x=-1$ 可导。

【例5】设 $f(x)$ 在点 $x=a$ 处可导，则函数 $|f(x)|$ 在点 $x=a$ 处不可导的充分条件是 (A) $f(a)=0$ 且 $f'(a)=0$　(B) $f(a)=0$ 且 $f'(a)\neq0$　(C) $f(a)>0$ 且 $f'(a)>0$　(D) $f(a)<0$ 且 $f'(a)<0$

【解1】排除法：令 $f(x)=(x-a)^2$，则 $f(a)=0,f'(a)=0$，但 $|f(x)|=(x-a)^2$ 可导，(A) 不正确；若 $f(a)>0$，则某邻域内 $|f(x)|=f(x)$，二者可导性相同，(C) 不正确；同理 (D) 不正确。故应选 (B)。

【解2】直接法：令 $\varphi(x)=|f(x)|$，因 $f(a)=0$，$\lim\limits_{x\to a}\dfrac{\varphi(x)-\varphi(a)}{x-a}=\lim\limits_{x\to a}\left|\dfrac{f(x)}{x-a}\right|=\begin{cases}|f'(a)|,&x\to a^+\\-|f'(a)|,&x\to a^-\end{cases}$` },
      { p: 56, md: R`即 $\varphi'_+(a)=|f'(a)|,\ \varphi'_-(a)=-|f'(a)|$。由 $f'(a)\neq0$ 得左右导数不等，故 $|f(x)|$ 在 $x=a$ 不可导，选 (B)。

【注】$f(x)$ 与 $|f(x)|$ 可导性关系：1. $f(x)$ 可导 $\nRightarrow|f(x)|$ 可导；2. 设 $f(x)$ 连续，则 1) 若 $f(x_0)\neq0$，$f(x)$ 在 $x_0$ 可导 $\Leftrightarrow|f(x)|$ 在 $x_0$ 可导；2) 若 $f(x_0)=0$，$f'(x_0)=0\Leftrightarrow|f(x)|$ 在 $x_0$ 可导。

【例6】设函数 $f(x)=\lim\limits_{n\to\infty}\sqrt[n]{1+|x|^{3n}}$，则 $f(x)$ 在 $(-\infty,+\infty)$ 内 (A) 处处可导　(B) 恰有一个不可导点　(C) 恰有两个不可导点　(D) 至少有三个不可导点

【解】$f(x)=\begin{cases}1,&|x|\leqslant1\\|x^3|,&|x|>1\end{cases}$。$f$ 为偶函数，只需讨论 $x=1$：$f'_-(1)=0$，$f'_+(1)=\lim\limits_{x\to1^+}\dfrac{x^3-1}{x-1}=3$，故 $x=1$ 不可导，$x=-1$ 也不可导。选 (C)。

【例7】设 $f(x)$ 在 $(-\infty,+\infty)$ 上二阶可导，$f(0)=0$，$g(x)=\begin{cases}\dfrac{f(x)}{x},&x\neq0\\a,&x=0\end{cases}$。1) 确定 $a$ 使 $g(x)$ 在 $(-\infty,+\infty)$ 上连续；2) 证明对以上确定的 $a$，$g(x)$ 有连续一阶导数。

【解】1) 当 $a=\lim\limits_{x\to0}\dfrac{f(x)}{x}=f'(0)$ 时，$g(x)$ 连续。

2) 当 $x\neq0$ 时 $g'(x)=\dfrac{xf'(x)-f(x)}{x^2}$ 连续。当 $x=0$ 时 $g'(0)=\lim\limits_{x\to0}\dfrac{g(x)-g(0)}{x}=\lim\limits_{x\to0}\dfrac{f(x)-f'(0)x}{x^2}=\lim\limits_{x\to0}\dfrac{f'(x)-f'(0)}{2x}=\dfrac{f''(0)}{2}$；` },
      { p: 57, md: R`$$\lim_{x\to0}g'(x)=\lim_{x\to0}\frac{xf'(x)-f(x)}{x^2}=\lim_{x\to0}\frac{x(f'(x)-f'(0))+xf'(0)-f(x)}{x^2}=f''(0)-\frac{f''(0)}{2}=\frac{f''(0)}{2}=g'(0),$$

则 $g'(x)$ 在 $x=0$ 处连续，故 $g(x)$ 有连续的一阶导数。

### 题型二　导数的几何意义
【例1】曲线 $\tan\left(x+y+\dfrac\pi4\right)=e^y$ 在点 $(0,0)$ 处的切线方程为______。

【解】两端对 $x$ 求导得 $\sec^2\left(x+y+\dfrac\pi4\right)(1+y')=e^yy'$，代入 $x=0,y=0$ 得 $y'(0)=-2$，故切线方程为 $y=-2x$。

【例2】曲线 $\begin{cases}x=\arctan t\\y=\ln\sqrt{1+t^2}\end{cases}$ 上对应于 $t=1$ 的点处的法线方程为______。

【解】$\dfrac{dy}{dx}=\dfrac{\frac{t}{1+t^2}}{\frac{1}{1+t^2}}=t$，故 $t=1$ 处法线斜率为 $-1$；$t=1$ 时 $x=\dfrac\pi4,y=\dfrac12\ln2$，法线方程为 $y-\dfrac12\ln2=-\left(x-\dfrac\pi4\right)$，即 $x+y=\dfrac\pi4+\dfrac12\ln2$。

【例3】已知曲线的极坐标方程是 $r=1-\cos\theta$，求该曲线上对应于 $\theta=\dfrac\pi2$ 处的切线和法线的直角坐标方程。

【解】参数方程为 $\begin{cases}x=(1-\cos\theta)\cos\theta\\y=(1-\cos\theta)\sin\theta\end{cases}$，则 $\dfrac{dy}{dx}=\dfrac{\sin^2\theta+(1-\cos\theta)\cos\theta}{\sin\theta\cos\theta-\sin\theta(1-\cos\theta)}$。将 $\theta=\dfrac\pi2$ 代入得切线斜率 $k=-1$；此时 $x=0,y=1$。故切线、法线方程分别为 $y-1=-x$、$y-1=x$。

【例4】曲线 $y=x^2$ 与曲线 $y=a\ln x\ (a\neq0)$ 相切，则 $a=$ (A) $4e$　(B) $3e$　(C) $2e$　(D) $e$` },
      { p: 58, md: R`【解】由相切知 $\begin{cases}x^2=a\ln x\\2x=\dfrac ax\end{cases}$，解得 $a=2e$，故应选 (C)。

【注】若两曲线相切，则在切点处函数值相等且导数值相等。

### 题型三　导数与微分的计算
#### （一）复合函数求导法
【例1】设 $f(x)=\ln(x+\sqrt{1+x^2})$，则 $f''(0)=$______。

【解】应填 $0$。因为 $f(x)$ 为奇函数，$f'(x)$ 为偶函数，$f''(x)$ 为奇函数，则 $f''(0)=0$。

【例2】已知 $y=f\left(\dfrac{3x-2}{3x+2}\right)$，$f'(x)=\arctan x^2$，则 $\left.\dfrac{dy}{dx}\right|_{x=0}=$______。

【解】$\left.\dfrac{dy}{dx}\right|_{x=0}=f'\left(\dfrac{3x-2}{3x+2}\right)\cdot\dfrac{12}{(3x+2)^2}\bigg|_{x=0}=f'(-1)\cdot3=3\arctan1=\dfrac{3\pi}{4}$。

【例3】设 $f(x)=\begin{cases}x^2,&x\geqslant0\\x^4,&x<0\end{cases}$，$g(x)=\begin{cases}-\sqrt x,&x\geqslant0\\x^2,&x<0\end{cases}$，若 $y=f[g(x)]$，则 (A) $\left.\dfrac{dy}{dx}\right|_{x=-1}=1$　(B) $\left.\dfrac{dy}{dx}\right|_{x=1}$ 不存在　(C) $\left.\dfrac{dy}{dx}\right|_{x=0}=0$　(D) $\left.\dfrac{dy}{dx}\right|_{x=0}$ 不存在

【解】$g(1)=-1$，$g'(1)=-\dfrac12$，$f'(-1)=4x^3|_{x=-1}=-4$，故 $\left.\dfrac{dy}{dx}\right|_{x=1}=f'(-1)g'(1)=2$。虽然 $g'(0)$ 不存在，但 $y=f[g(x)]=\begin{cases}x^2,&x>0\\x^4,&x\leqslant0\end{cases}$，故 $\left.\dfrac{dy}{dx}\right|_{x=0}=0$。选 (C)。

【注】设 $y=f(u),u=g(x)$，若 $g'(x_0)$ 和 $f'(u_0)$ 都存在，则 $y=f[g(x)]$ 在 $x_0$ 可导且 $y'=f'(u_0)g'(x_0)$；若二者至少一个不存在，则 $y$ 在 $x_0$ 并非一定不可导，应先求出复合函数表达式再考察。

【例4】设 $\varphi(x)=\begin{cases}x^3\sin\dfrac1x,&x\neq0\\0,&x=0\end{cases}$，函数 $f(x)$ 可导，求 $F(x)=f[\varphi(x)]$ 的导数。` },
      { p: 59, md: R`【解】$F(x)=f[\varphi(x)]=\begin{cases}f\left(x^3\sin\dfrac1x\right),&x\neq0\\f(0),&x=0\end{cases}$。

当 $x\neq0$ 时，$F'(x)=f'\left(x^3\sin\dfrac1x\right)\left(3x^2\sin\dfrac1x-x\cos\dfrac1x\right)$。

当 $x=0$ 时，$\varphi(0)=0$，$f'(0)$ 存在，且 $\varphi'(0)=\lim\limits_{x\to0}\dfrac{x^3\sin\frac1x-0}{x}=\lim\limits_{x\to0}x^2\sin\dfrac1x=0$，故 $F'(0)=f'(0)\varphi'(0)=0$。

【注】注意不能写成 $F'(0)=\lim\limits_{x\to0}\dfrac{f\left(x^3\sin\frac1x\right)-f(0)}{x^3\sin\frac1x}\cdot\lim\limits_{x\to0}\dfrac{x^3\sin\frac1x}{x}=f'(0)\cdot0=0$，因为 $\lim\limits_{x\to0}\dfrac{f\left(x^3\sin\frac1x\right)-f(0)}{x^3\sin\frac1x}$ 不存在（$x=\dfrac{1}{n\pi}$ 处无定义）。

#### （二）隐函数求导法
【例1】设 $y=y(x)$ 由 $y=\tan(x+y)$ 所确定，试求 $y',y''$。

【解】两端对 $x$ 求导得 $y'=\sec^2(x+y)(1+y')=[1+\tan^2(x+y)](1+y')=(1+y^2)(1+y')$，于是 $y'=-\dfrac{1}{y^2}-1$，$y''=\dfrac{2y'}{y^3}=-\dfrac{2}{y^3}\left(\dfrac{1}{y^2}+1\right)$。

【例2】设函数 $y=y(x)$ 由 $y-xe^y=1$ 确定，试求 $\left.\dfrac{d^2y}{dx^2}\right|_{x=0}$。

【解】由 $y-xe^y=1$ 知 $x=0$ 时 $y=1$，且 $y'-e^y-xy'e^y=0$。①` },
      { p: 60, md: R`将 $x=0,y=1$ 代入 ① 得 $y'(0)=e$。① 式两端对 $x$ 求导得 $y''-y'e^y-y'e^y-x(y'e^y)'=0$，代入 $x=0,y=1,y'(0)=e$ 得 $y''(0)=2e^2$。

【例3】设可导函数 $y=y(x)$ 由方程 $\sin x-\displaystyle\int_x^y\varphi(u)du=0$ 确定，其中可导函数 $\varphi(u)>0$，且 $\varphi(0)=\varphi'(0)=1$，求 $y''(0)$。

【解】令 $x=0$ 得 $\displaystyle\int_0^y\varphi(u)du=0$，又 $\varphi(u)>0$，则 $y=0$。方程两端对 $x$ 求导得 $\cos x-[\varphi(y)y'-\varphi(x)]=0$。① 代入 $x=0,y=0$ 得 $y'(0)=2$。① 再对 $x$ 求导得 $-\sin x-[\varphi'(y)y'^2+\varphi(y)y''-\varphi'(x)]=0$，代入 $x=0,y=0,y'(0)=2$ 得 $y''(0)=-3$。

#### （三）参数方程求导法（数学三不要求）
公式：$\dfrac{dy}{dx}=\dfrac{y'(t)}{x'(t)}$；$\dfrac{d^2y}{dx^2}=\dfrac{y''(t)x'(t)-x''(t)y'(t)}{x'^3(t)}$。方法：一阶代公式，二阶利用 $\dfrac{d^2y}{dx^2}=\dfrac{d}{dt}\left(\dfrac{y'(t)}{x'(t)}\right)\dfrac{1}{x'(t)}$。

【例1】设 $f''(t)\neq0$，有 $\begin{cases}x=f'(t)\\y=tf'(t)-f(t)\end{cases}$，求 $\dfrac{d^2y}{dx^2}$。

【解】$\dfrac{dy}{dx}=\dfrac{y'(t)}{x'(t)}=\dfrac{f'(t)+tf''(t)-f'(t)}{f''(t)}=t$，$\dfrac{d^2y}{dx^2}=\dfrac{d}{dx}(t)=\dfrac{d}{dt}(t)\dfrac{dt}{dx}=1\cdot\dfrac{1}{x'(t)}=\dfrac{1}{f''(t)}$。

【注】本题求二阶导数不能套公式，条件不够。

【例2】设 $y=y(x)$ 由 $\begin{cases}x=3t^2+2t+3\\e^y\sin t-y+1=0\end{cases}$ 确定，求 $\left.\dfrac{d^2y}{dx^2}\right|_{t=0}$。

【解】$\left.\dfrac{d^2y}{dx^2}\right|_{t=0}=\dfrac{y''(0)x'(0)-x''(0)y'(0)}{x'^3(0)}$。由 $x=3t^2+2t+3$ 得 $x'=6t+2,x''=6$，故 $x'(0)=2,x''(0)=6$。由 $e^y\sin t-y+1=0$ 得 $y(0)=1$，且 $e^yy'\sin t+e^y\cos t-y'=0$，$(e^yy')\cos t+(e^yy')'\sin t+e^yy'\cos t-e^y\sin t-y''=0$。` },
      { p: 61, md: R`令 $t=0$ 得 $y'(0)=e,y''(0)=2e^2$，于是 $\left.\dfrac{d^2y}{dx^2}\right|_{t=0}=\dfrac{2e^2-3e}{4}$。

【注】本题是隐函数与参数方程求导的综合题，直接代公式简单。

#### （四）反函数求导法
【例】设 $y=f(x)$ 的反函数是 $x=\varphi(y)$，且 $f(x)=\displaystyle\int_1^{2x}e^{t^2}dt+1$，则 $\varphi''(1)=$______。

【解】$\varphi'(y)=\dfrac{dx}{dy}=\dfrac{1}{f'(x)}$，两端对 $y$ 求导得 $\varphi''(y)=-\dfrac{f''(x)}{[f'(x)]^3}$。由 $f(x)=\displaystyle\int_1^{2x}e^{t^2}dt+1$ 知 $x=\dfrac12$ 时 $y=1$，且 $f'(x)=2e^{4x^2},f''(x)=16xe^{4x^2}$，则 $\varphi''(1)=-\dfrac{f''\left(\frac12\right)}{[f'\left(\frac12\right)]^3}=-\dfrac{8e}{8e^3}=-\dfrac{1}{e^2}$。

【注】注意 $\dfrac{dx}{dy}=\dfrac{1}{\frac{dy}{dx}}$，但 $\dfrac{d^2x}{dy^2}\neq\dfrac{1}{\frac{d^2y}{dx^2}}$。

#### （五）对数求导法
对于幂指函数、连乘、连除、开方、乘方等形式的函数一般采用对数求导法。

【例1】设 $y=(1+x^2)^{\sin x}$，求 $y'$。

【解】$\ln y=\sin x\ln(1+x^2)$，$\dfrac{y'}{y}=\cos x\ln(1+x^2)+\dfrac{2x\sin x}{1+x^2}$，故 $y'=(1+x^2)^{\sin x}\left[\cos x\ln(1+x^2)+\dfrac{2x\sin x}{1+x^2}\right]$。

【例2】设 $y=\sqrt[3]{\dfrac{(x+1)(x+2)}{x(1+x^2)}}$，求 $y'$。

【解】$\ln|y|=\dfrac13[\ln|x+1|+\ln|x+2|-\ln|x|-\ln(1+x^2)]$，$\dfrac{y'}{y}=\dfrac13\left[\dfrac{1}{x+1}+\dfrac{1}{x+2}-\dfrac1x-\dfrac{2x}{1+x^2}\right]$，故 $y'=\dfrac13\sqrt[3]{\dfrac{(x+1)(x+2)}{x(1+x^2)}}\left[\dfrac{1}{x+1}+\dfrac{1}{x+2}-\dfrac1x-\dfrac{2x}{1+x^2}\right]$。` },
      { p: 62, md: R`#### （六）高阶导数
常用方法：1) 代公式；2) 求一阶、二阶，归纳 $n$ 阶；3) 利用泰勒公式。

① 泰勒级数 $f(x)=\sum\limits_{n=0}^{\infty}\dfrac{f^{(n)}(x_0)}{n!}(x-x_0)^n$。

② 泰勒公式 $f(x)=f(x_0)+f'(x_0)(x-x_0)+\cdots+\dfrac{f^{(n)}(x_0)}{n!}(x-x_0)^n+o((x-x_0)^n)$。

【例1】设 $f(x)=\dfrac{x}{2x^2-7x+6}$，求 $f^{(n)}(x)$。

【解】$f(x)=\dfrac{x}{(2x-3)(x-2)}=\dfrac{2}{x-2}-\dfrac{3}{2x-3}$，$f^{(n)}(x)=\left(\dfrac{2}{x-2}\right)^{(n)}-\left(\dfrac{3}{2x-3}\right)^{(n)}$。由 $\left(\dfrac{1}{x-2}\right)^{(n)}=\dfrac{(-1)^nn!}{(x-2)^{n+1}}$，$\left(\dfrac{1}{2x-3}\right)^{(n)}=\dfrac{(-1)^n2^nn!}{(2x-3)^{n+1}}$，得 $f^{(n)}(x)=(-1)^nn!\left[\dfrac{2}{(x-2)^{n+1}}-\dfrac{3\cdot2^n}{(2x-3)^{n+1}}\right]$。

【例2】设 $f(x)=e^x\sin x$，求 $f^{(n)}(x)$。

【解】$f'(x)=e^x(\sin x+\cos x)=\sqrt2e^x\sin\left(x+\dfrac\pi4\right)$，故 $f^{(n)}(x)=(\sqrt2)^ne^x\sin\left(x+n\cdot\dfrac\pi4\right)$。

【例3】设 $f(x)=\sin^4x+\cos^4x$，求 $f^{(n)}(x)$。

【解】$f(x)=1-2\sin^2x\cos^2x=1-\dfrac12\sin^22x$，$f'(x)=-\sin4x$，故 $f^{(n)}(x)=-4^{n-1}\sin\left(4x+(n-1)\dfrac\pi2\right)$。

【例4】求函数 $f(x)=x^2\ln(1+x)$ 在 $x=0$ 处的 $n(n>2)$ 阶导数。

【解1】利用 $(uv)^{(n)}=\sum\limits_{k=0}^nC_n^ku^{(k)}v^{(n-k)}$，令 $u=x^2,v=\ln(1+x)$，则 $u'=2x,u''=2,u^{(k)}=0\ (k\geqslant3)$，且 $u(0)=0,u'(0)=0,u''(0)=2,u^{(k)}(0)=0\ (k\geqslant3)$。` }
    ],
    quiz: [
      { q: R`函数 $f(x)$ 在点 $x_0$ 处可导的充要条件是`, options: [R`左、右导数都存在`, R`左、右导数都存在且相等`, R`$f(x)$ 在 $x_0$ 连续`, R`$f(x)$ 在 $x_0$ 有定义`], answer: 1, explain: R`可导 $\Leftrightarrow$ 左右导数都存在且相等。` },
      { q: R`下列函数在 $x=0$ 处不可导的是`, options: [R`$f(x)=|x|$`, R`$f(x)=x|x|$`, R`$f(x)=x^2$`, R`$f(x)=x^3$`], answer: 0, explain: R`$|x|$ 在 $0$ 处左右导数分别为 $-1,1$，不可导。` },
      { q: R`函数 $f(x)$ 在 $x_0$ 处可导是 $f(x)$ 在 $x_0$ 处连续的`, options: [R`充分条件`, R`必要条件`, R`充要条件`, R`无关条件`], answer: 0, explain: R`可导 $\Rightarrow$ 连续，反之不然。` },
      { q: R`$(\sin x)^{(n)}=$`, options: [R`$\sin\left(x+n\cdot\dfrac\pi2\right)$`, R`$\cos\left(x+n\cdot\dfrac\pi2\right)$`, R`$\sin x$`, R`$(-1)^n\sin x$`], answer: 0, explain: R`正弦的 $n$ 阶导数为 $\sin\left(x+\frac{n\pi}{2}\right)$。` },
      { q: R`设 $u=u(x),v=v(x)$ 可导，则 $(uv)'=$`, options: [R`$u'v'$`, R`$u'v+uv'$`, R`$u'v-uv'$`, R`$uv$`], answer: 1, explain: R`乘积法则。` },
      { q: R`设 $f(x)=\ln(x+\sqrt{1+x^2})$，则 $f''(0)=$`, options: [R`$0$`, R`$1$`, R`$-1$`, R`$\dfrac12$`], answer: 0, explain: R`$f$ 为奇函数，$f''$ 为奇函数，故 $f''(0)=0$。` },
      { q: R`分段函数在分界点处的导数一般应`, options: [R`直接用求导公式`, R`用导数定义求`, R`用洛必达法则`, R`用泰勒公式`], answer: 1, explain: R`分界点处一般要用导数定义。` },
      { q: R`隐函数求导公式 $\dfrac{dy}{dx}=$`, options: [R`$-\dfrac{F'_x}{F'_y}$`, R`$\dfrac{F'_x}{F'_y}$`, R`$-\dfrac{F'_y}{F'_x}$`, R`$\dfrac{F'_y}{F'_x}$`], answer: 0, explain: R`由 $F(x,y)=0$ 得 $\frac{dy}{dx}=-\frac{F'_x}{F'_y}$。` },
      { q: R`参数方程 $\begin{cases}x=\varphi(t)\\y=\psi(t)\end{cases}$ 的 $\dfrac{dy}{dx}=$`, options: [R`$\dfrac{\psi'(t)}{\varphi'(t)}$`, R`$\dfrac{\varphi'(t)}{\psi'(t)}$`, R`$\psi'(t)\varphi'(t)$`, R`$\dfrac{\psi(t)}{\varphi(t)}$`], answer: 0, explain: R`$\frac{dy}{dx}=\frac{dy/dt}{dx/dt}=\frac{\psi'(t)}{\varphi'(t)}$。` },
      { q: R`设 $f(x)$ 可导，则 $f(x)$ 可导与 $|f(x)|$ 可导的关系是`, options: [R`$f(x)$ 可导必有 $|f(x)|$ 可导`, R`$f(x)$ 可导不一定有 $|f(x)|$ 可导`, R`二者等价`, R`二者无关`], answer: 1, explain: R`如 $f(x)=x$，$|x|$ 不可导。` }
    ]
  };
})();
