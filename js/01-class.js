// 声明一个学生类
class Student {
  // 构造函数
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  // 原型方法
  sayHi() {
    console.log(`大家好，我是${this.name}`)
  }
}

// 实例化对象
const stu = new Student('小明', 18)
console.log(stu)
stu.sayHi();