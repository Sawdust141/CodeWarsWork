/*
Parameters - Whole number passed in
Returns - Returns sum of all numbers, that are divisible by 3 and 5, below the given number
Example - Pass in 10. Return 3 + 5 + 6 + 9 = 23
Pseudo - for loop, if div by 3 or 5, add to answer
*/
function solution(number){
    let answer = 0
    for (i = 1; i < number; i++) {
      if (i % 3 == 0 || i % 5 == 0) answer += i
    }
    return answer
  }