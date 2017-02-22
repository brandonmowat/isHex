var IsHex = require('../index.js');

function assertEquals(result, expected) {
  return result == expected;
}

function testSuite() {
  // Write tests here...
  return assertEquals(IsHex.isHex("000"), true) &&
    assertEquals(IsHex.isHex("ggdeqwd2d2g"), false) &&
    assertEquals(IsHex.isHex("fFfFfF"), true) &&
    assertEquals(IsHex.isHexColor("1FfeFf"), true) &&
    assertEquals(IsHex.isHexColor("effefg"), false) &&
    assertEquals(IsHex.isHexColor("geffefg"), false)?"All tests passed👌🏻":"failed..."
}

console.log(testSuite());
