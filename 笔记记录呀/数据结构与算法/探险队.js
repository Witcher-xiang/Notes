let str = ""

const matchStrArr = str.match(/(\d{0,},\d{0,})/g);
// console.log(matchStr);
const newArr = [];
let finalArr = [0,0]
console.log(matchStrArr)
matchStrArr.forEach(item => {
    const tempArr = item.split(",")
    let a = tempArr[0];
    let b = tempArr[1];
   
    if( a != "0" && b !="0" &&  a.replace(/^0{0,}/,"").length == a.length){
        a = parseInt(a);
        b = parseInt(b);
        if((a*a + b*b) > (finalArr[0]* finalArr[0] + finalArr[1] * finalArr[1])){
            finalArr = [a,b]
        }
    }
})