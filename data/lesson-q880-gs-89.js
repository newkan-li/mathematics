window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q880_s88"] = {
    id: "q880_s88",
    ch: "880题 · 线代 · 第十二章 二次型",
    title: "综合题·填空题",
    probTitle: "第十二章 综合题 · 填空题（含原书解析）",
    book: "李林《精讲精练 880 题（数学二）》2026",
    problems: [
      { n: "(1)", q: R`若 3 阶实对称矩阵 $A$ 与 $B=\begin{pmatrix}1&0&0\\0&0&3\\0&3&0\end{pmatrix}$ 合同，则二次型 $x^TAx$ 的规范形为 $\underline{\qquad}$。`, a: R`$y_1^2+y_2^2-y_3^2$`, sol: R`【解】$|\lambda E-B|=(\lambda-1)(\lambda^2-9)$，$B$ 的特征值 $1,3,-3$，故 $p_B=2,q_B=1$。由 $A,B$ 合同知 $p_A=2,q_A=1$，规范形为 $y_1^2+y_2^2-y_3^2$。` },
      { n: "(2)", q: R`设 $A$ 是 $n$ 阶矩阵，方程组 $Ax=b$ 有唯一解，则二次型 $x^T(A^TA)x$ 的正惯性指数为 $\underline{\qquad}$。`, a: R`$n$`, sol: R`【解】$Ax=b$ 有唯一解 $\Rightarrow Ax=0$ 只有零解，即 $\forall x\neq0,Ax\neq0$，故 $x^T(A^TA)x=(Ax)^T(Ax)>0$，二次型正定，正惯性指数为 $n$。` },
      { n: "(3)", q: R`设 $A$ 是 3 阶实对称矩阵，二次型 $x^TAx$ 经过正交变换 $x=Qy$ 后的标准形为 $y_1^2+y_2^2-y_3^2$，则二次型 $x^TA^*x$ 的规范形为 $\underline{\qquad}$。`, a: R`$-y_1^2-y_2^2+y_3^2$`, sol: R`【解】$A$ 的特征值为 $1,1,-1$，$|A|=-1$，$A^*$ 的特征值为 $\frac{|A|}{\lambda_i}$ 即 $-1,-1,1$，故 $p=1,q=2$，规范形为 $-y_1^2-y_2^2+y_3^2$。` },
      { n: "(4)", q: R`设 3 阶实对称矩阵 $A$ 的特征值为 $2,3,4$，$A^*$ 是 $A$ 的伴随矩阵。若对任意 3 维实列向量 $X$，都有 $|X^TA^*X-X^TAX|\leqslant aX^TX$，则 $a$ 的最小取值为 $\underline{\qquad}$。`, a: R`$10$`, sol: R`【解】$|A|=24$，$A^*$ 特征值 $12,8,6$。$|X^T(A^*-A)X|\leqslant10(y_1^2+y_2^2+y_3^2)=10X^TX$，故 $a$ 的最小值为 $10$。` }
    ]
  };
})();
