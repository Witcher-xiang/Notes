function arrRemoveDuplicateForMap(arr){
  const map  = new Map(); // 这里也可以用Array并且该用IndexOf
  const newArr = [];
  arr.forEach((item) => {
    if(!map.has(item)){
      map.set(item,item)
      newArr.push(item);
    }
  })
  return newArr;
}


function arrRemoveDuplicateForSet(arr){
  const set  = new Set(arr);

  return Array.from(set);
}

// 使用indexOf和遍历索引进行判断
function arrRemoveDuplicateIndexOf(arr){
  const newArr = [];
  arr.forEach((item,index) => {
    if(index ==arr.indexOf(item)) newArr.push(item)
  })

  return newArr;
}