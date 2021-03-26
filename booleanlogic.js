//Boolean logic: The And, Or and Not Operators

const hasDriversLicense = true; // Variable A 
const hasGoodVision = true // Variable B 

console.log(hasDriversLicense && hasGoodVision); // AND Operator
console.log(hasDriversLicense || hasGoodVision); // OR Operator
console.log(!hasDriversLicense); // NOT Operator

const shouldDrive = (hasDriversLicense && hasGoodVision);

// if (shouldDrive) {
//     console.log('Sarah is able to drive!')
// } else {
//     console.log('Someone else should drive...');
// }

const isTired = false; // C 
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}