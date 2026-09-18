window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q880_s84"] = {
    id: "q880_s84",
    ch: "880题 · 线代 · 第十二章 二次型",
    title: "基础题·选择题",
    probTitle: "第十二章 基础题 · 选择题（含原书解析）",
    book: "李林《精讲精练 880 题（数学二）》2026",
    problems: [
      { n: "(1)", q: R`二次型 $f(x_1,x_2,x_3)=x_1x_2+x_2x_3+x_1x_3$ 的矩阵为（ ）。
(A) $\begin{pmatrix}1&0&0\\0&1&0\\0&0&1\end{pmatrix}$
(B) $\begin{pmatrix}0&\frac12&\frac12\\\frac12&0&\frac12\\\frac12&\frac12&0\end{pmatrix}$
(C) $\begin{pmatrix}1&\frac12&\frac12\\\frac12&1&\frac12\\\frac12&\frac12&1\end{pmatrix}$
(D) $\begin{pmatrix}\frac12&1&1\\1&\frac12&1\\1&1&\frac12\end{pmatrix}$`, a: R`(B)`, sol: R`【解】$f=(x_1,x_2,x_3)\begin{pmatrix}0&\frac12&\frac12\\\frac12&0&\frac12\\\frac12&\frac12&0\end{pmatrix}\begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix}$，选项 B 正确。` },
      { n: "(2)", q: R`二次型 $f(x_1,x_2,x_3)=(x_1-x_2)^2+(x_2-x_3)^2+(x_3-x_1)^2$ 的标准形为（ ）。
(A) $f=y_1^2+y_2^2+y_3^2$
(B) $f=2y_1^2+\frac32y_2^2$
(C) $f=y_1^2+y_2^2-y_3^2$
(D) $f=2y_1^2+\frac32y_2^2+y_3^2$`, a: R`(B)`, sol: R`【解】配方得 $f=2\left(x_1-\frac12x_2-\frac12x_3\right)^2+\frac32(x_2-x_3)^2$，令 $y_1=x_1-\frac12x_2-\frac12x_3,y_2=x_2-x_3,y_3=x_3$，标准形 $f=2y_1^2+\frac32y_2^2$，选项 B 正确。
【注】不可令 $y_1=x_1-x_2,y_2=x_2-x_3,y_3=x_3-x_1$，因变换矩阵不可逆。` },
      { n: "(3)", q: R`设 $A=\begin{pmatrix}1&&\\&2&\\&&3\end{pmatrix}$ 与 $B=\begin{pmatrix}2&&\\&3&\\&&1\end{pmatrix}$ 合同，则合同变换矩阵 $P=$（ ）。
(A) $\begin{pmatrix}1&0&0\\0&0&1\\1&0&0\end{pmatrix}$
(B) $\begin{pmatrix}0&0&1\\1&0&0\\0&1&0\end{pmatrix}$
(C) $\begin{pmatrix}0&1&0\\1&0&0\\0&0&1\end{pmatrix}$
(D) $\begin{pmatrix}0&0&1\\1&0&0\\0&0&1\end{pmatrix}$`, a: R`(B)`, sol: R`【解】变换 $x_1=y_3,x_2=y_1,x_3=y_2$，即 $x=Py$，$P=\begin{pmatrix}0&0&1\\1&0&0\\0&1&0\end{pmatrix}$，选项 B 正确。` },
      { n: "(4)", q: R`设 $A$ 是 $n$ 阶方阵，将 $A$ 的第 $i$ 列与第 $j$ 列互换，再交换第 $i$ 行与第 $j$ 行得到 $B$，则（ ）。
(A) $A$ 与 $B$ 等价、相似且合同
(B) $A$ 与 $B$ 相似、合同但不等价
(C) $A$ 与 $B$ 相似但不合同
(D) $A$ 与 $B$ 等价但不相似`, a: R`(A)`, sol: R`【解】$B=E_{i,j}AE_{i,j}$，由 $E_{i,j}^{-1}=E_{i,j}=E_{i,j}^T$ 知 $B=E_{i,j}^{-1}AE_{i,j}=E_{i,j}^TAE_{i,j}$，故 $A,B$ 等价、相似且合同，选项 A 正确。` },
      { n: "(5)", q: R`二次型 $f(x_1,x_2,x_3)=x_1^2+4x_2^2+4x_3^2-4x_1x_2+4x_1x_3-8x_2x_3$ 的规范形为（ ）。
(A) $f=z_1^2$
(B) $f=z_1^2-z_2^2$
(C) $f=z_1^2+z_2^2+z_3^2$
(D) $f=z_1^2+z_2^2-z_3^2$`, a: R`(A)`, sol: R`【解】$A=\begin{pmatrix}1&-2&2\\-2&4&-4\\2&-4&4\end{pmatrix}$，$|\lambda E-A|=\lambda^2(\lambda-9)$，特征值 $9,0,0$，$r(A)=1$，正惯性指数 $p=1$，负惯性指数 $q=0$，故规范形 $f=z_1^2$，选项 A 正确。` },
      { n: "(6)", q: R`设 $A,B,\Lambda$ 均为 $n$ 阶实方阵，则下列命题正确的是（ ）。
(A) 若 $A$ 是实对称矩阵，则存在唯一可逆矩阵 $P$，使得 $P^{-1}AP=\Lambda$
(B) 若 $A$ 是实对称矩阵，则存在唯一正交矩阵 $Q$，使得 $Q^{-1}AQ=\Lambda$
(C) 若 $B$ 是实对称矩阵，则存在唯一实对称矩阵 $A$，使得 $A^2=B$
(D) 若 $B$ 是正定矩阵，则存在唯一正定矩阵 $A$，使得 $A^2=B$`, a: R`(D)`, sol: R`【解】A、B 中 $P,Q$ 不唯一；C 中 $A$ 不唯一（如 $B=E$ 时 $A=\pm E$ 均可）；D 正确：$B$ 正定时存在唯一正定矩阵 $A$ 使 $A^2=B$。选项 D 正确。` },
      { n: "(7)", q: R`设 $A,B$ 均为 $n$ 阶实对称矩阵，则 $A$ 与 $B$ 合同的充分必要条件是（ ）。
(A) $A$ 与 $B$ 有相同的特征值
(B) $A$ 与 $B$ 有相同的特征向量
(C) $A$ 与 $B$ 有相同的行列式
(D) $A$ 与 $B$ 有相同的秩且有相同的正惯性指数`, a: R`(D)`, sol: R`【解】$A,B$ 实对称，合同 $\Leftrightarrow$ 正、负惯性指数分别相等。由 $p+q=r$ 知 D 正确。A、B、C 均非充要条件（举反例）。选项 D 正确。` },
      { n: "(8)", q: R`设 $E$ 是 $n$ 阶单位矩阵，则 $n$ 阶实对称矩阵 $A$ 正定的充分必要条件是（ ）。
(A) 存在 $n$ 阶矩阵 $C$，使得 $A=C^TC$
(B) 二次型 $X^TAX$ 的负惯性指数为 0
(C) 存在可逆矩阵 $P$，使得 $P^{-1}AP=E$
(D) $A$ 的伴随矩阵 $A^*$ 与 $E$ 合同`, a: R`(D)`, sol: R`【解】A 中 $C$ 未要求可逆，不充分；B 中 $q=0$ 时可能 $p<n$，不充分；C 是充分不必要条件。D 正确：$A$ 正定 $\Leftrightarrow A^*$ 正定 $\Leftrightarrow A^*$ 与 $E$ 合同。选项 D 正确。` },
      { n: "(9)", q: R`设 $A=\begin{pmatrix}1&2&0\\2&0&2\\0&2&-1\end{pmatrix}$，若存在可逆矩阵 $C$，使得 $C^TAC=\Lambda$，则 $C$ 可能为（ ）。
(A) $\begin{pmatrix}1&-1&-1\\0&\frac12&\frac12\\0&0&1\end{pmatrix}$
(B) $\begin{pmatrix}1&2&0\\0&2&-1\\0&0&1\end{pmatrix}$
(C) $\begin{pmatrix}1&2&0\\0&1&2\\0&0&1\end{pmatrix}$
(D) $\begin{pmatrix}1&1&1\\0&\frac12&\frac12\\0&0&1\end{pmatrix}$`, a: R`(A)`, sol: R`【解】配方 $f=x_1^2-x_3^2+4x_1x_2+4x_2x_3=(x_1+2x_2)^2-(2x_2-x_3)^2$，令 $y_1=x_1+2x_2,y_2=2x_2-x_3,y_3=x_3$，解得 $C=\begin{pmatrix}1&-1&-1\\0&\frac12&\frac12\\0&0&1\end{pmatrix}$，选项 A 正确。` }
    ]
  };
})();
