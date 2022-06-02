/*

给定一个无序的整数数组，找到其中最长上升子序列的长度。

示例:

输入: [10,9,2,5,3,7,101,18]
输出: 4 
解释: 最长的上升子序列是 [2,3,7,101]，它的长度是 4。


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-increasing-subsequence
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
像是子序列这种题只能使用动态规划：
这种只需要一层dp即可
想想子问题 dp[i]代表如果用第i项作为递增子序列的最大长度
*/
/**
 * @param {number[]} nums
 * @return {number}
 * 
 */
var lengthOfLIS = function(nums) {
    // 定义dp[i]为dp[i]这个数组时他的最长递增子序列
    const dp = new Array(nums.length).fill(1);
    // 定义状态转移方程：
    for(let i =0; i<nums.length;i++){
        // 用来重新计算j项的
        let count = 1;
        for(let j =0; j < i; j++){
            // 大于说明重新计算的子序列可以+1
            if(nums[i] > nums[j]){
                count++;
                dp[i] = Math.max(dp[i],dp[j]+1)
            }
            
        }
    }

   
    return dp[amount]
};