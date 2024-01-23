/*

Array Sort
Numbers Ascending
Every array created in JavaScript has access to the 
sort method. This method takes an optional comparison
 function that will determine the resulting sort
 order of the elements.

 Details

 Default Sort Behavior
The comparison function is optional. So, what happens if we don't pass one to sort?

const result = [3, 2, 4, 1].sort();

console.log(result); // [1, 2, 3, 4]
Without a comparison function, the array elements are converted to strings and compared. Lower values are moved to the front of the array.

At this point it looks like it works pretty well for sorting ascending numbers. But wait! Let's take a look at another example:

const result = [20, 1, 2, 3].sort();

console.log(result); // [1, 2, 20, 3]
Uh-oh! 20 came before 3. Sorting numerically, we know that 3
 should come first. However, you have to remember that the 
 numbers are first converted
 to strings before sorting. When "20" is compared to "3", the
  first characters are compared and "2" comes before "3". 
  Therefore, "20" is sorted in front of "3". Very tricky!

The default sorting is more intuitive when the elements are 
strings as they will be sorted as such:

const result = ['orange', 'berry', 'apple', 'cherry'].sort();

console.log(result); // ["apple", "berry", "cherry", "orange"]
In summary, when sorting numbers, rather than using the default
 sort functionality, you should pass in your own comparison
  function to guarantee a proper sort.

Let's take a look at providing a comparison function to sort
 numbers in ascending order (1,2,3...):

[3,2,4,1].sort(function comparison(a,b) {
    if(a < b) {
        // take a first
        return -1;
    }
    if(b < a) {
        // take b first
        return 1;
    }
    // no change is needed
    return 0;
});
The array will be sorted [1,2,3,4]. In this comparison
 function there are 3 possible return values:

-1 indicates a should be placed in-front of b.
1 indicates b should be placed in-front of a.
0 indicates no change in order is needed.
In fact, returning any negative value will have the same
 effect as returning -1 here. Any positive value will do the
  same as 1. This means we can shorten this function 
  significantly:

[3,2,4,1].sort(function comparison(a,b) {
    return a - b;
});
Here, if a is less than b, the result of the subtraction
 will be negative (placing a first). If b is less than a 
 the result will positive (placing b first).

 Task
 Your Goal: Sort Numbers Ascending
Given an array of numbers, sort the numbers ascending
 (1,2,3...) and return the sorted array. 
*/

function sortUp(array) {
    return array.sort((a,b)=> a-b);

}

module.exports = sortUp;

/*
Sorting Descending
Numbers Descending
In the previous example, we sorted our array ascending:

[3,2,4,1].sort(function comparison(a,b) {
    return a - b;
});
A negative result moves a in front of b. A positive result
 moves b in front of a. Zero keeps the order unchanged.

Sorting descending will be the opposite. We want a negative
 result to move b in front of a and a positive result to move 
 a in front of b.

Task
Your Goal: Sort Numbers Descending
Given an array of numbers sort them in descending order and 
return the array.
*/


function sortDown(array) {
    return  array.sort((a,b) => b-a);  
  }  
module.exports = sortDown;

  
/*
Strings Ascending
Comparing Strings
Strings have a built-in method for convienent comparison called localeCompare.

'a'.localeCompare('a'); // 0
'a'.localeCompare('b'); // -1
"apple".localeCompare("abcd"); // 1
The localeCompare method also gives options for things like
case, accent sensitivity and language. To learn more see
the full documentation.

Conveniently, localeCompare returns the numerical values
we need to help sort our strings! As shown above, when
a string is compared to one that would come after it,
the result is -1. When compared to a string that should 
precede it, the result is 1.

Your Goal: Sort Strings Ascending

Given an array of strings, sort them in ascending order
('a','b','c'...) and return the sorted array.

For debugging purposes, the tests will log your actual
results versus the expected test results.
*/

function sortStringsUp(array) {
    return array.sort();     
 } 
 module.exports = sortStringsUp;

/*
Strings Descending

Your Goal: Sort Strings Descending
Now it's time to flip the sort!

Given an array of strings, sort the strings in descending 
order ('c','b','a'...) and return the resulting sorted array.
*/
function sortStringsDown(array) {
    return array.sort((a, b) => b.localeCompare(a));    
}
module.exports = sortStringsDown; 

/*
Sort Students

Sorting by Multiple Properties
When it comes to objects, we can sort by their properties.

Let's consider some students:

const students = [
    { id: 1, graduated: true, grade: 86 },
    { id: 2, graduated: false, grade: 96 },
    { id: 3, graduated: false, grade: 78 },
    { id: 4, graduated: true, grade: 96 },
];
Let's sort this list by two rules in the following priority:

Students who Graduated
Highest Grades
const students = [
    { id: 4, graduated: true, grade: 96 },
    { id: 1, graduated: true, grade: 86 },
    { id: 2, graduated: false, grade: 96 },
    { id: 3, graduated: false, grade: 78 },
];
 Now the list shows the graduated students at the top and then
  it sorts those groups by the 
 highest grades.

 To compare students, this can be broken up into three 
 scenarios.
 Comparing Students
When we write our comparison function for the students, we
 can break this up into three scenarios:

The first student graduated and the second student didn't - 
We'll return -1, so the first student is sorted first.

The second student graduated and the first student didn't - 
We'll return 1, so the second student is sorted first.

The students have the same graduation status. - We can take
 the second student's grade and subtract the first student's
  (just like we did when we sorted numbers descending).

 Your Goal: Sort Students
Given an array of students, sort first by graduated then by 
grade like in the example above.

Each object in the students array will have properties id,
 graduated and grade just like in the example shown above.

 For debugging purposes, the tests will log your actual results 
 versus the expected test results.
*/


function sortStudents(students) {
    students.sort((a, b) => {
        if (a.graduated && !b.graduated) {
            return -1; // a should come before b
        } else if (!a.graduated && b.graduated) {
            return 1; // b should come before a
        } else {
            // If both are either graduated or not graduated,
            // then sort by grade
            return b.grade - a.grade;//sort in descending order
        }
    });
    return students;
}

module.exports = sortStudents;

/*
Sort by Month
Already provided for you is a list of MONTHS. These months are
 sorted from the beginning of the year (JAN) to the end of the
  year (DEC). 

What we need to do is sort an array of events by the month they
 are occurring in. Let's say we have the following events:

[{ event: 'dance', month: 'MAR' },
 { event: 'farmers market', month: 'JUN' },
 { event: 'parade', month: 'JAN' }]
The parade is the first event in the year, starting in January. Following that is the dance in March and the farmers market in June.

We need the order of these events to become:

[{ event: 'parade', month: 'JAN' },
{ event: 'dance', month: 'MAR' },
{ event: 'farmers market', month: 'JUN' }]
 Now everything is in the proper order!


Task
 Your Goal: Sort the Events
Given the array of events, sort them by the month that they
 occur in and return the sorted array.

Each object in the events array will have properties event 
and month just like in the example shown above.

 To find which events comes first, you'll need to see where
  it belongs in the MONTHS array. You can use the array
   indexOf method to find where it belongs.

 Details
 Array.prototype.indexOf
On the Array prototype is the method indexOf.

This method will return either a number greater than or equal
 to zero, indicating the index of the element, or negative 1,
  indicating it could not be found.

Let's see some examples:

const MONTHS = ['JAN', 'FEB', 'MAR'];

console.log( MONTHS.indexOf('JAN') ); // 0
console.log( MONTHS.indexOf('MAR') ); // 2

console.log(MONTHS.indexOf('go fish')); // -1
 As you can see both "JAN" and "MAR" were found and their 
 respective indexes were returned. The string "go fish" was
  not found so -1 was returned.

It's worth noting that indexOf is case sensitive!

const fruit = ['apples', 'oranges'];

console.log( fruit.indexOf('APPLES') ); // -1  
 */


const MONTHS = [
    'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
    'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
];

function sortByMonth(events) {
   return  events.sort((a,b)=>{
     return MONTHS.indexOf(a.month)- MONTHS.indexOf(b.month)
   });
    
}

module.exports = sortByMonth;
