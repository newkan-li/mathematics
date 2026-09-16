window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["gs03_s2"] = {
    id: "gs03_s2",
    ch: "第三章 一元函数积分学",
    title: "第三节 反常积分",
    book: "《高等数学辅导讲义》",
    pages: [110, 113],
    img: "assets/img/gaoshu",
    content: [
      { p: 110, md: R`故 $\max\limits_{a\leqslant x\leqslant b}|f'(x)|\geqslant\frac{2}{(b-a)^2}\int_a^b|f(x)|\,dx.$
【例6】设 $f(x)$ 在 $[0,1]$ 上有连续导数，且 $f(0)=0$，求证：$\int_0^1f^2(x)dx\leqslant\frac{1}{2}\int_0^1f'^2(x)dx.$
【证】由于 $f(x)=\int_0^xf'(t)dt$，故 $f^2(x)=\left(\int_0^xf'(t)dt\right)^2\leqslant\int_0^x1^2dt\cdot\int_0^xf'^2(t)dt\quad(\text{柯西积分不等式})=x\int_0^xf'^2(t)dt\leqslant x\int_0^1f'^2(t)dt,$
$\int_0^1f^2(x)dx\leqslant\int_0^1x\,dx\cdot\int_0^1f'^2(t)dt=\frac{1}{2}\int_0^1f'^2(t)dt.$
【注】本题若再加一个条件 $f(1)=0$，便可证明 $\int_0^1f^2(x)dx\leqslant\frac{1}{4}\int_0^1f'^2(x)dx$ 及 $\int_0^1f^2(x)dx\leqslant\frac{1}{8}\int_0^1f'^2(x)dx.$
### 第三节 反常积分
#### 一、考试内容要点精讲
##### （一）无穷区间上的反常积分
**定义 1** 设 $f(x)$ 为 $[a,+\infty)$ 上的连续函数，如果极限 $\lim\limits_{t\to+\infty}\int_a^tf(x)dx$ 存在，则称此极限为函数 $f(x)$ 在无穷区间 $[a,+\infty)$ 上的反常积分，记作 $\int_a^{+\infty}f(x)dx$，即
$$\int_a^{+\infty}f(x)dx=\lim_{t\to+\infty}\int_a^tf(x)dx,$$
这时也称反常积分 $\int_a^{+\infty}f(x)dx$ 收敛。如果上述极限不存在，则称反常积分 $\int_a^{+\infty}f(x)dx$ 发散。
**定义 2** 设 $f(x)$ 为 $(-\infty,b]$ 上的连续函数，则可类似的定义函数 $f(x)$ 在无穷区间 $(-\infty,b]$ 上的反常积分
$$\int_{-\infty}^bf(x)dx=\lim_{t\to-\infty}\int_t^bf(x)dx.$$
**定义 3** 设 $f(x)$ 为 $(-\infty,+\infty)$ 上的连续函数，如果反常积分 $\int_{-\infty}^0f(x)dx$ 和 $\int_0^{+\infty}f(x)dx$ 都收敛，则称反常积分 $\int_{-\infty}^{+\infty}f(x)dx$ 收敛，且
$$\int_{-\infty}^{+\infty}f(x)dx=\int_{-\infty}^0f(x)dx+\int_0^{+\infty}f(x)dx.$$
如果 $\int_{-\infty}^0f(x)dx$ 与 $\int_0^{+\infty}f(x)dx$ 之一发散，则称 $\int_{-\infty}^{+\infty}f(x)dx$ 发散。` },
      { p: 111, md: R`常用结论：$\int_a^{+\infty}\frac{1}{x^p}dx\begin{cases}p>1&\text{收敛}\\p\leqslant1&\text{发散}\end{cases}\quad(a>0).$
##### （二）无界函数的反常积分
如果函数 $f(x)$ 在点 $a$ 的任一邻域内都无界，那么点 $a$ 称为函数 $f(x)$ 的瑕点（也称为无界点）。无界函数的反常积分也称为瑕积分。
**定义 1** 设函数 $f(x)$ 在 $(a,b]$ 上连续，点 $a$ 为函数 $f(x)$ 的瑕点。如果极限 $\lim\limits_{t\to a^+}\int_t^bf(x)dx$ 存在，则称此极限为函数 $f(x)$ 在区间 $[a,b]$ 上的反常积分，记作 $\int_a^bf(x)dx$，即
$$\int_a^bf(x)dx=\lim_{t\to a^+}\int_t^bf(x)dx,$$
这时也称反常积分 $\int_a^bf(x)dx$ 收敛。如果上述极限不存在，则称反常积分 $\int_a^bf(x)dx$ 发散。
**定义 2** 设函数 $f(x)$ 在 $[a,b)$ 上连续，点 $b$ 为函数 $f(x)$ 的瑕点，则可类似的定义函数 $f(x)$ 在区间 $[a,b]$ 上的反常积分
$$\int_a^bf(x)dx=\lim_{t\to b^-}\int_a^tf(x)dx.$$
**定义 3** 设函数 $f(x)$ 在 $[a,b]$ 上除点 $c(a<c<b)$ 外连续，点 $c$ 为函数 $f(x)$ 的瑕点。如果反常积分 $\int_a^cf(x)dx$ 和 $\int_c^bf(x)dx$ 都收敛，则称反常积分 $\int_a^bf(x)dx$ 收敛，且
$$\int_a^bf(x)dx=\int_a^cf(x)dx+\int_c^bf(x)dx.$$
如果 $\int_a^cf(x)dx$ 与 $\int_c^bf(x)dx$ 之一发散，则称 $\int_a^bf(x)dx$ 发散。
常用结论：$\int_a^b\frac{1}{(x-a)^p}dx\begin{cases}p<1,&\text{收敛},\\p\geqslant1,&\text{发散}.\end{cases}$ $\int_a^b\frac{1}{(b-x)^p}dx\begin{cases}p<1,&\text{收敛},\\p\geqslant1,&\text{发散}.\end{cases}$
#### 二、常考题型的方法与技巧
##### 题型一 反常积分的概念与敛散性
【例1】下列广义积分发散的是
(A) $\int_{-1}^1\frac{dx}{\sin x}.$ (B) $\int_{-1}^1\frac{dx}{\sqrt{1-x^2}}.$ (C) $\int_0^{+\infty}e^{-x^2}dx.$ (D) $\int_2^{+\infty}\frac{dx}{x\ln^2x}.$
【解1】排除法
$\int_{-1}^1\frac{dx}{\sqrt{1-x^2}}dx=\arcsin x\bigg|_{-1}^1=\pi,$ 故收敛；` },
      { p: 112, md: R`$\int_0^{+\infty}e^{-x^2}dx$ 肯定收敛，因为 $\frac{1}{\sqrt{2\pi}}\int_{-\infty}^{+\infty}e^{-\frac{x^2}{2}}dx=1$（概率积分）；
$\int_2^{+\infty}\frac{dx}{x\ln^2x}=-\frac{1}{\ln x}\bigg|_2^{+\infty}=\frac{1}{\ln2},$ 故收敛；故应选(A)。
【解2】直接法
$$\int_{-1}^1\frac{dx}{\sin x}=\int_{-1}^0\frac{dx}{\sin x}+\int_0^1\frac{dx}{\sin x}.$$
由于 $x\to0^+$ 时，$\sin x\sim x$，则 $\int_0^1\frac{dx}{\sin x}$ 与 $\int_0^1\frac{1}{x}dx$ 同敛散。而 $\int_0^1\frac{dx}{x}$ 发散，则 $\int_{-1}^1\frac{1}{\sin x}dx$ 发散，故选(A)。
【例2】设函数 $f(x)=\begin{cases}\frac{1}{(x-1)^{a-1}},&1<x<e,\\\frac{1}{x\ln^{a+1}x},&x\geqslant e.\end{cases}$ 若反常积分 $\int_1^{+\infty}f(x)dx$ 收敛，则
(A) $a<-2$。 (B) $a>2$。 (C) $-2<a<0$。 (D) $0<a<2$。
【解】$\int_1^{+\infty}f(x)dx=\int_1^e\frac{dx}{(x-1)^{a-1}}+\int_e^{+\infty}\frac{dx}{x\ln^{a+1}x}.$
由 $\int_1^e\frac{dx}{(x-1)^{a-1}}$ 收敛知 $a-1<1$，即 $a<2$。又
$$\int_e^{+\infty}\frac{dx}{x\ln^{a+1}x}=\int_e^{+\infty}\frac{d\ln x}{\ln^{a+1}x}\overset{\text{令 }t=\ln x}{=}\int_1^{+\infty}\frac{dt}{t^{a+1}},$$
由该积分收敛知 $a+1>1$，即 $a>0$。故 $0<a<2$，应选(D)。
##### 题型二 反常积分计算
【例1】计算 $\int_1^{+\infty}\frac{\arctan x}{x^2}dx.$
【解】原式 $=-\int_1^{+\infty}\arctan x\,d\frac{1}{x}=-\frac{\arctan x}{x}\bigg|_1^{+\infty}+\int_1^{+\infty}\frac{dx}{x(1+x^2)}=\frac{\pi}{4}+\ln\frac{x}{\sqrt{1+x^2}}\bigg|_1^{+\infty}=\frac{\pi}{4}+\frac{1}{2}\ln2.$
【例2】计算 $\int_3^{+\infty}\frac{dx}{(x-1)^4\sqrt{x^2-2x}}.$
【解】原式 $=\int_3^{+\infty}\frac{dx}{(x-1)^4\sqrt{(x-1)^2-1}}=\int_{\frac{\pi}{3}}^{\frac{\pi}{2}}\frac{\sec t\tan t\,dt}{\sec^4t\tan t}\quad(\text{令 }(x-1)=\sec t)=\int_{\frac{\pi}{3}}^{\frac{\pi}{2}}\cos^3t\,dt=\frac{2}{3}-\frac{3\sqrt{3}}{8}.$
【例3】计算 $\int_0^{+\infty}\frac{xe^{-x}}{(1+e^{-x})^2}dx.$` },
      { p: 113, md: R`【解】原式 $=\int_0^{+\infty}\frac{xe^x}{(1+e^x)^2}dx=-\int_0^{+\infty}x\,d\frac{1}{1+e^x}=-\frac{x}{1+e^x}\bigg|_0^{+\infty}+\int_0^{+\infty}\frac{dx}{1+e^x}=\int_0^{+\infty}\frac{e^{-x}}{1+e^{-x}}dx=-\ln(1+e^{-x})\bigg|_0^{+\infty}=\ln2.$
【例4】求证：$\int_0^{+\infty}\frac{x^2}{1+x^4}dx=\int_0^{+\infty}\frac{1}{1+x^4}dx$，并求其值。
【解】令 $x=\frac{1}{t}$，得
$$\text{左端}=\int_0^{+\infty}\frac{x^2}{1+x^4}dx=\int_{+\infty}^0\frac{\frac{1}{t^2}}{1+\frac{1}{t^4}}\cdot\left(-\frac{1}{t^2}\right)dt=\int_0^{+\infty}\frac{1}{1+t^4}dt=\text{右端}.$$
原式 $=\frac{1}{2}\int_0^{+\infty}\frac{x^2+1}{1+x^4}dx=\frac{1}{2}\int_0^{+\infty}\frac{1+\frac{1}{x^2}}{x^2+\frac{1}{x^2}}dx=\frac{1}{2}\int_0^{+\infty}\frac{d(x-\frac{1}{x})}{(x-\frac{1}{x})^2+2}=\frac{1}{2}\cdot\frac{1}{\sqrt{2}}\arctan\frac{x-\frac{1}{x}}{\sqrt{2}}\bigg|_0^{+\infty}=\frac{1}{2\sqrt{2}}\left[\lim_{x\to+\infty}\arctan\frac{x-\frac{1}{x}}{\sqrt{2}}-\lim_{x\to0^+}\arctan\frac{x-\frac{1}{x}}{\sqrt{2}}\right]=\frac{1}{2\sqrt{2}}\left[\frac{\pi}{2}-\left(-\frac{\pi}{2}\right)\right]=\frac{\pi}{2\sqrt{2}}.$
### 第四节 定积分应用
#### 一、考试内容要点精讲
用定积分可以计算一些几何量与物理量（平面图形的面积、平面曲线的弧长、旋转体的体积及侧面积、平行截面面积为已知的立体体积、变力做功、压力、引力及函数平均值等），解决这些问题经常采用的就是所谓的"元素法"。
##### （一）几何应用
**1. 平面图形的面积**
计算平面图形的面积时，利用二重积分比利用一元定积分的元素法方便。设有平面域 $D$，则该平面域 $D$ 的面积为
$$S=\iint_D1d\sigma.$$
1）若平面域 $D$ 由曲线 $y=f(x),y=g(x)(f(x)\geqslant g(x))$，$x=a,x=b(a<b)$ 所围成（如右图），则
$$S=\iint_D1d\sigma=\int_a^bdx\int_{g(x)}^{f(x)}1dy=\int_a^b[f(x)-g(x)]dx.$$
2）若平面域 $D$ 由曲线 $\rho=\rho(\theta),\theta=\alpha,\theta=\beta(\alpha<\beta)$` }
    ],
    quiz: [
      { q: R`$\displaystyle\int_a^{+\infty}\frac{1}{x^p}dx\ (a>0)$ 收敛的条件是`, options: [R`$p>1$`, R`$p<1$`, R`$p\geqslant1$`, R`$p\leqslant1$`], answer: 0, explain: R`无穷区间 $p$ 积分，$p>1$ 收敛。` },
      { q: R`$\displaystyle\int_a^b\frac{1}{(x-a)^p}dx$ 收敛的条件是`, options: [R`$p<1$`, R`$p>1$`, R`$p\geqslant1$`, R`$p\leqslant0$`], answer: 0, explain: R`瑕积分（瑕点在 $a$），$p<1$ 收敛。` },
      { q: R`无界函数的反常积分也称为`, options: [R`瑕积分`, R`定积分`, R`变限积分`, R`重积分`], answer: 0, explain: R`以瑕点为特征，称瑕积分。` },
      { q: R`$\displaystyle\int_{-1}^1\frac{dx}{\sqrt{1-x^2}}=$`, options: [R`$\pi$`, R`发散`, R`$0$`, R`$1$`], answer: 0, explain: R`$=\arcsin x|_{-1}^1=\pi$，收敛。` },
      { q: R`$\displaystyle\int_0^{+\infty}e^{-x^2}dx$`, options: [R`收敛`, R`发散`, R`等于 $1$`, R`等于 $0$`], answer: 0, explain: R`概率积分，收敛（$=\frac{\sqrt\pi}{2}$）。` },
      { q: R`$\displaystyle\int_1^{+\infty}\frac{\arctan x}{x^2}dx=$`, options: [R`$\dfrac\pi4+\dfrac12\ln2$`, R`$\dfrac\pi4$`, R`$\dfrac12\ln2$`, R`发散`], answer: 0, explain: R`分部积分计算得该值。` },
      { q: R`$\displaystyle\int_2^{+\infty}\frac{dx}{x\ln^2x}=$`, options: [R`$\dfrac{1}{\ln2}$`, R`$\ln2$`, R`发散`, R`$0$`], answer: 0, explain: R`$=-\frac{1}{\ln x}|_2^{+\infty}=\frac{1}{\ln2}$。` },
      { q: R`反常积分 $\displaystyle\int_{-\infty}^{+\infty}f(x)dx$ 收敛的充要条件是`, options: [R`$\displaystyle\int_{-\infty}^0f$ 与 $\int_0^{+\infty}f$ 都收敛`, R`$\displaystyle\int_0^{+\infty}f$ 收敛`, R`$\displaystyle\int_{-\infty}^0f$ 收敛`, R`$f$ 有界`], answer: 0, explain: R`需两端积分都收敛。` },
      { q: R`$\displaystyle\int_0^{+\infty}\frac{xe^{-x}}{(1+e^{-x})^2}dx=$`, options: [R`$\ln2$`, R`$1$`, R`$\dfrac12$`, R`$0$`], answer: 0, explain: R`计算得 $\ln2$。` },
      { q: R`$\displaystyle\int_0^{+\infty}\frac{dx}{1+x^4}=$`, options: [R`$\dfrac{\pi}{2\sqrt2}$`, R`$\dfrac{\pi}{4}$`, R`$\dfrac{\pi}{2}$`, R`发散`], answer: 0, explain: R`由对称性求得 $\frac{\pi}{2\sqrt2}$。` }
    ]
  };
})();
