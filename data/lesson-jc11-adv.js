window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["jc11_s9"] = {
    id: "jc11_s9",
    ch: "第五章 特征值和特征向量",
    title: "零基础进阶题",
    probTitle: "第五章 特征值和特征向量 零基础进阶题（含原书解析）",
    book: "李永乐《复习全书·基础篇 零基础进阶题》",
    pages: [48, 51],
    img: "assets/img/jcadv",
    problems: [
      { n: "1", q: R`矩阵 \(A=\begin{pmatrix}1&-3&5\\0&2&-2\\0&0&3\end{pmatrix}\) 的特征值为 ______.`, a: "", sol: R`\[
|\lambda E-A|=
\begin{vmatrix}
\lambda-1&3&-5\\
0&\lambda-2&2\\
0&0&\lambda-3
\end{vmatrix}
=(\lambda-1)(\lambda-2)(\lambda-3)
\]

所以矩阵 \(A\) 的特征值为 \(\lambda_1=1,\lambda_2=2,\lambda_3=3\).

故应填 \(1,2,3\).` },
      { n: "2", q: R`设矩阵 \(A=\begin{pmatrix}1&-1&1\\2&4&-2\\-3&-3&a\end{pmatrix}\) 与 \(B=\begin{pmatrix}2&0&0\\0&2&0\\0&0&b\end{pmatrix}\) 相似，则 \(a=\) ______，\(b=\) ______.`, a: "", sol: R`因为矩阵 \(A\) 与矩阵 \(B\) 相似，

所以
\[
\begin{cases}
|A|=|B|\\
\operatorname{tr}(A)=\operatorname{tr}(B),
\end{cases}
\]

· 131 ·
复习全书基础篇

即
\[
\begin{cases}
\begin{vmatrix}
1 & -1 & 1\\
2 & 4 & -2\\
-3 & -3 & a
\end{vmatrix}
=
\begin{vmatrix}
2 & 0 & 0\\
0 & 2 & 0\\
0 & 0 & b
\end{vmatrix},\\
1+4+a=2+2+b,
\end{cases}
\]
亦即
\[
\begin{cases}
6a-6=4b,\\
a+1=b,
\end{cases}
\]
解得
\[
\begin{cases}
a=5,\\
b=6.
\end{cases}
\]
故应填 \(5,6\).` },
      { n: "3", q: R`已知 4 阶矩阵 \(A\sim B\)，\(A\) 的特征值为 \(2,3,4,5\)。\(E\) 为 4 阶单位矩阵，则 \(|B-E|=\) ______.`, a: "", sol: R`因为矩阵 \(A\) 与矩阵 \(B\) 相似，故矩阵 \(A\) 与矩阵 \(B\) 的特征值相同，

又因为矩阵 \(A\) 的特征值为 \(2,3,4,5\)，

所以矩阵 \(B\) 的特征值为 \(2,3,4,5\)，

所以 \(B-E\) 的特征值为 \(1,2,3,4\)，

故 \(|B-E|=1\times2\times3\times4=24\).

故应填 \(24\).` },
      { n: "4", q: R`矩阵 \(A=\begin{pmatrix}1&1&1\\1&3&1\\1&b&1\end{pmatrix}\) 的特征值可能是

(A) \(1,4,0\). \quad (B) \(1,3,0\). \quad (C) \(2,4,0\). \quad (D) \(2,4,-1\).`, a: "(A)", sol: R`\(|A|=\begin{vmatrix}1&1&1\\1&3&1\\1&b&1\end{vmatrix}=0\)，又因为特征值的乘积 \(=\) 行列式的值，则必有特征值 \(0\).

\[
|\lambda E-A|=
\begin{vmatrix}
\lambda-1 & -1 & -1\\
-1 & \lambda-3 & -1\\
-1 & -b & \lambda-1
\end{vmatrix}
=-\lambda(\lambda^2-5\lambda+5-b)
\]

令 \(b=1\)，
\[
\begin{aligned}
|\lambda E-A|&=-\lambda(\lambda^2-5\lambda+5-1)\\
&=-\lambda(\lambda^2-5\lambda+4)\\
&=-\lambda(\lambda-4)(\lambda-1)=0
\end{aligned}
\]

故 \(\lambda_1=0,\lambda_2=4,\lambda_3=1\).

因此选(A).

**【评注】** 由 \(|A|=0\) 可排除(D)，令 \(b=1\)，则 \(A\) 为对称阵，可相似对角化，又 \(\operatorname{tr}(A)=5\)，只有(A)正确.` },
      { n: "5", q: R`与矩阵 \(A=\begin{pmatrix}1&2\\0&3\end{pmatrix}\) 不相似的矩阵是

(A) \(\begin{pmatrix}1&0\\2&3\end{pmatrix}\). \quad (B) \(\begin{pmatrix}3&5\\0&1\end{pmatrix}\). \quad (C) \(\begin{pmatrix}1&1\\3&3\end{pmatrix}\). \quad (D) \(\begin{pmatrix}2&1\\1&2\end{pmatrix}\).`, a: "(C)", sol: R`相似矩阵的秩相等

对于(C)选项

\[
\begin{bmatrix}
1 & 1\\
3 & 3
\end{bmatrix}
\to
\begin{bmatrix}
1 & 1\\
0 & 0
\end{bmatrix}
\]

矩阵的秩为 \(1\)，与矩阵 \(A\) 的秩不相等.

故选(C).
参考答案` },
      { n: "6", q: R`设 \(A\)、\(B\)、\(C\) 为 \(n\) 阶方阵，\(A\sim B,B\sim C\)，则 \(A\)、\(C\) 的关系不正确的是

(A) \(A\sim C\). \quad (B) \(A\to C\).  
(C) \(|A|=|C|\). \quad (D) \(A=C\).`, a: "(D)", sol: R`\(A\sim B,B\sim C\)，则 \(A\sim C\)（传递性）.

\(A\sim C\)，故 \(|A|=|C|\).

\(A\sim C\)，则 \(A\) 与 \(C\) 等价，即 \(A\) 可通过初等变换化为 \(C\)，亦即 \(A\to C\).

故选(D).` },
      { n: "7", q: R`设 \(A\) 为 \(n\) 阶实对称正交矩阵，且 1 为 \(A\) 的 2 重特征值，则与 \(A\) 相似的一个对角矩阵为

(A)
\[
\begin{pmatrix}
1&&&&\\
&1&&&\\
&&-1&&\\
&&&\ddots&\\
&&&&-1
\end{pmatrix}.
\]

(B)
\[
\begin{pmatrix}
1&&&&\\
&1&&&\\
&&0&&\\
&&&\ddots&\\
&&&&0
\end{pmatrix}.
\]

(C)
\[
\begin{pmatrix}
1&&&\\
&1&&\\
&&-1&\\
&&&-1
\end{pmatrix}.
\]

(D) 条件不足，不能确定上述矩阵是否与 \(A\) 相似.`, a: "(A)", sol: R`\(A\) 为正交矩阵，所以 \(AA^{\mathrm T}=E\)

\(\Rightarrow |AA^{\mathrm T}|=|E|\)

\(\Rightarrow |A||A^{\mathrm T}|=|E|\)

\(\Rightarrow |A|^2=1\)

\(\Rightarrow |A|=1\) 或 \(-1\).

又 \(1\) 为 \(A\) 的 \(2\) 重特征值，\(|A|\) 等于特征值相乘，

所以特征值不可能有 \(0\)，故排除(B).

又 \(A\) 为 \(n\) 阶实对称正交矩阵，\(1\) 为 \(A\) 的 \(2\) 重特征值，

所以选择(A)排除(C).

故选(A).` },
      { n: "8", q: R`设 \(\lambda=2\) 是非奇异矩阵 \(A\) 的一个特征值，则矩阵 \(\left(\frac{1}{3}A^2\right)^{-1}\) 有一个特征值等于

(A) \(\frac{4}{3}\). \quad (B) \(\frac{3}{4}\). \quad (C) \(\frac{1}{2}\). \quad (D) \(\frac{1}{4}\).`, a: "(B)", sol: R`\(\lambda=2\) 是非奇异矩阵 \(A\) 的一个特征值.

则 \(\frac{1}{3}A^2\) 的一个特征值为 \(\frac{4}{3}\).

则 \(\left(\frac{1}{3}A^2\right)^{-1}\) 的一个特征值为 \(\frac{3}{4}\).

故选(B).` },
      { n: "9", q: R`设 \(B=\begin{pmatrix}0&0&1\\0&1&0\\1&0&0\end{pmatrix},A\sim B\)，则 \(r(A-E)=\)

(A) 3. \quad (B) 2. \quad (C) 1. \quad (D) 0.`, a: "(C)", sol: R`\(A\sim B\)，故 \(A-E\sim B-E\)，

所以 \(r(A-E)=r(B-E)\)

\[
B-E=
\begin{bmatrix}
-1 & 0 & 1\\
0 & 0 & 0\\
1 & 0 & -1
\end{bmatrix}
\to
\begin{bmatrix}
1 & 0 & -1\\
0 & 0 & 0\\
0 & 0 & 0
\end{bmatrix}
\]

故 \(r(A-E)=r(B-E)=1\).

故选(C).` },
      { n: "10", q: R`求矩阵 \(A=\begin{pmatrix}0&0&1\\0&1&0\\1&0&0\end{pmatrix}\) 的特征值与特征向量.`, a: "", sol: R`\[
|\lambda E-A|=
\begin{vmatrix}
\lambda & 0 & -1\\
0 & \lambda-1 & 0\\
-1 & 0 & \lambda
\end{vmatrix}
=(\lambda-1)^2(\lambda+1),
\]

所以矩阵 \(A\) 的特征值为 \(\lambda_1=\lambda_2=1,\lambda_3=-1\).

当 \(\lambda_1=\lambda_2=1\) 时，解方程组 \((E-A)x=0\),
复习全书基础篇

\[
E-A=
\begin{bmatrix}
1 & 0 & -1\\
0 & 0 & 0\\
-1 & 0 & 1
\end{bmatrix}
\xrightarrow{\text{行}}
\begin{bmatrix}
1 & 0 & -1\\
0 & 0 & 0\\
0 & 0 & 0
\end{bmatrix},
\]

得基础解系 \(p_1=\begin{pmatrix}0\\1\\0\end{pmatrix},p_2=\begin{pmatrix}1\\0\\1\end{pmatrix}\)，所以对应于 \(\lambda_1=\lambda_2=1\) 的全部特征向量为 \(k_1p_1+k_2p_2\)（\(k_1,k_2\) 不同时为 \(0\)）.

当 \(\lambda_3=-1\) 时，解方程组 \((-E-A)x=0\)，

\[
-E-A=
\begin{bmatrix}
-1 & 0 & -1\\
0 & -2 & 0\\
-1 & 0 & -1
\end{bmatrix}
\xrightarrow{\text{行}}
\begin{bmatrix}
1 & 0 & 1\\
0 & 1 & 0\\
0 & 0 & 0
\end{bmatrix},
\]

得基础解系 \(p_3=\begin{pmatrix}1\\0\\-1\end{pmatrix}\)，所以对应于 \(\lambda_3=-1\) 的全部特征向量为 \(k_3p_3\)（\(k_3\neq0\)）.` },
      { n: "11", q: R`求矩阵 \(A=\begin{pmatrix}-2&1&1\\0&2&0\\-4&1&3\end{pmatrix}\) 的特征值和特征向量.`, a: "", sol: R`\[
|\lambda E-A|=
\begin{vmatrix}
\lambda+2 & -1 & -1\\
0 & \lambda-2 & 0\\
4 & -1 & \lambda-3
\end{vmatrix}
=(\lambda-2)
\begin{vmatrix}
\lambda+2 & -1\\
4 & \lambda-3
\end{vmatrix}
=(\lambda-2)^2(\lambda+1),
\]

所以矩阵 \(A\) 的特征值为 \(\lambda_1=\lambda_2=2,\lambda_3=-1\).

当 \(\lambda_1=\lambda_2=2\) 时，解方程组 \((2E-A)x=0\)，

\[
2E-A=
\begin{bmatrix}
4 & -1 & -1\\
0 & 0 & 0\\
4 & -1 & -1
\end{bmatrix}
\xrightarrow{\text{行}}
\begin{bmatrix}
4 & -1 & -1\\
0 & 0 & 0\\
0 & 0 & 0
\end{bmatrix},
\]

得基础解系 \(p_1=\begin{pmatrix}1\\4\\0\end{pmatrix},p_2=\begin{pmatrix}1\\0\\4\end{pmatrix}\)，所以对应于 \(\lambda_1=\lambda_2=2\) 的全部特征向量为 \(k_1p_1+k_2p_2\)（\(k_1,k_2\) 不同时为 \(0\)）.

当 \(\lambda_3=-1\) 时，解方程组 \((-E-A)x=0\)，

\[
-E-A=
\begin{bmatrix}
1 & -1 & -1\\
0 & -3 & 0\\
4 & -1 & -4
\end{bmatrix}
\xrightarrow{\text{行}}
\begin{bmatrix}
1 & 0 & -1\\
0 & 1 & 0\\
0 & 0 & 0
\end{bmatrix},
\]

得基础解系 \(p_3=\begin{pmatrix}1\\0\\1\end{pmatrix}\)，所以对应于 \(\lambda_3=-1\) 的全部特征向量为 \(k_3p_3\)（\(k_3\neq0\)）.
参考答案` },
      { n: "12", q: R`设 \(A=\begin{pmatrix}3&-1\\-1&3\end{pmatrix}\)，求可逆矩阵 \(P\)，使得 \(P^{-1}AP\) 成为对角矩阵.`, a: "", sol: R`\[
|\lambda E-A|=
\begin{vmatrix}
\lambda-3 & 1\\
1 & \lambda-3
\end{vmatrix}
=(\lambda-2)(\lambda-4),
\]
特征值为 \(\lambda_1=2,\lambda_2=4\).

对于 \(\lambda_1=2\)，解方程组 \((2E-A)x=0\)，得特征向量 \(p_1=\begin{pmatrix}1\\1\end{pmatrix}\)；

对于 \(\lambda_2=4\)，解方程组 \((4E-A)x=0\)，得特征向量 \(p_2=\begin{pmatrix}1\\-1\end{pmatrix}\).

令
\[
P=\begin{pmatrix}1&1\\1&-1\end{pmatrix},
\]
则
\[
P^{-1}AP=\begin{pmatrix}2&0\\0&4\end{pmatrix}.
\]` },
      { n: "13", q: R`设 \(A=\begin{pmatrix}1&-1\\-1&1\end{pmatrix}\)，求矩阵 \(\varphi(A)=A^{2024}\).`, a: "", sol: R`\[
|\lambda E-A|=
\begin{vmatrix}
\lambda-1 & 1\\
1 & \lambda-1
\end{vmatrix}
=(\lambda-2)\lambda,
\]
特征值为 \(\lambda_1=2,\lambda_2=0\).

对于 \(\lambda_1=2\)，解方程组 \((2E-A)x=0\)，得特征向量 \(p_1=\begin{pmatrix}-1\\1\end{pmatrix}\)；

对于 \(\lambda_2=0\)，解方程组 \((0E-A)x=0\)，得特征向量 \(p_2=\begin{pmatrix}1\\1\end{pmatrix}\).

将 \(p_1,p_2\) 单位化，得
\[
e_1=\frac{1}{\sqrt2}\begin{pmatrix}-1\\1\end{pmatrix},\quad
e_2=\frac{1}{\sqrt2}\begin{pmatrix}1\\1\end{pmatrix}.
\]
于是令
\[
P=\frac{1}{\sqrt2}\begin{pmatrix}-1&1\\1&1\end{pmatrix},
\]
则 \(P\) 为正交矩阵，且
\[
P^{\mathrm T}AP=\begin{pmatrix}2&0\\0&0\end{pmatrix},
\]
从而
\[
A^k=P\begin{pmatrix}2^k&0\\0&0\end{pmatrix}P^{\mathrm T},
\]
于是
\[
A^{2024}=
\frac{1}{2}
\begin{pmatrix}-1&1\\1&1\end{pmatrix}
\begin{pmatrix}2^{2024}&0\\0&0\end{pmatrix}
\begin{pmatrix}-1&1\\1&1\end{pmatrix}
=2^{2023}
\begin{pmatrix}1&-1\\-1&1\end{pmatrix}.
\]` },
      { n: "14", q: R`设 \(A=\begin{pmatrix}2&0&4\\0&6&0\\4&0&2\end{pmatrix}\)，求正交矩阵 \(P\)，使得 \(P^{-1}AP\) 成为对角矩阵.`, a: "", sol: R`\[
|\lambda E-A|=
\begin{vmatrix}
\lambda-2 & 0 & -4\\
0 & \lambda-6 & 0\\
-4 & 0 & \lambda-2
\end{vmatrix}
=(\lambda-6)^2(\lambda+2),
\]
特征值为 \(\lambda_1=\lambda_2=6,\lambda_3=-2\).

对于 \(\lambda_1=\lambda_2=6\)，解方程组 \((6E-A)x=0\)，得特征向量 \(p_1=(0,1,0)^{\mathrm T},p_2=(1,0,1)^{\mathrm T}\),

将其单位化，得 \(e_1=(0,1,0)^{\mathrm T},e_2=\frac{1}{\sqrt2}(1,0,1)^{\mathrm T}\)；

对于 \(\lambda_3=-2\)，解方程组 \((-2E-A)x=0\)，得特征向量 \(p_3=(-1,0,1)^{\mathrm T}\)，单位化，得 \(e_2=\frac{1}{\sqrt2}(-1,0,1)^{\mathrm T}\). 令
\[
P=
\begin{pmatrix}
0 & \frac{1}{\sqrt2} & -\frac{1}{\sqrt2}\\
1 & 0 & 0\\
0 & \frac{1}{\sqrt2} & \frac{1}{\sqrt2}
\end{pmatrix},
\]
则 \(P\) 为正交矩阵，且
\[
P^{-1}AP=
\begin{pmatrix}
6 & & \\
& 6 & \\
& & -2
\end{pmatrix}.
\]` },
      { n: "15", q: R`设 \(A\)、\(B\) 为方阵，\(A\) 可逆，证明 \(AB\sim BA\).`, a: "", sol: R`由 \(A\) 可逆，知 \(BA=(A^{-1}A)BA=A^{-1}(AB)A\)，即 \(AB\sim BA\).` },
    ]
  };
})();
