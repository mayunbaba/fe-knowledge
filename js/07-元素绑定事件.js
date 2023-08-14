// 循环10个div，点击弹出对应的序号
// let 块级作用域
for (let i = 0; i < 10; i++) {
  const div = document.createElement("div");
  div.innerHTML = i;
  document.body.appendChild(div);
  div.onclick = function () {
    alert(i);
  };
}