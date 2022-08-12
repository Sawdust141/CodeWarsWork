/*
Parameters - A string of letters to count
Return - An object of key value pairs that show each unique letter in the string and how many of those letters are in the string.
Example - String = aba, return = {'a': 2, 'b': 1}
Pseudocode - Initialise answer object variable. forEach through split input. Create an key for each letter as each letter is found, 
             if the letter has already been found, increment that element by one.
             Return the answer object.
*/

function count (string) {
    const letters = {}
    string.split('').forEach(x => letters[x] ? letters[x] ++ : letters[x] = 1)
    return letters
}