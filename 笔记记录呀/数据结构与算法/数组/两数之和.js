/**
 * leetCode 第一题
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 // 这是我第一个想到的方法 这种方法类似于暴力枚举 时间复杂度： O(n^2)
var twoSum01 = function(nums, target) {
    
    for(let i = 0; i<nums.length; i++){
        const item = nums[i];
        const tempArr = [...nums]
        tempArr.splice(i ,1)

        const findIndex = tempArr.indexOf(target - item);
        if(findIndex !== -1) return [i,findIndex +1];
    }

    return [];
};

// 第二种方法 用哈希表，一次遍历创建哈希表，用空间换时间 速度快了三倍
var twoSum02 = function(nums, target) {
    const hashMap = {};
    for(let i=0; i< nums.length; i++){
        const item = nums[i];
        if(hashMap[item] !== undefined) return [hashMap[item],i]
   
        let key = target - item;
        hashMap[key] = i;
    }

    return [];
};


let arr = [2,7,11,15];
