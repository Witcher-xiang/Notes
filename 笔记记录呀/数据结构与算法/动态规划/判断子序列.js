var isSubsequence = function(s, t) {

  // 双指针

  let index = 0;

  for(let i=0; i<s.length; i++){
      if(s[i] = t[index]){
          index ++;
          if(index === t.length ) return true
      }
  }

  console.log(s.length)
  return false;

};

let  str01 = "axc";

let str02 = "ahbgdc"
console.log(isSubsequence(str01, str02))