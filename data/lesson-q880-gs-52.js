window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q880_s51"] = {
    id: "q880_s51",
    ch: "880题 · 线代 · 第七章 行列式",
    title: "基础题·填空题",
    probTitle: "第七章 基础题 · 填空题（含原书解析）",
    book: "李林《精讲精练 880 题（数学二）》2026",
    problems: [
      { n: "(1)", q: R`$\begin{vmatrix}k&0&-1&1\\0&k&1&-1\\-1&1&k&0\\1&-1&0&k\end{vmatrix}=\underline{\qquad}$。`, a: R`$k^2(k^2-4)$`, sol: R`【解】将第 2,3,4 行加到第 1 行提取 $k$，再化行化简得 $k^2\begin{vmatrix}k&2&-1\\2&k&1\\0&0&1\end{vmatrix}=k^2(k^2-4)$。` },
      { n: "(2)", q: R`若 $\begin{vmatrix}\lambda-a&-1&-1\\-1&\lambda-a&1\\-1&1&\lambda-a\end{vmatrix}=0$，则 $\lambda=\underline{\qquad}$。`, a: R`$\lambda=a+1$ 或 $\lambda=a-2$`, sol: R`【解】化简得 $(\lambda-a-1)[(\lambda-a)^2+(\lambda-a)-2]=0$，故 $\lambda=a+1$ 或 $\lambda=a-2$。` },
      { n: "(3)", q: R`$D_4=\begin{vmatrix}1&0&0&1\\0&2&0&1\\0&0&3&1\\1&1&1&4\end{vmatrix}=\underline{\qquad}$。`, a: R`$13$`, sol: R`【解】箭形行列式，用主对角线元素将第 4 行前 3 个元素化为零，得 $D_4=1\times2\times3\times\left(4-1-\frac12-\frac13\right)=13$。` },
      { n: "(4)", q: R`行列式 $D_4=\begin{vmatrix}0&1&2&0\\1&0&0&2\\0&3&4&0\\3&0&0&4\end{vmatrix}=\underline{\qquad}$。`, a: R`$-4$`, sol: R`【解】交换第 1,4 行、第 2,4 列后分块，得 $D_4=\begin{vmatrix}3&4\\1&2\end{vmatrix}\begin{vmatrix}4&3\\2&1\end{vmatrix}=2\times(-2)=-4$。` },
      { n: "(5)", q: R`行列式 $D_4=\begin{vmatrix}a&-1&0&0\\0&a&-1&0\\0&0&a&-1\\4&3&2&a+1\end{vmatrix}=\underline{\qquad}$。`, a: R`$a^4+a^3+2a^2+3a+4$`, sol: R`【解】按第 1 列展开，得 $D_4=a\begin{vmatrix}a&-1&0\\0&a&-1\\3&2&a+1\end{vmatrix}-4\begin{vmatrix}-1&0&0\\a&-1&0\\0&a&-1\end{vmatrix}=a^4+a^3+2a^2+3a+4$。` },
      { n: "(6)", q: R`设 $f(x)=\begin{vmatrix}x&-2x&1&2\\1&x&1&-1\\3&2&3x&1\\1&1&1&x\end{vmatrix}$，则 $x^3$ 的系数为 $\underline{\qquad}$。`, a: R`$6$`, sol: R`【解】只有第 1 行的 $-2x$ 乘其代数余子式会出现 $x^3$ 项，$(-2x)\cdot(-1)^{1+2}\begin{vmatrix}1&1&-1\\3&3x&1\\1&1&x\end{vmatrix}=2x(3x-3)(x+1)=6x^3-6x$，故 $x^3$ 的系数为 6。` },
      { n: "(7)", q: R`设 $A$ 是 $n$ 阶方阵，且 $AA^T=E$，$|A|<0$，则 $|A+E|=\underline{\qquad}$。`, a: R`$0$`, sol: R`【解】$|A+E|=|A+AA^T|=|A||E+A^T|=|A||(E+A)^T|=|A||E+A|$，故 $(1-|A|)|A+E|=0$。由 $|A|<0$ 知 $1-|A|>0$，故 $|A+E|=0$。` },
      { n: "(8)", q: R`设 $A$ 是 $n$ 阶方阵，$E$ 是 $n$ 阶单位矩阵，且 $A^2=A$，$A\neq E$，则 $|A|=\underline{\qquad}$。`, a: R`$0$`, sol: R`【解】由 $A(A-E)=O$ 得 $r(A)+r(A-E)\leqslant n$。又 $A-E\neq O$，$r(A-E)\geqslant1$，故 $r(A)<n$，$|A|=0$。
【注】$AB=O$ 时 $r(A)+r(B)\leqslant n$，且 $B$ 的列向量组是 $Ax=0$ 的解。` },
      { n: "(9)", q: R`设 $A,B$ 均为 $n$ 阶方阵，且 $|A|=|B|=|A^{-1}+B|=2$，则 $|A+B^{-1}|=\underline{\qquad}$。`, a: R`$2$`, sol: R`【解】$|A+B^{-1}|=|B^{-1}BA+B^{-1}|=|B^{-1}||B+A^{-1}||A|=\frac12\times2\times2=2$。` },
      { n: "(10)", q: R`设 $|A|=2,|B|=-2$，其中 $A,B$ 均为 $n$ 阶方阵，则 $|A^{-1}B^*-A^*B^{-1}|=\underline{\qquad}$。`, a: R`$(-4)^{n-1}$`, sol: R`【解】$A^*=2A^{-1},B^*=-2B^{-1}$，故 $|A^{-1}B^*-A^*B^{-1}|=|-4A^{-1}B^{-1}|=(-4)^n|A|^{-1}|B|^{-1}=(-4)^n\cdot\frac12\cdot\left(-\frac12\right)=(-4)^{n-1}$。` },
      { n: "(11)", q: R`设 3 阶方阵 $A=(a_1,a_2,a_3),B=(3a_1-a_2,3a_2-2a_1,2a_3-a_1-2a_2)$，且 $|B|=14$，则 $|A|=\underline{\qquad}$。`, a: R`$1$`, sol: R`【解】$B=(a_1,a_2,a_3)\begin{pmatrix}3&-2&-1\\-1&3&-2\\0&0&2\end{pmatrix}$，故 $|B|=|A|\cdot14=14$，$|A|=1$。` },
      { n: "(12)", q: R`设 $A=(a_{ij})_{n\times n}$ 为 $n$ 阶方阵，$|A|=1$，且 $A$ 的每列元素之和均为 $k\ (k\neq0)$，则 $A$ 的代数余子式之和 $A_{11}+A_{12}+\cdots+A_{1n}=\underline{\qquad}$。`, a: R`$\frac1k$`, sol: R`【解】$|A|=k(A_{11}+A_{12}+\cdots+A_{1n})=1$，故 $A_{11}+A_{12}+\cdots+A_{1n}=\frac1k$。` }
    ]
  };
})();
