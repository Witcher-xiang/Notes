/**
 * 剑指 Offer 53 - I. 在排序数组中查找数字 I
 * 思路利用二分查找做两次查找，分别找到这个数的左右边界相减即可
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const binary = (arr,target,isLower = false) => {
    let answer = arr.length;
    let left = 0, right = arr.length - 1,mid;
    while(left <= right){
        mid = Math.floor((left + right)/2)
      
        if(arr[mid] > target || (isLower && arr[mid] >= target)){
             answer = mid;
            right = mid-1
        }else{
            left = mid + 1
        }
         
    }

    return answer;
}

var search = function(nums, target) {
  const low = binary(nums,target,true);
  const high = binary(nums,target);
    if(high <= nums.length){
        return high - low;
    }

    return 0;
};