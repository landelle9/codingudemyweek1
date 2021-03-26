/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

// A value is a piece of data. The most important piece of information in programming.
//Values can get stored into variables. We assign values to variables.

/*
console.log("Andelle");
console.log(23);


//A variable is a box into which we can store a value as show below "firstName", "my FirstJob".

let firstName = "Andelle";
console.log(firstName);
let myFutureJob = "Programmer";
let myCurrentJob = "Software Engineer Apprentice";
// let job1 = "programmer";
//let job2 = "teacher";

//This way of writing variables isn't clear nor descriptive. When writing variable names, the name should be descriptive and clear of what value will be assigned to it.

console.log(myFutureJob);
console.log(myCurrentJob);

//Conventions and Rules

let firstNamePerson = "Andelle";
// When writing a variable name, we use camel casing

//let 3years = 3;
//You cannot start variable names with numbers.

//let Andelle& Rahshea = "AR"
// Variable names can only contain numbers, letters, underscores or the dollar sign.

let Andelle_Rahshea = "AR";
let $function = 23;

// We should not start a new Variable with a capital letter e.g let Person = "Andelle";

let PI = 3.1415;

// Constant variables do not change and are written in capital letters.

// Make sure variable names are descriptive. They should be easy to understand and know what the variable should contain through the name you give it

// Create a comment by typing command //
// Create a multi line comment by typing */

//Data types // 
/*
//true; // Boolean value
let javascriptIsFun = true;
console.log(javascriptIsFun);

//console.log(typeof true);
console.log(typeof javascriptIsFun);
//console.log(typeof 23);
//console.log(typeof 'Andelle');

//dynamic typing - easily change the type of a value that is held by a varible. E.G
/*
javascriptIsFun = 'YES!'; //reassigns the value of the original variable "let javascriptIsFun";
console.log(typeof javascriptIsFun);

//undefined shows when a value is empty
let year;
console.log(year);
console.log(typeof year);
// Whenever we declare an empty variable, the value will show as undefined, the typeof the variable will also show as undefined as a value hasn't been assigned to the variable.
year = 1991;
console.log(year);
//console.log(typeof year);

//console.log(typeof null); // This is an error. It should show on the console as null.

//Declaring variables //

//We delcare the let keyword that declare variables that can change later during our program

//let age = 30;
//age = 31;

//^^ Reassign a value to a variable. Mutate the age variable in this case from 30 to 31.

// const variable is declared to a value that cannot be changed

//const birthYear = 1991; // An immutable variable. A variable that cannot be changed. Const = constant. The variable stays the same.
// As good coding practice, use const if you're sure the variable is due to change. It's good practice to have as little variable changes as possible, as this increases the chance of bugs showing in your code.

//var keyword - should be completely avoided. It's the old way of defining variables. Before ES6.

//var job = 'programmer';
//job = "software engineer apprentice";

//We don't need to declare variables at all and can instead put down the following:

//lastName = 'Bjorn';
//console.log(lastName); // Always properly write variables. Do NOT write code like this.

//Operators

//An operator allows us to combine multiple values or transform values.
/*
// Math operators
const now = 2037
const ageAndelle = now - 1997;
const ageRahshea = now - 1999;
console.log(ageAndelle, ageRahshea);
console.log(ageAndelle * 2, ageAndelle / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 - 2 * 2 * 2
const firstName = 'Andelle';
const lastName = 'Bjorn';
console.log(firstName + ' ' + lastName);

//Assignment Operators
let x = 10 + 5; //15
x += 10; // This means x = x + 10 = 25 - We are reassigning the X value
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 2 = 99
console.log(x);

// Comparison operators - to produce boolean values

console.log(ageAndelle > ageRahshea); // >,<,>=, <=
console.log(ageRahshea >= 18); // We would store these results in variables and not always to the console. But we need the console to see the results because we're still learning.

const isFullAge = ageRahshea >= 18;

console.log(now - 1997 > now - 1999);

*/

//Operator Precedence
// const now = 2037
// const ageAndelle = now - 1997;
// const ageRahshea = now - 1999;

// console.log(now - 1997 > 1999);

// let x, y;
// x = y = 25 - 10 - 5; // After - operations - x = y = 10 because x is the result of doing 25-10-5. Subtraction has a higher precendence. x=y=10, x =10. When evaluating from right to left. 
// console.log(x, y);

// // Grouping is the highest precendence (21)


// const averageAge = (ageAndelle + ageRahshea) / 2;
// console.log(ageAndelle, ageRahshea, averageAge);



