
// 最简单的一种方法 利用*i 来搞出每秒的时间
for(var i=0; i<5; i++){
    (function(val){
        setTimeout(() => {
            console.log(val)
        }, i*1000)
    }(i))
}

/*
    利用async 和 await来实现每秒的打印
*/
const fn = () => new Promise(resolve => {
    setTimeout(() => resolve(), 1000)
})

(async function(){
    for(let i= 0; i<5; i++){
        await fn()
        console.log(i);
        console.log("i:")
    }
}())

