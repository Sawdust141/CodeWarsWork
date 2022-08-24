/*
Parameters - Two large numbers 
Return - If the first number contains three consecutive matching numbers, 
         and the second number contains the same number twice consecutively, return 1, otherwise return 0
Example - 451999277, 41177722899) == 1. num1 contains 999, num 2 contains 99
Pseudocode - forEach loop through num 1. If one element matches the following two elements, begin a second forloop on num2.
             Check for two consecutive elements that match the element found in num1. If so, return '1', else return 0.
*/

function tripledouble(num1, num2) {
    let answer = 0
    num1.toString().split('').forEach((x,i,a)=>{
      if (x == a[i+1] && x == a[i+2]) {
        num2.toString().split('').forEach((y,j,b)=>{
          if (x == b[j] && x == b[j+1]) answer = 1
        })
      }
    })
    return answer
}