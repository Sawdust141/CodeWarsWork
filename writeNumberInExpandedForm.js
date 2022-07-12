/*Prep
Passing in a number
Returning a broken up version of each digit multiplied by its order of magnitude,
  digits starting with 0 are removed from the returned answer
Example: 5120 = 5000 + 100 + 20 (No 0 in the units)
Possible recursive
*/

function expandedForm(num) {
    //Create global variable to track how many orders of magnitide we have mulitplied by
    //let OrdOfMag = 10
    //Create answer string
    //While num greater than or equal to 1 
      //If the digit is not 0
      //Append the value of the lowest unit,
      //multiplied by the order of magnitude to the beginning of the answer string with an add '+' 
    //Reassign value of num to be 1/10th its size
    //Slice off the + at the end of the answer
    let ordOfMag = 1
    let answer = ''
    while (num >= 1) {
      if (Math.floor(num % 10) != 0) {
        answer = `${(Math.floor(num % 10) * ordOfMag).toString()} + ${answer}`
      }
    num = Math.floor(num / 10)
    ordOfMag *= 10
    }
    return answer.slice(0, -3)
  }

  //On further research, it would be much easier to split these digits into an array of digits.
  //I will refactor a cleaner version of this tomorrow