// -1 if the board is not yet finished (there are empty spots),
// 1 if "X" won,
// 2 if "O" won,
// 0 if it's a cat's game (i.e. a draw).

function isSolved(board) {
    for (let i = 0; i < board.length; i++) {
        if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][2] === 1) {
            return 1
        } else if (board[0][0] === board[1][0] && board[1][0] === board[2][0] && board[2][0] === 1) {
            return 1
        } else if (board[0][1] === board[1][1] && board[1][1] === board[2][1] && board[2][1] === 1) {
            return 1
        } else if (board[0][2] === board[1][2] && board[1][2] === board[2][2] && board[2][2] === 1) {
            return 1
        } else if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[2][2] === 1) {
            return 1
        } else if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[2][0] === 1) {
            return 1
        } else if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][2] === 2) {
            return 2
        } else if (board[0][0] === board[1][0] && board[1][0] === board[2][0] && board[2][0] === 2) {
            return 2
        } else if (board[0][1] === board[1][1] && board[1][1] === board[2][1] && board[2][1] === 2) {
            return 2
        } else if (board[0][2] === board[1][2] && board[1][2] === board[2][2] && board[2][2] === 2) {
            return 2
        } else if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[2][2] === 2) {
            return 2
        } else if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[2][0] === 2) {
            return 2
        }
    }
    for (let j = 0; j < board.length; j++) {
        for (let k = 0; k < board[j].length; k++) {
            if (board[j][k] === 0) {
                return -1
            }
        }
    }
    return 0
}


  console.log(isSolved([
        [2,1,1],
        [1,0,1],
        [2,2,2]]))// === -1);