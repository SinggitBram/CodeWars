function smallest(n) {
    let arr = String(n).split('');
    let min = [n, 0, 0];
    let newArr = [];
    let count = 0;
    let length = arr.length
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        newArr = arr.slice(0, i).concat(arr.slice(i + 1));
        count = Number(newArr.slice(0, j).concat(arr[i], newArr.slice(j)).join(""));
        if (count < min[0]){
            min = [count, i, j]
        } 
      }
    }
    return min;
}



console.log(smallest(261235))//, [126235, 2, 0]);
console.log(smallest(209917))//, [29917, 0, 1]);
console.log(smallest(285365))//, [238565, 3, 1]);
console.log(smallest(269045))//, [26945, 3, 0]);
console.log(smallest(296837))//, [239687, 4, 1]);