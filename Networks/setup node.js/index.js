/*const myName = "Abigirl";
const message = `Hello, ${myName}!`;
console.log(message);

Running a script
*/

// this is my name
const myName = "Abigirl";

//const message = `Hello, ${myName}!`;

console.log(message); 

/* in the terminal
run the file by typing node index;
*/
const message = `Hello, ${process.argv}!`;

console.log(message);

/*
Run a Script
Now that we have a text editor, let's write a script and try running it!

Create a new file in your text editor and call it index.js

Add the following code to that file:

// this is my name, feel free to use yours :)
const myName = "Dan";

const message = `Hello, ${myName}!`;

console.log(message);
Save this file somewhere on your file system. Now in the terminal, 
let's navigate to where you saved the file.

Command Line Arguments
Instead of writing myName inside of the file, we can pass it from the command line using process.argv!

Let's try editing the index.js file we wrote above.

const message = `Hello, ${process.argv}!`;

console.log(message);
Now we can pass in an argument to our index.js file by typing node index Dan.

It turns out that process.argv is an array of all argument values. This includes the path to node as well as the script.

If we want to access the first argument we pass in after the script variable, we'll need to access it at index 2:

const message = `Hello, ${process.argv[2]}!`;

console.log(message);


*/