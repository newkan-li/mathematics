window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q660_s7"] = {
    id: "q660_s7",
    ch: "660题 · 选择题 · 高等数学",
    title: "选择题 第 176–200 题（本章完）",
    probTitle: "选择题（含原书详解）",
    book: "《数学基础过关660题（数学二）》",
    problems: [
      { n: 176, q: R`设区域 $D=\{(x,y)\mid y\geqslant0,x^2+y^2\geqslant x,x^2+y^2\leqslant2x\}$ 被直线 $y=x$ 分割成面积较大与面积较小的两部分 $D_1$ 与 $D_2$，则 $D_1$ 与 $D_2$ 的面积之比 $\dfrac{S_1}{S_2}=$
（图：区域 $D$ 由圆 $x^2+y^2=x$ 与 $x^2+y^2=2x$ 的上半部分之间的部分构成，被直线 $y=x$ 分成 $D_2$（较小）与 $D_1$（较大）；坐标轴上标有 $O,1,2$，并标注直线 $y=x$）
(A) $\dfrac{\pi+2}{\pi-2}$。 (B) $\dfrac{\pi+1}{\pi-1}$。 (C) $\dfrac{\pi+1}{\pi-2}$。 (D) $\dfrac{\pi+2}{\pi-1}$。`, a: R`(A)`, sol: R`【分析】$S_1+S_2=D$ 的面积 $=\frac12\pi\cdot1^2-\frac\pi2\left(\frac12\right)^2=\frac{3\pi}{8}$。
在极坐标下 $D_1=\{0\le\theta\le\frac\pi4,\cos\theta\le r\le2\cos\theta\}$，故
$$S_1=\int_0^{\pi/4}d\theta\int_{\cos\theta}^{2\cos\theta}r\,dr=\frac32\int_0^{\pi/4}\cos^2\theta\,d\theta=\frac34\left(\theta+\frac12\sin2\theta\right)\Big|_0^{\pi/4}=\frac3{16}(\pi+2).$$
于是 $S_2=\frac{3\pi}{8}-\frac3{16}(\pi+2)=\frac3{16}(\pi-2)$，$\frac{S_1}{S_2}=\frac{\pi+2}{\pi-2}$。选 (A)。
【评注】两圆极坐标方程 $\rho=\cos\theta$、$\rho=2\cos\theta$；面积比不必求绝对面积。` },
      { n: 177, q: R`设积分区域 $D=\{(x,y)\mid\sqrt{|x|}+\sqrt{|y|}\leqslant1\}$，则
$$I=\iint\limits_D\left(\sqrt{|x|}+\sqrt{|y|}\right)\mathrm{d}x\mathrm{d}y=$$
(A) $\dfrac4{15}$。 (B) $\dfrac25$。 (C) $\dfrac8{15}$。 (D) $\dfrac45$。`, a: R`(C)`, sol: R`【分析】$D$ 关于 $x$ 轴、$y$ 轴对称，被积函数对 $x,y$ 均为偶函数。记 $D_1$ 为第一象限部分，$D_1=\{0\le x\le1,0\le y\le(1-\sqrt x)^2\}$，则
$$I=4\iint_{D_1}(\sqrt x+\sqrt y)\,d\sigma.$$
又 $D_1$ 关于 $y=x$ 对称，$\iint_{D_1}\sqrt x\,d\sigma=\iint_{D_1}\sqrt y\,d\sigma$，故
$$I=8\iint_{D_1}\sqrt x\,d\sigma=8\int_0^1dx\int_0^{(1-\sqrt x)^2}\sqrt x\,dy=8\int_0^1\sqrt x(1-\sqrt x)^2dx=8\left(\frac23-1+\frac25\right)=\frac8{15}.$$
选 (C)。
【评注】先用对称性化到第一象限，再用 $y=x$ 对称性把两项合并。` },
      { n: 178, q: R`设积分区域 $D=\{(x,y)\mid0\leqslant x\leqslant1,0\leqslant y\leqslant1\}$，则二重积分
$$I=\iint\limits_D\frac{\mathrm{d}\sigma}{\left(1+x^2+y^2\right)^{\frac32}}=$$
(A) $\dfrac\pi2$。 (B) $\dfrac\pi3$。 (C) $\dfrac\pi4$。 (D) $\dfrac\pi6$。`, a: R`(D)`, sol: R`【分析】$D$ 被直线 $y=x$ 分成关于 $y=x$ 对称的 $D_1,D_2$，被积函数 $f(x,y)=f(y,x)$，故 $I=2\iint_{D_1}\frac{d\sigma}{(1+x^2+y^2)^{3/2}}$，其中 $D_1=\{0\le x\le1,0\le y\le x\}$。
用极坐标：$D_1=\{0\le\theta\le\frac\pi4,0\le r\le\frac1{\cos\theta}\}$，
$$I=2\int_0^{\pi/4}d\theta\int_0^{1/\cos\theta}\frac{r\,dr}{(1+r^2)^{3/2}}=\frac\pi2-2\int_0^{\pi/4}\frac{d\sin\theta}{\sqrt{2-\sin^2\theta}}=\frac\pi2-2\arcsin\frac{\sin\theta}{\sqrt2}\Big|_0^{\pi/4}=\frac\pi2-\frac\pi3=\frac\pi6.$$
选 (D)。
【评注】区域关于 $y=x$ 对称时 $\iint_Df(x,y)=\iint_Df(y,x)$；$\int\frac{dr}{(1+r^2)^{3/2}}$ 型用换元。` },
      { n: 179, q: R`设 $D=\{(x,y)\mid x^2+y^2\geqslant1,x^2+y^2\leqslant9,x\leqslant\sqrt3y,y\leqslant\sqrt3x\}$，则 $\displaystyle\iint\limits_D\arctan\dfrac yx\mathrm{d}\sigma=$
(A) $\dfrac\pi6$。 (B) $\dfrac{\pi^2}6$。 (C) $\dfrac\pi3$。 (D) $\dfrac{\pi^2}3$。`, a: R`(B)`, sol: R`【分析】极坐标下 $D=\{\frac\pi6\le\theta\le\frac\pi3,1\le r\le3\}$，$\arctan\frac yx=\theta$。故
$$I=\int_{\pi/6}^{\pi/3}\theta\,d\theta\int_1^3r\,dr=\frac12\left(\frac{\pi^2}{9}-\frac{\pi^2}{36}\right)\cdot\frac12(9-1)=\frac{\pi^2}{6}.$$
选 (B)。
【评注】$\theta$ 的范围由 $x\le\sqrt3y$（$\theta\ge\frac\pi6$）与 $y\le\sqrt3x$（$\theta\le\frac\pi3$）确定。` },
      { n: 180, q: R`设积分区域 $D$ 由 $y=x$ 与 $y^2=x$ 围成，则 $\displaystyle\iint\limits_D\dfrac{\sin\pi y}{y}\mathrm{d}\sigma=$
(A) $\pi$。 (B) $-\pi$。 (C) $\dfrac1\pi$。 (D) $-\dfrac1\pi$。`, a: R`(C)`, sol: R`【分析】$D=\{0\le y\le1,y^2\le x\le y\}$，故
$$I=\int_0^1dy\int_{y^2}^y\frac{\sin\pi y}{y}dx=\int_0^1(1-y)\sin\pi y\,dy=\frac1\pi.$$
选 (C)。
【评注】先对 $x$ 积分得到 $(1-y)$；$\int_0^1(1-y)\sin\pi y\,dy=\frac1\pi$。` },
      { n: 181, q: R`设平面区域 $D$ 由星形线 $L:\begin{cases}x=\cos^3t\\y=\sin^3t\end{cases}(0\leqslant t\leqslant\pi)$ 与 $x$ 轴围成，则 $I=\displaystyle\iint\limits_Dy\,\mathrm{d}\sigma=$
(A) $\dfrac{16}{103}$。 (B) $\dfrac{8}{103}$。 (C) $\dfrac{8}{105}$。 (D) $\dfrac{16}{105}$。`, a: R`(D)`, sol: R`【分析】$D$ 关于 $y$ 轴对称，被积函数关于 $x$ 为偶函数，故 $I=2\iint_{D_1}y\,d\sigma$（$D_1=D\cap\{x\ge0\}$）。
$L$ 右半部分为 $x^{2/3}+y^{2/3}=1$，即 $y^2=(1-x^{2/3})^3$。于是
$$I_1=\int_0^1dx\int_0^{y(x)}y\,dy=\frac12\int_0^1(1-x^{2/3})^3dx\xlongequal{x^{1/3}=\sin t}\frac32\int_0^{\pi/2}(\cos^6t-\cos^8t)dt=\frac8{105}.$$
故 $I=2I_1=\frac{16}{105}$。选 (D)。
【评注】星形线右半 $y=(1-x^{2/3})^{3/2}$；用 $\int_0^{\pi/2}\cos^nt$ 公式。` },
      { n: 182, q: R`设有一半径为 $R$ 的圆盘，其中心在坐标原点处。圆盘上任一点 $(x,y)$ 处的密度 $\rho(x,y)$ 与该点到点 $(R,0)$ 的距离的平方成正比，比例常数 $k>0$。则该圆盘的重心坐标是
(A) $\left(0,-\dfrac R4\right)$。 (B) $\left(0,-\dfrac R3\right)$。 (C) $\left(-\dfrac R4,0\right)$。 (D) $\left(-\dfrac R3,0\right)$。`, a: R`(D)`, sol: R`【分析】$\rho(x,y)=k[(x-R)^2+y^2]$。质量分布关于 $x$ 轴对称，故 $\bar y=0$。
$$M=\iint_D\rho\,d\sigma=k\iint_D(x^2-2Rx+R^2+y^2)d\sigma=k\iint_D(x^2+y^2)d\sigma+kR^2\cdot\pi R^2=\frac32k\pi R^4,$$
$$M_x=\iint_Dx\rho\,d\sigma=k\iint_D(x^3-2Rx^2+R^2x+xy^2)d\sigma=-2kR\iint_Dx^2d\sigma=-kR\iint_D(x^2+y^2)d\sigma=-\frac12k\pi R^5.$$
故 $\bar x=\frac{M_x}{M}=-\frac R3$，重心 $\left(-\frac R3,0\right)$。选 (D)。
【评注】对称性使 $\bar y=0$；用 $\iint_D(x^2+y^2)d\sigma=\frac{\pi R^4}{2}$。` },
      { n: 183, q: R`设 $y=y(x)$ 在 $[0,+\infty)$ 可导，在任意 $x\in(0,+\infty)$ 处的增量 $\Delta y=y(x+\Delta x)-y(x)$ 满足 $\Delta y(1+\Delta y)=\dfrac{y\Delta x}{1+x}+\alpha$，其中 $\alpha$ 当 $\Delta x\to0$ 时是 $\Delta x$ 等价无穷小，又 $y(0)=1$。则 $y(x)$ 等于
(A) $(1+x)[\ln(1+x)+1]$。 (B) $\ln(1+x)+1$。 (C) $\dfrac12\left(\dfrac1{1+x}+1+x\right)$。 (D) $1+x$。`, a: R`(A)`, sol: R`【分析】两边除以 $\Delta x$ 并令 $\Delta x\to0$，注意 $\frac{\Delta y}{\Delta x}\to y'$、$\Delta y\to0$、$\frac\alpha{\Delta x}\to1$，得初值问题
$$\begin{cases}y'-\dfrac{y}{1+x}=1,\\y(0)=1.\end{cases}$$
积分因子 $\frac1{1+x}$：$\left(\frac y{1+x}\right)'=\frac1{1+x}$，积分得 $\frac y{1+x}=\ln(1+x)+C$，$y=(1+x)[\ln(1+x)+C]$。由 $y(0)=1$ 得 $C=1$，故 $y=(1+x)[\ln(1+x)+1]$。选 (A)。
【评注】增量式化为微分方程；$\alpha\sim\Delta x$。` },
      { n: 184, q: R`设 $\left[f(x)-e^x\right]\sin y\,\mathrm{d}x-f(x)\cos y\,\mathrm{d}y$ 是一个二元函数的全微分，且 $f(x)$ 具有一阶连续导数，$f(0)=0$，则 $f(x)$ 等于
(A) $\dfrac{e^x+e^{-x}}2-1$。 (B) $1-\dfrac{e^x+e^{-x}}2$。 (C) $\dfrac{e^{-x}-e^x}2$。 (D) $\dfrac{e^x-e^{-x}}2$。`, a: R`(D)`, sol: R`【分析】设 $du=[f(x)-e^x]\sin y\,dx-f(x)\cos y\,dy$，则 $u_x=[f(x)-e^x]\sin y$、$u_y=-f(x)\cos y$。由 $u_{xy}=u_{yx}$：
$$\frac{\partial}{\partial y}\left([f(x)-e^x]\sin y\right)=[f(x)-e^x]\cos y,\qquad \frac{\partial}{\partial x}(-f(x)\cos y)=-f'(x)\cos y,$$
故 $f(x)-e^x=-f'(x)$，即 $f'(x)+f(x)=e^x$。解之得 $f(x)=e^{-x}\left(\frac12e^{2x}+C\right)$。由 $f(0)=0$ 得 $C=-\frac12$，故 $f(x)=\frac{e^x-e^{-x}}2$。选 (D)。
【评注】全微分条件 $u_{xy}=u_{yx}$ 给出 $f$ 的一阶线性方程；$\cos y$ 约去。` },
      { n: 185, q: R`设 $y=y(x)$ 是微分方程 $\left(y+\sqrt{x^2+y^2}\right)\mathrm{d}x=x\,\mathrm{d}y$ 满足初值 $y(1)=0$ 的特解，则 $\displaystyle\int_1^2y(x)\mathrm{d}x=$
(A) $\dfrac34$。 (B) $\dfrac23$。 (C) $\dfrac32$。 (D) $\dfrac13$。`, a: R`(B)`, sol: R`【分析】方程是齐次方程。令 $y=xu$，$dy=x\,du+u\,dx$，代入化简得 $\sqrt{1+u^2}\,dx=x\,du$，分离变量 $\frac{du}{\sqrt{1+u^2}}=\frac{dx}x$，积分得通解 $y+\sqrt{x^2+y^2}=Cx^2$。由 $y(1)=0$ 得 $C=1$。
当 $x>0$ 时由 $y+\sqrt{x^2+y^2}=x^2$ 可得 $\sqrt{x^2+y^2}-y=1$，解得 $y=\frac12(x^2-1)$。于是
$$\int_1^2y(x)dx=\frac12\int_1^2(x^2-1)dx=\frac12\left(\frac73-1\right)=\frac23.$$
选 (B)。
【评注】齐次方程令 $y=xu$；由 $y+\sqrt{x^2+y^2}=x^2$ 反解出 $y$。` },
      { n: 186, q: R`设 $y=y(x)$ 是 $y''+by'+cy=0$ 的解，其中 $b,c$ 为正常数，则 $\lim\limits_{x\to+\infty}y(x)$
(A) 与解 $y(x)$ 的初值 $y(0),y'(0)$ 有关，与 $b,c$ 无关。
(B) 与解 $y(x)$ 的初值 $y(0),y'(0)$ 及 $b,c$ 均无关。
(C) 与解 $y(x)$ 的初值 $y(0),y'(0)$ 及 $c$ 无关，只与 $b$ 有关。
(D) 与解 $y(x)$ 的初值 $y(0),y'(0)$ 及 $b$ 无关，只与 $c$ 有关。`, a: R`(B)`, sol: R`【分析】特征方程 $\lambda^2+b\lambda+c=0$，$b,c>0$ 时特征根实部均为负（无论相异实根、重根还是共轭复根）。由 $\lim\limits_{x\to+\infty}e^{ax}=\lim\limits_{x\to+\infty}xe^{ax}=\lim\limits_{x\to+\infty}e^{ax}\cos\beta x=\lim\limits_{x\to+\infty}e^{ax}\sin\beta x=0$（$a<0$），知对任一解 $y$ 均有 $\lim\limits_{x\to+\infty}y(x)=0$。选 (B)。
【评注】$b,c>0$ 保证特征根实部为负，故任何解都趋于 0，与初值、$b,c$ 无关。` },
      { n: 187, q: R`若 $A,B$ 为非零常数，$C_1,C_2$ 为任意常数，则微分方程 $y''+k^2y=\cos x$ 的通解应具有形式
(A) $C_1\cos kx+C_2\sin kx+A\sin x+B\cos x$。 (B) $C_1\cos kx+C_2\sin kx+Ax\cos x$。
(C) $C_1\cos kx+C_2\sin kx+Ax\sin x$。 (D) $C_1\cos kx+C_2\sin kx+Ax\sin x+Bx\cos x$。`, a: R`(C)`, sol: R`【分析】齐次通解为 $C_1\cos kx+C_2\sin kx$，只需看非齐次特解形式。
若 $k\neq1$，特解形如 $A\sin x+B\cos x$，经验算特解为 $\frac1{k^2-1}\cos x$，即 $A=0$、$B=\frac1{k^2-1}$，与「$A,B$ 均非零」不符，故 (A) 错。
若 $k=1$，$\lambda=\pm i$ 是特征根，特解应形如 $Ax\sin x+Bx\cos x$，代入 $y''+y=\cos x$ 得 $A=\frac12$、$B=0$，故为 $Ax\sin x$。选 (C)。
【评注】$\cos x$ 的共振情形（$k=1$）要乘 $x$；题设 $A,B$ 非零排除 $B=0$ 的情形。` },
      { n: 188, q: R`设线性无关的函数 $y_1,y_2,y_3$ 都是二阶非齐次线性微分方程 $y''+p(x)y'+q(x)y=f(x)$ 的解，$C_1,C_2$ 是任意常数，则该非齐次方程的通解是
(A) $C_1y_1+C_2y_2+y_3$。 (B) $C_1y_1+C_2y_2-(C_1+C_2)y_3$。
(C) $C_1y_1+C_2y_2-(1-C_1-C_2)y_3$。 (D) $C_1y_1+C_2y_2+(1-C_1-C_2)y_3$。`, a: R`(D)`, sol: R`【分析】非齐次通解 = 齐次通解 + 非齐次特解。$y_1-y_3$、$y_2-y_3$ 是齐次方程的两个线性无关解，故齐次通解为 $C_1(y_1-y_3)+C_2(y_2-y_3)$，加特解 $y_3$ 得
$$y=C_1(y_1-y_3)+C_2(y_2-y_3)+y_3=C_1y_1+C_2y_2+(1-C_1-C_2)y_3.$$
选 (D)。
【评注】(B) 是齐次通解；(C) 中 $y_1+y_3$ 不是齐次解；只有 (D) 结构正确。` },
      { n: 189, q: R`设 $a,b,c$ 为常数，则微分方程 $y''-3y'+2y=3x-2e^x$ 的特解的形式为
(A) $(ax+b)e^x$。 (B) $(ax+b)xe^x$。 (C) $(ax+b)+ce^x$。 (D) $(ax+b)+cxe^x$。`, a: R`(D)`, sol: R`【分析】特征方程 $\lambda^2-3\lambda+2=0$，$\lambda_1=1,\lambda_2=2$。
对 $y''-3y'+2y=-2e^x$：$\lambda=1$ 是单特征根，特解形如 $cxe^x$。
对 $y''-3y'+2y=3x$：$\lambda=0$ 不是特征根，特解形如 $ax+b$。
故原方程特解 $=cxe^x+(ax+b)$。选 (D)。
【评注】右端拆成两项分别设特解；$e^x$ 因 $\lambda=1$ 是单根要乘 $x$。` },
      { n: 190, q: R`设 $C_1,C_2$ 是两个任意常数，则函数 $y=C_1e^{2x}+C_2e^{-x}-2xe^{-x}$ 满足的一个微分方程是
(A) $y''+y'-2y=6e^{-x}$。 (B) $y''-y'-2y=6e^{-x}$。 (C) $y''+y'-2y=3xe^{-x}$。 (D) $y''-y'-2y=3xe^{-x}$。`, a: R`(B)`, sol: R`【分析】特征根 $\lambda_1=2,\lambda_2=-1$，特征方程 $(\lambda-2)(\lambda+1)=\lambda^2-\lambda-2=0$，故方程形如 $y''-y'-2y=f(x)$，只在 (B)(D) 中选。
$\lambda=-1$ 是单特征根，故非齐次项不能含 $xe^{-x}$ 型特解，排除 (D)。取 $\bar y=-2xe^{-x}$，则 $f=\bar y''-\bar y'-2\bar y$：
$\bar y'=2(x-1)e^{-x}$，$\bar y''=2(2-x)e^{-x}$，故 $f=2(2-x)e^{-x}-2(x-1)e^{-x}+4xe^{-x}=6e^{-x}$。选 (B)。
【评注】由齐次解定特征方程（左端），再由特解代入定右端。` },
      { n: 191, q: R`设 $C_1,C_2,C_3$ 是三个任意常数，则方程 $y'''+y''+y'+y=0$ 的通解形式为
(A) $C_1e^x+C_2\cos x+C_3\sin x$。 (B) $C_1e^{-x}+C_2\cos x+C_3\sin x$。
(C) $C_1e^{2x}+C_2\cos2x+C_3\sin2x$。 (D) $C_1e^{-2x}+C_2\cos2x+C_3\sin2x$。`, a: R`(B)`, sol: R`【分析】特征方程 $\lambda^3+\lambda^2+\lambda+1=(\lambda+1)(\lambda^2+1)=0$，特征根 $\lambda_1=-1$、$\lambda_{2,3}=\pm i$。
故通解 $y=C_1e^{-x}+C_2\cos x+C_3\sin x$。选 (B)。
【评注】分组分解 $\lambda^2(\lambda+1)+(\lambda+1)$；$\pm i$ 对应 $\cos x,\sin x$。` },
      { n: 192, q: R`设 $f_1(x),f_2(x)$ 为二阶常系数线性微分方程 $y''+py'+qy=0$ 的两个特解，$C_1,C_2$ 是两个任意常数，则 $C_1f_1(x)+C_2f_2(x)$ 是该方程通解的充分条件是
(A) $f_1(x)f_2'(x)-f_2(x)f_1'(x)=0$。 (B) $f_1(x)f_2'(x)+f_2(x)f_1'(x)=0$。
(C) $f_1(x)f_2'(x)+f_2(x)f_1'(x)\neq0$。 (D) $f_1(x)f_2'(x)-f_2(x)f_1'(x)\neq0$。`, a: R`(D)`, sol: R`【分析】$C_1f_1+C_2f_2$ 为通解 $\iff f_1,f_2$ 线性无关 $\iff$ 朗斯基行列式 $f_1f_2'-f_2f_1'\neq0$。选 (D)。
【评注】任二解满足 $f_1'f_2-f_1f_2'=Ce^{-\int p\,dx}$，或恒为 0（相关）或恒不为 0（无关）。` },
      { n: 193, q: R`已知曲线 $y=y(x)$ 经过原点，且在原点的切线平行于直线 $2x-y-5=0$，而 $y(x)$ 满足微分方程 $y''-6y'+9y=e^{3x}$，则此曲线的方程为
(A) $y=\sin2x$。 (B) $y=\dfrac12x^2e^{2x}+\sin2x$。 (C) $y=\dfrac x2(x+4)e^{3x}$。 (D) $y=(x^2\cos x+\sin2x)e^{3x}$。`, a: R`(C)`, sol: R`【分析】由题设 $y(0)=0$、$y'(0)=2$。特征方程 $\lambda^2-6\lambda+9=(\lambda-3)^2=0$，$\lambda=3$ 是二重根，齐次通解 $C_1e^{3x}+C_2xe^{3x}$。
非齐次项 $e^{3x}$，$\lambda=3$ 是二重根，设特解 $Ax^2e^{3x}$，代入得 $A=\frac12$。通解 $y=\left(C_1+C_2x+\frac12x^2\right)e^{3x}$。
由 $y(0)=0$ 得 $C_1=0$，由 $y'(0)=2$ 得 $C_2=2$，故 $y=\left(2x+\frac12x^2\right)e^{3x}=\frac x2(x+4)e^{3x}$。选 (C)。
【评注】二重根 $+e^{3x}$ ⇒ 特解含 $x^2e^{3x}$；由选项（含三角函数）也可排除 (A)(B)(D)。` },
      { n: 194, q: R`初值问题 $\begin{cases}1+(y')^2=2yy'',\\y(1)=1,y'(1)=-1\end{cases}$ 的特解是
(A) $y=\dfrac12(x^2-4x+5)$。 (B) $y=\dfrac12(x^2-3x+4)$。 (C) $y=-x^2+x+1$。 (D) $y=x^2-3x+3$。`, a: R`(A)`, sol: R`【分析】方程不显含 $x$，令 $p=y'$，以 $y$ 为自变量，$y''=p\frac{dp}{dy}$，代入得 $1+p^2=2yp\frac{dp}{dy}$，分离变量 $\frac{2p\,dp}{1+p^2}=\frac{dy}{y}$，积分得 $1+p^2=Cy$。由 $y=1$ 时 $p=-1$ 得 $C=2$，故 $p=-\sqrt{2y-1}$。
$\frac{dy}{dx}=-\sqrt{2y-1}$，分离变量得 $\sqrt{2y-1}=-x+C_1$。由 $y(1)=1$ 得 $C_1=2$，故 $\sqrt{2y-1}=2-x$，即 $y=\frac12(x^2-4x+5)$。选 (A)。
【评注】不显含 $x$ 的二阶方程令 $p=y'$、$y''=p\frac{dp}{dy}$；注意 $p<0$ 取负根。` },
      { n: 195, q: R`设 $P(x),Q(x)$ 在 $(-\infty,+\infty)$ 连续，以 $T$ 为周期，函数 $y=y(x)$ 是
$$\frac{\mathrm{d}y}{\mathrm{d}x}+P(x)y=Q(x)\qquad(*)$$
的解，则 $y(0)=y(T)$ 是 $y=y(x)$ 以 $T$ 为周期的
(A) 必要非充分条件。 (B) 充分非必要条件。 (C) 充要条件。 (D) 既非充分又非必要条件。`, a: R`(C)`, sol: R`【分析】若 $y$ 以 $T$ 为周期，显然 $y(0)=y(T)$。
反之设 $y(0)=y(T)$，令 $\Phi(x)=y(x+T)-y(x)$，则
$$\Phi'(x)=y'(x+T)-y'(x)=-P(x)[y(x+T)-y(x)]=-P(x)\Phi(x)$$
（用 $P,Q$ 以 $T$ 为周期）。即 $\Phi'+P\Phi=0$，乘 $e^{\int_0^xP(t)dt}$ 得 $\frac{d}{dx}\left(\Phi e^{\int_0^xP}\right)=0$，故 $\Phi e^{\int_0^xP}=C$。由 $\Phi(0)=y(T)-y(0)=0$ 得 $C=0$，于是 $\Phi\equiv0$，$y$ 以 $T$ 为周期。选 (C)。
【评注】构造 $\Phi$，证明它满足齐次线性方程且初值为 0，从而恒为 0。` },
      { n: 196, q: R`设 $y(x)$ 是四阶常系数线性微分方程 $y^{(4)}+y''=0$ 的解，且当 $x\to0$ 时 $y(x)$ 与 $x^3$ 是等价无穷小，则 $y^{(3)}(0)=$
(A) 0。 (B) 1。 (C) 6。 (D) 3。`, a: R`(C)`, sol: R`【分析】$y(x)\sim x^3$（$x\to0$）$\iff y(x)=x^3+o(x^3)$ $\iff y(0)=y'(0)=y''(0)=0$，$y^{(3)}(0)=3!=6$。选 (C)。
【评注】等价无穷小 $y\sim x^n$ 直接给出 $y^{(n)}(0)=n!$，与是否为方程的解无关。` },
      { n: 197, q: R`设函数 $f(x)$ 连续，且满足 $f(x)=\cos2x-4\displaystyle\int_0^x(x-t)f(t)\,\mathrm{d}t$，则 $f(x)=$
(A) $\cos2x-x\sin2x$。 (B) $\cos2x+x\sin2x$。 (C) $\sin2x-x\cos2x$。 (D) $\sin2x+x\cos2x$。`, a: R`(A)`, sol: R`【分析】令 $x=0$ 得 $f(0)=1$。原式即 $f(x)=\cos2x-4x\int_0^xf(t)dt+4\int_0^xtf(t)dt$，两边求导：
$$f'(x)=-2\sin2x-4\int_0^xf(t)dt-4xf(x)+4xf(x)=-2\sin2x-4\int_0^xf(t)dt,$$
令 $x=0$ 得 $f'(0)=0$。再求导：$f''(x)=-4\cos2x-4f(x)$，即 $f''+4f=-4\cos2x$。
解初值问题 $y''+4y=-4\cos2x$，$y(0)=1$，$y'(0)=0$：$\lambda=\pm2i$ 是特征根，设特解 $x(A\cos2x+B\sin2x)$，代入得 $A=0$、$B=-1$，通解 $y=C_1\cos2x+C_2\sin2x-x\sin2x$。由初值得 $C_1=1$、$C_2=0$，故 $f(x)=\cos2x-x\sin2x$。选 (A)。
【评注】先把 $\int_0^x(x-t)f(t)dt$ 拆开再求导；$\cos2x$ 是共振项要乘 $x$。` },
      { n: 198, q: R`设 $L$ 是连接两点 $A(0,1)$ 与 $B(1,0)$ 的一条凸弧，$P(x,y)$ 是 $L$ 上的任意一点。已知凸弧 $L$ 与弦 $AP$ 围成的平面图形的面积等于 $x^3$，则 $L$ 的方程是
(A) $1-3x+4x^3$。 (B) $1-4x+3x^3$。 (C) $1+3x-4x^3$。 (D) $1+4x-3x^3$。`, a: R`(C)`, sol: R`【分析】设 $L:y=y(x)$，则 $y(0)=1$、$y(1)=0$，且 $0\le x<1$ 时 $y>0$。曲边梯形面积 $\int_0^xy(t)dt$ 减梯形面积 $\frac x2(1+y(x))$ 等于 $x^3$：
$$\int_0^xy(t)dt-\frac x2(1+y(x))=x^3.$$
求导整理得 $y-\frac12(1+y)-\frac x2y'=3x^2$，即 $y'-\frac yx=-8x^2-\frac1x$。积分因子 $\frac1x$：$\left(\frac yx\right)'=-8x-\frac1{x^2}$，积分得 $y=1+Cx-4x^3$。由 $y(1)=0$ 得 $C=3$，故 $y=1+3x-4x^3$。选 (C)。
【评注】面积 = 曲边梯形 − 梯形；求导得 $y$ 的一阶线性方程。` },
      { n: 199, q: R`已知物体的冷却速度正比于物体的温度与环境温度之差。若室温为 $20℃$ 时一个物体从 $100℃$ 冷却到 $60℃$ 需要经过 $20$ 分钟，则该物体从 $100℃$ 冷却到 $30℃$ 需要经过
(A) 40 分钟。 (B) 60 分钟。 (C) 80 分钟。 (D) 100 分钟。`, a: R`(B)`, sol: R`【分析】设温度 $T=T(t)$，由冷却定律 $\frac{dT}{dt}=-k(T-20)$，通解 $T=Ce^{-kt}+20$。
由 $T(0)=100$ 得 $C=80$，故 $T=80e^{-kt}+20$。由 $T(20)=60$ 得 $60=80e^{-20k}+20$，即 $k=\frac1{20}\ln2$。
再由 $T=30$：$30=80e^{-\frac{\ln2}{20}t}+20$，即 $\frac18=e^{-\frac{\ln2}{20}t}$，解得 $t=60$。选 (B)。
【评注】牛顿冷却定律 $T'=-k(T-T_0)$；由两个时刻条件定 $C,k$。` },
      { n: 200, q: R`一质量为 $m$ 的子弹进入沙箱时速度为 $v_0$，所受的阻力与子弹的速度成正比（比例系数 $k>0$），则子弹能打进的深度是
(A) $\dfrac{2m}kv_0$。 (B) $\dfrac{2k}mv_0$。 (C) $\dfrac mk v_0$。 (D) $\dfrac km v_0$。`, a: R`(C)`, sol: R`【分析】设深度 $s(t)$，由牛顿第二定律 $m\frac{d^2s}{dt^2}=-k\frac{ds}{dt}$。令 $v=\frac{ds}{dt}$，则 $\frac{dv}{dt}=v\frac{dv}{ds}$，代入得 $mv\frac{dv}{ds}=-kv$，即 $dv=-\frac km ds$。
由 $v|_{s=0}=v_0$ 积分得 $v=-\frac km s+v_0$。由 $v=0$ 得 $s=\frac mk v_0$。选 (C)。
【评注】阻力与速度成正比 ⇒ $dv/ds$ 为常数，深度与初速度成正比。` }
    ]
  };
})();
