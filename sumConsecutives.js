/*
Parameters - An array of numbers
Return - The same array, but if there are any repeated consecutive numbers, add them together into one element
Example - [1,4,4,4,0,4,3,3,1] returns [1,12,0,4,6,1]
Pseudocode -Create answer variable
            For loop up to the length of the array
            if this element matches the element before it, add its value to the last element in the answer variable
            if it doesn't, push this element to the answer array
            return the array
*/

function sumConsecutives(s) {
    let answer = []
      for(i = 0; i < s.length; i++) {
        s[i] == s[i-1] ? answer[answer.length-1] += s[i] : answer.push(s[i])
      }
    return answer
}

/*
I feel like using a for loop is a little messy, Will look for a simpler solution and come back
There are some interesting uses of reduce to find the solution. Will look deeper into this.
*/

function sumConsecutives(s) {
  return s.reduce((prev, curr, i, a)=>{
    curr != a[i-1] ? prev.push(curr) : prev[prev.length -1] += curr
    return prev
  }, [])
}

/*
After looking at the reduce function for a while, this is what I have worked through from other examples.
The most important things to note are:
    Ensuring that the reduce is returning an array (the empty square brackets at the end of the recude function)
    Editing the prev variable on one line, THEN returning it on the next line. 
The reason reduce is more useful and cleaner looking here is because 
    You can return the outcome of the function
    Using the inbuilt 'prev' or previous value, you can carry a value through the whole function,
      this is used to store the array we will return at the end, but you MUST tell the function that you want it to store an array
        this is done by placing square brackets just before the end of the functinon.
*/