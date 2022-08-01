/*
Parameters - A word, and a list of words that may or may not be an anagram of the first word
Return - The words in the list that are anagrams of the first word
Example - 'abba', ['aabb', 'abcd']) => ['aabb']
Pseudocode - Iterate through the list of words, 
            check if the first word, after being alphabetised, matches any of the words in the list, after being alphabetised. 
            If they match, add it to a new array. Return the new array
*/

function anagrams(word, words) {
    return words.map((x, i) => {
      if (x.split('').sort().join('') == word.split('').sort().join('')) return words[i]
    }).filter(x => x != undefined)
}