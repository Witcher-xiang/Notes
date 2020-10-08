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
        p = tempNode.right; // 其实他左边已经遍历OK，我们取出中间的记录，再去遍历右边即可
    }

    return arr;
};

 /*
 * 后序遍历
 * 
 * */
    /* 递归版本*/
    var postorderTraversal = function(root) {
        if(!root) return [];
        
        const arr = [];
        const fn = (tree) => {
            if(tree.left) fn(tree.left);
            if(tree.right) fn(tree.right);
            arr.push(tree.val);
        }
        fn(root);
    
        return arr;
    };

 /* 这个非递归很难 多去理解理解    */
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
// 使用数组index的方式
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

 // 不使用数组索引的方式
 var levelOrder = function(root) {
    if(!root) return [];
    
     let res = [];
     let queeue = [];
     queeue.push(root);
     while(queeue.length){
       let count = queeue.length, newArr = [];
       while(count > 0){
         let tempNode = queeue.shift(); 
        newArr.push(tempNode.val)
         if(tempNode.left) queeue.push(tempNode.left);
         if(tempNode.right) queeue.push(tempNode.right);
  
         count--;
       }
       res.push(newArr);
     }
  
     return res;
  };

  /*    二叉树锯齿形层次遍历    
    先从左往右，再从右往左
  */
 var zigzagLevelOrder = function(root) {
    if(!root) return [];

    let queeue = [], res = [], mode = "left";
    queeue.push(root);

    while(queeue.length){
        let count = queeue.length;
        let newArr = []
        while(count--){
            let tempNode = queeue.shift();
            newArr.push(tempNode.val)
         if(tempNode.left) queeue.push(tempNode.left);
         if(tempNode.right) queeue.push(tempNode.right);
        }

        if(mode === "left") mode = "right";
        else if(mode === "right") {
            newArr.reverse()
            mode = "left";
        }
        res.push(newArr)
    }

    return res;
};

/*
    二叉树的右视图（使用BFS会好做很多）：， 从顶部到底部 只返回右侧能看到的值（也就是队列最后一项）*/
    var rightSideView = function(root) {
        if(!root) return [];

        let res = [], queeue = [];
        let levle = 0;
        queeue.push(root);
        while(queeue.length){
            let count = queeue.length;
            res.push(queeue[queeue.length -1].val); // 返回最后一项
    
            while(count--){
                let tempNode = queeue.shift();
                if(tempNode.left) queeue.push(tempNode.left);
                if(tempNode.right) queeue.push(tempNode.right);
            };
            levle++
        }
    
        return res;
    };