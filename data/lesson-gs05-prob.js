window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["gs05_s2"].problems = [
    { n: 1, q: R`已知 $f(x,y)=\mathrm{e}^{\sqrt{x^2+y^2}}$，则（  ）
(A) $f'_x(0,0),f'_y(0,0)$ 都存在。 (B) $f'_x(0,0)$ 不存在，$f'_y(0,0)$ 存在。
(C) $f'_x(0,0)$ 存在，$f'_y(0,0)$ 不存在。 (D) $f'_x(0,0),f'_y(0,0)$ 都不存在。`, a: R`(B)`, sol: R`原书答案 (B)。` },
    { n: 2, q: R`设函数 $z=f(x,y)$ 在点 $(x_0,y_0)$ 处有 $f'_x(x_0,y_0)=a$，$f'_y(x_0,y_0)=b$，则下列结论正确的是（  ）
(A) $\lim\limits_{\substack{x\to x_0\\y\to y_0}}f(x,y)$ 存在，但 $f(x,y)$ 在 $(x_0,y_0)$ 处不一定连续。
(B) $f(x,y)$ 在 $(x_0,y_0)$ 处连续。
(C) $\mathrm{d}z|_{(x_0,y_0)}=a\mathrm{d}x+b\mathrm{d}y$。
(D) $\lim\limits_{x\to x_0}f(x,y_0)$ 及 $\lim\limits_{y\to y_0}f(x_0,y)$ 都存在且相等。`, a: R`(D)`, sol: R`原书答案 (D)。` },
    { n: 3, q: R`设 $f(x,y)=\begin{cases}\dfrac{xy}{\sqrt{x^2+y^2}},&(x,y)\neq(0,0),\\0,&(x,y)=(0,0).\end{cases}$ 则 $f(x,y)$ 在 $(0,0)$ 处（  ）
(A) 两个偏导数不存在。 (B) 两个偏导数存在但不可微。
(C) 偏导数连续。 (D) 可微但偏导数不连续。`, a: R`(B)`, sol: R`原书答案 (B)。` },
    { n: 4, q: R`设 $f(x,y)=\begin{cases}(x^2+y^2)\sin\dfrac{1}{x^2+y^2},&(x,y)\neq(0,0),\\0,&(x,y)=(0,0).\end{cases}$ 则 $f(x,y)$ 在 $(0,0)$ 处（  ）
(A) 两个偏导数不存在。 (B) 两个偏导数存在但不可微。
(C) 偏导数连续。 (D) 可微但偏导数不连续。`, a: R`(D)`, sol: R`原书答案 (D)。` },
    { n: 5, q: R`设函数 $f(x,y)$ 可微，且对任意 $x,y$ 都有 $\dfrac{\partial f(x,y)}{\partial x}>0$，$\dfrac{\partial f(x,y)}{\partial y}<0$，则使不等式 $f(x_1,y_1)<f(x_2,y_2)$ 成立的一个充分条件是（  ）
(A) $x_1>x_2,y_1<y_2$。 (B) $x_1>x_2,y_1>y_2$。
(C) $x_1<x_2,y_1<y_2$。 (D) $x_1<x_2,y_1>y_2$。`, a: R`(D)`, sol: R`原书答案 (D)。` },
    { n: 6, q: R`设可微函数 $f(x,y)$ 满足 $\dfrac{\partial f}{\partial x}>1$，$\dfrac{\partial f}{\partial y}<-1$，$f(0,0)=0$，则下列结论正确的是（  ）
(A) $f(1,1)>1$。 (B) $f(-1,1)>-2$。
(C) $f(-1,-1)<0$。 (D) $f(1,-1)>2$。`, a: R`(D)`, sol: R`原书答案 (D)。` },
    { n: 7, q: R`设函数 $f(x,y)$ 满足 $\dfrac{\partial f}{\partial x}<0$，$\dfrac{\partial f}{\partial y}>1$，则下列结论正确的是（  ）
(A) $f(0,0)<f(1,0)$。 (B) $f(x,2)<f(x,1)$。
(C) $f(-1,1)>f(0,0)+1$。 (D) $f(1,-1)>f(0,0)+1$。`, a: R`(C)`, sol: R`原书答案 (C)。` },
    { n: 8, q: R`设函数 $f(x,y)$ 在点 $(0,0)$ 的某邻域内有定义，且 $\lim\limits_{(x,y)\to(0,0)}\dfrac{f(x,y)-(x^2+y^2)}{\sqrt{x^2+y^2}}=1$，则 $f(x,y)$ 在点 $(0,0)$ 处（  ）
(A) 连续。 (B) 两个偏导数都不存在。
(C) 两个偏导数存在但不可微。 (D) 可微。`, a: R`(B)`, sol: R`原书答案 (B)。` },
    { n: 9, q: R`已知 $f(x,y)$ 在 $(0,0)$ 点连续，且 $\lim\limits_{(x,y)\to(0,0)}\dfrac{f(x,y)+2x-y+x^2+y^2}{\sqrt{x^2+y^2}}=0$，则下列结论不正确的是（  ）
(A) $f(x,y)$ 在 $(0,0)$ 点可微。 (B) $f'_x(0,0)=-2$。
(C) $f'_y(0,0)=1$。 (D) $f'_x(0,0)$ 和 $f'_y(0,0)$ 都不一定存在。`, a: R`(D)`, sol: R`原书答案 (D)。` },
    { n: 10, q: R`设满足 $\dfrac{\partial^2 z}{\partial y^2}=2$，且 $f(x,0)=1$，$f'_y(x,0)=x$ 则 $f(x,y)$ 等于（  ）
(A) $1-xy+y^2$。 (B) $1+xy+y^2$。
(C) $1-x^2y+y^2$。 (D) $1+x^2y+y^2$。`, a: R`(B)`, sol: R`原书答案 (B)。` },
    { n: 11, q: R`已知函数 $f(x,y)$ 在点 $(0,0)$ 某邻域内连续，且 $\lim\limits_{\substack{x\to0\\y\to0}}\dfrac{f(x,y)-(x^2+y^2)}{\sqrt{x^2+y^2}}=\alpha>0$，则（  ）
(A) 点 $(0,0)$ 是 $f(x,y)$ 的驻点但不是极值点。
(B) 点 $(0,0)$ 是 $f(x,y)$ 的极大值点但不是驻点。
(C) 点 $(0,0)$ 是 $f(x,y)$ 的极小值点但不是驻点。
(D) 根据所给条件无法判断点 $(0,0)$ 是否为 $f(x,y)$ 的极值点。`, a: R`(C)`, sol: R`原书答案 (C)。` },
    { n: 12, q: R`设函数 $z=f(x,y)$ 的全微分为 $\mathrm{d}z=x\mathrm{d}x+y\mathrm{d}y$，则点 $(0,0)$（  ）
(A) 不是 $f(x,y)$ 的连续点。 (B) 不是 $f(x,y)$ 的极值点。
(C) 是 $f(x,y)$ 的极大值点。 (D) 是 $f(x,y)$ 的极小值点。`, a: R`(D)`, sol: R`原书答案 (D)。` },
    { n: 13, q: R`设函数 $f(x)$ 具有二阶连续导数，且 $f(x)>0$，$f'(0)=0$，则函数 $z=f(x)\ln f(y)$ 在点 $(0,0)$ 处取得极小值的一个充分条件是（  ）
(A) $f(0)>1,f''(0)>0$。 (B) $f(0)>1,f''(0)<0$。
(C) $f(0)<1,f''(0)>0$。 (D) $f(0)<1,f''(0)<0$。`, a: R`(A)`, sol: R`原书答案 (A)。` },
    { n: 14, q: R`设函数 $f(x),g(x)$ 均有二阶连续导数，满足 $f(0)>0$，$g(0)<0$，且 $f'(0)=g'(0)=0$，则函数 $z=f(x)g(y)$ 在点 $(0,0)$ 处取得极小值的一个充分条件是（  ）
(A) $f''(0)<0,g''(0)>0$。 (B) $f''(0)<0,g''(0)<0$。
(C) $f''(0)>0,g''(0)>0$。 (D) $f''(0)>0,g''(0)<0$。`, a: R`(A)`, sol: R`原书答案 (A)。` },
    { n: 15, q: R`设 $F(x,y)$ 具有二阶连续偏导数，且 $F(x_0,y_0)=0$，$F'_x(x_0,y_0)=0$，$F'_y(x_0,y_0)>0$。若一元函数 $y=y(x)$ 是由方程 $F(x,y)=0$ 所确定的在点 $(x_0,y_0)$ 附近的隐函数，则 $x_0$ 是函数 $y=y(x)$ 的极小值点的一个充分条件是（  ）
(A) $F''_{xx}(x_0,y_0)>0$。 (B) $F''_{xx}(x_0,y_0)<0$。
(C) $F''_{xy}(x_0,y_0)>0$。 (D) $F''_{yy}(x_0,y_0)<0$。`, a: R`(B)`, sol: R`原书答案 (B)。` },
    { n: 16, q: R`设函数 $u(x,y)$ 在有界闭区域 $D$ 上连续，在 $D$ 的内部具有 2 阶连续偏导数，且满足 $\dfrac{\partial^2u}{\partial x\partial y}\neq0$ 及 $\dfrac{\partial^2u}{\partial x^2}+\dfrac{\partial^2u}{\partial y^2}=0$，则（  ）
(A) $u(x,y)$ 的最大值和最小值都在 $D$ 的边界上取得。
(B) $u(x,y)$ 的最大值和最小值都在 $D$ 的内部取得。
(C) $u(x,y)$ 的最大值在 $D$ 的内部取得，最小值都在 $D$ 的边界上取得。
(D) $u(x,y)$ 的最小值在 $D$ 的内部取得，最大值都在 $D$ 的边界上取得。`, a: R`(A)`, sol: R`原书答案 (A)。` },
    { n: 17, q: R`设 $z=\dfrac{x\cos(y-1)-(y-1)\cos x}{1+\sin x+\sin(y-1)}$，则 $\left.\dfrac{\partial z}{\partial y}\right|_{(0,1)}=$ ______。`, a: R`$-1$`, sol: R`原书答案 $-1$。` },
    { n: 18, q: R`设 $z=\arctan(xy^2)$，则 $\left.\dfrac{\partial^2z}{\partial y\partial x}\right|_{(0,1)}=$ ______。`, a: R`$2$`, sol: R`原书答案 $2$。` },
    { n: 19, q: R`设 $z=(x+\mathrm{e}^y)^x$，则 $\left.\dfrac{\partial z}{\partial x}\right|_{(1,0)}=$ ______。`, a: R`$1+2\ln2$`, sol: R`原书答案 $1+2\ln2$。` },
    { n: 20, q: R`设函数 $z=\left(1+\dfrac{x}{y}\right)^{\frac{x}{y}}$，则 $\mathrm{d}z|_{(1,1)}=$ ______。`, a: R`$(1+2\ln2)(\mathrm{d}x-\mathrm{d}y)$`, sol: R`原书答案 $(1+2\ln2)(\mathrm{d}x-\mathrm{d}y)$。` },
    { n: 21, q: R`设函数 $z=z(x,y)$ 由方程 $(z+y)^x=xy$ 确定，则 $\left.\dfrac{\partial z}{\partial x}\right|_{(1,2)}=$ ______。`, a: R`$2-2\ln2$`, sol: R`原书答案 $2-2\ln2$。` },
    { n: 22, q: R`设 $u=x^2\mathrm{e}^yz^3$，其中 $z=z(x,y)$ 由方程 $x^3+y^3+z^3-3xyz=0$ 所确定，则 $\mathrm{d}u|_{x=-1,y=0}=$ ______。`, a: R`$-5\mathrm{d}x-2\mathrm{d}y$`, sol: R`原书答案 $-5\mathrm{d}x-2\mathrm{d}y$。` },
    { n: 23, q: R`设 $z=f(x,y)$ 满足 $\dfrac{\partial^2z}{\partial x\partial y}=x+y$，且 $f(x,0)=x$，$f(0,y)=y^2$，则 $f(x,y)=$ ______。`, a: R`$\left(\dfrac{1}{2}x^2y+\dfrac{1}{2}xy^2+x+y^2\right)$`, sol: R`原书答案 $\left(\dfrac{1}{2}x^2y+\dfrac{1}{2}xy^2+x+y^2\right)$。` },
    { n: 24, q: R`设 $u(x,y)$ 有连续二阶偏导数，$\dfrac{\partial^2u}{\partial x^2}=\dfrac{\partial^2u}{\partial y^2}$，且 $u(x,2x)=x$，$u_1(x,2x)=x^2$ 则 $u_{11}(x,2x)=$ ______。`, a: R`$-\dfrac{4}{3}x$`, sol: R`原书答案 $-\dfrac{4}{3}x$。` },
    { n: 25, q: R`设函数 $z=z(x,y)$ 由方程 $F\left(x+\dfrac{z}{y},y+\dfrac{z}{x}\right)=0$ 确定，则 $x\dfrac{\partial z}{\partial x}+y\dfrac{\partial z}{\partial y}=$ ______。`, a: R`$z-xy$`, sol: R`原书答案 $z-xy$。` },
    { n: 26, q: R`已知 $\mathrm{d}f(x,y)|_{(x_0,y_0)}=2\mathrm{d}x+\mathrm{d}y$，则 $\lim\limits_{t\to0}\dfrac{f(x_0+2t,y_0)-f(x_0,y_0-t)}{t}=$ ______。`, a: R`$5$`, sol: R`原书答案 $5$。` },
    { n: 27, q: R`已知函数 $z=f(x,y)$ 连续且满足 $\lim\limits_{\substack{x\to1\\y\to0}}\dfrac{f(x,y)-x+2y+2}{\sqrt{(x-1)^2+y^2}}=0$，则 $\lim\limits_{t\to0}\dfrac{f(1+t,0)-f(1,2t)}{t}=$ ______。`, a: R`$5$`, sol: R`原书答案 $5$。` },
    { n: 28, q: R`设 $z=\displaystyle\int_0^1|xy-t|f(t)\mathrm{d}t$，$0\leqslant x\leqslant1$，$0\leqslant y\leqslant1$，其中 $f(x)$ 为连续函数，则 $z_{xx}+z_{yy}=$ ______。`, a: R`$2(x^2+y^2)f(xy)$`, sol: R`原书答案 $2(x^2+y^2)f(xy)$。` },
    { n: 29, q: R`设 $u=f(x,y,z)$，$z=\ln\sqrt{x^2+y^2}$，求 $\dfrac{\partial u}{\partial x}$，$\dfrac{\partial^2u}{\partial x^2}$，其中 $f$ 有二阶连续偏导数。`, a: R`$\dfrac{\partial u}{\partial x}=f'_1+f'_3\dfrac{x}{x^2+y^2}$；$\dfrac{\partial^2u}{\partial x^2}=f''_{11}+2f''_{13}\dfrac{x}{x^2+y^2}+f''_{33}\dfrac{x^2}{(x^2+y^2)^2}+f'_3\dfrac{y^2-x^2}{(x^2+y^2)^2}$。`, sol: R`原书答案如上。` },
    { n: 30, q: R`设函数 $z=f(x,y)$ 在点 $(1,1)$ 处可微，且 $f(1,1)=1$，$\left.\dfrac{\partial f}{\partial x}\right|_{(1,1)}=2$，$\left.\dfrac{\partial f}{\partial y}\right|_{(1,1)}=3$，$\varphi(x)=f[x,f(x,x)]$，求 $\left.\dfrac{\mathrm{d}}{\mathrm{d}x}\varphi^3(x)\right|_{x=1}$。`, a: R`$51$`, sol: R`原书答案 $51$。` },
    { n: 31, q: R`设 $u=f(x,y,z)$ 有连续的一阶偏导数，又函数 $y=y(x)$ 及 $z=z(x)$ 分别由 $\mathrm{e}^{xy}-xy=2$ 和 $\mathrm{e}^x=\displaystyle\int_0^{x-z}\dfrac{\sin t}{t}\mathrm{d}t$ 确定。求 $\dfrac{\mathrm{d}u}{\mathrm{d}x}$。`, a: R`$\left(\dfrac{\partial f}{\partial x}-\dfrac{y}{x}\dfrac{\partial f}{\partial y}\right)\mathrm{d}x+\left[1-\dfrac{\mathrm{e}^x(x-z)}{\sin(x-z)}\right]\dfrac{\partial f}{\partial y}\mathrm{d}y$`, sol: R`原书答案如上。` },
    { n: 32, q: R`设变换 $\begin{cases}u=x-2y,\\v=x+ay.\end{cases}$ 可把方程 $6\dfrac{\partial^2z}{\partial x^2}+\dfrac{\partial^2z}{\partial x\partial y}-\dfrac{\partial^2z}{\partial y^2}=0$ 简化为 $\dfrac{\partial^2z}{\partial u\partial v}=0$，求常数 $a$。`, a: R`$a=3$`, sol: R`原书答案 $a=3$。` },
    { n: 33, q: R`设函数 $f(u)$ 有连续一阶导数，$f(0)=2$，且 $z=xf\left(\dfrac{y}{x}\right)+yf\left(\dfrac{y}{x}\right)$ 满足 $\dfrac{\partial z}{\partial x}+\dfrac{\partial z}{\partial y}=\dfrac{y}{x}$ $(x\neq0)$，求 $z$ 的表达式。`, a: R`$z=(x-y)\ln\left(1-\dfrac{y}{x}\right)+2x-y$`, sol: R`原书答案 $z=(x-y)\ln\left(1-\dfrac{y}{x}\right)+2x-y$。` },
    { n: 34, q: R`设函数 $f(x,y)$ 有连续二阶偏导数，满足 $\dfrac{\partial^2f}{\partial x\partial y}=0$，且在极坐标系下可表成 $f(x,y)=g(r)$，其中 $r=\sqrt{x^2+y^2}$，求 $f(x,y)$。`, a: R`$f(x,y)=C_1(x^2+y^2)+C_2$`, sol: R`原书答案 $f(x,y)=C_1(x^2+y^2)+C_2$。` },
    { n: 35, q: R`设 $z=f(\sqrt{x^2+y^2})$ 具有二阶连续偏导数，且 $\dfrac{\partial^2z}{\partial x^2}+\dfrac{\partial^2z}{\partial y^2}-\dfrac{1}{x}\dfrac{\partial z}{\partial x}+z=x^2+y^2$，试求函数 $z$ 的表达式。`, a: R`$z=C_1\cos r+C_2\sin r+r^2-2$`, sol: R`原书答案 $z=C_1\cos r+C_2\sin r+r^2-2$。` },
    { n: 36, q: R`求函数 $f(x,y)=x^4+y^4-(x+y)^2$ 的极值。`, a: R`在 $(-1,-1),(1,1)$ 取极小值，在 $(0,0)$ 点无极值。`, sol: R`原书答案：在 $(-1,-1),(1,1)$ 取极小值，在 $(0,0)$ 点无极值。` },
    { n: 37, q: R`求二元函数 $f(x,y)=x^2(2+y^2)+y\ln y$ 的极值。`, a: R`在 $\left(0,\dfrac{1}{\mathrm{e}}\right)$ 取极小值，极小值为 $f\left(0,\dfrac{1}{\mathrm{e}}\right)=-\dfrac{1}{\mathrm{e}}$。`, sol: R`原书答案：在 $\left(0,\dfrac{1}{\mathrm{e}}\right)$ 取极小值，极小值为 $f\left(0,\dfrac{1}{\mathrm{e}}\right)=-\dfrac{1}{\mathrm{e}}$。` },
    { n: 38, q: R`设函数 $z=f(xy,yg(x))$，其中 $f$ 函数具有二阶连续偏导数，函数 $g(x)$ 可导且在 $x=1$ 处取得极值 $g(1)=1$，求 $\left.\dfrac{\partial^2z}{\partial x\partial y}\right|_{\substack{x=1\\y=1}}$。`, a: R`$f'_1(1,1)+f''_{11}(1,1)+f''_{12}(1,1)$`, sol: R`原书答案 $f'_1(1,1)+f''_{11}(1,1)+f''_{12}(1,1)$。` },
    { n: 39, q: R`已知函数 $f(u,v)$ 具有二阶连续偏导数，$f(1,1)=2$ 是 $f(u,v)$ 的极值，$z=f(x+y,f(x,y))$。求 $\left.\dfrac{\partial^2z}{\partial x\partial y}\right|_{(1,1)}$。`, a: R`$f''_{11}(2,2)+f'_2(2,2)f''_{12}(1,1)$`, sol: R`原书答案 $f''_{11}(2,2)+f'_2(2,2)f''_{12}(1,1)$。` },
    { n: 40, q: R`求由方程 $2x^2+2y^2+z^2+8xz-z+8=0$ 所确定的函数 $z=f(x,y)$ 极值点。`, a: R`点 $(-2,0)$ 取极小值，点 $\left(\dfrac{16}{7},0\right)$ 取极大值。`, sol: R`原书答案：点 $(-2,0)$ 取极小值，点 $\left(\dfrac{16}{7},0\right)$ 取极大值。` },
    { n: 41, q: R`设 $f(x,y)$ 有二阶连续偏导数，$g(x,y)=f(\mathrm{e}^{xy},x^2+y^2)$，且 $f(x,y)=1-x-y+o(\sqrt{(x-1)^2+y^2})$，证明 $g(x,y)$ 在 $(0,0)$ 取得极值，判断此极值是极大值还是极小值，并求出此极值。`, a: R`提示：利用极值充分条件。`, sol: R`原书提示：利用极值充分条件。` },
    { n: 42, q: R`求函数 $f(x,y)=x^2+2y^2-x^2y^2$ 在区域 $D=\{(x,y)\mid x^2+y^2\leqslant4,y\geqslant0\}$ 上的最大值和最小值。`, a: R`$f_{\max}(0,2)=8$，$f_{\min}(0,0)=0$。`, sol: R`原书答案 $f_{\max}(0,2)=8$，$f_{\min}(0,0)=0$。` },
    { n: 43, q: R`设函数 $z=z(x,y)$ 的微分 $\mathrm{d}z=(2x+12y)\mathrm{d}x+(12x+4y)\mathrm{d}y$，且 $z(0,0)=0$，求函数 $z=z(x,y)$ 在 $4x^2+y^2\leqslant25$ 上的最大值。`, a: R`$Z_{\max}=\dfrac{425}{4}$`, sol: R`原书答案 $Z_{\max}=\dfrac{425}{4}$。` },
    { n: 44, q: R`求函数 $u=xy+2yz$ 在约束条件 $x^2+y^2+z^2=10$ 下的最大值和最小值。`, a: R`$u_{\max}=5\sqrt5$，$u_{\min}=-5\sqrt5$。`, sol: R`原书答案 $u_{\max}=5\sqrt5$，$u_{\min}=-5\sqrt5$。` },
    { n: 45, q: R`求函数 $u=x^2+y^2+z^2$ 在约束条件 $z=x^2+y^2$ 和 $x+y+z=4$ 下的最大值与最小值。`, a: R`驻点 $(1,1,2)$，$(-2,-2,8)$。最大值 72，最小值 6。`, sol: R`原书答案：驻点 $(1,1,2)$，$(-2,-2,8)$。最大值 72，最小值 6。` },
    { n: 46, q: R`在椭圆 $3x^2+2xy+3y^2=1$ 的第一象限部分上求一点，使该点的切线与两坐标轴所围成三角形面积最小，并求面积的最小值。`, a: R`$S=\dfrac{1}{2(1+8xy)}(x>0,y>0)$，$x=y=\dfrac{1}{\sqrt8}$，$S_{\min}=\dfrac{1}{4}$。`, sol: R`原书答案：$S=\dfrac{1}{2(1+8xy)}(x>0,y>0)$，$x=y=\dfrac{1}{\sqrt8}$，$S_{\min}=\dfrac{1}{4}$。` },
    { n: 47, q: R`（仅数一要求）已知曲线 $C:\begin{cases}x^2+y^2-2z^2=0,\\x+y+3z=5.\end{cases}$ 求 $C$ 上距离 $xOy$ 面最远的点和最近的点。`, a: R`$(-5,-5,5)$，$(1,1,1)$。`, sol: R`原书答案 $(-5,-5,5)$，$(1,1,1)$。` },
    { n: 48, q: R`（仅数一要求）求椭球面 $\dfrac{x^2}{3}+\dfrac{y^2}{2}+z^2=1$ 被平面 $x+y+z=0$ 截得的椭圆长半轴与短半轴之长。`, a: R`提示：$L(x,y,z,\lambda,\mu)=x^2+y^2+z^2+\lambda\left(\dfrac{x^2}{3}+\dfrac{y^2}{2}+z^2\right)+\mu(x+y+z)$，$\lambda=\dfrac{-11\pm\sqrt{13}}{6}=-d^2$，$d_{\max}=\sqrt{\dfrac{11+\sqrt{13}}{6}}$，$d_{\min}=\sqrt{\dfrac{11-\sqrt{13}}{6}}$。`, sol: R`原书提示如上。` },
    { n: 49, q: R`已知 $p>1$，$\dfrac{1}{p}+\dfrac{1}{q}=1$，$x,y>0$。求证：$xy\leqslant\dfrac{x^p}{p}+\dfrac{x^q}{q}$。`, a: R`提示：求函数 $xy$ 在条件 $\dfrac{x^p}{p}+\dfrac{y^q}{q}=k$ $(k>0)$ 下的最大值。`, sol: R`原书提示如上。` },
    { n: 50, q: R`（仅数三要求）某企业为生产甲、乙两种型号的产品投入的固定成本为 10000（万元）。设该企业生产甲、乙两种产品的产量分别为 $x$（件）和 $y$（件），且这两种产品的边际成本分别为 $20+\dfrac{x}{2}$（万元/件）与 $6+y$（万元/件）。
1）求生产甲、乙两种产品的总成本函数 $C(x,y)$（万元）；
2）当总产量为 50 件时，甲、乙两种产品的产量各为多少时可使总成本最小？求最小成本；
3）求总产量为 50 件且总成本最小时甲产品的边际成本，并解释其经济意义。`, a: R`1) $C(x,y)=10000+20x+\dfrac{x^2}{4}+6y+\dfrac{y^2}{2}$；2) $C_{\min}(24,26)=11118$（万元）；3) $\left.\dfrac{\partial C}{\partial x}\right|_{\substack{x=24\\y=26}}=32$，其经济意义为：当生产乙产品 26 件时，生产第 25 件甲产品需 32 万元。`, sol: R`原书答案如上。` },
    { n: 51, q: R`（仅数学三要求）某厂生产两种产品，当产量分别为 $x$ 和 $y$（吨）时，总效益函数为 $R(x,y)=27x+42y-x^2-2xy-4y^2$。总成本函数为 $C(x,y)=36+12x+8y$（万元），生产甲种产品每吨需支付排污费 1 万元，生产乙种产品每吨需支付排污费 2 万元。
1）在不限排污支出的情况下，两种产品的产量各为多少时总利润最大？最大利润是多少？
2）若限制排污总支出为 6 万元，两种产品产量各为多少时总利润最大？最大利润为多少？`, a: R`1) $x=4$，$y=3$，$L_{\max}=40$（万元）；2) $x=2$，$y=2$，$L_{\max}=28$（万元）。`, sol: R`原书答案如上。` },
    { n: 52, q: R`设 $f(x,y)$ 在圆域 $x^2+y^2\leqslant1$ 上有连续一阶偏导数，且 $|f(x,y)|\leqslant1$。求证在单位圆内至少有一点 $(x_0,y_0)$ 可使 $\left[\dfrac{\partial f(x_0,y_0)}{\partial x}\right]^2+\left[\dfrac{\partial f(x_0,y_0)}{\partial y}\right]^2<16.$`, a: R`提示：考虑辅助函数 $g(x,y)=f(x,y)+2(x^2+y^2)$。`, sol: R`原书提示：考虑辅助函数 $g(x,y)=f(x,y)+2(x^2+y^2)$。` }
  ];
})();
