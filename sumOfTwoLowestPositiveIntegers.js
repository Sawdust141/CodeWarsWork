/*
Parameters - An array of numbers
Return - The two lowest numbers
Example - [19, 5, 42, 2, 77] returns 7 because 2 + 5 = 7
Pseudocode - Sort the array numerically with sort(), return the 0th and 1st elements.
*/

function sumTwoSmallestNumbers(numbers) {  
    numbers.sort((a,b) => a - b)
    return numbers[0] + numbers[1]
  }