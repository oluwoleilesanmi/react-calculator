import Big from "big.js";

const operate = (numOne, numTwo, operation) => {
  numOne = Big(numOne);
  if (!isBlank(numTwo)) numTwo = Big(numTwo);

  switch (operation) {
    default:
      return new Big(0).valueOf();
    case "+":
      return numOne.plus(numTwo).valueOf();
    case "-":
      return numOne.minus(numTwo).valueOf();
    case "X":
      return numOne.times(numTwo).valueOf();
    case "/":
      validate(numTwo);
      return numOne.div(numTwo).valueOf();
    case "%":
      return percentage(numOne, numTwo);
  }
};

const validate = num => {
  if (num.valueOf() === "0") return "";
};

const percentage = (numOne, numTwo) => {
  if (numOne >= 0 && isBlank(numTwo)) {
    return numOne.div(100).valueOf();
  } else if (numOne >= 0 && numTwo >= 0) {
    return numOne.div(100).times(numTwo).valueOf();
  } else {
    return "";
  }
};

const isBlank = numTwo => {
  return numTwo === "_" ? true : false;
};

export default operate;
