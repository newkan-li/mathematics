window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["jc03_s4"] = {
    id: "jc03_s4",
    ch: "第三章 一元函数积分学",
    title: "第五节 定积分的综合题",
    book: "李永乐《数学复习全书·基础篇》",
    pages: [126, 128],
    img: "assets/img/jichu",
    content: [
      { p: 126, md: R`**【解】**　\[V=\pi\int_0^{2\pi}y^2\,\mathrm{d}x=\pi\int_0^{2\pi}y^2(t)x'(t)\,\mathrm{d}t=\pi\int_0^{2\pi}a^3(1-\cos t)^3\,\mathrm{d}t=5\pi^2a^3.\]

**例5**　求心形线 \(r=a(1+\cos\theta)(a>0,\theta\in[0,2\pi])\) 绕 \(x\) 轴旋转一周得到的旋转体表面积.

**【解】**　\[S=2\pi\int_0^\pi r(\theta)\sin\theta\cdot\sqrt{[r(\theta)\cos\theta]'^2+[r(\theta)\sin\theta]'^2}\,\mathrm{d}\theta\]
\[=2\pi\int_0^\pi a(1+\cos\theta)\sin\theta\cdot\sqrt{r^2(\theta)+[r'(\theta)]^2}\,\mathrm{d}\theta\]
\[=2\pi\int_0^\pi a(1+\cos\theta)\sin\theta\cdot 2a\cos\frac{\theta}{2}\,\mathrm{d}\theta\]
\[=4a^2\pi\int_0^\pi(1+\cos\theta)\sin\theta\cos\frac{\theta}{2}\,\mathrm{d}\theta=\frac{32}{5}a^2\pi.\]

**例6**　一容器的内侧是由图中曲线绕 \(y\) 轴旋转一周而成的曲面，该曲线由 \(x^2+y^2=2y\left(y\ge\dfrac{1}{2}\right)\) 与 \(x^2+y^2=1\left(y\le\dfrac{1}{2}\right)\) 连接而成.

（1）求容器的容积；

（2）若将容器内盛满的水从容器顶部全部抽出，至少需要做多少功？（长度单位：m，重力加速度为 \(g\ \mathrm{m/s^2}\)，水的密度为 \(10^3\ \mathrm{kg/m^3}\)）

**【解】**　（1）由对称性，所求的容积为
\[V=2\pi\int_{-1}^{\frac{1}{2}}x^2\,\mathrm{d}y=2\pi\int_{-1}^{\frac{1}{2}}(1-y^2)\,\mathrm{d}y=\frac{9\pi}{4},\]
即该容器的容积为 \(\dfrac{9\pi}{4}\ \mathrm{m^3}\).

（2）所求的功为
\[W=10^3\int_{-1}^{\frac{1}{2}}\pi(1-y^2)(2-y)g\,\mathrm{d}y+10^3\int_{\frac{1}{2}}^{2}\pi(2y-y^2)(2-y)g\,\mathrm{d}y\]
\[=10^3\pi g\left[\int_{-1}^{\frac{1}{2}}(2-y-2y^2+y^3)\,\mathrm{d}y+\int_{\frac{1}{2}}^{2}(4y-4y^2+y^3)\,\mathrm{d}y\right]\]
\[=\frac{27\times 10^3}{8}\pi g.\]
即所求的功为 \(\dfrac{27\times 10^3}{8}\pi g\ \mathrm{J}\).

（图 3）

## 第五节　定积分的综合题

一元函数的积分学的基本概念及重要定理、方法和公式，在前面都已介绍过了，而涉及的考题范围十分广泛，有

1. 讨论变限积分所定义的函数的极限、导数、奇偶性、周期性、单调性，或求被积函数；

2. 讨论定积分或变限积分的不等式，或者定积分、变限积分的零点问题.

下面举几个例子，例子所讲到的方法要有足够的重视，熟练掌握有关的方法.` },
      { p: 127, md: R`**例1**　设 \(f(x)\) 在 \((-\infty,+\infty)\) 上连续，\(f(x)\ne 0\). 并设
\[F(x)=\int_{-1}^{1}|x-\sin t|f(t)\,\mathrm{d}t\]

下列命题

① 若 \(f(x)\) 为奇函数，则 \(F(x)\) 也是奇函数.

② 若 \(f(x)\) 为奇函数，则 \(F(x)\) 是偶函数.

③ 若 \(f(x)\) 为偶函数，则 \(F(x)\) 也是偶函数.

④ 若 \(f(x)\) 为偶函数，则 \(F(x)\) 是奇函数.

正确的是

（A）①②.　　（B）③④.　　（C）①③.　　（D）②④.

**【解】**　按照奇偶性的定义去讨论，在讨论中要用到积分变量变换.
\[F(-x)=\int_{-1}^{1}|-x-\sin t|f(t)\,\mathrm{d}t=\int_{-1}^{1}|x+\sin t|f(t)\,\mathrm{d}t\]
\[\stackrel{t=-u}{=}\int_{1}^{-1}|-x+\sin u|f(-u)(-\mathrm{d}u)=\int_{-1}^{1}|x-\sin u|f(-u)\,\mathrm{d}u\]

即 \(F(x)\) 的奇偶性与 \(f(x)\) 的奇偶性相同. 由此可见，若 \(f(u)\) 为奇函数，则 \(f(-u)=-f(u)\)，从而 \(F(-x)=-F(x)\)；若 \(f(u)\) 为偶函数，则 \(f(-u)=f(u)\)，从而 \(F(-x)=F(x)\)，故 ①、③ 正确. 选（C）.

**例2**　\(\lim\limits_{n\to\infty}\int_0^1\dfrac{x^n}{1+x}\,\mathrm{d}x=\underline{\qquad\qquad}\).

**【解】**　应填 0.

作变量代换 \(1+x=u\) 去积分，虽然可将积分做出来，但很麻烦，此法不可取. 将 \(\dfrac{x^n}{1+x}\) 放大、缩小，再用夹逼准则处理较方便.
\[0\le\frac{x^n}{1+x}\le x^n,\quad \text{当 }0\le x\le 1\]
从而有
\[0\le\int_0^1\frac{x^n}{1+x}\,\mathrm{d}x\le\int_0^1 x^n\,\mathrm{d}x=\frac{1}{n+1}\]
命 \(n\to\infty\)，由夹逼准则知 \(\lim\limits_{n\to\infty}\int_0^1\dfrac{x^n}{1+x}\,\mathrm{d}x=0\).

**【评注】**　下面这个做法是错误的：由积分中值定理，有
\[\int_0^1\frac{x^n}{1+x}\,\mathrm{d}x=\frac{\xi^n}{1+\xi},\quad 0<\xi<1\]
于是
\[\lim_{n\to\infty}\int_0^1\frac{x^n}{1+x}\,\mathrm{d}x=\lim_{n\to\infty}\frac{\xi^n}{1+\xi}=0\]

错误的原因　这里的 \(\xi\) 与 \(n\) 有关，应写成 \(\xi_n\)，虽然 \(0<\xi_n<1\)，但 \(\lim\limits_{n\to\infty}\xi_n\) 是否为 0，要证明它正确是麻烦的，因为也许 \(\lim\limits_{n\to\infty}\xi_n=1\). 做填空题时虽然见不到解题的方法，但是这种做法是错的，应该指正.` },
      { p: 128, md: R`**例3**　设 \(y=f(x)\) 在 \([0,1]\) 上连续，且 \(f(x)>0\).

（1）试证明：存在 \(\xi\in(0,1)\)，使得在区间 \([0,\xi]\) 上以 \(f(\xi)\) 为高的矩形面积等于在区间 \([\xi,1]\) 上以 \(y=f(x)\) 为曲边的曲边梯形的面积；

（2）若又设 \(f(x)\) 在 \((0,1)\) 内可导，且 \(f'(x)>-\dfrac{2f(x)}{x}\)，则（1）中的 \(\xi\) 是唯一的.

**【证】**　（1）由题意，要去证
\[\varphi(x)=xf(x)-\int_x^1 f(t)\,\mathrm{d}t\]
在 \((0,1)\) 内存在零点.

**方法一**　用连续函数零点定理，有
\[\varphi(0)=-\int_0^1 f(t)\,\mathrm{d}t<0,\quad \varphi(1)=f(1)>0.\]
所以存在 \(\xi\in(0,1)\)，使 \(\varphi(\xi)=0\).

**方法二**　用罗尔定理. 引入
\[F(x)=\int_x^1 f(t)\,\mathrm{d}t,\]
有 \(F'(x)=-f(x)\)，于是
\[\varphi(x)=-xF'(x)-F(x)=-[xF(x)]'.\]
考虑函数
\[g(x)=xF(x),\]
有 \(g(0)=0\)，\(g(1)=F(1)=0\)，\(g(x)\) 在 \([0,1]\) 上连续，\((0,1)\) 内可导，由罗尔定理知，存在 \(\xi\in(0,1)\) 使 \(g'(\xi)=0\)，即 \(\varphi(\xi)=0\).（1）证毕.

（2）为证 \(\varphi(x)\) 的零点唯一存在，由（1）已证存在，所以以下只要证至多一个，为证此，只要证 \(\varphi(x)\) 在 \((0,1)\) 内严格单调即可. 由
\[\varphi'(x)=\left[xf(x)-\int_x^1 f(t)\,\mathrm{d}t\right]'=xf'(x)+f(x)+f(x)\]
\[=xf'(x)+2f(x)>0,\]
证毕.

**【评注】**　要证 \(xf(x)-\int_x^1 f(t)\,\mathrm{d}t\) 存在零点，不要以为式子中未见导数，一定不能用罗尔定理，这种片面理解是不对的. 正如上所见，引入 \(F(x)=\int_x^1 f(t)\,\mathrm{d}t\) 之后，\(\varphi(x)\) 中可出现导数（\(F(x)\) 的导数），可用罗尔定理来处理.` },
    ],
    quiz: [{"q": "$\\lim_{n\\to\\infty}\\int_0^1\\frac{x^n}{1+x}\\,dx=$", "options": ["$0$", "$1$", "$\\frac12$", "$\\ln2$"], "answer": 0, "explain": "$0\\le\\frac{x^n}{1+x}\\le x^n$，而 $\\int_0^1x^ndx=\\frac1{n+1}\\to0$，夹逼得 0。"}, {"q": "若 $F(x)=\\int_0^x f(t)dt$，则 $F'(x)=$", "options": ["$f(x)$", "$f(0)$", "$f(x)-f(0)$", "$\\int_0^x f'(t)dt$"], "answer": 0, "explain": "变上限积分求导。"}, {"q": "积分中值定理：若 $f$ 在 $[a,b]$ 连续，则存在 $\\xi\\in[a,b]$ 使", "options": ["$\\int_a^b f(x)dx=f(\\xi)(b-a)$", "$\\int_a^b f(x)dx=f(\\xi)$", "$f(\\xi)=0$", "$\\int_a^b f(x)dx=f'(\\xi)(b-a)$"], "answer": 0, "explain": "积分中值定理的结论。"}]
  };
})();
