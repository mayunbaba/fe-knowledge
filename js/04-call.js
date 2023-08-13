// call apply bind 基本概念
// call 是一个函数的方法，它的作用是改变函数的 this 指向，然后执行该函数
class Cat {
  constructor(name) {
    this.name = name;
  }
  eat(food1, food2) {
    console.log(`${this.name} eat ${food1} ${food2}`);
  }
}

const cat = new Cat('喵喵');
cat.eat('鱼', '肉'); // 喵喵 eat 鱼

const dog = {
  name: '旺财'
};
// 狗想吃骨头，可以借用猫的 eat 方法
cat.eat.call(dog, '骨头', '肉'); // 旺财 eat 骨头
// apply 和 call 的作用一样，只是传参的方式不同
cat.eat.apply(dog, ['骨头', '肉']); // 旺财 eat 骨头
// bind 和 call 的作用一样，只是 bind 返回的是一个函数。需要再次调用才能执行
const fn = cat.eat.bind(dog, '骨头', '肉');
fn(); // 旺财 eat 骨头

