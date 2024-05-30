// LeetCode 283
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    if(nums.length ===1 ||  nums.length ===0){
        return nums;
    }
    let index01 = 0;
    let index02 = 0;
    
    while(index02 < nums.length){
           const item01 = nums[index01];
        const item02 = nums[index02];

// TODO 你第一次可能会想 当慢指针为0 且快指针不为0时交换但是 [1,0情况无法考虑] 
// 所以换个思路 把所有为置为之前的数字，最后0即可

        if( item02 !==0){
            let temp = nums[index01]
            nums[index01] = nums[index02]
            nums[index02] = temp;
            index02++
            index01++
        }else{
            index02++
        }

    
       
        
    }

      for(let i = index01;i< nums.length;i++){
            nums[i] = 0;
        }

    return nums;
 
};



