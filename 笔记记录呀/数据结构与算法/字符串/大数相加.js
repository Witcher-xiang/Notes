/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let finalStr = "";

    while(num1.length < num2.length)  num1 = `0${num1}`;
    while(num1.length > num2.length)  num2 = `0${num2}`
  
    let temp = 0;
    for(let i=num1.length -1; i >= 0;i--){
        const item01 = num1[i];
        const item02 = num2[i];
        
        let num = parseInt(item01) + parseInt(item02) + temp;
        temp = Math.floor(num/10)
        
        finalStr = num%10 + finalStr;
    }
    return temp == 0 ? finalStr : temp + finalStr;
};