const p1 = Promise.resolve(100);
console.log('p1', p1); // Promise { 100 }
p1.then(data => {
  console.log('data', data); // data 100
}).catch(err => {
  console.error('err', err);
});


const p2 = Promise.reject('200');
console.log('p2', p2); // Promise { <rejected> 200 }
p2.then((data) => {
  console.log("data", data); // data 100
}).catch((err) => {
  console.error("err", err);
  return err; // catch返回的是 resolve 状态的promise
}).then((data) => {
  console.log("p2 then", data); // p2 then 200
})

const p3 = Promise.reject('300').catch(err => {
  console.error('err', err); // err 300
});
console.log('p3', p3); // Promise { <pending> } promiseState fulfilled