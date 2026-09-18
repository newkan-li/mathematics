window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q880_s78"] = {
    id: "q880_s78",
    ch: "880题 · 线代 · 第十一章 相似矩阵",
    title: "基础题·填空题",
    probTitle: "第十一章 基础题 · 填空题（含原书解析）",
    book: "李林《精讲精练 880 题（数学二）》2026",
    problems: [
      { n: "(1)", q: R`已知 $A=\begin{pmatrix}1&2&2\\2&1&2\\2&2&1\end{pmatrix}$ 与 $B=\begin{pmatrix}-1&0&0\\0&5&0\\0&0&a\end{pmatrix}$ 相似，则 $a=\underline{\qquad}$。`, a: R`$-1$`, sol: R`【解】相似矩阵迹相等，$1+1+1=-1+5+a$，得 $a=-1$。` },
      { n: "(2)", q: R`设 $n$ 阶方阵 $B=AA^*$，则 $B$ 的特征值为 $\underline{\qquad}$。`, a: R`$|A|$（$n$ 重）`, sol: R`【解】$|\lambda E-B|=|\lambda E-AA^*|=|\lambda E-A||E|=|(\lambda-|A|)E|=0$，故 $B$ 的特征值为 $\lambda=|A|$。` },
      { n: "(3)", q: R`设方阵 $A$ 满足 $A^2+2A+E=O$，则 $A$ 有特征值 $\underline{\qquad}$。`, a: R`$-1$`, sol: R`【解】设 $A\alpha=\lambda\alpha\ (\alpha\neq0)$，则 $(\lambda^2+2\lambda+1)\alpha=0$，故 $\lambda=-1$。
【注】也可由 $|(A+E)^2|=0$ 得 $|E+A|=0$，即 $\lambda=-1$ 是特征值。` },
      { n: "(4)", q: R`设 $A$ 是 3 阶实对称矩阵，$A$ 的特征值为 $1,1,-2$，且 $\lambda_3=-2$ 对应的特征向量为 $\xi_3=(1,1,-1)^T$，则 $A=\underline{\qquad}$。`, a: R`$\begin{pmatrix}0&-1&1\\-1&0&1\\1&1&0\end{pmatrix}$`, sol: R`【解】设 $\lambda_1=\lambda_2=1$ 对应特征向量 $x$，由实对称矩阵不同特征值特征向量正交，$x^T\xi_3=0$ 即 $x_1+x_2-x_3=0$，取 $\xi_1=(-1,1,0)^T,\xi_2=(1,0,1)^T$。由 $A(\xi_1,\xi_2,\xi_3)=(\xi_1,\xi_2,-2\xi_3)$ 得 $A=\begin{pmatrix}0&-1&1\\-1&0&1\\1&1&0\end{pmatrix}$。` },
      { n: "(5)", q: R`设 $A=\begin{pmatrix}2&0&0\\0&0&1\\0&1&a\end{pmatrix}$ 与 $B=\begin{pmatrix}2&0&0\\0&3&4\\0&-2&b\end{pmatrix}$ 相似，则 $a=\underline{\qquad},b=\underline{\qquad}$。`, a: R`$a=0,\ b=-3$`, sol: R`【解】相似矩阵特征多项式相等，$(\lambda-2)(\lambda^2-a\lambda-1)=(\lambda-2)[\lambda^2-(3+b)\lambda+3b+8]$，比较系数得 $a=3+b,-1=3b+8$，解得 $a=0,b=-3$。` },
      { n: "(6)", q: R`设 $A=\begin{pmatrix}3&2&-1\\a&-2&2\\3&b&-1\end{pmatrix}$ 有一个特征向量 $\alpha_1=(1,-2,3)^T$，则 $a=\underline{\qquad},b=\underline{\qquad}$。`, a: R`$a=-2,\ b=6$`, sol: R`【解】$A\alpha_1=\lambda\alpha_1$，即 $\begin{cases}3-4-3=\lambda\\a+4+6=-2\lambda\\3-2b-3=3\lambda\end{cases}$，解得 $a=-2,b=6,\lambda=-4$。` }
    ]
  };
})();
