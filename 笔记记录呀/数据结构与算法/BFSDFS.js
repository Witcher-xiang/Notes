// BFS广度优先遍历
// DFS深度优先遍历
/*
  举个例子
*/

const tree = {
  name: 'root',
  children: [
      {
          name: 'c1',
          children: [
              {
                      name: 'c11',
                  children: []        
                  },
                  {
                      name: 'c12',
                  children: []        
              }
          ]
      },
      {
          name: 'c2',
          children: [
              {
                      name: 'c21',
                  children: []        
                  },
                  {
                      name: 'c22',
                  children: []        
              }
          ]
      }
  ]
}

// 深度优先的方式遍历 打印 name
// ['root', 'c1','c11', 'c12', 'c2', 'c21', 'c22']
// 最简单的递归方式
const dfs = (tree) => {
  let arr = [];
  const fn = (data) => {
    arr.push(data.name);
    data.children.forEach( item => {
      fn(item)
    })
    
  };
  fn(tree);

  return arr;
}

// console.log(dfs(tree))

/*  */
const dfsStack = (tree) => {

}