window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["gs05_s2"].problems = [
    { n: 1, q: R`已知 $f(x,y)=\mathrm{e}^{\sqrt{x^2+y^4}}$，则（  ）
(A) $f'_x(0,0),f'_y(0,0)$ 都存在。 (B) $f'_x(0,0)$ 不存在，$f'_y(0,0)$ 存在。
(C) $f'_x(0,0)$ 存在，$f'_y(0,0)$ 不存在。 (D) $f'_x(0,0),f'_y(0,0)$ 都不存在。`, a: R`(B)`, sol: R`【思路】偏导数本质是一元函数求导，分界点处用「先代后求」：固定一个变量，把另一个变量代入，再对留下的变量求导。
【详解】求 $f'_x(0,0)$：令 $y=0$，得 $f(x,0)=\mathrm{e}^{\sqrt{x^2}}=\mathrm{e}^{|x|}$。它在 $x=0$ 处左导数为 $\lim\limits_{x\to0^-}\frac{\mathrm{e}^{-x}-1}{x}=-1$，右导数为 $\lim\limits_{x\to0^+}\frac{\mathrm{e}^{x}-1}{x}=1$，不相等，故 $f'_x(0,0)$ 不存在。
求 $f'_y(0,0)$：令 $x=0$，得 $f(0,y)=\mathrm{e}^{\sqrt{y^4}}=\mathrm{e}^{y^2}$，光滑函数，$f'_y(0,y)=2y\mathrm{e}^{y^2}$，取 $y=0$ 得 $f'_y(0,0)=0$，存在。故选 (B)。
【易错点】含根号 $\sqrt{x^2}$、绝对值、$\sqrt{y^4}$ 的点，不能直接套链式法则再代点；必须用「先代后求」或定义。$y^4$ 使 $f(0,y)=\mathrm{e}^{y^2}$ 无绝对值，这是本题关键。` },
    { n: 2, q: R`设函数 $z=f(x,y)$ 在点 $(x_0,y_0)$ 处有 $f'_x(x_0,y_0)=a$，$f'_y(x_0,y_0)=b$，则下列结论正确的是（  ）
(A) $\lim\limits_{\substack{x\to x_0\\y\to y_0}}f(x,y)$ 存在，但 $f(x,y)$ 在 $(x_0,y_0)$ 处不一定连续。
(B) $f(x,y)$ 在 $(x_0,y_0)$ 处连续。
(C) $\mathrm{d}z|_{(x_0,y_0)}=a\mathrm{d}x+b\mathrm{d}y$。
(D) $\lim\limits_{x\to x_0}f(x,y_0)$ 及 $\lim\limits_{y\to y_0}f(x_0,y)$ 都存在且相等。`, a: R`(D)`, sol: R`【思路】偏导数只描述沿两条坐标轴方向的变化，逐一甄别每个选项的强弱。
【详解】$f'_x(x_0,y_0)=a$ 表示一元函数 $f(x,y_0)$ 在 $x_0$ 可导，故连续，即 $\lim\limits_{x\to x_0}f(x,y_0)=f(x_0,y_0)$；同理 $\lim\limits_{y\to y_0}f(x_0,y)=f(x_0,y_0)$。两者都等于 $f(x_0,y_0)$，故相等，(D) 对。
(A) 错：偏导存在推不出重极限存在，更推不出连续；(B) 错：反例 $f(x,y)=\frac{xy}{x^2+y^2}((0,0)\text{处补}0)$，偏导存在但不连续；(C) 错：偏导存在推不出可微，不能写成全微分。
【易错点】「偏导存在」只保证两条坐标轴方向，切勿与「连续」「可微」混淆。` },
    { n: 3, q: R`设 $f(x,y)=\begin{cases}\dfrac{xy}{\sqrt{x^2+y^2}},&(x,y)\neq(0,0),\\0,&(x,y)=(0,0).\end{cases}$ 则 $f(x,y)$ 在 $(0,0)$ 处（  ）
(A) 两个偏导数不存在。 (B) 两个偏导数存在但不可微。
(C) 偏导数连续。 (D) 可微但偏导数不连续。`, a: R`(B)`, sol: R`【思路】先按定义求偏导，再按可微定义检验 $\Delta z=o(\rho)$。
【详解】$f'_x(0,0)=\lim\limits_{\Delta x\to0}\frac{f(\Delta x,0)-f(0,0)}{\Delta x}=\lim\limits_{\Delta x\to0}\frac{0-0}{\Delta x}=0$，同理 $f'_y(0,0)=0$，故偏导存在。
检验可微：$\Delta z=f(\Delta x,\Delta y)-0=\frac{\Delta x\Delta y}{\sqrt{(\Delta x)^2+(\Delta y)^2}}$，于是
$$\frac{\Delta z-f'_x(0,0)\Delta x-f'_y(0,0)\Delta y}{\rho}=\frac{\Delta x\Delta y}{(\Delta x)^2+(\Delta y)^2}.$$
沿路径 $\Delta y=\Delta x$ 趋于 $0$，该式趋于 $\frac12\neq0$，故不可微。选 (B)。
【易错点】$\frac{\Delta x\Delta y}{\rho^2}$ 是判定不可微的经典反例，沿不同直线极限不同。` },
    { n: 4, q: R`设 $f(x,y)=\begin{cases}(x^2+y^2)\sin\dfrac{1}{x^2+y^2},&(x,y)\neq(0,0),\\0,&(x,y)=(0,0).\end{cases}$ 则 $f(x,y)$ 在 $(0,0)$ 处（  ）
(A) 两个偏导数不存在。 (B) 两个偏导数存在但不可微。
(C) 偏导数连续。 (D) 可微但偏导数不连续。`, a: R`(D)`, sol: R`【思路】与第 3 题同套路：先偏导、再可微、最后看偏导是否连续。
【详解】$f'_x(0,0)=\lim\limits_{\Delta x\to0}\frac{(\Delta x)^2\sin\frac{1}{(\Delta x)^2}}{\Delta x}=\lim\limits_{\Delta x\to0}\Delta x\sin\frac{1}{(\Delta x)^2}=0$（无穷小×有界），同理 $f'_y(0,0)=0$。
可微：$\frac{\Delta z}{\rho}=\rho\sin\frac{1}{\rho^2}\to0$（无穷小×有界），故可微。
偏导连续性：当 $(x,y)\neq(0,0)$ 时 $f'_x=2x\sin\frac{1}{x^2+y^2}-\frac{2x}{x^2+y^2}\cos\frac{1}{x^2+y^2}$。沿 $y=0$、$x\to0$，第二项 $\frac{2}{x}\cos\frac{1}{x^2}$ 振荡无极限，故 $f'_x$ 在 $(0,0)$ 不连续。选 (D)。
【易错点】「可微」与「偏导连续」是两回事，可微只要求 $\Delta z=o(\rho)$。` },
    { n: 5, q: R`设函数 $f(x,y)$ 可微，且对任意 $x,y$ 都有 $\dfrac{\partial f(x,y)}{\partial x}>0$，$\dfrac{\partial f(x,y)}{\partial y}<0$，则使不等式 $f(x_1,y_1)<f(x_2,y_2)$ 成立的一个充分条件是（  ）
(A) $x_1>x_2,y_1<y_2$。 (B) $x_1>x_2,y_1>y_2$。
(C) $x_1<x_2,y_1<y_2$。 (D) $x_1<x_2,y_1>y_2$。`, a: R`(D)`, sol: R`【思路】把二元比较拆成两步一元比较：先动 $x$ 到目标值，再动 $y$。
【详解】由 $f'_x>0$ 知 $f$ 关于 $x$ 单调增；由 $f'_y<0$ 知 $f$ 关于 $y$ 单调减。
若 $x_1<x_2$ 且 $y_1>y_2$，则
$$f(x_1,y_1)<f(x_2,y_1)<f(x_2,y_2),$$
第一个不等号来自 $x_1<x_2$（关于 $x$ 增），第二个来自 $y_1>y_2$（关于 $y$ 减）。故选 (D)。
【易错点】$f'_y<0$ 表示 $y$ 越大函数值越小，别把方向弄反；只有 (D) 两个方向都朝「变大」走。` },
    { n: 6, q: R`设可微函数 $f(x,y)$ 满足 $\dfrac{\partial f}{\partial x}>1$，$\dfrac{\partial f}{\partial y}<-1$，$f(0,0)=0$，则下列结论正确的是（  ）
(A) $f(1,1)>1$。 (B) $f(-1,1)>-2$。
(C) $f(-1,-1)<0$。 (D) $f(1,-1)>2$。`, a: R`(D)`, sol: R`【思路】沿坐标方向用一元增量不等式 $f(b)-f(a)=\int_a^b f'$，把偏导的下界翻译成函数值的下界。
【详解】先沿 $x$ 方向从 $0$ 到 $1$：$f(1,0)-f(0,0)=\int_0^1 f_x(t,0)\,\mathrm{d}t>1$，故 $f(1,0)>1$。
再沿 $y$ 方向从 $0$ 到 $-1$：$f(1,-1)-f(1,0)=\int_0^{-1}f_y(1,t)\,\mathrm{d}t=\int_{-1}^0(-f_y(1,t))\,\mathrm{d}t>1$（因 $-f_y>1$），故 $f(1,-1)>f(1,0)+1>2$。选 (D)。
【易错点】$f_y<-1$ 表示 $y$ 减小时 $f$ 增大，且增速超过 $1$；只有 (D) 能凑出严格大于 $2$。` },
    { n: 7, q: R`设函数 $f(x,y)$ 满足 $\dfrac{\partial f}{\partial x}<0$，$\dfrac{\partial f}{\partial y}>1$，则下列结论正确的是（  ）
(A) $f(0,0)<f(1,0)$。 (B) $f(x,2)<f(x,1)$。
(C) $f(-1,1)>f(0,0)+1$。 (D) $f(1,-1)>f(0,0)+1$。`, a: R`(C)`, sol: R`【思路】同第 6 题，沿 $x$、$y$ 两个方向分别用单调性/增量估计。
【详解】(C)：$f'_x<0$ 表示 $x$ 减小时 $f$ 增大，故 $f(-1,1)>f(0,1)$；$f'_y>1$ 表示 $y$ 增大时 $f$ 增大且增速超过 $1$，故 $f(0,1)>f(0,0)+1$。两式合并得 $f(-1,1)>f(0,0)+1$，正确。
(A) 错：$f'_x<0$ 应得 $f(0,0)>f(1,0)$；(B) 错：$f'_y>0$ 应得 $f(x,2)>f(x,1)$；(D) 中 $y$ 从 $0$ 到 $-1$ 使 $f$ 减小，方向错。
【易错点】先判断每个偏导对应的单调方向，再核对选项里自变量变化方向是否一致。` },
    { n: 8, q: R`设函数 $f(x,y)$ 在点 $(0,0)$ 的某邻域内有定义，且 $\lim\limits_{(x,y)\to(0,0)}\dfrac{f(x,y)-(x^2+y^2)}{\sqrt{x^2+y^2}}=1$，则 $f(x,y)$ 在点 $(0,0)$ 处（  ）
(A) 连续。 (B) 两个偏导数都不存在。
(C) 两个偏导数存在但不可微。 (D) 可微。`, a: R`(B)`, sol: R`【思路】把极限条件翻译成 $f$ 的渐近式，再回到偏导数定义。
【详解】由条件得 $f(x,y)=x^2+y^2+\alpha\rho$，其中 $\rho=\sqrt{x^2+y^2}$，$\alpha\to1$。特别地 $f(0,0)=0$。
$$f'_x(0,0)=\lim_{\Delta x\to0}\frac{f(\Delta x,0)}{\Delta x}=\lim_{\Delta x\to0}\frac{(\Delta x)^2+\alpha|\Delta x|}{\Delta x}.$$
当 $\Delta x\to0^+$ 时 $\to1$，$\Delta x\to0^-$ 时 $\to-1$，不相等，故 $f'_x(0,0)$ 不存在；同理 $f'_y(0,0)$ 不存在。选 (B)。
【易错点】$O(\rho)$ 项里含 $|\Delta x|$，正是它破坏偏导数存在性；别被 $x^2+y^2$ 光滑的样子迷惑。` },
    { n: 9, q: R`已知 $f(x,y)$ 在 $(0,0)$ 点连续，且 $\lim\limits_{(x,y)\to(0,0)}\dfrac{f(x,y)+2x-y+x^2+y^2}{\sqrt{x^2+y^2}}=0$，则下列结论不正确的是（  ）
(A) $f(x,y)$ 在 $(0,0)$ 点可微。 (B) $f'_x(0,0)=-2$。
(C) $f'_y(0,0)=1$。 (D) $f'_x(0,0)$ 和 $f'_y(0,0)$ 都不一定存在。`, a: R`(D)`, sol: R`【思路】极限为 $0$ 意味着高次项是比 $\rho$ 高阶的无穷小，直接读出全微分。
【详解】由连续性 $f(0,0)=\lim f$；把条件改写为
$$f(x,y)=f(0,0)-2x+y+o(\rho).$$
这正是 $f$ 在 $(0,0)$ 可微的定义（线性主部 $-2x+y$），故 (A) 对，且 $f'_x(0,0)=-2$、(B) 对，$f'_y(0,0)=1$、(C) 对。(D) 说偏导不一定存在，与 (A)(B)(C) 矛盾，不正确。选 (D)。
【易错点】注意题目问「不正确」的选项；极限为 $0$ 比第 8 题的极限为 $1$ 更强，直接给出可微。` },
    { n: 10, q: R`设满足 $\dfrac{\partial^2 z}{\partial y^2}=2$，且 $f(x,0)=1$，$f'_y(x,0)=x$ 则 $f(x,y)$ 等于（  ）
(A) $1-xy+y^2$。 (B) $1+xy+y^2$。
(C) $1-x^2y+y^2$。 (D) $1+x^2y+y^2$。`, a: R`(B)`, sol: R`【思路】对 $y$ 逐次积分，每积分一次就出现一个「关于另一变量的任意函数」。
【详解】由 $f''_{yy}=2$ 得 $f'_y=2y+\varphi(x)$。由 $f'_y(x,0)=x$ 得 $\varphi(x)=x$，故 $f'_y=2y+x$。
再对 $y$ 积分：$f(x,y)=y^2+xy+\psi(x)$。由 $f(x,0)=1$ 得 $\psi(x)=1$。故 $f(x,y)=1+xy+y^2$。选 (B)。
【易错点】积分「常数」是另一变量的函数，要两次用条件把它确定下来。` },
    { n: 11, q: R`已知函数 $f(x,y)$ 在点 $(0,0)$ 某邻域内连续，且 $\lim\limits_{\substack{x\to0\\y\to0}}\dfrac{f(x,y)-(x^2+y^2)}{\sqrt{x^2+y^2}}=\alpha>0$，则（  ）
(A) 点 $(0,0)$ 是 $f(x,y)$ 的驻点但不是极值点。
(B) 点 $(0,0)$ 是 $f(x,y)$ 的极大值点但不是驻点。
(C) 点 $(0,0)$ 是 $f(x,y)$ 的极小值点但不是驻点。
(D) 根据所给条件无法判断点 $(0,0)$ 是否为 $f(x,y)$ 的极值点。`, a: R`(C)`, sol: R`【思路】由极限的符号判断 $f-f(0,0)$ 在原点附近的符号；再看偏导是否存在。
【详解】由连续性 $f(0,0)=\lim f=0$。条件给出
$$f(x,y)-(x^2+y^2)=\alpha\rho+o(\rho),\quad \alpha>0.$$
当 $\rho$ 充分小时，$f(x,y)-(x^2+y^2)>0$，而 $x^2+y^2>0$，故 $f(x,y)>0=f(0,0)$，即 $(0,0)$ 是极小值点。
再看偏导：$f'_x(0,0)=\lim\limits_{\Delta x\to0}\frac{f(\Delta x,0)}{\Delta x}=\lim\limits_{\Delta x\to0}\frac{(\Delta x)^2+\alpha|\Delta x|+o(|\Delta x|)}{\Delta x}$，左右极限不等，不存在，故 $(0,0)$ 不是驻点。选 (C)。
【易错点】极值点不一定是驻点；偏导不存在的点也可能取极值（对照 $\sqrt{x^2+y^2}$）。` },
    { n: 12, q: R`设函数 $z=f(x,y)$ 的全微分为 $\mathrm{d}z=x\mathrm{d}x+y\mathrm{d}y$，则点 $(0,0)$（  ）
(A) 不是 $f(x,y)$ 的连续点。 (B) 不是 $f(x,y)$ 的极值点。
(C) 是 $f(x,y)$ 的极大值点。 (D) 是 $f(x,y)$ 的极小值点。`, a: R`(D)`, sol: R`【思路】全微分系数就是两个一阶偏导，直接读出后用二阶判别法。
【详解】由 $\mathrm{d}z=x\mathrm{d}x+y\mathrm{d}y$ 得 $f'_x=x$，$f'_y=y$，故 $(0,0)$ 是驻点。且 $A=f''_{xx}=1$，$B=f''_{xy}=0$，$C=f''_{yy}=1$，$AC-B^2=1>0$，又 $A>0$，故为极小值点。选 (D)。
【易错点】可微时 $\mathrm{d}z=f'_x\mathrm{d}x+f'_y\mathrm{d}y$，对照系数即可得偏导。` },
    { n: 13, q: R`设函数 $f(x)$ 具有二阶连续导数，且 $f(x)>0$，$f'(0)=0$，则函数 $z=f(x)\ln f(y)$ 在点 $(0,0)$ 处取得极小值的一个充分条件是（  ）
(A) $f(0)>1,f''(0)>0$。 (B) $f(0)>1,f''(0)<0$。
(C) $f(0)<1,f''(0)>0$。 (D) $f(0)<1,f''(0)<0$。`, a: R`(A)`, sol: R`【思路】老老实实算 $A,B,C$，把「极小值」翻译成 $AC-B^2>0$ 且 $A>0$。
【详解】$z_x=f'(x)\ln f(y)$，$z_y=f(x)\dfrac{f'(y)}{f(y)}$。由 $f'(0)=0$ 知 $z_x(0,0)=z_y(0,0)=0$，$(0,0)$ 为驻点。
$$z_{xx}=f''(x)\ln f(y)\big|_{(0,0)}=f''(0)\ln f(0),\quad z_{xy}=f'(x)\frac{f'(y)}{f(y)}\Big|_{(0,0)}=0,$$
$$z_{yy}=f(x)\frac{f''(y)f(y)-[f'(y)]^2}{f^2(y)}\Big|_{(0,0)}=f''(0).$$
于是 $A=f''(0)\ln f(0)$，$B=0$，$C=f''(0)$。要极小，需 $A>0$ 且 $AC>0$：取 $f''(0)>0$ 且 $\ln f(0)>0$，即 $f(0)>1$，此时 $A>0,C>0$。选 (A)。
【易错点】$\ln f(0)>0\iff f(0)>1$；$B=0$ 使条件简化为 $A>0,C>0$。` },
    { n: 14, q: R`设函数 $f(x),g(x)$ 均有二阶连续导数，满足 $f(0)>0$，$g(0)<0$，且 $f'(0)=g'(0)=0$，则函数 $z=f(x)g(y)$ 在点 $(0,0)$ 处取得极小值的一个充分条件是（  ）
(A) $f''(0)<0,g''(0)>0$。 (B) $f''(0)<0,g''(0)<0$。
(C) $f''(0)>0,g''(0)>0$。 (D) $f''(0)>0,g''(0)<0$。`, a: R`(A)`, sol: R`【思路】同第 13 题，注意 $g(0)<0$ 会让符号反号。
【详解】$z_{xx}=f''(x)g(y)\big|_{(0,0)}=f''(0)g(0)$，$z_{yy}=f(0)g''(0)$，$z_{xy}=f'(x)g'(y)\big|_{(0,0)}=0$。
极小需 $A=z_{xx}>0$：由 $g(0)<0$ 知需 $f''(0)<0$。又需 $C=z_{yy}>0$：由 $f(0)>0$ 知需 $g''(0)>0$。故选 (A)。
【易错点】$g(0)<0$ 使 $A$ 的符号与 $f''(0)$ 相反，是本题的陷阱。` },
    { n: 15, q: R`设 $F(x,y)$ 具有二阶连续偏导数，且 $F(x_0,y_0)=0$，$F'_x(x_0,y_0)=0$，$F'_y(x_0,y_0)>0$。若一元函数 $y=y(x)$ 是由方程 $F(x,y)=0$ 所确定的在点 $(x_0,y_0)$ 附近的隐函数，则 $x_0$ 是函数 $y=y(x)$ 的极小值点的一个充分条件是（  ）
(A) $F''_{xx}(x_0,y_0)>0$。 (B) $F''_{xx}(x_0,y_0)<0$。
(C) $F''_{xy}(x_0,y_0)>0$。 (D) $F''_{yy}(x_0,y_0)<0$。`, a: R`(B)`, sol: R`【思路】隐函数求二阶导，把 $y''(x_0)$ 的符号与 $F$ 的二阶偏导挂钩。
【详解】两边对 $x$ 求导：$F'_x+F'_y y'=0$，得 $y'=-\dfrac{F'_x}{F'_y}$。因 $F'_x(x_0,y_0)=0$，故 $y'(x_0)=0$。
再对 $x$ 求导：
$$y''=-\frac{(F''_{xx}+F''_{xy}y')F'_y-F'_x(F''_{yx}+F''_{yy}y')}{F'^2_y}.$$
代入 $F'_x=0,y'=0$，得 $y''(x_0)=-\dfrac{F''_{xx}F'_y}{F'^2_y}=-\dfrac{F''_{xx}}{F'_y}$。
要 $x_0$ 为极小值点需 $y''(x_0)>0$，即 $F''_{xx}<0$（因 $F'_y>0$）。选 (B)。
【易错点】$F'_y>0$ 决定符号方向；$F'_x=0$ 使一阶条件自动满足。` },
    { n: 16, q: R`设函数 $u(x,y)$ 在有界闭区域 $D$ 上连续，在 $D$ 的内部具有 2 阶连续偏导数，且满足 $\dfrac{\partial^2u}{\partial x\partial y}\neq0$ 及 $\dfrac{\partial^2u}{\partial x^2}+\dfrac{\partial^2u}{\partial y^2}=0$，则（  ）
(A) $u(x,y)$ 的最大值和最小值都在 $D$ 的边界上取得。
(B) $u(x,y)$ 的最大值和最小值都在 $D$ 的内部取得。
(C) $u(x,y)$ 的最大值在 $D$ 的内部取得，最小值都在 $D$ 的边界上取得。
(D) $u(x,y)$ 的最小值在 $D$ 的内部取得，最大值都在 $D$ 的边界上取得。`, a: R`(A)`, sol: R`【思路】反证：若内部有极值点，则必满足 $AC-B^2\geqslant0$，与题设矛盾。
【详解】设内部某点 $(x_0,y_0)$ 是极值点，记 $A=u_{xx},B=u_{xy},C=u_{yy}$，极值必要条件为 $AC-B^2\geqslant0$。
但题设 $u_{xx}+u_{yy}=0$ 即 $C=-A$，于是
$$AC-B^2=-A^2-B^2<0\quad(\text{因 }B=u_{xy}\neq0).$$
矛盾。故内部无极值点，最值只能在边界取得。选 (A)。
【易错点】极值点处必有 $AC-B^2\geqslant0$；$B\neq0$ 是让不等式严格成立的关键。` },
    { n: 17, q: R`设 $z=\dfrac{x\cos(y-1)-(y-1)\cos x}{1+\sin x+\sin(y-1)}$，则 $\left.\dfrac{\partial z}{\partial y}\right|_{(0,1)}=$ ______。`, a: R`$-1$`, sol: R`【思路】求具体点处的偏导，先代入另一个变量的值，化为一元函数再求导。
【详解】令 $x=0$，则
$$z(0,y)=\frac{0-(y-1)}{1+0+\sin(y-1)}=\frac{-(y-1)}{1+\sin(y-1)}.$$
记 $t=y-1$，$g(t)=\dfrac{-t}{1+\sin t}$，则
$$g'(t)=\frac{-(1+\sin t)-(-t)\cos t}{(1+\sin t)^2}.$$
取 $t=0$：$g'(0)=\dfrac{-1}{1}=-1$，即 $\left.\dfrac{\partial z}{\partial y}\right|_{(0,1)}=-1$。
【易错点】直接用商法则对原式求导极其繁琐，「先代后求」是关键技巧。` },
    { n: 18, q: R`设 $z=\arctan(xy^2)$，则 $\left.\dfrac{\partial^2z}{\partial y\partial x}\right|_{(0,1)}=$ ______。`, a: R`$2$`, sol: R`【思路】混合偏导也可「先代后求」：先对一个变量求偏导，代入该变量的值，再对另一变量求导。
【详解】先对 $x$ 求偏导：
$$z_x=\frac{y^2}{1+x^2y^4}.$$
令 $x=0$，得 $z_x(0,y)=y^2$。再对 $y$ 求导：$\dfrac{\mathrm{d}}{\mathrm{d}y}y^2=2y$，取 $y=1$ 得 $2$。故 $\left.\dfrac{\partial^2z}{\partial y\partial x}\right|_{(0,1)}=2$。
【易错点】$\dfrac{\partial^2z}{\partial y\partial x}$ 表示「先对 $x$、再对 $y$」；若顺序弄反结果可能不同（本题恰好对称，但习惯要记牢）。` },
    { n: 19, q: R`设 $z=(x+\mathrm{e}^y)^x$，则 $\left.\dfrac{\partial z}{\partial x}\right|_{(1,0)}=$ ______。`, a: R`$1+2\ln2$`, sol: R`【思路】幂指函数先代后求，再化为指数形式求导。
【详解】令 $y=0$，得 $z(x,0)=(x+1)^x=\mathrm{e}^{x\ln(x+1)}$，于是
$$\frac{\mathrm{d}}{\mathrm{d}x}\mathrm{e}^{x\ln(x+1)}=\mathrm{e}^{x\ln(x+1)}\left[\ln(x+1)+\frac{x}{x+1}\right].$$
取 $x=1$：$z_x(1,0)=2\left[\ln2+\frac12\right]=1+2\ln2$。
【易错点】幂指函数 $u^v$ 一律写成 $\mathrm{e}^{v\ln u}$ 再求导。` },
    { n: 20, q: R`设函数 $z=\left(1+\dfrac{x}{y}\right)^{\frac{x}{y}}$，则 $\mathrm{d}z|_{(1,1)}=$ ______。`, a: R`$(1+2\ln2)(\mathrm{d}x-\mathrm{d}y)$`, sol: R`【思路】令中间变量 $u=\dfrac{x}{y}$，则 $z=(1+u)^u$ 只是 $u$ 的一元函数，再用一阶全微分形式不变性。
【详解】令 $u=\dfrac{x}{y}$，则 $z=(1+u)^u=\mathrm{e}^{u\ln(1+u)}$，
$$\frac{\mathrm{d}z}{\mathrm{d}u}=\mathrm{e}^{u\ln(1+u)}\left[\ln(1+u)+\frac{u}{1+u}\right].$$
取 $(x,y)=(1,1)$ 得 $u=1$，$\left.\dfrac{\mathrm{d}z}{\mathrm{d}u}\right|_{u=1}=2\left[\ln2+\frac12\right]=1+2\ln2$。
又 $\mathrm{d}u=\dfrac{y\,\mathrm{d}x-x\,\mathrm{d}y}{y^2}$，在 $(1,1)$ 处 $\mathrm{d}u=\mathrm{d}x-\mathrm{d}y$。故
$$\mathrm{d}z|_{(1,1)}=(1+2\ln2)(\mathrm{d}x-\mathrm{d}y).$$
【易错点】别忘乘 $\mathrm{d}u$；$u$ 在 $(1,1)$ 处的微分是 $\mathrm{d}x-\mathrm{d}y$。` },
    { n: 21, q: R`设函数 $z=z(x,y)$ 由方程 $(z+y)^x=xy$ 确定，则 $\left.\dfrac{\partial z}{\partial x}\right|_{(1,2)}=$ ______。`, a: R`$2-2\ln2$`, sol: R`【思路】隐函数求偏导，先求出该点的 $z$ 值，再两边取对数求导。
【详解】在 $(x,y)=(1,2)$ 处，$(z+2)^1=2$，得 $z=0$。
对方程两边取对数：$x\ln(z+y)=\ln x+\ln y$。两边对 $x$ 求偏导：
$$\ln(z+y)+x\cdot\frac{z_x}{z+y}=\frac1x.$$
代入 $x=1,y=2,z=0$：$\ln2+\dfrac{z_x}{2}=1$，解得 $z_x=2(1-\ln2)=2-2\ln2$。
【易错点】先求该点的 $z$ 是第一步；取对数可把幂指形式化成乘积。` },
    { n: 22, q: R`设 $u=x^2\mathrm{e}^yz^3$，其中 $z=z(x,y)$ 由方程 $x^3+y^3+z^3-3xyz=0$ 所确定，则 $\mathrm{d}u|_{x=-1,y=0}=$ ______。`, a: R`$-5\mathrm{d}x-2\mathrm{d}y$`, sol: R`【思路】$u$ 的全微分含 $\mathrm{d}z$，而 $\mathrm{d}z$ 由约束方程微分得到。
【详解】在 $x=-1,y=0$ 时，约束化为 $(-1)^3+z^3=0$，即 $z=1$。
$$u_x=2x\mathrm{e}^yz^3=-2,\quad u_y=x^2\mathrm{e}^yz^3=1,\quad u_z=3x^2\mathrm{e}^yz^2=3.$$
对约束 $F=x^3+y^3+z^3-3xyz=0$ 求偏导并代入 $(-1,0,1)$：
$$F_x=3x^2-3yz=3,\quad F_y=3y^2-3xz=3,\quad F_z=3z^2-3xy=3.$$
故 $\mathrm{d}z=-\dfrac{F_x\mathrm{d}x+F_y\mathrm{d}y}{F_z}=-\mathrm{d}x-\mathrm{d}y$。于是
$$\mathrm{d}u=u_x\mathrm{d}x+u_y\mathrm{d}y+u_z\mathrm{d}z=-2\mathrm{d}x+\mathrm{d}y+3(-\mathrm{d}x-\mathrm{d}y)=-5\mathrm{d}x-2\mathrm{d}y.$$
【易错点】$u$ 通过 $z$ 间接依赖 $x,y$，$\mathrm{d}u$ 必须补上 $u_z\mathrm{d}z$ 项。` },
    { n: 23, q: R`设 $z=f(x,y)$ 满足 $\dfrac{\partial^2z}{\partial x\partial y}=x+y$，且 $f(x,0)=x$，$f(0,y)=y^2$，则 $f(x,y)=$ ______。`, a: R`$\left(\dfrac{1}{2}x^2y+\dfrac{1}{2}xy^2+x+y^2\right)$`, sol: R`【思路】对混合偏导依次对 $y$、$x$ 积分，每步都带一个待定函数，再用两个条件确定。
【详解】由 $z_{xy}=x+y$，对 $y$ 积分：$z_x=xy+\dfrac{y^2}{2}+\varphi(x)$。
再对 $x$ 积分：$z=\dfrac{x^2y}{2}+\dfrac{xy^2}{2}+G(x)+\psi(y)$，其中 $G(x)=\int\varphi(x)\mathrm{d}x$。
由 $f(x,0)=x$ 得 $G(x)+\psi(0)=x$；由 $f(0,y)=y^2$ 得 $G(0)+\psi(y)=y^2$。又 $G(0)+\psi(0)=f(0,0)=0$。于是
$$z=\frac{x^2y}{2}+\frac{xy^2}{2}+x+y^2.$$
【易错点】两次积分产生 $\varphi(x)$ 与 $\psi(y)$ 两个待定函数，需两个边界条件加一个相容条件才能定出。` },
    { n: 24, q: R`设 $u(x,y)$ 有连续二阶偏导数，$\dfrac{\partial^2u}{\partial x^2}=\dfrac{\partial^2u}{\partial y^2}$，且 $u(x,2x)=x$，$u_1(x,2x)=x^2$ 则 $u_{11}(x,2x)=$ ______。`, a: R`$-\dfrac{4}{3}x$`, sol: R`【思路】沿曲线 $y=2x$ 把二元函数看成 $x$ 的一元函数，对两个已知等式求导，联立消去混合偏导。
【详解】记 $u_1=u_x,u_2=u_y$。沿 $y=2x$：
由 $u(x,2x)=x$ 对 $x$ 求导：$u_1+2u_2=1$ ①
由 $u_1(x,2x)=x^2$ 对 $x$ 求导：$u_{11}+2u_{12}=2x$ ②
对 ① 再求导：$u_{11}+2u_{12}+2u_{21}+4u_{22}=0$，即 $u_{11}+4u_{12}+4u_{22}=0$ ③
由题设 $u_{22}=u_{11}$，代入 ③ 得 $5u_{11}+4u_{12}=0$ ④
由 ② 得 $u_{12}=\dfrac{2x-u_{11}}{2}$，代入 ④：$5u_{11}+2(2x-u_{11})=0$，即 $3u_{11}+4x=0$。故 $u_{11}(x,2x)=-\dfrac{4}{3}x$。
【易错点】① 求导得 $u_{11}+4u_{12}+4u_{22}=0$（不是 $=1$，因为 ① 右端是常数）；用 $u_{22}=u_{11}$ 才能凑成关于 $u_{11}$ 的方程。` },
    { n: 25, q: R`设函数 $z=z(x,y)$ 由方程 $F\left(x+\dfrac{z}{y},y+\dfrac{z}{x}\right)=0$ 确定，则 $x\dfrac{\partial z}{\partial x}+y\dfrac{\partial z}{\partial y}=$ ______。`, a: R`$z-xy$`, sol: R`【思路】设中间变量，分别对 $x,y$ 求偏导，再作组合 $xz_x+yz_y$，约分得结果。
【详解】令 $u=x+\dfrac{z}{y}$，$v=y+\dfrac{z}{x}$，则 $F(u,v)=0$。
对 $x$：$F_u\left(1+\dfrac{z_x}{y}\right)+F_v\left(\dfrac{xz_x-z}{x^2}\right)=0$；
对 $y$：$F_u\left(-\dfrac{z}{y^2}\right)+F_v\left(1+\dfrac{z_y}{x}\right)=0$。
两式分别整理出 $z_x,z_y$ 的系数，作 $xz_x+yz_y$：
$$xz_x+yz_y=\frac{(z-xy)(xF_u+yF_v)}{xF_u+yF_v}=z-xy.$$
（分子中 $xF_u+yF_v$ 与分母同因子，约去即得。）
【易错点】不要试图解出 $z_x,z_y$ 的显式，直接对组合式通分、约去公共因子 $xF_u+yF_v$。` },
    { n: 26, q: R`已知 $\mathrm{d}f(x,y)|_{(x_0,y_0)}=2\mathrm{d}x+\mathrm{d}y$，则 $\lim\limits_{t\to0}\dfrac{f(x_0+2t,y_0)-f(x_0,y_0-t)}{t}=$ ______。`, a: R`$5$`, sol: R`【思路】可微时用线性主部近似增量，再取极限。
【详解】由 $\mathrm{d}f=2\mathrm{d}x+\mathrm{d}y$ 知 $f'_x(x_0,y_0)=2$，$f'_y(x_0,y_0)=1$。由可微性，
$$f(x_0+2t,y_0)=f(x_0,y_0)+2\cdot2t+o(t)=f(x_0,y_0)+4t+o(t),$$
$$f(x_0,y_0-t)=f(x_0,y_0)+1\cdot(-t)+o(t)=f(x_0,y_0)-t+o(t).$$
分子 $=5t+o(t)$，故极限为 $5$。
【易错点】第二个点沿 $y$ 方向走了 $-t$，对应 $f'_y\cdot(-t)=-t$，别丢负号。` },
    { n: 27, q: R`已知函数 $z=f(x,y)$ 连续且满足 $\lim\limits_{\substack{x\to1\\y\to0}}\dfrac{f(x,y)-x+2y+2}{\sqrt{(x-1)^2+y^2}}=0$，则 $\lim\limits_{t\to0}\dfrac{f(1+t,0)-f(1,2t)}{t}=$ ______。`, a: R`$5$`, sol: R`【思路】先由极限条件读出 $f(1,0),f_x(1,0),f_y(1,0)$，再用线性化计算。
【详解】由条件得 $f(x,y)=x-2y-2+o(\rho)$，$\rho=\sqrt{(x-1)^2+y^2}$。故
$$f(1,0)=1-0-2=-1,\quad f_x(1,0)=1,\quad f_y(1,0)=-2.$$
于是 $f(1+t,0)=-1+t+o(t)$，$f(1,2t)=-1-4t+o(t)$。分子 $=(-1+t)-(-1-4t)+o(t)=5t+o(t)$，极限为 $5$。
【易错点】条件里 $f-x+2y+2\to0$，移项得 $f=x-2y-2+\cdots$，注意 $f_y=-2$（对应 $2y$ 前的负号）。` },
    { n: 28, q: R`设 $z=\displaystyle\int_0^1|xy-t|f(t)\mathrm{d}t$，$0\leqslant x\leqslant1$，$0\leqslant y\leqslant1$，其中 $f(x)$ 为连续函数，则 $z_{xx}+z_{yy}=$ ______。`, a: R`$2(x^2+y^2)f(xy)$`, sol: R`【思路】被积函数含绝对值，按 $t=xy$ 分段去掉绝对值，再用含参变上限积分求导。
【详解】因 $0\leqslant xy\leqslant1$，
$$z=\int_0^{xy}(xy-t)f(t)\mathrm{d}t+\int_{xy}^1(t-xy)f(t)\mathrm{d}t.$$
对 $x$ 求偏导：
$$z_x=y\int_0^{xy}f(t)\mathrm{d}t-y\int_{xy}^1f(t)\mathrm{d}t.$$
再对 $x$ 求导（注意上限 $xy$ 也含 $x$）：
$$z_{xx}=y\big[f(xy)\cdot y\big]-y\big[-f(xy)\cdot y\big]=2y^2f(xy).$$
由对称性 $z_{yy}=2x^2f(xy)$。故 $z_{xx}+z_{yy}=2(x^2+y^2)f(xy)$。
【易错点】对含参变上限积分求导：上下限都是 $x$ 的函数，两项都要求导并乘内层导数 $y$。` },
    { n: 29, q: R`设 $u=f(x,y,z)$，$z=\ln\sqrt{x^2+y^2}$，求 $\dfrac{\partial u}{\partial x}$，$\dfrac{\partial^2u}{\partial x^2}$，其中 $f$ 有二阶连续偏导数。`, a: R`$\dfrac{\partial u}{\partial x}=f'_1+f'_3\dfrac{x}{x^2+y^2}$；$\dfrac{\partial^2u}{\partial x^2}=f''_{11}+2f''_{13}\dfrac{x}{x^2+y^2}+f''_{33}\dfrac{x^2}{(x^2+y^2)^2}+f'_3\dfrac{y^2-x^2}{(x^2+y^2)^2}$。`, sol: R`【思路】链式法则：$u$ 通过中间变量 $z$ 依赖 $x$，二阶导要注意 $f'_3$ 仍含 $x$。
【详解】$z=\frac12\ln(x^2+y^2)$，故
$$z_x=\frac{x}{x^2+y^2},\qquad z_{xx}=\frac{(x^2+y^2)-x\cdot2x}{(x^2+y^2)^2}=\frac{y^2-x^2}{(x^2+y^2)^2}.$$
一阶：$\dfrac{\partial u}{\partial x}=f'_1+f'_3z_x=f'_1+\dfrac{x}{x^2+y^2}f'_3$。
二阶：
$$\frac{\partial^2u}{\partial x^2}=f''_{11}+f''_{13}z_x+\frac{\partial}{\partial x}\!\left(\frac{x}{x^2+y^2}\right)f'_3+\frac{x}{x^2+y^2}\big(f''_{31}+f''_{33}z_x\big)$$
$$=f''_{11}+2\frac{x}{x^2+y^2}f''_{13}+\frac{x^2}{(x^2+y^2)^2}f''_{33}+\frac{y^2-x^2}{(x^2+y^2)^2}f'_3.$$
【易错点】$f'_3$ 是 $x,y,z$ 的函数，对它求 $x$ 的导还会产生 $f''_{31},f''_{33}$；最后一项来自 $z_{xx}$。` },
    { n: 30, q: R`设函数 $z=f(x,y)$ 在点 $(1,1)$ 处可微，且 $f(1,1)=1$，$\left.\dfrac{\partial f}{\partial x}\right|_{(1,1)}=2$，$\left.\dfrac{\partial f}{\partial y}\right|_{(1,1)}=3$，$\varphi(x)=f[x,f(x,x)]$，求 $\left.\dfrac{\mathrm{d}}{\mathrm{d}x}\varphi^3(x)\right|_{x=1}$。`, a: R`$51$`, sol: R`【思路】复合函数求导，先算出 $\varphi(1)$ 与 $\varphi'(1)$，再对 $\varphi^3$ 求导。
【详解】$\varphi(1)=f[1,f(1,1)]=f(1,1)=1$。
记内层 $g(x)=f(x,x)$，则 $g'(x)=f_1(x,x)+f_2(x,x)$，$g'(1)=f_1(1,1)+f_2(1,1)=2+3=5$。
$$\varphi'(x)=f_1[x,g(x)]+f_2[x,g(x)]\cdot g'(x),$$
$$\varphi'(1)=f_1(1,1)+f_2(1,1)\cdot5=2+3\times5=17.$$
故 $\left.\dfrac{\mathrm{d}}{\mathrm{d}x}\varphi^3\right|_{x=1}=3\varphi^2(1)\varphi'(1)=3\times1\times17=51$。
【易错点】内层 $f(x,x)$ 的导数要用链式法则得 $f_1+f_2$，不能只写 $f'$。` },
    { n: 31, q: R`设 $u=f(x,y,z)$ 有连续的一阶偏导数，又函数 $y=y(x)$ 及 $z=z(x)$ 分别由 $\mathrm{e}^{xy}-xy=2$ 和 $\mathrm{e}^x=\displaystyle\int_0^{x-z}\dfrac{\sin t}{t}\mathrm{d}t$ 确定。求 $\dfrac{\mathrm{d}u}{\mathrm{d}x}$。`, a: R`$\dfrac{\mathrm{d}u}{\mathrm{d}x}=\dfrac{\partial f}{\partial x}-\dfrac{y}{x}\dfrac{\partial f}{\partial y}+\left[1-\dfrac{\mathrm{e}^x(x-z)}{\sin(x-z)}\right]\dfrac{\partial f}{\partial z}$`, sol: R`【思路】先分别由两个方程求出 $\dfrac{\mathrm{d}y}{\mathrm{d}x}$ 与 $\dfrac{\mathrm{d}z}{\mathrm{d}x}$，再对 $u=f(x,y,z)$ 用全导数公式。
【详解】① 由 $\mathrm{e}^{xy}-xy=2$ 对 $x$ 求导：$\mathrm{e}^{xy}(y+xy')-(y+xy')=0$，即 $(\mathrm{e}^{xy}-1)(y+xy')=0$。由原方程 $\mathrm{e}^{xy}=2+xy$，故 $\mathrm{e}^{xy}-1=1+xy\neq0$（在给定点），于是 $y+xy'=0$，得 $y'=-\dfrac{y}{x}$。
② 由 $\mathrm{e}^x=\displaystyle\int_0^{x-z}\dfrac{\sin t}{t}\mathrm{d}t$ 对 $x$ 求导：$\mathrm{e}^x=\dfrac{\sin(x-z)}{x-z}(1-z')$，解得 $z'=1-\dfrac{\mathrm{e}^x(x-z)}{\sin(x-z)}$。
③ 全导数：$\dfrac{\mathrm{d}u}{\mathrm{d}x}=\dfrac{\partial f}{\partial x}+\dfrac{\partial f}{\partial y}y'+\dfrac{\partial f}{\partial z}z'$，代入得
$$\frac{\mathrm{d}u}{\mathrm{d}x}=\frac{\partial f}{\partial x}-\frac{y}{x}\frac{\partial f}{\partial y}+\left[1-\frac{\mathrm{e}^x(x-z)}{\sin(x-z)}\right]\frac{\partial f}{\partial z}.$$
【易错点】$z$ 由变上限积分确定，求导时上限 $x-z$ 对 $x$ 的导数是 $1-z'$，别漏 $z'$；本题答案中原书印刷处下标有误，以本推导为准。` },
    { n: 32, q: R`设变换 $\begin{cases}u=x-2y,\\v=x+ay.\end{cases}$ 可把方程 $6\dfrac{\partial^2z}{\partial x^2}+\dfrac{\partial^2z}{\partial x\partial y}-\dfrac{\partial^2z}{\partial y^2}=0$ 简化为 $\dfrac{\partial^2z}{\partial u\partial v}=0$，求常数 $a$。`, a: R`$a=3$`, sol: R`【思路】用链式法则把 $z_{xx},z_{xy},z_{yy}$ 换成 $z_{uu},z_{uv},z_{vv}$，令 $z_{uu},z_{vv}$ 的系数为零、$z_{uv}$ 系数非零。
【详解】由 $u=x-2y,v=x+ay$ 得 $u_x=1,u_y=-2,v_x=1,v_y=a$。
$$z_x=z_u+z_v,\qquad z_{xx}=z_{uu}+2z_{uv}+z_{vv};$$
$$z_y=-2z_u+az_v,\qquad z_{yy}=4z_{uu}-4az_{uv}+a^2z_{vv};$$
$$z_{xy}=-2z_{uu}+(a-2)z_{uv}+az_{vv}.$$
代入原方程，整理得
$$(6-2-4)z_{uu}+(10+5a)z_{uv}+(6+a-a^2)z_{vv}=0,$$
即 $5(2+a)z_{uv}+(6+a-a^2)z_{vv}=0$（$z_{uu}$ 系数恰为 $0$）。要化为 $z_{uv}=0$，需 $z_{vv}$ 系数为 $0$：$a^2-a-6=0$，解得 $a=3$ 或 $a=-2$。但需 $z_{uv}$ 系数 $5(2+a)\neq0$，排除 $a=-2$。故 $a=3$。
【易错点】$z_{uu}$ 的系数自动为零是本题设计的巧合；必须同时保证 $z_{uv}$ 系数非零，否则 $a=-2$ 也会被误选。` },
    { n: 33, q: R`设函数 $f(u)$ 有连续一阶导数，$f(0)=2$，且 $z=xf\left(\dfrac{y}{x}\right)+yf\left(\dfrac{y}{x}\right)$ 满足 $\dfrac{\partial z}{\partial x}+\dfrac{\partial z}{\partial y}=\dfrac{y}{x}$ $(x\neq0)$，求 $z$ 的表达式。`, a: R`$z=(x-y)\ln\left(1-\dfrac{y}{x}\right)+2x-y$`, sol: R`【思路】令 $u=\dfrac{y}{x}$，把 $z_x+z_y$ 化成关于 $f(u)$ 的一阶线性微分方程，解出 $f$ 再代回。
【详解】$z=(x+y)f(u)$，$u=\dfrac{y}{x}$，$u_x=-\dfrac{y}{x^2}=-\dfrac{u}{x}$，$u_y=\dfrac1x$。则
$$z_x=f+(x+y)f'\left(-\frac{u}{x}\right),\qquad z_y=f+(x+y)f'\frac1x,$$
$$z_x+z_y=2f+(x+y)f'\frac{1-u}{x}.$$
因 $x+y=x(1+u)$，故 $\dfrac{(x+y)(1-u)}{x}=1-u^2$。由题设 $z_x+z_y=u$，得
$$(1-u^2)f'(u)+2f(u)=u.$$
即 $f'+\dfrac{2}{1-u^2}f=\dfrac{u}{1-u^2}$。积分因子 $\mu=\exp\!\int\dfrac{2}{1-u^2}\mathrm{d}u=\dfrac{1+u}{1-u}$，于是
$$\left(\frac{1+u}{1-u}f\right)'=\frac{u}{(1-u)^2}.$$
积分得 $\dfrac{1+u}{1-u}f=\ln(1-u)+\dfrac{1}{1-u}+C$，即 $f=\dfrac{(1-u)\ln(1-u)+1+C(1-u)}{1+u}$。由 $f(0)=2$ 得 $1+C=2$，$C=1$，故
$$f(u)=\frac{(1-u)\ln(1-u)+2-u}{1+u}.$$
代回 $z=(x+y)f(y/x)=x\left[(1-u)\ln(1-u)+2-u\right]=(x-y)\ln\dfrac{x-y}{x}+2x-y$，即 $z=(x-y)\ln\left(1-\dfrac{y}{x}\right)+2x-y$。
【易错点】关键化简 $(x+y)\dfrac{1-u}{x}=1-u^2$；积分因子与 $f(0)=2$ 定常数。` },
    { n: 34, q: R`设函数 $f(x,y)$ 有连续二阶偏导数，满足 $\dfrac{\partial^2f}{\partial x\partial y}=0$，且在极坐标系下可表成 $f(x,y)=g(r)$，其中 $r=\sqrt{x^2+y^2}$，求 $f(x,y)$。`, a: R`$f(x,y)=C_1(x^2+y^2)+C_2$`, sol: R`【思路】$f_{xy}=0$ 说明 $f$ 是「只含 $x$ 的部分 + 只含 $y$ 的部分」；再用 $f=g(r)$ 的限制求出具体形式。
【详解】由 $f_{xy}=0$，对 $y$ 积分得 $f_x=\varphi(x)$，再对 $x$ 积分得 $f=\Phi(x)+\Psi(y)$。
又 $f=g(r)$，只依赖 $x^2+y^2$。对 $f=g(r)$ 求 $f_{xy}$：
$$f_x=g'(r)\frac{x}{r},\quad f_{xy}=g''(r)\frac{xy}{r^2}+g'(r)\cdot\left(-\frac{xy}{r^3}\right)=xy\left(\frac{g''(r)}{r^2}-\frac{g'(r)}{r^3}\right).$$
由 $f_{xy}=0$ 且 $xy$ 任意，得 $rg''(r)-g'(r)=0$，即 $g'(r)=C_1 r$（因为 $\left(\dfrac{g'}{r}\right)'=0$）。积分得 $g(r)=\dfrac{C_1}{2}r^2+C_2$。故 $f(x,y)=C_1(x^2+y^2)+C_2$。
【易错点】$f_{xy}=0$ 的通解是 $\Phi(x)+\Psi(y)$，不能漏掉任意函数；再叠加「只依赖 $r$」的条件。` },
    { n: 35, q: R`设 $z=f(\sqrt{x^2+y^2})$ 具有二阶连续偏导数，且 $\dfrac{\partial^2z}{\partial x^2}+\dfrac{\partial^2z}{\partial y^2}-\dfrac{1}{x}\dfrac{\partial z}{\partial x}+z=x^2+y^2$，试求函数 $z$ 的表达式。`, a: R`$z=C_1\cos r+C_2\sin r+r^2-2$`, sol: R`【思路】径向函数用 $\Delta z=f''+\dfrac1r f'$，题中的 $-\dfrac1x z_x$ 恰好把 $\dfrac1r f'$ 抵消，得到常系数方程。
【详解】令 $r=\sqrt{x^2+y^2}$，$z=f(r)$，则 $z_x=f'(r)\dfrac{x}{r}$，
$$z_{xx}=f''(r)\frac{x^2}{r^2}+f'(r)\left(\frac1r-\frac{x^2}{r^3}\right),\quad z_{yy}=f''(r)\frac{y^2}{r^2}+f'(r)\left(\frac1r-\frac{y^2}{r^3}\right).$$
相加得 $z_{xx}+z_{yy}=f''(r)+\dfrac1r f'(r)$。又 $\dfrac1x z_x=\dfrac1r f'(r)$，故原方程化为
$$f''(r)+f(r)=r^2.$$
解此二阶常系数非齐次方程：齐次通解 $C_1\cos r+C_2\sin r$；设特解 $f=r^2+ar+b$ 代入得 $f''=2$，$2+r^2+ar+b=r^2$，故 $a=0,b=-2$，特解 $r^2-2$。所以 $z=C_1\cos r+C_2\sin r+r^2-2$。
【易错点】径向 Laplacian 公式 $f''+\dfrac1r f'$ 要记牢；$-\dfrac1x z_x$ 与 $\dfrac1r f'$ 恰好抵消是本题的巧妙处。` },
    { n: 36, q: R`求函数 $f(x,y)=x^4+y^4-(x+y)^2$ 的极值。`, a: R`在 $(-1,-1),(1,1)$ 取极小值，在 $(0,0)$ 点无极值。`, sol: R`【思路】先求驻点，再用 $AC-B^2$ 判别；遇到 $AC-B^2=0$ 的驻点要用定义另判。
【详解】令
$$f_x=4x^3-2(x+y)=0,\qquad f_y=4y^3-2(x+y)=0.$$
两式相减得 $4(x^3-y^3)=0$，即 $x=y$。代回得 $4x^3-4x=0$，$x(x^2-1)=0$，故 $x=0,\pm1$，驻点为 $(0,0),(1,1),(-1,-1)$。
二阶：$f_{xx}=12x^2-2$，$f_{xy}=-2$，$f_{yy}=12y^2-2$。
$(1,1)$：$A=10,B=-2,C=10$，$AC-B^2=100-4=96>0,A>0$，极小值 $f(1,1)=1+1-4=-2$；$(-1,-1)$ 同理极小值 $-2$。
$(0,0)$：$A=B=C=-2$，$AC-B^2=0$，判别法失效。沿 $y=-x$ 有 $f=2x^4>0$（$x\neq0$），沿 $y=x$ 有 $f=2x^4-4x^2=2x^2(x^2-2)<0$（$0<|x|<\sqrt2$），故 $(0,0)$ 不是极值点。
【易错点】$AC-B^2=0$ 时不能下结论，必须找两条路径使 $f-f(0,0)$ 符号相反。` },
    { n: 37, q: R`求二元函数 $f(x,y)=x^2(2+y^2)+y\ln y$ 的极值。`, a: R`在 $\left(0,\dfrac{1}{\mathrm{e}}\right)$ 取极小值，极小值为 $f\left(0,\dfrac{1}{\mathrm{e}}\right)=-\dfrac{1}{\mathrm{e}}$。`, sol: R`【思路】注意定义域 $y>0$；求驻点后算二阶判别式。
【详解】定义域 $y>0$。令
$$f_x=2x(2+y^2)=0\Rightarrow x=0\ (\text{因 }2+y^2>0),$$
$$f_y=2x^2y+\ln y+1=0\Rightarrow \ln y=-1\Rightarrow y=\frac1{\mathrm{e}}.$$
唯一驻点 $\left(0,\dfrac1{\mathrm{e}}\right)$。
二阶：$f_{xx}=2(2+y^2)$，$f_{xy}=4xy$，$f_{yy}=2x^2+\dfrac1y$。在驻点处 $A=2\left(2+\mathrm{e}^{-2}\right)>0$，$B=0$，$C=\mathrm{e}>0$，$AC-B^2>0$，为极小值。
$$f\left(0,\frac1{\mathrm{e}}\right)=\frac1{\mathrm{e}}\ln\frac1{\mathrm{e}}=-\frac1{\mathrm{e}}.$$
【易错点】先写定义域 $y>0$；由 $f_x=0$ 得 $x=0$ 而非 $y=\pm\sqrt{-2}$（后者无实解）。` },
    { n: 38, q: R`设函数 $z=f(xy,yg(x))$，其中 $f$ 函数具有二阶连续偏导数，函数 $g(x)$ 可导且在 $x=1$ 处取得极值 $g(1)=1$，求 $\left.\dfrac{\partial^2z}{\partial x\partial y}\right|_{\substack{x=1\\y=1}}$。`, a: R`$f'_1(1,1)+f''_{11}(1,1)+f''_{12}(1,1)$`, sol: R`【思路】「$g$ 在 $x=1$ 取极值」即 $g'(1)=0$，用它消去含 $g'$ 的项。
【详解】令 $u=xy$，$v=yg(x)$，则 $z=f(u,v)$，$z_x=yf'_1+yg'(x)f'_2$。
再对 $y$ 求导（用 $u_y=x$，$v_y=g(x)$）：
$$z_{xy}=f'_1+y\big(f''_{11}x+f''_{12}g(x)\big)+g'(x)f'_2+yg'(x)\big(f''_{21}x+f''_{22}g(x)\big).$$
取 $x=1,y=1$：$u=1$，$v=g(1)=1$，且 $g'(1)=0$，含 $g'$ 的项全部消失，故
$$z_{xy}\big|_{(1,1)}=f'_1(1,1)+1\cdot\big(f''_{11}(1,1)+f''_{12}(1,1)\big)=f'_1+f''_{11}+f''_{12}.$$
【易错点】$g'(1)=0$ 是解题钥匙；对 $z_x$ 求 $y$ 的导时，$g(x)$ 视作常数，但要记住 $f''_{12}$ 的下标对应 $(u,v)$。` },
    { n: 39, q: R`已知函数 $f(u,v)$ 具有二阶连续偏导数，$f(1,1)=2$ 是 $f(u,v)$ 的极值，$z=f(x+y,f(x,y))$。求 $\left.\dfrac{\partial^2z}{\partial x\partial y}\right|_{(1,1)}$。`, a: R`$f''_{11}(2,2)+f'_2(2,2)f''_{12}(1,1)$`, sol: R`【思路】极值条件给出 $f_1(1,1)=f_2(1,1)=0$，从而内层 $f(x,y)$ 在 $(1,1)$ 的一阶偏导为零，简化结果。
【详解】令 $u=x+y$，$v=f(x,y)$，则 $z=f(u,v)$（外层记 $f$，内层也记 $f$）。
$$z_x=f_1(u,v)+f_2(u,v)\,f_x(x,y).$$
再对 $y$ 求导（$u_y=1$，$v_y=f_y$）：
$$z_{xy}=\big(f_{11}+f_{12}f_y\big)+\big(f_{21}+f_{22}f_y\big)f_x+f_2\,f_{xy}.$$
在 $(1,1)$：$u=2$，$v=f(1,1)=2$。由 $f$ 在 $(1,1)$ 取极值知 $f_1(1,1)=f_2(1,1)=0$，故 $f_x(1,1)=f_1(1,1)\cdot1+f_2(1,1)\cdot0=0$，同理 $f_y(1,1)=0$。代入：
$$z_{xy}\big|_{(1,1)}=f_{11}(2,2)+0+0+0+f_2(2,2)\,f_{12}(1,1)=f''_{11}(2,2)+f'_2(2,2)f''_{12}(1,1).$$
【易错点】极值点在 $(u,v)=(1,1)$，而求导结果里出现的是 $f_{11}(2,2)$ 与 $f_2(2,2)$，两处自变量不同，别混淆。` },
    { n: 40, q: R`求由方程 $2x^2+2y^2+z^2+8xz-z+8=0$ 所确定的函数 $z=f(x,y)$ 极值点。`, a: R`点 $(-2,0)$ 取极小值，点 $\left(\dfrac{16}{7},0\right)$ 取极大值。`, sol: R`【思路】隐函数求极值：先令 $z_x=z_y=0$ 求驻点，再用 $z_{xx}=-F_{xx}/F_z$（驻点处）判别。
【详解】令 $F=2x^2+2y^2+z^2+8xz-z+8$。则
$$F_x=4x+8z,\quad F_y=4y,\quad F_z=2z+8x-1.$$
由 $z_x=-\dfrac{F_x}{F_z}=0$ 得 $F_x=0$，即 $x=-2z$；由 $z_y=-\dfrac{F_y}{F_z}=0$ 得 $y=0$。
代入原方程：$2(4z^2)+z^2+8(-2z)z-z+8=0$，即 $8z^2+z^2-16z^2-z+8=0$，$-7z^2-z+8=0$，$7z^2+z-8=0$，$(7z+8)(z-1)=0$，得 $z=1$ 或 $z=-\dfrac87$。
对应驻点：$z=1\Rightarrow x=-2$，点 $(-2,0)$；$z=-\dfrac87\Rightarrow x=\dfrac{16}{7}$，点 $\left(\dfrac{16}{7},0\right)$。
在驻点处对 $F_x+F_z z_x=0$ 再求导可得 $z_{xx}=-\dfrac{F_{xx}}{F_z}=-\dfrac{4}{F_z}$，同理 $z_{yy}=-\dfrac{4}{F_z}$，$z_{xy}=0$，故 $AC-B^2=\dfrac{16}{F_z^2}>0$。
$(-2,0)$ 处 $F_z=2+8(-2)-1=-15<0$，$z_{xx}=\dfrac{4}{15}>0$，极小值；
$\left(\dfrac{16}{7},0\right)$ 处 $F_z=-\dfrac{16}{7}+\dfrac{128}{7}-1=15>0$，$z_{xx}<0$，极大值。
【易错点】$z_{xx}$ 的公式只在驻点处成立；$F_z$ 的符号决定极值类型。` },
    { n: 41, q: R`设 $f(x,y)$ 有二阶连续偏导数，$g(x,y)=f(\mathrm{e}^{xy},x^2+y^2)$，且 $f(x,y)=1-x-y+o(\sqrt{(x-1)^2+y^2})$，证明 $g(x,y)$ 在 $(0,0)$ 取得极值，判断此极值是极大值还是极小值，并求出此极值。`, a: R`提示：利用极值充分条件。`, sol: R`【思路】由 $f$ 在 $(1,0)$ 的展开式读出 $f(1,0),f_x(1,0),f_y(1,0)$，再对 $g$ 用极值充分条件。
【详解】由 $f(x,y)=1-x-y+o(\rho)$（$\rho=\sqrt{(x-1)^2+y^2}$）知
$$f(1,0)=0,\qquad f_x(1,0)=-1,\qquad f_y(1,0)=-1.$$
令 $u=\mathrm{e}^{xy}$，$v=x^2+y^2$，则 $g=f(u,v)$，且
$$g_x=f_1\,\mathrm{e}^{xy}y+f_2\cdot2x,\qquad g_y=f_1\,\mathrm{e}^{xy}x+f_2\cdot2y.$$
在 $(0,0)$：$u=1,v=0$，$g_x=g_y=0$，$(0,0)$ 为驻点。
二阶（在 $(0,0)$ 处，含 $x$ 或 $y$ 一次因子的项为零）：
$$g_{xx}\big|_{(0,0)}=2f_2(1,0)=-2,\quad g_{xy}\big|_{(0,0)}=f_1(1,0)\mathrm{e}^0=-1,\quad g_{yy}\big|_{(0,0)}=2f_2(1,0)=-2.$$
故 $A=-2,B=-1,C=-2$，$AC-B^2=4-1=3>0$ 且 $A<0$，所以 $g$ 在 $(0,0)$ 取得极大值，$g(0,0)=f(1,0)=0$。
【易错点】$g_{xx}$ 中的 $2f_2$ 来自对 $2x$ 求导，容易被漏掉；展开式里 $1-x-y$ 的系数就是 $f_x,f_y$。` },
    { n: 42, q: R`求函数 $f(x,y)=x^2+2y^2-x^2y^2$ 在区域 $D=\{(x,y)\mid x^2+y^2\leqslant4,y\geqslant0\}$ 上的最大值和最小值。`, a: R`$f_{\max}(0,2)=8$，$f_{\min}(0,0)=0$。`, sol: R`【思路】闭域最值：先求内部驻点，再把边界分成线段 $y=0$ 与半圆 $x^2+y^2=4$ 分别求最值，最后统一比较。
【详解】内部：令 $f_x=2x(1-y^2)=0$，$f_y=2y(2-x^2)=0$。在 $D$ 内得驻点 $(0,0),(0,1),(\pm\sqrt2,0),(\pm\sqrt2,1)$。函数值：$f(0,0)=0$，$f(0,1)=2$，$f(\pm\sqrt2,0)=2$，$f(\pm\sqrt2,1)=2+2-2=2$。
边界 $y=0,-2\leqslant x\leqslant2$：$f=x^2$，最大 $4$（$x=\pm2$），最小 $0$（$x=0$）。
边界 $x^2+y^2=4,y\geqslant0$：$y^2=4-x^2$，
$$f=x^2+2(4-x^2)-x^2(4-x^2)=x^4-5x^2+8.$$
令 $t=x^2\in[0,4]$，$h(t)=t^2-5t+8$，最小值在 $t=\dfrac52$ 处 $h=\dfrac74$，端点 $h(0)=8$，$h(4)=4$。
比较所有候选值：最大 $8$（在 $(0,2)$ 取得），最小 $0$（在 $(0,0)$ 取得）。
【易错点】边界要分成线段和半圆两段；内部驻点须落在 $D$ 内（如 $(0,-1)$ 要舍去）。` },
    { n: 43, q: R`设函数 $z=z(x,y)$ 的微分 $\mathrm{d}z=(2x+12y)\mathrm{d}x+(12x+4y)\mathrm{d}y$，且 $z(0,0)=0$，求函数 $z=z(x,y)$ 在 $4x^2+y^2\leqslant25$ 上的最大值。`, a: R`$Z_{\max}=\dfrac{425}{4}$`, sol: R`【思路】先由全微分积分出 $z$，再在椭圆闭域上用拉格朗日乘数法求最值。
【详解】由 $\mathrm{d}z=(2x+12y)\mathrm{d}x+(12x+4y)\mathrm{d}y$ 得 $z_x=2x+12y$，$z_y=12x+4y$。对 $z_x$ 关于 $x$ 积分：$z=x^2+12xy+\varphi(y)$；对 $y$ 求导与 $z_y$ 比较：$12x+\varphi'(y)=12x+4y$，故 $\varphi(y)=2y^2+C$。由 $z(0,0)=0$ 得 $C=0$，即 $z=x^2+12xy+2y^2$。
内部驻点：$2x+12y=0,12x+4y=0\Rightarrow x=y=0$，$z=0$。$A=2,B=12,C=4$，$AC-B^2<0$，非极值。
边界 $4x^2+y^2=25$：用拉格朗日乘数法，$F=z+\lambda(4x^2+y^2-25)$，
$$F_x=2x+12y+8\lambda x=0,\quad F_y=12x+4y+2\lambda y=0,\quad 4x^2+y^2=25.$$
消元得 $(2+8\lambda)(4+2\lambda)-144=0$，即 $16\lambda^2-36\lambda-136=0$，解得 $\lambda=\dfrac{17}{4}$ 或 $\lambda=-2$。
$\lambda=\dfrac{17}{4}$ 时 $y=\dfrac83x$，代入边界得 $x=\pm\dfrac32,y=\pm4$，同号时 $z=\dfrac94+72+32=\dfrac{425}{4}$；
$\lambda=-2$ 时 $y=-\dfrac32x$，得 $x=\pm2,y=\mp3$，$z=4-72+18=-50$。
故 $z$ 在 $4x^2+y^2\leqslant25$ 上最大值为 $\dfrac{425}{4}$。
【易错点】先积分还原 $z$；闭域最值要比较内部与边界，内部驻点不是极值不影响边界取值。` },
    { n: 44, q: R`求函数 $u=xy+2yz$ 在约束条件 $x^2+y^2+z^2=10$ 下的最大值和最小值。`, a: R`$u_{\max}=5\sqrt5$，$u_{\min}=-5\sqrt5$。`, sol: R`【思路】拉格朗日乘数法，注意 $\lambda=0$ 与 $\lambda\neq0$ 两种情形都要讨论。
【详解】令 $F=xy+2yz+\lambda(x^2+y^2+z^2-10)$，
$$F_x=y+2\lambda x=0,\quad F_y=x+2z+2\lambda y=0,\quad F_z=2y+2\lambda z=0,\quad x^2+y^2+z^2=10.$$
情形一 $\lambda=0$：由 $F_x=0$ 得 $y=0$，$F_y=0$ 得 $x+2z=0$。代入球面方程：$4z^2+z^2=10$，$z=\pm\sqrt2$，$x=\mp2\sqrt2$，得 $P_5=(2\sqrt2,0,-\sqrt2),P_6=(-2\sqrt2,0,\sqrt2)$，此时 $u=0$。
情形二 $\lambda\neq0$：由 $F_z=0$ 得 $y=-\lambda z$，由 $F_x=0$ 得 $y=-2\lambda x$，故 $z=2x$。代入 $F_y=0$ 并与 $F_x=0$ 联立得 $\lambda^2=\dfrac54$，$y^2=5x^2$。代入球面方程 $x^2+5x^2+4x^2=10$，得 $x=\pm1$，$y=\pm\sqrt5$，$z=\pm2$，四个点。
计算：$u(P_1)=u(1,\sqrt5,2)=\sqrt5+4\sqrt5=5\sqrt5$，$u(P_4)=-5\sqrt5$，其余两点符号相反。故 $u_{\max}=5\sqrt5$，$u_{\min}=-5\sqrt5$。
【易错点】$\lambda=0$ 的情形容易漏；两种情形都要代回约束求点。` },
    { n: 45, q: R`求函数 $u=x^2+y^2+z^2$ 在约束条件 $z=x^2+y^2$ 和 $x+y+z=4$ 下的最大值与最小值。`, a: R`驻点 $(1,1,2)$，$(-2,-2,8)$。最大值 72，最小值 6。`, sol: R`【思路】用约束消元，把 $u$ 化成单变量 $z$ 的函数，再由实根存在性定出 $z$ 的范围。
【详解】由 $z=x^2+y^2$ 及 $x+y+z=4$ 得 $x+y=4-z$，$x^2+y^2=z$，于是
$$u=x^2+y^2+z^2=z+z^2.$$
又 $xy=\dfrac{(x+y)^2-(x^2+y^2)}{2}=\dfrac{(4-z)^2-z}{2}$。要使 $x,y$ 为实数，需 $(x+y)^2-4xy\geqslant0$：
$$(4-z)^2-2\big[(4-z)^2-z\big]\geqslant0\Rightarrow -z^2+10z-16\geqslant0\Rightarrow (z-2)(z-8)\leqslant0,$$
即 $2\leqslant z\leqslant8$。函数 $u=z^2+z$ 在 $[2,8]$ 上单调增，故最小值 $u(2)=6$，最大值 $u(8)=72$。
对应点：$z=2$ 时 $x+y=2,xy=1\Rightarrow x=y=1$，得 $(1,1,2)$；$z=8$ 时 $x+y=-4,xy=4\Rightarrow x=y=-2$，得 $(-2,-2,8)$。
【易错点】把约束转化为「$x,y$ 为实数」的判别式条件是关键，否则会漏掉 $z$ 的取值范围。` },
    { n: 46, q: R`在椭圆 $3x^2+2xy+3y^2=1$ 的第一象限部分上求一点，使该点的切线与两坐标轴所围成三角形面积最小，并求面积的最小值。`, a: R`$S=\dfrac{1}{2(1+8xy)}(x>0,y>0)$，$x=y=\dfrac{1}{\sqrt8}$，$S_{\min}=\dfrac{1}{4}$。`, sol: R`【思路】写出切线的截距式，把面积表示为 $(x,y)$ 的函数，再在椭圆约束下求最小值。
【详解】椭圆在 $(x,y)$ 处的切线：由隐函数求导 $(6x+2y)+(2x+6y)y'=0$，切线方程可整理为
$$(3x+y)X+(x+3y)Y=3x^2+2xy+3y^2=1,$$
故 $x$ 轴截距 $\dfrac1{3x+y}$、$y$ 轴截距 $\dfrac1{x+3y}$，三角形面积
$$S=\frac12\cdot\frac1{(3x+y)(x+3y)}=\frac{1}{2(3x^2+10xy+3y^2)}=\frac{1}{2(1+8xy)}$$
（末步用 $3x^2+3y^2=1-2xy$）。要使 $S$ 最小，即最大化 $1+8xy$。由对称性，最大值在 $x=y$ 时取得；令 $x=y=t$，代入椭圆 $8t^2=1$，$t=\dfrac1{\sqrt8}$。此时 $S_{\min}=\dfrac{1}{2\left(1+8\cdot\frac18\right)}=\dfrac14$。
【易错点】面积是截距乘积的一半；利用椭圆与面积的对称性可免去繁琐的拉格朗日计算。` },
    { n: 47, q: R`（仅数一要求）已知曲线 $C:\begin{cases}x^2+y^2-2z^2=0,\\x+y+3z=5.\end{cases}$ 求 $C$ 上距离 $xOy$ 面最远的点和最近的点。`, a: R`$(-5,-5,5)$，$(1,1,1)$。`, sol: R`【思路】距离 $xOy$ 面即 $|z|$，转化为求 $z$ 在两条约束下的最值。
【详解】令 $F=z+\lambda(x^2+y^2-2z^2)+\mu(x+y+3z-5)$，
$$F_x=2\lambda x+\mu=0,\quad F_y=2\lambda y+\mu=0,\quad F_z=1-4\lambda z+3\mu=0.$$
由前两式相减得 $2\lambda(x-y)=0$。若 $\lambda=0$ 则 $\mu=0$，$F_z=1\neq0$，无解，故 $\lambda\neq0$，从而 $x=y$。
代入 $x^2+y^2-2z^2=0$ 得 $2x^2-2z^2=0$，即 $x=\pm z$；代入 $x+y+3z=5$ 得 $2x+3z=5$。
$x=z$ 时 $5z=5$，$z=1$，得 $(1,1,1)$；$x=-z$ 时 $-2z+3z=5$，$z=5$，得 $(-5,-5,5)$。
故距 $xOy$ 面最远点为 $(-5,-5,5)$（$|z|=5$），最近点为 $(1,1,1)$（$|z|=1$）。
【易错点】「距离 $xOy$ 面」是 $|z|$；由 $F_x=F_y$ 推出 $x=y$ 是简化关键。` },
    { n: 48, q: R`（仅数一要求）求椭球面 $\dfrac{x^2}{3}+\dfrac{y^2}{2}+z^2=1$ 被平面 $x+y+z=0$ 截得的椭圆长半轴与短半轴之长。`, a: R`提示：$L(x,y,z,\lambda,\mu)=x^2+y^2+z^2+\lambda\left(\dfrac{x^2}{3}+\dfrac{y^2}{2}+z^2\right)+\mu(x+y+z)$，$\lambda=\dfrac{-11\pm\sqrt{13}}{6}=-d^2$，$d_{\max}=\sqrt{\dfrac{11+\sqrt{13}}{6}}$，$d_{\min}=\sqrt{\dfrac{11-\sqrt{13}}{6}}$。`, sol: R`【思路】椭圆的长、短半轴就是原点到截面上点的距离的最大值、最小值；用拉格朗日乘数法求 $d^2=x^2+y^2+z^2$ 在两个约束下的最值。
【详解】令
$$L=x^2+y^2+z^2+\lambda\left(\frac{x^2}{3}+\frac{y^2}{2}+z^2-1\right)+\mu(x+y+z),$$
$$L_x=2x+\frac{2\lambda}{3}x+\mu=0,\quad L_y=2y+\lambda y+\mu=0,\quad L_z=2z+2\lambda z+\mu=0.$$
由三式消去 $\mu$（设 $\mu\neq0$，取 $-\mu=1$）得
$$x=\frac{1}{2+\frac{2\lambda}{3}},\quad y=\frac{1}{2+\lambda},\quad z=\frac{1}{2+2\lambda}.$$
代入 $x+y+z=0$，通分整理得 $3\lambda^2+11\lambda+9=0$，解得
$$\lambda=\frac{-11\pm\sqrt{13}}{6}.$$
对应 $d^2=x^2+y^2+z^2$ 的两个极值，即长、短半轴之长为
$$d_{\max}=\sqrt{\frac{11+\sqrt{13}}{6}},\qquad d_{\min}=\sqrt{\frac{11-\sqrt{13}}{6}}.$$
【易错点】把「半轴长」转化为「原点到截面距离的极值」；消 $\mu$ 时利用三个一次方程是解题主线。` },
    { n: 49, q: R`已知 $p>1$，$\dfrac{1}{p}+\dfrac{1}{q}=1$，$x,y>0$。求证：$xy\leqslant\dfrac{x^p}{p}+\dfrac{x^q}{q}$。`, a: R`提示：求函数 $xy$ 在条件 $\dfrac{x^p}{p}+\dfrac{y^q}{q}=k$ $(k>0)$ 下的最大值。`, sol: R`【思路】用条件极值证明不等式：固定右端为 $k$，证明左端最大值不超过 $k$。
【详解】任取 $k>0$，求 $xy$ 在条件 $\dfrac{x^p}{p}+\dfrac{y^q}{q}=k$ 下的最大值。令
$$F=xy+\lambda\left(\frac{x^p}{p}+\frac{y^q}{q}-k\right),$$
$$F_x=y+\lambda x^{p-1}=0,\quad F_y=x+\lambda y^{q-1}=0.$$
消去 $\lambda$：$\dfrac{y}{x^{p-1}}=\dfrac{x}{y^{q-1}}$，即 $y^q=x^p$。代入约束：
$$x^p\left(\frac1p+\frac1q\right)=x^p=k,$$
故 $x^p=y^q=k$，此时 $xy=k^{1/p}k^{1/q}=k^{1/p+1/q}=k$。由于该约束下最大值存在且唯一驻点即为最大值点，故
$$xy\leqslant k=\frac{x^p}{p}+\frac{y^q}{q}.$$
【易错点】利用 $\dfrac1p+\dfrac1q=1$ 才能把 $xy$ 化简为 $k$；这是 Young 不等式的条件极值证法。` },
    { n: 50, q: R`（仅数三要求）某企业为生产甲、乙两种型号的产品投入的固定成本为 10000（万元）。设该企业生产甲、乙两种产品的产量分别为 $x$（件）和 $y$（件），且这两种产品的边际成本分别为 $20+\dfrac{x}{2}$（万元/件）与 $6+y$（万元/件）。
1）求生产甲、乙两种产品的总成本函数 $C(x,y)$（万元）；
2）当总产量为 50 件时，甲、乙两种产品的产量各为多少时可使总成本最小？求最小成本；
3）求总产量为 50 件且总成本最小时甲产品的边际成本，并解释其经济意义。`, a: R`1) $C(x,y)=10000+20x+\dfrac{x^2}{4}+6y+\dfrac{y^2}{2}$；2) $C_{\min}(24,26)=11118$（万元）；3) $\left.\dfrac{\partial C}{\partial x}\right|_{\substack{x=24\\y=26}}=32$，其经济意义为：当生产乙产品 26 件时，生产第 25 件甲产品需 32 万元。`, sol: R`【思路】边际成本对产量积分得总成本（再加固定成本）；总产量固定是条件极值。
【详解】1）由边际成本
$$C_x=20+\frac{x}{2},\qquad C_y=6+y,$$
积分得 $C=10000+20x+\dfrac{x^2}{4}+6y+\dfrac{y^2}{2}$（10000 为固定成本）。
2）约束 $x+y=50$，即 $y=50-x$，代入：
$$C(x)=10000+20x+\frac{x^2}{4}+6(50-x)+\frac{(50-x)^2}{2}=11550-36x+\frac{3x^2}{4}.$$
令 $C'(x)=-36+\dfrac{3x}{2}=0$，得 $x=24$，$y=26$。$C''=\dfrac32>0$ 为极小，故
$$C_{\min}=11550-36\times24+\frac{3\times24^2}{4}=11550-864+432=11118\ (\text{万元}).$$
3）$C_x\big|_{(24,26)}=20+\dfrac{24}{2}=32$。经济意义：在乙产品产量为 26 件的条件下，再生产 1 件甲产品约需增加成本 32 万元。
【易错点】固定成本 10000 别漏；边际成本就是总成本对产量的偏导数，积分即可还原。` },
    { n: 51, q: R`（仅数学三要求）某厂生产两种产品，当产量分别为 $x$ 和 $y$（吨）时，总效益函数为 $R(x,y)=27x+42y-x^2-2xy-4y^2$。总成本函数为 $C(x,y)=36+12x+8y$（万元），生产甲种产品每吨需支付排污费 1 万元，生产乙种产品每吨需支付排污费 2 万元。
1）在不限排污支出的情况下，两种产品的产量各为多少时总利润最大？最大利润是多少？
2）若限制排污总支出为 6 万元，两种产品产量各为多少时总利润最大？最大利润为多少？`, a: R`1) $x=4$，$y=3$，$L_{\max}=40$（万元）；2) $x=2$，$y=2$，$L_{\max}=28$（万元）。`, sol: R`【思路】先写出含排污费的利润函数，再分别做无约束与条件极值。
【详解】排污费为 $x+2y$，故利润
$$L=R-C-(x+2y)=-x^2-2xy-4y^2+14x+32y-36.$$
1）无约束：令
$$L_x=-2x-2y+14=0,\quad L_y=-2x-8y+32=0.$$
由第一式 $x+y=7$，由第二式 $x+4y=16$，相减得 $3y=9$，$y=3$，$x=4$。此时
$$L(4,3)=-16-24-36+56+96-36=40\ (\text{万元}).$$
2）约束 $x+2y=6$。令 $F=L+\lambda(x+2y-6)$，
$$F_x=-2x-2y+14+\lambda=0,\quad F_y=-2x-8y+32+2\lambda=0.$$
由第一式 $\lambda=2x+2y-14$，代入第二式：$-2x-8y+32+2(2x+2y-14)=0$，即 $2x-4y+4=0$，$x=2y-2$。与 $x+2y=6$ 联立得 $4y=8$，$y=2$，$x=2$。此时
$$L(2,2)=-4-8-16+28+64-36=28\ (\text{万元}).$$
【易错点】排污费要计入成本；第 2）问的总利润是扣除排污费后的值。` },
    { n: 52, q: R`设 $f(x,y)$ 在圆域 $x^2+y^2\leqslant1$ 上有连续一阶偏导数，且 $|f(x,y)|\leqslant1$。求证在单位圆内至少有一点 $(x_0,y_0)$ 可使 $\left[\dfrac{\partial f(x_0,y_0)}{\partial x}\right]^2+\left[\dfrac{\partial f(x_0,y_0)}{\partial y}\right]^2<16.$`, a: R`提示：考虑辅助函数 $g(x,y)=f(x,y)+2(x^2+y^2)$。`, sol: R`【思路】构造辅助函数 $g=f+2(x^2+y^2)$，使它在边界上不小于 $1$、在原点不大于 $1$，从而内部取到最小值，在极小点处梯度为零，得到所需估计。
【详解】令 $g(x,y)=f(x,y)+2(x^2+y^2)$。$g$ 在有界闭圆域上连续，故在内部或边界取最小值。
在边界 $x^2+y^2=1$ 上：$g=f+2\geqslant-1+2=1$；
在原点：$g(0,0)=f(0,0)\leqslant1$。
故最小值 $\min g\leqslant1$。若最小值在边界取得，则最小值为 $1$，而此时 $g(0,0)\leqslant1$ 也取到该最小值，即 $(0,0)$ 也是最小值点；无论如何，总存在内部点 $(x_0,y_0)$ 使 $g$ 取最小值（若 $(0,0)$ 即为此点）。在内部极小点处
$$g_x=f_x+4x=0,\quad g_y=f_y+4y=0,$$
即 $f_x=-4x_0$，$f_y=-4y_0$。于是
$$\left[\frac{\partial f}{\partial x}\right]^2+\left[\frac{\partial f}{\partial y}\right]^2=16(x_0^2+y_0^2)<16\quad(\text{因 }x_0^2+y_0^2<1).$$
【易错点】关键是 $g$ 的选取：边界 $\geqslant1$、原点 $\leqslant1$，保证最小值不在边界严格取得，从而内部存在梯度为零的点。` }
  ];
})();
