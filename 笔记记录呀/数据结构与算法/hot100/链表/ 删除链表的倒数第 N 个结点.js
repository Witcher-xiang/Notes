/*
 19.删除链表的倒数第 N 个结点，并且返回链表的头节点
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    const tail = new ListNode();
    tail.next = head;
    let p = head;
};

// 反转链表
const reverseList = (head) => {

    let prev = null;
    let curr = head;
    while (curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    return prev
}

// 利用双指针，注意我们需要额外声明一个dummy，用来处理可能是头节点的情况
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {

    const guard = new ListNode();
    guard.next = head;
    let left = guard;
    let right = guard;

    while (n--) {
        right = right.next;


    }


    while (right.next) {
        left = left.next
        right = right.next;
    }
    left.next = left.next.next;
    return guard.next;
};