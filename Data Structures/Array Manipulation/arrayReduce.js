
//Reduce
//Use reduce when you have an array of elements you'd like to combine into a single value or object.

//Sum
/*
Details
Given 1 2 4
First Iteration
In the first iteration the accumulator is 1 and the currentValue is 2.

The accumulator is the value "accumulated" or carried through the entire function.
 When you return a value in the reduce function, it will become
  the accumulator for the next iteration.

 Wondering why 1 is the first accumulator value? By default,
  the reduce function will use the first value in the array as
   the accumulator if an accumulator is not provided.

The currentValue will change each iteration, moving forward to
 the next value in the array.

Second Iteration
After we add 1 + 2 and return it, the value 3 will be used for 
the accumulator in the second iteration.

The currentValue will be the next item in the array, which is 4.

After these two iterations, our reduce function will return
 with a final value of 7.

Task 
Applying what you've learned, complete the function sum by adding together 
the accumulator and the currentValue.
*/

// numbers is an array full of numbers
// let's add all the numbers and return the sum
// i.e. [1,2,3,4,5] => 15
function sum(numbers) {
    return numbers.reduce((accumulator, currentValue) => {
        return accumulator + currentValue // <-- sum the numbers here!
    });
}

module.exports = sum;

/*
Largest  Positive Value


Task
Add the initial value
Just like the illustration above, we want our initial value to be 1. This way, 
if there are no positive values we will just return 1..
*/

// numbers is an array full of numbers
// let's find the largest and return it
// i.e. [2,3,5,1,4] => 5
function largest(numbers) {
    return numbers.reduce((accumulator, currentValue) => {
        return accumulator > currentValue ? accumulator:currentValue // <-- determine largest value
    },1);
}

module.exports = largest;

/*
Largest Value


Task
 Add the initial value
Just like the illustration above, we want our initial value to be 1. 
This way, if there are no positive values we will just return 1.

*/

// numbers is an array full of numbers
// let's find the largest and return it
// i.e. [2,3,5,1,4] => 5
function largest(numbers) {
    return numbers.reduce((accumulator, currentValue) => {
        return accumulator > currentValue ? accumulator:currentValue // <-- determine largest value
    },1);
}

module.exports = largest;



//Remove Duplicates

/*
Details
Example
Goal: Remove duplicates within our numbers array
numbers: [2,3,2]
We're going to reduce our numbers above until we end up with an array that has no duplicates. We'll do this in three iterations:

Iteration 1
Accumulator: []
CurrentValue: 2
We start with an empty array and see that 2 is not inside it. We'll add it.

Iteration 2
Accumulator: [2]
CurrentValue: 3
We move to 3 and see it also is not inside our [2] array. Let's add it.

Iteration 3
Accumulator: [2,3]
CurrentValue: 2
We move to our final 2 and see that it is inside our [2,3] array. We will not add it this time.

Result
Final Value: [2,3]

All duplicates removed!

Task
Finish the function to remove all duplicates
Use the example provided in the details tab to guide you.
You'll want to provide an initial value here that will 
eventually lead you towards your goal. Then you'll continue 
to accumulate non-duplicate numbers until 
you have an array that is full of only unique numbers.
*/
// numbers is an array full of numbers
// let's remove any duplicates and return it
// i.e. [2,2,3,5,1,3,4] => [2,3,5,1,4]
function removeDuplicates(numbers) {
    return numbers.reduce((accumulator, currentValue) => {
      if (accumulator.indexOf(currentValue)===-1){
          accumulator.push(currentValue);
      } // TODO: reduce logic
         return accumulator;
    },[] /* TODO: add initial value */ );
}
module.exports = removeDuplicates;
/*
Method
In the removeDuplicates function, we use the reduce method to
iterate through the numbers array. We provide an initial value
of an empty array [].
For each iteration, we check if the currentValue is not 
already present in the accumulator array using the indexOf 
method. If it's not present (i.e., index is -1), we push the
 currentValue to the accumulator.

By doing this, we accumulate only non-duplicate numbers in the
accumulator array. Finally, we return this updated accumulator,
 which now contains only unique numbers.
This approach effectively removes any duplicate numbers from 
the original array.
*/


//Grouping with Reduce

/*
Task
Finish the function group. Sort each food by it's type and return an 
object in the format shown above.

Don't depend on the types to only be "fruit" and "vegetable".
We will be testing for additional
food types in the test cases, so no hardcoding string values!
*/

// food is an array full of food objects
// let's group them by "type" and return them
function group(foods) {
    return foods.reduce((accumulator, currentValue) => {
      if (!accumulator[currentValue.type]) {
       accumulator[currentValue.type] =[];
     }  // TODO: reduce logic
      accumulator[currentValue.type].push(currentValue.food);
     return accumulator;

    },{}/* TODO: add initial value */ );
}

module.exports = group;
/*
Method
 we are correctly grouping the foods by their types. We use the reduce 
 function to iterate through the foods array and accumulate them into an
object based on their types. For each food item, we check if the type 
  already exists as a property in the accumulator. If not, we initialize
   it as an empty array. 
 Then we push the current food item into the corresponding type array.
*/



//Is Unique

//All Unique
// numbers is an array full of integers
// let's figure if all the numbers are unique
// i.e. [1,2,3,1] => false
// [1,2,3] => true
function allUnique(numbers) {
    return numbers.reduce((accumulator, currentValue, index) => {
        if (numbers.indexOf(currentValue)!== index){
            return false;
        }
        return accumulator;
        
    }, true);
}

module.exports = allUnique;

/*
We use the reduce method to iterate through 
the numbers array.
For each element, we check if its first index in
 the array is equal to the current index. If not
 , we immediately return false to indicate that 
 not all elements are unique.
If no non-unique elements are found,
 we return true at the end of the reduction.
*/