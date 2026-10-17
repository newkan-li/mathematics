window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["jc02_s1"] = {
    id: "jc02_s1",
    ch: "第二章 一元函数微分学",
    title: "第二节 导数与微分的计算",
    book: "李永乐《数学复习全书·基础篇》",
    pages: [68, 85],
    img: "assets/img/jichu",
    content: [
      { p: 68, md: R`\[
\lim_{x\to0}\frac{f(x)}{\sqrt{|x|}}=\lim_{x\to0}\frac{x^3}{\sqrt{|x|}}=0,\qquad
\lim_{x\to0}\frac{f(x)}{x^2}=\lim_{x\to0}\frac{x^3}{x^2}=0,
\]
条件都满足，

但 \(\lim_{x\to0}f(x)=0\ne f(0)\)，则 \(f(x)\) 在 \(x=0\) 处不连续，从而在 \(x=0\) 处不可导.

因而(A)(B)都不正确.

取 \(f(x)=x\)，则 \(\lim_{x\to0}f(x)=0\)，\(f(x)\) 在 \(x=0\) 处可导，但 \(\lim_{x\to0}\frac{f(x)}{x^2}=\lim_{x\to0}\frac{x}{x^2}=\infty\)，

因而(D)也不正确.

而选项(C)正确：由 \(f(x)\) 在 \(x=0\) 处可导知 \(f(x)\) 在 \(x=0\) 处连续，

则 \(\lim_{x\to0}f(x)=f(0)=0\)，从而

\[
\begin{aligned}
\lim_{x\to0}\frac{f(x)}{\sqrt{|x|}}
&=\lim_{x\to0}\frac{f(x)-f(0)}{x}\cdot\frac{x}{\sqrt{|x|}}\\
&=\lim_{x\to0}\frac{f(x)-f(0)}{x-0}\cdot\lim_{x\to0}\frac{x}{\sqrt{|x|}}
=f'(0)\cdot0=0.
\end{aligned}
\]

所以(C)正确，故应选(C).

## 第二节  导数与微分的计算

### 一、导数的计算

#### 1. 基本初等函数的导数公式

\[
\begin{array}{ll}
(1)\ (C)'=0; & (2)\ (x^\alpha)'=\alpha x^{\alpha-1};\\[4pt]
(3)\ (a^x)'=a^x\ln a; & (4)\ (e^x)'=e^x;\\[4pt]
(5)\ (\log_a x)'=\dfrac{1}{x\ln a}; & (6)\ (\ln|x|)'=\dfrac{1}{x};\\[4pt]
(7)\ (\sin x)'=\cos x; & (8)\ (\cos x)'=-\sin x;\\[4pt]
(9)\ (\tan x)'=\sec^2x; & (10)\ (\cot x)'=-\csc^2x;\\[4pt]
(11)\ (\sec x)'=\sec x\tan x; & (12)\ (\csc x)'=-\csc x\cot x;\\[4pt]
(13)\ (\arcsin x)'=\dfrac{1}{\sqrt{1-x^2}}; & (14)\ (\arccos x)'=-\dfrac{1}{\sqrt{1-x^2}};\\[4pt]
(15)\ (\arctan x)'=\dfrac{1}{1+x^2}; & (16)\ (\operatorname{arccot} x)'=-\dfrac{1}{1+x^2}.
\end{array}
\]

#### 2. 四则运算求导法则

设 \(u(x),v(x)\) 在 \(x\) 处可导，则

(1) \([u(x)\pm v(x)]'=u'(x)\pm v'(x)\).

(2) \([u(x)v(x)]'=u'(x)v(x)+u(x)v'(x)\).

(3) \(\left[\dfrac{u(x)}{v(x)}\right]'=\dfrac{u'(x)v(x)-u(x)v'(x)}{v^2(x)}\).

**【注】** （1）和差、乘法的求导公式可推广到有限项的情形：

\[
[u_1(x)\pm u_2(x)\pm\cdots\pm u_n(x)]'=u_1'(x)\pm u_2'(x)\pm\cdots\pm u_n'(x)
\]

\[
[u_1(x)u_2(x)\cdots u_n(x)]'=u_1'(x)u_2(x)\cdots u_n(x)+u_1(x)u_2'(x)\cdots u_n(x)+\cdots
\]` },
      { p: 69, md: R`\[
+u_1(x)u_2(x)\cdots u_n'(x)
\]

(2) \([Cu(x)]'=Cu'(x)\)，其中 \(C\) 为常数.

(3) \([u^m(x)]'=mu^{m-1}(x)u'(x)\).

**例1**  求下列函数的导数

(1) \(f(x)=\dfrac{\sqrt{x}-x^2e^x+3x}{x^2}\). \(\qquad\) (2) \(y=\dfrac{\sin x+\cos x}{\sin x-\cos x}\).

(3) \(y=x\tan x\ln x\).

**【解】** （1）化简得 \(f(x)=x^{-\frac32}-e^x+\dfrac{3}{x}\)，则 \(f'(x)=-\dfrac32x^{-\frac52}-e^x-\dfrac{3}{x^2}\).

(2) 
\[
\begin{aligned}
y'&=\frac{(\sin x+\cos x)'(\sin x-\cos x)-(\sin x+\cos x)(\sin x-\cos x)'}{(\sin x-\cos x)^2}\\
&=\frac{-(\sin x-\cos x)^2-(\sin x+\cos x)^2}{(\sin x-\cos x)^2}
=-\frac{2}{(\sin x-\cos x)^2}.
\end{aligned}
\]

(3) 
\[
\begin{aligned}
y'&=x'\tan x\ln x+x(\tan x)'\ln x+x\tan x(\ln x)'\\
&=\tan x\ln x+x\sec^2x\ln x+\tan x.
\end{aligned}
\]

**例2**  设 \(f(x)=(x-1)(x-2)\cdots(x-50)\)，则 \(f'(1)=\underline{\qquad}\).

**【解】** **方法一**  利用乘法求导法则，得

\[
f'(x)=(x-2)\cdots(x-50)+(x-1)(x-3)\cdots(x-50)+\cdots+(x-1)(x-2)\cdots(x-49)
\]

则 \(f'(1)=(-1)(-2)\cdots(-49)=-49!\)

因求一点的导数，也可将 \(f(x)=(x-1)[(x-2)\cdots(x-50)]\)，

则 \(f'(x)=(x-2)\cdots(x-50)+(x-1)[(x-2)\cdots(x-50)]'\)，

代入 \(x=1\)，得 \(f'(1)=-49!\).

**方法二**  利用导数定义，得

\[
\begin{aligned}
f'(1)&=\lim_{x\to1}\frac{f(x)-f(1)}{x-1}
=\lim_{x\to1}\frac{(x-1)(x-2)\cdots(x-50)}{x-1}\\
&=\lim_{x\to1}(x-2)\cdots(x-50)=-49!.
\end{aligned}
\]

**例3**  （2006，数二）设函数 \(g(x)\) 可微，\(h(x)=e^{1+g(x)}\)，\(h'(1)=1\)，\(g'(1)=2\)，则 \(g(1)\) 等于

(A) \(\ln3-1\). \(\qquad\) (B) \(-\ln3-1\). \(\qquad\) (C) \(-\ln2-1\). \(\qquad\) (D) \(\ln2-1\).

**【解】** 
\[
h'(x)=[e^{1+g(x)}]'=e^{1+g(x)}\cdot[1+g(x)]'=e^{1+g(x)}\cdot g'(x),
\]

则 \(h'(1)=e^{1+g(1)}\cdot g'(1)\)，又 \(h'(1)=1\)，\(g'(1)=2\).

于是有 \(1=e^{1+g(1)}\cdot2\)，即 \(e^{1+g(1)}=\dfrac12\)，

因而 \(1+g(1)=\ln\dfrac12=-\ln2\)，所以 \(g(1)=-\ln2-1\).

故选(C).

**例4**  设 \(f(x)=\sqrt{1+x^3}+e^x+\arcsin\dfrac{x}{1+\sqrt{1+x^2}}\)，则 \(f'(0)=\underline{\qquad}\).

**【解】** 局部利用导数的定义` },
      { p: 70, md: R`\[
\begin{aligned}
f'(0)&=\left.(\sqrt{1+x^3})'\right|_{x=0}
+\left.(e^x)'\right|_{x=0}
+\lim_{x\to0}\frac{\arcsin\dfrac{x}{1+\sqrt{1+x^2}}}{x}\\
&=0+1+\frac12=\frac32.
\end{aligned}
\]

**【注】** 若利用求导法则去求，则运算较复杂.

#### 3. 复合函数的求导法则

若 \(u=\varphi(x)\) 在点 \(x\) 可导，而 \(y=f(u)\) 在对应点 \(u=\varphi(x)\) 可导，则复合函数 \(y=f[\varphi(x)]\) 在点 \(x\) 可导，并且

\[
(f[\varphi(x)])'=f'(u)\varphi'(x)=f'[\varphi(x)]\varphi'(x),
\]

即

\[
\frac{dy}{dx}=\frac{dy}{du}\cdot\frac{du}{dx}.
\]

复合函数对自变量的导数等于复合函数对中间变量的导数乘以中间变量对自变量的导数——链式法则.

**【注】** （1）复合函数求导的链式法则可推广至多个函数复合的情形：

例如 \(y=f(u),u=g(v),v=\varphi(x)\) 复合而成的函数 \(y=f[g(\varphi(x))]\) 的导数为

\[
\frac{dy}{dx}=\frac{dy}{du}\cdot\frac{du}{dv}\cdot\frac{dv}{dx}
=f'(u)\cdot g'(v)\cdot\varphi'(x)
=f'[g(\varphi(x))]g'[\varphi(x)]\cdot\varphi'(x).
\]

（2）复合函数求导数，首先要分清函数的复合层次，按照由外层到内层逐层求导数相乘进行求导，注意不要漏层，特别是不要漏下最内层的导数.同时也不要重复求某层导数.

**例5**  求下列函数的导数

(1) \(y=\arcsin\dfrac{x}{2}\). \(\qquad\) (2) \(y=e^{\cos^2\frac1x}\). \(\qquad\) (3) \(y=\ln(x+\sqrt{x^2+1})\).

**【解】** （1）
\[
\frac{dy}{dx}=\frac{1}{\sqrt{1-\left(\dfrac{x}{2}\right)^2}}\cdot\left(\frac{x}{2}\right)'
=\frac{2}{\sqrt{4-x^2}}\cdot\frac12=\frac{1}{\sqrt{4-x^2}}.
\]

(2)
\[
\begin{aligned}
y'&=e^{\cos^2\frac1x}\cdot\left(\cos^2\frac1x\right)'
=2e^{\cos^2\frac1x}\cdot\cos\frac1x\cdot\left(\cos\frac1x\right)'\\
&=2e^{\cos^2\frac1x}\cdot\cos\frac1x\cdot\left(-\sin\frac1x\right)\cdot\left(\frac1x\right)'\\
&=2e^{\cos^2\frac1x}\cdot\cos\frac1x\cdot\left(-\sin\frac1x\right)\left(-\frac1{x^2}\right)
=\frac1{x^2}\cdot\sin\frac2x\cdot e^{\cos^2\frac1x}.
\end{aligned}
\]

(3)
\[
\begin{aligned}
\frac{dy}{dx}&=\frac{1}{x+\sqrt{x^2+1}}\left(x+\sqrt{x^2+1}\right)'\\
&=\frac{1}{x+\sqrt{x^2+1}}\left(1+\frac{2x}{2\sqrt{x^2+1}}\right)
=\frac{1}{\sqrt{x^2+1}}.
\end{aligned}
\]

**例6**  已知 \(y=f\left(\dfrac{3x-2}{3x+2}\right)\)，\(f'(x)=\arctan x^2\)，则 \(\left.\dfrac{dy}{dx}\right|_{x=0}=\underline{\qquad}\).

**【解】** 
\[
\begin{aligned}
\frac{dy}{dx}&=f'\left(\frac{3x-2}{3x+2}\right)\cdot\left(\frac{3x-2}{3x+2}\right)'
=f'\left(\frac{3x-2}{3x+2}\right)\cdot\frac{3(3x+2)-(3x-2)\cdot3}{(3x+2)^2}\\
&=f'\left(\frac{3x-2}{3x+2}\right)\cdot\frac{12}{(3x+2)^2}
=\frac{12}{(3x+2)^2}\arctan\left(\frac{3x-2}{3x+2}\right)^2.
\end{aligned}
\]` },
      { p: 71, md: R`则 \(\left.\dfrac{dy}{dx}\right|_{x=0}=\dfrac{12}{2^2}\arctan1=\dfrac{3\pi}{4}\).

**例7**  设 \(f(x)\) 可导，求下列函数的导数

(1) \(y=f(e^x+x^2)\). \(\qquad\) (2) \(y=f(\ln x)e^{f(x)}\).

**【解】** （1）\(\dfrac{dy}{dx}=f'(e^x+x^2)\cdot(e^x+x^2)'=(e^x+2x)f'(e^x+x^2)\).

(2)
\[
\begin{aligned}
\frac{dy}{dx}&=[f(\ln x)]'e^{f(x)}+f(\ln x)\cdot[e^{f(x)}]'\\
&=f'(\ln x)\cdot\frac1x e^{f(x)}+f(\ln x)e^{f(x)}f'(x).
\end{aligned}
\]

**【注】** 要注意 \([f(\ln x)]'\) 和 \(f'(\ln x)\) 的区别：

\([f(\ln x)]'\) 是 \(f(u)\) 和 \(u=\ln x\) 先复合为 \(f(\ln x)\)，后对自变量 \(x\) 求导，而 \(f'(\ln x)\) 是 \(f(u)\) 先对 \(u\) 求导得 \(f'(u)\)，再和 \(u=\ln x\) 复合.

二者不是一回事，它们的关系为：

\[
[f(\ln x)]'=f'(\ln x)\cdot\frac1x.
\]

**例8**  设 \(f(u)\) 可导，\(y=f(\sin^2x)+f(\cos^2x)\)，则 \(\left.\dfrac{dy}{dx}\right|_{x=\frac\pi4}=\underline{\qquad}\).

**【解】** 
\[
\begin{aligned}
\frac{dy}{dx}&=f'(\sin^2x)\cdot(\sin^2x)'+f'(\cos^2x)\cdot(\cos^2x)'\\
&=f'(\sin^2x)2\sin x\cos x+f'(\cos^2x)(-2\cos x\sin x)\\
&=f'(\sin^2x)\cdot\sin2x-f'(\cos^2x)\cdot\sin2x,
\end{aligned}
\]

则
\[
\left.\frac{dy}{dx}\right|_{x=\frac\pi4}
=f'\left(\sin^2\frac\pi4\right)\sin\frac\pi2-f'\left(\cos^2\frac\pi4\right)\sin\frac\pi2
=f'\left(\frac12\right)-f'\left(\frac12\right)=0.
\]

故应填0.

**例9**  （2004，数四）设 \(y=\arctan e^x-\ln\sqrt{\dfrac{e^{2x}}{e^{2x}+1}}\)，则 \(\left.\dfrac{dy}{dx}\right|_{x=1}=\underline{\qquad}\).

**【解】** 将函数化简为
\[
\begin{aligned}
y&=\arctan e^x-\frac12\ln e^{2x}+\frac12\ln(e^{2x}+1)\\
&=\arctan e^x-x+\frac12\ln(e^{2x}+1),
\end{aligned}
\]

则
\[
\frac{dy}{dx}=\frac{e^x}{1+e^{2x}}-1+\frac12\cdot\frac{2e^{2x}}{1+e^{2x}}=\frac{e^x-1}{1+e^{2x}},
\]

从而 \(\left.\dfrac{dy}{dx}\right|_{x=1}=\dfrac{e-1}{1+e^2}\).

**例10**  （2011，数三）设 \(f(x)=\lim_{t\to0}x(1+3t)^{\frac xt}\)，则 \(f'(x)=\underline{\qquad}\).

**【解】** 
\[
\begin{aligned}
f(x)&=\lim_{t\to0}x(1+3t)^{\frac xt}
=x\lim_{t\to0}\left[(1+3t)^{\frac1{3t}}\right]^{3x}\\
&=x\left[\lim_{t\to0}(1+3t)^{\frac1{3t}}\right]^{3x}=xe^{3x},
\end{aligned}
\]

则 \(f'(x)=(xe^{3x})'=e^{3x}+3xe^{3x}=(1+3x)e^{3x}\).

**例11**  （2021，数三）若 \(y=\cos e^{-\sqrt x}\)，则 \(\left.\dfrac{dy}{dx}\right|_{x=1}=\underline{\qquad}\).` },
      { p: 72, md: R`**【解】** 
\[
\begin{aligned}
\frac{dy}{dx}&=(-\sin e^{-\sqrt x})\cdot(e^{-\sqrt x})'
=(-\sin e^{-\sqrt x})\cdot e^{-\sqrt x}\cdot\left(-\frac1{2\sqrt x}\right)\\
&=\frac1{2\sqrt x}e^{-\sqrt x}\cdot\sin e^{-\sqrt x},
\end{aligned}
\]

则
\[
\left.\frac{dy}{dx}\right|_{x=1}=\frac12e^{-1}\sin e^{-1}=\frac1{2e}\sin\frac1e.
\]

**例12**  （2012，数三）设函数
\[
f(x)=\begin{cases}
\ln\sqrt x, & x\ge1,\\
2x-1, & x<1,
\end{cases}
\qquad y=f[f(x)],
\]
则 \(\left.\dfrac{dy}{dx}\right|_{x=e}=\underline{\qquad}\).

**【解】** 由复合函数求导法则知 \(\dfrac{dy}{dx}=f'[f(x)]f'(x)\)，又 \(f(e)=\ln\sqrt e=\dfrac12\ln e=\dfrac12\)，

则
\[
\left.\frac{dy}{dx}\right|_{x=e}=f'[f(e)]\cdot f'(e)=f'\left(\frac12\right)f'(e).
\]

又
\[
f'\left(\frac12\right)=\left.(2x-1)'\right|_{x=\frac12}=2,\qquad
f'(e)=\left.(\ln\sqrt x)'\right|_{x=e}=\frac1{2e},
\]

所以
\[
\left.\frac{dy}{dx}\right|_{x=e}=2\cdot\frac1{2e}=\frac1e.
\]

#### 4. 反函数求导法则

设函数 \(y=f(x)\) 在区间 \(I\) 内单调、可导，且 \(f'(x)\ne0\)，则其反函数 \(x=\varphi(y)\) 在对应的区间内可导，并且

\[
\frac{dx}{dy}=\frac{1}{\dfrac{dy}{dx}}
\qquad\text{即}\qquad
\varphi'(y)=\frac{1}{f'(x)}
\]

即：互为反函数的导数互为倒数.

**例13**  证明：（1）\((\arcsin x)'=\dfrac{1}{\sqrt{1-x^2}},(-1<x<1)\).

(2) \((\arctan x)'=\dfrac{1}{1+x^2}\).

**【证】** （1）\(y=\arcsin x(-1<x<1)\) 的反函数为 \(x=\sin y\left(-\dfrac\pi2<y<\dfrac\pi2\right)\)，

由反函数求导法则得
\[
(\arcsin x)'=\frac{1}{(\sin y)'}=\frac{1}{\cos y}
=\frac{1}{\sqrt{1-\sin^2y}}=\frac{1}{\sqrt{1-x^2}},
\]

即 \((\arcsin x)'=\dfrac{1}{\sqrt{1-x^2}},(-1<x<1)\).

(2) \(y=\arctan x\) 的反函数为 \(x=\tan y\)，由反函数求导法则得
\[
(\arctan x)'=\frac{1}{(\tan y)'}=\frac{1}{\sec^2y}
=\frac{1}{1+\tan^2y}=\frac{1}{1+x^2},
\]

所以，\((\arctan x)'=\dfrac{1}{1+x^2}\).` },
      { p: 73, md: R`类似可证得

\[
(\arccos x)'=-\frac{1}{\sqrt{1-x^2}},(-1<x<1)
\]

\[
(\operatorname{arccot} x)'=-\frac{1}{1+x^2}.
\]

#### 5. 隐函数求导法

设 \(y=y(x)\) 是由方程 \(F(x,y)=0\) 所确定的可导函数，求其导数 \(\dfrac{dy}{dx}\).

方程 \(F(x,y)=0\) 两边对 \(x\) 求导数，牢记 \(y\) 是 \(x\) 的函数，由复合函数求导法则和四则运算求导法则，得到一个含有 \(\dfrac{dy}{dx}\) 的方程，从中解出 \(\dfrac{dy}{dx}\) 即可.

**【注】** \(\dfrac{dy}{dx}\) 也可由多元函数微分法中的隐函数求导公式 \(\dfrac{dy}{dx}=-\dfrac{F_x'}{F_y'}\) 得到.

**例14**  函数 \(y=y(x)\) 由方程 \(\arctan\dfrac yx=\ln\sqrt{x^2+y^2}\) 所确定，求 \(\dfrac{dy}{dx}\).

**【解】** 原方程可化为 \(\arctan\dfrac yx=\dfrac12\ln(x^2+y^2)\)，方程两边对 \(x\) 求导得

\[
\frac{1}{1+\left(\dfrac yx\right)^2}\cdot\frac{y'\cdot x-y\cdot1}{x^2}
=\frac12\cdot\frac{1}{x^2+y^2}\cdot(2x+2yy')
\]

解得 \(y'=\dfrac{x+y}{x-y}\)，即 \(\dfrac{dy}{dx}=\dfrac{x+y}{x-y}\).

**例15**  （1999，数二）设函数 \(y=y(x)\) 由方程 \(\ln(x^2+y)=x^3y+\sin x\) 确定，则 \(\left.\dfrac{dy}{dx}\right|_{x=0}=\underline{\qquad}\).

**【解】** 将 \(x=0\) 代入方程得 \(y=1\).方程两边关于 \(x\) 求导得

\[
\frac{1}{x^2+y}\left(2x+\frac{dy}{dx}\right)=3x^2y+x^3\frac{dy}{dx}+\cos x \qquad \text{①}
\]

解得
\[
\frac{dy}{dx}=\frac{2x-(3x^2y+\cos x)(x^2+y)}{x^3(x^2+y)-1},
\]

将 \(x=0,y=1\) 代入上式得 \(\left.\dfrac{dy}{dx}\right|_{x=0}=1\).

**【注】** （1）若在 \(\dfrac{dy}{dx}\) 的表达式中只代入 \(x=0\) 得 \(\left.\dfrac{dy}{dx}\right|_{x=0}=y\)，这是错误的.

当 \(x=0\) 时，\(y\) 唯一确定，由原方程知 \(y=1\)，故
\[
\left.\frac{dy}{dx}\right|_{x=0}=\left.\frac{dy}{dx}\right|_{y=1}=1.
\]

（2）因求一点的导数值，也可不用求出 \(\dfrac{dy}{dx}\) 的表达式，而只需在①式中代入 \(x=0,y=1\)，即可求出 \(\left.\dfrac{dy}{dx}\right|_{x=0}\)，这样可简化计算，节省时间.

**例16**  （2013，数二）设函数 \(y=f(x)\) 由方程 \(\cos(xy)+\ln y-x=1\) 确定，则` },
      { p: 74, md: R`\[
\lim_{n\to\infty}n\left[f\left(\frac2n\right)-1\right]=\underline{\qquad}.
\]

(A) \(2\). \(\qquad\) (B) \(1\). \(\qquad\) (C) \(-1\). \(\qquad\) (D) \(-2\).

**【解】** 由方程 \(\cos(xy)+\ln y-x=1\) 可得当 \(x=0\) 时，\(y=1\)，即 \(f(0)=1\).方程两边关于 \(x\) 求导得

\[
(-\sin xy)\left(y+x\frac{dy}{dx}\right)+\frac1y\frac{dy}{dx}-1=0,
\]

将 \(x=0,y=1\) 代入得 \(\left.\dfrac{dy}{dx}\right|_{x=0}=1\)，即 \(f'(0)=1\).

由导数定义可知
\[
\begin{aligned}
\lim_{n\to\infty}n\left[f\left(\frac2n\right)-1\right]
&=2\lim_{n\to\infty}\frac{f\left(\dfrac2n\right)-1}{\dfrac2n}\\
&=2\lim_{n\to\infty}\frac{f\left(\dfrac2n\right)-f(0)}{\dfrac2n}
=2f'(0)=2.
\end{aligned}
\]

故选(A).

**例17**  求曲线 \(x^2+xy+y^2=4\) 在点 \((2,-2)\) 处的切线方程和法线方程.

**【解】** 方程 \(x^2+xy+y^2=4\) 两边关于 \(x\) 求导得

\[
2x+y+x\frac{dy}{dx}+2y\frac{dy}{dx}=0,
\]

将 \(x=2,y=-2\) 代入上式解得 \(\dfrac{dy}{dx}=1\)，即 \(\left.\dfrac{dy}{dx}\right|_{\substack{x=2\\y=-2}}=1\).

由导数的几何意义知，曲线过 \((2,-2)\) 点的切线斜率为 \(k=\left.\dfrac{dy}{dx}\right|_{\substack{x=2\\y=-2}}=1\)，

则切线方程为 \(y-(-2)=1\cdot(x-2)\)，即 \(y=x-4\).

法线方程为 \(y-(-2)=-1(x-2)\)，即 \(y=-x\).

**例18**  （2020，数三）曲线 \(x+y+e^{2xy}=0\) 在点 \((0,-1)\) 处的切线方程为 \(\underline{\qquad}\).

**【解】** 对方程 \(x+y+e^{2xy}=0\) 两边关于 \(x\) 求导得

\[
1+\frac{dy}{dx}+e^{2xy}\cdot\left(2y+2x\frac{dy}{dx}\right)=0
\]

将 \(x=0,y=-1\) 代入上式得 \(\left.\dfrac{dy}{dx}\right|_{x=0}=1\)，

则切线斜率为 \(k=\left.\dfrac{dy}{dx}\right|_{x=0}=1\)，

所以曲线过 \((0,-1)\) 点的切线方程为 \(y-(-1)=x\)，即 \(y=x-1\).

#### 6. 对数求导法

对数求导法是将函数等式两边同时取对数，化为隐函数形式，再按照隐函数求导法求导数.

对数求导法常用于幂指函数的求导数，以及多个因式的乘除、乘幂及开方求导数.

幂指函数 \(y=f(x)^{g(x)}\) 的求导数，常用下面两种方法：

**方法一**  对数求导法

两边取自然对数得 \(\ln y=g(x)\ln f(x)\)，` },
      { p: 75, md: R`方程两边对 \(x\) 求导得 \(\frac{1}{y}y'=g'(x)\ln f(x)+g(x)\frac{1}{f(x)}f'(x)\)，

解出 \(y'\)，并将 \(y=f(x)^{g(x)}\) 代入得

\[
y'=f(x)^{g(x)}\left[g'(x)\ln f(x)+g(x)\cdot\frac{f'(x)}{f(x)}\right].
\]

**方法二**　复合函数求导法

将函数取指数变形为 \(y=f(x)^{g(x)}=\mathrm{e}^{g(x)\ln f(x)}\)，再按照复合函数求导数即可.

**例19**　设 \(y=(\sin x)^x\)，求 \(\frac{dy}{dx}\).

**【解】**　**方法一**　两边取对数得 \(\ln y=x\ln\sin x\)，

方程两边对 \(x\) 求导数得 \(\frac{1}{y}\frac{dy}{dx}=\ln\sin x+x\frac{1}{\sin x}\cos x\)，

解得 \(\frac{dy}{dx}=y(\ln\sin x+x\cot x)=(\sin x)^x(\ln\sin x+x\cot x)\).

**方法二**　\(y=(\sin x)^x=\mathrm{e}^{x\ln\sin x}\)，

则 \(\frac{dy}{dx}=\mathrm{e}^{x\ln\sin x}(x\ln\sin x)'=(\sin x)^x\left(\ln\sin x+x\frac{1}{\sin x}\cos x\right)\)

\(=(\sin x)^x(\ln\sin x+x\cot x)\).

**例20**　设 \(y=(x-1)^2\sqrt[3]{\frac{(x+1)(x^2-3)}{(1+4x)^2}}\)，求 \(\frac{dy}{dx}\).

**【解】**　两边取对数得 \(\ln y=2\ln(x-1)+\frac{1}{3}[\ln(x+1)+\ln(x^2-3)-2\ln(1+4x)]\)，

方程两边对 \(x\) 求导得 \(\frac{1}{y}\frac{dy}{dx}=\frac{2}{x-1}+\frac{1}{3(x+1)}+\frac{2x}{3(x^2-3)}-\frac{8}{3(1+4x)}\).

则

\[
\frac{dy}{dx}=y\left[\frac{2}{x-1}+\frac{1}{3(x+1)}+\frac{2x}{3(x^2-3)}-\frac{8}{3(1+4x)}\right]
\]

\[
=(x-1)^2\sqrt[3]{\frac{(x+1)(x^2-3)}{(1+4x)^2}}\left[\frac{2}{x-1}+\frac{1}{3(x+1)}+\frac{2x}{3(x^2-3)}-\frac{8}{3(1+4x)}\right].
\]

**例21**　设 \(y=\frac{(\ln x)^x}{x^{\ln x}}\)，则 \(\left.\frac{dy}{dx}\right|_{x=\mathrm{e}}=\underline{\qquad}\).

**【解】**　两边取对数得 \(\ln y=x\ln(\ln x)-(\ln x)^2\)，

方程两边对 \(x\) 求导数得 \(\frac{1}{y}\frac{dy}{dx}=\ln(\ln x)+x\cdot\frac{1}{\ln x}\cdot\frac{1}{x}-2(\ln x)\cdot\frac{1}{x}\)　②

则 \(\frac{dy}{dx}=y\left[\ln(\ln x)+\frac{1}{\ln x}-\frac{2}{x}\ln x\right]=\frac{(\ln x)^x}{x^{\ln x}}\left[\ln(\ln x)+\frac{1}{\ln x}-\frac{2}{x}\ln x\right]\)，

于是 \(\left.\frac{dy}{dx}\right|_{x=\mathrm{e}}=\frac{1}{\mathrm{e}}\left[\ln(\ln\mathrm{e})+\frac{1}{\ln\mathrm{e}}-\frac{2}{\mathrm{e}}\ln\mathrm{e}\right]=\frac{1}{\mathrm{e}}\left(1-\frac{2}{\mathrm{e}}\right)=\frac{\mathrm{e}-2}{\mathrm{e}^2}\).

**【注】**　也可不用写出 \(\frac{dy}{dx}\) 的表达式，由 \(x=\mathrm{e}\) 得 \(y=\frac{1}{\mathrm{e}}\)，将 \(x=\mathrm{e},y=\frac{1}{\mathrm{e}}\) 代入②式，直接求出 \(\left.\frac{dy}{dx}\right|_{x=\mathrm{e}}=\frac{1}{\mathrm{e}}\left(1-\frac{2}{\mathrm{e}}\right)\) 即可.` },
      { p: 76, md: R`**例22**　已知 \(\sqrt[x]{y}=\sqrt[y]{x}\) 确定 \(y\) 是 \(x\) 的函数，求 \(\frac{dy}{dx}\).

**【解】**　方程 \(\sqrt[x]{y}=\sqrt[y]{x}\) 两边取对数得 \(\frac{1}{x}\ln y=\frac{1}{y}\ln x\)，即 \(y\ln y=x\ln x\)，

方程两边对 \(x\) 求导数得 \(\frac{dy}{dx}\cdot\ln y+y\cdot\frac{1}{y}\frac{dy}{dx}=\ln x+x\cdot\frac{1}{x}\)，

解得 \(\frac{dy}{dx}=\frac{1+\ln x}{1+\ln y}\).

### 7. 参数方程确定的函数求导法（数学三不要求）

设 \(y=y(x)\) 是由参数方程 \(\begin{cases}x=\varphi(t)\\ y=\psi(t)\end{cases}\) 所确定的函数，其中 \(\varphi(t)\) 和 \(\psi(t)\) 都可导，且 \(\varphi'(t)\neq0\)，则由复合函数和反函数求导法则可推出

\[
\frac{dy}{dx}=\frac{\frac{dy}{dt}}{\frac{dx}{dt}}=\frac{\psi'(t)}{\varphi'(t)}.
\]

**例23**　设 \(y=y(x)\) 由参数方程 \(\begin{cases}x=t-\ln(1+t)\\ y=t^3+t^2\end{cases}\) 所确定，求 \(\frac{dy}{dx}\).

**【解】**　由参数方程确定函数的求导公式得

\[
\frac{dy}{dx}=\frac{(t^3+t^2)'}{[t-\ln(1+t)]'}=\frac{3t^2+2t}{1-\frac{1}{1+t}}=(1+t)(3t+2)=3t^2+5t+2.
\]

**例24**　（2013，数二）曲线 \(\begin{cases}x=\arctan t\\ y=\ln\sqrt{1+t^2}\end{cases}\) 上对应于 \(t=1\) 的点处的法线方程为 \underline{\qquad}.

**【解】**

\[
\frac{dy}{dx}=\frac{(\ln\sqrt{1+t^2})'}{(\arctan t)'}=\frac{\frac{1}{2}\cdot\frac{1}{1+t^2}\cdot2t}{\frac{1}{1+t^2}}=t,
\]

则 \(\left.\frac{dy}{dx}\right|_{t=1}=1\)，

由题设知，曲线上对应于 \(t=1\) 的点为 \(\left(\frac{\pi}{4},\frac{1}{2}\ln2\right)\)，法线斜率为 \(k=-1\).

则曲线过 \(\left(\frac{\pi}{4},\frac{1}{2}\ln2\right)\) 的法线方程为 \(y-\frac{1}{2}\ln2=-1\left(x-\frac{\pi}{4}\right)\)，即

\[
y=-x+\frac{\pi}{4}+\frac{1}{2}\ln2.
\]

**例25**　曲线 \(\begin{cases}x=\mathrm{e}^t\sin t\\ y=\mathrm{e}^t\cos t\end{cases}\) 在 \(t=\frac{\pi}{2}\) 对应点处的切线方程为 \underline{\qquad}.

**【解】**　曲线对应 \(t=\frac{\pi}{2}\) 处的切点为 \(\left(\mathrm{e}^{\frac{\pi}{2}},0\right)\)，

又

\[
\frac{dy}{dx}=\frac{(\mathrm{e}^t\cos t)'}{(\mathrm{e}^t\sin t)'}=\frac{\mathrm{e}^t\cos t-\mathrm{e}^t\sin t}{\mathrm{e}^t\sin t+\mathrm{e}^t\cos t}=\frac{\cos t-\sin t}{\sin t+\cos t},
\]` },
      { p: 77, md: R`则切线斜率为 \(k=\left.\frac{dy}{dx}\right|_{t=\frac{\pi}{2}}=\frac{\cos\frac{\pi}{2}-\sin\frac{\pi}{2}}{\sin\frac{\pi}{2}+\cos\frac{\pi}{2}}=-1\)，

所以，曲线在 \(t=\frac{\pi}{2}\) 对应点处的切线方程为

\[
y-0=-1\left(x-\mathrm{e}^{\frac{\pi}{2}}\right),
\]

即 \(y=-x+\mathrm{e}^{\frac{\pi}{2}}\)，故应填 \(y=-x+\mathrm{e}^{\frac{\pi}{2}}\).

### 8. 分段函数求导数

对于分段函数，求导数一般按如下步骤：

**第一步**　对于定义域内每个分段区间内的函数按常规求导法则求出导函数（不含分段点）.

**第二步**　对于每个分段点处的导数，要按导数定义或左、右导数定义进行计算，从而判断函数在分段点处是否可导及导数值.

**第三步**　写出最后的导数结果.

也可利用如下结论：

设 \(f(x)=\begin{cases}g(x),&x\leqslant x_0,\\ h(x),&x>x_0,\end{cases}\) 若 \(f(x)\) 在 \(x_0\) 处连续且 \(\lim\limits_{x\to x_0^-}g'(x)=\lim\limits_{x\to x_0^+}h'(x)=A\)，则 \(f'(x_0)=A\).

**例26**　设 \(f(x)=\begin{cases}x-1,&x\leqslant0\\ 2x^2-1,&0<x\leqslant1\\ 4x-3,&x>1\end{cases}\)，求 \(f'(x)\).

**【解】**　\(f(x)\) 为分段函数，其分段点为 \(x=0,x=1\).

当 \(x<0\) 时，\(f'(x)=(x-1)'=1\)，

当 \(0<x<1\) 时，\(f'(x)=(2x^2-1)'=4x\)，

当 \(x>1\) 时，\(f'(x)=(4x-3)'=4\).

对于 \(x=0\)，

\[
f'_-(0)=\lim_{x\to0^-}\frac{f(x)-f(0)}{x-0}=\lim_{x\to0^-}\frac{x-1-(-1)}{x}=1,
\]

\[
f'_+(0)=\lim_{x\to0^+}\frac{f(x)-f(0)}{x-0}=\lim_{x\to0^+}\frac{2x^2-1-(-1)}{x}=0,
\]

因 \(f'_-(0)\neq f'_+(0)\)，所以 \(f(x)\) 在 \(x=0\) 点不可导.

对于 \(x=1\)，

\[
f'_-(1)=\lim_{x\to1^-}\frac{f(x)-f(1)}{x-1}=\lim_{x\to1^-}\frac{2x^2-1-1}{x-1}=\lim_{x\to1^-}2(x+1)=4,
\]

\[
f'_+(1)=\lim_{x\to1^+}\frac{f(x)-f(1)}{x-1}=\lim_{x\to1^+}\frac{4x-3-1}{x-1}=4,
\]

所以，\(f'(1)=4\).

于是有

\[
f'(x)=\begin{cases}1,&x<0\\ 4x,&0<x<1\\ 4,&x\geqslant1\end{cases}
\]

**【注】**　在 \(x=1\) 处，\(f(x)\) 连续，且 \(\lim\limits_{x\to1^-}(2x^2-1)'=4,\lim\limits_{x\to1^+}(4x-3)'=4\)，则 \(f'(1)=4\).` },
      { p: 78, md: R`**例27**　设 \(f(x)=\begin{cases}x^2\cos\frac{1}{x},&x\neq0\\ 0,&x=0\end{cases}\)，求 \(f'(x)\).

**【解】**　当 \(x\neq0\) 时，\(f'(x)=\left(x^2\cos\frac{1}{x}\right)'=2x\cos\frac{1}{x}-x^2\sin\frac{1}{x}\cdot\left(-\frac{1}{x^2}\right)\)

\(=2x\cos\frac{1}{x}+\sin\frac{1}{x}\).

当 \(x=0\) 时，\(f'(0)=\lim\limits_{x\to0}\frac{f(x)-f(0)}{x-0}=\lim\limits_{x\to0}\frac{x^2\cos\frac{1}{x}}{x}=\lim\limits_{x\to0}x\cos\frac{1}{x}=0\)，

所以，

\[
f'(x)=\begin{cases}2x\cos\frac{1}{x}+\sin\frac{1}{x},&x\neq0\\ 0,&x=0\end{cases}
\]

**【注】**　因分段点 \(x=0\) 的左右方函数表达式相同，因而在求 \(x=0\) 处的导数时，不必分左、右导数.

### 9. 有关导数的重要结论

（1）可导的偶函数的导数是奇函数.

即：若 \(f(x)\) 可导，且 \(f(x)\) 是偶函数，则 \(f'(x)\) 是奇函数.

（2）可导的奇函数的导数是偶函数.

即：若 \(f(x)\) 可导，且 \(f(x)\) 是奇函数，则 \(f'(x)\) 是偶函数.

（3）可导的周期函数的导数仍是周期函数，且周期不变.

即：若 \(f(x)\) 可导，且 \(f(x)\) 是以 \(T\) 为周期的周期函数，则 \(f'(x)\) 仍为周期为 \(T\) 的周期函数.

**【注】**　以上结论利用奇偶函数、周期函数的定义及复合函数求导法则即可推出. 以（1）为例证明如下：

若 \(f(x)\) 为偶函数，则 \(f(-x)=f(x)\)，两边对 \(x\) 求导得：

\[
-f'(-x)=f'(x)\quad\text{即}\quad f'(-x)=-f'(x)
\]

则 \(f'(x)\) 为奇函数.

**例28**　设 \(f(x)\) 可导，且对于任意的 \(x\)，都有 \(f(-x)=f(x)\)，若 \(f'(-x_0)=-k\neq0\)，则 \(f'(x_0)=\)

(A) \(k\).　　(B) \(-k\).　　(C) \(\frac{1}{k}\).　　(D) \(-\frac{1}{k}\).

**【解】**　由 \(f(-x)=f(x)\) 知 \(f(x)\) 为偶函数，则 \(f'(x)\) 为奇函数，

所以，\(f'(x_0)=-f'(-x_0)=k\). 故应选(A).

**例29**　设函数 \(f(x)\) 为可导的奇函数，且曲线 \(y=f(x)\) 在点 \((x_0,f(x_0))\) 处的法线与直线 \(2x+3y-1=0\) 平行，则 \(f'(-x_0)=\underline{\qquad}\).

**【解】**　由题意知，曲线 \(y=f(x)\) 在点 \((x_0,f(x_0))\) 处的法线斜率为 \(-\frac{2}{3}\)，从而切线斜率为 \(k=\frac{3}{2}\)，又切线斜率 \(k=f'(x_0)\)，即 \(f'(x_0)=\frac{3}{2}\).` },
      { p: 79, md: R`又因 \(f(x)\) 为奇函数，则 \(f'(x)\) 为偶函数，所以 \(f'(-x_0)=f'(x_0)=\frac{3}{2}\).

故应填 \(\frac{3}{2}\).

**例30**　（1998，数三）设周期函数 \(f(x)\) 在 \((-\infty,+\infty)\) 内可导，周期为 \(4\)，又

\[
\lim_{x\to0}\frac{f(1)-f(1-x)}{2x}=-1,
\]

则曲线 \(y=f(x)\) 在点 \((5,f(5))\) 处的切线斜率为

(A) \(\frac{1}{2}\).　　(B) \(0\).　　(C) \(-1\).　　(D) \(-2\).

**【解】**　由导数定义知

\[
\lim_{x\to0}\frac{f(1)-f(1-x)}{2x}=\frac{1}{2}\lim_{x\to0}\frac{f(1-x)-f(1)}{-x}=\frac{1}{2}f'(1)=-1,
\]

则 \(f'(1)=-2\).

因 \(f(x)\) 是以 \(4\) 为周期的周期函数，则 \(f'(x)\) 也为周期函数，周期为 \(4\).

则 \(f'(5)=f'(1)=-2\).

所以，曲线 \(y=f(x)\) 在点 \((5,f(5))\) 处的切线斜率为 \(k=f'(5)=-2\).

故应选(D).

## 二、高阶导数的计算

### 1. 高阶导数的定义

若 \(y=f(x)\) 的导数 \(y'=f'(x)\) 仍是 \(x\) 的可导函数，则称 \(y'=f'(x)\) 的导数为函数 \(y=f(x)\) 的二阶导数，记作：\(y'',f''(x),\frac{\mathrm{d}^2y}{\mathrm{d}x^2}\) 或 \(\frac{\mathrm{d}^2f}{\mathrm{d}x^2}\).

二阶导数的导数，叫做三阶导数，记作：\(y''',f'''(x),\frac{\mathrm{d}^3y}{\mathrm{d}x^3}\) 或 \(\frac{\mathrm{d}^3f}{\mathrm{d}x^3}\).

三阶导数的导数，叫做四阶导数，记作：\(y^{(4)},f^{(4)}(x),\frac{\mathrm{d}^4y}{\mathrm{d}x^4}\) 或 \(\frac{\mathrm{d}^4f}{\mathrm{d}x^4}\).

\[
\vdots\qquad\vdots
\]

\((n-1)\) 阶导数的导数，叫做 \(n\) 阶导数，

记作：\(y^{(n)},f^{(n)}(x),\frac{\mathrm{d}^ny}{\mathrm{d}x^n}\) 或 \(\frac{\mathrm{d}^nf}{\mathrm{d}x^n}\).

**【注】**　函数 \(y=f(x)\) \(n\) 阶可导，是指 \(y=f(x)\) 有一阶、二阶、\(\cdots\)，直到 \(n\) 阶的导数.

### 2. 高阶导数的计算

（1）直接法：先求出 \(y',y'',y'''\) 等，找出导数规律，写出 \(y^{(n)}\) 结果.

（2）间接法：利用已知高阶导数公式、运算法则，通过将函数恒等变形、变量替换等求出高阶导数结果.

**高阶导数的四则运算法则**

设 \(u(x),v(x)\) 都 \(n\) 阶可导，则

\[
[u(x)\pm v(x)]^{(n)}=u^{(n)}(x)\pm v^{(n)}(x)
\]

\[
[Cu(x)]^{(n)}=C\cdot u^{(n)}(x)\qquad(C\text{为常数})
\]` },
      { p: 80, md: R`\[
\begin{aligned}
[u(x)v(x)]^{(n)}&=\sum_{i=0}^{n}C_n^i u^{(n-i)}(x)\cdot v^{(i)}(x)\\
&=u^{(n)}(x)v(x)+C_n^1u^{(n-1)}(x)v'(x)+\cdots+C_n^k u^{(n-k)}(x)v^{(k)}(x)\\
&\quad+\cdots+u(x)v^{(n)}(x).
\end{aligned}
\]

——莱布尼茨公式

其中 \(u^{(0)}(x)=u(x),v^{(0)}(x)=v(x)\).

**常用高阶导数公式**

\[
(x^n)^{(n)}=n!\qquad(\mathrm{e}^x)^{(n)}=\mathrm{e}^x\qquad(a^x)^{(n)}=a^x\ln^na
\]

\[
(\sin x)^{(n)}=\sin\left(x+\frac{n\pi}{2}\right)\qquad(\cos x)^{(n)}=\cos\left(x+\frac{n\pi}{2}\right)
\]

\[
(\ln x)^{(n)}=(-1)^{n-1}\frac{(n-1)!}{x^n}\qquad\left(\frac{1}{ax+b}\right)^{(n)}=(-1)^n\frac{a^n\cdot n!}{(ax+b)^{n+1}}
\]

\[
(\sin kx)^{(n)}=k^n\sin\left(kx+\frac{n\pi}{2}\right)\qquad(\cos kx)^{(n)}=k^n\cos\left(kx+\frac{n\pi}{2}\right)
\]

**例31**　设 \(y=\ln\sqrt{\frac{1-x}{1+x^2}}\)，则 \(\left.\frac{\mathrm{d}^2y}{\mathrm{d}x^2}\right|_{x=0}=\underline{\qquad}\).

**【解】**　\(y=\ln\sqrt{\frac{1-x}{1+x^2}}=\frac{1}{2}[\ln(1-x)-\ln(1+x^2)]\)，

\[
\frac{\mathrm{d}y}{\mathrm{d}x}=\frac{1}{2}\left(\frac{-1}{1-x}-\frac{2x}{1+x^2}\right),
\]

\[
\frac{\mathrm{d}^2y}{\mathrm{d}x^2}=\frac{1}{2}\left[\frac{-1}{(1-x)^2}-\frac{2(1+x^2)-2x\cdot2x}{(1+x^2)^2}\right]=\frac{1}{2}\left[\frac{-1}{(1-x)^2}-\frac{2-2x^2}{(1+x^2)^2}\right],
\]

则 \(\left.\frac{\mathrm{d}^2y}{\mathrm{d}x^2}\right|_{x=0}=\frac{1}{2}(-1-2)=-\frac{3}{2}\).

**例32**　（2017，数一）已知函数 \(f(x)=\frac{1}{1+x^2}\)，则 \(f^{(3)}(0)=\underline{\qquad}\).

**【解】**　**方法一**　\(f(x)=(1+x^2)^{-1}\)，则 \(f'(x)=-(1+x^2)^{-2}\cdot2x=-2x(1+x^2)^{-2}\)，

\[
f''(x)=-2(1+x^2)^{-2}-2x(-2)(1+x^2)^{-3}\cdot2x=-2(1+x^2)^{-2}+8x^2(1+x^2)^{-3},
\]

\[
\begin{aligned}
f'''(x)&=4(1+x^2)^{-3}\cdot2x+16x(1+x^2)^{-3}+8x^2\cdot(-3)(1+x^2)^{-4}\cdot2x\\
&=24x(1+x^2)^{-3}-48x^3(1+x^2)^{-4},
\end{aligned}
\]

则 \(f^{(3)}(0)=0\).

**方法二**　由 \(f(x)=\frac{1}{1+x^2}\) 是偶函数知，\(f'(x)\) 是奇函数，\(f''(x)\) 是偶函数，\(f^{(3)}(x)\) 是奇函数，则 \(f^{(3)}(-x)=-f^{(3)}(x)\)，

所以，\(f^{(3)}(0)=0\).

**例33**　（2006，数三）\(f(x)\) 在 \(x=2\) 某邻域内可导，且 \(f'(x)=\mathrm{e}^{f(x)},f(2)=1\)，则 \(f'''(2)=\underline{\qquad}\).

**【解】**　由 \(f'(x)=\mathrm{e}^{f(x)}\)，则 \(f''(x)=[\mathrm{e}^{f(x)}]'=\mathrm{e}^{f(x)}\cdot f'(x)=\mathrm{e}^{f(x)}\cdot\mathrm{e}^{f(x)}=\mathrm{e}^{2f(x)}\)，

\[
f'''(x)=[\mathrm{e}^{2f(x)}]'=\mathrm{e}^{2f(x)}\cdot2f'(x)=\mathrm{e}^{2f(x)}\cdot2\mathrm{e}^{f(x)}=2\mathrm{e}^{3f(x)},
\]

则 \(f'''(2)=2\mathrm{e}^{3f(2)}=2\mathrm{e}^3\).` },
      { p: 81, md: R`**例34**　已知 \(y=x\ln x\)，则 \(y^{(10)}=\)

(A) \(-\frac{1}{x^9}\).　　(B) \(\frac{1}{x^9}\).　　(C) \(\frac{8!}{x^9}\).　　(D) \(-\frac{8!}{x^9}\).

**【解】**　\(y'=\ln x+x\cdot\frac{1}{x}=\ln x+1,y''=\frac{1}{x},y'''=-\frac{1}{x^2},y^{(4)}=\frac{(-1)(-2)}{x^3},\cdots\)，

则 \(y^{(10)}=\frac{(-1)(-2)\cdots(-8)}{x^9}=\frac{8!}{x^9}\). 故应选(C).

**例35**　（2010，数二）函数 \(y=\ln(1-2x)\) 在 \(x=0\) 处的 \(n\) 阶导数 \(y^{(n)}(0)=\underline{\qquad}\).

**【解】**　\(y'=\frac{-2}{1-2x}=-2(1-2x)^{-1}\)，

\[
y''=-2\cdot(-1)(1-2x)^{-2}\cdot(-2)=(-1)(-2)^2(1-2x)^{-2},
\]

\[
y'''=(-1)(-2)^2(-2)(1-2x)^{-3}\cdot(-2)=(-1)(-2)(-2)^3(1-2x)^{-3},
\]

\[
y^{(4)}=(-1)(-2)(-2)^3(-3)(1-2x)^{-4}\cdot(-2)=(-1)(-2)(-3)(-2)^4(1-2x)^{-4},
\]

\[
\vdots
\]

则 \(y^{(n)}=(-1)(-2)\cdots(-(n-1))(-2)^n(1-2x)^{-n}=-(n-1)!2^n(1-2x)^{-n}\)，

于是有 \(y^{(n)}(0)=-(n-1)!2^n\).

**例36**　（2015，数二）函数 \(f(x)=x^2 2^x\) 在 \(x=0\) 处的 \(n\) 阶导数 \(f^{(n)}(0)=\underline{\qquad}\).

**【解】**　由莱布尼茨公式得（注意到 \((x^2)^{(i)}=0(i=3,4,\cdots),(2^x)^{(k)}=2^x(\ln2)^k\)）

\[
f^{(n)}(x)=\sum_{i=0}^{n}C_n^i(x^2)^{(i)}(2^x)^{(n-i)}
\]

\[
=x^2\cdot(2^x)^{(n)}+n(x^2)'\cdot(2^x)^{(n-1)}+\frac{n(n-1)}{2}(x^2)''(2^x)^{(n-2)}
\]

\[
=x^2\cdot2^x(\ln2)^n+2nx\cdot2^x\cdot(\ln2)^{n-1}+n(n-1)2^x(\ln2)^{n-2}.
\]

则 \(f^{(n)}(0)=n(n-1)(\ln2)^{n-2}\).

**例37**　设 \(y=x^2\mathrm{e}^x\)，求 \(y^{(n)}\).

**【解】**　由莱布尼茨公式及 \((x^2)^{(k)}=0,k=3,4,\cdots,n\) 得

\[
y^{(n)}=x^2(\mathrm{e}^x)^{(n)}+C_n^1\cdot(x^2)'\cdot(\mathrm{e}^x)^{(n-1)}+C_n^2(x^2)''(\mathrm{e}^x)^{(n-2)}
\]

\[
=x^2\mathrm{e}^x+2nx\mathrm{e}^x+n(n-1)\mathrm{e}^x
\]

\[
=[x^2+2nx+n(n-1)]\mathrm{e}^x.
\]

**例38**　求下列函数的 \(n\) 阶导数.

（1）\(y=\frac{1}{x^2+x-2}\),　　（2）\(y=\sin^2x\).

**【解】**　（1）\(y=\frac{1}{x^2+x-2}=\frac{1}{3}\left(\frac{1}{x-1}-\frac{1}{x+2}\right)\)，由于 \(\left(\frac{1}{x+a}\right)^{(n)}=(-1)^n\frac{n!}{(x+a)^{n+1}}\)，

则

\[
y^{(n)}=\frac{1}{3}\left[\left(\frac{1}{x-1}\right)^{(n)}-\left(\frac{1}{x+2}\right)^{(n)}\right]
\]

\[
=\frac{1}{3}\left[(-1)^n\frac{n!}{(x-1)^{n+1}}-(-1)^n\frac{n!}{(x+2)^{n+1}}\right]
\]` },
      { p: 82, md: R`\[
=\frac{(-1)^n n!}{3}\left[\frac{1}{(x-1)^{n+1}}-\frac{1}{(x+2)^{n+1}}\right].
\]

（2）\(y=\sin^2x=\frac{1-\cos 2x}{2}=\frac{1}{2}-\frac{1}{2}\cos 2x\)，由于 \((\cos kx)^{(n)}=k^n\cos\left(kx+\frac{n\pi}{2}\right)\)，

则
\[
y^{(n)}=\left(\frac{1}{2}\right)^{(n)}-\frac{1}{2}(\cos 2x)^{(n)}
=-\frac{1}{2}\cdot 2^n\cos\left(2x+\frac{n\pi}{2}\right)
=-2^{n-1}\cos\left(2x+\frac{n\pi}{2}\right).
\]

### 3. 几类函数的二阶导数求法

（1）抽象复合函数 \(y=f[\varphi(x)]\) 的二阶导数 \(\frac{d^2y}{dx^2}\) 求法

先求一阶导数
\[
\frac{dy}{dx}=f'[\varphi(x)]\varphi'(x)
\]

再求二阶导数
\[
\frac{d^2y}{dx^2}=[f'(\varphi(x))]'\varphi'(x)+f'[\varphi(x)]\varphi''(x)
=f''[\varphi(x)][\varphi'(x)]^2+f'[\varphi(x)]\varphi''(x)
\]

**【注】** \([f'(\varphi(x))]'\) 仍是复合函数求导数，\(f'(\varphi(x))\) 是 \(f'(u)\) 和 \(u=\varphi(x)\) 的复合函数，因而应按照复合函数求导法则求 \(f'(\varphi(x))\) 的导数，即 \([f'(\varphi(x))]'=f''[\varphi(x)]\cdot\varphi'(x)\)，如果漏掉 \(\varphi'(x)\) 就会出错，注意 \([f'(\varphi(x))]'\neq f''(\varphi(x))\).

**例39** 设 \(f(x)\) 二阶可导，求下列函数的二阶导数 \(\frac{d^2y}{dx^2}\).

（1）\(y=f(e^{-x})\)　　（2）\(y=\ln f(x)\)

**【解】** （1）
\[
\frac{dy}{dx}=f'(e^{-x})\cdot(e^{-x})'=-e^{-x}f'(e^{-x}),
\]
\[
\frac{d^2y}{dx^2}=-[(e^{-x})'f'(e^{-x})+e^{-x}\cdot(f'(e^{-x}))']
=-[-e^{-x}f'(e^{-x})+e^{-x}f''(e^{-x})\cdot(e^{-x})']
=e^{-x}f'(e^{-x})+e^{-2x}f''(e^{-x}).
\]

（2）
\[
\frac{dy}{dx}=\frac{1}{f(x)}f'(x)=\frac{f'(x)}{f(x)},
\]
\[
\frac{d^2y}{dx^2}=\frac{f''(x)f(x)-f'(x)\cdot f'(x)}{f^2(x)}
=\frac{f''(x)f(x)-[f'(x)]^2}{f^2(x)}.
\]

**例40** （1993，数三）设 \(y=\sin[f(x^2)]\)，其中 \(f\) 具有二阶导数，求 \(\frac{d^2y}{dx^2}\).

**【解】**
\[
\frac{dy}{dx}=\cos[f(x^2)]\cdot[f(x^2)]'=\cos[f(x^2)]\cdot f'(x^2)\cdot 2x=2xf'(x^2)\cos[f(x^2)],
\]
\[
\begin{aligned}
\frac{d^2y}{dx^2}
&=2f'(x^2)\cos[f(x^2)]+2x[f'(x^2)]'\cos[f(x^2)]+2xf'(x^2)[\cos f(x^2)]'\\
&=2f'(x^2)\cos[f(x^2)]+4x^2f''(x^2)\cos[f(x^2)]-4x^2[f'(x^2)]^2\sin[f(x^2)].
\end{aligned}
\]

（2）由方程 \(F(x,y)=0\) 所确定的隐函数 \(y=y(x)\) 的二阶导数 \(\frac{d^2y}{dx^2}\) 的求法

先利用隐函数求导法求出一阶导数 \(\frac{dy}{dx}\)，然后再利用四则运算或复合函数求导法则对 \(\frac{dy}{dx}\)` },
      { p: 83, md: R`关于 \(x\) 求导得到二阶导数 \(\frac{d^2y}{dx^2}\).

**【注】** 对 \(\frac{dy}{dx}\) 关于 \(x\) 求导时，要牢记 \(\frac{dy}{dx}\) 的表示式中 \(y\) 仍是 \(x\) 的函数.

**例41** 由方程 \(e^y+xy=e\) 确定 \(y\) 是 \(x\) 的函数，求 \(\frac{d^2y}{dx^2}\).

**【解】** 方程 \(e^y+xy=e\) 两边对 \(x\) 求导数，得
\[
e^y\cdot\frac{dy}{dx}+y+x\frac{dy}{dx}=0,\quad \text{解得}\quad \frac{dy}{dx}=-\frac{y}{x+e^y}.
\]
则
\[
\begin{aligned}
\frac{d^2y}{dx^2}
&=-\frac{\frac{dy}{dx}\cdot(x+e^y)-y\cdot\left(1+e^y\cdot\frac{dy}{dx}\right)}{(x+e^y)^2}\\
&=\frac{y-(x+e^y-ye^y)\cdot\frac{dy}{dx}}{(x+e^y)^2}\\
&=\frac{y-(x+e^y-ye^y)\left(-\frac{y}{x+e^y}\right)}{(x+e^y)^2}
=\frac{2xy+2ye^y-y^2e^y}{(x+e^y)^3}.
\end{aligned}
\]

**例42** （2009，数二）设 \(y=y(x)\) 是由方程 \(xy+e^y=x+1\) 确定的隐函数，则
\[
\left.\frac{d^2y}{dx^2}\right|_{x=0}=\underline{\qquad}.
\]

**【解】** 将 \(x=0\) 代入方程 \(xy+e^y=x+1\)，解得 \(y=0\).

对方程 \(xy+e^y=x+1\) 两边关于 \(x\) 求导得
\[
y+x\frac{dy}{dx}+e^y\frac{dy}{dx}=1,
\]
将 \(x=0,y=0\) 代入上式得
\[
\left.\frac{dy}{dx}\right|_{x=0}=1,
\]
对上式两边再关于 \(x\) 求导得
\[
\frac{dy}{dx}+\frac{dy}{dx}+x\frac{d^2y}{dx^2}+e^y\cdot\left(\frac{dy}{dx}\right)^2+e^y\frac{d^2y}{dx^2}=0,
\]
将 \(x=0,y=0,\frac{dy}{dx}=1\) 代入上式得
\[
\left.\frac{d^2y}{dx^2}\right|_{x=0}=-3.
\]
故应填 \(-3\).

**【注】** 因求一点的二阶导数值，所以可以不用求出 \(\frac{dy}{dx},\frac{d^2y}{dx^2}\) 的表示式，而直接在求导得出的关系等式中代入 \(x=0,y=0\) 即可求出在 \(x=0\) 点的一阶、二阶导数值 \(\left.\frac{dy}{dx}\right|_{x=0},\left.\frac{d^2y}{dx^2}\right|_{x=0}\)，这样可简化计算.

**例43** （2012，数二）设 \(y=y(x)\) 是由方程 \(x^2-y+1=e^y\) 所确定的隐函数，则
\[
\left.\frac{d^2y}{dx^2}\right|_{x=0}=\underline{\qquad}.
\]

**【解】** 将 \(x=0\) 代入方程 \(x^2-y+1=e^y\) 中得 \(y=0\)，

方程 \(x^2-y+1=e^y\) 两边对 \(x\) 求导得
\[
2x-\frac{dy}{dx}=e^y\frac{dy}{dx},
\]` },
      { p: 84, md: R`将 \(x=0,y=0\) 代入上式得
\[
\left.\frac{dy}{dx}\right|_{x=0}=0.
\]
上式两边再对 \(x\) 求导得
\[
2-\frac{d^2y}{dx^2}=e^y\left(\frac{dy}{dx}\right)^2+e^y\frac{d^2y}{dx^2},
\]
将 \(x=0,y=0,\frac{dy}{dx}=0\) 代入上式得
\[
\left.\frac{d^2y}{dx^2}\right|_{x=0}=1.
\]

（3）由参数方程
\[
\begin{cases}
x=\varphi(t),\\
y=\psi(t)
\end{cases}
\]
所确定的函数 \(y=y(x)\) 的二阶导数 \(\frac{d^2y}{dx^2}\) 的求法（数学三不要求）

先求一阶导数
\[
\frac{dy}{dx}=\frac{\psi'(t)}{\varphi'(t)}.
\]

再求二阶导数
\[
\frac{d^2y}{dx^2}
=\frac{\left[\frac{\psi'(t)}{\varphi'(t)}\right]'}{\varphi'(t)}
=\frac{\frac{\psi''(t)\varphi'(t)-\psi'(t)\varphi''(t)}{[\varphi'(t)]^2}}{\varphi'(t)}
=\frac{\psi''(t)\varphi'(t)-\psi'(t)\varphi''(t)}{[\varphi'(t)]^3}.
\]

**例44** （2013，数一）设
\[
\begin{cases}
x=\sin t,\\
y=t\sin t+\cos t
\end{cases}
\quad (t\text{ 为参数}),
\]
则 \(\left.\frac{d^2y}{dx^2}\right|_{t=\frac{\pi}{4}}=\underline{\qquad}\).

**【解】** 由参数方程求导公式得
\[
\frac{dy}{dx}=\frac{(t\sin t+\cos t)'}{(\sin t)'}=\frac{t\cos t}{\cos t}=t,
\]
\[
\frac{d^2y}{dx^2}=\frac{t'}{(\sin t)'}=\frac{1}{\cos t},
\]
则
\[
\left.\frac{d^2y}{dx^2}\right|_{t=\frac{\pi}{4}}=\frac{1}{\cos\frac{\pi}{4}}=\sqrt2.
\]
故应填 \(\sqrt2\).

**例45** 设函数 \(y=y(x)\) 由参数方程
\[
\begin{cases}
x=t+\ln(t-1),\\
y=t^3+t^2+1
\end{cases}
\]
所确定，求 \(\frac{d^2y}{dx^2}\).

**【解】**
\[
\frac{dy}{dx}=\frac{(t^3+t^2+1)'}{[t+\ln(t-1)]'}
=\frac{3t^2+2t}{1+\frac{1}{t-1}}
=(3t+2)(t-1)=3t^2-t-2,
\]
\[
\frac{d^2y}{dx^2}=\frac{(3t^2-t-2)'}{[t+\ln(t-1)]'}
=\frac{6t-1}{1+\frac{1}{t-1}}
=\frac{(6t-1)(t-1)}{t}
=\frac{6t^2-7t+1}{t}.
\]

### 三、微分的计算

若函数 \(y=f(x)\) 可微，则其微分计算公式为
\[
dy=f'(x)dx
\]
即函数的微分等于函数的导数乘以自变量的微分.

**微分的四则运算法则** 设 \(u(x),v(x)\) 可微，则
\[
d[u(x)\pm v(x)]=du(x)\pm dv(x)
\]
\[
d[u(x)v(x)]=v(x)du(x)+u(x)dv(x)
\]` },
      { p: 85, md: R`\[
d\left[\frac{u(x)}{v(x)}\right]=\frac{v(x)du(x)-u(x)dv(x)}{v^2(x)}\quad(v(x)\neq0)
\]

**一阶微分形式的不变性** 设 \(y=f(u)\) 对 \(u\) 可导，\(u=\varphi(x)\) 可导，则复合函数 \(y=f[\varphi(x)]\) 的微分为
\[
dy=f'[\varphi(x)]d\varphi(x)=f'[\varphi(x)]\varphi'(x)dx
\]
即复合函数的微分等于外层函数的导数乘以内层函数的微分.

也就是对于函数 \(y=f(u)\)，无论 \(u\) 是自变量还是中间变量，\(y=f(u)\) 的微分形式总可以写为 \(dy=f'(u)du\).

**例46** 求函数 \(y=x^2e^x+x-3\) 的微分.

**【解】** 方法一
\[
y'=(x^2e^x)'+x'-3'=2xe^x+x^2e^x+1,
\]
则
\[
dy=y'dx=(2xe^x+x^2e^x+1)dx.
\]

方法二
\[
\begin{aligned}
dy&=d(x^2e^x)+dx-d3=e^xdx^2+x^2de^x+dx\\
&=e^x\cdot2xdx+x^2e^xdx+dx=(2xe^x+x^2e^x+1)dx.
\end{aligned}
\]

**例47** 求 \(y=\frac{\cos x}{1+\sin x}\) 的微分.

**【解】** 方法一
\[
y'=\frac{-\sin x(1+\sin x)-\cos x\cdot\cos x}{(1+\sin x)^2}=-\frac{1}{1+\sin x},
\]
则
\[
dy=-\frac{1}{1+\sin x}dx.
\]

方法二
\[
\begin{aligned}
dy&=\frac{(1+\sin x)d\cos x-\cos x\cdot d(1+\sin x)}{(1+\sin x)^2}\\
&=\frac{(1+\sin x)(-\sin x)dx-\cos x\cdot\cos xdx}{(1+\sin x)^2}\\
&=-\frac{1}{1+\sin x}dx.
\end{aligned}
\]

**例48** 设 \(y=\arcsin\sqrt{1-x^2}\)，求 \(\left.dy\right|_{x=\frac{1}{2}}\).

**【解】** 方法一
\[
y'=\frac{1}{\sqrt{1-(\sqrt{1-x^2})^2}}\cdot(\sqrt{1-x^2})'
=\frac{1}{\sqrt{x^2}}\cdot\frac{-2x}{2\sqrt{1-x^2}}
=-\frac{1}{\sqrt{1-x^2}},\quad(x>0)
\]
则
\[
dy=-\frac{1}{\sqrt{1-x^2}}dx,
\]
于是有
\[
\left.dy\right|_{x=\frac{1}{2}}=-\frac{2\sqrt3}{3}dx.
\]

方法二
\[
\begin{aligned}
dy&=\frac{1}{\sqrt{1-(\sqrt{1-x^2})^2}}d(\sqrt{1-x^2})
=\frac{1}{\sqrt{x^2}}\cdot\frac{1}{2\sqrt{1-x^2}}d(1-x^2)\\
&=\frac{1}{\sqrt{x^2}}\frac{1}{2\sqrt{1-x^2}}(-2x)dx
=-\frac{1}{\sqrt{1-x^2}}dx,\quad(x>0)
\end{aligned}
\]
所以
\[
\left.dy\right|_{x=\frac{1}{2}}=-\frac{2\sqrt3}{3}dx.
\]` },
    ],
    quiz: [{"q": "设 $f(x)=(x-1)(x-2)\\cdots(x-50)$，则 $f'(1)=$", "options": ["$49!$", "$-49!$", "$50!$", "$0$"], "answer": 1, "explain": "$f'(1)=\\prod_{k=2}^{50}(1-k)=(-1)(-2)\\cdots(-49)=(-1)^{49}49!=-49!$。"}, {"q": "设 $y=(\\sin x)^x$，则 $\\frac{dy}{dx}=$", "options": ["$(\\sin x)^x\\ln\\sin x$", "$(\\sin x)^x(\\ln\\sin x+x\\cot x)$", "$x(\\sin x)^{x-1}\\cos x$", "$(\\sin x)^x\\cot x$"], "answer": 1, "explain": "取对数 $\\ln y=x\\ln\\sin x$，求导 $\\frac{y'}y=\\ln\\sin x+x\\cot x$。"}, {"q": "设 $\\begin{cases}x=t-\\ln(1+t)\\\\y=t^3+t^2\\end{cases}$，则 $\\left.\\frac{dy}{dx}\\right|_{t=0}=$", "options": ["$0$", "$2$", "$1$", "不存在"], "answer": 1, "explain": "$\\frac{dy/dt}{dx/dt}=\\frac{3t^2+2t}{t/(1+t)}=(3t+2)(1+t)\\to2$。"}, {"q": "设 $y=\\ln(1-2x)$，则 $y^{(n)}(0)=$", "options": ["$-2^n(n-1)!$", "$2^n(n-1)!$", "$-2^n n!$", "$-2(n-1)!$"], "answer": 0, "explain": "$y'=\\frac{-2}{1-2x}$，$y^{(n)}=\\frac{-2^n(n-1)!}{(1-2x)^n}$，令 $x=0$。"}]
  };
})();
