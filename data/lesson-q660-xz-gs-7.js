window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q660_s6"] = {
    id: "q660_s6",
    ch: "660题 · 选择题 · 高等数学",
    title: "选择题 第 151–175 题",
    probTitle: "选择题（含原书详解）",
    book: "《数学基础过关660题（数学二）》",
    problems: [
      { n: 151, q: R`设 $u(x,y)$ 在点 $M_0(x_0,y_0)$ 处取极小值，并且 $\dfrac{\partial^2u(M_0)}{\partial x^2},\dfrac{\partial^2u(M_0)}{\partial y^2}$ 均存在，则
(A) $\dfrac{\partial^2u(M_0)}{\partial x^2}\geqslant0,\dfrac{\partial^2u(M_0)}{\partial y^2}\geqslant0$。
(B) $\dfrac{\partial^2u(M_0)}{\partial x^2}>0,\dfrac{\partial^2u(M_0)}{\partial y^2}>0$。
(C) $\dfrac{\partial^2u(M_0)}{\partial x^2}\geqslant0,\dfrac{\partial^2u(M_0)}{\partial y^2}\leqslant0$。
(D) $\dfrac{\partial^2u(M_0)}{\partial x^2}\leqslant0,\dfrac{\partial^2u(M_0)}{\partial y^2}\geqslant0$。`, a: R`(A)`, sol: R`【分析】令 $f(x)=u(x,y_0)$。因 $(x_0,y_0)$ 是 $u$ 的极小值点，故 $x_0$ 是 $f$ 的极小值点，由一元函数极值的必要条件与二阶条件：
$$f'(x_0)=\frac{\partial u(M_0)}{\partial x}=0,\qquad f''(x_0)=\frac{\partial^2u(M_0)}{\partial x^2}\ge0.$$
同理令 $g(y)=u(x_0,y)$，得 $\frac{\partial^2u(M_0)}{\partial y^2}\ge0$。选 (A)。
【评注】把二元极值化为一元极值；极小值点处二阶导数 $\ge0$（可能为 0）。` },
      { n: 152, q: R`设函数 $f(u,v)$ 由关系式 $f(x+g(y),y)=xy$ 确定，其中函数 $g(y)$ 可微，则 $\dfrac{\partial^2f}{\partial u\partial v}$ 等于
(A) $u$。 (B) $v$。 (C) $uv$。 (D) 1。`, a: R`(D)`, sol: R`【分析】令 $u=x+g(y)$、$v=y$，则 $x=u-g(v)$、$y=v$，代入得
$$f(u,v)=[u-g(v)]v=uv-vg(v).$$
故 $\frac{\partial f}{\partial u}=v$，$\frac{\partial^2f}{\partial u\partial v}=1$。选 (D)。
【评注】关键是反解出 $x=u-g(v)$，把 $f$ 表示为 $(u,v)$ 的显式。` },
      { n: 153, q: R`已知函数 $F(x,y,z)$ 具有一阶连续偏导数，且 $F(1,1,1)=0,F_x'(1,1,1)=2,F_y'(1,1,1)=-1$。若方程 $F(x,y,z)=0$ 确定隐函数 $z=z(x,y)$，满足 $z(1,1)=1$ 且 $z_x'(1,1)=1$，则 $z_y'(1,1)=$
(A) 1。 (B) $-1$。 (C) $\dfrac12$。 (D) $-\dfrac12$。`, a: R`(D)`, sol: R`【分析】由隐函数求导公式 $z_x=-\dfrac{F_x}{F_z}$，在 $(1,1,1)$ 处 $1=-\dfrac{2}{F_z}$，得 $F_z(1,1,1)=-2$。
又 $z_y=-\dfrac{F_y}{F_z}=-\dfrac{-1}{-2}=-\dfrac12$。选 (D)。
【评注】先用 $z_x$ 的条件求出 $F_z$，再求 $z_y$。` },
      { n: 154, q: R`设 $z=z(x,y)$ 是由方程 $z-y-x+2xe^{z-y-x}=0$ 确定的隐函数，则在点 $(0,1)$ 处 $z(x,y)$ 的全微分 $\mathrm{d}z\big|_{(0,1)}=$
(A) $\mathrm{d}x-\mathrm{d}y$。 (B) $\mathrm{d}x+\mathrm{d}y$。 (C) $-\mathrm{d}x+\mathrm{d}y$。 (D) $-\mathrm{d}x-\mathrm{d}y$。`, a: R`(B)`, sol: R`【分析】令 $x=0,y=1$ 得 $z(0,1)-1=0$，即 $z(0,1)=1$。对方程求全微分：
$$dz-dy-dx+2e^{z-y-x}dx+2xe^{z-y-x}d(z-y-x)=0.$$
令 $x=0,y=1,z=1$：$dz-dy-dx+2dx+0=0$，即 $dz=dx+dy$。选 (B)。
【评注】先求 $z(0,1)$，再在微分式中代点；不必解出 $z$。` },
      { n: 155, q: R`设 $f(x,y)$ 满足
$$f(x,y)=f(x_0,y_0)+a(x-x_0)+b(y-y_0)+o(\rho)\ (\rho=\sqrt{(x-x_0)^2+(y-y_0)^2}\to0),$$
其中 $a,b$ 为常数，则 $I=\lim\limits_{t\to0}\dfrac{f(x_0+2t,y_0)-f(x_0,y_0-t)}{2t}=$
(A) $a+b$。 (B) $a-b$。 (C) $a+\dfrac12b$。 (D) $a-\dfrac12b$。`, a: R`(C)`, sol: R`【分析】由条件 $f$ 在 $(x_0,y_0)$ 可微，$f'_x(x_0,y_0)=a$、$f'_y(x_0,y_0)=b$。代入：
$$f(x_0+2t,y_0)=f(x_0,y_0)+2at+o(t),\qquad f(x_0,y_0-t)=f(x_0,y_0)-bt+o(t),$$
故
$$I=\lim_{t\to0}\frac{(2a+b)t+o(t)}{2t}=a+\frac12b.$$
选 (C)。
【评注】线性化后相减；$f(x_0,y_0-t)$ 沿 $y$ 方向走 $-t$，对应 $-bt$。` },
      { n: 156, q: R`设方程组 $\begin{cases}x=u+vz,\\y=-u^2+v+z,\end{cases}$ 在点 $(2,1,1)$ 的某个邻域内确定隐函数 $u(x,y,z)$ 与 $v(x,y,z)$，且 $u(2,1,1)>0$，则 $\left(\dfrac{\partial u}{\partial x}+\dfrac{\partial v}{\partial y}+\dfrac{\partial u}{\partial z}\right)\Big|_{(2,1,1)}=$
(A) $\dfrac19$。 (B) $\dfrac13$。 (C) $\dfrac29$。 (D) $\dfrac23$。`, a: R`(D)`, sol: R`【分析】令 $x=2,y=z=1$：$2=u+v$、$1=-u^2+v$。消 $v$ 得 $u^2+u-2=0$，正根 $u=1$，故 $v=1$。
对两方程求全微分：$\begin{cases}dx=du+z\,dv+v\,dz,\\dy=-2u\,du+dv+dz.\end{cases}$ 在 $(2,1,1)$（$u=v=1$）处：
$$\begin{cases}dx=du+dv+dz,\\dy=-2du+dv+dz,\end{cases}\Rightarrow du=\frac13(dx-dy),\quad dv=\frac13(2dx+dy-3dz).$$
故 $u_x=\frac13$、$u_z=0$、$v_y=\frac13$，从而 $u_x+v_y+u_z=\frac23$。选 (D)。
【评注】用全微分形式不变性求隐函数组的偏导；先由已知点定出 $u,v$。` },
      { n: 157, q: R`设 $f(x,y)=\displaystyle\int_{y/x}^{x^2+y^2}e^{t^2}\,\mathrm{d}t$，则 $\mathrm{d}f(x,y)=$
(A) $e^{(x^2+y^2)}\,\mathrm{d}x-e^{\frac{y^2}{x^2}}\,\mathrm{d}y$。
(B) $\left(2xe^{(x^2+y^2)^2}-\dfrac{y}{x^2}e^{\frac{y^2}{x^2}}\right)\mathrm{d}x+\left(2ye^{(x^2+y^2)^2}+\dfrac1xe^{\frac{y^2}{x^2}}\right)\mathrm{d}y$。
(C) $\left(2xe^{(x^2+y^2)^2}+\dfrac{y}{x^2}e^{\frac{y^2}{x^2}}\right)\mathrm{d}x+\left(2ye^{(x^2+y^2)^2}-\dfrac1xe^{\frac{y^2}{x^2}}\right)\mathrm{d}y$。
(D) $\left(2xe^{(x^2+y^2)^2}-\dfrac{y}{x^2}e^{\frac{y^2}{x^2}}\right)\mathrm{d}x+\left(2ye^{(x^2+y^2)^2}-\dfrac1xe^{\frac{y^2}{x^2}}\right)\mathrm{d}y$。`, a: R`(C)`, sol: R`【分析】由全微分形式不变性与变限积分求导：
$$df=e^{(x^2+y^2)^2}d(x^2+y^2)-e^{(y/x)^2}d\left(\frac yx\right)$$
$$=e^{(x^2+y^2)^2}(2x\,dx+2y\,dy)-e^{y^2/x^2}\frac{x\,dy-y\,dx}{x^2}$$
$$=\left(2xe^{(x^2+y^2)^2}+\frac{y}{x^2}e^{y^2/x^2}\right)dx+\left(2ye^{(x^2+y^2)^2}-\frac1xe^{y^2/x^2}\right)dy.$$
选 (C)。
【评注】上限 $x^2+y^2$、下限 $y/x$，分别求微分；注意下限对应负号。` },
      { n: 158, q: R`设在全平面上有 $\dfrac{\partial f(x,y)}{\partial x}<0$，$\dfrac{\partial f(x,y)}{\partial y}>0$，则使得 $f(x_1,y_1)<f(x_2,y_2)$ 成立的一个充分条件是
(A) $x_1<x_2,y_1<y_2$。 (B) $x_1<x_2,y_1>y_2$。
(C) $x_1>x_2,y_1<y_2$。 (D) $x_1>x_2,y_1>y_2$。`, a: R`(C)`, sol: R`【分析】$f'_x<0$ ⇒ 固定 $y$ 时 $f$ 关于 $x$ 单调下降；$f'_y>0$ ⇒ 固定 $x$ 时 $f$ 关于 $y$ 单调上升。
当 $x_1>x_2$ 时 $f(x_1,y_1)<f(x_2,y_1)$；又 $y_1<y_2$ 时 $f(x_2,y_1)<f(x_2,y_2)$。故 $x_1>x_2,y_1<y_2$ 时 $f(x_1,y_1)<f(x_2,y_1)<f(x_2,y_2)$。选 (C)。
【评注】拆成两步一元单调性比较；$f'_x<0$、$f'_y>0$ 决定方向。` },
      { n: 159, q: R`设 $f(x,y)=x^3-4x^2+2xy-y^2$，区域 $D=\{(x,y)\mid-1\leqslant x\leqslant4,-1\leqslant y\leqslant1\}$，则下面结论正确的是
(A) 点 $(0,0)$ 是 $f(x,y)$ 的极大值点且是 $f(x,y)$ 在区域 $D$ 的最大值点。
(B) 点 $(0,0)$ 是 $f(x,y)$ 的极大值点但不是 $f(x,y)$ 在区域 $D$ 的最大值点。
(C) 点 $(0,0)$ 是 $f(x,y)$ 的极小值点。
(D) 点 $(0,0)$ 是 $f(x,y)$ 的驻点，但不是极值点。`, a: R`(B)`, sol: R`【分析】解 $\begin{cases}f_x=3x^2-8x+2y=0\\f_y=2x-2y=0\end{cases}$ 得驻点 $(0,0),(2,2)$，只有 $(0,0)$ 在 $D$ 内。
$A=f''_{xx}=6x-8$，$B=f''_{xy}=2$，$C=f''_{yy}=-2$。在 $(0,0)$ 处 $A=-8$，$AC-B^2=16-4=12>0$ 且 $A<0$，故 $(0,0)$ 是极大值点。
但 $f(0,0)=0$，而边界点 $(4,1)$ 处 $f(4,1)=7>0$，故 $(0,0)$ 不是 $D$ 上的最大值点。选 (B)。
【评注】区域内部唯一的极大值点未必是区域上的最大值点（多元与一元的区别）。` },
      { n: 160, q: R`设有三个正数 $x,y,z$ 满足 $x+y+z=a$，其中 $a>0$ 为常数，又 $xyz\leqslant b$，则 $b$ 的最小取值是
(A) $\dfrac{a^3}{21}$。 (B) $\dfrac{a^3}{18}$。 (C) $\dfrac{a^3}{9}$。 (D) $\dfrac{a^3}{27}$。`, a: R`(D)`, sol: R`【分析】问题归结为求 $u=xyz$ 在 $x+y+z=a$ 下的最大值。
用拉格朗日乘数法：$F=xyz+\lambda(x+y+z-a)$，由 $yz+\lambda=xz+\lambda=xy+\lambda=0$ 得 $x=y=z$，代入 $x+y+z=a$ 得 $x=y=z=\frac a3$。最大值 $u=\left(\frac a3\right)^3=\frac{a^3}{27}$。
故 $b$ 的最小值为 $\frac{a^3}{27}$。选 (D)。
【评注】$b$ 需不小于 $xyz$ 的最大值；均值不等式 $xyz\le\left(\frac{a}{3}\right)^3$。` },
      { n: 161, q: R`函数 $f(x,y)=e^{-xy}$ 在区域 $D=\{(x,y)\mid4x^2+y^2\leqslant1\}$ 上的最大值是
(A) $e^2$。 (B) $e$。 (C) $e^{\frac14}$。 (D) $e^{\frac12}$。`, a: R`(C)`, sol: R`【分析】令 $g=xy$，则 $f=e^{-g}$，求 $f$ 的最大值即求 $g$ 的最小值。
$g$ 在 $D$ 内唯一驻点 $(0,0)$，$g(0,0)=0$。在边界 $4x^2+y^2=1$ 上用拉格朗日乘数法可得四个驻点，其中 $P_2\left(-\frac1{2\sqrt2},\frac1{\sqrt2}\right)$、$P_3\left(\frac1{2\sqrt2},-\frac1{\sqrt2}\right)$ 处 $g=-\frac14$（最小值）。故 $f$ 的最大值为 $e^{1/4}$。选 (C)。
【评注】$e^{-xy}$ 关于 $-xy$ 单调增，故 $xy$ 最小处 $f$ 最大；比较内部驻点与边界。` },
      { n: 162, q: R`曲面 $z^2=xy+4$ 到原点 $(0,0,0)$ 的距离 $d=$
(A) 1。 (B) 2。 (C) $2\sqrt2$。 (D) 4。`, a: R`(B)`, sol: R`【分析】$d$ 等于 $x^2+y^2+z^2$ 在约束 $z^2-xy-4=0$ 下的最小值再开方。
【分析1】拉格朗日乘数法：$F=x^2+y^2+z^2+\lambda(z^2-xy-4)$，得驻点 $(0,0,\pm2)$ 与 $(\pm2,\mp2,0)$。前者到原点距离 $2$，后者 $2\sqrt2$。故 $d=2$。
【分析2】由约束 $z^2=xy+4$（$xy\ge-4$），$x^2+y^2+z^2=x^2+y^2+xy+4$。解 $2x+y=2y+x=0$ 得唯一驻点 $(0,0)$，$f(0,0)=4$；边界 $xy=-4$ 上 $f=x^2+\frac{16}{x^2}+4\ge8$。故最小值 4，$d=2$。选 (B)。
【评注】距离最小即 $x^2+y^2+z^2$ 最小；比较驻点与边界。` },
      { n: 163, q: R`已知函数 $f(x,y)$ 在点 $(0,0)$ 某邻域内连续，且
$$\lim_{(x,y)\to(0,0)}\frac{f(x,y)+4x^2-y^2}{x^4+x^2y^2+y^4}=1,$$
则
(A) 点 $(0,0)$ 不是 $f(x,y)$ 的极值点。 (B) 点 $(0,0)$ 是 $f(x,y)$ 的极大值点。
(C) 点 $(0,0)$ 是 $f(x,y)$ 的极小值点。 (D) 所给条件不足以判断点 $(0,0)$ 是否为 $f(x,y)$ 的极值点。`, a: R`(A)`, sol: R`【分析】取满足条件的特例 $f(x,y)=-4x^2+y^2+x^4+x^2y^2+y^4$。计算 $f'_x(0,0)=f'_y(0,0)=0$，$A=f''_{xx}(0,0)=-8$，$B=f''_{xy}(0,0)=0$，$C=f''_{yy}(0,0)=2$，$AC-B^2=-16<0$，故 $(0,0)$ 不是极值点。
（一般地，由条件得 $f(x,y)=y^2-4x^2+(x^4+x^2y^2+y^4)(1+g)$，其中 $g\to0$。于是当 $\rho$ 充分小时 $f(x,0)<0$、$f(0,y)>0$，故 $(0,0)$ 不是极值点。）选 (A)。
【评注】选择特例验证；也可用极限与无穷小的关系写出一般式后判断符号。` },
      { n: 164, q: R`设 $f(x,y)$ 为区域 $D$ 内的函数，则下列说法中不正确的是
(A) 若在 $D$ 内，有 $\dfrac{\partial f}{\partial x}\equiv\dfrac{\partial f}{\partial y}\equiv0$，则 $f(x,y)\equiv$ 常数。
(B) 若在 $D$ 内的任何一点处都存在满足 $\begin{vmatrix}a&b\\c&d\end{vmatrix}\neq0$ 的常数 $a,b,c,d$ 使得 $a\dfrac{\partial f}{\partial x}+b\dfrac{\partial f}{\partial y}=c\dfrac{\partial f}{\partial x}+d\dfrac{\partial f}{\partial y}=0$，则 $f(x,y)\equiv$ 常数。
(C) 若在 $D$ 内，有 $\mathrm{d}f(x,y)\equiv0$，则 $f(x,y)\equiv$ 常数。
(D) 若在 $D$ 内，有 $x\dfrac{\partial f}{\partial x}+y\dfrac{\partial f}{\partial y}\equiv0$，则 $f(x,y)\equiv$ 常数。`, a: R`(D)`, sol: R`【分析】(A)(C) 正确：$f\equiv$ 常数 $\iff f_x\equiv f_y\equiv0\iff df\equiv0$。
(B) 正确：系数行列式非零的齐次方程组只有零解，故 $f_x=f_y=0$，$f\equiv$ 常数。
(D) 错：在极坐标下 $x f_x+y f_y=r f_r=0$，只说明 $f$ 与 $r$ 无关，不能说明 $f$ 为常数。例如 $f=\arctan\frac yx$（$x>0$）满足 $xf_x+yf_y=0$ 但不为常数。选 (D)。
【评注】$xf_x+yf_y=0$ 是「径向不变」，只能推出 $f$ 只与 $\theta$ 有关。` },
      { n: 165, q: R`设 $f(x,y)$ 为连续函数，且 $D=\{(x,y)\mid x^2+y^2\leqslant t^2\}$，则 $\lim\limits_{t\to0^+}\dfrac{1}{\pi t^2}\displaystyle\iint\limits_Df(x,y)\mathrm{d}\sigma$
(A) $=f(0,0)$。 (B) $=-f(0,0)$。 (C) $=f'(0,0)$。 (D) 不存在。`, a: R`(A)`, sol: R`【分析】由二重积分中值定理，存在 $(\xi,\eta)\in D$ 使 $\iint_Df\,d\sigma=f(\xi,\eta)|D|=f(\xi,\eta)\pi t^2$。故
$$\lim_{t\to0^+}\frac{1}{\pi t^2}\iint_Df\,d\sigma=\lim_{t\to0^+}f(\xi,\eta)=f(0,0).$$
选 (A)。
【评注】二重积分中值定理 $|D|=\pi t^2$；$(\xi,\eta)\to(0,0)$ 时由连续性得 $f\to f(0,0)$。` },
      { n: 166, q: R`交换积分次序可得累次积分 $\displaystyle\int_0^2\mathrm{d}x\int_0^{x^2}f(x,y)\mathrm{d}y=$
(A) $\displaystyle\int_0^4\mathrm{d}y\int_{\sqrt y}^2f(x,y)\mathrm{d}x$。 (B) $\displaystyle\int_0^4\mathrm{d}y\int_0^{\sqrt y}f(x,y)\mathrm{d}x$。
(C) $\displaystyle\int_0^4\mathrm{d}y\int_{y^2}^2f(x,y)\mathrm{d}x$。 (D) $\displaystyle\int_0^4\mathrm{d}y\int_2^{\sqrt y}f(x,y)\mathrm{d}x$。`, a: R`(A)`, sol: R`【分析】积分域 $D=\{0\le x\le2,0\le y\le x^2\}$。换序：$0\le y\le4$，由 $y\le x^2$ 且 $x\le2$ 得 $\sqrt y\le x\le2$，即 $D=\{0\le y\le4,\sqrt y\le x\le2\}$。选 (A)。
【评注】画域后重新定限；$x^2$ 的上限对应 $x=\sqrt y$。` },
      { n: 167, q: R`设 $x=r\cos\theta,y=r\sin\theta$，则在极坐标系 $(r,\theta)$ 中的累次积分
$$\int_0^{\frac\pi2}\mathrm{d}\theta\int_{\frac1{\cos\theta+\sin\theta}}^1f(r\cos\theta,r\sin\theta)\mathrm{d}r$$
可化为直角坐标系 $(x,y)$ 中的累次积分
(A) $\displaystyle\int_0^1\mathrm{d}x\int_{1-x}^{\sqrt{1-x^2}}f(x,y)\mathrm{d}y$。
(B) $\displaystyle\int_0^1\mathrm{d}x\int_{1-x}^{\sqrt{1-x^2}}\frac{f(x,y)}{\sqrt{x^2+y^2}}\mathrm{d}y$。
(C) $\displaystyle\int_0^1\mathrm{d}x\int_x^{\sqrt{1-x^2}}f(x,y)\mathrm{d}y$。
(D) $\displaystyle\int_0^1\mathrm{d}x\int_x^{\sqrt{1-x^2}}\frac{f(x,y)}{\sqrt{x^2+y^2}}\mathrm{d}y$。`, a: R`(B)`, sol: R`【分析】极坐标面积元 $d\sigma=r\,dr\,d\theta$，故被积函数应除以 $r=\sqrt{x^2+y^2}$。
积分域：$0\le\theta\le\frac\pi2$、$\frac1{\cos\theta+\sin\theta}\le r\le1$，即内外边界为 $x+y=1$（即 $r\cos\theta+r\sin\theta=1$）与 $x^2+y^2=1$。故 $D=\{0\le x\le1,1-x\le y\le\sqrt{1-x^2}\}$。
所以原式 $=\int_0^1dx\int_{1-x}^{\sqrt{1-x^2}}\frac{f(x,y)}{\sqrt{x^2+y^2}}dy$。选 (B)。
【评注】极坐标化直角坐标时被积函数要乘 $r$（即除以 $\sqrt{x^2+y^2}$）；边界 $r=1/(\cos\theta+\sin\theta)$ 即 $x+y=1$。` },
      { n: 168, q: R`若 $\displaystyle\iint\limits_{x^2+y^2\leqslant1}x^ny^m\mathrm{d}\sigma=0$（$m,n$ 为正整数），则有
(A) $m,n$ 为任意正整数。 (B) $m,n$ 均为奇数。
(C) $m,n$ 中至少有一个为奇数。 (D) $m+n$ 必为奇数。`, a: R`(C)`, sol: R`【分析】积分域关于 $x$ 轴、$y$ 轴都对称。若 $m,n$ 中至少有一个为奇数（不妨设 $n$ 为奇数），则被积函数关于 $x$ 为奇函数，由对称性积分为 0。
反之若积分为 0，则至少一个为奇数。故 (C) 是充要条件。选 (C)。
【评注】(B) 只是充分不必要；(C) 才是充要条件。` },
      { n: 169, q: R`设 $I_1=\displaystyle\iint\limits_D\dfrac{x+y}{4}\mathrm{d}x\mathrm{d}y,I_2=\iint\limits_D\sqrt{\dfrac{x+y}{4}}\mathrm{d}x\mathrm{d}y,I_3=\iint\limits_D\sqrt[3]{\dfrac{x+y}{4}}\mathrm{d}x\mathrm{d}y$，
$D=\{(x,y)\mid(x-1)^2+(y-1)^2\leqslant2\}$，则有
(A) $I_1<I_2<I_3$。 (B) $I_2<I_3<I_1$。 (C) $I_3<I_1<I_2$。 (D) $I_3<I_2<I_1$。`, a: R`(A)`, sol: R`【分析】$D$ 内 $0\le\frac{x+y}{4}\le1$。当 $0\le t\le1$ 时 $t\le\sqrt t\le\sqrt[3]t$（等号不恒成立），故被积函数 $\frac{x+y}{4}\le\sqrt{\frac{x+y}{4}}\le\sqrt[3]{\frac{x+y}{4}}$，从而 $I_1<I_2<I_3$。选 (A)。
【评注】$t\in(0,1)$ 时 $t<\sqrt[3]t<\sqrt t$；先确定 $\frac{x+y}{4}$ 的取值范围。` },
      { n: 170, q: R`累次积分 $I=\displaystyle\int_0^1\mathrm{d}y\int_y^1\sqrt{x^2+y^2}\,\mathrm{d}x$ 等于
(A) $\dfrac{\sqrt2}{3}+\dfrac13\ln(\sqrt2+1)$。 (B) $\dfrac{\sqrt2}{3}+\dfrac13\ln(\sqrt2-1)$。
(C) $\dfrac{\sqrt2}{6}+\dfrac16\ln(\sqrt2+1)$。 (D) $\dfrac{\sqrt2}{6}+\dfrac16\ln(\sqrt2-1)$。`, a: R`(C)`, sol: R`【分析】积分域 $D=\{0\le y\le1,y\le x\le1\}$，用极坐标：$0\le\theta\le\frac\pi4$，$0\le r\le\frac1{\cos\theta}$。故
$$I=\int_0^{\pi/4}d\theta\int_0^{1/\cos\theta}r\cdot r\,dr=\frac13\int_0^{\pi/4}\frac{d\theta}{\cos^3\theta}=\frac13\left[\frac{\sqrt2}{2}+\frac12\ln(\sqrt2+1)\right]=\frac{\sqrt2}{6}+\frac16\ln(\sqrt2+1).$$
选 (C)。
【评注】$\int_0^{\pi/4}\sec^3\theta\,d\theta=\frac{\sqrt2}{2}+\frac12\ln(\sqrt2+1)$；用极坐标简化 $\sqrt{x^2+y^2}$。` },
      { n: 171, q: R`累次积分 $I=\displaystyle\int_0^1\mathrm{d}x\int_{x^2}^1\dfrac{xy}{\sqrt{1+y^3}}\mathrm{d}y=$
(A) $\dfrac14(\sqrt2-1)$。 (B) $\dfrac13(\sqrt2-1)$。 (C) $\dfrac14(\sqrt2+1)$。 (D) $\dfrac14(\sqrt2+1)$。`, a: R`(B)`, sol: R`【分析】交换积分次序：$D=\{0\le x\le1,x^2\le y\le1\}=\{0\le y\le1,0\le x\le\sqrt y\}$。
$$I=\int_0^1dy\int_0^{\sqrt y}\frac{xy}{\sqrt{1+y^3}}dx=\int_0^1\frac{y}{\sqrt{1+y^3}}\cdot\frac{y}{2}dy=\frac12\int_0^1\frac{y^2}{\sqrt{1+y^3}}dy$$
$$=\frac16\int_0^1(1+y^3)^{-1/2}d(y^3)=\frac16\cdot2\sqrt{1+y^3}\Big|_0^1=\frac13(\sqrt2-1).$$
选 (B)。
【评注】交换次序后先对 $x$ 积分；换元 $u=1+y^3$。` },
      { n: 172, q: R`设区域 $D$ 由 $x=1,y=-1$ 与 $y=x^3$ 围成，$D_1$ 是 $D$ 在第一象限的部分，则
$$\iint\limits_D\left(xye^{-x^2}+\sin x\cos y\right)\mathrm{d}\sigma=$$
(A) $2\displaystyle\iint\limits_{D_1}xye^{-x^2}\mathrm{d}\sigma$。 (B) $4\displaystyle\iint\limits_{D_1}\left(xye^{-x^2}+\sin x\cos y\right)\mathrm{d}\sigma$。
(C) $2\displaystyle\iint\limits_{D_1}\sin x\cos y\,\mathrm{d}\sigma$。 (D) $0$。`, a: R`(C)`, sol: R`【分析】添加辅助线 $y=-x^3$（$x\ge0$）把 $D$ 分成 $D_1,D_2,D_3,D_4$，其中 $D_1$ 与 $D_2$ 关于 $x$ 轴对称，$D_3$ 与 $D_4$ 关于 $y$ 轴对称。
$xye^{-x^2}$ 关于 $x$、$y$ 都是奇函数，故 $\iint_Dxye^{-x^2}d\sigma=0$。
$\sin x\cos y$ 关于 $x$ 为奇、关于 $y$ 为偶，故 $\iint_D\sin x\cos y\,d\sigma=2\iint_{D_1}\sin x\cos y\,d\sigma+0$。
所以原式 $=2\iint_{D_1}\sin x\cos y\,d\sigma$。选 (C)。
【评注】被积函数对 $x,y$ 均为奇时注意区域的分块对称性。` },
      { n: 173, q: R`设 $f$ 连续，则累次积分 $I=\displaystyle\int_a^b\mathrm{d}x\int_a^x(x-y)f(y)\mathrm{d}y$ 可化为定积分
(A) $\dfrac12\displaystyle\int_a^b(b-y)^2f(y)\mathrm{d}y$。 (B) $\dfrac12\displaystyle\int_a^b(y-a)^2f(y)\mathrm{d}y$。
(C) $\displaystyle\int_a^b(b-y)^2f(y)\mathrm{d}y$。 (D) $\displaystyle\int_a^b(y-a)^2f(y)\mathrm{d}y$。`, a: R`(A)`, sol: R`【分析】积分域 $D=\{a\le x\le b,a\le y\le x\}$，换序为 $D=\{a\le y\le b,y\le x\le b\}$。故
$$I=\int_a^bdy\int_y^b(x-y)f(y)dx=\int_a^bf(y)dy\int_y^b(x-y)dx=\frac12\int_a^bf(y)(b-y)^2dy.$$
选 (A)。
【评注】换序后先对 $x$ 积分，内层 $\int_y^b(x-y)dx=\frac{(b-y)^2}{2}$。` },
      { n: 174, q: R`设区域 $D$ 由 $y=x,y=x+1,y=1,y=3$ 围成，则 $\displaystyle\iint\limits_Dy\,\mathrm{d}\sigma=$
(A) 2。 (B) 3。 (C) 4。 (D) 6。`, a: R`(C)`, sol: R`【分析】先积 $x$ 后积 $y$ 不必分块：$D=\{1\le y\le3,y-1\le x\le y\}$。故
$$\iint_Dy\,d\sigma=\int_1^3dy\int_{y-1}^yy\,dx=\int_1^3y\,dy=\frac12y^2\Big|_1^3=4.$$
选 (C)。
【评注】选择积分次序使区域不必分块：$x$ 从 $y-1$ 到 $y$。` },
      { n: 175, q: R`设积分区域 $D=\{(x,y)\mid x^2+y^2\leqslant2x+2y\}$，则 $\displaystyle\iint\limits_D(x^2+xy+y^2)\mathrm{d}\sigma=$
(A) $6\pi$。 (B) $8\pi$。 (C) $10\pi$。 (D) $12\pi$。`, a: R`(B)`, sol: R`【分析】$x^2+y^2\le2x+2y\iff(x-1)^2+(y-1)^2\le2$。令 $x=u+1$、$y=v+1$，$D_1=\{u^2+v^2\le2\}$。
$$\iint_D(x^2+xy+y^2)d\sigma=\iint_{D_1}[u^2+uv+v^2+3(u+v)+3]du\,dv.$$
由对称性 $\iint_{D_1}[uv+3(u+v)]du\,dv=0$，$\iint_{D_1}du\,dv=2\pi$（面积）。用极坐标：$\iint_{D_1}(u^2+v^2)du\,dv=\int_0^{2\pi}d\theta\int_0^{\sqrt2}r^3dr=2\pi$。
故原式 $=2\pi+0+3\cdot2\pi=8\pi$。选 (B)。
【评注】平移化到圆心在原点的圆；奇函数项积分为零；$\iint(u^2+v^2)=2\pi$。` }
    ]
  };
})();
