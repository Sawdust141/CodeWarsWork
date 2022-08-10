/*
Parameters - Array of numbers and a single target number
Return - Selection of two numbers from the array that can be added together to make the target number.
Example -  twoSum([1, 2, 3], 4) returns [0, 2] or [2, 0]
Pseudo -1. Initialise answer variable
        2. forEach loop on the number array.
        3. for loop, starting at the current point in the forEach loop
        4. If the elements in the forEach and for loop add to make the target, put them in the answer variation.
        5. Return answer after both loops finish.
*/
function twoSum(numbers, target) {
    let answer = []
    numbers.forEach((x,i) => {
      for (j = i +1; j < numbers.length; j++) {
        if (x + numbers[j] == target) answer = [i,j]
      }
    })
    return answer
  }