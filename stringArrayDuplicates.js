/*
Parameters - array of words that have duplicate letters
Return - the array with the duplicate consecutive letters removed
Example - ["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]) returns ['codewars','picaniny','hubububo'])
Pseudocode = Return map of the given array, each word filtered, after being split into letters. Return only letters that don't match the previous letter.
*/

function dup(s) {
    return s.map(word => {
      return word.split('').filter((letter, i, arr) =>{
        return letter != arr[i-1]
      }).join('')
    })
  };