window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["gs01_s2"] = {
    id: "gs01_s2",
    ch: "第一章 函数 极限 连续",
    title: "第三节 连续",
    book: "《高等数学辅导讲义》",
    pages: [40, 48],
    img: "assets/img/gaoshu",
    content: [
      { p: 40, md: R`## 第三节 连续
### 一、考试内容要点精讲
#### (一) 连续的概念
若 $\lim\limits_{x\to x_0}f(x)=f(x_0)$（或 $\lim\limits_{\Delta x\to0}\Delta y=0$），则称 $f(x)$ 在 $x_0$ 处连续。
左右连续概念：若 $\lim\limits_{x\to x_0^-}f(x)=f(x_0)$，则称 $f(x)$ 在 $x_0$ 处左连续。
若 $\lim\limits_{x\to x_0^+}f(x)=f(x_0)$，则称 $f(x)$ 在 $x_0$ 处右连续。
定理 $\quad f(x)$ 连续 $\Leftrightarrow f(x)$ 左连续且右连续
#### (二) 间断点及其类型
**1. 间断点的概念**
若 $f(x)$ 在 $x_0$ 某去心邻域有定义，但在 $x_0$ 处不连续，则称点 $x=x_0$ 为函数 $f(x)$ 的间断点。
**2. 间断点的分类**
我们根据左、右极限是否都存在把间断点分为以下两类
1) 第一类间断点：左、右极限均存在的间断点
可去间断点：左、右极限存在且相等的间断点；
跳跃间断点：左、右极限都存在但不相等的间断点。
2) 第二类间断点：左、右极限中至少有一个不存在的间断点
无穷间断点：左、右极限中至少有一个为无穷，如 $x=0$ 为 $f(x)=\frac{1}{x}$ 的无穷间断点；
振荡间断点：如 $x=0$ 为 $f(x)=\sin\frac{1}{x}$ 的振荡间断点。
#### (三) 连续函数的性质
1) 连续函数的和、差、积、商（分母不为零）及复合仍连续；
2) 基本初等函数在其定义域内连续；初等函数在其定义区间内连续；` },
      { p: 41, md: R`3) 闭区间上连续函数的性质
(1) 有界性：若 $f(x)$ 在 $[a,b]$ 上连续，则 $f(x)$ 在 $[a,b]$ 上有界。
(2) 最值性：若 $f(x)$ 在 $[a,b]$ 上连续，则 $f(x)$ 在 $[a,b]$ 上必有最大值和最小值。
(3) 介值性：若 $f(x)$ 在 $[a,b]$ 上连续，且 $f(a)\neq f(b)$，则对 $f(a)$ 与 $f(b)$ 之间任一数 $C$，至少存在一个 $\xi\in(a,b)$，使得 $f(\xi)=C$。
推论：若 $f(x)$ 在 $[a,b]$ 上连续，则 $f(x)$ 在 $[a,b]$ 可取到介于最小值 $m$ 与最大值 $M$ 之间的任何值。
(4) 零点定理：若 $f(x)$ 在 $[a,b]$ 连续，且 $f(a)\cdot f(b)<0$，则必 $\exists\xi\in(a,b)$，使 $f(\xi)=0$。
### 二、常考题型的方法与技巧
#### 题型一 讨论连续性及间断点类型
【例1】设函数 $f(x)=\frac{x}{a+e^{bx}}$ 在 $(-\infty,+\infty)$ 内连续，且 $\lim\limits_{x\to-\infty}f(x)=0$，则常数 $a,b$ 应满足
(A) $a<0,b<0$。 (B) $a>0,b>0$。 (C) $a\leq0,b>0$。 (D) $a\geq0,b<0$。
【解】由 $f(x)=\frac{x}{a+e^{bx}}$ 在 $(-\infty,+\infty)$ 连续知，$a+e^{bx}\neq0$。又由 $\lim\limits_{x\to-\infty}f(x)=0$ 知，$\lim\limits_{x\to-\infty}e^{bx}=+\infty$，则 $b<0$。再由 $a+e^{bx}\neq0$ 知，$a\geq0$，故应选 (D)。
【例2】设 $f(x)$ 和 $\varphi(x)$ 在 $(-\infty,+\infty)$ 上有定义，$f(x)$ 为连续函数，且 $f(x)\neq0$，$\varphi(x)$ 有间断点，则
(A) $\varphi[f(x)]$ 必有间断点。 (B) $[\varphi(x)]^2$ 必有间断点。
(C) $f[\varphi(x)]$ 必有间断点。 (D) $\frac{\varphi(x)}{f(x)}$ 必有间断点。
【解1】直接法
直接证明选项 (D) 正确，用反证法：
若 $\frac{\varphi(x)}{f(x)}$ 无间断点，由题设知 $\frac{\varphi(x)}{f(x)}$ 在 $(-\infty,+\infty)$ 有定义，则连续。
由 $f(x)$ 的连续知 $\varphi(x)=\frac{\varphi(x)}{f(x)}f(x)$ 必连续，这与 $\varphi(x)$ 有间断点矛盾，故应选 (D)。
【解2】排除法
设 $f(x)\equiv1$，$\varphi(x)=\begin{cases}1,&x\geq0\\-1,&x<0\end{cases}$，显然 $f(x),\varphi(x)$ 符合题设条件，而
$\varphi[f(x)]\equiv1$，$\varphi^2(x)\equiv1$，$f[\varphi(x)]\equiv1$
都处处连续，则 (A)、(B)、(C) 都不正确，故应选 (D)。
【例3】讨论函数 $f(x)=\frac{x\arctan\frac{1}{x-1}}{\sin\frac{\pi}{2}x}$ 的连续性并指出间断点类型。` },
      { p: 42, md: R`【解】由于 $f(x)=\frac{x\arctan\frac{1}{x-1}}{\sin\frac{\pi}{2}x}$ 为初等函数，则除 $x=1,x=2k\ (k=0,\pm1,\pm2\cdots)$ 外 $f(x)$ 处处连续。
当 $x=1$ 时，$f(1^-)=\lim\limits_{x\to1^-}\frac{x\arctan\frac{1}{x-1}}{\sin\frac{\pi}{2}x}=-\frac{\pi}{2}$，
$f(1^+)=\lim\limits_{x\to1^+}\frac{x\arctan\frac{1}{x-1}}{\sin\frac{\pi}{2}x}=\frac{\pi}{2}$，
则 $x=1$ 为跳跃间断点。
当 $x=0$ 时，$\lim\limits_{x\to0}\frac{x\arctan\frac{1}{x-1}}{\sin\frac{\pi}{2}x}=-\frac{\pi}{4}\lim\limits_{x\to0}\frac{x}{\frac{\pi}{2}x}=-\frac{1}{2}$，则 $x=0$ 为可去间断点。
当 $x=2k\ (k=\pm1,\pm2\cdots)$ 时，
$\lim\limits_{x\to2k}\frac{x\arctan\frac{1}{x-1}}{\sin\frac{\pi}{2}x}=\infty$，
则 $x=2k\ (k=\pm1,\pm2\cdots)$ 为无穷间断点。
【例4】求函数 $f(x)=\frac{\ln|x|}{|x-1|}\sin x$ 的间断点并指出其类型。
【解】显然 $x=0$ 和 $x=1$ 为 $f(x)$ 的间断点，其余点处都连续。
$\lim\limits_{x\to0}f(x)=\lim\limits_{x\to0}\frac{\ln|x|}{|x-1|}\sin x=\lim\limits_{x\to0}\frac{\ln|x|}{\frac{1}{|x|}}=\lim\limits_{x\to0}\frac{\frac{1}{x}}{-\frac{1}{x^2}}=0$，
则 $x=0$ 为可去间断点。
$\lim\limits_{x\to1}f(x)=\sin1\cdot\lim\limits_{x\to1}\frac{\ln|x|}{|x-1|}=\sin1\cdot\lim\limits_{x\to1}\frac{\ln x}{|x-1|}=\sin1\cdot\lim\limits_{x\to1}\frac{\ln[1+(x-1)]}{|x-1|}=\sin1\cdot\lim\limits_{x\to1}\frac{x-1}{|x-1|}$，
$\lim\limits_{x\to1^-}f(x)=\sin1$，$\lim\limits_{x\to1^+}f(x)=-\sin1$，
则 $x=1$ 为跳跃间断点。
【例5】求极限 $\lim\limits_{t\to x}\left(\frac{\sin t}{\sin x}\right)^{\frac{x}{\sin t-\sin x}}$，记此极限为 $f(x)$，求函数 $f(x)$ 的间断点并指出类型。
【解】$f(x)$ 的定义式知在 $x=k\pi,(k=0,\pm1,\pm2,\cdots)$ 处没有定义，当 $x\neq k\pi$ 时，
由于 $\left(\frac{\sin t}{\sin x}\right)^{\frac{x}{\sin t-\sin x}}=\left(1+\frac{\sin t-\sin x}{\sin x}\right)^{\frac{x}{\sin t-\sin x}}$，
而 $\quad\lim\limits_{t\to x}\frac{\sin t-\sin x}{\sin x}\cdot\frac{x}{\sin t-\sin x}=\frac{x}{\sin x}$，` },
      { p: 43, md: R`则 $f(x)=\lim\limits_{t\to x}\left(\frac{\sin t}{\sin x}\right)^{\frac{x}{\sin t-\sin x}}=e^{\frac{x}{\sin x}}$。显然 $x=0$，$x=k\pi\ (k=\pm1,\pm2\cdots)$ 为 $f(x)$ 所有的间断点。由于 $\lim\limits_{x\to0}f(x)=\lim\limits_{x\to0}e^{\frac{x}{\sin x}}=e$，则 $x=0$ 为可去间断点。而 $x=k\pi\ (k=\pm1,\pm2,\cdots)$ 时，$f(x)$ 的左、右极限总有一个是无穷，则都为第二类间断点。
【例6】求 $f(x)=\lim\limits_{n\to\infty}\frac{x^{n+2}-x^{-n}}{x^n+x^{-n}}$ 的间断点并指出其类型。
【解】由 $f(x)=\lim\limits_{n\to\infty}\frac{x^{n+2}-x^{-n}}{x^n+x^{-n}}$，可知 $f(0)$ 无意义。当 $x\neq0$ 时，$f(x)=\lim\limits_{n\to\infty}\frac{x^{2n+2}-1}{x^{2n}+1}=\begin{cases}-1,&0<|x|<1,\\x^2,&|x|>1,\\0,&|x|=1.\end{cases}$ 由于 $\lim\limits_{x\to0}f(x)=-1$，则 $x=0$ 为可去间断点。$f(1^-)=\lim\limits_{x\to1^-}f(x)=\lim\limits_{x\to1^-}(-1)=-1$，$f(1^+)=\lim\limits_{x\to1^+}f(x)=\lim\limits_{x\to1^+}x^2=1$，则 $x=1$ 为跳跃间断点。由于 $f(x)$ 是偶函数，则 $x=-1$ 也是跳跃间断点。
#### 题型二 介值定理、最值定理及零点定理的证明题
【例1】设 $f(x)$ 在 $(a,b)$ 内非负连续，且 $x_1,x_2,\cdots x_n\in(a,b)$，证明存在 $\xi\in(a,b)$ 使 $f(\xi)=\sqrt[n]{f(x_1)f(x_2)\cdots f(x_n)}$。
【证】令 $c=\min\limits_{1\leqslant i\leqslant n}x_i$，$d=\max\limits_{1\leqslant i\leqslant n}x_i$，则 $[c,d]\subset(a,b)$，且 $f(x)$ 在闭区间 $[c,d]$ 上连续。设 $f(x)$ 在 $[c,d]$ 上的最大值为 $M$，最小值为 $m$，则 $m=\sqrt[n]{m^n}\leqslant\sqrt[n]{f(x_1)f(x_2)\cdots f(x_n)}\leqslant\sqrt[n]{M^n}=M$。由介值定理知存在 $\xi\in[c,d]\subset(a,b)$，使 $f(\xi)=\sqrt[n]{f(x_1)f(x_2)\cdots f(x_n)}$。
【例2】设 $f(x)$ 在 $[0,1]$ 连续，非负且 $f(0)=f(1)=0$。求证：$\exists\xi\in[0,1]$，使 $f(\xi+l)=f(\xi)$，其中 $0<l<1$。
【证】令 $F(x)=f(x+l)-f(x)$，$x\in[0,1-l]$，则 $F(0)=f(l)-f(0)\geqslant0$，$F(1-l)=f(1)-f(1-l)\leqslant0$。若以上二式中至少有一个等号成立，原题结论显然成立。若以上二式中的等号都不成立，此时 $F(0)>0$，$F(1-l)<0$，则由零点定理知存在 $\xi\in(0,1-l)\subset(0,1)$，使 $F(\xi)=0$，即 $f(\xi+l)=f(\xi)$。
【例3】设 $f(x)$ 在 $[0,1]$ 连续，$f(0)=f(1)$。求证：$\exists\xi\in[0,1]$，使 $f(\xi+\frac{1}{4})=f(\xi)$。
【证】令 $F(x)=f(x+\frac{1}{4})-f(x)$，$x\in[0,\frac{3}{4}]$，本题只要证 $F(x)$ 在 $[0,\frac{3}{4}]$ 上有零点。` },
      { p: 44, md: R`由于 $F(0)=f(\frac{1}{4})-f(0)$，$F(\frac{1}{4})=f(\frac{1}{2})-f(\frac{1}{4})$，$F(\frac{1}{2})=f(\frac{3}{4})-f(\frac{1}{2})$，$F(\frac{3}{4})=f(1)-f(\frac{3}{4})$，
相加得 $F(0)+F(\frac{1}{4})+F(\frac{1}{2})+F(\frac{3}{4})=f(1)-f(0)=0.$
反证：若 $F(x)$ 在 $[0,\frac{3}{4}]$ 内无零点，则由连续性知 $F(x)$ 恒正或恒负。不妨设 $F(x)>0$，那么 $F(0)+F(\frac{1}{4})+F(\frac{1}{2})+F(\frac{3}{4})>0$，矛盾，故 $F(x)$ 在 $[0,\frac{3}{4}]$ 上必有零点。
即 $\exists\xi\in[0,1]$，使 $f(\xi+\frac{1}{4})=f(\xi)$。
【注】在本题条件下用同样的方法可证明一个更一般的结论对于任意正整数 $n(n\geqslant2)$，必存在 $x_n\in[0,1]$，使 $f(x_n)=f\left(x_n+\frac{1}{n}\right)$。
【例4】设 $f(x)$ 在 $(-\infty,+\infty)$ 上连续，且 $\lim\limits_{x\to\infty}\frac{f(x)}{x}=0$，试证存在 $\xi\in(-\infty,+\infty)$，使 $f(\xi)+\xi=0$。
【证】令 $F(x)=f(x)+x$，则 $\lim\limits_{x\to\infty}\frac{F(x)}{x}=\lim\limits_{x\to\infty}\left(\frac{f(x)}{x}+1\right)=1>0$。由极限的保号性知，存在 $X>0$，当 $|x|>X$ 时，$\frac{F(x)}{x}>0$。
取 $a>X$，则 $\frac{F(a)}{a}>0$，$\frac{F(-a)}{-a}>0$，从而有 $F(-a)<0$，$F(a)>0$。由零点定理知，存在 $\xi\in(-a,a)\subset(-\infty,+\infty)$，使 $F(\xi)=0$，即 $f(\xi)+\xi=0$。
### 四、练习题精选
1. 函数 $f(x)=x\tan xe^{\sin x}$ 是
(A) 单调函数。 (B) 周期函数。 (C) 偶函数。 (D) 无界函数。
2. 下列四个函数中
(1) $x\sin\frac{1}{x}$。 (2) $\frac{1}{x}\sin\frac{1}{x}$。 (3) $\frac{\sin x}{x}$。 (4) $x\sin x$。
在区间 $(0,+\infty)$ 上有界的共有
(A) 1个。 (B) 2个。 (C) 3个。 (D) 4个。
3. 设函数 $f(x)$ 连续，则下列函数中，必为偶函数的是
(A) $\int_0^x f(t^2)dt$。 (B) $\int_0^x f^2(t)dt$。 (C) $\int_0^x t[f(t)-f(-t)]dt$。 (D) $\int_0^x t[f(t)+f(-t)]dt$。
4. 设有数列 $\{x_n\}$ 与 $\{y_n\}$，以下结论正确的是
(A) 若 $\lim\limits_{n\to\infty}x_ny_n=0$，则必有 $\lim\limits_{n\to\infty}x_n=0$ 或 $\lim\limits_{n\to\infty}y_n=0$。` }
    ],
    problems: [
      { n: 1, q: R`函数 $f(x)=x\tan xe^{\sin x}$ 是
(A) 单调函数。 (B) 周期函数。 (C) 偶函数。 (D) 无界函数。`, a: R`(D)`, sol: R`【思路】逐条验证四个性质，重点看 $x\to\frac\pi2$ 附近 $\tan x$ 的行为。
【详解】$f(-x)=(-x)\tan(-x)e^{-\sin x}=x\tan x\,e^{-\sin x}\neq f(x)$，非偶函数（$x\tan x$ 虽为偶，但 $e^{\sin x}$ 不是偶）。含因子 $x$ 故非周期。当 $x\to\frac{\pi}{2}^-$ 时 $\tan x\to+\infty$，$e^{\sin x}\to e>0$，$f\to+\infty$，故无界。选 (D)。
【易错点】$x\tan x$ 是偶函数，容易误选 (C)，但乘上 $e^{\sin x}$ 后不再是偶函数。` },
      { n: 2, q: R`下列四个函数中
(1) $x\sin\frac{1}{x}$。 (2) $\frac{1}{x}\sin\frac{1}{x}$。 (3) $\frac{\sin x}{x}$。 (4) $x\sin x$。
在区间 $(0,+\infty)$ 上有界的共有
(A) 1个。 (B) 2个。 (C) 3个。 (D) 4个。`, a: R`(B)`, sol: R`【思路】逐个考察在 $x\to0^+$ 与 $x\to+\infty$ 两端是否有界。
【详解】(1) $|x\sin\frac1x|\le x\to0$（$x\to0$），又 $\to1$（$x\to\infty$），有界。
(2) $|\frac1x\sin\frac1x|\le\frac1x$ 但取 $x=\frac{1}{2k\pi+\pi/2}$ 时 $=\frac1x\to\infty$，无界。
(3) $|\frac{\sin x}{x}|\le1$，有界。
(4) 取 $x=2k\pi+\frac\pi2$，$|x\sin x|=x\to\infty$，无界。
故有界的是 (1)(3)，共 2 个，选 (B)。
【易错点】判断无界要找一列点使函数值趋于无穷，不能只看「大致趋势」。` },
      { n: 3, q: R`设函数 $f(x)$ 连续，则下列函数中，必为偶函数的是
(A) $\int_0^x f(t^2)dt$。 (B) $\int_0^x f^2(t)dt$。 (C) $\int_0^x t[f(t)-f(-t)]dt$。 (D) $\int_0^x t[f(t)+f(-t)]dt$。`, a: R`(D)`, sol: R`【思路】判断被积函数的奇偶性，再用「奇函数的变上限积分为偶、偶函数的变上限积分为奇」。
【详解】(A) $f(t^2)$ 为偶，$\int_0^x$ 为奇函数。
(B) $f^2(t)$ 为偶，$\int_0^x$ 为奇函数。
(C) $t[f(t)-f(-t)]$：$f(t)-f(-t)$ 为奇，$t$ 为奇，乘积为偶，$\int_0^x$ 为奇函数。
(D) $t[f(t)+f(-t)]$：$f(t)+f(-t)$ 为偶，$t$ 为奇，乘积为奇，$\int_0^x$ 为偶函数。选 (D)。
【易错点】记住结论：$\int_0^x$（被积偶）→奇；$\int_0^x$（被积奇）→偶。` },
      { n: 4, q: R`设有数列 $\{x_n\}$ 与 $\{y_n\}$，以下结论正确的是
(A) 若 $\lim\limits_{n\to\infty}x_ny_n=0$，则必有 $\lim\limits_{n\to\infty}x_n=0$ 或 $\lim\limits_{n\to\infty}y_n=0$。
(B) 若 $\lim\limits_{n\to\infty}x_ny_n=\infty$，则必有 $\lim\limits_{n\to\infty}x_n=\infty$ 或 $\lim\limits_{n\to\infty}y_n=\infty$。
(C) 若 $x_ny_n$ 有界，则必有 $x_n$ 与 $y_n$ 都有界。
(D) 若 $x_ny_n$ 无界，则必有 $x_n$ 无界或 $y_n$ 无界。`, a: R`(D)`, sol: R`【思路】乘法不能「分配」极限；用反例排除 (A)(B)(C)，(D) 用逆否命题证明。
【详解】(A) 反例：$x_n=0,1,0,1,\cdots$，$y_n=1,0,1,0,\cdots$，$x_ny_n\equiv0$ 但两者都不趋于 0。
(B) 反例：$x_n=n,1,n,1,\cdots$，$y_n=1,n,1,n,\cdots$，乘积趋于 $\infty$ 但两者都不趋于 $\infty$。
(C) 反例：$x_n=n$，$y_n=\frac1n$，$x_ny_n=1$ 有界但 $x_n$ 无界。
(D) 逆否：若 $x_n,y_n$ 都有界，则 $x_ny_n$ 有界，正确。选 (D)。
【易错点】(D) 是唯一恒成立的；证明它最好用逆否命题。` },
      { n: 5, q: R`设 $\lim\limits_{n\to\infty}x_ny_n=\infty$，则下列结论错误的是
(A) $\lim\limits_{n\to\infty}x_n=\infty$ 与 $\lim\limits_{n\to\infty}y_n=\infty$ 至少有一个成立。
(B) $\{x_n\}$ 与 $\{y_n\}$ 中至少有一个为无界变量。
(C) 若 $\{x_n\}$ 是无穷小量，则 $\{y_n\}$ 必为无界变量。
(D) 若 $\lim\limits_{n\to\infty}x_n=a\neq\infty$，则 $\{y_n\}$ 必为无穷大量。`, a: R`(A)`, sol: R`【思路】「乘积趋于无穷」并不要求某一个因子趋于无穷，只要二者都无界即可。
【详解】(A) 错：取 $x_n=n,1,n,1,\cdots$，$y_n=1,n,1,n,\cdots$，$x_ny_n\to\infty$，但 $x_n,y_n$ 都不趋于 $\infty$。
(B) 对：若两者都有界，乘积有界，矛盾。
(C) 对：$x_n\to0$ 且乘积无界，只能 $y_n$ 无界。
(D) 对：$x_n\to a$（有限），若 $y_n$ 不趋于 $\infty$，则乘积不可能趋于 $\infty$。选 (A)。
【易错点】本题选「错误」的选项；(A) 是最容易想当然的一项。` },
      { n: 6, q: R`设数列 $\{a_n\},\{b_n\}$ 对任意的正整数 $n$ 满足 $a_n\leqslant b_n\leqslant a_{n+1}$，则
(A) 数列 $\{a_n\},\{b_n\}$ 均收敛，且 $\lim\limits_{n\to\infty}a_n=\lim\limits_{n\to\infty}b_n$。
(B) 数列 $\{a_n\},\{b_n\}$ 均发散，且 $\lim\limits_{n\to\infty}a_n=\lim\limits_{n\to\infty}b_n=+\infty$。
(C) 数列 $\{a_n\},\{b_n\}$ 具有相同的敛散性。
(D) 数列 $\{a_n\},\{b_n\}$ 具有不同的敛散性。`, a: R`(C)`, sol: R`【思路】由夹逼关系知 $\{a_n\}$ 单调增，$\{b_n\}$ 被 $a_n,a_{n+1}$ 夹住。
【详解】由 $a_n\le b_n\le a_{n+1}$ 得 $a_n\le a_{n+1}$，即 $\{a_n\}$ 单调增。且 $a_n\le b_n\le a_{n+1}$。
若 $\{a_n\}$ 收敛于 $A$，则 $b_n$ 被 $a_n,a_{n+1}$ 夹逼也收敛于 $A$；若 $a_n\to+\infty$，则 $b_n\to+\infty$。故两者同敛散，选 (C)。
【易错点】$a_n\le b_n\le a_{n+1}$ 中「$b_n$ 的上界是 $a_{n+1}$」，正是它能被夹逼的原因。` },
      { n: 7, q: R`设 $\lim\limits_{x\to0}\varphi(x)=0$，则下列命题
(1) $\lim\limits_{x\to0}\frac{\sin\varphi(x)}{\varphi(x)}=1$
(2) $\lim\limits_{x\to0}(1+\varphi(x))^{\frac{1}{\varphi(x)}}=e$
(3) 若 $f'(x_0)=A$，则 $\lim\limits_{x\to0}\frac{f(x_0+\varphi(x))-f(x_0)}{\varphi(x)}=A$
(4) 若 $\lim\limits_{u\to0}f(u)=A$，则 $\lim\limits_{x\to0}f[\varphi(x)]=A$
中正确的个数为
(A) 0个。 (B) 2个。 (C) 3个。 (D) 4个。`, a: R`(A)`, sol: R`【思路】这四个命题都要求 $\varphi(x)$ 在去心邻域内不取零（或不为 0），否则会失效。
【详解】设 $\varphi(x)\equiv0$：(1) 中分母为 0，无意义；(2) 无意义；(3) 无意义。若 $\varphi$ 在 $x\to0$ 的过程中取到 0（例如 $\varphi(x)=x\sin\frac1x$ 在 $\frac1{n\pi}$ 处为 0），则 (1)(2)(3) 的极限都可能不存在或不为所给值。(4) 也需 $f$ 在 $\varphi$ 的取值上连续；若 $\varphi$ 取到 0 且 $f(0)\neq A$，则 (4) 也错。故四个都可能不成立，正确的个数为 0，选 (A)。
【易错点】复合函数极限、等价无穷小、导数定义都要附加「$\varphi(x)\neq0$」的条件，这是常考陷阱。` },
      { n: 8, q: R`极限 $\lim\limits_{x\to\infty}\frac{e^{\sin\frac{1}{x}}-1}{\left(1+\frac{1}{x}\right)^\alpha-\left(1+\frac{1}{x}\right)}=A\neq0$ 的充要条件是
(A) $\alpha>1$。 (B) $\alpha\neq1$。 (C) $\alpha>0$。 (D) 与 $\alpha$ 无关。`, a: R`(B)`, sol: R`【思路】令 $t=\frac1x\to0$，用等价无穷小。
【详解】分子 $e^{\sin t}-1\sim\sin t\sim t$。分母 $(1+t)^\alpha-(1+t)=(1+t)[(1+t)^{\alpha-1}-1]\sim(\alpha-1)t$（当 $\alpha\neq1$）。故
$$\frac{\text{分子}}{\text{分母}}\to\frac{t}{(\alpha-1)t}=\frac{1}{\alpha-1}\neq0\iff\alpha\neq1.$$
若 $\alpha=1$，分母恒为 0，极限不存在。选 (B)。
【易错点】$\alpha=1$ 时分母为零，要单独排除。` },
      { n: 9, q: R`已知 $\lim\limits_{x\to0}\frac{\ln(1+2x)+xf(x)}{x^2}=1$，则 $\lim\limits_{x\to0}\frac{2+f(x)}{x}=$
(A) 1。 (B) 2。 (C) 3。 (D) 4。`, a: R`(C)`, sol: R`【思路】由条件把 $xf(x)$ 解出来（精确到 $o(x^2)$），再求所需极限。
【详解】由条件 $\ln(1+2x)+xf(x)=x^2+o(x^2)$。又 $\ln(1+2x)=2x-2x^2+o(x^2)$，故
$$xf(x)=x^2+o(x^2)-2x+2x^2+o(x^2)=-2x+3x^2+o(x^2),$$
$$f(x)=-2+3x+o(x).$$
于是 $\frac{2+f(x)}{x}=\frac{3x+o(x)}{x}\to3$，选 (C)。
【易错点】展开 $\ln(1+2x)$ 要到 $x^2$ 项；$f(x)$ 的常数项 $-2$ 与前面的 $2$ 恰好抵消。` },
      { n: 10, q: R`设 $f(x)$ 连续，$\lim\limits_{x\to0}\frac{f(x)}{1-\cos x}=2$，且当 $x\to0$ 时 $\int_0^{\sin^2x}f(t)dt$ 是 $x$ 的 $n$ 阶无穷小，则 $n$ 等于
(A) 3。 (B) 4。 (C) 5。 (D) 6。`, a: R`(D)`, sol: R`【思路】先由条件得 $f(x)\sim x^2$，再用变上限积分的等价无穷小。
【详解】由 $\lim\frac{f(x)}{1-\cos x}=2$ 及 $1-\cos x\sim\frac{x^2}{2}$ 得 $f(x)\sim x^2$（且 $f(0)=0$）。
于是 $\int_0^u f(t)dt\sim\int_0^u t^2dt=\frac{u^3}{3}$。取 $u=\sin^2x\sim x^2$，得
$$\int_0^{\sin^2x}f(t)dt\sim\frac{(x^2)^3}{3}=\frac{x^6}{3},$$
故 $n=6$，选 (D)。
【易错点】先求 $f$ 的阶（$x^2$），积分后阶数加 1 得 $u^3$，再代入 $u\sim x^2$ 得 $x^6$。` },
      { n: 11, q: R`已知当 $x\to0$ 时，$f(x)=\arctan x-\sin ax$ 与 $g(x)=bx\ln\sqrt{a+x^2}$ 是等价无穷小，则
(A) $a=b=1$。 (B) $a=2,b=\frac{1}{3}$。 (C) $a=1,b=\frac{1}{2}$。 (D) $a=1,b=-\frac{1}{3}$。`, a: R`(D)`, sol: R`【思路】两者等价，阶数必须相同。若 $a\neq1$，$f\sim(1-a)x$ 为一阶，而 $g\sim\frac b2x\ln a$ 也是一阶；若 $a=1$，$f$ 升为三阶。
【详解】$g=bx\cdot\frac12\ln(a+x^2)\sim\frac b2x\ln a$。
若 $a=1$：$f=\arctan x-\sin x=\left(x-\frac{x^3}{3}\right)-\left(x-\frac{x^3}{6}\right)+o(x^3)=-\frac{x^3}{6}+o(x^3)$，$g\sim\frac b2x\cdot x^2=\frac b2x^3$。等价要求 $-\frac16=\frac b2$，$b=-\frac13$。
若 $a\neq1$，则 $f\sim(1-a)x$、$g\sim\frac b2(\ln a)x$，也可等价，但选项中对应的是 $a=1$ 的情形。选 (D)。
【易错点】$a=1$ 是「降阶」的关键，否则 $f$ 只到一阶；$\ln\sqrt{a+x^2}\sim\frac12 x^2\ln a$（$a=1$ 时为 $\frac{x^2}{2}$）。` },
      { n: 12, q: R`已知当 $x\to0$ 时，函数 $f(x)=3\sin x-\sin3x$ 与 $cx^k$ 是等价无穷小，则
(A) $k=1,c=4$。 (B) $k=1,c=-4$。 (C) $k=3,c=4$。 (D) $k=3,c=-4$。`, a: R`(C)`, sol: R`【思路】用三倍角公式化简。
【详解】$\sin3x=3\sin x-4\sin^3x$，故
$$f(x)=3\sin x-(3\sin x-4\sin^3x)=4\sin^3x\sim4x^3.$$
所以 $k=3,c=4$，选 (C)。
【易错点】记住 $\sin3x=3\sin x-4\sin^3x$，可避免繁琐展开。` },
      { n: 13, q: R`当 $x\to0^+$ 时，下列无穷小量中最高阶的无穷小量是
(A) $\sqrt{1+x^4}-e^{\frac{x^2}{2}}$。 (B) $\tan x-\sin x$。 (C) $\int_0^{\sin x}\sin t^2dt$。 (D) $\int_0^{1-\cos x}\sin^{\frac{3}{2}}tdt$。`, a: R`(D)`, sol: R`【思路】分别估计每个无穷小的阶，取最高者。
【详解】(A) $\sqrt{1+x^4}-e^{x^2/2}=\left(1+\frac{x^4}{2}\right)-\left(1+\frac{x^2}{2}+\frac{x^4}{8}\right)+o(x^4)=-\frac{x^2}{2}+o(x^2)$，二阶。
(B) $\tan x-\sin x=\sin x\left(\frac{1}{\cos x}-1\right)\sim x\cdot\frac{x^2}{2}=\frac{x^3}{2}$，三阶。
(C) $\int_0^{\sin x}\sin t^2dt\sim\int_0^{\sin x}t^2dt=\frac{\sin^3x}{3}\sim\frac{x^3}{3}$，三阶。
(D) $\int_0^{1-\cos x}\sin^{3/2}tdt\sim\int_0^{1-\cos x}t^{3/2}dt=\frac25(1-\cos x)^{5/2}\sim\frac25\left(\frac{x^2}{2}\right)^{5/2}=Cx^5$，五阶。
故 (D) 阶最高，选 (D)。
【易错点】$\sin^{3/2}t\sim t^{3/2}$，积分后阶数加 1 得 $(1-\cos x)^{5/2}\sim x^5$。` },
      { n: 14, q: R`函数 $f(x)=\frac{(e^{\frac{1}{x}}+e)\tan x}{x(e^{\frac{1}{x}}-e)}$ 在 $[-\pi,\pi]$ 上的第一类间断点是 $x=$
(A) 0。 (B) 1。 (C) $-\frac{\pi}{2}$。 (D) $\frac{\pi}{2}$。`, a: R`(A)`, sol: R`【思路】第一类间断点指左右极限都存在的间断点；先找无定义点 $x=0,\pm\frac\pi2$。
【详解】在 $x=0$ 处：$x\to0^+$ 时 $e^{1/x}\to+\infty$，
$$f\to\frac{e^{1/x}\tan x}{x\,e^{1/x}}=\frac{\tan x}{x}\to1;$$
$x\to0^-$ 时 $e^{1/x}\to0$，
$$f\to\frac{e\tan x}{x(-e)}=-\frac{\tan x}{x}\to-1.$$
左右极限都存在但不相等，$x=0$ 是第一类（跳跃）间断点。
在 $x=\pm\frac\pi2$ 处 $\tan x\to\infty$，为第二类（无穷）间断点。选 (A)。
【易错点】$e^{1/x}$ 在 $x\to0^\pm$ 行为相反，是分左右极限的关键。` },
      { n: 15, q: R`函数 $f(x)=\frac{x^2-x}{x^2-1}\sqrt{1+\frac{1}{x^2}}$ 的无穷间断点的个数为
(A) 0。 (B) 1。 (C) 2。 (D) 3。`, a: R`(B)`, sol: R`【思路】先约分、化简，再逐个检查无定义点 $x=0,\pm1$。
【详解】$\frac{x^2-x}{x^2-1}=\frac{x(x-1)}{(x-1)(x+1)}=\frac{x}{x+1}$（$x\neq1$），且 $\sqrt{1+\frac1{x^2}}=\frac{\sqrt{x^2+1}}{|x|}$，故
$$f(x)=\frac{x}{x+1}\cdot\frac{\sqrt{x^2+1}}{|x|}\ (x\neq0,\pm1).$$
$x=1$：可去（极限 $\frac12\cdot\sqrt2=\frac{\sqrt2}{2}$）。
$x=0$：$x\to0^+$ 时 $\frac{x}{1}\cdot\frac{1}{x}=1$；$x\to0^-$ 时 $\frac{x}{1}\cdot\frac{1}{-x}=-1$，为跳跃。
$x=-1$：$\frac{x}{x+1}\to\infty$，为无穷间断点。
故无穷间断点只有 1 个，选 (B)。
【易错点】先约分再判断；$x=0$ 处因 $\frac1{|x|}$ 与 $\frac{x}{x+1}$ 相乘后极限有限，不是无穷间断点。` },
      { n: 16, q: R`函数 $f(x)=\frac{|x|^x-1}{x(x+1)\ln|x|}$ 的可去间断点的个数为
(A) 0。 (B) 1。 (C) 2。 (D) 3。`, a: R`(C)`, sol: R`【思路】候选点为 $x=0,\pm1$（分母为零处）；逐个求极限判断。
【详解】记 $|x|^x=e^{x\ln|x|}$。
$x=1$：$x\to1$ 时 $|x|^x-1\sim x\ln x\sim x-1$，$\ln|x|\sim x-1$，分母 $\approx x(x+1)(x-1)\sim2(x-1)$，故 $f\to\frac12$，可去。
$x=0$：$x\ln|x|\to0$ 故 $|x|^x\to1$，$|x|^x-1\sim x\ln|x|$，分母 $\sim x\cdot1\cdot\ln|x|=x\ln|x|$，故 $f\to1$，可去。
$x=-1$：令 $x=-1+t$，$|x|^x-1\sim t$，分母 $\approx(-1)(t)(-t)=t^2$，故 $f\sim\frac1t\to\infty$，无穷。
可去间断点有 $x=1$ 和 $x=0$，共 2 个，选 (C)。
【易错点】$x\to0$ 时 $|x|^x\to1$、$|x|^x-1\sim x\ln|x|$，与分母同阶。` },
      { n: 17, q: R`已知函数 $f(x)=\frac{(x^2+a^2)(x-1)}{e^{\frac{1}{x}}+b}$ 在 $(-\infty,+\infty)$ 上有一个可去间断点和一个跳跃间断点，则
(A) $a=1,b=-1$。 (B) $a=0,b=1$。 (C) $a\neq0,b=-e$。 (D) $a=e,b=-1$。`, a: R`(C)`, sol: R`【思路】间断点只可能来自 $x=0$（$e^{1/x}$ 的跳跃）与 $x=1$（分子为零）；分别要求一个可去、一个跳跃。
【详解】$x=0$：$x\to0^+$ 时 $e^{1/x}\to\infty$，$f\to0$；$x\to0^-$ 时 $e^{1/x}\to0$，$f\to\frac{a^2(-1)}{1+b}=-\frac{a^2}{1+b}$。
$x=1$：分子为 0；若分母 $e+b=0$ 即 $b=-e$，则 $x=1$ 为 $0/0$ 型，是**可去**间断点；否则 $f(1)=0$ 连续。
题目要求「一个可去 + 一个跳跃」：取 $b=-e$ 使 $x=1$ 可去，此时 $x=0$ 处 $-\frac{a^2}{1-e}\neq0$（需 $a\neq0$）为跳跃。故选 (C)。
【易错点】$x=1$ 成为间断点需 $e+b=0$；$x=0$ 处左右极限不等即为跳跃。` },
      { n: 18, q: R`设 $f(x)=\lim\limits_{n\to\infty}\frac{2e^{(n+1)x}+1}{e^{nx}+x^{2n}+1}$，则 $f(x)$
(A) 仅有一个可去间断点。 (B) 仅有一个跳跃间断点。 (C) 有两个可去间断点。 (D) 有两个跳跃间断点。`, a: R`(D)`, sol: R`【思路】按 $x$ 的取值讨论 $e^{nx}$ 与 $x^{2n}$ 的极限，求出 $f$ 的分段表达式，再找间断点。
【详解】
$x>0$：$e^{nx}\to\infty$，$f\to2e^x$；
$x=0$：$f=\frac{2+1}{1+0+1}=\frac32$；
$-1<x<0$：$e^{nx}\to0,\ x^{2n}\to0$，$f\to1$；
$x=-1$：$e^{-n}\to0,\ x^{2n}=1$，$f\to\frac12$；
$x<-1$：$e^{nx}\to0,\ x^{2n}\to\infty$，$f\to0$。
即 $f(x)=\begin{cases}2e^x,&x>0\\\frac32,&x=0\\1,&-1<x<0\\\frac12,&x=-1\\0,&x<-1.\end{cases}$
在 $x=0$ 处：左极限 $1$，右极限 $2$，跳跃；在 $x=-1$ 处：左极限 $0$，右极限 $1$，跳跃。共两个跳跃间断点，选 (D)。
【易错点】分界点 $x=0$ 与 $x=-1$ 都要单独求极限；注意 $x^{2n}$ 在 $|x|=1$ 时为 1。` },
      { n: 19, q: R`$\lim\limits_{x\to0}\frac{x-\arcsin x}{(\arcsin x)^3}=$______。`, a: R`$-\frac{1}{6}$`, sol: R`【思路】令 $u=\arcsin x$（$u\to0$），化为 $\frac{\sin u-u}{u^3}$。
【详解】令 $u=\arcsin x$，则 $x=\sin u$，
$$\frac{x-\arcsin x}{(\arcsin x)^3}=\frac{\sin u-u}{u^3}.$$
由 $\sin u=u-\frac{u^3}{6}+o(u^3)$ 得 $\frac{\sin u-u}{u^3}=-\frac16+o(1)\to-\frac16$。
【易错点】$x-\arcsin x=\sin u-u$（注意符号：$x=\sin u$，所以 $x-\arcsin x=\sin u-u$）。` },
      { n: 20, q: R`已知 $\lim\limits_{x\to0}\frac{\alpha x^\alpha}{\sqrt{1+x\arctan x}-\sqrt{\cos x}}=\frac{8}{3}$，则 $\alpha=$______。`, a: R`$2$`, sol: R`【思路】先化分母的等价无穷小（阶为 $x^2$），再比较分子分母的阶。
【详解】$\sqrt{1+x\arctan x}\approx\sqrt{1+x^2}\approx1+\frac{x^2}{2}$，$\sqrt{\cos x}\approx\sqrt{1-\frac{x^2}{2}}\approx1-\frac{x^2}{4}$，故分母 $\sim\frac{3x^2}{4}$。
于是 $\frac{\alpha x^\alpha}{\frac34x^2}=\frac{4\alpha}{3}x^{\alpha-2}\to\frac83$，需 $\alpha=2$，此时 $\frac{4\cdot2}{3}=\frac83$ ✓。
【易错点】分母两项分别展开到 $x^2$ 项；$\alpha$ 同时出现在系数与指数中，代入 $\alpha=2$ 验证。` },
      { n: 21, q: R`已知曲线 $y=f(x)$ 在点 $(0,0)$ 处的切线过点 $(1,2)$，则 $\lim\limits_{x\to0}\left(\cos x+\int_0^x f(t)dt\right)^{\frac{1}{x^2}}=$______。`, a: R`$e^{\frac{1}{2}}$`, sol: R`【思路】由切线条件得 $f(0)=0,\ f'(0)=2$；再用 $1^\infty$ 型极限（取对数）。
【详解】曲线过 $(0,0)$ 故 $f(0)=0$；切线过 $(1,2)$ 故斜率 $f'(0)=\frac{2-0}{1-0}=2$。
$\int_0^xf(t)dt=f(0)x+\frac{f'(0)}{2}x^2+\cdots=x^2+o(x^2)$，$\cos x=1-\frac{x^2}{2}+o(x^2)$，故
$$\cos x+\int_0^xf(t)dt=1+\frac{x^2}{2}+o(x^2).$$
取对数：$\frac{1}{x^2}\ln\left(1+\frac{x^2}{2}+o(x^2)\right)\to\frac12$，故原极限 $=e^{1/2}$。
【易错点】$f(0)=0$ 使线性项消失；$\int_0^xf=\frac{f'(0)}{2}x^2+\cdots=x^2$。` },
      { n: 22, q: R`极限 $\lim\limits_{x\to0}\left[\frac{1}{\ln(x+\sqrt{1+x^2})}-\frac{1}{\ln(1+x)}\right]=$______。`, a: R`$-\frac{1}{2}$`, sol: R`【思路】通分，分子是两个对数函数之差，分母为两者之积。
【详解】记 $u=\ln(x+\sqrt{1+x^2})=x-\frac{x^3}{6}+o(x^3)$，$v=\ln(1+x)=x-\frac{x^2}{2}+\frac{x^3}{3}+o(x^3)$。则
$$\frac1u-\frac1v=\frac{v-u}{uv},\quad uv\sim x^2,\quad v-u=\left(-\frac{x^2}{2}\right)-\left(-\frac{x^3}{6}\right)+\cdots=-\frac{x^2}{2}+o(x^2).$$
故极限 $=\frac{-x^2/2}{x^2}\to-\frac12$。
【易错点】$u=\ln(x+\sqrt{1+x^2})$ 是反双曲正弦，展开为 $x-\frac{x^3}{6}+\cdots$（无 $x^2$ 项）。` },
      { n: 23, q: R`设 $n$ 为正整数，则 $\lim\limits_{x\to\infty}\left[\frac{x^n}{(x-1)(x-2)\cdots(x-n)}\right]^x=$______。`, a: R`$e^{\frac{n(n+1)}{2}}$`, sol: R`【思路】取对数，用 $\ln(x-k)=\ln x+\ln(1-k/x)$ 展开。
【详解】记 $L$ 为所求。则
$$\ln L=x\left[n\ln x-\sum_{k=1}^n\ln(x-k)\right]=x\sum_{k=1}^n\left[\ln x-\ln(x-k)\right].$$
由 $\ln(x-k)=\ln x-\frac{k}{x}-\frac{k^2}{2x^2}+o(x^{-2})$，得 $\ln x-\ln(x-k)=\frac{k}{x}+\frac{k^2}{2x^2}+o(x^{-2})$。故
$$\ln L=x\left(\frac{\sum k}{x}+\frac{\sum k^2}{2x^2}+\cdots\right)\to\sum_{k=1}^nk=\frac{n(n+1)}{2}.$$
所以 $L=e^{n(n+1)/2}$。
【易错点】展开要保留到 $1/x$ 项；$\sum_{k=1}^nk=\frac{n(n+1)}{2}$。` },
      { n: 24, q: R`求极限 $\lim\limits_{x\to0}\left(\frac{\ln(x+\sqrt{1+x^2})}{x}\right)^{\frac{1}{x^2}}=$______。`, a: R`$e^{-\frac{1}{6}}$`, sol: R`【思路】$1^\infty$ 型，取对数后用 $\ln(x+\sqrt{1+x^2})=x-\frac{x^3}{6}+o(x^3)$。
【详解】设 $u=\frac{\ln(x+\sqrt{1+x^2})}{x}=\frac{x-\frac{x^3}{6}+o(x^3)}{x}=1-\frac{x^2}{6}+o(x^2)$。则
$$\frac{1}{x^2}\ln u=\frac{\ln\left(1-\frac{x^2}{6}+o(x^2)\right)}{x^2}\to-\frac16.$$
故原极限 $=e^{-1/6}$。
【易错点】先求出底数的展开 $1-\frac{x^2}{6}+\cdots$，再套 $\ln(1+t)\sim t$。` },
      { n: 25, q: R`设 $x_n=\left(1+\frac{1}{n^2}\right)\left(1+\frac{2}{n^2}\right)\cdots\left(1+\frac{n}{n^2}\right)$，则 $\lim\limits_{n\to\infty}x_n=$______。`, a: R`$e^{\frac{1}{2}}$`, sol: R`【思路】取对数，用 $\ln(1+t)\sim t$ 把连乘化为求和。
【详解】$\ln x_n=\sum_{k=1}^n\ln\left(1+\frac{k}{n^2}\right)\sim\sum_{k=1}^n\frac{k}{n^2}=\frac{1}{n^2}\cdot\frac{n(n+1)}{2}=\frac{n+1}{2n}\to\frac12$。
故 $\lim x_n=e^{1/2}$。
【易错点】$\sum_{k=1}^nk=\frac{n(n+1)}{2}$；$\ln(1+\frac{k}{n^2})\sim\frac{k}{n^2}$（因为 $\frac{k}{n^2}\le\frac1n\to0$）。` },
      { n: 26, q: R`极限 $\lim\limits_{n\to\infty}\frac{\sqrt{1}+\sqrt{2}+\cdots+\sqrt{n}}{\sqrt{n(1+2+\cdots+n)}}=$______。`, a: R`$\frac{2\sqrt{2}}{3}$`, sol: R`【思路】分子分母分别用等价量：分子 $\sim\frac23n^{3/2}$，分母 $\sqrt{n\cdot\frac{n(n+1)}{2}}\sim\frac{n^{3/2}}{\sqrt2}$。
【详解】$\sum_{k=1}^n\sqrt k\sim\frac23n^{3/2}$，$1+2+\cdots+n=\frac{n(n+1)}{2}\sim\frac{n^2}{2}$，故
$$\text{分母}=\sqrt{n\cdot\frac{n(n+1)}{2}}\sim\frac{n^{3/2}}{\sqrt2}.$$
所以原极限 $=\frac{\frac23n^{3/2}}{\frac{n^{3/2}}{\sqrt2}}=\frac{2\sqrt2}{3}$。
【易错点】分母的根号覆盖 $n(1+2+\cdots+n)$ 整体，不要拆成 $\sqrt n\cdot(1+\cdots+n)$。` },
      { n: 27, q: R`确定常数 $a,b$，使 $x\to0$ 时 $f(x)=e^x-\frac{1+ax}{1+bx}$ 为 $x$ 的三阶无穷小。`, a: R`$a=\frac{1}{2},b=-\frac{1}{2}$`, sol: R`【思路】把 $f$ 展开到 $x^3$，令 $x^0,x^1,x^2$ 的系数为零。
【详解】$\frac{1+ax}{1+bx}=(1+ax)(1-bx+b^2x^2-b^3x^3+\cdots)=1+(a-b)x+(b^2-ab)x^2+(ab^2-b^3)x^3+\cdots$。
$e^x=1+x+\frac{x^2}{2}+\frac{x^3}{6}+\cdots$。故
$$f=\left[1-(a-b)\right]x+\left[\frac12-(b^2-ab)\right]x^2+\left[\frac16-(ab^2-b^3)\right]x^3+\cdots.$$
令一次项、二次项系数为零：$a-b=1$，$b^2-ab=\frac12$。由第二式 $b(b-a)=\frac12$，即 $-b(a-b)=\frac12$，得 $b=-\frac12$，$a=b+1=\frac12$。
【易错点】「三阶无穷小」指 $f\sim cx^3$，需 $x,x^2$ 项系数均为零（常数项已为零）。` },
      { n: 28, q: R`当 $x\to0$ 时，$1-\cos x\cdot\cos2x\cdot\cos3x$ 与 $ax^n$ 为等价无穷小，求 $n$ 与 $a$ 的值。`, a: R`$n=2,a=7$`, sol: R`【思路】三个余弦相乘，各自展开到 $x^2$ 项。
【详解】$\cos x\approx1-\frac{x^2}{2}$，$\cos2x\approx1-2x^2$，$\cos3x\approx1-\frac{9x^2}{2}$，故
$$\cos x\cos2x\cos3x\approx1-\left(\frac12+2+\frac92\right)x^2=1-7x^2.$$
于是 $1-\cos x\cos2x\cos3x\approx7x^2$，即 $n=2,a=7$。
【易错点】三个括号相乘只保留到 $x^2$ 项；系数之和 $\frac12+2+\frac92=7$。` },
      { n: 29, q: R`已知 $\lim\limits_{x\to0}\frac{(1+\sin2x^2)^{\frac{1}{x^2}}-e^2}{x^n}=a\ (a\neq0)$，求 $a$ 和 $n$ 的值。`, a: R`$n=2,a=-2e^2$`, sol: R`【思路】把底数写成 $e$ 的指数，展开到 $x^2$ 项，与 $e^2$ 相减。
【详解】$\ln(1+\sin2x^2)=\sin2x^2-\frac{\sin^2 2x^2}{2}+\cdots=2x^2-2x^4+\cdots$，故
$$(1+\sin2x^2)^{1/x^2}=e^{\frac{\ln(1+\sin2x^2)}{x^2}}=e^{2-2x^2+\cdots}=e^2\left(1-2x^2+\cdots\right).$$
所以分子 $=e^2-2e^2x^2+\cdots-e^2=-2e^2x^2+o(x^2)$，故 $n=2$，$a=-2e^2$。
【易错点】指数 $\frac{\ln(1+\sin2x^2)}{x^2}=2-2x^2+\cdots$，展开到 $x^2$ 项；提取 $e^2$ 后再比较。` },
      { n: 30, q: R`确定常数 $a,b,c$ 的值，使 $\lim\limits_{x\to0}\frac{ax-\sin x}{\int_b^x\frac{\ln(1+t^3)}{t}dt}=c\ (c\neq0)$。`, a: R`$a=1,b=0,c=\frac{1}{2}$`, sol: R`【思路】分母要趋于零，故 $b=0$；再用等价无穷小比较分子分母的阶。
【详解】分母 $\int_b^x\frac{\ln(1+t^3)}{t}dt$。若 $b\neq0$，则 $x\to0$ 时分母 $\to\int_b^0\cdots\neq0$（一般），而分子 $\to0$，极限为 0，与 $c\neq0$ 矛盾。故 $b=0$。
此时分母 $\sim\int_0^x t^2dt=\frac{x^3}{3}$。分子 $ax-\sin x=(a-1)x+\frac{x^3}{6}+o(x^3)$。若 $a\neq1$，分子 $\sim(a-1)x$，比值 $\to\infty$。故 $a=1$，分子 $\sim\frac{x^3}{6}$，比值 $\to\frac{1/6}{1/3}=\frac12$，即 $c=\frac12$。
【易错点】先由「分母必须趋于零」定出 $b=0$；再由分子必须也降阶到 $x^3$ 定出 $a=1$。` },
      { n: 31, q: R`求极限 $\lim\limits_{x\to0}\left(\frac{1}{\ln(1+x^2)}-\frac{1}{\sin^2x}\right)$。`, a: R`$\frac{1}{6}$`, sol: R`【思路】通分，分子 $\sin^2x-\ln(1+x^2)$，分母为两者之积。
【详解】$\ln(1+x^2)=x^2-\frac{x^4}{2}+o(x^4)$，$\sin^2x=x^2-\frac{x^3}{3}+o(x^4)$（用 $\sin^2x=\frac{1-\cos2x}{2}$）。故
$$\sin^2x-\ln(1+x^2)=\left(x^2-\frac{x^4}{3}\right)-\left(x^2-\frac{x^4}{2}\right)+o(x^4)=\frac{x^4}{6}+o(x^4),$$
分母 $\sim x^2\cdot x^2=x^4$。极限 $=\frac16$。
【易错点】$\sin^2x=x^2-\frac{x^4}{3}+\cdots$（不是 $x^2-\frac{x^3}{3}$，注意是 $x^4$）。` },
      { n: 32, q: R`求极限 $\lim\limits_{x\to0^+}\frac{x^x-(\sin x)^x}{x^2\ln(1+x)}$。`, a: R`$\frac{1}{6}$`, sol: R`【思路】把 $x^x,(\sin x)^x$ 都写成 $e^{x\ln(\cdot)}$，用 $\ln\sin x=\ln x+\ln\frac{\sin x}{x}$。
【详解】$x^x=e^{x\ln x}$，$(\sin x)^x=e^{x\ln\sin x}$，且
$$\ln\sin x=\ln x+\ln\frac{\sin x}{x}=\ln x-\frac{x^2}{6}+o(x^2).$$
故 $x\ln\sin x=x\ln x-\frac{x^3}{6}+o(x^3)$，
$$(\sin x)^x=e^{x\ln x}e^{-\frac{x^3}{6}+o(x^3)}=x^x\left(1-\frac{x^3}{6}+\cdots\right).$$
分子 $=x^x-(\sin x)^x=x^x\cdot\frac{x^3}{6}+o(x^3)\sim\frac{x^3}{6}$，分母 $\sim x^2\cdot x=x^3$，极限 $=\frac16$。
【易错点】$\ln\frac{\sin x}{x}\sim-\frac{x^2}{6}$，这是 $\ln\sin x$ 与 $\ln x$ 的差；$x^x\to1$。` },
      { n: 33, q: R`求极限 $\lim\limits_{x\to0}\frac{\ln(1+x^2)-\ln(1+\sin^2x)}{x\sin^3x}$。`, a: R`$\frac{1}{3}$`, sol: R`【思路】分子用 $\ln\frac{1+x^2}{1+\sin^2x}$ 近似，核心是 $x^2-\sin^2x$。
【详解】$\ln(1+x^2)-\ln(1+\sin^2x)\approx\ln\frac{1+x^2}{1+\sin^2x}\approx(x^2-\sin^2x)-\frac{x^4-\sin^4x}{2}+\cdots\sim x^2-\sin^2x$。
$$x^2-\sin^2x=(x-\sin x)(x+\sin x)\sim\frac{x^3}{6}\cdot2x=\frac{x^3}{3}\cdot x=\frac{x^4}{3}.$$
分母 $x\sin^3x\sim x\cdot x^3=x^4$。极限 $=\frac13$。
【易错点】$x-\sin x\sim\frac{x^3}{6}$，$x+\sin x\sim2x$，乘积 $\sim\frac{x^4}{3}$。` },
      { n: 34, q: R`求极限 $\lim\limits_{x\to+\infty}\frac{\int_1^x[t^2(e^{\frac{1}{t}}-1)-t]dt}{x^2\ln(1+\frac{1}{x})}$。`, a: R`$\frac{1}{2}$`, sol: R`【思路】先看被积函数当 $t\to\infty$ 时的主部，再估计分子（积分）与分母的阶。
【详解】$e^{1/t}-1=\frac1t+\frac{1}{2t^2}+\frac{1}{6t^3}+\cdots$，故
$$t^2\left(e^{1/t}-1\right)-t=t^2\left(\frac1t+\frac{1}{2t^2}+\cdots\right)-t=\frac12+\frac{1}{6t}+\cdots\to\frac12.$$
于是 $\int_1^x[\cdots]dt\sim\frac{x}{2}$（$x\to+\infty$）。又分母 $x^2\ln(1+\frac1x)\sim x^2\cdot\frac1x=x$。故极限 $=\frac{1/2}{1}=\frac12$。
【易错点】被积函数趋于常数 $\frac12$，积分 $\sim\frac x2$；分母 $x^2\ln(1+\frac1x)\sim x$。` },
      { n: 35, q: R`求下列极限
(1) $\lim\limits_{x\to0}\left(\frac{\ln(1+x)}{x}\right)^{\frac{1}{e^x-1}}$；
(2) $\lim\limits_{x\to0}\left(\frac{e^x+e^{2x}+\cdots+e^{nx}}{n}\right)^{\frac{1}{x}}$；
(3) $\lim\limits_{n\to\infty}\left(n\tan\frac{1}{n}\right)^{n^2}$；
(4) $\lim\limits_{n\to\infty}\tan^n\left(\frac{\pi}{4}+\frac{2}{n}\right)$。`, a: R`(1) $e^{-\frac{1}{2}}$；(2) $e^{\frac{1}{2}(n+1)}$；(3) $e^{\frac{1}{3}}$；(4) $e^4$。`, sol: R`【思路】四个都是 $1^\infty$ 型，统一「取对数 + 等价无穷小」。
【详解】(1) $\frac{\ln(1+x)}{x}=1-\frac{x}{2}+o(x)$，$\ln(\cdot)=-\frac{x}{2}+o(x)$，除以 $e^x-1\sim x$ 得 $-\frac12$，极限 $e^{-1/2}$。
(2) 括号内 $=\frac1n\sum_{k=1}^ne^{kx}\approx\frac1n\sum_{k=1}^n\left(1+kx\right)=1+\frac{n+1}{2}x+o(x)$，取对数除以 $x$ 得 $\frac{n+1}{2}$，极限 $e^{(n+1)/2}$。
(3) $n\tan\frac1n=n\left(\frac1n+\frac{1}{3n^3}+\cdots\right)=1+\frac{1}{3n^2}+\cdots$，取对数 $\sim\frac{1}{3n^2}$，乘 $n^2$ 得 $\frac13$，极限 $e^{1/3}$。
(4) $\tan\left(\frac\pi4+\frac2n\right)=\frac{1+\tan\frac2n}{1-\tan\frac2n}\approx\left(1+\frac2n\right)^2\approx1+\frac4n+\cdots$，取对数 $\sim\frac4n$，乘 $n$ 得 $4$，极限 $e^4$。
【易错点】统一套路：写成 $e^{\frac{\ln(\cdot)}{\text{指数}}}$，把指数展开到一阶；$\ln(1+t)\sim t$。` },
      { n: 36, q: R`求下列极限
(1) $\lim\limits_{x\to+\infty}(x+\sqrt{1+x^2})^{\frac{1}{x}}$；
(2) $\lim\limits_{x\to+\infty}(x^{\frac{1}{x}}-1)^{\frac{1}{\ln x}}$。`, a: R`(1) $1$；(2) $e^{-1}$。`, sol: R`【思路】(1) 底数趋于无穷、指数趋于 0，取对数后用对数增长慢；(2) 用 $x^{1/x}=e^{\ln x/x}$ 展开。
【详解】(1) $\ln(\cdot)=\frac{\ln(x+\sqrt{1+x^2})}{x}\sim\frac{\ln(2x)}{x}\to0$，故极限 $=e^0=1$。
(2) $x^{1/x}=e^{\frac{\ln x}{x}}=1+\frac{\ln x}{x}+o\!\left(\frac{\ln x}{x}\right)$，故 $x^{1/x}-1\sim\frac{\ln x}{x}$。取对数：
$$\frac{1}{\ln x}\ln\left(x^{1/x}-1\right)=\frac{1}{\ln x}\left(\ln\ln x-\ln x+o(1)\right)\to-1,$$
故极限 $=e^{-1}$。
【易错点】(1) 是 $\infty^0$ 型，对数里主导的是 $x$；(2) 关键展开 $x^{1/x}-1\sim\frac{\ln x}{x}$。` },
      { n: 37, q: R`已知函数 $f(x)$ 在 $x=0$ 的某邻域内可导，且 $\lim\limits_{x\to0}\left(\frac{\sin x}{x^2}+\frac{f(x)}{x}\right)=2$，试求 $f(0),f'(0)$ 及 $\lim\limits_{x\to0}\frac{x}{f(x)+e^x}$。`, a: R`$f(0)=-1,f'(0)=2,\lim\limits_{x\to0}\frac{x}{f(x)+e^x}=\frac{1}{3}$。`, sol: R`【思路】把两项都展开，令 $1/x$ 项系数为零、常数项为 2。
【详解】$\frac{\sin x}{x^2}=\frac{x-\frac{x^3}{6}+\cdots}{x^2}=\frac1x-\frac{x}{6}+\cdots$，$\frac{f(x)}{x}=\frac{f(0)+f'(0)x+\cdots}{x}=\frac{f(0)}{x}+f'(0)+\cdots$。故
$$\frac{\sin x}{x^2}+\frac{f(x)}{x}=\frac{1+f(0)}{x}+f'(0)-\frac{x}{6}+\cdots=2.$$
令 $1+f(0)=0$ 得 $f(0)=-1$；令常数项 $f'(0)=2$。
于是 $f(x)=-1+2x+o(x)$，$f(x)+e^x=-1+2x+(1+x+o(x))=3x+o(x)$，故 $\frac{x}{f(x)+e^x}\to\frac13$。
【易错点】极限存在要求 $\frac1x$ 项系数为零，这是求 $f(0)$ 的关键。` },
      { n: 38, q: R`求极限 $\lim\limits_{n\to\infty}\left(\frac{1}{\sqrt{n^6+n}}+\frac{2^2}{\sqrt{n^6+2n}}+\cdots+\frac{n^2}{\sqrt{n^6+n^2}}\right)$。`, a: R`$\frac{1}{3}$`, sol: R`【思路】分母 $\sqrt{n^6+kn}=n^3\sqrt{1+k/n^5}\sim n^3$，用夹逼或等价。
【详解】第 $k$ 项 $\frac{k^2}{\sqrt{n^6+kn}}$，因 $\sqrt{n^6+kn}\sim n^3$，故
$$\sum_{k=1}^n\frac{k^2}{\sqrt{n^6+kn}}\sim\frac{1}{n^3}\sum_{k=1}^nk^2=\frac{1}{n^3}\cdot\frac{n(n+1)(2n+1)}{6}\to\frac13.$$
【易错点】分母的 $kn$ 相对 $n^6$ 是高阶小量，$\sqrt{n^6+kn}\sim n^3$；$\sum k^2=\frac{n(n+1)(2n+1)}{6}$。` },
      { n: 39, q: R`求极限 $\lim\limits_{n\to\infty}\left(\frac{1}{\sqrt{n^2}}+\frac{1}{\sqrt{n^2-1^2}}+\cdots+\frac{1}{\sqrt{n^2-(n-1)^2}}\right)$。`, a: R`$\frac{\pi}{2}$`, sol: R`【思路】提出 $\frac1n$，识别为黎曼和。
【详解】
$$\sum_{k=0}^{n-1}\frac{1}{\sqrt{n^2-k^2}}=\frac1n\sum_{k=0}^{n-1}\frac{1}{\sqrt{1-\left(\frac kn\right)^2}}\to\int_0^1\frac{\mathrm{d}x}{\sqrt{1-x^2}}=\frac\pi2.$$
【易错点】把每项写成 $\frac1n\cdot\frac{1}{\sqrt{1-(k/n)^2}}$；$\int_0^1\frac{dx}{\sqrt{1-x^2}}=\arcsin x|_0^1=\frac\pi2$。` },
      { n: 40, q: R`求极限 $\lim\limits_{n\to\infty}\left(\frac{n+1}{1^2+n^2}+\frac{n+\frac{1}{2}}{2^2+n^2}+\cdots+\frac{n+\frac{1}{n}}{n^2+n^2}\right)$。`, a: R`$\frac{\pi}{4}$`, sol: R`【思路】拆成两部分：$\frac{n}{k^2+n^2}$ 是黎曼和，$\frac{1/k}{k^2+n^2}$ 是无穷小。
【详解】
$$S_n=\sum_{k=1}^n\frac{n}{k^2+n^2}+\sum_{k=1}^n\frac{1/k}{k^2+n^2}.$$
第一项 $=\frac1n\sum_{k=1}^n\frac{1}{1+(k/n)^2}\to\int_0^1\frac{\mathrm{d}x}{1+x^2}=\frac\pi4$。
第二项 $\le\sum_{k=1}^n\frac{1}{n^2}=\frac1n\to0$。
故极限 $=\frac\pi4$。
【易错点】把 $\frac{n+1/k}{k^2+n^2}$ 拆开后，第二项被 $\frac{1}{n^2}$ 控制趋于 0。` },
      { n: 41, q: R`求函数 $f(x)=\begin{cases}\frac{x|x+1|}{\ln|x|},&x\neq0,\\1,&x=0.\end{cases}$ 的间断点并指出类型。`, a: R`$x=1$ 为无穷间断点，$x=-1$ 为跳跃间断点，$x=0$ 为可去间断点。`, sol: R`【思路】间断点候选为 $x=0,\pm1$（$\ln|x|=0$ 或分母为零）；逐个求左右极限。
【详解】$x=1$：$|x+1|=2$，分子 $\to2$，$\ln|x|\to0$，$f\to\infty$，无穷间断点。
$x=-1$：令 $x=-1+t$，分子 $x|x+1|\approx-|t|$，$\ln|x|=\ln(1-t)\approx-t$。当 $t>0$ 时 $f\to\frac{-t}{-t}=1$；当 $t<0$ 时 $f\to\frac{-(-t)}{-t}=-1$。左右极限存在不等，跳跃间断点。
$x=0$：$\frac{x}{\ln|x|}\to0$（分子一阶、分母对数），故 $f\to0$，但 $f(0)=1$，可去间断点。
【易错点】$x=0$ 处 $|x+1|=1$，分子 $\sim x$，而 $\ln|x|\to-\infty$，故极限为 0，是**可去**（非无穷）。` },
      { n: 42, q: R`设 $f(x)=\lim\limits_{n\to\infty}\frac{x^{2n-1}+ax^2+bx}{x^{2n}+1}$ 在 $(-\infty,+\infty)$ 内连续，试确定常数 $a$ 和 $b$。`, a: R`$a=0,b=1$`, sol: R`【思路】按 $|x|>1,|x|<1,x=\pm1$ 讨论极限，得 $f$ 的分段表达式，再由连续性在 $x=\pm1$ 列方程。
【详解】$|x|>1$ 时分子分母同除 $x^{2n}$：$f\to\frac{1/x+0}{1+0}=\frac1x$；$|x|<1$ 时 $x^{2n}\to0$：$f=ax^2+bx$。
在 $x=1$：左极限 $a+b$，右极限 $1$，$f(1)=\frac{1+a+b}{2}$。连续要求 $a+b=1$ 且 $\frac{1+a+b}{2}=1$，即 $a+b=1$。
在 $x=-1$：左极限 $\frac1{-1}=-1$，右极限 $a-b$，$f(-1)=\frac{-1+a-b}{2}$。连续要求 $a-b=-1$ 且 $\frac{-1+a-b}{2}=-1$，即 $a-b=-1$。
联立 $\begin{cases}a+b=1\\a-b=-1\end{cases}$ 得 $a=0,b=1$。
【易错点】$|x|>1$ 时极限是 $\frac1x$（保留 $x^{2n-1}/x^{2n}$），不是 0；两个分界点都要列连续条件。` },
      { n: 43, q: R`设 $f(x)$ 是区间 $[0,+\infty)$ 上单调减少且非负的连续函数，$a_n=\sum\limits_{k=1}^n f(k)-\int_1^n f(x)dx\ (n=1,2,\cdots)$，证明数列 $\{a_n\}$ 的极限存在。`, a: R`证明数列 $\{a_n\}$ 的极限存在。`, sol: R`【思路】证 $\{a_n\}$ 单调减且有下界，用单调有界准则。
【详解】$a_{n+1}-a_n=f(n+1)-\int_n^{n+1}f(x)\mathrm{d}x$。因 $f$ 单调减少，在 $[n,n+1]$ 上 $f(x)\ge f(n+1)$，故 $\int_n^{n+1}f(x)\mathrm{d}x\ge f(n+1)$，得 $a_{n+1}-a_n\le0$，即 $\{a_n\}$ 单调减。
又 $\sum_{k=1}^nf(k)\ge\int_1^{n+1}f(x)\mathrm{d}x$（每个小区间上用左端点），故
$$a_n\ge\int_1^{n+1}f(x)\mathrm{d}x-\int_1^nf(x)\mathrm{d}x=\int_n^{n+1}f(x)\mathrm{d}x\ge0.$$
所以 $\{a_n\}$ 单调减且有下界，极限存在。
【易错点】下界用的是「左矩形面积 ≥ 积分」；单调减由 $\int_n^{n+1}f\ge f(n+1)$ 得。` },
      { n: 44, q: R`设 $x_1=\sqrt2,x_{n+1}=\sqrt{3+2x_n},n=1,2,\cdots$，证明数列 $\{x_n\}$ 收敛并求它的极限。`, a: R`证明收敛，$\lim\limits_{n\to\infty}x_n=3$。`, sol: R`【思路】先证 $x_n<3$（有界），再证单调增，最后解极限方程。
【详解】有界：$x_1=\sqrt2<3$；若 $x_n<3$，则 $x_{n+1}=\sqrt{3+2x_n}<\sqrt{3+6}=3$。故 $x_n<3$。
单调：$x_{n+1}-x_n=\sqrt{3+2x_n}-x_n$，因 $x_n<3$ 有 $3+2x_n>x_n^2$（即 $(3-x_n)(1+x_n)>0$），故 $x_{n+1}>x_n$。
于是 $\{x_n\}$ 单调增上有界，收敛。设极限为 $L$，由 $L=\sqrt{3+2L}$ 得 $L^2-2L-3=0$，$L=3$（舍去 $-1$）。
【易错点】证明单调性时用「$3+2x_n-x_n^2=(3-x_n)(1+x_n)>0$」；极限方程取正根。` },
      { n: 45, q: R`设数列 $\{x_n\}$ 满足 $x_1=1,x_{n+1}=\frac{x_n+2}{x_n+1}\ (n=1,2,\cdots)$，试证 $\lim\limits_{n\to\infty}x_n=\sqrt2$。`, a: R`证明 $\lim\limits_{n\to\infty}x_n=\sqrt2$。`, sol: R`【思路】作差 $x_{n+1}-\sqrt2$，找出压缩关系。
【详解】
$$x_{n+1}-\sqrt2=\frac{x_n+2}{x_n+1}-\sqrt2=\frac{(1-\sqrt2)(x_n-\sqrt2)}{x_n+1},$$
故 $\left|x_{n+1}-\sqrt2\right|=\frac{\sqrt2-1}{x_n+1}\left|x_n-\sqrt2\right|\le(\sqrt2-1)\left|x_n-\sqrt2\right|$。
反复迭代得 $\left|x_n-\sqrt2\right|\le(\sqrt2-1)^{n-1}\left|x_1-\sqrt2\right|\to0$，所以 $\lim x_n=\sqrt2$。
【易错点】关键是因式分解出 $(x_n-\sqrt2)$；因 $\sqrt2-1<1$，压缩映射保证收敛。` },
      { n: 46, q: R`设函数 $f(x)=\ln x+\frac{1}{x}$。(1) 求 $f(x)$ 的最小值；(2) 设数列 $\{x_n\}$ 满足 $\ln x_n+\frac{1}{x_{n+1}}<1$，证明 $\lim\limits_{n\to\infty}x_n$ 存在，并求此极限。`, a: R`(1) 最小值 $f(1)=1$；(2) 极限存在。`, sol: R`【思路】(1) 求导找极小；(2) 用 $f$ 的最小值 1 建立 $x_{n+1}>x_n$，再证有上界。
【详解】(1) $f'(x)=\frac1x-\frac{1}{x^2}=\frac{x-1}{x^2}$，$f'(1)=0$，且 $x<1$ 时 $f'<0$、$x>1$ 时 $f'>0$，故最小值 $f(1)=1$。
(2) 由 (1) 对一切 $x>0$ 有 $\ln x+\frac1x\ge1$，即 $1-\ln x_n\le\frac{1}{x_n}$。又 $\ln x_n+\frac{1}{x_{n+1}}<1$，即 $\frac{1}{x_{n+1}}<1-\ln x_n\le\frac{1}{x_n}$，故 $x_{n+1}>x_n$，$\{x_n\}$ 单调增。
又 $\ln x_n<1-\frac{1}{x_{n+1}}<1$（因 $x_{n+1}>0$），故 $x_n<e$，有上界。于是极限存在，设为 $L$。对 $\ln x_n+\frac{1}{x_{n+1}}<1$ 取极限得 $\ln L+\frac1L\le1$；结合 $\ln L+\frac1L\ge1$ 得 $=1$，故 $L=1$。
【易错点】利用最小值 1 得到 $\frac{1}{x_{n+1}}<\frac{1}{x_n}$ 推出单调增；极限由 $\ln L+\frac1L=1$ 定为 $L=1$。` },
      { n: 47, q: R`设 $x_1>0,x_{n+1}=\ln(1+x_n)\ (n=1,2,\cdots)$，证明：(1) $\{x_n\}$ 收敛并求极限 $\lim\limits_{n\to\infty}x_n$。(2) 计算 $\lim\limits_{n\to\infty}\left(\frac{x_{n+1}}{x_n}\right)^{\frac{1}{x_n}}$ 及 $\lim\limits_{n\to\infty}\left[\frac{1}{x_n}-\frac{1}{x_{n+1}}\right]$。`, a: R`(1) 收敛，极限为 0；(2) 两极限分别为 $e^{-1/2}$ 与 $-\frac{1}{2}$。`, sol: R`【思路】(1) 用不等式 $\frac{x}{1+x}<\ln(1+x)<x$ 证单调减下有界；(2) 用 $\ln(1+x)=x-\frac{x^2}{2}+\cdots$。
【详解】(1) 对 $x>0$，$\ln(1+x)<x$，故 $x_{n+1}<x_n$，$\{x_n\}$ 单调减；又 $x_{n+1}=\ln(1+x_n)>0$，有下界 0，故收敛。设极限 $L$，由 $L=\ln(1+L)$ 得 $L=0$。
(2) $\frac{x_{n+1}}{x_n}=\frac{\ln(1+x_n)}{x_n}\to1$，
$$\frac{1}{x_n}\ln\frac{x_{n+1}}{x_n}=\frac{1}{x_n}\ln\left(\frac{\ln(1+x_n)}{x_n}\right).$$
由 $\frac{\ln(1+x)}{x}=1-\frac{x}{2}+\frac{x^2}{3}-\cdots$，得 $\ln\left(\frac{\ln(1+x_n)}{x_n}\right)\sim-\frac{x_n}{2}$，故该极限为 $e^{-1/2}$。
又 $x_{n+1}=x_n-\frac{x_n^2}{2}+o(x_n^2)$，故 $x_{n+1}-x_n\sim-\frac{x_n^2}{2}$，
$$\frac{1}{x_n}-\frac{1}{x_{n+1}}=\frac{x_{n+1}-x_n}{x_nx_{n+1}}\sim\frac{-\frac{x_n^2}{2}}{x_n^2}=-\frac12.$$
【易错点】$\frac{\ln(1+x)}{x}=1-\frac x2+\cdots$ 是两问的核心；注意 $x_n\to0$。` },
      { n: 48, q: R`设 $f(x)$ 在 $[0,2a]\ (a>0)$ 上连续，且 $f(0)=f(2a)$，求证存在 $\xi\in[0,a]$，使 $f(\xi)=f(\xi+a)$。`, a: R`证明存在 $\xi\in[0,a]$ 使 $f(\xi)=f(\xi+a)$。`, sol: R`【思路】构造辅助函数 $F(x)=f(x)-f(x+a)$，用零点定理。
【详解】令 $F(x)=f(x)-f(x+a)$，$x\in[0,a]$。则
$$F(0)=f(0)-f(a),\qquad F(a)=f(a)-f(2a)=f(a)-f(0)=-F(0).$$
若 $F(0)=0$，取 $\xi=0$ 即可；若 $F(0)\neq0$，则 $F(0)$ 与 $F(a)$ 异号，由 $F$ 连续及零点定理，存在 $\xi\in(0,a)$ 使 $F(\xi)=0$，即 $f(\xi)=f(\xi+a)$。
【易错点】$F(0)+F(a)=0$ 是构造的关键；$f(0)=f(2a)$ 使 $F(a)=-F(0)$。` },
      { n: 49, q: R`设 $f(x)$ 在 $[a,b]$ 上连续，$x_i\in[a,b],t_i>0\ (i=1,2,\cdots,n)$，且 $\sum\limits_{i=1}^n t_i=1$，试证至少存在一点 $\xi\in[a,b]$ 使 $f(\xi)=t_1f(x_1)+t_2f(x_2)+\cdots+t_nf(x_n)$。`, a: R`证明至少存在一点 $\xi\in[a,b]$ 使 $f(\xi)=t_1f(x_1)+\cdots+t_nf(x_n)$。`, sol: R`【思路】把右端看成 $f$ 的加权平均，夹在最小值与最大值之间，再用介值定理。
【详解】设 $m=\min\limits_{[a,b]}f$，$M=\max\limits_{[a,b]}f$。因 $f(x_i)\in[m,M]$、$t_i>0$ 且 $\sum t_i=1$，故
$$m=\sum_{i=1}^n t_im\le\sum_{i=1}^n t_if(x_i)\le\sum_{i=1}^n t_iM=M.$$
记 $A=\sum_{i=1}^n t_if(x_i)\in[m,M]$。由 $f$ 在 $[a,b]$ 上连续及介值定理，存在 $\xi\in[a,b]$ 使 $f(\xi)=A$。
【易错点】关键是 $\sum t_i=1$ 使加权平均被 $[m,M]$ 夹住；直接对 $f$ 用介值定理。` }
    ],
    quiz: [
      { q: R`$f(x)$ 在 $x_0$ 处连续的充要条件是`, options: [R`在 $x_0$ 左连续`, R`在 $x_0$ 右连续`, R`在 $x_0$ 左连续且右连续`, R`在 $x_0$ 有定义`], answer: 2, explain: R`连续 $\Leftrightarrow$ 左连续且右连续，且等于函数值。` },
      { q: R`$x=0$ 是 $f(x)=\sin\frac1x$ 的`, options: [R`可去间断点`, R`跳跃间断点`, R`振荡间断点`, R`无穷间断点`], answer: 2, explain: R`$x\to0$ 时函数值在 $[-1,1]$ 内无限振荡，属第二类振荡间断点。` },
      { q: R`第一类间断点是指`, options: [R`左、右极限都存在的间断点`, R`至少一个单侧极限不存在`, R`极限为无穷`, R`函数无定义`], answer: 0, explain: R`按左右极限是否都存在分类。` },
      { q: R`可去间断点的特征是`, options: [R`左右极限存在且相等，但不等于函数值或函数无定义`, R`左右极限存在但不等`, R`极限为无穷`, R`振荡不存在`], answer: 0, explain: R`补定义或改定义即可连续。` },
      { q: R`闭区间上连续函数的性质不包括`, options: [R`有界性`, R`最值性`, R`介值性`, R`可导性`], answer: 3, explain: R`连续不一定可导。` },
      { q: R`设 $f$ 在 $[a,b]$ 连续且 $f(a)f(b)<0$，则`, options: [R`存在 $\xi\in(a,b)$ 使 $f(\xi)=0$`, R`$f$ 单调`, R`$f$ 可导`, R`$f$ 有最大值`], answer: 0, explain: R`零点定理。` },
      { q: R`$x=0$ 是 $f(x)=\frac1x$ 的`, options: [R`可去间断点`, R`跳跃间断点`, R`无穷间断点`, R`振荡间断点`], answer: 2, explain: R`左右极限均为无穷。` },
      { q: R`设 $f$ 在 $[0,1]$ 连续且 $f(0)=f(1)$，则必存在 $\xi$ 使`, options: [R`$f(\xi)=f(\xi+\frac12)$`, R`$f(\xi)=0$`, R`$f'(\xi)=0$`, R`$f(\xi)=f(0)$`], answer: 0, explain: R`令 $F(x)=f(x+\frac12)-f(x)$，$F(0)+F(\frac12)=0$。` },
      { q: R`跳跃间断点的左、右极限`, options: [R`存在且相等`, R`存在但不等`, R`至少一个不存在`, R`都为无穷`], answer: 1, explain: R`第一类、左右极限都存在但不相等。` },
      { q: R`初等函数在其定义区间内`, options: [R`连续`, R`可导`, R`有界`, R`单调`], answer: 0, explain: R`初等函数在其定义区间内连续。` },
      { q: R`$x=0$ 是 $f(x)=\frac{x}{|x|}$ 的`, options: [R`可去间断点`, R`跳跃间断点`, R`无穷间断点`, R`振荡间断点`], answer: 1, explain: R`左极限 $-1$、右极限 $1$。` },
      { q: R`若 $f\in C[a,b]$，则 $f$ 在 $[a,b]$ 上`, options: [R`有界`, R`无界`, R`单调`, R`可导`], answer: 0, explain: R`闭区间连续函数的有界性。` }
    ]
  };
})();
