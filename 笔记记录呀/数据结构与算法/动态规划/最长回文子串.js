/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */

 // 完全没有思路！！！

 // 暴力？？枚举所有长度大于等于2的字符串 暴力一般情况就是双重循环加一个判断

 /*
  暴力法思路，双重遍历字符串获得最多的可能性，将i和j做一个相减 取得一个maxLength，保持maxLength的最大
  一个if判断就可以做到，同时保持住maxLength的 开头的start的索引值，最后对这个做一个输出既可以
 */
var longestPalindrome = function(s) {
  if(!s) return;
  
  const judgeText = (str) => {
    let len = str.length;
    for(let i=0; i<len; i++){
      if(str[i] !== str[len-i-1]) return false;
      }

    return true;
  }
  let arr = []; // 
  let tempString = "";
  for(let i=0; i<s.length; i++ ){
    for(let j =i+1; j<s.length; j++){

     
      if( judgeText(s.substring(i,j)) ){

      }
    }
  }

  
};
// @lc code=end

