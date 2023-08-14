async function async1() {
  console.log('async1 start'); // 2
  await async2();
  console.log('async1 end'); // 7
}

async function async2() {
  console.log('async2 start'); // 3
  return new Promise((resolve) => {
    resolve();
    console.log('async2 promise'); // 3.1
  })
}

console.log('script start'); // 1

setTimeout(function () {
  console.log('setTimeout'); // 8
}, 0);

async1();

new Promise(function (resolve) {
  console.log('promise1'); // 4
  resolve();
}).then(function () {
  console.log('promise2'); // 6
});

console.log('script end'); // 5