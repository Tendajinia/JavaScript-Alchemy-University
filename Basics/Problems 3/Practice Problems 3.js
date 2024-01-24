
//Either Not Both

/*
Write a function eitherNotBoth that takes in a number
 and returns true if the the number is divisible 
by either 3 or 5, but not both. Return false otherwise.
*/

function eitherNotBoth(num) {
    const divisibleBy3 = num % 3 === 0;
    const divisibleBy5  = num % 5 === 0;

    if(divisibleBy3 && divisibleBy5){
        return false;
    }
    else if(  divisibleBy3 || divisibleBy5){
      return true;
    }
    else{
        return false;
    }
}

module.exports = eitherNotBoth;


// Or

function eitherNotBoth(number) {
    const divisibleBy3 = number % 3 === 0;
    const divisibleBy5 = number % 5 === 0;
  
    return (divisibleBy3 || divisibleBy5) && !(divisibleBy3 && divisibleBy5);
  }

//Fizz Buzz
/*

Write a function fizzBuzz that takes an array of numbers 
and replaces any number divisible by three with the word
 "fizz" and any number divisible by five with the word "buzz".
  If a number is divisible by both three and five, replace it
   with "fizzbuzz"

Once the appropriate numbers are replaced, return a 
concatenated string with only the words "fizz" or "buzz" 
included.

const numbers = [1, 3, 5, 9, 11, 12, 20];

fizzBuzz(numbers); // returns "fizzbuzzfizzfizzbuzz"

Answer
This function iterates through the numbers array,
 checking each number against the conditions using 
 if statements. If a number is divisible by both 3 and 5, 
 it appends "fizzbuzz" to the result. If it's only divisible 
 by 3, it appends "fizz", and if it's only divisible by 5, it
  appends "buzz".
 The function then returns the concatenated string.*/

 function fizzBuzz(numbers) {
    let result = '';

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0) {
            result += 'fizzbuzz';
        } else if (numbers[i] % 3 === 0) {
            result += 'fizz';
        } else if (numbers[i] % 5 === 0) {
            result += 'buzz';
        }
    }

    return result;
}

module.exports = fizzBuzz;


