/*
Parameters - A string
Return - The given string, with every other word reversed
Example - (reverse("Reverse this string, please!") returns "Reverse siht string, !esaelp")
Pseudocode - Split the string on spaces
             Map a new string where if the element is even numbered keep it normal, otherwise split reverse join it
             Join that new array together and trim the whitespace.
*/

function reverse(str){
    return str.split(' ')
              .map((x,i) => i % 2 == 0 ? x : x.split('').reverse().join(''))
              .join(' ')
              .trim()
  }