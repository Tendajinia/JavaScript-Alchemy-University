//Objects

/*
In JavaScript, objects start with a open curly-brace { and end with a close curly-brace }. We can put key-value pairs in between these braces.

Let's take a look at a simple object:

const team = {
    name: "Mets",
    wins: 86,
    inPlayoffs: false,
};

Task
Let's create an object representing a pizza order! 

In the order object, add the following three keys with values accordingly:

pizzas - Any number greater than zero.
extraCheese - A boolean. Either true or false.
deliveryInstructions - Any string of instructions.
*/

const order = {
    pizzas : 4,
    extraCheese : false,
    deliveryInstructions: "Deliver whilst hot." 
};

module.exports = order;

//Retrieve values
//How many pizzas

/*
Task
Find the number of pizzas in an order object.

The object will look like this:

const order = {
    pizzas: 3,
    extraCheese: true,
    deliveryInstructions: "Round the back, please!",
};
 The function should take this order and retrieve the number of pizzas:

const totalPizzas = numberOfPizzas(order);
console.log( totalPizzas ); // 3
*/
function numberOfPizzas(order) {
    return order.pizzas;
    };

module.exports = numberOfPizzas;


//Array of Objects
//Many Orders

/*
Accumulate the Pizza Orders
Given an array of pizza orders, return the total number of pizzas ordered.

The orders are an array of objects, each with pizzas key inside:

const orders = [
    { pizzas: 3 },
    { pizzas: 5 },
    { pizzas: 10 }
];
 For this example above, we'd expect 18 total pizzas:

const totalPizzas = numberOfPizzas(orders);
console.log( totalPizzas ); // 18

*/

const numberOfPizzas = (orders) => {
    return orders.reduce((total, order) => {
      return total + order.pizzas;
    }, 0);
  };
  
  module.exports = numberOfPizzas;
  /*
  In the given code, the numberOfPizzas function takes an array of pizza orders and uses the reduce method to accumulate the total number of pizzas ordered. For each order in the array
  , it adds the number of pizzas to the running total and finally
   returns the total.
  The corrected code removes unnecessary conditions inside the reduce function and simply adds up the number of pizzas for each order. This makes the code more concise and easier to understand.
  
  */

  //Typed Orders
  //Enumerated Types

  /*
  Task
Create an Enumeration
Let's create an enumeration like CARD_SUITS above. Our enumeration will be named ORDER_TYPES and describe the different types of orders that are possible in our system.

The first type should be PIZZA, with a value of 0.

After that, create at least 2 more options of your choice!

Get creative! Some ideas for other choices: WINGS, SALAD, BURGER, FRIES, SANDWICH.
*/
  const ORDER_TYPES = {
    PIZZA: 0,
    BURGER: 2,
    CHIPS:1    
}
module.exports = ORDER_TYPES;

//Add By Type
//Importing Files

/*
Task
Modify the numberOfPizzas function to only count pizzas when the order.type is equal to ORDER_TYPES.PIZZA.

The orders will have a type keyword:

const orders = [
    { pizzas: 3, type: ORDER_TYPES.PIZZA },
    { wings: 12, type: ORDER_TYPES.WINGS },
];                                                                                                        
        
function numberOfPizzas(orders) {
  const totalPizzas = orders.reduce((total, order) => {
    return total + order.pizzas;
  }, 0);

  return totalPizzas;    
}
module.exports = numberOfPizzas;

Answer:
const ORDER_TYPES = {
    PIZZA: 0,
    BURGER: 2,
    CHIPS:1    
}
module.exports = ORDER_TYPES;    

*/



// Object Keys

/*
Find the Number of Keys
There are a couple of ways to get all the keys in an object.

We can use the in operator to iterate over all properties:

const object = { a: 1, b: 2, c: 3 } 
for(let key in object) {
    console.log(key);
}
Over three iterations this will log a, b and c which are the keys of object.

Additionally, we can use some methods on the Object constructor itself, which will return an array of the requested data:

const object = { a: 1, b: 2, c: 3 } 
console.log( Object.keys(object) ); // ['a', 'b', 'c']
console.log( Object.values(object) ); // [1, 2, 3]


Task
Given an object, find the number of keys inside
 the object. Return this number.*/
function numberOfKeys(object) {  
    return Object.keys(object).length;   
   }   
   module.exports = numberOfKeys;



//Secret Key

/*
Edit Object Values:

const person = {
    name: "James",
    age: 22
}

person.name = "Sally";
person["age"] = 30;

console.log( person.name ); // Sally
console.log( person.age ); // 30

Task
The object passed into removeSecret has a secret key that must be removed!
Set the value of this key to undefined to pass the test cases. Modify the object directly,
 there is no need to return it.
*/  

function removeSecret(object) {
    delete object.secret; 
 }
 
 module.exports = removeSecret;