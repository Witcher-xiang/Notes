setTimeout(()=>{
  console.log(6666)
},0)
let A = new Promise(
  (resolve,reject) => resolve("2112")
);
A.then(res=>{
  console.log("1111111")
})
.then(res => {
  console.log("2222222")
})

A.then(res=>console.log("213123"))

// 

class myPromise{
  constructor(fn){
    this.arr = [];
    fn(this.resolve,this.reject)
    this.value = "";
  }

  resolve(res){
    this.arr.forEach(item=>{
      this.value =item(res)
    })
  }

  reject(err){

  }



}

function myInstanceOf(A,B){
  if(!A || !B) return false;
  
  while(true){
    if(A.__proto__ === B.prototype) 
    return true;

    if(A.__proto__ === null)
    return false

    A = A.__proto__;
  }
}