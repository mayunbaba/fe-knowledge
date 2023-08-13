// 深拷贝
function deepClone(obj) {
  // 值类型、null、function 直接返回
  if (typeof obj !== "object" || obj == null) return obj;
  // 数组、对象、null都是object
  let result = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === "object") {
        result[key] = deepClone(obj[key]);
      } else {
        result[key] = obj[key];
      }
    }
  }
  return result;
}

const obj1 = {
  a: 1,
  b: [1, 2, 3],
  c: {
    d: 4,
  },
  e: null,
  f: undefined,
  g: function () {
    console.log("g");
  }
};

const obj2 = deepClone(obj1);
obj2.a = 2;
obj2.b[0] = 2;
obj2.c.d = 5;
console.log(obj1);
console.log(obj2);