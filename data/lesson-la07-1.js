window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["la07_s0"] = {
    id: "la07_s0",
    ch: "附录 45分钟水平测试",
    title: "自测（一）",
    book: "《线性代数辅导讲义》",
    pages: [172, 174],
    img: "assets/img/xiandai",
    content: [
      { p: 172, md: R`# 附录 45 分钟水平测试
## 自测（一）
1. $n$ 元方程 $x_1+2x_2+3x_3+\cdots+nx_n=1$ 的通解是____。
2. 与矩阵 $A=\begin{pmatrix}1&1&1&1\\1&1&1&-1\\1&-1&1&-1\\1&-1&-1&1\end{pmatrix}$ 相似的对角矩阵是____。
3. 已知 $A$、$B$ 均 $n$ 阶矩阵，满足 $AB=A+B$，则
（1）如果 $A$ 可逆，则 $A+B$ 必可逆
（2）如果 $A$ 可逆，则 $AB$ 必可逆
（3）矩阵 $A-E$ 一定可逆
中，正确的共有
（A）0个　（B）1个　（C）2个　（D）3个　[　]
4. 设 $\alpha_1,\alpha_2,\alpha_3,\alpha_4$ 是 3 维向量，则正确命题是
（A）如果 $\alpha_1,\alpha_2$ 线性相关，$\alpha_3,\alpha_4$ 线性相关，则 $\alpha_1+\alpha_3,\alpha_2+\alpha_4$ 线性相关
（B）如果 $\alpha_1,\alpha_2,\alpha_3$ 线性无关，则 $\alpha_1+\alpha_4,\alpha_2+\alpha_4,\alpha_3+\alpha_4$ 线性无关
（C）如果 $\alpha_4$ 不能由 $\alpha_1,\alpha_2,\alpha_3$ 线性表出，则 $\alpha_1,\alpha_2,\alpha_3$ 一定线性相关
（D）如果 $\alpha_3$ 不能由 $\alpha_1,\alpha_2$ 线性表出，则 $\alpha_1,\alpha_2,\alpha_3$ 线性无关　[　]
5. 已知矩阵 $A=\begin{pmatrix}2&0&1\\a&-1&2\\3&0&0\end{pmatrix}$ 有三个线性无关的特征向量，求 $a$ 的值并求 $A^{10}$。
6. 已知 $A$ 是 $n$ 阶正交矩阵，$A^*$ 是 $A$ 的伴随矩阵，证明 $A^*$ 是正交矩阵。` }
    ],
    quiz: [
      { q: R`设 $A,B$ 均 $n$ 阶矩阵，$AB=A+B$，则正确的是`, options: [R`$A-E$ 一定可逆`, R`$A$ 一定不可逆`, R`$B$ 一定不可逆`, R`$A+B$ 一定不可逆`], answer: 0, explain: R`$AB=A+B\Rightarrow(A-E)(B-E)=E$。` },
      { q: R`$A$ 为 $n$ 阶正交矩阵，则 $A^*$ 是`, options: [R`正交矩阵`, R`对称矩阵`, R`奇异矩阵`, R`不一定可逆`], answer: 0, explain: R`$A^*(A^*)^T=E$。` },
      { q: R`$n$ 元方程 $x_1+2x_2+\cdots+nx_n=1$ 的自由变量个数为`, options: [R`$n-1$`, R`$n$`, R`$1$`, R`$0$`], answer: 0, explain: R`系数矩阵秩为 1，自由变量 $n-1$ 个。` },
      { q: R`$\alpha_1,\alpha_2,\alpha_3$ 线性无关，则 $\alpha_1+\alpha_4,\alpha_2+\alpha_4,\alpha_3+\alpha_4$ 是否线性无关`, options: [R`不一定`, R`一定无关`, R`一定相关`, R`与 $\alpha_4$ 无关`], answer: 0, explain: R`取特殊 $\alpha_4$ 可使相关，故不一定。` },
      { q: R`$A=\begin{pmatrix}2&0&1\\a&-1&2\\3&0&0\end{pmatrix}$ 有三个线性无关特征向量，则 $a=$`, options: [R`$6$`, R`$0$`, R`$-1$`, R`$3$`], answer: 0, explain: R`$\lambda=-1$ 为重根，需 $r(-E-A)=1$，得 $a=6$。` },
      { q: R`$A$ 与对角矩阵相似的对角元是其特征值；实对称矩阵 $A=\begin{pmatrix}1&1&1&1\\1&1&1&-1\\1&-1&1&-1\\1&-1&-1&1\end{pmatrix}$ 的相似对角矩阵为`, options: [R`$\operatorname{diag}(2,2,2,-2)$`, R`$\operatorname{diag}(1,1,1,1)$`, R`$\operatorname{diag}(4,0,0,0)$`, R`$\operatorname{diag}(2,2,0,0)$`], answer: 0, explain: R`实对称矩阵必可正交相似对角化。` },
      { q: R`$\alpha_4$ 不能由 $\alpha_1,\alpha_2,\alpha_3$ 线性表出，则`, options: [R`$\alpha_1,\alpha_2,\alpha_3$ 一定线性相关`, R`$\alpha_1,\alpha_2,\alpha_3$ 一定线性无关`, R`$\alpha_4=0$`, R`四者必线性无关`], answer: 0, explain: R`若 $\alpha_1,\alpha_2,\alpha_3$ 无关（3 维），则 $\alpha_4$ 必可由其表出，矛盾。` },
      { q: R`$\alpha_1,\alpha_2$ 线性相关，$\alpha_3,\alpha_4$ 线性相关，则 $\alpha_1+\alpha_3,\alpha_2+\alpha_4$`, options: [R`不一定线性相关`, R`一定线性相关`, R`一定线性无关`, R`必为零向量`], answer: 0, explain: R`反例 $\alpha_1=(1,0,0),\alpha_2=(2,0,0),\alpha_3=(0,0,2),\alpha_4=(0,0,3)$ 时无关。` },
      { q: R`$A$ 可逆且 $AB=A+B$，则 $B$ 与 $A+B$`, options: [R`都可逆`, R`都不可逆`, R`仅 $B$ 可逆`, R`仅 $A+B$ 可逆`], answer: 0, explain: R`$|A-E|\cdot|B|=|A|\neq0$，故 $B$ 可逆，从而 $AB$、$A+B$ 可逆。` },
      { q: R`$A^{10}$ 的求法通常是`, options: [R`相似对角化 $A=P\Lambda P^{-1}$`, R`直接乘 10 次`, R`求逆`, R`转置`], answer: 0, explain: R`$A^{10}=P\Lambda^{10}P^{-1}$。` }
    ]
  };
  window.LESSONS["la07_s0"].problems = [
    { n: 1, q: R`$n$ 元方程 $x_1+2x_2+3x_3+\cdots+nx_n=1$ 的通解是____。`, a: R`$(1,0,0,\cdots,0)^T+k_1(-2,1,0,\cdots,0)^T+k_2(-3,0,1,\cdots,0)^T+\cdots+k_{n-1}(-n,0,0,\cdots,1)^T$`, sol: R`先搞清解的结构，再确定自由变量，然后赋值求解。` },
    { n: 2, q: R`与矩阵 $A=\begin{pmatrix}1&1&1&1\\1&1&1&-1\\1&-1&1&-1\\1&-1&-1&1\end{pmatrix}$ 相似的对角矩阵是____。`, a: R`$\begin{pmatrix}2&&&\\&2&&\\&&2&\\&&&-2\end{pmatrix}$`, sol: R`$A$ 是实对称矩阵必可相似对角化，只要求出矩阵 $A$ 的特征值就知其相似对角矩阵。` },
    { n: 3, q: R`已知 $A$、$B$ 均 $n$ 阶矩阵，满足 $AB=A+B$，则（1）如果 $A$ 可逆，则 $A+B$ 必可逆；（2）如果 $A$ 可逆，则 $AB$ 必可逆；（3）矩阵 $A-E$ 一定可逆。中正确的共有
（A）0个　（B）1个　（C）2个　（D）3个`, a: R`(D)`, sol: R`由 $AB=A+B\Rightarrow(A-E)B=A\Rightarrow|A-E|\cdot|B|=|A|\neq0\Rightarrow B$ 可逆 $\Rightarrow AB$ 可逆 $\Rightarrow A+B$ 可逆。由 $AB=A+B\Rightarrow AB-A-B+E=E\Rightarrow(A-E)(B-E)=E$。` },
    { n: 4, q: R`设 $\alpha_1,\alpha_2,\alpha_3,\alpha_4$ 是 3 维向量，则正确命题是
（A）如果 $\alpha_1,\alpha_2$ 线性相关，$\alpha_3,\alpha_4$ 线性相关，则 $\alpha_1+\alpha_3,\alpha_2+\alpha_4$ 线性相关
（B）如果 $\alpha_1,\alpha_2,\alpha_3$ 线性无关，则 $\alpha_1+\alpha_4,\alpha_2+\alpha_4,\alpha_3+\alpha_4$ 线性无关
（C）如果 $\alpha_4$ 不能由 $\alpha_1,\alpha_2,\alpha_3$ 线性表出，则 $\alpha_1,\alpha_2,\alpha_3$ 一定线性相关
（D）如果 $\alpha_3$ 不能由 $\alpha_1,\alpha_2$ 线性表出，则 $\alpha_1,\alpha_2,\alpha_3$ 线性无关`, a: R`(C)`, sol: R`（A）反例：$\alpha_1=(1,0,0),\alpha_2=(2,0,0),\alpha_3=(0,0,2),\alpha_4=(0,0,3)$，则 $\alpha_1+\alpha_3=(1,0,2),\alpha_2+\alpha_4=(2,0,3)$ 线性无关。（B）反例：$(1,0,0),(0,1,0),(0,0,1),\left(-\frac13,-\frac13,-\frac13\right)$。（C）因为 4 个 3 维向量必线性相关，若 $\alpha_1,\alpha_2,\alpha_3$ 线性无关，则 $\alpha_4$ 必可由其线性表出，现不能表出，故 $\alpha_1,\alpha_2,\alpha_3$ 必线性相关。（D）反例：$\alpha_1=(1,0,0),\alpha_2=(2,0,0),\alpha_3=(0,1,0)$。` },
    { n: 5, q: R`已知矩阵 $A=\begin{pmatrix}2&0&1\\a&-1&2\\3&0&0\end{pmatrix}$ 有三个线性无关的特征向量，求 $a$ 的值并求 $A^{10}$。`, a: R`$a=6$，$A^{10}=\frac{1}{4}\begin{pmatrix}3^{11}+1&0&3^{10}-1\\2\cdot3^{11}-6&4&2\cdot3^{10}-2\\3^{11}-3&0&3^{10}+3\end{pmatrix}$`, sol: R`由 $|\lambda E-A|=(\lambda-3)(\lambda+1)^2$ 知 $\lambda=-1$ 必有两个线性无关的特征向量，故秩 $r(-E-A)=1$，得 $a=6$。$\lambda=3$ 特征向量 $\alpha_1=(1,2,1)^T$，$\lambda=-1$ 特征向量 $\alpha_2=(0,1,0)^T,\alpha_3=(1,0,-3)^T$。$A^{10}=P\Lambda^{10}P^{-1},P=(\alpha_1,\alpha_2,\alpha_3)$。` },
    { n: 6, q: R`已知 $A$ 是 $n$ 阶正交矩阵，$A^*$ 是 $A$ 的伴随矩阵，证明 $A^*$ 是正交矩阵。`, a: R`用定义法证 $A^*(A^*)^T=E$，注意 $AA^T=E,|A|^2=1,A^*A=|A|E$ 等的运用。`, sol: R`原书提示：用定义法证 $A^*(A^*)^T=E$，注意 $AA^T=E,|A|^2=1,A^*A=|A|E$ 等的运用。` }
  ];
  window.LESSONS["la07_s1"] = {
    id: "la07_s1",
    ch: "附录 45分钟水平测试",
    title: "自测（二）",
    book: "《线性代数辅导讲义》",
    pages: [172, 175],
    img: "assets/img/xiandai",
    content: [
      { p: 172, md: R`## 自测（二）
1. 若向量组 $\alpha_1=(4,-1,3,-2)^T$，$\alpha_2=(3,-2,a,-4)^T$，$\alpha_3=(3,-1,4,-2)^T$，$\alpha_4=(a,-2,8,-4)^T$ 的秩为 2，则 $a=$____。` },
      { p: 173, md: R`2. 已知 $A=\begin{pmatrix}0&0&0&0\\1&0&0&0\\0&1&0&0\\0&0&1&0\end{pmatrix}$，$E$ 是 4 阶单位矩阵，则 $(E+A+A^2+A^3+A^4+A^5)^{-1}=$____。
3. 矩阵 $A=\begin{pmatrix}-1&1&0\\-4&3&0\\1&0&2\end{pmatrix}$ 的特征值是
（A）1,1,2　（B）$-1,1,2$
（C）0,1,3　（D）1,2,2　[　]
4. $\alpha_1=\begin{pmatrix}1\\0\\0\\c_1\end{pmatrix}$，$\alpha_2=\begin{pmatrix}1\\-1\\0\\c_2\end{pmatrix}$，$\alpha_3=\begin{pmatrix}1\\-1\\1\\c_3\end{pmatrix}$，$\alpha_4=\begin{pmatrix}1\\2\\3\\c_4\end{pmatrix}$，$\forall c_i\ (i=1,2,3,4)$ 总有
（A）$\alpha_1,\alpha_2,\alpha_3$ 线性相关　（B）$\alpha_1,\alpha_2,\alpha_3,\alpha_4$ 线性相关
（C）$\alpha_1,\alpha_2,\alpha_3$ 线性无关　（D）$\alpha_1,\alpha_2,\alpha_3,\alpha_4$ 线性无关　[　]
5. 已知 $\beta=\begin{pmatrix}2\\3\\4\end{pmatrix}$ 可由 $\alpha_1=\begin{pmatrix}1\\1\\1\end{pmatrix}$，$\alpha_2=\begin{pmatrix}a\\1\\1\end{pmatrix}$，$\alpha_3=\begin{pmatrix}1\\2\\b\end{pmatrix}$ 线性表出，求 $a,b$ 的值并当 $\beta$ 表示法不唯一时写出 $\beta$ 的表达式。
6. 设 $A$ 是 $n$ 阶实对称矩阵，满足 $(E-A)(E+A)=0$，若秩 $r(E+A)=k<n$，求行列式 $|A+2E|$ 的值。` }
    ],
    quiz: [
      { q: R`向量组秩为 2 意味着`, options: [R`极大线性无关组含 2 个向量`, R`只有 2 个向量`, R`全为零`, R`秩为 4`], answer: 0, explain: R`秩即极大线性无关组所含向量个数。` },
      { q: R`$A=\begin{pmatrix}-1&1&0\\-4&3&0\\1&0&2\end{pmatrix}$ 的特征值为`, options: [R`$1,1,2$`, R`$-1,1,2$`, R`$0,1,3$`, R`$1,2,2$`], answer: 0, explain: R`由 $\sum a_{ii}=4$ 与 $|A|$ 排除。` },
      { q: R`$\alpha_1,\alpha_2,\alpha_3$ 为 $\begin{pmatrix}1\\0\\0\end{pmatrix},\begin{pmatrix}1\\-1\\0\end{pmatrix},\begin{pmatrix}1\\-1\\1\end{pmatrix}$ 的延伸组，则`, options: [R`一定线性无关`, R`一定线性相关`, R`可能相关`, R`必含零向量`], answer: 0, explain: R`无关向量组的延伸组必无关。` },
      { q: R`$A$ 为 $n$ 阶实对称矩阵且 $A^2=E$，则 $A$ 的特征值`, options: [R`只能为 $1$ 或 $-1$`, R`只能为 $0$`, R`只能为正`, R`任意`], answer: 0, explain: R`$A^2=E\Rightarrow\lambda^2=1$。` },
      { q: R`$(E-A)(E+A)=0$ 且 $r(E+A)=k<n$，则 $A$ 的特征值 $1$ 的个数为`, options: [R`$k$`, R`$n-k$`, R`$n$`, R`$0$`], answer: 0, explain: R`$A+E$ 的秩 $k$ 即特征值 $1$ 的个数。` },
      { q: R`$\beta$ 可由 $\alpha_1,\alpha_2,\alpha_3$ 线性表出且表示法不唯一，则`, options: [R`$\alpha_1,\alpha_2,\alpha_3$ 线性相关`, R`$\alpha_1,\alpha_2,\alpha_3$ 线性无关`, R`$\beta=0$`, R`无解`], answer: 0, explain: R`表示法不唯一当且仅当向量组线性相关。` },
      { q: R`$A=\begin{pmatrix}0&0&0&0\\1&0&0&0\\0&1&0&0\\0&0&1&0\end{pmatrix}$ 满足`, options: [R`$A^4=0$`, R`$A^2=0$`, R`$A=E$`, R`$A$ 可逆`], answer: 0, explain: R`幂零矩阵，$A^4=0$。` },
      { q: R`$E+A+A^2+A^3+A^4+A^5$ 的逆可利用`, options: [R`$(E-A)(E+A+\cdots+A^5)=E-A^6$`, R`直接求逆不可行`, R`$A^6=0$`, R`$A=0$`], answer: 0, explain: R`等比求和公式。` },
      { q: R`$\beta=(2,3,4)^T$ 由 $\alpha_1,\alpha_2,\alpha_3$ 表出且不唯一时，解含`, options: [R`一个自由参数`, R`无自由参数`, R`两个自由参数`, R`三个自由参数`], answer: 0, explain: R`$a=1,b=3$ 时秩为 2，一个自由参数。` },
      { q: R`实对称矩阵 $A$ 满足 $(E-A)(E+A)=0$，则 $A$ 可`, options: [R`正交相似对角化`, R`不可对角化`, R`只有零特征值`, R`不可逆`], answer: 0, explain: R`实对称矩阵必可正交相似对角化。` }
    ]
  };
  window.LESSONS["la07_s1"].problems = [
    { n: 1, q: R`若向量组 $\alpha_1=(4,-1,3,-2)^T$，$\alpha_2=(3,-2,a,-4)^T$，$\alpha_3=(3,-1,4,-2)^T$，$\alpha_4=(a,-2,8,-4)^T$ 的秩为 2，则 $a=$____。`, a: R`$a=6$。`, sol: R`原书答案 $a=6$。如若求极大线性无关组应如何处理？若向量组的秩是 3 情况又如何？` },
    { n: 2, q: R`已知 $A=\begin{pmatrix}0&0&0&0\\1&0&0&0\\0&1&0&0\\0&0&1&0\end{pmatrix}$，$E$ 是 4 阶单位矩阵，则 $(E+A+A^2+A^3+A^4+A^5)^{-1}=$____。`, a: R`$(E+A+A^2+A^3+A^4+A^5)^{-1}=\begin{pmatrix}1&0&0&0\\-1&1&0&0\\0&-1&1&0\\0&0&-1&1\end{pmatrix}$`, sol: R`【注意】$A^4=0$。或者由 $E+A+A^2+A^3=\begin{pmatrix}1&0&0&0\\1&1&0&0\\1&1&1&0\\1&1&1&1\end{pmatrix}$ 直接求逆。或者利用 $(E-A)(E+A+A^2+A^3+A^4+A^5)=E-A^6=E$ 按定义法处理。` },
    { n: 3, q: R`矩阵 $A=\begin{pmatrix}-1&1&0\\-4&3&0\\1&0&2\end{pmatrix}$ 的特征值是
（A）1,1,2　（B）$-1,1,2$
（C）0,1,3　（D）1,2,2`, a: R`(A)`, sol: R`利用 $\sum a_{ii}=\sum\lambda_i$ 可排除（B）与（D），利用 $|A|=\prod\lambda_i$ 由 $|A|\neq0$ 和 $\lambda=0$ 不是特征值而排除（C），或由 $|2E-A|=0$ 来判断 $a=2$ 是不是 $A$ 的特征值。` },
    { n: 4, q: R`$\alpha_1=\begin{pmatrix}1\\0\\0\\c_1\end{pmatrix}$，$\alpha_2=\begin{pmatrix}1\\-1\\0\\c_2\end{pmatrix}$，$\alpha_3=\begin{pmatrix}1\\-1\\1\\c_3\end{pmatrix}$，$\alpha_4=\begin{pmatrix}1\\2\\3\\c_4\end{pmatrix}$，$\forall c_i\ (i=1,2,3,4)$ 总有
（A）$\alpha_1,\alpha_2,\alpha_3$ 线性相关　（B）$\alpha_1,\alpha_2,\alpha_3,\alpha_4$ 线性相关
（C）$\alpha_1,\alpha_2,\alpha_3$ 线性无关　（D）$\alpha_1,\alpha_2,\alpha_3,\alpha_4$ 线性无关`, a: R`(C)`, sol: R`因为 $\begin{vmatrix}1&1&1\\0&-1&-1\\0&0&1\end{vmatrix}\neq0$，知 $\begin{pmatrix}1\\0\\0\end{pmatrix},\begin{pmatrix}1\\-1\\0\end{pmatrix},\begin{pmatrix}1\\-1\\1\end{pmatrix}$ 线性无关，那么其延伸组 $\alpha_1,\alpha_2,\alpha_3$ 必线性无关。` },
    { n: 5, q: R`已知 $\beta=\begin{pmatrix}2\\3\\4\end{pmatrix}$ 可由 $\alpha_1=\begin{pmatrix}1\\1\\1\end{pmatrix}$，$\alpha_2=\begin{pmatrix}a\\1\\1\end{pmatrix}$，$\alpha_3=\begin{pmatrix}1\\2\\b\end{pmatrix}$ 线性表出，求 $a,b$ 的值并当 $\beta$ 表示法不唯一时写出 $\beta$ 的表达式。`, a: R`$a=1,b=3$，$\beta=t\alpha_1+(1-t)\alpha_2+\alpha_3$，$t$ 为任意常数。`, sol: R`原书答案：$a=1,b=3$，$\beta=t\alpha_1+(1-t)\alpha_2+\alpha_3$，$t$ 为任意常数。` },
    { n: 6, q: R`设 $A$ 是 $n$ 阶实对称矩阵，满足 $(E-A)(E+A)=0$，若秩 $r(E+A)=k<n$，求行列式 $|A+2E|$ 的值。`, a: R`$|A+2E|=3^k$（一般地 $|A+tE|=(1+t)^k(t-1)^{n-k}$）。`, sol: R`由 $A^2=E\Rightarrow A$ 的特征值是 1 或 $-1$；再由 $A$ 是实对称 $\Rightarrow A\sim B=\operatorname{diag}(1,\cdots,1,-1,\cdots,-1)$ $\Rightarrow A+E\sim B+E=\operatorname{diag}(2,\cdots,2,0,\cdots,0)\Rightarrow r(B+E)=k$，可确定 $A$ 的特征值 $1$（$k$ 个）、$-1$（$n-k$ 个），故 $|A+2E|=3^k$。` }
  ];
  window.LESSONS["la07_s2"] = {
    id: "la07_s2",
    ch: "附录 45分钟水平测试",
    title: "自测（三）",
    book: "《线性代数辅导讲义》",
    pages: [173, 177],
    img: "assets/img/xiandai",
    content: [
      { p: 173, md: R`## 自测（三）
1. 设矩阵 $A$ 是秩为 2 的 4 阶矩阵，$\alpha_1,\alpha_2,\alpha_3$ 是方程组 $Ax=b$ 的 3 个解，其中 $\alpha_1+\alpha_2=(2,1,-8,10)^T$，$2\alpha_2-\alpha_3=(2,0,-24,29)^T$，$\alpha_2+\alpha_3=(1,0,-3,4)^T$，则方程组 $Ax=b$ 的通解是____。
2. 已知 $A=\begin{pmatrix}1&1&1\\0&1&1\\1&0&2\end{pmatrix}$，矩阵 $B$ 满足 $A^*BA-2A^*B=4E$，其中 $A^*$ 是 $A$ 的伴随矩阵，$E$ 是 3 阶单位矩阵，则矩阵 $B=$____。
3. 设 $A=(a_{ij})$ 是 $n$ 阶非零矩阵，若 $a_{ij}=A_{ij}\ (\forall i,j=1,2,\cdots,n)$，则矩阵 $A$ 是
（A）对称矩阵　（B）反对称矩阵
（C）初等矩阵　（D）可逆矩阵　[　]
4. 设 $A$ 是 3 阶矩阵，特征值是 0,1,2，若 $B=A^3-3A^2+2E$，则与 $B$ 相似的矩阵是` },
      { p: 174, md: R`（A）$\begin{pmatrix}1&&\\&3&\\&&-1\end{pmatrix}$　（B）$\begin{pmatrix}2&&\\&0&\\&&-2\end{pmatrix}$
（C）$\begin{pmatrix}0&&\\&1&\\&&2\end{pmatrix}$　（D）$\begin{pmatrix}2&&\\&2&\\&&6\end{pmatrix}$　[　]
5. 设 $A=\begin{pmatrix}1&0&1\\-4&5&1\\4&0&a\end{pmatrix}$ 与 $B=\begin{pmatrix}0&&\\&5&\\&&b\end{pmatrix}$ 相似，求 $a,b$ 的值，并求可逆矩阵 $P$ 使 $P^{-1}AP=B$。
6. 已知二次型
$$f(x_1,x_2,x_3)=x_1^2+x_2^2+9x_3^2-2x_1x_2+6x_1x_3-6x_2x_3$$
（1）求正交变换化二次型为标准形；
（2）判断此二次型是否正定。` }
    ],
    quiz: [
      { q: R`$A$ 为 4 阶矩阵，$r(A)=2$，则 $Ax=0$ 的基础解系含`, options: [R`2 个向量`, R`4 个向量`, R`0 个向量`, R`1 个向量`], answer: 0, explain: R`$n-r(A)=4-2=2$。` },
      { q: R`若 $\alpha_1,\alpha_2$ 都是 $Ax=b$ 的解，则 $\alpha_1-\alpha_2$ 是`, options: [R`$Ax=0$ 的解`, R`$Ax=b$ 的解`, R`零向量`, R`$Ax=2b$ 的解`], answer: 0, explain: R`$A(\alpha_1-\alpha_2)=b-b=0$。` },
      { q: R`$A=(a_{ij})$ 非零且 $a_{ij}=A_{ij}$，则 $A$ 是`, options: [R`可逆矩阵`, R`对称矩阵`, R`反对称矩阵`, R`初等矩阵`], answer: 0, explain: R`$|A|=\sum a_{ij}^2>0$。` },
      { q: R`$A$ 特征值 $0,1,2$，$B=A^3-3A^2+2E$ 的特征值为`, options: [R`$2,0,-2$`, R`$1,3,-1$`, R`$0,1,2$`, R`$2,2,6$`], answer: 0, explain: R`代入 $\lambda^3-3\lambda^2+2$。` },
      { q: R`$A^*$ 表示伴随矩阵，$|A|=2$ 时 $A^*A=$`, options: [R`$2E$`, R`$E$`, R`$0$`, R`$4E$`], answer: 0, explain: R`$A^*A=|A|E=2E$。` },
      { q: R`二次型正定的充要条件是`, options: [R`特征值全大于 0`, R`特征值全小于 0`, R`存在零特征值`, R`$|A|<0$`], answer: 0, explain: R`正惯性指数等于 $n$。` },
      { q: R`$A\sim B=\operatorname{diag}(0,5,b)$，则 $A$ 的特征值为`, options: [R`$0,5,b$`, R`$1,2,3$`, R`$0,0,0$`, R`$5,5,5$`], answer: 0, explain: R`相似矩阵特征值相同。` },
      { q: R`由 $\sum a_{ii}=\sum b_{ii}$ 与 $|A|=|B|$ 可求`, options: [R`未知参数 $a,b$`, R`特征向量`, R`正交矩阵`, R`基础解系`], answer: 0, explain: R`相似不变量给出两个方程。` },
      { q: R`正交变换化二次型为标准形时，$P$ 的列向量是`, options: [R`单位正交特征向量`, R`任意向量`, R`行向量`, R`零向量`], answer: 0, explain: R`需 Schmidt 正交化并单位化。` },
      { q: R`$f$ 不是正定二次型，因为`, options: [R`特征值不全大于 0`, R`$|A|=0$`, R`$f$ 无意义`, R`$P$ 不可逆`], answer: 0, explain: R`正惯性指数小于 $n$。` }
    ]
  };
  window.LESSONS["la07_s2"].problems = [
    { n: 1, q: R`设矩阵 $A$ 是秩为 2 的 4 阶矩阵，$\alpha_1,\alpha_2,\alpha_3$ 是方程组 $Ax=b$ 的 3 个解，其中 $\alpha_1+\alpha_2=(2,1,-8,10)^T$，$2\alpha_2-\alpha_3=(2,0,-24,29)^T$，$\alpha_2+\alpha_3=(1,0,-3,4)^T$，则方程组 $Ax=b$ 的通解是____。`, a: R`$(2,0,-24,29)^T+k_1(1,1,-5,6)^T+k_2(2,-1,-40,48)^T$`, sol: R`【注意】$2\alpha_2-\alpha_3=\alpha_2+(\alpha_2-\alpha_3)$ 是方程组 $Ax=b$ 的解，$(\alpha_1+\alpha_2)-(\alpha_1+\alpha_3)=\alpha_1-\alpha_3$ 是齐次方程组 $Ax=0$ 的解，$2(2\alpha_2-\alpha_3)-(\alpha_1-\alpha_2)=2(\alpha_2-\alpha_3)+(\alpha_2-\alpha_1)$ 是 $Ax=0$ 的解。` },
    { n: 2, q: R`已知 $A=\begin{pmatrix}1&1&1\\0&1&1\\1&0&2\end{pmatrix}$，矩阵 $B$ 满足 $A^*BA-2A^*B=4E$，其中 $A^*$ 是 $A$ 的伴随矩阵，$E$ 是 3 阶单位矩阵，则矩阵 $B=$____。`, a: R`$B=\begin{pmatrix}2&0&4\\2&0&2\\2&2&4\end{pmatrix}$`, sol: R`由 $|A|=2,AA^*=|A|E$ 矩阵方程简化为 $B(A-2E)=2A\Rightarrow B=2A(A-2E)^{-1}$。` },
    { n: 3, q: R`设 $A=(a_{ij})$ 是 $n$ 阶非零矩阵，若 $a_{ij}=A_{ij}\ (\forall i,j=1,2,\cdots,n)$，则矩阵 $A$ 是
（A）对称矩阵　（B）反对称矩阵
（C）初等矩阵　（D）可逆矩阵`, a: R`(D)`, sol: R`$A\neq0$，不妨设 $a_{ij}\neq0$，$|A|=a_{i1}A_{i1}+\cdots+a_{ij}A_{ij}+\cdots+a_{in}A_{in}=a_{i1}^2+\cdots+a_{ij}^2+\cdots+a_{in}^2>0$。` },
    { n: 4, q: R`设 $A$ 是 3 阶矩阵，特征值是 0,1,2，若 $B=A^3-3A^2+2E$，则与 $B$ 相似的矩阵是
（A）$\begin{pmatrix}1&&\\&3&\\&&-1\end{pmatrix}$　（B）$\begin{pmatrix}2&&\\&0&\\&&-2\end{pmatrix}$
（C）$\begin{pmatrix}0&&\\&1&\\&&2\end{pmatrix}$　（D）$\begin{pmatrix}2&&\\&2&\\&&6\end{pmatrix}$`, a: R`(B)`, sol: R`$A$ 的特征值 $0,1,2\Rightarrow A^2$ 的特征值 $0,1,4\Rightarrow A^3$ 的特征值 $0,1,8\Rightarrow B$ 的特征值 $2,0,-2$。` },
    { n: 5, q: R`设 $A=\begin{pmatrix}1&0&1\\-4&5&1\\4&0&a\end{pmatrix}$ 与 $B=\begin{pmatrix}0&&\\&5&\\&&b\end{pmatrix}$ 相似，求 $a,b$ 的值，并求可逆矩阵 $P$ 使 $P^{-1}AP=B$。`, a: R`$a=4,b=5$，$P=\begin{pmatrix}1&1&0\\1&0&1\\-1&4&0\end{pmatrix}$`, sol: R`由 $\sum a_{ii}=\sum b_{ii}$ 与 $|A|=|B|$ 联立可求 $a,b$。$P$ 应按特征值是 $0,5,5$ 的顺序排列特征向量。` },
    { n: 6, q: R`已知二次型 $f(x_1,x_2,x_3)=x_1^2+x_2^2+9x_3^2-2x_1x_2+6x_1x_3-6x_2x_3$。（1）求正交变换化二次型为标准形；（2）判断此二次型是否正定。`, a: R`(1) $f=11y_1^2$，$P=\begin{pmatrix}\frac{1}{\sqrt{11}}&\frac{1}{\sqrt{2}}&\frac{3}{\sqrt{22}}\\-\frac{1}{\sqrt{11}}&\frac{1}{\sqrt{2}}&\frac{3}{\sqrt{22}}\\\frac{3}{\sqrt{11}}&0&\frac{2}{\sqrt{22}}\end{pmatrix}$；(2) $f$ 不是正定二次型。`, sol: R`先写出二次型矩阵 $A$，再求 $A$ 的特征值与特征向量，不要忘记 Schmidt 正交化。因为特征值不是全大于 0，即正惯性指数小于 $n$，所以 $f$ 不是正定二次型。` }
  ];
})();
