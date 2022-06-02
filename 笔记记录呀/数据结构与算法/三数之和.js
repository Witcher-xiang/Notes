/*
三数之和

思路：双指针+排序

注意：i是在最左边的，left是中间，right是右边（不是i在中间！！！）

不错的题解
1、首先排序
2、第一层循环，i从右边开始，i+1和lenght-1指定为左右指针
3、左右指针，根据sum的大小，一次循环某个指针+1
4、当指针+1，时需要判断有无重复
5、i+1也需要判断有无重复指针
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let finalArr = [];
    nums = nums.sort((a,b) => a- b)
    
    if(nums[0] <=0 && nums[nums.length-1] >=0)
    for(let i=0;i<nums.length - 2;i++){
        let left = i+1;
        let right = nums.length - 1;
        let item01 = nums[i];
        

        while(left < right){
            if (nums[i] > 0) break; // 最左侧大于0，无解
            if (nums[i] * nums[right] > 0) break; // 三数同符号，无解
            
            let sum = item01 + nums[left] + nums[right];
            // 求和
            if(sum == 0){
                finalArr.push([item01,nums[left],nums[right]])
            }

            if(sum<=0){
                while(nums[left ++] == nums[left]){}
            }else{
                while(nums[right--] == nums[right]){}
            }

            while(nums[i] == nums[i+1]) i++;
            
        }   
    }
    return finalArr;
};