/*
Parameters - Array of numbers
Return - The array, paired into numbers that have a difference of 2.
Example - [1,2,3,4] returns [[1, 3], [2, 4]]
Pseudocode - Sort the array
             map new array, if the next element, or the element after that, is equal to the current array plus 2. Return both this element and that element
             (Needed to filter undefined for elements that don't meet those conditions.)
*/

function twosDifference(input){
    return input.sort((a,b) => a - b).map((x,i,a) =>{
      if (x+2 == a[i+1]) return [x, a[i+1]]
      else if (x+2 == a[i+2]) return [x, a[i+2]]
   }).filter(x => x != undefined)
  }