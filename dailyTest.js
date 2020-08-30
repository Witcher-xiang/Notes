/* 这个用做平时的练习*/

/*
快速排序
*/

const quickSort = (arr) => {
  if(arr.length <=1) return arr;
  let middleIndex = Math.floor(arr.length/2), left = [], right = [];
  let middleValue = arr.splice(middleIndex, 1)[0];

  arr.forEach(element => {
    if(middleValue > element){
      left.push(element)
    }
    else right.push(element);
  });

  return [...quickSort(left),middleValue,...quickSort(right)]
}

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
    ary = exchange(0, i, ary);
    lt = lt -1
    for(let i =1; i <ary.length; i++){

    }
  }

  const exchange = (leftIndex, rightIndex, arr) => {

    return arr; 
  }
}