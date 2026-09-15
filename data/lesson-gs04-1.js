window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["gs04_s0"] = {
    id: "gs04_s0",
    ch: "第四章 常微分方程",
    title: "常微分方程",
    book: "武忠祥《高等数学辅导讲义》",
    pages: [128, 137],
    img: "assets/img/gaoshu",
    content: [
      { p: 128, md: R`### 一、考试内容要点精讲
#### （一）常微分方程的基本概念
1. 微分方程：含未知函数导数或微分的方程。2. 阶：方程中未知函数最高阶导数的阶数。3. 解：满足方程的函数。4. 通解：解中含任意常数，且个数与阶数相同。5. 特解：不含任意常数的解。6. 初始条件：确定特解的一组常数。7. 积分曲线：解对应的曲线。

#### （二）一阶微分方程
**1. 可分离变量的方程**：能表示为 $g(y)dy=f(x)dx$，两端积分 $\int g(y)dy=\int f(x)dx$。
**2. 齐次方程**：能化为 $\dfrac{dy}{dx}=\varphi\left(\dfrac yx\right)$。令 $u=\dfrac yx$，则 $y'=u+xu'$，化为 $xu'=\varphi(u)-u$（可分离变量）。
**3. 线性方程**：形如 $y'+p(x)y=Q(x)$，通解公式 $y=e^{-\int p(x)dx}\left[\int Q(x)e^{\int p(x)dx}dx+C\right]$。
**4. 伯努利方程（仅数学一要求）**：$y'+p(x)y=Q(x)y^n\ (n\neq0,1)$，令 $u=y^{1-n}$ 化为一阶线性方程。` },
      { p: 129, md: R`**5. 全微分方程（仅数学一要求）**：若 $P(x,y)dx+Q(x,y)dy=0$ 左端是某 $u(x,y)$ 的全微分，则通解 $u(x,y)=C$。求 $u$ 有偏积分、凑微分、线积分三法。当 $P,Q$ 在单连通域内有连续一阶偏导时，为全微分方程的充要条件是 $\dfrac{\partial P}{\partial y}=\dfrac{\partial Q}{\partial x}$。

【注】若一阶方程不属于五种标准形式，先考虑将 $x,y$ 对调（视 $x$ 为 $y$ 的函数），或作变量代换化为标准形式。

#### （三）可降阶的高阶方程（数学三不要求）
1. $y^{(n)}=f(x)$ 型；2. $y''=f(x,y')$ 型：令 $y'=p,y''=p'$；3. $y''=f(y,y')$ 型：令 $y'=p,y''=p\dfrac{dp}{dy}$。

#### （四）高阶线性微分方程
**1. 解的结构**：二阶线性方程 $y''+p(x)y'+q(x)y=f(x)$，$f\equiv0$ 时齐次，否则非齐次。
**定理1** 若 $y_1,y_2$ 是齐次方程的两个线性无关特解，则 $y=C_1y_1+C_2y_2$ 是通解。
【注】两解线性无关的充要条件是它们之比不为常数。
**定理2** 若 $y^*$ 是非齐次的一个特解，$y_1,y_2$ 是齐次两个线性无关特解，则 $y=C_1y_1+C_2y_2+y^*$ 是非齐次通解。` },
      { p: 130, md: R`**定理3** 若 $y_1^*,y_2^*$ 是非齐次方程的两个特解，则 $y_2^*-y_1^*$ 是齐次方程的解。
**定理4** 若 $y_1^*,y_2^*$ 分别是右端为 $f_1,f_2$ 的方程的特解，则 $y_1^*+y_2^*$ 是右端为 $f_1+f_2$ 的方程的特解。

**2. 常系数齐次线性微分方程** $y''+py'+qy=0$，特征方程 $r^2+pr+q=0$：
(1) 两不等实根 $r_1,r_2$：$y=C_1e^{r_1x}+C_2e^{r_2x}$；
(2) 二重实根 $r$：$y=(C_1+C_2x)e^{rx}$；
(3) 共轭复根 $\alpha\pm\beta i$：$y=e^{\alpha x}(C_1\cos\beta x+C_2\sin\beta x)$。

**3. 常系数非齐次线性微分方程** $y''+py'+qy=f(x)$：
(1) $f=P_m(x)e^{\lambda x}$：设 $y^*=x^kQ_m(x)e^{\lambda x}$，$k$ 为 $\lambda$ 作为特征根的重数（非根 $k=0$，单根 $k=1$，重根 $k=2$）。
(2) $f=e^{\alpha x}[P_l^{(1)}\cos\beta x+P_n^{(2)}\sin\beta x]$：设 $y^*=x^ke^{\alpha x}[R_m^{(1)}\cos\beta x+R_m^{(2)}\sin\beta x]$，$m=\max\{l,n\}$；$\alpha+\beta i$ 非特征根 $k=0$，单根 $k=1$。

**4. 欧拉方程（仅数学一要求）** $x^ny^{(n)}+\cdots+p_ny=f(x)$，令 $x=e^t$，$x^ky^{(k)}=D(D-1)\cdots(D-k+1)y$。

#### （五）差分方程（仅数三要求）
**1）一阶常系数线性齐次差分方程** $y_{t+1}+ay_t=0$，` },
      { p: 131, md: R`通解 $y_c(t)=C\cdot(-a)^t$。
**2）一阶常系数线性非齐次差分方程** $y_{t+1}+ay_t=f(t)$，通解 $y_t=y_c(t)+y_t^*$。
① $f(t)=P_m(t)$：ⅰ) $a\neq-1$ 令 $y_t^*=Q_m(t)$；ⅱ) $a=-1$ 令 $y_t^*=tQ_m(t)$。
② $f(t)=d^tP_m(t)\ (d\neq0)$：ⅰ) $a+d\neq0$ 令 $y_t^*=d^tQ_m(t)$；ⅱ) $a+d=0$ 令 $y_t^*=td^tQ_m(t)$。

【例1】差分方程 $2y_{t+1}+10y_t-5t=0$ 的通解为______。
【解】化为 $y_{t+1}+5y_t=\dfrac52t$，齐次通解 $y_c(t)=C(-5)^t$。因 $f(t)=\dfrac52t$ 为一次多项式且 $a=5\neq-1$，设 $y_t^*=At+B$，代入得 $6At+A+6B=\dfrac52t$，解得 $A=\dfrac5{12},B=-\dfrac5{72}$，故 $y_t=C(-5)^t+\dfrac5{12}\left(t-\dfrac16\right)$。

【例2】差分方程 $y_{t+1}-y_t=t\cdot2^t$ 的通解为______。
【解】齐次通解 $y_c(t)=C$。因 $f(t)=t2^t$ 且 $a+d=-1+2=1\neq0$，设 $y_t^*=2^t(At+B)$，代入得 $At+2A+B=t$，解得 $A=1,B=-2$，故 $y_t=C+2^t(t-2)$。` },
      { p: 132, md: R`### 二、常考题型的方法与技巧
### 题型一　微分方程求解
【例1】求解下列一阶微分方程：(1) $y'+xy^2-y^2=1-x$；(2) $xy'+y=2\sqrt{xy}$；(3) $y'=\dfrac{1}{xy+y^3}$；(4) $y'=\cos(x+y)$。

【解】(1) $y'=(1+y^2)(1-x)$，$\dfrac{dy}{1+y^2}=(1-x)dx$，$\arctan y=x-\dfrac12x^2+C$。
(2) 化为 $y'+\dfrac yx=2\sqrt{\dfrac yx}$，令 $u=\dfrac yx$，得 $u+xu'+u=2\sqrt u$，$\dfrac{d\sqrt u}{1-\sqrt u}=\dfrac{dx}{x}$，$x-\sqrt{xy}=C$。
(3) 化为 $\dfrac{dx}{dy}-yx=y^3$（线性），$x=e^{\frac12y^2}\left[\int y^3e^{-\frac{y^2}2}dy+C\right]=Ce^{\frac12y^2}-y^2-2$。
(4) 令 $x+y=u$，$\dfrac{du}{dx}=1+\cos u$，$\tan\dfrac{x+y}{2}=x+C$。` },
      { p: 133, md: R`(5) 求 $y'\sec^2y+\dfrac{x}{1+x^2}\tan y=x$ 满足 $y|_{x=0}=0$ 的特解。
【解】令 $\tan y=u$，得 $\dfrac{du}{dx}+\dfrac{x}{1+x^2}u=x$（线性），$u=\dfrac13(1+x^2)+\dfrac{C}{\sqrt{1+x^2}}$。由 $y|_{x=0}=0$ 得 $C=-\dfrac13$，故 $\tan y=\dfrac13\left(1+x^2-\dfrac{1}{\sqrt{1+x^2}}\right)$。
(6) $(x-\sin y)dy+\tan y\,dx=0$。
【解】化为 $\dfrac{dx}{dy}+x\cot y=\cos y$，$x=\dfrac{1}{\sin y}\left(\dfrac12\sin^2y+C\right)$。

【例2】求解下列各题（可降阶）：
1) 求 $(x+1)y''+y'=\ln(x+1)$ 的通解；2) 求 $\begin{cases}2yy''=y'^2+y^2\\y(0)=1,y'(0)=-1\end{cases}$ 的特解。
【解】1) 令 $y'=p$，得 $(x+1)p'+p=\ln(1+x)$（线性），$y=(x+1+C_1)\ln(1+x)-2x+C_2$。（或 $[(x+1)y']'=\ln(1+x)$。）
2) 令 $y'=p,y''=p\dfrac{dp}{dy}$，得 $2\dfrac py\dfrac{dp}{dy}=\left(\dfrac py\right)^2+1$；令 $\dfrac py=u$，得 $2yu\dfrac{du}{dy}=1-u^2$。由 $y(0)=1,y'(0)=-1$ 取 $u=-1$，即 $\dfrac py=-1$，$y=Ce^{-x}$，由 $y(0)=1$ 得 $y=e^{-x}$。` },
      { p: 134, md: R`【例3】求解下列各题（高阶线性方程）：
1) $y''-y=e^x+1$ 的特解形式可设为 (A) $ae^x+b$ (B) $axe^x+b$ (C) $ae^x+bx$ (D) $axe^x+bx$。选 (B)。
2) $y'''-y''=3x^2$ 的特解形式可设为 (A) $ax^2+bx+c$ (B) $x^2(ax^2+b)$ (C) $x^2(ax^2+bx+c)$ (D) $x(ax^2+bx+c)$。选 (C)。
3) $y''+y=x^2+1+\sin x$ 的特解形式可设为 (A) $ax^2+bx+c+A\sin x$ (B) $ax^2+bx+c+B\cos x$ (C) $ax^2+bx+c+A\sin x+B\cos x$ (D) $ax^2+bx+c+x(A\sin x+B\cos x)$。选 (D)。
4) 设线性无关的 $y_1,y_2,y_3$ 都是 $y''+p(x)y'+q(x)y=f(x)$ 的解，$C_1,C_2$ 为任意常数，则通解是 (A) $C_1y_1+C_2y_2+C_3y_3$ (B) $C_1y_1+C_2y_2-(C_1+C_2)y_3$ (C) $C_1y_1+C_2y_2+(1-C_1-C_2)y_3$ (D) $C_1y_1+C_2y_2-(1-C_1-C_2)y_3$。选 (C)。
【解】$C_1y_1+C_2y_2+(1-C_1-C_2)y_3=C_1(y_1-y_3)+C_2(y_2-y_3)+y_3$，其中 $y_1-y_3,y_2-y_3$ 是齐次的两个线性无关特解。
5) 已知 $y_1=xe^x+e^{2x},y_2=xe^x-e^{-x},y_3=xe^x+e^{2x}+e^{-x}$ 为某二阶线性常系数非齐次方程的特解，求此方程。
【解】$y_3-y_1=e^{-x}$、$y_1-xe^x=e^{2x}$ 为齐次解，特征方程 $(r+1)(r-2)=0$，齐次方程 $y''-y'-2y=0$。将 $y=xe^x$ 代入 $y''-y'-2y=f(x)$ 得 $f(x)=e^x(1-2x)$。所求方程 $y''-y'-2y=e^x(1-2x)$。
6) 若 $y=e^{2x}+(x+1)e^x$ 是 $y''+ay'+by=ce^x$ 的解，求 $a,b,c$ 及通解。` },
      { p: 135, md: R`【解】将 $y$ 代入比较系数得 $a=-3,b=2,c=-1$；通解 $y=C_1e^x+C_2e^{2x}+xe^x$。
7) 已知 $y_1=3,y_2=3+x^2,y_3=3+e^x$ 是某二阶线性非齐次方程的三个特解，求该方程及通解。
【解】$y_2-y_1=x^2$、$y_3-y_1=e^x$ 为齐次两个线性无关特解，通解 $y=C_1x^2+C_2e^x+3$。消去常数得 $(2x-x^2)y''+(x^2-2)y'+2(1-x)y=6(1-x)$。
8) 求 $y''+a^2y=\sin x\ (a>0)$ 的通解。
【解】特征根 $r=\pm ai$。① $a\neq1$：$y^*=A\cos x+B\sin x$，得 $A=0,B=\dfrac{1}{a^2-1}$，$y=C_1\cos ax+C_2\sin ax+\dfrac{1}{a^2-1}\sin x$。② $a=1$：$y^*=x(A\cos x+B\sin x)$，得 $A=-\dfrac12,B=0$，$y=C_1\cos x+C_2\sin x-\dfrac12x\cos x$。

### 题型二　综合题
【例1】求连续函数 $f(x)$ 使 $x\displaystyle\int_0^1f(tx)dt=f(x)+x$。
【解】令 $tx=u$，$\int_0^1f(tx)dt=\dfrac{\int_0^xf(u)du}{x}$，得 $\int_0^xf(u)du=f(x)+x$，求导 $f(x)=f'(x)+1$，$f'-f=-1$，$f=1+Ce^x$。由 $f(0)=0$ 得 $C=-1$，$f(x)=1-e^x$。
【例2】设 $f(x)=\sin x-\displaystyle\int_0^x(x-t)f(t)dt$，求 $f(x)$。
【解】$f(x)=\sin x-x\int_0^xf(t)dt+\int_0^xtf(t)dt$。` },
      { p: 136, md: R`求导得 $f'(x)=\cos x-\displaystyle\int_0^xf(t)dt$，$f''(x)=-\sin x-f(x)$，即 $f''+f=-\sin x$。$f(0)=0,f'(0)=1$。特征方程 $r^2+1=0$，设 $f=x(a\cos x+b\sin x)$，得 $a=\dfrac12,b=0$，通解 $f=C_1\cos x+C_2\sin x+\dfrac12x\cos x$。由 $f(0)=0,f'(0)=1$ 得 $C_1=0,C_2=\dfrac12$，故 $f(x)=\dfrac12\sin x+\dfrac x2\cos x$。

【例3】设 $f(x)$ 可导，且 $x=\displaystyle\int_0^xf(t)dt+\int_0^xtf(t-x)dt$，求 $f(x)$。
【解】令 $t-x=u$，得 $x=\displaystyle\int_0^xf(t)dt-\int_0^{-x}uf(u)du-x\int_0^{-x}f(u)du$，求导整理得 $f(x)=1+\displaystyle\int_0^{-x}f(u)du$，再求导 $f'(x)=-f(-x)$，再求导 $f''(x)=f'(-x)$，结合 $f'(-x)=-f(x)$ 得 $f''+f=0$，$f=C_1\cos x+C_2\sin x$。由 $f(0)=1,f'(0)=-1$ 得 $f(x)=\cos x-\sin x$。

【例4】设 $f(x)$ 有定义，$f'(0)=2$，且 $f(x+y)=e^xf(y)+e^yf(x)$，求 $f(x)$。
【解】$f'(x)=\lim\limits_{\Delta x\to0}\dfrac{e^xf(\Delta x)+e^{\Delta x}f(x)-f(x)}{\Delta x}=e^xf'(0)+f(x)=2e^x+f(x)$，解得 $f(x)=2xe^x$。` },
      { p: 137, md: R`【例5】设 $y=y(x)$ 二阶可导，$y'\neq0$，$x=x(y)$ 是反函数。(1) 将 $x$ 满足的 $\dfrac{d^2x}{dy^2}+(y+\sin x)\left(\dfrac{dx}{dy}\right)^3=0$ 化为 $y$ 满足的方程；(2) 求满足 $y(0)=0,y'(0)=\dfrac32$ 的解。
【解】(1) $\dfrac{dx}{dy}=\dfrac{1}{y'}$，$\dfrac{d^2x}{dy^2}=-\dfrac{y''}{y'^3}$，代入得 $y''-y=\sin x$。(2) 特征方程 $r^2-1=0$，$r=\pm1$，设 $y^*=A\cos x+B\sin x$，得 $A=0,B=-\dfrac12$，通解 $y=C_1e^x+C_2e^{-x}-\dfrac12\sin x$。由初值 $C_1=1,C_2=-1$，故 $y=e^x-e^{-x}-\dfrac12\sin x$。

### 题型三　应用题
【例1】设曲线 $y=f(x)$ 为连接 $A(1,0)$ 与 $B(0,1)$ 且位于弦 $AB$ 上方的弧段，$P(x,y)$ 为其上任意点，弦 $BP$ 与曲线围成的面积为 $x^3$，求曲线方程。
【解】$x^3=\displaystyle\int_0^xf(t)dt-\dfrac x2[1+f(x)]$，求导得 $f'-\dfrac1xf=-6x-\dfrac1x$（线性），$f=Cx-6x^2+1$。由 $f(1)=0$ 得 $C=5$，$f(x)=5x-6x^2+1$。
【例2】设对任意 $x>0$，曲线 $y=f(x)$ 上点 $(x,f(x))$ 处切线在 $y$ 轴上的截距等于 $\dfrac1x\displaystyle\int_0^xf(t)dt$，求 $f(x)$。
【解】切线 $Y-f(x)=f'(x)(X-x)$，令 $X=0$ 得截距 $f(x)-xf'(x)$，故 $f(x)-xf'(x)=\dfrac1x\displaystyle\int_0^xf(t)dt$，即 $xf(x)-x^2f'(x)=\int_0^xf(t)dt$，求导得 $xf''+f'=0$，$f(x)=C_1\ln x+C_2$。` }
    ],
    quiz: [
      { q: R`微分方程中未知函数最高阶导数的阶数称为`, options: [R`阶`, R`次`, R`解`, R`通解`], answer: 0, explain: R`定义为方程的阶。` },
      { q: R`可分离变量方程 $g(y)dy=f(x)dx$ 的解法是`, options: [R`两端积分`, R`两端求导`, R`取对数`, R`作变量代换`], answer: 0, explain: R`两端积分 $\int g(y)dy=\int f(x)dx$。` },
      { q: R`一阶线性方程 $y'+p(x)y=Q(x)$ 的通解公式是`, options: [R`$y=e^{-\int p\,dx}\left[\int Qe^{\int p\,dx}dx+C\right]$`, R`$y=e^{\int p\,dx}\left[\int Qe^{-\int p\,dx}dx+C\right]$`, R`$y=\int Q\,dx+C$`, R`$y=e^{-p}\int Q\,dx+C$`], answer: 0, explain: R`一阶线性方程通解公式。` },
      { q: R`齐次方程 $y'=\varphi(\frac yx)$ 令 $u=\frac yx$ 后化为`, options: [R`$xu'=\varphi(u)-u$`, R`$u'=\varphi(u)$`, R`$xu'=\varphi(u)$`, R`$u'=\varphi(u)-u$`], answer: 0, explain: R`$y=ux$，$y'=u+xu'$。` },
      { q: R`二阶常系数齐次方程 $y''+py'+qy=0$ 特征根为二重实根 $r$ 时通解为`, options: [R`$(C_1+C_2x)e^{rx}$`, R`$C_1e^{r_1x}+C_2e^{r_2x}$`, R`$e^{\alpha x}(C_1\cos\beta x+C_2\sin\beta x)$`, R`$C_1e^{rx}$`], answer: 0, explain: R`二重实根的情形。` },
      { q: R`特征根为共轭复根 $\alpha\pm\beta i$ 时，齐次方程通解为`, options: [R`$e^{\alpha x}(C_1\cos\beta x+C_2\sin\beta x)$`, R`$C_1e^{\alpha x}+C_2e^{\beta x}$`, R`$(C_1+C_2x)e^{\alpha x}$`, R`$e^{\beta x}(C_1\cos\alpha x+C_2\sin\alpha x)$`], answer: 0, explain: R`共轭复根的情形。` },
      { q: R`非齐次方程 $y''+py'+qy=P_m(x)e^{\lambda x}$ 中，若 $\lambda$ 是特征方程的重根，则特解应设为`, options: [R`$x^2Q_m(x)e^{\lambda x}$`, R`$Q_m(x)e^{\lambda x}$`, R`$xQ_m(x)e^{\lambda x}$`, R`$Q_m(x)$`], answer: 0, explain: R`$k$ 取特征根重数，重根 $k=2$。` },
      { q: R`若 $y_1,y_2$ 是齐次方程的两个线性无关特解，则通解为`, options: [R`$C_1y_1+C_2y_2$`, R`$y_1+y_2$`, R`$C_1y_1-y_2$`, R`$y_1-y_2$`], answer: 0, explain: R`线性无关特解的线性组合。` },
      { q: R`伯努利方程 $y'+p(x)y=Q(x)y^n$ 通过令 $u=$ 化为一阶线性方程`, options: [R`$y^{1-n}$`, R`$y^n$`, R`$\frac yx$`, R`$\ln y$`], answer: 0, explain: R`令 $u=y^{1-n}$。` },
      { q: R`若 $y_1^*,y_2^*$ 是非齐次方程的两个特解，则 $y_2^*-y_1^*$ 是`, options: [R`齐次方程的解`, R`非齐次方程的解`, R`常数`, R`特解`], answer: 0, explain: R`两特解之差为齐次方程的解。` }
    ]
  };
})();
