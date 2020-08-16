/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
  const dp = []; // dp[i] 代表第i天的最低消费
  let daysIndex = 1;
  dp[0] = 0; 
  days.unshift(0); // 增加一个头部的默认值
  for(let i = 1; i<=366; i++ ){
      if(days[daysIndex] !=i){
          dp[i] = dp[i-1]
          continue
          }
          let n1 = dp[i-1] + costs[0];
          let n2 = i - 7 >= 0 ? dp[i-7] + costs[1] : costs[1];
          let n3 = i - 30 >= 0 ? dp[i-30] + costs[2] : costs[2];
          dp[i] = Math.min(n1,n2,n3)
          daysIndex++;
  }

  return dp[days.pop()]
};