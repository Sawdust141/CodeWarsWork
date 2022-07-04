/* ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters
after it in the alphabet.
ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13.
If there are numbers or special characters included in the string, they should be returned as they are.
Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".*/

function rot13(message){
  //   Check that it is a letter
  //   Rotate letters by 13, if it goes too far, go back to the beginning
  //   get ascii, add 13,
    const KEY = 13
    let answer = ''
    let base = 0
    for (i = 0; i < message.length; i++) {
      if ((message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90)
          || (message.charCodeAt(i) >= 97 && message.charCodeAt(i) <= 122)) {
            message.charAt(i) == message.charAt(i).toUpperCase() ? base = 65 : base = 97
            answer += String.fromCharCode(((message.charCodeAt(i) - base) % 26 + KEY) % 26 + base)
      } else {
        answer += message.charAt(i)
      }
    }
    return answer
  }