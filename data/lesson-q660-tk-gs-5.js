window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q660_s17"] = {
    id: "q660_s17",
    ch: "660题 · 填空题 · 高等数学",
    title: "填空题 第 401–422 题",
    probTitle: "填空题（含原书详解）",
    book: "《数学基础过关660题（数学二）》",
    problems: [
      { n: 401, q: R`设 $f(x,y)=yx^{xy}$，则 $\dfrac{\partial f}{\partial x}=\underline{\qquad}$，$\left.\dfrac{\partial^2f}{\partial x\partial y}\right|_{(1,1)}=\underline{\qquad}$。`, a: R`$y^2x^{xy}(\ln x+1)$；$2$`, sol: R`【分析】$\frac{\partial f}{\partial x}=y\frac{\partial}{\partial x}(e^{xy\ln x})=yx^{xy}\frac{\partial}{\partial x}(xy\ln x)=yx^{xy}\cdot y(\ln x+1)=y^2x^{xy}(\ln x+1)$。
$\left.\frac{\partial^2f}{\partial x\partial y}\right|_{(1,1)}=\frac{d}{dy}\left(\frac{\partial f(1,y)}{\partial x}\right)\Big|_{y=1}=(y^2)'\Big|_{y=1}=2$。` },
      { n: 402, q: R`设函数 $f$ 具有二阶连续偏导数，且 $u=f\left(xy,\ y^2+z^2,\ \dfrac yz\right)$，则 $\dfrac{\partial^2u}{\partial y\partial z}=\underline{\qquad}$。`, a: R`$2xzf''_{12}-\frac{xy}{z^2}f''_{13}+4yzf''_{22}+2\left(1-\frac{y^2}{z^2}\right)f''_{23}-\frac y{z^3}f''_{33}-\frac1{z^2}f'_3$`, sol: R`【分析】由一阶全微分形式不变性
$$du=yf'_1dx+\left(xf'_1+2yf'_2+\frac1zf'_3\right)dy+\left(2zf'_2-\frac y{z^2}f'_3\right)dz,$$
故 $\frac{\partial u}{\partial y}=xf'_1+2yf'_2+\frac1zf'_3$，$\frac{\partial u}{\partial z}=2zf'_2-\frac y{z^2}f'_3$。再对 $z$ 求偏导（注意 $f'_i$ 仍是复合函数）整理即得上式。` },
      { n: 403, q: R`设 $f(u,v)$ 是连续函数，$z=\displaystyle\int_0^{xy^2}\left[\int_0^uf(u,v)\mathrm dv\right]\mathrm du$，则 $\mathrm dz=\underline{\qquad}$。`, a: R`$\left[\displaystyle\int_0^{xy^2}f(xy^2,v)\mathrm dv\right](y^2\mathrm dx+2xy\,\mathrm dy)$`, sol: R`【分析】由一阶全微分形式不变性：$dz=\left[\int_0^{xy^2}f(xy^2,v)dv\right]d(xy^2)=\left[\int_0^{xy^2}f(xy^2,v)dv\right](y^2dx+2xy\,dy)$。
【评注】也可先求 $\frac{\partial z}{\partial x}=y^2\int_0^{xy^2}f(xy^2,v)dv$、$\frac{\partial z}{\partial y}=2xy\int_0^{xy^2}f(xy^2,v)dv$，再写全微分。` },
      { n: 404, q: R`设 $z=f(x,y)$ 满足 $\dfrac{\partial^2z}{\partial x\partial y}=x+y$，且 $f(x,0)=x,f(0,y)=y^2$，则 $f(x,y)=\underline{\qquad}$。`, a: R`$\frac12x^2y+\frac12xy^2+x+y^2$`, sol: R`【分析】由 $\frac{\partial^2z}{\partial x\partial y}=x+y$ 得 $\frac{\partial z}{\partial x}=xy+\frac12y^2+C_1(x)$，再对 $x$ 积分得 $f(x,y)=\frac12x^2y+\frac12xy^2+\int C_1(x)dx+C_2(y)$。
由 $f(x,0)=x$ 得 $\int C_1(x)dx+C_2(0)=x$，故 $C_1(x)=1$；由 $f(0,y)=C_2(y)=y^2$。故 $f(x,y)=\frac12x^2y+\frac12xy^2+x+y^2$。
【评注】$\int(x+y)dy=xy+\frac12y^2+C_1(x)$，其中 $C_1(x)$ 是 $x$ 的任意函数。` },
      { n: 405, q: R`若方程组 $\begin{cases}x-2y+z+e^z=0\\xy^2+\ln y=1\end{cases}$ 确定隐函数 $y(x)$ 与 $z(x)$，且 $y(1)=1,z(1)=0$，则 $y'(1)-z'(1)=\underline{\qquad}$。`, a: R`$\frac12$`, sol: R`【分析】两方程对 $x$ 求导：$\begin{cases}1-2y'+z'+e^zz'=0,\\y^2+2xyy'+\frac1yy'=0.\end{cases}$ 代入 $x=1,y=1,z=0$：$\begin{cases}1-2y'(1)+2z'(1)=0,\\1+3y'(1)=0,\end{cases}$ 解得 $y'(1)=-\frac13$，$z'(1)=-\frac56$，故 $y'(1)-z'(1)=\frac12$。` },
      { n: 406, q: R`设 $f(x,y)=\ln|x+y|-\sin(xy)$，则 $\dfrac{\partial^2f}{\partial x\partial y}$ 在点 $(1,\pi)$ 处的值为 $\underline{\qquad}$。`, a: R`$\frac{\pi(2+\pi)}{(1+\pi)^2}$`, sol: R`【分析】$\frac{\partial f}{\partial x}=\frac1{x+y}-y\cos(xy)$，$\frac{\partial^2f}{\partial x\partial y}=-\frac1{(x+y)^2}-\cos(xy)+xy\sin(xy)$。
代入 $(1,\pi)$：$-\frac1{(1+\pi)^2}-\cos\pi+\pi\sin\pi=1-\frac1{(1+\pi)^2}=\frac{\pi(2+\pi)}{(1+\pi)^2}$。` },
      { n: 407, q: R`设 $f(x)$ 为连续函数，且 $x^2+y^2+z^2=\displaystyle\int_x^yf(x+y-t)\mathrm dt$ 确定二元函数 $z=z(x,y)$，则 $z\left(\dfrac{\partial z}{\partial x}+\dfrac{\partial z}{\partial y}\right)=\underline{\qquad}$。`, a: R`$\frac12[f(y)-f(x)]-(x+y)$`, sol: R`【分析】令 $x+y-t=s$，则 $\int_x^yf(x+y-t)dt=\int_x^yf(s)ds$，方程化为 $x^2+y^2+z^2=\int_x^yf(s)ds$。两边求全微分：
$2xdx+2ydy+2zdz=f(y)dy-f(x)dx$，即 $zdz=-\left(x+\frac12f(x)\right)dx+\left(-y+\frac12f(y)\right)dy$。
故 $z\left(\frac{\partial z}{\partial x}+\frac{\partial z}{\partial y}\right)=-\left(x+\frac12f(x)\right)+\left(-y+\frac12f(y)\right)=\frac12[f(y)-f(x)]-(x+y)$。` },
      { n: 408, q: R`已知函数 $z=f(x,y)$ 在点 $(1,2)$ 处可微，且 $f(1,2)=1,f'_x(1,2)=2,f'_y(1,2)=3$，设函数 $\varphi(x)=f(x,2f(x,2x))$，则 $\varphi'(1)=\underline{\qquad}$。`, a: R`$50$`, sol: R`【分析】令 $\psi(x)=f(x,2x)$，则 $\varphi(x)=f(x,2\psi(x))$，$\varphi'(x)=f'_1(x,2\psi(x))+2\psi'(x)f'_2(x,2\psi(x))$。
$\psi(1)=f(1,2)=1$；$\psi'(x)=f'_1(x,2x)+2f'_2(x,2x)$，$\psi'(1)=2+2\times3=8$。
故 $\varphi'(1)=f'_1(1,2)+2\cdot8\cdot f'_2(1,2)=2+16\times3=50$。
【评注】用 $f'_1,f'_2$ 表示对第一、第二变量的偏导，避免记号混淆。` },
      { n: 409, q: R`设 $(ax^2y^2-2xy^2)\mathrm dx+(2x^3y+bx^2y+1)\mathrm dy$ 是一个函数 $f(x,y)$ 的全微分，则 $a=\underline{\qquad}$，$b=\underline{\qquad}$，$f(x,y)=\underline{\qquad}$。`, a: R`$a=3$；$b=-2$；$f(x,y)=x^3y^2-x^2y^2+y+C$`, sol: R`【分析】由全微分条件 $\frac{\partial Q}{\partial x}=\frac{\partial P}{\partial y}$：$6x^2y+2bxy=2ax^2y-4xy$，比较系数得 $a=3,b=-2$。
此时 $\frac{\partial f}{\partial x}=3x^2y^2-2xy^2$，对 $x$ 积分得 $f=x^3y^2-x^2y^2+C(y)$；再对 $y$ 求偏导并与 $\frac{\partial f}{\partial y}=2x^3y-2x^2y+1$ 比较得 $C'(y)=1$，$C(y)=y+C$。
故 $f(x,y)=x^3y^2-x^2y^2+y+C$。
【评注】$Pdx+Qdy$ 为全微分的必要条件 $\frac{\partial Q}{\partial x}=\frac{\partial P}{\partial y}$。` },
      { n: 410, q: R`设 $f(x,y,z)=\left(\dfrac xy\right)^{\frac1z}$，则 $\left.\mathrm df\right|_{(2,1,2)}=\underline{\qquad}$。`, a: R`$\frac1{2\sqrt2}(\mathrm dx-2\mathrm dy-\ln2\,\mathrm dz)$`, sol: R`【分析】$f(x,1,2)=\sqrt x$，$f'_x(x,1,2)=\frac1{2\sqrt x}$，$f'_x(2,1,2)=\frac1{2\sqrt2}$；$f(2,y,2)=\frac{\sqrt2}{\sqrt y}$，$f'_y(2,1,2)=-\frac1{\sqrt2}$；$f(2,1,z)=2^{1/z}$，$f'_z(2,1,2)=-\frac{\ln2}{2\sqrt2}$。
故 $df|_{(2,1,2)}=\frac1{2\sqrt2}dx-\frac1{\sqrt2}dy-\frac{\ln2}{2\sqrt2}dz=\frac1{2\sqrt2}(dx-2dy-\ln2\,dz)$。
【评注】也可用对数微分法：$d\ln f=\frac1z\left(\frac{dx}{x}-\frac{dy}{y}\right)-\frac{\ln x-\ln y}{z^2}dz$。` },
      { n: 411, q: R`由方程 $\sin(xyz)+\sqrt{x^2+y^2+z^2}=\sqrt2$ 所确定的函数 $z=z(x,y)$ 在点 $(1,0,-1)$ 处的全微分 $\mathrm dz=\underline{\qquad}$。`, a: R`$\mathrm dx-\sqrt2\,\mathrm dy$`, sol: R`【分析】两边求全微分：$\cos(xyz)[(xy)dz+(ydx+xdy)z]+\frac{xdx+ydy+zdz}{\sqrt{x^2+y^2+z^2}}=0$。
代入 $x=1,y=0,z=-1$：$\cos0\cdot[0+1\cdot dz]+\frac{dx+0-dz}{\sqrt2}=0$，即 $dz+\frac{dx-dz}{\sqrt2}=0$，解得 $dz=dx-\sqrt2\,dy$。` },
      { n: 412, q: R`设 $z=z(x,y)$ 由方程 $y+z=xf(y^2-z^2)$ 确定，且 $f$ 可微，则 $x\dfrac{\partial z}{\partial x}+z\dfrac{\partial z}{\partial y}$ 等于 $\underline{\qquad}$。`, a: R`$y$`, sol: R`【分析】令 $F=y+z-xf(y^2-z^2)$，则 $\frac{\partial z}{\partial x}=-\frac{F'_x}{F'_z}=\frac f{1+2xzf'}$，$\frac{\partial z}{\partial y}=-\frac{F'_y}{F'_z}=-\frac{1-2xyf'}{1+2xzf'}$。
故 $x\frac{\partial z}{\partial x}+z\frac{\partial z}{\partial y}=\frac{xf-z+2xyzf'}{1+2xzf'}=\frac{xf-xf+y+2xyzf'}{1+2xzf'}=y$（用 $z=xf-y$）。` },
      { n: 413, q: R`设函数 $f(u,v)$ 具有二阶连续偏导数，且满足 $4\dfrac{\partial^2f}{\partial u^2}-\dfrac{\partial^2f}{\partial v^2}=1$，又 $g(x,y)=f(x^2+y^2,xy)$，则 $\dfrac{\partial^2g}{\partial x^2}-\dfrac{\partial^2g}{\partial y^2}=\underline{\qquad}$。`, a: R`$x^2-y^2$`, sol: R`【分析】$g'_x=2xf'_u+yf'_v$，$g'_y=2yf'_u+xf'_v$。再求二阶：
$g''_{xx}=2f'_u+4x^2f''_{uu}+4xyf''_{uv}+y^2f''_{vv}$，$g''_{yy}=2f'_u+4y^2f''_{uu}+4xyf''_{uv}+x^2f''_{vv}$。
故 $g''_{xx}-g''_{yy}=(x^2-y^2)(4f''_{uu}-f''_{vv})=x^2-y^2$。` },
      { n: 414, q: R`设 $t>0$ 时，$f(t)$ 有二阶连续导数，$z=f(xy)$ 满足 $\dfrac{\partial^2z}{\partial x\partial y}=x^2y^2\ (xy>0)$，则 $f(t)=\underline{\qquad}\ (t>0)$。`, a: R`$\frac19t^3+C_1\ln t+C_2$（$C_1,C_2$ 为任意常数）`, sol: R`【分析】令 $t=xy$，则 $\frac{\partial z}{\partial x}=f'(t)y$，$\frac{\partial^2z}{\partial x\partial y}=f''(t)xy+f'(t)=tf''(t)+f'(t)$。
方程化为 $tf''(t)+f'(t)=t^2$，即 $(tf'(t))'=t^2$。积分得 $tf'(t)=\frac13t^3+C_1$，$f'(t)=\frac13t^2+\frac{C_1}t$，再积分得 $f(t)=\frac19t^3+C_1\ln t+C_2$。` },
      { n: 415, q: R`设有方程式 $x^2+y^2+z^2-2x-2y-4z-10=0$ 确定某隐函数 $z=z(x,y)>0$，则 $z=z(x,y)$ 的极值点是 $\underline{\qquad}$，相应的极值是 $\underline{\qquad}$。`, a: R`极大值点 $(1,1)$；极大值 $6$`, sol: R`【分析】对 $x$ 求偏导：$2x+2z\frac{\partial z}{\partial x}-2-4\frac{\partial z}{\partial x}=0$，得 $\frac{\partial z}{\partial x}=\frac{1-x}{z-2}$；由对称性 $\frac{\partial z}{\partial y}=\frac{1-y}{z-2}$。令偏导为 0 得驻点 $(1,1)$。
代入方程得 $z^2-4z-12=0$，$z=6$（因 $z>0$）。求二阶偏导在 $(1,1)$ 处：$A=-\frac1{z-2}|_{(1,1)}=-\frac14$，$B=0$，$C=-\frac14$。$AC-B^2=\frac1{16}>0$，$A<0$，故 $(1,1)$ 为极大值点，极大值 6。` },
      { n: 416, q: R`累次积分 $\displaystyle\int_1^2\mathrm dx\int_{\frac1x}^2ye^{xy}\mathrm dy$ 的值等于 $\underline{\qquad}$。`, a: R`$e^2\left(\frac{e^2}2-1\right)$`, sol: R`【分析】先对 $y$ 积分：令 $u=xy$，
$$\int_1^2dx\int_{1/x}^2ye^{xy}dy=\int_1^2\frac{dx}{x^2}\int_1^{2x}ue^u du=\int_1^2\frac{(2x-1)e^{2x}}{x^2}dx=\int_1^2\left(\frac2x-\frac1{x^2}\right)e^{2x}dx.$$
再分部积分：$=\frac1xe^{2x}\Big|_1^2+\int_1^2\frac{e^{2x}}{x^2}dx-\int_1^2\frac{e^{2x}}{x^2}dx=\frac{e^4}2-e^2=e^2\left(\frac{e^2}2-1\right)$。` },
      { n: 417, q: R`交换积分次序 $\displaystyle\int_0^1\mathrm dx\int_0^{x^2}f(x,y)\mathrm dy+\int_1^3\mathrm dx\int_0^{\frac12(3-x)}f(x,y)\mathrm dy=\underline{\qquad}$。`, a: R`$\displaystyle\int_0^1\mathrm dy\int_{\sqrt y}^{3-2y}f(x,y)\mathrm dx$`, sol: R`【分析】积分区域 $D=D_1\cup D_2$，其中 $D_1=\{0\leqslant x\leqslant1,0\leqslant y\leqslant x^2\}$，$D_2=\{1\leqslant x\leqslant3,0\leqslant y\leqslant\frac12(3-x)\}$。
在 $D$ 中最低纵坐标 0、最高 1，左边界 $x=\sqrt y$，右边界 $x=3-2y$。故 $D=\{0\leqslant y\leqslant1,\sqrt y\leqslant x\leqslant3-2y\}$，交换次序得 $\int_0^1dy\int_{\sqrt y}^{3-2y}f(x,y)dx$。` },
      { n: 418, q: R`将直角坐标中的累次积分转换成极坐标系下的累次积分并计算：
$I=\displaystyle\int_0^{\frac{\sqrt2}2R}e^{-y^2}\mathrm dy\int_0^ye^{-x^2}\mathrm dx+\int_{\frac{\sqrt2}2R}^{R}e^{-y^2}\mathrm dy\int_0^{\sqrt{R^2-y^2}}e^{-x^2}\mathrm dx=\underline{\qquad}$。`, a: R`$\displaystyle\int_{\frac\pi4}^{\frac\pi2}\mathrm d\theta\int_0^Re^{-r^2}r\,\mathrm dr=\frac\pi8(1-e^{-R^2})$`, sol: R`【分析】$I=\iint_De^{-(x^2+y^2)}d\sigma$，其中 $D$ 是第一象限内由 $y=x$、$x^2+y^2=R^2$ 围成的扇形，即极坐标下 $D=\{0\leqslant r\leqslant R,\frac\pi4\leqslant\theta\leqslant\frac\pi2\}$。
故 $I=\int_{\pi/4}^{\pi/2}d\theta\int_0^Re^{-r^2}r\,dr=-\frac12\cdot\frac\pi4\cdot e^{-r^2}\Big|_0^R=\frac\pi8(1-e^{-R^2})$。` },
      { n: 419, q: R`设 $f(x,y)$ 为连续函数，且 $f(x,y)=\dfrac1\pi\sqrt{x^2+y^2}\displaystyle\iint_{x^2+y^2\leqslant1}f(x,y)\mathrm d\sigma+y^2$，则 $f(x,y)=\underline{\qquad}$。`, a: R`$\frac34\sqrt{x^2+y^2}+y^2$`, sol: R`【分析】设 $A=\iint_{x^2+y^2\leqslant1}f(x,y)d\sigma$，则 $f=\frac A\pi\sqrt{x^2+y^2}+y^2$。两边在单位圆上积分：
$$A=\frac A\pi\iint\sqrt{x^2+y^2}d\sigma+\iint y^2d\sigma=\frac A\pi\int_0^{2\pi}d\theta\int_0^1r^2dr+\int_0^{2\pi}\sin^2\theta\,d\theta\int_0^1r^3dr=\frac23A+\frac\pi4,$$
故 $A=\frac34\pi$，$f(x,y)=\frac34\sqrt{x^2+y^2}+y^2$。` },
      { n: 420, q: R`设积分区域 $D$ 是由直线 $y=0,y=x$ 与曲线 $y=\sqrt{4x-x^2},y=\sqrt{9x-x^2}$ 围成的平面图形，则 $\displaystyle\iint_D\dfrac{y^2}{x^2}\mathrm d\sigma=\underline{\qquad}$。`, a: R`$\frac{65}{16}(\pi-2)$`, sol: R`【分析】曲线 $y=\sqrt{4x-x^2}$、$y=\sqrt{9x-x^2}$ 的极坐标方程为 $r=4\cos\theta$、$r=9\cos\theta$，$D=\{0\leqslant\theta\leqslant\frac\pi4,4\cos\theta\leqslant r\leqslant9\cos\theta\}$。
$$\iint_D\frac{y^2}{x^2}d\sigma=\int_0^{\pi/4}\tan^2\theta\,d\theta\int_{4\cos\theta}^{9\cos\theta}r\,dr=\frac{65}2\int_0^{\pi/4}\sin^2\theta\,d\theta=\frac{65}4\int_0^{\pi/4}(1-\cos2\theta)d\theta=\frac{65}{16}(\pi-2).$$` },
      { n: 421, q: R`设积分区域 $D=\{(x,y)\mid1\leqslant x+y\leqslant2,x\geqslant0,y\geqslant0\}$，则 $\displaystyle\iint_D\dfrac{\mathrm d\sigma}{\sqrt{x^2+y^2}}=\underline{\qquad}$。`, a: R`$\sqrt2\ln(\sqrt2+1)$`, sol: R`【分析】极坐标下 $D=\{0\leqslant\theta\leqslant\frac\pi2,\frac1{\cos\theta+\sin\theta}\leqslant r\leqslant\frac2{\cos\theta+\sin\theta}\}$，故
$$\iint_D\frac{d\sigma}{\sqrt{x^2+y^2}}=\int_0^{\pi/2}d\theta\int_{1/(\cos\theta+\sin\theta)}^{2/(\cos\theta+\sin\theta)}dr=\int_0^{\pi/2}\frac{d\theta}{\cos\theta+\sin\theta}.$$
令 $\tan\frac\theta2=t$，$\int_0^{\pi/2}\frac{d\theta}{\cos\theta+\sin\theta}=\int_0^1\frac{2dt}{1+2t-t^2}=\int_0^1\frac{2dt}{2-(1-t)^2}=\sqrt2\ln(\sqrt2+1)$。` },
      { n: 422, q: R`设函数 $f(x)$ 在区间 $[0,1]$ 上连续，且 $\displaystyle\int_0^1f(x)\mathrm dx=A$，区域 $D=\{(x,y)\mid0\leqslant x\leqslant1,x\leqslant y\leqslant1\}$，则二重积分 $I=\displaystyle\iint_Df(x)f(y)\mathrm d\sigma=\underline{\qquad}$。`, a: R`$\frac12A^2$`, sol: R`【分析】$I=\int_0^1dx\int_x^1f(x)f(y)dy=\int_0^1f(x)\left(\int_x^1f(y)dy\right)dx$。注意到 $\frac{d}{dx}\int_x^1f(y)dy=-f(x)$，故
$$I=-\int_0^1\left(\int_x^1f(y)dy\right)d\left(\int_x^1f(y)dy\right)=-\frac12\left(\int_x^1f(y)dy\right)^2\Big|_0^1=\frac12\left(\int_0^1f(y)dy\right)^2=\frac12A^2.$$` }
    ]
  };
})();
