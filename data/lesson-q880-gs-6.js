window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q880_s5"] = {
    id: "q880_s5",
    ch: "880题 · 高数 · 第二章 一元函数微分学及其应用",
    title: "基础题·选择题",
    probTitle: "第二章 基础题 · 选择题（含原书解析）",
    book: "李林《精讲精练 880 题（数学二）》2026",
    problems: [
      { n: "(1)", q: R`设 $f(x)=\begin{cases}\dfrac{1-\cos x}{\sqrt x},&x>0,\\x^2\varphi(x),&x\leqslant0,\end{cases}$ 其中 $\varphi(x)$ 是有界函数，则 $f(x)$ 在 $x=0$ 处（ ）。
(A) 可导
(B) 连续，但不可导
(C) 极限存在，但不连续
(D) 极限不存在`, a: R`(A)`, sol: R`【解】$\lim\limits_{x\to0^+}f(x)=\lim\limits_{x\to0^+}\frac{1-\cos x}{\sqrt x}=\lim\limits_{x\to0^+}\frac{\frac12x^2}{\sqrt x}=0$，$\lim\limits_{x\to0^-}f(x)=\lim\limits_{x\to0^-}x^2\varphi(x)=0$，而 $f(0)=0$，故 $f(x)$ 在 $x=0$ 处连续。
又 $f'_+(0)=\lim\limits_{x\to0^+}\frac{1-\cos x}{x\sqrt x}=\lim\limits_{x\to0^+}\frac{\frac12x^2}{x\sqrt x}=0$，$f'_-(0)=\lim\limits_{x\to0^-}\frac{x^2\varphi(x)}{x}=0$，即 $f'_+(0)=f'_-(0)=0$，所以 $f'(0)=0$，选项 A 正确。` },
      { n: "(2)", q: R`设 $f'(x)$ 存在，$a,b$ 为任意实数，则 $\lim\limits_{\Delta x\to0}\dfrac{f(x+a\Delta x)-f(x-b\Delta x)}{\Delta x}=$（ ）。
(A) $(a+b)f'(x)$
(B) $(a-b)f'(x)$
(C) $af'(x)$
(D) $bf'(x)$`, a: R`(A)`, sol: R`【解】
$$\lim_{\Delta x\to0}\frac{f(x+a\Delta x)-f(x-b\Delta x)}{\Delta x}=\lim_{\Delta x\to0}a\cdot\frac{f(x+a\Delta x)-f(x)}{a\Delta x}+\lim_{\Delta x\to0}b\cdot\frac{f(x-b\Delta x)-f(x)}{-b\Delta x}=af'(x)+bf'(x)=(a+b)f'(x).$$
选项 A 正确。` },
      { n: "(3)", q: R`设 $f(x)$ 为连续函数，且 $\lim\limits_{x\to1}\dfrac{f(2x-1)}{x-1}=1$，则 $\lim\limits_{t\to0}\dfrac{f[(1+\sin t)^2]-f(1+\sin t)}{t}=$（ ）。
(A) 0
(B) $\frac12$
(C) 1
(D) 2`, a: R`(B)`, sol: R`【解】由已知 $\lim\limits_{x\to1}f(2x-1)=f(1)=0$，故 $\lim\limits_{x\to1}\frac{f(2x-1)-f(1)}{2x-2}\cdot\frac{2x-2}{x-1}=2f'(1)=1$，从而 $f'(1)=\frac12$。于是
$$\lim_{t\to0}\frac{f[(1+\sin t)^2]-f(1)}{t}-\lim_{t\to0}\frac{f(1+\sin t)-f(1)}{t}=2f'(1)-f'(1)=f'(1)=\frac12.$$
选项 B 正确。` },
      { n: "(4)", q: R`设 $f(x)=\dfrac{\sqrt x}{\sqrt{1+x}+1}$，则 $f(x)$ 在 $x=0$ 处（ ）。
(A) 连续且可导
(B) 右连续但右导数不存在
(C) 右连续且右导数存在
(D) 右极限存在且右导数存在`, a: R`(B)`, sol: R`【解】由 $\lim\limits_{x\to0^+}f(x)=\lim\limits_{x\to0^+}\frac{\sqrt x}{\sqrt{1+x}+1}=0=f(0)$，知 $f(x)$ 右连续。又 $\lim\limits_{x\to0^+}\frac{f(x)-f(0)}{x}=\lim\limits_{x\to0^+}\frac{\sqrt x}{x(\sqrt{1+x}+1)}=\infty$，所以 $f'_+(0)$ 不存在，选项 B 正确。` },
      { n: "(5)", q: R`设 $f(x)=\begin{cases}a\sqrt x,&0\leqslant x\leqslant b,\\\ln x,&x>b\end{cases}$ 在 $(0,+\infty)$ 内可导，在 $x=0$ 处右连续，则（ ）。
(A) $a=\frac2e,b=e^2$
(B) $a=\frac2e,b=e$
(C) $a=\frac1e,b=e^2$
(D) $a=\frac1e,b=e$`, a: R`(A)`, sol: R`【解】由 $f(x)$ 在 $x=b$ 处可导知在 $x=b$ 处连续，故 $\ln b=a\sqrt b$。①
又 $f'_-(b)=\lim\limits_{\Delta x\to0^-}\frac{a\sqrt{b+\Delta x}-a\sqrt b}{\Delta x}=\frac a{2\sqrt b}$，$f'_+(b)=\lim\limits_{\Delta x\to0^+}\frac{\ln(b+\Delta x)-\ln b}{\Delta x}=\frac1b$，由 $f'_-(b)=f'_+(b)$ 得 $\frac a{2\sqrt b}=\frac1b$。②
解①②得 $a=\frac2e,b=e^2$。选项 A 正确。` },
      { n: "(6)", q: R`$f(x)=(x^2+3x+2)|x^3-x|$ 不可导点的个数为（ ）。
(A) 1
(B) 2
(C) 3
(D) 4`, a: R`(B)`, sol: R`【解】$f(x)=(x+2)(x+1)|x+1||x||x-1|$，故 $f(x)$ 有 $x=0,x=1$ 两个不可导点（因 $x=-1$ 处含 $(x+1)|x+1|$ 可导）。选项 B 正确。` },
      { n: "(7)", q: R`下列函数中，在 $x=0$ 处不可导的是（ ）。
(A) $f(x)=|x|\sin|x|$
(B) $f(x)=|x|\sin\sqrt{|x|}$
(C) $f(x)=\cos|x|$
(D) $f(x)=\cos\sqrt{|x|}$`, a: R`(D)`, sol: R`【解】$f'_+(0)=\lim\limits_{x\to0^+}\frac{\cos\sqrt{|x|}-1}{x}=\lim\limits_{x\to0^+}\frac{-\frac12|x|}{x}=-\frac12$，$f'_-(0)=\lim\limits_{x\to0^-}\frac{\cos\sqrt{|x|}-1}{x}=\frac12$，故 $f(x)=\cos\sqrt{|x|}$ 在 $x=0$ 处不可导，选项 D 正确。` },
      { n: "(8)", q: R`设 $f(x)$ 可导且 $f'(x_0)=\frac12$，则当 $\Delta x\to0$ 时，$f(x)$ 在 $x_0$ 处的微分 $dy$ 是 $\Delta x$ 的（ ）无穷小。
(A) 等价
(B) 同阶
(C) 低阶
(D) 高阶`, a: R`(B)`, sol: R`【解】由微分定义 $dy=f'(x_0)\Delta x$，故 $\lim\limits_{\Delta x\to0}\frac{dy}{\Delta x}=\lim\limits_{\Delta x\to0}\frac{\frac12\Delta x}{\Delta x}=\frac12$，选项 B 正确。` },
      { n: "(9)", q: R`设 $f(-x)=-f(x)$，且在 $(0,+\infty)$ 内 $f'(x)>0,f''(x)>0$，则 $f(x)$ 在 $(-\infty,0)$ 内必有（ ）。
(A) $f'(x)<0,f''(x)<0$
(B) $f'(x)<0,f''(x)>0$
(C) $f'(x)>0,f''(x)<0$
(D) $f'(x)>0,f''(x)>0$`, a: R`(C)`, sol: R`【解】由 $f(-x)=-f(x)$ 知 $f(x)$ 是奇函数，故 $f'(x)$ 是偶函数，$f''(x)$ 是奇函数。由 $x\in(0,+\infty)$ 时 $f'(x)>0$ 知 $x\in(-\infty,0)$ 时 $f'(x)>0$；由 $x\in(0,+\infty)$ 时 $f''(x)>0$ 知 $x\in(-\infty,0)$ 时 $f''(x)<0$，选项 C 正确。` },
      { n: "(10)", q: R`设 $f(x)$ 在 $[-1,1]$ 上二阶可导，且 $f''(x)>0,\int_{-1}^1f(x)dx=2$，则 $f(0)$ 的取值范围为（ ）。
(A) $(-\infty,0]$
(B) $(0,+\infty)$
(C) $(-\infty,1)$
(D) $(1,+\infty)$`, a: R`(C)`, sol: R`【解】由泰勒公式 $f(x)=f(0)+f'(0)x+\frac{f''(\xi)}{2}x^2\geqslant f(0)+f'(0)x$（$\xi$ 介于 0 与 $x$ 之间），故
$$\int_{-1}^1f(x)dx\geqslant\int_{-1}^1[f(0)+f'(0)x]dx=2f(0),$$
所以 $f(0)<\frac12\int_{-1}^1f(x)dx=1$，选项 C 正确。` },
      { n: "(11)", q: R`设 $f(x)$ 在 $x=0$ 的某邻域内连续，$f(0)=0,\lim\limits_{x\to0}\dfrac{f(x)}{1-\cos x}=2$，则 $f(x)$ 在 $x=0$ 处（ ）。
(A) 不可导
(B) 可导且 $f'(0)\neq0$
(C) 有极小值
(D) 有极大值`, a: R`(C)`, sol: R`【解】$f'(0)=\lim\limits_{x\to0}\frac{f(x)}{x}=\lim\limits_{x\to0}\frac{f(x)}{1-\cos x}\cdot\frac{1-\cos x}{x}=2\lim\limits_{x\to0}\frac{\frac12x^2}{x}=0$，排除 A、B。又 $\lim\limits_{x\to0}\frac{f(x)}{1-\cos x}=2>0$，由保号性及 $1-\cos x>0$ 知在 $x=0$ 某邻域内 $f(x)>0=f(0)$，故 $f(0)$ 为极小值，选项 C 正确。` },
      { n: "(12)", q: R`$y=(x-1)^2(x-3)^2$ 的拐点个数为（ ）。
(A) 0
(B) 1
(C) 2
(D) 3`, a: R`(C)`, sol: R`【解】$y'=4(x-1)(x-2)(x-3)$，则 $y''$ 是二次函数，最多两个零点。由罗尔定理 $y''$ 在 $(1,2)$ 和 $(2,3)$ 内各有一个零点且两侧变号，故有 2 个拐点，选项 C 正确。` },
      { n: "(13)", q: R`设 $f'(x_0)=f''(x_0)=0,f'''(x_0)>0$，则下列选项正确的是（ ）。
(A) $x_0$ 是 $f(x)$ 的极值点
(B) $f(x_0)$ 是 $f(x)$ 的极大值
(C) $f(x_0)$ 是 $f(x)$ 的极小值
(D) $(x_0,f(x_0))$ 是 $y=f(x)$ 的拐点`, a: R`(D)`, sol: R`【解】$f'''(x_0)=\lim\limits_{x\to x_0}\frac{f''(x)-f''(x_0)}{x-x_0}=\lim\limits_{x\to x_0}\frac{f''(x)}{x-x_0}>0$，由保号性知 $x>x_0$ 时 $f''(x)>0$，$x<x_0$ 时 $f''(x)<0$，即 $f''$ 在 $x_0$ 两侧变号，故 $(x_0,f(x_0))$ 是拐点，选项 D 正确。
【注】A 不正确，如 $f(x)=x^3$，$f'(0)=f''(0)=0,f'''(0)=6\neq0$，但 $x=0$ 不是极值点。` },
      { n: "(14)", q: R`设 $f(x)$ 有一阶连续导数，$F(x)=f(x)(1+|\sin x|)$，则 $f(0)=0$ 是 $F(x)$ 在 $x=0$ 处可导的（ ）。
(A) 必要非充分条件
(B) 充分非必要条件
(C) 充分必要条件
(D) 既非充分又非必要条件`, a: R`(C)`, sol: R`【解】$F'_+(0)=\lim\limits_{x\to0^+}\frac{f(x)(1+\sin x)-f(0)}{x}=f'_+(0)+f(0)$，$F'_-(0)=f'_-(0)-f(0)$，故 $F(x)$ 在 $x=0$ 处可导 $\Leftrightarrow F'_+(0)=F'_-(0)\Leftrightarrow f(0)=0$。选项 C 正确。` },
      { n: "(15)", q: R`设 $f(x)$ 在 $x=a$ 处连续，则 $f(x)$ 在 $x=a$ 处可导的一个充分条件是（ ）。
(A) $\lim\limits_{x\to\infty}x\left[f\left(a+\frac1{|x|}\right)-f(a)\right]$ 存在
(B) $\lim\limits_{x\to0}\frac{f(a+x^3)-f(a)}{x^2}$ 存在
(C) $\lim\limits_{\Delta x\to0}\frac{f(a+\Delta x)-f(a-\Delta x)}{2\Delta x}$ 存在
(D) $\lim\limits_{x\to0}\frac{f(a+x^3)-f(a)}{\tan x^3}$ 存在`, a: R`(D)`, sol: R`【解】$\lim\limits_{x\to0}\frac{f(a+x^3)-f(a)}{\tan x^3}=\lim\limits_{x\to0}\frac{f(a+x^3)-f(a)}{x^3}=f'(a)$，故 D 是充分条件。
A 只给出 $f'_+(a)$；B 中 $\frac{f(a+x^3)-f(a)}{x^3}\cdot x$ 存在不能保证 $\frac{f(a+x^3)-f(a)}{x^3}$ 存在；C 不能保证左右导数各自存在。选项 D 正确。` },
      { n: "(16)", q: R`设 $f(x)$ 有任意阶导数，且 $f'(x)=f^2(x)$，则 $f^{(n)}(x)=$（ ）$(n>3)$。
(A) $n!f^{n+1}(x)$
(B) $nf^{n+1}(x)$
(C) $f^{2n}(x)$
(D) $n!f^{2n}(x)$`, a: R`(A)`, sol: R`【解】由 $f'(x)=f^2(x)$，$f''(x)=2f(x)f'(x)=2f^3(x)$，$f'''(x)=3\cdot2f^2(x)f'(x)=3!f^4(x)$，归纳得 $f^{(n)}(x)=n!f^{n+1}(x)$，选项 A 正确。` },
      { n: "(17)", q: R`设 $y=\ln(1-2x)$，则 $y^{(10)}=$（ ）。
(A) $\frac{-9!}{(1-2x)^{10}}$
(B) $\frac{9!}{(1-2x)^{10}}$
(C) $\frac{-9!\cdot2^{10}}{(1-2x)^{10}}$
(D) $\frac{10!\cdot2^9}{(1-2x)^{10}}$`, a: R`(C)`, sol: R`【解】$y'=(1-2x)^{-1}\cdot(-2)$，$y''=(-1)(1-2x)^{-2}(-2)^2$，归纳得 $y^{(10)}=\frac{-9!\cdot2^{10}}{(1-2x)^{10}}$，选项 C 正确。` },
      { n: "(18)", q: R`设 $\delta>0,f(x)$ 在 $(-\delta,\delta)$ 内有定义，当 $x\in(-\delta,\delta)$ 时，有 $|f(x)|\leqslant x^2$，则 $x=0$ 是 $f(x)$ 的（ ）。
(A) 间断点
(B) 连续但不可导点
(C) 可导点且 $f'(0)=0$
(D) 可导点且 $f'(0)\neq0$`, a: R`(C)`, sol: R`【解】由 $|f(0)|\leqslant0$ 知 $f(0)=0$。又 $0\leqslant\left|\frac{f(x)-f(0)}{x}\right|\leqslant\frac{x^2}{|x|}=|x|$，由夹逼准则 $\lim\limits_{x\to0}\left|\frac{f(x)}{x}\right|=0$，故 $f'(0)=0$，选项 C 正确。` },
      { n: "(19)", q: R`设 $f(x)$ 连续，且 $f'(x_0)>0$，则存在 $\delta>0$，使得（ ）。
(A) 对任意 $x\in(x_0-\delta,x_0)$，有 $f(x)>f(x_0)$
(B) 对任意 $x\in(x_0,x_0+\delta)$，有 $f(x)>f(x_0)$
(C) $f(x)$ 在 $(x_0-\delta,x_0)$ 内单调减少
(D) $f(x)$ 在 $(x_0,x_0+\delta)$ 内单调增加`, a: R`(B)`, sol: R`【解】由 $f'_+(x_0)=\lim\limits_{x\to x_0^+}\frac{f(x)-f(x_0)}{x-x_0}>0$ 及保号性知 $x\in(x_0,x_0+\delta)$ 时 $f(x)>f(x_0)$，选项 B 正确。同理 $x\in(x_0-\delta,x_0)$ 时 $f(x)<f(x_0)$，A 错。由 $f'(x_0)>0$ 不能推出单调性，C、D 错。` },
      { n: "(20)", q: R`已知 $y=x^3+ax^2+bx+c$ 在 $x=-2$ 处取得极值，且与直线 $y=-3x+3$ 相切于点 $(1,0)$，则（ ）。
(A) $a=1,b=-8,c=6$
(B) $a=-1,b=-8,c=-6$
(C) $a=1,b=8,c=-6$
(D) $a=-1,b=8,c=-6$`, a: R`(A)`, sol: R`【解】由 $y'(-2)=0,y'(1)=-3,y(1)=0$ 得 $\begin{cases}12-4a+b=0,\\3+2a+b=-3,\\1+a+b+c=0,\end{cases}$ 解得 $a=1,b=-8,c=6$，选项 A 正确。` },
      { n: "(21)", q: R`设 $f'(x)=\dfrac{(x^2-1)(x+3)}{\sqrt{1+x^2}}$，则 $f(x)$（ ）。
(A) 在 $x=1,x=-3$ 处取得极大值，在 $x=-1$ 处取得极小值
(B) 在 $x=-1$ 处取得极大值，在 $x=1,x=-3$ 处取得极小值
(C) 在 $x=-1,x=1,x=-3$ 处都取得极小值
(D) 在 $x=-1,x=-3,x=1$ 处都取得极大值`, a: R`(B)`, sol: R`【解】$f'(x)$ 有 $x=-1,1,-3$ 三个零点。从 $x=-3$ 左侧到右侧 $f'$ 由负变正，故 $x=-3$ 为极小值点；同理 $x=-1$ 为极大值点，$x=1$ 为极小值点，选项 B 正确。` },
      { n: "(22)", q: R`设可导函数 $y=y(x)$ 由 $\begin{cases}x=\arctan t,\\y=\ln(1-t^2)-\sin y\end{cases}$ 确定，则（ ）。
(A) $x=0$ 是 $y=y(x)$ 的极小值点
(B) $x=0$ 是 $y=y(x)$ 的极大值点
(C) 在 $x=0$ 的邻域 $(-\delta,0)$ 内 $y=y(x)$ 单调递减
(D) 在 $x=0$ 的邻域 $(0,\delta)$ 内 $y=y(x)$ 单调递增`, a: R`(B)`, sol: R`【解】$\frac{dx}{dt}=\frac1{1+t^2}$；由 $y=\ln(1-t^2)-\sin y$ 对 $t$ 求导得 $\frac{dy}{dt}=\frac{-2t}{(1-t^2)(1+\cos y)}$。当 $x=0$ 时 $t=0,y=0$，故
$$\frac{dy}{dx}=\frac{-2t(1+t^2)}{(1-t^2)(1+\cos y)}\begin{cases}>0,&-\delta<x<0,\\=0,&x=0,\\<0,&0<x<\delta.\end{cases}$$
所以 $x=0$ 是 $y=y(x)$ 的极大值点，选项 B 正确。` },
      { n: "(23)", q: R`曲线 $y=\dfrac{1+e^{-x^2}}{1-e^{-x^2}}$ 渐近线的条数为（ ）。
(A) 0
(B) 1
(C) 2
(D) 3`, a: R`(C)`, sol: R`【解】$\lim\limits_{x\to\infty}y=1$，有水平渐近线 $y=1$；$\lim\limits_{x\to0}y=+\infty$，有铅直渐近线 $x=0$，共 2 条，选项 C 正确。` },
      { n: "(24)", q: R`设 $f(x)$ 为连续函数，且 $\lim\limits_{x\to+\infty}e^x[1+x+f(x)]$ 存在，则曲线 $y=f(x)$ 有斜渐近线（ ）。
(A) $y=x$
(B) $y=-x$
(C) $y=x+1$
(D) $y=-x-1$`, a: R`(D)`, sol: R`【解】由 $\lim\limits_{x\to+\infty}e^x[1+x+f(x)]=\lim\limits_{x\to+\infty}\frac{1+x+f(x)}{e^{-x}}$ 存在，知 $\lim\limits_{x\to+\infty}[f(x)+x+1]=0$，即 $\lim\limits_{x\to+\infty}[f(x)-(-x-1)]=0$，故 $y=f(x)$ 有斜渐近线 $y=-x-1$，选项 D 正确。
【注】若 $y=f(x)$ 有斜渐近线 $y=kx+b$，则 $\lim\limits_{x\to\infty}[f(x)-(kx+b)]=0$。` },
      { n: "(25)", q: R`曲线 $y=\sqrt{x^2-a^2}$ 的渐近线的条数为（ ）。
(A) 0
(B) 1
(C) 2`, a: R`(C) 2 条`, sol: R`【解】曲线只存在斜渐近线。$\lim\limits_{x\to+\infty}\frac yx=1$，$\lim\limits_{x\to+\infty}(y-x)=\lim\limits_{x\to+\infty}\frac{-a^2}{\sqrt{x^2-a^2}+x}=0$，故 $y=x$ 是斜渐近线；又 $\lim\limits_{x\to-\infty}\frac yx=-1$，$\lim\limits_{x\to-\infty}(y+x)=\lim\limits_{x\to-\infty}\frac{-a^2}{\sqrt{x^2-a^2}-x}=0$，故 $y=-x$ 也是斜渐近线。共 2 条，选项 C 正确。` }
    ]
  };
})();
