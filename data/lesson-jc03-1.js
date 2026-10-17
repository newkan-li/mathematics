window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["jc03_s0"] = {
    id: "jc03_s0",
    ch: "第三章 一元函数积分学",
    title: "第一节 不定积分与定积分的概念、性质",
    book: "李永乐《数学复习全书·基础篇》",
    pages: [103, 107],
    img: "assets/img/jichu",
    content: [
      { p: 103, md: R`# 第三章　一元函数积分学

## 本章考点

原函数和不定积分的概念　不定积分的基本性质　基本积分公式　定积分的概念和基本性质　定积分中值定理　积分上限的函数及其导数　牛顿—莱布尼茨（Newton—Leibniz）公式　不定积分和定积分的换元积分法与分部积分法　反常（广义）积分　定积分的应用（平面图形的面积、平面曲线的弧长、旋转体的体积及侧面积、平行截面面积为已知的立体体积、功、引力、压力、质心、形心等）函数的平均值.

（仅数学一、二）有理函数、三角函数的有理式和简单无理函数的积分

## 第一节　不定积分与定积分的概念、性质

### 一、原函数、不定积分和定积分

**定义**　设 \(F'(x)=f(x),x\in(a,b)\)，则称 \(F(x)\) 为 \(f(x)\) 在 \((a,b)\) 上的一个原函数. 为了方便，后面提到原函数时“在 \((a,b)\) 上”几个字省去.

若 \(F(x)\) 是 \(f(x)\) 的一个原函数，则 \(F(x)+C\) 是 \(f(x)\) 的全体原函数，并且 \(f(x)\) 的原函数必定是 \(F(x)+C\) 的形式.

\(f(x)\) 的原函数的一般表达式 \(F(x)+C\) 称为 \(f(x)\) 的不定积分，记成
\[
\int f(x)\,\mathrm{d}x=F(x)+C
\]
其中 \(F(x)\) 是 \(f(x)\) 的任意一个确定的原函数，\(C\) 是任意常数.

**【注】**　不定积分是所有原函数的集合，因此在计算过程中不要遗漏积分常数 \(C\).

**定理（不定积分的性质）**　以下均设被积函数 \(f(x)\)（或相应地 \(f'(x)\)）与 \(g(x)\) 在所讨论的区间上连续，则有

(1) \(\left(\int f(x)\,\mathrm{d}x\right)'=f(x);\ \mathrm{d}\int f(x)\,\mathrm{d}x=f(x)\,\mathrm{d}x.\)

(2) \(\int f'(x)\,\mathrm{d}x=f(x)+C;\ \int \mathrm{d}f(x)=f(x)+C.\)

(3) \(\int\bigl(f(x)\pm g(x)\bigr)\,\mathrm{d}x=\int f(x)\,\mathrm{d}x\pm\int g(x)\,\mathrm{d}x.\)

(4) \(\int kf(x)\,\mathrm{d}x=k\int f(x)\,\mathrm{d}x\)，常数 \(k\ne0\).

**定义（定积分）**　设 \(f(x)\) 在 \([a,b]\) 上有定义且有界，作下面 4 步：` },
      { p: 104, md: R`(1) 分割：在 \([a,b]\) 中插入 \(n-1\) 个分点 \(a=x_0<x_1<x_2<\cdots<x_{n-1}<x_n=b\). 将区间 \([a,b]\) 分成 \(n\) 个小区间 \([x_{i-1},x_i],i=1,2,\cdots,n\). 记 \(\Delta x_i=x_i-x_{i-1}\) 表示第 \(i\) 个小区间的长度.

(2) 近似：在每个小区间 \([x_{i-1},x_i]\) 上任取一点 \(\xi_i\)，作以 \(f(\xi_i)\) 为高、\([x_{i-1},x_i]\) 为底的小矩形.

(3) 求和：\(S_n=\sum\limits_{i=1}^n f(\xi_i)\Delta x_i\).

(4) 取极限：记 \(\lambda=\max\limits_{1\le i\le n}\{\Delta x_i\}\)，\(\lim\limits_{\lambda\to0}\sum\limits_{i=1}^n f(\xi_i)\Delta x_i\).

如果上述极限存在（与分法无关，与 \(\xi_i\) 的取法无关），则称 \(f(x)\) 在 \([a,b]\) 上可积，并称上述极限为 \(f(x)\) 在 \([a,b]\) 上的定积分，记为
\[
\int_a^b f(x)\,\mathrm{d}x=\lim_{\lambda\to0}\sum_{i=1}^n f(\xi_i)\Delta x_i.
\]

**说明：**　1. 定积分的几何意义. 对于 \([a,b]\) 上连续的函数 \(f(x)\)，当 \(f(x)\ge0,x\in[a,b]\)，定积分的几何意义是由曲线 \(y=f(x)\) 与直线 \(y=0,x=a,x=b\) 所围成的曲边梯形的面积；当 \(f(x)\le0,x\in[a,b]\)，定积分值是位于 \(x\) 轴下方的曲边梯形面积的相反数，对一般非定号的 \(f(x)\) 而言，定积分值则是曲边梯形正、负面积的代数和.

2. 定积分是积分和的极限，它的值只与被积函数 \(f(x)\) 和积分区间 \([a,b]\) 有关，而与积分变量所用的记号无关，即
\[
\int_a^b f(x)\,\mathrm{d}x=\int_a^b f(\theta)\,\mathrm{d}\theta=\int_a^b f(t)\,\mathrm{d}t.
\]

### 二、积分基本性质

**定理（定积分的性质）**　以下除特别声明者外，均设 \(f(x)\) 与 \(g(x)\) 在所讨论的区间上可积，则

(1) \(\int_a^b f(x)\,\mathrm{d}x=-\int_b^a f(x)\,\mathrm{d}x.\)

(2) \(\int_a^a f(x)\,\mathrm{d}x=0.\)

(3) \(\int_a^b\bigl[f(x)\pm g(x)\bigr]\,\mathrm{d}x=\int_a^b f(x)\,\mathrm{d}x\pm\int_a^b g(x)\,\mathrm{d}x.\)

(4) \(\int_a^b kf(x)\,\mathrm{d}x=k\int_a^b f(x)\,\mathrm{d}x\)，\(k\) 为常数.

(5) \(\int_a^b f(x)\,\mathrm{d}x=\int_a^c f(x)\,\mathrm{d}x+\int_c^b f(x)\,\mathrm{d}x.\)

(6) 若 \(f(x)\le g(x),a\le b\)，则 \(\int_a^b f(x)\,\mathrm{d}x\le\int_a^b g(x)\,\mathrm{d}x.\)

(7) 若 \(f(x)\) 与 \(g(x)\) 在区间 \([a,b]\) 上连续，\(f(x)\le g(x)\)，且至少存在点 \(x_1,a\le x_1\le b\)，使 \(f(x_1)<g(x_1)\)，则 \(\int_a^b f(x)\,\mathrm{d}x<\int_a^b g(x)\,\mathrm{d}x.\)

(8) 加强的积分中值定理：设 \(f(x)\) 在 \([a,b]\) 上连续，则至少存在一点 \(\xi\in(a,b)\) 使
\[
\int_a^b f(x)\,\mathrm{d}x=f(\xi)(b-a)
\]

**【注】**　性质（6）与（7）称为定积分的不等式性质，常用的是（7）.

**定理（定积分存在定理）**

(1) 设 \(f(x)\) 在 \([a,b]\) 上连续，则 \(\int_a^b f(x)\,\mathrm{d}x\) 存在.

(2) 设 \(f(x)\) 在 \([a,b]\) 上有界，且只有有限个间断点，则 \(\int_a^b f(x)\,\mathrm{d}x\) 存在.` },
      { p: 105, md: R`**【注】**　还有其他一些条件可保证定积分存在，但这些不在考试大纲之内.

**定理（原函数存在定理）**　设 \(f(x)\) 在 \([a,b]\) 上连续，则在 \([a,b]\) 上必存在原函数.

**【注】**　1. 如果 \(f(x)\) 在 \([a,b]\) 上有定义，但不连续，那么 \(f(x)\) 在 \([a,b]\) 上就不一定保证存在原函数.

2. 初等函数在其定义区间上连续，因此一定存在此区间上的原函数，但其原函数不一定为初等函数. 例如 \(\int e^{x^2}\,\mathrm{d}x,\int\sin x^2\,\mathrm{d}x,\int\frac{\sin x}{x}\,\mathrm{d}x,\int\frac{1}{\ln x}\,\mathrm{d}x\) 等存在，但都不能表示成初等函数.

3. 设 \(f(x)\) 不连续，则原函数存在与否与定积分存在与否可以各不相干.

**定义（变限积分）**　设 \(f(x)\) 在 \([a,b]\) 上可积，对 \(x\in[a,b],f(x)\) 在 \([a,x]\) 上可积. 于是
\[
\Phi(x)=\int_a^x f(t)\,\mathrm{d}t,x\in[a,b]
\]
定义了一个以 \(x\) 为自变量的函数，称为变上限的定积分.

类似，变下限的定积分 \(\Phi(x)=\int_x^b f(t)\,\mathrm{d}t,x\in[a,b]\).

变上限的定积分和变下限的定积分统称为变限积分.

**定理（变上限函数对上限变量求导，或称不定积分与定积分的关系）**　设 \(f(x)\) 在 \([a,b]\) 上连续，则
\[
\left(\int_a^x f(t)\,\mathrm{d}t\right)'_x=f(x),x\in[a,b].
\]
由此可知，\(\int_a^x f(t)\,\mathrm{d}t\) 是 \(f(x)\) 的一个原函数，从而
\[
\int f(x)\,\mathrm{d}x=\int_a^x f(t)\,\mathrm{d}t+C.
\]

**【注】**　如果 \(f(x)\) 在 \([a,b]\) 上除点 \(x=x_0\in(a,b)\) 外均连续，而在 \(x=x_0\) 处 \(f(x)\) 有跳跃间断点：
\[
\lim_{x\to x_0^-}f(x)=f(x_0^-),\quad \lim_{x\to x_0^+}f(x)=f(x_0^+),\quad f(x_0^-)\ne f(x_0^+)
\]
记
\[
F(x)=\int_c^x f(t)\,\mathrm{d}t
\]
不论 \(c\) 是否等于 \(x_0\)，均有结论：

① \(F(x)\) 在 \([a,b]\) 上连续；

② \(F'(x)=f(x)\)，当 \(x\in[a,b]\)，但 \(x\ne x_0\)；

③ \(F'_-(x_0)=f(x_0^-),F'_+(x_0)=f(x_0^+)\).

例如，设
\[
f(x)=\begin{cases}
\sin x,&x\le0,\\
e^x,&x>0,
\end{cases}
\]
记 \(F(x)=\int_{-\pi}^x f(t)\,\mathrm{d}t\)，由分段函数积分，

当 \(x\le0\) 时，\(F(x)=\int_{-\pi}^x\sin t\,\mathrm{d}t=-\cos x-1\)；

当 \(x>0\) 时，\(F(x)=\int_{-\pi}^0\sin t\,\mathrm{d}t+\int_0^x e^t\,\mathrm{d}t=-2+e^x-1=e^x-3\).

此 \(F(x)\) 满足上述所指出的三条结论.

将来在考试中做选择题时若遇到这种情形，可直接套用本结论.

**定理（牛顿—莱布尼茨定理）**　设 \(f(x)\) 在 \([a,b]\) 上连续，\(F(x)\) 是 \(f(x)\) 的一个原函数，则
\[
\int_a^b f(x)\,\mathrm{d}x=F(x)\Big|_a^b=F(b)-F(a)
\]` },
      { p: 106, md: R`**例1**　下列等式中，正确的是

(A) \(\int f'(x)\,\mathrm{d}x=f(x)\).　　(B) \(\frac{\mathrm{d}}{\mathrm{d}x}\left(\int f(x)\,\mathrm{d}x\right)=f(x)+C\).

(C) \(\int \mathrm{d}f(x)=f(x)\).　　(D) \(\mathrm{d}\left(\int f(x)\,\mathrm{d}x\right)=f(x)\,\mathrm{d}x\).

**【解】**　（D）是正确的.（A）（B）（C）正确的等式分别为
\[
\int f'(x)\,\mathrm{d}x=f(x)+C,\quad \frac{\mathrm{d}}{\mathrm{d}x}\left(\int f(x)\,\mathrm{d}x\right)=f(x),\quad \int \mathrm{d}f(x)=f(x)+C.
\]

**例2**　若 \(f(x)\) 的导函数是 \(\cos x\)，则 \(f(x)\) 的一个原函数为

(A) \(1+\sin x\).　　(B) \(1-\sin x\).　　(C) \(1+\cos x\).　　(D) \(1-\cos x\).

**【解】**　（D）是正确的.

由已知条件知 \(f'(x)=\cos x\)，从而 \(f(x)=\sin x+C_1\). 于是 \(f(x)\) 的所有原函数为
\[
\int f(x)\,\mathrm{d}x=-\cos x+C_1x+C_2.
\]
令 \(C_1=0,C_2=1\)，则 \(f(x)\) 的一个原函数为 \(1-\cos x\).

**例3**　设 \(I_1=\int_0^{\frac{\pi}{2}}\sin(\sin x)\,\mathrm{d}x,I_2=\int_0^{\frac{\pi}{2}}\cos(\sin x)\,\mathrm{d}x\)，则 \(I_1,I_2\) 的大小关系是
\(\underline{\qquad}\).

**【解】**　\(x\in\left(0,\frac{\pi}{2}\right],\sin x<x\)，而 \(\sin x\) 单调增，故
\[
\sin(\sin x)<\sin x,x\in\left(0,\frac{\pi}{2}\right]
\]
\[
I_1<\int_0^{\frac{\pi}{2}}\sin x\,\mathrm{d}x=1
\]
另外，\(\cos x\) 单调减，\(\cos(\sin x)>\cos x,x\in\left(0,\frac{\pi}{2}\right]\)，
\[
I_2>\int_0^{\frac{\pi}{2}}\cos x\,\mathrm{d}x=1
\]
因此 \(I_1<I_2\).

**例4**　设 \(F(x)=\int_x^{x+2\pi}e^{\sin t}\sin t\,\mathrm{d}t\). 则 \(F(x)\)

(A) 为正常数.　　(B) 为负常数.　　(C) 恒为零.　　(D) 不为常数.

**【解】**　方法一　（A）是正确的.

由于 \(e^{\sin t}\sin t\) 为以 \(2\pi\) 为周期的函数，则 \(I=\int_x^{x+2\pi}e^{\sin t}\sin t\,\mathrm{d}t=\int_0^{2\pi}e^{\sin t}\sin t\,\mathrm{d}t\) 为常数.

由
\[
\frac{\mathrm{d}}{\mathrm{d}x}\int_x^{x+2\pi}e^{\sin t}\sin t\,\mathrm{d}t=e^{\sin(x+2\pi)}\sin(x+2\pi)-e^{\sin x}\sin x\equiv0,
\]
则 \(I\equiv C\).
\[
I=I(0)=\int_0^{2\pi}e^{\sin t}\sin t\,\mathrm{d}t=-\int_0^{2\pi}e^{\sin t}\,\mathrm{d}\cos t
\]
\[
=-\cos t\,e^{\sin t}\Big|_0^{2\pi}+\int_0^{2\pi}\cos^2t\,e^{\sin t}\,\mathrm{d}t
\]` },
      { p: 107, md: R`\[
=\int_0^{2\pi}\cos^2t\,e^{\sin t}\,\mathrm{d}t>0
\]
则 \(I\) 为正常数.

方法二　由上有 \(F(x)=F(0)=\int_0^{2\pi}e^{\sin t}\sin t\,\mathrm{d}t\)，拆分积分区间
\[
F(x)=\int_0^\pi e^{\sin t}\sin t\,\mathrm{d}t+\int_\pi^{2\pi}e^{\sin t}\sin t\,\mathrm{d}t
\]
而
\[
\int_\pi^{2\pi}e^{\sin t}\sin t\,\mathrm{d}t
\xrightarrow{t-\pi=u}
-\int_0^\pi e^{-\sin u}\sin u\,\mathrm{d}u
=-\int_0^\pi e^{-\sin t}\sin t\,\mathrm{d}t,
\]
所以
\[
F(x)=\int_0^\pi\left(e^{\sin t}-e^{-\sin t}\right)\sin t\,\mathrm{d}t
=\int_0^\pi e^{-\sin t}\left(e^{2\sin t}-1\right)\sin t\,\mathrm{d}t>0.
\]

**例5**　

\[
\lim_{n\to\infty}\sum_{k=1}^n\frac{1}{n+k}=\underline{\qquad}.
\]

**【解】**　

\[
\lim_{n\to\infty}\sum_{k=1}^n\frac{1}{n+k}
=\lim_{n\to\infty}\sum_{k=1}^n\frac{1}{1+\frac{k}{n}}\cdot\frac{1}{n}
=\int_0^1\frac{1}{1+x}\,\mathrm{d}x.
\]

**【评注】**　（1）定积分的定义往往可用于求一些特殊和式的极限.

（2）\(\int_0^1\frac{\mathrm{d}x}{1+x}\) 的计算在后面讲到.

**例6**　（2021，数学一、二）函数 \(f(x)\) 在 \([0,1]\) 上连续，则 \(\int_0^1 f(x)\,\mathrm{d}x=\)

(A) \(\lim_{n\to\infty}\sum\limits_{k=1}^n f\left(\frac{2k-1}{2n}\right)\frac{1}{2n}\).　　(B) \(\lim_{n\to\infty}\sum\limits_{k=1}^n f\left(\frac{2k-1}{2n}\right)\frac{1}{n}\).

(C) \(\lim_{n\to\infty}\sum\limits_{k=1}^{2n} f\left(\frac{k-1}{2n}\right)\frac{1}{n}\).　　(D) \(\lim_{n\to\infty}\sum\limits_{k=1}^{2n} f\left(\frac{k}{2n}\right)\frac{2}{n}\).

**【解】**　将区间 \([0,1]\) \(n\) 等分，第 \(k\) 个小区间为 \(\left[\frac{k-1}{n},\frac{k}{n}\right](k=1,2,\cdots,n)\)，取 \(\xi_k\) 为区间 \(\left[\frac{k-1}{n},\frac{k}{n}\right]\) 的中点，即
\[
\xi_k=\frac{\frac{k-1}{n}+\frac{k}{n}}{2}=\frac{2k-1}{2n},
\]
由定积分的定义
\[
\int_0^1 f(x)\,\mathrm{d}x=\lim_{n\to\infty}\sum_{k=1}^n f\left(\frac{2k-1}{2n}\right)\frac{1}{n}.
\]
答案选（B）.

**例7**　判断下列函数在区间 \((-\infty,+\infty)\) 上是否存在原函数.

(1) \(f(x)=\begin{cases}x^2\sin\dfrac{1}{x},&x\ne0,\\[4pt]0,&x=0;\end{cases}\)

(2) \(g(x)=\begin{cases}2x\sin\dfrac{1}{x}-\cos\dfrac{1}{x},&x\ne0,\\[4pt]0,&x=0,\end{cases}\)

(3) \(h(x)=\operatorname{sgn}x=\begin{cases}-1,&x<0,\\0,&x=0,\\1,&x>0.\end{cases}\)

**【解】**　（1）函数 \(f(x)\) 在区间 \((-\infty,+\infty)\) 上是连续的，一定存在原函数.

（2）可看出，（1）中的 \(f(x)\) 是 \(g(x)\) 的原函数.` },
    ],
    quiz: [{"q": "若 $F'(x)=f(x)$，则 $\\int f(x)\\,dx=$", "options": ["$F(x)$", "$F(x)+C$", "$f(x)+C$", "$F'(x)+C$"], "answer": 1, "explain": "不定积分是全体原函数，须加任意常数 $C$。"}, {"q": "$\\frac{d}{dx}\\int_a^x f(t)\\,dt=$", "options": ["$f(x)$", "$f(x)-f(a)$", "$f'(x)$", "$0$"], "answer": 0, "explain": "变上限积分求导得被积函数 $f(x)$。"}, {"q": "设 $f(x)$ 为奇函数，则 $\\int_{-a}^{a}f(x)\\,dx=$", "options": ["$0$", "$2\\int_0^a f(x)dx$", "$1$", "$2f(a)$"], "answer": 0, "explain": "奇函数在对称区间上积分为 0。"}, {"q": "$\\int_a^b f(x)\\,dx$ 与 $\\int_b^a f(x)\\,dx$ 的关系是", "options": ["相等", "互为相反数", "前者是后者两倍", "无法确定"], "answer": 1, "explain": "交换积分上下限，积分值变号。"}]
  };
})();
