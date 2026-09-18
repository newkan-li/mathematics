window.LESSONS = window.LESSONS || {};
(function () {
  var R = String.raw;
  window.LESSONS["q880_s32"] = {
    id: "q880_s32",
    ch: "880题 · 高数 · 第四章 多元函数微分学及其应用",
    title: "综合题·填空题",
    probTitle: "第四章 综合题 · 填空题（含原书解析）",
    book: "李林《精讲精练 880 题（数学二）》2026",
    problems: [
      { n: "(1)", q: R`设 $z=z(x,y)$ 满足 $\frac{\partial^2z}{\partial y^2}=2$，且 $z(x,0)=1,z'_y(x,0)=x$，则 $z(x,y)=\underline{\qquad}$。`, a: R`$y^2+xy+1$`, sol: R`【解】$\frac{\partial^2z}{\partial y^2}=2$ 对 $y$ 积分得 $\frac{\partial z}{\partial y}=2y+\varphi(x)$，由 $z'_y(x,0)=x$ 得 $\varphi(x)=x$，故 $\frac{\partial z}{\partial y}=2y+x$；再对 $y$ 积分得 $z=y^2+xy+\varphi_1(x)$，由 $z(x,0)=1$ 得 $\varphi_1(x)=1$，故 $z=y^2+xy+1$。` },
      { n: "(2)", q: R`设 $z=z(x,y)$ 有二阶连续偏导数，满足 $\frac{\partial^2z}{\partial y\partial x}=x+y$，且 $z(x,0)=x,z(0,y)=y^2$，则 $z(x,y)=\underline{\qquad}$。`, a: R`$\frac12x^2y+\frac12xy^2+x+y^2$`, sol: R`【解】$\frac{\partial^2z}{\partial y\partial x}=x+y$ 对 $x$ 积分得 $\frac{\partial z}{\partial y}=\frac12x^2+xy+\varphi(y)$，由 $z(0,y)=y^2$ 得 $\varphi(y)=2y$；再对 $y$ 积分得 $z=\frac12x^2y+\frac12xy^2+y^2+\varphi_1(x)$，由 $z(x,0)=x$ 得 $\varphi_1(x)=x$，故 $z=\frac12x^2y+\frac12xy^2+x+y^2$。` },
      { n: "(3)", q: R`设 $z=\frac{2x}{x^2-y^2}$，则 $\left.\frac{\partial^nz}{\partial y^n}\right|_{(2,1)}=\underline{\qquad}$。`, a: R`$n!\left[1+\frac{(-1)^n}{3^{n+1}}\right]$`, sol: R`【解】$z=\frac1{x+y}-\frac1{y-x}$，由 $\left(\frac1x\right)^{(n)}=(-1)^n\frac{n!}{x^{n+1}}$ 得 $\frac{\partial^nz}{\partial y^n}=(-1)^n\frac{n!}{(x+y)^{n+1}}-(-1)^n\frac{n!}{(y-x)^{n+1}}$，故 $\left.\frac{\partial^nz}{\partial y^n}\right|_{(2,1)}=(-1)^n\frac{n!}{3^{n+1}}-(-1)^n\frac{n!}{(-1)^{n+1}}=n!\left[1+\frac{(-1)^n}{3^{n+1}}\right]$。` },
      { n: "(4)", q: R`设 $f(x,y)$ 对任意的 $(x,y)\in\mathbb R^2$ 满足 $f(x,y)=e^{x+y-2}+o(\rho)$，其中 $\rho=\sqrt{(x-1)^2+(y-1)^2}$，则 $\lim\limits_{h\to0}\frac{f(1+2h,1)-f(1,1-2h)}{h}=\underline{\qquad}$。`, a: R`$4$`, sol: R`【解】$f(1+2h,1)=e^{2h}+o(2|h|)$，$f(1,1-2h)=e^{-2h}+o(2|h|)$，故原式 $=\lim\limits_{h\to0}\frac{e^{2h}-e^{-2h}}h=\lim\limits_{h\to0}(2e^{2h}+2e^{-2h})=4$。` }
    ]
  };
})();
