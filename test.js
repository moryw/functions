const getResponse = prompt('Hello Matt would you like to know how old you are in Dog Years?')
console.log(getResponse);

const response = getResponse.toLowerCase(); //toLowerCase doesn't change original string it must be assigned to new var
console.log(response);

const continueYesNo = response => {
  if (response == 'yes') {
    return alert ("Let's do this!")
  } else {
    alert ("Fine hate dogs and age!!");
    return false;
  }
};
continueYesNo(response); // I want code to stop here if returns false
console.log(continueYesNo(response));

//const usersAge = prompt('How old are you?');
const usersAge = () => {
  if (continueYesNo(response) == true ) {
    return prompt('How old are you?');
  } else {
    return false;
  }
};


// const continueYesNo = response => {
//   response.toLowerCase()
//   if (response == 'yes') {
//     return alert ("Let's do this!");
//   } else {
//     return alert ("Fine hate dogs and age!!");
//   }
// };
//
// continueYesNo(getResponse);
