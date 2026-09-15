window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["gs01_s0"] = {
    id: "gs01_s0",
    ch: "第一章 函数 极限 连续",
    title: "第一节 函数",
    book: "武忠祥《高等数学辅导讲义》",
    pages: [8, 12],
    img: "assets/img/gaoshu",
    blocks: [
      { t: "h", x: "一、函数的概念" },
      { t: "p", x: R`设 $x$ 和 $y$ 是两个变量，$D$ 是一个给定的数集。如果对于每个数 $x\in D$，变量 $y$ 按照一定的法则总有一个确定的数值与之对应，则称 $y$ 是 $x$ 的函数，记为 $y=f(x)$。常称 $x$ 为自变量，$y$ 为因变量，$D$ 为函数的定义域。` },
      { t: "note", x: R`【注】函数概念有两个基本要素：定义域、对应规则（或称依赖关系）。当两个函数的定义域与对应规则完全相同时，它们就是同一函数。` },

      { t: "h", x: "二、函数的性态" },
      { t: "h2", x: "1. 单调性" },
      { t: "p", x: R`定义：设函数 $y=f(x)$ 在某区间 $I$ 上有定义。如果对于区间 $I$ 上任意两点 $x_1,x_2$，当 $x_1<x_2$ 时恒有 $f(x_1)<f(x_2)$（或 $f(x_1)>f(x_2)$），则称 $f(x)$ 在 $I$ 上单调增加（或单调减少）。` },
      { t: "p", x: R`如果恒有 $f(x_1)\leqslant f(x_2)$（或 $f(x_1)\geqslant f(x_2)$），则称 $f(x)$ 在 $I$ 上单调不减（或单调不增）。` },
      { t: "p", x: R`判定：(1) 利用定义；(2) 利用导数。设 $f(x)$ 在区间 $I$ 上可导，则` },
      { t: "fml", x: R`$$f'(x)>0\ (<0)\ \Rightarrow\ f(x)\ \text{单调增（单调减）}$$` },
      { t: "fml", x: R`$$f'(x)\geqslant 0\ (\leqslant 0)\ \Rightarrow\ f(x)\ \text{单调不减（单调不增）}$$` },

      { t: "h2", x: "2. 奇偶性" },
      { t: "p", x: R`定义：设 $y=f(x)$ 的定义域 $D$ 关于原点对称。若对任一 $x\in D$ 恒有 $f(-x)=f(x)$，则称 $f(x)$ 为偶函数；若恒有 $f(-x)=-f(x)$，则称 $f(x)$ 为奇函数。` },
      { t: "note", x: R`【注】(1) $\sin x,\ \tan x,\ \arcsin x,\ \arctan x,\ \ln\dfrac{1-x}{1+x},\ \ln\left(x+\sqrt{1+x^2}\right),\ \dfrac{e^x-1}{e^x+1}$ 都是奇函数；$x^2,\ |x|,\ \cos x,\ f(x)+f(-x)$ 都是偶函数。` },
      { t: "note", x: R`【注】(2) 奇函数的图形关于原点对称，且若 $f(x)$ 在 $x=0$ 处有定义，则 $f(0)=0$；偶函数的图形关于 $y$ 轴对称。` },
      { t: "p", x: R`判定：(1) 利用定义；(2) 设 $f(x)$ 可导，则 $f(x)$ 为奇函数 $\Rightarrow f'(x)$ 为偶函数，$f(x)$ 为偶函数 $\Rightarrow f'(x)$ 为奇函数；(3) 连续的奇函数其原函数都是偶函数，连续的偶函数其原函数中有唯一一个是奇函数。` },
      { t: "note", x: R`【注】设 $f(x)$ 连续：(1) 若 $f(x)$ 为奇函数，则 $\displaystyle\int_0^x f(t)\,dt$ 为偶函数；(2) 若 $f(x)$ 为偶函数，则 $\displaystyle\int_0^x f(t)\,dt$ 为奇函数。` },

      { t: "h2", x: "3. 周期性" },
      { t: "p", x: R`定义：若存在实数 $T>0$，对任意 $x$ 恒有 $f(x+T)=f(x)$，则称 $y=f(x)$ 为周期函数，使上式成立的最小正数 $T$ 称为最小正周期（简称周期）。` },
      { t: "note", x: R`【注】(1) $\sin x,\cos x$ 以 $2\pi$ 为周期，$\sin 2x,\ |\sin x|$ 以 $\pi$ 为周期；(2) 若 $f(x)$ 以 $T$ 为周期，则 $f(ax+b)$ 以 $\dfrac{T}{|a|}\ (a\neq0)$ 为周期。` },
      { t: "p", x: R`判定：(1) 利用定义；(2) 可导的周期函数其导函数仍为周期函数；(3) 周期函数的原函数不一定是周期函数（如 $1+\cos x$）。` },
      { t: "note", x: R`【注】设 $f(x)$ 连续且以 $T$ 为周期，则 $F(x)=\displaystyle\int_0^x f(t)\,dt$ 以 $T$ 为周期 $\Leftrightarrow \displaystyle\int_0^T f(x)\,dx=0$。` },

      { t: "h2", x: "4. 有界性" },
      { t: "p", x: R`定义：若 $\exists M>0$，$\forall x\in I$ 有 $|f(x)|\leqslant M$，则称 $f(x)$ 在 $I$ 上有界。` },
      { t: "note", x: R`【注】$|\sin x|\leqslant1,\ |\cos x|\leqslant1,\ |\arcsin x|\leqslant\dfrac{\pi}{2},\ |\arctan x|<\dfrac{\pi}{2},\ |\arccos x|\leqslant\pi$。` },
      { t: "p", x: R`判定：(1) 利用定义；(2) $f(x)$ 在 $[a,b]$ 上连续 $\Rightarrow f(x)$ 在 $[a,b]$ 上有界；(3) $f(x)$ 在 $(a,b)$ 上连续且 $f(a^+),f(b^-)$ 存在 $\Rightarrow f(x)$ 在 $(a,b)$ 上有界；(4) $f'(x)$ 在有限区间 $I$ 上有界 $\Rightarrow f(x)$ 在 $I$ 上有界。` },

      { t: "h", x: "三、常见函数" },
      { t: "h2", x: "1. 复合函数" },
      { t: "p", x: R`设 $y=f(u)$ 的定义域为 $D_f$，$u=g(x)$ 的定义域为 $D_g$、值域为 $R_g$，若 $D_f\cap R_g\neq\varnothing$，则称 $y=f[g(x)]$ 为复合函数，其定义域为 $\{x\mid x\in D_g,\ g(x)\in D_f\}$。` },
      { t: "h2", x: "2. 反函数" },
      { t: "p", x: R`设 $y=f(x)$ 的定义域为 $D$、值域为 $R$。若对任意 $y\in R$ 有唯一确定的 $x\in D$ 使 $y=f(x)$，则记 $x=f^{-1}(y)$，称为 $y=f(x)$ 的反函数。` },
      { t: "note", x: R`【注】(1) $y=f(x)$ 与 $x=f^{-1}(y)$ 的图形重合，$y=f(x)$ 与 $y=f^{-1}(x)$ 的图形关于直线 $y=x$ 对称；(2) $f^{-1}[f(x)]=x,\ f[f^{-1}(x)]=x$。` },
      { t: "h2", x: "3. 基本初等函数" },
      { t: "p", x: R`五类：幂函数 $y=x^{\mu}$；指数函数 $y=a^x\ (a>0,a\neq1)$；对数函数 $y=\log_a x\ (a>0,a\neq1)$；三角函数 $\sin x,\cos x,\tan x,\cot x,\sec x,\csc x$；反三角函数 $\arcsin x,\arccos x,\arctan x$。` },
      { t: "h2", x: "4. 初等函数" },
      { t: "p", x: R`由常数和基本初等函数经过有限次四则运算和有限次复合所构成，并能用一个式子表示的函数，称为初等函数。` },

      { t: "h", x: "四、常考题型" },
      { t: "h2", x: "题型一　复合函数" },
      { t: "ex", q: R`【例1】已知 $f(x+1)$ 的定义域为 $[0,a]$（$a>0$），则 $f(x)$ 的定义域为 (A) $[-1,a-1]$　(B) $[1,a+1]$　(C) $[a,a+1]$　(D) $[a-1,a]$`,
        sol: R`由 $f(x+1)$ 的定义域为 $[0,a]$ 知 $0\leqslant x\leqslant a$，故 $1\leqslant x+1\leqslant a+1$，即 $f(x)$ 的定义域为 $[1,a+1]$，选 (B)。` },
      { t: "ex", q: R`【例2】已知 $f(x)=e^{x^2}$，$f[\varphi(x)]=1-x$，且 $\varphi(x)\geqslant0$，求 $\varphi(x)$ 及其定义域。`,
        sol: R`由 $f[\varphi(x)]=e^{\varphi^2(x)}=1-x$，得 $\varphi^2(x)=\ln(1-x)$。因 $1-x>0$ 且 $\varphi(x)\geqslant0$，故 $x\leqslant0$，$\varphi(x)=\sqrt{\ln(1-x)}\ (x\leqslant0)$。` },
      { t: "ex", q: R`【例3】设 $f(x)=\begin{cases}0,&x<0\\1,&x\geqslant0\end{cases}$，$g(x)=\begin{cases}2-x^2,&|x|<1\\|x|-2,&|x|\geqslant1\end{cases}$，求 $f[g(x)]$、$g[f(x)]$。`,
        sol: R`当 $|x|<1$ 时 $g(x)=2-x^2>0$，$f[g(x)]=1$；当 $1\leqslant|x|<2$ 时 $g(x)=|x|-2<0$，$f[g(x)]=0$；当 $|x|\geqslant2$ 时 $g(x)=|x|-2\geqslant0$，$f[g(x)]=1$。故 $f[g(x)]=\begin{cases}0,&1\leqslant|x|<2\\1,&|x|<1\ \text{或}\ |x|\geqslant2\end{cases}$。又当 $x<0$ 时 $f(x)=0$，$g[f(x)]=2-0=2$；当 $x\geqslant0$ 时 $f(x)=1$，$g[f(x)]=|1|-2=-1$。故 $g[f(x)]=\begin{cases}2,&x<0\\-1,&x\geqslant0\end{cases}$。` },
      { t: "h2", x: "题型二　函数性态" },
      { t: "ex", q: R`【例1】已知函数 $f(x)=\dfrac{\displaystyle\int_0^x\ln(1+t^2)\,dt}{x^{\alpha}}$ 在 $(0,+\infty)$ 上有界，则 $\alpha$ 的取值范围为 (A) $(0,+\infty)$　(B) $(0,3]$　(C) $(0,2)$　(D) $(1,3]$`,
        sol: R`只需讨论 $\alpha>0$。$\displaystyle\lim_{x\to0^+}\frac{\int_0^x\ln(1+t^2)\,dt}{x^{\alpha}}=\lim_{x\to0^+}\frac{\ln(1+x^2)}{\alpha x^{\alpha-1}}=\lim_{x\to0^+}\frac{x^2}{\alpha x^{\alpha-1}}$，当 $\alpha-1\leqslant2$ 即 $\alpha\leqslant3$ 时极限存在。又 $\displaystyle\lim_{x\to+\infty}\frac{\int_0^x\ln(1+t^2)\,dt}{x^{\alpha}}=\lim_{x\to+\infty}\frac{\ln(1+x^2)}{\alpha x^{\alpha-1}}$，当 $\alpha>1$ 时极限为 $0$。故当 $1<\alpha\leqslant3$ 时 $f(x)$ 在 $(0,+\infty)$ 上有界，选 (D)。` },
      { t: "ex", q: R`【例2】以下命题中正确的是 (A) 若 $f'(x)$ 在 $(0,1)$ 内连续，则 $f(x)$ 在 $(0,1)$ 内有界　(B) 若 $f(x)$ 在 $(0,1)$ 内连续，则 $f(x)$ 在 $(0,1)$ 内有界　(C) 若 $f'(x)$ 在 $(0,1)$ 内有界，则 $f(x)$ 在 $(0,1)$ 内有界　(D) 若 $f(x)$ 在 $(0,1)$ 内有界，则 $f'(x)$ 在 $(0,1)$ 内有界`,
        sol: R`直接法：$f'(x)$ 在有限区间 $(0,1)$ 内有界，则 $f(x)$ 在 $(0,1)$ 内有界，选 (C)。排除法：令 $f(x)=\dfrac1x$，$f'(x)=-\dfrac1{x^2}$，二者在 $(0,1)$ 内连续但 $f(x)$ 无界，故 (A)(B) 错；令 $f(x)=\sqrt{x}$ 在 $(0,1)$ 内有界但 $f'(x)=\dfrac1{2\sqrt{x}}$ 无界，故 (D) 错。` },
      { t: "ex", q: R`【例3】设 $f(x)$ 连续，且 $f'(0)>0$，则存在 $\delta>0$，使得 (A) $f(x)$ 在 $(0,\delta)$ 内单调增加　(B) $f(x)$ 在 $(0,\delta)$ 内单调减少　(C) 对任意 $x\in(0,\delta)$ 有 $f(x)>f(0)$　(D) 对任意 $x\in(-\delta,0)$ 有 $f(x)>f(0)$`,
        sol: R`常用结论：若 $f'(x_0)>0$，则存在 $\delta>0$，当 $x\in(x_0-\delta,x_0)$ 时 $f(x)<f(x_0)$，当 $x\in(x_0,x_0+\delta)$ 时 $f(x)>f(x_0)$（$f'(x_0)<0$ 有相应结论）。故 (C) 正确。注意由 $f'(x_0)>0$ 推不出邻域内单调增，反例 $f(x)=x+2x^2\sin\dfrac1x\ (x\neq0),\ f(0)=0$，$f'(0)=1>0$，但在 $0$ 的任何邻域内都不单调增。` },
      { t: "ex", q: R`【例4】设 $f(x)$ 在 $(-\infty,+\infty)$ 内连续，且 $F(x)=\displaystyle\int_0^x(x-2t)f(t)\,dt$。证明：(1) 若 $f(x)$ 为偶函数，则 $F(x)$ 也是偶函数；(2) 若 $f(x)$ 单调不减，则 $F(x)$ 单调不减。`,
        sol: R`(1) $F(-x)=\displaystyle\int_0^{-x}(-x-2t)f(t)\,dt$，令 $t=-u$，由 $f(-u)=f(u)$ 得 $F(-x)=-\displaystyle\int_0^{x}(-x+2u)f(u)\,du=\int_0^{x}(x-2u)f(u)\,du=F(x)$，即 $F(x)$ 为偶函数。(2) 证明见讲义下一页（可先写出 $F(x)=x\displaystyle\int_0^x f(t)\,dt-2\int_0^x tf(t)\,dt$ 再对 $F'(x)$ 讨论）。` }
    ],
    quiz: [
      { q: R`函数概念的两个基本要素是`, options: [R`定义域与值域`, R`定义域与对应规则`, R`对应规则与值域`, R`奇偶性与周期性`], answer: 1, explain: R`定义域与对应规则完全相同的两个函数就是同一函数。` },
      { q: R`设 $f(x+1)$ 的定义域为 $[0,a]$（$a>0$），则 $f(x)$ 的定义域为`, options: [R`$[-1,a-1]$`, R`$[1,a+1]$`, R`$[a,a+1]$`, R`$[a-1,a]$`], answer: 1, explain: R`$0\leqslant x\leqslant a\Rightarrow 1\leqslant x+1\leqslant a+1$。` },
      { q: R`设 $f(x)$ 在区间 $I$ 上可导，则 $f'(x)\geqslant0$ 表明 $f(x)$ 在 $I$ 上`, options: [R`单调增`, R`单调不减`, R`单调减`, R`无法判断`], answer: 1, explain: R`$f'(x)>0$ 单调增；$f'(x)\geqslant0$ 只能得单调不减。` },
      { q: R`奇函数 $y=f(x)$ 在 $x=0$ 处有定义，则 $f(0)=$`, options: [R`$0$`, R`$1$`, R`$-1$`, R`不确定`], answer: 0, explain: R`奇函数图形关于原点对称，故 $f(0)=0$。` },
      { q: R`设 $f(x)$ 连续且为奇函数，则 $\displaystyle\int_0^x f(t)\,dt$ 是`, options: [R`奇函数`, R`偶函数`, R`周期函数`, R`非奇非偶函数`], answer: 1, explain: R`连续奇函数的原函数为偶函数（反之连续偶函数的原函数中有唯一一个是奇函数）。` },
      { q: R`若 $f(x)$ 以 $T$ 为周期，则 $f(ax+b)$（$a\neq0$）的周期为`, options: [R`$T$`, R`$|a|T$`, R`$\dfrac{T}{|a|}$`, R`$T+|a|$`], answer: 2, explain: R`$f(a(x+\tfrac{T}{|a|})+b)=f(ax+b)$。` },
      { q: R`以下命题中正确的是`, options: [R`若 $f'(x)$ 在 $(0,1)$ 内连续，则 $f(x)$ 在 $(0,1)$ 内有界`, R`若 $f(x)$ 在 $(0,1)$ 内连续，则 $f(x)$ 在 $(0,1)$ 内有界`, R`若 $f'(x)$ 在 $(0,1)$ 内有界，则 $f(x)$ 在 $(0,1)$ 内有界`, R`若 $f(x)$ 在 $(0,1)$ 内有界，则 $f'(x)$ 在 $(0,1)$ 内有界`], answer: 2, explain: R`$f'(x)$ 在有限区间有界 $\Rightarrow f(x)$ 有界；反例 $1/x$、$\sqrt x$ 可排除其余选项。` },
      { q: R`设 $f(x)=e^{x^2}$，$f[\varphi(x)]=1-x$ 且 $\varphi(x)\geqslant0$，则 $\varphi(x)=$`, options: [R`$\sqrt{\ln(1-x)}$`, R`$\ln(1-x)$`, R`$1-x$`, R`$\sqrt{1-x}$`], answer: 0, explain: R`$e^{\varphi^2(x)}=1-x\Rightarrow\varphi^2(x)=\ln(1-x)$，因 $\varphi\geqslant0$ 取正根，定义域 $x\leqslant0$。` },
      { q: R`设 $f(x)$ 连续且 $f'(0)>0$，则存在 $\delta>0$ 使得`, options: [R`$f(x)$ 在 $(0,\delta)$ 内单调增加`, R`$f(x)$ 在 $(0,\delta)$ 内单调减少`, R`对任意 $x\in(0,\delta)$ 有 $f(x)>f(0)$`, R`对任意 $x\in(-\delta,0)$ 有 $f(x)>f(0)$`], answer: 2, explain: R`由 $f'(0)>0$ 与极限保号性，在 $0$ 的右邻域内 $f(x)>f(0)$；但不能推出邻域内单调。` }
    ]
  };
})();
