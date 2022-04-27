
/*
    核心问题 逐项比较的话，你怎么判断当前这一项版本号，比另一项大呢
    直接 b - a 类似比大小
    逐项比较可能会有某项突然不存在情况，就说明位数不对直接比较lenght或者比大小返回负数也行

*/

const arr = ['0.1.1', '2.3.3', '0.302.1','0.301.1', '4.2', '4.3.5', '4.3.4.5'];

arr.sort((a,b) => {

    let arr01 = a.split("."),arr02 = b.split(".");
    let i = 0;
    while(true){
        let str01 = arr01[i], str02 = arr02[i];
        i++;
        if(str01 == str02) continue;

        if(str02 == undefined || str01 == undefined){
            return arr01.length >  arr02.length ? 1 : -1; 
        }

        return str02 - str01;
    }
})

console.log(arr)