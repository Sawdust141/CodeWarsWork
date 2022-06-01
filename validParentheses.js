/*Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. 
The function should return true if the string is valid, and false if it's invalid. */


function validParentheses(parens) {
    let status = []
    let answer = true
    console.log(parens)
    parens.split('').forEach(x => {
      if(x == '(') {
        status.push('open')
      } else {
        if (status.length == 0) {
          answer = false
        } else {
          status.pop('open')
        }
      }
    })
    if (status.length > 0) {
      return false
    } else {
      return answer
    }
  }