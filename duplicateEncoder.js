/*The goal of this exercise is to convert a string to a new string 
where each character in the new string is "(" 
if that character appears only once in the original string, 
or ")" if that character appears more than once in the original string. 
Ignore capitalization when determining if a character is a duplicate.*/

/*
Parameters - Letters and symbols
Return - A string of brackets showing if each letter is unique in the string
[( is unique.] [) is not]
Example - din = (((, recede = ()()()
Pseudocode - Put into lower case and split into array
             check if each element has the same first and last index, if they do, return (, if not, return ).
             join the array back together and return
*/

function duplicateEncode(word){
    return word
      .toLowerCase()
      .split('')
      .map((x,i,a) => a.indexOf(x) == a.lastIndexOf(x) ? '(' : ')')
      .join('')
  }