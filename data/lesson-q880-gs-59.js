window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q880_s58"] = {
    id: "q880_s58",
    ch: "880题 · 线代 · 第八章 矩阵",
    title: "基础题·解答题",
    probTitle: "第八章 基础题 · 解答题（含原书解析）",
    book: "李林《精讲精练 880 题（数学二）》2026",
    problems: [
      { n: "(1)", q: R`设 $A=\begin{pmatrix}2&-1&3\\a&1&b\\4&c&6\end{pmatrix}$，且 $BA=O$，$B$ 是 3 阶方阵，$r(B)>1$，求 $A^n$。`, a: R`$A^n=9^{n-1}\begin{pmatrix}2&-1&3\\-2&1&-3\\4&-2&6\end{pmatrix}$`, sol: R`【解】由 $BA=O$ 知 $r(A)+r(B)\leqslant3$，由 $r(B)>1$ 得 $r(A)\leqslant1$，而 $r(A)\geqslant1$，故 $r(A)=1$，$A$ 的行向量成比例，解得 $a=-2,b=-3,c=-2$，$A=\begin{pmatrix}1\\-1\\2\end{pmatrix}(2,-1,3)=\alpha\beta^T$，$\beta^T\alpha=9$，故 $A^n=9^{n-1}A$。
【注】$r(A)=1\Leftrightarrow A=\alpha\beta^T$，且 $A^n=k^{n-1}A$，$k=\beta^T\alpha=\operatorname{tr}(A)$。` },
      { n: "(2)", q: R`设 $\alpha,\beta$ 是 $n$ 维列向量，且 $\alpha^T\beta=2$，证明：$A=E+\alpha\beta^T$ 可逆，并求 $A^{-1}$。`, a: R`$A^{-1}=\frac{4E-A}3$`, sol: R`【证】$A^2=E+2\alpha\beta^T+\alpha(\beta^T\alpha)\beta^T=E+4\alpha\beta^T=4A-3E$，故 $A(A-4E)=-3E$，$A$ 可逆且 $A^{-1}=\frac{4E-A}3$。` },
      { n: "(3)", q: R`设 $A^{-1}=\begin{pmatrix}1&1&1\\1&2&1\\1&1&3\end{pmatrix}$，求 $(A^*)^{-1}$。`, a: R`$\begin{pmatrix}5&-2&-1\\-2&2&0\\-1&0&1\end{pmatrix}$`, sol: R`【解】$(A^*)^{-1}=(A^{-1})^*=|A^{-1}|A$，$|A^{-1}|=2$。对 $A^{-1}$ 作初等行变换求 $A$，得 $A=\begin{pmatrix}\frac52&-1&-\frac12\\-1&1&0\\-\frac12&0&\frac12\end{pmatrix}$，故 $(A^*)^{-1}=2A=\begin{pmatrix}5&-2&-1\\-2&2&0\\-1&0&1\end{pmatrix}$。` },
      { n: "(4)", q: R`设 $A=\begin{pmatrix}2&1&1\\1&2&1\\1&1&2\end{pmatrix}$，证明：$A^2=5A-4E$，并求 $A^{-1}$。`, a: R`$A^{-1}=\frac14(5E-A)$`, sol: R`【证】$A=E+\alpha\alpha^T$（$\alpha=(1,1,1)^T$），$A^2=E+5\alpha\alpha^T=5A-4E$。
【解】由 $A(A-5E)=-4E$ 得 $A^{-1}=\frac{A-5E}{-4}=\frac14(5E-A)$。` },
      { n: "(5)", q: R`设方阵 $A,B$ 满足 $|B|\neq0$，$(A-E)^{-1}=(B-E)^T$，求 $A^{-1}$（用 $B$ 表示）。`, a: R`$A^{-1}=E-(B^T)^{-1}$`, sol: R`【解】$(A-E)^{-1}=B^T-E$。两边乘 $(A-E)$ 得 $E=AB^T-A-B^T+E$，即 $A(B^T-E)=B^T$。由 $|B|\neq0$ 知 $B^T$ 可逆，故 $A^{-1}=(B^T-E)(B^T)^{-1}=E-(B^T)^{-1}$。` },
      { n: "(6)", q: R`设 $A=\begin{pmatrix}1&0&0\\2&3&0\\0&4&5\end{pmatrix}$，$B=(E+A)^{-1}(E-A)$，求 $[(E+B)^2]^{-1}$。`, a: R`$\begin{pmatrix}1&0&0\\3&4&0\\2&10&9\end{pmatrix}$`, sol: R`【解】$(E+B)^{-1}=[E+(E+A)^{-1}(E-A)]^{-1}=[(E+A)^{-1}(2E)]^{-1}=\frac12(E+A)=\begin{pmatrix}1&0&0\\1&2&0\\0&2&3\end{pmatrix}$，故 $[(E+B)^2]^{-1}=[(E+B)^{-1}]^2=\begin{pmatrix}1&0&0\\3&4&0\\2&10&9\end{pmatrix}$。` },
      { n: "(7)", q: R`已知方阵 $A,B$，$(A+B)$ 均可逆，求 $(A^{-1}+B^{-1})^{-1}$。`, a: R`$B(A+B)^{-1}A$`, sol: R`【解】$A^{-1}+B^{-1}=A^{-1}(B+A)B^{-1}$，故 $(A^{-1}+B^{-1})^{-1}=B(A+B)^{-1}A$。
【注】也可写成 $A(A+B)^{-1}B$。` },
      { n: "(8)", q: R`设 $AB=BA$，$A$ 可逆，证明：$A^{-1}B=BA^{-1}$。`, a: R`证明见解析`, sol: R`【证】由 $AB=BA$ 得 $A^{-1}(AB)A^{-1}=A^{-1}(BA)A^{-1}$，左端 $=BA^{-1}$，右端 $=A^{-1}B$，故 $A^{-1}B=BA^{-1}$。` },
      { n: "(9)", q: R`设 $A,B$ 都是 $n$ 阶方阵，且 $A^2=A$，$B^2=B$，$(A+B)^2=A+B$，证明：$AB=BA$。`, a: R`证明见解析`, sol: R`【证】展开 $(A+B)^2=A+AB+BA+B=A+B$ 得 $AB+BA=O$。左乘 $A$ 得 $AB+ABA=O$，右乘 $A$ 得 $ABA+BA=O$，比较得 $AB=BA$。
【注】矩阵乘法无交换律，不可由 $(A+B)^2$ 直接得 $AB=BA=O$。` },
      { n: "(10)", q: R`设 $A$ 为 $2n+1$ 阶正交矩阵，且 $|A|=1$，证明：$A-E$ 不可逆。`, a: R`证明见解析`, sol: R`【证】$|A-E|=|A||E-A^T|=|A||E-A|=|-(A-E)|=(-1)^{2n+1}|A-E|=-|A-E|$，故 $|A-E|=0$，$A-E$ 不可逆。` },
      { n: "(11)", q: R`设 $n$ 阶方阵 $A,B$，满足 $A^2=E$，$B^2=E$，且 $|A|+|B|=0$，证明：$A+B$ 不可逆。`, a: R`证明见解析`, sol: R`【证】$|A|^2=|B|^2=1$，故 $|A|=\pm1,|B|=\pm1$，由 $|A|+|B|=0$ 知异号。$|A+B|=|AB^2+A^2B|=|A||A+B||B|=-|A+B|$，故 $|A+B|=0$，$A+B$ 不可逆。` },
      { n: "(12)", q: R`设 $A=\begin{pmatrix}1&0&1\\0&2&0\\-1&0&1\end{pmatrix}$，$AB+E=A^2+B$，求 $B$。`, a: R`$B=\begin{pmatrix}2&0&1\\0&3&0\\-1&0&2\end{pmatrix}$`, sol: R`【解】由 $AB-B=A^2-E$ 得 $(A-E)B=(A-E)(A+E)$。$A-E$ 可逆，故 $B=A+E=\begin{pmatrix}2&0&1\\0&3&0\\-1&0&2\end{pmatrix}$。` },
      { n: "(13)", q: R`设 $A=\begin{pmatrix}0&2\\1&2\end{pmatrix}$，且 $(A^TB^{-1})^T-A(B^TA)^{-1}=(E-B^{-1})^T$，求 $B$。`, a: R`$B=\begin{pmatrix}0&1\\2&2\end{pmatrix}$`, sol: R`【解】化简得 $(B^{-1})^TA-(B^T)^{-1}+(B^{-1})^T=E$，由 $(B^T)^{-1}=(B^{-1})^T$ 得 $(B^T)^{-1}=A^{-1}$，即 $B^T=A$，$B=A^T=\begin{pmatrix}0&1\\2&2\end{pmatrix}$。` },
      { n: "(14)", q: R`设 $A=\begin{pmatrix}\frac13&0&0\\0&\frac14&0\\0&0&\frac17\end{pmatrix}$，$A^{-1}BA=6A+BA$，求 $B$。`, a: R`$B=\begin{pmatrix}3&0&0\\0&2&0\\0&0&1\end{pmatrix}$`, sol: R`【解】由 $(A^{-1}-E)BA=6A$ 得 $B=6(A^{-1}-E)^{-1}$。$A^{-1}=\operatorname{diag}(3,4,7)$，$(A^{-1}-E)^{-1}=\operatorname{diag}\left(\frac12,\frac13,\frac16\right)$，故 $B=\operatorname{diag}(3,2,1)$。` },
      { n: "(15)", q: R`设 $A=\begin{pmatrix}0&1&0\\1&0&0\\0&0&1\end{pmatrix}$，$B=\begin{pmatrix}1&0&0\\0&0&1\\0&1&0\end{pmatrix}$，$C=\begin{pmatrix}1&-4&3\\2&0&-1\\1&-2&0\end{pmatrix}$，且 $AXB=C$，求矩阵 $X$。`, a: R`$X=\begin{pmatrix}2&-1&0\\1&3&-4\\1&0&-2\end{pmatrix}$`, sol: R`【解】$A,B$ 为初等矩阵，故 $X=A^{-1}CB^{-1}=ACB=\begin{pmatrix}2&-1&0\\1&3&-4\\1&0&-2\end{pmatrix}$。` },
      { n: "(16)", q: R`设矩阵 $A$ 满足 $A\begin{pmatrix}1&2\\0&1\end{pmatrix}=\begin{pmatrix}2&1\\3&2\end{pmatrix}A$，求矩阵 $A$。`, a: R`$A=O$`, sol: R`【解】令 $A=\begin{pmatrix}x_1&x_2\\x_3&x_4\end{pmatrix}$，代入比较元素得方程组，只有零解，故 $A=O$。` }
    ]
  };
})();
