window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q880_s34"] = {
    id: "q880_s34",
    ch: "880题 · 高数 · 第四章 多元函数微分学及其应用",
    title: "综合题·解答题（二，本章完）",
    probTitle: "第四章 综合题 · 解答题 (9)–(22)（含原书解析）",
    book: "李林《精讲精练 880 题（数学二）》2026",
    problems: [
      { n: "(9)", q: R`求 $f(x,y)=xe^{-\frac{x^2+y^2}{2}}$ 的极值。`, a: R`极大值 $f(1,0)=e^{-\frac12}$；极小值 $f(-1,0)=-e^{-\frac12}$`, sol: R`【解】由 $\begin{cases}f'_x=(1-x^2)e^{-\frac{x^2+y^2}{2}}=0,\\f'_y=-xye^{-\frac{x^2+y^2}{2}}=0\end{cases}$ 得驻点 $(1,0),(-1,0)$。$A=f''_{xx}=x(x^2-3)e^{-\frac{x^2+y^2}{2}}$，$B=y(x^2-1)e^{-\frac{x^2+y^2}{2}}$，$C=x(y^2-1)e^{-\frac{x^2+y^2}{2}}$。在 $(1,0)$：$AC-B^2=2e^{-1}>0,A<0$，极大值 $e^{-\frac12}$；在 $(-1,0)$：$AC-B^2>0,A>0$，极小值 $-e^{-\frac12}$。` },
      { n: "(10)", q: R`求 $f(x,y)=\frac1{y^2}e^{-\frac1{2y^2}[(x-a)^2+(y-1)^2]}\ (y\neq0,a$ 为常数$)$ 的极值。`, a: R`极大值 $f\left(a,\frac12\right)=4e^{-\frac12}$，$f(a,-1)=e^{-2}$；无极小值`, sol: R`【解】取对数 $\ln f=-2\ln|y|-\frac1{2y^2}[(x-a)^2+(y-1)^2]$，由 $\begin{cases}\frac{\partial\ln f}{\partial x}=-\frac1{y^2}(x-a)=0,\\\frac{\partial\ln f}{\partial y}=-\frac2y+\frac1{y^3}[(x-a)^2+(y-1)^2]-\frac1{y^2}(y-1)=0\end{cases}$ 得驻点 $\left(a,\frac12\right),(a,-1)$。
$\frac{\partial^2\ln f}{\partial x^2}=-\frac1{y^2}$，$\frac{\partial^2\ln f}{\partial x\partial y}=\frac2{y^3}(x-a)$，$\frac{\partial^2\ln f}{\partial y^2}=\frac1{y^4}[y^2-3(y-1)^2+4y(y-1)]$。在 $\left(a,\frac12\right)$：$A=-4,B=0,C=-24$，$AC-B^2=96>0$，极大值 $4e^{-\frac12}$；在 $(a,-1)$：$A=-1,B=0,C=-3$，$AC-B^2=3>0$，极大值 $e^{-2}$。无极小值。` },
      { n: "(11)", q: R`求 $u=xy+2xz+2yz$ 在条件 $xyz=1$ 下的最小值。`, a: R`$3\sqrt[3]{4}$`, sol: R`【解】令 $L=xy+2xz+2yz+\lambda(xyz-1)$，由 $\begin{cases}y+2z+\lambda yz=0,\\x+2z+\lambda xz=0,\\2x+2y+\lambda xy=0,\\xyz=1\end{cases}$ 得 $x=y$，$y=2z$，代入 $xyz=1$ 解得 $x=y=\sqrt[3]2,z=\frac{\sqrt[3]2}2$，故 $u_{\min}=3\sqrt[3]4$。` },
      { n: "(12)", q: R`设函数 $z=z(x,y)$ 由方程 $x^2-6xy+10y^2-2yz-z^2+18=0$ 确定，求 $z=z(x,y)$ 的极值。`, a: R`极小值 $z(9,3)=3$；极大值 $z(-9,-3)=-3$`, sol: R`【解】两边对 $x,y$ 求偏导，令 $\frac{\partial z}{\partial x}=\frac{\partial z}{\partial y}=0$ 得 $x=3y,z=y$，代入原方程得 $(9,3,3)$ 或 $(-9,-3,-3)$。
求二阶偏导并代入：$(9,3,3)$ 处 $A=\frac16,B=-\frac12,C=\frac53$，$AC-B^2=\frac1{36}>0,A>0$，极小值 $z(9,3)=3$；$(-9,-3,-3)$ 处 $A=-\frac16,B=\frac12,C=-\frac53$，$AC-B^2>0,A<0$，极大值 $z(-9,-3)=-3$。` },
      { n: "(13)", q: R`设 $f(x)$ 有二阶连续导数，且 $f(x)>0,f'(0)=0$，证明：$z=f(x)\ln f(y)$ 在点 $(0,0)$ 处取得极小值的充分条件是 $f''(0)>0$ 且 $f(0)>1$。`, a: R`见证明`, sol: R`【证】$z'_x=f'(x)\ln f(y)$，$z'_y=f(x)\frac{f'(y)}{f(y)}$，由 $f'(0)=0$ 得 $z'_x(0,0)=z'_y(0,0)=0$。$z''_{xx}=f''(x)\ln f(y)$，$z''_{xy}=f'(x)\frac{f'(y)}{f(y)}$，$z''_{yy}=f(x)\frac{f''(y)f(y)-[f'(y)]^2}{f^2(y)}$，故 $A=f''(0)\ln f(0)$，$B=0$，$C=f''(0)$。由 $f''(0)>0,f(0)>1$ 得 $AC-B^2=[f''(0)]^2\ln f(0)>0$，$A>0$，故取得极小值。` },
      { n: "(14)", q: R`已知 $z=f(x,y)$ 的全微分 $dz=(y-x^2)dx+(x-1)dy$，且 $f(1,1)=-\frac13$，求 $f(x,y)$ 在 $D:0\leqslant y\leqslant7-x,0\leqslant x\leqslant7$ 上的最大值。`, a: R`$\frac73$`, sol: R`【解】由 $dz=d(xy-\frac13x^3-y)$ 及 $f(1,1)=-\frac13$ 得 $f(x,y)=xy-\frac13x^3-y$。$D$ 内驻点 $(1,1)$，$f(1,1)=-\frac13$。边界：$y=0$ 上最大 $0$；$x=0$ 上最大 $0$；$x+y=7$ 上 $f(x,7-x)=-\frac{x^3}3-x^2+8x-7$，$\frac{d}{dx}=-x^2-2x+8=0$ 得 $x=2$，$f(2,5)=\frac73$。比较得最大值 $\frac73$。` },
      { n: "(15)", q: R`设函数 $f(x,y)$ 的全微分为 $df(x,y)=(2ax+by)dx+(2by+ax)dy$（$a,b$ 为常数），且 $f(0,0)=-3,f'_x(1,1)=3$。试求：
(Ⅰ) $f(x,y)$；
(Ⅱ) 点 $(-1,-1)$ 到曲线 $f(x,y)=0$ 上的点的距离的最大值。`, a: R`(Ⅰ) $f(x,y)=x^2+y^2+xy-3$；(Ⅱ) $3$`, sol: R`【解】(Ⅰ) 由 $f'_x=2ax+by,f'_y=2by+ax$ 及 $f''_{xy}=b=f''_{yx}=a$ 得 $a=b$；由 $f'_x(1,1)=2a+b=3$ 得 $a=b=1$。故 $df=d(x^2+y^2+xy+c)$，$f=x^2+y^2+xy-3$。
(Ⅱ) $d^2=(x+1)^2+(y+1)^2$，在 $x^2+y^2+xy-3=0$ 下用拉格朗日乘数法得 $(x-y)(x+y-1)=0$，解得 $(1,1),(-1,-1),(2,-1),(-1,2)$。比较 $d^2(1,1)=8,d^2(-1,-1)=0,d^2(2,-1)=d^2(-1,2)=9$，最大距离为 $3$。` },
      { n: "(16)", q: R`设 $f(x,y)=\sqrt{x^2+y^2}\,\varphi(x,y)$，$\varphi(x,y)$ 在点 $(0,0)$ 处连续，且 $\varphi(0,0)=0$。
(Ⅰ) 求 $f'_x(0,0),f'_y(0,0)$；
(Ⅱ) 证明：$f(x,y)$ 在点 $(0,0)$ 处可微，并求全微分 $df|_{(0,0)}$。`, a: R`(Ⅰ) $f'_x(0,0)=f'_y(0,0)=0$；(Ⅱ) $df|_{(0,0)}=0$`, sol: R`【解】(Ⅰ) $f'_x(0,0)=\lim\limits_{x\to0}\frac{|x|}x\varphi(x,0)$，由 $\varphi$ 连续及 $\varphi(0,0)=0$ 得 $f'_x(0,0)=0$；同理 $f'_y(0,0)=0$。
【证】(Ⅱ) $\lim\limits_{(x,y)\to(0,0)}\frac{\Delta f-0}{\sqrt{x^2+y^2}}=\lim\limits_{(x,y)\to(0,0)}\varphi(x,y)=0$，故可微，且 $df|_{(0,0)}=0$。` },
      { n: "(17)", q: R`设 $f(x,y)=\begin{cases}xy\sin\frac1{\sqrt{x^2+y^2}},&(x,y)\neq(0,0),\\0,&(x,y)=(0,0),\end{cases}$ 讨论 $f(x,y)$ 在点 $(0,0)$ 处是否可微，偏导数 $\frac{\partial f}{\partial x},\frac{\partial f}{\partial y}$ 在点 $(0,0)$ 处是否连续。`, a: R`可微；偏导数在 $(0,0)$ 处均不连续`, sol: R`【解】$f'_x(0,0)=f'_y(0,0)=0$。$\lim\limits_{(x,y)\to(0,0)}\frac{xy\sin\frac1{\sqrt{x^2+y^2}}}{\sqrt{x^2+y^2}}=\lim x\cdot\frac y{\sqrt{x^2+y^2}}\cdot\sin\frac1{\sqrt{x^2+y^2}}=0$，故可微。
$f'_x(x,y)=y\sin\frac1{\sqrt{x^2+y^2}}-\frac{yx^2}{(x^2+y^2)^{3/2}}\cos\frac1{\sqrt{x^2+y^2}}$，取 $y=x$，$\lim\limits_{x\to0}f'_x(x,x)$ 不存在，故 $f'_x$ 在 $(0,0)$ 处不连续；同理 $f'_y$ 也不连续。` },
      { n: "(18)", q: R`设中心在原点的椭圆为 $x^2-4xy+5y^2=1$，求该椭圆的长半轴与短半轴。`, a: R`长半轴 $\sqrt2+1$，短半轴 $\sqrt2-1$`, sol: R`【解】即求原点到椭圆上点的距离 $d=\sqrt{x^2+y^2}$ 的最值。令 $L=x^2+y^2+\lambda(x^2-4xy+5y^2-1)$，由 $\begin{cases}(1+\lambda)x-2\lambda y=0,\\-2\lambda x+(1+5\lambda)y=0,\\x^2-4xy+5y^2=1\end{cases}$ 有非零解需 $\begin{vmatrix}1+\lambda&-2\lambda\\-2\lambda&1+5\lambda\end{vmatrix}=\lambda^2+6\lambda+1=0$，得 $\lambda=-3\pm2\sqrt2$，故 $d=\sqrt{-\lambda}=\sqrt2\pm1$，即长半轴 $\sqrt2+1$、短半轴 $\sqrt2-1$。` },
      { n: "(19)", q: R`设 $x=x(y),z=z(y)$ 由方程组 $\begin{cases}F(y-x,y-z)=0,\\G\left(xy,\frac zy\right)=0\end{cases}$ 确定，求 $\frac{dx}{dy},\frac{dz}{dy}$。`, a: R`$\frac{dx}{dy}=\frac{\frac1yF'_1G'_2+xF'_2G'_1+(\frac1y-\frac z{y^2})F'_2G'_2}{\frac1yF'_1G'_2-yF'_2G'_1}$；$\frac{dz}{dy}=-\frac{(x+y)F'_1G'_1+yF'_2G'_1-\frac zyF'_1G'_2}{\frac1yF'_1G'_2-yF'_2G'_1}$`, sol: R`【解】方程组对 $y$ 求导整理得 $\begin{cases}F'_1\frac{dx}{dy}+F'_2\frac{dz}{dy}=F'_1+F'_2,\\yG'_1\frac{dx}{dy}+\frac1yG'_2\frac{dz}{dy}=\frac z{y^2}G'_2-xG'_1,\end{cases}$ 解之即得上述结果。` },
      { n: "(20)", q: R`设 $\alpha,\beta$ 为正数，且 $\frac1\alpha+\frac1\beta=1$，求 $f(x,y)=\frac1\alpha x^\alpha+\frac1\beta y^\beta$ 在条件 $xy=1\ (x>0,y>0)$ 下的最小值。`, a: R`$1$`, sol: R`【解】令 $L=\frac1\alpha x^\alpha+\frac1\beta y^\beta+\lambda(xy-1)$，由 $\begin{cases}x^{\alpha-1}+\lambda y=0,\\y^{\beta-1}+\lambda x=0,\\xy=1\end{cases}$ 解得 $x=y=1$，为唯一极值点即最小值点，$f_{\min}=f(1,1)=1$。` },
      { n: "(21)", q: R`设可微函数 $f(u,v)$ 满足 $\frac{\partial f}{\partial u}+\frac{\partial f}{\partial v}=(u+v)e^{u-v}$，且 $f(0,v)=0$，若 $u=x,v=x+y$，求：
(Ⅰ) $\frac{\partial f(x,x+y)}{\partial x}$；
(Ⅱ) $f(u,v)$ 的极值。`, a: R`(Ⅰ) $(2x+y)e^{-y}$；(Ⅱ) 极小值 $f(-1,1)=-e^{-2}$`, sol: R`【解】(Ⅰ) $\frac{\partial f(x,x+y)}{\partial x}=f'_1(x,x+y)+f'_2(x,x+y)=(x+x+y)e^{x-(x+y)}=(2x+y)e^{-y}$。
(Ⅱ) 由 $f(x,x+y)=\int(2x+y)e^{-y}dx+\varphi(y)=(x^2+xy)e^{-y}+\varphi(y)$ 得 $f(u,v)=uve^{u-v}+\varphi(v-u)$，由 $f(0,v)=0$ 得 $\varphi\equiv0$，故 $f(u,v)=uve^{u-v}$。由 $\begin{cases}v+uv=0,\\u-uv=0\end{cases}$ 得 $(0,0),(-1,1)$。$(0,0)$：$AC-B^2=-1<0$，无极值；$(-1,1)$：$A=e^{-2}>0,B=0,C=e^{-2}$，$AC-B^2>0$，极小值 $f(-1,1)=-e^{-2}$。` },
      { n: "(22)", q: R`设 $w=xy-z$，$z=z(x,y)$ 有二阶连续的偏导数，且满足 $\frac{\partial^2z}{\partial x^2}+2\frac{\partial^2z}{\partial x\partial y}+\frac{\partial^2z}{\partial y^2}=0$，作变换 $u=x+y,v=x-y$。
(Ⅰ) 求 $\frac{\partial^2w}{\partial u^2}$；
(Ⅱ) 若 $\frac{\partial w(0,v)}{\partial u}=ve^{-v},w(0,v)=\frac{v^2}4$，求 $z(x,y)$ 的表达式。`, a: R`(Ⅰ) $\frac12$；(Ⅱ) $z=xy-\frac12(x^2+y^2)-(x^2-y^2)e^{-(x-y)}$`, sol: R`【解】(Ⅰ) 由 $z=xy-w$ 计算 $\frac{\partial^2z}{\partial x^2},\frac{\partial^2z}{\partial x\partial y},\frac{\partial^2z}{\partial y^2}$ 并代入原方程得 $2-4\frac{\partial^2w}{\partial u^2}=0$，故 $\frac{\partial^2w}{\partial u^2}=\frac12$。
(Ⅱ) $\frac{\partial w}{\partial u}=\frac12u+\varphi_1(v)$，由 $\frac{\partial w(0,v)}{\partial u}=ve^{-v}$ 得 $\varphi_1(v)=ve^{-v}$，故 $w=\frac{u^2}4+uve^{-v}+\varphi_2(v)$；由 $w(0,v)=\frac{v^2}4$ 得 $\varphi_2(v)=\frac{v^2}4$，故 $w=\frac{u^2}4+uve^{-v}+\frac{v^2}4$，从而 $z=xy-\frac12(x^2+y^2)-(x^2-y^2)e^{-(x-y)}$。` }
    ]
  };
})();
