/**
 * leetCode offer  68
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 平衡二叉树～
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    const rootVal = root.val,
          pVal = p.val,
          qVal = q.val;

    if((rootVal > pVal && rootVal < qVal) || (rootVal < pVal && rootVal > qVal))
    return root;

    if(rootVal < pVal && rootVal < qVal){
        return lowestCommonAncestor(root.right,p,q)
    }

      if(rootVal > pVal && rootVal > qVal){
        return lowestCommonAncestor(root.left,p,q)
    }

    return root;
};


/**
 * 非平衡二叉树
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {

    const fn = (root,p,q) => {
        if(root == null) return root;
        // 左子树
        const left = fn(root.left,p,q)
        // 右子树
        const right = fn(root.right,p,q)

        if((right && left) || (root.val == p.val || root.val == q.val)){
            return root;
        }

        return (left || right) || (root.val == p.val || root.val == q.val)
        
    }
    
}