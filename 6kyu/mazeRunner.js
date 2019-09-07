// You will be given a 2D array of the maze and an array of directions. 
// Your task is to follow the directions given. If you reach the end 
// point before all your moves have gone, you should return Finish. 
// If you hit any walls or go outside the maze border, you should return Dead. 
// If you find yourself still in the maze after using all the moves, you should return Lost.
// 0 = Safe place to walk
// 1 = Wall
// 2 = Start Point
// 3 = Finish Point

function mazeRunner(maze, directions) {

    var start = []
    var finish = []
    for (var i = 0; i < maze.length; i++) {
        for (var j = 0; j < maze[i].length; j++) {
            if (maze[i][j] === 2) {
                start.push(i, j)
            } else if (maze[i][j] === 3) {
                finish.push(i, j)
            }
        }
    }
    for (var k = 0; k < directions.length; k++) {
        if (directions[k] === 'N') {
            start[0]--
        } else if (directions[k] === 'S') {
            start[0]++
        } else if (directions[k] === 'W') {
            start[1]--
        } else if (directions[k] === 'E') {
            start[1]++
        }
        if ((start[0] === finish[0]) && (start[1] === finish[1])) {
            return 'Finish'
        } else if (start[0] < 0 || start[1] < 0) {
            return 'Dead'
        } else if (start[0] >= maze.length || start[1] >= maze.length) {
            return 'Dead'
        } else if (maze[start[0]][start[1]] === 1) {
            return 'Dead'
        }
    }
    if (maze[start[0]][start[1]] === 0) {
        return 'Lost'
    }
    else{
        return 'Lost'
    }
}

maze =  [[1,1,1,1,1,1,1],
        [1,0,0,0,0,0,3],
        [1,0,1,0,1,0,1],
        [0,0,1,0,0,0,1],
        [1,0,1,0,1,0,1],
        [1,0,0,0,0,0,1],
        [1,2,1,0,1,0,1]]

console.log(mazeRunner(maze,["N","N","N","N","N","E","E","E","E","E"]))//, "Finish", "Expected Finish");
console.log(mazeRunner(maze,["N","N","N","N","N","E","E","S","S","E","E","N","N","E"]))//, "Finish", "Expected Finish");
console.log(mazeRunner(maze,["N","N","N","N","N","E","E","E","E","E","W","W"]))//, "Finish", "Expected Finish");
console.log(mazeRunner(maze,["N","N","N","W","W"]))//, "Dead", "Expected Dead");
console.log(mazeRunner(maze,["N","N","N","N","N","E","E","S","S","S","S","S","S"]))//, "Dead", "Expected Dead");
console.log(mazeRunner(maze,["N","E","E","E","E"]))//, "Lost", "Expected Lost");