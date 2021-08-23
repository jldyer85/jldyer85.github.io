// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
//loop through numbers 1-100 by 1//
for (var i = 1; i < 101; i++){
    //if number is multiple of 3 && 5, print 'Fizzbuzz
    if (i % 3 == 0 && i % 5 == 0){
        console.log('FizzBuzz');
    //else if number is only multiple of 3, print 'Fizz'
    } else if (i % 3 == 0){
        console.log('Fizz');
    //else if number is only multiple of 5, print 'Buzz'
    } else if (i % 5 == 0){
        console.log('Buzz');
    //else print the number
    } else {
        console.log(i);
    }
}
    // YOUR CODE GOES ABOVE HERE //
}
// console.log(fizzBuzz[i]);
// (i % 5 == 0)
// (i % 3 == 0)
// (i % 3 == 0 && i % 5 == 0)

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}