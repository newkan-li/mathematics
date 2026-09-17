window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q880_s20"] = {
    id: "q880_s20",
    ch: "880题 · 高数 · 第三章 一元函数积分学及其应用",
    title: "综合题·解答题（一）",
    probTitle: "第三章 综合题 · 解答题 (1)–(6)（含原书解析）",
    book: "李林《精讲精练 880 题（数学二）》2026",
    problems: [
      { n: "(1)", q: R`求下列积分：
(Ⅰ) 设 $f(x)=\int_1^x\frac{dt}{\sqrt{1+t^4}}$，求 $I=\int_0^1x^2f(x)dx$；
(Ⅱ) 设 $f(x)=\int_1^{x^2}e^{-t^2}dt$，求 $I=\int_0^1xf(x)dx$。`, a: R`(Ⅰ) $\frac16(1-\sqrt2)$；(Ⅱ) $\frac14(e^{-1}-1)$`, sol: R`【解】(Ⅰ) $I=\int_0^1x^2f(x)dx=\int_0^1f(x)\,d\left(\frac{x^3}3\right)=\frac13x^3f(x)\Big|_0^1-\frac13\int_0^1\frac{x^3}{\sqrt{1+x^4}}dx=-\frac16(1+x^4)^{\frac12}\Big|_0^1=\frac16(1-\sqrt2)$。
(Ⅱ) $I=\int_0^1xf(x)dx=\frac12\int_0^1f(x)\,d(x^2)=\frac12x^2f(x)\Big|_0^1-\frac12\int_0^1x^2f'(x)dx$，其中 $f(1)=0$，$f'(x)=2xe^{-x^4}$，故 $I=-\int_0^1x^3e^{-x^4}dx=\frac14e^{-x^4}\Big|_0^1=\frac14(e^{-1}-1)$。
【注】$\int\frac{dx}{\sqrt{1+x^4}}$、$\int e^{\pm x^2}dx$、$\int\frac{\sin x}xdx$、$\int\frac{\cos x}xdx$ 均「积不出来」。` },
      { n: "(2)", q: R`设 $f(\sin^2x)=\frac x{\sin x}$，求 $I=\int\frac{\sqrt x}{\sqrt{1-x}}f(x)dx$。`, a: R`$-2\sqrt{1-x}\arcsin\sqrt x+2\sqrt x+C$`, sol: R`【解】令 $\sin^2x=t$，则 $\sin x=\sqrt t$（$0\leqslant x\leqslant1$ 时 $\sin x\geqslant0$），$x=\arcsin\sqrt t$，$f(t)=\frac{\arcsin\sqrt t}{\sqrt t}$。故
$$I=\int\frac{\sqrt x}{\sqrt{1-x}}\cdot\frac{\arcsin\sqrt x}{\sqrt x}dx=-2\int\arcsin\sqrt x\,d(\sqrt{1-x})=-2\sqrt{1-x}\arcsin\sqrt x+2\sqrt x+C.$$` },
      { n: "(3)", q: R`计算积分 $I=\int e^{\sin x}\cdot\frac{x\cos^3x-\sin x}{\cos^2x}dx$。`, a: R`$xe^{\sin x}-\frac{e^{\sin x}}{\cos x}+C$`, sol: R`【解】$I=\int x\cos x\,e^{\sin x}dx-\int e^{\sin x}\frac{\sin x}{\cos^2x}dx=\int x\,d(e^{\sin x})+\int e^{\sin x}d\left(-\frac1{\cos x}\right)=xe^{\sin x}-\int e^{\sin x}dx-\frac{e^{\sin x}}{\cos x}+\int e^{\sin x}\cos x\cdot\frac1{\cos x}dx=xe^{\sin x}-\frac{e^{\sin x}}{\cos x}+C$。` },
      { n: "(4)", q: R`计算 $I=\int\frac{e^{-\sin x}\cdot\sin2x}{\sin^4\left(\frac\pi4-\frac x2\right)}dx$。`, a: R`$\frac{8e^{-\sin x}}{1-\sin x}+C$`, sol: R`【解】$\sin^2\left(\frac\pi4-\frac x2\right)=\frac{1-\cos(\frac\pi2-x)}2=\frac{1-\sin x}2$，故原式 $=8\int\frac{e^{-\sin x}(-\sin x)d(-\sin x)}{(1-\sin x)^2}\xlongequal{-\sin x=u}8\int e^u\frac u{(1+u)^2}du=8\left[\int\frac{e^u}{1+u}du+\frac{e^u}{1+u}-\int\frac{e^u}{1+u}du\right]+C=\frac{8e^u}{1+u}+C=\frac{8e^{-\sin x}}{1-\sin x}+C$。` },
      { n: "(5)", q: R`设 $f(\ln x)=\frac{\ln(1+x)}x$，求 $I=\int f(x)dx$。`, a: R`$x-(1+e^{-x})\ln(1+e^x)+C$`, sol: R`【解】令 $\ln x=t$，则 $x=e^t$，$f(t)=\frac{\ln(1+e^t)}{e^t}$。故 $I=\int\frac{\ln(1+e^x)}{e^x}dx=-\int\ln(1+e^x)d(e^{-x})=-e^{-x}\ln(1+e^x)+\int\left(1-\frac{e^x}{1+e^x}\right)dx=x-(1+e^{-x})\ln(1+e^x)+C$。` },
      { n: "(6)", q: R`设 $f'(x)=\arctan(x-1)^2$，$f(0)=0$，求 $I=\int_0^1f(x)dx$。`, a: R`$\frac\pi8-\frac14\ln2$`, sol: R`【解】$I=\int_0^1f(x)dx=xf(x)\Big|_0^1-\int_0^1xf'(x)dx=f(1)-\int_0^1x\arctan(x-1)^2dx$。令 $u=x-1$，则
$$I=f(1)-\int_{-1}^0(u+1)\arctan u^2du=f(1)-\int_{-1}^0u\arctan u^2du-\int_{-1}^0\arctan u^2du.$$
其中 $\int_{-1}^0u\arctan u^2du=\frac12\int_0^1\arctan u^2d(u^2)$，且 $\int_{-1}^0\arctan u^2du=f(1)-f(0)$（因 $f'(-u)=\arctan u^2$）。计算得 $I=\frac\pi8-\frac14\ln2$。` }
    ]
  };
})();
