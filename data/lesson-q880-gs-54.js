window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q880_s53"] = {
    id: "q880_s53",
    ch: "880题 · 线代 · 第七章 行列式",
    title: "综合题·选择题",
    probTitle: "第七章 综合题 · 选择题（含原书解析）",
    book: "李林《精讲精练 880 题（数学二）》2026",
    problems: [
      { n: "(1)", q: R`设 $A$ 是 3 阶可逆矩阵，$A^{-1}$ 的特征值为 $3,2,1$，则 $|A|$ 的代数余子式之和 $A_{11}+A_{22}+A_{33}=$（ ）。
(A) $\frac16$
(B) $\frac13$
(C) $\frac12$
(D) $1$`, a: R`(D)`, sol: R`【解】$A$ 的特征值为 $\frac13,\frac12,1$，$|A|=\frac16$，$A^*$ 的特征值为 $\frac{|A|}{\lambda_i}$ 即 $\frac12,\frac13,\frac16$，故 $A_{11}+A_{22}+A_{33}=\frac12+\frac13+\frac16=1$，选项 D 正确。
【注】$|A|=\prod\lambda_i$；$A^{-1}$ 特征值为 $\frac1{\lambda_i}$；$A^*$ 特征值为 $\frac{|A|}{\lambda_i}$。` },
      { n: "(2)", q: R`$|A|=\begin{vmatrix}0&0&0&1\\1&0&0&0\\0&1&0&0\\0&0&1&0\end{vmatrix}$ 的所有代数余子式 $A_{ij}$ 之和 $\sum\limits_{i=1}^4\sum\limits_{j=1}^4A_{ij}=$（ ）。
(A) $4$
(B) $-4$
(C) $1$
(D) $-1$`, a: R`(B)`, sol: R`【解】$A^{-1}=\begin{pmatrix}0&1&0&0\\0&0&1&0\\0&0&0&1\\1&0&0&0\end{pmatrix}$，$|A|=-1$，故 $A^*=|A|A^{-1}=\begin{pmatrix}0&-1&0&0\\0&0&-1&0\\0&0&0&-1\\-1&0&0&0\end{pmatrix}$，所有元素之和 $=-4$，选项 B 正确。` },
      { n: "(3)", q: R`设 $A$ 是 3 阶方阵，$A^*$ 是 $A$ 的伴随矩阵，$|A|=\frac12$，则 $\left|(2A)^{-1}-2A^*\right|=$（ ）。
(A) $\frac12$
(B) $-\frac12$
(C) $-\frac14$
(D) $\frac14$`, a: R`(C)`, sol: R`【解】方法一：$A^*=\frac12A^{-1}$，故 $\left|(2A)^{-1}-2A^*\right|=\left|\frac12A^{-1}-A^{-1}\right|=\left|-\frac12A^{-1}\right|=\left(-\frac12\right)^3|A|^{-1}=-\frac18\times2=-\frac14$。
方法二：$A^{-1}=2A^*$，故原式 $=|A^*-2A^*|=|-A^*|=-|A|^{3-1}=-\frac14$。选项 C 正确。` },
      { n: "(4)", q: R`设 $f(x)=\begin{vmatrix}1&x&x^2&x^3\\1&2&4&8\\1&-1&1&-1\\1&1&1&1\end{vmatrix}$，则曲线 $y=f(x)$ 在 $(-1,2)$ 内存在水平切线的条数为（ ）。
(A) $1$
(B) $2$
(C) $3$
(D) $4$`, a: R`(B)`, sol: R`【解】转置后为范德蒙行列式，$f(x)=(2-x)(-1-x)(1-x)(-1-2)(1-2)(1+1)=6(x^2-1)(2-x)$。$f(-1)=f(1)=f(2)=0$，由罗尔定理至少存在 $x_1\in(-1,1),x_2\in(1,2)$ 使 $f'=0$；又 $f$ 为三次多项式，至多两条水平切线，故恰有 2 条，选项 B 正确。` }
    ]
  };
})();
