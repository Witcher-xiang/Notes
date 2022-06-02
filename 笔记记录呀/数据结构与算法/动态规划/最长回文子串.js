/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

 /*
  新版去中心化思想
 */
/**
 * @param {string} s
 * @return {string}
 */
 // 中心化思想
var longestPalindrome = function(s) {
    
    let res = ""
    for(let i=0;i < s.length;i++){
        let str01 = getCycleString(s,i,i);
        let str02 = getCycleString(s,i,i+1);
        
        let str = str01.length > str02.length ? str01 : str02;
        
        res = str.length > res.length ? str : res;
         
    }
    return res;
};

function getCycleString ( s,left,right){
    while(s[left] == s[right] && left >= 0 && right < s.length){
    right++;
    left--;
     
    }
    return s.substring(left+1,right);
    
}

/**
 * @param {string} 
 * @return {string}
 */

 // 暴力？？枚举所有长度大于等于2的字符串 暴力一般情况就是双重循环加一个判断

 /*
  暴力法思路，双重遍历字符串获得最多的可能性，将i和j做一个相减 取得一个maxLength，保持maxLength的最大
  一个if判断就可以做到，同时保持住maxLength的 开头的start的索引值，最后对这个做一个输出既可以

  这个没法通过 虽然思路可以这样

  空间复杂度：O(1)
  时间复杂度：O(n^3)  内部还要做一层遍历
 */
    var longestPalindrome = function(s) {
      if(!s) return "";
      
      const judgeText = (str) => {
        let len = str.length;
        for(let i=0; i<len; i++){
          if(str[i] !== str[len-i-1]) return false; //注意这里需要多 减去一个1
          }

        return true;
      }

      let  bigStr = ""; 
      let  length = 0;
      for(let i=0; i<s.length; i++ ){
        for(let j =i+1; j<s.length; j++){
          const str = s.substring(i,j+1)
          if( judgeText(str) ){
            if(str.length > length){
              length = str.length;
              bigStr = str
            }
          }
        }
      }

      if(bigStr.length === 0) return s[0]; // 因为for循环我索引加了 1 所以这里需要对1 进行处理
      return bigStr;
    };

/* 10.16  重新理解其 动态规划 我放弃！ 这个动态规划的边界条件我没办法去理解 太sb了 我决定用中心 去重去尝试
为了填他的二维表

//i ,j 代表i-j这个范围 项的内容是 true 和 false 去判断他是不是一个回文子串
dp[i][j] = dp[i+1][j-1] && str[i] === str[j];

初始值： 当i === j 时具有初始值
*/

    var longestPalindrome = function(s) {
      const arr = [];
      // 填充初始值
      for(let i=0; i<s.length; i++){
        arr.push(new Array(s.length).fill(false, 0,s.length))
        arr[i][i] = true
      }

      for(let i=s.length-1 ; i>=0; i--){
        for(let j= i; j >= 0; j--){
          arr[i][j] =( arr[i+1][j -1] || j -i >2) && s[i] == s[j];
        }
      }

      console.log(arr)

    };


/*
  中心扩散法01 枚举所有可能的回文子串的中心位置，需要考虑奇偶性
*/

    /* 这里的maxLength使用的是那个整个字符串的长度 */
    const getMaxLength = (s, index01, index02) => {
        
      let count = 0;
      let left = index01;
      let right = index02;
      while(left >=0 && right< s.length && s[left] === s[right]){
          if(left === right){
              count++;
          }
          else  count = count + 2;
            left--;
            right++;
          
        } 


      return (count );
    }

    // TODO这个方法通过了 一半， 主要是如果直接字符串长度会出现bb这种双字符串的问题，需要思考一下为什么
    var longestPalindrome = function(s) {
      if(!s) return;
      
      let maxLength = 0, maxIndex = 0;

      const length = s.length;
      
      for(let i=0; i<length; i++){

          const temp01 = getMaxLength(s,i,i);
          const temp02 = getMaxLength(s,i, i+1)

          
          const temp  = Math.max(temp01, temp02)
          if(maxLength < temp){
              
              console.log("temp02",temp)
              console.log("i:",i, "temp", Math.floor(temp/2))
              maxIndex =  i - Math.floor(temp/2);   // 回文子串的启始位置 把奇偶字符串都搞出来你就知道了
              /*   这种写法会导致一种双字符串的问题   */
              if(i - Math.floor(temp/2) <= 0){
                  maxIndex = i;
              }
              maxLength= temp;
          }

      }

      console.log(maxIndex, maxLength)
      return s.slice(maxIndex,maxIndex+ maxLength); //这里需要加个1因为slice这个api 是截取最后一项前面的
    };


/*
  中心扩散法02  这里直接使用中心扩散的数值（就是扩展的值）去做
*/

    var longestPalindrome = function(s) {

      if(!s) return;
      const getMaxLengthExpand = (s, left, right) => {
        let count = 0;
        while(s[left] === s[right]){
          right++;
          left--;
          count++;
        }

        if(count >0){
          return (count -1 ) * 2;
        };
  
        return count;
      }
      let biggistLen = 0, start = 0;

      for(let i=0; i<s.length; i++){

        const value01 = getMaxLengthExpand(s, i, i);
        const value02 = getMaxLengthExpand(s, i, i+1);

        const max = Math.max(value01, value02);

        if(max> biggistLen){
          biggistLen = max;
          start =  i - max/2
        }
      }

      return s.substring(start, start+ biggistLen)
      };

