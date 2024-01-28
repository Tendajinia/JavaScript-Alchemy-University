// Conditionals

//Is Equal

/*
Task
Let's complete the isEqual function!
If a is equal to b return true.
*/

//Solution
function isEqual(a, b) {
    if(a===b);
    return true;    
}
module.exports = isEqual;
console.log();

//Is Not Equal
/*
Task
If a is not equal to b return true.
*/
function isNotEqual(a, b) {
    if(a!==b){
        return true;
    }
    else {
        return false; 
    }
}
module.exports = isNotEqual;
console.log();

//Else

/*
Else Statement
In addition to the if statement we also have an else statement. The else statement runs only if the if condition is not true.

Details
Booleans as Conditions
Consider the following code:

const a = true;

if(a === true) {
    console.log('hi!'); // hi!
}
 This will always log "hi!" because the expression a === true evaluates to true.

Is there a simpler way to accomplish this? 

Sure is! Consider:

const a = true;

if(a) {
    console.log('hi!'); // hi!
}
 In this case the boolean itself is the condition upon which we are branching.

 You can also provide other values in an if condition! Any value considered truthy will run the statement. We'll discuss this further when we dive into data types!

Task
Let's update our isNotEqual function to also handle the case where a is equal to b.

If a is not equal to b return true. Otherwise, return false.
*/

//Solution
function isNotEqual(a, b) {
    if(a!==b){
        return true;
    }
    else {
        return false; 
    }
}
module.exports = isNotEqual;
console.log();

//Greater than

/*
Task
Given two arguments, first and last, determine which one is greater.
If first is greater than last, return first!
If last is greater than first, return last!
If they are equal, do not return anything.
*/

//Solution
function greater(first, last) {
    if(first > last){
        return first;
    }
    else if(last>first){
        return last;
    }
    else{
        return undefined;
    }    
}
module.exports = greater;

//Is enough
//Greater Than Or Equal To

/*
Details
Returning Early
It should be noted that using return always exits the function immediately.

Doing something like this:

function isEqual(a,b) {
    if(a === b) {
        return true;
    }
    else {
        return false;
    }
}
Accomplishes the same functionality as:

function isEqual(a,b) {
    if(a === b) {
        return true;
    }
    return false;
}
In both cases, the return false is only reached if a is not equal to b. If a is equal to b in the second example, the return true will exit the function and the last line will never be reached.

Let's consider another example, however:

function isEqual(a,b) {
    if(a === b) {
        console.log('They are equal!');
    }
    else {
        console.log('They are not equal!');
    }
}
 Removing the else here would not work! 

function isEqual(a,b) {
    if(a === b) {
        console.log('They are equal!');
    }
    // this line will always be reached
    console.log('They are not equal!');
}
 In this case, the last line will always be reached.

Task
We have a function isEnough that has two parameters: cost and money.
Your goal is to determine if the money is enough to cover the cost. The money should be at least as great as the cost. If it's greater, no problem! Either way, return true.
If the money isn't enough, return false.
*/

//Solution
function isEnough(cost, money) {
    if(cost<=money) {
      return true;
    }    
    return false;
}

module.exports = isEnough;


//Else If

/*
Let's imagine we're building a website that requires users to have a 
subscription to access content. We want to encourage users to try it out so we add a free trial.

Let's update the canAccess function to allow access if the user has either a subscription or a free trial.
If either purchasedSubscription or freeTrial are true, return true. Otherwise return false.
*/

//Solution
function canAccess(purchasedSubscription, freeTrial) {
    if(purchasedSubscription){
        return true;
    }
    else if(freeTrial){
        return true;        
    }
    else{
        return false;
    }    
}

module.exports = canAccess;
