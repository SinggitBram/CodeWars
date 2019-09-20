function jumlah(kata) {
    let kamus = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8,
        i: 9,
        j: 10,
        k: 11,
        l: 12,
        m: 13,
        n: 14,
        o: 15,
        p: 16,
        q: 17,
        r: 18,
        s: 19,
        t: 20,
        u: 21,
        v: 22,
        w: 23,
        x: 24,
        y: 25,
        z: 26
    }
    let akhir = 0
    for (let i = 0; i < kata.length; i++) {
        for (let key in kamus) {
            if (kata[i] === key) {
                akhir += kamus[key]
            }
        }
    }
    return akhir
}
function high(x) {

    let pisah = x.split(' ')
    let hasil = []
    console.log(pisah)
    for (let i = 0; i < pisah.length; i++) {
        hasil.push(jumlah(pisah[i]))
    }
    console.log(hasil)
    return pisah[hasil.indexOf(Math.max(...hasil))]  
}
console.log(high('man i need a taxi up to ubud'))//, 'taxi');
console.log(high('what time are we climbing up the volcano'))//, 'volcano'); 
console.log(high('take me to semynak'))//, 'semynak');  