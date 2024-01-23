
//Even Numbers

//isEven

/*
Task
Given an integer value num, determine if it is even.
If it is even, return true. Return false otherwise.

Example Usage:
console.log( isEven(1) ); // false
console.log( isEven(4
*/    
function isEven(num) {
    return num % 2 === 0;    
}
module.exports = isEven;

//Smaller Number

/*
Task
The function smallerNumber will be given two unequal numbers: num1 and num2.
Your goal is to find the smaller number and return it!
Example Usage:

console.log( smallerNumber(3, 5) ); // 3
*/
function smallerNumber(num1, num2) {
    if(num1>num2){
        return num2;
    }
    else{
        return num1;
    }  
}
module.exports = smallerNumber;

//Message interpolation

//Interpolate name

/*
Task
A string is stored in the variable fakeName.

Take this fake name and use it to replace every occurrence of "John" in the message.

Do not change the message in other way.

If your message does not match the expected message, the test cases will log both for you. You can see this
by expanding the "Log" in the test results.
*/

const fakeName = require('./fakeName');

const message = `
    Hello, ${fakeName}! You left a package at the office today.
    You can pick up tomorrow at 10am, ${fakeName}. 
    If not I will drop it off this weekend.
    Goodbye ${fakeName}!
`;

module.exports = message;

//Check Number

/*
The function checkNumber takes a single argument: a number num
The function should return the string positive if the number is positive, negative if the number is negative, and zero if the number is zero.
Example Usage:

console.log( checkNumber( -3 ) ); // negative
console.log( checkNumber( 0 ) ); // zero
console.log( checkNumber( 2 ) ); // posi
*/
function checkNumber(num) {
    if(num > 0){
        return "positive";
    }
    else if( num < 0){
        return "negative";
    }
    else{
        return "zero";
    }
}
module.exports = checkNumber;

//Max Sum
//Total Sum

/*
The function maxSum takes a number argument num.

Your goal is find the sum all of numbers, starting from 1, up to and including num.

For example, if num is 5, your sum would be 1 + 2 + 3 + 4 + 5 or 15.
*/

function maxSum(num){
    let sum = 0;
    for(let i= 0; i<=num; i++){
        sum = sum+i;
    }
    return sum;
}

module.exports = maxSum;

