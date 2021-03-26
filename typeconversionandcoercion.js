
/*
// Type Conversion - manually convert from one value type to another

const inputYear = '1991';
console.log(Number(inputYear), inputYear); // The number function converts the string to a number. In this case converting '1991' to 1991.
console.log(Number(inputYear + 18)) // Through adding the number function to the beginning of the function, 1991 will be converted into a number before the calculation inputYear + 18 is calculated, sending back a number of 2009.

console.log(Number('Andelle')); // Will print out NaN - not a number. This means that the value is an invalid number.

console.log(String(23), 23); // Will print the first 23 as a string and 2nd as a number.

// Type Coercion - when Javascript does it for us - happens whenever an operator is dealing with two values that have two different types.

console.log('I am' + ' ' + 23 + ' ' + 'years old');
console.log('I am' + '  ' + '23' + ' ' + 'years old'); // The + operator triggers a coercion to strings. Whenever theres an operation between a number and a string, the number will be converted to a string. Meaning both sentences will print the same thing.

console.log('23' - '10' - 3); // The string was converted into numbers. Adding the + operator will concatenate the string as one number 23103
console.log('23' * '2'); // Will print 46, because the multiply operator can only work with numbers.
console.log('23' / '2') // Will print 11.5, because the divide operator can only work with numbers.

*/
