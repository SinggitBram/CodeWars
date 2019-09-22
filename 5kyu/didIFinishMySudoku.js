function doneOrNot(board) {

    let nol = []
    let satu = []
    let dua = []
    let tiga = []
    let empat = []
    let lima = []
    let enam = []
    let tujuh = []
    let delapan = []

    let noll = [board[0][0],board[0][1],board[0][2],board[1][0],board[1][1],board[1][2],board[2][0],board[2][1],board[2][2]]
    let satuu = [board[0][3],board[0][4],board[0][5],board[1][3],board[1][4],board[1][5],board[2][3],board[2][4],board[2][5]]
    let duaa = [board[0][6],board[0][7],board[0][8],board[1][6],board[1][7],board[1][8],board[2][6],board[2][7],board[2][8]]
    let tigaa = [board[3][0],board[3][1],board[3][2],board[4][0],board[4][1],board[4][2],board[5][0],board[5][1],board[5][2]]
    let empatt = [board[3][3],board[3][4],board[3][5],board[4][3],board[4][4],board[4][5],board[5][3],board[5][4],board[5][5]]
    let limaa = [board[3][6],board[3][7],board[3][8],board[4][6],board[4][7],board[4][8],board[5][6],board[5][7],board[5][8]]
    let enamm = [board[6][0],board[6][1],board[6][2],board[7][0],board[7][1],board[7][2],board[8][0],board[8][1],board[8][2]]
    let tujuhh = [board[6][3],board[6][4],board[6][5],board[7][3],board[7][4],board[7][5],board[8][3],board[8][4],board[8][5]]
    let delapann = [board[6][6],board[6][7],board[6][8],board[7][6],board[7][7],board[7][8],board[8][6],board[8][7],board[8][8]]

    for (let l = 0; l < board.length; l++) {

        nol.push(board[l][0])
        satu.push(board[l][1])
        dua.push(board[l][2])
        tiga.push(board[l][3])
        empat.push(board[l][4])
        lima.push(board[l][5])
        enam.push(board[l][6])
        tujuh.push(board[l][7])
        delapan.push(board[l][8])
    }

    let gabungKolom = []
    gabungKolom.push(nol)
    gabungKolom.push(satu)
    gabungKolom.push(dua)
    gabungKolom.push(tiga)
    gabungKolom.push(empat)
    gabungKolom.push(lima)
    gabungKolom.push(enam)
    gabungKolom.push(tujuh)
    gabungKolom.push(delapan)

    let gabungTiga = []
    gabungTiga.push(noll)
    gabungTiga.push(satuu)
    gabungTiga.push(duaa)
    gabungTiga.push(tigaa)
    gabungTiga.push(empatt)
    gabungTiga.push(limaa)
    gabungTiga.push(enamm)
    gabungTiga.push(tujuhh)
    gabungTiga.push(delapann)

    //cek ke bawah
    for (let m = 0; m < gabungKolom.length; m++) {
        for (let n = 0; n < gabungKolom[m].length; n++) {
            for (let o = 0; o < gabungKolom[m].length; o++) {
                if (gabungKolom[m][n] === gabungKolom[m][o] && n !== o) {
                    return 'Try again!'
                }
            }
        }
    }
    // cek ke pinggir
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            for (let k = 0; k < board[i].length; k++) {
                if (board[i][j] === board[i][k] && j !== k) {
                    return 'Try again!'
                }
            }
        }
    }
    //cek 3x3
    for (let p = 0; p < gabungTiga.length; p++) {
        for (let q = 0; q < gabungTiga[p].length; q++) {
            for (let r = 0; r < gabungTiga[p].length; r++) {
                if (gabungTiga[p][q] === gabungTiga[p][r] && q !== r) {
                    return 'Try again!'
                }
            }
        }
    }
    return 'Finished!'
}


console.log(doneOrNot([
    [5, 3, 4, 6, 7, 8, 9, 1, 2], 
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]]))//, "Finished!");
           
console.log(doneOrNot([
    [5, 3, 4, 6, 7, 8, 9, 1, 2], 
    [6, 7, 2, 1, 9, 0, 3, 4, 9],
    [1, 0, 0, 3, 4, 2, 5, 6, 0],
    [8, 5, 9, 7, 6, 1, 0, 2, 0],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 0, 1, 5, 3, 7, 2, 1, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 0, 0, 4, 8, 1, 1, 7, 9]]))//, "Try again!");

console.log(doneOrNot([ 
    [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
    [ 2, 3, 4, 5, 6, 7, 8, 9, 1 ],
    [ 3, 4, 5, 6, 7, 8, 9, 1, 2 ],
    [ 4, 5, 6, 7, 8, 9, 1, 2, 3 ],
    [ 5, 6, 7, 8, 9, 1, 2, 3, 4 ],
    [ 6, 7, 8, 9, 1, 2, 3, 4, 5 ],
    [ 7, 8, 9, 1, 2, 3, 4, 5, 6 ],
    [ 8, 9, 1, 2, 3, 4, 5, 6, 7 ],
    [ 9, 1, 2, 3, 4, 5, 6, 7, 8 ] ]))// "Try again!"