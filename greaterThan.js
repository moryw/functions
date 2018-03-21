// This is a function DECLARATION, it does not need to end in a semi semicolon.

// function isGreaterThan(numberOne, numberTwo) {
//   if (numberOne > numberTwo) {
//     return true;
//   } else {
//     return false;
//   }
// }

//This is a function EXPRESSION, it needs to end in a semicolon because it is inside a variablbe.

// const isGreaterThan = function (numberOne, numberTwo) {
//   if (numberOne > numberTwo) {
//     return true;
//   } else {
//     return false;
//   }
// };

//This is a function EXPRESSION using arrow function syntax.

const isGreaterThan = (numberOne, numberTwo) => {
  if (numberOne > numberTwo) {
    return true;
  } else {
    return false;
  }
};

console.log(isGreaterThan((3*10),(65/2)));;
