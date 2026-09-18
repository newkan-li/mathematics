window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q880_s44"] = {
    id: "q880_s44",
    ch: "880题 · 高数 · 第六章 微分方程及其应用",
    title: "基础题·填空题",
    probTitle: "第六章 基础题 · 填空题（含原书解析）",
    book: "李林《精讲精练 880 题（数学二）》2026",
    problems: [
      { n: "(1)", q: R`微分方程 $(y-x\sin x)dx+x\,dy=0$ 的通解为 $\underline{\qquad}$。`, a: R`$y=\frac1x(\sin x-x\cos x+C)$`, sol: R`【解】化为 $y'+\frac1xy=\sin x$，一阶线性方程，通解 $y=e^{-\int\frac1xdx}\left(\int\sin x\cdot e^{\int\frac1xdx}dx+C\right)=\frac1x(\sin x-x\cos x+C)$。
【注】该方程也是全微分方程，通解为 $x\cos x-\sin x+xy=C$。` },
      { n: "(2)", q: R`微分方程 $(1+y^2)dx+(2x-1)y\,dy=0$ 的通解为 $\underline{\qquad}$。`, a: R`$(2x-1)(1+y^2)=C$`, sol: R`【解】分离变量 $\frac{dx}{2x-1}+\frac{y\,dy}{1+y^2}=0$，积分得 $\frac12\ln|2x-1|+\frac12\ln(1+y^2)=\frac12\ln C$，即 $(2x-1)(1+y^2)=C$。` },
      { n: "(3)", q: R`$y'=\frac yx+\tan\frac yx$ 满足 $y(1)=\frac\pi6$ 的特解为 $\underline{\qquad}$。`, a: R`$\sin\frac yx=\frac12x$`, sol: R`【解】令 $u=\frac yx$，得 $x\frac{du}{dx}=\tan u$，分离变量积分得 $\sin u=Cx$，即 $\sin\frac yx=Cx$。由 $y(1)=\frac\pi6$ 得 $C=\frac12$，故 $\sin\frac yx=\frac12x$。` },
      { n: "(4)", q: R`微分方程 $xy'=\sqrt{x^2+y^2}+y$ 的通解为 $\underline{\qquad}$。`, a: R`$y+\sqrt{x^2+y^2}=Cx^2\ (x>0)$ 和 $-y+\sqrt{x^2+y^2}=C\ (x<0)$（$C>0$）`, sol: R`【解】$x>0$ 时 $y'=\sqrt{1+\left(\frac yx\right)^2}+\frac yx$；$x<0$ 时 $y'=-\sqrt{1+\left(\frac yx\right)^2}+\frac yx$。令 $u=\frac yx$ 分别积分得 $y+\sqrt{x^2+y^2}=Cx^2\ (x>0)$ 与 $-y+\sqrt{x^2+y^2}=C\ (x<0)$，$C>0$。` },
      { n: "(5)", q: R`方程 $y''+2y'+y=xe^x$ 满足 $y(0)=0,y'(0)=0$ 的特解为 $\underline{\qquad}$。`, a: R`$y=\frac14\left[(x+1)e^{-x}+(x-1)e^x\right]$`, sol: R`【解】特征根 $r_1=r_2=-1$，齐次通解 $y=(C_1+C_2x)e^{-x}$。$\lambda=1$ 非特征根，令 $y^*=(ax+b)e^x$，代入得 $a=\frac14,b=-\frac14$。由 $y(0)=y'(0)=0$ 得 $C_1=C_2=\frac14$，故 $y=\frac14[(x+1)e^{-x}+(x-1)e^x]$。` },
      { n: "(6)", q: R`方程 $y''-3y'+2y=10e^{-x}\sin x$ 满足当 $x\to+\infty$ 时 $y(x)\to0$ 的特解为 $\underline{\qquad}$。`, a: R`$y=e^{-x}(\sin x+\cos x)$`, sol: R`【解】特征根 $r_1=1,r_2=2$。$-1\pm i$ 非特征根，令 $y^*=e^{-x}(A\sin x+B\cos x)$，代入得 $A=B=1$。通解 $y=C_1e^x+C_2e^{2x}+e^{-x}(\sin x+\cos x)$。由 $x\to+\infty$ 时 $y\to0$ 得 $C_1=C_2=0$，故 $y=e^{-x}(\sin x+\cos x)$。` },
      { n: "(7)", q: R`方程 $(1-x^2)y''-xy'=0$ 满足 $y(0)=0,y'(0)=1$ 的特解为 $\underline{\qquad}$。`, a: R`$y=\arcsin x\ (-1<x<1)$`, sol: R`【解】令 $y'=p$，则 $(1-x^2)p'-xp=0$，即 $p'-\frac x{1-x^2}p=0$，得 $p=\frac{C_1}{\sqrt{1-x^2}}$。由 $p(0)=1$ 得 $C_1=1$，$y=\arcsin x+C_2$。由 $y(0)=0$ 得 $C_2=0$，故 $y=\arcsin x$。` },
      { n: "(8)", q: R`设二阶线性非齐次微分方程 $y''+p(x)y'+q(x)y=f(x)$ 有三个特解为 $x,e^x,e^{-x}$，则该方程的通解为 $\underline{\qquad}$。`, a: R`$y=C_1(e^x-x)+C_2(e^{-x}-x)+x$`, sol: R`【解】$y_1=e^x-x,\ y_2=e^{-x}-x$ 是对应齐次方程两个线性无关的解，故通解为 $y=C_1(e^x-x)+C_2(e^{-x}-x)+x$。` },
      { n: "(9)", q: R`设二阶常系数线性微分方程 $y''+ay'+by=ce^x$ 有特解 $y^*=e^{-x}(1+xe^{2x})$，则该方程的通解为 $\underline{\qquad}$。`, a: R`$y=C_1e^{-x}+C_2e^x+xe^x$`, sol: R`【解】$y^*=e^{-x}+xe^x$，故齐次方程有特征根 $r_1=-1,r_2=1$，且 $xe^x$ 为非齐次方程特解。通解为 $y=C_1e^{-x}+C_2e^x+xe^x$。` }
    ]
  };
})();
