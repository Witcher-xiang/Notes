/**
 * leetCode 88 题
 * 
 * 这个题解是我写的常规题解
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    if(n<0) return nums1;
    let index01 = 0,index02 = 0;
    while(n>index02 && m > index01){
        
        if(nums1[index01] > nums2[index02]){
            nums1.splice(index01,0,nums2[index02]);
            nums1.pop();
            index01++;
            index02++;
            console.log(nums1)
        }else {
            index01++
        }
        if(index01 == m) {
        console.log(nums2)
        nums1.splice(-(nums2.length - index02),nums2.length - index02)
        nums1.push(...nums2.slice(index02))
        }
    }
    
};


/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    const sorted =[];
    let index01 = 0;
    let index02 = 0;
    while(index01 < m || index02 < n){
        let curr;
        /*
            这个为了🧍‍♀解决0的问题
            == m 的时候就是有0，我们就该去取另一个数组了
        */
        if(index01 == m){
            curr = nums2[index02++]
        }
        else if(index02 == n){
            curr = nums1[index01++]
        }
        else if(nums1[index01] <= nums2[index02]){
            curr = nums1[index01]
            index01++
        }else{
            curr = nums2[index02]
            index02++
        }
        sorted[index01 + index02 - 1] = curr;
    }

     for (let i = 0; i != m + n; ++i) {
        nums1[i] = sorted[i];
    }
    

    console.log(sorted)

    

    
};