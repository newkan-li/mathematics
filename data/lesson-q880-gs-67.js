window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q880_s66"] = {
    id: "q880_s66",
    ch: "880题 · 线代 · 第九章 向量组",
    title: "综合题·选择题",
    probTitle: "第九章 综合题 · 选择题（含原书解析）",
    book: "李林《精讲精练 880 题（数学二）》2026",
    problems: [
      { n: "(1)", q: R`设 $A$ 是 $m\times n$ 矩阵，$\alpha_1,\alpha_2,\cdots,\alpha_t$ 是 $n$ 维列向量，向量组 (Ⅰ)$\alpha_1,\alpha_2,\cdots,\alpha_t$，(Ⅱ)$A\alpha_1,A\alpha_2,\cdots,A\alpha_t$，则正确的是（ ）。
(A) 若 (Ⅰ) 线性无关，则 (Ⅱ) 线性无关
(B) 若 (Ⅱ) 线性相关，则 (Ⅰ) 线性相关
(C) 若 (Ⅱ) 线性无关，则 (Ⅰ) 线性无关
(D) (Ⅰ) 与 (Ⅱ) 具有相同的线性相关性`, a: R`(C)`, sol: R`【解】用反证法。若 (Ⅰ) 线性相关，则存在不全为零的 $k_i$ 使 $\sum k_i\alpha_i=0$，左乘 $A$ 得 $\sum k_iA\alpha_i=0$，即 (Ⅱ) 线性相关，与条件矛盾，故 (Ⅰ) 线性无关。取 $A=O$ 知 A、B 不正确，D 显然不正确。选项 C 正确。` },
      { n: "(2)", q: R`设三维列向量 $\alpha_1,\alpha_2,\alpha_3$ 线性相关，$\alpha_2,\alpha_3,\alpha_4$ 线性无关，记 $(\beta_1,\beta_2,\beta_3)=(\alpha_1,\alpha_2,\alpha_3)A_{3\times3}$，$(\gamma_1,\gamma_2,\gamma_3)=(\alpha_2,\alpha_3,\alpha_4)B_{3\times3}$，则（ ）。
(A) 存在矩阵 $A_{3\times3}$，使得 $\beta_1,\beta_2,\beta_3$ 线性无关
(B) 不存在矩阵 $A_{3\times3}$，使得 $\beta_1,\beta_2,\beta_3$ 线性相关
(C) 存在矩阵 $B_{3\times3}$，使得 $\gamma_1,\gamma_2,\gamma_3$ 线性无关
(D) 不存在矩阵 $B_{3\times3}$，使得 $\gamma_1,\gamma_2,\gamma_3$ 线性相关`, a: R`(C)`, sol: R`【解】$\alpha_2,\alpha_3,\alpha_4$ 线性无关，取 $B$ 可逆即得 $\gamma_1,\gamma_2,\gamma_3$ 线性无关，选项 C 正确。而 $\alpha_1,\alpha_2,\alpha_3$ 线性相关，故 $\beta_1,\beta_2,\beta_3$ 必线性相关，A、B 不正确；D 不正确。` },
      { n: "(3)", q: R`设向量 $\alpha_1,\alpha_2,\alpha_3$ 满足 $k_1\alpha_1+k_2\alpha_2+k_3\alpha_3=0$，$k_1,k_2,k_3$ 为常数，且 $k_1k_3\neq0$，则（ ）。
(A) $\alpha_1$ 与 $\alpha_3$ 等价
(B) $\alpha_1,\alpha_2$ 与 $\alpha_1,\alpha_3$ 等价
(C) $\alpha_1,\alpha_2$ 与 $\alpha_2,\alpha_3$ 等价
(D) $\alpha_1,\alpha_3$ 与 $\alpha_2,\alpha_3$ 等价`, a: R`(C)`, sol: R`【解】由 $k_1k_3\neq0$ 知 $\alpha_1$ 可由 $\alpha_2,\alpha_3$ 线性表示，$\alpha_3$ 可由 $\alpha_1,\alpha_2$ 线性表示，又 $\alpha_2=\alpha_2$，故 $\alpha_1,\alpha_2$ 与 $\alpha_2,\alpha_3$ 可互相线性表示，即等价。选项 C 正确。` },
      { n: "(4)", q: R`设 $n$ 维向量组 (Ⅰ)$\alpha_1,\alpha_2,\cdots,\alpha_k\ (k<n)$ 线性无关，则 $n$ 维向量组 (Ⅱ)$\beta_1,\beta_2,\cdots,\beta_k$ 也线性无关的充要条件是（ ）。
(A) $\beta_1,\beta_2,\cdots,\beta_k$ 可由 $\alpha_1,\alpha_2,\cdots,\alpha_k$ 线性表示
(B) $\alpha_1,\alpha_2,\cdots,\alpha_k$ 可由 $\beta_1,\beta_2,\cdots,\beta_k$ 线性表示
(C) 向量组 (Ⅰ) 与向量组 (Ⅱ) 等价
(D) 矩阵 $(\alpha_1,\alpha_2,\cdots,\alpha_k)$ 与 $(\beta_1,\beta_2,\cdots,\beta_k)$ 等价`, a: R`(D)`, sol: R`【解】矩阵等价 $\Leftrightarrow r(A)=r(B)$。$\alpha$ 组线性无关，$r(A)=k$，故 $r(B)=k$，$\beta$ 组线性无关；反之亦然，选项 D 正确。A、B、C 均非充要条件。` },
      { n: "(5)", q: R`设 4 维列向量 $\alpha_1,\alpha_2,\alpha_3$ 线性无关，$\beta_i\ (i=1,2,3,4)$ 为非零列向量，且 $\beta_i$ 与 $\alpha_1,\alpha_2,\alpha_3$ 均正交，则 $r(\beta_1,\beta_2,\beta_3,\beta_4)=$（ ）。
(A) 1
(B) 2
(C) 3
(D) 4`, a: R`(A)`, sol: R`【解】令 $A=\begin{pmatrix}\alpha_1^T\\\alpha_2^T\\\alpha_3^T\end{pmatrix}$，$\beta_i$ 均为 $Ax=0$ 的非零解，$r(A)=3$，基础解系最多一个非零解，故 $1\leqslant r(\beta_1,\beta_2,\beta_3,\beta_4)\leqslant4-3=1$，即秩为 1，选项 A 正确。` },
      { n: "(6)", q: R`设 $A,B$ 均是 $m\times n$ 矩阵，则 $Ax=0$ 与 $Bx=0$ 同解的充要条件是（ ）。
(A) $A,B$ 的列向量组等价
(B) $A,B$ 的行向量组等价
(C) $A,B$ 是等价矩阵
(D) $A^Tx=0$ 与 $B^Tx=0$ 同解`, a: R`(B)`, sol: R`【解】$Ax=0$ 与 $Bx=0$ 同解 $\Leftrightarrow r(A)=r\begin{pmatrix}A\\B\end{pmatrix}=r(B)\Leftrightarrow A,B$ 的行向量组等价，选项 B 正确。` },
      { n: "(7)", q: R`设 $A,B$ 为 $n$ 阶矩阵，$P,Q$ 为 $n$ 阶可逆矩阵，下列选项错误的是（ ）。
(A) 若 $A=BQ$，则 $B$ 的列向量组与 $A$ 的列向量组等价
(B) 若 $A=PB$，则 $B$ 的行向量组与 $A$ 的行向量组等价
(C) 若 $A=PBQ$，则矩阵 $A$ 与 $B$ 等价
(D) 若 $A=PBQ$，则 $B$ 的行(列)向量组与 $A$ 的行(列)向量组等价`, a: R`(D)`, sol: R`【解】由 $A=BQ$、$Q$ 可逆知 $B$ 的列向量组与 $A$ 的列向量组等价，A 正确；同理 B 正确；$A=PBQ$ 且 $P,Q$ 可逆知 $r(A)=r(B)$，C 正确。D 错误（举反例）。选项 D 正确。` },
      { n: "(8)", q: R`设 $A,B$ 分别为 $m\times n$ 与 $n\times s$ 矩阵，且 $r(A)=n$，则正确的是（ ）。
(A) $AB$ 的列向量组与 $B$ 的列向量组等价
(B) $AB$ 的行向量组与 $B$ 的行向量组等价
(C) $AB$ 的列向量组与 $A$ 的列向量组等价
(D) $AB$ 的行向量组与 $A$ 的行向量组等价`, a: R`(B)`, sol: R`【解】$r(A)=n$ 时 $ABX=0$ 与 $BX=0$ 同解，故 $AB$ 的行向量组与 $B$ 的行向量组等价，选项 B 正确。` }
    ]
  };
})();
