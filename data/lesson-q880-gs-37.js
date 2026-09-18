window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q880_s36"] = {
    id: "q880_s36",
    ch: "880题 · 高数 · 第五章 重积分及其应用",
    title: "基础题·选择题",
    probTitle: "第五章 基础题 · 选择题（含原书解析）",
    book: "李林《精讲精练 880 题（数学二）》2026",
    problems: [
      { n: "(1)", q: R`设 $D$ 为由直线 $x+y=\frac12,x+y=1$ 与两坐标轴所围的区域，$I_1=\iint_D[\ln(x+y)]^9dxdy$，$I_2=\iint_D(x+y)^9dxdy$，$I_3=\iint_D[\sin(x+y)]^9dxdy$，则（ ）。
(A) $I_1\leqslant I_2\leqslant I_3$
(B) $I_1\leqslant I_3\leqslant I_2$
(C) $I_3\leqslant I_2\leqslant I_1$
(D) $I_3\leqslant I_1\leqslant I_2$`, a: R`(B)`, sol: R`【解】在 $D$ 上有 $[\ln(x+y)]^9\leqslant[\sin(x+y)]^9\leqslant(x+y)^9$，故 $I_1\leqslant I_3\leqslant I_2$，选项 B 正确。` },
      { n: "(2)", q: R`设 $D$ 为由 $y=x^2-4$ 和 $y=0$ 所围区域，$I=\iint_D(kx+y)dxdy$，则（ ）。
(A) $I=0$
(B) $I>0$
(C) $I<0$
(D) $I$ 的正负与 $k$ 有关`, a: R`(C)`, sol: R`【解】$D$ 关于 $y$ 轴对称，$kx$ 关于 $x$ 为奇函数，故 $\iint_Dkx\,dxdy=0$；又在 $D$ 内 $y<0$，故 $I<0$，选项 C 正确。` },
      { n: "(3)", q: R`设 $D$ 是 $xOy$ 平面上以 $A(1,1),B(-1,1),C(-1,-1)$ 为顶点的三角形区域，$D_1$ 是 $D$ 在第一象限的部分，则 $I=\iint_D(xy+\cos x\sin y)dxdy=$（ ）。
(A) $0$
(B) $2\iint_{D_1}xy\,dxdy$
(C) $2\iint_{D_1}\cos x\sin y\,dxdy$
(D) $4\iint_{D_1}(xy+\cos x\sin y)dxdy$`, a: R`(C)`, sol: R`【解】$I=I_1+I_2$。对 $I_1=\iint_Dxy\,dxdy$，$D$ 关于 $y$ 轴对称、$xy$ 关于 $x$ 为奇函数，故 $I_1=0$。对 $I_2=\iint_D\cos x\sin y\,dxdy$，$D$ 中关于 $x$ 轴对称的部分上 $\cos x\sin y$ 关于 $y$ 为奇函数积分为 0；关于 $y$ 轴对称的部分上 $\cos x\sin y$ 关于 $x$ 为偶函数，积分为 $2\iint_{D_1}\cos x\sin y\,dxdy$。故选项 C 正确。` },
      { n: "(4)", q: R`积分 $I=\int_0^2dx\int_0^{\frac{x^2}2}f(x,y)dy+\int_2^{2\sqrt2}dx\int_0^{\sqrt{8-x^2}}f(x,y)dy=$（ ）。
(A) $\int_0^{\sqrt2}dy\int_{\sqrt y}^{\sqrt{8-y^2}}f(x,y)dx$
(B) $\int_0^{\sqrt2}dy\int_{\sqrt{2y}}^{\sqrt{8-y^2}}f(x,y)dx$
(C) $\int_0^2dy\int_{\sqrt{2y}}^{\sqrt{8-y^2}}f(x,y)dx$
(D) $\int_0^2dy\int_{\sqrt y}^{\sqrt{8-y^2}}f(x,y)dx$`, a: R`(C)`, sol: R`【解】积分区域 $D_1=\{0\leqslant x\leqslant2,0\leqslant y\leqslant\frac{x^2}2\}$，$D_2=\{2\leqslant x\leqslant2\sqrt2,0\leqslant y\leqslant\sqrt{8-x^2}\}$，交换次序得 $I=\int_0^2dy\int_{\sqrt{2y}}^{\sqrt{8-y^2}}f(x,y)dx$，选项 C 正确。` },
      { n: "(5)", q: R`设 $D:x^2+y^2\leqslant x$，则 $\iint_Df(x,y)dxdy=$（ ）。
(A) $\int_0^\pi d\theta\int_0^{\cos\theta}f(r\cos\theta,r\sin\theta)r\,dr$
(B) $\int_0^\pi d\theta\int_0^{\sin\theta}f(r\cos\theta,r\sin\theta)r\,dr$
(C) $\int_{-\frac\pi2}^{\frac\pi2}d\theta\int_0^{\cos\theta}f(r\cos\theta,r\sin\theta)r\,dr$
(D) $\int_{-\frac\pi2}^{\frac\pi2}d\theta\int_0^{\sin\theta}f(r\cos\theta,r\sin\theta)r\,dr$`, a: R`(C)`, sol: R`【解】$x^2+y^2\leqslant x$ 的极坐标方程为 $0\leqslant r\leqslant\cos\theta$，$-\frac\pi2\leqslant\theta\leqslant\frac\pi2$，选项 C 正确。` },
      { n: "(6)", q: R`将二重积分 $I=\int_{\frac\pi4}^{\frac\pi2}d\theta\int_0^{2\sin\theta}f(r\cos\theta,r\sin\theta)r\,dr$ 化为直角坐标系下的二次积分，则 $I=$（ ）。
(A) $\int_0^1dx\int_{1-\sqrt{1-x^2}}^{x}f(x,y)dy$
(B) $\int_0^1dx\int_x^{\sqrt{1-x^2}}f(x,y)dy$
(C) $\int_0^1dy\int_0^yf(x,y)dx+\int_1^2dy\int_0^{\sqrt{2y-y^2}}f(x,y)dx$
(D) $\int_0^1dy\int_y^{\sqrt{2y-y^2}}f(x,y)dx$`, a: R`(C)`, sol: R`【解】由 $r=2\sin\theta$ 得 $x^2+y^2=2y$。积分区域为圆 $x^2+(y-1)^2=1$ 中 $\theta\in\left[\frac\pi4,\frac\pi2\right]$ 的扇形部分，化为直角坐标得选项 C。` }
    ]
  };
})();
