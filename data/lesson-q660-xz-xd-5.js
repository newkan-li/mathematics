window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q660_s12"] = {
    id: "q660_s12",
    ch: "660题 · 选择题 · 线性代数",
    title: "选择题 第 301–310 题（选择题完）",
    probTitle: "选择题（含原书详解）",
    book: "《数学基础过关660题（数学二）》",
    problems: [
      { n: 301, q: R`二次型 $f(x_1,x_2,x_3)=x_1^2+5x_2^2+x_3^2-4x_1x_2+2x_2x_3$ 的标准形可以是
(A) $y_1^2+4y_2^2$。 (B) $y_1^2-6y_2^2+2y_3^2$。 (C) $y_1^2-y_2^2$。 (D) $y_1^2+4y_2^2+y_3^2$。`, a: R`(A)`, sol: R`【分析】用配方法：
$$f=(x_1^2-4x_1x_2+4x_2^2)+(x_2^2+2x_2x_3+x_3^2)=(x_1-2x_2)^2+(x_2+x_3)^2,$$
故正惯性指数 $p=2$，负惯性指数 $q=0$，与 (A) 相同。选 (A)。
【评注】标准形不唯一，只要正、负惯性指数相同即可；$y_2^2+y_3^2$、$4y_1^2+9y_2^2$ 等也都是 $f$ 的标准形。` },
      { n: 302, q: R`二次型 $f(x_1,x_2,x_3)=(x_1+x_2)^2+(2x_1+3x_2+x_3)^2-5(x_2+x_3)^2$ 的规范形是
(A) $y_1^2+y_2^2-5y_3^2$。 (B) $y_2^2-y_3^2$。 (C) $y_1^2+y_2^2-y_3^2$。 (D) $y_1^2+y_2^2$。`, a: R`(B)`, sol: R`【分析】规范形中平方项系数只能是 $1,-1,0$，排除 (A)。整理 $f$：
$$f=5x_1^2+5x_2^2-4x_3^2+14x_1x_2+4x_1x_3-4x_2x_3.$$
计算 $|\lambda\boldsymbol E-\boldsymbol A|=\lambda(\lambda+6)(\lambda-12)$，特征值为 $12,-6,0$，故 $p=1,q=1$，规范形为 $y_1^2-y_2^2$（与 (B) 等价）。选 (B)。
（配方法：$f=5\left(x_1+\frac75x_2+\frac25x_3\right)^2-\frac{24}{5}(x_2+x_3)^2$，同样得 $p=1,q=1$。）
【评注】规范形唯一，由正、负惯性指数确定；注意所用变换必须可逆。` },
      { n: 303, q: R`对于 $n$ 元二次型 $\boldsymbol x^{\mathrm T}\boldsymbol{Ax}$，下述命题中正确的是
(A) 化 $\boldsymbol x^{\mathrm T}\boldsymbol{Ax}$ 为标准形的坐标变换是唯一的。
(B) 化 $\boldsymbol x^{\mathrm T}\boldsymbol{Ax}$ 为规范形的坐标变换是唯一的。
(C) $\boldsymbol x^{\mathrm T}\boldsymbol{Ax}$ 的标准形是唯一的。
(D) $\boldsymbol x^{\mathrm T}\boldsymbol{Ax}$ 的规范形是唯一的。`, a: R`(D)`, sol: R`【分析】化标准形可用正交变换法或配方法，标准形与所用坐标变换都不唯一，(A)(C) 不正确；化规范形的坐标变换也不唯一，(B) 不正确。
规范形由二次型的正、负惯性指数确定，而正、负惯性指数在可逆坐标变换下不变（不计 $1,-1,0$ 的排列），故规范形唯一，(D) 正确。选 (D)。
【评注】惯性定理：规范形唯一；标准形、坐标变换均不唯一。` },
      { n: 304, q: R`下列矩阵中 $\boldsymbol A$ 与 $\boldsymbol B$ 合同的是
(A) $\boldsymbol A=\begin{bmatrix}1&1\\1&1\end{bmatrix}$，$\boldsymbol B=\begin{bmatrix}0&1\\1&2\end{bmatrix}$。 (B) $\boldsymbol A=\begin{bmatrix}1&2\\2&1\end{bmatrix}$，$\boldsymbol B=\begin{bmatrix}2&1\\1&2\end{bmatrix}$。
(C) $\boldsymbol A=\begin{bmatrix}1&0&1\\0&1&0\\1&0&1\end{bmatrix}$，$\boldsymbol B=\begin{bmatrix}1&0&0\\0&3&0\\0&0&0\end{bmatrix}$。 (D) $\boldsymbol A=\begin{bmatrix}0&2&0\\2&0&0\\0&0&1\end{bmatrix}$，$\boldsymbol B=\begin{bmatrix}-1&0&0\\0&-2&0\\0&0&-2\end{bmatrix}$。`, a: R`(C)`, sol: R`【分析】实对称矩阵合同的充要条件是有相同的正、负惯性指数；必要条件是秩相等且 $|\boldsymbol A|,|\boldsymbol B|$ 同号。
(A) $r(\boldsymbol A)=1\neq r(\boldsymbol B)=2$，不合同；(B) $|\boldsymbol A|=-3<0$ 而 $|\boldsymbol B|=3>0$，不同号，不合同。
(C) $\boldsymbol A$ 的特征值为 $1,2,0$，$\boldsymbol B$ 的特征值为 $1,3,0$，正、负惯性指数相同（$p=2,q=0$），故合同。选 (C)。
(D) $\boldsymbol A$ 的特征值为 $1,2,-2$，$\boldsymbol B$ 的特征值为 $-1,-2,-2$，正、负惯性指数不同，不合同。
【评注】$\boldsymbol A\simeq\boldsymbol B\iff$ 正、负惯性指数相同 $\iff$ 特征值正负号个数相同。` },
      { n: 305, q: R`设 $\boldsymbol A=\begin{bmatrix}1&1&1&1\\1&1&1&1\\1&1&1&1\\1&1&1&1\end{bmatrix}$，$\boldsymbol B=\begin{bmatrix}3&0&0&0\\0&0&0&0\\0&0&0&0\\0&0&0&0\end{bmatrix}$，则 $\boldsymbol A$ 与 $\boldsymbol B$ 有关系
(A) 合同且相似。 (B) 合同但不相似。 (C) 相似但不合同。 (D) 不相似也不合同。`, a: R`(B)`, sol: R`【分析】$\boldsymbol A,\boldsymbol B$ 均为实对称阵。$|\lambda\boldsymbol E-\boldsymbol A|=\lambda^3(\lambda-4)$，$\boldsymbol A$ 的特征值为 $0,0,0,4$；$\boldsymbol B$ 的特征值为 $0,0,0,3$。
特征值不同，故不相似。但二者正惯性指数均为 $p=1$、负惯性指数均为 $0$（秩都为 1），故合同。选 (B)。
【评注】实对称矩阵相似 $\iff$ 特征值相同；合同 $\iff$ 正、负惯性指数相同。` },
      { n: 306, q: R`与二次型 $f=x_1^2+x_2^2+2x_3^2+6x_1x_2$ 的矩阵 $\boldsymbol A$ 既合同又相似的矩阵是
(A) $\begin{bmatrix}1&&\\&2&\\&&-8\end{bmatrix}$。 (B) $\begin{bmatrix}4&&\\&2&\\&&-2\end{bmatrix}$。 (C) $\begin{bmatrix}1&&\\&3&\\&&0\end{bmatrix}$。 (D) $\begin{bmatrix}1&&\\&1&\\&&-1\end{bmatrix}$。`, a: R`(B)`, sol: R`【分析】正交变换 $\boldsymbol x=\boldsymbol{Qy}$ 下，$\boldsymbol Q^{\mathrm T}\boldsymbol{AQ}=\boldsymbol Q^{-1}\boldsymbol{AQ}$，故二次型矩阵经正交变换既合同又相似；此时两实对称矩阵相似 $\iff$ 特征值相同。
$|\lambda\boldsymbol E-\boldsymbol A|=\begin{vmatrix}\lambda-1&-3&0\\-3&\lambda-1&0\\0&0&\lambda-2\end{vmatrix}=(\lambda-2)(\lambda-4)(\lambda+2)$，$\boldsymbol A$ 的特征值为 $2,4,-2$，与 (B) 相同。选 (B)。
【评注】(A) 由配方法得到，只合同不相似；(D) 是规范形矩阵，一般只合同不相似。` },
      { n: 307, q: R`设 $\boldsymbol A,\boldsymbol B$ 均 $n$ 阶实对称矩阵，若 $\boldsymbol A$ 与 $\boldsymbol B$ 合同，则
(A) $\boldsymbol A$ 与 $\boldsymbol B$ 有相同的特征值。 (B) $\boldsymbol A$ 与 $\boldsymbol B$ 有相同的秩。
(C) $\boldsymbol A$ 与 $\boldsymbol B$ 有相同的特征向量。 (D) $\boldsymbol A$ 与 $\boldsymbol B$ 有相同的行列式。`, a: R`(B)`, sol: R`【分析】合同即存在可逆阵 $\boldsymbol C$ 使 $\boldsymbol C^{\mathrm T}\boldsymbol{AC}=\boldsymbol B$，因 $\boldsymbol C$ 可逆，$r(\boldsymbol A)=r(\boldsymbol C^{\mathrm T}\boldsymbol{AC})=r(\boldsymbol B)$，(B) 正确。
如 $\boldsymbol A=\begin{bmatrix}1&0\\0&1\end{bmatrix}$、$\boldsymbol B=\begin{bmatrix}1&0\\0&4\end{bmatrix}$ 合同，但特征值 $1,1$ 与 $1,4$ 不同，(A) 错；特征向量不同，(C) 错；$|\boldsymbol A|=1\neq4=|\boldsymbol B|$，(D) 错。选 (B)。
【评注】合同 $\Rightarrow$ 秩相等；有相同特征值是合同的充分条件而非必要条件。` },
      { n: 308, q: R`下列矩阵中，正定矩阵是
(A) $\begin{bmatrix}1&2&3\\2&4&5\\3&5&6\end{bmatrix}$。 (B) $\begin{bmatrix}1&2&0\\2&5&3\\0&3&8\end{bmatrix}$。 (C) $\begin{bmatrix}2&2&-2\\2&5&-4\\-2&-4&5\end{bmatrix}$。 (D) $\begin{bmatrix}5&2&1\\2&1&3\\1&3&0\end{bmatrix}$。`, a: R`(C)`, sol: R`【分析】正定的必要条件 $a_{ii}>0$。(D) 中 $a_{33}=0$，取 $\boldsymbol x=(0,0,1)^{\mathrm T}$ 得 $f=0$，不正定。
(A) 二阶主子式 $\begin{vmatrix}1&2\\2&4\end{vmatrix}=0$，不正定；(B) $\Delta_3=|\boldsymbol A|=-1<0$，不正定。
(C) $\Delta_1=2>0$，$\Delta_2=\begin{vmatrix}2&2\\2&5\end{vmatrix}=6>0$，$\Delta_3=\begin{vmatrix}2&2&-2\\2&5&-4\\-2&-4&5\end{vmatrix}=10>0$，顺序主子式全大于零，正定。选 (C)。
【评注】正定 $\iff$ 顺序主子式全大于零；先用必要条件 $a_{ii}>0$ 排除。` },
      { n: 309, q: R`下列二次型中正定二次型是
(A) $f_1=(x_1-x_2)^2+(x_2-x_3)^2+(x_3-x_1)^2$。
(B) $f_2=(x_1+x_2)^2+(x_2-x_3)^2+(x_3+x_1)^2$。
(C) $f_3=(x_1+x_2)^2+(x_2+x_3)^2+(x_3-x_4)^2+(x_4-x_1)^2$。
(D) $f_4=(x_1+x_2)^2+(x_2+x_3)^2+(x_3+x_4)^2+(x_4-x_1)^2$。`, a: R`(D)`, sol: R`【分析】正定要求对任意 $\boldsymbol x\neq\boldsymbol 0$ 都有 $f>0$。
(A) $f_1(1,1,1)=0$，不正定；(B) $f_2(-1,1,1)=0$，不正定；(C) $f_3(1,-1,1,1)=0$，不正定。
由排除法选 (D)。
【评注】找出使 $f=0$ 的非零向量即可否定正定；这些平方和形式能否化为 $\sum y_i^2$ 关键看变换是否可逆。` },
      { n: 310, q: R`设 $\boldsymbol A$ 是 $n$ 阶实对称矩阵，将 $\boldsymbol A$ 的 $i$ 列和 $j$ 列对换得到 $\boldsymbol B$，再将 $\boldsymbol B$ 的 $i$ 行和 $j$ 行对换得到 $\boldsymbol C$，则 $\boldsymbol A$ 与 $\boldsymbol C$
(A) 等价但不相似。 (B) 合同但不相似。 (C) 相似但不合同。 (D) 等价，合同且相似。`, a: R`(D)`, sol: R`【分析】用初等阵表出：$\boldsymbol A\boldsymbol E_{ij}=\boldsymbol B$，$\boldsymbol E_{ij}\boldsymbol B=\boldsymbol C$，故 $\boldsymbol C=\boldsymbol E_{ij}\boldsymbol A\boldsymbol E_{ij}$。
因 $\boldsymbol E_{ij}=\boldsymbol E_{ij}^{\mathrm T}=\boldsymbol E_{ij}^{-1}$，故 $\boldsymbol C=\boldsymbol E_{ij}^{-1}\boldsymbol A\boldsymbol E_{ij}=\boldsymbol E_{ij}^{\mathrm T}\boldsymbol A\boldsymbol E_{ij}$，即 $\boldsymbol C\sim\boldsymbol A$ 且 $\boldsymbol C\cong\boldsymbol A$，从而也等价。选 (D)。
【评注】对换两行两列的初等阵既是对称阵又是正交阵，故同时保持相似与合同。` }
    ]
  };
})();
