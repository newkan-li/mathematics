window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q880_s52"] = {
    id: "q880_s52",
    ch: "880题 · 线代 · 第七章 行列式",
    title: "基础题·解答题",
    probTitle: "第七章 基础题 · 解答题（含原书解析）",
    book: "李林《精讲精练 880 题（数学二）》2026",
    problems: [
      { n: "(1)", q: R`计算 $n$ 阶行列式 $D_n=\begin{vmatrix}b&a&a&\cdots&a\\a&b&a&\cdots&a\\\vdots&\vdots&\vdots&&\vdots\\a&a&a&\cdots&b\end{vmatrix}$。`, a: R`$[b+(n-1)a](b-a)^{n-1}$`, sol: R`【解】方法一（行加法）：各列元素之和相等，将第 2 至第 $n$ 行加到第 1 行，提取 $[b+(n-1)a]$，再化行化简得 $D_n=[b+(n-1)a](b-a)^{n-1}$。
方法二（加边法）：加边后化为箭形行列式，$D_n=(b-a)^{n-1}[b+(n-1)a]$。` },
      { n: "(2)", q: R`证明：$D_n=\begin{vmatrix}x&-1&0&\cdots&0&0\\0&x&-1&\cdots&0&0\\\vdots&\vdots&\vdots&&\vdots&\vdots\\0&0&0&\cdots&x&-1\\a_n&a_{n-1}&a_{n-2}&\cdots&a_2&x+a_1\end{vmatrix}=x^n+\sum\limits_{i=1}^na_ix^{n-i}$。`, a: R`证明见解析`, sol: R`【证】方法一（数学归纳法）：$n=1$ 时 $D_1=x+a_1$；$n=2$ 时 $D_2=x^2+a_1x+a_2$，成立。设 $n=k-1$ 成立，则 $D_k=xD_{k-1}+a_k=x^k+a_1x^{k-1}+\cdots+a_k$，成立。
方法二（递推法）：按第 1 列展开得 $D_n=xD_{n-1}+a_n$，依次代入即得结论。` },
      { n: "(3)", q: R`计算 $n$ 阶行列式 $D_n=\begin{vmatrix}2&-1&0&\cdots&0&0\\-1&2&-1&\cdots&0&0\\0&-1&2&\cdots&0&0\\\vdots&\vdots&\vdots&&\vdots&\vdots\\0&0&0&\cdots&2&-1\\0&0&0&\cdots&-1&2\end{vmatrix}$。`, a: R`$n+1$`, sol: R`【解】三对角行列式，按第 1 行展开得 $D_n=2D_{n-1}-D_{n-2}$，即 $D_n-D_{n-1}=D_{n-1}-D_{n-2}=\cdots=D_2-D_1=1$，故 $D_n=D_1+(n-1)=2+(n-1)=n+1$。` },
      { n: "(4)", q: R`计算 $D_n=\begin{vmatrix}a_1&b_1&0&\cdots&0&0\\0&a_2&b_2&\cdots&0&0\\0&0&a_3&\cdots&0&0\\\vdots&\vdots&\vdots&&\vdots&\vdots\\0&0&0&\cdots&a_{n-1}&b_{n-1}\\b_n&0&0&\cdots&0&a_n\end{vmatrix}+\begin{vmatrix}a_1&0&0&\cdots&0&b_n\\b_1&a_2&0&\cdots&0&0\\0&b_2&a_3&\cdots&0&0\\\vdots&\vdots&\vdots&&\vdots&\vdots\\0&0&0&\cdots&a_{n-1}&0\\0&0&0&\cdots&b_{n-1}&a_n\end{vmatrix}$，其中 $a_i,b_i$ 均不为 $0$。`, a: R`$2a_1a_2\cdots a_n+2(-1)^{n+1}b_1b_2\cdots b_n$`, sol: R`【解】记第一、二行列式分别为 $D_1,D_2$。$D_1$ 按第 1 列展开得 $D_1=a_1a_2\cdots a_n+(-1)^{n+1}b_1b_2\cdots b_n$。$D_2$ 是 $D_1$ 的转置行列式，故 $D_2=D_1$，所以 $D_n=D_1+D_2=2a_1a_2\cdots a_n+2(-1)^{n+1}b_1b_2\cdots b_n$。` }
    ]
  };
})();
