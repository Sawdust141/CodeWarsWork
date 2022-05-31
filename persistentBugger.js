/*Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence,
which is the number of times you must multiply the digits in num until you reach a single digit. */

function persistence(num) {
   let count = 0
   while (num >= 10) {
     count++
     num = num.toString()
              .split('')
              .map( x => x = parseInt(x))
              .reduce((acc,c) => acc * c, 1)
   }
    return count
 }