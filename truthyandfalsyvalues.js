/*
//Falsy values are values that are not exactly false but will become false when we convert them into boolean.
//Truthy values are values that will be converted to true. Any number that is not 0, any string that is not empty.

// 5 falsy values: 0, '', undefined, null, Nan

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean({}));
console.log(Boolean('Andelle'));
console.log(Boolean(''));

// When using if/else statements with falsy values, the else block will be executed as the result will be false. However, if the if value is a truthy value e.g 100, the result will come back as true. E.G
const money = 100; //0 is a falsy value.
if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log('You should get a job!');
}
let height;
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED')
}

// The console will print 'Height is UNDEFINED' because height has not be assigned a value. Also, if 0 is assigned to height it will still print that Height is UNDEFINED because 0 is a falsy value.

*/