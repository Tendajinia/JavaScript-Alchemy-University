//Array Filtering

/*
When filtering arrays, we want to come up with some boolean condition (true/false) that will determine if we should keep the element or not.

Consider the case where we only want to keep elements whose value is 1.

Task
Filter Less Than 5
Given an array of elements, find the elements whose value is less than 5. Return the resulting array.
*/
function lessThanFive(array) {
    return array.filter(x => x < 5);     
}

module.exports = lessThanFive;


/*
Only True

Task
We can apply the same filtering logic to booleans.

Given an array of booleans, keep only the true values:

Only True

Return the resulting array.
*/
function onlyTrue(array) {
    return  array.filter(y => y === true);     
  }
  
  module.exports = onlyTrue;


  //Short Strings

  /*
  Filtering Strings
We can measure a string's size by using the string method length:

const size = "abc".length;

console.log(size); // 

Task
Given an array of strings, keep only the strings whose length is at most 3.

An example:

const result = shortStrings([
    'abc',
    'a',
    'apples',
    'television'
]);

console.log(result); // ['abc', 'a']
*/
function shortStrings(array) {
    return   array.filter(y => y.length <= 3);       
   }
   
   module.exports = shortStrings;


//Top students 

/*
Filtering Objects
 Filter the Top Students
Find students whose score is at least 90.
*/
function topStudents(array) {
    return  array.filter(students => students.grade >= 90 );      
  }
  
  module.exports = topStudents;


//Filtering By Index

/*
When supplying a function to filter, the first argument is the element and the second argument is the
position of that element (a zero-based index).


Task
Take the First 3
Given an array of elements, keep only the first 3 elements.

Return an array with only these three elements included.

*/
function firstThree(array) {
    return array.slice(0, 3);      
 }
 
 module.exports = firstThree;



//Unique
 /*

 Find the Unique Values
 Given an array of values, return an array of unique values.
 
 Keep in mind what you learned in the previous stage about the index passed to the filter function. 
 It will continue to increase, while indexOf will always return the first index of the value.*/

 function unique(array) {
    return array.filter((value,index,self)=>{
        return self.indexOf(value)===index;
        
    });
    /*In this function, the filter method is used with a 
     callback function that checks if the index of the current
     value is equal to the first index of that value in the array. This ensures that only unique
     values are returned in the resulting array.
    */    
}
module.exports = unique;

/*
method to create a new array containing only the unique values
 from the original array.

Within the filter callback function, we use the indexOf method
 to check if the current value's index is equal to the first
  occurrence of that value in the array. This comparison
   ensures that only
 unique values pass through the filter, resulting in an
  array of unique values.

In the example usage provided, the input array [1, 2, 2, 3, 4, 4, 5] will produce an output
 array [1, 2, 3, 4, 5], as duplicate values are filtered out based on their first occurrences
  in the input array.
*/ 