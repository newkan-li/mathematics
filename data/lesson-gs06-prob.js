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
(D) $\int_0^1\mathrm{d}y\int_{\frac{\pi}{2}}^{\pi-\arcsin y}f(x,y)\mathrm{d}x.$`, a: R`(1)(C) (2)(B)`, sol: R`原书答案 (1)(C) (2)(B)。` },
    { n: 2, q: R`(1) 累次积分 $\int_{\frac{\pi}{4}}^{\frac{\pi}{2}}\mathrm{d}\theta\int_0^{2\sin\theta}f(\rho\cos\theta,\rho\sin\theta)\rho\,\mathrm{d}\rho$ 等于 $(\quad)$
(A) $\int_0^2\mathrm{d}y\int_0^{\sqrt{2y-y^2}}f(x,y)\mathrm{d}x.$
(B) $\int_0^2\mathrm{d}y\int_y^{\sqrt{2y-y^2}}f(x,y)\mathrm{d}x.$
(C) $\int_0^1\mathrm{d}x\int_x^2f(x,y)\mathrm{d}y.$
(D) $\int_0^1\mathrm{d}x\int_x^{1+\sqrt{1-x^2}}f(x,y)\mathrm{d}y.$
(2) 累次积分 $\int_0^{\frac{\pi}{4}}\mathrm{d}\theta\int_0^{2\cos\theta}f(\rho\cos\theta,\rho\sin\theta)\rho\,\mathrm{d}\rho$ 等于 $(\quad)$
(A) $\int_0^1\mathrm{d}y\int_y^{\sqrt{2y-y^2}}f(x,y)\mathrm{d}x.$
(B) $\int_0^1\mathrm{d}y\int_y^{1-\sqrt{1-y^2}}f(x,y)\mathrm{d}x.$
(C) $\int_0^1\mathrm{d}x\int_0^xf(x,y)\mathrm{d}y+\int_1^2\mathrm{d}x\int_0^{\sqrt{1-x^2}}f(x,y)\mathrm{d}y.$
(D) $\int_0^{\sqrt{2}}\mathrm{d}\rho\int_0^{\frac{\pi}{4}}f(\rho\cos\theta,\rho\sin\theta)\rho\,\mathrm{d}\theta+\int_{\sqrt{2}}^{2}\mathrm{d}\rho\int_0^{\arccos\frac{2}{\rho}}f(\rho\cos\theta,\rho\sin\theta)\rho\,\mathrm{d}\theta.$`, a: R`(1)(D) (2)(D)`, sol: R`原书答案 (1)(D) (2)(D)。` },
    { n: 3, q: R`设 $f(x,y)$ 为连续函数，则 $\int_0^{\frac{\pi}{4}}\mathrm{d}\theta\int_0^1f(\rho\cos\theta,\rho\sin\theta)\rho\,\mathrm{d}\rho$ 等于 $(\quad)$
(A) $\int_0^{\frac{\sqrt{2}}{2}}\mathrm{d}x\int_x^{\sqrt{1-x^2}}f(x,y)\mathrm{d}y.$
(B) $\int_0^{\frac{\sqrt{2}}{2}}\mathrm{d}x\int_0^{\sqrt{1-x^2}}f(x,y)\mathrm{d}y.$
(C) $\int_0^{\frac{\sqrt{2}}{2}}\mathrm{d}y\int_y^{\sqrt{1-y^2}}f(x,y)\mathrm{d}x.$
(D) $\int_0^{\frac{\sqrt{2}}{2}}\mathrm{d}y\int_0^{\sqrt{1-y^2}}f(x,y)\mathrm{d}x.$`, a: R`(C)`, sol: R`原书答案 (C)。` },
    { n: 4, q: R`设 $f(x,y)$ 是连续函数，则 $\int_0^1\mathrm{d}y\int_{-\sqrt{1-y^2}}^{1-y}f(x,y)\mathrm{d}x=(\quad)$
(A) $\int_0^1\mathrm{d}x\int_0^{1-x}f(x,y)\mathrm{d}y+\int_{-1}^0\mathrm{d}x\int_0^{\sqrt{1-x^2}}f(x,y)\mathrm{d}y.$
(B) $\int_0^1\mathrm{d}x\int_0^{1-x}f(x,y)\mathrm{d}y+\int_{-1}^0\mathrm{d}x\int_{-\sqrt{1-x^2}}^{0}f(x,y)\mathrm{d}y.$
(C) $\int_0^{\frac{\pi}{2}}\mathrm{d}\theta\int_0^{\frac{1}{\cos\theta+\sin\theta}}f(\rho\cos\theta,\rho\sin\theta)\mathrm{d}\rho+\int_{\frac{\pi}{2}}^{\pi}\mathrm{d}\theta\int_0^1f(\rho\cos\theta,\rho\sin\theta)\mathrm{d}\rho.$
(D) $\int_0^{\frac{\pi}{2}}\mathrm{d}\theta\int_0^{\frac{1}{\cos\theta+\sin\theta}}f(\rho\cos\theta,\rho\sin\theta)\rho\,\mathrm{d}\rho+\int_{\frac{\pi}{2}}^{\pi}\mathrm{d}\theta\int_0^1f(\rho\cos\theta,\rho\sin\theta)\rho\,\mathrm{d}\rho.$`, a: R`(D)`, sol: R`原书答案 (D)。` },
    { n: 5, q: R`设区域 $D$ 由曲线 $y=\sin x,x=\pm\frac{\pi}{2},y=1$ 围成，则 $\iint_D(xy^5-1)\mathrm{d}x\mathrm{d}y=(\quad)$
(A) $\pi.$ (B) $2.$ (C) $-2.$ (D) $-\pi.$`, a: R`(D)`, sol: R`原书答案 (D)。` },
    { n: 6, q: R`设 $f(x,y)$ 连续，且 $f(x,y)=xy+\iint_Df(x,y)\mathrm{d}x\mathrm{d}y$，其中 $D$ 由 $y=0,y=x^2,x=1$ 所围成，则 $f(x,y)$ 等于 $(\quad)$
(A) $xy.$ (B) $2xy.$ (C) $xy+\frac{1}{8}.$ (D) $xy+1.$`, a: R`(C)`, sol: R`原书答案 (C)。` },
    { n: 7, q: R`设 $0<a<1$，区域 $D$ 由 $x$ 轴，$y$ 轴，直线 $x+y=a$ 及 $x+y=1$ 所围成，
$$I=\iint_D\sin^2(x+y)\mathrm{d}\sigma,J=\iint_D\ln^3(x+y)\mathrm{d}\sigma,K=\iint_D(x+y)\mathrm{d}\sigma,$$ 则 $(\quad)$
(A) $I<K<J.$ (B) $K<J<I.$ (C) $I<J<K.$ (D) $J<I<K.$`, a: R`(D)`, sol: R`原书答案 (D)。` },
    { n: 8, q: R`设 $I=\iint_{|x|+|y|\leqslant1}(x^2+y^2)\mathrm{d}\sigma,J=\iint_{x^2+y^2\leqslant1}(x^4-y^4)\mathrm{d}\sigma,K=\iint_{x^2+y^2\leqslant1}(x^3-y^2)\mathrm{d}\sigma$，则 $(\quad)$
(A) $I<J<K.$ (B) $I<K<J.$ (C) $J<I<K.$ (D) $K<J<I.$`, a: R`(D)`, sol: R`原书答案 (D)。` },
    { n: 9, q: R`设 $I_1=\iint_D\frac{x+y}{4}\mathrm{d}\sigma,I_2=\iint_D\sqrt{\frac{x+y}{4}}\mathrm{d}\sigma,I_3=\iint_D\sqrt[3]{\frac{x+y}{4}}\mathrm{d}\sigma.$ 其中 $D:(x-1)^2+(y-1)^2\leqslant2.$ 则 $(\quad)$
(A) $I_1<I_2<I_3.$ (B) $I_2<I_3<I_1.$ (C) $I_1<I_3<I_2.$ (D) $I_3<I_2<I_1.$`, a: R`(A)`, sol: R`原书答案 (A)。` },
    { n: 10, q: R`如右图正方形 $\{(x,y)\mid|x|\leqslant1,|y|\leqslant1\}$ 被其对角线划分为四个区域 $D_k(k=1,2,3,4),I_k=\iint_{D_k}y\cos x\,\mathrm{d}x\mathrm{d}y$ 则 $\max\limits_{1\leqslant k\leqslant4}\{I_k\}=(\quad)$
(A) $I_1.$ (B) $I_2.$ (C) $I_3.$ (D) $I_4.$
（右图：以原点 $O$ 为中心、边长为 2 的正方形，顶点在坐标轴上；两条对角线将其分为四个区域，上方为 $D_1$，左方为 $D_2$，下方为 $D_3$，右方为 $D_4$；$x$ 轴负、正方向分别标注 $-1$、$1$。）`, a: R`(A)`, sol: R`原书答案 (A)。` },
    { n: 11, q: R`设 $D_k$ 是圆域 $D=\{(x,y)\mid x^2+y^2\leqslant1\}$ 在第 $k$ 象限的部分，记 $I_k=\iint_{D_k}(y-x)\mathrm{d}x\mathrm{d}y(k=1,2,3,4)$，则 $(\quad)$
(A) $I_1>0.$ (B) $I_2>0.$ (C) $I_3>0.$ (D) $I_4>0.$`, a: R`(B)`, sol: R`原书答案 (B)。` },
    { n: 12, q: R`已知 $\lim\limits_{t\to0^+}\frac{\int_0^t\mathrm{d}x\int_x^te^{-y^2}\mathrm{d}y}{t^\alpha}=\beta\neq0$，则 $(\quad)$
(A) $\alpha=1,\beta=\frac{1}{2}.$ (B) $\alpha=2,\beta=\frac{1}{2}.$ (C) $\alpha=2,\beta=-\frac{1}{2}.$ (D) $\alpha=3,\beta=-\frac{1}{2}.$`, a: R`(C)`, sol: R`原书答案 (C)。` },
    { n: 13, q: R`交换积分次序 $\int_0^4\mathrm{d}x\int_{\sqrt{4x-x^2}}^{2\sqrt{x}}f(x,y)\mathrm{d}y=\underline{\qquad}.$`, a: R`$\int_0^2\mathrm{d}y\int_{\frac{y^2}{4}}^{2-\sqrt{4-y^2}}f(x,y)\mathrm{d}x+\int_0^2\mathrm{d}y\int_{2+\sqrt{4-y^2}}^{4}f(x,y)\mathrm{d}x+\int_2^4\mathrm{d}y\int_{\frac{y^2}{4}}^{4}f(x,y)\mathrm{d}x.$`, sol: R`原书答案如上。` },
    { n: 14, q: R`交换积分次序 $\int_0^2\mathrm{d}x\int_x^{\sqrt{2x-x^2}}f(x,y)\mathrm{d}y=\underline{\qquad}.$`, a: R`$\int_0^1\mathrm{d}y\int_{1-\sqrt{1-y^2}}^{y}f(x,y)\mathrm{d}x-\int_0^1\mathrm{d}y\int_{1+\sqrt{1-y^2}}^{2}f(x,y)\mathrm{d}x-\int_1^2\mathrm{d}y\int_y^2f(x,y)\mathrm{d}x.$`, sol: R`原书答案如上。` },
    { n: 15, q: R`积分 $\int_0^1\mathrm{d}x\int_{x^2}^1\frac{xy}{\sqrt{1+y^3}}\mathrm{d}y=\underline{\qquad}.$`, a: R`$\frac{1}{3}(\sqrt{2}-1).$`, sol: R`原书答案 $\frac{1}{3}(\sqrt{2}-1)$。` },
    { n: 16, q: R`积分 $\int_0^1\mathrm{d}y\int_{\frac{y}{2}}^{y}\cos x^2\,\mathrm{d}x+\int_1^2\mathrm{d}y\int_{\frac{y}{2}}^{1}\cos x^2\,\mathrm{d}x=\underline{\qquad}.$`, a: R`$\frac{1}{2}\sin1.$`, sol: R`原书答案 $\frac{1}{2}\sin1$。` },
    { n: 17, q: R`$\int_0^1\mathrm{d}y\int_y^1\sqrt{x^2-y^2}\,\mathrm{d}x=\underline{\qquad}.$`, a: R`$\frac{\pi}{12}.$`, sol: R`原书答案 $\frac{\pi}{12}$。` },
    { n: 18, q: R`$\iint_{x^2+y^2\leqslant1}[(x+1)^2+2y^2]\mathrm{d}x\mathrm{d}y=\underline{\qquad}.$`, a: R`$\frac{7}{4}\pi.$`, sol: R`原书答案 $\frac{7}{4}\pi$。` },
    { n: 19, q: R`设 $D=\{(x,y)\mid0\leqslant x\leqslant1,0\leqslant y\leqslant1\}$，则 $\iint_D\frac{\mathrm{d}x\mathrm{d}y}{\sqrt{x^2+y^2}}=\underline{\qquad}.$`, a: R`$2\ln(1+\sqrt{2}).$`, sol: R`原书答案 $2\ln(1+\sqrt{2})$。` },
    { n: 20, q: R`积分 $I=\int_0^{\frac{\pi}{2}}\mathrm{d}\theta\int_0^{2\cos\theta}[(\rho\cos\theta-1)^3+\rho\sin\theta]\rho\,\mathrm{d}\rho=\underline{\qquad}.$`, a: R`$\frac{2}{3}.$`, sol: R`原书答案 $\frac{2}{3}$。` },
    { n: 21, q: R`极限 $\lim\limits_{t\to0^+}\frac{1}{\sin^2t}\int_0^t\mathrm{d}x\int_x^te^{-(x-y)^2}\mathrm{d}y=\underline{\qquad}.$`, a: R`$\frac{1}{2}.$`, sol: R`原书答案 $\frac{1}{2}$。` },
    { n: 22, q: R`设 $f(t)=\int_0^t\mathrm{d}x\int_x^{\sqrt{t}}\frac{\sin y}{y}\mathrm{d}y$，则函数 $f(t)$ 在区间 $[0,\pi]$ 上的最大值为 $\underline{\qquad}.$`, a: R`$f_{\max}(1)=1-\sin1.$`, sol: R`原书答案 $f_{\max}(1)=1-\sin1$。` },
    { n: 23, q: R`求极限 $\lim\limits_{n\to\infty}\frac{1}{n}\left[\int_{\frac{1}{n}}^1e^{-y^2}\mathrm{d}y+\int_{\frac{2}{n}}^1e^{-y^2}\mathrm{d}y+\cdots+\int_{\frac{n-1}{n}}^1e^{-y^2}\mathrm{d}y\right].$`, a: R`$\frac{1}{2}\left(\frac{1}{e}-1\right).$`, sol: R`原书答案 $\frac{1}{2}\left(\frac{1}{e}-1\right)$。` },
    { n: 24, q: R`求极限 $\lim\limits_{t\to0^+}\frac{1}{t^6}\int_0^t\mathrm{d}x\int_x^t\sin(xy)^2\,\mathrm{d}y.$`, a: R`$\frac{1}{18}.$`, sol: R`原书答案 $\frac{1}{18}$。` },
    { n: 25, q: R`计算 $\int_{\frac{1}{4}}^{\frac{1}{2}}\mathrm{d}y\int_{\frac{1}{2}}^{\sqrt{y}}e^{\frac{y}{x}}\mathrm{d}x+\int_{\frac{1}{2}}^{1}\mathrm{d}y\int_y^{\sqrt{y}}e^{\frac{y}{x}}\mathrm{d}x.$`, a: R`$\frac{3}{8}e-\frac{1}{2}\sqrt{e}.$`, sol: R`原书答案 $\frac{3}{8}e-\frac{1}{2}\sqrt{e}$。` },
    { n: 26, q: R`计算二重积分 $\iint_D|x^2+y^2-1|\,\mathrm{d}\sigma$，其中 $D=\{(x,y)\mid0\leqslant x\leqslant1,0\leqslant y\leqslant1\}.$`, a: R`$\frac{\pi}{4}-\frac{1}{3}.$`, sol: R`原书答案 $\frac{\pi}{4}-\frac{1}{3}$。` },
    { n: 27, q: R`计算二重积分 $\iint_D\max\{xy,1\}\mathrm{d}x\mathrm{d}y$，其中 $D=\{(x,y)\mid0\leqslant x\leqslant2,0\leqslant y\leqslant2\}.$`, a: R`$\frac{19}{4}+\ln2.$`, sol: R`原书答案 $\frac{19}{4}+\ln2$。` },
    { n: 28, q: R`设 $D=\{(x,y)\mid x^2+y^2\leqslant\sqrt{2},x\geqslant0,y\geqslant0\}$，$[1+x^2+y^2]$ 表示不超过 $1+x^2+y^2$ 的最大整数，计算二重积分 $\iint_Dxy[1+x^2+y^2]\mathrm{d}x\mathrm{d}y.$`, a: R`$\frac{3}{8}.$`, sol: R`原书答案 $\frac{3}{8}$。` },
    { n: 29, q: R`计算二重积分 $\iint_D(x-y)\mathrm{d}x\mathrm{d}y$，其中 $D=\{(x,y)\mid(x-1)^2+(y-1)^2\leqslant2,y\geqslant x\}.$`, a: R`$-\frac{8}{3}.$`, sol: R`原书答案 $-\frac{8}{3}$。` },
    { n: 30, q: R`计算二重积分 $I=\iint_D\rho^2\sin\theta\sqrt{1-\rho^2\cos2\theta}\,\mathrm{d}\rho\mathrm{d}\theta$，其中
$$D=\left\{(\rho,\theta)\mid0\leqslant\rho\leqslant\sec\theta,0\leqslant\theta\leqslant\frac{\pi}{4}\right\}.$$`, a: R`$\frac{1}{3}-\frac{\pi}{16}.$`, sol: R`原书答案 $\frac{1}{3}-\frac{\pi}{16}$。` },
    { n: 31, q: R`计算二重积分 $\iint_D\frac{\sqrt{x^2+y^2}}{\sqrt{4a^2-x^2-y^2}}\mathrm{d}\sigma$，其中 $D$ 是由曲线 $y=-a+\sqrt{a^2-x^2}(a>0)$ 和直线 $y=-x$ 围成的区域。`, a: R`$a^2\left(\frac{\pi^2}{16}-\frac{1}{2}\right).$`, sol: R`原书答案 $a^2\left(\frac{\pi^2}{16}-\frac{1}{2}\right)$。` },
    { n: 32, q: R`计算二重积分 $\iint_D(x+y)^3\mathrm{d}x\mathrm{d}y$，其中 $D$ 由曲线 $x=\sqrt{1+y^2}$ 与直线 $x+\sqrt{2}y=0$ 及 $x-\sqrt{2}y=0$ 围成。`, a: R`$\frac{14}{15}.$`, sol: R`原书答案 $\frac{14}{15}$。` },
    { n: 33, q: R`计算 $\iint_D(x+y^2)\mathrm{d}x\mathrm{d}y$，其中 $D=\{(x,y)\mid x^2+y^2\leqslant2x+2y\}.$`, a: R`$5\pi.$`, sol: R`原书答案 $5\pi$。` },
    { n: 34, q: R`求 $\iint_D(\sqrt{x^2+y^2}+y)\mathrm{d}\sigma$，其中 $D$ 是由圆 $x^2+y^2=4$ 和 $(x+1)^2+y^2=1$ 所围成的平面区域（如右图）。`, a: R`$\frac{16}{9}(3\pi-2).$`, sol: R`原书答案 $\frac{16}{9}(3\pi-2)$。` },
    { n: 35, q: R`计算二重积分 $\iint_De^xy\,\mathrm{d}x\mathrm{d}y$，其中 $D$ 是以曲线 $y=\sqrt{x}$，$y=\frac{1}{\sqrt{x}}$ 及 $y$ 轴为边界的无界区域。`, a: R`$\frac{1}{2}.$`, sol: R`原书答案 $\frac{1}{2}$。` },
    { n: 36, q: R`计算积分 $\int_{\frac{\pi}{4}}^{\frac{3\pi}{4}}\mathrm{d}\theta\int_0^{2\sin\theta}[\sin\theta+\cos\theta\sqrt{1+\rho^2\sin^2\theta}]\rho^2\,\mathrm{d}\rho.$`, a: R`$\frac{4}{3}+\frac{\pi}{2}.$`, sol: R`原书答案 $\frac{4}{3}+\frac{\pi}{2}$。` },
    { n: 37, q: R`计算积分 $\int_{-1}^1\mathrm{d}x\int_{|x|}^{1+\sqrt{1-x^2}}(x^3+1)\sqrt{x^2+y^2}\,\mathrm{d}y.$`, a: R`$\frac{20\sqrt{2}}{9}.$`, sol: R`原书答案 $\frac{20\sqrt{2}}{9}$。` },
    { n: 38, q: R`设 $f(t)=\int_0^t\mathrm{d}x\int_x^ty^2e^{-y^2}\mathrm{d}y$，试证对一切的 $t\in(-\infty,+\infty)$，有 $0\leqslant f(t)<\frac{1}{2}.$`, a: R`提示：交换积分次序化为一元变上限定积分。`, sol: R`原书提示：交换积分次序化为一元变上限定积分。` },
    { n: 39, q: R`设 $D=\{(x,y)\mid0\leqslant x\leqslant2,0\leqslant y\leqslant2\}.$
1）计算 $b=\iint_D|xy-1|\,\mathrm{d}\sigma$；
2）设 $f(x,y)$ 在 $D$ 上连续，且 $\iint_Df(x,y)\mathrm{d}\sigma=0,\iint_Dxyf(x,y)\mathrm{d}\sigma=1.$
证明：存在 $(\xi,\eta)\in D$ 使 $|f(\xi,\eta)|\geqslant\frac{1}{b}.$`, a: R`1) $b=\frac{3}{2}+2\ln2.$ 2) 反证法。`, sol: R`原书答案：1) $b=\frac{3}{2}+2\ln2$；2) 反证法。` },
    { n: 40, q: R`设 $f(x),g(x)$ 在 $[0,1]$ 上连续，且同时单调增，证明：
$$\int_0^1f(x)g(x)\mathrm{d}x\geqslant\left(\int_0^1f(x)\mathrm{d}x\right)\left(\int_0^1g(x)\mathrm{d}x\right)$$`, a: R`提示：设 $D=\{(x,y)\mid0\leqslant x\leqslant1,0\leqslant y\leqslant1\}$，$\int_0^1f(x)g(x)\mathrm{d}x-\left(\int_0^1f(x)\mathrm{d}x\right)\left(\int_0^1g(x)\mathrm{d}x\right)=\iint_Df(x)g(x)\mathrm{d}\sigma-\iint_Df(x)g(y)\mathrm{d}\sigma.$`, sol: R`原书提示如上。` }
  ];
})();
