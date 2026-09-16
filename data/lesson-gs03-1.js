window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["gs03_s0"] = {
    id: "gs03_s0",
    ch: "第三章 一元函数积分学",
    title: "第一节 不定积分",
    book: "《高等数学辅导讲义》",
    pages: [87, 93],
    img: "assets/img/gaoshu",
    content: [
      { p: 87, md: R`# 第三章 一元函数积分学
## 第一节 不定积分
### 一、考试内容要点精讲
#### （一）两个基本概念
1）原函数 如果在区间 $I$ 上 $F'(x)=f(x)$ 或 $\mathrm{d}F(x)=f(x)\mathrm{d}x$ 处处成立，则称 $F(x)$ 为 $f(x)$ 在区间 $I$ 上的原函数。
【注】如果 $F(x)$ 为 $f(x)$ 的一个原函数，那么 $F(x)+C$ 都是 $f(x)$ 的原函数，且是 $f(x)$ 的所有原函数。
2）不定积分 在区间 $I$ 上，函数 $f(x)$ 带有任意常数的原函数称为 $f(x)$ 在区间 $I$ 上的不定积分，记为 $\int f(x)\mathrm{d}x$。
如果 $F(x)$ 是 $f(x)$ 在区间 $I$ 上的一个原函数，那么 $F(x)+C$ 就是 $f(x)$ 的不定积分，即
$$\int f(x)\mathrm{d}x=F(x)+C.$$
#### （二）原函数的存在性
1）若 $f(x)$ 在区间 $I$ 上连续，则 $f(x)$ 在区间 $I$ 上必有原函数。
2）若 $f(x)$ 在区间 $I$ 上有第一类间断点，则 $f(x)$ 在区间 $I$ 上没有原函数。
#### （三）不定积分的性质
(1) $\left(\int f(x)\mathrm{d}x\right)'=f(x)$，$\mathrm{d}\int f(x)\mathrm{d}x=f(x)\mathrm{d}x$；
(2) $\int f'(x)\mathrm{d}x=f(x)+C$，$\int\mathrm{d}f(x)=f(x)+C$；
(3) $\int kf(x)\mathrm{d}x=k\int f(x)\mathrm{d}x$（$k$ 为常数）；
(4) $\int[f(x)\pm g(x)]\mathrm{d}x=\int f(x)\mathrm{d}x\pm\int g(x)\mathrm{d}x$。
#### （四）基本积分公式
1) $\int x^{\alpha}\mathrm{d}x=\frac{1}{\alpha+1}x^{\alpha+1}+C\quad(\alpha\neq-1)$； 2) $\int\frac{1}{x}\mathrm{d}x=\ln|x|+C$；` },
      { p: 88, md: R`3) $\int a^x\mathrm{d}x=\frac{a^x}{\ln a}+C\quad(a>0,a\neq1)$； 4) $\int e^x\mathrm{d}x=e^x+C$；
5) $\int\sin x\mathrm{d}x=-\cos x+C$； 6) $\int\cos x\mathrm{d}x=\sin x+C$；
7) $\int\sec^2x\mathrm{d}x=\tan x+C$； 8) $\int\csc^2x\mathrm{d}x=-\cot x+C$；
9) $\int\sec x\tan x\mathrm{d}x=\sec x+C$； 10) $\int\csc x\cot x\mathrm{d}x=-\csc x+C$；
11) $\int\sec x\mathrm{d}x=\ln|\sec x+\tan x|+C$； 12) $\int\csc x\mathrm{d}x=-\ln|\csc x+\cot x|+C$；
13) $\int\frac{\mathrm{d}x}{a^2+x^2}=\frac{1}{a}\arctan\frac{x}{a}+C$； 14) $\int\frac{\mathrm{d}x}{a^2-x^2}=\frac{1}{2a}\ln\left|\frac{a+x}{a-x}\right|+C$；
15) $\int\frac{\mathrm{d}x}{\sqrt{a^2-x^2}}=\arcsin\frac{x}{a}+C$； 16) $\int\frac{\mathrm{d}x}{\sqrt{x^2+a^2}}=\ln|x+\sqrt{x^2+a^2}|+C$；
17) $\int\frac{\mathrm{d}x}{\sqrt{x^2-a^2}}=\ln|x+\sqrt{x^2-a^2}|+C$。
#### （五）三种主要积分法
1）第一类换元法（凑微分法）
若 $\int f(u)\mathrm{d}u=F(u)+C$，且 $\varphi(x)$ 可导，则
$$\int f(\varphi(x))\varphi'(x)\mathrm{d}x=\int f(\varphi(x))\mathrm{d}\varphi(x)=F(\varphi(x))+C.$$
2）第二类换元法
设函数 $x=\varphi(t)$ 可导，且 $\varphi'(t)\neq0$，又设 $\int f(\varphi(t))\varphi'(t)\mathrm{d}t=F(t)+C$，则
$$\int f(x)\mathrm{d}x=\int f(\varphi(t))\varphi'(t)\mathrm{d}t=F(\varphi^{-1}(x))+C.$$
三种常用的变量代换
(1) 被积函数中含有 $\sqrt{a^2-x^2}$ 时，令 $x=a\sin t$，或 $x=a\cos t$；
(2) 被积函数中含有 $\sqrt{a^2+x^2}$ 时，令 $x=a\tan t$；
(3) 被积函数中含有 $\sqrt{x^2-a^2}$ 时，令 $x=a\sec t$。
3）分部积分法
设 $u(x),v(x)$ 有连续一阶导数，则 $\int u\mathrm{d}v=uv-\int v\mathrm{d}u.$
【注】(1) 分部积分法常用于被积函数为两类不同函数相乘的不定积分；
(2) 分部积分法选择 $u(x),v(x)$ 的原则是 $\int v\mathrm{d}u$ 比 $\int u\mathrm{d}v$ 好积，设 $p_n(x)$ 是 $n$ 次多项式，则
形如 $\int p_n(x)e^{ax}\mathrm{d}x$，$\int p_n(x)\sin ax\mathrm{d}x$，$\int p_n(x)\cos ax\mathrm{d}x$ 的积分都是先把多项式以外的函数凑进微分号，然后分部积分；
形如 $\int p_n(x)\ln x\mathrm{d}x$，$\int p_n(x)\arctan x\mathrm{d}x$，$\int p_n(x)\arcsin x\mathrm{d}x$ 的积分都是先把多项式函数` },
      { p: 89, md: R`凑进微分号，然后分部积分；
形如 $\int e^{ax}\sin\beta x\mathrm{d}x$，$\int e^{ax}\cos\beta x\mathrm{d}x$ 的积分可连续两次将指数函数凑进微分号分部积分还原，求得原不定积分。
#### （六）三类常见可积函数积分
1）有理函数积分 $\int R(x)\mathrm{d}x$
(1) 一般方法（部分分式法）；(2) 特殊方法（加项减项拆项或凑微分降幂）。
2）三角有理式积分 $\int R(\sin x,\cos x)\mathrm{d}x$
(1) 一般方法（万能代换）令 $\tan\frac{x}{2}=t$
$$\int R(\sin x,\cos x)\mathrm{d}x=\int R\left(\frac{2t}{1+t^2},\frac{1-t^2}{1+t^2}\right)\frac{2}{1+t^2}\mathrm{d}t.$$
(2) 特殊方法（三角变形，换元，分部）
几种常用的换元法
ⅰ) 若 $R(-\sin x,\cos x)=-R(\sin x,\cos x)$，则令 $u=\cos x$，即，凑 $\mathrm{d}\cos x$；
ⅱ) 若 $R(\sin x,-\cos x)=-R(\sin x,\cos x)$，则令 $u=\sin x$，即，凑 $\mathrm{d}\sin x$；
ⅲ) 若 $R(-\sin x,-\cos x)=R(\sin x,\cos x)$，则令 $u=\tan x$，即，凑 $\mathrm{d}\tan x$。
3）简单无理函数积分 $\int R\left(x,\sqrt[n]{\frac{ax+b}{cx+d}}\right)\mathrm{d}x$
令 $\sqrt[n]{\frac{ax+b}{cx+d}}=t$，将其化为有理函数积分进行计算。
### 二、常考题型的方法与技巧
#### 题型一 计算不定积分
【例1】$I=\int\frac{\mathrm{d}x}{\sqrt{x(4-x)}}$。
【解1】$I=\int\frac{\mathrm{d}x}{\sqrt{4x-x^2}}=\int\frac{\mathrm{d}x}{\sqrt{4-(x-2)^2}}=\arcsin\frac{x-2}{2}+C.$
【解2】$I=\int\frac{2\mathrm{d}(\sqrt{x})}{\sqrt{4-x}}=2\arcsin\frac{\sqrt{x}}{2}+C.$
【例2】$I=\int\frac{\mathrm{d}x}{\cos x\sqrt{\sin x}}$。
【解】$I=\int\frac{\mathrm{d}x}{\cos x\sqrt{\sin x}}=\int\frac{\cos x\mathrm{d}x}{\cos^2x\sqrt{\sin x}}=\int\frac{\mathrm{d}\sin x}{(1-\sin^2x)\sqrt{\sin x}}=2\int\frac{\mathrm{d}\sqrt{\sin x}}{1-\sin^2x}$
$\xrightarrow{\text{令}\sqrt{\sin x}=t}2\int\frac{\mathrm{d}t}{1-t^4}=2\int\frac{\mathrm{d}t}{(1-t^2)(1+t^2)}=\int\left(\frac{1}{1-t^2}+\frac{1}{1+t^2}\right)\mathrm{d}t$` },
      { p: 90, md: R`$=\frac{1}{2}\ln\left|\frac{1+t}{1-t}\right|+\arctan t+C=\frac{1}{2}\ln\left|\frac{1+\sqrt{\sin x}}{1-\sqrt{\sin x}}\right|+\arctan\sqrt{\sin x}+C.$
【例3】$I=\int\frac{x^5}{\sqrt{1+x^2}}\mathrm{d}x$。
【解1】令 $x=\tan t$，则 $\mathrm{d}x=\sec^2t\mathrm{d}t$。
$I=\int\frac{\tan^5t\cdot\sec^2t\mathrm{d}t}{\sec t}=\int\tan^4t\cdot(\tan t\cdot\sec t)\mathrm{d}t=\int\tan^4t\mathrm{d}(\sec t)$
$=\int(\sec^2t-1)^2\mathrm{d}(\sec t)=\int(u^2-1)^2\mathrm{d}u\quad(u=\sec t)=\frac{1}{5}u^5-\frac{2}{3}u^3+u+C=\frac{1}{15}(8-4x^2+3x^4)\sqrt{1+x^2}+C.$
【解2】$I=\frac{1}{2}\int\frac{x^4\mathrm{d}x^2}{\sqrt{1+x^2}}=\int x^4\mathrm{d}(\sqrt{1+x^2})=x^4\sqrt{1+x^2}-4\int x^3\sqrt{1+x^2}\mathrm{d}x$
$=x^4\sqrt{1+x^2}-2\int[(x^2+1)-1]\sqrt{1+x^2}\mathrm{d}(1+x^2)=x^4\sqrt{1+x^2}-\frac{4}{5}(1+x^2)^{\frac{5}{2}}+\frac{4}{3}(1+x^2)^{\frac{3}{2}}+C.$
【例4】$I=\int\frac{xe^x}{\sqrt{e^x-1}}\mathrm{d}x$。
【解】$I=2\int x\mathrm{d}\sqrt{e^x-1}=2x\sqrt{e^x-1}-2\int\sqrt{e^x-1}\mathrm{d}x$。
$\int\sqrt{e^x-1}\mathrm{d}x=\int\frac{2t^2}{1+t^2}\mathrm{d}t\quad(\text{令}\sqrt{e^x-1}=t)=2t-2\arctan t+C,$
则 $I=2x\sqrt{e^x-1}-4\sqrt{e^x-1}+4\arctan\sqrt{e^x-1}+C.$
【例5】$\int\frac{\ln x}{\sqrt{1+x}}\mathrm{d}x$。
【解1】原式 $=2\int\ln x\mathrm{d}\sqrt{1+x}=2\sqrt{1+x}\ln x-2\int\frac{\sqrt{1+x}}{x}\mathrm{d}x$，
$\int\frac{\sqrt{1+x}}{x}\mathrm{d}x\xlongequal{\sqrt{1+x}=t}2\int\frac{t^2}{t^2-1}\mathrm{d}t=2\int\mathrm{d}t+2\int\frac{\mathrm{d}t}{t^2-1}=2t+\ln\left|\frac{t-1}{t+1}\right|+C,$
原式 $=2\sqrt{1+x}\ln x-4\sqrt{1+x}-2\ln\left|\frac{\sqrt{1+x}-1}{\sqrt{1+x}+1}\right|+C.$
【解2】令 $\sqrt{1+x}=t$，则原式 $=\int\frac{\ln(t^2-1)}{t}2t\mathrm{d}t=2\int\ln(t^2-1)\mathrm{d}t=2t\ln(t^2-1)-2\int\frac{2t^2}{t^2-1}\mathrm{d}t$` },
      { p: 91, md: R`$=2\sqrt{1+x}\ln x-4\sqrt{1+x}-2\ln\left|\frac{\sqrt{1+x}-1}{\sqrt{1+x}+1}\right|+C$.
【例6】$\int\frac{\arctan e^x}{e^{2x}}\mathrm{d}x$。
【解1】原式 $=-\frac{1}{2}\int\arctan e^x\mathrm{d}e^{-2x}=-\frac{1}{2}e^{-2x}\arctan e^x+\frac{1}{2}\int\frac{e^{-x}}{1+e^{2x}}\mathrm{d}x=-\frac{1}{2}e^{-2x}\arctan e^x+\frac{1}{2}\int\frac{\mathrm{d}e^x}{e^{2x}(1+e^{2x})}$
$=-\frac{1}{2}[e^{-2x}\arctan e^x+e^{-x}+\arctan e^x]+C.$
【解2】令 $e^x=t$，则原式 $=\int\frac{\arctan t}{t^3}\mathrm{d}t=-\frac{1}{2}\int\arctan t\mathrm{d}\frac{1}{t^2}=-\frac{\arctan t}{2t^2}+\frac{1}{2}\int\frac{1}{t^2(1+t^2)}\mathrm{d}t$
$=-\frac{\arctan t}{2t^2}-\frac{1}{2t}-\frac{1}{2}\arctan t+C=-\frac{1}{2}[e^{-2x}\arctan e^x+e^{-x}+\arctan e^x]+C.$
【例7】$I=\int\frac{1}{x+x^9}\mathrm{d}x$。
【解1】$I=\int\frac{\mathrm{d}x}{x(1+x^8)}=\int\frac{x^7\mathrm{d}x}{x^8(1+x^8)}=\frac{1}{8}\int\frac{\mathrm{d}u}{u(1+u)}(\text{令}x^8=u)=\frac{1}{8}[\ln u-\ln(1+u)]+C=\frac{1}{8}\ln\frac{x^8}{1+x^8}+C.$
【解2】$I=\int\frac{(1+x^8)-x^8}{x(1+x^8)}\mathrm{d}x=\int\left(\frac{1}{x}-\frac{x^7}{1+x^8}\right)\mathrm{d}x=\ln|x|-\frac{1}{8}\ln(1+x^8)+C.$
【解3】$I=\int\frac{\mathrm{d}x}{x^9(1+\frac{1}{x^8})}=-\frac{1}{8}\int\frac{\mathrm{d}x^{-8}}{1+x^{-8}}=-\frac{1}{8}\ln|1+x^{-8}|+C.$
【例8】$I=\int\frac{1+x^4}{1+x^6}\mathrm{d}x$。
$I=\int\frac{1+x^4}{1+x^6}\mathrm{d}x=\int\frac{1+x^4-x^2+x^2}{1+x^6}\mathrm{d}x=\int\frac{1-x^2+x^4}{1+x^6}\mathrm{d}x+\int\frac{x^2}{1+x^6}\mathrm{d}x$
$=\int\frac{1-x^2+x^4}{(1+x^2)(1-x^2+x^4)}\mathrm{d}x+\frac{1}{3}\int\frac{\mathrm{d}x^3}{1+x^6}=\int\frac{\mathrm{d}x}{1+x^2}+\frac{1}{3}\int\frac{\mathrm{d}x^3}{1+(x^3)^2}=\arctan x+\frac{1}{3}\arctan x^3+C.$
【例9】$I=\int\frac{\mathrm{d}x}{1+\sin x}$。` },
      { p: 92, md: R`【解1】$I=\int\frac{1-\sin x}{\cos^2x}\mathrm{d}x=\int\frac{1}{\cos^2x}\mathrm{d}x+\int\frac{\mathrm{d}\cos x}{\cos^2x}=\tan x-\frac{1}{\cos x}+C.$
【解2】$I=\int\frac{\mathrm{d}x}{1+\cos\left(\frac{\pi}{2}-x\right)}=\int\frac{\mathrm{d}x}{2\cos^2\left(\frac{\pi}{4}-\frac{x}{2}\right)}=\tan\left(\frac{x}{2}-\frac{\pi}{4}\right)+C.$
【解3】令 $\tan\frac{x}{2}=t$，则 $\mathrm{d}x=\frac{2\mathrm{d}t}{1+t^2},\sin x=\frac{2t}{1+t^2}$，从而
$I=\int\frac{2\mathrm{d}t}{1+t^2}\cdot\frac{1}{1+\frac{2t}{1+t^2}}=2\int\frac{\mathrm{d}t}{(1+t)^2}=\frac{-2}{1+t}+C=\frac{-2}{1+\tan\frac{x}{2}}+C.$
【例10】$\int\frac{\mathrm{d}x}{1+\sin x+\cos x}$。
【解】令 $\tan\frac{x}{2}=t$，则原式 $=\int\frac{\frac{2}{1+t^2}\mathrm{d}t}{1+\frac{2t}{1+t^2}+\frac{1-t^2}{1+t^2}}=\int\frac{\mathrm{d}t}{1+t}=\ln(1+t)+C=\ln\left(1+\tan\frac{x}{2}\right)+C.$
【例11】$I=\int\frac{\mathrm{d}x}{\sin x\cdot\cos^4x}$。
【解1】$I=\int\frac{\sin x\mathrm{d}x}{\sin^2x\cdot\cos^4x}=\int\frac{\mathrm{d}\cos x}{(1-\cos^2x)\cos^4x}=-\int\frac{\mathrm{d}u}{(1-u^2)u^4}\quad(\text{令}\cos x=u)$
$=-\int\frac{(1-u^4)+u^4}{(1-u^2)u^4}\mathrm{d}u=-\int\left(\frac{1}{u^4}+\frac{1}{u^2}\right)\mathrm{d}u-\int\frac{\mathrm{d}u}{1-u^2}=\frac{1}{3u^3}+\frac{1}{u}-\frac{1}{2}\ln\left|\frac{1+u}{1-u}\right|+C$
$=\frac{1}{3\cos^3x}+\frac{1}{\cos x}-\frac{1}{2}\ln\left|\frac{1+\cos x}{1-\cos x}\right|+C.$
【解2】$I=\int\frac{\sin^2x+\cos^2x}{\sin x\cdot\cos^4x}\mathrm{d}x=\int\frac{\sin x}{\cos^4x}\mathrm{d}x+\int\frac{\mathrm{d}x}{\sin x\cos^2x}=\frac{1}{3\cos^3x}+\int\frac{\sin^2x+\cos^2x}{\sin x\cdot\cos^2x}\mathrm{d}x$
$=\frac{1}{3\cos^3x}+\int\frac{\sin x\mathrm{d}x}{\cos^2x}+\int\frac{\mathrm{d}x}{\sin x}=\frac{1}{3\cos^3x}+\frac{1}{\cos x}-\ln|\csc x+\cot x|+C.$
【例12】$I=\int\frac{1}{a^2\sin^2x+b^2\cos^2x}\mathrm{d}x$。
【解】1）若 $a\neq0,b=0$，则 $I=\int\frac{\mathrm{d}x}{a^2\sin^2x}=-\frac{1}{a^2}\cot x+C.$
2）若 $a=0,b\neq0$，则 $I=\int\frac{1}{b^2\cos^2x}\mathrm{d}x=\frac{1}{b^2}\tan x+C.$
3）若 $a\neq0,b\neq0$，则 $I=\int\frac{\mathrm{d}x}{\cos^2x(b^2+a^2\tan^2x)}=\int\frac{\mathrm{d}u}{b^2+a^2u^2}\quad(\text{令}\tan x=u)=\frac{1}{ab}\arctan\frac{au}{b}+C=\frac{1}{ab}\arctan\frac{a\tan x}{b}+C$
【例13】$\int\frac{1}{x}\sqrt{\frac{x+1}{x-1}}\mathrm{d}x$。` },
      { p: 93, md: R`【解】令 $\sqrt{\frac{x+1}{x-1}}=t$，则
原式 $=-4\int\frac{t^2}{(t^2+1)(t^2-1)}\mathrm{d}t=-2\int\frac{(t^2+1)+(t^2-1)}{(t^2+1)(t^2-1)}\mathrm{d}t$
$=\ln\left|\frac{1+t}{1-t}\right|-2\arctan t+C=\ln|x+\sqrt{x^2-1}|-2\arctan\sqrt{\frac{x+1}{x-1}}+C.$
#### 题型二 不定积分杂例
【例1】若 $\int xf(x)\mathrm{d}x=\arcsin x+C$，求 $I=\int\frac{1}{f(x)}\mathrm{d}x$。
【解】由 $\int xf(x)\mathrm{d}x=\arcsin x+C$ 知 $xf(x)=(\arcsin x+C)'=\frac{1}{\sqrt{1-x^2}},$
则 $I=\int\frac{1}{f(x)}\mathrm{d}x=\int x\sqrt{1-x^2}\mathrm{d}x=-\frac{1}{3}(1-x^2)^{\frac{3}{2}}+C.$
【例2】若 $\ln(x+\sqrt{1+x^2})$ 为 $f(x)$ 的一个原函数，求 $I=\int xf'(x)\mathrm{d}x$。
【解】$I=\int xf'(x)\mathrm{d}x=xf(x)-\int f(x)\mathrm{d}x=x[\ln(x+\sqrt{1+x^2})]'-\ln(x+\sqrt{1+x^2})+C=\frac{x}{\sqrt{1+x^2}}-\ln(x+\sqrt{1+x^2})+C.$
【例3】设 $F(x)$ 为 $f(x)$ 的原函数，且当 $x\geqslant0$ 时，$F(x)f(x)=\frac{xe^x}{2(1+x)^2}$，已知 $F(0)=1,F(x)>0$。求 $f(x)$。
【解1】由 $F(x)f(x)=\frac{1}{2}[F^2(x)]'=\frac{xe^x}{2(1+x)^2}$，得
$F^2(x)=\int\frac{xe^x}{(1+x)^2}\mathrm{d}x=\int\frac{(x+1)-1}{(1+x)^2}e^x\mathrm{d}x=\int\frac{e^x}{1+x}\mathrm{d}x-\int\frac{e^x}{(1+x)^2}\mathrm{d}x=\int\frac{e^x}{1+x}\mathrm{d}x-\left(-\frac{e^x}{1+x}+\int\frac{e^x}{1+x}\mathrm{d}x\right)=\frac{e^x}{1+x}+C.$
由 $F(0)=1$，得 $C=0$，从而 $F^2(x)=\frac{e^x}{1+x}$ 即 $F(x)=\sqrt{\frac{e^x}{1+x}}$，于是 $f(x)=F'(x)=\left(\sqrt{\frac{e^x}{1+x}}\right)'=\frac{xe^x}{2(1+x)^2}\sqrt{\frac{1+x}{e^x}}.$
【解2】$F^2(x)=\int\frac{xe^x}{(1+x)^2}\mathrm{d}x=-\int(xe^x)\mathrm{d}\frac{1}{1+x}=-\frac{xe^x}{(1+x)}+\int\frac{e^x(1+x)}{1+x}\mathrm{d}x=-\frac{xe^x}{1+x}+e^x+C=\frac{e^x}{1+x}+C,$` }
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
