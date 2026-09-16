window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["gs03_s3"] = {
    id: "gs03_s3",
    ch: "第三章 一元函数积分学",
    title: "第四节 定积分应用",
    book: "武忠祥《高等数学辅导讲义》",
    pages: [113, 117],
    img: "assets/img/gaoshu",
    content: [
      { p: 113, md: R`### 一、考试内容要点精讲
用定积分可计算几何量与物理量（面积、弧长、旋转体体积及侧面积、平行截面面积为已知的立体体积、变力做功、压力、引力、函数平均值等），常用“元素法”。

#### （一）几何应用
**1. 平面图形的面积** 计算面积时利用二重积分比一元元素法方便。设平面域 $D$，则 $S=\displaystyle\iint_D1\,d\sigma$。

1) 若 $D$ 由 $y=f(x)$，$y=g(x)\ (f\geqslant g)$，$x=a$，$x=b\ (a<b)$ 围成，则 $S=\displaystyle\int_a^b[f(x)-g(x)]dx$。
![面积 $S=\int_a^b[f-g]dx$](assets/img/figs/gaoshu/gs03-p113-1.jpg)

2) 若 $D$ 由 $\rho=\rho(\theta)$，$\theta=\alpha$，$\theta=\beta\ (\alpha<\beta)$ 围成，则 $S=\displaystyle\int_\alpha^\beta d\theta\int_0^{\rho(\theta)}\rho\,d\rho=\dfrac12\int_\alpha^\beta\rho^2(\theta)d\theta$。
![极坐标曲边扇形](assets/img/figs/gaoshu/gs03-p114-1.jpg)

【注】平面域面积直接用 $S=\displaystyle\iint_D1\,d\sigma$ 计算，再选二重积分的方法（直角坐标、极坐标、奇偶性、对称性）。` },
      { p: 114, md: R`**2. 空间体的体积**
1) 旋转体的体积：平面域 $D$ 绕直线 $L:ax+by+c=0$（不穿过 $D$）旋转，取微元 $d\sigma$ 与点 $(x,y)$，$dV=2\pi r(x,y)d\sigma$，其中 $r(x,y)=\dfrac{|ax+by+c|}{\sqrt{a^2+b^2}}$，则 $V=2\pi\displaystyle\iint_Dr(x,y)d\sigma$。
![绕直线 $L$ 旋转](assets/img/figs/gaoshu/gs03-p114-2.jpg)

特别地，$D$ 由 $y=f(x)\geqslant0$、$x=a,x=b\ (0\leqslant a<b)$ 及 $x$ 轴围成：
(1) 绕 $x$ 轴：$V_x=2\pi\displaystyle\iint_Dy\,d\sigma=\pi\int_a^bf^2(x)dx$；
(2) 绕 $y$ 轴：$V_y=2\pi\displaystyle\iint_Dx\,d\sigma=2\pi\int_a^bxf(x)dx$。
![绕 $x$ 轴旋转](assets/img/figs/gaoshu/gs03-p114-3.jpg)

【注】平面域绕直线旋转的体积直接用 $V=2\pi\displaystyle\iint_Dr(x,y)d\sigma$ 计算，再选二重积分方法，比一元元素法简单。

2) 已知横截面面积的体积：$V=\displaystyle\int_a^bS(x)dx$。
![已知横截面面积 $S(x)$](assets/img/figs/gaoshu/gs03-p114-4.jpg)

**3. 曲线弧长（数三不要求）**
1) 直角坐标 $y=y(x)$：$s=\displaystyle\int_a^b\sqrt{1+y'^2}dx$；
2) 参数方程：$s=\displaystyle\int_\alpha^\beta\sqrt{x'^2(t)+y'^2(t)}dt$；
3) 极坐标 $\rho=\rho(\theta)$：$s=\displaystyle\int_\alpha^\beta\sqrt{\rho^2(\theta)+\rho'^2(\theta)}d\theta$。` },
      { p: 115, md: R`**4. 旋转体侧面积（数三不要求）** $S=2\pi\displaystyle\int_a^bf(x)\sqrt{1+f'^2(x)}dx$。

#### （二）物理应用（数三不要求）
主要有：1. 变力沿直线所作的功；2. 液体的压力；3. 引力。

### 二、常考题型的方法与技巧
### 题型一　几何应用
【例1】设 $f(x)=\displaystyle\int_{-1}^x(1-|t|)dt\ (x\geqslant-1)$，求曲线 $y=f(x)$ 与 $x$ 轴所围图形的面积。
![例1 图形](assets/img/figs/gaoshu/gs03-p115-1.jpg)

【解】$f(x)=\begin{cases}\displaystyle\int_{-1}^x(1+t)dt,&-1\leqslant x\leqslant0\\\displaystyle\int_{-1}^0(1+t)dt+\int_0^x(1-t)dt,&x>0\end{cases}=\begin{cases}\dfrac12(1+x)^2,&-1\leqslant x\leqslant0\\\dfrac12(1+2x-x^2),&x>0\end{cases}$。令 $1+2x-x^2=0$ 得 $x=1\pm\sqrt2$，故 $S=\displaystyle\int_{-1}^0\dfrac12(1+x)^2dx+\int_0^{1+\sqrt2}\dfrac12(1+2x-x^2)dx=1+\dfrac{2\sqrt2}{3}$。

【例2】设平面图形 $A$ 由 $x^2+y^2\leqslant2x$ 与 $y\geqslant x$ 所确定，求 $A$ 绕 $x=2$ 旋转一周所得旋转体的体积。
![例2 区域与竖直条带](assets/img/figs/gaoshu/gs03-p116-1.jpg)

【解1】对 $x$ 积分：$dV=2\pi(2-x)(\sqrt{2x-x^2}-x)dx$，` },
      { p: 116, md: R`$V=2\pi\displaystyle\int_0^1(2-x)(\sqrt{2x-x^2}-x)dx=2\pi\left[\int_0^1(1-x)\sqrt{2x-x^2}dx+\int_0^1\sqrt{2x-x^2}dx-\int_0^1(2-x)x\,dx\right]=2\pi\left[\dfrac13(2x-x^2)^{\frac32}\Big|_0^1+\dfrac\pi4-\dfrac23\right]=\dfrac{\pi^2}{2}-\dfrac{2\pi}{3}$（其中 $\int_0^1\sqrt{2x-x^2}dx=\dfrac\pi4$ 为 $\dfrac14$ 单位圆面积）。

![例2 区域与水平条带](assets/img/figs/gaoshu/gs03-p116-2.jpg)
【解2】对 $y$ 积分：$dV=\pi[(2-(1-\sqrt{1-y^2}))^2-(2-y)^2]dy$，$V=\pi\displaystyle\int_0^1[(1+\sqrt{1-y^2})^2-(2-y)^2]dy=\pi\int_0^1(2-y^2+2\sqrt{1-y^2})dy-\dfrac73\pi=\dfrac53\pi+\dfrac12\pi^2-\dfrac73\pi=\dfrac{\pi^2}{2}-\dfrac{2\pi}{3}$。

【解3】二重积分：$V_{x=2}=2\pi\displaystyle\iint_D(2-x)d\sigma=2\pi\int_0^1dx\int_x^{\sqrt{2x-x^2}}(2-x)dy=2\pi\int_0^1(2-x)(\sqrt{2x-x^2}-x)dx$，以下同解1。

【例3】过点 $(1,0)$ 作曲线 $y=x^2$ 的切线，该切线与曲线及 $x$ 轴围成平面图形 $D$。(1) 求 $D$ 的面积 $A$；(2) 求 $D$ 绕 $x$ 轴旋转体的体积 $V$；(3) 求 $D$ 绕 $y$ 轴旋转体的体积 $V$；(4) 求 $D$ 绕直线 $y=4$ 旋转体的体积 $V$。
![例3 切线与区域 $D$](assets/img/figs/gaoshu/gs03-p116-3.jpg)

【解】(1) 设切线 $y=k(x-1)$，切点 $(x_0,y_0)$，则 $\begin{cases}x_0^2=k(x_0-1)\\2x_0=k\end{cases}$，解得 $x_0=2,k=4$，切线 $y=4(x-1)$，故 $A=\displaystyle\iint_D1\,d\sigma=\int_0^4dy\int_{\sqrt y}^{\frac y4+1}dx=\dfrac23$。
(2) $V_x=2\pi\displaystyle\iint_Dy\,d\sigma=2\pi\int_0^4dy\int_{\sqrt y}^{\frac y4+1}y\,dx=\dfrac{16}{15}\pi$。
(3) $V_y=2\pi\displaystyle\iint_Dx\,d\sigma=2\pi\int_0^4dy\int_{\sqrt y}^{\frac y4+1}x\,dx=\dfrac43\pi$。` },
      { p: 117, md: R`(4) $V_{y=4}=2\pi\displaystyle\iint_D(4-y)d\sigma=2\pi\int_0^4dy\int_{\sqrt y}^{\frac y4+1}(4-y)dx=\dfrac{64}{15}\pi$。

【例4】设对数螺线 $\rho=e^\theta\ (0\leqslant\theta\leqslant\pi)$ 及射线 $\theta=0,\theta=\pi$ 围成平面图形 $D$。(1) 求 $D$ 的面积 $A$；(2) 求 $D$ 绕极轴旋转一周所得旋转体的体积 $V$。
![例4 对数螺线围成的 $D$](assets/img/figs/gaoshu/gs03-p117-1.jpg)

【解】(1) $S=\displaystyle\iint_D1\,d\sigma=\int_0^\pi d\theta\int_0^{e^\theta}\rho\,d\rho=\dfrac14(e^{2\pi}-1)$。
(2) $V=2\pi\displaystyle\iint_Dy\,d\sigma=2\pi\int_0^\pi d\theta\int_0^{e^\theta}\rho\sin\theta\cdot\rho\,d\rho=\dfrac{2\pi}{3}\int_0^\pi e^{3\theta}\sin\theta\,d\theta=\dfrac{\pi}{15}(e^{3\pi}+1)$。

【例5】设星形线 $\begin{cases}x=a\cos^3t\\y=a\sin^3t\end{cases}$，求：(1) 所围面积；(2) 周长；(3) 绕 $x$ 轴旋转体的体积和侧面积。
![例5 星形线](assets/img/figs/gaoshu/gs03-p117-2.jpg)

【解】(1) 面积 $A=4\displaystyle\int_0^ay\,dx=4\int_{\frac\pi2}^0a\sin^3t(-3a\sin t\cos^2t)dt=12\int_0^{\frac\pi2}a^2(\sin^4t-\sin^6t)dt=\dfrac{3\pi a^2}{8}$。
(2) 弧长 $L=4\displaystyle\int_0^{\frac\pi2}\sqrt{x'^2+y'^2}dt=4\int_0^{\frac\pi2}3a\sin t\cos t\,dt=6a$。
(3) 体积 $V_x=2\displaystyle\int_0^a\pi y^2dx=6\pi a^3\int_0^{\frac\pi2}\sin^7t(1-\sin^2t)dt=\dfrac{32}{105}\pi a^3$；侧面积 $S=2\displaystyle\int_0^{\frac\pi2}2\pi y\sqrt{x'^2+y'^2}dt=12\pi a^2\int_0^{\frac\pi2}\sin^4t\cos t\,dt=\dfrac{12}{5}\pi a^2$。

### 题型二　物理应用
【例1】某闸门上部为矩形 $ABCD$，$DE=EC=1\text{m}$，下部由二次抛物线与线段 $AB$ 围成。当水面与闸门上端相平时，欲使矩形部分与下部承受的水压力之比为 $5:4$，矩形部分的高 $h$ 应为多少米？

【解】由题设抛物线为 $y=x^2$。矩形部分水压力 $P_1=2\displaystyle\int_1^{h+1}\rho g(h+1-y)dy=2\rho g\left[(h+1)y-\dfrac{y^2}{2}\right]\Big|_1^{h+1}=\rho gh^2$。下部水压力 $P_2=2\displaystyle\int_0^1\rho g(h+1-y)\sqrt y\,dy=2\rho g\left[\dfrac23(h+1)y^{\frac32}-\dfrac25y^{\frac52}\right]\Big|_0^1=4\rho g\left(\dfrac13h+\dfrac{2}{15}\right)$。` }
    ],
    quiz: [
      { q: R`由 $y=f(x)\geqslant g(x)$、$x=a,x=b$ 围成的平面图形面积为`, options: [R`$\displaystyle\int_a^b[f(x)-g(x)]dx$`, R`$\displaystyle\int_a^b[g(x)-f(x)]dx$`, R`$\displaystyle\int_a^b f(x)g(x)dx$`, R`$\displaystyle\int_a^b[f(x)+g(x)]dx$`], answer: 0, explain: R`上减下积分。` },
      { q: R`区域 $D$ 绕 $x$ 轴旋转一周的体积（$D$ 由 $y=f(x)\geqslant0$ 与 $x$ 轴、$x=a,x=b$ 围成）为`, options: [R`$\pi\displaystyle\int_a^bf^2(x)dx$`, R`$2\pi\displaystyle\int_a^bxf(x)dx$`, R`$\pi\displaystyle\int_a^bf(x)dx$`, R`$\displaystyle\int_a^bf^2(x)dx$`], answer: 0, explain: R`绕 $x$ 轴体积公式。` },
      { q: R`区域 $D$ 绕 $y$ 轴旋转一周的体积为`, options: [R`$2\pi\displaystyle\int_a^bxf(x)dx$`, R`$\pi\displaystyle\int_a^bf^2(x)dx$`, R`$\pi\displaystyle\int_a^bxf(x)dx$`, R`$\displaystyle\int_a^bxf(x)dx$`], answer: 0, explain: R`绕 $y$ 轴（柱壳法）。` },
      { q: R`极坐标下由 $\rho=\rho(\theta),\theta=\alpha,\theta=\beta$ 围成的面积为`, options: [R`$\dfrac12\displaystyle\int_\alpha^\beta\rho^2(\theta)d\theta$`, R`$\displaystyle\int_\alpha^\beta\rho(\theta)d\theta$`, R`$\displaystyle\int_\alpha^\beta\rho^2(\theta)d\theta$`, R`$\dfrac12\displaystyle\int_\alpha^\beta\rho(\theta)d\theta$`], answer: 0, explain: R`极坐标面积公式。` },
      { q: R`已知横截面面积的立体体积为`, options: [R`$\displaystyle\int_a^bS(x)dx$`, R`$\displaystyle\int_a^bS^2(x)dx$`, R`$\pi\displaystyle\int_a^bS(x)dx$`, R`$2\pi\displaystyle\int_a^bS(x)dx$`], answer: 0, explain: R`截面面积积分。` },
      { q: R`直角坐标下曲线 $y=y(x)\ (a\leqslant x\leqslant b)$ 的弧长为`, options: [R`$\displaystyle\int_a^b\sqrt{1+y'^2}dx$`, R`$\displaystyle\int_a^b\sqrt{1+y^2}dx$`, R`$\displaystyle\int_a^b(1+y')dx$`, R`$\displaystyle\int_a^by'\,dx$`], answer: 0, explain: R`弧长公式。` },
      { q: R`曲线 $y=f(x)\geqslant0$ 绕 $x$ 轴旋转体的侧面积为`, options: [R`$2\pi\displaystyle\int_a^bf(x)\sqrt{1+f'^2(x)}dx$`, R`$\pi\displaystyle\int_a^bf^2(x)dx$`, R`$2\pi\displaystyle\int_a^bf^2(x)dx$`, R`$2\pi\displaystyle\int_a^bf(x)dx$`], answer: 0, explain: R`旋转体侧面积公式。` },
      { q: R`区域 $D$ 绕直线 $L$ 旋转的体积用二重积分表示为`, options: [R`$V=2\pi\displaystyle\iint_Dr(x,y)d\sigma$`, R`$V=\pi\displaystyle\iint_Dr^2(x,y)d\sigma$`, R`$V=\displaystyle\iint_Dr(x,y)d\sigma$`, R`$V=2\pi\displaystyle\iint_Dd\sigma$`], answer: 0, explain: R`其中 $r$ 为点到直线距离。` },
      { q: R`定积分应用中，计算面积的“元素法”常用`, options: [R`二重积分`, R`三重积分`, R`曲线积分`, R`级数`], answer: 0, explain: R`利用 $\iint_D1\,d\sigma$ 更方便。` },
      { q: R`参数方程 $\begin{cases}x=x(t)\\y=y(t)\end{cases}(\alpha\leqslant t\leqslant\beta)$ 的弧长为`, options: [R`$\displaystyle\int_\alpha^\beta\sqrt{x'^2(t)+y'^2(t)}dt$`, R`$\displaystyle\int_\alpha^\beta[x'(t)+y'(t)]dt$`, R`$\displaystyle\int_\alpha^\beta\sqrt{x^2+y^2}dt$`, R`$\displaystyle\int_\alpha^\beta(x'y')dt$`], answer: 0, explain: R`参数方程弧长公式。` }
    ]
  };
})();
