/*
Parameters - A string of words from a given list, with no spaces or capital letters
Return - The string sorted into the order of the given list, with capital letters and spaces.
Example - "milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"
            returns "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"
Pseudocode -Hardcode the list provided in the brief
            Split the input so we can handle it letter by letter.
            Create temporary variable to build words from the input. Once we build a word that is included in the list, add it to separate array.
            Once all words are found, sort the new array by nesting loops.
            Use hardcoded list and go through the words in the array we created. 
            Because we have the words in the right order in the hardcoded list, we will find the words in the order we need them in and push them to a final array to be returned as our answer.
*/

function getOrder(input) {
    let list = ['burger','fries','chicken','pizza','sandwich','onionrings','milkshake','coke']
    let answer = []
    let temp = ''
    input.split('').forEach(x =>{
      temp += x
      if (list.includes(temp)) {
        answer.push(`${temp[0].toUpperCase()}${temp.slice(1)}` )
        temp = ''
      }
    })
    let sortedanswer = []
    for (var x of list) {
      answer.forEach(y => {
        if (`${x[0].toUpperCase()}${x.slice(1)}` == y) sortedanswer.push(y)
      })
    }
    return sortedanswer.join(' ')
  }