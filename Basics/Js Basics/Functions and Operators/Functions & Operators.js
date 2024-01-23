// Get Message

/*
Task
In the getMessage function return a string. 
It can be any string that you choose!
*/

function getMessage() {
    return "Abigirl";
     
}
module.exports = getMessage;

//Add Two

/*
Task
Complete the addTwo function to take an input and add 2 to it.
Return that sum.
*/
function addTwo(input)  {
    const output = input + 2;

    return output;
    
}
module.exports = addTwo;

//Multiply  Inputs

/*
Task
Take two inputs in our product function and multiply them together 
using the * operator. Return this value.
*/
function product(a3, a4 ) {
    return a3*a4 ;
    
}
module.exports = product;


// Division Operator

/*
Task
Take two inputs in our product function and multiply them together using the * operator. Return this value.
*/
function average(a5, b5, c5, d5) {
    return (a5 + b5 + c5 +d5)/4;
}

module.exports = average;

//Random

/*
Task
Inside getRandom, get a random number from the Math.random() function.
Then, return that number!
*/
function getRandom() {
    const randomNumber = Math.random();
    return randomNumber;
}

module.exports = getRandom;
console.log(getRandom());


//Math  Floor

/*
Task
Take the argument x and use Math.floor to turn it into an integer 
without the values after the decimal place.
Once you have this floored value, return it!
*/
function getFloor(x) {
    return Math.floor(x);    
}

module.exports = getFloor;



