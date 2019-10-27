function groupCheck(s) {
    console.log(s)
    let kurungB = 0
    let kurawalB = 0
    let sikuB = 0
    let kurungT = 0
    let kurawalT = 0
    let sikuT = 0
    let kurungAwal
    let kurungAkhir
    let kurawalAwal
    let kurawalAkhir
    let sikuAwal
    let sikuAkhir

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            kurungB++
            kurungAwal = i
        } else if (s[i] === '{') {
            kurawalB++
            kurawalAwal = i
        } else if (s[i] === '[') {
            sikuB++
            sikuAwal = i
        } else if (s[i] === ')') {
            kurungT++
            kurungAkhir = i
        } else if (s[i] === '}') {
            kurawalT++
            kurawalAkhir = i
        } else if (s[i] === ']') {
            sikuT++
            sikuAkhir = i
        }
    }
    if (kurungB !== kurungT || kurawalB !== kurawalT || sikuB !== sikuT) {
        return false
    } else if((kurungAkhir - kurungAwal) % 2 === 0 || (kurawalAkhir - kurawalAwal) % 2 === 0 || (sikuAkhir - sikuAwal) % 2 === 0){
        return false
    } 
    return true
}

console.log(groupCheck("()"))//, "That group was matched correctly");
console.log(groupCheck("[[]()]"))//, "That group was matched incorrectly");
console.log(groupCheck("[])"))//, "That group was left open or prematurely closed");
