/**
 * 118. 杨辉三角

 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    
    const arr = new Array(numRows);
    arr[0] = [1]
    for(let i=1;i < numRows;i++){
        arr[i] = new Array(i).fill(null)
        arr[i][0] = 1
        arr[i][i] = 1
    }
    

    for(let i=2;i < numRows;i++){
        const lastRow = arr[i-1]
        arr[i].forEach((item,index) =>{
            
            if(!item){
                arr[i][index] = lastRow[index-1] + lastRow[index]
            }
        })
    }
    return arr;
};