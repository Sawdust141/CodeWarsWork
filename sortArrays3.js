/*
Parameters - An array of course codes that contain the name and the date name-yymm eg: "web-1305"
Return - The codes sorted first by date, then by name
Example - ["web-1305","site-1305","web-1304","site-1304"] returns ["site-1304", "web-1304", "site-1305", "web-1305"]
Pseudocode - Split the codes on '-'
            Sort the sets of arrays by looking at their date first (element 1), if they are the same, sort them by their name (element 0)
            Join back together and return
*/

sortme = function( courses ){
    return courses.map(x => x.split('-')).sort((a,b) => {
      if (a[1] > b[1]) return 1
      if (a[1] < b[1]) return -1
      if (a[0] > b[0]) return 1
      if (a[0] < b[0]) return -1
    }).map(x => x.join('-'))
  }

/*
I'm not a fan of the if statements in the sort function, 
I've found other people's solutions but I'm not convinced they are any better, 
I think I should be nesting my sort functions, but I can't find how to do that.
*/