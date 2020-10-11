/* 顺时针打印螺旋矩阵 */
// 这都是六个月前刷的题了

// 但是我又忘记了 这里需要八个变量， 四个边界值 + 当前位置（2个变量） + 移动方向 + 需要循环来进行遍历的次数
var spiralOrder = function(matrix) {
    if(matrix.length === 0) return [];

    let top = 0, right = matrix[0].length -1, left = 0, bottom = matrix.length -1;
    let i = 0,j = 0, turn = right === 0 ? "d" : "r";
    let m = bottom + 1, n = right + 1
 
    const res = [];

    for(let a =0; a< m * n; a++){ // 注意这里不要直接使用left或者right
        res.push(matrix[i][j]);
        if(turn === "r"){
            j++;
            if(j === right){
                turn = "d";
                top++;
            }
        }
        else if(turn === "d"){
            i++;
            if(i === bottom){
                turn = "l";
                right--;
            }
        }
        else if(turn === "l"){
            j--;
            if(j === left){
                turn = "u";
                bottom--;
            }
        }
        else if(turn === "u"){
            i--;
            if(i == top){
                turn = "r";
                left++;
            }
        }
    }

    return res;
};