/*
Parameters - A credit card number 
Return - If the card is a valid number per the following algorithm:
        Double every other digit, scanning from right to left, starting from the second digit (from the right).
        If a resulting contains the digit 9, replace it with the sum of its own digits
        Finally, take that sum and divide it by 10. If the remainder equals zero, the original credit card number is valid.
Example - 1714 ==> [1*, 7, 1*, 4] ==> [2, 7, 2, 4], 2 +7 +2 +4 = 15, 15 % 10 != 0, return false
Pseudocode -The biggest challenge is treating numbers like strings in a long array, lots of casting.
            reverse() the input number and reduce it, doubling every odd index.
            Sum the digits of the outcome
            If 9 is in the outcome anywhere, reduce it again.
            return is the outcome is divisible by 10.
*/

function validate(n){
    let sum = String(n).split('').reverse().reduce((acc, c, i) => {
      if (i % 2 == 1) return acc + c*2
      else return acc + c
      },0)
    sum = String(sum).split('').reduce((acc, c) => acc+ Number(c), 0)
    while (String(sum).split('').includes('9')) {
      sum = String(sum).split('').reduce((acc, c) => acc+ Number(c), 0)
    }
    return (sum % 10 == 0) 
}