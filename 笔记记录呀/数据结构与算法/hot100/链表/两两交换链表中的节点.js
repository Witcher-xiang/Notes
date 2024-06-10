/** LeetCode 23
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let l1 = head;
    if(!l1) return l1;
    let l2 = head.next;
    if(!l2) return l1;
    
    let prev = new ListNode();
    
    let dummy = new ListNode()
    dummy.next =prev;

    while(l1 != null & l2 != null){
        
        let next = l2.next;
        prev.next = l2;
        
        l2.next = l1;  
        l1.next  = next; 
        prev = l1;
        
        l1 = next;
         if(next) l2 = next.next;
    }

    
    

    return dummy.next.next;
};