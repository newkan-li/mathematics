window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q880_s14"] = {
    id: "q880_s14",
    ch: "880题 · 高数 · 第三章 一元函数积分学及其应用",
    title: "基础题·选择题",
    probTitle: "第三章 基础题 · 选择题（含原书解析）",
    book: "李林《精讲精练 880 题（数学二）》2026",
    problems: [
      { n: "(1)", q: R`设 $f(x)$ 是连续函数，且 $f(x)\neq0$，若 $\int xf(x)\,dx=\arcsin x+C$，则 $\int\frac{dx}{f(x)}=$（ ）。
(A) $\frac13(1-x^2)^{\frac32}+C$
(B) $\frac23(1-x^2)^{\frac32}+C$
(C) $-\frac13(1-x^2)^{\frac32}+C$
(D) $-\frac23(1-x^2)^{\frac32}+C$`, a: R`(C)`, sol: R`【解】对 $\int xf(x)dx=\arcsin x+C$ 两边求导得 $xf(x)=\frac1{\sqrt{1-x^2}}$，故 $\frac1{f(x)}=x\sqrt{1-x^2}$，于是
$$\int\frac{dx}{f(x)}=\int x\sqrt{1-x^2}\,dx=-\frac12\int\sqrt{1-x^2}\,d(1-x^2)=-\frac13(1-x^2)^{\frac32}+C.$$
选项 C 正确。` },
      { n: "(2)", q: R`设 $f(x)$ 是连续函数，$F(x)$ 是 $f(x)$ 的原函数，则（ ）。
(A) 当 $f(x)$ 为奇函数时，$F(x)$ 必为偶函数
(B) 当 $f(x)$ 为偶函数时，$F(x)$ 必为奇函数
(C) 当 $f(x)$ 为周期函数时，$F(x)$ 必为周期函数
(D) 当 $f(x)$ 为单调函数时，$F(x)$ 必为单调函数`, a: R`(A)`, sol: R`【解】令 $F(x)=\int_a^xf(t)dt$，当 $f(t)$ 是连续的奇函数时 $F(x)$ 是偶函数，选项 A 正确。` },
      { n: "(3)", q: R`设 $F(x)$ 是 $\sin x^2$ 的一个原函数，则 $d[F(x^2)]=$（ ）。
(A) $\sin x^4dx$
(B) $\sin x^2d(x^2)$
(C) $2x\sin x^2dx$
(D) $2x\sin x^4dx$`, a: R`(D)`, sol: R`【解】由原函数定义 $F'(t)=\sin t^2$，$d[F(t)]=F'(t)dt=\sin t^2dt$，令 $t=x^2$ 得 $d[F(x^2)]=\sin x^4d(x^2)=2x\sin x^4dx$，选项 D 正确。` },
      { n: "(4)", q: R`设 $f(x)=\begin{cases}\sin x,&0\leqslant x<\pi,\\2,&\pi\leqslant x\leqslant2\pi,\end{cases}$ $F(x)=\int_0^xf(t)dt$，则（ ）。
(A) $x=\pi$ 是 $F(x)$ 的跳跃间断点
(B) $x=\pi$ 是 $F(x)$ 的可去间断点
(C) $F(x)$ 在 $x=\pi$ 处连续但不可导
(D) $F(x)$ 在 $x=\pi$ 处可导`, a: R`(C)`, sol: R`【解】$x=\pi$ 是 $f(x)$ 的跳跃间断点，故 $f$ 可积，$F(x)=\int_0^xf(t)dt$ 在 $x=\pi$ 处连续但不可导，选项 C 正确。
【注】$f$ 可积 $\Rightarrow F$ 连续；$f$ 连续 $\Rightarrow F$ 可导；若 $f$ 有第一类间断点，则 $f$ 没有原函数。` },
      { n: "(5)", q: R`$f(x)=\begin{cases}x^2+1,&x\leqslant0,\\\cos x,&x>0\end{cases}$ 的一个原函数为（ ）。
(A) $F(x)=\begin{cases}\frac13x^3+x,&x\leqslant0\\\sin x+1,&x>0\end{cases}$
(B) $F(x)=\begin{cases}\frac13x^3+x+1,&x\leqslant0\\\sin x+2,&x>0\end{cases}$
(C) $F(x)=\begin{cases}\frac13x^3+x+1,&x\leqslant0\\\sin x,&x>0\end{cases}$
(D) $F(x)=\begin{cases}\frac13x^3+x,&x\leqslant0\\\sin x,&x>0\end{cases}$`, a: R`(D)`, sol: R`【解】$x\leqslant0$ 时 $F(x)=\frac13x^3+x+C_1$，$x>0$ 时 $F(x)=\sin x+C_2$，由 $F$ 在 $x=0$ 处连续知 $C_1=C_2$。取 $C=0$ 得选项 D 正确。` },
      { n: "(6)", q: R`$\lim\limits_{n\to\infty}\sum\limits_{k=1}^n\int_k^{k+1}\frac{dx}{x\sqrt{x-1}}=$（ ）。
(A) $1$
(B) $\frac\pi2$
(C) $\pi$
(D) $2\pi$`, a: R`(C)`, sol: R`【解】$a_n=\sum\limits_{k=1}^n\int_k^{k+1}\frac{dx}{x\sqrt{x-1}}=\int_1^{n+1}\frac{dx}{x\sqrt{x-1}}$，故
$$\lim_{n\to\infty}a_n=\int_1^{+\infty}\frac{dx}{x\sqrt{x-1}}\xlongequal{\sqrt{x-1}=t}\int_0^{+\infty}\frac{2\,dt}{t^2+1}=2\arctan t\Big|_0^{+\infty}=\pi.$$
选项 C 正确。` },
      { n: "(7)", q: R`设 $f(x)$ 在 $[0,1]$ 上连续，$f(x)>0$，$f'(x)<0$，$f''(x)>0$，记 $M=\int_0^1f(x)dx$，$N=f(1)$，$P=\frac12[f(0)+f(1)]$，则（ ）。
(A) $M<N<P$
(B) $N<M<P$
(C) $P<M<N$
(D) $P<N<M$`, a: R`(B)`, sol: R`【解】由 $f'(x)<0$ 知 $x\in[0,1]$ 时 $f(x)>f(1)$，故 $N=(1-0)f(1)<M=\int_0^1f(x)dx$。由 $f''(x)>0$ 知 $f$ 下凸，故 $P=\frac12[f(0)+f(1)]>M$。所以 $N<M<P$，选项 B 正确。` },
      { n: "(8)", q: R`设 $I_1=\int_0^\pi\frac{x\sin^2x}{1+e^{\cos^2x}}dx$，$I_2=\int_0^\pi\frac{\sin^2x}{1+e^{\cos^2x}}dx$，$I_3=\int_0^{\frac\pi2}\frac{\cos^2x}{1+e^{\sin^2x}}dx$，则（ ）。
(A) $I_1>I_2>I_3$
(B) $I_3>I_2>I_1$
(C) $I_2>I_1>I_3$
(D) $I_3>I_1>I_2$`, a: R`(A)`, sol: R`【解】对 $I_1,I_2$ 作代换 $x=\frac\pi2-t$：
$$I_1=\pi\int_0^{\frac\pi2}\frac{\cos^2t}{1+e^{\sin^2t}}dt,\quad I_2=2\int_0^{\frac\pi2}\frac{\cos^2t}{1+e^{\sin^2t}}dt,$$
即 $I_1=\pi I_3$，$I_2=2I_3$，而 $I_3>0$，故 $I_1>I_2>I_3$，选项 A 正确。` },
      { n: "(9)", q: R`设 $f(x)$ 在 $[0,1]$ 上可导，$f'(x)>0$，$F(x)=\int_0^1|f(x)-f(t)|dt$，则在 $[0,1]$ 上有（ ）。
(A) $F\left(\frac12\right)\geqslant F(0)$
(B) $F(1)\leqslant F\left(\frac12\right)$
(C) $F(x)\geqslant F\left(\frac12\right)$
(D) $F(x)\leqslant F\left(\frac12\right)$`, a: R`(C)`, sol: R`【解】$F(x)=\int_0^x[f(x)-f(t)]dt+\int_x^1[f(t)-f(x)]dt$，$F'(x)=(2x-1)f'(x)$。由 $f'(x)>0$ 知 $x=\frac12$ 为唯一驻点，$0<x<\frac12$ 时 $F'<0$，$\frac12<x<1$ 时 $F'>0$，故 $x=\frac12$ 为最小值点，$F(x)\geqslant F\left(\frac12\right)$，选项 C 正确。` },
      { n: "(10)", q: R`设 $\lim\limits_{x\to0}\frac1{\sin x-ax}\int_b^x\frac{t^2}{\sqrt{1+t^2}}dt=c$，且 $c\neq0$，则（ ）。
(A) $a=1,b=0,c=-2$
(B) $a=1,b=-2,c=-2$
(C) $a=0,b=1,c=-2$
(D) $a=1,b=1,c=1$`, a: R`(A)`, sol: R`【解】当 $x\to0$ 时 $\int_b^x\frac{t^2}{\sqrt{1+t^2}}dt\to0$，故 $b=0$。若 $a\neq1$，则 $\sin x-ax$ 与 $x$ 同阶，积分是 $x$ 的高阶无穷小，$c=0$，与题设矛盾，故 $a=1$。由洛必达法则
$$\lim_{x\to0}\frac{\int_0^x\frac{t^2}{\sqrt{1+t^2}}dt}{\sin x-x}=\lim_{x\to0}\frac{\frac{x^2}{\sqrt{1+x^2}}}{\cos x-1}=\lim_{x\to0}\frac{\frac{x^2}{\sqrt{1+x^2}}}{-\frac12x^2}=-2,$$
即 $c=-2$，选项 A 正确。` },
      { n: "(11)", q: R`设函数 $y=f(x)$ 由 $\begin{cases}x=\int_0^t2e^{-u^2}du,\\y=\int_0^t\sin(t-u)du\end{cases}$ 确定，则当 $x\to0$ 时，$f(x)$ 是 $x^2$ 的（ ）。
(A) 高阶无穷小
(B) 等价无穷小
(C) 同阶但不等价无穷小
(D) 低阶无穷小`, a: R`(C)`, sol: R`【解】$y=\int_0^t\sin(t-u)du\xlongequal{t-u=s}\int_0^t\sin s\,ds$，$\frac{dy}{dx}=\frac{\sin t}{2e^{-t^2}}=\frac12e^{t^2}\sin t$，$\frac{d^2y}{dx^2}=\frac14e^{2t^2}(2t\sin t+\cos t)$。由 $x=0$ 知 $t=0,y=0$，故 $f(0)=0$，$f'(0)=0$，$f''(0)=\frac14$。由泰勒公式 $f(x)=\frac18x^2+o(x^2)$，故 $f(x)$ 与 $x^2$ 同阶但不等价，选项 C 正确。` },
      { n: "(12)", q: R`设 $f(t)=\int_0^1\ln\sqrt{x^2+t^2}\,dx$，则 $f(t)$ 在 $t=0$ 处（ ）。
(A) 极限不存在
(B) 极限存在但不连续
(C) 连续但不可导
(D) 可导`, a: R`(C)`, sol: R`【解】$f(0)=\int_0^1\ln x\,dx=-1$；$t\neq0$ 时 $f(t)=\ln\sqrt{1+t^2}-1+t\arctan\frac1t$。由 $\lim\limits_{t\to0}f(t)=-1=f(0)$ 知 $f$ 在 $t=0$ 处连续。又 $f'_-(0)=-\frac\pi2$，$f'_+(0)=\frac\pi2$，故不可导，选项 C 正确。` },
      { n: "(13)", q: R`下列反常积分收敛的是（ ）。
(A) $\int_1^{+\infty}\frac{dx}{x^2\sqrt{1+x}}$
(B) $\int_0^1\frac{dx}{\ln(1+x)}$
(C) $\int_{-1}^1\frac{dx}{\sin x}$
(D) $\int_{-\infty}^{+\infty}\frac{x}{\sqrt{1+x^2}}dx$`, a: R`(A)`, sol: R`【解】对 A：$\lim\limits_{x\to+\infty}x^{\frac52}\cdot\frac1{x^2\sqrt{1+x}}=1$（$\lambda=\frac52>1$），收敛，A 正确。
B：$x=0$ 为瑕点，$\lim\limits_{x\to0^+}x\cdot\frac1{\ln(1+x)}=1$（$\lambda=1$），发散。
C：$x=0$ 为瑕点，$\lim\limits_{x\to0}x\cdot\frac1{\sin x}=1$，发散。
D：$\int_{-\infty}^{1}\frac{x\,dx}{\sqrt{1+x^2}}$ 发散。
【注】常用结果：$\int_1^{+\infty}\frac{dx}{x^p}$ 当 $p>1$ 收敛；$\int_a^b\frac{dx}{(x-a)^p}$ 当 $p<1$ 收敛。` },
      { n: "(14)", q: R`已知 $\int_1^{+\infty}\left(\frac{2x^2+ax+b}{2x^2+bx}-1\right)dx=1\ (b>0)$，则（ ）。
(A) $a=e-1,b=e$
(B) $a=b=2(e-1)$
(C) $a=e,b=e-1$
(D) $a=b=2e-1$`, a: R`(B)`, sol: R`【解】被积函数化为 $\frac{(a-b)x+b}{2x^2+bx}$。当 $a-b\neq0$ 时 $\lim\limits_{x\to+\infty}x\cdot\frac{(a-b)x+b}{2x^2+bx}=\frac{a-b}2\neq0$，积分发散，与已知收敛矛盾，故 $a=b$。于是
$$1=\int_1^{+\infty}\frac{b}{2x^2+bx}dx=\int_1^{+\infty}\left(\frac1x-\frac2{2x+b}\right)dx=\ln\frac{x}{2x+b}\Big|_1^{+\infty}=\ln\frac{2+b}2,$$
故 $a=b=2(e-1)$，选项 B 正确。` }
    ]
  };
})();
