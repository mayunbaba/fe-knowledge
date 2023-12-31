// 函数作为返回值
function create() {
  let a = 100;
  return function () {
    console.log(a);
  };
}

const fn = create();
const a = 200;
fn(); // 100

// 函数作为参数被传递
function print(fn) {
  const b = 200;
  fn();
}

const b = 100;
function func() {
  console.log(b);
}
print(func); // 100

// 闭包：自由变量的查找，是在函数定义的地方，向上级作用域查找
// 不是在执行的地方！！！

// 闭包的应用场景 隐藏数据，只提供API
// 作一个cache函数
function createCache() {
  const data = {}; // 闭包中的数据，被隐藏，不被外界访问
  return {
    set: function (key, val) {
      data[key] = val;
    },
    get: function (key) {
      return data[key];
    },
  };
}

const c = createCache();
c.set("a", 'setValue');
console.log(c.get("a")); // 100