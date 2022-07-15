/*
Parameters - String of words
Return - String of words with first letter and the letter 'ay' on the end of each individual word
Example 'Pig latin is cool' = igPay atinlay siay oolcay
Pseudo- split, map, rearrange, join
*/
function pigIt(str){
    return str
      .split(' ')
      .map(x => `${x.slice(1)}${x.slice(0,1)}ay`)
      .join(' ')
  }