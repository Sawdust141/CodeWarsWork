/*
Parameters - yourType, oppenentType, attack, defense
Return - the total damage. Certain types have certain effectiveness against other types.
         Attack formula: damage = 50 * (attack / defense) * effectiveness
         Where:
         attack = your attack power
         defense = the opponent's defense
         effectiveness = the effectiveness of the attack based on the matchup (see explanation below)
         effectiveness listed, but won't specify here.

Example - calculateDamage(water, fire, 10, 5) =  50 * (10 / 5) * 2 = 200. Return 200.
Pseudocode -Create dictionary of what beats what. 
            I can use this to determine if yourType is strong against the opponentType
            IN ADDITION if is beaten by the other I know it is weak against the opponentType
            Don't create any variables, just return the formula with the effectiveness calculated based on an if statement checking the types in the beats dictionary.
*/

function calculateDamage(yourType, opponentType, attack, defense){
    let beats = {'fire': 'grass',
                 'water': 'fire',
                 'grass': 'water',
                 'electric': 'water'}
    if (beats[yourType] == opponentType) return 50 * (attack / defense) * 2
    else if (beats[opponentType] == yourType|| yourType == opponentType) return 50 * (attack / defense) * 0.5
    else return 50 * (attack / defense)
  }