function race(v1, v2, g) {
    let d1 = g
    let d2 = 0
    let time = 0
    let jam
    let menit
    let detik
    let hasil = []
    while (d2 < d1) {
        d1 = d1 + (v1 / 3600)
        d2 = d2 + (v2 / 3600)
        time++
    }
    time--
    jam = Math.floor(time / 3600)
    time = time - (jam * 3600)
    menit = Math.floor(time / 60)
    time = time - (menit * 60)
    detik = time

    hasil.push(jam, menit, detik)
    return hasil
}

console.log(race(720, 850, 70))//, [0, 32, 18])
console.log(race(80, 91, 37))//, [3, 21, 49])
console.log(race(80, 100, 40))//, [2, 0, 0])
