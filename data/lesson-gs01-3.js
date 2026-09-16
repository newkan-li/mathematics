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
(A) 单调函数。 (B) 周期函数。 (C) 偶函数。 (D) 无界函数。`, a: R`(D)`, sol: R`答案 (D)。` },
      { n: 2, q: R`下列四个函数中
(1) $x\sin\frac{1}{x}$。 (2) $\frac{1}{x}\sin\frac{1}{x}$。 (3) $\frac{\sin x}{x}$。 (4) $x\sin x$。
在区间 $(0,+\infty)$ 上有界的共有
(A) 1个。 (B) 2个。 (C) 3个。 (D) 4个。`, a: R`(B)`, sol: R`答案 (B)。` },
      { n: 3, q: R`设函数 $f(x)$ 连续，则下列函数中，必为偶函数的是
(A) $\int_0^x f(t^2)dt$。 (B) $\int_0^x f^2(t)dt$。 (C) $\int_0^x t[f(t)-f(-t)]dt$。 (D) $\int_0^x t[f(t)+f(-t)]dt$。`, a: R`(D)`, sol: R`答案 (D)。` },
      { n: 4, q: R`设有数列 $\{x_n\}$ 与 $\{y_n\}$，以下结论正确的是
(A) 若 $\lim\limits_{n\to\infty}x_ny_n=0$，则必有 $\lim\limits_{n\to\infty}x_n=0$ 或 $\lim\limits_{n\to\infty}y_n=0$。
(B) 若 $\lim\limits_{n\to\infty}x_ny_n=\infty$，则必有 $\lim\limits_{n\to\infty}x_n=\infty$ 或 $\lim\limits_{n\to\infty}y_n=\infty$。
(C) 若 $x_ny_n$ 有界，则必有 $x_n$ 与 $y_n$ 都有界。
(D) 若 $x_ny_n$ 无界，则必有 $x_n$ 无界或 $y_n$ 无界。`, a: R`(D)`, sol: R`答案 (D)。` },
      { n: 5, q: R`设 $\lim\limits_{n\to\infty}x_ny_n=\infty$，则下列结论错误的是
(A) $\lim\limits_{n\to\infty}x_n=\infty$ 与 $\lim\limits_{n\to\infty}y_n=\infty$ 至少有一个成立。
(B) $\{x_n\}$ 与 $\{y_n\}$ 中至少有一个为无界变量。
(C) 若 $\{x_n\}$ 是无穷小量，则 $\{y_n\}$ 必为无界变量。
(D) 若 $\lim\limits_{n\to\infty}x_n=a\neq\infty$，则 $\{y_n\}$ 必为无穷大量。`, a: R`(A)`, sol: R`答案 (A)。` },
      { n: 6, q: R`设数列 $\{a_n\},\{b_n\}$ 对任意的正整数 $n$ 满足 $a_n\leqslant b_n\leqslant a_{n+1}$，则
(A) 数列 $\{a_n\},\{b_n\}$ 均收敛，且 $\lim\limits_{n\to\infty}a_n=\lim\limits_{n\to\infty}b_n$。
(B) 数列 $\{a_n\},\{b_n\}$ 均发散，且 $\lim\limits_{n\to\infty}a_n=\lim\limits_{n\to\infty}b_n=+\infty$。
(C) 数列 $\{a_n\},\{b_n\}$ 具有相同的敛散性。
(D) 数列 $\{a_n\},\{b_n\}$ 具有不同的敛散性。`, a: R`(C)`, sol: R`答案 (C)。` },
      { n: 7, q: R`设 $\lim\limits_{x\to0}\varphi(x)=0$，则下列命题
(1) $\lim\limits_{x\to0}\frac{\sin\varphi(x)}{\varphi(x)}=1$
(2) $\lim\limits_{x\to0}(1+\varphi(x))^{\frac{1}{\varphi(x)}}=e$
(3) 若 $f'(x_0)=A$，则 $\lim\limits_{x\to0}\frac{f(x_0+\varphi(x))-f(x_0)}{\varphi(x)}=A$
(4) 若 $\lim\limits_{u\to0}f(u)=A$，则 $\lim\limits_{x\to0}f[\varphi(x)]=A$
中正确的个数为
(A) 0个。 (B) 2个。 (C) 3个。 (D) 4个。`, a: R`(A)`, sol: R`答案 (A)。` },
      { n: 8, q: R`极限 $\lim\limits_{x\to\infty}\frac{e^{\sin\frac{1}{x}}-1}{\left(1+\frac{1}{x}\right)^\alpha-\left(1+\frac{1}{x}\right)}=A\neq0$ 的充要条件是
(A) $\alpha>1$。 (B) $\alpha\neq1$。 (C) $\alpha>0$。 (D) 与 $\alpha$ 无关。`, a: R`(B)`, sol: R`答案 (B)。` },
      { n: 9, q: R`已知 $\lim\limits_{x\to0}\frac{\ln(1+2x)+xf(x)}{x^2}=1$，则 $\lim\limits_{x\to0}\frac{2+f(x)}{x}=$
(A) 1。 (B) 2。 (C) 3。 (D) 4。`, a: R`(C)`, sol: R`答案 (C)。` },
      { n: 10, q: R`设 $f(x)$ 连续，$\lim\limits_{x\to0}\frac{f(x)}{1-\cos x}=2$，且当 $x\to0$ 时 $\int_0^{\sin^2x}f(t)dt$ 是 $x$ 的 $n$ 阶无穷小，则 $n$ 等于
(A) 3。 (B) 4。 (C) 5。 (D) 6。`, a: R`(D)`, sol: R`答案 (D)。` },
      { n: 11, q: R`已知当 $x\to0$ 时，$f(x)=\arctan x-\sin ax$ 与 $g(x)=bx\ln\sqrt{a+x^2}$ 是等价无穷小，则
(A) $a=b=1$。 (B) $a=2,b=\frac{1}{3}$。 (C) $a=1,b=\frac{1}{2}$。 (D) $a=1,b=-\frac{1}{3}$。`, a: R`(D)`, sol: R`答案 (D)。` },
      { n: 12, q: R`已知当 $x\to0$ 时，函数 $f(x)=3\sin x-\sin3x$ 与 $cx^k$ 是等价无穷小，则
(A) $k=1,c=4$。 (B) $k=1,c=-4$。 (C) $k=3,c=4$。 (D) $k=3,c=-4$。`, a: R`(C)`, sol: R`答案 (C)。` },
      { n: 13, q: R`当 $x\to0^+$ 时，下列无穷小量中最高阶的无穷小量是
(A) $\sqrt{1+x^4}-e^{\frac{x^2}{2}}$。 (B) $\tan x-\sin x$。 (C) $\int_0^{\sin x}\sin t^2dt$。 (D) $\int_0^{1-\cos x}\sin^{\frac{3}{2}}tdt$。`, a: R`(D)`, sol: R`答案 (D)。` },
      { n: 14, q: R`函数 $f(x)=\frac{(e^{\frac{1}{x}}+e)\tan x}{x(e^{\frac{1}{x}}-e)}$ 在 $[-\pi,\pi]$ 上的第一类间断点是 $x=$
(A) 0。 (B) 1。 (C) $-\frac{\pi}{2}$。 (D) $\frac{\pi}{2}$。`, a: R`(A)`, sol: R`答案 (A)。` },
      { n: 15, q: R`函数 $f(x)=\frac{x^2-x}{x^2-1}\sqrt{1+\frac{1}{x^2}}$ 的无穷间断点的个数为
(A) 0。 (B) 1。 (C) 2。 (D) 3。`, a: R`(B)`, sol: R`答案 (B)。` },
      { n: 16, q: R`函数 $f(x)=\frac{|x|^x-1}{x(x+1)\ln|x|}$ 的可去间断点的个数为
(A) 0。 (B) 1。 (C) 2。 (D) 3。`, a: R`(C)`, sol: R`答案 (C)。` },
      { n: 17, q: R`已知函数 $f(x)=\frac{(x^2+a^2)(x-1)}{e^{\frac{1}{x}}+b}$ 在 $(-\infty,+\infty)$ 上有一个可去间断点和一个跳跃间断点，则
(A) $a=1,b=-1$。 (B) $a=0,b=1$。 (C) $a\neq0,b=-e$。 (D) $a=e,b=-1$。`, a: R`(C)`, sol: R`答案 (C)。` },
      { n: 18, q: R`设 $f(x)=\lim\limits_{n\to\infty}\frac{2e^{(n+1)x}+1}{e^{nx}+x^2+1}$，则 $f(x)$
(A) 仅有一个可去间断点。 (B) 仅有一个跳跃间断点。 (C) 有两个可去间断点。 (D) 有两个跳跃间断点。`, a: R`(D)`, sol: R`答案 (D)。` },
      { n: 19, q: R`$\lim\limits_{x\to0}\frac{x-\arcsin x}{(\arcsin x)^3}=$______。`, a: R`$-\frac{1}{6}$`, sol: R`答案 $-\frac{1}{6}$。` },
      { n: 20, q: R`已知 $\lim\limits_{x\to0}\frac{\alpha x^\alpha}{\sqrt{1+x\arctan x}-\sqrt{\cos x}}=\frac{8}{3}$，则 $\alpha=$______。`, a: R`$2$`, sol: R`答案 $2$。` },
      { n: 21, q: R`已知曲线 $y=f(x)$ 在点 $(0,0)$ 处的切线过点 $(1,2)$，则 $\lim\limits_{x\to0}\left(\cos x+\int_0^x f(t)dt\right)^{\frac{1}{x^2}}=$______。`, a: R`$e^{\frac{1}{2}}$`, sol: R`答案 $e^{\frac{1}{2}}$。` },
      { n: 22, q: R`极限 $\lim\limits_{x\to0}\left[\frac{1}{\ln(x+\sqrt{1+x^2})}-\frac{1}{\ln(1+x)}\right]=$______。`, a: R`$-\frac{1}{2}$`, sol: R`答案 $-\frac{1}{2}$。` },
      { n: 23, q: R`设 $n$ 为正整数，则 $\lim\limits_{x\to\infty}\left[\frac{x^n}{(x-1)(x-2)\cdots(x-n)}\right]^x=$______。`, a: R`$e^{\frac{n(n+1)}{2}}$`, sol: R`答案 $e^{\frac{n(n+1)}{2}}$。` },
      { n: 24, q: R`求极限 $\lim\limits_{x\to0}\left(\frac{\ln(x+\sqrt{1+x^2})}{x}\right)^{\frac{1}{x^2}}=$______。`, a: R`$e^{-\frac{1}{6}}$`, sol: R`答案 $e^{-\frac{1}{6}}$。` },
      { n: 25, q: R`设 $x_n=\left(1+\frac{1}{n^2}\right)\left(1+\frac{2}{n^2}\right)\cdots\left(1+\frac{n}{n^2}\right)$，则 $\lim\limits_{n\to\infty}x_n=$______。`, a: R`$e^{\frac{1}{2}}$`, sol: R`答案 $e^{\frac{1}{2}}$。` },
      { n: 26, q: R`极限 $\lim\limits_{n\to\infty}\frac{\sqrt{1}+\sqrt{2}+\cdots+\sqrt{n}}{\sqrt{n}(1+2+\cdots+n)}=$______。`, a: R`$\frac{2\sqrt2}{3}$`, sol: R`答案 $\frac{2\sqrt2}{3}$。` },
      { n: 27, q: R`确定常数 $a,b$，使 $x\to0$ 时 $f(x)=e^x-\frac{1+ax}{1+bx}$ 为 $x$ 的三阶无穷小。`, a: R`$a=\frac{1}{2},b=-\frac{1}{2}$`, sol: R`答案 $a=\frac{1}{2},b=-\frac{1}{2}$。` },
      { n: 28, q: R`当 $x\to0$ 时，$1-\cos x\cdot\cos2x\cdot\cos3x$ 与 $ax^n$ 为等价无穷小，求 $n$ 与 $a$ 的值。`, a: R`$n=2,a=7$`, sol: R`答案 $n=2,a=7$。` },
      { n: 29, q: R`已知 $\lim\limits_{x\to0}\frac{(1+\sin2x^2)^{\frac{1}{x}}-e^2}{x^n}=a\ (a\neq0)$，求 $a$ 和 $n$ 的值。`, a: R`$n=2,a=-2e^2$`, sol: R`答案 $n=2,a=-2e^2$。` },
      { n: 30, q: R`确定常数 $a,b,c$ 的值，使 $\lim\limits_{x\to0}\frac{ax-\sin x}{\int_b^x\frac{\ln(1+t^3)}{t}dt}=c\ (c\neq0)$。`, a: R`$a=1,b=0,c=\frac{1}{2}$`, sol: R`答案 $a=1,b=0,c=\frac{1}{2}$。` },
      { n: 31, q: R`求极限 $\lim\limits_{x\to0}\left(\frac{1}{\ln(1+x^2)}-\frac{1}{\sin^2x}\right)$。`, a: R`$\frac{1}{6}$`, sol: R`答案 $\frac{1}{6}$。` },
      { n: 32, q: R`求极限 $\lim\limits_{x\to0^+}\frac{x^x-(\sin x)^x}{x^2\ln(1+x)}$。`, a: R`$\frac{1}{6}$`, sol: R`答案 $\frac{1}{6}$。` },
      { n: 33, q: R`求极限 $\lim\limits_{x\to0}\frac{\ln(1+x^2)-\ln(1+\sin^2x)}{x\sin^3x}$。`, a: R`$\frac{1}{3}$`, sol: R`答案 $\frac{1}{3}$。` },
      { n: 34, q: R`求极限 $\lim\limits_{x\to+\infty}\frac{\int_1^x[t^2(e^{\frac{1}{t}}-1)-t]dt}{x^2\ln(1+\frac{1}{x})}$。`, a: R`$\frac{1}{2}$`, sol: R`答案 $\frac{1}{2}$。` },
      { n: 35, q: R`求下列极限
(1) $\lim\limits_{x\to0}\left(\frac{\ln(1+x)}{x}\right)^{\frac{1}{e^x-1}}$；
(2) $\lim\limits_{x\to0}\left(\frac{e^x+e^{2x}+\cdots+e^{nx}}{n}\right)^{\frac{1}{x}}$；
(3) $\lim\limits_{n\to\infty}\left(n\tan\frac{1}{n}\right)^{n^2}$；
(4) $\lim\limits_{n\to\infty}\tan^n\left(\frac{\pi}{4}+\frac{2}{n}\right)$。`, a: R`(1) $e^{-\frac{1}{2}}$；(2) $e^{\frac{1}{2}(n+1)}$；(3) $e^{\frac{1}{3}}$；(4) $e^4$。`, sol: R`答案：(1) $e^{-\frac{1}{2}}$；(2) $e^{\frac{1}{2}(n+1)}$；(3) $e^{\frac{1}{3}}$；(4) $e^4$。` },
      { n: 36, q: R`求下列极限
(1) $\lim\limits_{x\to+\infty}(x+\sqrt{1+x^2})^{\frac{1}{x}}$；
(2) $\lim\limits_{x\to+\infty}(x^{\frac{1}{x}}-1)^{\frac{1}{\ln x}}$。`, a: R`(1) $1$；(2) $e^{-1}$。`, sol: R`答案：(1) 1；(2) $e^{-1}$。` },
      { n: 37, q: R`已知函数 $f(x)$ 在 $x=0$ 的某邻域内可导，且 $\lim\limits_{x\to0}\left(\frac{\sin x}{x^2}+\frac{f(x)}{x}\right)=2$，试求 $f(0),f'(0)$ 及 $\lim\limits_{x\to0}\frac{x}{f(x)+e^x}$。`, a: R`$f(0)=-1,f'(0)=2,\lim\limits_{x\to0}\frac{x}{f(x)+e^x}=\frac{1}{3}$。`, sol: R`答案：$f(0)=-1,f'(0)=2,\lim\limits_{x\to0}\frac{x}{f(x)+e^x}=\frac{1}{3}$。` },
      { n: 38, q: R`求极限 $\lim\limits_{n\to\infty}\left(\frac{1}{\sqrt{n^6+n}}+\frac{2^2}{\sqrt{n^6+2n}}+\cdots+\frac{n^2}{\sqrt{n^6+n^2}}\right)$。`, a: R`$\frac{1}{3}$`, sol: R`答案 $\frac{1}{3}$。` },
      { n: 39, q: R`求极限 $\lim\limits_{n\to\infty}\left(\frac{1}{\sqrt{n^2}}+\frac{1}{\sqrt{n^2-1^2}}+\cdots+\frac{1}{\sqrt{n^2-(n-1)^2}}\right)$。`, a: R`$\frac{\pi}{2}$`, sol: R`答案 $\frac{\pi}{2}$。` },
      { n: 40, q: R`求极限 $\lim\limits_{n\to\infty}\left(\frac{n+1}{1^2+n^2}+\frac{n+\frac{1}{2}}{2^2+n^2}+\cdots+\frac{n+\frac{1}{n}}{n^2+n^2}\right)$。`, a: R`$\frac{\pi}{4}$`, sol: R`答案 $\frac{\pi}{4}$。` },
      { n: 41, q: R`求函数 $f(x)=\begin{cases}\frac{x|x+1|}{\ln|x|},&x\neq0,\\1,&x=0.\end{cases}$ 的间断点并指出类型。`, a: R`$x=1$ 为无穷间断点，$x=-1$ 为跳跃间断点，$x=0$ 为可去间断点。`, sol: R`答案：$x=1$ 为无穷间断点，$x=-1$ 为跳跃间断点，$x=0$ 为可去间断点。` },
      { n: 42, q: R`设 $f(x)=\lim\limits_{n\to\infty}\frac{x^{2n-1}+ax^2+bx}{x^{2n}+1}$ 在 $(-\infty,+\infty)$ 内连续，试确定常数 $a$ 和 $b$。`, a: R`$a=0,b=1$`, sol: R`答案 $a=0,b=1$。` },
      { n: 43, q: R`设 $f(x)$ 是区间 $[0,+\infty)$ 上单调减少且非负的连续函数，$a_n=\sum\limits_{k=1}^n f(k)-\int_1^n f(x)dx\ (n=1,2,\cdots)$，证明数列 $\{a_n\}$ 的极限存在。`, a: R`证明数列 $\{a_n\}$ 的极限存在。`, sol: R`提示：证明数列 $\{a_n\}$ 单调减下有界。` },
      { n: 44, q: R`设 $x_1=\sqrt2,x_{n+1}=\sqrt{3+2x_n},n=1,2,\cdots$，证明数列 $\{x_n\}$ 收敛并求它的极限。`, a: R`证明收敛，$\lim\limits_{n\to\infty}x_n=3$。`, sol: R`提示：证明数列 $\{x_n\}$ 单调增上有界（$x_n\leqslant3$，$\frac{x_{n+1}}{x_n}\geqslant1$，$\lim x_n=3$）。` },
      { n: 45, q: R`设数列 $\{x_n\}$ 满足 $x_1=1,x_{n+1}=\frac{x_n+2}{x_n+1}\ (n=1,2,\cdots)$，试证 $\lim\limits_{n\to\infty}x_n=\sqrt2$。`, a: R`证明 $\lim\limits_{n\to\infty}x_n=\sqrt2$。`, sol: R`提示：$\left|x_{n+1}-\sqrt2\right|=\frac{1}{(x_n+1)(\sqrt2+1)}\left|x_n-\sqrt2\right|\leqslant\frac{1}{2}\left|x_n-\sqrt2\right|\leqslant\cdots\leqslant\frac{1}{2^n}\left|x_1-\sqrt2\right|$。` },
      { n: 46, q: R`设函数 $f(x)=\ln x+\frac{1}{x}$。(1) 求 $f(x)$ 的最小值；(2) 设数列 $\{x_n\}$ 满足 $\ln x_n+\frac{1}{x_{n+1}}<1$，证明 $\lim\limits_{n\to\infty}x_n$ 存在，并求此极限。`, a: R`(1) 最小值 $f(1)=1$；(2) 极限存在。`, sol: R`提示：$f(1)=1$ 为最小值，则 $1\leqslant\ln x_n+\frac{1}{x_n}$，又 $\ln x_n+\frac{1}{x_{n+1}}<1$，则 $\{x_n\}$ 单调增，且 $\ln x_n<1$，则 $x_n<e$，上有界。` },
      { n: 47, q: R`设 $x_1>0,x_{n+1}=\ln(1+x_n)\ (n=1,2,\cdots)$，证明：(1) $\{x_n\}$ 收敛并求极限 $\lim\limits_{n\to\infty}x_n$。(2) 计算 $\lim\limits_{n\to\infty}\left(\frac{x_{n+1}}{x_n}\right)^{\frac{1}{x_n}}$ 及 $\lim\limits_{n\to\infty}\left[\frac{1}{x_n}-\frac{1}{x_{n+1}}\right]$。`, a: R`(1) 收敛；(2) 两极限均存在。`, sol: R`提示：利用不等式 $\frac{x}{1+x}<\ln(1+x)<x$，证明 $\{x_n\}$ 单调减下有界。` },
      { n: 48, q: R`设 $f(x)$ 在 $[0,2a]\ (a>0)$ 上连续，且 $f(0)=f(2a)$，求证存在 $\xi\in[0,a]$，使 $f(\xi)=f(\xi+a)$。`, a: R`证明存在 $\xi\in[0,a]$ 使 $f(\xi)=f(\xi+a)$。`, sol: R`提示：对辅助函数 $F(x)=f(x)-f(x+a)$ 在区间 $[0,a]$ 上用零点定理。` },
      { n: 49, q: R`设 $f(x)$ 在 $[a,b]$ 上连续，$x_i\in[a,b],t_i>0\ (i=1,2,\cdots,n)$，且 $\sum\limits_{i=1}^n t_i=1$，试证至少存在一点 $\xi\in[a,b]$ 使 $f(\xi)=t_1f(x_1)+t_2f(x_2)+\cdots+t_nf(x_n)$。`, a: R`证明至少存在一点 $\xi\in[a,b]$ 使 $f(\xi)=t_1f(x_1)+\cdots+t_nf(x_n)$。`, sol: R`提示：利用连续函数的介值定理。` }
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
