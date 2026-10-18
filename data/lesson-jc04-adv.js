window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["jc04_s9"] = {
    id: "jc04_s9",
    ch: "第五章 多元函数微分学",
    title: "零基础进阶题",
    probTitle: "第五章 多元函数微分学 零基础进阶题（含原书解析）",
    book: "李永乐《复习全书·基础篇 零基础进阶题》",
    pages: [18, 21],
    img: "assets/img/jcadv",
    problems: [
      { n: "1", q: R`函数 \(f(x,y)=\dfrac{\sqrt{4x-y^2}}{\ln(1-x^2-y^2)}\) 的定义域为 \(\underline{\qquad}\)，\(\lim\limits_{\substack{x\to\frac12\\y\to0}} f(x,y)=\underline{\qquad}\).`, a: "", sol: R`要使函数有意义，点 \((x,y)\) 应满足

\[
\begin{cases}
1-x^2-y^2>0,\\
1-x^2-y^2\neq 1,\\
4x-y^2\geqslant 0,
\end{cases}
\quad\text{即}\quad
\begin{cases}
0<x^2+y^2<1,\\
y^2\leqslant 4x.
\end{cases}
\]

定义域为 \(D_f=\{(x,y)\mid y^2\leqslant 4x,\ 0<x^2+y^2<1\}\)，

又 \(f(x,y)\) 为初等函数，点 \(\left(\frac{1}{2},0\right)\in D_f\)，因此 \(f(x,y)\) 在 \(\left(\frac{1}{2},0\right)\) 点处连续，

故
\[
\lim_{\substack{x\to\frac{1}{2}\\ y\to 0}}f(x,y)=f\left(\frac{1}{2},0\right)=\frac{\sqrt{2}}{\ln 3-2\ln 2}.
\]` },
      { n: "2", q: R`已知函数 \(f(x,y)=\sqrt{x^2+y^4}\)，则下列结论正确的是

(A)\(f'_x(0,0),f'_y(0,0)\) 均存在.　　(B)\(f'_x(0,0)\) 不存在，\(f'_y(0,0)\) 存在.

(C)\(f'_x(0,0)\) 存在，\(f'_y(0,0)\) 不存在.　　(D)\(f'_x(0,0),f'_y(0,0)\) 均不存在.`, a: "(B)", sol: R`固定变量 \(y=0\)，因为 \(f(x,0)=\sqrt{x^2+0^4}=|x|\) 在 \(x=0\) 处不可导，所以 \(f'_x(0,0)\) 不存在，

又因为 \(f(0,y)=\sqrt{0^2+y^4}=y^2\) 在 \(y=0\) 处可导，即 \(f'_y(0,0)\) 存在，故选(B).` },
      { n: "3", q: R`设
\[
f(x,y)=\begin{cases}
xy\sin\dfrac{1}{\sqrt{x^2+y^2}}, & (x,y)\ne(0,0),\\[6pt]
0, & (x,y)=(0,0),
\end{cases}
\]
则下列结论正确的是

(A)\(f(x,y)\) 在点 \((0,0)\) 处连续，但 \(f'_x(0,0),f'_y(0,0)\) 均不存在.

(B)\(f'_x(0,0),f'_y(0,0)\) 均存在，但 \(f(x,y)\) 在 \((0,0)\) 处不可微.

(C)\(f(x,y)\) 在 \((0,0)\) 处可微.

(D)\(f'_x(x,y),f'_y(x,y)\) 在点 \((0,0)\) 处均连续.`, a: "(C)", sol: R`由偏导数定义，有
\[
f'_x(0,0)=\lim_{\Delta x\to 0}\frac{f(0+\Delta x,0)-f(0,0)}{\Delta x}=\lim_{\Delta x\to 0}\frac{0}{\Delta x}=0,
\]
同理 \(f'_y(0,0)=0\).

当 \((x,y)\neq(0,0)\) 时，
\[
f'_x(x,y)=y\sin\frac{1}{\sqrt{x^2+y^2}}-\frac{x^2y}{(x^2+y^2)^{\frac{3}{2}}}\cos\frac{1}{\sqrt{x^2+y^2}}.
\]

令 \((x,y)\) 在第一象限内沿 \(y=x\) 趋于 \((0,0)\) 点，则
\[
\lim_{\substack{x\to 0^+\\ y\to 0^+}}f'_x(x,y)
=\lim_{\substack{x\to 0^+\\ y=x}}\left(x\sin\frac{1}{\sqrt{2}x}-\frac{1}{2\sqrt{2}}\cos\frac{1}{\sqrt{2}x}\right)\text{不存在},
\]
所以 \(f'_x(x,y)\) 在 \((0,0)\) 处不连续，同理 \(f'_y(x,y)\) 在 \((0,0)\) 处不连续.

又因为
\[
\begin{aligned}
&\lim_{\substack{\Delta x\to 0\\ \Delta y\to 0}}
\frac{f(0+\Delta x,0+\Delta y)-f(0,0)-f'_x(0,0)\Delta x-f'_y(0,0)\Delta y}{\sqrt{(\Delta x)^2+(\Delta y)^2}}\\
={}&\lim_{\substack{\Delta x\to 0\\ \Delta y\to 0}}
\frac{\Delta x\cdot\Delta y}{\sqrt{(\Delta x)^2+(\Delta y)^2}}\sin\frac{1}{\sqrt{(\Delta x)^2+(\Delta y)^2}},
\end{aligned}
\]

而
\[
0\leqslant\left|\frac{\Delta x\cdot\Delta y}{\sqrt{(\Delta x)^2+(\Delta y)^2}}\sin\frac{1}{\sqrt{(\Delta x)^2+(\Delta y)^2}}\right|\leqslant\left|\frac{\Delta x\cdot\Delta y}{\sqrt{(\Delta x)^2+(\Delta y)^2}}\right|\leqslant|\Delta y|,\qquad \lim_{\substack{\Delta x\to0\\ \Delta y\to0}}|\Delta y|=0,
\]
所以由夹逼准则得
\[
\lim_{\substack{\Delta x\to0\\ \Delta y\to0}}\frac{\Delta x\cdot\Delta y}{\sqrt{(\Delta x)^2+(\Delta y)^2}}\sin\frac{1}{\sqrt{(\Delta x)^2+(\Delta y)^2}}=0,
\]
因此，
\[
\lim_{\substack{\Delta x\to0\\ \Delta y\to0}}\frac{f(0+\Delta x,0+\Delta y)-f(0,0)-f'_x(0,0)\Delta x-f'_y(0,0)\Delta y}{\sqrt{(\Delta x)^2+(\Delta y)^2}}=0,
\]
即 \(f(x,y)\) 在 \((0,0)\) 处可微.

综上分析，排除 (A)(B)(D)，选 (C).` },
      { n: "4", q: R`设函数 \(f(x)\) 具有二阶连续导数，已知函数 \(z=f(x)\mathrm{e}^{f(y)}+x^2-x-2y\) 在 \((0,0)\) 点取得极大值，则此极大值为

(A)\(\mathrm{e}^2\).　　(B)\(2\mathrm{e}^2\).　　(C)\(\mathrm{e}^{-2}\).　　(D)\(2\mathrm{e}^{-2}\).`, a: "(B)", sol: R`\(\frac{\partial z}{\partial x}=f'(x)e^{f(y)}+2x-1,\ \frac{\partial z}{\partial y}=f(x)f'(y)e^{f(y)}-2.\)

由 \(z=f(x)e^{f(y)}+x^2-x-2y\) 在 \((0,0)\) 点取得极大值，得
\[
\begin{cases}
\left.\frac{\partial z}{\partial x}\right|_{(0,0)}=f'(0)e^{f(0)}-1=0,\\[4pt]
\left.\frac{\partial z}{\partial y}\right|_{(0,0)}=f(0)f'(0)e^{f(0)}-2=0,
\end{cases}
\qquad\text{解得 } f(0)=2,\ f'(0)=e^{-2}.
\]
则极大值为
\[
\left.z\right|_{(0,0)}=f(0)e^{f(0)}=2e^2.
\]
故应选 (B).` },
      { n: "5", q: R`求极限：\(\lim\limits_{\substack{x\to0\\y\to0}}\dfrac{\sin(x^2y)}{x^2+y^2}\).`, a: "", sol: R`\[
\lim_{\substack{x\to0\\ y\to0}}\frac{\sin(x^2y)}{x^2+y^2}=\lim_{\substack{x\to0\\ y\to0}}\frac{\sin(x^2y)}{x^2y}\cdot\frac{x^2y}{x^2+y^2},
\]
由重要极限，得
\[
\lim_{\substack{x\to0\\ y\to0}}\frac{\sin(x^2y)}{x^2y}=1,
\]
又因为
\[
0\leqslant\frac{x^2}{x^2+y^2}\leqslant1,\qquad 0\leqslant\left|\frac{x^2y}{x^2+y^2}\right|=\frac{x^2}{x^2+y^2}\cdot|y|\leqslant|y|,\qquad \lim_{\substack{x\to0\\ y\to0}}|y|=0,
\]
故由夹逼准则知，
\[
\lim_{\substack{x\to0\\ y\to0}}\frac{x^2y}{x^2+y^2}=0.
\]
所以
\[
\lim_{\substack{x\to0\\ y\to0}}\frac{\sin(x^2y)}{x^2+y^2}=\lim_{\substack{x\to0\\ y\to0}}\frac{\sin(x^2y)}{x^2y}\cdot\lim_{\substack{x\to0\\ y\to0}}\frac{x^2y}{x^2+y^2}=1\times0=0.
\]` },
      { n: "6", q: R`设函数 \(f(x,y)\) 在点 \((0,0)\) 的某邻域内有定义，且满足 \(\lim\limits_{\substack{x\to0\\y\to0}}\dfrac{f(x,y)-(x^2+y^2)}{\sqrt{x^2+y^2}}=1\)，讨论 \(f(x,y)\) 在点 \((0,0)\) 处的连续性.`, a: "", sol: R`因为
\[
\lim_{\substack{x\to0\\ y\to0}}\frac{f(x,y)-(x^2+y^2)}{\sqrt{x^2+y^2}}=1,\qquad \lim_{\substack{x\to0\\ y\to0}}\sqrt{x^2+y^2}=0,
\]
所以
\[
\lim_{\substack{x\to0\\ y\to0}}[f(x,y)-(x^2+y^2)]=0,
\]
即 \(\lim_{\substack{x\to0\\ y\to0}}f(x,y)=0,\)

因此，若 \(f(0,0)=0\)，则有 \(\lim_{\substack{x\to0\\ y\to0}}f(x,y)=f(0,0)\)，\(f(x,y)\) 在点 \((0,0)\) 处连续，

若 \(f(0,0)\neq0\)，则 \(\lim_{\substack{x\to0\\ y\to0}}f(x,y)\neq f(0,0)\)，\(f(x,y)\) 在点 \((0,0)\) 处不连续.` },
      { n: "7", q: R`设 \(z=f(x,y,u)=xy+xF(u)\)，其中 \(u=\dfrac{y}{x}\)，\(F\) 可微，求证 \(x\dfrac{\partial z}{\partial x}+y\dfrac{\partial z}{\partial y}=z+xy\).`, a: "", sol: R`\[
\frac{\partial z}{\partial x}=y+F(u)+xF'(u)\cdot\left(-\frac{y}{x^2}\right)=y+F(u)-\frac{y}{x}F'(u),
\]
\[
\frac{\partial z}{\partial y}=x+xF'(u)\cdot\frac{1}{x}=x+F'(u),
\]
于是，
\[
x\frac{\partial z}{\partial x}+y\frac{\partial z}{\partial y}=x\cdot\left[y+F(u)-\frac{y}{x}F'(u)\right]+y\cdot[x+F'(u)]
\]
\[
=xy+xF(u)-yF'(u)+xy+yF'(u)=z+xy.
\]` },
      { n: "8", q: R`设 \(z=f(x+y,x^2-y^2)\)，\(f\) 具有二阶连续偏导数，求 \(\dfrac{\partial z}{\partial x},\dfrac{\partial z}{\partial y},\dfrac{\partial^2 z}{\partial x^2},\dfrac{\partial^2 z}{\partial x\partial y}\).`, a: "", sol: R`\[
\frac{\partial z}{\partial x}=f'_1\cdot1+f'_2\cdot2x=f'_1+2xf'_2,
\]
\[
\frac{\partial z}{\partial y}=f'_1\cdot1+f'_2\cdot(-2y)=f'_1-2yf'_2,
\]
\[
\frac{\partial^2z}{\partial x^2}=\frac{\partial}{\partial x}\left(\frac{\partial z}{\partial x}\right)=\frac{\partial}{\partial x}(f'_1+2xf'_2)=\frac{\partial}{\partial x}(f'_1)+\frac{\partial}{\partial x}(2xf'_2)
\]
\[
=f''_{11}\cdot1+f''_{12}\cdot2x+2f'_2+2x(f''_{21}\cdot1+f''_{22}\cdot2x)
\]
\[
=f''_{11}+4xf''_{12}+4x^2f''_{22}+2f'_2.
\]
\[
\frac{\partial^2z}{\partial x\partial y}=\frac{\partial}{\partial y}\left(\frac{\partial z}{\partial x}\right)=\frac{\partial}{\partial y}(f'_1+2xf'_2)=\frac{\partial}{\partial y}(f'_1)+\frac{\partial}{\partial y}(2xf'_2)
\]
\[
=f''_{11}\cdot1+f''_{12}\cdot(-2y)+2x[f''_{21}\cdot1+f''_{22}\cdot(-2y)]
\]
\[
=f''_{11}+2(x-y)f''_{12}-4xyf''_{22}.
\]` },
      { n: "9", q: R`设 \(z=z(x,y)\) 由方程 \(2x^2+2y^2+z^2+8xz-z+8=0\) 确定，求 \(\dfrac{\partial^2 z}{\partial x\partial y}\).`, a: "", sol: R`令 \(F(x,y,z)=2x^2+2y^2+z^2+8xz-z+8\)，则
\[
F'_x(x,y,z)=4x+8z,\qquad F'_y(x,y,z)=4y,\qquad F'_z(x,y,z)=2z+8x-1,
\]
由偏导数计算公式，得
\[
\frac{\partial z}{\partial x}=-\frac{F'_x}{F'_z}=\frac{4x+8z}{1-8x-2z},\qquad \frac{\partial z}{\partial y}=-\frac{F'_y}{F'_z}=\frac{4y}{1-8x-2z},
\]
由复合函数求导法则，得
\[
\frac{\partial^2z}{\partial x\partial y}=\frac{\partial}{\partial y}\left(\frac{\partial z}{\partial x}\right)=\frac{\partial}{\partial y}\left(\frac{4x+8z}{1-8x-2z}\right)
\]
\[
=\frac{(1-8x-2z)\cdot8\frac{\partial z}{\partial y}-(4x+8z)\cdot\left(-2\frac{\partial z}{\partial y}\right)}{(1-8x-2z)^2}=\frac{32(1-7x)y}{(1-8x-2z)^3}.
\]` },
      { n: "10", q: R`设 \(z=z(x,y)\) 是由方程 \(\int_y^x \mathrm{e}^{t^2}\,\mathrm{d}t+xy+yz=0\) 所确定的二元函数，求 \(\mathrm{d}z\).`, a: "", sol: R`令 \(F(x,y,z)=\int_y^z e^{t^2}\,\mathrm{d}t+xy+yz\)，则
\[
F'_x=y,\qquad F'_y=-e^{y^2}+x+z,\qquad F'_z=e^{z^2}+y,
\]
由偏导数计算公式，得
\[
\frac{\partial z}{\partial x}=-\frac{F'_x}{F'_z}=-\frac{y}{e^{z^2}+y},\qquad \frac{\partial z}{\partial y}=-\frac{F'_y}{F'_z}=\frac{e^{y^2}-x-z}{e^{z^2}+y},
\]
由全微分计算公式，得
\[
\mathrm{d}z=\frac{\partial z}{\partial x}\mathrm{d}x+\frac{\partial z}{\partial y}\mathrm{d}y=-\frac{y}{e^{z^2}+y}\mathrm{d}x+\frac{e^{y^2}-x-z}{e^{z^2}+y}\mathrm{d}y.
\]` },
      { n: "11", q: R`求函数 \(f(x,y)=(x+1)\ln(x+1)-xy^2+3\) 的极值.`, a: "", sol: R`\(f'_x(x,y)=\ln(x+1)+1-y^2,\qquad f'_y(x,y)=-2xy.\)

令
\[
\begin{cases}
f'_x(x,y)=\ln(x+1)+1-y^2=0,\\
f'_y(x,y)=-2xy=0,
\end{cases}
\qquad\text{解得驻点为 }(0,1),(0,-1),\left(\frac{1}{e}-1,0\right).
\]
由
\[
f''_{xx}(x,y)=\frac{1}{x+1},\qquad f''_{xy}(x,y)=-2y,\qquad f''_{yy}(x,y)=-2x,
\]
得

在驻点 \((0,1)\) 处，\(A=f''_{xx}(0,1)=1,B=f''_{xy}(0,1)=-2,C=f''_{yy}(0,1)=0\)，由于 \(B^2-AC=4>0\)，可知 \((0,1)\) 不是极值点.

在驻点 \((0,-1)\) 处，\(A=f''_{xx}(0,-1)=1,B=f''_{xy}(0,-1)=2,C=f''_{yy}(0,-1)=0\)，由于 \(B^2-AC=4>0\)，可知 \((0,-1)\) 不是极值点.

在驻点 \(\left(\frac{1}{e}-1,0\right)\) 处，
\[
A=f''_{xx}\left(\frac{1}{e}-1,0\right)=e,\qquad B=f''_{xy}\left(\frac{1}{e}-1,0\right)=0,\qquad C=f''_{yy}\left(\frac{1}{e}-1,0\right)=2-\frac{2}{e},
\]
由于 \(B^2-AC=-e\left(2-\frac{2}{e}\right)<0\)，且 \(A>0\)，可知 \(\left(\frac{1}{e}-1,0\right)\) 为极小值点，极小值为
\[
f\left(\frac{1}{e}-1,0\right)=3-\frac{1}{e}.
\]` },
      { n: "12", q: R`已知 \(f(x+y,x-y)=2x^2+2y^2-1\)，求 \(f(x,y)\) 在约束条件 \(xy=3\) 下的极值.`, a: "", sol: R`由 \(f(x+y,x-y)=2x^2+2y^2-1\)，可知 \(f(x,y)=x^2+y^2-1.\)

构造拉格朗日函数 \(L(x,y,\lambda)=x^2+y^2-1+\lambda(xy-3)\)，

令
\[
\begin{cases}
L'_x=2x+\lambda y=0,\\
L'_y=2y+\lambda x=0,\\
L'_\lambda=xy-3=0,
\end{cases}
\qquad\text{解得}\qquad
\begin{cases}
x=\sqrt3,\\
y=\sqrt3,
\end{cases}
\quad\text{或}\quad
\begin{cases}
x=-\sqrt3,\\
y=-\sqrt3,
\end{cases}
\]
\(f(\sqrt3,\sqrt3)=f(-\sqrt3,-\sqrt3)=5.\)

又 \(f(x,y)=x^2+y^2-1\geqslant2xy-1=5\)，则 \(f(x,y)\) 在 \((\sqrt3,\sqrt3)\) 和 \((-\sqrt3,-\sqrt3)\) 点取得极小值 \(f(\sqrt3,\sqrt3)=f(-\sqrt3,-\sqrt3)=5.\)` },
    ]
  };
})();
