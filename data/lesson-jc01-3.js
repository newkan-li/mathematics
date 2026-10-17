window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["jc01_s2"] = {
    id: "jc01_s2",
    ch: "第一章 函数 极限 连续",
    title: "第三节 函数的连续性",
    book: "李永乐《数学复习全书·基础篇》",
    pages: [41, 54],
    img: "assets/img/jichu",
    content: [
      { p: 41, md: R`因而
\[
\lim_{x\to0}\frac{\cos x-e^{-\frac{x^2}{2}}}{x^4}
=\lim_{x\to0}\frac{-\frac{1}{12}x^4+o(x^4)}{x^4}
=-\frac{1}{12}.
\]

**例79**　设 \(\lim_{x\to0}\frac{\ln(1+x)-(ax+bx^2)}{x^2}=2\)，求 \(a,b\).

**【解】**　用泰勒公式 \(\ln(1+x)=x-\frac{x^2}{2}+o(x^2)\)，由 \(\lim_{x\to0}\frac{\ln(1+x)-(ax+bx^2)}{x^2}=2\)，得
\[
\lim_{x\to0}\frac{(1-a)x-\left(\frac{1}{2}+b\right)x^2+o(x^2)}{x^2}=2,
\]
所以 \(1-a=0\)，\(-\left(\frac{1}{2}+b\right)=2\)，解得 \(a=1,\ b=-\frac{5}{2}\).

**【评注】**　也可用洛必达法则作答.

**例80**　设 \(f(x)\) 二阶可导，\(f(0)=0\)，\(f'(0)=1\)，\(f''(0)=2\)，求极限 \(\lim_{x\to0}\frac{f(x)-x}{x^2}\).

**【解】**　用泰勒公式
\[
f(x)=f(0)+f'(0)x+\frac{1}{2}f''(0)x^2+o(x^2)=x+x^2+o(x^2)
\]
则
\[
\lim_{x\to0}\frac{f(x)-x}{x^2}=\lim_{x\to0}\frac{x^2+o(x^2)}{x^2}=1.
\]

#### 10. 求极限的其他方法

（1）利用导数的定义求极限（见第二章）.

（2）利用定积分的定义求极限（见第三章）.

（3）利用级数收敛的性质求极限（见第七章）（数学二不要求）.

## 第三节　函数的连续性

### 一、连续性的概念

**定义1**　设 \(y=f(x)\) 在点 \(x_0\) 的某邻域内有定义，若
\[
\lim_{\Delta x\to0}\Delta y=\lim_{\Delta x\to0}[f(x_0+\Delta x)-f(x_0)]=0
\]
则称 \(y=f(x)\) 在点 \(x_0\) 处连续，并称 \(x_0\) 为 \(f(x)\) 的连续点.

**定义2**　设 \(y=f(x)\) 在点 \(x_0\) 的某邻域内有定义，若 \(\lim_{x\to x_0}f(x)=f(x_0)\)，则称 \(y=f(x)\) 在点 \(x_0\) 处连续，\(x_0\) 为 \(f(x)\) 的连续点.

**【注】**　（1）以上两个定义是等价的.

（2）由定义2可知，\(f(x)\) 在 \(x_0\) 点连续 \(\Leftrightarrow\)
\[
\begin{cases}
1^\circ & f(x_0)\text{ 有定义}\\
2^\circ & \lim_{x\to x_0}f(x)\text{ 存在为 }A\\
3^\circ & A=f(x_0)
\end{cases}
\]` },
      { p: 42, md: R`以上三条都成立，缺一不可.

（3）\(f(x)\) 在 \(x_0\) 点连续 \(\Rightarrow f(x)\) 在 \(x_0\) 点极限存在，但反之不成立.

**定义3**　若 \(\lim_{x\to x_0^-}f(x)=f(x_0)\)，则称 \(y=f(x)\) 在点 \(x_0\) 处左连续；

若 \(\lim_{x\to x_0^+}f(x)=f(x_0)\)，则称 \(y=f(x)\) 在点 \(x_0\) 处右连续.

**定理**　函数 \(f(x)\) 在点 \(x_0\) 处连续的充要条件是 \(f(x)\) 在点 \(x_0\) 处既左连续又右连续.

**【注】**　此定理常用于考查分段函数在分界点的连续性：即考虑左、右极限及函数值，若三者相等，则连续；否则，就不连续.

**定义4**　如果 \(f(x)\) 在区间 \((a,b)\) 内每点都连续，则称 \(f(x)\) 在 \((a,b)\) 内连续. 若 \(f(x)\) 在区间 \((a,b)\) 内连续，在 \(x=a\) 处右连续，在 \(x=b\) 处左连续，则称 \(f(x)\) 在 \([a,b]\) 上连续.

**例1**　补充定义 \(f(0)\)，使 \(f(x)=\frac{\sqrt{1+x}-\sqrt{1-x}}{x}\) 在 \(x=0\) 处连续.

**【解】**　由连续定义知，\(f(x)\) 在 \(x=0\) 点连续 \(\Leftrightarrow \lim_{x\to0}f(x)=f(0)\).

则
\[
f(0)=\lim_{x\to0}f(x)=\lim_{x\to0}\frac{\sqrt{1+x}-\sqrt{1-x}}{x}
=\lim_{x\to0}\frac{2x}{x(\sqrt{1+x}+\sqrt{1-x})}\quad\text{（分子有理化）}
\]
\[
=\lim_{x\to0}\frac{2}{\sqrt{1+x}+\sqrt{1-x}}=1.
\]
所以，当 \(f(0)=1\) 时，\(f(x)\) 在 \(x=0\) 处连续.

**例2**　判断函数
\[
f(x)=
\begin{cases}
\frac{\ln(1+x)}{x}, & -1<x<0\\
2, & x=0\\
\frac{2\sin\frac{x}{2}}{x}, & x>0
\end{cases}
\]
在 \(x=0\) 点的连续性.

**【解】**　\(f(x)\) 是分段函数，\(x=0\) 是其分界点，考虑连续性应先求左、右极限、函数值.
\[
\left.
\begin{aligned}
\lim_{x\to0^-}f(x)&=\lim_{x\to0^-}\frac{\ln(1+x)}{x}=\lim_{x\to0^-}\frac{x}{x}=1,\\
\lim_{x\to0^+}f(x)&=\lim_{x\to0^+}\frac{2\sin\frac{x}{2}}{x}=\lim_{x\to0^+}\frac{2\cdot\frac{x}{2}}{x}=1
\end{aligned}
\right\}
\Rightarrow \lim_{x\to0}f(x)=1,
\]
而 \(f(0)=2\)，则 \(\lim_{x\to0}f(x)\ne f(0)\)，所以 \(f(x)\) 在 \(x=0\) 点不连续.

**例3**　（2002，数二）设函数
\[
f(x)=
\begin{cases}
\frac{1-e^{\tan x}}{\arcsin\frac{x}{2}}, & x>0\\
ae^{2x}, & x\le0
\end{cases}
\]
在 \(x=0\) 处连续，则 \(a=\) ______.

**【解】**　要使分段函数 \(f(x)\) 在分界点 \(x=0\) 处连续，只需 \(\lim_{x\to0^-}f(x)=\lim_{x\to0^+}f(x)=f(0)\) 即可.
\[
\lim_{x\to0^+}f(x)=\lim_{x\to0^+}\frac{1-e^{\tan x}}{\arcsin\frac{x}{2}}
=\lim_{x\to0^+}\frac{-\tan x}{\frac{x}{2}}
=\lim_{x\to0^+}\frac{-x}{\frac{x}{2}}=-2,
\]` },
      { p: 43, md: R`\[
\lim_{x\to0^-}f(x)=\lim_{x\to0^-}ae^{2x}=a,\quad f(0)=a,
\]
当 \(\lim_{x\to0^-}f(x)=\lim_{x\to0^+}f(x)=f(0)\)，即 \(a=-2\) 时，\(f(x)\) 在 \(x=0\) 处连续.

**例4**　试讨论
\[
f(x)=
\begin{cases}
x^\alpha\sin\frac{1}{x}, & x\ne0\\
0, & x=0
\end{cases}
\]
在 \(x=0\) 处的连续性（\(\alpha\) 为常数）.

**【解】**　因 \(f(x)\) 在 \(x=0\) 的左、右方表示式相同，故不必讨论左右极限.
\[
\lim_{x\to0}f(x)=\lim_{x\to0}x^\alpha\sin\frac{1}{x}=
\begin{cases}
0, & \alpha>0\text{（无穷小乘有界量）}\\
\text{不存在}, & \alpha\le0
\end{cases}
\]
所以，当 \(\alpha>0\) 时，\(\lim_{x\to0}f(x)=0=f(0)\)，则 \(f(x)\) 在 \(x=0\) 处连续；

当 \(\alpha\le0\) 时，\(\lim_{x\to0}f(x)\) 不存在，则 \(f(x)\) 在 \(x=0\) 处不连续.

**例5**　（2008，数二）设 \(f(x)\) 连续，\(\lim_{x\to0}\frac{1-\cos[xf(x)]}{(e^{x^2}-1)f(x)}=1\)，则 \(f(0)=\) ______.

**【解】**　
\[
\lim_{x\to0}\frac{1-\cos[xf(x)]}{(e^{x^2}-1)f(x)}
=\lim_{x\to0}\frac{\frac{1}{2}[xf(x)]^2}{x^2f(x)}
=\lim_{x\to0}\frac{1}{2}f(x)=1,
\]
得 \(\lim_{x\to0}f(x)=2\).

由 \(f(x)\) 连续，则 \(f(0)=\lim_{x\to0}f(x)=2\).

**例6**　（2003，数三）设 \(f(x)=\frac{1}{\pi x}+\frac{1}{\sin\pi x}-\frac{1}{\pi(1-x)}\)，\(x\in\left[\frac{1}{2},1\right)\)，试补充定义 \(f(1)\)，使得 \(f(x)\) 在 \(\left[\frac{1}{2},1\right]\) 上连续.

**【解】**　显然 \(f(x)\) 在 \(\left[\frac{1}{2},1\right)\) 内连续，要使 \(f(x)\) 在 \(\left[\frac{1}{2},1\right]\) 上连续，只需 \(f(x)\) 在 \(x=1\) 点左连续即可，即 \(\lim_{x\to1^-}f(x)=f(1)\).
\[
\lim_{x\to1^-}f(x)=\lim_{x\to1^-}\frac{1}{\pi x}+\lim_{x\to1^-}\left[\frac{1}{\sin\pi x}-\frac{1}{\pi(1-x)}\right]
=\frac{1}{\pi}+\lim_{x\to1^-}\frac{\pi(1-x)-\sin\pi x}{\pi(1-x)\sin\pi x}
\]
\[
\overset{\text{令 }1-x=t}{=}\frac{1}{\pi}+\lim_{t\to0^+}\frac{\pi t-\sin(\pi-\pi t)}{\pi t\sin(\pi-\pi t)}
=\frac{1}{\pi}+\lim_{t\to0^+}\frac{\pi t-\sin\pi t}{\pi t\sin\pi t}
\]
\[
=\frac{1}{\pi}+\lim_{t\to0^+}\frac{\pi t-\sin\pi t}{\pi^2t^2}
=\frac{1}{\pi}+\lim_{t\to0^+}\frac{\pi-\pi\cos\pi t}{2\pi^2t}
\]
\[
=\frac{1}{\pi}+\lim_{t\to0^+}\frac{\pi^2\sin\pi t}{2\pi^2}
=\frac{1}{\pi}+0=\frac{1}{\pi}.
\]
因此，定义 \(f(1)=\frac{1}{\pi}\)，有 \(\lim_{x\to1^-}f(x)=f(1)\)，则 \(f(x)\) 在 \(x=1\) 点连续，从而 \(f(x)\) 在 \(\left[\frac{1}{2},1\right]\) 上连续.` },
      { p: 44, md: R`### 二、连续函数的运算与初等函数的连续性

#### 1. 连续函数的运算

**定理**（四则运算）　若函数 \(f(x)\) 和 \(g(x)\) 在 \(x_0\) 处都连续，则 \(f(x)\pm g(x)\)，\(f(x)g(x)\)，\(\frac{f(x)}{g(x)}\)（\(g(x_0)\ne0\)）在点 \(x_0\) 处也连续.

**定理**（复合函数的连续性）　如果函数 \(u=\varphi(x)\) 在点 \(x=x_0\) 处连续，\(\varphi(x_0)=u_0\)，而函数 \(y=f(u)\) 在点 \(u=u_0\) 处连续，则复合函数 \(y=f[\varphi(x)]\) 在 \(x=x_0\) 处连续，即 \(\lim_{x\to x_0}f[\varphi(x)]=f[\varphi(x_0)]\).

**【注】**　只要 \(\lim_{x\to x_0}\varphi(x)=u_0\)，而 \(f(u)\) 在 \(u_0\) 点连续，则
\[
\lim_{x\to x_0}f[\varphi(x)]=f[\lim_{x\to x_0}\varphi(x)]=f(u_0)
\]
即当 \(f(u)\) 连续时，函数符号 \(f\) 与极限号可以变换次序.

**定理**（反函数的连续性）　设函数 \(y=f(x)\) 在某区间上连续，且单调增加（减少），则它的反函数 \(y=f^{-1}(x)\) 在对应区间上连续，且单调增加（减少）.

#### 2. 初等函数的连续性

**定理**　基本初等函数在其定义域内都是连续的.

**定理**　初等函数在其定义区间内都是连续的.

**【注】**　所谓定义区间，是指包含在定义域内的区间.

分段函数多数不是初等函数，在其定义域内不一定全是连续的，其定义域内除分界点之外的点，往往都连续，但在分界点上不一定连续，要单独考虑.

**例7**　下列命题错误的是

（A）若 \(f(x)\) 在 \(x_0\) 处连续，\(g(x)\) 在 \(x_0\) 处不连续，则 \(f(x)+g(x)\) 在 \(x_0\) 处不连续.

（B）若 \(f(x)\) 在 \(x_0\) 处连续，则 \(\frac{1}{f(x)}\) 在 \(x_0\) 处也连续.

（C）若 \(f(x)\) 在 \(x_0\) 处连续，则 \(|f(x)|\) 在 \(x_0\) 处也连续.

（D）若 \(f(x)\) 在 \(x_0\) 处连续，\(f(x)\ne0\)，且 \(f(x)g(x)\) 在 \(x_0\) 处连续，则 \(g(x)\) 在 \(x_0\) 处连续.

**【解】**　选项（A）正确. 反证法：若 \(f(x)+g(x)\) 在 \(x_0\) 处连续，则 \(g(x)=[f(x)+g(x)]-f(x)\)，知 \(g(x)\) 在 \(x_0\) 处连续，与已知矛盾. 所以 \(f(x)+g(x)\) 在 \(x_0\) 处不连续.

选项（B）错误. 反例：如 \(f(x)=x\)，\(x_0=0\)，则 \(f(x)\) 在 \(x=0\) 点连续，但 \(\frac{1}{f(x)}=\frac{1}{x}\) 在 \(x=0\) 点不连续，从而（B）不正确.

选项（C）正确. 因为 \(|f(x)|=\sqrt{f^2(x)}\)，根据复合函数的连续性知，当 \(f(x)\) 在 \(x_0\) 处连续时，则 \(|f(x)|\) 在 \(x_0\) 处也连续.

（或利用连续定义：因 \(f(x)\) 在 \(x_0\) 点连续 \(\Rightarrow \lim_{x\to x_0}f(x)=f(x_0)\Rightarrow \lim_{x\to x_0}|f(x)|=|f(x_0)|\Rightarrow |f(x)|\) 在 \(x_0\) 处也连续）.

选项（D）正确. 由于 \(g(x)=f(x)g(x)\cdot\frac{1}{f(x)}\)，而由 \(f(x)\) 在 \(x_0\) 点连续，且 \(f(x)\ne0\) 知，\(\frac{1}{f(x)}\) 在 \(x_0\) 点也连续，又 \(f(x)g(x)\) 在 \(x_0\) 点连续，` },
      { p: 45, md: R`由乘法的连续性知，\(g(x)\) 在 \(x_0\) 点连续，从而（D）正确.

（或 \(g(x)=\frac{f(x)g(x)}{f(x)}\)，又 \(f(x)g(x)\)，\(f(x)\) 在 \(x_0\) 处都连续，且 \(f(x)\ne0\)，由商的连续性知，\(g(x)\) 在 \(x_0\) 点连续）.

故应选（B）.

**例8**　（2002，数三）设 \(a\ne\frac{1}{2}\)，则 \(\lim_{n\to\infty}\ln\left[\frac{n-2na+1}{n(1-2a)}\right]^n=\) ______.

**【解】**　因 \(\ln u\) 在 \(u>0\) 时连续，利用复合函数的连续性得
\[
\text{原式}=\ln\left[\lim_{n\to\infty}\left(\frac{n-2na+1}{n(1-2a)}\right)^n\right]
=\ln\left[\lim_{n\to\infty}\left(1+\frac{1}{n(1-2a)}\right)^n\right]
\]
\[
=\ln\left\{\lim_{n\to\infty}\left[\left(1+\frac{1}{n(1-2a)}\right)^{n(1-2a)}\right]^{\frac{1}{1-2a}}\right\}
=\ln e^{\frac{1}{1-2a}}=\frac{1}{1-2a}.
\]

**例9**　\(\lim_{x\to0}\frac{\ln\sqrt{x^2+9}}{\sin(1+x^2)}=\) ______.

**【解】**　\(f(x)=\frac{\ln\sqrt{x^2+9}}{\sin(1+x^2)}\) 是初等函数，\(x=0\) 在其定义域内，由初等函数的连续性知 \(f(x)\) 在 \(x=0\) 点连续，则
\[
\lim_{x\to0}\frac{\ln\sqrt{x^2+9}}{\sin(1+x^2)}
=\frac{\ln\sqrt{0^2+9}}{\sin(1+0^2)}=\frac{\ln3}{\sin1}.
\]

**例10**　下列函数在其定义域内连续的是

（A）\(\ln(x+1)+\frac{\cos x}{x}\).　　（B）\(\begin{cases}\sin x, & x<0\\ \cos x, & x\ge0\end{cases}\).

（C）\(\begin{cases}x+1, & x<0\\ 0, & x=0\\ x-1, & x>0\end{cases}\).　　（D）\(\begin{cases}\frac{e^x-1}{x}, & x\ne0\\ 0, & x=0\end{cases}\).

**【解】**　应选（A）. 因 \(\ln(x+1)+\frac{\cos x}{x}\) 是初等函数，在其定义域内连续.

而（B）（C）（D）三个函数均为分段函数，在定义域中的 \(x=0\) 点不连续.

**例11**　试讨论函数
\[
f(x)=
\begin{cases}
x^2\sin\frac{1}{x}, & x<0\\
1, & x=0\\
e^{-\frac{1}{x}}+1, & x>0
\end{cases}
\]
在定义域内的连续性.

**【解】**　\(f(x)\) 是分段函数，其定义域为 \((-\infty,+\infty)\).

当 \(x<0\)，\(x>0\) 时，\(f(x)\) 表达式都是初等函数，因而 \(f(x)\) 在 \(x>0\)，\(x<0\) 时连续.

而 \(x=0\) 是 \(f(x)\) 的分界点，
\[
\lim_{x\to0^-}f(x)=\lim_{x\to0^-}x^2\sin\frac{1}{x}=0,\quad
\lim_{x\to0^+}f(x)=\lim_{x\to0^+}\left(e^{-\frac{1}{x}}+1\right)=1,\quad
f(0)=1,
\]
则 \(f(x)\) 在 \(x=0\) 点不连续. 所以 \(f(x)\) 在 \((-\infty,0)\) 和 \((0,+\infty)\) 内连续，在 \(x=0\) 点不连续.` },
      { p: 46, md: R`**例12**　（1994，数三）若
\[
f(x)=
\begin{cases}
\frac{\sin2x+e^{2ax}-1}{x}, & x\ne0\\
a, & x=0
\end{cases}
\]
在 \((-\infty,+\infty)\) 内连续，则 \(a=\) ______.

**【解】**　因 \(f(x)\) 在 \((-\infty,+\infty)\) 内连续，则 \(f(x)\) 必在 \(x=0\) 处连续，即 \(\lim_{x\to0}f(x)=f(0)=a\).

而
\[
\lim_{x\to0}f(x)=\lim_{x\to0}\frac{\sin2x+e^{2ax}-1}{x}
=\lim_{x\to0}\frac{\sin2x}{x}+\lim_{x\to0}\frac{e^{2ax}-1}{x}
\]
\[
=\lim_{x\to0}\frac{2x}{x}+\lim_{x\to0}\frac{2ax}{x}=2+2a,
\]
则 \(2+2a=a\)，所以 \(a=-2\).

**例13**　（2017，数一、二、三）设函数
\[
f(x)=
\begin{cases}
\frac{1-\cos\sqrt{x}}{ax}, & x>0\\
b, & x\le0
\end{cases}
\]
在 \(x=0\) 处连续，则

（A）\(ab=\frac{1}{2}\).　　（B）\(ab=-\frac{1}{2}\).　　（C）\(ab=0\).　　（D）\(ab=2\).

**【解】**　
\[
\lim_{x\to0^-}f(x)=\lim_{x\to0^-}b=b,
\]
\[
\lim_{x\to0^+}f(x)=\lim_{x\to0^+}\frac{1-\cos\sqrt{x}}{ax}
=\lim_{x\to0^+}\frac{\frac{1}{2}x}{ax}=\frac{1}{2a},
\]
由于 \(f(x)\) 在 \(x=0\) 点连续，则 \(\lim_{x\to0^-}f(x)=\lim_{x\to0^+}f(x)=f(0)\)，即 \(b=\frac{1}{2a}\)，则 \(ab=\frac{1}{2}\)，故应选（A）.

**例14**　（2008，数三）设函数
\[
f(x)=
\begin{cases}
x^2+1, & |x|\le c\\
\frac{2}{|x|}, & |x|>c
\end{cases}
\]
在 \((-\infty,+\infty)\) 内连续，则 \(c=\) ______.

**【解】**　由题意可知 \(c\ge0\)，
\[
f(x)=
\begin{cases}
-\frac{2}{x}, & x<-c\\
x^2+1, & -c\le x\le c\\
\frac{2}{x}, & x>c
\end{cases}
\]
可知 \(x=-c\)，\(x=c\) 为分段点.

要使 \(f(x)\) 在 \((-\infty,+\infty)\) 内连续，只需 \(f(x)\) 在 \(x=\pm c\) 点连续即可.

即 \(\lim_{x\to c^-}f(x)=\lim_{x\to c^+}f(x)=f(c)\)，\(\lim_{x\to-c^-}f(x)=\lim_{x\to-c^+}f(x)=f(-c)\)，
\[
\lim_{x\to c^-}f(x)=\lim_{x\to c^-}(x^2+1)=c^2+1,\quad
\lim_{x\to c^+}f(x)=\lim_{x\to c^+}\frac{2}{x}=\frac{2}{c},\quad
f(c)=c^2+1,
\]
则 \(c^2+1=\frac{2}{c}\)，解得 \(c=1\).` },
      { p: 47, md: R`**例15**　（2018，数二）设函数
\[
f(x)=
\begin{cases}
-1, & x<0\\
1, & x\ge0
\end{cases},
\quad
g(x)=
\begin{cases}
2-ax, & x\le-1\\
x, & -1<x<0\\
x-b, & x\ge0
\end{cases},
\]
若 \(f(x)+g(x)\) 在 \((-\infty,+\infty)\) 内连续，则

（A）\(a=3,b=1\).　　（B）\(a=3,b=2\).

（C）\(a=-3,b=1\).　　（D）\(a=-3,b=2\).

**【解】**　令
\[
F(x)=f(x)+g(x)=
\begin{cases}
1-ax, & x\le-1\\
x-1, & -1<x<0\\
x-b+1, & x\ge0
\end{cases}
\]
\(F(x)\) 在 \((-\infty,+\infty)\) 上连续，则 \(F(x)\) 在 \(x=-1\)，\(x=0\) 点都连续.
\[
\lim_{x\to-1^-}F(x)=\lim_{x\to-1^-}(1-ax)=1+a,\quad
\lim_{x\to-1^+}F(x)=\lim_{x\to-1^+}(x-1)=-2,\quad
F(-1)=1+a,
\]
由 \(\lim_{x\to-1^-}F(x)=\lim_{x\to-1^+}F(x)=F(-1)\)，即 \(1+a=-2\)，得 \(a=-3\).
\[
\lim_{x\to0^-}F(x)=\lim_{x\to0^-}(x-1)=-1,\quad
\lim_{x\to0^+}F(x)=\lim_{x\to0^+}(x-b+1)=1-b,\quad
F(0)=1-b,
\]
由 \(\lim_{x\to0^-}F(x)=\lim_{x\to0^+}F(x)=F(0)\)，即 \(1-b=-1\)，得 \(b=2\).

故应选（D）.

**例16**　（1997，数二）已知
\[
f(x)=
\begin{cases}
(\cos x)^{\frac{1}{x^2}}, & x\ne0\\
a, & x=0
\end{cases}
\]
在 \(x=0\) 处连续，则 \(a=\) ______.

**【解】**　因 \(f(x)\) 在 \(x=0\) 处连续，则 \(\lim_{x\to0}f(x)=f(0)=a\).
\[
\lim_{x\to0}f(x)=\lim_{x\to0}(\cos x)^{\frac{1}{x^2}}
=\lim_{x\to0}e^{\frac{1}{x^2}\ln\cos x}
=e^{\lim_{x\to0}\frac{\ln\cos x}{x^2}},
\]
而
\[
\lim_{x\to0}\frac{\ln\cos x}{x^2}
=\lim_{x\to0}\frac{\frac{1}{\cos x}(-\sin x)}{2x}
=\lim_{x\to0}\frac{1}{\cos x}\cdot\lim_{x\to0}\frac{-\sin x}{2x}=-\frac{1}{2},
\]
所以，\(a=\lim_{x\to0}f(x)=e^{-\frac{1}{2}}\)，故应填 \(e^{-\frac{1}{2}}\).

**例17**　（2000，数二）设函数 \(f(x)=\frac{x}{a+e^{bx}}\) 在 \((-\infty,+\infty)\) 内连续，且 \(\lim_{x\to-\infty}f(x)=0\)，则常数 \(a,b\) 满足

（A）\(a<0,b<0\).　　（B）\(a>0,b>0\).　　（C）\(a\le0,b>0\).　　（D）\(a\ge0,b<0\).

**【解】**　由 \(\lim_{x\to-\infty}f(x)=\lim_{x\to-\infty}\frac{x}{a+e^{bx}}=0\)，且 \(\lim_{x\to-\infty}x=-\infty\) 知 \(\lim_{x\to-\infty}(a+e^{bx})=\infty\)，

则 \(\lim_{x\to-\infty}e^{bx}=\infty\) 知 \(\lim_{x\to-\infty}bx=+\infty\)，得 \(b<0\).

又 \(f(x)=\frac{x}{a+e^{bx}}\) 是初等函数，若 \(a<0\)，当分母 \(a+e^{bx}=0\)，即 \(x=\frac{\ln(-a)}{b}\) 时，\(f(x)\) 无定义，则 \(x=\frac{\ln(-a)}{b}\) 是 \(f(x)\) 的间断点，这与 \(f(x)\) 在 \((-\infty,+\infty)\) 内连续矛盾，所以 \(a\ge0\). 而当 \(a\ge0\) 时，分母 \(a+e^{bx}>0\)，\(f(x)\) 的定义域为 \((-\infty,+\infty)\)，则 \(f(x)\) 在 \((-\infty,+\infty)\) 内连续，故应选（D）.
` },
      { p: 48, md: R`### 三、间断点及其分类

#### 1. 间断点的定义

**定义**　若 \(f(x)\) 在 \(x_0\) 的某去心邻域内有定义，但在 \(x_0\) 点不连续，则称 \(f(x)\) 在 \(x_0\) 点间断，并称 \(x_0\) 为 \(f(x)\) 的间断点.

**【注】**　\(x_0\) 为 \(f(x)\) 的间断点 \(\Leftrightarrow f(x)\) 在 \(x_0\) 点不连续
\[
\Leftrightarrow
\begin{cases}
1^\circ\ f(x_0)\text{ 有定义}\\
2^\circ\ \lim\limits_{x\to x_0}f(x)\text{ 存在}\\
3^\circ\ \lim\limits_{x\to x_0}f(x)=f(x_0)
\end{cases}
\]
三个条件中至少有一个不成立.

#### 2. 间断点的分类

左、右极限都存在的间断点称为第一类间断点，其中左、右极限都存在且相等的间断点称为可去间断点；左、右极限都存在但不相等的间断点称为跳跃间断点.

左、右极限至少有一个不存在的间断点称为第二类间断点. 其中若 \(\lim\limits_{x\to x_0^-}f(x)=\infty\) 或 \(\lim\limits_{x\to x_0^+}f(x)=\infty\)，则称 \(x_0\) 为 \(f(x)\) 的无穷间断点. 若 \(\lim\limits_{x\to x_0}f(x)\) 振荡，则称 \(x_0\) 为 \(f(x)\) 的振荡间断点.

\[
\text{间断点分类}
\begin{cases}
\text{第一类间断点：}\lim\limits_{x\to x_0^-}f(x),\lim\limits_{x\to x_0^+}f(x)\text{ 都存在}.\\[6pt]
\text{第二类间断点：}\lim\limits_{x\to x_0^-}f(x),\lim\limits_{x\to x_0^+}f(x)\text{ 至少有一个不存在}.
\end{cases}
\]

\[
\text{第一类间断点}
\begin{cases}
\lim\limits_{x\to x_0^-}f(x)=\lim\limits_{x\to x_0^+}f(x)
\begin{cases}
\ne f(x_0)\\
f(x_0)\text{ 无定义}
\end{cases}
\quad\text{—— 可去型间断点}.\\[10pt]
\lim\limits_{x\to x_0^-}f(x)\ne\lim\limits_{x\to x_0^+}f(x)\quad\text{—— 跳跃型间断点}.
\end{cases}
\]

\[
\text{第二类间断点}
\begin{cases}
\text{无穷型间断点：}\lim\limits_{x\to x_0^-}f(x)=\infty\text{ 或 }\lim\limits_{x\to x_0^+}f(x)=\infty,\\[6pt]
\text{振荡型间断点：}\lim\limits_{x\to x_0}f(x)\text{ 振荡}.
\end{cases}
\]

**【注】**　（1）初等函数的间断点只可能是定义区间之外的点.

（2）分段函数的间断点除了定义域之外的点，还可能是定义域之内的分界点.

**例18**　求下列函数的间断点，并判断其类型.

\[
(1)\ f(x)=\frac{1-\cos x}{x^3+x^2};\qquad
(2)\ f(x)=
\begin{cases}
\dfrac{|x^2-1|}{x-1},&x\ne1,\\[6pt]
2,&x=1.
\end{cases}
\]

**【解】**　（1）因 \(f(x)=\frac{1-\cos x}{x^3+x^2}\) 是初等函数，其间断点为 \(x^3+x^2=0\) 的点，即 \(x=0\)，\(x=-1\) 为其间断点.

又
\[
\lim_{x\to0}f(x)=\lim_{x\to0}\frac{1-\cos x}{x^3+x^2}
=\lim_{x\to0}\frac{\frac12x^2}{x^3+x^2}
=\lim_{x\to0}\frac{\frac12}{x+1}
=\frac12,
\]
` },
      { p: 49, md: R`则 \(x=0\) 为可去间断点（第一类间断点）.

又 \(\lim\limits_{x\to-1}f(x)=\lim\limits_{x\to-1}\frac{1-\cos x}{x^3+x^2}=\infty\)，则 \(x=-1\) 为无穷间断点（第二类间断点）.

（2）因 \(f(x)\) 是分段函数，定义域为 \((-\infty,+\infty)\)，当 \(x\ne1\) 时 \(f(x)\) 连续，故只需考虑分界点 \(x=1\) 是否为间断点即可.

\[
\lim_{x\to1^-}f(x)=\lim_{x\to1^-}\frac{|x^2-1|}{x-1}
=\lim_{x\to1^-}\frac{-(x^2-1)}{x-1}
=\lim_{x\to1^-}[-(x+1)]=-2,
\]
\[
\lim_{x\to1^+}f(x)=\lim_{x\to1^+}\frac{|x^2-1|}{x-1}
=\lim_{x\to1^+}\frac{x^2-1}{x-1}
=\lim_{x\to1^+}(x+1)=2,
\]
可见 \(\lim\limits_{x\to1^-}f(x)\ne\lim\limits_{x\to1^+}f(x)\)，

即 \(x=1\) 为间断点，且为跳跃间断点（第一类间断点）.

**例19**　（2005，数二）设函数 \(f(x)=\dfrac{1}{e^{\frac{x}{x-1}}-1}\)，则

（A）\(x=0,x=1\) 都是 \(f(x)\) 的第一类间断点.

（B）\(x=0,x=1\) 都是 \(f(x)\) 的第二类间断点.

（C）\(x=0\) 是 \(f(x)\) 的第一类间断点，\(x=1\) 是 \(f(x)\) 的第二类间断点.

（D）\(x=0\) 是 \(f(x)\) 的第二类间断点，\(x=1\) 是 \(f(x)\) 的第一类间断点.

**【解】**　因 \(f(x)\) 在 \(x=0,x=1\) 点无定义，\(x=0,x=1\) 是 \(f(x)\) 的间断点.

\[
\lim_{x\to0}f(x)=\lim_{x\to0}\frac{1}{e^{\frac{x}{x-1}}-1}=\infty,
\]
则 \(x=0\) 是 \(f(x)\) 的第二类间断点.

又因
\[
\lim_{x\to1^-}f(x)=\lim_{x\to1^-}\frac{1}{e^{\frac{x}{x-1}}-1}
=\frac{1}{0-1}=-1,
\]
\[
\lim_{x\to1^+}f(x)=\lim_{x\to1^+}\frac{1}{e^{\frac{x}{x-1}}-1}=0.
\]
则 \(\lim\limits_{x\to1^-}f(x)\ne\lim\limits_{x\to1^+}f(x)\)，所以 \(x=1\) 是 \(f(x)\) 的第一类间断点.

故应选（D）.

**例20**　（2008，数二）设函数 \(f(x)=\dfrac{\ln|x|}{|x-1|}\sin x\)，则 \(f(x)\) 有

（A）1 个可去间断点，1 个跳跃间断点.

（B）1 个可去间断点，1 个无穷间断点.

（C）2 个跳跃间断点.

（D）2 个无穷间断点.

**【解】**　当 \(x=0,x=1\) 时 \(f(x)\) 无定义，则 \(f(x)\) 的间断点为 \(x=0,x=1\).

\[
\lim_{x\to0}f(x)=\lim_{x\to0}\frac{\ln|x|}{|x-1|}\sin x
=\lim_{x\to0}\frac{1}{|x-1|}\cdot\lim_{x\to0}\left(\ln|x|\cdot\sin x\right)
=\lim_{x\to0}x\ln|x|
\]
\[
=\lim_{x\to0}\frac{\ln|x|}{\frac1x}
=\lim_{x\to0}\frac{\frac1x}{-\frac1{x^2}}
=\lim_{x\to0}(-x)=0,
\]
则 \(x=0\) 为 \(f(x)\) 的可去间断点.

\[
\lim_{x\to1^-}f(x)=\lim_{x\to1^-}\frac{\ln|x|}{|x-1|}\sin x
=\lim_{x\to1^-}\frac{\ln x}{1-x}\sin x
=\lim_{x\to1^-}\frac{\ln x}{1-x}\cdot\lim_{x\to1^-}\sin x
\]
` },
      { p: 50, md: R`\[
=\sin1\cdot\lim_{x\to1^-}\frac{\frac1x}{-1}=-\sin1,
\]
\[
\lim_{x\to1^+}f(x)=\lim_{x\to1^+}\frac{\ln|x|}{|x-1|}\sin x
=\lim_{x\to1^+}\frac{\ln x}{x-1}\cdot\lim_{x\to1^+}\sin x
=\sin1\cdot\lim_{x\to1^+}\frac{\frac1x}{1}=\sin1,
\]
因 \(\lim\limits_{x\to1^-}f(x)\ne\lim\limits_{x\to1^+}f(x)\)，则 \(x=1\) 是 \(f(x)\) 的跳跃间断点.

故应选（A）.

**例21**　（2013，数三）函数 \(f(x)=\dfrac{|x|^x-1}{x(x+1)\ln|x|}\) 的可去间断点的个数为

（A）0.　（B）1.　（C）2.　（D）3.

**【解】**　\(f(x)\) 的间断点为 \(x=-1,x=0,x=1\).

\[
\begin{aligned}
\lim_{x\to-1}f(x)
&=\lim_{x\to-1}\frac{|x|^x-1}{x(x+1)\ln|x|}
=\lim_{x\to-1}\frac{e^{x\ln|x|}-1}{x(x+1)\ln|x|}\\
&=\lim_{x\to-1}\frac{x\ln|x|}{x(x+1)\ln|x|}
=\lim_{x\to-1}\frac{1}{x+1}=\infty,
\end{aligned}
\]
则 \(x=-1\) 为无穷间断点.

\[
\begin{aligned}
\lim_{x\to0}f(x)
&=\lim_{x\to0}\frac{e^{x\ln|x|}-1}{x(x+1)\ln|x|}
=\lim_{x\to0}\frac{x\ln|x|}{x(x+1)\ln|x|}\\
&=\lim_{x\to0}\frac{1}{x+1}=1,
\end{aligned}
\]
则 \(x=0\) 为可去间断点.

\[
\begin{aligned}
\lim_{x\to1}f(x)
&=\lim_{x\to1}\frac{e^{x\ln|x|}-1}{x(x+1)\ln|x|}
=\lim_{x\to1}\frac{x\ln|x|}{x(x+1)\ln|x|}\\
&=\lim_{x\to1}\frac{1}{x+1}=\frac12,
\end{aligned}
\]
则 \(x=1\) 为可去间断点.

所以，\(f(x)\) 有 2 个可去间断点，分别为 \(x=0,x=1\). 故应选（C）.

**例22**　（2015，数二）函数 \(f(x)=\lim\limits_{t\to0}\left(1+\dfrac{\sin t}{x}\right)^{\frac{x^2}{t}}\) 在 \((-\infty,+\infty)\) 内

（A）连续.　（B）有可去间断点.　（C）有跳跃间断点.　（D）有无穷间断点.

**【解】**
\[
f(x)=\lim_{t\to0}\left(1+\frac{\sin t}{x}\right)^{\frac{x^2}{t}}
=\lim_{t\to0}\left[\left(1+\frac{\sin t}{x}\right)^{\frac{x}{\sin t}}\right]^{\frac{\sin t}{t}\cdot x}
=e^x\quad(x\ne0)
\]
则当 \(x\ne0\) 时，\(f(x)=e^x\). 当 \(x=0\) 时，\(f(x)\) 无定义.

所以 \(x=0\) 是 \(f(x)\) 的间断点.

\(\lim\limits_{x\to0}f(x)=\lim\limits_{x\to0}e^x=1\)，故 \(x=0\) 为 \(f(x)\) 的可去间断点.

故应选（B）.

**例23**　（2004，数二）设 \(f(x)=\lim\limits_{n\to\infty}\dfrac{(n-1)x}{nx^2+1}\)，则 \(f(x)\) 的间断点为______.

**【解】**　当 \(x\ne0\) 时，
\[
f(x)=\lim_{n\to\infty}\frac{(n-1)x}{nx^2+1}
=\lim_{n\to\infty}\frac{\left(1-\frac1n\right)x}{x^2+\frac1n}
=\frac{x}{x^2}=\frac1x,
\]
当 \(x=0\) 时，\(f(0)=\lim\limits_{n\to\infty}0=0\).
` },
      { p: 51, md: R`则
\[
f(x)=
\begin{cases}
\dfrac1x,&x\ne0,\\[6pt]
0,&x=0.
\end{cases}
\]
\(\lim\limits_{x\to0}f(x)=\lim\limits_{x\to0}\dfrac1x=\infty\)，所以 \(x=0\) 为 \(f(x)\) 的间断点，故应填 \(x=0\).

**例24**　设函数
\[
f(x)=
\begin{cases}
\dfrac{\ln(1+ax^3)}{x-\arcsin x},&x<0,\\[8pt]
6,&x=0,\\[8pt]
\dfrac{e^{ax}+x^2-ax-1}{x\sin\frac{x}{4}},&x>0.
\end{cases}
\]
问 \(a\) 为何值时，\(x=0\) 是 \(f(x)\) 的可去间断点？

**【解】**　要使得 \(x=0\) 为 \(f(x)\) 的可去间断点，则 \(\lim\limits_{x\to0^-}f(x)=\lim\limits_{x\to0^+}f(x)\ne f(0)\).

\[
\begin{aligned}
\lim_{x\to0^-}f(x)
&=\lim_{x\to0^-}\frac{\ln(1+ax^3)}{x-\arcsin x}
=\lim_{x\to0^-}\frac{ax^3}{x-\arcsin x}\\
&=\lim_{x\to0^-}\frac{3ax^2}{1-\frac{1}{\sqrt{1-x^2}}}
=\lim_{x\to0^-}\sqrt{1-x^2}\cdot\frac{3ax^2}{\sqrt{1-x^2}-1}\\
&=\lim_{x\to0^-}\sqrt{1-x^2}\cdot\lim_{x\to0^-}\frac{3ax^2}{\sqrt{1-x^2}-1}\\
&=\lim_{x\to0^-}\frac{3ax^2}{\frac12(-x^2)}=-6a,
\end{aligned}
\]

\[
\begin{aligned}
\lim_{x\to0^+}f(x)
&=\lim_{x\to0^+}\frac{e^{ax}+x^2-ax-1}{x\sin\frac{x}{4}}
=\lim_{x\to0^+}\frac{e^{ax}+x^2-ax-1}{\frac14x^2}\\
&=\lim_{x\to0^+}\frac{ae^{ax}+2x-a}{\frac12x}
=\lim_{x\to0^+}\frac{a^2e^{ax}+2}{\frac12}=2a^2+4,
\end{aligned}
\]
因 \(x=0\) 是可去间断点，则 \(\lim\limits_{x\to0^-}f(x)=\lim\limits_{x\to0^+}f(x)\ne f(0)\)，

即 \(-6a=2a^2+4\ne6\)，解得 \(a=-2\).

则当 \(a=-2\) 时，\(x=0\) 是 \(f(x)\) 的可去间断点.

**例25**　设 \(f(x)\) 和 \(\varphi(x)\) 在 \((-\infty,+\infty)\) 内有定义，\(f(x)\) 为连续函数，且 \(f(x)\ne0\)，\(\varphi(x)\) 有间断点，则

（A）\(\varphi[f(x)]\) 必有间断点.　　（B）\([\varphi(x)]^2\) 必有间断点.

（C）\(f[\varphi(x)]\) 必有间断点.　　（D）\(\dfrac{\varphi(x)}{f(x)}\) 必有间断点.

**【解】**　可通过举反例说明（A）（B）（C）选项都不对.

若取
\[
\varphi(x)=
\begin{cases}
1,&x\ge0,\\
-1,&x<0,
\end{cases}
\quad f(x)=x^2+1,
\]
则 \(\varphi(x)\) 有间断点 \(x=0\)，

\(f(x)\) 连续，且 \(f(x)\ne0\)，而 \(\varphi[f(x)]=\varphi(x^2+1)=1\) 连续，没有间断点，

从而（A）不正确. 又 \([\varphi(x)]^2=1\) 连续，没有间断点，则（B）不对.

而 \(f[\varphi(x)]=\varphi^2(x)+1=2\) 连续，没有间断点，从而（C）不对.
` },
      { p: 52, md: R`而选项（D）正确. 反证法可证：若 \(\dfrac{\varphi(x)}{f(x)}\) 没有间断点，

则 \(\dfrac{\varphi(x)}{f(x)}\) 在 \((-\infty,+\infty)\) 内连续，又 \(f(x)\) 也连续，

则 \(\varphi(x)=\dfrac{\varphi(x)}{f(x)}\cdot f(x)\) 在 \((-\infty,+\infty)\) 内连续，与 \(\varphi(x)\) 有间断点矛盾.

所以 \(\dfrac{\varphi(x)}{f(x)}\) 必有间断点. 故应选（D）.

**例26**　设函数 \(f(x)=\lim\limits_{n\to\infty}\dfrac{1+x}{1+x^{2n}}\)，试求函数 \(f(x)\) 的间断点，并判定其类型.

**【解】**　先求极限：当 \(|x|<1\) 时，\(\lim\limits_{n\to\infty}\dfrac{1+x}{1+x^{2n}}=1+x\)；当 \(|x|>1\) 时，\(\lim\limits_{n\to\infty}\dfrac{1+x}{1+x^{2n}}=0\)，

当 \(x=1\) 时，\(\lim\limits_{n\to\infty}\dfrac{1+x}{1+x^{2n}}=1\)，当 \(x=-1\) 时，\(\lim\limits_{n\to\infty}\dfrac{1+x}{1+x^{2n}}=0\).

则
\[
f(x)=
\begin{cases}
0,&x\le-1,\\
1+x,&-1<x<1,\\
1,&x=1,\\
0,&x>1
\end{cases}
\]
是分段函数，分界点为 \(x=-1,x=1\).

由于 \(\lim\limits_{x\to-1^-}f(x)=0\)，\(\lim\limits_{x\to-1^+}f(x)=\lim\limits_{x\to-1^+}(1+x)=0\)，\(f(-1)=0\)，

有 \(\lim\limits_{x\to-1^-}f(x)=\lim\limits_{x\to-1^+}f(x)=f(-1)\)，则 \(x=-1\) 为 \(f(x)\) 的连续点.

又 \(\lim\limits_{x\to1^-}f(x)=\lim\limits_{x\to1^-}(1+x)=2\)，\(\lim\limits_{x\to1^+}f(x)=0\)，

由于 \(\lim\limits_{x\to1^-}f(x)\ne\lim\limits_{x\to1^+}f(x)\)，所以 \(x=1\) 为 \(f(x)\) 的跳跃间断点（第一类间断点）.

### 四、闭区间上连续函数的性质

**定理（最值定理）**　设 \(f(x)\) 在闭区间 \([a,b]\) 上连续，则 \(f(x)\) 在 \([a,b]\) 上必有最大值与最小值.

**定理（有界性定理）**　设 \(f(x)\) 在闭区间 \([a,b]\) 上连续，则 \(f(x)\) 在 \([a,b]\) 上必有界.

**定理（介值定理）**　设 \(f(x)\) 在闭区间 \([a,b]\) 上连续，且 \(f(a)\ne f(b)\)，则对于任意介于 \(f(a)\) 与 \(f(b)\) 之间的数 \(C\)，至少存在一点 \(\xi\in(a,b)\)，使 \(f(\xi)=C\).

介值定理还可等价表述为如下形式：

设 \(f(x)\) 在闭区间 \([a,b]\) 上连续，且 \(m,M\) 是 \(f(x)\) 在 \([a,b]\) 上的最小值和最大值，则对介于 \(m,M\) 之间的任一数 \(C\)，则在开区间 \((a,b)\) 内至少有一点 \(\xi\)，使 \(f(\xi)=C\). \((m<C<M)\)

**【注】**　若 \(C\) 满足 \(m\le C\le M\)，则结论中的 \(\xi\in[a,b]\).

**推论**　若 \(f(x)\) 在 \([a,b]\) 上连续，则 \(f(x)\) 在 \([a,b]\) 上可取到介于最小值 \(m\) 与最大值 \(M\) 之间的任何值.

**定理（零点定理）**　设 \(f(x)\) 在闭区间 \([a,b]\) 上连续，且 \(f(a)\cdot f(b)<0\)，则至少存在一点 \(\xi\in(a,b)\)，使 \(f(\xi)=0\).

**【注】**　零点定理的一个重要应用就是证明方程的根的存在性.
` },
      { p: 53, md: R`**例27**　证明方程 \(e^x-2=x\) 在 \((0,2)\) 内至少有一个根.

**【证】**　令 \(f(x)=e^x-2-x\)，显然 \(f(x)\) 在 \([0,2]\) 内连续，

\(f(0)=-1<0,\ f(2)=e^2-4>0,\)

由零点定理知，在 \((0,2)\) 内至少有一点 \(\xi\)，使得 \(f(\xi)=0\)，即 \(e^\xi-2=\xi\).

则 \(\xi\) 是方程 \(e^x-2=x\) 的根. 所以 \(e^x-2=x\) 在 \((0,2)\) 内至少有一根.

**例28**　证明方程 \(x=a\sin x+b\) 至少有一个不超过 \(a+b\) 的正根. 其中 \(a>0,b>0\).

**【证】**　令 \(f(x)=x-a\sin x-b\)，则 \(f(x)\) 在 \([0,a+b]\) 上连续，

且 \(f(0)=-b<0,\ f(a+b)=a-a\sin(a+b)=a[1-\sin(a+b)]\ge0.\)

（i）若 \(f(a+b)=0\)，即 \(\sin(a+b)=1\)，则 \(x=a+b\) 即为方程的根，结论成立.

（ii）若 \(f(a+b)>0\)，则由零点定理知，在 \((0,a+b)\) 内至少存在一点 \(\xi\)，使得 \(f(\xi)=0\)，

即 \(x=\xi\) 为方程的根，结论成立.

综合上述两种情形，可得方程 \(x=a\sin x+b\) 至少有一个不超过 \(a+b\) 的正根.

**【注】**　本题中对 \(f(a+b)\ge0\) 要分 \(f(a+b)=0\) 和 \(f(a+b)>0\) 两种情形分别考虑，不能忽视 \(f(a+b)=0\) 的情形.

**例29**　设函数 \(f(x)\) 在 \([0,2a]\) 上连续，且 \(f(0)=f(2a)\).

证明：在 \([0,a]\) 上至少存在一点 \(\xi\)，使 \(f(\xi)=f(\xi+a)\).

**【证】**　令 \(F(x)=f(x)-f(x+a)\)，则 \(F(x)\) 在 \([0,a]\) 上连续，

且 \(F(0)=f(0)-f(a),\ F(a)=f(a)-f(2a)=f(a)-f(0).\)

于是有 \(F(0)\cdot F(a)=-[f(0)-f(a)]^2\le0.\)

（i）若 \(F(0)\cdot F(a)=0\)，即 \(f(0)=f(a)\)，则取 \(\xi=0\) 或 \(\xi=a\) 都会满足 \(f(\xi)=f(\xi+a)\)，结论成立.

（ii）若 \(F(0)\cdot F(a)<0\)，则由零点定理知，在 \((0,a)\) 内至少存在一点 \(\xi\)，使得 \(F(\xi)=0\)，

即 \(f(\xi)=f(\xi+a)\)，结论成立.

综合上述两种情形，存在 \(\xi\in[0,a]\)，使 \(f(\xi)=f(\xi+a)\).

**例30**　设函数 \(f(x)\) 在区间 \([0,1]\) 上连续，且 \(0\le f(x)\le1\).

证明：在 \([0,1]\) 上至少存在一点 \(\xi\)，使 \(f(\xi)=\xi\).

**【证】**　令 \(F(x)=f(x)-x\)，则 \(F(x)\) 在 \([0,1]\) 上连续，

且 \(F(0)=f(0)\ge0,\ F(1)=f(1)-1\le0.\)

（i）若 \(F(0)=0\)，即 \(f(0)=0\)，取 \(\xi=0\)，即满足 \(f(\xi)=\xi\)，结论成立.

（ii）若 \(F(1)=0\)，即 \(f(1)=1\)，取 \(\xi=1\)，即满足 \(f(\xi)=\xi\)，结论成立.

（iii）若 \(F(0)>0,F(1)<0\)，由零点定理知，在 \((0,1)\) 内至少存在一点 \(\xi\)，使得 \(F(\xi)=0\)，

即 \(f(\xi)=\xi\)，结论成立.

综上所述，结论成立.

**例31**　设 \(f(x)\) 在 \([a,b]\) 上连续，\(x_i\in[a,b]\)，\(k_i>0(i=1,2,3)\)，且 \(k_1+k_2+k_3=1\)，

试证：在 \([a,b]\) 内至少存在一点 \(\xi\)，使得
\[
f(\xi)=k_1f(x_1)+k_2f(x_2)+k_3f(x_3)
\]

**【证】**　因 \(f(x)\) 在 \([a,b]\) 上连续，则 \(f(x)\) 在 \([a,b]\) 上有最大值 \(M\)，最小值 \(m\).
` },
      { p: 54, md: R`则 \(m\le f(x_1)\le M,\ m\le f(x_2)\le M,\ m\le f(x_3)\le M,\)

于是 \((k_1+k_2+k_3)m\le k_1f(x_1)+k_2f(x_2)+k_3f(x_3)\le(k_1+k_2+k_3)M,\)

由 \(k_1+k_2+k_3=1\) 得 \(m\le k_1f(x_1)+k_2f(x_2)+k_3f(x_3)\le M.\)

由介值定理得：在 \([a,b]\) 内至少存在一点 \(\xi\)，使得
\[
f(\xi)=k_1f(x_1)+k_2f(x_2)+k_3f(x_3).
\]

**例32**　已知函数 \(f(x)\) 在 \([0,1]\) 上连续，且 \(f(0)=0,f(1)=1\)，证明：存在 \(\xi\in(0,1)\) 使得 \(f(\xi)=1-\xi\).

**【证】**　**方法一**　（用介值定理）

令 \(F(x)=f(x)+x\)，则 \(F(x)\) 在 \([0,1]\) 上连续，且 \(F(0)=f(0)=0\)，

\(F(1)=f(1)+1=2\)，由于 \(F(0)<1<F(1)\)，则由介值定理知，

存在 \(\xi\in(0,1)\)，使得 \(F(\xi)=1\)，即 \(f(\xi)=1-\xi\).

**方法二**　（用零点定理）

令 \(G(x)=f(x)+x-1\)，则 \(G(x)\) 在 \([0,1]\) 上连续，

且 \(G(0)=f(0)-1=-1<0,\ G(1)=f(1)=1>0,\)

由零点定理知，存在 \(\xi\in(0,1)\)，使得 \(G(\xi)=0\)，即 \(f(\xi)=1-\xi\).

**例33**　设 \(f(x)\) 在 \([a,b]\) 上连续，\(a<c<d<b\). 试证对任意的正数 \(p,q\)，至少存在一个 \(\xi\in[c,d]\)，使 \(pf(c)+qf(d)=(p+q)f(\xi)\).

**【证】**　由题设可知，\(f(x)\) 在 \([c,d]\) 上连续，则该区间上必有最小值 \(m\) 和最大值 \(M\).

则
\[
m=\frac{pm+qm}{p+q}\le\frac{pf(c)+qf(d)}{p+q}\le\frac{pM+qM}{p+q}=M.
\]
由连续函数介值定理知，至少存在一个 \(\xi\in[c,d]\)，使
\[
f(\xi)=\frac{pf(c)+qf(d)}{p+q},
\]
故
\[
pf(c)+qf(d)=(p+q)f(\xi).
\]

**例34**　（2008，数二）证明积分中值定理：若函数 \(f(x)\) 在闭区间 \([a,b]\) 上连续，则至少存在一点 \(\xi\in[a,b]\)，使得 \(\int_a^b f(x)\,\mathrm{d}x=f(\xi)(b-a)\).

**【证】**　因 \(f(x)\) 在 \([a,b]\) 上连续，则 \(f(x)\) 在 \([a,b]\) 上有最大值 \(M\)，最小值 \(m\).

对任意 \(x\in[a,b]\)，有 \(m\le f(x)\le M\)，从而有
\[
m(b-a)=\int_a^b m\,\mathrm{d}x\le\int_a^b f(x)\,\mathrm{d}x\le\int_a^b M\,\mathrm{d}x=M(b-a),
\]
于是有
\[
m\le\frac{\int_a^b f(x)\,\mathrm{d}x}{b-a}\le M.
\]
由介值定理知，存在 \(\xi\in[a,b]\)，使得 \(f(\xi)=\frac{\int_a^b f(x)\,\mathrm{d}x}{b-a}\)，

即 \(\int_a^b f(x)\,\mathrm{d}x=f(\xi)\cdot(b-a)\).
` },
    ],
    quiz: [{"q": "函数 $f(x)=\\frac{\\sin x}{|x|}$ 在 $x=0$ 处", "options": ["可去间断点", "跳跃间断点", "无穷间断点", "振荡间断点"], "answer": 1, "explain": "左极限 $-1$，右极限 $1$，左右极限都存在但不相等，为跳跃间断点。"}, {"q": "$x=1$ 是函数 $f(x)=\\frac{x^2-1}{x-1}$ 的", "options": ["可去间断点", "跳跃间断点", "无穷间断点", "连续点"], "answer": 0, "explain": "$\\lim_{x\\to1}f(x)=2$ 存在，但 $f(1)$ 无定义，为可去间断点。"}, {"q": "证明方程 $e^x-2=x$ 在 $(0,2)$ 内至少有一个根，依据的是", "options": ["零点定理", "介值定理", "最值定理", "罗尔定理"], "answer": 0, "explain": "令 $f(x)=e^x-2-x$，$f(0)=-1<0$，$f(2)=e^2-4>0$，由零点定理得证。"}, {"q": "要使 $f(x)=\\frac{\\sqrt{1+x}-\\sqrt{1-x}}{x}$ 在 $x=0$ 处连续，应补充定义 $f(0)=$", "options": ["$1$", "$2$", "$0$", "$\\frac12$"], "answer": 0, "explain": "分子有理化得 $\\frac{2}{\\sqrt{1+x}+\\sqrt{1-x}}\\to1$。"}, {"q": "$f(x)=\\lim_{n\\to\\infty}\\frac{1+x}{1+x^{2n}}$ 的间断点为", "options": ["$x=1$，跳跃间断点", "$x=-1$，跳跃间断点", "$x=1$，可去间断点", "无间断点"], "answer": 0, "explain": "$|x|<1$ 时 $f=1+x$；$|x|>1$ 时 $f=0$；$x=1$ 时 $f=1$。在 $x=1$ 左极限 $2$、右极限 $0$，为跳跃间断点。"}]
  };
})();
