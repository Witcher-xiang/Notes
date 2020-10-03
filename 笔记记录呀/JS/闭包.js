/*
    1、闭包发生内存泄漏的情况
    2、如何解决或者避免内存泄漏
*/

/*
 * 堆内存释放问题
 * 创建一个引用类型的值，就会产生一个堆内存
 * 如果当前创建的堆内存不被其他东西所占用（浏览器会在空闲的时候，查找每一个内存的引用状况，
 * 不被占用的都会给回收释放掉），则会释放
 * ）
 * 
 * 垃圾回收机制，js的垃圾回收机制是 利用ESP清除（上下文指针移动） 函数执行上下文，在清除的同时 堆内存也不在会被引用，下次这块堆内存也会被标记为非活动对象被清除
 * */

 /*  问题1，闭包发生内存泄漏的情况   */
 function add() {
    var count = 0;
    function demo() {
        count ++;
        console.log(count);
    }
    return demo;
}
var counter = add();
let i =9999;
while(i--) counter();
// setInterval(add, 1000); 调用的时候小心点 图书馆调用声音要爆炸

/*   第二种内存泄漏的情况：
    在不被调用的函数中 出现了闭包（引用用了上一函数作用域的变量， 但这个函数没有被调用）,即使这个函数作用域被执行了 因为里面是一个闭包，被js判断为闭包即将 这个变量存到一个额外的位置
*/
var theThing = null; 
var replaceThing = function () { 
  var originalThing = theThing;

  var unused = function () { 
    if (originalThing) // 因为这里内部有引用 但是unsed又不会被调用 因此就一直占用这这里的内存不会去释放 js认为可能会用到他就不会释放这片内存
      console.log("hi"); 
      /*    但是有一说一，我感觉这块内存会被清掉，当外层ESP指针下移 这里的执行上下文被释放掉 去遍历闭包中的内存就可以发现他和global环境没有建立引用就可以清掉了*/
  }; 
  
  theThing = { 
    longStr: new Array(1000000).join('*'), 
    someMethod: function () { 
      console.log(someMessage); 
    } 
  }; 

}; 
 
setInterval(replaceThing, 1000);


/*
    如果js是
*/






// /*闭包练习题*/
// var i=20;
// function fn() {
//     i-=2;//i=18
//     return function (n) {
//         console.log((++i)-n);
//     }
// }
// var f = fn();//i=18
// f(1); //18 i=19
// f(2); //18 i=20
// fn()(3);//16 i=19
// fn()(4);//14 i=18
// f(5); //14 i=19
// console.log(i) //19

// /*闭包练习题2*/
// var a = 9;

// function fn() {
//     a = 0;
//     return function (b) {
//         return b + a++;
//     }
// }
// var f = fn();
// console.log(f(5))
// console.log(fn()(5))
// console.log(f(5));
// console.log(a)


// // const Arr1 =[1,2,3,4,5,6,7,8,9]
// // const Arr2 =[1,2,3,4,5,6,7,8,9]
// // Arr1.slice(3,5)
// // Arr2.splice(5,3)
// // console.log( Arr1.slice(0))
// // console.log(Arr2)
// console.log("shuzu", removeDuplicates(newArr))
// // let str="a=[1,2,3]"
// // eval(str)
// // console.log(a[0])
// // var time=new Date()
// // console.log(time)
// // console.log(Date.parse(time))

// // var string="string"
// // var num01=["1","2","3"];
// // var num02=num01.concat("4")
// // console.log(num02) // 1, 2,3,4

// // var arr=[]
// // var count=arr.push("1","2","3")
// // // arr[6]="dfs"
// // // console.log(arr.length)
// // // console.log(arr)
// // console.log(count)
// // console.log(arr)
// // arr.pop()
// // console.log(arr)



// // function test() {
// //     var test01="test01"
// //     function testIn() {
// //         return test01
// //     }
// //     alert(testIn());
// //     return "test00"
// // }
// // //alert(test())
// //
// // var obj={
// //     name:"wyk"
// // }
// // console.log(obj["name"])
// // /*闭包*/
// // var name="cby"
// // var obj={
// //     name:"My name is wyx",
// //     getNameFun:function () {
// //         return function () {
// //             return obj.name
// //         }
// //     }
// // };
// // alert(obj.getNameFun()());