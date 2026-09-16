window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["gs02_s0"] = {
    id: "gs02_s0",
    ch: "第二章 一元函数微分学",
    title: "第一节 导数与微分",
    book: "《高等数学辅导讲义》",
    pages: [49, 62],
    img: "assets/img/gaoshu",
    content: [
      { p: 49, md: R`### 第二章 一元函数微分学
#### 第一节 导数与微分
##### 一、考试内容要点精讲
###### （一）导数概念
**定义 1（导数）** 设函数 $y=f(x)$ 在 $x_0$ 的某邻域内有定义，如果极限
$$\lim_{\Delta x\to0}\frac{\Delta y}{\Delta x}=\lim_{\Delta x\to0}\frac{f(x_0+\Delta x)-f(x_0)}{\Delta x}$$
存在，则称 $f(x)$ 在点 $x_0$ 处可导，并称此极限值为 $f(x)$ 在点 $x_0$ 处的导数，记为 $f'(x_0)$，或 $y'|_{x=x_0}$，或 $\left.\frac{dy}{dx}\right|_{x=x_0}$。如果上述极限不存在，则称 $f(x)$ 在点 $x_0$ 处不可导。
【注】常用的导数定义的等价形式有：
$$f'(x_0)=\lim_{x\to x_0}\frac{f(x)-f(x_0)}{x-x_0},\quad f'(x_0)=\lim_{h\to0}\frac{f(x_0+h)-f(x_0)}{h}.$$
**定义 2（左导数）** 若左极限
$$\lim_{\Delta x\to0^-}\frac{\Delta y}{\Delta x}=\lim_{\Delta x\to0^-}\frac{f(x_0+\Delta x)-f(x_0)}{\Delta x}=\lim_{x\to x_0^-}\frac{f(x)-f(x_0)}{x-x_0}$$
存在时，则称该极限值为 $f(x)$ 在点 $x_0$ 处的左导数，记为 $f'_-(x_0)$。
**定义 3（右导数）** 若右极限
$$\lim_{\Delta x\to0^+}\frac{\Delta y}{\Delta x}=\lim_{\Delta x\to0^+}\frac{f(x_0+\Delta x)-f(x_0)}{\Delta x}=\lim_{x\to x_0^+}\frac{f(x)-f(x_0)}{x-x_0}$$
存在时，则称该极限值为 $f(x)$ 在点 $x_0$ 处的右导数，记为 $f'_+(x_0)$。
定理 $\quad$ 可导 $\Leftrightarrow$ 左右导数都存在且相等。
###### （二）微分概念
定义 若 $\Delta y=f(x_0+\Delta x)-f(x_0)=A\Delta x+o(\Delta x)$，其中 $A$ 为不依赖于 $\Delta x$ 的常数，则称函数 $f(x)$ 在点 $x_0$ 处可微，称 $A\Delta x$ 为函数 $f(x)$ 在点 $x_0$ 处相应于自变量增量 $\Delta x$ 的微分，记为 $dy=A\Delta x$。
定理 函数 $y=f(x)$ 在点 $x_0$ 处可微的充分必要条件是 $f(x)$ 在点 $x_0$ 处可导，且有
$$dy=f'(x_0)\Delta x=f'(x_0)dx.$$` },
      { p: 50, md: R`###### （三）导数与微分的几何意义
1）导数 $f'(x_0)$ 在几何上表示曲线 $y=f(x)$ 在点 $(x_0,f(x_0))$ 处切线的斜率。
2）微分 $dy=f'(x_0)dx$ 在几何上表示曲线 $y=f(x)$ 的切线上的增量。
$\Delta y=f(x_0+\Delta x)-f(x_0)$ 在几何上表示曲线 $y=f(x)$ 上的增量。$\Delta y\approx dy$
（图：曲线 $y=f(x)$ 上 $x_0$ 与 $x_0+\Delta x$ 处对应的纵坐标增量 $\Delta y$、切线上增量 $dy$ 以及 $\Delta x$）
###### （四）连续、可导、可微之间的关系
（关系图：连续 $\longleftrightarrow$ 可导；连续 $\to$ 可微；可导 $\to$ 可微；可微 $\to$ 连续；可微 $\to$ 可导）
【注】1）连续 $\not\Rightarrow$ 可导，连续 $\not\Rightarrow$ 可微，经典反例为 $f(x)=|x|$；
2）$f(x)$ 可导 $\Rightarrow f(x)$ 连续，$f(x)$ 可导 $\not\Rightarrow f'(x)$ 连续，$f(x)$ 可导 $\not\Rightarrow\lim_{x\to x_0}f'(x)$ 存在。
例如 $f(x)=\begin{cases}x^2\sin\frac{1}{x},&x\neq0,\\0,&x=0\end{cases}$ 处处可导，但 $\lim_{x\to0}f'(x)$ 不存在，从而 $f'(x)$ 在 $x=0$ 处也不连续。
###### （五）求导公式
1）$(C)'=0$； 2）$(x^a)'=ax^{a-1}$；
3）$(a^x)'=a^x\ln a$； 4）$(e^x)'=e^x$；
5）$(\log_a x)'=\frac{1}{x\ln a}$； 6）$(\ln|x|)'=\frac{1}{x}$；
7）$(\sin x)'=\cos x$； 8）$(\cos x)'=-\sin x$；
9）$(\tan x)'=\sec^2x$； 10）$(\cot x)'=-\csc^2x$；
11）$(\sec x)'=\sec x\tan x$； 12）$(\csc x)'=-\csc x\cot x$；
13）$(\arcsin x)'=\frac{1}{\sqrt{1-x^2}}$； 14）$(\arccos x)'=-\frac{1}{\sqrt{1-x^2}}$；
15）$(\arctan x)'=\frac{1}{1+x^2}$； 16）$(\operatorname{arccot}x)'=-\frac{1}{1+x^2}$。
###### （六）求导法则
**（1）有理运算法则**
设 $u=u(x),v=v(x)$ 在 $x$ 处可导，则
1）$(u\pm v)'=u'\pm v'$； 2）$(uv)'=u'v+uv'$；
3）$\left(\frac{u}{v}\right)'=\frac{u'v-uv'}{v^2}(v\neq0)$。` },
      { p: 51, md: R`**（2）复合函数求导法**
设 $u=\varphi(x)$ 在 $x$ 处可导，$y=f(u)$ 在对应点处可导，则复合函数 $y=f[\varphi(x)]$ 在 $x$ 处可导，且
$$\frac{dy}{dx}=\frac{dy}{du}\cdot\frac{du}{dx}=f'(u)\varphi'(x).$$
**（3）隐函数求导法**
设 $y=y(x)$ 是由方程 $F(x,y)=0$ 所确定的（可导）函数，为求得 $y'$，可在方程 $F(x,y)=0$ 两边对 $x$ 求导，可得到一个含有 $y'$ 的方程，从中解出 $y'$ 即可。
【注】$y'$ 也可由多元函数微分法中的隐函数求导公式 $\frac{dy}{dx}=-\frac{F'_x}{F'_y}$ 得到。
**（4）反函数的导数**
若 $x=\varphi(y)$ 在某区间内单调、可导，且 $\varphi'(y)\neq0$，则其反函数 $y=f(x)$ 在对应区间内也可导，且
$$f'(x)=\frac{1}{\varphi'(y)}\text{ 或 }\frac{dy}{dx}=\frac{1}{\frac{dx}{dy}}.$$
**（5）参数方程求导法（数学三不要求）**
设 $y=y(x)$ 是由参数方程 $\begin{cases}x=\varphi(t),\\y=\psi(t)\end{cases}(\alpha<t<\beta)$ 确定的函数，则
1）若 $\varphi(t)$ 和 $\psi(t)$ 都可导，且 $\varphi'(t)\neq0$，则 $\frac{dy}{dx}=\frac{\psi'(t)}{\varphi'(t)}$；
2）若 $\varphi(t)$ 和 $\psi(t)$ 二阶可导，且 $\varphi'(t)\neq0$，则
$$\frac{d^2y}{dx^2}=\frac{d}{dt}\left(\frac{\psi'(t)}{\varphi'(t)}\right)\cdot\frac{1}{\varphi'(t)}=\frac{\psi''(t)\varphi'(t)-\varphi''(t)\psi'(t)}{\varphi'^3(t)}.$$
**（6）对数求导法**
如果 $y=y(x)$ 的表达式由多个因式的乘除、乘幂构成，或是幂指函数的形式，则可先将函数取对数，然后两边对 $x$ 求导。
**（7）高阶导数**
1）定义：$f^{(n)}(x_0)=\lim_{\Delta x\to0}\frac{f^{(n-1)}(x_0+\Delta x)-f^{(n-1)}(x_0)}{\Delta x}=\lim_{x\to x_0}\frac{f^{(n-1)}(x)-f^{(n-1)}(x_0)}{x-x_0}$。
2）常用公式
①$(\sin x)^{(n)}=\sin\left(x+n\cdot\frac{\pi}{2}\right)$； ②$(\cos x)^{(n)}=\cos\left(x+n\cdot\frac{\pi}{2}\right)$；
③$(u\pm v)^{(n)}=u^{(n)}\pm v^{(n)}$； ④$(uv)^{(n)}=\sum_{k=0}^{n}C_n^ku^{(k)}v^{(n-k)}$。
##### 二、常考题型的方法与技巧
###### 题型一 导数与微分的概念
这里的重点是导数的概念，其题型主要有三种：
1）利用导数定义求极限；` },
      { p: 52, md: R`2）利用导数定义求导数；
3）利用导数定义判断函数的可导性。
###### （一）利用导数定义求极限
【例1】设 $f(-1)=1,f'(-1)=2$，则 $\lim\limits_{x\to-1}\frac{f(2-3x)-1}{x-1}=$______。
【解1】$\lim\limits_{x\to-1}\frac{f(2-3x)-1}{x-1}=\lim\limits_{x\to-1}\frac{f[-1+3(1-x)]-f(-1)}{3(1-x)}\cdot\frac{3(1-x)}{x-1}=f'(-1)\cdot(-3)=-6.$
【解2】取 $f(x)=2x+3$，显然满足 $f(-1)=1,f'(-1)=2$，代入得 $\lim\limits_{x\to-1}\frac{f(2-3x)-1}{x-1}=\lim\limits_{x\to-1}\frac{2(2-3x)+3-1}{x-1}=\lim\limits_{x\to-1}\frac{6(1-x)}{x-1}=-6.$
【例2】设 $f'(a)$ 存在，且 $f(a)\neq0$，求极限 $\lim\limits_{n\to\infty}\left[\frac{f\left(a+\frac{1}{n}\right)}{f(a)}\right]^n$。
【分析】这是一个 $1^\infty$ 型极限。
【解】$\lim\limits_{n\to\infty}\left[\frac{f\left(a+\frac{1}{n}\right)}{f(a)}\right]^n=\lim\limits_{n\to\infty}\left[1+\frac{f\left(a+\frac{1}{n}\right)-f(a)}{f(a)}\right]^n$，
又因为 $\lim\limits_{n\to\infty}\frac{f\left(a+\frac{1}{n}\right)-f(a)}{f(a)}\cdot n=\frac{1}{f(a)}\lim\limits_{n\to\infty}\frac{f\left(a+\frac{1}{n}\right)-f(a)}{\frac{1}{n}}=\frac{f'(a)}{f(a)}$，
则 $\lim\limits_{n\to\infty}\left[\frac{f\left(a+\frac{1}{n}\right)}{f(a)}\right]^n=e^{\frac{f'(a)}{f(a)}}$。
【例3】设函数 $f(x)$ 在 $x=0$ 处可导，且 $f(0)=0$，则 $\lim\limits_{x\to0}\frac{x^2f(x)-2f(x^3)}{x^3}=$
（A）$-2f'(0)$。 （B）$-f'(0)$。 （C）$f'(0)$。 （D）$0$。
【解1】直接法
$\lim\limits_{x\to0}\frac{x^2f(x)-2f(x^3)}{x^3}=\lim\limits_{x\to0}\frac{f(x)}{x}-2\lim\limits_{x\to0}\frac{f(x^3)}{x^3}=f'(0)-2f'(0)=-f'(0).$
【解2】排除法 取 $f(x)=x$，显然满足题设条件，则 $f'(0)=1$，而 $\lim\limits_{x\to0}\frac{x^2f(x)-2f(x^3)}{x^3}=\lim\limits_{x\to0}\frac{x^3-2x^3}{x^3}=-1.$
显然，选项（A）、（C）、（D）都不正确，故应选（B）。
【例4】设曲线 $y=f(x)$ 与 $y=x^2-x$ 在点 $(1,0)$ 处有公共切线，则 $\lim\limits_{n\to\infty}nf\left(\frac{n}{n+2}\right)=$______。
【解1】由曲线 $y=f(x)$ 与 $y=x^2-x$ 在点 $(1,0)$ 处有公共切线可知，$f(1)=0,f'(1)=(2x-1)|_{x=1}=1.$` },
      { p: 53, md: R`$\lim\limits_{n\to\infty}nf\left(\frac{n}{n+2}\right)=\lim\limits_{n\to\infty}\frac{-2n}{n+2}\cdot\frac{f\left(1+\frac{-2}{n+2}\right)-f(1)}{\frac{-2}{n+2}}=-2f'(1)=-2.$
【解2】由【解1】知 $f(1)=0,f'(1)=1$，取 $f(x)=x-1$ 显然满足题设条件，代入 $\lim\limits_{n\to\infty}nf\left(\frac{n}{n+2}\right)=\lim\limits_{n\to\infty}n\left(\frac{n}{n+2}-1\right)=\lim\limits_{n\to\infty}\frac{-2n}{n+2}=-2.$
###### （二）利用导数定义求导数
【例1】设函数 $f(x)=(e^x-1)(e^{2x}-2)\cdots(e^{nx}-n)$，其中 $n$ 为正整数，则 $f'(0)=$
（A）$(-1)^{n-1}(n-1)!$。 （B）$(-1)^n(n-1)!$。 （C）$(-1)^{n-1}n!$。 （D）$(-1)^nn!$。
【解1】显然 $f(0)=0$，则由导数定义得
$f'(0)=\lim\limits_{x\to0}\frac{f(x)}{x}=\lim\limits_{x\to0}\frac{(e^x-1)(e^{2x}-2)\cdots(e^{nx}-n)}{x}=\lim\limits_{x\to0}\frac{e^x-1}{x}\lim\limits_{x\to0}(e^{2x}-2)\cdots(e^{nx}-n)=(1-2)(1-3)\cdots(1-n)=(-1)^{n-1}(n-1)!.$
【解2】显然 $f(0)=0$，令 $g(x)=(e^{2x}-2)\cdots(e^{nx}-n)$，则 $f'(x)=e^xg(x)+(e^x-1)g'(x)$，$f'(0)=g(0)=(-1)^{n-1}(n-1)!$。
【例2】设 $f(x)=\begin{cases}(1+x^2)^{\frac{1}{\sin x}},&x\neq0,\\1,&x=0\end{cases}$，则 $f'(0)=$______。
【解】$f'(0)=\lim\limits_{x\to0}\frac{f(x)-f(0)}{x}=\lim\limits_{x\to0}\frac{(1+x^2)^{\frac{1}{\sin x}}-1}{x}=\lim\limits_{x\to0}\frac{e^{\frac{\ln(1+x^2)}{\sin x}}-1}{x}=\lim\limits_{x\to0}\frac{\ln(1+x^2)}{x\sin x}=\lim\limits_{x\to0}\frac{x^2}{x^2}=1.$
【注】分段函数在分界点处的导数一般都要用定义求。
###### （三）利用导数定义判定可导性
【例1】设函数 $f(x)$ 在 $x=0$ 处连续，下列命题错误的是
（A）若 $\lim\limits_{x\to0}\frac{f(x)}{x}$ 存在，则 $f(0)=0$。 （B）若 $\lim\limits_{x\to0}\frac{f(x)+f(-x)}{x}$ 存在，则 $f(0)=0$。
（C）若 $\lim\limits_{x\to0}\frac{f(x)}{x}$ 存在，则 $f'(0)$ 存在。 （D）若 $\lim\limits_{x\to0}\frac{f(x)-f(-x)}{x}$ 存在，则 $f'(0)$ 存在。
【解1】直接法 直接说明（D）中的命题是错误的。
令 $f(x)=|x|$，则 $f'(0)$ 不存在，但 $\lim\limits_{x\to0}\frac{f(x)-f(-x)}{x}=\lim\limits_{x\to0}\frac{|x|-|-x|}{x}=0$ 存在。故应选（D）。
【解2】排除法 即说明（A）、（B）、（C）中的三个命题都正确。
由 $\lim\limits_{x\to0}\frac{f(x)}{x}$ 存在，且其分母趋于零，则分子 $\lim\limits_{x\to0}f(x)=0$。又 $f(x)$ 在 $x=0$ 处连续，则 $\lim\limits_{x\to0}f(x)=f(0)=0$，即（A）中命题正确，同理可说明（B）中命题正确。` },
      { p: 54, md: R`由 $\lim\limits_{x\to0}\frac{f(x)}{x}=0$ 知 $f(0)=0$，则 $\lim\limits_{x\to0}\frac{f(x)}{x}=\lim\limits_{x\to0}\frac{f(x)-f(0)}{x}=0=f'(0)$，从而（C）中命题也正确。即（A）、（B）、（C）都不能选。故应选（D）。
【例2】设 $f(0)=0$，则 $f(x)$ 在点 $x=0$ 可导的充要条件为
（A）$\lim\limits_{h\to0}\frac{1}{h^2}f(1-\cos h)$ 存在。 （B）$\lim\limits_{h\to0}\frac{1}{h}f(1-e^h)$ 存在。
（C）$\lim\limits_{h\to0}\frac{1}{h^2}f(h-\sin h)$ 存在。 （D）$\lim\limits_{h\to0}\frac{1}{h}[f(2h)-f(h)]$ 存在。
【解1】直接法
由于 $\lim\limits_{h\to0}\frac{1}{h}f(1-e^h)=\lim\limits_{h\to0}\frac{f(1-e^h)-f(0)}{1-e^h}\cdot\frac{1-e^h}{h}=-\lim\limits_{h\to0}\frac{f(1-e^h)-f(0)}{1-e^h}$（令 $1-e^h=t$）
$=-\lim\limits_{t\to0}\frac{f(t)-f(0)}{t}=-f'(0)$，故应选（B）。
【解2】排除法
1）$\lim\limits_{h\to0}\frac{f(1-\cos h)}{h^2}=\lim\limits_{h\to0}\frac{f(1-\cos h)-f(0)}{1-\cos h}\cdot\frac{1-\cos h}{h^2}=\frac{1}{2}\lim\limits_{h\to0}\frac{f(1-\cos h)-f(0)}{1-\cos h}=\frac{1}{2}f'_+(0).$
由于当 $h\to0$ 时，$(1-\cos h)\to0^+$，则（A）中极限存在只能推得 $f(x)$ 在 $x=0$ 处的右导数存在，所以（A）不正确。
2）$\lim\limits_{h\to0}\frac{1}{h^2}f(h-\sin h)=\lim\limits_{h\to0}\frac{f(h-\sin h)-f(0)}{h-\sin h}\cdot\frac{h-\sin h}{h^2}.$
这里极限 $\lim\limits_{h\to0}\frac{f(h-\sin h)-f(0)}{h-\sin h}$ 存在是 $f(x)$ 在 $x=0$ 处可导的充要条件，但问题在于 $\lim\limits_{h\to0}\frac{h-\sin h}{h^2}=0$，极限 $\lim\limits_{h\to0}\frac{f(h-\sin h)-f(0)}{h-\sin h}\cdot\frac{h-\sin h}{h^2}$ 存在时，$\lim\limits_{h\to0}\frac{f(h-\sin h)-f(0)}{h-\sin h}$ 不一定存在。事实上，取 $f(x)=x^{\frac{2}{3}}$，则
$\lim\limits_{h\to0}\frac{1}{h^2}f(h-\sin h)=\lim\limits_{h\to0}\frac{(h-\sin h)^{\frac{2}{3}}}{h^2}=\lim\limits_{h\to0}\left(\frac{h-\sin h}{h^3}\right)^{\frac{2}{3}}=\left(\frac{1}{6}\right)^{\frac{2}{3}}$
存在，但 $f'(0)=\lim\limits_{h\to0}\frac{f(h)-f(0)}{h}=\lim\limits_{h\to0}h^{\frac{2}{3}}=\infty$。故（C）也不正确。
3）取 $f(x)=\begin{cases}1,&x\neq0,\\0,&x=0,\end{cases}$ 显然 $f'(0)$ 不存在，因为 $f(x)$ 在 $x=0$ 处不连续。但 $\lim\limits_{h\to0}\frac{1}{h}[f(2h)-f(h)]=\lim\limits_{h\to0}\frac{1}{h}[1-1]=0$，则（D）不正确，故应选（B）。
【例3】设 $f(x)$ 可导，$F(x)=f(x)(1+|\sin x|)$，则 $f(0)=0$ 是 $F(x)$ 在 $x=0$ 可导的` },
      { p: 55, md: R`（A）充分必要条件。 （B）充分条件但非必要条件。
（C）必要条件但非充分条件。 （D）既非充分条件又非必要条件。
【解】由于 $F(x)=f(x)(1+|\sin x|)=f(x)+f(x)|\sin x|$，而 $f(x)$ 可导，则 $F(x)$ 在 $x=0$ 可导的充要条件是 $f(x)|\sin x|$ 在 $x=0$ 可导。令 $\varphi(x)=f(x)|\sin x|$，则
$\lim\limits_{x\to0}\frac{\varphi(x)-\varphi(0)}{x-0}=\lim\limits_{x\to0}\frac{f(x)|\sin x|}{x}=\begin{cases}f(0),&x\to0^+,\\-f(0),&x\to0^-,\end{cases}$
从而 $f(0)=0$ 是 $\varphi(x)$ 在 $x=0$ 可导的充要条件，故应选（A）。
【注】由本题的分析过程也得到一条常用的结论：设 $f(x)=\varphi(x)|x-a|$，其 $\varphi(x)$ 在 $x=a$ 处连续，则 $f(x)$ 在 $x=a$ 处可导的充要条件是 $\varphi(a)=0$。
【例4】函数 $f(x)=(x^2-x-2)|x^3-x|$ 不可导的点的个数是
（A）3。 （B）2。 （C）1。 （D）0。
【解1】$f(x)=(x^2-x-2)|x^3-x|=(x-2)(x+1)|x+1||x-1||x|$。
显然 $f(x)$ 不可导的点最多三个，即 $x=-1,x=1,x=0$。
对于 $x=1$，$f(x)=(x-2)(x+1)|x+1||x-1||x|=|x-1|\varphi(x)$，
其中 $\varphi(x)=(x-2)(x+1)|x+1||x|$。由于 $\varphi(1)=-4\neq0$，由上题的注可知，$f(x)$ 在 $x=1$ 处不可导。同理可知，$f(x)$ 在 $x=0$ 处不可导，而在 $x=-1$ 处可导，故应选（B）。
【解2】$f(x)=(x^2-x-2)|x^3-x|=(x-2)(x+1)|x+1||x-1||x|$。
显然 $f(x)$ 不可导的点最多三个，即 $x=-1,x=1,x=0$。
我们知道 $|x|$ 在 $x=0$ 处不可导，而 $x|x|$ 在 $x=0$ 处可导。由此可知 $f(x)=(x-2)(x+1)|x+1||x-1||x|$ 在 $x=0,x=1$ 处不可导，而在 $x=-1$ 处可导。
【例5】设 $f(x)$ 在点 $x=a$ 处可导，则函数 $|f(x)|$ 在点 $x=a$ 处不可导的充分条件是
（A）$f(a)=0$，且 $f'(a)=0$。 （B）$f(a)=0$，且 $f'(a)\neq0$。
（C）$f(a)>0$，且 $f'(a)>0$。 （D）$f(a)<0$，且 $f'(a)<0$。
【解1】排除法
若令 $f(x)=(x-a)^2$，显然 $f(a)=0,f'(a)=0$，但 $|f(x)|=(x-a)^2$ 在 $x=a$ 可导，则（A）不正确。
若 $f(a)>0$，由于 $f(x)$ 在 $x=a$ 处可导，则 $f(x)$ 在 $x=a$ 处连续，从而在 $x=a$ 的某邻域内 $f(x)>0$，此时 $|f(x)|=f(x)$，$|f(x)|$ 与 $f(x)$ 在 $x=a$ 处可导性相同，故（C）不正确。
同理（D）不正确，故应选（B）。
【解2】直接法 直接证明（B）正确。
令 $\varphi(x)=|f(x)|$，由于 $f(a)=0$，故
$\lim\limits_{x\to a}\frac{\varphi(x)-\varphi(a)}{x-a}=\lim\limits_{x\to a}\frac{|f(x)|-|f(a)|}{x-a}=\lim\limits_{x\to a}\frac{|f(x)|}{x-a}=\begin{cases}\lim\limits_{x\to a^+}\left|\frac{f(x)}{x-a}\right|\\-\lim\limits_{x\to a^-}\left|\frac{f(x)}{x-a}\right|\end{cases}=\begin{cases}|f'(a)|,&x\to a^+,\\-|f'(a)|,&x\to a^-,\end{cases}$` },
      { p: 56, md: R`即 $\varphi'_+(a)=|f'(a)|,\varphi'_-(a)=-|f'(a)|$。
由于 $f'(a)\neq0$，故 $\varphi'_+(a)\neq\varphi'_-(a)$，则 $|f(x)|$ 在 $x=a$ 不可导，故应选（B）。
【注】在本题基础上对函数 $f(x)$ 和 $|f(x)|$ 可导性之间关系归纳如下：
1. $f(x)$ 可导 $\overset{\times}{\longleftrightarrow}|f(x)|$ 可导。反例分别是 $f(x)=x$ 和 $f(x)=\begin{cases}-1,&x<0,\\1,&x\geq0.\end{cases}$
2. 设 $f(x)$ 连续，
1）若 $f(x_0)\neq0$，则 $f(x)$ 在 $x_0$ 处可导 $\Leftrightarrow|f(x)|$ 在 $x_0$ 处可导；
2）若 $f(x_0)=0$，则 $f'(x_0)=0\Leftrightarrow|f(x)|$ 在 $x_0$ 处可导。
【例6】设函数 $f(x)=\lim\limits_{n\to\infty}\sqrt[n]{1+|x|^{3n}}$，则 $f(x)$ 在 $(-\infty,+\infty)$ 内
（A）处处可导。 （B）恰有一个不可导点。 （C）恰有两个不可导点。 （D）至少有三个不可导点。
【解】$f(x)=\lim\limits_{n\to\infty}\sqrt[n]{1+|x|^{3n}}=\begin{cases}1,&|x|\leq1,\\|x|^3,&|x|>1.\end{cases}$
显然 $f(x)$ 为偶函数，不可导的点只可能为 $x=\pm1$，只需讨论 $x=1$。
$$f'_-(1)=0,\quad f'_+(1)=\lim_{x\to1^+}\frac{x^3-1}{x-1}=3,$$
则 $f(x)$ 在 $x=1$ 不可导，从而在 $x=-1$ 也不可导，故应选（C）。
【注】求得 $f(x)$ 表达式后画图易得 $f'_-(1)=0$ 和 $f'_+(1)=3$，则 $f(x)$ 在 $x=1$ 不可导。
【例7】设 $f(x)$ 在 $(-\infty,+\infty)$ 上二阶可导，$f(0)=0$，$g(x)=\begin{cases}\frac{f(x)}{x},&x\neq0,\\a,&x=0.\end{cases}$
1）确定 $a$ 使 $g(x)$ 在 $(-\infty,+\infty)$ 上连续；
2）证明对以上确定的 $a$，$g(x)$ 在 $(-\infty,+\infty)$ 上有连续一阶导数。
【解】1）显然 $g(x)$ 在 $x\neq0$ 处连续，而 $\lim\limits_{x\to0}g(x)=\lim\limits_{x\to0}\frac{f(x)}{x}=f'(0)$，因此当 $a=f'(0)$ 时，$g(x)$ 在 $(-\infty,+\infty)$ 上连续。
2）当 $x\neq0$ 时，$g'(x)=\frac{xf'(x)-f(x)}{x^2}$，且 $g'(x)$ 连续。
当 $x=0$ 时，$g'(0)=\lim\limits_{x\to0}\frac{g(x)-g(0)}{x}=\lim\limits_{x\to0}\frac{\frac{f(x)}{x}-f'(0)}{x}=\lim\limits_{x\to0}\frac{f(x)-f'(0)x}{x^2}=\lim\limits_{x\to0}\frac{f'(x)-f'(0)}{2x}=\frac{f''(0)}{2}$，（导数定义）
$$\lim_{x\to0}g'(x)=\lim_{x\to0}\frac{xf'(x)-f(x)}{x^2}=\lim_{x\to0}\frac{x(f'(x)-f'(0))+xf'(0)-f(x)}{x^2}$$` },
      { p: 57, md: R`$$=\lim_{x\to0}\frac{f'(x)-f'(0)}{x}-\lim_{x\to0}\frac{f(x)-xf'(0)}{x^2}=f''(0)-\frac{f''(0)}{2}=\frac{f''(0)}{2}=g'(0).$$
则 $g'(x)$ 在 $x=0$ 处连续，故 $g(x)$ 在 $(-\infty,+\infty)$ 上有连续的一阶导数。
###### 题型二 导数的几何意义
【例1】曲线 $\tan\left(x+y+\frac{\pi}{4}\right)=e^y$ 在点 $(0,0)$ 处的切线方程为______。
【解】等式 $\tan\left(x+y+\frac{\pi}{4}\right)=e^y$ 两端对 $x$ 求导得 $\sec^2\left(x+y+\frac{\pi}{4}\right)(1+y')=e^yy'$，将 $x=0,y=0$ 代入上式得 $y'(0)=-2$，则该曲线在点 $(0,0)$ 处的切线方程为 $y=-2x$。
【例2】曲线 $\begin{cases}x=\arctan t,\\y=\ln\sqrt{1+t^2}\end{cases}$ 上对应于 $t=1$ 的点处的法线方程为______。
【解】$\frac{dy}{dx}=\frac{\frac{t}{1+t^2}}{\frac{1}{1+t^2}}=t$，则该曲线上对应于 $t=1$ 的点处的法线的斜率为 $-1$，而当 $t=1$ 时，$x=\frac{\pi}{4},y=\frac{1}{2}\ln2$，则所求法线方程为 $y-\frac{1}{2}\ln2=-\left(x-\frac{\pi}{4}\right)$，即 $x+y=\frac{\pi}{4}+\frac{1}{2}\ln2$。
【例3】已知曲线的极坐标方程是 $r=1-\cos\theta$，求该曲线上对应于 $\theta=\frac{\pi}{2}$ 处的切线和法线的直角坐标方程。
【解】由 $r=1-\cos\theta$ 可知该曲线的参数方程为 $\begin{cases}x=(1-\cos\theta)\cos\theta\\y=(1-\cos\theta)\sin\theta\end{cases}$，则 $\frac{dy}{dx}=\frac{\sin^2\theta+(1-\cos\theta)\cos\theta}{\sin\theta\cos\theta-\sin\theta(1-\cos\theta)}.$
将 $\theta=\frac{\pi}{2}$ 代入上式得该曲线上对应于 $\theta=\frac{\pi}{2}$ 处的切线的斜率为 $k=-1$。而当 $\theta=\frac{\pi}{2}$ 时，$x=0,y=1$。则该曲线上对应于 $\theta=\frac{\pi}{2}$ 处的切线和法线的直角坐标方程分别为 $y-1=-x$ 和 $y-1=x$。
【例4】曲线 $y=x^2$ 与曲线 $y=a\ln x(a\neq0)$ 相切，则 $a=$
（A）4e。 （B）3e。 （C）2e。 （D）e。
【解】由曲线 $y=x^2$ 与曲线 $y=a\ln x(a\neq0)$ 相切可知，$\begin{cases}x^2=a\ln x,\\2x=\frac{a}{x}.\end{cases}$ 由上式解得 $a$` },
      { p: 58, md: R`$=2e$，故应选（C）。
【注】若两曲线相切，则在切点处函数值相等且导数值相等。
###### 题型三 导数与微分的计算
**（一）复合函数求导法**
【例1】设 $f(x)=\ln(x+\sqrt{1+x^2})$，则 $f''(0)=$______。
【解】应填 0。因为 $f(x)$ 为奇函数，$f'(x)$ 为偶函数，$f''(x)$ 为奇函数，则 $f''(0)=0$。
【例2】已知 $y=f\left(\frac{3x-2}{3x+2}\right)$，$f'(x)=\arctan x^2$，则 $\left.\frac{dy}{dx}\right|_{x=0}=$______。
【解】$\left.\frac{dy}{dx}\right|_{x=0}=f'\left(\frac{3x-2}{3x+2}\right)\left(\frac{12}{(3x+2)^2}\right)\Big|_{x=0}=f'(-1)\cdot3=3\arctan1=\frac{3}{4}\pi$。
【例3】设 $f(x)=\begin{cases}x^2,&x\geq0,\\x^4,&x<0,\end{cases}$ $g(x)=\begin{cases}-\sqrt{x},&x\geq0,\\x^2,&x<0,\end{cases}$ 若 $y=f[g(x)]$，则
（A）$\left.\frac{dy}{dx}\right|_{x=1}=1$。 （B）$\left.\frac{dy}{dx}\right|_{x=1}$ 不存在。 （C）$\left.\frac{dy}{dx}\right|_{x=0}=0$。 （D）$\left.\frac{dy}{dx}\right|_{x=0}$ 不存在。
【解】由于 $g(1)=-1,g'(1)=\left.\frac{-1}{2\sqrt{x}}\right|_{x=1}=-\frac{1}{2},f'(-1)=4x^3\big|_{x=-1}=-4$，故 $\left.\frac{dy}{dx}\right|_{x=1}=f'(-1)\cdot g'(1)=\left(-\frac{1}{2}\right)\cdot(-4)=2.$
显然 $g'(0)$ 不存在，但由此不能断定 $\left.\frac{dy}{dx}\right|_{x=0}$ 不存在。事实上 $y=f[g(x)]=\begin{cases}x^2,&x>0,\\x^4,&x\leq0,\end{cases}$ 则 $\left.\frac{dy}{dx}\right|_{x=0}=0$。故应选（C）。
【注】(1) 读者不难验证若 $y=g[f(x)]$，则 $\left.\frac{dy}{dx}\right|_{x=0}$ 不存在。
(2) 设 $y=f(u),u=g(x),u_0=g(x_0)$，如果 $g'(x_0)$ 和 $f'(u_0)$ 都存在，则 $y=f[g(x)]$ 在 $x_0$ 处可导，且 $\left.\frac{dy}{dx}\right|_{x=x_0}=f'(u_0)\cdot g'(x_0)$；如果 $g'(x_0)$ 和 $f'(u_0)$ 至少有一个不存在，则 $y=f[g(x)]$ 在 $x_0$ 处并非一定不可导，此时，先求出复合函数 $y=f[g(x)]$ 的表达式，然后再进一步考察 $y=f[g(x)]$ 在 $x_0$ 处的可导性。
【例4】设 $\varphi(x)=\begin{cases}x^3\sin\frac{1}{x},&x\neq0,\\0,&x=0,\end{cases}$ 函数 $f(x)$ 可导，求 $F(x)=f[\varphi(x)]$ 的导数。` },
      { p: 59, md: R`【解】$F(x)=f[\varphi(x)]=\begin{cases}f\left(x^3\sin\frac{1}{x}\right),&x\neq0,\\f(0),&x=0.\end{cases}$
当 $x\neq0$ 时，$F'(x)=f'\left(x^3\sin\frac{1}{x}\right)\left(3x^2\sin\frac{1}{x}-x\cos\frac{1}{x}\right)$。
当 $x=0$ 时，$F(x)$ 为 $f(u)$ 和 $u=\varphi(x)$ 的复合，且 $\varphi(0)=0$。由题设 $f'(0)$ 存在，若 $\varphi'(0)$ 存在，则由复合函数求导法知 $F'(0)=f'(0)\varphi'(0)$，而 $\varphi'(0)=\lim\limits_{x\to0}\frac{x^3\sin\frac{1}{x}-0}{x}=\lim\limits_{x\to0}x^2\sin\frac{1}{x}=0$，故 $F'(0)=f'(0)\cdot0=0$。
【注】$F'(0)=\lim\limits_{x\to0}\frac{F(x)-F(0)}{x-0}=\lim\limits_{x\to0}\frac{f\left(x^3\sin\frac{1}{x}\right)-f(0)}{x-0}=\lim\limits_{x\to0}\frac{f\left(x^3\sin\frac{1}{x}\right)-f(0)}{x^3\sin\frac{1}{x}}\cdot\frac{x^3\sin\frac{1}{x}}{x}=\lim\limits_{x\to0}\frac{f\left(x^3\sin\frac{1}{x}\right)-f(0)}{x^3\sin\frac{1}{x}}\cdot\lim\limits_{x\to0}\frac{x^3\sin\frac{1}{x}}{x}=f'(0)\cdot0=0.$
这是一种“经典”的错误，原因是极限 $\lim\limits_{x\to0}\frac{f\left(x^3\sin\frac{1}{x}\right)-f(0)}{x^3\sin\frac{1}{x}}$ 不存在，因为求极限的函数在 $x=0$ 的任何去心邻域内都有没定义的点 $x=\frac{1}{n\pi}(n$ 充分大$)$。
**（二）隐函数求导法**
【例1】设 $y=y(x)$ 由 $y=\tan(x+y)$ 所确定，试求 $y',y''$。
【解】等式 $y=\tan(x+y)$ 两端对 $x$ 求导得
$$y'=\sec^2(x+y)(1+y')=[1+\tan^2(x+y)](1+y')=(1+y^2)(1+y').(\text{利用原方程化简})$$
$$y'=-\frac{1}{y^2}-1,\quad y''=\frac{2y'}{y^3}=-\frac{2}{y^3}\left(\frac{1}{y^2}+1\right).$$
【例2】设函数 $y=y(x)$ 由 $y-xe^y=1$ 确定，试求 $\left.\frac{d^2y}{dx^2}\right|_{x=0}$。
【解】由 $y-xe^y=1$ 知，$x=0$ 时 $y=1$，且 $y'-e^y-xy'e^y=0.$ ①` },
      { p: 60, md: R`将 $x=0,y=1$ 代入上式得 $y'(0)=e$。
① 式两端对 $x$ 求导得 $y''-y'e^y-y'e^y-x(y'e^y)'=0$，将 $x=0,y=1,y'(0)=e$ 代入上式得 $y''(0)=2e^2$。
【例3】设可导函数 $y=y(x)$ 由方程 $\sin x-\int_x^y\varphi(u)du=0$ 确定，其中可导函数 $\varphi(u)>0$，且 $\varphi(0)=\varphi'(0)=1$，求 $y''(0)$。
【解】在 $\sin x-\int_x^y\varphi(u)du=0$ 中令 $x=0$ 得 $\int_0^y\varphi(u)du=0$，又 $\varphi(u)>0$，则 $y=0$。
等式 $\sin x-\int_x^y\varphi(u)du=0$ 两端对 $x$ 求导得 $\cos x-[\varphi(y)y'-\varphi(x)]=0,$ ①
将 $x=0,y=0$ 代入 ① 式得 $y'(0)=2$。
等式 ① 两端对 $x$ 求导得 $-\sin x-[\varphi'(y)y'^2+\varphi(y)y''-\varphi'(x)]=0$，将 $x=0,y=0,y'(0)=2$ 代入上式得 $y''(0)=-3$。
**（三）参数方程求导法（数学三不要求）**
公式：$\frac{dy}{dx}=\frac{y'(t)}{x'(t)};$ $\quad\frac{d^2y}{dx^2}=\frac{y''(t)x'(t)-x''(t)y'(t)}{x'^3(t)}.$
方法：一阶导数代公式，二阶导数利用 $\frac{d^2y}{dx^2}=\frac{d}{dt}\left(\frac{y'(t)}{x'(t)}\right)\frac{1}{x'(t)}.$
【例1】设 $f''(t)\neq0$，有 $\begin{cases}x=f'(t),\\y=tf'(t)-f(t),\end{cases}$ 求 $\frac{d^2y}{dx^2}$。
【解】$\frac{dy}{dx}=\frac{y'(t)}{x'(t)}=\frac{f'(t)+tf''(t)-f'(t)}{f''(t)}=t$，$\frac{d^2y}{dx^2}=\frac{d}{dx}(t)=\frac{d}{dt}(t)\frac{dt}{dx}=1\cdot\frac{1}{x'(t)}=\frac{1}{f''(t)}$。
【注】本题中求二阶导数 $\frac{d^2y}{dx^2}$ 不能套公式，条件不够。
【例2】设 $y=y(x)$ 由 $\begin{cases}x=3t^2+2t+3,\\e^y\sin t-y+1=0\end{cases}$ 确定，求 $\left.\frac{d^2y}{dx^2}\right|_{t=0}$。
【解】本题最简单的方法是利用公式 $\left.\frac{d^2y}{dx^2}\right|_{t=0}=\frac{y''(0)x'(0)-x''(0)y'(0)}{x'^3(0)}.$
由 $x=3t^2+2t+3$ 知 $x'=6t+2,x''=6$，则 $x'(0)=2,x''(0)=6$。
由 $e^y\sin t-y+1=0$ 知 $y(0)=1$，且 $e^yy'\sin t+e^y\cos t-y'=0$，$(e^yy')\cos t+(e^yy')'\sin t+e^yy'\cos t=e^y\sin t-y''=0.$` },
      { p: 61, md: R`令 $t=0$，得 $y'(0)=e,y''(0)=2e^2$。于是 $\left.\frac{d^2y}{dx^2}\right|_{t=0}=\frac{2e^2-3e}{4}.$
【注】本题是隐函数与参数方程求导的一种综合题，直接代公式简单。
**（四）反函数求导法**
【例】设 $y=f(x)$ 的反函数是 $x=\varphi(y)$，且 $f(x)=\int_1^{2x}e^{t^2}dt+1$，则 $\varphi''(1)=$______。
【解】由反函数求导法得 $\varphi'(y)=\frac{dx}{dy}=\frac{1}{\frac{dy}{dx}}=\frac{1}{f'(x)}.$
上式两端对 $y$ 求导得 $\varphi''(y)=\frac{d}{dx}\left[\frac{1}{f'(x)}\right]\cdot\frac{dx}{dy}=-\frac{f''(x)}{[f'(x)]^2}\cdot\frac{1}{f'(x)}.$
由 $f(x)=\int_1^{2x}e^{t^2}dt+1$ 知，$x=\frac{1}{2}$ 时 $y=1$，且 $f'(x)=2e^{4x^2},f''(x)=16xe^{4x^2}$，
则 $\varphi''(1)=-\frac{f''\left(\frac{1}{2}\right)}{\left[f'\left(\frac{1}{2}\right)\right]^3}=-\frac{8e}{8e^3}=-\frac{1}{e^2}$。
【注】这里要注意 $\frac{dx}{dy}=\frac{1}{\frac{dy}{dx}}$，但 $\frac{d^2x}{dy^2}\neq\frac{1}{\frac{d^2y}{dx^2}}$。
**（五）对数求导法**
对于幂指函数、连乘、连除、开方、乘方等形式的函数一般采用对数求导法。
【例1】设 $y=(1+x^2)^{\sin x}$，求 $y'$。
【解】$\ln y=\sin x\ln(1+x^2)$，$\frac{y'}{y}=\cos x\ln(1+x^2)+\frac{2x\sin x}{1+x^2}$，
$$y'=(1+x^2)^{\sin x}\left[\cos x\ln(1+x^2)+\frac{2x\sin x}{1+x^2}\right].$$
【例2】设 $y=\sqrt[3]{\frac{(x+1)(x+2)}{x(1+x^2)}}$，求 $y'$。
【解】$\ln|y|=\frac{1}{3}[\ln|x+1|+\ln|x+2|-\ln|x|-\ln(1+x^2)]$，
$\frac{y'}{y}=\frac{1}{3}\left[\frac{1}{x+1}+\frac{1}{x+2}-\frac{1}{x}-\frac{2x}{1+x^2}\right]$
$$y'=\frac{1}{3}\sqrt[3]{\frac{(x+1)(x+2)}{x(1+x^2)}}\left[\frac{1}{x+1}+\frac{1}{x+2}-\frac{1}{x}-\frac{2x}{1+x^2}\right].$$` },
      { p: 62, md: R`**（六）高阶导数**
常用方法：
1）代公式；
2）求一阶 $y'$、二阶 $y''$，归纳 $n$ 阶导数 $y^{(n)}$；
3）利用泰勒级数（或泰勒公式）
① 泰勒级数 $f(x)=\sum_{n=0}^{\infty}\frac{f^{(n)}(x_0)}{n!}(x-x_0)^n$。
② 泰勒公式 $f(x)=f(x_0)+f'(x_0)(x-x_0)+\frac{f''(x_0)}{2!}(x-x_0)^2+\cdots+\frac{f^{(n)}(x_0)}{n!}(x-x_0)^n+o((x-x_0)^n)$
【例1】设 $f(x)=\frac{x}{2x^2-7x+6}$，求 $f^{(n)}(x)$。
【解】$f(x)=\frac{x}{2x^2-7x+6}=\frac{x}{(2x-3)(x-2)}=\frac{2}{x-2}-\frac{3}{2x-3}$，
$$f^{(n)}(x)=\left(\frac{2}{x-2}\right)^{(n)}-\left(\frac{3}{2x-3}\right)^{(n)}.$$
令 $\varphi(x)=\frac{1}{x-2}=(x-2)^{-1}$，则 $\varphi'(x)=(-1)(x-2)^{-2},\varphi''(x)=(-1)(-2)(x-2)^{-3}$，
$$\varphi^{(n)}(x)=(-1)^nn!(x-2)^{-(n+1)}=\frac{(-1)^nn!}{(x-2)^{n+1}}.$$
同理可得 $\left(\frac{1}{2x-3}\right)^{(n)}=\frac{(-1)^n2^nn!}{(2x-3)^{n+1}}$。
则 $f^{(n)}(x)=\frac{2(-1)^nn!}{(x-2)^{n+1}}-\frac{3(-1)^n2^nn!}{(2x-3)^{n+1}}=(-1)^nn!\left[\frac{2}{(x-2)^{n+1}}-\frac{3\cdot2^n}{(2x-3)^{n+1}}\right]$。
【例2】设 $f(x)=e^x\sin x$，求 $f^{(n)}(x)$。
【解】$f'(x)=e^x\sin x+e^x\cos x=e^x(\sin x+\cos x)=\sqrt{2}e^x\sin\left(x+\frac{\pi}{4}\right)$，
$$f^{(n)}(x)=(\sqrt{2})^ne^x\sin\left(x+n\cdot\frac{\pi}{4}\right).$$
【例3】设 $f(x)=\sin^4x+\cos^4x$，求 $f^{(n)}(x)$。
【解】$f(x)=1-2\sin^2x\cos^2x=1-\frac{1}{2}\sin^22x$，$f'(x)=-2\sin2x\cos2x=-\sin4x$，
$$f^{(n)}(x)=-4^{n-1}\sin\left(4x+(n-1)\frac{\pi}{2}\right).$$
【例4】求函数 $f(x)=x^2\ln(1+x)$ 在 $x=0$ 处的 $n(n>2)$ 阶导数。
【解1】利用公式 $(uv)^{(n)}=\sum_{k=0}^{n}C_n^ku^{(k)}v^{(n-k)}$。
令 $u=x^2,v=\ln(1+x)$，则 $u'=2x,u''=2,u^{(k)}=0(k\geq3)$，$u(0)=0,u'(0)=0,u''(0)=2,u^{(k)}(0)=0(k\geq3)$，` }
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
