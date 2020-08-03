var array1 = ['one', 'tow'];
var array2 = ['three', 'four'];

const combined = [...array1, ...array2];

console.log(combined);

var objectOne = { one: 1, two: 2, other: 0 };
var objectTwo = { three: 3, four: 4, other: -1 };
var combined1 = {
  one: objectOne.one,
  two: objectOne.two,
  three: objectTwo.three,
  four: objectTwo.four,
};

combined1 = Object.assign({}, objectOne, objectTwo);
combined1 = Object.assign({}, objectTwo, objectOne);

var others = Object.assign({}.combined1);
delete others.other;
