/*
Parameters - Pass in a string
Return - true if the word has no repeating letters, else false
Example - 'ada' = false, arm = true
Pseudo - split, forEach if the index and last index are not the same, return false.
*/

function isIsogram(str){
    let answer = true
    str.toLowerCase().split('').forEach((x,i,a) => {
      if (a.indexOf(x) !== a.lastIndexOf(x)) {
          answer = false
      }
    })
    return answer
  }