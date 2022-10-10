/*
Parameters - A string of words
Return - Each word's first three letters converted into hexcode, returned as an array
Example - "Hello, my name is Gary and I like cheese." returns ['#48656c', '#6d7900', '#6e616d','#697300','#476172','#616e64','#490000','#6c696b','#636865']
Pseudocode - split the given string into words and start map
                for loop for 3, if the word runs out of letters before 3, return 00, otherwise add the ith letter of the word converted to hex.
*/

function wordsToHex(words) {
    return words.split(' ').map(word => {
      let hex = '#'
      for (i=0;i<3;i++) word[i] ? hex += String(word.charCodeAt(i).toString(16)) :  hex += '00'
      return hex
    })
  }