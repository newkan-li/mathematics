window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q880_s54"] = {
    id: "q880_s54",
    ch: "880题 · 线代 · 第七章 行列式",
    title: "综合题·解答题",
    probTitle: "第七章 综合题 · 解答题（含原书解析）",
    book: "李林《精讲精练 880 题（数学二）》2026",
    problems: [
      { n: "(1)", q: R`计算 $n$ 阶行列式 $D_n=\begin{vmatrix}b-a_1^2&-a_1a_2&\cdots&-a_1a_n\\-a_2a_1&b-a_2^2&\cdots&-a_2a_n\\\vdots&\vdots&&\vdots\\-a_na_1&-a_na_2&\cdots&b-a_n^2\end{vmatrix}$。`, a: R`$b^{n-1}\left(b-\sum\limits_{i=1}^na_i^2\right)$`, sol: R`【解】用加边法，加边后化为箭形行列式：$D_n=\begin{vmatrix}1&a_1&a_2&\cdots&a_n\\a_1&b&0&\cdots&0\\a_2&0&b&\cdots&0\\\vdots&\vdots&\vdots&&\vdots\\a_n&0&0&\cdots&b\end{vmatrix}=b^{n-1}\left(b-\sum\limits_{i=1}^na_i^2\right)$。` },
      { n: "(2)", q: R`计算 $n$ 阶行列式 $D_n=\begin{vmatrix}a+b_1&a&\cdots&a\\a&a+b_2&\cdots&a\\\vdots&\vdots&&\vdots\\a&a&\cdots&a+b_n\end{vmatrix}$。`, a: R`$\left(1+\sum\limits_{i=1}^n\frac a{b_i}\right)\prod\limits_{j=1}^nb_j$`, sol: R`【解】用加边法，得 $D_n=\begin{vmatrix}1&-a&-a&\cdots&-a\\1&b_1&0&\cdots&0\\1&0&b_2&\cdots&0\\\vdots&\vdots&\vdots&&\vdots\\1&0&0&\cdots&b_n\end{vmatrix}$，为箭形行列式，故 $D_n=\left(1+\sum\limits_{i=1}^n\frac a{b_i}\right)\prod\limits_{j=1}^nb_j$。
【注】除主对角线外，第 $i$ 行（列）元素与第 $j$ 行（列）元素有倍数关系或相同时，可用加边法。` },
      { n: "(3)", q: R`计算 $n$ 阶行列式 $D_n=\begin{vmatrix}a_0&-1&0&\cdots&0&0\\a_1&x&-1&\cdots&0&0\\a_2&0&x&\cdots&0&0\\\vdots&\vdots&\vdots&&\vdots&\vdots\\a_{n-2}&0&0&\cdots&x&-1\\a_{n-1}&0&0&\cdots&0&x\end{vmatrix}$。`, a: R`$a_0x^{n-1}+a_1x^{n-2}+\cdots+a_{n-2}x+a_{n-1}$`, sol: R`【解】按第 $n$ 行展开，递推得 $D_n=a_{n-1}+xD_{n-1}=a_{n-1}+a_{n-2}x+x^2D_{n-2}=\cdots=a_0x^{n-1}+a_1x^{n-2}+\cdots+a_{n-2}x+a_{n-1}$。` },
      { n: "(4)", q: R`计算 $D_n=\begin{vmatrix}a&b&0&\cdots&0&0\\c&a&b&\cdots&0&0\\0&c&a&\cdots&0&0\\\vdots&\vdots&\vdots&&\vdots&\vdots\\0&0&0&\cdots&a&b\\0&0&0&\cdots&c&a\end{vmatrix}\ (a^2-4bc\geqslant0)$。`, a: R`$D_n=\begin{cases}\dfrac{\mu^{n+1}-k^{n+1}}{\mu-k},&k\neq\mu,\\[2mm](n+1)\mu^n,&k=\mu,\end{cases}$ 其中 $k,\mu=\dfrac{a\mp\sqrt{a^2-4bc}}2$`, sol: R`【解】三对角行列式，按第 1 列展开得 $D_n=aD_{n-1}-bcD_{n-2}$。化为 $D_n-kD_{n-1}=\mu(D_{n-1}-kD_{n-2})$，其中 $k+\mu=a,k\mu=bc$。递推得 $D_n=\mu^n+k\mu^{n-1}+\cdots+k^n$，故 $D_n=\begin{cases}\frac{\mu^{n+1}-k^{n+1}}{\mu-k},&k\neq\mu,\\(n+1)\mu^n,&k=\mu,\end{cases}$ 其中 $k,\mu$ 是 $x^2-ax+bc=0$ 的两根。
【注】此题推出了一般三对角行列式的结论。` }
    ]
  };
})();
