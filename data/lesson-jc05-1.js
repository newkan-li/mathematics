window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["jc05_s0"] = {
    id: "jc05_s0",
    ch: "第六章 多元函数积分学",
    title: "二重积分（数二）",
    book: "李永乐《数学复习全书·基础篇》",
    pages: [157, 164],
    img: "assets/img/jichu",
    content: [
      { p: 157, md: R`# 第六章 多元函数积分学

## 本章考点

二重积分的定义、性质、计算和应用

（仅数学一）三重积分的概念、性质、计算和应用 两类曲线积分的概念、性质及计算 两类曲线积分的关系 格林(Green)公式 平面曲线积分与路径无关的条件 二元函数全微分的原函数 两类曲面积分的概念、性质及计算 两类曲面积分的关系 高斯(Gauss)公式 斯托克斯(Stokes)公式 散度、旋度的概念及计算 曲线积分和曲面积分的应用

## 第一节 重积分

### 一、二重积分

#### 1. 二重积分的定义及几何意义

**定义** 设 \(z=f(x,y)\) 是平面上有界闭区域 \(D\) 上的有界函数
\[
\iint_D f(x,y)\,d\sigma \triangleq \lim_{d\to 0}\sum_{k=1}^{n} f(\xi_k,\eta_k)\Delta\sigma_k
\]
其中 \(d\) 为 \(n\) 个小区域直径的最大值，\(\Delta\sigma_k\) 为第 \(k\) 个小区域的面积.

**几何意义** 若函数 \(f(x,y)\) 在区域 \(D\) 上连续且非负，则二重积分 \(\iint_D f(x,y)d\sigma\) 在几何上表示以区域 \(D\) 为底、曲面 \(z=f(x,y)\) 为顶，侧面是以 \(D\) 的边界为准线、母线平行于 \(z\) 轴的柱面的曲顶柱体的体积；若 \(f(x,y)\le 0\)，二重积分的值为负值，其绝对值等于上述曲顶柱体的体积.

#### 2. 二重积分的性质

与定积分的性质类似，列出如下几条

（1）**比较定理**：如果在 \(D\) 上，\(f(x,y)\le g(x,y)\)，则
\[
\iint_D f(x,y)d\sigma \le \iint_D g(x,y)d\sigma
\]

（2）**估值定理**：设 \(M,m\) 分别为连续函数 \(f(x,y)\) 在闭区域 \(D\) 上的最大值和最小值，\(S\) 表示区域 \(D\) 的面积，则
\[
mS \le \iint_D f(x,y)d\sigma \le MS
\]` },
      { p: 158, md: R`（3）**中值定理**：设函数 \(f(x,y)\) 在闭区域 \(D\) 上连续，\(S\) 为 \(D\) 的面积，则在 \(D\) 上至少存在一点 \((\xi,\eta)\)，使
\[
\iint_D f(x,y)d\sigma = f(\xi,\eta)S
\]

**例1** 设 \(I_1=\iint_D \sin\sqrt{x^2+y^2}dxdy,\ I_2=\iint_D \sin(x^2+y^2)dxdy,\ I_3=\iint_D \sin(x^2+y^2)^2dxdy\)，其中 \(D=\{(x,y)\mid x^2+y^2\le 1\}\)，则

(A) \(I_3>I_2>I_1\).　　　　　　　(B) \(I_1>I_2>I_3\).

(C) \(I_2>I_1>I_3\).　　　　　　　(D) \(I_3>I_1>I_2\).

**【解】** 因为在 \(D\) 上
\[
(x^2+y^2)^2\le x^2+y^2\le \sqrt{x^2+y^2},
\]
而 \(\sin u\) 在 \([0,1]\) 上是单调增函数，所以
\[
0\le \sin(x^2+y^2)^2\le \sin(x^2+y^2)\le \sin\sqrt{x^2+y^2},
\]
而且除了一个点 \((0,0)\) 之外，不等号严格成立.

由比较定理可知，(B) 正确.

**例2** 设 \(f(x,y)\) 在 \(D_r=\{(x,y)\mid x^2+y^2\le r^2\}\) 上连续，\(f(0,0)=2\)，则
\[
\lim_{r\to 0}\frac{\iint_{D_r}f(x,y)dxdy}{r^2}=\underline{\qquad}.
\]

**【解】** 因为 \(f(x,y)\) 连续，由二重积分中值定理，\(\exists(\xi,\eta)\in D_r\)，使得
\[
\iint_{D_r}f(x,y)dxdy=f(\xi,\eta)\iint_{D_r}dxdy=\pi r^2 f(\xi,\eta),
\]
\[
\lim_{r\to 0}\frac{\iint_{D_r}f(x,y)dxdy}{r^2}=\lim_{r\to 0}f(\xi,\eta)\pi,
\]
而当 \(r\to 0\) 时，\((\xi,\eta)\to(0,0)\)，所以
\[
\lim_{r\to 0}\frac{\iint_{D_r}f(x,y)dxdy}{r^2}=f(0,0)\pi=2\pi.
\]

#### 3. 二重积分的计算

##### （1）在直角坐标下计算

在直角坐标下计算重积分关键是将重积分化为累次积分，累次积分有两种次序，累次积分的次序往往根据积分区域和被积函数来确定.

1）适合先 \(y\) 后 \(x\) 的积分域

若积分域 \(D\) 由不等式 \(\begin{cases}\varphi_1(x)\le y\le\varphi_2(x),\\a\le x\le b\end{cases}\) 确定，如图1所示，则该区域 \(D\) 上的二重积分适合化成先 \(y\) 后 \(x\) 的累次积分，且` },
      { p: 159, md: R`\[
\iint_D f(x,y)d\sigma=\int_a^b dx\int_{\varphi_1(x)}^{\varphi_2(x)}f(x,y)dy.
\]

2）适合先 \(x\) 后 \(y\) 的积分域

若积分域 \(D\) 由不等式 \(\begin{cases}\psi_1(y)\le x\le\psi_2(y),\\c\le y\le d\end{cases}\) 确定，如图2所示，则该区域 \(D\) 上的二重积分适合化成先 \(x\) 后 \(y\) 的累次积分，且
\[
\iint_D f(x,y)d\sigma=\int_c^d dy\int_{\psi_1(y)}^{\psi_2(y)}f(x,y)dx.
\]

（图1：积分区域 \(D\)，边界为 \(y=\varphi_2(x)\)、\(y=\varphi_1(x)\)、\(x=a\)、\(x=b\)）

（图2：积分区域 \(D\)，边界为 \(x=\psi_1(y)\)、\(x=\psi_2(y)\)、\(y=c\)、\(y=d\)）

如果遇到更复杂的积分区域，总可利用平行两个坐标轴的直线将其化分成若干个以上两种区域进行计算.

**【注】** \(f(x,y)\) 连续，同时存在两个求积顺序不同的积分
\[
\int_c^d\left[\int_a^b f(x,y)dy\right]dx \quad\text{与}\quad \int_a^b\left[\int_c^d f(x,y)dx\right]dy
\]
统称为累次积分（二次积分）. 为书写简便，将上面两积分记成
\[
\int_c^d dx\int_a^b f(x,y)dy \quad\text{与}\quad \int_a^b dy\int_c^d f(x,y)dx
\]
在 \(f(x,y)\) 连续的假设下，累次积分与求积顺序无关.

##### （2）在极坐标下计算

在极坐标下，一般是将二重积分化为先 \(r\) 后 \(\theta\) 的累次积分，常见的有以下四种情况：

1）极点 \(O\) 在区域 \(D\) 之外，如图3，则
\[
\iint_D f(x,y)d\sigma=\int_{\alpha}^{\beta}d\theta\int_{r_1(\theta)}^{r_2(\theta)}f(r\cos\theta,r\sin\theta)rdr.
\]

2）极点 \(O\) 在区域 \(D\) 的边界上，如图4所示，则
\[
\iint_D f(x,y)d\sigma=\int_{\alpha}^{\beta}d\theta\int_0^{r(\theta)}f(r\cos\theta,r\sin\theta)rdr.
\]

（图3：极点 \(O\) 在区域 \(D\) 之外，\(r_1(\theta)\le r\le r_2(\theta)\)）

（图4：极点 \(O\) 在区域 \(D\) 的边界上，\(0\le r\le r(\theta)\)）` },
      { p: 160, md: R`3）极点 \(O\) 在区域 \(D\) 的内部，如图5所示，则
\[
\iint_D f(x,y)d\sigma=\int_0^{2\pi}d\theta\int_0^{r(\theta)}f(r\cos\theta,r\sin\theta)rdr.
\]

4）环形域，且极点 \(O\) 在环形域内部，如图6，则
\[
\iint_D f(x,y)d\sigma=\int_0^{2\pi}d\theta\int_{r_1(\theta)}^{r_2(\theta)}f(r\cos\theta,r\sin\theta)rdr.
\]

（图5：极点 \(O\) 在区域 \(D\) 的内部，边界为 \(r=r(\theta)\)）

（图6：环形域，极点 \(O\) 在其内部，\(r_1(\theta)\le r\le r_2(\theta)\)）

**【注】** 将二重积分化为累次积分计算时，坐标系的选择不仅要看积分域 \(D\) 的形状，而且要看被积函数的形式，以下我们给出适合用极坐标计算的二重积分其积分域和被积函数的特点，不适合用极坐标计算一般是用直角坐标.

① 适合用极坐标计算的二重积分被积函数一般应具有以下形式：
\[
f(\sqrt{x^2+y^2}),\quad f\left(\frac{y}{x}\right),\quad f\left(\frac{x}{y}\right)
\]
之所以适合极坐标是由于它们在极坐标下都可化为 \(r\) 或 \(\theta\) 的一元函数.

② 适合用极坐标计算的二重积分的积分域一般应具有以下形状：

中心在原点的圆域，圆环域或它们的一部分（如扇形）；中心在坐标轴上且边界圆过原点的圆域（如由 \(x^2+y^2=2ax\) 或 \(x^2+y^2=2by\) 所围成）或者它们的一部分.

##### （3）利用对称性和奇偶性进行计算

常用的结论有以下两条：

1）利用积分域的对称性和被积函数的奇偶性

① 若积分域 \(D\) 关于 \(y\) 轴对称，且被积函数 \(f(x,y)\) 关于 \(x\) 有奇偶性，则
\[
\iint_D f(x,y)d\sigma=
\begin{cases}
2\iint_{D_1}f(x,y)d\sigma, & f(x,y)\text{关于 }x\text{ 为偶函数，即 }f(-x,y)=f(x,y),\\
0, & f(x,y)\text{关于 }x\text{ 为奇函数，即 }f(-x,y)=-f(x,y)
\end{cases}
\]
其中 \(D_1\) 为 \(D\) 在 \(y\) 轴右侧的部分.

② 若积分区域关于 \(x\) 轴对称，且被积函数 \(f(x,y)\) 关于 \(y\) 有奇偶性，则
\[
\iint_D f(x,y)d\sigma=
\begin{cases}
2\iint_{D_1}f(x,y)d\sigma, & f(x,y)\text{关于 }y\text{ 为偶函数，即 }f(x,-y)=f(x,y),\\
0, & f(x,y)\text{关于 }y\text{ 为奇函数，即 }f(x,-y)=-f(x,y)
\end{cases}
\]
其中 \(D_1\) 为 \(D\) 在 \(x\) 轴上方的部分.

2）利用变量的对称性

若积分域 \(D\) 关于直线 \(y=x\) 对称，换言之，表示积分域 \(D\) 的等式或不等式中将 \(x\) 与 \(y\) 对调后原等式或不等式不变，如，圆域 \(x^2+y^2\le R^2\)，正方形域 \(\begin{cases}0\le x\le 1,\\0\le y\le 1,\end{cases}\) 则` },
      { p: 161, md: R`\[
\iint_D f(x,y)d\sigma=\iint_D f(y,x)d\sigma
\]
即：被积函数中 \(x\) 和 \(y\) 对调积分值不变.

**例3** 计算二重积分 \(\iint_D \sqrt{y^2-xy}\,dxdy\)，其中 \(D\) 是由直线 \(y=x,y=1,x=0\) 所围成的平面区域.

**【解】** 积分区域如图7所示. 因为根号下的函数为关于 \(x\) 的一次函数，“先 \(x\) 后 \(y\)”积分较容易，所以
\[
\iint_D\sqrt{y^2-xy}dxdy
=\int_0^1dy\int_0^y\sqrt{y^2-xy}dx
\]
\[
=-\frac{2}{3}\int_0^1\frac{1}{y}(y^2-xy)^{\frac{3}{2}}\Big|_0^y dy
=\frac{2}{3}\int_0^1y^2dy=\frac{2}{9}.
\]

（图7：\(D\) 由 \(y=x\)、\(y=1\)、\(x=0\) 围成）

**例4** 计算 \(\iint_D (x^2+y^2)dxdy\)，\(D\) 为由不等式 \(\sqrt{2x-x^2}\le y\le\sqrt{9-x^2}\) 所确定的在第一象限内的区域.

**【解】** **方法一** 积分区域为圆域的一部分，可转换为极坐标系下的二次积分来计算.

积分区域可表示为 \(D:0\le\theta\le\frac{\pi}{2},2\cos\theta\le r\le 3\)，于是
\[
\iint_D (x^2+y^2)dxdy=\int_0^{\frac{\pi}{2}}d\theta\int_{2\cos\theta}^3 r^3dr=\frac{1}{4}\int_0^{\frac{\pi}{2}}(81-16\cos^4\theta)d\theta=\frac{75}{8}\pi.
\]

**方法二** 利用二重积分的可加性
\[
\iint_D (x^2+y^2)dxdy=\int_0^{\frac{\pi}{2}}d\theta\int_0^3r^3dr-\int_0^{\frac{\pi}{2}}d\theta\int_0^{2\cos\theta}r^3dr
\]
\[
=\frac{81}{8}\pi-4\int_0^{\frac{\pi}{2}}\cos^4\theta d\theta
\]
\[
=\frac{81}{8}\pi-4\cdot\frac{3}{4}\cdot\frac{1}{2}\cdot\frac{\pi}{2}=\frac{75}{8}\pi.
\]

**例5** 交换极坐标下累次积分 \(I=\int_{-\frac{\pi}{4}}^{\frac{\pi}{2}}d\theta\int_0^{2a\cos\theta}f(r\cos\theta,r\sin\theta)rdr\) 的次序 \((a>0)\).

**【解】** \(r=2a\cos\theta\) 是圆 \(x^2+y^2=2ax\)，即 \((x-a)^2+y^2=a^2\).

由原积分式可知积分域 \(D\) 如图8所示，要将原积分化为先 \(r\) 后 \(\theta\) 的积分，用 \(r=C\)（中心在原点的同心圆）穿过区域 \(D\)，

当 \(0\le C\le \sqrt{2}a\) 时，

圆弧 \(r=C\) 是从 \(\theta=-\frac{\pi}{4}\) 进入区域 \(D\)，从 \(r=2a\cos\theta\) 穿出区域 \(D\)；

当 \(\sqrt{2}a\le C\le 2a\) 时，

圆弧 \(r=C\) 是从 \(r=2a\cos\theta(\theta<0)\) 进入区域 \(D\)，从 \(r=2a\cos\theta(\theta>0)\) 穿出区域 \(D\)；则` },
      { p: 162, md: R`\[
I=\int_0^{\sqrt{2}a}dr\int_{-\frac{\pi}{4}}^{\arccos\frac{r}{2a}}f(r\cos\theta,r\sin\theta)rd\theta+\int_{\sqrt{2}a}^{2a}dr\int_{-\arccos\frac{r}{2a}}^{\arccos\frac{r}{2a}}f(r\cos\theta,r\sin\theta)rd\theta.
\]

（图8：积分区域 \(D\)，用于交换 \(r,\theta\) 的积分次序）

**【评注】** 也可以直接从 \(\theta-r\) 平面考虑这个二次积分的交换次序问题. \(D\) 区域是由 \(\theta=-\frac{\pi}{4},\theta=\frac{\pi}{2},r=0\) 及 \(r=2a\cos\theta\) 围成，如图9所示，则
\[
\int_{-\frac{\pi}{4}}^{\frac{\pi}{2}}d\theta\int_0^{2a\cos\theta}f(r\cos\theta,r\sin\theta)rdr
\]
\[
=\iint_D f(r\cos\theta,r\sin\theta)rdrd\theta
\]
\[
=\int_0^{\sqrt{2}a}dr\int_{-\frac{\pi}{4}}^{\arccos\frac{r}{2a}}f(r\cos\theta,r\sin\theta)rd\theta+\int_{\sqrt{2}a}^{2a}dr\int_{-\arccos\frac{r}{2a}}^{\arccos\frac{r}{2a}}f(r\cos\theta,r\sin\theta)rd\theta.
\]

（图9：\(\theta-r\) 平面上的积分区域）

**例6** 积分 \(\int_0^2 dx\int_0^{\sqrt{2x-x^2}}\sqrt{x^2+y^2}dy=\underline{\qquad}\).

**【解】** 交换坐标系
\[
\int_0^2dx\int_0^{\sqrt{2x-x^2}}\sqrt{x^2+y^2}dy=\int_0^{\frac{\pi}{2}}d\theta\int_0^{2\cos\theta}r^2dr
\]
\[
=\frac{8}{3}\int_0^{\frac{\pi}{2}}\cos^3\theta d\theta
\]
\[
=\frac{16}{9}.
\]

**例7** （1996，数三）累次积分 \(\int_0^{\frac{\pi}{2}}d\theta\int_0^{\cos\theta}f(r\cos\theta,r\sin\theta)rdr\) 又可表示成

(A) \(\int_0^1dy\int_0^{\sqrt{y-y^2}}f(x,y)dx\).　　　(B) \(\int_0^1dy\int_0^{\sqrt{1-y^2}}f(x,y)dx\).

(C) \(\int_0^1dx\int_0^1f(x,y)dy\).　　　　　　　(D) \(\int_0^1dx\int_0^{\sqrt{x-x^2}}f(x,y)dy\).

**【解】** 积分区域为
\[
\begin{aligned}
D&=\{(r,\theta)\mid0\le\theta\le\frac{\pi}{2},0\le r\le\cos\theta\}\\
&=\{(x,y)\mid0\le x\le 1,0\le y\le\sqrt{x-x^2}\},
\end{aligned}
\]
因而 \(\int_0^{\frac{\pi}{2}}d\theta\int_0^{\cos\theta}f(r\cos\theta,r\sin\theta)rdr=\int_0^1dx\int_0^{\sqrt{x-x^2}}f(x,y)dy\). 选(D).

**例8** \(\int_0^1dy\int_y^1\frac{\cos x}{x}dx=\underline{\qquad}\).

**【解】** 交换积分次序
\[
\int_0^1dy\int_y^1\frac{\cos x}{x}dx=\int_0^1dx\int_0^x\frac{\cos x}{x}dy=\int_0^1\cos x dx=\sin1.
\]

**例9** 已知 \(I=\int_0^2dx\int_0^{\frac{x^2}{2}}f(x,y)dy+\int_2^{2\sqrt{2}}dx\int_0^{\sqrt{8-x^2}}f(x,y)dy\)，则 \(I=\)` },
      { p: 163, md: R`(A) \(\int_0^2dy\int_{\sqrt{2y}}^{\sqrt{8-y^2}}f(x,y)dx\).　　　　　(B) \(\int_0^2dy\int_1^{\sqrt{8-y^2}}f(x,y)dx\).

(C) \(\int_0^1dy\int_{\sqrt{2y}}^{\sqrt{8-y^2}}f(x,y)dx\).　　　　　(D) \(\int_0^2dy\int_{\sqrt{2y}}^1f(x,y)dx\).

**【解】** 积分区域由两部分组成（如图10）. 设

\[
D_1=\{(x,y)\mid0\le y\le\frac{1}{2}x^2,0\le x\le 2\},
\]
\[
D_2=\{(x,y)\mid0\le y\le\sqrt{8-x^2},2\le x\le 2\sqrt{2}\},
\]
将 \(D=D_1\cup D_2\) 视为Y型区域，则
\[
D=\{(x,y)\mid\sqrt{2y}\le x\le\sqrt{8-y^2},0\le y\le 2\},
\]
从而 \(I=\iint_D f(x,y)dxdy=\int_0^2dy\int_{\sqrt{2y}}^{\sqrt{8-y^2}}f(x,y)dx\)，所以答案选(A).

（图10：积分区域分为 \(D_1,D_2\) 两部分）

**例10** 设 \(D=\{(x,y)\mid x^2+y^2\le r^2\}\)，则 \(\iint_D(x^3+\sin y+1)dxdy=\underline{\qquad}\).

**【解】** \(D\) 为圆域，关于 \(x\) 轴，\(y\) 轴对称，\(x^3\) 关于 \(x\) 变量为奇函数，\(\sin y\) 关于 \(y\) 变量为奇函数，所以
\[
\iint_D x^3dxdy=0,\quad \iint_D\sin ydxdy=0,
\]
\[
\iint_D(x^3+\sin y+1)dxdy=\iint_D dxdy=\pi r^2.
\]

**例11** 设 \(D=\{(x,y)\mid x^2+y^2\le R^2\}\)，则 \(\iint_D\left(\frac{x^2}{a^2}+\frac{y^2}{b^2}\right)dxdy=\underline{\qquad}\).

**【解】** 用极坐标系：
\[
\begin{cases}
x=r\cos\theta\\
y=r\sin\theta
\end{cases}
\qquad 0\le r\le R,\qquad 0\le\theta\le 2\pi.
\]
\[
\iint_D\left(\frac{x^2}{a^2}+\frac{y^2}{b^2}\right)dxdy
=\int_0^{2\pi}d\theta\int_0^R\left(\frac{r^2\cos^2\theta}{a^2}+\frac{r^2\sin^2\theta}{b^2}\right)rdr
\]
\[
=\frac{R^4}{4}\int_0^{2\pi}\left(\frac{1+\cos2\theta}{2a^2}+\frac{1-\cos2\theta}{2b^2}\right)d\theta
\]
\[
=\frac{\pi}{4}R^4\left(\frac{1}{a^2}+\frac{1}{b^2}\right).
\]

**例12** \(f(t)\) 为连续函数，\(D\) 是由 \(y=x^3,y=1,x=-1\) 围成的区域，则 \(\iint_D xyf(x^2+y^2)dxdy=\underline{\qquad}\).

**【解】** 作辅助线 \(y=-x^3\)（如图11），则 \(D\) 分为4个区域 \(D_1,D_2,D_3,D_4\). \(D_1\) 与 \(D_2\) 关于 \(y\) 轴对称，\(D_3\) 与 \(D_4\) 关于 \(x\) 轴对称. 而被积函数 \(xyf(x^2+y^2)\) 关于变量 \(x,y\) 均为奇函数，所以

（图11：\(D\) 被辅助线 \(y=-x^3\) 分成 \(D_1,D_2,D_3,D_4\) 四个区域）` },
      { p: 164, md: R`\[
\iint_{D_1}xyf(x^2+y^2)dxdy+\iint_{D_2}xyf(x^2+y^2)dxdy=0,
\]
\[
\iint_{D_3}xyf(x^2+y^2)dxdy+\iint_{D_4}xyf(x^2+y^2)dxdy=0,
\]
即
\[
\iint_D xyf(x^2+y^2)dxdy=0.
\]

**例13** 求由曲面 \(z_1=2-x^2-y^2\) 和 \(z_2=x^2+y^2\) 所围成空间区域的体积.

**【解】** 两个曲面的交线为
\[
\begin{cases}
z=2-x^2-y^2\\
z=x^2+y^2
\end{cases}
\]
其在 \(xOy\) 平面的投影为 \(x^2+y^2=1\). 设 \(D=\{(x,y)\mid x^2+y^2\le 1\}\)，则所求体积
\[
V=\iint_D|z_1-z_2|dxdy=2\iint_D(1-x^2-y^2)dxdy,
\]
由极坐标变换
\[
V=2\int_0^{2\pi}d\theta\int_0^1(1-r^2)rdr=\pi.
\]

**例14** 计算二重积分 \(\iint_D(x+y)^3dxdy\)，其中 \(D\) 由曲线 \(x=\sqrt{1+y^2}\) 与直线 \(x+\sqrt{2}y=0\) 及 \(x-\sqrt{2}y=0\) 围成.

**【解】**
\[
\iint_D(x+y)^3dxdy=\iint_D(x^3+3x^2y+3xy^2+y^3)dxdy
\]
\[
=\iint_D(x^3+3xy^2)dxdy
\]
\[
=2\int_0^1dy\int_{\sqrt{2}y}^{\sqrt{1+y^2}}(x^3+3xy^2)dx
\]
\[
=\frac{1}{2}\int_0^1(1+2y^2-3y^4)dy+3\int_0^1(y^2-y^4)dy
\]
\[
=\frac{14}{15}.
\]

**【注】** 本题考查直角坐标系下二重积分的计算及利用对称性简化计算.

> **说明**：以下「三重积分」仅数学一要求，数学二不考，已略。` },
    ],
    quiz: [{"q": "二重积分在极坐标变换 $x=r\\cos\\theta,y=r\\sin\\theta$ 下，$dxdy=$", "options": ["$dr\\,d\\theta$", "$r\\,dr\\,d\\theta$", "$r^2dr\\,d\\theta$", "$\\frac1r dr\\,d\\theta$"], "answer": 1, "explain": "极坐标面积元素为 $r\\,dr\\,d\\theta$。"}, {"q": "若 $D$ 关于 $x$ 轴对称，且 $f(x,y)$ 关于 $y$ 为奇函数，则 $\\iint_D f(x,y)\\,d\\sigma=$", "options": ["$0$", "$2\\iint_{D_1}f\\,d\\sigma$", "$\\iint_D|f|d\\sigma$", "无法确定"], "answer": 0, "explain": "关于 $x$ 轴对称时，$y$ 的奇函数积分为 0。"}, {"q": "$\\int_0^1dx\\int_x^1 f(x,y)\\,dy$ 交换次序后为", "options": ["$\\int_0^1dy\\int_0^y f\\,dx$", "$\\int_0^1dy\\int_y^1 f\\,dx$", "$\\int_0^1dy\\int_0^1 f\\,dx$", "$\\int_0^1dy\\int_x^1 f\\,dx$"], "answer": 0, "explain": "区域 $0\\le x\\le1,\\ x\\le y\\le1$ 即 $0\\le y\\le1,\\ 0\\le x\\le y$。"}, {"q": "$\\iint_D 1\\,d\\sigma$ 表示", "options": ["区域 $D$ 的面积", "区域 $D$ 的周长", "$D$ 的形心", "$D$ 的转动惯量"], "answer": 0, "explain": "被积函数为 1 时，二重积分等于区域面积。"}]
  };
})();
