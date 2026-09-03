// converter = double which is a function returning a + a;
// so converter(x) would return x + x;
// x = 1, y = 2, z = 3 so converter converts them to 2, 4, 6
// which in end we are printing basically
function conversions(converter, x, y, z) {
  const convertedX = converter(x);
  const convertedY = converter(y);
  const convertedZ = converter(x);
  console.log(convertedX, convertedY, convertedZ,);
}

// named function
function double(a) {
  return a + a;
}
conversions(double, 1, 2, 3)

// anonymous function
conversions(function(a) {
  return a + a;
}, 1, 2, 3)


// anonymous functions in line 18 are replacements for single purpose functions
// like function double() which was called later on through first conversion
// second does the same job but with *anonymous functions




