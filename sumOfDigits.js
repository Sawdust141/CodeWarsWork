/*
Parameters - Number passed in
Return - addition of digits in the number
Example - 45 returns 4+5 = 9
Pseudo -
convert number to string and split
if number has more than one digit, add those numbers together, repeat until only one digit
return single digit number
*/

function digital_root(n) {
    while (n > 9) n = n.toString()
                       .split('')
                       .reduce((acc, c) => acc + Number(c), 0)
    return n
  }