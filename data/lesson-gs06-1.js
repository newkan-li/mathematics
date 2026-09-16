window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["gs06_s0"] = {
    id: "gs06_s0",
    ch: "第六章 二重积分",
    title: "第六章 二重积分",
    book: "《高等数学辅导讲义》",
    pages: [174, 186],
    img: "assets/img/gaoshu",
    content: [
      { p: 174, md: R`# 第六章 二重积分
### 一、考试内容要点精讲
#### （一）二重积分的概念
定义 设函数 $z=f(x,y)$ 在有界闭区域 $D$ 上有界，将 $D$ 任意分成 $n$ 个小闭区域
$$\Delta\sigma_1,\Delta\sigma_2,\cdots,\Delta\sigma_n,$$
其中 $\Delta\sigma_i$ 表示第 $i$ 个小区域，也表示它的面积。在每个 $\Delta\sigma_i$ 上任取一点 $(\xi_i,\eta_i)$，作乘积 $f(\xi_i,\eta_i)\Delta\sigma_i$，并求和 $\sum\limits_{i=1}^{n}f(\xi_i,\eta_i)\Delta\sigma_i$。记 $\lambda$ 为 $n$ 个小区域 $\Delta\sigma_1,\Delta\sigma_2,\cdots,\Delta\sigma_n$ 中的最大直径，如果
$\lim\limits_{\lambda\to0}\sum\limits_{i=1}^{n}f(\xi_i,\eta_i)\Delta\sigma_i$ 存在，则称此极限值为函数 $f(x,y)$ 在区域 $D$ 上的二重积分，记为
$$\iint_Df(x,y)\,\mathrm{d}\sigma=\lim_{\lambda\to0}\sum_{i=1}^{n}f(\xi_i,\eta_i)\Delta\sigma_i.$$
#### （二）二重积分的几何意义
二重积分 $\iint_Df(x,y)\,\mathrm{d}\sigma$ 是一个数。当 $f(x,y)\geqslant0$ 时，其值等于以积分域 $D$ 为底，以曲面 $z=f(x,y)$ 为曲顶的曲顶柱体的体积。
#### （三）二重积分的性质
1. 不等式性质
（1）若在 $D$ 上 $f(x,y)\leqslant g(x,y)$，则 $\iint_Df(x,y)\,\mathrm{d}\sigma\leqslant\iint_Dg(x,y)\,\mathrm{d}\sigma.$
（2）若 $f(x,y)$ 在 $D$ 上连续，则 $mS\leqslant\iint_Df(x,y)\,\mathrm{d}\sigma\leqslant MS$，其中 $m$ 和 $M$ 分别为 $f(x,y)$ 在 $D$ 上的最小值和最大值，$S$ 为积分域 $D$ 的面积。
（3）$\left|\iint_Df(x,y)\,\mathrm{d}\sigma\right|\leqslant\iint_D|f(x,y)|\,\mathrm{d}\sigma.$
2. 积分中值定理
若 $f(x,y)$ 在 $D$ 上连续，则 $\iint_Df(x,y)\,\mathrm{d}\sigma=f(\xi,\eta)S$，其中 $(\xi,\eta)\in D$，$S$ 为积分域 $D$ 的面积。` },
      { p: 175, md: R`#### （四）二重积分的计算
**1. 利用直角坐标计算**
1）先 $y$ 后 $x$
若积分域 $D$ 是 $X$ 型区域，即积分域 $D$ 可以用不等式 $y_1(x)\leqslant y\leqslant y_2(x)$，$a\leqslant x\leqslant b$ 来表示（如右图），则
$$\iint_Df(x,y)\,\mathrm{d}\sigma=\int_a^b\mathrm{d}x\int_{y_1(x)}^{y_2(x)}f(x,y)\,\mathrm{d}y.$$
（图：直角坐标系中以 $O$ 为原点，上边界为曲线 $y=y_2(x)$，下边界为曲线 $y=y_1(x)$，左右边界为 $x=a$、$x=b$ 的竖直线，围成带斜线阴影的区域）
2）先 $x$ 后 $y$
若积分域 $D$ 是 $Y$ 型区域，即积分域 $D$ 可以用不等式 $x_1(y)\leqslant x\leqslant x_2(y)$，$c\leqslant y\leqslant d$ 来表示（如右图），则
$$\iint_Df(x,y)\,\mathrm{d}\sigma=\int_c^d\mathrm{d}y\int_{x_1(y)}^{x_2(y)}f(x,y)\,\mathrm{d}x.$$
（图：直角坐标系中以 $O$ 为原点，右边界为曲线 $x=x_2(y)$，左边界为曲线 $x=x_1(y)$，$y$ 轴上标 $c$、$d$，围成带斜线阴影的区域）
**2. 利用极坐标计算**
1）先 $\rho$ 后 $\theta$
若积分域 $D$ 可以用不等式 $\rho_1(\theta)\leqslant\rho\leqslant\rho_2(\theta)$，$\alpha\leqslant\theta\leqslant\beta$ 来表示（如右图），则
$$\iint_Df(x,y)\,\mathrm{d}\sigma=\int_\alpha^\beta\mathrm{d}\theta\int_{\rho_1(\theta)}^{\rho_2(\theta)}f(\rho\cos\theta,\rho\sin\theta)\rho\,\mathrm{d}\rho.$$
（图：极坐标系中以 $O$ 为极点，射线 $\theta=\alpha$ 与 $\theta=\beta$ 之间，内外两条曲线分别为 $\rho=\rho_1(\theta)$、$\rho=\rho_2(\theta)$，围成带斜线阴影的区域）
【注】适合用极坐标计算的二重积分的特征
① 适合用极坐标计算的被积函数：
$$f(\sqrt{x^2+y^2}),\ f\left(\frac{y}{x}\right),\ f\left(\frac{x}{y}\right);$$
② 适合用极坐标的积分域：
如 $x^2+y^2\leqslant R^2$；$r^2\leqslant x^2+y^2\leqslant R^2$；$x^2+y^2\leqslant2ax$；$x^2+y^2\leqslant2by.$
**3. 利用对称性和奇偶性计算**
1）若积分域 $D$ 关于 $y$ 轴对称，$f(x,y)$ 关于 $x$ 有奇偶性，则：
$$\iint_Df(x,y)\,\mathrm{d}\sigma=\begin{cases}2\displaystyle\iint_{D_{x\geqslant0}}f(x,y)\,\mathrm{d}\sigma,&f(-x,y)=f(x,y),\\[3mm]0,&f(-x,y)=-f(x,y).\end{cases}$$
2）若积分域关于 $x$ 轴对称，$f(x,y)$ 关于 $y$ 有奇偶性，则
$$\iint_Df(x,y)\,\mathrm{d}\sigma=\begin{cases}2\displaystyle\iint_{D_{y\geqslant0}}f(x,y)\,\mathrm{d}\sigma,&f(x,-y)=f(x,y),\\[3mm]0,&f(x,-y)=-f(x,y).\end{cases}$$
**4. 利用变量对称性计算**
二重积分 $\iint_Df(x,y)\,\mathrm{d}\sigma$ 的积分域 $D$ 是点 $(x,y)$ 的集合，记为 $D_{(x,y)}$，类似一元定积分的值与积分变量用什么记号无关，则
$$\iint_{D_{(x,y)}}f(x,y)\,\mathrm{d}\sigma=\iint_{D_{(y,x)}}f(y,x)\,\mathrm{d}\sigma,$$` },
      { p: 176, md: R`即把二重积分的被积函数 $f(x,y)$ 及积分域 $D_{(x,y)}$ 中的 $x$ 和 $y$ 对调，积分值不变。例如，
$$\iint_{x^2+y^2\leqslant1}(3x+4y)\,\mathrm{d}\sigma=\iint_{y^2+x^2\leqslant1}(3y+4x)\,\mathrm{d}\sigma.$$
如果积分域 $D$ 关于直线 $y=x$ 对称，即 $(x,y)\in D\Leftrightarrow(y,x)\in D$，如右图，此时 $D_{(x,y)}=D_{(y,x)}$，则
$$\iint_Df(x,y)\,\mathrm{d}\sigma=\iint_Df(y,x)\,\mathrm{d}\sigma,$$
即当积分域 $D$ 关于直线 $y=x$ 对称时，将被积函数 $f(x,y)$ 中的 $x$ 和 $y$ 对调，积分值不变。
（图：直角坐标系中以 $O$ 为原点，一条过原点的直线 $y=x$，以及一个关于该直线对称的椭圆区域，区域带斜线阴影）
### 二、常考题型的方法与技巧
#### 题型一 计算二重积分
【例1】计算 $\iint_D[|xy|+\sin(xy^2)]\,\mathrm{d}\sigma$，其中 $D$ 由曲线 $|x|+|y|=1$ 所围成。
【解】由奇偶性知
原式 $=\iint_D|xy|\,\mathrm{d}\sigma=4\iint_{D_1}xy\,\mathrm{d}\sigma$（其中 $D_1$ 为 $D$ 在第一象限的部分）
$=4\int_0^1\mathrm{d}x\int_0^{1-x}xy\,\mathrm{d}y=\frac{1}{6}.$
（图：直角坐标系中以 $O$ 为原点，菱形 $|x|+|y|=1$，顶点为 $(1,0)$、$(0,1)$、$(-1,0)$、$(0,-1)$，坐标轴上标 $-1$、$1$，区域带斜线阴影）
【例2】设区域 $D$ 为 $x^2+y^2\leqslant R^2$，则 $\iint_D\left(\frac{x^2}{a^2}+\frac{y^2}{b^2}\right)\mathrm{d}\sigma=$ ______。
【解1】$\iint_D\left(\frac{x^2}{a^2}+\frac{y^2}{b^2}\right)\mathrm{d}\sigma=\int_0^{2\pi}\mathrm{d}\theta\int_0^R\left(\frac{\cos^2\theta}{a^2}+\frac{\sin^2\theta}{b^2}\right)\rho^3\,\mathrm{d}\rho=\frac{\pi R^4}{4}\left(\frac{1}{a^2}+\frac{1}{b^2}\right).$
【解2】由于积分域 $D$：$x^2+y^2\leqslant R^2$ 关于直线 $y=x$ 对称，则
$$\iint_D\left(\frac{x^2}{a^2}+\frac{y^2}{b^2}\right)\mathrm{d}\sigma=\iint_D\left(\frac{y^2}{a^2}+\frac{x^2}{b^2}\right)\mathrm{d}\sigma.$$
从而有 $\iint_D\left(\frac{x^2}{a^2}+\frac{y^2}{b^2}\right)\mathrm{d}\sigma=\frac{1}{2}\iint_D\left[\left(\frac{x^2}{a^2}+\frac{y^2}{b^2}\right)+\left(\frac{y^2}{a^2}+\frac{x^2}{b^2}\right)\right]\mathrm{d}\sigma=\frac{1}{2}\left(\frac{1}{a^2}+\frac{1}{b^2}\right)\iint_D(x^2+y^2)\,\mathrm{d}\sigma$
$=\frac{1}{2}\left(\frac{1}{a^2}+\frac{1}{b^2}\right)\int_0^{2\pi}\mathrm{d}\theta\int_0^R\rho^3\,\mathrm{d}\rho=\frac{\pi R^4}{4}\left(\frac{1}{a^2}+\frac{1}{b^2}\right).$
【例3】设区域 $D=\{(x,y)\mid x^2+y^2\leqslant4,x\geqslant0,y\geqslant0\}$，$f(x)$ 为 $D$ 上正值连续函数，$a,b$ 为常数，则 $\iint_D\frac{a\sqrt{f(x)}+b\sqrt{f(y)}}{\sqrt{f(x)}+\sqrt{f(y)}}\,\mathrm{d}\sigma=$ ______。
（A）$ab\pi$。 （B）$\frac{ab}{2}\pi$。 （C）$(a+b)\pi$。 （D）$\frac{a+b}{2}\pi$。
【解1】直接法
由于积分域 $D$ 关于直线 $y=x$ 对称，则
（图：右下角二维码）` },
      { p: 177, md: R`$$\iint_D\frac{a\sqrt{f(x)}+b\sqrt{f(y)}}{\sqrt{f(x)}+\sqrt{f(y)}}\,\mathrm{d}\sigma=\iint_D\frac{a\sqrt{f(y)}+b\sqrt{f(x)}}{\sqrt{f(y)}+\sqrt{f(x)}}\,\mathrm{d}\sigma.$$
原式 $=\frac{1}{2}\left[\iint_D\frac{a\sqrt{f(x)}+b\sqrt{f(y)}}{\sqrt{f(x)}+\sqrt{f(y)}}\,\mathrm{d}\sigma+\iint_D\frac{a\sqrt{f(y)}+b\sqrt{f(x)}}{\sqrt{f(y)}+\sqrt{f(x)}}\,\mathrm{d}\sigma\right]$
$=\frac{1}{2}\iint_D(a+b)\,\mathrm{d}\sigma=\frac{a+b}{2}\pi.$
故应选（D）。
【解2】排除法
取 $f(x)=1$，显然符合题设条件，而
$$\iint_D\frac{a\sqrt{f(x)}+b\sqrt{f(y)}}{\sqrt{f(x)}+\sqrt{f(y)}}\,\mathrm{d}\sigma=\frac{1}{2}\iint_D(a+b)\,\mathrm{d}\sigma=\frac{a+b}{2}\pi.$$
显然（A）、（B）、（C）均不正确，故应选（D）。
【例4】计算 $\iint_Dx[1+yf(x^2+y^2)]\,\mathrm{d}\sigma$，其中 $D$ 是由 $y=x^3$，$y=1$，$x=-1$ 围成的区域，$f(u)$ 为连续函数。
【解】原式 $=\iint_Dx\,\mathrm{d}x\mathrm{d}y+\iint_Dxyf(x^2+y^2)\,\mathrm{d}x\mathrm{d}y.$
作曲线 $y=-x^3$ 将原积分域分为两个区域 $D_1$ 和 $D_2$，则
$$\iint_Dxyf(x^2+y^2)\,\mathrm{d}x\mathrm{d}y=\iint_{D_1}xyf(x^2+y^2)\,\mathrm{d}x\mathrm{d}y+\iint_{D_2}xyf(x^2+y^2)\,\mathrm{d}x\mathrm{d}y=0,(\text{利用奇偶性})$$
$$\iint_Dx\,\mathrm{d}x\mathrm{d}y=\int_{-1}^1\mathrm{d}x\int_{x^3}^1x\,\mathrm{d}y=-\frac{2}{5}.$$
故原式 $=-\frac{2}{5}.$
（图：直角坐标系中以 $O$ 为原点，曲线 $y=x^3$、水平线 $y=1$、竖直线 $x=-1$ 围成的区域，分为 $D_1$、$D_2$ 两部分，图上标 $y=x^3$、$x=-1$）
【例5】计算积分 $\iint_D\frac{\sin y}{y}\,\mathrm{d}\sigma$，其中 $D$ 由 $y=\sqrt{x}$ 和 $y=x$ 围成。
【解】$\iint_D\frac{\sin y}{y}\,\mathrm{d}x\mathrm{d}y=\int_0^1\mathrm{d}y\int_{y^2}^y\frac{\sin y}{y}\,\mathrm{d}x$
$=\int_0^1(\sin y-y\sin y)\,\mathrm{d}y=1-\sin1.$
（图：直角坐标系中以 $O$ 为原点，曲线 $y=\sqrt{x}$ 与直线 $y=x$ 围成的区域，带斜线阴影，标出交点 $(1,1)$）
【例6】计算 $\iint_D\sqrt{x^2+y^2}\,\mathrm{d}x\mathrm{d}y$，其中 $D$ 由曲线 $x^2+y^2=2ay$ $(a>0)$ 所围成。
【解】$\iint_D\sqrt{x^2+y^2}\,\mathrm{d}x\mathrm{d}y=\int_0^\pi\mathrm{d}\theta\int_0^{2a\sin\theta}\rho^2\,\mathrm{d}\rho=\frac{8a^3}{3}\int_0^\pi\sin^3\theta\,\mathrm{d}\theta$
$=\frac{8a^3}{3}\left(\frac{\cos^3\theta}{3}-\cos\theta\right)\Big|_0^\pi=\frac{32}{9}a^3.$
（图：直角坐标系中以 $O$ 为原点，圆心在 $y$ 轴上且过原点的圆 $x^2+y^2=2ay$，圆内带斜线阴影）
【例7】计算 $\iint_D(x+y)\,\mathrm{d}\sigma$，其中 $D$ 由 $x^2+y^2\leqslant x+y$ 所确定。
【解1】圆 $x^2+y^2=x+y$ 在极坐标下方程为 $\rho=\cos\theta+\sin\theta$，则
（图：左下角二维码）` },
      { p: 178, md: R`$$\iint_D(x+y)\,\mathrm{d}\sigma=\int_{-\frac{\pi}{4}}^{\frac{3\pi}{4}}\mathrm{d}\theta\int_0^{\cos\theta+\sin\theta}(\cos\theta+\sin\theta)\rho^2\,\mathrm{d}\rho$$
$=\frac{1}{3}\int_{-\frac{\pi}{4}}^{\frac{3\pi}{4}}(\cos\theta+\sin\theta)^4\,\mathrm{d}\theta=\frac{4}{3}\int_{-\frac{\pi}{4}}^{\frac{3\pi}{4}}\sin^4\left(\theta+\frac{\pi}{4}\right)\mathrm{d}\theta$
$\xrightarrow{\theta+\frac{\pi}{4}=t}\frac{4}{3}\int_0^\pi\sin^4t\,\mathrm{d}t$
$=\frac{8}{3}\int_0^{\frac{\pi}{2}}\sin^4t\,\mathrm{d}t=\frac{8}{3}\times\frac{3}{4}\times\frac{1}{2}\times\frac{\pi}{2}=\frac{\pi}{2}.$
【解2】令 $\begin{cases}x-\frac{1}{2}=\rho\cos\theta,\\[2mm]y-\frac{1}{2}=\rho\sin\theta,\end{cases}$ 此时 $\mathrm{d}\sigma=\rho\,\mathrm{d}\rho\mathrm{d}\theta$，则
$$\iint_D(x+y)\,\mathrm{d}\sigma=\int_0^{2\pi}\mathrm{d}\theta\int_0^{\frac{1}{\sqrt2}}(\rho\cos\theta+\rho\sin\theta+1)\rho\,\mathrm{d}\rho$$
$=\int_0^{2\pi}\mathrm{d}\theta\int_0^{\frac{1}{\sqrt2}}\rho\,\mathrm{d}\rho=2\pi\times\frac{1}{4}=\frac{\pi}{2}.$
注意：$\int_0^{2\pi}\cos\theta\,\mathrm{d}\theta=\int_0^{2\pi}\sin\theta\,\mathrm{d}\theta=0.$
【解3】由于 $\iint_D(x+y)\,\mathrm{d}\sigma=\iint_D\left[\left(x-\frac{1}{2}\right)+\left(y-\frac{1}{2}\right)+1\right]\mathrm{d}\sigma$，而
$$\iint_D\left(x-\frac{1}{2}\right)\mathrm{d}\sigma=\iint_D\left(y-\frac{1}{2}\right)\mathrm{d}\sigma=0\quad(\text{利用奇偶性}),$$
则 $\iint_D(x+y)\,\mathrm{d}\sigma=\iint_D\mathrm{d}\sigma=\frac{\pi}{2}\quad(\text{积分域面积}).$
【解4】由对称性知
$$\iint_D(x+y)\,\mathrm{d}\sigma=2\iint_Dx\,\mathrm{d}\sigma=2\bar{x}S,$$
其中 $\bar{x}$ 为积分域 $D$ 的形心的 $x$ 坐标，应为 $\bar{x}=\frac{1}{2}$，$S$ 为积分域 $D$ 的面积，应为 $S=\frac{\pi}{2}$，则
$$\iint_D(x+y)\,\mathrm{d}\sigma=\frac{\pi}{2}.$$
（图：直角坐标系中以 $O$ 为原点，圆心为 $\left(\frac{1}{2},\frac{1}{2}\right)$ 的圆 $x^2+y^2=x+y$，圆内带斜线阴影）
【例8】计算二重积分 $\iint_Dy\,\mathrm{d}x\mathrm{d}y$，其中 $D$ 是由直线 $x=-2$，$y=0$，$y=2$ 以及曲线 $x=-\sqrt{2y-y^2}$ 所围成的平面区域。
【解1】在直角坐标下化为累次积分计算
$$\iint_Dy\,\mathrm{d}x\mathrm{d}y=\int_0^2\mathrm{d}y\int_{-2}^{-\sqrt{2y-y^2}}y\,\mathrm{d}x$$
$=\int_0^2y\left[2-\sqrt{2y-y^2}\right]\mathrm{d}y=2\int_0^2y\,\mathrm{d}y-\int_0^2y\sqrt{2y-y^2}\,\mathrm{d}y$
$=4-\int_0^2y\sqrt{1-(y-1)^2}\,\mathrm{d}y\quad(\text{令 }y-1=\sin t)$
（图：直角坐标系中以 $O$ 为原点，$y$ 轴正方向标 $2$，竖直线 $x=-2$，水平线 $y=2$，以及曲线 $x=-\sqrt{2y-y^2}$（左半圆），围成标注为 $D_1$ 的带斜线阴影区域）` },
      { p: 179, md: R`$=4-\int_{-\frac{\pi}{2}}^{\frac{\pi}{2}}(1+\sin t)\cos^2t\,\mathrm{d}t=4-\frac{\pi}{2}.$
事实上，计算 $\int_0^2y\sqrt{1-(y-1)^2}\,\mathrm{d}y$ 还有一种巧妙的方法：
$$\int_0^2y\sqrt{1-(y-1)^2}\,\mathrm{d}y=\int_0^2(y-1)\sqrt{1-(y-1)^2}\,\mathrm{d}y+\int_0^2\sqrt{1-(y-1)^2}\,\mathrm{d}y,$$
$$\int_0^2(y-1)\sqrt{1-(y-1)^2}\,\mathrm{d}y=0.$$
而 $\int_0^2\sqrt{1-(y-1)^2}\,\mathrm{d}y$ 应等于半圆的面积 $\frac{\pi}{2}$，故
$$\int_0^2y\sqrt{1-(y-1)^2}\,\mathrm{d}y=\frac{\pi}{2}.$$
【解2】$\iint_Dy\,\mathrm{d}\sigma=\iint_{D+D_1}y\,\mathrm{d}\sigma-\iint_{D_1}y\,\mathrm{d}\sigma=\int_{-2}^0\mathrm{d}x\int_0^2y\,\mathrm{d}y-\int_{\frac{\pi}{2}}^\pi\mathrm{d}\theta\int_0^{2\sin\theta}\rho^2\sin\theta\,\mathrm{d}\rho$
$=4-\frac{8}{3}\int_{\frac{\pi}{2}}^\pi\sin^4\theta\,\mathrm{d}\theta=4-\frac{8}{3}\int_0^{\frac{\pi}{2}}\sin^4\theta\,\mathrm{d}\theta$
$=4-\frac{8}{3}\times\frac{3}{4}\times\frac{1}{2}\times\frac{\pi}{2}=4-\frac{\pi}{2}.$
【解3】由于积分域 $D$ 关于直线 $y=1$ 上下对称，则
$$\iint_D(y-1)\,\mathrm{d}\sigma=0,$$
故 $\iint_Dy\,\mathrm{d}\sigma=\iint_D[(y-1)+1]\,\mathrm{d}\sigma=\iint_D\mathrm{d}\sigma=4-\frac{\pi}{2}.$
【解4】由形心计算公式知 $\iint_Dy\,\mathrm{d}\sigma=\bar{y}S.$
由于积分域 $D$ 关于 $y=1$ 对称，则 $\bar{y}=1$，而 $S=4-\frac{\pi}{2}$，故 $\iint_Dy\,\mathrm{d}\sigma=4-\frac{\pi}{2}.$
【例9】设二元函数
$$f(x,y)=\begin{cases}x^2,&|x|+|y|\leqslant1,\\[3mm]\dfrac{1}{\sqrt{x^2+y^2}},&1<|x|+|y|\leqslant2,\end{cases}$$
计算二重积分 $\iint_Df(x,y)\,\mathrm{d}\sigma$，其中 $D=\{(x,y)\mid|x|+|y|\leqslant2\}.$
【解】原式 $=4\int_0^1\mathrm{d}x\int_0^{1-x}x^2\,\mathrm{d}y+4\int_0^{\frac{\pi}{2}}\mathrm{d}\theta\int_{\frac{1}{\sin\theta+\cos\theta}}^{\frac{2}{\sin\theta+\cos\theta}}\mathrm{d}\rho$
$=\frac{1}{3}+4\int_0^{\frac{\pi}{2}}\frac{\mathrm{d}\theta}{\sin\theta+\cos\theta}$
$=\frac{1}{3}+\frac{4}{\sqrt2}\int_0^{\frac{\pi}{2}}\frac{\mathrm{d}\theta}{\sin\left(\theta+\frac{\pi}{4}\right)}$
$=\frac{1}{3}-\frac{4}{\sqrt2}\ln\left|\csc\left(\theta+\frac{\pi}{4}\right)+\cot\left(\theta+\frac{\pi}{4}\right)\right|\Bigg|_0^{\frac{\pi}{2}}$
（图：直角坐标系中以 $O$ 为原点，两个同心菱形 $|x|+|y|=1$ 与 $|x|+|y|=2$，顶点在坐标轴上，分别标 $1$、$2$，并标注 $x+y=2$、$x+y=1$）` },
      { p: 180, md: R`$=\frac{1}{3}+4\sqrt2\ln(\sqrt2+1).$
【例10】计算 $\displaystyle\iint\limits_Dy^2\,\mathrm{d}\sigma$，其中 $D$ 由 $\begin{cases}x=a(t-\sin t),\\y=a(1-\cos t)\end{cases}$ $(0\leqslant t\leqslant2\pi)$ 与 $y=0$ 围成。
（图：右图为 $xOy$ 坐标面内摆线一拱与 $x$ 轴围成的区域，$x$ 轴上限为 $2\pi a$）
【解】$\displaystyle\iint\limits_Dy^2\,\mathrm{d}\sigma=\int_0^{2\pi a}\mathrm{d}x\int_0^{y(x)}y^2\,\mathrm{d}y=\frac{1}{3}\int_0^{2\pi a}y^3(x)\,\mathrm{d}x$
$\displaystyle=\frac{1}{3}\int_0^{2\pi}a^3(1-\cos t)^3a(1-\cos t)\,\mathrm{d}t$
$\displaystyle=\frac{16a^4}{3}\int_0^{2\pi}\sin^8\frac{t}{2}\,\mathrm{d}t\xlongequal{\text{令}\ \frac{t}{2}=u}\frac{32a^4}{3}\int_0^{\pi}\sin^8u\,\mathrm{d}u$
$\displaystyle=\frac{64a^4}{3}\int_0^{\frac{\pi}{2}}\sin^8u\,\mathrm{d}u=\frac{64a^4}{3}\times\frac{7}{8}\times\frac{5}{6}\times\frac{3}{4}\times\frac{1}{2}\times\frac{\pi}{2}=\frac{35}{12}\pi a^4.$
【例11】设 $D$ 是全平面，$f(x)=\begin{cases}x,&-1\leqslant x\leqslant2,\\0,&\text{其它}.\end{cases}$
计算 $\displaystyle\iint\limits_Df(x)f(x^2-y)\,\mathrm{d}\sigma.$
（图：右图为由直线 $x=-1$、$x=2$ 与曲线 $x^2-y=-1$、$x^2-y=2$ 所围成的区域 $D_1$）
【解】由题设知 $f(x^2-y)=\begin{cases}x^2-y,&-1\leqslant x^2-y\leqslant2,\\0,&\text{其它}.\end{cases}$
则
$f(x)f(x^2-y)=\begin{cases}x(x^2-y),&-1\leqslant x^2-y\leqslant2,\ -1\leqslant x\leqslant2,\\0,&\text{其它}.\end{cases}$
原式 $=\displaystyle\int_{-1}^{2}\mathrm{d}x\int_{x^2-2}^{x^2+1}x(x^2-y)\,\mathrm{d}y=\frac{9}{4}.$
【例12】计算 $\displaystyle\iint\limits_D|x^2+y^2-2y|\,\mathrm{d}\sigma$，其中 $D$ 由 $x^2+y^2\leqslant4$ 所确定。
（图：右图为圆 $x^2+y^2\leqslant4$ 内被直线 $y=1$ 分成的小区域 $D_1$ 与其余部分 $D_2$）
【解】$\displaystyle\iint\limits_D|x^2+y^2-2y|\,\mathrm{d}\sigma$
$\displaystyle=\iint\limits_{D_1}(2y-x^2-y^2)\,\mathrm{d}\sigma+\iint\limits_{D_2}(x^2+y^2-2y)\,\mathrm{d}\sigma$
$\displaystyle=\iint\limits_{D_1}(2y-x^2-y^2)\,\mathrm{d}\sigma+\left[\iint\limits_D(x^2+y^2-2y)\,\mathrm{d}\sigma-\iint\limits_{D_1}(x^2+y^2-2y)\,\mathrm{d}\sigma\right]$
$\displaystyle=\iint\limits_D(x^2+y^2-2y)\,\mathrm{d}\sigma+2\iint\limits_{D_1}(2y-x^2-y^2)\,\mathrm{d}\sigma$
$\displaystyle=\int_0^{2\pi}\mathrm{d}\theta\int_0^{2}\rho^3\,\mathrm{d}\rho+2\int_0^{\pi}\mathrm{d}\theta\int_0^{2\sin\theta}(2\rho\sin\theta-\rho^2)\rho\,\mathrm{d}\rho=9\pi.$
【例13】计算 $\displaystyle\iint\limits_D\min\{x,y\}e^{-(x^2+y^2)}\,\mathrm{d}\sigma$，其中 $D$ 为全平面。
【解】$\displaystyle\iint\limits_D\min\{x,y\}e^{-(x^2+y^2)}\,\mathrm{d}\sigma=\iint\limits_{D_1=\{x\leqslant y\}}xe^{-(x^2+y^2)}\,\mathrm{d}\sigma+\iint\limits_{D_2=\{x\geqslant y\}}ye^{-(x^2+y^2)}\,\mathrm{d}\sigma$` },
      { p: 181, md: R`$\displaystyle=2\int_{-\infty}^{+\infty}\mathrm{d}y\int_{-\infty}^{y}xe^{-x^2}\cdot e^{-y^2}\,\mathrm{d}x=-\int_{-\infty}^{+\infty}e^{-2y^2}\,\mathrm{d}y$
$\displaystyle\xlongequal{\sqrt2y=t}-\frac{1}{\sqrt2}\int_{-\infty}^{+\infty}e^{-t^2}\,\mathrm{d}t=-\frac{1}{\sqrt2}\sqrt{\pi}=-\sqrt{\frac{\pi}{2}}.$
【注】$\displaystyle\int_{-\infty}^{+\infty}e^{-t^2}\,\mathrm{d}t=\sqrt{\pi}$，这是概率论中一个常用结论。
【例14】设 $f(x)$ 在区间 $[0,1]$ 上连续，且 $\displaystyle\int_0^1f(x)\,\mathrm{d}x=A$，求 $\displaystyle\int_0^1\mathrm{d}x\int_x^1f(x)f(y)\,\mathrm{d}y.$
【解】$\displaystyle\int_0^1\mathrm{d}x\int_x^1f(x)f(y)\,\mathrm{d}y\xlongequal{x\ \text{与}\ y\ \text{对称}}\int_0^1\mathrm{d}y\int_y^1f(y)f(x)\,\mathrm{d}x,$
$\displaystyle\int_0^1\mathrm{d}x\int_x^1f(x)f(y)\,\mathrm{d}y=\frac{1}{2}\left[\int_0^1\mathrm{d}x\int_x^1f(x)f(y)\,\mathrm{d}y+\int_0^1\mathrm{d}y\int_y^1f(y)f(x)\,\mathrm{d}x\right]$
$\displaystyle=\frac{1}{2}\iint\limits_{0\leqslant x\leqslant1,\ 0\leqslant y\leqslant1}f(x)f(y)\,\mathrm{d}x\mathrm{d}y=\frac{1}{2}\int_0^1f(x)\,\mathrm{d}x\int_0^1f(y)\,\mathrm{d}y=\frac{A^2}{2}.$
#### 题型二 累次积分交换次序及计算
【例1】交换下列累次积分次序
（1）$\displaystyle I=\int_0^1\mathrm{d}y\int_{\sqrt{y}}^{\sqrt{2-y^2}}f(x,y)\,\mathrm{d}x$；
（2）$\displaystyle I=\int_0^1\mathrm{d}x\int_0^{\sqrt{2x-x^2}}f(x,y)\,\mathrm{d}y+\int_1^2\mathrm{d}x\int_0^{2-x}f(x,y)\,\mathrm{d}y$；
（3）$\displaystyle I=\int_0^2\mathrm{d}x\int_{x^2}^{x}f(x,y)\,\mathrm{d}y.$
【解】交换积分次序的问题，首先是画域，然后按另一种次序重新定限。其区域分别如下：
（图：左图为由 $x=\sqrt{y}$ 与 $x=\sqrt{2-y^2}$ 围成的区域 $D$；中图为由 $y=2-x$ 与 $y=\sqrt{2x-x^2}$ 围成的区域 $D$；右图为由 $y=x^2$ 与 $y=x$ 所围的区域，$x$ 由 $0$ 到 $2$）
（1）$\displaystyle I=\int_0^1\mathrm{d}x\int_0^{x^2}f(x,y)\,\mathrm{d}y+\int_1^{\sqrt2}\mathrm{d}x\int_0^{\sqrt{2-x^2}}f(x,y)\,\mathrm{d}y.$
（2）$\displaystyle I=\int_0^1\mathrm{d}y\int_{1-\sqrt{1-y^2}}^{2-y}f(x,y)\,\mathrm{d}x.$
（3）$\displaystyle I=\int_0^1\mathrm{d}y\int_y^{\sqrt{y}}f(x,y)\,\mathrm{d}x-\int_1^2\mathrm{d}y\int_{\sqrt{y}}^{y}f(x,y)\,\mathrm{d}x-\int_2^4\mathrm{d}y\int_{\sqrt{y}}^{2}f(x,y)\,\mathrm{d}x.$` },
      { p: 182, md: R`【例2】交换累次积分 $\displaystyle I=\int_{-\frac{\pi}{4}}^{\frac{\pi}{2}}\mathrm{d}\theta\int_0^{2a\cos\theta}f(\rho\cos\theta,\rho\sin\theta)\rho\,\mathrm{d}\rho$ 的次序 $(a>0)$。
（图：右上图为圆 $\rho=2a$ 与射线 $\theta=-\frac{\pi}{4}$ 所限的区域 $D$）
【解】$\rho=2a\cos\theta$ 是圆 $x^2+y^2=2ax$，则
$\displaystyle I=\int_0^{\sqrt2a}\mathrm{d}\rho\int_{-\frac{\pi}{4}}^{\arccos\frac{\rho}{2a}}f(\rho\cos\theta,\rho\sin\theta)\rho\,\mathrm{d}\theta$
$\displaystyle\quad+\int_{\sqrt2a}^{2a}\mathrm{d}\rho\int_{-\arccos\frac{\rho}{2a}}^{\arccos\frac{\rho}{2a}}f(\rho\cos\theta,\rho\sin\theta)\rho\,\mathrm{d}\theta.$
【例3】累次积分 $\displaystyle\int_0^{\frac{\pi}{2}}\mathrm{d}\theta\int_0^{\cos\theta}f(\rho\cos\theta,\rho\sin\theta)\rho\,\mathrm{d}\rho$ 可写成
（A）$\displaystyle\int_0^1\mathrm{d}y\int_0^{\sqrt{y-y^2}}f(x,y)\,\mathrm{d}x.$
（B）$\displaystyle\int_0^1\mathrm{d}y\int_0^{\sqrt{1-y^2}}f(x,y)\,\mathrm{d}x.$
（C）$\displaystyle\int_0^1\mathrm{d}x\int_0^1f(x,y)\,\mathrm{d}y.$
（D）$\displaystyle\int_0^1\mathrm{d}x\int_0^{\sqrt{x-x^2}}f(x,y)\,\mathrm{d}y.$
（图：右下图为圆 $x^2+y^2=x$ 所围的区域 $D$，$x$ 轴上限为 $1$）
【解】画域如右图，选（D）。
【例4】计算下列累次积分
1）$\displaystyle\int_0^2\mathrm{d}x\int_x^2e^{-y^2}\,\mathrm{d}y$；
2）$\displaystyle\int_1^2\mathrm{d}y\int_{\sqrt{y}}^{y}\sin\frac{\pi x}{2y}\,\mathrm{d}x+\int_2^4\mathrm{d}x\int_{\sqrt{x}}^{2}\sin\frac{\pi x}{2y}\,\mathrm{d}y$；
3）$\displaystyle\int_0^a\mathrm{d}x\int_{-x}^{-a+\sqrt{a^2-x^2}}\frac{1}{\sqrt{4a^2-(x^2+y^2)}}\,\mathrm{d}y$ $(a>0)$。
【解】以上三个积分对应的积分域如下：
（图：左图为由 $y=x$、$x=2$ 及 $x$ 轴围成的区域 $D$；中图为由 $y=x$、$y=\sqrt{x}$ 及 $x=1$、$x=4$ 所围的区域；右图为由 $y=-x$ 与 $y=-a+\sqrt{a^2-x^2}$ 围成的区域）
1）交换积分次序得
$\displaystyle\int_0^2\mathrm{d}x\int_x^2e^{-y^2}\,\mathrm{d}y=\int_0^2\mathrm{d}y\int_0^{y}e^{-y^2}\,\mathrm{d}x=\int_0^2ye^{-y^2}\,\mathrm{d}y=-\frac{1}{2}e^{-y^2}\Big|_0^2=\frac{1}{2}(1-e^{-4}).$
2）交换积分次序得
$\displaystyle\text{原式}=\int_1^2\mathrm{d}y\int_y^{y^2}\sin\frac{\pi x}{2y}\,\mathrm{d}x=-\frac{2}{\pi}\int_1^2y\cos\frac{\pi y}{2}\,\mathrm{d}y=-\frac{4}{\pi^2}\int_1^2y\,\mathrm{d}\sin\frac{\pi y}{2}=\frac{4}{\pi^2}+\frac{8}{\pi^3}.$
3）将原累次积分化为极坐标下先 $\rho$ 后 $\theta$ 的累次积分得` },
      { p: 183, md: R`原式 $\displaystyle=\int_{-\frac{\pi}{4}}^{0}\mathrm{d}\theta\int_0^{-2a\sin\theta}\frac{\rho}{\sqrt{4a^2-\rho^2}}\,\mathrm{d}\rho=\frac{\pi-2\sqrt2}{2}a.$
【例5】设 $f(x)$ 为连续。证明：
$\displaystyle\iint\limits_Df(x-y)\,\mathrm{d}x\mathrm{d}y=\int_{-A}^{A}f(t)(A-|t|)\,\mathrm{d}t,$ $\displaystyle D:|x|\leqslant\frac{A}{2},\ |y|\leqslant\frac{A}{2}.$
【证明】$\displaystyle\iint\limits_Df(x-y)\,\mathrm{d}x\mathrm{d}y=\int_{-\frac{A}{2}}^{\frac{A}{2}}\mathrm{d}x\int_{-\frac{A}{2}}^{\frac{A}{2}}f(x-y)\,\mathrm{d}y,$
$\displaystyle\int_{-\frac{A}{2}}^{\frac{A}{2}}f(x-y)\,\mathrm{d}y=\int_{x-\frac{A}{2}}^{x+\frac{A}{2}}f(u)\,\mathrm{d}u$（令 $x-y=u$），
$\displaystyle\iint\limits_Df(x-y)\,\mathrm{d}x\mathrm{d}y=\int_{-\frac{A}{2}}^{\frac{A}{2}}\mathrm{d}x\int_{x-\frac{A}{2}}^{x+\frac{A}{2}}f(u)\,\mathrm{d}u$（交换积分次序）
$\displaystyle=\int_{-A}^{0}\mathrm{d}u\int_{-\frac{A}{2}}^{u+\frac{A}{2}}f(u)\,\mathrm{d}x+\int_0^{A}\mathrm{d}u\int_{u-\frac{A}{2}}^{\frac{A}{2}}f(u)\,\mathrm{d}x$
$\displaystyle=\int_{-A}^{0}f(u)(A+u)\,\mathrm{d}u+\int_0^{A}f(u)(A-u)\,\mathrm{d}u$
$\displaystyle=\int_{-A}^{A}f(u)(A-|u|)\,\mathrm{d}u.$
#### 题型三 与二重积分有关的综合题
【例1】设 $f(x)$ 为连续函数，$\displaystyle F(t)=\int_1^t\mathrm{d}y\int_y^tf(x)\,\mathrm{d}x$，则 $F'(2)$ 等于
（A）$2f(2).$ （B）$f(2).$
（C）$-f(2).$ （D）$0.$
（图：右图为由 $y=x$、$x=t$、$y=1$ 围成的区域 $D$）
【解1】交换积分次序得
$\displaystyle F(t)=\int_1^t\mathrm{d}x\int_1^xf(x)\,\mathrm{d}y=\int_1^t(x-1)f(x)\,\mathrm{d}x.$
则 $F'(t)=(t-1)f(t)$，从而 $F'(2)=f(2)$
故应选（B）。
【解2】排除法 $f(t)=1.$
【例2】设区域 $D$ 由 $x^2+y^2\leqslant y$ 和 $x\geqslant0$ 所确定，$f(x,y)$ 为 $D$ 上的连续函数，且 $\displaystyle f(x,y)=\sqrt{1-x^2-y^2}-\frac{8}{\pi}\iint\limits_Df(u,v)\,\mathrm{d}u\mathrm{d}v$，求 $f(x,y)$。
（图：右图为圆 $x^2+y^2=y$ 在 $x\geqslant0$ 部分的区域 $D$）
【解1】令 $\displaystyle\iint\limits_Df(u,v)\,\mathrm{d}u\mathrm{d}v=A$，
则 $\displaystyle f(x,y)=\sqrt{1-x^2-y^2}-\frac{8}{\pi}A.$
将 $\displaystyle f(x,y)=\sqrt{1-x^2-y^2}-\frac{8}{\pi}A$ 代入 ① 式得
$\displaystyle\iint\limits_D\left[\sqrt{1-x^2-y^2}-\frac{8}{\pi}A\right]\mathrm{d}x\mathrm{d}y=A,$` },
      { p: 184, md: R`即 $\displaystyle\iint\limits_D\sqrt{1-x^2-y^2}\,\mathrm{d}x\mathrm{d}y-A=A,$
于是 $\displaystyle A=\frac{1}{2}\iint\limits_D\sqrt{1-x^2-y^2}\,\mathrm{d}x\mathrm{d}y=\frac{1}{2}\int_0^{\frac{\pi}{2}}\mathrm{d}\theta\int_0^{\sin\theta}\sqrt{1-\rho^2}\rho\,\mathrm{d}\rho=\frac{1}{6}\left(\frac{\pi}{2}-\frac{2}{3}\right).$
故 $\displaystyle f(x,y)=\sqrt{1-x^2-y^2}-\frac{4}{3\pi}\left(\frac{\pi}{2}-\frac{2}{3}\right).$
【解2】等式 $\displaystyle f(x,y)=\sqrt{1-x^2-y^2}-\frac{8}{\pi}\iint\limits_Df(u,v)\,\mathrm{d}u\mathrm{d}v$ 两端在区域 $D$ 上作二重积分得
$\displaystyle\iint\limits_Df(x,y)\,\mathrm{d}x\mathrm{d}y=\iint\limits_D\sqrt{1-x^2-y^2}\,\mathrm{d}x\mathrm{d}y-\iint\limits_Df(u,v)\,\mathrm{d}u\mathrm{d}v.$
则 $\displaystyle\iint\limits_Df(x,y)\,\mathrm{d}x\mathrm{d}y=\frac{1}{2}\iint\limits_D\sqrt{1-x^2-y^2}\,\mathrm{d}x\mathrm{d}y=\frac{1}{6}\left(\frac{\pi}{2}-\frac{2}{3}\right).$（解1中已算过）
故 $\displaystyle f(x,y)=\sqrt{1-x^2-y^2}-\frac{4}{3\pi}\left(\frac{\pi}{2}-\frac{2}{3}\right).$
【例3】设 $f(t)$ 在 $[0,+\infty)$ 上连续，且满足
$\displaystyle f(t)=e^{4\pi t^2}+\iint\limits_{x^2+y^2\leqslant4t^2}f\left(\frac{1}{2}\sqrt{x^2+y^2}\right)\mathrm{d}x\mathrm{d}y,$
求 $f(t)$。
【解】显然 $f(0)=1$，且
$\displaystyle\iint\limits_{x^2+y^2\leqslant4t^2}f\left(\frac{1}{2}\sqrt{x^2+y^2}\right)\mathrm{d}x\mathrm{d}y=\int_0^{2\pi}\mathrm{d}\theta\int_0^{2t}f\left(\frac{1}{2}\rho\right)\rho\,\mathrm{d}\rho=2\pi\int_0^{2t}\rho f\left(\frac{1}{2}\rho\right)\mathrm{d}\rho,$
则 $\displaystyle f(t)=e^{4\pi t^2}+2\pi\int_0^{2t}\rho f\left(\frac{1}{2}\rho\right)\mathrm{d}\rho,$
$\displaystyle f'(t)=8\pi te^{4\pi t^2}+8\pi tf(t),$
$\displaystyle f(t)=e^{\int8\pi t\,\mathrm{d}t}\left[\int8\pi te^{4\pi t^2}e^{-\int8\pi t\,\mathrm{d}t}\,\mathrm{d}t+C\right]=(4\pi t^2+C)e^{4\pi t^2}.$
由 $f(0)=1$ 得 $C=1$，因此 $f(t)=(4\pi t^2+1)e^{4\pi t^2}.$
【例4】设 $f(x,y)$ 是定义在 $0\leqslant x\leqslant1,\ 0\leqslant y\leqslant1$ 上的连续函数，$f(0,0)=-1$，求极限 $\displaystyle\lim_{x\to0^+}\frac{\int_0^{x^2}\mathrm{d}t\int_x^{\sqrt{t}}f(t,u)\,\mathrm{d}u}{1-e^{-x^3}}.$
（图：右图为由 $u=\sqrt{t}$ 与 $t=x^2$ 所围的区域 $D$）
【解1】交换积分次序得
$\displaystyle\lim_{x\to0^+}\frac{\int_0^{x^2}\mathrm{d}t\int_x^{\sqrt{t}}f(t,u)\,\mathrm{d}u}{1-e^{-x^3}}=\lim_{x\to0^+}\frac{-\int_0^{x}\mathrm{d}u\int_0^{u^2}f(t,u)\,\mathrm{d}t}{x^3}\quad(1-e^{-x^3}\sim x^3)$
$\displaystyle=-\lim_{x\to0^+}\frac{\int_0^{x}\left[\int_0^{u^2}f(t,u)\,\mathrm{d}t\right]\mathrm{d}u}{x^3}$
$\displaystyle=-\lim_{x\to0^+}\frac{\int_0^{x^2}f(t,x)\,\mathrm{d}t}{3x^2}\quad(\text{应用洛必达法则})$` },
      { p: 185, md: R`$\displaystyle=-\lim_{x\to0^+}\frac{x^2f(\xi,x)}{3x^2}\quad(0<\xi<x^2,\text{这里应用了定积分中值定理})$
$\displaystyle=-\frac{1}{3}f(0,0)=\frac{1}{3}.$
【解2】由以上分析及二重积分中值定理知
$\displaystyle\int_0^{x^2}\mathrm{d}t\int_x^{\sqrt{t}}f(t,u)\,\mathrm{d}u=-\iint\limits_Df(t,u)\,\mathrm{d}t\mathrm{d}u=-f(\xi,\eta)S,$
其中 $(\xi,\eta)\in D$，$S$ 为 $D$ 的面积。而
$\displaystyle S=\int_0^{x^2}\mathrm{d}t\int_{\sqrt{t}}^{x}\mathrm{d}u=\int_0^{x^2}(x-\sqrt{t})\,\mathrm{d}t=\frac{1}{3}x^3,$
故 $\displaystyle\lim_{x\to0^+}\frac{\int_0^{x^2}\mathrm{d}t\int_x^{\sqrt{t}}f(t,u)\,\mathrm{d}u}{1-e^{-x^3}}=-\lim_{x\to0^+}\frac{f(\xi,\eta)\cdot\frac{1}{3}x^3}{x^3}=-\frac{f(0,0)}{3}=\frac{1}{3}.$
【例5】设 $f(x,y)$ 在单位圆 $x^2+y^2\leqslant1$ 上有连续一阶偏导数，且在边界上取值为零，证明：$\displaystyle f(0,0)=\lim_{\varepsilon\to0^+}\frac{-1}{2\pi}\iint\limits_D\frac{xf'_x+yf'_y}{x^2+y^2}\,\mathrm{d}x\mathrm{d}y$，其中 $D$ 为圆环域 $\varepsilon^2\leqslant x^2+y^2\leqslant1$。
【证】从积分域和被积函数不难看出，应在极坐标下将本题中的重积分化为累次积分。
$\displaystyle\iint\limits_D\frac{xf'_x+yf'_y}{x^2+y^2}\,\mathrm{d}x\mathrm{d}y=\int_0^{2\pi}\mathrm{d}\theta\int_{\varepsilon}^{1}\left[\cos\theta f'_x(\rho\cos\theta,\rho\sin\theta)+\sin\theta f'_y(\rho\cos\theta,\rho\sin\theta)\right]\mathrm{d}\rho$
$\displaystyle=\int_0^{2\pi}\left[f(\rho\cos\theta,\rho\sin\theta)\Big|_{\varepsilon}^{1}\right]\mathrm{d}\theta=-\int_0^{2\pi}f(\varepsilon\cos\theta,\varepsilon\sin\theta)\,\mathrm{d}\theta$
$\displaystyle=-2\pi f(\varepsilon\cos\bar{\theta},\varepsilon\sin\bar{\theta}),\bar{\theta}\in[0,2\pi],$
则 $\displaystyle\lim_{\varepsilon\to0^+}\frac{-2}{2\pi}\iint\limits_D\frac{xf'_x+yf'_y}{x^2+y^2}\,\mathrm{d}x\mathrm{d}y=\lim_{\varepsilon\to0^+}f(\varepsilon\cos\bar{\theta},\varepsilon\sin\bar{\theta})=f(0,0).$
【例6】设二元函数 $f(x,y)$ 在平面区域
$D=\{(x,y)\mid0\leqslant x\leqslant1,\ 0\leqslant y\leqslant1\}$ 上具有二阶连续偏导数，在 $D$ 的边界上取零值，且在 $D$ 上有 $\left|\frac{\partial^2f}{\partial x\partial y}\right|\leqslant M$，试证：
$\displaystyle\left|\iint\limits_Df(x,y)\,\mathrm{d}x\mathrm{d}y\right|\leqslant\frac{M}{4}.$
【证1】由题设知 $f(x,0)=f(x,1)=0$，$f(0,y)=f(1,y)=0$，且 $f'_y(0,y)=f'_y(1,y)=0$。从而
$\displaystyle\iint\limits_Df(x,y)\,\mathrm{d}x\mathrm{d}y=\int_0^1\mathrm{d}x\int_0^1f(x,y)\,\mathrm{d}y=\int_0^1\left[yf(x,y)\Big|_0^1-\int_0^1y\frac{\partial f}{\partial y}\,\mathrm{d}y\right]\mathrm{d}x$
$\displaystyle=\int_0^1y\,\mathrm{d}y\int_0^1\frac{\partial f}{\partial y}\,\mathrm{d}(1-x)=\int_0^1y\left[(1-x)\frac{\partial f}{\partial y}\Big|_0^1-\int_0^1(1-x)\frac{\partial^2f}{\partial x\partial y}\,\mathrm{d}x\right]\mathrm{d}y$
$\displaystyle=-\iint\limits_Dy(1-x)\frac{\partial^2f}{\partial x\partial y}\,\mathrm{d}x\mathrm{d}y.$
【证2】$f(x,y)=f(x,y)-f(0,y)\quad(f(0,y)=0)$
$\displaystyle=xf'_x(\xi,y)\quad(\text{拉格朗日中值定理})$
$\displaystyle=x\left[f'_x(\xi,y)-f'_x(\xi,0)\right]\quad(f'_x(x,0)=0)$
$\displaystyle=xyf''_{xy}(\xi,\eta)\quad(\text{拉格朗日中值定理}),$` },
      { p: 186, md: R`$\displaystyle\left|\iint\limits_Df(x,y)\,\mathrm{d}x\mathrm{d}y\right|\leqslant\iint\limits_D\left|xyf''_{xy}(\xi,\eta)\right|\,\mathrm{d}x\mathrm{d}y\leqslant M\iint\limits_Dxy\,\mathrm{d}x\mathrm{d}y=\frac{M}{4}.$
#### 题型四 与二重积分有关的积分不等式问题
【例1】设 $\displaystyle I_1=\iint\limits_D\cos\sqrt{x^2+y^2}\,\mathrm{d}\sigma$，$\displaystyle I_2=\iint\limits_D\cos(x^2+y^2)\,\mathrm{d}\sigma$，$\displaystyle I_3=\iint\limits_D\cos(x^2+y^2)^2\,\mathrm{d}\sigma$，其中 $D=\{(x,y)\mid x^2+y^2\leqslant1\}$，则
（A）$I_3>I_2>I_1.$ （B）$I_1>I_2>I_3.$
（D）$I_2>I_1>I_3.$ （D）$I_3>I_1>I_2.$
【解】当 $0\leqslant x\leqslant\frac{\pi}{2}$ 时，$\cos x$ 是减函数，且 $0\leqslant x^2+y^2\leqslant1$ 时，
$\displaystyle\sqrt{x^2+y^2}\geqslant x^2+y^2\geqslant(x^2+y^2)^2$
则 $\displaystyle\cos\sqrt{x^2+y^2}\leqslant\cos(x^2+y^2)\leqslant\cos(x^2+y^2)^2,$
故 $\displaystyle\iint\limits_D\cos\sqrt{x^2+y^2}\,\mathrm{d}\sigma<\iint\limits_D\cos(x^2+y^2)\,\mathrm{d}\sigma<\iint\limits_D\cos(x^2+y^2)^2\,\mathrm{d}\sigma,$
即 $I_1<I_2<I_3$。故应选（A）。
【例2】设 $\displaystyle I_1=\iint\limits_{x^2+y^2\leqslant1}(x^2+y^2)\,\mathrm{d}\sigma$，$\displaystyle I_2=\iint\limits_{|x|+|y|\leqslant1}2|xy|\,\mathrm{d}\sigma$，$\displaystyle I_3=\iint\limits_{|x|+|y|\leqslant1}(x^2+y^2)\,\mathrm{d}\sigma$，则
（A）$I_1<I_2<I_3.$ （B）$I_2<I_3<I_1.$
（D）$I_3<I_1<I_2.$ （D）$I_3<I_2<I_1.$
【解】先比较 $I_1$ 和 $I_3$ 的大小，由于 $I_1$ 和 $I_3$ 被积函数相同且非负，而 $I_1$ 的积分域包含了 $I_3$ 的积分域，则 $I_1>I_3$。
再比较 $I_2$ 和 $I_3$，$I_2$ 和 $I_3$ 积分域相同，但 $x^2+y^2\geqslant2|xy|$，则 $I_3>I_2$。
从而有 $I_1>I_3>I_2$。故应选（B）。
【例3】设 $f(x)$ 在 $[a,b]$ 上连续，且 $f(x)>0$，证明：
$\displaystyle\int_a^bf(x)\,\mathrm{d}x\int_a^b\frac{1}{f(x)}\,\mathrm{d}x\geqslant(b-a)^2.$
【证1】若记 $D=\{(x,y)\mid a\leqslant x\leqslant b,\ a\leqslant y\leqslant b\}$，则
$\displaystyle\int_a^bf(x)\,\mathrm{d}x\cdot\int_a^b\frac{1}{f(x)}\,\mathrm{d}x=\int_a^bf(x)\,\mathrm{d}x\cdot\int_a^b\frac{1}{f(y)}\,\mathrm{d}y=\iint\limits_D\frac{f(x)}{f(y)}\,\mathrm{d}x\mathrm{d}y.$
由于积分域 $D$ 关于 $y=x$ 对称，则
$\displaystyle\int_a^bf(x)\,\mathrm{d}x\cdot\int_a^b\frac{1}{f(x)}\,\mathrm{d}x=\frac{1}{2}\left[\iint\limits_D\frac{f(x)}{f(y)}\,\mathrm{d}x\mathrm{d}y+\iint\limits_D\frac{f(y)}{f(x)}\,\mathrm{d}x\mathrm{d}y\right]$
$\displaystyle=\frac{1}{2}\iint\limits_D\frac{f^2(x)+f^2(y)}{f(x)f(y)}\,\mathrm{d}x\mathrm{d}y$
$\displaystyle=\iint\limits_D\frac{f^2(x)+f^2(y)}{2f(x)f(y)}\,\mathrm{d}x\mathrm{d}y\geqslant\iint\limits_D1\,\mathrm{d}x\mathrm{d}y$
$\displaystyle=(b-a)^2.$
【证2】由柯西积分不等式得` }
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
