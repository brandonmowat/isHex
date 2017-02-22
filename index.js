function isHexColor(input) {
  var hexPattern = /([A-F]|[a-f]|\d){6}/;
  return input.match(hexPattern) === null?false:input.match(hexPattern)[0] === input;
}

function isHex(input) {
  var hexPattern = /([A-F]|[a-f]|\d)*/;
  return input.match(hexPattern)[0] === input;
}

module.exports = {isHex, isHexColor};
