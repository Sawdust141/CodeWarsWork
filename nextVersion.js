/*
Parameters - A version number
Return - The version number incremented by 1. All numbers cannot exceed 9, except the first number.
Example - nextVersion("1.2.3.4.5.6.7.8") returns "1.2.3.4.5.6.7.9"; nextVersion("9.9") returns "10.0";
Pseudocode -Split and reverse input
            Increment 1st number in array
            for loop, if element is 10, make it 0 and add 1 to the next element
            reverse and join, return
*/

function nextVersion(version){
    let v = version.split('.').reverse()
    v[0] = Number(v[0]) +1
    for (let i = 0; i < v.length -1; i++){
      if(v[i] == 10) {
        v[i] = 0
        v[i+1] = Number(v[i+1]) + 1
      }
    }
    return v.reverse().join('.')
  }