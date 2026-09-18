window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q880_s87"] = {
    id: "q880_s87",
    ch: "880题 · 线代 · 第十二章 二次型",
    title: "综合题·选择题",
    probTitle: "第十二章 综合题 · 选择题（含原书解析）",
    book: "李林《精讲精练 880 题（数学二）》2026",
    problems: [
      { n: "(1)", q: R`二次型 $f(x_1,x_2,x_3)=x_1x_2+x_2x_3$ 的正、负惯性指数分别为（ ）。
(A) $p=1,q=1$
(B) $p=1,q=2$
(C) $p=1,q=0$
(D) $p=0,q=2$`, a: R`(A)`, sol: R`【解】令 $x_1=y_1+y_2,x_2=y_1-y_2,x_3=y_3$，则 $f=y_1^2-y_2^2+y_1y_3-y_2y_3=\left(y_1+\frac12y_3\right)^2-\left(y_2+\frac12y_3\right)^2$，故 $p=1,q=1$，选项 A 正确。` },
      { n: "(2)", q: R`$A$ 是 $n$ 阶实对称矩阵，则 $A$ 合同于矩阵 $B$ 的充分必要条件是（ ）。① $r(A)=r(B)$，② $A$ 与 $B$ 的正惯性指数相等，③ $A$ 与 $B$ 均正定矩阵，④ $B$ 是实对称矩阵。
(A) ①成立
(B) ④成立
(C) ①②④均成立
(D) ③成立`, a: R`(C)`, sol: R`【解】$A,B$ 合同需 $r(A)=r(B)$、$p_A=p_B$，且 $B$ 也是实对称矩阵（④），故 ①②④ 均成立，选项 C 正确。` },
      { n: "(3)", q: R`设 $n$ 元二次型 $f(x_1,x_2,\cdots,x_n)=(x_1+a_1x_2)^2+(x_2+a_2x_3)^2+\cdots+(x_n+a_nx_1)^2$，其中 $a_i\ (i=1,2,\cdots,n)$ 均为实数，若二次型正定，则（ ）。
(A) $1+(-1)^{n+1}a_1a_2\cdots a_n\neq0$
(B) $1+(-1)^{n+1}a_1a_2\cdots a_n=0$
(C) $1-(-1)^{n+1}a_1a_2\cdots a_n\neq0$
(D) $1-(-1)^{n+1}a_1a_2\cdots a_n=0$`, a: R`(A)`, sol: R`【解】$f$ 正定 $\Leftrightarrow$ 方程组 $\begin{cases}x_1+a_1x_2=0\\x_2+a_2x_3=0\\\vdots\\x_n+a_nx_1=0\end{cases}$ 只有零解，其系数行列式 $1+(-1)^{n+1}a_1a_2\cdots a_n\neq0$，选项 A 正确。` },
      { n: "(4)", q: R`设 $A=\begin{pmatrix}2&1\\-1&0\end{pmatrix},B=\begin{pmatrix}1&1\\0&1\end{pmatrix},C=\begin{pmatrix}1&0\\1&1\end{pmatrix},D=\begin{pmatrix}1&0\\0&1\end{pmatrix}$，则正确的是（ ）。
(A) $A$ 与 $B$ 相似，$B$ 与 $C$ 合同
(B) $A$ 与 $D$ 相似，$B$ 与 $D$ 合同
(C) $A$ 与 $D$ 合同，$B$ 与 $C$ 相似
(D) $B$ 与 $D$ 相似，$C$ 与 $D$ 合同`, a: R`(A)`, sol: R`【解】$B,C$ 通过交换 1,2 行、列可互化，故合同。$A,B$ 有相同二重特征值 $\lambda=1$，且 $r(E-A)=r(E-B)=1$，可求得可逆 $P=\begin{pmatrix}1&0\\-1&1\end{pmatrix}$ 使 $P^{-1}AP=B$，故 $A\sim B$。选项 A 正确。` },
      { n: "(5)", q: R`设 $A$ 是 3 阶实对称矩阵，且 $|A|=2$，$A^*=A-E$，其中 $A^*$ 是 $A$ 的伴随矩阵，则二次型 $x^TAx$ 的规范形为（ ）。
(A) $y_1^2+y_2^2+y_3^2$
(B) $-y_1^2-y_2^2-y_3^2$
(C) $y_1^2+y_2^2-y_3^2$
(D) $-y_1^2-y_2^2+y_3^2$`, a: R`(D)`, sol: R`【解】由 $A^*=A-E$ 两边左乘 $A$ 得 $|A|E=A^2-A$，即 $A^2-A-2E=O$，故 $A$ 特征值为 $-1$ 或 $2$。由 $|A|=2$ 知特征值为 $-1,-1,2$，$p=1,q=2$，规范形为 $-y_1^2-y_2^2+y_3^2$，选项 D 正确。` },
      { n: "(6)", q: R`设 $A=\begin{pmatrix}1&2\\2&1\end{pmatrix},B=\begin{pmatrix}1&4\\1&1\end{pmatrix}$，则正确的是（ ）。
(A) 必存在正交矩阵 $Q$，使得 $Q^{-1}AQ=B$
(B) 必存在可逆矩阵 $P$，使得 $P^{-1}AP=B$
(C) 必存在可逆矩阵 $P$，使得 $P^TAP=B$
(D) 必存在可逆矩阵 $P$，使得 $A=P^TP$`, a: R`(B)`, sol: R`【解】$A,B$ 有相同特征值 $-1,3$，故 $A\sim B$，存在可逆 $P$ 使 $P^{-1}AP=B$。A 中 $B$ 非对称，不存在正交相似；C 中 $B$ 非对称，不合同；D 中 $A$ 有负特征值，不能表为 $P^TP$。选项 B 正确。` },
      { n: "(7)", q: R`设 3 阶实矩阵 $A$ 的特征向量为 $\alpha_1=(-1,1,0)^T,\alpha_2=(1,1,1)^T,\alpha_3=(-1,-1,2)^T$，则 $A$ 必为（ ）。
(A) 可逆矩阵
(B) 正交矩阵
(C) 对称矩阵
(D) 正定矩阵`, a: R`(C)`, sol: R`【解】$\alpha_1,\alpha_2,\alpha_3$ 两两正交，单位化后构成正交矩阵 $Q$，$Q^{-1}AQ=\operatorname{diag}(\lambda_1,\lambda_2,\lambda_3)$，故 $A=Q\Lambda Q^T$，$A^T=A$，即 $A$ 对称。特征值是否为零不确定，故 A、B、D 不一定。选项 C 正确。` },
      { n: "(8)", q: R`设实矩阵 $A=\begin{pmatrix}a&a-1\\a-1&a-1\end{pmatrix}$，若对任意的二维非零实列向量 $X$，都有 $|X^TAX|<|X^TX|$，则 $a$ 的取值范围为（ ）。
(A) $\left(\frac13,1\right)$
(B) $(-1,1)$
(C) $(-1,0]$
(D) $\left(\frac13,1\right]$`, a: R`(A)`, sol: R`【解】由 $|X^TAX|<X^TX$ 得 $-X^TX<X^TAX<X^TX$，故 $A+E$ 与 $E-A$ 均正定。由 $|A+E|=3a-1>0$ 与 $|E-A|=1-a>0$ 得 $\frac13<a<1$，选项 A 正确。` },
      { n: "(9)", q: R`设 $\alpha_1=(1,2)^T,\alpha_2=(a,1)^T,X=(x_1,x_2)^T$，若二次型 $f(x_1,x_2)=(\alpha_1,X)^2+(\alpha_2,X)^2$ 经可逆线性变换 $X=PY$ 化为 $g(y_1,y_2)=by_1^2+by_2^2+2by_1y_2\ (b\neq0)$，则（ ）。
(A) $a=\frac12,b>0$
(B) $a=-\frac12,b>0$
(C) $a=\frac12,b>-1$
(D) $a=-\frac12,b>-1$`, a: R`(A)`, sol: R`【解】$f$ 的矩阵 $A=\begin{pmatrix}1+a^2&2+a\\2+a&5\end{pmatrix}$，$g$ 的矩阵 $B=\begin{pmatrix}b&b\\b&b\end{pmatrix}$。$A$ 与 $B$ 合同，$r(A)=r(B)=1$，$|A|=(2a-1)^2=0$ 得 $a=\frac12$。此时 $A$ 特征值 $0,\frac{25}4>0$，$B$ 特征值 $0,2b>0$，故 $b>0$，选项 A 正确。` },
      { n: "(10)", q: R`设 $\alpha$ 是 3 维实列向量，且满足 $\alpha^T\alpha=1$，$A=E-\alpha\alpha^T$，$A^*$ 是 $A$ 的伴随矩阵，则二次型 $f(x_1,x_2,x_3)=X^TA^*X$ 在正交变换 $X=QY$ 下的标准形为（ ）。
(A) $y_1^2+y_2^2$
(B) $-y_1^2$
(C) $-y_1^2-y_3^2$
(D) $y_1^2$`, a: R`(D)`, sol: R`【解】$\alpha\alpha^T$ 有非零特征值 1，$r(\alpha\alpha^T)=1$，正交相似于 $\operatorname{diag}(1,0,0)$，故 $A$ 正交相似于 $\operatorname{diag}(0,1,1)$，$r(A)=2$，$r(A^*)=1$，$A^*$ 正交相似于 $\operatorname{diag}(1,0,0)$，故 $f$ 标准形为 $y_1^2$，选项 D 正确。` },
      { n: "(11)", q: R`设 $A$ 是 2 阶实对称矩阵，若对任意的 2 维非零列向量 $X$，都有 $|X^TAX|<|X^TX|$，$X_1,X_2$ 均为 2 维列向量，则二次型 $\begin{pmatrix}X_1\\X_2\end{pmatrix}^T\begin{pmatrix}A+E&O\\O&E-A\end{pmatrix}\begin{pmatrix}X_1\\X_2\end{pmatrix}$ 的规范形为（ ）。
(A) $y_1^2+y_2^2-y_3^2-y_4^2$
(B) $y_1^2+y_2^2+y_3^2-y_4^2$
(C) $y_1^2+y_2^2+y_3^2+y_4^2$
(D) $-y_1^2-y_2^2-y_3^2-y_4^2$`, a: R`(C)`, sol: R`【解】由条件知 $A+E$ 与 $E-A$ 均正定，故二次型 $=X_1^T(A+E)X_1+X_2^T(E-A)X_2>0$，正定，规范形为 $y_1^2+y_2^2+y_3^2+y_4^2$，选项 C 正确。` },
      { n: "(12)", q: R`设 $A$ 是 3 阶实矩阵，$|A|=3$，且 $A^*=-A+4E$，其中 $A^*$ 是 $A$ 的伴随矩阵，$E$ 是 3 阶单位矩阵，则二次型 $X^T(2E-A)^T(2E-A)X$ 的规范形为（ ）。
(A) $y_1^2-y_2^2-y_3^2$
(B) $y_1^2+y_2^2-y_3^2$
(C) $y_1^2+y_2^2+y_3^2$
(D) $-y_1^2-y_2^2-y_3^2$`, a: R`(C)`, sol: R`【解】由 $AA^*=-A^2+4A=3E$ 得 $(2E-A)^2=E$，故 $2E-A$ 可逆，$(2E-A)^T(2E-A)$ 正定，规范形为 $y_1^2+y_2^2+y_3^2$，选项 C 正确。` }
    ]
  };
})();
