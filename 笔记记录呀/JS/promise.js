//较为极简的实现
// 使用setTimeout 实现简易的异步

/*
使用setTimeot来实现异步
包装返回函数来实现链式调用
*/
// class myPromise01 {
//     constructor(excutor) {
//       this.suc = [];
//       this.fail = []
//       this.status = "pending";
//       this.value = undefined;
//       this.err = undefined
//       excutor(this.resolve,this.reject)
//     };
  
//     resolve = (value) =>{
//       if (this.status === "pending")
//         this.status = "fulfilled";
  
//       if (this.status === "fulfilled") {
//         this.value = value;
//         setTimeout(() => {                          /* 这里写setTimeOut 就可以实现异步*/
//           this.suc.forEach(fn => fn(this.value))
//         }, 0)
       
//       }
//     };
  
//     reject = () => {
//       if (this.status === "pending"){
//         this.status = "rejected";
//       }
  
//         if (this.status === "fulfilled") {
//           this.fail.forEach(fn => fn(this.err))
//         }
//     }
  
   
//   }
  
//   // 这里注意写function
//   myPromise01.prototype.then =function(cb){
//     return new myPromise01( (resolve, reject) => {
  
//       this.suc.push(() => {
//         let result = cb(this.value)
//         resolve(result);
//       });
//     })
//   }
  
//   let promise = new myPromise01((resolve) => { 
//     setTimeout(() => {
//       resolve(123)
//     },1000)
//   })
  
//   promise
//     .then((res) => {
//       console.log("我是.then的回调函数, 返回值res是：",res);
//       return "哈哈哈我是小天才"
//   })
//     .then(res => console.log("二号返回值",res))


    /*
    使用状态机 来进行promise异步的实现
    
    如果不使用状态机就需要setTimeout 来使得先执行then里的东西，再去执行resolve内的东西

    使用状态机的目的是第一次reolve 将pending状态变为fulfilled的状态 然后再去调用一次reolve， 这次直接去遍历执行回调函数数组

    这是第一种情况，如果不是异步的情况是这样的，

    第二种情况是异步的情况，则会先去执行.then

    因此在 .then中 要去分清两种情况, 在.then 去做状态的判断，

    resolve中也可以做，但不太有必要，
    */

   class myPromise {
    constructor(excutor) {
      this.suc = [];
      this.fail = []
      this.status = "pending";
      this.value = undefined;
      this.err = undefined
      excutor(this.resolve,this.reject)
    };
  
    resolve = (value) =>{
   
        this.status = "fulfilled";
        this.value = value;
        this.suc.forEach(fn => fn(this.value)); // 不加状态是可以的

 
    }
  
    reject = () => {
      if (this.status === "pending"){
        this.status = "rejected";
      }
  
        if (this.status === "fulfilled") {
          this.fail.forEach(fn => fn(this.err))
        }
    }
}
  
  // 这里注意写function
  myPromise.prototype.then =function(cb){
    return new myPromise( (resolve, reject) => {
        // 异步的情况
        if(this.status === "pending"){
            this.suc.push(() => {
                let result = cb(this.value)
                resolve(result);
              });
        }

        // resolve 直接执行的同步的情况 
        else if(this.status === "fulfilled"){
            this.suc.push(() => {
                let result = cb(this.value)
                resolve(result);
              });
            this.resolve(this.value)
        }
    })
  }
  
  let promise = new myPromise((resolve) => { 
        resolve(1235)
  })
  
  promise
    .then((res) => {
      console.log("我是.then的回调函数, 返回值res是：",res);
      return "678"
  })
  .then(res => console.log("生活啊",res))
