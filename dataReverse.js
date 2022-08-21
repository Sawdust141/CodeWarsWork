/*
Parameters - String of 1s and 0s, in multiples of 8
Return - the same string, split into 8s and reversed in groups. 
Example - [0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1] returns [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0]
Pseudocode - Create answer variable
             for loop, adding 8 each time
             unshift slices of i to i+8
             return the answer variable
I had to find the Ellipsis, It wouldn't work until I put that in. Still not sure why.
*/
function dataReverse(data) {
    let answer = []
    for(i = 0; i < data.length; i += 8){
      answer.unshift(...data.slice(i, i + 8))
    }
    return answer
}
  