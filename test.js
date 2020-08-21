const arr = ['red', 'green', 'blue'];
for(let v in arr) {
  if(v == 1) continue;
    console.log(v); // '0', '1', '2
}