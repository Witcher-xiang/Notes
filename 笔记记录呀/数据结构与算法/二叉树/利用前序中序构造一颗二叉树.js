/*
    leetCode 105号问题
    

中左右
左中右
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

function TreeNode(val) {
         this.val = val;
         this.left = this.right = null;
     }
     /*
        我看输出答案都一样也通不过 不过思路相同 都是利用截取
        优化思路也很简单： 就是将边界值向下传递，因为我们每次只用到头部的代码 所以就向下窜即可
     */
     var buildTree = function(preorder, inorder) {
        const root = new TreeNode(null);
        
        
        const fn = (preArr, inArr, tree) => {
           
           if(!preArr[0]) return null;
        
           const centerItem = preArr[0];
           const pIndex = inArr.indexOf(centerItem);
        
               tree = new TreeNode(centerItem)
           
        
           const inLeftTreeFirst = 0;
           const inLeftTreeLast = pIndex -1 +1; // +1 是因为slice截取问题
           const inRightTreeFirst = pIndex +1;
           const inRightTreeLast = inArr.lenght;
           
           const preLeftTreeFirst = 1;
           const preLeftTreeLast =  1+ inLeftTreeLast ;
           const preRightTreeFirst =  pIndex + 1;
           const preRightTreeLast = preArr.lenght;
           // 左子树
           tree.left = fn(preArr.slice(preLeftTreeFirst, preLeftTreeLast),inArr.slice(inLeftTreeFirst, inLeftTreeLast))
        
           // 右子树
           tree.right = fn(preArr.slice(preRightTreeFirst, preRightTreeLast), inArr.slice(inRightTreeFirst, inRightTreeLast))
           
           return tree
        }
        
        return fn(preorder, inorder, null)
        
         
        }

const pre = [3,9,20,15,7]
const middle = [9,3,15,20,7]

console.log(buildTree(pre,middle))


/* 能通过的代码*/

var buildTree = function (preorder, inorder) {
    if (!preorder.length) return null
    var node = new TreeNode(preorder[0])
    var index = inorder.indexOf(preorder[0])
    node.left = buildTree(preorder.slice(1, index + 1), inorder.slice(0, index))
    node.right = buildTree(preorder.slice(index + 1), inorder.slice(index + 1))
    return node
  };