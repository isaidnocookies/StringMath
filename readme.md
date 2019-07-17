StringMath is a basic module that allows common math functions to be applied to strings.

Current functions are:
  - add
  - subtract
  - isGreaterThan
  - isGreaterThanOrEqualTo
  - isLessThan
  - isLessThanOrEqualTo
  - isEqual
  - roundUpToNearest0001
  - sciToDecimal

# Current Limitations!

  - Does not support negative numbers

### Useage

Coming soon...

Installation
```sh
$ npm install -s @isaidnocookies/StringMath
```

Useage
```js
var StringMath = require('@isaidnocookies/StringMath');

var stringmath = new StringMath();
var addresult = parseFloat(stringmath.add("0.001", "0.002"));
var subresult = parseFloat(stringmath.subtract("0.2", "0.1"));

console.log("0.001 + 0.002 = " + addresult); // '0.003'
console.log("0.2 - 0.1 = " + subresult); // '0.01'
```
