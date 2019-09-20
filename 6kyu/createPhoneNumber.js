function createPhoneNumber(numbers) {
    let baru = ''
    for (let i = 0; i < numbers.length; i++) {
        baru += numbers[i]
    }
    let satu = baru.slice(0, 3)
    let dua = baru.slice(3, 6)
    let tiga = baru.slice(6, 10)

    return `(${satu}) ${dua}-${tiga}`
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))//, "(123) 456-7890")