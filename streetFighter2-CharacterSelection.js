/*
Parameters - An array of fighters, Starting position on the array of fighters, the movement of a cursor across the array.
Return - The names of the every fighter the cursor passes over, based on the 'moves' parameter
Example - 

Fighters:
| Ryu  | E.Honda | Blanka  | Guile   | Balrog | Vega    |
| Ken  | Chun Li | Zangief | Dhalsim | Sagat  | M.Bison |

Position: (0,0) (means starting on Ryu)

Moves: ['up', 'left', 'right', 'left', 'left']

This setup will return ['Ryu', 'Vega', 'Ryu', 'Vega', 'Balrog']

Pseudocode -Set variables for each number in 'position' variable
            Map array, use switch case to react to directional inputs, move within array appropriately
            Wherever each move ends up, take that position and return it to the array being created.
*/

function streetFighterSelection(fighters, position, moves){
    let y = position[0]
    let x = position[1]
    return moves.map(move => {
      switch (move) {
        case 'up': y = 0; break;
        case 'down': y = 1; break;
        case 'left': x = (x +5) % 6; break;
        case 'right': x = (x +1) % 6;break;
      }
      return fighters[y][x]
    })
  }