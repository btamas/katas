
var SudokuSolver = function _SudokuSolver( table ) {
	this.table = table || [];	
};

SudokuSolver.prototype.check = function _check() {
	//check rows
	for( var i = 0; i < 9; i++) {
		var list = [];
		for( var j = 0; j < 9; j++) {
			if ( this.table[i*9+j] && list[ this.table[i*9+j] ] ) return false;
			list[ this.table[i*9+j] ] = 1;
		}
	}

	//check cols
	for( var i = 0; i < 9; i++) {
		var list = [];
		for( var j = 0; j < 9; j++) {
			if ( this.table[j*9+i] && list[ this.table[j*9+i] ] ) return false;
			list[ this.table[j*9+i] ] = 1;
		}
	}

	//check squares
	for( var i = 0; i < 9; i++) {
		var list = [];
		for( var j = 0; j < 9; j++) {
			if ( this.table[  j%3 + Math.floor(j/3) * 9 + i*3 + Math.floor(i/3)*18 ] && list[ this.table[  j%3 + Math.floor(j/3) * 9 + i*3 + Math.floor(i/3)*18 ] ] ) return false;
			list[ this.table[  j%3 + Math.floor(j/3) * 9 + i*3 + Math.floor(i/3)*18 ] ] = 1;
		}
	}

	return true;
};

SudokuSolver.prototype.solve = function _solve() {
	for( var i = 0; i < 81; i++) {
		if (!this.table[i]) {
			for( var n = 1; n <= 9; n++) {
				this.table[i] = n;
				if ( this.check() && this.solve() ) return true;
				this.table[i] = 0;
			}
			return false;
		}
	}
	return true;
};

SudokuSolver.prototype.prettyPrint = function _prettyPrint() {
	var table = "";
	for( var i = 1; i <= 81; i++) {
		table += this.table[i-1];
		table += i % 3 ? " " : "  ";
		table += i % 9 ? "" : "\n";
		table += i % 27 ? "" : "\n";
	}
	console.log(table);
};

var sudoku = new SudokuSolver([
	6,5,0, 0,9,0, 0,0,0,
	4,0,0, 7,0,0, 3,0,0,
	3,0,0, 0,0,0, 1,0,0,

	0,0,3, 0,0,6, 5,4,0,
	0,4,0, 0,5,0, 0,3,0,
	0,9,7, 0,0,0, 6,0,0,

	0,0,0, 4,0,0, 0,0,2,
	0,0,2, 0,0,7, 0,0,3,
	0,0,0, 0,1,0, 0,7,5
]);

sudoku.solve();
sudoku.prettyPrint();