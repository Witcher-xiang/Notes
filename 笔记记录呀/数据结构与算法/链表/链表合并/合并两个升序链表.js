/*
    合并两个升序链表
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

 /*
    非递归：非优化的写法
 */
const mergeTwoLists = (p1, p2) => {
    let node = new ListNode(0);
        let pre = node

        while(p1 || p2){

            if(!p1){
                pre.next = p2;
                p2 = p2.next;
                pre = pre.next;
                continue;
            }
            if(!p2){
                pre.next = p1;
                p1 = p1.next;
                pre = pre.next;
                continue;
            }

            if(p1.val > p2.val){
                pre.next = p2;;
                p2 = p2.next
            }
            else{
               pre.next = p1;
               p1 = p1.next;
            }

            pre = pre.next;
        }

        return node.next;
}

/*
    非递归：优化写法
*/


/*
    递归
*/

function Merge(pHead1, pHead2) {//方法1：递归法  
    let pMergeHead = null;
    if (pHead1 === null) return pHead2;
    if (pHead2 === null) return pHead1;
    if (pHead1.val < pHead2.val) {
        pMergeHead = pHead1;
        pMergeHead.next = Merge(pHead1.next, pHead2);
    } else {
        pMergeHead = pHead2;
        pMergeHead.next = Merge(pHead1, pHead2.next);
    }
    return pMergeHead;
}

const mergeList = (p1, p2) => {
    let mergeHead = null;
    if(p1 === null) return p2;
    if(p2 === null) return p1;

    if(p1.val > p2.val){
        mergeHead = p1;
        mergeHead.next = mergeList(p1.next, p2);
    }
    else if(p1.val <= p2.val){
        mergeHead = p2;
        mergeHead.next = mergeList(p1, p2.next)
    }
    
    return mergeHead;
}