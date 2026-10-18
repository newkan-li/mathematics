window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["jc06_s9"] = {
    id: "jc06_s9",
    ch: "第八章 微分方程",
    title: "零基础进阶题",
    probTitle: "第八章 微分方程 零基础进阶题（含原书解析）",
    book: "李永乐《复习全书·基础篇 零基础进阶题》",
    pages: [32, 34],
    img: "assets/img/jcadv",
    problems: [
      { n: "1", q: R`通解为 \(y=(C_1+C_2x)\mathrm{e}^{-2x}+C_3\mathrm{e}^{3x}\) 的三阶常系数齐次线性微分方程是______.`, a: "", sol: R`由通解形式可知，三个特征根为 \(r_1=r_2=-2,r_3=3\)，因此特征方程为
\[
(r+2)^2(r-3)=0,
\]
即 \(r^3+r^2-8r-12=0\)，故所求的微分方程为
\[
y'''+y''-8y'-12y=0.
\]` },
      { n: "2", q: R`设二阶常系数线性微分方程 \(y''+py'+qy=C\mathrm{e}^{x}\) 有特解 \(y=\mathrm{e}^{-x}+x\mathrm{e}^{x}\)，则该方程的通解为______.`, a: "", sol: R`方法一 由特解 \(y=\mathrm{e}^{-x}+x\mathrm{e}^{x}\)，及右端的自由项 \(C\mathrm{e}^{x}\) 可知，\(y_1=\mathrm{e}^{-x},y_2=\mathrm{e}^{x}\) 均为该方程相对应的齐次线性微分方程的特解，\(y^{*}=x\mathrm{e}^{x}\) 为原方程的一个特解，所以该方程的通解为
\[
y=C_1\mathrm{e}^{-x}+C_2\mathrm{e}^{x}+x\mathrm{e}^{x}.
\]

方法二 将特解 \(y=\mathrm{e}^{-x}+x\mathrm{e}^{x}\) 代入原方程，得
\[
\mathrm{e}^{-x}+(x+2)\mathrm{e}^{x}+p[-\mathrm{e}^{-x}+(x+1)\mathrm{e}^{x}]+q[\mathrm{e}^{-x}+x\mathrm{e}^{x}]=C\mathrm{e}^{x},
\]
整理得
\[
(1-p+q)\mathrm{e}^{-x}+(1+p+q)x\mathrm{e}^{x}+(2+p)\mathrm{e}^{x}=C\mathrm{e}^{x},
\]
所以有
\[
\begin{cases}
1-p+q=0,\\
1+p+q=0,\\
2+p=C,
\end{cases}\quad\text{解得}\quad\begin{cases}
p=0,\\
q=-1,\\
C=2,
\end{cases}
\]
故原方程为 \(y''-y=2\mathrm{e}^{x}\)，

由特征方程 \(r^2-1=0\)，解得特征根为 \(r=\pm1\)，对应的齐次方程 \(y''-y=0\) 的通解为 \(Y=C_1\mathrm{e}^{-x}+C_2\mathrm{e}^{x}\)，所以原方程的通解为
\[
y=C_1\mathrm{e}^{-x}+C_2\mathrm{e}^{x}+\mathrm{e}^{-x}+x\mathrm{e}^{x}=(C_1+1)\mathrm{e}^{-x}+C_2\mathrm{e}^{x}+x\mathrm{e}^{x}.
\]` },
      { n: "3", q: R`已知函数 \(y_1=3\)，\(y_2=2x\)，\(y_3=\mathrm{e}^{x}\) 是二阶线性微分方程 \(y''+P(x)y'+Q(x)y=f(x)\) 的三个解，则该方程满足初始条件 \(y(0)=1\)，\(y'(0)=2\) 的特解为______.`, a: "", sol: R`\(y_2-y_1=2x-3\) 与 \(y_3-y_1=\mathrm{e}^{x}-3\) 是对应的齐次方程的解，且
\[
\frac{y_2-y_1}{y_3-y_1}=\frac{2x-3}{\mathrm{e}^{x}-3}\neq\text{常数},
\]
所以 \(y_2-y_1\) 与 \(y_3-y_1\) 是对应的齐次方程的两个线性无关的解，又 \(y_1=3\) 是非齐次方程的特解，故原方程的通解为
\[
y=C_1(2x-3)+C_2(\mathrm{e}^{x}-3)+3,
\]
又
\[
y'=2C_1+C_2\mathrm{e}^{x}.
\]
将初始条件 \(y(0)=1,y'(0)=2\) 代入通解 \(y\) 和 \(y'\) 得
\[
\begin{cases}
-3C_1-2C_2+3=1,\\
2C_1+C_2=2,
\end{cases}
\]
解得
\[
\begin{cases}
C_1=2,\\
C_2=-2,
\end{cases}
\]
所以方程的特解为 \(y=4x-2\mathrm{e}^{x}+3\).` },
      { n: "4", q: R`（仅数学三要求）差分方程 \(y_{x+1}-y_x=x\cdot 2^x\) 的通解为______.`, a: "", sol: R`由特征方程 \(\lambda-1=0\)，得特征根 \(\lambda=1\)，齐次方程 \(y_{x+1}-y_x=0\) 的通解为
\[
Y_x=C\cdot1^x=C;
\]
右端的 \(f(x)=x2^x\)，且 2 不是特征根，设 \(y_{x+1}-y_x=x2^x\) 的特解为
\[
y_x^{*}=2^x(ax+b),
\]
将特解代入方程有，
\[
2^{x+1}[a(x+1)+b]-2^x(ax+b)=x2^x,
\]
解得 \(a=1,b=-2\)，即特解 \(y_x^{*}=2^x(x-2)\)，所以方程 \(y_{x+1}-y_x=x2^x\) 的通解为
\[
y_x=C+2^x(x-2)\quad(C\text{为任意常数}).
\]` },
      { n: "5", q: R`（仅数学三要求）差分方程 \(\Delta^2y_x-y_x=5\) 的通解为______.`, a: "", sol: R`由 \(\Delta^2y_x=y_{x+2}-2y_{x+1}+y_x\)，原方程可化为 \(y_{x+2}-2y_{x+1}=5\)，

由特征方程 \(\lambda-2=0\)，得对应的齐次方程 \(y_{x+1}-2y_x=0\) 的通解为
\[
Y_x=C2^x;
\]
设 \(y_{x+2}-2y_{x+1}=5\) 的特解为 \(y_x^{*}=a\)，将特解代入方程有 \(a-2a=5\)，即 \(a=-5\). 故所求通解为 \(y_x=C2^x-5\)（\(C\) 为任意常数）.` },
      { n: "6", q: R`微分方程 \(\mathrm{d}x+y(y-2x)\mathrm{d}y=0\) 是

(A) 可分离变量的微分方程.

(B) 二阶线性微分方程.

(C) 一阶线性齐次微分方程.

(D) 一阶线性非齐次微分方程.`, a: "(D)", sol: R`显然，微分方程不可分离变量，也不含二阶导数或微分，排除(A)(B).

把方程改写成 \(\frac{\mathrm{d}y}{\mathrm{d}x}=-\frac{1}{y(y-2x)}\)，易知不是线性方程；

如果把 \(y\) 当作自变量，\(x\) 看作 \(y\) 的函数，把方程改写成 \(\frac{\mathrm{d}x}{\mathrm{d}y}-2yx=-y^2\)，易知方程是一阶线性非齐次微分方程.` },
      { n: "7", q: R`已知函数 \(y=A\sin x\)（\(A\) 为任意常数）和微分方程 \(\frac{\mathrm{d}^2y}{\mathrm{d}x^2}+y=0\)，则下列说法正确的是

(A) \(y\) 是该微分方程的解.

(B) \(y\) 是该微分方程的通解.

(C) \(y\) 是该微分方程的特解.

(D) \(y\) 是该微分方程的所有解.`, a: "(A)", sol: R`易知 \(y=A\sin x\) 满足方程 \(\frac{\mathrm{d}^2y}{\mathrm{d}x^2}+y=0\)，所以 \(y\) 是该微分方程的解.

方程为二阶微分方程，通解中应含有两个任意常数，因此 \(y=A\sin x\) 不是该方程的通
解，自然也不是方程的所有解，排除(B)(D).

又因为 \(y=A\sin x\) 含有任意常数 \(A\)，所以 \(y=A\sin x\) 不是该方程的特解，排除(C).` },
      { n: "8", q: R`求微分方程 \(\frac{\mathrm{d}y}{\mathrm{d}x}-\cos(x-y)=\cos(x+y)\) 满足初始条件 \(y\big|_{x=0}=0\) 的特解.`, a: "", sol: R`由 \(\cos(x-y)=\cos x\cdot\cos y+\sin x\cdot\sin y,\cos(x+y)=\cos x\cdot\cos y-\sin x\cdot\sin y\) 知，原方程可以恒等变形为
\[
\frac{\mathrm{d}y}{\mathrm{d}x}=2\cos x\cdot\cos y,
\]
分离变量得
\[
\frac{\mathrm{d}y}{\cos y}=2\cos x\,\mathrm{d}x,
\]
两边积分，得
\[
\ln|\sec y+\tan y|=2\sin x+C_1,
\]
方程的通解为
\[
\sec y+\tan y=C\mathrm{e}^{2\sin x}\quad(C\text{为任意常数}),
\]
将初始条件 \(y\big|_{x=0}=0\) 代入通解，解得 \(C=1\)，所以方程的特解为
\[
\sec y+\tan y=\mathrm{e}^{2\sin x}.
\]` },
      { n: "9", q: R`解微分方程 \(\frac{\mathrm{d}y}{\mathrm{d}x}=x^2+2xy+y^2+2x+2y+1\).

第一篇 高等数学`, a: "", sol: R`将方程改写为 \(\frac{\mathrm{d}y}{\mathrm{d}x}=(x+y+1)^2\)，

令 \(u=x+y+1\)，则 \(\frac{\mathrm{d}y}{\mathrm{d}x}=\frac{\mathrm{d}u}{\mathrm{d}x}-1\)，原方程可化为
\[
\frac{\mathrm{d}u}{\mathrm{d}x}-1=u^2,
\]
分离变量得
\[
\frac{\mathrm{d}u}{1+u^2}=\mathrm{d}x,
\]
两边积分，得 \(\arctan u=x+C\)，即 \(u=\tan(x+C)\)，所以方程的通解为
\[
y=\tan(x+C)-x-1\quad(C\text{为任意常数}).
\]` },
      { n: "10", q: R`求微分方程 \(y\frac{\mathrm{d}y}{\mathrm{d}x}+\frac{xy^2}{1+x^2}=\frac{1}{2}x\) 的通解.`, a: "", sol: R`注意到 \(\frac{\mathrm{d}y^2}{\mathrm{d}x}=2y\frac{\mathrm{d}y}{\mathrm{d}x}\)，可把方程改写成
\[
\frac{\mathrm{d}y^2}{\mathrm{d}x}+\frac{2x}{1+x^2}y^2=x,
\]
这是以 \(y^2\) 为因变量，\(x\) 为自变量的一阶线性微分方程，其中 \(p(x)=\frac{2x}{1+x^2},q(x)=x\)，

代入通解公式，有
\[
\begin{aligned}
y^2&=\mathrm{e}^{-\int p(x)\mathrm{d}x}\left(\int q(x)\mathrm{e}^{\int p(x)\mathrm{d}x}\mathrm{d}x+C\right)\\
&=\mathrm{e}^{-\int\frac{2x}{1+x^2}\mathrm{d}x}\left(\int x\mathrm{e}^{\int\frac{2x}{1+x^2}\mathrm{d}x}\mathrm{d}x+C\right)\\
&=\frac{1}{1+x^2}\left(\int x(1+x^2)\mathrm{d}x+C\right)\\
&=\frac{1}{1+x^2}\left(\frac{1}{2}x^2+\frac{1}{4}x^4+C\right),
\end{aligned}
\]
所以方程的通解为 \(y^2=\frac{1}{1+x^2}\left(\frac{1}{2}x^2+\frac{1}{4}x^4+C\right)\)（\(C\) 为任意常数）.` },
      { n: "11", q: R`求微分方程 \((y^4-3x^2)\mathrm{d}y+xy\,\mathrm{d}x=0\) 的通解.`, a: "", sol: R`如果把 \(y\) 看作 \(x\) 的函数，把方程改写成
\[
\frac{\mathrm{d}y}{\mathrm{d}x}=-\frac{xy}{y^4-3x^2},
\]
则方程既不是变量可分离方程，也不是齐次方程或一阶线性方程，求解比较困难.

如果把 \(y\) 当作自变量，\(x\) 看作 \(y\) 的函数，把方程改写成 \(\frac{\mathrm{d}x}{\mathrm{d}y}=-\frac{y^4-3x^2}{xy}\)，即
\[
\frac{\mathrm{d}x}{\mathrm{d}y}-\frac{3}{y}x=-y^3x^{-1},
\]
这是伯努利方程，令 \(z=x^2\)，则 \(\frac{\mathrm{d}z}{\mathrm{d}y}=2x\frac{\mathrm{d}x}{\mathrm{d}y}\)，方程化为线性方程
\[
\frac{\mathrm{d}z}{\mathrm{d}y}-\frac{6}{y}z=-2y^3,
\]
所以
\[
\begin{aligned}
z=x^2&=\mathrm{e}^{-\int p(y)\mathrm{d}y}\left[\int q(y)\mathrm{e}^{\int p(y)\mathrm{d}y}\mathrm{d}y+C\right]\\
&=\mathrm{e}^{-\int\frac{6}{y}\mathrm{d}y}\left(\int -2y^3\mathrm{e}^{\int\frac{6}{y}\mathrm{d}y}\mathrm{d}y+C\right)\\
&=y^6\left(\int -2y^3\cdot\frac{1}{y^6}\mathrm{d}y+C\right)=y^6\left(\frac{1}{y^2}+C\right)=y^4+Cy^6,
\end{aligned}
\]
故方程的通解为 \(x^2=y^4+Cy^6\)（\(C\) 为任意常数）.` },
      { n: "12", q: R`设连续函数 \(f(x)\) 满足方程 \(f(x)=\mathrm{e}^x-\int_0^x (x-t)f(t)\,\mathrm{d}t\)，试求 \(f(x)\).`, a: "", sol: R`将 \(f(x)=\mathrm{e}^{x}-\int_0^x(x-t)f(t)\,\mathrm{d}t\) 整理为
\[
f(x)=\mathrm{e}^{x}-x\int_0^x f(t)\,\mathrm{d}t+\int_0^x tf(t)\,\mathrm{d}t,
\]
对上式两边求导，得
\[
f'(x)=\mathrm{e}^{x}-\int_0^x f(t)\,\mathrm{d}t,
\]
两边再求导，得 \(f''(x)=\mathrm{e}^{x}-f(x)\)，即
\[
f''(x)+f(x)=\mathrm{e}^{x},
\]
且有 \(f(0)=1,f'(0)=1\).

即 \(f(x)\) 为微分方程 \(y''+y=\mathrm{e}^{x}\) 满足初始条件 \(y(0)=1,y'(0)=1\) 的特解.

下面求微分方程 \(y''+y=\mathrm{e}^{x}\) 的特解：

由特征方程为 \(r^2+1=0\)，得特征根为 \(r=\pm\mathrm{i}\)，齐次方程 \(y''+y=0\) 的通解为
\[
Y=C_1\sin x+C_2\cos x;
\]
右端的自由项 \(\mathrm{e}^{x}\)，设 \(y^{*}=a\mathrm{e}^{x}\) 为 \(y''+y=\mathrm{e}^{x}\) 的特解，代入方程求得 \(y^{*}=\frac{1}{2}\mathrm{e}^{x}\)，所以方程 \(y''+y=\mathrm{e}^{x}\) 的通解为 \(y=C_1\sin x+C_2\cos x+\frac{1}{2}\mathrm{e}^{x}\).

将初始条件 \(y(0)=1,y'(0)=1\) 代入通解可得 \(C_1=\frac{1}{2},C_2=\frac{1}{2}\).

所以 \(f(x)=\frac{1}{2}\sin x+\frac{1}{2}\cos x+\frac{1}{2}\mathrm{e}^{x}\).` },
      { n: "13", q: R`设第一象限内连续光滑的凹曲线 \(y=f(x)\) 过点 \(A(0,1)\) 和 \(B(1,0)\)，\(P(x,y)\) 为曲线弧 \(AB\) 上任一点，由曲线弧 \(AP\) 与弦 \(AP\) 所围的拱形面积为 \(\frac{1}{6}x^3\)，求函数 \(y=f(x)\) 的表达式.`, a: "", sol: R`根据题设，有
\[
\frac{1}{2}x[1+f(x)]-\int_0^x f(x)\,\mathrm{d}x=\frac{1}{6}x^3,
\]
两边求导数，得
\[
xf'(x)-f(x)=x^2-1,
\]
把上式变形为
\[
f'(x)-\frac{1}{x}f(x)=x-\frac{1}{x},
\]
这是一阶线性微分方程，通解为
\[
\begin{aligned}
f(x)&=\mathrm{e}^{-\int\frac{1}{x}\mathrm{d}x}\left[\int\left(x-\frac{1}{x}\right)\cdot\mathrm{e}^{\int\frac{1}{x}\mathrm{d}x}\mathrm{d}x+C\right]=x\left[\int\left(x-\frac{1}{x}\right)\cdot\frac{1}{x}\mathrm{d}x+C\right]\\
&=x\left(x+\frac{1}{x}\right)+Cx=x^2+1+Cx,
\end{aligned}
\]
又曲线 \(y=f(x)\) 过点 \(B(1,0)\)，代入通解得 \(C=-2\)，所以
\[
f(x)=x^2-2x+1=(x-1)^2.
\]` },
      { n: "14", q: R`根据冷却定律：物体温度的变化率与物体和当时空气温度之差成正比（比例系数 \(\lambda>0\)），若一物体的温度为 \(100\,^\circ\mathrm{C}\)，将其放置在空气温度为 \(20\,^\circ\mathrm{C}\) 的环境中冷却，试求物体温度随时间 \(t\) 的变化规律.`, a: "", sol: R`设物体的温度 \(T\) 与时间 \(t\) 的函数关系为 \(T=T(t)\)，由题意得
\[
\begin{cases}
\frac{\mathrm{d}T}{\mathrm{d}t}=-\lambda(T-20)\\
\left.T\right|_{t=0}=100
\end{cases}
\]
将方程 \(\frac{\mathrm{d}T}{\mathrm{d}t}=-\lambda(T-20)\) 分离变量，得
\[
\frac{\mathrm{d}T}{T-20}=-\lambda\,\mathrm{d}t
\]
两边积分，得 \(\ln|T-20|=-\lambda t+C_1\)，即
\[
T=C\mathrm{e}^{-\lambda t}+20\quad(\text{其中 }C=\pm\mathrm{e}^{C_1}\text{ 为任意常数}),
\]
将初始条件 \(\left.T\right|_{t=0}=100\) 代入上式，求得 \(C=80\)，于是物体温度的变化规律为
\[
T=80\mathrm{e}^{-\lambda t}+20.
\]` },
      { n: "15", q: R`（仅数学三要求）某商家销售某种商品，商品的价格 \(p=7-0.2x\)（万元/吨），其中 \(x\) 为销售量（单位：吨），商品的成本函数是 \(C(x)=3x+1\)（单位：万元）. 每销售一吨商品，政府要征税 \(t\)（万元）.

（1）求该商家获得最大利润时的销售量；

（2）\(t\) 为何值时，政府税收总额最大.

复习全书基础篇

**作业超链接**　《基础过关660题》

| 知识点 |  | 题号 |
| --- | --- | --- |
| 数一 | 一阶微分方程 | 76 77 78 79 82 211 212 215 216 |
| 数一 | 高阶微分方程 | 80 81 83 84 85 213 214 217 218 219 220 221 222 223 224 225 |
| 数二 | 一阶微分方程 | 76 77 78 79 82 211 212 215 216 222 223 494 495 496 497 498 499 |
| 数二 | 高阶微分方程 | 80 81 83 84 85 213 214 217 218 219 220 221 224 225 491 492 493 500 606 607 608 609 610 |
| 数三 | 一阶微分方程 | 76 77 78 79 82 211 212 215 216 222 223 224 591 594 595 596 597 600 |
| 数三 | 高阶微分方程 | 80 81 83 84 85 213 214 217 218 219 220 221 225 592 593 631 632 |
| 数三 | 差分方程 | 598 599 634 635 |`, a: "", sol: R`设政府征税总额为 \(T\) 万元，则 \(T=tx\).

(1) 收益函数 \(R(x)=px=7x-0.2x^2\)，

利润函数 \(L(x)=R(x)-C(x)-T=-0.2x^2+(4-t)x-1\)，

令 \(L'(x)=-0.4x+(4-t)=0\)，得 \(x=\frac{5}{2}(4-t)\)，

又 \(L''(x)=-0.4<0\)，所以当销售量 \(x=\frac{5}{2}(4-t)\) 时，商家获得最大利润.

(2) \(T(t)=tx=\frac{5}{2}(4t-t^2)\)，

令 \(T'(t)=\frac{5}{2}(4-2t)=0\)，得 \(t=2\)，又 \(T''(t)=-5<0\)，所以当 \(t=2\) 时，政府税收总额最大.` },
    ]
  };
})();
