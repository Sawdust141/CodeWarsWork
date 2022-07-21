/*
Parameters: One number is passed in
Return: The number of '1's in the binary form of the parameter
Example: 7 = 0110 = 2
Pseudo: Put number in base2, split and count 1s in the resulting string. Return the count
*/
var countBits = function(n) {
    return n == 0 ? 0 :
    n.toString(2)
     .split('')
     .filter(x => x == 1)
     .length
  }