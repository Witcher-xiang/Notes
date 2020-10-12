const isSingle = (num) => {
    if(num%2 === 0) return false;
    
    return true;
  }
  
  const sumArr = (sum, arr) => {
    arr.forEach( item => sum =sum+item);
  
    return sum;
  }
  
  /*
  思路：暴力求解，两个for循环将所有可能组成子序列的数组进行枚举查看他是否是奇数长度然后二者相加,  其次需要额外添加一种情况即每一项都是一个奇数长度的序列
  
  */
  function sumOddLengthSubarrays( arr ) {
    // write code here
    let sum = 0, finArr = [];
    for(let i = 0; i< arr.length; i++){
        let tempArr = [];
        for(let j= i; j<arr.length; j++){
            let item02 = arr[j];
            tempArr.push(item02);
            // console.log(isSingle(tempArr.length),tempArr)
            if(isSingle(tempArr.length)){
                sum = sumArr(sum,tempArr)
                finArr.push(tempArr);
            }
        }
    }
    //console.log(finArr)
  
    return sum;
  }
  
  console.log(sumOddLengthSubarrays([1,4,2,5,3]))