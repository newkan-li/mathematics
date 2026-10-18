window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["jc02_s9"] = {
    id: "jc02_s9",
    ch: "第二章 一元函数微分学",
    title: "零基础进阶题",
    probTitle: "第二章 一元函数微分学 零基础进阶题（含原书解析）",
    book: "李永乐《复习全书·基础篇 零基础进阶题》",
    pages: [7, 10],
    img: "assets/img/jcadv",
    problems: [
      { n: "1", q: R`设 \(f(x)\) 为可导的偶函数，且 \(\displaystyle\lim_{u\to0}\frac{f(1-3u)-f(1)}{u}=3\)，则曲线 \(y=f(x)\) 在点 \(x=-1\) 处法线的斜率为 ______.`, a: "", sol: R`由 \(f(x)\) 为可导的偶函数可知 \(f'(x)\) 为奇函数，即 \(f'(-x)=-f'(x)\).

又 \(\lim_{u\to0}\frac{f(1-3u)-f(1)}{u}=\lim_{u\to0}\frac{f(1-3u)-f(1)}{-3u}\cdot(-3)\)
\[ =-3f'(1)=3, \]

所以 \(f'(1)=-1\), \(f'(-1)=-f'(1)=1\), 故所求法线的斜率为 \(-\frac{1}{f'(-1)}=-1\).` },
      { n: "2", q: R`设 \(y=\ln[\ln^4(\ln^5 x)]\)，则 \(y'=\) ______.`, a: "", sol: R`函数变形为 \(y=4\ln[5\ln(\ln x)]=4\ln5+4\ln[\ln(\ln x)]\),

所以 \(y'=\frac{4}{x\ln x\ln(\ln x)}\).` },
      { n: "3", q: R`\(y=\left(\frac{x}{1+x}\right)^{\sin x}\)，则 \(\mathrm{d}y=\) ______.`, a: "", sol: R`化为指数函数
\[ y=\left(\frac{x}{1+x}\right)^{\sin x}=e^{\sin x\ln\frac{x}{1+x}} \]

则 \(y'=\left(\frac{x}{1+x}\right)^{\sin x}\left[\cos x\ln\frac{x}{1+x}+\frac{\sin x}{x(x+1)}\right]\),

所以 \(\mathrm{d}y=\left(\frac{x}{1+x}\right)^{\sin x}\left[\cos x\ln\frac{x}{1+x}+\frac{\sin x}{x(x+1)}\right]\mathrm{d}x\).

**【评注】** 也可取对数 \(\ln y=\sin x[\ln x-\ln(1+x)]\) 再求导，还可以直接利用微分形式不变性，直接求微分 \(\mathrm{d}y\).` },
      { n: "4", q: R`设 \(y=\underbrace{\sqrt{x\sqrt{x\cdots\sqrt{x}}}}_{n\text{层}}\)，则 \(\frac{\mathrm{d}y}{\mathrm{d}x}=\) ______.`, a: "", sol: R`\(y=\underbrace{\sqrt{x\sqrt{x\cdots\sqrt{x}}}}_{n\text{层}}=x^{\frac{1}{2}+\frac{1}{2^2}+\cdots+\frac{1}{2^n}}=x^{\frac{\frac{1}{2}\left(1-\frac{1}{2^n}\right)}{1-\frac{1}{2}}}=x^{1-\frac{1}{2^n}}\),

所以 \(y'=\frac{2^n-1}{2^n}x^{-\frac{1}{2^n}}\).` },
      { n: "5", q: R`设 \(f(x)=x(x+1)(x+2)\cdots(x+n)\)，则 \(f'(0)=\) ______.`, a: "", sol: R`方法一 用导数的定义
\[
\begin{aligned}
f'(0)&=\lim_{x\to0}\frac{f(x)-f(0)}{x}\\
&=\lim_{x\to0}\frac{x(x+1)(x+2)\cdots(x+n)}{x}\\
&=\lim_{x\to0}(x+1)(x+2)\cdots(x+n)=n!.
\end{aligned}
\]

方法二 令 \(g(x)=(x+1)(x+2)\cdots(x+n)\), 则 \(f(x)=xg(x)\),

有 \(f'(x)=g(x)+xg'(x)\),

因而 \(f'(0)=g(0)=n!\).

**【评注】** 还可用 \(n\) 项乘积的求导公式.` },
      { n: "6", q: R`函数 \(f(x)=\begin{cases}x^2\cos\frac{2}{x},&x\ne0,\\0,&x=0\end{cases}\) 在 \(x=0\) 处

(A) 不连续.

(B) 连续但不可导.

(C) 可导，但导函数在该点不连续.

(D) 导函数在该点连续.`, a: "(C)", sol: R`由 \(\lim_{x\to0}f(x)=\lim_{x\to0}x^2\cos\frac{2}{x}=0=f(0)\), \(f(x)\) 在 \(x=0\) 处连续.
且 \(\lim_{x\to0}\frac{f(x)-f(0)}{x}=\lim_{x\to0}\frac{x^2\cos\frac{2}{x}}{x}=0\), 即 \(f'(0)=0\), \(f(x)\) 在 \(x=0\) 处可导.

所以
\[ f'(x)=\begin{cases}2x\cos\frac{2}{x}+2\sin\frac{2}{x},&x\neq0,\\0,&x=0,\end{cases} \]

而 \(\lim_{x\to0}f'(x)=\lim_{x\to0}\left(2x\cos\frac{2}{x}+2\sin\frac{2}{x}\right)\) 不存在，\(f'(x)\) 在 \(x=0\) 处不连续.

答案选(C).` },
      { n: "7", q: R`设 \(f(x)=\begin{cases}\frac{1}{2}x^2,&x\leqslant2,\\ax+b,&x>2\end{cases}\) 在 \(x=2\) 处可导，则必有

(A) \(a=b=2\).

(B) \(a=2,b=-2\).

(C) \(a=1,b=2\).

(D) \(a=3,b=2\).`, a: "(B)", sol: R`\(f(x)\) 在 \(x=2\) 处可导，则 \(f(x)\) 在 \(x=2\) 处连续，

而 \(f(2^+)=\lim_{x\to2^+}f(x)=\lim_{x\to2^+}(ax+b)=2a+b\),

\(f(2^-)=\lim_{x\to2^-}f(x)=\lim_{x\to2^-}\frac{1}{2}x^2=2\),

有 \(2a+b=2\),

再计算 \(f'_+(2)=\lim_{x\to2^+}\frac{f(x)-f(2)}{x-2}=\lim_{x\to2^+}\frac{ax+b-2}{x-2}=\lim_{x\to2^+}\frac{ax-2a}{x-2}=a\),

\(f'_-(2)=\lim_{x\to2^-}\frac{f(x)-f(2)}{x-2}=\lim_{x\to2^-}\frac{\frac{1}{2}x^2-2}{x-2}=\lim_{x\to2^-}\frac{1}{2}(x+2)=2\),

所以 \(a=2,b=-2\). 答案选(B).` },
      { n: "8", q: R`设 \(f(x)\) 在 \(x=x_0\) 处连续且 \(f'(x_0)\) 不存在，则曲线 \(y=f(x)\) 在 \((x_0,f(x_0))\) 处

(A) 没有切线.

(B) 有一条不垂直于 \(x\) 轴的切线.

(C) 有一条垂直于 \(x\) 轴的切线.

(D) 或者不存在切线或者有一条垂直于 \(x\) 轴的切线.`, a: "(D)", sol: R`\(f'(x_0)\) 不存在且为无穷大时，曲线 \(y=f(x)\) 在 \((x_0,f(x_0))\) 处有一条垂直于 \(x\) 轴的切线；否则曲线 \(y=f(x)\) 在 \((x_0,f(x_0))\) 处没有切线. 答案选(D).

**【评注】** 曲线 \(y=|x|\) 在 \((0,0)\) 处没有切线；曲线 \(y=x^{\frac{1}{3}}\) 在 \((0,0)\) 处有一条垂直于 \(x\) 轴的切线.` },
      { n: "9", q: R`曲线 \(y=e^{x^{-2}}\arctan\frac{x+1}{x-1}\) 的渐近线有

(A) 0条.

(B) 1条.

(C) 2条.

(D) 3条.`, a: "(C)", sol: R`显然，函数的定义域为 \(x\neq0,1\).

由 \(\lim_{x\to0}y=\lim_{x\to0}e^{x^{-2}}\arctan\frac{x+1}{x-1}=\infty\), 知曲线有铅直渐近线 \(x=0\).

而 \(\lim_{x\to\infty}y=\lim_{x\to\infty}e^{x^{-2}}\arctan\frac{x+1}{x-1}=\frac{\pi}{4}\), 曲线有水平渐近线 \(y=\frac{\pi}{4}\).

同时，可得曲线没有斜渐近线. 答案选(C).

**【评注】** 在有水平渐近线的方向一定没有斜渐近线.` },
      { n: "10", q: R`设 \(\sqrt{x}+\sqrt{y}=\sqrt{a}\)，求隐函数 \(y=y(x)\) 的二阶导数 \(\frac{\mathrm{d}^2y}{\mathrm{d}x^2}\).`, a: "", sol: R`方程两端对 \(x\) 求导
\[ \frac{1}{2\sqrt{x}}+\frac{1}{2\sqrt{y}}\cdot y'=0,\ \text{即}\ y'=-\frac{\sqrt{y}}{\sqrt{x}}, \]

所以
\[ y''=-\frac{\sqrt{x}\cdot\frac{1}{2\sqrt{y}}\cdot y'-\sqrt{y}\cdot\frac{1}{2\sqrt{x}}}{x}=-\frac{xy'-y}{2x^{3/2}\sqrt{y}}=\frac{\sqrt{x}+\sqrt{y}}{2x^{3/2}}. \]` },
      { n: "11", q: R`设 \(y=\sqrt[3]{\frac{(x-2)^2}{(1-2x)(1+x)}}\)，求 \(y'\).`, a: "", sol: R`两边取对数
\[ \ln y=\frac{1}{3}[2\ln(x-2)-\ln(1+x)-\ln(1-2x)] \]

方程两边对 \(x\) 求导数
\[ \frac{1}{y}\cdot y'=\frac{1}{3}\left(\frac{2}{x-2}-\frac{1}{1+x}+\frac{2}{1-2x}\right) \]

所以
\[ y'=\frac{1}{3}\left[\frac{(x-2)^2}{(1-2x)(1+x)}\right]^{1/3}\left(\frac{2}{x-2}-\frac{1}{1+x}+\frac{2}{1-2x}\right). \]` },
      { n: "12", q: R`已知 \(\begin{cases}x=t-\ln(1+t),\\y=t^3+t^2,\end{cases}\) 求 \(\frac{\mathrm{d}^2y}{\mathrm{d}x^2}\).`, a: "", sol: R`\[ \frac{\mathrm{d}y}{\mathrm{d}x}=\frac{\frac{\mathrm{d}y}{\mathrm{d}t}}{\frac{\mathrm{d}x}{\mathrm{d}t}}=\frac{3t^2+2t}{1-\frac{1}{1+t}}=3t^2+5t+2, \]

所以
\[ \frac{\mathrm{d}^2y}{\mathrm{d}x^2}=\frac{\mathrm{d}(3t^2+5t+2)}{\mathrm{d}t}\cdot\frac{\mathrm{d}t}{\mathrm{d}x}=\frac{6t+5}{\frac{\mathrm{d}x}{\mathrm{d}t}}=\frac{6t+5}{1-\frac{1}{1+t}}=\frac{(1+t)(6t+5)}{t}. \]` },
      { n: "13", q: R`设 \(f(x)\) 连续，且 \(\varphi(x)=\int_0^{x^2}tf(x^2-t)\,\mathrm{d}t+x^x\)，求 \(\varphi'(x)\).`, a: "", sol: R`令 \(x^2-t=u\), 则
\[ \int_0^{x^2}tf(x^2-t)\mathrm{d}t=\int_0^{x^2}(x^2-u)f(u)\mathrm{d}u. \]

于是
\[ \varphi(x)=x^2\int_0^{x^2}f(u)\mathrm{d}u-\int_0^{x^2}uf(u)\mathrm{d}u+e^{x\ln x}, \]

\[ \varphi'(x)=2x\int_0^{x^2}f(u)\mathrm{d}u+x^2f(x^2)\cdot2x-x^2f(x^2)\cdot2x+x^x(1+\ln x) \]

\[ =2x\int_0^{x^2}f(u)\mathrm{d}u+x^x(1+\ln x). \]` },
      { n: "14", q: R`设 \(y=\ln(x^2+3x+2)\)，求 \(\mathrm{d}y,y^{(2024)}\).`, a: "", sol: R`\(\mathrm{d}y=\frac{2x+3}{x^2+3x+2}\mathrm{d}x=\left(\frac{1}{x+1}+\frac{1}{x+2}\right)\mathrm{d}x\),

\[ y^{(2024)}=\left(\frac{1}{x+1}\right)^{(2023)}+\left(\frac{1}{x+2}\right)^{(2023)} \]

\[ =-2023![(x+1)^{-2024}+(x+2)^{-2024}]. \]` },
      { n: "15", q: R`设 \(f(x)\) 在 \(x=0\) 处三阶可导，且 \(\lim_{x\to0}\frac{f(x)}{\ln(1+\sin^3 x)}=2\)，求 \(f(0),f'(0),f''(0),f'''(0)\).`, a: "", sol: R`方法一 由 \(\lim_{x\to0}\frac{f(x)}{\ln(1+\sin^3x)}=\lim_{x\to0}\frac{f(x)}{\sin^3x}=\lim_{x\to0}\frac{f(x)}{x^3}=2\), 可知 \(f(0)=0\),

于是
\[ f'(0)=\lim_{x\to0}\frac{f(x)}{x}=\lim_{x\to0}\frac{f(x)}{x^3}\cdot x^2=0, \]

\[ f''(0)=\lim_{x\to0}\frac{f'(x)}{x}=\lim_{x\to0}\frac{f(x)}{x^3}\cdot2x=0, \]

\[ f'''(0)=\lim_{x\to0}\frac{f''(x)}{x}=\lim_{x\to0}\frac{f(x)}{x^3}\cdot6=12. \]

方法二 用泰勒公式
\[ f(x)=f(0)+f'(0)x+\frac{f''(0)}{2!}x^2+\frac{f'''(0)}{3!}x^3+o(x^3) \]
由 \(\lim_{x\to0}\frac{f(x)}{\ln(1+\sin^3x)}=\lim_{x\to0}\frac{f(x)}{\sin^3x}=\lim_{x\to0}\frac{f(x)}{x^3}=2\), 得
\[ f(0)=f'(0)=f''(0)=0, f'''(0)=12. \]` },
      { n: "16", q: R`设 \(f(x)\) 在 \([0,1]\) 上连续，在 \((0,1)\) 上可导，且 \(f(0)=1,f(1)=0\)，求证在 \((0,1)\) 内至少有一点 \(\xi\)，使 \(f'(\xi)=-\frac{f(\xi)}{\xi}\).`, a: "", sol: R`设 \(\varphi(x)=xf(x)\),

\(\varphi(x)\) 在 \([0,1]\) 上连续，在 \((0,1)\) 上可导，且 \(\varphi(0)=\varphi(1)=0\),

由罗尔定理，存在 \(\xi\in(0,1)\), 使得 \(\varphi'(\xi)=0\),

即 \(\xi f'(\xi)+f(\xi)=0\), 亦是 \(f'(\xi)=-\frac{f(\xi)}{\xi}\).` },
      { n: "17", q: R`设 \(f(x)\) 在 \([a,b]\) 上连续且 \(f(x)>0\)，证明：在 \([a,b]\) 内有唯一的一点 \(\xi\)，使得

\[
\int_a^\xi f(x)\,\mathrm{d}x=\int_\xi^b\frac{\mathrm{d}x}{f(x)}.
\]`, a: "", sol: R`令 \(F(x)=\int_a^x f(t)\mathrm{d}t-\int_x^b\frac{\mathrm{d}t}{f(t)}\), 则 \(F(x)\) 在 \([a,b]\) 上连续,

因为 \(F(a)=-\int_a^b\frac{\mathrm{d}t}{f(t)}<0, F(b)=\int_a^b f(t)\mathrm{d}t>0\),

所以至少存在一点 \(\xi\in(a,b)\), 使得 \(F(\xi)=0\), 即 \(\int_a^\xi f(x)\mathrm{d}x=\int_\xi^b\frac{\mathrm{d}x}{f(x)}\),

下证唯一性，\(F'(x)=f(x)+\frac{1}{f(x)}>0\), 则 \(F(x)\) 在 \([a,b]\) 上单调递增，所以有唯一的一个点 \(\xi\) 满足所证的式子.` },
      { n: "18", q: R`证明：当 \(x>0\) 时，\(e^x-(1+x)>1-\cos x\).`, a: "", sol: R`令 \(f(x)=e^x-(1+x)-1+\cos x=e^x-x-2+\cos x, f(0)=0\),

则 \(f'(x)=e^x-1-\sin x, f''(x)=e^x-\cos x>0 (x>0)\)

所以 \(f'(x)\) 单调递增，当 \(x>0\) 时，\(f'(x)>f'(0)=0\),

因而 \(f(x)\) 单调递增，当 \(x>0\) 时，\(f(x)>f(0)=0\)

即 \(e^x-(1+x)>1-\cos x\).` },
      { n: "19", q: R`证明：\(x\ne0\) 时，\(\frac{e^x+e^{-x}}{2}>1+\frac{x^2}{2}\).`, a: "", sol: R`令 \(F(x)=\frac{e^x+e^{-x}}{2}-1-\frac{x^2}{2}, F(0)=0\),

\(F'(x)=\frac{e^x-e^{-x}-2x}{2}, F'(0)=0, F''(x)=\frac{1}{2}(e^x+e^{-x}-2)>0, x\neq0\),

故 \(F'(x)\) 单调增加,

当 \(x>0\) 时，\(F'(x)>F'(0)=0\), 从而 \(F(x)\) 单调增加，

当 \(x<0\) 时，\(F'(x)<F'(0)=0\), 从而 \(F(x)\) 单调减少，

所以 \(F(x)\) 在 \(x=0\) 时取到最小值，又 \(F(0)=0\), 故 \(F(x)>F(0)=0 (x\neq0)\)

即 \(x\neq0\) 时，\(\frac{e^x+e^{-x}}{2}>1+\frac{x^2}{2}\).` },
      { n: "20", q: R`求函数 \(f(x)=x-e^x\) 的零点.`, a: "", sol: R`由 \(f'(x)=1-e^x=0\), 得 \(x=0\).

当 \(x\in(-\infty,0)\) 时，\(f(x)\) 单调递增；当 \(x\in(0,+\infty)\) 时，\(f(x)\) 单调递减.

而 \(f(0)=-1<0\), 且 \(f(x)\) 在 \(x=0\) 处取到最大值，有 \(f(x)\leqslant f(0)=-1<0\).

所以函数 \(f(x)=x-e^x\) 没有零点.` },
      { n: "21", q: R`设函数 \(y=\frac{x^3+4}{x^2}\)，求 \(y\) 的单调区间、极值及曲线 \(y=\frac{x^3+4}{x^2}\) 的凹凸区间、拐点.`, a: "", sol: R`函数的定义域为 \((-\infty,0)\cup(0,+\infty)\),

令 \(y'=1-\frac{8}{x^3}=0\), 得驻点 \(x=2\), 还有不可导点 \(x=0\), 且 \(y''=\frac{24}{x^4}>0\),

所以函数的单调递增区间为 \((-\infty,0),(2,+\infty)\), 单调递减区间为 \((0,2)\),
极小值为 \(f(2)=3\), 曲线在区间为 \((-\infty,0),(0,+\infty)\) 是凹的，无拐点.` },
      { n: "22", q: R`求函数 \(f(x)=|x-2|e^x\) 在 \([0,3]\) 上的最大、最小值.`, a: "", sol: R`由题知
\[ f(x)=\begin{cases}-(x-2)e^x,&0\leqslant x\leqslant2,\\(x-2)e^x,&2<x\leqslant3,\end{cases}\qquad f'(x)=\begin{cases}-(x-1)e^x,&0<x<2,\\(x-1)e^x,&2<x<3,\end{cases} \]

可见在 \((0,3)\) 内 \(x=1\) 是 \(f(x)\) 的驻点，\(x=2\) 是 \(f(x)\) 的不可导点.

因为 \(f(0)=2, f(1)=e, f(2)=0, f(3)=e^3\),

所以函数的最大值为 \(f(3)=e^3\), 最小值为 \(f(2)=0\).

## 第三章 一元函数积分学` },
    ]
  };
})();
