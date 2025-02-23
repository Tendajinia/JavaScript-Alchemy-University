

  //  ARRAYS


  /*
  Arrays store data using [] brackets
  E.g
  const numbers = [1, 2, 3, 4, 5];
  const booleans = [true, false, true, true];
  const strings = ["happy", "go", "lucky"];
  */

// Create Array

const array = [1,2,3] // <-- create an array here!

module.exports = array;

// Has One
function hasOne(array) {
    return array.includes(1)
}

module.exports = hasOne;

// Sum Even

//Sum Even
/*
Running Value

Finding the Average
const result = average([80,90,98,100]); 
console.log( result ); // 92


module.exports = hasOne;

or

function average(array) {
    let total = 0;
    for(let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return (total / array.length);
}

*/ 


function sumEven(array) {
    let total=0 ;
    for(let i=0;  i<array.length; i++){
        if(array[i] % 2 ===0 ){
           total += array[i];
        }
        
    }

   return total ;
}

module.exports = sumEven;


// Unique => Returning a new array

/*
To find unique elements in an array, we can use the filter() 
method and the indexOf() method. 
The indexOf() method is used to check if the current element is 
the first occurrence of that element in the array. If it is, 
then it is added to the new array. If not, then it is ignored.

*/

function unique(array) {
    const uniqueArray = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (!uniqueArray.includes(element)) {
            uniqueArray.push(element);
        }
    }
    return uniqueArray;
}
module.exports = unique;

/*
const array = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6];
const unique = unique(array);
console.log(uniqueNumbers); // [1, 2, 3, 4, 5, 6]

 */

//Modifying Array Values- Add one

/*
To add 1 to every element within an array, you can use the map() 
method in JavaScript. The map() method creates a new array with
the results of calling a provided function on every element in the calling array

we are using the map() method to iterate over each element in the 
array and add 1 to it. The map() method returns a new array with
the modified elements. Since we are modifying the original
array directly, we don’t need to return anything from the function.

*/

function addOne(array) {
    array.map((element, index) => {
      array[index] = element + 1;
    });
  }


//Modifying Arrays -Remove Occurrences 
 /*
 Splice()
 The splice() method in JavaScript is used to add and/or
 remove elements from an array.
 It overwrites the original array. 

 Given an array of integers and a number, num, find all 
 the occurrences of the number and remove it from the array.
 */ 
 function removeOccurrences(array, num) {
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] === num) {
            array.splice(i, 1);
        }
    }

    for(let i=array.length-1;  i >=0 ; i--){
        if(array[i]=== num){
            array.splice(i,1);
        }

    }
    
}

module.exports = removeOccurrences;
