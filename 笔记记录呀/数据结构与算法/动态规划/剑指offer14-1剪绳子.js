/*
    这个动态规划让我有点略微顶不住
*/
var cuttingRope = function(n) {
    let count = 2;
    const dp = new Array(n).fill(-Infinity); // i所代表的含义为 分成第i段时 arr[i]能拿到的最大乘积

    dp[0] = 0; // 初始化 当 n = 0 时即绳子不分段
    dp[1] = 0 ;    // 当分成一段时 还是n当长度
    /*
    状态转移方程：
        最优子结构
        当i>=2时 假设对正正整数i拆分出的第一个正整数是j(1<=j<=i)
        (1)将i拆分成 j 和 i-j的和，且i-j不再拆分成多个正整数，此时的乘积为 j x (i - j);
        (2)将i拆分成j和i-j的和，且i - j 继续拆分成多个正整数 此时的乘积是 j x dp[i-j];
    */

    while(n >= count){
        
        /*
            他这个循环很特别的
            dp[count] = dp[count-i] * i; //这个能想到 i是减去的绳子长度
            dp[count] = i*(count - i) // 这个我就不明白了 感觉可以 仿佛是有必要 但仅仅是仿佛并不是很确定
        */
        for(let i =1; i<=count; i++){
            dp[count] =  Math.max(dp[i], dp[count - i] * i, i * (count - i))
        }

        count++;
    }

    console.log("dp:",dp)
    return dp[n];
};

console.log(cuttingRope(10))