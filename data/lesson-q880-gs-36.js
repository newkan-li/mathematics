window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q880_s35"] = {
    id: "q880_s35",
    ch: "880题 · 高数 · 第四章 多元函数微分学及其应用",
    title: "拓展题（本章完）",
    probTitle: "第四章 拓展题（含原书解析）",
    book: "李林《精讲精练 880 题（数学二）》2026",
    problems: [
      { n: "(1)", q: R`下列（ ）选项条件成立时，能够推出函数 $f(x,y)$ 在点 $(x_0,y_0)$ 处可微，且全微分 $df(x,y)|_{(x_0,y_0)}=0$。
(A) $f'_x(x_0,y_0)=f'_y(x_0,y_0)=0$
(B) $f(x,y)$ 在点 $(x_0,y_0)$ 处的全增量 $\Delta f=-\dfrac{\Delta x\Delta y}{\sqrt{(\Delta x)^2+(\Delta y)^2}}$
(C) $f(x,y)$ 在点 $(x_0,y_0)$ 处的全增量 $\Delta f=\dfrac{\sin[(\Delta x)^2+(\Delta y)^2]}{\sqrt{(\Delta x)^2+(\Delta y)^2}}$
(D) $f(x,y)$ 在点 $(x_0,y_0)$ 处的全增量 $\Delta f=[(\Delta x)^2+(\Delta y)^2]\sin\dfrac1{(\Delta x)^2+(\Delta y)^2}$`, a: R`(D)`, sol: R`【解】对 D：$f'_x(x_0,y_0)=\lim\limits_{\Delta x\to0}\frac1{\Delta x}(\Delta x)^2\sin\frac1{(\Delta x)^2}=0$，$f'_y(x_0,y_0)=0$，且 $\lim\limits_{\Delta x,\Delta y\to0}\frac{\Delta f-df}{\rho}=\lim[(\Delta x)^2+(\Delta y)^2]^{1/2}\sin\frac1{(\Delta x)^2+(\Delta y)^2}=0$，故可微且 $df=0$，D 正确。
对 A：偏导存在不能推出可微。对 B：$\lim\frac{\Delta x\Delta y}{(\Delta x)^2+(\Delta y)^2}$ 不存在，不可微。对 C：$f'_x(x_0,y_0)=\lim\limits_{\Delta x\to0}\frac{\Delta x}{|\Delta x|}$ 不存在，不可微。` },
      { n: "(2)", q: R`设 $f(x,y)$ 在点 $(0,0)$ 的某邻域内有定义，$f(0,0)=0$，且 $\lim\limits_{\substack{x\to0\\y\to0}}\frac{f(x,y)}{\sqrt{x^2+y^2}}=1+k$（$k$ 为常数）。证明：
(Ⅰ) $f(x,y)$ 在点 $(0,0)$ 处连续；
(Ⅱ) 当 $k\neq-1$ 时，$f(x,y)$ 在点 $(0,0)$ 处不可微；
(Ⅲ) 当 $k=-1$ 时，$f(x,y)$ 在点 $(0,0)$ 处可微。`, a: R`见证明`, sol: R`【证】由极限与无穷小关系，$f(x,y)=(1+k)\sqrt{x^2+y^2}+o(\rho)$，$\rho=\sqrt{x^2+y^2}$。
(Ⅰ) 取极限得 $\lim\limits_{(x,y)\to(0,0)}f(x,y)=0=f(0,0)$，故连续。
(Ⅱ) $k\neq-1$ 时 $f'_x(0,0)=\lim\limits_{x\to0}\left[(1+k)\frac{|x|}x+\frac{o(x)}x\right]$ 不存在，同理 $f'_y(0,0)$ 不存在，故不可微。
(Ⅲ) $k=-1$ 时 $f(x,y)=o(\rho)$，$f'_x(0,0)=f'_y(0,0)=0$，$\lim\frac{f(x,y)}{\sqrt{x^2+y^2}}=0$，故可微。` }
    ]
  };
})();
