/**
 * 防抖函数
 * 应用场景：搜索框输入时，不需要每次输入都发送请求，而是在输入完成后发送一次请求
 * @param {Function} fn 需要防抖的函数
 * @param {Number} delay 防抖时间
 * @returns {Function} 返回一个防抖函数
 * @example
 * const fn = debounce(() => console.log('防抖'), 1000)
 */
function debounce(fn, delay) {
  let timer = null;
  return function () {
    if (timer) clearTimeout(timer);
    setTimeout(() => {
      fn.apply(this,arguments)
    }, delay);
  }
}

/**
 * 节流函数
 * 应用场景：滚动事件，每隔一段时间执行一次，而不是每次都执行
 * @param {Function} fn 需要节流的函数
 * @param {Number} delay 节流时间
 * @returns {Function} 返回一个节流函数
 * @example
 * const fn = throttle(() => console.log('节流'), 1000)
 */
function throttle(fn, delay) {
  let timer = null;
  return function () {
    if (timer) return;
    timer = setTimeout(() => {
      fn.apply(this,arguments)
      timer = null;
    }, delay);
  }
}