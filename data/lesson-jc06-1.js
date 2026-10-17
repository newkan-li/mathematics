window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["jc06_s0"] = {
    id: "jc06_s0",
    ch: "第八章 微分方程",
    title: "第一节 一阶微分方程",
    book: "李永乐《数学复习全书·基础篇》",
    pages: [197, 201],
    img: "assets/img/jichu",
    content: [
      { p: 197, md: R`# 第八章 微分方程

## 本章考点

常微分方程的基本概念　变量可分离的微分方程　齐次微分方程　一阶线性微分方程　线性微分方程解的性质及解的结构定理　二阶常系数齐次线性微分方程　简单的二阶常系数非齐次线性微分方程　微分方程的简单应用

（仅数学一）伯努利（Bernoulli）方程　全微分方程　可用简单的变量代换求解的某些微分方程　欧拉（Euler）方程

（仅数学一、二）可降阶的高阶微分方程　高于二阶的某些常系数齐次线性微分方程

（仅数学三）差分与差分方程　差分方程的通解与特解　一阶常系数线性差分方程的求解

## 第一节 一阶微分方程

### 一、微分方程的概念

含有未知函数、未知函数的导函数与自变量之间关系的方程，叫做微分方程；未知函数导函数的最高阶数称为该微分方程的阶；未知函数是一元函数的微分方程称为常微分方程．

方程
\[
y^{(n)}=f(x,y,y',\cdots,y^{(n-1)}) \tag{1}
\]
或
\[
F(x,y,y',\cdots,y^{(n)})=0 \tag{2}
\]
称 \(n\) 阶微分方程，其中 \(x,y,y',\cdots,y^{(n-1)}\) 可以没有，但必须含有 \(y^{(n)}\)，\(n=1\) 时称一阶微分方程．

设 \(y=\varphi(x)\) 在区间 \((a,b)\) 上连续且有直到 \(n\) 阶的导数，使
\[
\varphi^{(n)}(x)\equiv f[x,\varphi(x),\varphi'(x),\cdots,\varphi^{(n-1)}(x)]
\]
或
\[
F[x,\varphi(x),\varphi'(x),\cdots,\varphi^{(n)}(x)]\equiv 0
\]
则称 \(y=\varphi(x)\) 为该微分方程在区间 \((a,b)\) 上的一个解．

如果含有 \(n\) 个独立的任意常数的函数
\[
y=\varphi(x,C_1,\cdots,C_n),\quad a<x<b
\]
是 \(n\) 阶微分方程 (1) 或 (2) 的解，则称它为该微分方程的通解．不含任意常数的解称特解．条件
\[
y(x_0)=y_0,\ y'(x_0)=y_0',\cdots,y^{(n-1)}(x_0)=y_0^{(n-1)}
\]
称为 \(n\) 阶微分方程的初始条件（也称初值条件），其中 \(y_0,y_0',\cdots,y_0^{(n-1)}\) 为 \(n\) 个给定的数．

一般，由初始条件确定通解中的任意常数就得到相应的一个特解．` },
      { p: 198, md: R`**例1**　判断 \(y=\frac{C-x^2}{2x}\) 是否是常微分方程
\[
y'=-\frac{x+y}{x}
\]
的解，若是解，是通解还是特解？

**【解】**　\(y=\frac{C-x^2}{2x},y'=-\frac{C+x^2}{2x^2}\)，代入常微分方程可使等式成立．故 \(y=\frac{C-x^2}{2x}\) 是该常微分方程的解．因为 \(y=\frac{C-x^2}{2x}\) 含有一个任意常数，所以这是通解．

**【评注】**　一阶常微分方程加一个初始条件可以构成一阶常微分方程的初值问题，例如
\[
\begin{cases}
y'=-\frac{x+y}{x},\\
y(1)=4
\end{cases}
\]
\[
y(1)=\frac{C-1^2}{2\times1}=4,\quad C=9.
\]
因此该初值问题的解为 \(y=\frac{9-x^2}{2x}\)．

### 二、几种特殊类型的一阶微分方程及其解法

#### 1.变量可分离的微分方程

微分方程 \(\frac{\mathrm{d}y}{\mathrm{d}x}=h(x)g(y)\) 称变量可分离的方程，分离变量
\[
\frac{\mathrm{d}y}{g(y)}=h(x)\mathrm{d}x
\]
两边积分便得通解
\[
\int\frac{\mathrm{d}y}{g(y)}=\int h(x)\mathrm{d}x+C.
\]

**【注】**　在解微分方程时约定，套上积分号后立即将任意常数 \(C\) 添上以免将来忘记．此点约定与不定积分不一样（做不定积分时总是要到积分做完后才添常数 \(C\)）．

**例2**　求初值问题的解
\[
\begin{cases}
y'=-\frac{xy}{x+1},\\
y(0)=1.
\end{cases}
\]

**【解】**　常微分方程可改写为
\[
\frac{\mathrm{d}y}{\mathrm{d}x}=-\frac{x}{x+1}\cdot y \tag{①}
\]
是变量可分离型方程，
\[
\frac{\mathrm{d}y}{y}=-\frac{x}{x+1}\mathrm{d}x \tag{②}
\]
两边积分
\[
\ln|y|=\ln|x+1|-x+C_1
\]
其中 \(C_1\) 为任意实数，两边取指数得到
\[
|y|=e^{C_1}|x+1|e^{-x}=C_2|x+1|e^{-x}
\]
其中 \(C_2=e^{C_1}\) 为正实数，去掉绝对值 \(y=\pm C_2(x+1)e^{-x}=C_3(x+1)e^{-x},C_3=\pm C_2\) 为非零实数．显然可以看出 \(y=0\) 是微分方程的一个解，因此原微分方程的通解为` },
      { p: 199, md: R`\[
y=C(x+1)e^{-x},C\in\mathbb{R}
\]
考虑初始条件
\[
y(0)=C(0+1)e^{-0}=1,
\]
解得 \(C=1\)．故初值问题的特解为 \(y=(x+1)e^{-x}\)．

**【评注】**　由方程①变到方程②，等式两边同除了 \(y\)，此时要加限制条件 \(y\ne0\)．在最后一定要考虑 \(y=0\) 是否是方程的解，试着求微分方程
\[
y'=(y-1)^2\cos x
\]
的通解，看看 \(y=1\) 是否是方程的解．

#### 2.齐次微分方程

微分方程
\[
\frac{\mathrm{d}y}{\mathrm{d}x}=f(x,y) \tag{3}
\]
中的 \(f(x,y)\)，若命 \(y=ux\)，当 \(x\ne0\) 时，可将它化为
\[
f(x,y)=f(x,ux)=\varphi(u)\quad(\text{与 }x\text{ 无关})
\]
则称 (3) 为齐次微分方程．其解法是，命 \(y=ux\) 以新的未知函数 \(u\) 代替原未知函数 \(y\)，得
\[
u+x\frac{\mathrm{d}u}{\mathrm{d}x}=\varphi(u),
\]
\[
x\frac{\mathrm{d}u}{\mathrm{d}x}=\varphi(u)-u,
\]
分离变量，积分得
\[
\int\frac{\mathrm{d}u}{\varphi(u)-u}=\int\frac{\mathrm{d}x}{x}+C=\ln|x|+C,
\]
设左边为 \(\Phi(u)\)，再命 \(u=\frac{y}{x}\) 代回，得通解
\[
\Phi\left(\frac{y}{x}\right)=\ln|x|+C.
\]

**例3**　求解初值问题
\[
\begin{cases}
y'=\frac{y}{x}+\tan\frac{y}{x},\\
y(1)=\frac{\pi}{2}.
\end{cases}
\]

**【解】**　命 \(u=\frac{y}{x}\)，则 \(y=ux,\ y'=u'x+u\)．代入常微分方程
\[
u+xu'=u+\tan u
\]
\[
x\frac{\mathrm{d}u}{\mathrm{d}x}=\tan u \tag{①}
\]
\[
\frac{\mathrm{d}u}{\tan u}=\frac{\mathrm{d}x}{x}\quad(\tan u\ne0)
\]
\[
\ln|\sin u|=\ln|x|+C_1
\]
\[
\sin u=\pm e^{C_1}x
\]
显然，\(u=0\) 是方程①的解，故方程①的通解为
\[
\sin u=Cx,\quad C\in\mathbb{R}
\]
原方程的通解为 \(y=x\arcsin(Cx)\)，

代入初始条件 \(y(1)=\frac{\pi}{2}\)，解得 \(C=1\)，因此初值问题的解为 \(y=x\arcsin x\)．` },
      { p: 200, md: R`#### 3.一阶线性微分方程

微分方程 \(y'+p(x)y=q(x)\) 称一阶线性微分方程．它的通解是
\[
y=e^{-\int p(x)\mathrm{d}x}\left[\int q(x)e^{\int p(x)\mathrm{d}x}\mathrm{d}x+C\right]
\]
上式中的两个 \(\int p(x)\mathrm{d}x\) 表示同一个原函数，前面已说过，其中不必再添任意常数．

**例4**　求一阶常微分方程 \(y'=2xy+2xe^{x^2}\) 的通解．

**【解】**　写成标准形式
\[
y'-2xy=2xe^{x^2},
\]
\[
p(x)=-2x,\quad q(x)=2xe^{x^2},
\]
因此 \(\int p(x)\mathrm{d}x=-x^2\)，由求解公式，微分方程的通解为
\[
y=e^{x^2}\left[\int 2xe^{x^2}\cdot e^{-x^2}\mathrm{d}x+C\right]=(x^2+C)e^{x^2},
\]
其中 \(C\) 为任意常数．

**例5**　伯努利方程 \(\frac{\mathrm{d}y}{\mathrm{d}x}=\frac{y}{x+y^3}\) 的通解为 ______．

**【解】**　方程变为如下形式 \(\frac{\mathrm{d}x}{\mathrm{d}y}=\frac{x+y^3}{y}=\frac{x}{y}+y^2\)，为一阶线性微分方程，

所以原方程的通解为
\[
x=e^{-\int -\frac{1}{y}\mathrm{d}y}\left(C+\int y^2e^{\int -\frac{1}{y}\mathrm{d}y}\mathrm{d}y\right)=\frac{y^3}{2}+Cy,
\]
其中 \(C\) 为任意常数．

**【评注】**　形如 \(\frac{\mathrm{d}y}{\mathrm{d}x}=\frac{s(y)}{t(y)x+q(y)}\) 的微分方程，一般要考虑将变量 \(x,y\) 的位置对调，变为
\[
\frac{\mathrm{d}x}{\mathrm{d}y}=\frac{t(y)x+q(y)}{s(y)}=\frac{t(y)}{s(y)}x+\frac{q(y)}{s(y)},
\]
这是一个关于变量 \(x\) 为未知函数的一阶线性微分方程．

#### 4.伯努利方程

方程 \(y'+p(x)y=q(x)y^n\)（其中 \(n\ne0,n\ne1\)）称伯努利方程．原式化为 \(y^{-n}\frac{\mathrm{d}y}{\mathrm{d}x}+p(x)y^{1-n}=q(x)\)．命 \(z=y^{1-n}\)，得
\[
\frac{1}{1-n}\cdot\frac{\mathrm{d}z}{\mathrm{d}x}+p(x)z=q(x),
\]
代入线性微分方程的通解公式，然后再代回为 \(y\)，便得原微分方程的通解．

**例6**　求一阶常微分方程 \(y'-y+2\frac{x}{y}=0\) 的通解．

**【解】**　这是一个伯努利方程，其中
\[
p(x)=-1,\quad q(x)=-2x,\quad n=-1
\]
作变换 \(z=y^2,z'=2yy'\)，或 \(y'=\frac{z'}{2y}\) 代入方程
\[
\frac{z'}{2y}-y+\frac{2x}{y}=0
\]
\[
z'-2z+4x=0
\]
这是一个一阶线性常微分方程，由公式可求得` },
      { p: 201, md: R`\[
z=Ce^{2x}+2x+1
\]
原方程的通解为 \(y^2=Ce^{2x}+2x+1\)，其中 \(C\) 为任意常数．

#### 5.全微分方程

若存在二元函数 \(u(x,y)\)，使
\[
\mathrm{d}u(x,y)=P(x,y)\mathrm{d}x+Q(x,y)\mathrm{d}y
\]
则称微分方程
\[
P(x,y)\mathrm{d}x+Q(x,y)\mathrm{d}y=0 \tag{4}
\]
为全微分方程，它的通解为
\[
u(x,y)=C
\]
由曲线积分中有关的定理知，有下述定理：

设 \(D\) 为平面上的一个单连通区域，\(P(x,y)\) 与 \(Q(x,y)\) 在 \(D\) 上连续且有连续的一阶偏导数，则方程 (4) 为全微分方程的充要条件是
\[
\frac{\partial P}{\partial y}=\frac{\partial Q}{\partial x},\quad(x,y)\in D
\]
可以由观察法找 \(u(x,y)\)，或者在路径无关条件下找 \(u(x,y)\)，或者区域 \(D\) 为边平行于坐标轴的矩形条件下，由折线法公式找 \(u(x,y)\)．

**例7**　求 \(\alpha\) 使
\[
(x^4+4xy^\alpha)\mathrm{d}x+(6x^{\alpha-1}y^2-5y^4)\mathrm{d}y=0
\]
为全微分方程，并求该全微分方程的解．

**【解】**　要使上述方程为全微分方程，则
\[
\frac{\partial}{\partial x}(6x^{\alpha-1}y^2-5y^4)=\frac{\partial}{\partial y}(x^4+4xy^\alpha)
\]
\[
6(\alpha-1)x^{\alpha-2}y^2=4\alpha xy^{\alpha-1}
\]
解得 \(\alpha=3\)．故当 \(\alpha=3\) 时，原方程为全微分方程，即存在二元函数 \(u(x,y)\)，使得
\[
\mathrm{d}u=(x^4+4xy^3)\mathrm{d}x+(6x^2y^2-5y^4)\mathrm{d}y
\]
\[
\frac{\partial u}{\partial x}=x^4+4xy^3 \tag{①}
\]
\[
u(x,y)=\frac{x^5}{5}+2x^2y^3+C(y)
\]
\(u(x,y)\) 还应满足
\[
\frac{\partial u}{\partial y}=6x^2y^2-5y^4
\]
即
\[
\frac{\partial}{\partial y}\left(\frac{x^5}{5}+2x^2y^3+C(y)\right)=6x^2y^2-5y^4,
\]
\[
C'(y)=-5y^4
\]
\[
C(y)=-y^5+C
\]
故全微分方程的解为
\[
\frac{x^5}{5}+2x^2y^3-y^5+C=0
\]

**【评注】**　① 式两边对 \(x\) 积分，得
\[
u(x,y)=\int(x^4+4xy^3)\mathrm{d}x=\frac{x^5}{5}+2x^2y^3+C
\]
此时任意常数 \(C\) 只是与 \(x\) 变量无关，可以与 \(y\) 有关，因此写成 \(C(y)\)．

② 还可利用曲线积分法或全微分法求出 \(u(x,y)\)．` },
    ],
    quiz: [{"q": "一阶线性微分方程 $y'+p(x)y=q(x)$ 的通解为", "options": ["$y=e^{-\\int p dx}\\left(\\int q e^{\\int p dx}dx+C\\right)$", "$y=e^{\\int p dx}\\left(\\int q e^{-\\int p dx}dx+C\\right)$", "$y=Ce^{-\\int p dx}$", "$y=\\int q\\,dx+C$"], "answer": 0, "explain": "常数变易法结果。"}, {"q": "方程 $y'=f(x)g(y)$ 的解法是", "options": ["分离变量后两边积分", "直接积分", "令 $u=y/x$", "用特征方程"], "answer": 0, "explain": "可分离变量方程。"}, {"q": "方程 $y'=\\varphi\\left(\\frac yx\\right)$ 通常令", "options": ["$u=y/x$", "$u=xy$", "$u=y^2$", "$u=x+y$"], "answer": 0, "explain": "齐次方程令 $u=y/x$，化为可分离变量。"}, {"q": "$y'=y,\\ y(0)=1$ 的解为", "options": ["$y=e^x$", "$y=e^{-x}$", "$y=1+x$", "$y=x$"], "answer": 0, "explain": "分离变量得 $\\ln y=x+C$，由初值 $C=0$。"}]
  };
})();
