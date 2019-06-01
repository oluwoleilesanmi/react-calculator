import operate from "./operate";

const calculate = (stateData, btnName) => {
  let { total, next, operator, clear } = stateData;

  if (clear === true && numMatched(btnName)) {
    total = btnName;
    operator = "";
    next = "";
    clear = false;
    return { total, next, operator, clear };
  }
  clear = false;

  if (!isNaN(btnName) || (operator === "%" && numMatched(btnName))) {
    if (operator === "%") {
      next = btnName;
      total = operate(total, next, operator);
      clear = true;
    } else {
      operator === "" ? (total = concat(total, btnName)) : (next = concat(next, btnName));
    }
  } else if (btnName === ".") {
    if (operator === "" && total.indexOf(".") === -1) {
      total = concat(total, btnName);
    } else if (operator !== "" && next.indexOf(".") === -1) {
      next = concat(next, btnName);
    }
  } else if (opMatched(btnName)) {
    if (next === "") {
      if (total !== "") operator = btnName;
    } else {
      console.log("inside");
      total = operate(total, next, operator);
      operator = btnName;
      next = "";
    }
  } else if (btnName === "=") {
    if (total && next) {
      total = operate(total, next, operator);
      operator = "=";
      next = "";
      clear = true;
    } else {
      total = "";
      operator = "";
      next = "";
    }
  } else if (btnName === "%") {
    if (next === "" && !isNaN(total)) {
      total = operate(total, next, btnName);
      operator = btnName;
    }
  } else if (btnName === "AC") {
    total = "";
    next = "";
    operator = "";
  } else if (btnName === "+/-") {
    total = operate(total, "", btnName);
  }

  return { total, next, operator, clear };
};

const opMatched = btn => {
  return ["x", "+", "-", "/"].includes(btn);
};

const numMatched = btn => {
  return ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(btn);
};

const concat = (stateChar, char) => {
  return stateChar === "" ? char : stateChar + char;
};

export default calculate;
