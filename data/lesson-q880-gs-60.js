window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q880_s59"] = {
    id: "q880_s59",
    ch: "880题 · 线代 · 第八章 矩阵",
    title: "综合题·选择题",
    probTitle: "第八章 综合题 · 选择题（含原书解析）",
    book: "李林《精讲精练 880 题（数学二）》2026",
    problems: [
      { n: "(1)", q: R`设 $A=\begin{pmatrix}1&2&k\\1&k+1&1\\k&2&1\end{pmatrix}$，$B$ 是 3 阶非零矩阵，且 $AB=O$，则（ ）。
(A) 当 $k=1$ 时，$r(B)=1$
(B) 当 $k=-3$ 时，$r(B)=1$
(C) 当 $k=1$ 时，$r(B)=2$
(D) 当 $k=-3$ 时，$r(B)=2$`, a: R`(B)`, sol: R`【解】由 $AB=O$ 知 $r(A)+r(B)\leqslant3$。若 $k=1$，$r(A)=1$，则 $r(B)\leqslant2$，选项 A、C 不正确；若 $k=-3$，$r(A)=2$，则 $r(B)\leqslant1$，又 $B$ 非零，$r(B)\geqslant1$，故 $r(B)=1$，选项 B 正确。` },
      { n: "(2)", q: R`设 $A=\begin{pmatrix}a&b&b\\b&a&b\\b&b&a\end{pmatrix}$（$a,b$ 均不为 0），且 $r(A^*)=1$，则必有（ ）。
(A) $a=b$
(B) $a=b$ 或 $a+2b\neq0$
(C) $a+2b=0$
(D) $a\neq b$ 且 $a+2b\neq0$`, a: R`(C)`, sol: R`【解】由 $r(A^*)=1$ 知 $r(A)=2$，故 $|A|=0$。$|A|=(a+2b)(a-b)^2=0$，得 $a+2b=0$ 或 $a=b$。当 $a=b$ 时 $r(A)=1\neq2$，故 $a+2b=0$，选项 C 正确。
【注】$r(A^*)=n\Leftrightarrow r(A)=n$；$r(A^*)=1\Leftrightarrow r(A)=n-1$；$r(A^*)=0\Leftrightarrow r(A)<n-1$。` },
      { n: "(3)", q: R`设 $A=\begin{pmatrix}a_{11}&a_{12}&a_{13}\\a_{21}&a_{22}&a_{23}\\a_{31}&a_{32}&a_{33}\end{pmatrix}$，$P=\begin{pmatrix}0&0&1\\0&1&0\\1&0&0\end{pmatrix}$，且 $P^nAP^m=A$，则正整数 $n,m$ 可以为（ ）。
(A) $n=m=4$
(B) $n=5,m=4$
(C) $n=4,m=5$
(D) $n=m=5$`, a: R`(A)`, sol: R`【解】$P$ 左乘 $A$ 交换 $A$ 的第 1,3 行，右乘 $A$ 交换第 1,3 列。交换偶数次不变，故 $n,m$ 均为偶数即可，选项 A 正确。` },
      { n: "(4)", q: R`设 $A,B$ 均为 $n$ 阶矩阵，$E$ 为 $n$ 阶单位矩阵，矩阵 $\begin{pmatrix}O&A\\B&E\end{pmatrix}$，$\begin{pmatrix}A&B\\O&E\end{pmatrix}$，$\begin{pmatrix}A&AB\\E&B\end{pmatrix}$ 的秩分别为 $r_1,r_2,r_3$，则正确的是（ ）。
(A) $r_2\geqslant r_1\geqslant r_3$
(B) $r_3\geqslant r_1=r_2$
(C) $r_1\geqslant r_2\geqslant r_3$
(D) $r_3\geqslant r_2\geqslant r_1$`, a: R`(A)`, sol: R`【解】由分块初等变换：$r_1=r(AB)+n$，$r_2=r(A)+n$，$r_3=n$。又 $r(AB)\leqslant r(A)$，故 $r_2\geqslant r_1\geqslant r_3$，选项 A 正确。` },
      { n: "(5)", q: R`下列命题中，正确的是（ ）。
①若 $A,B,C$ 均为 $n$ 阶矩阵，且 $ABC=E$，则 $BCA=CAB$；
②若 $A,B$ 均为 $n$ 阶不可逆矩阵，则 $A+B$ 必不可逆；
③若 $A,B$ 均为 $n$ 阶不可逆矩阵，则 $AB$ 必不可逆；
④若 $n$ 阶矩阵 $A,B$ 满足 $(AB)^2=E$，则 $(BA)^2=E$。
(A) ①②③
(B) ①③④
(C) ②③④
(D) ①②④`, a: R`(B)`, sol: R`【解】①由 $ABC=E$ 知 $A,B,C$ 可逆，可推出 $BCA=CAB=E$，正确；②取 $A=\begin{pmatrix}0&0\\0&1\end{pmatrix},B=\begin{pmatrix}1&0\\0&0\end{pmatrix}$ 均不可逆但 $A+B=E$ 可逆，错误；③$|AB|=|A||B|=0$，故 $AB$ 必不可逆，正确；④由 $(AB)^2=E$ 知 $A,B$ 可逆，$ABA=B^{-1}$，故 $BABA=E$，即 $(BA)^2=E$，正确。选项 B 正确。` }
    ]
  };
})();
