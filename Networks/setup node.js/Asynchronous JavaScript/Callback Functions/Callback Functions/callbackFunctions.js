// Running a Callback Function

/*
In JavaScript, functions are first-class objects. This
means, just like objects, 
functions can be stored in variables, returned from 
functions, and passed into other functions as arguments.

With callback functions, we will be passing functions
 into other functions to be called at a very specific time.

*/
/*
 * Runs a callback function immediately
 * @param {function} callbackFunction
 */

/*
Task
Complete Run Callback
Let's try this out for ourselves! Complete the function runCallback to invoke callbackFunction immediately.
*/
function runCallback(callbackFunction) {
    //invoke callbackFunction
    callbackFunction();    
}
runCallback(function 
callbackFunction(){
    return true;
});

module.exports = runCallback;


//Run Callback Async
// Asynchronous Callback



/*
For web-applications, where JavaScript is especially prevalent, asynchronous callbacks can be helpful in several scenarios:

AJAX requests to the server
Waiting for a user response
Animations
A simple example for asynchronous code is to use the web API setTimeout which will run code after a set amount of time:

setTimeout(function callback() {
    // the code to run after 1000 milliseconds
}, 1000);

// code down here runs synchronously (before the callback)
In setTimeout, we give it a callback to run after
 a period of time (in milliseconds). The first 
 argument to the function is the callback and 
 the second argument is the number of milliseconds
 to wait before running the callback function.
*/
/*
 * Runs a callback function immediately
 * @param {function} callbackFunction
 */

/*
Task
Let's modify runCallback to make callbackFunction run asynchronously.

Just like the example above, use setTimeout and invoke callbackFunction 1000 milliseconds 
(1 second) after runCallback has been called.
*/
function runCallback(callbackFunction) {
    setTimeout(callbackFunction,1000);    
}

module.exports = runCallback;


//Dialog Callback

/*
For this stage, we will create a callback that
 will be invoked by user interaction. Compare 
 this usage to the previous stage where our 
 callback was fired once
 an alotted amount of time had passed.

Imagine we have a basic dialog component 
for our web application. This Dialog component 
will use the JavaScript class, so we can create 
a new instance of the dialog whenever we need one.

Task
Complete Dialog Functions
We're going to write two functions for our dialog component:

onClose - This method will take a callback function
 as an argument and store it on our Dialog
  instance.
close - This function will be used to close the
 dialog. When we close 
the dialog, we'll want to call the callbackFunction.
In practice, when we want to use the Dialog
component, we could wire up some logic to 
execute when a specific dialog is closed. For
 example, we could refresh the data on the page:

const dialog = new Dialog();

dialog.onClose(function() {
    // refresh data on the page to reflect state 
    // changes made inside of the dialog
    refreshData(); 
});
 Remember in the last stage the callback was invoked asynchronously by setTimeout. This callback is similar! The main difference here is the close function is kicked off by 
 the user when they click out of the dialog.
*/


class Dialog {
    constructor() {
        // store the callback
        this.callbackOnClose = null;

        }
    

    onClose(callbackFunction) {
        // invoke the callback
        this.callbackOnClose = callbackFunction;

    }
    close(){
        if(this.callbackOnClose){
            this.callbackOnClose();
        }
    }
}

module.exports = Dialog;
/*
We initialize the callbackOnClose variable in the constructor to store the callback function.
In the onClose method, we store the provided callback function in callbackOnClose.
In the close method, we check if a callback is stored in callbackOnClose and then invoke it.
*/

//Dialog Callbacks
//Multiple Dialog Callbacks

/*
Task 
Accept Multiple Callback Functions
Let's add the ability to wire up multiple callback functions.

Each time onClose is called, we'll need to store
 an additional callback function on our
 dialog class. Once close is called, we'll
  invoke all of those callback functions.

 This may require you to initialize an array on 
 the Dialog class. If you need some place for 
 initialization code, the constructor is a great 
 place! Remember the constructor is called once,
 when a new instance is created.
*/

class Dialog {
    constructor() {
        this.callbackOnClose = [];
      
    }

    onClose(callbackFunction) {
        this.callbackOnClose.push(callbackFunction);
      
    }

    close() {
        this.callbackOnClose.forEach(callback => callback());
            
    }
}

module.exports = Dialog;
/*
push is a method that adds one or more elements to the end of an array. It returns the new length of the array after the addition of the element(s).

forEach is a method that executes
 a provided function once for each element in an array. It does not return anything 

Eg var fruit = [1, 2, 3, "apple", "banana", "grape"];
var arr2 = [];

fruit.forEach(function(element) {
  if (typeof element === "string") {
    arr2.push(element);
  }
});

console.log(arr2); // Output: ["apple", "banana", "grape"]
 */

//For Each Callbacks

/*
Task
 Complete the ForEach function
This function will take two parameters:

An array of elements
A callback function that we want to run for each element in the array
Be sure to call the callback function with both the current element in the array and the zero-based index.

Example:

forEach(['a','b','c'], (e,i) => {
    console.log(e,i);
});
The console.log line should run three times, logging:

a, 0
b, 1
c, 2
*/
function forEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i);
    }
}

module.exports = forEach;


//Map Callback

/*
map() is a method that creates
a new array populated with the results of calling a 
provided function on every element in
the calling array.

Task
Complete the Map Function
Map each element in the array to its new value returned by the callback function.

Just like the previous stage, you'll want to run a function on each element in the array. Only this
time you'll need to create a new array which you'll return at the end of the map iteration.


*/

function map(arr, callback) {
    const array = [];
    for(let i=0; i<arr.length; i++){
        array.push(callback(arr[i],i));
    }
    return array;
}

module.exports = map;


