window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q880_s31"] = {
    id: "q880_s31",
    ch: "880题 · 高数 · 第四章 多元函数微分学及其应用",
    title: "综合题·选择题",
    probTitle: "第四章 综合题 · 选择题（含原书解析）",
    book: "李林《精讲精练 880 题（数学二）》2026",
    problems: [
      { n: "(1)", q: R`设 $f(x,y)$ 在点 $(0,0)$ 处连续，且 $\lim\limits_{\substack{x\to0\\y\to0}}\frac{f(x,y)}{e^{x^2+y^2}-1}=1$，则（ ）。
(A) $f(x,y)$ 在点 $(0,0)$ 处取得极小值
(B) $f(x,y)$ 在点 $(0,0)$ 处取得极大值
(C) $f(x,y)$ 在点 $(0,0)$ 处不取得极值
(D) 不能确定 $f(x,y)$ 在点 $(0,0)$ 处是否取得极值`, a: R`(A)`, sol: R`【解】由极限为 1 知 $\lim\limits_{(x,y)\to(0,0)}f(x,y)=0=f(0,0)$。又由保号性，在 $(0,0)$ 的去心邻域内 $f(x,y)>0=f(0,0)$，故 $f$ 在 $(0,0)$ 处取得极小值，选项 A 正确。` },
      { n: "(2)", q: R`设 $f(x,y)$ 在点 $(0,0)$ 的某邻域内连续，且 $\lim\limits_{\substack{x\to0\\y\to0}}\frac{f(x,y)-f(0,0)}{|x|+y^4}=-1$，则 $f(x,y)$ 在点 $(0,0)$ 处（ ）。
(A) 取得极小值
(B) 取得极大值
(C) 不取得极值
(D) 无法确定是否取得极值`, a: R`(B)`, sol: R`【解】去心邻域内 $|x|+y^4>0$，由保号性 $f(x,y)-f(0,0)<0$，故 $f$ 在 $(0,0)$ 处取得极大值，选项 B 正确。` },
      { n: "(3)", q: R`设 $f(x,y)=\begin{cases}y\arctan\frac1{\sqrt{x^2+y^2}},&(x,y)\neq(0,0),\\0,&(x,y)=(0,0),\end{cases}$ 则 $f(x,y)$ 在点 $(0,0)$ 处（ ）。
(A) 连续但不可微
(B) 偏导数存在但不连续
(C) 可微
(D) 连续但偏导数不存在`, a: R`(C)`, sol: R`【解】由 $\arctan\frac1{\sqrt{x^2+y^2}}$ 有界知 $\lim\limits_{(x,y)\to(0,0)}f(x,y)=0=f(0,0)$，连续。$f'_x(0,0)=0$，$f'_y(0,0)=\lim\limits_{y\to0}\arctan\frac1{|y|}=\frac\pi2$。由 $\left|\frac y{\sqrt{x^2+y^2}}\right|\leqslant1$ 及 $\arctan\frac1{\sqrt{x^2+y^2}}-\frac\pi2\to0$ 知 $\lim\frac{\Delta f-df}\rho=0$，故可微，选项 C 正确。` },
      { n: "(4)", q: R`设函数 $f(x,y)=x+(y-1)\arcsin\sqrt{\frac{|x|}y}$，则在点 $(0,1)$ 处（ ）。
(A) $f'_x(0,1)=f'_y(0,1)=1$
(B) $df|_{(0,1)}=dy$
(C) $df|_{(0,1)}=dx$
(D) $df|_{(0,1)}$ 不存在`, a: R`(C)`, sol: R`【解】由左右导数均得 $f'_x(0,1)=1$，$f'_y(0,1)=0$。又 $\lim\frac{f(\Delta x,1+\Delta y)-f(0,1)-[\Delta x+0]}{\sqrt{\Delta x^2+\Delta y^2}}=\lim\frac{\arcsin\sqrt{\frac{|\Delta x|}{1+\Delta y}}\Delta y}{\sqrt{\Delta x^2+\Delta y^2}}=0$，故可微且 $df|_{(0,1)}=dx$，选项 C 正确。` },
      { n: "(5)", q: R`设 $f(x,y)$ 可微，对任意的 $x,y$，有 $\frac{\partial f(x,y)}{\partial x}>0,\frac{\partial f(x,y)}{\partial y}<0$，则使得 $f(x_1,y_1)<f(x_2,y_2)$ 成立的一个充分条件是（ ）。
(A) $x_1<x_2,y_1>y_2$
(B) $x_1>x_2,y_1>y_2$
(C) $x_1<x_2,y_1<y_2$
(D) $x_1>x_2,y_1<y_2$`, a: R`(A)`, sol: R`【解】$f$ 关于 $x$ 单调增、关于 $y$ 单调减。当 $x_1<x_2,y_1>y_2$ 时，$f(x_1,y_1)<f(x_2,y_1)<f(x_2,y_2)$，选项 A 正确。` },
      { n: "(6)", q: R`设 $F(x,y)$ 在点 $(x_0,y_0)$ 的某邻域内有二阶连续偏导数，且 $F(x_0,y_0)=0,F'_x(x_0,y_0)=0,F'_y(x_0,y_0)>0,F''_{xx}(x_0,y_0)<0$，则由方程 $F(x,y)=0$ 确定的隐函数 $y=y(x)$ 在 $x=x_0$ 处（ ）。
(A) 取得极小值
(B) 取得极大值
(C) 不取得极值
(D) 不能确定是否取得极值`, a: R`(A)`, sol: R`【解】由 $F'_x(x_0,y_0)=0$ 得 $\frac{dy}{dx}|_{x=x_0}=-\frac{F'_x}{F'_y}=0$，故 $x_0$ 为驻点。对 $F(x,y(x))=0$ 两次求导并代入 $(x_0,y_0)$ 得 $\frac{d^2y}{dx^2}|_{x_0}=-\frac{F''_{xx}}{F'_y}>0$，故 $y=y(x)$ 在 $x_0$ 处取得极小值，选项 A 正确。` },
      { n: "(7)", q: R`设 $f(x,y)$ 有一阶连续偏导数，且 $f(x,y)=1-x-y+o(\sqrt{(x-1)^2+y^2})$，$g(x,y)=f(x+y,xy)$，则全微分 $dg|_{(1,0)}=$（ ）。
(A) $-2dy$
(B) $-dx$
(C) $-dx-2dy$
(D) $dx-2dy$`, a: R`(C)`, sol: R`【解】由 $f(x,y)-f(1,0)=-(x-1)-y+o(\rho)$ 知 $f'_x(1,0)=-1,f'_y(1,0)=-1$。$g'_x=f'_1+f'_2y$，$g'_y=f'_1+f'_2x$，故 $g'_x(1,0)=f'_1(1,0)=-1$，$g'_y(1,0)=f'_1+f'_2=-2$，$dg|_{(1,0)}=-dx-2dy$，选项 C 正确。` }
    ]
  };
})();
