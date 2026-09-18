window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q880_s57"] = {
    id: "q880_s57",
    ch: "880题 · 线代 · 第八章 矩阵",
    title: "基础题·填空题",
    probTitle: "第八章 基础题 · 填空题（含原书解析）",
    book: "李林《精讲精练 880 题（数学二）》2026",
    problems: [
      { n: "(1)", q: R`设 $\alpha=(1,2,3)^T$，$\beta=\left(1,\frac12,\frac13\right)^T$，$A=\alpha\beta^T$，则 $A^n=\underline{\qquad}$。`, a: R`$3^{n-1}\begin{pmatrix}1&\frac12&\frac13\\2&1&\frac23\\3&\frac32&1\end{pmatrix}$`, sol: R`【解】$A=\alpha\beta^T$，$r(A)=1$，$k=\beta^T\alpha=3$，故 $A^n=k^{n-1}A=3^{n-1}\begin{pmatrix}1&\frac12&\frac13\\2&1&\frac23\\3&\frac32&1\end{pmatrix}$。` },
      { n: "(2)", q: R`设 $\alpha=(2,-1,3)^T$，$\beta=(1,2,0)^T$，$A=\alpha\beta^T$，$E$ 是 3 阶单位矩阵，则 $(A+E)^n=\underline{\qquad}$。`, a: R`$\begin{pmatrix}2n+1&4n&0\\-n&-2n+1&0\\3n&6n&1\end{pmatrix}$`, sol: R`【解】$\beta^T\alpha=0$，故 $A^2=O$。又 $A=\begin{pmatrix}2&4&0\\-1&-2&0\\3&6&0\end{pmatrix}$，故 $(A+E)^n=E+nA=\begin{pmatrix}2n+1&4n&0\\-n&-2n+1&0\\3n&6n&1\end{pmatrix}$。` },
      { n: "(3)", q: R`设 $A=\begin{pmatrix}1&0&1\\0&2&0\\1&0&1\end{pmatrix}$，则 $A^n=\underline{\qquad}$。`, a: R`$\begin{pmatrix}2^{n-1}&0&2^{n-1}\\0&2^n&0\\2^{n-1}&0&2^{n-1}\end{pmatrix}$`, sol: R`【解】$A^2=\begin{pmatrix}2&0&2\\0&4&0\\2&0&2\end{pmatrix}=2A$，故 $A^n=2^{n-1}A=\begin{pmatrix}2^{n-1}&0&2^{n-1}\\0&2^n&0\\2^{n-1}&0&2^{n-1}\end{pmatrix}$。` },
      { n: "(4)", q: R`设 $B=\begin{pmatrix}0&-1&0\\1&0&0\\0&0&1\end{pmatrix}$，$A=P^{-1}BP$，则 $A^4-2B^2=\underline{\qquad}$。`, a: R`$\begin{pmatrix}3&0&0\\0&3&0\\0&0&-1\end{pmatrix}$`, sol: R`【解】$A^n=P^{-1}B^nP$。$B^2=\begin{pmatrix}-1&0&0\\0&-1&0\\0&0&1\end{pmatrix}$，$B^4=E$，故 $A^4=E$，$A^4-2B^2=E-2B^2=\begin{pmatrix}3&0&0\\0&3&0\\0&0&-1\end{pmatrix}$。` },
      { n: "(5)", q: R`设 $A$ 是 $n$ 阶方阵，且 $|A|=2$，将 $A$ 的第 $i$ 行与第 $j$ 行互换得到 $B$，则行列式 $|B^{-1}B^*B^T|=\underline{\qquad}$。`, a: R`$(-2)^{n-1}$`, sol: R`【解】$B=E_{i,j}A$，$|B|=-|A|=-2$，故 $|B^{-1}B^*B^T|=|B|^{-1}|B|^{n-1}|B|=|B|^{n-1}=(-2)^{n-1}$。` },
      { n: "(6)", q: R`设 $A=\begin{pmatrix}1&2&3&4\\2&3&4&5\\3&4&5&6\\4&5&6&7\end{pmatrix}$，则 $r(A)=\underline{\qquad}$。`, a: R`$2$`, sol: R`【解】初等行变换化阶梯形得 $\begin{pmatrix}1&2&3&4\\0&-1&-2&-3\\0&0&0&0\\0&0&0&0\end{pmatrix}$，故 $r(A)=2$。` },
      { n: "(7)", q: R`若 $A^n=O$，$n$ 为正整数，则 $(E-A)^{-1}=\underline{\qquad}$。`, a: R`$E+A+A^2+\cdots+A^{n-1}$`, sol: R`【解】$(E-A)(E+A+A^2+\cdots+A^{n-1})=E-A^n=E$，故 $(E-A)^{-1}=E+A+A^2+\cdots+A^{n-1}$。` },
      { n: "(8)", q: R`若 $A^n=E$，$n$ 为正整数，则 $(A^*)^n=\underline{\qquad}$。`, a: R`$E$`, sol: R`【解】$|A|^n=1$。由 $AA^*=|A|E$ 及 $A,A^*$ 可交换得 $(AA^*)^n=A^n(A^*)^n=|A|^nE=E$，故 $(A^*)^n=E$。` },
      { n: "(9)", q: R`设方阵 $A$ 满足 $A^2-3A-2E=O$，则 $A^{-1}=\underline{\qquad}$。`, a: R`$\frac12(A-3E)$`, sol: R`【解】$A(A-3E)=2E$，即 $A\cdot\frac12(A-3E)=E$，故 $A^{-1}=\frac12(A-3E)$。` },
      { n: "(10)", q: R`设方阵 $A$ 满足 $A^2=A$，则 $(A+E)^{-1}=\underline{\qquad}$。`, a: R`$-\frac12(A-2E)$`, sol: R`【解】$A^2-A-2E=-2E$，即 $(A+E)(A-2E)=-2E$，故 $(A+E)^{-1}=-\frac12(A-2E)$。
【注】由 $A(A-E)=O$ 不能推出 $A=O$ 或 $A=E$。` },
      { n: "(11)", q: R`设 $A$ 是 $n$ 阶可逆矩阵，将 $A$ 的第 $i$ 行和第 $j$ 行交换得 $B$，则行列式 $|AB^{-1}|=\underline{\qquad}$。`, a: R`$-1$`, sol: R`【解】$B=E_{i,j}A$，$AB^{-1}=AA^{-1}E_{i,j}^{-1}=E_{i,j}$，故 $|AB^{-1}|=|E_{i,j}|=-1$。` },
      { n: "(12)", q: R`设存在 3 阶矩阵 $A$，对任意的 $x,y,z$ 有 $A\begin{pmatrix}x\\y\\z\end{pmatrix}=\begin{pmatrix}z\\x\\y\end{pmatrix}$，则 $A=\underline{\qquad}$。`, a: R`$\begin{pmatrix}0&0&1\\1&0&0\\0&1&0\end{pmatrix}$`, sol: R`【解】变换为：交换 1,2 行再交换 1,3 行，故 $A=E_{1,3}E_{1,2}=\begin{pmatrix}0&0&1\\1&0&0\\0&1&0\end{pmatrix}$。` },
      { n: "(13)", q: R`设 $\alpha=(k,0,\cdots,0,k)^T\ (k\neq0)$，且 $A=E-\alpha\alpha^T$，$A^{-1}=E+\frac1k\alpha\alpha^T$，则 $k=\underline{\qquad}$。`, a: R`$-1$ 或 $\frac12$`, sol: R`【解】由 $AA^{-1}=E$ 且 $\alpha^T\alpha=2k^2$，得 $E+\left(-1+\frac1k-2k\right)\alpha\alpha^T=E$，故 $-1+\frac1k-2k=0$，解得 $k=-1$ 或 $k=\frac12$。` }
    ]
  };
})();
