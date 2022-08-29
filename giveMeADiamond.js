/*
Parameters - A number
Return - Diamond drawn in ascii with a height and width of the given number
Example - 3 returns " *\n***\n *\n" or :
 *
***
 *
Pseudocode -Create Diamond string variable.
            For loop, but initialise at 1 and increment +2 every time as the diamond will only ever grow 2 stars in width at a time
            Add spaces and stars as appropriate. Spaces will equal the height of the diamond, minus the number of stars, halfed (because we only need spaces) at the begining of the line.
            The number of stars will start at 1 and go up by 2 until it reaches the height (and width) of the diamond.
            Then Use an inverse forloop, coming back down from the given height by decrementing by 2, the same rules for stars and spaces apply.
            Return the diamond string.
*/

function diamond(n){
    if (n % 2 == 0 || n < 1) return null
    let diam = ''
    for(i = 1; i <= n; i += 2){
      diam += ' '.repeat((n - i)/2)
      diam += '*'.repeat(i)
      diam += '\n'
    }
    for(j = n - 2; j >= 1; j -= 2){
      diam += ' '.repeat((n - j)/2)
      diam += '*'.repeat(j)
      diam += '\n'
    }
    return diam;
  }