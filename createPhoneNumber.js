/*
Parameters - Array of numbers
Returns - Parameters made to look like a phonenumber
Example - 0123456789 = (012) 345-6789
Pseudo - Interpolate array into string, placing brackets and dashes in appropriate places
*/

function createPhoneNumber(numbers){
    return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
  }