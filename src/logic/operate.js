import Big from "big.js";

const operate = (numOne, numTwo, operation) => {
  switch (operation) {
    case "+":
      numOne = Big(numOne);
      numTwo = Big(numTwo);
      return numOne.plus(numTwo).valueOf();
    case "-":
      numOne = Big(numOne);
      numTwo = Big(numTwo);
      return numOne.minus(numTwo).valueOf();
    case "x":
      numOne = Big(numOne);
      numTwo = Big(numTwo);
      return numOne.times(numTwo).valueOf();
    case "/":
      if (numTwo === "0") {
        return "";
      } else {
        numOne = Big(numOne);
        numTwo = Big(numTwo);
        return numOne.div(numTwo).valueOf();
      }
    case "%":
      return percentage(Number(numOne), numTwo);
    case "+/-":
      return String(Number(numOne) * -1);
    default:
  }
};

const percentage = (numOne, numTwo) => {
  if (numOne >= 0 && isBlank(numTwo)) {
    return Big(numOne)
      .div(100)
      .valueOf();
  } else if (numOne >= 0 && Number(numTwo) >= 0) {
    return Big(numOne)
      .div(100)
      .times(Big(Number(numTwo)))
      .valueOf();
  } else {
    return "";
  }
};

const isBlank = numTwo => {
  return numTwo === "" ? true : false;
};

export default operate;
