/*
Parameters - Lottery Tickets, the number of mini-wins needed to 'Win'
Return - If the number of mini-wins on the tickets add up to the number of wins needed, return 'Winner!', else return 'Loser!'
Example - [ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ], 2. 
        These are three tickets. Each ticket is an array of two values, a string and a number. 
        If the string contains a letter whose ascii value is equal to the number, that ticket is a mini-win. 
        If the number of mini-winning tickets equals the 'win' parameter passed in at the beginning of the function, the player wins. 
        Otherwise, they lose.
Pseudocode -forEach through all the tickets.
                Split the string element of the ticket.
                forEach of those letters, if they match that ticket's number element, decrement win.
            If win < 1, return win, else lose.
*/

function bingo(ticket, win){
    ticket.forEach((mini, index) => {
      mini[0].split('').forEach(x =>{
        if(x.charCodeAt(0) == mini[1]) win--
      })
    })
    return win < 1 ? 'Winner!' : 'Loser!'
}