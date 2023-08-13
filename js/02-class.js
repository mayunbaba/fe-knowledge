// 人类
class People {
  // 构造器
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  // 方法
  eat() {
    console.log(`${this.name} eat something`)
  }
}

// 学生类
class Student extends People {
  // 构造函数
  constructor(name, age, number) {
    // 调用父类的构造函数
    super(name, age)
    this.number = number
  }
  // 原型方法
  sayHi() {
    console.log(`大家好，我是${this.name}，我的学号是${this.number}`)
  }
}

// 老师类
class Teacher extends People {
  // 构造函数
  constructor(name, age, subject) {
    // 调用父类的构造函数
    super(name, age)
    this.subject = subject
  }
  // 原型方法
  sayHi() {
    console.log(`大家好，我是${this.name}，我教的科目是${this.subject}`)
  }
}

// 实例化对象
const stu = new Student('小明', 18, 'A1001')
console.log(stu)
stu.sayHi();

// 判断原型
console.log(Student.prototype.__proto__ === People.prototype); // true

// 判断实例 
// instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。
console.log(stu instanceof Student); // true
console.log(stu instanceof People); // true
console.log(stu instanceof Object); // true
console.log(Student.prototype instanceof People); // true

console.log(typeof Student); // function
console.log(typeof People); // function
console.log(typeof Object); // function
console.log(typeof Function); // function
console.log(typeof stu); // object