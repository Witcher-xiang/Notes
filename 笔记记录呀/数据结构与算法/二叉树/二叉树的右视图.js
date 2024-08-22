/**
 * LeetCode 236（二叉树的最近公共祖先）
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 // 这题其实就是一个后续遍历，当左右子树都有东西的时候则返回上一级
 var lowestCommonAncestor = function(root, p, q) {
    const dfs = (node,p,q)=>{
        if(node === null || node ===p || node === q){
            return node;
        }
        const left = dfs(node.left , p ,q)
        const right = dfs(node.right,p,q)
        // 对于某一侧有内容的情况，就返回这一侧的内容因为可能包裹在下方
        if(left && right) return node;
        return left ?? right
    }

    return dfs(root,p,q)
};