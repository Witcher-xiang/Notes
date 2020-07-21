/*
重温知乎的动态规划
https://zhuanlan.zhihu.com/p/91582909

常用三步走：
（1）定义数组含义
（2）找出数组之间的关系式子（即最优子结构）
（3）找出初始值
找到初始值后你就可以列出一个完整的表达式了
*/

/*
复习题目一：简单的动态规划 🐸跳台阶，
问题描述：一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法
*/

/* 此为非优化版本 */
const jumpLevel = (n) => {
    let arr = [];
    arr[n] = arr[n-1] + arr[n-2] ;
    arr[0] = 0;
    arr[1] = 1;
    arr[2] = 2;

    for(let i =3;i<=n;i++){
        arr[i] = arr[i-1]+ arr[i-2]
    }

    return arr[n]
}

/*
复习题目二： 中等难度的动态规划 🤖走格子
一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。

问总共有多少条不同的路径？
*/
const walkCell = (m,n) => {
    let arr = []; arr[m][0]
    let i = 0;
    while(m--){
        arr.push([i])
        i++;
    }
    i = 0;
    while(n--){
        arr[0].push(i)
        i++;
    }
    
    for(let i=1; i<m;i++){
        for(let j =1; j<n; j++){
            arr[i][j] = arr[i][j-1] + arr[i-1][j]
        }
    }
   return arr[m-1][n-1];
}   

/*
写到这里我有一个疑问如何快速生成二维数组 个人感觉就是双重循环好像没啥特别的
*/

/*
最小路径之和
给定一个包含非负整数的 m x n 网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

说明：每次只能向下或者向右移动一步。
*/
const smallRoad = (m,n) => {
    let arr = []
    while(m--){
        arr.push([])
        while(n--){

        }
    }
}

/*
动态规划优化从m*n的复杂度变成O(n)
*/