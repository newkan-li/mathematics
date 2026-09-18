window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q880_s30"] = {
    id: "q880_s30",
    ch: "880题 · 高数 · 第四章 多元函数微分学及其应用",
    title: "基础题·解答题",
    probTitle: "第四章 基础题 · 解答题（含原书解析）",
    book: "李林《精讲精练 880 题（数学二）》2026",
    problems: [
      { n: "(1)", q: R`设 $u=f(x,y,z)$ 有连续偏导数，$y=y(x),z=z(x)$ 分别由方程 $e^{xy}-y=0$ 和 $e^z-xz=0$ 确定，求 $\frac{du}{dx}$。`, a: R`$\frac{du}{dx}=f'_1+\frac{y^2}{1-xy}f'_2+\frac{z}{xz-x}f'_3$`, sol: R`【解】$\frac{du}{dx}=f'_1+f'_2\frac{dy}{dx}+f'_3\frac{dz}{dx}$。①
由 $e^{xy}-y=0$ 对 $x$ 求导 $e^{xy}(y+x\frac{dy}{dx})-\frac{dy}{dx}=0$，得 $\frac{dy}{dx}=\frac{y^2}{1-xy}$；②
由 $e^z-xz=0$ 对 $x$ 求导 $e^z\frac{dz}{dx}-z-x\frac{dz}{dx}=0$，得 $\frac{dz}{dx}=\frac{z}{xz-x}$。③
将②③代入①得 $\frac{du}{dx}=f'_1+\frac{y^2}{1-xy}f'_2+\frac{z}{xz-x}f'_3$。` },
      { n: "(2)", q: R`设 $y=y(x),z=z(x)$ 由方程组 $\begin{cases}x^2+y^2+z^2=3x,\\2x-3y+5z=4\end{cases}$ 确定，求 $\frac{dy}{dx},\frac{dz}{dx}$。`, a: R`$\frac{dy}{dx}=-\frac{10x-4z-15}{2(5y+3z)}$；$\frac{dz}{dx}=-\frac{6x+4y-9}{2(5y+3z)}$`, sol: R`【解】方程组对 $x$ 求导得 $\begin{cases}2x+2y\frac{dy}{dx}+2z\frac{dz}{dx}=3,\\2-3\frac{dy}{dx}+5\frac{dz}{dx}=0,\end{cases}$ 解得
$$\frac{dy}{dx}=-\frac{10x-4z-15}{2(5y+3z)},\quad\frac{dz}{dx}=-\frac{6x+4y-9}{2(5y+3z)}.$$` },
      { n: "(3)", q: R`设当 $x\geqslant0,y\geqslant0$ 时，有 $|x^2-y^2|e^{-x^2-y^2}\leqslant k$ 成立，求 $k$ 的最小值。`, a: R`$e^{-1}$`, sol: R`【解】即求 $f(x,y)=(x^2-y^2)e^{-x^2-y^2}$ 在 $D=\{x\geqslant0,y\geqslant0\}$ 上的最值。$f'_x=f'_y=0$ 得驻点 $(0,0),(0,\pm1),(\pm1,0)$，在 $D$ 内无驻点。边界上：$f(0,y)=-y^2e^{-y^2}$ 取 $(0,0),(0,1)$；$f(x,0)=x^2e^{-x^2}$ 取 $(0,0),(1,0)$。比较 $f(0,0)=0$，$f(0,1)=e^{-1}$，$f(1,0)=e^{-1}$，故最大 $e^{-1}$、最小 $-e^{-1}$，$k$ 的最小值为 $e^{-1}$。` },
      { n: "(4)", q: R`求 $f(x,y)=(1+e^y)\cos x-ye^y$ 的极值。`, a: R`极大值 $f(2n\pi,0)=2$（$n=0,\pm1,\cdots$），无极小值`, sol: R`【解】由 $\begin{cases}f'_x=-(1+e^y)\sin x=0,\\f'_y=e^y(\cos x-1-y)=0\end{cases}$ 得驻点 $(2n\pi,0)$ 和 $((2n+1)\pi,-2)$。$f''_{xx}=-(1+e^y)\cos x$，$f''_{xy}=-e^y\sin x$，$f''_{yy}=e^y(\cos x-2-y)$。
在 $(2n\pi,0)$：$A=-2,B=0,C=-1$，$AC-B^2=2>0$，$A<0$，极大值 $f(2n\pi,0)=2$。
在 $((2n+1)\pi,-2)$：$A=1+e^{-2},B=0,C=-e^{-2}$，$AC-B^2<0$，非极值点。故无极小值。` },
      { n: "(5)", q: R`设曲面 $S:(x-y)^2-z^2=1$，求坐标原点到 $S$ 的最短距离。`, a: R`$\frac{\sqrt2}2$`, sol: R`【解】设 $S$ 上任一点 $(x,y,z)$，$d^2=x^2+y^2+z^2$。令 $L=x^2+y^2+z^2+\lambda[(x-y)^2-z^2-1]$，由 $\begin{cases}2x+2\lambda(x-y)=0,\\2y-2\lambda(x-y)=0,\\2z-2\lambda z=0,\\(x-y)^2-z^2-1=0,\end{cases}$ 得 $x=-y$，$z=0$，$x^2=\frac14$，驻点 $\left(\frac12,-\frac12,0\right),\left(-\frac12,\frac12,0\right)$，最短距离 $d=\sqrt{\frac14+\frac14}=\frac{\sqrt2}2$。` },
      { n: "(6)", q: R`求双曲线 $xy=4$ 与直线 $2x+y=1$ 之间的最短距离。`, a: R`$\frac{4\sqrt2-1}{\sqrt5}$`, sol: R`【解】在 $xy=4$ 上任取 $P(x,y)$，到直线 $2x+y=1$ 的距离 $d=\frac{|2x+y-1|}{\sqrt5}$，只需求 $d^2$ 的最小值。令 $L=\frac15(2x+y-1)^2+\lambda(xy-4)$，解方程组得驻点 $(\sqrt2,2\sqrt2)$，$(-\sqrt2,-2\sqrt2)$。比较 $d(\sqrt2,2\sqrt2)=\frac{4\sqrt2-1}{\sqrt5}$，$d(-\sqrt2,-2\sqrt2)=\frac{4\sqrt2+1}{\sqrt5}$，最短距离为 $\frac{4\sqrt2-1}{\sqrt5}$。` },
      { n: "(7)", q: R`求函数 $z=x^3-3x^2-3y^2$ 在闭区域 $D:x^2+y^2\leqslant16$ 上的最大值。`, a: R`$16$`, sol: R`【解】先求 $D$ 内驻点：$z'_x=3x^2-6x=0$，$z'_y=-6y=0$ 得 $(0,0),(2,0)$。$z''_{xx}=6x-6,z''_{xy}=0,z''_{yy}=-6$。$(0,0)$：$AC-B^2=36>0,A<0$，为极大值点 $z(0,0)=0$；$(2,0)$：$AC-B^2<0$，非极值点。
边界 $x^2+y^2=16$ 上 $y^2=16-x^2$，$z=x^3-48\ (-4\leqslant x\leqslant4)$，$\frac{dz}{dx}=3x^2=0$ 得 $x=0$，$y=\pm4$；又端点 $x=\pm4,y=0$。比较 $z(0,0)=0,z(2,0)=-4,z(0,\pm4)=-48,z(4,0)=16,z(-4,0)=-112$，最大值 $z(4,0)=16$。` },
      { n: "(8)", q: R`求 $u=x^2+y^2+z^2$ 在条件 $x+y+z=4$ 和 $z=x^2+y^2$ 下的最大值和最小值。`, a: R`最大值 $72$，最小值 $6$`, sol: R`【解】令 $L=x^2+y^2+z^2+\lambda_1(z-x^2-y^2)+\lambda_2(x+y+z-4)$，由 $\begin{cases}2x-2\lambda_1x+\lambda_2=0,\\2y-2\lambda_1y+\lambda_2=0,\\2z+\lambda_1+\lambda_2=0,\\z-x^2-y^2=0,\\x+y+z-4=0\end{cases}$ 及 $x=y$ 得点 $(-2,-2,8)$ 和 $(1,1,2)$，故最大值 $(-2)^2+(-2)^2+8^2=72$，最小值 $1+1+4=6$。` },
      { n: "(9)", q: R`在第一象限内，过曲线 $3x^2+2xy+3y^2=a$ 上任一点作其切线，切线与两坐标轴所围成的三角形面积的最小值为 $\frac14$，求 $a$ 的值。`, a: R`$a=1$`, sol: R`【解】曲线上点 $P(x,y)$ 处 $y'=-\frac{3x+y}{x+3y}$，切线截距之积得面积 $S=\frac12\cdot\frac{a^2}{a+8xy}$。令 $L=xy+\lambda(3x^2+2xy+3y^2-a)$，解得 $x=y=\frac{\sqrt{2a}}4$，故 $S_{\min}=\frac12\cdot\frac{a^2}{a+8\cdot\frac{\sqrt{2a}}4\cdot\frac{\sqrt{2a}}4}=\frac14$，解得 $a=1$。` },
      { n: "(10)", q: R`设 $u(x,y)$ 有二阶连续偏导数，利用变换 $\xi=x+ay,\eta=x+by$，将方程 $\frac{\partial^2u}{\partial x^2}+4\frac{\partial^2u}{\partial x\partial y}+3\frac{\partial^2u}{\partial y^2}=0$ 化为 $\frac{\partial^2u}{\partial\xi\partial\eta}=0$，求 $a,b$ 的值。`, a: R`$a=-1,b=-\frac13$ 或 $a=-\frac13,b=-1$`, sol: R`【解】$\frac{\partial^2u}{\partial x^2}=u_{\xi\xi}+2u_{\xi\eta}+u_{\eta\eta}$，$\frac{\partial^2u}{\partial x\partial y}=au_{\xi\xi}+(a+b)u_{\xi\eta}+bu_{\eta\eta}$，$\frac{\partial^2u}{\partial y^2}=a^2u_{\xi\xi}+2abu_{\xi\eta}+b^2u_{\eta\eta}$。代入原方程得 $(1+4a+3a^2)u_{\xi\xi}+[2+4(a+b)+6ab]u_{\xi\eta}+(1+4b+3b^2)u_{\eta\eta}=0$。要化为 $u_{\xi\eta}=0$，需 $1+4a+3a^2=0$ 且 $1+4b+3b^2=0$ 且 $u_{\xi\eta}$ 系数非零，解得 $a=-1,b=-\frac13$ 或 $a=-\frac13,b=-1$。` },
      { n: "(11)", q: R`设 $z=\frac uy+e^{-ux}+f(u)$，$u(x,y)$ 满足 $xe^{-ux}-f'(u)=\frac1y$，其中 $u(x,y)$ 和 $f(u)$ 均可微，且 $\frac{\partial z}{\partial x}=\frac{\partial z}{\partial y}$，求 $u(x,y)$。`, a: R`$u(x,y)=\frac{\ln y^2}{x}$`, sol: R`【解】由 $z=\frac uy+e^{-ux}+f(u)$ 及 $xe^{-ux}-f'(u)=\frac1y$ 得
$$\frac{\partial z}{\partial x}=\frac1y u_x-e^{-ux}(u+xu_x)+f'(u)u_x=-ue^{-ux}+\left[\frac1y-xe^{-ux}+f'(u)\right]u_x=-ue^{-ux},$$
$$\frac{\partial z}{\partial y}=-\frac u{y^2}+\frac1y u_y-xe^{-ux}u_y+f'(u)u_y=-\frac u{y^2}+\left[\frac1y-xe^{-ux}+f'(u)\right]u_y=-\frac u{y^2}.$$
由 $\frac{\partial z}{\partial x}=\frac{\partial z}{\partial y}$ 得 $ue^{-ux}=\frac u{y^2}$，故 $u(x,y)=\frac{\ln y^2}x$。` }
    ]
  };
})();
