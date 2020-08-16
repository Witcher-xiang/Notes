/*

给定一个无序的整数数组，找到其中最长上升子序列的长度。

示例:

输入: [10,9,2,5,3,7,101,18]
输出: 4 
解释: 最长的上升子序列是 [2,3,7,101]，它的长度是 4。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-increasing-subsequence
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  if (nums.length ===0 )  return 0
  /*定义一维数组，代表当前项最长上升子序列的长度 */ 
 let arr = new Array(nums.length).fill(1); // 数组项代表长度为i时的最长上升子序列

 /*
  arr[i] = arr[i-1] >  arr[i-1] + nums[i]
 */
};