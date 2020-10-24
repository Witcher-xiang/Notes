/*
    验证二叉搜索树

    给定一个二叉树，判断其是否是一个有效的二叉搜索树。

假设一个二叉搜索树具有如下特征：

节点的左子树只包含小于当前节点的数。
节点的右子树只包含大于当前节点的数。
所有左子树和右子树自身必须也是二叉搜索树。

*/
 function TreeNode(val) {
         this.val = val;
         this.left = this.right = null;
     }

const tree = {
    val:"2",
    left: new TreeNode("1"),
    right: new TreeNode("6"),
}

tree.right.left = new TreeNode("3")


// 先用递归尝试一下 左小右大

/*
    这里稍微注意一下， 如果你遇到 因为节点不存在导致的问题，不妨考虑用参数来传递  这样就可以避免js单一获取的问题
*/
var isValidBST = function(root,lower, higher) {
    if(!root) return true;

    if( (root.val <= lower.val) || (root.val >= higher.val)  ) return false // 注意！！
    
    else {
        return isValidBST(root.left,lower,root) && isValidBST(root.right,root,higher)
        /*
        我这里理解有一个误区： 就是认为直接传递lower 会出现问题，结果是二叉搜索树必须满足下面的两个条件， 左边的节点只能更小 右边的只能更大
        节点的左子树只包含小于当前节点的数。
        节点的右子树只包含大于当前节点的
    */
    }
};

console.log(isValidBST(tree,-Infinity, Infinity))