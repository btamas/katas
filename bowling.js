
var calculate = function _calculate(series) {
	var score = 0,
		multiplier = [ 1, 1 ],
		round = 0,
		step = 0;

	series.split("").forEach(function(roll, i, rolls) {

		if ( roll === "X" ) {
			round++;
			step = 0;
		} else {
			if (step === 1) {
				round++;
				step = 0;
			} else {
				step++;
			}
		}

		if (roll === "X") {
			score += 10 * multiplier.shift();
			multiplier[0]++;
			multiplier.push(2);
		} else if (roll === "-") {
			multiplier.shift();
			multiplier.push(1);
		} else if (roll === "/") {
			score += (10 - rolls[i-1]) * multiplier.shift();
			multiplier[0]++;
			multiplier.push(1);
		} else {
			score += roll * multiplier.shift();
			multiplier.push(1);
		};

		if (round >= 10) {
			multiplier[0]--;
			multiplier[1]--;
		}
	});

	return score;
};

console.log( calculate("X7/729/XXX236/7/3") );