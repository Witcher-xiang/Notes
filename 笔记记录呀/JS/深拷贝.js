/*
    循环引用问题已经解决，大概思路即是使用一个map来存 我们用过的每一个object 这样如果有循环引用，我们下次直接从那个Map里去拿然后返回即可

    null需要注意一下，想要偷懒就直接 new obj.constructor 去新建引用对象即可
*/
// 判断类型
function checkType(arg){
    return Object.prototype.toString.call(arg).slice(8,-1)
}
// WeakMap 弱引用，键名只能是对象，专门为循环引用设计
function deepClone(param, hashMap = new WeakMap()) {
    if(param === null) return param;
    
    if(typeof param == "object"){
        if(hashMap.get(param)) return hashMap.get(param);

        const newObj = new param.constructor();
        hashMap.set(param,newObj)

        for(const key in param){
            if(param.hasOwnProperty(key))
                newObj[key] = deepClone(param[key], hashMap)
        }
        return newObj;
    }
    else return param;
    
   }

   let obj = {
       a: {
           name:"1",
       },
       arr:[1,2,3],
       fn: function(){
           console.log("不知道说什么")
       }
   }

   let a = new obj.constructor();
   console.log(a)
//    obj.test = obj

//    const newObj = deepClone(obj)
//    obj.a.name = "66"
//    obj.arr = "77"
//    console.log(newObj)

// 带过程版本的～
function deepClone (target, hash = new WeakMap()) { // 额外开辟一个存储空间WeakMap来存储当前对象
  if (target === null) return target // 如果是 null 就不进行拷贝操作
  if (target instanceof Date) return new Date(target) // 处理日期
  if (target instanceof RegExp) return new RegExp(target) // 处理正则
  

  if (typeof target !== 'object') return target // 处理原始类型和函数 不需要深拷贝，直接返回

  // 是引用类型的话就要进行深拷贝
  if (hash.get(target)){
    
    return hash.get(target)} // 当需要拷贝当前对象时，先去存储空间中找，如果有的话直接返回
  const cloneTarget = new target.constructor() // 创建一个新的克隆对象或克隆数组
  hash.set(target, cloneTarget) // 如果存储空间中没有就存进 hash 里

  Reflect.ownKeys(target).forEach(key => { // 引入 Reflect.ownKeys，处理 Symbol 作为键名的情况
    cloneTarget[key] = deepClone(target[key], hash) // 递归拷贝每一层
  })
  return cloneTarget // 返回克隆的对象
}




// 腾讯面试：

/**
 * 实现一个深拷贝
 *
 * 要求：
 * 1、使用原生 js 实现
 * 2、注意编码规范
 * 3、不允许使用 JSON.stringify 
 * 4、兼容对象、数组多层嵌套的情况
 *
 * 加分项：
 * 1、处理“循环引用”的问题，如 `a.circular = a`
 * 2、处理“拷贝两个相同的引用却最终指向不同的对象”的问题，如 `b = {};a = { b: b, bCopy: b }`
 * 3、处理对象属性名为 Symbol 的情况
**/


function deepClone(target, hash = new WeakMap()) {    
    if(target == null) return;
    if(typeof target != 'object')  return target;
    if(hash.has(target)) return hash.get(target);
    
    const obj = new target.constructor();
    hash.set(target,obj)

    
    for(let key of Reflect.ownKeys(target)) {
        if(target.hasOwnProperty(key)){
            obj[key] = deepClone(target[key],hash);
        }
    }

    return obj;
}


/* 测试用例1 */
const book = {
  title: "You Don't Know JS",
  price: 45,
};
const arr = [[0], 1];
const originObj = {
  book: book,
  arr: arr,
  attr1: undefined,
  attr2: null,
  attr3: 123,
  attr4: 'haha',
};
const clonedObj = deepClone(originObj);
originObj.book.price = 0;
console.log(clonedObj.book.price); // 应为45
arr[0].push(3);
console.log(clonedObj.arr); // 应为[[0], 1]


/* 测试用例2（处理“循环引用”的问题） */
const book2 = {
  title: "You Don't Know JS",
  price: 45,
};
const clonedBook2 = deepClone(book2);
book2.title = 'NO';
console.log(clonedBook2.title); // 应为"You Don't Know JS"


/* 测试用例3（处理“拷贝两个相同的引用却最终指向不同的对象”的问题） */
const book3 = {};
const originObj2 = { book3: book3, book3Copy: book3 };
const clonedObj2 = deepClone(originObj2);
clonedObj2.book3.price = 2;
console.log(clonedObj2.book3Copy.price); // 应为2


/* 测试用例4（处理对象属性名为 Symbol 的情况） */
const symbolKey = Symbol('key1');
const originObj3 = { [symbolKey]: 'this is symbol' };
console.log(deepClone(originObj3)[symbolKey]); // 应为"this is symbol"