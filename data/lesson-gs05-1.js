window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["gs05_s0"] = {
    id: "gs05_s0",
    ch: "第五章 多元函数微分学",
    title: "第一节 重极限、连续、偏导数、全微分",
    book: "武忠祥《高等数学辅导讲义》",
    pages: [142, 147],
    img: "assets/img/gaoshu",
    content: [
      { p: 142, md: R`### 一、考试内容要点精讲
#### （一）重极限
**定义** 设 $f(x,y)$ 在区域 $D$ 上有定义，$P_0(x_0,y_0)$ 为 $D$ 的聚点。若 $\forall\varepsilon>0$，$\exists\delta>0$，当 $P(x,y)\in D$ 且 $0<\sqrt{(x-x_0)^2+(y-y_0)^2}<\delta$ 时，$|f(x,y)-A|<\varepsilon$，则称 $A$ 为 $f(x,y)$ 当 $(x,y)\to(x_0,y_0)$ 时的极限，记为 $\lim\limits_{(x,y)\to(x_0,y_0)}f(x,y)=A$。

【注】1) 要求点 $(x,y)$ 以任意方式趋近于 $(x_0,y_0)$ 时 $f$ 都趋近于同一常数 $A$，否则极限不存在。2) 一元函数极限的性质（局部有界性、保号性、有理运算、极限与无穷小关系、夹逼性）对多元函数仍成立。

【例1】求下列极限：1) $\lim\limits_{(x,y)\to(0,0)}\dfrac{x^2y}{x^2+y^2}$；2) $\lim\limits_{(x,y)\to(0,0)}\dfrac{x^2+y^2}{|x|+|y|}$；3) $\lim\limits_{(x,y)\to(0,0)}\dfrac{xy^2\sin(xy)}{x^2+y^4}$。

【解】1) $0\leqslant\left|\dfrac{x^2y}{x^2+y^2}\right|\leqslant|y|$，由夹逼原理得 $0$。
2) $0\leqslant\dfrac{x^2+y^2}{|x|+|y|}\leqslant|x|+|y|$，由夹逼原理得 $0$。
3) 因 $\left|\dfrac{xy^2}{x^2+y^4}\right|\leqslant\dfrac12$ 有界，$\sin(xy)\to0$，故原式 $=0$。` },
      { p: 143, md: R`（例1方法2）$0\leqslant\left|\dfrac{xy^2\sin xy}{x^2+y^4}\right|\leqslant\dfrac12|\sin xy|\to0$，由夹逼原理得 $0$。

【注】求重极限常用方法：1. 利用极限性质（四则运算、夹逼）；2. 消去分母中极限为零的因子（有理化、等价无穷小代换）；3. 利用无穷小量与有界变量之积为无穷小。

【例2】证明下列重极限不存在：1) $\lim\limits_{(x,y)\to(0,0)}\dfrac{xy}{x^2+y^2}$；2) $\lim\limits_{(x,y)\to(0,0)}\dfrac{xy^2}{x^2+y^4}$。

【证】1) 取直线 $y=kx$，$\lim\limits_{y=kx,x\to0}\dfrac{xy}{x^2+y^2}=\dfrac{k}{1+k^2}$，与 $k$ 有关，故极限不存在。
2) 沿 $y=kx$ 及 $y$ 轴极限均为 $0$，但沿抛物线 $x=y^2$ 时 $\lim\limits_{y\to0}\dfrac{y^4}{y^4+y^4}=\dfrac12$，故极限不存在。

【注】证明重极限不存在常用方法：沿两种不同路径极限不同（通常取过 $(x_0,y_0)$ 的直线）。

#### （二）连续
1) 定义：若 $\lim\limits_{(x,y)\to(x_0,y_0)}f(x,y)=f(x_0,y_0)$，则称 $f$ 在 $(x_0,y_0)$ 处连续。
2) 性质：① 和差积商（分母不为零）及复合仍连续；② 基本初等函数在其定义域内连续，初等函数在其定义区域内连续；` },
      { p: 144, md: R`③ 有界闭区域上连续函数的性质：a. 有界性；b. 最值性；c. 介值性。

【例3】判断 $f(x,y)=\begin{cases}\dfrac{xy}{\sqrt{x^2+y^2}},&(x,y)\neq(0,0)\\a,&(x,y)=(0,0)\end{cases}$ 的连续性。

【解】因 $0\leqslant\left|\dfrac{xy}{\sqrt{x^2+y^2}}\right|\leqslant|y|$，故 $\lim\limits_{(x,y)\to(0,0)}\dfrac{xy}{\sqrt{x^2+y^2}}=0$。若 $a=0$ 则处处连续；若 $a\neq0$ 则除 $(0,0)$ 外处处连续。

#### （三）偏导数
1. 定义：$f'_x(x_0,y_0)=\lim\limits_{\Delta x\to0}\dfrac{f(x_0+\Delta x,y_0)-f(x_0,y_0)}{\Delta x}$，$f'_y$ 类似。
【注】$f'_x(x_0,y_0)$ 即一元函数 $f(x,y_0)$ 在 $x_0$ 处的导数。

【例4】设 $f(x,y)=x+2y+(y-1)\arcsin\dfrac{x}{1+xy}$，求 $f'_x(0,1),f'_y(0,1)$。
【解】$f'_x(0,1)=\dfrac{d}{dx}f(x,1)\big|_{x=0}=1$，$f'_y(0,1)=\dfrac{d}{dy}f(0,y)\big|_{y=1}=2$。

2. 几何意义：$f'_x(x_0,y_0)$ 表示曲线 $z=f(x,y_0)$ 在该点切线对 $x$ 轴的斜率；$f'_y$ 类似。
3. 高阶偏导数：$\dfrac{\partial^2z}{\partial x^2}=f''_{xx}$，$\dfrac{\partial^2z}{\partial x\partial y}=f''_{xy}$，$\dfrac{\partial^2z}{\partial y\partial x}=f''_{yx}$，$\dfrac{\partial^2z}{\partial y^2}=f''_{yy}$。
**定理** 若 $f''_{xy},f''_{yx}$ 在区域 $D$ 内连续，则 $f''_{xy}=f''_{yx}$。

#### （四）全微分
1. 定义：若 $\Delta z=A\Delta x+B\Delta y+o(\rho)$，则称 $z=$` },
      { p: 145, md: R`$f(x,y)$ 在点 $(x_0,y_0)$ 可微，$A\Delta x+B\Delta y$ 称为全微分，$dz=A\Delta x+B\Delta y$。
2. 可微性判定：① 必要条件：$f'_x,f'_y$ 都存在；② 充分条件：$f'_x,f'_y$ 在 $(x_0,y_0)$ 连续；③ 用定义判定：a. $f'_x,f'_y$ 是否都存在？b. $\lim\limits_{\substack{\Delta x\to0\\\Delta y\to0}}\dfrac{[f(x_0+\Delta x,y_0+\Delta y)-f(x_0,y_0)]-[f'_x\Delta x+f'_y\Delta y]}{\sqrt{(\Delta x)^2+(\Delta y)^2}}$ 是否为零？
3. 计算：若可微，$dz=\dfrac{\partial f}{\partial x}dx+\dfrac{\partial f}{\partial y}dy$。

#### （五）连续、可导、可微的关系
一元函数：可导 $\Leftrightarrow$ 可微 $\Rightarrow$ 连续；可导 $\Rightarrow$ 连续。
多元函数：可微 $\Rightarrow$ 连续、可微 $\Rightarrow$ 一阶偏导数存在；一阶偏导数连续 $\Rightarrow$ 可微；连续与偏导数存在之间无必然联系。

### 二、常考题型的方法与技巧
### 题型一　讨论连续性、可导性、可微性
【例1】设 $f(x,y)=\begin{cases}\dfrac{x^2y}{x^2+y^2},&(x,y)\neq(0,0)\\0,&(x,y)=(0,0)\end{cases}$，则 $f$ 在 $(0,0)$ 点 (A) 不连续 (B) 连续但偏导数不存在 (C) 偏导数存在但不可微 (D) 可微

【解】$\lim\limits_{(x,y)\to(0,0)}f=0=f(0,0)$，连续，(A) 错；$f'_x(0,0)=f'_y(0,0)=0$；但 $\lim\limits_{\substack{\Delta x\to0\\\Delta y\to0}}\dfrac{\Delta y(\Delta x)^2}{[(\Delta x)^2+(\Delta y)^2]^{3/2}}$ 不存在（沿 $\Delta y=k\Delta x$ 为 $\dfrac{k}{(1+k^2)^{3/2}}$）。故不可微，选 (C)。` },
      { p: 146, md: R`【例2】考虑二元函数四条性质：① 连续；② 两个偏导数连续；③ 可微；④ 两个偏导数都存在。则 (A) ③⇒①⇒④ (B) ③⇒②⇒① (C) ③⇒④⇒① (D) ②⇒③⇒①

【解】选 (D)。

【例3】二元函数 $f(x,y)$ 在 $(0,0)$ 处可微的一个充分条件是 (A) $\lim\limits_{(x,y)\to(0,0)}[f(x,y)-f(0,0)]=0$ (B) $\lim\limits_{x\to0}\dfrac{f(x,0)-f(0,0)}{x}=0$ 且 $\lim\limits_{y\to0}\dfrac{f(0,y)-f(0,0)}{y}=0$ (C) $\lim\limits_{(x,y)\to(0,0)}\dfrac{f(x,y)-f(0,0)}{\sqrt{x^2+y^2}}=0$ (D) $\lim\limits_{x\to0}[f'_x(x,0)-f'_x(0,0)]=0$ 且 $\lim\limits_{y\to0}[f'_y(0,y)-f'_y(0,0)]=0$

【解】连续、偏导数存在均非可微充分条件，(A)(B) 错；(D) 反例 $f=\begin{cases}0,&xy\neq0\\1,&xy=0\end{cases}$，$f'_x(x,0)=f'_y(0,y)=0$ 满足 (D) 但 $f$ 在 $(0,0)$ 不连续、不可微。(C) 由 $\lim\dfrac{f(x,y)-f(0,0)}{\sqrt{x^2+y^2}}=0$ 得 $f'_x(0,0)=f'_y(0,0)=0$ 且 $\Delta z=o(\rho)$，故可微。选 (C)。` },
      { p: 147, md: R`【例4】如果函数 $f(x,y)$ 在 $(0,0)$ 处连续，那么下列命题正确的是 (A) 若 $\lim\dfrac{f(x,y)}{|x|+|y|}$ 存在，则 $f$ 在 $(0,0)$ 可微 (B) 若 $\lim\dfrac{f(x,y)}{x^2+y^2}$ 存在，则 $f$ 在 $(0,0)$ 可微 (C) 若 $f$ 在 $(0,0)$ 可微，则 $\lim\dfrac{f(x,y)}{|x|+|y|}$ 存在 (D) 若 $f$ 在 $(0,0)$ 可微，则 $\lim\dfrac{f(x,y)}{x^2+y^2}$ 存在

【解1】由 $\lim\dfrac{f(x,y)}{x^2+y^2}$ 存在及 $f$ 在 $(0,0)$ 连续得 $f(0,0)=0$，且 $\lim\dfrac{f(x,y)-f(0,0)}{\sqrt{x^2+y^2}}=\lim\sqrt{x^2+y^2}\cdot\dfrac{f(x,y)}{x^2+y^2}=0$，即 $\Delta z=o(\rho)$，可微。选 (B)。
【解2】令 $f=|x|+|y|$，(A) 错；令 $f=1$，$f$ 可微但 (C)(D) 的极限不存在。选 (B)。

【例5】设连续函数 $z=f(x,y)$ 满足 $\lim\limits_{\substack{x\to0\\y\to1}}\dfrac{f(x,y)-2x+y-2}{\sqrt{x^2+(y-1)^2}}=0$，则 $dz|_{(0,1)}=$______。

【解】由极限式得 $f(0,1)=1$，且 $[f(x,y)-f(0,1)]-[2x-(y-1)]=o(\rho)$，故 $dz|_{(0,1)}=2dx-dy$。

【例6】设 $f(x,y)=|x-y|\varphi(x,y)$，$\varphi$ 在 $(0,0)$ 邻域内连续。1) $\varphi$ 满足什么条件时 $f'_x(0,0),f'_y(0,0)$ 都存在；2) 在上述条件下 $f$ 在 $(0,0)$ 是否可微。

【解】1) $\lim\limits_{\Delta x\to0}\dfrac{|\Delta x|\varphi(\Delta x,0)}{\Delta x}=\begin{cases}\varphi(0,0),&\Delta x\to0^+\\-\varphi(0,0),&\Delta x\to0^-\end{cases}$，故当 $\varphi(0,0)=0$ 时 $f'_x(0,0)=f'_y(0,0)=0$。` }
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
