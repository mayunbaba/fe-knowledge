const obj1 = {
  a: 1,
  b: [1, 2, 3],
  c: {
    d: {
      e: 4,
    },
    f: 5,
  },
}

const obj2 = {
  a: 1,
  b: [1, 2, 3],
  c: {
    d: {
      e: 4,
    },
    f: 5,
  },
}

/**
 * 判断对象是否相等
 * @param {Object} obj1 
 * @param {Object} obj2 
 * @returns {Boolean}
 */
function deepEqual(obj1, obj2) {
  function isObject(obj) {
    return typeof obj === 'object' && obj !== null;
  }
  if (!isObject(obj1) || !isObject(obj2)) {
    return obj1 === obj2;
  }
  // 判断两个参数是否是同一个对象
  if (obj1 === obj2) return true;

  for (let i in obj1) {
    if (obj1.hasOwnProperty(i) && obj2.hasOwnProperty(i)) {
      if (!deepEqual(obj1[i], obj2[i])) {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
}

console.log(deepEqual(obj1, obj1)); // true