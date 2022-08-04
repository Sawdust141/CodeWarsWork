/*
Parameters - An array of numbers
Return - Maximum Subarray Sum. There will be negative numbers that will lower the sum, so find the greatest sum of continuous numbers.
Example - maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) returns  6: [4, -1, 2, 1]
Pseudocode -  1. For each, STARTING point at every index. 
              2. Nested for loop that puts the STOPPING point at every index after the starting point
              3. Reduce the array between those two points. Push it to its own array called 'adds'
              4. Find the max in that array, if it is less than one, return 0
*/

var maxSequence = function(arr){
    let adds = []
    arr.forEach((x,i) => {
      for(j = 0; j < arr.length - i;j++){
        adds.push(arr.slice(i,arr.length-j).reduce((acc,c) => acc+c,0))
      }
    })
    return Math.max(...adds) > 0 ? Math.max(...adds) : 0
  }