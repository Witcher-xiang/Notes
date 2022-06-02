async function async1() {
    console.log("async1 start");
    await async2();
    console.log("async1 end");
    setTimeout(() => {
        console.log('timer1')
    }, 0)
}
async function async2() {
    setTimeout(() => {
        console.log('timer2')
    }, 0)
    console.log("async2");
}
async1();
setTimeout(() => {
    console.log('timer3')
}, 0)


// async1 start
// async2
// async1 end
// timer3
// timer2
// timer1


// 启示：async函数中只要是await之前，我们就看作resolve之前，如果是await 看作resolve(xxx)即可