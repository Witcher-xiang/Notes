/*   面经   */
/*
    一面：
1、自我介绍
2、挖简历（react懒加载原理，qiankun原理）
3、沙箱隔离怎么做的什么原理
4、webComponments、iframe有什么优点好处、缺点（这里都是我自己提到的）
5、你的项目有什么难点？都是怎么解决的
6、dva的数据流流向是怎么样的
7、react的hooks的原理是什么？他是如何存储状态的
8、闭包，闭包内存泄漏有什么情况，怎么解决
9、清除内存泄漏在计算机内存中是怎么样的一个过程
10、说说输入url后所发生的一切
11、Cache-Control和expires区别是什么，哪个优先级高
12、强缓存命中返回的状态码是什么？协商缓存呢？
13、为什么TCP三次握手
14、TCP和UDP区别
15、重绘、重排区别如何避免
16、你了解哪些数据结构？（我说的排序和树）
17、说一下归并排序思想怎么实现的
18、他的时间复杂度是怎么算出来的？？？
19、你遇到问题或者困难是怎么样的一个解决思路
20、你觉得看源码了解原理的意义在哪里

总体来说，问了很多很多的原理没有手撕代码，问题都是一层套一层的，面了一个多小时还是。。挺硬的 但是面试体验不错

*/

/* 当我给对象新建一个属性的时候，他指向的是一个对象， 那我改变这个属性，这个对象会改变么？
答案：引用过来的对象不会改变 
属性只是去引用对象的地址， 当你去重新赋值只是属性去做了重新赋值(不要以为是去做赋值操作)

 重要！！！：此外如果是属性的引用（属性指向的是一个对象，那么就会导致属性内部的值被做一个改变 这也是为什么继承要去做一个new操作）
*/

let obj = {
    name: "obj",
    test: "213",
    objTest : {}
};

let obj02 = {
    name: "obj02",
};

obj.test = obj02;

let temp = obj.objTest;
temp.a="21"
console.log(temp)
console.log(obj02)

/*
csrf攻击的防范方法
*/


/*
    闭包产生的内存泄漏，及其解决方法
*/

/*
    自己实现继承
    这个一定记住不能直接应用父类的原型链，这样会导致子类如果修改原型链会影响到父类
*/
// 父类
function SuperType () {
    this.name = 'SuperType'; // 父类属性
  }
  SuperType.prototype.sayName = function () { // 父类原型方法
    return this.name;
  };
  
  // 子类
  function SubType () {
    this.subName = "SubType"; // 子类属性
  };
  
  /*
    这个是
  */ 
  SubType.prototype = Object.create(SubType.prototype); // 重写原型对象，代之以一个新类型的实例
  SubType.prototype.constructor =SuperType;
  // 这里实例化一个 SuperType 时， 实际上执行了两步
  