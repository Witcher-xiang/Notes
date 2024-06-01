/*
三数之和

思路：双指针+排序

前提碎碎念：
双指针相向最开始的思路是题目两数之和（需要排序好），从两头开始排序， 如果俩指针相加小了，就说明你最小的数小了，需要向右边移动，如果俩指针相加大了，就说明你最大的数大了，右指针需要向左边移动。
那如果把这个思路套到这里，我们先排序，然后我也可以使用left和right俩个指针一左一右，此时引入第三个指针k，arr[left] + arr[right]  > 0, 此时应该right = right - 1,


注意：i是在最左边的，left是中间，right是右边（不是i在中间！！！）

不错的题解
1、首先排序
2、第一层循环，i从右边开始，i+1和length-1指定为左右指针
3、左右指针，根据sum的大小，一次循环某个指针+1
4、当指针+1，时需要判断有无重复
5、i+1也需要判断有无重复指针

这题所有的唯一解都要判断有无重复
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let finalArr = [];
    nums = nums.sort((a,b) => a- b)
    
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

            while(nums[i] == nums[i+1]) i++; // todo这个唯一解很重要，一定要加在后面，为了应对 -1 -1 2这种情况
            
        }   
    }
    return finalArr;
};



/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let finalArr = [],length = nums.length;
    nums = nums.sort((a,b) => a - b);

    if(nums[0] <=0 && nums[nums.length-1] >=0)
    for(let i = 0; i < length-2; i ++){
        let left = i+1, right = length -1;

        while(left < right){
            if(nums[i] * nums[right] > 0) break;
            if(nums[i] > 0 ) break;

            const sum = nums[left] + nums[right] + nums[i];
            
            if(sum ==0){
                finalArr.push([nums[left],nums[i],nums[right]]);
            }
            
            if(sum <= 0){
               while(nums[left++] == nums[left]){};
            }else{
                while(nums[right--] == nums[right]){};
            }

            while(nums[i] == nums[i+1]) i++; // 要在执行完的末尾进行判重
        }
    }

    return finalArr;
};


/*
方法二：
两个for循环 + hash表，类似暴力搜索法，只不过把第三次循环变成了空间复杂度
第一次for循环，把所有数组存到hash表中
第二次for循环 i+j =  -k, 在hash表中查找有没有 正k的存在，这里用索引来判断重复，hash表中的key是数组值，value则为相加的值，这样就可以判重
*/

 
