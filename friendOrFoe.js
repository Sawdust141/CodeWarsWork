/*Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours!
Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]*/

/*
PREP
Takes in an array of strings.
Must return new array, with only strings 4 letters in length.
Kieran (longer than 4 letters) = Not returned
Mark (exactly 4 letters long) = Returned.
Return filtered version of given array,
filtering for length of each element.
*/
function friend(friends){
    return friends.filter(x => x.length == 4)
  }