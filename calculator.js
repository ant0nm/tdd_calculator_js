function add(firstNum, secondNum) {
  return firstNum + secondNum;
}

function subtract(firstNum, secondNum) {
  return firstNum - secondNum;
}

function sum(numArray) {
  return numArray.reduce((total, num) => total + num, 0);
}

module.exports = {add, subtract, sum}
