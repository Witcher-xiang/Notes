// // // 实现一个sum 方法，既支持sum(x, y)，又支持sum(x)(y)
/*
    注意这里用了一个小的知识点

*/

// sum(2) // => 5
let a = sum()
console.log(+a(2)(3)(8) )
// => 9
// sum(2)(3)(4) // => 9

function sum(...arg) {
    // ...
    const argArr = [...arg];
     function sum01(...arg01){
        
        
        if(arg01.length == 0){
            // sum01()
            return argArr.reduce((pre,lastSum) => pre+lastSum)
        }
        
        else {
            argArr.push(...arg01)
            return sum01;
        }
    }

    sum01.toString = () =>{
        return   argArr.reduce((pre,lastSum) => pre+lastSum)
    }

    return sum01;
    
}