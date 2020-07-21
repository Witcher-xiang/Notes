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


