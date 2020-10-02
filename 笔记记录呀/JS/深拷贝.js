/*
TODO: 目前没有考虑循环引用的问题，解决循环引用的话需要使用快慢指针
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