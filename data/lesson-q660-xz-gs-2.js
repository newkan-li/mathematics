window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q660_s1"] = {
    id: "q660_s1",
    ch: "660题 · 选择题 · 高等数学",
    title: "选择题 第 24–50 题",
    probTitle: "选择题（含原书详解）",
    book: "《数学基础过关660题（数学二）》",
    problems: [
      { n: 24, q: R`设 $f(x)=e^{\frac{x^2}{2}}\int_x^{+\infty}e^{-\frac{t^2}{2}}\mathrm{d}t\ (x\in(-\infty,+\infty))$，则
(A) $f(x)$ 在 $(-\infty,0]$ 有界，在 $[0,+\infty)$ 无界。
(B) $f(x)$ 在 $(-\infty,0]$ 无界，在 $[0,+\infty)$ 有界。
(C) $f(x)$ 在 $(-\infty,0]$、$[0,+\infty)$ 均有界。
(D) $f(x)$ 在 $(-\infty,0]$、$[0,+\infty)$ 均无界。`, a: R`(B)`, sol: R`【分析】$f$ 在 $(-\infty,+\infty)$ 可导。考察两端极限：
$$\lim_{x\to+\infty}f(x)=\lim_{x\to+\infty}\frac{\int_x^{+\infty}e^{-\frac{t^2}{2}}dt}{e^{-\frac{x^2}{2}}}\xlongequal{\frac00}\lim_{x\to+\infty}\frac{-e^{-\frac{x^2}{2}}}{-xe^{-\frac{x^2}{2}}}=0,$$
故 $f$ 在 $[0,+\infty)$ 有界。
而 $\lim\limits_{x\to-\infty}e^{\frac{x^2}{2}}=+\infty$，$\lim\limits_{x\to-\infty}\int_x^{+\infty}e^{-\frac{t^2}{2}}dt=\int_{-\infty}^{+\infty}e^{-\frac{t^2}{2}}dt=\sqrt{2\pi}$，故 $\lim\limits_{x\to-\infty}f(x)=+\infty$，$f$ 在 $(-\infty,0]$ 无界。选 (B)。
【评注】若 $f$ 在 $[a,+\infty)$ 连续且 $\lim\limits_{x\to+\infty}f(x)=A$ 存在，则 $f$ 在 $[a,+\infty)$ 有界；同理左端亦然。` },
      { n: 25, q: R`设 $f(x)$ 在 $[a,+\infty)$ 连续，则"$\exists x_n\in[a,+\infty)$ 有 $\lim\limits_{n\to\infty}x_n=+\infty$ 且 $\lim\limits_{n\to\infty}f(x_n)=\infty$"是"$f(x)$ 在 $[a,+\infty)$ 无界"的
(A) 充分非必要条件。 (B) 必要非充分条件。 (C) 充要条件。 (D) 既非充分又非必要条件。`, a: R`(C)`, sol: R`【分析】充分性：若存在 $x_n\to+\infty$ 使 $f(x_n)\to\infty$，而 $f$ 有界（$|f|\le M$），则 $|f(x_n)|\le M$ 与 $f(x_n)\to\infty$ 矛盾，故 $f$ 无界。
必要性：若 $f$ 在 $[a,+\infty)$ 无界，则对每个自然数 $n$，$f$ 在 $[n,+\infty)$ 无界，故存在 $x_n\in[n,+\infty)$ 使 $|f(x_n)|>n$，于是 $x_n\to+\infty$ 且 $f(x_n)\to\infty$。
故为充要条件，选 (C)。
【评注】「无界」的数列刻画：存在 $x_n\to\infty$ 使 $f(x_n)\to\infty$（与「在一点附近无界」的刻画类似）。` },
      { n: 26, q: R`下列函数中在 $[1,+\infty)$ 无界的是
(A) $f(x)=x^2\sin\dfrac{1}{x^2}$。 (B) $f(x)=\sin x^2+\dfrac{\ln^2x}{\sqrt{x}}$。
(C) $f(x)=x\cos\sqrt{x}+x^2e^{-x}$。 (D) $f(x)=\dfrac{\arctan\frac1x}{x^2}$。`, a: R`(C)`, sol: R`【分析1】取 $x_n=n^2\pi^2\to+\infty$，对 (C)：
$$\lim_{n\to\infty}f(x_n)=\lim_{n\to\infty}\left(n^2\pi^2\cos n\pi+n^4\pi^4e^{-n^2\pi^2}\right)=\infty,$$
故 (C) 在 $[1,+\infty)$ 无界。
【分析2】(A)(B)(D) 在 $[1,+\infty)$ 连续且极限存在：$\lim\limits_{x\to+\infty}x^2\sin\dfrac1{x^2}=1$；$\lim\limits_{x\to+\infty}\dfrac{\ln^2x}{\sqrt{x}}=0$；$\lim\limits_{x\to+\infty}\dfrac{\arctan\frac1x}{x^2}=0$，故 (A)(B)(D) 均有界。选 (C)。
【评注】判断无界要找一列 $x_n\to\infty$ 使 $f(x_n)\to\infty$；有界可用「连续 + 端极限存在」。` },
      { n: 27, q: R`以下函数 $f(x)$ 在区间 $[-1,2]$ 无界的是
(A) $f(x)=\begin{cases}(1+x)^{\frac1x}&(x\neq0)\\1&(x=0)\end{cases}$。
(B) $f(x)=\begin{cases}\dfrac{e^{\frac1x}+1}{e^{\frac1x}-1}&(x\neq0)\\1&(x=0)\end{cases}$。
(C) $f(x)=\begin{cases}\left(1+\dfrac{1}{|x|}\right)^x&(x\neq0)\\1&(x=0)\end{cases}$。
(D) $f(x)=\begin{cases}\left(1+\dfrac{1}{|x|}\right)^{\frac1x}&(x\neq0)\\1&(x=0)\end{cases}$。`, a: R`(D)`, sol: R`【分析】$f$ 在 $[-1,2]$ 除 $x=0$ 外连续，有界性取决于 $x=0$ 处是否连续及间断类型。
【方法1】证 (A)(B)(C) 有界：(A) $\lim\limits_{x\to0}(1+x)^{\frac1x}=e$，$x=0$ 为可去间断点；(B) $\lim\limits_{x\to0^+}f=1$、$\lim\limits_{x\to0^-}f=-1$，跳跃间断点；(C) $\lim\limits_{x\to0}e^{x\ln(1+\frac1{|x|})}=e^0=1=f(0)$，连续。故 (A)(B)(C) 在 $[-1,2]$ 有界。
【方法2】证 (D) 无界：$\lim\limits_{x\to0^+}f(x)=\lim\limits_{x\to0^+}e^{\frac1x\ln(1+\frac1x)}=+\infty$，故 (D) 无界。选 (D)。
【评注】(1) $\lim\limits_{x\to0^+}e^{\frac1x}=+\infty$、$\lim\limits_{x\to0^-}e^{\frac1x}=0$。
(2) $f$ 在 $[a,b]$ 上除一点外连续且该点为第一类间断点，则 $f$ 在 $[a,b]$ 有界；若某侧极限为 $\infty$ 则无界。` },
      { n: 28, q: R`设 $f(x)=\begin{cases}\dfrac{1-\cos x^2}{x^3},&x>0,\\g(x)\arcsin^2x,&x\leqslant0,\end{cases}$ 其中 $g(x)$ 是有界函数，则 $f(x)$ 在 $x=0$ 处
(A) 极限不存在。 (B) 极限存在，但不连续。
(C) 连续，但不可导。 (D) 可导。`, a: R`(C)`, sol: R`【分析】$f(0)=0$。
$f'_+(0)=\lim\limits_{x\to0^+}\dfrac{1-\cos x^2}{x^4}=\lim\limits_{x\to0^+}\dfrac{\frac12x^4}{x^4}=\dfrac12$（故右连续）。
$f'_-(0)=\lim\limits_{x\to0^-}g(x)\dfrac{\arcsin^2x}{x}=0$（有界量乘无穷小，故左连续）。
左右导数都存在，故 $f$ 在 $x=0$ 连续；但 $f'_+(0)\neq f'_-(0)$，故不可导。选 (C)。
【评注】左右导数都存在 ⇒ 函数在该点连续；但可导还要求左右导数相等。` },
      { n: 29, q: R`设存在常数 $K>0$ 使得 $|f(x_2)-f(x_1)|\leqslant K|x_2-x_1|^2\ (\forall x_1,x_2\in(a,b))$ 则
(A) $f(x)$ 在 $(a,b)$ 有间断点。
(B) $f(x)$ 在 $(a,b)$ 连续，但有不可导点。
(C) $f(x)$ 在 $(a,b)$ 可导，$f'(x)\not\equiv0$。
(D) $f(x)$ 在 $(a,b)$ 可导，$f'(x)\equiv0$。`, a: R`(D)`, sol: R`【分析】对 $\forall x,x_0\in(a,b)$，由条件 $\left|\dfrac{f(x)-f(x_0)}{x-x_0}\right|\le K|x-x_0|$。令 $x\to x_0$，右边趋于 0，故
$$f'(x_0)=\lim_{x\to x_0}\frac{f(x)-f(x_0)}{x-x_0}=0\quad(\forall x_0\in(a,b)),$$
即 $f'(x)\equiv0$。选 (D)。
【评注】条件比 Lipschitz（$|f(x_2)-f(x_1)|\le K|x_2-x_1|$）更强，直接迫使导数为零。` },
      { n: 30, q: R`设 $f(0)=0$，则 $\lim\limits_{x\to0}\dfrac{f(x^2)}{x^2}$ 存在是 $f(x)$ 在 $x=0$ 可导的
(A) 充分非必要条件。 (B) 必要非充分条件。 (C) 充分必要条件。 (D) 既非充分又非必要条件。`, a: R`(B)`, sol: R`【分析】$f'(0)$ 存在 $\iff\lim\limits_{x\to0}\dfrac{f(x)-f(0)}{x}=\lim\limits_{x\to0}\dfrac{f(x)}{x}$ 存在。
而 $\lim\limits_{x\to0}\dfrac{f(x^2)}{x^2}\xlongequal{t=x^2,\ t\to0^+}\lim\limits_{t\to0^+}\dfrac{f(t)-f(0)}{t}\iff f'_+(0)$ 存在。
故 $f'(0)$ 存在 $\Rightarrow f'_+(0)$ 存在 $\Rightarrow\lim\limits_{x\to0}\dfrac{f(x^2)}{x^2}$ 存在；反之不成立（只保证右导数）。选 (B)。
【评注】反例：$f(x)=|x|$，$\lim\limits_{x\to0}\dfrac{f(x^2)}{x^2}=1$，但 $f$ 在 0 不可导。` },
      { n: 31, q: R`设 $y=f(x)$ 在 $(a,b)$ 可微，则下列结论中正确的个数是
① $x_0\in(a,b)$，若 $f'(x_0)\neq0$，则 $\Delta x\to0$ 时 $\mathrm{d}y\big|_{x=x_0}$ 与 $\Delta x$ 是同阶无穷小。
② $\mathrm{d}f(x)$ 只与 $x\in(a,b)$ 有关。
③ $\Delta y=f(x+\Delta x)-f(x)$，则 $\mathrm{d}y\neq\Delta y$。
④ $\Delta x\to0$ 时，$\mathrm{d}y-\Delta y$ 是 $\Delta x$ 的高阶无穷小。
(A) 1。 (B) 2。 (C) 3。 (D) 4。`, a: R`(B)`, sol: R`【分析】① $\lim\limits_{\Delta x\to0}\dfrac{\mathrm{d}y|_{x=x_0}}{\Delta x}=\lim\limits_{\Delta x\to0}\dfrac{f'(x_0)\Delta x}{\Delta x}=f'(x_0)\neq0$，同阶，正确。
② $\mathrm{d}f(x)=f'(x)\Delta x$，与 $x$ 及 $\Delta x$ 都有关，错误。
③ 当 $f(x)=ax+b$ 为一次函数时 $\mathrm{d}y=a\Delta x=\Delta y$，故 $\mathrm{d}y\neq\Delta y$ 不一定成立，错误。
④ 由可微定义 $f(x+\Delta x)-f(x)=f'(x)\Delta x+o(\Delta x)$，即 $\Delta y-\mathrm{d}y=o(\Delta x)$，正确。
正确的有 ①、④，共 2 个，选 (B)。
【评注】$\mathrm{d}y=f'(x)\mathrm{d}x$（不是 $f'(x)$）；$\Delta y=\mathrm{d}y$ 恒成立 $\iff f$ 为线性函数。` },
      { n: 32, q: R`设 $f(x)$ 在 $x=x_0$ 连续且满足
$$f(x)=2(x-x_0)+o((x-x_0))\quad(x\to x_0)$$
则 $y=f(x)$ 在 $x=x_0$ 处的微分 $\mathrm{d}y\big|_{x=x_0}$ 当 $x\to x_0$ 时是 $(x-x_0)$ 的
(A) 同阶非等价无穷小。 (B) 等价无穷小。 (C) 高阶无穷小。 (D) 低阶无穷小。`, a: R`(A)`, sol: R`【分析】由条件 $\lim\limits_{x\to x_0}f(x)=0$，又 $f$ 在 $x_0$ 连续，故 $f(x_0)=0$。条件即
$$f(x)-f(x_0)=2(x-x_0)+o((x-x_0)),$$
由微分定义 $\mathrm{d}y|_{x=x_0}=2(x-x_0)$，它与 $(x-x_0)$ 是同阶非等价无穷小（系数 2）。选 (A)。
【评注】线性主部的系数就是微分；系数为 2，故同阶但不等价。` },
      { n: 33, q: R`如下四个函数中，在 $x=0$ 处可导的函数是
(A) $f(x)=e^{|x|}$。 (B) $f(x)=\arctan|x|$。
(C) $f(x)=\begin{cases}x^{\frac43}\sin\dfrac1x,&(x\neq0),\\0&(x=0).\end{cases}$ (D) $f(x)=\arcsin\sqrt{|x|}$。`, a: R`(C)`, sol: R`【分析1】$|x|$、$\sqrt{|x|}$ 在 0 不可导，且 $e^{|x|}-1\sim|x|$、$\arctan|x|\sim|x|$、$\arcsin\sqrt{|x|}\sim\sqrt{|x|}$，故
(A)(B)：$\lim\limits_{x\to0}\dfrac{f(x)-f(0)}{x}=\lim\limits_{x\to0}\dfrac{|x|}{x}$ 不存在；(D)：$\lim\limits_{x\to0}\dfrac{\sqrt{|x|}}{x}$ 不存在。
【分析2】对 (C)：$\lim\limits_{x\to0}\dfrac{f(x)-f(0)}{x}=\lim\limits_{x\to0}x^{\frac13}\sin\dfrac1x=0$，故 $f'(0)=0$。选 (C)。
【评注】$x^{4/3}\sin\frac1x$ 型函数在 0 可导（因 $4/3>1$）；含 $|x|$、$\sqrt{|x|}$ 的不可导。` },
      { n: 34, q: R`设 $f(x)$ 在 $x=0$ 连续，又 $\lim\limits_{x\to0}\dfrac{f(x)}{|x|}=1$，则
(A) $f(x)$ 在 $x=0$ 可导，$f'(0)=0$。 (B) $f(x)$ 在 $x=0$ 可导，$f'(0)\neq0$。
(C) $f'_+(0)$，$f'_-(0)$ 均存在但 $f'_+(0)\neq f'_-(0)$。 (D) $f'_+(0)$ 与 $f'_-(0)$ 不存在。`, a: R`(C)`, sol: R`【分析】由条件得 $\lim\limits_{x\to0}f(x)=0$，又 $f$ 连续，故 $f(0)=0$。
$$\lim_{x\to0^+}\frac{f(x)}{|x|}=\lim_{x\to0^+}\frac{f(x)-f(0)}{x}=1\Rightarrow f'_+(0)=1,$$
$$\lim_{x\to0^-}\frac{f(x)}{|x|}=\lim_{x\to0^-}\frac{f(x)-f(0)}{-x}=1\Rightarrow f'_-(0)=-1.$$
左右导数存在但不等，选 (C)。
【评注】取 $f(x)=|x|$ 可验证 (A)(B)(D) 不对。` },
      { n: 35, q: R`设 $f(x)=\begin{cases}\arctan x,&x\leqslant1\\a(e^{x^2-1}-x)+\dfrac{\pi}{4},&x>1\end{cases}$ 在 $x=1$ 可导，则 $(a,f'(1))=$
(A) $(1,1)$。 (B) $\left(1,\dfrac12\right)$。 (C) $\left(\dfrac12,\dfrac12\right)$。 (D) $\left(\dfrac12,1\right)$。`, a: R`(C)`, sol: R`【分析】分段点 $x=1$ 处已连续拼接。按求导法则求左右导数：
$$f'_-(1)=(\arctan x)'\big|_{x=1}=\frac{1}{1+x^2}\Big|_{x=1}=\frac12,$$
$$f'_+(1)=\left(a(e^{x^2-1}-x)+\frac\pi4\right)'\big|_{x=1}=a(e^{x^2-1}\cdot2x-1)\big|_{x=1}=a.$$
由 $f'_-(1)=f'_+(1)$ 得 $a=\dfrac12$，$f'(1)=\dfrac12$。选 (C)。
【评注】分段函数在分界点用左右导数定义（或分别求导后取极限）；可导需左右导数相等。` },
      { n: 36, q: R`设 $f(x)=\begin{cases}e^{\frac{1}{x^2-1}},&|x|<1,\\x^4-bx^2+c,&|x|\geqslant1,\end{cases}$ 可导，则 $(b,c)=$
(A) $(2,1)$。 (B) $(1,0)$。 (C) $\left(\dfrac12,-\dfrac12\right)$。 (D) $(3,2)$。`, a: R`(A)`, sol: R`【分析】$|x|\neq1$ 时显然可导。$f$ 是偶函数，只需考察 $x=1$。
连续性：$\lim\limits_{x\to1^-}e^{\frac{1}{x^2-1}}=0$，$\lim\limits_{x\to1^+}(x^4-bx^2+c)=1-b+c=f(1)$，故 $0=1-b+c$。
右导数：$f'_+(1)=(x^4-bx^2+c)'|_{x=1}=4-2b$。
左导数：$f'_-(1)=\lim\limits_{x\to1^-}\dfrac{e^{\frac{1}{x^2-1}}-0}{x-1}\xlongequal{\text{洛必达}}\lim\limits_{x\to1^-}\dfrac{-\frac{2x}{(x^2-1)^2}e^{\frac{1}{x^2-1}}}{1}\xlongequal{t=\frac{1}{x^2-1}}-2\lim\limits_{t\to-\infty}t^2e^t=0$。
由 $f'_+(1)=f'_-(1)$ 得 $4-2b=0$，$b=2$，进而 $c=1$。选 (A)。
【评注】偶函数只需考察 $x=1$；$\lim\limits_{t\to-\infty}t^2e^t=0$。` },
      { n: 37, q: R`设 $a$ 是实数，$f(x)=\begin{cases}\dfrac{1}{(x-1)^a}\cos\dfrac{1}{x-1},&x>1,\\0,&x\leqslant1.\end{cases}$ $f(x)$ 在 $x=1$ 处可导，则 $a$ 的取值为
(A) $a<-1$。 (B) $-1\leqslant a<0$。 (C) $0\leqslant a<1$。 (D) $a\geqslant1$。`, a: R`(A)`, sol: R`【分析】显然 $f'_-(1)=0$。由右导数定义
$$f'_+(1)=\lim_{x\to1^+}\frac{1}{(x-1)^{a+1}}\cos\frac{1}{x-1}=\begin{cases}0,&a+1<0,\\\text{不存在},&a+1\geqslant0.\end{cases}$$
故仅当 $a+1<0$ 即 $a<-1$ 时 $f'(1)$ 存在（$f'(1)=0$）。选 (A)。
【评注】$\lim\limits_{x\to1^+}\dfrac{1}{(x-1)^{a+1}}\cos\dfrac{1}{x-1}$：要使极限存在，须无穷小因子 $\dfrac{1}{(x-1)^{a+1}}\to0$，利用「无穷小 × 有界 = 无穷小」。` },
      { n: 38, q: R`设函数 $f(x)$ 与 $g(x)$ 在 $(a,b)$ 上可导，考虑下列叙述：
① 若 $f(x)>g(x)$，则 $f'(x)>g'(x)$； ② 若 $f'(x)>g'(x)$ 则 $f(x)>g(x)$。
则
(A) ①、② 都正确。 (B) ①、② 都不正确。 (C) ① 正确，但 ② 不正确。 (D) ② 正确，但 ① 不正确。`, a: R`(B)`, sol: R`【分析】① 反例：$f(x)=e^{-x}$，$g(x)=-e^{-x}$，$f>g$ 但 $f'=-e^{-x}<e^{-x}=g'$。
② 反例：$f(x)=-e^{-x}$，$g(x)=e^{-x}$，$f'>g'$ 但 $f<g$。
故 ①、② 都不正确，选 (B)。
【评注】函数值与导数没有必然的大小对应：导数描述变化率。` },
      { n: 39, q: R`设 $f(x)$ 是以 $3$ 为周期的可导函数且 $f'(4)=1$，则 $\lim\limits_{h\to0}\dfrac{f(1+h)-f(1-3\tan h)}{h}$ 等于
(A) $5$。 (B) $3$。 (C) $4$。 (D) $7$。`, a: R`(C)`, sol: R`【分析】$f'$ 也以 3 为周期，故 $f'(1)=f'(4)=1$。
$$I=\lim_{h\to0}\frac{[f(1+h)-f(1)]-[f(1-3\tan h)-f(1)]}{h}$$
$$=\lim_{h\to0}\frac{f(1+h)-f(1)}{h}+\lim_{h\to0}\frac{f(1-3\tan h)-f(1)}{-3\tan h}\cdot\frac{3\tan h}{h}=(1+3)f'(1)=4.$$
选 (C)。
【评注】利用 $\lim\limits_{\varphi(h)\to0}\dfrac{f(a+\varphi(h))-f(a)}{\varphi(h)}=f'(a)$，这里 $\varphi(h)=h$ 或 $-3\tan h$。` },
      { n: 40, q: R`设函数 $f(x)$ 在 $(-\infty,+\infty)$ 存在二阶导数，且 $f(x)=f(-x)$，当 $x<0$ 时有 $f'(x)<0$，$f''(x)>0$，则当 $x>0$ 时，有
(A) $f'(x)<0$，$f''(x)>0$。 (B) $f'(x)>0$，$f''(x)<0$。
(C) $f'(x)>0$，$f''(x)>0$。 (D) $f'(x)<0$，$f''(x)<0$。`, a: R`(C)`, sol: R`【分析】$f(x)=f(-x)$ 表明 $f$ 为偶函数。偶函数的导数是奇函数、奇函数的导数是偶函数，故 $f'$ 为奇函数、$f''$ 为偶函数。
当 $x<0$ 时 $f'(x)<0$，由奇性知 $x>0$ 时 $f'(x)>0$；当 $x<0$ 时 $f''(x)>0$，由偶性知 $x>0$ 时 $f''(x)>0$。选 (C)。
【评注】记住：可导奇函数的导函数为偶函数；可导偶函数的导函数为奇函数；周期函数的导函数同周期。` },
      { n: 41, q: R`设 $\lim\limits_{x\to x_0^+}f'(x)=\lim\limits_{x\to x_0^-}f'(x)=a$，则
(A) $f(x)$ 在 $x=x_0$ 处必可导且 $f'(x_0)=a$。
(B) $f(x)$ 在 $x=x_0$ 处必连续，但未必可导。
(C) $f(x)$ 在 $x=x_0$ 处必有极限但未必连续。
(D) 以上结论都不对。`, a: R`(D)`, sol: R`【分析】$\lim\limits_{x\to x_0^\pm}f'(x)=a$ 只能得 $\lim\limits_{x\to x_0}f'(x)=a$，但不能保证 $f$ 在 $x_0$ 连续、极限存在或可导。
反例：$f(x)=\begin{cases}x+2,&x>0,\\x,&x\leqslant0.\end{cases}$ 当 $x\neq0$ 时 $f'(x)=1$，故 $\lim\limits_{x\to0^\pm}f'(x)=1$，但 $\lim\limits_{x\to0^+}f(x)=2\neq\lim\limits_{x\to0^-}f(x)=0$，$f$ 在 0 不连续、不可导。选 (D)。
【评注】设 $f$ 在 $x_0$ 的空心邻域可导：若 $\lim\limits_{x\to x_0}f'(x)=A$ 且 $f$ 在 $x_0$ 连续，则 $f'(x_0)=A$；若 $f$ 在 $x_0$ 不连续则 $f'(x_0)$ 不存在。` },
      { n: 42, q: R`设 $f(x)$ 在点 $x=a$ 处可导，则函数 $|f(x)|$ 在点 $x=a$ 处不可导的充分必要条件是：
(A) $f(a)=0$，且 $f'(a)=0$。 (B) $f(a)=0$，且 $f'(a)\neq0$。
(C) $f(a)>0$，且 $f'(a)>0$。 (D) $f(a)<0$，且 $f'(a)<0$。`, a: R`(B)`, sol: R`【分析】当 $f(a)\neq0$ 时，由连续性在 $a$ 附近 $|f(x)|=f(x)$ 或 $-f(x)$，与 $f$ 同可导性，排除 (C)(D)。
当 $f(a)=0$ 时，$\lim\limits_{x\to a^\pm}\dfrac{|f(x)|-|f(a)|}{x-a}=\pm|f'(a)|$，右、左导数分别为 $|f'(a)|$ 与 $-|f'(a)|$，不可导 $\iff|f'(a)|\neq0\iff f'(a)\neq0$。故 $f(a)=0$ 且 $f'(a)\neq0$。选 (B)。
【评注】结论：$f(a)\neq0$ 时 $|f|$ 在 $a$ 可导；$f(a)=0$ 时，$f'(a)=0$ 则 $|f|$ 可导，$f'(a)\neq0$ 则不可导。` },
      { n: 43, q: R`设 $f(x)=|(x-1)(x-2)^2(x-3)^3|$，则 $f'(x)$ 不存在的点个数是
(A) $0$。 (B) $1$。 (C) $2$。 (D) $3$。`, a: R`(B)`, sol: R`【分析】设 $\varphi(x)=(x-1)(x-2)^2(x-3)^3$，$f=|\varphi|$。使 $\varphi(x)=0$ 的点 $x=1,2,3$ 可能不可导，需看 $\varphi'$ 在这些点的值。
$$\varphi'(x)=(x-2)^2(x-3)^3+2(x-1)(x-2)(x-3)^3+3(x-1)(x-2)^2(x-3)^2,$$
$\varphi'(1)\neq0$，$\varphi'(2)=0$，$\varphi'(3)=0$。由第 42 题结论，只有 $x=1$ 不可导。选 (B)。
【评注】$|\varphi|$ 在 $\varphi=0$ 且 $\varphi'\neq0$ 处不可导；$\varphi'=0$ 的零点（重根）处可导。` },
      { n: 44, q: R`设连续函数 $F(x)=g(x)\varphi(x)$，$x=a$ 是 $\varphi(x)$ 的跳跃间断点，$g'(a)$ 存在，则 $g(a)=0$，$g'(a)=0$ 是 $F(x)$ 在 $x=a$ 处可导的
(A) 充分必要条件。 (B) 充分非必要条件。 (C) 必要非充分条件。 (D) 非充分非必要条件。`, a: R`(A)`, sol: R`【分析】$\varphi$ 以 $x=a$ 为跳跃间断点，记 $\lim\limits_{x\to a^\pm}\varphi(x)=A_\pm$，$A_+\neq A_-$。
当 $g(a)=0$ 时，
$$F'_\pm(a)=\lim_{x\to a^\pm}\frac{g(x)\varphi(x)}{x-a}=\lim_{x\to a^\pm}\frac{g(x)-g(a)}{x-a}\cdot\varphi(x)=g'(a)A_\pm,$$
故 $F'(a)$ 存在 $\iff F'_+(a)=F'_-(a)\iff g'(a)(A_+-A_-)=0\iff g'(a)=0$。
反之若 $F'(a)$ 存在而 $g(a)\neq0$，则 $\varphi(x)=\dfrac{F(x)}{g(x)}$ 在 $a$ 可导，与 $\varphi$ 跳跃矛盾，故 $g(a)=0$。
所以 $g(a)=0$ 且 $g'(a)=0$ 是充要条件，选 (A)。
【评注】类似结论：$g$ 可导、$\varphi$ 连续但不可导时，$g(a)\neq0$ 则 $g\varphi$ 不可导，$g(a)=0$ 则 $g\varphi$ 可导且导数为 $g'(a)\varphi(a)$。` },
      { n: 45, q: R`函数 $f(x)=(x^2+x-2)|\sin2\pi x|$ 在 $\left(-\dfrac12,\dfrac32\right)$ 区间上不可导点的个数是
(A) $3$。 (B) $2$。 (C) $1$。 (D) $0$。`, a: R`(B)`, sol: R`【分析】设 $g(x)=x^2+x-2$，$\varphi(x)=|\sin2\pi x|$。$g$ 处处可导，$\varphi$ 处处连续但有不可导点。由第 44 题评注，只需考察 $\varphi$ 的不可导点处 $g$ 是否为零。
$\varphi=|\sin2\pi x|$ 在 $\left(-\dfrac12,\dfrac32\right)$ 内的不可导点为 $x=0,\dfrac12,1$，其余可导。而
$$g(0)=-2\neq0,\quad g\left(\frac12\right)\neq0,\quad g(1)=0,$$
故 $f$ 在 $x=0,\dfrac12$ 处不可导，在 $x=1$ 处可导，其余点可导。不可导点共 2 个，选 (B)。
【评注】$|\sin2\pi x|$ 的不可导点即 $\sin2\pi x=0$ 的点；再乘上 $g$，只有 $g\neq0$ 的那些点才不可导。` },
      { n: 46, q: R`设 $x=y-\varepsilon\sin y$（$0<\varepsilon<1$ 为常数），它的反函数是 $y=y(x)$，则 $\dfrac{\mathrm{d}^2y}{\mathrm{d}x^2}=$
(A) $\dfrac{\varepsilon\sin y}{(1-\varepsilon\cos y)^2}$。 (B) $\dfrac{-\varepsilon\sin y}{(1-\varepsilon\cos y)^2}$。
(C) $\dfrac{-\varepsilon\sin y}{(1-\varepsilon\cos y)^3}$。 (D) $\dfrac{\varepsilon\sin y}{(1-\varepsilon\cos y)^3}$。`, a: R`(C)`, sol: R`【分析】由反函数求导法
$$\frac{\mathrm{d}y}{\mathrm{d}x}=\frac{1}{\frac{\mathrm{d}x}{\mathrm{d}y}}=\frac{1}{1-\varepsilon\cos y}.$$
再由复合函数求导法
$$\frac{\mathrm{d}^2y}{\mathrm{d}x^2}=\frac{\mathrm{d}}{\mathrm{d}y}\left(\frac{1}{1-\varepsilon\cos y}\right)\cdot\frac{\mathrm{d}y}{\mathrm{d}x}=\frac{(-1)(\varepsilon\sin y)}{(1-\varepsilon\cos y)^2}\cdot\frac{1}{1-\varepsilon\cos y}=\frac{-\varepsilon\sin y}{(1-\varepsilon\cos y)^3}.$$
选 (C)。
【评注】反函数二阶导：$\dfrac{d^2y}{dx^2}=\dfrac{d}{dy}\left(\dfrac{1}{x'}\right)\cdot\dfrac{1}{x'}$，不要漏乘 $\dfrac{dy}{dx}$。` },
      { n: 47, q: R`下列函数 $f(x)$ 中，导函数 $f'(x)$ 在 $x=0$ 处不连续的是
(A) $f(x)=\begin{cases}x^{\frac13}\sin\dfrac1x,&x\neq0,\\0,&x=0.\end{cases}$
(B) $f(x)=\begin{cases}\dfrac{\sin x}{x},&x\neq0,\\1,&x=0.\end{cases}$
(C) $f(x)=\begin{cases}\dfrac{e^x-1}{x},&x\neq0,\\1,&x=0.\end{cases}$
(D) $f(x)=\begin{cases}\dfrac{\ln(1+x)}{x},&x\neq0,\\1,&x=0.\end{cases}$`, a: R`(A)`, sol: R`【分析】(A) 当 $x\neq0$ 时 $f'(x)=\dfrac13x^{-\frac23}\sin\dfrac1x-x^{-\frac43}\cos\dfrac1x$，当 $x\to0$ 时振荡无极限，故 $f'$ 在 $x=0$ 不连续。选 (A)。
(B)(C)(D) 中 $f$ 在 0 连续，直接求 $\lim\limits_{x\to0}f'(x)$ 为有限值（如 (B)：$\lim\limits_{x\to0}\dfrac{x\cos x-\sin x}{x^2}=0$），故 $f'(0)=0$ 且 $f'$ 在 0 连续。
【评注】结论：$f(x)=|x|^\alpha\sin\dfrac1x$（$f(0)=0$）在 0 连续 $\iff\alpha>0$，可导 $\iff\alpha>1$，$f'$ 在 0 连续 $\iff\alpha>2$。(A) 中 $\alpha=\frac43\in(1,2)$。` },
      { n: 48, q: R`设 $f(x)=|x|\sin^2x$，则使 $f^{(n)}(0)$ 存在的最高阶数 $n=$
(A) $0$。 (B) $1$。 (C) $2$。 (D) $3$。`, a: R`(C)`, sol: R`【分析】$f(x)=\begin{cases}x\sin^2x,&x\geqslant0,\\-x\sin^2x,&x<0,\end{cases}$，故
$$f'(x)=\begin{cases}\sin^2x+x\sin2x,&x\geqslant0,\\-(\sin^2x+x\sin2x),&x<0,\end{cases}\qquad f''(x)=\begin{cases}2\sin2x+2x\cos2x,&x\geqslant0,\\-(2\sin2x+2x\cos2x),&x<0.\end{cases}$$
$f^{(3)}_+(0)=(2\sin2x+2x\cos2x)'|_{x=0}=6$，$f^{(3)}_-(0)=-(2\sin2x+2x\cos2x)'|_{x=0}=-6$，故 $f^{(3)}(0)$ 不存在。最高阶数 $n=2$。选 (C)。
【评注】$f=|x|g(x)$ 型，若 $g(0)=0$，则 $f^{(n)}(0)$ 的阶数由 $g$ 在 0 的展开决定。` },
      { n: 49, q: R`设直线 $y=ax+b$ 同时与曲线 $y=x^2$ 及 $y=\dfrac1x$ 相切，则常数 $a,b$
(A) $a=-4$，$b=-4$。 (B) $a=-3$，$b=-4$。 (C) $a=-4$，$b=-3$。 (D) $a=-3$，$b=-3$。`, a: R`(A)`, sol: R`【分析】设直线与 $y=x^2$ 切于 $(x_1,x_1^2)$、与 $y=\dfrac1x$ 切于 $\left(x_2,\dfrac1{x_2}\right)$。
切线方程分别为 $y=2x_1x-x_1^2$ 与 $y=-\dfrac{1}{x_2^2}x+\dfrac{2}{x_2}$。同一直线，故
$$\begin{cases}a=2x_1=-\dfrac{1}{x_2^2},\\b=-x_1^2=\dfrac{2}{x_2}.\end{cases}$$
解得 $x_1=-2$、$x_2=-\dfrac12$，故 $a=-4$，$b=-4$。选 (A)。
【评注】「公切线」给出斜率相等与截距相等两个方程；$y=\frac1x$ 在 $x_2$ 处切线斜率 $-\frac1{x_2^2}$。` },
      { n: 50, q: R`在曲线 $y=\dfrac1x$（$0<x<+\infty$）上任一点 $P(x,y)$ 处作切线，该切线分别交 $x$ 轴与 $y$ 轴于 $A$ 和 $B$，则
(A) $\overline{PA}<\overline{PB}$。 (B) $\overline{PA}=\overline{PB}$。
(C) $\overline{PA}>\overline{PB}$。 (D) $\overline{PA},\overline{PB}$ 的大小关系与 $P$ 的位置有关。`, a: R`(B)`, sol: R`【分析】点 $P\left(x,\dfrac1x\right)$ 处的切线方程为
$$Y=\frac1x-\frac{1}{x^2}(X-x),\quad\text{即}\quad Y=\frac2x-\frac1{x^2}X.$$
令 $Y=0$ 得 $A(2x,0)$，令 $X=0$ 得 $B\left(0,\dfrac2x\right)$。于是
$$\overline{PA}=\sqrt{x^2+\frac{1}{x^2}},\qquad\overline{PB}=\sqrt{x^2+\frac{1}{x^2}},$$
即 $\overline{PA}=\overline{PB}$。选 (B)。
【评注】双曲线 $y=\frac1x$ 的切线与两坐标轴围成的三角形，切点恰是斜边中点。` }
    ]
  };
})();
