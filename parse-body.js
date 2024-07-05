function firstStep(input) {
  // Your code here
  return input.split("&");
}

function secondStep(input) {
  // Your code here
  // let resArray = [];
  return input.map(item => item.split('='));
  // return resArray;
}

function thirdStep(input) {
  // Your code here
  return input.map(innerInput => innerInput.map(ele => ele.replace(/\+/g, " ")))
}

function fourthStep(input) {
  // Your code here
  return input.map(innerInput => innerInput.map(ele => decodeURIComponent(ele)));
}

function fifthStep(input) {
  // Your code here
  // let resObj = {};
  // input.map(innerInput => resObj[innerInput[0]] = innerInput[1]);
  // return resObj;
  let resObj = input.reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {});
  return resObj;
}

function parseBody(str) {
  // Your code here
  return fifthStep(fourthStep(thirdStep(secondStep(firstStep(str)))));
}

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = {
  firstStep,
  secondStep,
  thirdStep,
  fourthStep,
  fifthStep,
  parseBody
};
