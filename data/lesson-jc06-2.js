window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["jc06_s1"] = {
    id: "jc06_s1",
    ch: "第八章 微分方程",
    title: "第二节 二阶及高阶线性微分方程",
    book: "李永乐《数学复习全书·基础篇》",
    pages: [202, 208],
    img: "assets/img/jichu",
    content: [
      { p: 202, md: R`**例8**　求微分方程 \(x\frac{dy}{dx}-2x+\sin(2x-y)=0\) 的通解.

**【解】**　令 \(u=2x-y\)，则 \(\frac{du}{dx}=2-\frac{dy}{dx}\)，即 \(\frac{dy}{dx}=2-\frac{du}{dx}\).

原方程化为 \(x\left(2-\frac{du}{dx}\right)-2x+\sin u=0\)，亦是 \(\frac{du}{\sin u}=\frac{1}{x}dx\)，进而有
\[
\ln|\csc u-\cot u|=\ln|x|+\ln C_1,
\]
所求的通解为 \(\csc(2x-y)-\cot(2x-y)=Cx\)，其中 \(C\) 为任意常数.

**例9**　设函数 \(f(x)\) 连续，且满足 \(\int_0^x f(x-t)dt=\int_0^x (x-t)f(t)dt+e^{-x}-1\)，求 \(f(x)\).

**【解】**　原方程变形为
\[
\int_0^x f(u)du=x\int_0^x f(t)dt-\int_0^x tf(t)dt+e^{-x}-1.
\]
方程两边对 \(x\) 求导得
\[
f(x)=\int_0^x f(t)dt+xf(x)-xf(x)-e^{-x},\text{即 } f(x)=\int_0^x f(t)dt-e^{-x},
\]
方程两边再对 \(x\) 求导得 \(f'(x)=f(x)+e^{-x}\)，亦是 \(f'(x)-f(x)=e^{-x}\)，
\[
f(x)=e^{\int dx}\left(C+\int e^{-x}e^{-\int dx}dx\right)
=e^x\left(C+\int e^{-2x}dx\right)=e^x\left(C-\frac{1}{2}e^{-2x}\right)=Ce^x-\frac{1}{2}e^{-x},
\]
由 \(f(x)=\int_0^x f(t)dt-e^{-x}\) 有 \(f(0)=-1\)，因而 \(C=-\frac{1}{2}\)，故 \(f(x)=-\frac{e^x+e^{-x}}{2}\).

**【评注】**　求解积分方程，要注意题中隐含的初值条件，如本题中的 \(f(0)=-1\).

## 第二节　二阶及高阶线性微分方程

### 一、线性微分方程

**定义**　方程
\[
y^{(n)}+a_1(x)y^{(n-1)}+\cdots+a_{n-1}(x)y'+a_n(x)y=f(x),\quad (f(x)\neq 0)
\tag{1}
\]
其中系数 \(a_i(x)\) 为已知函数，称为 \(n\) 阶线性非齐次微分方程，\(f(x)\) 称为自由项.方程
\[
y^{(n)}+a_1(x)y^{(n-1)}+\cdots+a_{n-1}(x)y'+a_n(x)y=0
\tag{2}
\]
称为 \(n\) 阶线性齐次微分方程.若其中的 \(a_i(x)(i=1,2,\cdots,n)\) 与前一方程的完全一样，则称后一方程为前一方程对应的齐次方程.

以上(1)及(2)中，均设 \(a_i(x)(i=1,2,\cdots,n)\) 与 \(f(x)\) 在某区间 \((a,b)\) 内连续.

**定义（线性相关与线性无关）**

设 \(y_1(x),\cdots,y_m(x)\) 是定义在某区间 \((a,b)\) 内的 \(m\) 个函数，如果存在不全为零的 \(m\) 个常数 \(k_1,\cdots,k_m\)，使得
\[
k_1y_1(x)+\cdots+k_my_m(x)\equiv 0
\tag{3}
\]
成立，则称这 \(m\) 个函数 \(y_1(x),\cdots,y_m(x)\) 在该区间内线性相关，否则称 \(y_1(x),\cdots,y_m(x)\) 在该区间内线性无关.即由(3)只能推出 \(k_1=\cdots=k_m=0\)，则称 \(y_1(x),\cdots,y_m(x)\) 在该区间内线性无关.` },
      { p: 203, md: R`对于两个函数 \(y_1(x)\) 与 \(y_2(x)\) 线性无关等价于 \(y_1(x)\) 与 \(y_2(x)\) 之比不为常数.

### 二、线性微分方程解的性质

**定理1**　设 \(y^*(x)\) 为(1)的一个解，\(Y(x)\) 为(1)所对应的(2)的一个解，则 \(y=Y(x)+y^*(x)\) 为(1)的解.

2. 设 \(y_1^*(x)\) 与 \(y_2^*(x)\) 为(1)的两个解，则 \(y=y_1^*(x)-y_2^*(x)\) 为(1)所对应的(2)的解.

**定理（齐次线性方程的解的叠加）**

设 \(y_1(x),\cdots,y_m(x)\) 是齐次线性方程(2)的 \(m\) 个解，则它们的线性组合
\[
y=\sum_{i=1}^m C_iy_i
\]
也是(2)的解，其中 \(C_i(i=1,\cdots,m)\) 是 \(m\) 个常数.

**定理（齐次线性方程的通解结构）**

设 \(y_i(x)(i=1,2,\cdots,n)\) 为 \(n\) 阶齐次线性方程(2)的 \(n\) 个线性无关的解，\(C_i(i=1,2,\cdots,n)\) 为 \(n\) 个任意常数，则
\[
y=\sum_{i=1}^n C_iy_i(x)
\]
为(2)的通解.

**定理（非齐次线性方程的通解结构）**

设 \(y^*(x)\) 为(1)的一个解，\(Y(x)\) 为(1)对应的(2)的通解，则
\[
y=Y(x)+y^*(x)
\]
为(1)的通解.

**定理（自由项为 \(f(x)=f_1(x)+f_2(x)\) 的解的叠加原理）**

设 \(y_i^*\) 为
\[
y^{(n)}+a_1(x)y^{(n-1)}+\cdots+a_{n-1}(x)y'+a_n(x)y=f_i(x)
\]
的解 \((i=1,2)\)，则 \(y_1^*(x)+y_2^*(x)\) 为
\[
y^{(n)}+a_1(x)y^{(n-1)}+\cdots+a_{n-1}(x)y'+a_n(x)y=f_1(x)+f_2(x)
\]
的解.

**定理（二阶常系数线性齐次方程的通解求法及公式）**

二阶常系数线性齐次方程可写成
\[
y''+py'+qy=0
\tag{4}
\]
其中 \(p,q\) 是常数.方程
\[
r^2+pr+q=0
\tag{5}
\]
称为方程(4)对应的特征方程，它的根 \(r\) 称为特征根.按特征根的不同情况，方程(4)对应的通解如下表：

| 特征方程 \(r^2+pr+q=0\) 的根 | 微分方程 \(y''+py'+qy=0\) 的通解 |
|---|---|
| 一对不相等的实根 \(r_1\neq r_2\) | \(y=C_1e^{r_1x}+C_2e^{r_2x}\) |
| 一对相等的实根 \(r_1=r_2\) | \(y=(C_1+C_2x)e^{r_1x}\) |
| 一对共轭复根 \(r_{1,2}=\alpha\pm\beta i,\beta>0\) | \(y=e^{\alpha x}(C_1\cos\beta x+C_2\sin\beta x)\) |

**【注】**　2阶可推广到 \(n\) 阶.如下：

\(n\) 阶常系数线性齐次微分方程
\[
y^{(n)}+a_1y^{(n-1)}+\cdots+a_{n-1}y'+a_ny=0,
\tag{6}
\]
对应的特征方程` },
      { p: 204, md: R`\[
r^n+a_1r^{n-1}+\cdots+a_{n-1}r+a_n=0.
\tag{7}
\]

特征根与微分方程的通解对应关系如下表：

| 特征方程(7)的根 | 微分方程(6)通解中对应的项 |
|---|---|
| ① 单重实根 \(r\) | 对应一项 \(Ce^{rx}\) |
| ② \(k\) 重实根 \(r\) | 对应 \(k\) 项 \((C_1+C_2x+\cdots+C_kx^{k-1})e^{rx}\) |
| ③ 单重复数根 \(r_{1,2}=a\pm\beta i,\beta>0\) | 对应两项 \(e^{ax}(C_1\cos\beta x+C_2\sin\beta x)\) |
| ④ \(k\) 重复数根 \(r_{1,2}=a\pm\beta i,\beta>0\) | 对应 \(2k\) 项 \(e^{ax}\left[(A_1+A_2x+\cdots+A_kx^{k-1})\cos\beta x+(B_1+B_2x+\cdots+B_kx^{k-1})\sin\beta x\right]\) |

特征方程(7)有且仅有 \(n\) 个根（包括实的、复的，以及它们的重数），按上表，对应了(6)的通解中 \(n\) 项，相加便得通解.其中 \(C,C_i,A_i,B_i\) 为任意常数.

**定理（某些特殊自由项的二阶常系数线性非齐次微分方程的解法）**

**类型1**　方程 \(y''+py'+qy=P_m(x)e^{ax}\) 的解法（其中 \(P_m(x)\) 为 \(x\) 的 \(m\) 次已知多项式）：

第一步，写出对应的齐次微分方程的通解 \(Y(x)\).

第二步，求该非齐次微分方程的特解 \(y^*(x)\)，命之如下：
\[
y^*(x)=x^kQ_m(x)e^{ax}
\]
其中 \(Q_m(x)\) 为 \(x\) 的 \(m\) 次多项式，系数待定，
\[
k=\begin{cases}
0, & \text{当 } a \text{ 不是特征根时}\\
1, & \text{当 } a \text{ 为单重特征根时}\\
2, & \text{当 } a \text{ 为二重特征根时}
\end{cases}
\]

**类型2**　方程 \(y''+py'+qy=P_m(x)e^{ax}\cos bx\) 或 \(y''+py'+qy=Q_m(x)e^{ax}\sin bx\) 或 \(y''+py'+qy=P_m(x)e^{ax}\cos bx+Q_m(x)e^{ax}\sin bx\) 的解法（其中 \(P_m(x),Q_m(x)\) 为 \(x\) 的 \(m\) 次已知多项式）：

第一步，按上面1，写出对应的齐次微分方程的通解 \(Y(x)\).

第二步，求该非齐次微分方程的特解 \(y^*(x)\)，命之如下：
\[
y^*(x)=x^k\left[R_m(x)e^{ax}\cos bx+S_m(x)e^{ax}\sin bx\right]
\]
其中 \(R_m(x),S_m(x)\) 为 \(x\) 的 \(m\) 次多项式，系数待定，
\[
k=\begin{cases}
0, & \text{当 } a+ib \text{ 不是特征根时}\\
1, & \text{当 } a+ib \text{ 为单重特征根时}
\end{cases}
\]

**可降阶方程的解法**

1. \(y''=f(x)\) 型可降阶二阶方程：做两次积分就可得到它的通解
\[
y=\int\left(\int f(x)dx\right)dx+C_1x+C_2
\]

2. \(y''=f(x,y')\) 型（缺 \(y\)）的可降阶二阶方程：

命 \(p=y',y''=\frac{dp}{dx}\)，从而化为
\[
\frac{dp}{dx}=f(x,p)
\]
如果从它可解得 \(p=\varphi(x,C_1)\)，则得原方程的通解为 \(y=\int\varphi(x,C_1)dx+C_2\).

3. \(y''=f(y,y')\) 型（缺 \(x\)）的可降阶二阶方程：

命 \(p=y',y''=\frac{dp}{dx}=\frac{dp}{dy}\cdot\frac{dy}{dx}=p\frac{dp}{dy}\)，从而化为
\[
p\cdot\frac{dp}{dy}=f(y,p)\]` },
      { p: 205, md: R`如果能解出
\[
p=\psi(y,C_1)
\]
再由 \(p=\frac{dy}{dx}\) 代入，解得
\[
\int\frac{dy}{\psi(y,C_1)}=\int dx+C_2=x+C_2
\]
做出左边积分，便得原微分方程的通解.

必须注意2与3的区别.作变量代换 \(y'=p\) 之后，对于2，\(y''=\frac{dp}{dx}\)，而对于3，
\[
y''=\frac{dp}{dx}=\frac{dp}{dy}\cdot\frac{dy}{dx}=p\frac{dp}{dy}.
\]

**定理（欧拉方程的解法）**

方程
\[
x^2\frac{d^2y}{dx^2}+a_1x\frac{dy}{dx}+a_2y=f(x)
\tag{8}
\]
称为欧拉方程，其中 \(a_1\) 与 \(a_2\) 为已知常数，\(f(x)\) 为 \(x\) 的已知函数.它的解法是：

若 \(x>0\)，命 \(x=e^t\) 作变量代换，有 \(t=\ln x\)，从而 \(\frac{dt}{dx}=\frac{1}{x}\)，
\[
\frac{dy}{dx}=\frac{dy}{dt}\cdot\frac{dt}{dx}=\frac{1}{x}\frac{dy}{dt}
\]
\[
\frac{d^2y}{dx^2}=\frac{d}{dx}\left(\frac{1}{x}\frac{dy}{dt}\right)=-\frac{1}{x^2}\frac{dy}{dt}+\frac{1}{x}\frac{d}{dx}\left(\frac{dy}{dt}\right)=-\frac{1}{x^2}\frac{dy}{dt}+\frac{1}{x^2}\frac{d^2y}{dt^2}
\]
方程(8)化为
\[
\frac{d^2y}{dt^2}+(a_1-1)\frac{dy}{dt}+a_2y=f(e^t),
\]
它是常系数线性微分方程，解之再还原为 \(x\) 便可.

若 \(x<0\)，命 \(x=-e^t\)，可依类似处理.

**例1**　设 \(y_1(x),y_2(x),y_3(x)\) 是常微分方程 \(y''+p(x)y'+q(x)y=f(x)\) 的三个解，其中 \(p(x),q(x),f(x)\) 均为连续函数，且 \(\frac{y_1(x)-y_2(x)}{y_2(x)-y_3(x)}\) 不是常数，则原方程的通解为____.

**【解】**　由条件 \(y_1(x),y_2(x),y_3(x)\) 是非齐次线性常微分方程的三个解，则
\[
y_1(x)-y_2(x),\quad y_2(x)-y_3(x)
\]
为相应齐次方程的两个解，由条件 \(\frac{y_1(x)-y_2(x)}{y_2(x)-y_3(x)}\) 不是常数，可知齐次方程的两个解线性无关，故齐次方程 \(y''+p(x)y'+q(x)y=0\) 的通解为
\[
y=C_1[y_1(x)-y_2(x)]+C_2[y_2(x)-y_3(x)],
\]
而非齐次方程的一个特解是 \(y_1(x)\)，所以原来的非齐次线性常微分方程 \(y''+p(x)y'+q(x)y=f(x)\) 的通解为
\[
y=C_1[y_1(x)-y_2(x)]+C_2[y_2(x)-y_3(x)]+y_1(x).
\]

**例2**　具有两个特解 \(y_1=xe^{-x},y_2=e^x\) 的三阶线性常系数齐次常微分方程为____.

**【解】**　设三阶线性常系数齐次常微分方程为
\[
y'''+py''+qy'+ry=0\]` },
      { p: 206, md: R`则其特征方程为

\[
\lambda^3+p\lambda^2+q\lambda+r=0
\]

因为常微分方程有二个特解 \(y_1=xe^{-x},y_2=e^x\)，所以特征方程有二个特征值 \(\lambda_1=-1\)（二重），\(\lambda_2=1\).

特征方程为

\[
(\lambda+1)^2(\lambda-1)=0
\]

\[
\lambda^3+\lambda^2-\lambda-1=0
\]

因此所求的三阶线性常系数齐次常微分方程为 \(y'''+y''-y'-y=0\).

**【评注】** 其实由两个特解可以知道该线性常微分方程的通解为

\[
y=C_1e^{-x}+C_2xe^{-x}+C_3e^x
\]

**例3** 微分方程 \(y''-6y'+9y=0\) 的通解为 \(\underline{\qquad}\).

**【解】** 特征方程为 \(\lambda^2-6\lambda+9=0\)，特征值为 \(\lambda=3\)（二重）.

故通解为 \(y=C_1e^{3x}+C_2xe^{3x}\).

**例4** 求微分方程 \(y''+3y'+2y=\sin x+x^2\) 的通解.

**【解】** 相应的齐次方程为 \(y''+3y'+2y=0\)，其特征方程为

\[
\lambda^2+3\lambda+2=0
\]

特征值为 \(\lambda_1=-1,\lambda_2=-2\). 齐次方程通解为

\[
y=C_1e^{-x}+C_2e^{-2x}
\]

非齐次项 \(f(x)=\sin x+x^2=f_1(x)+f_2(x)\)，其中 \(f_1(x)=\sin x,f_2(x)=x^2\).

只要分别求出二个非齐次方程

\[
y''+3y'+2y=\sin x \tag{①}
\]

\[
y''+3y'+2y=x^2 \tag{②}
\]

的特解，它们的和就是本题要求的非齐次方程的特解. 对于方程①，由于 \(\pm\mathrm{i}\) 不是特征值，其特解形式为

\[
y_1^*=a\sin x+b\cos x
\]

其中 \(a,b\) 为待定常数，代入方程①.

\[
(-a\sin x-b\cos x)+3(a\cos x-b\sin x)+2(a\sin x+b\cos x)=\sin x
\]

对比 \(\sin x,\cos x\) 前的系数可得

\[
\begin{cases}
-a-3b+2a=1\\
-b+3a+2b=0
\end{cases}
\]

解得 \(a=\frac{1}{10},b=-\frac{3}{10}\). 故方程①的特解为 \(y_1^*=\frac{1}{10}\sin x-\frac{3}{10}\cos x\).

对于方程②，\(f_2(x)=x^2e^{0x}\)，而0不是特征值，故方程②的特解形式为

\[
y_2^*=cx^2+dx+e
\]

代入方程②

\[
2c+3(2cx+d)+2(cx^2+dx+e)=x^2
\]

对比 \(x^0,x^1,x^2\) 前的系数可得

\[
\begin{cases}
2c+3d+2e=0\\
6c+2d=0\\
2c=1
\end{cases}
\]

解得 \(c=\frac{1}{2},d=-\frac{3}{2},e=\frac{7}{4}\). 故②的特解为` },
      { p: 207, md: R`\[
y_2^*=\frac{x^2}{2}-\frac{3}{2}x+\frac{7}{4}
\]

\(y_1^*+y_2^*\) 为原方程的特解，原方程的通解为

\[
y=C_1e^{-x}+C_2e^{-2x}+\frac{1}{10}\sin x-\frac{3}{10}\cos x+\frac{x^2}{2}-\frac{3}{2}x+\frac{7}{4}.
\]

**例5** \(y''+4y=\cos 2x\) 的通解为 \(\underline{\qquad}\).

**【解】** 特征方程为 \(\lambda^2+4=0\)，特征值为 \(\pm2\mathrm{i}\)，故齐次方程通解为 \(y=C_1\cos 2x+C_2\sin 2x\).

由于 \(2\mathrm{i}\) 是特征值，非齐次方程特解形式为

\[
y^*=x(a\cos 2x+b\sin 2x)
\]

其中常数 \(a,b\) 待定，代入非齐次方程可得：

\[
[-4a\sin 2x+4b\cos 2x+x(-4a\cos 2x-4b\sin 2x)]+4x(a\cos 2x+b\sin 2x)=\cos 2x
\]

对比 \(\cos 2x,\sin 2x\) 的系数可得

\[
\begin{cases}
4b=1\\
-4a=0
\end{cases}
\]

解得 \(a=0,b=\frac{1}{4}\). 故非齐次方程的特解为 \(y^*=\frac{x}{4}\sin 2x\).

非齐次方程的通解为 \(y=C_1\cos 2x+C_2\sin 2x+\frac{x}{4}\sin 2x\).

**例6** 方程 \(y'''=e^x+x\) 的通解为 \(\underline{\qquad}\).

**【解】** \(y'''=e^x+x\)

\[
y''=e^x+\frac{x^2}{2}+C_1
\]

\[
y'=e^x+\frac{x^3}{6}+C_1x+C_2
\]

\[
y=e^x+\frac{x^4}{24}+\frac{C_1}{2}x^2+C_2x+C_3.
\]

或可以改写成 \(y=e^x+\frac{x^4}{24}+C_1x^2+C_2x+C_3\)，其中 \(C_1,C_2,C_3\) 为任意常数.

**例7** 求解方程 \(xy''-y'=x^2\).

**【解】** 缺 \(y\) 项，令 \(p=y'\)，则 \(p'=y''\)，原方程可改写成

\[
xp'-p=x^2,
\]

关于未知函数 \(p\) 为一阶线性常微分方程. 其解为

\[
p=x^2+C_1x,
\]

即

\[
y'=x^2+C_1x,
\]

\[
y=\frac{x^3}{3}+\frac{C_1}{2}x^2+C_2,
\]

可改写成 \(y=\frac{x^3}{3}+C_1x^2+C_2\)，其中 \(C_1,C_2\) 为任意常数.

**例8** 求解方程 \(yy''=2(y')^2\).

**【解】** 缺 \(x\) 项. 令 \(p=y'\)，则` },
      { p: 208, md: R`\[
y''=\frac{\mathrm{d}p}{\mathrm{d}x}=\frac{\mathrm{d}p}{\mathrm{d}y}\cdot\frac{\mathrm{d}y}{\mathrm{d}x}=p\frac{\mathrm{d}p}{\mathrm{d}y},
\]

代入方程可得

\[
yp\frac{\mathrm{d}p}{\mathrm{d}y}=2p^2,
\]

\(p=0\)，解出 \(y=C\)，或消去 \(p\)：

\[
y\frac{\mathrm{d}p}{\mathrm{d}y}=2p,
\]

为变量可分离型方程，解得

\[
p=-C_1y^2,
\]

即

\[
\frac{\mathrm{d}y}{\mathrm{d}x}=-C_1y^2,
\]

也为变量可分离型方程，解得

\[
y=\frac{1}{C_1x+C_2},
\]

所以方程 \(yy''=2(y')^2\) 的所有解为

\[
y=C \text{ 或 } y=\frac{1}{C_1x+C_2}.
\]

当 \(C_1=0\) 时，\(y=\frac{1}{C_2}\) 就是常数. 所以 \(y=C\) 包含在 \(y=\frac{1}{C_1x+C_2}\) 中.

**例9** 方程 \(x^2y''+xy'+y=2x\) 的通解为 \(\underline{\qquad}\).

**【解】** 这是欧拉方程. 作变量代换 \(t=\ln|x|\)，

\[
\frac{\mathrm{d}y}{\mathrm{d}x}=\frac{1}{x}\frac{\mathrm{d}y}{\mathrm{d}t},\quad
\frac{\mathrm{d}^2y}{\mathrm{d}x^2}=\frac{1}{x^2}\left(\frac{\mathrm{d}^2y}{\mathrm{d}t^2}-\frac{\mathrm{d}y}{\mathrm{d}t}\right)
\]

代入原方程得：当 \(x>0\) 时，

\[
\frac{\mathrm{d}^2y}{\mathrm{d}t^2}+y=2e^t \tag{①}
\]

齐次方程特征方程为 \(\lambda^2+1=0,\lambda=\pm\mathrm{i}\)，齐次方程通解为

\[
y=C_1\cos t+C_2\sin t,
\]

非齐次方程特解形式为 \(y^*=ae^t\)，代入方程解得 \(a=1\). 因此方程①的通解为

\[
y=C_1\cos t+C_2\sin t+e^t,
\]

原方程的解为

\[
y=C_1\cos(\ln|x|)+C_2\sin(\ln|x|)+x.
\]

当 \(x<0\) 时，\(t=\ln(-x)\)，同样可解得方程通解为

\[
y=C_1\cos(\ln|x|)+C_2\sin(\ln|x|)+x,\text{其中 }C_1,C_2\text{ 为任意常数}.
\]

**例10** （2015，数一）设 \(y=\frac{1}{2}e^{2x}+\left(x-\frac{1}{3}\right)e^x\) 是二阶常系数非齐次线性微分方程 \(y''+ay'+by=ce^x\) 的一个特解，则

(A) \(a=-3,b=2,c=-1\). \(\qquad\) (B) \(a=3,b=2,c=-1\).

(C) \(a=-3,b=2,c=1\). \(\qquad\) (D) \(a=3,b=2,c=1\).

**【解】** 由 \(y=\frac{1}{2}e^{2x}+\left(x-\frac{1}{3}\right)e^x\) 得 \(y'=e^{2x}+\left(x+\frac{2}{3}\right)e^x\)，\(y''=2e^{2x}+\left(x+\frac{5}{3}\right)e^x\)，` },
    ],
    quiz: [{"q": "$y''-3y'+2y=0$ 的通解为", "options": ["$C_1e^x+C_2e^{2x}$", "$C_1e^{-x}+C_2e^{-2x}$", "$(C_1+C_2x)e^x$", "$e^x(C_1\\cos x+C_2\\sin x)$"], "answer": 0, "explain": "特征方程 $r^2-3r+2=0$，$r=1,2$。"}, {"q": "$y''+y=0$ 的通解为", "options": ["$C_1\\cos x+C_2\\sin x$", "$C_1e^x+C_2e^{-x}$", "$(C_1+C_2x)e^x$", "$C_1+C_2x$"], "answer": 0, "explain": "特征根 $r=\\pm i$。"}, {"q": "$y''-2y'+y=0$ 的通解为", "options": ["$(C_1+C_2x)e^x$", "$C_1e^x+C_2e^{-x}$", "$C_1\\cos x+C_2\\sin x$", "$C_1e^{2x}+C_2$"], "answer": 0, "explain": "二重特征根 $r=1$。"}, {"q": "非齐次线性方程的通解等于", "options": ["对应齐次方程通解 + 非齐次方程一个特解", "非齐次方程两个特解之和", "齐次方程通解", "非齐次方程一个特解"], "answer": 0, "explain": "线性方程解的结构。"}]
  };
})();
