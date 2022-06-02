/**
 * leetCode 77 组合 最初级的回溯法，可以进行剪枝（但是减枝很难想到）
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const res = [],temp = [];
    const backTracking = (start) => {
        if(temp.length == k) {
            res.push([...temp])
            return
        };
        if(start > n) {
            return
        };
        
        
        for(let i = start; i <= n  ; i++){
            temp.push(i);
            backTracking(i + 1)
            temp.pop();
        }
    }
    backTracking(1);

    return res;
};

/*
    字符串的排列组合，悦孚斯科技一面
    给你 abcdef 请你排列出他的所有组合方法

    思路：和之前的数组组合不同，因为需要过滤掉自己的组合，所以需要一个选择Arr，帮你判断当前这个是不是要跳过
*/
var combineStr = function(str) {
    const res = [], stack = [];
    const backTracking = (str,isNeedJumpArr) => {
        if(stack.length == str.length){
            res.push(stack.join(''));
            return;
        }

        for(let i = 0; i < str.length; i++){
            if(isNeedJumpArr[i] ) continue;
            stack.push(str[i]);
            isNeedJumpArr[i] = true;
            backTracking(str,isNeedJumpArr);
            stack.pop();
            isNeedJumpArr[i] = false;;
        }
    }
    backTracking(str,[])

    return res;
}
console.log(combineStr())