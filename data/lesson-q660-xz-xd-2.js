window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q660_s9"] = {
    id: "q660_s9",
    ch: "660题 · 选择题 · 线性代数",
    title: "选择题 第 226–250 题",
    probTitle: "选择题（含原书详解）",
    book: "《数学基础过关660题（数学二）》",
    problems: [
      { n: 226, q: R`设 $\boldsymbol A$ 为正交矩阵，则下列不一定为正交矩阵的是
(A) $\boldsymbol A^{\mathrm T}$。 (B) $\boldsymbol A^2$。 (C) $\boldsymbol A^*$。 (D) $k\boldsymbol A\quad(k\neq0)$。`, a: R`(D)`, sol: R`【分析】由 $\boldsymbol A$ 正交知 $\boldsymbol A^{\mathrm T}\boldsymbol A=\boldsymbol{AA}^{\mathrm T}=\boldsymbol E$，易验证 $\boldsymbol A^{\mathrm T}$、$\boldsymbol A^2$ 均为正交阵。
又 $|\boldsymbol A|^2=1$，$\boldsymbol A^*=|\boldsymbol A|\boldsymbol A^{-1}=|\boldsymbol A|\boldsymbol A^{\mathrm T}$，故 $(\boldsymbol A^*)^{\mathrm T}\boldsymbol A^*=|\boldsymbol A|^2\boldsymbol{AA}^{\mathrm T}=\boldsymbol E$，$\boldsymbol A^*$ 也为正交阵。
而 $(k\boldsymbol A)^{\mathrm T}(k\boldsymbol A)=k^2\boldsymbol A^{\mathrm T}\boldsymbol A=k^2\boldsymbol E$，仅当 $k^2=1$ 时 $k\boldsymbol A$ 为正交阵，故 $k\boldsymbol A$ 不一定为正交阵。选 (D)。
【评注】正交阵的转置、乘积、伴随仍正交；数乘要满足 $k^2=1$。` },
      { n: 227, q: R`设 $\boldsymbol A=\begin{bmatrix}a_{11}&a_{12}&a_{13}\\a_{21}&a_{22}&a_{23}\\a_{31}&a_{32}&a_{33}\end{bmatrix}$，$\boldsymbol B=\begin{bmatrix}a_{21}&a_{22}&a_{23}\\a_{11}&a_{12}&a_{13}\\a_{31}+2a_{11}&a_{32}+2a_{12}&a_{33}+2a_{13}\end{bmatrix}$，
$\boldsymbol P_1=\begin{bmatrix}1&0&0\\0&1&0\\2&0&1\end{bmatrix}$，$\boldsymbol P_2=\begin{bmatrix}1&0&0\\0&1&0\\0&2&1\end{bmatrix}$，$\boldsymbol P_3=\begin{bmatrix}0&1&0\\1&0&0\\0&0&1\end{bmatrix}$，
则 $\boldsymbol B=$
(A) $\boldsymbol P_1\boldsymbol P_3\boldsymbol A$。 (B) $\boldsymbol P_2\boldsymbol P_3\boldsymbol A$。 (C) $\boldsymbol A\boldsymbol P_3\boldsymbol P_2$。 (D) $\boldsymbol A\boldsymbol P_1\boldsymbol P_3$。`, a: R`(B)`, sol: R`【分析】$\boldsymbol B$ 由 $\boldsymbol A$ 经初等行变换得到，故左乘初等阵；(C)(D) 为右乘（列变换），排除。
把 $\boldsymbol A$ 的 1、2 两行互换后再把第 2 行的 2 倍加到第 3 行即得 $\boldsymbol B$，即 $\boldsymbol P_2\boldsymbol P_3\boldsymbol A=\boldsymbol B$。选 (B)。
（注意先 2 倍加到第 3 行再换行得到的是 $\boldsymbol P_3\boldsymbol P_1\boldsymbol A$，不在选项中。）
【评注】行变换左乘、列变换右乘；注意初等阵的乘法顺序。` },
      { n: 228, q: R`已知 $\boldsymbol A,\boldsymbol B$ 均是三阶矩阵，将 $\boldsymbol A$ 中第 3 行的 $-2$ 倍加至第 2 行得到矩阵 $\boldsymbol A_1$，将 $\boldsymbol B$ 中第 2 列加至第 1 列得到矩阵 $\boldsymbol B_1$，又知 $\boldsymbol A_1\boldsymbol B_1=\begin{bmatrix}1&0&0\\0&2&0\\0&0&3\end{bmatrix}$，则 $\boldsymbol{AB}=$
(A) $\begin{bmatrix}1&0&0\\-2&2&6\\0&0&3\end{bmatrix}$。 (B) $\begin{bmatrix}1&0&0\\2&2&-6\\0&0&3\end{bmatrix}$。
(C) $\begin{bmatrix}1&0&0\\-1&2&4\\0&0&3\end{bmatrix}$。 (D) $\begin{bmatrix}1&0&0\\1&2&-4\\0&0&3\end{bmatrix}$。`, a: R`(A)`, sol: R`【分析】$\boldsymbol A_1=\boldsymbol{PA}$，其中 $\boldsymbol P=\begin{bmatrix}1&0&0\\0&1&-2\\0&0&1\end{bmatrix}$（第 3 行的 $-2$ 倍加到第 2 行）；$\boldsymbol B_1=\boldsymbol{BQ}$，其中 $\boldsymbol Q=\begin{bmatrix}1&0&0\\1&1&0\\0&0&1\end{bmatrix}$（第 2 列加到第 1 列）。
由 $\boldsymbol A_1\boldsymbol B_1=\boldsymbol{PABQ}$ 得
$$\boldsymbol{AB}=\boldsymbol P^{-1}\boldsymbol A_1\boldsymbol B_1\boldsymbol Q^{-1}=\begin{bmatrix}1&0&0\\0&1&2\\0&0&1\end{bmatrix}\begin{bmatrix}1&0&0\\0&2&0\\0&0&3\end{bmatrix}\begin{bmatrix}1&0&0\\-1&1&0\\0&0&1\end{bmatrix}=\begin{bmatrix}1&0&0\\-2&2&6\\0&0&3\end{bmatrix}.$$
选 (A)。
【评注】行变换左乘、列变换右乘；还原时左乘 $\boldsymbol P^{-1}$、右乘 $\boldsymbol Q^{-1}$。` },
      { n: 229, q: R`设 $\boldsymbol A=\begin{bmatrix}1&2&3\\4&5&6\\7&8&9\end{bmatrix}$，$\boldsymbol P=\begin{bmatrix}0&0&1\\0&1&0\\1&0&0\end{bmatrix}$，$\boldsymbol Q=\begin{bmatrix}1&0&0\\-1&1&0\\0&0&1\end{bmatrix}$，那么 $(\boldsymbol P^{-1})^{2018}\boldsymbol A(\boldsymbol Q^{2019})^{-1}=$
(A) $\begin{bmatrix}8077&10097&12117\\4&5&6\\7&8&9\end{bmatrix}$。 (B) $\begin{bmatrix}4039&2&3\\10094&5&6\\16159&8&9\end{bmatrix}$。
(C) $\begin{bmatrix}1&2&3\\2023&4043&6063\\7&8&9\end{bmatrix}$。 (D) $\begin{bmatrix}1&2021&3\\4&8081&6\\7&14141&9\end{bmatrix}$。`, a: R`(B)`, sol: R`【分析】$\boldsymbol P$ 是互换 1、3 行的初等阵，$\boldsymbol P^{-1}=\boldsymbol P$，故 $(\boldsymbol P^{-1})^{2018}=\boldsymbol P^{2018}=\boldsymbol P^2=\boldsymbol E$（偶次幂），左乘 $\boldsymbol A$ 不变。
$\boldsymbol Q^{-1}=\begin{bmatrix}1&0&0\\1&1&0\\0&0&1\end{bmatrix}$，$\boldsymbol Q^{-1}$ 是「第 1 行加到第 2 行」的初等阵，故 $(\boldsymbol Q^{-1})^{2019}$ 即把 $\boldsymbol A$ 第 1 行的 2019 倍加到第 2 行：
$$\boldsymbol A(\boldsymbol Q^{2019})^{-1}=\boldsymbol A(\boldsymbol Q^{-1})^{2019}=\begin{bmatrix}1&2&3\\4+2019&5+4038&6+6057\\7&8&9\end{bmatrix}=\begin{bmatrix}4039&2&3\\10094&5&6\\16159&8&9\end{bmatrix}.$$
选 (B)。
【评注】初等阵的幂：互换阵平方为 $\boldsymbol E$；「倍加」初等阵的 $n$ 次幂即倍加 $n$ 倍。注意 $\boldsymbol Q$ 的逆是反向倍加。` },
      { n: 230, q: R`设 $\boldsymbol A$ 与 $\boldsymbol B$ 均为 $n$ 阶矩阵，且 $\boldsymbol A$ 与 $\boldsymbol B$ 等价，则不正确的命题是
(A) $|\boldsymbol A|>0$，则 $|\boldsymbol B|>0$。 (B) 如果 $|\boldsymbol A|\neq0$，则有可逆矩阵 $\boldsymbol P$ 使 $\boldsymbol{PB}=\boldsymbol E$。
(C) 如果 $\boldsymbol A\cong\boldsymbol E$，则 $\boldsymbol B$ 是可逆矩阵。 (D) 有可逆矩阵 $\boldsymbol P$ 与 $\boldsymbol Q$，使 $\boldsymbol{PAQ}=\boldsymbol B$。`, a: R`(A)`, sol: R`【分析】$\boldsymbol A$ 与 $\boldsymbol B$ 等价 $\iff$ 存在可逆阵 $\boldsymbol P,\boldsymbol Q$ 使 $\boldsymbol{PAQ}=\boldsymbol B$，(D) 正确；且 $r(\boldsymbol A)=r(\boldsymbol B)$。
若 $|\boldsymbol A|\neq0$ 则 $r(\boldsymbol A)=n=r(\boldsymbol B)$，$\boldsymbol B$ 可逆，取 $\boldsymbol P=\boldsymbol B^{-1}$ 得 $\boldsymbol{PB}=\boldsymbol E$，(B) 正确；(C) 同理正确。
但初等变换若含两行（列）互换，行列式变号，$|\boldsymbol A|>0$ 不能保证 $|\boldsymbol B|>0$。如 $\boldsymbol A=\begin{bmatrix}1&1\\0&1\end{bmatrix}\to\begin{bmatrix}0&1\\1&1\end{bmatrix}=\boldsymbol B$，$|\boldsymbol A|=1>0$ 但 $|\boldsymbol B|=-1<0$。(A) 不正确。选 (A)。
【评注】等价 $\iff$ 秩相等；初等变换不改变秩、可逆性、行列式非零性，但会改变行列式的值与正负。` },
      { n: 231, q: R`设 $\boldsymbol A=\begin{bmatrix}a&2&-1&3\\2&4&-2&6\\-1&-2&a&-3\end{bmatrix}$，$\boldsymbol B$ 是 $4\times2$ 的非零矩阵，且 $\boldsymbol{AB}=\boldsymbol O$，则
(A) $a=1$ 时，$\boldsymbol B$ 的秩必为 2。 (B) $a=1$ 时，$\boldsymbol B$ 的秩必为 1。
(C) $a\neq1$ 时，$\boldsymbol B$ 的秩必为 1。 (D) $a\neq1$ 时，$\boldsymbol B$ 的秩必为 2。`, a: R`(C)`, sol: R`【分析】对 $\boldsymbol A$ 作初等变换：
$$\boldsymbol A\to\begin{bmatrix}a-1&0&a-1&0\\0&0&2a-2&0\\-1&-2&a&-3\end{bmatrix}.$$
$a=1$ 时 $r(\boldsymbol A)=1$；$a\neq1$ 时 $r(\boldsymbol A)=3$。
由 $\boldsymbol{AB}=\boldsymbol O$ 且 $\boldsymbol A$ 是 $3\times4$ 矩阵，有 $r(\boldsymbol A)+r(\boldsymbol B)\leqslant4$。$\boldsymbol B$ 是 $4\times2$ 的非零矩阵。
$a=1$ 时 $r(\boldsymbol A)=1$，$1\leqslant r(\boldsymbol B)\leqslant3$，$r(\boldsymbol B)$ 可能为 1 也可能为 2，(A)(B) 均错；
$a\neq1$ 时 $r(\boldsymbol A)=3$，故 $r(\boldsymbol B)\leqslant1$，又 $\boldsymbol B\neq\boldsymbol O$ 故 $r(\boldsymbol B)=1$，(C) 正确，(D) 错。
选 (C)。
【评注】$\boldsymbol{AB}=\boldsymbol O\Rightarrow r(\boldsymbol A)+r(\boldsymbol B)\leqslant n$（$n$ 为 $\boldsymbol A$ 的列数），可直接使用。` },
      { n: 232, q: R`若 $\boldsymbol A,\boldsymbol A^*$ 和 $\boldsymbol B$ 均是 $n$ 阶非零矩阵，且 $\boldsymbol{AB}=\boldsymbol O$，则必有 $r(\boldsymbol B)=$
(A) 1。 (B) 2。 (C) $n-1$。 (D) 条件不够不能确定。`, a: R`(A)`, sol: R`【分析】由 $\boldsymbol{AB}=\boldsymbol O$、$\boldsymbol B\neq\boldsymbol O$ 知 $\boldsymbol A\boldsymbol x=\boldsymbol 0$ 有非零解，故 $r(\boldsymbol A)<n$。
又 $\boldsymbol A^*\neq\boldsymbol O$ 知存在代数余子式 $A_{ij}\neq0$，即 $\boldsymbol A$ 有 $n-1$ 阶非零子式，$r(\boldsymbol A)=n-1$。
再由 $r(\boldsymbol A)+r(\boldsymbol B)\leqslant n$ 得 $r(\boldsymbol B)\leqslant1$，又 $\boldsymbol B\neq\boldsymbol O$，故 $r(\boldsymbol B)=1$。选 (A)。
【评注】用 $r(\boldsymbol A^*)$ 与 $r(\boldsymbol A)$ 的关系：$\boldsymbol A^*\neq\boldsymbol O\Rightarrow r(\boldsymbol A)\geqslant n-1$。` },
      { n: 233, q: R`已知 $\boldsymbol A=\begin{bmatrix}1&1&1&1\\0&1&-1&a\\2&3&a&4\\3&5&1&9\end{bmatrix}$，$\boldsymbol A^*$ 是 $\boldsymbol A$ 的伴随矩阵，则 $r(\boldsymbol A^*)=1$ 的充分必要条件是 $a=$
(A) 3。 (B) 2。 (C) 1。 (D) 1 或 3。`, a: R`(D)`, sol: R`【分析】四阶矩阵有 $r(\boldsymbol A^*)=1\iff r(\boldsymbol A)=3$（因 $r(\boldsymbol A)=4$ 时 $r(\boldsymbol A^*)=4$，$r(\boldsymbol A)<3$ 时 $r(\boldsymbol A^*)=0$）。
对 $\boldsymbol A$ 作初等变换：
$$\boldsymbol A\to\begin{bmatrix}1&1&1&1\\0&1&-1&a\\0&0&a-1&2-a\\0&0&0&6-2a\end{bmatrix}.$$
$a=3$ 时 $r(\boldsymbol A)=3$；$a=2$ 时 $r(\boldsymbol A)=4$；$a=1$ 时 $r(\boldsymbol A)=3$。
故 $a=1$ 或 $a=3$ 时 $r(\boldsymbol A)=3$，即 $r(\boldsymbol A^*)=1$。选 (D)。
【评注】$r(\boldsymbol A^*)=1\iff r(\boldsymbol A)=n-1$；本题选项有包含关系，由「四选一」也可排除 (A)(C)。` },
      { n: 234, q: R`设 $\boldsymbol A$ 为四阶方阵，且满足 $\boldsymbol A^2=\boldsymbol A$，则秩 $r(\boldsymbol A)+$ 秩 $r(\boldsymbol A-\boldsymbol E)=$
(A) 4。 (B) 3。 (C) 2。 (D) 1。`, a: R`(A)`, sol: R`【分析】由 $\boldsymbol A(\boldsymbol A-\boldsymbol E)=\boldsymbol A^2-\boldsymbol A=\boldsymbol O$ 得 $r(\boldsymbol A)+r(\boldsymbol A-\boldsymbol E)\leqslant4$。
又 $\boldsymbol E=(\boldsymbol E-\boldsymbol A)+\boldsymbol A$，故 $4=r(\boldsymbol E)=r(\boldsymbol E-\boldsymbol A+\boldsymbol A)\leqslant r(\boldsymbol E-\boldsymbol A)+r(\boldsymbol A)=r(\boldsymbol A-\boldsymbol E)+r(\boldsymbol A)$，从而 $r(\boldsymbol A)+r(\boldsymbol A-\boldsymbol E)=4$。选 (A)。
【评注】用 $r(\boldsymbol A+\boldsymbol B)\leqslant r(\boldsymbol A)+r(\boldsymbol B)$ 及 $r(-\boldsymbol A)=r(\boldsymbol A)$。` },
      { n: 235, q: R`现有四个向量组
① $(1,2,3)^{\mathrm T},(3,-1,5)^{\mathrm T},(0,4,-2)^{\mathrm T},(1,3,0)^{\mathrm T}$
② $(a,1,b,0,0)^{\mathrm T},(c,0,d,2,0)^{\mathrm T},(e,0,f,0,3)^{\mathrm T}$
③ $(a,1,2,3)^{\mathrm T},(b,1,2,3)^{\mathrm T},(c,3,4,5)^{\mathrm T},(d,0,0,0)^{\mathrm T}$
④ $(1,0,3,1)^{\mathrm T},(-1,3,0,-2)^{\mathrm T},(2,1,7,2)^{\mathrm T},(4,2,14,5)^{\mathrm T}$
则下列结论正确的是
(A) 线性相关的向量组为 ①④；线性无关的向量组为 ②③。
(B) 线性相关的向量组为 ③④；线性无关的向量组为 ①②。
(C) 线性相关的向量组为 ①②；线性无关的向量为 ③④。
(D) 线性相关的向量组为 ①③④；线性无关的向量组为 ②。`, a: R`(D)`, sol: R`【分析】① 是四个三维向量，必线性相关。
② 由 $(1,0,0),(0,2,0),(0,0,3)$ 线性无关，增加分量仍线性无关，再添两个分量即得 ②，故 ② 线性无关。
③ 前两个向量之差 $(a-b,0,0,0)$ 与 $(d,0,0,0)$ 对应分量成比例，故含相关部分组，③ 线性相关。
④ 计算四阶行列式（按末行展开）得 0，故 ④ 线性相关。
故线性相关的为 ①③④，线性无关的为 ②。选 (D)。
【评注】判据：向量个数超过维数必相关；无关组增加分量仍无关；含相关部分组必相关。` },
      { n: 236, q: R`设 $\boldsymbol\alpha_1=(1,4,3,-1)^{\mathrm T},\boldsymbol\alpha_2=(2,t,-1,-1)^{\mathrm T},\boldsymbol\alpha_3=(-2,3,1,t+1)^{\mathrm T}$，则
(A) 对任意的 $t,\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3$ 必线性无关。
(B) 仅当 $t=-3$ 时，$\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3$ 线性无关。
(C) 若 $t=0$，则 $\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3$ 线性相关。
(D) $t\neq0$ 且 $t\neq-3\Leftrightarrow\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3$ 线性无关。`, a: R`(A)`, sol: R`【分析】设 $x_1\boldsymbol\alpha_1+x_2\boldsymbol\alpha_2+x_3\boldsymbol\alpha_3=\boldsymbol 0$，对系数矩阵作初等行变换：
$$\begin{bmatrix}1&2&-2\\4&t&3\\3&-1&1\\-1&-1&t+1\end{bmatrix}\to\begin{bmatrix}1&2&-2\\0&t-8&11\\0&-7&7\\0&1&t-1\end{bmatrix}\to\begin{bmatrix}1&2&-2\\0&-1&1\\0&0&t\\0&0&t+3\end{bmatrix}.$$
因 $t$ 与 $t+3$ 不可能同时为 0，对任意 $t$ 系数矩阵的秩恒为 3，齐次方程组只有零解，故 $\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3$ 对任意 $t$ 都线性无关。选 (A)。
【评注】$m$ 个 $n$ 维向量（$m<n$）判相关性用齐次方程组是否有非零解或秩。` },
      { n: 237, q: R`设 $\boldsymbol\alpha_1=(1,2,3,1)^{\mathrm T},\boldsymbol\alpha_2=(3,4,7,-1)^{\mathrm T},\boldsymbol\alpha_3=(2,6,a,6)^{\mathrm T},\boldsymbol\alpha_4=(0,1,3,a)^{\mathrm T}$，那么 $a=8$ 是 $\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3,\boldsymbol\alpha_4$ 线性相关的
(A) 充分必要条件。 (B) 充分而非必要条件。 (C) 必要而非充分条件。 (D) 既非充分也非必要条件。`, a: R`(B)`, sol: R`【分析】计算四阶行列式：
$$|\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3,\boldsymbol\alpha_4|=\begin{vmatrix}1&3&2&0\\2&4&6&1\\3&7&a&3\\1&-1&6&a\end{vmatrix}=\begin{vmatrix}-2&2&1\\0&a-8&2\\0&0&a-2\end{vmatrix}=0.$$
$a=8$ 时行列式为 0，向量组线性相关；但 $a=2$ 时行列式也为 0，向量组仍线性相关。故 $a=8$ 是充分而非必要条件。选 (B)。
【评注】$n$ 个 $n$ 维向量线性相关 $\iff$ 行列式为 0。` },
      { n: 238, q: R`设向量组(Ⅰ)：$\boldsymbol\alpha_1,\boldsymbol\alpha_2,\cdots,\boldsymbol\alpha_s$；向量组(Ⅱ)：$\boldsymbol\alpha_1,\boldsymbol\alpha_2,\cdots,\boldsymbol\alpha_s,\boldsymbol\alpha_{s+1},\cdots,\boldsymbol\alpha_{s+t}$，则正确命题是
(A) (Ⅰ) 无关 $\Rightarrow$ (Ⅱ) 无关。 (B) (Ⅰ) 无关 $\Rightarrow$ (Ⅱ) 相关。
(C) (Ⅱ) 相关 $\Rightarrow$ (Ⅰ) 相关。 (D) (Ⅱ) 无关 $\Rightarrow$ (Ⅰ) 无关。`, a: R`(D)`, sol: R`【分析】(Ⅰ) 无关时，增加向量后 (Ⅱ) 可能无关也可能相关，故 (A)(B) 错；(C) 是 (A) 的逆否命题，也错。
若 (Ⅱ) 线性无关，则其任意部分组 (Ⅰ) 线性无关，故 (D) 正确。选 (D)。
【评注】「整体无关 $\Rightarrow$ 部分无关」；注意与「分量延伸」的区别（见下一题）。` },
      { n: 239, q: R`设向量组(Ⅰ)：$\boldsymbol\alpha_1=(a_{11},a_{12},a_{13}),\boldsymbol\alpha_2=(a_{21},a_{22},a_{23}),\boldsymbol\alpha_3=(a_{31},a_{32},a_{33})$；向量组(Ⅱ)：$\boldsymbol\beta_1=(a_{11},a_{12},a_{13},a_{14}),\boldsymbol\beta_2=(a_{21},a_{22},a_{23},a_{24}),\boldsymbol\beta_3=(a_{31},a_{32},a_{33},a_{34})$，则正确的命题是
(A) (Ⅰ) 相关 $\Rightarrow$ (Ⅱ) 相关。 (B) (Ⅰ) 无关 $\Rightarrow$ (Ⅱ) 无关。
(C) (Ⅱ) 无关 $\Rightarrow$ (Ⅰ) 无关。 (D) (Ⅱ) 相关 $\Rightarrow$ (Ⅰ) 无关。`, a: R`(B)`, sol: R`【分析】(A)(C) 互为逆否命题，若一对则全对，与「四选一」矛盾，故均错。
若 (Ⅱ) 线性相关，即有不全为 0 的 $x_1,x_2,x_3$ 使 $x_1\boldsymbol\beta_1+x_2\boldsymbol\beta_2+x_3\boldsymbol\beta_3=\boldsymbol 0$，则其前三个分量构成的方程组也有非零解，即 (Ⅰ) 线性相关，故 (D) 错。
若 (Ⅰ) 线性无关，则方程组（前三个方程）只有零解，延伸后的方程组也只有零解，故 (Ⅱ) 线性无关，(B) 正确。选 (B)。
【评注】「无关组延伸（增加分量）仍无关」。` },
      { n: 240, q: R`已知 $m$ 个 $n$ 维向量 $\boldsymbol\alpha_1,\boldsymbol\alpha_2,\cdots,\boldsymbol\alpha_m$ 线性无关，其中 $\boldsymbol\alpha_i=[a_{i1},a_{i2},\cdots,a_{in}]^{\mathrm T}$，$i=1,2,\cdots,m$，则下列各向量中可能线性相关的向量组是
(A) $\boldsymbol\beta_i=[a_{i1},a_{i2}+a_{i1},a_{i3},\cdots,a_{in}]^{\mathrm T},i=1,2,\cdots,m$。
(B) $\boldsymbol\gamma_i=[-a_{i1},a_{i2},\cdots,a_{in}]^{\mathrm T},i=1,2,\cdots,m$。
(C) $\boldsymbol\xi_i=[0,a_{i2},\cdots,a_{in}]^{\mathrm T},i=1,2,\cdots,m$。
(D) $\boldsymbol\eta_i=[a_{i1},a_{i2},\cdots,a_{in},a_{i,n+1}]^{\mathrm T},i=1,2,\cdots,m$。`, a: R`(C)`, sol: R`【分析】$\boldsymbol\alpha_1,\cdots,\boldsymbol\alpha_m$ 线性无关，即 $\boldsymbol\alpha_1x_1+\cdots+\boldsymbol\alpha_mx_m=\boldsymbol 0$ 只有零解。
(A) 是第 1 行加到第 2 行、(B) 是第 1 行乘 $-1$，均为初等行变换，不改变方程组的解，仍线性无关。
(D) 是增加分量，仍线性无关。
(C) 将第 1 分量变为 0，相当于减少一个方程，可能使方程组有非零解，故可能线性相关。选 (C)。
【评注】初等行变换与增加分量都不改变无关性；减少分量可能破坏无关性。` },
      { n: 241, q: R`设向量组 $\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3$ 线性无关，则下列向量组中线性无关的是
(A) $\boldsymbol\alpha_1-\boldsymbol\alpha_2,\boldsymbol\alpha_2-\boldsymbol\alpha_3,\boldsymbol\alpha_3-\boldsymbol\alpha_1$。
(B) $\boldsymbol\alpha_1-\boldsymbol\alpha_2,\boldsymbol\alpha_2+\boldsymbol\alpha_3,\boldsymbol\alpha_3+\boldsymbol\alpha_1$。
(C) $\boldsymbol\alpha_1+\boldsymbol\alpha_2,3\boldsymbol\alpha_1-5\boldsymbol\alpha_2,5\boldsymbol\alpha_1+9\boldsymbol\alpha_2$。
(D) $\boldsymbol\alpha_1+\boldsymbol\alpha_2,2\boldsymbol\alpha_1+3\boldsymbol\alpha_2+4\boldsymbol\alpha_3,\boldsymbol\alpha_1-\boldsymbol\alpha_2-2\boldsymbol\alpha_3$。`, a: R`(D)`, sol: R`【分析】(A) $(\boldsymbol\alpha_1-\boldsymbol\alpha_2)+(\boldsymbol\alpha_2-\boldsymbol\alpha_3)+(\boldsymbol\alpha_3-\boldsymbol\alpha_1)=\boldsymbol 0$，相关。
(B) $(\boldsymbol\alpha_1-\boldsymbol\alpha_2)+(\boldsymbol\alpha_2+\boldsymbol\alpha_3)-(\boldsymbol\alpha_3+\boldsymbol\alpha_1)=\boldsymbol 0$，相关。
(C) 三个向量均只由 $\boldsymbol\alpha_1,\boldsymbol\alpha_2$ 两个向量表出，必线性相关。
故选 (D)。
【评注】对 (D) 可用结论：设 $[\boldsymbol\beta_1,\boldsymbol\beta_2,\boldsymbol\beta_3]=[\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3]\boldsymbol A$，则 $\boldsymbol\beta$ 组线性无关 $\iff|\boldsymbol A|\neq0$。(D) 对应 $|\boldsymbol A|=\begin{vmatrix}1&2&1\\1&3&-1\\0&4&-2\end{vmatrix}=2\neq0$。` },
      { n: 242, q: R`设 $\boldsymbol A=[\boldsymbol\alpha_1,\boldsymbol\alpha_2,\cdots,\boldsymbol\alpha_n],\boldsymbol B=[\boldsymbol\beta_1,\boldsymbol\beta_2,\cdots,\boldsymbol\beta_n],\boldsymbol{AB}=[\boldsymbol\gamma_1,\boldsymbol\gamma_2,\cdots,\boldsymbol\gamma_n]$ 都是 $n$ 阶矩阵，记向量组
(Ⅰ) $\boldsymbol\alpha_1,\boldsymbol\alpha_2,\cdots,\boldsymbol\alpha_n$　(Ⅱ) $\boldsymbol\beta_1,\boldsymbol\beta_2,\cdots,\boldsymbol\beta_n$　(Ⅲ) $\boldsymbol\gamma_1,\boldsymbol\gamma_2,\cdots,\boldsymbol\gamma_n$
若向量组(Ⅲ) 线性相关，则
(A) (Ⅰ)、(Ⅱ) 均线性相关。 (B) (Ⅰ) 或 (Ⅱ) 中至少有一个线性相关。
(C) (Ⅰ) 一定线性相关。 (D) (Ⅱ) 一定线性相关。`, a: R`(B)`, sol: R`【分析】(Ⅲ) 线性相关 $\iff|\boldsymbol{AB}|=0\iff|\boldsymbol A|=0$ 或 $|\boldsymbol B|=0\iff$(Ⅰ) 或 (Ⅱ) 中至少有一个线性相关。选 (B)。
【评注】由「四选一」特点：若 (A)(C)(D) 之一正确则 (B) 必正确，矛盾，故只能选 (B)。` },
      { n: 243, q: R`设 $\boldsymbol A$ 是 $m\times n$ 矩阵，$\boldsymbol B$ 是 $n\times m$ 矩阵，且满足 $\boldsymbol{AB}=\boldsymbol E$，则
(A) $\boldsymbol A$ 的列向量组线性无关，$\boldsymbol B$ 的行向量组线性无关。
(B) $\boldsymbol A$ 的列向量组线性无关，$\boldsymbol B$ 的列向量组线性无关。
(C) $\boldsymbol A$ 的行向量组线性无关，$\boldsymbol B$ 的列向量组线性无关。
(D) $\boldsymbol A$ 的行向量组线性无关，$\boldsymbol B$ 的行向量组线性无关。`, a: R`(C)`, sol: R`【分析】$\boldsymbol{AB}=\boldsymbol E$ 是 $m$ 阶矩阵，故 $r(\boldsymbol{AB})=m$。于是 $r(\boldsymbol A)\geqslant r(\boldsymbol{AB})=m$，又 $r(\boldsymbol A)\leqslant m$，故 $r(\boldsymbol A)=m$。
故 $\boldsymbol A$ 的行秩 $=r(\boldsymbol A)=m$，$\boldsymbol A$ 的行向量组线性无关。
同理 $\boldsymbol B$ 的列秩 $=r(\boldsymbol B)=m$，$\boldsymbol B$ 的列向量组线性无关。选 (C)。
【评注】$\boldsymbol{AB}=\boldsymbol E\Rightarrow r(\boldsymbol A)=r(\boldsymbol B)=m$；行满秩则行向量组无关，列满秩则列向量组无关。` },
      { n: 244, q: R`设 $\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3,\boldsymbol\alpha_4$ 是三维非零向量，则正确命题是
(A) 如果 $\boldsymbol\alpha_1,\boldsymbol\alpha_2$ 线性相关，$\boldsymbol\alpha_3,\boldsymbol\alpha_4$ 线性相关，则 $\boldsymbol\alpha_1+\boldsymbol\alpha_3,\boldsymbol\alpha_2+\boldsymbol\alpha_4$ 线性相关。
(B) 如果 $\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3$ 线性无关，则 $\boldsymbol\alpha_1+\boldsymbol\alpha_4,\boldsymbol\alpha_2+\boldsymbol\alpha_4,\boldsymbol\alpha_3+\boldsymbol\alpha_4$ 线性无关。
(C) 如果 $\boldsymbol\alpha_4$ 不能用 $\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3$ 线性表出，则 $\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3$ 一定线性相关。
(D) 如果 $\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3,\boldsymbol\alpha_4$ 中任意三个向量均线性无关，则 $\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3,\boldsymbol\alpha_4$ 线性无关。`, a: R`(C)`, sol: R`【分析】(A) 取 $\boldsymbol\alpha_1=(1,0,0),\boldsymbol\alpha_2=(2,0,0),\boldsymbol\alpha_3=(0,0,2),\boldsymbol\alpha_4=(0,0,3)$，则 $\boldsymbol\alpha_1+\boldsymbol\alpha_3=(1,0,2),\boldsymbol\alpha_2+\boldsymbol\alpha_4=(2,0,3)$ 线性无关，(A) 错。
(B) 取 $\boldsymbol\alpha_1=(1,0,0),\boldsymbol\alpha_2=(0,1,0),\boldsymbol\alpha_3=(0,0,1),\boldsymbol\alpha_4=(-1,0,0)$，则 $\boldsymbol\alpha_1+\boldsymbol\alpha_4=\boldsymbol 0$，三向量线性相关，(B) 错。
(D) 四个三维向量必线性相关，(D) 错。
(C) 四个三维向量必线性相关，若 $\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3$ 线性无关，则 $\boldsymbol\alpha_4$ 必可由它们线性表出，与题设矛盾，故 $\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3$ 线性相关。选 (C)。
【评注】$n+1$ 个 $n$ 维向量必线性相关。` },
      { n: 245, q: R`设向量组 $\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3$ 线性无关，向量 $\boldsymbol\beta_1$ 可由 $\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3$ 线性表示，向量 $\boldsymbol\beta_2$ 不能由 $\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3$ 线性表示，则必有
(A) $\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\beta_1$ 线性无关。 (B) $\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\beta_2$ 线性无关。
(C) $\boldsymbol\alpha_2,\boldsymbol\alpha_3,\boldsymbol\beta_1,\boldsymbol\beta_2$ 线性相关。 (D) $\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3,\boldsymbol\beta_1+\boldsymbol\beta_2$ 线性相关。`, a: R`(B)`, sol: R`【分析】因 $\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3$ 线性无关，$\boldsymbol\beta_2$ 不能由其线性表示，故 $\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3,\boldsymbol\beta_2$ 线性无关，其部分组 $\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\beta_2$ 也线性无关。选 (B)。
(A) 反例：取 $\boldsymbol\alpha_1=(1,0,0,0)^{\mathrm T},\boldsymbol\alpha_2=(0,1,0,0)^{\mathrm T},\boldsymbol\alpha_3=(0,0,1,0)^{\mathrm T}$，$\boldsymbol\beta_2=(0,0,0,1)^{\mathrm T}$，$\boldsymbol\beta_1=\boldsymbol\alpha_1$，则 $\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\beta_1$ 相关，(A) 错。
(D) 若 $\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3,\boldsymbol\beta_1+\boldsymbol\beta_2$ 相关，则 $\boldsymbol\beta_1+\boldsymbol\beta_2$ 可由 $\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3$ 表示，减去可表示的 $\boldsymbol\beta_1$ 得 $\boldsymbol\beta_2$ 可表示，矛盾，(D) 错。
【评注】$\boldsymbol\beta$ 不能由线性无关组 $\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3$ 表出 $\Rightarrow$ 合并组线性无关。` },
      { n: 246, q: R`设 $\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3,\boldsymbol\beta$ 均为三维向量，现有四个命题
① 若 $\boldsymbol\beta$ 不能由 $\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3$ 线性表示，则 $\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3$ 线性相关。
② 若 $\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3$ 线性相关，则 $\boldsymbol\beta$ 不能由 $\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3$ 线性表示。
③ 若 $\boldsymbol\beta$ 能由 $\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3$ 线性表示，则 $\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3$ 线性无关。
④ 若 $\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3$ 线性无关，则 $\boldsymbol\beta$ 能由 $\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3$ 线性表示。
以上的命题正确的是
(A) ①②。 (B) ③④。 (C) ①④。 (D) ②③。`, a: R`(C)`, sol: R`【分析】若 $\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3$ 线性无关，则 $\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3,\boldsymbol\beta$ 是四个三维向量必线性相关，从而 $\boldsymbol\beta$ 可由 $\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3$ 线性表示，④ 正确；用反证法知 ① 也正确。
取 $\boldsymbol\alpha_1=\boldsymbol\alpha_2=\boldsymbol\alpha_3=\boldsymbol\beta=(1,0,0)^{\mathrm T}$，则 $\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3$ 相关而 $\boldsymbol\beta$ 能表示，②③ 均不正确。选 (C)。
【评注】①④ 互为逆否命题，②③ 互为逆否命题；逆否命题同真同假。` },
      { n: 247, q: R`设向量 $\boldsymbol\beta$ 可由向量组 $\boldsymbol\alpha_1,\boldsymbol\alpha_2,\cdots,\boldsymbol\alpha_m$ 线性表出，但不能由向量组(Ⅰ)：$\boldsymbol\alpha_1,\boldsymbol\alpha_2,\cdots,\boldsymbol\alpha_{m-1}$ 线性表出，记向量组(Ⅱ)：$\boldsymbol\alpha_1,\boldsymbol\alpha_2,\cdots,\boldsymbol\alpha_{m-1},\boldsymbol\beta$，则
(A) $\boldsymbol\alpha_m$ 不能由(Ⅰ) 线性表示，也不能由(Ⅱ) 线性表示。
(B) $\boldsymbol\alpha_m$ 不能由(Ⅰ) 线性表示，但可以由(Ⅱ) 线性表示。
(C) $\boldsymbol\alpha_m$ 可以由(Ⅰ) 线性表示，也可以由(Ⅱ) 线性表示。
(D) $\boldsymbol\alpha_m$ 可以由(Ⅰ) 线性表示，但不能由(Ⅱ) 线性表示。`, a: R`(B)`, sol: R`【分析】由题设存在 $k_1,\cdots,k_m$ 使 $k_1\boldsymbol\alpha_1+\cdots+k_m\boldsymbol\alpha_m=\boldsymbol\beta$，且必有 $k_m\neq0$（否则 $\boldsymbol\beta$ 可由(Ⅰ) 表出，矛盾），故
$$\boldsymbol\alpha_m=-\frac{k_1}{k_m}\boldsymbol\alpha_1-\cdots-\frac{k_{m-1}}{k_m}\boldsymbol\alpha_{m-1}+\frac1{k_m}\boldsymbol\beta,$$
即 $\boldsymbol\alpha_m$ 可由(Ⅱ) 线性表示。
若 $\boldsymbol\alpha_m$ 可由(Ⅰ) 表示，代入上式可得 $\boldsymbol\beta$ 可由(Ⅰ) 表示，与题设矛盾，故 $\boldsymbol\alpha_m$ 不能由(Ⅰ) 表示。选 (B)。
【评注】也可用秩分析：$r(\boldsymbol\alpha_1,\cdots,\boldsymbol\alpha_m)=r(\boldsymbol\alpha_1,\cdots,\boldsymbol\alpha_{m-1})+1$。` },
      { n: 248, q: R`设矩阵 $\boldsymbol A=[\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3,\boldsymbol\alpha_4]$ 其中 $\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3$ 线性无关，$\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3,\boldsymbol\alpha_4$ 线性相关，$\boldsymbol A$ 经过初等行变换变为矩阵 $\boldsymbol B=[\boldsymbol\beta_1,\boldsymbol\beta_2,\boldsymbol\beta_3,\boldsymbol\beta_4]$，则
(A) $\boldsymbol\beta_4$ 不能由 $\boldsymbol\beta_1,\boldsymbol\beta_2,\boldsymbol\beta_3$ 线性表示。
(B) $\boldsymbol\beta_4$ 可由 $\boldsymbol\beta_1,\boldsymbol\beta_2,\boldsymbol\beta_3$ 线性表示，但表示法不唯一。
(C) $\boldsymbol\beta_4$ 可由 $\boldsymbol\beta_1,\boldsymbol\beta_2,\boldsymbol\beta_3$ 线性表示，且表示法唯一。
(D) $\boldsymbol\beta_4$ 能否由 $\boldsymbol\beta_1,\boldsymbol\beta_2,\boldsymbol\beta_3$ 线性表示不能确定。`, a: R`(C)`, sol: R`【分析】行初等变换不改变列向量组对应的线性关系：$\boldsymbol A\boldsymbol x=\boldsymbol 0$ 与 $\boldsymbol B\boldsymbol x=\boldsymbol 0$ 同解。
由 $\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3$ 线性无关知 $\boldsymbol\beta_1,\boldsymbol\beta_2,\boldsymbol\beta_3$ 线性无关；由 $\boldsymbol\alpha_1,\cdots,\boldsymbol\alpha_4$ 线性相关知 $\boldsymbol\beta_1,\cdots,\boldsymbol\beta_4$ 线性相关。故 $\boldsymbol\beta_4$ 可由 $\boldsymbol\beta_1,\boldsymbol\beta_2,\boldsymbol\beta_3$ 线性表示，且因三者无关表示法唯一。选 (C)。
【评注】$m\times n$ 矩阵经行初等变换，列向量组对应向量组有相同的线性关系，可用于求极大无关组。` },
      { n: 249, q: R`设 $\boldsymbol A,\boldsymbol B$ 为 $n$ 阶方阵，$\boldsymbol P,\boldsymbol Q$ 为 $n$ 阶可逆矩阵，下列命题不正确的是
(A) 若 $\boldsymbol B=\boldsymbol{AQ}$，则 $\boldsymbol A$ 的列向量组与 $\boldsymbol B$ 的列向量组等价。
(B) 若 $\boldsymbol B=\boldsymbol{PA}$，则 $\boldsymbol A$ 的行向量组与 $\boldsymbol B$ 的行向量组等价。
(C) 若 $\boldsymbol B=\boldsymbol{PAQ}$，则 $\boldsymbol A$ 的行(列) 向量组与 $\boldsymbol B$ 的行(列) 向量组等价。
(D) 若 $\boldsymbol A$ 的行(列) 向量组与矩阵 $\boldsymbol B$ 的行(列) 向量组等价，则矩阵 $\boldsymbol A$ 与 $\boldsymbol B$ 等价。`, a: R`(C)`, sol: R`【分析】(A) $\boldsymbol B=\boldsymbol{AQ}$ 按列分块表明 $\boldsymbol B$ 的列向量组可由 $\boldsymbol A$ 的列向量组线性表示；由 $\boldsymbol A=\boldsymbol B\boldsymbol Q^{-1}$ 反向也可表示，故两组等价，(A) 正确。(B) 类似正确。
(D) 两向量组等价则秩相同，故 $\boldsymbol A,\boldsymbol B$ 秩相同，同型矩阵等价，(D) 正确。
(C) 取 $\boldsymbol A=\begin{bmatrix}1&0&0\\0&1&0\\0&0&0\end{bmatrix}$，$\boldsymbol P=\begin{bmatrix}1&0&0\\0&1&0\\1&0&1\end{bmatrix}$，$\boldsymbol Q=\begin{bmatrix}1&0&1\\0&1&0\\0&0&1\end{bmatrix}$，则 $\boldsymbol B=\boldsymbol{PAQ}=\begin{bmatrix}1&0&1\\0&1&0\\1&0&1\end{bmatrix}$，但 $\boldsymbol B$ 的第 1、3 行(列) 不能由 $\boldsymbol A$ 的行(列) 向量组线性表示，(C) 不正确。选 (C)。
【评注】左乘可逆阵保持行向量组等价，右乘可逆阵保持列向量组等价；同时左右乘一般不保持。` },
      { n: 250, q: R`如果向量组 $\boldsymbol\alpha_1,\boldsymbol\alpha_2,\cdots,\boldsymbol\alpha_s$ 的秩为 $r$，则下列命题中正确的是
(A) 向量组中任意 $r-1$ 个向量都线性无关。 (B) 向量组中任意 $r$ 个向量都线性无关。
(C) 向量组中任意 $r-1$ 个向量都线性相关。 (D) 向量组中任意 $r+1$ 个向量都线性相关。`, a: R`(D)`, sol: R`【分析】秩为 $r$ 意味着存在 $r$ 个向量线性无关，而任意 $r+1$ 个向量必线性相关，故 (D) 正确。
反例：向量组 $(0,0,0,0),(1,0,0,0),(0,1,0,0),(0,0,1,0)$ 的秩为 3，含零向量的任意 2、3 个向量相关，(A)(B) 错；向量组 $(1,0,0,0),(0,1,0,0),(0,0,1,0),(1,1,1,0)$ 的秩为 3，任意 2 个向量无关，(C) 错。
【评注】秩 $=r$ 只能保证「存在」$r$ 个无关向量，「任意」$r+1$ 个必相关。` }
    ]
  };
})();
