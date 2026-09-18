window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q880_s46"] = {
    id: "q880_s46",
    ch: "880题 · 高数 · 第六章 微分方程及其应用",
    title: "综合题·选择题",
    probTitle: "第六章 综合题 · 选择题（含原书解析）",
    book: "李林《精讲精练 880 题（数学二）》2026",
    problems: [
      { n: "(1)", q: R`下列方程中，以 $y=C_1e^x+C_2\cos x+C_3\sin x$（$C_1,C_2,C_3$ 为任意常数）为通解的是（ ）。
(A) $y'''-y''+y'-y=0$
(B) $y'''+y''+y'-y=0$
(C) $y'''+y''-y'-y=0$
(D) $y'''-y''-y'-y=0$`, a: R`(A)`, sol: R`【解】特征根 $r_1=1,r_2=i,r_3=-i$，特征方程 $(r-1)(r^2+1)=0$，即 $r^3-r^2+r-1=0$，对应方程 $y'''-y''+y'-y=0$，选项 A 正确。` },
      { n: "(2)", q: R`若二阶常系数线性齐次微分方程 $y''+py'+qy=0$ 的通解为 $y=C_1e^x+C_2xe^x$，则非齐次微分方程 $y''+py'+qy=x$ 满足 $y(0)=2,y'(0)=0$ 的特解为 $y=$（ ）。
(A) $xe^x-x-2$
(B) $xe^x-x+2$
(C) $-xe^x+x+2$
(D) $-xe^x-x+2$`, a: R`(C)`, sol: R`【解】特征根 $r_1=r_2=1$，故 $p=-2,q=1$，方程 $y''-2y'+y=x$。令 $y^*=ax+b$ 得 $a=1,b=2$，通解 $y=C_1e^x+C_2xe^x+x+2$。由 $y(0)=2,y'(0)=0$ 得 $C_1=0,C_2=-1$，故 $y=-xe^x+x+2$，选项 C 正确。` },
      { n: "(3)", q: R`设 $C$ 为任意常数，则以 $y=e^{Cx+x^2}$ 为通解的一阶微分方程为（ ）。
(A) $xy'-y\ln y=x^2y$
(B) $xy'+y\ln y=xy^2$
(C) $xy'-y\ln y^2=xy$
(D) $xy'+y\ln y=xy$`, a: R`(A)`, sol: R`【解】由 $y=e^{Cx+x^2}$ 得 $\ln y=x^2+Cx$，即 $\frac{\ln y}x-x=C$，两边对 $x$ 求导得 $\frac{\frac xy\cdot y'-\ln y}{x^2}-1=0$，化简得 $xy'-y\ln y=x^2y$，选项 A 正确。` },
      { n: "(4)", q: R`设 $y_1,y_2$ 是一阶线性非齐次微分方程 $y'+P(x)y=Q(x)$ 的两个解，若常数 $\lambda,\mu$，使得 $\lambda y_1+\mu y_2$ 是该方程的解，$\lambda y_1-\mu y_2$ 是对应的齐次微分方程的解，则（ ）。
(A) $\lambda=-\frac12,\mu=-\frac12$
(B) $\lambda=\frac12,\mu=\frac12$
(C) $\lambda=\frac13,\mu=\frac23$
(D) $\lambda=\frac23,\mu=\frac23$`, a: R`(B)`, sol: R`【解】由 $(\lambda+\mu)Q(x)=Q(x)$ 得 $\lambda+\mu=1$；由 $(\lambda-\mu)Q(x)=0$ 得 $\lambda=\mu$。解得 $\lambda=\mu=\frac12$，选项 B 正确。
【注】$k_1y_1+k_2y_2$ 是非齐次方程解 $\Leftrightarrow k_1+k_2=1$；是对应齐次方程解 $\Leftrightarrow k_1+k_2=0$。` }
    ]
  };
})();
