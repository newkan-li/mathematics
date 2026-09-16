window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["gs03_s3"] = {
    id: "gs03_s3",
    ch: "第三章 一元函数积分学",
    title: "第四节 定积分应用",
    book: "《高等数学辅导讲义》",
    pages: [114, 117],
    img: "assets/img/gaoshu",
    content: [
      { p: 114, md: R`所围成（如右图），则其面积为
$$S=\iint_D1d\sigma=\int_\alpha^\beta d\theta\int_0^{\rho(\theta)}\rho\,d\rho=\frac{1}{2}\int_\alpha^\beta\rho^2(\theta)d\theta.$$
【注】平面域 $D$ 的面积直接用二重积分 $S=\iint_D1d\sigma$ 计算，然后根据积分域 $D$ 选择计算二重积分的方法（直角坐标、极坐标、奇偶性、对称性）。
**2. 空间体的体积**
1）旋转体的体积
旋转体的体积的一般问题是平面域 $D$ 绕直线 $L:ax+by+c=0$（该直线不穿过区域 $D$，如右图）旋转所得旋转体体积，记该体积为 $V$。解决该问题利用二重积分比利用一元定积分的元素法方便。在区域 $D$ 中取一小区域 $(d\sigma)$，其面积记为 $d\sigma$，$(x,y)$ 为区域 $(d\sigma)$ 中的任一点，则该小区域绕直线 $L$ 旋转所得环状体的体积近似值为
$$dV=2\pi r(x,y)d\sigma,$$
其中 $r(x,y)$ 为点 $(x,y)$ 到直线 $L$ 的距离，即 $r(x,y)=\frac{|ax+by+c|}{\sqrt{a^2+b^2}}.$ 则
$$V=2\pi\iint_Dr(x,y)d\sigma.$$
特别地，若区域 $D$ 由曲线 $y=f(x)(f(x)\geqslant0)$，和直线 $x=a$，$x=b(0\leqslant a<b)$ 及 $x$ 轴所围成（如右图），则
(1) 区域 $D$ 绕 $x$ 轴旋转（$r(x,y)=y$）一周所得旋转体的体积为
$$V_x=2\pi\iint_Dy\,d\sigma=2\pi\int_a^bdx\int_0^{f(x)}y\,dy=\pi\int_a^bf^2(x)dx.$$
(2) 区域 $D$ 绕 $y$ 轴旋转（$r(x,y)=x$）一周所得旋转体的体积为
$$V_y=2\pi\iint_Dx\,d\sigma=2\pi\int_a^bdx\int_0^{f(x)}x\,dy=2\pi\int_a^bxf(x)dx.$$
【注】平面域 $D$ 绕直线 $L:ax+by+c=0$（该直线不穿过区域 $D$）旋转所得旋转体体积直接用二重积分 $V=2\pi\iint_Dr(x,y)d\sigma$ 计算，然后选择计算二重积分的方法（直角坐标、极坐标、奇偶性、对称性）。用这个方法比用一元的元素法简单得多。
2）已知横截面面积的体积 $V=\int_a^bS(x)dx.$
**3. 曲线弧长（数三不要求）**
1）设曲线段 $C$ 由直角坐标方程 $y=y(x)(a\leqslant x\leqslant b)$ 给出，其中 $y(x)$ 在 $[a,b]$ 上有一阶连续导数，则该曲线段的弧长为 $s=\int_a^b\sqrt{1+y'^2}dx.$
2）设曲线段 $C$ 由参数方程 $\begin{cases}x=x(t),\\y=y(t)\end{cases}(\alpha\leqslant t\leqslant\beta)$ 给出，其中 $x(t),y(t)$ 在 $[\alpha,\beta]$ 上有` },
      { p: 115, md: R`一阶连续导数，则该曲线段的弧长为 $s=\int_\alpha^\beta\sqrt{x'^2(t)+y'^2(t)}dt.$
3）设曲线段 $C$ 由极坐标方程 $\rho=\rho(\theta)(\alpha\leqslant\theta\leqslant\beta)$ 给出，其中 $\rho(\theta)$ 在 $[\alpha,\beta]$ 上有一阶连续导数，则该曲线段的弧长为 $s=\int_\alpha^\beta\sqrt{\rho^2(\theta)+\rho'^2(\theta)}d\theta.$
**4. 旋转体侧面积（数三不要求）**
曲线 $y=f(x)(f(x)\geqslant0)$ 和直线 $x=a,x=b(0\leqslant a<b)$ 及 $x$ 轴所围成区域绕 $x$ 轴旋转所得旋转体的侧面积为 $S=2\pi\int_a^bf(x)\sqrt{1+f'^2(x)}dx.$
#### （二）物理应用（数三不要求）
物理应用主要有以下三个问题：1. 变力沿直线所作的功；2. 液体的压力；3. 引力。
### 二、常考题型的方法与技巧
#### 题型一 几何应用
【例1】设 $f(x)=\int_{-1}^x(1-|t|)dt(x\geqslant-1)$，求曲线 $y=f(x)$ 与 $x$ 轴所围图形的面积。
【解】$f(x)=\begin{cases}\int_{-1}^x(1+t)dt,&-1\leqslant x\leqslant0,\\\int_{-1}^0(1+t)dt+\int_0^x(1-t)dt,&x>0\end{cases}=\begin{cases}\frac{1}{2}(1+x)^2,&-1\leqslant x\leqslant0,\\\frac{1}{2}(1+2x-x^2),&x>0.\end{cases}$
令 $1+2x-x^2=0$，得 $x_{1,2}=1\pm\sqrt{2}$，从而 $S=\int_{-1}^0\frac{1}{2}(1+x)^2dx+\int_0^{1+\sqrt{2}}\frac{1}{2}(1+2x-x^2)dx=1+\frac{2}{3}\sqrt{2}.$
【例2】设平面图形 $A$ 由 $x^2+y^2\leqslant2x$ 与 $y\geqslant x$ 所确定，求图形 $A$ 绕 $x=2$ 旋转一周所得旋转体的体积。
【解1】利用一元函数的微元法，对 $x$ 积分 $dV=2\pi(2-x)(\sqrt{2x-x^2}-x)dx,$` },
      { p: 116, md: R`$$V=2\pi\int_0^1(2-x)(\sqrt{2x-x^2}-x)dx=2\pi\left[\int_0^1(1-x)\sqrt{2x-x^2}dx+\int_0^1\sqrt{2x-x^2}dx-\int_0^1(2-x)x\,dx\right]=2\pi\left[\frac{1}{3}(2x-x^2)^{\frac{3}{2}}\bigg|_0^1+\frac{\pi}{4}-\frac{2}{3}\right]=\frac{\pi^2}{2}-\frac{2\pi}{3},$$
其中 $\int_0^1\sqrt{2x-x^2}dx=\frac{\pi}{4}$ 为 $\frac{1}{4}$ 单位圆面积。
【解2】利用一元函数的微元法，对 $y$ 积分 $dV=\pi[(2-(1-\sqrt{1-y^2}))^2-(2-y)^2]dy,$
$$V=\pi\int_0^1[(2-(1-\sqrt{1-y^2}))^2]dy-\pi\int_0^1(2-y)^2dy=\pi\int_0^1(2-y^2+2\sqrt{1-y^2})dy-\frac{7}{3}\pi=\frac{5}{3}\pi+\frac{1}{2}\pi^2-\frac{7}{3}\pi=\frac{\pi^2}{2}-\frac{2\pi}{3},$$
其中 $\int_0^1\sqrt{1-y^2}dy=\frac{\pi}{4}$ 为 $\frac{1}{4}$ 单位圆面积。
【解3】利用二重积分 $V_{x=2}=2\pi\iint_Dr(x,y)d\sigma=2\pi\iint_D(2-x)d\sigma=2\pi\int_0^1dx\int_x^{\sqrt{2x-x^2}}(2-x)dy=2\pi\int_0^1(2-x)(\sqrt{2x-x^2}-x)dx,$ 以下同解 1。
【例3】过点 $(1,0)$ 作曲线 $y=x^2$ 的切线，该切线与曲线 $y=x^2$ 及 $x$ 轴围成平面图形 $D$。
(1) 求 $D$ 的面积 $A$；(2) 求 $D$ 绕 $x$ 轴旋转一周所得旋转体的体积 $V$；(3) 求 $D$ 绕 $y$ 轴旋转一周所得旋转体的体积 $V$；(4) 求 $D$ 绕直线 $y=4$ 旋转一周所得旋转体的体积 $V$。
【解】(1) 设过点 $(1,0)$ 的曲线 $y=x^2$ 的切线方程为 $y=k(x-1)$，其切点为 $(x_0,y_0)$，则 $\begin{cases}x_0^2=k(x_0-1),\\2x_0=k.\end{cases}$ 由上式解得 $x_0=2,k=4$，切线方程为 $y=4(x-1)$，从而 $A=\iint_D1d\sigma=\int_0^4dy\int_{\frac{y}{4}}^{\sqrt{y}}dx=\frac{2}{3}.$
(2) $V_x=2\pi\iint_Dr(x,y)d\sigma=2\pi\iint_Dy\,d\sigma=2\pi\int_0^4dy\int_{\frac{y}{4}}^{\sqrt{y}}y\,dx=\frac{16}{15}\pi.$
(3) $V_y=2\pi\iint_Dr(x,y)d\sigma=2\pi\iint_Dx\,d\sigma=2\pi\int_0^4dy\int_{\frac{y}{4}}^{\sqrt{y}}x\,dx=\frac{4}{3}\pi.$` },
      { p: 117, md: R`(4) $V_{y=4}=2\pi\iint_Dr(x,y)d\sigma=2\pi\iint_D(4-y)d\sigma=2\pi\int_0^4dy\int_{\frac{y}{4}}^{\sqrt{y}}(4-y)dx=\frac{64}{15}\pi.$
【例4】设对数螺线 $\rho=e^\theta(0\leqslant\theta\leqslant\pi)$ 及射线 $\theta=0$ 和 $\theta=\pi$ 围成平面图形 $D$。
(1) 求 $D$ 的面积 $A$；(2) 求 $D$ 绕极轴旋转一周所得旋转体的体积 $V$。
【解】(1) $S=\iint_D1d\sigma=\int_0^\pi d\theta\int_0^{e^\theta}\rho\,d\rho=\frac{1}{4}(e^{2\pi}-1).$
(2) $V=2\pi\iint_Dr(x,y)d\sigma=2\pi\iint_Dy\,d\sigma=2\pi\int_0^\pi d\theta\int_0^{e^\theta}\rho\sin\theta\,\rho\,d\rho=\frac{2\pi}{3}\int_0^\pi e^{3\theta}\sin\theta\,d\theta=\frac{\pi}{15}(e^{3\pi}+1).$
【例5】设星形线 $\begin{cases}x=a\cos^3t\\y=a\sin^3t\end{cases}$，求：(1) 它所围的面积；(2) 它的周长；(3) 它绕 $x$ 轴旋转而成旋转体的体积和侧面积。
【解】(1) 面积 $A=4\int_0^ay\,dx=4\int_{\frac{\pi}{2}}^0a\sin^3t(-3a\sin t\cdot\cos^2t)dt=12\int_0^{\frac{\pi}{2}}a^2(\sin^4t-\sin^6t)dt=\frac{3\pi a^2}{8}.$
(2) 弧长：$L=4\int_0^{\frac{\pi}{2}}\sqrt{x'^2+y'^2}dt=4\int_0^{\frac{\pi}{2}}3a\sin t\cdot\cos t\,dt=6a.$
(3) 体积：$V_x=2\int_0^a\pi y^2dx=6\pi a^3\int_0^{\frac{\pi}{2}}\sin^7t(1-\sin^2t)dt=\frac{32}{105}\pi a^3.$
旋转体侧面积：$S=2\int_0^{\frac{\pi}{2}}2\pi y\sqrt{x'^2+y'^2}dt=12\pi a^2\int_0^{\frac{\pi}{2}}\sin^4t\cos t\,dt=\frac{12}{5}\pi a^2.$
#### 题型二 物理应用
【例1】某闸门的形状与大小如下图所示，闸门的上部为矩形 $ABCD$，其中 $DE=EC=1\text{m}$，下部由二次抛物线与线段 $AB$ 所围成。当水面与闸门的上端相平时，欲使闸门矩形部分承受的水压力与闸门下部承受的水压力之比为 $5:4$，闸门矩形部分的高 $h$ 应为多少 $\text{m}$（米）？
【解】由题设可知抛物线的方程为 $y=x^2$。闸门矩形部分承受的水压力
$$P_1=2\int_1^{h+1}\rho g(h+1-y)dy=2\rho g\left[(h+1)y-\frac{y^2}{2}\right]\bigg|_1^{h+1}=\rho gh^2,$$
其中 $\rho$ 为水的密度，$g$ 为重力加速度。
闸门下部承受的水压力
$$P_2=2\int_0^1\rho g(h+1-y)\sqrt{y}dy=2\rho g\left[\frac{2}{3}(h+1)y^{\frac{3}{2}}-\frac{2}{5}y^{\frac{5}{2}}\right]\bigg|_0^1=4\rho g\left(\frac{1}{3}h+\frac{2}{15}\right).$$` }
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
      { q: R`定积分应用中，计算面积的"元素法"常用`, options: [R`二重积分`, R`三重积分`, R`曲线积分`, R`级数`], answer: 0, explain: R`利用 $\iint_D1\,d\sigma$ 更方便。` },
      { q: R`参数方程 $\begin{cases}x=x(t)\\y=y(t)\end{cases}(\alpha\leqslant t\leqslant\beta)$ 的弧长为`, options: [R`$\displaystyle\int_\alpha^\beta\sqrt{x'^2(t)+y'^2(t)}dt$`, R`$\displaystyle\int_\alpha^\beta[x'(t)+y'(t)]dt$`, R`$\displaystyle\int_\alpha^\beta\sqrt{x^2+y^2}dt$`, R`$\displaystyle\int_\alpha^\beta(x'y')dt$`], answer: 0, explain: R`参数方程弧长公式。` }
    ]
  };
})();
