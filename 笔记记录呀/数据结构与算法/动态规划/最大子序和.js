/*
  最大子数组和
  leetCode 53题
  核心思想：前一项比当前项大于0即可，如果不大于0则取dp中的内容（都大于0 则比较大小）
  需要注意的是要特别分清楚当前dp[i]和和最大值
*/
var maxSubArray = function(nums) {
  if(!nums) return;
  let dp = []; // 定义数组的含义，即上一个是当前数组第i项的最大值
  let result;
  dp.push(nums[0]);
  result = nums[0];

  nums.forEach((item,index) => {
    if(index !== 0){

      const pre = dp[index-1];
      // 这个是必须连续的的所以是item+pre，如果不连续，那就要三方判断了
      dp[index]= Math.max(item, item + pre); // 这里不能单独做pre
      result = Math.max(result,dp[index]); // 用来判断上一项 这里是为了防止前面一开始就有最大项导致后面无法拿到的情况
    };

    
  })

  return result;
};

// @lc code=end
const arr = [-2,1,-3,4,-1,2,1,-5,4]
console.log(maxSubArray(arr));