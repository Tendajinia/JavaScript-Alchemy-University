/*

Plus one

Map function
The map function is stored on the Array.prototype. This means that every new array we create has access to the method!

By passing a function to map, we apply it to every element in the array. For example:

const array = [1, 3, 5];

const result = array.map(function(x) {
    return x * 2;
});

console.log(result); // [2, 6, 10]
In this example, we pass an anonymous function returning x doubled. This function is applied to every element in the array. 1 becomes 2, 3 becomes 6 and 5 becomes 10.

Task
Map Add One
Take the array arr and add one to every element, return the resulting array.
*/

function plusOne(arr) {
    return  arr.map(function(item){
         return item + 1; 
    });    
}
module.exports = plusOne;


/*
/*
Square Root
Mapping a Function


Details
The map function is stored on the Array.prototype. This means that every new array we create has access to the method!

By passing a function to map, we apply it to every element in the array. For example:

const array = [1, 3, 5];

const result = array.map(function(x) {
    return x * 2;
});

console.log(result); // [2, 6, 10]
In this example, we pass an anonymous function returning x doubled. This function is applied to every element in the array. 1 becomes 2, 3 becomes 6 and 5 becomes 10.

Task
Map Add One
Take the array arr and add one to every element, return the resulting array.
*/
/*
function plusOne(arr) {
    return  arr.map(function(item){
         return item + 1; 
    });    
}
module.exports = plusOne;
*/
function squareRoot(arr) {
  return arr.map(x => Math.sqrt(x));
}  
module.exports = squareRoot;

/*
Squared

Task
Take a single number n and return n squared.
*/
function squared(n) {
    return n*n;    
}
module.exports = squared;

/*
Squared Map

Map Squared
In the last stage, you defined a function to square two numbers together.

Now it's time to create a function that will map that function over an array.

Task
Given an array of elements in squaredMap, return an array with each element squared:

squaredMap([2]); // [4]
squaredMap([1,2,3]); // [1,4,9]
*/
const squared = require('./squared');

function squaredMap(arr) {
    return arr.map(n => (n*n));   
}
module.exports = squaredMap;


/*
Add Score

Mapping over Objects

Task
Given an array of players, add 10 to their score. Return a new array with these additional points.

Each player will be an object with the following two properties:

id - a number uniquely identifying the player
score - a number representing the player's points
*/

function addScore(players) {
    return players.map((player, index ) => ({
        id: player.id,
        score:index < 3 ? player.score +10 : player.score //tenary operator
       
        /*
        We use the index parameter provided by the map function
         to check if it's less than 3.
         If the index is less than 3, we add 10 to the player's score; 
         otherwise, we keep their original score.
         The map function returns a new array with updated scores for
         the first 3 players only.*/
    }));      
    }    
    module.exports = addScore;

/*
Add Score Index

Array Map Index
When using map, we also get access to the position of the element in our function.

[10, 20, 30].map(function(el, i) {
    console.log(i);
});
This will log 0, 1, and 2 which are the indexes for 10, 20 and 30 respectively.

One way that we can use the index is when we want to modify an element based on it's position.

Task
Let's modify our addScore function to only add 10 points to the first 3 players.

Be careful on this one! The index passed into our function will be zero-based, which means it starts
 at 0. Also, be sure to always return something inside the mapped function or the element will be 
 undefined.
*/
function addScore(players) {
    return players.map((player, index) => {
        if (index < 3) {
            return {
                id: player.id,
                score: player.score + 10
            };
        }
        return player;
    });
}

module.exports = addScore;    


