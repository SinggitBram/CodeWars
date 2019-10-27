function letterFrequency(text) {
    let kecil = text.toLowerCase()
    let obj = {}
    let hasil = []
    for (let i = 0; i < kecil.length; i++) {
        if (kecil[i] !== '.' && kecil[i] !== ',' && kecil[i] !== '-' && kecil[i] !== ' ' && kecil[i] !== "'") {
            if (!obj[kecil[i]]) {
                obj[kecil[i]] = 1
            } else {
                obj[kecil[i]]++
            }
        }
    }
    for (let keys in obj) {
        hasil.push([
            keys, obj[keys]
        ])
    }
    hasil.sort(function (a, b) {
        return b[1] - a[1]
    })
    return hasil
}

    console.log(letterFrequency('wklv lv d vhfuhw phvvdjh'))
    //[['v', 5], ['h', 4], ['d', 2], ['l', 2], ['w', 2], ['f', 1], ['j', 1], ['k', 1], ['p', 1], ['u', 1]];
    console.log(letterFrequency("As long as I'm learning something, I figure I'm OK - it's a decent day."))
    //[["i", 7], ["a", 5], ["e", 5], ["n", 5], ["g", 4], ["s", 4], ["m", 3], ["o", 3], ["t", 3], ["d", 2], ["l", 2], ["r", 2], ["c", 1], ["f", 1], ["h", 1], ["k", 1], ["u", 1], ["y", 1]];
    console.log(letterFrequency('IWT LDGAS XH HIXAA P LTXGS EAPRT, STHEXIT BN TUUDGIH ID BPZT RATPG PCS ETGUTRI HTCHT DU XI.'))
    //[["t", 12], ["i", 7], ["h", 6], ["a", 5], ["g", 5], ["p", 5], ["x", 5], ["d", 4], ["s", 4], ["u", 4], ["e", 3], ["r", 3], ["b", 2], ["c", 2], ["l", 2], ["n", 1], ["w", 1], ["z", 1]];
    

    