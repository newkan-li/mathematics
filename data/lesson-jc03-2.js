window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["jc03_s1"] = {
    id: "jc03_s1",
    ch: "第三章 一元函数积分学",
    title: "第二节 不定积分与定积分的计算",
    book: "李永乐《数学复习全书·基础篇》",
    pages: [108, 117],
    img: "assets/img/jichu",
    content: [
      { p: 108, md: R`（3）\(h(x)\) 在区间 \((-\infty,+\infty)\) 上不存在原函数.

假若 \(h(x)\) 在区间 \((-\infty,+\infty)\) 上存在原函数为 \(F(x)\)，则
\[
F(x)=\begin{cases}
-x+C_1, & x<0,\\
x+C_2, & x\geqslant 0,
\end{cases}
\]
由 \(F(x)\) 在 \(x=0\) 连续，\(F(x)=|x|+C\)，与 \(F(x)\) 可导矛盾.

---

## 第二节 不定积分与定积分的计算

### 一、基本积分公式

以下公式中，\(\alpha\) 与 \(a\) 均为常数，除声明者外，\(a>0\).

(1) \(\int 0\,dx=C\)；

(2) \(\int 1\,dx=\int dx=x+C\)；

(3) \(\int x^{\alpha}dx=\frac{1}{\alpha+1}x^{\alpha+1}+C\ (\alpha\neq -1)\)，

(4) \(\int\frac{1}{x}dx=\ln|x|+C\)，

(5) \(\int a^x dx=\frac{a^x}{\ln a}+C\ (a>0,a\neq 1)\)，

(6) \(\int e^x dx=e^x+C\)，

(7) \(\int\sin x\,dx=-\cos x+C\)，

(8) \(\int\cos x\,dx=\sin x+C\)，

(9) \(\int\tan x\,dx=-\ln|\cos x|+C\)，

(10) \(\int\cot x\,dx=\ln|\sin x|+C\)，

(11) \(\int\sec x\,dx=\ln|\sec x+\tan x|+C\)，

(12) \(\int\csc x\,dx=\ln|\csc x-\cot x|+C\)，

(13) \(\int\sec^2 x\,dx=\tan x+C\)，

(14) \(\int\csc^2 x\,dx=-\cot x+C\)，

(15) \(\int\frac{1}{a^2+x^2}dx=\frac{1}{a}\arctan\frac{x}{a}+C\)，

(16) \(\int\frac{1}{a^2-x^2}dx=\frac{1}{2a}\ln\left|\frac{a+x}{a-x}\right|+C\)，

(17) \(\int\frac{1}{\sqrt{a^2-x^2}}dx=\arcsin\frac{x}{a}+C\)，

(18) \(\int\frac{dx}{\sqrt{x^2\pm a^2}}=\ln\left|x+\sqrt{x^2\pm a^2}\right|+C\).

### 二、基本积分方法

**1. 凑微分法（也称第一换元法）**

设 \(f(u)\) 连续，\(\varphi(x)\) 具有连续的一阶导数，则有公式：
\[
\int f[\varphi(x)]\varphi'(x)dx=\int f[\varphi(x)]d\varphi(x)\xrightarrow{\ \text{令 }\varphi(x)=u\ }\int f(u)du
\]
\[
\xrightarrow[\text{如果}]{}\ F(u)+C\xrightarrow[\text{则}]{}\ F(\varphi(x))+C
\]

**2. 换元积分法（也称第二换元法）**

设 \(f(x)\) 连续，\(x=\varphi(t)\) 具有连续导数 \(\varphi'(t)\)，且 \(\varphi'(t)\neq 0\)，则
\[
\int f(x)dx\xrightarrow{\ x=\varphi(t)\ }\left(\int f(\varphi(t))\varphi'(t)dt\right)_{t=\psi(x)}
\]
其中右边表示对 \(t\) 积分之后再以 \(x=\varphi(t)\) 的反函数 \(t=\psi(x)\) 代回成 \(x\) 的函数.` },
      { p: 109, md: R`**3. 常见的几种典型类型的换元法**

以下式子中，\(R(u,v)\) 表示 \(u,v\) 的有理函数.

（1）\(\int R(x,\sqrt{a^2-x^2})dx,\int R(x,\sqrt{x^2\pm a^2})dx\) 型，\(a>0\).

含 \(\sqrt{a^2-x^2}\)，令 \(x=a\sin t,dx=a\cos t\,dt\)，

含 \(\sqrt{x^2+a^2}\)，令 \(x=a\tan t,dx=a\sec^2 t\,dt\)，

含 \(\sqrt{x^2-a^2}\)，令 \(x=a\sec t,dx=a\sec t\tan t\,dt\).

（2）\(\int R(x,\sqrt[n]{ax+b},\sqrt[m]{ax+b})dx\) 型，\(a\neq 0\).

令 \(\sqrt[mn]{ax+b}=t,x=\frac{t^{mn}-b}{a},dx=\frac{mn}{a}t^{mn-1}dt\).

（3）\(\int R\left(x,\sqrt{\frac{ax+b}{cx+d}}\right)dx\) 型

令 \(\sqrt{\frac{ax+b}{cx+d}}=t,x=\frac{dt^2-b}{a-ct^2},dx=\frac{2(ad-bc)t}{(a-ct^2)^2}dt\). 其中设 \(ad-bc\neq 0\).

（4）\(\int R(\sin x,\cos x)dx\) 型

命 \(\tan\frac{x}{2}=t\)，则 \(\sin x=\frac{2t}{1+t^2},\cos x=\frac{1-t^2}{1+t^2},dx=\frac{2}{1+t^2}dt\).

此称万能代换，这样代换通常会产生复杂的计算，非到不得已时不用.

（图 1：三角代换的辅助直角三角形）

**例1** 设 \(f(x)=\begin{cases}x+1, & x\geqslant 0\\ \dfrac{e^{-x}}{2}+\dfrac{1}{2}, & x<0,\end{cases}\) 则 \(f\) 的一个原函数为

(A) \(F(x)=\begin{cases}\dfrac{x^2}{2}+x, & x\geqslant 0,\\[4pt] -\dfrac{e^{-x}}{2}, & x<0;\end{cases}\)

(B) \(F(x)=\begin{cases}\dfrac{x^2}{2}+x-\dfrac{1}{2}, & x\geqslant 0,\\[4pt] -\dfrac{e^{-x}}{2}+\dfrac{x}{2}, & x<0;\end{cases}\)

(C) \(F(x)=\begin{cases}\dfrac{x^2}{2}+x, & x\geqslant 0,\\[4pt] -\dfrac{e^{-x}}{2}+\dfrac{1}{2}, & x<0;\end{cases}\)

(D) \(F(x)=\begin{cases}\dfrac{x^2}{2}+x+1, & x\geqslant 0,\\[4pt] -\dfrac{e^{-x}}{2}+\dfrac{x}{2}, & x<0.\end{cases}\)

**【解】** 当 \(x\geqslant 0\) 时，\(f(x)\) 的原函数
\[
F(x)=\int f(x)dx=\int (x+1)dx=\frac{x^2}{2}+x+C_1
\]
当 \(x<0\) 时，
\[
F(x)=\int f(x)dx=\int\left(\frac{e^{-x}}{2}+\frac{1}{2}\right)dx=-\frac{e^{-x}}{2}+\frac{x}{2}+C_2
\]
\(F(x)\) 在 \(x=0\) 点连续，
\[
\lim_{x\to 0^+}F(x)=\lim_{x\to 0^-}F(x)
\]
\[
C_1=-\frac{1}{2}+C_2
\]
因此答案 (B) 正确.` },
      { p: 110, md: R`**【评注】** （1）分段函数分段积分，但在分段点，原函数可导，一定连续.

（2）可利用变限积分 \(F(x)=\int_0^x f(t)dt\).

（3）选择题用代入法验证.

**例2** 求 (1) \(\int\frac{dx}{x^2-a^2}\)； (2) \(\int\frac{\sin\sqrt{x}}{\sqrt{x}}dx\)；

(3) \(\int\frac{\sqrt{1+2\arctan x}}{1+x^2}dx\)； (4) \(\int\sqrt{a^2-x^2}dx\ (a>0)\)；

(5) \(\int\frac{2-x}{\sqrt{3+2x-x^2}}dx\).

**【解】** （1）\(\frac{1}{x^2-a^2}=\frac{1}{2a}\left(\frac{1}{x-a}-\frac{1}{x+a}\right)\)
\[
\int\frac{dx}{x^2-a^2}=\frac{1}{2a}\left(\int\frac{dx}{x-a}-\int\frac{dx}{x+a}\right)
\]
\[
=\frac{1}{2a}\left(\ln|x-a|-\ln|x+a|\right)+C=\frac{1}{2a}\ln\left|\frac{x-a}{x+a}\right|+C.
\]

（2）\(\int\frac{\sin\sqrt{x}}{\sqrt{x}}dx=2\int\sin\sqrt{x}\,d\sqrt{x}=-2\cos\sqrt{x}+C.\)

（3）\(\int\frac{\sqrt{1+2\arctan x}}{1+x^2}dx=\int\sqrt{1+2\arctan x}\,d(\arctan x)\)
\[
=\int\sqrt{1+2u}\,du\ (u=\arctan x)
\]
\[
=\frac{1}{2}\int\sqrt{1+2u}\,d(1+2u)=\frac{1}{3}(1+2u)^{\frac{3}{2}}+C
\]
\[
=\frac{1}{3}(1+2\arctan x)^{\frac{3}{2}}+C.
\]

（4）令 \(x=a\sin t\left(-\frac{\pi}{2}\leqslant t\leqslant\frac{\pi}{2}\right),dx=a\cos t\,dt\)
\[
\int\sqrt{a^2-x^2}dx=\int\sqrt{a^2(1-\sin^2 t)}\cdot a\cos t\,dt=a^2\int\cos^2 t\,dt
\]
\[
=a^2\int\frac{1+\cos 2t}{2}dt=\frac{a^2}{2}\left(t+\frac{\sin 2t}{2}\right)+C
\]
\[
=\frac{a^2}{2}\arcsin\frac{x}{a}+\frac{x}{2}\sqrt{a^2-x^2}+C.
\]

（5）\(\int\frac{2-x}{\sqrt{3+2x-x^2}}dx=\int\frac{2-x}{\sqrt{4-(x-1)^2}}dx=\int\frac{1-x+1}{\sqrt{4-(x-1)^2}}dx\)
\[
=\int\frac{1-x}{\sqrt{4-(x-1)^2}}dx+\int\frac{1}{\sqrt{4-(x-1)^2}}dx
\]
\[
=\sqrt{4-(x-1)^2}+\arcsin\frac{x-1}{2}+C.
\]

**例3** 求不定积分 \(\int\frac{1+\sin x}{1+\cos x}dx\).` },
      { p: 111, md: R`**【解】** 用万能代换，令 \(t=\tan\frac{x}{2}\)，则
\[
1+\sin x=1+\frac{2t}{1+t^2}=\frac{(1+t)^2}{1+t^2}
\]
\[
1+\cos x=1+\frac{1-t^2}{1+t^2}=\frac{2}{1+t^2}.
\]
故
\[
\int\frac{1+\sin x}{1+\cos x}dx=\int\frac{\dfrac{(1+t)^2}{1+t^2}}{\dfrac{2}{1+t^2}}\cdot\frac{2}{1+t^2}dt=\int\left(1+\frac{2t}{1+t^2}\right)dt
\]
\[
=t+\ln(1+t^2)+C=\tan\frac{x}{2}-2\ln\left|\cos\frac{x}{2}\right|+C.
\]

**【注】** 上面所用的变换 \(t=\tan\frac{x}{2}\) 对三角函数有理式的不定积分虽然总是有效的，但并不意味着在任何场合都是简便的.

**例4** 求 \(\int\frac{dx}{a^2\sin^2 x+b^2\cos^2 x}\ (ab\neq 0).\)

**【解】** 由于
\[
\int\frac{dx}{a^2\sin^2 x+b^2\cos^2 x}=\int\frac{\sec^2 x}{a^2\tan^2 x+b^2}dx=\int\frac{d(\tan x)}{a^2\tan^2 x+b^2}.
\]
故令 \(t=\tan x\)，就有
\[
\int\frac{dx}{a^2\sin^2 x+b^2\cos^2 x}=\int\frac{dt}{a^2t^2+b^2}=\frac{1}{a}\int\frac{d(at)}{(at)^2+b^2}
\]
\[
=\frac{1}{ab}\arctan\frac{at}{b}+C
\]
\[
=\frac{1}{ab}\arctan\left(\frac{a}{b}\tan x\right)+C.
\]

**【注】** 通常当被积函数是 \(\sin^2 x,\cos^2 x\) 及 \(\sin x\cos x\) 的有理式时，采用 \(t=\tan x\) 往往较为简便，其它特殊情形可因题而异，选择合适的变换.

**例5** 求 \(\int\sec^4 x\,dx.\)

**【解】** \(\int\sec^4 x\,dx=\int\sec^2 x\sec^2 x\,dx=\int\sec^2 x\,d(\tan x)\)
\[
=\int(1+\tan^2 x)d(\tan x)
\]
\[
=\frac{1}{3}\tan^3 x+\tan x+C.
\]

**例6** 求 \(\int\frac{1}{x}\sqrt{\frac{x+2}{x-2}}dx.\)

**【解】** 令 \(t=\sqrt{\frac{x+2}{x-2}}\)，则有 \(x=\frac{2(t^2+1)}{t^2-1},dx=\frac{-8t}{(t^2-1)^2}dt\)，` },
      { p: 112, md: R`\[
\int\frac{1}{x}\sqrt{\frac{x+2}{x-2}}dx=\int\frac{4t^2}{(1-t^2)(1+t^2)}dt
\]
\[
=\int\left(\frac{2}{1-t^2}-\frac{2}{1+t^2}\right)dt
\]
\[
=\ln\left|\frac{1+t}{1-t}\right|-2\arctan t+C
\]
\[
=\ln\left|\frac{1+\sqrt{(x+2)/(x-2)}}{1-\sqrt{(x+2)/(x-2)}}\right|-2\arctan\sqrt{\frac{x+2}{x-2}}+C.
\]

### 4. 定积分的换元积分法

**定理（定积分换元积分法）** 设 \(f(x)\) 在 \([a,b]\) 上连续；\(x=\varphi(t)\) 满足条件：\(a=\varphi(\alpha),b=\varphi(\beta)\)，并且当 \(t\) 在以 \(\alpha,\beta\) 为端点的闭区间 \(I\) 上变动时，\(a\leqslant\varphi(t)\leqslant b,\varphi'(t)\) 连续，则有定积分的换元积分公式
\[
\int_a^b f(x)dx=\int_\alpha^\beta f[\varphi(t)]\varphi'(t)dt.
\]

**【注】** （1）这里 \(t=\alpha,t=\beta\) 由关系 \(x=\varphi(t)\) 分别与 \(x=a,x=b\) 对应，\(\alpha\) 可能小于 \(\beta\)，也可能大于 \(\beta\).

（2）换元时，积分上、下限应跟着换，而不必像不定积分那样求出原函数后代回成原变量 \(x\).

（3）定积分换元积分法的定理与方法与不定积分的不一样.

**例7** \(\int_0^a\sqrt{a^2-x^2}dx=\underline{\qquad}.\)

**【解】** 用牛顿—莱布尼茨公式，将上、下限代入例2(4) 的不定积分中，就可得到答案.现在我们换一种方法，用定积分的变量代换法求此题答案.

作变量代换 \(x=a\sin t\). 上限 \(x=a\) 对应 \(t=\frac{\pi}{2}\)，下限 \(x=0\) 对应 \(t=0\)，故
\[
\int_0^a\sqrt{a^2-x^2}dx=\int_0^{\frac{\pi}{2}}a^2\cos^2 t\,dt=\frac{a^2}{2}\left(t+\frac{\sin 2t}{2}\right)\Big|_0^{\frac{\pi}{2}}=\frac{\pi}{4}a^2.
\]

**例8** 若 \(f(x)\) 为连续函数，则 \(\frac{d}{dx}\left(\int_0^x f(x-t)dt\right)=\underline{\qquad}.\)

**【解】** 作变量代换 \(u=x-t,du=-dt\)，上限 \(t=x\) 对应 \(u=0\)，下限 \(t=0\) 对应 \(u=x\)，故
\[
\int_0^x f(x-t)dt=\int_x^0 f(u)(-du)=\int_0^x f(u)du,
\]
\[
\frac{d}{dx}\left(\int_0^x f(x-t)dt\right)=\frac{d}{dx}\left(\int_0^x f(u)du\right)=f(x).
\]

### 5. 分部积分法

**定理（分部积分法）** 设 \(u(x),v(x)\) 均有连续导数，则
\[
\int u(x)v'(x)dx=u(x)v(x)-\int v(x)u'(x)dx
\]` },
      { p: 113, md: R`或
\[
\int u(x)\mathrm{d}[v(x)]=u(x)v(x)-\int v(x)\mathrm{d}[u(x)]
\]
以及
\[
\int_a^b u(x)v'(x)\mathrm{d}x=\left.u(x)v(x)\right|_a^b-\int_a^b v(x)u'(x)\mathrm{d}x
\]
或
\[
\int_a^b u(x)\mathrm{d}[v(x)]=\left.u(x)v(x)\right|_a^b-\int_a^b v(x)\mathrm{d}[u(x)]
\]

分部积分法的关键与特点是，将被积函数写成两函数之积，一为 \(u(x)\)，一为已求导的形式 \(v'(x)\). 使用此公式后，将 \(u(x)\) 转化为求导形式 \(u'(x)\)，而将 \(v'(x)\) 转化为其原函数 \(v(x)\). 可见选取 \(v'(x)\)(或 \(\mathrm{d}v(x)\)) 应能积分，这是原则.

**例9** 求
(1) \(\int\ln x\,\mathrm{d}x\); (2) \(\int x^2\sin x\,\mathrm{d}x\);
(3) \(\int_0^{\frac{\pi}{2}}e^x\sin x\,\mathrm{d}x\); (4) \(\int_0^1\frac{xe^x}{\sqrt{1+e^x}}\mathrm{d}x\).

**【解】** (1) 令 \(u(x)=\ln x,v(x)=x\)，
\[
\int\ln x\,\mathrm{d}x=\int u(x)v'(x)\,\mathrm{d}x=u(x)v(x)-\int v(x)\,\mathrm{d}[u(x)]
\]
\[
=x\ln x-\int x\cdot\frac{1}{x}\,\mathrm{d}x=x\ln x-x+C.
\]

(2)
\[
\int x^2\sin x\,\mathrm{d}x=-\int x^2\,\mathrm{d}(\cos x)=-x^2\cos x+\int\cos x\,\mathrm{d}(x^2)
\]
\[
=-x^2\cos x+2\int x\cos x\,\mathrm{d}x=-x^2\cos x+2\int x\,\mathrm{d}(\sin x)
\]
\[
=-x^2\cos x+2x\sin x-2\int\sin x\,\mathrm{d}x
\]
\[
=-x^2\cos x+2x\sin x+2\cos x+C.
\]

(3)
\[
\int_0^{\frac{\pi}{2}}e^x\sin x\,\mathrm{d}x=\int_0^{\frac{\pi}{2}}\sin x\,\mathrm{d}(e^x)=\left.e^x\sin x\right|_0^{\frac{\pi}{2}}-\int_0^{\frac{\pi}{2}}e^x\,\mathrm{d}(\sin x)
\]
\[
=e^{\frac{\pi}{2}}-\int_0^{\frac{\pi}{2}}e^x\cos x\,\mathrm{d}x=e^{\frac{\pi}{2}}-\int_0^{\frac{\pi}{2}}\cos x\,\mathrm{d}(e^x)
\]
\[
=e^{\frac{\pi}{2}}-\left(\left.e^x\cos x\right|_0^{\frac{\pi}{2}}+\int_0^{\frac{\pi}{2}}e^x\sin x\,\mathrm{d}x\right).
\]
所以
\[
2\int_0^{\frac{\pi}{2}}e^x\sin x\,\mathrm{d}x=e^{\frac{\pi}{2}}+1,
\]
\[
\int_0^{\frac{\pi}{2}}e^x\sin x\,\mathrm{d}x=\frac{1}{2}\left(e^{\frac{\pi}{2}}+1\right).
\]

(4) 令 \(\sqrt{1+e^x}=t\)，\(x=1\) 对应 \(t=\sqrt{1+\mathrm{e}}\)，\(x=0\) 对应 \(t=\sqrt{2}\).
故
\[
\int_0^1\frac{xe^x}{\sqrt{1+e^x}}\mathrm{d}x=\int_{\sqrt{2}}^{\sqrt{1+e}}2\ln(t^2-1)\,\mathrm{d}t=\left.2t\ln(t^2-1)\right|_{\sqrt{2}}^{\sqrt{1+e}}-2\int_{\sqrt{2}}^{\sqrt{1+e}}\frac{2t^2}{t^2-1}\,\mathrm{d}t
\]
\[
=2\sqrt{1+e}-2\int_{\sqrt{2}}^{\sqrt{1+e}}\left(2+\frac{2}{t^2-1}\right)\mathrm{d}t
\]
\[
=2\sqrt{1+e}-2\left.\left(2t+\ln\left|\frac{t-1}{t+1}\right|\right)\right|_{\sqrt{2}}^{\sqrt{1+e}}
\]` },
      { p: 114, md: R`\[
=4\sqrt{2}+2-2\sqrt{1+e}-4\ln(\sqrt{1+e}-1)+4\ln(\sqrt{2}-1).
\]

**【评注】** 分部积分可以用于函数本身复杂，但其导数相对简单的函数的积分，例如：\(\ln x,\arctan x,\arcsin x\) 等等，以及函数及其导数差不多的函数的积分，例如 \(e^x,\sin x,\cos x\).

**例10** 求 \(\int\frac{\arcsin e^x}{e^x}\mathrm{d}x\).

**【解】** 方法一 令 \(\arcsin e^x=t,x=\ln(\sin t),\mathrm{d}x=\cot t\,\mathrm{d}t\)，有
\[
\int\frac{\arcsin e^x}{e^x}\mathrm{d}x=\int\frac{t\cos t}{\sin^2 t}\mathrm{d}t=-\int t\,\mathrm{d}\left(\frac{1}{\sin t}\right)=-\frac{t}{\sin t}+\int\frac{1}{\sin t}\mathrm{d}t
\]
\[
=-\frac{t}{\sin t}+\ln|\csc t-\cot t|+C
\]
\[
=-e^{-x}\arcsin e^x+\ln\left|e^{-x}-\sqrt{e^{-2x}-1}\right|+C.
\]

方法二 令 \(e^x=t\)，有 \(x=\ln t,\mathrm{d}x=\frac{1}{t}\mathrm{d}t\)，
\[
\int\frac{\arcsin e^x}{e^x}\mathrm{d}x=\int\frac{\arcsin t}{t^2}\mathrm{d}t=-\int\arcsin t\,\mathrm{d}\left(\frac{1}{t}\right)
\]
\[
=-\frac{1}{t}\arcsin t+\int\frac{\mathrm{d}t}{t\sqrt{1-t^2}}
\]
\[
=-\frac{\arcsin t}{t}+\int\frac{\mathrm{d}t}{t^2\sqrt{\left(\frac{1}{t}\right)^2-1}}\quad(\text{因 }t=e^x>0)
\]
\[
=-\frac{\arcsin t}{t}-\int\frac{1}{\sqrt{\left(\frac{1}{t}\right)^2-1}}\mathrm{d}\left(\frac{1}{t}\right)
\]
\[
=-\frac{\arcsin t}{t}-\ln\left|\frac{1}{t}+\sqrt{\left(\frac{1}{t}\right)^2-1}\right|+C
\]
\[
=-e^{-x}\arcsin e^x-\ln\left|e^{-x}+\sqrt{e^{-2x}-1}\right|+C
\]
\[
(\text{或})=-e^{-x}\arcsin e^x+\ln\left|e^{-x}-\sqrt{e^{-2x}-1}\right|+C.
\]

方法三
\[
\int\frac{\arcsin e^x}{e^x}\mathrm{d}x=-\int\arcsin e^x\,\mathrm{d}\left(\frac{1}{e^x}\right)=-e^{-x}\arcsin e^x+\int e^{-x}\mathrm{d}(\arcsin e^x)
\]
\[
=-e^{-x}\arcsin e^x+\int\frac{1}{\sqrt{1-e^{2x}}}\mathrm{d}x
\]
\[
=-e^{-x}\arcsin e^x+\int\frac{1}{e^x\sqrt{e^{-2x}-1}}\mathrm{d}x
\]
\[
=-e^{-x}\arcsin e^x-\int\frac{1}{\sqrt{e^{-2x}-1}}\mathrm{d}(e^{-x})
\]
\[
=-e^{-x}\arcsin e^x-\ln\left|e^{-x}+\sqrt{e^{-2x}-1}\right|+C.
\]

**例11** 设 \(G'(x)=\arcsin(x-1)^2,G(0)=0\)，求 \(\int_0^1G(x)\mathrm{d}x\).

**【解】** 用分部积分，有
\[
\int_0^1G(x)\mathrm{d}x=\left.xG(x)\right|_0^1-\int_0^1xG'(x)\mathrm{d}x
\]` },
      { p: 115, md: R`\[
=G(1)-\int_0^1x\arcsin(x-1)^2\,\mathrm{d}x
\]
\[
=\int_0^1\arcsin(x-1)^2\,\mathrm{d}x-\int_0^1x\arcsin(x-1)^2\,\mathrm{d}x
\]
\[
=-\int_0^1(x-1)\arcsin(x-1)^2\,\mathrm{d}x
\]
\[
=-\frac{1}{2}\int_0^1\arcsin(x-1)^2\,\mathrm{d}\left[(x-1)^2\right]
\]
\[
=\frac{1}{2}\int_0^1\arcsin t\,\mathrm{d}t\quad(t=(x-1)^2)
\]
\[
=\frac{1}{2}\left(\left.t\arcsin t\right|_0^1-\int_0^1\frac{t}{\sqrt{1-t^2}}\mathrm{d}t\right)
\]
\[
=\frac{1}{2}\left(\frac{\pi}{2}-1\right)=\frac{\pi}{4}-\frac{1}{2}.
\]

### 常见的用分部积分的几种函数类型

① \(\int x^ne^x\mathrm{d}x,\int x^n\sin x\,\mathrm{d}x,\int x^n\cos x\,\mathrm{d}x\) 型，分别改写为 \(\int x^ne^x\mathrm{d}x=\int x^n\mathrm{d}(e^x)\)，
\[
\int x^n\sin x\,\mathrm{d}x=-\int x^n\mathrm{d}(\cos x),\quad\int x^n\cos x\,\mathrm{d}x=\int x^n\mathrm{d}(\sin x),
\]
使用分部积分公式即可.

② \(\int x^n\ln x\,\mathrm{d}x,\int x^n\arctan x\,\mathrm{d}x,\int x^n\arcsin x\,\mathrm{d}x\) 型，分别改写为
\[
\int x^n\ln x\,\mathrm{d}x=\frac{1}{n+1}\int\ln x\,\mathrm{d}(x^{n+1}),\quad\int x^n\arctan x\,\mathrm{d}x=\frac{1}{n+1}\int\arctan x\,\mathrm{d}(x^{n+1}),
\]
\[
\int x^n\arcsin x\,\mathrm{d}x=\frac{1}{n+1}\int\arcsin x\,\mathrm{d}(x^{n+1}),
\]
使用分部积分公式即可. 以上 ①② 中 \(n\) 均为正整数.

③ \(\int e^x\sin x\,\mathrm{d}x,\int e^x\cos x\,\mathrm{d}x\) 型，应连用两次，移项解方程可得.

必须指出，分部积分法的使用对象，远远不止这几种.

**例12** \(\int\frac{xe^{-x}}{(1+e^{-x})^2}\mathrm{d}x=\) ______.

**【解】**
\[
\int\frac{xe^{-x}}{(1+e^{-x})^2}\mathrm{d}x=\int x\,\mathrm{d}\left(\frac{1}{1+e^{-x}}\right)=\frac{x}{1+e^{-x}}-\int\frac{1}{1+e^{-x}}\mathrm{d}x
\]
\[
=\frac{x}{1+e^{-x}}-\int\frac{e^x}{1+e^x}\mathrm{d}x
\]
\[
=\frac{x}{1+e^{-x}}-\ln(1+e^x)+C.
\]

**例13** \(\int\cos(\ln x)\mathrm{d}x=\) ______.

**【解】** 令 \(t=\ln x\)，则 \(x=e^t,\mathrm{d}x=e^t\mathrm{d}t\)，
\[
\int\cos(\ln x)\mathrm{d}x=\int e^t\cos t\,\mathrm{d}t=\frac{e^t}{2}(\sin t+\cos t)+C
\]
\[
=\frac{x}{2}[\sin(\ln x)+\cos(\ln x)]+C.
\]` },
      { p: 116, md: R`**\*例14** 求 \(\int\frac{2x}{(x+1)(x^2+1)^2}\mathrm{d}x\).

**【解】**
\[
\frac{2x}{(x+1)(x^2+1)^2}=\frac{A}{x+1}+\frac{Bx+C}{x^2+1}+\frac{Dx+E}{(x^2+1)^2},\quad A,B,C,D,E\text{ 待定}.
\]
通分，比较分子多项式的系数，可解得
\[
A=C=-\frac{1}{2},\quad B=\frac{1}{2},\quad D=E=1,
\]
即
\[
\int\frac{2x}{(x+1)(x^2+1)^2}\mathrm{d}x=-\frac{1}{2}\int\frac{\mathrm{d}x}{x+1}+\frac{1}{2}\int\frac{x-1}{x^2+1}\mathrm{d}x+\int\frac{x+1}{(x^2+1)^2}\mathrm{d}x
\]
\[
=\frac{1}{4}\ln\frac{x^2+1}{(x+1)^2}+\frac{x-1}{2(x^2+1)}+C.
\]

**【评注】** 有理分式 \(R(x)=\frac{P(x)}{Q(x)}\)，其中 \(P(x)\) 和 \(Q(x)\) 是多项式，中学知识告诉我们，
\[
R(x)=P_1(x)+\frac{P_2(x)}{Q(x)}
\]
其中 \(P_1(x)\) 是多项式，\(P_2(x)\) 是次数低于 \(Q(x)\) 的多项式. 有理分式 \(\frac{P_2(x)}{Q(x)}\) 可以表示成一些最简有理分式的和(简称为有理分式的最简分解).

(i) \(Q(x)\) 的一次因子 \((x-a)\) 使得有理分式 \(\frac{P_2(x)}{Q(x)}\) 有 \(\frac{A}{x-a}\) 型的最简有理分式；

(ii) \(Q(x)\) 的二次因子 \(x^2+px+q\)(其中 \(p^2-4q<0\)) 使得有理分式 \(\frac{P_2(x)}{Q(x)}\) 有 \(\frac{Mx+N}{x^2+px+q}\) 型的最简有理分式；

(iii) \(Q(x)\) 的 \(k\) 重因子 \((x-a)^k\) 使得有理分式 \(\frac{P_2(x)}{Q(x)}\) 有 \(\frac{A_1}{x-a},\frac{A_2}{(x-a)^2},\cdots,\frac{A_k}{(x-a)^k}\) 型的最简有理分式；

(iv) \(Q(x)\) 的 \(k\) 重二次因子 \((x^2+px+q)^k\)(其中 \(p^2-4q<0\)) 使得有理分式 \(\frac{P_2(x)}{Q(x)}\) 有 \(\frac{M_1x+N_1}{x^2+px+q},\frac{M_2x+N_2}{(x^2+px+q)^2},\cdots,\frac{M_kx+N_k}{(x^2+px+q)^k}\) 型的最简有理分式.

\(p^2-4q<0\) 时，\(x^2+px+q=\left(x+\frac{p}{2}\right)^2+\frac{4q-p^2}{4}\)

因此上述三类最简有理分式可以化归为
\[
\frac{1}{x-a},\quad\frac{1}{(x-a)^m},\quad\frac{1}{x^2+a^2},\quad\frac{1}{(x^2+a^2)^m}
\]
的形式. 前三类显然可以用初等函数表示其不定积分，令 \(I_m=\int\frac{\mathrm{d}x}{(x^2+a^2)^m}\)，则由分部积分法，
\[
I_m=\frac{x}{2a^2(m-1)(x^2+a^2)^{m-1}}+\frac{2m-3}{2a^2(m-1)}I_{m-1},\quad m\ge 2\text{ 整数},
\]
这是递推公式，最终能推到 \(I_1=\frac{1}{a}\arctan\frac{x}{a}+C\).

**例15** 求不定积分 \(\int\frac{x^3+x^2+1}{x^2-1}\mathrm{d}x\).

* 数学三不要求.` },
      { p: 117, md: R`**【解】**
\[
\int\frac{x^3+x^2+1}{x^2-1}\mathrm{d}x=\int\left(x+1+\frac{x+2}{x^2-1}\right)\mathrm{d}x
\]
\[
=\frac{1}{2}x^2+x+\int\frac{x}{x^2-1}\mathrm{d}x+2\int\frac{1}{x^2-1}\mathrm{d}x
\]
\[
=\frac{1}{2}x^2+x+\frac{1}{2}\ln|x^2-1|+\ln\left|\frac{x-1}{x+1}\right|+C.
\]

**例16** 求不定积分 \(\int\frac{1}{x+x^9}\mathrm{d}x\).

**【解】** 方法一
\[
\int\frac{1}{x+x^9}\mathrm{d}x=\int\frac{1}{x(1+x^8)}\mathrm{d}x
\]
\[
=\int\frac{1}{x}\mathrm{d}x-\int\frac{x^7}{1+x^8}\mathrm{d}x=\ln|x|-\frac{1}{8}\ln(1+x^8)+C.
\]

方法二
\[
\int\frac{1}{x+x^9}\mathrm{d}x=\int\frac{1}{x(1+x^8)}\mathrm{d}x=\int\frac{x^7}{x^8(1+x^8)}\mathrm{d}x
\]
\[
=\frac{1}{8}\int\left(\frac{1}{x^8}-\frac{1}{1+x^8}\right)\mathrm{d}(x^8)
\]
\[
=\frac{1}{8}\ln\frac{x^8}{1+x^8}+C.
\]

方法三
\[
\int\frac{1}{x+x^9}\mathrm{d}x=\int\frac{1}{x^9(1+x^{-8})}\mathrm{d}x
\]
\[
=-\frac{1}{8}\int\frac{1}{1+x^{-8}}\mathrm{d}(x^{-8})=-\frac{1}{8}\ln(1+x^{-8})+C.
\]

### 6. 几个十分有用的定积分公式

(1) \(\int_0^a\sqrt{a^2-x^2}\,\mathrm{d}x=\frac{1}{4}\pi a^2,\quad\int_{-a}^a\sqrt{a^2-x^2}\,\mathrm{d}x=\frac{1}{2}\pi a^2\)(半圆面积).

(2) 设 \(f(x)\) 在 \([-a,a](a>0)\) 上是个连续的偶函数，则
\[
\int_{-a}^a f(x)\mathrm{d}x=2\int_0^a f(x)\mathrm{d}x
\]

(3) 设 \(f(x)\) 在 \([-a,a](a>0)\) 上是个连续的奇函数，则 \(\int_{-a}^a f(x)\mathrm{d}x=0\).

(4) 设 \(f(x)\) 在 \((-\infty,+\infty)\) 内是以 \(T\) 为周期的连续函数，则对于任意的常数 \(a\)，恒有
\[
\int_a^{a+T}f(x)\mathrm{d}x=\int_0^T f(x)\mathrm{d}x,\quad\int_a^{a+nT}f(x)\mathrm{d}x=n\int_0^T f(x)\mathrm{d}x\ (n\in\mathbf{N}).
\]

(5) 华里士公式：
\[
\int_0^{\frac{\pi}{2}}\sin^n x\,\mathrm{d}x=\int_0^{\frac{\pi}{2}}\cos^n x\,\mathrm{d}x=
\begin{cases}
\dfrac{n-1}{n}\cdot\dfrac{n-3}{n-2}\cdot\cdots\cdot\dfrac{1}{2}\cdot\dfrac{\pi}{2}, & \text{当 }n\text{ 为正偶数},I_0=\dfrac{\pi}{2}.\\[6pt]
\dfrac{n-1}{n}\cdot\dfrac{n-3}{n-2}\cdot\cdots\cdot\dfrac{2}{3}, & \text{当 }n\text{ 为大于 }1\text{ 的正奇数},I_1=1.
\end{cases}
\]

(6) \(\int_0^\pi xf(\sin x)\mathrm{d}x=\frac{\pi}{2}\int_0^\pi f(\sin x)\mathrm{d}x\)(其中 \(f(x)\) 连续).

**例17** (2001,数二) \(\int_{-\frac{\pi}{2}}^{\frac{\pi}{2}}(x^3+\sin^2x)\cos^2x\,\mathrm{d}x=\) ______.` },
    ],
    quiz: [{"q": "$\\int x e^{x^2}\\,dx=$", "options": ["$\\frac12e^{x^2}+C$", "$e^{x^2}+C$", "$2e^{x^2}+C$", "$xe^{x^2}+C$"], "answer": 0, "explain": "凑微分 $x\\,dx=\\frac12d(x^2)$。"}, {"q": "$\\int_0^1 x^2\\,dx=$", "options": ["$\\frac13$", "$\\frac12$", "$1$", "$\\frac23$"], "answer": 0, "explain": "$\\left.\\frac{x^3}{3}\\right|_0^1=\\frac13$。"}, {"q": "$\\int\\ln x\\,dx=$", "options": ["$x\\ln x-x+C$", "$\\frac{\\ln^2x}{2}+C$", "$x\\ln x+x+C$", "$\\frac1x+C$"], "answer": 0, "explain": "分部积分：$x\\ln x-\\int x\\cdot\\frac1x dx=x\\ln x-x+C$。"}, {"q": "$\\int_0^a\\sqrt{a^2-x^2}\\,dx=$", "options": ["$\\frac{\\pi a^2}{4}$", "$\\frac{\\pi a^2}{2}$", "$a^2$", "$\\frac{a^2}{2}$"], "answer": 0, "explain": "表示半径为 $a$ 的四分之一圆面积。"}]
  };
})();
