function firstStep(input) {
  // Your code here
  console.log(input)
  let keyValuePairsStr = input.split("&");
  console.log(keyValuePairsStr)
  return keyValuePairsStr;
}

function secondStep(input) {
  // Your code here
  let keyValuePairItems = input.map((el) => {
    return el.split("=");
  });
  return keyValuePairItems;
}

function thirdStep(input) {
  // Your code here
  let decodedStrings = input.map((el) => {
    el[1] = el[1].replace(/\+/g, " ");
    return el;
  });

  return decodedStrings;
}

function fourthStep(input) {
  // Your code here
  let decodedURIs = input.map((el) => {
    el[1] = decodeURIComponent(el[1]);
    return el;
  });

  return decodedURIs;
}

function fifthStep(input) {
  // Your code here
  let decodedObj = input.reduce((obj, el) => {
    return {...obj, [el[0]]:el[1]};
    }, {});
  return decodedObj;
}

function parseBody(str) {
  // Your code here
  let keyValPairs = firstStep(str);
  let keyValItems = secondStep(keyValPairs);
  let keyValDecoded1 = thirdStep(keyValItems);
  let keyValDecoded2 = fourthStep(keyValDecoded1);

  let parsedBody = fifthStep(keyValDecoded2);
  return parsedBody;
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