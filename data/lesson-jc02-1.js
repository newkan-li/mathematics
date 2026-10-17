window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["jc02_s0"] = {
    id: "jc02_s0",
    ch: "第二章 一元函数微分学",
    title: "第一节 导数与微分的概念",
    book: "李永乐《数学复习全书·基础篇》",
    pages: [55, 67],
    img: "assets/img/jichu",
    content: [
      { p: 55, md: R`# 第二章 一元函数微分学

**本章考点**

导数和微分的概念 导数的几何意义和物理意义（数学一、数学二） 函数的可导性与连续性之间的关系 平面曲线的切线和法线 导数和微分的四则运算 基本初等函数的导数 复合函数、反函数、隐函数以及参数方程所确定的函数的导数（数学三不要求参数方程） 高阶导数 一阶微分形式的不变性 中值定理 不等式与零点问题 导数应用

## 第一节 导数与微分的概念

### 一、导数的概念及几何意义

#### 1. 导数的概念

**定义（导数）** 设函数 \(y=f(x)\) 在 \(x_0\) 的某邻域内有定义，如果极限
\[
\lim_{\Delta x\to 0}\frac{\Delta y}{\Delta x}=\lim_{\Delta x\to 0}\frac{f(x_0+\Delta x)-f(x_0)}{\Delta x}
\]
存在，则称 \(f(x)\) 在点 \(x_0\) 处可导，并称此极限值为 \(f(x)\) 在点 \(x_0\) 处的导数，记为 \(f'(x_0)\)，或 \(y'\big|_{x=x_0}\)，或 \(\left.\frac{dy}{dx}\right|_{x=x_0}\). 如果上述极限不存在，则称 \(f(x)\) 在点 \(x_0\) 处不可导.

**【注】** （1）常用的导数定义的等价形式有：
\[
f'(x_0)=\lim_{x\to x_0}\frac{f(x)-f(x_0)}{x-x_0},\qquad f'(x_0)=\lim_{h\to 0}\frac{f(x_0+h)-f(x_0)}{h}.
\]
（2）利用导数的定义求导数：若 \(\lim_{x\to x_0}\frac{f(x)-f(x_0)}{x-x_0}=A\)，则 \(f'(x_0)=A\).

（3）利用导数的定义可求极限：若已知 \(f(x)\) 在 \(x_0\) 点可导，则
\[
\lim_{\square\to x_0}\frac{f(\square)-f(x_0)}{\square-x_0}=f'(x_0),
\]
其中 \(\square\) 代表趋于 \(x_0\) 的变量.

**定义（左导数）** 设函数 \(y=f(x)\) 在点 \(x_0\) 及其某个左邻域内有定义，若左极限
\[
\lim_{\Delta x\to 0^-}\frac{\Delta y}{\Delta x}=\lim_{\Delta x\to 0^-}\frac{f(x_0+\Delta x)-f(x_0)}{\Delta x}=\lim_{x\to x_0^-}\frac{f(x)-f(x_0)}{x-x_0}
\]
存在时，则称该极限值为 \(f(x)\) 在点 \(x_0\) 处的左导数，记为 \(f'_-(x_0)\).

**定义（右导数）** 设函数 \(y=f(x)\) 在点 \(x_0\) 及其某个右邻域内有定义，若右极限` },
      { p: 56, md: R`\[
\lim_{\Delta x\to 0^+}\frac{\Delta y}{\Delta x}=\lim_{\Delta x\to 0^+}\frac{f(x_0+\Delta x)-f(x_0)}{\Delta x}=\lim_{x\to x_0^+}\frac{f(x)-f(x_0)}{x-x_0}
\]
存在时，则称该极限值为 \(f(x)\) 在点 \(x_0\) 处的右导数，记为 \(f'_+(x_0)\).

左导数：
\[
\begin{aligned}
f'_-(x_0)&=\lim_{\Delta x\to 0^-}\frac{f(x_0+\Delta x)-f(x_0)}{\Delta x}=\lim_{h\to 0^-}\frac{f(x_0+h)-f(x_0)}{h}\\
&=\lim_{x\to x_0^-}\frac{f(x)-f(x_0)}{x-x_0}
\end{aligned}
\]

右导数：
\[
\begin{aligned}
f'_+(x_0)&=\lim_{\Delta x\to 0^+}\frac{f(x_0+\Delta x)-f(x_0)}{\Delta x}=\lim_{h\to 0^+}\frac{f(x_0+h)-f(x_0)}{h}\\
&=\lim_{x\to x_0^+}\frac{f(x)-f(x_0)}{x-x_0}
\end{aligned}
\]

**定理** 函数 \(f(x)\) 在点 \(x_0\) 处可导的充分必要条件是它在该点处左导数与右导数都存在且相等.

**【注】** （1）若 \(f(x)\) 在 \(x_0\) 点的左导数 \(f'_-(x_0)\)、右导数 \(f'_+(x_0)\) 至少有一个不存在或都存在，但不相等，则 \(f(x)\) 在 \(x_0\) 处不可导，导数 \(f'(x_0)\) 不存在.

（2）利用此定理可判断分段函数在分段点处的导数.

**定义（区间上可导及导函数）** 如果 \(y=f(x)\) 在开区间 \((a,b)\) 内每一点都可导，则称 \(f(x)\) 在区间 \((a,b)\) 内可导. 此时对于 \((a,b)\) 内的每一点 \(x\)，都对应一个导数值 \(f'(x)\)，常称 \(f'(x)\) 为 \(f(x)\) 在 \((a,b)\) 内的导函数，简称为导数. 若 \(f(x)\) 在区间 \((a,b)\) 内可导，且 \(f'_+(a)\) 和 \(f'_-(b)\) 都存在，则称 \(f(x)\) 在区间 \([a,b]\) 上可导.

导数：\[
f'(x)=\lim_{\Delta x\to 0}\frac{f(x+\Delta x)-f(x)}{\Delta x}.
\]

**【注】** \(f(x)\) 在 \(x_0\) 点的导数 \(f'(x_0)\)，即为导函数 \(f'(x)\) 在点 \(x_0\) 处的函数值.

即 \(f'(x_0)=\left.f'(x)\right|_{x=x_0}\).

**例1** 设 \(f(x)=(x-2)\sqrt[3]{(x+1)^2(x-1)}\)，则 \(f'(2)=\underline{\quad\quad}\).

**【解】** 由导数定义知
\[
\begin{aligned}
f'(2)&=\lim_{x\to 2}\frac{f(x)-f(2)}{x-2}=\lim_{x\to 2}\frac{(x-2)\sqrt[3]{(x+1)^2(x-1)}}{x-2}\\
&=\lim_{x\to 2}\sqrt[3]{(x+1)^2(x-1)}=\sqrt[3]{9}.
\end{aligned}
\]

**【注】** 因求一点的导数，用导数定义较简单.

**例2** （2012，数三）设函数 \(f(x)=(e^x-1)(e^{2x}-2)\cdots(e^{nx}-n)\)，则 \(f'(0)=\)

(A) \((-1)^{n-1}(n-1)!\). (B) \((-1)^n(n-1)!\).

(C) \((-1)^{n-1}n!\). (D) \((-1)^n n!\).

**【解】** 由导数定义及 \(f(0)=0\)，得
\[
\begin{aligned}
f'(0)&=\lim_{x\to 0}\frac{f(x)-f(0)}{x-0}=\lim_{x\to 0}\frac{(e^x-1)(e^{2x}-2)\cdots(e^{nx}-n)}{x}\\
&=\lim_{x\to 0}\frac{x(e^{2x}-2)\cdots(e^{nx}-n)}{x}=\lim_{x\to 0}(e^{2x}-2)\cdots(e^{nx}-n)\\
&=(-1)(-2)\cdots(1-n)=(-1)^{n-1}(n-1)!.
\end{aligned}
\]
故应选(A).` },
      { p: 57, md: R`**例3** 设 \(f(x)=\begin{cases}\dfrac{1-e^{-x^2}}{x},&x\ne 0,\\[6pt]0,&x=0\end{cases}\)，则 \(f'(0)=\underline{\quad\quad}\).

**【解】**
\[
f'(0)=\lim_{x\to 0}\frac{f(x)-f(0)}{x-0}=\lim_{x\to 0}\frac{\dfrac{1-e^{-x^2}}{x}-0}{x}=\lim_{x\to 0}\frac{1-e^{-x^2}}{x^2}=\lim_{x\to 0}\frac{x^2}{x^2}=1.
\]

**例4** 设 \(f(x)=\begin{cases}\dfrac{2x}{1+e^x},&x\le 0,\\[6pt]x^2\sin\dfrac1x,&x>0\end{cases}\)，讨论 \(f(x)\) 在 \(x=0\) 处的可导性.

**【解】** 因 \(f(x)\) 为分段函数，\(x=0\) 为其分段点，故应先求左、右导数.
\[
\begin{aligned}
f'_-(0)&=\lim_{x\to 0^-}\frac{f(x)-f(0)}{x-0}=\lim_{x\to 0^-}\frac{\dfrac{2x}{1+e^x}}{x}=\lim_{x\to 0^-}\frac{2}{1+e^x}=1,\\
f'_+(0)&=\lim_{x\to 0^+}\frac{f(x)-f(0)}{x-0}=\lim_{x\to 0^+}\frac{x^2\sin\dfrac1x}{x}=\lim_{x\to 0^+}x\sin\frac1x=0,
\end{aligned}
\]
因 \(f'_-(0)\ne f'_+(0)\)，所以 \(f(x)\) 在 \(x=0\) 处不可导.

**例5** 设 \(f(x)=\begin{cases}x,&x<0,\\[4pt]xe^x,&x\ge 0\end{cases}\)，则 \(f(x)\) 在 \(x=0\) 处

(A) 可导，且 \(f'(0)=0\). (B) 可导，且 \(f'(0)=1\).

(C) 可导，且 \(f'(0)=2\). (D) 不可导.

**【解】**
\[
f'_-(0)=\lim_{x\to 0^-}\frac{f(x)-f(0)}{x-0}=\lim_{x\to 0^-}\frac{x}{x}=1,
\]
\[
f'_+(0)=\lim_{x\to 0^+}\frac{f(x)-f(0)}{x-0}=\lim_{x\to 0^+}\frac{xe^x}{x}=\lim_{x\to 0^+}e^x=1,
\]
由于 \(f'_-(0)=f'_+(0)=1\)，则 \(f(x)\) 在 \(x=0\) 点可导，且 \(f'(0)=1\)，故应选(B).

**例6** 设函数 \(y=f(x)\) 在 \(x=0\) 点连续，且 \(\lim_{x\to 0}\frac{f(x)+2}{x}=3\)，问函数 \(f(x)\) 在 \(x=0\) 点是否可导？若可导，求 \(f'(0)\).

**【解】** 由 \(\lim_{x\to 0}\frac{f(x)+2}{x}=3\) 及 \(\lim_{x\to 0}x=0\) 得 \(\lim_{x\to 0}[f(x)+2]=0\)，又由 \(f(x)\) 在 \(x=0\) 点连续得 \(\lim_{x\to 0}[f(x)+2]=f(0)+2=0\)，即 \(f(0)=-2\).

于是有
\[
f'(0)=\lim_{x\to 0}\frac{f(x)-f(0)}{x-0}=\lim_{x\to 0}\frac{f(x)+2}{x}=3,
\]
所以 \(f(x)\) 在 \(x=0\) 点可导，且 \(f'(0)=3\).

**例7** 讨论函数 \(f(x)=\begin{cases}x\sin\dfrac1x,&x\ne 0,\\[6pt]0,&x=0\end{cases}\) 在 \(x=0\) 处的连续性和可导性.

**【解】** \(\lim_{x\to 0}f(x)=\lim_{x\to 0}x\sin\frac1x=0=f(0)\)，则 \(f(x)\) 在 \(x=0\) 处连续.` },
      { p: 58, md: R`而 \(\lim_{\Delta x\to 0}\frac{\Delta y}{\Delta x}=\lim_{\Delta x\to 0}\frac{f(0+\Delta x)-f(0)}{\Delta x}=\lim_{\Delta x\to 0}\frac{\Delta x\sin\dfrac1{\Delta x}}{\Delta x}=\lim_{\Delta x\to 0}\sin\frac1{\Delta x}\)，极限不存在，所以 \(f(x)\) 在 \(x=0\) 处不可导.

**【评注】** 一般地，可考虑 \(f(x)=\begin{cases}x^\alpha\sin\dfrac1x,&x\ne 0,\\[6pt]0,&x=0\end{cases}\) 在 \(x=0\) 处的连续性和可导性. \(\alpha>0\) 时连续，\(\alpha>1\) 时可导.

**例8** （2018，数一、二、三）下列函数中，在 \(x=0\) 处不可导的是

(A) \(f(x)=|x|\sin|x|\). (B) \(f(x)=|x|\sin\sqrt{|x|}\).

(C) \(f(x)=\cos|x|\). (D) \(f(x)=\cos\sqrt{|x|}\).

**【解】** 由导数定义知，对于选项(D)
\[
f'(0)=\lim_{x\to 0}\frac{\cos\sqrt{|x|}-1}{x}=\lim_{x\to 0}\frac{-\dfrac12\left(\sqrt{|x|}\right)^2}{x}=\lim_{x\to 0}\frac{-\dfrac12|x|}{x},
\]
该极限不存在，则 \(f(x)=\cos\sqrt{|x|}\) 在 \(x=0\) 处不可导，故应选(D).

而对于选项(A),(B),(C)有
\[
f'(0)=\lim_{x\to 0}\frac{|x|\sin|x|-0}{x-0}=\lim_{x\to 0}\frac{|x|\sin|x|}{x}=\lim_{x\to 0}\frac{|x|^2}{x}=\lim_{x\to 0}x=0,
\]
\[
f'(0)=\lim_{x\to 0}\frac{|x|\sin\sqrt{|x|}-0}{x-0}=\lim_{x\to 0}\frac{|x|\sin\sqrt{|x|}}{x}=\lim_{x\to 0}\frac{|x|\sqrt{|x|}}{x}=0,
\]
\[
f'(0)=\lim_{x\to 0}\frac{\cos|x|-1}{x-0}=\lim_{x\to 0}\frac{\cos|x|-1}{x}=\lim_{x\to 0}\frac{-\dfrac12|x|^2}{x}=\lim_{x\to 0}\left(-\frac12 x\right)=0,
\]
所以对于(A),(B),(C)，\(f(x)\) 在 \(x=0\) 点都可导. 故应选(D).

**例9** （1994，数三）设 \(f(x)=\begin{cases}\dfrac23 x^3,&x\le 1,\\[6pt]x^2,&x>1\end{cases}\)，则 \(f(x)\) 在 \(x=1\) 处的

(A) 左、右导数都存在.

(B) 左导数存在但右导数不存在.

(C) 左导数不存在但右导数存在.

(D) 左、右导数都不存在.

**【解】**
\[
f'_-(1)=\lim_{x\to 1^-}\frac{\dfrac23 x^3-\dfrac23}{x-1}=\frac23\lim_{x\to 1^-}\frac{(x-1)(x^2+x+1)}{x-1}=2,
\]
\[
f'_+(1)=\lim_{x\to 1^+}\frac{x^2-\dfrac23}{x-1}=\infty,
\]
则左导数存在但右导数不存在，故应选(B).

**例10** （2006，数三、四）设 \(f(x)\) 在 \(x=0\) 处连续，且 \(\lim_{h\to 0}\frac{f(h^2)}{h^2}=1\)，则

(A) \(f(0)=0\) 且 \(f'_-(0)\) 存在. (B) \(f(0)=1\) 且 \(f'_-(0)\) 存在.

(C) \(f(0)=0\) 且 \(f'_+(0)\) 存在. (D) \(f(0)=1\) 且 \(f'_+(0)\) 存在.` },
      { p: 59, md: R`**【解】** 由 \(f(x)\) 在 \(x=0\) 处连续，及 \(\lim_{h\to 0}\frac{f(h^2)}{h^2}=1\) 知 \(\lim_{h\to 0}f(h^2)=f(0)=0\)，

则 \(\lim_{h\to 0}\frac{f(h^2)}{h^2}=\lim_{h\to 0}\frac{f(h^2)-f(0)}{h^2-0}=1\)，令 \(h^2=\Delta x\)，即有 \(\lim_{\Delta x\to 0^+}\frac{f(\Delta x)-f(0)}{\Delta x-0}=1\)，

即 \(f'_+(0)=1\). 故应选(C).

**例11** （2003，数四）设函数 \(f(x)=|x^3-1|\varphi(x)\)，其中 \(\varphi(x)\) 在 \(x=1\) 处连续，则 \(\varphi(1)=0\) 是 \(f(x)\) 在 \(x=1\) 处可导的

(A) 充分必要条件.

(B) 必要但非充分条件.

(C) 充分但非必要条件.

(D) 既非充分也非必要条件.

**【解】**
\[
\begin{aligned}
f'_-(1)&=\lim_{x\to 1^-}\frac{f(x)-f(1)}{x-1}=\lim_{x\to 1^-}\frac{|x^3-1|\varphi(x)-0}{x-1}=\lim_{x\to 1^-}\frac{(1-x^3)\varphi(x)}{x-1}\\
&=\lim_{x\to 1^-}\frac{1-x^3}{x-1}\cdot\lim_{x\to 1^-}\varphi(x)=-3\varphi(1),
\end{aligned}
\]
\[
\begin{aligned}
f'_+(1)&=\lim_{x\to 1^+}\frac{f(x)-f(1)}{x-1}=\lim_{x\to 1^+}\frac{(x^3-1)\varphi(x)}{x-1}=\lim_{x\to 1^+}\frac{x^3-1}{x-1}\lim_{x\to 1^+}\varphi(x)=3\varphi(1),
\end{aligned}
\]
则 \(f(x)\) 在 \(x=1\) 点可导的充要条件是 \(f'_-(1)=f'_+(1)\)，即 \(-3\varphi(1)=3\varphi(1)\)，即 \(\varphi(1)=0\).
故应选(A).

**例12** （1989，数二）设 \(f(x)\) 在 \(x=a\) 的某个邻域内有定义，则 \(f(x)\) 在 \(x=a\) 处可导的一个充分条件是

(A) \(\lim_{h\to +\infty}h\left[f\left(a+\frac1h\right)-f(a)\right]\) 存在.

(B) \(\lim_{h\to 0}\frac{f(a+2h)-f(a+h)}{h}\) 存在.

(C) \(\lim_{h\to 0}\frac{f(a+h)-f(a-h)}{2h}\) 存在.

(D) \(\lim_{h\to 0}\frac{f(a)-f(a-h)}{h}\) 存在.

**【解】** （A）选项不是充分条件，对于(A)，令 \(\frac1h=\Delta x\)，则 \(\Delta x\to 0^+\)，只能得到 \(\lim_{\Delta x\to 0^+}\frac{f(a+\Delta x)-f(a)}{\Delta x}\) 存在，推不出 \(\lim_{\Delta x\to 0}\frac{f(a+\Delta x)-f(a)}{\Delta x}\) 存在，即推不出 \(f'(a)\) 存在.

而(B)(C)选项也不是充分条件，举例说明：令 \(f(x)=\begin{cases}(x-a)^2,&x\ne a,\\[4pt]1,&x=a,\end{cases}\)

有 \(\lim_{h\to 0}\frac{f(a+2h)-f(a+h)}{h}=\lim_{h\to 0}\frac{4h^2-h^2}{h}=0\) 的极限存在，

\(\lim_{h\to 0}\frac{f(a+h)-f(a-h)}{2h}=\lim_{h\to 0}\frac{h^2-(-h)^2}{2h}=0\) 的极限存在，

但 \(\lim_{\Delta x\to 0}\frac{f(a+\Delta x)-f(a)}{\Delta x}=\lim_{\Delta x\to 0}\frac{(\Delta x)^2-1}{\Delta x}=\infty\)，则 \(f(x)\) 在 \(x=a\) 点不可导.

由排除法知(D)是充分条件，事实上，令 \(-h=\Delta x\)，则
\[
\lim_{h\to 0}\frac{f(a)-f(a-h)}{h}=\lim_{\Delta x\to 0}\frac{f(a+\Delta x)-f(a)}{\Delta x},
\]
所以由(D)可推出 \(f(x)\) 在 \(x=a\) 处可导. 故应选(D).` },
      { p: 60, md: R`**例13** 若 \(f(x)\) 在 \(x_0\) 处可导，求下列极限

(1) \(\lim_{\Delta x\to 0}\frac{f(x_0+3\Delta x)-f(x_0)}{\Delta x}\)；

(2) \(\lim_{\Delta x\to 0}\frac{f(x_0)-f(x_0-2\Delta x)}{\Delta x}\)；

(3) \(\lim_{h\to 0}\frac{f(x_0+2h)-f(x_0-5h)}{h}\)；

(4) \(\lim_{n\to \infty}n\left[f\left(x_0-\frac1n\right)-f\left(x_0+\frac1{2n}\right)\right]\).

**【解】** 由导数的定义知

(1)
\[
\begin{aligned}
\lim_{\Delta x\to 0}\frac{f(x_0+3\Delta x)-f(x_0)}{\Delta x}&=\lim_{\Delta x\to 0}\frac{f(x_0+3\Delta x)-f(x_0)}{3\Delta x}\cdot 3\\
&=3\lim_{\Delta x\to 0}\frac{f(x_0+3\Delta x)-f(x_0)}{3\Delta x}=3f'(x_0).
\end{aligned}
\]

(2)
\[
\lim_{\Delta x\to 0}\frac{f(x_0)-f(x_0-2\Delta x)}{\Delta x}=2\lim_{\Delta x\to 0}\frac{f(x_0-2\Delta x)-f(x_0)}{-2\Delta x}=2f'(x_0).
\]

(3)
\[
\begin{aligned}
\lim_{h\to 0}\frac{f(x_0+2h)-f(x_0-5h)}{h}&=\lim_{h\to 0}\frac{[f(x_0+2h)-f(x_0)]-[f(x_0-5h)-f(x_0)]}{h}\\
&=\lim_{h\to 0}\frac{f(x_0+2h)-f(x_0)}{h}-\lim_{h\to 0}\frac{f(x_0-5h)-f(x_0)}{h}\\
&=2\lim_{h\to 0}\frac{f(x_0+2h)-f(x_0)}{2h}+5\lim_{h\to 0}\frac{f(x_0-5h)-f(x_0)}{-5h}\\
&=2f'(x_0)+5f'(x_0)=7f'(x_0).
\end{aligned}
\]

(4)
\[
\begin{aligned}
\lim_{n\to \infty}n\left[f\left(x_0-\frac1n\right)-f\left(x_0+\frac1{2n}\right)\right]&=\lim_{n\to \infty}n\left[f\left(x_0-\frac1n\right)-f(x_0)+f(x_0)-f\left(x_0+\frac1{2n}\right)\right]\\
&=\lim_{n\to \infty}\frac{f\left(x_0-\frac1n\right)-f(x_0)}{\frac1n}-\lim_{n\to \infty}\frac{f\left(x_0+\frac1{2n}\right)-f(x_0)}{\frac1n}\\
&=-\lim_{n\to \infty}\frac{f\left(x_0-\frac1n\right)-f(x_0)}{-\frac1n}-\frac12\lim_{n\to \infty}\frac{f\left(x_0+\frac1{2n}\right)-f(x_0)}{\frac1{2n}}\\
&=-f'(x_0)-\frac12 f'(x_0)=-\frac32 f'(x_0).
\end{aligned}
\]

**【注】** 利用导数的定义可以求极限：若 \(f(x)\) 在 \(x_0\) 点可导，则有
\[
\lim_{\Delta x\to 0}\frac{f(x_0+a\Delta x)-f(x_0)}{\Delta x}=af'(x_0)
\]
\[
\lim_{\Delta x\to 0}\frac{f(x_0)-f(x_0+a\Delta x)}{\Delta x}=-af'(x_0)
\]
\[
\lim_{\Delta x\to 0}\frac{f(x_0+a\Delta x)-f(x_0+b\Delta x)}{\Delta x}=(a-b)f'(x_0)
\]
其中 \(a,b\) 为常数.
\[
\lim_{\square\to x_0}\frac{f(\square)-f(x_0)}{\square-x_0}=f'(x_0)
\]
其中 \(\square\) 可为函数或数列表达式，且 \(\square\to x_0\).

**例14** （1994，数三）已知 \(f'(x_0)=-1\)，则 \(\lim_{x\to 0}\frac{x}{f(x_0-2x)-f(x_0-x)}=\underline{\quad\quad}\).

**【解】** 根据导数的定义求极限` },
      { p: 61, md: R`\[
\begin{aligned}
\lim_{x\to 0}\frac{f(x_0-2x)-f(x_0-x)}{x}&=\lim_{x\to 0}\frac{f(x_0-2x)-f(x_0)+f(x_0)-f(x_0-x)}{x}\\
&=\lim_{x\to 0}\frac{f(x_0-2x)-f(x_0)}{x}-\lim_{x\to 0}\frac{f(x_0-x)-f(x_0)}{x}\\
&=-2\lim_{x\to 0}\frac{f(x_0-2x)-f(x_0)}{-2x}+\lim_{x\to 0}\frac{f(x_0-x)-f(x_0)}{-x}\\
&=-2f'(x_0)+f'(x_0)=-f'(x_0)=1,
\end{aligned}
\]
则 \(\lim_{x\to 0}\frac{x}{f(x_0-2x)-f(x_0-x)}=1\)，故应填 1.

**例15** （2011，数二、三）设函数 \(f(x)\) 在 \(x=0\) 处可导，且 \(f(0)=0\)，则 \(\lim_{x\to 0}\frac{x^2f(x)-2f(x^3)}{x^3}=\)

(A) \(-2f'(0)\). (B) \(-f'(0)\). (C) \(f'(0)\). (D) 0.

**【解】**
\[
\begin{aligned}
\lim_{x\to 0}\frac{x^2f(x)-2f(x^3)}{x^3}&=\lim_{x\to 0}\frac{f(x)}{x}-2\lim_{x\to 0}\frac{f(x^3)}{x^3}\\
&=\lim_{x\to 0}\frac{f(x)-f(0)}{x-0}-2\lim_{x\to 0}\frac{f(x^3)-f(0)}{x^3-0}\\
&=f'(0)-2f'(0)=-f'(0),
\end{aligned}
\]
故应选(B).

**例16** （2013，数三）设曲线 \(y=f(x)\) 与 \(y=x^2-x\) 在点 \((1,0)\) 处有公共切线，则 \(\lim_{n\to \infty}nf\left(\frac{n}{n+2}\right)=\underline{\quad\quad}\).

**【解】** 由导数的几何意义知 \(f'(1)=\left.(x^2-x)'\right|_{x=1}=\left.(2x-1)\right|_{x=1}=1\)，且 \(f(1)=0\).

则
\[
\begin{aligned}
\lim_{n\to \infty}nf\left(\frac{n}{n+2}\right)&=\lim_{n\to \infty}\frac{f\left(\frac{n}{n+2}\right)-f(1)}{\frac1n}=\lim_{n\to \infty}\frac{f\left(\frac{n}{n+2}\right)-f(1)}{\frac{n}{n+2}-1}\cdot\frac{\frac{n}{n+2}-1}{\frac1n}\\
&=\lim_{n\to \infty}\frac{f\left(\frac{n}{n+2}\right)-f(1)}{\frac{n}{n+2}-1}\cdot\lim_{n\to \infty}\frac{\frac{n}{n+2}-1}{\frac1n}\qquad(\text{导数定义})\\
&=f'(1)\cdot(-2)=-2f'(1)=-2.
\end{aligned}
\]

**例17** 设 \(f(x)\) 在 \(x=1\) 处可导，且 \(f'(1)=1\)，求 \(\lim_{x\to 1}\frac{f(x)-f(1)}{x^{2023}-1}\).

**【解】**
\[
\begin{aligned}
\lim_{x\to 1}\frac{f(x)-f(1)}{x^{2023}-1}&=\lim_{x\to 1}\frac{f(x)-f(1)}{(x-1)(x^{2022}+x^{2021}+\cdots+x+1)}\\
&=\frac{f'(1)}{2023}=\frac1{2023}.
\end{aligned}
\]

**例18** 已知 \(f(x)\) 在 \(x=0\) 点可导，则 \(\lim_{x\to 0}\frac{f(4x)-f(-2x)}{x}=\underline{\quad\quad}\).

**【解】** 原式 \(=\lim_{x\to 0}\frac{f(4x)-f(0)+f(0)-f(-2x)}{x}\)` },
      { p: 62, md: R`\[
\begin{aligned}
&=\lim_{x\to0}\frac{f(4x)-f(0)}{x}-\lim_{x\to0}\frac{f(-2x)-f(0)}{x}\\
&=4\lim_{x\to0}\frac{f(4x)-f(0)}{4x}+2\lim_{x\to0}\frac{f(-2x)-f(0)}{-2x}\\
&=4f'(0)+2f'(0)=6f'(0).
\end{aligned}
\]

**例19** 若 \(f'(6)\) 存在，且 \(\lim\limits_{x\to2}\dfrac{f(2+2x)-f(6)}{x^2-4}=5\)，则 \(f'(6)=\underline{\qquad}\).

**【解】** 因 \(f'(6)\) 存在，由导数定义知
\[
\lim_{x\to2}\frac{f(2+2x)-f(6)}{(2+2x)-6}
=\lim_{x\to2}\frac{f(2+2x)-f(6)}{2(x-2)}
=f'(6)
\]
则
\[
\begin{aligned}
\lim_{x\to2}\frac{f(2+2x)-f(6)}{x^2-4}
&=\lim_{x\to2}\frac{f(2+2x)-f(6)}{2(x-2)}\cdot\frac{2}{x+2}\\
&=\lim_{x\to2}\frac{f(2+2x)-f(6)}{2(x-2)}\cdot\lim_{x\to2}\frac{2}{x+2}\\
&=f'(6)\cdot\frac12=\frac12f'(6).
\end{aligned}
\]
由题意知 \(\dfrac12f'(6)=5\)，则 \(f'(6)=10\).

### 2. 导数的几何意义

导数 \(f'(x_0)\) 在几何上表示曲线 \(y=f(x)\) 在点 \((x_0,f(x_0))\) 处切线的斜率.

如果函数 \(f(x)\) 在点 \(x_0\) 处可导，则曲线 \(y=f(x)\) 在点 \((x_0,f(x_0))\) 处必有切线，其切线方程为
\[
y-f(x_0)=f'(x_0)(x-x_0)
\]
如果 \(f'(x_0)\ne0\)，则此曲线 \(y=f(x)\) 在点 \((x_0,f(x_0))\) 处的法线方程为
\[
y-f(x_0)=-\frac{1}{f'(x_0)}(x-x_0)
\]
如果 \(f'(x_0)=0\)，则曲线 \(y=f(x)\) 在点 \((x_0,f(x_0))\) 处的切线方程为 \(y=f(x_0)\)，即曲线在点 \((x_0,f(x_0))\) 处有水平切线，而法线方程为 \(x=x_0\).

**【注】** （1）若函数 \(f(x)\) 在 \(x=x_0\) 处可导，则曲线 \(y=f(x)\) 在点 \((x_0,f(x_0))\) 处有切线，反之则不然. 例如曲线 \(y=x^{\frac13}\) 在点 \((0,0)\) 处有切线 \(x=0\)（\(y\) 轴），但函数 \(f(x)=x^{\frac13}\) 在 \(x=0\) 处不可导（\(f'(0)=\infty\)）.

（2）若函数 \(f(x)\) 在 \(x_0\) 处连续，且 \(f'(x_0)=\infty\)，则曲线 \(y=f(x)\) 在点 \((x_0,f(x_0))\) 处有切线，切线方程为 \(x=x_0\).

**例20** （2004，数一）曲线 \(y=\ln x\) 上与直线 \(x+y=1\) 垂直的切线方程为 \(\underline{\qquad}\).

**【解】** 设切点为 \((x_0,\ln x_0)\)，因切线与直线 \(x+y=1\) 垂直，则切线斜率 \(k=1\)，又 \(k=(\ln x)'\big|_{x=x_0}=\dfrac1{x_0}\)，则 \(\dfrac1{x_0}=1\)，即 \(x_0=1\)，于是切点为 \((1,0)\)，则切线方程为 \(y-0=x-1\)，即 \(y=x-1\). 故应填 \(y=x-1\).

**例21** （2010，数二）曲线 \(y=x^2\) 与曲线 \(y=a\ln x(a\ne0)\) 相切，则 \(a=\)

（A）\(4\mathrm{e}\). \(\qquad\)（B）\(3\mathrm{e}\). \(\qquad\)（C）\(2\mathrm{e}\). \(\qquad\)（D）\(\mathrm{e}\).` },
      { p: 63, md: R`**【解】** 设切点为 \((x_0,y_0)\)，由题意知
\[
\begin{cases}
y_0=x_0^2,\\
y_0=a\ln x_0,\\
2x_0=\dfrac{a}{x_0},
\end{cases}
\quad\text{解得}\quad
\begin{cases}
x_0=\sqrt{\mathrm{e}},\\
y_0=\mathrm{e},\\
a=2\mathrm{e},
\end{cases}
\]
故应选（C）.

**例22** （2008，数四）设 \(f(x)\) 连续，且 \(\lim\limits_{x\to0}\dfrac{f(x)}{x}=2\)，则曲线 \(y=f(x)\) 上对应 \(x=0\) 处的切线方程是 \(\underline{\qquad}\).

**【解】** 由 \(\lim\limits_{x\to0}\dfrac{f(x)}{x}=2\) 及 \(f(x)\) 连续得：\(\lim\limits_{x\to0}f(x)=f(0)=0\)，则切点为 \((0,0)\).

又切线斜率为 \(k=f'(0)=\lim\limits_{x\to0}\dfrac{f(x)-f(0)}{x-0}=\lim\limits_{x\to0}\dfrac{f(x)}{x}=2\)，所以，切线方程为 \(y-0=2(x-0)\)，即 \(y=2x\). 故应填 \(y=2x\).

**例23** 求曲线 \(y=\mathrm{e}^x+x^2+1\) 在点 \((0,2)\) 处的切线方程和法线方程.

**【解】** 由导数的几何意义知，\(y=\mathrm{e}^x+x^2+1\) 在 \((0,2)\) 点的切线斜率为
\[
k=y'\big|_{x=0}=(\mathrm{e}^x+x^2+1)'\big|_{x=0}=(\mathrm{e}^x+2x)\big|_{x=0}=1,
\]
则切线方程为 \(y-2=1(x-0)\)，即 \(y=x+2\)，法线方程为 \(y-2=-1(x-0)\)，即 \(y=-x+2\).

**例24** 曲线 \(y=x^3-3x\) 上切线平行于 \(x\) 轴的点为 \(\underline{\qquad}\).

**【解】** 设切点为 \((x_0,x_0^3-3x_0)\)，则切线斜率为 \(k=(x^3-3x)'\big|_{x=x_0}=3x_0^2-3\)，又因切线平行于 \(x\) 轴，则切线斜率 \(k=3x_0^2-3=0\)，解得 \(x_0=\pm1\)，则切点为 \((-1,2)\) 和 \((1,-2)\).

**例25** 在抛物线 \(y=x^2\) 上取横坐标为 \(x_1=1\) 及 \(x_2=3\) 的两点，作过这两点的割线，问该抛物线上哪一点的切线垂直于这条割线，并写出此切线方程.

**【解】** 割线的斜率为 \(k_1=\dfrac{3^2-1^2}{3-1}=4\).

设切点为 \((x_0,x_0^2)\)，则切线的斜率为 \(k_2=2x_0\)，因切线垂直于割线，则 \(k_1k_2=-1\)，即 \(8x_0=-1\)，解得 \(x_0=-\dfrac18\)，则切点为 \(\left(-\dfrac18,\dfrac1{64}\right)\)，切线方程为 \(y-\dfrac1{64}=-\dfrac14\left(x+\dfrac18\right)\)，即 \(y=-\dfrac14x-\dfrac1{64}\).

**例26** 过原点与曲线 \(y=\ln x\) 相切的切线方程为 \(\underline{\qquad}\).

**【解】** 设切点为 \((x_0,\ln x_0)\)，切线的斜率为 \(k=(\ln x)'\big|_{x=x_0}=\dfrac1{x_0}\)，则切线方程为 \(y-\ln x_0=\dfrac1{x_0}(x-x_0)\)，又切线过原点 \((0,0)\)，则 \(-\ln x_0=\dfrac1{x_0}(-x_0)\)，解得 \(x_0=\mathrm{e}\)，则切线方程为 \(y-\ln\mathrm{e}=\dfrac1{\mathrm{e}}(x-\mathrm{e})\)，即 \(y=\dfrac1{\mathrm{e}}x\).` },
      { p: 64, md: R`**例27** （1995，数四、五）设 \(f(x)\) 为可导函数，且满足条件 \(\lim\limits_{x\to0}\dfrac{f(1)-f(1-x)}{2x}=-1\)，则曲线 \(y=f(x)\) 在点 \((1,f(1))\) 处的切线斜率为

（A）\(2\). \(\qquad\)（B）\(-1\). \(\qquad\)（C）\(\dfrac12\). \(\qquad\)（D）\(-2\).

**【解】** 因 \(f(x)\) 可导，则
\[
\lim_{x\to0}\frac{f(1)-f(1-x)}{2x}
=\frac12\lim_{x\to0}\frac{f(1-x)-f(1)}{-x}
=\frac12f'(1)=-1,
\]
则 \(f'(1)=-2\)，所以切线斜率为 \(k=f'(1)=-2\). 故应选（D）.

**例28** （2003，数三）已知曲线 \(y=x^3-3a^2x+b\) 与 \(x\) 轴相切，则 \(b^2\) 可以通过 \(a\) 表示为 \(b^2=\underline{\qquad}\).

**【解】** 因曲线与 \(x\) 轴相切，可知 \(x\) 轴即 \(y=0\) 是曲线的切线.

设对应的切点为 \((x_0,y_0)\)，则切点既在曲线上又在 \(x\) 轴上.

则 \(y_0=x_0^3-3a^2x_0+b=0\)，得 \(b=3a^2x_0-x_0^3=x_0(3a^2-x_0^2)\)，又切线斜率 \(k=(x^3-3a^2x+b)'\big|_{x=x_0}=3x_0^2-3a^2=0\)，得 \(x_0^2=a^2\)，所以，\(b^2=x_0^2(3a^2-x_0^2)^2=a^2(3a^2-a^2)^2=4a^6\)，故应填 \(4a^6\).

**例29** 设 \(f(x)\) 连续，且 \(\lim\limits_{x\to0}\dfrac{3-f(1+x)}{2x}=-1\)，求曲线 \(y=f(x)\) 上对应 \(x=1\) 处的切线方程和法线方程.

**【解】** 由 \(\lim\limits_{x\to0}\dfrac{3-f(1+x)}{2x}=-1\) 及 \(\lim\limits_{x\to0}2x=0\) 知，\(\lim\limits_{x\to0}[3-f(1+x)]=0\)，即
\[
\lim_{x\to0}f(1+x)=3
\]
又 \(f(x)\) 连续，\(\lim\limits_{x\to0}f(1+x)=f(1)\)，知 \(f(1)=3\)，则切点为 \((1,3)\).

切线斜率为
\[
\begin{aligned}
k=f'(1)&=\lim_{x\to0}\frac{f(1+x)-f(1)}{x}
=\lim_{x\to0}\frac{f(1+x)-3}{x}\\
&=-2\lim_{x\to0}\frac{3-f(1+x)}{2x}=2.
\end{aligned}
\]
则切线方程为 \(y-3=2(x-1)\)，即 \(y=2x+1\).

法线方程为 \(y-3=-\dfrac12(x-1)\)，即 \(y=-\dfrac12x+\dfrac72\).

## 二、微分的概念及几何意义

### 1. 微分的概念

**定义**（微分） 设函数 \(y=f(x)\) 在点 \(x_0\) 的某一邻域内有定义，如果函数的增量 \(\Delta y=f(x_0+\Delta x)-f(x_0)\) 可以表示为
\[
\Delta y=A\Delta x+o(\Delta x),\quad(\Delta x\to0)
\]
其中 \(A\) 为不依赖于 \(\Delta x\) 的常数，\(o(\Delta x)\) 是 \(\Delta x\) 的高阶无穷小，则称函数 \(y=f(x)\) 在点 \(x_0\) 处可` },
      { p: 65, md: R`微，并称 \(\Delta y\) 的线性主部 \(A\Delta x\) 为函数 \(y=f(x)\) 在点 \(x_0\) 处的微分，记作 \(\mathrm{d}y,\mathrm{d}f(x)\)，即
\[
\mathrm{d}y=A\Delta x
\]

**定理** 函数 \(y=f(x)\) 在点 \(x_0\) 处可微的充分必要条件是 \(f(x)\) 在点 \(x_0\) 处可导，且有
\[
\mathrm{d}y=f'(x_0)\Delta x=f'(x_0)\mathrm{d}x
\]
在点 \(x\) 处，常记 \(\mathrm{d}y=f'(x)\mathrm{d}x\).

**【注】** （1）函数 \(y=f(x)\) 的微分 \(\mathrm{d}y=f'(x)\mathrm{d}x\)，等于函数的导数 \(f'(x)\) 乘以自变量的微分 \(\mathrm{d}x\).

（2）若函数 \(y=f(x)\) 在 \(x_0\) 点可微，则函数的增量 \(\Delta y\) 与函数的微分 \(\mathrm{d}y\) 之间满足 \(\Delta y=\mathrm{d}y+o(\Delta x)\).

**例30** 设函数 \(y=f(x)\) 在 \(x=x_0\) 处可微，\(\Delta y=f(x_0+\Delta x)-f(x_0)\)，则当 \(\Delta x\to0\) 时，必有

（A）\(\mathrm{d}y\) 是比 \(\Delta x\) 高阶的无穷小量.

（B）\(\mathrm{d}y\) 是比 \(\Delta x\) 低阶的无穷小量.

（C）\(\Delta y-\mathrm{d}y\) 是比 \(\Delta x\) 高阶的无穷小量.

（D）\(\Delta y-\mathrm{d}y\) 是与 \(\Delta x\) 同阶的无穷小量.

**【解】** 因 \(y=f(x)\) 在 \(x=x_0\) 点可微，由微分定义知 \(\Delta y=\mathrm{d}y+o(\Delta x)\)，即 \(\Delta y-\mathrm{d}y=o(\Delta x)\)，则 \(\Delta y-\mathrm{d}y\) 是比 \(\Delta x\) 高阶的无穷小量，知选项（C）正确.

而 \(\mathrm{d}y=f'(x_0)\Delta x\)，则 \(\dfrac{\mathrm{d}y}{\Delta x}=f'(x_0)\)，由于 \(f'(x_0)\) 是否为零不清楚，则（A）不一定正确，（B）不正确，（D）也不正确，故应选（C）.

**例31** 若 \(\lim\limits_{x\to a}\dfrac{f(x)-f(a)}{x-a}=3\)，则 \(y=f(x)\) 在 \(x=a\) 点的微分 \(\mathrm{d}y=\underline{\qquad}\).

**【解】** 由导数定义知，\(f'(a)=\lim\limits_{x\to a}\dfrac{f(x)-f(a)}{x-a}=3\)，则 \(y=f(x)\) 在 \(x=a\) 点可导，所以 \(y=f(x)\) 在 \(x=a\) 点可微，微分 \(\mathrm{d}y=f'(a)\mathrm{d}x=3\mathrm{d}x\).

**例32** （2002，数二）设函数 \(f(u)\) 可导，\(y=f(x^2)\). 当自变量 \(x\) 在 \(x=-1\) 处取得增量 \(\Delta x=-0.1\) 时，相应的函数增量 \(\Delta y\) 的线性主部为 \(0.1\)，则 \(f'(1)=\)

（A）\(-1\). \(\qquad\)（B）\(0.1\). \(\qquad\)（C）\(1\). \(\qquad\)（D）\(0.5\).

**【解】** 由微分定义知，\(\Delta y\) 的线性主部即为函数在 \(x=-1\) 处的微分 \(\mathrm{d}y\).

则 \(\mathrm{d}y\big|_{x=-1}=0.1\). 又
\[
\begin{aligned}
\mathrm{d}y\big|_{x=-1}
&=y'\big|_{x=-1}\cdot\Delta x\\
&=[f'(x^2)\cdot2x]\big|_{x=-1}\cdot\Delta x\\
&=-2f'(1)\cdot(-0.1)=0.2f'(1).
\end{aligned}
\]
于是有 \(0.2f'(1)=0.1\)，所以，\(f'(1)=0.5\). 故应选（D）.

**例33** （1988，数一、二、三）若函数 \(y=f(x)\) 有 \(f'(x_0)=\dfrac12\)，则当 \(\Delta x\to0\) 时，该函数在 \(x=x_0\) 处的微分 \(\mathrm{d}y\) 是

（A）与 \(\Delta x\) 等价的无穷小. \(\qquad\)（B）与 \(\Delta x\) 同阶的无穷小.` },
      { p: 66, md: R`（C）比 \(\Delta x\) 低阶的无穷小. \(\qquad\)（D）比 \(\Delta x\) 高阶的无穷小.

**【解】** 由微分定义及计算公式得 \(y=f(x)\) 在 \(x=x_0\) 处的微分 \(\mathrm{d}y=f'(x_0)\Delta x=\dfrac12\Delta x\)，则
\[
\lim_{\Delta x\to0}\frac{\mathrm{d}y}{\Delta x}
=\lim_{\Delta x\to0}\frac{\frac12\Delta x}{\Delta x}
=\frac12,
\]
所以 \(\mathrm{d}y\) 与 \(\Delta x\) 是同阶无穷小. 故应选（B）.

### 2. 微分的几何意义

微分 \(\mathrm{d}y=f'(x_0)\mathrm{d}x\) 在几何上表示曲线 \(y=f(x)\) 的切线上的点的纵坐标的增量.

\(\Delta y=f(x_0+\Delta x)-f(x_0)\) 在几何上表示曲线 \(y=f(x)\) 上的点的纵坐标的增量.

当自变量的增量 \(|\Delta x|\) 充分小时，\(\Delta y\approx\mathrm{d}y\).

**例34** （2006，数三、四）设 \(y=f(x)\) 具有二阶导数，且 \(f'(x)>0\)，\(f''(x)>0\). \(\Delta x\) 为自变量在 \(x_0\) 处的增量，\(\Delta y\) 与 \(\mathrm{d}y\) 分别为 \(y=f(x)\) 在点 \(x_0\) 处对应的增量与微分，若 \(\Delta x>0\)，则

（A）\(0<\mathrm{d}y<\Delta y\). \(\qquad\)（B）\(0<\Delta y<\mathrm{d}y\). \(\qquad\)（C）\(\Delta y<\mathrm{d}y<0\). \(\qquad\)（D）\(\mathrm{d}y<\Delta y<0\).

**【解】** 因 \(f'(x)>0\)，\(f''(x)>0\)，则曲线 \(y=f(x)\) 递增，是凹的.

因此，当 \(\Delta x>0\) 时，\(\Delta y=f(x_0+\Delta x)-f(x_0)>0\)，\(\mathrm{d}y=f'(x_0)\Delta x>0\)，故排除（C）（D）选项.

因曲线是凹的，则曲线在上，切线在下，由微分的几何意义知，有 \(\Delta y>\mathrm{d}y\)，所以 \(0<\mathrm{d}y<\Delta y\). 故应选（A）.

**【注】** 利用泰勒公式 \(f(x_0+\Delta x)=f(x_0)+f'(x_0)\Delta x+\dfrac{f''(\xi)}2(\Delta x)^2\)，即 \(\Delta y=\mathrm{d}y+\dfrac{f''(\xi)}2(\Delta x)^2>\mathrm{d}y>0\).

## 三、连续、可导、可微之间的关系

**定理** 若函数 \(y=f(x)\) 在点 \(x_0\) 处可导，则 \(f(x)\) 在点 \(x_0\) 处连续.

**【注】** （1）反之不成立. 即若 \(f(x)\) 在 \(x_0\) 处连续，则 \(f(x)\) 在 \(x_0\) 处不一定可导.

（2）可导一定连续，但连续不一定可导.

（3）不连续一定不可导，若 \(f(x)\) 在 \(x_0\) 处不连续，则 \(f(x)\) 在 \(x_0\) 处一定不可导.

**定理** 函数 \(y=f(x)\) 在点 \(x_0\) 处可微的充分必要条件是 \(f(x)\) 在 \(x_0\) 处可导，且 \(\mathrm{d}y=f'(x_0)\mathrm{d}x\).

**【注】** （1）可导 \(\Leftrightarrow\) 可微.

（2）可微一定连续，但连续不一定可微.

\`\`\`
        ┌──────┐   ⇍    ┌──────┐
        │ 连续 │ ◀────── │ 可导 │
        └──────┘          └──────┘
           ▲                  ↕
           │ ⇍                ▼
           └──────────────┌──────┐
                          │ 可微 │
                          └──────┘
\`\`\`` },
      { p: 67, md: R`**例35** 设函数
\[
f(x)=
\begin{cases}
x^2,&x\le1,\\
ax+b,&x>1,
\end{cases}
\]
那么当 \(a,b\) 取何值时，\(f(x)\) 在 \(x=1\) 处可导？

**【解】** 因可导必连续，若 \(f(x)\) 在 \(x=1\) 处可导，则 \(f(x)\) 在 \(x=1\) 处必连续.
\[
\lim_{x\to1^-}f(x)=\lim_{x\to1^-}x^2=1,\quad
\lim_{x\to1^+}f(x)=\lim_{x\to1^+}(ax+b)=a+b,\quad
f(1)=1,
\]
若要 \(f(x)\) 在 \(x=1\) 处连续，则 \(\lim\limits_{x\to1^-}f(x)=\lim\limits_{x\to1^+}f(x)=f(1)\)，即 \(a+b=1\).
\[
f'_-(1)=\lim_{x\to1^-}\frac{f(x)-f(1)}{x-1}
=\lim_{x\to1^-}\frac{x^2-1}{x-1}
=\lim_{x\to1^-}(x+1)=2,
\]
\[
f'_+(1)=\lim_{x\to1^+}\frac{f(x)-f(1)}{x-1}
=\lim_{x\to1^+}\frac{ax+b-1}{x-1}
=\lim_{x\to1^+}\frac{ax-a}{x-1}=a,
\]
又 \(f(x)\) 在 \(x=1\) 点可导，则 \(f'_-(1)=f'_+(1)\)，即 \(a=2\). 则 \(a=2,b=-1\).

所以，当 \(a=2,b=-1\) 时，\(f(x)\) 在 \(x=1\) 处可导.

**例36** 设函数
\[
f(x)=
\begin{cases}
\sin2x+x^2\cos\dfrac1x,&x\ne0,\\
0,&x=0,
\end{cases}
\]
则 \(f(x)\) 在 \(x=0\) 处不成立的是

（A）连续. \(\qquad\)（B）可导. \(\qquad\)（C）可微. \(\qquad\)（D）不可导.

**【解】** 由导数的定义知
\[
\begin{aligned}
f'(0)&=\lim_{x\to0}\frac{f(x)-f(0)}{x-0}
=\lim_{x\to0}\frac{\sin2x+x^2\cos\frac1x}{x}\\
&=\lim_{x\to0}\frac{\sin2x}{x}+\lim_{x\to0}x\cos\frac1x=2,
\end{aligned}
\]
则 \(f(x)\) 在 \(x=0\) 处可导，从而 \(f(x)\) 在 \(x=0\) 处连续，可微. 故应选（D）.

**例37** 试判断
\[
f(x)=
\begin{cases}
\dfrac{\sin|x|}{x},&x\ne0,\\
1,&x=0
\end{cases}
\]
在 \(x=0\) 处的连续性与可导性.

**【解】** 因 \(\lim\limits_{x\to0^-}f(x)=\lim\limits_{x\to0^-}\dfrac{\sin(-x)}x=\lim\limits_{x\to0^-}\dfrac{-x}x=-1\)，
\[
\lim_{x\to0^+}f(x)=\lim_{x\to0^+}\frac{\sin x}{x}=1,
\]
又 \(f(0)=1\)，则 \(f(x)\) 在 \(x=0\) 处不连续，从而也不可导.

**例38** （2020，数一）设函数 \(f(x)\) 在 \((-1,1)\) 上有定义，且 \(\lim\limits_{x\to0}f(x)=0\)，则

（A）当 \(\lim\limits_{x\to0}\dfrac{f(x)}{\sqrt{|x|}}=0\) 时，\(f(x)\) 在 \(x=0\) 处可导.

（B）当 \(\lim\limits_{x\to0}\dfrac{f(x)}{x^2}=0\) 时，\(f(x)\) 在 \(x=0\) 处可导.

（C）当 \(f(x)\) 在 \(x=0\) 处可导时，\(\lim\limits_{x\to0}\dfrac{f(x)}{\sqrt{|x|}}=0\).

（D）当 \(f(x)\) 在 \(x=0\) 处可导时，\(\lim\limits_{x\to0}\dfrac{f(x)}{x^2}=0\).

**【解】** 可通过举反例说明（A）（B）（D）不正确.

例如取
\[
f(x)=
\begin{cases}
x^3,&x\ne0,\\
1,&x=0,
\end{cases}
\]
则 \(f(x)\) 在 \((-1,1)\) 内有定义，且 \(\lim\limits_{x\to0}f(x)=\lim\limits_{x\to0}x^3=0\)，` },
    ],
    quiz: [{"q": "设 $f(x)$ 在 $x_0$ 处可导，则 $\\lim_{h\\to0}\\frac{f(x_0+2h)-f(x_0)}{h}=$", "options": ["$f'(x_0)$", "$2f'(x_0)$", "$\\frac12f'(x_0)$", "$0$"], "answer": 1, "explain": "凑导数定义：$\\frac{f(x_0+2h)-f(x_0)}{2h}\\to f'(x_0)$，故原式为 $2f'(x_0)$。"}, {"q": "$f(x)=|x|$ 在 $x=0$ 处", "options": ["连续且可导", "连续但不可导", "不连续", "可导但不连续"], "answer": 1, "explain": "$|x|$ 在 0 连续；左导数 $-1$、右导数 $1$，不相等，故不可导。"}, {"q": "曲线 $y=\\ln x$ 上与直线 $x+y=1$ 垂直的切线方程为", "options": ["$y=x-1$", "$y=x$", "$y=-x+1$", "$y=\\frac1x$"], "answer": 0, "explain": "切线斜率为 1，$y'=1/x=1\\Rightarrow x=1,y=0$，切线 $y=x-1$。"}, {"q": "函数在一点可导是该点可微的", "options": ["充分条件", "必要条件", "充分必要条件", "无关条件"], "answer": 2, "explain": "一元函数可导与可微等价。"}]
  };
})();
