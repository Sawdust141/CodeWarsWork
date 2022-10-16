/*
Parameters - a string of numbers
Return - the highest and lowest numbers
Example - ("1 2 3 4 5") returns "5 1"
Pseudocode -  Change the string into an array of numbers
                Math.max + min
*/

function highAndLow(numbers){
    let arr = numbers.split(' ').map(Number)
    return (`${Math.max(...arr)} ${Math.min(...arr)}`)
  }