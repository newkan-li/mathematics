window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q880_s13"] = {
    id: "q880_s13",
    ch: "880题 · 高数 · 第二章 一元函数微分学及其应用",
    title: "拓展题（本章完）",
    probTitle: "第二章 拓展题（含原书解析）",
    book: "李林《精讲精练 880 题（数学二）》2026",
    problems: [
      { n: "(1)", q: R`已知函数 $f(x)$ 在 $[0,+\infty)$ 上有二阶连续导数，$f(0)=f'(0)=0$，且 $x\in[0,+\infty)$，有 $f''(x)>0$，设 $F(x)$ 是曲线 $y=f(x)$ 上任一点 $(x,f(x))$ 处的切线在 $x$ 轴上的截距（$x>0$），求 $\lim\limits_{x\to0^+}[F(x)+F'(x)]$。`, a: R`$\frac12$`, sol: R`【解】点 $(x,f(x))$ 处切线为 $Y-f(x)=f'(x)(X-x)$，令 $Y=0$ 得截距 $F(x)=x-\frac{f(x)}{f'(x)}\ (x>0)$。由 $f''(x)>0$ 知 $f'(x)>f'(0)=0$，故
$$\lim_{x\to0^+}F(x)=\lim_{x\to0^+}\left[x-\frac{f(x)}{f'(x)}\right]=-\lim_{x\to0^+}\frac{f(x)}{f'(x)}=0,$$
$$\lim_{x\to0^+}F'(x)=\lim_{x\to0^+}\left[1-\frac{f'^2(x)-f(x)f''(x)}{f'^2(x)}\right]=\lim_{x\to0^+}\frac{f(x)f''(x)}{f'^2(x)}=f''(0)\lim_{x\to0^+}\frac{f'(x)}{2f'(x)f''(x)}=\frac12,$$
故 $\lim\limits_{x\to0^+}[F(x)+F'(x)]=\frac12$。` },
      { n: "(2)", q: R`设 $f(x)$ 在 $[a,b]$ 上有二阶连续导数，且 $f(a)=f(b)=0$，$M=\max\limits_{a\leqslant x\leqslant b}|f''(x)|$。
(Ⅰ) 证明：$\max\limits_{a\leqslant x\leqslant b}|f(x)|\leqslant\frac18M(b-a)^2$；
(Ⅱ) 证明：$\max\limits_{a\leqslant x\leqslant b}|f'(x)|\leqslant\frac12M(b-a)$。`, a: R`见证明`, sol: R`【证】(Ⅰ) 设 $|f(x_0)|=\max|f(x)|$。若 $f\equiv0$ 显然；否则 $x_0$ 为极值点，$f'(x_0)=0$。由泰勒公式 $f(x)=f(x_0)+\frac12f''(\xi)(x-x_0)^2$，代入 $x=a,b$：
$$0=f(a)=f(x_0)+\frac12f''(\xi_1)(a-x_0)^2,\quad 0=f(b)=f(x_0)+\frac12f''(\xi_2)(b-x_0)^2.$$
若 $x_0\leqslant\frac{a+b}2$，则 $|f(x_0)|=\frac12|f''(\xi_1)|(a-x_0)^2\leqslant\frac M2\cdot\frac{(b-a)^2}4=\frac18M(b-a)^2$；若 $x_0>\frac{a+b}2$ 同理。故 (Ⅰ) 成立。
(Ⅱ) 设 $|f'(x_1)|=\max|f'(x)|$，由泰勒公式
$$0=f(a)=f(x_1)+f'(x_1)(a-x_1)+\frac12f''(\eta_1)(a-x_1)^2,\quad 0=f(b)=f(x_1)+f'(x_1)(b-x_1)+\frac12f''(\eta_2)(b-x_1)^2,$$
两式相减得 $|f'(x_1)|(b-a)=\frac12|f''(\eta_2)(b-x_1)^2-f''(\eta_1)(a-x_1)^2|\leqslant\frac M2[(b-x_1)^2+(a-x_1)^2]\leqslant\frac M2(b-a)^2$，故 $|f'(x_1)|\leqslant\frac12M(b-a)$。` },
      { n: "(3)", q: R`设 $f(x)$ 在 $[a,b]$ 上有连续的导数，且 $f'(x)>0$，假设 $f[f(x)]$ 存在，证明：存在 $\xi\in(a,b)$，使得 $f[f(b)]-f[f(a)]=[f'(\xi)]^2(b-a)$。`, a: R`见证明`, sol: R`【证】由 $f'(x)>0$ 知 $f$ 在 $[a,b]$ 上严格单调递增，故 $f(b)>f(a)$。对 $f$ 在 $[f(a),f(b)]$ 与 $[a,b]$ 上分别用拉格朗日中值定理：
$$f[f(b)]-f[f(a)]=f'(\eta_1)[f(b)-f(a)],\ \eta_1\in(f(a),f(b)),\quad f(b)-f(a)=f'(\eta_2)(b-a),\ \eta_2\in(a,b),$$
故 $f[f(b)]-f[f(a)]=f'(\eta_1)f'(\eta_2)(b-a)$。若 $f'(\eta_1)=f'(\eta_2)$，取 $\xi=\eta_1$ 即可；若不等，不妨设 $f'(\eta_1)<f'(\eta_2)$，则 $f'(\eta_1)<\sqrt{f'(\eta_1)f'(\eta_2)}<f'(\eta_2)$，由 $f'$ 的介值定理存在 $\xi\in(a,b)$ 使 $f'(\xi)=\sqrt{f'(\eta_1)f'(\eta_2)}$，代入即得。` },
      { n: "(4)", q: R`设 $f(x)$ 在 $[a,b]$ 上有二阶连续的导数，$|f''(x)|\geqslant1$，记 $F(x)=\begin{vmatrix}1&1&1\\a&b&x\\f(a)&f(b)&f(x)\end{vmatrix}$，$x\in[a,b]$，记 $|F(x_0)|=\max\limits_{x\in[a,b]}|F(x)|$，$x_0\in(a,b)$。证明：$|F(x_0)|\geqslant\frac{(b-a)^3}8$。`, a: R`见证明`, sol: R`【证】$F(x)=[f(x)-f(a)](b-a)-[f(b)-f(a)](x-a)$，故 $F''(x)=(b-a)f''(x)$，$|F''(x)|=(b-a)|f''(x)|\geqslant b-a$，且 $F(a)=F(b)=0$。
由 $|F(x_0)|$ 最大知 $F$ 在 $x_0$ 处取极值，$F'(x_0)=0$。由泰勒公式
$$F(a)=F(x_0)+\frac{F''(\xi_1)}2(a-x_0)^2,\quad F(b)=F(x_0)+\frac{F''(\xi_2)}2(b-x_0)^2.$$
若 $a<x_0\leqslant\frac{a+b}2$，由 $F(b)=0$ 得 $|F(x_0)|=\frac{|F''(\xi_2)|}2(b-x_0)^2\geqslant\frac{b-a}2\cdot\frac{(b-a)^2}4=\frac{(b-a)^3}8$；若 $\frac{a+b}2<x_0<b$，由 $F(a)=0$ 同理。故 $|F(x_0)|\geqslant\frac{(b-a)^3}8$。` },
      { n: "(5)", q: R`设不恒为零的函数 $f(x)$ 在 $[0,1]$ 上有二阶连续导数，且 $f(0)=f(1)=0$，记 $M=\max\limits_{x\in[0,1]}\{|f(x)|\}$，$|f''(x)|\geqslant M$。证明：
(Ⅰ) 至少存在一点 $\xi\in(0,1)$，使得 $|f'(\xi)|\geqslant2M$；
(Ⅱ) $|f'(0)|+|f'(1)|\geqslant M$。`, a: R`见证明`, sol: R`【证】(Ⅰ) 由 $f\not\equiv0,f(0)=f(1)=0$ 知 $M>0$，且 $|f(x)|$ 在 $x_0\in(0,1)$ 取得最大值 $M$。若 $x_0\in\left(0,\frac12\right]$，由拉格朗日中值定理存在 $\xi_1\in(0,x_0)$ 使 $|f'(\xi_1)|=\left|\frac{f(x_0)-f(0)}{x_0}\right|=\frac M{x_0}\geqslant2M$；若 $x_0\in\left(\frac12,1\right)$，存在 $\xi_2\in(x_0,1)$ 使 $|f'(\xi_2)|=\frac M{1-x_0}>2M$。故至少存在 $\xi\in(0,1)$ 使 $|f'(\xi)|\geqslant2M$。
(Ⅱ) 由 $f(0)=f(1)=0$ 及罗尔定理存在 $x_1\in(0,1)$ 使 $f'(x_1)=0$。对 $f'$ 在 $[0,x_1]$、$[x_1,1]$ 上用拉格朗日中值定理：$|f'(x_1)-f'(0)|=|f''(\xi_1)|x_1\geqslant Mx_1$，$|f'(1)-f'(x_1)|=|f''(\xi_2)|(1-x_1)\geqslant M(1-x_1)$，即 $|f'(0)|\geqslant Mx_1$，$|f'(1)|\geqslant M(1-x_1)$，两式相加得 $|f'(0)|+|f'(1)|\geqslant M$。` }
    ]
  };
})();
