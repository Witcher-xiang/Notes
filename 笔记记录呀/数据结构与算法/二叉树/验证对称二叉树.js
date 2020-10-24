// 验证对称二叉树（注意是镜像对称） leetCode 101号问题 我现在已经知道 这种简单的二叉树的题目 我已经可以拿下了

// 递归
var isSymmetric = function(root) {
    
    const judge = (left, right) => {
        if(!left && !right) return true;

        if(left.val === right.val){
            return judge(left.left,right.right) && judge(left.right, right.left)
        }else{
            return false;
        }

        return true;
    }

    return judge(root.left, root.right)
};

// 迭代 感觉得用到个队列啥的

var isSymmetric = function(root) {
    let queeue = [];
    while(queeue.length){
        let start = queeue.shift();
        let end = queeue.pop();
        
    }
};