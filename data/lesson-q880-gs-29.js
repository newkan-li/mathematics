window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q880_s28"] = {
    id: "q880_s28",
    ch: "880题 · 高数 · 第四章 多元函数微分学及其应用",
    title: "基础题·选择题",
    probTitle: "第四章 基础题 · 选择题（含原书解析）",
    book: "李林《精讲精练 880 题（数学二）》2026",
    problems: [
      { n: "(1)", q: R`设 $f(x,y)=\arcsin\sqrt{x^2+y^4}$，则下列选项正确的是（ ）。
(A) $f'_x(0,0)$ 存在，$f'_y(0,0)$ 存在
(B) $f'_x(0,0)$ 不存在，$f'_y(0,0)$ 存在
(C) $f'_x(0,0)$ 不存在，$f'_y(0,0)$ 不存在
(D) $f'_x(0,0)$ 存在，$f'_y(0,0)$ 不存在`, a: R`(B)`, sol: R`【解】$f'_x(0,0)=\lim\limits_{x\to0}\frac{\arcsin|x|}x=\lim\limits_{x\to0}\frac{|x|}x$ 不存在；$f'_y(0,0)=\lim\limits_{y\to0}\frac{\arcsin y^2}y=\lim\limits_{y\to0}\frac{y^2}y=0$ 存在。选项 B 正确。` },
      { n: "(2)", q: R`设 $f'_x(x_0,y_0),f'_y(x_0,y_0)$ 均存在，则下列选项正确的是（ ）。
(A) $\lim\limits_{\substack{x\to x_0\\y\to y_0}}f(x,y)$ 存在
(B) $f(x,y)$ 在 $(x_0,y_0)$ 处连续
(C) $\lim\limits_{x\to x_0}f(x,y_0)$ 存在
(D) $f(x,y)$ 在 $\mathring U(x_0,y_0)$ 内有定义`, a: R`(C)`, sol: R`【解】由 $f'_x(x_0,y_0)=\lim\limits_{x\to x_0}\frac{f(x,y_0)-f(x_0,y_0)}{x-x_0}$ 存在，知 $\lim\limits_{x\to x_0}f(x,y_0)=f(x_0,y_0)$ 存在，选项 C 正确。
偏导存在不一定连续（排除 B），二重极限也不一定存在（如 $f=\frac{xy}{x^2+y^2}$，排除 A）；偏导存在只保证沿坐标方向有定义，不能保证整个去心邻域有定义（排除 D）。` },
      { n: "(3)", q: R`设 $f(x,y)=\begin{cases}\dfrac{x^2+y^2}{x^2+y^4}\sin(xy^2),&x^2+y^2\neq0,\\0,&x^2+y^2=0,\end{cases}$ 则正确的是（ ）。
(A) $f''_{xy}(0,0)$ 存在，$f''_{yx}(0,0)$ 存在
(B) $f''_{xy}(0,0)$ 不存在，$f''_{yx}(0,0)$ 存在
(C) $f''_{xy}(0,0)$ 存在，$f''_{yx}(0,0)$ 不存在
(D) $f''_{xy}(0,0)$ 不存在，$f''_{yx}(0,0)$ 不存在`, a: R`(B)`, sol: R`【解】$f'_x(0,0)=f'_y(0,0)=0$。由
$$f'_x(x,y)=\frac{2x(y^4-y^2)}{(x^2+y^4)^2}\sin(xy^2)+\frac{(x^2+y^2)y^2}{x^2+y^4}\cos(xy^2),$$
得 $f''_{xy}(0,0)=\lim\limits_{y\to0}\frac{f'_x(0,y)-f'_x(0,0)}y=\lim\limits_{y\to0}\frac1y$ 不存在；由
$$f'_y(x,y)=\frac{2y(x^2+y^4)-(x^2+y^2)4y^3}{(x^2+y^4)^2}\sin(xy^2)+\frac{(x^2+y^2)2xy}{x^2+y^4}\cos(xy^2),$$
得 $f''_{yx}(0,0)=\lim\limits_{x\to0}\frac{f'_y(x,0)-f'_y(0,0)}x=0$ 存在。选项 B 正确。` },
      { n: "(4)", q: R`设 $f(x,y)=\sqrt{|xy|}$，则（ ）。
(A) 当 $x>0$ 时，$f'_x(x,y)=-\frac12\sqrt{\left|\frac yx\right|}$
(B) 当 $x<0$ 时，$f'_x(x,y)=\frac12\sqrt{\left|\frac yx\right|}$
(C) 当 $y\neq0$ 时，$f'_x(0,y)=0$
(D) 当 $y\neq0$ 时，$f'_x(0,y)$ 不存在`, a: R`(D)`, sol: R`【解】当 $y\neq0$ 时，$f'_x(0,y)=\lim\limits_{\Delta x\to0}\frac{\sqrt{|y\Delta x|}}{\Delta x}$ 不存在，选项 D 正确。
当 $x>0$ 时 $f'_x=\frac12\sqrt{\frac{|y|}x}$，当 $x<0$ 时 $f'_x=-\frac12\sqrt{\frac{|y|}x}$，排除 A、B。` },
      { n: "(5)", q: R`设方程 $xy-z\ln y+e^{xz}=1$，存在点 $(0,1,1)$ 的一个邻域，在此邻域内该方程（ ）。
(A) 可确定隐函数 $y=y(x,z)$ 和 $z=z(x,y)$
(B) 可确定隐函数 $x=x(y,z)$ 和 $z=z(x,y)$
(C) 可确定隐函数 $x=x(y,z)$ 和 $y=y(x,z)$
(D) 只能确定隐函数 $z=z(x,y)$`, a: R`(C)`, sol: R`【解】令 $F=xy-z\ln y+e^{xz}-1$，$F(0,1,1)=0$。$F'_x=y+ze^{xz}$，$F'_y=x-\frac zy$，$F'_z=-\ln y+xe^{xz}$，故 $F'_x(0,1,1)=2\neq0$，$F'_y(0,1,1)=-1\neq0$，$F'_z(0,1,1)=0$。由隐函数存在定理，可确定 $x=x(y,z)$ 和 $y=y(x,z)$，选项 C 正确。` },
      { n: "(6)", q: R`设可微函数 $f(x,y)$ 在点 $P(x_0,y_0)$ 处取得极大值，则（ ）。
(A) $f(x_0,y)$ 在 $y=y_0$ 处导数小于零
(B) $f(x_0,y)$ 在 $y=y_0$ 处导数大于零
(C) $f(x_0,y)$ 在 $y=y_0$ 处导数等于零
(D) $f(x_0,y)$ 在 $y=y_0$ 处导数不存在`, a: R`(C)`, sol: R`【解】由极值必要条件 $f'_x(x_0,y_0)=f'_y(x_0,y_0)=0$，即 $f(x_0,y)$ 在 $y=y_0$ 处导数等于零，选项 C 正确。` },
      { n: "(7)", q: R`设 $f(x,y)=e^{2x}(x+y^2+2y)$，则 $f(x,y)$ 在点 $P\left(\frac12,-1\right)$ 处（ ）。
(A) 取得极小值 $-\frac e2$
(B) 取得极大值 $-\frac e2$
(C) 取得极大值 $e$
(D) 不取得极值`, a: R`(A)`, sol: R`【解】由 $\begin{cases}f'_x=e^{2x}(2x+2y^2+4y+1)=0,\\f'_y=e^{2x}(2y+2)=0\end{cases}$ 得驻点 $P\left(\frac12,-1\right)$。$A=f''_{xx}(P)=2e$，$B=f''_{xy}(P)=0$，$C=f''_{yy}(P)=2e$，$AC-B^2=4e^2>0$，$A>0$，故 $f\left(\frac12,-1\right)=-\frac e2$ 为极小值，选项 A 正确。` },
      { n: "(8)", q: R`设 $f(x,y)=\frac{e^x}{x-y}$，则（ ）。
(A) $f'_x+f'_y=0$
(B) $f'_x-f'_y=0$
(C) $f'_x-f'_y=f$
(D) $f'_x+f'_y=f$`, a: R`(D)`, sol: R`【解】$f'_x=\frac{e^x(x-y)-e^x}{(x-y)^2}$，$f'_y=\frac{e^x}{(x-y)^2}$，故 $f'_x+f'_y=\frac{e^x}{x-y}=f$，选项 D 正确。` }
    ]
  };
})();
