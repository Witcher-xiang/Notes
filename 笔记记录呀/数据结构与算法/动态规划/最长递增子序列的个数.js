/*
674. 最长连续递增序列（弱化版本）
给定一个未经排序的整数数组，找到最长且连续的的递增序列，并返回该序列的长度。
*/
/**
 * @param {number[]} nums
 * @return {number}
 */

var findLengthOfLCIS = function(nums) {
  
  let max = 0, count =0, pre = 0;

  for(let i =0; i<nums.length; i++){
    let curr = nums[i];
    if( pre < curr){
      count++;
      max = count > max ? count : max;
    }else{
      count = 1;
    }
    pre = curr;
  }

  return max
};

console.log(findLengthOfLCIS([2,2,2,2,2]))




/*
673. 增加版本

给定一个未排序的整数数组，找到最长递增子序列的个数。

示例 1:

输入: [1,3,5,4,7]
输出: 2
解释: 有两个最长递增子序列，分别是 [1, 3, 4, 7] 和[1, 3, 5, 7]。
示例 2:

输入: [2,2,2,2,2]
输出: 5
解释: 最长递增子序列的长度是1，并且存在5个子序列的长度为1，因此输出5。

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const dp = new Array(nums.length).fill(1);
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j <= i ;j++){
            if(nums[i] > nums[j]){
                 dp[i] =Math.max(dp[i],dp[j] + 1);
            }
        }
    }
    
    return Math.max(...dp);
};