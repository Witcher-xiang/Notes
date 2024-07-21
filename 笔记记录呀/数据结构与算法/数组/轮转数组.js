// https://leetcode.cn/problems/rotate-array/description/?envType=study-plan-v2&envId=top-interview-150

// leetCode 189 轮转数组

/*
    核心在于取余操作
    // newArr[(i+k)%len] = nums[i]
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    
    const len =nums.length;
    const newArr = new Array(len);

    for(let i=0; i<len;i++ ){
        newArr[(i+k)%len] = nums[i]
    }
    console.log(newArr)
    for(let i=0;i<len;i++){
        nums[i] =newArr[i]
    }
    
};