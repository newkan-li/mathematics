window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q880_s47"] = {
    id: "q880_s47",
    ch: "880题 · 高数 · 第六章 微分方程及其应用",
    title: "综合题·填空题",
    probTitle: "第六章 综合题 · 填空题（含原书解析）",
    book: "李林《精讲精练 880 题（数学二）》2026",
    problems: [
      { n: "(1)", q: R`微分方程 $y'=\frac y{x+(y+1)^2}$（$y$ 不为常函数）的通解为 $\underline{\qquad}$。`, a: R`$x=y\left(y+2\ln|y|-\frac1y+C\right)$`, sol: R`【解】变形为 $\frac{dx}{dy}-\frac1yx=\frac{(y+1)^2}y$，一阶线性方程，通解 $x=y\left(y+2\ln|y|-\frac1y+C\right)$。` },
      { n: "(2)", q: R`微分方程 $y''-y=\sin x$ 满足 $y(0)=0,y'(0)=\frac32$ 的特解为 $\underline{\qquad}$。`, a: R`$y=e^x-e^{-x}-\frac12\sin x$`, sol: R`【解】特征根 $\pm1$。$0\pm i$ 非特征根，令 $y^*=a\sin x+b\cos x$ 代入得 $a=-\frac12,b=0$。通解 $y=C_1e^x+C_2e^{-x}-\frac12\sin x$。由初值解得 $C_1=1,C_2=-1$，故 $y=e^x-e^{-x}-\frac12\sin x$。` },
      { n: "(3)", q: R`微分方程 $y'=\frac{y^2-x}{2y(x+1)}$ 的通解为 $\underline{\qquad}$。`, a: R`$y^2=C(x+1)-(x+1)\ln|x+1|-1$`, sol: R`【解】变形为 $2yy'-\frac1{1+x}y^2=-\frac x{1+x}$。令 $u=y^2$，得 $u'-\frac1{1+x}u=-\frac x{1+x}$，一阶线性方程，通解 $y^2=(1+x)\left[-\int\frac x{(1+x)^2}dx+C\right]=C(x+1)-(x+1)\ln|x+1|-1$。` },
      { n: "(4)", q: R`微分方程 $\frac{dy}{dx}=\frac{y-x}{y+x}$ 满足 $y(1)=0$ 的特解为 $\underline{\qquad}$。`, a: R`$\frac12\ln\left[\left(\frac yx\right)^2+1\right]+\arctan\frac yx+\ln x=0$`, sol: R`【解】令 $\frac yx=u$，得 $u+x\frac{du}{dx}=\frac{u-1}{u+1}$，分离变量积分得 $\frac12\ln(u^2+1)+\arctan u=-\ln|x|+C$。由 $y(1)=0$ 得 $C=0$，故 $\frac12\ln\left[\left(\frac yx\right)^2+1\right]+\arctan\frac yx+\ln x=0$。` },
      { n: "(5)", q: R`微分方程 $y'\sec^2y+\frac x{1+x^2}\tan y=x$ 满足 $y(0)=0$ 的特解为 $\underline{\qquad}$。`, a: R`$\tan y=\frac13\left(1+x^2-\frac1{\sqrt{1+x^2}}\right)$`, sol: R`【解】令 $u=\tan y$，原方程为 $u'+\frac x{1+x^2}u=x$，通解 $u=\frac C{\sqrt{1+x^2}}+\frac13(1+x^2)$。由 $y(0)=0$ 得 $C=-\frac13$，故 $\tan y=\frac13\left(1+x^2-\frac1{\sqrt{1+x^2}}\right)$。` },
      { n: "(6)", q: R`微分方程 $y''+y=x+\cos x$ 的通解为 $\underline{\qquad}$。`, a: R`$y=C_1\cos x+C_2\sin x+x+\frac12x\sin x$`, sol: R`【解】特征根 $\pm i$。$y''+y=x$ 令 $y_1^*=Ax$ 得 $A=1$；$y''+y=\cos x$ 令 $y_2^*=x(B\cos x+C\sin x)$ 得 $B=0,C=\frac12$。故通解 $y=C_1\cos x+C_2\sin x+x+\frac12x\sin x$。` },
      { n: "(7)", q: R`微分方程 $y''-y=\sin^2x$ 的通解为 $\underline{\qquad}$。`, a: R`$y=C_1e^x+C_2e^{-x}-\frac12+\frac{\cos2x}{10}$`, sol: R`【解】特征根 $\pm1$。$\sin^2x=\frac12-\frac{\cos2x}2$。$y''-y=\frac12$ 令 $y_1^*=A$ 得 $A=-\frac12$；$y''-y=-\frac{\cos2x}2$ 令 $y_2^*=B\cos2x+C\sin2x$ 得 $B=\frac1{10},C=0$。故通解 $y=C_1e^x+C_2e^{-x}-\frac12+\frac{\cos2x}{10}$。` },
      { n: "(8)", q: R`设 $f(x)$ 有连续导数，对任意 $a$ 满足 $f(x+a)=\int_x^{x+a}\frac{t(t^2+1)}{f(t)}dt+f(x)$，且 $f(1)=\sqrt2$，则 $f(x)=\underline{\qquad}$。`, a: R`$\frac{\sqrt2}2(x^2+1)$`, sol: R`【解】令 $x=0$ 得 $f(a)=\int_0^a\frac{t(t^2+1)}{f(t)}dt+f(0)$，对 $a$ 求导得 $f'(a)=\frac{a(a^2+1)}{f(a)}$，即 $2f(a)f'(a)=2a+2a^3$，积分得 $[f(a)]^2=a^2+\frac12a^4+C$。由 $f(1)=\sqrt2$ 得 $C=\frac12$，故 $f(x)=\frac{\sqrt2}2(x^2+1)$。` },
      { n: "(9)", q: R`设函数 $y(x)$ 满足 $y''+2ay'+b^2y=0\ (a>b>0)$，且 $y(0)=1,y'(0)=1$，则 $\int_0^{+\infty}y(x)dx=\underline{\qquad}$。`, a: R`$\frac{2a+1}{b^2}$`, sol: R`【解】特征根 $r_{1,2}=-a\pm\sqrt{a^2-b^2}$ 均小于 0，故 $x\to+\infty$ 时 $y\to0,y'\to0$。$\int_0^{+\infty}y\,dx=\int_0^{+\infty}\left(-\frac1{b^2}y''-\frac{2a}{b^2}y'\right)dx=-\frac1{b^2}y'\Big|_0^{+\infty}-\frac{2a}{b^2}y\Big|_0^{+\infty}=-\frac1{b^2}(0-1)-\frac{2a}{b^2}(0-1)=\frac{2a+1}{b^2}$。` }
    ]
  };
})();
