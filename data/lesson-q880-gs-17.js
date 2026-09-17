window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q880_s16"] = {
    id: "q880_s16",
    ch: "880题 · 高数 · 第三章 一元函数积分学及其应用",
    title: "基础题·解答题（一）",
    probTitle: "第三章 基础题 · 解答题 (1)–(10)（含原书解析）",
    book: "李林《精讲精练 880 题（数学二）》2026",
    problems: [
      { n: "(1)", q: R`求下列积分：
(Ⅰ) $\int\frac{2^x\cdot3^x}{9^x-4^x}dx$；
(Ⅱ) $\int\frac{dx}{x^2(1-x^4)}$；
(Ⅲ) $\int\frac{dx}{x^4(1+x^2)}$；
(Ⅳ) $\int\frac{\arctan x}{x^2(1+x^2)}dx$；
(Ⅴ) $\int\frac{x+\ln(1-x)}{x^2}dx$。`, a: R`见解析`, sol: R`【解】(Ⅰ) $\int\frac{2^x3^x}{9^x-4^x}dx=\int\frac{(\frac32)^xdx}{[(\frac32)^x]^2-1}=\frac1{\ln\frac32}\int\frac{d[(\frac32)^x]}{[(\frac32)^x]^2-1}=\frac1{2\ln\frac32}\ln\left|\frac{3^x-2^x}{3^x+2^x}\right|+C$。
(Ⅱ) $\int\frac{dx}{x^2(1-x^4)}=-\frac1x+\frac12\int\frac{dx}{1-x^2}-\frac12\int\frac{dx}{1+x^2}=-\frac1x+\frac14\ln\left|\frac{1+x}{1-x}\right|-\frac12\arctan x+C$。
(Ⅲ) 令 $x=\frac1t$，$\int\frac{dx}{x^4(1+x^2)}=-\int\frac{t^4}{1+t^2}dt=-\frac13t^3+t-\arctan t+C=-\frac1{3x^3}+\frac1x-\arctan\frac1x+C$。
(Ⅳ) 由 $\frac1{x^2(1+x^2)}=\frac1{x^2}-\frac1{1+x^2}$，原式 $=-\frac{\arctan x}x-\frac12(\arctan x)^2+\frac12\ln\frac{x^2}{1+x^2}+C$。
(Ⅴ) 原式 $=\left(1-\frac1x\right)\ln(1-x)+C$。` },
      { n: "(2)", q: R`求下列积分：
(Ⅰ) $\int\frac{dx}{x(1+\sqrt x)}$；
(Ⅱ) $\int\frac{xe^x}{\sqrt{e^x-1}}dx$；
(Ⅲ) $\int\frac{x^3}{\sqrt{1+x^2}}dx$；
(Ⅳ) $\int\frac{dx}{(2x^2+1)\sqrt{1+x^2}}$；
(Ⅴ) $\int\frac{\arctan\sqrt{x-1}}{x\sqrt{x-1}}dx$；
(Ⅵ) $\int\sqrt{\frac x{1-x\sqrt x}}dx$。`, a: R`见解析`, sol: R`【解】(Ⅰ) 令 $\sqrt x=t$，原式 $=2\int\frac{dt}{t(1+t)}=2\ln\frac{\sqrt x}{1+\sqrt x}+C$。
(Ⅱ) 原式 $=2x\sqrt{e^x-1}-4\sqrt{e^x-1}+4\arctan\sqrt{e^x-1}+C$。
(Ⅲ) 令 $x=\tan t$，原式 $=\int(\sec^2t-1)d(\sec t)=\frac13\sec^3t-\sec t+C=\frac13(1+x^2)^{\frac32}-(1+x^2)^{\frac12}+C$。
(Ⅳ) 令 $x=\tan t$，原式 $=\int\frac{\cos t\,dt}{2\sin^2t+\cos^2t}=\int\frac{d(\sin t)}{1+\sin^2t}=\arctan\frac x{\sqrt{1+x^2}}+C$。
(Ⅴ) 原式 $=2\int\arctan\sqrt{x-1}\,d(\arctan\sqrt{x-1})=(\arctan\sqrt{x-1})^2+C$。
(Ⅵ) 原式 $=\frac23\int\frac{d(x^{3/2})}{\sqrt{1-x^{3/2}}}=-\frac43\sqrt{1-x\sqrt x}+C$。` },
      { n: "(3)", q: R`求下列积分：
(Ⅰ) $\int\frac{dx}{\sin^2x\cos^4x}$；
(Ⅱ) $\int\frac{dx}{1+\sin x}$；
(Ⅲ) $\int\frac{\sin x}{\sin x+\cos x}dx$；
(Ⅳ) $\int\frac{3\sin x+\cos x}{\sin x+2\cos x}dx$；
(Ⅴ) $\int\frac{dx}{\sin2x+2\sin x}$；
(Ⅵ) $\int\frac{dx}{a^2\sin^2x+b^2\cos^2x}\ (a^2+b^2>0)$。`, a: R`见解析`, sol: R`【解】(Ⅰ) 原式 $=\int\left(\frac{\sin^2x}{\cos^4x}+\frac2{\cos^2x}+\frac1{\sin^2x}\right)dx=\frac13\tan^3x+2\tan x-\cot x+C$。
(Ⅱ) 原式 $=\int\frac{1-\sin x}{\cos^2x}dx=\tan x-\frac1{\cos x}+C$。
(Ⅲ) 原式 $=\frac12x-\frac12\ln|\sin x+\cos x|+C$。
(Ⅳ) 令 $3\sin x+\cos x=A(\sin x+2\cos x)+B(\cos x-2\sin x)$，得 $A=1,B=-1$，原式 $=x-\ln|\sin x+2\cos x|+C$。
(Ⅴ) 令 $\tan\frac x2=t$，原式 $=\frac14\ln\left|\tan\frac x2\right|+\frac18\tan^2\frac x2+C$。
(Ⅵ) $a=0,b\neq0$ 时 $\frac1{b^2}\tan x+C$；$a\neq0,b=0$ 时 $-\frac1{a^2}\cot x+C$；$a,b\neq0$ 时 $\frac1{ab}\arctan\left(\frac ab\tan x\right)+C$。` },
      { n: "(4)", q: R`求下列积分：
(Ⅰ) $\int\arctan\sqrt x\,dx$；
(Ⅱ) $\int\frac{\ln x}{(1-x)^2}dx$；
(Ⅲ) $\int\frac{x^2e^x}{(x+2)^2}dx$；
(Ⅳ) $\int\sin(\ln x)dx$；
(Ⅴ) $\int\frac1{x^2}\sqrt{\frac{1-x}{1+x}}dx$；
(Ⅵ) $\int e^{2x}(1+\tan x)^2dx$。`, a: R`见解析`, sol: R`【解】(Ⅰ) 原式 $=x\arctan\sqrt x-\sqrt x+\arctan\sqrt x+C$。
(Ⅱ) 原式 $=-\frac{\ln x}{x-1}+\ln|x-1|-\ln|x|+C$。
(Ⅲ) 原式 $=-\frac{x^2e^x}{x+2}+xe^x-e^x+C$。
(Ⅳ) 令 $\ln x=t$，$I=\int e^t\sin t\,dt=\frac12e^t(\sin t-\cos t)+C=\frac12x[\sin(\ln x)-\cos(\ln x)]+C$。
(Ⅴ) 令 $\sqrt{\frac{1-x}{1+x}}=t$，原式 $=-\frac{\sqrt{1-x^2}}x+\ln\left|\frac{\sqrt{1+x}+\sqrt{1-x}}{\sqrt{1+x}-\sqrt{1-x}}\right|+C$。
(Ⅵ) 原式 $=\int e^{2x}\sec^2x\,dx+2\int e^{2x}\tan x\,dx=e^{2x}\tan x+C$。` },
      { n: "(5)", q: R`求下列积分：
(Ⅰ) $\int_{-\frac\pi4}^{\frac\pi4}\left(x^2\ln\frac{1+x}{1-x}-\cos x\right)dx$；
(Ⅱ) $\int_{-1}^1(2+\sin x)\sqrt{1-x^2}dx$；
(Ⅲ) $\int_{-2}^2(x+|x|)e^{-|x|}dx$；
(Ⅳ) $\int_{-1}^1\frac{2x^2+x(e^x+e^{-x})}{1+\sqrt{1-x^2}}dx$。`, a: R`(Ⅰ) $-\sqrt2$；(Ⅱ) $\pi$；(Ⅲ) $2-6e^{-2}$；(Ⅳ) $4-\pi$`, sol: R`【解】(Ⅰ) $x^2\ln\frac{1+x}{1-x}$ 为奇函数，$\cos x$ 为偶函数，原式 $=-2\int_0^{\pi/4}\cos x\,dx=-\sqrt2$。
(Ⅱ) 原式 $=4\int_0^1\sqrt{1-x^2}dx+0=4\cdot\frac\pi4=\pi$。
(Ⅲ) 原式 $=2\int_0^2xe^{-x}dx=2-6e^{-2}$。
(Ⅳ) 原式 $=4\int_0^1\frac{x^2}{1+\sqrt{1-x^2}}dx=4\int_0^1dx-4\int_0^1\sqrt{1-x^2}dx=4-\pi$。` },
      { n: "(6)", q: R`求下列积分：
(Ⅰ) $\int_0^2(x-1)^2\sqrt{2x-x^2}dx$；
(Ⅱ) $\int_0^\pi(e^{-\cos x}-e^{\cos x})dx$。`, a: R`(Ⅰ) $\frac\pi8$；(Ⅱ) $0$`, sol: R`【解】(Ⅰ) 令 $x-1=t$，原式 $=\int_{-1}^1t^2\sqrt{1-t^2}dt=2\int_0^1t^2\sqrt{1-t^2}dt$，再令 $t=\sin u$，得 $2\int_0^{\pi/2}(\sin^2u-\sin^4u)du=\frac\pi8$。
(Ⅱ) 令 $x=\frac\pi2+t$，原式 $=\int_{-\pi/2}^{\pi/2}(e^{\sin t}-e^{-\sin t})dt=0$（奇函数）。` },
      { n: "(7)", q: R`求下列积分：
(Ⅰ) $\int_{-3}^2\min\{2,x^2\}dx$；
(Ⅱ) $\int_{-1}^x(1-|t|)dt\ (x\geqslant-1)$；
(Ⅲ) $\int_{-1}^1|x-y|e^xdx\ (|y|\leqslant1)$；
(Ⅳ) $\int_0^\pi\sqrt{1-\sin x}\,dx$。`, a: R`(Ⅰ) $10-\frac83\sqrt2$；(Ⅱ) $-1\leqslant x<0$ 时 $\frac{(1+x)^2}2$，$x\geqslant0$ 时 $1-\frac{(1-x)^2}2$；(Ⅲ) $2e^y-(y+2)e^{-1}-ye$；(Ⅳ) $4(\sqrt2-1)$`, sol: R`【解】(Ⅰ) $\min\{2,x^2\}$ 分段，原式 $=\int_{-3}^{-\sqrt2}2dx+\int_{-\sqrt2}^{\sqrt2}x^2dx+\int_{\sqrt2}^2 2dx=10-\frac83\sqrt2$。
(Ⅱ) $-1\leqslant x<0$ 时原式 $=\frac{(1+x)^2}2$；$x\geqslant0$ 时原式 $=1-\frac{(1-x)^2}2$。
(Ⅲ) 以 $y$ 为分界点分段积分，原式 $=\int_{-1}^y(y-x)e^xdx+\int_y^1(x-y)e^xdx=2e^y-(y+2)e^{-1}-ye$。
(Ⅳ) $\sqrt{1-\sin x}=|\sin\frac x2-\cos\frac x2|$，原式 $=\int_0^{\pi/2}(\cos\frac x2-\sin\frac x2)dx+\int_{\pi/2}^\pi(\sin\frac x2-\cos\frac x2)dx=4(\sqrt2-1)$。` },
      { n: "(8)", q: R`求下列积分：
(Ⅰ) $\int_{-\frac\pi2}^{\frac\pi2}(x+\sin^2x)\cos^2x\,dx$；
(Ⅱ) $\int_0^1x(1-x^4)^{\frac32}dx$；
(Ⅲ) $\int_0^\pi t\sin t\,dt$；
(Ⅳ) $\int_0^1\left[\sqrt{2x-x^2}+\sqrt{(1-x^2)^3}\right]dx$。`, a: R`(Ⅰ) $\frac\pi8$；(Ⅱ) $\frac{3\pi}{32}$；(Ⅲ) $\pi$；(Ⅳ) $\frac{7\pi}{16}$`, sol: R`【解】(Ⅰ) 原式 $=2\int_0^{\pi/2}(\sin^2x-\sin^4x)dx=2\left(\frac12\cdot\frac\pi2-\frac34\cdot\frac12\cdot\frac\pi2\right)=\frac\pi8$。
(Ⅱ) 令 $x^2=\sin t$，原式 $=\frac12\int_0^{\pi/2}\cos^4t\,dt=\frac12\cdot\frac34\cdot\frac12\cdot\frac\pi2=\frac{3\pi}{32}$。
(Ⅲ) 原式 $=-t\cos t|_0^\pi+\int_0^\pi\cos t\,dt=\pi$。
(Ⅳ) $\int_0^1\sqrt{2x-x^2}dx=\frac\pi4$，$\int_0^1(1-x^2)^{3/2}dx=\int_0^{\pi/2}\cos^4t\,dt=\frac{3\pi}{16}$，故原式 $=\frac\pi4+\frac{3\pi}{16}=\frac{7\pi}{16}$。` },
      { n: "(9)", q: R`计算下列积分：
(Ⅰ) $\int_1^{+\infty}\frac{dx}{e^{x+1}+e^{3-x}}$；
(Ⅱ) $\int_{\frac12}^{\frac32}\frac{dx}{\sqrt{|x-x^2|}}$。`, a: R`(Ⅰ) $\frac\pi{4e^2}$；(Ⅱ) $\frac\pi2+\ln(2+\sqrt3)$`, sol: R`【解】(Ⅰ) 令 $x-1=t$，原式 $=\frac1{e^2}\int_0^{+\infty}\frac{e^t}{1+e^{2t}}dt=\frac1{e^2}\arctan e^t\Big|_0^{+\infty}=\frac\pi{4e^2}$。
(Ⅱ) $x=1$ 为瑕点，原式 $=\int_{1/2}^1\frac{dx}{\sqrt{\frac14-(x-\frac12)^2}}+\int_1^{3/2}\frac{dx}{\sqrt{(x-\frac12)^2-\frac14}}=\arcsin(2x-1)|_{1/2}^1+\ln\left[\left(x-\frac12\right)+\sqrt{\left(x-\frac12\right)^2-\frac14}\right]\Big|_1^{3/2}=\frac\pi2+\ln(2+\sqrt3)$。` },
      { n: "(10)", q: R`设 $f(x)=\int_0^{\frac\pi2}|x-t|\sin t\,dt,x\in(-\infty,+\infty)$，求 $f(x)$ 的单调区间与极值。`, a: R`减区间 $\left(-\infty,\frac\pi3\right)$，增区间 $\left(\frac\pi3,+\infty\right)$；极小值 $f\left(\frac\pi3\right)=\frac\pi3+1-\sqrt3$`, sol: R`【解】分段求 $f$：$x<0$ 时 $f(x)=1-x$；$x>\frac\pi2$ 时 $f(x)=x-1$；$0\leqslant x\leqslant\frac\pi2$ 时 $f(x)=x-2\sin x+1$。且 $f$ 在 $x=0,\frac\pi2$ 处可导。
$x<0$ 时 $f'=-1$；$x>\frac\pi2$ 时 $f'=1$；$0\leqslant x\leqslant\frac\pi2$ 时 $f'=1-2\cos x=0$ 得 $x=\frac\pi3$，$f''\left(\frac\pi3\right)=\sqrt3>0$，故 $f\left(\frac\pi3\right)=\frac\pi3+1-\sqrt3$ 为极小值，无极大值。单调减区间 $\left(-\infty,\frac\pi3\right)$，增区间 $\left(\frac\pi3,+\infty\right)$。` }
    ]
  };
})();
