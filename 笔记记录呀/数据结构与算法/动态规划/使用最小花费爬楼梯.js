/*
leetCode 746 使用最小花费爬楼梯

数组的每个索引作为一个阶梯，第 i个阶梯对应着一个非负数的体力花费值 cost[i](索引从0开始)。

每当你爬上一个阶梯你都要花费对应的体力花费值，然后你可以选择继续爬一个阶梯或者爬两个阶梯。

您需要找到达到楼层顶部的最低花费。在开始时，你可以选择从索引为 0 或 1 的元素作为初始阶梯。

*/

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  if(cost.length ===0) return 0

  let arr = []; //arr[i] 代表走到第i级台阶的最小花费
  arr[0] = cost[0];
  arr[1] = (cost[1] || 0);
  // arr[i] = Math.min(arr[i-2] + item , arr[i-1]) 同样是两种情况
  cost.forEach( (item, index) => {
    if(index !== 0 && index !== 1){
      let i = index;
      arr[i] = Math.min(arr[i-2] , arr[i-1] ) + item;
    }
   
  })
  let length = arr.length;
  return Math.min(arr[length-1],arr[length-2]); // 这里是因为可以从第二级台阶跳所以得额外做一次处理
};

let test =  [0, 0, 0, 1]
console.log(minCostClimbingStairs(test))