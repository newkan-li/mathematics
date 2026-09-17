window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q660_s22"] = {
    id: "q660_s22",
    ch: "660题 · 填空题 · 线性代数",
    title: "填空题 第 516–520 题（全书完）",
    probTitle: "填空题（含原书详解）",
    book: "《数学基础过关660题（数学二）》",
    problems: [
      { n: 516, q: R`已知 $\boldsymbol A=\begin{bmatrix}0&1&0\\0&0&1\\1&0&0\end{bmatrix}$ 和 $\boldsymbol B=\begin{bmatrix}2&0&0\\0&1&0\\0&0&-2\end{bmatrix}$ 合同，求一个使 $\boldsymbol C^{\mathrm T}\boldsymbol{AC}=\boldsymbol B$ 的可逆矩阵 $\boldsymbol C=\underline{\qquad}$。`, a: R`$\begin{bmatrix}1&0&1\\0&1&0\\1&0&-1\end{bmatrix}$ 或 $\begin{bmatrix}1&0&-1\\0&1&0\\1&0&1\end{bmatrix}$`, sol: R`【分析】对二次型 $\boldsymbol x^{\mathrm T}\boldsymbol{Ax}=2x_1x_3+x_2^2$ 用配方法，令
$$\begin{cases}x_1=y_1+y_3\\x_2=y_2\\x_3=y_1-y_3\end{cases}\quad\text{即}\quad\boldsymbol x=\boldsymbol{Cy},\ \boldsymbol C=\begin{bmatrix}1&0&1\\0&1&0\\1&0&-1\end{bmatrix},$$
则 $\boldsymbol x^{\mathrm T}\boldsymbol{Ax}=2(y_1+y_3)(y_1-y_3)+y_2^2=2y_1^2+y_2^2-2y_3^2$，故 $\boldsymbol C^{\mathrm T}\boldsymbol{AC}=\boldsymbol B$。
【评注】答案不唯一，如取 $x_1=y_1-y_3,x_3=y_1+y_3$ 则 $\boldsymbol C=\begin{bmatrix}1&0&-1\\0&1&0\\1&0&1\end{bmatrix}$。` },
      { n: 517, q: R`若二次型 $f(x_1,x_2,x_3)=ax_1^2+4x_2^2+ax_3^2+6x_1x_2+2x_2x_3$ 是正定的，则 $a$ 的取值范围是 $\underline{\qquad}$。`, a: R`$a>\frac52$`, sol: R`【分析】二次型矩阵 $\boldsymbol A=\begin{bmatrix}a&3&0\\3&4&1\\0&1&a\end{bmatrix}$，正定 $\iff$ 顺序主子式全大于零：
$$\Delta_1=a>0,\quad\Delta_2=\begin{vmatrix}a&3\\3&4\end{vmatrix}=4a-9>0,\quad\Delta_3=|\boldsymbol A|=4a^2-10a=a(4a-10)>0.$$
综合得 $a>\frac52$。
【评注】正定的必要条件 $a_{ii}>0$、$|\boldsymbol A|>0$；具体数值二次型一般用顺序主子式判定。` },
      { n: 518, q: R`设 $\boldsymbol\alpha=(1,0,1)^{\mathrm T}$，$\boldsymbol A=\boldsymbol\alpha\boldsymbol\alpha^{\mathrm T}$，若 $\boldsymbol B=(k\boldsymbol E+\boldsymbol A)^2$ 是正定矩阵，则 $k$ 的取值范围是 $\underline{\qquad}$。`, a: R`$k<-2$ 或 $k>0$`, sol: R`【分析】$\boldsymbol A=\begin{bmatrix}1&0&1\\0&0&0\\1&0&1\end{bmatrix}$，$|\lambda\boldsymbol E-\boldsymbol A|=\lambda^2(\lambda-2)$，$\boldsymbol A$ 的特征值为 $2,0,0$，故 $k\boldsymbol E+\boldsymbol A$ 的特征值为 $k+2,k,k$。
$\boldsymbol B=(k\boldsymbol E+\boldsymbol A)^2$ 的特征值为 $(k+2)^2,k^2,k^2$。$\boldsymbol B$ 正定 $\iff$ 特征值全大于零 $\iff(k+2)^2>0,k^2>0$，即 $k<-2$ 或 $k>0$。
（注：原书 $\boldsymbol B=(k\boldsymbol E+\boldsymbol A)^*$ 情形下，$\boldsymbol B$ 的特征值为 $k^2,k(k+2),k(k+2)$，同样得 $k<-2$ 或 $k>0$。）` },
      { n: 519, q: R`设 $\boldsymbol A$ 是三阶实对称矩阵，满足 $\boldsymbol A^3=2\boldsymbol A^2+5\boldsymbol A-6\boldsymbol E$，若 $k\boldsymbol E+\boldsymbol A$ 是正定阵，则 $k$ 的取值范围是 $\underline{\qquad}$。`, a: R`$k>2$`, sol: R`【分析】由 $\boldsymbol A^3-2\boldsymbol A^2-5\boldsymbol A+6\boldsymbol E=\boldsymbol O$，设 $\boldsymbol A$ 的特征值为 $\lambda$，则 $\lambda^3-2\lambda^2-5\lambda+6=0$，因式分解 $(\lambda-1)(\lambda+2)(\lambda-3)=0$，故 $\boldsymbol A$ 的特征值取自 $1,-2,3$。
$k\boldsymbol E+\boldsymbol A$ 的特征值取自 $k+1,k-2,k+3$。要使其全大于零，需 $k-2>0$，即 $k>2$。` },
      { n: 520, q: R`设 $\boldsymbol A$ 是 $m\times n$ 矩阵，$\boldsymbol E$ 是 $n$ 阶单位阵，矩阵 $\boldsymbol B=-a\boldsymbol E+\boldsymbol A^{\mathrm T}\boldsymbol A$ 是正定阵，则 $a$ 的取值范围是 $\underline{\qquad}$。`, a: R`$a<0$`, sol: R`【分析】$\boldsymbol B^{\mathrm T}=(-a\boldsymbol E+\boldsymbol A^{\mathrm T}\boldsymbol A)^{\mathrm T}=\boldsymbol B$，$\boldsymbol B$ 是对称阵。
$\boldsymbol B$ 正定 $\iff$ 对任意 $\boldsymbol x\neq\boldsymbol 0$，$\boldsymbol x^{\mathrm T}\boldsymbol{Bx}=-a\boldsymbol x^{\mathrm T}\boldsymbol x+(\boldsymbol{Ax})^{\mathrm T}(\boldsymbol{Ax})>0$。
因 $\boldsymbol x\neq\boldsymbol 0$ 时 $\boldsymbol x^{\mathrm T}\boldsymbol x>0$、$(\boldsymbol{Ax})^{\mathrm T}(\boldsymbol{Ax})\geqslant0$，故只需 $-a>0$，即 $a<0$。` }
    ]
  };
})();
