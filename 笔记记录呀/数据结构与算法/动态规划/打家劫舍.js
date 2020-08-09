/*
198. 打家劫舍
你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if(nums.length ==0 ) return 0;

  let arr = [] // arr[i] 代表到第i项能偷到的最多的钱数
  arr[0] = nums[0]; // 初始值有两项
  arr[1] = Math.max(nums[0],nums[1] || 0);

  /*
  其实初始状态可以 前 0 间房子的最大偷窃价值为 00 ，即 dp[0] = 0 。 即多加一个数0 可以少考虑几种初始情况
  */ 
  /*
  状态转换方程（两种情况）：
  （1）arr[i+1] = arr[i] // 有可能上次房子相邻就不能偷了
   (2) arr[i+1] = arr[i-1] + nums[i+1] // 因为上次房间不能偷了，因此我们不能算arr[i-1]

   总： arr[i+1] = Math.max( arr[i], arr[i-1) + nums[i+1] )
  */
  nums.forEach( (element,index) => {
    if(index !== 0 && index !== 1) {
      let i = index;
      arr[i] = Math.max( arr[i-1], arr[i-2] + element )
    
    }
  })

  return arr.pop();

  /*
  接下来考虑优化的问题：
  这里只和arr[i-1] 还有arr[i -2] 因此设置一个pre 和curr即可
  */
};

let test = [2,7,9,3,1]

console.log(rob(test))




/* 优化版本：*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if(nums.length ==0 ) return 0;
let pre = nums[0]; 
let curr = Math.max(pre,nums[1] || 0);

nums.forEach( (element,index) => {
if(index !== 0 && index !== 1) {
  let temp ;
  temp = Math.max( curr , pre + element )
    pre = curr;
    curr = temp;
}
})

return curr;
};