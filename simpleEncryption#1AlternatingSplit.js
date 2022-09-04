/*
Parameters - A string to be encoded/ decoded, the number of times it needs to be encoded/decoded
Returns - An encoded/ decoded version of the given string. The code is created by selecting all even letters in the string, then all the odd letters.
          This can be repeated a number of times for further encryption. Decode by alternating between the first half of the string and the second half of the string.
Example - encrypt("012345", 1)  returns  "135024", encrypt("012345", 2)  returns "304152" because "135024"  ->  "304152" (it has been encoded twice)
Pseudocode - encrypt - Place it all in a while loop that checks if n is at zero, and decrement n at the end of every loop
                       Inside the while loop, create answer variable, 
                       for loop starting at 1, increment by 2, adding odd letters to the answer variable
                       second for loop starting at 0, increment by 2, adding even letters to the answer variable
                       assign text to equal the answer variable
                       decrement n, close while loop and return
             decrypt - Place it all in a while loop that checks if n is at zero, and decrement n at the end of every loop
                       Inside the while loop, create answer variable, 
                       for loop starting at 0 with two actions,
                       choose the letter at halfway through the text, then choose the letter at the beginning of the text.
                       Add them both to the answer variable. Use 'i' to increment the selection so we work through every letter.
                       What is the given text is odd? We use the rounded down half measure, the outside of these for loops we do the following:
                       if the length of the answer variable is equal to the length of the given text +1, at the last element from the given text to the answer variable.                       
                       assign text to equal the answer variable
                       decrement n, close while loop and return
*/

function encrypt(text, n) {
    if (text == null) return text
    if (n < 1) return text
    while (n > 0) {
      let answer = ''
      for(i = 1; i < text.length; i += 2) answer += text[i]
      for(i = 0; i < text.length; i += 2) answer += text[i]
      text = answer
      n --
    }
    return text
  }
  
  function decrypt(encryptedText, n) {
    if (encryptedText == null) return encryptedText
    while (n > 0) {
      let length = Math.floor(encryptedText.length/2)
      let answer = ''
      for (i = 0; i < length; i++){
        answer += encryptedText[length +i]
        answer += encryptedText[i]
      }
      if (answer.length < encryptedText.length) answer += encryptedText[encryptedText.length-1]
      encryptedText = answer
      n--
    }
    return encryptedText
  }