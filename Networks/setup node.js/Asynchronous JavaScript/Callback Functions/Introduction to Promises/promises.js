
//Intro to Promises

//Request order

/*
Details
To avoid callback hell using callback function arguments,
use of Promises makes life easier.

Promises are quite a bit easier to pass around and return to higher-level functions:

const filePromise = readFile("other.txt");
 In this case, we can use filePromise in other functions to represent the file contents when they are ready! It makes it easier to organize code in a more readable way:

filePromise.then((contents) => {
    // do something with the file contents
});

Using Promises

const promise = getServerData();

// similar to using a callback function argument,
// except we wire up the callback using .then 
promise.then(function(data) {
    // this function is called asynchronously
    // once the server has responded with data
    console.log('got data', data);
});
Here getServerData returns a promise.

We can call .then and provide a function that is invoked once the server data is resolved.

Task
 Make the Food!

 We need to make some food! 

When the customer asks for food, the request function will be invoked. This function should call the function makeFood which takes food as its only argument. The function makeFood will return a promise.

 The makeFood function is imported at the top of the file from Kitchen.

Add a callback function to the .then of the makeFood promise. Once it is called the food is ready! At that point set the order isReady is true.


*/

// enter your javascript code here
const { makeFood } = require('./Kitchen');

class Order {
    constructor() {
        this.isReady = false;
    }
    request(food) {
        makeFood(food)
            .then((food) => {
                this.isReady = true;
                console.log(`${food} is ready!`);
            });
    }
}

module.exports = Order;


//Catch Error

/*
Details
Errors
Sometimes, a promise does not resolve
 successfully.

For example: We want to get data from the 
server and the server cannot handle our request.
 In this case we might receive an error response
  code from the server.

In promises, we can handle errors with .catch:
const promise = getDataFromServer();

promise.catch((err) {
    console.error('oh no something bad happened');
});
 From the promise implementer's side, this is known as rejecting the promises, as
  opposed to resolving with the server data.

Task
Handle Rejection
What if the kitchen was all out of a particular ingredient? 
Let's be sure to catch an error from the makeFood promise.

When we need to create a new order, we'll request the food:
 
const order = new Order();

order.request({ burgers: 1 });
If there is an error on the request, it should be stored on the order:

console.log(order.error); // Out of buns
 Be sure to store the error on the order instance just like isReady!
*/

// enter your javascript code here
const { makeFood } = require('./Kitchen');

class Order {
    constructor() {
        this.isReady = false;
        this.error = null; // Initialize error as null
    }
    request(food) {
        makeFood(food)
            .then((food) => {
                this.isReady = true;
                console.log(`${food} is ready!`);
            })
            .catch((error) => {
                this.error = error; // Store the error on the order instance
            });
    }
}

module.exports = Order;

// Creating a new order and requesting food
const order = new Order();
order.request({ burgers: 1 });

// Checking for errors
console.log(order.error); // This will log any error encountered during the request

/*To handle errors from the makeFood promise, you can use the .catch method. Also, to store the error on the order instance, you can set a property error on the order in case of an error.*/


//Create Promise
/*
The function provided to the promise is called an executor function. 
This function is called immediately and typically 
will be set to resolve after something asynchronous has happened

Executor Function
The function passed to Promise is called the executor function.

new Promise(function executor(resolve, reject) {
    // inside the executor function 
    // we can either resolve or reject
    if(success) {
        resolve();
    }
    else {
        reject();
    }
});

You can see the executor function in the above example is named. 
This function is called immediately once the promise is created.

Inside this function we can resolve, which will call all functions
wired as callbacks in the promise then method.

Alternatively, we can reject, which will call functions wired as
callbacks in the promise catch method.

 Both resolve and reject can take arguments that will be passed 

File System Example
Let's see an example where we wrap a callback function in a promise! 

const promise = new Promise(function(resolve, reject) {
    fs.readFile("abc.txt", function(err, contents) {
        if(err) {
            // something bad happened, reject with the err
            reject(err);
        }
        else {
            // success! resolve the promise with the contents
            resolve(contents);
        }
    });
});
 We are reading a file from the file system and wrapping the callback to 
create a promise.

If there is an error, we'll reject  the promise, which is caught by a
 catch callback:
 
promise.catch(function(err) {
    console.error('something went very wrong!', err);
});
Otherwise, we'll resolve the promise with the contents of the file:

promise.then(function(fileContents) {
    console.log(fileContents);
});


Task
Return a Resolved Promise
Within the timer function, return a new resolved promise.

 There is no need to do anything inside the executor function
  other than invoke the resolve function.
*/

function timer() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('contents');
        });
    });


}

module.exports = timer;



//Asynchronous Timer
//Asynchronous Executor

/*
Asynchronous Executor
The purpose of the executor function is to wrap some asynchronous 
action and provide callbacks for the result.

const p1 = new Promise(function executor(resolve, reject) {
    runAnimation(function() {
        resolve();
    });
});
The runAnimation only accepts one callback function after the 
animation is complete.

By wrapping this in a promise, we create a new object p1 which 
 be used to wire up many callbacks with then:

p1.then(function() {
    showDialog();
});
p1.then(function() {
    removeAnimation();
});
 These two then callbacks can be wired up in different places in 
 the program, allowing us to separate concerns more easily.

Task
Asynchronous Timer
Let's modify the timer executor function to resolve after one second.

You can run code after one second by using a timeout:

setTimeout(function() {
    // do something in here
}, 1000);

*/

function timer() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('contents');
        },1000)
    })


}

module.exports = timer;

//Async/ AWait
/*
Async Await
Another useful tool in the asynchronous JavaScript toolbelt is async/await.

With these two keywords we can handle promises line-by-line like synchronous code:

async function getData() {
    const result = await serverCall();

    // this will not run until serverCall resolves/rejects
    return result;
}
 In this example, serverCall returns a promise and the result is the resolved value.

 The return line does not run until after the serverCall promise is complete. This is the case for anything after
  the await line. See details for further explanation.

The above example is functionally equivalent to:

function getData() {
    return serverCall().then((result) => {
        return result;
    });
}
In both cases, getData returns a promise and the promise resolves with the result.

 You can think of async as a way of denoting that a function will return a promise. For full documentation on async see here.

Details
Async Keyword
The async keyword will make a function return a promise. Even if we were to make a simple function like this:

async function test() {

}
By adding async in front, this will now return a promise when invoked.

This allows us to write asynchronous code inside of the test function as if it were synchronous.

For example:

async function test() {
    await getServerData();

    return 3;
}
 We won't return 3 until after the promise returned from getServerData resolves.

This would be a problem if test was called and it expected the return value immediately:

const three = test();
Is the value of three equal to 3 in this case? 

No! It is a promise:

console.log(three); // Promise 

// we should try to name our objects appropriately
const threePromise = three;
threePromise.then(function(data) {
    console.log(data); // 3
});
By wrapping this function test in a promise, it gives us a special 
environment where we can write code that looks synchronous while
allowing it to be asynchronous. This is the power of async/await.

Task
Relay the Results
We have a function handleResults which should retrieve a patient's 
results from a lab, 
send them to the patient, and record the response in logs.

The three functions have been imported for you. Each function
 returns a promise, so it can be used with async/await. You'll need to call these in order:

Pass the patientId to getResults. This will resolve with results.

Pass the patientId and results (in that order) to sendResults. This will resolve with response.

Pass the response to logResponse. There is no return value here. You can choose to either return the promise from logResponse 
or use await so the function will not resolve until after logResponse is complete.

 Notice that the async keyword has already been added to the handleResults function. This will allow us to use await within the function.

*/const { getResults } = require('./lab');
const { sendResults } = require('./messaging');
const { logResponse, logError } = require('./logs');

async function handleResults(patientId) {
    try {
        const results = await getResults(patientId);
        const response = await sendResults(patientId, results);
        await logResponse(response);
    } catch (error) {
        // Handle any errors here
        logError(error);
    }
    
}

module.exports = handleResults;

//Catch Await
/*
Catching Async/Await

Catching Async/Await
The keywords async/await give us a nice interface to use promises. Keep in mind what is going on underneath the hood! We still have a promise that can both be resolved and rejected.

In the last stage, we only handled the resolve.

How do we handle the case where the promise rejects? 

We can use try/catch!

async function getData() {
    try {
        const data = await callServer();
    }
    catch(ex) {
        // this runs if the callServer promise rejects 
        console.log(ex);
    }
}
 If the callServer promise were to reject here, we would catch the exception and then log it to the console.

 Task: Catch an Error
If an error is thrown in any of the asynchronous functions we called in the last stage, let's catch it.

Once we have the exception, pass it to logError.

*/const { getResults } = require('./lab');
const { sendResults } = require('./messaging');
const { logResponse, logError } = require('./logs');

async function handleResults(patientId) {
    try {
        const results = await getResults(patientId);
        const response = await sendResults(patientId, results);
        await logResponse(response);
    } catch (error) {
        // Handle any errors here
        logError(error);
    }
    
}

module.exports = handleResults;


