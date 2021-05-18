const concatStrings = (str, sep) => {
  if (typeof str !== "string") return "";
  if (typeof sep !== "string") separator = "";
  let zam = str;
  const concatstr = (str) => {
    if (typeof str !== "string") {
      return zam;
    } else {
      zam += sep + str;
      return concatstr;
    }
  };
  return concatstr;
};
const myString = concatStrings("dnb", "=")("ss")("")("10");

const isValid = (num) => {
  if (typeof num !== "number" || isNaN(num) || num === num / 0) {
    return false;
  }
  return true;
};
class Calculator {
  constructor(x, y) {
    if (!isValid(x) || !isValid(y)) {
      throw new Error();
    }
    if (arguments.length > 2) {
      throw new Error();
    }
    this.x = x;
    this.y = y;
  }

  setX = (num) => {
    if (!isValid(num)) {
      throw new Error();
    }

    this.x = num;
  };

  setY = (num) => {
    if (!isValid(num)) {
      throw new Error();
    }

    this.y = num;
  };

  logSum = () => {
    console.log(this.x + this.y);
  };

  logMul = () => {
    console.log(this.x * this.y);
  };

  logSub = () => {
    console.log(this.x - this.y);
  };

  logDiv = () => {
    if (this.y === 0) {
      throw new Error();
    }

    console.log(this.x / this.y);
  };
}

const calculator = new Calculator(12, 3);

calculator.logSum();
calculator.logDiv();
calculator.setX(15);
calculator.logDiv();
const logCalculatorDiv = calculator.logDiv;
logCalculatorDiv();
