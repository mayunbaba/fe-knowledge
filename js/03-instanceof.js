console.log([] instanceof Array); // true
console.log([] instanceof Object); // true  数组也是对象的一种
console.log({} instanceof Array);  // false
console.log({} instanceof Object);  // true
// Function.prototype 是所有函数的原型，所有函数都可以通过 __proto__ 找到它
// Object.prototype 是所有对象的原型，所有对象都可以通过 __proto__ 找到它

// 判断一个变量是数组、对象、函数、值类型
function getType(obj) {
  console.log(Object.prototype.toString.call(obj));
  // $1 表示第一个括号匹配的内容
  return Object.prototype.toString.call(obj).replace(/^\[object (\S+)\]$/, '$1')
}

console.log(getType([])); // Array
console.log(getType({})); // Object
console.log(getType(function(){})); // Function


// 判断一个变量是否是数组
function isArray(obj) {
  return obj instanceof Array
}