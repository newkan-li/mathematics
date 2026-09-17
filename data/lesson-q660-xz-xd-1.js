window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q660_s8"] = {
    id: "q660_s8",
    ch: "660题 · 选择题 · 线性代数",
    title: "选择题 第 201–225 题",
    probTitle: "选择题（含原书详解）",
    book: "《数学基础过关660题（数学二）》",
    problems: [
      { n: 201, q: R`设 $\boldsymbol A=\begin{bmatrix}a_{11}&a_{12}&a_{13}\\a_{21}&a_{22}&a_{23}\\a_{31}&a_{32}&a_{33}\end{bmatrix}$，且 $|\boldsymbol A|=m$，$\boldsymbol B=\begin{bmatrix}2a_{11}&a_{13}&a_{11}+a_{12}\\2a_{21}&a_{23}&a_{21}+a_{22}\\2a_{31}&a_{33}&a_{31}+a_{32}\end{bmatrix}$，则 $|\boldsymbol B|=$
(A) $m$。 (B) $-8m$。 (C) $2m$。 (D) $-2m$。`, a: R`(D)`, sol: R`【分析】方法一　利用行列式性质将 $|\boldsymbol B|$ 用 $|\boldsymbol A|$ 表出：
$$|\boldsymbol B|=2\begin{vmatrix}a_{11}&a_{13}&a_{11}+a_{12}\\a_{21}&a_{23}&a_{21}+a_{22}\\a_{31}&a_{33}&a_{31}+a_{32}\end{vmatrix}=2\begin{vmatrix}a_{11}&a_{13}&a_{12}\\a_{21}&a_{23}&a_{22}\\a_{31}&a_{33}&a_{32}\end{vmatrix}=-2|\boldsymbol A|=-2m.$$
方法二　将 $|\boldsymbol A|$ 用 $|\boldsymbol B|$ 表出：$m=|\boldsymbol A|=-2^{-1}|\boldsymbol B|$，故 $|\boldsymbol B|=-2m$。
方法三　$|\boldsymbol B|=|2\boldsymbol\alpha_1,\boldsymbol\alpha_3,\boldsymbol\alpha_1+\boldsymbol\alpha_2|=|\boldsymbol A|\begin{vmatrix}2&0&1\\0&0&1\\0&1&0\end{vmatrix}=-2|\boldsymbol A|=-2m$。
选 (D)。
【评注】初等变换不改变行列式的非零性，但可能改变正负与大小：$|k\boldsymbol\alpha_1,\cdots|=k|\boldsymbol A|$，而 $|k\boldsymbol A|=k^n|\boldsymbol A|$，二者不能混淆。` },
      { n: 202, q: R`设 $f(x)=\begin{vmatrix}a_{11}+x&a_{12}+x&a_{13}+x&a_{14}+x\\a_{21}+x&a_{22}+x&a_{23}+x&a_{24}+x\\a_{31}+x&a_{32}+x&a_{33}+x&a_{34}+x\\a_{41}+x&a_{42}+x&a_{43}+x&a_{44}+x\end{vmatrix}$，则多项式 $f(x)$ 的 $x$ 的可能的最高方次是
(A) 1。 (B) 2。 (C) 3。 (D) 4。`, a: R`(A)`, sol: R`【分析】将第 1 行的 $-1$ 倍加到第 2,3,4 行，再按第 1 行展开：
$$f(x)=(a_{11}+x)B_{11}+(a_{12}+x)B_{12}+(a_{13}+x)B_{13}+(a_{14}+x)B_{14}=x\sum_{j=1}^4B_{1j}+\sum_{j=1}^4a_{1j}B_{1j},$$
其中 $B_{1j}$ 与 $x$ 无关。故 $f(x)$ 至多为一次多项式。选 (A)。
【评注】通过行变换消去后三行中的 $x$，$f$ 的方次不会超过 1。` },
      { n: 203, q: R`设 $\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3,\boldsymbol\beta_1,\boldsymbol\beta_2$ 均为四维列向量，$\boldsymbol A=[\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3,\boldsymbol\beta_1]$，$\boldsymbol B=[\boldsymbol\alpha_3,\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\beta_2]$，且 $|\boldsymbol A|=1$，$|\boldsymbol B|=2$，则 $|\boldsymbol A+\boldsymbol B|=$
(A) 9。 (B) 6。 (C) 3。 (D) 1。`, a: R`(B)`, sol: R`【分析】$\boldsymbol A+\boldsymbol B=[\boldsymbol\alpha_1+\boldsymbol\alpha_3,\boldsymbol\alpha_2+\boldsymbol\alpha_1,\boldsymbol\alpha_3+\boldsymbol\alpha_2,\boldsymbol\beta_1+\boldsymbol\beta_2]$。用行列式性质：
$$|\boldsymbol A+\boldsymbol B|=2|\boldsymbol\alpha_1+\boldsymbol\alpha_2+\boldsymbol\alpha_3,\boldsymbol\alpha_2+\boldsymbol\alpha_1,\boldsymbol\alpha_3+\boldsymbol\alpha_2,\boldsymbol\beta_1+\boldsymbol\beta_2|=2|\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3,\boldsymbol\beta_1+\boldsymbol\beta_2|$$
$$=2(|\boldsymbol A|+|\boldsymbol B|)=2(1+2)=6.$$
选 (B)。
【评注】用拆项公式 $|\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3,\boldsymbol\beta_1+\boldsymbol\beta_2|=|\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3,\boldsymbol\beta_1|+|\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3,\boldsymbol\beta_2|$；$|\boldsymbol A+\boldsymbol B|$ 无运算法则，只能用行列式性质化简。` },
      { n: 204, q: R`设 $\boldsymbol A=[\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3]$ 是三阶矩阵，则下列行列式中等于 $|\boldsymbol A|$ 的是
(A) $|\boldsymbol\alpha_1-\boldsymbol\alpha_2,\boldsymbol\alpha_2-\boldsymbol\alpha_3,\boldsymbol\alpha_3-\boldsymbol\alpha_1|$。
(B) $|\boldsymbol\alpha_1+\boldsymbol\alpha_2,\boldsymbol\alpha_2+\boldsymbol\alpha_3,\boldsymbol\alpha_3+\boldsymbol\alpha_1|$。
(C) $|\boldsymbol\alpha_1+2\boldsymbol\alpha_2,\boldsymbol\alpha_3,\boldsymbol\alpha_1+\boldsymbol\alpha_2|$。
(D) $|\boldsymbol\alpha_1,\boldsymbol\alpha_2+\boldsymbol\alpha_3,\boldsymbol\alpha_1+\boldsymbol\alpha_2|$。`, a: R`(C)`, sol: R`【分析】(A) $|\boldsymbol\alpha_1-\boldsymbol\alpha_2,\boldsymbol\alpha_2-\boldsymbol\alpha_3,\boldsymbol\alpha_3-\boldsymbol\alpha_1|=|0,\boldsymbol\alpha_2-\boldsymbol\alpha_3,\boldsymbol\alpha_3-\boldsymbol\alpha_1|=0$。
(B) $=2|\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3|=2|\boldsymbol A|$。
(C) $|\boldsymbol\alpha_1+2\boldsymbol\alpha_2,\boldsymbol\alpha_3,\boldsymbol\alpha_1+\boldsymbol\alpha_2|=|\boldsymbol\alpha_2,\boldsymbol\alpha_3,\boldsymbol\alpha_1+\boldsymbol\alpha_2|=|\boldsymbol\alpha_2,\boldsymbol\alpha_3,\boldsymbol\alpha_1|=|\boldsymbol A|$。
(D) $|\boldsymbol\alpha_1,\boldsymbol\alpha_2+\boldsymbol\alpha_3,\boldsymbol\alpha_1+\boldsymbol\alpha_2|=|\boldsymbol\alpha_1,\boldsymbol\alpha_3,\boldsymbol\alpha_2|=-|\boldsymbol A|$。
选 (C)。
【评注】逐项作列变换向 $|\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3|$ 靠拢；也可将选项表成矩阵乘积的行列式。` },
      { n: 205, q: R`已知 $\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\beta_1,\boldsymbol\beta_2,\boldsymbol\gamma$ 都是三维列向量，且行列式
$$|\boldsymbol\alpha_1,\boldsymbol\beta_1,\boldsymbol\gamma|=|\boldsymbol\alpha_1,\boldsymbol\beta_2,\boldsymbol\gamma|=|\boldsymbol\alpha_2,\boldsymbol\beta_1,\boldsymbol\gamma|=|\boldsymbol\alpha_2,\boldsymbol\beta_2,\boldsymbol\gamma|=3,$$
那么 $|-2\boldsymbol\gamma,\boldsymbol\alpha_1+\boldsymbol\alpha_2,\boldsymbol\beta_1+2\boldsymbol\beta_2|=$
(A) $-18$。 (B) $-36$。 (C) 64。 (D) $-96$。`, a: R`(B)`, sol: R`【分析】用拆项与提公因子：
$$|-2\boldsymbol\gamma,\boldsymbol\alpha_1+\boldsymbol\alpha_2,\boldsymbol\beta_1+2\boldsymbol\beta_2|$$
$$=-2|\boldsymbol\alpha_1,\boldsymbol\beta_1,\boldsymbol\gamma|-4|\boldsymbol\alpha_1,\boldsymbol\beta_2,\boldsymbol\gamma|-2|\boldsymbol\alpha_2,\boldsymbol\beta_1,\boldsymbol\gamma|-4|\boldsymbol\alpha_2,\boldsymbol\beta_2,\boldsymbol\gamma|$$
$$=(-2-4-2-4)\times3=-36.$$
选 (B)。
【评注】先把第二列拆成两项、第三列拆成两项，共 4 个行列式，再各提系数并交换列把 $\boldsymbol\gamma$ 移到最后（两次交换，符号为正）。` },
      { n: 206, q: R`设 $n$ 阶矩阵 $\boldsymbol A=[\boldsymbol\alpha_1,\boldsymbol\alpha_2,\cdots,\boldsymbol\alpha_n]$，$\boldsymbol B=[\boldsymbol\alpha_n,\boldsymbol\alpha_1,\cdots,\boldsymbol\alpha_{n-1}]$，若行列式 $|\boldsymbol A|=1$，则 $|\boldsymbol A-\boldsymbol B|=$
(A) 0。 (B) 2。 (C) $1+(-1)^{n+1}$。 (D) $1+(-1)^n$。`, a: R`(A)`, sol: R`【分析】$\boldsymbol A-\boldsymbol B=[\boldsymbol\alpha_1-\boldsymbol\alpha_n,\boldsymbol\alpha_2-\boldsymbol\alpha_1,\cdots,\boldsymbol\alpha_n-\boldsymbol\alpha_{n-1}]$。将 $|\boldsymbol A-\boldsymbol B|$ 的各列加到第一列，第一列变为 0，故 $|\boldsymbol A-\boldsymbol B|=0$。选 (A)。
【评注】向量组 $\boldsymbol\alpha_1-\boldsymbol\alpha_n,\boldsymbol\alpha_2-\boldsymbol\alpha_1,\cdots,\boldsymbol\alpha_n-\boldsymbol\alpha_{n-1}$ 之和为 0，必线性相关，对应齐次方程组有非零解。` },
      { n: 207, q: R`已知 $\boldsymbol A=\begin{bmatrix}2&0&0\\0&1&3\\0&2&5\end{bmatrix}$，矩阵 $\boldsymbol B$ 满足 $\boldsymbol A^*\boldsymbol B+2\boldsymbol A^{-1}=\boldsymbol B$，其中 $\boldsymbol A^*$ 是 $\boldsymbol A$ 的伴随矩阵，则 $|\boldsymbol B|=$
(A) $\dfrac2{15}$。 (B) $\dfrac29$。 (C) $\dfrac1{30}$。 (D) $\dfrac1{12}$。`, a: R`(A)`, sol: R`【分析】对 $\boldsymbol A^*\boldsymbol B+2\boldsymbol A^{-1}=\boldsymbol B$ 左乘 $\boldsymbol A$，用 $\boldsymbol{AA}^*=|\boldsymbol A|\boldsymbol E$：
$$|\boldsymbol A|\boldsymbol B+2\boldsymbol E=\boldsymbol{AB}\ \Rightarrow\ (\boldsymbol A-|\boldsymbol A|\boldsymbol E)\boldsymbol B=2\boldsymbol E.$$
而 $|\boldsymbol A|=\begin{vmatrix}2&0&0\\0&1&3\\0&2&5\end{vmatrix}=2(5-6)=-2$，故 $(\boldsymbol A+2\boldsymbol E)\boldsymbol B=2\boldsymbol E$，两边取行列式得 $|\boldsymbol A+2\boldsymbol E||\boldsymbol B|=8$。
$|\boldsymbol A+2\boldsymbol E|=\begin{vmatrix}4&0&0\\0&3&3\\0&2&7\end{vmatrix}=4(21-6)=60$，故 $|\boldsymbol B|=\dfrac8{60}=\dfrac2{15}$。选 (A)。
【评注】矩阵方程先用运算法则化简，再代入数值计算行列式。` },
      { n: 208, q: R`设 $\boldsymbol A$ 为三阶方阵，$\boldsymbol A^*$ 为 $\boldsymbol A$ 的伴随矩阵，$|\boldsymbol A|=\dfrac13$，则 $|4\boldsymbol A-(3\boldsymbol A^*)^{-1}|=$
(A) $\dfrac13$。 (B) 3。 (C) 6。 (D) 9。`, a: R`(D)`, sol: R`【分析】$(3\boldsymbol A^*)^{-1}=(3|\boldsymbol A|\boldsymbol A^{-1})^{-1}=\left(3\cdot\frac13\boldsymbol A^{-1}\right)^{-1}=\boldsymbol A$，故
$$|4\boldsymbol A-(3\boldsymbol A^*)^{-1}|=|4\boldsymbol A-\boldsymbol A|=|3\boldsymbol A|=3^3|\boldsymbol A|=9.$$
选 (D)。
【评注】$|4\boldsymbol A-\boldsymbol A|=|3\boldsymbol A|=3^3|\boldsymbol A|$（三阶）；$\boldsymbol A^*=|\boldsymbol A|\boldsymbol A^{-1}$。` },
      { n: 209, q: R`已知 $2n$ 阶行列式 $D$ 的某一列元素及其余子式都等于 $a$，则 $D=$
(A) 0。 (B) $a^2$。 (C) $-a^2$。 (D) $na^2$。`, a: R`(A)`, sol: R`【分析】设第 $j$ 列元素与其余子式均为 $a$，按第 $j$ 列展开 $D=aA_{1j}+aA_{2j}+\cdots+aA_{2n,j}$。这一列的代数余子式中有 $n$ 个为 $a$、$n$ 个为 $-a$（因 $A_{ij}=(-1)^{i+j}M_{ij}$，$2n$ 阶时正负号各半），故 $D=0$。选 (A)。
【评注】注意题设是「余子式」$M_{ij}=a$，转为代数余子式要带 $(-1)^{i+j}$；$2n$ 列中符号各半，求和抵消。` },
      { n: 210, q: R`设 $\boldsymbol A$ 是 $n$ 阶矩阵，$\boldsymbol A^*$ 是 $\boldsymbol A$ 的伴随矩阵，已知 $\boldsymbol A$ 的每行元素之和为 $k$，$\boldsymbol A^*$ 的每行元素之和为 $m$，则 $|\boldsymbol A|=$
(A) $km$。 (B) $(-1)^nkm$。 (C) $\dfrac mk$。 (D) $(-1)^n\dfrac km$。`, a: R`(A)`, sol: R`【分析】方法一　设 $\boldsymbol e=(1,1,\cdots,1)^T$。由 $\boldsymbol A\boldsymbol e=k\boldsymbol e$，两边左乘 $\boldsymbol A^*$ 得 $\boldsymbol A^*\boldsymbol A\boldsymbol e=|\boldsymbol A|\boldsymbol e=k\boldsymbol A^*\boldsymbol e=km\boldsymbol e$，故 $|\boldsymbol A|=km$。
方法二　将各列加到第 1 列得 $|\boldsymbol A|=k|\boldsymbol B|$，而 $|\boldsymbol B|$ 按第 1 列展开即为 $\boldsymbol A^*$ 第一行元素之和 $m$，故 $|\boldsymbol A|=km$。选 (A)。
【评注】「每行元素之和」用右乘全 1 列向量刻画；$\boldsymbol A^*$ 的行和恰为 $\boldsymbol A$ 的代数余子式之和。` },
      { n: 211, q: R`设 $\boldsymbol A$ 是 $n$ 阶矩阵，$|\boldsymbol A|=a$，$\boldsymbol A$ 的每列元素之和为 $k$，则 $\boldsymbol A$ 的第一行元素的代数余子式之和 $A_{11}+A_{12}+\cdots+A_{1n}=$
(A) $ka$。 (B) $\dfrac ak$。 (C) $-ka$。 (D) $-\dfrac ak$。`, a: R`(B)`, sol: R`【分析】将 $|\boldsymbol A|$ 的第 $2,3,\cdots,n$ 行加到第 1 行，因每列元素之和为 $k$，第 1 行全变为 $k$。记所得行列式为 $|\boldsymbol B|$，则 $|\boldsymbol B|=|\boldsymbol A|$，且两行列式第 1 行的代数余子式相同：
$$A_{11}+\cdots+A_{1n}=B_{11}+\cdots+B_{1n}=\frac1k(kB_{11}+\cdots+kB_{1n})=\frac1k|\boldsymbol B|=\frac ak.$$
选 (B)。
【评注】行列式按行展开：$|\boldsymbol B|=kB_{11}+\cdots+kB_{1n}$；第 1 行元素全为 $k$ 便于提取。` },
      { n: 212, q: R`设 $\boldsymbol A$ 是三阶矩阵，其中 $a_{11}\neq0$，$A_{ij}=a_{ij}$，$i=1,2,3$，$j=1,2,3$，则 $|2\boldsymbol A^{\mathrm T}|=$
(A) 0。 (B) 2。 (C) 4。 (D) 8。`, a: R`(D)`, sol: R`【分析】由 $A_{ij}=a_{ij}$ 知 $\boldsymbol A=\begin{bmatrix}A_{11}&A_{12}&A_{13}\\A_{21}&A_{22}&A_{23}\\A_{31}&A_{32}&A_{33}\end{bmatrix}=\begin{bmatrix}A_{11}&A_{21}&A_{31}\\A_{12}&A_{22}&A_{32}\\A_{13}&A_{23}&A_{33}\end{bmatrix}^{\mathrm T}=\boldsymbol A^{*\mathrm T}$，故 $\boldsymbol A^*=\boldsymbol A^{\mathrm T}$。
由 $\boldsymbol{AA}^*=\boldsymbol{AA}^{\mathrm T}=|\boldsymbol A|\boldsymbol E$，两边取行列式：$|\boldsymbol A|^2=|\boldsymbol A|^3$，故 $|\boldsymbol A|^2(|\boldsymbol A|-1)=0$。又 $|\boldsymbol A|=a_{11}A_{11}+a_{12}A_{12}+a_{13}A_{13}=a_{11}^2+a_{12}^2+a_{13}^2>0$（因 $a_{11}\neq0$），故 $|\boldsymbol A|=1$，$|2\boldsymbol A^{\mathrm T}|=2^3|\boldsymbol A|=8$。选 (D)。
【评注】$A_{ij}=a_{ij}$ 意味着 $\boldsymbol A^*=\boldsymbol A^{\mathrm T}$，即 $\boldsymbol A$ 是正交阵（$|\boldsymbol A|=1$）。` },
      { n: 213, q: R`设 $\boldsymbol A$ 是 $m\times n$ 矩阵，$\boldsymbol B$ 是 $n\times m$ 矩阵，且 $n>m$，则必有
(A) $|\boldsymbol{AB}|=0$。 (B) $|\boldsymbol{BA}|=0$。 (C) $|\boldsymbol{AB}|=|\boldsymbol{BA}|$。 (D) $\big||\boldsymbol{AB}|\,\boldsymbol{AB}\big|=|\boldsymbol{AB}|\,|\boldsymbol{AB}|$。`, a: R`(B)`, sol: R`【分析】$\boldsymbol{BA}$ 是 $n$ 阶方阵，$r(\boldsymbol{BA})\leqslant r(\boldsymbol B)\leqslant m<n$，故 $|\boldsymbol{BA}|=0$，选 (B)。
$\boldsymbol{AB}$ 是 $m$ 阶方阵，其秩可能为 $m$，故不能得出 $|\boldsymbol{AB}|=0$，(A) 错；取 $\boldsymbol A=[1,0]$、$\boldsymbol B=\begin{bmatrix}1\\0\end{bmatrix}$ 则 $|\boldsymbol{AB}|=1\neq0=|\boldsymbol{BA}|$，(C) 错；(D) 中 $\big||\boldsymbol{AB}|\boldsymbol{AB}\big|=|\boldsymbol{AB}|^m|\boldsymbol{AB}|=|\boldsymbol{AB}|^{m+1}$，(D) 错。
【评注】$n>m$ 时 $\boldsymbol{BA}$ 必降秩；$\boldsymbol A\boldsymbol x=\boldsymbol 0$ 有非零解 $\Rightarrow\boldsymbol{BA}\boldsymbol x=\boldsymbol 0$ 有非零解。` },
      { n: 214, q: R`设 $\boldsymbol A,\boldsymbol B$ 是 $n$ 阶矩阵，则下列结论正确的是
(A) $\boldsymbol{AB}=\boldsymbol O\Leftrightarrow\boldsymbol A=\boldsymbol O$ 且 $\boldsymbol B=\boldsymbol O$。
(B) $\boldsymbol A=\boldsymbol O\Leftrightarrow|\boldsymbol A|=0$。
(C) $|\boldsymbol{AB}|=0\Leftrightarrow|\boldsymbol A|=0$ 或 $|\boldsymbol B|=0$。
(D) $|\boldsymbol A|=1\Leftrightarrow\boldsymbol A=\boldsymbol E$。`, a: R`(C)`, sol: R`【分析】$|\boldsymbol{AB}|=|\boldsymbol A||\boldsymbol B|=0$，而行列式是数，故 $|\boldsymbol A|=0$ 或 $|\boldsymbol B|=0$，反之亦成立，选 (C)。
取 $\boldsymbol A=\begin{bmatrix}1&0\\0&0\end{bmatrix}$、$\boldsymbol B=\begin{bmatrix}0&0\\1&0\end{bmatrix}$，$\boldsymbol{AB}=\boldsymbol O$ 但 $\boldsymbol A,\boldsymbol B\neq\boldsymbol O$，(A) 错；$|\boldsymbol A|=0$ 但 $\boldsymbol A\neq\boldsymbol O$，(B) 错；$|\boldsymbol A|=\begin{vmatrix}1&1\\0&1\end{vmatrix}=1$ 但 $\boldsymbol A\neq\boldsymbol E$，(D) 错。
【评注】举反例越简单越好，一般取二阶矩阵即可。` },
      { n: 215, q: R`设 $\boldsymbol A=\begin{bmatrix}0&0&5&2\\0&0&2&1\\1&3&0&0\\1&2&0&0\end{bmatrix}$，则 $\boldsymbol A^{-1}=$
(A) $\begin{bmatrix}0&0&1&-2\\0&0&-2&5\\2&-3&0&0\\-1&1&0&0\end{bmatrix}$。 (B) $\begin{bmatrix}0&0&-2&3\\0&0&1&-1\\1&-2&0&0\\-2&5&0&0\end{bmatrix}$。
(C) $\begin{bmatrix}0&0&1&-3\\0&0&-1&2\\1&-2&0&0\\-2&5&0&0\end{bmatrix}$。 (D) $\begin{bmatrix}0&0&-1&3\\0&0&1&-2\\-1&2&0&0\\2&-5&0&0\end{bmatrix}$。`, a: R`(B)`, sol: R`【分析】用分块矩阵求逆公式 $\begin{bmatrix}\boldsymbol O&\boldsymbol A\\\boldsymbol B&\boldsymbol O\end{bmatrix}^{-1}=\begin{bmatrix}\boldsymbol O&\boldsymbol B^{-1}\\\boldsymbol A^{-1}&\boldsymbol O\end{bmatrix}$。
二阶矩阵 $\begin{bmatrix}5&2\\2&1\end{bmatrix}^{-1}=\begin{bmatrix}1&-2\\-2&5\end{bmatrix}$，$\begin{bmatrix}1&3\\1&2\end{bmatrix}^{-1}=-\begin{bmatrix}2&-3\\-1&1\end{bmatrix}=\begin{bmatrix}-2&3\\1&-1\end{bmatrix}$。
故 $\boldsymbol A^{-1}=\begin{bmatrix}0&0&-2&3\\0&0&1&-1\\1&-2&0&0\\-2&5&0&0\end{bmatrix}$。选 (B)。
【评注】二阶矩阵求逆：主对角线对调、副对角线变号再除以行列式。` },
      { n: 216, q: R`设 $\boldsymbol A,\boldsymbol B$ 均为 $n$ 阶可逆矩阵，正确的法则是
(A) $(\boldsymbol A+\boldsymbol B)(\boldsymbol A-\boldsymbol B)=\boldsymbol A^2-\boldsymbol B^2$。
(B) $(\boldsymbol A+\boldsymbol B)^{-1}=\boldsymbol A^{-1}+\boldsymbol B^{-1}$。
(C) $(\boldsymbol A+\boldsymbol B)^2=\boldsymbol A^2+2\boldsymbol{AB}+\boldsymbol B^2$。
(D) $(\boldsymbol{AB})^*=\boldsymbol B^*\boldsymbol A^*$。`, a: R`(D)`, sol: R`【分析】矩阵乘法无交换律，(A)(C) 均含 $\boldsymbol{AB}$ 与 $\boldsymbol{BA}$ 的差别，故不成立；$\boldsymbol A+\boldsymbol B$ 不一定可逆，且一般 $(\boldsymbol A+\boldsymbol B)^{-1}\neq\boldsymbol A^{-1}+\boldsymbol B^{-1}$，(B) 错。
对 (D)：$(\boldsymbol{AB})^*=|\boldsymbol{AB}|(\boldsymbol{AB})^{-1}=|\boldsymbol A||\boldsymbol B|\boldsymbol B^{-1}\boldsymbol A^{-1}=(|\boldsymbol B|\boldsymbol B^{-1})(|\boldsymbol A|\boldsymbol A^{-1})=\boldsymbol B^*\boldsymbol A^*$，正确。选 (D)。
【评注】$\boldsymbol A$ 与 $\boldsymbol A^{-1}$、$\boldsymbol A^*$、$\boldsymbol E$ 均可交换，故含这些因子的乘法公式可用；$(\boldsymbol{A}+\boldsymbol{E})^n$ 也可用二项式展开。` },
      { n: 217, q: R`设 $\boldsymbol A$ 是 $n$ 阶可逆阵，则下列等式不成立的是
(A) $(\boldsymbol A+\boldsymbol A^{-1})^2=\boldsymbol A^2+2\boldsymbol{AA}^{-1}+(\boldsymbol A^{-1})^2$。
(B) $(\boldsymbol A+\boldsymbol A^{\mathrm T})^2=\boldsymbol A^2+2\boldsymbol{AA}^{\mathrm T}+(\boldsymbol A^{\mathrm T})^2$。
(C) $(\boldsymbol A+\boldsymbol A^*)^2=\boldsymbol A^2+2\boldsymbol{AA}^*+(\boldsymbol A^*)^2$。
(D) $(\boldsymbol A+\boldsymbol E)^2=\boldsymbol A^2+2\boldsymbol{AE}+\boldsymbol E^2$。`, a: R`(B)`, sol: R`【分析】一般 $\boldsymbol{AA}^{\mathrm T}\neq\boldsymbol A^{\mathrm T}\boldsymbol A$（如 $\boldsymbol A=\begin{bmatrix}1&1\\0&0\end{bmatrix}$），故 $(\boldsymbol A+\boldsymbol A^{\mathrm T})^2=\boldsymbol A^2+\boldsymbol{AA}^{\mathrm T}+\boldsymbol A^{\mathrm T}\boldsymbol A+(\boldsymbol A^{\mathrm T})^2\neq\boldsymbol A^2+2\boldsymbol{AA}^{\mathrm T}+(\boldsymbol A^{\mathrm T})^2$，(B) 不成立。
而 $\boldsymbol A$ 与 $\boldsymbol A^{-1}$、$\boldsymbol A^*$、$\boldsymbol E$ 均可交换，故 (A)(C)(D) 成立。选 (B)。
【评注】展开 $(\boldsymbol X+\boldsymbol Y)^2$ 得 $\boldsymbol X^2+\boldsymbol{XY}+\boldsymbol{YX}+\boldsymbol Y^2$，仅当 $\boldsymbol{XY}=\boldsymbol{YX}$ 时才等于 $\boldsymbol X^2+2\boldsymbol{XY}+\boldsymbol Y^2$。` },
      { n: 218, q: R`设 $\boldsymbol A,\boldsymbol B$ 均 $n$ 阶可逆矩阵，且 $(\boldsymbol A+\boldsymbol B)^2=\boldsymbol E$，则 $(\boldsymbol E+\boldsymbol{BA}^{-1})^{-1}=$
(A) $(\boldsymbol A+\boldsymbol B)\boldsymbol B$。 (B) $\boldsymbol E+\boldsymbol{AB}^{-1}$。 (C) $\boldsymbol A(\boldsymbol A+\boldsymbol B)$。 (D) $(\boldsymbol A+\boldsymbol B)\boldsymbol A$。`, a: R`(C)`, sol: R`【分析】方法一　把 $\boldsymbol E=\boldsymbol{AA}^{-1}$ 代入：
$$(\boldsymbol E+\boldsymbol{BA}^{-1})^{-1}=(\boldsymbol{AA}^{-1}+\boldsymbol{BA}^{-1})^{-1}=[(\boldsymbol A+\boldsymbol B)\boldsymbol A^{-1}]^{-1}=(\boldsymbol A^{-1})^{-1}(\boldsymbol A+\boldsymbol B)^{-1}=\boldsymbol A(\boldsymbol A+\boldsymbol B)$$
（因 $(\boldsymbol A+\boldsymbol B)^2=\boldsymbol E$ 故 $(\boldsymbol A+\boldsymbol B)^{-1}=\boldsymbol A+\boldsymbol B$）。选 (C)。
方法二　逐个验算：$(\boldsymbol E+\boldsymbol{BA}^{-1})\boldsymbol A(\boldsymbol A+\boldsymbol B)=(\boldsymbol A+\boldsymbol B)(\boldsymbol A+\boldsymbol B)=\boldsymbol E$。
【评注】$(\boldsymbol A+\boldsymbol B)^{-1}$ 无运算法则，常用 $\boldsymbol E$ 的恒等变形技巧；计算型选择题可算出结果或逐项验算。` },
      { n: 219, q: R`设 $\boldsymbol A,\boldsymbol B$ 都是 $n$ 阶方阵，且 $(\boldsymbol{AB})^2=\boldsymbol E$，则必有
(A) $\boldsymbol A^{-1}=\boldsymbol B$。 (B) $\boldsymbol{AB}=-\boldsymbol E$。 (C) $\boldsymbol{AB}=\boldsymbol E$。 (D) $\boldsymbol A^{-1}=\boldsymbol{BAB}$。`, a: R`(D)`, sol: R`【分析】由 $(\boldsymbol{AB})^2=\boldsymbol{ABAB}=\boldsymbol A(\boldsymbol{BAB})=\boldsymbol E$，且 $\boldsymbol A$ 与 $\boldsymbol{BAB}$ 均为 $n$ 阶矩阵，故 $\boldsymbol A^{-1}=\boldsymbol{BAB}$，(D) 正确。
取 $\boldsymbol A=\boldsymbol E$、$\boldsymbol B=\begin{bmatrix}1&0\\0&-1\end{bmatrix}$，$(\boldsymbol{AB})^2=\boldsymbol E$ 但 $\boldsymbol A^{-1}\neq\boldsymbol B$、$\boldsymbol{AB}\neq\pm\boldsymbol E$，(A)(B)(C) 均不成立。选 (D)。
【评注】$\boldsymbol X^2=\boldsymbol E$ 不能「开方」得 $\boldsymbol X=\pm\boldsymbol E$。` },
      { n: 220, q: R`下列命题中，
① 如果矩阵 $\boldsymbol{AB}=\boldsymbol E$，则 $\boldsymbol A$ 可逆且 $\boldsymbol A^{-1}=\boldsymbol B$；
② 如果 $n$ 阶矩阵 $\boldsymbol A,\boldsymbol B$ 满足 $(\boldsymbol{AB})^2=\boldsymbol E$，则 $(\boldsymbol{BA})^2=\boldsymbol E$；
③ 如果矩阵 $\boldsymbol A,\boldsymbol B$ 均 $n$ 阶不可逆，则 $\boldsymbol A+\boldsymbol B$ 必不可逆；
④ 如果矩阵 $\boldsymbol A,\boldsymbol B$ 均 $n$ 阶不可逆，则 $\boldsymbol{AB}$ 必不可逆。
正确的是
(A) ①②。 (B) ①④。 (C) ②③。 (D) ②④。`, a: R`(D)`, sol: R`【分析】① 缺「$\boldsymbol A,\boldsymbol B$ 均 $n$ 阶」条件，如 $\begin{bmatrix}1&0&0\\0&1&0\end{bmatrix}\begin{bmatrix}1&0\\0&1\\0&0\end{bmatrix}=\begin{bmatrix}1&0\\0&1\end{bmatrix}$，但 $\boldsymbol A$ 不可逆，① 错。
② $(\boldsymbol{AB})^2=\boldsymbol{ABAB}=\boldsymbol A(\boldsymbol{BAB})=(\boldsymbol{BAB})\boldsymbol A=(\boldsymbol{BA})(\boldsymbol{BA})=(\boldsymbol{BA})^2=\boldsymbol E$，② 正确。
③ 取 $\boldsymbol A=\begin{bmatrix}1&0\\0&0\end{bmatrix}$、$\boldsymbol B=\begin{bmatrix}0&0\\0&2\end{bmatrix}$，均不可逆但 $\boldsymbol A+\boldsymbol B=\begin{bmatrix}1&0\\0&2\end{bmatrix}$ 可逆，③ 错。
④ $|\boldsymbol A|=|\boldsymbol B|=0\Rightarrow|\boldsymbol{AB}|=|\boldsymbol A||\boldsymbol B|=0$，$\boldsymbol{AB}$ 必不可逆，④ 正确。
选 (D)。
【评注】用行列式乘法公式前要检查 $\boldsymbol{AB}$ 是否为同阶方阵；②的「旋转」变形 $\boldsymbol{ABAB}=\boldsymbol A(\boldsymbol{BAB})=(\boldsymbol{BAB})\boldsymbol A$ 是关键。` },
      { n: 221, q: R`设 $\boldsymbol A,\boldsymbol B$ 均 $n$ 阶矩阵，且 $\boldsymbol{AB}=\boldsymbol A+\boldsymbol B$，则
① 若 $\boldsymbol A$ 可逆，则 $\boldsymbol B$ 可逆；
② 若 $\boldsymbol B$ 可逆，则 $\boldsymbol A+\boldsymbol B$ 可逆；
③ 若 $\boldsymbol B$ 可逆，则 $\boldsymbol A$ 可逆；
④ $\boldsymbol A-\boldsymbol E$ 恒可逆。
上述命题中，正确的命题共有
(A) 1 个。 (B) 2 个。 (C) 3 个。 (D) 4 个。`, a: R`(D)`, sol: R`【分析】由 $\boldsymbol{AB}=\boldsymbol A+\boldsymbol B$ 得 $(\boldsymbol A-\boldsymbol E)\boldsymbol B=\boldsymbol A$。
① 若 $\boldsymbol A$ 可逆，则 $|\boldsymbol A-\boldsymbol E||\boldsymbol B|=|\boldsymbol A|\neq0$，故 $|\boldsymbol B|\neq0$，$\boldsymbol B$ 可逆，① 正确。
③ 由 $\boldsymbol{AB}=\boldsymbol A+\boldsymbol B$ 中 $\boldsymbol A,\boldsymbol B$ 地位对称，由①知③也正确。
② 由 $\boldsymbol A(\boldsymbol B-\boldsymbol E)=\boldsymbol B$，$\boldsymbol B$ 可逆 $\Rightarrow\boldsymbol A$ 可逆 $\Rightarrow\boldsymbol{AB}$ 可逆 $\Rightarrow\boldsymbol A+\boldsymbol B=\boldsymbol{AB}$ 可逆，② 正确。
④ $\boldsymbol{AB}-\boldsymbol A-\boldsymbol B+\boldsymbol E=\boldsymbol E$，即 $(\boldsymbol A-\boldsymbol E)(\boldsymbol B-\boldsymbol E)=\boldsymbol E$，故 $\boldsymbol A-\boldsymbol E$ 恒可逆，④ 正确。
选 (D)。
【评注】$\boldsymbol{AB}=\boldsymbol A+\boldsymbol B$ 型常配出 $(\boldsymbol A-\boldsymbol E)(\boldsymbol B-\boldsymbol E)=\boldsymbol E$ 或 $(\boldsymbol A-\boldsymbol E)\boldsymbol B=\boldsymbol A$。` },
      { n: 222, q: R`关于命题「方阵 $\boldsymbol A$ 满足 $\boldsymbol A^2=\boldsymbol A$，且 $\boldsymbol A\neq\boldsymbol E$，则 $\boldsymbol A$ 不可逆」有如下四种证明，正确的是
(A) 由于 $\boldsymbol A^2=\boldsymbol A$，所以 $|\boldsymbol A|^2=|\boldsymbol A|$，故 $|\boldsymbol A|(|\boldsymbol A|-1)=0$。因为 $\boldsymbol A\neq\boldsymbol E$，故 $|\boldsymbol A|\neq1$，因此 $|\boldsymbol A|=0$，$\boldsymbol A$ 不可逆。
(B) 由于 $\boldsymbol A^2=\boldsymbol A$，故 $\boldsymbol A(\boldsymbol A-\boldsymbol E)=\boldsymbol O$。由于 $\boldsymbol A\neq\boldsymbol E$，从而 $\boldsymbol A-\boldsymbol E\neq\boldsymbol O$，故 $\boldsymbol A=\boldsymbol O$，所以 $\boldsymbol A$ 不可逆。
(C) 反证法：若 $\boldsymbol A$ 可逆，在 $\boldsymbol A^2=\boldsymbol A$ 两边左乘 $\boldsymbol A^{-1}$，得 $\boldsymbol A=\boldsymbol E$，与假设条件 $\boldsymbol A\neq\boldsymbol E$ 矛盾，所以 $\boldsymbol A$ 不可逆。
(D) 由于 $\boldsymbol A^2=\boldsymbol A$，故 $\boldsymbol A(\boldsymbol A-\boldsymbol E)=\boldsymbol O$。从而 $|\boldsymbol A||\boldsymbol A-\boldsymbol E|=0$，而 $\boldsymbol A\neq\boldsymbol E$，所以 $|\boldsymbol A-\boldsymbol E|\neq0$，因此 $|\boldsymbol A|=0$，$\boldsymbol A$ 不可逆。`, a: R`(C)`, sol: R`【分析】(A) 错在由 $\boldsymbol A\neq\boldsymbol E$ 推 $|\boldsymbol A|\neq1$（如 $\boldsymbol A=\begin{bmatrix}1&0\\1&1\end{bmatrix}$，$\boldsymbol A\neq\boldsymbol E$ 但 $|\boldsymbol A|=1$）。
(B) 错在由 $\boldsymbol A(\boldsymbol A-\boldsymbol E)=\boldsymbol O$ 及 $\boldsymbol A-\boldsymbol E\neq\boldsymbol O$ 推 $\boldsymbol A=\boldsymbol O$（两个非零矩阵之积可为 $\boldsymbol O$）。
(D) 错在由 $\boldsymbol A\neq\boldsymbol E$ 推 $|\boldsymbol A-\boldsymbol E|\neq0$（非零矩阵行列式可为 0，如 $\boldsymbol A=\begin{bmatrix}1&1\\0&1\end{bmatrix}$，$|\boldsymbol A-\boldsymbol E|=0$）。
(C) 反证法正确。选 (C)。
【评注】$\boldsymbol A^2=\boldsymbol A$ 即 $\boldsymbol A(\boldsymbol A-\boldsymbol E)=\boldsymbol O$，$\boldsymbol A-\boldsymbol E\neq\boldsymbol O$ 说明 $\boldsymbol A\boldsymbol x=\boldsymbol 0$ 有非零解，故 $|\boldsymbol A|=0$。` },
      { n: 223, q: R`设 $\boldsymbol A,\boldsymbol B$ 为 $n$ 阶对称矩阵，则下列结论不正确的是
(A) $\boldsymbol A+\boldsymbol B$ 是对称矩阵。 (B) $\boldsymbol{AB}$ 是对称矩阵。
(C) $\boldsymbol A^*+\boldsymbol B^*$ 是对称矩阵。 (D) $\boldsymbol A-2\boldsymbol B$ 是对称矩阵。`, a: R`(B)`, sol: R`【分析】$(\boldsymbol A+\boldsymbol B)^{\mathrm T}=\boldsymbol A^{\mathrm T}+\boldsymbol B^{\mathrm T}=\boldsymbol A+\boldsymbol B$，$(\boldsymbol A-2\boldsymbol B)^{\mathrm T}=\boldsymbol A-2\boldsymbol B$，故 (A)(D) 正确。
可证 $(\boldsymbol A^*)^{\mathrm T}=(\boldsymbol A^{\mathrm T})^*$：比较 $(i,j)$ 位置元素，$(\boldsymbol A^*)^{\mathrm T}$ 的 $(i,j)$ 元素为 $\boldsymbol A^*$ 的 $(j,i)$ 元素即 $A_{ij}$，而 $(\boldsymbol A^{\mathrm T})^*$ 的 $(i,j)$ 元素为 $\boldsymbol A^{\mathrm T}$ 的 $(j,i)$ 元素 $a_{ij}$ 的代数余子式 $A_{ij}$，二者相等。故 $(\boldsymbol A^*)^{\mathrm T}=\boldsymbol A^*$，$\boldsymbol A^*$ 对称，(C) 正确。
由于 $(\boldsymbol{AB})^{\mathrm T}=\boldsymbol B^{\mathrm T}\boldsymbol A^{\mathrm T}=\boldsymbol{BA}\neq\boldsymbol{AB}$（一般），故 (B) 不正确。选 (B)。
【评注】$\boldsymbol A,\boldsymbol B$ 对称时 $\boldsymbol{AB}$ 对称的充要条件是 $\boldsymbol{AB}=\boldsymbol{BA}$。` },
      { n: 224, q: R`设 $\boldsymbol A,\boldsymbol B$ 均为 $n$ 阶反对称矩阵，且 $\boldsymbol{AB}=\boldsymbol{BA}$，则下列结论不正确的是
(A) $\boldsymbol A+\boldsymbol B$ 是反对称矩阵。 (B) $\boldsymbol{AB}$ 是对称矩阵。
(C) $\boldsymbol A^*+\boldsymbol B^*$ 是反对称矩阵。 (D) $2\boldsymbol A+3\boldsymbol B$ 是反对称矩阵。`, a: R`(C)`, sol: R`【分析】$(\boldsymbol A+\boldsymbol B)^{\mathrm T}=\boldsymbol A^{\mathrm T}+\boldsymbol B^{\mathrm T}=-(\boldsymbol A+\boldsymbol B)$，(A) 正确；$(2\boldsymbol A+3\boldsymbol B)^{\mathrm T}=-(2\boldsymbol A+3\boldsymbol B)$，(D) 正确；
$(\boldsymbol{AB})^{\mathrm T}=\boldsymbol B^{\mathrm T}\boldsymbol A^{\mathrm T}=(-\boldsymbol B)(-\boldsymbol A)=\boldsymbol{BA}=\boldsymbol{AB}$，$\boldsymbol{AB}$ 对称，(B) 正确。
而 $(\boldsymbol A^*)^{\mathrm T}=(\boldsymbol A^{\mathrm T})^*=(-\boldsymbol A)^*=(-1)^{n-1}\boldsymbol A^*$，故 $n$ 为奇数时 $\boldsymbol A^*$ 对称、$n$ 为偶数时 $\boldsymbol A^*$ 反对称，$\boldsymbol A^*+\boldsymbol B^*$ 未必反对称，(C) 不正确。选 (C)。
【评注】反对称阵定义 $\boldsymbol A^{\mathrm T}=-\boldsymbol A$；$(-\boldsymbol A)^*=(-1)^{n-1}\boldsymbol A^*$。` },
      { n: 225, q: R`设 $\boldsymbol A=\boldsymbol E-2\boldsymbol\xi\boldsymbol\xi^{\mathrm T}$，其中 $\boldsymbol\xi=[x_1,x_2,\cdots,x_n]^{\mathrm T}$，且有 $\boldsymbol\xi^{\mathrm T}\boldsymbol\xi=1$。则结论 ① $\boldsymbol A$ 是对称阵；② $\boldsymbol A^2$ 是单位阵；③ $\boldsymbol A$ 是正交阵；④ $\boldsymbol A$ 是可逆阵，则四个结论中正确的个数是
(A) 1。 (B) 2。 (C) 3。 (D) 4。`, a: R`(D)`, sol: R`【分析】① $\boldsymbol A^{\mathrm T}=(\boldsymbol E-2\boldsymbol\xi\boldsymbol\xi^{\mathrm T})^{\mathrm T}=\boldsymbol E-2\boldsymbol\xi\boldsymbol\xi^{\mathrm T}=\boldsymbol A$，① 成立。
② $\boldsymbol A^2=(\boldsymbol E-2\boldsymbol\xi\boldsymbol\xi^{\mathrm T})^2=\boldsymbol E-4\boldsymbol\xi\boldsymbol\xi^{\mathrm T}+4\boldsymbol\xi\boldsymbol\xi^{\mathrm T}\boldsymbol\xi\boldsymbol\xi^{\mathrm T}=\boldsymbol E-4\boldsymbol\xi\boldsymbol\xi^{\mathrm T}+4\boldsymbol\xi(\boldsymbol\xi^{\mathrm T}\boldsymbol\xi)\boldsymbol\xi^{\mathrm T}=\boldsymbol E$，② 成立。
③ 由①②得 $\boldsymbol A^2=\boldsymbol{AA}^{\mathrm T}=\boldsymbol E$，故 $\boldsymbol A$ 正交，③ 成立。
④ 正交阵可逆且 $\boldsymbol A^{-1}=\boldsymbol A^{\mathrm T}$，④ 成立。
选 (D)。
【评注】$\boldsymbol\xi^{\mathrm T}\boldsymbol\xi=1$ 是关键；$\boldsymbol\xi\boldsymbol\xi^{\mathrm T}$ 是秩 1 对称阵。` }
    ]
  };
})();
