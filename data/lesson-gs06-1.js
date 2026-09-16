window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["gs06_s0"] = {
    id: "gs06_s0",
    ch: "第六章 二重积分",
    title: "二重积分",
    book: "武忠祥《高等数学辅导讲义》",
    pages: [174, 186],
    img: "assets/img/gaoshu",
    content: [
      { p: 174, md: R`### 一、考试内容要点精讲
#### （一）二重积分的概念
**定义** 设 $z=f(x,y)$ 在有界闭区域 $D$ 上有界，将 $D$ 任意分成 $n$ 个小闭区域 $\Delta\sigma_1,\cdots,\Delta\sigma_n$，在每个 $\Delta\sigma_i$ 上任取 $(\xi_i,\eta_i)$，作和 $\sum\limits_{i=1}^nf(\xi_i,\eta_i)\Delta\sigma_i$。记 $\lambda$ 为各小区域最大直径，若 $\lim\limits_{\lambda\to0}\sum\limits_{i=1}^nf(\xi_i,\eta_i)\Delta\sigma_i$ 存在，则称此极限为 $f(x,y)$ 在 $D$ 上的二重积分，$\displaystyle\iint_Df(x,y)d\sigma=\lim\limits_{\lambda\to0}\sum\limits_{i=1}^nf(\xi_i,\eta_i)\Delta\sigma_i$。

#### （二）几何意义
$\displaystyle\iint_Df(x,y)d\sigma$ 是一个数。当 $f(x,y)\geqslant0$ 时，其值等于以 $D$ 为底、以 $z=f(x,y)$ 为曲顶的曲顶柱体体积。

#### （三）性质
1. 不等式性质：(1) 若 $f\leqslant g$，则 $\iint_Df\leqslant\iint_Dg$；(2) 若 $f$ 连续，则 $mS\leqslant\iint_Df\leqslant MS$（$m,M$ 为最值，$S$ 为 $D$ 的面积）；(3) $\left|\iint_Df\right|\leqslant\iint_D|f|$。
2. 积分中值定理：若 $f$ 在 $D$ 上连续，则 $\iint_Df=f(\xi,\eta)S$，$(\xi,\eta)\in D$。` },
      { p: 175, md: R`#### （四）二重积分的计算
**1. 直角坐标**：1) 先 $y$ 后 $x$（X 型域 $y_1(x)\leqslant y\leqslant y_2(x),a\leqslant x\leqslant b$）：$\displaystyle\iint_Df\,d\sigma=\int_a^bdx\int_{y_1(x)}^{y_2(x)}f\,dy$；2) 先 $x$ 后 $y$（Y 型域）：$\displaystyle\iint_Df\,d\sigma=\int_c^ddy\int_{x_1(y)}^{x_2(y)}f\,dx$。

**2. 极坐标**（$\rho_1(\theta)\leqslant\rho\leqslant\rho_2(\theta),\alpha\leqslant\theta\leqslant\beta$）：$\displaystyle\iint_Df\,d\sigma=\int_\alpha^\beta d\theta\int_{\rho_1(\theta)}^{\rho_2(\theta)}f(\rho\cos\theta,\rho\sin\theta)\rho\,d\rho$。
【注】适合极坐标的特征：① 被积函数 $f(\sqrt{x^2+y^2}),f\left(\dfrac yx\right),f\left(\dfrac xy\right)$；② 积分域如 $x^2+y^2\leqslant R^2$、$r^2\leqslant x^2+y^2\leqslant R^2$、$x^2+y^2\leqslant2ax$、$x^2+y^2\leqslant2by$。

**3. 对称性与奇偶性**：1) $D$ 关于 $y$ 轴对称，$f$ 关于 $x$ 有奇偶性：$\displaystyle\iint_Df\,d\sigma=\begin{cases}2\iint_{D_{x\geqslant0}}f\,d\sigma,&f(-x,y)=f(x,y)\\0,&f(-x,y)=-f(x,y)\end{cases}$；2) $D$ 关于 $x$ 轴对称，$f$ 关于 $y$ 有奇偶性：类似。

**4. 变量对称性**：$\displaystyle\iint_{D_{(x,y)}}f(x,y)d\sigma=\iint_{D_{(y,x)}}f(y,x)d\sigma$，即对调 $x,y$ 积分值不变。` },
      { p: 176, md: R`例如 $\displaystyle\iint_{x^2+2y^2\leqslant1}(3x+4y)d\sigma=\iint_{y^2+2x^2\leqslant1}(3y+4x)d\sigma$。若 $D$ 关于直线 $y=x$ 对称，则 $\displaystyle\iint_Df(x,y)d\sigma=\iint_Df(y,x)d\sigma$。

### 二、常考题型的方法与技巧
### 题型一　计算二重积分
【例1】计算 $\displaystyle\iint_D[|xy|+\sin(xy^2)]d\sigma$，$D$ 由 $|x|+|y|=1$ 围成。
【解】由奇偶性，原式 $=\displaystyle\iint_D|xy|d\sigma=4\iint_{D_1}xy\,d\sigma=4\int_0^1dx\int_0^{1-x}xy\,dy=\dfrac16$。

【例2】设 $D:x^2+y^2\leqslant R^2$，则 $\displaystyle\iint_D\left(\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}\right)d\sigma=$______。
【解1】极坐标：$=\displaystyle\int_0^{2\pi}d\theta\int_0^R\left(\dfrac{\cos^2\theta}{a^2}+\dfrac{\sin^2\theta}{b^2}\right)\rho^3d\rho=\dfrac{\pi R^4}{4}\left(\dfrac1{a^2}+\dfrac1{b^2}\right)$。
【解2】由 $D$ 关于 $y=x$ 对称，原式 $=\dfrac12\left(\dfrac1{a^2}+\dfrac1{b^2}\right)\displaystyle\iint_D(x^2+y^2)d\sigma=\dfrac{\pi R^4}{4}\left(\dfrac1{a^2}+\dfrac1{b^2}\right)$。

【例3】设 $D=\{x^2+y^2\leqslant4,x\geqslant0,y\geqslant0\}$，$f(x)$ 为 $D$ 上正值连续函数，$a,b$ 为常数，则 $\displaystyle\iint_D\dfrac{a\sqrt{f(x)}+b\sqrt{f(y)}}{\sqrt{f(x)}+\sqrt{f(y)}}d\sigma=$ (A) $ab\pi$ (B) $\dfrac{ab}2\pi$ (C) $(a+b)\pi$ (D) $\dfrac{a+b}2\pi$` },
      { p: 177, md: R`【解1】由 $D$ 关于 $y=x$ 对称，$\displaystyle\iint_D\dfrac{a\sqrt{f(x)}+b\sqrt{f(y)}}{\sqrt{f(x)}+\sqrt{f(y)}}d\sigma=\iint_D\dfrac{a\sqrt{f(y)}+b\sqrt{f(x)}}{\sqrt{f(y)}+\sqrt{f(x)}}d\sigma$，取半得 $=\dfrac12\iint_D(a+b)d\sigma=\dfrac{a+b}2\pi$。选 (D)。

【例4】计算 $\displaystyle\iint_Dx[1+yf(x^2+y^2)]d\sigma$，$D$ 由 $y=x^3,y=1,x=-1$ 围成，$f$ 连续。
【解】原式 $=\displaystyle\iint_Dx\,dxdy+\iint_Dxyf(x^2+y^2)dxdy$。作曲线 $y=-x^3$ 将域分为 $D_1,D_2$，由奇偶性第二项 $=0$；$\displaystyle\iint_Dx\,dxdy=\int_{-1}^1dx\int_{x^3}^1x\,dy=-\dfrac25$。故原式 $=-\dfrac25$。

【例5】计算 $\displaystyle\iint_D\dfrac{\sin y}y d\sigma$，$D$ 由 $y=\sqrt x$ 和 $y=x$ 围成。
【解】原式 $=\displaystyle\int_0^1dy\int_{y^2}^y\dfrac{\sin y}y dx=\int_0^1(\sin y-y\sin y)dy=1-\sin1$。

【例6】计算 $\displaystyle\iint_D\sqrt{x^2+y^2}dxdy$，$D$ 由 $x^2+y^2=2ay\ (a>0)$ 围成。
【解】原式 $=\displaystyle\int_0^\pi d\theta\int_0^{2a\sin\theta}\rho^2d\rho=\dfrac{8a^3}3\int_0^\pi\sin^3\theta\,d\theta=\dfrac{32}9a^3$。

【例7】计算 $\displaystyle\iint_D(x+y)d\sigma$，$D$ 由 $x^2+y^2\leqslant x+y$ 确定。` },
      { p: 178, md: R`【解1】圆 $x^2+y^2=x+y$ 极坐标方程 $\rho=\cos\theta+\sin\theta$，原式 $=\displaystyle\int_{-\frac\pi4}^{\frac{3\pi}4}d\theta\int_0^{\cos\theta+\sin\theta}(\cos\theta+\sin\theta)\rho^2d\rho=\dfrac13\int_{-\frac\pi4}^{\frac{3\pi}4}(\cos\theta+\sin\theta)^4d\theta=\dfrac43\int_0^\pi\sin^4t\,dt=\dfrac83\int_0^{\frac\pi2}\sin^4t\,dt=\dfrac\pi2$。
【解2】令 $x-\dfrac12=\rho\cos\theta,y-\dfrac12=\rho\sin\theta$，原式 $=\displaystyle\int_0^{2\pi}d\theta\int_0^{\frac1{\sqrt2}}(\rho\cos\theta+\rho\sin\theta+1)\rho\,d\rho=\int_0^{2\pi}d\theta\int_0^{\frac1{\sqrt2}}\rho\,d\rho=\dfrac\pi2$。
【解3】原式 $=\displaystyle\iint_D\left[(x-\tfrac12)+(y-\tfrac12)+1\right]d\sigma$，前两项由奇偶性为 $0$，故 $=\iint_Dd\sigma=\dfrac\pi2$（域面积）。
【解4】由对称性原式 $=2\iint_Dx\,d\sigma=2\bar xS$，$\bar x=\dfrac12,S=\dfrac\pi2$，故 $=\dfrac\pi2$。

【例8】计算 $\displaystyle\iint_Dy\,dxdy$，$D$ 由 $x=-2,y=0,y=2$ 及 $x=-\sqrt{2y-y^2}$ 围成。
【解1】$\displaystyle\int_0^2dy\int_{-2}^{-\sqrt{2y-y^2}}y\,dx=\int_0^2y[2-\sqrt{2y-y^2}]dy=4-\int_0^2y\sqrt{1-(y-1)^2}dy$，` },
      { p: 179, md: R`$=4-\displaystyle\int_{-\frac\pi2}^{\frac\pi2}(1+\sin t)\cos^2t\,dt=4-\dfrac\pi2$。
【解3】由 $D$ 关于直线 $y=1$ 上下对称，$\iint_D(y-1)d\sigma=0$，故 $\iint_Dy\,d\sigma=\iint_D[(y-1)+1]d\sigma=\iint_Dd\sigma=4-\dfrac\pi2$。
【解4】$\iint_Dy\,d\sigma=\bar yS$，由对称性 $\bar y=1$，$S=4-\dfrac\pi2$，故 $=4-\dfrac\pi2$。

【例9】设 $f(x,y)=\begin{cases}x^2,&|x|+|y|\leqslant1\\\dfrac{1}{\sqrt{x^2+y^2}},&1<|x|+|y|\leqslant2\end{cases}$，计算 $\displaystyle\iint_Df(x,y)d\sigma$，$D=\{|x|+|y|\leqslant2\}$。
【解】原式 $=\displaystyle4\int_0^1dx\int_0^{1-x}x^2dy+4\int_0^{\frac\pi2}d\theta\int_{\frac1{\sin\theta+\cos\theta}}^{\frac2{\sin\theta+\cos\theta}}d\rho=\dfrac13+4\int_0^{\frac\pi2}\dfrac{d\theta}{\sin\theta+\cos\theta}=\dfrac13+\dfrac4{\sqrt2}\int_0^{\frac\pi2}\dfrac{d\theta}{\sin(\theta+\frac\pi4)}$` },
      { p: 180, md: R`$=\dfrac13+4\sqrt2\ln(\sqrt2+1)$。

【例10】计算 $\displaystyle\iint_Dy^2d\sigma$，$D$ 由 $\begin{cases}x=a(t-\sin t)\\y=a(1-\cos t)\end{cases}(0\leqslant t\leqslant2\pi)$ 与 $y=0$ 围成。
【解】原式 $=\displaystyle\int_0^{2\pi a}dx\int_0^{y(x)}y^2dy=\dfrac13\int_0^{2\pi a}y^3dx=\dfrac13\int_0^{2\pi}a^3(1-\cos t)^3a(1-\cos t)dt=\dfrac{16a^4}3\int_0^{2\pi}\sin^8\dfrac t2dt=\dfrac{64a^4}3\int_0^{\frac\pi2}\sin^8u\,du=\dfrac{35}{12}\pi a^4$。

【例11】设 $D$ 是全平面，$f(x)=\begin{cases}x,&-1\leqslant x\leqslant2\\0,&\text{其它}\end{cases}$，计算 $\displaystyle\iint_Df(x)f(x^2-y)d\sigma$。
【解】$f(x)f(x^2-y)=\begin{cases}x(x^2-y),&-1\leqslant x^2-y\leqslant2,-1\leqslant x\leqslant2\\0,&\text{其它}\end{cases}$，原式 $=\displaystyle\int_{-1}^2dx\int_{x^2-2}^{x^2+1}x(x^2-y)dy=\dfrac94$。

【例12】计算 $\displaystyle\iint_D|x^2+y^2-2y|d\sigma$，$D:x^2+y^2\leqslant4$。
【解】原式 $=\displaystyle\iint_D(x^2+y^2-2y)d\sigma+2\iint_{D_1}(2y-x^2-y^2)d\sigma=\int_0^{2\pi}d\theta\int_0^2\rho^3d\rho+2\int_0^\pi d\theta\int_0^{2\sin\theta}(2\rho\sin\theta-\rho^2)\rho\,d\rho=9\pi$。

【例13】计算 $\displaystyle\iint_D\min\{x,y\}e^{-(x^2+y^2)}d\sigma$，$D$ 为全平面。` },
      { p: 181, md: R`【解】原式 $=\displaystyle\iint_{D_1=\{x\leqslant y\}}xe^{-(x^2+y^2)}d\sigma+\iint_{D_2=\{x\geqslant y\}}ye^{-(x^2+y^2)}d\sigma=2\int_{-\infty}^{+\infty}dy\int_{-\infty}^yxe^{-x^2}e^{-y^2}dx=-\int_{-\infty}^{+\infty}e^{-2y^2}dy=-\sqrt{\dfrac\pi2}$。
【注】$\displaystyle\int_{-\infty}^{+\infty}e^{-t^2}dt=\sqrt\pi$（概率论常用结论）。

【例14】设 $f(x)$ 在 $[0,1]$ 上连续，$\displaystyle\int_0^1f(x)dx=A$，求 $\displaystyle\int_0^1dx\int_x^1f(x)f(y)dy$。
【解】由 $x$ 与 $y$ 对称，原式 $=\displaystyle\int_0^1dy\int_y^1f(y)f(x)dx$，故 $2\times$原式 $=\displaystyle\iint_{0\leqslant x,y\leqslant1}f(x)f(y)dxdy=A^2$，原式 $=\dfrac{A^2}2$。

### 题型二　累次积分交换次序及计算
【例1】交换下列累次积分次序：(1) $I=\displaystyle\int_0^1dy\int_{\sqrt y}^{\sqrt{2-y^2}}f(x,y)dx$；(2) $I=\displaystyle\int_0^1dx\int_0^{\sqrt{2x-x^2}}f\,dy+\int_1^2dx\int_0^{2-x}f\,dy$；(3) $I=\displaystyle\int_0^2dx\int_{x^2}^xf\,dy$。
【解】先画域再重定限：(1) $I=\displaystyle\int_0^1dx\int_0^{x^2}f\,dy+\int_1^{\sqrt2}dx\int_0^{\sqrt{2-x^2}}f\,dy$；(2) $I=\displaystyle\int_0^1dy\int_{1-\sqrt{1-y^2}}^{2-y}f\,dx$；(3) $I=\displaystyle\int_0^1dy\int_y^{\sqrt y}f\,dx-\int_1^2dy\int_{\sqrt y}^yf\,dx-\int_2^4dy\int_{\sqrt y}^2f\,dx$。` },
      { p: 182, md: R`【例2】交换 $I=\displaystyle\int_{-\frac\pi4}^{\frac\pi2}d\theta\int_0^{2a\cos\theta}f(\rho\cos\theta,\rho\sin\theta)\rho\,d\rho$ 的次序 $(a>0)$。
【解】$\rho=2a\cos\theta$ 是圆 $x^2+y^2=2ax$，则 $I=\displaystyle\int_0^{\sqrt2a}d\rho\int_{-\frac\pi4}^{\arccos\frac\rho{2a}}f\rho\,d\theta+\int_{\sqrt2a}^{2a}d\rho\int_{-\arccos\frac\rho{2a}}^{\arccos\frac\rho{2a}}f\rho\,d\theta$。

【例3】$\displaystyle\int_0^{\frac\pi2}d\theta\int_0^{\cos\theta}f(\rho\cos\theta,\rho\sin\theta)\rho\,d\rho$ 可写成 (A) $\int_0^1dy\int_0^{\sqrt{y-y^2}}f\,dx$ (B) $\int_0^1dy\int_0^{\sqrt{1-y^2}}f\,dx$ (C) $\int_0^1dx\int_0^1f\,dy$ (D) $\int_0^1dx\int_0^{\sqrt{x-x^2}}f\,dy$。选 (D)。

【例4】计算：1) $\displaystyle\int_0^2dx\int_x^2e^{-y^2}dy$；2) $\displaystyle\int_1^2dx\int_{\sqrt x}^x\sin\dfrac{\pi x}{2y}dy+\int_2^4dx\int_{\sqrt x}^2\sin\dfrac{\pi x}{2y}dy$；3) $\displaystyle\int_0^adx\int_{-x}^{-a+\sqrt{a^2-x^2}}\dfrac{1}{\sqrt{4a^2-(x^2+y^2)}}dy\ (a>0)$。
【解】1) 交换次序 $=\displaystyle\int_0^2dy\int_0^ye^{-y^2}dx=\int_0^2ye^{-y^2}dy=\dfrac12(1-e^{-4})$。
2) 原式 $=\displaystyle\int_1^2dy\int_y^{y^2}\sin\dfrac{\pi x}{2y}dx=\dfrac4{\pi^2}+\dfrac8{\pi^3}$。
3) 化为极坐标 $\displaystyle=\int_{-\frac\pi4}^0d\theta\int_0^{-2a\sin\theta}\dfrac{\rho}{\sqrt{4a^2-\rho^2}}d\rho$` },
      { p: 183, md: R`$=\dfrac{\pi-2\sqrt2}2a$。

【例5】设 $f(x)$ 连续，证明 $\displaystyle\iint_Df(x-y)dxdy=\int_{-A}^Af(t)(A-|t|)dt$，$D:|x|\leqslant\dfrac A2,|y|\leqslant\dfrac A2$。
【证】令 $x-y=u$，$\displaystyle\int_{-\frac A2}^{\frac A2}f(x-y)dy=\int_{x-\frac A2}^{x+\frac A2}f(u)du$，交换积分次序得 $\displaystyle\iint_Df(x-y)dxdy=\int_{-A}^0f(u)(A+u)du+\int_0^Af(u)(A-u)du=\int_{-A}^Af(u)(A-|u|)du$。

### 题型三　与二重积分有关的综合题
【例1】设 $f$ 连续，$F(t)=\displaystyle\int_1^tdy\int_y^tf(x)dx$，则 $F'(2)=$ (A) $2f(2)$ (B) $f(2)$ (C) $-f(2)$ (D) $0$
【解】交换次序 $F(t)=\displaystyle\int_1^t(x-1)f(x)dx$，$F'(t)=(t-1)f(t)$，$F'(2)=f(2)$。选 (B)。

【例2】设 $D$ 由 $x^2+y^2\leqslant y$ 和 $x\geqslant0$ 确定，$f$ 连续，且 $f(x,y)=\sqrt{1-x^2-y^2}-\dfrac8\pi\displaystyle\iint_Df(u,v)dudv$，求 $f$。
【解1】令 $\iint_Df=A$，则 $f=\sqrt{1-x^2-y^2}-\dfrac8\pi A$，` },
      { p: 184, md: R`代入得 $\displaystyle\iint_D\sqrt{1-x^2-y^2}dxdy-A=A$，$A=\dfrac12\displaystyle\iint_D\sqrt{1-x^2-y^2}dxdy=\dfrac12\int_0^{\frac\pi2}d\theta\int_0^{\sin\theta}\sqrt{1-\rho^2}\rho\,d\rho=\dfrac16\left(\dfrac\pi2-\dfrac23\right)$，故 $f=\sqrt{1-x^2-y^2}-\dfrac4{3\pi}\left(\dfrac\pi2-\dfrac23\right)$。
【解2】两端在 $D$ 上积分得 $\iint_Df=\iint_D\sqrt{1-x^2-y^2}-\iint_Df$，故 $\iint_Df=\dfrac12\iint_D\sqrt{1-x^2-y^2}=\dfrac16\left(\dfrac\pi2-\dfrac23\right)$。

【例3】设 $f(t)$ 在 $[0,+\infty)$ 连续，且 $f(t)=e^{4\pi t^2}+\displaystyle\iint_{x^2+y^2\leqslant4t^2}f\left(\dfrac12\sqrt{x^2+y^2}\right)dxdy$，求 $f(t)$。
【解】$f(0)=1$；极坐标化得 $f(t)=e^{4\pi t^2}+2\pi\displaystyle\int_0^{2t}\rho f\left(\dfrac12\rho\right)d\rho$，求导 $f'(t)=8\pi te^{4\pi t^2}+8\pi tf(t)$，解得 $f(t)=(4\pi t^2+C)e^{4\pi t^2}$，由 $f(0)=1$ 得 $f(t)=(4\pi t^2+1)e^{4\pi t^2}$。

【例4】设 $f(x,y)$ 在 $0\leqslant x,y\leqslant1$ 上连续，$f(0,0)=-1$，求 $\lim\limits_{x\to0^+}\dfrac{\int_0^{x^2}dt\int_x^{\sqrt t}f(t,u)du}{1-e^{-x^3}}$。
【解1】交换次序并利用 $1-e^{-x^3}\sim x^3$，原式 $=\displaystyle-\lim_{x\to0^+}\dfrac{\int_0^{x^2}f(t,x)dt}{3x^2}$` },
      { p: 185, md: R`$=-\dfrac13f(0,0)=\dfrac13$。
【解2】由二重积分中值定理，$\displaystyle\int_0^{x^2}dt\int_x^{\sqrt t}f\,du=-f(\xi,\eta)S$，$S=\displaystyle\int_0^{x^2}(x-\sqrt t)dt=\dfrac13x^3$，故极限 $=-\dfrac{f(0,0)}3=\dfrac13$。

【例5】设 $f$ 在单位圆上有连续一阶偏导数，边界取值为零，证明 $f(0,0)=\lim\limits_{\varepsilon\to0^+}\dfrac{-1}{2\pi}\displaystyle\iint_D\dfrac{xf'_x+yf'_y}{x^2+y^2}dxdy$（$D:\varepsilon^2\leqslant x^2+y^2\leqslant1$）。
【证】极坐标化：$\displaystyle\iint_D\dfrac{xf'_x+yf'_y}{x^2+y^2}dxdy=\int_0^{2\pi}d\theta\int_\varepsilon^1[\cos\theta f'_x+\sin\theta f'_y]d\rho=\int_0^{2\pi}f(\rho\cos\theta,\rho\sin\theta)\Big|_\varepsilon^1d\theta=-\int_0^{2\pi}f(\varepsilon\cos\theta,\varepsilon\sin\theta)d\theta=-2\pi f(\varepsilon\cos\bar\theta,\varepsilon\sin\bar\theta)$，故 $\lim\limits_{\varepsilon\to0^+}\dfrac{-1}{2\pi}\iint_D\cdots=f(0,0)$。

【例6】设 $f(x,y)$ 在 $D=\{0\leqslant x,y\leqslant1\}$ 上有二阶连续偏导数，边界取零，且 $|f''_{xy}|\leqslant M$，试证 $\left|\displaystyle\iint_Df\,dxdy\right|\leqslant\dfrac M4$。
【证1】由边界取零，分部积分得 $\displaystyle\iint_Df\,dxdy=-\iint_Dy(1-x)f''_{xy}dxdy$。` },
      { p: 186, md: R`故 $\left|\displaystyle\iint_Df\,dxdy\right|\leqslant\iint_D|xyf''_{xy}|dxdy\leqslant M\iint_Dxy\,dxdy=\dfrac M4$。
【证2】由拉格朗日中值定理 $f(x,y)=f(x,y)-f(0,y)=xf'_x(\xi,y)=x[f'_x(\xi,y)-f'_x(\xi,0)]=xyf''_{xy}(\xi,\eta)$。

### 题型四　与二重积分有关的积分不等式问题
【例1】设 $I_1=\displaystyle\iint_D\cos\sqrt{x^2+y^2}d\sigma,I_2=\iint_D\cos(x^2+y^2)d\sigma,I_3=\iint_D\cos(x^2+y^2)^2d\sigma$，$D:x^2+y^2\leqslant1$，则 (A) $I_3>I_2>I_1$ (B) $I_1>I_2>I_3$ (C) $I_2>I_1>I_3$ (D) $I_3>I_1>I_2$
【解】当 $0\leqslant x\leqslant\dfrac\pi2$ 时 $\cos x$ 递减，而 $\sqrt{x^2+y^2}\geqslant x^2+y^2\geqslant(x^2+y^2)^2$，故 $I_1<I_2<I_3$。选 (A)。

【例2】设 $I_1=\displaystyle\iint_{x^2+y^2\leqslant1}(x^2+y^2)d\sigma,I_2=\iint_{|x|+|y|\leqslant1}2|xy|d\sigma,I_3=\iint_{|x|+|y|\leqslant1}(x^2+y^2)d\sigma$，则 (A) $I_1<I_2<I_3$ (B) $I_2<I_3<I_1$ (C) $I_3<I_1<I_2$ (D) $I_3<I_2<I_1$
【解】$I_1$ 域包含 $I_3$ 域且被积函数相同非负，故 $I_1>I_3$；$I_2,I_3$ 域相同而 $x^2+y^2\geqslant2|xy|$，故 $I_3>I_2$。从而 $I_1>I_3>I_2$。选 (B)。

【例3】设 $f(x)$ 在 $[a,b]$ 上连续且 $f(x)>0$，证明 $\displaystyle\int_a^bf(x)dx\int_a^b\dfrac{1}{f(x)}dx\geqslant(b-a)^2$。
【证1】记 $D=\{a\leqslant x,y\leqslant b\}$，则左端 $=\displaystyle\iint_D\dfrac{f(x)}{f(y)}dxdy$，由 $D$ 关于 $y=x$ 对称，$=\dfrac12\iint_D\left[\dfrac{f(x)}{f(y)}+\dfrac{f(y)}{f(x)}\right]dxdy=\iint_D\dfrac{f^2(x)+f^2(y)}{2f(x)f(y)}dxdy\geqslant\iint_D1\,dxdy=(b-a)^2$。` }
    ],
    quiz: [
      { q: R`二重积分 $\iint_Df(x,y)d\sigma$ 的值取决于`, options: [R`积分域与被积函数`, R`积分变量记号`, R`分法`, R`取点方式`], answer: 0, explain: R`二重积分是数，与记号、分法无关。` },
      { q: R`当 $f(x,y)\geqslant0$ 时，$\iint_Df\,d\sigma$ 的几何意义是`, options: [R`曲顶柱体体积`, R`平面图形面积`, R`曲线弧长`, R`旋转体侧面积`], answer: 0, explain: R`以 $D$ 为底、$z=f$ 为曲顶的体积。` },
      { q: R`适合用极坐标计算的被积函数是`, options: [R`$f(\sqrt{x^2+y^2})$`, R`$f(x+y)$`, R`$f(xy)$`, R`$f(x^2-y^2)$`], answer: 0, explain: R`含 $x^2+y^2$ 的形式适合极坐标。` },
      { q: R`若积分域 $D$ 关于 $y$ 轴对称，$f(-x,y)=-f(x,y)$，则 $\iint_Df\,d\sigma=$`, options: [R`$0$`, R`$2\iint_{D_{x\geqslant0}}f$`, R`$\iint_{D_{x\geqslant0}}f$`, R`$4\iint_{D_{x\geqslant0}}f$`], answer: 0, explain: R`关于 $x$ 为奇函数，积分为零。` },
      { q: R`变量对称性指`, options: [R`对调被积函数与积分域中的 $x,y$，积分值不变`, R`积分值变为相反数`, R`积分值加倍`, R`积分值减半`], answer: 0, explain: R`$\iint_{D_{(x,y)}}f(x,y)d\sigma=\iint_{D_{(y,x)}}f(y,x)d\sigma$。` },
      { q: R`若 $D$ 关于直线 $y=x$ 对称，则`, options: [R`$\iint_Df(x,y)d\sigma=\iint_Df(y,x)d\sigma$`, R`$\iint_Df(x,y)d\sigma=0$`, R`$\iint_Df(x,y)d\sigma=2\iint_Df$`, R`无关系`], answer: 0, explain: R`关于 $y=x$ 对称可对调 $x,y$。` },
      { q: R`积分中值定理：$f$ 在 $D$ 上连续，则 $\iint_Df\,d\sigma=$`, options: [R`$f(\xi,\eta)S$`, R`$f(0,0)S$`, R`$\bar xS$`, R`$MS$`], answer: 0, explain: R`其中 $S$ 为 $D$ 的面积。` },
      { q: R`交换累次积分次序时，第一步应`, options: [R`画出积分域`, R`求导`, R`用洛必达法则`, R`取极坐标`], answer: 0, explain: R`先画域，再按另一次序重新定限。` },
      { q: R`$\displaystyle\int_0^1dy\int_{\sqrt y}^{\sqrt{2-y^2}}f\,dx$ 交换次序后为`, options: [R`$\displaystyle\int_0^1dx\int_0^{x^2}f\,dy+\int_1^{\sqrt2}dx\int_0^{\sqrt{2-x^2}}f\,dy$`, R`$\displaystyle\int_0^1dx\int_0^{x}f\,dy$`, R`$\displaystyle\int_0^{\sqrt2}dx\int_0^{x^2}f\,dy$`, R`$\displaystyle\int_0^1dx\int_{x^2}^{2-x^2}f\,dy$`], answer: 0, explain: R`画域后重新定限。` },
      { q: R`若 $f>0$ 连续，则 $\displaystyle\int_a^bf(x)dx\int_a^b\frac1{f(x)}dx$`, options: [R`$\geqslant(b-a)^2$`, R`$\leqslant(b-a)^2$`, R`$=(b-a)^2$`, R`$=0$`], answer: 0, explain: R`由对称性与均值不等式得证。` }
    ]
  };
})();
