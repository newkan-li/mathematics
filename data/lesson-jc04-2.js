window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["jc04_s1"] = {
    id: "jc04_s1",
    ch: "第五章 多元函数微分学",
    title: "第二节 多元函数的微分",
    book: "李永乐《数学复习全书·基础篇》",
    pages: [139, 147],
    img: "assets/img/jichu",
    content: [
      { p: 139, md: R`### 3. 多元连续函数的性质

多元函数有与一元函数完全类似的性质.

（1）连续函数的和、差、积、商（分母不为零）仍是连续函数，连续函数的复合函数仍为连续函数.

（2）（最大最小值定理）在有界闭区域 \(D\) 上连续的函数，在该区域 \(D\) 上有最大值和最小值.

（3）（介值定理）在有界闭区域 \(D\) 上连续的函数，可取到它在该区域上的最小值与最大值之间的任何值.

（4）一切多元初等函数在其定义区域内处处连续. 这里的定义区域是指包含在定义域内的区域或闭区域.

## 第二节 多元函数的微分

### 一、多元函数的偏导数与全微分

**定义** 设函数 \(z=f(x,y)\) 在点 \((x_0,y_0)\) 的某一邻域内有定义，如果
\[
\lim_{\Delta x\to 0}\frac{f(x_0+\Delta x,y_0)-f(x_0,y_0)}{\Delta x}
\]
存在，则称此极限为函数 \(z=f(x,y)\) 在点 \((x_0,y_0)\) 处对 \(x\) 的偏导数，记为 \(f'_x(x_0,y_0)\) 或 \(\frac{\partial f(x_0,y_0)}{\partial x}\).

类似地可定义
\[
f'_y(x_0,y_0)=\lim_{\Delta y\to 0}\frac{f(x_0,y_0+\Delta y)-f(x_0,y_0)}{\Delta y}
\]
也可记为 \(\frac{\partial f(x_0,y_0)}{\partial y}\).

**【注】** 由以上定义不难看出偏导数本质上是一元函数的导数.

事实上偏导数 \(f'_x(x_0,y_0)\) 就是一元函数 \(\varphi(x)=f(x,y_0)\) 在 \(x=x_0\) 处的导数，即
\[
f'_x(x_0,y_0)=\varphi'(x_0)=\left.\frac{\mathrm{d}f(x,y_0)}{\mathrm{d}x}\right|_{x=x_0}
\]
而偏导数 \(f'_y(x_0,y_0)\) 就是一元函数 \(\psi(y)=f(x_0,y)\) 在 \(y=y_0\) 处的导数，即
\[
f'_y(x_0,y_0)=\psi'(y_0)=\left.\frac{\mathrm{d}f(x_0,y)}{\mathrm{d}y}\right|_{y=y_0}
\]

类似地，可以定义三元函数乃至 \(n\) 元函数的偏导数.

**偏导数的几何意义** 偏导数 \(f'_x(x_0,y_0)\) 在几何上表示曲面 \(z=f(x,y)\) 与平面 \(y=y_0\) 的交线在点 \(M_0(x_0,y_0,f(x_0,y_0))\) 处的切线 \(T_x\) 对 \(x\) 轴的斜率（如图 1），\(f'_x(x_0,y_0)=\tan\alpha\).

偏导数 \(f'_y(x_0,y_0)\) 在几何上表示曲面 \(z=f(x,y)\) 与平面 \(x=x_0\) 的交线在点 \(M_0(x_0,y_0,f(x_0,y_0))\) 处的切线 \(T_y\) 对 \(y\) 轴的斜率（如图 1），\(f'_y(x_0,y_0)=\tan\beta\).

**定义** 如果函数 \(z=f(x,y)\) 在点 \((x,y)\) 处的全增量
\[
\Delta z=f(x+\Delta x,y+\Delta y)-f(x,y)
\]
可表示为` },
      { p: 140, md: R`\[
\Delta z=A\Delta x+B\Delta y+o(\rho)
\]
其中 \(A,B\) 不依赖于 \(\Delta x,\Delta y\)，而仅与 \(x,y\) 有关，\(\rho=\sqrt{(\Delta x)^2+(\Delta y)^2}\)，则称函数 \(z=f(x,y)\) 在点 \((x,y)\) 可微. 而 \(A\Delta x+B\Delta y\) 称为函数 \(z=f(x,y)\) 在点 \((x,y)\) 的全微分，记为
\[
\mathrm{d}z=A\Delta x+B\Delta y
\]

**定理（全微分存在的必要条件）** 如果函数 \(z=f(x,y)\) 在点 \((x,y)\) 处可微，则该函数在点 \((x,y)\) 处的偏导数 \(\frac{\partial z}{\partial x},\frac{\partial z}{\partial y}\) 必定存在，且
\[
\mathrm{d}z=\frac{\partial z}{\partial x}\mathrm{d}x+\frac{\partial z}{\partial y}\mathrm{d}y
\]

**定理（全微分存在的充分条件）** 如果函数 \(z=f(x,y)\) 的偏导数 \(\frac{\partial z}{\partial x}\) 和 \(\frac{\partial z}{\partial y}\) 在点 \((x,y)\) 处连续，则函数 \(z=f(x,y)\) 在该点可微.

对二元函数 \(z=f(x,y)\)，我们称它在点 \((x,y)\) 可导是指它在点 \((x,y)\) 处两个一阶偏导数 \(\frac{\partial z}{\partial x},\frac{\partial z}{\partial y}\) 都存在. 则二元函数的连续，可导及可微的关系是

> **图 2** 连续、可导、可微关系图：多元函数中，可微 \(\Rightarrow\) 连续，可微 \(\Rightarrow\) 一阶偏导数都存在，一阶偏导数连续 \(\Rightarrow\) 可微；连续与一阶偏导数存在之间互不推出，连续 \(\not\Rightarrow\) 可微，一阶偏导数存在 \(\not\Rightarrow\) 连续，一阶偏导数存在 \(\not\Rightarrow\) 可微，可微 \(\not\Rightarrow\) 一阶偏导数连续. 一元函数中，可导 \(\Leftrightarrow\) 可微，可导 \(\Rightarrow\) 连续.

由图 2 可以看出，一元函数和多元函数的连续、可导、可微之间的关系主要不同在于，一元函数可导能推得连续，也能推得可微；而多元函数的可导既不能推得连续，也不能推得可微. 其主要原因在于多元的可导是指一阶偏导数存在，而偏导数是用一元函数极限定义的（\(f'_x(x_0,y_0)=\lim_{x\to x_0}\frac{f(x,y_0)-f(x_0,y_0)}{x-x_0},f'_y(x_0,y_0)=\lim_{y\to y_0}\frac{f(x_0,y)-f(x_0,y_0)}{y-y_0}\)），其动点 \((x,y_0)\)（或 \((x_0,y)\)）是沿 \(x\)（或 \(y\)）轴方向趋于 \((x_0,y_0)\)，它只与点 \((x_0,y_0)\) 邻域内过该点且平行于两坐标轴的十字架方向函数值有关；而连续（\(\lim_{(x,y)\to(x_0,y_0)}f(x,y)=f(x_0,y_0)\)）和可微（\(f(x,y)-f(x_0,y_0)=A(x-x_0)+B(y-y_0)+o(\rho)\)）都是用重极限定义的，其动点 \((x,y)\) 是以任意方式趋于 \((x_0,y_0)\)，它与点 \((x_0,y_0)\) 邻域内函数值有关.

**例1** 设 \(z=(\sin y^3+x^2)(x+\sin y^5)^{\frac{y^3}{x^2}+e^{x^3y}}\)，求 \(\left.\frac{\partial z}{\partial x}\right|_{(1,0)}\).

**【解】** 由偏导数的定义
\[
\left.\frac{\partial z}{\partial x}\right|_{(1,0)}=\left.\frac{\mathrm{d}z(x,0)}{\mathrm{d}x}\right|_{x=1}=\left.(x^3)'\right|_{x=1}=3.
\]

**例2** 二元函数 \(f(x,y)=\begin{cases}\frac{xy}{x^3+y^2},&x^2+y^2\neq 0,\\0,&x^2+y^2=0,\end{cases}\) 在 \((0,0)\) 处

（A）连续，偏导数存在.

（B）连续，偏导数不存在.` },
      { p: 141, md: R`（C）不连续，偏导数存在.

（D）不连续，偏导数不存在.

**【解】** 当 \((x,y)\) 沿 \(y=kx\)（\(k\neq 0\)）趋向于点 \((0,0)\) 时，
\[
\lim_{\substack{x\to 0\\ y=kx}}f(x,y)=\lim_{x\to 0}\frac{kx^2}{x^3+k^2x^2}=\frac{1}{k},
\]
\(k\) 取不同值，上式结果不唯一，所以函数在 \((0,0)\) 处极限不存在，因此不连续. 又因为
\[
f'_x(0,0)=\lim_{\Delta x\to 0}\frac{f(0+\Delta x,0)-f(0,0)}{\Delta x}=0,
\]
同理可得 \(f'_y(0,0)=0\)，所以 \(f(x,y)\) 在 \((0,0)\) 处偏导数存在.

所以本题答案选（C）.

**【注】** 误把一元函数的“可导必连续”应用到二元函数中，选择（A）是经典错误.

**例3** 极限 \(\lim_{(x,y)\to(0,0)}\frac{f(x,y)-f(0,0)}{\sqrt{x^2+y^2}}=0\) 是二元函数 \(f(x,y)\) 在点 \((0,0)\) 处可微的

（A）充分非必要条件.

（B）必要非充分条件.

（C）充分必要条件.

（D）既不是充分也不是必要条件.

**【解】** 如果 \(\lim_{(x,y)\to(0,0)}\frac{f(x,y)-f(0,0)}{\sqrt{x^2+y^2}}=0\)，则
\[
f'_x(0,0)=\lim_{x\to 0}\frac{f(x,0)-f(0,0)}{x}=\lim_{x\to 0}\frac{f(x,0)-f(0,0)}{\sqrt{x^2+0^2}}\cdot\frac{\sqrt{x^2+0^2}}{x}=0.
\]
同理 \(f'_y(0,0)=0\)，因此函数 \(f(x,y)\) 在 \((0,0)\) 处可微；

取 \(f(x,y)=x^2+y\)，则函数 \(f(x,y)\) 在 \((0,0)\) 处可微分，但
\[
\lim_{(x,y)\to(0,0)}\frac{f(x,y)-f(0,0)}{\sqrt{x^2+y^2}}=\lim_{(x,y)\to(0,0)}\frac{x^2+y}{\sqrt{x^2+y^2}}
\]
极限不存在，所以答案选（A）.

**【变式】**（供同学们自行思考）

如果函数 \(f(x,y)\) 在 \((0,0)\) 处连续，那么下列命题正确的是

（A）若极限 \(\lim_{\substack{x\to 0\\ y\to 0}}\frac{f(x,y)}{|x|+|y|}\) 存在，则 \(f(x,y)\) 在 \((0,0)\) 处可微.

（B）若极限 \(\lim_{\substack{x\to 0\\ y\to 0}}\frac{f(x,y)}{x^2+y^2}\) 存在，则 \(f(x,y)\) 在 \((0,0)\) 处可微.

（C）若 \(f(x,y)\) 在 \((0,0)\) 处可微，则极限 \(\lim_{\substack{x\to 0\\ y\to 0}}\frac{f(x,y)}{|x|+|y|}\) 存在.

（D）若 \(f(x,y)\) 在 \((0,0)\) 处可微，则极限 \(\lim_{\substack{x\to 0\\ y\to 0}}\frac{f(x,y)}{x^2+y^2}\) 存在.

**【答案】** （B）

**例4** 函数 \(f(x,y)=\begin{cases}(x^2+y^2)\sin\frac{1}{x^2+y^2},&x^2+y^2\neq 0,\\0,&x^2+y^2=0\end{cases}\) 在 \((0,0)\) 点是否可微？

**【解】** 因为 \(\left|\sin\frac{1}{x^2+y^2}\right|\le 1\)，\(|f(x,y)|\le x^2+y^2\)，所以
\[
\lim_{(x,y)\to(0,0)}f(x,y)=0,
\]
\(f(x,y)\) 在 \((0,0)\) 点连续. 求 \(f(x,y)\) 在 \((0,0)\) 点的偏导数.` },
      { p: 142, md: R`\[
\lim_{\Delta x\to 0}\frac{f(0+\Delta x,0)-f(0,0)}{\Delta x}=\lim_{\Delta x\to 0}\frac{(\Delta x)^2\sin\frac{1}{(\Delta x)^2}}{\Delta x}=0,
\]
\[
\lim_{\Delta y\to 0}\frac{f(0,0+\Delta y)-f(0,0)}{\Delta y}=\lim_{\Delta y\to 0}\frac{(\Delta y)^2\sin\frac{1}{(\Delta y)^2}}{\Delta y}=0,
\]
所以 \(\left.\frac{\partial f}{\partial x}\right|_{(0,0)}=\left.\frac{\partial f}{\partial y}\right|_{(0,0)}=0\). 下面考虑 \(f(x,y)\) 在 \((0,0)\) 点的可微性.
\[
\frac{f(0+\Delta x,0+\Delta y)-f(0,0)-\left[\left.\frac{\partial f}{\partial x}\right|_{(0,0)}\Delta x+\left.\frac{\partial f}{\partial y}\right|_{(0,0)}\Delta y\right]}{\sqrt{(\Delta x)^2+(\Delta y)^2}}
\]
\[
=\frac{[(\Delta x)^2+(\Delta y)^2]\sin\frac{1}{(\Delta x)^2+(\Delta y)^2}}{\sqrt{(\Delta x)^2+(\Delta y)^2}}=\sqrt{(\Delta x)^2+(\Delta y)^2}\sin\frac{1}{(\Delta x)^2+(\Delta y)^2}\to 0,
\]
当 \((\Delta x,\Delta y)\to 0\) 时，因此 \(f(x,y)\) 在 \((0,0)\) 点可微，且 \(\mathrm{d}f(0,0)=0\).

**例5** 设 \(f(x,y)=(x+y)\varphi(x,y)\)，其中 \(\varphi(x,y)\) 在 \((0,0)\) 点连续，则
\[
\mathrm{d}f(x,y)=[\varphi(x,y)+(x+y)\varphi'_x(x,y)]\mathrm{d}x+[\varphi(x,y)+(x+y)\varphi'_y(x,y)]\mathrm{d}y,
\]
（令 \(x=0,y=0\)，\(\mathrm{d}f(0,0)=\varphi(0,0)\mathrm{d}x+\varphi(0,0)\mathrm{d}y\).）

（1）指出错误；

（2）写出正确的解法.

**【解】** （1）\(\varphi(x,y)\) 仅在 \((0,0)\) 点连续，因此 \(\varphi'_x(x,y),\varphi'_y(x,y)\) 未必存在，所以本题的做法是错的.

（2）\(f(0+\Delta x,0+\Delta y)-f(0,0)=(\Delta x+\Delta y)\varphi(\Delta x,\Delta y)\).

因为 \(\varphi(x,y)\) 在 \((0,0)\) 点连续，
\[
\varphi(\Delta x,\Delta y)=\varphi(0,0)+\alpha(\Delta x,\Delta y)
\]
其中 \(\alpha(\Delta x,\Delta y)=o(1)\)，\(\sqrt{(\Delta x)^2+(\Delta y)^2}\to 0\) 时.（即 \(\lim_{\substack{\Delta x\to 0\\ \Delta y\to 0}}\alpha(\Delta x,\Delta y)=0\)）.

故
\[
\begin{aligned}
f(\Delta x,\Delta y)-f(0,0)&=(\Delta x+\Delta y)[\varphi(0,0)+\alpha(\Delta x,\Delta y)]\\
&=\varphi(0,0)\Delta x+\varphi(0,0)\Delta y+(\Delta x+\Delta y)\alpha(\Delta x,\Delta y),
\end{aligned}
\]
而
\[
\lim_{\substack{\Delta x\to 0\\ \Delta y\to 0}}\frac{(\Delta x+\Delta y)\alpha(\Delta x,\Delta y)}{\sqrt{(\Delta x)^2+(\Delta y)^2}}=0
\]
（\((\Delta x+\Delta y)\alpha(\Delta x,\Delta y)=o(\sqrt{(\Delta x)^2+(\Delta y)^2})\)，\(\rho=\sqrt{(\Delta x)^2+(\Delta y)^2}\to 0\) 时），\(f(x,y)\) 在 \((0,0)\) 点可微，且
\[
\mathrm{d}f(0,0)=\varphi(0,0)\mathrm{d}x+\varphi(0,0)\mathrm{d}y.
\]

**例6** 函数 \(f(x,y)=\sqrt{|xy|}\) 在 \((0,0)\) 点

（A）连续，但偏导不存在.

（B）偏导存在，但不可微.

（C）可微.

（D）上述（A）（B）（C）均不正确.

**【解】** 先讨论 \(f(x,y)\) 在 \((0,0)\) 点的连续性. 显然
\[
\lim_{\substack{x\to 0\\ y\to 0}}f(x,y)=\lim\sqrt{|xy|}=0=f(0,0)
\]
所以 \(f(x,y)\) 在 \((0,0)\) 点连续.` },
      { p: 143, md: R`再讨论 \(f(x,y)\) 在 \((0,0)\) 点偏导的存在性.
\[
\lim_{\Delta x\to 0}\frac{f(0+\Delta x,0)-f(0,0)}{\Delta x}=0
\]
\[
\lim_{\Delta y\to 0}\frac{f(0,0+\Delta y)-f(0,0)}{\Delta y}=0
\]
所以 \(\left.\frac{\partial f}{\partial x}\right|_{(0,0)}=\left.\frac{\partial f}{\partial y}\right|_{(0,0)}=0\)，存在.

最后讨论 \(f(x,y)\) 在 \((0,0)\) 点的可微性.
\[
\lim_{\substack{\Delta x\to 0\\ \Delta y\to 0}}\frac{f(0+\Delta x,0+\Delta y)-f(0,0)-\left[\left.\frac{\partial f}{\partial x}\right|_{(0,0)}\Delta x+\left.\frac{\partial f}{\partial y}\right|_{(0,0)}\Delta y\right]}{\sqrt{(\Delta x)^2+(\Delta y)^2}}=\lim_{\substack{\Delta x\to 0\\ \Delta y\to 0}}\frac{\sqrt{|\Delta x||\Delta y|}}{\sqrt{(\Delta x)^2+(\Delta y)^2}}
\]
不存在，所以 \(f(x,y)\) 在 \((0,0)\) 点不可微.

答案：（B）.

### 二、复合函数的偏导数与全微分

#### 1. 复合函数求导法则

**定理（多元函数与一元函数的复合）** 如果函数 \(u=\varphi(t),v=\psi(t)\) 都在点 \(t\) 可导，函数 \(z=f(u,v)\) 在对应点 \((u,v)\) 具有连续一阶偏导数，则复合函数 \(z=f[\varphi(t),\psi(t)]\) 在点 \(t\) 可导，且
\[
\frac{\mathrm{d}z}{\mathrm{d}t}=\frac{\partial z}{\partial u}\frac{\mathrm{d}u}{\mathrm{d}t}+\frac{\partial z}{\partial v}\frac{\mathrm{d}v}{\mathrm{d}t}
\]

**【注】** 由于以上的函数 \(z=f[\varphi(t),\psi(t)]\) 仅是 \(t\) 的一元函数，则这里的 \(\frac{\mathrm{d}z}{\mathrm{d}t}\) 称为全导数.

**定理（多元函数与多元函数的复合）** 如果函数 \(u=\varphi(x,y),v=\psi(x,y)\) 在点 \((x,y)\) 有对 \(x,y\) 的偏导数，函数 \(z=f(u,v)\) 在对应点有连续一阶偏导数，则复合函数 \(z=f[\varphi(x,y),\psi(x,y)]\) 在点 \((x,y)\) 有对 \(x,y\) 的偏导数，且
\[
\frac{\partial z}{\partial x}=\frac{\partial f}{\partial u}\frac{\partial u}{\partial x}+\frac{\partial f}{\partial v}\frac{\partial v}{\partial x},\qquad
\frac{\partial z}{\partial y}=\frac{\partial f}{\partial u}\frac{\partial u}{\partial y}+\frac{\partial f}{\partial v}\frac{\partial v}{\partial y}
\]

以上两定理所给出的复合函数求导法则则是常用的重要法则，两个定理中给出的求导公式不必硬背，关键是要理解并掌握复合函数求导法则. 通常先通过“树形图”分析清楚变量之间的关系，然后利用“树形图”就可写出导数公式，这种方法在解题中可自如地应用.

（1）变量之间的树形图

> 树形图：左图中 \(z\) 经中间变量 \(u,v\) 到自变量 \(t\)（\(u,v\) 均是 \(t\) 的函数）；右图中 \(z\) 经中间变量 \(u,v\) 到自变量 \(x,y\)（\(u=u(x,y),v=v(x,y)\)）.

通过“树形图”可清楚看出，谁是自变量，谁是中间变量，谁是谁的函数. 出现在“树形图”各个树枝末端的变量为自变量. 出现在树枝之间的变量为中间变量.

（2）偏导数计算公式的结构

复合函数求导公式不难看出，等式右端往往是若干项之和，而每一项都是若干个导数之积，并且有以下规律：

1）对某自变量导数的项数 \(=\) “树形图”中各树枝末端出现该自变量的个数.` },
      { p: 144, md: R`2）各项中偏导乘积的因子数 = 因变量与树枝末端该自变量之间的树枝数.

**例7** 设 \(z=f(xy,x^2-y^2)\)，其中 \(f\) 可微，\(\dfrac{\partial z}{\partial x}=\) ______.

**【解】** \(z\) 是由 \(f(u,v)\) 及 \(\begin{cases}u=xy\\v=x^2-y^2\end{cases}\) 复合而成的函数，故
\[
\frac{\partial z}{\partial x}=\frac{\partial f}{\partial u}\frac{\partial u}{\partial x}+\frac{\partial f}{\partial v}\frac{\partial v}{\partial x}=y\frac{\partial f}{\partial u}+2x\frac{\partial f}{\partial v}.
\]

## 2. 全微分形式不变性

设函数 \(z=f(u,v)\) 和 \(u=\varphi(x,y),v=\psi(x,y)\) 都具有连续一阶偏导数，则复合函数 \(z=f[\varphi(x,y),\psi(x,y)]\) 可微，且
\[
dz=\frac{\partial z}{\partial x}dx+\frac{\partial z}{\partial y}dy
\]
又 \(\dfrac{\partial z}{\partial x}=\dfrac{\partial f}{\partial u}\dfrac{\partial u}{\partial x}+\dfrac{\partial f}{\partial v}\dfrac{\partial v}{\partial x}\)，\(\dfrac{\partial z}{\partial y}=\dfrac{\partial f}{\partial u}\dfrac{\partial u}{\partial y}+\dfrac{\partial f}{\partial v}\dfrac{\partial v}{\partial y}\)，将 \(\dfrac{\partial z}{\partial x}\) 和 \(\dfrac{\partial z}{\partial y}\) 代入上式得
\[
\begin{aligned}
dz&=\left(\frac{\partial f}{\partial u}\frac{\partial u}{\partial x}+\frac{\partial f}{\partial v}\frac{\partial v}{\partial x}\right)dx+\left(\frac{\partial f}{\partial u}\frac{\partial u}{\partial y}+\frac{\partial f}{\partial v}\frac{\partial v}{\partial y}\right)dy\\
&=\frac{\partial f}{\partial u}\left(\frac{\partial u}{\partial x}dx+\frac{\partial u}{\partial y}dy\right)+\frac{\partial f}{\partial v}\left(\frac{\partial v}{\partial x}dx+\frac{\partial v}{\partial y}dy\right)\\
&=\frac{\partial f}{\partial u}du+\frac{\partial f}{\partial v}dv=\frac{\partial z}{\partial u}du+\frac{\partial z}{\partial v}dv.
\end{aligned}
\]
由此可见，无论是把 \(z\) 看作自变量 \(x\) 和 \(y\) 的函数，还是把 \(z\) 看作中间变量 \(u\) 和 \(v\) 的函数，它的微分 \(dz=\dfrac{\partial z}{\partial x}dx+\dfrac{\partial z}{\partial y}dy\) 和 \(dz=\dfrac{\partial z}{\partial u}du+\dfrac{\partial z}{\partial v}dv\) 具有同样的形式. 这个性质叫全微分形式不变性.

## 3. 高阶偏导数

**定义** 设函数 \(z=f(x,y)\) 在区域 \(D\) 内具有偏导数，
\[
\frac{\partial z}{\partial x}=f'_x(x,y),\qquad \frac{\partial z}{\partial y}=f'_y(x,y)
\]
如果 \(f'_x(x,y)\) 和 \(f'_y(x,y)\) 的偏导数也存在，则称它们是函数 \(z=f(x,y)\) 的二阶导数. 二阶导数有以下四个
\[
\begin{aligned}
\frac{\partial^2 z}{\partial x^2}&=\frac{\partial}{\partial x}\left(\frac{\partial z}{\partial x}\right)=f''_{xx}(x,y),&
\frac{\partial^2 z}{\partial x\partial y}&=\frac{\partial}{\partial y}\left(\frac{\partial z}{\partial x}\right)=f''_{xy}(x,y),\\
\frac{\partial^2 z}{\partial y\partial x}&=\frac{\partial}{\partial x}\left(\frac{\partial z}{\partial y}\right)=f''_{yx}(x,y),&
\frac{\partial^2 z}{\partial y^2}&=\frac{\partial}{\partial y}\left(\frac{\partial z}{\partial y}\right)=f''_{yy}(x,y)
\end{aligned}
\]
其中 \(\dfrac{\partial^2 z}{\partial x\partial y}\) 和 \(\dfrac{\partial^2 z}{\partial y\partial x}\) 称为混合偏导数. 类似地可得到三阶、四阶、\(\cdots\)、\(n\) 阶偏导数，二阶及二阶以上的偏导数统称为高阶偏导数.

**定理** 若函数 \(z=f(x,y)\) 的两个混合偏导数 \(\dfrac{\partial^2 z}{\partial x\partial y}\) 和 \(\dfrac{\partial^2 z}{\partial y\partial x}\) 在点 \((x_0,y_0)\) 都连续，则在 \((x_0,y_0)\) 点
\[
\frac{\partial^2 z}{\partial x\partial y}=\frac{\partial^2 z}{\partial y\partial x}.
\]` },
      { p: 145, md: R`**例8** 设 \(z=\dfrac{y}{x}+xyf\left(\dfrac{y}{x}\right)\)，\(f\) 二阶可微，则 \(\dfrac{\partial^2 z}{\partial x\partial y}=\) ______.

**【解】**
\[
\begin{aligned}
\frac{\partial z}{\partial y}&=\frac{1}{x}+xf\left(\frac{y}{x}\right)+xyf'\left(\frac{y}{x}\right)\cdot\frac{1}{x}\\
&=\frac{1}{x}+xf\left(\frac{y}{x}\right)+yf'\left(\frac{y}{x}\right),\\
\frac{\partial^2 z}{\partial x\partial y}&=\frac{\partial}{\partial x}\left(\frac{\partial z}{\partial y}\right)=\frac{\partial}{\partial x}\left[\frac{1}{x}+xf\left(\frac{y}{x}\right)+yf'\left(\frac{y}{x}\right)\right]\\
&=-\frac{1}{x^2}+f\left(\frac{y}{x}\right)-\frac{y}{x}f'\left(\frac{y}{x}\right)-\frac{y^2}{x^2}f''\left(\frac{y}{x}\right).
\end{aligned}
\]

**例9** 设函数 \(F(x,y)=\displaystyle\int_0^{xy}\frac{\sin t}{1+t^2}dt\)，则 \(\left.\dfrac{\partial^2 F}{\partial x^2}\right|_{\substack{x=0\\y=2}}=\) ______.

**【解】** 方法一
\[
\frac{\partial F}{\partial x}=\frac{y\sin xy}{1+x^2y^2},
\]
\[
\frac{\partial^2 F}{\partial x^2}=\frac{y^2\cos(xy)(1+x^2y^2)-2xy^3\sin xy}{(1+x^2y^2)^2}.
\]
故
\[
\left.\frac{\partial^2 F}{\partial x^2}\right|_{\substack{x=0\\y=2}}=4.
\]

方法二
\[
\frac{\partial F}{\partial x}=\frac{y\sin xy}{1+x^2y^2},\qquad F'_x(x,2)=\frac{2\sin 2x}{1+4x^2},
\]
\[
\left.\frac{\partial^2 F}{\partial x^2}\right|_{\substack{x=0\\y=2}}=F''_{xx}(0,2)=\lim_{x\to0}\frac{2\sin 2x}{x(1+4x^2)}=\lim_{x\to0}\frac{4x}{x(1+4x^2)}=4.
\]

**例10** 设 \(\mu=e^{-x}\sin\dfrac{x}{y}\)，则 \(\dfrac{\partial^2\mu}{\partial x\partial y}\) 在点 \(\left(2,\dfrac{1}{\pi}\right)\) 处的值为 ______.

**【解】**
\[
\begin{aligned}
\frac{\partial\mu}{\partial x}&=-e^{-x}\sin\frac{x}{y}+\frac{1}{y}e^{-x}\cos\frac{x}{y}\\
&=e^{-x}\left(\frac{1}{y}\cos\frac{x}{y}-\sin\frac{x}{y}\right),
\end{aligned}
\]
\[
\frac{\partial^2\mu}{\partial x\partial y}=e^{-x}\left(-\frac{1}{y^2}\cos\frac{x}{y}+\frac{x}{y^3}\sin\frac{x}{y}+\frac{x}{y^2}\cos\frac{x}{y}\right),
\]
因而
\[
\left.\frac{\partial^2\mu}{\partial x\partial y}\right|_{\left(2,\frac{1}{\pi}\right)}=e^{-2}(-\pi^2\cos2\pi+2\pi^3\sin2\pi+2\pi^2\cos2\pi)=\pi^2e^{-2}.
\]

## 三、隐函数的偏导数与全微分

### 1. 由一个方程式确定的隐函数(一元函数)求导法

设 \(F(x,y)\) 有连续一阶偏导数，且 \(F'_y\ne0\)，则由方程 \(F(x,y)=0\) 确定的函数 \(y=y(x)\) 可导，且
\[
\frac{dy}{dx}=-\frac{F'_x}{F'_y}
\]

### 2. 由一个方程式确定的隐函数(二元函数)求导法

设 \(F(x,y,z)\) 有连续一阶偏导数，且 \(F'_z\ne0\)，\(z=z(x,y)\) 由方程 \(F(x,y,z)=0\) 所确定，则
\[
\frac{\partial z}{\partial x}=-\frac{F'_x}{F'_z},\qquad \frac{\partial z}{\partial y}=-\frac{F'_y}{F'_z}
\]` },
      { p: 146, md: R`### 3. 由方程组所确定的隐函数(一元函数)求导法

设 \(u=u(x),v=v(x)\) 由方程组
\[
\begin{cases}
F(x,u,v)=0\\
G(x,u,v)=0
\end{cases}
\]
所确定，要求 \(\dfrac{du}{dx}\) 和 \(\dfrac{dv}{dx}\)，可通过原方程组两端对 \(x\) 求导得到，即
\[
\begin{cases}
F'_x+F'_u\dfrac{du}{dx}+F'_v\dfrac{dv}{dx}=0,\\[4pt]
G'_x+G'_u\dfrac{du}{dx}+G'_v\dfrac{dv}{dx}=0.
\end{cases}
\]
然后从以上方程组中解出 \(\dfrac{du}{dx}\) 和 \(\dfrac{dv}{dx}\).

### 4. 由方程组所确定的隐函数(二元函数)求导法

设 \(u=u(x,y),v=v(x,y)\) 由方程组
\[
\begin{cases}
F(x,y,u,v)=0,\\
G(x,y,u,v)=0
\end{cases}
\]
所确定，若要求 \(\dfrac{\partial u}{\partial x}\) 和 \(\dfrac{\partial v}{\partial x}\)，可先对原方程组两端对 \(x\) 求偏导得到，即
\[
\begin{cases}
F'_x+F'_u\dfrac{\partial u}{\partial x}+F'_v\dfrac{\partial v}{\partial x}=0,\\[4pt]
G'_x+G'_u\dfrac{\partial u}{\partial x}+G'_v\dfrac{\partial v}{\partial x}=0.
\end{cases}
\]
然后从中解出 \(\dfrac{\partial u}{\partial x}\) 和 \(\dfrac{\partial v}{\partial x}\). 同理可求得 \(\dfrac{\partial u}{\partial y}\) 和 \(\dfrac{\partial v}{\partial y}\).

**例11** 设函数 \(z=z(x,y)\) 由方程 \(xyz+\sqrt{x^2+y^2+z^2}=\sqrt2\) 确定，求 \(z(x,y)\) 在 \((1,0,-1)\) 点处的全微分.

**【解】** 方法一 \(F(x,y,z)=xyz+\sqrt{x^2+y^2+z^2}-\sqrt2\)，
\[
\frac{\partial z}{\partial x}=-\frac{\dfrac{\partial F}{\partial x}}{\dfrac{\partial F}{\partial z}}
=-\frac{yz+\dfrac{x}{\sqrt{x^2+y^2+z^2}}}{xy+\dfrac{z}{\sqrt{x^2+y^2+z^2}}},
\]
在 \(x=1,y=0,z=-1\) 点，\(\dfrac{\partial z}{\partial x}=1\). 同样，在该点，\(\dfrac{\partial z}{\partial y}=-\sqrt2\)，所以在该点
\[
dz=dx-\sqrt2\,dy.
\]

方法二 因为 \(z=z(x,y)\) 是由方程 \(xyz+\sqrt{x^2+y^2+z^2}=\sqrt2\) 确定的函数，所以 \(\forall(x,y)\)，
\[
xyz(x,y)+\sqrt{x^2+y^2+z^2(x,y)}\equiv\sqrt2,
\]
两边对 \(x\) 求偏导
\[
yz+xy\frac{\partial z}{\partial x}+\frac{x}{\sqrt{x^2+y^2+z^2}}+\frac{z}{\sqrt{x^2+y^2+z^2}}\frac{\partial z}{\partial x}=0,
\]
将 \(x=1,y=0,z=-1\) 代入
\[
\left.\frac{\partial z}{\partial x}\right|_{(1,0)}=1,
\]
同理，两边对 \(y\) 求偏导，将 \(x=1,y=0,z=-1\) 代入可求得
\[
\left.\frac{\partial z}{\partial y}\right|_{(1,0)}=-\sqrt2.
\]
因此 \(dz=dx-\sqrt2\,dy\).

**例12** 若函数 \(z=z(x,y)\) 由方程 \(e^{x+2y+3z}+xyz=1\) 确定，则 \(\left.dz\right|_{(0,0)}=\) ______.` },
      { p: 147, md: R`**【解】** 方法一 将 \(x=0,y=0\) 代入 \(e^{x+2y+3z}+xyz=1\) 中得 \(e^{3z}=1\)，则 \(z=0\). 方程 \(e^{x+2y+3z}+xyz=1\) 两端微分得
\[
e^{x+2y+3z}(dx+2dy+3dz)+yz\,dx+xz\,dy+xy\,dz=0,
\]
将 \(x=0,y=0,z=0\) 代入上式得
\[
dx+2dy+3dz=0,
\]
则
\[
\left.dz\right|_{(0,0)}=-\frac{1}{3}(dx+2dy).
\]

方法二 将 \(x=0,y=0\) 代入 \(e^{x+2y+3z}+xyz=1\) 得 \(e^{3z}=1\)，则 \(z=0\)，
\[
\left.dz\right|_{(0,0)}=z'_x(0,0)dx+z'_y(0,0)dy,
\]
在 \(e^{x+2y+3z}+xyz=1\) 中令 \(y=0\)，\(e^{x+3z}=1\). 两边对 \(x\) 求导得
\[
e^{x+3z}(1+3z'_x)=0,
\]
\[
z'_x(0,0)=-\frac{1}{3},
\]
在 \(e^{x+2y+3z}+xyz=1\) 中令 \(x=0\) 得，\(e^{2y+3z}=1\). 两边对 \(y\) 求导得
\[
e^{2y+3z}(2+3z'_y)=0,
\]
\[
z'_y(0,0)=-\frac{2}{3},
\]
则
\[
\left.dz\right|_{(0,0)}=-\frac{1}{3}(dx+2dy).
\]

**例13** 设函数 \(z=z(x,y)\) 由参数方程
\[
\begin{cases}
x=u\cos v\\
y=u\sin v\\
z=uv
\end{cases}
\]
给出，求 \(\dfrac{\partial z}{\partial x}\).

**【解】** \(z\) 是 \(u,v\) 的函数，而由
\[
\begin{cases}
x=u\cos v\\
y=u\sin v
\end{cases}
\]
可得 \(u,v\) 是 \(x,y\) 的函数，因此 \(z\) 是复合函数 \(z=u(x,y)\cdot v(x,y)\)，
\[
\frac{\partial z}{\partial x}=v\frac{\partial u}{\partial x}+u\frac{\partial v}{\partial x},
\]
只要求出 \(\dfrac{\partial u}{\partial x},\dfrac{\partial v}{\partial x}\) 即可.
\[
\begin{cases}
x-u\cos v=0,\\
y-u\sin v=0,
\end{cases}
\]
两个方程都对 \(x\) 求偏导：
\[
\begin{cases}
1-\dfrac{\partial u}{\partial x}\cos v+u\sin v\dfrac{\partial v}{\partial x}=0,\\[4pt]
0-\dfrac{\partial u}{\partial x}\sin v-u\cos v\dfrac{\partial v}{\partial x}=0,
\end{cases}
\]
将 \(\dfrac{\partial u}{\partial x},\dfrac{\partial v}{\partial x}\) 看成未知数，解上述二阶线性非齐次代数方程可得：
\[
\frac{\partial u}{\partial x}=\cos v,\qquad \frac{\partial v}{\partial x}=-\frac{\sin v}{u},
\]
故
\[
\frac{\partial z}{\partial x}=v\cos v-\sin v.
\]

**例14** 设 \(z=f(x+y,x-y)\)，\(f(x,y)\) 二阶偏导连续，则 \(\dfrac{\partial^2 z}{\partial x\partial y}=\) ______.` },
    ],
    quiz: [{"q": "设 $z=x^2y$，则 $\\frac{\\partial z}{\\partial x}=$", "options": ["$2xy$", "$x^2$", "$2x$", "$x^2y$"], "answer": 0, "explain": "对 $x$ 求偏导，把 $y$ 当常数。"}, {"q": "设 $z=f(x,y)$ 可微，则 $dz=$", "options": ["$f_x dx+f_y dy$", "$f_x dy+f_y dx$", "$f_{xx}dx+f_{yy}dy$", "$f_x+f_y$"], "answer": 0, "explain": "全微分公式。"}, {"q": "设 $z=f(xy,x^2-y^2)$，$f$ 可微，则 $\\frac{\\partial z}{\\partial x}=$", "options": ["$yf_1'+2xf_2'$", "$xf_1'+2yf_2'$", "$yf_1'-2xf_2'$", "$f_1'+f_2'$"], "answer": 0, "explain": "链式法则：对第一个中间变量 $xy$ 求导得 $y$，对 $x^2-y^2$ 得 $2x$。"}, {"q": "由 $F(x,y,z)=0$ 确定 $z=z(x,y)$，且 $F_z\\ne0$，则 $\\frac{\\partial z}{\\partial x}=$", "options": ["$-\\frac{F_x}{F_z}$", "$\\frac{F_x}{F_z}$", "$-\\frac{F_z}{F_x}$", "$F_x$"], "answer": 0, "explain": "隐函数求导公式。"}]
  };
})();
