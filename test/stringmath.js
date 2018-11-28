var expect = require("chai").expect;
var StringMath = require("../index.js");

describe("Addition Tester", function() {
      it("Adds strings together", function() {
            var stringmath = new StringMath();

            var one = stringmath.add("1", "1");
            var onepointone = stringmath.add("1", "0.1");
            var zero = stringmath.add("0", "0");

            expect(parseFloat(one)).to.equal(2);
            expect(parseFloat(onepointone)).to.equal(1.1);
            expect(parseFloat(zero)).to.equal(0);
      });
      it("Adds large string to small string", function() {
            var stringmath = new StringMath();
            var large = stringmath.add("10000000000", "0.00000000001");

            expect(parseFloat(large)).to.equal(10000000000.00000000001);
      });
});

describe("Subtraction Tester", function() {
      it("Subtracts strings", function() {
            var stringmath = new StringMath();

            var zero = stringmath.subtract("1", "1");
            var onepointone = stringmath.subtract("1.2", "0.1");

            expect(parseFloat(zero)).to.equal(0);
            expect(parseFloat(onepointone)).to.equal(1.1);
      });
});

describe("StandardizeStrings Tester", function() {
      it("Strings are the same", function() {
            var stringmath = new StringMath();

            var one = stringmath.standardizeStrings("1.00000", "1.0");
            var two = stringmath.standardizeStrings("1.200000", "0001.2");

            expect(one.first).to.equal(one.second);
            expect(parseFloat(two.first)).to.equal(parseFloat(two.second));
      });
});

describe("isGreaterThan Tester", function() {
      it("isGreaterThan test returns valid value", function() {
            var stringmath = new StringMath();

            var one = stringmath.isGreaterThan("1", "0.1");
            var two = stringmath.isGreaterThan("0.200000", "0001");

            expect(one).to.equal(true);
            expect(two).to.equal(false);
      });
});

describe("isGreaterThanOrEqualTo Tester", function() {
      it("isGreaterThanOrEqualTo test returns valid value", function() {
            var stringmath = new StringMath();

            var one = stringmath.isGreaterThanOrEqualTo("1", "0.1");
            var two = stringmath.isGreaterThanOrEqualTo("1", "1");
            var three = stringmath.isGreaterThanOrEqualTo("1", "100");

            expect(one).to.equal(true);
            expect(two).to.equal(true);
            expect(three).to.equal(false);
      });
});

describe("isLessThan Tester", function() {
      it("isLessThan test returns valid value", function() {
            var stringmath = new StringMath();

            var one = stringmath.isLessThan("1", "0.1");
            var two = stringmath.isLessThan("1", "1");
            var three = stringmath.isLessThan("1", "100");

            expect(one).to.equal(false);
            expect(two).to.equal(false);
            expect(three).to.equal(true);
      });
});

describe("isLessThanOrEqualTo Tester", function() {
      it("isLessThanOrEqualTo test returns valid value", function() {
            var stringmath = new StringMath();

            var one = stringmath.isLessThanOrEqualTo("1", "0.1");
            var two = stringmath.isLessThanOrEqualTo("1", "1");
            var three = stringmath.isLessThanOrEqualTo("1", "100");

            expect(one).to.equal(false);
            expect(two).to.equal(true);
            expect(three).to.equal(true);
      });
});

describe("isEqual Tester", function() {
      it("isEqual test returns valid value", function() {
            var stringmath = new StringMath();

            var one = stringmath.isEqual("1", "0.1");
            var two = stringmath.isEqual("1", "1");
            var three = stringmath.isEqual("1", "100");

            expect(one).to.equal(false);
            expect(two).to.equal(true);
            expect(three).to.equal(false);
      });
});

describe("roundUpToNearest0001 Tester", function() {
      it("roundUpToNearest0001 test returns valid value", function() {
            var stringmath = new StringMath();

            var one = stringmath.roundUpToNearest0001("1");
            var two = stringmath.roundUpToNearest0001("1.00011");
            var twotwo = stringmath.roundUpToNearest0001("1.00015");
            var three = stringmath.roundUpToNearest0001("1.00004");
            var four = stringmath.roundUpToNearest0001("0.0005");
            var fourfour = stringmath.roundUpToNearest0001("0.00055");
            var fourfour1 = stringmath.roundUpToNearest0001("1.00055");
            var fourfour2 = stringmath.roundUpToNearest0001("1.0005");
            var fourfour3 = stringmath.roundUpToNearest0001("0.0005");

            expect(parseFloat(one)).to.equal(1);
            expect(parseFloat(two)).to.equal(1.0001);
            expect(parseFloat(twotwo)).to.equal(1.0002);
            expect(parseFloat(three)).to.equal(1.0000);
            expect(parseFloat(four)).to.equal(0.0005);
            expect(parseFloat(fourfour)).to.equal(0.0006);
            expect(fourfour1).to.equal("1.0006");
            expect(fourfour2).to.equal("1.0005");
            expect(fourfour3).to.equal("0.0005");
      });
});

describe("sciToDecimal Tester", function () {
      it("sciToDecimal test returns valid value", function () {
            var stringmath = new StringMath();

            var one = stringmath.sciToDecimal("1e-8");
            var two = stringmath.sciToDecimal("1e8");
            var three = stringmath.sciToDecimal("1.123e4");
            var four = stringmath.sciToDecimal("-2.67e-3");
            var five = stringmath.sciToDecimal("1.11e-8");
            var six = stringmath.sciToDecimal("-1e5");
            var seven = stringmath.sciToDecimal("1.1e4");
            var eight = stringmath.sciToDecimal("2.0e-3");

            expect(one).to.equal("0.00000001");
            expect(two).to.equal("100000000");
            expect(three).to.equal("11230");
            expect(four).to.equal("-0.00267");
            expect(five).to.equal("0.0000000111");
            expect(six).to.equal("-100000");
            expect(seven).to.equal("11000");
            expect(eight).to.equal("0.002");
      });
});