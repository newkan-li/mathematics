window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q880_s85"] = {
    id: "q880_s85",
    ch: "880题 · 线代 · 第十二章 二次型",
    title: "基础题·填空题",
    probTitle: "第十二章 基础题 · 填空题（含原书解析）",
    book: "李林《精讲精练 880 题（数学二）》2026",
    problems: [
      { n: "(1)", q: R`已知二次型 $f(x_1,x_2,x_3)=x_1^2+4x_2^2+4x_3^2+2ax_1x_2-2x_1x_3+4x_2x_3$ 正定，则 $a$ 的取值范围为 $\underline{\qquad}$。`, a: R`$-2<a<1$`, sol: R`【解】$A=\begin{pmatrix}1&a&-1\\a&4&2\\-1&2&4\end{pmatrix}$，顺序主子式 $\Delta_1=1>0,\Delta_2=4-a^2>0,\Delta_3=-4(a-1)(a+2)>0$，解得 $-2<a<1$。` },
      { n: "(2)", q: R`设二次型 $f(x_1,x_2,x_3)=X^TAX\ (A^T=A)$ 在正交变换下的标准形为 $-2y_1^2+8y_2^2$，且 $E+B=AB$，其中 $B$ 为 3 阶矩阵，则迹 $\operatorname{tr}(B^{-1}+2E)=\underline{\qquad}$。`, a: R`$9$`, sol: R`【解】$A$ 的特征值为 $-2,8,0$。由 $E+B=AB$ 得 $E=(A-E)B$，故 $B^{-1}=A-E$，$B^{-1}+2E=A+E$，其特征值为 $-1,9,1$，故 $\operatorname{tr}(B^{-1}+2E)=-1+9+1=9$。` }
    ]
  };
})();
