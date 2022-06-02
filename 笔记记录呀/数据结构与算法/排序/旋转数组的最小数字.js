/**
 * 剑指Offer 11 旋转数组的最小数字
 * @param {number[]} numbers
 * @return {number}
 */

 /*
    这里可以直接使用迭代，因为只反转一次，如果多次反转就呵呵了
 */
var minArray = function(numbers) {
    if(numbers.length == 1) return numbers[0];

    for(let i=1; i < numbers.length; i++){
        if(numbers[i-1] > numbers[i]) return numbers[i]
    }

    return numbers[0]
};

/*
    考虑使用二分法，排序问题一般优先考虑二分法他能从On -> OnLogn

    这里有一种循环二分法，旋转数组也可以使用循环二分法

    i,j,m 分别代码左右以及向下取整的中间值

    我们要寻找x的旋转点 详情看GoodNotes笔记
    
*/

/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
    
    let i = 0, j = numbers.length -1 ;
    while(i < j){
        let middleIndex =i + Math.floor((j - i)/2);
        const midValue = numbers[middleIndex];
       
        if(midValue > numbers[j]){
            i = middleIndex + 1;
        }
        else if(midValue < numbers[j]) {
            j = middleIndex
        }else j--;
    }

    return numbers[i]
};

/**
 * leetCode 153题 和上面说的一样，虽然说的是旋转n次 其实也相当于只旋转了一次
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {

};