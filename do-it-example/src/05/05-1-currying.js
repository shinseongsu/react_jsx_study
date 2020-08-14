function multiply(a, b) {
  return a * b;
}

function multiplyTwo(a) {
  return multiply(a, 2);
}

/*
function multiplyX(x) {
  return function (e) {
    return multiply(a, x);
  };
}
*/

const multiplyX = (x) => (a) => multiply(a, x);

const multiplyTree = multuplyX(3);
const multyFour = multuplyX(4);

/*
const result1 = multuplyTree(3);
const result2 = multuplyFour(3);
*/

// 동일
const result1 = multuplyX(3)(3);
const result2 = multuplyX(4)(3);

const equation = (a, b, c) => (x) => x * a * b + c;
const formula = equation(2, 3, 4);
const x = 10;
const result = formula(x);

const multuply = (a, b) => a * b;
const add = (a, b) => a + b;

const multiplyX = (x) => (a) => multuply(a, 2);
const addX = (x) => (a) => add(x, a);

const addFour = addX(4);
const multyplyTwo = multiplyX(2);
const multiplyThree = multiplyX(3);
const formula = (x) => addFour(multiplyThree(multiplyTwo));
