window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["jc04_s2"] = {
    id: "jc04_s2",
    ch: "第五章 多元函数微分学",
    title: "第三节 极值与最值",
    book: "李永乐《数学复习全书·基础篇》",
    pages: [148, 153],
    img: "assets/img/jichu",
    content: [
      { p: 148, md: R`**【解】** 记 \(u=x+y,v=x-y\),则 \(z=f(u,v)\).

\[
\frac{\partial z}{\partial y}
=\frac{\partial f}{\partial u}\frac{\partial u}{\partial y}
+\frac{\partial f}{\partial v}\frac{\partial v}{\partial y}
=f'_u-f'_v,
\]

\[
\begin{aligned}
\frac{\partial^2 z}{\partial x\partial y}
&=\frac{\partial}{\partial x}\left(\frac{\partial z}{\partial y}\right)
=\frac{\partial}{\partial x}\left[f'_u(u,v)-f'_v(u,v)\right]\\
&=\frac{\partial}{\partial x}\left[f'_u(u,v)\right]
-\frac{\partial}{\partial x}\left[f'_v(u,v)\right]\\
&=f''_{uu}+f''_{uv}-f''_{vu}-f''_{vv}.
\end{aligned}
\]

因为 \(f\) 为二阶偏导连续的函数,所以 \(f''_{uv}=f''_{vu},\frac{\partial^2 z}{\partial x\partial y}=f''_{uu}-f''_{vv}\).

## 第三节 极值与最值

### 一、无条件极值

**定义** 若存在 \(M_0(x_0,y_0)\) 点的某邻域 \(U_\delta(M_0)\),使得

\[
f(x,y)\le f(x_0,y_0)\quad(\text{或 }f(x,y)\ge f(x_0,y_0)),\quad \forall (x,y)\in U_\delta(M_0)
\]

则称 \(f(x,y)\) 在点 \(M_0(x_0,y_0)\) 取得极大值（极小值）\(f(x_0,y_0)\),极大值与极小值统称为极值. 点 \(M_0(x_0,y_0)\) 称为 \(f(x,y)\) 的极值点.

**定理（多元函数取得极值的必要条件）** 设函数 \(f(x,y)\) 在点 \(M_0(x_0,y_0)\) 的一阶偏导数存在,且在 \((x_0,y_0)\) 取得极值,则

\[
f'_x(x_0,y_0)=0,\quad f'_y(x_0,y_0)=0.
\]

**定义** 凡能使 \(f'_x(x,y)=0,f'_y(x,y)=0\) 同时成立的点 \((x,y)\) 称为函数 \(f(x,y)\) 的驻点.

由此可见具有一阶偏导数的函数的极值点一定是驻点,但驻点不一定是极值点.

**定理（多元函数取得极值的充分条件）** 设函数 \(z=f(x,y)\) 在点 \((x_0,y_0)\) 的某邻域内有连续的二阶偏导数,且 \(f'_x(x_0,y_0)=0,f'_y(x_0,y_0)=0\).

令 \(f''_{xx}(x_0,y_0)=A,f''_{xy}(x_0,y_0)=B,f''_{yy}(x_0,y_0)=C\),则

(1) \(AC-B^2>0\) 时,\(f(x,y)\) 在 \((x_0,y_0)\) 取极值
\[
\begin{cases}
\text{当 }A>0\text{ 时取极小值},\\
\text{当 }A<0\text{ 时取极大值}.
\end{cases}
\]

(2) \(AC-B^2<0\) 时,\(f(x,y)\) 在 \((x_0,y_0)\) 无极值.

(3) \(AC-B^2=0\) 时,则不能确定 \(f(x,y)\) 在 \((x_0,y_0)\) 是否有极值,还需进一步讨论（一般用极值定义）.

**【注】** 多元函数极值和最值与一元函数有很多类似的地方,但也有不同之处,因此我们不仅要注意到它们的共同之处,还要注意不同点.

**例1** \(f(x,y)=x^3-3x+y^3-3y\) 的极大值点为 \(\underline{\qquad}\),极小值点为 \(\underline{\qquad}\).

**【解】**
\[
\begin{cases}
\frac{\partial f}{\partial x}=3x^2-3=0\\
\frac{\partial f}{\partial y}=3y^2-3=0
\end{cases}
\quad \text{解得驻点为 }(1,1),(1,-1),(-1,1),(-1,-1).
\]

\[
A=\frac{\partial^2 f}{\partial x^2}=6x,
\]
` },
      { p: 149, md: R`\[
B=\frac{\partial^2 f}{\partial x\partial y}=0,
\]

\[
C=\frac{\partial^2 f}{\partial y^2}=6y,
\]

在 \((1,1),(-1,-1)\) 点,\(AC-B^2>0\),在 \((1,1)\) 点 \(A>0\),在 \((-1,-1)\) 点 \(A<0\). 因此极大值点为 \((-1,-1)\),极小值点为 \((1,1)\).

**例2** 设 \(z=z(x,y)\) 由 \(2x^2+2y^2+z^2+8xz-z+8=0\) 确定,求该函数的极值.

**【解】** \(4x\mathrm{d}x+4y\mathrm{d}y+2z\mathrm{d}z+8x\mathrm{d}z+8z\mathrm{d}x-\mathrm{d}z=0\),

\[
\mathrm{d}z=-\frac{4x+8z}{2z+8x-1}\mathrm{d}x-\frac{4y}{2z+8x-1}\mathrm{d}y,
\]

\[
\frac{\partial z}{\partial x}=-\frac{4x+8z}{2z+8x-1}=0,
\]

\[
\frac{\partial z}{\partial y}=-\frac{4y}{2z+8x-1}=0,
\]

\[
2x^2+2y^2+z^2+8xz-z+8=0,
\]

三个方程联立,得驻点 \((-2,0),\left(\frac{16}{7},0\right)\).

在 \((-2,0)\) 点

\[
\left[z''_{xy}(-2,0)\right]^2-z''_{xx}(-2,0)z''_{yy}(-2,0)=-\frac{16}{225}<0,
\]

且 \(z''_{xx}(-2,0)=\frac{4}{15}>0\),\((-2,0)\) 点是极小值点;

在 \(\left(\frac{16}{7},0\right)\) 点

\[
\left[z''_{xy}\left(\frac{16}{7},0\right)\right]^2
-z''_{xx}\left(\frac{16}{7},0\right)z''_{yy}\left(\frac{16}{7},0\right)
=-\frac{16}{225}<0,
\]

且 \(z''_{xx}\left(\frac{16}{7},0\right)=-\frac{4}{15}<0\),\(\left(\frac{16}{7},0\right)\) 点是极大值点.

**【注】** 本题考查隐函数的极值.

**例3** 设函数 \(z=f(x,y)\) 的全微分为 \(\mathrm{d}z=2x\mathrm{d}x+y\mathrm{d}y\),则点 \((0,0)\)

(A) 不是 \(f(x,y)\) 的连续点.　　　　(B) 不是 \(f(x,y)\) 的极值点.  
(C) 是 \(f(x,y)\) 的极大值点.　　　　(D) 是 \(f(x,y)\) 的极小值点.

**【解】** 因 \(\mathrm{d}z=2x\mathrm{d}x+y\mathrm{d}y\),可得 \(\frac{\partial z}{\partial x}=2x,\frac{\partial z}{\partial y}=y.\)

\[
A=\frac{\partial^2 z}{\partial x^2}=2,\quad
B=\frac{\partial^2 z}{\partial x\partial y}=\frac{\partial^2 z}{\partial y\partial x}=0,\quad
C=\frac{\partial^2 z}{\partial y^2}=1,
\]

又在 \((0,0)\) 处,\(\frac{\partial z}{\partial x}=0,\frac{\partial z}{\partial y}=0,B^2-AC=-2<0,\)

故 \((0,0)\) 为函数 \(z=f(x,y)\) 的一个极小值点. 答案应选(D).

**例4** 设可微函数 \(f(x,y)\) 在点 \((x_0,y_0)\) 取得极小值,则下列结论正确的是

(A) \(f(x_0,y)\) 在 \(y=y_0\) 处的导数等于零.　　　　(B) \(f(x_0,y)\) 在 \(y=y_0\) 处的导数大于零.  
(C) \(f(x_0,y)\) 在 \(y=y_0\) 处的导数小于零.　　　　(D) \(f(x_0,y)\) 在 \(y=y_0\) 处的导数不存在.
` },
      { p: 150, md: R`**【分析】** 可微必有偏导数存在,再根据取极值的必要条件即可得结论.

**【解】** 可微函数 \(f(x,y)\) 在点 \((x_0,y_0)\) 取得极小值,根据取极值的必要条件知 \(f'_y(x_0,y_0)=0\),即 \(f(x_0,y)\) 在 \(y=y_0\) 处的导数等于零,故应选(A).

**【评注】** (1) 本题考查了偏导数的定义,\(f(x_0,y)\) 在 \(y=y_0\) 处的导数即 \(f'_y(x_0,y_0)\);而 \(f(x,y_0)\) 在 \(x=x_0\) 处的导数即 \(f'_x(x_0,y_0)\).

(2) 本题也可用排除法分析,取 \(f(x,y)=x^2+y^2\),在 \((0,0)\) 处可微且取得极小值,并且有 \(f(0,y)=y^2\),可排除(B)(C)(D),故正确选项为(A).

### 二、条件极值

#### 1. 函数 \(f(x,y)\) 在条件 \(\varphi(x,y)=0\) 下的极值

解决此类问题的一般方法是拉格朗日乘数法:

先构造拉格朗日函数 \(F(x,y,\lambda)=f(x,y)+\lambda\varphi(x,y)\),然后解方程组

\[
\begin{cases}
\frac{\partial F}{\partial x}=\frac{\partial f}{\partial x}+\lambda\frac{\partial\varphi}{\partial x}=0\\
\frac{\partial F}{\partial y}=\frac{\partial f}{\partial y}+\lambda\frac{\partial\varphi}{\partial y}=0\\
\frac{\partial F}{\partial\lambda}=\varphi(x,y)=0
\end{cases}
\]

所有满足此方程组的解 \((x,y,\lambda)\) 中,\((x,y)\) 是函数 \(f(x,y)\) 在条件 \(\varphi(x,y)=0\) 下的可能的极值点.

#### 2. 函数 \(f(x,y,z)\) 在条件 \(\varphi(x,y,z)=0,\psi(x,y,z)=0\) 下的极值

与上一条情况类似,构造拉格朗日函数

\[
F(x,y,z,\lambda,\mu)=f(x,y,z)+\lambda\varphi(x,y,z)+\mu\psi(x,y,z)
\]

以下与上一条情况类似（略）.

### 三、最值问题

这里有两种问题,一种是求连续函数 \(f(x,y)\) 在有界闭区域 \(D\) 上的最值,此类问题分以下三步进行

(1) 求出 \(f(x,y)\) 在 \(D\) 内可能取得极值点（驻点和一阶偏导不存在的点）的函数值.

(2) 求出 \(f(x,y)\) 在 \(D\) 的边界上的最大、最小值.

(3) 将上面求得的 \(D\) 内可能取得极值点上的函数值与 \(D\) 的边界上的最值进行比较,最大（小）者为最大（小）值.

另外一种问题是最大最小值的应用题,此类问题首先建立目标函数,这样就把该问题化为第一种问题,而对于应用问题,如果 \(f(x,y)\) 可能取得极值的点只有一个,并根据问题本身知道所求最值存在,则可断言所求最值就在这个唯一可能取得极值的点上取得.

**例5** 求原点到曲面 \(z^2=xy+x-y+4\) 的最短距离.

**【解】** 拉格朗日函数:\(L=x^2+y^2+z^2+\lambda(z^2-xy-x+y-4)\),

\[
\begin{aligned}
L'_x&=2x-\lambda(y+1)=0,\\
L'_y&=2y+\lambda(-x+1)=0,\\
L'_z&=2z+2\lambda z=0,\\
L'_\lambda&=z^2-xy-x+y-4=0,
\end{aligned}
\]

解方程组,\(x=-1,y=1,z=\pm1\). 拉格朗日函数的两个驻点为

\[
P_1(-1,1,1),P_2(-1,1,-1).
\]
` },
      { p: 151, md: R`距离 \(d(P_1)=d(P_2)=\sqrt3\),由实际意义,本问题存在最短距离,故 \(\sqrt3\) 就是最短距离.

**例6** 在平面直角坐标系中已知三点 \(P_1(0,0),P_2(1,0),P_3(0,1)\),试在 \(\triangle P_1P_2P_3\) 围成的闭区域 \(\overline D\) 找点 \(P(x,y)\),使得 \(P\) 到 \(P_1,P_2,P_3\) 点的距离平方和为最大和最小.（图3）

**【解】** 目标函数
\[
\begin{aligned}
f(x,y)&=|PP_1|^2+|PP_2|^2+|PP_3|^2\\
&=x^2+y^2+(x-1)^2+y^2+x^2+(y-1)^2\\
&=3x^2+3y^2-2x-2y+2.
\end{aligned}
\]

(1) 若最值点发生在 \(\triangle P_1P_2P_3\) 的内部,则一定是极值点,先求 \(f(x,y)\) 在 \(\triangle P_1P_2P_3\) 内部的驻点.

\[
\begin{cases}
\frac{\partial f}{\partial x}=6x-2=0,\\
\frac{\partial f}{\partial y}=6y-2=0,
\end{cases}
\]

唯一驻点为 \(Q_1\left(\frac13,\frac13\right)\),可以验证 \(Q_1\) 点在 \(\triangle P_1P_2P_3\) 内部.

(2) 若最值点发生在边界 \(P_1P_2\) 上,则一定是条件极值的极值点,构造拉格朗日函数

\[
F_1(x,y,\lambda)=3x^2+3y^2-2x-2y+2+\lambda y,
\]

\[
\begin{cases}
\frac{\partial F_1}{\partial x}=6x-2=0,\\
\frac{\partial F_1}{\partial y}=6y-2+\lambda=0,\\
\frac{\partial F_1}{\partial\lambda}=y=0,
\end{cases}
\]

解得驻点 \(Q_2\left(\frac13,0\right)\),可以验证 \(Q_2\) 在边界 \(P_1P_2\) 上.

(3) 若最值点发生在边界 \(P_1P_3,P_2P_3\) 上,同样可以构造拉格朗日函数

\[
\begin{aligned}
F_2(x,y,\lambda)&=3x^2+3y^2-2x-2y+2+\lambda x,\\
F_3(x,y,\lambda)&=3x^2+3y^2-2x-2y+2+\lambda(x+y-1),
\end{aligned}
\]

求得驻点 \(Q_3\left(0,\frac13\right),Q_4\left(\frac12,\frac12\right)\),可以验证 \(Q_3\) 在边界 \(P_1P_3\) 上,\(Q_4\) 在边界 \(P_2P_3\) 上.

(4) 除此之外,还有三个点要考虑:\(P_1,P_2,P_3\).

求出 \(f\) 在这些点的值:

\[
f(Q_1)=\frac43,f(Q_2)=\frac53,f(Q_3)=\frac53,f(Q_4)=\frac32,
\]

\[
f(P_1)=2,f(P_2)=3,f(P_3)=3,
\]

因为 \(f(x,y)\) 是连续函数,\(\overline D\) 为有界闭区域,\(f(x,y)\) 在 \(\overline D\) 上一定有最大值和最小值,上述七个函数值中最大的就是最大值,最小的就是最小值,所以 \(f(x,y)\) 在 \(\overline D\) 上的最大值为 \(3\),最小值为 \(\frac43\).

**【注】** 1. 在本题中我们只计算了驻点,最大的驻点值就是最大值,最小的驻点值就是最小值. 这个方法可行的前提是最大值（或最小值）是存在的. 如果没有这个结论,本题的过程和答案都可能错了.

2. 对于简单的边界（例如本题中的边界）通过解出边界方程,将条件极值问题转化成无
` },
      { p: 152, md: R`条件极值问题. 例如,在边界 \(P_2P_3\) 上,\(x+y=1\). 解出 \(y=1-x\),代入 \(f(x,y)\) 的表达式

\[
g(x)=f(x,1-x)=3x^2+3(1-x)^2-2x-2(1-x)+2
\]

条件极值问题可以转化成 \(g(x)\) 函数在 \((0,1)\) 内的无条件极值问题,这样就不用通过拉格朗日函数来求驻点.

**例7** 设 \(f(x,y)\) 与 \(\varphi(x,y)\) 均为可微函数,且 \(\varphi'_y(x,y)\ne0\),已知 \((x_0,y_0)\) 是 \(f(x,y)\) 在约束条件 \(\varphi(x,y)=0\) 下的一个极值点.下列选项正确的是

(A) 若 \(f'_x(x_0,y_0)=0\),则 \(f'_y(x_0,y_0)=0\).  
(B) 若 \(f'_x(x_0,y_0)=0\),则 \(f'_y(x_0,y_0)\ne0\).  
(C) 若 \(f'_x(x_0,y_0)\ne0\),则 \(f'_y(x_0,y_0)=0\).  
(D) 若 \(f'_x(x_0,y_0)\ne0\),则 \(f'_y(x_0,y_0)\ne0\).

**【解】** 作拉格朗日函数 \(F(x,y,\lambda)=f(x,y)+\lambda\varphi(x,y)\) 并记对应 \(x_0,y_0\) 的参数 \(\lambda\) 的值为 \(\lambda_0\),则

\[
\begin{cases}
F'_x(x_0,y_0,\lambda_0)=0,\\
F'_y(x_0,y_0,\lambda_0)=0,
\end{cases}
\quad\text{即}\quad
\begin{cases}
f'_x(x_0,y_0)+\lambda_0\varphi'_x(x_0,y_0)=0,\\
f'_y(x_0,y_0)+\lambda_0\varphi'_y(x_0,y_0)=0.
\end{cases}
\]

消去 \(\lambda_0\),得

\[
f'_x(x_0,y_0)\varphi'_y(x_0,y_0)-f'_y(x_0,y_0)\varphi'_x(x_0,y_0)=0,
\]

整理得
\[
f'_x(x_0,y_0)=\frac{1}{\varphi'_y(x_0,y_0)}f'_y(x_0,y_0)\varphi'_x(x_0,y_0)
\quad(\text{因为 }\varphi'_y(x,y)\ne0).
\]

若 \(f'_x(x_0,y_0)\ne0\),则 \(f'_y(x_0,y_0)\ne0\).

故本题答案选(D).

**【注】** 本题考查了二元函数极值的必要条件和拉格朗日乘数法.

**例8** 求函数 \(f(x,y)=x^2+2y^2-x^2y^2\) 在区域 \(D=\{(x,y)\mid x^2+y^2\le4,y\ge0\}\) 上的最大值和最小值.

**【解】** 函数在区域 \(D=\{(x,y)\mid x^2+y^2<4,y>0\}\) 内的驻点,

\[
\begin{cases}
f'_x=2x-2xy^2=0,\\
f'_y=4y-2x^2y=0,
\end{cases}
\]

解得 \(\begin{cases}x=\pm\sqrt2,\\y=1\end{cases}\),相应的函数值 \(f(\pm\sqrt2,1)=2\).

函数在边界 \(y=0,(-2\le x\le2)\),

\[
f(x,0)=x^2,\quad -2\le x\le2,
\]

最大值 \(f(\pm2,0)=4\),最小值 \(f(0,0)=0\).

函数在边界 \(x^2+y^2=4,y>0\). 作拉格朗日函数

\[
L(x,y)=x^2+2y^2-x^2y^2+\lambda(x^2+y^2-4),
\]

\[
\begin{cases}
\frac{\partial L}{\partial x}=2x-2xy^2+2\lambda x=0,\\
\frac{\partial L}{\partial y}=4y-2x^2y+2\lambda y=0,\\
\frac{\partial L}{\partial\lambda}=x^2+y^2-4=0
\end{cases}
\quad\text{解得}\quad
\begin{cases}
x=\pm\sqrt{\frac52}\\
y=\sqrt{\frac32}
\end{cases}
\quad\text{或}\quad
\begin{cases}
x=0\\
y=2
\end{cases}
\]

\[
f\left(\pm\sqrt{\frac52},\sqrt{\frac32}\right)=\frac74,f(0,2)=8.
\]

比较以上函数值,可得函数在区域 \(D\) 上的最大值为 \(8\),最小值为 \(0\).
` },
      { p: 153, md: R`**例9** 要造一个容量一定的长方体箱子,问箱子的长、宽、高各为多少时,其表面积最小.

**【解】** **方法一** 设箱子的长、宽、高分别为 \(x,y,z\),容量为 \(V\),表面积为 \(S\),则

\[
V=xyz,\text{其中 }x>0,y>0,z>0.
\]

且
\[
S=2(xy+yz+zx)=2\left(xy+\frac Vx+\frac Vy\right),
\]

\[
\begin{cases}
S'_x=2\left(y-\frac{V}{x^2}\right)=0,\\
S'_y=2\left(x-\frac{V}{y^2}\right)=0,
\end{cases}
\quad\text{得唯一驻点 }(\sqrt[3]{V},\sqrt[3]{V}),
\]

由实际意义知 \(S\) 一定存在最小值,所以当长方体的长、宽、高均为 \(\sqrt[3]{V}\) 时表面积最小,最小值为 \(6\sqrt[3]{V^2}\).

**方法二** 设箱子的长、宽、高分别为 \(x,y,z\),容量为 \(V\),表面积为 \(S\),则

\[
V=xyz,\text{其中 }x>0,y>0,z>0.\text{ 且 }S=2(xy+yz+zx)
\]

令
\[
F(x,y,z)=2(xy+yz+zx)+\lambda(xyz-V)
\]

由
\[
\begin{cases}
F'_x=2y+2z+\lambda yz=0,\\
F'_y=2x+2z+\lambda xz=0,\\
F'_z=2y+2x+\lambda xy=0,\\
F'_\lambda=xyz-V=0
\end{cases}
\quad\text{得唯一驻点 }(\sqrt[3]{V},\sqrt[3]{V},\sqrt[3]{V}),
\]

由实际意义知 \(S\) 一定存在最小值,所以当长方体的长、宽、高均为 \(\sqrt[3]{V}\) 时表面积最小,最小值为 \(6\sqrt[3]{V^2}\).

**例10** 求函数 \(z=\frac{x+y}{x^2+y^2+1}\) 的最大值和最小值.

**【解】** 由
\[
\begin{cases}
z'_x=\frac{1\cdot(x^2+y^2+1)-2x\cdot(x+y)}{(x^2+y^2+1)^2}=0,\\
z'_y=\frac{1\cdot(x^2+y^2+1)-2y\cdot(x+y)}{(x^2+y^2+1)^2}=0,
\end{cases}
\quad\text{得}\quad
\begin{cases}
(x^2+y^2+1)-2x(x+y)=0,\\
(x^2+y^2+1)-2y(x+y)=0,
\end{cases}
\]

即
\[
\begin{cases}
x=y,\\
2x^2+1-4x^2=0,
\end{cases}
\quad\text{得驻点 }\left(\frac{1}{\sqrt2},\frac{1}{\sqrt2}\right)\text{ 和 }\left(-\frac{1}{\sqrt2},-\frac{1}{\sqrt2}\right),
\]

计算
\[
z\left(\frac{1}{\sqrt2},\frac{1}{\sqrt2}\right)
=\frac{2\times\frac{1}{\sqrt2}}{\frac12+\frac12+1}
=\frac{1}{\sqrt2},
\quad
z\left(-\frac{1}{\sqrt2},-\frac{1}{\sqrt2}\right)
=\frac{2\times\left(-\frac{1}{\sqrt2}\right)}{\frac12+\frac12+1}
=-\frac{1}{\sqrt2},
\]

因为
\[
\lim_{\substack{x\to\infty\\y\to\infty}}\frac{x+y}{x^2+y^2+1}=0,
\]
所以最大值为 \(\frac{1}{\sqrt2}\),最小值为 \(-\frac{1}{\sqrt2}\).

**例11** （2008,数二）求函数 \(u=x^2+y^2+z^2\) 在约束条件 \(z=x^2+y^2\) 和 \(x+y+z=4\) 下的最大和最小值.

**【解】** 设拉格朗日函数为
\[
F(x,y,z)=x^2+y^2+z^2+\lambda(z-x^2-y^2)+\mu(x+y+z-4)
\]
` },
    ],
    quiz: [{"q": "可微函数 $f(x,y)$ 在点 $(x_0,y_0)$ 取得极值的必要条件是", "options": ["$f_x=f_y=0$", "$f_x=f_y=1$", "$f_{xx}=f_{yy}=0$", "$f_x=0,f_y\\ne0$"], "answer": 0, "explain": "极值点必为驻点（可微情形）。"}, {"q": "设 $A=f_{xx},B=f_{xy},C=f_{yy}$ 在驻点处，$AC-B^2>0$ 且 $A>0$，则该点为", "options": ["极小值点", "极大值点", "非极值点", "鞍点"], "answer": 0, "explain": "二阶判别法：$AC-B^2>0$ 且 $A>0$ 为极小。"}, {"q": "求 $f(x,y)$ 在条件 $\\varphi(x,y)=0$ 下的极值，常用", "options": ["拉格朗日乘数法", "洛必达法则", "分部积分", "夹逼准则"], "answer": 0, "explain": "构造 $L=f+\\lambda\\varphi$。"}, {"q": "求闭区域 $D$ 上连续函数的最值，需比较", "options": ["内部驻点值与边界上的最值", "只比较内部驻点", "只比较边界点", "只比较端点"], "answer": 0, "explain": "闭区域最值 = 内部驻点值与边界最值中的最大/最小。"}]
  };
})();
