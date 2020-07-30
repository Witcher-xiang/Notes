<<<<<<< HEAD
  
  const judgeText = (str) => {
    let len = str.length;
    for(let i=0; i<len; i++){
      if(str[i] !== str[len-i-1]) return false;
      
    }

    return true;
  }
  
  console.log(judgeText("abba"))
=======
if(1){
  function log01(){
    console.log(this)
    console.log("324")

  }
  var obj = {
    a : 1,
    fn:log01
  }
}

for (var i =0; i<=5;i++){
  ( function(j) {setTimeout(function () {
    console.log(j)
  },100)})( i)
}


>>>>>>> b021264383b3573faec23669c16e90077ad8411e
