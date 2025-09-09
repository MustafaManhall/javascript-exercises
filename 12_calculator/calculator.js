const add = function(numOne, numTwo) {
	return numOne + numTwo;
};

const subtract = function(numOne, numTwo) {
	return numOne - numTwo;
};

const sum = function(arr) {
  return arr.reduce((pre,cur) => pre + cur,0);
};

const multiply = function(arr) {
  return arr.reduce((pre,cur) => pre * cur);
};

const power = function(num,pow) {
	return Math.pow(num,pow);
};

const factorial = function(num) {
  let sum = 1;
	for ( let i=1; i<=num; i++) {
    sum *= i;
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
