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
      { p: 174, md: R`## 一、考试内容要点精讲
### （一）二重积分的概念
**定义** 设函数 $z=f(x,y)$ 在有界闭区域 $D$ 上有界，将 $D$ 任意分成 $n$ 个小闭区域 $\Delta\sigma_1,\Delta\sigma_2,\cdots,\Delta\sigma_n$，其中 $\Delta\sigma_i$ 表示第 $i$ 个小区域，也表示它的面积。在每个 $\Delta\sigma_i$ 上任取一点 $(\xi_i,\eta_i)$，作乘积 $f(\xi_i,\eta_i)\Delta\sigma_i$，并求和 $\sum\limits_{i=1}^nf(\xi_i,\eta_i)\Delta\sigma_i$。记 $\lambda$ 为 $n$ 个小区域中的最大直径，如果 $\lim\limits_{\lambda\to0}\sum\limits_{i=1}^nf(\xi_i,\eta_i)\Delta\sigma_i$ 存在，则称此极限值为函数 $f(x,y)$ 在区域 $D$ 上的二重积分，记为
$$\iint_Df(x,y)d\sigma=\lim_{\lambda\to0}\sum_{i=1}^nf(\xi_i,\eta_i)\Delta\sigma_i.$$

### （二）二重积分的几何意义
二重积分 $\iint_Df(x,y)d\sigma$ 是一个数。当 $f(x,y)\geqslant0$ 时，其值等于以积分域 $D$ 为底，以曲面 $z=f(x,y)$ 为曲顶的曲顶柱体的体积。

### （三）二重积分的性质
1. 不等式性质：(1) 若在 $D$ 上 $f(x,y)\leqslant g(x,y)$，则 $\iint_Df(x,y)d\sigma\leqslant\iint_Dg(x,y)d\sigma$；(2) 若 $f(x,y)$ 在 $D$ 上连续，则 $mS\leqslant\iint_Df(x,y)d\sigma\leqslant MS$，其中 $m$ 和 $M$ 分别为 $f(x,y)$ 在 $D$ 上的最小值和最大值，$S$ 为积分域 $D$ 的面积；(3) $\left|\iint_Df(x,y)d\sigma\right|\leqslant\iint_D|f(x,y)|d\sigma$。
2. 积分中值定理：若 $f(x,y)$ 在 $D$ 上连续，则 $\iint_Df(x,y)d\sigma=f(\xi,\eta)S$，其中 $(\xi,\eta)\in D$，$S$ 为积分域 $D$ 的面积。` },
      { p: 175, md: R`### （四）二重积分的计算
1. 利用直角坐标计算
1) 先 $y$ 后 $x$：若积分域 $D$ 是 $X$ 型区域，即 $D$ 可用不等式 $y_1(x)\leqslant y\leqslant y_2(x)$，$a\leqslant x\leqslant b$ 来表示，则
$$\iint_Df(x,y)d\sigma=\int_a^bdx\int_{y_1(x)}^{y_2(x)}f(x,y)dy.$$
![X 型域](assets/img/figs/gaoshu/gs06-p175-1.jpg)
2) 先 $x$ 后 $y$：若积分域 $D$ 是 $Y$ 型区域，即 $D$ 可用不等式 $x_1(y)\leqslant x\leqslant x_2(y)$，$c\leqslant y\leqslant d$ 来表示，则
$$\iint_Df(x,y)d\sigma=\int_c^ddy\int_{x_1(y)}^{x_2(y)}f(x,y)dx.$$
![Y 型域](assets/img/figs/gaoshu/gs06-p175-2.jpg)

2. 利用极坐标计算：若积分域 $D$ 可以用不等式 $\rho_1(\theta)\leqslant\rho\leqslant\rho_2(\theta)$，$\alpha\leqslant\theta\leqslant\beta$ 来表示，则
$$\iint_Df(x,y)d\sigma=\int_\alpha^\beta d\theta\int_{\rho_1(\theta)}^{\rho_2(\theta)}f(\rho\cos\theta,\rho\sin\theta)\rho d\rho.$$
![极坐标域](assets/img/figs/gaoshu/gs06-p175-3.jpg)
【注】适合用极坐标计算的二重积分的特征：① 适合用极坐标计算的被积函数：$f\left(\sqrt{x^2+y^2}\right),f\left(\dfrac yx\right),f\left(\dfrac xy\right)$；② 适合用极坐标的积分域：如 $x^2+y^2\leqslant R^2$；$r^2\leqslant x^2+y^2\leqslant R^2$；$x^2+y^2\leqslant2ax$；$x^2+y^2\leqslant2by$。

3. 利用对称性和奇偶性计算
1) 若积分域 $D$ 关于 $y$ 轴对称，$f(x,y)$ 关于 $x$ 有奇偶性，则 $\iint_Df(x,y)d\sigma=\begin{cases}2\iint_{D_{x\geqslant0}}f(x,y)d\sigma,&f(-x,y)=f(x,y)\\0,&f(-x,y)=-f(x,y)\end{cases}$；
2) 若积分域关于 $x$ 轴对称，$f(x,y)$ 关于 $y$ 有奇偶性，则 $\iint_Df(x,y)d\sigma=\begin{cases}2\iint_{D_{y\geqslant0}}f(x,y)d\sigma,&f(x,-y)=f(x,y)\\0,&f(x,-y)=-f(x,y)\end{cases}$。

4. 利用变量对称性计算：二重积分 $\iint_Df(x,y)d\sigma$ 的积分域 $D$ 是点 $(x,y)$ 的集合，记为 $D_{(x,y)}$，类似一元定积分的值与积分变量用什么记号无关，则 $\iint_{D_{(x,y)}}f(x,y)d\sigma=\iint_{D_{(y,x)}}f(y,x)d\sigma$，` },
      { p: 176, md: R`即把二重积分的被积函数 $f(x,y)$ 及积分域 $D_{(x,y)}$ 中的 $x$ 和 $y$ 对调，积分值不变。例如
$$\iint_{x^2+2y^2\leqslant1}(3x+4y)d\sigma=\iint_{y^2+2x^2\leqslant1}(3y+4x)d\sigma.$$
如果积分域 $D$ 关于直线 $y=x$ 对称，即 $(x,y)\in D\Leftrightarrow(y,x)\in D$，此时 $D_{(x,y)}=D_{(y,x)}$，则 $\iint_Df(x,y)d\sigma=\iint_Df(y,x)d\sigma$，即当积分域 $D$ 关于直线 $y=x$ 对称时，将被积函数 $f(x,y)$ 中的 $x$ 和 $y$ 对调，积分值不变。
![关于 $y=x$ 对称的域](assets/img/figs/gaoshu/gs06-p176-1.jpg)

## 二、常考题型的方法与技巧
### 题型一　计算二重积分
【例1】计算 $\displaystyle\iint_D\left[|xy|+\sin(xy^2)\right]d\sigma$，其中 $D$ 由曲线 $|x|+|y|=1$ 所围成。
【解】由奇偶性知
$$\text{原式}=\iint_D|xy|d\sigma=4\iint_{D_1}xy\,d\sigma\quad(\text{其中 }D_1\text{ 为 }D\text{ 在第一象限的部分})=4\int_0^1dx\int_0^{1-x}xy\,dy=\dfrac16.$$
![菱形域 $|x|+|y|=1$](assets/img/figs/gaoshu/gs06-p176-2.jpg)

【例2】设区域 $D$ 为 $x^2+y^2\leqslant R^2$，则 $\displaystyle\iint_D\left(\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}\right)d\sigma=$______。
【解1】$\displaystyle\iint_D\left(\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}\right)d\sigma=\int_0^{2\pi}d\theta\int_0^R\left(\dfrac{\cos^2\theta}{a^2}+\dfrac{\sin^2\theta}{b^2}\right)\rho^3d\rho=\dfrac{\pi R^4}{4}\left(\dfrac{1}{a^2}+\dfrac{1}{b^2}\right)$。
【解2】由于积分域 $D:x^2+y^2\leqslant R^2$ 关于直线 $y=x$ 对称，则 $\iint_D\left(\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}\right)d\sigma=\iint_D\left(\dfrac{y^2}{a^2}+\dfrac{x^2}{b^2}\right)d\sigma$。从而有
$$\iint_D\left(\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}\right)d\sigma=\dfrac12\iint_D\left[\left(\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}\right)+\left(\dfrac{y^2}{a^2}+\dfrac{x^2}{b^2}\right)\right]d\sigma=\dfrac12\left(\dfrac{1}{a^2}+\dfrac{1}{b^2}\right)\iint_D(x^2+y^2)d\sigma=\dfrac12\left(\dfrac{1}{a^2}+\dfrac{1}{b^2}\right)\int_0^{2\pi}d\theta\int_0^R\rho^3d\rho=\dfrac{\pi R^4}{4}\left(\dfrac{1}{a^2}+\dfrac{1}{b^2}\right).$$

【例3】设区域 $D=\{(x,y)\mid x^2+y^2\leqslant4,x\geqslant0,y\geqslant0\}$，$f(x)$ 为 $D$ 上正值连续函数，$a,b$ 为常数，则 $\displaystyle\iint_D\dfrac{a\sqrt{f(x)}+b\sqrt{f(y)}}{\sqrt{f(x)}+\sqrt{f(y)}}d\sigma=$______。(A) $ab\pi$ (B) $\dfrac{ab}{2}\pi$ (C) $(a+b)\pi$ (D) $\dfrac{a+b}{2}\pi$
【解1】（直接法）由于积分域 $D$ 关于直线 $y=x$ 对称，则` },
      { p: 177, md: R`$$\iint_D\dfrac{a\sqrt{f(x)}+b\sqrt{f(y)}}{\sqrt{f(x)}+\sqrt{f(y)}}d\sigma=\iint_D\dfrac{a\sqrt{f(y)}+b\sqrt{f(x)}}{\sqrt{f(y)}+\sqrt{f(x)}}d\sigma.$$
$$\text{原式}=\dfrac12\left[\iint_D\dfrac{a\sqrt{f(x)}+b\sqrt{f(y)}}{\sqrt{f(x)}+\sqrt{f(y)}}d\sigma+\iint_D\dfrac{a\sqrt{f(y)}+b\sqrt{f(x)}}{\sqrt{f(y)}+\sqrt{f(x)}}d\sigma\right]=\dfrac12\iint_D(a+b)d\sigma=\dfrac{a+b}{2}\pi.$$
故应选 (D)。
【解2】（排除法）取 $f(x)\equiv1$，显然符合题设条件，而 $\iint_D\dfrac{a\sqrt{f(x)}+b\sqrt{f(y)}}{\sqrt{f(x)}+\sqrt{f(y)}}d\sigma=\dfrac12\iint_D(a+b)d\sigma=\dfrac{a+b}{2}\pi$。显然 (A)、(B)、(C) 均不正确，故应选 (D)。

【例4】计算 $\displaystyle\iint_Dx\left[1+yf(x^2+y^2)\right]d\sigma$，其中 $D$ 是由 $y=x^3$，$y=1$，$x=-1$ 围成的区域，$f(u)$ 为连续函数。
【解】原式 $=\displaystyle\iint_Dx\,dxdy+\iint_Dxyf(x^2+y^2)dxdy$。作曲线 $y=-x^3$ 将原积分域分为两个区域 $D_1$ 和 $D_2$，则 $\iint_Dxyf(x^2+y^2)dxdy=\iint_{D_1}xyf(x^2+y^2)dxdy+\iint_{D_2}xyf(x^2+y^2)dxdy=0$（利用奇偶性），$\iint_Dx\,dxdy=\int_{-1}^1dx\int_{x^3}^1x\,dy=-\dfrac25$。故原式 $=-\dfrac25$。
![例4 积分域](assets/img/figs/gaoshu/gs06-p177-1.jpg)

【例5】计算积分 $\displaystyle\iint_D\dfrac{\sin y}{y}d\sigma$，其中 $D$ 由 $y=\sqrt x$ 和 $y=x$ 围成。
【解】$\displaystyle\iint_D\dfrac{\sin y}{y}dxdy=\int_0^1dy\int_{y^2}^y\dfrac{\sin y}{y}dx=\int_0^1(\sin y-y\sin y)dy=1-\sin1$。
![例5 积分域](assets/img/figs/gaoshu/gs06-p177-2.jpg)

【例6】计算 $\displaystyle\iint_D\sqrt{x^2+y^2}dxdy$，其中 $D$ 由曲线 $x^2+y^2=2ay\ (a>0)$ 所围成。
【解】$\displaystyle\iint_D\sqrt{x^2+y^2}dxdy=\int_0^\pi d\theta\int_0^{2a\sin\theta}\rho^2d\rho=\dfrac{8a^3}{3}\int_0^\pi\sin^3\theta d\theta=\dfrac{8a^3}{3}\left(\dfrac{\cos^3\theta}{3}-\cos\theta\right)\bigg|_0^\pi=\dfrac{32}{9}a^3$。
![例6 积分域 $x^2+y^2=2ay$](assets/img/figs/gaoshu/gs06-p177-3.jpg)

【例7】计算 $\displaystyle\iint_D(x+y)d\sigma$，其中 $D$ 由 $x^2+y^2\leqslant x+y$ 所确定。
【解1】圆 $x^2+y^2=x+y$ 在极坐标下方程为 $\rho=\cos\theta+\sin\theta$，则` },
      { p: 178, md: R`$$\iint_D(x+y)d\sigma=\int_{-\frac\pi4}^{\frac{3\pi}4}d\theta\int_0^{\cos\theta+\sin\theta}(\cos\theta+\sin\theta)\rho^2d\rho=\dfrac13\int_{-\frac\pi4}^{\frac{3\pi}4}(\cos\theta+\sin\theta)^3d\theta=\dfrac43\int_{-\frac\pi4}^{\frac{3\pi}4}\sin^4\left(\theta+\dfrac\pi4\right)d\theta$$
$$\xrightarrow{\theta+\frac\pi4=t}\dfrac43\int_0^\pi\sin^4tdt=\dfrac83\int_0^{\frac\pi2}\sin^4tdt=\dfrac83\times\dfrac34\times\dfrac12\times\dfrac\pi2=\dfrac\pi2.$$
【解2】令 $\begin{cases}x-\dfrac12=\rho\cos\theta\\y-\dfrac12=\rho\sin\theta\end{cases}$，此时 $d\sigma=\rho d\rho d\theta$，则
$$\iint_D(x+y)d\sigma=\int_0^{2\pi}d\theta\int_0^{\frac{1}{\sqrt2}}(\rho\cos\theta+\rho\sin\theta+1)\rho d\rho=\int_0^{2\pi}d\theta\int_0^{\frac{1}{\sqrt2}}\rho d\rho=2\pi\times\dfrac14=\dfrac\pi2.$$
注意：$\displaystyle\int_0^{2\pi}\cos\theta d\theta=\int_0^{2\pi}\sin\theta d\theta=0$。
【解3】由于 $\displaystyle\iint_D(x+y)d\sigma=\iint_D\left[\left(x-\dfrac12\right)+\left(y-\dfrac12\right)+1\right]d\sigma$，而 $\iint_D\left(x-\dfrac12\right)d\sigma=\iint_D\left(y-\dfrac12\right)d\sigma=0$（利用奇偶性），则 $\iint_D(x+y)d\sigma=\iint_Dd\sigma=\dfrac\pi2$（积分域面积）。
【解4】由对称性知 $\iint_D(x+y)d\sigma=2\iint_Dx\,d\sigma=2\bar xS$，其中 $\bar x$ 为积分域 $D$ 的形心的 $x$ 坐标，应为 $\bar x=\dfrac12$，$S$ 为积分域 $D$ 的面积，应为 $S=\dfrac\pi2$，则 $\iint_D(x+y)d\sigma=\dfrac\pi2$。
![例7 积分域](assets/img/figs/gaoshu/gs06-p178-1.jpg)

【例8】计算二重积分 $\displaystyle\iint_Dy\,dxdy$，其中 $D$ 是由直线 $x=-2$，$y=0$，$y=2$ 以及曲线 $x=-\sqrt{2y-y^2}$ 所围成的平面区域。
【解1】在直角坐标下化为累次积分计算
$$\iint_Dy\,dxdy=\int_0^2dy\int_{-2}^{-\sqrt{2y-y^2}}y\,dx=\int_0^2y\left[2-\sqrt{2y-y^2}\right]dy=2\int_0^2y\,dy-\int_0^2y\sqrt{2y-y^2}dy=4-\int_0^2y\sqrt{1-(y-1)^2}dy\quad(\text{令}y-1=\sin t)$$
![例8 积分域](assets/img/figs/gaoshu/gs06-p178-2.jpg)` },
      { p: 179, md: R`$$=4-\int_{-\frac\pi2}^{\frac\pi2}(1+\sin t)\cos^2tdt=4-\dfrac\pi2.$$
事实上，计算 $\displaystyle\int_0^2y\sqrt{1-(y-1)^2}dy$ 还有一种巧妙的方法：
$$\int_0^2y\sqrt{1-(y-1)^2}dy=\int_0^2(y-1)\sqrt{1-(y-1)^2}dy+\int_0^2\sqrt{1-(y-1)^2}dy,\quad\int_0^2(y-1)\sqrt{1-(y-1)^2}dy=0.$$
而 $\displaystyle\int_0^2\sqrt{1-(y-1)^2}dy$ 应等于半圆的面积 $\dfrac\pi2$，故 $\displaystyle\int_0^2y\sqrt{1-(y-1)^2}dy=\dfrac\pi2$。
【解2】$\displaystyle\iint_Dy\,d\sigma=\iint_{D+D_1}y\,d\sigma-\iint_{D_1}y\,d\sigma=\int_{-2}^0dx\int_0^2y\,dy-\int_{\frac\pi2}^\pi d\theta\int_0^{2\sin\theta}\rho^2\sin\theta d\rho=4-\dfrac83\int_{\frac\pi2}^\pi\sin^4\theta d\theta=4-\dfrac83\int_0^{\frac\pi2}\sin^4\theta d\theta=4-\dfrac83\times\dfrac34\times\dfrac12\times\dfrac\pi2=4-\dfrac\pi2$。
【解3】由于积分域 $D$ 关于直线 $y=1$ 上下对称，则 $\iint_D(y-1)d\sigma=0$，故 $\iint_Dy\,d\sigma=\iint_D\left[(y-1)+1\right]d\sigma=\iint_Dd\sigma=4-\dfrac\pi2$。
【解4】由形心计算公式知 $\iint_Dy\,d\sigma=\bar yS$。由于积分域 $D$ 关于 $y=1$ 对称，则 $\bar y=1$，而 $S=4-\dfrac\pi2$，故 $\iint_Dy\,d\sigma=4-\dfrac\pi2$。

【例9】设二元函数 $f(x,y)=\begin{cases}x^2,&|x|+|y|\leqslant1\\\dfrac{1}{\sqrt{x^2+y^2}},&1<|x|+|y|\leqslant2\end{cases}$，计算二重积分 $\displaystyle\iint_Df(x,y)d\sigma$，其中 $D=\{(x,y)\mid|x|+|y|\leqslant2\}$。
【解】原式 $=\displaystyle4\int_0^1dx\int_0^{1-x}x^2dy+4\int_0^{\frac\pi2}d\theta\int_{\frac{1}{\sin\theta+\cos\theta}}^{\frac{2}{\sin\theta+\cos\theta}}d\rho=\dfrac13+4\int_0^{\frac\pi2}\dfrac{d\theta}{\sin\theta+\cos\theta}=\dfrac13+\dfrac{4}{\sqrt2}\int_0^{\frac\pi2}\dfrac{d\theta}{\sin\left(\theta+\frac\pi4\right)}$
$$=\dfrac13-\dfrac{4}{\sqrt2}\ln\left|\csc\left(\theta+\dfrac\pi4\right)+\cot\left(\theta+\dfrac\pi4\right)\right|\bigg|_0^{\frac\pi2}$$
![例9 积分域](assets/img/figs/gaoshu/gs06-p179-1.jpg)` },
      { p: 180, md: R`$$=\dfrac13+4\sqrt2\ln(\sqrt2+1).$$

【例10】计算 $\displaystyle\iint_Dy^2d\sigma$，其中 $D$ 由 $\begin{cases}x=a(t-\sin t)\\y=a(1-\cos t)\end{cases}(0\leqslant t\leqslant2\pi)$ 与 $y=0$ 围成。
【解】$\displaystyle\iint_Dy^2d\sigma=\int_0^{2\pi a}dx\int_0^{y(x)}y^2dy=\dfrac13\int_0^{2\pi a}y^3(x)dx=\dfrac13\int_0^{2\pi}a^3(1-\cos t)^3a(1-\cos t)dt$
$$=\dfrac{16a^4}{3}\int_0^{2\pi}\sin^8\dfrac t2dt\xrightarrow[\text{令 }\frac t2=u]{}\dfrac{32a^4}{3}\int_0^\pi\sin^8u\,du=\dfrac{64a^4}{3}\int_0^{\frac\pi2}\sin^8u\,du=\dfrac{64a^4}{3}\times\dfrac78\times\dfrac56\times\dfrac34\times\dfrac12\times\dfrac\pi2=\dfrac{35}{12}\pi a^4.$$
![例10 摆线拱形域](assets/img/figs/gaoshu/gs06-p180-1.jpg)

【例11】设 $D$ 是全平面，$f(x)=\begin{cases}x,&-1\leqslant x\leqslant2\\0,&\text{其它}\end{cases}$，计算 $\displaystyle\iint_Df(x)f(x^2-y)d\sigma$。
【解】由题设知 $f(x^2-y)=\begin{cases}x^2-y,&-1\leqslant x^2-y\leqslant2\\0,&\text{其它}\end{cases}$，则 $f(x)f(x^2-y)=\begin{cases}x(x^2-y),&-1\leqslant x^2-y\leqslant2,-1\leqslant x\leqslant2\\0,&\text{其它}\end{cases}$。原式 $=\displaystyle\int_{-1}^2dx\int_{x^2-2}^{x^2+1}x(x^2-y)dy=\dfrac94$。
![例11 积分域 $x^2-y\in[-1,2]$](assets/img/figs/gaoshu/gs06-p180-2.jpg)

【例12】计算 $\displaystyle\iint_D\left|x^2+y^2-2y\right|d\sigma$，其中 $D$ 由 $x^2+y^2\leqslant4$ 所确定。
【解】$\displaystyle\iint_D\left|x^2+y^2-2y\right|d\sigma=\iint_{D_1}(2y-x^2-y^2)d\sigma+\iint_{D_2}(x^2+y^2-2y)d\sigma$
$$=\iint_{D_1}(2y-x^2-y^2)d\sigma+\left[\iint_D(x^2+y^2-2y)d\sigma-\iint_{D_1}(x^2+y^2-2y)d\sigma\right]=\iint_D(x^2+y^2-2y)d\sigma+2\iint_{D_1}(2y-x^2-y^2)d\sigma$$
$$=\int_0^{2\pi}d\theta\int_0^2\rho^3d\rho+2\int_0^\pi d\theta\int_0^{2\sin\theta}(2\rho\sin\theta-\rho^2)\rho d\rho=9\pi.$$
![例12 分域 $D_1,D_2$](assets/img/figs/gaoshu/gs06-p180-3.jpg)

【例13】计算 $\displaystyle\iint_D\min\{x,y\}e^{-(x^2+y^2)}d\sigma$，其中 $D$ 为全平面。
【解】$\displaystyle\iint_D\min\{x,y\}e^{-(x^2+y^2)}d\sigma=\iint_{D_1=\{x\leqslant y\}}xe^{-(x^2+y^2)}d\sigma+\iint_{D_2=\{x\geqslant y\}}ye^{-(x^2+y^2)}d\sigma$` },
      { p: 181, md: R`$$=2\int_{-\infty}^{+\infty}dy\int_{-\infty}^yxe^{-x^2}\cdot e^{-y^2}dx=-\int_{-\infty}^{+\infty}e^{-2y^2}dy\xrightarrow{\sqrt2y=t}-\dfrac{1}{\sqrt2}\int_{-\infty}^{+\infty}e^{-t^2}dt=-\dfrac{1}{\sqrt2}\sqrt\pi=-\sqrt{\dfrac\pi2}.$$
【注】$\displaystyle\int_{-\infty}^{+\infty}e^{-t^2}dt=\sqrt\pi$，这是概率论中一个常用结论。

【例14】设 $f(x)$ 在区间 $[0,1]$ 上连续，且 $\displaystyle\int_0^1f(x)dx=A$，求 $\displaystyle\int_0^1dx\int_x^1f(x)f(y)dy$。
【解】$\displaystyle\int_0^1dx\int_x^1f(x)f(y)dy\xrightarrow{x\text{与}y\text{对换}}\int_0^1dy\int_y^1f(y)f(x)dx$，
$$\int_0^1dx\int_x^1f(x)f(y)dy=\dfrac12\left[\int_0^1dx\int_x^1f(x)f(y)dy+\int_0^1dy\int_y^1f(y)f(x)dx\right]=\dfrac12\iint_{0\leqslant x\leqslant1,0\leqslant y\leqslant1}f(x)f(y)dxdy=\dfrac12\int_0^1f(x)dx\int_0^1f(y)dy=\dfrac{A^2}{2}.$$

### 题型二　累次积分交换次序及计算
【例1】交换下列累次积分次序：(1) $I=\displaystyle\int_0^1dy\int_{\sqrt y}^{\sqrt{2-y^2}}f(x,y)dx$；(2) $I=\displaystyle\int_0^1dx\int_0^{\sqrt{2x-x^2}}f(x,y)dy+\int_1^2dx\int_0^{2-x}f(x,y)dy$；(3) $I=\displaystyle\int_0^2dx\int_{x^2}^xf(x,y)dy$。
【解】交换积分次序的问题，首先是画域，然后按另一种次序重新定限。
![(1) 积分域](assets/img/figs/gaoshu/gs06-p181-1.jpg)
![(2) 积分域](assets/img/figs/gaoshu/gs06-p181-2.jpg)
![(3) 积分域](assets/img/figs/gaoshu/gs06-p181-3.jpg)
(1) $I=\displaystyle\int_0^1dx\int_0^{x^2}f(x,y)dy+\int_1^{\sqrt2}dx\int_0^{\sqrt{2-x^2}}f(x,y)dy$。
(2) $I=\displaystyle\int_0^1dy\int_{1-\sqrt{1-y^2}}^{2-y}f(x,y)dx$。
(3) $I=\displaystyle\int_0^1dy\int_y^{\sqrt y}f(x,y)dx-\int_1^2dy\int_{\sqrt y}^yf(x,y)dx-\int_2^4dy\int_{\sqrt y}^2f(x,y)dx$。` },
      { p: 182, md: R`【例2】交换累次积分 $I=\displaystyle\int_{-\frac\pi4}^{\frac\pi2}d\theta\int_0^{2a\cos\theta}f(\rho\cos\theta,\rho\sin\theta)\rho d\rho$ 的次序 $(a>0)$。
【解】$\rho=2a\cos\theta$ 是圆 $x^2+y^2=2ax$，则
$$I=\int_0^{\sqrt2a}d\rho\int_{-\frac\pi4}^{\arccos\frac{\rho}{2a}}f(\rho\cos\theta,\rho\sin\theta)\rho d\theta+\int_{\sqrt2a}^{2a}d\rho\int_{-\arccos\frac{\rho}{2a}}^{\arccos\frac{\rho}{2a}}f(\rho\cos\theta,\rho\sin\theta)\rho d\theta.$$
![例2 积分域](assets/img/figs/gaoshu/gs06-p182-1.jpg)

【例3】累次积分 $\displaystyle\int_0^{\frac\pi2}d\theta\int_0^{\cos\theta}f(\rho\cos\theta,\rho\sin\theta)\rho d\rho$ 可写成 (A) $\int_0^1dy\int_0^{\sqrt{y-y^2}}f(x,y)dx$ (B) $\int_0^1dy\int_0^{\sqrt{1-y^2}}f(x,y)dx$ (C) $\int_0^1dx\int_0^1f(x,y)dy$ (D) $\int_0^1dx\int_0^{\sqrt{x-x^2}}f(x,y)dy$
【解】画域如右图，选 (D)。
![例3 积分域 $x^2+y^2\leqslant x$](assets/img/figs/gaoshu/gs06-p182-2.jpg)

【例4】计算下列累次积分：1) $\displaystyle\int_0^2dx\int_x^2e^{-y^2}dy$；2) $\displaystyle\int_1^2dy\int_{\sqrt y}^y\sin\dfrac{\pi x}{2y}dx+\int_2^4dx\int_{\sqrt x}^2\sin\dfrac{\pi x}{2y}dy$；3) $\displaystyle\int_0^adx\int_{-x}^{-a+\sqrt{a^2-x^2}}\dfrac{1}{\sqrt{4a^2-(x^2+y^2)}}dy\ (a>0)$。
【解】
![(1) 积分域](assets/img/figs/gaoshu/gs06-p182-3.jpg)
![(2) 积分域](assets/img/figs/gaoshu/gs06-p182-4.jpg)
![(3) 积分域](assets/img/figs/gaoshu/gs06-p182-5.jpg)
1) 交换积分次序得 $\displaystyle\int_0^2dx\int_x^2e^{-y^2}dy=\int_0^2dy\int_0^ye^{-y^2}dx=\int_0^2ye^{-y^2}dy=-\dfrac12e^{-y^2}\Big|_0^2=\dfrac12(1-e^{-4})$。
2) 交换积分次序得 原式 $=\displaystyle\int_1^2dy\int_y^{y^2}\sin\dfrac{\pi x}{2y}dx=-\dfrac2\pi\int_1^2y\cos\dfrac{\pi y}{2}dy=-\dfrac{4}{\pi^2}\int_1^2y\,d\sin\dfrac{\pi y}{2}=\dfrac{4}{\pi^2}+\dfrac{8}{\pi^3}$。
3) 将原累次积分化为极坐标下先 $\rho$ 后 $\theta$ 的累次积分得` },
      { p: 183, md: R`$$\text{原式}=\int_{-\frac\pi4}^0d\theta\int_0^{-2a\sin\theta}\dfrac{\rho}{\sqrt{4a^2-\rho^2}}d\rho=\dfrac{\pi-2\sqrt2}{2}a.$$

【例5】设 $f(x)$ 为连续。证明：$\displaystyle\iint_Df(x-y)dxdy=\int_{-A}^Af(t)(A-|t|)dt$，$D:|x|\leqslant\dfrac A2,|y|\leqslant\dfrac A2$。
【证明】$\displaystyle\iint_Df(x-y)dxdy=\int_{-\frac A2}^{\frac A2}dx\int_{-\frac A2}^{\frac A2}f(x-y)dy$，$\displaystyle\int_{-\frac A2}^{\frac A2}f(x-y)dy=\int_{x-\frac A2}^{x+\frac A2}f(u)du\quad(\text{令 }x-y=u)$，
$$\iint_Df(x-y)dxdy=\int_{-\frac A2}^{\frac A2}dx\int_{x-\frac A2}^{x+\frac A2}f(u)du\quad(\text{交换积分次序})=\int_{-A}^0du\int_{-\frac A2}^{u+\frac A2}f(u)dx+\int_0^Adu\int_{u-\frac A2}^{\frac A2}f(u)dx$$
$$=\int_{-A}^0f(u)(A+u)du+\int_0^Af(u)(A-u)du=\int_{-A}^Af(u)(A-|u|)du.$$

### 题型三　与二重积分有关的综合题
【例1】设 $f(x)$ 为连续函数，$F(t)=\displaystyle\int_1^tdy\int_y^tf(x)dx$，则 $F'(2)$ 等于 (A) $2f(2)$ (B) $f(2)$ (C) $-f(2)$ (D) $0$
【解1】交换积分次序得 $F(t)=\displaystyle\int_1^tdx\int_1^xf(x)dy=\int_1^t(x-1)f(x)dx$。则 $F'(t)=(t-1)f(t)$，从而 $F'(2)=f(2)$，故应选 (B)。
【解2】（排除法）$f(t)=1$。
![例1 积分域](assets/img/figs/gaoshu/gs06-p183-1.jpg)

【例2】设区域 $D$ 由 $x^2+y^2\leqslant y$ 和 $x\geqslant0$ 所确定，$f(x,y)$ 为 $D$ 上的连续函数，且 $f(x,y)=\sqrt{1-x^2-y^2}-\dfrac{8}{\pi}\displaystyle\iint_Df(u,v)dudv$。求 $f(x,y)$。
【解1】令 $\displaystyle\iint_Df(u,v)dudv=A$，则 $f(x,y)=\sqrt{1-x^2-y^2}-\dfrac{8}{\pi}A$。将 $f(x,y)=\sqrt{1-x^2-y^2}-\dfrac{8}{\pi}A$ 代入 ① 式得 $\displaystyle\iint_D\left[\sqrt{1-x^2-y^2}-\dfrac{8}{\pi}A\right]dxdy=A$，` },
      { p: 184, md: R`即 $\displaystyle\iint_D\sqrt{1-x^2-y^2}dxdy-A=A$，于是 $A=\dfrac12\iint_D\sqrt{1-x^2-y^2}dxdy=\dfrac12\int_0^{\frac\pi2}d\theta\int_0^{\sin\theta}\sqrt{1-\rho^2}\rho d\rho=\dfrac16\left(\dfrac\pi2-\dfrac23\right)$。故 $f(x,y)=\sqrt{1-x^2-y^2}-\dfrac{4}{3\pi}\left(\dfrac\pi2-\dfrac23\right)$。
【解2】等式两端在区域 $D$ 上作二重积分得 $\displaystyle\iint_Df(x,y)dxdy=\iint_D\sqrt{1-x^2-y^2}dxdy-\iint_Df(u,v)dudv$。则 $\iint_Df(x,y)dxdy=\dfrac12\iint_D\sqrt{1-x^2-y^2}dxdy=\dfrac16\left(\dfrac\pi2-\dfrac23\right)$（解1中已算过）。故 $f(x,y)=\sqrt{1-x^2-y^2}-\dfrac{4}{3\pi}\left(\dfrac\pi2-\dfrac23\right)$。
![例2 积分域](assets/img/figs/gaoshu/gs06-p183-2.jpg)

【例3】设 $f(t)$ 在 $[0,+\infty)$ 上连续，且满足 $f(t)=e^{4\pi t^2}+\displaystyle\iint_{x^2+y^2\leqslant4t^2}f\left(\dfrac12\sqrt{x^2+y^2}\right)dxdy$，求 $f(t)$。
【解】显然 $f(0)=1$，且 $\displaystyle\iint_{x^2+y^2\leqslant4t^2}f\left(\dfrac12\sqrt{x^2+y^2}\right)dxdy=\int_0^{2\pi}d\theta\int_0^{2t}f\left(\dfrac12\rho\right)\rho d\rho=2\pi\int_0^{2t}\rho f\left(\dfrac12\rho\right)d\rho$，则 $f(t)=e^{4\pi t^2}+2\pi\displaystyle\int_0^{2t}\rho f\left(\dfrac12\rho\right)d\rho$，$f'(t)=8\pi te^{4\pi t^2}+8\pi tf(t)$，$f(t)=e^{\int8\pi tdt}\left[\int8\pi te^{4\pi t^2}e^{-\int8\pi tdt}dt+C\right]=(4\pi t^2+C)e^{4\pi t^2}$。由 $f(0)=1$ 得 $C=1$，因此 $f(t)=(4\pi t^2+1)e^{4\pi t^2}$。

【例4】设 $f(x,y)$ 是定义在 $0\leqslant x\leqslant1,0\leqslant y\leqslant1$ 上的连续函数，$f(0,0)=-1$，求极限 $\lim\limits_{x\to0^+}\dfrac{\int_0^{x^2}dt\int_x^{\sqrt t}f(t,u)du}{1-e^{-x^3}}$。
【解1】交换积分次序得
$$\lim_{x\to0^+}\dfrac{\int_0^{x^2}dt\int_x^{\sqrt t}f(t,u)du}{1-e^{-x^3}}=\lim_{x\to0^+}\dfrac{-\int_0^xdu\int_0^{u^2}f(t,u)dt}{x^3}\quad(1-e^{-x^3}\sim x^3)=-\lim_{x\to0^+}\dfrac{\int_0^x\left[\int_0^{u^2}f(t,u)dt\right]du}{x^3}=-\lim_{x\to0^+}\dfrac{\int_0^{x^2}f(t,x)dt}{3x^2}\quad(\text{应用洛必达法则})$$` },
      { p: 185, md: R`$$=-\lim_{x\to0^+}\dfrac{x^2f(\xi,x)}{3x^2}\quad(0<\xi<x^2,\text{这里应用了定积分中值定理})=-\dfrac13f(0,0)=\dfrac13.$$
【解2】由以上分析及二重积分中值定理知 $\displaystyle\int_0^{x^2}dt\int_x^{\sqrt t}f(t,u)du=-\iint_Df(t,u)dtdu=-f(\xi,\eta)S$，其中 $(\xi,\eta)\in D$，$S$ 为 $D$ 的面积。而 $S=\displaystyle\int_0^{x^2}dt\int_{\sqrt t}^xdu=\int_0^{x^2}(x-\sqrt t)dt=\dfrac13x^3$，故 $\lim\limits_{x\to0^+}\dfrac{\int_0^{x^2}dt\int_x^{\sqrt t}f(t,u)du}{1-e^{-x^3}}=-\lim\limits_{x\to0^+}\dfrac{f(\xi,\eta)\cdot\frac13x^3}{x^3}=-\dfrac{f(0,0)}{3}=\dfrac13$。

【例5】设 $f(x,y)$ 在单位圆 $x^2+y^2\leqslant1$ 上有连续一阶偏导数，且在边界上取值为零，证明：$f(0,0)=\lim\limits_{\varepsilon\to0^+}\dfrac{-1}{2\pi}\displaystyle\iint_D\dfrac{xf'_x+yf'_y}{x^2+y^2}dxdy$，其中 $D$ 为圆环域 $\varepsilon^2\leqslant x^2+y^2\leqslant1$。
【证】从积分域和被积函数不难看出，应在极坐标下将本题中的重积分化为累次积分。
$$\iint_D\dfrac{xf'_x+yf'_y}{x^2+y^2}dxdy=\int_0^{2\pi}d\theta\int_\varepsilon^1[\cos\theta f'_x(\rho\cos\theta,\rho\sin\theta)+\sin\theta f'_y(\rho\cos\theta,\rho\sin\theta)]d\rho$$
$$=\int_0^{2\pi}[f(\rho\cos\theta,\rho\sin\theta)\big|_\varepsilon^1]d\theta=-\int_0^{2\pi}f(\varepsilon\cos\theta,\varepsilon\sin\theta)d\theta=-2\pi f(\varepsilon\cos\bar\theta,\varepsilon\sin\bar\theta),\quad\bar\theta\in[0,2\pi],$$
则 $\lim\limits_{\varepsilon\to0^+}\dfrac{-2}{2\pi}\iint_D\dfrac{xf'_x+yf'_y}{x^2+y^2}dxdy=\lim\limits_{\varepsilon\to0^+}f(\varepsilon\cos\bar\theta,\varepsilon\sin\bar\theta)=f(0,0)$。

【例6】设二元函数 $f(x,y)$ 在平面区域 $D=\{(x,y)|0\leqslant x\leqslant1,0\leqslant y\leqslant1\}$ 上具有二阶连续偏导数，在 $D$ 的边界上取零值，且在 $D$ 上有 $\left|\dfrac{\partial^2f}{\partial x\partial y}\right|\leqslant M$，试证：$\left|\displaystyle\iint_Df(x,y)dxdy\right|\leqslant\dfrac M4$。
【证1】由题设知 $f(x,0)=f(x,1)=0$，$f(0,y)=f(1,y)=0$，且 $f'_y(0,y)=f'_y(1,y)=0$。从而
$$\iint_Df(x,y)dxdy=\int_0^1dx\int_0^1f(x,y)dy=\int_0^1\left[yf(x,y)\Big|_0^1-\int_0^1y\dfrac{\partial f}{\partial y}dy\right]dx=\int_0^1y\,dy\int_0^1\dfrac{\partial f}{\partial y}d(1-x)$$
$$=\int_0^1y\left[(1-x)\dfrac{\partial f}{\partial y}\Big|_0^1-\int_0^1(1-x)\dfrac{\partial^2f}{\partial x\partial y}dx\right]dy=-\iint_Dy(1-x)\dfrac{\partial^2f}{\partial x\partial y}dxdy.$$
【证2】$f(x,y)=f(x,y)-f(0,y)\quad(f(0,y)=0)=xf'_x(\xi,y)\quad(\text{拉格朗日中值定理})=x[f'_x(\xi,y)-f'_x(\xi,0)]\quad(f'_x(x,0)=0)=xyf''_{xy}(\xi,\eta)\quad(\text{拉格朗日中值定理}),$` },
      { p: 186, md: R`$$\left|\iint_Df(x,y)dxdy\right|\leqslant\iint_D|xyf''_{xy}(\xi,\eta)|dxdy\leqslant M\iint_Dxy\,dxdy=\dfrac M4.$$

### 题型四　与二重积分有关的积分不等式问题
【例1】设 $I_1=\displaystyle\iint_D\cos\sqrt{x^2+y^2}d\sigma$，$I_2=\displaystyle\iint_D\cos(x^2+y^2)d\sigma$，$I_3=\displaystyle\iint_D\cos(x^2+y^2)^2d\sigma$，其中 $D=\{(x,y)|x^2+y^2\leqslant1\}$，则 (A) $I_3>I_2>I_1$ (B) $I_1>I_2>I_3$ (C) $I_2>I_1>I_3$ (D) $I_3>I_1>I_2$
【解】当 $0\leqslant x\leqslant\dfrac\pi2$ 时，$\cos x$ 是减函数，且 $0\leqslant x^2+y^2\leqslant1$ 时，$\sqrt{x^2+y^2}\geqslant x^2+y^2\geqslant(x^2+y^2)^2$，则 $\cos\sqrt{x^2+y^2}\leqslant\cos(x^2+y^2)\leqslant\cos(x^2+y^2)^2$，故 $\iint_D\cos\sqrt{x^2+y^2}d\sigma<\iint_D\cos(x^2+y^2)d\sigma<\iint_D\cos(x^2+y^2)^2d\sigma$，即 $I_1<I_2<I_3$。故应选 (A)。

【例2】设 $I_1=\displaystyle\iint_{x^2+y^2\leqslant1}(x^2+y^2)d\sigma$，$I_2=\displaystyle\iint_{|x|+|y|\leqslant1}2|xy|d\sigma$，$I_3=\displaystyle\iint_{|x|+|y|\leqslant1}(x^2+y^2)d\sigma$，则 (A) $I_1<I_2<I_3$ (B) $I_2<I_3<I_1$ (C) $I_3<I_1<I_2$ (D) $I_3<I_2<I_1$
【解】先比较 $I_1$ 和 $I_3$ 的大小，由于 $I_1$ 和 $I_3$ 被积函数相同且非负，而 $I_1$ 的积分域包含了 $I_3$ 的积分域，则 $I_1>I_3$。再比较 $I_2$ 和 $I_3$，$I_2$ 和 $I_3$ 积分域相同，但 $x^2+y^2\geqslant2|xy|$，则 $I_3>I_2$。从而有 $I_1>I_3>I_2$。故应选 (B)。

【例3】设 $f(x)$ 在 $[a,b]$ 上连续，且 $f(x)>0$，证明：$\displaystyle\int_a^bf(x)dx\int_a^b\dfrac{1}{f(x)}dx\geqslant(b-a)^2$。
【证1】若记 $D=\{(x,y)|a\leqslant x\leqslant b,a\leqslant y\leqslant b\}$，则
$$\int_a^bf(x)dx\cdot\int_a^b\dfrac{1}{f(x)}dx=\int_a^bf(x)dx\cdot\int_a^b\dfrac{1}{f(y)}dy=\iint_D\dfrac{f(x)}{f(y)}dxdy.$$
由于积分域 $D$ 关于 $y=x$ 对称，则
$$\int_a^bf(x)dx\cdot\int_a^b\dfrac{1}{f(x)}dx=\dfrac12\left[\iint_D\dfrac{f(x)}{f(y)}dxdy+\iint_D\dfrac{f(y)}{f(x)}dxdy\right]=\dfrac12\iint_D\dfrac{f^2(x)+f^2(y)}{f(x)f(y)}dxdy=\iint_D\dfrac{f^2(x)+f^2(y)}{2f(x)f(y)}dxdy\geqslant\iint_D1\,dxdy=(b-a)^2.$$
【证2】由柯西积分不等式得（从略，可自行推导）。` }
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
