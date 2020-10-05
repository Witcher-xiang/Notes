 /*先序遍历*/
 /* 递归版本：*/
 let arr = []
 function fronSearach(node) {
     if (node){
         arr.push(node.val)
         fronSearach(node.left)
         fronSearach(node.right)
     }
 }
 /* 迭代版本： 感觉要用到栈结构(这里的迭代是三种遍历最简单的一种)*/ 
 var preorderTraversal = function(root) {
    if(!root) return [];

      let stack = [];
      let arr = [];

      stack.push(root);
      while(stack.length > 0){
        let node = stack.pop();
        arr.push(node.val);
        if(node.right) stack.push(node.right); //注意：右孩子先进入因为他最后出
        if(node.left)  stack.push(node.left);
      }

      return arr;
    };

 /*中序遍历*/
 var inorderTraversal = function(root) {
    const arr = [];
    const fn =(node) => {
      if(!node) return null;
      if(node.left) fn(node.left);
      arr.push(node.val);
      if(node.right) fn(node.right);
    };
    fn(root);

    return arr;
  };

 /*非递归 需要一个哨兵元素来判断，是否当前左边已经为空，如果是空的话则说明可以弹出*/
 var inorderTraversal = function(node) {
    if (!node) return [];
    let stack = [],arr = []; // 注意中序遍历不需要提前塞一个元素进去
    let p = node;
    while (stack.length || p){ // p存在或者 stack 不为空就可以继续循环
       while(p){
           stack.push(p);
           p = p.left;
       }
       let tempNode = stack.pop();
       arr.push(tempNode.val);
        p = tempNode.right;
    }

    return arr;
};

 /*
 * 后序遍历
 * 这个非递归很难 多去理解理解
 * */
 function behindOrder(root) {
     if (!root) return [];
     let arr = [] , stack = [];
     let visited = new Set();
     let p = root
     while (stack.length || p){
         /*用来控制访问左边*/
         while (p){
             stack.push(p)
             p = p.left;
         }
         /*
         * 到达最下边的左节点以后
         * */
         let node = stack[stack.length - 1];
         // 如果右孩子存在，且右孩子未被访问
         if (node.right && !visited.has(node.right)){
             p = node.right;
             visited.add(node.right)
         }else {
             arr.push(node.val)
             stack.pop()
         }
     }
     return arr
 }

 /*
 * 二叉树的层序遍历
 * 利用队列的方式
 * */
 function levelOrder (root) {
     if(!root) return [];
     let queue = [];
     let res = [];
     let level = 0;
     queue.push(root)
     while (queue.length){
         res.push([])
         let size = queue.length;// 固定一个当时的值
         while (size--){
             let font = queue.shift()
             res[level].push(font);
             if (font.left) queue.push(font.left)
             if (font.right) queue.push(font.right)
         }
         level ++
     }
     return res
 }