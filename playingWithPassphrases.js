/*
Parameters - a string and a number
Return - the string with all letters incremented by the given number, odd indexes put into lowercase, digits changed to their 9 bond, and the whole string reversed.
Example - ("BORN IN 2015!", 1) returns "!4897 Oj oSpC"
Pseudocode - split and map a new array.
             if the element is a number, return 9 -x
             if a char, use code from ROT13/ rotating by the given number, but change that rotation amount if we need to lower case the letter
             reversem join, return

*/

function playPass(s, n) {
    return s.split('').map((x,i) => {
      if (isFinite(x) && x != ' ') {
       x = 9-x
     } else if (x.toUpperCase() != x.toLowerCase()) {
       i % 2 == 0 ? x = String.fromCharCode(((x.charCodeAt(0)- 65 %26 + n) %26 +65)) : x = String.fromCharCode(((x.charCodeAt(0)- 65 %26 + n) %26 +97))
     }
     return x
   }).reverse().join('')
 }