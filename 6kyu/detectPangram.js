function isPangram(string){
    let obj = {}
    let kecil = string.toLowerCase()
    let kamus = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    for(let i = 0 ; i < kecil.length; i ++){
        for(let j = 0 ; j< kamus.length; j++){
            if(kecil[i] === kamus[j] && !obj[kecil[i]]){
                obj[kamus[j]] = 1
            }
        }
    }
    if(Object.keys(obj).length === 26){
        return true
    }
    return false
  }

console.log(isPangram("The quick brown fox jumps over the lazy dog."))// true
console.log(isPangram("This is not a pangram."))//false
console.log(isPangram("How quickly daft jumping zebras vex."))
console.log(isPangram("AbCdEfGhIjKlM zYxWvUtSrQpOn."))
console.log(isPangram("Pack my box with five dozen liquor jugs."))
