/*
    1、闭包发生内存泄漏的情况
    2、如何解决内存泄漏
*/
function deepClone(obj) {
    if (typeof obj !== "object") return obj;
       let obj01 = null;
       Array.isArray(obj)?obj01 = new Array() :obj01 = new Object()
       for (let key in obj){
           obj[key] && typeof obj[key]  === "object" ?obj01 = deepClone(obj) : obj01[key] = obj[key]
       }
    return obj01
   }