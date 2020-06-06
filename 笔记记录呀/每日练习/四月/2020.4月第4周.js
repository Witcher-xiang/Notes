
/*2020.4.23*/
//做一道动态规划
/*
* 类型：动态规划
* leetCode 72号问题-编辑距离-hard
* 问题描述

    给定两个单词 word1 和 word2，计算出将 word1 转换成 word2 所使用的最少操作数 。

    你可以对一个单词进行如下三种操作：

    插入一个字符 删除一个字符 替换一个字符


    示例：
        输入: word1 = "horse", word2 = "ros"
        输出: 3
        解释:
        horse -> rorse (将 'h' 替换为 'r')
        rorse -> rose (删除 'r')
        rose -> ros (删除 'e')
* */
function fn(word1,word2) {
    if(word1 == word2){
        return 0;
    }
    let dp = [],m = word1.length, n = word2.length;
    /*我定义二维数组他的每一项代表当字符串word1的字符长度为i，
    word2的字符串长度为j时的最小操作数，为dp[i][j]
    简单的说就是dp[i][j]可以理解为：我已经word1长度为i的字符串转化为了
    word2将长度为j的字符串所需要的数量
    举个例子
    dp[i-1][j-1] 还是拿horse和ros举例子
    此时i=5 j=3
    放到dp[i-1][j-1]中即
    我已经将hors 转化成了-> ro ，dp[i-1][j-1]就是我存的这个转化过程的数量
    因为 i=5-1  j=3-1
    * */
    /*
    * 找出数组元素之间的关系式:三种情况
    * （1）上一次操作为删除操作
    * dp[i][j] = dp[i-1][j] + 1
    * 如果是i=5，j=3 可以将看作dp[i-1][j] word1的前四项都已经被改好了
    * 即：horse ->rose -> ros
    *
    *  (2) 因此表示替换操作
    * dp[i][j] = dp[i-1][j-1] + 1
    * 即也就是将i即horse的第五项e，修改为ros的第3项s
    *
    *  (3) 上一次为一次新增操作
    * dp[i][j] = dp[i][j-1] + 1
    * 即 dp[i-1][j] 指的是还是以i=5 j=3
    * dp[5-1][3] 即前四项已经被修改 horse -》ro 在插入一个s即可  ros
    * [j-1]那一项代表已经被转化完成的部分
    *
    * 写出关系式 利用Math.min 看哪次的操作次数最小
    *   dp[i][j] = Math.min(dp[i][j-1],dp[i-1][j-1],dp[i-1][j])+1
    * */

    /*
    * 写初始值
    *   第一行和第一列都为0，因为允许存在0，0情况
    * 即：dp[0][j]和dp[i][0]
    * */
    console.log(m,"m")
    for (let i =0;i<m;i++){
        dp.push([]);
        dp[i][0] = i
    }
    console.log(dp)
    for (let i =0;i<n;i++){
        dp[0][i] = i;
    }

    for (let i = 1;i<word1.length;i++){
        for (let j=1;j<word2.length;j++){
            //不要忘记考虑两个字母相等的情况
            if (word1[i] == word2[j])
                dp[i][j] = dp[i-1][j-1];
            else
                dp[i][j] = Math.min(dp[i][j-1],dp[i-1][j-1],dp[i-1][j])+1
        }
    }
    return dp[m-1][n-1]
}


/*4.24
* 1、股票问题：
* leetCode：121号问题
*
* 个人思路（超级暴力）
* （1）先做个排序取出最小值，然后根据这个值找到这个数组的索引index
* （2）index === length ? return 0 : 截取新数组let ary = arr.slice(index)
* （3）再排序取出最大值，return即可
*  好吧这个思路有问题，没有考虑到之前即使不是最小的数也赚钱的问题，leetCode官方题解
*  的第二钟方法 也是如此表述，是有问题的，但是他的代码应该是没有问题的
*
*
*
* */
/*那就思路二——动态规划(如下)*/
function maxProfitDp(prices) {
    /*首先定义数组
    * dp[i] 是第i天的最大利润
    * */
    if(prices.length <= 1)
        return 0;
    let dp = new Array(prices.length),
        small = prices[0]; //最小购买价格

    /*
    * 写状态方程
    * 呕吼这次卡在这里了，这么简单的都卡住了！辣鸡
    * dp[i] = Math.max(dp[i-1],price[i]-min)
    * 前一天的最大利润和今天的股票价格-过去最小买入做一个比较
    * */

    /*
    *初始化值，这里的话可以第一天肯定是0，同时他是最小价格
    * */
    dp.fill(0);
    for (let i=1;i<prices.length;i++){
        dp[i] = Math.max(dp[i-1],prices[i] - small);
        small = Math.min(prices[i],small)
    }

    return Math.max(...dp)
}
console.log(maxProfitDp([7,1,5,3,6,4]));

//简单解法（一次遍历）
/*
* 定义两个变量max和min
* max指当前的最大利润，
* min是指最小
* min是从0~i-1项中取出的最小值，然后
* Math.max(max,price[0]-min)
* */
function maxProfitEasy(prices){
    let max =0,min = prices[0]
    for (let i=1;i<prices.length;i++){
        max = Math.max(prices[i]-min,max)
        min = Math.min(min,prices[0])
    }
    return max
}

//暴力解法
/*
* 做一个嵌套循环，让当前项，去和他前面的项相减
* 外设一个变量max 让他去挨个比较替换，最后输出这个max即可
* */
function maxProfitViolence(prices){
    // 偷懒懒得写了
}

/*2、最大子序和
* leetCode 53号问题
* https://leetcode-cn.com/problems/maximum-subarray/
* 个人思路：
*   1、分治利用类似快排的思想
*   2、动态规划
* */
var maxSubArray = function(nums) {
    let dp = new Array(nums.length)
    let result = [],max = 0;
    nums.forEach(item=>{
        let temp = item + max;
        if (temp>max){
            max = temp
            result.push(item)
        }
    })
    return result
    /*
    * dp[i]在为i项时的最大连续子数组的最大和
    * */

    /*
    * 状态转换方程：
    *  dp[i] = Math(dp[i-1],dp[i])
    * */
};

/*
* 额外知识：
*  数字==字符串
* 结果：字符串-》数字
*
*  boolean == 数字
* boolean -》数字
*
* 对象 == 基本类型
* 对象.valueOf否则调用.toString方法
*
* 对象 == 布尔值
*
* */

