window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["jc03_s3"] = {
    id: "jc03_s3",
    ch: "第三章 一元函数积分学",
    title: "第四节 定积分的应用",
    book: "李永乐《数学复习全书·基础篇》",
    pages: [123, 125],
    img: "assets/img/jichu",
    content: [
      { p: 123, md: R`## \*第四节　定积分的应用

### 一、基本方法

定积分（包括以后的二重、三重积分等，仅是定义域不同）应用的关键在于微元法.

设所求的量 \(F\) 依赖于某区间 \([a,b]\) 以及在此区间上定义的某函数 \(f(x)\)，且满足：

（1）当 \(f(x)\) 为常数 \(C\) 时，\(F=C\cdot(b-a)\)；

（2）当将区间 \([a,b]\) 分为一些 \(\Delta x\) 之和时，量 \(F\) 也被分割为相应的一些 \(\Delta F\) 之和，即 \(F\) 具有可加性.

将 \(f(x)\) 在小区间 \([x,x+\Delta x]\) 上视为常量，于是
\[\Delta F \approx f(x)\Delta x \tag{1}\]

这个近似式严格地说是
\[\Delta F = f(x)\Delta x + o(\Delta x) \tag{2}\]

于是
\[\mathrm{d}F = f(x)\mathrm{d}x \tag{3}\]
\[F=\int_a^b f(x)\,\mathrm{d}x\]

建立式（1）或式（2）常称为取微元，式（3）称为 \(F\) 的微元，这是关键. 取好微元，再自 \(a\) 到 \(b\) 积分便得 \(F\).

**【注】**　在用定积分求面积、体积、平均值、表面积、弧长、功、引力、压力等问题时，常常会利用微元法思想.

### 二、重要几何公式与物理应用

#### 1. 平面图形面积

（1）曲线 \(y=y_2(x)\) 与 \(y=y_1(x)\)（\(y_2(x)\ge y_1(x)\)）及 \(x=a\)，\(x=b\) 围成的平面图形的面积
\[S=\int_a^b (y_2(x)-y_1(x))\,\mathrm{d}x\]

（2）曲线 \(x=x_2(y)\) 与 \(x=x_1(y)\)（\(x_2(y)\ge x_1(y)\)）及 \(y=c\)，\(y=d\) 围成的平面图形的面积
\[S=\int_c^d (x_2(y)-x_1(y))\,\mathrm{d}y\]

（3）极坐标曲线 \(r=r(\theta)\) 介于两射线 \(\theta=\alpha\) 与 \(\theta=\beta\)（\(0<\beta-\alpha\le 2\pi\)）之间的曲边扇形的面积
\[S=\frac{1}{2}\int_\alpha^\beta r^2(\theta)\,\mathrm{d}\theta\]

（4）由参数方程 \(\begin{cases}x=x(t),\\ y=y(t),\end{cases}\alpha\le t\le\beta\) 所围成平面图形的面积为
\[S=\int_\alpha^\beta |y(t)x'(t)|\,\mathrm{d}t \quad \text{或}\quad S=\int_\alpha^\beta |x(t)y'(t)|\,\mathrm{d}t\]

---

\* 数学三只要求会计算平面图形的面积、旋转体的体积和函数的平均值.` },
      { p: 124, md: R`### 2. 旋转体体积

（1）曲线 \(y=y(x)\) 与 \(x=a\)，\(x=b\)，\(x\) 轴围成的曲边梯形绕 \(x\) 轴旋转一周所成的旋转体体积
\[V=\pi\int_a^b y^2(x)\,\mathrm{d}x,\quad a<b\]

绕 \(y\) 轴旋转一周所得旋转体体积为
\[V=2\pi\int_a^b xy(x)\,\mathrm{d}x,\quad (y(x)\ge 0,\ b\ge a\ge 0).\]

（2）曲线 \(y=y_2(x)\)，\(y=y_1(x)\)，\(x=a\)，\(x=b\)（\(y_2(x)\ge y_1(x)\ge 0\)）围成的图形绕 \(x\) 轴旋转一周所成的旋转体体积
\[V=\pi\int_a^b \left[y_2^2(x)-y_1^2(x)\right]\mathrm{d}x,\quad a<b\]

（3）曲线 \(y=y_2(x)\)，\(y=y_1(x)\)，\(x=a\)，\(x=b\)（\(b>a\ge 0\)，\(y_2(x)\ge y_1(x)\)）围成的图形绕 \(y\) 轴旋转一周所成的旋转体体积
\[V=2\pi\int_a^b x\left(y_2(x)-y_1(x)\right)\mathrm{d}x\]

### 3. 函数的平均值

设 \(x\in[a,b]\)，函数 \(f(x)\) 在 \([a,b]\) 上的平均值为
\[\bar f=\frac{1}{b-a}\int_a^b f(x)\,\mathrm{d}x\]

### 4. 在区间 \([a,b]\) 上平行截面面积 \(S(x)\) 为已知的立体体积
\[V=\int_a^b S(x)\,\mathrm{d}x,\quad a<b\]

### 5. 平面曲线的弧长

（1）参数方程曲线 \(\begin{cases}x=x(t),\\ y=y(t),\end{cases}\alpha\le t\le\beta\) 的弧长（其中 \(x'(t)\) 与 \(y'(t)\) 均连续，且不同时为零）
\[s=\int_\alpha^\beta \sqrt{x'^2(t)+y'^2(t)}\,\mathrm{d}t.\]

（2）直角坐标 \(y=y(x)\)，\(a\le x\le b\) 的弧长（其中 \(y'(x)\) 连续）
\[s=\int_a^b \sqrt{1+y'^2(x)}\,\mathrm{d}x.\]

（3）极坐标曲线 \(r=r(\theta)\)，\(\alpha\le\theta\le\beta\) 的弧长（其中 \(r(\theta)\)，\(r'(\theta)\) 连续，且不同时为零）
\[s=\int_\alpha^\beta \sqrt{r^2(\theta)+r'^2(\theta)}\,\mathrm{d}\theta.\]

### 6. 旋转曲面面积

在区间 \([a,b]\) 上的曲线 \(y=f(x)\) 的弧段绕 \(x\) 轴旋转一周所成的旋转曲面面积
\[S=2\pi\int_a^b |y|\sqrt{1+f'^2(x)}\,\mathrm{d}x,\quad a<b.\]

**【注】**　（1）若该曲线由参数方程 \(x=x(t)\)，\(y=y(t)\)，\(\alpha\le t\le\beta\) 给出，且 \(x'(t)\ne 0\). 则将式中的 \(y\) 用 \(y(t)\) 代替，\(\sqrt{1+f'^2(x)}\,\mathrm{d}x\) 用 \(\sqrt{x'^2(t)+y'^2(t)}\,\mathrm{d}t\) 代替，上、下限为 \(t\) 的上、下限：从 \(t=\alpha\) 至 \(t=\beta\) 即可；` },
      { p: 125, md: R`\[S=2\pi\int_\alpha^\beta |y(t)|\sqrt{x'^2(t)+y'^2(t)}\,\mathrm{d}t.\]

（2）由曲线 \(r=r(\theta)\)（\(0\le\alpha\le\theta\le\beta\le\pi\)）绕极轴旋转一周所生成的旋转面的侧面积为
\[S=2\pi\int_\alpha^\beta r(\theta)\sqrt{r^2(\theta)+r'^2(\theta)}\sin\theta\,\mathrm{d}\theta.\]

7. 变力做功

8. 液体静压力

9. 引力

10. 物体的质心（形心）

> 熟悉相关的物理知识和微元法思想.
> 强化阶段结合具体例题来掌握.

**例1**　求曲线 \(\begin{cases}x=\dfrac{c^2}{a}\cos^3 t,\\[4pt] y=\dfrac{c^2}{b}\sin^3 t,\end{cases}t\in[0,2\pi]\) 的弧长，其中 \(a>b>0\)，\(c^2=a^2-b^2\).

**【解】**　弧长
\[L=\int_0^{2\pi}\sqrt{x'^2(t)+y'^2(t)}\,\mathrm{d}t=\frac{3c^2}{ab}\int_0^{2\pi}\sqrt{a^2\sin^4 t\cos^2 t+b^2\cos^4 t\sin^2 t}\,\mathrm{d}t\]
\[=\frac{12c^2}{ab}\int_0^{\frac{\pi}{2}}\sqrt{b^2+c^2\sin^2 t}\cdot\sin t\cos t\,\mathrm{d}t=\frac{6c^2}{ab}\int_0^{\frac{\pi}{2}}\sqrt{b^2+c^2\sin^2 t}\,\mathrm{d}(\sin^2 t)\]
\[=\frac{4}{ab}(a^3-b^3).\]

**例2**　平面区域 \(D\) 由曲线 \(y=x^2\) 及 \(x=y^2\) 围成，求其面积 \(S\).

**【解】**　\(\begin{cases}y=x^2,\\ x=y^2,\end{cases}\) 可解出两点 \((0,0)\) 及 \((1,1)\). 故
\[S=\int_0^1(\sqrt{x}-x^2)\,\mathrm{d}x=\frac{1}{3}.\]

**例3**　求由极坐标方程给出的曲线 \(r^2=2a^2\cos 2\theta\) 围成区域的面积.

**【解】**　极坐标方程曲线 \(r=r(\theta)(\alpha\le\theta\le\beta)\) 围成的区域面积 \(S\) 可以写成
\[S=\frac{1}{2}\int_\alpha^\beta r^2(\theta)\,\mathrm{d}\theta.\]
在本题中，区域的图形为（图 2）
\[S=4\times\frac{1}{2}\int_0^{\frac{\pi}{4}}2a^2\cos 2\theta\,\mathrm{d}\theta=4a^2\int_0^{\frac{\pi}{4}}\cos 2\theta\,\mathrm{d}\theta=2a^2.\]

**例4**　求旋轮线 \(x=a(t-\sin t)\)，\(y=a(1-\cos t)\)，\(t\in[0,2\pi]\) 绕 \(x\) 轴旋转所成旋转体体积.` },
    ],
    quiz: [{"q": "曲线 $y=f(x)$ 与 $x$ 轴在 $[a,b]$ 上所围面积为", "options": ["$\\int_a^b f(x)dx$", "$\\int_a^b|f(x)|dx$", "$\\left|\\int_a^b f(x)dx\\right|$", "$\\int_a^b f^2(x)dx$"], "answer": 1, "explain": "面积非负，需取绝对值。"}, {"q": "曲线 $y=f(x)$ 绕 $x$ 轴旋转所得旋转体体积为", "options": ["$\\pi\\int_a^b f^2(x)dx$", "$2\\pi\\int_a^b f(x)dx$", "$\\int_a^b f^2(x)dx$", "$\\pi\\int_a^b f(x)dx$"], "answer": 0, "explain": "圆盘法：$V=\\pi\\int_a^b f^2(x)dx$。"}, {"q": "函数 $f(x)$ 在 $[a,b]$ 上的平均值为", "options": ["$\\frac{1}{b-a}\\int_a^b f(x)dx$", "$\\int_a^b f(x)dx$", "$\\frac{1}{b-a}$", "$f(b)-f(a)$"], "answer": 0, "explain": "平均值定义。"}]
  };
})();
