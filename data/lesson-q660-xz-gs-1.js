window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q660_s0"] = {
    id: "q660_s0",
    ch: "660题 · 选择题 · 高等数学",
    title: "选择题 第 1–23 题",
    probTitle: "选择题（含原书详解）",
    book: "《数学基础过关660题（数学二）》",
    problems: [
      { n: 1, q: R`有以下命题：设 $\lim\limits_{x\to a}f(x)=A$，$\lim\limits_{x\to a}g(x)$ 不 $\exists$，$\lim\limits_{x\to a}h(x)$ 不 $\exists$，
① $\lim\limits_{x\to a}(f(x)\cdot g(x))$ 不 $\exists$。 ② $\lim\limits_{x\to a}(g(x)+h(x))$ 不 $\exists$。
③ $\lim\limits_{x\to a}(h(x)\cdot g(x))$ 不 $\exists$。 ④ $\lim\limits_{x\to a}(g(x)+f(x))$ 不 $\exists$。
则以上命题中正确的个数是
(A) 0。 (B) 1。 (C) 2。 (D) 3。`, a: R`(B)`, sol: R`【分析】举反例说明 ①、②、③ 均错。例如
$$g(x)=\begin{cases}1,&x>0,\\-1,&x<0,\end{cases}\qquad h(x)=\begin{cases}-1,&x>0,\\1,&x<0,\end{cases}$$
则 $\lim\limits_{x\to0}g(x),\lim\limits_{x\to0}h(x)$ 均不 $\exists$，但
$$\lim_{x\to0}(g(x)+h(x))=0,\qquad\lim_{x\to0}(g(x)\cdot h(x))=-1,$$
故 ②、③ 不正确。若取 $f(x)=0$，则 $\lim\limits_{x\to0}f(x)=0$，$\lim\limits_{x\to0}f(x)g(x)=0$，故 ① 也不正确。
按题设易知 $\lim\limits_{x\to a}(f(x)+g(x))$ 不 $\exists$（否则若存在，则 $\lim\limits_{x\to a}g(x)=\lim\limits_{x\to a}[(f(x)+g(x))-f(x)]$ 存在，矛盾），故 ④ 正确。选 (B)。
【评注】(1) 若 $\lim\limits_{x\to a}f(x)=A$、$\lim\limits_{x\to a}g(x)$ 不 $\exists$，则 $\lim\limits_{x\to a}[f(x)+g(x)]$ 不 $\exists$；当 $A\neq0$ 时又有 $\lim\limits_{x\to a}(f(x)g(x))$ 不 $\exists$，当 $A=0$ 时可能 $\exists$ 也可能不 $\exists$。
(2) 若 $\lim\limits_{x\to a}f(x),\lim\limits_{x\to a}g(x)$ 均不 $\exists$，则 $\lim\limits_{x\to a}(f(x)+g(x)),\lim\limits_{x\to a}(f(x)g(x))$ 可能 $\exists$ 也可能不 $\exists$。` },
      { n: 2, q: R`设 $\lim\limits_{x\to x_0}f(x)=+\infty(-\infty)$，$\lim\limits_{x\to x_0}g(x)=+\infty(-\infty)$，$\lim\limits_{x\to x_0}h(x)=A$，则下列命题中不正确的是
(A) $\lim\limits_{x\to x_0}(f(x)+g(x))=+\infty(-\infty)$。 (B) $\lim\limits_{x\to x_0}(f(x)h(x))=\infty$。
(C) $\lim\limits_{x\to x_0}(f(x)+h(x))=+\infty(-\infty)$。 (D) $\lim\limits_{x\to x_0}(f(x)g(x))=+\infty$。`, a: R`(B)`, sol: R`【分析1】两个正（负）无穷大量之和仍为正（负）无穷大量，之积均是正无穷大量，即 (A)(D) 正确；正（负）无穷大量与有界量之和仍为正（负）无穷大量，即 (C) 也正确。因此 (B) 不正确，选 (B)。
【分析2】当 $A=0$ 时，$\lim\limits_{x\to x_0}(f(x)h(x))$ 是「无穷大量与无穷小量之积」的未定式，因此 (B) 不正确。
【评注】当 $\lim\limits_{x\to x_0}f(x)=\infty$、$\lim\limits_{x\to x_0}h(x)=A\neq0$ 时，才有 $\lim\limits_{x\to x_0}(f(x)h(x))=\infty$。` },
      { n: 3, q: R`$f(x)=\dfrac{\sin\pi x}{x-1}e^{-\frac{1}{(x-1)^3}}$，则当 $x\to1$ 时有
(A) $\lim\limits_{x\to1}f(x)=-\pi$。 (B) $\lim\limits_{x\to1}f(x)=0$。
(C) $\lim\limits_{x\to1}f(x)=\infty$。 (D) $\lim\limits_{x\to1}f(x)$ 不存在，且 $\lim\limits_{x\to1}f(x)\neq\infty$。`, a: R`(D)`, sol: R`【分析】$\lim\limits_{x\to1}\dfrac{\sin\pi x}{x-1}=\lim\limits_{x\to1}\pi\cos\pi x=-\pi$；而 $\lim\limits_{x\to1^+}e^{-\frac{1}{(x-1)^3}}=0$、$\lim\limits_{x\to1^-}e^{-\frac{1}{(x-1)^3}}=+\infty$，故需分别考察左右极限：
$$\lim_{x\to1^+}f(x)=\lim_{x\to1^+}\frac{\sin\pi x}{x-1}e^{-\frac{1}{(x-1)^3}}=(-\pi)\cdot0=0,$$
$$\lim_{x\to1^-}f(x)=\lim_{x\to1^-}\frac{\sin\pi x}{x-1}e^{-\frac{1}{(x-1)^3}}=(-\pi)\cdot(+\infty)=-\infty.$$
左右极限不同，故极限不存在且不为 $\infty$。选 (D)。
【评注】$\lim\limits_{x\to+\infty}e^x=+\infty$、$\lim\limits_{x\to-\infty}e^x=0$，故 $x\to1^\pm$ 时 $-\frac{1}{(x-1)^3}$ 分别趋于 $\pm\infty$，必须分左右极限讨论。` },
      { n: 4, q: R`$I=\lim\limits_{x\to0}\dfrac{\cos(xe^x)-e^{-\frac{x^2}{2}e^{2x}}}{x^4}=$
(A) 0。 (B) $-\dfrac{1}{6}$。 (C) $-\dfrac{1}{8}$。 (D) $-\dfrac{1}{12}$。`, a: R`(D)`, sol: R`【分析】先作变形，注意 $e^{-\frac{x^2}{2}e^{2x}}=e^{-\frac{1}{2}(xe^x)^2}$：
$$I=\lim_{x\to0}\frac{\cos(xe^x)-e^{-\frac{1}{2}(xe^x)^2}}{(xe^x)^4}\cdot e^{4x}\xlongequal{t=xe^x}\lim_{t\to0}\frac{\cos t-e^{-\frac{t^2}{2}}}{t^4}.$$
【分析1】用洛必达法则：$I=\lim\limits_{t\to0}\dfrac{-\sin t+te^{-\frac{t^2}{2}}}{4t^3}=\lim\limits_{t\to0}\dfrac{-\cos t+e^{-\frac{t^2}{2}}-t^2e^{-\frac{t^2}{2}}}{12t^2}$，分项得
$$I=\lim_{t\to0}\frac{1-\cos t}{12t^2}+\lim_{t\to0}\frac{e^{-\frac{t^2}{2}}-1}{12t^2}-\frac{1}{12}=\frac{1}{24}-\frac{1}{24}-\frac{1}{12}=-\frac{1}{12}.$$
【分析2】用泰勒公式：$\cos t=1-\frac{t^2}{2}+\frac{t^4}{24}+o(t^4)$，$e^{-\frac{t^2}{2}}=1-\frac{t^2}{2}+\frac{t^4}{8}+o(t^4)$，相减得 $\cos t-e^{-\frac{t^2}{2}}=\left(\frac{1}{24}-\frac18\right)t^4+o(t^4)=-\frac{1}{12}t^4+o(t^4)$，故 $I=-\frac{1}{12}$。选 (D)。
【评注】$\frac00$ 型极限，若多次洛必达计算不便，而分子分母的泰勒公式易得，应优先用泰勒公式。` },
      { n: 5, q: R`已知 $I=\lim\limits_{x\to0}\dfrac{ax^2+bx-\ln(1-2x+x^2)}{x^2}=5$，则
(A) $a=-4,b=2$。 (B) $a=4,b=-2$。 (C) $a=3,b=-2$。 (D) $a=-3,b=2$。`, a: R`(B)`, sol: R`【分析】$\ln(1-2x+x^2)=\ln(1-x)^2=2\ln(1-x)$。改写条件：
$$I=a+\lim_{x\to0}\frac{bx-2\ln(1-x)}{x^2}=a+I_1=5.$$
【分析1】洛必达：$I_1=\lim\limits_{x\to0}\dfrac{b+\frac{2}{1-x}}{2x}=\lim\limits_{x\to0}\dfrac{(b+2)-bx}{2x(1-x)}$，故 $b=-2$ 时 $I_1=1$（$b\neq-2$ 时 $I_1=\infty$），于是 $1=5-a$，$a=4$。
【分析2】泰勒：$\ln(1-x)=-x-\frac{x^2}{2}+o(x^2)$，故 $bx-2\ln(1-x)=(b+2)x+x^2+o(x^2)$，得 $b=-2$、$1=5-a$，$a=4$。选 (B)。
【评注】先把 $\ln(1-2x+x^2)$ 化为 $2\ln(1-x)$ 是关键；$b\neq-2$ 时分子为一次项，极限为 $\infty$。` },
      { n: 6, q: R`若 $\lim\limits_{x\to0}\left(\dfrac{\sin3x^2+x^2f(x)}{x^6}\right)=0$，则 $\lim\limits_{x\to0}\dfrac{3+f(x)}{x^4}$ 为
(A) 0。 (B) 3。 (C) $\dfrac{9}{2}$。 (D) $\infty$。`, a: R`(C)`, sol: R`【分析1】建立两个式子的关系：
$$\frac{3+f(x)}{x^4}=\frac{3x^2+x^2f(x)}{x^6}=\frac{3x^2-\sin3x^2+\sin3x^2+x^2f(x)}{x^6},$$
故 $\lim\limits_{x\to0}\dfrac{3+f(x)}{x^4}=\lim\limits_{x\to0}\dfrac{3x^2-\sin3x^2}{x^6}+\lim\limits_{x\to0}\dfrac{\sin3x^2+x^2f(x)}{x^6}$。令 $t=3x^2$：$\lim\limits_{x\to0}\dfrac{3x^2-\sin3x^2}{x^6}=\lim\limits_{t\to0^+}\dfrac{t-\sin t}{t^3/27}=\lim\limits_{t\to0^+}\dfrac{9(1-\cos t)}{2t}=\dfrac92$。故原极限 $=\frac92+0=\frac92$。
【分析2】$\sin3x^2=3x^2-\frac16(3x^2)^3+o(x^6)=3x^2-\frac92x^6+o(x^6)$，代入得 $\lim\limits_{x\to0}\dfrac{3+f(x)}{x^4}-\dfrac92=0$，即 $\dfrac92$。选 (C)。
【评注】$\sin t=t-\frac{t^3}{6}+o(t^3)$，令 $t=3x^2$ 得三阶项 $\frac92x^6$。` },
      { n: 7, q: R`下列各题计算过程中正确无误的是
(A) 数列极限 $\lim\limits_{n\to\infty}\dfrac{\ln n}{n}=\lim\limits_{n\to\infty}\dfrac{(\ln n)'}{n'}=\lim\limits_{n\to\infty}\dfrac{1}{n}=0$。
(B) $\lim\limits_{x\to1}\dfrac{\sin\pi x}{3x^2-2x-1}=\lim\limits_{x\to1}\dfrac{\pi\cos\pi x}{6x-2}=\lim\limits_{x\to1}\dfrac{-\pi^2\sin\pi x}{6}=0$。
(C) $\lim\limits_{x\to0}\dfrac{x^2\sin\frac1x}{\sin x}=\lim\limits_{x\to0}\dfrac{2x\sin\frac1x-\cos\frac1x}{\cos x}$ 不存在。
(D) $\lim\limits_{x\to0}\dfrac{x+\sin x}{x-\sin x}=\lim\limits_{x\to0}\dfrac{1+\cos x}{1-\cos x}=\infty$。`, a: R`(D)`, sol: R`【分析1】(A) 错：$n$ 是正整数，对数列没有导数概念，不能直接用洛必达法则。
(B) 错：$\lim\limits_{x\to1}\dfrac{\pi\cos\pi x}{6x-2}$ 已不是未定式，不能再用洛必达法则。
(C) 错：用洛必达法则求 $\frac00$ 型极限时，若 $\lim\frac{f'(x)}{g'(x)}$ 不存在也不为 $\infty$，则法则失效，不能推出原极限不存在（事实上该极限存在）。
(D) 正确：当 $\lim\frac{f'(x)}{g'(x)}=\infty$ 时，$\lim\frac{f(x)}{g(x)}=\infty$，故应选 (D)。
【评注】(A) 应先把数列极限化为函数极限再洛必达；(B) 第一次洛必达后应代入得 $-\frac\pi4$；(C) 用等价无穷小：$\lim\frac{x}{\sin x}\cdot\lim x\sin\frac1x=1\times0=0$。` },
      { n: 8, q: R`下列叙述正确的是
(A) 如果 $f(x)$ 在 $x_0$ 的任意空心邻域内无界，则 $\lim\limits_{x\to x_0}f(x)=\infty$。
(B) 如果 $\lim\limits_{x\to x_0}f(x)=\infty$，则 $f(x)$ 在 $x_0$ 的任意空心邻域内无界。
(C) $\lim\limits_{x\to x_0}f(x)$ 不存在，则 $\lim\limits_{x\to x_0}f(x)=\infty$。
(D) 如果 $\lim\limits_{x\to x_0}f(x)=0$，则 $\lim\limits_{x\to x_0}\dfrac{1}{f(x)}=\infty$。`, a: R`(B)`, sol: R`【分析1】由 $\lim\limits_{x\to x_0}f(x)=\infty$：对任意 $M>0$，存在 $\delta>0$，当 $0<|x-x_0|<\delta$ 时 $|f(x)|>M$，故 $f$ 在 $x_0$ 的任意空心邻域内无界，(B) 正确。
【分析2】举反例说明 (A)(C)(D) 均不成立。取 $f(x)=\frac1x\sin\frac1x$，$x_n=\frac{1}{2n\pi+\frac\pi2}$、$y_n=\frac{1}{n\pi}$，则 $x_n,y_n\to0$，$\lim f(x_n)=+\infty$、$\lim f(y_n)=0$。故 $f$ 在 $x=0$ 任意空心邻域无界，但 $x\to0$ 时不是无穷大量，且 $\lim\limits_{x\to0}f(x)$ 不存在，(A)(C) 错。取 $f(x)=0$，则 $\lim\limits_{x\to0}f(x)=0$ 但 $\frac1{f(x)}$ 无定义，(D) 错。选 (B)。
【评注】(1) 若 $\lim\limits_{x\to x_0}f(x)=0$ 且 $f(x)\neq0$，则 $\lim\limits_{x\to x_0}\frac1{f(x)}=\infty$。
(2) 无穷大量必无界，但无界未必是无穷大量。
(3) $f$ 在 $x_0$ 的任意空心邻域无界 $\iff$ 存在 $x_n\to x_0$ 使 $f(x_n)\to\infty$。` },
      { n: 9, q: R`设有下列命题
① 数列 $\{x_n\}$ 收敛（即 $\exists$ 极限 $\lim\limits_{n\to\infty}x_n$），则 $x_n$ 有界。
② 数列极限 $\lim\limits_{n\to\infty}x_n=a\Leftrightarrow\lim\limits_{n\to\infty}x_{n+l}=a$。其中 $l$ 为某个确定的正整数。
③ 数列 $\lim\limits_{n\to\infty}x_n=a\Leftrightarrow\lim\limits_{n\to\infty}x_{2n-1}=\lim\limits_{n\to\infty}x_{2n}=a$。
④ 数列极限 $\lim\limits_{n\to\infty}x_n\exists\Leftrightarrow\lim\limits_{n\to\infty}\dfrac{x_{n+1}}{x_n}=1$。
则以上命题中正确的个数是
(A) 1。 (B) 2。 (C) 3。 (D) 4。`, a: R`(C)`, sol: R`【分析】① 正确（收敛必有界，基本定理）。
②、③ 正确：$x_{n+l}$ 是去掉 $x_n$ 的前 $l$ 项，$x_{2n-1}$ 与 $x_{2n}$ 一起涵盖了 $x_n$ 的所有项。
④ 错：例如 $x_n=n$，$\lim\limits_{n\to\infty}\dfrac{x_{n+1}}{x_n}=\lim\limits_{n\to\infty}\dfrac{n+1}{n}=1$，但 $\lim\limits_{n\to\infty}x_n=\infty$ 不存在。
故正确的有 3 个，选 (C)。
【评注】若 $\lim\limits_{n\to\infty}x_n=a\neq0$，则 $\lim\limits_{n\to\infty}\frac{x_{n+1}}{x_n}=1$；若 $a=0$，则 $\lim\frac{x_{n+1}}{x_n}$ 可能不存在。反之 $\lim\frac{x_{n+1}}{x_n}=1$ 推不出 $\{x_n\}$ 收敛。` },
      { n: 10, q: R`设 $x_n\leqslant z_n\leqslant y_n$，且 $\lim\limits_{n\to\infty}(y_n-x_n)=0$，则 $\lim\limits_{n\to\infty}z_n$
(A) 存在且等于零。 (B) 存在但不一定等于零。
(C) 不一定存在。 (D) 一定不存在。`, a: R`(C)`, sol: R`【分析】由 $x_n\leqslant z_n\leqslant y_n$ 得 $0\leqslant z_n-x_n\leqslant y_n-x_n$，又 $\lim\limits_{n\to\infty}(y_n-x_n)=0$，故 $\lim\limits_{n\to\infty}(z_n-x_n)=0$，但这并不保证 $\lim\limits_{n\to\infty}z_n$ 存在。
例如取 $x_n=(-1)^n+\dfrac{1}{n+1}$，$y_n=(-1)^n+\dfrac1n$，$z_n=(-1)^n+\dfrac12\left(\dfrac1{n+1}+\dfrac1n\right)$，则 $x_n\leqslant z_n\leqslant y_n$ 且 $\lim(y_n-x_n)=0$，但 $z_n$ 的极限不存在。选 (C)。
【评注】夹逼定理要求 $\lim x_n=\lim y_n=a$（两端极限存在且相等）；仅 $\lim(y_n-x_n)=0$ 不够。` },
      { n: 11, q: R`下列命题中正确的是
(A) 若 $\lim\limits_{x\to x_0}f(x)\geqslant\lim\limits_{x\to x_0}g(x)\Rightarrow\exists\delta>0$，当 $0<|x-x_0|<\delta$ 时 $f(x)\geqslant g(x)$。
(B) 若 $\exists\delta>0$ 使得当 $0<|x-x_0|<\delta$ 时有 $f(x)>g(x)$ 且 $\lim\limits_{x\to x_0}f(x)=A_0$，$\lim\limits_{x\to x_0}g(x)=B_0$ 均 $\exists$，则 $A_0>B_0$。
(C) 若 $\exists\delta>0$，当 $0<|x-x_0|<\delta$ 时 $f(x)>g(x)\Rightarrow\lim\limits_{x\to x_0}f(x)\geqslant\lim\limits_{x\to x_0}g(x)$。
(D) 若 $\lim\limits_{x\to x_0}f(x)>\lim\limits_{x\to x_0}g(x)\Rightarrow\exists\delta>0$，当 $0<|x-x_0|<\delta$ 时有 $f(x)>g(x)$。`, a: R`(D)`, sol: R`【分析】(D) 正确，这正是极限的不等式性质中「严格不等」的保号性结论。
(A) 错：由 $\lim f=\lim g$ 不能判断 $x_0$ 附近 $f$ 与 $g$ 的大小关系。
(B) 错：由 $f>g$（局部）只能得 $A_0\geqslant B_0$（可取等号）。
(C) 错：没有假设两个极限存在。
选 (D)。
【评注】「函数值严格大」只能推出「极限 ≥」；要推出「极限严格大」需极限存在且差为正，这正是 (D)。` },
      { n: 12, q: R`设 $x\to0$ 时 $ax^2+bx+c-\cos x$ 是比 $x^2$ 高阶无穷小，其中 $a,b,c$ 为常数，则
(A) $a=\dfrac12,b=0,c=1$。 (B) $a=-\dfrac12,b=0,c=0$。
(C) $a=-\dfrac12,b=0,c=1$。 (D) $a=\dfrac12,b=0,c=0$。`, a: R`(C)`, sol: R`【分析1】由题意 $\lim\limits_{x\to0}(ax^2+bx+c-\cos x)=c-1=0$，得 $c=1$。又
$$\lim_{x\to0}\frac{ax^2+bx+c-\cos x}{x^2}=\lim_{x\to0}\left(a+\frac bx+\frac{1-\cos x}{x^2}\right)=0,$$
而 $\lim\limits_{x\to0}\left(a+\frac bx+\frac{1-\cos x}{x^2}\right)=\begin{cases}\infty,&b\neq0,\\a+\dfrac12,&b=0,\end{cases}$，故 $b=0$、$a=-\dfrac12$。
【分析2】$\cos x=1-\frac{x^2}{2}+o(x^2)$，故 $ax^2+bx+c-\cos x=(c-1)+bx+\left(a+\frac12\right)x^2+o(x^2)$，要使其为 $x^2$ 的高阶无穷小，需 $c=1,b=0,a=-\frac12$。选 (C)。
【评注】「比 $x^2$ 高阶」意味着常数项、一次项、二次项系数全为零。` },
      { n: 13, q: R`当 $x\to0$ 时下列无穷小中阶数最高的是
(A) $(1+x)^{x^2}-1$。 (B) $e^{x^4-2x}-1$。 (C) $\int_0^{x^2}\sin t^2\mathrm{d}t$。 (D) $\sqrt{1+2x}-\sqrt[3]{1+3x}$。`, a: R`(C)`, sol: R`【分析】逐一分析阶数。
(A) $(1+x)^{x^2}-1\sim x^2\ln(1+x)\sim x^3$，三阶。
(B) $e^{x^4-2x}-1\sim x^4-2x\sim-2x$，一阶。
(C) 待定阶数：$\lim\limits_{x\to0}\dfrac{\int_0^{x^2}\sin t^2dt}{x^k}=\lim\limits_{x\to0}\dfrac{2x\sin x^4}{kx^{k-1}}$，取 $k=6$ 得 $\lim\limits_{x\to0}\dfrac{x\sin x^4}{3x^5}=\dfrac13$，故为六阶。
(D) 用 $(1+t)^\alpha=1+\alpha t+\frac12\alpha(\alpha-1)t^2+o(t^2)$ 得 $\sqrt{1+2x}-\sqrt[3]{1+3x}=\frac12x^2+o(x^2)$，二阶。
故 (C) 阶数最高，选 (C)。
【评注】(C) 用「待定阶数法」（分子用洛必达、令 $k$ 使极限为非零常数）；(D) 也可用两次洛必达。` },
      { n: 14, q: R`设 $x\to a$ 时 $f(x)$ 与 $g(x)$ 分别是 $x-a$ 的 $n$ 阶与 $m$ 阶无穷小，则下列命题
① $f(x)g(x)$ 是 $x-a$ 的 $n+m$ 阶无穷小。
② 若 $n>m$，则 $\dfrac{f(x)}{g(x)}$ 是 $x-a$ 的 $n-m$ 阶无穷小。
③ 若 $n\leqslant m$，则 $f(x)+g(x)$ 是 $x-a$ 的 $n$ 阶无穷小。
④ 若 $f(x)$ 连续，则 $\int_a^xf(t)\mathrm{d}t$ 是 $x-a$ 的 $n+1$ 阶无穷小。
中，正确的个数是
(A) 1。 (B) 2。 (C) 3。 (D) 4。`, a: R`(C)`, sol: R`【分析】记 $\lim\limits_{x\to a}\dfrac{f(x)}{(x-a)^n}=A\neq0$，$\lim\limits_{x\to a}\dfrac{g(x)}{(x-a)^m}=B\neq0$。
① $f(x)g(x)$ 是 $(x-a)$ 的 $n+m$ 阶无穷小，正确。
② 若 $n>m$，$\lim\limits_{x\to a}\dfrac{f(x)}{g(x)}\Big/(x-a)^{n-m}=\dfrac AB\neq0$，正确。
③ 若 $n<m$，$f(x)+g(x)$ 是 $n$ 阶无穷小；但 $n=m$ 时 $f+g$ 可能是 $n$ 阶（$A+B\neq0$）或高于 $n$ 阶（$A+B=0$）。例如 $\sin x$ 与 $-x$ 均是一阶，但 $\sin x-x$ 是三阶。故 ③ 不正确。
④ $\lim\limits_{x\to a}\dfrac{\int_a^xf(t)dt}{(x-a)^{n+1}}=\lim\limits_{x\to a}\dfrac{f(x)}{(n+1)(x-a)^n}=\dfrac{A}{n+1}\neq0$，正确。
正确的有 ①、②、④，共 3 个，选 (C)。
【评注】③ 的「陷阱」在于 $n=m$ 时可能升阶（如 $\sin x-x$）；判断时要用定义严格验证。` },
      { n: 15, q: R`以下极限等式（若右端极限存在，则左端极限存在且相等）成立的个数是
① 设 $\lim\limits_{x\to a}f_i(x)=0\ (i=1,2)$ 且 $f_1(x)\sim f_2(x)\ (x\to a)$，又 $\lim\limits_{x\to a}g(x)=\infty$，则 $\lim\limits_{x\to a}(1+f_1(x))^{g(x)}=\lim\limits_{x\to a}(1+f_2(x))^{g(x)}$。
② 设 $\lim\limits_{x\to a}f_i(x)=\lim\limits_{x\to a}g_i(x)=0$，$f_i(x)>0$，$(0<|x-a|<\delta)$，$i=1,2$，且 $f_1(x)\sim f_2(x)$，$g_1(x)\sim g_2(x)\ (x\to a)$，则 $\lim\limits_{x\to a}f_1(x)^{g_1(x)}=\lim\limits_{x\to a}f_2(x)^{g_2(x)}$。
③ 设 $\lim\limits_{x\to a}f_i(x)=\lim\limits_{x\to a}g_i(x)=0\ (i=1,2)$，$\lim\limits_{x\to a}h(x)=0$，$f_1(x)\sim f_2(x)$，$g_1(x)\sim g_2(x)\ (x\to a)$ 又 $\lim\limits_{x\to a}\dfrac{f_1(x)}{g_1(x)}=r\neq1$，则 $\lim\limits_{x\to a}\dfrac{f_1(x)-g_1(x)}{h(x)}=\lim\limits_{x\to a}\dfrac{f_2(x)-g_2(x)}{h(x)}$。
(A) 0。 (B) 1。 (C) 2。 (D) 3。`, a: R`(D)`, sol: R`【分析】逐一证明 ①、②、③ 成立。
① $(1+f_1(x))^{g(x)}=e^{g(x)\ln(1+f_1(x))}$，而 $g(x)\ln(1+f_1(x))\sim g(x)f_1(x)\sim g(x)f_2(x)\sim g(x)\ln(1+f_2(x))$，故两极限相等。
② $g_1(x)\ln f_1(x)=g_2(x)\ln\left(f_2(x)\cdot\dfrac{f_1(x)}{f_2(x)}\right)=g_2(x)\ln f_2(x)+g_2(x)\ln\dfrac{f_1(x)}{f_2(x)}$，末项 $\to0$，故 $\lim f_1^{g_1}=\lim f_2^{g_2}$。
③ 由 $\dfrac{f_1-g_1}{f_2-g_2}=\dfrac{\left(\frac{f_1}{g_1}-1\right)g_1}{\left(\frac{f_2}{g_2}-1\right)g_2}\to\dfrac{r-1}{r-1}\cdot1=1$，故两式相等。
三个都成立，选 (D)。
【评注】关键是「等价无穷小可替换」的适用条件：① 幂指型对指数整体替换，② 需 $f_i>0$，③ 需 $\lim\frac{f_1}{g_1}\neq1$。` },
      { n: 16, q: R`以下函数 $f(g(x))$ 以 $x=0$ 为第二类间断点的是
(A) $f(u)=\ln(1+u^2)$，$g(x)=\begin{cases}\sin^2x+(x+1)^2&(x\leqslant0)\\x^2+1&(x>0)\end{cases}$
(B) $f(u)=\begin{cases}1-u&(u\leqslant0)\\u^2+1&(u>0)\end{cases}$，$g(x)=2\cos x-1$。
(C) $f(u)=\begin{cases}\dfrac{\ln(1-u^2)}{u}\sin\dfrac1u&(u<0)\\1-\cos\sqrt u&(u\geqslant0)\end{cases}$，$g(x)=\begin{cases}x&(x<0)\\x+\dfrac{\pi^2}{4}&(x\geqslant0)\end{cases}$
(D) $f(u)=e^{u^2}+1$，$g(x)=\begin{cases}\dfrac1x&(x<0)\\0&(x=0)\\\sin\dfrac1x&(x>0)\end{cases}$`, a: R`(D)`, sol: R`【分析】(A)(B) 中 $f(u)$ 在 $(-\infty,+\infty)$ 连续、$g(x)$ 连续，故 $f(g(x))$ 连续，排除。
(C)：$\lim\limits_{x\to0^-}f(g(x))=\lim\limits_{x\to0^-}\left(1-\cos\sqrt{x+\frac{\pi^2}{4}}\right)=1-\cos\frac\pi2=1$；$\lim\limits_{x\to0^+}f(g(x))=\lim\limits_{x\to0^+}\dfrac{\ln(1-x^2)}{x}\sin\dfrac1x=\lim\limits_{x\to0^+}(-x)\sin\dfrac1x=0$。左右极限都存在，$x=0$ 是第一类间断点。
(D)：$\lim\limits_{x\to0^+}f(g(x))=\lim\limits_{x\to0^+}\left(e^{\sin^2\frac1x}+1\right)$ 不存在；或 $\lim\limits_{x\to0^-}f\left(\frac1x\right)=\lim\limits_{x\to0^-}\left(e^{\frac{1}{x^2}}+1\right)=+\infty$，极限不为有限值，故 $x=0$ 是第二类间断点。选 (D)。
【评注】第二类间断点指至少一侧极限不存在（含无穷）。判断复合函数间断点要分别考察左右极限。` },
      { n: 17, q: R`设 $f(x)=\dfrac{1}{\arctan\frac{x-1}{x}}$，则
(A) $x=0$ 与 $x=1$ 都是 $f(x)$ 的第一类间断点。
(B) $x=0$ 与 $x=1$ 都是 $f(x)$ 的第二类间断点。
(C) $x=0$ 是 $f(x)$ 的第一类间断点，$x=1$ 是 $f(x)$ 的第二类间断点。
(D) $x=0$ 是 $f(x)$ 的第二类间断点，$x=1$ 是 $f(x)$ 的第一类间断点。`, a: R`(C)`, sol: R`【分析】$\lim\limits_{x\to0^\pm}\dfrac{x-1}{x}=\mp\infty\Rightarrow\lim\limits_{x\to0^\pm}\arctan\dfrac{x-1}{x}=\mp\dfrac\pi2\Rightarrow\lim\limits_{x\to0^\pm}f(x)=\mp\dfrac2\pi$，左右极限存在且不等，故 $x=0$ 是第一类间断点。
又 $\lim\limits_{x\to1}\dfrac{x-1}{x}=0\Rightarrow\lim\limits_{x\to1}\arctan\dfrac{x-1}{x}=0\Rightarrow\lim\limits_{x\to1}f(x)=\infty$，故 $x=1$ 是第二类间断点。选 (C)。
【评注】$\arctan$ 在 $\pm\infty$ 处分别趋于 $\pm\frac\pi2$；$x=1$ 时分母趋于 0，函数趋于无穷。` },
      { n: 18, q: R`设数列极限函数 $f(x)=\lim\limits_{n\to\infty}\arctan\left(1+\dfrac{x^{2n}}{1+x^n}\right)$，则 $f(x)$ 的定义域 $I$ 和 $f(x)$ 的连续区间 $J$ 分别是
(A) $I=(-\infty,+\infty)$，$J=(-\infty,+\infty)$。
(B) $I=(-1,+\infty)$，$J=(-1,1)\cup(1,+\infty)$。
(C) $I=(-1,+\infty)$，$J=(-1,+\infty)$。
(D) $I=(-1,1)$，$J=(-1,1)$。`, a: R`(B)`, sol: R`【分析】$|x|<1$ 时 $x^{2n}\to0$、$x^n\to0$，$f(x)=\arctan1=\dfrac\pi4$；$x=1$ 时 $f(1)=\arctan\dfrac32$；$x>1$ 时 $\dfrac{x^{2n}}{1+x^n}=\dfrac{x^n}{1/x^n+1}\to+\infty$，$f(x)=\dfrac\pi2$。
$x\leqslant-1$ 时，因 $x^{2n}$ 与 $x^n$ 的符号使极限随子列不同（$x<-1$ 时取偶数项趋于 $\frac\pi2$、奇数项趋于 $-\frac\pi2$），极限不存在；$x=-1$ 时 $\arctan\left(1+\frac{x^{2n}}{1+x^n}\right)$ 无定义。
故 $f$ 的定义域 $I=(-1,+\infty)$，且
$$f(x)=\begin{cases}\dfrac\pi4,&x\in(-1,1),\\[4pt]\arctan\dfrac32,&x=1,\\[4pt]\dfrac\pi2,&x\in(1,+\infty).\end{cases}$$
在 $x=1$ 处左极限 $\frac\pi4\neq f(1)$，故连续区间 $J=(-1,1)\cup(1,+\infty)$。选 (B)。
【评注】$|x|=1$ 与 $|x|>1$ 要分别讨论；$f$ 在 $x=1$ 间断。` },
      { n: 19, q: R`设 $f(x)$ 在点 $x_0$ 的某邻域内有定义，且 $f(x)$ 在 $x_0$ 间断，则在点 $x_0$ 处必定间断的函数是
(A) $f(x)\sin x$。 (B) $f(x)+\sin x$。 (C) $f^2(x)$。 (D) $|f(x)|$。`, a: R`(B)`, sol: R`【分析1】若 $f(x)+\sin x$ 在 $x_0$ 连续，则 $f(x)=(f(x)+\sin x)-\sin x$ 在 $x_0$ 连续，与已知矛盾，故 $f(x)+\sin x$ 必间断。选 (B)。
【分析2】举反例说明 (A)(C)(D) 不对：取 $f(x)=\begin{cases}0,&x\neq0,\\1,&x=0,\end{cases}$，则 $f$ 在 0 间断，但 $f(x)\sin x=0$ 连续（排除 A）；取 $f(x)=\begin{cases}1,&x\geqslant0,\\-1,&x<0,\end{cases}$，则 $f$ 间断，但 $f^2(x)=1$、$|f(x)|=1$ 均连续（排除 C、D）。
【评注】设 $f$ 在 $x_0$ 间断、$g$ 在 $x_0$ 连续，则 $f\pm g$ 在 $x_0$ 间断；但乘积、平方、绝对值可能「修复」间断。` },
      { n: 20, q: R`"$f(x)$ 在 $x_0$ 点连续"是"$|f(x)|$ 在 $x_0$ 点连续"的
(A) 充分条件，但不是必要条件。
(B) 必要条件，但不是充分条件。
(C) 充分必要条件。
(D) 既不是充分，也不是必要条件。`, a: R`(A)`, sol: R`【分析】由「若 $\lim\limits_{x\to x_0}f(x)=a$，则 $\lim\limits_{x\to x_0}|f(x)|=|a|$」知：$f$ 在 $x_0$ 连续 $\Rightarrow|f|$ 在 $x_0$ 连续，故是充分条件。
但 $|f|$ 连续推不出 $f$ 连续：例如 $f(x)=\begin{cases}-1,&x\geqslant0,\\1,&x<0,\end{cases}$ 在 $x=0$ 不连续，而 $|f(x)|=1$ 连续。故不是必要条件。选 (A)。
【易错点】连续性与绝对值的关系是「单向」的：$f$ 连续 $\Rightarrow|f|$ 连续，反之不然。` },
      { n: 21, q: R`设 $f(x)=g(x)\varphi(x)$，其中 $g(x)$、$\varphi(x)$ 在 $x=x_0$ 邻域 $U$ 有定义，$g(x)$ 在 $x=x_0$ 连续，$\varphi(x)$ 在 $x=x_0$ 不连续，但在 $U$ 有界，则 $g(x_0)=0$ 是 $f(x)$ 在 $x=x_0$ 连续的
(A) 充要条件。 (B) 充分非必要条件。 (C) 必要非充分条件。 (D) 既非充分也非必要条件。`, a: R`(A)`, sol: R`【分析】充分性：若 $g(x_0)=0$，则 $\lim\limits_{x\to x_0}g(x)=g(x_0)=0$，而 $\varphi$ 在 $x_0$ 邻域有界，故 $\lim\limits_{x\to x_0}f(x)=\lim\limits_{x\to x_0}g(x)\varphi(x)=0=f(x_0)$，$f$ 在 $x_0$ 连续。
必要性：若 $f$ 在 $x_0$ 连续而 $g(x_0)\neq0$，则 $\varphi(x)=\dfrac{f(x)}{g(x)}$ 在 $x_0$ 连续，与已知矛盾，故 $g(x_0)=0$。
所以 $g(x_0)=0$ 是充要条件，选 (A)。
【易错点】「有界量 × 无穷小 = 无穷小」是充分性的依据；必要性用反证：连续函数之商（分母不为零）仍连续。` },
      { n: 22, q: R`$f(x)$ 在 $x_0$ 处存在左、右导数，则 $f(x)$ 在 $x_0$ 点
(A) 可导。 (B) 连续。 (C) 不可导。 (D) 不连续。`, a: R`(B)`, sol: R`【分析】$f'_+(x_0)$、$f'_-(x_0)$ 均存在 $\Rightarrow f$ 在 $x_0$ 既右连续又左连续 $\Rightarrow f$ 在 $x_0$ 连续，选 (B)。
【评注】左右导数存在且相等才可导；题设只说存在，没说相等，故不能选 (A)，也不能选 (C)。` },
      { n: 23, q: R`下列命题
① $\varphi(x)$ 在 $x=x_0$ 连续，$f(u)$ 在 $u=u_0=\varphi(x_0)$ 连续，则 $f(\varphi(x))$ 在 $x=x_0$ 连续。
② $\varphi(x)$ 在 $x=x_0$ 连续，$f(u)$ 在 $u=u_0=\varphi(x_0)$ 不连续，则 $f(\varphi(x))$ 在 $x=x_0$ 不连续。
③ $\varphi(x)$ 在 $x=x_0$ 不连续，$f(u)$ 在 $u=u_0=\varphi(x_0)$ 连续，则 $f(\varphi(x))$ 在 $x=x_0$ 不连续。
④ $\varphi(x)$ 在 $x=x_0$ 不连续，$f(u)$ 在 $u=u_0=\varphi(x_0)$ 不连续，则 $f(\varphi(x))$ 在 $x=x_0$ 可能连续。
中正确的个数是
(A) 1。 (B) 2。 (C) 3。 (D) 4。`, a: R`(B)`, sol: R`【分析】复合函数连续性中只有一个结论是确定的：① 正确（连续函数的复合仍连续）。其余情形结论不确定：②、③ 错误，④ 正确（可能连续）。故正确的有 ①、④，共 2 个，选 (B)。
【评注】复合函数的连续性「只对连续∘连续成立」；外层或内层不连续时，复合后可能连续也可能不连续，需具体分析。` }
    ]
  };
})();
