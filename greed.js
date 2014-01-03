var Greed = function _Greed() {
	this._patterns = [
		[  100, [ 1 ] ],
		[   50, [ 5 ] ],
		[ 1000, [ 1, 1, 1 ] ],
		[  200, [ 2, 2, 2 ] ],
		[  300, [ 3, 3, 3 ] ],
		[  400, [ 4, 4, 4 ] ],
		[  500, [ 5, 5, 5 ] ],
		[  600, [ 6, 6, 6 ] ]
	]
	.concat(
		[1,2,3,4,5,6].map(function(num){
			return [ 400, [ num, num, num, num ] ]
		})
	)
	.concat(
		[1,2,3,4,5,6].map(function(num){
			return [ 800, [ num, num, num, num, num ] ]
		})
	)
	.concat(
		[1,2,3,4,5,6].map(function(num){
			return [ 1600, [ num, num, num, num, num, num ] ]
		})
	)
	.concat(
		[ [1200, [ 1, 2, 3, 4, 5, 6] ] ]
	);
	
	for (var i=1; i<5; i++) {
		for (var j=i+1; j<6; j++) {
			for (var k=j+1; k<7; k++) {
				this._patterns.push(
					[ 800, [ i, i, j, j, k, k ] ]
				);
			}
		}
	}
		 
	this._patterns = this._patterns.sort(function(a,b){
		 return b[0] - a[0];
	});
};

Greed.prototype.calculate = function _calculate (rolls) {
	var point = 0;
	
	rolls = rolls.sort().join("");
	var process = 0;
	this._patterns.forEach(function(pattern){
		while ( ~rolls.indexOf( pattern[1].join(""), process ) ) {
			process = rolls.indexOf(pattern[1].join(""), process) + pattern[1].length;
			point += pattern[0];
		}
	});
	
	return point;
};

var greed = new Greed();
var point = greed.calculate( [3,2,3,1,1,2] );

console.log(point);