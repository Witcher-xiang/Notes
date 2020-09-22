// /* 这个用做平时的练习*/

// /*
// 快速排序
// */

// const quickSort = (arr) => {
//   if(arr.length <=1) return arr;
//   let middleIndex = Math.floor(arr.length/2), left = [], right = [];
//   let middleValue = arr.splice(middleIndex, 1)[0];

//   arr.forEach(element => {
//     if(middleValue > element){
//       left.push(element)
//     }
//     else right.push(element);
//   });

//   return [...quickSort(left),middleValue,...quickSort(right)]
// }

let temp = [4,47,1,8,3]
console.log(quickSort(temp))

const threeWayfastSort = (arr) => {

  const fn = (list) => {
    const ary = [...list];
    let l = 0, lt = 0, p = ary[0], rt = ary.length, i = 1;

    while(rt !== i){
      // 如果数组的第i项 == p的话则把他分到中间区域 即i向前移动即可
      if(ary[i] === p){
        i++
      }
      // 如果第i项大于基准值 用rt-1 和第i项进行修改 i不用动
      if(ary[i] > p ){
        ary = exchange(rt-1, i, ary);
        rt = rt -1;
      } 
      // 如果第i项小于基准值，则 lt和i进行交换 lt+1 i+1
      if(ary[i] < p){
        ary = exchange(lt+1, i, ary);
        lt = lt +1;
        i++;
      }
    }
    // 最后结束了 因为第一项还是p 记得和lt交换一下 然后lt - 1 一下
    if(rt === i){ 
      ary = exchange(0, i, ary);
      lt = lt -1
    }

    return fn().conact()
  }

  const exchange = (leftIndex, rightIndex, arr) => {
    let temp = arr[leftIndex];
    arr[leftIndex] = arr[rightIndex];
    arr[rightIndex] = temp
    return arr; 
  }
}
// let test = [["A", "B", "C"], ["B", "E"]];
// const actorMap = {
//   A: 10,
//   B: 25,
//   C: 5,
//   D: 15,
//   E: 40,
//   F: 30,
// }
// function getMaxFilmCost( film ) {
//   let max = 0;
//   for( let i =0; i<film.length; i++){
//       let sum = 0;
//       for( let item of film[i]){
//         console.log("sum",sum)
//           sum += actorMap[item]; 
//       }
//       max =  max >sum ? max : sum;
//   }

//   return max
// }
// console.log(getMaxFilmCost(test))

// const getDistance = (arr01, arr02) => {
//   let x1 = arr01[0], y1 = arr01[1], abs, temp;
//   let x2 = arr02[0], y2 = arr02[1];

//   abs = Math.abs( Math.pow((x1 - x2),2) + Math.pow((y1 - y2),2));
//   temp = Math.ceil(Math.sqrt(abs));

//   return temp;
// }

// function getMinDistance( arrs ) {
//   // write code here
//     let min = Number.POSITIVE_INFINITY;
//     for( let i =0; i<arrs.length; i++ ){

//       for(let j = i +1; j< arrs.length; j++){
//         let distance = getDistance(arrs[i], arrs[j]);

//         min =  min > distance ? distance : min;
//       }
//     }

//     return min;
// }

// console.log(getMinDistance([[0,0],[0,4],[3,0]]))

// const inputArr = [["question", "issue"], ["difficult", "embarrassment"]];
// const inputStr = "this question is too difficult for me to answer";

// console.log(inputStr.indexOf("question"))
// /**
//  * 生成意思相近句子的集合
//  * @param words string字符串二维数组 相似词表
//  * @param sentence string字符串 参照的句子
//  * @return string字符串一维数组
//  */
// function generateSentences( words ,  sentence ) {
//   let arr = [];
//   words.forEach(element => {
//     let newStence = sentence;
//     let defaultValue = element[0], replaceValue = element[1];
//     let reg =new RegExp( defaultValue + "{1,}" ); 
//     newStence.replace(reg, replaceValue);
   
//   });
//   // write code here
// }
// generateSentences(inputArr, inputStr)


// let reg = new RegExp("!")
// console.log("123!".replace(reg,"????"))