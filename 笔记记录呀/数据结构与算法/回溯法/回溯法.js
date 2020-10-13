  // 回溯法记录1: 当时4月份
  /*
   * 回溯法是一种暴力解法
   * 当我们不知道n是不是一个固定值的时候，我们就可以使用这种及其暴力的方法
   * 就是没法固定循环次数，循环次数未知
   * */
   /*
   要点：

   * 例题 给出一个数字字符串，返回这个字符串能表示的所有字母组合
   * 比如一个 九键的键盘
   * */
  function letterComb(digits) {
    if (digits.length === 0) return [];
    let res =[];
    const arrString = [" ","","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"]
    let strArr = digits.split("");

    // 大佬说：看起来难 但其实非常简单？？？

    //str存储的是之前的字符串（比如第二次寻找，则你找的就是第一次）
    // index 是数字字符串的索引
    // digitsArr 被转换为数组的数字字符串
    let fn =(digitsArr,index=0,str = "")=>{
        if (index === digits.length){
            res.push(str)
            return
        }
        let  c= digitsArr[index]; // 当前的数字字符串
        let str01 = arrString[c-0]; // 对应的字母是
         for (let i = 0;i<str01.length;i++){
             fn(digitsArr,index+1,str+str01[i])
         }
          return;
     }
     fn(strArr);
    return res
}

/*
    二次感受回溯 2020.10
    推荐文章：https://zhuanlan.zhihu.com/p/93530380
    回溯问题基本都是一个套路：

    解决一个回溯问题，实际上就是一个决策树的遍历过程 考虑以下三个方向：

    决策树： 拿全排列举例 我们对全排列进行枚举 这样他的种种可能即构成了一棵决策树

    （1）路径： 也就是已经做出的选择（即已经遍历过的位置 他是一个数组）
    （2）选择列表：也就是你当前可以做的选择（接下来可以遍历哪些分支）
    （3）结束条件：也就是到达决策树底层（遍历到树到底层，此时选择列表为空）

    回溯法框架：
    let result = [];
    function backtrack(路径，选择列表){
        if(满足结束条件){
            result.push(路径)
            return
        }

        (for 选择 in 选择列表){
            #做选择
                将该选择从选择列表移除
                路径.push(选择)
            backtrack(路径, 选择列表)
            #撤销选择
                路径.remove(选择)

        }
    }

    其核心就是 for 循环里面的递归，在递归调用之前「做选择」，在递归调用之后「撤销选择」
    简单来说即上面所说的树的遍历（多分支树的遍历），

    一般树的遍历调用的模版
    const traverse = (node) => {
        for(let child in node.childrens){
            // 这里前序遍历搞事情（前序是进入时的时机在搞事情）
            traverse(child)
            // 这里后序遍历搞事情（后序则是离开的时候在弄他的心态，因为搞的是中间节点所以可以这么弄）
        }
    }
*/
// 字符串的全排列： https://leetcode-cn.com/problems/permutations/ 给定一个 没有重复 数字的序列，返回其所有可能的全排列。

/*
    解题思路：
    一般回溯法三个部分构成：即多叉树的遍历问题
    （1）结束条件
    （2）已经走过的路径
    （3）剩余可以选择或者决策的列表
*/
var permute = function(nums) {
    let result = [];
    const fn = (road, choseList)=> {
        const track = [...road]
        if(choseList.length === 0) {
            result.push(track);
            return;
        }

        for(const key in choseList){
            const newArr = [...choseList];
            newArr.splice(key, 1)
            track.push(choseList[key]);
            fn(track,newArr);
            track.pop();    // 记得做过选择的路径需要取出来
        }
    }
    fn([],nums)

    return result;
};
 

/* 全排列问题2:如果有重复项 我们需要去掉重复项目 
    首先需要对数组做一个排序
    他重复的原因是 决策树的 同一层或者某枝条上使用过了两次，一样的数字选择了两遍导致了这个问题 因此我们直接可以在for循环中添加条件
*/
var permuteUnique = function(nums) {
    let result = [];

    // choseList默认都是有序的了
    const fn = (road, choseList)=> {
        const track = [...road]
        if(choseList.length === 0) {
            result.push(track);
            return;
        }

        // 我们需要做一个剪枝操作
        for(const key in choseList){
            if(key > 0 && (choseList[key] === choseList[key-1])) continue

            const newArr = [...choseList];
            newArr.splice(key, 1)
            track.push(choseList[key]);
            fn(track,newArr);
            track.pop();    // 记得做过选择的路径需要取出来
        }
    }

    nums.sort((x,y) => x - y);
    fn([],nums);

    return result;
};

/* 组合总合 
leetcode 40 
https://leetcode-cn.com/problems/combination-sum-ii/
*/
var combinationSum2 = function(candidates, target) {
    let result = [];
    let set = new Set();
    const fn = (track, choseList, sum, start = 0) => { // 这里我没懂为撒大家都要加个指针进来 按照我写的构型不需要加指针， 如果你不做那个删除的操作 那是需要加指针的，因为每次传入都是一整个数组 挺抓的
        if(sum > target) return
        
        if(sum === target){
            const temp = track.slice().sort((a,b) => a - b).join(".");  // 这是一种非常新奇的思路 将数组用做字符串存储起来 利用set来去重，有用但是不高效
            console.log(sum,temp)
                if(!set.has(temp)) {
                    result.push([...track]);
                    set.add(temp)
                } // 这里额外需要注意一下 有时会出现添加后result出现奇怪情况的时候
                
            return
        }

        const newTrack = [...track];

        for(let key= 0;  key<choseList.length; key++){
            if(key >0 && choseList[key -1] === choseList[key]){
                continue;
            }

            const newArr = [...choseList];
            newArr.splice(key, 1);
            newTrack.push(choseList[key])
            
            fn(newTrack,newArr, sum + choseList[key], key + 1)
            newTrack.pop();
        }
    }

    candidates.sort((a,b) => a-b)
    
    fn([],candidates, 0, 0)

    return result;
};

console.log(combinationSum2([10,1,2,7,6,1,5], 8))