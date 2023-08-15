const p1 = new Promise((resolve, reject) => {
});

console.log('p1', p1); // Promise { <pending> }

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  });
});
console.log('p2', p2); // Promise { <pending> }

setTimeout(() => console.log("p2-setTimeout", p2)); // p2-setTimeout Promise { <fulfilled> }

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject();
  });
});
console.log('p3', p3); // Promise { <pending> }

setTimeout(() => console.log("p3-setTimeout", p3)); // p3-setTimeout Promise { <rejected> }