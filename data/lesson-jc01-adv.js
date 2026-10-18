window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["jc01_s9"] = {
    id: "jc01_s9",
    ch: "第一章 函数 极限 连续",
    title: "零基础进阶题",
    probTitle: "第一章 零基础进阶题（含原书解析）",
    book: "李永乐《复习全书·基础篇 零基础进阶题》",
    pages: [1, 6],
    img: "assets/img/jcadv",
    problems: [
      { n: "1", q: R`函数 \(f(x)=xe^{-x^2}\int_1^x e^{t^2}\,\mathrm{d}t\) 在 \((-\infty,+\infty)\) 上是

(A) 奇函数.  
(B) 偶函数.  
(C) 有界函数.  
(D) 无界函数.`, a: "(C)", sol: R`\(f(x)=xe^{-x^2}\int_1^x e^{t^2}\,\mathrm{d}t\) 在 \((-\infty,+\infty)\) 上是连续函数，且
\[
\lim_{x\to\infty}f(x)=\lim_{x\to\infty}xe^{-x^2}\int_1^x e^{t^2}\,\mathrm{d}t
=\lim_{x\to\infty}\frac{\int_1^x e^{t^2}\,\mathrm{d}t}{\frac1x e^{x^2}}
\]
\[
=\lim_{x\to\infty}\frac{e^{x^2}}{-\frac1{x^2}e^{x^2}+2e^{x^2}}
=\lim_{x\to\infty}\frac{1}{-\frac1{x^2}+2}=\frac12.
\]
函数在 \((-\infty,+\infty)\) 上有界，正确答案为(C).

**【评注】** 由于 \(\int_1^x e^{t^2}\,\mathrm{d}t=\int_0^x e^{t^2}\,\mathrm{d}t-\int_0^1 e^{t^2}\,\mathrm{d}t\)，而 \(\int_0^x e^{t^2}\,\mathrm{d}t\) 是奇函数，所以 \(\int_1^x e^{t^2}\,\mathrm{d}t\) 既不是奇函数也不是偶函数，进而 \(f(x)\) 既不是奇函数也不是偶函数.` },
      { n: "2", q: R`设 \(f(x)\) 是单调递增的，\(g(x)\) 是单调递减的，且 \(g[f(x)]\) 有意义，则 \(g[f(x)]\) 是

(A) 单调递增的.  
(B) 单调递减的.  
(C) 既不单调递增也不单调递减.  
(D) 以上答案都不对.`, a: "(B)", sol: R`设 \(f(x)\) 的定义域为 \(D\)，由于 \(f(x)\) 是单调递增的，\(g(x)\) 是单调递减的，
\(\forall x_1,x_2\in D\)，当 \(x_1<x_2\) 时，有 \(f(x_1)<f(x_2)\)，进而 \(g[f(x_1)]>g[f(x_2)]\)，所以 \(g[f(x)]\) 是单调递减的，故应选(B).` },
      { n: "3", q: R`下列结论中正确的是

(A) 两个数列 \(\{a_n\}\) 与 \(\{b_n\}\) 都发散，则数列 \(\{a_n+b_n\}\) 必发散.  
(B) 已知 \(\lim_{x\to\infty}a_n=0\)，对任意数列 \(\{b_n\}\) 必有 \(\lim_{x\to\infty}a_nb_n=0\).  
(C) 数列 \(\{a_n\}\) 与 \(\{b_n\}\) 都发散，则数列 \(\{a_nb_n\}\) 必发散.  
(D) 已知 \(\lim_{x\to\infty}a_nb_n=0\)，且 \(\lim_{x\to\infty}b_n=\infty\)，则必有 \(\lim_{x\to\infty}a_n=0\).`, a: "(D)", sol: R`举反例：
\(\{a_n=(-1)^n\}\)，\(\{b_n=(-1)^{n-1}\}\) 都发散，但是 \(\{a_n+b_n\}=\{0\}\) 是收敛的，排除(A).

\(a_n=\frac1n,\lim_{n\to\infty}a_n=0\)，而 \(b_n=n\)，则 \(\lim_{n\to\infty}a_nb_n=\lim_{n\to\infty}\frac1n\cdot n=1\ne0\)，排除(B).

\(a_n=b_n=(-1)^n\ (n=1,2,\cdots)\)，\(\{a_n\}\) 与 \(\{b_n\}\) 都是发散的，但 \(\{a_nb_n\}=\{1\}\) 是收敛的，排除(C).

因此应选(D).

**【评注】** 事实上，对于(D)，\(\lim_{n\to\infty}a_n=\lim_{n\to\infty}\left(a_nb_n\frac1{b_n}\right)=\lim_{n\to\infty}(a_nb_n)\lim_{n\to\infty}\frac1{b_n}=0\).` },
      { n: "4", q: R`已知 \(\lim_{x\to a}f(x)=\lim_{x\to a}g(x)\)，则 \(\lim_{x\to\infty}\frac{f(x)}{g(x)}=\)

(A) \(1\).  
(B) \(0\).  
(C) \(\infty\).  
(D) 不能确定.`, a: "(D)", sol: R`举反例：

取 \(f(x)=2(x-a),g(x)=x-a\)，显然 \(\lim_{x\to a}f(x)=\lim_{x\to a}g(x)\) 但 \(\lim_{x\to a}\frac{f(x)}{g(x)}=2\).

因此应选(D).

**【评注】** 实际上，可选择 \(f(x)=k(x-a),g(x)=x-a\ (k\ne0)\)，则 \(\lim_{x\to a}\frac{f(x)}{g(x)}=k\).` },
      { n: "5", q: R`设 \(\alpha=\frac{1-x}{1+x},\beta=1-\sqrt[3]{x}\)，当 \(x\to1\) 时

(A) \(\alpha\) 与 \(\beta\) 是等价无穷小.  
(B) \(\alpha\) 与 \(\beta\) 是同阶无穷小.  
(C) \(\alpha\) 是比 \(\beta\) 低阶的无穷小.  
(D) \(\alpha\) 是比 \(\beta\) 高阶的无穷小.`, a: "(B)", sol: R`由于
\[
\lim_{x\to1}\frac{\alpha}{\beta}
=\lim_{x\to1}\frac{1-x}{(1+x)(1-\sqrt[3]{x})}
=\frac12\lim_{x\to1}\frac{1-x}{1-\sqrt[3]{x-1+1}}
\]
\[
=\frac12\lim_{x\to1}\frac{1-x}{-\frac13(x-1)}=\frac32.
\]
所以 \(\alpha\) 与 \(\beta\) 是同阶无穷小，答案选(B).` },
      { n: "6", q: R`若 \(\lim_{x\to-1}\frac{x^3+ax+4}{x+1}=l\)，则

(A) \(a=6,l=3\).  
(B) \(a=-6,l=-3\).  
(C) \(a=3,l=6\).  
(D) \(a=-3,l=-6\).`, a: "(C)", sol: R`极限 \(\lim_{x\to-1}\frac{x^3+ax+4}{x+1}=l\) 存在，由分母趋向于 \(0\)，得分子趋向于 \(0\)，
从 \(\lim_{x\to-1}(x^3+ax+4)=0\)，有 \(a=3\).

因而
\[
l=\lim_{x\to-1}\frac{x^3+3x+4}{x+1}
=\lim_{x\to-1}\frac{x^3+1+3x+3}{x+1}
=\lim_{x\to-1}(x^2-x+4)=6.
\]
答案选(C).

**【评注】** 也可以把选择的值代入检验.` },
      { n: "7", q: R`设 \(f(x)\) 为不恒等于零的奇函数，且 \(f'(0)\) 存在，则函数 \(g(x)=\frac{f(x)}{x}\)

(A) 在 \(x=0\) 处极限不存在.  
(B) \(x=0\) 是跳跃间断点.  
(C) 在 \(x=0\) 处右极限不存在.  
(D) \(x=0\) 是可去间断点.`, a: "(D)", sol: R`由于 \(f(x)\) 在 \(x=0\) 处可导，知 \(f(x)\) 在 \(x=0\) 处连续；\(f(x)\) 为奇函数，故 \(f(0)=0\).
\[
\lim_{x\to0}g(x)=\lim_{x\to0}\frac{f(x)}{x}
=\lim_{x\to0}\frac{f(x)-f(0)}{x-0}=f'(0).
\]
显然 \(g(x)=\frac{f(x)}{x}\) 在 \(x=0\) 处没有定义，所以 \(x=0\) 是 \(g(x)\) 的可去间断点. 故应选(D).` },
      { n: "8", q: R`设 \(f(x)=\lim_{n\to\infty}\frac{2x^n-3x^{-n}}{x^n+x^{-n}}\sin\frac{1}{x}\)，则 \(f(x)\) 有

(A) 两个第一类间断点.  
(B) 三个第一类间断点.  
(C) 两个第一类间断点和一个第二类间断点.  
(D) 一个第一类间断点和一个第二类间断点.`, a: "(C)", sol: R`注意到当 \(|x|<1\) 时，\(\lim_{n\to\infty}x^n=0\)，当 \(|x|>1\) 时，\(\lim_{n\to\infty}x^n=\infty\)，可求得
\[
f(x)=
\begin{cases}
-3\sin\frac1x, & 0<|x|<1,\\[2mm]
-\frac12\sin\frac1x, & |x|=1,\\[2mm]
2\sin\frac1x, & |x|>1,
\end{cases}
\]
可见，\(x=-1\) 和 \(x=1\) 都是 \(f(x)\) 的第一类间断点，而 \(x=0\) 是 \(f(x)\) 的第二类间断点，故选(C).` },
      { n: "9", q: R`求函数 \(y=\ln(x+\sqrt{x^2-1})\ (x\ge1)\) 的反函数.`, a: "", sol: R`由 \(y=\ln(x+\sqrt{x^2-1})\)，有

\[
e^y=x+\sqrt{x^2-1}. \tag{①}
\]
于是
\[
e^{-y}=\frac{1}{x+\sqrt{x^2-1}}=x-\sqrt{x^2-1}. \tag{②}
\]
①式与②式相加得
\[
x=\frac12(e^y+e^{-y}).
\]
当 \(x\ge1\) 时，\(y=\ln(x+\sqrt{x^2-1})\ge\ln1=0\).

因此所求反函数为
\[
y=\frac12(e^x+e^{-x}),\quad x\ge0.
\]

**【评注】** 也可从①中解出 \(x\) 得到反函数.` },
      { n: "10", q: R`求极限
\[
\lim_{x\to+\infty}\left(\sqrt{x+\sqrt{x+\sqrt{x}}}-\sqrt{x}\right).
\]`, a: "", sol: R`\[
\lim_{x\to+\infty}\left(\sqrt{x+\sqrt{x+\sqrt{x}}}-\sqrt{x}\right)
\]
\[
=\lim_{x\to+\infty}\frac{\left(\sqrt{x+\sqrt{x+\sqrt{x}}}-\sqrt{x}\right)\left(\sqrt{x+\sqrt{x+\sqrt{x}}}+\sqrt{x}\right)}{\sqrt{x+\sqrt{x+\sqrt{x}}}+\sqrt{x}}
\]
\[
=\lim_{x\to+\infty}\frac{\sqrt{x+\sqrt{x}}}{\sqrt{x+\sqrt{x+\sqrt{x}}}+\sqrt{x}}
=\lim_{x\to+\infty}\frac{\sqrt{1+\sqrt{\frac1x}}}{\sqrt{1+\sqrt{\frac1x+\sqrt{\frac1{x^3}}}}+1}
=\frac12.
\]` },
      { n: "11", q: R`求极限
\[
\lim_{x\to1}\frac{1+\cos\pi x}{x^2-2x+1}.
\]`, a: "", sol: R`\[
\lim_{x\to1}\frac{1+\cos\pi x}{x^2-2x+1}
=\lim_{x\to1}\frac{-\pi\sin\pi x}{2x-2}
=\lim_{x\to1}\frac{-\pi^2\cos\pi x}{2}
=\frac{\pi^2}{2}.
\]` },
      { n: "12", q: R`求极限
\[
\lim_{x\to0}\frac{x^2}{\sqrt{1+x\sin x}-\sqrt{\cos x}}.
\]`, a: "", sol: R`\[
\lim_{x\to0}\frac{x^2}{\sqrt{1+x\sin x}-\sqrt{\cos x}}
=\lim_{x\to0}\frac{x^2\left(\sqrt{1+x\sin x}+\sqrt{\cos x}\right)}{1+x\sin x-\cos x}
\]
\[
=2\lim_{x\to0}\frac{x^2}{1+x\sin x-\cos x}
=2\lim_{x\to0}\frac{2x}{2\sin x+x\cos x}
=\frac43.
\]` },
      { n: "13", q: R`求极限
\[
\lim_{x\to0}\frac{\int_0^{x^2}t^{\frac{3}{2}}\,\mathrm{d}t}{\int_0^x t(t-\sin t)\,\mathrm{d}t}.
\]`, a: "", sol: R`\[
\lim_{x\to0}\frac{\int_0^{x^2}t^{\frac32}\,\mathrm{d}t}{\int_0^x t(t-\sin t)\,\mathrm{d}t}
=\lim_{x\to0}\frac{x^3\cdot2x}{x(x-\sin x)}
=2\lim_{x\to0}\frac{x^3}{x-\sin x}
\]
\[
=2\lim_{x\to0}\frac{3x^2}{1-\cos x}=12.
\]` },
      { n: "14", q: R`求极限
\[
\lim_{x\to\infty}\left(\frac{2x^2-x+1}{2x^2+x-1}\right)^x.
\]`, a: "", sol: R`**方法一** 利用重要极限
\[
\lim_{x\to\infty}\left(\frac{2x^2-x+1}{2x^2+x-1}\right)^x
=\lim_{x\to\infty}\left[\left(1+\frac{-2x+2}{2x^2+x-1}\right)^{\frac{2x^2+x-1}{-2x+2}}\right]^{\frac{-2x^2+2x}{2x^2+x-1}}
=e^{-1}.
\]
**方法二** 利用结论

\[
\lim_{x\to\infty}\left(\frac{2x^2-x+1}{2x^2+x-1}\right)^x
=e^{\lim_{x\to\infty}x\left(\frac{2x^2-x+1}{2x^2+x-1}-1\right)}
=e^{\lim_{x\to\infty}\frac{-2x^2+2x}{2x^2+x-1}}=e^{-1}.
\]` },
      { n: "15", q: R`求极限
\[
\lim_{x\to0^+}\left(\frac{1}{x^2}\right)^{\tan x}.
\]`, a: "", sol: R`本题为“\(\infty^0\)”型未定式，先化为指数函数再求极限即可.
\[
\lim_{x\to0^+}\left(\frac1{x^2}\right)^{\tan x}
=\lim_{x\to0^+}e^{\tan x\ln\frac1{x^2}}
=e^{-2\lim\limits_{x\to0^+}\tan x\ln x},
\]
又 \(\lim_{x\to0^+}\tan x\cdot\ln x=\lim_{x\to0^+}x\cdot\ln x=0\)，故 \(\lim_{x\to0^+}\left(\frac1{x^2}\right)^{\tan x}=e^0=1\).` },
      { n: "16", q: R`求极限
\[
\lim_{x\to\infty}\left[(2+x)e^{\frac{1}{x}}-x\right].
\]`, a: "", sol: R`为未定式“\(\infty-\infty\)”型，令 \(x=\frac1t\)，则
\[
\lim_{x\to\infty}\left[(2+x)e^{\frac1x}-x\right]
=\lim_{t\to0}\frac{(2t+1)e^t-1}{t}
=\lim_{t\to0}(2t+3)e^t=3.
\]` },
      { n: "17", q: R`求极限
\[
\lim_{x\to0}\left[\frac{1}{4x}-\frac{1}{2x(e^{\pi x}+1)}\right].
\]`, a: "", sol: R`\[
\lim_{x\to0}\left[\frac1{4x}-\frac1{2x(e^{\pi x}+1)}\right]
=\lim_{x\to0}\frac{(e^{\pi x}+1)-2}{4x(e^{\pi x}+1)}
\]
\[
=\lim_{x\to0}\frac{e^{\pi x}-1}{4x}\cdot\lim_{x\to0}\frac1{e^{\pi x}+1}
=\frac{\pi}{8}.
\]` },
      { n: "18", q: R`求数列的极限 \(\lim_{n\to\infty}n(\sqrt[n]{a}-1)\ (a>0)\).`, a: "", sol: R`利用函数的极限求数列的极限，考虑
\[
\lim_{x\to+\infty}x(\sqrt[x]{a}-1)
=\lim_{x\to+\infty}\frac{a^{\frac1x}-1}{\frac1x}
=\lim_{x\to+\infty}\frac{a^{\frac1x}\ln a\left(-\frac1{x^2}\right)}{-\frac1{x^2}}
=\lim_{x\to+\infty}a^{\frac1x}\ln a=\ln a.
\]
或者
\[
\lim_{x\to+\infty}\frac{a^{\frac1x}-1}{\frac1x}
=\lim_{x\to+\infty}\frac{e^{\frac1x\ln a}-1}{\frac1x}
=\lim_{x\to+\infty}\frac{\frac1x\ln a}{\frac1x}=\ln a.
\]` },
      { n: "19", q: R`设
\[
f(x)=
\begin{cases}
\dfrac{\ln\left(1+\dfrac{x}{3}\right)}{x}, & x<0,\\[6pt]
\dfrac{1}{x^3}\displaystyle\int_0^x \sin t^2\,\mathrm{d}t, & x\ge0,
\end{cases}
\quad\text{求}\ \lim_{x\to0}f(x).
\]`, a: "", sol: R`左极限
\[
\lim_{x\to0^-}f(x)=\lim_{x\to0^-}\frac{\ln\left(1+\frac{x}{3}\right)}{x}=\frac13,
\]
右极限
\[
\lim_{x\to0^+}f(x)=\lim_{x\to0^+}\frac{\sin x^2}{3x^2}=\frac13,
\]
所以 \(\lim_{x\to0}f(x)=\frac13\).` },
      { n: "20", q: R`设 \(f(x)\) 具有二阶连续导数，且 \(\lim_{x\to0}\frac{f(x)}{x}=0\)，\(f''(0)=4\)，求
\[
\lim_{x\to0}\left[1+\frac{f(x)}{x}\right]^{\frac{1}{x}}.
\]`, a: "", sol: R`\(f(x)\) 二阶可导知 \(f(x),f'(x)\) 连续，由 \(\lim_{x\to0}\frac{f(x)}{x}=0\)，得 \(\lim_{x\to0}f(x)=0\)，即 \(f(0)=0\).

又因为 \(\lim_{x\to0}f'(x)=f'(0)=\lim_{x\to0}\frac{f(x)}{x}=0\)，则
\[
\lim_{x\to0}\left[1+\frac{f(x)}{x}\right]^{\frac1x}
=e^{\lim\limits_{x\to0}\frac1x\cdot\frac{f(x)}{x}}
\]
用洛必达法则
\[
\lim_{x\to0}\frac{f(x)}{x^2}
=\lim_{x\to0}\frac{f'(x)}{2x}
=\lim_{x\to0}\frac{f''(x)}{2}=\frac{f''(0)}{2}=2.
\]

所以
\[
\lim_{x\to0}\left[1+\frac{f(x)}{x}\right]^{\frac1x}=e^2.
\]` },
      { n: "21", q: R`设 \(x_1=1,\ x_n=1+\frac{x_{n-1}}{1+x_{n-1}}\)，证明 \(\lim_{n\to\infty}x_n\) 存在，并求此极限.`, a: "", sol: R`显然 \(x_n>0\)，且
\[
x_n=1+\frac{x_{n-1}}{1+x_{n-1}}=2-\frac1{1+x_{n-1}}<2,
\]
即数列 \(\{x_n\}\) 有界.

下用数学归纳法证明数列 \(\{x_n\}\) 是单调递增的，由于 \(x_2-x_1=\frac12>0\)，因此 \(x_2>x_1\).

设 \(x_n>x_{n-1}\)，则
\[
x_{n+1}-x_n=1+\frac{x_n}{1+x_n}-\left(1+\frac{x_{n-1}}{1+x_{n-1}}\right)
=\frac{x_n-x_{n-1}}{(1+x_n)(1+x_{n-1})}>0,
\]
所以数列 \(\{x_n\}\) 单调增加，由单调有界原理，\(\lim_{n\to\infty}x_n\) 存在.

设 \(\lim_{n\to\infty}x_n=a\)，则 \(x_n=1+\frac{x_{n-1}}{1+x_{n-1}}\)，两边取极限得 \(a=1+\frac{a}{1+a}\)，
解得 \(a=\frac{1\pm\sqrt5}{2}\). 因为 \(a\) 非负，进而 \(\lim_{n\to\infty}x_n=\frac{1+\sqrt5}{2}\).` },
      { n: "22", q: R`讨论函数 \(y=\frac{1}{1-\frac{1}{x}}\) 的间断点的类型.`, a: "", sol: R`函数为初等函数，函数的定义域为 \(x\ne0,1\)，因而 \(x=0,1\) 是 \(y=\frac1{1-\frac1x}\) 的间断点.

因为 \(\lim_{x\to0}\frac1{1-\frac1x}=0\)，所以 \(x=0\) 是 \(y\) 的可去间断点.

又 \(\lim_{x\to1}\frac1{1-\frac1x}=\infty\)，所以 \(x=1\) 是 \(y\) 的无穷间断点.` },
      { n: "23", q: R`设 \(f(x)\) 在闭区间 \([a,b]\) 上连续，且 \(a<c<d<e<b\)，试证对任意 \(p,q,r>0\)，在 \([a,b]\) 上必有一点 \(\xi\) 使得
\[
pf(c)+qf(d)+rf(e)=(p+q+r)f(\xi).
\]`, a: "", sol: R`因为 \(f(x)\) 在闭区间 \([a,b]\) 上连续，所以 \(f(x)\) 在 \([a,b]\) 上取最大值 \(M\) 和最小值 \(m\).

有 \(m\le f(c)\le M,\ m\le f(d)\le M,\ m\le f(e)\le M\),

进而 \(mp\le pf(c)\le pM,\ mq\le qf(d)\le qM,\ mr\le rf(e)\le rM\)
\[
m(p+q+r)\le pf(c)+qf(d)+rf(e)\le(p+q+r)M
\]
亦是
\[
m\le\frac{pf(c)+qf(d)+rf(e)}{p+q+r}\le M,
\]
由介值定理，在 \([a,b]\) 上必存在一点 \(\xi\)，使得
\[
\frac{pf(c)+qf(d)+rf(e)}{p+q+r}=f(\xi),
\]
即
\[
pf(c)+qf(d)+rf(e)=(p+q+r)f(\xi).
\]

## 第二章 一元函数微分学` },
    ]
  };
})();
