/*
leetCode 160  相交链表

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 *方法一使用哈希表 时间复杂度m+n
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let pointA = headA;
    let pointB = headB;
    let isSamePoint = false;
    let set =new Set();
    while(pointA){
     set.add(pointA);
     pointA = pointA.next;
    }

    while(pointB){
        if(set.has(pointB))
        return pointB;
        pointB = pointB.next;
    }
    return null
};



/**
 * 第二种思路 a+c=b= b+c+a
 * 如果不相交为null，则都为null
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    
     if (headA == null || headB == null) {
            return null;
        }
    let pointA = headA;
    let pointB = headB;
   
   
   

    while(pointA != pointB){
        // TODO:不知道为啥如果反向思维去写就无法通过
        // if(pointA == pointB) return pointA;

        // if(!pointB ) pointB = headA;
        // if(!pointA ) pointA = headB;

        // pointB = pointB.next;
        // pointA = pointA.next;
        pointB =pointB == null ? headA : pointB.next;
        pointA = pointA == null ? headB : pointA.next;
        
    }
    return pointA
};