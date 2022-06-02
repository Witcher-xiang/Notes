/**
 * leetCode 93题 还原IP地址 切割问题
 * 唯一感觉比较重要的或者需要和组合问题区分的，就是需要怎么切割字符串
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    const res = [],path = [];
    const backTracking = (startIndex) => {
        if(path.length > 4 ) return;
        
        if(path.length == 4 && startIndex == s.length){
            res.push(path.join("."));
            return;
        }
        if(startIndex > s.length) return;
        

        for(let i = 1;  i< s.length; i++ ){ // 这里建议改为i<=3
            const item = s.slice(startIndex,startIndex+i);
            
            if(item.length > 3 || item - 0 > 255) break;
            if(item.length > 1 && item[0] == "0") break;
            
            path.push(item);
            backTracking(startIndex+i);
            path.pop();
        }

    }

    backTracking(0)

    return res;
};