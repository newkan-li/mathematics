window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["gs06_s0"].problems = [
    { n: 1, q: R`(1) 设函数 $f(x,y)$ 连续，则 $\int_1^2\mathrm{d}x\int_x^2f(x,y)\mathrm{d}y+\int_1^2\mathrm{d}y\int_y^{4-y}f(x,y)\mathrm{d}x=(\quad)$
(A) $\int_1^2\mathrm{d}x\int_1^{4-x}f(x,y)\mathrm{d}y.$
(B) $\int_1^2\mathrm{d}x\int_x^2f(x,y)\mathrm{d}y.$
(C) $\int_1^2\mathrm{d}y\int_1^{4-y}f(x,y)\mathrm{d}x.$
(D) $\int_1^2\mathrm{d}y\int_y^2f(x,y)\mathrm{d}x.$
(2) 设函数 $f(x,y)$ 连续，则二次积分 $\int_{\frac{\pi}{2}}^{\pi}\mathrm{d}x\int_{\sin x}^{1}f(x,y)\mathrm{d}y$ 等于 $(\quad)$
(A) $\int_0^1\mathrm{d}y\int_{\pi+\arcsin y}^{\pi}f(x,y)\mathrm{d}x.$
(B) $\int_0^1\mathrm{d}y\int_{\pi-\arcsin y}^{\pi}f(x,y)\mathrm{d}x.$
(C) $\int_0^1\mathrm{d}y\int_{\frac{\pi}{2}}^{\pi+\arcsin y}f(x,y)\mathrm{d}x.$
(D) $\int_0^1\mathrm{d}y\int_{\frac{\pi}{2}}^{\pi-\arcsin y}f(x,y)\mathrm{d}x.$`, a: R`(1)(C) (2)(B)`, sol: R`【思路】先把每个累次积分的积分域画出来，能合并的合并，再按另一种次序重新定限。
【详解】(1) 第一个积分域：$1\le x\le2,\ x\le y\le2$；第二个：$1\le y\le2,\ y\le x\le4-y$。合并后为 $\{1\le y\le2,\ 1\le x\le4-y\}$（即 $x\ge1,y\ge1,x+y\le4,y\le2$）。故原式 $=\int_1^2\mathrm{d}y\int_1^{4-y}f\mathrm{d}x$，选 (C)。
(2) 积分域：$\frac{\pi}{2}\le x\le\pi,\ \sin x\le y\le1$。因 $\sin x$ 在该区间由 $1$ 降到 $0$，交换次序后 $y\in[0,1]$；由 $\sin x\le y$ 得 $x\ge\pi-\arcsin y$，故 $x\in[\pi-\arcsin y,\pi]$，选 (B)。
【易错点】(1) 别把两个区域的并集误当成矩形；(2) $\arcsin$ 的主值在 $[-\frac\pi2,\frac\pi2]$，在 $[\frac\pi2,\pi]$ 上要用 $\pi-\arcsin y$。` },
    { n: 2, q: R`(1) 累次积分 $\int_{\frac{\pi}{4}}^{\frac{\pi}{2}}\mathrm{d}\theta\int_0^{2\sin\theta}f(\rho\cos\theta,\rho\sin\theta)\rho\,\mathrm{d}\rho$ 等于 $(\quad)$
(A) $\int_0^2\mathrm{d}y\int_0^{\sqrt{2y-y^2}}f(x,y)\mathrm{d}x.$
(B) $\int_0^2\mathrm{d}y\int_y^{\sqrt{2y-y^2}}f(x,y)\mathrm{d}x.$
(C) $\int_0^1\mathrm{d}x\int_x^2f(x,y)\mathrm{d}y.$
(D) $\int_0^1\mathrm{d}x\int_x^{1+\sqrt{1-x^2}}f(x,y)\mathrm{d}y.$
(2) 累次积分 $\int_0^{\frac{\pi}{4}}\mathrm{d}\theta\int_0^{2\cos\theta}f(\rho\cos\theta,\rho\sin\theta)\rho\,\mathrm{d}\rho$ 等于 $(\quad)$
(A) $\int_0^1\mathrm{d}y\int_y^{\sqrt{2y-y^2}}f(x,y)\mathrm{d}x.$
(B) $\int_0^1\mathrm{d}y\int_y^{1-\sqrt{1-y^2}}f(x,y)\mathrm{d}x.$
(C) $\int_0^1\mathrm{d}x\int_0^xf(x,y)\mathrm{d}y+\int_1^2\mathrm{d}x\int_0^{\sqrt{1-x^2}}f(x,y)\mathrm{d}y.$
(D) $\int_0^{\sqrt{2}}\mathrm{d}\rho\int_0^{\frac{\pi}{4}}f(\rho\cos\theta,\rho\sin\theta)\rho\,\mathrm{d}\theta+\int_{\sqrt{2}}^{2}\mathrm{d}\rho\int_0^{\arccos\frac{2}{\rho}}f(\rho\cos\theta,\rho\sin\theta)\rho\,\mathrm{d}\theta.$`, a: R`(1)(D) (2)(D)`, sol: R`【思路】把极坐标域化为直角坐标域（或保持极坐标换积分次序），逐项核对。
【详解】(1) $\rho=2\sin\theta$ 即圆 $x^2+y^2=2y$，$\theta\in[\frac\pi4,\frac\pi2]$ 表示 $y\ge x$ 的那部分。该域为 $\{0\le x\le1,\ x\le y\le1+\sqrt{1-x^2}\}$，故选 (D)。
(2) $\rho=2\cos\theta$ 即圆 $(x-1)^2+y^2=1$，$\theta\in[0,\frac\pi4]$ 表示 $0\le y\le x$。若化成直角坐标应为 $\int_0^1\mathrm{d}x\int_0^xf\mathrm{d}y+\int_1^2\mathrm{d}x\int_0^{\sqrt{2x-x^2}}f\mathrm{d}y$，而 (C) 中第二个积分上限误写成 $\sqrt{1-x^2}$，故 (C) 错。正确项是 (D)（在极坐标下改为先 $\rho$ 后 $\theta$：$\rho\le\sqrt2$ 时 $\theta\in[0,\frac\pi4]$，$\rho\in[\sqrt2,2]$ 时 $\theta\in[0,\arccos\frac{2}{\rho}]$）。
【易错点】(2) 中 (C) 的 $\sqrt{1-x^2}$ 是「陷阱」——正确上限应为 $\sqrt{2x-x^2}$。` },
    { n: 3, q: R`设 $f(x,y)$ 为连续函数，则 $\int_0^{\frac{\pi}{4}}\mathrm{d}\theta\int_0^1f(\rho\cos\theta,\rho\sin\theta)\rho\,\mathrm{d}\rho$ 等于 $(\quad)$
(A) $\int_0^{\frac{\sqrt{2}}{2}}\mathrm{d}x\int_x^{\sqrt{1-x^2}}f(x,y)\mathrm{d}y.$
(B) $\int_0^{\frac{\sqrt{2}}{2}}\mathrm{d}x\int_0^{\sqrt{1-x^2}}f(x,y)\mathrm{d}y.$
(C) $\int_0^{\frac{\sqrt{2}}{2}}\mathrm{d}y\int_y^{\sqrt{1-y^2}}f(x,y)\mathrm{d}x.$
(D) $\int_0^{\frac{\sqrt{2}}{2}}\mathrm{d}y\int_0^{\sqrt{1-y^2}}f(x,y)\mathrm{d}x.$`, a: R`(C)`, sol: R`【思路】$\theta\in[0,\frac\pi4],\rho\in[0,1]$ 是单位圆内 $0\le y\le x$ 的扇形，换成先 $x$ 后 $y$。
【详解】该域为 $\{x^2+y^2\le1,\ 0\le y\le x\}$。先 $x$ 后 $y$：$y\in[0,\frac{\sqrt2}{2}]$，对每个 $y$，$x$ 从直线 $x=y$ 到圆 $x=\sqrt{1-y^2}$，故 $=\int_0^{\frac{\sqrt2}{2}}\mathrm{d}y\int_y^{\sqrt{1-y^2}}f\mathrm{d}x$，选 (C)。
【易错点】上限 $\frac{\sqrt2}{2}$ 来自直线与圆的交点 $( \frac{\sqrt2}{2},\frac{\sqrt2}{2})$。` },
    { n: 4, q: R`设 $f(x,y)$ 是连续函数，则 $\int_0^1\mathrm{d}y\int_{-\sqrt{1-y^2}}^{1-y}f(x,y)\mathrm{d}x=(\quad)$
(A) $\int_0^1\mathrm{d}x\int_0^{1-x}f(x,y)\mathrm{d}y+\int_{-1}^0\mathrm{d}x\int_0^{\sqrt{1-x^2}}f(x,y)\mathrm{d}y.$
(B) $\int_0^1\mathrm{d}x\int_0^{1-x}f(x,y)\mathrm{d}y+\int_{-1}^0\mathrm{d}x\int_{-\sqrt{1-x^2}}^{0}f(x,y)\mathrm{d}y.$
(C) $\int_0^{\frac{\pi}{2}}\mathrm{d}\theta\int_0^{\frac{1}{\cos\theta+\sin\theta}}f(\rho\cos\theta,\rho\sin\theta)\mathrm{d}\rho+\int_{\frac{\pi}{2}}^{\pi}\mathrm{d}\theta\int_0^1f(\rho\cos\theta,\rho\sin\theta)\mathrm{d}\rho.$
(D) $\int_0^{\frac{\pi}{2}}\mathrm{d}\theta\int_0^{\frac{1}{\cos\theta+\sin\theta}}f(\rho\cos\theta,\rho\sin\theta)\rho\,\mathrm{d}\rho+\int_{\frac{\pi}{2}}^{\pi}\mathrm{d}\theta\int_0^1f(\rho\cos\theta,\rho\sin\theta)\rho\,\mathrm{d}\rho.$`, a: R`(D)`, sol: R`【思路】原域为「单位圆内且在直线 $x+y=1$ 下方（$y\ge0$）」的区域，用极坐标分割。
【详解】域 $D=\{y\ge0,\ x^2+y^2\le1,\ x+y\le1\}$。
当 $\theta\in[0,\frac\pi2]$ 时，边界由直线 $x+y=1$ 控制，即 $\rho(\cos\theta+\sin\theta)\le1$，$\rho\le\frac{1}{\cos\theta+\sin\theta}$；
当 $\theta\in[\frac\pi2,\pi]$ 时，边界由单位圆控制，$\rho\le1$。
故 $I=\int_0^{\frac\pi2}\mathrm{d}\theta\int_0^{\frac{1}{\cos\theta+\sin\theta}}f\rho\,\mathrm{d}\rho+\int_{\frac\pi2}^{\pi}\mathrm{d}\theta\int_0^1f\rho\,\mathrm{d}\rho$，选 (D)。
【易错点】(C) 漏了极坐标面积元中的 $\rho$；(D) 才正确。` },
    { n: 5, q: R`设区域 $D$ 由曲线 $y=\sin x,x=\pm\frac{\pi}{2},y=1$ 围成，则 $\iint_D(xy^5-1)\mathrm{d}x\mathrm{d}y=(\quad)$
(A) $\pi.$ (B) $2.$ (C) $-2.$ (D) $-\pi.$`, a: R`(D)`, sol: R`【思路】先看对称性：$D$ 关于 $y$ 轴对称，$xy^5$ 关于 $x$ 为奇函数，积分为零；剩下常数项的积分就是面积的相反数。
【详解】$D=\{- \frac\pi2\le x\le\frac\pi2,\ \sin x\le y\le1\}$，关于 $y$ 轴对称，故 $\iint_Dxy^5\mathrm{d}\sigma=0$。于是
$$I=-\iint_D1\,\mathrm{d}\sigma=-|D|=-\int_{-\frac\pi2}^{\frac\pi2}(1-\sin x)\mathrm{d}x=-\pi.$$
选 (D)。
【易错点】$y=\sin x$ 是奇函数，围成的域关于 $y$ 轴对称；奇偶性先化简，再算面积。` },
    { n: 6, q: R`设 $f(x,y)$ 连续，且 $f(x,y)=xy+\iint_Df(x,y)\mathrm{d}x\mathrm{d}y$，其中 $D$ 由 $y=0,y=x^2,x=1$ 所围成，则 $f(x,y)$ 等于 $(\quad)$
(A) $xy.$ (B) $2xy.$ (C) $xy+\frac{1}{8}.$ (D) $xy+1.$`, a: R`(C)`, sol: R`【思路】二重积分是一个常数，令 $A=\iint_Df\mathrm{d}\sigma$，把方程化为可解的一次方程。
【详解】设 $A=\iint_Df\,\mathrm{d}\sigma$，则 $f=xy+A$。两边在 $D$ 上积分：
$$A=\iint_Dxy\,\mathrm{d}\sigma+A|D|.$$
$|D|=\int_0^1x^2\mathrm{d}x=\frac13$，$\iint_Dxy\,\mathrm{d}\sigma=\int_0^1\mathrm{d}x\int_0^{x^2}xy\,\mathrm{d}y=\int_0^1x\cdot\frac{x^4}{2}\mathrm{d}x=\frac12\cdot\frac16=\frac1{12}$。
故 $A(1-\frac13)=\frac1{12}$，$A=\frac18$，$f=xy+\frac18$，选 (C)。
【易错点】关键是把 $\iint_Df\mathrm{d}\sigma$ 看成常数；$\iint_DA\,\mathrm{d}\sigma=A|D|$。` },
    { n: 7, q: R`设 $0<a<1$，区域 $D$ 由 $x$ 轴，$y$ 轴，直线 $x+y=a$ 及 $x+y=1$ 所围成，
$$I=\iint_D\sin^2(x+y)\mathrm{d}\sigma,J=\iint_D\ln^3(x+y)\mathrm{d}\sigma,K=\iint_D(x+y)\mathrm{d}\sigma,$$ 则 $(\quad)$
(A) $I<K<J.$ (B) $K<J<I.$ (C) $I<J<K.$ (D) $J<I<K.$`, a: R`(D)`, sol: R`【思路】令 $t=x+y\in(a,1)\subset(0,1)$，比较被积函数在同一区间上的大小。
【详解】在 $(0,1)$ 上，$\sin^2t\in(0,1)$ 且 $\sin^2t<t$；$\ln t<0$，故 $\ln^3t<0$；$t>0$。
于是 $\sin^2(x+y)<(x+y)$，即 $I<K$；而 $\ln^3(x+y)<0<\sin^2(x+y)$，即 $J<I$。综上 $J<I<K$，选 (D)。
【易错点】先判断符号（$J<0$），再比较 $I$ 与 $K$（用 $\sin^2t<t$）。` },
    { n: 8, q: R`设 $I=\iint_{|x|+|y|\leqslant1}(x^2+y^2)\mathrm{d}\sigma,J=\iint_{x^2+y^2\leqslant1}(x^4-y^4)\mathrm{d}\sigma,K=\iint_{x^2+y^2\leqslant1}(x^3-y^2)\mathrm{d}\sigma$，则 $(\quad)$
(A) $I<J<K.$ (B) $I<K<J.$ (C) $J<I<K.$ (D) $K<J<I.$`, a: R`(D)`, sol: R`【思路】用对称性把 $J,K$ 化到最简，再比较符号。
【详解】$J=\iint(x^4-y^4)$，因积分域关于 $y=x$ 对称，$\iint x^4=\iint y^4$，故 $J=0$。
$K=\iint x^3-\iint y^2=0-\frac\pi4=-\frac\pi4<0$（$\iint x^3=0$ 因关于 $x$ 为奇函数）。
$I>0$（被积函数非负且不恒为零）。故 $K<J<I$，选 (D)。
【易错点】对称性快速定出 $J=0$、$K<0$；$I$ 为正。` },
    { n: 9, q: R`设 $I_1=\iint_D\frac{x+y}{4}\mathrm{d}\sigma,I_2=\iint_D\sqrt{\frac{x+y}{4}}\mathrm{d}\sigma,I_3=\iint_D\sqrt[3]{\frac{x+y}{4}}\mathrm{d}\sigma.$ 其中 $D:(x-1)^2+(y-1)^2\leqslant2.$ 则 $(\quad)$
(A) $I_1<I_2<I_3.$ (B) $I_2<I_3<I_1.$ (C) $I_1<I_3<I_2.$ (D) $I_3<I_2<I_1.$`, a: R`(A)`, sol: R`【思路】判断 $s=\frac{x+y}{4}$ 在 $D$ 上的取值范围，再用幂函数单调性比较。
【详解】$D$ 是以 $(1,1)$ 为心、$\sqrt2$ 为半径的圆，$x+y$ 的最大值为 $2+\sqrt2\cdot\sqrt2=4$，故 $s=\frac{x+y}{4}\in[0,1]$。
在 $(0,1)$ 上，$s<\sqrt[3]{s}<\sqrt{s}$，故 $I_1<I_3<I_2$，选 (A)。
【易错点】先确定 $s\in(0,1)$，否则幂函数大小关系会反过来。` },
    { n: 10, q: R`如右图正方形 $\{(x,y)\mid|x|\leqslant1,|y|\leqslant1\}$ 被其对角线划分为四个区域 $D_k(k=1,2,3,4),I_k=\iint_{D_k}y\cos x\,\mathrm{d}x\mathrm{d}y$ 则 $\max\limits_{1\leqslant k\leqslant4}\{I_k\}=(\quad)$
(A) $I_1.$ (B) $I_2.$ (C) $I_3.$ (D) $I_4.$
（右图：以原点 $O$ 为中心、边长为 2 的正方形，顶点在坐标轴上；两条对角线将其分为四个区域，上方为 $D_1$，左方为 $D_2$，下方为 $D_3$，右方为 $D_4$；$x$ 轴负、正方向分别标注 $-1$、$1$。）`, a: R`(A)`, sol: R`【思路】利用 $y\cos x$ 的正负与对称性：上下两个三角形符号相反，左右两个三角形关于 $x$ 轴对称积分为零。
【详解】正方形 $|x|\le1,|y|\le1$ 由对角线 $y=\pm x$ 分成上($D_1:y\ge|x|$)、下($D_3:y\le-|x|$)、左($D_2:x\le-|y|$)、右($D_4:x\ge|y|$)四个三角形。
在 $|x|\le1$ 上 $\cos x>0$。$D_1$ 上 $y>0$，$I_1>0$；$D_3$ 上 $y<0$，$I_3<0$；$D_2,D_4$ 关于 $x$ 轴对称，$y$ 为奇函数，故 $I_2=I_4=0$。故最大为 $I_1$，选 (A)。
【易错点】左右两个三角形（关于 $x$ 轴对称）的积分为零，是本题的关键。` },
    { n: 11, q: R`设 $D_k$ 是圆域 $D=\{(x,y)\mid x^2+y^2\leqslant1\}$ 在第 $k$ 象限的部分，记 $I_k=\iint_{D_k}(y-x)\mathrm{d}x\mathrm{d}y(k=1,2,3,4)$，则 $(\quad)$
(A) $I_1>0.$ (B) $I_2>0.$ (C) $I_3>0.$ (D) $I_4>0.$`, a: R`(B)`, sol: R`【思路】逐象限判断 $y-x$ 的符号（或用对称性）。
【详解】第一象限 $x,y>0$ 且对称，$\iint_{D_1}y=\iint_{D_1}x$，故 $I_1=0$。
第二象限 $x<0<y$，$y-x>0$，故 $I_2>0$。
第三象限 $x<0,y<0$，由对称性 $I_3=0$。
第四象限 $x>0>y$，$y-x<0$，$I_4<0$。选 (B)。
【易错点】第 1、3 象限关于 $y=x$ 对称积分为零；只需看第 2、4 象限符号。` },
    { n: 12, q: R`已知 $\lim\limits_{t\to0^+}\frac{\int_0^t\mathrm{d}x\int_t^xe^{-y^2}\mathrm{d}y}{t^\alpha}=\beta\neq0$，则 $(\quad)$
(A) $\alpha=1,\beta=\frac{1}{2}.$ (B) $\alpha=2,\beta=\frac{1}{2}.$ (C) $\alpha=2,\beta=-\frac{1}{2}.$ (D) $\alpha=3,\beta=-\frac{1}{2}.$`, a: R`(C)`, sol: R`【思路】内层积分限是「下 $t$ 上 $x$」，当 $x<t$ 时为负；交换次序后化为一元积分再求极限。
【详解】因 $x\le t$，内层 $\int_t^x=-\int_x^t$，故
$$\int_0^t\mathrm{d}x\int_t^xe^{-y^2}\mathrm{d}y=-\int_0^t\mathrm{d}x\int_x^te^{-y^2}\mathrm{d}y=-\int_0^t\mathrm{d}y\int_0^ye^{-y^2}\mathrm{d}x=-\int_0^tye^{-y^2}\mathrm{d}y.$$
$$=-\frac12\left(1-e^{-t^2}\right)=-\frac{t^2}{2}+O(t^4).$$
故 $\alpha=2$，$\beta=-\frac12$，选 (C)。
【易错点】注意内层积分限的顺序：下 $t$、上 $x$，因 $x\le t$ 使积分值为负。` },
    { n: 13, q: R`交换积分次序 $\int_0^4\mathrm{d}x\int_{\sqrt{4x-x^2}}^{2\sqrt{x}}f(x,y)\mathrm{d}y=\underline{\qquad}.$`, a: R`$\int_0^2\mathrm{d}y\int_{\frac{y^2}{4}}^{2-\sqrt{4-y^2}}f(x,y)\mathrm{d}x+\int_0^2\mathrm{d}y\int_{2+\sqrt{4-y^2}}^{4}f(x,y)\mathrm{d}x+\int_2^4\mathrm{d}y\int_{\frac{y^2}{4}}^{4}f(x,y)\mathrm{d}x.$`, sol: R`【思路】画出由圆 $(x-2)^2+y^2=4$ 上半与抛物线 $y^2=4x$ 围成的域，再按 $y$ 分区间定 $x$ 的限。
【详解】$y=\sqrt{4x-x^2}$ 是圆 $(x-2)^2+y^2=4$ 的上半，$y=2\sqrt x$ 是 $y^2=4x$ 的上半。域为 $0\le x\le4$，$\sqrt{4x-x^2}\le y\le2\sqrt x$。
按 $y$ 先看：$y\ge\sqrt{4x-x^2}$ 即 $(x-2)^2\ge4-y^2$，得 $x\le2-\sqrt{4-y^2}$ 或 $x\ge2+\sqrt{4-y^2}$；$y\le2\sqrt x$ 即 $x\ge\frac{y^2}{4}$。
当 $0\le y\le2$：$x\in[\frac{y^2}{4},2-\sqrt{4-y^2}]\cup[2+\sqrt{4-y^2},4]$；
当 $2\le y\le4$：$y\ge\sqrt{4x-x^2}$ 自动成立，只需 $x\ge\frac{y^2}{4}$，即 $x\in[\frac{y^2}{4},4]$。
【易错点】$y\in[0,2]$ 时要分成两段（圆的左右两支）；$y\in[2,4]$ 只剩抛物线约束。` },
    { n: 14, q: R`交换积分次序 $\int_0^2\mathrm{d}x\int_x^{\sqrt{2x-x^2}}f(x,y)\mathrm{d}y=\underline{\qquad}.$`, a: R`$\int_0^1\mathrm{d}y\int_{1-\sqrt{1-y^2}}^{y}f(x,y)\mathrm{d}x-\int_0^1\mathrm{d}y\int_{1+\sqrt{1-y^2}}^{2}f(x,y)\mathrm{d}x-\int_1^2\mathrm{d}y\int_y^2f(x,y)\mathrm{d}x.$`, sol: R`【思路】$x\in[1,2]$ 时上限 $\sqrt{2x-x^2}<x$，内层积分为负，交换时要保留符号，把域按 $x\le1$ 与 $x\ge1$ 分开处理。
【详解】记域 $D:\ 0\le x\le2,\ x\le y\le\sqrt{2x-x^2}$。
$x\in[0,1]$：$x\le\sqrt{2x-x^2}$，对应域 $D_1=\{y\ge x,\ (x-1)^2+y^2\le1\}$，换成 $y$ 先：$y\in[0,1]$，$x\in[1-\sqrt{1-y^2},y]$。
$x\in[1,2]$：上限小于下限，内层为负，即 $-\int_1^2\mathrm{d}x\int_{\sqrt{2x-x^2}}^{x}f\mathrm{d}y$，对应域 $D_2=\{y\le x,\ (x-1)^2+y^2\ge1,\ 1\le x\le2\}$，换成 $y$ 先：$y\in[0,1]$ 时 $x\in[1+\sqrt{1-y^2},2]$；$y\in[1,2]$ 时 $x\in[y,2]$。
故原式 $=\int_0^1\mathrm{d}y\int_{1-\sqrt{1-y^2}}^{y}f\mathrm{d}x-\int_0^1\mathrm{d}y\int_{1+\sqrt{1-y^2}}^{2}f\mathrm{d}x-\int_1^2\mathrm{d}y\int_y^2f\mathrm{d}x$。
【易错点】内层上限小于下限会产生负号，不能直接按「区域」正面积处理。` },
    { n: 15, q: R`积分 $\int_0^1\mathrm{d}x\int_{x^2}^1\frac{xy}{\sqrt{1+y^3}}\mathrm{d}y=\underline{\qquad}.$`, a: R`$\frac{1}{3}(\sqrt{2}-1).$`, sol: R`【思路】先对 $y$ 积分困难（$\sqrt{1+y^3}$），交换次序后先对 $x$ 积分。
【详解】域 $0\le x\le1,\ x^2\le y\le1$，换序：$0\le y\le1,\ 0\le x\le\sqrt y$。
$$\int_0^1\mathrm{d}y\int_0^{\sqrt y}\frac{xy}{\sqrt{1+y^3}}\mathrm{d}x=\int_0^1\frac{y}{\sqrt{1+y^3}}\cdot\frac{y}{2}\mathrm{d}y=\frac12\int_0^1\frac{y^2}{\sqrt{1+y^3}}\mathrm{d}y.$$
令 $u=1+y^3$，$\mathrm{d}u=3y^2\mathrm{d}y$：
$$=\frac12\cdot\frac13\int_1^2u^{-\frac12}\mathrm{d}u=\frac16\cdot2(\sqrt2-1)=\frac13(\sqrt2-1).$$
【易错点】$\int x\mathrm{d}x=\frac{y}{2}$（上限 $\sqrt y$ 的平方）；换元 $u=1+y^3$ 后上下限为 $1,2$。` },
    { n: 16, q: R`积分 $\int_0^1\mathrm{d}y\int_{\frac{y}{2}}^{y}\cos x^2\,\mathrm{d}x+\int_1^2\mathrm{d}y\int_{\frac{y}{2}}^{1}\cos x^2\,\mathrm{d}x=\underline{\qquad}.$`, a: R`$\frac{1}{2}\sin1.$`, sol: R`【思路】两段积分拼成一个域，合并后交换次序，先对 $y$ 积分以消去 $\cos x^2$ 的积分困难。
【详解】两段域合并为 $\{0\le x\le1,\ x\le y\le2x\}$。于是
$$\text{原式}=\int_0^1\mathrm{d}x\int_x^{2x}\cos x^2\,\mathrm{d}y=\int_0^1x\cos x^2\mathrm{d}x=\frac12\sin x^2\Big|_0^1=\frac12\sin1.$$
【易错点】先画两个域再合并：$y$ 从 $x$ 到 $2x$；$\int x\cos x^2\mathrm{d}x=\frac12\sin x^2$。` },
    { n: 17, q: R`$\int_0^1\mathrm{d}y\int_y^1\sqrt{x^2-y^2}\,\mathrm{d}x=\underline{\qquad}.$`, a: R`$\frac{\pi}{12}.$`, sol: R`【思路】交换次序后内层是 $\int_0^x\sqrt{x^2-y^2}\mathrm{d}y$，它等于四分之一圆的面积。
【详解】域 $0\le y\le1,\ y\le x\le1$，换序：$0\le x\le1,\ 0\le y\le x$。
$$\int_0^1\mathrm{d}x\int_0^x\sqrt{x^2-y^2}\mathrm{d}y=\int_0^1\frac{\pi x^2}{4}\mathrm{d}x=\frac{\pi}{4}\cdot\frac13=\frac{\pi}{12}.$$
【易错点】$\int_0^x\sqrt{x^2-y^2}\mathrm{d}y$ 是半径 $x$ 的四分之一圆面积 $\frac{\pi x^2}{4}$，不必硬算。` },
    { n: 18, q: R`$\iint_{x^2+y^2\leqslant1}[(x+1)^2+2y^2]\mathrm{d}x\mathrm{d}y=\underline{\qquad}.$`, a: R`$\frac{7}{4}\pi.$`, sol: R`【思路】展开后逐项用圆域上的对称性与常用积分。
【详解】展开：$(x+1)^2+2y^2=x^2+2x+1+2y^2$。
在单位圆上 $\iint x^2=\iint y^2=\frac\pi4$，$\iint2x=0$，$\iint1=\pi$。
$$\text{原式}=\frac\pi4+0+\pi+2\cdot\frac\pi4=\frac\pi4+\pi+\frac\pi2=\frac{7\pi}{4}.$$
【易错点】$\iint x^2=\iint y^2=\frac{\pi R^4}{4}$（$R=1$ 时为 $\frac\pi4$）。` },
    { n: 19, q: R`设 $D=\{(x,y)\mid0\leqslant x\leqslant1,0\leqslant y\leqslant1\}$，则 $\iint_D\frac{\mathrm{d}x\mathrm{d}y}{\sqrt{x^2+y^2}}=\underline{\qquad}.$`, a: R`$2\ln(1+\sqrt{2}).$`, sol: R`【思路】被积函数含 $x^2+y^2$，用极坐标；正方形被对角线分成两块。
【详解】用 $\theta=\frac\pi4$ 分块：
$$I=\int_0^{\frac\pi4}\mathrm{d}\theta\int_0^{\sec\theta}\frac{1}{\rho}\cdot\rho\,\mathrm{d}\rho+\int_{\frac\pi4}^{\frac\pi2}\mathrm{d}\theta\int_0^{\csc\theta}\mathrm{d}\rho=\int_0^{\frac\pi4}\sec\theta\,\mathrm{d}\theta+\int_{\frac\pi4}^{\frac\pi2}\csc\theta\,\mathrm{d}\theta.$$
$$=\ln(\sqrt2+1)+\ln(\sqrt2+1)=2\ln(1+\sqrt2).$$
【易错点】正方形在极坐标下上下两块的上限分别是 $\sec\theta$ 与 $\csc\theta$；两个积分的值都是 $\ln(1+\sqrt2)$。` },
    { n: 20, q: R`积分 $I=\int_0^{\frac{\pi}{2}}\mathrm{d}\theta\int_0^{2\cos\theta}[(\rho\cos\theta-1)^3+\rho\sin\theta]\rho\,\mathrm{d}\rho=\underline{\qquad}.$`, a: R`$\frac{2}{3}.$`, sol: R`【思路】化回直角坐标，利用关于 $x=1$ 的奇对称消去立方项，只剩 $y$ 的积分。
【详解】域是圆 $(x-1)^2+y^2\le1$ 在 $y\ge0$（第一、四象限，$\theta\in[0,\frac\pi2]$）的部分。被积函数 $(\rho\cos\theta-1)^3+\rho\sin\theta=(x-1)^3+y$。
$$\iint_D(x-1)^3\mathrm{d}\sigma=0\ (\text{关于 }x=1\text{ 奇对称}),$$
$$\iint_Dy\,\mathrm{d}\sigma=\bar y\cdot S=\frac{4}{3\pi}\cdot\frac\pi2=\frac23.$$
故 $I=\frac23$。
【易错点】$(x-1)^3$ 关于 $x=1$ 是奇函数，积分为零；$y$ 的积分用半圆形心公式 $\bar y=\frac{4R}{3\pi}$。` },
    { n: 21, q: R`极限 $\lim\limits_{t\to0^+}\frac{1}{\sin^2t}\int_0^t\mathrm{d}x\int_x^te^{-(x-y)^2}\mathrm{d}y=\underline{\qquad}.$`, a: R`$\frac{1}{2}.$`, sol: R`【思路】交换次序并换元 $u=y-x$，再用 $e^{-u^2}\approx1$ 估计。
【详解】域 $0\le x\le y\le t$。令 $u=y-x$：
$$\int_0^t\mathrm{d}x\int_x^te^{-(y-x)^2}\mathrm{d}y=\int_0^t\mathrm{d}x\int_0^{t-x}e^{-u^2}\mathrm{d}u.$$
当 $t\to0$ 时 $e^{-u^2}=1+O(u^2)$，故分子 $\sim\int_0^t(t-x)\mathrm{d}x=\frac{t^2}{2}$。又 $\sin^2t\sim t^2$，故极限 $=\frac12$。
【易错点】交换次序后换元 $u=y-x$ 把指数化为 $e^{-u^2}$；分母 $\sin^2t\sim t^2$。` },
    { n: 22, q: R`设 $f(t)=\int_0^t\mathrm{d}x\int_x^{\sqrt{x}}\frac{\sin y}{y}\mathrm{d}y$，则函数 $f(t)$ 在区间 $[0,\pi]$ 上的最大值为 $\underline{\qquad}.$`, a: R`$f_{\max}(1)=1-\sin1.$`, sol: R`【思路】内层上限是 $\sqrt x$，当 $x\le1$ 时 $\sqrt x\ge x$、当 $x>1$ 时 $\sqrt x<x$，故积分只在 $x\le1$ 有效；$t\ge1$ 后 $f(t)$ 为常数，最大值即 $f(1)$。
【详解】域需 $x\le\sqrt x$，即 $0\le x\le1$。故对 $t\ge1$，$f(t)=\int_0^1\mathrm{d}x\int_x^{\sqrt x}\frac{\sin y}{y}\mathrm{d}y$（与 $t$ 无关）。
交换次序：$y\in[0,1]$，$x$ 从 $y^2$ 到 $y$，
$$f(1)=\int_0^1\mathrm{d}y\int_{y^2}^y\frac{\sin y}{y}\mathrm{d}x=\int_0^1(1-y)\sin y\,\mathrm{d}y=(1-\cos1)-(\sin1-\cos1)=1-\sin1.$$
故最大值为 $f(1)=1-\sin1$。
【易错点】关键是内层上限是 $\sqrt x$ 而非 $\sqrt t$；$t\ge1$ 后积分域不再随 $t$ 变化。` },
    { n: 23, q: R`求极限 $\lim\limits_{n\to\infty}\frac{1}{n}\left[\int_{\frac{1}{n}}^1e^{-y^2}\mathrm{d}y+\int_{\frac{2}{n}}^1e^{-y^2}\mathrm{d}y+\cdots+\int_{\frac{n-1}{n}}^1e^{-y^2}\mathrm{d}y\right].$`, a: R`$\frac{1}{2}\left(1-\frac{1}{e}\right).$`, sol: R`【思路】把和式看成函数 $g(x)=\int_x^1e^{-y^2}\mathrm{d}y$ 的黎曼和，再用二重积分换序。
【详解】记 $g(x)=\int_x^1e^{-y^2}\mathrm{d}y$，则原式 $=\lim\limits_{n\to\infty}\frac1n\sum_{k=1}^{n-1}g\!\left(\frac kn\right)=\int_0^1g(x)\mathrm{d}x$。
$$\int_0^1\mathrm{d}x\int_x^1e^{-y^2}\mathrm{d}y=\int_0^1\mathrm{d}y\int_0^ye^{-y^2}\mathrm{d}x=\int_0^1ye^{-y^2}\mathrm{d}y=\frac12\left(1-e^{-1}\right).$$
（原书答案印为 $\frac12(\frac1e-1)$，因被积函数恒正，结果应为正，此处以 $\frac12(1-\frac1e)$ 为准。）
【易错点】把和式识别为黎曼和；换序后 $\int_0^1ye^{-y^2}\mathrm{d}y=\frac12(1-\frac1e)$。` },
    { n: 24, q: R`求极限 $\lim\limits_{t\to0^+}\frac{1}{t^6}\int_0^t\mathrm{d}x\int_x^t\sin(xy)^2\,\mathrm{d}y.$`, a: R`$\frac{1}{18}.$`, sol: R`【思路】$t\to0$ 时 $\sin(xy)\sim xy$，用等价无穷小把积分化为多项式积分，再比较阶。
【详解】$\sin(xy)^2\sim(xy)^2$，故
$$\int_0^t\mathrm{d}x\int_x^t(xy)^2\mathrm{d}y=\int_0^tx^2\mathrm{d}x\int_x^ty^2\mathrm{d}y=\int_0^tx^2\cdot\frac{t^3-x^3}{3}\mathrm{d}x=\frac13\left(\frac{t^6}{3}-\frac{t^6}{6}\right)=\frac{t^6}{18}.$$
故极限 $=\frac1{18}$。
【易错点】先做等价无穷小替换（在积分号内替换需保证阶数主导，本题可行），再算多项式积分。` },
    { n: 25, q: R`计算 $\int_{\frac{1}{4}}^{\frac{1}{2}}\mathrm{d}y\int_{\frac{1}{2}}^{\sqrt{y}}e^{\frac{y}{x}}\mathrm{d}x+\int_{\frac{1}{2}}^{1}\mathrm{d}y\int_y^{\sqrt{y}}e^{\frac{y}{x}}\mathrm{d}x.$`, a: R`$\frac{3}{8}e-\frac{1}{2}\sqrt{e}.$`, sol: R`【思路】合并两段域，交换次序后内层对 $y$ 积分，恰好凑出 $e^{y/x}$ 的原函数。
【详解】两段域合并为 $\{1/2\le x\le1,\ x^2\le y\le x\}$。于是
$$\text{原式}=\int_{\frac12}^1\mathrm{d}x\int_{x^2}^xe^{\frac yx}\mathrm{d}y=\int_{\frac12}^1x\left[e^{\frac yx}\right]_{x^2}^{x}\mathrm{d}x=\int_{\frac12}^1x\left(e-e^{x}\right)\mathrm{d}x.$$
$$=e\int_{\frac12}^1x\,\mathrm{d}x-\int_{\frac12}^1xe^x\mathrm{d}x=e\cdot\frac38-\left(\frac12\sqrt e\right)=\frac38e-\frac12\sqrt e.$$
【易错点】$\int e^{y/x}\mathrm{d}y=xe^{y/x}$；$\int_{1/2}^1xe^x\mathrm{d}x=[xe^x-e^x]_{1/2}^1=\frac12\sqrt e$。` },
    { n: 26, q: R`计算二重积分 $\iint_D|x^2+y^2-1|\,\mathrm{d}\sigma$，其中 $D=\{(x,y)\mid0\leqslant x\leqslant1,0\leqslant y\leqslant1\}.$`, a: R`$\frac{\pi}{4}-\frac{1}{3}.$`, sol: R`【思路】按单位圆把正方形分成圆内、圆外两部分，分别去掉绝对值。
【详解】圆内（$r\le1$）被积为 $1-r^2$，圆外为 $r^2-1$。
$$\iint_{\text{圆内}}(1-r^2)\mathrm{d}\sigma=\int_0^{\frac\pi2}\mathrm{d}\theta\int_0^1(1-\rho^2)\rho\,\mathrm{d}\rho=\frac\pi2\cdot\frac14=\frac\pi8.$$
$$\iint_{\text{圆外}}(r^2-1)\mathrm{d}\sigma=\iint_D(r^2-1)\mathrm{d}\sigma-\iint_{\text{圆内}}(r^2-1)\mathrm{d}\sigma=\left(\frac23-1\right)-\left(-\frac\pi8\right)=-\frac13+\frac\pi8.$$
故原式 $=\frac\pi8+\left(-\frac13+\frac\pi8\right)=\frac\pi4-\frac13$。
【易错点】圆外部分用「正方形整体减去圆内」，避免逐段定限。` },
    { n: 27, q: R`计算二重积分 $\iint_D\max\{xy,1\}\mathrm{d}x\mathrm{d}y$，其中 $D=\{(x,y)\mid0\leqslant x\leqslant2,0\leqslant y\leqslant2\}.$`, a: R`$\frac{19}{4}+\ln2.$`, sol: R`【思路】以双曲线 $xy=1$ 分域：$xy\le1$ 时取 $1$，$xy\ge1$ 时取 $xy$。
【详解】$xy\le1$ 的域：$x\in[0,\frac12]$ 时 $y\in[0,2]$；$x\in[\frac12,2]$ 时 $y\in[0,\frac1x]$。
$$\iint_{xy\le1}1\,\mathrm{d}\sigma=\int_0^{\frac12}2\mathrm{d}x+\int_{\frac12}^2\frac1x\mathrm{d}x=1+2\ln2.$$
$$\iint_{xy\ge1}xy\,\mathrm{d}\sigma=\int_{\frac12}^2x\,\mathrm{d}x\int_{\frac1x}^2y\,\mathrm{d}y=\int_{\frac12}^2\left(2x-\frac{1}{2x}\right)\mathrm{d}x=\frac{15}{4}-\ln2.$$
故原式 $=\left(1+2\ln2\right)+\left(\frac{15}{4}-\ln2\right)=\frac{19}{4}+\ln2$。
【易错点】$xy\le1$ 部分在 $x=\frac12$ 处要分段；$\int_{1/2}^2(2x-\frac1{2x})\mathrm{d}x$ 注意 $\ln$ 项符号。` },
    { n: 28, q: R`设 $D=\{(x,y)\mid x^2+y^2\leqslant\sqrt{2},x\geqslant0,y\geqslant0\}$，$[1+x^2+y^2]$ 表示不超过 $1+x^2+y^2$ 的最大整数，计算二重积分 $\iint_Dxy[1+x^2+y^2]\mathrm{d}x\mathrm{d}y.$`, a: R`$\frac{3}{8}.$`, sol: R`【思路】由 $1+r^2$ 的取值把域按 $r=1$ 分成两环带，被积函数分别取 $1$ 和 $2$。
【详解】$x^2+y^2\le\sqrt2\Rightarrow r\le2^{1/4}$。当 $r<1$ 时 $1+r^2<2$，取整为 $1$；当 $1\le r\le2^{1/4}$ 时 $2\le1+r^2\le1+\sqrt2<3$，取整为 $2$。
$$I=\int_0^{\frac\pi2}\mathrm{d}\theta\int_0^1\rho^3\cos\theta\sin\theta\,\mathrm{d}\rho+2\int_0^{\frac\pi2}\mathrm{d}\theta\int_1^{2^{1/4}}\rho^3\cos\theta\sin\theta\,\mathrm{d}\rho.$$
$\int_0^{\frac\pi2}\sin\theta\cos\theta\,\mathrm{d}\theta=\frac12$，$\int_0^1\rho^3\mathrm{d}\rho=\frac14$，$\int_1^{2^{1/4}}\rho^3\mathrm{d}\rho=\frac{2-1}{4}=\frac14$。
$$I=\frac12\cdot\frac14+2\cdot\frac12\cdot\frac14=\frac18+\frac14=\frac38.$$
【易错点】注意 $x^2+y^2\le\sqrt2$ 是 $r^2\le\sqrt2$，即 $r\le2^{1/4}$；取整函数的断点在 $r=1$。` },
    { n: 29, q: R`计算二重积分 $\iint_D(x-y)\mathrm{d}x\mathrm{d}y$，其中 $D=\{(x,y)\mid(x-1)^2+(y-1)^2\leqslant2,y\geqslant x\}.$`, a: R`$-\frac{8}{3}.$`, sol: R`【思路】用极坐标，圆心在 $(1,1)$，$y\ge x$ 对应极角 $\varphi\in[\frac\pi4,\frac{5\pi}{4}]$。
【详解】令 $x=1+r\cos\varphi,\ y=1+r\sin\varphi$，$r\in[0,\sqrt2]$，$\varphi\in[\frac\pi4,\frac{5\pi}{4}]$。
$x-y=r(\cos\varphi-\sin\varphi)$，
$$\iint_D(x-y)\mathrm{d}\sigma=\int_{\frac\pi4}^{\frac{5\pi}{4}}\int_0^{\sqrt2}r(\cos\varphi-\sin\varphi)\,r\,\mathrm{d}r\,\mathrm{d}\varphi=\frac{(2\sqrt2)}{3}\int_{\frac\pi4}^{\frac{5\pi}{4}}(\cos\varphi-\sin\varphi)\mathrm{d}\varphi.$$
$\int_{\frac\pi4}^{\frac{5\pi}{4}}\cos\varphi\,\mathrm{d}\varphi=-\sqrt2$，$\int_{\frac\pi4}^{\frac{5\pi}{4}}\sin\varphi\,\mathrm{d}\varphi=\sqrt2$，故 $\int(\cos\varphi-\sin\varphi)=-2\sqrt2$。
$$I=\frac{2\sqrt2}{3}\cdot(-2\sqrt2)=-\frac83.$$
【易错点】半圆 $y\ge x$ 关于直线 $y=x$ 不对称（它只是整个圆的一半），不能用对称性判为零。` },
    { n: 30, q: R`计算二重积分 $I=\iint_D\rho^2\sin\theta\sqrt{1-\rho^2\cos2\theta}\,\mathrm{d}\rho\mathrm{d}\theta$，其中
$$D=\left\{(\rho,\theta)\mid0\leqslant\rho\leqslant\sec\theta,0\leqslant\theta\leqslant\frac{\pi}{4}\right\}.$$`, a: R`$\frac{1}{3}-\frac{\pi}{16}.$`, sol: R`【思路】注意到 $\rho^2\sin\theta\sqrt{1-\rho^2\cos2\theta}\,\mathrm{d}\rho\mathrm{d}\theta=y\sqrt{1-x^2+y^2}\,\mathrm{d}\sigma$，化回直角坐标。
【详解】因 $\rho\cos\theta=x,\rho\sin\theta=y,\rho^2\cos2\theta=x^2-y^2$，且 $\mathrm{d}\sigma=\rho\,\mathrm{d}\rho\mathrm{d}\theta$，故
$$I=\iint_Dy\sqrt{1-x^2+y^2}\,\mathrm{d}\sigma.$$
域：$0\le\theta\le\frac\pi4$ 且 $\rho\cos\theta\le1$ 即 $x\le1$，故 $D=\{0\le y\le x\le1\}$。
$$I=\int_0^1\mathrm{d}x\int_0^xy\sqrt{1-x^2+y^2}\,\mathrm{d}y=\int_0^1\frac13\left[1-(1-x^2)^{3/2}\right]\mathrm{d}x.$$
（令 $u=1-x^2+y^2$，$\int_0^xy\sqrt{u}\,\mathrm{d}y=\frac13\left[u^{3/2}\right]_{1-x^2}^{1}$。）
$$I=\frac13\left(1-\int_0^1(1-x^2)^{3/2}\mathrm{d}x\right),\quad\int_0^1(1-x^2)^{3/2}\mathrm{d}x\xlongequal{x=\sin t}\int_0^{\frac\pi2}\cos^4t\,\mathrm{d}t=\frac{3\pi}{16}.$$
故 $I=\frac13\left(1-\frac{3\pi}{16}\right)=\frac13-\frac{\pi}{16}$。
【易错点】$\rho^2\cos2\theta=x^2-y^2$、$\rho^2\mathrm{d}\rho\mathrm{d}\theta$ 要凑成 $\rho\,\mathrm{d}\sigma$；$\int_0^{\pi/2}\cos^4t\,\mathrm{d}t=\frac{3\pi}{16}$。` },
    { n: 31, q: R`计算二重积分 $\iint_D\frac{\sqrt{x^2+y^2}}{\sqrt{4a^2-x^2-y^2}}\mathrm{d}\sigma$，其中 $D$ 是由曲线 $y=-a+\sqrt{a^2-x^2}(a>0)$ 和直线 $y=-x$ 围成的区域。`, a: R`$a^2\left(\frac{\pi^2}{16}-\frac{1}{2}\right).$`, sol: R`【思路】$y=-a+\sqrt{a^2-x^2}$ 是圆 $x^2+(y+a)^2=a^2$ 的上半，化为极坐标后域为 $\theta\in[-\frac\pi4,0]$、$\rho\in[0,-2a\sin\theta]$。
【详解】圆 $x^2+y^2+2ay=0$ 的极坐标方程为 $\rho=-2a\sin\theta$；直线 $y=-x$ 为 $\theta=-\frac\pi4$。故
$$I=\int_{-\frac\pi4}^0\mathrm{d}\theta\int_0^{-2a\sin\theta}\frac{\rho}{\sqrt{4a^2-\rho^2}}\cdot\rho\,\mathrm{d}\rho.$$
计算 $\int\frac{\rho^2}{\sqrt{4a^2-\rho^2}}\mathrm{d}\rho$（令 $\rho=2a\sin u$）得原函数 $2a^2u-a^2\sin2u$，代入上下限（上限对应 $u=-\theta$）：
$$\int_0^{-2a\sin\theta}\frac{\rho^2}{\sqrt{4a^2-\rho^2}}\mathrm{d}\rho=-2a^2\theta+a^2\sin2\theta.$$
$$I=\int_{-\frac\pi4}^0(-2a^2\theta+a^2\sin2\theta)\mathrm{d}\theta=a^2\left[-\theta^2-\frac12\cos2\theta\right]_{-\frac\pi4}^0=a^2\left(\frac{\pi^2}{16}-\frac12\right).$$
【易错点】极坐标下 $\rho$ 的上限是 $-2a\sin\theta>0$（因 $\theta<0$）；三角换元的原函数要写对。` },
    { n: 32, q: R`计算二重积分 $\iint_D(x+y)^3\mathrm{d}x\mathrm{d}y$，其中 $D$ 由曲线 $x=\sqrt{1+y^2}$ 与直线 $x+\sqrt{2}y=0$ 及 $x-\sqrt{2}y=0$ 围成。`, a: R`$\frac{14}{15}.$`, sol: R`【思路】作线性变换 $u=x+y,\ v=x-y$，则双曲线 $x^2-y^2=1$ 化为 $uv=1$，两条直线化为过原点的射线，积分变得简单。
【详解】令 $u=x+y,\ v=x-y$，则 $x=\frac{u+v}{2},\ y=\frac{u-v}{2}$，$\mathrm{d}x\mathrm{d}y=\frac12\mathrm{d}u\mathrm{d}v$，$x^2-y^2=uv$。
域边界：$x^2-y^2=1\Rightarrow uv=1$；$x=\sqrt2y\Rightarrow u=(3+2\sqrt2)v$；$x=-\sqrt2y\Rightarrow u=(3-2\sqrt2)v$。
在 $(u,v)$ 平面：$u\in[0,\sqrt2+1]$，对每个 $u$，
$$v\in\left[\frac{u}{3+2\sqrt2},\ \min\left(\frac{u}{3-2\sqrt2},\frac1u\right)\right],$$
分界点 $u=\sqrt2-1$（由 $\frac{u}{3-2\sqrt2}=\frac1u$ 得）。于是
$$I=\frac12\int_0^{\sqrt2-1}u^3\mathrm{d}u\int_{\frac{u}{3+2\sqrt2}}^{\frac1u}\mathrm{d}v+\frac12\int_{\sqrt2-1}^{\sqrt2+1}u^3\mathrm{d}u\int_{\frac{u}{3+2\sqrt2}}^{\frac{u}{3-2\sqrt2}}\mathrm{d}v=\frac{14}{15}.$$
【易错点】变换的雅可比为 $\frac12$；双曲线经此变换变为等轴双曲线 $uv=1$，是化简的关键。` },
    { n: 33, q: R`计算 $\iint_D(x+y^2)\mathrm{d}x\mathrm{d}y$，其中 $D=\{(x,y)\mid x^2+y^2\leqslant2x+2y\}.$`, a: R`$5\pi.$`, sol: R`【思路】配方得圆 $(x-1)^2+(y-1)^2\le2$，拆成 $\iint x$ 与 $\iint y^2$，用形心和平移。
【详解】域是圆心 $(1,1)$、半径 $\sqrt2$ 的圆，面积 $S=2\pi$。
$\iint_Dx\,\mathrm{d}\sigma=\bar x\cdot S=1\cdot2\pi=2\pi$。
对 $y$：令 $y=1+v$，
$$\iint_Dy^2\mathrm{d}\sigma=\iint_{u^2+v^2\le2}(1+v)^2\mathrm{d}u\mathrm{d}v=\iint1+2\iint v+\iint v^2=2\pi+0+\frac{\pi(\sqrt2)^4}{4}=2\pi+\pi=3\pi.$$
故原式 $=2\pi+3\pi=5\pi$。
【易错点】$\iint v^2=\frac{\pi R^4}{4}$，$R=\sqrt2$ 时为 $\pi$；形心公式 $\iint x=\bar xS$。` },
    { n: 34, q: R`求 $\iint_D(\sqrt{x^2+y^2}+y)\mathrm{d}\sigma$，其中 $D$ 是由圆 $x^2+y^2=4$ 和 $(x+1)^2+y^2=1$ 所围成的平面区域（如右图）。`, a: R`$\frac{16}{9}(3\pi-2).$`, sol: R`【思路】域为「大圆内、小圆外」，用极坐标：大圆 $\rho\le2$，小圆 $\rho\le-2\cos\theta$（$\theta\in[\frac\pi2,\frac{3\pi}2]$）。
【详解】$I=\iint_D\rho\cdot\rho\,\mathrm{d}\rho\mathrm{d}\theta+\iint_D\rho\sin\theta\cdot\rho\,\mathrm{d}\rho\mathrm{d}\theta$。
第一项 $=\iint_{\rho\le2}\rho^2\mathrm{d}\rho\mathrm{d}\theta-\iint_{\text{小圆}}\rho^2\mathrm{d}\rho\mathrm{d}\theta$：
$$\iint_{\rho\le2}\rho^2=2\pi\cdot\frac83=\frac{16\pi}{3},\quad\iint_{\text{小圆}}\rho^2=\int_{\frac\pi2}^{\frac{3\pi}2}\frac{(-2\cos\theta)^3}{3}\mathrm{d}\theta=-\frac83\int_{\frac\pi2}^{\frac{3\pi}2}\cos^3\theta\mathrm{d}\theta=-\frac83\cdot\left(-\frac43\right)=\frac{32}{9}.$$
第二项 $=\iint_{\rho\le2}\rho^2\sin\theta-\iint_{\text{小圆}}\rho^2\sin\theta=0-0=0$（两个积分都因 $\theta$ 的对称性为零）。
故 $I=\frac{16\pi}{3}-\frac{32}{9}=\frac{16}{9}(3\pi-2)$。
【易错点】小圆极坐标方程为 $\rho=-2\cos\theta$；$\int_{\pi/2}^{3\pi/2}\cos^3\theta\mathrm{d}\theta=-\frac43$。` },
    { n: 35, q: R`计算二重积分 $\iint_De^xxy\,\mathrm{d}x\mathrm{d}y$，其中 $D$ 是以曲线 $y=\sqrt{x}$，$y=\frac{1}{\sqrt{x}}$ 及 $y$ 轴为边界的无界区域。`, a: R`$\frac{1}{2}.$`, sol: R`【思路】域为 $0<x\le1$、$\sqrt x\le y\le\frac1{\sqrt x}$，先对 $y$ 积分恰好与 $y$ 的限相消。
【详解】$D=\{0<x\le1,\ \sqrt x\le y\le\frac1{\sqrt x}\}$。
$$I=\int_0^1e^xx\,\mathrm{d}x\int_{\sqrt x}^{\frac1{\sqrt x}}y\,\mathrm{d}y=\int_0^1e^xx\cdot\frac{1/x-x}{2}\mathrm{d}x=\frac12\int_0^1e^x(1-x^2)\mathrm{d}x.$$
$\int_0^1e^x\mathrm{d}x=e-1$，$\int_0^1x^2e^x\mathrm{d}x=[e^x(x^2-2x+2)]_0^1=e-2$，故
$$I=\frac12\left[(e-1)-(e-2)\right]=\frac12.$$
【易错点】被积函数是 $e^x\cdot x\cdot y$（含 $x$ 因子），$\int_{\sqrt x}^{1/\sqrt x}y\,\mathrm{d}y=\frac{1/x-x}{2}$，与 $x$ 相乘后化为 $\frac{1-x^2}{2}$。` },
    { n: 36, q: R`计算积分 $\int_{\frac{\pi}{4}}^{\frac{3\pi}{4}}\mathrm{d}\theta\int_0^{2\sin\theta}[\sin\theta+\cos\theta\sqrt{1+\rho^2\sin^2\theta}]\rho^2\,\mathrm{d}\rho.$`, a: R`$\frac{4}{3}+\frac{\pi}{2}.$`, sol: R`【思路】第一项化为 $\iint y\,\mathrm{d}\sigma$；第二项关于 $\theta=\frac\pi2$ 为奇函数，积分为零。
【详解】$\sin\theta\cdot\rho^2\mathrm{d}\rho\mathrm{d}\theta=\rho\sin\theta\cdot\rho\,\mathrm{d}\rho\mathrm{d}\theta=y\,\mathrm{d}\sigma$，故第一项 $=\iint_Dy\,\mathrm{d}\sigma$，$D$ 为圆 $\rho=2\sin\theta$ 在 $\theta\in[\frac\pi4,\frac{3\pi}4]$ 的部分。
$$\iint_Dy\,\mathrm{d}\sigma=\int_{\frac\pi4}^{\frac{3\pi}4}\mathrm{d}\theta\int_0^{2\sin\theta}\rho\sin\theta\cdot\rho\,\mathrm{d}\rho=\frac83\int_{\frac\pi4}^{\frac{3\pi}4}\sin^4\theta\,\mathrm{d}\theta=\frac83\left(\frac{3\pi}{16}+\frac12\right)=\frac\pi2+\frac43.$$
第二项 $\cos\theta\sqrt{1+\rho^2\sin^2\theta}\rho^2$ 关于 $\theta=\frac\pi2$ 为奇（$\cos(\pi-\theta)=-\cos\theta$），域关于 $\theta=\frac\pi2$ 对称，故积分为零。
所以原式 $=\frac\pi2+\frac43$。
【易错点】识别第二项的对称性；$\int_{\pi/4}^{3\pi/4}\sin^4\theta\,\mathrm{d}\theta=\frac{3\pi}{16}+\frac12$。` },
    { n: 37, q: R`计算积分 $\int_{-1}^1\mathrm{d}x\int_{|x|}^{1+\sqrt{1-x^2}}(x^3+1)\sqrt{x^2+y^2}\,\mathrm{d}y.$`, a: R`$\frac{20\sqrt{2}}{9}.$`, sol: R`【思路】$x^3\sqrt{x^2+y^2}$ 关于 $x$ 为奇且域对称，积分为零；剩下 $\iint\sqrt{x^2+y^2}$，用极坐标。
【详解】域 $D$ 关于 $y$ 轴对称（下边界 $y=|x|$ 对称），故 $\iint_Dx^3\sqrt{x^2+y^2}\mathrm{d}\sigma=0$，只需算 $\iint_D\sqrt{x^2+y^2}\mathrm{d}\sigma$。
域在极坐标下：下边界 $y=|x|$ 即 $y\ge|x|$，$\theta\in[\frac\pi4,\frac{3\pi}4]$；上边界 $y=1+\sqrt{1-x^2}$ 即 $x^2+(y-1)^2=1$，$\rho=2\sin\theta$。
$$I=\int_{\frac\pi4}^{\frac{3\pi}4}\mathrm{d}\theta\int_0^{2\sin\theta}\rho\cdot\rho\,\mathrm{d}\rho=\frac83\int_{\frac\pi4}^{\frac{3\pi}4}\sin^3\theta\,\mathrm{d}\theta.$$
$\int_{\frac\pi4}^{\frac{3\pi}4}\sin^3\theta\,\mathrm{d}\theta=2\int_{\frac\pi4}^{\frac\pi2}\sin^3\theta\,\mathrm{d}\theta=2\cdot\frac{5\sqrt2}{12}=\frac{5\sqrt2}{6}$，故 $I=\frac83\cdot\frac{5\sqrt2}{6}=\frac{20\sqrt2}{9}$。
【易错点】先剔除奇函数项；上边界圆 $x^2+(y-1)^2=1$ 的极坐标方程是 $\rho=2\sin\theta$。` },
    { n: 38, q: R`设 $f(t)=\int_0^t\mathrm{d}x\int_x^ty^2e^{-y^2}\mathrm{d}y$，试证对一切的 $t\in(-\infty,+\infty)$，有 $0\leqslant f(t)<\frac{1}{2}.$`, a: R`提示：交换积分次序化为一元变上限定积分。`, sol: R`【思路】交换次序把二重积分化为一元变上限积分 $\int_0^{|t|}y^3e^{-y^2}\mathrm{d}y$，再估计其范围。
【详解】对 $t>0$，域 $0\le x\le y\le t$，交换次序：
$$f(t)=\int_0^t\mathrm{d}y\int_0^yy^2e^{-y^2}\mathrm{d}x=\int_0^ty^3e^{-y^2}\mathrm{d}y.$$
对 $t<0$，域 $t\le y\le x\le0$，同理得 $f(t)=\int_0^t y^3e^{-y^2}\mathrm{d}y$，作代换 $y=-s$ 可得 $f(t)=\int_0^{|t|}s^3e^{-s^2}\mathrm{d}s$。故对一切 $t$，
$$f(t)=\int_0^{|t|}y^3e^{-y^2}\mathrm{d}y\ge0.$$
又 $\int_0^{+\infty}y^3e^{-y^2}\mathrm{d}y=\frac12\int_0^{+\infty}ue^{-u}\mathrm{d}u=\frac12$（令 $u=y^2$），且被积函数恒正，故 $f(t)<\frac12$。
【易错点】$t<0$ 时通过换元 $y=-s$ 化为 $\int_0^{|t|}$；上界用 $\int_0^\infty y^3e^{-y^2}\mathrm{d}y=\frac12$。` },
    { n: 39, q: R`设 $D=\{(x,y)\mid0\leqslant x\leqslant2,0\leqslant y\leqslant2\}.$
1）计算 $b=\iint_D|xy-1|\,\mathrm{d}\sigma$；
2）设 $f(x,y)$ 在 $D$ 上连续，且 $\iint_Df(x,y)\mathrm{d}\sigma=0,\iint_Dxyf(x,y)\mathrm{d}\sigma=1.$
证明：存在 $(\xi,\eta)\in D$ 使 $|f(\xi,\eta)|\geqslant\frac{1}{b}.$`, a: R`1) $b=\frac{3}{2}+2\ln2.$ 2) 反证法。`, sol: R`【思路】1) 以双曲线 $xy=1$ 分域去绝对值；2) 用反证法结合积分估计。
【详解】1）$xy\le1$ 与 $xy\ge1$ 分域：
$$\iint_{xy\le1}1\,\mathrm{d}\sigma=1+2\ln2,\quad\iint_{xy\le1}xy\,\mathrm{d}\sigma=\frac14+\ln2,$$
$$\iint_{xy\ge1}xy\,\mathrm{d}\sigma=4-\left(\frac14+\ln2\right)=\frac{15}{4}-\ln2,\quad\iint_{xy\ge1}1\,\mathrm{d}\sigma=3-2\ln2.$$
故 $b=\left(1+2\ln2-\frac14-\ln2\right)+\left(\frac{15}{4}-\ln2-3+2\ln2\right)=\frac34+\ln2+\frac34+\ln2=\frac32+2\ln2$。
2）反证：设对一切 $(x,y)\in D$ 有 $|f(x,y)|<\frac1b$。由 $\iint_Df=0$ 得
$$1=\iint_Dxyf\,\mathrm{d}\sigma=\iint_D(xy-1)f\,\mathrm{d}\sigma.$$
于是
$$1=\left|\iint_D(xy-1)f\,\mathrm{d}\sigma\right|\leqslant\iint_D|xy-1||f|\,\mathrm{d}\sigma<\frac1b\iint_D|xy-1|\,\mathrm{d}\sigma=\frac1b\cdot b=1,$$
矛盾。故存在 $(\xi,\eta)\in D$ 使 $|f(\xi,\eta)|\ge\frac1b$。
【易错点】第 2）问关键是 $\iint_Dxyf=\iint_D(xy-1)f$（因 $\iint_Df=0$），再用绝对值不等式导出 $1<1$。` },
    { n: 40, q: R`设 $f(x),g(x)$ 在 $[0,1]$ 上连续，且同时单调增，证明：
$$\int_0^1f(x)g(x)\mathrm{d}x\geqslant\left(\int_0^1f(x)\mathrm{d}x\right)\left(\int_0^1g(x)\mathrm{d}x\right)$$`, a: R`提示：设 $D=\{(x,y)\mid0\leqslant x\leqslant1,0\leqslant y\leqslant1\}$，$\int_0^1f(x)g(x)\mathrm{d}x-\left(\int_0^1f(x)\mathrm{d}x\right)\left(\int_0^1g(x)\mathrm{d}x\right)=\iint_Df(x)g(x)\mathrm{d}\sigma-\iint_Df(x)g(y)\mathrm{d}\sigma.$`, sol: R`【思路】把两个一元积分之积写成正方形上的二重积分，再与 $\int f g$ 相减并对称化，得到非负被积函数。
【详解】记 $D=[0,1]\times[0,1]$。则
$$\int_0^1f(x)g(x)\mathrm{d}x-\int_0^1f(x)\mathrm{d}x\int_0^1g(y)\mathrm{d}y=\iint_Df(x)g(x)\mathrm{d}\sigma-\iint_Df(x)g(y)\mathrm{d}\sigma=\iint_Df(x)[g(x)-g(y)]\mathrm{d}\sigma.$$
将右端关于 $x,y$ 交换（利用 $D$ 的对称性）并与原式平均：
$$=\frac12\iint_D\left[f(x)-f(y)\right]\left[g(x)-g(y)\right]\mathrm{d}\sigma.$$
因 $f,g$ 都单调增，对任意 $x,y$ 有 $[f(x)-f(y)]$ 与 $[g(x)-g(y)]$ 同号，乘积 $\ge0$，故积分 $\ge0$，原不等式成立。
【易错点】对称化技巧：$\iint_Df(x)[g(x)-g(y)]=\frac12\iint_D[f(x)-f(y)][g(x)-g(y)]$，再逐点判号。` }
  ];
})();
