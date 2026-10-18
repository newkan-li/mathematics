window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["jc03_s2"] = {
    id: "jc03_s2",
    ch: "第三章 一元函数积分学",
    title: "第三节 反常积分及其计算",
    book: "李永乐《数学复习全书·基础篇》",
    pages: [118, 122],
    img: "assets/img/jichu",
    content: [
      { p: 118, md: R`**【解】**
\[
\begin{aligned}
\int_{-\frac{\pi}{2}}^{\frac{\pi}{2}}\left(x^{3}+\sin ^{2} x\right) \cos ^{2} x \mathrm{d} x
&=\int_{-\frac{\pi}{2}}^{\frac{\pi}{2}} x^{3} \cos ^{2} x \mathrm{d} x+\int_{-\frac{\pi}{2}}^{\frac{\pi}{2}} \sin ^{2} x \cos ^{2} x \mathrm{d} x \\
&=2 \int_{0}^{\frac{\pi}{2}} \sin ^{2} x \cos ^{2} x \mathrm{d} x \\
&=\frac{1}{2} \int_{0}^{\frac{\pi}{2}} \sin ^{2} 2 x \mathrm{d} x \\
&=\frac{1}{4} \int_{0}^{\frac{\pi}{2}}(1-\cos 4 x) \mathrm{d} x=\frac{\pi}{8}.
\end{aligned}
\]

**【注】**
\[
\int_{0}^{\frac{\pi}{2}} \sin ^{2} x \cos ^{2} x \mathrm{d} x=\int_{0}^{\frac{\pi}{2}}\left(\sin ^{2} x-\sin ^{4} x\right) \mathrm{d} x=\frac{1}{2} \cdot \frac{\pi}{2}-\frac{3}{4} \cdot \frac{1}{2} \cdot \frac{\pi}{2}=\frac{\pi}{16}.
\]

**例18** \(\int_{0}^{\pi} \frac{x \sin x}{1+\cos ^{2} x} \mathrm{d} x=\) ______.

**【解】** 令 \(x=\pi-t\), 则
\[
\int_{0}^{\pi} \frac{x \sin x}{1+\cos ^{2} x} \mathrm{d} x=\int_{0}^{\pi} \frac{(\pi-t) \sin t}{1+\cos ^{2} t} \mathrm{d} t
\]
\[
=\pi \int_{0}^{\pi} \frac{\sin t}{1+\cos ^{2} t} \mathrm{d} t-\int_{0}^{\pi} \frac{t \sin t}{1+\cos ^{2} t} \mathrm{d} t
\]
所以
\[
\int_{0}^{\pi} \frac{x \sin x}{1+\cos ^{2} x} \mathrm{d} x=\frac{\pi}{2} \int_{0}^{\pi} \frac{\sin t}{1+\cos ^{2} t} \mathrm{d} t
\]
\[
=\left.-\frac{\pi}{2} \arctan \cos t\right|_{0} ^{\pi}=\frac{\pi^{2}}{4}.
\]

**例19** 设 \(f(x)\) 是连续的奇函数, 求证其原函数为偶函数.

**【证】** 因为 \(f(x)\) 为连续函数, 所以 \(\int_{0}^{x} f(t) \mathrm{d} t\) 是 \(f(x)\) 的一个原函数, 其所有原函数可表示为
\[
\int f(x) \mathrm{d} x=\int_{0}^{x} f(t) \mathrm{d} t+C,
\]
其中 \(C\) 为任意常数. 只要证明 \(\int_{0}^{x} f(t) \mathrm{d} t\) 为偶函数即可.

记 \(F(x)=\int_{0}^{x} f(t) \mathrm{d} t\), 则 \(F(-x)=\int_{0}^{-x} f(t) \mathrm{d} t\).

作变量代换 \(u=-t\), 则
\[
F(-x)=\int_{0}^{x} f(-u) \mathrm{d}(-u)
\]
而 \(f(u)\) 是奇函数, \(f(-u)=-f(u)\), 所以
\[
F(-x)=\int_{0}^{x}[-f(u)] \mathrm{d}(-u)=\int_{0}^{x} f(u) \mathrm{d} u=F(x)
\]
所以 \(F(x)\) 为偶函数, \(f(x)\) 的所有原函数均为偶函数.

## 第三节 反常积分及其计算

### 一、反常积分

**定义**（无穷区间上的反常积分） 设 \(f(x)\) 在 \([a,+\infty)\) 上连续, 称` },
      { p: 119, md: R`\[
\int_{a}^{+\infty} f(x) \mathrm{d} x=\lim _{b \rightarrow+\infty} \int_{a}^{b} f(x) \mathrm{d} x
\]
为 \(f(x)\) 在 \([a,+\infty)\) 上的反常积分. 若右边极限存在, 称此反常积分收敛; 若该极限不存在, 称此反常积分发散.

类似地可以定义
\[
\int_{-\infty}^{b} f(x) \mathrm{d} x=\lim _{a \rightarrow-\infty} \int_{a}^{b} f(x) \mathrm{d} x
\]
及
\[
\int_{-\infty}^{+\infty} f(x) \mathrm{d} x=\int_{-\infty}^{c} f(x) \mathrm{d} x+\int_{c}^{+\infty} f(x) \mathrm{d} x, \quad(\text { 其中 } c \in(-\infty,+\infty))
\]
在后一式中, 只要右边两个反常积分至少有一个不存在, 就说反常积分 \(\int_{-\infty}^{+\infty} f(x) \mathrm{d} x\) 发散.

**定义**（无界函数的反常积分） 设 \(f(x)\) 在区间 \([a, b]\) 上连续, 且 \(\lim _{x \rightarrow b^{-}} f(x)=\infty\), 称
\[
\int_{a}^{b} f(x) \mathrm{d} x=\lim _{\beta \rightarrow b^{-}} \int_{a}^{\beta} f(x) \mathrm{d} x
\]
为 \(f(x)\) 在区间 \([a, b]\) 上的反常积分(也称瑕积分), 若右边极限存在, 则称此反常积分收敛; 若该极限不存在, 称此反常积分发散. 使 \(f(x) \rightarrow \infty\) 的点 \(b\) 称为 \(f(x)\) 的奇点(也称瑕点).

若点 \(a\) 为 \(f(x)\) 的奇点, 类似地可以定义
\[
\int_{a}^{b} f(x) \mathrm{d} x=\lim _{\alpha \rightarrow a^{+}} \int_{\alpha}^{b} f(x) \mathrm{d} x
\]
若点 \(a\) 与 \(b\) 都是奇点, 则应分成
\[
\int_{a}^{b} f(x) \mathrm{d} x=\int_{a}^{x_{0}} f(x) \mathrm{d} x+\int_{x_{0}}^{b} f(x) \mathrm{d} x, \quad a<x_{0}<b
\]
若两个反常积分中至少有一个不存在, 就说反常积分 \(\int_{a}^{b} f(x) \mathrm{d} x\) 不存在(发散).

若在开区间 \((a, b)\) 内部点 \(c\) 为奇点, 则反常积分定义为
\[
\int_{a}^{b} f(x) \mathrm{d} x=\int_{a}^{c} f(x) \mathrm{d} x+\int_{c}^{b} f(x) \mathrm{d} x
\]
右边两个反常积分中若至少有一个不存在, 则称此反常积分发散.

只要一看积分限有 \(\infty\), 便知这是无穷区间上的反常积分. 所以此类反常积分是容易识别的. 无界函数的反常积分就较难识别了.

一般是看被积函数是否有使其分母为零的点. 但这句话既不是必要, 也不充分. 例如 \(\int_{0}^{1} \ln x \mathrm{d} x\), 被积函数没有“分母”, 而 \(x=0\) 是它的奇点, 所以该积分是反常积分. 又如
\[
\int_{0}^{1} \frac{1}{x^{2}} \mathrm{e}^{-\frac{1}{x}} \mathrm{d} x
\]
的下限 \(x=0\), 使分母为 \(0\), 但却不是反常积分. 这是因为
\[
\lim _{x \rightarrow 0^{+}} \frac{1}{x^{2}} \mathrm{e}^{-\frac{1}{x}}=\lim _{x \rightarrow 0^{+}} \frac{\frac{1}{x^{2}}}{\mathrm{e}^{\frac{1}{x}}}=\lim _{x \rightarrow 0^{+}} \frac{-\frac{2}{x^{3}}}{-\frac{1}{x^{2}} \mathrm{e}^{\frac{1}{x}}}=\lim _{x \rightarrow 0^{+}} \frac{\frac{2}{x}}{\mathrm{e}^{\frac{1}{x}}}=\lim _{x \rightarrow 0^{+}} \frac{-\frac{2}{x^{2}}}{-\frac{1}{x^{2}} \mathrm{e}^{\frac{1}{x}}}=\lim _{x \rightarrow 0^{+}} 2 \mathrm{e}^{-\frac{1}{x}}=0
\]
所以 \(\int_{0}^{1} \frac{1}{x^{2}} \mathrm{e}^{-\frac{1}{x}} \mathrm{d} x\) 不是反常积分.

话虽如此, 但被积函数的分母为零仍是重要的识别标志. 不但要看积分的上、下限处, 还要看区间内部是否有使 \(f(x) \rightarrow \infty\) 的点.

**例1** 下列结论中正确的是

(A) \(\int_{1}^{+\infty} \frac{\mathrm{d} x}{x(x+1)}\) 与 \(\int_{0}^{1} \frac{\mathrm{d} x}{x(x+1)}\) 均收敛.

(B) \(\int_{1}^{+\infty} \frac{\mathrm{d} x}{x(x+1)}\) 与 \(\int_{0}^{1} \frac{\mathrm{d} x}{x(x+1)}\) 均发散.` },
      { p: 120, md: R`(C) \(\int_{1}^{+\infty} \frac{\mathrm{d} x}{x(x+1)}\) 发散, \(\int_{0}^{1} \frac{\mathrm{d} x}{x(x+1)}\) 收敛.

(D) \(\int_{1}^{+\infty} \frac{\mathrm{d} x}{x(x+1)}\) 收敛, \(\int_{0}^{1} \frac{\mathrm{d} x}{x(x+1)}\) 发散.

**【解】** 答案选(D).

经计算可知, 当且仅当 \(p>1\) 时, \(\int_{1}^{+\infty} \frac{\mathrm{d} x}{x^{p}}\) 收敛. 对于一般非负函数在无界区间上的广义积分 \(\int_{a}^{+\infty} f(x) \mathrm{d} x\), 若 \(\lim _{x \rightarrow+\infty} \frac{f(x)}{\frac{1}{x^{p}}}=A\), 则

(1) \(A>0, p>1\) 时, \(\int_{a}^{+\infty} f(x) \mathrm{d} x\) 收敛.

(2) \(A>0, p \leqslant 1\) 时, \(\int_{a}^{+\infty} f(x) \mathrm{d} x\) 发散.

(3) \(A=0, p>1\) 时, \(\int_{a}^{+\infty} f(x) \mathrm{d} x\) 收敛.

(4) \(A=+\infty, p \leqslant 1\) 时, \(\int_{a}^{+\infty} f(x) \mathrm{d} x\) 发散.

本题中, \(\lim _{x \rightarrow+\infty} \frac{\frac{1}{x(x+1)}}{\frac{1}{x^{2}}}=1, A=1, p=2>1\), 所以 \(\int_{1}^{+\infty} \frac{\mathrm{d} x}{x(x+1)}\) 收敛.

同样, 经计算, 当且仅当 \(p<1\) 时, 无界函数的广义积分 \(\int_{a}^{b} \frac{\mathrm{d} x}{(x-a)^{p}}\) 收敛. 对于一般非负函数 \(f(x)\), 设 \(f\) 在 \(x=a\) 点无界, 若 \(\lim _{x \rightarrow a^{+}} \frac{f(x)}{\frac{1}{(x-a)^{p}}}=A\).

(1) \(A>0, p<1\) 时, \(\int_{a}^{b} f(x) \mathrm{d} x\) 收敛.

(2) \(A>0, p \geqslant 1\) 时, \(\int_{a}^{b} f(x) \mathrm{d} x\) 发散.

(3) \(A=0, p<1\) 时, \(\int_{a}^{b} f(x) \mathrm{d} x\) 收敛.

(4) \(A=0, p \geqslant 1\) 时, \(\int_{a}^{b} f(x) \mathrm{d} x\) 发散.

在本题中, \(\lim _{x \rightarrow 0^{+}} \frac{\frac{1}{x(x+1)}}{\frac{1}{x}}=1, A=1, p=1\), 所以 \(\int_{0}^{1} \frac{\mathrm{d} x}{x(x+1)}\) 发散.

**例2** 求 \(\int_{1}^{+\infty} \frac{\arctan x}{x^{2}} \mathrm{d} x\).

**【解】** 方法一
\[
\begin{aligned}
\int_{1}^{+\infty} \frac{\arctan x}{x^{2}} \mathrm{d} x &=\int_{1}^{+\infty} \arctan x \mathrm{d}\left(-\frac{1}{x}\right) \\
&=\left.-\frac{1}{x} \arctan x\right|_{1} ^{+\infty}+\int_{1}^{+\infty} \frac{1}{x} \cdot \frac{1}{x^{2}+1} \mathrm{d} x \\
&=\frac{\pi}{4}+\lim _{b \rightarrow+\infty} \int_{1}^{b}\left(\frac{1}{x}-\frac{x}{1+x^{2}}\right) \mathrm{d} x \\
&=\frac{\pi}{4}+\lim _{b \rightarrow+\infty}\left[\ln b-\frac{1}{2} \ln \left(1+b^{2}\right)+\frac{1}{2} \ln 2\right] \\
&=\frac{\pi}{4}+\frac{1}{2} \ln 2 .
\end{aligned}
\]

方法二 作变换 \(\arctan x=t\),
\[
\begin{aligned}
\int_{1}^{+\infty} \frac{\arctan x}{x^{2}} \mathrm{d} x &=\int_{\frac{\pi}{4}}^{\frac{\pi}{2}} t \csc ^{2} t \mathrm{d} t=-\int_{\frac{\pi}{4}}^{\frac{\pi}{2}} t \mathrm{d}(\cot t) \\
&=\left.-t \cot t\right|_{\frac{\pi}{4}} ^{\frac{\pi}{2}}+\int_{\frac{\pi}{4}}^{\frac{\pi}{2}} \cot t \mathrm{d} t=\frac{\pi}{4}+\frac{1}{2} \ln 2 .
\end{aligned}
\]` },
      { p: 121, md: R`**例3** 求 \(\int_{0}^{1}(\ln x)^{2} \mathrm{d} x\).

**【解】**
\[
\int(\ln x)^{2} \mathrm{d} x=x(\ln x)^{2}-2 x \ln x+2 x+C
\]
所以
\[
\int_{0}^{1}(\ln x)^{2} \mathrm{d} x=\lim _{\delta \rightarrow 0^{+}} \int_{\delta}^{1}(\ln x)^{2} \mathrm{d} x=\lim _{\delta \rightarrow 0^{+}}\left[x(\ln x)^{2}-2 x \ln x+2 x\right]_{\delta}^{1}=2 .
\]

**例4** 讨论积分 \(\int_{0}^{+\infty} \frac{\ln \left(1+x^{2}\right)}{x^{p}} \mathrm{d} x\ (p>0)\) 的收敛性.

**【解】** \(x=0\) 是积分的奇点, 所以原积分分为瑕积分和反常积分
\[
\int_{0}^{+\infty} \frac{\ln \left(1+x^{2}\right)}{x^{p}} \mathrm{d} x=\int_{0}^{1} \frac{\ln \left(1+x^{2}\right)}{x^{p}} \mathrm{d} x+\int_{1}^{+\infty} \frac{\ln \left(1+x^{2}\right)}{x^{p}} \mathrm{d} x,
\]
因为当 \(x \rightarrow 0^{+}\) 时, \(\frac{\ln \left(1+x^{2}\right)}{x^{p}} \sim \frac{x^{2}}{x^{p}}=\frac{1}{x^{p-2}}\), 所以当 \(p-2<1\), 即 \(p<3\) 时, 瑕积分
\[
\int_{0}^{1} \frac{\ln \left(1+x^{2}\right)}{x^{p}} \mathrm{d} x
\]
收敛;
当 \(x \rightarrow+\infty\) 时, \(\frac{\ln \left(1+x^{2}\right)}{x^{p}} \sim \frac{2 \ln x}{x^{p}}\), 所以当 \(p>1\) 时, 反常积分 \(\int_{1}^{+\infty} \frac{\ln \left(1+x^{2}\right)}{x^{p}} \mathrm{d} x\) 收敛.

当且仅当瑕积分和反常积分都收敛时, 原积分才收敛,

故当 \(1<p<3\) 时, 积分 \(\int_{0}^{+\infty} \frac{\ln \left(1+x^{2}\right)}{x^{p}} \mathrm{d} x\) 收敛.

**【注】** 反常积分 \(\int_{2}^{+\infty} \frac{\mathrm{d} x}{x^{p} \ln ^{q} x}\), 当 \(p>1\), 对于任意的 \(q\) 都收敛; 当 \(p<1\) 时, 对于任意的 \(q\) 都发散; 当 \(p=1\) 时, \(q>1\) 收敛, \(q \leqslant 1\) 发散.

### 二、对称区间上奇、偶函数的反常积分

**定理** (1) 设 \(f(x)\) 在 \((-\infty,+\infty)\) 上连续, 且为奇函数, 又设 \(\int_{0}^{+\infty} f(x) \mathrm{d} x\) 收敛, 则
\[
\int_{-\infty}^{+\infty} f(x) \mathrm{d} x=0 .
\]

(2) 设 \(f(x)\) 在 \((-\infty,+\infty)\) 上连续, 且为偶函数, 又设 \(\int_{0}^{+\infty} f(x) \mathrm{d} x\) 收敛, 则
\[
\int_{-\infty}^{+\infty} f(x) \mathrm{d} x=2 \int_{0}^{+\infty} f(x) \mathrm{d} x .
\]

(3) 设 \(f(x)\) 在 \([-a, a]\) 上除 \(x=\pm c\) 外均连续, \(x=\pm c\) 为 \(f(x)\) 的奇点, \(0 \leqslant c \leqslant a\). 又设 \(f(x)\) 为奇函数, 且 \(\int_{0}^{a} f(x) \mathrm{d} x\) 收敛, 则 \(\int_{-a}^{a} f(x) \mathrm{d} x=0\).

(4) 设 \(f(x)\) 在 \([-a, a]\) 上除 \(x=\pm c\) 外均连续, \(x=\pm c\) 为 \(f(x)\) 的奇点, \(0 \leqslant c \leqslant a\). 又设 \(f(x)\) 为偶函数, 且 \(\int_{0}^{a} f(x) \mathrm{d} x\) 收敛, 则 \(\int_{-a}^{a} f(x) \mathrm{d} x=2 \int_{0}^{a} f(x) \mathrm{d} x\).

**【注】** 这里(1)~(4)中, 与通常的奇偶函数在对称区间上的定积分相比较, 这里多了一个要求“收敛”的条件, 如果不满足这条件, 结论是不成立的. 例如, 按照定义
\[
\int_{-\infty}^{+\infty} \frac{x}{1+x^{2}} \mathrm{d} x=\int_{-\infty}^{0} \frac{x}{1+x^{2}} \mathrm{d} x+\int_{0}^{+\infty} \frac{x}{1+x^{2}} \mathrm{d} x
\]
而
\[
\int_{0}^{+\infty} \frac{x}{1+x^{2}} \mathrm{d} x=\left.\frac{1}{2} \lim _{b \rightarrow+\infty} \ln \left(1+x^{2}\right)\right|_{0} ^{b}=\frac{1}{2} \lim _{b \rightarrow+\infty} \ln \left(1+b^{2}\right)=+\infty
\]` },
      { p: 122, md: R`是发散的, 所以 \(\int_{-\infty}^{+\infty} \frac{x}{1+x^{2}} \mathrm{d} x\) 发散, 而不能认为被积函数是奇函数, 该积分为 \(0\).

概率论中经常用到这里的(1)与(2), 实际上都应先验算 \(\int_{0}^{+\infty} f(x) \mathrm{d} x\) 收敛.

**一个重要的反常积分**
\[
\int_{-\infty}^{+\infty} \mathrm{e}^{-x^{2}} \mathrm{d} x=2 \int_{0}^{+\infty} \mathrm{e}^{-x^{2}} \mathrm{d} x=\sqrt{\pi} .
\]

**例5** 下列积分其结论不正确的是

(A) \(\int_{-\infty}^{+\infty} x^{2} \mathrm{e}^{-x^{2}} \mathrm{d} x=\frac{\sqrt{\pi}}{2}\).

(B) \(\int_{-1}^{1} \frac{\sin x^{2}}{x} \mathrm{d} x=0\).

(C) \(\int_{-\infty}^{+\infty} \frac{x}{1+x^{2}} \mathrm{d} x=0\).

(D) \(\int_{-\infty}^{+\infty} \frac{x}{\left(1+x^{2}\right)^{2}} \mathrm{d} x=0\).

**【解】** 由
\[
\int_{0}^{+\infty} \frac{x}{1+x^{2}} \mathrm{d} x=\left.\frac{1}{2} \ln \left(1+x^{2}\right)\right|_{0} ^{+\infty}=\lim _{b \rightarrow+\infty}\left.\frac{1}{2} \ln \left(1+x^{2}\right)\right|_{0} ^{b}
\]
\[
=\frac{1}{2} \lim _{b \rightarrow+\infty} \ln \left(1+b^{2}\right)=+\infty \text { (发散) }
\]
所以 \(\int_{-\infty}^{+\infty} \frac{x}{1+x^{2}} \mathrm{d} x\) 发散, (C)不正确, 选(C).

**【评注】** 下面来说一下(A)(B)(D)都是正确的.

由于
\[
\int_{0}^{+\infty} \frac{x}{\left(1+x^{2}\right)^{2}} \mathrm{d} x=\left.-\frac{1}{2} \cdot \frac{1}{1+x^{2}}\right|_{0} ^{+\infty}=-\frac{1}{2} \lim _{b \rightarrow+\infty} \frac{1}{1+b^{2}}+\frac{1}{2}=\frac{1}{2} \text { (收敛) }
\]
\(\frac{x}{\left(1+x^{2}\right)^{2}}\) 在 \((-\infty,+\infty)\) 为奇函数, 故 \(\int_{-\infty}^{+\infty} \frac{x}{\left(1+x^{2}\right)^{2}} \mathrm{d} x=0\), (D)正确.

对于(B), 因为 \(\lim _{x \rightarrow 0} \frac{\sin x^{2}}{x}=0\), 而在其它点处均连续, 所以(B)不是反常积分, 命
\[
f(x)=\begin{cases}
\dfrac{\sin x^{2}}{x}, & \text { 当 } x \neq 0, \\[4pt]
0, & \text { 当 } x=0 .
\end{cases}
\]
它是一个连续的奇函数, 且 \(\int_{-1}^{1} \frac{\sin x^{2}}{x} \mathrm{d} x=\int_{-1}^{1} f(x) \mathrm{d} x=0\). (B)正确.

由分部积分,
\[
\int_{-\infty}^{+\infty} x^{2} \mathrm{e}^{-x^{2}} \mathrm{d} x=-\frac{1}{2} \int_{-\infty}^{+\infty} x \mathrm{d} \mathrm{e}^{-x^{2}}=-\frac{1}{2}\left(\left.x \mathrm{e}^{-x^{2}}\right|_{-\infty} ^{+\infty}-\int_{-\infty}^{+\infty} \mathrm{e}^{-x^{2}} \mathrm{d} x\right) .
\]
而
\[
\lim _{b \rightarrow \pm \infty} b \mathrm{e}^{-b^{2}}=0
\]
并且由于 \(\int_{0}^{+\infty} \mathrm{e}^{-x^{2}} \mathrm{d} x=\frac{\sqrt{\pi}}{2}\) (收敛), \(\int_{-\infty}^{+\infty} \mathrm{e}^{-x^{2}} \mathrm{d} x=2 \int_{0}^{+\infty} \mathrm{e}^{-x^{2}} \mathrm{d} x=\sqrt{\pi}\), 所以
\[
\int_{-\infty}^{+\infty} x^{2} \mathrm{e}^{-x^{2}} \mathrm{d} x=\frac{1}{2} \int_{-\infty}^{+\infty} \mathrm{e}^{-x^{2}} \mathrm{d} x=\int_{0}^{+\infty} \mathrm{e}^{-x^{2}} \mathrm{d} x=\frac{\sqrt{\pi}}{2} . \quad \text { (A) 正确 }
\]` },
    ],
    quiz: [{"q": "$\\int_1^{+\\infty}\\frac{1}{x^p}\\,dx$ 收敛的充要条件是", "options": ["$p>1$", "$p<1$", "$p>0$", "$p\\ge1$"], "answer": 0, "explain": "$p>1$ 时收敛于 $\\frac{1}{p-1}$，$p\\le1$ 发散。"}, {"q": "$\\int_0^1\\frac{1}{x^p}\\,dx$ 收敛的充要条件是", "options": ["$p<1$", "$p>1$", "$p>0$", "$p\\ge1$"], "answer": 0, "explain": "瑕积分在 $p<1$ 时收敛。"}, {"q": "$\\int_0^{+\\infty}e^{-x}\\,dx=$", "options": ["$1$", "$0$", "$+\\infty$", "$e$"], "answer": 0, "explain": "$\\left.-e^{-x}\\right|_0^{+\\infty}=1$。"}]
  };
})();
