//Loops

//Summation

/*
Often we need to write code to repeatedly do some task until a certain condition is met. This is where we can use loops! For example, let's consider how to sum the numbers 1,2,3 and 4 in a loop:

First we start with 1 and add this to a sum. Then we move to 2, add this to sum... and so on until we reach 4.

Each time we add to the sum is an iteration. We iterate until we reach our exit condition when the value is greater than 4.

 For a more real-world example check out details!

For Loop
Let's take a look at a JavaScript for loop:

let sum = 0;
for(let i = 1; i <= 4; i++) { 
    sum = sum + i; 
}
This loop sums every number up to 4 using an index i which starts at 1 and is incremented each iteration.

The i variable will start at 1 (let i = 1).
It will be added to the sum (sum = sum + i).
Then we will check the condition to see if we should continue the loop (i <= 4). Since i, at this point, is 1 and indeed less than or equal to 4, we'll continue.
We add one to i (i++) and the loop starts again with i now being 2.
Run steps 2-4 until the condition breaks us out of the for loop.
The loop continues until the condition (i <= 4) is false. In this example, when i got to 5, it did not meet the condition set so the loop ends and is no longer executed. The result of the above is we added 1, 2, 3, and 4 to our sum, resulting in a total sum of 10.

 Let's break this loop down into four components in details!

 Your Goal: Complete the Summation
We want to write a function summation that will find the sum of all the values from 1 to (and including) n. The value n is passed into our function.
Similar to the for loop above, you can initialize some value i to start at 1. The value should reach n but never exceed it.

Details
Often we need to write code to repeatedly do some task until a certain condition is met. This is where we can use loops! For example, let's consider how to sum the numbers 1,2,3 and 4 in a loop:

First we start with 1 and add this to a sum. Then we move to 2, add this to sum... and so on until we reach 4.

Each time we add to the sum is an iteration. We iterate until we reach our exit condition when the value is greater than 4.

 For a more real-world example check out details!

For Loop
Let's take a look at a JavaScript for loop:

let sum = 0;
for(let i = 1; i <= 4; i++) { 
    sum = sum + i; 
}
This loop sums every number up to 4 using an index i which starts at 1 and is incremented each iteration.

The i variable will start at 1 (let i = 1).
It will be added to the sum (sum = sum + i).
Then we will check the condition to see if we should continue the loop (i <= 4). Since i, at this point, is 1 and indeed less than or equal to 4, we'll continue.
We add one to i (i++) and the loop starts again with i now being 2.
Run steps 2-4 until the condition breaks us out of the for loop.
The loop continues until the condition (i <= 4) is false. In this example, when i got to 5, it did not meet the condition set so the loop ends and is no longer executed. The result of the above is we added 1, 2, 3, and 4 to our sum, resulting in a total sum of 10.

 Let's break this loop down into four components in details!

 Your Goal: Complete the Summation
We want to write a function summation that will find the sum of all the values from 1 to (and including) n. The value n is passed into our function.
Similar to the for loop above, you can initialize some value i to start at 1. The value should reach n but never exceed it.

Task
Complete the Summation
We want to write a function summation that will find the sum of all the values from 1 to (and including) n. The value n is passed into our function.
Similar to the for loop above, you can initialize some value i to start at 1. The value should reach n but never exceed it.
*/
function summation(n) {
    let sum = 0;

    for (let i=1; i<=n; i++) {
        sum = sum +i        
    }
    return sum;}

module.exports = summation;

//Factorial

/*
Factorial
In mathematics, a factorial is often denoted with an exclamation mark !. A factorial is the product of all positive integers greater than 0 up to and including the factorial number n.

Let's take a look at a few examples of factorials:

5! = 5 * 4 * 3 * 2 * 1 = 120

3! = 3 * 2 * 1 = 6

2! = 2 * 1 = 2

As you can see above, 5!, pronounced "five factorial", is 5 * 4 * 3 * 2 * 1. The number n, in this case 5, is multiplied by every whole number below it greater than 0, resulting in a product of 120.

Details
Factorial to Loop
Let's say we wanted to find the factorial of five: 5!

We know this to be 5 * 4 * 3 * 2 * 1. So how do we program our loop to multiply this out?

First we'll want to initialize the resulting value:

let result = 1;
Next we'll want to work on our for loop. Remember that we can break it down into four components:

for ([initialization]; [condition]; [update]) {
   statement
}
We'll need to initialize our index i to start at 1:

let i = 1; 
Then we'll want to set the condition that we want to reach the number 5:

i <= 5;
Then we'll want to set the update to increment our index i:

i++;
Finally, our statement will be to multiply the result by the new index i:

{ result = result * i; }

*/
function factorial(n) {
    let result =1

    for(let i=1; i<=n; i++) {
    result = result*i;    
    }
    return result;
}   

module.exports = factorial;

//Scream
//String loops
/*
So far we have used loops to add and multiply to some total integer value.

However, there are many other uses for loops! Let's think about how we can use them for strings. 

Let's add some exclamation marks to "Hello World"!

let str = "Hello World";
for(let i = 1; i <= 5; i++) {
    str += "!";
}
console.log(str); // Hello World!!!!!
 Use the + operator to add two or more strings together!

In this case above, we are adding an exclamation mark to our str every iteration. We iterate 5 times so we end up with 5 exclamation marks at the end of "Hello World".

Details
Scream to Loop
Remember the four parts in our for loop:

for ([initialization]; [condition]; [update])
   statement
We'll begin with an empty string:

let str = ""; 
During our initialization, we'll define our index variable:

let i = 1;
And we'll keep counting until we reach our value n:

i <= n;
Once again, we will update by incrementing our index i:

i++;
Finally our statement. This is the only major difference from the last two stages. We'll want to add to our string:

{ str += "a" }
 As mentioned in the previous two stages, += is short-hand for str = str + "a". This will append our two strings together with "a" being added to the end of str.


Task
Let's create a function scream which will take in a value n and return a string with the letter "a" repeated that many times. For example:
scream(5); // "aaaaa"
scream(10); // "aaaaaaaaaa"

*/
function scream(n) {
    let scream = "";
    for(let i = 0; i < n; i++) {
        if( i % 2 === 0) {
        scream += "a";
    }
        else{
        scream+= "A";
        }
    }
    return scream;
}

module.exports = scream;

//Modulus Operator

/*
Time to learn a new operator: %

This operator is called the modulus operator. It will tell us the remainder of a division.

When you divide 8 by 3 you get 2 and two-thirds. Or 2 with a remainder of 2.

The expression 8 % 3 evaluates to that remainder: 2

Let's take a look at a few examples:

console.log(8 % 3) // 2
console.log(5 % 2) // 1
console.log(7 % 4) // 3

Task
Let's modify our function to return a scream alternating between lower and capital case. For example:
console.log( scream(5) ); // aAaAa
console.log( scream(10) ); // aAaAaAaAaA
*/
function scream(n) {
    let scream = "";
    for(let i = 0; i < n; i++) {
        if( i % 2 === 0) {
        scream += "a";
    }
        else{
        scream+= "A";
        }
    }
    return scream;
}

module.exports = scream;


// Top Double

/*
Details

While Loop
A new useful type of loop for this challenge is the while loop:

while(b > 5) {
    // do something
}
Below you can see we are simply providing a condition true that this statement will execute 
until that condition is false.

Also helpful is the break statement:

while(true) {
    if(a > 2) {
        // exit the loop
        break;
    }
}
Once break is hit, we will exit the loop. Even though the condition is true the break statement still gives us a way to exit the loop.

 You can also exit a loop by using return, which will exit the function and return the value you designate.

Task
Using whichever loop you'd like, complete the top double function to find the largest double for the value that is below the top.
This one is a bit tricky! You might double the value before realizing it is larger than top. You'll need to go back and return the value before
that value that exceeds the top.
*/

function topDouble(value, top) {
    while(value < top)  {
         value *= 2;
        
        }
         return value / 2
}

module.exports = topDouble;
