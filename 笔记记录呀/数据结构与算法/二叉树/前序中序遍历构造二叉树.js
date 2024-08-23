// LeetCode 105
// 从前序与中便利构造二叉树

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 * 
 * 需要注意的是前序遍历第一个就是中心节点，由此我们就可以拆分出一些子问题
 */
var buildTree = function (preorder, inorder) {

    const dfs = (preorder, inorder) => {
       if( inorder.length === 0 || preorder.lenght ==0)return

        const inMidIndex = inorder.indexOf(preorder[0]);
        

        const inLeftList = inorder.slice(0, inMidIndex)
        const inRightList = inorder.slice(inMidIndex + 1)
        const preLeftList = preorder.slice(1, inMidIndex + 1)
        const preRightList = preorder.slice(inMidIndex + 1)

        
        const left = dfs(preLeftList,inLeftList)
        const right = dfs(preRightList,inRightList)


        return new TreeNode(preorder[0],left,right)
    }

    return dfs(preorder, inorder)
};