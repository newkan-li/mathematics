window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q880_s50"] = {
    id: "q880_s50",
    ch: "880题 · 线代 · 第七章 行列式",
    title: "基础题·选择题",
    probTitle: "第七章 基础题 · 选择题（含原书解析）",
    book: "李林《精讲精练 880 题（数学二）》2026",
    problems: [
      { n: "(1)", q: R`设行列式 $D=\begin{vmatrix}3&0&4&0\\2&2&2&2\\0&-7&0&0\\5&3&-2&2\end{vmatrix}$，则 $D$ 的第 4 行各元素的余子式之和 $M_{41}+M_{42}+M_{43}+M_{44}=$（ ）。
(A) $-28$
(B) $28$
(C) $14$
(D) $-14$`, a: R`(A)`, sol: R`【解】$M_{41}+M_{42}+M_{43}+M_{44}=-A_{41}+A_{42}-A_{43}+A_{44}=\begin{vmatrix}3&0&4&0\\2&2&2&2\\0&-7&0&0\\-1&1&-1&1\end{vmatrix}=7\begin{vmatrix}3&4&0\\2&2&2\\-1&-1&1\end{vmatrix}=-28$，选项 A 正确。
【注】代数余子式 $A_{ij}$ 仅与位置有关，与 $a_{ij}$ 的取值无关。` },
      { n: "(2)", q: R`设 $\alpha_1,\alpha_2,\alpha_3,\beta_1,\beta_2$ 均是 4 维列向量，且 4 阶行列式 $|(\alpha_1,\alpha_2,\alpha_3,\beta_1)|=a$，$|(\alpha_1,\alpha_2,\beta_2,\alpha_3)|=b$，则行列式 $|(\alpha_3,\alpha_2,\alpha_1,\beta_1+\beta_2)|=$（ ）。
(A) $a+b$
(B) $a-b$
(C) $b-a$
(D) $-(a+b)$`, a: R`(C)`, sol: R`【解】$|(\alpha_3,\alpha_2,\alpha_1,\beta_1+\beta_2)|=-|(\alpha_1,\alpha_2,\alpha_3,\beta_1)|-|(\alpha_1,\alpha_2,\alpha_3,\beta_2)|=-a+|(\alpha_1,\alpha_2,\beta_2,\alpha_3)|=-a+b=b-a$，选项 C 正确。` },
      { n: "(3)", q: R`设 $\beta_1,\beta_2,\alpha_1,\alpha_2,\alpha_3$ 均是 4 维列向量，且 $|A|=|(\beta_1,\alpha_1,\alpha_2,\alpha_3)|=1$，$|B|=|(\beta_2,\alpha_1,3\alpha_2,\alpha_3)|=3$，则 $|A+B|=$（ ）。
(A) $15$
(B) $16$
(C) $31$
(D) $32$`, a: R`(D)`, sol: R`【解】$A+B=(\beta_1+\beta_2,2\alpha_1,4\alpha_2,2\alpha_3)$，故 $|A+B|=16(|(\beta_1,\alpha_1,\alpha_2,\alpha_3)|+|(\beta_2,\alpha_1,\alpha_2,\alpha_3)|)=16\left(1+\frac13\times3\right)=32$，选项 D 正确。` },
      { n: "(4)", q: R`设 3 阶矩阵 $A=(a_{ij})_{3\times3}$ 满足 $A^T=kA^*\ (k>0)$，若 $a_{11}=a_{12}=a_{13}=c>0$，则 $c=$（ ）。
(A) $\frac{\sqrt3}{3k}$
(B) $\frac{\sqrt3k^2}3$
(C) $\sqrt3k^2$
(D) $\frac{\sqrt3}{k^2}$`, a: R`(A)`, sol: R`【解】由 $|A^T|=|A|=k^3|A^*|=k^3|A|^2$ 得 $|A|=0$ 或 $|A|=\frac1{k^3}$。又 $a_{ji}=kA_{ji}$，故 $|A|=a_{11}A_{11}+a_{12}A_{12}+a_{13}A_{13}=\frac1k(a_{11}^2+a_{12}^2+a_{13}^2)=\frac{3c^2}k\neq0$，于是 $\frac{3c^2}k=\frac1{k^3}$，$c=\frac{\sqrt3}{3k}$，选项 A 正确。
【注】$|A^*|=|A|^{n-1}$。` }
    ]
  };
})();
