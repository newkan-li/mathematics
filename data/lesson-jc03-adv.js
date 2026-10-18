window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["jc03_s9"] = {
    id: "jc03_s9",
    ch: "第三章 一元函数积分学",
    title: "零基础进阶题",
    probTitle: "第三章 一元函数积分学 零基础进阶题（含原书解析）",
    book: "李永乐《复习全书·基础篇 零基础进阶题》",
    pages: [11, 16],
    img: "assets/img/jcadv",
    problems: [
      { n: "1", q: R`\(\lim\limits_{n\to\infty}\left(\dfrac{1}{n^2+1}+\dfrac{2}{n^2+2^2}+\cdots+\dfrac{n}{n^2+n^2}\right)=\underline{\qquad}\).`, a: "", sol: R`用定积分的定义
\[
\begin{aligned}
&\lim_{n\to\infty}\left(\frac{1}{n^2+1^2}+\frac{2}{n^2+2^2}+\cdots+\frac{n}{n^2+n^2}\right)\\
={}&\lim_{n\to\infty}\frac{1}{n}\left[\frac{\frac{1}{n}}{1+\left(\frac{1}{n}\right)^2}
+\frac{\frac{2}{n}}{1+\left(\frac{2}{n}\right)^2}+\cdots+
\frac{\frac{n}{n}}{1+\left(\frac{n}{n}\right)^2}\right]\\
={}&\int_0^1\frac{x}{1+x^2}\,\mathrm{d}x=\frac{1}{2}\ln 2.
\end{aligned}
\]` },
      { n: "2", q: R`设 \(f(x)\) 是连续函数，且 \(f(x)=3x^2+2\int_0^1 f(t)\,\mathrm{d}t\)，则 \(f(x)=\underline{\qquad}\).`, a: "", sol: R`设 \(\int_0^1 f(t)\,\mathrm{d}t=A\)，则 \(f(x)=3x^2+2A\)，于是有
\[
\int_0^1 f(x)\,\mathrm{d}x=\int_0^1(3x^2+2A)\,\mathrm{d}x
=x^3\Big|_0^1+2A=1+2A,
\]
即 \(A=1+2A\)，解得 \(A=-1\).

故
\[
f(x)=3x^2-2.
\]` },
      { n: "3", q: R`不定积分 \(\int 3^x e^x\,\mathrm{d}x=\underline{\qquad}\).`, a: "", sol: R`\[
\begin{aligned}
\int 3^x\mathrm{e}^x\,\mathrm{d}x
&=\int(3\mathrm{e})^x\,\mathrm{d}x
=\frac{1}{\ln(3\mathrm{e})}(3\mathrm{e})^x+C\\
&=\frac{1}{1+\ln 3}(3\mathrm{e})^x+C.
\end{aligned}
\]` },
      { n: "4", q: R`不定积分 \(\int \dfrac{\cos 2x}{\sin^2 x\cos^2 x}\,\mathrm{d}x=\underline{\qquad}\).`, a: "", sol: R`\[
\begin{aligned}
\int\frac{\cos 2x}{\sin^2x\cos^2x}\,\mathrm{d}x
&=\int\frac{\cos^2x-\sin^2x}{\sin^2x\cos^2x}\,\mathrm{d}x\\
&=\int\frac{\mathrm{d}x}{\sin^2x}-\int\frac{\mathrm{d}x}{\cos^2x}
=-\cot x-\tan x+C.
\end{aligned}
\]` },
      { n: "5", q: R`不定积分 \(\int \dfrac{\mathrm{d}x}{1+e^x}=\underline{\qquad}\).`, a: "", sol: R`\[
\int\frac{\mathrm{d}x}{1+\mathrm{e}^x}
=\int\frac{\mathrm{e}^{-x}}{1+\mathrm{e}^{-x}}\,\mathrm{d}x
=-\int\frac{\mathrm{d}(1+\mathrm{e}^{-x})}{1+\mathrm{e}^{-x}}
\]
\[
=-\ln(1+\mathrm{e}^{-x})+C.
\]` },
      { n: "6", q: R`\(\int_0^2 \max\{x,x^3\}\,\mathrm{d}x=\underline{\qquad}\).`, a: "", sol: R`因为
\[
\max\{x,x^3\}=\begin{cases}
x,&0\leqslant x\leqslant 1,\\
x^3,&1<x\leqslant 2,
\end{cases}
\]
所以
\[
\text{原积分}=\int_0^1x\,\mathrm{d}x+\int_1^2x^3\,\mathrm{d}x
=\frac{x^2}{2}\Big|_0^1+\frac{x^4}{4}\Big|_1^2=\frac{17}{4}.
\]` },
      { n: "7", q: R`\(\int_1^e \sin(\ln x)\,\mathrm{d}x=\underline{\qquad}\).`, a: "", sol: R`\[
\begin{aligned}
\int_1^{\mathrm{e}}\sin(\ln x)\,\mathrm{d}x
&=x[\sin(\ln x)]\Big|_1^{\mathrm{e}}
-\int_1^{\mathrm{e}}x\,\mathrm{d}[\sin(\ln x)]\\
&=\mathrm{e}\sin1-\int_1^{\mathrm{e}}\cos(\ln x)\,\mathrm{d}x\\
&=\mathrm{e}\sin1-x\cos(\ln x)\Big|_1^{\mathrm{e}}
+\int_1^{\mathrm{e}}x\,\mathrm{d}[\cos(\ln x)]\\
&=\mathrm{e}\sin1-\mathrm{e}\cos1+1-\int_1^{\mathrm{e}}\sin(\ln x)\,\mathrm{d}x,
\end{aligned}
\]
所以
\[
\int_1^{\mathrm{e}}\sin(\ln x)\,\mathrm{d}x
=\frac{\mathrm{e}\sin1-\mathrm{e}\cos1+1}{2}.
\]` },
      { n: "8", q: R`\(\int_0^{+\infty}\dfrac{\mathrm{d}x}{x^2+4x+8}=\underline{\qquad}\).`, a: "", sol: R`\[
\begin{aligned}
\int_0^{+\infty}\frac{\mathrm{d}x}{x^2+4x+8}
&=\int_0^{+\infty}\frac{\mathrm{d}(x+2)}{(x+2)^2+4}\\
&=\frac{1}{2}\arctan\frac{x+2}{2}\Big|_0^{+\infty}
=\frac{\pi}{8}.
\end{aligned}
\]
故应填 \(\frac{\pi}{8}\).

**【评注】** 对函数 \(\frac{1}{ax^2+bx+c}\) 的积分，一般先配方，再进行计算.` },
      { n: "9", q: R`曲线 \(\begin{cases}x=\int_1^t \dfrac{\cos u}{u}\,\mathrm{d}u,\\[6pt] y=\int_1^t \dfrac{\sin u}{u}\,\mathrm{d}u\end{cases}\) 自 \(t=1\) 至 \(t=\dfrac{\pi}{2}\) 一段弧的长度为 \(\underline{\qquad}\).`, a: "", sol: R`弧长
\[
\begin{aligned}
s&=\int_1^{\frac{\pi}{2}}\sqrt{[x'(t)]^2+[y'(t)]^2}\,\mathrm{d}t
=\int_1^{\frac{\pi}{2}}\sqrt{\left(\frac{\cos t}{t}\right)^2+\left(\frac{\sin t}{t}\right)^2}\,\mathrm{d}t\\
&=\int_1^{\frac{\pi}{2}}\frac{1}{t}\,\mathrm{d}t=\ln\frac{\pi}{2}.
\end{aligned}
\]` },
      { n: "10", q: R`质点以速度 \(t\sin t^2\) 米/秒做直线运动，则从时刻 \(t_1=\sqrt{\dfrac{\pi}{2}}\) 秒到 \(t_2=\sqrt{\pi}\) 秒内质点所经过的路程等于 \(\underline{\qquad}\) 米.`, a: "", sol: R`质点所经过的路程为
\[
\begin{aligned}
S&=\int_{\sqrt{\frac{\pi}{2}}}^{\sqrt{\pi}}t\sin t^2\,\mathrm{d}t
=\frac{1}{2}\int_{\sqrt{\frac{\pi}{2}}}^{\sqrt{\pi}}\sin t^2\,\mathrm{d}(t^2)\\
&=-\frac{1}{2}\cos t^2\Big|_{\sqrt{\frac{\pi}{2}}}^{\sqrt{\pi}}
=\frac{1}{2}(\text{米}).
\end{aligned}
\]
故应填 \(\frac{1}{2}\).` },
      { n: "11", q: R`设函数 \(f(x)\) 具有连续的导数，则 \(\int [xf'(x)+f(x)]\,\mathrm{d}x=\)

(A)\(xf(x)+C\).　　(B)\(xf'(x)+C\).

(C)\(x+f'(x)+C\).　　(D)\(x+f(x)+C\).`, a: "(A)", sol: R`\[
\begin{aligned}
\int[xf'(x)+f(x)]\,\mathrm{d}x
&=\int xf'(x)\,\mathrm{d}x+\int f(x)\,\mathrm{d}x\\
&=\int x\,\mathrm{d}f(x)+\int f(x)\,\mathrm{d}x
=xf(x)-\int f(x)\,\mathrm{d}x+\int f(x)\,\mathrm{d}x\\
&=xf(x)+C.
\end{aligned}
\]
答案选(A).` },
      { n: "12", q: R`若 \(\int f'(x)\,\mathrm{d}x=\int g'(x)\,\mathrm{d}x\)，则必有

(A)\(f(x)=g(x)\).　　(B)\(\int f(x)\,\mathrm{d}x=\int g(x)\,\mathrm{d}x\).

(C)\(f(x)=g(x)+C\).　　(D)\(f(x)-g(x)=1\).`, a: "(C)", sol: R`由 \(\int f'(x)\,\mathrm{d}x=\int g'(x)\,\mathrm{d}x\)，得 \(f(x)+C_1=g(x)+C_2\)，
即 \(f(x)=g(x)+C_2-C_1=g(x)+C\). 答案选(C).` },
      { n: "13", q: R`设 \(f(x)\) 在 \([a,b]\) 上可积，下列各式中不正确的是

(A)\(\int_a^b f(x)\,\mathrm{d}x=\int_a^b f(t)\,\mathrm{d}t\).　　(B)\(\int_a^b f(x)\,\mathrm{d}x=\int_a^a f(x)\,\mathrm{d}x\).

(C)\(\int_a^a f(x)\,\mathrm{d}x=\int_b^b f(x)\,\mathrm{d}x\).　　(D)\(\int_a^b f(x)\,\mathrm{d}x=-\int_b^a f(t)\,\mathrm{d}t\).`, a: "(B)", sol: R`因为 \(\int_a^a f(x)\,\mathrm{d}x=0\)，而 \(\int_a^b f(x)\,\mathrm{d}x\) 一般不为零.
答案选(B).` },
      { n: "14", q: R`设 \(f(x)\) 在 \([a,b]\) 上连续，则在 \([a,b]\) 上至少有一点 \(\xi\)，使得

(A)\(f'(\xi)=0\).　　(B)\(f'(\xi)=\dfrac{f(b)-f(a)}{b-a}\).

(C)\(f(\xi)=0\).　　(D)\(f(\xi)=\dfrac{\int_a^b f(x)\,\mathrm{d}x}{b-a}\).`, a: "(D)", sol: R`由积分中值定理，知至少存在一个 \(\xi\in[a,b]\)，使得
\[
\int_a^b f(x)\,\mathrm{d}x=f(\xi)(b-a),
\]
也即
\[
f(\xi)=\frac{\int_a^b f(x)\,\mathrm{d}x}{b-a}.
\]
答案选(D).

**【评注】** (A)(B)(C)分别表示的是罗尔定理、拉格朗日中值定理及零点定理，但都缺少定理的条件，而(D)表示的是积分中值定理.` },
      { n: "15", q: R`设 \(I=\int_0^{\frac{\pi}{4}} e^x\,\mathrm{d}x\)，\(J=\int_0^{\frac{\pi}{4}} e^{\sin x}\,\mathrm{d}x\)，\(K=\int_0^{\frac{\pi}{4}} e^{\tan x}\,\mathrm{d}x\)，则 \(I,J,K\) 的大小关系是

(A)\(I<J<K\).　　(B)\(I<K<J\).

(C)\(J<I<K\).　　(D)\(K<J<I\).`, a: "(C)", sol: R`在 \(\left[0,\frac{\pi}{4}\right]\) 上，\(\sin x\leqslant x\leqslant\tan x\)，且 \(\mathrm{e}^x\) 是增函数，于是在 \(\left[0,\frac{\pi}{4}\right]\) 上有 \(\mathrm{e}^{\sin x}\leqslant\mathrm{e}^x\leqslant\mathrm{e}^{\tan x}\)，且各函数连续不恒等.
因此
\[
J=\int_0^{\frac{\pi}{4}}\mathrm{e}^{\sin x}\,\mathrm{d}x
<I=\int_0^{\frac{\pi}{4}}\mathrm{e}^x\,\mathrm{d}x
<K=\int_0^{\frac{\pi}{4}}\mathrm{e}^{\tan x}\,\mathrm{d}x.
\]
所以应选(C).` },
      { n: "16", q: R`\(\int \dfrac{\ln(x+1)-\ln x}{x(x+1)}\,\mathrm{d}x=\)

(A)\(\dfrac{1}{2}\ln^2(1+x)+C\).　　(B)\(-\dfrac{1}{2}\ln^2\left(\dfrac{1+x}{x}\right)+C\).

(C)\(-\dfrac{1}{2}\ln^2\left(\dfrac{x}{1+x}\right)\).　　(D)\(\ln^2\left(\dfrac{x+1}{x}\right)+C\).`, a: "(B)", sol: R`\[
\begin{aligned}
\int\frac{\ln(x+1)-\ln x}{x(x+1)}\,\mathrm{d}x
&=\int\frac{\ln\left(1+\frac{1}{x}\right)}{x^2\left(1+\frac{1}{x}\right)}\,\mathrm{d}x\\
&=-\int\frac{\ln\left(1+\frac{1}{x}\right)}{1+\frac{1}{x}}\,\mathrm{d}\left(1+\frac{1}{x}\right)
\end{aligned}
\]
\[
\begin{aligned}
&=-\int\ln\left(1+\frac{1}{x}\right)\mathrm{d}\left[\ln\left(1+\frac{1}{x}\right)\right]\\
&=-\frac{1}{2}\ln^2\left(1+\frac{1}{x}\right)+C.
\end{aligned}
\]
答案选(B).

**【评注】** 可以对选项求导检验.` },
      { n: "17", q: R`若积分 \(\int_2^{+\infty}\dfrac{\mathrm{d}x}{x(\ln x)^p}\) 收敛，则 \(p\) 应满足

(A)\(p=0\).　　(B)\(p=1\).　　(C)\(p<1\).　　(D)\(p>1\).`, a: "(D)", sol: R`令 \(\ln x=t\)，则
\[
\int_2^{+\infty}\frac{\mathrm{d}x}{x(\ln x)^p}
=\int_{\ln2}^{+\infty}\frac{\mathrm{d}t}{t^p},
\]
而对反常积分 \(\int_{\ln2}^{+\infty}\frac{\mathrm{d}t}{t^p}\)，当 \(p>1\) 时收敛，当 \(p\leqslant1\) 时发散. 答案应选(D).` },
      { n: "18", q: R`下列积分正确的是

(A)\(\int_{-1}^1 \dfrac{\mathrm{d}x}{x^2}=\left.-\dfrac{1}{x}\right|_{-1}^{1}=-2\).　　(B)\(\int_{-\frac{\pi}{2}}^{\frac{\pi}{2}}\sin x\,\mathrm{d}x=2\int_0^{\frac{\pi}{2}}\sin x\,\mathrm{d}x=2\).

(C)\(\int_{-\frac{\pi}{2}}^{\frac{\pi}{2}}x^2\sin x\,\mathrm{d}x=0\).　　(D)\(\int_{-1}^1 \sqrt{1-x^2}\,\mathrm{d}x=2\int_0^1 \sqrt{1-x^2}\,\mathrm{d}x=\pi\).`, a: "(C)", sol: R`\(\int_{-1}^1\frac{\mathrm{d}x}{x^2}\) 是无界函数的反常积分，它是发散的，(A) 是错误的.
而 \(\int_{-\frac{\pi}{2}}^{\frac{\pi}{2}}\sin x\,\mathrm{d}x=0\)，\(\int_{-1}^1\sqrt{1-x^2}\,\mathrm{d}x=\frac{\pi}{2}\)，(B)(D) 是错误的.
答案应选(C).` },
      { n: "19", q: R`下列反常积分发散的是

(A)\(\int_{-1}^1 \dfrac{\mathrm{d}x}{\sqrt[3]{\sin x}}\).　　(B)\(\int_{-1}^1 \dfrac{\mathrm{d}x}{\sqrt{1-x^2}}\).

(C)\(\int_0^{+\infty}e^{-x^2}\,\mathrm{d}x\).　　(D)\(\int_2^{+\infty}\dfrac{\mathrm{d}x}{x\ln x}\).`, a: "(D)", sol: R`因为
\[
\int_2^{+\infty}\frac{\mathrm{d}x}{x\ln x}
=\int_2^{+\infty}\frac{\mathrm{d}(\ln x)}{\ln x}
=\ln(\ln x)\Big|_2^{+\infty}=+\infty.
\]
故选(D).

**【评注】** 由于 \(\lim_{x\to0}x^{\frac{1}{3}}\frac{1}{\sqrt[3]{\sin x}}=1\)，用比较判别法知 \(\int_0^1\frac{\mathrm{d}x}{\sqrt[3]{\sin x}}\) 是收敛的，进而
\[
\int_{-1}^0\frac{\mathrm{d}x}{\sqrt[3]{\sin x}}
\]
也是收敛的，且 \(\int_{-1}^1\frac{\mathrm{d}x}{\sqrt[3]{\sin x}}=0\).

同理，由于 \(\lim_{x\to1^-}\sqrt{1-x}\frac{1}{\sqrt{1-x^2}}=\frac{1}{\sqrt2}\)，\(\lim_{x\to-1^+}\sqrt{1+x}\frac{1}{\sqrt{1-x^2}}=\frac{1}{\sqrt2}\)，用比较判别法知
\[
\int_0^1\frac{\mathrm{d}x}{\sqrt{1-x^2}},\quad
\int_{-1}^0\frac{\mathrm{d}x}{\sqrt{1-x^2}}
\]
均是收敛的，进而 \(\int_{-1}^1\frac{\mathrm{d}x}{\sqrt{1-x^2}}\) 是收敛的.
\[
\int_0^{+\infty}\mathrm{e}^{-x^2}\,\mathrm{d}x=\frac{\sqrt{\pi}}{2}
\]
也是收敛的.` },
      { n: "20", q: R`曲线 \(y=x(x-1)(2-x)\) 与 \(x\) 轴所围图形的面积可表示为

(A)\(-\int_0^2 x(x-1)(2-x)\,\mathrm{d}x\).

(B)\(\int_0^1 x(x-1)(2-x)\,\mathrm{d}x-\int_1^2 x(x-1)(2-x)\,\mathrm{d}x\).

(C)\(\int_0^2 x(x-1)(2-x)\,\mathrm{d}x\).

(D)\(-\int_0^1 x(x-1)(2-x)\,\mathrm{d}x+\int_1^2 x(x-1)(2-x)\,\mathrm{d}x\).`, a: "(D)", sol: R`曲线 \(y=x(x-1)(2-x)\) 与 \(x\) 轴的交点为 \(x=0,x=1,x=2\)，因此该曲线与 \(x\) 轴所围图形的面积可表示为
\[
\begin{aligned}
S&=\int_0^2|x(x-1)(2-x)|\,\mathrm{d}x\\
&=-\int_0^1x(x-1)(2-x)\,\mathrm{d}x+\int_1^2x(x-1)(2-x)\,\mathrm{d}x.
\end{aligned}
\]
故应选(D).` },
      { n: "21", q: R`求不定积分 \(I=\int \dfrac{\sqrt{x}}{1+x}\arctan\sqrt{x}\,\mathrm{d}x\).`, a: "", sol: R`设 \(\sqrt{x}=t\)，则 \(x=t^2,\mathrm{d}x=2t\,\mathrm{d}t\)，
\[
\begin{aligned}
I&=\int\frac{2t^2}{1+t^2}\arctan t\,\mathrm{d}t
=2\int\arctan t\,\mathrm{d}t-2\int\frac{\arctan t}{1+t^2}\,\mathrm{d}t\\
&=2t\arctan t-2\int\frac{t}{1+t^2}\,\mathrm{d}t-2\int\arctan t\,\mathrm{d}(\arctan t)\\
&=2t\arctan t-\ln(1+t^2)-(\arctan t)^2+C\\
&=2\sqrt{x}\arctan\sqrt{x}-\ln(1+x)-(\arctan\sqrt{x})^2+C.
\end{aligned}
\]` },
      { n: "22", q: R`求不定积分 \(I=\int \dfrac{\mathrm{d}x}{x^8(1+x^2)}\).`, a: "", sol: R`方法一
\[
\begin{aligned}
I&=\int\frac{1+x^2-x^2}{x^8(1+x^2)}\,\mathrm{d}x
=\int\frac{\mathrm{d}x}{x^8}-\int\frac{\mathrm{d}x}{x^6(1+x^2)}\\
&=-\frac{1}{7x^7}-\int\frac{1+x^2-x^2}{x^6(1+x^2)}\,\mathrm{d}x\\
&=-\frac{1}{7x^7}-\int\frac{\mathrm{d}x}{x^6}+\int\frac{\mathrm{d}x}{x^4(1+x^2)}\\
&=-\frac{1}{7x^7}+\frac{1}{5x^5}+\int\frac{1+x^2-x^2}{x^4(1+x^2)}\,\mathrm{d}x\\
&=-\frac{1}{7x^7}+\frac{1}{5x^5}+\int\frac{\mathrm{d}x}{x^4}-\int\frac{\mathrm{d}x}{x^2(1+x^2)}\\
&=-\frac{1}{7x^7}+\frac{1}{5x^5}-\frac{1}{3x^3}+\frac{1}{x}+\arctan x+C.
\end{aligned}
\]

方法二 令 \(x=\frac{1}{t}\)，则
\[
\begin{aligned}
I&=-\int\frac{t^8}{1+t^2}\,\mathrm{d}t
=-\int\frac{(t^4-1)(t^4+1)+1}{1+t^2}\,\mathrm{d}t\\
&=\int(1-t^2+t^4-t^6)\,\mathrm{d}t-\arctan t+C\\
&=t-\frac{1}{3}t^3+\frac{1}{5}t^5-\frac{1}{7}t^7-\arctan t+C\\
&=\frac{1}{x}-\frac{1}{3x^3}+\frac{1}{5x^5}-\frac{1}{7x^7}-\arctan\frac{1}{x}+C.
\end{aligned}
\]` },
      { n: "23", q: R`求不定积分 \(\int \dfrac{1}{1+\sqrt{x}+\sqrt{1+x}}\,\mathrm{d}x\).`, a: "", sol: R`\[
\begin{aligned}
\text{原式}&=\int\frac{1+\sqrt{x}-\sqrt{1+x}}{2\sqrt{x}}\,\mathrm{d}x
=\int\frac{\mathrm{d}x}{2\sqrt{x}}+\frac{1}{2}\int\mathrm{d}x-\frac{1}{2}\int\sqrt{\frac{1+x}{x}}\,\mathrm{d}x\\
&=\sqrt{x}+\frac{1}{2}x-\frac{1}{2}\int\sqrt{\frac{1+x}{x}}\,\mathrm{d}x.
\end{aligned}
\]
对于 \(\int\sqrt{\frac{1+x}{x}}\,\mathrm{d}x\)，作代换 \(\sqrt{\frac{1+x}{x}}=t\)，则
\[
\begin{aligned}
\int\sqrt{\frac{1+x}{x}}\,\mathrm{d}x
&=\int t\,\mathrm{d}\left(\frac{1}{t^2-1}\right)
=\frac{t}{t^2-1}-\int\frac{1}{t^2-1}\,\mathrm{d}t\\
&=\frac{t}{t^2-1}-\frac{1}{2}\ln\left|\frac{t-1}{t+1}\right|+C.
\end{aligned}
\]
所以
\[
\text{原式}=\sqrt{x}+\frac{1}{2}x-\frac{1}{2}\sqrt{x(1+x)}
-\frac{1}{4}\ln\left|\frac{\sqrt{x}+\sqrt{1+x}}{\sqrt{x}-\sqrt{1+x}}\right|+C.
\]` },
      { n: "24", q: R`求不定积分 \(I=\int \dfrac{x+\ln(1-x)}{x^2}\,\mathrm{d}x\).`, a: "", sol: R`\[
\begin{aligned}
I&=\int\frac{1}{x}\,\mathrm{d}x-\int\ln(1-x)\,\mathrm{d}\frac{1}{x}\\
&=\ln|x|-\frac{1}{x}\ln(1-x)-\int\frac{\mathrm{d}x}{x(1-x)}\\
&=\ln|x|-\frac{1}{x}\ln(1-x)-\int\left(\frac{1}{x}+\frac{1}{1-x}\right)\mathrm{d}x\\
&=\ln|x|-\frac{1}{x}\ln(1-x)-\ln|x|+\ln(1-x)+C\\
&=\left(1-\frac{1}{x}\right)\ln(1-x)+C.
\end{aligned}
\]` },
      { n: "25", q: R`计算下列积分 \(\int \dfrac{1}{2+\sin x}\,\mathrm{d}x\).`, a: "", sol: R`用万能代换，令 \(t=\tan\frac{x}{2}\)，则
\[
\begin{aligned}
\int\frac{\mathrm{d}x}{2+\sin x}
&=\int\frac{1}{2+\frac{2t}{1+t^2}}\cdot\frac{2}{1+t^2}\,\mathrm{d}t
=\int\frac{\mathrm{d}t}{1+t+t^2}\\
&=\int\frac{\mathrm{d}t}{\left(t+\frac{1}{2}\right)^2+\frac{3}{4}}
=\frac{2}{\sqrt3}\arctan\frac{2}{\sqrt3}\left(t+\frac{1}{2}\right)+C\\
&=\frac{2}{\sqrt3}\arctan\frac{2}{\sqrt3}\left(\tan\frac{x}{2}+\frac{1}{2}\right)+C.
\end{aligned}
\]` },
      { n: "26", q: R`计算 \(\int \cot x\sqrt{\sin x}\,\mathrm{d}x\).`, a: "", sol: R`\[
\int\cot x\sqrt{\sin x}\,\mathrm{d}x
=\int\frac{\cos x}{\sin x}\sqrt{\sin x}\,\mathrm{d}x
=\int(\sin x)^{-\frac{1}{2}}\,\mathrm{d}(\sin x)
=2\sqrt{\sin x}+C.
\]` },
      { n: "27", q: R`求 \(\int \dfrac{x\cos^4\dfrac{x}{2}}{\sin^2 x}\,\mathrm{d}x\).`, a: "", sol: R`\[
\begin{aligned}
\text{原积分}&=\int x\frac{\cos^4\frac{x}{2}}{8\sin^3\frac{x}{2}\cos^3\frac{x}{2}}\,\mathrm{d}x
=\frac{1}{4}\int x\frac{\mathrm{d}\left(\sin\frac{x}{2}\right)}{\sin^3\frac{x}{2}}\\
&=-\frac{1}{8}\int x\,\mathrm{d}\left(\sin^{-2}\frac{x}{2}\right)
=-\frac{1}{8}x\sin^{-2}\frac{x}{2}+\frac{1}{8}\int\frac{\mathrm{d}x}{\sin^2\frac{x}{2}}\\
&=-\frac{1}{8}x\csc^2\frac{x}{2}-\frac{1}{4}\cot\frac{x}{2}+C.
\end{aligned}
\]` },
      { n: "28", q: R`求 \(\int_0^{\frac{\sqrt{3}}{3}}\dfrac{\mathrm{d}x}{(1+5x^2)\sqrt{1+x^2}}\).`, a: "", sol: R`设 \(x=\tan t,\mathrm{d}x=\sec^2t\,\mathrm{d}t\)，
\[
\begin{aligned}
\text{原式}&=\int_0^{\frac{\pi}{4}}\frac{\sec^2t\,\mathrm{d}t}{(1+5\tan^2t)\sec t}
=\int_0^{\frac{\pi}{4}}\frac{\cos t}{1+4\sin^2t}\,\mathrm{d}t\\
&=\int_0^{\frac{\pi}{4}}\frac{\frac{1}{2}\mathrm{d}(2\sin t)}{1+(2\sin t)^2}
=\frac{1}{2}\arctan(2\sin t)\Big|_0^{\frac{\pi}{4}}=\frac{\pi}{8}.
\end{aligned}
\]` },
      { n: "29", q: R`求 \(\int_{-1}^1 \left(x^2\sqrt{1-x^2}+x^3\sqrt{1+x^2}\right)\mathrm{d}x\).`, a: "", sol: R`因为 \(x^2\sqrt{1-x^2}\) 是偶函数，\(x^3\sqrt{1+x^2}\) 是奇函数，所以
\[
\int_{-1}^1\left(x^2\sqrt{1-x^2}+x^3\sqrt{1+x^2}\right)\mathrm{d}x
=2\int_0^1x^2\sqrt{1-x^2}\,\mathrm{d}x.
\]
令 \(x=\sin t\)，则
\[
\begin{aligned}
\text{原积分}&=2\int_0^{\frac{\pi}{2}}\sin^2t\cos^2t\,\mathrm{d}t
=2\int_0^{\frac{\pi}{2}}(\sin^2t-\sin^4t)\,\mathrm{d}t\\
&=2\left(\frac{1}{2}\cdot\frac{\pi}{2}-\frac{3}{4}\cdot\frac{1}{2}\cdot\frac{\pi}{2}\right)
=\frac{\pi}{8}.
\end{aligned}
\]
**【评注】** 可利用 \(\sin^2t\cos^2t=\frac{1}{4}\sin^22t=\frac{1}{4}(1-\cos4t)\).` },
      { n: "30", q: R`求 \(\int_0^1 \ln\left(x+\sqrt{1+x^2}\right)\mathrm{d}x\).`, a: "", sol: R`用分部积分法.
\[
\begin{aligned}
\int_0^1\ln(x+\sqrt{1+x^2})\,\mathrm{d}x
&=x\ln(x+\sqrt{1+x^2})\Big|_0^1
-\int_0^1x\,\mathrm{d}[\ln(x+\sqrt{1+x^2})]\\
&=\ln(\sqrt2+1)-\int_0^1\frac{x}{x+\sqrt{1+x^2}}
\left(1+\frac{2x}{2\sqrt{1+x^2}}\right)\mathrm{d}x\\
&=\ln(\sqrt2+1)-\int_0^1\frac{x}{\sqrt{1+x^2}}\,\mathrm{d}x\\
&=\ln(\sqrt2+1)-\frac{1}{2}\cdot2\sqrt{x^2+1}\Big|_0^1\\
&=\ln(\sqrt2+1)-\sqrt2+1.
\end{aligned}
\]` },
      { n: "31", q: R`求积分 \(\int_0^{\frac{\pi}{4}}\dfrac{x\sin x}{\cos^3 x}\,\mathrm{d}x\).`, a: "", sol: R`\[
\begin{aligned}
\int_0^{\frac{\pi}{4}}\frac{x\sin x}{\cos^3x}\,\mathrm{d}x
&=\int_0^{\frac{\pi}{4}}x\tan x\sec^2x\,\mathrm{d}x\\
&=\int_0^{\frac{\pi}{4}}x\tan x\,\mathrm{d}(\tan x)
=\frac{1}{2}\int_0^{\frac{\pi}{4}}x\,\mathrm{d}(\tan^2x)\\
&=\frac{1}{2}x\tan^2x\Big|_0^{\frac{\pi}{4}}-\frac{1}{2}\int_0^{\frac{\pi}{4}}\tan^2x\,\mathrm{d}x\\
&=\frac{\pi}{8}-\frac{1}{2}\int_0^{\frac{\pi}{4}}(\sec^2x-1)\,\mathrm{d}x
=\frac{\pi}{8}-\frac{1}{2}\tan x\Big|_0^{\frac{\pi}{4}}+\frac{\pi}{8}\\
&=\frac{\pi}{4}-\frac{1}{2}.
\end{aligned}
\]` },
      { n: "32", q: R`设 \(f(x)=\begin{cases}\sin x, & |x|\leqslant\dfrac{\pi}{2},\\[6pt] 0, & |x|>\dfrac{\pi}{2},\end{cases}\) 求 \(\int_0^x f(t)\,\mathrm{d}t\).`, a: "", sol: R`当 \(x<-\frac{\pi}{2}\) 时，
\[
\begin{aligned}
\int_0^xf(t)\,\mathrm{d}t
&=-\int_x^0f(t)\,\mathrm{d}t
=-\left[\int_x^{-\frac{\pi}{2}}f(t)\,\mathrm{d}t+\int_{-\frac{\pi}{2}}^0f(t)\,\mathrm{d}t\right]\\
&=-\left(\int_x^{-\frac{\pi}{2}}0\,\mathrm{d}t+\int_{-\frac{\pi}{2}}^0\sin t\,\mathrm{d}t\right)=1.
\end{aligned}
\]
当 \(|x|\leqslant\frac{\pi}{2}\) 时，\(\int_0^xf(t)\,\mathrm{d}t=\int_0^x\sin t\,\mathrm{d}t=1-\cos x\).

当 \(x>\frac{\pi}{2}\) 时，\(\int_0^xf(t)\,\mathrm{d}t=\int_0^{\frac{\pi}{2}}\sin t\,\mathrm{d}t+\int_{\frac{\pi}{2}}^x0\,\mathrm{d}t=1\).

所以
\[
\int_0^xf(t)\,\mathrm{d}t=
\begin{cases}
1,&|x|>\frac{\pi}{2},\\[2mm]
1-\cos x,&|x|\leqslant\frac{\pi}{2}.
\end{cases}
\]` },
      { n: "33", q: R`求 \(\int_0^{+\infty}\dfrac{x}{(1+x)^3}\,\mathrm{d}x\).`, a: "", sol: R`方法一
\[
\begin{aligned}
\int_0^{+\infty}\frac{x}{(1+x)^3}\,\mathrm{d}x
&=\int_0^{+\infty}\frac{x+1-1}{(1+x)^3}\,\mathrm{d}x\\
&=\int_0^{+\infty}\left[\frac{1}{(1+x)^2}-\frac{1}{(1+x)^3}\right]\mathrm{d}(1+x)
\end{aligned}
\]
\[
=\left[-\frac{1}{1+x}+\frac{1}{2(1+x)^2}\right]\Big|_0^{+\infty}=\frac{1}{2}.
\]

方法二
\[
\begin{aligned}
\int_0^{+\infty}\frac{x}{(1+x)^3}\,\mathrm{d}x
&=-\frac{1}{2}\int_0^{+\infty}x\,\mathrm{d}\left[\frac{1}{(1+x)^2}\right]\\
&=-\frac{1}{2}\left[\frac{x}{(1+x)^2}\Big|_0^{+\infty}
-\int_0^{+\infty}\frac{1}{(1+x)^2}\,\mathrm{d}x\right]\\
&=0-\frac{1}{2}\cdot\frac{1}{1+x}\Big|_0^{+\infty}=\frac{1}{2}.
\end{aligned}
\]` },
      { n: "34", q: R`求 \(I=\int_1^2 \left[\dfrac{1}{x\ln^2 x}-\dfrac{1}{(x-1)^2}\right]\mathrm{d}x\).`, a: "", sol: R`先求原函数，再用广义牛顿－莱布尼茨公式.
\[
\begin{aligned}
\int\left[\frac{1}{x\ln^2x}-\frac{1}{(x-1)^2}\right]\mathrm{d}x
&=\int\frac{1}{x\ln^2x}\,\mathrm{d}x-\int\frac{1}{(x-1)^2}\,\mathrm{d}x\\
&=\int\frac{1}{\ln^2x}\,\mathrm{d}\ln x-\int\frac{1}{(x-1)^2}\,\mathrm{d}(x-1)\\
&=-\frac{1}{\ln x}+\frac{1}{x-1}+C.
\end{aligned}
\]
所以
\[
\begin{aligned}
I&=\int_1^2\left[\frac{1}{x\ln^2x}-\frac{1}{(x-1)^2}\right]\mathrm{d}x
=\left(-\frac{1}{\ln x}+\frac{1}{x-1}\right)\Big|_1^2\\
&=-\frac{1}{\ln2}+1-\lim_{x\to1^+}\left(-\frac{1}{\ln x}+\frac{1}{x-1}\right)\\
&=\frac{3}{2}-\frac{1}{\ln2}.
\end{aligned}
\]` },
      { n: "35", q: R`求曲线 \(y=3-|x^2-1|\) 与 \(x\) 轴围成的封闭图形绕直线 \(y=3\) 旋转所得的旋转体体积.`, a: "", sol: R`由于坐标轴不是旋转轴，应利用微元法得被积表达式，然后再积分.

**【解析】** \(y=3-|x^2-1|=\begin{cases}2+x^2,&|x|<1,\\4-x^2,&|x|\geqslant1.\end{cases}\)

选 \(x\) 为积分变量. 设旋转体在区间 \([0,1]\) 和 \([1,2]\) 上的体积分别为 \(V_1,V_2\)，则所求体积
\[
\begin{aligned}
V&=2(V_1+V_2)\\
&=2\pi\int_0^1\left\{3^2-[3-(x^2+2)]^2\right\}\mathrm{d}x
+2\pi\int_1^2\left\{3^2-[3-(4-x^2)]^2\right\}\mathrm{d}x\\
&=\frac{448}{15}\pi.
\end{aligned}
\]` },
      { n: "36", q: R`设 \(|f'(x)|\leqslant M\)，\(x\in[0,1]\)，且 \(f(0)=f(1)=0\)，试证：\(\left|\int_0^1 f(x)\,\mathrm{d}x\right|\leqslant\dfrac{1}{4}M\).`, a: "", sol: R`方法一 用拉格朗日中值定理
\[
f(x)=f(x)-f(0)=f'(\xi_1)x\quad(0<\xi_1<x),\quad |f(x)|\leqslant Mx,
\]
\[
f(x)=f(x)-f(1)=f'(\xi_2)(x-1)\quad(x<\xi_2<1),\quad |f(x)|\leqslant M(1-x),
\]
从而
\[
\begin{aligned}
\left|\int_0^1f(x)\,\mathrm{d}x\right|
&=\left|\int_0^{\frac{1}{2}}f(x)\,\mathrm{d}x+\int_{\frac{1}{2}}^1f(x)\,\mathrm{d}x\right|\\
&\leqslant M\int_0^{\frac{1}{2}}x\,\mathrm{d}x+M\int_{\frac{1}{2}}^1(1-x)\,\mathrm{d}x
=\frac{1}{4}M.
\end{aligned}
\]
方法二 因为
\[
\begin{aligned}
\int_0^1f(x)\,\mathrm{d}x
&=\int_0^1f(x)\,\mathrm{d}(x-c)
=(x-c)f(x)\Big|_0^1-\int_0^1(x-c)f'(x)\,\mathrm{d}x\\
&=-\int_0^1(x-c)f'(x)\,\mathrm{d}x,
\end{aligned}
\]
所以
\[
\begin{aligned}
\left|\int_0^1f(x)\,\mathrm{d}x\right|
&\leqslant\int_0^1|(x-c)f'(x)|\,\mathrm{d}x
\leqslant\int_0^1|x-c||f'(x)|\,\mathrm{d}x\\
&\leqslant M\int_0^1|x-c|\,\mathrm{d}x
=M\left[\int_0^c(c-x)\,\mathrm{d}x+\int_c^1(x-c)\,\mathrm{d}x\right]\\
&=M\left(c^2-c+\frac{1}{2}\right).
\end{aligned}
\]
又 \(g(c)=c^2-c+\frac{1}{2}=\left(c-\frac{1}{2}\right)^2+\frac{1}{4}\)，所以当 \(c=\frac{1}{2}\) 时，\(g(c)\) 取最小值 \(\frac{1}{4}\)，故
\[
\left|\int_0^1f(x)\,\mathrm{d}x\right|\leqslant\frac{M}{4}.
\]` },
      { n: "37", q: R`设 \(f(x),g(x)\) 在 \([-a,a](a>0)\) 上连续，\(g(x)\) 为偶函数，且满足 \(f(x)+f(-x)=A\)（\(A\) 为常数）.

（1）试证：\(\int_{-a}^a f(x)g(x)\,\mathrm{d}x=A\int_0^a g(x)\,\mathrm{d}x\).

（2）计算：\(\int_{-\frac{\pi}{2}}^{\frac{\pi}{2}}|\sin x|\arctan e^x\,\mathrm{d}x\).
**作业超链接**　　《基础过关660题》

| 知识点 | 题号 |
| --- | --- |
| 数一　原函数 | 55　56　176　199 |
| 数一　不定积分的计算 | 51　52　53　54　57　191 |
| 数一　可积与定积分的性质 | 178　179　180　181　182　183　184　185 |
| 数一　定积分的计算 | 58　59　60　61　62　64　186　187　188　189　190　198 |
| 数一　变限积分 | 63　65　66　177　192　193　194　195　196　197 |
| 数一　反常积分 | 67　68　69　202　203　204 |
| 数一　定积分的应用 | 70　71　72　73　74　75　205　206　207　208　209　210 |
| 数二　原函数 | 51　55　176　191　199　480 |
| 数二　不定积分的计算 | 52　53　54　57　466　467　472 |
| 数二　可积与定积分的性质 | 58　178　179　180　181　182　183　184　185　591 |
| 数二　定积分的计算 | 59　60　61　62　64　186　187　188　189　190　198　468　469　470　471　473　475　476　477　478　486　487　583　585　587　589　595 |
| 数二　变限积分 | 63　65　66　177　192　193　194　195　196　197　479　560　571　582　584　586　588　590　592 |
| 数二　反常积分 | 67　68　69　202　203　204　474　481　482　483　484　485　596　598　599　600 |
| 数二　定积分的应用 | 56　70　71　72　73　74　75　113　200　205　206　207　208　209　210　488　489　490　594　597　601　602　603　604　605 |
| 数三　原函数 | 55　176　191　199 |
| 数三　不定积分的计算 | 51　52　53　54　57　71　72 |
| 数三　可积与定积分的性质 | 178　179　180　181　182　183　184　185 |
| 数三　定积分的计算 | 58　59　60　61　62　64　73　186　187　188　189　190 |
| 数三　变限积分 | 63　65　66　82　177　192　193　194　195　196　197 |
| 数三　反常积分 | 67　68　69　202　203　204 |
| 数三　定积分的应用 | 70　74　75　197　198　205　206　207　208　209　586　587　588 |`, a: "", sol: R`(1)
\[
\int_{-a}^af(x)g(x)\,\mathrm{d}x
=\int_{-a}^0f(x)g(x)\,\mathrm{d}x+\int_0^af(x)g(x)\,\mathrm{d}x,
\]
又
\[
\int_{-a}^0f(x)g(x)\,\mathrm{d}x
\xlongequal{x=-t}\int_0^af(-t)g(-t)\,\mathrm{d}t,
\]
所以，
\[
\begin{aligned}
\int_{-a}^af(x)g(x)\,\mathrm{d}x
&=\int_0^af(-t)g(-t)\,\mathrm{d}t+\int_0^af(x)g(x)\,\mathrm{d}x\\
&=\int_0^af(-x)g(x)\,\mathrm{d}x+\int_0^af(x)g(x)\,\mathrm{d}x\\
&=\int_0^a[f(-x)+f(x)]g(x)\,\mathrm{d}x
=A\int_0^ag(x)\,\mathrm{d}x,
\end{aligned}
\]
故
\[
\int_{-a}^af(x)g(x)\,\mathrm{d}x=A\int_0^ag(x)\,\mathrm{d}x.
\]

(2) 在积分 \(\int_{-\frac{\pi}{2}}^{\frac{\pi}{2}}|\sin x|\arctan\mathrm{e}^x\,\mathrm{d}x\) 中，\(f(x)=\arctan\mathrm{e}^x,g(x)=|\sin x|\). 因为 \(g(-x)=g(x)\)，由
\[
[f(x)+f(-x)]'=(\arctan\mathrm{e}^x+\arctan\mathrm{e}^{-x})'
=\frac{\mathrm{e}^x}{1+\mathrm{e}^{2x}}-\frac{\mathrm{e}^{-x}}{1+\mathrm{e}^{-2x}}\equiv0,
\]
可知
\[
f(x)+f(-x)=\arctan\mathrm{e}^x+\arctan\mathrm{e}^{-x}=c(\text{常数}),
\]
即
\[
\arctan\mathrm{e}^x+\arctan\mathrm{e}^{-x}
=\arctan\mathrm{e}^0+\arctan\mathrm{e}^0=\frac{\pi}{2},
\]
所以，\(f(x),g(x)\) 满足已证结论的条件，故
\[
\int_{-\frac{\pi}{2}}^{\frac{\pi}{2}}|\sin x|\arctan\mathrm{e}^x\,\mathrm{d}x
=\frac{\pi}{2}\int_0^{\frac{\pi}{2}}\sin x\,\mathrm{d}x=\frac{\pi}{2}.
\]` },
    ]
  };
})();
