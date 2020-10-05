// 正项 删除链表某一项
var removeNthFromStart = function(head, n) {
    let count  =0;
    let node = new ListNode(0);
    node.next = head;
   let pre = node;
   let curr = node.next;


   while(curr){
       count++;
       if(count === n){
           pre.next = pre.next.next;
       }

       pre = curr;
       curr = curr.next;
   }

   return node.next;
};

// 倒数第k个
/*
    双指针法：
    （1）正项指针先开始跑 跑到第k项目
    （2）正项第二指针开始推进
    （2）当正指针到头时，此时正向第二指针到达倒数第k项， 二者相距k-1个节点
*/

var removeNthFromEnd = function(head, n) {
    let node = new ListNode(0);
    node.next = head;
    let start01 = node.next, start02 = node.next;
    let count = 0, prev = node;

    while(start01){
        if(count >= n){
            prev = start02
            start02 = start02.next;
        }
        count++;
        start01 = start01.next;
    };

    prev.next = prev.next.next;
    
    return node.next;
};