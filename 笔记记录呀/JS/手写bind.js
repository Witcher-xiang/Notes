const test =function (a,b,c) {
    c = this.d;
    console.log(a,b,c,this.d)
}

Function.prototype.myBind = function(that ,...arg){
   let fn = this;

   const result = function(...arg01){
       const isNew = new.target !== "undefined"; // 这个是原始bind的一个特性，如果原来的函数bind后又new那么他的this会绑定当前this而不是鑫this
      return fn.apply(isNew ? this :that, [...arg,...arg01])
   }
   result.prototype = fn.prototype; // 记得继承
   return result;
}

var obj = {d: "11"}

const a= test.myBind(obj,"a","b","c")
// a();
const a01 = new a();