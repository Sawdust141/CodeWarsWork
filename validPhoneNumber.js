/*
Parameters - A phone number to be checked for validity
Return - If the phone number is formatred correctly
Example - (123) 456-7890 returns true, (1111)-123 568 returns false
Pseudocode - Split into array, Check length of phone number and locations of brackets and spaces and return true if all are correct
*/

function validPhoneNumber(phoneNumber){
    let pn = phoneNumber.split('')
    return pn.length == 14 && pn[0] == '(' && pn[4] == ')' && pn[5] == ' ' && pn[9] == '-'
  }