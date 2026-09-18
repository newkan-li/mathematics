window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q880_s39"] = {
    id: "q880_s39",
    ch: "880题 · 高数 · 第五章 重积分及其应用",
    title: "综合题·选择题",
    probTitle: "第五章 综合题 · 选择题（含原书解析）",
    book: "李林《精讲精练 880 题（数学二）》2026",
    problems: [
      { n: "(1)", q: R`$I_1=\iint_D\cos\sqrt{x^2+y^2}dxdy,I_2=\iint_D\cos(x^2+y^2)dxdy,I_3=\iint_D\cos(x^2+y^2)^2dxdy$，其中 $D:x^2+y^2\leqslant1$，则（ ）。
(A) $I_1>I_2>I_3$
(B) $I_1<I_2<I_3$
(C) $I_2>I_1>I_3$
(D) $I_3>I_1>I_2$`, a: R`(B)`, sol: R`【解】在 $D$ 上有 $\frac\pi2>1\geqslant\sqrt{x^2+y^2}\geqslant x^2+y^2\geqslant(x^2+y^2)^2\geqslant0$，而 $\cos x$ 在 $\left[0,\frac\pi2\right)$ 上单调减少，故 $0\leqslant\cos\sqrt{x^2+y^2}\leqslant\cos(x^2+y^2)\leqslant\cos(x^2+y^2)^2$，即 $I_1<I_2<I_3$，选项 B 正确。` },
      { n: "(2)", q: R`设 $D=\{(x,y)\mid|x|+|y|\leqslant1\}$，$I_1=\iint_D(x^2+y^2\tan x)dxdy$，$I_2=\iint_D(x^2y+\tan y^2)dxdy$，$I_3=\iint_D(xy^2+\sin y^2)dxdy$，则（ ）。
(A) $I_1<I_2<I_3$
(B) $I_1<I_3<I_2$
(C) $I_3<I_1<I_2$
(D) $I_3<I_2<I_1$`, a: R`(C)`, sol: R`【解】记第一象限部分为 $D_1$。由奇偶性及 $D_1$ 关于 $y=x$ 对称，$I_1=4\iint_{D_1}x^2dxdy$，$I_2=4\iint_{D_1}\tan x^2dxdy$，$I_3=4\iint_{D_1}\sin x^2dxdy$。当 $x\in(0,1)$ 时 $\sin x^2<x^2<\tan x^2$，故 $I_3<I_1<I_2$，选项 C 正确。` },
      { n: "(3)", q: R`$\lim\limits_{n\to\infty}\sum\limits_{i=1}^n\sum\limits_{j=1}^n\frac1{\left(1+\frac in\right)(n^2+j^2)}=$（ ）。
(A) $\frac\pi4\ln2$
(B) $\frac\pi8\ln2$
(C) $\frac\pi2\ln2$
(D) $\pi\ln2$`, a: R`(A)`, sol: R`【解】原极限 $=\lim\limits_{n\to\infty}\frac1{n^2}\sum\limits_{i=1}^n\sum\limits_{j=1}^n\frac1{\left(1+\frac in\right)\left[1+\left(\frac jn\right)^2\right]}=\int_0^1\frac{dx}{1+x}\int_0^1\frac{dy}{1+y^2}=\frac\pi4\int_0^1\frac{dx}{1+x}=\frac\pi4\ln2$，选项 A 正确。` },
      { n: "(4)", q: R`积分 $I=\int_0^{\frac\pi2}d\theta\int_0^{\cos\theta}f(r\cos\theta,r\sin\theta)r\,dr=$（ ）。
(A) $\int_0^1dy\int_0^{\sqrt{y-y^2}}f(x,y)dx$
(B) $\int_0^1dy\int_0^{\sqrt{1-y^2}}f(x,y)dx$
(C) $\int_0^1dy\int_0^1f(x,y)dx$
(D) $\int_0^1dx\int_0^{\sqrt{x-x^2}}f(x,y)dy$`, a: R`(D)`, sol: R`【解】由 $0\leqslant\theta\leqslant\frac\pi2$ 知 $0\leqslant x\leqslant1$；$r=\cos\theta\Rightarrow x^2+y^2=x$，即 $y=\sqrt{x-x^2}$，故 $I=\int_0^1dx\int_0^{\sqrt{x-x^2}}f(x,y)dy$，选项 D 正确。` },
      { n: "(5)", q: R`设 $D$ 是以 $(1,1),(-1,1)$ 和 $(-1,-1)$ 为顶点的三角形区域，$D_1$ 是 $D$ 在第一象限的部分，且 $f(x,y)=xy+\iint_Df(x,y)dxdy$，其中 $f(x,y)$ 在 $D$ 上连续，则（ ）。
(A) $\iint_Df(x,y)dxdy=\iint_{D_1}f(x,y)dxdy$
(B) $\iint_Df(x,y)dxdy=2\iint_{D_1}f(x,y)dxdy$
(C) $\iint_Df(x,y)dxdy=\iint_Df(y,x)dxdy$
(D) $\iint_Df(x,y)dxdy=2\iint_{D_1}f(y,x)dxdy$`, a: R`(C)`, sol: R`【解】记 $A=\iint_Df(x,y)dxdy$，则 $f(x,y)=xy+A$，两边积分得 $A=\iint_Dxy\,dxdy+2A$。由对称性 $\iint_Dxy\,dxdy=0$，故 $A=0$，$f(x,y)=xy=yx$，选项 C 正确。` }
    ]
  };
})();
