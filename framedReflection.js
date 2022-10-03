/*
Parameters - A string to be reflected and framed with *'s
Return - The string, returned reversed, and realigned to the right, with a line of *'s all around the outside.
Example - 'Hello World' returns 

*********
* olleH *
* dlrow *
*********

Pseudocode -Find the longest word (we will need this to align things later)
                split the text and forEach through, saving the length of the longest word.
            Create answer variable by mapping new array from split text.
                If the word is not as long as the longest word, add spaces to it until it is.
                return the word after reversing it and adding a space and * to the beginning and end
            Add *'s to the beginning and end of the answer array
            return the joined arraay
*/

function mirror(text){
    let maxlen = 0
    text.split(' ').forEach(x => {
      if (x.length > maxlen) maxlen = x.length
    })
    let answer = text.split(' ').map(x => {
      while (x.length < maxlen) x = ' ' + x
      return `* ${x.split('').reverse().join('')} *`
    })
    answer.unshift(`${'*'.repeat(maxlen + 4)}`)
    answer.push(`${'*'.repeat(maxlen + 4)}`)
    return answer.join('\n')
}

/*
This answer is okay, but there is a better way.
*/

function mirror(text){
    let maxlen = Math.max(...text.split(' ').map(x => x.length))
    let answer = text.split(' ').map(x => `* ${x.split('').reverse().join('')}${' '.repeat(maxlen - x.length)} *`)
    return [`${'*'.repeat(maxlen + 4)}`, ...answer, `${'*'.repeat(maxlen + 4)}`].join('\n')
}

/*
In this answer, I use two loops, but the first one is very short, and the second map does everything.
The second map adds the spaces and reverses the word all in one.
The return line is a little messy, but it adds the stars to the beginning and end and joins all in one.
Again, not the prettiest, but this should be more efficient.
*/