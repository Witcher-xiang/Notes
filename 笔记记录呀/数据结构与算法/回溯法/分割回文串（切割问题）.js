/**
 * leetCodee 131题
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const res= [], path  = [];
    const backTracking = (startIndex) => {
        if(startIndex >= s.length) {
            res.push([...path])
            return
        };

        for(let i = startIndex ; i < s.length; i++){
            const str = s.substring(startIndex,i + 1);
            //  不是回文串就跳过之后的回溯
            if(!isPali(str,0,str.length -1)) continue;
            path.push(str)
            backTracking(i +1);
            path.pop()
        }
    }
    backTracking(0);

    return res;
};

function isPali(s, l, r) {
    while (l < r) {
        if (s[l] != s[r]) {
            return false;
        }
        l++;
        r--;
    }
    return true;
}
