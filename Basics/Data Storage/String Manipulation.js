// Starts with X

/*
Details
Comparing Strings
Comparing strings is actually quite simple! We can use the comparison operators we learned about in previous tutorials: ===, < and >.

For ===, we can do a case-sensitive comparison of the strings to determine if they are the same:

console.log( 'a' === 'a' ); // true
console.log( 'a' === 'A' ); // false
console.log( 'a' === 'a ' ); // false
Notice that the comparison is case-sensitive and requires exact equality, including whitespace. We'll learn how to trim whitespace and ignore casing in future exercises.

We can also use > and < to determine if a string comes before another:

console.log( 'a' > 'b' ); // false
console.log( 'a' < 'b' ); // true
console.log( 'abc' < 'apple' ); // true
The string comparison will sort each letter in turn, which is why 'abc' is less than 'apple'.

Further language comparison options are available using the string method localeCompare.

Task
Complete the startsWithX function to determine if the first character of the string argument is the lower-case x.
If the first character is x return true. If not, return false.
*/

function startsWithX(string) {   
    return string.toLowerCase().startsWith("x")     
 }
 console.log("x".toLowerCase() === "x");
 console.log("x".toUpperCase() === "x");
 
 module.exports = startsWithX;

 //Starts with Casing

 /*
 Task
 Handle x and X
Let's update our startsWithX function to return true for an upper-case X as well as a lower-case x.
*/
function startsWithX(string) {
   
    return string.toLowerCase().startsWith("x")
     
 }
 console.log("x".toLowerCase() === "x");
 console.log("x".toUpperCase() === "x");
 
 module.exports = startsWithX;
 // Ends with X
 /*
 Task
 Complete the endsWithX function by detecting if the last character in the string is a lower-case x or
  an upper-case X. Return true if the last character is either lower-case x or upper-case X, false 
  otherwise.
 */
 function endsWithX(string) {

    if (string.toLowerCase().endsWith('x') || string.toUpperCase().endsWith('X')) {
        return true;
    }
    else {
        return false;
    }
}
console.log("x".toLowerCase()==="x");
console.log("x".toUpperCase()==="X");

module.exports = endsWithX;


 //Is All X

 /*
 Task
 Complete the function isAllX to determine if the entire string is made of lower-case x, upper-case X, or a mix of both. Return true if they are, false if not.
 
 */
 function isAllX(string) {
    for(let i=0; i<string.length; i++){
        if(string[i]!=="x" && string[i]!=="X")
        return false

    }
        return true
}
console.log(isAllX("Xx")); // true
console.log(isAllX("xAbX")); // false
module.exports = isAllX;

// Find first x / indexOf
/*
Task
In the string argument find the index of the first lower-case "x" and return it.
*/
function findFirstX(string) {
    return string.indexOf('x');

}   

module.exports = findFirstX;

//Split at X / Slice Method
/*

Details
In the string argument find the index of the first lower-case "x" and return it.
Let's find the longer half of the string before and after the x!

First, you'll need to find the lower-case x.
Once you've found the x, split the string in half. The first half will be the string before the x, the second half will be the string after the x.
Take the longer string and return it!
*/
function splitAtX(string) {
    let xIndex = string.indexOf('x');
    let firstHalf = string.slice(0, xIndex);
    let secondHalf = string.slice(xIndex + 1);
    return firstHalf.length >= secondHalf.length ? firstHalf : secondHalf;   
  }
/*
        e.gs
        splitAtX("Happyxdays"); // "Happy"
        splitAtX("10xDeveloper"); // "Developer"
        */
  module.exports = splitAtX;


