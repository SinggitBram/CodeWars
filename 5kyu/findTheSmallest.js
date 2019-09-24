function smallest(n) {
    let ubah = String(n).split('')
    console.log(ubah)
    let urut = String(n).split('').sort(function(a,b){return a-b})
    console.log(urut)
    if(ubah[0] === urut[0]){
        ubah.splice(ubah.indexOf(urut[1]),1)
        }
        console.log(ubah)
    }





console.log(smallest(261235))//, [126235, 2, 0]);
// console.log(smallest(209917))//, [29917, 0, 1]);
// console.log(smallest(285365))//, [238565, 3, 1]);
// console.log(smallest(269045))//, [26945, 3, 0]);
// console.log(smallest(296837))//, [239687, 4, 1]);