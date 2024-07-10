const testArr = [];
for(let i= 0; i< 10;i++){
    testArr.push(new Promise(resolve => {
        setTimeout(() =>{
            
            resolve(i)
        },200*i)
    }))
}

// 直接利用.then的传统方法
const fn = (arr) =>{
    let originalArr = [...arr]
    const finalArr = [];
    const limitArr = [...originalArr.splice(0,3)];
    const myFn = (promise) =>{
        
            promise.then((res) => {
                console.log(res)
            finalArr.push(res);
            
            limitArr.splice(limitArr.indexOf(promise),1)
            if(originalArr.length > 0 && limitArr.length <3){
                const pro = originalArr.shift();
                limitArr.push(pro)
                myFn(pro)
            }
        })
        
    }
    
    for(let i= 0; i< limitArr.length; i++){
        const promise = limitArr[i];
    
        myFn(promise)
    }

    return finalArr;
}

// 使用awat和race完成此方法
const fn01 = async (arr) =>{
    const limitArr = [];

    for(let i= 0; i<arr.length; i++){
        const promise = arr[i];
        promise.then( res => {
            console.log(res);
            limitArr.splice(limitArr.indexOf(promise),1)
        })
        limitArr.push(promise)
        if(limitArr.length === 3) await Promise.race(limitArr)
        
        
    }
}

fn01(testArr)


const pool = new Set();
const waitQueeue = [];
const limit = 5;

const request = (request) => {
    const isFull = pool.size >= limit;
  return new Promise((resolve, reject) => {
    const fn = () => {
        request.then(res => resolve(res))
        request.catch(err => reject(err))
        request.finally(() => {
            pool.delete(fn)
            const next = waitQueeue.shift()
            if(next) {
                pool.add(next)
                next()
            }
        })
    }

    if(isFull) {
        waitQueeue.push(fn)
    } else {
        pool.add(fn)
        fn()
    }
  })
}