/*
Parameters - Two numbers. Divide the first number by the second number. 
      Raise each digit of the first number to consecutive powers.
      Add those numbers together, divide it by the first number. Is it an integer?
Return - If we found a whole number, return it, else return 0
Example- digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
Pseudo
*/
function digPow(n, p){
    let answer = 0
    n.toString().split('').forEach(x =>{
      answer += x**p
      p++
    })
    return answer/n % 1 == 0 ? answer/n : -1
}