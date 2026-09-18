window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q880_s27"] = {
    id: "q880_s27",
    ch: "880题 · 高数 · 第三章 一元函数积分学及其应用",
    title: "拓展题（本章完）",
    probTitle: "第三章 拓展题（含原书解析）",
    book: "李林《精讲精练 880 题（数学二）》2026",
    problems: [
      { n: "(1)", q: R`设 $y=f(x)$ 在 $[0,+\infty)$ 上非负连续，并有曲边梯形 $D(t)=\{(x,y)\mid0\leqslant x\leqslant t,0\leqslant y\leqslant f(x)\}$，$D(t)$ 所围图形的面积 $S(t)=te^t$，$D(t)$ 绕直线 $x=t$ 旋转一周所得旋转体的体积为 $V(t)$，求 $V(t)$ 的表达式。`, a: R`$V(t)=2\pi(t-1)e^t+2\pi$`, sol: R`【解】微元 $\mathrm dV=2\pi(t-x)f(x)\mathrm dx$，$V(t)=\int_0^t2\pi(t-x)f(x)dx$，$V'(t)=2\pi\int_0^tf(x)dx=2\pi S(t)=2\pi te^t$，故 $V(t)=2\pi\int te^tdt=2\pi(t-1)e^t+C$，由 $V(0)=0$ 得 $C=2\pi$，故 $V(t)=2\pi(t-1)e^t+2\pi$。` },
      { n: "(2)", q: R`在水平放置的椭圆底柱形容器内存放液体（密度为 $\rho\ \mathrm{kg/m^3}$），容器长为 $4\ \mathrm m$，椭圆方程为 $\frac{x^2}4+y^2=1$。
(Ⅰ) 当液面在过点 $(0,y)(-1\leqslant y\leqslant1)$ 处的水平线时，容器内液体的体积是多少？
(Ⅱ) 当容器内存满了液体后，平均每分钟从容器顶端抽出 $0.16\ \mathrm{m^3}$ 的液体，当液面降至 $y=0$ 处时，求液体下降的速度。
(Ⅲ) 问抽出全部液体需要做多少功？`, a: R`(Ⅰ) $8\arcsin y+8y\sqrt{1-y^2}+4\pi\ \mathrm{m^3}$；(Ⅱ) $0.01\ \mathrm{m/min}$；(Ⅲ) $8\rho g\pi\ \mathrm J$`, sol: R`【解】(Ⅰ) $V=4\cdot2\int_{-1}^y2\sqrt{1-y^2}dy=16\int_{-\pi/2}^{\arcsin y}\cos^2t\,dt=8\arcsin y+8y\sqrt{1-y^2}+4\pi\ (\mathrm{m^3})$。
(Ⅱ) $\frac{dV}{dt}=16\sqrt{1-y^2}\frac{dy}{dt}$，故 $\frac{dy}{dt}\Big|_{y=0}=\frac1{16}\times0.16=0.01\ \mathrm{m/min}$。
(Ⅲ) $W=4\rho g\int_{-1}^14\sqrt{1-y^2}(1-y)dy=8\rho g\pi\ \mathrm J$。` },
      { n: "(3)", q: R`设 $f(x)$ 在 $[a,b]$ 上有二阶导数，且 $f(a)=f(b)=0,f''(x)<0$，证明：当 $x\in(a,b)$ 时，有 $0<f(x)<\frac2{b-a}\int_a^bf(x)dx$。`, a: R`见证明`, sol: R`【证】由 $f(a)=f(b)=0$ 及罗尔定理存在 $x_0\in(a,b)$ 使 $f'(x_0)=0$；由 $f''<0$ 知 $f'$ 单调减，故 $x\in(a,x_0)$ 时 $f'>0$、$f(x)>f(a)=0$；$x\in(x_0,b)$ 时 $f'<0$、$f(x)>f(b)=0$。故 $f(x)>0$。
对 $f$ 在 $t$ 处泰勒展开 $f(x)=f(t)+f'(t)(x-t)+\frac{f''(\xi)}2(x-t)^2<f(t)+f'(t)(x-t)$，两边对 $t$ 在 $[a,b]$ 积分得 $(b-a)f(x)<2\int_a^bf(t)dt$，故 $f(x)<\frac2{b-a}\int_a^bf(x)dx$。` },
      { n: "(4)", q: R`设 $f(x)$ 在 $[a,b](b>a)$ 上可导且不恒为常数，$f(a)f(b)<0$。证明：至少存在一点 $\xi\in(a,b)$，使得 $\frac2{(b-a)^2}\int_a^bf(x)dx<|f'(\xi)|$。`, a: R`见证明`, sol: R`【证】由 $f(a)f(b)<0$ 及零点定理存在 $x_0\in(a,b)$ 使 $f(x_0)=0$。令 $F(x)=\int_{x_0}^xf(t)dt$，则 $F(x_0)=F'(x_0)=0$，$F''(x)=f'(x)$。$F$ 在 $x_0$ 处泰勒展开 $F(x)=\frac{f'(\eta)}2(x-x_0)^2$。代入 $x=b,a$ 得 $F(b)=\frac{f'(\eta_1)}2(b-x_0)^2$，$F(a)=\frac{f'(\eta_2)}2(a-x_0)^2$。故
$$\int_a^bf(x)dx=F(b)-F(a)\leqslant\frac{|f'(\eta_1)|}2(b-x_0)^2+\frac{|f'(\eta_2)|}2(x_0-a)^2.$$
取 $|f'(\xi)|=\max\{|f'(\eta_1)|,|f'(\eta_2)|\}$，得 $\int_a^bf(x)dx<\frac12|f'(\xi)|(b-a)^2$，故 $\frac2{(b-a)^2}\int_a^bf(x)dx<|f'(\xi)|$。` },
      { n: "(5)", q: R`设 $f(x)$ 在 $[a,b]$ 上有连续的二阶导数。
(Ⅰ) 证明：$\int_a^bf(x)dx=\frac12(b-a)[f(a)+f(b)]+\frac12\int_a^b(x-a)(x-b)f''(x)dx$；
(Ⅱ) 记 $M=\max\limits_{x\in[a,b]}\{|f''(x)|\}$，证明：$\left|\int_a^bf(x)dx-\frac12(b-a)[f(a)+f(b)]\right|\leqslant\frac{(b-a)^3}{12}M$。`, a: R`见证明`, sol: R`【证】(Ⅰ) $\int_a^b(x-a)(x-b)f''(x)dx=(x-a)(x-b)f'(x)|_a^b-\int_a^b(2x-a-b)f'(x)dx=\int_a^b(a+b-2x)f'(x)dx=(a+b-2x)f(x)|_a^b+2\int_a^bf(x)dx=(a-b)[f(a)+f(b)]+2\int_a^bf(x)dx$，故所证成立。
(Ⅱ) 由 (Ⅰ)，$\left|\int_a^bf-\frac12(b-a)(f(a)+f(b))\right|\leqslant\frac M2\int_a^b(x-a)(b-x)dx=\frac M4\int_a^b(b-x)d(x-a)^2=\frac{(b-a)^3}{12}M$。` },
      { n: "(6)", q: R`设 $f(x)$ 在 $[a,b]$ 上有连续的二阶导数，且 $f'(a)=f'(b)$。证明：存在一点 $\xi\in(a,b)$，使得 $\int_a^bf(x)dx=\frac12(b-a)[f(a)+f(b)]+\frac{(b-a)^3}{24}f''(\xi)$。`, a: R`见证明`, sol: R`【证】令 $F(x)=\int_a^xf(t)dt$，则 $F'''(x)=f''(x)$，$F(a)=0$。$F$ 在 $a$、$b$ 处泰勒展开并取 $x=\frac{a+b}2$，相减并用 $f'(a)=f'(b)$ 得 $\int_a^bf(x)dx=\frac12(b-a)[f(a)+f(b)]+\frac1{24}(b-a)^3\cdot\frac12[f''(\eta_1)+f''(\eta_2)]$。由 $f''$ 连续及介值定理存在 $\xi\in(a,b)$ 使 $f''(\xi)=\frac12[f''(\eta_1)+f''(\eta_2)]$，故所证成立。` },
      { n: "(7)", q: R`设 $f(x)$ 有连续的二阶导数，$f(0)=f(1)=1,M=\max\limits_{x\in[0,1]}\{|f''(x)|\}$。
(Ⅰ) 证明：当 $x\in[0,1]$ 时，有 $|f'(x)|\leqslant\frac12M$；
(Ⅱ) 在第 (Ⅰ) 问的基础上，证明：$\left|\int_0^1f(x)dx\right|\leqslant1+\frac18M$。`, a: R`见证明`, sol: R`【证】(Ⅰ) 对 $f$ 在 $x$ 处泰勒展开并代入 $u=1,0$，两式相减得 $f'(x)=-\frac12[f''(\xi_1)(1-x)^2-f''(\xi_2)x^2]$，故 $|f'(x)|\leqslant\frac12|f''(\xi)|[(1-x)^2+x^2]\leqslant\frac12M$（取 $|f''(\xi)|=\max\{|f''(\xi_1)|,|f''(\xi_2)|\}$）。
(Ⅱ) 由拉格朗日中值定理，$x\in\left[0,\frac12\right]$ 时 $|f(x)|\leqslant1+\frac12Mx$；$x\in\left[\frac12,1\right]$ 时 $|f(x)|\leqslant1+\frac12M(1-x)$。故 $\left|\int_0^1f(x)dx\right|\leqslant\int_0^{1/2}\left(1+\frac12Mx\right)dx+\int_{1/2}^1\left[1+\frac12M(1-x)\right]dx=1+\frac18M$。` },
      { n: "(8)", q: R`设 $f(x)$ 在 $[0,+\infty)$ 上有连续的二阶导数，且 $|f''(x)|\leqslant1$。
(Ⅰ) 证明：$\left|\int_0^1f(x)dx-f\left(\frac12\right)\right|\leqslant\frac1{24}$；
(Ⅱ) 若对任意的 $x\in[0,+\infty)$，有 $f(x)=f(x+1)$，$n$ 为正整数。证明：$\left|\int_0^nf(x)dx\right|\leqslant n\left[\frac16+|f(0)|\right]$。`, a: R`见证明`, sol: R`【证】(Ⅰ) 对 $f$ 在 $x=\frac12$ 处泰勒展开并积分，$\int_0^1f(x)dx=f\left(\frac12\right)+\int_0^1\frac{f''(\xi)}2\left(x-\frac12\right)^2dx$，故 $\left|\int_0^1f-f\left(\frac12\right)\right|\leqslant\frac12\int_0^1\left(x-\frac12\right)^2dx=\frac1{24}$。
(Ⅱ) 由周期性 $\int_0^nf=n\int_0^1f$，且 $f(0)=f(1),f'(0)=f'(1)$。在 $x=0$、$x=1$ 处泰勒展开并积分相加得 $\left|\int_0^1f(x)dx\right|\leqslant|f(0)|+\frac16$，故 $\left|\int_0^nf(x)dx\right|\leqslant n\left[\frac16+|f(0)|\right]$。` },
      { n: "(9)", q: R`设 $f(x)$ 在 $[0,1]$ 上有连续的导数，$f(0)=0,f(1)=1$，证明：$\lim\limits_{n\to\infty}\left[\int_0^1f(x)dx-\frac1n\sum\limits_{k=1}^nf\left(\frac kn\right)\right]=-\frac12$。`, a: R`见证明`, sol: R`【证】令 $F(x)=\int_0^xf(t)dt$，则 $F''(x)=f'(x)$。$\int_0^1f(x)dx=\sum\limits_{k=1}^n[F(\frac kn)-F(\frac{k-1}n)]$。对 $F$ 在 $\frac kn$ 处泰勒展开并代入 $\frac{k-1}n$，得 $F(\frac{k-1}n)-F(\frac kn)=-\frac1nf(\frac kn)+\frac1{2n^2}f'(\xi_k)$。故
$$n\left[\int_0^1f-\frac1n\sum_{k=1}^nf\left(\frac kn\right)\right]=-\frac12\sum_{k=1}^nf'(\xi_k)\frac1n\to-\frac12\int_0^1f'(x)dx=-\frac12[f(1)-f(0)]=-\frac12.$$` },
      { n: "(10)", q: R`设 $f(x)$ 在 $[0,1]$ 上有连续的二阶导数，$f(x)$ 不恒为零，且 $f(0)=f(1)=0$，$|f(x)|$ 在 $x=x_0$ 处取得最大值，$x_0\in(0,1)$。证明：
(Ⅰ) 至少存在点 $\xi_1\in(0,x_0),\xi_2\in(x_0,1)$，使得 $f'(\xi_2)-f'(\xi_1)=\frac1{x_0}f'(\xi_2)$；
(Ⅱ) $\int_0^1|f''(x)|dx\geqslant4|f(x_0)|$。`, a: R`见证明`, sol: R`【证】(Ⅰ) $f$ 在 $[0,x_0]$、$[x_0,1]$ 上用拉格朗日中值定理得 $f(x_0)=f'(\xi_1)x_0$，$f(x_0)=f'(\xi_2)(x_0-1)$，故 $f'(\xi_2)-f'(\xi_1)=\frac1{x_0}f'(\xi_2)$。
(Ⅱ) $\int_0^1|f''(x)|dx\geqslant\int_{\xi_1}^{\xi_2}|f''(x)|dx\geqslant\left|\int_{\xi_1}^{\xi_2}f''(x)dx\right|=|f'(\xi_2)-f'(\xi_1)|=|f(x_0)|\frac1{x_0(1-x_0)}\geqslant4|f(x_0)|$（因 $x_0(1-x_0)\leqslant\frac14$）。` },
      { n: "(11)", q: R`设 $f(x)$ 在 $[0,1]$ 上有连续的二阶导数。证明：
(Ⅰ) 对任意点 $\xi\in\left(0,\frac14\right),\eta\in\left(\frac34,1\right)$，有 $|f'(x)|<2|f(\xi)-f(\eta)|+\int_0^1|f''(x)|dx,x\in[0,1]$；
(Ⅱ) 当 $f(0)=f(1)=0,f(x)\neq0,x\in(0,1)$ 时，有 $\int_0^1\left|\frac{f''(x)}{f(x)}\right|dx\geqslant4$。`, a: R`见证明`, sol: R`【证】(Ⅰ) 由拉格朗日中值定理 $|f(\xi)-f(\eta)|=|f'(\theta)||\eta-\xi|>\frac12|f'(\theta)|$，故 $|f'(x)|-2|f(\xi)-f(\eta)|<|f'(x)|-|f'(\theta)|\leqslant|f'(x)-f'(\theta)|=\left|\int_\theta^xf''(t)dt\right|\leqslant\int_0^1|f''(x)|dx$。
(Ⅱ) 设 $|f(x_0)|=\max|f(x)|$，$x_0\in(0,1)$。由拉格朗日中值定理 $f(x_0)=f'(\xi_1)x_0$，$-f(x_0)=f'(\xi_2)(1-x_0)$。故 $\int_0^1\left|\frac{f''}{f}\right|dx\geqslant\frac1{|f(x_0)|}\left|\int_{\xi_1}^{\xi_2}f''dx\right|=\frac1{|f(x_0)|}|f'(\xi_2)-f'(\xi_1)|=\frac1{x_0}+\frac1{1-x_0}=\frac1{x_0(1-x_0)}\geqslant4$。` },
      { n: "(12)", q: R`设 $f(x)$ 在 $[a,b]$ 上有连续的二阶导数，且 $M=\max\limits_{x\in[a,b]}\{|f''(x)|\}$。证明：
(Ⅰ) $\left|\int_a^bf(x)dx-(b-a)f\left(\frac{a+b}2\right)\right|\leqslant\frac{(b-a)^3}{24}M$；
(Ⅱ) 存在一点 $\xi\in(a,b)$，使得 $\int_a^bf(x)dx=(b-a)f\left(\frac{a+b}2\right)+\frac{(b-a)^3}{24}f''(\xi)$。`, a: R`见证明`, sol: R`【证】(Ⅰ) 对 $f$ 在 $x=\frac{a+b}2$ 处泰勒展开并积分，$\left|\int_a^bf(x)dx-(b-a)f\left(\frac{a+b}2\right)\right|=\left|\int_a^b\frac{f''(\eta)}2\left(x-\frac{a+b}2\right)^2dx\right|\leqslant\frac M2\int_a^b\left(x-\frac{a+b}2\right)^2dx=\frac{(b-a)^3}{24}M$。
(Ⅱ) 令 $F(x)=\int_a^xf(t)dt$，$F$ 在 $x=\frac{a+b}2$ 处二阶泰勒展开，代入 $x=a,b$ 相减得 $\int_a^bf(x)dx=(b-a)f\left(\frac{a+b}2\right)+\frac{(b-a)^3}{24}\cdot\frac12[f''(\xi_2)+f''(\xi_3)]$，由介值定理存在 $\xi$ 使 $f''(\xi)=\frac12[f''(\xi_2)+f''(\xi_3)]$，故所证成立。` },
      { n: "(13)", q: R`设 $f(x)$ 在 $[-1,1]$ 上有连续的二阶导数，证明：
(Ⅰ) 存在一点 $\xi\in[-1,1]$，使得 $\int_{-1}^1xf(x)dx=\frac13[2f'(\xi)+\xi f''(\xi)]$；
(Ⅱ) 若 $f(x)$ 在 $(-1,1)$ 内取得极值，则存在一点 $\eta\in(-1,1)$，使得 $|2f'(\eta)+\eta f''(\eta)|\geqslant\frac12|f(1)-f(-1)|$。`, a: R`见证明`, sol: R`【证】(Ⅰ) 令 $F(x)=xf(x)$，则 $F''(x)=2f'(x)+xf''(x)$，$F(0)=0$，$F'(0)=f(0)$。$F$ 在 $0$ 处泰勒展开并积分得 $\int_{-1}^1F(x)dx=\frac12\int_{-1}^1F''(c)x^2dx$。由介值定理存在 $\xi$ 使 $3\int_{-1}^1F(x)dx=F''(\xi)$，即 $\int_{-1}^1xf(x)dx=\frac13[2f'(\xi)+\xi f''(\xi)]$。
(Ⅱ) 设 $f$ 在 $x_0\in(-1,1)$ 取极值，则 $f'(x_0)=0$，$F'(x_0)=f(x_0)$。$F$ 在 $x_0$ 处泰勒展开得 $F(1)=f(x_0)+\frac{F''(\eta_1)}2(1-x_0)^2$，$F(-1)=-f(x_0)+\frac{F''(\eta_2)}2(1+x_0)^2$，相加得 $|f(1)-f(-1)|\leqslant\frac M2[(1-x_0)^2+(1+x_0)^2]\leqslant2M$，故 $M\geqslant\frac12|f(1)-f(-1)|$，取 $\eta$ 使 $|F''(\eta)|=M$，即所证。` }
    ]
  };
})();
