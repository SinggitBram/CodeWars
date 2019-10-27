function solution(str) {
    let hasil = []
    let temp = ''
    for (let i = 0; i < str.length; i++) {
        temp = str[i] + str[i + 1]
        i++
        if (temp.length === 10) {
            hasil.push(temp.substring(0,1) + '_')
        } else {
            hasil.push(temp)
        }
    }
    return hasil
}

console.log(solution('abc')) // should return ['ab', 'c_']
console.log(solution('abcdef')) // should return ['ab', 'cd', 'ef']