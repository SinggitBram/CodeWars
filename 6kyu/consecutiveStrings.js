function longestConsec(strarr, k) {
    let arr = []

    if (strarr.length === 0 || k < 0 || k > strarr.length) {
        return ''
    }
    for (let i = 0; i < strarr.length; i++) {
        let akhir = ''
        for (let j = i; j < i + k; j++) {
            if (strarr[j] !== undefined) {
                akhir = akhir + strarr[j]
            }
        }
        arr.push(akhir)
    }
    let jawab = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > jawab.length) {
            jawab = arr[i]
        }
    }
    return jawab
}

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2))//, "abigailtheta")
console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1))//, "oocccffuucccjjjkkkjyyyeehh")
console.log(longestConsec([], 3), "")
console.log(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2))//, "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck")
console.log(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2))//, "wlwsasphmxxowiaxujylentrklctozmymu")
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2))//, "")
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3))//, "ixoyx3452zzzzzzzzzzzz")
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15))//, "")
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0))//, "")
