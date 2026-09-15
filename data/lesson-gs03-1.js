window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["gs03_s0"] = {
    id: "gs03_s0",
    ch: "第三章 一元函数积分学",
    title: "第一节 不定积分",
    book: "武忠祥《高等数学辅导讲义》",
    pages: [87, 93],
    img: "assets/img/gaoshu",
    content: [
      { p: 87, md: R`### 一、考试内容要点精讲
#### （一）两个基本概念
1) 原函数：如果在区间 $I$ 上 $F'(x)=f(x)$（或 $dF(x)=f(x)dx$）处处成立，则称 $F(x)$ 为 $f(x)$ 在区间 $I$ 上的原函数。

【注】若 $F(x)$ 为 $f(x)$ 的一个原函数，则 $F(x)+C$ 都是 $f(x)$ 的原函数，且是 $f(x)$ 的所有原函数。

2) 不定积分：在区间 $I$ 上，函数 $f(x)$ 带有任意常数的原函数称为 $f(x)$ 在 $I$ 上的不定积分，记为 $\int f(x)dx$。若 $F(x)$ 是 $f(x)$ 的一个原函数，则 $\int f(x)dx=F(x)+C$。

#### （二）原函数的存在性
1) 若 $f(x)$ 在区间 $I$ 上连续，则 $f(x)$ 在 $I$ 上必有原函数。

2) 若 $f(x)$ 在区间 $I$ 上有第一类间断点，则 $f(x)$ 在 $I$ 上没有原函数。

#### （三）不定积分的性质
(1) $\left(\int f(x)dx\right)'=f(x)$，$d\int f(x)dx=f(x)dx$；
(2) $\int f'(x)dx=f(x)+C$，$\int df(x)=f(x)+C$；
(3) $\int kf(x)dx=k\int f(x)dx$（$k$ 为常数）；
(4) $\int[f(x)\pm g(x)]dx=\int f(x)dx\pm\int g(x)dx$。

#### （四）基本积分公式
1) $\int x^\alpha dx=\dfrac{1}{\alpha+1}x^{\alpha+1}+C\ (\alpha\neq-1)$；2) $\int\dfrac1x dx=\ln|x|+C$；` },
      { p: 88, md: R`3) $\int a^xdx=\dfrac{a^x}{\ln a}+C\ (a>0,a\neq1)$；4) $\int e^xdx=e^x+C$；
5) $\int\sin x\,dx=-\cos x+C$；6) $\int\cos x\,dx=\sin x+C$；
7) $\int\sec^2x\,dx=\tan x+C$；8) $\int\csc^2x\,dx=-\cot x+C$；
9) $\int\sec x\tan x\,dx=\sec x+C$；10) $\int\csc x\cot x\,dx=-\csc x+C$；
11) $\int\sec x\,dx=\ln|\sec x+\tan x|+C$；12) $\int\csc x\,dx=-\ln|\csc x+\cot x|+C$；
13) $\int\dfrac{dx}{a^2+x^2}=\dfrac1a\arctan\dfrac xa+C$；14) $\int\dfrac{dx}{a^2-x^2}=\dfrac{1}{2a}\ln\left|\dfrac{a+x}{a-x}\right|+C$；
15) $\int\dfrac{dx}{\sqrt{a^2-x^2}}=\arcsin\dfrac xa+C$；16) $\int\dfrac{dx}{\sqrt{x^2+a^2}}=\ln|x+\sqrt{x^2+a^2}|+C$；
17) $\int\dfrac{dx}{\sqrt{x^2-a^2}}=\ln|x+\sqrt{x^2-a^2}|+C$。

#### （五）三种主要积分法
1) 第一类换元法（凑微分法）：若 $\int f(u)du=F(u)+C$，且 $\varphi(x)$ 可导，则
$$\int f(\varphi(x))\varphi'(x)dx=\int f(\varphi(x))d\varphi(x)=F(\varphi(x))+C.$$
2) 第二类换元法：设 $x=\varphi(t)$ 可导且 $\varphi'(t)\neq0$，又 $\int f(\varphi(t))\varphi'(t)dt=F(t)+C$，则 $\int f(x)dx=F(\varphi^{-1}(x))+C$。
三种常用变量代换：(1) 含 $\sqrt{a^2-x^2}$ 时令 $x=a\sin t$ 或 $x=a\cos t$；(2) 含 $\sqrt{a^2+x^2}$ 时令 $x=a\tan t$；(3) 含 $\sqrt{x^2-a^2}$ 时令 $x=a\sec t$。
3) 分部积分法：设 $u(x),v(x)$ 有连续一阶导数，则 $\int u\,dv=uv-\int v\,du$。

【注】(1) 分部积分法常用于被积函数为两类不同函数相乘的不定积分；(2) 选择 $u,v$ 的原则是 $\int v\,du$ 比 $\int u\,dv$ 好积。设 $p_n(x)$ 是 $n$ 次多项式，则形如 $\int p_n(x)e^{ax}dx$、$\int p_n(x)\sin ax\,dx$、$\int p_n(x)\cos ax\,dx$ 的积分都是先把多项式以外的函数凑进微分号，然后分部积分；形如 $\int p_n(x)\ln x\,dx$、$\int p_n(x)\arctan x\,dx$、$\int p_n(x)\arcsin x\,dx$ 的积分都是先把多项式函数` },
      { p: 89, md: R`凑进微分号，然后分部积分；形如 $\int e^{ax}\sin\beta x\,dx$、$\int e^{ax}\cos\beta x\,dx$ 的积分可连续两次将指数函数凑进微分号分部积分还原，求得原不定积分。

#### （六）三类常见可积函数积分
1) 有理函数积分 $\int R(x)dx$：(1) 一般方法（部分分式法）；(2) 特殊方法（加项减项拆项或凑微分降幂）。
2) 三角有理式积分 $\int R(\sin x,\cos x)dx$：(1) 一般方法（万能代换）令 $\tan\dfrac x2=t$，则 $\int R(\sin x,\cos x)dx=\int R\left(\dfrac{2t}{1+t^2},\dfrac{1-t^2}{1+t^2}\right)\dfrac{2}{1+t^2}dt$；(2) 特殊方法（三角变形、换元、分部）。常用换元：i) 若 $R(-\sin x,\cos x)=-R(\sin x,\cos x)$，令 $u=\cos x$；ii) 若 $R(\sin x,-\cos x)=-R(\sin x,\cos x)$，令 $u=\sin x$；iii) 若 $R(-\sin x,-\cos x)=R(\sin x,\cos x)$，令 $u=\tan x$。
3) 简单无理函数积分 $\int R\left(x,\sqrt[n]{\dfrac{ax+b}{cx+d}}\right)dx$：令 $\sqrt[n]{\dfrac{ax+b}{cx+d}}=t$ 化为有理函数积分。

### 二、常考题型的方法与技巧
### 题型一　计算不定积分
【例1】$I=\displaystyle\int\dfrac{dx}{\sqrt{x(4-x)}}$。

【解1】$I=\displaystyle\int\dfrac{dx}{\sqrt{4x-x^2}}=\int\dfrac{dx}{\sqrt{4-(x-2)^2}}=\arcsin\dfrac{x-2}{2}+C$。

【解2】$I=\displaystyle\int\dfrac{2d(\sqrt x)}{\sqrt{4-x}}=2\arcsin\dfrac{\sqrt x}{2}+C$。

【例2】$I=\displaystyle\int\dfrac{dx}{\cos x\sqrt{\sin x}}$。

【解】$I=\displaystyle\int\dfrac{\cos x\,dx}{\cos^2x\sqrt{\sin x}}=\int\dfrac{d\sin x}{(1-\sin^2x)\sqrt{\sin x}}=2\int\dfrac{d\sqrt{\sin x}}{1-\sin^2x}$，令 $\sqrt{\sin x}=t$，则 $I=2\displaystyle\int\dfrac{dt}{1-t^4}=2\int\dfrac{dt}{(1-t^2)(1+t^2)}=\int\left(\dfrac{1}{1-t^2}+\dfrac{1}{1+t^2}\right)dt$` },
      { p: 90, md: R`$=\dfrac12\ln\left|\dfrac{1+t}{1-t}\right|+\arctan t+C=\dfrac12\ln\left|\dfrac{1+\sqrt{\sin x}}{1-\sqrt{\sin x}}\right|+\arctan\sqrt{\sin x}+C$。

【例3】$I=\displaystyle\int\dfrac{x^5}{\sqrt{1+x^2}}dx$。

【解1】令 $x=\tan t$，则 $dx=\sec^2t\,dt$，$I=\displaystyle\int\dfrac{\tan^5t\sec^2t}{\sec t}dt=\int\tan^4t\,d(\sec t)=\int(\sec^2t-1)^2d(\sec t)=\dfrac15u^5-\dfrac23u^3+u+C=\dfrac{1}{15}(8-4x^2+3x^4)\sqrt{1+x^2}+C$（$u=\sec t$）。

【解2】$I=\displaystyle\int x^4d(\sqrt{1+x^2})=x^4\sqrt{1+x^2}-4\int x^3\sqrt{1+x^2}dx=x^4\sqrt{1+x^2}-2\int[(x^2+1)-1]\sqrt{1+x^2}\,d(1+x^2)=x^4\sqrt{1+x^2}-\dfrac45(1+x^2)^{\frac52}+\dfrac43(1+x^2)^{\frac32}+C$。

【例4】$I=\displaystyle\int\dfrac{xe^x}{\sqrt{e^x-1}}dx$。

【解】$I=2\displaystyle\int x\,d\sqrt{e^x-1}=2x\sqrt{e^x-1}-2\int\sqrt{e^x-1}dx$，而 $\int\sqrt{e^x-1}dx=\int\dfrac{2t^2}{1+t^2}dt=2t-2\arctan t+C$（令 $\sqrt{e^x-1}=t$），则 $I=2x\sqrt{e^x-1}-4\sqrt{e^x-1}+4\arctan\sqrt{e^x-1}+C$。

【例5】$\displaystyle\int\dfrac{\ln x}{\sqrt{1+x}}dx$。

【解1】原式 $=2\displaystyle\int\ln x\,d\sqrt{1+x}=2\sqrt{1+x}\ln x-2\int\dfrac{\sqrt{1+x}}{x}dx$，其中 $\int\dfrac{\sqrt{1+x}}{x}dx=2t+\ln\left|\dfrac{t-1}{t+1}\right|+C$（令 $\sqrt{1+x}=t$），故原式 $=2\sqrt{1+x}\ln x-4\sqrt{1+x}-2\ln\left|\dfrac{\sqrt{1+x}-1}{\sqrt{1+x}+1}\right|+C$。

【解2】令 $\sqrt{1+x}=t$，则原式 $=\displaystyle\int\dfrac{\ln(t^2-1)}{t}2t\,dt=2\int\ln(t^2-1)dt=2t\ln(t^2-1)-2\int\dfrac{2t^2}{t^2-1}dt$` },
      { p: 91, md: R`$=2\sqrt{1+x}\ln x-4\sqrt{1+x}-2\ln\left|\dfrac{\sqrt{1+x}-1}{\sqrt{1+x}+1}\right|+C$。

【例6】$\displaystyle\int\dfrac{\arctan e^x}{e^{2x}}dx$。

【解1】原式 $=-\dfrac12\displaystyle\int\arctan e^x\,de^{-2x}=-\dfrac12e^{-2x}\arctan e^x+\dfrac12\int\dfrac{e^{-x}}{1+e^{2x}}dx=-\dfrac12e^{-2x}\arctan e^x+\dfrac12\int\dfrac{de^x}{e^{2x}(1+e^{2x})}=-\dfrac12\left[e^{-2x}\arctan e^x+e^{-x}+\arctan e^x\right]+C$。

【解2】令 $e^x=t$，则原式 $=\displaystyle\int\dfrac{\arctan t}{t^3}dt=-\dfrac12\int\arctan t\,d\dfrac{1}{t^2}=-\dfrac{\arctan t}{2t^2}+\dfrac12\int\dfrac{dt}{t^2(1+t^2)}=-\dfrac{\arctan t}{2t^2}-\dfrac{1}{2t}-\dfrac12\arctan t+C=-\dfrac12\left[e^{-2x}\arctan e^x+e^{-x}+\arctan e^x\right]+C$。

【例7】$I=\displaystyle\int\dfrac{1}{x+x^9}dx$。

【解1】$I=\displaystyle\int\dfrac{dx}{x(1+x^8)}=\int\dfrac{x^7dx}{x^8(1+x^8)}=\dfrac18\int\dfrac{du}{u(1+u)}=\dfrac18[\ln u-\ln(1+u)]+C=\dfrac18\ln\dfrac{x^8}{1+x^8}+C$（$u=x^8$）。

【解2】$I=\displaystyle\int\dfrac{(1+x^8)-x^8}{x(1+x^8)}dx=\int\left(\dfrac1x-\dfrac{x^7}{1+x^8}\right)dx=\ln|x|-\dfrac18\ln(1+x^8)+C$。

【解3】$I=\displaystyle\int\dfrac{dx}{x^9\left(1+\frac{1}{x^8}\right)}=-\dfrac18\int\dfrac{dx^{-8}}{1+x^{-8}}=-\dfrac18\ln|1+x^{-8}|+C$。

【例8】$I=\displaystyle\int\dfrac{1+x^4}{1+x^6}dx$。

【解】$I=\displaystyle\int\dfrac{1+x^4-x^2+x^2}{1+x^6}dx=\int\dfrac{1-x^2+x^4}{1+x^6}dx+\int\dfrac{x^2}{1+x^6}dx=\int\dfrac{dx}{1+x^2}+\dfrac13\int\dfrac{dx^3}{1+(x^3)^2}=\arctan x+\dfrac13\arctan x^3+C$。

【例9】$I=\displaystyle\int\dfrac{dx}{1+\sin x}$。` },
      { p: 92, md: R`【解1】$I=\displaystyle\int\dfrac{1-\sin x}{\cos^2x}dx=\int\dfrac{dx}{\cos^2x}+\int\dfrac{d\cos x}{\cos^2x}=\tan x-\dfrac{1}{\cos x}+C$。

【解2】$I=\displaystyle\int\dfrac{dx}{1+\cos\left(\frac\pi2-x\right)}=\int\dfrac{dx}{2\cos^2\left(\frac\pi4-\frac x2\right)}=\tan\left(\dfrac x2-\dfrac\pi4\right)+C$。

【解3】令 $\tan\dfrac x2=t$，则 $dx=\dfrac{2dt}{1+t^2}$，$\sin x=\dfrac{2t}{1+t^2}$，$I=\displaystyle\int\dfrac{2dt}{1+t^2}\cdot\dfrac{1}{1+\frac{2t}{1+t^2}}=2\int\dfrac{dt}{(1+t)^2}=\dfrac{-2}{1+t}+C=\dfrac{-2}{1+\tan\frac x2}+C$。

【例10】$\displaystyle\int\dfrac{dx}{1+\sin x+\cos x}$。

【解】令 $\tan\dfrac x2=t$，则原式 $=\displaystyle\int\dfrac{\frac{2}{1+t^2}dt}{1+\frac{2t}{1+t^2}+\frac{1-t^2}{1+t^2}}=\int\dfrac{dt}{1+t}=\ln(1+t)+C=\ln\left(1+\tan\dfrac x2\right)+C$。

【例11】$I=\displaystyle\int\dfrac{dx}{\sin x\cos^4x}$。

【解1】$I=\displaystyle\int\dfrac{\sin x\,dx}{\sin^2x\cos^4x}=\int\dfrac{d\cos x}{(1-\cos^2x)\cos^4x}=-\int\dfrac{du}{(1-u^2)u^4}=\dfrac{1}{3\cos^3x}+\dfrac{1}{\cos x}-\dfrac12\ln\left|\dfrac{1+\cos x}{1-\cos x}\right|+C$（令 $\cos x=u$）。

【解2】$I=\displaystyle\int\dfrac{\sin^2x+\cos^2x}{\sin x\cos^4x}dx=\dfrac{1}{3\cos^3x}+\int\dfrac{\sin x}{\cos^2x}dx+\int\dfrac{dx}{\sin x}=\dfrac{1}{3\cos^3x}+\dfrac{1}{\cos x}-\ln|\csc x+\cot x|+C$。

【例12】$I=\displaystyle\int\dfrac{1}{a^2\sin^2x+b^2\cos^2x}dx$。

【解】1) 若 $a\neq0,b=0$，$I=-\dfrac{1}{a^2}\cot x+C$；2) 若 $a=0,b\neq0$，$I=\dfrac{1}{b^2}\tan x+C$；3) 若 $a\neq0,b\neq0$，$I=\displaystyle\int\dfrac{du}{b^2+a^2u^2}=\dfrac{1}{ab}\arctan\dfrac{a\tan x}{b}+C$（令 $\tan x=u$）。

【例13】$\displaystyle\int\dfrac1x\sqrt{\dfrac{x+1}{x-1}}dx$。` },
      { p: 93, md: R`【解】令 $\sqrt{\dfrac{x+1}{x-1}}=t$，则原式 $=-4\displaystyle\int\dfrac{t^2}{(t^2+1)(t^2-1)}dt=-2\int\dfrac{(t^2+1)+(t^2-1)}{(t^2+1)(t^2-1)}dt=\ln\left|\dfrac{1+t}{1-t}\right|-2\arctan t+C=\ln\left|x+\sqrt{x^2-1}\right|-2\arctan\sqrt{\dfrac{x+1}{x-1}}+C$。

### 题型二　不定积分杂例
【例1】若 $\displaystyle\int xf(x)dx=\arcsin x+C$，求 $I=\displaystyle\int\dfrac{1}{f(x)}dx$。

【解】由 $\int xf(x)dx=\arcsin x+C$ 知 $xf(x)=(\arcsin x+C)'=\dfrac{1}{\sqrt{1-x^2}}$，则 $I=\displaystyle\int\dfrac{1}{f(x)}dx=\int x\sqrt{1-x^2}dx=-\dfrac13(1-x^2)^{\frac32}+C$。

【例2】若 $\ln\left(x+\sqrt{1+x^2}\right)$ 为 $f(x)$ 的一个原函数，求 $I=\displaystyle\int xf'(x)dx$。

【解】$I=\displaystyle\int xf'(x)dx=xf(x)-\int f(x)dx=x\left[\ln\left(x+\sqrt{1+x^2}\right)\right]'-\ln\left(x+\sqrt{1+x^2}\right)+C=\dfrac{x}{\sqrt{1+x^2}}-\ln\left(x+\sqrt{1+x^2}\right)+C$。

【例3】设 $F(x)$ 为 $f(x)$ 的原函数，且当 $x\geqslant0$ 时 $F(x)f(x)=\dfrac{xe^x}{2(1+x)^2}$，$F(0)=1,F(x)>0$，求 $f(x)$。

【解1】由 $F(x)f(x)=\dfrac12[F^2(x)]'=\dfrac{xe^x}{2(1+x)^2}$ 得 $F^2(x)=\displaystyle\int\dfrac{xe^x}{(1+x)^2}dx=\int\dfrac{(x+1)-1}{(1+x)^2}e^xdx=\int\dfrac{e^x}{1+x}dx-\int\dfrac{e^x}{(1+x)^2}dx=\dfrac{e^x}{1+x}+C$。由 $F(0)=1$ 得 $C=0$，故 $F(x)=\sqrt{\dfrac{e^x}{1+x}}$，$f(x)=F'(x)=\dfrac{xe^x}{2(1+x)^2}\sqrt{\dfrac{1+x}{e^x}}$。

【解2】$F^2(x)=\displaystyle\int\dfrac{xe^x}{(1+x)^2}dx=-\int(xe^x)d\dfrac{1}{1+x}=-\dfrac{xe^x}{1+x}+\int e^xdx=\dfrac{e^x}{1+x}+C$。

【例4】设 $f'(e^x)=\sin x$，求 $f(x)$。

【解1】令 $e^x=t$，则 $f'(t)=\sin\ln t$，$f(t)=\displaystyle\int\sin\ln t\,dt=t\sin\ln t-\int t\cos\ln t\cdot\dfrac1t dt=t\sin\ln t-t\cos\ln t-\int\sin\ln t\,dt$，故 $f(t)=\dfrac t2[\sin\ln t-\cos\ln t]+C$，即 $f(x)=\dfrac x2[\sin\ln x-\cos\ln x]+C$。

【解2】$f'(e^x)=\sin x$ 两端对 $e^x$ 积分得 $f(e^x)=\displaystyle\int\sin x\,de^x=e^x\sin x-e^x\cos x-\int\sin x\,de^x$，则 $f(e^x)=\dfrac{e^x}{2}[\sin x-\cos x]+C$，故 $f(x)=\dfrac x2[\sin\ln x-\cos\ln x]+C$。

【例5】求不定积分 $\displaystyle\int e^{-|x|}dx$。

【解】$\displaystyle\int e^{-|x|}dx=\begin{cases}-e^{-x}+C_1,&x\geqslant0\\e^x+C_2,&x<0\end{cases}$。$e^{-|x|}$ 连续，原函数必连续，由 $F(0^+)=F(0^-)$ 得 $-1+C_1=1+C_2$，令 $C_1=C$，则 $C_2=-2+C$，故 $\displaystyle\int e^{-|x|}dx=\begin{cases}-e^{-x}+C,&x\geqslant0\\e^x-2+C,&x<0\end{cases}$。` }
    ],
    quiz: [
      { q: R`若 $f(x)$ 在区间 $I$ 上连续，则 $f(x)$ 在 $I$ 上`, options: [R`必有原函数`, R`没有原函数`, R`原函数一定不连续`, R`原函数唯一`], answer: 0, explain: R`连续函数必有原函数（变上限积分）。` },
      { q: R`若 $f(x)$ 在区间 $I$ 上有第一类间断点，则 $f(x)$ 在 $I$ 上`, options: [R`必有原函数`, R`没有原函数`, R`可能有原函数`, R`原函数必为初等函数`], answer: 1, explain: R`有第一类间断点则无原函数。` },
      { q: R`$\displaystyle\int\dfrac{dx}{a^2+x^2}=$`, options: [R`$\dfrac1a\arctan\dfrac xa+C$`, R`$\arctan\dfrac xa+C$`, R`$\dfrac1a\ln|a^2+x^2|+C$`, R`$\arcsin\dfrac xa+C$`], answer: 0, explain: R`基本积分公式。` },
      { q: R`第一类换元法（凑微分法）的依据是`, options: [R`$\int f(\varphi(x))\varphi'(x)dx=\int f(\varphi(x))d\varphi(x)$`, R`$\int u\,dv=uv-\int v\,du$`, R`$\int kf=k\int f$`, R`$\int(f\pm g)=\int f\pm\int g$`], answer: 0, explain: R`凑微分即令 $u=\varphi(x)$。` },
      { q: R`被积函数含 $\sqrt{a^2-x^2}$ 时，常用代换`, options: [R`$x=a\sin t$`, R`$x=a\tan t$`, R`$x=a\sec t$`, R`$x=a\ln t$`], answer: 0, explain: R`含 $\sqrt{a^2-x^2}$ 令 $x=a\sin t$。` },
      { q: R`被积函数含 $\sqrt{a^2+x^2}$ 时，常用代换`, options: [R`$x=a\sin t$`, R`$x=a\tan t$`, R`$x=a\sec t$`, R`$x=a\cos t$`], answer: 1, explain: R`含 $\sqrt{a^2+x^2}$ 令 $x=a\tan t$。` },
      { q: R`分部积分公式为`, options: [R`$\int u\,dv=uv-\int v\,du$`, R`$\int u\,dv=uv+\int v\,du$`, R`$\int u\,dv=\int v\,du-uv$`, R`$\int u\,dv=uv$`], answer: 0, explain: R`分部积分公式。` },
      { q: R`三角有理式积分的万能代换是`, options: [R`令 $\tan\dfrac x2=t$`, R`令 $\tan x=t$`, R`令 $\sin x=t$`, R`令 $\cos x=t$`], answer: 0, explain: R`万能代换令 $\tan\frac x2=t$。` },
      { q: R`$\displaystyle\int x^\alpha dx\ (\alpha\neq-1)=$`, options: [R`$\dfrac{1}{\alpha+1}x^{\alpha+1}+C$`, R`$\alpha x^{\alpha-1}+C$`, R`$\ln|x|+C$`, R`$\dfrac{x^{\alpha}}{\alpha}+C$`], answer: 0, explain: R`幂函数积分公式。` },
      { q: R`若 $\int f(x)dx=F(x)+C$，则 $\left(\int f(x)dx\right)'=$`, options: [R`$f(x)$`, R`$F(x)$`, R`$F'(x)+C$`, R`$f'(x)$`], answer: 0, explain: R`先积后导还原被积函数。` }
    ]
  };
})();
