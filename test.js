// // // // // // // //  跑逐行读取-赛马网考试

// // // // // // // const fs = require('fs');
// // // // // // // const readline = require('readline');
// // // // // // // let line = null

// // // // // // // const rl = readline.createInterface({
// // // // // // //   input: fs.createReadStream('sample.txt'),
// // // // // // //   crlfDelay: Infinity
// // // // // // // });

// // // // // // // rl.on('line', (line = read_line) => {
// // // // // // //   console.log(`文件中的每一行: ${line}`);
// // // // // // //   console.log(readline)
// // // // // // // });


// // // // // // // // Javascript
// // // // // // // var N, M;
// // // // // // // // 每组第一行是2个整数，N和M，至于为啥用while，因为是多组。
// // // // // // // while ((N=readInt()) != null && (M=readInt()) != null) {
// // // // // // //   print (N + ' ' + M);
// // // // // // //   // 循环读取“接下来的M行”
// // // // // // //   for (let i=0; i<M; i++) {
// // // // // // //     let a = readInt();
// // // // // // //     let b = readInt();
// // // // // // //     let c = readInt();
// // // // // // //     // 每行是3个整数，a，b，c。
// // // // // // //     print(a + ' ' + b + ' ' + c);
// // // // // // //   }
// // // // // // //   // M行读取完了，就又要开始下一组了，去while那里。
// // // // // // // }

// // // // // // // let line;
// // // // // // // while(line = read_line){
// // // // // // //   let arr = line.split(' ')
// // // // // // // }

// // // // // // /*

// // // // // // 逆序五进制
// // // // // // 时间限制： 3000MS 
// // // // // // 内存限制： 589824KB
// // // // // // 题目描述：
// // // // // // 编写一个程序，首先将一个十进制正整数逆序【需要去掉前导0】，然后转换成五进制正整数，最后输出该五进制正整数。



// // // // // // 输入描述
// // // // // // 单组输入。

// // // // // // 每组测试数据的输入占一行，输入一个十进制正整数n。 （n<=100000）

// // // // // // 输出描述
// // // // // // 每组测试数据的输出占一行，输出转换后所得的五进制正整数。


// // // // // // 样例输入
// // // // // // 1000
// // // // // // 样例输出
// // // // // // 1

// // // // // // 提示
// // // // // // 样例2：
// // // // // // 输入：
// // // // // // 77267

// // // // // // 输出：
// // // // // // 4420102


// // // // // // */

// // // // // // // const loseZero = (value) => {
// // // // // // //   let tempStr = '', headStatus = true;

// // // // // // //   for(let i = 0; i < value.length;i++ ){
// // // // // // //     let item = value[i];
// // // // // // //     if(item == 0 && headStatus) continue;
// // // // // // //     headStatus = false;
// // // // // // //     tempStr = tempStr + item;
// // // // // // //   }

// // // // // // //   return tempStr;
// // // // // // // }

// // // // // // // let str = '1000'
// // // // // // // // let str;
// // // // // // // // while ((str=readInt()) != null) {
// // // // // // //   let result, reserve = '';
// // // // // // //   // 反转
// // // // // // //   for(let i = str.length; i--; i < 0){
// // // // // // //     reserve =reserve + str[i];
// // // // // // //     console.log(reserve)
// // // // // // //   }
// // // // // // //   // 去0
// // // // // // //   result = loseZero(reserve);


// // // // // // //   // return (result - 0).toString(5)
// // // // // // // //}

// // // // // // // console.log("reserve",result,(result - 0).toString(5))


// // // // // // /*
// // // // // //  let str;
// // // // // //   const loseZero = (value) => {
// // // // // //       let tempStr = '', headStatus = true;

// // // // // //       for(let i = 0; i < value.length;i++ ){
// // // // // //         let item = value[i];
// // // // // //         if(item == 0 && headStatus) continue;
// // // // // //         headStatus = false;
// // // // // //         tempStr = tempStr + item;
// // // // // //   }

// // // // // //   return tempStr;
// // // // // // }

// // // // // //  while ((str=readInt()) != null) {
// // // // // //   let result, reserve = '';
// // // // // //       str = str + '';

// // // // // //   // 反转
// // // // // //   for(let i = str.length; i--; i < 0){
// // // // // //     reserve =reserve + str[i];
// // // // // //   } 
// // // // // //   // 去0
// // // // // //   result = loseZero(reserve);
// // // // // //  // 转进制 
// // // // // //     print((result - 0).toString(5))
// // // // // // }

// // // // // // */


// // // // // // // let str = '1 1 3';
// // // // // // // let arr = str.split(' ');
// // // // // // // let result = [];
// // // // // // // let operateType = arr[0],
// // // // // // //     index = arr[1],
// // // // // // //     addNum = arr[2];

// // // // // // //     if(operateType == 1 && index && addNum){
// // // // // // //       result.splice(index-1, 0, addNum)
// // // // // // //     }
// // // // // // //     if(operateType == 2 && index){
// // // // // // //       result.splice(index, 1)
// // // // // // //     }
// // // // // // //     if(operateType == 3){
// // // // // // //       result.forEach(item => print(item));
// // // // // // //     }

// // // // // // //     console.log("result",result)


// // // // // // // var N, M, K;
// // // // // // // // 每组第一行是2个整数，N和M，至于为啥用while，因为是多组。
// // // // // // // while ((N=readInt()) != null && (M=readInt()) != null && (K=readInt()) != null) {
// // // // // // //   // 循环读取“接下来的M行”
// // // // // // //   for (let i=0; i<M; i++) {
// // // // // // //     let a = readInt();
// // // // // // //     let b = readInt();
// // // // // // //     let c = readInt();
// // // // // // //     // 每行是3个整数，a，b，c。
// // // // // // //     print(a + ' ' + b + ' ' + c);
// // // // // // //   }
// // // // // // //   // M行读取完了，就又要开始下一组了，去while那里。
// // // // // // // }


// // // // // // // let line, count = 0, total = 0, totalNum =0, limit = 0, numArr = [];
// // // // // // // while(line = read_line){
// // // // // // //   let arr = line.split(' ');
// // // // // // //   if(count > 0){
// // // // // // //     if(limit <= count){
// // // // // // //       count = 1;
// // // // // // //       total= 0;
// // // // // // //       numArr = [];
// // // // // // //     }
// // // // // // //     if(count === 1){
// // // // // // //       total = arr[2];
// // // // // // //       limit = arr[0];
// // // // // // //     }

// // // // // // //     count++;
// // // // // // //   }
// // // // // // // }

// // // // // // // let a = "213234";

// // // // // // // let obj = {
// // // // // // //   a:1
// // // // // // // }

// // // // // // // function fn(arg01, arg02){
// // // // // // //   console.log("a:",this.a, arg01, arg02)
// // // // // // // }

// // // // // // // fn.bind(obj)("123","213");

// // // // // // // Function.prototype.myBind = function(context,...arg01){
// // // // // // //   const fn = this;

// // // // // // //   return function(...arg02){
// // // // // // //     return fn.apply(context,[...arg01, ...arg02])
// // // // // // //   }
// // // // // // // }
// // // // // // /*
// // // // // //   模拟实现一个new
// // // // // // */

// // // // // // // function mockNew(obj, ...arg){
// // // // // // //   const newObj = new Object();
// // // // // // //   const result =  obj.call(newObj,...arg);

// // // // // // //   newObj.__proto__ = Object.create(obj.pototype);

// // // // // // //   if( typeof result === "object") return result;
// // // // // // //   return newObj;
// // // // // // // }


// // // // // // // console.log(typeof function a(){})

// // // // // // // let obj = {
// // // // // // //   name:"NB啊王宇翔",
// // // // // // //   val: "WYX🐂比啊",
// // // // // // //   obj :{
// // // // // // //     te:"te ",
// // // // // // //   }
// // // // // // // }

// // // // // // // let  test = obj;
// // // // // // // test.p = "ppp";
// // // // // // // test.obj.obj = "4343"
// // // // // // // console.log(obj)

// // // // // // /*二叉树的各种遍历*/

// // // // // // /*前序*/

// // // // // //   /* 递归版本： */
// // // // // //   var preorderTraversal = function(root) {
// // // // // //     const arr = [];
// // // // // //     const fn = (node) => {
// // // // // //         if(!node) return null;
// // // // // //         arr.push(node.val);
// // // // // //         if(node.left)   fn(node.left);
// // // // // //         if(node.right)  fn(node.right);
// // // // // //         };

// // // // // //         fn(root)
// // // // // //         return arr;
// // // // // //     };

// // // // // //     /* 迭代版本： 感觉要用到栈结构(这里的迭代是三种遍历最简单的一种)*/ 
// // // // // //     var preorderTraversal = function(root) {
// // // // // //       if(!root) return [];

// // // // // //         let stack = [];
// // // // // //         let arr = [];

// // // // // //         stack.push(root);
// // // // // //         while(stack.length > 0){
// // // // // //           let node = stack.pop();
// // // // // //           arr.push(node.val);
// // // // // //           if(node.right) stack.push(node.right); //注意：右孩子先进入
// // // // // //           if(node.left)  stack.push(node.left);
// // // // // //         }

// // // // // //         return arr;
// // // // // //       };

// // // // // // /* 中序 */
// // // // // //       /*  递归版本： */
// // // // // //       var inorderTraversal = function(root) {
// // // // // //         const arr = [];
// // // // // //         const fn =(node) => {
// // // // // //           if(!node) return null;
// // // // // //           if(node.left) fn(node.left);
// // // // // //           arr.push(node.val);
// // // // // //           if(node.right) fn(node.right);
// // // // // //         };
// // // // // //         fn(root);

// // // // // //         return arr;
// // // // // //       };

// // // // // //       /*  非递归版本  */
// // // // // // function inorder(root) {//中序非递归   BST第K小的数   第K大见下面
// // // // // //    if (!root) return null;
// // // // // //     var stack = [];
// // // // // //     var p = root;
// // // // // //     //var pre=-Infinity;
// // // // // //     while (stack.length > 0 || p) {
// // // // // //         if (p) { //当前非空，当前入栈，左移
// // // // // //             stack.push(p);
// // // // // //             p = p.left;
// // // // // //         } else { //栈弹出，并右移
// // // // // //             p = stack.pop();
// // // // // //             console.log(p.value);//在此和前一个数比较 判断是否为二叉搜索树 
// // // // // //             p = p.right;
// // // // // //         }
// // // // // //     }
// // // // // // }

// // // // // //       var inorderTraversal = function(root) {
// // // // // //         let arr =[], stack = [];
// // // // // //         stack.push(root);

// // // // // //         while(stack.length){
// // // // // //           const temp = stack.pop();

// // // // // //           if(temp.left) stack.push(temp.left);
// // // // // //           if(temp.right) stack.push(temp.right);
// // // // // //         }
// // // // // //       };

// // // // // // /* 二叉树中序遍历非递归,也是利用栈 */

// // // // // // const fn = (tree) => {
// // // // // //   let arr = [], res = [];
// // // // // //   let p = tree;

// // // // // //   while( arr.length || p){
// // // // // //     while(p){
// // // // // //       arr.push(p.left);
// // // // // //       p = p.left
// // // // // //     };
// // // // // //     let temp = arr.pop();
// // // // // //     res.push(temp.val);
// // // // // //     p = temp.right;
// // // // // //   }

// // // // // //    return res;
// // // // // // }
// // // // // // /* 二叉树的广度优先遍历——利用队列 */
// // // // // // var levelOrder = function(root) {
// // // // // //   if(!root) return [];

// // // // // //    let res = [];
// // // // // //    let queeue = [];
// // // // // //    queeue.push(root);
// // // // // //    while(queeue.length){
// // // // // //      let count = queeue.length, newArr = [];
// // // // // //      while(count > 0){
// // // // // //        let tempNode = queeue.shift(); 
// // // // // //       newArr.push(tempNode.val)
// // // // // //        if(tempNode.left) queeue.push(tempNode.left);
// // // // // //        if(tempNode.right) queeue.push(tempNode.right);

// // // // // //        count--;
// // // // // //      }
// // // // // //      res.push(newArr);
// // // // // //    }

// // // // // //    return res;
// // // // // // };

// // // // // // // 删除链表倒数的节点
// // // // // // const removeNthFromEnd = function(head, n){
// // // // // //   let node = new ListNode(0);
// // // // // //   node.next = head;
// // // // // //   let first = node.next;
// // // // // //   let second = node.next;

// // // // // // }

// // // // // // Function.prototype.myBind = function(that,...params01) {
// // // // // //     const fn = this;
// // // // // //     return function (...params02) {
// // // // // //         return fn.call(that,[...params01,...params02])
// // // // // //     }
// // // // // // }

// // // // // // // 构造单例模式
// // // // // // function proxySingal(obj, ...params) {
// // // // // //     let instance = null;

// // // // // //     return (function name() {
// // // // // //       if(!instance) return new obj(params) 
// // // // // //       return instance;
// // // // // //     })()
// // // // // // }


// // // // // // const judge = (arr, nums) => {
// // // // // //     arr.forEach( (item,index) => {
// // // // // //         item.forEach( (item01,index) =>{
// // // // // //             if(item01 === nums){
// // // // // //                 index === 0 ? defaultNum = 0 : defaultNum =1;
// // // // // //             }
// // // // // //         })
// // // // // //     })
// // // // // // }

// // // // // // // 有点难 是真点有的难
// // // // // // const fn = (NNnum, arr) => {
// // // // // //     let defaultNum = 0;
// // // // // //     const result = [];

// // // // // //     arr.forEach(element => {
// // // // // //         element.forEach( (item,index) =>{
// // // // // //             if(item === NNnum){
// // // // // //                 index === 0 ? defaultNum = 0 : defaultNum =1;
// // // // // //             }
// // // // // //         })
// // // // // //     });

// // // // // //     arr.forEach( (item,index) =>{
// // // // // //         result.push(index + defaultNum + 1)
// // // // // //     })

// // // // // //     return result
// // // // // // }

// // // // // // // console.log(fn(4,[[1,2],[2,3],[4,3]]))


// // // // // // // 牛牛搞硬币
// // // // // // const getBiggist = (n, p, arr2N) => {
// // // // // //     const bigP = p, smallP = 1 - p;
// // // // // //     const getSingleHope = (arr) => (Math.max(...arr) * bigP + Math.min(...arr) * smallP );

// // // // // //     const result = [];
// // // // // //     const fn = (arr, res) => {
// // // // // //         if(arr.length < 2) return;

// // // // // //         for(let i=0; i<arr.length; i++){
// // // // // //             const newArr = [...arr]
// // // // // //             for(let j= i +1; j<arr.length; j++){
// // // // // //                 res.push([newArr[i],newArr[j]])
// // // // // //                 newArr.splice(i,1);
// // // // // //                 newArr.splice(j,1);
// // // // // //                 fn(newArr,res)
// // // // // //             }
// // // // // //         }
// // // // // //         result.push(res);
// // // // // //     }

// // // // // //     fn(arr2N,[])

// // // // // //     return result;
// // // // // // }

// // // // // //console.log(getBiggist(1,0,[1,3,3,2,2,3]))

// // // // // /*
// // // // //     js每隔一秒打印一个数
// // // // // */
// // // // // // var arr = []
// // // // // //     var output = (i) => new Promise(res => {
// // // // // //       setTimeout(()=>{
// // // // // //         console.log(i)
// // // // // //         res()
// // // // // //       }, 1000*i)
// // // // // //     })

// // // // // //     for (var i=0; i<5; i++) {
// // // // // //       arr.push(output(i))
// // // // // //     }

// // // // // //     Promise.all(arr)

// // // // // // const arr = []
// // // // // // const fn = (val) => {
// // // // // //     return new Promise(resolve => {
// // // // // //         setTimeout( () =>{
// // // // // //             resolve()
// // // // // //             console.log(val)
// // // // // //         }, val * 1000)
// // // // // //     })
// // // // // // }

// // // // // // for(let i=0; i<5; i++){
// // // // // //     arr.push(fn(i))
// // // // // // }


// // // // // // /*   使用async和await实现   */

// // // // // // // const sleep = (val) => new Promise( resolve => {
// // // // // // //     setTimeout(() => {
// // // // // // //         resolve(val)
// // // // // // //     }, 1000)    
// // // // // // // })
// // // // // // // (async function(){
// // // // // // //     for(let i = 0; i<5; i++){
// // // // // // //         console.log(await sleep(i))
// // // // // // //     }
// // // // // // // }())

// // // // // // const fun = () => new Promise(resolve => {
// // // // // //     setTimeout(() => resolve(), 1000)
// // // // // // })

// // // // // // (async function(){
// // // // // //     for(let i= 0; i<5; i++){
// // // // // //         await fun()
// // // // // //         console.log(i);
// // // // // //         console.log("i:")
// // // // // //     }
// // // // // // }())

// // // // // // 实现一个promise
// // // // // class myPromise01 {
// // // // //     constructor(excutor) {
// // // // //         this.state = "pending";
// // // // //         this.value = null;
// // // // //         this.failedReason = null;
// // // // //         this.success = [];
// // // // //         this.failed = [];
// // // // //         try {
// // // // //             excutor(this.resolve, this.reject)
// // // // //         } catch (err) {
// // // // //             this.failedReason = err;
// // // // //         }

// // // // //     }

// // // // //     resolve = (res) => {
// // // // //         this.value = res;
// // // // //         setTimeout(() => this.success.forEach(fn => fn(res)), 0)
// // // // //     }

// // // // //     reject = (err) => {
// // // // //         setTimeout(() => this.failed.forEach(fn => fn(err)), 0)
// // // // //     }
// // // // // }

// // // // // myPromise01.prototype.then = function (cb) {
// // // // //     return new myPromise((resolve, reject) => {
// // // // //         this.success.push((vale) => {
// // // // //             const result = cb(vale);
// // // // //             resolve(result);
// // // // //         });
// // // // //     })
// // // // // }

// // // // // // 利用状态机去实现一个promise
// // // // // class myPromise02 {
// // // // //     constructor(excutor) {
// // // // //         this.state = "pending";
// // // // //         this.value = null;
// // // // //         this.err = null;
// // // // //         this.success = [];
// // // // //         this.failed = [];
// // // // //         excutor(this.resolve, this.reject)
// // // // //     }
// // // // //     resolve = (res) => {
// // // // //         this.value = res;

// // // // //         if (this.state === "pending") {
// // // // //             this.state = "fulilled";
// // // // //         }

// // // // //         // 这里才是防止异步的情况
// // // // //         if (this.state === "fulilled") {
// // // // //             this.success.forEach(fn => {
// // // // //                 fn(this.value)
// // // // //             })
// // // // //         }

// // // // //     }
// // // // //     reject = (err) => {
// // // // //         if (this.state === "reject") {
// // // // //             this.err = err;
// // // // //             this.failed.forEach(fn => fn(this.err))
// // // // //         }

// // // // //         if (this.state === "pending") {
// // // // //             this.state = "reject";
// // // // //         }
// // // // //     }


// // // // // }

// // // // // myPromise02.prototype.then = function (cb) {
// // // // //     return new myPromise02(resolve => {

// // // // //         // 如果异步的话则直接添加进来
// // // // //         this.success.push(() => {
// // // // //             const result = cb(this.value);
// // // // //             resolve(result)
// // // // //         })
// // // // //         // 非异步
// // // // //         if (this.state == "fulilled") {
// // // // //             this.success.forEach(fn => {
// // // // //                 fn(this.value)
// // // // //             })
// // // // //         }

// // // // //     })
// // // // // }
// // // // // new myPromise02((resolve, reject) => {

// // // // //         setTimeout(() => resolve("这个答案很special"), 1000)


// // // // //     })
// // // // //     .then(res => {
// // // // //         console.log("我拿到了第一个答案", res);
// // // // //         return "super special offer"
// // // // //     })
// // // // // //  .then( res => {console.log("我拿到了第二个答案",res)})


// // // // function TreeNode(val) {
// // // //     this.val = val;
// // // //     this.left = this.right = null;
// // // // }
// // // // var buildTree = function(preorder, inorder) {
// // // // const root = new TreeNode(null);


// // // // const fn = (preArr, inArr, tree) => {
   
// // // //    if(!preArr[0] || inArr.lenght === 0) return;

// // // //    const centerItem = preArr[0];
// // // //    const pIndex = inArr.indexOf(centerItem);
// // // //    if(tree === null){
// // // //        tree = new TreeNode(centerItem)
// // // //    }

// // // //    const inLeftTreeFirst = 0;
// // // //    const inLeftTreeLast = pIndex -1 +1; // +1 是因为slice截取问题
// // // //    const inRightTreeFirst = pIndex +1;
// // // //    const inRightTreeLast = inArr.lenght;
   
// // // //    const preLeftTreeFirst = 1;
// // // //    const preLeftTreeLast = preLeftTreeFirst + inLeftTreeLast - inLeftTreeFirst;
// // // //    const preRightTreeFirst =  pIndex + 1;
// // // //    const preRightTreeLast = preArr.lenght;
// // // //    // 左子树
// // // //    fn(preArr.slice(preLeftTreeFirst, preLeftTreeLast),inArr.slice(inLeftTreeFirst, inLeftTreeLast) ,tree.left)

// // // //    // 右子树
// // // //    fn(preArr.slice(preRightTreeFirst, preRightTreeLast), inArr.slice(inRightTreeFirst, inRightTreeLast),tree.right)
   
// // // // }
// // // // fn(preorder, inorder, root)

// // // // return root;
// // // // }

// // // // const pre = [3,9,20,15,7]
// // // // const middle = [9,3,15,20,7]

// // // // console.log(buildTree(pre,middle))

// // // // 每月少一天
// // // let str = "2020 8 10 3 2020 8 11";
// // // const getThisYearDays = thisYear => {
// // //     if( thisYear%4 === 0){
// // //         return 354
// // //     }
// // //     return 453
// // // }

// // // const getTodayOfThisYear = (year, month, days) => {
// // //     let res  = 0;
// // //     const months ={
// // //         1: 30,
// // //         2: year%4 === 0 ? 28 :27,
// // //         3: 30,
// // //         4: 29,
// // //         5: 30,
// // //         6: 29,
// // //         7: 30,
// // //         8: 30,
// // //         9: 29,
// // //         10: 30,
// // //         11: 29,
// // //         12: 30,
// // //     }

// // //     const arr = Object.keys(months);

// // //     for(let i =0; i<arr.length; i++ ){
// // //         const key = i +1;
// // //         if( month === key) {
// // //             return res + (days - 0)
// // //         };
// // //         res= res + months[key];
// // //     }
// // // }

// // // const deal = (week , howFar) => {
// // //     let temp = howFar%7;
// // //     if((temp + week) > 7) return (temp+ week) -7;
// // //     else {
// // //         return temp + week
// // //     }
// // // }

// // // const fn = (year,month, days, sunDays, hopeYear, hopeMonth, hopeDay) => {
// // //     const wholeYear = 365  - 12;
// // //     if(year === hopeYear){
// // //         return deal(sunDays
// // //             ,Math.abs(getTodayOfThisYear(year, month, days) - getTodayOfThisYear(hopeYear, hopeMonth, hopeDay))
// // //             )
// // //         }

// // //         const currRestDays = getThisYearDays(year) - getTodayOfThisYear(year, month, days);
// // //         if(Math.abs(year -hopeYear) ===1){
// // //             console.log(sunDays,
// // //                 currRestDays + getTodayOfThisYear(hopeYear, hopeMonth, hopeDay))
// // //             deal(sunDays,
// // //                 currRestDays + getTodayOfThisYear(hopeYear, hopeMonth, hopeDay))
// // //         }

    

// // //     let min = Math.min(year, hopeYear)+1 , max = Math.max(year, hopeYear), sum = 0;
// // //     while(max > min){
// // //         sum = getThisYearDays(min);
// // //         console.log("sum:",sum)
// // //         min++
// // //     };
   
// // //     sum = currRestDays + sum + getTodayOfThisYear(hopeYear, hopeMonth, hopeDay)

// // //     return deal(sunDays, sum%7)
// // // }



// // // console.log(fn(2020,8,10,3,2021,8,10)) // 这里返回应该是周六啊 365 -12 

// // // /*
// // //     简单去整理一下useState，
    
// // // */
// // // let _state = null;
// // // function useState(initialValue) {
// // //     let _state =_state || initialValue
// // //     function dispatch(newState) {
// // //         _state = newState
// // //         render(<App />, document.getElementById('root'))
// // //     }
// // //     return [_state, dispatch]
// // // }

// // //

// // /*
// // const judge = (s, index01, index02) => {
   
  
// //     let count = 0;
// //     let left = index01;
// //     let right = index02;
// //     while(left >=0 && right< s.length){
// //         if(s[left] === s[right]){
// //           count++;
// //           left--;
// //           right++;
// //         }
// //         else break;
// //       }

  
// //     return count;
// //   }
// // */
// // // const judge = (s, index01, index02) => {

// // //     let count = 0;
// // // let left = index01;
// // // let right = index02;

// // // while(left >=0 && right< s.length && s[left] === s[right]){
// // //       count++;
// // //       left--;
// // //       right++;
// // //   }

// // // return count;
// // // }

// // // var longestPalindrome = function(s) {
// // // if(!s) return;

// // // let maxLength = 0, start = 0;

// // // const length = s.length;

// // // for(let i=0; i<length; i++){

// // //     const temp01 = judge(s,i,i);
// // //     const temp02 = judge(s,i, i+1)

// // //     const temp  = Math.max(temp01, temp02)
// // //     if(maxLength < temp){
// // //         console.log(i,Math.ceil(temp/2), temp)
// // //         start =  Math.abs(i - Math.ceil(temp/2));   // 回文子串的启始位置
// // //         maxLength= temp;
// // //     }
    
// // // }
// // // console.log("start:",start,"maxLength:",maxLength)


// // // return s.slice(start,start+ maxLength +1); //这里需要加个1因为slice这个api 是截取最后一项前面的
// // // };

// // //   console.log(longestPalindrome("babad"))


// // /*
// //   注意这里要考虑一种 bb 双字母的特殊情况

// // */
// // var findRepeatNumber = function(nums) {
// //   const hashMap = {};
// //   for(let i=0; i<nums.length; i++){
// //       const item = nums[i];
// //       if(hashMap[item]) return item;
// //       hashMap[item] = true;

// //   }
// // };

// // /**
// //  * @param {number[]} nums
// //  * @return {number}
// //  */
// // var singleNumber = function(nums) {
// //   let ans = 0;
// //   for(const num of nums) {
// //       ans ^= num;
// //       console.log(ans)
// //   }
// //   return ans;
// // };

// // var singleNumbers = function(nums) {
// //   let temp = 0, a=0 ,b=0;
// //   // 这个temp是在寻找 位数不一样的地方
// //   for(const item of nums){
// //       temp = temp ^ item;
// //   }
// //   let mask = 1;
// //   // 然后我们取出一位位数不一样的就可以了 可以在草稿纸上写一下 如果为0的为证明 这位是相同的
// //   while(mask & temp == 0){
// //       mask <<=1
// //   };

// //   // 然后我们根据位数相同与否 分为两组 一直做异或运算即可
// //   for(const item of nums){
// //       if(item & mask){
// //           a = item ^ a;
// //       }
// //       else{
// //           b = item ^ b;
// //       }
// //   }

// //   return [a,b]
// // };

// // let a = [43,63,2,5,98,43,1];

// // const quickSort = (arr) => {
// //   if(arr.length === 0 ) return [];

// //   const middleInex = 0;
// //   const middleValue  = arr[middleInex];
// //   const left = [], right = [], middle = [];

// //   arr.forEach( item => {
// //     if(item > middleValue){
// //       left.push(item);
// //     }
// //     else if(item === middleValue){
// //       middle.push(item)
// //     }
// //     else if(item < middleValue){
// //       right.push(item);
// //     }
// //   })

// //   return [...quickSort(left),...middle, ...quickSort(right)];
// // }

// // Function.prototype.myBind = function(obj,...arg){
// //   const that = this;

// //   return function(...arg01){
// //     that.apply(obj,[...arg, arg01])
// //   }
// // }

// // 手写函数克里化
// function ke(fn,...params){
//   const length = fn.length;
//   const paramsArr = [...params];
//   const that = this;
  

//    function temp(...otherParams){
//     paramsArr.push(...otherParams);

//     console.log("paramsArr:",paramsArr)
//       if(length == paramsArr.length){
//         return fn.apply(that,paramsArr);
//       }
        
         
          
//           return temp;
//   }

//   return temp;
// }

// function test(a,b,c){
//   console.log("a is ",a,b,c)
// }
// k =ke(test, 1);
// k(2,3)

// var text = '亲爱的#customer#，您已成功购买了#brand#的商品，订单编号为#order#，请凭订单编号或⼿机号⾄商家处消费！#url# 请保留此短信，及时查看消费情况哦！'
// var regex=/\#(.+?)\#/g;
// var result;
// while((result=regex.exec(text))!=null) {
//   console.log(result[1]);
//   console.log("!!!!!!!!!!!!!!!!!!!!!!!!!")
// }

let str = "[object String]";
console.log(Object.prototype.toString.call("dsf"))
const testReg = /(?<=\s)(.+?)(?=])/g;
let res;


console.log(str.match(testReg))