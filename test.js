// //  跑逐行读取-赛马网考试

// const fs = require('fs');
// const readline = require('readline');
// let line = null

// const rl = readline.createInterface({
//   input: fs.createReadStream('sample.txt'),
//   crlfDelay: Infinity
// });

// rl.on('line', (line = read_line) => {
//   console.log(`文件中的每一行: ${line}`);
//   console.log(readline)
// });


// // Javascript
// var N, M;
// // 每组第一行是2个整数，N和M，至于为啥用while，因为是多组。
// while ((N=readInt()) != null && (M=readInt()) != null) {
//   print (N + ' ' + M);
//   // 循环读取“接下来的M行”
//   for (let i=0; i<M; i++) {
//     let a = readInt();
//     let b = readInt();
//     let c = readInt();
//     // 每行是3个整数，a，b，c。
//     print(a + ' ' + b + ' ' + c);
//   }
//   // M行读取完了，就又要开始下一组了，去while那里。
// }

// let line;
// while(line = read_line){
//   let arr = line.split(' ')
// }

/*

逆序五进制
时间限制： 3000MS 
内存限制： 589824KB
题目描述：
编写一个程序，首先将一个十进制正整数逆序【需要去掉前导0】，然后转换成五进制正整数，最后输出该五进制正整数。



输入描述
单组输入。

每组测试数据的输入占一行，输入一个十进制正整数n。 （n<=100000）

输出描述
每组测试数据的输出占一行，输出转换后所得的五进制正整数。


样例输入
1000
样例输出
1

提示
样例2：
输入：
77267

输出：
4420102


*/

// const loseZero = (value) => {
//   let tempStr = '', headStatus = true;

//   for(let i = 0; i < value.length;i++ ){
//     let item = value[i];
//     if(item == 0 && headStatus) continue;
//     headStatus = false;
//     tempStr = tempStr + item;
//   }
  
//   return tempStr;
// }

// let str = '1000'
// // let str;
// // while ((str=readInt()) != null) {
//   let result, reserve = '';
//   // 反转
//   for(let i = str.length; i--; i < 0){
//     reserve =reserve + str[i];
//     console.log(reserve)
//   }
//   // 去0
//   result = loseZero(reserve);

 
//   // return (result - 0).toString(5)
// //}

// console.log("reserve",result,(result - 0).toString(5))


/*
 let str;
  const loseZero = (value) => {
      let tempStr = '', headStatus = true;

      for(let i = 0; i < value.length;i++ ){
        let item = value[i];
        if(item == 0 && headStatus) continue;
        headStatus = false;
        tempStr = tempStr + item;
  }
  
  return tempStr;
}

 while ((str=readInt()) != null) {
  let result, reserve = '';
      str = str + '';

  // 反转
  for(let i = str.length; i--; i < 0){
    reserve =reserve + str[i];
  } 
  // 去0
  result = loseZero(reserve);
 // 转进制 
    print((result - 0).toString(5))
}

*/


let str = '1 1 3';
let arr = str.split(' ');
let result = [];
let operateType = arr[0],
    index = arr[1],
    addNum = arr[2];

    if(operateType == 1 && index && addNum){
      result.splice(index-1, 0, addNum)
    }
    if(operateType == 2 && index){
      result.splice(index, 1)
    }
    if(operateType == 3){
      result.forEach(item => print(item));
    }

    console.log("result",result)