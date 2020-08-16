/*
leetCode  322
给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。

输入: coins = [1, 2, 5], amount = 11
输出: 3 
解释: 11 = 5 + 5 + 1


输入: coins = [2], amount = 3
输出: -1


动态规划最难的对我来说不是找到最优子结构，而是怎么建立数组，怎么找到数组的含义
*/
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  let dp = new Array(amount).fill(-1); //dp[i] 代表 总金额为i时， 最优解的硬币个数 一般来说，只要不涉及到字符串都是一维数组，其含义就是要求的东西
  dp[0] =0;
  // 初始值：
  // 状态转移方程： dp[i] = Math.min( Math.min(dp[i-coin] + 1,..,...))
  for(let i =1 ; i<= amount; i++){
    let tempArr = [];
    coins.forEach( element => {
      if(i -element >= 0) 
      tempArr.push(  dp[i-element] +1 );
    })

    
    dp[i] = Math.min(...tempArr)
  } 

  console.log(dp)
  
  const last =dp.pop();
  if(isFinite(last)) return last;
  else return -1;
};

let testCoins = [1, 2, 5];
let amount= 11;

console.log(coinChange(testCoins,amount))