// 128 最长连续序列

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length === 0) return 0

    let max = 1;
     let num_set = new Set();
    for (const num of nums) {
        num_set.add(num);
    }
    
    for(let i=0;i<nums.length;i++){
        let item = nums[i];
        // 这里是关键
        // 需要判断是不是开头的数
        // 这里判断如果是开头的数，则他的前一项应该是不存在的
        if(!num_set.has(item - 1)){
            
            let tempMax = 1;
            // 然后看看我们能往后延续多少
               while (num_set.has(item + 1)) {
                tempMax++;
                item++;
                
               }
               max = Math.max(max,tempMax)
        }
        
    }

    return max;
};