window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["gs05_s1"] = {
    id: "gs05_s1",
    ch: "第五章 多元函数微分学",
    title: "第二节 偏导数与全微分的计算",
    book: "《高等数学辅导讲义》",
    pages: [148, 159],
    img: "assets/img/gaoshu",
    content: [
      { p: 148, md: R`2）当 $\varphi(0,0)=0$ 时，
$$\lim_{\substack{\Delta x\to0\\\Delta y\to0}}\frac{[f(\Delta x,\Delta y)-f(0,0)]-[f'_x(0,0)\Delta x+f'_y(0,0)\Delta y]}{\rho}=\lim_{\substack{\Delta x\to0\\\Delta y\to0}}\frac{|\Delta x-\Delta y|}{\sqrt{(\Delta x)^2+(\Delta y)^2}}\varphi(\Delta x,\Delta y)=0.$$
这是由于 $\frac{|\Delta x-\Delta y|}{\sqrt{(\Delta x)^2+(\Delta y)^2}}\leqslant\frac{|\Delta x|}{\sqrt{(\Delta x)^2+(\Delta y)^2}}+\frac{|\Delta y|}{\sqrt{(\Delta x)^2+(\Delta y)^2}}\leqslant2$，即为有界变量，而 $\lim\limits_{\substack{\Delta x\to0\\\Delta y\to0}}\varphi(\Delta x,\Delta y)=\varphi(0,0)=0$ 为无穷小量。故 $f(x,y)$ 在 $(0,0)$ 点处可微。
【例7】设 $f'_x(x_0,y_0)$ 存在，$f'_y(x,y)$ 在点 $(x_0,y_0)$ 处连续，证明 $f(x,y)$ 在点 $(x_0,y_0)$ 处可微。
【分析】由微分定义知，只要证明 $\Delta z=f'_x(x_0,y_0)\Delta x+f'_y(x_0,y_0)\Delta y+o(\rho).$
【证】$\Delta z=f(x_0+\Delta x,y_0+\Delta y)-f(x_0,y_0)=f(x_0+\Delta x,y_0+\Delta y)-f(x_0+\Delta x,y_0)+f(x_0+\Delta x,y_0)-f(x_0,y_0),$
由拉格朗日中值定理得 $f(x_0+\Delta x,y_0+\Delta y)-f(x_0+\Delta x,y_0)=f'_y(x_0+\Delta x,y_0+\theta\Delta y)\Delta y,$
由 $f'_x(x_0,y_0)$ 存在可知 $f(x_0+\Delta x,y_0)-f(x_0,y_0)=f'_x(x_0,y_0)\Delta x+\alpha_2\Delta x,$ 则 $\Delta z=f'_y(x_0+\Delta x,y_0+\theta\Delta y)\Delta y+f'_x(x_0,y_0)\Delta x+\alpha_2\Delta x.$
又由 $f'_y(x,y)$ 在点 $(x_0,y_0)$ 处连续可知 $\lim\limits_{\substack{\Delta x\to0\\\Delta y\to0}}f'_y(x_0+\Delta x,y_0+\theta\Delta y)=f'_y(x_0,y_0),$ 即有 $f'_y(x_0+\Delta x,y_0+\theta\Delta y)=f'_y(x_0,y_0)+\alpha_1,$ 从而有 $\Delta z=f'_y(x_0,y_0)\Delta y+\alpha_1\Delta y+f'_x(x_0,y_0)\Delta x+\alpha_2\Delta x.$ 又
$$\left|\frac{\alpha_1\Delta y+\alpha_2\Delta x}{\sqrt{(\Delta x)^2+(\Delta y)^2}}\right|\leqslant\frac{|\alpha_1||\Delta y|+|\alpha_2||\Delta x|}{\sqrt{(\Delta x)^2+(\Delta y)^2}}\leqslant|\alpha_1|+|\alpha_2|\to0.$$
即 $\alpha_1\Delta y+\alpha_2\Delta x=o(\rho)$，故 $f(x,y)$ 在点 $(x_0,y_0)$ 处可微。
### 第二节 偏导数与全微分的计算
#### 一、考试内容要点精讲
**1. 复合函数求导法**
设 $u=u(x,y),v=v(x,y)$ 可导，$z=f(u,v)$ 在相应点有连续一阶偏导数，则
$$\frac{\partial z}{\partial x}=\frac{\partial f}{\partial u}\frac{\partial u}{\partial x}+\frac{\partial f}{\partial v}\frac{\partial v}{\partial x},$$` },
      { p: 149, md: R`$$\frac{\partial z}{\partial y}=\frac{\partial f}{\partial u}\frac{\partial u}{\partial y}+\frac{\partial f}{\partial v}\frac{\partial v}{\partial y}.$$
**2. 全微分形式不变性**
设 $z=f(u,v),u=u(x,y),v=v(x,y)$ 都有连续一阶偏导数。则 $dz=\frac{\partial z}{\partial x}dx+\frac{\partial z}{\partial y}dy,dz=\frac{\partial z}{\partial u}du+\frac{\partial z}{\partial v}dv.$
**3. 隐函数求导法**
1）由一个方程所确定的隐函数
设 $F(x,y,z)$ 有连续一阶偏导数，$F'_z\neq0$，$z=z(x,y)$ 由 $F(x,y,z)=0$ 所确定。
方法：ⅰ）公式：$\frac{\partial z}{\partial x}=-\frac{F'_x}{F'_z},\frac{\partial z}{\partial y}=-\frac{F'_y}{F'_z}$；ⅱ）等式两边求导 $F'_x+F'_z\frac{\partial z}{\partial x}=0,F'_y+F'_z\frac{\partial z}{\partial y}=0$；ⅲ）利用微分形式不变性：$F'_xdx+F'_ydy+F'_zdz=0$。
2）由方程组所确定的隐函数（仅数一要求）
设 $u=u(x,y),v=v(x,y)$ 由 $\begin{cases}F(x,y,u,v)=0,\\G(x,y,u,v)=0\end{cases}$ 所确定
方法：(1) 等式两边求导 $\begin{cases}F'_x+F'_u\frac{\partial u}{\partial x}+F'_v\frac{\partial v}{\partial x}=0,\\G'_x+G'_u\frac{\partial u}{\partial x}+G'_v\frac{\partial v}{\partial x}=0.\end{cases}$
(2) 利用微分形式不变性 $\begin{cases}F'_xdx+F'_ydy+F'_udu+F'_vdv=0,\\G'_xdx+G'_ydy+G'_udu+G'_vdv=0.\end{cases}$
#### 二、常考题型的方法与技巧
###### 题型一 求一点处的偏导数与全微分
【例1】设 $f(x,y)=\begin{cases}\frac{\sqrt{|x|}}{x^2+y^2}\sin(x^2+y^2),&(x,y)\neq(0,0).\\0,&(x,y)=(0,0).\end{cases}$ 求 $f'_x(0,0)$ 和 $f'_y(0,0)$。
【解】由于 $\lim\limits_{\Delta x\to0}\frac{f(\Delta x,0)-f(0,0)}{\Delta x}=\lim\limits_{\Delta x\to0}\frac{\frac{\sqrt{|\Delta x|}}{(\Delta x)^2}\sin(\Delta x)^2}{\Delta x}=\lim\limits_{\Delta x\to0}\frac{\sqrt{|\Delta x|}}{\Delta x}=\infty,$ 则 $f'_x(0,0)$ 不存在。而 $f'_y(0,0)=\lim\limits_{\Delta y\to0}\frac{f(0,\Delta y)-f(0,0)}{\Delta y}=\lim\limits_{\Delta y\to0}\frac{0-0}{\Delta y}=0.$
【注】求分段函数在分界点处的偏导数一般都是用定义。` },
      { p: 150, md: R`【例2】设 $f(x,y)=\frac{2x+3y}{1+xy\sqrt{x^2+y^2}}$，求 $f'_x(0,0)$ 和 $f'_y(0,0)$。
【解】$f'_x(0,0)=\left.\frac{d}{dx}f(x,0)\right|_{x=0}=\left.\frac{d}{dx}(2x)\right|_{x=0}=2,$ $f'_y(0,0)=\left.\frac{d}{dy}f(0,y)\right|_{y=0}=\left.\frac{d}{dy}(3y)\right|_{y=0}=3.$
【注】求具体点处偏导数可用先代后求的方法往往比较简单。
【例3】设 $z=\ln(1+xy^2)$，则 $\left.\frac{\partial^2z}{\partial x\partial y}\right|_{(0,1)}=$______。
【解】$\frac{\partial z}{\partial x}=\frac{y^2}{1+xy^2},\left.\frac{\partial^2z}{\partial x\partial y}\right|_{(0,1)}=\left.\frac{d}{dy}\left(\frac{\partial z(0,y)}{\partial x}\right)\right|_{y=1}=\left.\frac{d}{dy}(y^2)\right|_{y=1}=2.$
【注】求具体点处高阶偏导数也可用先代后求的方法。
【例4】设 $f(x,y,z)=\sqrt{\frac{x}{y}}$，则 $df(1,1,1)=$______。
【解】$f'_x(1,1,1)=\left.\frac{d}{dx}f(x,1,1)\right|_{x=1}=\left.\frac{d}{dx}(x)\right|_{x=1}=1,$ $f'_y(1,1,1)=\left.\frac{d}{dy}f(1,y,1)\right|_{y=1}=\left.\frac{d}{dy}\left(\frac{1}{y}\right)\right|_{y=1}=\left.-\frac{1}{y^2}\right|_{y=1}=-1,$ $f'_z(1,1,1)=\left.\frac{d}{dz}f(1,1,z)\right.=\left.\frac{d}{dz}(1)\right|_{z=1}=0,$ 故 $df(1,1,1)=dx-dy.$
###### 题型二 求已给出具体表达式函数的偏导数与全微分
【例1】设 $z=(x^2+y^2)e^{-\arctan\frac{y}{x}}$，求 $\frac{\partial z}{\partial x},\frac{\partial z}{\partial y}$ 及 $dz$。
【解】$\frac{\partial z}{\partial x}=(2x+y)e^{-\arctan\frac{y}{x}},\frac{\partial z}{\partial y}=(2y-x)e^{-\arctan\frac{y}{x}},$ $dz=(2x+y)e^{-\arctan\frac{y}{x}}dx+(2y-x)e^{-\arctan\frac{y}{x}}dy.$
【例2】设 $z=(1+x^2+y^2)^{xy}$，求 $\frac{\partial z}{\partial x}$ 及 $\frac{\partial z}{\partial y}$。
【解1】由原题设可知 $z=e^{xy\ln(1+x^2+y^2)}$，两端对 $x,y$ 分别求偏导。
【解2】由原题设知 $\ln z=xy\ln(1+x^2+y^2)$，两端对 $x,y$ 分别求偏导。
【解3】令 $u=1+x^2+y^2,v=xy$，则函数可看作 $z=u^v$，由复合函数求导法可知
$$\frac{\partial z}{\partial x}=\frac{\partial z}{\partial u}\frac{\partial u}{\partial x}+\frac{\partial z}{\partial v}\frac{\partial v}{\partial x}=vu^{v-1}2x+u^v\ln u\cdot y=(1+x^2+y^2)^{xy}\left[\frac{2x^2y}{1+x^2+y^2}+y\ln(1+x^2+y^2)\right].$$
同理可得 $\frac{\partial z}{\partial y}=(1+x^2+y^2)^{xy}\left[x\ln(1+x^2+y^2)+\frac{2xy^2}{1+x^2+y^2}\right].$` },
      { p: 151, md: R`【注】解法3也可用于一元幂指函数，如 $y=(1+x^2)^{\sin x}$，可令 $u=1+x^2,v=\sin x$。
【例3】若函数 $z=f(x,y)$ 满足 $\frac{\partial^2z}{\partial y^2}=2$，且 $f(x,1)=x+2$，又 $f'_y(x,1)=x+1$，则 $f(x,y)$ 等于
(A) $y^2+(x-1)y-2$。 (B) $y^2+(x+1)y+2$。 (C) $y^2+(x-1)y+2$。 (D) $y^2+(x+1)y-2$。
【解1】容易验证，只有(C)选项中的函数同时满足题设中的三个条件，故应选(C)。
【解2】由 $\frac{\partial^2z}{\partial y^2}=2$ 知 $\frac{\partial z}{\partial y}=\int2dy=2y+\varphi(x)$。由题设条件 $f'_y(x,1)=1+x$ 知，$1+x=2+\varphi(x)\Rightarrow\varphi(x)=x-1\Rightarrow\frac{\partial z}{\partial y}=2y+x-1.$ 于是 $z=\int(2y+x-1)dy=y^2+y(x-1)+\psi(x)$。由 $f(x,1)=x+2$ 知 $x+2=1+(x-1)+\psi(x)$，从而 $\psi(x)=2$。则 $z=y^2+y(x-1)+2$。故应选(C)。
【注】解法1只适用于选择题，解法2是一般方法。
【例4】已知 $\frac{\partial^2z}{\partial x\partial y}=1$，且当 $x=0$ 时，$z=\sin y$；当 $y=0$ 时，$z=\sin x$ 则 $z(x,y)=$______。
【解1】由 $\frac{\partial^2z}{\partial x\partial y}=1$ 知 $\frac{\partial z}{\partial x}=\int1dy=y+\varphi(x)$。于是 $z=\int[y+\varphi(x)]dx=xy+\int\varphi(x)dx+\psi(y)=xy+g(x)+\psi(y),$ 其中 $g(x)=\int\varphi(x)dx$。
由 $x=0$ 时，$z=\sin y$ 知 $\sin y=g(0)+\psi(y),$ ①
由 $y=0$ 时，$z=\sin x$ 知 $\sin x=g(x)+\psi(0),$ 从而有 $z=xy+\sin x+\sin y-g(0)-\psi(0)$。在 ① 式中令 $x=0$ 得 $g(0)+\psi(0)=0$，故 $z(x,y)=xy+\sin x+\sin y$。
【解2】由 $\frac{\partial^2z}{\partial x\partial y}=1$ 知 $\frac{\partial z}{\partial x}=\int1dy=y+\varphi(x)$。又当 $y=0$ 时，$z=\sin x$，则 $z(x,0)=\sin x,z'_x(x,0)=\cos x$，从而有 $\varphi(x)=\cos x,\frac{\partial z}{\partial x}=y+\cos x,$ 即 $z=\int[y+\cos x]dx=xy+\sin x+\psi(y).$ 由 $x=0$ 时，$z=\sin y$ 知，$\psi(y)=\sin y$。故 $z(x,y)=xy+\sin x+\sin y$。` },
      { p: 152, md: R`【例5】已知 $(axy^3-y^2\cos x)dx+(1+by\sin x+3x^2y^2)dy$ 是某一函数的全微分，则 $a,b$ 取值分别为：
(A) $-2$ 和 $2$。 (B) $2$ 和 $-2$。 (C) $-3$ 和 $3$。 (D) $3$ 和 $-3$。
【解】由题设可知，存在可微函数 $f(x,y)$，使 $df(x,y)=(axy^3-y^2\cos x)dx+(1+by\sin x+3x^2y^2)dy,$ 则 $\frac{\partial f}{\partial x}=axy^3-y^2\cos x,\frac{\partial f}{\partial y}=1+by\sin x+3x^2y^2,$ 从而有 $\frac{\partial^2f}{\partial x\partial y}=3axy^2-2y\cos x,\frac{\partial^2f}{\partial y\partial x}=by\cos x+6xy^2.$ 由于 $\frac{\partial^2f}{\partial x\partial y}$ 和 $\frac{\partial^2f}{\partial y\partial x}$ 都连续，从而有 $\frac{\partial^2f}{\partial x\partial y}=\frac{\partial^2f}{\partial y\partial x}$，即 $3axy^2-2y\cos x=by\cos x+6xy^2.$ 则 $\begin{cases}3a=6,\\b=-2,\end{cases}$ 即 $\begin{cases}a=2,\\b=-2.\end{cases}$ 故应选(B)。
【注】由本题求解中可看出，若 $P(x,y),Q(x,y)$ 有连续一阶偏导数，且 $P(x,y)dx+Q(x,y)dy$ 是某一函数全微分，则 $\frac{\partial P}{\partial y}=\frac{\partial Q}{\partial x}$。此结论以后可直接用，本题直接用该结论更简单。
【例6】设 $f(x)$ 有连续一阶导数，且有 $(xy-yf(x))dx+(f(x)+y^2)dy=du(x,y)$，求 $f(x)$ 及 $u(x,y)$，其中 $f(0)=-1$。
【解】由题设知 $x-f(x)=f'(x)$，即 $f'(x)+f(x)=x,$ $f(x)=(x-1)+Ce^{-x}.$ 由 $f(0)=-1$ 知，$C=0,f(x)=x-1$，从而 $du(x,y)=ydx+[(x-1)+y^2]dy.$
方法1 偏积分 由上式可知 $\frac{\partial u}{\partial x}=y,\frac{\partial u}{\partial y}=x-1+y^2$。等式 $\frac{\partial u}{\partial x}=y$ 两端对 $x$ 偏积分得 $u=\int ydx=xy+\varphi(y),$ 该式两端对 $y$ 求偏导得 $\frac{\partial u}{\partial y}=x+\varphi'(y),$ 又 $\frac{\partial u}{\partial y}=x-1+y^2,$ 则 $\varphi'(y)=-1+y^2$，从而 $\varphi(y)=\int(-1+y^2)dy=-y+\frac{1}{3}y^3+C,$` },
      { p: 153, md: R`$$u(x,y)=xy-y+\frac{1}{3}y^3+C.$$
方法2 凑微分 $du(x,y)=ydx+[(x-1)+y^2]dy=(ydx+xdy)+(y^2-1)dy=d(xy)+d\left(\frac{1}{3}y^3-y\right)=d\left(xy+\frac{1}{3}y^3-y\right),$ 则 $u(x,y)=xy-y+\frac{1}{3}y^3+C.$
###### 题型三 含有抽象函数的复合函数偏导数与全微分
【例1】设函数 $f(u,v)$ 由关系式 $f[xg(y),y]=x+g(y)$ 所确定，其中函数 $g(y)$ 可微，且 $g(y)\neq0$，则 $\frac{\partial^2f}{\partial u\partial v}=$______。
【解】令 $xg(y)=u,y=v$，则 $x=\frac{u}{g(y)}=\frac{u}{g(v)}$。于是 $f(u,v)=\frac{u}{g(v)}+g(v)\Rightarrow\frac{\partial f}{\partial u}=\frac{1}{g(v)},\frac{\partial^2f}{\partial u\partial v}=-\frac{g'(v)}{[g(v)]^2}.$
【例2】设函数 $u(x,y)=\varphi(x+y)+\varphi(x-y)+\int_{x-y}^{x+y}\psi(t)dt$，其中 $\varphi$ 具有二阶导数，$\psi$ 具有一阶导数，则必有
(A) $\frac{\partial^2u}{\partial x^2}=-\frac{\partial^2u}{\partial y^2}$。 (B) $\frac{\partial^2u}{\partial x^2}=\frac{\partial^2u}{\partial y^2}$。 (C) $\frac{\partial^2u}{\partial x\partial y}=\frac{\partial^2u}{\partial y^2}$。 (D) $\frac{\partial^2u}{\partial x\partial y}=-\frac{\partial^2u}{\partial x^2}$。
【解1】直接法 $\frac{\partial u}{\partial x}=\varphi'(x+y)+\varphi'(x-y)+\psi(x+y)-\psi(x-y),$ $\frac{\partial u}{\partial y}=\varphi'(x+y)-\varphi'(x-y)+\psi(x+y)+\psi(x-y),$ 进一步有：$\frac{\partial^2u}{\partial x^2}=\varphi''(x+y)+\varphi''(x-y)+\psi'(x+y)-\psi'(x-y),$ $\frac{\partial^2u}{\partial y^2}=\varphi''(x+y)+\varphi''(x-y)+\psi'(x+y)-\psi'(x-y).$ 从而有 $\frac{\partial^2u}{\partial x^2}=\frac{\partial^2u}{\partial y^2}$。故应选(B)。
【解2】排除法 令 $\varphi(x)=x^2,\psi(x)=0$，则 $u(x,y)=(x+y)^2+(x-y)^2=2x^2+2y^2,$ $\frac{\partial^2u}{\partial x^2}=4,\frac{\partial^2u}{\partial y^2}=4,\frac{\partial^2u}{\partial x\partial y}=0.$ 显然(A)、(C)、(D)均不正确，故应选(B)。
【例3】设 $z=f(xy,x^2+y^2)$，求 $\frac{\partial z}{\partial x},\frac{\partial^2z}{\partial x\partial y}$，其中 $f(u,v)$ 有二阶连续偏导数。` },
      { p: 154, md: R`【解】$\frac{\partial z}{\partial x}=yf_1'+2xf_2',$
$\frac{\partial^2z}{\partial x\partial y}=f_1'+y[xf_{11}''+2yf_{12}'']+2x[f_{21}''x+f_{22}''\cdot2y]=f_1'+xy[f_{11}''+4f_{22}'']+2(x^2+y^2)f_{12}''.$
【例4】设 $f(x,y)$ 可微，又 $f(0,0)=0$，$f_x'(0,0)=a$，$f_y'(0,0)=b$ 且 $g(t)=f[t,f(t,t^2)]$，求 $g'(0)$。
【解】$g'(t)=f_1'[t,f(t,t^2)]+f_2'[t,f(t,t^2)]\cdot[f_1'(t,t^2)+f_2'(t,t^2)\cdot2t],$ $g'(0)=a+b[a+0\times b]=a(1+b).$
【例5】设 $u=f(x,y,z)$，$y=\varphi(x,t)$，$t=\psi(x,z)$，其中 $f,\varphi,\psi$ 可微，求 $\frac{\partial u}{\partial x},\frac{\partial u}{\partial z}$。
【解】$\frac{\partial u}{\partial x}=\frac{\partial f}{\partial x}+\frac{\partial f}{\partial y}\left[\frac{\partial\varphi}{\partial x}+\frac{\partial\varphi}{\partial t}\frac{\partial\psi}{\partial x}\right].$ $\frac{\partial u}{\partial z}=\frac{\partial f}{\partial y}\frac{\partial\varphi}{\partial t}\frac{\partial\psi}{\partial z}+\frac{\partial f}{\partial z}.$
【例6】设 $f(u,v)$ 具有二阶连续偏导数，且满足 $\frac{\partial^2f}{\partial u^2}+\frac{\partial^2f}{\partial v^2}=1$，又 $g(x,y)=f\left[xy,\frac{1}{2}(x^2-y^2)\right]$，求 $\frac{\partial^2g}{\partial x^2}+\frac{\partial^2g}{\partial y^2}$。
【解】令 $xy=u,\frac{1}{2}(x^2-y^2)=v$，则 $\frac{\partial g}{\partial x}=\frac{\partial f}{\partial u}y+\frac{\partial f}{\partial v}x,$
$\frac{\partial^2g}{\partial x^2}=y\left[\frac{\partial^2f}{\partial u^2}y+\frac{\partial^2f}{\partial u\partial v}x\right]+x\left[\frac{\partial^2f}{\partial v\partial u}y+\frac{\partial^2f}{\partial v^2}x\right]+\frac{\partial f}{\partial v};$
$\frac{\partial g}{\partial y}=\frac{\partial f}{\partial u}x-\frac{\partial f}{\partial v}y,$
$\frac{\partial^2g}{\partial y^2}=x\left[\frac{\partial^2f}{\partial u^2}x-\frac{\partial^2f}{\partial u\partial v}y\right]-y\left[\frac{\partial^2f}{\partial v\partial u}x-\frac{\partial^2f}{\partial v^2}y\right]-\frac{\partial f}{\partial v}.$
故 $\frac{\partial^2g}{\partial x^2}+\frac{\partial^2g}{\partial y^2}=(x^2+y^2)\left[\frac{\partial^2f}{\partial u^2}+\frac{\partial^2f}{\partial v^2}\right]=x^2+y^2.$
【例7】设函数 $u=f(x,y)$ 具有二阶连续偏导数，且满足 $4\frac{\partial^2u}{\partial x^2}+12\frac{\partial^2u}{\partial x\partial y}+5\frac{\partial^2u}{\partial y^2}=0.$ 确定 $a,b$ 的值，使等式在变换 $\xi=x+ay,\eta=x+by$ 下简化为 $\frac{\partial^2u}{\partial\xi\partial\eta}=0.$
【解1】变量之间关系如右图 $\frac{\partial u}{\partial x}=\frac{\partial u}{\partial\xi}\cdot1+\frac{\partial u}{\partial\eta}\cdot1=\frac{\partial u}{\partial\xi}+\frac{\partial u}{\partial\eta},$
$\frac{\partial^2u}{\partial x^2}=\frac{\partial^2u}{\partial\xi^2}\cdot1+\frac{\partial^2u}{\partial\xi\partial\eta}\cdot1+\frac{\partial^2u}{\partial\eta\partial\xi}\cdot1+\frac{\partial^2u}{\partial\eta^2}\cdot1=\frac{\partial^2u}{\partial\xi^2}+2\frac{\partial^2u}{\partial\xi\partial\eta}+\frac{\partial^2u}{\partial\eta^2},$
$\frac{\partial u}{\partial y}=\frac{\partial u}{\partial\xi}\cdot a+\frac{\partial u}{\partial\eta}\cdot b=a\frac{\partial u}{\partial\xi}+b\frac{\partial u}{\partial\eta},$` },
      { p: 155, md: R`$\frac{\partial^2u}{\partial y^2}=a\frac{\partial^2u}{\partial\xi^2}\cdot a+a\frac{\partial^2u}{\partial\xi\partial\eta}\cdot b+b\frac{\partial^2u}{\partial\eta\partial\xi}\cdot a+b\frac{\partial^2u}{\partial\eta^2}\cdot b=a^2\frac{\partial^2u}{\partial\xi^2}+2ab\frac{\partial^2u}{\partial\xi\partial\eta}+b^2\frac{\partial^2u}{\partial\eta^2},$
$\frac{\partial^2u}{\partial x\partial y}=\frac{\partial^2u}{\partial\xi^2}\cdot a+\frac{\partial^2u}{\partial\xi\partial\eta}\cdot b+\frac{\partial^2u}{\partial\eta\partial\xi}\cdot a+\frac{\partial^2u}{\partial\eta^2}\cdot b=a\frac{\partial^2u}{\partial\xi^2}+(a+b)\frac{\partial^2u}{\partial\xi\partial\eta}+b\frac{\partial^2u}{\partial\eta^2}.$
将以上三个二阶偏导数代入等式 $4\frac{\partial^2u}{\partial x^2}+12\frac{\partial^2u}{\partial x\partial y}+5\frac{\partial^2u}{\partial y^2}=0$ 得
$(5a^2+12a+4)\frac{\partial^2u}{\partial\xi^2}+[10ab+12(a+b)+8]\frac{\partial^2u}{\partial\xi\partial\eta}+(5b^2+12b+4)\frac{\partial^2u}{\partial\eta^2}=0.$
由题设知 $\begin{cases}5a^2+12a+4=0,\\5b^2+12b+4=0,\end{cases}$ 但 $10ab+12(a+b)+8\neq0$，解得 $\begin{cases}a=-2,\\b=-\frac{2}{5},\end{cases}$ 或 $\begin{cases}a=-\frac{2}{5},\\b=-2.\end{cases}$
【解2】由 $\xi=x+ay,\eta=x+by$ 解得 $\begin{cases}x=\frac{a\eta-b\xi}{a-b},\\y=\frac{\xi-\eta}{a-b},\end{cases}$ $\frac{\partial u}{\partial\xi}=\frac{-b}{a-b}\frac{\partial u}{\partial x}+\frac{1}{a-b}\frac{\partial u}{\partial y},$
$\frac{\partial^2u}{\partial\xi\partial\eta}=\frac{-b}{a-b}\frac{\partial^2u}{\partial x^2}\cdot\frac{-1}{a-b}+\frac{-b}{a-b}\frac{\partial^2u}{\partial x\partial y}\cdot\frac{1}{a-b}+\frac{1}{a-b}\frac{\partial^2u}{\partial y\partial x}\cdot\frac{a}{a-b}+\frac{1}{a-b}\frac{\partial^2u}{\partial y^2}\cdot\frac{-1}{a-b}=\frac{-ab}{(a-b)^2}\frac{\partial^2u}{\partial x^2}+\frac{a+b}{(a-b)^2}\frac{\partial^2u}{\partial x\partial y}+\frac{-1}{(a-b)^2}\frac{\partial^2u}{\partial y^2}.$
欲使 $\frac{\partial^2u}{\partial\xi\partial\eta}=0$，即 $-ab\frac{\partial^2u}{\partial x^2}+(a+b)\frac{\partial^2u}{\partial x\partial y}-\frac{\partial^2u}{\partial y^2}=0,$ 与已知关系式比较得 $\frac{-ab}{4}=\frac{a+b}{12}=\frac{-1}{5},$ 由此解得 $\begin{cases}a=-2,\\b=-\frac{2}{5},\end{cases}$ 或 $\begin{cases}a=-\frac{2}{5},\\b=-2.\end{cases}$
【例8】设 $f(u)$ 具有二阶连续导数，而 $z=f(e^x\sin y)$ 满足方程 $\frac{\partial^2z}{\partial x^2}+\frac{\partial^2z}{\partial y^2}=ze^{2x}$，求 $f(u)$。
【解】令 $u=e^x\sin y$，则 $\frac{\partial z}{\partial x}=f'(u)e^x\sin y$，$\frac{\partial^2z}{\partial x^2}=f''(u)e^{2x}\sin^2y+f'(u)e^x\sin y$；$\frac{\partial z}{\partial y}=f'(u)e^x\cos y$，$\frac{\partial^2z}{\partial y^2}=f''(u)e^{2x}\cos^2y-f'(u)e^x\sin y.$` },
      { p: 156, md: R`将 $\frac{\partial^2z}{\partial x^2}$ 和 $\frac{\partial^2z}{\partial y^2}$ 代入等式 $\frac{\partial^2z}{\partial x^2}+\frac{\partial^2z}{\partial y^2}=ze^{2x}$ 得 $f''(u)=f(u)$，即 $f''(u)-f(u)=0.$ 这是一个二阶线性常系数齐次微分方程，特征方程为 $r^2-1=0$，$r=\pm1$，则 $f(u)=C_1e^u+C_2e^{-u}.$
【例9】设 $(r,\theta)$ 为极坐标，$u=u(r,\theta)$ 具有二阶连续偏导数，并满足 $\frac{\partial u}{\partial\theta}\equiv0$，且 $\frac{\partial^2u}{\partial x^2}+\frac{\partial^2u}{\partial y^2}=0$，求 $u(r,\theta)$。
【解】由 $\frac{\partial u}{\partial\theta}\equiv0$ 知 $u$ 仅为 $r$ 的函数，令 $u=\varphi(r)$，其中 $r=\sqrt{x^2+y^2}$，则 $\frac{\partial u}{\partial x}=\varphi'(r)\frac{x}{\sqrt{x^2+y^2}}=\varphi'(r)\frac{x}{r},$ $\frac{\partial^2u}{\partial x^2}=\varphi''(r)\frac{x^2}{r^2}+\varphi'(r)\frac{r-\frac{x^2}{r}}{r^2}=\varphi''(r)\frac{x^2}{r^2}+\varphi'(r)\left(\frac{1}{r}-\frac{x^2}{r^3}\right).$ 由对称性知 $\frac{\partial^2u}{\partial y^2}=\varphi''(r)\frac{y^2}{r^2}+\varphi'(r)\left(\frac{1}{r}-\frac{y^2}{r^3}\right),$ 则 $\frac{\partial^2u}{\partial x^2}+\frac{\partial^2u}{\partial y^2}=\varphi''(r)+\varphi'(r)\frac{1}{r}.$ 从而得 $\varphi''(r)+\varphi'(r)\frac{1}{r}=0$，即 $r\varphi''(r)+\varphi'(r)=0$，从而 $[r\varphi'(r)]'=0$。则 $r\varphi'(r)=C_1$，$\varphi(r)=C_1\ln r+C_2$。故 $u=C_1\ln r+C_2.$
【例10】若对任意 $t>0$ 有 $f(tx,ty)=t^nf(x,y)$，则称函数 $f(x,y)$ 是 $n$ 次齐次函数，试证：若 $f(x,y)$ 可微，则 $f(x,y)$ 是 $n$ 次齐次函数 $\Leftrightarrow x\frac{\partial f}{\partial x}+y\frac{\partial f}{\partial y}=nf(x,y).$
【证】必要性 由于 $f(x,y)$ 为 $n$ 次齐次函数，则对任意 $t>0$，有 $f(tx,ty)=t^nf(x,y)$，该式两端对 $t$ 求导得 $xf_1'(tx,ty)+yf_2'(tx,ty)=nt^{n-1}f(x,y).$ 令 $t=1$ 得 $xf_1'(x,y)+yf_2'(x,y)=nf(x,y).$ 即 $x\frac{\partial f}{\partial x}+y\frac{\partial f}{\partial y}=nf(x,y).$
充分性 令 $F(t)=f(tx,ty)(t>0)$，则 $\frac{dF}{dt}=xf_1'(tx,ty)+yf_2'(tx,ty)$，两边乘以 $t$ 得 $t\frac{dF}{dt}=txf_1'(tx,ty)+tyf_2'(tx,ty)=nf(tx,ty)=nF(t).$ 于是 $\frac{dF}{F}=\frac{n}{t}dt$，解得 $F(t)=Ct^n$。令 $t=1$ 得 $F(1)=C$，而由 $F(t)=f(tx,ty)$ 知 $F(1)=f(x,y)$，则 $C=f(x,y)$。于是 $F(t)=t^nf(x,y)$，即 $f(tx,ty)=t^nf(x,y).$` },
      { p: 157, md: R`###### 题型四 隐函数的偏导数与全微分
【例1】设 $z=z(x,y)$ 是由方程 $z+e^z=xy$ 所确定，求 $\frac{\partial z}{\partial x}$ 和 $\frac{\partial z}{\partial y}$。
【解1】由 $z+e^z=xy$ 知，$z+e^z-xy=0$。由隐函数求导公式可得 $\frac{\partial z}{\partial x}=-\frac{F_x'}{F_z'}=-\frac{-y}{1+e^z}=\frac{y}{1+e^z}$，$\frac{\partial z}{\partial y}=-\frac{F_y'}{F_z'}=-\frac{-x}{1+e^z}=\frac{x}{1+e^z}.$
【解2】等式 $z+e^z=xy$ 两端分别对 $x,y$ 求偏导得 $(1+e^z)\frac{\partial z}{\partial x}=y$，$(1+e^z)\frac{\partial z}{\partial y}=x.$ 由以上两式解得 $\frac{\partial z}{\partial x}=\frac{y}{1+e^z}$，$\frac{\partial z}{\partial y}=\frac{x}{1+e^z}.$
【解3】等式 $z+e^z=xy$ 两端求微分得 $dz+e^zdz=ydx+xdy,$ 则 $dz=\frac{y}{1+e^z}dx+\frac{x}{1+e^z}dy,$ 从而有 $\frac{\partial z}{\partial x}=\frac{y}{1+e^z}$，$\frac{\partial z}{\partial y}=\frac{x}{1+e^z}.$
【例2】设方程 $F\left(\frac{x}{z},\frac{z}{y}\right)=0$ 可确定函数 $z=z(x,y)$，求 $\frac{\partial z}{\partial x}$ 和 $\frac{\partial z}{\partial y}$。
【解】由隐函数求导公式得 $\frac{\partial z}{\partial x}=-\frac{\frac{1}{z}F_1'}{-\frac{x}{z^2}F_1'+\frac{1}{y}F_2'}=\frac{yzF_1'}{xyF_1'-z^2F_2'},$ $\frac{\partial z}{\partial y}=-\frac{-\frac{z}{y^2}F_2'}{-\frac{x}{z^2}F_1'+\frac{1}{y}F_2'}=\frac{-z^3F_2'}{y(xyF_1'-z^2F_2')}.$
【例3】设 $u=f(x,y,z)$ 有连续一阶偏导数，$z=z(x,y)$ 由方程 $xe^x-ye^y=ze^z$ 所确定，求 $du$。
【解1】由题设知 $\frac{\partial u}{\partial x}=\frac{\partial f}{\partial x}+\frac{\partial f}{\partial z}\frac{\partial z}{\partial x}.$ 等式 $xe^x-ye^y=ze^z$ 两端对 $x$ 求导得 $e^x+xe^x=(e^z+ze^z)\frac{\partial z}{\partial x}.$ 由此可得 $\frac{\partial z}{\partial x}=\frac{e^x(1+x)}{e^z(1+z)}=\frac{1+x}{1+z}e^{x-z}.$ 则 $\frac{\partial u}{\partial x}=\frac{\partial f}{\partial x}+\frac{\partial f}{\partial z}\frac{1+x}{1+z}e^{x-z}.$` },
      { p: 158, md: R`同理可求得 $\frac{\partial u}{\partial y}=\frac{\partial f}{\partial y}-\frac{\partial f}{\partial z}\frac{1+y}{1+z}e^{y-z},$ 故 $du=\left(\frac{\partial f}{\partial x}+\frac{\partial f}{\partial z}\frac{1+x}{1+z}e^{x-z}\right)dx+\left(\frac{\partial f}{\partial y}-\frac{\partial f}{\partial z}\frac{1+y}{1+z}e^{y-z}\right)dy.$
【解2】由 $u=f(x,y,z)$ 知，$du=\frac{\partial f}{\partial x}dx+\frac{\partial f}{\partial y}dy+\frac{\partial f}{\partial z}dz.$ 等式 $xe^x-ye^y=ze^z$ 两端求微分得 $(e^x+xe^x)dx-(e^y+ye^y)dy=(e^z+ze^z)dz.$ 解得 $dz=\frac{1+x}{1+z}e^{x-z}dx-\frac{1+y}{1+z}e^{y-z}dy.$ 将 $dz$ 代入 $du=\frac{\partial f}{\partial x}dx+\frac{\partial f}{\partial y}dy+\frac{\partial f}{\partial z}dz$ 得
$du=\left(\frac{\partial f}{\partial x}+\frac{\partial f}{\partial z}\frac{1+x}{1+z}e^{x-z}\right)dx+\left(\frac{\partial f}{\partial y}-\frac{\partial f}{\partial z}\frac{1+y}{1+z}e^{y-z}\right)dy.$
【例4】设 $u=f(x,y,z)$，$\varphi(x^2,e^y,z)=0$，$y=\sin x$ 确定了函数 $u=u(x)$，其中 $f,\varphi$ 都有一阶连续偏导数，且 $\frac{\partial\varphi}{\partial z}\neq0$，求 $\frac{du}{dx}$。
【解1】$\frac{du}{dx}=\frac{\partial f}{\partial x}+\frac{\partial f}{\partial y}\cos x+\frac{\partial f}{\partial z}\frac{dz}{dx}.$ $\varphi(x^2,e^y,z)=0$ 两端对 $x$ 求导得 $\varphi_1'2x+\varphi_2'e^y\cos x+\varphi_3'\frac{dz}{dx}=0.$ 解得 $\frac{dz}{dx}=-\frac{1}{\varphi_3'}(2x\varphi_1'+\varphi_2'e^y\cos x)$。将 $\frac{dz}{dx}$ 代入 $\frac{du}{dx}=\frac{\partial f}{\partial x}+\frac{\partial f}{\partial y}\cos x+\frac{\partial f}{\partial z}\frac{dz}{dx}$ 得 $\frac{du}{dx}=\frac{\partial f}{\partial x}+\frac{\partial f}{\partial y}\cos x-\frac{\partial f}{\partial z}\frac{1}{\varphi_3'}(2x\varphi_1'+\varphi_2'e^y\cos x).$
【解2】由 $u=f(x,y,z)$ 知 $du=\frac{\partial f}{\partial x}dx+\frac{\partial f}{\partial y}dy+\frac{\partial f}{\partial z}dz.$ ① 等式 $\varphi(x^2,e^y,z)=0$ 两端求微分得 $\varphi_1'2xdx+\varphi_2'e^ydy+\varphi_3'dz=0.$ ② 由 $y=\sin x$ 知 $dy=\cos xdx$，将 $dy=\cos xdx$ 代入 ② 式得 $dz=-\frac{1}{\varphi_3'}(\varphi_1'2x+\varphi_2'e^y\cos x)dx.$ 将该式中的 $dz$ 和 $dy=\cos xdx$ 代入 ① 式得 $du=\left[\frac{\partial f}{\partial x}+\frac{\partial f}{\partial y}\cos x-\frac{\partial f}{\partial z}\frac{1}{\varphi_3'}(2x\varphi_1'+\varphi_2'e^y\cos x)\right]dx.$ 故 $\frac{du}{dx}=\frac{\partial f}{\partial x}+\frac{\partial f}{\partial y}\cos x-\frac{\partial f}{\partial z}\frac{1}{\varphi_3'}(2x\varphi_1'+\varphi_2'e^y\cos x).$
【例5】设 $y=f(x,t)$，且方程 $F(x,y,t)=0$ 确定了函数 $t=t(x,y)$，求 $\frac{dy}{dx}$。
【解1】将 $t=t(x,y)$ 代入 $y=f(x,t)$ 得 $y=f(x,t(x,y))$，这是一个` },
      { p: 159, md: R`关于 $x,y$ 的二元方程，它可确定 $y$ 是 $x$ 的函数。
等式 $y=f(x,t(x,y))$ 两端对 $x$ 求导得 $\frac{dy}{dx}=\frac{\partial f}{\partial x}+\frac{\partial f}{\partial t}\left(\frac{\partial t}{\partial x}+\frac{\partial t}{\partial y}\frac{dy}{dx}\right).$ 而 $t=t(x,y)$ 由 $F(x,y,t)=0$ 所确定，则 $\frac{\partial t}{\partial x}=-\frac{\frac{\partial F}{\partial x}}{\frac{\partial F}{\partial t}}$，$\frac{\partial t}{\partial y}=-\frac{\frac{\partial F}{\partial y}}{\frac{\partial F}{\partial t}}.$ 于是 $\frac{dy}{dx}=\frac{\partial f}{\partial x}-\frac{\partial f}{\partial t}\left[\frac{\frac{\partial F}{\partial x}}{\frac{\partial F}{\partial t}}+\frac{\frac{\partial F}{\partial y}}{\frac{\partial F}{\partial t}}\frac{dy}{dx}\right]\Rightarrow\frac{dy}{dx}=\frac{\frac{\partial F}{\partial t}\frac{\partial f}{\partial x}-\frac{\partial F}{\partial x}\frac{\partial f}{\partial t}}{\frac{\partial F}{\partial t}+\frac{\partial F}{\partial y}\frac{\partial f}{\partial t}}.$
【解2】由 $y=f(x,t)$ 知 $dy=\frac{\partial f}{\partial x}dx+\frac{\partial f}{\partial t}dt.$ 由 $F(x,y,t)=0$ 知 $\frac{\partial F}{\partial x}dx+\frac{\partial F}{\partial y}dy+\frac{\partial F}{\partial t}dt=0.$ 解得 $dt=-\frac{1}{\frac{\partial F}{\partial t}}\left(\frac{\partial F}{\partial x}dx+\frac{\partial F}{\partial y}dy\right)$。将 $dt$ 的表达式代入 $dy=\frac{\partial f}{\partial x}dx+\frac{\partial f}{\partial t}dt$ 并整理可得 $\frac{dy}{dx}=\frac{\frac{\partial F}{\partial t}\frac{\partial f}{\partial x}-\frac{\partial F}{\partial x}\frac{\partial f}{\partial t}}{\frac{\partial F}{\partial t}+\frac{\partial F}{\partial y}\frac{\partial f}{\partial t}}.$
【例6】设 $f(x,y)$ 有二阶连续偏导数，且 $f_y'\neq0$，证明：对任意常数 $C$，$f(x,y)=C$ 为一条直线 $\Leftrightarrow f_2'^2f_{11}''-2f_1'f_2'f_{12}''+f_1'^2f_{22}''=0$。
【证】由原题设条件知 $f(x,y)=C$ 可确定隐函数 $y=y(x)$，从而 $f(x,y)=C$ 为一条直线的充要条件是 $y=y(x)$ 是线性函数（即 $y=ax+b$），而 $y=y(x)$ 是线性函数的充要条件是 $y''=0$。
等式 $f(x,y)=C$ 两端对 $x$ 求导得 $f_1'+f_2'\frac{dy}{dx}=0\Rightarrow\frac{dy}{dx}=-\frac{f_1'}{f_2'}.$ 从而有 $\frac{d^2y}{dx^2}=-\frac{d}{dx}\left(\frac{f_1'}{f_2'}\right)=-\frac{\left(f_{11}''+f_{12}''\frac{dy}{dx}\right)f_2'-\left(f_{21}''+f_{22}''\frac{dy}{dx}\right)f_1'}{f_2'^2}=-\frac{f_2'^2f_{11}''-2f_1'f_2'f_{12}''+f_1'^2f_{22}''}{f_2'^3}.$
必要性 若 $f(x,y)=C$ 是一条直线，则由 $f(x,y)=C$ 所确定的函数 $y=y(x)$ 应为线性函数（即 $y=ax+b$），则 $\frac{d^2y}{dx^2}=0$，从而有 $f_2'^2f_{11}''-2f_1'f_2'f_{12}''+f_1'^2f_{22}''=0.$
充分性 若 $f_2'^2f_{11}''-2f_1'f_2'f_{12}''+f_1'^2f_{22}''=0$，则 $\frac{d^2y}{dx^2}=0$，从而有 $y=ax+b$，即 $f(x,y)=C$ 所确定的隐函数 $y=y(x)$ 为线性函数。故 $f(x,y)=C$ 表示直线。` }
    ],
    quiz: [
      { q: R`复合函数 $z=f(u,v),u=u(x,y),v=v(x,y)$ 的 $\dfrac{\partial z}{\partial x}=$`, options: [R`$f_u u_x+f_v v_x$`, R`$f_u u_y+f_v v_y$`, R`$f_u+f_v$`, R`$f_x+f_y$`], answer: 0, explain: R`链式法则。` },
      { q: R`全微分形式不变性指`, options: [R`$dz=\frac{\partial z}{\partial u}du+\frac{\partial z}{\partial v}dv$ 对中间变量也成立`, R`$dz$ 与变量无关`, R`$dz=0$`, R`$dz=dx+dy$`], answer: 0, explain: R`无论 $u,v$ 是自变量还是中间变量，全微分形式相同。` },
      { q: R`由 $F(x,y,z)=0$ 确定的隐函数 $z=z(x,y)$，$\dfrac{\partial z}{\partial x}=$`, options: [R`$-\dfrac{F'_x}{F'_z}$`, R`$\dfrac{F'_x}{F'_z}$`, R`$-\dfrac{F'_z}{F'_x}$`, R`$\dfrac{F'_z}{F'_x}$`], answer: 0, explain: R`隐函数求导公式。` },
      { q: R`若 $Pdx+Qdy$ 是某函数的全微分，则`, options: [R`$\dfrac{\partial P}{\partial y}=\dfrac{\partial Q}{\partial x}$`, R`$\dfrac{\partial P}{\partial x}=\dfrac{\partial Q}{\partial y}$`, R`$P=Q$`, R`$\dfrac{\partial P}{\partial y}=-\dfrac{\partial Q}{\partial x}$`], answer: 0, explain: R`全微分条件。` },
      { q: R`求具体点 $(x_0,y_0)$ 处偏导数 $f'_x(x_0,y_0)$ 常用方法`, options: [R`先代入 $y=y_0$ 再对 $x$ 求导`, R`先对 $x$ 求导再代入`, R`只能用定义`, R`用洛必达法则`], answer: 0, explain: R`先代后求往往更简单。` },
      { q: R`设 $z=f(xy,x^2+y^2)$，则 $\dfrac{\partial z}{\partial x}=$`, options: [R`$yf'_1+2xf'_2$`, R`$xf'_1+2yf'_2$`, R`$f'_1+f'_2$`, R`$2xf'_1+yf'_2$`], answer: 0, explain: R`链式法则：对 $u=xy$ 求导得 $y$，对 $v=x^2+y^2$ 求导得 $2x$。` },
      { q: R`分段函数在分界点处的偏导数一般应`, options: [R`用定义求`, R`直接求导公式`, R`用洛必达法则`, R`用泰勒公式`], answer: 0, explain: R`分界点处用偏导数定义。` },
      { q: R`设 $u=\varphi(x+y)+\varphi(x-y)$，则`, options: [R`$u_{xx}=u_{yy}$`, R`$u_{xx}=-u_{yy}$`, R`$u_{xy}=u_{yy}$`, R`$u_{xx}=0$`], answer: 0, explain: R`代入求导可得 $u_{xx}=u_{yy}$。` },
      { q: R`$n$ 次齐次函数 $f(x,y)$ 满足的欧拉关系是`, options: [R`$xf_x+yf_y=nf$`, R`$xf_x+yf_y=0$`, R`$f_x+f_y=nf$`, R`$xf_x-yf_y=nf$`], answer: 0, explain: R`齐次函数的欧拉定理。` },
      { q: R`隐函数 $z=z(x,y)$ 由 $z+e^z=xy$ 确定，则 $\dfrac{\partial z}{\partial x}=$`, options: [R`$\dfrac{y}{1+e^z}$`, R`$\dfrac{x}{1+e^z}$`, R`$\dfrac{1}{1+e^z}$`, R`$y$`], answer: 0, explain: R`由 $(1+e^z)z_x=y$。` }
    ]
  };
})();
