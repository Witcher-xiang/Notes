/*
    leetcode123 股票买卖问题1
*/


/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // dp为一个只有两层的二阶数组  [[最大现金数量(今天不持股),最大现金数量(今天持股)],....]
    // 情况：
    // dp[i][0] = 0 || prices[i] - dp[i-1][0] 还没买，已经买了而且卖了  
    // dp[i][1] = -prices[i] || dp[i-1][1] 今天买，或者过去买的不卖
    //状态转换方程：
    //不持股： dp[i][0] = Math.max(dp[i][0],dp[i-1][1] + price[i])
    //持股： dp[i][1] = Math.max(-prices[i], dp[i-1][1])
    let max = 0;
    let dp  = new Array(prices.length).fill([]);
    
    dp[0][0] = 0;
    dp[0][1] = -prices[0]
    
   
    for(let i = 1; i<prices.length; i++){
        dp[i][0] = Math.max(dp[i][0],dp[i-1][1] + price[i]);
        dp[i][1] = Math.max(-prices[i], dp[i-1][1]);
    }
    return dp[i][0];
};