/*
leetCode  322
给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。

输入: coins = [1, 2, 5], amount = 11
输出: 3 
解释: 11 = 5 + 5 + 1


输入: coins = [2], amount = 3
输出: -1

1、用来判断此题能否使用动态规划去解答：最优子结构：知道子问题并且互相制约

2、考虑dp数组，以及状态转移方程
（1）、确定base case（就是dp数组的初始化值，你也可以理解为dp底部的最底部的数值比如这里amount为0的情况）
（2）、确定状态，也就是原问题和子问题中会变化的变量。由于硬币的数量无限，硬币的面额也是确定的，只有目标金额会向着base case靠近，
所以唯一的状态就是目标金额amount
（3）、确定选择，也就是状态产生变化的行为，前三步都是在考虑状态转移方程
（4）、明确dp函数/数组的定义


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
      tempArr.push(  dp[i-element] +1 ); // 这个+1我需要仔细考虑
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

另外一种dp写法


/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
        
            // 数组项代表最少硬币数量，i是金额
            // 怎么考虑无法达成的情况，难点
            const dp = new Array(amount+1).fill(9999);// 这里多一项0，所以要+1
            dp[0] = 0;
            for(let i = 1; i <= amount; i++){
                for(let j = 0; j < coins.length; j++){
                    if(i - coins[j] < 0) continue;
                    dp[i] = Math.min(dp[i - coins[j]] + 1, dp[i]);
                }
            }
            // const last = dp.pop();
            return dp[amount] == 9999 ? -1 : dp[amount]
};