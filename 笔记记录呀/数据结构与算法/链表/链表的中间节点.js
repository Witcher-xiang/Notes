/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * 这个就是一个快慢指针的问题
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let quick = head, slow = head;
    while(quick && quick.next){
        quick = quick.next;
        if(!quick) break;
        quick = quick.next;
        slow = slow.next;
    }

    return slow;
};