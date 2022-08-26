/*
Parameters - The title of a book incorrectly capitalised, a list of exception words that are never capitalised in titles.
Return - The inputted title, converted into title case (first word capitalised, every other word capitalised except the inputted exception words)
Example - 'a clash of KINGS', 'a an the of' returns 'A Clash of Kings'
Pseudocode - Split title between spaces. 
             forEach, first word is capitalised
             Then, if word is in exception list, word is not captialised
             else word is capitalised
             join and return.
             Some words are passed in fully capitalised, so make sure to always return in lowercase
*/

function titleCase(title, minorWords) {
    if (title == '') return ''
    minorWords ? minorWords = minorWords.toLowerCase().split(' ') : minorWords = ''
    return title.toLowerCase()
                .split(' ')
                .map((x,i) => minorWords.includes(x) && (i != 0) ? 
                  x.toLowerCase() 
                  : x[0].toUpperCase() + x.slice(1).toLowerCase())
                .join(' ')
}