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
    （2）反项指针开始推进
    （2）当正指针到头时，此时反向指针到达倒数第k项
*/