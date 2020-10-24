/*
    实现一下二叉树的镜像
    剑指offer 27题
*/

// 用递归去做一个实习
var mirrorTree = function(root) {
    let node = new TreeNode(null);
    node.next = root;
    let p = node.next;
    if(!root) return root

    const mirror = (node) => {
        if(!node) return

        let temp = node.right;
        node.right = node.left;
        node.left = temp;

        mirror(node.left);
        mirror(node.right);

        return node;
    }

    return mirror(root)
};