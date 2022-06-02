/*
    无重复字符的最长子串 leetCode 3
    核心解法：滑动窗口
    或者是取巧的队列
*/

// 队列解法
var lengthOfLongestSubstring = function(s) {
    let queeue = [];
    let max = 0;
    for(let item of s){
        
        // 如果有重复的队列就会被清空
        while(queeue.includes(item)){
            queeue.shift();
        }
        queeue.push(item);
        max = Math.max(max,queeue.length)
    }
    return max;
    
};


// 滑动窗口解法，用Array维护一个滑动窗口,如果有重复就删除重复项以前的所以窗口

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let queeue = [];
    let max = 0;
    for(let i = 0; i< s.length; i++){
        let item = s[i];
        let index = queeue.indexOf(item);
        // 存在的情况下
        if(index > -1){
            queeue = queeue.slice(index +1); // 这里不用slice用 while queeue.shift() 也是可以的，其实本质也是滑动窗口
        }
        queeue.push(item);
        max = Math.max(max,queeue.length);
    }
    return max;
    
};

