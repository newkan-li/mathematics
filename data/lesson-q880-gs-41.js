window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q880_s40"] = {
    id: "q880_s40",
    ch: "880题 · 高数 · 第五章 重积分及其应用",
    title: "综合题·填空题",
    probTitle: "第五章 综合题 · 填空题（含原书解析）",
    book: "李林《精讲精练 880 题（数学二）》2026",
    problems: [
      { n: "(1)", q: R`设 $D:0\leqslant x\leqslant y\leqslant2\pi$，则 $I=\iint_D|\sin(x-y)|dxdy=\underline{\qquad}$。`, a: R`$4\pi$`, sol: R`【解】用 $y=x+\pi$ 将 $D$ 分为 $D_1(- \pi\leqslant x-y\leqslant0)$ 与 $D_2(-2\pi\leqslant x-y\leqslant-\pi)$，则 $I=\iint_{D_1}[-\sin(x-y)]dxdy+\iint_{D_2}\sin(x-y)dxdy=4\pi$。` },
      { n: "(2)", q: R`设 $f(x)=\begin{cases}x,&0\leqslant x\leqslant1,\\0,&\text{其他},\end{cases}$ $D:-\infty<x<+\infty,-\infty<y<+\infty$，则 $I=\iint_Df(y)f(x+y)dxdy=\underline{\qquad}$。`, a: R`$\frac14$`, sol: R`【解】$f(y)=y\ (0\leqslant y\leqslant1)$，$f(x+y)=x+y\ (0\leqslant x+y\leqslant1)$，积分区域 $D_1=\{-y\leqslant x\leqslant1-y,0\leqslant y\leqslant1\}$。$I=\int_0^1dy\int_{-y}^{1-y}y(x+y)dx=\int_0^1\frac12y\,dy=\frac14$。` },
      { n: "(3)", q: R`积分 $I=\int_0^1dy\int_0^{y^2}y\sin(1-x)^2dx=\underline{\qquad}$。`, a: R`$\frac14(1-\cos1)$`, sol: R`【解】交换积分次序：$I=\int_0^1dx\int_{\sqrt x}^1y\sin(1-x)^2dy=\frac12\int_0^1(1-x)\sin(1-x)^2dx=-\frac14\int_0^1\sin(1-x)^2d[(1-x)^2]=\frac14(1-\cos1)$。` },
      { n: "(4)", q: R`积分 $I=\int_0^{2\pi}d\theta\int_{\frac\theta2}^{\pi}\theta^2e^{r^2}dr=\underline{\qquad}$。`, a: R`$\frac43e^{\pi^2}(\pi^2-1)+\frac43$`, sol: R`【解】交换极坐标次序：$I=\int_0^\pi dr\int_0^{2r}\theta^2e^{r^2}d\theta=\int_0^\pi e^{r^2}\cdot\frac83r^3dr\xlongequal{r^2=t}\frac43\int_0^{\pi^2}te^t dt=\frac43e^t(t-1)\Big|_0^{\pi^2}=\frac43e^{\pi^2}(\pi^2-1)+\frac43$。` },
      { n: "(5)", q: R`交换积分顺序 $I=\int_0^{\frac\pi2}d\theta\int_0^{a\sqrt{\sin2\theta}}f(r\cos\theta,r\sin\theta)r\,dr\ (a>0)$ 为 $\underline{\qquad}$。`, a: R`$\int_0^a dr\int_{\frac12\arcsin\frac{r^2}{a^2}}^{\frac\pi2-\frac12\arcsin\frac{r^2}{a^2}}f(r\cos\theta,r\sin\theta)r\,d\theta$`, sol: R`【解】视 $\theta$ 为横轴、$r$ 为纵轴。$r=a\sqrt{\sin2\theta}$ 的反函数：当 $0\leqslant\theta\leqslant\frac\pi4$ 时为 $\theta=\frac12\arcsin\frac{r^2}{a^2}$；当 $\frac\pi4<\theta\leqslant\frac\pi2$ 时为 $\theta=\frac\pi2-\frac12\arcsin\frac{r^2}{a^2}$。故 $I=\int_0^a dr\int_{\frac12\arcsin\frac{r^2}{a^2}}^{\frac\pi2-\frac12\arcsin\frac{r^2}{a^2}}f(r\cos\theta,r\sin\theta)r\,d\theta$。` },
      { n: "(6)", q: R`设 $D:\frac{x^2}{a^2}+\frac{y^2}{b^2}\leqslant1$，则 $I=\iint_Dy^2dxdy=\underline{\qquad}$。`, a: R`$\frac{\pi ab^3}4$`, sol: R`【解】用广义极坐标 $x=ar\cos\theta,y=br\sin\theta$，$|J|=abr$，则 $I=\int_0^{2\pi}d\theta\int_0^1b^2r^2\sin^2\theta\cdot abr\,dr=\frac{\pi ab^3}4$。` },
      { n: "(7)", q: R`曲线 $r^2=2a^2\cos2\theta\ (a>0)$ 所围图形的面积为 $\underline{\qquad}$。`, a: R`$2a^2$`, sol: R`【解】由 $\cos2\theta\geqslant0$ 得 $-\frac\pi4\leqslant\theta\leqslant\frac\pi4$ 或 $\frac{3\pi}4\leqslant\theta\leqslant\frac{5\pi}4$。由对称性 $A=4\int_0^{\pi/4}d\theta\int_0^{a\sqrt{2\cos2\theta}}r\,dr=4a^2\int_0^{\pi/4}\cos2\theta\,d\theta=2a^2$。` },
      { n: "(8)", q: R`球体 $x^2+y^2+z^2\leqslant R^2\ (R>0)$ 被圆柱面 $x^2+y^2=Rx$ 所截得含在圆柱面内的立体的体积为 $\underline{\qquad}$。`, a: R`$\frac43\left(\frac\pi2-\frac23\right)R^3$`, sol: R`【解】$V=4\iint_D\sqrt{R^2-x^2-y^2}dxdy=4\int_0^{\pi/2}d\theta\int_0^{R\cos\theta}\sqrt{R^2-r^2}r\,dr=\frac43R^3\int_0^{\pi/2}(1-\sin^3\theta)d\theta=\frac43\left(\frac\pi2-\frac23\right)R^3$。` },
      { n: "(9)", q: R`曲线 $ay=x^2$ 与 $x+y=2a\ (a>0)$ 所围平面区域 $D$ 的形心坐标为 $\underline{\qquad}$。`, a: R`$\left(-\frac a2,\frac85a\right)$`, sol: R`【解】$\bar x=\frac{\int_{-2a}^ax\,dx\int_{x^2/a}^{2a-x}dy}{\int_{-2a}^adx\int_{x^2/a}^{2a-x}dy}=-\frac a2$，$\bar y=\frac{\int_{-2a}^adx\int_{x^2/a}^{2a-x}y\,dy}{\int_{-2a}^adx\int_{x^2/a}^{2a-x}dy}=\frac85a$，故形心为 $\left(-\frac a2,\frac85a\right)$。` },
      { n: "(10)", q: R`$r\leqslant1$ 与 $r\leqslant1+\cos\theta$ 所围平面区域的形心坐标为 $\underline{\qquad}$。`, a: R`$\left(\frac{15\pi-32}{30\pi-48},0\right)$`, sol: R`【解】由对称性 $\bar y=0$。$\bar x=\frac{2\int_0^{\pi/2}d\theta\int_0^1r\cos\theta\cdot r\,dr+2\int_{\pi/2}^{\pi}d\theta\int_0^{1+\cos\theta}r\cos\theta\cdot r\,dr}{\frac12\pi+2\int_{\pi/2}^{\pi}d\theta\int_0^{1+\cos\theta}r\,dr}=\frac{\frac23\left(\frac{15\pi}{16}-2\right)}{\frac54\pi-2}=\frac{15\pi-32}{30\pi-48}$，故形心为 $\left(\frac{15\pi-32}{30\pi-48},0\right)$。` }
    ]
  };
})();
