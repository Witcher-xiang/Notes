/*
    leetCode 509 重叠子问题（动态规划的开始）
    一般是循环迭代的方式进行
    自顶向下的求解
    我们需要自底向上的求解：即从f(1) f(2)开始做递推 这就是自底向上
*/

/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n == 0)return 0 
    if(n ==1 || n==2) return 1;
    const dp =[0,1,1];
    for(let i = 2; i <= n; i++){
        dp[i] = dp[i-1] + dp[i -2];
    }
    return dp.pop()
};