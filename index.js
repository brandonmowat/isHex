function isHexColor(input) {
  var hexPattern = /([a-f]|\d){6}/;
  return hexPattern.test(input);
}

function isHex(input) {
  var hexPattern = /([a-f]|\d)*/;
  return hexPattern.test(input)
}

function testIsHex() {
  console.log(isHex('ffffff'));
  console.log(isHex('0000000000'));
  console.log(isHexColor('a0a0a0'));
  console.log(isHexColor('asdfgh'));
}

testIsHex();
