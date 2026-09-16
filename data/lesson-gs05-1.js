window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["gs05_s0"] = {
    id: "gs05_s0",
    ch: "第五章 多元函数微分学",
    title: "第一节 重极限、连续、偏导数、全微分",
    book: "《高等数学辅导讲义》",
    pages: [142, 147],
    img: "assets/img/gaoshu",
    content: [
      { p: 142, md: R`# 第五章 多元函数微分学
## 第一节 重极限、连续、偏导数、全微分（概念、理论）
### 一、考试内容要点精讲
#### （一）重极限
定义 设函数 $f(x,y)$ 在区域 $D$ 上有定义，点 $P_0(x_0,y_0)\in D$ 为 $D$ 的聚点，如果 $\forall\varepsilon>0$，存在 $\delta>0$，当 $P(x,y)\in D$，且 $0<\sqrt{(x-x_0)^2+(y-y_0)^2}<\delta$ 时，都有 $|f(x)-A|<\varepsilon$ 成立，则称常数 $A$ 为函数 $f(x,y)$ 当 $(x,y)\to(x_0,y_0)$ 时的极限，记为
$$\lim_{(x,y)\to(x_0,y_0)}f(x,y)=A\text{ 或 }\lim_{\substack{x\to x_0\\y\to y_0}}f(x,y)=A\text{ 或 }\lim_{P\to P_0}f(P)=A.$$
【注】1）这里的极限是要求点 $(x,y)$ 在 $D$ 内以任意方式趋近于点 $(x_0,y_0)$ 时，函数 $f(x,y)$ 都趋近于同一确定的常数 $A$，否则该极限就不存在。
2）一元函数极限中的下述性质对多元函数仍成立：① 局部有界性； ② 保号性； ③ 有理运算； ④ 极限与无穷小的关系； ⑤ 夹逼性。
【例1】求下列极限
1）$\lim\limits_{\substack{x\to0\\y\to0}}\frac{x^2y}{x^2+y^2}$。 2）$\lim\limits_{\substack{x\to0\\y\to0}}\frac{x^2+y^2}{|x|+|y|}$。 3）$\lim\limits_{\substack{x\to0\\y\to0}}\frac{xy^2\sin(xy)}{x^2+y^4}$。
【解】1）由于 $0\leqslant\left|\frac{x^2y}{x^2+y^2}\right|\leqslant|y|$，而 $\lim\limits_{\substack{x\to0\\y\to0}}|y|=0$，由夹逼原理知 $\lim\limits_{\substack{x\to0\\y\to0}}\frac{x^2y}{x^2+y^2}=0.$
2）由于 $0\leqslant\left|\frac{x^2+y^2}{|x|+|y|}\right|=\frac{x^2}{|x|+|y|}+\frac{y^2}{|x|+|y|}\leqslant\frac{x^2}{|x|}+\frac{y^2}{|y|}=|x|+|y|$，
而 $\lim\limits_{\substack{x\to0\\y\to0}}(|x|+|y|)=0$，由夹逼原理知 $\lim\limits_{\substack{x\to0\\y\to0}}\frac{x^2+y^2}{|x|+|y|}=0.$
3）方法1 由于 $\left|\frac{xy^2}{x^2+y^4}\right|\leqslant\frac{1}{2}$，即为有界量，而 $\lim\limits_{\substack{x\to0\\y\to0}}\sin xy=0$，即为无穷小量，则原式 $=0.$` },
      { p: 143, md: R`方法2 由于 $0\leqslant\left|\frac{xy^2\sin xy}{x^2+y^4}\right|\leqslant\frac{1}{2}|\sin xy|$，而 $\lim\limits_{\substack{x\to0\\y\to0}}\frac{1}{2}|\sin xy|=0$，由夹逼原理知 $\lim\limits_{\substack{x\to0\\y\to0}}\frac{xy^2\sin xy}{x^2+y^4}=0.$
【注】求重极限常用方法：1. 利用极限性质（四则运算法则，夹逼原理）；2. 消去分母中极限为零的因子（有理化，等价无穷小代换）；3. 利用无穷小量与有界变量之积为无穷小量。
【例2】证明下列重极限不存在
1）$\lim\limits_{\substack{x\to0\\y\to0}}\frac{xy}{x^2+y^2}$； 2）$\lim\limits_{\substack{x\to0\\y\to0}}\frac{xy^2}{x^2+y^4}$。
【证】1）取直线 $y=kx$，让点 $(x,y)$ 沿直线 $y=kx$ 趋于 $(0,0)$ 点，此时有
$$\lim_{\substack{y=kx\\x\to0}}\frac{xy}{x^2+y^2}=\lim_{x\to0}\frac{kx^2}{x^2+k^2x^2}=\frac{k}{1+k^2}.$$
则重极限 $\lim\limits_{\substack{x\to0\\y\to0}}\frac{xy}{x^2+y^2}$ 不存在。
【注】本题中的方法是证明重极限不存在的常用方法。
2）取直线 $y=kx$，则 $\lim\limits_{\substack{y=kx\\x\to0}}\frac{xy^2}{x^2+y^4}=\lim_{x\to0}\frac{k^2x^3}{x^2+k^4x^4}=\lim_{x\to0}\frac{k^2x}{1+k^4x^2}=0.$ 这说明沿任何一条过原点的直线 $y=kx$（不包括 $y$ 轴）趋于 $(0,0)$ 点时，极限存在且都为零，并且若沿 $y$ 轴趋于 $(0,0)$ 点极限也为零，事实上 $\lim\limits_{\substack{x=0\\y\to0}}\frac{xy^2}{x^2+y^4}=0.$ 这能否说明重极限 $\lim\limits_{\substack{x\to0\\y\to0}}\frac{xy^2}{x^2+y^4}$ 存在且为零呢？不能！事实上若沿过原点的抛物线 $x=y^2$ 趋于 $(0,0)$ 点时，就有
$$\lim_{\substack{x=y^2\\y\to0}}\frac{xy^2}{x^2+y^4}=\lim_{y\to0}\frac{y^4}{y^4+y^4}=\frac{1}{2}.$$
故极限 $\lim\limits_{\substack{x\to0\\y\to0}}\frac{xy^2}{x^2+y^4}$ 不存在。
【注】证明重极限不存在常用方法：沿两种不同路径极限不同（通常可取过点 $(x_0,y_0)$ 的直线）。
#### （二）连续
1）定义：若 $\lim\limits_{\substack{x\to x_0\\y\to y_0}}f(x,y)=f(x_0,y_0)$，则称 $f(x,y)$ 在点 $(x_0,y_0)$ 处连续。
2）性质：① 连续函数的和、差、积、商（分母不为零）及复合仍连续；② 基本初等函数在其定义域内连续；初等函数在其定义区域内连续；` },
      { p: 144, md: R`③ 有界闭区域上连续函数的性质
a. 有界性：若 $f(x,y)$ 在有界闭区域 $D$ 上连续，则 $f(x,y)$ 在 $D$ 上有界。
b. 最值性：若 $f(x,y)$ 在有界闭区域 $D$ 上连续，则 $f(x,y)$ 在 $D$ 上必有最大值和最小值。
c. 介值性：若 $f(x,y)$ 在有界闭区域 $D$ 上连续，则 $f(x,y)$ 在 $D$ 上可取到介于最小值与最大值之间的任何值。
【例3】判断函数 $f(x,y)=\begin{cases}\dfrac{xy}{\sqrt{x^2+y^2}},&(x,y)\neq(0,0),\\a,&(x,y)=(0,0)\end{cases}$ 的连续性。
【解】因为 $0\leqslant\left|\dfrac{xy}{\sqrt{x^2+y^2}}\right|\leqslant|y|$，则 $\lim\limits_{\substack{x\to0\\y\to0}}\frac{xy}{\sqrt{x^2+y^2}}=0.$ 若 $a=0$，则 $f(x,y)$ 处处连续；若 $a\neq0$，则 $f(x,y)$ 除点 $(0,0)$ 外处处连续。
#### （三）偏导数
1. 定义：$f'_x(x_0,y_0)=\lim\limits_{\Delta x\to0}\frac{f(x_0+\Delta x,y_0)-f(x_0,y_0)}{\Delta x}=\left.\frac{d}{dx}f(x,y_0)\right|_{x=x_0}$，
$$f'_y(x_0,y_0)=\lim_{\Delta y\to0}\frac{f(x_0,y_0+\Delta y)-f(x_0,y_0)}{\Delta y}=\left.\frac{d}{dy}f(x_0,y)\right|_{y=y_0}.$$
【注】$f'_x(x_0,y_0)$ 就是一元函数 $f(x,y_0)$ 在 $x_0$ 处的导数；$f'_y(x_0,y_0)$ 就是一元函数 $f(x_0,y)$ 在 $y_0$ 处的导数。
【例4】设 $f(x,y)=x+2y+(y-1)\arcsin\frac{x}{1+xy}$，求 $f'_x(0,1)$ 和 $f'_y(0,1)$。
【解】$f'_x(0,1)=\left.\frac{d}{dx}f(x,1)\right|_{x=0}=\left.\frac{d}{dx}(x+2)\right|_{x=0}=1$，$f'_y(0,1)=\left.\frac{d}{dy}f(0,y)\right|_{y=1}=\left.\frac{d}{dy}(2y)\right|_{y=1}=2.$
2. 几何意义：$f'_x(x_0,y_0)$ 表示曲线 $z=f(x,y_0)$ 在点 $(x_0,y_0,f(x_0,y_0))$ 处的切线对 $x$ 轴的斜率；$f'_y(x_0,y_0)$ 表示曲线 $z=f(x_0,y)$ 在点 $(x_0,y_0,f(x_0,y_0))$ 处的切线对 $y$ 轴的斜率。
3. 高阶偏导数
设 $z=f(x,y)$，则
$$\frac{\partial^2z}{\partial x^2}=f''_{xx}(x,y)=\frac{\partial}{\partial x}\left(\frac{\partial z}{\partial x}\right),\quad\frac{\partial^2z}{\partial x\partial y}=f''_{xy}(x,y)=\frac{\partial}{\partial y}\left(\frac{\partial z}{\partial x}\right),$$
$$\frac{\partial^2z}{\partial y\partial x}=f''_{yx}(x,y)=\frac{\partial}{\partial x}\left(\frac{\partial z}{\partial y}\right),\quad\frac{\partial^2z}{\partial y^2}=f''_{yy}(x,y)=\frac{\partial}{\partial y}\left(\frac{\partial z}{\partial y}\right).$$
定理 如果函数 $z=f(x,y)$ 的两个二阶混合偏导数 $f''_{xy}(x,y)$ 及 $f''_{yx}(x,y)$ 在区域 $D$ 内连续，则在区域 $D$ 内恒有 $f''_{xy}(x,y)=f''_{yx}(x,y).$
#### （四）全微分
1. 定义：若 $\Delta z=f(x_0+\Delta x,y_0+\Delta y)-f(x_0,y_0)=A\Delta x+B\Delta y+o(\rho)$，则称函数 $z=$` },
      { p: 145, md: R`$f(x,y)$ 在点 $(x_0,y_0)$ 可微，$A\Delta x+B\Delta y$ 称为函数 $z=f(x,y)$ 在点 $(x_0,y_0)$ 的全微分，记为 $dz=A\Delta x+B\Delta y.$
2. 可微性判定：① 必要条件：$f'_x(x_0,y_0)$ 与 $f'_y(x_0,y_0)$ 都存在；② 充分条件：$f'_x(x,y)$ 和 $f'_y(x,y)$ 在 $(x_0,y_0)$ 连续；③ 用定义判定：
a. $f'_x(x_0,y_0)$ 与 $f'_y(x_0,y_0)$ 是否都存在？
b. $\lim\limits_{\substack{\Delta x\to0\\\Delta y\to0}}\frac{[f(x_0+\Delta x,y_0+\Delta y)-f(x_0,y_0)]-[f'_x(x_0,y_0)\Delta x+f'_y(x_0,y_0)\Delta y]}{\sqrt{(\Delta x)^2+(\Delta y)^2}}$ 是否为零？
3. 计算：若 $f(x,y)$ 可微，则 $dz=\frac{\partial f}{\partial x}dx+\frac{\partial f}{\partial y}dy.$
#### （五）连续、可导、可微的关系
（关系图：一元函数——连续 $\leftrightarrow$ 可导，连续 $\to$ 可微，可导 $\to$ 可微；多元函数——连续 $\leftrightarrow$ 一阶偏导数存在，连续 $\to$ 可微，一阶偏导数存在 $\to$ 可微，一阶偏导数连续 $\to$ 可微，一阶偏导数连续 $\to$ 一阶偏导数存在）
### 二、常考题型的方法与技巧
#### 题型一 讨论连续性、可导性、可微性
【例1】设 $f(x,y)=\begin{cases}\dfrac{x^2y}{x^2+y^2},&(x,y)\neq(0,0)\\0,&(x,y)=(0,0)\end{cases}$ 则 $f(x,y)$ 在 $(0,0)$ 点
（A）不连续。 （B）连续但偏导数不存在。 （C）偏导数存在但不可微。 （D）可微。
【解】由于 $\lim\limits_{\substack{x\to0\\y\to0}}f(x,y)=\lim\limits_{\substack{x\to0\\y\to0}}\frac{x^2y}{x^2+y^2}=0=f(0,0)$，则 $f(x,y)$ 在 $(0,0)$ 连续，故（A）不正确。
由偏导数定义知 $f'_x(0,0)=\lim\limits_{\Delta x\to0}\frac{f(\Delta x,0)-f(0,0)}{\Delta x}=\lim\limits_{\Delta x\to0}\frac{0-0}{\Delta x}=0,$ $f'_y(0,0)=\lim\limits_{\Delta y\to0}\frac{f(0,\Delta y)-f(0,0)}{\Delta y}=\lim\limits_{\Delta y\to0}\frac{0-0}{\Delta y}=0,$ 但
$$\lim_{\substack{\Delta x\to0\\\Delta y\to0}}\frac{[f(\Delta x,\Delta y)-f(0,0)]-[f'_x(0,0)\Delta x+f'_y(0,0)\Delta y]}{\rho}=\lim_{\substack{\Delta x\to0\\\Delta y\to0}}\frac{\Delta y(\Delta x)^2}{[(\Delta x)^2+(\Delta y)^2]^{\frac{3}{2}}}$$
不存在，因为 $\lim\limits_{\substack{\Delta x\to0^+\\\Delta y=k\Delta x}}\frac{\Delta y(\Delta x)^2}{[(\Delta x)^2+(\Delta y)^2]^{\frac{3}{2}}}=\lim\limits_{\Delta x\to0^+}\frac{k(\Delta x)^3}{[(\Delta x)^2+k^2(\Delta x)^2]^{\frac{3}{2}}}=\frac{k}{(1+k^2)^{\frac{3}{2}}}$ 与 $k$ 有关。` },
      { p: 146, md: R`故 $f(x,y)$ 在 $(0,0)$ 点不可微，应选（C）。
【例2】考虑二元函数下面四条性质
① $f(x,y)$ 在点 $(x_0,y_0)$ 处连续。 ② $f(x,y)$ 在点 $(x_0,y_0)$ 处两个偏导数连续。 ③ $f(x,y)$ 在点 $(x_0,y_0)$ 处可微。 ④ $f(x,y)$ 在点 $(x_0,y_0)$ 处两个偏导数都存在。则
（A）③$\Rightarrow$①$\Rightarrow$④。 （B）③$\Rightarrow$②$\Rightarrow$①。 （C）③$\Rightarrow$④$\Rightarrow$①。 （D）②$\Rightarrow$③$\Rightarrow$①。
【解】选（D）。
【例3】二元函数 $f(x,y)$ 在点 $(0,0)$ 处可微的一个充分条件是
（A）$\lim\limits_{\substack{x\to0\\y\to0}}[f(x,y)-f(0,0)]=0$。
（B）$\lim\limits_{x\to0}\frac{f(x,0)-f(0,0)}{x}=0$，且 $\lim\limits_{y\to0}\frac{f(0,y)-f(0,0)}{y}=0$。
（C）$\lim\limits_{\substack{x\to0\\y\to0}}\frac{f(x,y)-f(0,0)}{\sqrt{x^2+y^2}}=0$。
（D）$\lim\limits_{x\to0}[f'_x(x,0)-f'_x(0,0)]=0$，且 $\lim\limits_{y\to0}[f'_y(0,y)-f'_y(0,0)]=0$。
【解1】排除法 因为连续和偏导数存在都不是可微的充分条件，则（A）、（B）都不正确；（D）也不正确，例如对函数 $f(x,y)=\begin{cases}0,&xy\neq0,\\1,&xy=0,\end{cases}$ $f(x,0)=1$，$f(0,y)=1$，则 $f'_x(x,0)=0$，$f'_y(0,y)=0$，从而 $\lim\limits_{x\to0}[f'_x(x,0)-f'_x(0,0)]=0,\lim\limits_{y\to0}[f'_y(0,y)-f'_y(0,0)]=0.$ 但 $f(x,y)$ 在 $(0,0)$ 点不可微，因为 $f(x,y)$ 在 $(0,0)$ 点不连续。故应选（C）。
【解2】直接法 由 $\lim\limits_{\substack{x\to0\\y\to0}}\frac{f(x,y)-f(0,0)}{\sqrt{x^2+y^2}}=0$ 知 $\lim\limits_{x\to0}\frac{f(x,0)-f(0,0)}{\sqrt{x^2}}=\lim\limits_{x\to0}\frac{f(x,0)-f(0,0)}{|x|}=0,$ 则 $f'_x(0,0)=\lim\limits_{x\to0}\frac{f(x,0)-f(0,0)}{x}=\lim\limits_{x\to0}\frac{f(x,0)-f(0,0)}{|x|}\cdot\frac{|x|}{x}=0$。同理 $f'_y(0,0)=0$。
$$\lim_{\substack{x\to0\\y\to0}}\frac{f(x,y)-f(0,0)-[f'_x(0,0)x+f'_y(0,0)y]}{\sqrt{x^2+y^2}}=\lim_{\substack{x\to0\\y\to0}}\frac{f(x,y)-f(0,0)}{\sqrt{x^2+y^2}}=0,$$
则 $f(x,y)$ 在 $(0,0)$ 点处可微，故应选（C）。
【解3】直接法 由 $\lim\limits_{\substack{x\to0\\y\to0}}\frac{f(x,y)-f(0,0)}{\sqrt{x^2+y^2}}=0$ 知 $\Delta z=f(x,y)-f(0,0)=o(\rho),$ 即 $\Delta z=f(x,y)-f(0,0)=Ax+By+o(\rho),$ 这里 $A=B=0$，由微分的定义知 $f(x,y)$ 在 $(0,0)$ 点可微。
【注】本题（D）选项中的 $\lim\limits_{x\to0}[f'_x(x,0)-f'_x(0,0)]=0$，即 $\lim\limits_{x\to0}f'_x(x,0)=f'_x(0,0)$。由此不能得出一阶偏导数 $f'_x(x,y)$ 在 $(0,0)$ 点连续，即得不出 $\lim\limits_{\substack{x\to0\\y\to0}}f'_x(x,y)=f'_x(0,0).$` },
      { p: 147, md: R`【例4】如果函数 $f(x,y)$ 在 $(0,0)$ 处连续，那么下列命题正确的是
（A）若极限 $\lim\limits_{\substack{x\to0\\y\to0}}\frac{f(x,y)}{|x|+|y|}$ 存在，则 $f(x,y)$ 在 $(0,0)$ 处可微。
（B）若极限 $\lim\limits_{\substack{x\to0\\y\to0}}\frac{f(x,y)}{x^2+y^2}$ 存在，则 $f(x,y)$ 在 $(0,0)$ 处可微。
（C）若 $f(x,y)$ 在 $(0,0)$ 处可微，则极限 $\lim\limits_{\substack{x\to0\\y\to0}}\frac{f(x,y)}{|x|+|y|}$ 存在。
（D）若 $f(x,y)$ 在 $(0,0)$ 处可微，则极限 $\lim\limits_{\substack{x\to0\\y\to0}}\frac{f(x,y)}{x^2+y^2}$ 存在。
【解1】直接法
由极限 $\lim\limits_{\substack{x\to0\\y\to0}}\frac{f(x,y)}{x^2+y^2}$ 存在及函数 $f(x,y)$ 在 $(0,0)$ 处连续得 $f(0,0)=0$，且
$$\lim_{\substack{x\to0\\y\to0}}\frac{f(x,y)-f(0,0)}{\sqrt{x^2+y^2}}=\lim_{\substack{x\to0\\y\to0}}\sqrt{x^2+y^2}\cdot\frac{f(x,y)}{x^2+y^2}=0,$$
即 $\Delta z=f(x,y)-f(0,0)=o(\rho)$ 则由微分定义知 $f(x,y)$ 在 $(0,0)$ 处可微，故应选（B）。
【解2】排除法
令 $f(x,y)=|x|+|y|$，显然 $f'_x(0,0)$ 及 $f'_y(0,0)$ 都不存在，则 $f(x,y)$ 在 $(0,0)$ 处不可微，（A）不正确。
令 $f(x,y)=1$，显然 $f(x,y)$ 在 $(0,0)$ 处可微，但（C）和（D）选项中的极限都不存在，则（C）和（D）都不正确，故应选（B）。
【例5】设连续函数 $z=f(x,y)$ 满足 $\lim\limits_{\substack{x\to0\\y\to1}}\frac{f(x,y)-2x+y-2}{\sqrt{x^2+(y-1)^2}}=0$，则 $dz\big|_{(0,1)}=$______。
【解】由 $\lim\limits_{\substack{x\to0\\y\to1}}\frac{f(x,y)-2x+y-2}{\sqrt{x^2+(y-1)^2}}=0$ 得 $f(0,1)=1$，且
$$\lim_{\substack{x\to0\\y\to1}}\frac{[f(x,y)-f(0,1)]-[2x-(y-1)]}{\sqrt{x^2+(y-1)^2}}=0,$$
即 $\Delta z=f(x,y)-f(0,1)=2x-(y-1)+o(\rho),$ 则 $dz\big|_{(0,1)}=2dx-dy.$ 【注】本题还有更简单的方法。
【例6】设 $f(x,y)=|x-y|\varphi(x,y)$，其中 $\varphi(x,y)$ 在点 $(0,0)$ 的邻域内连续，问
1）$\varphi(x,y)$ 应满足什么条件才能使 $f'_x(0,0)$ 和 $f'_y(0,0)$ 都存在；2）在上述条件下 $f(x,y)$ 在 $(0,0)$ 点是否可微。
【解】1）由于 $\lim\limits_{\Delta x\to0}\frac{f(\Delta x,0)-f(0,0)}{\Delta x}=\lim\limits_{\Delta x\to0}\frac{|\Delta x|\varphi(\Delta x,0)}{\Delta x}=\begin{cases}\varphi(0,0),&\text{当 }\Delta x\to0^+,\\-\varphi(0,0),&\text{当 }\Delta x\to0^-,\end{cases}$ 由此可知，当 $\varphi(0,0)=0$ 时，$f'_x(0,0)$ 和 $f'_y(0,0)$ 都存在，且为零。` }
    ],
    quiz: [
      { q: R`重极限 $\lim\limits_{(x,y)\to(x_0,y_0)}f(x,y)$ 存在的含义是`, options: [R`点以任意方式趋近时 $f$ 都趋近同一常数`, R`沿直线趋近时极限存在`, R`沿坐标轴趋近时极限存在`, R`$f$ 在该点连续`], answer: 0, explain: R`要求任意路径极限相同。` },
      { q: R`证明重极限不存在常用的方法是`, options: [R`沿两种不同路径极限不同`, R`用夹逼原理`, R`用洛必达法则`, R`用等价无穷小`], answer: 0, explain: R`取过该点的不同直线/曲线路径。` },
      { q: R`$f'_x(x_0,y_0)$ 等于一元函数在 $x_0$ 处的导数，该一元函数是`, options: [R`$f(x,y_0)$`, R`$f(x_0,y)$`, R`$f(x,x)$`, R`$f(x,0)$`], answer: 0, explain: R`$f'_x$ 固定 $y=y_0$ 对 $x$ 求导。` },
      { q: R`二元函数可微的充分条件是`, options: [R`两个偏导数连续`, R`函数连续`, R`两个偏导数存在`, R`沿坐标轴偏导数存在`], answer: 0, explain: R`偏导数连续 $\Rightarrow$ 可微。` },
      { q: R`多元函数中，可微与连续、偏导数存在的关系是`, options: [R`可微 $\Rightarrow$ 连续且偏导数存在`, R`连续 $\Rightarrow$ 可微`, R`偏导数存在 $\Rightarrow$ 可微`, R`三者等价`], answer: 0, explain: R`可微是较强的条件。` },
      { q: R`若 $f''_{xy}(x,y)$ 与 $f''_{yx}(x,y)$ 在区域 $D$ 内连续，则`, options: [R`$f''_{xy}=f''_{yx}$`, R`$f''_{xy}=-f''_{yx}$`, R`二者无关`, R`$f''_{xy}+f''_{yx}=0$`], answer: 0, explain: R`混合偏导数相等的定理。` },
      { q: R`$z=f(x,y)$ 可微时，$dz=$`, options: [R`$\frac{\partial f}{\partial x}dx+\frac{\partial f}{\partial y}dy$`, R`$\frac{\partial f}{\partial x}dy+\frac{\partial f}{\partial y}dx$`, R`$f_x+f_y$`, R`$\frac{df}{dx}+\frac{df}{dy}$`], answer: 0, explain: R`全微分公式。` },
      { q: R`$f(x,y)=|x|+|y|$ 在 $(0,0)$ 处`, options: [R`连续但偏导数不存在`, R`偏导数存在但不可微`, R`可微`, R`不连续`], answer: 0, explain: R`$|x|+|y|$ 连续，但 $f'_x(0,0)$ 不存在。` },
      { q: R`$f(x,y)=\begin{cases}\frac{x^2y}{x^2+y^2},&(x,y)\neq(0,0)\\0,&(x,y)=(0,0)\end{cases}$ 在 $(0,0)$ 处`, options: [R`偏导数存在但不可微`, R`可微`, R`不连续`, R`偏导数不存在`], answer: 0, explain: R`$f'_x=f'_y=0$ 但不可微。` },
      { q: R`有界闭区域上连续函数的性质不包括`, options: [R`可微性`, R`有界性`, R`最值性`, R`介值性`], answer: 0, explain: R`连续不保证可微。` }
    ]
  };
})();
