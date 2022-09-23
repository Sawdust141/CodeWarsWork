/*
Parameters - Two arrays of arrays
Return - A new array of arrays that is the addition of the two inputted array (addition is based on location) A(0,0) + b(0,0)  
Example - 
|1 2 3|     |2 2 1|     |1+2 2+2 3+1|     |3 4 4|
|3 2 1|  +  |3 2 3|  =  |3+3 2+2 1+3|  =  |6 4 4|
|1 1 1|     |1 1 3|     |1+1 1+1 1+3|     |2 2 4|

Pseudocode - Nested maps - parameter a, loop through the arrays within the array, adding the element in the same position from parameter b.
		
*/


function matrixAddition(a, b){
  return a.map((y,j) => {
    return y.map((x,i) => {
      return x + b[j][i]
    })
  })
}