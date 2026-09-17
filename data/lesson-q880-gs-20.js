window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q880_s19"] = {
    id: "q880_s19",
    ch: "880题 · 高数 · 第三章 一元函数积分学及其应用",
    title: "综合题·填空题",
    probTitle: "第三章 综合题 · 填空题（含原书解析）",
    book: "李林《精讲精练 880 题（数学二）》2026",
    problems: [
      { n: "(1)", q: R`$f(x)=\max\{1,x^2\}$ 在 $(-\infty,+\infty)$ 内满足 $F(0)=1$ 的一个原函数为 $\underline{\qquad}$。`, a: R`$F(x)=\begin{cases}\frac13x^3+\frac13,&x<-1,\\x+1,&-1\leqslant x\leqslant1,\\\frac13x^3+\frac53,&x>1.\end{cases}$`, sol: R`【解】分段积分并利用原函数连续性、$F(0)=1$ 拼接得上述 $F(x)$。` },
      { n: "(2)", q: R`设 $f(x)$ 在 $[a,b]$ 上连续，若 $x_0\in[a,b],x\in[a,b]$，则极限 $\lim\limits_{\Delta x\to0}\frac1{\Delta x}\int_{x_0}^x[f(t+\Delta x)-f(t)]dt=\underline{\qquad}$。`, a: R`$f(x)-f(x_0)$`, sol: R`【解】$\int_{x_0}^xf(t+\Delta t)dt\xlongequal{t+\Delta t=u}\int_{x_0+\Delta t}^{x+\Delta t}f(u)du$，故原式 $=\lim\limits_{\Delta t\to0}\frac{\int_{x_0+\Delta t}^{x+\Delta t}f(u)du-\int_{x_0}^xf(t)dt}{\Delta t}=f(x)-f(x_0)$。
【注】不能把极限号与积分号随意交换。` },
      { n: "(3)", q: R`由曲线 $y=x(x-1)(2-x)$ 与 $x$ 轴围成的平面图形的面积 $A=\underline{\qquad}$。`, a: R`$\frac12$`, sol: R`【解】交点 $x=0,1,2$，$[0,1]$ 上 $y<0$，$[1,2]$ 上 $y>0$，故 $A=-\int_0^1x(x-1)(2-x)dx+\int_1^2x(x-1)(2-x)dx=\frac14+\frac14=\frac12$。` },
      { n: "(4)", q: R`双纽线 $(x^2+y^2)^2=x^2-y^2$ 围成的平面图形的面积为 $\underline{\qquad}$。`, a: R`$1$`, sol: R`【解】极坐标方程 $r^2=\cos2\theta$，由对称性 $A=4\times\frac12\int_0^{\pi/4}r^2d\theta=2\int_0^{\pi/4}\cos2\theta\,d\theta=1$。` },
      { n: "(5)", q: R`曲线 $\theta=\frac12\left(r+\frac1r\right)$ 在区间 $r\in[1,3]$ 上的弧长为 $\underline{\qquad}$。`, a: R`$2+\frac12\ln3$`, sol: R`【解】参数方程 $x=r\cos\theta,y=r\sin\theta$，$\theta=\frac12(r+\frac1r)$，则
$$s=\int_1^3\sqrt{x'^2+y'^2}dr=\int_1^3\sqrt{\left(\frac r2+\frac1{2r}\right)^2}dr=\int_1^3\left(\frac r2+\frac1{2r}\right)dr=2+\frac12\ln3.$$` },
      { n: "(6)", q: R`闭曲线 $(x^2+y^2)^3=x^4+y^4$ 所围区域的面积 $S=\underline{\qquad}$。`, a: R`$\frac34\pi$`, sol: R`【解】极坐标方程 $r=\sqrt{\cos^4\theta+\sin^4\theta}$，故 $S=\frac12\int_0^{2\pi}r^2d\theta=2\int_0^{\pi/2}(\cos^4\theta+\sin^4\theta)d\theta=4\int_0^{\pi/2}\sin^4\theta\,d\theta=4\times\frac34\times\frac12\times\frac\pi2=\frac34\pi$。` },
      { n: "(7)", q: R`已知 $f'(e^x)=xe^{-x}$，且 $f(1)=0$，则 $f(x)=\underline{\qquad}$。`, a: R`$\frac{(\ln x)^2}2$`, sol: R`【解】令 $e^x=t$，则 $x=\ln t$，$f'(t)=\frac{\ln t}t$，故 $f(t)=\int\frac{\ln t}tdt=\frac12(\ln t)^2+C$。由 $f(1)=0$ 得 $C=0$，故 $f(x)=\frac{(\ln x)^2}2$。` },
      { n: "(8)", q: R`已知 $f'(x)=\sqrt{1-\cos2x},x\in\left[-\frac\pi2,\frac\pi2\right],f(0)=0$，则 $f(x)=\underline{\qquad}$。`, a: R`$f(x)=\begin{cases}\sqrt2(1-\cos x),&0\leqslant x\leqslant\frac\pi2,\\\sqrt2(\cos x-1),&-\frac\pi2\leqslant x<0.\end{cases}$`, sol: R`【解】$f'(x)=\sqrt2|\sin x|$，分段积分并由 $f$ 在 $x=0$ 连续（$f(0)=0$）得 $C_1=\sqrt2,C_2=-\sqrt2$，故 $f(x)$ 如上。` },
      { n: "(9)", q: R`已知曲线 $y=y(x)$ 上任一点 $(x,y)$ 处的切线的斜率为 $\frac1{x\sqrt{x^2-1}}$，且曲线通过点 $(-2,0)$，则该曲线方程为 $y=\underline{\qquad}$。`, a: R`$\arcsin\frac1x+\frac\pi6\ (x<-1)$`, sol: R`【解】$\frac{dy}{dx}=\frac1{x\sqrt{x^2-1}}$，$y=\int\frac{dx}{x\sqrt{x^2-1}}=\arcsin\frac1x+C\ (x<-1)$。由 $y(-2)=0$ 得 $C=\frac\pi6$，故 $y=\arcsin\frac1x+\frac\pi6$。
【注】因过点 $(-2,0)$，故 $x\in(-\infty,-1)$，不能写成 $\arccos\frac1x+C$ 的形式。` },
      { n: "(10)", q: R`设 $f(x)$ 连续，$g(x)=\int_0^{x^2}xf(t)dt$，且 $g(1)=1,g'(1)=5$，则 $f(1)=\underline{\qquad}$。`, a: R`$2$`, sol: R`【解】$g(x)=x\int_0^{x^2}f(t)dt$，由 $g(1)=1$ 得 $\int_0^1f(t)dt=1$。又 $g'(x)=\int_0^{x^2}f(t)dt+2x^2f(x^2)$，由 $g'(1)=5$ 得 $5=1+2f(1)$，故 $f(1)=2$。` },
      { n: "(11)", q: R`设 $f(2)=\frac12,f'(2)=0$，且 $\int_0^2f(x)dx=1$，则 $I=\int_0^1x^2f''(2x)dx=\underline{\qquad}$。`, a: R`$0$`, sol: R`【解】$I=\frac12\int_0^1x^2d[f'(2x)]=\frac12\left[x^2f'(2x)|_0^1-\int_0^12xf'(2x)dx\right]=-\frac12\int_0^1x\,d[f(2x)]=-\frac12\left[xf(2x)|_0^1-\int_0^1f(2x)dx\right]=\frac12\int_0^1f(2x)dx-\frac12f(2)=\frac14\int_0^2f(t)dt-\frac14=0$。` },
      { n: "(12)", q: R`设 $f(x)=\int_0^xe^{\cos t}dt$，则 $I=\int_0^\pi f(x)\cos x\,dx=\underline{\qquad}$。`, a: R`$e^{-1}-e$`, sol: R`【解】$I=\int_0^\pi f(x)d(\sin x)=f(x)\sin x|_0^\pi-\int_0^\pi f'(x)\sin x\,dx=-\int_0^\pi e^{\cos x}\sin x\,dx=\int_0^\pi e^{\cos x}d(\cos x)=e^{\cos x}|_0^\pi=e^{-1}-e$。` },
      { n: "(13)", q: R`设 $g(x)$ 在 $[0,+\infty)$ 上可导，$\ln(1+x)$ 是 $g(x)$ 的一个原函数，且 $f(x)=\lim\limits_{t\to\infty}t^2\left[g\left(2x+\frac1t\right)-g(2x)\right]\sin\frac xt$，则 $f(x)$ 在区间 $[0,e]$ 上的平均值为 $\underline{\qquad}$。`, a: R`$\frac1{2(1+2e)}-\frac1{4e}\ln(1+2e)$`, sol: R`【解】$f(x)=\lim\limits_{t\to\infty}x\cdot\frac{\sin\frac xt}{\frac xt}\cdot\frac{g(2x+\frac1t)-g(2x)}{\frac1t}=xg'(2x)$。由 $\int g(x)dx=\ln(1+x)+C$ 得 $g(x)=\frac1{1+x}$。故平均值
$$\frac1e\int_0^ef(x)dx=\frac1e\int_0^exg'(2x)dx=\frac1{2e}\left[xg(2x)|_0^e-\int_0^eg(2x)dx\right]=\frac1{2(1+2e)}-\frac1{4e}\ln(1+2e).$$` },
      { n: "(14)", q: R`设 $\int_0^{+\infty}\frac{\sin x}xdx=\frac\pi2$，则 $I=\int_0^{+\infty}\frac{\sin^2x}{x^2}dx=\underline{\qquad}$。`, a: R`$\frac\pi2$`, sol: R`【解】$I=-\int_0^{+\infty}\sin^2x\,d\left(\frac1x\right)=-\frac{\sin^2x}x\Big|_0^{+\infty}+\int_0^{+\infty}\frac{2\sin x\cos x}xdx=\int_0^{+\infty}\frac{\sin2x}xdx\xlongequal{2x=t}\int_0^{+\infty}\frac{\sin t}tdt=\frac\pi2$。` },
      { n: "(15)", q: R`$\int_0^{+\infty}\frac{x\ln x}{(1+x^2)^2}dx=\underline{\qquad}$。`, a: R`$0$`, sol: R`【解】$\int\frac{x\ln x}{(1+x^2)^2}dx=-\frac{\ln x}{2(1+x^2)}+\frac14\ln\frac{x^2}{1+x^2}+C$，故
$$\int_0^{+\infty}\frac{x\ln x}{(1+x^2)^2}dx=\lim_{\varepsilon\to0^+}\left[-\frac{\varepsilon^2\ln\varepsilon}{2(1+\varepsilon^2)}+\frac14\ln(1+\varepsilon^2)\right]=0.$$` },
      { n: "(16)", q: R`$\int_1^{+\infty}\frac1{\sqrt x}\ln\frac{x+1}xdx=\underline{\qquad}$。`, a: R`$\pi-2\ln2$`, sol: R`【解】$I=\lim\limits_{b\to+\infty}\left[\int_1^b\frac{\ln(x+1)}{\sqrt x}dx-\int_1^b\frac{\ln x}{\sqrt x}dx\right]$，计算得 $I=\lim\limits_{b\to+\infty}\left(2\sqrt b\ln\frac{b+1}b+4\arctan\sqrt b-2\ln2-\pi\right)=\pi-2\ln2$。` },
      { n: "(17)", q: R`已知 $\int_0^{+\infty}e^{-t^2}dt=\frac{\sqrt\pi}2$，则曲线 $y=(5x+9)\int_0^{-x}e^{-t^2}dt+(7x-3)\int_0^xe^{-t^2}dt$ 的斜渐近线方程为 $\underline{\qquad}$。`, a: R`$y=\pm\sqrt\pi(x-6)$`, sol: R`【解】由 $\int_0^{+\infty}e^{-t^2}dt=\frac{\sqrt\pi}2$，当 $x\to+\infty$ 时 $k_1=\lim\limits_{x\to+\infty}\frac yx=\sqrt\pi$，$b_1=-6\sqrt\pi$，故 $y=\sqrt\pi(x-6)$；同理 $x\to-\infty$ 时 $k_2=-\sqrt\pi,b_2=6\sqrt\pi$，故 $y=-\sqrt\pi(x-6)$。即斜渐近线为 $y=\pm\sqrt\pi(x-6)$。` }
    ]
  };
})();
