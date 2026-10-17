window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["jc01_s1"] = {
    id: "jc01_s1",
    ch: "第一章 函数 极限 连续",
    title: "第二节 极限",
    book: "李永乐《数学复习全书·基础篇》",
    pages: [10, 40],
    img: "assets/img/jichu",
    content: [
      { p: 10, md: R`故函数 \(f(x)=x\sin x\) 是无界函数.

**例13**　（1987，数二）函数 \(f(x)=|x\sin x|e^{\cos x}(-\infty<x<+\infty)\) 是

（A）有界函数.　（B）单调函数.　（C）周期函数.　（D）偶函数.

**【解】**　应选（D）.

由 \(\cos x\) 是偶函数，知 \(e^{\cos x}\) 是偶函数，又 \(|x\sin x|\) 是偶函数，则 \(f(x)=|x\sin x|e^{\cos x}\) 是偶函数，故选项（D）正确.

由于 \(f\left(2n\pi+\frac{\pi}{2}\right)=2n\pi+\frac{\pi}{2}\)，知当 \(n\) 充分大时 \(f(x)\) 无界，故选项（A）错误.

显然 \(f(x)\) 不单调，也没有周期，因此选项（B），（C）不正确.

故应选（D）.

## 第二节 极限

### 一、极限的概念与性质

#### 1. 数列的极限

**定义**　如果对于任意给定的 \(\varepsilon>0\)，总存在正整数 \(N\)，当 \(n>N\) 时，恒有

\[
|x_n-a|<\varepsilon
\]

成立，则称常数 \(a\) 为数列 \(\{x_n\}\) 当 \(n\) 趋于无穷时的极限，记为 \(\lim_{n\to\infty}x_n=a\).

**【注】**　（1）\(\varepsilon\) 是用来刻画 \(x_n\) 与 \(a\) 的接近程度，\(N\) 是用来刻画 \(n\to\infty\) 这个极限过程.

（2）\(\lim_{n\to\infty}x_n=a\) 的几何意义是：对于 \(a\) 点的任何 \(\varepsilon\) 邻域即开区间 \((a-\varepsilon,a+\varepsilon)\)，一定存在 \(N\)，当 \(n>N\) 即第 \(N\) 项以后的点 \(x_n\) 都落在开区间 \((a-\varepsilon,a+\varepsilon)\) 内，而只有有限个（最多有 \(N\) 个）在这区间之外.

（3）数列 \(\{x_n\}\) 的极限是否存在，如果存在，极限值等于多少与数列的前有限项无关.

（4）如果一个数列有极限，也称该数列收敛，否则就称发散.

（5）记住下列极限结果：① \(\lim_{n\to\infty}q^n=0(|q|<1)\)；② \(\lim_{n\to\infty}\frac{1}{n^\alpha}=0(\alpha>0)\).

（6）若数列 \(\{x_n\}\) 收敛于 \(a\)，则其任一子数列也收敛于 \(a\).

**定理**　\(\lim_{n\to\infty}x_n=a\) 的充分必要条件是 \(\lim_{n\to\infty}x_{2n-1}=\lim_{n\to\infty}x_{2n}=a\).

**推论**　若 \(\lim_{n\to\infty}x_{2n-1}=a,\lim_{n\to\infty}x_{2n}=b\)，且 \(a\ne b\)，则 \(\lim_{n\to\infty}x_n\) 不存在.

**例1**　（2006，数三）\(\lim_{n\to\infty}\left(\frac{n+1}{n}\right)^{(-1)^n}=\) ______.

**【解】**　方法一　\(x_n=\left(\frac{n+1}{n}\right)^{(-1)^n}\)，则

\[
\lim_{n\to\infty}x_{2n-1}=\lim_{n\to\infty}\left(\frac{2n}{2n-1}\right)^{-1}=\lim_{n\to\infty}\frac{2n-1}{2n}=1
\]

\[
\lim_{n\to\infty}x_{2n}=\lim_{n\to\infty}\frac{2n+1}{2n}=1
\]` },
      { p: 11, md: R`由于 \(\lim_{n\to\infty}x_{2n-1}=\lim_{n\to\infty}x_{2n}=1\)，所以 \(\lim_{n\to\infty}\left(\frac{n+1}{n}\right)^{(-1)^n}=1\).

方法二　因为 \(\left(\frac{n+1}{n}\right)^{-1}\le\left(\frac{n+1}{n}\right)^{(-1)^n}\le\left(\frac{n+1}{n}\right)^1\)，且

\[
\lim_{n\to\infty}\left(\frac{n+1}{n}\right)^{-1}=\lim_{n\to\infty}\left(\frac{n+1}{n}\right)=1,
\]

利用夹逼准则，\(\lim_{n\to\infty}\left(\frac{n+1}{n}\right)^{(-1)^n}=1\).

方法三　因为 \(\left(\frac{n+1}{n}\right)^{(-1)^n}=e^{(-1)^n\ln\frac{n+1}{n}}\)，

所以 \(\lim_{n\to\infty}\left(\frac{n+1}{n}\right)^{(-1)^n}=\lim_{n\to\infty}e^{(-1)^n\ln\frac{n+1}{n}}=e^{\lim_{n\to\infty}(-1)^n\ln\frac{n+1}{n}}=1\).

**例2**　试证明：

（1）若 \(\lim_{n\to\infty}x_n=a\)，则 \(\lim_{n\to\infty}|x_n|=|a|\)，但反之不成立；

（2）\(\lim_{n\to\infty}x_n=0\) 的充分必要条件是 \(\lim_{n\to\infty}|x_n|=0\).

**【证】**　（1）由于 \(\lim_{n\to\infty}x_n=a\) 及数列极限定义知，\(\forall\varepsilon>0,\exists N>0\)，当 \(n>N\) 时，

\[
|x_n-a|<\varepsilon
\]

又 \(||x_n|-|a||\le|x_n-a|\)，则 \(\forall\varepsilon>0,\exists N>0\)，当 \(n>N\) 时，

\[
||x_n|-|a||<\varepsilon
\]

故 \(\lim_{n\to\infty}|x_n|=|a|\).

反之不成立，例如 \(x_n=(-1)^n\)，则 \(\lim_{n\to\infty}|x_n|=1=|1|\)，但 \(\lim_{n\to\infty}x_n=\lim_{n\to\infty}(-1)^n\) 不存在.

（2）由（1）可知，若 \(\lim_{n\to\infty}x_n=0\)，则 \(\lim_{n\to\infty}|x_n|=|0|=0\).

以下只要证明：若 \(\lim_{n\to\infty}|x_n|=0\)，则 \(\lim_{n\to\infty}x_n=0\).

由 \(\lim_{n\to\infty}|x_n|=0\) 可知，\(\forall\varepsilon>0,\exists N>0\)，当 \(n>N\) 时，

\[
||x_n|-0|<\varepsilon
\]

即 \(|x_n-0|<\varepsilon\). 故原题得证.

**【注】**　本题可作为结论来用，函数的极限也有类似的结论.

**例3**　（2015，数三）设 \(\{x_n\}\) 是数列，下列命题中不正确的是

（A）若 \(\lim_{n\to\infty}x_n=a\)，则 \(\lim_{n\to\infty}x_{2n}=\lim_{n\to\infty}x_{2n+1}=a\).

（B）若 \(\lim_{n\to\infty}x_{2n}=\lim_{n\to\infty}x_{2n+1}=a\)，则 \(\lim_{n\to\infty}x_n=a\).

（C）若 \(\lim_{n\to\infty}x_n=a\)，则 \(\lim_{n\to\infty}x_{3n}=\lim_{n\to\infty}x_{3n+1}=a\).

（D）若 \(\lim_{n\to\infty}x_{3n}=\lim_{n\to\infty}x_{3n+1}=a\)，则 \(\lim_{n\to\infty}x_n=a\).

**【解】**　由数列极限的性质知，选项（A）（B）（C）都正确，

而选项（D）不正确，举反例：如 \(x_{3n}=1,x_{3n+1}=1+\frac{1}{n},x_{3n+2}=0\),

则有 \(\lim_{n\to\infty}x_{3n}=\lim_{n\to\infty}x_{3n+1}=1\)，但 \(\lim_{n\to\infty}x_{3n+2}=0\)，所以 \(\lim_{n\to\infty}x_n\) 不存在.

因而（D）不正确. 故应选（D）.` },
      { p: 12, md: R`**例4**　（2019，数三）\(\lim_{n\to\infty}\left[\frac{1}{1\times2}+\frac{1}{2\times3}+\cdots+\frac{1}{n(n+1)}\right]^n=\) ______.

**【解】**　\(\frac{1}{1\times2}+\frac{1}{2\times3}+\cdots+\frac{1}{n(n+1)}=\left(1-\frac{1}{2}\right)+\left(\frac{1}{2}-\frac{1}{3}\right)+\cdots+\left(\frac{1}{n}-\frac{1}{n+1}\right)\)

\[
=1-\frac{1}{n+1},
\]

\[
\text{原式}=\lim_{n\to\infty}\left(1-\frac{1}{n+1}\right)^n=\lim_{n\to\infty}\left[\left(1+\left(-\frac{1}{n+1}\right)\right)^{-(n+1)}\right]^{-\frac{n}{n+1}}=e^{-1}=\frac{1}{e}.
\]

#### 2. 函数的极限

自变量趋于无穷大时函数的极限

**定义**　若对任意给定的 \(\varepsilon>0\)，总存在 \(X>0\)，当 \(x>X\) 时，恒有 \(|f(x)-A|<\varepsilon\)，则称常数 \(A\) 为 \(f(x)\) 当 \(x\to+\infty\) 时的极限，记为 \(\lim_{x\to+\infty}f(x)=A\).

**定义**　若对任意给定的 \(\varepsilon>0\)，总存在 \(X>0\)，当 \(x<-X\) 时，恒有 \(|f(x)-A|<\varepsilon\)，则称常数 \(A\) 为 \(f(x)\) 当 \(x\to-\infty\) 时的极限，记为 \(\lim_{x\to-\infty}f(x)=A\).

**定义**　若对任意给定的 \(\varepsilon>0\)，总存在 \(X>0\)，当 \(|x|>X\) 时，恒有 \(|f(x)-A|<\varepsilon\)，则称常数 \(A\) 为 \(f(x)\) 当 \(x\to\infty\) 时的极限，记为 \(\lim_{x\to\infty}f(x)=A\).

**【注】**　（1）这里的 \(x\to\infty\) 是指 \(|x|\to+\infty\)；而数列极限中的 \(n\to\infty\) 是指 \(n\to+\infty\).

（2）记住以下极限结果：

① \(\lim_{x\to\infty}\frac{1}{x^\alpha}=0(\alpha>0)\).

② 当 \(0<a<1\) 时，\(\lim_{x\to+\infty}a^x=0,\lim_{x\to-\infty}a^x=+\infty(不存在)\)

当 \(a>1\) 时，\(\lim_{x\to-\infty}a^x=0,\lim_{x\to+\infty}a^x=+\infty(不存在)\)

③ \(\lim_{x\to-\infty}\arctan x=-\frac{\pi}{2},\lim_{x\to+\infty}\arctan x=\frac{\pi}{2}\).

**定理**　\(\lim_{x\to\infty}f(x)=A\) 的充分必要条件是 \(\lim_{x\to+\infty}f(x)=\lim_{x\to-\infty}f(x)=A\).

**推论**　若 \(\lim_{x\to+\infty}f(x),\lim_{x\to-\infty}f(x)\) 至少有一个极限不存在或都存在但不相等，则 \(\lim_{x\to\infty}f(x)\) 不存在.

**例5**　试判定 \(\lim_{x\to\infty}\frac{|x|}{x}\) 的极限是否存在？

**【解】**　\(\lim_{x\to-\infty}\frac{|x|}{x}=\lim_{x\to-\infty}\frac{-x}{x}=-1,\lim_{x\to+\infty}\frac{|x|}{x}=\lim_{x\to+\infty}\frac{x}{x}=1\),

所以，\(\lim_{x\to\infty}\frac{|x|}{x}\) 不存在.

**例6**　证明 \(\lim_{x\to\infty}\arctan x,\lim_{x\to\infty}a^x(a>0,且a\ne1)\) 都不存在.

**【证】**　因 \(\lim_{x\to-\infty}\arctan x=-\frac{\pi}{2},\lim_{x\to+\infty}\arctan x=\frac{\pi}{2}\)，所以 \(\lim_{x\to\infty}\arctan x\) 不存在.

当 \(0<a<1\) 时，\(\lim_{x\to-\infty}a^x\) 不存在，则 \(\lim_{x\to\infty}a^x\) 不存在.

当 \(a>1\) 时，\(\lim_{x\to+\infty}a^x\) 不存在，则 \(\lim_{x\to\infty}a^x\) 不存在.` },
      { p: 13, md: R`**例7**　极限 \(\lim_{x\to\infty}\frac{\sqrt{x^2+1}}{x}\)

（A）等于1.　（B）等于\(-1\).　（C）为无穷大.　（D）不存在.

**【解】**　由于 \(\lim_{x\to-\infty}\frac{\sqrt{x^2+1}}{x}=-\lim_{x\to-\infty}\sqrt{1+\frac{1}{x^2}}=-1,\lim_{x\to+\infty}\frac{\sqrt{x^2+1}}{x}=\lim_{x\to+\infty}\sqrt{1+\frac{1}{x^2}}=1\),

所以极限 \(\lim_{x\to\infty}\frac{\sqrt{x^2+1}}{x}\) 不存在. 答案选（D）.

自变量趋于有限值时函数的极限

**定义**　若对任意给定的 \(\varepsilon>0\)，总存在 \(\delta>0\)，当 \(0<|x-x_0|<\delta\) 时，恒有 \(|f(x)-A|<\varepsilon\)，则称常数 \(A\) 为函数 \(f(x)\) 当 \(x\to x_0\) 时的极限，记为 \(\lim_{x\to x_0}f(x)=A\).

**【注】**　（1）\(\varepsilon\) 是用来刻画 \(f(x)\) 与 \(A\) 的接近程度，\(\delta\) 是用来刻画 \(x\to x_0\) 这个极限过程.

（2）几何意义：对任意给定的 \(\varepsilon>0\)，总存在 \(\mathring{U}(x_0,\delta)\)，当 \(x\in\mathring{U}(x_0,\delta)\) 时，曲线 \(y=f(x)\) 夹在两直线 \(y=A-\varepsilon\) 和 \(y=A+\varepsilon\) 之间.

（3）这里 \(x\to x_0\)，但 \(x\ne x_0\). 极限 \(\lim_{x\to x_0}f(x)\) 是否存在，如果存在极限值等于多少，与 \(f(x)\) 在 \(x=x_0\) 处有没有定义，如果有定义函数值等于多少无关，只与 \(x=x_0\) 的去心邻域 \(\mathring{U}(x_0,\delta)\) 函数值有关. 而要使 \(\lim_{x\to x_0}f(x)\) 存在，\(f(x)\) 必须在 \(x=x_0\) 的某去心邻域 \(\mathring{U}(x_0,\delta)\) 处处有定义.

**定义**　若对任意给定的 \(\varepsilon>0\)，总存在 \(\delta>0\)，当 \(x_0-\delta<x<x_0\) 时，恒有 \(|f(x)-A|<\varepsilon\)，则称常数 \(A\) 为函数 \(f(x)\) 当 \(x\to x_0\) 时的左极限，记为

\[
\lim_{x\to x_0^-}f(x)=A,\text{或 }f(x_0^-)=A,\text{或 }f(x_0-0)=A.
\]

**定义**　若对任意给定的 \(\varepsilon>0\)，总存在 \(\delta>0\)，当 \(x_0<x<x_0+\delta\) 时，恒有 \(|f(x)-A|<\varepsilon\)，则称常数 \(A\) 为函数 \(f(x)\) 当 \(x\to x_0\) 时的右极限，记为

\[
\lim_{x\to x_0^+}f(x)=A,\text{或 }f(x_0^+)=A,\text{或 }f(x_0+0)=A.
\]

**定理**　\(\lim_{x\to x_0}f(x)=A\) 的充分必要条件是 \(\lim_{x\to x_0^-}f(x)=\lim_{x\to x_0^+}f(x)=A\).

**推论**　若 \(\lim_{x\to x_0^-}f(x),\lim_{x\to x_0^+}f(x)\) 至少有一个极限不存在，或都存在但不相等，则 \(\lim_{x\to x_0}f(x)\) 不存在.

**【注】**　需要分左、右极限求极限的问题常见有以下三种：

（1）分段函数在分界点处的极限，而在该分界点两侧函数表达式不同（这里也包括带有绝对值的函数，如 \(\lim_{x\to0}\frac{|x|}{x}\)）；

（2）\(e^\infty\) 型极限（如 \(\lim_{x\to0}e^{\frac1x},\lim_{x\to\infty}e^x,\lim_{x\to\infty}e^{-x}\)）；

\(\lim_{x\to0^-}e^{\frac1x}=0,\lim_{x\to0^+}e^{\frac1x}=+\infty\)，则 \(\lim_{x\to0}e^{\frac1x}\) 不存在；

\(\lim_{x\to-\infty}e^x=0,\lim_{x\to+\infty}e^x=+\infty\)，则 \(\lim_{x\to\infty}e^x\) 不存在.

**【注】**　\(e^\infty\ne\infty,e^{+\infty}=+\infty,e^{-\infty}=0\).

（3）\(\arctan\infty\) 型极限（如 \(\lim_{x\to0}\arctan\frac1x,\lim_{x\to\infty}\arctan x\)）` },
      { p: 14, md: R`\(\lim_{x\to0^-}\arctan\frac1x=-\frac{\pi}{2},\lim_{x\to0^+}\arctan\frac1x=\frac{\pi}{2}\)，则 \(\lim_{x\to0}\arctan\frac1x\) 不存在；

\(\lim_{x\to-\infty}\arctan x=-\frac{\pi}{2},\lim_{x\to+\infty}\arctan x=\frac{\pi}{2}\)，则 \(\lim_{x\to\infty}\arctan x\) 不存在.

**【注】**　\(\arctan\infty\ne\frac{\pi}{2},\arctan(+\infty)=\frac{\pi}{2},\arctan(-\infty)=-\frac{\pi}{2}\).

**例8**　（2000，数一）求 \(\lim_{x\to0}\left(\frac{2+e^{\frac1x}}{1+e^{\frac4x}}+\frac{\sin x}{|x|}\right)\).

**【解】**　因函数表示式中含有 \(|x|\)，这是分段函数求极限，\(x=0\) 是其分段点，因而应分别先求左、右极限.

\[
\lim_{x\to0^-}\left(\frac{2+e^{\frac1x}}{1+e^{\frac4x}}+\frac{\sin x}{|x|}\right)=\lim_{x\to0^-}\left(\frac{2+e^{\frac1x}}{1+e^{\frac4x}}-\frac{\sin x}{x}\right)=\lim_{x\to0^-}\frac{2+e^{\frac1x}}{1+e^{\frac4x}}-\lim_{x\to0^-}\frac{\sin x}{x}
\]
\[
=2-1=1,
\]

\[
\lim_{x\to0^+}\left(\frac{2+e^{\frac1x}}{1+e^{\frac4x}}+\frac{\sin x}{|x|}\right)=\lim_{x\to0^+}\left(\frac{2+e^{\frac1x}}{1+e^{\frac4x}}+\frac{\sin x}{x}\right)=\lim_{x\to0^+}\frac{2+e^{\frac1x}}{1+e^{\frac4x}}+\lim_{x\to0^+}\frac{\sin x}{x}
\]
\[
=\lim_{x\to0^+}\frac{2e^{-\frac4x}+e^{-\frac3x}}{e^{-\frac4x}+1}+1\quad(\text{分子分母同除以 }e^{\frac4x})
\]
\[
=0+1=1,
\]

因左极限 \(=\) 右极限 \(=1\)，所以 \(\lim_{x\to0}\left(\frac{2+e^{\frac1x}}{1+e^{\frac4x}}+\frac{\sin x}{|x|}\right)=1\).

**例9**　设 \(f(x)=\begin{cases}3-x^2,&|x|\le1\\1+x,&|x|>1\end{cases}\)，试讨论 \(\lim_{x\to-1}f(x),\lim_{x\to1}f(x)\).

**【解】**　由题意知
\[
f(x)=\begin{cases}
1+x,&x<-1\\
3-x^2,&-1\le x\le1\\
1+x,&x>1
\end{cases}
\]

由于 \(\lim_{x\to-1^-}f(x)=\lim_{x\to-1^-}(1+x)=0,\lim_{x\to-1^+}f(x)=\lim_{x\to-1^+}(3-x^2)=2\),

因 \(\lim_{x\to-1^-}f(x)\ne\lim_{x\to-1^+}f(x)\)，所以 \(\lim_{x\to-1}f(x)\) 不存在.

由于 \(\lim_{x\to1^-}f(x)=\lim_{x\to1^-}(3-x^2)=2,\lim_{x\to1^+}f(x)=\lim_{x\to1^+}(1+x)=2\),

因 \(\lim_{x\to1^-}f(x)=\lim_{x\to1^+}f(x)=2\)，所以 \(\lim_{x\to1}f(x)=2\).

**例10**　\(\lim_{x\to2}\arctan\frac{1}{x-2}=\)

（A）0.　（B）\(-\frac{\pi}{2}\).　（C）\(\frac{\pi}{2}\).　（D）不存在.

**【解】**　因 \(\lim_{x\to2^-}\arctan\frac1{x-2}=-\frac{\pi}{2},\lim_{x\to2^+}\arctan\frac1{x-2}=\frac{\pi}{2}\)，所以 \(\lim_{x\to2}\arctan\frac1{x-2}\) 不存在，故选（D）.` },
      { p: 15, md: R`#### 3. 极限的性质

**有界性**　（数列）如果数列 \(\{x_n\}\) 收敛，那么数列 \(\{x_n\}\) 一定有界.

**【注】**　反之不成立，反例为 \(x_n=(-1)^n\). 显然，该数列有界但不收敛，由此可得有界是数列收敛的必要条件而非充分条件，无界数列一定发散，但发散数列不一定无界.

（函数）若 \(\lim_{x\to x_0}f(x)\) 存在，则 \(f(x)\) 在 \(x_0\) 某去心邻域有界（即局部有界）.

**【注】**　反之不成立，反例为 \(f(x)=\sin\frac1x\)，该函数在 \(x=0\) 的去心邻域有界，但它在 \(x=0\) 处的极限 \(\lim_{x\to0}\sin\frac1x\) 不存在.

**保号性**　（数列）设 \(\lim_{n\to\infty}x_n=A\).

（1）如果 \(A>0\)（或 \(A<0\)），则存在 \(N>0\)，当 \(n>N\) 时，\(x_n>0\)（或 \(x_n<0\)）；

（2）如果存在 \(N>0\)，当 \(n>N\) 时，\(x_n\ge0\)（或 \(x_n\le0\)），则 \(A\ge0\)（或 \(A\le0\)）.

**【注】**　① 注意结论（1）中是严格不等号（\(>\) 或 \(<\)）；而（2）中是非严格不等号（\(\ge\) 或 \(\le\)）.

② 结论（2）中若条件改为：当 \(n>N\) 时，\(x_n>0\)（或 \(x_n<0\)），则结论不变：仍有 \(A\ge0\)（或 \(A\le0\)）. 如 \(\lim_{n\to\infty}\frac1n=0\).

（函数）设 \(\lim_{x\to x_0}f(x)=A\).

（1）如果 \(A>0\)（或 \(A<0\)），则存在 \(\delta>0\)，当 \(x\in\mathring{U}(x_0,\delta)\) 时，\(f(x)>0\)（或 \(f(x)<0\)）.

（2）如果存在 \(\delta>0\)，当 \(x\in\mathring{U}(x_0,\delta)\) 时，\(f(x)\ge0\)（或 \(f(x)\le0\)），那么 \(A\ge0\)（或 \(A\le0\)）.

**【注】**　① 结论（2）中若条件改为：\(f(x)>0\)（或 \(f(x)<0\)），则结论不变：有 \(A\ge0\)（或 \(A\le0\)）. ② 对于自变量 \(x\) 的其他极限过程，也有类似的局部保号性质.

**例11**　下列函数在 \((0,+\infty)\) 内有界的是

（A）\(e^{\frac1x}\).　（B）\(\ln x\).　（C）\(\arctan\frac1x\).　（D）\(\frac{x^2}{x+1}\).

**【解】**　因 \(\lim_{x\to0^+}e^{\frac1x}=+\infty,\lim_{x\to+\infty}\ln x=+\infty,\lim_{x\to+\infty}\frac{x^2}{x+1}=+\infty\),

则 \(e^{\frac1x},\ln x,\frac{x^2}{x+1}\) 在 \((0,+\infty)\) 内都无界.

而 \(\left|\arctan\frac1x\right|\le\frac{\pi}{2}\)，则 \(\arctan\frac1x\) 在 \((0,+\infty)\) 内有界.

故选（C）.

**例12**　若 \(f(x)>g(x)\)，且 \(\lim_{x\to x_0}f(x)=A,\lim_{x\to x_0}g(x)=B\)，则

（A）\(A>B\).　（B）\(A\ge B\).　（C）\(|A|>|B|\).　（D）\(|A|\ge|B|\).

**【解】**　令 \(h(x)=f(x)-g(x)\)，则 \(h(x)>0,\lim_{x\to x_0}h(x)=A-B\)，由极限的保号性知，\(A-B\ge0\) 即 \(A\ge B\). 故选（B）.

**【注】**　此题结论可直接用，是极限的不等式性质.` },
      { p: 16, md: R`**例13**　（2014，数三）设 \(\lim_{n\to\infty}a_n=a\)，且 \(a\ne0\)，则当 \(n\) 充分大时有

（A）\(|a_n|>\frac{|a|}{2}\).　（B）\(|a_n|<\frac{|a|}{2}\).

（C）\(a_n>a-\frac1n\).　（D）\(a_n<a+\frac1n\).

**【解】**　方法一　因 \(\lim_{n\to\infty}a_n=a\)，由数列极限的定义知，对 \(\varepsilon=\frac{|a|}{2}>0\),

存在正整数 \(N\)，使得当 \(n>N\) 时，有 \(|a_n-a|<\frac{|a|}{2}\),

又 \(|a|=|a-a_n+a_n|\le|a_n-a|+|a_n|<\frac{|a|}{2}+|a_n|\),

从而有 \(|a_n|>|a|-\frac{|a|}{2}=\frac{|a|}{2}\)，故选（A）.

方法二　由 \(\lim_{n\to\infty}a_n=a\)，知 \(\lim_{n\to\infty}|a_n|=|a|\),

则 \(\lim_{n\to\infty}\left(|a_n|-\frac{|a|}{2}\right)=\frac{|a|}{2}>0\)，由极限的保号性知，

当 \(n\) 充分大时，\(|a_n|-\frac{|a|}{2}>0\)，即 \(|a_n|>\frac{|a|}{2}\). 故选（A）.

**例14**　（2004，数三）函数 \(f(x)=\frac{|x|\sin(x-2)}{x(x-1)(x-2)^2}\) 在下列哪个区间内有界.

（A）\((-1,0)\).　（B）\((0,1)\).　（C）\((1,2)\).　（D）\((2,3)\).

**【解】**　由函数极限的局部有界性质知，若 \(\lim_{x\to x_0}f(x)\) 存在，则 \(f(x)\) 在 \(x_0\) 的某去心邻域内有界；若 \(\lim_{x\to x_0}f(x)=\infty\)，则 \(f(x)\) 在 \(x_0\) 附近无界.

由题意知 \(f(x)\) 在 \((-1,0),(0,1),(1,2),(2,3)\) 内都连续.

因此只需考虑 \(f(x)\) 在区间端点的极限是否存在即可.

选项（A），因 \(f(x)\) 在 \(x=-1\) 连续，则 \(\lim_{x\to-1^+}f(x)=f(-1)\).

\[
\lim_{x\to0^-}f(x)=\lim_{x\to0^-}\frac{-x\sin(x-2)}{x(x-1)(x-2)^2}=\lim_{x\to0^-}\frac{-\sin(x-2)}{(x-1)(x-2)^2}=-\frac{\sin2}{4},
\]

所以，\(f(x)\) 在 \((-1,0)\) 内有界.

选项（B）（C）（D），\(\lim_{x\to1}f(x)=\lim_{x\to1}\frac{x\sin(x-2)}{x(x-1)(x-2)^2}=\lim_{x\to1}\frac{\sin(x-2)}{(x-1)(x-2)^2}=\infty\),

\[
\lim_{x\to2}f(x)=\lim_{x\to2}\frac{x\sin(x-2)}{x(x-1)(x-2)^2}=\lim_{x\to2}\frac{\sin(x-2)}{(x-1)(x-2)^2}
\]
\[
=\lim_{x\to2}\frac{x-2}{(x-1)(x-2)^2}=\lim_{x\to2}\frac{1}{(x-1)(x-2)}=\infty,
\]

所以，\(f(x)\) 在 \((0,1),(1,2),(2,3)\) 内都无界.

故选（A）.

**【注】**　若 \(f(x)\) 在 \((a,b)\) 内连续

\[
\begin{cases}
\lim_{x\to a^+}f(x),\lim_{x\to b^-}f(x)\text{ 都存在}\Rightarrow f(x)\text{ 在 }(a,b)\text{ 内有界}\\
\lim_{x\to a^+}f(x),\lim_{x\to b^-}f(x)\text{ 至少有一个为无穷大}\Rightarrow f(x)\text{ 在 }(a,b)\text{ 内无界}
\end{cases}
\]` },
      { p: 17, md: R`#### 4. 函数极限与数列极限的关系

**定理（海因定理）**　若 \(\lim_{x\to x_0}f(x)=A\)，则对任意数列 \(\{x_n\}\)，\(\lim_{n\to\infty}x_n=x_0\)，且 \(x_n\ne x_0\)，都有 \(\lim_{n\to\infty}f(x_n)=A\).

**例15**　求极限 \(\lim_{n\to\infty}\tan^n\left(\frac{\pi}{4}+\frac{2}{n}\right)\).

**【解】**　考虑 \(\lim_{x\to0^+}\left[\tan\left(\frac{\pi}{4}+2x\right)\right]^{\frac1x}=e^{\lim_{x\to0^+}\frac1x\left[\tan\left(\frac{\pi}{4}+2x\right)-1\right]}\),

而 \(\lim_{x\to0^+}\frac1x\left[\tan\left(\frac{\pi}{4}+2x\right)-1\right]=\lim_{x\to0^+}2\sec^2\left(\frac{\pi}{4}+2x\right)=4\),

所以 \(\lim_{n\to\infty}\tan^n\left(\frac{\pi}{4}+\frac{2}{n}\right)=e^4\).

### 二、无穷小量与无穷大量

#### （一）无穷小量

##### 1. 无穷小量的概念

若函数 \(f(x)\) 当 \(x\to x_0\)（或 \(x\to\infty\)）时的极限为零，则称 \(f(x)\) 为 \(x\to x_0\)（或 \(x\to\infty\)）时的无穷小量.

**【注】**　（1）以0为极限的变量，称为无穷小量.

（2）提到无穷小量，必须指明极限过程.

##### 2. 无穷小的性质

（1）有限个无穷小的和仍是无穷小.

（2）有限个无穷小的积仍是无穷小.

（3）无穷小量与有界量的积仍是无穷小.

**【注】**　（1）以上前两条中的“有限”二字不能少.

（2）两个无穷小的商不一定是无穷小.

**例16**　\(\lim_{x\to0}x^2\left(4\sin\frac1x-3\right)=\) ______.

**【解】**　因 \(\lim_{x\to0}x^2=0\)，当 \(x\to0\) 时，\(x^2\) 是无穷小，

而 \(\left|4\sin\frac1x-3\right|\le7\)，\(4\sin\frac1x-3\) 是有界量，所以，\(\lim_{x\to0}x^2\left(4\sin\frac1x-3\right)=0\).

##### 3. 无穷小的比较

设 \(\alpha,\beta\) 是在同一个极限过程中的无穷小，\(\alpha\ne0\).

（1）若 \(\lim\frac{\beta}{\alpha}=0\)，则称 \(\beta\) 是比 \(\alpha\) 高阶的无穷小，记作 \(\beta=o(\alpha)\)；` },
      { p: 18, md: R`（2）若 \(\lim\frac{\beta}{\alpha}=\infty\)，则称 \(\beta\) 是比 \(\alpha\) 低阶的无穷小；

（3）若 \(\lim\frac{\beta}{\alpha}=c\ne0\)，则称 \(\beta\) 与 \(\alpha\) 是同阶无穷小；

（4）若 \(\lim\frac{\beta}{\alpha}=1\)，则称 \(\beta\) 与 \(\alpha\) 是等价无穷小，记作 \(\alpha\sim\beta\)；

（5）若 \(\lim\frac{\beta}{\alpha^k}=c\ne0\)，则称 \(\beta\) 是 \(\alpha\) 的 \(k\) 阶无穷小.

**【注】**　当 \(x\to0\) 时，\(\sin x\sim x\)，\(\ln(1+x)\sim x\)，\(e^x-1\sim x\)，\(1-\cos x\sim\frac12x^2\)，\(\sqrt[n]{1+x}-1\sim\frac1n x\)，\(x-\sin x\sim\frac16x^3\)，\(x-\arcsin x\sim-\frac16x^3\)，\(x-\arctan x\sim\frac13x^3\)，\(x-\tan x\sim-\frac13x^3\)，\(x-\ln(1+x)\sim\frac12x^2\).

**例17**　（2013，数二）设 \(\cos x-1=x\sin\alpha(x)\)，其中 \(|\alpha(x)|<\frac{\pi}{2}\)，则当 \(x\to0\) 时，\(\alpha(x)\) 是

（A）比 \(x\) 高阶的无穷小.　（B）比 \(x\) 低阶的无穷小.

（C）与 \(x\) 同阶但不等价的无穷小.　（D）与 \(x\) 等价的无穷小.

**【解】**　由 \(\cos x-1=x\sin\alpha(x)\) 知，当 \(x\to0\) 时，\(x\sin\alpha(x)=\cos x-1\sim-\frac12x^2\)，

则 \(\sin\alpha(x)\sim-\frac12x\)，又 \(\sin\alpha(x)\sim\alpha(x)\)，于是

\[
\lim_{x\to0}\frac{\alpha(x)}{x}=\lim_{x\to0}\frac{\sin\alpha(x)}{x}=\lim_{x\to0}\frac{-\frac12x}{x}=-\frac12,
\]

所以，\(\alpha(x)\) 与 \(x\) 是同阶但不等价的无穷小，故应选（C）.

**例18**　（2001，数二）设当 \(x\to0\) 时，\((1-\cos x)\ln(1+x^2)\) 是比 \(x\sin x^n\) 高阶的无穷小，而 \(x\sin x^n\) 是比 \((e^{x^2}-1)\) 高阶的无穷小，则正整数 \(n\) 等于

（A）1.　（B）2.　（C）3.　（D）4.

**【解】**　当 \(x\to0\) 时

\[
(1-\cos x)\ln(1+x^2)\sim\frac12x^4
\]

\[
x\sin x^n\sim x^{n+1}
\]

\[
e^{x^2}-1\sim x^2
\]

由题设可知 \(2<n+1<4\)，则 \(n=2\)，故选（B）.

**例19**　（2019，数一、二）当 \(x\to0\) 时，若 \(x-\tan x\) 与 \(x^k\) 是同阶无穷小，则 \(k=\)

（A）1.　（B）2.　（C）3.　（D）4.

**【解】**　

\[
\lim_{x\to0}\frac{x-\tan x}{x^k}=\lim_{x\to0}\frac{1-\sec^2x}{kx^{k-1}}\quad(\text{洛必达法则})
\]

\[
=\lim_{x\to0}\frac{-\tan^2x}{kx^{k-1}}=\lim_{x\to0}\frac{-x^2}{kx^{k-1}}\quad(\text{等价无穷小替换})
\]` },
      { p: 19, md: R`\[
=\lim_{x\to0}\frac{-1}{kx^{k-3}}\quad(\text{极限存在为非零常数（同阶无穷小）})
\]

则 \(k=3\)，故应选（C）.

**例20**　（2009，数一、二、三）当 \(x\to0\) 时，\(f(x)=x-\sin ax\) 与 \(g(x)=x^2\ln(1-bx)\) 是等价无穷小量，则

（A）\(a=1,b=-\frac16\).　（B）\(a=1,b=\frac16\).

（C）\(a=-1,b=-\frac16\).　（D）\(a=-1,b=\frac16\).

**【解】**　由题意知 \(\lim_{x\to0}\frac{f(x)}{g(x)}=1\)，即

\[
1=\lim_{x\to0}\frac{x-\sin ax}{x^2\ln(1-bx)}=\lim_{x\to0}\frac{x-\sin ax}{-bx^3}\quad(\text{等价无穷小替换})
\]

\[
=\lim_{x\to0}\frac{1-a\cos ax}{-3bx^2}\quad(\text{洛必达法则})
\]

由于分母极限为 \(0\)，可得分子极限也为 \(0\)，即 \(\lim_{x\to0}(1-a\cos ax)=1-a=0\)，则 \(a=1\).

\[
=\lim_{x\to0}\frac{1-\cos x}{-3bx^2}
\]

\[
=\lim_{x\to0}\frac{\frac12x^2}{-3bx^2}
\]

\[
=-\frac{1}{6b},
\]

则 \(b=-\frac16\)，所以 \(a=1,b=-\frac16\)，故应选（A）.

**例21**　（2007，数三）当 \(x\to0^+\)，与 \(\sqrt{x}\) 等价无穷小量的是

（A）\(1-e^{\sqrt{x}}\).　（B）\(\ln(1+\sqrt{x})\).　（C）\(\sqrt{1+\sqrt{x}}-1\).　（D）\(1-\cos\sqrt{x}\).

**【解】**　当 \(x\to0^+\)，\(1-e^{\sqrt{x}}=-(e^{\sqrt{x}}-1)\sim-\sqrt{x}\)，\(\sqrt{1+\sqrt{x}}-1\sim\frac12\sqrt{x}\)，可知选项（A），（C）都是与 \(\sqrt{x}\) 同阶无穷小. 而 \(1-\cos\sqrt{x}\sim\frac12x\)，则（D）选项是 \(\sqrt{x}\) 的高阶无穷小. 由 \(\ln(1+\sqrt{x})\sim\sqrt{x}\) 知（B）选项是与 \(\sqrt{x}\) 等价的无穷小.

故应选（B）.

**例22**　设 \(f(x)=\frac{1}{x^2}\sin x\)，\(g(x)=\frac1x\)，则当 \(x\to\infty\) 时，\(f(x)\) 是 \(g(x)\) 的

（A）高阶无穷小.　（B）低阶无穷小.

（C）等价无穷小.　（D）同阶但非等价无穷小.

**【解】**　由于 \(\lim_{x\to\infty}\frac{f(x)}{g(x)}=\lim_{x\to\infty}\frac{\frac{1}{x^2}\sin x}{\frac1x}=\lim_{x\to\infty}\frac1x\cdot\sin x=0\),` },
      { p: 20, md: R`则当 \(x\to\infty\) 时，\(f(x)\) 是比 \(g(x)\) 高阶的无穷小，故应选（A）.

**例23**　（1998，数二）设数列 \(\{x_n\}\) 与 \(\{y_n\}\) 满足 \(\lim_{n\to\infty}x_ny_n=0\)，则下列断言正确的是

（A）若 \(\{x_n\}\) 发散，则 \(\{y_n\}\) 必发散.　（B）若 \(\{x_n\}\) 无界，则 \(\{y_n\}\) 必有界.

（C）若 \(\{x_n\}\) 有界，则 \(\{y_n\}\) 必为无穷小.　（D）若 \(\left\{\frac{1}{x_n}\right\}\) 为无穷小，则 \(\{y_n\}\) 必为无穷小.

**【解】**　（A），（B），（C）选项都不正确，可举反例说明：

如取 \(x_n=n,y_n=0\)，则 \(\lim_{n\to\infty}x_ny_n=0\)，\(\{x_n\}\) 发散，但 \(\{y_n\}\) 收敛，故（A）不对.

取

\[
x_n=\begin{cases}n,&n\text{为奇数}\\0,&n\text{为偶数}\end{cases},\quad y_n=\begin{cases}0,&n\text{为奇数}\\n,&n\text{为偶数}\end{cases},
\]

则 \(x_ny_n=0\)，\(\{x_n\},\{y_n\}\) 都无界，所以（B）不对.

取 \(x_n=\frac{1}{n^2},y_n=n\)，则 \(\lim_{n\to\infty}x_ny_n=0\)，\(\{x_n\}\) 有界，但 \(\lim_{n\to\infty}y_n=+\infty\)，\(\{y_n\}\) 不是无穷小，因而（C）不对.

而选项（D）正确. 若 \(\left\{\frac{1}{x_n}\right\}\) 为无穷小，\(\lim_{n\to\infty}\frac{1}{x_n}=0\)，

从而 \(\lim_{n\to\infty}y_n=\lim_{n\to\infty}x_ny_n\cdot\frac{1}{x_n}=\lim_{n\to\infty}x_ny_n\cdot\lim_{n\to\infty}\frac{1}{x_n}=0\),

所以 \(\{y_n\}\) 为无穷小，故选（D）.

**例24**　（2016，数二）设 \(\alpha_1=x(\cos\sqrt{x}-1)\)，\(\alpha_2=\sqrt{x}\ln(1+\sqrt[3]{x})\)，\(\alpha_3=\sqrt[3]{x+1}-1\). 当 \(x\to0^+\) 时，以上 3 个无穷小量从低阶到高阶的排序是

（A）\(\alpha_1,\alpha_2,\alpha_3\).　（B）\(\alpha_2,\alpha_3,\alpha_1\).　（C）\(\alpha_2,\alpha_1,\alpha_3\).　（D）\(\alpha_3,\alpha_2,\alpha_1\).

**【解】**　当 \(x\to0^+\) 时

\[
\alpha_1=x(\cos\sqrt{x}-1)\sim-\frac12x^2
\]

\[
\alpha_2=\sqrt{x}\ln(1+\sqrt[3]{x})\sim x^{\frac12+\frac13}=x^{\frac56}
\]

\[
\alpha_3=\sqrt[3]{x+1}-1\sim\frac13x
\]

则以上 3 个无穷小量从低阶到高阶的排序是 \(\alpha_2,\alpha_3,\alpha_1\)，故选（B）.

##### 4. 极限值与无穷小之间的关系

\[
\lim f(x)=A\Leftrightarrow f(x)=A+\alpha(x)
\]

其中 \(\lim\alpha(x)=0\).

**例25**　已知 \(\lim_{x\to0}\left[\frac{f(x)-1}{x}-\frac{\sin x}{x^2}\right]=2\)，则 \(\lim_{x\to0}f(x)=\) ______.

**【解】**　由 \(\lim_{x\to0}\left[\frac{f(x)-1}{x}-\frac{\sin x}{x^2}\right]=2\) 得

\[
\frac{f(x)-1}{x}-\frac{\sin x}{x^2}=2+\alpha(x),\quad\text{其中}\lim_{x\to0}\alpha(x)=0
\]` },
      { p: 21, md: R`由上式解得 \(f(x)=2x+x\alpha(x)+\frac{\sin x}{x}+1\)，

则 \(\lim_{x\to0}f(x)=\lim_{x\to0}\left[2x+x\alpha(x)+\frac{\sin x}{x}+1\right]=2\).

#### （二）无穷大量

##### 1. 无穷大量的概念

若函数 \(f(x)\) 当 \(x\to x_0\)（或 \(x\to\infty\)）时趋向于无穷，则称 \(f(x)\) 为 \(x\to x_0\)（或 \(x\to\infty\)）时的无穷大量. 即：若对任意给定的 \(M>0\)，总存在 \(\delta>0\)，当 \(0<|x-x_0|<\delta\) 时，恒有 \(|f(x)|>M\)，则称 \(f(x)\) 为 \(x\to x_0\) 时的无穷大量. 记为 \(\lim_{x\to x_0}f(x)=\infty\).

**例26**　设 \(y=e^{-\frac1x}\) 是无穷大量，则 \(x\) 的变化过程是

（A）\(x\to0^+\).　（B）\(x\to0^-\).　（C）\(x\to+\infty\).　（D）\(x\to-\infty\).

**【解】**　由于 \(\lim_{x\to0^+}\left(-\frac1x\right)=-\infty\)，\(\lim_{x\to0^-}\left(-\frac1x\right)=+\infty\)，\(\lim_{x\to+\infty}\left(-\frac1x\right)=0\)，\(\lim_{x\to-\infty}\left(-\frac1x\right)=0\)，

则 \(\lim_{x\to0^+}e^{-\frac1x}=0\)，\(\lim_{x\to0^-}e^{-\frac1x}=+\infty\)，\(\lim_{x\to+\infty}e^{-\frac1x}=1\)，\(\lim_{x\to-\infty}e^{-\frac1x}=1\).

故应选（B）.

##### 2. 无穷大量的性质

（1）两个无穷大量的积仍为无穷大量.

（2）无穷大量与有界变量之和仍为无穷大量.

（3）无穷大量与非零常数乘积仍为无穷大量.

**例27**　若 \(\lim_{x\to a}f(x)=\infty,\lim_{x\to a}g(x)=\infty\)，则必有

（A）\(\lim_{x\to a}[f(x)+g(x)]=\infty\).　（B）\(\lim_{x\to a}[f(x)-g(x)]=0\).

（C）\(\lim_{x\to a}\frac{f(x)}{g(x)}=1\).　（D）\(\lim_{x\to a}kf(x)=\infty\)（\(k\) 为非零常数）.

**【解】**　由性质知选项（D）正确. 对于选项（A）（B）（C）可举反例排除.

如 \(x\to0\) 时，令 \(f(x)=\frac1x,g(x)=-\frac1x\) 是无穷大量，

则 \(\lim_{x\to0}[f(x)+g(x)]=0,\lim_{x\to0}[f(x)-g(x)]=\infty,\lim_{x\to0}\frac{f(x)}{g(x)}=-1\),

可见选项（A）（B）（C）不正确，故应选（D）.

##### 3. 常用的一些无穷大量的比较

（1）当 \(x\to+\infty\) 时

\[
\ln^\alpha x\ll x^\beta\ll a^x,\text{其中 }a>0,\beta>0,a>1
\]

**【注】**　这些结论可以用洛必达法则证明.

（2）当 \(n\to\infty\) 时` },
      { p: 22, md: R`\[
\ln^\alpha n\ll n^\beta\ll a^n\ll n!\ll n^n,\text{其中 }a>0,\beta>0,a>1
\]

**例28**　（2010，数三）设 \(f(x)=\ln^{10}x,g(x)=x,h(x)=e^{\frac{x}{10}}\)，则当 \(x\) 充分大时，有

（A）\(g(x)<h(x)<f(x)\).　（B）\(h(x)<g(x)<f(x)\).

（C）\(f(x)<g(x)<h(x)\).　（D）\(g(x)<f(x)<h(x)\).

**【解】**　由于当 \(x\to+\infty\) 时

\[
\ln^\alpha x\ll x^\beta\ll a^x,\text{其中 }a>0,\beta>0,a>1
\]

则当 \(x\) 充分大时，有 \(\ln^{10}x\ll x\ll e^{\frac{x}{10}}\)，即 \(f(x)<g(x)<h(x)\).

故应选（C）.

##### 4. 无穷大量与无界变量的关系

我们以数列为例说明无穷大量与无界变量的关系. 首先回忆这两个概念：

（1）数列 \(\{x_n\}\) 是无穷大量：\(\forall M>0,\exists N>0\)，当 \(n>N\) 时，恒有 \(|x_n|>M\).

（2）数列 \(\{x_n\}\) 是无界变量：\(\forall M>0,\exists N>0\)，使 \(|x_N|>M\).

由以上两个定义不难看出无穷大量必为无界变量，而无界变量不一定是无穷大量.

**例29**　当 \(n\to\infty\) 时，数列 \(\{x_n\}:1,0,3,0,5,0,\cdots,2n-1,0,\cdots\) 是

（A）无穷小量.　（B）无穷大量.　（C）有界变量.　（D）无界变量.

**【解】**　当 \(n\) 为奇数时，\(x_n=n\)，此时 \(\lim_{n\to\infty}x_n=+\infty\)，由此可见，数列 \(\{x_n\}\) 是无界变量，从而排除选项（A）（C）.

当 \(n\) 为偶数时，\(x_n=0\)，此时 \(\lim_{n\to\infty}x_n=0\)，由此可见，数列 \(\{x_n\}\) 不是无穷大量，从而排除选项（B）.

故应选（D）.

#### （三）无穷大量与无穷小量的关系

在同一极限过程中，如果 \(f(x)\) 是无穷大，则 \(\frac{1}{f(x)}\) 是无穷小；反之，如果 \(f(x)\) 是无穷小，且 \(f(x)\ne0\)，则 \(\frac{1}{f(x)}\) 是无穷大.

**【注】**　若 \(f(x)\equiv0\)，是 \(x\to x_0\) 时的无穷小量，但 \(\frac{1}{f(x)}\) 无意义，所以不是无穷大量.

**例30**　（1993，数三）当 \(x\to0\) 时，变量 \(\frac{1}{x^2}\sin\frac1x\) 是

（A）无穷小.　（B）无穷大.

（C）有界的，但不是无穷小.　（D）无界的，但不是无穷大.

**【解】**　取 \(x_n=\frac{1}{2n\pi+\frac{\pi}{2}}\)，则

\[
\frac{1}{x_n^2}\sin\frac{1}{x_n}=\left(2n\pi+\frac{\pi}{2}\right)^2\sin\left(2n\pi+\frac{\pi}{2}\right)=\left(2n\pi+\frac{\pi}{2}\right)^2,
\]` },
      { p: 23, md: R`则 \(\lim_{n\to\infty}\frac{1}{x_n^2}\sin\frac{1}{x_n}=+\infty\)，

从而当 \(x\to0\) 时，\(\frac{1}{x^2}\sin\frac1x\) 不是无穷小，但无界，故（A），（C）不正确.

再取 \(y_n=\frac{1}{2n\pi}\)，则 \(\frac{1}{y_n^2}\sin\frac{1}{y_n}=(2n\pi)^2\sin2n\pi=0\)，

则 \(\lim_{n\to\infty}\frac{1}{y_n^2}\sin\frac{1}{y_n}=0\)，则 \(x\to0\) 时，\(\frac{1}{x^2}\sin\frac1x\) 不是无穷大，（B）不对.

故应选（D）.

### 三、极限的计算

#### 1. 利用四则运算法则求极限

**四则运算法则**　若 \(\lim f(x)=a,\lim g(x)=b\)，则

（1）\(\lim[f(x)\pm g(x)]=\lim f(x)\pm\lim g(x)=a\pm b\)

（2）\(\lim[f(x)g(x)]=\lim f(x)\cdot\lim g(x)=ab\)

（3）\(\lim\frac{f(x)}{g(x)}=\frac{\lim f(x)}{\lim g(x)}=\frac{a}{b}\quad(b\ne0)\)

**【注】**　（1）定理的条件不能忽略.

（2）加、减、乘法则可推广至有限多个函数的情形.

**推论**　（1）\(\lim cf(x)=c\lim f(x)=ca\)（\(c\) 为常数）

（2）\(\lim[f(x)]^n=[\lim f(x)]^n=a^n\)

（3）\(\lim[f(x)]^{\frac1n}=[\lim f(x)]^{\frac1n}=a^{\frac1n}\)，其中 \(n\) 是正整数.

**【注】**　（1）存在 \(\pm\) 不存在 \(=\) 不存在；　（2）不存在 \(\pm\) 不存在 \(=\) 不一定；

（3）存在 \(\times(\div)\) 不存在 \(=\) 不一定；　（4）不存在 \(\times(\div)\) 不存在 \(=\) 不一定.

常用的结论：

（1）\(\lim f(x)=A\ne0\Rightarrow\lim f(x)g(x)=A\lim g(x)\).

即：极限非零的因子的极限可先求出来.

（2）\(\lim\frac{f(x)}{g(x)}\) 存在，\(\lim g(x)=0\Rightarrow\lim f(x)=0\).

（3）\(\lim\frac{f(x)}{g(x)}=A\ne0,\lim f(x)=0\Rightarrow\lim g(x)=0\).

（4）若 \(f(x)=a_0x^n+a_1x^{n-1}+\cdots+a_n(n\ge1)\)，则 \(\lim_{x\to x_0}f(x)=f(x_0)\)；\(\lim_{x\to\infty}f(x)=\infty\).

（5）设有理分式函数 \(F(x)=\frac{P(x)}{Q(x)},P(x),Q(x)\) 是多项式，

若 \(Q(x_0)\ne0\)，则 \(\lim_{x\to x_0}F(x)=\frac{P(x_0)}{Q(x_0)}\).

（6）

\[
\lim_{x\to\infty}\frac{a_0x^m+a_1x^{m-1}+\cdots+a_m}{b_0x^n+b_1x^{n-1}+\cdots+b_n}=\begin{cases}0,&m<n\\\infty,&m>n\\\frac{a_0}{b_0},&m=n\end{cases}
\]

（7）\(\lim_{x\to0}\frac{a^x-1}{x}=\ln a\).` },
      { p: 24, md: R`（8）\(\lim_{n\to\infty}\sqrt[n]{n}=1,\lim_{n\to\infty}\sqrt[n]{a}=1,(a>0)\).

（9）\(\lim_{n\to\infty}e^{nx}=\begin{cases}0,&x<0\\+\infty,&x>0\\1,&x=0\end{cases}\)

**例31**　求极限 \(\lim_{x\to1}\frac{\sqrt{3-x}-\sqrt{1+x}}{x^2+x-2}\).

**【解】**　此极限为 \(\frac00\) 型，可对分子有理化，分母分解因式，得

\[
\lim_{x\to1}\frac{\sqrt{3-x}-\sqrt{1+x}}{x^2+x-2}=\lim_{x\to1}\frac{(\sqrt{3-x})^2-(\sqrt{1+x})^2}{(x-1)(x+2)(\sqrt{3-x}+\sqrt{1+x})}
\]

\[
=\lim_{x\to1}\frac{-2}{(x+2)(\sqrt{3-x}+\sqrt{1+x})}=-\frac{\sqrt2}{6}.
\]

**例32**　求下列极限

（1）\(\lim_{x\to-1}\left(\frac{x}{x+1}+\frac{2}{1-x^2}\right)\)；　（2）\(\lim_{x\to+\infty}(\sqrt{x^2+x+1}-\sqrt{x^2-x+1})\).

**【解】**　（1）此极限为 \(\infty+\infty\) 型，先通分，再求极限.

\[
\lim_{x\to-1}\left(\frac{x}{x+1}+\frac{2}{1-x^2}\right)=\lim_{x\to-1}\frac{x^2-x-2}{x^2-1}=\lim_{x\to-1}\frac{(x-2)(x+1)}{(x-1)(x+1)}=\lim_{x\to-1}\frac{x-2}{x-1}=\frac32.
\]

（2）此极限为 \(\infty-\infty\) 型，先有理化

\[
\lim_{x\to+\infty}(\sqrt{x^2+x+1}-\sqrt{x^2-x+1})=\lim_{x\to+\infty}\frac{2x}{\sqrt{x^2+x+1}+\sqrt{x^2-x+1}}\quad(\text{分子分母同除以 }x)
\]

\[
=\lim_{x\to+\infty}\frac{2}{\sqrt{1+\frac1x+\frac1{x^2}}+\sqrt{1-\frac1x+\frac1{x^2}}}=1.
\]

**【注】**　第（2）题，若极限过程改为 \(x\to-\infty\)，极限又会如何？

可练习之，答案为 \(\lim_{x\to-\infty}(\sqrt{x^2+x+1}-\sqrt{x^2-x+1})=-1\).

**例33**　（1993，数三）\(\lim_{x\to-\infty}x(\sqrt{x^2+100}+x)=\) ______.

**【解】**　此极限为 \(\infty\cdot0\) 型，先对 \(\sqrt{x^2+100}+x\) 有理化，化为商，再求极限

\[
\lim_{x\to-\infty}x(\sqrt{x^2+100}+x)=\lim_{x\to-\infty}\frac{x(\sqrt{x^2+100}+x)(\sqrt{x^2+100}-x)}{\sqrt{x^2+100}-x}
\]

\[
=\lim_{x\to-\infty}\frac{100x}{\sqrt{x^2+100}-x}=\lim_{x\to-\infty}\frac{100x}{-x\sqrt{1+\frac{100}{x^2}}-x}
\]

\[
=\lim_{x\to-\infty}\frac{100}{-\sqrt{1+\frac{100}{x^2}}-1}=-50.
\]

**【注】**　因 \(x\to-\infty\)，可知 \(x<0\)，对 \(\sqrt{x^2+100}\) 提取 \(x^2\) 开方时要注意 \(x\) 的符号.` },
      { p: 25, md: R`**例34**　极限 \(\lim_{n\to\infty}\left[\frac{1}{1\times3}+\frac{1}{3\times5}+\cdots+\frac{1}{(2n-1)(2n+1)}\right]=\) ______.

**【解】**　此为 \(n\) 项和的极限，因项数 \(n\) 变动，不能直接用加法法则求极限，要先对加项进行化简. 由

\[
\frac{1}{(2k-1)(2k+1)}=\frac12\left(\frac{1}{2k-1}-\frac{1}{2k+1}\right)
\]

得

\[
\text{原式}=\lim_{n\to\infty}\frac12\left(1-\frac13+\frac13-\frac15+\cdots+\frac{1}{2n-1}-\frac{1}{2n+1}\right)=\lim_{n\to\infty}\frac12\left(1-\frac{1}{2n+1}\right)=\frac12.
\]

**例35**　已知 \(\lim_{x\to1}\frac{x^2+ax+b}{1-x}=5\)，求 \(a,b\).

**【解】**　因分母的极限为 \(\lim_{x\to1}(1-x)=0\)，而 \(\lim_{x\to1}\frac{x^2+ax+b}{1-x}=5\)，

则分子的极限为 \(\lim_{x\to1}(x^2+ax+b)=1+a+b=0\)，即 \(b=-(1+a)\)

于是

\[
\lim_{x\to1}\frac{x^2+ax+b}{1-x}=\lim_{x\to1}\frac{x^2+ax-(1+a)}{1-x}=\lim_{x\to1}\frac{(x-1)(x+1+a)}{1-x}
\]

\[
=\lim_{x\to1}[-(x+1+a)]=-(a+2)=5,
\]

即 \(a=-7,b=6\).

**例36**　已知 \(\lim_{x\to\infty}\left(\frac{x^2+1}{x+1}-ax-b\right)=0\)，则 \(a=\) ______，\(b=\) ______.

**【解】**　通分得，原式 \(=\lim_{x\to\infty}\frac{(1-a)x^2-(a+b)x-b+1}{x+1}=0\)，可知 \(1-a=0\)，即 \(a=1\).

当 \(a=1\) 时，原式 \(=\lim_{x\to\infty}\frac{-(1+b)x-b+1}{x+1}=-(1+b)=0\)，得 \(b=-1\)，则 \(a=1,b=-1\).

#### 2. 利用两个重要极限求极限

（1）第一重要极限：\(\lim_{x\to0}\frac{\sin x}{x}=1\).

推广：\(\lim\frac{\sin\alpha}{\alpha}=1\)（\(\alpha\) 为无穷小量）.

由第一重要极限可得以下极限结果：

\[
\lim_{x\to0}\frac{\tan x}{x}=1,\lim_{x\to0}\frac{\arcsin x}{x}=1,\lim_{x\to0}\frac{\arctan x}{x}=1,\lim_{x\to0}\frac{1-\cos x}{x^2}=\frac12,
\]

\[
\lim_{x\to0}\frac{\sin\alpha x}{x}=\alpha,\lim_{x\to0}\frac{\sin\alpha x}{\sin\beta x}=\frac{\alpha}{\beta}(\beta\ne0)(\alpha,\beta\text{为常数}).
\]

（2）第二重要极限：\(\lim_{n\to\infty}\left(1+\frac1n\right)^n=e,\lim_{x\to\infty}\left(1+\frac1x\right)^x=e,\lim_{x\to0}(1+x)^{\frac1x}=e\).

推广：\(\lim(1+\alpha)^{\frac1\alpha}=e\)（\(\alpha\) 为无穷小量）

由第二重要极限可得以下极限结果：

\[
\lim_{x\to\infty}\left(1-\frac1x\right)^x=\frac1e,\lim_{x\to\infty}\left(1+\frac{a}{x}\right)^{bx}=e^{ab},\lim_{x\to\infty}\left(1+\frac{a}{x}\right)^{bx+c}=e^{ab}
\]

“\(1^\infty\)”型极限常用结论.

若 \(\lim\alpha(x)=0,\lim\beta(x)=\infty\)，且 \(\lim\alpha(x)\beta(x)=A\). 则

\[
\lim[1+\alpha(x)]^{\beta(x)}=e^A
\]

可以归纳为以下三步：（1）写标准形式：原式 \(=\lim[1+\alpha(x)]^{\beta(x)}\)` },
      { p: 26, md: R`（2）求极限：\(\lim\alpha(x)\beta(x)=A\).

（3）写结果：原式 \(=e^A\).

**【注】**　（1）第一重要极限是 \(\frac{0}{0}\) 型，第二重要极限是 \(1^\infty\) 型.

（2）利用第一重要极限求极限的题目，有时也可用洛必达法则.

（3）幂指函数 \(1^\infty\) 型的求极限，可利用第二重要极限来求.

**例37**　（1993，数四）\(\lim_{x\to\infty}\frac{3x^2+5}{5x+3}\sin\frac{2}{x}=\) ______.

**【解】**　
\[
\text{原式}=\lim_{x\to\infty}\frac{3x^2+5}{5x+3}\cdot\frac{2}{x}\cdot\frac{\sin\frac{2}{x}}{\frac{2}{x}}
=\lim_{x\to\infty}\frac{6x^2+10}{5x^2+3x}\cdot\lim_{x\to\infty}\frac{\sin\frac{2}{x}}{\frac{2}{x}}=\frac{6}{5}.
\]

**例38**　\(\lim_{x\to1}\frac{\tan(x^2-1)}{x-1}=\) ______.

**【解】**　此极限为 \(\frac{0}{0}\) 型，化简后可用第一重要极限.
\[
\text{原式}=\lim_{x\to1}\frac{\sin(x^2-1)}{\cos(x^2-1)}\cdot\frac{1}{x-1}
=\lim_{x\to1}\frac{\sin(x^2-1)}{x^2-1}\cdot\frac{1}{\cos(x^2-1)}\cdot(x+1)
\]
\[
=\lim_{x\to1}\frac{\sin(x^2-1)}{x^2-1}\cdot\lim_{x\to1}\frac{1}{\cos(x^2-1)}\cdot\lim_{x\to1}(x+1)=1\times1\times2=2.
\]

**例39**　\(\lim_{n\to\infty}n^2\left(1-\cos\frac{1}{n}\right)=\) ______.

**【解】**　由 \(1-\cos\frac{1}{n}=2\sin^2\frac{1}{2n}\) 得
\[
\text{原式}=\lim_{n\to\infty}2n^2\sin^2\frac{1}{2n}
=\lim_{n\to\infty}\frac{1}{2}\left(\frac{\sin\frac{1}{2n}}{\frac{1}{2n}}\right)^2
=\frac{1}{2}\left[\lim_{n\to\infty}\frac{\sin\frac{1}{2n}}{\frac{1}{2n}}\right]^2=\frac{1}{2}.
\]

**例40**　求下列极限

（1）\(\lim_{x\to0}(1-2x)^{\frac{4}{x}+3}\)；　（2）\(\lim_{x\to\infty}\left(\frac{2x+3}{2x-1}\right)^{x-2}\)；　（3）\(\lim_{n\to\infty}\left(1-\frac{1}{n}\right)^{\sqrt{n}}\)

**【解】**　本题均为 \(1^\infty\) 型，可化为第二重要极限求出.

（1）
\[
\text{原式}=\lim_{x\to0}(1-2x)^{\frac{4}{x}}\cdot(1-2x)^3
=\lim_{x\to0}(1-2x)^{\frac{4}{x}}\cdot\lim_{x\to0}(1-2x)^3
\]
\[
=\lim_{x\to0}(1-2x)^{\frac{4}{x}}
=\lim_{x\to0}[1+(-2x)]^{\left(-\frac{1}{2x}\right)\cdot(-8)}
=\left[\lim_{x\to0}(1+(-2x))^{-\frac{1}{2x}}\right]^{-8}=e^{-8}.
\]

（2）
\[
\text{原式}=\lim_{x\to\infty}\left(\frac{2x+3}{2x-1}\right)^x\cdot\lim_{x\to\infty}\left(\frac{2x+3}{2x-1}\right)^{-2}
=\lim_{x\to\infty}\left(\frac{2x+3}{2x-1}\right)^x
\]
\[
=\lim_{x\to\infty}\left(\frac{1+\frac{3}{2x}}{1-\frac{1}{2x}}\right)^x
=\lim_{x\to\infty}\frac{\left(1+\frac{3}{2x}\right)^x}{\left(1-\frac{1}{2x}\right)^x}
=\frac{e^{\frac{3}{2}}}{e^{-\frac{1}{2}}}=e^2.
\]

（3）
\[
\text{原式}=\lim_{n\to\infty}\left[\left(1-\frac{1}{\sqrt{n}}\right)\left(1+\frac{1}{\sqrt{n}}\right)\right]^{\sqrt{n}}
=\lim_{n\to\infty}\left(1-\frac{1}{\sqrt{n}}\right)^{\sqrt{n}}\cdot\lim_{n\to\infty}\left(1+\frac{1}{\sqrt{n}}\right)^{\sqrt{n}}=e^{-1}\cdot e=1.
\]` },
      { p: 27, md: R`**例41**　（2010，数一）极限 \(\lim_{x\to\infty}\left[\frac{x^2}{(x-a)(x+b)}\right]^x=\) ______.

（A）1.　（B）\(e\).　（C）\(e^{a-b}\).　（D）\(e^{b-a}\).

**【解】**　方法一　直接法
\[
\lim_{x\to\infty}\left[\frac{x^2}{(x-a)(x+b)}\right]^x
=\lim_{x\to\infty}\left(\frac{x}{x-a}\right)^x\left(\frac{x}{x+b}\right)^x
\]
\[
=\lim_{x\to\infty}\left(1-\frac{a}{x}\right)^{-x}\left(1+\frac{b}{x}\right)^{-x}
=e^a\cdot e^{-b}=e^{a-b}.
\]
故应选（C）.

方法二　排除法　取 \(a=0\)，则
\[
\text{原式}=\lim_{x\to\infty}\left(\frac{x}{x+b}\right)^x
=\lim_{x\to\infty}\frac{1}{\left(1+\frac{b}{x}\right)^x}=e^{-b}.
\]
则选项（A）（B）（D）都不正确，故应选（C）.

**例42**　\(\lim_{n\to\infty}\frac{n^{n+1}}{(n+1)^n}\sin\frac{1}{n}=\) ______.

**【解】**　
\[
\text{原式}=\lim_{n\to\infty}\frac{n^n}{(n+1)^n}n\sin\frac{1}{n}
=\lim_{n\to\infty}\frac{1}{\left(1+\frac{1}{n}\right)^n}\frac{\sin\frac{1}{n}}{\frac{1}{n}}=\frac{1}{e}.
\]

**【注】**　\(\lim_{n\to\infty}\frac{n^n}{(n+1)^n}=1\) 是“经典错误”，\(\lim_{n\to\infty}\frac{n^n}{(n+1)^n}=\lim_{n\to\infty}\frac{1}{\left(1+\frac{1}{n}\right)^n}=\frac{1}{e}.\)

**例43**　（2011，数二）\(\lim_{x\to0}\left(\frac{1+2^x}{2}\right)^{\frac{1}{x}}=\) ______.

**【解】**　方法一　\(1^\infty\) 型
\[
\text{原式}=\lim_{x\to0}e^{\frac{1}{x}\ln\frac{1+2^x}{2}}=e^{\lim_{x\to0}\frac{1}{x}\ln\frac{1+2^x}{2}},
\]
而
\[
\lim_{x\to0}\frac{1}{x}\ln\frac{1+2^x}{2}=\lim_{x\to0}\frac{\ln(1+2^x)-\ln2}{x}
=\lim_{x\to0}\frac{\frac{1}{1+2^x}\cdot2^x\ln2}{1}\quad\text{（洛必达法则）}
\]
\[
=\lim_{x\to0}\frac{2^x\ln2}{1+2^x}=\frac{\ln2}{2},
\]
则
\[
\lim_{x\to0}\left(\frac{1+2^x}{2}\right)^{\frac{1}{x}}=e^{\frac{\ln2}{2}}=\sqrt{2}.
\]

方法二　由于是 \(1^\infty\) 型，利用第二重要极限
\[
\text{原式}=\lim_{x\to0}\left(1+\frac{2^x-1}{2}\right)^{\frac{2}{2^x-1}\cdot\frac{2^x-1}{2x}}
=\lim_{x\to0}\left[\left(1+\frac{2^x-1}{2}\right)^{\frac{2}{2^x-1}}\right]^{\frac{2^x-1}{2x}}
\]
\[
=\left[\lim_{x\to0}\left(1+\frac{2^x-1}{2}\right)^{\frac{2}{2^x-1}}\right]^{\lim_{x\to0}\frac{2^x-1}{2x}},
\]
而
\[
\lim_{x\to0}\left(1+\frac{2^x-1}{2}\right)^{\frac{2}{2^x-1}}=e\quad\text{（第二重要极限）}
\]` },
      { p: 28, md: R`\[
\lim_{x\to0}\frac{2^x-1}{2x}=\lim_{x\to0}\frac{2^x\ln2}{2}=\frac{\ln2}{2}\quad\text{（洛必达法则）}
\]
则 \(\lim_{x\to0}\left(\frac{1+2^x}{2}\right)^{\frac{1}{x}}=e^{\frac{\ln2}{2}}=\sqrt{2}.\)

**【注】**　求幂指函数 \(f(x)^{g(x)}\) 的极限，常用以下方法：

方法1　利用 \(f(x)^{g(x)}=e^{g(x)\ln f(x)}\)，则
\[
\lim f(x)^{g(x)}=e^{\lim g(x)\ln f(x)}\quad\text{（此为一般方法）}
\]

方法2　若为 \(1^\infty\) 型，可利用第二重要极限.

方法3　若 \(\lim f(x)=A>0,\lim g(x)=B\)，则 \(\lim f(x)^{g(x)}=A^B\).

#### 3. 利用等价无穷小替换求极限

**等价无穷小替换定理**　设 \(f_1(x)\sim f_2(x),g_1(x)\sim g_2(x)\)，且 \(\lim\frac{f_2(x)}{g_2(x)}\) 存在，则
\[
\lim\frac{f_1(x)}{g_1(x)}=\lim\frac{f_2(x)}{g_2(x)}
\]

**【注】**　（1）对分子或分母中的一个或几个无穷小因子作等价替换.

（2）可推广：
\[
\lim\frac{f_1(x)}{g_1(x)}=\lim\frac{f_2(x)}{g_2(x)}=\lim\frac{f_1(x)}{g_2(x)}=\lim\frac{f_2(x)}{g_1(x)}
\]
\[
\lim\frac{f_1(x)h(x)}{g_1(x)}=\lim\frac{f_2(x)h(x)}{g_2(x)}=\lim\frac{f_1(x)h(x)}{g_2(x)}=\lim\frac{f_2(x)h(x)}{g_1(x)}
\]
\[
\lim\frac{f_1(x)}{g_1(x)h(x)}=\lim\frac{f_2(x)}{g_2(x)h(x)}=\lim\frac{f_1(x)}{g_2(x)h(x)}=\lim\frac{f_2(x)}{g_1(x)h(x)}
\]
\[
\lim f_1(x)h(x)=\lim f_2(x)h(x)
\]

（3）和差关系在满足一定条件下可以作等价替换.

若 \(\lim\frac{f_1(x)}{g_1(x)}=A\ne1\)，则 \(\lim[f_1(x)-g_1(x)]=\lim[f_2(x)-g_2(x)]\),

若 \(\lim\frac{f_1(x)}{g_1(x)}=A\ne-1\)，则 \(\lim[f_1(x)+g_1(x)]=\lim[f_2(x)+g_2(x)]\).

**常用的等价无穷小**

当 \(x\to0\) 时，
\[
\sin x\sim x,\quad \tan x\sim x,\quad \arcsin x\sim x,\quad \arctan x\sim x,
\]
\[
1-\cos x\sim\frac{1}{2}x^2,\quad \ln(1+x)\sim x,\quad e^x-1\sim x,\quad a^x-1\sim x\ln a,
\]
\[
(1+x)^\alpha-1\sim\alpha x(\alpha\ne0),\quad \sqrt[n]{1+x}-1\sim\frac{1}{n}x,\quad \sqrt{1+x}-\sqrt{1-x}\sim x,
\]
\[
x-\sin x\sim\frac{1}{6}x^3,\quad \tan x-x\sim\frac{1}{3}x^3,\quad x-\ln(1+x)\sim\frac{1}{2}x^2,
\]
\[
\arcsin x-x\sim\frac{1}{6}x^3,\quad x-\arctan x\sim\frac{1}{3}x^3.
\]

**【注】**　上述等价无穷小中的 \(x\) 换为无穷小量 \(\alpha(x)\)，等价关系照样成立.

推广：当 \(\alpha(x)\) 是无穷小时，
\[
\sin\alpha(x)\sim\alpha(x),\quad \tan\alpha(x)\sim\alpha(x),\quad \arcsin\alpha(x)\sim\alpha(x),
\]
\[
\arctan\alpha(x)\sim\alpha(x),\quad 1-\cos\alpha(x)\sim\frac{1}{2}[\alpha(x)]^2,
\]
\[
\ln[1+\alpha(x)]\sim\alpha(x),\quad e^{\alpha(x)}-1\sim\alpha(x),
\]` },
      { p: 29, md: R`\[
[1+\alpha(x)]^k-1\sim k\alpha(x)(k\ne0),\quad \sqrt[n]{1+\alpha(x)}-1\sim\frac{1}{n}\alpha(x).
\]

**例44**　（2006，数一）\(\lim_{x\to0}\frac{x\ln(1+x)}{1-\cos x}=\) ______.

**【解】**　\(\frac{0}{0}\) 型.
\[
\text{原式}=\lim_{x\to0}\frac{x^2}{\frac{1}{2}x^2}=2\quad\text{（等价无穷小替换）}.
\]

**例45**　（2005，数三、四）\(\lim_{x\to\infty}x\sin\frac{2x}{x^2+1}=\) ______.

**【解】**　当 \(x\to\infty\) 时，\(\frac{2x}{x^2+1}\) 为无穷小，则 \(\sin\frac{2x}{x^2+1}\sim\frac{2x}{x^2+1}\).

于是，
\[
\lim_{x\to\infty}x\sin\frac{2x}{x^2+1}=\lim_{x\to\infty}x\cdot\frac{2x}{x^2+1}\quad\text{（等价无穷小替换）}
\]
\[
=\lim_{x\to\infty}\frac{2x^2}{x^2+1}=2.
\]

**例46**　（1997，数一）求极限 \(\lim_{x\to0}\frac{3\sin x+x^2\cos\frac{1}{x}}{(1+\cos x)\ln(1+x)}\).

**【解】**　
\[
\text{原式}=\lim_{x\to0}\frac{3\sin x+x^2\cos\frac{1}{x}}{(1+\cos x)x}\quad\text{（等价无穷小替换 }\ln(1+x)\sim x\text{）}
\]
\[
=\lim_{x\to0}\frac{3\frac{\sin x}{x}+x\cos\frac{1}{x}}{1+\cos x}=\frac{3+0}{2}=\frac{3}{2}.
\]

**例47**　求极限 \(\lim_{x\to0}\frac{\sin x-\tan x}{(\sqrt[3]{1+x^2}-1)(\sqrt{1+\sin x}-1)}\).

**【解】**　当 \(x\to0\) 时，\(\sqrt[3]{1+x^2}-1\sim\frac{1}{3}x^2\)，\(\sqrt{1+\sin x}-1\sim\frac{1}{2}\sin x\sim\frac{1}{2}x\)，则
\[
\text{原式}=\lim_{x\to0}\frac{\sin x-\tan x}{\frac{1}{3}x^2\cdot\frac{1}{2}x}\quad\text{（等价无穷小替换）}
\]
\[
=\lim_{x\to0}\frac{\sin x\left(1-\frac{1}{\cos x}\right)}{\frac{1}{6}x^3}
=\lim_{x\to0}\frac{\sin x\cdot(\cos x-1)}{\frac{1}{6}x^3\cdot\cos x}
\]
\[
=\lim_{x\to0}\frac{x\cdot\left(-\frac{1}{2}x^2\right)}{\frac{1}{6}x^3\cos x}
=\lim_{x\to0}\left(-\frac{3}{\cos x}\right)=-3.
\]

**【注】**　本题中，分子中的 \(\sin x,\tan x\) 不能分别替换为 \(x\)，因为是在和差项中.` },
      { p: 30, md: R`**例48**　（2009，数三）\(\lim_{x\to0}\frac{e-e^{\cos x}}{\sqrt[3]{1+x^2}-1}=\) ______.

**【解】**　
\[
\text{原式}=\lim_{x\to0}\frac{e^{\cos x}(e^{1-\cos x}-1)}{\frac{1}{3}x^2}
=\lim_{x\to0}e^{\cos x}\cdot\lim_{x\to0}\frac{e^{1-\cos x}-1}{\frac{1}{3}x^2}
\]
\[
=e\lim_{x\to0}\frac{1-\cos x}{\frac{1}{3}x^2}\quad\text{（等价无穷小替换：}e^{1-\cos x}-1\sim1-\cos x\text{）}
\]
\[
=e\lim_{x\to0}\frac{\frac{1}{2}x^2}{\frac{1}{3}x^2}=\frac{3e}{2}.
\]

**【注】**　本题可用洛必达法则及拉格朗日中值定理求解.

**例49**　（2015，数一）\(\lim_{x\to0}\frac{\ln(\cos x)}{x^2}=\) ______.

**【解】**　
\[
\text{原式}=\lim_{x\to0}\frac{\ln[1+(\cos x-1)]}{x^2}
\]
\[
=\lim_{x\to0}\frac{\cos x-1}{x^2}\quad\text{（等价无穷小替换）}
\]
\[
=\lim_{x\to0}\frac{-\frac{1}{2}x^2}{x^2}=-\frac{1}{2}.
\]

**【注】**　本题也可用洛必达法则及拉格朗日中值定理求解.

**例50**　当 \(x\to0\) 时，\((1+x)^\alpha-1\sim\alpha x\). 证明：若 \(\alpha(x)\to0,\alpha(x)\beta(x)\to0\)，则
\[
(1+\alpha(x))^{\beta(x)}-1\sim\alpha(x)\beta(x).
\]

**【证】**　因 \((1+\alpha(x))^{\beta(x)}=e^{\beta(x)\ln(1+\alpha(x))}\)，则
\[
\lim\frac{(1+\alpha(x))^{\beta(x)}-1}{\alpha(x)\beta(x)}
=\lim\frac{e^{\beta(x)\ln(1+\alpha(x))}-1}{\alpha(x)\beta(x)}
\]
\[
=\lim\frac{\beta(x)\ln(1+\alpha(x))}{\alpha(x)\beta(x)}\quad\text{（等价无穷小替换）}
\]
\[
=\lim\frac{\ln(1+\alpha(x))}{\alpha(x)}=1.
\]
所以，\((1+\alpha(x))^{\beta(x)}-1\sim\alpha(x)\beta(x)\).

**【注】**　本题可作结论用，但要注意条件.

**例51**　（2006，数二）求极限 \(\lim_{x\to0}\frac{1}{x^3}\left[\left(\frac{2+\cos x}{3}\right)^x-1\right]\).

**【解】**　方法一　原式 \(=\lim_{x\to0}\frac{1}{x^3}\left[e^{x\ln\left(\frac{2+\cos x}{3}\right)}-1\right]\)
\[
=\lim_{x\to0}\frac{x\ln\left(\frac{2+\cos x}{3}\right)}{x^3}\quad\text{（等价无穷小替换）}
\]
\[
=\lim_{x\to0}\frac{\ln\left(1+\frac{\cos x-1}{3}\right)}{x^2}
\]` },
      { p: 31, md: R`\[
=\lim_{x\to0}\frac{\frac{\cos x-1}{3}}{x^2}\quad\text{（等价无穷小替换）}
\]
\[
=\lim_{x\to0}\frac{-\frac{1}{2}x^2}{3x^2}=-\frac{1}{6}.
\]

方法二　
\[
\text{原式}=\lim_{x\to0}\frac{1}{x^3}\left[\left(1+\frac{\cos x-1}{3}\right)^x-1\right]
\]
\[
=\lim_{x\to0}\frac{x\left(\frac{\cos x-1}{3}\right)}{x^3}\quad\text{（等价无穷小替换）}
\]
\[
=\lim_{x\to0}\frac{\cos x-1}{3x^2}
\]
\[
=\lim_{x\to0}\frac{-\frac{1}{2}x^2}{3x^2}=-\frac{1}{6}.
\]

**【注】**　方法一是常规做法，对于幂指函数 \(f(x)^{g(x)}\) 通常取指数写为 \(e^{g(x)\ln f(x)}\). 方法二利用例50的结论，可知当 \(x\to0\) 时，
\[
\left(1+\frac{\cos x-1}{3}\right)^x-1\sim\frac{x(\cos x-1)}{3}.
\]

**例52**　（2016，数三）已知函数 \(f(x)\) 满足 \(\lim_{x\to0}\frac{\sqrt{1+f(x)\sin2x}-1}{e^{3x}-1}=2\)，则 \(\lim_{x\to0}f(x)=\) ______.

**【解】**　由 \(\lim_{x\to0}\frac{\sqrt{1+f(x)\sin2x}-1}{e^{3x}-1}=2\) 及 \(\lim_{x\to0}(e^{3x}-1)=0\) 知，
\[
\lim_{x\to0}f(x)\sin2x=0.
\]
\[
\lim_{x\to0}\frac{\sqrt{1+f(x)\sin2x}-1}{e^{3x}-1}
=\lim_{x\to0}\frac{\frac{1}{2}f(x)\sin2x}{3x}\quad\text{（等价无穷小替换）}
\]
\[
=\lim_{x\to0}\frac{\frac{1}{2}f(x)\cdot2x}{3x}\quad\text{（等价无穷小替换）}
\]
\[
=\frac{1}{3}\lim_{x\to0}f(x)=2,
\]
故 \(\lim_{x\to0}f(x)=6\).

**【注】**　可利用极限的性质解出 \(f(x)\).

#### 4. 利用洛必达法则求极限

**洛必达法则**

若　（1）\(\lim_{x\to x_0}f(x)=\lim_{x\to x_0}g(x)=0\)（或 \(\infty\)）；

（2）\(f(x)\) 和 \(g(x)\) 在 \(x_0\) 的某去心邻域内可导，且 \(g'(x)\ne0\)；

（3）\(\lim_{x\to x_0}\frac{f'(x)}{g'(x)}\) 存在（或 \(\infty\)），` },
      { p: 32, md: R`则 \(\lim_{x\to x_0}\frac{f(x)}{g(x)}=\lim_{x\to x_0}\frac{f'(x)}{g'(x)}\).

**【注】**　（1）洛必达法则适应类型

洛必达法则可用来求七种类型不定式的极限，即 \(\frac{0}{0},\frac{\infty}{\infty},\infty\pm\infty,0\cdot\infty,1^\infty,\infty^0,0^0\)，其中前两种 \(\frac{0}{0},\frac{\infty}{\infty}\) 直接用洛必达法则，后五种均可化为前两种.
\[
\left.
\begin{array}{l}
0\cdot\infty\xrightarrow{\text{化为商的形式}}\frac{0}{0}\ \text{或}\ \frac{\infty}{\infty}\\[4pt]
\infty\pm\infty\xrightarrow{\text{通分或有理化}}\frac{0}{0}\ \text{或}\ \frac{\infty}{\infty}\\[4pt]
1^\infty,\infty^0,0^0\xrightarrow{\text{取指数 }e^{\ln}}0\cdot\infty\xrightarrow{\text{化商}}\frac{0}{0}\ \text{或}\ \frac{\infty}{\infty}
\end{array}
\right\}\Rightarrow\text{洛必达法则}
\]

（2）使用洛必达法则应该注意的几个问题

① 使用洛必达法则之前，应该先检验其条件是否满足；

② 使用洛必达法则之后，如果问题仍然是未定型极限，且仍符合洛必达法则条件，可以再次使用洛必达法则；

③ 如果“\(\frac{0}{0}\)”型或“\(\frac{\infty}{\infty}\)”型极限中的函数含有极限非零的因子，可以单独求极限，不必参与洛必达法则运算，以简化运算；

④ 如果能进行等价无穷小量替换或恒等变形配合洛必达法则使用，也可以简化运算.

**例53**　（2007，数二）\(\lim_{x\to0}\frac{\arctan x-\sin x}{x^3}=\) ______.

**【解】**　\(\frac{0}{0}\) 型.

方法一
\[
\text{原式}=\lim_{x\to0}\frac{\frac{1}{1+x^2}-\cos x}{3x^2}\quad\text{（洛必达法则）}
\]
\[
=\lim_{x\to0}\frac{1-\cos x-x^2\cos x}{3x^2(1+x^2)}
=\lim_{x\to0}\frac{1}{3(1+x^2)}\cdot\lim_{x\to0}\frac{1-\cos x-x^2\cos x}{x^2}
\]
\[
=\frac{1}{3}\left(\lim_{x\to0}\frac{1-\cos x}{x^2}-\lim_{x\to0}\cos x\right)
=\frac{1}{3}\left(\frac{1}{2}-1\right)=-\frac{1}{6}.
\]

方法二
\[
\lim_{x\to0}\frac{\arctan x-\sin x}{x^3}
=\lim_{x\to0}\frac{\arctan x-x+x-\sin x}{x^3}
\]
\[
=\lim_{x\to0}\frac{-\frac{1}{3}x^3+\frac{1}{6}x^3}{x^3}=-\frac{1}{6}.
\]

**例54**　求极限 \(\lim_{x\to0}\frac{e^x-e^{-x}-2x}{x-\sin x}\).

**【解】**　此极限为 \(\frac{0}{0}\) 型，
\[
\text{原式}=\lim_{x\to0}\frac{e^x+e^{-x}-2}{1-\cos x}\quad\text{（洛必达法则）}
\]
\[
=\lim_{x\to0}\frac{e^x-e^{-x}}{\sin x}\quad\text{（洛必达法则）}
\]` },
      { p: 33, md: R`\[
=\lim_{x\to0}\frac{e^x+e^{-x}}{\cos x}=2.
\]

另解
\[
\text{原式}=\lim_{x\to0}\frac{e^x+e^{-x}-2}{1-\cos x}
=\lim_{x\to0}\frac{e^x+e^{-x}-2}{\frac{1}{2}x^2}\quad\text{（等价无穷小替换）}
\]
\[
=\lim_{x\to0}\frac{e^x-e^{-x}}{x}=\lim_{x\to0}(e^x+e^{-x})=2.
\]

**例55**　（1998，数四）求极限 \(\lim_{n\to\infty}\left(n\tan\frac{1}{n}\right)^{n^2}\).

**【解】**　
\[
\lim_{n\to\infty}\left(n\tan\frac{1}{n}\right)^{n^2}
\overset{\text{令}\frac{1}{n}=x}{=}
\lim_{x\to0^+}\left(\frac{\tan x}{x}\right)^{\frac{1}{x^2}}
=\lim_{x\to0^+}e^{\frac{1}{x^2}\ln\frac{\tan x}{x}}
=e^{\lim_{x\to0^+}\frac{1}{x^2}\ln\frac{\tan x}{x}}
\]
而
\[
\lim_{x\to0^+}\frac{1}{x^2}\ln\frac{\tan x}{x}
=\lim_{x\to0^+}\frac{\ln\tan x-\ln x}{x^2}
=\lim_{x\to0^+}\frac{\frac{1}{\tan x}\sec^2x-\frac{1}{x}}{2x}\quad\text{（洛必达法则）}
\]
\[
=\lim_{x\to0^+}\frac{\frac{2}{\sin2x}-\frac{1}{x}}{2x}
=\lim_{x\to0^+}\frac{2x-\sin2x}{2x^2\sin2x}
\]
\[
=\lim_{x\to0^+}\frac{2x-\sin2x}{4x^3}
=\lim_{x\to0^+}\frac{2(1-\cos2x)}{12x^2}\quad\text{（洛必达法则）}
\]
\[
=\lim_{x\to0^+}\frac{2\cdot\frac{1}{2}(2x)^2}{12x^2}=\frac{1}{3}\quad\text{（等价无穷小替换）}
\]
所以
\[
\lim_{n\to\infty}\left(n\tan\frac{1}{n}\right)^{n^2}=e^{\frac{1}{3}}.
\]

**例56**　（2011，数三）求极限 \(\lim_{x\to0}\frac{\sqrt{1+2\sin x}-x-1}{x\ln(1+x)}\).

**【解】**　
\[
\text{原式}=\lim_{x\to0}\frac{\sqrt{1+2\sin x}-x-1}{x^2}\quad\text{（等价无穷小替换）}
\]
\[
=\lim_{x\to0}\frac{\frac{\cos x}{\sqrt{1+2\sin x}}-1}{2x}\quad\text{（洛必达法则）}
\]
\[
=\lim_{x\to0}\frac{\cos x-\sqrt{1+2\sin x}}{2x\sqrt{1+2\sin x}}
=\lim_{x\to0}\frac{\cos x-\sqrt{1+2\sin x}}{2x}\cdot\lim_{x\to0}\frac{1}{\sqrt{1+2\sin x}}
\]
\[
=\lim_{x\to0}\frac{-\sin x-\frac{\cos x}{\sqrt{1+2\sin x}}}{2}=-\frac{1}{2}.
\]

**例57**　（2012，数三）求极限 \(\lim_{x\to0}\frac{e^{x^2}-e^{2-2\cos x}}{x^4}\).

**【解】**　\(\frac{0}{0}\) 型
\[
\text{原式}=\lim_{x\to0}\frac{e^{2-2\cos x}(e^{x^2-2+2\cos x}-1)}{x^4}
=\lim_{x\to0}e^{2-2\cos x}\lim_{x\to0}\frac{e^{x^2-2+2\cos x}-1}{x^4}
\]` },
      { p: 34, md: R`\[
=\lim_{x\to0}\frac{e^{x^2-2+2\cos x}-1}{x^4}=\lim_{x\to0}\frac{x^2-2+2\cos x}{x^4}\quad\text{（等价无穷小替换）}
\]

\[
=\lim_{x\to0}\frac{2x-2\sin x}{4x^3}=\lim_{x\to0}\frac{2-2\cos x}{12x^2}\quad\text{（洛必达法则）}
\]

\[
=\lim_{x\to0}\frac{1-\cos x}{6x^2}=\lim_{x\to0}\frac{\frac{1}{2}x^2}{6x^2}=\frac{1}{12}\quad\text{（等价无穷小替换）}
\]

**例58**　\(\lim_{x\to\frac{\pi}{2}^+}\frac{\ln\left(x-\frac{\pi}{2}\right)}{\tan x}=\) ______.

**【解】**　此极限为 \(\frac{\infty}{\infty}\) 型
\[
\text{原式}=\lim_{x\to\frac{\pi}{2}^+}\frac{\frac{1}{x-\frac{\pi}{2}}}{\sec^2x}\quad\text{（洛必达法则）}
\]
\[
=\lim_{x\to\frac{\pi}{2}^+}\frac{\cos^2x}{x-\frac{\pi}{2}}=\lim_{x\to\frac{\pi}{2}^+}\frac{-2\sin x\cos x}{1}=0.
\]

**例59**　（1988，数三）求极限 \(\lim_{x\to1}(1-x^2)\tan\frac{\pi}{2}x\).

**【解】**　此极限为 \(0\cdot\infty\) 型，先化为 \(\frac{0}{0}\) 型，再用洛必达法则
\[
\text{原式}=\lim_{x\to1}\frac{1-x^2}{\cot\frac{\pi}{2}x}=\lim_{x\to1}\frac{-2x}{-\frac{\pi}{2}\csc^2\frac{\pi}{2}x}=\frac{4}{\pi}\lim_{x\to1}x\sin^2\frac{\pi}{2}x=\frac{4}{\pi}.
\]

**例60**　（2005，数三、四）求极限 \(\lim_{x\to0}\left(\frac{1+x}{1-e^{-x}}-\frac{1}{x}\right)\).

**【解】**　此极限为 \(\infty-\infty\) 型，先通分化为商.
\[
\text{原式}=\lim_{x\to0}\frac{x+x^2+e^{-x}-1}{x(1-e^{-x})}=\lim_{x\to0}\frac{x+x^2+e^{-x}-1}{x^2}\quad\text{（等价无穷小替换）}
\]
\[
=\lim_{x\to0}\frac{1+2x-e^{-x}}{2x}\quad\text{（洛必达法则）}
\]
\[
=\lim_{x\to0}\frac{2+e^{-x}}{2}=\frac{3}{2}.
\]

**例61**　（1994，数三）求极限 \(\lim_{x\to\infty}\left[x-x^2\ln\left(1+\frac{1}{x}\right)\right]\).

**【解】**　\(\infty-\infty\) 型
\[
\text{原式}\xlongequal{\text{令}x=\frac{1}{t}}\lim_{t\to0}\left[\frac{1}{t}-\frac{1}{t^2}\ln(1+t)\right]=\lim_{t\to0}\frac{t-\ln(1+t)}{t^2}
\]
\[
=\lim_{t\to0}\frac{1-\frac{1}{1+t}}{2t}\quad\text{（洛必达法则）}
\]` },
      { p: 35, md: R`\[
=\lim_{t\to0}\frac{1}{2(1+t)}=\frac{1}{2}.
\]

**例62**　（2020，数一）\(\lim_{x\to0}\left[\frac{1}{e^x-1}-\frac{1}{\ln(1+x)}\right]\).

**【解】**　\(\infty-\infty\) 型
\[
\text{原式}=\lim_{x\to0}\frac{\ln(1+x)-e^x+1}{(e^x-1)\ln(1+x)}=\lim_{x\to0}\frac{\ln(1+x)-e^x+1}{x^2}\quad\text{（等价无穷小替换）}
\]
\[
=\lim_{x\to0}\frac{\frac{1}{1+x}-e^x}{2x}\xlongequal{\text{洛必达法则}}\lim_{x\to0}\frac{-\frac{1}{(1+x)^2}-e^x}{2}
\]
\[
=-1.
\]

**例63**　（2003，数一）求 \(\lim_{x\to0}(\cos x)^{\frac{1}{\ln(1+x^2)}}\).

**【解】**　此极限为 \(1^\infty\) 型，取指数：\((\cos x)^{\frac{1}{\ln(1+x^2)}}=e^{\frac{1}{\ln(1+x^2)}\ln\cos x}\).

先求极限 \(\lim_{x\to0}\frac{1}{\ln(1+x^2)}\ln\cos x\)，此为 \(\infty\cdot0\) 型，则
\[
\lim_{x\to0}\frac{1}{\ln(1+x^2)}\ln\cos x=\lim_{x\to0}\frac{\ln\cos x}{\ln(1+x^2)}=\lim_{x\to0}\frac{\ln\cos x}{x^2}\quad\text{（等价无穷小替换）}
\]
\[
=\lim_{x\to0}\frac{\frac{1}{\cos x}\cdot(-\sin x)}{2x}\quad\text{（洛必达法则）}
\]
\[
=\lim_{x\to0}\frac{1}{\cos x}\cdot\lim_{x\to0}\frac{-\sin x}{2x}=-\frac{1}{2}
\]
\[
\text{原式}=\lim_{x\to0}e^{\frac{1}{\ln(1+x^2)}\ln\cos x}=e^{\lim_{x\to0}\frac{1}{\ln(1+x^2)}\ln\cos x}=e^{-\frac{1}{2}}.
\]

**例64**　求 \(\lim_{x\to0^+}\left(\frac{1}{x}\right)^{\tan x}\).

**【解】**　此极限为 \(\infty^0\) 型.
\[
\text{原式}=\lim_{x\to0^+}e^{\tan x\ln\frac{1}{x}}=e^{\lim_{x\to0^+}\tan x\ln\frac{1}{x}},
\]
而 \(\lim_{x\to0^+}\tan x\ln\frac{1}{x}=\lim_{x\to0^+}x\ln\frac{1}{x}\quad\text{（等价无穷小替换）}\)
\[
=\lim_{x\to0^+}\frac{\ln\frac{1}{x}}{\frac{1}{x}}\quad\left(\frac{\infty}{\infty}\text{型}\right)
\]
\[
\xlongequal{\text{洛必达法则}}\lim_{x\to0^+}\frac{x\cdot\left(-\frac{1}{x^2}\right)}{-\frac{1}{x^2}}=0,
\]
则 \(\lim_{x\to0^+}\left(\frac{1}{x}\right)^{\tan x}=e^0=1\).

**【注】**　幂指函数 \(f(x)^{g(x)}\) 求极限，都可如下变形：` },
      { p: 36, md: R`\[
\lim f(x)^{g(x)}=\lim e^{g(x)\ln f(x)}=e^{\lim g(x)\ln f(x)}
\]

若为 \(0^0,1^\infty,\infty^0\) 时，\(\lim g(x)\ln f(x)\) 为 \(0\cdot\infty\) 型.

**例65**　（2000，数二）若 \(\lim_{x\to0}\frac{\sin6x+xf(x)}{x^3}=0\)，则 \(\lim_{x\to0}\frac{6+f(x)}{x^2}=\) ______.

（A）0.　（B）6.　（C）36.　（D）\(\infty\).

**【解】**　方法一　由 \(\lim_{x\to0}\frac{\sin6x+xf(x)}{x^3}=0\) 得
\[
\frac{\sin6x+xf(x)}{x^3}=0+\alpha(x),\text{其中}\lim_{x\to0}\alpha(x)=0
\]
解得 \(f(x)=x^2\alpha(x)-\frac{\sin6x}{x}\).

则
\[
\lim_{x\to0}\frac{6+f(x)}{x^2}=\lim_{x\to0}\frac{6+x^2\alpha(x)-\frac{\sin6x}{x}}{x^2}=\lim_{x\to0}\frac{6x+x^3\alpha(x)-\sin6x}{x^3}
\]
\[
=\lim_{x\to0}\alpha(x)+\lim_{x\to0}\frac{6x-\sin6x}{x^3}=\lim_{x\to0}\frac{6(1-\cos6x)}{3x^2}\quad\text{（洛必达法则）}
\]
\[
=\lim_{x\to0}\frac{6\cdot\frac{1}{2}\cdot(6x)^2}{3x^2}=36.
\]
故应选（C）.

方法二
\[
\lim_{x\to0}\frac{6+f(x)}{x^2}=\lim_{x\to0}\frac{6x+xf(x)}{x^3}=\lim_{x\to0}\frac{6x-\sin6x+\sin6x+xf(x)}{x^3}
\]
\[
=\lim_{x\to0}\frac{6x-\sin6x}{x^3}+\lim_{x\to0}\frac{\sin6x+xf(x)}{x^3}
\]
\[
=\lim_{x\to0}\frac{6(1-\cos6x)}{3x^2}=\lim_{x\to0}\frac{6\cdot\frac{1}{2}\cdot(6x)^2}{3x^2}=36.
\]
故应选（C）.

方法三　由 \(\lim_{x\to0}\frac{\sin6x+xf(x)}{x^3}=0\)，有 \(\lim_{x\to0}\frac{\sin6x-6x+6x+xf(x)}{x^3}=0\),

即 \(\lim_{x\to0}\frac{\sin6x-6x}{x^3}+\lim_{x\to0}\frac{6+f(x)}{x^2}=0\)，所以 \(\lim_{x\to0}\frac{6+f(x)}{x^2}=36\).

#### 5. 利用夹逼准则求极限

**夹逼准则**　若函数 \(f(x),g(x),h(x)\) 满足：

（1）\(g(x)\le f(x)\le h(x)\)

（2）\(\lim_{x\to x_0}g(x)=\lim_{x\to x_0}h(x)=A\)

则 \(\lim_{x\to x_0}f(x)=A\).

**【注】**　条件（1）只要在极限过程 \(x\to x_0\) 附近成立即可.

换为其他极限过程也有相应的夹逼准则.

对于数列也有类似的夹逼准则.

利用夹逼准则求极限，分两步做：` },
      { p: 37, md: R`第一步　放大缩小建立不等式；

第二步　验证不等式两头的极限存在且相等.

**例66**　\(\lim_{n\to\infty}\frac{2^n}{n!}=\) ______.

**【解】**　由于 \(0<\frac{2^n}{n!}=\frac{2\times2\times\cdots\times2\times2}{1\times2\times\cdots\times(n-1)\times n}=2\times1\times\frac{2}{3}\times\cdots\times\frac{2}{n-1}\times\frac{2}{n}<\frac{4}{n}\),

又 \(\lim_{n\to\infty}\frac{4}{n}=\lim_{n\to\infty}0=0\)，所以，由夹逼准则知，\(\lim_{n\to\infty}\frac{2^n}{n!}=0\).

**例67**　（1995，数三）求极限 \(\lim_{n\to\infty}\left(\frac{1}{n^2+n+1}+\frac{2}{n^2+n+2}+\cdots+\frac{n}{n^2+n+n}\right)\).

**【解】**　由于
\[
\frac{1+2+\cdots+n}{n^2+n+n}<\frac{1}{n^2+n+1}+\frac{2}{n^2+n+2}+\cdots+\frac{n}{n^2+n+n}<\frac{1+2+\cdots+n}{n^2+n+1},
\]
而 \(\lim_{n\to\infty}\frac{1+2+\cdots+n}{n^2+n+n}=\lim_{n\to\infty}\frac{\frac{1}{2}n(n+1)}{n^2+n+n}=\frac{1}{2}\),
\[
\lim_{n\to\infty}\frac{1+2+\cdots+n}{n^2+n+1}=\lim_{n\to\infty}\frac{\frac{1}{2}n(n+1)}{n^2+n+1}=\frac{1}{2},
\]
所以由夹逼准则知，\(\lim_{n\to\infty}\left(\frac{1}{n^2+n+1}+\frac{2}{n^2+n+2}+\cdots+\frac{n}{n^2+n+n}\right)=\frac{1}{2}\).

**例68**　\(\lim_{n\to\infty}\sqrt[n]{a_1^n+a_2^n+\cdots+a_m^n}\)，其中 \(a_i>0,(i=1,2,\cdots,m)\).

**【解】**　令 \(\max\{a_i\}=a\)，则
\[
\sqrt[n]{a^n}\le\sqrt[n]{a_1^n+a_2^n+\cdots+a_m^n}\le\sqrt[n]{ma^n}
\]
\[
\lim_{n\to\infty}\sqrt[n]{a^n}=a,\lim_{n\to\infty}\sqrt[n]{m\cdot a^n}=a,
\]
则 \(\lim_{n\to\infty}\sqrt[n]{a_1^n+a_2^n+\cdots+a_m^n}=a\).

**【注】**　这是一个常用结论. 例如 \(\lim_{n\to\infty}(1+2^n+3^n+4^n+5^n)^{\frac{1}{n}}=5\).

**例69**　设 \(x>0\)，求极限 \(\lim_{n\to\infty}\sqrt[n]{1+x^n+\left(\frac{x^2}{2}\right)^n}\).

**【解】**　利用上题结论
\[
\lim_{n\to\infty}\sqrt[n]{1+x^n+\left(\frac{x^2}{2}\right)^n}=\max\left\{1,x,\frac{x^2}{2}\right\}
\]
\[
=\begin{cases}1, & 0<x<1,\\ x, & 1\le x<2,\\ \frac{x^2}{2}, & 2\le x.\end{cases}
\]

**例70**　\(\lim_{x\to0^+}\left(\frac{2^x+3^x}{3}\right)^{\frac{1}{x}}=\) ______.` },
      { p: 38, md: R`**【解】**　当 \(x>0\) 时，\(0<\frac{2^x+3^x}{3}<\frac{2\cdot3^x}{3}\)，于是，当 \(x>0\) 时
\[
0<\left(\frac{2^x+3^x}{3}\right)^{\frac{1}{x}}<\left(\frac{2\cdot3^x}{3}\right)^{\frac{1}{x}}=3\cdot\left(\frac{2}{3}\right)^{\frac{1}{x}},
\]
而 \(\lim_{x\to0^+}3\cdot\left(\frac{2}{3}\right)^{\frac{1}{x}}=0,\lim_{x\to0^+}0=0\)，所以由夹逼准则知，\(\lim_{x\to0^+}\left(\frac{2^x+3^x}{3}\right)^{\frac{1}{x}}=0\).

**例71**　证明：\(\lim_{x\to0^+}x\left[\frac{1}{x}\right]=1\) （\([x]\) 表示 \(x\) 的取整函数）.

**【证】**　取整函数 \([x]\) 表示不超过 \(x\) 的最大整数，\(x-1<[x]\le x\),

从而 \(\frac{1}{x}-1<\left[\frac{1}{x}\right]\le\frac{1}{x}\)，当 \(x>0\) 时，有
\[
1-x=x\left(\frac{1}{x}-1\right)<x\left[\frac{1}{x}\right]\le x\cdot\frac{1}{x}=1,
\]
而 \(\lim_{x\to0^+}(1-x)=1,\lim_{x\to0^+}1=1\),

所以，由夹逼准则知 \(\lim_{x\to0^+}x\left[\frac{1}{x}\right]=1\).

#### 6. 利用单调有界数列极限准则求极限

**准则**　单调有界数列必有极限.

单调递增有上界数列必有极限.

单调递减有下界数列必有极限.

**【注】**　利用单调有界准则求极限，往往按如下步骤：

第一步　证明数列单调有界（多用数学归纳法）

第二步　令 \(\lim_{n\to\infty}x_n=a\)，对给定的关系式两边求极限，解出 \(a\).

**例72**　证明数列 \(x_1=\sqrt{2},x_2=\sqrt{2+\sqrt{2}},\cdots,x_n=\sqrt{2+x_{n-1}},\cdots\) 的极限存在，并求该极限.

**【解】**　首先用数学归纳法证明数列 \(\{x_n\}\) 单调递增，有界.

显然 \(0<x_1<2\). 假设 \(0<x_k<2\)，则有 \(0<x_{k+1}=\sqrt{2+x_k}<\sqrt{2+2}=2\),

由数学归纳法知，\(0<x_n<2\)，即 \(\{x_n\}\) 有界.

显然 \(x_1<x_2\). 假设 \(x_{k-1}<x_k\)，则有

\(x_{k+1}=\sqrt{2+x_k}>\sqrt{2+x_{k-1}}=x_k\)，由数学归纳法知 \(\{x_n\}\) 单调递增. 从而数列 \(\{x_n\}\) 极限存在.

设 \(\lim_{n\to\infty}x_n=a\)，对 \(x_n=\sqrt{2+x_{n-1}}\) 两边取极限得 \(a=\sqrt{2+a}\),

解得 \(a=2\) 或 \(a=-1\). 由极限的保号性知 \(a\ge0\)，从而舍去 \(a=-1\).

故 \(\lim_{n\to\infty}x_n=2\).

**例73**　设 \(x_1>0,x_{n+1}=\frac{1}{2}\left(x_n+\frac{1}{x_n}\right),n=1,2,\cdots\)，求极限 \(\lim_{n\to\infty}x_n\).` },
      { p: 39, md: R`**【解】**　由题设知 \(x_n>0\)，且
\[
x_{n+1}=\frac{1}{2}\left(x_n+\frac{1}{x_n}\right)=\frac{1}{2}\left[(\sqrt{x_n})^2+\left(\frac{1}{\sqrt{x_n}}\right)^2\right]\ge\frac{1}{2}\cdot2\sqrt{x_n}\cdot\frac{1}{\sqrt{x_n}}=1
\]
\[
x_{n+1}-x_n=\frac{1}{2}\left(\frac{1}{x_n}-x_n\right)=\frac{1}{2}\cdot\frac{1-x_n^2}{x_n}\le0
\]
或
\[
\frac{x_{n+1}}{x_n}=\frac{1}{2}\left(1+\frac{1}{x_n^2}\right)\le\frac{1}{2}\left(1+\frac{1}{1}\right)=1.
\]
则数列 \(\{x_n\}\) 单调减且下有界，极限 \(\lim_{n\to\infty}x_n\) 存在，设 \(\lim_{n\to\infty}x_n=a\).

等式 \(x_{n+1}=\frac{1}{2}\left(x_n+\frac{1}{x_n}\right)\) 两端取极限得
\[
a=\frac{1}{2}\left(a+\frac{1}{a}\right)
\]
得 \(a^2=1\)，则 \(a=1,a=-1\)（舍去），故 \(\lim_{n\to\infty}x_n=1\).

**例74**　（1996，数一）设 \(x_1=10,x_{n+1}=\sqrt{6+x_n}(n=1,2,\cdots)\),

试证：数列 \(\{x_n\}\) 极限存在，并求此极限.

**【解】**　先证 \(\{x_n\}\) 单调递减，有界.

首先有：\(x_2=\sqrt{6+x_1}=4\)，则 \(x_2<x_1\).

假设 \(x_k<x_{k-1}\)，则 \(x_{k+1}=\sqrt{6+x_k}<\sqrt{6+x_{k-1}}=x_k\),

则对所有 \(n\)，有 \(x_{n+1}<x_n\)，则 \(\{x_n\}\) 单调递减.

又 \(0<x_n<x_1=10\)，则 \(\{x_n\}\) 有界.

则 \(\{x_n\}\) 单调有界，必有极限.

设 \(\lim_{n\to\infty}x_n=a\)，对 \(x_{n+1}=\sqrt{6+x_n}\) 两边求极限得 \(a=\sqrt{6+a}\),

解得 \(a=3\) 或 \(a=-2\)（舍去），所以 \(\lim_{n\to\infty}x_n=3\).

#### 7. 利用无穷小的性质求极限

**性质**　无穷小和有界量的乘积仍为无穷小.

**例75**　求极限 \(\lim_{x\to\infty}\frac{x^2-3x+5}{2x^3+4x^2+x-1}(5+\cos3x)\).

**【解】**　因 \(\lim_{x\to\infty}\frac{x^2-3x+5}{2x^3+4x^2+x-1}=0\) （无穷小），\(|5+\cos3x|\le6\) （有界）

所以，\(\lim_{x\to\infty}\frac{x^2-3x+5}{2x^3+4x^2+x-1}(5+\cos3x)=0\).

#### 8. 利用函数的连续性求极限

（1）若 \(f(x)\) 在 \(x=x_0\) 点连续，则 \(\lim_{x\to x_0}f(x)=f(x_0)\).

（2）若 \(f(x),\varphi(x)\) 为连续函数，则 \(\lim_{x\to x_0}f[\varphi(x)]=f[\lim_{x\to x_0}\varphi(x)]\).

（3）若 \(\lim f(x)=A>0,\lim g(x)=B\)，则
\[
\lim f(x)^{g(x)}=[\lim f(x)]^{\lim g(x)}=A^B.
\]` },
      { p: 40, md: R`**【注】**　利用（3）求极限时，一定要注意条件.

**例76**　\(\lim_{x\to0}\left[\frac{\lg(100+x)}{2^x+\arcsin x}\right]^{\frac{1}{2}}=\) ______.

**【解】**　因为 \(\lim_{x\to0}\left[\frac{\lg(100+x)}{2^x+\arcsin x}\right]^{\frac{1}{2}}\) 是初等函数，在 \(x=0\) 点连续，

所以，\(\lim_{x\to0}\left[\frac{\lg(100+x)}{2^x+\arcsin x}\right]^{\frac{1}{2}}=\left(\frac{\lg100}{2^0+\arcsin0}\right)^{\frac{1}{2}}=\sqrt{2}\).

**例77**　求极限 \(\lim_{x\to0}(1+3x)^{\frac{2}{\sin x}}\).

**【解】**　原式 \(=\lim_{x\to0}(1+3x)^{\frac{1}{3x}\cdot\frac{6x}{\sin x}}=\lim_{x\to0}\left[(1+3x)^{\frac{1}{3x}}\right]^{\frac{6x}{\sin x}}\)
\[
=\left[\lim_{x\to0}(1+3x)^{\frac{1}{3x}}\right]^{\lim_{x\to0}\frac{6x}{\sin x}}=e^6.
\]

#### 9. 利用泰勒公式求极限

**定理**（带佩亚诺余项的泰勒公式）　设 \(f(x)\) 在 \(x=x_0\) 处 \(n\) 阶可导，则
\[
f(x)=f(x_0)+f'(x_0)(x-x_0)+\frac{f''(x_0)}{2!}(x-x_0)^2+\cdots+\frac{f^{(n)}(x_0)}{n!}(x-x_0)^n+o((x-x_0)^n)
\]
特别是当 \(x_0=0\) 时，
\[
f(x)=f(0)+f'(0)x+\frac{f''(0)}{2!}x^2+\cdots+\frac{f^{(n)}(0)}{n!}x^n+o(x^n)
\]
几个常用的泰勒公式

（1）\(e^x=1+x+\frac{x^2}{2!}+\cdots+\frac{x^n}{n!}+o(x^n)\).

（2）\(\sin x=x-\frac{x^3}{3!}+\cdots+(-1)^{n-1}\frac{x^{2n-1}}{(2n-1)!}+o(x^{2n-1})\).

（3）\(\cos x=1-\frac{x^2}{2!}+\cdots+(-1)^n\frac{x^{2n}}{(2n)!}+o(x^{2n})\).

（4）\(\ln(1+x)=x-\frac{x^2}{2}+\cdots+(-1)^{n-1}\frac{x^n}{n}+o(x^n)\).

（5）\((1+x)^\alpha=1+\alpha x+\frac{\alpha(\alpha-1)}{2!}x^2+\cdots+\frac{\alpha(\alpha-1)\cdots(\alpha-n+1)}{n!}x^n+o(x^n)\).

**例78**　求极限 \(\lim_{x\to0}\frac{\cos x-e^{-\frac{x^2}{2}}}{x^4}\).

**【解】**　利用泰勒公式
\[
\cos x=1-\frac{1}{2}x^2+\frac{1}{24}x^4+o(x^4),
\]
\[
e^{-\frac{x^2}{2}}=1-\frac{1}{2}x^2+\frac{1}{8}x^4+o(x^4),
\]` },
    ],
    quiz: [{"q": "$\\lim_{n\\to\\infty}\\left(\\frac{n+1}{n}\\right)^{(-1)^n}=$", "options": ["$1$", "$e$", "$e^{-1}$", "不存在"], "answer": 0, "explain": "奇偶子列极限都为 1（或夹逼），故极限为 1。"}, {"q": "$\\lim_{x\\to0}\\left(\\frac{2+e^{1/x}}{1+e^{4/x}}+\\frac{\\sin x}{|x|}\\right)=$", "options": ["$1$", "$2$", "$0$", "不存在"], "answer": 0, "explain": "左、右极限均为 1，故极限为 1。"}, {"q": "$\\lim_{x\\to2}\\arctan\\frac{1}{x-2}$", "options": ["$0$", "$-\\frac{\\pi}{2}$", "$\\frac{\\pi}{2}$", "不存在"], "answer": 3, "explain": "左极限 $-\\frac{\\pi}{2}$，右极限 $\\frac{\\pi}{2}$，不相等。"}, {"q": "$\\lim_{x\\to0}\\frac{\\ln(\\cos x)}{x^2}=$", "options": ["$-\\frac12$", "$\\frac12$", "$-1$", "$0$"], "answer": 0, "explain": "$\\ln(\\cos x)\\sim\\cos x-1\\sim-\\frac{x^2}{2}$，故为 $-\\frac12$。"}, {"q": "$\\lim_{x\\to0}\\frac{\\arctan x-\\sin x}{x^3}=$", "options": ["$-\\frac16$", "$\\frac16$", "$-\\frac13$", "$0$"], "answer": 0, "explain": "$\\arctan x=x-\\frac{x^3}{3}+o(x^3)$，$\\sin x=x-\\frac{x^3}{6}+o(x^3)$，相减得 $-\\frac{x^3}{6}$。"}]
  };
})();
