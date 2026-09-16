window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["gs04_s0"] = {
    id: "gs04_s0",
    ch: "第四章 常微分方程",
    title: "常微分方程",
    book: "《高等数学辅导讲义》",
    pages: [128, 137],
    img: "assets/img/gaoshu",
    content: [
      { p: 128, md: R`### 第四章 常微分方程
#### 一、考试内容要点精讲
##### （一）常微分方程的基本概念
1. 微分方程：含有未知函数的导数或微分的方程称为微分方程。简称方程。
2. 微分方程的阶：微分方程中所出现的未知函数最高阶导数的阶数，称为微分方程的阶。
3. 微分方程的解：满足微分方程的函数，称为该方程的解。
4. 微分方程的通解：如果微分方程的解中含有任意常数，且任意常数的个数与微分方程的阶数相同，则称之为微分方程的通解。
5. 微分方程的特解：微分方程的不含任意常数的解，称之为特解。
6. 初始条件：确定特解的一组常数称为初始条件。
7. 积分曲线：方程的一个解在平面上对应一条曲线，称为该微分方程的积分曲线。
##### （二）一阶微分方程
**1. 可分离变量的方程**
能表示为 $g(y)dy=f(x)dx$ 的方程，称为可分离变量的方程。求解的方法是两端积分
$$\int g(y)dy=\int f(x)dx.$$
**2. 齐次方程**
能化为 $\frac{dy}{dx}=\varphi\left(\frac{y}{x}\right)$ 的微分方程称为齐次微分方程。
求解齐次微分方程的一般方法为：令 $u=\frac{y}{x}$，则 $y'=u+xu'$，从而将原方程化为 $xu'=\varphi(u)-u$，此方程为可分离变量的方程。
**3. 线性方程**
形如 $y'+p(x)y=Q(x)$ 的方程称为一阶线性微分方程。
求解一阶线性微分方程的一般方法为常数变易法，或直接利用以下通解公式
$$y=e^{-\int p(x)dx}\left[\int Q(x)e^{\int p(x)dx}dx+C\right].$$
**4. 伯努利方程（仅数学一要求）**
形如 $y'+p(x)y=Q(x)y^n$ 的方程（$n\neq0,1$），称为伯努利方程。
求解伯努利方程的一般方法为：令 $u=y^{1-n}$，将原方程化为一阶线性微分方程。` },
      { p: 129, md: R`**5. 全微分方程（仅数学一要求）**
如果方程 $P(x,y)dx+Q(x,y)dy=0$ 的左端是某个函数 $u(x,y)$ 的全微分：
$$du(x,y)=P(x,y)dx+Q(x,y)dy,$$
则称该方程为全微分方程。此方程的通解为 $u(x,y)=C$。
求 $u(x,y)$ 有以下三种方法：1）偏积分； 2）凑微分； 3）线积分。
当 $P(x,y),Q(x,y)$ 在单连通域 $G$ 内具有一阶连续偏导数时，方程 $P(x,y)dx+Q(x,y)dy=0$ 是全微分方程的充要条件是
$$\frac{\partial P}{\partial y}=\frac{\partial Q}{\partial x}.$$
【注】如果给定的一阶微分方程不属于上述五种标准形式，首先考虑将 $x,y$ 对调，即认定 $x$ 为 $y$ 的函数，再判定新方程的类型；或者利用简单的变量代换将其化为上述五种类型之一而求解。
##### （三）可降阶的高阶方程（数学三不要求）
1. $y^{(n)}=f(x)$ 型的微分方程
2. $y''=f(x,y')$ 型的方程：只需令 $y'=p$，$y''=p'$，可将原方程化为一阶微分方程。
3. $y''=f(y,y')$ 型的方程：只需令 $y'=p$，$y''=p\frac{dp}{dy}$，可将原方程化为一阶微分方程。
##### （四）高阶线性微分方程
**1. 线性微分方程的解的结构**
这里只讨论二阶线性微分方程，其结论可以推广到更高阶的方程。二阶线性微分方程的一般形式为
$$y''+p(x)y'+q(x)y=f(x),$$
这里的 $p(x),q(x),f(x)$ 均为连续函数。当方程右端的 $f(x)\equiv0$ 时，称为二阶线性齐次方程。否则称为二阶线性非齐次方程。
齐次方程 $\qquad y''+p(x)y'+q(x)y=0\qquad\qquad(1)$
非齐次方程 $\qquad y''+p(x)y'+q(x)y=f(x)\qquad\qquad(2)$
**定理 1** 如果 $y_1(x)$ 和 $y_2(x)$ 是齐次方程 (1) 的两个线性无关的特解，那么
$$y=C_1y_1(x)+C_2y_2(x)$$
就是方程 (1) 的通解。
【注】方程 (1) 的两个解线性无关的充要条件是它们之比不为常数。
**定理 2** 如果 $y^*$ 是非齐次方程 (2) 的一个特解，$y_1(x)$ 和 $y_2(x)$ 是齐次方程 (1) 的两个线性无关的特解，则
$$y=C_1y_1(x)+C_2y_2(x)+y^*(x)$$
是非齐次微分方程 (2) 的通解。` },
      { p: 130, md: R`**定理 3** 如果 $y_1^*(x),y_2^*(x)$ 是非齐次方程 (2) 的两个特解，则 $y(x)=y_2^*(x)-y_1^*(x)$ 是齐次微分方程 (1) 的解。
**定理 4** 如果 $y_1^*(x),y_2^*(x)$ 分别是方程
$$y''+p(x)y'+q(x)y=f_1(x),\quad y''+p(x)y'+q(x)y=f_2(x)$$
的特解，则 $y_1^*(x)+y_2^*(x)$ 是方程
$$y''+p(x)y'+q(x)y=f_1(x)+f_2(x)$$
的一个特解。
**2. 常系数齐次线性微分方程**
二阶常系数线性齐次微分方程的一般形式为
$$y''+py'+qy=0,\qquad\qquad③$$
其特征方程为 $r^2+pr+q=0$，设 $r_1,r_2$ 为该方程的两个根。
(1) 若 $r_1\neq r_2$ 为两个不相等的实特征根，则方程 ③ 的通解为 $y=C_1e^{r_1x}+C_2e^{r_2x}.$
(2) 若 $r_1=r_2$ 为二重实特征根，则方程 ③ 的通解为 $y=(C_1+C_2x)e^{r_1x}.$
(3) 若 $r_1=\alpha+i\beta,r_2=\alpha-i\beta$ 为一对共轭复根，则方程 ③ 的通解为 $y=e^{\alpha x}(C_1\cos\beta x+C_2\sin\beta x).$
**3. 常系数非齐次线性微分方程**
二阶常系数线性非齐次微分方程的一般形式为
$$y''+py'+qy=f(x).\qquad\qquad④$$
(1) 若 $f(x)=P_m(x)e^{\lambda x}$，其中 $P_m(x)$ 为 $x$ 的 $m$ 次多项式，则方程 ④ 的特解可设为
$$y^*=x^kQ_m(x)e^{\lambda x},$$
其中 $Q_m(x)$ 是与 $P_m(x)$ 同次的多项式，$k$ 是特征方程含根 $\lambda$ 的重复次数。即当 $\lambda$ 不是方程 ③ 的特征根时，$k=0$；当 $\lambda$ 是方程 ③ 的单特征根时，$k=1$；当 $\lambda$ 是方程 ③ 的重特征根时，$k=2$。
(2) 若 $f(x)=e^{\alpha x}\left[P_l^{(1)}(x)\cos\beta x+P_n^{(2)}(x)\sin\beta x\right]$，其中 $P_l^{(1)}(x),P_n^{(2)}(x)$ 分别为 $x$ 的 $l$ 次，$n$ 次多项式，则方程 ④ 的特解可设为
$$y^*=x^ke^{\alpha x}\left[R_m^{(1)}(x)\cos\beta x+R_m^{(2)}(x)\sin\beta x\right].$$
其中 $R_m^{(1)}(x),R_m^{(2)}(x)$ 是两个 $m$ 次多项式，$m=\max\{l,n\}$。当 $\alpha+i\beta$ 不为方程 ③ 的特征根时，取 $k=0$；当 $\alpha+i\beta$ 为方程 ③ 的单特征根时，取 $k=1$。
**4. 欧拉方程（仅数学一要求）**
形如 $x^ny^{(n)}+p_1x^{n-1}y^{(n-1)}+\cdots+p_{n-1}xy'+p_ny=f(x)$（其中 $p_1,p_2,\cdots,p_n$ 为常数）的方程称为欧拉方程。
令 $x=e^t$ 或 $t=\ln x$，可将上述欧拉方程化为线性常系数方程，一般地有 $x^ky^{(k)}=D(D-1)\cdots(D-k+1)y,$ 其中 $D$ 代表对 $t$ 求导数的运算。
##### （五）差分方程（仅数三要求）
1）一阶常系数线性齐次差分方程 $y_{t+1}+ay_t=0,\qquad\qquad①$` },
      { p: 131, md: R`通解为 $y_c(t)=C\cdot(-a)^t.$
2）一阶常系数线性非齐次差分方程 $y_{t+1}+ay_t=f(t),\qquad\qquad②$
通解为 $y_t=y_c(t)+y_t^*$，其中 $y_t^*$ 是非齐次差分方程 (2) 的特解。
①$f(t)=P_m(t)$：ⅰ) 若 $a\neq-1$，令 $y_t^*=Q_m(t)$；ⅱ) 若 $a=-1$，令 $y_t^*=tQ_m(t)$；
②$f(t)=d^t\cdot P_m(t)$，$(d\neq0)$：ⅰ) 若 $a+d\neq0$，令 $y_t^*=d^t\cdot Q_m(t)$；ⅱ) 若 $a+d=0$，令 $y_t^*=td^t\cdot Q_m(t)$。
【例1】差分方程 $2y_{t+1}+10y_t-5t=0$ 的通解为______。
【解】原方程的一般形式为 $y_{t+1}+5y_t=\frac{5}{2}t$ 其对应的齐次差分方程为 $y_{t+1}+5y_t=0,$ 其通解为 $y_c(t)=C(-5)^t$（$C$ 为任意常数）。
因为 $f(t)=\frac{5}{2}t$ 是 $t$ 的一次多项式，且 $a=5\neq-1$，故设原方程的特解为 $y_t^*=At+B,$ 代入原方程，得
$$A(t+1)+B+5(At+B)=\frac{5}{2}t,$$
即 $6At+A+6B=\frac{5}{2}t.$ 比较系数知 $A=\frac{5}{12},B=-\frac{5}{72}$，故 $y_t^*=\frac{5}{12}\left(t-\frac{1}{6}\right)$，从而原差分方程的通解为
$$y_t=y_c(t)+y_t^*=C(-5)^t+\frac{5}{12}\left(t-\frac{1}{6}\right).$$
【例2】差分方程 $y_{t+1}-y_t=t\cdot2^t$ 的通解为______。
【解】原方程对应的齐次差分方程为 $y_{t+1}-y_t=0,$ 其通解为 $y_c(t)=C(1)^t=C$（$C$ 为任意常数）。
因为 $f(t)=t\cdot2^t$，且 $a+d=-1+2=1\neq0$，故设原方程的特解为 $y_t^*=2^t(At+B),$ 代入原方程，得
$$2^{t+1}[A(t+1)+B]-2^t(At+B)=t2^t,$$
即 $At+2A+B=t.$ 比较系数知 $A=1,B=-2$，故 $y_t^*=2^t(t-2)$，从而原差分方程的通解为
$$y_t=y_c(t)+y_t^*=C+2^t(t-2).$$` },
      { p: 132, md: R`#### 二、常考题型的方法与技巧
##### 题型一 微分方程求解
【例1】求解下列一阶微分方程
(1) $y'+xy^2-y^2=1-x$。 (2) $xy'+y=2\sqrt{xy}$。
(3) $y'=\frac{1}{xy+y^3}$。 (4) $y'=\cos(x+y)$。
(5) 求方程 $y'\sec^2y+\frac{x}{1+x^2}\tan y=x$ 满足条件 $y|_{x=0}=0$ 的特解。
(6) $(x-\sin y)dy+\tan y\,dx=0$。
【解】(1) $y'=(1+y^2)(1-x)$，$\frac{dy}{1+y^2}=(1-x)dx$，$\arctan y=x-\frac{1}{2}x^2+C.$
(2) $y'+\frac{y}{x}=2\sqrt{\frac{y}{x}}$，令 $u=\frac{y}{x}$，$y=xu$，则 $u+x\frac{du}{dx}+u=2\sqrt{u},$ $\frac{du}{2(\sqrt{u}-u)}=\frac{dx}{x},$ $\frac{d\sqrt{u}}{1-\sqrt{u}}=\frac{dx}{x},$ $x-\sqrt{xy}=C.$
(3) $\frac{dx}{dy}=xy+y^3$，$\frac{dx}{dy}-yx=y^3,\qquad\qquad(\text{线性})$
$$x=e^{\int ydy}\left[\int y^3e^{-\int ydy}dy+C\right]=e^{\frac{1}{2}y^2}\left[\int y^3e^{-\frac{y^2}{2}}dy+C\right]=e^{\frac{y^2}{2}}\left[\int(-y^2)de^{-\frac{y^2}{2}}+C\right]=Ce^{\frac{1}{2}y^2}-y^2-2.$$
(4) 令 $x+y=u$，则 $1+y'=\frac{du}{dx},$ $\frac{du}{dx}=1+\cos u,$ $\tan\frac{u}{2}=x+C,$ $\tan\frac{(x+y)}{2}=x+C.$
(5) 令 $\tan y=u$，则` },
      { p: 133, md: R`$$\frac{du}{dx}+\frac{x}{1+x^2}u=x,\qquad\qquad(\text{线性})$$
$$u=e^{-\int\frac{x}{1+x^2}dx}\left[\int xe^{\int\frac{x}{1+x^2}dx}dx+C\right]=\frac{1}{3}(1+x^2)+\frac{C}{\sqrt{1+x^2}}.$$
由 $y|_{x=0}=0$ 知，$C=-\frac{1}{3}$，从而 $\tan y=\frac{1}{3}\left(1+x^2-\frac{1}{\sqrt{1+x^2}}\right).$
(6) $x-\sin y+\tan y\frac{dx}{dy}=0,$ $\frac{dx}{dy}+x\cot y=\cos y$
由线性方程通解公式得 $x=e^{-\int\cot ydy}\left[\int e^{\int\cot ydy}\cos ydy+C\right]=\frac{1}{\sin y}\left(\frac{1}{2}\sin^2y+C\right).$
【例2】求解下列各题（可降阶）
1）求方程 $(x+1)y''+y'=\ln(x+1)$ 的通解；
2）求方程 $\begin{cases}2yy''=y'^2+y^2,\\y(0)=1,y'(0)=-1\end{cases}$ 的特解。
1）【解1】可降阶方程 令 $y'=p$，则 $y''=p'$，从而 $(x+1)p'+p=\ln(1+x),$ $p'+\frac{1}{x+1}p=\frac{\ln(1+x)}{x+1},\qquad\qquad(\text{线性})$ $y=(x+1+C_1)\ln(1+x)-2x+C_2.$
【解2】$[(x+1)y']'=\ln(1+x),$ $(x+1)y'=\int\ln(1+x)dx=\int\ln(1+x)d(x+1)=(x+1)\ln(1+x)-x+C_1,$ $y=(x+1+C_1)\ln(1+x)-2x+C_2.$
2）【解】令 $y'=p$，$y''=\frac{dp}{dy}p$，则 $2yp\frac{dp}{dy}=p^2+y^2,$ $2\frac{p}{y}\frac{dp}{dy}=\left(\frac{p}{y}\right)^2+1.$ 令 $\frac{p}{y}=u$，$p=yu$，$\frac{dp}{dy}=u+y\frac{du}{dy}$，则 $2u\left(u+y\frac{du}{dy}\right)=u^2+1,$ $2yu\frac{du}{dy}=1-u^2.$
显然 $u=1,u=-1$ 均为原方程解，但由 $y(0)=1,y'(0)=-1$ 知，$u=-1,\text{即}\frac{p}{y}=-1,$ 从而 $y=Ce^{-x}$，由 $y(0)=1$ 知，$C=1$，$y=e^{-x}.$` },
      { p: 134, md: R`【例3】求解下列各题（高阶线性方程）
1）方程 $y''-y=e^x+1$ 的特解形式可设为
(A) $ae^x+b$。 (B) $axe^x+b$。 (C) $ae^x+bx$。 (D) $axe^x+bx$。
【解】选(B)。
2）方程 $y'''-y''=3x^2$ 的特解形式可设为
(A) $ax^2+bx+c$。 (B) $x^2(ax^2+b)$。 (C) $x^2(ax^2+bx+c)$。 (D) $x(ax^2+bx+c)$。
【解】选(C)。
3）方程 $y''+y=x^2+1+\sin x$ 的特解形式可设为
(A) $ax^2+bx+c+A\sin x$。 (B) $ax^2+bx+c+B\cos x$。 (C) $ax^2+bx+c+A\sin x+B\cos x$。 (D) $ax^2+bx+c+x(A\sin x+B\cos x)$。
【解】选(D)。
4）设线性无关的函数 $y_1,y_2,y_3$ 都是方程 $y''+p(x)y'+q(x)y=f(x)$ 的解，$C_1,C_2$ 为任意常数，则该非齐次方程通解是
(A) $C_1y_1+C_2y_2+C_3y_3$。 (B) $C_1y_1+C_2y_2-(C_1+C_2)y_3$。 (C) $C_1y_1+C_2y_2+(1-C_1-C_2)y_3$。 (D) $C_1y_1+C_2y_2-(1-C_1-C_2)y_3$。
【解】选(C)。
$$C_1y_1+C_2y_2+(1-C_1-C_2)y_3=C_1(y_1-y_3)+C_2(y_2-y_3)+y_3,$$
其中 $y_1-y_3$ 与 $y_2-y_3$ 是齐次方程两个线性无关的特解，故应选(C)。
5）已知 $y_1=xe^x+e^{2x}$，$y_2=xe^x-e^{-x}$，$y_3=xe^x+e^{2x}+e^{-x}$ 为某二阶线性常系数非齐次方程的特解，求此方程。
【解】$y_3-y_1=e^{-x}$ 为齐次的解。$y_2+e^{-x}=xe^x$ 为非齐次的解。$y_1-xe^x=e^{2x}$ 为齐次的解。
则齐次方程特征方程为 $(r+1)(r-2)=0$，即 $r^2-r-2=0$，从而齐次方程为 $y''-y'-2y=0.$
设所求的二阶线性非齐次方程为 $y''-y'-2y=f(x),$ 将 $y=xe^x$ 代入该方程得 $f(x)=e^x(1-2x)$。故所求方程为 $y''-y'-2y=e^x(1-2x).$
6）若 $y=e^{2x}+(x+1)e^x$ 是方程 $y''+ay'+by=ce^x$ 的解，求 $a,b,c$ 及该方程通解。
【解1】将 $y=e^{2x}+(x+1)e^x$ 代入原方程比较系数，得 $a=-3,b=2,c=-1.$
【解2】由于 $y=e^{2x}+(1+x)e^x=e^{2x}+e^x+xe^x$ 为原方程的解，则 $y_1=e^{2x}$ 必为齐次的解。（由方程非齐次项知非齐次解中只会出现 $e^x$ 而不会出现 $e^{2x}$）。$xe^x$ 与 $e^x$ 中，$y_2=e^x$ 为齐次的解（若 $xe^x$ 是齐次解，$r=1$ 为特征方程二重根，但 $r=2$ 已是一个根）。则齐次方程的特征方程为 $(r-1)(r-2)=0$，即 $r^2-3r+2=0$，齐次方程为` },
      { p: 135, md: R`$y''-3y'+2y=0$，于是 $a=-3,b=2.$ 将 $y=xe^x$ 代入方程 $y''-3y'+2y=ce^x$ 得 $c=-1$，则所求方程的通解为 $y=C_1e^x+C_2e^{2x}+xe^x.$
7）已知 $y_1=3,y_2=3+x^2,y_3=3+e^x$ 是某二阶线性非齐次方程的三个特解，求该微分方程及通解。
【解】$y_2-y_1=x^2,y_3-y_1=e^x$ 为齐次方程的两个线性无关的特解，则所求方程通解为
$$y=C_1x^2+C_2e^x+3.\tag{①}$$
①式求导得 $y'=2C_1x+C_2e^x$,（②）再求导得 $y''=2C_1+C_2e^x$,（③）
③$-$②得 $y''-y'=2C_1(1-x)$,（④）①$-$②得 $y-y'=C_1(x^2-2x)+3$,（⑤）
联立⑤式和④式消去 $C_1$ 得 $(2x-x^2)y''+(x^2-2)y'+2(1-x)y=6(1-x).$
8）求方程 $y''+a^2y=\sin x$ 的通解，其中常数 $a>0$。
【解】齐次方程特征方程为 $r^2+a^2=0$，特征根为 $r=\pm ai$。①若 $a\neq1$，则非齐次特定特解为 $y^*=A\cos x+B\sin x$，代入原方程得 $A=0,B=\frac{1}{a^2-1}$，则原方程通解为
$$y=C_1\cos ax+C_2\sin ax+\frac{1}{a^2-1}\sin x.$$
②若 $a=1$，则非齐次方程待定特解为 $y^*=x(A\cos x+B\sin x),$ 代入原方程得 $A=-\frac12,B=0$，则原方程通解为 $y=C_1\cos x+C_2\sin x-\frac12x\cos x.$
##### 题型二 综合题
【例1】求连续函数 $f(x)$，使它满足 $x\int_0^1f(tx)dt=f(x)+x.$
【解】令 $tx=u$，则 $\int_0^1f(tx)dt=\frac{\int_0^xf(u)du}{x}$，从而 $\int_0^xf(u)du=f(x)+x,$ $f(x)=f'(x)+1,$ $f'(x)-f(x)=-1,$ $f(x)=1+Ce^x.$ 由题设可知 $f(0)=0$，则 $C=-1$，故 $f(x)=1-e^x.$
【例2】设 $f(x)=\sin x-\int_0^x(x-t)f(t)dt$，其中 $f(x)$ 为连续函数，求 $f(x)$。
【解】$f(x)=\sin x-x\int_0^xf(t)dt+\int_0^xtf(t)dt,$ ①` },
      { p: 136, md: R`$$f'(x)=\cos x-\int_0^xf(t)dt,\tag{②}$$
$$f''(x)=-\sin x-f(x),\quad f''(x)+f(x)=-\sin x.\tag{③}$$
由①式知 $f(0)=0$，由②式知 $f'(0)=1$。
非齐次方程③对应的齐次方程特征方程为 $r^2+1=0,\quad r=\pm i,$ 设方程③的待定特解为 $f=x(a\cos x+b\sin x)$，代入③式得 $a=\frac12,b=0$。则方程③的通解为
$$f(x)=C_1\cos x+C_2\sin x+\frac12x\cos x.$$
由 $f(0)=0$ 和 $f'(0)=1$ 可得 $C_1=0,C_2=\frac12$，则 $f(x)=\frac12\sin x+\frac x2\cos x.$
【例3】设 $f(x)$ 可导，且满足 $x=\int_0^xf(t)dt+\int_0^xtf(t-x)dt$，求 $f(x)$。
【解】在积分 $\int_0^xtf(t-x)dt$ 中，令 $t-x=u$，则有 $x=\int_0^xf(t)dt-\int_0^{-x}uf(u)du-x\int_0^{-x}f(u)du.$
等式两端对 $x$ 求导，整理得 $f(x)=1+\int_0^{-x}f(u)du,$ 两端再对 $x$ 求导得 $f'(x)=-f(-x),\tag{①}$ 上式两端对 $x$ 求导得 $f''(x)=f'(-x).\tag{②}$
又由①式得 $f'(-x)=-f(x)$，代入②式得 $f''(x)+f(x)=0,$ 解之得 $f(x)=C_1\cos x+C_2\sin x.$ 注意到 $f(0)=1,f'(0)=-1$ 得 $f(x)=\cos x-\sin x.$
【例4】设 $f(x)$ 在 $(-\infty,+\infty)$ 上有定义，$f'(0)=2$，对任意的 $x,y$，有 $f(x+y)=e^xf(y)+e^yf(x)$，求 $f(x)$。
【解】$f'(x)=\lim\limits_{\Delta x\to0}\frac{f(x+\Delta x)-f(x)}{\Delta x}=\lim\limits_{\Delta x\to0}\frac{e^xf(\Delta x)+e^{\Delta x}f(x)-f(x)}{\Delta x}=e^x\lim\limits_{\Delta x\to0}\frac{f(\Delta x)}{\Delta x}+f(x)=e^xf'(0)+f(x)\qquad(f(0)=0)=2e^x+f(x),$
解得 $f(x)=2xe^x.$` },
      { p: 137, md: R`【例5】设函数 $y=y(x)$ 在 $(-\infty,+\infty)$ 内具有二阶导数，且 $y'\neq0$，$x=x(y)$ 是 $y=y(x)$ 的反函数。
(1) 试将 $x=x(y)$ 所满足的微分方程 $\frac{d^2x}{dy^2}+(y+\sin x)\left(\frac{dx}{dy}\right)^3=0$ 变换为 $y=y(x)$ 满足的微分方程；
(2) 求变换后的微分方程满足初始条件 $y(0)=0,y'(0)=\frac32$ 的解。
【解】(1) $\frac{dx}{dy}=\frac{1}{y'},$ $\frac{d^2x}{dy^2}=\frac{d}{dx}\left(\frac1{y'}\right)\frac{dx}{dy}=-\frac{y''}{y'^2}\frac1{y'}=-\frac{y''}{y'^3},$
将以上两式代入原方程得 $y''-y=\sin x.$
(2) 特征方程为 $r^2-1=0$，$r=\pm1$，非齐次待定特解为 $y^*=A\cos x+B\sin x.$ 代入 $y''-y=\sin x$ 得，$A=0,B=-\frac12$。则非齐次方程通解为 $y=C_1e^x+C_2e^{-x}-\frac12\sin x.$ 由 $y(0)=0,y'(0)=\frac32$ 可得 $C_1=1,C_2=-1$，则所求特解为 $y=e^x-e^{-x}-\frac12\sin x.$
##### 题型三 应用题
【例1】设曲线 $y=f(x)$ 为连接 $A(1,0)$ 与 $B(0,1)$ 的弧段且位于弦 $AB$ 的上方（如下图），$P(x,y)$ 为其上任意一点，弦 $BP$ 与该曲线围成的面积为 $x^3$，试求该曲线方程。
【解】由题设可知 $x^3=\int_0^xf(t)dt-\frac x2[1+f(x)],$ 等式两端对 $x$ 求导得 $f'(x)-\frac1xf(x)=-6x-\frac1x,$ 由一阶线性微分方程通解公式得 $f(x)=Cx-6x^2+1.$ 由题设可知 $f(1)=0$，则 $C=5$，$f(x)=5x-6x^2+1.$
（图：曲线 $y=f(x)$ 连接 $B(0,1)$ 与 $A(1,0)$ 且位于弦 $AB$ 上方，点 $P(x,y)$ 在曲线上，弦 $BP$ 与曲线围成阴影区域）
【例2】设对任意 $x>0$，曲线 $y=f(x)$ 上点 $(x,f(x))$ 处的切线在 $y$ 轴上的截距等于 $\frac1x\int_0^xf(t)dt$，求 $f(x)$。
【解】曲线 $y=f(x)$ 在点 $(x,f(x))$ 处的切线方程为 $Y=f(x)=f'(x)(X-x).$ 令 $X=0$ 得 $Y=f(x)-xf'(x)$，于是
$$f(x)-xf'(x)=\frac1x\int_0^xf(t)dt,$$
即 $xf(x)-x^2f'(x)=\int_0^xf(t)dt,$` }
    ],
    quiz: [
      { q: R`微分方程中未知函数最高阶导数的阶数称为`, options: [R`阶`, R`次`, R`解`, R`通解`], answer: 0, explain: R`定义为方程的阶。` },
      { q: R`可分离变量方程 $g(y)dy=f(x)dx$ 的解法是`, options: [R`两端积分`, R`两端求导`, R`取对数`, R`作变量代换`], answer: 0, explain: R`两端积分 $\int g(y)dy=\int f(x)dx$。` },
      { q: R`一阶线性方程 $y'+p(x)y=Q(x)$ 的通解公式是`, options: [R`$y=e^{-\int p\,dx}\left[\int Qe^{\int p\,dx}dx+C\right]$`, R`$y=e^{\int p\,dx}\left[\int Qe^{-\int p\,dx}dx+C\right]$`, R`$y=\int Q\,dx+C$`, R`$y=e^{-p}\int Q\,dx+C$`], answer: 0, explain: R`一阶线性方程通解公式。` },
      { q: R`齐次方程 $y'=\varphi(\frac yx)$ 令 $u=\frac yx$ 后化为`, options: [R`$xu'=\varphi(u)-u$`, R`$u'=\varphi(u)$`, R`$xu'=\varphi(u)$`, R`$u'=\varphi(u)-u$`], answer: 0, explain: R`$y=ux$，$y'=u+xu'$。` },
      { q: R`二阶常系数齐次方程 $y''+py'+qy=0$ 特征根为二重实根 $r$ 时通解为`, options: [R`$(C_1+C_2x)e^{rx}$`, R`$C_1e^{r_1x}+C_2e^{r_2x}$`, R`$e^{\alpha x}(C_1\cos\beta x+C_2\sin\beta x)$`, R`$C_1e^{rx}$`], answer: 0, explain: R`二重实根的情形。` },
      { q: R`特征根为共轭复根 $\alpha\pm\beta i$ 时，齐次方程通解为`, options: [R`$e^{\alpha x}(C_1\cos\beta x+C_2\sin\beta x)$`, R`$C_1e^{\alpha x}+C_2e^{\beta x}$`, R`$(C_1+C_2x)e^{\alpha x}$`, R`$e^{\beta x}(C_1\cos\alpha x+C_2\sin\alpha x)$`], answer: 0, explain: R`共轭复根的情形。` },
      { q: R`非齐次方程 $y''+py'+qy=P_m(x)e^{\lambda x}$ 中，若 $\lambda$ 是特征方程的重根，则特解应设为`, options: [R`$x^2Q_m(x)e^{\lambda x}$`, R`$Q_m(x)e^{\lambda x}$`, R`$xQ_m(x)e^{\lambda x}$`, R`$Q_m(x)$`], answer: 0, explain: R`$k$ 取特征根重数，重根 $k=2$。` },
      { q: R`若 $y_1,y_2$ 是齐次方程的两个线性无关特解，则通解为`, options: [R`$C_1y_1+C_2y_2$`, R`$y_1+y_2$`, R`$C_1y_1-y_2$`, R`$y_1-y_2$`], answer: 0, explain: R`线性无关特解的线性组合。` },
      { q: R`伯努利方程 $y'+p(x)y=Q(x)y^n$ 通过令 $u=$ 化为一阶线性方程`, options: [R`$y^{1-n}$`, R`$y^n$`, R`$\frac yx$`, R`$\ln y$`], answer: 0, explain: R`令 $u=y^{1-n}$。` },
      { q: R`若 $y_1^*,y_2^*$ 是非齐次方程的两个特解，则 $y_2^*-y_1^*$ 是`, options: [R`齐次方程的解`, R`非齐次方程的解`, R`常数`, R`特解`], answer: 0, explain: R`两特解之差为齐次方程的解。` }
    ]
  };
})();
