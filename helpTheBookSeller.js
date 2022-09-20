/*
Parameters - List of books, List of book categories
Return - The number of books in each of the categories
Example - {"ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"}, {"A", "B", "C", "W"} returns (A : 20) - (B : 114) - (C : 50) - (W : 0)
            Because the first letter is the means we use to categorise the books, we need only to look at the first letter and then number at the end.
            We add the number of books with the same first letter together and return it for each category.
Pseudocode -Create count object
            forEach Category, create key in the count object and give it a value of 0
                Within that same forEach, forEach book, if the first letter of the book matches the Category (from the outer forEach) add the number of that book to the count obj for that letter.
            Return a really messily put together reconfiguration of the object. I didn't know how to do this, I used another solution.
            This solution maps a new array from the listOfCat array.
                Creating a string made of the category letter and the count object of that letter's value. Then some messy string interpolation and joining the array together.
*/
function stockList(listOfArt, listOfCat){
    if (!listOfArt.length) return ''
    let count = {}
    listOfCat.forEach(cat => {
      count[cat] = 0
      listOfArt.forEach(book => {
        if (book[0] == cat) count[cat] += Number(book.split(' ')[1])
      })
    })
    return listOfCat.map(x => {
      return `(${x} : ${count[x]})`;  
    }).join(' - ');  
}