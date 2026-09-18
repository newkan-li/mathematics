window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q880_s77"] = {
    id: "q880_s77",
    ch: "880题 · 线代 · 第十一章 相似矩阵",
    title: "基础题·选择题",
    probTitle: "第十一章 基础题 · 选择题（含原书解析）",
    book: "李林《精讲精练 880 题（数学二）》2026",
    problems: [
      { n: "(1)", q: R`设 $\lambda=2$ 是矩阵 $A$ 的一个特征值，且 $|A|\neq0$，则 $\left(\frac13A^2\right)^{-1}$ 有一个特征值为（ ）。
(A) $\frac43$
(B) $\frac34$
(C) $\frac12$
(D) $\frac14$`, a: R`(B)`, sol: R`【解】$\left(\frac13A^2\right)^{-1}=3(A^{-1})^2$。$A$ 有特征值 $2$，$A^{-1}$ 有特征值 $\frac12$，$(A^{-1})^2$ 有特征值 $\frac14$，故所求特征值为 $\frac34$，选项 B 正确。` },
      { n: "(2)", q: R`设 4 阶实对称矩阵 $A$ 的特征值为 $0,1,2,3$，则 $r(A)=$（ ）。
(A) $1$
(B) $2$
(C) $3$
(D) $4$`, a: R`(C)`, sol: R`【解】实对称矩阵相似于 $\operatorname{diag}(0,1,2,3)$，秩相同，故 $r(A)=3$，选项 C 正确。` },
      { n: "(3)", q: R`设 $C=\operatorname{diag}(1,2,2)$，$A=\begin{pmatrix}2&0&0\\0&2&1\\0&0&1\end{pmatrix}$，$B=\begin{pmatrix}2&1&0\\0&2&0\\0&0&1\end{pmatrix}$，则（ ）。
(A) $A$ 与 $C$ 相似，$B$ 与 $C$ 不相似
(B) $A$ 与 $C$ 相似，$B$ 与 $C$ 相似
(C) $A$ 与 $C$ 不相似，$B$ 与 $C$ 相似
(D) $A$ 与 $C$ 不相似，$B$ 与 $C$ 不相似`, a: R`(A)`, sol: R`【解】$A,B$ 特征值均为 $2,2,1$。$r(2E-A)=1$，特征值 2 对应两个线性无关特征向量，$A\sim C$；$r(2E-B)=2$，特征值 2 只对应一个特征向量，$B$ 不相似于 $C$。选项 A 正确。` },
      { n: "(4)", q: R`下列矩阵中，不能相似于对角矩阵的是（ ）。
(A) $A=\begin{pmatrix}1&-1&3\\-1&2&0\\3&0&6\end{pmatrix}$
(B) $B=\begin{pmatrix}1&0&0\\0&2&0\\5&0&3\end{pmatrix}$
(C) $C=\begin{pmatrix}0&0&0\\0&0&0\\1&2&3\end{pmatrix}$
(D) $D=\begin{pmatrix}1&2&0\\0&0&3\\0&0&0\end{pmatrix}$`, a: R`(D)`, sol: R`【解】$D$ 的特征值为 $0,0,1$，$r(0E-D)=2$，故特征值 0 只对应一个特征向量，$D$ 不能对角化。A 为实对称矩阵必可对角化；B 有三个不同特征值；C 中 $r(0E-C)=1$，特征值 0 有两个线性无关特征向量，可对角化。选项 D 正确。` },
      { n: "(5)", q: R`设矩阵 $A$ 与 $B$ 相似，则必有（ ）。
(A) 矩阵 $\lambda E-A$ 与 $\lambda E-B$ 相等
(B) $A,B$ 同时可逆或不可逆
(C) $A$ 和 $B$ 有相同的特征向量
(D) $A$ 和 $B$ 均与同一个对角矩阵相似`, a: R`(B)`, sol: R`【解】相似矩阵有相同的行列式，故 $A,B$ 同时可逆或不可逆，选项 B 正确。` },
      { n: "(6)", q: R`设 $A$ 为 3 阶方阵，$A$ 的三个特征值为 $1,1,2$，$\alpha_1,\alpha_2,\alpha_3$ 分别为对应的三个特征向量，则（ ）。
(A) $\alpha_1,\alpha_2,\alpha_3$ 必为 $2E-A$ 的特征向量
(B) $\alpha_1+\alpha_3$ 必为 $2E-A$ 的特征向量
(C) $\alpha_1-\alpha_2$ 必为 $2E-A$ 的特征向量
(D) $\alpha_1,\alpha_2$ 必为 $2E-A$ 的特征向量，$\alpha_3$ 不是 $2E-A$ 的特征向量`, a: R`(A)`, sol: R`【解】由 $(2E-A)\alpha_1=\alpha_1,(2E-A)\alpha_2=\alpha_2,(2E-A)\alpha_3=0$，知 $\alpha_1,\alpha_2,\alpha_3$ 都是 $2E-A$ 的特征向量，选项 A 正确。` },
      { n: "(7)", q: R`设 3 阶实矩阵 $A$ 有三重特征值 $1$，$f(x)=|xE-A|-|A^{-1}|$，其中 $E$ 是 3 阶单位矩阵，$x\in R$，则至少存在一点 $x_0\in(0,1)$，使得 $y=f(x)$ 在点 $(x_0,f(x_0))$ 处的切线（ ）。
(A) 平行于直线 $y=1$
(B) 垂直于直线 $y=1$
(C) 平行于直线 $y=x$
(D) 垂直于直线 $y=x$`, a: R`(C)`, sol: R`【解】$|A|=1$，$|A^{-1}|=1$，$f(0)=-|A|-|A^{-1}|=-2$，$f(1)=|E-A|-|A^{-1}|=-1$。由拉格朗日中值定理存在 $x_0\in(0,1)$ 使 $f'(x_0)=\frac{f(1)-f(0)}{1-0}=1$，即切线斜率为 1，平行于 $y=x$，选项 C 正确。` },
      { n: "(8)", q: R`设 $P^{-1}AP=\begin{pmatrix}1&0&0\\0&2&0\\0&0&2\end{pmatrix}$，$\alpha_1$ 是 $A$ 的特征值 $\lambda_1=1$ 对应的特征向量，$\alpha_2$ 与 $\alpha_3$ 是 $A$ 的特征值 $\lambda_2=\lambda_3=2$ 对应的特征向量，则下列选项中关于矩阵 $P$ 的可能取值错误的是（ ）。
(A) $P=(\alpha_1,\alpha_3,\alpha_2)$
(B) $P=(\alpha_1,-2\alpha_2,3\alpha_3)$
(C) $P=(\alpha_1,\alpha_2-\alpha_3,\alpha_2+2\alpha_3)$
(D) $P=(\alpha_1+\alpha_2,\alpha_1+\alpha_3,\alpha_3)$`, a: R`(D)`, sol: R`【解】$P$ 的三列须分别为 $\lambda=1,2,2$ 对应的特征向量且线性无关。A、B、C 均满足；D 中第一列 $\alpha_1+\alpha_2$ 不再是 $A$ 的特征向量，错误。选项 D 正确。` }
    ]
  };
})();
