window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["gs05_s1"] = {
    id: "gs05_s1",
    ch: "第五章 多元函数微分学",
    title: "第二节 偏导数与全微分的计算",
    book: "武忠祥《高等数学辅导讲义》",
    pages: [148, 159],
    img: "assets/img/gaoshu",
    content: [
      { p: 148, md: R`（例6续）当 $\varphi(0,0)=0$ 时，$\lim\limits_{\substack{\Delta x\to0\\\Delta y\to0}}\dfrac{[f(\Delta x,\Delta y)-f(0,0)]-[f'_x(0,0)\Delta x+f'_y(0,0)\Delta y]}{\rho}=\lim\limits_{\substack{\Delta x\to0\\\Delta y\to0}}\dfrac{|\Delta x-\Delta y|}{\sqrt{(\Delta x)^2+(\Delta y)^2}}\varphi(\Delta x,\Delta y)=0$（因前者有界、后者为无穷小），故 $f$ 在 $(0,0)$ 可微。

【例7】设 $f'_x(x_0,y_0)$ 存在，$f'_y(x,y)$ 在 $(x_0,y_0)$ 连续，证明 $f(x,y)$ 在 $(x_0,y_0)$ 可微。

【证】$\Delta z=f(x_0+\Delta x,y_0+\Delta y)-f(x_0+\Delta x,y_0)+f(x_0+\Delta x,y_0)-f(x_0,y_0)$。由拉格朗日中值定理及 $f'_x(x_0,y_0)$ 存在、$f'_y$ 连续，得 $\Delta z=f'_x(x_0,y_0)\Delta x+f'_y(x_0,y_0)\Delta y+\alpha_1\Delta y+\alpha_2\Delta x$，其中 $\alpha_1,\alpha_2\to0$。因 $\left|\dfrac{\alpha_1\Delta y+\alpha_2\Delta x}{\rho}\right|\leqslant|\alpha_1|+|\alpha_2|\to0$，故 $\alpha_1\Delta y+\alpha_2\Delta x=o(\rho)$，即 $f$ 在 $(x_0,y_0)$ 可微。

### 一、考试内容要点精讲
**1. 复合函数求导法** 设 $u=u(x,y),v=v(x,y)$ 可导，$z=f(u,v)$ 有连续一阶偏导数，则
$$\frac{\partial z}{\partial x}=\frac{\partial f}{\partial u}\frac{\partial u}{\partial x}+\frac{\partial f}{\partial v}\frac{\partial v}{\partial x},\qquad \frac{\partial z}{\partial y}=\frac{\partial f}{\partial u}\frac{\partial u}{\partial y}+\frac{\partial f}{\partial v}\frac{\partial v}{\partial y}.$$` },
      { p: 149, md: R`**2. 全微分形式不变性** 设 $z=f(u,v),u=u(x,y),v=v(x,y)$ 都有连续一阶偏导数，则 $dz=\dfrac{\partial z}{\partial x}dx+\dfrac{\partial z}{\partial y}dy=\dfrac{\partial z}{\partial u}du+\dfrac{\partial z}{\partial v}dv$。

**3. 隐函数求导法**
1) 由一个方程确定：设 $F(x,y,z)$ 有连续一阶偏导数，$F'_z\neq0$，$z=z(x,y)$ 由 $F(x,y,z)=0$ 确定。方法：i) 公式 $\dfrac{\partial z}{\partial x}=-\dfrac{F'_x}{F'_z},\dfrac{\partial z}{\partial y}=-\dfrac{F'_y}{F'_z}$；ii) 等式两边求导；iii) 利用微分形式不变性 $F'_xdx+F'_ydy+F'_zdz=0$。
2) 由方程组确定（仅数一）：$\begin{cases}F(x,y,u,v)=0\\G(x,y,u,v)=0\end{cases}$，用等式两边求导或微分形式不变性。

### 二、常考题型的方法与技巧
### 题型一　求一点处的偏导数与全微分
【例1】设 $f(x,y)=\begin{cases}\dfrac{\sqrt{|x|}}{x^2+y^2}\sin(x^2+y^2),&(x,y)\neq(0,0)\\0,&(x,y)=(0,0)\end{cases}$，求 $f'_x(0,0),f'_y(0,0)$。
【解】$\lim\limits_{\Delta x\to0}\dfrac{f(\Delta x,0)-f(0,0)}{\Delta x}=\lim\limits_{\Delta x\to0}\dfrac{\sqrt{|\Delta x|}}{\Delta x}=\infty$，故 $f'_x(0,0)$ 不存在；$f'_y(0,0)=\lim\limits_{\Delta y\to0}\dfrac{0-0}{\Delta y}=0$。
【注】分段函数在分界点处的偏导数一般用定义。` },
      { p: 150, md: R`【例2】设 $f(x,y)=\dfrac{2x+3y}{1+xy\sqrt{x^2+y^2}}$，求 $f'_x(0,0),f'_y(0,0)$。
【解】$f'_x(0,0)=\dfrac{d}{dx}f(x,0)|_{x=0}=2$，$f'_y(0,0)=\dfrac{d}{dy}f(0,y)|_{y=0}=3$。
【注】求具体点处偏导数可用先代后求。

【例3】设 $z=\ln(1+xy^2)$，则 $\left.\dfrac{\partial^2z}{\partial x\partial y}\right|_{(0,1)}=$______。
【解】$\dfrac{\partial z}{\partial x}=\dfrac{y^2}{1+xy^2}$，$\left.\dfrac{\partial^2z}{\partial x\partial y}\right|_{(0,1)}=\dfrac{d}{dy}(y^2)|_{y=1}=2$。

【例4】设 $f(x,y,z)=\sqrt{\dfrac xy}$，则 $df(1,1,1)=$______。
【解】$f'_x(1,1,1)=1$，$f'_y(1,1,1)=-1$，$f'_z(1,1,1)=0$，故 $df(1,1,1)=dx-dy$。

### 题型二　求已给出具体表达式函数的偏导数与全微分
【例1】设 $z=(x^2+y^2)e^{-\arctan\frac yx}$，求 $\dfrac{\partial z}{\partial x},\dfrac{\partial z}{\partial y},dz$。
【解】$\dfrac{\partial z}{\partial x}=(2x+y)e^{-\arctan\frac yx}$，$\dfrac{\partial z}{\partial y}=(2y-x)e^{-\arctan\frac yx}$，$dz=(2x+y)e^{-\arctan\frac yx}dx+(2y-x)e^{-\arctan\frac yx}dy$。
【例2】设 $z=(1+x^2+y^2)^{xy}$，求 $\dfrac{\partial z}{\partial x},\dfrac{\partial z}{\partial y}$。
【解】令 $u=1+x^2+y^2,v=xy$，则 $\dfrac{\partial z}{\partial x}=vu^{v-1}2x+u^v\ln u\cdot y=(1+x^2+y^2)^{xy}\left[\dfrac{2x^2y}{1+x^2+y^2}+y\ln(1+x^2+y^2)\right]$，同理 $\dfrac{\partial z}{\partial y}=(1+x^2+y^2)^{xy}\left[x\ln(1+x^2+y^2)+\dfrac{2xy^2}{1+x^2+y^2}\right]$。` },
      { p: 151, md: R`【例3】若 $z=f(x,y)$ 满足 $\dfrac{\partial^2z}{\partial y^2}=2$，且 $f(x,1)=x+2$，$f'_y(x,1)=x+1$，则 $f(x,y)=$ (A) $y^2+(x-1)y-2$ (B) $y^2+(x+1)y+2$ (C) $y^2+(x-1)y+2$ (D) $y^2+(x+1)y-2$
【解】$\dfrac{\partial z}{\partial y}=2y+\varphi(x)$，由 $f'_y(x,1)=x+1$ 得 $\varphi(x)=x-1$，$z=y^2+y(x-1)+\psi(x)$，由 $f(x,1)=x+2$ 得 $\psi(x)=2$，故 $z=y^2+y(x-1)+2$。选 (C)。

【例4】已知 $\dfrac{\partial^2z}{\partial x\partial y}=1$，当 $x=0$ 时 $z=\sin y$；当 $y=0$ 时 $z=\sin x$，则 $z(x,y)=$______。
【解】$\dfrac{\partial z}{\partial x}=y+\varphi(x)$，$z=xy+g(x)+\psi(y)$。由 $x=0$ 时 $z=\sin y$、$y=0$ 时 $z=\sin x$ 得 $g(x)=\sin x,\psi(y)=\sin y$（差常数相消），故 $z=xy+\sin x+\sin y$。` },
      { p: 152, md: R`【例5】已知 $(axy^3-y^2\cos x)dx+(1+by\sin x+3x^2y^2)dy$ 是某一函数的全微分，则 $a,b$ 分别为 (A) $-2,2$ (B) $2,-2$ (C) $-3,3$ (D) $3,-3$
【解】设 $P=axy^3-y^2\cos x$，$Q=1+by\sin x+3x^2y^2$，由 $\dfrac{\partial P}{\partial y}=\dfrac{\partial Q}{\partial x}$ 得 $3ay^2-2y\cos x=by\cos x+6xy^2$，故 $3a=6,b=-2$，即 $a=2,b=-2$。选 (B)。
【注】$Pdx+Qdy$ 为全微分 $\Rightarrow\dfrac{\partial P}{\partial y}=\dfrac{\partial Q}{\partial x}$。

【例6】设 $f(x)$ 有连续一阶导数，且 $(xy-yf(x))dx+(f(x)+y^2)dy=du(x,y)$，求 $f(x)$ 及 $u(x,y)$，$f(0)=-1$。
【解】由 $\dfrac{\partial P}{\partial y}=\dfrac{\partial Q}{\partial x}$ 得 $x-f(x)=f'(x)$，即 $f'+f=x$，$f=(x-1)+Ce^{-x}$。由 $f(0)=-1$ 得 $C=0$，$f(x)=x-1$，$du=ydx+[(x-1)+y^2]dy$。` },
      { p: 153, md: R`（例6续）方法1 偏积分：$\dfrac{\partial u}{\partial x}=y\Rightarrow u=xy+\varphi(y)$，$\dfrac{\partial u}{\partial y}=x+\varphi'(y)=x-1+y^2\Rightarrow\varphi'(y)=-1+y^2$，$\varphi(y)=-y+\dfrac13y^3+C$，故 $u=xy-y+\dfrac13y^3+C$。
方法2 凑微分：$du=(ydx+xdy)+(y^2-1)dy=d\left(xy+\dfrac13y^3-y\right)$，故 $u=xy-y+\dfrac13y^3+C$。

### 题型三　含有抽象函数的复合函数偏导数与全微分
【例1】设 $f(u,v)$ 由 $f[xg(y),y]=x+g(y)$ 确定，$g$ 可微且 $g\neq0$，则 $\dfrac{\partial^2f}{\partial u\partial v}=$______。
【解】令 $xg(y)=u,y=v$，则 $x=\dfrac{u}{g(v)}$，$f(u,v)=\dfrac{u}{g(v)}+g(v)$，$\dfrac{\partial f}{\partial u}=\dfrac{1}{g(v)}$，$\dfrac{\partial^2f}{\partial u\partial v}=-\dfrac{g'(v)}{[g(v)]^2}$。
【例2】设 $u=\varphi(x+y)+\varphi(x-y)+\displaystyle\int_{x-y}^{x+y}\psi(t)dt$，则 (A) $u_{xx}=-u_{yy}$ (B) $u_{xx}=u_{yy}$ (C) $u_{xy}=u_{yy}$ (D) $u_{xy}=-u_{xx}$
【解】$u_x=\varphi'(x+y)+\varphi'(x-y)+\psi(x+y)-\psi(x-y)$，$u_y=\varphi'(x+y)-\varphi'(x-y)+\psi(x+y)+\psi(x-y)$，$u_{xx}=u_{yy}=\varphi''(x+y)+\varphi''(x-y)+\psi'(x+y)-\psi'(x-y)$。选 (B)。
【例3】设 $z=f(xy,x^2+y^2)$，求 $\dfrac{\partial z}{\partial x},\dfrac{\partial^2z}{\partial x\partial y}$，$f$ 有二阶连续偏导数。` },
      { p: 154, md: R`（例3续）$\dfrac{\partial z}{\partial x}=yf'_1+2xf'_2$，$\dfrac{\partial^2z}{\partial x\partial y}=f'_1+y[xf''_{11}+2yf''_{12}]+2x[xf''_{21}+2yf''_{22}]=f'_1+xy[f''_{11}+4f''_{22}]+2(x^2+y^2)f''_{12}$。

【例4】设 $f$ 可微，$f(0,0)=0$，$f'_x(0,0)=a$，$f'_y(0,0)=b$，$g(t)=f[t,f(t,t^2)]$，求 $g'(0)$。
【解】$g'(t)=f'_1+f'_2[f'_1(t,t^2)+f'_2(t,t^2)\cdot2t]$，$g'(0)=a+b(a+0)=a(1+b)$。

【例5】设 $u=f(x,y,z)$，$y=\varphi(x,t)$，$t=\psi(x,z)$，$f,\varphi,\psi$ 可微，求 $\dfrac{\partial u}{\partial x},\dfrac{\partial u}{\partial z}$。
【解】$\dfrac{\partial u}{\partial x}=\dfrac{\partial f}{\partial x}+\dfrac{\partial f}{\partial y}\left[\dfrac{\partial\varphi}{\partial x}+\dfrac{\partial\varphi}{\partial t}\dfrac{\partial\psi}{\partial x}\right]$，$\dfrac{\partial u}{\partial z}=\dfrac{\partial f}{\partial y}\dfrac{\partial\varphi}{\partial t}\dfrac{\partial\psi}{\partial z}+\dfrac{\partial f}{\partial z}$。

【例6】设 $f(u,v)$ 有二阶连续偏导数，$f_{uu}+f_{vv}=1$，$g(x,y)=f\left[xy,\dfrac12(x^2-y^2)\right]$，求 $g_{xx}+g_{yy}$。
【解】$g_x=yf_u+xf_v$，$g_{xx}=y(yf_{uu}+xf_{uv})+x(yf_{vu}+xf_{vv})+f_v$；$g_y=xf_u-yf_v$，$g_{yy}=x(xf_{uu}-yf_{uv})-y(xf_{vu}-yf_{vv})-f_v$。故 $g_{xx}+g_{yy}=(x^2+y^2)(f_{uu}+f_{vv})=x^2+y^2$。

【例7】设 $u=f(x,y)$ 有二阶连续偏导数，且 $4u_{xx}+12u_{xy}+5u_{yy}=0$，确定 $a,b$ 使 $\xi=x+ay,\eta=x+by$ 下简化为 $u_{\xi\eta}=0$。` },
      { p: 155, md: R`【解】$u_x=u_\xi+u_\eta$，$u_{xx}=u_{\xi\xi}+2u_{\xi\eta}+u_{\eta\eta}$，$u_y=au_\xi+bu_\eta$，$u_{yy}=a^2u_{\xi\xi}+2abu_{\xi\eta}+b^2u_{\eta\eta}$，$u_{xy}=au_{\xi\xi}+(a+b)u_{\xi\eta}+bu_{\eta\eta}$。代入得 $(5a^2+12a+4)u_{\xi\xi}+[10ab+12(a+b)+8]u_{\xi\eta}+(5b^2+12b+4)u_{\eta\eta}=0$。由 $5a^2+12a+4=0,5b^2+12b+4=0$ 且 $10ab+12(a+b)+8\neq0$ 得 $a=-2,b=-\dfrac25$ 或 $a=-\dfrac25,b=-2$。

【例8】设 $f(u)$ 有二阶连续导数，$z=f(e^x\sin y)$ 满足 $z_{xx}+z_{yy}=ze^{2x}$，求 $f(u)$。
【解】令 $u=e^x\sin y$，$z_x=f'(u)e^x\sin y$，$z_{xx}=f''(u)e^{2x}\sin^2y+f'(u)e^x\sin y$，$z_y=f'(u)e^x\cos y$，$z_{yy}=f''(u)e^{2x}\cos^2y-f'(u)e^x\sin y$，代入得 $f''(u)=f(u)$，即 $f''-f=0$，故 $f(u)=C_1e^u+C_2e^{-u}$。` },
      { p: 156, md: R`【例9】设 $(r,\theta)$ 为极坐标，$u=u(r,\theta)$ 有二阶连续偏导数，$\dfrac{\partial u}{\partial\theta}\equiv0$，且 $u_{xx}+u_{yy}=0$，求 $u$。
【解】由 $\dfrac{\partial u}{\partial\theta}\equiv0$ 知 $u=\varphi(r)$，$r=\sqrt{x^2+y^2}$。$\dfrac{\partial u}{\partial x}=\varphi'(r)\dfrac xr$，$\dfrac{\partial^2u}{\partial x^2}=\varphi''(r)\dfrac{x^2}{r^2}+\varphi'(r)\left(\dfrac1r-\dfrac{x^2}{r^3}\right)$，由对称性 $\dfrac{\partial^2u}{\partial y^2}=\varphi''(r)\dfrac{y^2}{r^2}+\varphi'(r)\left(\dfrac1r-\dfrac{y^2}{r^3}\right)$，故 $u_{xx}+u_{yy}=\varphi''(r)+\dfrac{\varphi'(r)}r=0$，即 $[r\varphi'(r)]'=0$，$r\varphi'(r)=C_1$，$\varphi(r)=C_1\ln r+C_2$，故 $u=C_1\ln r+C_2$。

【例10】若对任意 $t>0$ 有 $f(tx,ty)=t^nf(x,y)$，称 $f$ 为 $n$ 次齐次函数。试证：若 $f$ 可微，则 $f$ 为 $n$ 次齐次函数 $\Leftrightarrow x\dfrac{\partial f}{\partial x}+y\dfrac{\partial f}{\partial y}=nf(x,y)$。
【证】必要性：$f(tx,ty)=t^nf(x,y)$ 对 $t$ 求导并令 $t=1$ 得 $xf'_1+yf'_2=nf$。
充分性：令 $F(t)=f(tx,ty)$，则 $tF'(t)=txf'_1+tyf'_2=nf(tx,ty)=nF(t)$，$\dfrac{dF}{F}=\dfrac nt dt$，$F(t)=Ct^n$；由 $F(1)=f(x,y)$ 得 $C=f(x,y)$，故 $F(t)=t^nf(x,y)$。` },
      { p: 157, md: R`### 题型四　隐函数的偏导数与全微分
【例1】设 $z=z(x,y)$ 由 $z+e^z=xy$ 确定，求 $\dfrac{\partial z}{\partial x},\dfrac{\partial z}{\partial y}$。
【解1】公式：$\dfrac{\partial z}{\partial x}=-\dfrac{F'_x}{F'_z}=\dfrac{y}{1+e^z}$，$\dfrac{\partial z}{\partial y}=\dfrac{x}{1+e^z}$。
【解2】两端对 $x,y$ 求偏导：$(1+e^z)z_x=y,(1+e^z)z_y=x$。
【解3】两端求微分：$dz+e^zdz=ydx+xdy$，$dz=\dfrac{y}{1+e^z}dx+\dfrac{x}{1+e^z}dy$。

【例2】设 $F\left(\dfrac xz,\dfrac zy\right)=0$ 确定 $z=z(x,y)$，求 $\dfrac{\partial z}{\partial x},\dfrac{\partial z}{\partial y}$。
【解】$\dfrac{\partial z}{\partial x}=\dfrac{yzF'_1}{xyF'_1-z^2F'_2}$，$\dfrac{\partial z}{\partial y}=\dfrac{-z^3F'_2}{y(xyF'_1-z^2F'_2)}$。

【例3】设 $u=f(x,y,z)$ 有连续一阶偏导数，$z=z(x,y)$ 由 $xe^x-ye^y=ze^z$ 确定，求 $du$。` },
      { p: 158, md: R`【解1】$\dfrac{\partial z}{\partial x}=\dfrac{1+x}{1+z}e^{x-z}$，$\dfrac{\partial z}{\partial y}=-\dfrac{1+y}{1+z}e^{y-z}$，故 $du=\left(\dfrac{\partial f}{\partial x}+\dfrac{\partial f}{\partial z}\dfrac{1+x}{1+z}e^{x-z}\right)dx+\left(\dfrac{\partial f}{\partial y}-\dfrac{\partial f}{\partial z}\dfrac{1+y}{1+z}e^{y-z}\right)dy$。
【解2】$du=f_xdx+f_ydy+f_zdz$；对 $xe^x-ye^y=ze^z$ 求微分得 $(e^x+xe^x)dx-(e^y+ye^y)dy=(e^z+ze^z)dz$，解得 $dz=\dfrac{1+x}{1+z}e^{x-z}dx-\dfrac{1+y}{1+z}e^{y-z}dy$，代入即得。

【例4】设 $u=f(x,y,z)$，$\varphi(x^2,e^y,z)=0$，$y=\sin x$ 确定 $u=u(x)$，求 $\dfrac{du}{dx}$。
【解】$\dfrac{du}{dx}=f_x+f_y\cos x+f_z\dfrac{dz}{dx}$，$\varphi(x^2,e^y,z)=0$ 对 $x$ 求导得 $2x\varphi'_1+e^y\cos x\varphi'_2+\varphi'_3\dfrac{dz}{dx}=0$，故 $\dfrac{du}{dx}=f_x+f_y\cos x-\dfrac{f_z}{\varphi'_3}(2x\varphi'_1+\varphi'_2e^y\cos x)$。

【例5】设 $y=f(x,t)$，且 $F(x,y,t)=0$ 确定 $t=t(x,y)$，求 $\dfrac{dy}{dx}$。` },
      { p: 159, md: R`【解1】由 $y=f(x,t(x,y))$ 对 $x$ 求导：$\dfrac{dy}{dx}=f_x+f_t\left(\dfrac{\partial t}{\partial x}+\dfrac{\partial t}{\partial y}\dfrac{dy}{dx}\right)$，而 $\dfrac{\partial t}{\partial x}=-\dfrac{F_x}{F_t},\dfrac{\partial t}{\partial y}=-\dfrac{F_y}{F_t}$，解得 $\dfrac{dy}{dx}=\dfrac{F_tf_x-F_xf_t}{F_t+F_yf_t}$。
【解2】$dy=f_xdx+f_tdt$，$F_xdx+F_ydy+F_tdt=0$，解得 $dt=-\dfrac1{F_t}(F_xdx+F_ydy)$，代入整理得同式。

【例6】设 $f(x,y)$ 有二阶连续偏导数，$f'_y\neq0$，证明：$f(x,y)=C$ 为一条直线 $\Leftrightarrow f'^2_2f''_{11}-2f'_1f'_2f''_{12}+f'^2_1f''_{22}=0$。
【证】$f(x,y)=C$ 确定 $y=y(x)$，为直线 $\Leftrightarrow y''=0$。$f'_1+f'_2y'=0\Rightarrow y'=-\dfrac{f'_1}{f'_2}$，$y''=-\dfrac{f'^2_2f''_{11}-2f'_1f'_2f''_{12}+f'^2_1f''_{22}}{f'^3_2}$，故结论成立。` }
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
