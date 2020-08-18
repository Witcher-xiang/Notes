/**
 * @param {number} n
 * @return {number}
 */
var waysToChange = function(n) {
  const dp =new Array(n+1).fill(0);// dp[i] 代表 金额为i时有dp[i] 种表示方法    n+1是因为我多引入了0项
const arr = [1,5,10,25];
dp[0] =1 // 如果没有硬币也算是一种方法的话

// 动态转换方程：dp[i] = (dp[i-1] + 1) +( dp[i-5] + 1)+ (dp[i-10] +1) + (dp[i-25] +1)
arr.forEach((item,index) => {
  for(let i=1; i<=n; i++){
  if(i - item >=0) dp[i] =(dp[i] + dp[i-item]) % 1000000007; // 它让你取模 就是 取余数
  }
})


console.log(dp)
return dp.pop()
};