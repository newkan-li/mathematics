window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q880_s43"] = {
    id: "q880_s43",
    ch: "880题 · 高数 · 第六章 微分方程及其应用",
    title: "基础题·选择题",
    probTitle: "第六章 基础题 · 选择题（含原书解析）",
    book: "李林《精讲精练 880 题（数学二）》2026",
    problems: [
      { n: "(1)", q: R`下列选项中（$C$ 为任意常数），是微分方程 $\frac{dy}{dx}+\frac xy=0$ 的通解的是（ ）。
(A) $x^2+y^2=C^2$
(B) $x^2-y^2=C^2$
(C) $x^2+y^2=C$
(D) $x^2-y^2=C$`, a: R`(A)`, sol: R`【解】方程可分离变量：$y\,dy+x\,dx=0$，积分得 $x^2+y^2=C_1\ (C_1\geqslant0)$，即 $x^2+y^2=C^2$，选项 A 正确。` },
      { n: "(2)", q: R`设 $y'+P(x)y=0$ 的一个特解为 $y=\cos2x$，则该方程满足 $y(0)=2$ 的特解为（ ）。
(A) $2\cos x$
(B) $2\cos2x$
(C) $\cos2x$
(D) $\cos2x+1$`, a: R`(B)`, sol: R`【解】将 $y=\cos2x$ 代入得 $P(x)=2\tan2x$，故 $y=Ce^{-\int2\tan2x\,dx}=C\cos2x$。由 $y(0)=2$ 得 $C=2$，即 $y=2\cos2x$，选项 B 正确。` },
      { n: "(3)", q: R`微分方程 $y''+2y'-3y=e^{-x}+x$ 的一个特解形式为（ ）。
(A) $ae^{-x}+bx+c$
(B) $axe^{-x}+x(bx+c)$
(C) $axe^{-x}+bx+c$
(D) $ae^x+x(bx+c)$`, a: R`(A)`, sol: R`【解】特征根 $r_1=1,r_2=-3$。$\lambda=-1$ 与 $\lambda=0$ 均非特征根，故特解形式为 $ae^{-x}+bx+c$，选项 A 正确。` },
      { n: "(4)", q: R`设 $y_1(x),y_2(x)$ 是 $y'+P(x)y=0$ 的两个不同特解，其中 $P(x)$ 在 $(-\infty,+\infty)$ 内连续，且 $P(x)$ 不恒为 0，则下列结论中错误的是（ ）。
(A) $y_1(x)-y_2(x)=$ 常数
(B) $C[y_1(x)-y_2(x)]$ 是方程的通解
(C) $y_1(x)-y_2(x)$ 在任一点不为 0
(D) $\frac{y_2(x)}{y_1(x)}=$ 常数 $(y_1(x)\neq0)$`, a: R`(A)`, sol: R`【解】$y_1-y_2$ 是方程的解。$P(x)$ 不恒为 0 时非零常数不可能是解，故 A 错误。通解为 $y=Ce^{-\int P(x)dx}$，任两解相差常数因子（D 正确）；两不同解不能有相同初始条件，故 $y_1-y_2$ 恒不为 0（C 正确）。` },
      { n: "(5)", q: R`设 $y_1(x),y_2(x),y_3(x)$ 是微分方程 $y''+p(x)y'+q(x)y=f(x)$ 的三个线性无关的解，$f(x)\neq0$，则该方程的通解为（ ）。
(A) $C_1y_1(x)+C_2y_2(x)+y_3(x)$
(B) $C_1y_1(x)+(1-2C_1)y_2(x)+C_1y_3(x)$
(C) $(C_1-C_2)y_1(x)+C_2y_2(x)+y_3(x)$
(D) $C_1y_1(x)+C_2y_2(x)+C_3y_3(x)\ (C_1+C_2+C_3=1)$`, a: R`(D)`, sol: R`【解】通解为 $C_1(y_1-y_3)+C_2(y_2-y_3)+y_3=C_1y_1+C_2y_2+(1-C_1-C_2)y_3$。令 $C_3=1-C_1-C_2$，则 $C_1+C_2+C_3=1$，选项 D 正确。` },
      { n: "(6)", q: R`设 $f(x)$ 在 $[0,+\infty)$ 上可导，$\lim\limits_{x\to+\infty}f(x)=b\ (b\neq0)$，$y(x)$ 为方程 $y'+ay=f(x)\ (a>0)$ 的任一解，则 $y=y(x)$ 有水平渐近线（ ）。
(A) $y=ab$
(B) $y=-ab$
(C) $y=\frac ba$
(D) $y=\frac ab$`, a: R`(C)`, sol: R`【解】通解 $y=e^{-ax}\left[\int_0^xf(t)e^{at}dt+C\right]$，$\lim\limits_{x\to+\infty}y(x)=\lim\limits_{x\to+\infty}\frac{\int_0^xf(t)e^{at}dt}{e^{ax}}=\lim\limits_{x\to+\infty}\frac{f(x)e^{ax}}{ae^{ax}}=\frac ba$，故水平渐近线为 $y=\frac ba$，选项 C 正确。` }
    ]
  };
})();
