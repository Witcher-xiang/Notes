/*
    循环引用问题已经解决，大概思路即是使用一个map来存 我们用过的每一个object 这样如果有循环引用，我们下次直接从那个Map里去拿然后返回即可

    null需要注意一下，想要偷懒就直接 new obj.constructor 去新建引用对象即可
*/

function deepClone(param, hashMap) {
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

   obj.test = obj

   const newObj = deepClone(obj, new Map())
   obj.a.name = "66"
   obj.arr = "77"
   console.log(newObj)