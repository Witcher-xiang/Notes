/**
 * leetCode 25. K 个一组翻转链表
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    let count = 0,headA = head, headB = head;
    const reversAB = (a,b) => {
        let last = null;
        let p = a,start = a;
        while(p!=b){
        
        const next = p.next;
        p.next = last;
        last = p;
        p = next;
        }
    
        return last;
    }
    
    for(let i= count; i < count + k; i++){
        if(headB == null) return head
        headB = headB.next;
    }
    
    let newHead = reversAB(headA,headB);
    // headA已经变结尾了，所以应该在这里next，headB变成下一项变成开头 
   headA.next = reverseKGroup(headB,k);
    return newHead;
};