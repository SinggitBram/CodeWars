// Complete the function scramble(str1, str2) that returns true if a portion of 
// str1 characters can be rearranged to match str2, otherwise returns false.

function scramble(str1, str2) {
    var hasil = ''
    for (var i = 0; i < str2.length; i++) {
        for (var j = 0; j < str1.length; j++) {
            if (str1[j] === str2[i]) {
                hasil += str2[i]
                str1 = str1.slice(0, j) + str1.slice(j + 1)
                break
            }
        }
    }
    if (hasil === str2) {
        return true
    } else {
        return false
    }
}

  console.log(scramble('rkqodlw','world'))//,true);
  console.log(scramble('cedewaraaossoqqyt','codewars'))//,true);
  console.log(scramble('katas','steak'))//,false);
  console.log(scramble('scriptjava','javascript'))//,true);
  console.log(scramble('scriptingjava','javascript'))//,true);
  console.log(scramble('scriptsjava','javascripts'))//,true);
  console.log(scramble('jscripts','javascript'))//,false);
  console.log(scramble('aabbcamaomsccdd','commas'))//,true);