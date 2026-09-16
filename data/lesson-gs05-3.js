window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["gs05_s2"] = {
    id: "gs05_s2",
    ch: "第五章 多元函数微分学",
    title: "第三节 极值与最值",
    book: "《高等数学辅导讲义》",
    pages: [160, 167],
    img: "assets/img/gaoshu",
    content: [
      { p: 160, md: R`## 第三节 极值与最值
### 一、考试内容要点精讲
#### （一）无条件极值
定义 设函数 $z=f(x,y)$ 在点 $P(x_0,y_0)$ 的某邻域内有定义，若对该去心邻域内任意的点 $P(x,y)$ 均有
$$f(x,y)<f(x_0,y_0)(\text{或 }f(x,y)>f(x_0,y_0)),$$
则称 $(x_0,y_0)$ 为 $f(x,y)$ 的极大值点（或极小值点）；称 $f(x_0,y_0)$ 为 $f(x,y)$ 的极大值（或极小值）。极大值点和极小值点统称为极值点；极大值和极小值统称为极值。
定理1（极值的必要条件） 设 $z=f(x,y)$ 在点 $(x_0,y_0)$ 存在偏导数，且 $(x_0,y_0)$ 为 $f(x,y)$ 的极值点，则
$$f'_x(x_0,y_0)=0,\quad f'_y(x_0,y_0)=0.$$
定理2（极值的充分条件） 设 $z=f(x,y)$ 在点 $P_0(x_0,y_0)$ 的某邻域内有二阶连续偏导数，又 $f'_x(x_0,y_0),f'_y(x_0,y_0)=0$。记
$$A=f''_{xx}(x_0,y_0),B=f''_{xy}(x_0,y_0),C=f''_{yy}(x_0,y_0),$$
则有下述结论：
（1）若 $AC-B^2>0$，则 $(x_0,y_0)$ 为 $f(x,y)$ 的极值点。
① $A<0$，则 $(x_0,y_0)$ 为 $f(x,y)$ 的极大值点；
② $A>0$，则 $(x_0,y_0)$ 为 $f(x,y)$ 的极小值点。
（2）若 $AC-B^2<0$，则 $(x_0,y_0)$ 不为 $f(x,y)$ 的极值点。
（3）若 $AC-B^2=0$，则 $(x_0,y_0)$ 可能为 $f(x,y)$ 的极值点，也可能不为 $f(x,y)$ 的极值点（此时，一般用定义判定）。
求具有二阶连续偏导数二元函数 $z=f(x,y)$ 极值的一般步骤为：
（1）求出 $f(x,y)$ 的驻点 $P_1,\cdots,P_k$。
（2）利用极值的充分条件判定驻点 $P_i$ 是否为极值点。
【注】二元函数 $z=f(x,y)$ 在偏导数不存在的点也可能取到极值（如 $f(x,y)=\sqrt{x^2+y^2}$），而这种点是否取得极值一般用极值定义判定。
#### （二）条件极值及拉格朗日乘数法
求 $z=f(x,y)$ 在条件 $\varphi(x,y)=0$ 下的条件极值的一般方法为：
（1）构造拉格朗日函数 $F(x,y,\lambda)=f(x,y)+\lambda\varphi(x,y)$；
（2）将 $F(x,y,\lambda)$ 分别对 $x,y,\lambda$ 求偏导数，构造方程组
$$\begin{cases}f'_x(x,y)+\lambda\varphi'_x(x,y)=0,\\f'_y(x,y)+\lambda\varphi'_y(x,y)=0,\\\varphi(x,y)=0.\end{cases}$$
解出 $x,y$ 及 $\lambda$，则其中 $(x,y)$ 就是函数 $f(x,y)$ 在条件 $\varphi(x,y)=0$ 下的可能的极值点。
以上方法可推广到对于 $n$ 元函数在 $m$ 个约束条件下的极值问题，如求 $u=f(x,y,z)$ 在` },
      { p: 161, md: R`条件 $\varphi(x,y,z)=0,\psi(x,y,z)=0$ 下的极值，可构造拉格朗日函数
$$F(x,y,z,\lambda,\mu)=f+\lambda\varphi+\mu\psi,$$
将 $F$ 对 $x,y,z,\lambda,\mu$ 分别求偏导数，并构造方程组
$$\begin{cases}f'_x(x,y,z)+\lambda\varphi'_x(x,y,z)+\mu\psi'_x(x,y,z)=0,\\f'_y(x,y,z)+\lambda\varphi'_y(x,y,z)+\mu\psi'_y(x,y,z)=0,\\f'_z(x,y,z)+\lambda\varphi'_z(x,y,z)+\mu\psi'_z(x,y,z)=0,\\\varphi(x,y,z)=0,\\\psi(x,y,z)=0.\end{cases}$$
解出 $x,y,z,\lambda$ 及 $\mu$，则其中 $(x,y,z)$ 就是可能的极值点。
对于实际问题，如果驻点唯一，且由实际意义知问题存在最大（小）值，则该驻点即为最大（小）值点。如果存在多个驻点，且由实际意义知道问题既存在最大值也存在最小值，只需比较各驻点处的函数值，最大的则为最大值，最小的则为最小值。
#### （三）最大最小值
1）求连续函数 $f(x,y)$ 在有界闭域 $D$ 上的最大最小值三部曲。
（1）求 $f(x,y)$ 在 $D$ 内部可能的极值点；
（2）求 $f(x,y)$ 在 $D$ 的边界上的最大最小值；
（3）比较。
2）应用题
### 二、常考题型的方法与技巧
#### 题型一 求无条件极值
【例1】求函数 $z=x^3+y^3-3x^2-3y^2$ 的极值。
【解】由 $\begin{cases}\dfrac{\partial z}{\partial x}=3x^2-6x=0,\\\dfrac{\partial z}{\partial y}=3y^2-6y=0,\end{cases}$ 得驻点 $(0,0),(0,2),(2,0),(2,2)$。
又 $\dfrac{\partial^2z}{\partial x^2}=6x-6,\dfrac{\partial^2z}{\partial x\partial y}=0,\dfrac{\partial^2z}{\partial y^2}=6y-6,$
① 点 $(0,0)$ 处，$AC-B^2=36>0$ 且 $A=-6<0$，则点 $(0,0)$ 为极大值点，$z(0,0)=0$；
② 点 $(0,2)$ 处，$AC-B^2=-36<0$，则 $(0,2)$ 不是极值点；
③ 点 $(2,0)$ 处，$AC-B^2=-36<0$，则 $(2,0)$ 不是极值点；
④ 点 $(2,2)$ 处，$AC-B^2=36>0$ 且 $A=6>0$，则点 $(2,2)$ 为极小值点，$z(2,2)=-8$。
【例2】求函数 $f(x,y)=xy(a-x-y)$ 的极值。
【解】由 $\begin{cases}f'_x(x,y)=y(a-x-y)-xy=0,\\f'_y(x,y)=x(a-x-y)-xy=0,\end{cases}$ 得驻点 $(0,0),(0,a),(a,0),\left(\dfrac{a}{3},\dfrac{a}{3}\right)$。
又 $A=\dfrac{\partial^2z}{\partial x^2}=-2y,B=\dfrac{\partial^2z}{\partial x\partial y}=a-2x-2y,C=\dfrac{\partial^2z}{\partial y^2}=-2x,$
$$AC-B^2=4xy-(a-2x-2y)^2.$$` },
      { p: 162, md: R`1）$a>0$ 时，$(0,0),(0,a),(a,0)$ 不是极值点，$\left(\dfrac{a}{3},\dfrac{a}{3}\right)$ 极大值，$f\left(\dfrac{a}{3},\dfrac{a}{3}\right)=\left(\dfrac{a}{3}\right)^3$；
2）$a<0$ 时，$(0,0),(0,a),(a,0)$ 不是极值点，$\left(\dfrac{a}{3},\dfrac{a}{3}\right)$ 极小值，$f\left(\dfrac{a}{3},\dfrac{a}{3}\right)=\left(\dfrac{a}{3}\right)^3$；
3）$a=0$ 时，驻点 $(0,0)$，$AC-B^2=0$；而 $f(x,y)=-2x^3$ 可正可负，$f(0,0)=0$，则 $(0,0)$ 不是极值点。
【例3】求由方程 $x^2+y^2+z^2-2x+2y-4z-10=0$ 所确定函数 $z=z(x,y)$ 的极值。
【解1】由 $x^2+y^2+z^2-2x+2y-4z-10=0$ 得
$$\begin{cases}2x+2zz'_x-2-4z'_x=0,\\2y+2zz'_y+2-4z'_y=0.\end{cases}$$
在上式中令 $z'_x=0,z'_y=0$ 得 $x=1,y=-1$，将 $x=1,y=-1$ 代入原方程得 $z=6$ 和 $z=-2$。即驻点为 $(1,-1,6)$ 和 $(1,-1,-2)$。
等式 $2x+2zz'_x-2-4z'_x=0$ 两端分别对 $x,y$ 求导得
$$\begin{cases}2+2(z'_x)^2+2zz''_{xx}-4z''_{xx}=0,\\2z'_yz'_x+2zz''_{xy}-4z''_{xy}=0,\end{cases}$$
从而可得 $z''_{xx}=\dfrac{1+(z'_x)^2}{2-z},z''_{xy}=\dfrac{z'_xz'_y}{2-z}.$
等式 $2y+2zz'_y+2-4z'_y=0$ 两端对 $y$ 求导得
$$2+2(z'_y)^2+2zz''_{yy}-4z''_{yy}=0,$$
从而可得 $z''_{yy}=\dfrac{1+(z'_y)^2}{2-z}$。则
1）在点 $(1,-1,6)$ 处，$AC-B^2=\dfrac{1}{16}>0$，且 $A=-\dfrac{1}{4}<0$，则函数 $z=z(x,y)$ 在该点取极大值，极大值 $z_1(1,-1)=6$。
2）在点 $(1,-1,-2)$ 处，$AC-B^2=\dfrac{1}{16}>0$，且 $A=\dfrac{1}{4}>0$，则函数 $z=z(x,y)$ 在该点取极小值，$z_2(1,-1)=-2$。
【解2】将方程 $x^2+y^2+z^2-2x+2y-4z-10=0$ 配方得
$$(x-1)^2+(y+1)^2+(z-2)^2=16.$$
从而有 $z=2\pm\sqrt{16-(x-1)^2-(y+1)^2}.$
由此可见当 $x=1,y=-1$ 时，$z=z(x,y)$ 取得极大值为 $2+4=6$，取得极小值 $2-4=-2$。
【例4】设 $f(x,y)$ 有二阶连续导数，$g(x,y)=f(e^{xy},x^2+y^2)$，且
$$\lim_{\substack{x\to1\\y\to0}}\frac{f(x,y)+x+y-1}{\sqrt{(x-1)^2+y^2}}=0,$$
证明 $g(x,y)$ 在 $(0,0)$ 取得极值，判断此极值是极大值还是极小值，并求出此极值。
（图：本页右侧中部的二维码）
【解】由题设 $\lim\limits_{\substack{x\to1\\y\to0}}\dfrac{f(x,y)+x+y-1}{\sqrt{(x-1)^2+y^2}}=0$ 知
$$f(x,y)=-(x-1)-y+o(\rho),\qquad\text{其中 }\rho=\sqrt{(x-1)^2+y^2},$$
则 $f(1,0)=0,f'_x(1,0)=f'_y(1,0)=-1.$
$g'_x=f'_1\cdot e^{xy}y+f'_2\cdot2x,g'_y=f'_1\cdot e^{xy}x+f'_2\cdot2y,$` },
      { p: 163, md: R`$g'_x(0,0)=0,g'_y(0,0)=0,$
$g''_{xx}=(f''_{11}\cdot e^{xy}y+f''_{12}\cdot2x)e^{xy}y+f'_1\cdot e^{xy}y^2+(f''_{21}\cdot e^{xy}y+f''_{22}\cdot2x)2x+2f'_2,$
$g''_{xy}=(f''_{11}\cdot e^{xy}x+f''_{12}\cdot2y)e^{xy}y+f'_1\cdot(e^{xy}xy+e^{xy})+(f''_{21}\cdot e^{xy}x+f''_{22}\cdot2y)2x,$
$g''_{yy}=(f''_{11}\cdot e^{xy}x+f''_{12}\cdot2y)e^{xy}x+f'_1\cdot e^{xy}x^2+(f''_{21}\cdot e^{xy}x+f''_{22}\cdot2y)2y+2f'_2,$
$A=g''_{xx}(0,0)=2f'_2(1,0)=-2,B=g''_{xy}(0,0)=f'_1(1,0)=-1,$
$C=g''_{yy}(0,0)=2f'_2(1,0)=-2.$
$AC-B^2=3>0$ 且 $A<0$，故 $g(x,y)$ 在 $(0,0)$ 取得极值，且 $g(0,0)=f(1,0)=0$ 是极大值。
【注】求 $A=g''_{xx}(0,0),B=g''_{xy}(0,0),C=g''_{yy}(0,0)$ 有更简单的方法。
由 $g'_x=f'_1\cdot e^{xy}y+f'_2\cdot2x$ 知 $g'_x(x,0)=2xf'_2(1,x^2),g'_x(0,y)=yf'_1(1,y^2)$ 则
$g''_{xx}(0,0)=2f'_2(1,0)=-2,g''_{xy}(0,0)=f'_1(1,0)=-1.$
同理 $g'_y(0,y)=2yf'_2(1,y^2)$，则 $g''_{yy}(0,0)=2f'_2(1,0)=-2.$
（图：本页左侧中部的二维码）
【例5】设 $z=f(x,y)$ 在点 $(0,0)$ 处连续，且 $\lim\limits_{\substack{x\to0\\y\to0}}\dfrac{f(x,y)}{\sin(x^2+y^2)}=-1$，则
（A）$f'_x(0,0)$ 不存在。
（B）$f'_x(0,0)$ 存在但不为零。
（C）$f(x,y)$ 在点 $(0,0)$ 处取极小值。
（D）$f(x,y)$ 在点 $(0,0)$ 处取极大值。
【解1】直接法
由于 $\lim\limits_{\substack{x\to0\\y\to0}}\dfrac{f(x,y)}{\sin(x^2+y^2)}=-1<0$，由极限的保号性知，存在 $(0,0)$ 点的去心邻域，使
$$\frac{f(x,y)}{\sin(x^2+y^2)}<0.$$
而在该去心邻域内 $\sin(x^2+y^2)>0$，则 $f(x,y)<0.$
再由 $\lim\limits_{\substack{x\to0\\y\to0}}\dfrac{f(x,y)}{\sin(x^2+y^2)}=-1$ 及 $f(x,y)$ 在 $(0,0)$ 的连续性知 $f(0,0)=0.$
由极值定义知 $f(x,y)$ 在 $(0,0)$ 点取极大值，故应选（D）。
【解2】排除法
取 $f(x,y)=-(x^2+y^2)$，显然满足原题条件，但 $f'_x(0,0)=0,f(x,y)=-(x^2+y^2)$ 在 $(0,0)$ 取极大值，因此选项（A）、（B）、（C）均不正确，故应选（D）。
【例6】已知函数 $f(x,y)$ 在点 $(0,0)$ 的某个邻域内连续，且
$$\lim_{\substack{x\to0\\y\to0}}\frac{f(x,y)-xy}{(x^2+y^2)^2}=1,$$
则
（A）点 $(0,0)$ 不是 $f(x,y)$ 的极值点。
（B）点 $(0,0)$ 是 $f(x,y)$ 的极大值点。
（C）点 $(0,0)$ 是 $f(x,y)$ 的极小值点。
（D）根据所给条件无法判断点 $(0,0)$ 是否为 $f(x,y)$ 的极值点。
【解】由 $f(x,y)$ 在点 $(0,0)$ 连续及 $\lim\limits_{\substack{x\to0\\y\to0}}\dfrac{f(x,y)-xy}{(x^2+y^2)^2}=1$ 知 $f(0,0)=0$，且
$$\frac{f(x,y)-xy}{(x^2+y^2)^2}=1+\alpha,\text{其中}\lim_{\substack{x\to0\\y\to0}}\alpha=0.$$
则
$$f(x,y)=xy+(1+\alpha)(x^2+y^2)^2.$$` },
      { p: 164, md: R`令 $y=x$ 得 $f(x,x)=x^2+4(1+a)x^4=x^2+o(x^2).$
令 $y=-x$ 得 $f(x,-x)=-x^2+4(1+a)x^4=-x^2+o(x^2).$
因此可知 $f(x,y)$ 在 $(0,0)$ 点的任何去心邻域内始终可正可负，而 $f(0,0)=0$，由极值定义知 $(0,0)$ 点不是 $f(x,y)$ 的极值点，故应选（A）。
【注】一种“经典错误”是：从以上解答的第三行之后
则 $f(x,y)=xy+(1+a)(x^2+y^2)^2.$
从而，$f(x,y)$ 在 $(0,0)$ 点的某去心邻域内的函数值的正负由 $xy$ 所确定，而 $xy$ 在 $(0,0)$ 点的去心邻域内可正可负，则 $f(x,y)$ 也可正可负，又 $f(0,0)=0$，则 $f(x,y)$ 在 $(0,0)$ 点不取得极值。
以上解法的依据是当 $(x,y)\to(0,0)$ 时，$(x^2+y^2)^2$ 是 $xy$ 的高阶无穷小，即
$$\lim_{\substack{x\to0\\y\to0}}\frac{(x^2+y^2)^2}{xy}=0,$$
但事实上极限 $\lim\limits_{\substack{x\to0\\y\to0}}\frac{(x^2+y^2)^2}{xy}$ 不存在！这是由于
$$\lim_{\substack{x\to0\\y=x^4}}\frac{(x^2+y^2)^2}{xy}=\lim_{x\to0}\frac{(x^2+x^8)^2}{x^5}=\lim_{x\to0}\frac{x^4+2x^{10}+x^{16}}{x^5}=\infty.$$
#### 题型二 求最大最小值
【例1】求函数 $z=x^2y(4-x-y)$ 在直线 $x+y=6$，$x$ 轴和 $y$ 轴所围成的区域 $D$ 上的最大值和最小值。
【解】$\dfrac{\partial z}{\partial x}=2xy(4-x-y)-x^2y=xy(8-3x-2y),$
$\dfrac{\partial z}{\partial y}=x^2(4-x-y)-x^2y=x^2(4-x-2y).$
令 $\begin{cases}3x+2y=8,\\x+2y=4,\end{cases}$ 由此可解得 $z(x,y)$ 在 $D$ 内唯一驻点 $(2,1)$，且 $z(2,1)=4.$
在 $D$ 的边界 $y=0,0\leqslant x\leqslant6$ 或 $x=0,0\leqslant y\leqslant6$ 上，$z(x,y)=0.$
在边界 $x+y=6(0\leqslant x\leqslant6)$ 上，$z(x,y)=2(x^3-6x^2)(0\leqslant x\leqslant6).$
令 $\varphi(x)=2(x^3-6x^2)(0\leqslant x\leqslant6)$，则 $\varphi'(x)=6x^2-24x$。令 $\varphi'(x)=0$，得 $x=4$。又
$\varphi(0)=0,\varphi(4)=-64,\varphi(6)=0,$
则 $z(x,y)$ 在边界 $x+y=6(0\leqslant x\leqslant6)$ 上的最大值为 $0$，最小值为 $-64$。
由此可知 $z(x,y)$ 在区域 $D$ 上最大值为 $4$，最小值为 $-64$。
【例2】求函数 $z=x^2+y^2-12x+16y$ 在 $x^2+y^2\leqslant25$ 上的最大值与最小值。
【解1】由 $\begin{cases}\dfrac{\partial z}{\partial x}=2x-12=0,\\[2ex]\dfrac{\partial z}{\partial y}=2y+16=0,\end{cases}$ 得 $x=6,y=-8$。显然点 $(6,-8)$ 不在区域 $D$ 内，因此
构造拉格朗日函数
$$F(x,y,\lambda)=x^2+y^2-12x+16y+\lambda(x^2+y^2-25)$$
$$=25-12x+16y+\lambda(x^2+y^2-25).$$` },
      { p: 165, md: R`由 $\begin{cases}F'_x=-12+2\lambda x=0,\\F'_y=16+2\lambda y=0,\\F'_\lambda=x^2+y^2-25=0,\end{cases}$ 解得 $\begin{cases}x_1=3,\\y_1=-4,\end{cases}$ 或 $\begin{cases}x_2=-3,\\y_2=4.\end{cases}$ 又
$z(3,-4)=-75,z(-3,4)=125,$
则 $z(x,y)$ 在 $D$ 上最小值为 $-75$，最大值为 $125$。
【解2】由解1的讨论知 $z(x,y)$ 在区域 $x^2+y^2\leqslant25$ 的最大值和最小值应该在该区域边界 $x^2+y^2=25$ 上取得。由于 $x^2+y^2=25$ 可改写成参数方程 $\begin{cases}x=5\cos\theta\\y=5\sin\theta\end{cases}(0\leqslant\theta\leqslant2\pi)$，将 $x=5\cos\theta,y=5\sin\theta$ 代入 $z=x^2+y^2-12x+16y$ 得
$$z=25-60\cos\theta+80\sin\theta$$
$$=25-\sqrt{60^2+80^2}\left(\frac{60}{\sqrt{60^2+80^2}}\cos\theta-\frac{80}{\sqrt{60^2+80^2}}\sin\theta\right)$$
$$=25-\sqrt{60^2+80^2}\cos(\theta-\alpha).$$
则 $z$ 的最小值为 $25-\sqrt{60^2+80^2}=-75$，$z$ 的最大值为 $25+\sqrt{60^2+80^2}=125.$
【解3】$z=x^2+y^2-12x+16y=(x-6)^2+(y+8)^2-100.$
注意到上式中的 $(x-6)^2+(y+8)^2$ 是平面域 $D$ 上点 $(x,y)$ 与点 $(6,-8)$ 之间距离的平方。因此，从几何上看，求函数 $z=x^2+y^2-12x+16y$ 在区域 $x^2+y^2\leqslant25$ 的最大值和最小值点的问题就是在区域 $x^2+y^2\leqslant25$ 上找点 $(x,y)$，使它到点 $(6,-8)$ 的距离最大或最小，显然，这两个点应为过原点和点 $(6,-8)$ 的直线 $y=-\dfrac{4}{3}x$ 与圆周 $x^2+y^2=25$ 的两个交点。
由 $\begin{cases}x^2+y^2=25,\\y=-\dfrac{4}{3}x,\end{cases}$ 得 $\begin{cases}x_1=3,\\y_1=-4,\end{cases}$ 或 $\begin{cases}x_2=-3,\\y_2=4.\end{cases}$ 又
$z(3,-4)=-75,z(-3,4)=125,$
故 $z(x,y)$ 在 $x^2+y^2\leqslant25$ 上的最大值为 $125$，最小值为 $-75$。
（图：二维码）
【例3】求函数 $u=xy+2yz$ 在约束条件 $x^2+y^2+z^2=10$ 下的最大值和最小值。
【解1】设 $F(x,y,z,\lambda)=xy+2yz+\lambda(x^2+y^2+z^2-10)$。令
$$\begin{cases}F'_x=y+2\lambda x=0,&\quad①\\F'_y=x+2z+2\lambda y=0,&\quad②\\F'_z=2y+2\lambda z=0,&\quad③\\F'_\lambda=x^2+y^2+z^2-10=0.&\quad④\end{cases}$$
1）当 $\lambda\neq0$ 时，
由①式和③式得 $2x=z$，代入②式后由②式和①式得 $5x^2=y^2.$
将 $2x=z,5x^2=y^2$ 代入④式得四个可能的极值点
$$P_1=(1,\sqrt5,2),\quad P_2=(-1,\sqrt5,-2),$$
$$P_3=(1,-\sqrt5,2),\quad P_4=(-1,-\sqrt5,-2).$$
2）当 $\lambda=0$ 时，
将 $y=0,x+2z=0$ 代入④式得两个可能的极值点` },
      { p: 166, md: R`$P_5=(2\sqrt2,0,-\sqrt2),\quad P_6=(-2\sqrt2,0,\sqrt2).$
$u(P_1)=u(P_4)=5\sqrt5,u(P_2)=u(P_3)=-5\sqrt5,u(P_5)=u(P_6)=0$
所以 $u_{\max}=5\sqrt5;u_{\min}=-5\sqrt5.$
【解2】方程 $x^2+y^2+z^2=10$ 可确定 $z$ 是 $x,y$ 的函数，则 $u$ 是 $x,y$ 的函数，令
$$\begin{cases}\dfrac{\partial u}{\partial x}=y+2y\dfrac{\partial z}{\partial x}=0,\\[2ex]\dfrac{\partial u}{\partial y}=x+2z+2y\dfrac{\partial z}{\partial y}=0.\end{cases}$$
由方程 $x^2+y^2+z^2=10$ 可知 $\dfrac{\partial z}{\partial x}=-\dfrac{x}{z},\dfrac{\partial z}{\partial y}=-\dfrac{y}{z}$，代入上式得
$$\begin{cases}yz-2xy=0,&\quad①\\xz+2z^2-2y^2=0,&\quad②\\x^2+y^2+z^2=10.&\quad③\end{cases}$$
由①式可知，需分以下两种情况
1）若 $y\neq0$，则 $z=2x$，代入②式得 $y^2=5x^2$，从而由③式解得
$$P_1=(1,\sqrt5,2),\quad P_2=(-1,\sqrt5,-2),$$
$$P_3=(1,-\sqrt5,2),\quad P_4=(-1,-\sqrt5,-2).$$
2）若 $y=0$，代入②式得 $x+2z=0$，从而由③式解得
$$P_5=(2\sqrt2,0,-\sqrt2),\quad P_6=(-2\sqrt2,0,\sqrt2).$$
以下同解1。
【例4】在椭圆 $x^2+4y^2=4$ 上求一点，使其到直线 $2x+3y-6=0$ 的距离最短。
【解1】椭圆 $x^2+4y^2=4$ 上的点 $P(x,y)$ 到直线 $2x+3y-6=0$ 的距离为
$$d=\frac{|2x+3y-6|}{\sqrt{13}},$$
显然将 $d$ 作为目标函数不方便，而
$$d^2=\frac{(2x+3y-6)^2}{13},$$
所以只要求得函数 $(2x+3y-6)^2$ 在条件 $x^2+4y^2=4$ 下的最小值点即可。
令 $F(x,y,\lambda)=(2x+3y-6)^2+\lambda(x^2+4y^2-4)$，则
$$\begin{cases}F'_x=4(2x+3y-6)+2\lambda x=0,\\F'_y=6(2x+3y-6)+8\lambda y=0,\\F'_\lambda=x^2+4y^2-4=0.\end{cases}$$
从而得 $\begin{cases}x_1=\dfrac{8}{5},\\y_1=\dfrac{3}{5},\end{cases}$ $\begin{cases}x_2=-\dfrac{8}{5},\\y_2=-\dfrac{3}{5}.\end{cases}$ 于是
$$d\Big|_{(x_1,y_1)}=\frac{1}{\sqrt{13}},d\Big|_{(x_2,y_2)}=\frac{11}{\sqrt{13}}.$$
由本题实际意义知最短距离存在，则点 $\left(\dfrac{8}{5},\dfrac{3}{5}\right)$ 为所求的点。
【解2】作椭圆 $x^2+4y^2=4$ 的切线 $l$，使其与直线 $2x+3y-6=0$ 平行，这样的切线应有两条，对应的两个切点，其中一个是距直线 $2x+3y-6=0$ 最远的点，另一个则是距直线` },
      { p: 167, md: R`$2x+3y-6=0$ 最近的点。
直线 $2x+3y-6=0$ 的斜率为 $k=-\dfrac{2}{3}$，而椭圆 $x^2+4y^2=4$ 在点 $P(x,y)$ 处切线斜率可由等式 $2x+8yy'=0$ 得到 $y'=-\dfrac{x}{4y}$。则 $-\dfrac{2}{3}=-\dfrac{x}{4y}$，即 $8y=3x.$
将 $8y=3x$ 与 $x^2+4y^2=4$ 联立立得
$$\begin{cases}x_1=\dfrac{8}{5},\\y_1=\dfrac{3}{5},\end{cases}\quad\text{或}\quad\begin{cases}x_2=-\dfrac{8}{5},\\y_2=-\dfrac{3}{5}.\end{cases}$$
由几何意义知，点 $\left(\dfrac{8}{5},\dfrac{3}{5}\right)$ 应为所求的点。
（图：二维码）
【例5】已知三角形周长为 $2p$，求使它绕自己的一边旋转时所构成旋转体体积最大的三角形。
【解】设三角形三边之长分别为 $x,y,z$，底边上的高为 $h$，该三角形绕边长为 $y$ 的边旋转所得旋转体体积为 $V$，则
$$V=\frac{\pi}{3}h^2y,$$
$$S=\sqrt{p(p-x)(p-y)(p-z)}=\frac{1}{2}yh,$$
$$V=\frac{4}{3}\pi p\frac{(p-x)(p-y)(p-z)}{y},\text{其中 }x+y+z=2p.$$
（图：三角形，顶点在上方，底边标为 y，底边上的高 h，左侧边标 x，右侧边标 z）
令 $F(x,y,z,\lambda)=\ln(p-x)+\ln(p-y)+\ln(p-z)-\ln y+\lambda(x+y+z-2p)$，则
$$\begin{cases}F'_x=\dfrac{-1}{p-x}+\lambda=0,\\[2ex]F'_y=\dfrac{-1}{p-y}-\dfrac{1}{y}+\lambda=0,\\[2ex]F'_z=\dfrac{-1}{p-z}+\lambda=0,\\[2ex]F'_\lambda=x+y+z-2p=0.\end{cases}$$
由此解得 $x=z=\dfrac{3p}{4},y=\dfrac{p}{2},V_{\max}=\dfrac{\pi}{12}p^3.$
【例6】（仅数三要求）设某厂生产甲乙两种产品，产量分别为 $x,y$(千只)，其利润函数为 $L(x,y)=-x^2-4y^2+8x+24y-15$，如果现有原料 15000 公斤（不要求用完），生产两种产品每千只都需要原料 2000 公斤，求
1）使利润最大的 $x,y$ 和最大利润；
2）如果原料降至 12000 公斤，求这时利润最大的产量和最大利润。
【解】1）由 $\begin{cases}\dfrac{\partial L}{\partial x}=-2x+8=0,\\[2ex]\dfrac{\partial L}{\partial y}=-8y+24=0,\end{cases}$ 得 $x=4,y=3.$
于是点 $(4,3)$ 为 $L(x,y)$ 唯一可能取得极值的点，由该问题已知 $L(x,y)$ 最大值存在，则最大值只能在点 $(4,3)$ 取到，$L(4,3)=37$(万元)
2）如果原料降至 12000 公斤，问题变为条件极值，令` }
    ],
    quiz: [
      { q: R`二元函数取极值的必要条件是（偏导数存在时）`, options: [R`$f'_x=f'_y=0$`, R`$f''_{xx}>0$`, R`$AC-B^2<0$`, R`$f'_x=f'_y=1$`], answer: 0, explain: R`极值点处偏导数为零。` },
      { q: R`设 $A=f''_{xx},B=f''_{xy},C=f''_{yy}$，则 $AC-B^2<0$ 时该驻点`, options: [R`不是极值点`, R`是极大值点`, R`是极小值点`, R`需用定义判断`], answer: 0, explain: R`$AC-B^2<0$ 非极值点。` },
      { q: R`$AC-B^2>0$ 且 $A<0$ 时，该驻点是`, options: [R`极大值点`, R`极小值点`, R`不是极值点`, R`不确定`], answer: 0, explain: R`$A<0$ 极大，$A>0$ 极小。` },
      { q: R`拉格朗日乘数法求条件极值时构造的函数是`, options: [R`$F=f+\lambda\varphi$`, R`$F=f-\varphi$`, R`$F=f\varphi$`, R`$F=\frac f\varphi$`], answer: 0, explain: R`$F(x,y,\lambda)=f+\lambda\varphi$。` },
      { q: R`$AC-B^2=0$ 时该驻点`, options: [R`可能为也可能不为极值点，一般用定义判定`, R`一定是极值点`, R`一定不是极值点`, R`一定是极大值点`], answer: 0, explain: R`需进一步判定。` },
      { q: R`求有界闭域 $D$ 上连续函数最值的步骤不包括`, options: [R`求函数的偏导连续性`, R`求 $D$ 内部极值点`, R`求边界上的最值`, R`比较各候选值`], answer: 0, explain: R`三步：内部、边界、比较。` },
      { q: R`$f(x,y)=\sqrt{x^2+y^2}$ 在 $(0,0)$ 处`, options: [R`取极小值但偏导数不存在`, R`偏导数存在且为零`, R`不取极值`, R`取极大值`], answer: 0, explain: R`偏导不存在的点也可能取极值。` },
      { q: R`若实际问题中驻点唯一且由实际意义知存在最值，则该驻点`, options: [R`即为最值点`, R`不一定是最值点`, R`不是最值点`, R`需再求边界`], answer: 0, explain: R`实际问题的常用结论。` },
      { q: R`求 $u=xy+2yz$ 在 $x^2+y^2+z^2=10$ 下的最值，属于`, options: [R`条件极值`, R`无条件极值`, R`一重积分`, R`微分方程`], answer: 0, explain: R`带约束条件，用拉格朗日乘数法。` },
      { q: R`若 $f(x,y)$ 在 $(0,0)$ 某邻域连续且 $\lim\limits_{(x,y)\to(0,0)}\frac{f(x,y)}{\sin(x^2+y^2)}=-1$，则 $(0,0)$ 是`, options: [R`极大值点`, R`极小值点`, R`非极值点`, R`拐点`], answer: 0, explain: R`$f<0=f(0,0)$，取极大值。` }
    ]
  };
})();
