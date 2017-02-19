function isHexColor(input) {
  var hexPattern = /([a-f]|\d){6}/;
  return hexPattern.test(input);
}

function testIsHex() {
  console.log(isHexColor('ffffff'));
  console.log(isHexColor('000000'));
  console.log(isHexColor('a0a0a0'));
  console.log(isHexColor('asdfgh'));
}

testIsHex();
