/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  if(!nums) return;
  let arr = []; // 定义数组的含义，即上一个是当前数组第i项的最大值
  arr.push(nums[0]);

  nums.forEach((item,index) => {
    if(index !== 0){
      const pre = arr[index-1];

      const currMax = Math.max(item, pre, item + pre);
      arr.push(currMax);
    }
    
  })

  return arr.pop();
};
// @lc code=end

