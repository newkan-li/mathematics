window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["gs04_s0"].problems = [
    { n: 1, q: R`已知函数 $y=y(x)$ 在任意点处的增量 $\Delta y=\frac{y\Delta x}{1+x^2}+\alpha$，且当 $\Delta x\to0$ 时，$\alpha$ 是 $\Delta x$ 的高阶无穷小，$y(0)=\pi$，则 $y(1)$ 等于
(A) $2\pi$。 (B) $\pi$。 (C) $e^{\frac{\pi}{4}}$。 (D) $\pi e^{\frac{\pi}{4}}$。`, a: R`(D)`, sol: R`【思路】由增量式读出微分方程，再分离变量求特解。
【详解】$\Delta y=\frac{y}{1+x^2}\Delta x+o(\Delta x)$，故 $y'=\frac{y}{1+x^2}$，即 $\frac{dy}{y}=\frac{dx}{1+x^2}$。
积分：$\ln y=\arctan x+C$，$y=Ce^{\arctan x}$。由 $y(0)=\pi$ 得 $C=\pi$，故 $y(1)=\pi e^{\pi/4}$。选 (D)。
【易错点】$\int\frac{dx}{1+x^2}=\arctan x$；由增量式 $dy=\frac{y}{1+x^2}dx$ 直接写方程。` },
    { n: 2, q: R`方程 $y''+2y'+y=3xe^{-x}$ 的特解形式为
(A) $Axe^{-x}$。 (B) $(Ax+B)e^{-x}$。 (C) $(Ax+B)xe^{-x}$。 (D) $(Ax+B)x^2e^{-x}$。`, a: R`(D)`, sol: R`【思路】特征根与右端指数比较，确定特解要乘 $x^k$ 的次数。
【详解】特征方程 $r^2+2r+1=(r+1)^2=0$，$r=-1$ 是**二重**根。右端 $3xe^{-x}$ 对应 $\lambda=-1$（重数 2），故 $k=2$，特解设为 $x^2(Ax+B)e^{-x}$。选 (D)。
【易错点】$P_m(x)e^{\lambda x}$ 型：$k$ 取 $\lambda$ 作为特征根的重数；本题 $\lambda=-1$ 是二重根，$k=2$。` },
    { n: 3, q: R`具有特解 $y_1=e^{-x},y_2=2xe^{-x},y_3=3e^x$ 的三阶常系数齐次线性微分方程是
(A) $y'''-y''-y'+y=0$。 (B) $y'''+y''-y'-y=0$。 (C) $y'''-6y''+11y'-6y=0$。 (D) $y'''-2y''-y'+2y=0$。`, a: R`(B)`, sol: R`【思路】由特解反推特征根，再写特征方程。
【详解】$e^{-x}$ 与 $xe^{-x}$ 说明 $r=-1$ 是二重根；$e^x$ 说明 $r=1$ 是单根。
特征方程 $(r+1)^2(r-1)=r^3+r^2-r-1=0$，对应方程 $y'''+y''-y'-y=0$。选 (B)。
【易错点】$xe^{-x}$ 表示 $-1$ 是重根；展开 $(r+1)^2(r-1)=r^3+r^2-r-1$。` },
    { n: 4, q: R`微分方程 $y''-4y'+8y=e^{2x}(1+\cos2x)$ 的特解可设为 $y^*=$
(A) $Ae^{2x}+e^{2x}(B\cos2x+C\sin2x)$。
(B) $Axe^{2x}+e^{2x}(B\cos2x+C\sin2x)$。
(C) $Ae^{2x}+xe^{2x}(B\cos2x+C\sin2x)$。
(D) $Axe^{2x}+xe^{2x}(B\cos2x+C\sin2x)$。`, a: R`(C)`, sol: R`【思路】右端拆成 $e^{2x}$ 与 $e^{2x}\cos2x$ 两部分，分别与特征根比较。
【详解】特征方程 $r^2-4r+8=0$，$r=2\pm2i$。
对 $e^{2x}$：$\lambda=2$ 不是特征根，取 $Ae^{2x}$。
对 $e^{2x}\cos2x$：$\alpha\pm\beta i=2\pm2i$ 是**单**特征根，取 $xe^{2x}(B\cos2x+C\sin2x)$。
两部分相加即 (C)。
【易错点】两部分的重数不同，不能合并；$e^{2x}\cos2x$ 对应单根要乘 $x$。` },
    { n: 5, q: R`函数 $y=C_1e^x+C_2e^{-2x}+xe^x$ 满足的一个微分方程是
(A) $y''-y'-2y=3xe^x$。 (B) $y''-y'-2y=3e^x$。 (C) $y''+y'-2y=3xe^x$。 (D) $y''+y'-2y=3e^x$。`, a: R`(D)`, sol: R`【思路】由齐次部分定方程左端，把特解代入定右端。
【详解】$C_1e^x+C_2e^{-2x}$ 对应特征根 $1,-2$，特征方程 $(r-1)(r+2)=r^2+r-2$，故左端为 $y''+y'-2y$。
把 $y_p=xe^x$ 代入：$y_p'=e^x(x+1)$，$y_p''=e^x(x+2)$，$y_p''+y_p'-2y_p=e^x[(x+2)+(x+1)-2x]=3e^x$。
故方程为 $y''+y'-2y=3e^x$。选 (D)。
【易错点】先由齐次通解确定特征方程（左端），再代特解求右端。` },
    { n: 6, q: R`在下列微分方程中，以 $y=C_1e^x+C_2\cos2x+C_3\sin2x$（$C_1,C_2,C_3$ 为任意常数）为通解的是
(A) $y'''+y''-4y'-4y=0$。 (B) $y'''+y''+4y'+4y=0$。 (C) $y'''-y''-4y'+4y=0$。 (D) $y'''-y''+4y'-4y=0$。`, a: R`(D)`, sol: R`【思路】由通解反推特征根，写出特征方程。
【详解】$e^x$ 给 $r=1$；$\cos2x,\sin2x$ 给 $r=\pm2i$。特征方程 $(r-1)(r^2+4)=r^3-r^2+4r-4=0$。
对应方程 $y'''-y''+4y'-4y=0$。选 (D)。
【易错点】$(r-1)(r^2+4)$ 展开时 $r^2\cdot r=r^3$、$r^2\cdot(-1)=-r^2$、$4r-4$。` },
    { n: 7, q: R`微分方程 $y''-\lambda^2y=e^{\lambda x}+e^{-\lambda x}(\lambda>0)$ 的特解形式为
(A) $a(e^{\lambda x}+e^{-\lambda x})$。 (B) $ax(e^{\lambda x}+e^{-\lambda x})$。 (C) $x(ae^{\lambda x}+be^{-\lambda x})$。 (D) $x^2(ae^{\lambda x}+be^{-\lambda x})$。`, a: R`(C)`, sol: R`【思路】特征根为 $\pm\lambda$，右端两个指数分别对应单根。
【详解】特征方程 $r^2-\lambda^2=0$，$r=\pm\lambda$。$\lambda$ 与 $-\lambda$ 都是**单**特征根，故分别取 $xae^{\lambda x}$ 与 $xbe^{-\lambda x}$，即 $x(ae^{\lambda x}+be^{-\lambda x})$。选 (C)。
【易错点】两个指数对应不同的单根，各自乘一个 $x$，不能只乘一次或都不乘。` },
    { n: 8, q: R`方程 $x\ln x\,dy+(y-\ln x)dx=0$ 满足初始条件 $y|_{x=e}=1$ 的特解为______。`, a: R`$y=\frac12\left(\ln x+\frac{1}{\ln x}\right)$`, sol: R`【思路】整理成一阶线性方程，用积分因子。
【详解】原方程化为 $x\ln x\frac{dy}{dx}+y=\ln x$，即 $\frac{dy}{dx}+\frac{1}{x\ln x}y=\frac1x$。
积分因子 $\mu=e^{\int\frac{dx}{x\ln x}}=\ln x$（$x>1$）。故 $(\ln x\cdot y)'=\frac{\ln x}{x}$，
$$\ln x\cdot y=\frac{(\ln x)^2}{2}+C.$$
由 $y(e)=1$：$\ln e\cdot1=1=\frac12+C$，$C=\frac12$。故 $y\ln x=\frac{(\ln x)^2+1}{2}$，$y=\frac12\left(\ln x+\frac{1}{\ln x}\right)$。
【易错点】$\int\frac{dx}{x\ln x}=\ln\ln x$；把 $y(e)=1$ 代入时 $\ln e=1$。` },
    { n: 9, q: R`微分方程 $(y+x^3)dx-2x\,dy=0$ 满足 $y|_{x=1}=\frac65$ 的特解为______。`, a: R`$y=\frac15x^3+\sqrt{x}$`, sol: R`【思路】化为一阶线性方程求解。
【详解】$2x\frac{dy}{dx}-y=x^3$，即 $\frac{dy}{dx}-\frac{1}{2x}y=\frac{x^2}{2}$。
积分因子 $\mu=e^{-\int\frac{dx}{2x}}=x^{-1/2}$，故 $(x^{-1/2}y)'=\frac12x^{3/2}$，
$$x^{-1/2}y=\frac15x^{5/2}+C\Rightarrow y=\frac{x^3}{5}+C\sqrt x.$$
由 $y(1)=\frac65$：$\frac15+C=\frac65$，$C=1$。故 $y=\frac{x^3}{5}+\sqrt x$。
【易错点】$\int\frac{dx}{2x}=\frac12\ln x$，积分因子为 $x^{-1/2}$；积分 $\int\frac12x^{3/2}dx=\frac15x^{5/2}$。` },
    { n: 10, q: R`方程 $(1+e^{-x/y})y\,dx+(y-x)dy=0$ 的通解为______。`, a: R`$ye^{\frac yx}+x=C$`, sol: R`【思路】把 $x$ 视为 $y$ 的函数，令 $u=\frac yx$（齐次型），化为可分离变量方程。
【详解】以 $y$ 为自变量：$(1+e^{-x/y})y\frac{dx}{dy}+(y-x)=0$。令 $u=\frac yx$（即 $x=\frac yu$），代入并整理可得关于 $u,y$ 的可分离变量方程，分离后两边积分，整理即得通解 $ye^{y/x}+x=C$。
【易错点】含 $e^{-x/y}$ 的方程宜取 $u=y/x$ 作齐次代换；积分后把 $u=y/x$ 代回。` },
    { n: 11, q: R`已知方程 $y''+ay'+by=0$ 的通解为 $y=C_1e^x+C_2e^{-x}$，则方程 $y''+ay'+by=e^x$ 满足初始条件 $y(0)=0,y'(0)=\frac32$ 的特解为______。`, a: R`$y=\frac12(e^x-e^{-x}+xe^x)$`, sol: R`【思路】先由齐次通解定 $a,b$，再求非齐次特解并代入初值。
【详解】齐次通解 $C_1e^x+C_2e^{-x}$ 给特征根 $\pm1$，故 $a=0,b=-1$，方程 $y''-y=e^x$。
特解：$\lambda=1$ 是单根，设 $y_p=Axe^x$。$y_p'=Ae^x(x+1)$，$y_p''=Ae^x(x+2)$，$y_p''-y_p=Ae^x[(x+2)-x]=2Ae^x=e^x$，得 $A=\frac12$。
通解 $y=C_1e^x+C_2e^{-x}+\frac12xe^x$。$y(0)=0\Rightarrow C_1+C_2=0$；$y'(0)=\frac32\Rightarrow C_1-C_2+\frac12=\frac32\Rightarrow C_1-C_2=1$。解得 $C_1=\frac12,C_2=-\frac12$。
【易错点】$y''-y=e^x$ 的特解因 $\lambda=1$ 是单根要乘 $x$；两个初值定两个常数。` },
    { n: 12, q: R`方程 $y''+y=x+\cos x$ 的通解为______。`, a: R`$y=C_1\cos x+C_2\sin x+x+\frac12x\sin x$`, sol: R`【思路】右端分 $x$ 与 $\cos x$ 两部分，分别设特解。
【详解】齐次通解 $C_1\cos x+C_2\sin x$。
对 $x$：设 $y_{p1}=ax+b$，代入 $y''+y=x$ 得 $ax+b=x$，$a=1,b=0$，$y_{p1}=x$。
对 $\cos x$：$\pm i$ 是特征根，设 $y_{p2}=x(A\cos x+B\sin x)$。取 $A=0,B=\frac12$ 时 $y_{p2}=\frac12x\sin x$，验证：$y_{p2}''=\cos x-\frac12x\sin x$，$y_{p2}''+y_{p2}=\cos x$。✓
故通解 $y=C_1\cos x+C_2\sin x+x+\frac12x\sin x$。
【易错点】$\cos x$ 对应特征根 $\pm i$（单根），要乘 $x$；$x$ 项直接设一次多项式。` },
    { n: 13, q: R`设函数 $y(x)$ 满足 $y''+(x-1)y'+x^2y=e^x$，且 $y'(0)=1$。若 $\lim\limits_{x\to0}\frac{y(x)-x}{x^2}=a$，则 $a=$______。`, a: R`$a=1$`, sol: R`【思路】由极限存在读出 $y(0),y'(0)$，再用方程在 $x=0$ 处求 $y''(0)$。
【详解】由 $\lim\frac{y-x}{x^2}=a$ 存在，得 $y(0)=0$、$y'(0)=1$（与题设一致），且 $y=x+ax^2+o(x^2)$。
将方程在 $x=0$ 处取值：$y''(0)+(0-1)y'(0)+0=e^0=1$，即 $y''(0)-1=1$，$y''(0)=2$。
由泰勒 $y=x+\frac{y''(0)}{2}x^2+\cdots=x+x^2+\cdots$，故 $a=\frac{y''(0)}{2}=1$。
【易错点】极限存在 ⇒ $y(0)=0$；$a$ 是 $\frac{y''(0)}{2}$，由方程在 0 处求得 $y''(0)=2$。` },
    { n: 14, q: R`二阶常系数非齐次线性微分方程 $y''-4y'+3y=2e^{2x}$ 的通解为______。`, a: R`$y=C_1e^{3x}+C_2e^x-2e^{2x}$`, sol: R`【思路】特征根 + 待定特解。
【详解】$r^2-4r+3=0$，$r=1,3$，齐次通解 $C_1e^{3x}+C_2e^x$。
$\lambda=2$ 不是特征根，设 $y_p=Ae^{2x}$：$4A-8A+3A=-A=2$，$A=-2$，$y_p=-2e^{2x}$。
通解 $y=C_1e^{3x}+C_2e^x-2e^{2x}$。
【易错点】$\lambda=2$ 不是特征根，不乘 $x$；代入得 $-A=2$。` },
    { n: 15, q: R`三阶常系数线性齐次微分方程 $y'''-2y''+y'-2y=0$ 的通解为______。`, a: R`$y=C_1e^{2x}+C_2\cos x+C_3\sin x$`, sol: R`【思路】求特征根。
【详解】$r^3-2r^2+r-2=(r-2)(r^2+1)=0$，$r=2,\pm i$。通解 $y=C_1e^{2x}+C_2\cos x+C_3\sin x$。
【易错点】分组分解 $r^2(r-2)+(r-2)=(r-2)(r^2+1)$；共轭复根 $\pm i$ 对应 $\cos x,\sin x$。` },
    { n: 16, q: R`（仅数三要求）差分方程 $2y_{t+1}+10y_t-5t=0$ 的通解为______。`, a: R`$y_t=C(-5)^t+\frac{5}{12}\left(t-\frac16\right)$`, sol: R`【思路】化为一阶常系数差分方程，先求齐次通解再设特解。
【详解】方程即 $y_{t+1}+5y_t=\frac52t$。齐次 $y_{t+1}=-5y_t$，通解 $C(-5)^t$。
设特解 $y_t=at+b$：$a(t+1)+b+5(at+b)=\frac52t$，即 $6at+(a+6b)=\frac52t$。故 $6a=\frac52$，$a=\frac5{12}$；$a+6b=0$，$b=-\frac{5}{72}$。
特解 $\frac5{12}t-\frac5{72}=\frac5{12}\left(t-\frac16\right)$。通解 $y_t=C(-5)^t+\frac5{12}\left(t-\frac16\right)$。
【易错点】差分方程特解也设一次多项式；比较系数时注意 $a(t+1)$ 展开。` },
    { n: 17, q: R`（仅数三要求）差分方程 $y_{t+1}-2y_t=4(3+t)2^t$ 的通解为______。`, a: R`$y_t=C2^t+(5t+t^2)2^t$`, sol: R`【思路】右端含 $2^t$ 且 2 是齐次特征根，特解要乘 $t$。
【详解】齐次 $y_{t+1}=2y_t$，通解 $C2^t$。
因右端 $4(3+t)2^t$ 的底数 2 等于齐次特征根，设 $y_t=2^t\cdot t(at+b)$，即 $z_t=t(at+b)$ 满足 $z_{t+1}-z_t=2(3+t)$。
$z_{t+1}-z_t=a(2t+1)+b=2at+(a+b)$，与 $2t+6$ 比较得 $a=1,b=5$，故 $z_t=t(t+5)$。
通解 $y_t=C2^t+(5t+t^2)2^t$。
【易错点】底数 2 是特征根，特解要乘 $t$；令 $y_t=2^tz_t$ 后化为 $z$ 的差分方程。` },
    { n: 18, q: R`设函数 $y=y(x)$ 满足微分方程 $y''-3y'+2y=2e^x$，且其图形在点 $(0,1)$ 处的切线与曲线 $y=x^2-x+1$ 在该点的切线重合，求函数 $y=y(x)$。`, a: R`$y=(1-2x)e^x$`, sol: R`【思路】求通解后用「切线重合」得两个初值条件。
【详解】$r^2-3r+2=0$，$r=1,2$，齐次通解 $C_1e^x+C_2e^{2x}$。
特解：$\lambda=1$ 是单根，设 $y_p=Axe^x$：$y_p''-3y_p'+2y_p=Ae^x[(x+2)-3(x+1)+2x]=-Ae^x=2e^x$，$A=-2$。
通解 $y=C_1e^x+C_2e^{2x}-2xe^x$。
切线重合：$y=x^2-x+1$ 在 $(0,1)$ 的切线斜率 $y'(0)=-1$，故 $y(0)=1,y'(0)=-1$。
$y(0)=C_1+C_2=1$；$y'(0)=C_1+2C_2-2=-1\Rightarrow C_1+2C_2=1$。解得 $C_2=0,C_1=1$。
故 $y=e^x-2xe^x=(1-2x)e^x$。
【易错点】「切线重合」给出 $y(0)$ 与 $y'(0)$ 两个条件；$y_p$ 因 $\lambda=1$ 是单根要乘 $x$。` },
    { n: 19, q: R`已知 $y_1=3,y_2=3+x^2,y_3=3+e^x$ 是某二阶线性非齐次方程的三个特解，求该微分方程及通解。`, a: R`$y=C_1x^2+C_2e^x+3;(2x-x^2)y''+(x^2-2)y'+2(1-x)y=6(1-x)$`, sol: R`【思路】非齐次两特解之差是齐次解；由此定齐次方程，再由一个特解定右端。
【详解】$y_2-y_1=x^2$、$y_3-y_1=e^x$ 是对应齐次方程的两个线性无关解，故齐次通解 $C_1x^2+C_2e^x$。
设齐次方程 $y''+p(x)y'+q(x)y=0$。代入 $x^2$：$2+2xp+x^2q=0$；代入 $e^x$：$1+p+q=0$。解得 $p=\frac{x^2-2}{2x-x^2}$，$q=\frac{2-2x}{2x-x^2}$。
去分母得齐次方程 $(2x-x^2)y''+(x^2-2)y'+(2-2x)y=0$。
把特解 $y=3$ 代入左端：$(2-2x)\cdot3=6(1-x)$，故右端为 $6(1-x)$。
所以方程为 $(2x-x^2)y''+(x^2-2)y'+2(1-x)y=6(1-x)$，通解 $y=C_1x^2+C_2e^x+3$。
【易错点】$y_i-y_1$ 是齐次解；由两个齐次解反求 $p,q$ 需解二元一次方程组。` },
    { n: 20, q: R`求微分方程 $y''+(x+e^{2y})y'^3=0$ 的通解。`, a: R`$x=C_1e^y+C_2e^{-y}+\frac13e^{2y}$`, sol: R`【思路】交换自变量与因变量，把 $y$ 当自变量、$x$ 当函数，可化为线性方程。
【详解】令 $x=x(y)$，则 $y'=\frac{1}{x'}$，$y''=-\frac{x''}{(x')^3}$（$'=d/dy$）。代入原方程：
$$-\frac{x''}{(x')^3}+(x+e^{2y})\frac{1}{(x')^3}=0\Rightarrow x''-x=e^{2y}.$$
这是关于 $x(y)$ 的二阶常系数线性方程。齐次 $x''-x=0$ 通解 $C_1e^y+C_2e^{-y}$；设特解 $x=Ae^{2y}$：$4A-A=3A=1$，$A=\frac13$。
故 $x=C_1e^y+C_2e^{-y}+\frac13e^{2y}$。
【易错点】反函数求导 $y'=1/x'$、$y''=-x''/(x')^3$；把 $y$ 当自变量后方程变为线性的。` },
    { n: 21, q: R`设函数 $f(x)$ 具有连续的一阶导数，且满足 $f(x)=\int_0^x(x^2-t^2)f'(t)dt+x^2$，求 $f(x)$ 的表达式。`, a: R`$f(x)=e^{x^2}-1$`, sol: R`【思路】把积分中的 $x$ 移出，再求导化为微分方程。
【详解】$f(x)=x^2\int_0^xf'(t)dt-\int_0^xt^2f'(t)dt+x^2=x^2[f(x)-f(0)]-\int_0^xt^2f'(t)dt+x^2$。
由原式取 $x=0$ 得 $f(0)=0$，故 $f=x^2f(x)-\int_0^xt^2f'(t)dt+x^2$。求导：
$$f'=2xf(x)+x^2f'(x)-x^2f'(x)+2x=2x[f(x)+1].$$
分离变量：$\frac{df}{f+1}=2x\,dx$，$\ln(f+1)=x^2+C$。由 $f(0)=0$ 得 $C=0$，故 $f=e^{x^2}-1$。
【易错点】先由 $x=0$ 得 $f(0)=0$；求导时 $x^2f(x)$ 与 $-\int_0^xt^2f'$ 的导数恰好抵消 $x^2f'$ 项。` },
    { n: 22, q: R`设 $f(x)$ 连续，且满足 $\int_0^xf(t)dt=x+\int_0^xtf(x-t)dt$，求 $f(x)$。`, a: R`$f(x)=e^x$`, sol: R`【思路】换元把 $\int_0^xtf(x-t)dt$ 化为含 $\int_0^xf$ 的式子，再求导。
【详解】令 $u=x-t$：$\int_0^xtf(x-t)dt=\int_0^x(x-u)f(u)du=x\int_0^xf(u)du-\int_0^xuf(u)du$。
代入得 $\int_0^xf=x+x\int_0^xf-\int_0^xuf$。求导：$f=1+\int_0^xf+xf-xf=1+\int_0^xf$。
再求导：$f'=f$，故 $f=Ce^x$。由 $f=1+\int_0^xf$ 取 $x=0$ 得 $f(0)=1$，故 $f=e^x$。
【易错点】换元 $u=x-t$ 后出现 $x\int_0^xf$ 与 $\int_0^xuf$；由原式在 $x=0$ 得 $f(0)=1$。` },
    { n: 23, q: R`设 $f(x)$ 为连续函数，且满足 $f(x)=e^x+e^x\int_0^x[f(t)]^2dt$。试求 $f(x)$。`, a: R`$f(x)=\frac{2}{3e^{-x}-e^x}$`, sol: R`【思路】求导得 Bernoulli 方程，作代换 $u=1/f$ 化为线性。
【详解】$f(0)=1$。求导：$f'=e^x\left[1+\int_0^xf^2\right]+e^xf^2=f+e^xf^2$，即 $f'-f=e^xf^2$。
除以 $f^2$：$\frac{f'}{f^2}-\frac1f=e^x$。令 $u=\frac1f$，则 $u'=-\frac{f'}{f^2}$，方程化为 $-u'-u=e^x$，即 $u'+u=-e^x$。
积分因子 $e^x$：$(e^xu)'=-e^{2x}$，$e^xu=-\frac12e^{2x}+C$，$u=Ce^{-x}-\frac12e^x$。
故 $f=\frac{1}{Ce^{-x}-\frac12e^x}=\frac{2}{2Ce^{-x}-e^x}$。由 $f(0)=1$ 得 $\frac{2}{2C-1}=1$，$C=\frac32$，即 $f=\frac{2}{3e^{-x}-e^x}$。
【易错点】$f=e^x(1+\int f^2)$ 求导时别漏 $e^x$ 的因子；Bernoulli 用 $u=1/f$。` },
    { n: 24, q: R`函数 $f(x)$ 在 $[0,+\infty)$ 上可导，$f(0)=1$，且满足等式 $f'(x)+f(x)-\frac{1}{x+1}\int_0^xf(t)dt=0$。(1) 求导数 $f'(x)$；(2) 证明：当 $x\geq0$ 时，成立不等式 $e^{-x}\leq f(x)\leq1$。`, a: R`(1) $f'(x)=-\frac{e^{-x}}{x+1}$。(2) 提示：考虑 $\int_0^xf'(x)dx=-\int_0^x\frac{e^{-x}}{x+1}dx$。`, sol: R`【思路】(1) 消去积分项得关于 $f'$ 的方程；(2) 对 $f'$ 积分并估计。
【详解】(1) 两边乘 $x+1$：$(x+1)f'+(x+1)f-\int_0^xf=0$。求导：
$$f'+(x+1)f''+(x+1)f'+f-f=(x+1)f''+(x+2)f'=0.$$
令 $p=f'$：$(x+1)p'+(x+2)p=0$，$\frac{p'}{p}=-1-\frac{1}{x+1}$，$\ln|p|=-x-\ln(x+1)+C$，$p=\frac{Ce^{-x}}{x+1}$。
由原式在 $x=0$：$f'(0)+f(0)=0\Rightarrow f'(0)=-1$，故 $C=-1$，$f'(x)=-\frac{e^{-x}}{x+1}$。
(2) $f(x)=f(0)+\int_0^xf'(t)dt=1-\int_0^x\frac{e^{-t}}{t+1}dt$。因 $\frac{e^{-t}}{t+1}>0$，故 $f(x)<1$；
又 $\int_0^x\frac{e^{-t}}{t+1}dt\le\int_0^xe^{-t}dt=1-e^{-x}$，故 $f(x)\ge e^{-x}$。即 $e^{-x}\le f(x)\le1$。
【易错点】(1) 中求导后 $f$ 项恰好抵消；(2) 用 $\frac{1}{t+1}\le1$ 放缩。` },
    { n: 25, q: R`设 $f(x)$ 连续，且 $f(t)=\iint_{x^2+y^2\leq t^2}(x^2+y^2)f(\sqrt{x^2+y^2})dxdy+t^4\ (t\geq0)$，求 $f(x)$。`, a: R`$f(x)=\frac{2}{\pi}\left(e^{\frac{\pi}{2}x^4}-1\right)$`, sol: R`【思路】用极坐标把二重积分化为一元变上限积分，再求导解方程。
【详解】$\iint_{x^2+y^2\le t^2}(x^2+y^2)f(\sqrt{x^2+y^2})dxdy=\int_0^{2\pi}d\theta\int_0^t\rho^2f(\rho)\rho d\rho=2\pi\int_0^t\rho^3f(\rho)d\rho$。
故 $f(t)=2\pi\int_0^tf(\rho)\rho^3d\rho+t^4$，$f(0)=0$。求导：$f'=2\pi t^3f+4t^3$，即 $f'-2\pi t^3f=4t^3$。
积分因子 $e^{-\frac{\pi}{2}t^4}$：$(e^{-\frac{\pi}{2}t^4}f)'=4t^3e^{-\frac{\pi}{2}t^4}$，积分得 $e^{-\frac{\pi}{2}t^4}f=-\frac2\pi e^{-\frac{\pi}{2}t^4}+C$，$f=Ce^{\frac{\pi}{2}t^4}-\frac2\pi$。
由 $f(0)=0$ 得 $C=\frac2\pi$，故 $f=\frac2\pi\left(e^{\frac{\pi}{2}x^4}-1\right)$。
【易错点】极坐标下 $\rho^2f(\rho)\cdot\rho d\rho$；积分因子 $e^{-\frac{\pi}{2}t^4}$ 由 $\int2\pi t^3dt=\frac\pi2t^4$ 得。` },
    { n: 26, q: R`设 $f(x)$ 在 $(-\infty,+\infty)$ 上有定义，$f'(0)=2$，对任意的 $x,y$，$f(x+y)=e^xf(y)+e^yf(x)$，求 $f(x)$。`, a: R`$f(x)=2xe^x$`, sol: R`【思路】令 $y=0$ 求 $f(0)$，再对 $y$ 求偏导（在 $y=0$）建立微分方程。
【详解】令 $y=0$：$f(x)=e^xf(0)+f(x)$，故 $f(0)=0$。
对 $f(x+y)=e^xf(y)+e^yf(x)$ 两边关于 $y$ 求导：$f'(x+y)=e^xf'(y)+e^yf(x)$。令 $y=0$：
$$f'(x)=e^xf'(0)+f(x)=2e^x+f(x).$$
即 $f'-f=2e^x$。积分因子 $e^{-x}$：$(e^{-x}f)'=2$，$e^{-x}f=2x+C$，$f=(2x+C)e^x$。由 $f(0)=0$ 得 $C=0$，故 $f=2xe^x$。
【易错点】对 $y$ 求导后令 $y=0$ 得到关于 $x$ 的 ODE；$f(0)=0$ 由令 $y=0$ 得到。` },
    { n: 27, q: R`设 $f(x)$ 在 $[1,+\infty)$ 上有连续二阶导数，$f(1)=0,f'(1)=1$，且 $z=(x^2+y^2)f(x^2+y^2)$ 满足 $\frac{\partial^2z}{\partial x^2}+\frac{\partial^2z}{\partial y^2}=0$，求 $f(x)$ 在 $[1,+\infty)$ 上的最大值。`, a: R`$f(x)=\frac{\ln x}{x},f_{\max}(e)=\frac1e$`, sol: R`【思路】用径向 Laplacian 把条件化为关于 $h(s)=sf(s)$ 的 ODE。
【详解】令 $s=x^2+y^2$，$z=sf(s)=h(s)$。径向函数的 $\Delta z=4h'(s)+4sh''(s)=0$，即 $(sh'(s))'=0$，故 $sh'=C_1$，$h=C_1\ln s+C_2$。
于是 $sf(s)=C_1\ln s+C_2$，$f(s)=\frac{C_1\ln s+C_2}{s}$。由 $f(1)=0$ 得 $C_2=0$，故 $f=\frac{C_1\ln s}{s}$。
$f'(s)=C_1\frac{1-\ln s}{s^2}$，由 $f'(1)=1$ 得 $C_1=1$，$f(s)=\frac{\ln s}{s}$。
$f'=\frac{1-\ln s}{s^2}=0$ 得 $s=e$，$f(e)=\frac1e$，且为最大值。
【易错点】径向 $\Delta z=4h'+4sh''$（$s=x^2+y^2$）；$f(1)=0,f'(1)=1$ 定两个常数。` },
    { n: 28, q: R`设函数 $u(x,y)$ 的全微分 $du=[e^x+f''(x)]y\,dx+f(x)dy$，其中 $f$ 具有二阶连续的导数，且 $f(0)=4,f'(0)=3$，求 $f(x)$ 及 $u(x,y)$。`, a: R`$f(x)=4e^x-xe^x;u(x,y)=y(4-x)e^x+C$`, sol: R`【思路】由全微分的可积条件 $u_{xy}=u_{yx}$ 得 $f$ 的 ODE。
【详解】$u_x=[e^x+f'']y$，$u_y=f(x)$。由 $u_{xy}=u_{yx}$：$e^x+f''(x)=f'(x)$，即 $f''-f'=-e^x$。
特征根 $0,1$，齐次通解 $C_1+C_2e^x$；特解设 $Axe^x$：$y_p''-y_p'=Ae^x$，取 $A=-1$，特解 $-xe^x$。故 $f=C_1+C_2e^x-xe^x$。
$f(0)=4\Rightarrow C_1+C_2=4$；$f'=C_2e^x-e^x(x+1)$，$f'(0)=C_2-1=3\Rightarrow C_2=4,C_1=0$。故 $f=(4-x)e^x$。
$f'=e^x(3-x)$，$f''=e^x(2-x)$，故 $u_x=e^x(3-x)y$。对 $x$ 积分：$u=y\int e^x(3-x)dx=y(4-x)e^x+\phi(y)$；由 $u_y=(4-x)e^x+\phi'(y)=f(x)=(4-x)e^x$ 得 $\phi'=0$，$\phi=C$。
故 $u=y(4-x)e^x+C$。
【易错点】可积条件 $u_{xy}=u_{yx}$；$f''-f'=-e^x$ 的特解因 $\lambda=1$ 是单根要乘 $x$。` },
    { n: 29, q: R`求过原点的曲线 $y=y(x)$，使曲线上任一点 $P$ 的法线段 $PQ$（$Q$ 是过 $P$ 点作曲线法线与 $x$ 轴的交点）的中点位于抛物线 $2y^2=x$ 上。`, a: R`$y^2=2x+1-e^{2x}$`, sol: R`【思路】写出法线与 $x$ 轴交点 $Q$，求 $PQ$ 中点坐标，代入抛物线得 ODE；用 $v=y^2$ 化为线性。
【详解】法线斜率 $-\frac{1}{y'}$，法线方程 $Y-y=-\frac1{y'}(X-x)$。令 $Y=0$ 得 $Q=(x+yy',0)$。
$PQ$ 中点 $\left(x+\frac{yy'}{2},\frac y2\right)$。代入 $2Y^2=X$：$2\cdot\frac{y^2}{4}=x+\frac{yy'}{2}$，即 $y^2=2x+yy'$。
令 $v=y^2$，$v'=2yy'$，则 $v'=2v-4x$，即 $v'-2v=-4x$。积分因子 $e^{-2x}$：$(e^{-2x}v)'=-4xe^{-2x}$，积分得 $e^{-2x}v=2xe^{-2x}+e^{-2x}+C$，$v=2x+1+Ce^{2x}$。
曲线过原点：$v(0)=0\Rightarrow 0=1+C$，$C=-1$。故 $y^2=2x+1-e^{2x}$。
【易错点】法线与 $x$ 轴交点 $Q=(x+yy',0)$；令 $v=y^2$ 把非线性方程化为线性。` },
    { n: 30, q: R`设函数 $f(x)$ 在 $[0,1]$ 上连续，在 $(0,1)$ 内大于零，且满足微分方程 $xf'(x)=f(x)+\frac32ax^2$。曲线 $y=f(x)$ 与直线 $x=1,y=0$ 围成区域 $D$ 的面积为 $2$，求：(1) $f(x)$；(2) 使 $D$ 绕 $x$ 轴旋转一周而成旋转体体积为最小的 $a$。`, a: R`(1) $f(x)=(4-a)x+\frac32ax^2$。(2) $a=-5$ 时 $V$ 最小。`, sol: R`【思路】(1) 一阶线性方程 + 面积条件；(2) 写出体积 $V(a)$ 的二次函数求最值。
【详解】(1) $f'-\frac1xf=\frac32ax$。积分因子 $\frac1x$：$(\frac fx)'=\frac32a$，$\frac fx=\frac32ax+C$，$f=\frac32ax^2+Cx$。
面积 $\int_0^1f(x)dx=2$：$\frac a2+\frac C2=2$，$C=4-a$。故 $f=\frac32ax^2+(4-a)x$。
(2) $V=\pi\int_0^1f^2dx=\pi\int_0^1\left[(4-a)x+\frac32ax^2\right]^2dx$。展开积分：
$$\frac{V}{\pi}=\frac{(4-a)^2}{3}+\frac{3a(4-a)}{4}+\frac{9a^2}{20}=\frac{16}{3}+\frac a3+\frac{a^2}{30}.$$
$\frac{d(V/\pi)}{da}=\frac13+\frac a{15}=0\Rightarrow a=-5$，且 $\frac{d^2}{da^2}=\frac1{15}>0$，故 $a=-5$ 时 $V$ 最小。
【易错点】面积条件定积分常数；$V/\pi$ 是 $a$ 的二次函数，$a=-5$ 为极小点。` },
    { n: 31, q: R`设曲线 $L$ 位于 $xOy$ 平面的第一象限内，$L$ 上任一点 $M$ 处的切线与 $y$ 轴总相交，交点记为 $A$。已知 $|MA|=|OA|$，且 $L$ 过点 $\left(\frac32,\frac32\right)$，求 $L$ 的方程。`, a: R`$y=\sqrt{3x-x^2}(0<x<3)$`, sol: R`【思路】写出切线与 $y$ 轴交点，用 $|MA|=|OA|$ 建立齐次 ODE。
【详解】切线 $Y-y=y'(X-x)$，令 $X=0$ 得 $A=(0,y-xy')$，故 $|OA|=|y-xy'|$。
$|MA|=\sqrt{x^2+(xy')^2}$。由 $|MA|=|OA|$：$x^2+x^2y'^2=(y-xy')^2$，化简得 $2xyy'=y^2-x^2$，即 $y'=\frac{y^2-x^2}{2xy}$。
令 $u=\frac yx$：$xu'=\frac{u^2-1}{2u}-u=\frac{-u^2-1}{2u}$，$\frac{2u}{u^2+1}du=-\frac{dx}{x}$，$\ln(u^2+1)=-\ln x+C$，$y^2+x^2=Cx$。
过 $\left(\frac32,\frac32\right)$：$\frac94+\frac94=\frac32C$，$C=3$。故 $y^2=3x-x^2$，即 $y=\sqrt{3x-x^2}$（$0<x<3$）。
【易错点】$A=(0,y-xy')$；$|MA|=|OA|$ 平方后消去 $x^2y'^2$ 得齐次方程。` },
    { n: 32, q: R`（数三不要求）在上半平面一条向上凹的曲线，其上任一点 $P(x,y)$ 处的曲率等于此曲线在该点的法线段 $PQ$ 长度的倒数（$Q$ 是法线与 $x$ 轴的交点），且曲线在点 $(1,1)$ 处的切线与 $x$ 轴平行。`, a: R`$y=\frac12(e^{x-1}+e^{-(x-1)})$`, sol: R`【思路】写出曲率与法线段长的表达式，建立方程 $yy''=1+y'^2$，用 $p=y'$ 降阶。
【详解】曲率 $\kappa=\frac{y''}{(1+y'^2)^{3/2}}$（向上凹 $y''>0$）。法线与 $x$ 轴交点 $Q=(x+yy',0)$，$|PQ|=y\sqrt{1+y'^2}$。
由 $\kappa=\frac1{|PQ|}$：$\frac{y''}{(1+y'^2)^{3/2}}=\frac{1}{y\sqrt{1+y'^2}}$，即 $yy''=1+y'^2$。
令 $p=y'$，$y''=p\frac{dp}{dy}$：$yp\frac{dp}{dy}=1+p^2$，$\frac{p}{1+p^2}dp=\frac{dy}{y}$，$\frac12\ln(1+p^2)=\ln y+C$，$\sqrt{1+p^2}=Cy$。
$(1,1)$ 处切线平行 $x$ 轴 ⇒ $p=0$：$1=C\cdot1$，$C=1$。故 $1+y'^2=y^2$，$y'=\sqrt{y^2-1}$（$x>1$）。
$\frac{dy}{\sqrt{y^2-1}}=dx$，$\text{arcosh}\,y=x+C'$。由 $y(1)=1$ 得 $C'=-1$，故 $y=\cosh(x-1)=\frac12(e^{x-1}+e^{-(x-1)})$。
【易错点】曲率公式分母 $(1+y'^2)^{3/2}$；降阶用 $y''=p\,dp/dy$；$C=1$ 由水平切线定出。` },
    { n: 33, q: R`设 $L$ 是一条平面曲线，其上任意一点 $P(x,y)(x>0)$ 到坐标原点的距离，恒等于该点处的切线在 $y$ 轴上的截距，且 $L$ 经过点 $\left(\frac12,0\right)$。(1) 试求曲线 $L$ 的方程；(2) 设 $L$ 位于第一象限部分的一条切线，使该切线与 $L$ 以及两坐标轴所围图形的面积最小。`, a: R`(1) $y=\frac14-x^2$；(2) $y=-\frac{\sqrt3}{3}x+\frac13$。`, sol: R`【思路】(1) 由「距离 = 截距」得齐次 ODE；(2) 写出切线截距三角形面积，减去曲线下面积后求极值。
【详解】(1) 切线在 $y$ 轴截距 $y-xy'$，距离 $\sqrt{x^2+y^2}$。条件：$\sqrt{x^2+y^2}=y-xy'$，$y'=\frac{y-\sqrt{x^2+y^2}}{x}$。
令 $u=y/x$：$xu'=-\sqrt{1+u^2}$，$\frac{du}{\sqrt{1+u^2}}=-\frac{dx}{x}$，$\text{arsinh}\,u=-\ln x+C$，$u=\sinh(C-\ln x)$。
过 $\left(\frac12,0\right)$：$u=0,x=\frac12$ 给 $C=\ln\frac12$，故 $u=\sinh(-\ln(2x))=\frac{1}{4x}-x$，$y=ux=\frac14-x^2$。
(2) 设切点 $(x_0,\frac14-x_0^2)$，切线 $Y=\frac14+x_0^2-2x_0X$。与两轴围成三角形面积 $\frac{(\frac14+x_0^2)^2}{4x_0}$，$L$ 下面积 $\int_0^{1/2}(\frac14-x^2)dx=\frac1{12}$。
面积 $S=\frac{(\frac14+x_0^2)^2}{4x_0}-\frac1{12}$。令 $f=\frac{(\frac14+x^2)^2}{4x}$，$\frac{f'}{f}=\frac{4x}{\frac14+x^2}-\frac1x=0\Rightarrow 4x^2=\frac14+x^2\Rightarrow x_0=\frac{\sqrt3}{6}$。
切线：$Y=\frac13-\frac{\sqrt3}{3}X$，即 $y=-\frac{\sqrt3}{3}x+\frac13$。
【易错点】截距为 $y-xy'$（可正可负，由 $x>0$ 取正）；面积是切线三角形减去曲线下面积。` },
    { n: 34, q: R`设 $y=y(x)$ 是区间 $(-\pi,\pi)$ 内过点 $\left(-\frac{\pi}{\sqrt2},\frac{\pi}{\sqrt2}\right)$ 的光滑曲线。当 $-\pi<x<0$ 时，曲线上任一点处的法线都过原点；当 $0\leq x<\pi$ 时，函数 $y(x)$ 满足 $y''+y+x=0$。求函数 $y(x)$ 的表达式。`, a: R`$y=\begin{cases}\sqrt{\pi^2-x^2},&-\pi<x<0,\\\pi\cos x+\sin x-x,&0\leq x<\pi.\end{cases}$`, sol: R`【思路】左段由「法线过原点」得 $yy'=-x$；右段解非齐次方程；在 $x=0$ 处用连续与光滑衔接。
【详解】当 $-\pi<x<0$ 时，法线过原点 ⇒ 半径与法线共线 ⇒ $\frac yx\cdot y'=-1$，即 $yy'=-x$，$y^2=-x^2+C$。过 $\left(-\frac{\pi}{\sqrt2},\frac{\pi}{\sqrt2}\right)$：$C=\pi^2$，故 $y=\sqrt{\pi^2-x^2}$（上半）。
当 $0\le x<\pi$ 时，$y''+y=-x$，通解 $C_1\cos x+C_2\sin x-x$。
$x=0$ 处连续：左极限 $y(0^-)=\pi$，故 $C_1=\pi$。光滑（$y'$ 连续）：左导数 $\frac{-x}{\sqrt{\pi^2-x^2}}|_0=0$，右导数 $-C_1\sin0+C_2\cos0-1=C_2-1$，令 $=0$ 得 $C_2=1$。
故 $y=\pi\cos x+\sin x-x$。
【易错点】「法线过原点」等价于 $yy'=-x$；$x=0$ 处要用连续与可导（光滑）两个条件。` },
    { n: 35, q: R`已知曲线 $L$：$\begin{cases}x=f(t)\\y=\cos t\end{cases}(0\leq t<\frac{\pi}{2})$，其中函数 $f(t)$ 具有连续导数，且 $f(0)=0$，$f'(t)>0\ (0<t<\frac{\pi}{2})$。若曲线 $L$ 的切线与 $x$ 轴的交点到切点的距离恒为 $1$，求函数 $f(t)$ 的表达式，并求以曲线 $L$ 及 $x$ 轴和 $y$ 轴为边界的区域的面积。`, a: R`$f(t)=\ln(\sec t+\tan t)-\sin t;S=\frac{\pi}{4}$`, sol: R`【思路】写出切线与 $x$ 轴交点及距离条件，解出 $f'$ 再积分。
【详解】切线斜率 $\frac{dy}{dx}=\frac{-\sin t}{f'(t)}$。切线与 $x$ 轴交点横坐标 $X=f(t)+\frac{f'(t)\cos t}{\sin t}$。
距离 $=\sqrt{(X-f(t))^2+\cos^2t}=\cos t\cdot\frac{\sqrt{\sin^2t+f'^2}}{\sin t}=1$，解得 $f'^2=\frac{\sin^4t}{\cos^2t}$，$f'=\frac{\sin^2t}{\cos t}$。
$f=\int\frac{\sin^2t}{\cos t}dt=\int(\sec t-\cos t)dt=\ln(\sec t+\tan t)-\sin t+C$。由 $f(0)=0$ 得 $C=0$。
面积 $S=\int_0^{\pi/2}y\,dx=\int_0^{\pi/2}\cos t\cdot f'(t)dt=\int_0^{\pi/2}\sin^2t\,dt=\frac\pi4$。
【易错点】距离条件平方后解出 $f'$；面积 $\int y\,dx=\int y\,f'(t)dt$，恰好化为 $\int\sin^2t\,dt$。` },
    { n: 36, q: R`在 $xOy$ 坐标平面上，连续曲线 $L$ 过点 $M(1,0)$，其上任意点 $P(x,y)(x\neq0)$ 处的切线斜率与直线 $OP$ 的斜率之差等于 $ax$（常数 $a>0$）。(1) 求 $L$ 的方程；(2) 当 $L$ 与直线 $y=ax$ 所围成平面图形的面积为 $\frac83$ 时，确定 $a$ 的值。`, a: R`(1) $y=ax^2-ax$；(2) $a=2$。`, sol: R`【思路】(1) 由斜率之差得线性方程 $y'-\frac yx=ax$；(2) 求两曲线交点并积分面积。
【详解】(1) $y'-\frac yx=ax$，即 $\left(\frac yx\right)'=a$，$\frac yx=ax+C$，$y=ax^2+Cx$。过 $M(1,0)$：$0=a+C$，$C=-a$，故 $y=ax^2-ax$。
(2) 交点：$ax^2-ax=ax\Rightarrow ax^2-2ax=0\Rightarrow x=0,2$。面积
$$S=\int_0^2\left|ax-(ax^2-ax)\right|dx=a\int_0^2(2x-x^2)dx=a\left[x^2-\frac{x^3}{3}\right]_0^2=a\cdot\frac{16}{3}=\frac83,$$
得 $a=2$。
【易错点】(1) $\left(\frac yx\right)'=\frac{xy'-y}{x^2}$，故 $y'-\frac yx=x\left(\frac yx\right)'$；(2) 面积中两曲线在 $[0,2]$ 上的上下关系要判对。` }
  ];
})();
