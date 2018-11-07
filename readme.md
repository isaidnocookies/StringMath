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
var StringMath = require('StringMath');

var stringmath = new StringMath();
stringmath.add("0.001", "0.002"); // '0.003'
stringmath.subtract("0.02", "0.01"); // '0.01'
```

Also, check out [ThreeBx]

   [ThreeBx]: <https://www.threebx.com>
