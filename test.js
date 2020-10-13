// // //  跑逐行读取-赛马网考试

// // const fs = require('fs');
// // const readline = require('readline');
// // let line = null

// // const rl = readline.createInterface({
// //   input: fs.createReadStream('sample.txt'),
// //   crlfDelay: Infinity
// // });

// // rl.on('line', (line = read_line) => {
// //   console.log(`文件中的每一行: ${line}`);
// //   console.log(readline)
// // });


// // // Javascript
// // var N, M;
// // // 每组第一行是2个整数，N和M，至于为啥用while，因为是多组。
// // while ((N=readInt()) != null && (M=readInt()) != null) {
// //   print (N + ' ' + M);
// //   // 循环读取“接下来的M行”
// //   for (let i=0; i<M; i++) {
// //     let a = readInt();
// //     let b = readInt();
// //     let c = readInt();
// //     // 每行是3个整数，a，b，c。
// //     print(a + ' ' + b + ' ' + c);
// //   }
// //   // M行读取完了，就又要开始下一组了，去while那里。
// // }

// // let line;
// // while(line = read_line){
// //   let arr = line.split(' ')
// // }

// /*

// 逆序五进制
// 时间限制： 3000MS 
// 内存限制： 589824KB
// 题目描述：
// 编写一个程序，首先将一个十进制正整数逆序【需要去掉前导0】，然后转换成五进制正整数，最后输出该五进制正整数。



// 输入描述
// 单组输入。

// 每组测试数据的输入占一行，输入一个十进制正整数n。 （n<=100000）

// 输出描述
// 每组测试数据的输出占一行，输出转换后所得的五进制正整数。


// 样例输入
// 1000
// 样例输出
// 1

// 提示
// 样例2：
// 输入：
// 77267

// 输出：
// 4420102


// */

// // const loseZero = (value) => {
// //   let tempStr = '', headStatus = true;

// //   for(let i = 0; i < value.length;i++ ){
// //     let item = value[i];
// //     if(item == 0 && headStatus) continue;
// //     headStatus = false;
// //     tempStr = tempStr + item;
// //   }

// //   return tempStr;
// // }

// // let str = '1000'
// // // let str;
// // // while ((str=readInt()) != null) {
// //   let result, reserve = '';
// //   // 反转
// //   for(let i = str.length; i--; i < 0){
// //     reserve =reserve + str[i];
// //     console.log(reserve)
// //   }
// //   // 去0
// //   result = loseZero(reserve);


// //   // return (result - 0).toString(5)
// // //}

// // console.log("reserve",result,(result - 0).toString(5))


// /*
//  let str;
//   const loseZero = (value) => {
//       let tempStr = '', headStatus = true;

//       for(let i = 0; i < value.length;i++ ){
//         let item = value[i];
//         if(item == 0 && headStatus) continue;
//         headStatus = false;
//         tempStr = tempStr + item;
//   }
  
//   return tempStr;
// }

//  while ((str=readInt()) != null) {
//   let result, reserve = '';
//       str = str + '';

//   // 反转
//   for(let i = str.length; i--; i < 0){
//     reserve =reserve + str[i];
//   } 
//   // 去0
//   result = loseZero(reserve);
//  // 转进制 
//     print((result - 0).toString(5))
// }

// */


// // let str = '1 1 3';
// // let arr = str.split(' ');
// // let result = [];
// // let operateType = arr[0],
// //     index = arr[1],
// //     addNum = arr[2];

// //     if(operateType == 1 && index && addNum){
// //       result.splice(index-1, 0, addNum)
// //     }
// //     if(operateType == 2 && index){
// //       result.splice(index, 1)
// //     }
// //     if(operateType == 3){
// //       result.forEach(item => print(item));
// //     }

// //     console.log("result",result)


// // var N, M, K;
// // // 每组第一行是2个整数，N和M，至于为啥用while，因为是多组。
// // while ((N=readInt()) != null && (M=readInt()) != null && (K=readInt()) != null) {
// //   // 循环读取“接下来的M行”
// //   for (let i=0; i<M; i++) {
// //     let a = readInt();
// //     let b = readInt();
// //     let c = readInt();
// //     // 每行是3个整数，a，b，c。
// //     print(a + ' ' + b + ' ' + c);
// //   }
// //   // M行读取完了，就又要开始下一组了，去while那里。
// // }


// // let line, count = 0, total = 0, totalNum =0, limit = 0, numArr = [];
// // while(line = read_line){
// //   let arr = line.split(' ');
// //   if(count > 0){
// //     if(limit <= count){
// //       count = 1;
// //       total= 0;
// //       numArr = [];
// //     }
// //     if(count === 1){
// //       total = arr[2];
// //       limit = arr[0];
// //     }

// //     count++;
// //   }
// // }

// // let a = "213234";

// // let obj = {
// //   a:1
// // }

// // function fn(arg01, arg02){
// //   console.log("a:",this.a, arg01, arg02)
// // }

// // fn.bind(obj)("123","213");

// // Function.prototype.myBind = function(context,...arg01){
// //   const fn = this;

// //   return function(...arg02){
// //     return fn.apply(context,[...arg01, ...arg02])
// //   }
// // }
// /*
//   模拟实现一个new
// */

// // function mockNew(obj, ...arg){
// //   const newObj = new Object();
// //   const result =  obj.call(newObj,...arg);

// //   newObj.__proto__ = Object.create(obj.pototype);

// //   if( typeof result === "object") return result;
// //   return newObj;
// // }


// // console.log(typeof function a(){})

// // let obj = {
// //   name:"NB啊王宇翔",
// //   val: "WYX🐂比啊",
// //   obj :{
// //     te:"te ",
// //   }
// // }

// // let  test = obj;
// // test.p = "ppp";
// // test.obj.obj = "4343"
// // console.log(obj)

// /*二叉树的各种遍历*/

// /*前序*/

//   /* 递归版本： */
//   var preorderTraversal = function(root) {
//     const arr = [];
//     const fn = (node) => {
//         if(!node) return null;
//         arr.push(node.val);
//         if(node.left)   fn(node.left);
//         if(node.right)  fn(node.right);
//         };
    
//         fn(root)
//         return arr;
//     };

//     /* 迭代版本： 感觉要用到栈结构(这里的迭代是三种遍历最简单的一种)*/ 
//     var preorderTraversal = function(root) {
//       if(!root) return [];

//         let stack = [];
//         let arr = [];

//         stack.push(root);
//         while(stack.length > 0){
//           let node = stack.pop();
//           arr.push(node.val);
//           if(node.right) stack.push(node.right); //注意：右孩子先进入
//           if(node.left)  stack.push(node.left);
//         }

//         return arr;
//       };

// /* 中序 */
//       /*  递归版本： */
//       var inorderTraversal = function(root) {
//         const arr = [];
//         const fn =(node) => {
//           if(!node) return null;
//           if(node.left) fn(node.left);
//           arr.push(node.val);
//           if(node.right) fn(node.right);
//         };
//         fn(root);

//         return arr;
//       };

//       /*  非递归版本  */
// function inorder(root) {//中序非递归   BST第K小的数   第K大见下面
//    if (!root) return null;
//     var stack = [];
//     var p = root;
//     //var pre=-Infinity;
//     while (stack.length > 0 || p) {
//         if (p) { //当前非空，当前入栈，左移
//             stack.push(p);
//             p = p.left;
//         } else { //栈弹出，并右移
//             p = stack.pop();
//             console.log(p.value);//在此和前一个数比较 判断是否为二叉搜索树 
//             p = p.right;
//         }
//     }
// }

//       var inorderTraversal = function(root) {
//         let arr =[], stack = [];
//         stack.push(root);

//         while(stack.length){
//           const temp = stack.pop();

//           if(temp.left) stack.push(temp.left);
//           if(temp.right) stack.push(temp.right);
//         }
//       };

// /* 二叉树中序遍历非递归,也是利用栈 */

// const fn = (tree) => {
//   let arr = [], res = [];
//   let p = tree;

//   while( arr.length || p){
//     while(p){
//       arr.push(p.left);
//       p = p.left
//     };
//     let temp = arr.pop();
//     res.push(temp.val);
//     p = temp.right;
//   }

//    return res;
// }
// /* 二叉树的广度优先遍历——利用队列 */
// var levelOrder = function(root) {
//   if(!root) return [];
  
//    let res = [];
//    let queeue = [];
//    queeue.push(root);
//    while(queeue.length){
//      let count = queeue.length, newArr = [];
//      while(count > 0){
//        let tempNode = queeue.shift(); 
//       newArr.push(tempNode.val)
//        if(tempNode.left) queeue.push(tempNode.left);
//        if(tempNode.right) queeue.push(tempNode.right);

//        count--;
//      }
//      res.push(newArr);
//    }

//    return res;
// };

// // 删除链表倒数的节点
// const removeNthFromEnd = function(head, n){
//   let node = new ListNode(0);
//   node.next = head;
//   let first = node.next;
//   let second = node.next;

// }

// Function.prototype.myBind = function(that,...params01) {
//     const fn = this;
//     return function (...params02) {
//         return fn.call(that,[...params01,...params02])
//     }
// }

// // 构造单例模式
// function proxySingal(obj, ...params) {
//     let instance = null;

//     return (function name() {
//       if(!instance) return new obj(params) 
//       return instance;
//     })()
// }


// const judge = (arr, nums) => {
//     arr.forEach( (item,index) => {
//         item.forEach( (item01,index) =>{
//             if(item01 === nums){
//                 index === 0 ? defaultNum = 0 : defaultNum =1;
//             }
//         })
//     })
// }

// // 有点难 是真点有的难
// const fn = (NNnum, arr) => {
//     let defaultNum = 0;
//     const result = [];

//     arr.forEach(element => {
//         element.forEach( (item,index) =>{
//             if(item === NNnum){
//                 index === 0 ? defaultNum = 0 : defaultNum =1;
//             }
//         })
//     });

//     arr.forEach( (item,index) =>{
//         result.push(index + defaultNum + 1)
//     })

//     return result
// }

// // console.log(fn(4,[[1,2],[2,3],[4,3]]))


// // 牛牛搞硬币
// const getBiggist = (n, p, arr2N) => {
//     const bigP = p, smallP = 1 - p;
//     const getSingleHope = (arr) => (Math.max(...arr) * bigP + Math.min(...arr) * smallP );

//     const result = [];
//     const fn = (arr, res) => {
//         if(arr.length < 2) return;

//         for(let i=0; i<arr.length; i++){
//             const newArr = [...arr]
//             for(let j= i +1; j<arr.length; j++){
//                 res.push([newArr[i],newArr[j]])
//                 newArr.splice(i,1);
//                 newArr.splice(j,1);
//                 fn(newArr,res)
//             }
//         }
//         result.push(res);
//     }

//     fn(arr2N,[])

//     return result;
// }

//console.log(getBiggist(1,0,[1,3,3,2,2,3]))


var permute = function(nums) {
    let result = [];
    const fn = (road, choseList)=> {
        const track = [...road]
        if(choseList.length === 0) {
            result.push(track);
            return;
        }

        for(const key in choseList){
            const newArr = [...choseList];
            newArr.splice(key, 1)
            track.push(choseList[key]);
            fn(track,newArr);
            track.pop()
        }
    }
    fn([],nums)

    return result;
};

console.log(permute([1,2,3]))