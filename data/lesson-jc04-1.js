window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["jc04_s0"] = {
    id: "jc04_s0",
    ch: "第五章 多元函数微分学",
    title: "第一节 多元函数的极限与连续",
    book: "李永乐《数学复习全书·基础篇》",
    pages: [136, 138],
    img: "assets/img/jichu",
    content: [
      { p: 136, md: R`# 第五章 多元函数微分学

## 本章考点

多元函数的概念 二元函数的几何意义 二元函数的极限与连续的概念 有界闭区域上多元连续函数的性质 多元函数的偏导数和全微分 多元复合函数、隐函数的求导法 二阶偏导数 多元函数的极值和条件极值 多元函数的最大值、最小值及其简单应用

（仅数学一要求）全微分存在的必要条件和充分条件 全微分形式的不变性 二元函数的二阶泰勒公式 方向导数、梯度及几何应用

## 第一节 多元函数的极限与连续

### 一、二元函数的概念

**定义** 设 \(D\) 是平面上的一个点集，如果对每一个点 \(P(x,y)\in D\)，变量 \(z\) 按照一定法则总有确定的值和它对应，则称 \(z\) 是变量 \(x,y\) 的二元函数，记为 \(z=f(x,y)\)，

其中点集 \(D\) 称为函数 \(f(x,y)\) 的定义域，\(x,y\) 称为自变量，\(z\) 称为因变量，数集 \(\{z\mid z=f(x,y),(x,y)\in D\}\) 称为函数 \(z=f(x,y)\) 的值域.

类似地可以定义三元函数 \(u=f(x,y,z)\) 及三元以上的函数. 但在考试中重点考查二元函数.

**二元函数的几何意义** 空间点集 \(\{(x,y,z)\mid z=f(x,y),(x,y)\in D\}\) 构成二元函数 \(z=f(x,y)\) 的图形. 通常情况下，二元函数 \(z=f(x,y)\) 的图形是一张曲面，定义域 \(D\) 便是该曲面在 \(xOy\) 平面上的投影.

### 二、二元函数的极限与连续

#### 1. 重极限的概念

**定义** 设函数 \(f(x,y)\) 在开区域（或闭区域）\(D\) 内有定义，\(P_0(x_0,y_0)\) 是 \(D\) 的内点或边界点，如果对任意给定的 \(\varepsilon>0\)，\(\exists\delta>0\)，使得对适合不等式
\[
0<\sqrt{(x-x_0)^2+(y-y_0)^2}<\delta
\]
的一切的 \(P(x,y)\in D\)，都有 \(|f(x,y)-A|<\varepsilon\)，则称 \(A\) 为 \(f(x,y)\) 当 \(x\to x_0,y\to y_0\) 时的极限，记为 \(\lim\limits_{\substack{x\to x_0\\y\to y_0}}f(x,y)=A\).

**【注】**（1）二元函数的重极限是指定区域 \(D\) 中的点 \(P(x,y)\) 以任何方式趋于点 \(P_0(x_0,y_0)\) 时，函数 \(f(x,y)\) 都无限趋近于同一常数 \(A\). 换言之，若点 \(P(x,y)\) 沿两种不同路径趋向于点 \(P_0(x_0,y_0)\) 时，\(f(x,y)\) 趋于不同常数，或点 \(P(x,y)\) 沿某一路径趋于 \(P_0(x_0,y_0)\) 时，\(f(x,y)\) 的极` },
      { p: 137, md: R`限不存在，则重极限 \(\lim\limits_{\substack{x\to x_0\\y\to y_0}}f(x,y)\) 不存在. 这是证明重极限不存在常用的有效方法.

（2）重极限的极限运算（有理运算，复合运算）和性质（保号性、夹逼性和局部有界性等）与一元函数完全类似.

**例1** 证明下列重极限不存在.
\[
(1)\ \lim_{\substack{x\to0\\y\to0}}\frac{xy}{x^2+y^2};\qquad
(2)\ \lim_{\substack{x\to0\\y\to0}}\frac{xy^2}{x^2+y^4}.
\]

**【证】** 证明重极限不存在的常用方法是，取两种不同的路径，极限 \(\lim\limits_{\substack{x\to x_0\\y\to y_0}}f(x,y)\) 不相等或取某一路径极限 \(\lim\limits_{\substack{x\to x_0\\y\to y_0}}f(x,y)\) 不存在，均可证明重极限 \(\lim\limits_{\substack{x\to x_0\\y\to y_0}}f(x,y)\) 不存在.

（1）取直线 \(y=kx\)，让点 \((x,y)\) 沿直线 \(y=kx\) 趋于 \((0,0)\) 点，此时有
\[
\lim_{\substack{x\to0\\y=kx\to0}}\frac{xy}{x^2+y^2}
=\lim_{x\to0}\frac{kx^2}{x^2+k^2x^2}
=\frac{k}{1+k^2}.
\]
显然，点 \((x,y)\) 沿不同直线 \(y=kx\) 趋于点 \((0,0)\) 时，极限值不相同，则重极限 \(\lim\limits_{\substack{x\to0\\y\to0}}\frac{xy}{x^2+y^2}\) 不存在.

**【评注】** 利用沿不同直线趋向于点 \((x_0,y_0)\) 时极限不相等证明重极限不存在是一种证明重极限不存在的常用方法.

（2）取直线 \(y=kx\)，则
\[
\lim_{\substack{x\to0\\y=kx\to0}}\frac{xy^2}{x^2+y^4}
=\lim_{x\to0}\frac{k^2x^3}{x^2+k^4x^4}
=\lim_{x\to0}\frac{k^2x}{1+k^4x^2}=0.
\]
这说明沿任何一条过原点的直线 \(y=kx\)（不包括 \(y\) 轴）趋于 \((0,0)\) 点时，极限存在且都为零，并且若沿 \(y\) 轴趋于 \((0,0)\) 点极限也为零，事实上，
\[
\lim_{\substack{x\to0\\y\to0}}\frac{xy^2}{x^2+y^4}=0
\]
这能否说明重极限 \(\lim\limits_{\substack{x\to0\\y\to0}}\frac{xy^2}{x^2+y^4}\) 存在且为零呢？不能！事实上若沿过原点的抛物线 \(x=y^2\) 趋于 \((0,0)\) 点时，就有
\[
\lim_{\substack{x\to0\\y\to0}}\frac{xy^2}{x^2+y^4}
=\lim_{y\to0}\frac{y^4}{y^4+y^4}=\frac12.
\]
故重极限 \(\lim\limits_{\substack{x\to0\\y\to0}}\frac{xy^2}{x^2+y^4}\) 不存在.

**例2** 试求下列函数的二重极限 \(\lim\limits_{\substack{x\to0\\y\to0}}f(x,y)\).
\[
(1)\ f(x,y)=x\sin\frac1y+y\sin\frac1x.\qquad
(2)\ f(x,y)=\frac{\ln(1+x^2+y^2)}{x^2+y^2}.
\]
\[
(3)\ f(x,y)=\frac{x+y}{|x|+|y|}.\qquad
(4)\ f(x,y)=(1+x)^{\frac{y+1}{x}}.
\]

**【解】**（1）\(|f(x,y)|\le |x|\left|\sin\frac1y\right|+|y|\left|\sin\frac1x\right|\le |x|+|y|\)，
所以 \(\lim\limits_{\substack{x\to0\\y\to0}}f(x,y)=0\).` },
      { p: 138, md: R`（2）令 \(\rho^2=x^2+y^2\)，
\[
\lim_{\substack{x\to0\\y\to0}}f(x,y)=\lim_{\rho\to0}\frac{\ln(1+\rho^2)}{\rho^2}=1.
\]
（3）取直线 \(x=y\)，当 \((x,y)\) 沿直线趋于 \((0,0)\) 点时，\(\lim\limits_{\substack{x\to0\\y=x}}f(x,y)=\lim\limits_{x\to0}\frac{2x}{2|x|}\) 不存在，所以 \(\lim\limits_{\substack{x\to0\\y\to0}}f(x,y)\) 不存在.
（4）\(f(x,y)=(1+x)^{\frac1x(y+1)}\)，而 \(\lim\limits_{x\to0}(1+x)^{\frac1x}=e\)，所以 \(\lim\limits_{\substack{x\to0\\y\to0}}f(x,y)=e\).

**【评注】** 求一元函数极限的常见方法：不等式缩放，等价无穷小替换，泰勒展开，两个常见极限：\(\lim\limits_{x\to0}(1+x)^{\frac1x}=e,\ \lim\limits_{x\to0}\frac{\sin x}{x}=1\) 都可以用在多元函数的极限计算.

#### 2. 二元函数连续的概念

**定义** 设函数 \(f(x,y)\) 在开区域（或闭区域）\(D\) 内有定义，\(P_0(x_0,y_0)\) 是 \(D\) 的内点或边界点，且 \(P_0\in D\)，如果 \(\lim\limits_{\substack{x\to x_0\\y\to y_0}}f(x,y)=f(x_0,y_0)\)，则称函数 \(f(x,y)\) 在点 \(P_0(x_0,y_0)\) 处连续.

**例3** 讨论函数
\[
f(x,y)=
\begin{cases}
\dfrac{x}{y^2}e^{-\frac{x^2}{y^2}}, & y\ne0,\\[4pt]
0, & y=0
\end{cases}
\]
的连续性.

**【解】** 当 \(y_0\ne0\) 时，\(\forall x_0\in\mathbf R\)，\(f(x,y)\) 在 \((x_0,y_0)\) 点连续.

当 \(y_0=0\) 时，分 \(x_0=0\) 和 \(x_0\ne0\) 两种情况讨论 \(f(x,y)\) 在 \((x_0,y_0)\) 点的连续性.

当 \(x_0=0\) 时，\((x,y)\) 沿直线 \(y=x\) 趋于 \((0,0)\) 点时，
\[
\lim_{\substack{x\to0\\y=x}}f(x,y)=\lim_{x\to0}\frac1x e^{-1}
\]
不存在，所以 \(\lim\limits_{\substack{x\to0\\y\to0}}f(x,y)\) 不存在，\(f(x,y)\) 在 \((0,0)\) 点不连续.

当 \(y_0=0,x_0\ne0\) 时，\((x,y)\to(x_0,y_0)\)
\[
f(x,y)=\frac1x\frac{x^2}{y^2}e^{-\frac{x^2}{y^2}}
\]
\[
\lim_{\substack{x\to x_0\\y\to0}}f(x,y)=0
\]
所以 \(f(x,y)\) 在 \((x_0,0)(x_0\ne0)\) 点连续.

\(f(x,y)\) 在 \(\mathbf R^2\) 中只有一个不连续点 \((0,0)\).

**例4** 讨论函数
\[
f(x,y)=
\begin{cases}
\dfrac{x^2y^2}{(x^2+y^2)^{3/2}}, & x^2+y^2\ne0,\\[4pt]
0, & x^2+y^2=0
\end{cases}
\]
在 \((0,0)\) 点处的连续性.

**【解】**
\[
\lim_{\substack{x\to0\\y\to0}}f(x,y)
=\lim_{r\to0}\frac{r^4\cos^2\theta\sin^2\theta}{r^3}
=\lim_{r\to0}r\cos^2\theta\sin^2\theta
=0=f(0,0),
\]
其中 \(x=r\cos\theta,y=r\sin\theta\)，所以 \(f(x,y)\) 在 \((0,0)\) 处连续.` },
    ],
    quiz: [{"q": "$\\lim_{(x,y)\\to(0,0)}\\frac{xy}{x^2+y^2}$", "options": ["等于 $0$", "等于 $\\frac12$", "不存在", "等于 $1$"], "answer": 2, "explain": "沿 $y=kx$ 得 $\\frac{k}{1+k^2}$，随 $k$ 变化，故不存在。"}, {"q": "二元函数 $f(x,y)$ 在 $(x_0,y_0)$ 连续的定义是", "options": ["$\\lim_{(x,y)\\to(x_0,y_0)}f(x,y)=f(x_0,y_0)$", "偏导数存在", "可微", "沿 $x$ 轴连续"], "answer": 0, "explain": "连续即极限值等于函数值。"}, {"q": "二元函数重极限存在，要求点沿", "options": ["某一条路径趋于时极限存在", "任意路径趋于时极限都存在且相等", "两条坐标轴趋于时相等", "偏导数存在"], "answer": 1, "explain": "重极限要求任意路径趋近都趋于同一值；若两条路径极限不同即可判定不存在。"}]
  };
})();
