window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["gs01_s0"] = {
    id: "gs01_s0",
    ch: "第一章 函数 极限 连续",
    title: "第一节 函数",
    book: "《高等数学辅导讲义》",
    pages: [8, 12],
    img: "assets/img/gaoshu",
    content: [
      { p: 8, md: R`### 第一节 函数
#### 一、考试内容要点精讲
##### (一) 函数的概念
设 $x$ 和 $y$ 是两个变量，$D$ 是一个给定的数集。如果对于每个数 $x\in D$，变量 $y$ 按照一定的法则总有一个确定的数值和它对应，则称 $y$ 是 $x$ 的函数，记为 $y=f(x)$。常称 $x$ 为自变量，$y$ 为因变量，$D$ 为函数的定义域。
【注】函数概念有两个基本要素：定义域、对应规则（或称依赖关系）。当两个函数的定义域与对应规则完全相同时，它们就是同一函数。
##### (二) 函数的性质
**1. 单调性**
1) 定义：设函数 $y=f(x)$ 在某区间 $I$ 上有定义，如果对于区间 $I$ 上的任意两点 $x_1,x_2$，当 $x_1<x_2$ 时，恒有 $f(x_1)<f(x_2)$（或 $f(x_1)>f(x_2)$），则称函数 $y=f(x)$ 在区间 $I$ 上单调增加（或单调减少）。
如果对于区间 $I$ 上的任意两点 $x_1,x_2$，当 $x_1<x_2$ 时，恒有 $f(x_1)\leqslant f(x_2)$（或 $f(x_1)\geqslant f(x_2)$），则称函数 $y=f(x)$ 在区间 $I$ 上单调不减（或单调不增）。
2) 判定
(1) 利用定义；
(2) 利用导数。
设 $f(x)$ 在区间 $I$ 上可导，则
a) $f'(x)>0(<0)\Rightarrow f(x)$ 单调增（单调减）；
b) $f'(x)\geqslant0(\leqslant0)\Rightarrow f(x)$ 单调不减（单调不增）。
**2. 奇偶性**
1) 定义：设函数 $y=f(x)$ 的定义域 $D$ 关于原点对称（即若 $x\in D$，则有一 $-x\in D$），如果对于任一 $x\in D$，恒有 $f(-x)=f(x)$，则称 $f(x)$ 为 $D$ 上的偶函数；如果恒有 $f(-x)=-f(x)$，则称 $f(x)$ 为 $D$ 上的奇函数。
【注】(1) $\sin x$，$\tan x$，$\arcsin x$，$\arctan x$，$\ln\frac{1-x}{1+x}$，$\ln(x+\sqrt{1+x^2})$，$\frac{e^x-1}{e^x+1}$，$f(x)-$` },
      { p: 9, md: R`$f(-x)$ 都是奇函数；$x^2$，$|x|$，$\cos x$，$f(x)+f(-x)$ 都是偶函数；
(2) 奇函数 $y=f(x)$ 的图形关于原点对称，且若 $f(x)$ 在 $x=0$ 处有定义，则 $f(0)=0$；偶函数的图形关于 $y$ 轴对称。
2) 判定
(1) 利用定义；
(2) 设 $f(x)$ 可导，则
a) $f(x)$ 是奇函数 $\Rightarrow f'(x)$ 是偶函数；
b) $f(x)$ 是偶函数 $\Rightarrow f'(x)$ 是奇函数。
(3) 连续的奇函数其原函数都是偶函数；
连续的偶函数其原函数中有唯一一个是奇函数。
【注】设 $f(x)$ 连续
(1) 若 $f(x)$ 是奇函数，则 $\int_0^x f(t)dt$ 是偶函数；
(2) 若 $f(x)$ 是偶函数，则 $\int_0^x f(t)dt$ 是奇函数。
**3. 周期性**
1) 定义：若存在实数 $T>0$，对于任意 $x$，恒有 $f(x+T)=f(x)$，则称 $y=f(x)$ 为周期函数。使得上述关系式成立的最小正数 $T$ 称为 $f(x)$ 的最小正周期，简称为函数 $f(x)$ 的周期。
【注】(1) $\sin x$ 和 $\cos x$ 以 $2\pi$ 为周期，$\sin 2x$ 和 $|\sin x|$ 以 $\pi$ 为周期。
(2) 若 $f(x)$ 以 $T$ 为周期，则 $f(ax+b)$ 以 $\frac{T}{|a|}(a\neq0)$ 为周期。
2) 判定：(1) 利用定义；
(2) 可导的周期函数其导函数为周期函数；
(3) 周期函数的原函数不一定是周期函数。（如 $1+\cos x$）
【注】(1) 设 $f(x)$ 连续且以 $T$ 为周期，则
$F(x)=\int_0^x f(t)dt$ 是以 $T$ 为周期的周期函数 $\Leftrightarrow\int_0^T f(x)dx=0$。
(2) 周期函数的原函数是周期函数的充要条件是其在一个周期上的积分为零。
**4. 有界性**
1) 定义：若 $\exists M>0$，$\forall x\in I$，$|f(x)|\leqslant M$，则称 $f(x)$ 在 $I$ 上有界。
【注】$|\sin x|\leqslant1$，$|\cos x|\leqslant1$，$|\arcsin x|\leqslant\frac{\pi}{2}$，$|\arctan x|<\frac{\pi}{2}$，$|\arccos x|\leqslant\pi$。
2) 判定：(1) 利用定义；
(2) $f(x)$ 在 $[a,b]$ 上连续 $\Rightarrow f(x)$ 在 $[a,b]$ 上有界；
(3) $f(x)$ 在 $(a,b)$ 上连续，且 $f(a^+)$ 和 $f(b^-)$ 存在 $\Rightarrow f(x)$ 在 $(a,b)$ 上有界；
(4) $f'(x)$ 在区间 $I$（有限）上有界 $\Rightarrow f(x)$ 在 $I$ 上有界。
【注】(3) 中的区间 $(a,b)$ 改为无穷区间 $(-\infty,b)$，$(a,+\infty)$，$(-\infty,+\infty)$ 结论仍成立。
##### (三) 常见函数
**1. 复合函数**
设函数 $y=f(u)$ 的定义域为 $D_f$，函数 $u=g(x)$ 的定义域为 $D_g$，值域为 $R_g$，若 $D_f\cap R_g$` },
      { p: 10, md: R`$\neq\varnothing$，则称函数 $y=f[g(x)]$ 为函数 $y=f(u)$ 与 $u=g(x)$ 的复合函数。它的定义域为 $\{x|x\in D_g,g(x)\in D_f\}$。
**2. 反函数**
设函数 $y=f(x)$ 的定义域为 $D$，值域为 $R$。若对任意 $y\in R$，有唯一确定的 $x\in D$，使得 $y=f(x)$，则记为 $x=f^{-1}(y)$，称其为函数 $y=f(x)$ 的反函数。
【注】(1) 有时也将 $y=f(x)$ 的反函数 $x=f^{-1}(y)$ 写成 $y=f^{-1}(x)$。在同一直角坐标系中，$y=f(x)$ 和 $x=f^{-1}(y)$ 的图形重合，$y=f(x)$ 和 $y=f^{-1}(x)$ 的图形关于直线 $y=x$ 对称。
(2) $f^{-1}[f(x)]=x$，$f[f^{-1}(x)]=x$。
**3. 基本初等函数**
我们把以下五类函数统称为基本初等函数。
1) 幂函数 $y=x^{\mu}$（$\mu$ 为实数）；
2) 指数函数 $y=a^x$（$a>0,a\neq1$）；
3) 对数函数 $y=\log_a x$（$a>0,a\neq1$）；
4) 三角函数 $y=\sin x$，$y=\cos x$，$y=\tan x$，$y=\cot x$，$y=\sec x$，$y=\csc x$；
5) 反三角函数 $y=\arcsin x$，$y=\arccos x$，$y=\arctan x$。
**4. 初等函数**
由常数和基本初等函数经过有限次四则运算和有限次复合所构成，并能用一个式子表示的函数称为初等函数。
#### 二、常考题型的方法与技巧
##### 题型一 复合函数
【例1】已知 $f(x+1)$ 的定义域为 $[0,a]$（$a>0$），则 $f(x)$ 的定义域为
(A) $[-1,a-1]$。 (B) $[1,a+1]$。 (C) $[a,a+1]$。 (D) $[a-1,a]$。
【解】应选 (B)
由 $f(x+1)$ 的定义域为 $[0,a]$ 知 $0\leqslant x\leqslant a$，则 $1\leqslant x+1\leqslant a+1$，故 $f(x)$ 的定义域为 $[1,a+1]$。
【例2】已知 $f(x)=e^{x^2}$，$f[\varphi(x)]=1-x$，且 $\varphi(x)\geqslant0$，求 $\varphi(x)$ 及其定义域。
【解】由 $f(x)=e^{x^2}$，$f[\varphi(x)]=1-x$，知 $e^{\varphi^2(x)}=1-x$，$(x\leqslant0)$；$\varphi^2(x)=\ln(1-x)$，$(x\leqslant0)$；$\varphi(x)=\sqrt{\ln(1-x)}$。$(x\leqslant0)$
【例3】设 $f(x)=\begin{cases}0,&x<0,\\1,&x\geqslant0,\end{cases}$ $g(x)=\begin{cases}2-x^2,&|x|<1,\\|x|-2,&|x|\geqslant1.\end{cases}$
试求 $f[g(x)]$，$g[f(x)]$。
【解】当 $|x|<1$ 时，$g(x)=2-x^2>0$，则 $f[g(x)]=1$；
当 $1\leqslant|x|<2$ 时，$g(x)=|x|-2<0$，则 $f[g(x)]=0$；` },
      { p: 11, md: R`当 $|x|\geqslant2$ 时，$g(x)=|x|-2\geqslant0$，则 $f[g(x)]=1$；
故 $f[g(x)]=\begin{cases}0,&1\leqslant|x|<2,\\1,&|x|<1\text{ 或 }|x|\geqslant2.\end{cases}$
当 $x<0$ 时，$f(x)=0$，$|0|<1$，则 $g[f(x)]=2-0^2=2$；
当 $x\geqslant0$ 时，$f(x)=1$，$|1|=1$，则 $g[f(x)]=|1|-2=-1$。
故 $g[f(x)]=\begin{cases}2,&x<0,\\-1,&x\geqslant0.\end{cases}$
##### 题型二 函数性态
【例1】已知函数 $f(x)=\frac{\int_0^x\ln(1+t^2)dt}{x^{\alpha}}$ 在 $(0,+\infty)$ 上有界，则 $\alpha$ 的取值范围应为
(A) $(0,+\infty)$。 (B) $(0,3]$。 (C) $(0,2)$。 (D) $(1,3]$。
【分析】由于 $f(x)$ 在 $(0,+\infty)$ 上连续，所以，只要 $\lim\limits_{x\to0^+}f(x)$ 和 $\lim\limits_{x\to+\infty}f(x)$ 都存在，则 $f(x)$ 在 $(0,+\infty)$ 上必有界。
【解】由本题选项可知，只需讨论 $\alpha>0$，此时
$\lim\limits_{x\to0^+}\frac{\int_0^x\ln(1+t^2)dt}{x^{\alpha}}=\lim\limits_{x\to0^+}\frac{\ln(1+x^2)}{\alpha x^{\alpha-1}}=\lim\limits_{x\to0^+}\frac{x^2}{\alpha x^{\alpha-1}}$。$(\ln(1+x^2)\sim x^2)$
当 $\alpha-1\leqslant2$，即 $\alpha\leqslant3$ 时上式极限存在；当 $\alpha>3$ 时，$\lim\limits_{x\to0^+}\frac{\int_0^x\ln(1+t^2)dt}{x^{\alpha}}=\infty$，$f(x)$ 在 $(0,+\infty)$ 上无界。
又 $\lim\limits_{x\to+\infty}\frac{\int_0^x\ln(1+t^2)dt}{x^{\alpha}}=\lim\limits_{x\to+\infty}\frac{\ln(1+x^2)}{\alpha x^{\alpha-1}}$。
当 $\alpha-1>0$ 时，即 $\alpha>1$ 时上式极限存在且为零；
当 $\alpha\leqslant1$ 时，$\lim\limits_{x\to+\infty}\frac{\int_0^x\ln(1+t^2)dt}{x^{\alpha}}=\infty$，$f(x)$ 在 $(0,+\infty)$ 上无界。
因此，当 $1<\alpha\leqslant3$ 时，$f(x)$ 在 $(0,+\infty)$ 上必有界，故应选 (D)。
【例2】以下四个命题中正确的是
(A) 若 $f'(x)$ 在 $(0,1)$ 内连续，则 $f(x)$ 在 $(0,1)$ 内有界。
(B) 若 $f(x)$ 在 $(0,1)$ 内连续，则 $f(x)$ 在 $(0,1)$ 内有界。
(C) 若 $f'(x)$ 在 $(0,1)$ 内有界，则 $f(x)$ 在 $(0,1)$ 内有界。
(D) 若 $f(x)$ 在 $(0,1)$ 内有界，则 $f'(x)$ 在 $(0,1)$ 内有界。
【解1】直接法
由于 $f'(x)$ 在有限区间 $(0,1)$ 内有界，则 $f(x)$ 在 $(0,1)$ 内有界，故选 (C)。
【解2】排除法
令 $f(x)=\frac{1}{x}$，则 $f'(x)=-\frac{1}{x^2}$，显然 $f'(x)$ 和 $f(x)$ 都在 $(0,1)$ 内连续，但 $f(x)$ 在 $(0,1)$ 内无界，则 (A)、(B) 都不正确。` },
      { p: 12, md: R`令 $f(x)=\sqrt{x}$，显然 $f(x)$ 在 $(0,1)$ 内有界，但 $f'(x)=\frac{1}{2\sqrt{x}}$ 在 $(0,1)$ 内无界，则 (D) 不正确。故应选 (C)。
【例3】设函数 $f(x)$ 连续，且 $f'(0)>0$，则存在 $\delta>0$，使得
(A) $f(x)$ 在 $(0,\delta)$ 内单调增加。
(B) $f(x)$ 在 $(0,\delta)$ 内单调减少。
(C) 对任意的 $x\in(0,\delta)$ 有 $f(x)>f(0)$。
(D) 对任意的 $x\in(-\delta,0)$ 有 $f(x)>f(0)$。
【解】本题要用到一个常用的结论：
若 $f'(x_0)>0$，则存在 $\delta>0$，
当 $x\in(x_0-\delta,x_0)$ 时，$f(x)<f(x_0)$；
当 $x\in(x_0,x_0+\delta)$ 时，$f(x)>f(x_0)$。
若 $f'(x_0)<0$ 有相应的结论。
以上结论可利用导数定义和极限的保号性证明。
由以上结论知 (C) 正确。
【注】本题选 (A) 是一种典型的错误，原因是由 $f'(x_0)>0$，得不到一定存在 $x_0$ 的某邻域，在此邻域内 $f(x)$ 单调增。反例如下：
令 $f(x)=\begin{cases}x+2x^2\sin\frac{1}{x},&x\neq0,\\0,&x=0.\end{cases}$
显然 $f'(0)=\lim\limits_{x\to0}\frac{x+2x^2\sin\frac{1}{x}}{x}=1>0$，但 $f(x)$ 在 $x=0$ 的任何邻域内不单调增。
事实上，当 $x\neq0$ 时，$f'(x)=1+4x\sin\frac{1}{x}-2\cos\frac{1}{x}$。
取 $x_n=\frac{1}{2n\pi}$，则 $f'(x_n)=1-2=-1<0$。
由于 $\lim\limits_{n\to\infty}x_n=0$，故以上的点 $x_n$ 在 $x=0$ 的任何邻域内都存在，即在 $x=0$ 的任何邻域内都存在导数为负的点，从而 $f(x)$ 在 $x=0$ 的任何邻域内都不单调增。
【例4】设函数 $f(x)$ 在 $(-\infty,+\infty)$ 内连续，且 $F(x)=\int_0^x(x-2t)f(t)dt$。试证：
(1) 若 $f(x)$ 为偶函数，则 $F(x)$ 也是偶函数；
(2) 若 $f(x)$ 单调不增，则 $F(x)$ 单调不减。
【证明】(1)【证一】由题设知 $F(-x)=\int_0^{-x}(-x-2t)f(t)dt$。
令 $t=-u$，并由于 $f(-x)=f(x)$，所以
$F(-x)=-\int_0^x(-x+2u)f(-u)du=\int_0^x(x-2u)f(u)du=F(x)$，
即 $F(x)$ 为偶函数。
【证二】$F(x)=\int_0^x(x-2t)f(t)dt=x\int_0^x f(t)dt-2\int_0^x tf(t)dt$` }
    ],
    quiz: [
      { q: R`函数概念的两个基本要素是`, options: [R`定义域与值域`, R`定义域与对应规则`, R`对应规则与值域`, R`奇偶性与周期性`], answer: 1, explain: R`定义域与对应规则完全相同的两个函数就是同一函数。` },
      { q: R`设 $f(x+1)$ 的定义域为 $[0,a]$（$a>0$），则 $f(x)$ 的定义域为`, options: [R`$[-1,a-1]$`, R`$[1,a+1]$`, R`$[a,a+1]$`, R`$[a-1,a]$`], answer: 1, explain: R`$0\leqslant x\leqslant a\Rightarrow 1\leqslant x+1\leqslant a+1$。` },
      { q: R`设 $f(x)$ 在区间 $I$ 上可导，则 $f'(x)\geqslant0$ 表明 $f(x)$ 在 $I$ 上`, options: [R`单调增`, R`单调不减`, R`单调减`, R`无法判断`], answer: 1, explain: R`$f'(x)>0$ 单调增；$f'(x)\geqslant0$ 只能得单调不减。` },
      { q: R`奇函数 $y=f(x)$ 在 $x=0$ 处有定义，则 $f(0)=$`, options: [R`$0$`, R`$1$`, R`$-1$`, R`不确定`], answer: 0, explain: R`奇函数图形关于原点对称，故 $f(0)=0$。` },
      { q: R`设 $f(x)$ 连续且为奇函数，则 $\displaystyle\int_0^x f(t)\,dt$ 是`, options: [R`奇函数`, R`偶函数`, R`周期函数`, R`非奇非偶函数`], answer: 1, explain: R`连续奇函数的原函数为偶函数。` },
      { q: R`若 $f(x)$ 以 $T$ 为周期，则 $f(ax+b)$（$a\neq0$）的周期为`, options: [R`$T$`, R`$|a|T$`, R`$\dfrac{T}{|a|}$`, R`$T+|a|$`], answer: 2, explain: R`$f\left(a\left(x+\tfrac{T}{|a|}\right)+b\right)=f(ax+b)$。` },
      { q: R`以下命题中正确的是`, options: [R`若 $f'(x)$ 在 $(0,1)$ 内连续，则 $f(x)$ 在 $(0,1)$ 内有界`, R`若 $f(x)$ 在 $(0,1)$ 内连续，则 $f(x)$ 在 $(0,1)$ 内有界`, R`若 $f'(x)$ 在 $(0,1)$ 内有界，则 $f(x)$ 在 $(0,1)$ 内有界`, R`若 $f(x)$ 在 $(0,1)$ 内有界，则 $f'(x)$ 在 $(0,1)$ 内有界`], answer: 2, explain: R`$f'(x)$ 在有限区间有界 $\Rightarrow f(x)$ 有界。` },
      { q: R`设 $f(x)=e^{x^2}$，$f[\varphi(x)]=1-x$ 且 $\varphi(x)\geqslant0$，则 $\varphi(x)=$`, options: [R`$\sqrt{\ln(1-x)}$`, R`$\ln(1-x)$`, R`$1-x$`, R`$\sqrt{1-x}$`], answer: 0, explain: R`$e^{\varphi^2(x)}=1-x\Rightarrow\varphi^2(x)=\ln(1-x)$，取正根，$x\leqslant0$。` },
      { q: R`设 $f(x)$ 连续且 $f'(0)>0$，则存在 $\delta>0$ 使得`, options: [R`$f(x)$ 在 $(0,\delta)$ 内单调增加`, R`$f(x)$ 在 $(0,\delta)$ 内单调减少`, R`对任意 $x\in(0,\delta)$ 有 $f(x)>f(0)$`, R`对任意 $x\in(-\delta,0)$ 有 $f(x)>f(0)$`], answer: 2, explain: R`由 $f'(0)>0$ 与保号性，右邻域内 $f(x)>f(0)$；但不能推出邻域内单调。` }
    ]
  };
})();
