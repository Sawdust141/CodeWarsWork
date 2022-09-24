/*
Parameters - A string sentence
Return - The inputted sentence, with each word having had their middle letters sorted into reverse alphabetical order.
Example - "sort the inner content in descending order"  returns  "srot the inner ctonnet in dsnnieedcg oredr"
Pseudocode - Split the sentence into words
		return first letter first, last letter last and in the middle:
		splice the word from 1 to -1 and sort
*/

function sortTheInnerContent(words){
    return words.split(' ').map(x => x.length == 1 ? x[0] : x[0] + x.slice(1,x.length-1).split('').sort().reverse().join('') + x[x.length-1]).join(' ')
  }