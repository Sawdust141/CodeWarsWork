/*
Parameters - 2 Strings. First is count of individual good troops. Second is individual count of evil troops.
Return - Return who has the most power, taking into account the power of individual troops. (Wizards are woth more than hobbits)
Example - '1 1 1 1 1 1', '1 1 1 1 1 1 1'), Returns 'Battle Result: Evil eradicates all trace of Good'
Pseudocode -Split each string passed in on the passes  (' '),
            Multiply each element by the appropriate power level.
            Compare size of good vs evil. Return who is the winner.
*/

function goodVsEvil(good, evil){
    good = good.split(' ')
    evil = evil.split(' ')
    let g = good[0]*1 + good[1]*2 + good[2]*3 + good[3]*3 + good[4]*4 + good[5]*10
    let b = evil[0]*1 + evil[1]*2 + evil[2]*2 + evil[3]*2 + evil[4]*3 + evil[5]*5 + evil[6]*10
    if (g > b) {
      console.log('good')
      return 'Battle Result: Good triumphs over Evil'
    } else if (b > g) {
      console.log('bad')
      return 'Battle Result: Evil eradicates all trace of Good'
    }else{
      console.log('even')
      return 'Battle Result: No victor on this battle field'
    }
} 