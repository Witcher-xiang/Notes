/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number[][]}
 */
var pathSum = function(root, target) {
    const finalArr = [];
    const stack = [];
    let sum = 0;

    stack.push(root);
   
    const dfs = (root,path,sum) => {
        if(!root) return null
        path.push(root.val)
        sum = sum + root.val
        if(root.left == null && root.right == null && target == sum) finalArr.push(path.slice())
         dfs(root.left,path.slice(),sum)
         dfs(root.right,path.slice(),sum)     
        
    }
    dfs(root,[],0)
    console.log(finalArr)
    return finalArr;
};