/*
Parameters - Number
Return - Boolean. Each individual digit to the power of n where n is the number of digits in the number. Add it together, does it equal the original number?
Example - 13. 1^2 + 3^2 != 13. False
Pseudo - Make number a string, split into an array.
        reduce, raising all digits to the power of the length of the array
        return value == result
*/

function narcissistic(value) {
    return value == value.toString()
                         .split('')
                         .reduce((acc,c,i,a) => acc + c**a.length, 0)
  }