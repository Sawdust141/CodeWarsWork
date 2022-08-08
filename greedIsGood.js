/*
Parameters - An array of scores from 5 dice
Return - The score of the dice calculated according to the rules of the game "Greed"
Examples - Three 1s = 1000, Three 2s = 200 etc. Calculate the score and return it.
Pseudo -In order to check if there are three of something, I'll need to run and initial forEach, calculate the score for that group of three,
        remove them, then run another forEach to add up the remaining dice.
        1. Sort the dice scores
        2. forEach checking if each element and its following two elements.
        3. If a match, add appropriate score and remove them to stop the possibility of counting elements twice in the case of 4 match dice.
        4. Run next forEach catching other scores that don't rely on matching dice, just single dice scores.
*/

function score( dice ) {
  dice.sort()
  let score = 0
  dice.forEach((x,i) => {
    if (x == dice[i+1] && x == dice[i+2]) {
      x == 1 ? score += 1000 : score += x*100
      dice.splice(i,3)
    }
  })
  dice.forEach(x => {
    if (x == 1) score += 100
    if (x == 5) score += 50
  })
  return score
}