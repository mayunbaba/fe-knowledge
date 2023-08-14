// 手写bind 函数
Function.prototype.bind1 = function () {
  // arguments 是类数组，不能用数组的方法
  // 将参数解析为数组
  const args = Array.prototype.slice.call(arguments);
  // 获取 this（数组第一项）
  const t = args.shift();
  // 返回一个函数
  return () => {
    // 执行原函数，并返回结果
    return this.apply(t, args);
  };
};

function fn1(a, b, c) {
  console.log("this", this);
  console.log("fn1", a, b, c);
  return "fn1";
}

const fn2 = fn1.bind1({ x: 100 }, 10, 20, 30);
console.log(fn2());
