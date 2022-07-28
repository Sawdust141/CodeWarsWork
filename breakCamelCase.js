/*
Parameters - A word with camel casing
Return - That word with spaces before each captial letter
Example - "camelCasing"  =>  "camel Casing"
Pseudo - map, if capital letter, return space before that letter
*/

function solution(string) {
    return string
          .split('')
          .map((x,i) => (x == x.toUpperCase()) ? ` ${x}` :`${x}`)
          .join('')
  }