window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q880_s63"] = {
    id: "q880_s63",
    ch: "880题 · 线代 · 第九章 向量组",
    title: "基础题·选择题",
    probTitle: "第九章 基础题 · 选择题（含原书解析）",
    book: "李林《精讲精练 880 题（数学二）》2026",
    problems: [
      { n: "(1)", q: R`若 $\alpha_1,\alpha_2,\alpha_3$ 线性相关，$\alpha_2,\alpha_3,\alpha_4$ 线性无关，则（ ）。
(A) $\alpha_1$ 可由 $\alpha_2,\alpha_3$ 线性表示
(B) $\alpha_4$ 可由 $\alpha_1,\alpha_2,\alpha_3$ 线性表示
(C) $\alpha_4$ 可由 $\alpha_1,\alpha_3$ 线性表示
(D) $\alpha_4$ 可由 $\alpha_1,\alpha_2$ 线性表示`, a: R`(A)`, sol: R`【解】由 $\alpha_2,\alpha_3,\alpha_4$ 线性无关知 $\alpha_2,\alpha_3$ 线性无关，而 $\alpha_1,\alpha_2,\alpha_3$ 线性相关，故 $\alpha_1$ 可由 $\alpha_2,\alpha_3$ 线性表示，选项 A 正确。` },
      { n: "(2)", q: R`向量组 $\alpha_1,\alpha_2,\cdots,\alpha_n$ 线性无关等价于（ ）。
(A) 存在一组不全为 0 的数，使其线性组合不为 0
(B) 存在一个向量不能由其他向量线性表示
(C) 任何一个向量均不能由其他向量线性表示
(D) 其中任意两个向量线性无关`, a: R`(C)`, sol: R`【解】由线性无关定义知 A、B 不正确；D 是必要不充分条件（如 $(1,0)^T,(0,1)^T,(1,1)^T$ 任意两个无关但三个相关），选项 C 正确。` },
      { n: "(3)", q: R`设向量组 $\alpha_1,\alpha_2,\alpha_3,\alpha_4$ 线性无关，则下列向量组线性无关的是（ ）。
(A) $\alpha_1+\alpha_2,\alpha_2+\alpha_3,\alpha_3+\alpha_4,\alpha_4+\alpha_1$
(B) $\alpha_1+\alpha_2,\alpha_2+\alpha_3,\alpha_3+\alpha_4,\alpha_4-\alpha_1$
(C) $\alpha_1+\alpha_2,\alpha_2-\alpha_3,\alpha_3+\alpha_4,\alpha_4-\alpha_1$
(D) $\alpha_1-\alpha_2,\alpha_2-\alpha_3,\alpha_3-\alpha_4,\alpha_4-\alpha_1$`, a: R`(B)`, sol: R`【解】$(\beta_1,\beta_2,\beta_3,\beta_4)=(\alpha_1,\alpha_2,\alpha_3,\alpha_4)C$。选项 B 中 $|C|=2\neq0$，$C$ 可逆，故线性无关。选项 A 中 $(\alpha_1+\alpha_2)-(\alpha_2+\alpha_3)+(\alpha_3+\alpha_4)-(\alpha_4+\alpha_1)=0$，线性相关。选项 B 正确。` },
      { n: "(4)", q: R`设向量组 (Ⅰ)$\beta_1,\beta_2,\cdots,\beta_t$，(Ⅱ)$\alpha_1,\alpha_2,\cdots,\alpha_s$，则下列命题
①若向量组 (Ⅰ) 可由 (Ⅱ) 线性表示，且 $s<t$，则必有 (Ⅰ) 线性相关，
②若向量组 (Ⅱ) 可由 (Ⅰ) 线性表示，且 $s<t$，则必有 (Ⅰ) 线性相关，
③若向量组 (Ⅰ) 可由 (Ⅱ) 线性表示，且 (Ⅰ) 线性无关，则必有 $s\geqslant t$，
④若向量组 (Ⅱ) 可由 (Ⅰ) 线性表示，且 (Ⅰ) 线性无关，则必有 $s\geqslant t$，
正确的是（ ）。
(A) ①④
(B) ①③
(C) ②③
(D) ②④`, a: R`(B)`, sol: R`【解】由"以少表多，多的相关"，命题 ① 正确，③ 是 ① 的逆否命题，也正确。选项 B 正确。` },
      { n: "(5)", q: R`设 $\alpha_1=(a_1,a_2,a_3)^T,\alpha_2=(b_1,b_2,b_3)^T,\alpha_3=(c_1,c_2,c_3)^T$，其中 $a_i^2+b_i^2\neq0\ (i=1,2,3)$，则三条直线 $a_ix+b_iy+c_i=0\ (i=1,2,3)$ 恰好仅交于一点的充要条件是（ ）。
(A) $r(\alpha_1,\alpha_2,\alpha_3)=3$
(B) $r(\alpha_1,\alpha_2,\alpha_3)=1$
(C) $r(\alpha_1,\alpha_2,\alpha_3)=r(\alpha_1,\alpha_2)$
(D) $r(\alpha_1,\alpha_2,\alpha_3)=r(\alpha_1,\alpha_2)=2$`, a: R`(D)`, sol: R`【解】三直线交于一点等价于存在唯一 $x,y$ 使 $x\alpha_1+y\alpha_2=-\alpha_3$，即 $\alpha_3$ 可由 $\alpha_1,\alpha_2$ 唯一表示，故 $\alpha_1,\alpha_2,\alpha_3$ 线性相关且 $\alpha_1,\alpha_2$ 线性无关，即 $r(\alpha_1,\alpha_2,\alpha_3)=r(\alpha_1,\alpha_2)=2$，选项 D 正确。` },
      { n: "(6)", q: R`设 $\alpha_1,\alpha_2,\alpha_3$ 均为 3 维向量，则对任意常数 $k$ 和 $\mu$，向量组 $\alpha_1+k\alpha_3,\alpha_2+\mu\alpha_3$ 线性无关是向量组 $\alpha_1,\alpha_2,\alpha_3$ 线性无关的（ ）。
(A) 充分必要条件
(B) 充分非必要条件
(C) 必要非充分条件
(D) 既非充分又非必要条件`, a: R`(C)`, sol: R`【解】若 $\alpha_1,\alpha_2,\alpha_3$ 线性无关，则 $r(\alpha_1+k\alpha_3,\alpha_2+\mu\alpha_3)=2$，线性无关。反之取 $\alpha_3=0$，$\alpha_1,\alpha_2$ 无关时结论成立但 $\alpha_1,\alpha_2,\alpha_3$ 相关，故为必要非充分条件，选项 C 正确。` },
      { n: "(7)", q: R`设 $\alpha_1=\begin{pmatrix}1\\0\\0\\c_1\end{pmatrix},\alpha_2=\begin{pmatrix}1\\2\\0\\c_2\end{pmatrix},\alpha_3=\begin{pmatrix}-1\\2\\3\\c_3\end{pmatrix},\alpha_4=\begin{pmatrix}-2\\1\\5\\c_4\end{pmatrix}$，其中 $c_1,c_2,c_3,c_4$ 为任意常数，则（ ）。
(A) $\alpha_1,\alpha_2,\alpha_3$ 线性无关
(B) $\alpha_1,\alpha_2,\alpha_3$ 线性相关
(C) $\alpha_1,\alpha_2,\alpha_3,\alpha_4$ 线性无关
(D) $\alpha_1,\alpha_2,\alpha_3,\alpha_4$ 线性相关`, a: R`(A)`, sol: R`【解】$\alpha_1,\alpha_2,\alpha_3$ 前三个分量组成的向量组线性无关，增加分量后仍线性无关，选项 A 正确。` },
      { n: "(8)", q: R`设向量组 $\alpha_1,\alpha_2,\alpha_1-2\alpha_2+\alpha_3$ 线性无关，则下列向量组线性无关的是（ ）。
(A) $\alpha_1+\alpha_2,\alpha_2+\alpha_3,\alpha_3-\alpha_1$
(B) $\alpha_1,\alpha_2,\alpha_3$
(C) $\alpha_1-\alpha_2,\alpha_2-\alpha_3,\alpha_1-2\alpha_2+\alpha_3$
(D) $\alpha_1+\alpha_2,\alpha_2+\alpha_3,\alpha_1+2\alpha_2+\alpha_3$`, a: R`(B)`, sol: R`【解】$\alpha_1,\alpha_2,\alpha_3$ 与 $\alpha_1,\alpha_2,\alpha_1-2\alpha_2+\alpha_3$ 可互相线性表示，秩相同，故 $\alpha_1,\alpha_2,\alpha_3$ 线性无关，选项 B 正确。` }
    ]
  };
})();
