var deleteNode = function(head, val) {
    let pre = new ListNode(0); // 额外添加头节点 哨兵节点 考虑要删除的节点在第一个
    pre.next = head;

    let node = pre;
    while (node.next) {
        if (node.next.val === val) {
            node.next = node.next.next;
            break;
        }
        node = node.next;
    }
    return pre.next;
};

/*
 重要一点的是他哨兵节点的思路，哨兵节点可以减少你边界问题的考虑
*/

const deleteNode = (head, val)  => {
    let node = new ListNode(0);
    node.next = head;
    let pre = node.next;

    while(pre.next){
        let curr = pre.next;
        if(curr.val === val){
            curr = curr.next;
        }
        pre = curr;
    }

    return node.next;
}