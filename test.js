  
  const judgeText = (str) => {
    let len = str.length;
    for(let i=0; i<len; i++){
      if(str[i] !== str[len-i-1]) return false;
      
    }

    return true;
  }
  
  console.log(judgeText("abba"))