/*
Parameters - An array of arrays of varying length, the arrays should have different lengths, and should have lengths that are sequential, except one.
Return - The array length that is missing.
Example - [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] returns 3, because there is an array of length 1,2,4 and 5. 3 is missing.
Pseudocode - Ensure all arrays have correct contents.
             Map of lengths of each array within the arrayOfArrays
             Sort array, if an element isn't equal to the previous element plus one return it.
*/


function getLengthOfMissingArray(arrayOfArrays) {
    let checker = true
    //Check the arrayOfArrays contains values
    if (arrayOfArrays == [] || arrayOfArrays == null) return 0
    //Check every element in the arrayOfArray is also an Array. If it is return the length
    let answer = arrayOfArrays.map(x => {
      if (x == [] || x == null || x.length == 0) checker = false
      else return x.length
    }).sort((a,b) => a - b)
    //Use checker variable to return if the prevous loops show anything wrong
    if (checker == false) return 0
    //Loop through and return the element that doesn't follow the previous element sequentially
    for(i = 1; i < answer.length; i++) {
      if (answer[i] != answer[i -1] + 1) return answer[i] -1
    }
    return 0
}

/*
The contents check takes too much in this function. I'm going to find a more efficient version.
*/

function getLengthOfMissingArray(arrayOfArrays) {
    let lengths = (arrayOfArrays || [])
                  .map(x => x ? x.length : 0)
                  .sort((a,b) => a - b)
    if (lengths.includes(0)) return 0
    for(i = 1; i < lengths.length; i++) {
      if (lengths[i] != lengths[i -1] + 1) return lengths[i] -1
    }
    return 0
}