 // 需要明确快慢指针含义，快指针是寻找新数组的元素，慢指针是原数组的位置
 var removeElement = function(nums, val) {
    let slowIndex= 0;
    for(let fastIndex = 0;fastIndex<nums.length;fastIndex++){
        if(nums[fastIndex] !== val){
            nums[slowIndex] = nums[fastIndex];
            slowIndex++;
        }
    }
  

    return slowIndex;
    
  };