/*
Parameters - A number and a value
Return - An array that where each element is the given value and has as many indexes as the given number
Example - prefill(3,1) returns [1,1,1]
Pseudocode - create array(n) and fill() with v
            After a few attempts, I realised this was an exercise in handling errors, as seen below!
*/

function prefill(n, v) {
  if (n === 0 || n === '0') return []
  if(typeof n === 'boolean' || n < 0 || n % 1 != 0) throw new TypeError(`${n} is invalid`)
  else return Array(n).fill(v)
}