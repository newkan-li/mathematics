window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["jc08_s9"] = {
    id: "jc08_s9",
    ch: "第二章 矩阵",
    title: "零基础进阶题",
    probTitle: "第二章 矩阵 零基础进阶题（含原书解析）",
    book: "李永乐《复习全书·基础篇 零基础进阶题》",
    pages: [38, 40],
    img: "assets/img/jcadv",
    problems: [
      { n: "1", q: R`矩阵 \(A=\begin{pmatrix}0&0&7&3\\0&0&9&4\\5&2&0&0\\2&1&0&0\end{pmatrix}\) 的逆矩阵 \(A^{-1}\) 为 ______。`, a: "", sol: R`若方阵 \(A_1,A_2\) 可逆，由于
\[
\begin{bmatrix}
O&A_1\\
A_2&O
\end{bmatrix}
\begin{bmatrix}
O&A_2^{-1}\\
A_1^{-1}&O
\end{bmatrix}
=
\begin{bmatrix}
E&O\\
O&E
\end{bmatrix},
\]
所以 \(\begin{bmatrix}O&A_1\\A_2&O\end{bmatrix}\) 可逆，且
\[
\begin{bmatrix}
O&A_1\\
A_2&O
\end{bmatrix}^{-1}
=
\begin{bmatrix}
O&A_2^{-1}\\
A_1^{-1}&O
\end{bmatrix}.
\]
由于
\[
\begin{bmatrix}
7&3\\
9&4
\end{bmatrix}^{-1}
=
\begin{bmatrix}
4&-3\\
-9&7
\end{bmatrix},
\quad
\begin{bmatrix}
5&2\\
2&1
\end{bmatrix}^{-1}
=
\begin{bmatrix}
1&-2\\
-2&5
\end{bmatrix},
\]
所以
\[
A^{-1}=
\begin{pmatrix}
0&0&7&3\\
0&0&9&4\\
5&2&0&0\\
2&1&0&0
\end{pmatrix}^{-1}
=
\begin{pmatrix}
0&0&1&-2\\
0&0&-2&5\\
4&-3&0&0\\
-9&7&0&0
\end{pmatrix}.
\]` },
      { n: "2", q: R`设 4 阶方阵 \(A\) 的秩为 2，则其伴随矩阵 \(A^*\) 的秩为 ______。`, a: "", sol: R`由于 4 阶方阵 \(A\) 的秩为 2,所以 \(A\) 的 3 阶子式均为零,于是 \(A\) 的每一元素的代数余子式 \(A_{ij}=0\),从而 \(A^{*}=O\),故其秩 \(r(A^{*})=0\).` },
      { n: "3", q: R`设矩阵 \(A=\begin{pmatrix}2&1&0\\1&2&0\\0&0&1\end{pmatrix}\)，矩阵 \(B\) 满足 \(BA^*=2BA^*+E\)，其中 \(A^*\) 为 \(A\) 的伴随矩阵，\(E\) 是单位矩阵，则 \(B=\) ______。`, a: "", sol: R`\(BA^{*}=2BA^{*}+E\Rightarrow BA^{*}=-E\Rightarrow BA^{*}A=-A\Rightarrow |A|B=-A\)

由于
\[
|A|=
\begin{vmatrix}
2&1&0\\
1&2&0\\
0&0&1
\end{vmatrix}=3,
\]
所以
\[
B=-\frac{1}{3}
\begin{pmatrix}
2&1&0\\
1&2&0\\
0&0&1
\end{pmatrix}.
\]` },
      { n: "4", q: R`已知方阵 \(A\) 的逆矩阵 \(A^{-1}=\begin{pmatrix}0&0&2\\0&1&0\\3&0&0\end{pmatrix}\)，则 \(A^*=\) ______。`, a: "", sol: R`由于
\[
A^{-1}=
\begin{pmatrix}
0&0&2\\
0&1&0\\
3&0&0
\end{pmatrix},
\]
故
\[
|A^{-1}|=
\begin{vmatrix}
0&0&2\\
0&1&0\\
3&0&0
\end{vmatrix}=-6,
\]
于是 \(|A|=-\frac{1}{6}\).所以
\[
A^{*}=|A|A^{-1}=-\frac{1}{6}
\begin{pmatrix}
0&0&2\\
0&1&0\\
3&0&0
\end{pmatrix}.
\]` },
      { n: "5", q: R`已知 3 阶非零矩阵 \(A\) 满足 \(A^*=A^{\mathrm{T}}\)，其中 \(A^*\) 为矩阵 \(A\) 的伴随矩阵，\(A^{\mathrm{T}}\) 为矩阵 \(A\) 的转置，那么矩阵 \(A\) 第一行元素的平方和 \(a_{11}^2+a_{12}^2+a_{13}^2=\) ______。`, a: "", sol: R`由于 \(A^{*}=A^{T}\),即
\[
\begin{pmatrix}
A_{11}&A_{21}&A_{31}\\
A_{12}&A_{22}&A_{32}\\
A_{13}&A_{23}&A_{33}
\end{pmatrix}
=
\begin{pmatrix}
a_{11}&a_{21}&a_{31}\\
a_{12}&a_{22}&a_{32}\\
a_{13}&a_{23}&a_{33}
\end{pmatrix},
\]
所以 \(A_{ij}=a_{ij}(i,j=1,2,3)\).

故 \(a_{11}^{2}+a_{12}^{2}+a_{13}^{2}=a_{11}A_{11}+a_{12}A_{12}+a_{13}A_{13}=|A|\).` },
      { n: "6", q: R`设 \(A\) 为 2 阶矩阵，将 \(A\) 的第 2 行乘以 \((-3)\) 得到矩阵 \(B\)，若 \(B=\begin{pmatrix}1&2\\3&4\end{pmatrix}\)，则矩阵 \(A=\) ______。`, a: "", sol: R`由于 \(A\) 的第 2 行乘以 \((-3)\) 得到矩阵 \(B\),所以
\[
\begin{pmatrix}
1&0\\
0&-3
\end{pmatrix}A=B,
\]
于是 \(A=\begin{pmatrix}1&0\\0&-3\end{pmatrix}^{-1}B\),又 \(B=\begin{pmatrix}1&2\\3&4\end{pmatrix}\),故
\[
A=
\begin{pmatrix}
1&0\\
0&-3
\end{pmatrix}^{-1}B
=
\begin{pmatrix}
1&0\\
0&-\frac{1}{3}
\end{pmatrix}
\begin{pmatrix}
1&2\\
3&4
\end{pmatrix}
=
\begin{pmatrix}
1&2\\
-1&-\frac{4}{3}
\end{pmatrix}.
\]` },
      { n: "7", q: R`设 \(A\) 为 2 阶矩阵，将 \(A\) 第 2 列的 \((-3)\) 倍加到第 1 列得到矩阵 \(B\)，若 \(B=\begin{pmatrix}1&2\\3&4\end{pmatrix}\)，则矩阵 \(A=\) ______。`, a: "", sol: R`由于 \(A\) 第 2 列的 \((-3)\) 倍加到第 1 列得到矩阵 \(B\),所以 \(A\begin{pmatrix}1&0\\-3&1\end{pmatrix}=B\),于是 \(A=B\begin{pmatrix}1&0\\-3&1\end{pmatrix}^{-1}\),又 \(B=\begin{pmatrix}1&2\\3&4\end{pmatrix}\),故
\[
A=B
\begin{pmatrix}
1&0\\
-3&1
\end{pmatrix}^{-1}
=
\begin{pmatrix}
1&2\\
3&4
\end{pmatrix}
\begin{pmatrix}
1&0\\
3&1
\end{pmatrix}
=
\begin{pmatrix}
7&2\\
15&4
\end{pmatrix}.
\]` },
      { n: "8", q: R`设 3 阶矩阵 \(A=(\alpha_1,\alpha_2,\alpha_3)\)，\(e_2=(0,1,0)^{\mathrm{T}}\)，则 \(Ae_2=\) ______。`, a: "", sol: R`将矩阵 \(A\) 按列分块,列矩阵 \(e_{2}\) 每一个元素是一块,则符合矩阵乘法的分块原则,即左矩阵列的分法与右矩阵行的分法一致,从而
\[
Ae_{2}=[\alpha_{1},\alpha_{2},\alpha_{3}]
\begin{pmatrix}
0\\
1\\
0
\end{pmatrix}
=\alpha_{2}.
\]` },
      { n: "9", q: R`设 \(A,B\) 都是 3 阶矩阵，且 \(|A|=3\)，\(|B|=\frac{2}{3}\)，则 \(|2AB^{-1}|=\) ______。`, a: "", sol: R`由于 \(|B^{-1}|=\frac{1}{|B|}=\frac{3}{2}\),所以 \(|2AB^{-1}|=2^{3}|A||B^{-1}|=8\times 3\times\frac{3}{2}=36\).` },
      { n: "10", q: R`设 3 维列向量 \(\alpha=\left(\frac{1}{2},\frac{1}{2},0\right)^{\mathrm{T}}\)，矩阵 \(A=E-\alpha\alpha^{\mathrm{T}}\)，\(B=E+2\alpha\alpha^{\mathrm{T}}\)，则 \(AB=\)

(A) \(O\).　(B) \(-E\).　(C) \(E\).　(D) \(E+\alpha\alpha^{\mathrm{T}}\).`, a: "(C)", sol: R`由于 \(\alpha=\left(\frac{1}{2},\frac{1}{2},0\right)^{T}\),所以
\[
\alpha^{T}\alpha=
\left(\frac{1}{2},\frac{1}{2},0\right)
\begin{pmatrix}
\frac{1}{2}\\
\frac{1}{2}\\
0
\end{pmatrix}
=\frac{1}{2}.
\]
于是
\[
\begin{aligned}
AB&=(E-\alpha\alpha^{T})(E+2\alpha\alpha^{T})
=E+2\alpha\alpha^{T}-\alpha\alpha^{T}-(\alpha\alpha^{T})(2\alpha\alpha^{T})\\
&=E+\alpha\alpha^{T}-2\alpha(\alpha^{T}\alpha)\alpha^{T}
=E+\alpha\alpha^{T}-\alpha\alpha^{T}=E.
\end{aligned}
\]
故正确选项为(C).` },
      { n: "11", q: R`设 \(A,B\) 为任意 \(n\) 阶矩阵，则下列各式中正确的是

(A) \((A+E)(A-E)=A^2-E\).　(B) \((AB)^2=A^2B^2\).
(C) \((A+B)(A-B)=A^2-B^2\).　(D) 由 \(AB=O\) 必可推出 \(A=O\) 或 \(B=O\).`, a: "(A)", sol: R`由于 \((A+E)(A-E)=A^{2}-AE+EA-E^{2}=A^{2}-E\),所以选项(A)正确.

举例说明其他选项不正确,若 \(A=\begin{pmatrix}1&0\\0&0\end{pmatrix},B=\begin{pmatrix}0&1\\1&0\end{pmatrix}\),由于
\[
(AB)^{2}=
\left[
\begin{pmatrix}
1&0\\
0&0
\end{pmatrix}
\begin{pmatrix}
0&1\\
1&0
\end{pmatrix}
\right]^{2}
=
\begin{pmatrix}
0&1\\
0&0
\end{pmatrix}^{2}
=
\begin{pmatrix}
0&0\\
0&0
\end{pmatrix},
\]
\[
A^{2}B^{2}=
\begin{pmatrix}
1&0\\
0&0
\end{pmatrix}^{2}
\begin{pmatrix}
0&1\\
1&0
\end{pmatrix}^{2}
=
\begin{pmatrix}
1&0\\
0&0
\end{pmatrix}
\begin{pmatrix}
1&0\\
0&1
\end{pmatrix}
=
\begin{pmatrix}
1&0\\
0&0
\end{pmatrix}.
\]
\[
\begin{aligned}
(A+B)(A-B)
&=\left[
\begin{pmatrix}
1&0\\
0&0
\end{pmatrix}
+
\begin{pmatrix}
0&1\\
1&0
\end{pmatrix}
\right]
\left[
\begin{pmatrix}
1&0\\
0&0
\end{pmatrix}
-
\begin{pmatrix}
0&1\\
1&0
\end{pmatrix}
\right]\\
&=
\begin{pmatrix}
1&1\\
1&0
\end{pmatrix}
\begin{pmatrix}
1&-1\\
-1&0
\end{pmatrix}
=
\begin{pmatrix}
0&-1\\
1&-1
\end{pmatrix}.
\end{aligned}
\]
\[
A^{2}-B^{2}=
\begin{pmatrix}
1&0\\
0&0
\end{pmatrix}^{2}
-
\begin{pmatrix}
0&1\\
1&0
\end{pmatrix}^{2}
=
\begin{pmatrix}
1&0\\
0&0
\end{pmatrix}
-
\begin{pmatrix}
1&0\\
0&1
\end{pmatrix}
=
\begin{pmatrix}
0&0\\
0&-1
\end{pmatrix}.
\]
故 \((AB)^{2}\neq A^{2}B^{2}\),\((A+B)(A-B)\neq A^{2}-B^{2}\),所以选项(B)(C)不正确.

若 \(A=\begin{pmatrix}1&0\\0&0\end{pmatrix}\neq O,B=\begin{pmatrix}0&0\\1&0\end{pmatrix}\neq O\),但 \(AB=O\),所以选项(D)不正确.` },
      { n: "12", q: R`设 \(A,B,C\) 均为 \(n\) 阶方阵，且满足 \(ABC=E\)，则下列选项正确的是

(A) \(A^{-1}=B^{-1}C^{-1}\).　(B) \(A^{-1}=C^{-1}B^{-1}\).
(C) \(B^{-1}=AC\).　(D) \(B^{-1}=CA\).`, a: "(D)", sol: R`由于 \(ABC=E,A,B,C\) 均为 \(n\) 阶方阵,所以 \(|A||B||C|=|E|=1\),从而 \(A,B,C\) 均为可逆矩阵.在等式 \(ABC=E\) 两端左乘 \(A^{-1}\),右乘 \(C^{-1}\) 得 \(B=A^{-1}C^{-1}\),故 \(B^{-1}=CA\),正确选项为(D).` },
      { n: "13", q: R`下列命题中正确的是

① 如果矩阵 \(AB=E\)，则 \(A\) 可逆且 \(A^{-1}=B\)；
② 如果 \(n\) 阶矩阵 \(A,B\) 满足 \((AB)^2=E\)，则 \((BA)^2=E\)；
③ 如果矩阵 \(A,B\) 均为 \(n\) 阶不可逆方阵，则 \(A+B\) 必不可逆；
④ 如果矩阵 \(A,B\) 均为 \(n\) 阶不可逆方阵，则 \(AB\) 必不可逆.

(A) ①②.　(B) ①④.　(C) ②③.　(D) ②④.`, a: "(D)", sol: R`① 命题不正确,例如:
\[
A=
\begin{pmatrix}
1&0&0\\
0&1&0
\end{pmatrix},
B=
\begin{pmatrix}
1&0\\
0&1\\
1&1
\end{pmatrix},
AB=
\begin{pmatrix}
1&0\\
0&1
\end{pmatrix}.
\]
\(A,B\) 都不是方阵,当然不能可逆.如果加上条件,\(A,B\) 均为 \(n\) 阶矩阵,则命题正确.

② 命题正确.由于 \((AB)^{2}=E\),所以 \(A(BAB)=E\),因为 \(A,B\) 均为 \(n\) 阶矩阵,所以矩阵 \(A\) 与矩阵 \(BAB\) 都可逆,且 \(A^{-1}=BAB\),故 \((BAB)A=E\),即 \((BA)^{2}=E\).

③ 命题不正确,例如:
\[
A=
\begin{pmatrix}
1&0\\
0&0
\end{pmatrix},
B=
\begin{pmatrix}
0&0\\
0&1
\end{pmatrix},
A+B=
\begin{pmatrix}
1&0\\
0&1
\end{pmatrix}.
\]
矩阵 \(A,B\) 均为不可逆矩阵,但 \(A+B\) 为可逆矩阵.

④ 命题正确.由于 \(A,B\) 均为 \(n\) 阶不可逆矩阵,故 \(|A|=0,|B|=0\),于是 \(|AB|=|A||B|=0\),所以矩阵 \(AB\) 不可逆.

综上,正确选项为(D).` },
      { n: "14", q: R`设 \(A,B,C\) 均为 \(n\) 阶矩阵，\(E\) 为 \(n\) 阶单位矩阵，若 \(B=E+AB\)，\(C=A+CA\)，则 \(B-C\) 为

(A) \(E\).　(B) \(-E\).　(C) \(A\).　(D) \(-A\).`, a: "(A)", sol: R`由于 \(B=E+AB\),所以 \((E-A)B=E\).又 \(A,B\) 均为 \(n\) 阶矩阵,所以 \(B\) 与 \((E-A)\) 均可逆,且 \(B=(E-A)^{-1}\).

由于 \(C=A+CA\),所以 \(C(E-A)=A\),故 \(C=A(E-A)^{-1}\).从而
\[
B-C=(E-A)^{-1}-A(E-A)^{-1}=(E-A)(E-A)^{-1}=E.
\]
正确选项为(A).` },
      { n: "15", q: R`设 \(A\) 为 3 阶矩阵，将 \(A\) 的第 2 行加到第 1 行得 \(B\)，再将 \(B\) 的第 1 列的 \(-1\) 倍加到第 2 列得 \(C\)，记 \(P=\begin{pmatrix}1&1&0\\0&1&0\\0&0&1\end{pmatrix}\)，则必有

(A) \(C=P^{-1}AP\).　(B) \(C=PAP^{-1}\).　(C) \(C=P^{\mathrm{T}}AP\).　(D) \(C=PAP^{\mathrm{T}}\).`, a: "(B)", sol: R`由题设将 \(A\) 的第 2 行加到第 1 行得 \(B\),所以
\[
\begin{pmatrix}
1&1&0\\
0&1&0\\
0&0&1
\end{pmatrix}A=B.
\]
由于将 \(B\) 的第 1 列的 \(-1\) 倍加到第 2 列得 \(C\),故
\[
B
\begin{pmatrix}
1&-1&0\\
0&1&0\\
0&0&1
\end{pmatrix}=C.
\]
由于
\[
P=
\begin{pmatrix}
1&1&0\\
0&1&0\\
0&0&1
\end{pmatrix},
\]
于是
\[
P^{-1}=
\begin{pmatrix}
1&-1&0\\
0&1&0\\
0&0&1
\end{pmatrix},
\]
所以 \(PAP^{-1}=C\),正确选项为(B).` },
      { n: "16", q: R`设 \(A,B\) 均为 \(n\) 阶方阵，则下列不正确的是

(A) \(|A+B|=|A|+|B|\).　(B) \(|AB|=|A|\cdot|B|\).
(C) \(|kA|=k^n|A|\).　(D) \(|A^{\mathrm{T}}|=|A|\).`, a: "(A)", sol: R`若 \(A=\begin{pmatrix}1&0\\0&0\end{pmatrix},B=\begin{pmatrix}0&0\\0&1\end{pmatrix}\),则
\[
|A|=
\begin{vmatrix}
1&0\\
0&0
\end{vmatrix}=0,
|B|=
\begin{vmatrix}
0&0\\
0&1
\end{vmatrix}=0,
\]
\[
|A+B|=
\left|
\begin{pmatrix}
1&0\\
0&0
\end{pmatrix}
+
\begin{pmatrix}
0&0\\
0&1
\end{pmatrix}
\right|
=
\begin{vmatrix}
1&0\\
0&1
\end{vmatrix}=1,
\]
所以 \(|A+B|\neq |A|+|B|\),应选(A).` },
      { n: "17", q: R`设 3 阶矩阵 \(A\) 的行列式 \(|A|=-4\)，\(|A^2+E|=16\)，则 \(|A+A^{-1}|=\)

(A) 2.　(B) \(-2\).　(C) 4.　(D) \(-4\).
#`, a: "(D)", sol: R`\[
\begin{aligned}
|A+A^{-1}|
&=|A+A^{-1}||AA^{-1}|\\
&=|A+A^{-1}||A||A^{-1}|\\
&=|(A+A^{-1})A||A^{-1}|\\
&=|A^{2}+E||A^{-1}|\\
&=16\times\left(-\frac{1}{4}\right)=-4.
\end{aligned}
\]

## 第三章 向量` },
    ]
  };
})();
