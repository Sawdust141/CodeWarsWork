/*
Parameters - arr of numbers, it may have a centre point for value. 
            An index where the values to the left equal the values to the right.
Return - If there is a centrepoint, return the index
Example - arr{1,2,3,4,3,2,1} = 3 because the values before arr[3] equal the values after arr[3]
Pseudo - for loop - loop through comparing the values before an after each index. splice and reduce
*/
function findEvenIndex(arr)
{
  for (i = 1; i <= arr.length; i++) {
    if (arr.slice(0,i-1).reduce((acc,c) => acc + c,0) === arr.slice(i).reduce((acc,c) => acc + c,0)) {
      return i-1
    }
  }
  return -1
}