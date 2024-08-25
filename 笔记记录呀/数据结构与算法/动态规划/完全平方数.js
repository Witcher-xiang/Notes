/**
 * leetCode 279 完全平方数
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {

    // 含义为数字为i时，项的含义为 和为 n 的完全平方数的最少数量 
    // dp[i] = Math.min(dp[])
    if (n === 0) return 0

    const dp = new Array(n + 1).fill(999999)
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 2;
    dp[3] = 3;
    dp[4] = 1;

    for (let i = 4; i <= n; i++) {
        console.log(i, n)
        for (let j = 1; j * j <= i; j++) {
            dp[i] = Math.min(dp[i - j * j] + 1, dp[i]);
        }
    }

    return dp[n]
};