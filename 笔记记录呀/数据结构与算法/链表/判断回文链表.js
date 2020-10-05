/*
    判断回文链表
    思路： 即利用调用栈左右同时导出
*/

/*
    一般思路
    
*/
var isPalindrome = function(head) {
    let stack = [];
    if(head ===null) return true;
    while(head){
        stack.push(head.val)
        head = head.next;
    }
   
    while(stack.length > 1){  // 注意单个字符也算做回文
        let first = stack.shift();
        let tail = stack.pop();

        if(first !== tail) return false
    }

    return true;
};

/*
    双指针法
    大概思路：快慢指针，当快指针走完 说明慢指针已经走到了一半，此时反转慢指针 另一个继续走 两边同时判断是不是相等，就可以判断出 是否是回文字串

    PS： 这里就现=先不写，感觉这个知道思路其实就可以了，有空可以补充一项
*/
var isPalindrome = function(head) {

}