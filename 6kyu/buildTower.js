function towerBuilder(nFloors) {
    var akhir = []
    for (var i = 1; i <= nFloors; i++) {
        var hasil = ''
        for (var k = nFloors; k>i; k--) {
            hasil = hasil + ' '
        }
        for (var j = 0; j < (i * 2) - 1; j++) {
            hasil = hasil + '*'
        }
        for (var l = nFloors; l>i; l--) {
            hasil = hasil + ' '
        }
        akhir.push(hasil)
    }
    return akhir
}
console.log(towerBuilder(16))