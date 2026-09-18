window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q880_s56"] = {
    id: "q880_s56",
    ch: "880题 · 线代 · 第八章 矩阵",
    title: "基础题·选择题",
    probTitle: "第八章 基础题 · 选择题（含原书解析）",
    book: "李林《精讲精练 880 题（数学二）》2026",
    problems: [
      { n: "(1)", q: R`设 $A=(a_{ij})_{3\times3}$，$B=\begin{pmatrix}a_{21}&a_{22}+a_{23}&a_{23}\\a_{31}&a_{32}+a_{33}&a_{33}\\a_{11}&a_{12}+a_{13}&a_{13}\end{pmatrix}$，$P=\begin{pmatrix}0&1&0\\0&0&1\\1&0&0\end{pmatrix}$，$Q=\begin{pmatrix}1&0&0\\0&1&0\\0&1&1\end{pmatrix}$，则 $B=$（ ）。
(A) $AQP$
(B) $PAQ$
(C) $QAP$
(D) $APQ$`, a: R`(B)`, sol: R`【解】$PAQ=\begin{pmatrix}0&1&0\\0&0&1\\1&0&0\end{pmatrix}A\begin{pmatrix}1&0&0\\0&1&0\\0&1&1\end{pmatrix}=\begin{pmatrix}a_{21}&a_{22}&a_{23}\\a_{31}&a_{32}&a_{33}\\a_{11}&a_{12}&a_{13}\end{pmatrix}\begin{pmatrix}1&0&0\\0&1&0\\0&1&1\end{pmatrix}=B$，选项 B 正确。` },
      { n: "(2)", q: R`设 $A$ 是 $n(n\geqslant3)$ 阶可逆方阵，下列结论正确的是（ ）。
① $(A^*)^{-1}=(A^{-1})^*$ ② $(kA)^*=k^{n-1}A^*\ (k\neq0)$ ③ $(A^*)^T=(A^T)^*$ ④ $(A^*)^*=|A|^{n-2}A$
(A) ①②
(B) ②③
(C) ③④
(D) ①②③④`, a: R`(D)`, sol: R`【解】由 $AA^*=|A|E$ 及 $A$ 可逆可证：$(A^*)^{-1}=\frac A{|A|}=(A^{-1})^*$，①正确；$(kA)^*=k^{n-1}A^*$，②正确；$(A^T)^*=(A^*)^T$，③正确；$(A^*)^*=|A|^{n-2}A$，④正确。选项 D 正确。
【注】"$*$""$-1$""$T$"三种运算可交换；$(AB)^*=B^*A^*$。` },
      { n: "(3)", q: R`设 $A=\begin{pmatrix}1&0&1\\2&1&0\\-3&2&-5\end{pmatrix}$，则行列式 $\left|[(E-A)^*]^{-1}\right|=$（ ）。
(A) $\frac14$
(B) $-\frac14$
(C) $\frac1{16}$
(D) $-\frac1{16}$`, a: R`(C)`, sol: R`【解】$[(E-A)^*]^{-1}=\frac1{|E-A|}(E-A)=\begin{pmatrix}0&0&\frac14\\\frac12&0&0\\-\frac34&\frac12&-\frac32\end{pmatrix}$，由分块行列式得 $\left|[(E-A)^*]^{-1}\right|=(-1)^{1\times2}\times\frac14\times\frac14=\frac1{16}$，选项 C 正确。` },
      { n: "(4)", q: R`设矩阵 $A=\begin{pmatrix}1&1&1\\0&1&0\\2&k&3\\k-1&5&1\end{pmatrix}$ 与 $B=\begin{pmatrix}1&1&1\\0&1&-1\\2&3&k\\3&5&1\end{pmatrix}$ 等价，则（ ）。
(A) $k=1$
(B) $k\neq1$
(C) $k=-1$
(D) $k\neq-1$`, a: R`(B)`, sol: R`【解】$A$ 有 3 阶子式 $\begin{vmatrix}1&1&1\\0&1&0\\2&k&3\end{vmatrix}=\begin{vmatrix}1&1\\2&3\end{vmatrix}=1\neq0$，$r(A)=3$。对 $B$ 作初等变换得 $\begin{pmatrix}1&1&1\\0&1&-1\\0&0&k-1\\0&0&0\end{pmatrix}$，由 $r(A)=r(B)=3$ 知 $k\neq1$，选项 B 正确。` },
      { n: "(5)", q: R`设 $A=\begin{pmatrix}1&0&-1\\2&a&1\\1&2&1\end{pmatrix}$，$B$ 是 3 阶矩阵，且 $r(B)=2$，$r(AB)=1$，$A^*$ 与 $B^*$ 分别是 $A$ 与 $B$ 的伴随矩阵，则正确的是（ ）。
(A) $r\begin{pmatrix}A^*&O\\A&B\end{pmatrix}=3$
(B) $r\begin{pmatrix}A&O\\O&B^*\end{pmatrix}=3$
(C) $r\begin{pmatrix}A^*&B\\O&A\end{pmatrix}=3$
(D) $r\begin{pmatrix}A&B^*\\O&B\end{pmatrix}=3$`, a: R`(B)`, sol: R`【解】由 $2=r(B)=r(AB)=1$ 矛盾知 $A$ 不可逆，$a=3$，$r(A)=2,r(A^*)=1$，$r(B)=2,r(B^*)=1$，故 $r\begin{pmatrix}A&O\\O&B^*\end{pmatrix}=r(A)+r(B^*)=3$，选项 B 正确。` },
      { n: "(6)", q: R`设 $A,B$ 分别为 $m\times n,n\times s$ 矩阵，且 $AB=C$，则正确的是（ ）。
(A) 若 $r(C)=m$，则 $r(A)\leqslant m$
(B) 若 $r(C)=s$，则 $r(B)\leqslant s$
(C) 若 $r(A)=n$，则 $r(B)\leqslant r(C)$
(D) 若 $r(A)=n$，则 $r(B)=r(C)$`, a: R`(D)`, sol: R`【解】$r(A)=n$ 时，$ABX=0$ 与 $BX=0$ 同解（因 $AX=0$ 只有零解），故 $r(AB)=r(C)=r(B)$，选项 D 正确。` }
    ]
  };
})();
