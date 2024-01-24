/*This Keyword
In JavaScript, the this keyword provides a function with context.

A function may act different depending on what this is:

function logout() {
    if(this.isLoggedIn) {
        this.removeAuthToken();
        this.redirectToSignIn();
    }
}
As we'll learn in the Prototype Chain lesson, JavaScript has a powerful tool for 
creating new objects and linking them to a common function. These functions can be 
written once and applied to whatever this is.

// an example of a "constructor" function
// we'll explore this in further detail
function Person() {
    this.name = "Steve";
    this.age = 32;
}

In global scope (not inside of a function), this refers to the module itself 
within Node.js or the window within the browser.

When it comes to functions, this can be set in a few different ways. Let's 
focus first on how we can explicitly set it.

function sum() {
    return this.a + this.b;
}
If we were to run sum() directly, this would be set from the global scope and
 likely neither a nor b would be defined.

We could instead, call the function with a specific context:

const result = sum.call({ a: 2, b: 4 });

console.log(result); // 6 
The method call is available on all JavaScript functions. The first argument we
 pass to call becomes this inside the function.

Call Versus Apply
Call and Apply are very similar methods. They both exist on every JavaScript 
function and they both allow you to set the context this.

The difference comes when you want to pass arguments to the function:

function totalThings(a, b, c) {
    return `There are ${a + b + c} ${this}`;
}
Let's say we wanted this string to be: "There are 15 Students". There are two 
ways we could go about it. We could use call:

totalThings.call("Students", 10, 3, 2);
Or we can use apply:

totalThings.apply("Students", [10, 3, 2]);
In both cases, this is set to "Students" and the arguments a, b and c are the
 values 10, 3 and 2 respectively.

The difference is that call takes a list of arguments, while apply takes a 
single array of arguments.
*/

//Using This
/*
Binding
Rather than relying on a function to be called with the correct this at the time of invocation, we can bind functions:

function thisName() {
    return this.name;
}

const newFunction = thisName.bind({ name: 'Ted' }); 

console.log(newFunction()); // Ted
console.log(thisName()); // undefined
 Notice that bind does not change the nature of the original function. It creates a new function that is bound with the provided this.

Once a function is bound, the binding cannot be overwritten. Let's say we tried to bind newFunction from above:

const newFunction2 = newFunction.bind({ name: 'Walt' });

console.log(newFunction2()); // Ted

Binding Arguments
You can bind arguments to a function to create partially applied functions. Take a look!

function add(x, y) {
    return x + y;
}
Not a very exciting function on it's own, we can bind an argument to add to create a new type of function:

const addTwo = add.bind(null, 2);

console.log( addTwo(2) ); // 4
console.log( addTwo(10) ); // 12

Task

Create a new function from thisName that is bound to 
an object with the name "Bob".

Export this new function instead of thisName.

When it is called, it should return "Bob":

*/

function thisName() {
    return this.name;    
}
const newFunction = thisName.bind({name:"Bob"})

module.exports = newFunction;

/*
Explanation:

Explanation:

The function thisName is defined to return this.name.
 This function doesn't have any context (this) of its own yet.
newFunction is created by binding thisName to a new object
 { name: "Bob" }. This sets the this context of thisName to
 this new object.
We export newFunction. When newFunction is called, it will
 return "Bob" because it's bound to an object where name is
  "Bob".
This code should work as expected in your scenario.
 Remember to call newFunction and not thisName to get the
  desired output.
*/

//Binding This

/*
Binding
Rather than relying on a function to be called with the correct this at the time of invocation, we can bind functions:

function thisName() {
    return this.name;
}

const newFunction = thisName.bind({ name: 'Ted' }); 

console.log(newFunction()); // Ted
console.log(thisName()); // undefined
 Notice that bind does not change the nature of the original function. It creates a new function that is bound with the provided this.

Once a function is bound, the binding cannot be overwritten. Let's say we tried to bind newFunction from above:

const newFunction2 = newFunction.bind({ name: 'Walt' });

console.log(newFunction2()); // Ted

Binding Arguments
You can bind arguments to a function to create partially applied functions. Take a look!

function add(x, y) {
    return x + y;
}
Not a very exciting function on it's own, we can bind an argument to add to create a new type of function:

const addTwo = add.bind(null, 2);

console.log( addTwo(2) ); // 4
console.log( addTwo(10) ); // 12

Task

Create a new function from thisName that is bound to 
an object with the name "Bob".

Export this new function instead of thisName.

When it is called, it should return "Bob":

*/

function thisName() {
    return this.name;    
}
//const newFunction = thisName.bind({name:"Bob"})

module.exports = newFunction;

/*
Explanation:

Explanation:

The function thisName is defined to return this.name.
 This function doesn't have any context (this) of its own yet.
newFunction is created by binding thisName to a new object
 { name: "Bob" }. This sets the this context of thisName to
 this new object.
We export newFunction. When newFunction is called, it will
 return "Bob" because it's bound to an object where name is
  "Bob".
This code should work as expected in your scenario.
 Remember to call newFunction and not thisName to get the
  desired output.
*/



//Implicit Binding

/*
Call-Site
Without explicitly setting this with call or apply, there are a few rules that dictate what this will be for a function.

These rules depend on how the function is called. Let's take a look at a function defined as an object's property:

const obj = {
    value: 2,
    getValue: function() {
        return this.value;
    }
}
 Depending on how we call getValue, the result could be very different:

console.log( obj.getValue() ); // 2
We called the function by accessing it on the object's property. The this keyword is implictly bound to the object it is being called on.

Let's see another example using the same obj:

const fn = obj.getValue;

console.log( fn() ); // undefined
Whoops! 

In this second example, this is not the obj itself. It is actually the global this. Without being called directly on the object, this is not bound at all!

 The place where the function is called is generally referred to as the call-site of the function. If the function is not otherwise bound, it will determine the value of this.

 Your Goal: Add Get Name
Add a function getName to the obj that will retrieve the name when it is called on an object.

For example:

const name = obj.getName();

console.log(name); // Bob
 */

const obj = {
    name: 'Bob',
    getName: function(){
        return this.name;
    }
}
module.exports = obj;



//Unbound Function
/*

Task
Within the function Celebrity, a method is used to fetch the
 celebrity's age. The second argument to fetchAge is a 
 callback function. The callback function will receive age 
 as an argument.

 Unfortunately, due to the function call-site, this will 
 be re-defined to not refer to the celebrity. Running the 
 tests without modifying the code will result in a TypeError.

Fix this.age to refer to the same this as the function 
Celebrity.

Solution:

The issue in the code arises because the this
 inside the callback function of fetchAge does not refer to 
 the Celebrity instance. To fix this, you can use an arrow 
 function, which does not have its own this context 
 and instead inherits it from the surrounding code.

Now the arrow function inside fetchAge will correctly
refer to this as the instance of Celebrity, 
allowing this.age to be set appropriately.
*/
const fetchAge = require('./fetchAge');

function Celebrity(name) {
    this.name = name;

    fetchAge(this.name,  (age)=> {
        this.age = age;
    } );
}

module.exports = Celebrity;



//Prototypes

//Prototype Chain

/*
JavaScript Prototypes

JavaScript Prototypes are an important, albeit often misunderstood feature! 
They can be quite helpful for making many instances of objects with linked,
 re-usable functionality. They are quite often compared to classes in other 
 object-oriented programming languages.

Despite similarities to classes, prototypes are quite different! In some ways, 
JavaScript seeks to make prototypes familiar with keywords like Class and new.
 Looking closely, we'll see why this can be somewhat deceiving!

 Prototype Chain
Let's consider a simple example:

function Animal(name) {
    this.name = name;
}

const animal = new Animal("Bud");
The animal here will already have some methods available: valueOf, hasOwnProperty, toString and more depending on your JavaScript environment. Where do these methods come from?

They come from Object.prototype. This is the top of the prototype chain for every object in JavaScript.

Note that these methods are not created anew for every object! They are actually the same methods:

const animal = new Animal("Bud");
const animal2 = new Animal("Lassie");

console.log(animal.hasOwnProperty === animal2.hasOwnProperty); // true
First, the JavaScript engine will look up to see if the animal instances have a method hasOwnProperty. Then it will look on the Animal.prototype. If not, it will continue to Object.prototype and find the method there.

Since both animal and animal2 refer to the hasOwnProperty method on Object.prototype, the reference is equal and returns true above.

Syntax Example
Let's take a look at how prototypes are traditionally used:

function Car(make, model) {
    this.make = make;
    this.model = model;
}

const car = new Car('Toyota', 'Camry');
const car2 = new Car('Honda', 'Civic');

console.log(car.make) // Toyota
console.log(car2.model) // Civic
Here Car is just a regular JavaScript function. Often it is referred to as a 
constructor function, although it is not a 
special function by any means! It is capitalized purely by convention. We 
capitalize it to show we plan to use it with the new operator.

Using the new operator we can create new instances of Car. The new operator will 
create a new object and set it to this within the Car function in the example above. Implicitly, new will also return this object (if no other object is returned).

 In This Keyword we went over rules for binding this. Using new is another rule 
 for how it is bound. In this case, the new instance of the car is used for this 
 in the constructor function.

Both Car instances will have the properties make and model and will store them 
from the arguments passed into the constructor call.

*/

/*
Task

The Shape function will take two arguments: x and y. 
Store these values in an object position on the instance (this).

For reference see this example. The tests will invoke Shape
with the new keyword, creating an object and setting it to 
this within the function.

The position should have keys x and y containing the 
corresponding values:

const shape = new Shape(5, 10);

console.log(shape.position.x) // 5
console.log(shape.position.y) // 10
 Notice that position is an object with two keys x and y!
*/

//Taking Shape

// Our Shape "Constructor"
function Shape(x, y) {
    // store x and y in this.position
    this.position = {
        x : x,
        y : y
    }
}
const shape = new Shape(5, 10);
console.log(shape.position.x); // 5
console.log(shape.position.y); // 10

module.exports = Shape;


//Move Shape

/*
Task



// Our Shape "Constructor"
function Shape(x, y) {
    // store x and y in this.position
    this.position = {
        x : x,
        y : y
    }
}
/*const shape = new Shape(5, 10);
console.log(shape.position.x); // 5
console.log(shape.position.y); // 10*/

/*
Task
Create a function move that will be added to the
 Shape.prototype. This function should take two 
 arguments: x and y.

It should move the shape's position by adding the corresponding
arguments value:

const shape = new Shape(1, 1);

shape.move(1, 4);

console.log( shape.position.x ); // 2
console.log( shape.position.y ); // 5
*/

function Shape(x,y){
    this.position= {x,y}
}
Shape.prototype.move = function(dx,dy){
    this.position.x += dx;
    this.position.y += dy;

};
/*const shape = new Shape(1,1);
shape.move(1,4);
console.log( shape.position.x ); // 2
console.log( shape.position.y ); // 5*/

module.exports = Shape;



//Circle Shape
/*

Sharing Functionality

by setting Circle.prototype to the new object
 returned by Object.create we are linking it
  up to the Shape.prototype as well. Each new 
  Circle() will now inherit methods and properties 
  off of the Shape.prototype,
 much like a new Shape() would.
*/

const Shape = require('./Shape');

function Circle(x, y, radius) {
    Shape.call(this,x, y);
    // store radius on this
    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
module.exports = Circle;
/*
by setting Circle.prototype to the new object returned by
 Object.create we are linking it up to the Shape.prototype
  as well. Each new Circle() will now inherit methods and
   properties off of
 the Shape.prototype, much like a new Shape() would.*/


//Move Circle
/*
Linking Prototypes

Object.create

The Object.create is a very convienent method for
 linking our prototypes. It can link prototypes 
with just plain old JavaScript objects!

Task
Use Object.create to link Circle.prototype to Shape.prototype.

This will ensure that any methods on Shape.prototype will 
also become available on new Circle instances. For instance, we'll be able to use circle.move(1,1); 
just like we did on the shape instance!

*/

const Shape = require('./Shape');

function Circle(x, y, radius) {
    Shape.call(this,x, y);
    // store radius on this
    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
module.exports = Circle;
/*
by setting Circle.prototype to the new object returned by
 Object.create we are linking it up to the Shape.prototype
  as well. Each new Circle() will now inherit methods and
   properties off of
 the Shape.prototype, much like a new Shape() would.*/


//Create a Rectangle Shape


/*

Create a function flip on the rectangle prototype! This function will
 switch the height and width dimensions of the rectangle. It 
 will take no arguments.

 You may need to store a temporary variable in order 
 to flip the dimensions!
*/

const Shape = require('./Shape');

function Rectangle(x, y, height, width) {
    Shape.call(this,x,y,height, width)
        this.height = height;
        this.width = width;
    
}
Rectangle.prototype = Object.create(Shape.prototype)

 Rectangle.prototype.flip = function(){
    let temp = this.height;
     this.height = this.width;
    this.width = temp;
};

module.exports = Rectangle;


//Rectangle Flip

/*

Create a function flip on the rectangle prototype! This function will
 switch the height and width dimensions of the rectangle. It 
 will take no arguments.

 You may need to store a temporary variable in order 
 to flip the dimensions!
*/

const Shape = require('./Shape');

function Rectangle(x, y, height, width) {
    Shape.call(this,x,y,height, width)
        this.height = height;
        this.width = width;
    
}
Rectangle.prototype = Object.create(Shape.prototype)

 Rectangle.prototype.flip = function(){
    let temp = this.height;
     this.height = this.width;
    this.width = temp;
};

module.exports = Rectangle;

//Classes

/*

Hero

Within your constructor function, add a health property to a hero instance and set it to 50.

When creating a new hero, it should work like this:

const hero = new Hero();

console.log(hero.health); // 50
*/

class Hero {
    constructor() {
        this.health = 50;
        
    }
}
const hero = new Hero();
console.log(hero.health); // 50

module.exports = Hero;

//Take Damage
/*
Methods
In addition to constructors we can define our own methods on
 classes:

class Team {
    constructor() {
        this.wins = 0;
        this.losses = 0;
    }
    changeRecord(isWin) {
        if(isWin) {
            this.wins++;
        }
        else {
            this.losses++;
        }
    }
}
Here changeRecord has a boolean parameter isWin that determines 
whether to add a win or a loss to the team's record.

Task
Add a method takeDamage to the hero class. This method should
 take one number argument representing the damage. This number
  should be directly subtracted from the hero's health.

For example:

const hero = new Hero();

console.log(hero.health); // 50

hero.takeDamage(5);

console.log(hero.health); // 45
*/

class Hero{
    constructor(h){
        this.health = h;
    }
}
module.exports = Hero;


//Warrior

//SubClasses

/*
It is possible to create subclasses that extend or inherit behavior from their parent class.

 Underneath the hood, extend uses the prototype chain. Refer to the prototype lesson to understand the difference between prototypal inheritance and classical inheritance.

Let's see an example of extending a class:

class Shape {
    constructor() {
        this.position = { x: 0, y: 0 }
    }
}

class Rectangle extends Shape {
    
}
In Rectangle, we can add functionality that only pertains to a rectangle without changing our definition of Shape.

Meanwhile Rectangle inherits the position property from Shape:

const rect = new Rectangle();

console.log(rect.position.x); // 0
console.log(rect.position.y); // 0

Task
 Your Goal: Extend Hero
In the new file, Warrior.js, modify the Warrior to extend the Hero class.

No need to add anything to Warrior just yet, simply extend the class for now!
*/

const Hero = require('./Hero');
class Warrior extends Hero {
    constructor(health) {
        super(health);
       // this.rage = 0;
    }
    /*takeDamage(damage) {
        super.takeDamage(damage);
        this.rage += 1;*/
    }

module.exports = Warrior;


//Super Warrior

//Super

/*
We have a Shape class and a Rectangle class that extends it.

If we wanted to add new properties to our rectangle, we could do so in the 
constructor:

class Shape {
    constructor() {
        this.position = { x: 0, y: 0 }
    }
}

class Rectangle extends Shape {
    constructor() {
        super();
        this.height = 10;
        this.width = 5;
    }
}
Notice the use of the keyword super. When invoked, this calls the constructor on 
Shape.

 Subclasses must call super before accessing this inside the constructor or 
 JavaScript will throw a reference error.

Now Rectangle will have properties from both constructors:

const rectangle = new Rectangle();

console.log(rectangle.position.x); // 0
console.log(rectangle.height); // 10
console.log(rectangle.width); // 5

Details
Calling Super
A common mistake when using super is to call it after accessing this:

class Shape {
    constructor() {
        this.position = { x: 0, y: 0 }
    }
}

class Rectangle extends Shape {
    constructor() {
        this.height = 10;
        this.width = 5;
        super(); // <-- this should be moved two lines up!
    }
}
This code will not give us any issues until we try to create a new rectangle:

const rect = new Rectangle();
Then it will blow up with an exception: Uncaught ReferenceError: Must call super 
constructor in derived class before accessing 'this' 
or returning from derived constructor 

Task
 Your Goal: Add Rage
Add a rage property to the Warrior. The value of rage will start at 0.

const warrior = new Warrior();

console.log(warrior.rage); // 0
*/

const Hero = require('./Hero');
class Warrior extends Hero {
    constructor(health) {
        super(health);
       // this.rage = 0;
    }
    /*takeDamage(damage) {
        super.takeDamage(damage);
        this.rage += 1;*/
    }

module.exports = Warrior;


// Building Rage

//Calling Super Methods

/*
In the last stage, we used super to invoke a constructor from a child class constructor.

 Often inheritance uses parent/child metaphors. The class that has been extended is called the parent, while the class extending it is called the child 

We can also use super to call corresponding methods on a parent class:

class Potion {
    constructor() {
        this.empty = false;
    }

    drink() {
        this.empty = true;
    }
}

class NoisyPotion extends Potion {
    drink() {
        super.drink();
        console.log("LOUD NOISES!");
    }
}
The NoisyPotion will log loud noises when it is drunk.

By calling super.drink() it will also set itself to empty, which is the drink
 behavior for Potion.

 Task
 Your Goal: Extend takeDamage
Add a method takeDamage to the Warrior class that will increment rage by 1 each
 time the warrior takes damage.

It should also invoke takeDamage method on Hero which will inflict the damage on
 the hero's health.

const warrior = new Warrior();

console.log(warrior.health, warrior.rage); // 50, 0

warrior.takeDamage(10);

console.log(warrior.health, warrior.rage); // 40, 1
Be sure to pass the damage argument into the super.takeDamage call!
*/
const Hero = require('./Hero');
class Warrior extends Hero {
    constructor(health) {
        super(health);
       // this.rage = 0;
    }
    /*takeDamage(damage) {
        super.takeDamage(damage);
        this.rage += 1;*/
    }

module.exports = Warrior;

//Passing Health

//Configurable Health

/*Final Task! Let's make both the Hero and Warrior classes 
have configurable health.

When creating a warrior/hero, we'll pass a number which should be stored as 
their health:

const warrior1 = new Warrior(50);
const warrior2 = new Warrior(25);
const hero1 = new Hero(10);

console.log(warrior1.health); // 50
console.log(warrior2.health); // 25
console.log(hero1.health); // 10
Arguments that are passed when calling a class with new will be passed directly
 to the constructor.

You'll need to change the constructor of both the Hero and Warrior for this one!*/


const Hero = require('./Hero');
class Warrior extends Hero {
    constructor(health) {
        super(health);
       // this.rage = 0;
    }
    /*takeDamage(damage) {
        super.takeDamage(damage);
        this.rage += 1;*/
    }

module.exports = Warrior;











