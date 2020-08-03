var x = 0;
var y = 0;

var obj = { x, y };
var randomkeyString = 'other';
var combined = {
  ['one' + randomkeyString]: 'some Value',
};

var obj2 = {
  x,
  methodA() {
    console.log('method A');
  },
  methodB() {
    return 0;
  },
};
