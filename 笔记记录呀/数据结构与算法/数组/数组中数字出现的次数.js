/*
剑指 Offer 56 - I. 数组中数字出现的次数

一个整型数组 nums 里除两个数字之外，其他数字都出现了两次。请写程序找出这两个只出现一次的数字。要求时间复杂度是O(n)，空间复杂度是O(1)。

我日 这个题要求时间复杂度了 就尼玛 离谱


往异或方向考虑 相异为true， 向同为false


这个题目很有意思

（1）异或和他本身异或 为0
（2）和0异或 则为他的自身
（3）最重要：他满足交换律 所以如果题目是 其他两个数都出现了两次，只有一个数 出现了一次 那我们就可以用这个方法来搞定 具体这个交换律可以参考leetCode 136题


思路：
分为两个区间 我们可以直接通过数字的奇偶去区分，但是问题 如何去区分 两个单一数字 去进那个组呢？ 同样也是做异或操作，我们就能知道他的哪一位不同 根据这一位把他们加入不同的组即可
*/

/*
    其实没有按照奇偶去做分组 而是按照位数去做的分组
*/
var singleNumbers = function(nums) {
    let temp = 0, a=0 ,b=0;
    // 这个temp是在寻找 位数不一样的地方
    for(const item of nums){
        temp = temp ^ item;
    }
    let mask = 1;
    // 然后我们取出一位位数不一样的就可以了 可以在草稿纸上写一下 如果为0的为证明 这位是相同的
    while((mask & temp) == 0){ // 注意这里要打括号啊
        mask <<=1
    };
  
    // 然后我们根据位数相同与否 分为两组 一直做异或运算即可
    for(const item of nums){
        if((item & mask)){
            a = item ^ a;
        }
        else{
            b = item ^ b;
        }
    }
  
    return [a,b]
  };

console.log(singleNumbers([4,1,4,6]))