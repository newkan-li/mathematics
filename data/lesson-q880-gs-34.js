window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q880_s33"] = {
    id: "q880_s33",
    ch: "880题 · 高数 · 第四章 多元函数微分学及其应用",
    title: "综合题·解答题（一）",
    probTitle: "第四章 综合题 · 解答题 (1)–(8)（含原书解析）",
    book: "李林《精讲精练 880 题（数学二）》2026",
    problems: [
      { n: "(1)", q: R`已知 $x+y-z=e^z$，$xe^x=\tan t$，$y=\cos t$，求 $\left.\frac{d^2z}{dt^2}\right|_{t=0}$。`, a: R`$-\frac{13}8$`, sol: R`【解】由 $x+y-z=e^z$ 对 $t$ 求导得 $\frac{dz}{dt}=\frac1{1+e^z}\left(\frac{dx}{dt}+\frac{dy}{dt}\right)$，再求导得
$$\frac{d^2z}{dt^2}=\frac1{1+e^z}\left[\frac{d^2x}{dt^2}+\frac{d^2y}{dt^2}-\frac{e^z}{(1+e^z)^2}\left(\frac{dx}{dt}+\frac{dy}{dt}\right)^2\right].$$
由 $y=\cos t$ 得 $\frac{dy}{dt}|_0=0$，$\frac{d^2y}{dt^2}|_0=-1$；由 $xe^x=\tan t$ 得 $\frac{dx}{dt}=\frac{\sec^2t}{(1+x)e^x}$，$\frac{dx}{dt}|_0=1$，$\frac{d^2x}{dt^2}|_0=-2$。$t=0$ 时 $x=0,y=1,z=0$，代入得 $\frac{d^2z}{dt^2}|_0=-\frac{13}8$。` },
      { n: "(2)", q: R`设 $f$ 有一阶连续导数，证明：$z=f\left(\frac xy\right)$ 的充要条件是 $x\frac{\partial z}{\partial x}+y\frac{\partial z}{\partial y}=0$。`, a: R`见证明`, sol: R`【证】必要性：令 $u=\frac xy$，$\frac{\partial z}{\partial x}=f'(u)\frac1y$，$\frac{\partial z}{\partial y}=-f'(u)\frac x{y^2}$，故 $x\frac{\partial z}{\partial x}+y\frac{\partial z}{\partial y}=\frac xy f'-\frac xy f'=0$。
充分性：令 $u=\frac xy,v=y$，$z=f(u,v)$，则 $\frac{\partial z}{\partial x}=f'_u\frac1y$，$\frac{\partial z}{\partial y}=-f'_u\frac x{y^2}+f'_v$，故 $x\frac{\partial z}{\partial x}+y\frac{\partial z}{\partial y}=yf'_v=0$，得 $f'_v=0$，$f$ 只与 $u$ 有关，即 $z=f\left(\frac xy\right)$。` },
      { n: "(3)", q: R`设 $z=z(x,y)$ 是由方程 $F\left(\frac1x-\frac1y-\frac1z\right)=\frac1z$ 确定的隐函数，其中 $F$ 可微，求 $x^2\frac{\partial z}{\partial x}+y^2\frac{\partial z}{\partial y}$。`, a: R`$0$`, sol: R`【解】令 $G=F\left(\frac1x-\frac1y-\frac1z\right)-\frac1z$，则 $G'_x=F'\left(-\frac1{x^2}\right)$，$G'_y=F'\frac1{y^2}$，$G'_z=F'\frac1{z^2}+\frac1{z^2}$，故 $\frac{\partial z}{\partial x}=-\frac{G'_x}{G'_z}=\frac{z^2F'}{x^2(F'+1)}$，$\frac{\partial z}{\partial y}=-\frac{G'_y}{G'_z}=-\frac{z^2F'}{y^2(F'+1)}$，从而 $x^2\frac{\partial z}{\partial x}+y^2\frac{\partial z}{\partial y}=0$。` },
      { n: "(4)", q: R`设 $y=g(x,z)$ 与 $z=z(x,y)$ 是由方程 $f(x-z,xy)=0$ 确定的函数，求 $\frac{dy}{dx}$。`, a: R`$\frac{dy}{dx}=\frac{f'_1g'_1+g'_2(f'_1+f'_2y)}{f'_1-xf'_2g'_2}$`, sol: R`【解】将 $z=z(x,y)$ 代入 $y=g(x,z)$ 得 $y=g[x,z(x,y)]$。两边对 $x$ 求导 $\frac{dy}{dx}=g'_1+g'_2\left(\frac{\partial z}{\partial x}+\frac{\partial z}{\partial y}\frac{dy}{dx}\right)$。又由 $f(x-z,xy)=0$ 对 $x,y$ 求偏导得 $\frac{\partial z}{\partial x}=\frac{f'_1+f'_2y}{f'_1}$，$\frac{\partial z}{\partial y}=\frac{xf'_2}{f'_1}$，代入解得 $\frac{dy}{dx}=\frac{f'_1g'_1+g'_2(f'_1+f'_2y)}{f'_1-xf'_2g'_2}$。` },
      { n: "(5)", q: R`求函数 $f(x,y)=(1+y)^2+(1+x)^2$ 在条件 $x^2+y^2+xy=3$ 下的最大值。`, a: R`$9$`, sol: R`【解】令 $L=(1+y)^2+(1+x)^2+\lambda(x^2+y^2+xy-3)$，由 $\begin{cases}2(1+x)+\lambda(2x+y)=0,\\2(1+y)+\lambda(2y+x)=0,\\x^2+y^2+xy-3=0\end{cases}$ 消 $\lambda$ 得 $(x-y)(x+y-1)=0$，即 $x=y$ 或 $x+y=1$。$x=y$ 时 $x=y=\pm1$；$x+y=1$ 时 $(x,y)=(2,-1)$ 或 $(-1,2)$。比较 $f(1,1)=8,f(-1,-1)=0,f(2,-1)=f(-1,2)=9$，最大值为 $9$。` },
      { n: "(6)", q: R`设 $f(x,y)=x^3+y^3-ax^2-by^2\ (a>0,b>0)$ 有极小值 $-8$，求 $a,b$ 的值，使得椭圆 $\frac{x^2}{a^2}+\frac{y^2}{b^2}=1$ 所围面积最大。`, a: R`$a=b=3$`, sol: R`【解】驻点 $(0,0),\left(0,\frac{2b}3\right),\left(\frac{2a}3,0\right),\left(\frac{2a}3,\frac{2b}3\right)$。$f''_{xx}=6x-2a,f''_{xy}=0,f''_{yy}=6y-2b$。$(0,0)$：$AC-B^2=4ab>0,A<0$，极大值 $0$；$\left(0,\frac{2b}3\right),\left(\frac{2a}3,0\right)$ 非极值；$\left(\frac{2a}3,\frac{2b}3\right)$：$AC-B^2=4ab>0,A>0$，极小值 $-\frac4{27}(a^3+b^3)=-8$，即 $a^3+b^3=54$。椭圆面积 $\pi ab$ 在 $a^3+b^3=54$ 下最大，令 $L=ab+\lambda(a^3+b^3-54)$ 得 $a=b$，$2a^3=54$，$a=b=3$。` },
      { n: "(7)", q: R`设 $f(x,y)=e^{-x}(ax+b-y^2)$ 在点 $(-1,y_0)$ 处取得极大值，求 $a,b$ 满足的条件。`, a: R`$a>0$，$b=2a$`, sol: R`【解】$f'_x=e^{-x}(-ax-b+y^2+a)$，$f'_y=-2ye^{-x}$。由 $f'_y(-1,y_0)=0$ 得 $y_0=0$，由 $f'_x(-1,0)=e(2a-b)=0$ 得 $b=2a$。$A=f''_{xx}(-1,0)=e(b-3a)$，$B=f''_{xy}(-1,0)=0$，$C=f''_{yy}(-1,0)=-2e$。由极大值条件 $AC-B^2>0$ 且 $A<0$ 得 $-2e^2(b-3a)>0$ 即 $b<3a$，结合 $b=2a$ 及 $a>0$ 得 $a>0$。故条件为 $a>0,b=2a$。` },
      { n: "(8)", q: R`设函数 $f(x,y)=x^2+2kxy+y^2\ (k>0)$ 满足 $x^2+y^2=1$ 的最大值与最小值分别为 $\lambda_1$ 与 $\lambda_2$，求 $\lambda_1+\lambda_2$。`, a: R`$2$`, sol: R`【解】令 $L=x^2+2kxy+y^2+\lambda(1-x^2-y^2)$，由 $\begin{cases}(1-\lambda)x+ky=0,\\kx+(1-\lambda)y=0,\\x^2+y^2=1\end{cases}$ 得特征方程 $(1-\lambda)^2=k^2$，即 $\lambda=1\pm k$。因 $k>0$，故最大值 $\lambda_1=1+k$、最小值 $\lambda_2=1-k$，所以 $\lambda_1+\lambda_2=2$。` }
    ]
  };
})();
