

// Shortest String
/*
Task
Determine which of the two strings is shorter, return that string.

//Half Value
/*The function halfValue takes an array of numbers. It should return a 
new array with all the original values halved.

Tip
to get shortest string you need to
compare thelength of the given strings*/

/*
Odd numbers should be rounded up to the nearest whole number.

Method
To implement the halfValue function in JavaScript, you need to process
 each number in the array, halve it, and round up if it's odd. The Math.
 ceil function can be used to round up to the nearest whole number.


*/

function shortestString(str1, str2) {
    if(str1.length < str2.length){
        return str1;
    }else{
        return str2;
    }
}
module.exports = shortestString;


//Half Value

 /*
   This function halfValue takes an array numbers and
    returns a new array. Each number in the array is halved
     using the map function. For odd numbers, 
   Math.ceil is used to round up to the nearest whole number.
   
   The map method is used in the halfValue function to create a 
   new array by transforming each element in the original array.
    In JavaScript, map is a powerful and commonly used array method
     that applies a given function to each element of an array and
      returns a new array containing the results.
   
   In this case, you want to take an array of numbers and return a 
   new array where each number is halved, with odd numbers rounded
    up. By using map, you can apply this operation to each element 
    of the array efficiently. The map method iterates over each 
    element in the numbers array, applies the transformation 
    (halving the number and rounding up if it's odd), and includes
     the result in the new array.
   
   Here's a breakdown of the function:
   
   numbers.map(num => Math.ceil(num / 2)): For each number (num) in the numbers array, num / 2 halves the number. Math.ceil is then used to round this half-value up to the nearest whole number if it's not already an integer. This operation is performed on every element in the array.
   The resulting array, with each original value halved (and rounded up if it was odd), is then returned by the functio
   */


function halfValue(numbers) {
    return numbers.map(num => Math.ceil(num/2));
   }
   
   module.exports = halfValue;

// Count C 
/*To implement the countC function that counts both 
lower-case 'c' and upper-case 'C' in a given string, 
you can iterate through each character in the string 
and incrementa counter whenever you encounter either 'c'
 or 'C'.
 
 This function iterates through each character in the 
 string str. If the character is either 'c' or 'C', it
  increments the  count variable. Finally, it returns 
  the total count.
  
  i < str.length is used as the condition in the for loop. 
  This condition ensures that the loop iterates over every 
  character in the string str. Here's a breakdown:

i is a loop variable that starts at 0.
str.length is the total number of characters in the string str.
The loop runs as long as i is less than str.length. This means
 the loop will execute for each character in the string, from 
 the first character (at index 0) to the last
 character (at index str.length - 1). */


function countC(str) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'c' || str[i] === 'C') {
            count++;
        }
    }

    return count;
}
module.exports = countC;

//Counting Vowels
/* countVowels function iterates through each character in the 
string str, and if the character is a vowel (either lowercase 
or uppercase), it increments the count. Finally, it returns
 the total count of vowels in the string.

  the variable char is used within the for-loop to iterate 
  through each character of the input string str. The for-loop 
  syntax for (let char of str) is a way to go through each 
  character in the string one by one.

The char variable represents the current character in the 
string during each iteration of the loop.
 The function then checks if this character is a vowel 
 (either in lowercase or uppercase) by using vowels.includes(char).
 If it is a vowel, the count is incremented.

 This approach ensures that every character in the string is checked, and all vowels are counted accurately, regardless of their case (uppercase or lowercase).
 */


 function countVowels(str) {
    const vowels = "aeiouAEIOU";
    let count= 0;

    for(let char of str){
        if(vowels.includes(char)){
            count++;
        }
    }

return count;
}

module.exports = countVowels;

//Reverse
//reverse string cat to tac
/*
The split, reverse, and join methods are used in the reverse
function to reverse the characters in a string. 
Here's how each part works:

split(''): This method splits the string into an array of 
characters. For example, "cat".split('') would become 
['c', 'a', 't'].

reverse(): This method reverses the order of the elements in 
an array. So, applying reverse() to ['c', 'a', 't'] 
transforms it into ['t', 'a', 'c'].

join(''): This method joins the elements of an array back 
into a string. When applied to ['t', 'a', 'c'], it creates
 the string 'tac'.

By combining these methods, the reverse function effectively reverses the order of characters in the input string.
 */

function reverse(string) {
    return string.split("").reverse().join("");
     
 }
 
 module.exports = reverse;


 //Palindrome
 /*
a word, phrase, or sequence that reads the same 
backwards as forwards, e.g. madam

This function first cleans the input string by
 removing any non-alphanumeric characters and converting it
to lowercase. It then checks if the cleaned string is the
 same as its reverse. If they are the same, the function
  returns true, indicating the string
 is a palindrome. Otherwise, it returns false.

 */

function isPalindrome(string) {
    // Remove any non-alphanumeric characters and convert to lowercase
    const cleanedString = string.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

    // Compare the cleaned string with its reverse
    return cleanedString === cleanedString.split('').reverse().join('');
}

module.exports = isPalindrome;


//Sum Together Arrays


function sumTogether(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
      result.push(arr1[i] + arr2[i]);
    }
    return result;
  }
  
  module.exports = sumTogether;
  
  
  /*
  Using push in the sumTogether function adds the sum of the
   corresponding elements from arr1 and arr2 to the result array.
    This method is used because the result array is initially 
    empty, and we need to fill it with the summed values.
  
  Here's a step-by-step explanation of what happens in each
   iteration of the loop:
  
  For each index i, the function takes the value at index i 
  from arr1 and arr2.
  It then calculates the sum of these two values.
  The push method appends this sum to the end of the result array.
  By the end of the loop, result contains the summed values of 
  corresponding elements from arr1 and arr2, thus fulfilling
   the function's purpose.
  
  
  */


  //Count the Elements
/*
Write a function countElements that takes in an array and 
returns an object a count of each element in the array.

const elements = ["e", "k", "e", "z", "i", "z"];
countElements(elements); // returns {e: 2, k: 1, z: 2, i: 1}

*/


function countElements(elements) {
    let counts = {};
    for(let element of elements){
        counts[element] = (counts[element]|| 0) + 1
    
    }
    return counts;
    }
    
    module.exports = countElements;
    
    /*
    This function iterates through the array and uses an 
    object to store the counts of each element. If the element is 
    encountered again, its count is incremented.
    
    The expression counts[element] = (counts[element] || 0) + 1 is using a JavaScript feature called short-circuit evaluation along 
    with the concept of default values.
    
    Here's a breakdown of how it works:
    
    counts[element] is used to access the current count of the 
    element in the counts object.
    (counts[element] || 0) checks if counts[element] has a truthy 
    value. If it does, it uses that value; otherwise, it defaults 
    to 0.
    + 1 increments the count by 1.
    So, this expression effectively increments the count of
     the current element in the counts object. If the element 
     hasn't been encountered before, its count starts at 1.
    */


     //Player Hand Score

     function playerHandScore(hand) {
        const cardValues ={
            "K" : 4,
            "Q":3,
            "J":2
        };
    
        let totalScore = 0;
        
        for(let i=0; i<hand.length; i++){
            totalScore += cardValues[hand[i]];
        }
        return totalScore;
    
    }
    
    module.exports = playerHandScore;
    
    /*
    The line totalScore += cardValues[hand[i]]; is a shorthand
    way of adding the value of the current card to the total score.
    
    Here's a breakdown of what's happening:
    
    hand[i] retrieves the current card from the hand string based
     on the index i.
    
    cardValues[hand[i]] uses the current card (e.g., "K", "Q", or "J") as a key to look up
     its corresponding value in the cardValues object.
    
    The retrieved value is then added to the totalScore using
     the += operator, which is a shorthand for
      totalScore = totalScore + cardValues[hand[i]];.
    
    This line effectively calculates and accumulates the total 
    score by adding up the values of each card in the hand.
    */

