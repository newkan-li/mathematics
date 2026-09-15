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
      { p: 63, md: R`（承上页）$f^{(n)}(0)=C_n^2u^{(2)}(0)v^{(n-2)}(0)$，而 $v=\dfrac{1}{1+x}=(x+1)^{-1}$，$v^{(n-2)}(0)=(-1)^{n-1}(n-3)!$，$u=x^2,u''(0)=2$，故 $f^{(n)}(0)=\dfrac{n(n-1)}{2!}\cdot2(-1)^{n-1}(n-3)!=\dfrac{(-1)^{n-1}n!}{n-2}$。

【解2】$f(x)=x^2\left(x-\dfrac{x^2}{2}+\cdots+\dfrac{(-1)^{n-1}x^n}{n}+\cdots\right)=x^3-\dfrac{x^4}{2}+\cdots+\dfrac{(-1)^{n-1}x^{n+2}}{n}+\cdots$，右端 $x^n$ 次项系数 $a_n=\dfrac{(-1)^{n-3}}{n-2}=\dfrac{(-1)^{n-1}}{n-2}$，又 $a_n=\dfrac{f^{(n)}(0)}{n!}$，故 $f^{(n)}(0)=a_nn!=\dfrac{(-1)^{n-1}n!}{n-2}$。

### 一、考试内容要点精讲
#### （一）微分中值定理
**罗尔定理**：设 $f(x)$ 在 $[a,b]$ 上连续，在 $(a,b)$ 内可导，且 $f(a)=f(b)$，那么至少存在一个 $\xi\in(a,b)$，使 $f'(\xi)=0$。

**拉格朗日定理**：设 $f(x)$ 在 $[a,b]$ 上连续，在 $(a,b)$ 内可导，那么至少存在一个 $\xi\in(a,b)$，使 $\dfrac{f(b)-f(a)}{b-a}=f'(\xi)$。

**柯西定理**：设 $f(x),g(x)$ 在 $[a,b]$ 上连续，在 $(a,b)$ 内可导，且 $g'(x)\neq0$，那么至少存在一个 $\xi\in(a,b)$，使 $\dfrac{f(b)-f(a)}{g(b)-g(a)}=\dfrac{f'(\xi)}{g'(\xi)}$。

**泰勒定理（拉格朗日余项）**：设 $f(x)$ 在区间 $I$ 上 $n+1$ 阶可导，$x_0\in I$，则 $\forall x\in I$，至少存在一个 $\xi$ 使
$$f(x)=f(x_0)+f'(x_0)(x-x_0)+\dfrac{f''(x_0)}{2!}(x-x_0)^2+\cdots+\dfrac{f^{(n)}(x_0)}{n!}(x-x_0)^n+R_n(x),$$
其中 $R_n(x)=\dfrac{f^{(n+1)}(\xi)}{(n+1)!}(x-x_0)^{n+1}$，$\xi$ 在 $x_0$ 与 $x$ 之间。

#### （二）极值与最值
**1. 极值的概念** 设 $y=f(x)$ 在点 $x_0$ 的某邻域内有定义，如果对于该去心邻域内任何 $x$，恒有 $f(x)<f(x_0)$（或 $f(x)>f(x_0)$），则称 $x_0$ 为 $f(x)$ 的极大值点（或极小值点），称 $f(x_0)$ 为极大值（或极小值）。` },
      { p: 64, md: R`【注】（1）函数在区间 $[a,b]$ 上的极值只能在开区间 $(a,b)$ 上取得；端点处不可能取得极值。

（2）若函数在闭区间 $[a,b]$ 上的最大值（或最小值）在开区间 $(a,b)$ 上某点取得，那么函数在该点处必取得极大值（或极小值）。

**2. 极值的必要条件** 设 $y=f(x)$ 在点 $x_0$ 处可导，且 $x_0$ 为极值点，则 $f'(x_0)=0$。导数为零的点称为驻点。对可导函数而言，极值只可能在驻点取得，但驻点不一定是极值点；对一般函数，极值只可能在驻点和导数不存在的点取得。

**3. 极值的充分条件**
1）第一充分条件：设 $f'(x_0)=0$（或 $f(x)$ 在 $x_0$ 处连续），且在 $x_0$ 的某去心邻域 $\mathring{U}(x_0,\delta)$ 内可导。(1) 若 $x\in(x_0-\delta,x_0)$ 时 $f'(x)>0$，而 $x\in(x_0,x_0+\delta)$ 时 $f'(x)<0$，则 $f$ 在 $x_0$ 取极大值；(2) 反之取极小值；(3) 若 $f'(x)$ 符号不变，则无极值。
2）第二充分条件：若 $f'(x_0)=0$，$f''(x_0)\neq0$，则 $f$ 在 $x_0$ 取极值，$f''(x_0)>0$ 极小，$f''(x_0)<0$ 极大。
3）第三充分条件：若 $f'(x_0)=f''(x_0)=\cdots=f^{(n-1)}(x_0)=0$，$f^{(n)}(x_0)\neq0$，则 $n$ 为偶数时有极值（$f^{(n)}(x_0)>0$ 极小，$<0$ 极大）；$n$ 为奇数时无极值。

**4. 函数的最值** 连续函数 $f(x)$ 在 $[a,b]$ 上最值的求法：第一步求 $(a,b)$ 内驻点和不可导点 $x_1,\cdots,x_n$；第二步求各点及端点函数值；第三步比较，最大者为最大值，最小者为最小值。

【注】当 $[a,b]$ 上连续函数 $f$ 在 $(a,b)$ 内仅有唯一极值点，若在该点取极大（小）值，则它也是 $f$ 在 $[a,b]$ 上的最大（小）值。

#### （三）曲线的凹向与拐点
**1. 曲线的凹向** 1）定义：设 $f(x)$ 在区间 $I$ 上连续，若对 $I$ 上任意两点 $x_1,x_2$ 恒有 $f\left(\dfrac{x_1+x_2}{2}\right)<\dfrac{f(x_1)+f(x_2)}{2}$，则称图形是凹的；若恒有 $f\left(\dfrac{x_1+x_2}{2}\right)>\dfrac{f(x_1)+f(x_2)}{2}$，则称图形是凸的。2）判定：若在 $I$ 上 $f''(x)>0\ (<0)$，则曲线在 $I$ 上是凹（凸）的。

**2. 曲线的拐点** 1）定义：若连续曲线 $y=f(x)$ 在点 $(x_0,f(x_0))$ 邻近两侧凹凸性相反，则称该点为拐点。2）判定：一个必要条件和三个充分条件（将极值点的条件导数阶数提高一阶）。` },
      { p: 65, md: R`#### （四）曲线的渐近线
**1. 水平渐近线** 若 $\lim\limits_{x\to\infty}f(x)=A$（或 $x\to-\infty$、$x\to+\infty$），则 $y=A$ 是水平渐近线。

**2. 垂直渐近线** 若 $\lim\limits_{x\to x_0}f(x)=\infty$（或单侧），则 $x=x_0$ 是垂直渐近线。

**3. 斜渐近线** 若 $\lim\limits_{x\to\infty}\dfrac{f(x)}{x}=a$，$\lim\limits_{x\to\infty}(f(x)-ax)=b$（或 $x\to-\infty$、$x\to+\infty$），则 $y=ax+b$ 是斜渐近线。

#### （五）平面曲线的曲率（数三不要求）
**1. 定义** $K=\lim\limits_{\Delta s\to0}\left|\dfrac{\Delta\alpha}{\Delta s}\right|$。

**2. 计算** 1）直角坐标 $y=y(x)$：$K=\dfrac{|y''|}{(1+y'^2)^{\frac32}}$；2）参数方程：$K=\dfrac{|y''x'-y'x''|}{(x'^2+y'^2)^{3/2}}$。

**3. 曲率圆与曲率半径** $R=\dfrac1K$。` },
      { p: 66, md: R`### 二、常考题型的方法与技巧
### 题型一　函数的单调性、极值与最值
【例1】求函数 $f(x)=\displaystyle\int_1^{x^2}(x^2-t)e^{-t^2}dt$ 的单调区间与极值。

【解】定义域 $(-\infty,+\infty)$。$f(x)=x^2\displaystyle\int_1^{x^2}e^{-t^2}dt-\int_1^{x^2}te^{-t^2}dt$（偶函数），$f'(x)=2x\displaystyle\int_1^{x^2}e^{-t^2}dt+2x^3e^{-x^4}-2x^3e^{-x^4}=2x\int_1^{x^2}e^{-t^2}dt$，驻点为 $x=0,\pm1$。列表讨论：

| $x$ | $(-\infty,-1)$ | $-1$ | $(-1,0)$ | $0$ | $(0,1)$ | $1$ | $(1,+\infty)$ |
| --- | --- | --- | --- | --- | --- | --- | --- |
| $f'(x)$ | $-$ | $0$ | $+$ | $0$ | $-$ | $0$ | $+$ |
| $f(x)$ | $\searrow$ | 极小 | $\nearrow$ | 极大 | $\searrow$ | 极小 | $\nearrow$ |

故单调增区间为 $(-1,0)$ 及 $(1,+\infty)$，单调减区间为 $(-\infty,-1)$ 及 $(0,1)$；极小值 $f(\pm1)=0$，极大值 $f(0)=\displaystyle\int_1^0te^{-t^2}dt=\dfrac12(1-e^{-1})$。

【例2】设函数 $y=f(x)$ 由方程 $y^3+xy^2+x^2y+6=0$ 确定，求 $f(x)$ 的极值。

【解】方程两端对 $x$ 求导得 $3y^2y'+y^2+2xyy'+2xy+x^2y'=0$。① 令 $y'=0$ 得 $y^2+2xy=0$，即 $y=0$ 或 $y=-2x$。$y=0$ 不满足原方程；将 $y=-2x$ 代入原方程得 $-6x^3+6=0$，解得 $x_0=1$，$f(1)=-2$，$f'(1)=0$。对 ① 再求导得 $6yy'^2+3y^2y''+4yy'+2xy'^2+2xyy''+2y+4xy'+x^2y''=0$，代入 $x=1,f(1)=-2,f'(1)=0$ 得 $f''(1)=\dfrac49>0$，故在 $x=1$ 取极小值 $f(1)=-2$。

【例3】设 $f(x)$ 有二阶连续导数，且 $f'(0)=0$，$\lim\limits_{x\to0}\dfrac{f''(x)}{|x|}=1$，则 (A) $f(0)$ 是极大值　(B) $f(0)$ 是极小值　(C) $(0,f(0))$ 是拐点　(D) 既非极值也非拐点

【解】由极限保号性知在 $x=0$ 某去心邻域内 $f''(x)>0$，从而 $f'(x)$ 单调增；又 $f'(0)=0$，故左半邻域 $f'(x)<0$、右半邻域 $f'(x)>0$，$f$ 在 $x=0$ 取极小值，选 (B)。` },
      { p: 67, md: R`【注】若将条件改为 $\lim\limits_{x\to0}\dfrac{f''(x)}{x}=-1$，则应选 (C)。

【例4】设 $f(x)$ 二阶导数连续，且 $(x-1)f''(x)-2(x-1)f'(x)=1-e^{1-x}$。试问：1) 若 $f(x)$ 在 $x=a\ (a\neq1)$ 取得极值，是极小值还是极大值？2) 若 $f(x)$ 在 $x=1$ 取得极值，是极小值还是极大值？

【解】1) 由 $f'(a)=0$，代入得 $(a-1)f''(a)=1-e^{1-a}$，故 $f''(a)=\dfrac{1-e^{1-a}}{a-1}>0\ (a\neq1)$，从而取极小值。

2) 由原式得 $f''(x)-2f'(x)=\dfrac{1-e^{1-x}}{1-x}$，取极限得 $f''(1)-2f'(1)=\lim\limits_{x\to1}\dfrac{1-e^{1-x}}{x-1}=1$，则 $f''(1)=1>0$，又 $f'(1)=0$，故 $x=1$ 为极小值点。

【例5】设 $f(x)$ 二阶可导，且 $\lim\limits_{h\to0}\dfrac{f(x_0+h)-f(x_0)-f'(x_0)}{h^2}=a\neq0$，试讨论 $f(x)$ 在 $x_0$ 点的极值。

【解1】由极限存在及 $\lim h^2=0$ 知 $f'(x_0)=0$，故 $\lim\limits_{h\to0}\dfrac{f(x_0+h)-f(x_0)}{h^2}=\lim\limits_{h\to0}\dfrac{f'(x_0+h)-f'(x_0)}{2h}=\dfrac12f''(x_0)=a$。故 $a>0$ 时 $x_0$ 为极小值点，$a<0$ 时为极大值点。

【解2】同解1知 $f'(x_0)=0$，则 $\lim\limits_{h\to0}\dfrac{f(x_0+h)-f(x_0)}{h^2}=a\neq0$。不妨设 $a>0$，由保号性知 $h$ 充分小时 $f(x_0+h)-f(x_0)>0$，即 $x_0$ 为极小值点；同理 $a<0$ 为极大值点。

### 题型二　曲线的凹凸、拐点、渐近线及曲率
【例1】设函数 $f(x)$ 满足关系式 $f''(x)+[f'(x)]^2=\sin x$，且 $f'(0)=0$，则 (A) $f(0)$ 是极大值　(B) $f(0)$ 是极小值　(C) 点 $(0,f(0))$ 是拐点　(D) 既非极值也非拐点` },
      { p: 68, md: R`【解】在等式中令 $x=0$ 得 $f''(0)=0$。等式两端对 $x$ 求导得 $f'''(x)+2f'(x)f''(x)=\cos x$，令 $x=0$ 得 $f'''(0)=1>0$，则点 $(0,f(0))$ 是拐点，故应选 (C)。

【例2】设函数 $y=y(x)$ 由参数方程 $\begin{cases}x=\frac13t^3+t+\frac13\\y=\frac13t^3-t+\frac13\end{cases}$ 确定，求 $y=y(x)$ 的极值和曲线 $y=y(x)$ 的凹凸区间及拐点。

【解】令 $\dfrac{dy}{dx}=\dfrac{t^2-1}{t^2+1}=0$ 得 $t=\pm1$：$t=1$ 时 $x=\dfrac53$，$t=-1$ 时 $x=-1$。令 $\dfrac{d^2y}{dx^2}=\dfrac{4t}{(t^2+1)^3}=0$ 得 $t=0$，即 $x=\dfrac13$。列表讨论后可知：极大值 $y(-1)=1$，极小值 $y\left(\dfrac53\right)=-\dfrac13$；凹区间 $\left(\dfrac13,+\infty\right)$，凸区间 $\left(-\infty,\dfrac13\right)$；拐点 $\left(\dfrac13,\dfrac13\right)$。

【例3】曲线 $y=\dfrac{(1+x)^{\frac32}}{\sqrt x}$ 的斜渐近线方程为______。

【解】$a=\lim\limits_{x\to+\infty}\dfrac yx=1$，$b=\lim\limits_{x\to+\infty}\left[\dfrac{(1+x)^{\frac32}}{\sqrt x}-x\right]=\lim\limits_{x\to+\infty}\dfrac{x^{\frac32}\left[(1+\frac1x)^{\frac32}-1\right]}{\sqrt x}=\dfrac32$，故斜渐近线为 $y=x+\dfrac32$。` },
      { p: 69, md: R`【例4】曲线 $y=e^{x+\frac1x}\arctan\dfrac{x^2+x+1}{(x-1)(x-2)}$ 的渐近线条数是 (A)1　(B)2　(C)3　(D)4

【解】$\lim\limits_{x\to0^+}y=+\infty$，则 $x=0$ 为垂直渐近线；$\lim\limits_{x\to-\infty}y=0$，则 $y=0$ 为水平渐近线；$\lim\limits_{x\to+\infty}\dfrac yx=+\infty$，无斜渐近线。选 (B)。

【例5】求曲线 $y=x\arctan x$ 的渐近线。

【解】无水平、垂直渐近线。$\lim\limits_{x\to+\infty}\dfrac{f(x)}x=\dfrac\pi2=a$，$b=\lim\limits_{x\to+\infty}(f(x)-ax)=\lim\limits_{x\to+\infty}\dfrac{\arctan x-\frac\pi2}{\frac1x}=-1$，故 $y=\dfrac\pi2x-1$ 是 $x\to+\infty$ 时的斜渐近线；同理 $y=-\dfrac\pi2x-1$ 是 $x\to-\infty$ 时的斜渐近线。

【注】$y=x\arctan x$ 是偶函数，图形关于 $y$ 轴对称，故由一侧渐近线可推另一侧。

### 题型三　方程的根的存在性及个数
**1. 存在性**：方法1 零点定理；方法2 罗尔定理。**2. 根的个数**：方法1 单调性；方法2 罗尔定理推论（若在 $I$ 上 $f^{(n)}(x)\neq0$，则 $f(x)=0$ 在 $I$ 上最多 $n$ 个实根）。

【例1】设 $a_1,a_2,\cdots,a_n$ 为任意实数，求证方程 $a_1\cos x+a_2\cos2x+\cdots+a_n\cos nx=0$ 在 $[0,\pi]$ 内必有实根。` },
      { p: 70, md: R`【证】令 $f(x)=a_1\sin x+\dfrac{a_2}{2}\sin2x+\cdots+\dfrac{a_n}{n}\sin nx$，则 $f'(x)=a_1\cos x+a_2\cos2x+\cdots+a_n\cos nx$。$f(x)$ 在 $[0,\pi]$ 上满足罗尔定理条件，故存在 $c\in(0,\pi)$ 使 $f'(c)=0$，原方程至少有一实根。

【例2】试讨论方程 $\ln x-\dfrac xe+1=0$ 的实根个数。

【解】令 $f(x)=\ln x-\dfrac xe+1\ (x>0)$，$f'(x)=\dfrac1x-\dfrac1e$，令 $f'=0$ 得 $x=e$。$x\in(0,e)$ 时 $f'>0$ 增，$x\in(e,+\infty)$ 时 $f'<0$ 减。又 $f(e)=1>0$，$\lim\limits_{x\to0^+}f(x)=-\infty$，$\lim\limits_{x\to+\infty}f(x)=-\infty$，故在 $(0,e)$ 和 $(e,+\infty)$ 内各有一个零点，原方程有两个实根。

【例3】已知函数 $f(x)=\displaystyle\int_x^1\sqrt{1+t^2}dt+\int_1^{x^2}\sqrt{1+t}dt$，求 $f(x)$ 的零点个数。

【解】$f'(x)=-\sqrt{1+x^2}+2x\sqrt{1+x^2}=(2x-1)\sqrt{1+x^2}$，令 $f'=0$ 得 $x=\dfrac12$。$x<\dfrac12$ 时 $f'<0$ 减，$x>\dfrac12$ 时 $f'>0$ 增，各最多一个零点。又 $f(-1)=2\displaystyle\int_0^1\sqrt{1+x^2}dx>0$，$f(0)=\displaystyle\int_0^1(\sqrt{1+t^2}-\sqrt{1+t})dt<0$，故在 $(-1,0)$ 至少一个零点；又 $f(1)=0$，故共有两个零点。

【例4】试证方程 $2^x-x^2=1$ 有且仅有三个实根。

【证】令 $f(x)=2^x-x^2-1$，$f(0)=0,f(1)=0,f(2)=-1<0,f(5)=6>0$，故 $(2,5)$ 内至少一个零点，原方程至少三个实根。又 $f'(x)=2^x\ln2-2x$，$f''(x)=2^x\ln^22-2$，$f'''(x)=2^x\ln^32\neq0$，故最多三个实根。原题得证。

【例5】试确定方程 $x=ae^x\ (a>0)$ 实根个数。

【解】变形得 $xe^{-x}-a=0$。令 $f(x)=xe^{-x}-a\ (x>0)$，$f'(x)=(1-x)e^{-x}$，令 $f'=0$ 得 $x=1$。` },
      { p: 71, md: R`$x\in(0,1)$ 时 $f'>0$ 增，$x\in(1,+\infty)$ 时 $f'<0$ 减。又 $\lim\limits_{x\to0^+}f(x)=-a<0$，$\lim\limits_{x\to+\infty}f(x)=-a<0$，$f(1)=\dfrac1e-a$，则 1) $a<\dfrac1e$ 时原方程有两个实根；2) $a=\dfrac1e$ 时唯一实根；3) $a>\dfrac1e$ 时无实根。

【注】带参数方程根的问题，第一步分离参数是常用方法。

【例6】设当 $x>0$ 时，方程 $kx+\dfrac{1}{x^2}=1$ 有且仅有一个解，试求 $k$ 的取值范围。

【解1】设 $f(x)=kx+\dfrac{1}{x^2}-1\ (x>0)$，$f'(x)=k-\dfrac{2}{x^3}$。(1) 若 $k\leqslant0$，$f'(x)<0$，$f$ 递减；$\lim\limits_{x\to0^+}f=+\infty$，$k<0$ 时 $\lim\limits_{x\to+\infty}f=-\infty$，$k=0$ 时极限为 $-1$，故 $k\leqslant0$ 时有且仅有一解。(2) 若 $k>0$，令 $f'=0$ 得 $x=\sqrt[3]{\dfrac2k}$，该点为极小值点；$\lim\limits_{x\to0^+}f=\lim\limits_{x\to+\infty}f=+\infty$，故当且仅当 $f\left(\sqrt[3]{\dfrac2k}\right)=0$ 时有且仅有一解，解得 $k=\dfrac{2}{9}\sqrt3$。综上，$k\leqslant0$ 或 $k=\dfrac{2}{9}\sqrt3$。

【解2】变形得 $k=\dfrac1x-\dfrac{1}{x^3}\ (x>0)$。令 $f(x)=\dfrac1x-\dfrac{1}{x^3}$，$f'(x)=\dfrac{3-x^2}{x^4}$，令 $f'=0$ 得 $x=\sqrt3$。$x\in(0,\sqrt3)$ 时增，$x\in(\sqrt3,+\infty)$ 时减，在 $x=\sqrt3$ 取最大值 $\dfrac{2}{9}\sqrt3$。` },
      { p: 72, md: R`$f(\sqrt3)=\dfrac{2}{9}\sqrt3$，$\lim\limits_{x\to0^+}f(x)=-\infty$，$\lim\limits_{x\to+\infty}f(x)=0$。原方程有且仅有一解的几何意义是直线 $y=k$ 与曲线 $y=f(x)$ 有且仅有一个交点，由图可知 $k=\dfrac{2}{9}\sqrt3$ 或 $k\leqslant0$。

【例7】设 $f(x)$ 在 $[0,1]$ 上可微，且当 $0\leqslant x\leqslant1$ 时 $0<f(x)<1$，$f'(x)\neq1$。试证在 $(0,1)$ 内有且仅有一个 $x$ 使 $f(x)=x$。

【证】令 $F(x)=f(x)-x$，则 $F(0)=f(0)>0$，$F(1)=f(1)-1<0$，由零点定理知至少一实根；又 $F'(x)=f'(x)-1\neq0$，故最多一个实根。原题得证。

【例8】设 $f''(x)<0$，$f(1)=2$，$f'(1)=-3$，求证 $f(x)=0$ 在 $(1,+\infty)$ 有且仅有一个实根。

【证1】由 $f''<0$ 知 $f'$ 递减，又 $f'(1)=-3<0$，故 $x>1$ 时 $f'<0$，$f$ 递减，最多一个实根。由泰勒公式 $f(x)=2-3(x-1)+\dfrac{f''(\xi)}{2}(x-1)^2\leqslant5-3x$，令 $x=2$ 得 $f(2)\leqslant-1<0$；又 $f(1)=2>0$，由零点定理知有实根。故有且仅有一个实根。

【证2】唯一性同证法1。存在性：$f(2)-f(1)=f'(c)(2-1)\leqslant f'(1)(2-1)$（$f'$ 递减），即 $f(2)\leqslant2-3=-1<0$；又 $f(1)=2>0$，由零点定理知至少一实根。

### 题型四　证明函数不等式
证明不等式常用五种方法：1) 单调性；2) 最大最小值；3) 拉格朗日中值定理；4) 泰勒公式；5) 凹凸性。

【例1】设 $x\in(0,1)$，证明 $(1+x)\ln^2(1+x)<x^2$。

【证】令 $f(x)=x^2-(1+x)\ln^2(1+x)$，则 $f(0)=0$，$f'(x)=2x-\ln^2(1+x)-2\ln(1+x)$，$f'(0)=0$。` },
      { p: 73, md: R`$f''(x)=2-\dfrac{2\ln(1+x)}{1+x}-\dfrac{2}{1+x}=\dfrac{2}{1+x}[x-\ln(1+x)]>0\ (x\in(0,1))$，故 $x\in(0,1)$ 时 $f'(x)>f'(0)=0$，$f$ 单调增，$f(x)>f(0)=0$。原题得证。

【注】常用基本不等式：当 $x>0$ 时，$\dfrac{x}{1+x}<\ln(1+x)<x$。

【例2】求证 $\ln\dfrac ba>\dfrac{2(b-a)}{b+a}\ (0<a<b)$。

【证】只要证 $(b+a)(\ln b-\ln a)>2(b-a)$。令 $f(x)=(x+a)(\ln x-\ln a)-2(x-a)$。$f'(x)=(\ln x-\ln a)+\dfrac{x+a}{x}-2$，$f''(x)=\dfrac1x-\dfrac{a}{x^2}=\dfrac{x-a}{x^2}>0\ (x\in(a,b])$，故 $f'$ 单调增，又 $f'(a)=0$，则 $(a,b]$ 上 $f'>0$，$f$ 单调增，而 $f(a)=0$，故 $f(b)>0$，原式得证。

【例3】比较 $e^\pi$ 与 $\pi^e$ 的大小。

【解】等价于比较 $\dfrac{\ln e}{e}$ 与 $\dfrac{\ln\pi}{\pi}$，考察 $f(x)=\dfrac{\ln x}{x}$ 在 $[e,\pi]$ 上的单调性。$f'(x)=\dfrac{1-\ln x}{x^2}<0\ (x\in(e,\pi])$，则 $f(\pi)<f(e)$，即 $e^\pi>\pi^e$。

【例4】设 $\lim\limits_{x\to0}\dfrac{f(x)}x=1$，且 $f''(x)>0$，证明 $f(x)\geqslant x$。

【证1】由极限知 $f(0)=0,f'(0)=1$，由泰勒公式 $f(x)=x+\dfrac{f''(\xi)}{2!}x^2\geqslant x$。
【证2】由 $f''>0$ 知 $f'$ 单调增，由拉格朗日中值定理 $f(x)-f(0)=f'(c)x$。当 $x>0$ 时 $0<c<x$，$f(x)=f'(c)x>f'(0)x=x$；当 $x<0$ 时 $x<c<0$，$f'(c)<f'(0)$，$f(x)=f'(c)x>f'(0)x=x$。
【证3】令 $F(x)=f(x)-x$，$F'(x)=f'(x)-1$，$F'(0)=0$，$F''(x)=f''(x)>0$，故 $x=0$ 为 $F$ 唯一极小值点，也是最小值点，` },
      { p: 74, md: R`从而 $F(x)\geqslant F(0)=0$，原题得证。

【例5】试证 $(x+y)\ln\dfrac{x+y}{2}\leqslant x\ln x+y\ln y\ (x>0,y>0)$。

【证】只要证 $\dfrac{x+y}{2}\ln\dfrac{x+y}{2}\leqslant\dfrac{x\ln x+y\ln y}{2}$，即证 $f(x)=x\ln x\ (x>0)$ 的图形是凹的。由于 $f'(x)=\ln x+1$，$f''(x)=\dfrac1x>0$，故 $f$ 的图形是凹的，原题得证。

### 题型五　微分中值定理有关的证明题
#### （一）证明存在一个点 $\xi\in(a,b)$，使 $F[\xi,f(\xi),f'(\xi)]=0$
方法：构造辅助函数用罗尔定理。1. 分析法（还原法）：确定 $g(x)$ 使 $g'(x)=F[x,f(x),f'(x)]$；2. 微分方程法：求 $F(x,y,y')=0$ 的通解 $H(x,y)=C$，令 $g(x)=H(x,f(x))$。

【例1】设 $f(x)$ 在 $[a,b]$ 上连续，在 $(a,b)$ 内可导，$f(a)=b,f(b)=a$，$a,b$ 同号。求证 $\exists\xi\in(a,b)$ 使 $f'(\xi)=-\dfrac{f(\xi)}{\xi}$。

【分析】(1) 分析法：欲证 $\xi f'(\xi)+f(\xi)=0$，构造 $g(x)=xf(x)$。(2) 微分方程法：解 $y'=-\dfrac yx$ 得 $xy=C$，构造 $g(x)=xf(x)$。

【证】令 $g(x)=xf(x)$，则 $g(a)=af(a)=ab$，$g(b)=bf(b)=ab$，由罗尔定理知 $\exists\xi\in(a,b)$ 使 $g'(\xi)=0$，即 $\xi f'(\xi)+f(\xi)=0$。` },
      { p: 75, md: R`【例2】设 $f(x)$ 在 $[1,2]$ 上连续，在 $(1,2)$ 内可导且 $f(1)=\dfrac12,f(2)=2$。求证 $\exists\xi\in(1,2)$ 使 $f'(\xi)=\dfrac{2f(\xi)}{\xi}$。

【分析】解微分方程 $y'=\dfrac{2y}{x}$ 得通解 $\dfrac{y}{x^2}=C$，构造 $F(x)=\dfrac{f(x)}{x^2}$。

【证】令 $F(x)=\dfrac{f(x)}{x^2}$，则 $F'(x)=\dfrac{xf'(x)-2f(x)}{x^3}$，且 $F(1)=\dfrac12,F(2)=\dfrac12$，由罗尔定理知 $\exists\xi\in(1,2)$ 使 $F'(\xi)=0$，即 $\xi f'(\xi)-2f(\xi)=0$。原题得证。

【注】常用辅助函数：1) 欲证 $\xi f'(\xi)+nf(\xi)=0$，令 $F(x)=x^nf(x)$；2) 欲证 $\xi f'(\xi)-nf(\xi)=0$，令 $F(x)=\dfrac{f(x)}{x^n}$。

【例3】设 $f(x)$ 在 $[a,b]$ 上连续，在 $(a,b)$ 内可导，且 $f(a)=f(b)=0$。求证 $\exists\xi\in(a,b)$ 使 $f'(\xi)+\lambda f(\xi)=0$。

【分析】解 $y'+\lambda y=0$ 得 $e^{\lambda x}y=C$，构造 $F(x)=e^{\lambda x}f(x)$。

【证】令 $F(x)=e^{\lambda x}f(x)$，则 $F'(x)=e^{\lambda x}[f'(x)+\lambda f(x)]$，$F(a)=F(b)=0$，由罗尔定理知 $\exists\xi\in(a,b)$ 使 $F'(\xi)=0$，即 $f'(\xi)+\lambda f(\xi)=0$。

【注】常用辅助函数：1) 欲证 $f'(\xi)+\lambda f(\xi)=0$，令 $F(x)=e^{\lambda x}f(x)$（特别地 $f'+f=0$ 令 $e^xf$，$f'-f=0$ 令 $e^{-x}f$）；2) 欲证 $\alpha f'(\xi)+\beta f(\xi)=0$，令 $F(x)=e^{\frac\beta\alpha x}f(x)$；3) 欲证 $f'(\xi)+g'(\xi)f(\xi)=0$，令 $F(x)=e^{g(x)}f(x)$；4) 欲证 $f'(\xi)+g(\xi)f(\xi)=0$，令 $F(x)=e^{\int_a^xg(t)dt}f(x)$。` },
      { p: 76, md: R`【例4】设 $f(x)$ 在 $[0,1]$ 上连续，在 $(0,1)$ 内可导，且 $f(0)=f(1)=0,f\left(\dfrac12\right)=1$。试证：(1) 存在 $\eta\in\left(\dfrac12,1\right)$ 使 $f(\eta)=\eta$；(2) 对任意实数 $\lambda$，存在 $\xi\in(0,\eta)$ 使 $f'(\xi)-\lambda[f(\xi)-\xi]=1$。

【证】(1) 令 $F(x)=f(x)-x$，$F\left(\dfrac12\right)=\dfrac12>0$，$F(1)=-1<0$，由零点定理知 $\exists\eta\in\left(\dfrac12,1\right)$ 使 $F(\eta)=0$。
(2) 令 $\varphi(x)=(f(x)-x)e^{-\lambda x}$，则 $\varphi'(x)=e^{-\lambda x}\{[f'(x)-1]-\lambda[f(x)-x]\}$，$\varphi(0)=\varphi(\eta)=0$，由罗尔定理知 $\exists\xi\in(0,\eta)$ 使 $\varphi'(\xi)=0$，即 $f'(\xi)-\lambda[f(\xi)-\xi]=1$。

【例5】设奇函数 $f(x)$ 在 $[-1,1]$ 上具有 2 阶导数，且 $f(1)=1$。证明：(1) 存在 $\xi\in(0,1)$ 使 $f'(\xi)=1$；(2) 存在 $\eta\in(-1,1)$ 使 $f''(\eta)+f'(\eta)=1$。

【证】(1) $f$ 为奇函数，$f(0)=0$；由拉格朗日中值定理，存在 $\xi\in(0,1)$ 使 $f(1)-f(0)=f'(\xi)$，即 $f'(\xi)=1$。
(2) 解 $y'+y=1$ 得 $(y-1)e^x=C$，构造 $F(x)=[f'(x)-1]e^x$。因 $f$ 为奇函数，$f'$ 为偶函数，$f'(-\xi)=f'(\xi)=1$，且 $F(-\xi)=F(\xi)=0$。由罗尔定理存在 $\eta\in(-\xi,\xi)\subset(-1,1)$ 使 $F'(\eta)=0$，即 $f''(\eta)+f'(\eta)=1$。

【例6】设函数 $f(x),g(x)$ 在 $[a,b]$ 上二阶可导，且 $g''(x)\neq0$，$f(a)=f(b)=g(a)=g(b)=0$。试证 (1) 在 $(a,b)$ 内 $g(x)\neq0$；(2) 在 $(a,b)$ 内至少有一点 $\xi$，使 $\dfrac{f(\xi)}{g(\xi)}=\dfrac{f''(\xi)}{g''(\xi)}$。

【证】(1) 由 $g''\neq0$ 知 $g(x)=0$ 最多两个根，又 $g(a)=g(b)=0$，故 $(a,b)$ 内 $g(x)\neq0$。(2) 只要证 $g(\xi)f''(\xi)-f(\xi)g''(\xi)=0$。令 $F(x)=g(x)f'(x)-f(x)g'(x)$，则 $F(a)=F(b)=0$，由罗尔定理知 $\exists\xi\in(a,b)$ 使 $F'(\xi)=0$，原题得证。

【例7】设 $f(x)$ 在 $[0,1]$ 上连续，且 $\displaystyle\int_0^1f(x)dx=0$。求证 $\exists\xi\in(0,1)$ 使 $\displaystyle\int_0^\xi f(x)dx=-\xi f(\xi)$。` },
      { p: 77, md: R`【证】只要证 $\displaystyle\int_0^\xi f(x)dx+\xi f(\xi)=0$。令 $F(x)=x\displaystyle\int_0^xf(t)dt$，则 $F(0)=F(1)=0$，由罗尔定理知 $\exists\xi\in(0,1)$ 使 $F'(\xi)=0$，即 $\displaystyle\int_0^\xi f(x)dx+\xi f(\xi)=0$。

【例8】设 $f(x)$ 在 $[0,1]$ 上连续，在 $(0,1)$ 内可导，且 $\displaystyle\int_0^1f(x)dx=0$。求证 $\exists\xi\in(0,1)$ 使 $\xi f'(\xi)+2f(\xi)=0$。

【证】令 $F(x)=x^2f(x)$，$F(0)=0$。由积分中值定理 $\exists c\in(0,1)$ 使 $\displaystyle\int_0^1f(x)dx=f(c)=0$，从而 $F(c)=0$。由罗尔定理知 $\exists\xi\in(0,c)$ 使 $F'(\xi)=0$，即 $\xi f'(\xi)+2f(\xi)=0$。

【例9】设 $f(x)$ 在 $[0,1]$ 上连续，$f(0)=0,\displaystyle\int_0^1f(x)dx=0$。求证 $\exists\xi\in(0,1)$ 使 $\displaystyle\int_0^\xi f(x)dx=\xi f(\xi)$。

【证】只要证 $\displaystyle\int_0^\xi f(x)dx-\xi f(\xi)=0$。令 $F(x)=\begin{cases}\dfrac{\int_0^xf(t)dt}{x},&0<x\leqslant1\\0,&x=0\end{cases}$，由 $\lim\limits_{x\to0^+}F(x)=\lim\limits_{x\to0^+}\dfrac{f(x)}1=0$ 及 $F(0)=F(1)=0$，$F$ 在 $[0,1]$ 满足罗尔定理条件，故 $\exists\xi\in(0,1)$ 使 $F'(\xi)=0$，即 $\displaystyle\int_0^\xi f(x)dx-\xi f(\xi)=0$。

#### （二）证明存在两个中值点 $\xi,\eta\in(a,b)$
方法：(1) 不要求 $\xi\neq\eta$：在同一区间用两次中值定理；(2) 要求 $\xi\neq\eta$：将 $[a,b]$ 分为两个子区间分别用拉格朗日中值定理。

【例1】设 $f(x)$ 在 $[a,b]$ 上连续，$(a,b)$ 内可导，且 $a,b$ 同号，试证存在 $\xi,\eta\in(a,b)$ 使 $f'(\xi)=\dfrac{a+b}{2\eta}f'(\eta)$。

【证】由拉格朗日中值定理 $\exists\xi\in(a,b)$ 使 $\dfrac{f(b)-f(a)}{b-a}=f'(\xi)$；由柯西中值定理 $\exists\eta\in(a,b)$ 使 $\dfrac{f(b)-f(a)}{b^2-a^2}=\dfrac{f'(\eta)}{2\eta}$。` },
      { p: 78, md: R`从而有 $f'(\xi)=\dfrac{a+b}{2\eta}f'(\eta)$。

【例2】设 $f(x)$ 在 $[a,b]$ 上连续，在 $(a,b)$ 内可导，且 $f'(x)\neq0$，证明存在 $\xi,\eta\in(a,b)$ 使 $\dfrac{f'(\xi)}{f'(\eta)}=\dfrac{e^b-e^a}{b-a}e^{-\eta}$。

【证】只要证 $f'(\xi)=\dfrac{e^b-e^a}{b-a}\cdot\dfrac{f'(\eta)}{e^\eta}$。由拉格朗日中值定理 $\exists\xi\in(a,b)$ 使 $\dfrac{f(b)-f(a)}{b-a}=f'(\xi)$；由柯西中值定理 $\exists\eta\in(a,b)$ 使 $\dfrac{f(b)-f(a)}{e^b-e^a}=\dfrac{f'(\eta)}{e^\eta}$。从而有 $\dfrac{f'(\xi)}{f'(\eta)}=\dfrac{e^b-e^a}{b-a}e^{-\eta}$。

【例3】设 $f(x)$ 在 $[a,b]$ 上连续，在 $(a,b)$ 内可导，且 $f(a)=f(b)=1$，试证存在 $\xi,\eta\in(a,b)$ 使 $e^{\eta-\xi}[f(\eta)+f'(\eta)]=1$。

【证】只要证 $e^\eta[f(\eta)+f'(\eta)]=e^\xi$。由拉格朗日中值定理 $\exists\xi\in(a,b)$ 使 $\dfrac{e^b-e^a}{b-a}=e^\xi$。令 $F(x)=e^xf(x)$，由拉格朗日中值定理 $\exists\eta\in(a,b)$ 使 $\dfrac{F(b)-F(a)}{b-a}=F'(\eta)$，即 $\dfrac{e^b-e^a}{b-a}=e^\eta[f(\eta)+f'(\eta)]$，故 $e^\eta[f(\eta)+f'(\eta)]=e^\xi$。

【例4】设 $f(x)$ 在 $[0,1]$ 上连续，在 $(0,1)$ 内可导，且 $f(0)=0,f(1)=1$。证明：(1) 存在 $\xi\in(0,1)$ 使 $f(\xi)=1-\xi$；(2) 存在两个不同的点 $\eta,\zeta\in(0,1)$ 使 $f'(\eta)f'(\zeta)=1$。

【证】(1) 令 $F(x)=f(x)-1+x$，$F(0)=-1<0$，$F(1)=1>0$，由零点定理知 $\exists\xi\in(0,1)$ 使 $F(\xi)=0$，即 $f(\xi)=1-\xi$。
(2) 在 $[0,\xi]$、$[\xi,1]$ 上分别用拉格朗日中值定理得 $\dfrac{f(\xi)}{\xi}=f'(\eta)\ (\eta\in(0,\xi))$，$\dfrac{1-f(\xi)}{1-\xi}=f'(\zeta)\ (\zeta\in(\xi,1))$，从而 $f'(\eta)f'(\zeta)=\dfrac{f(\xi)}{\xi}\cdot\dfrac{1-f(\xi)}{1-\xi}=1$。` },
      { p: 79, md: R`【例5】设 $f(x)$ 在 $[0,1]$ 上连续，在 $(0,1)$ 内可导，且 $f(0)=0,f(1)=1$，试证对任意给定的正数 $a,b$，在 $(0,1)$ 内一定存在互不相同的 $\xi,\eta$，使 $\dfrac{a}{f'(\xi)}+\dfrac{b}{f'(\eta)}=a+b$。

【分析】要证 $\xi\neq\eta$ 两点，将区间分为两个子区间，分点 $c$ 用逆推法选取。设 $c\in(0,1)$，由拉格朗日中值定理 $\dfrac{f(c)-f(0)}{c}=f'(\xi)\ (\xi\in(0,c))$，$\dfrac{f(1)-f(c)}{1-c}=f'(\eta)\ (\eta\in(c,1))$。代入结论得 $a\cdot\dfrac{c}{f(c)}+b\cdot\dfrac{1-c}{1-f(c)}=a+b$，若 $f(c)=\dfrac{a}{a+b}$ 则成立。

【证】由 $f(0)=0<\dfrac{a}{a+b}<1=f(1)$，由介值定理 $\exists c\in(0,1)$ 使 $f(c)=\dfrac{a}{a+b}$。在 $[0,c]$、$[c,1]$ 上分别用拉格朗日中值定理得 $\dfrac{1}{f'(\xi)}=\dfrac{c(a+b)}{a}$，$\dfrac{1}{f'(\eta)}=\dfrac{(1-c)(a+b)}{b}$，故 $\dfrac{a}{f'(\xi)}+\dfrac{b}{f'(\eta)}=a+b$。

#### （三）证明存在一个中值点 $\xi\in(a,b)$，使 $F[\xi,f^{(n)}(\xi)]\geqslant0\ (n\geqslant2)$
方法：用带拉格朗日余项的泰勒公式，$x_0$ 点选题目中提供函数值和导数值信息多的点。

【例1】设 $f(x)$ 在 $[a,b]$ 上二阶可导，$f'(a)=f'(b)=0$。求证 $\exists\xi\in(a,b)$ 使 $|f''(\xi)|\geqslant4\dfrac{|f(b)-f(a)|}{(b-a)^2}$。

【证】由泰勒公式 $f(x)=f(a)+f'(a)(x-a)+\dfrac{f''(\xi_1)}{2!}(x-a)^2$，` },
      { p: 80, md: R`$f(x)=f(b)+f'(b)(x-b)+\dfrac{f''(\xi_2)}{2!}(x-b)^2$。令 $x=\dfrac{a+b}{2}$ 得 $f\left(\dfrac{a+b}{2}\right)=f(a)+\dfrac{f''(\xi_1)}{8}(b-a)^2$，$f\left(\dfrac{a+b}{2}\right)=f(b)+\dfrac{f''(\xi_2)}{8}(b-a)^2$。两式相减得 $f(b)-f(a)=\dfrac{(b-a)^2}{8}(f''(\xi_1)-f''(\xi_2))$，从而 $|f(b)-f(a)|\leqslant\dfrac{(b-a)^2}{8}(|f''(\xi_1)|+|f''(\xi_2)|)\leqslant\dfrac{(b-a)^2}{4}|f''(\xi)|$，故 $|f''(\xi)|\geqslant4\dfrac{|f(b)-f(a)|}{(b-a)^2}$。

【例2】设 $f(x)$ 在 $[0,1]$ 上三阶可导，$f(0)=0,f(1)=1,f'\left(\dfrac12\right)=0$。求证 $\exists\xi\in(0,1)$ 使 $|f'''(\xi)|\geqslant24$。

【证】由泰勒公式 $f(x)=f\left(\dfrac12\right)+f'\left(\dfrac12\right)\left(x-\dfrac12\right)+\dfrac{f''\left(\frac12\right)}{2!}\left(x-\dfrac12\right)^2+\dfrac{f'''(\xi)}{3!}\left(x-\dfrac12\right)^3$。令 $x=0,1$ 得 $f(0)=f\left(\dfrac12\right)+\dfrac{f''\left(\frac12\right)}{8}-\dfrac{f'''(\xi_1)}{48}=0$，$f(1)=f\left(\dfrac12\right)+\dfrac{f''\left(\frac12\right)}{8}+\dfrac{f'''(\xi_2)}{48}=1$。相减得 $48=f'''(\xi_1)+f'''(\xi_2)$，从而 $48\leqslant2\max(|f'''(\xi_1)|,|f'''(\xi_2)|)$，故 $\exists\xi\in(0,1)$ 使 $|f'''(\xi)|\geqslant24$。

【例3】设 $f(x)$ 在 $[0,1]$ 上有二阶连续导数，且 $f(0)=f(1)=0$，$\min\limits_{0\leqslant x\leqslant1}f(x)=-1$，证明 $\max\limits_{0\leqslant x\leqslant1}f''(x)\geqslant8$。

【证】只要证存在 $\xi\in(0,1)$ 使 $f''(\xi)\geqslant8$。设 $f(c)=\min f(x)=-1$，则 $0<c<1$，且 $f'(c)=0$。由泰勒公式 $f(x)=f(c)+f'(c)(x-c)+\dfrac{f''(\xi)}{2!}(x-c)^2$。分别令 $x=0$ 和 $x=1$ 得（证明续下）。` }
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
