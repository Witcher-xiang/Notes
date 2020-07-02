function getMode(value){
  const arr = value.split(" ");
  let numObj = {}, max=0 , index =0;

  arr.map(item=> {
    if(numObj[item])  numObj[item] +=1;
    else numObj[item]=1;
  })
  for(let key in numObj){
    if(numObj[key] >= max){
      max = numObj[key]
      index =key;
    }
  }

  console.log(`mode=${index}`)
}

// const value = "6 1 0 5 0 0";

// getMode(value)

function getOrderMeanAndMedian(line){
  const arr = line.split(" ");
  const ceil = Math.ceil(arr.length/2);
  const floor = Math.floor(arr.length/2);
  let  median,mean,sum;

  if(floor === ceil) median = arr[ceil/2];
  else median = (arr[floor] + arr[ceil]).toFixed(2);
  
  arr.forEach(item => sum+= (item))
  
  console.log("sum:",sum)
  mean = (sum/(arr.length)).toFixed(2)

  console.log(`mean=${mean},median=${median}`)
}

const value = "1 2 3 9"
getOrderMeanAndMedian(value)

