/*
Parameters - An array of numbers and a single number. 
Return - Correct the given array so that the number do not occur more than the single number given.
Example - deleteNth([20,37,20,21], 1) returns [20,37,21]
Pseudocode - Create object, loop through the given array adding each number in the given array to the object 
             and log how many times each number occurs in the array.
             If the number of times goes over the required amount, replace the number with #
             Filter the array for #s and return
*/

function deleteNth(arr,n){
    let count = {}
    return arr.map(x =>{
       count[x] ? count[x] ++ : count[x] = 1
       return count[x] > n ? '#' : x })
      .filter(x => x != '#')
  }