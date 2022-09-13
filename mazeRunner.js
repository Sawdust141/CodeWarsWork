/*
Parameters - A 2 dimensional array; 0 is a path, 1 is a wall, 2 is the start, 3 is the end. Directions around the given maze; N,E,S,W.
Returns - If the directions guide you into a wall, or out of the boundaries of the maze, return 'Dead'
          If the directions stop before you reach the exit or hitting a wall, return 'Lost'
          If the directions guide you to the exit, at any point (the direction may keep going after hitting the finish spot), return 'Finish
Example - maze = [[0,0,0],[0,1,0],[2,1,3]]. directions = [N,N,E,E,S,S] 
          returns Finish, because the wall was avoided and we didn't go out of bounds, and the directions guided us to the finish.
Pseudocode -Find the starting location - forEach if the array contains (2), set them as two separate variables.
            for loop, as long as the directions.
                Move according the to directions
                if we moved out of bounds, or hit a wall, immediately return 'Dead'
                if we found the finish, immediately return 'Finish'
            If we get to the end of the for loop, we did not find the exit so return 'Lost'
*/

function mazeRunner(maze, directions) {
    let x
    let y
    maze.forEach((el,i) => {
      if(el.includes(2)){
        y = i
        x = el.indexOf(2)
      }
    })
    for (i = 0; i < directions.length; i++) {
      switch (directions[i]){
      case 'N': y --; break;
      case 'S': y ++; break;
      case 'W': x --; break;
      case 'E': x ++; break;
      }
      if (x < 0 || y < 0 || x > maze.length -1 || y > maze.length -1) return 'Dead'
      else if (maze[y][x] == 1) return 'Dead'
      else if (maze[y][x] == 3) return 'Finish'
  
    }
    return 'Lost'
  }