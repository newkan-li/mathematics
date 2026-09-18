window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q880_s42"] = {
    id: "q880_s42",
    ch: "880题 · 高数 · 第五章 重积分及其应用",
    title: "拓展题",
    probTitle: "第五章 拓展题（含原书解析）",
    book: "李林《精讲精练 880 题（数学二）》2026",
    problems: [
      { n: "(1)", q: R`设 $D$ 由 $x$ 轴，曲线 $y=f(x)\ (f(x)\geqslant0),x=0,x=a\ (a>0)$ 围成，平面图形 $D$ 的质心（形心）的横坐标为 $\bar x=\frac23a$。(Ⅰ) 记 $F(x)=\int_0^xf(t)dt$，证明：$F'(x)=\frac{2F(x)}x$；(Ⅱ) 求 $f(x)$。`, a: R`(Ⅰ) 证明见解析；(Ⅱ) $f(x)=Cx$（$C$ 为任意常数）`, sol: R`【证】(Ⅰ) $\bar x=\frac{\iint_Dx\,dxdy}{\iint_Ddxdy}=\frac{\int_0^axf(x)dx}{\int_0^af(x)dx}=\frac23a$。由 $F(x)=\int_0^xf(t)dt$ 得 $\frac23x\cdot F(x)=\int_0^xtf(t)dt$，两边对 $x$ 求导得 $\frac23xF'(x)+\frac23F(x)=xf(x)=xF'(x)$，即 $F'(x)=\frac{2F(x)}x$。
【解】(Ⅱ) $F'(x)-\frac2xF(x)=0$，通解 $F(x)=C_1x^2$，故 $f(x)=F'(x)=2C_1x=Cx$（$C$ 为任意常数）。` },
      { n: "(2)", q: R`设 $D$ 是由曲线 $\begin{cases}x=1-\cos t,\\y=t-\sin t\end{cases}(0\leqslant t\leqslant2\pi)$ 与 $y$ 轴所围平面区域，计算 $I=\iint_D(2x+y)dxdy$。`, a: R`$5\pi+3\pi^2$`, sol: R`【解】$D=\{(x,y)\mid0\leqslant y\leqslant2\pi,0\leqslant x\leqslant x(y)\}$。$\iint_D2x\,dxdy=\int_0^{2\pi}x^2(y)dy=\int_0^{2\pi}(1-\cos t)^3dt=5\pi$；$\iint_Dy\,dxdy=\int_0^{2\pi}y(t)x(t)y'(t)dt=3\pi^2$，故 $I=5\pi+3\pi^2$。
【注】$D$ 关于 $y=\pi$ 对称，形心纵坐标 $\bar y=\pi$，也可用 $\iint_Dy\,dxdy=\pi\iint_Ddxdy=3\pi^2$。` }
    ]
  };
})();
