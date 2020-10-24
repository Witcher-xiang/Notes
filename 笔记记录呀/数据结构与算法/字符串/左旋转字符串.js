/*
    剑指offer58 左旋转字符串

*/

var reverseLeftWords = function(s, n) {
    const str01 = s.substring(0,n);
    const str02 = s.substring(n)

    return str02 + str01
};

console.log(reverseLeftWords("abcdefg",2))

