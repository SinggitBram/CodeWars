function expandedForm(num) {
    let ganti = num.toString()
    let hasil = []
    let akhir = ''
    console.log(ganti)
    for (let i = 0; i < ganti.length; i++) {
        if (ganti[i] !== '0') {
            hasil.push(' + ' + ganti[i] * Math.pow(10, ganti.substring(i).length - 1))
        }
    }
    for (let j = 0; j < hasil.length; j++) {
        akhir = akhir + hasil[j]
    }
    console.log(hasil)
    console.log(akhir)
    return akhir.substring(3)
}

console.log(expandedForm(12))//, '10 + 2');
console.log(expandedForm(42))//, '40 + 2');
console.log(expandedForm(70304))//, '70000 + 300 + 4');