window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q880_s49"] = {
    id: "q880_s49",
    ch: "880题 · 高数 · 第六章 微分方程及其应用",
    title: "拓展题",
    probTitle: "第六章 拓展题（含原书解析）",
    book: "李林《精讲精练 880 题（数学二）》2026",
    problems: [
      { n: "(1)", q: R`设环境保持恒定温度 $20^\circ\mathrm C$，有一物体的温度在 $10$ s 内从 $100^\circ\mathrm C$ 降到 $60^\circ\mathrm C$，若物体温度下降的速度与该物体温度与环境温度之差成正比，问此物体从温度 $100^\circ\mathrm C$ 降到 $25^\circ\mathrm C$ 需要多少时间？`, a: R`$40$ s`, sol: R`【解】设物体温度为 $T(t)$，则 $\frac{dT}{dt}=-k(T-20)\ (k>0)$，即 $T'+kT=20k$，通解 $T(t)=20+Ce^{-kt}$。由 $T(0)=100$ 得 $C=80$，故 $T=20+80e^{-kt}$。由 $T(10)=60$ 得 $k=\frac1{10}\ln2$，即 $T=20+80\cdot2^{-0.1t}$。令 $T=25$ 得 $2^{-0.1t}=\frac1{16}=2^{-4}$，故 $t=40$ s。` },
      { n: "(2)", q: R`设 $f(t)$ 在 $[0,+\infty)$ 上连续，且满足 $f(t)=e^{4\pi t^2}+\iint_{x^2+y^2\leqslant4t^2}\left[x^2-y^2+f\left(\frac12\sqrt{x^2+y^2}\right)\right]dxdy$。(Ⅰ) 求 $f(t)$；(Ⅱ) 求 $\lim\limits_{t\to0}[f(t)]^{t^{\frac12}}$。`, a: R`(Ⅰ) $f(t)=e^{4\pi t^2}(4\pi t^2+1)$；(Ⅱ) $e^{8\pi}$`, sol: R`【解】(Ⅰ) 积分区域关于 $y=x$ 对称，$\iint(x^2-y^2)dxdy=0$，故 $f(t)=e^{4\pi t^2}+2\pi\int_0^{2t}f\left(\frac12r\right)r\,dr$。求导得 $f'(t)=8\pi te^{4\pi t^2}+8\pi tf(t)$，且 $f(0)=1$。解得 $f(t)=e^{4\pi t^2}(4\pi t^2+C)$，由 $f(0)=1$ 得 $C=1$，故 $f(t)=e^{4\pi t^2}(4\pi t^2+1)$。
(Ⅱ) $\lim\limits_{t\to0^+}[f(t)]^{t^{1/2}}=e^{\lim\frac{4\pi t^2+\ln(4\pi t^2+1)}{t^2}}$，而该指数极限 $=4\pi+4\pi=8\pi$，故原极限 $=e^{8\pi}$。` },
      { n: "(3)", q: R`设 $f(t)\ (t\geqslant0)$ 有连续导数，且满足 $f(t)=\frac1{2\pi}\iint_{x^2+y^2\leqslant t^2}f\left(t-\sqrt{x^2+y^2}\right)dxdy+t$，求 $f(t)$。`, a: R`$f(t)=\frac12(e^t-e^{-t})$`, sol: R`【解】化为 $f(t)=\int_0^trf(t-r)dr+t$。令 $t-r=u$ 得 $\int_0^trf(t-r)dr=t\int_0^tf(u)du-\int_0^tuf(u)du$，故 $f(t)=t\int_0^tf(u)du-\int_0^tuf(u)du+t$。求导得 $f'(t)=\int_0^tf(u)du+1$，再求导得 $f''-f=0$，即 $f(t)=C_1e^{-t}+C_2e^t$。由 $f(0)=0,f'_+(0)=1$ 得 $C_1=-\frac12,C_2=\frac12$，故 $f(t)=\frac12(e^t-e^{-t})$。` },
      { n: "(4)", q: R`设 $y_1=x$，$y_2=xu(x)$ 是微分方程 $(x^2\ln x)y''-xy'+y=0\ (x>0)$ 的两个解，若 $u(1)=1$，$u(e^{-1})=0$，求 $u(x)$，并求该方程的通解。`, a: R`$u(x)=\frac{\ln x}x+\frac1x$；通解 $y=k_1x+k_2(\ln x+1)$`, sol: R`【解】将 $y_2=xu(x)$ 代入得 $x^3u''\ln x+x^2(2\ln x-1)u'=0$，令 $u'=p$ 得 $xp'\ln x+(2\ln x-1)p=0$，分离变量积分得 $p=C_1\frac{\ln x}{x^2}$，故 $u=-C_1\left(\frac{\ln x}x+\frac1x+C_2\right)$。由 $u(1)=1,u(e^{-1})=0$ 得 $C_1=-1,C_2=0$，故 $u(x)=\frac{\ln x}x+\frac1x$，$y_1=x,y_2=\ln x+1$，通解 $y=k_1x+k_2(\ln x+1)$。` },
      { n: "(5)", q: R`发现一架飞机在原点 $O(0,0)$ 处沿 $y$ 轴正向以常速度 $v$ 飞行，随即从点 $P_0(16,0)$ 处发射导弹追击，且导弹方向始终指向飞机，导弹速度为 $2v$。(Ⅰ) 求导弹飞行轨迹 $y=y(x)$ 的表达式；(Ⅱ) 求飞机被击中的位置及所需时间 $T$。`, a: R`(Ⅰ) $y=\frac1{12}x^{3/2}-4x^{1/2}+\frac{32}3$；(Ⅱ) $\left(0,\frac{32}3\right)$，$T=\frac{32}{3v}$`, sol: R`【解】(Ⅰ) 飞机位置 $Q(0,vt)$，切线斜率 $y'=\frac{vt-y}{0-x}$，即 $vt=y-xy'$。弧长 $-\int_{16}^x\sqrt{1+y'^2}dx=2vt$，代入得 $-2(y-xy')=2(y-xy')$ 型关系，求导得 $2xy''=\sqrt{1+y'^2}$。令 $y'=P$，得 $\frac{dP}{\sqrt{1+P^2}}=\frac{dx}{2x}$，积分得 $P+\sqrt{1+P^2}=C_1x^{1/2}$。由 $P(16)=0$ 得 $C_1=\frac14$，故 $P=\frac18x^{1/2}-2x^{-1/2}$，积分并由 $y(16)=0$ 得 $y=\frac1{12}x^{3/2}-4x^{1/2}+\frac{32}3$。
(Ⅱ) 取 $x=0$ 得 $y=\frac{32}3$，故击中位置 $\left(0,\frac{32}3\right)$，由 $\frac{32}3=vt$ 得 $T=\frac{32}{3v}$。` }
    ]
  };
})();
