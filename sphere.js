// Original function syntax, or long syntax.
// const volumeOfSphere = (diameter) => {
//   return (1/6) * Math.PI * diameter * diameter * diameter;
// };

// Refactored function syntax, no parentheses for single parameters, no {} or return keyword for single-line blocks
const volumeOfSphere = diameter =>
(1/6) * Math.PI * diameter * diameter * diameter;

console.log('The volume of a sphere is ' + volumeOfSphere(10) + ' cubic centimeters.');
