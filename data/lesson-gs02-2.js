window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["gs02_s1"] = {
    id: "gs02_s1",
    ch: "第二章 一元函数微分学",
    title: "第二节 导数应用",
    book: "武忠祥《高等数学辅导讲义》",
    pages: [63, 80],
    img: "assets/img/gaoshu",
    content: [
      { p: 63, md: R`$$f^{(n)}(0)=\mathrm{C}_n^2u^{(2)}(0)v^{(n-2)}(0).$$
又 $v'=\dfrac{1}{1+x}=(x+1)^{-1}$，$v''=(-1)(x+1)^{-2}$，$v'''=(-1)(-2)(x+1)^{-3}$，$v^{(n)}=(-1)^{n-1}(n-1)!(x+1)^{-n}$，$v^{(n-2)}=(-1)^{n-3}(n-3)!(x+1)^{-(n-2)}=\dfrac{(-1)^{n-1}(n-3)!}{(x+1)^{n-2}}$，$v^{(n-2)}(0)=(-1)^{n-1}(n-3)!$，故 $f^{(n)}(0)=\dfrac{n(n-1)}{2!}2(-1)^{n-1}(n-3)!=\dfrac{(-1)^{n-1}n!}{n-2}$。
【解2】$f(x)=x^2\left(x-\dfrac{x^2}{2}+\cdots+\dfrac{(-1)^{n-1}x^n}{n}+\cdots\right)=x^3-\dfrac{x^4}{2}+\cdots+\dfrac{(-1)^{n-1}x^{n+2}}{n}+\cdots$，等式右端 $x$ 的 $n$ 次项系数 $a_n=\dfrac{(-1)^{n-3}}{(n-2)}=\dfrac{(-1)^{n-1}}{n-2}$，又 $a_n=\dfrac{f^{(n)}(0)}{n!}$，故 $f^{(n)}(0)=a_nn!=\dfrac{(-1)^{n-1}n!}{(n-2)}$。

## 一、考试内容要点精讲

### （一）微分中值定理
罗尔定理：设 $f(x)$ 在 $[a,b]$ 上连续，在 $(a,b)$ 内可导，且 $f(a)=f(b)$，那么至少存在一个 $\xi\in(a,b)$，使 $f'(\xi)=0$。
拉格朗日定理：设 $f(x)$ 在 $[a,b]$ 上连续，在 $(a,b)$ 内可导，那么至少存在一个 $\xi\in(a,b)$，使 $\dfrac{f(b)-f(a)}{b-a}=f'(\xi)$。
柯西定理：设 $f(x),g(x)$ 在 $[a,b]$ 上连续，在 $(a,b)$ 内可导，且 $g'(x)\neq0$，那么至少存在一个 $\xi\in(a,b)$，使 $\dfrac{f(b)-f(a)}{g(b)-g(a)}=\dfrac{f'(\xi)}{g'(\xi)}$。
泰勒定理（拉格朗日余项）：设 $f(x)$ 在区间 $I$ 上 $n+1$ 阶可导，$x_0\in I$，那么 $\forall x\in I$，至少存在一个 $\xi$ 使
$$f(x)=f(x_0)+f'(x_0)(x-x_0)+\frac{f''(x_0)}{2!}(x-x_0)^2+\cdots+\frac{f^{(n)}(x_0)}{n!}(x-x_0)^n+R_n(x),$$
其中 $R_n(x)=\dfrac{f^{(n+1)}(\xi)}{(n+1)!}(x-x_0)^{n+1}$，$\xi$ 在 $x_0$ 与 $x$ 之间。` },
      { p: 64, md: R`### （二）极值与最值
1. 极值的概念：设 $y=f(x)$ 在点 $x_0$ 的某邻域内有定义，如果对于该去心邻域内任何 $x$，恒有 $f(x)<f(x_0)$（或 $f(x)>f(x_0)$），则称 $x_0$ 为 $f(x)$ 的一个极大值点（或极小值点），称 $f(x_0)$ 为 $f(x)$ 的极大值（或极小值）。极大（小）值统称为极值；极大（小）值点统称为极值点。
【注】(1) 函数在区间 $[a,b]$ 上的极值只能在开区间 $(a,b)$ 上取得；端点 $x=a,x=b$ 处不可能取得极值。(2) 若函数在闭区间 $[a,b]$ 上的最大值（或最小值）在开区间 $(a,b)$ 上某点取得，那么函数在该点处必取得极大值（或极小值）。

2. 极值的必要条件：设 $y=f(x)$ 在点 $x_0$ 处可导，且 $x_0$ 为 $f(x)$ 的极值点，则 $f'(x_0)=0$。通常把导数为零的点称为函数的驻点。对可导函数而言，极值点必为驻点，但驻点并不一定是极值点。而对一般函数而言，极值只可能在驻点和导数不存在的点上取得。

3. 极值的充分条件
1) 第一充分条件：设 $f'(x_0)=0$（或 $f(x)$ 在 $x_0$ 处连续），且在 $x_0$ 的某去心邻域 $\mathring{U}(x_0,\delta)$ 内可导。(1) 若 $x\in(x_0-\delta,x_0)$ 时 $f'(x)>0$，而 $x\in(x_0,x_0+\delta)$ 时 $f'(x)<0$，则 $f(x)$ 在 $x_0$ 处取得极大值；(2) 若 $x\in(x_0-\delta,x_0)$ 时 $f'(x)<0$，而 $x\in(x_0,x_0+\delta)$ 时 $f'(x)>0$，则 $f(x)$ 在 $x_0$ 处取得极小值；(3) 若 $x\in\mathring{U}(x_0,\delta)$ 时 $f'(x)$ 的符号保持不变，则 $f(x)$ 在 $x_0$ 处没有极值。
2) 第二充分条件：若 $f'(x_0)=0$，$f''(x_0)\neq0$，则 $f(x)$ 在 $x_0$ 处取得极值，其中当 $f''(x_0)>0$ 时极小，当 $f''(x_0)<0$ 时极大。
3) 第三充分条件：若 $f'(x_0)=f''(x_0)=\cdots=f^{(n-1)}(x_0)=0$，$f^{(n)}(x_0)\neq0$，则当 $n$ 为偶数时 $f(x)$ 在 $x_0$ 处有极值，其中 $f^{(n)}(x_0)>0$ 时极小，$f^{(n)}(x_0)<0$ 时极大；当 $n$ 为奇数时 $f(x)$ 在 $x_0$ 处无极值。

4. 函数的最值：连续函数 $f(x)$ 在 $[a,b]$ 上的最值的求法：第一步，求出 $f(x)$ 在开区间 $(a,b)$ 内的驻点和不可导的点 $x_1,x_2,\cdots,x_n$；第二步，求出 $f(x)$ 在点 $x_1,x_2,\cdots,x_n$ 和区间端点 $a,b$ 处的函数值；第三步，比较以上各点函数值，其中最大的即为最大值，最小的即为最小值。
【注】当闭区间 $[a,b]$ 上的连续函数 $f(x)$ 在 $(a,b)$ 内仅有唯一极值点，若在该点 $f(x)$ 取极大值（或极小值），则它也是 $f(x)$ 在 $[a,b]$ 上的最大值（或最小值）。

### （三）曲线的凹向与拐点
1. 曲线的凹向
1) 定义：设 $f(x)$ 在区间 $I$ 上连续，如果对 $I$ 上任意两点 $x_1,x_2$，恒有` },
      { p: 65, md: R`$$f\left(\frac{x_1+x_2}{2}\right)<\frac{f(x_1)+f(x_2)}{2},$$
则称 $f(x)$ 在 $I$ 上的图形是凹的；如果恒有 $f\left(\dfrac{x_1+x_2}{2}\right)>\dfrac{f(x_1)+f(x_2)}{2}$，则称 $f(x)$ 在 $I$ 上的图形是凸的。
2) 判定：若在区间 $I$ 上 $f''(x)>0\ (<0)$，则曲线 $y=f(x)$ 在 $I$ 上是凹（凸）的。

2. 曲线的拐点
1) 定义：如果连续曲线 $y=f(x)$ 在点 $(x_0,f(x_0))$ 邻近两侧凹凸性相反，则称点 $(x_0,f(x_0))$ 为曲线 $y=f(x)$ 的拐点。
2) 判定（一个必要条件，三个充分条件）。
【注】将极值点的必要条件和充分条件中的导数阶数提高一阶便是拐点的一个必要条件和三个充分条件。

### （四）曲线的渐近线
1. 水平渐近线：若 $\lim\limits_{x\to+\infty}f(x)=A$（或 $\lim\limits_{x\to-\infty}f(x)=A$，或 $\lim\limits_{x\to\infty}f(x)=A$），那么 $y=A$ 是 $y=f(x)$ 的水平渐近线。
2. 垂直渐近线：若 $\lim\limits_{x\to x_0}f(x)=\infty$（或 $\lim\limits_{x\to x_0^+}f(x)=\infty$，或 $\lim\limits_{x\to x_0^-}f(x)=\infty$），那么 $x=x_0$ 是 $y=f(x)$ 的垂直渐近线。
3. 斜渐近线：若 $\lim\limits_{x\to\infty}\dfrac{f(x)}{x}=a$，$\lim\limits_{x\to\infty}(f(x)-ax)=b$（或 $x\to-\infty$ 或 $x\to+\infty$），那么 $y=ax+b$ 是 $y=f(x)$ 的斜渐近线。

### （五）平面曲线的曲率（数三不要求）
1. 曲率的定义：$K=\lim\limits_{\Delta s\to0}\left|\dfrac{\Delta\alpha}{\Delta s}\right|$。
2. 曲率的计算：1) 若曲线由直角坐标方程 $y=y(x)$ 给出，则 $K=\dfrac{|y''|}{(1+y'^2)^{\frac32}}$；2) 若曲线由参数方程 $\begin{cases}x=x(t)\\y=y(t)\end{cases}$ 给出，则 $K=\dfrac{|y''x'-y'x''|}{(x'^2+y'^2)^{3/2}}$。
3. 曲率圆与曲率半径：曲率半径 $R=\dfrac1K$。` },
      { p: 66, md: R`## 二、常考题型的方法与技巧
### 题型一　函数的单调性、极值与最值

【例1】求函数 $f(x)=\displaystyle\int_1^{x^2}(x^2-t)e^{-t^2}dt$ 的单调区间与极值。
【解】$f(x)$ 的定义域为 $(-\infty,+\infty)$，由于
$$f(x)=x^2\int_1^{x^2}e^{-t^2}dt-\int_1^{x^2}te^{-t^2}dt,\quad(\text{偶函数})$$
$$f'(x)=2x\int_1^{x^2}e^{-t^2}dt+2x^3e^{-x^4}-2x^3e^{-x^4}=2x\int_1^{x^2}e^{-t^2}dt,$$
所以 $f(x)$ 的驻点为 $x=0,\pm1$。列表讨论如下：

| $x$ | $(-\infty,-1)$ | $-1$ | $(-1,0)$ | $0$ | $(0,1)$ | $1$ | $(1,+\infty)$ |
|---|---|---|---|---|---|---|---|
| $f'(x)$ | $-$ | $0$ | $+$ | $0$ | $-$ | $0$ | $+$ |
| $f(x)$ | $\searrow$ | 极小 | $\nearrow$ | 极大 | $\searrow$ | 极小 | $\nearrow$ |

因此 $f(x)$ 的单调增加区间为 $(-1,0)$ 及 $(1,+\infty)$，单调减少区间为 $(-\infty,-1)$ 及 $(0,1)$；极小值为 $f(\pm1)=0$，极大值为 $f(0)=\displaystyle\int_1^0te^{-t^2}dt=\dfrac12(1-e^{-1})$。

【例2】设函数 $y=f(x)$ 由方程 $y^3+xy^2+x^2y+6=0$ 确定，求 $f(x)$ 的极值。
【解】方程 $y^3+xy^2+x^2y+6=0$ 两端对 $x$ 求导得
$$3y^2y'+y^2+2xyy'+2xy+x^2y'=0.\tag{1}$$
在 ① 式中令 $y'=0$，得 $y^2+2xy=0$，由此可得 $y=0$，$y=-2x$。显然 $y=0$ 不满足原方程，将 $y=-2x$ 代入原方程 $y^3+xy^2+x^2y+6=0$，得 $-6x^3+6=0$，解得 $x_0=1$，$f(1)=-2$，$f'(1)=0$。
对 ① 式两端再对 $x$ 求导得 $6yy'^2+3y^2y''+4yy'+2xy'^2+2xyy''+2y+4xy'+x^2y''=0$。将 $x=1$，$f(1)=-2$，$f'(1)=0$ 代入上式得 $f''(1)=\dfrac49>0$，则函数 $y=f(x)$ 在 $x=1$ 处取得极小值，且 $f(1)=-2$。

【例3】设 $f(x)$ 有二阶连续导数，且 $f'(0)=0$，$\lim\limits_{x\to0}\dfrac{f''(x)}{|x|}=1$。则 (A) $f(0)$ 是 $f(x)$ 的极大值 (B) $f(0)$ 是 $f(x)$ 的极小值 (C) $(0,f(0))$ 是曲线 $y=f(x)$ 的拐点 (D) $f(0)$ 不是 $f(x)$ 的极值，$(0,f(0))$ 也不是曲线 $y=f(x)$ 的拐点
【解】由于 $\lim\limits_{x\to0}\dfrac{f''(x)}{|x|}=1>0$，由极限的保号性知在 $x=0$ 的某去心邻域内 $\dfrac{f''(x)}{|x|}>0$，即 $f''(x)>0$，从而 $f'(x)$ 单调增。又 $f'(0)=0$，则在 $x=0$ 的左半邻域 $f'(x)<0$，而在 $x=0$ 的右半邻域内 $f'(x)>0$，从而 $f(x)$ 在 $x=0$ 处取极小值，故选 (B)。` },
      { p: 67, md: R`【注】若将题设中条件 $f'(0)=0$，$\lim\limits_{x\to0}\dfrac{f''(x)}{|x|}=1$ 改为 $\lim\limits_{x\to0}\dfrac{f''(x)}{x}=-1$，则本题应选 (C)。

【例4】设 $f(x)$ 二阶导数连续，且 $(x-1)f''(x)-2(x-1)f'(x)=1-e^{1-x}$。试问：1) 若 $f(x)$ 在 $x=a\ (a\neq1)$ 取得极值，是极小值还是极大值？2) 若 $f(x)$ 在 $x=1$ 取得极值，是极小值还是极大值？
【解】1) 由于 $x=a$ 为极值点，则 $f'(a)=0$。在等式 $(x-1)f''(x)-2(x-1)f'(x)=1-e^{1-x}$ 中令 $x=a$ 得 $(a-1)f''(a)-2(a-1)f'(a)=1-e^{1-a}$，即 $(a-1)f''(a)=1-e^{1-a}$，故
$$f''(a)=\frac{1-e^{1-a}}{a-1}>0\quad(a\neq1)$$
从而 $f(x)$ 在 $x=a$ 取极小值。
2) 由 $(x-1)f''(x)-2(x-1)f'(x)=1-e^{1-x}$ 知 $f''(x)-2f'(x)=\dfrac{1-e^{1-x}}{1-x}$，从而
$$\lim_{x\to1}f''(x)-2\lim_{x\to1}f'(x)=\lim_{x\to1}\frac{1-e^{1-x}}{x-1}=1,$$
则 $f''(1)=1>0$，又 $f'(1)=0$，故 $x=1$ 为 $f(x)$ 的极小值点。

【例5】设 $f(x)$ 二阶可导，且 $\lim\limits_{h\to0}\dfrac{f(x_0+h)-f(x_0)-f'(x_0)}{h^2}=a\neq0$，试讨论 $f(x)$ 在 $x_0$ 点的极值。
【解1】由 $\lim\limits_{h\to0}\dfrac{f(x_0+h)-f(x_0)-f'(x_0)}{h^2}$ 存在、$f(x)$ 二阶可导从而连续及 $\lim\limits_{h\to0}h^2=0$ 知 $f'(x_0)=0$，即 $x_0$ 为驻点，从而
$$\lim_{h\to0}\frac{f(x_0+h)-f(x_0)-f'(x_0)}{h^2}=\lim_{h\to0}\frac{f(x_0+h)-f(x_0)}{h^2}=\lim_{h\to0}\frac{f'(x_0+h)}{2h}=\lim_{h\to0}\frac{f'(x_0+h)-f'(x_0)}{2h}=\frac12f''(x_0)=a,$$
故当 $a>0$ 时 $x_0$ 为极小值点；当 $a<0$ 时 $x_0$ 为极大值点。
【解2】同【解1】知 $f'(x_0)=0$，则 $\lim\limits_{h\to0}\dfrac{f(x_0+h)-f(x_0)}{h^2}=a\neq0$。不妨设 $a>0$，由极限保号性知，当 $h$ 的绝对值充分小时 $\dfrac{f(x_0+h)-f(x_0)}{h^2}>0$，即 $f(x_0+h)-f(x_0)>0$。由极值定义知 $x_0$ 为 $f(x)$ 极小值点。同理可得当 $a<0$ 时 $x_0$ 为 $f(x)$ 极大值点。

### 题型二　曲线的凹向、拐点、渐近线及曲率
【例1】设函数 $f(x)$ 满足关系式 $f''(x)+[f'(x)]^2=\sin x$，且 $f'(0)=0$，则` },
      { p: 68, md: R`(A) $f(0)$ 是 $f(x)$ 的极大值 (B) $f(0)$ 是 $f(x)$ 的极小值 (C) 点 $(0,f(0))$ 是曲线 $y=f(x)$ 的拐点 (D) $f(0)$ 不是 $f(x)$ 的极值，点 $(0,f(0))$ 也不是曲线 $y=f(x)$ 的拐点
【解】在等式 $f''(x)+[f'(x)]^2=\sin x$ 中，令 $x=0$，得 $f''(0)=0$。等式 $f''(x)+[f'(x)]^2=\sin x$ 两端对 $x$ 求导得 $f'''(x)+2f'(x)f''(x)=\cos x$。上式中令 $x=0$，得 $f'''(0)=1>0$，则点 $(0,f(0))$ 是曲线 $y=f(x)$ 的拐点，故应选 (C)。

【例2】设函数 $y=y(x)$ 由参数方程 $\begin{cases}x=\dfrac13t^3+t+\dfrac13\\y=\dfrac13t^3-t+\dfrac13\end{cases}$ 确定，求 $y=y(x)$ 的极值和曲线 $y=y(x)$ 的凹凸区间及拐点。
【解】令 $\dfrac{dy}{dx}=\dfrac{t^2-1}{t^2+1}=0$，得 $t=\pm1$。当 $t=1$ 时 $x=\dfrac53$；当 $t=-1$ 时 $x=-1$。令 $\dfrac{d^2y}{dx^2}=\dfrac{\dfrac{4t}{(t^2+1)^2}}{t^2+1}=\dfrac{4t}{(t^2+1)^3}=0$，得 $t=0$，即 $x=\dfrac13$。列表如下：

| $t$ | $(-\infty,-1)$ | $-1$ | $(-1,0)$ | $0$ | $(0,1)$ | $1$ | $(1,+\infty)$ |
|---|---|---|---|---|---|---|---|
| $x$ | $(-\infty,-1)$ | $-1$ | $(-1,\frac13)$ | $\frac13$ | $(\frac13,\frac53)$ | $\frac53$ | $(\frac53,+\infty)$ |
| $y'$ | $+$ | $0$ | $-$ | $-$ | $-$ | $0$ | $+$ |
| $y''$ | $-$ | $-$ | $-$ | $0$ | $+$ | $+$ | $+$ |

由此可知，函数 $y(x)$ 的极大值为 $y(-1)=y\big|_{t=-1}=1$，极小值为 $y\left(\dfrac53\right)=y\big|_{t=1}=-\dfrac13$。曲线 $y=y(x)$ 的凹区间为 $\left(\dfrac13,+\infty\right)$，凸区间为 $\left(-\infty,\dfrac13\right)$。由于 $y\left(\dfrac13\right)=y\big|_{t=0}=\dfrac13$，所以曲线 $y=y(x)$ 的拐点为 $\left(\dfrac13,\dfrac13\right)$。

【例3】曲线 $y=\dfrac{(1+x)^{\frac32}}{\sqrt{x}}$ 的斜渐近线方程为______。
【解】$\lim\limits_{x\to+\infty}\dfrac yx=\lim\limits_{x\to+\infty}\dfrac{(1+x)^{\frac32}}{x\sqrt{x}}=\lim\limits_{x\to+\infty}\left(1+\dfrac1x\right)^{\frac32}=1=a,$
$$\lim_{x\to+\infty}[y-ax]=\lim_{x\to+\infty}\left[\frac{(1+x)^{\frac32}}{\sqrt{x}}-x\right]=\lim_{x\to+\infty}\frac{(1+x)^{\frac32}-x\sqrt{x}}{\sqrt{x}}=\lim_{x\to+\infty}\frac{x^{\frac32}\left[\left(1+\frac1x\right)^{\frac32}-1\right]}{\sqrt{x}}=\lim_{x\to+\infty}\frac{x^{\frac32}\cdot\frac32\cdot\frac1x}{\sqrt{x}}\quad\left(\left(1+\frac1x\right)^{\frac32}-1\sim\frac32\cdot\frac1x\right)=\frac32=b,$$` },
      { p: 69, md: R`则斜渐近线方程为 $y=x+\dfrac32$。

【例4】曲线 $y=e^{x+\frac1x}\arctan\dfrac{x^2+x+1}{(x-1)(x-2)}$ 的渐近线条数是 (A) 1 (B) 2 (C) 3 (D) 4
【解】由于 $\lim\limits_{x\to0^+}e^{x+\frac1x}\arctan\dfrac{x^2+x+1}{(x-1)(x-2)}=+\infty$，则 $x=0$ 为其垂直渐近线。由于 $\lim\limits_{x\to-\infty}e^{x+\frac1x}\arctan\dfrac{x^2+x+1}{(x-1)(x-2)}=0$，则 $y=0$ 为水平渐近线。由于 $\lim\limits_{x\to+\infty}\dfrac yx=\lim\limits_{x\to+\infty}\dfrac{e^x}{x}e^{\frac1x}\arctan\dfrac{x^2+x+1}{(x-1)(x-2)}=+\infty$（不存在），则原曲线无斜渐近线，应选 (B)。

【例5】求曲线 $y=x\arctan x$ 的渐近线。
【解】显然曲线 $y=x\arctan x$ 无水平渐近线和垂直渐近线。
$$\lim_{x\to+\infty}\frac{f(x)}{x}=\lim_{x\to+\infty}\arctan x=\frac\pi2=a,$$
$$b=\lim_{x\to+\infty}(f(x)-ax)=\lim_{x\to+\infty}\left(x\arctan x-\frac\pi2x\right)=\lim_{x\to+\infty}x\left(\arctan x-\frac\pi2\right)=\lim_{x\to+\infty}\frac{\arctan x-\frac\pi2}{\frac1x}=\lim_{x\to+\infty}\frac{\frac{1}{1+x^2}}{-\frac{1}{x^2}}=-1=b,$$
所以 $y=ax+b=\dfrac\pi2x-1$ 是 $x\to+\infty$ 时的斜渐近线。同理 $y=-\dfrac\pi2x-1$ 是 $x\to-\infty$ 时的斜渐近线。
【注】本题也可由 $y=x\arctan x$ 是偶函数，知其图形关于 $y$ 轴对称，因此由 $y=\dfrac\pi2x-1$ 是 $x\to+\infty$ 时的斜渐近线可知 $y=-\dfrac\pi2x-1$ 是 $x\to-\infty$ 时的斜渐近线。

### 题型三　方程的根的存在性及个数
1. 存在性：方法1，零点定理；方法2，罗尔定理。
2. 根的个数：方法1，单调性；方法2，罗尔定理推论。罗尔定理推论：若在区间 $I$ 上 $f^{(n)}(x)\neq0$，则方程 $f(x)=0$ 在 $I$ 上最多 $n$ 个实根。

【例1】设 $a_1,a_2,\cdots,a_n$ 为任意实数，求证方程 $a_1\cos x+a_2\cos2x+\cdots+a_n\cos nx=0$ 在 $[0,\pi]$ 内必有实根。` },
      { p: 70, md: R`【证】令 $f(x)=a_1\sin x+\dfrac{a_2}{2}\sin2x+\cdots+\dfrac{a_n}{n}\sin nx$，则 $f'(x)=a_1\cos x+a_2\cos2x+\cdots+a_n\cos nx$。$f(x)$ 在 $[0,\pi]$ 上满足罗尔定理条件，由罗尔定理知存在 $c\in(0,\pi)$，使 $f'(c)=0$。故原方程在 $[0,\pi]$ 内至少有一实根。

【例2】试讨论方程 $\ln x-\dfrac xe+1=0$ 的实根个数。
【解】令 $f(x)=\ln x-\dfrac xe+1$，$x\in(0,+\infty)$，则 $f'(x)=\dfrac1x-\dfrac1e$，令 $f'(x)=0$，得 $x=e$。当 $x\in(0,e)$ 时 $f'(x)>0$，$f(x)$ 单调增；当 $x\in(e,+\infty)$ 时 $f'(x)<0$，$f(x)$ 单调减。又 $f(e)=1>0$，$\lim\limits_{x\to0^+}f(x)=-\infty$，$\lim\limits_{x\to+\infty}f(x)=-\infty$，则 $f(x)$ 在 $(0,e)$ 和 $(e,+\infty)$ 内各有一个零点，故原方程有两个实根。

【例3】已知函数 $f(x)=\displaystyle\int_x^1\sqrt{1+t^2}dt+\int_1^{x^2}\sqrt{1+t}dt$，求 $f(x)$ 的零点个数。
【解】由 $f(x)=\displaystyle\int_x^1\sqrt{1+t^2}dt+\int_1^{x^2}\sqrt{1+t}dt$ 知 $f'(x)=-\sqrt{1+x^2}+2x\sqrt{1+x^2}=(2x-1)\sqrt{1+x^2}$。令 $f'(x)=0$ 得 $x=\dfrac12$。当 $x\in\left(-\infty,\dfrac12\right)$ 时 $f'(x)<0$，$f(x)$ 单调减，$f(x)$ 在该区间最多一个零点；当 $x\in\left(\dfrac12,+\infty\right)$ 时 $f'(x)>0$，$f(x)$ 单调增，$f(x)$ 在该区间最多一个零点。又 $f(-1)=\displaystyle\int_{-1}^1\sqrt{1+t^2}dt=2\int_0^1\sqrt{1+x^2}dx>0$，
$$f(0)=\int_0^1\sqrt{1+t^2}dt+\int_1^0\sqrt{1+t}dt=\int_0^1\left(\sqrt{1+t^2}-\sqrt{1+t}\right)dt<0,\quad(\sqrt{1+t^2}<\sqrt{1+t},\ t\in(0,1))$$
则 $f(x)$ 在区间 $(-1,0)$ 上至少有一个零点。又 $f(1)=0$，则 $f(x)$ 共有两个零点。

【例4】试证方程 $2^x-x^2=1$ 有且仅有三个实根。
【证】令 $f(x)=2^x-x^2-1$，则 $f(0)=0$，$f(1)=0$，$f(2)=-1<0$，$f(5)=2^5-25-1=6>0$，因此 $f(x)$ 在 $(2,5)$ 内至少有一个零点，从而原方程至少有三个实根。又 $f'(x)=2^x\ln2-2x$，$f''(x)=2^x\ln^22-2$，$f'''(x)=2^x\ln^32\neq0$，从而原方程最多三个实根，故原题得证。

【例5】试确定方程 $x=ae^x\ (a>0)$ 实根个数。
【解】将原方程变形得 $xe^{-x}-a=0$（把参数 $a$ 分离出来）。令 $f(x)=xe^{-x}-a\ (x>0)$，则 $f'(x)=e^{-x}-xe^{-x}=(1-x)e^{-x}$。令 $f'(x)=0$，得 $x=1$。` },
      { p: 71, md: R`当 $x\in(0,1)$ 时 $f'(x)>0$，$f(x)$ 单调增；当 $x\in(1,+\infty)$ 时 $f'(x)<0$，$f(x)$ 单调减。又 $\lim\limits_{x\to0^+}f(x)=-a<0$，$\lim\limits_{x\to+\infty}f(x)=\lim\limits_{x\to+\infty}\left(\dfrac x{e^x}-a\right)=-a<0$，$f(1)=\dfrac1e-a$，则
1) 当 $a<\dfrac1e$ 时，原方程有两个实根；2) 当 $a=\dfrac1e$ 时，原方程有唯一实根；3) 当 $a>\dfrac1e$ 时，原方程无实根。
【注】这是一个带有参数的方程根的问题，第一步将参数分离出来，给求解带来方便，这是一种常用方法。

【例6】设当 $x>0$ 时，方程 $kx+\dfrac{1}{x^2}=1$ 有且仅有一个解，试求 $k$ 的取值范围。
【解1】设 $f(x)=kx+\dfrac{1}{x^2}-1\ (x>0)$，则 $f'(x)=k-\dfrac{2}{x^3}$。
(1) 若 $k\leqslant0$ 时，则 $f'(x)<0$，$f(x)$ 在 $(0,+\infty)$ 上递减。又 $\lim\limits_{x\to0^+}f(x)=+\infty$，且当 $k<0$ 时 $\lim\limits_{x\to+\infty}f(x)=-\infty$；当 $k=0$ 时 $\lim\limits_{x\to+\infty}f(x)=-1$，所以当 $k\leqslant0$ 时，原方程在 $(0,+\infty)$ 内有且仅有一个解。
(2) 若 $k>0$ 时，令 $f'(x)=k-\dfrac{2}{x^3}=0$，得 $x=\sqrt[3]{\dfrac2k}$，则在 $\left(0,\sqrt[3]{\dfrac2k}\right)$ 上 $f'(x)<0$，$f(x)$ 单调减，在 $\left(\sqrt[3]{\dfrac2k},+\infty\right)$ 上 $f'(x)>0$，$f(x)$ 单调增。又 $\lim\limits_{x\to0^+}f(x)=+\infty$，$\lim\limits_{x\to+\infty}f(x)=+\infty$，所以当且仅当 $f\left(\sqrt[3]{\dfrac2k}\right)=0$ 原方程有且仅有一个解。即
$$k\cdot\sqrt[3]{\frac2k}+\frac{1}{\left(\sqrt[3]{\frac2k}\right)^2}-1=0,$$
由上式解得 $k=\dfrac29\sqrt3$。综上所述，当 $k\leqslant0$ 或 $k=\dfrac29\sqrt3$ 时原方程有且仅有一个解。
【解2】将原方程变形得 $k=\dfrac1x-\dfrac{1}{x^3}\ (x>0)$。令 $f(x)=\dfrac1x-\dfrac{1}{x^3}\ (x>0)$，则
$$f'(x)=-\frac{1}{x^2}+\frac{3}{x^4}=\frac{3-x^2}{x^4}.$$
令 $f'(x)=0$，得 $x=\sqrt3$。当 $x\in(0,\sqrt3)$ 时 $f'(x)>0$，$f(x)$ 单调增；当 $x\in(\sqrt3,+\infty)$ 时 $f'(x)<0$，$f(x)$ 单调减。
![例6 $y=\dfrac1x-\dfrac{1}{x^3}$ 的图形](assets/img/figs/gaoshu/gs02-p71-1.jpg)` },
      { p: 72, md: R`$$f(\sqrt3)=\frac29\sqrt3,\quad\lim_{x\to0^+}f(x)=\lim_{x\to0^+}\frac{x^2-1}{x^3}=-\infty,\quad\lim_{x\to+\infty}f(x)=0.$$
由此得函数 $f(x)=\dfrac1x-\dfrac{1}{x^3}\ (x>0)$ 的图形如上图。原方程有且仅有一个实根的几何意义是直线 $y=k$ 和曲线 $y=f(x)=\dfrac1x-\dfrac{1}{x^3}$ 有且仅有一个交点。由图可知 $k=\dfrac29\sqrt3$ 或 $k\leqslant0$。

【例7】设 $f(x)$ 在 $[0,1]$ 上可微，且当 $0\leqslant x\leqslant1$ 时，$0<f(x)<1$，$f'(x)\neq1$。试证在 $(0,1)$ 内有且仅有一个 $x$，使 $f(x)=x$。
【证】令 $F(x)=f(x)-x$，则 $F(0)=f(0)>0$，$F(1)=f(1)-1<0$。由零点定理知方程 $F(x)=0$ 在 $(0,1)$ 内至少有一实根，又 $F'(x)=f'(x)-1\neq0$，则 $F(x)=0$ 最多一个实根，原题得证。

【例8】设 $f''(x)<0$，$f(1)=2$，$f'(1)=-3$，求证：$f(x)=0$ 在 $(1,+\infty)$ 有且仅有一个实根。
【证1】由 $f''(x)<0$ 知 $f'(x)$ 在 $[1,+\infty)$ 上单调减，又 $f'(1)=-3<0$，则当 $x\in(1,+\infty)$ 时 $f'(x)<0$，从而 $f(x)$ 在 $(1,+\infty)$ 上单调减，方程 $f(x)=0$ 在 $(1,+\infty)$ 上最多一个实根。由泰勒公式知，当 $x\in(1,+\infty)$ 时，
$$f(x)=f(1)+f'(1)(x-1)+\frac{f''(\xi)}{2!}(x-1)^2=2-3(x-1)+\frac{f''(\xi)}{2}(x-1)^2\leqslant2-3(x-1)=5-3x,$$
令 $x=2$，则 $f(2)\leqslant5-6=-1<0$。又 $f(1)=2>0$，由零点定理知，方程 $f(x)=0$ 在 $(1,+\infty)$ 内有实根。故 $f(x)=0$ 在 $(1,+\infty)$ 有且仅有一个实根。
【证2】根的唯一性同证法1，以下只证存在性。$f(2)-f(1)=f'(c)(2-1)\ (1<c<2)\leqslant f'(1)(2-1)$（$f'(x)$ 递减），即 $f(2)\leqslant f(1)+f'(1)(2-1)=2-3=-1<0$。又 $f(1)=2>0$，由零点定理知，方程 $f(x)=0$ 在 $(1,+\infty)$ 内至少有一实根。

### 题型四　证明函数不等式
证明不等式常用的五种方法：1) 单调性；2) 最大最小值；3) 拉格朗日中值定理；4) 泰勒公式；5) 凹凸性。

【例1】设 $x\in(0,1)$，证明 $(1+x)\ln^2(1+x)<x^2$。
【证】令 $f(x)=x^2-(1+x)\ln^2(1+x)$，则 $f(0)=0$，且 $f'(x)=2x-\ln^2(1+x)-2\ln(1+x)$，$f'(0)=0$，` },
      { p: 73, md: R`$$f''(x)=2-\frac{2\ln(1+x)}{1+x}-\frac{2}{1+x}=\frac{2}{1+x}[x-\ln(1+x)]>0,\quad x\in(0,1),$$
则当 $x\in(0,1)$ 时 $f'(x)>f'(0)=0$，从而 $f(x)$ 单调增，于是 $f(x)>f(0)=0$。原题得证。
【注】本题证明中用到一个常用的基本不等式：当 $x>0$ 时，$\dfrac{x}{1+x}<\ln(1+x)<x$。

【例2】求证：$\ln\dfrac ba>\dfrac{2(b-a)}{b+a}$（$0<a<b$）。
【证】只要证 $(b+a)(\ln b-\ln a)>2(b-a)$。令 $f(x)=(x+a)(\ln x-\ln a)-2(x-a)$，$x\in[a,b]$。因为
$$f'(x)=(\ln x-\ln a)+\frac{x+a}{x}-2,\qquad f''(x)=\frac1x-\frac{a}{x^2}=\frac{x-a}{x^2}>0,\quad x\in(a,b],$$
所以 $f'(x)$ 单调增，又 $f'(a)=0$，则在 $(a,b]$ 上 $f'(x)>0$，$f(x)$ 单调增，而 $f(a)=0$，故 $f(b)>0$，即 $\ln\dfrac ba>\dfrac{2(b-a)}{b+a}$。

【例3】比较 $e^\pi$ 与 $\pi^e$ 的大小。
【解】取对数，等价于比较 $\pi\ln e$ 与 $e\ln\pi$ 的大小，也等价于比较 $\dfrac{\ln e}{e}$ 与 $\dfrac{\ln\pi}{\pi}$ 的大小，只要考察 $f(x)=\dfrac{\ln x}{x}$ 在 $[e,\pi]$ 上的单调性。
$$f'(x)=\frac{1-\ln x}{x^2}<0,\quad x\in(e,\pi],$$
则 $f(\pi)<f(e)$，即 $e^\pi>\pi^e$。

【例4】设 $\lim\limits_{x\to0}\dfrac{f(x)}{x}=1$，且 $f''(x)>0$，证明：$f(x)\geqslant x$。
【证1】由 $\lim\limits_{x\to0}\dfrac{f(x)}{x}=1$ 知 $f(0)=0,f'(0)=1$，由泰勒公式知
$$f(x)=f(0)+f'(0)x+\frac{f''(\xi)}{2!}x^2=x+\frac{f''(\xi)}{2!}x^2\geqslant x\quad(f''(x)>0),$$
原式得证。
【证2】由证法1知 $f(0)=0,f'(0)=1$。又 $f''(x)>0$，则 $f'(x)$ 单调增，由拉格朗日中值定理知 $f(x)=f(x)-f(0)=f'(c)x$（$c$ 介于 $0$ 与 $x$ 之间）。当 $x>0$ 时，$0<c<x$，由于 $f'(x)$ 单调增，则 $f(x)=f'(c)x>f'(0)x=x$；当 $x<0$ 时，$x<c<0$，则 $f'(c)<f'(0)$，从而 $f(x)=f'(c)x>f'(0)x=x$。原题得证。
【证3】只要证 $f(x)-x\geqslant0$，令 $F(x)=f(x)-x$，只要证 $F(x)$ 的最小值大于等于零。由于 $F'(x)=f'(x)-1$，显然 $F'(0)=f'(0)-1=0$。又 $F''(x)=f''(x)>0$，则 $F'(x)$ 单调增，$x=0$ 为 $F'(x)$ 唯一的零点，即 $x=0$ 为 $F(x)$` },
      { p: 74, md: R`唯一驻点，又 $F''(x)=f''(x)>0$，则 $x=0$ 为 $F(x)$ 在 $(-\infty,+\infty)$ 上唯一极值点，且在该点取极小值，因此 $F(x)$ 在 $x=0$ 处取得它在 $(-\infty,+\infty)$ 上的最小值，从而 $F(x)\geqslant F(0)=f(0)-0=0$。原题得证。

【例5】试证 $(x+y)\ln\dfrac{x+y}{2}\leqslant x\ln x+y\ln y\ (x>0,y>0)$。
【证】只要证明 $\dfrac{x+y}{2}\ln\dfrac{x+y}{2}\leqslant\dfrac{x\ln x+y\ln y}{2}$（$x>0,y>0$），即只要证函数 $f(x)=x\ln x$（$x>0$）的图形是凹的。由于 $f'(x)=\ln x+1$，$f''(x)=\dfrac1x>0\ (x>0)$，则函数 $f(x)=x\ln x\ (x>0)$ 的图形是凹的，原题得证。

### 题型五　微分中值定理有关的证明题
微分中值定理有关的证明题主要有以下三种。

#### （一）证明存在一个点 $\xi\in(a,b)$，使 $F[\xi,f(\xi),f'(\xi)]=0$
此类问题的一般方法是将要证结论改写为 $F[\xi,f(\xi),f'(\xi)]=0$，然后构造辅助函数用罗尔定理。构造辅助函数的方法主要有两种：
1. 分析法（还原法）：根据对欲证结论的分析，确定辅助函数 $g(x)$，使 $g'(x)=F[x,f(x),f'(x)]$。
2. 微分方程法：1) 求微分方程 $F(x,y,y')=0$ 的通解 $H(x,y)=C$；2) 设辅助函数 $g(x)=H(x,f(x))$。

【例1】设 $f(x)$ 在 $[a,b]$ 上连续，在 $(a,b)$ 内可导，$f(a)=b$，$f(b)=a$，$a$ 与 $b$ 同号。求证：$\exists\xi\in(a,b)$ 使 $f'(\xi)=-\dfrac{f(\xi)}{\xi}$。
【分析】(1) 分析法（还原法）：欲证 $f'(\xi)=-\dfrac{f(\xi)}{\xi}$，只要证 $\xi f'(\xi)+f(\xi)=0$，则应构造辅助函数 $g(x)=xf(x)$，这里 $g'(x)=xf'(x)+f(x)$。(2) 微分方程法：欲证 $f'(\xi)=-\dfrac{f(\xi)}{\xi}$，解微分方程 $y'=-\dfrac yx$，得其通解为 $xy=C$，则应构造辅助函数 $g(x)=xf(x)$。
【证】令 $g(x)=xf(x)$，则 $g(a)=af(a)=ab$，$g(b)=bf(b)=ab$，由罗尔定理知 $\exists\xi\in(a,b)$ 使 $g'(\xi)=0$，即 $\xi f'(\xi)+f(\xi)=0$。` },
      { p: 75, md: R`原题得证。

【例2】设 $f(x)$ 在 $[1,2]$ 上连续，在 $(1,2)$ 内可导且 $f(1)=\dfrac12$，$f(2)=2$。求证：$\xi\in(1,2)$ 使 $f'(\xi)=\dfrac{2f(\xi)}{\xi}$。
【分析】欲证 $f'(\xi)=\dfrac{2f(\xi)}{\xi}$，解微分方程 $y'=\dfrac{2y}{x}$，得其通解为 $\dfrac{y}{x^2}=C$，则应构造辅助函数 $F(x)=\dfrac{f(x)}{x^2}$。
【证】令 $F(x)=\dfrac{f(x)}{x^2}$，则 $F'(x)=\dfrac{x^2f'(x)-2xf(x)}{x^4}=\dfrac{xf'(x)-2f(x)}{x^3}$，且 $F(1)=f(1)=\dfrac12$，$F(2)=\dfrac{f(2)}{4}=\dfrac12$。由罗尔定理知 $\exists\xi\in(1,2)$，使 $F'(\xi)=0$，即 $\dfrac{\xi^2f'(\xi)-2\xi f(\xi)}{\xi^4}=0$，从而有 $\xi f'(\xi)-2f(\xi)=0$。原题得证。
【注】从以上两个例子可归纳出一类常用的辅助函数：1) 欲证 $\xi f'(\xi)+nf(\xi)=0$，令 $F(x)=x^nf(x)$；2) 欲证 $\xi f'(\xi)-nf(\xi)=0$，令 $F(x)=\dfrac{f(x)}{x^n}$；这里 $n$ 为正整数。

【例3】设 $f(x)$ 在 $[a,b]$ 上连续，在 $(a,b)$ 内可导，且 $f(a)=f(b)=0$。求证：$\exists\xi\in(a,b)$ 使 $f'(\xi)+\lambda f(\xi)=0$。
【分析】欲证 $f'(\xi)+\lambda f(\xi)=0$，解微分方程 $y'+\lambda y=0$，得其通解为 $e^{\lambda x}y=C$，则应构造辅助函数 $F(x)=e^{\lambda x}f(x)$。
【证】令 $F(x)=e^{\lambda x}f(x)$，则 $F'(x)=e^{\lambda x}[f'(x)+\lambda f(x)]$，且 $F(a)=F(b)=0$。由罗尔定理知 $\exists\xi\in(a,b)$，使 $F'(\xi)=0$，即 $e^{\lambda\xi}[f'(\xi)+\lambda f(\xi)]=0$。但 $e^{\lambda\xi}\neq0$，则 $f'(\xi)+\lambda f(\xi)=0$。原题得证。
【注】从本例可归纳出一类常用的辅助函数：
1) 欲证 $f'(\xi)+\lambda f(\xi)=0$，令 $F(x)=e^{\lambda x}f(x)$；特别地，欲证 $f'(\xi)+f(\xi)=0$，令 $F(x)=e^xf(x)$；欲证 $f'(\xi)-f(\xi)=0$，令 $F(x)=e^{-x}f(x)$；
2) 欲证 $\alpha f'(\xi)+\beta f(\xi)=0$，令 $F(x)=e^{\frac\beta\alpha x}f(x)\ (\alpha\neq0)$；
3) 欲证 $f'(\xi)+g'(\xi)f(\xi)=0$，令 $F(x)=e^{g(x)}f(x)$；
4) 欲证 $f'(\xi)+g(\xi)f(\xi)=0$，令 $F(x)=e^{\int_0^xg(t)dt}f(x)$。` },
      { p: 76, md: R`【例4】设 $f(x)$ 在 $[0,1]$ 上连续，在 $(0,1)$ 内可导，且 $f(0)=f(1)=0$，$f\left(\dfrac12\right)=1$。试证：(1) 存在 $\eta\in\left(\dfrac12,1\right)$，使 $f(\eta)=\eta$；(2) 对任意实数 $\lambda$，存在 $\xi\in(0,\eta)$，使 $f'(\xi)-\lambda[f(\xi)-\xi]=1$。
【证】(1) 令 $F(x)=f(x)-x$，则 $F\left(\dfrac12\right)=f\left(\dfrac12\right)-\dfrac12=\dfrac12>0$，$F(1)=f(1)-1=-1<0$，由零点定理知 $\exists\eta\in\left(\dfrac12,1\right)$，使 $F(\eta)=0$，即 $f(\eta)=\eta$。
(2) 令 $\varphi(x)=(f(x)-x)e^{-\lambda x}$，则 $\varphi'(x)=e^{-\lambda x}\{[f'(x)-1]-\lambda[f(x)-x]\}$，且 $\varphi(0)=0$，$\varphi(\eta)=0$。由罗尔定理知 $\exists\xi\in(0,\eta)$，使 $\varphi'(\xi)=0$，从而有 $[f'(\xi)-1]-\lambda[f(\xi)-\xi]=0$，故 $f'(\xi)-\lambda[f(\xi)-\xi]=1$。

【例5】设奇函数 $f(x)$ 在 $[-1,1]$ 上具有 2 阶导数，且 $f(1)=1$。证明：(1) 存在 $\xi\in(0,1)$，使得 $f'(\xi)=1$；(2) 存在 $\eta\in(-1,1)$，使得 $f''(\eta)+f'(\eta)=1$。
【证】(1) 因为 $f(x)$ 是区间 $[-1,1]$ 上的奇函数，所以 $f(0)=0$。因为函数 $f(x)$ 在区间 $[0,1]$ 上可导，根据拉格朗日中值定理，存在 $\xi\in(0,1)$，使得 $f(1)-f(0)=f'(\xi)$。又因为 $f(1)=1$，所以 $f'(\xi)=1$。
(2) 欲证 $f''(\eta)+f'(\eta)=1$，考虑 $f''(x)+f'(x)=1$，令 $f'(x)=y$，则 $y'+y=1$，解该线性方程得其通解为 $(y-1)e^x=C$，则应考虑辅助函数 $F(x)=[f'(x)-1]e^x$。因为 $f(x)$ 是奇函数，所以 $f'(x)$ 是偶函数，故 $f'(-\xi)=f'(\xi)=1$。又 $f(x)$ 二阶可导，则 $F(x)$ 可导，且 $F(-\xi)=F(\xi)=0$。根据罗尔定理，存在 $\eta\in(-\xi,\xi)\subset(-1,1)$，使得 $F'(\eta)=0$。由 $F'(\eta)=[f''(\eta)+f'(\eta)-1]e^\eta$ 且 $e^\eta\neq0$，得 $f''(\eta)+f'(\eta)=1$。

【例6】设函数 $f(x),g(x)$ 在 $[a,b]$ 上二阶可导，且 $g''(x)\neq0$，$f(a)=f(b)=g(a)=g(b)=0$。试证 (1) 在 $(a,b)$ 内 $g(x)\neq0$；(2) 在 $(a,b)$ 内至少有一点 $\xi$，使 $\dfrac{f(\xi)}{g(\xi)}=\dfrac{f''(\xi)}{g''(\xi)}$。
【证】(1) 由于在 $[a,b]$ 上 $g''(x)\neq0$，则方程 $g(x)=0$ 在 $[a,b]$ 内最多两个根，又 $g(a)=g(b)=0$，则当 $x\in(a,b)$ 时 $g(x)\neq0$。
(2) 只要证 $g(\xi)f''(\xi)-f(\xi)g''(\xi)=0$。令 $F(x)=g(x)f'(x)-f(x)g'(x)$，则 $F(a)=F(b)=0$，由罗尔定理知 $\exists\xi\in(a,b)$，使 $F'(\xi)=0$，即 $g(\xi)f''(\xi)-f(\xi)g''(\xi)=0$，故原题得证。

【例7】设 $f(x)$ 在 $[0,1]$ 上连续，且 $\displaystyle\int_0^1f(x)dx=0$。求证：$\exists\xi\in(0,1)$，使 $\displaystyle\int_0^\xi f(x)dx=-\xi f(\xi)$。` },
      { p: 77, md: R`【证】只要证明 $\displaystyle\int_0^\xi f(x)dx+\xi f(\xi)=0$。令 $F(x)=x\displaystyle\int_0^xf(t)dt$，则 $F(0)=F(1)=0$，由罗尔定理知 $\exists\xi\in(0,1)$，使 $F'(\xi)=0$，即 $\displaystyle\int_0^\xi f(x)dx+\xi f(\xi)=0$。

【例8】设 $f(x)$ 在 $[0,1]$ 上连续，在 $(0,1)$ 内可导，且 $\displaystyle\int_0^1f(x)dx=0$。求证：$\exists\xi\in(0,1)$，使 $\xi f'(\xi)+2f(\xi)=0$。
【证】令 $F(x)=x^2f(x)$，则 $F(0)=0$。又 $\displaystyle\int_0^1f(x)dx=0$，由积分中值定理知 $\exists c\in(0,1)$，使 $\displaystyle\int_0^1f(x)dx=f(c)=0$，从而 $F(c)=0$。由罗尔定理知 $\exists\xi\in(0,c)$，使 $F'(\xi)=0$，从而有 $\xi f'(\xi)+2f(\xi)=0$。

【例9】设 $f(x)$ 在 $[0,1]$ 上连续，$f(0)=0$，$\displaystyle\int_0^1f(x)dx=0$。求证：$\exists\xi\in(0,1)$，使 $\displaystyle\int_0^\xi f(x)dx=\xi f(\xi)$。
【证】只要证 $\displaystyle\int_0^\xi f(x)dx-\xi f(\xi)=0$。令 $F(x)=\begin{cases}\dfrac{\int_0^xf(t)dt}{x},&0<x\leqslant1\\0,&x=0\end{cases}$。由于 $\lim\limits_{x\to0^+}F(x)=\lim\limits_{x\to0^+}\dfrac{\int_0^xf(t)dt}{x}=\lim\limits_{x\to0^+}\dfrac{f(x)}{1}=0$，及 $F(0)=F(1)=0$，则 $F(x)$ 在 $[0,1]$ 上满足罗尔定理条件，故 $\exists\xi\in(0,1)$，使 $F'(\xi)=0$，即 $\dfrac{\xi f(\xi)-\int_0^\xi f(t)dt}{\xi^2}=0$，从而有 $\displaystyle\int_0^\xi f(x)dx-\xi f(\xi)=0$。

#### （二）证明存在两个中值点 $\xi,\eta\in(a,b)$，使 $F[\xi,\eta,f(\xi),f(\eta),f'(\xi),f'(\eta)]=0$
方法：(1) 不要求 $\xi\neq\eta$：在同一区间 $[a,b]$ 上用两次中值定理（拉格朗日、柯西中值定理）；(2) 要求 $\xi\neq\eta$：将区间 $[a,b]$ 分为两个子区间，在两个子区间上分别用拉格朗日中值定理。

【例1】设 $f(x)$ 在 $[a,b]$ 上连续，$(a,b)$ 内可导，且 $a,b$ 同号，试证存在 $\xi,\eta\in(a,b)$，使 $f'(\xi)=\dfrac{a+b}{2\eta}f'(\eta)$。
【证】由拉格朗日中值定理知 $\exists\xi\in(a,b)$，使 $\dfrac{f(b)-f(a)}{b-a}=f'(\xi)$。由柯西中值定理知，$\exists\eta\in(a,b)$ 使 $\dfrac{f(b)-f(a)}{b^2-a^2}=\dfrac{f'(\eta)}{2\eta}$。` },
      { p: 78, md: R`从而有 $f'(\xi)=\dfrac{a+b}{2\eta}f'(\eta)$。

【例2】设 $f(x)$ 在 $[a,b]$ 上连续，在 $(a,b)$ 内可导，且 $f'(x)\neq0$，证明存在 $\xi,\eta\in(a,b)$，使得 $\dfrac{f'(\xi)}{f'(\eta)}=\dfrac{e^b-e^a}{b-a}e^{-\eta}$。
【证】只要证明 $f'(\xi)=\dfrac{e^b-e^a}{b-a}\cdot\dfrac{f'(\eta)}{e^\eta}$。由拉格朗日中值定理知 $\exists\xi\in(a,b)$，使 $\dfrac{f(b)-f(a)}{b-a}=f'(\xi)$。由柯西中值定理知 $\exists\eta\in(a,b)$，使 $\dfrac{f(b)-f(a)}{e^b-e^a}=\dfrac{f'(\eta)}{e^\eta}$。从而有 $f'(\xi)(b-a)=\dfrac{f'(\eta)}{e^\eta}(e^b-e^a)$，即 $\dfrac{f'(\xi)}{f'(\eta)}=\dfrac{e^b-e^a}{b-a}e^{-\eta}$。

【例3】设 $f(x)$ 在 $[a,b]$ 上连续，在 $(a,b)$ 内可导，且 $f(a)=f(b)=1$，试证存在 $\xi,\eta\in(a,b)$ 使 $e^{\eta-\xi}[f(\eta)+f'(\eta)]=1$。
【证】只要证明 $e^\eta[f(\eta)+f'(\eta)]=e^\xi$。由拉格朗日中值定理得 $\exists\xi\in(a,b)$，使 $\dfrac{e^b-e^a}{b-a}=e^\xi$。令 $F(x)=e^xf(x)$，由拉格朗日中值定理得，$\exists\eta\in(a,b)$，使 $\dfrac{F(b)-F(a)}{b-a}=F'(\eta)$，即 $\dfrac{e^b-e^a}{b-a}=e^\eta[f(\eta)+f'(\eta)]$，从而有 $e^\eta[f(\eta)+f'(\eta)]=e^\xi$。

【例4】设 $f(x)$ 在 $[0,1]$ 上连续，在 $(0,1)$ 内可导，且 $f(0)=0,f(1)=1$。证明：(1) 存在 $\xi\in(0,1)$，使得 $f(\xi)=1-\xi$；(2) 存在两个不同的点 $\eta,\zeta\in(0,1)$，使得 $f'(\eta)f'(\zeta)=1$。
【证】(1) 令 $F(x)=f(x)-1+x$，则 $F(0)=-1<0$，$F(1)=1>0$，由连续函数零点定理知，$\exists\xi\in(0,1)$，使 $F(\xi)=0$，即 $f(\xi)=1-\xi$。
(2) 在区间 $[0,\xi],[\xi,1]$ 上分别对 $f(x)$ 用拉格朗日中值定理，得
$$\frac{f(\xi)-f(0)}{\xi-0}=f'(\eta),\quad\eta\in(0,\xi),\qquad\frac{f(1)-f(\xi)}{1-\xi}=f'(\zeta),\quad\zeta\in(\xi,1),$$
即 $\dfrac{f(\xi)}{\xi}=f'(\eta)$，$\dfrac{1-f(\xi)}{1-\xi}=f'(\zeta)$，从而 $f'(\eta)f'(\zeta)=\dfrac{f(\xi)}{\xi}\cdot\dfrac{1-f(\xi)}{1-\xi}=1$。` },
      { p: 79, md: R`【例5】设 $f(x)$ 在 $[0,1]$ 上连续，在 $(0,1)$ 内可导，且 $f(0)=0,f(1)=1$，试证对任意给定的正数 $a,b$，在 $(0,1)$ 内一定存在互不相同的 $\xi,\eta$，使 $\dfrac{a}{f'(\xi)}+\dfrac{b}{f'(\eta)}=a+b$。
【分析】本题要证存在两个中值点 $\xi$ 和 $\eta$，且 $\xi\neq\eta$，这类问题通常要将原区间分为两个子区间 $[a,c]$ 和 $[c,b]$，然后在这两个子区间上分别用拉格朗日中值定理。关键点和难点是分点 $c$ 的选取，通常采用"逆推法"。设 $c\in(0,1)$，由拉格朗日中值定理知 $\dfrac{f(c)-f(0)}{c-0}=f'(\xi),\ \xi\in(0,c)$，$\dfrac{f(1)-f(c)}{1-c}=f'(\eta),\ \eta\in(c,1)$。将以上两式代入要证的结论 $\dfrac{a}{f'(\xi)}+\dfrac{b}{f'(\eta)}=a+b$ 中得 $a\cdot\dfrac{c}{f(c)}+b\cdot\dfrac{1-c}{1-f(c)}=a+b$，即要证 $\dfrac{a}{a+b}\cdot\dfrac{c}{f(c)}+\dfrac{b}{a+b}\cdot\dfrac{1-c}{1-f(c)}=1$。由上式看出，若 $\exists c\in(0,1)$，使 $f(c)=\dfrac{a}{a+b}$，则上式成立。
【证】由于 $f(0)=0<\dfrac{a}{a+b}<1=f(1)$，由介值定理知 $\exists c\in(0,1)$，使 $f(c)=\dfrac{a}{a+b}$。在区间 $[0,c]$ 和 $[c,1]$ 上分别对 $f(x)$ 用拉格朗日中值定理得
$$\frac{f(c)-f(0)}{c-0}=f'(\xi),\quad\xi\in(0,c),\qquad\frac{f(1)-f(c)}{1-c}=f'(\eta),\quad\eta\in(c,1),$$
从而有 $\dfrac{1}{f'(\xi)}=\dfrac{c}{f(c)}=\dfrac{c(a+b)}{a}$，$\dfrac{1}{f'(\eta)}=\dfrac{1-c}{1-f(c)}=\dfrac{(1-c)(a+b)}{b}$，故 $\dfrac{a}{f'(\xi)}+\dfrac{b}{f'(\eta)}=a+b$。

#### （三）证明存在一个中值点 $\xi\in(a,b)$，使 $F[\xi,f^{(n)}(\xi)]\geqslant0\ (n\geqslant2)$
方法：用带拉格朗日余项的泰勒公式，其中 $x_0$ 点选题目中提供函数值和导数值信息多的点。

【例1】设 $f(x)$ 在 $[a,b]$ 上二阶可导，$f'(a)=f'(b)=0$。求证：$\exists\xi\in(a,b)$，使 $|f''(\xi)|\geqslant4\dfrac{|f(b)-f(a)|}{(b-a)^2}$。
【证】由泰勒公式知
$$f(x)=f(a)+f'(a)(x-a)+\frac{f''(\xi_1)}{2!}(x-a)^2,\quad①$$` },
      { p: 80, md: R`$$f(x)=f(b)+f'(b)(x-b)+\frac{f''(\xi_2)}{2!}(x-b)^2.\quad②$$
在以上 ① 式和 ② 式中令 $x=\dfrac{a+b}{2}$ 得
$$f\left(\frac{a+b}{2}\right)=f(a)+\frac{f''(\xi_1)}{8}(b-a)^2,\quad③$$
$$f\left(\frac{a+b}{2}\right)=f(b)+\frac{f''(\xi_2)}{8}(b-a)^2.\quad④$$
④ 式减 ③ 式得 $f(b)-f(a)=\dfrac{(b-a)^2}{8}(f''(\xi_1)-f''(\xi_2))$，从而有
$$|f(b)-f(a)|\leqslant\frac{(b-a)^2}{8}(|f''(\xi_1)|+|f''(\xi_2)|)\leqslant\frac{(b-a)^2}{4}\max(|f''(\xi_1)|,|f''(\xi_2)|)=\frac{(b-a)^2}{4}|f''(\xi)|,$$
故 $|f''(\xi)|\geqslant4\dfrac{|f(b)-f(a)|}{(b-a)^2}$。

【例2】设 $f(x)$ 在 $[0,1]$ 上三阶可导，$f(0)=0,f(1)=1,f'\left(\dfrac12\right)=0$。求证：$\exists\xi\in(0,1)$，使 $|f'''(\xi)|\geqslant24$。
【证】由泰勒公式得
$$f(x)=f\left(\frac12\right)+f'\left(\frac12\right)\left(x-\frac12\right)+\frac{f''\left(\frac12\right)}{2!}\left(x-\frac12\right)^2+\frac{f'''(\xi)}{3!}\left(x-\frac12\right)^3.$$
在上式中令 $x=0$ 和 $x=1$ 得
$$f(0)=f\left(\frac12\right)+\frac{f''\left(\frac12\right)}{2!}\cdot\frac14-\frac{f'''(\xi_1)}{48}=0,\quad①$$
$$f(1)=f\left(\frac12\right)+\frac{f''\left(\frac12\right)}{2!}\cdot\frac14+\frac{f'''(\xi_2)}{48}=1.\quad②$$
② 式减 ① 式得 $48=f'''(\xi_1)+f'''(\xi_2)$，从而 $48\leqslant|f'''(\xi_1)|+|f'''(\xi_2)|\leqslant2\max(|f'''(\xi_1)|,|f'''(\xi_2)|)$，故 $\exists\xi\in(0,1)$，使 $|f'''(\xi)|\geqslant24$。

【例3】设 $f(x)$ 在 $[0,1]$ 上有二阶连续导数，且 $f(0)=f(1)=0$，$\min\limits_{0\leqslant x\leqslant1}f(x)=-1$，证明：$\max\limits_{0\leqslant x\leqslant1}f''(x)\geqslant8$。
【证】本题只要证明存在 $\xi\in(0,1)$，使 $f''(\xi)\geqslant8$。设 $f(c)=\min\limits_{0\leqslant x\leqslant1}f(x)=-1$，则 $0<c<1$，且 $f'(c)=0$。由泰勒公式知
$$f(x)=f(c)+f'(c)(x-c)+\frac{f''(\xi)}{2!}(x-c)^2.$$
在上式中分别令 $x=0$ 和 $x=1$ 得` }
    ],
    quiz: [
      { q: R`罗尔定理的条件是 $f(x)$ 在 $[a,b]$ 上连续，在 $(a,b)$ 内可导，且`, options: [R`$f(a)=f(b)$`, R`$f(a)=0$`, R`$f'(a)=f'(b)$`, R`$f(a)=f(b)=0$`], answer: 0, explain: R`罗尔定理要求端点函数值相等 $f(a)=f(b)$。` },
      { q: R`拉格朗日中值定理的结论是存在 $\xi\in(a,b)$，使`, options: [R`$f'(\xi)=0$`, R`$f'(\xi)=\dfrac{f(b)-f(a)}{b-a}$`, R`$f'(\xi)=\dfrac{f(a)}{b-a}$`, R`$f'(\xi)=\dfrac{f(b)}{b-a}$`], answer: 1, explain: R`$f(b)-f(a)=f'(\xi)(b-a)$。` },
      { q: R`可导函数在极值点处必有`, options: [R`$f'(x_0)=0$`, R`$f''(x_0)>0$`, R`$f'(x_0)\neq0$`, R`$f''(x_0)=0$`], answer: 0, explain: R`极值必要条件：可导极值点处导数为零。` },
      { q: R`若 $f''(x)>0$ 在区间 $I$ 上成立，则曲线 $y=f(x)$ 在 $I$ 上`, options: [R`是凹的`, R`是凸的`, R`有拐点`, R`单调增`], answer: 0, explain: R`$f''>0$ 曲线凹，$f''<0$ 曲线凸。` },
      { q: R`第二充分条件：若 $f'(x_0)=0$ 且 $f''(x_0)>0$，则 $x_0$ 是`, options: [R`极大值点`, R`极小值点`, R`拐点`, R`驻点但非极值点`], answer: 1, explain: R`$f''(x_0)>0$ 时取极小值。` },
      { q: R`曲线 $y=f(x)$ 的水平渐近线由下列哪个极限确定`, options: [R`$\lim\limits_{x\to\infty}f(x)=A$`, R`$\lim\limits_{x\to x_0}f(x)=\infty$`, R`$\lim\limits_{x\to\infty}\dfrac{f(x)}{x}=a$`, R`$\lim\limits_{x\to\infty}f'(x)=0$`], answer: 0, explain: R`水平渐近线 $y=A$ 当 $x\to\infty$ 时 $f(x)\to A$。` },
      { q: R`斜渐近线 $y=ax+b$ 中 $a$ 等于`, options: [R`$\lim\limits_{x\to\infty}\dfrac{f(x)}{x}$`, R`$\lim\limits_{x\to\infty}f(x)$`, R`$\lim\limits_{x\to\infty}f'(x)$`, R`$\lim\limits_{x\to\infty}(f(x)-x)$`], answer: 0, explain: R`$a=\lim\frac{f(x)}x$，$b=\lim(f(x)-ax)$。` },
      { q: R`欲证 $\xi f'(\xi)+nf(\xi)=0$，常构造辅助函数`, options: [R`$F(x)=x^nf(x)$`, R`$F(x)=\dfrac{f(x)}{x^n}$`, R`$F(x)=e^{nx}f(x)$`, R`$F(x)=x^nf'(x)$`], answer: 0, explain: R`$F(x)=x^nf(x)$ 的导数为 $x^{n-1}[xf'+nf]$。` },
      { q: R`欲证 $f'(\xi)+\lambda f(\xi)=0$，常构造辅助函数`, options: [R`$F(x)=e^{\lambda x}f(x)$`, R`$F(x)=\lambda f(x)$`, R`$F(x)=f(x)+\lambda x$`, R`$F(x)=x f(x)$`], answer: 0, explain: R`$F(x)=e^{\lambda x}f(x)$ 的导数为 $e^{\lambda x}(f'+\lambda f)$。` },
      { q: R`证明函数不等式常用的方法不包括`, options: [R`单调性`, R`最大最小值`, R`泰勒公式`, R`洛必达法则求值`], answer: 3, explain: R`常用：单调性、最值、中值定理、泰勒、凹凸性。` }
    ]
  };
})();
