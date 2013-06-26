
var RomanCalculator = function _RomanCalculator() {};

RomanCalculator.prototype = {
	roman: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"],
	dec: [ 1000, 900,  500, 400,  100,  90,  50,   40,   10,  9,    5,    4,   1],
	ans: 0,
	convertToDec: function(num) {
		var dec = 0,
			that = this;

		this.roman.forEach(function(pattern, i) {
			while(num.indexOf(pattern) === 0) {
				dec += that.dec[i];
				num = num.substr( pattern.length );
			}
		});

		return dec;
	},
	convertToRoman: function(num) {
		var roman = "",
			that = this;

		this.dec.forEach(function(limit, i) {
			while(num >= limit) {
				roman += that.roman[i];
				num -= limit;
			}
		});

		return roman;
	},
	add: function(num) {
		this.ans += this.convertToDec(num);

		return this.convertToRoman(this.ans);
	}
};

var calc = new RomanCalculator();

console.log( calc.convertToRoman(49) );
console.log( calc.convertToDec("XCVIII") );
console.log( calc.add("XLIX") );
console.log( calc.add("XLIX") );
console.log( calc.add("XLIX") );
console.log( calc.add("XLIX") );
console.log( calc.add("XLIX") );