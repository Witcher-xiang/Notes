/**
 * leetCode 200 岛屿数量
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count  = 0;
    for(let i = 0; i <grid.length; i++){
        const itemArr = grid[i];
        for(let j = 0; j<itemArr.length; j++){
            const item = itemArr[j];
            if(item === "1"){
                count++;
                
                dfs(grid,i,j)
            }

        }
    }
    return count;
};

const dfs = (grid,i,j) => {
    const hight = grid.length;
    const width = grid[0].length;
    console.log(i,j)
    // 记得要写= 哦～
    if(i >= hight || j >= width || i < 0 || j < 0 || grid[i][j] === "0") return;
    
    grid[i][j] = "0";

    dfs(grid,i-1,j)
    dfs(grid,i+1,j)
    dfs(grid,i,j-1)
    dfs(grid,i,j+1)

    return;
}