/*
Parameters - A string sentence to convert
Return - The string, with every letter converted to the NATO alphabet equivalent. Punctuation remains, spaces between the words of the STRING are removed
Example - to_nato('If, you can read?') returns India Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ?
Pseudocode -Split the word into an array of letters.
            Create a new array using map on that array, returning the value of each letter in the NATO dictionary,
                if we hit something that isn't in the dictionary (punctuation or spaces) return just the original value (a piece of punctuation or a space)
            Filter the outcome for single space elements
            Join together with spaces and return
*/

function to_nato(words) {
	return words.split('')
                .map(x => NATO[x.toLowerCase()] ? NATO[x.toLowerCase()] : x)
                .filter(x=> x != ' ')
                .join(' ')
}