import { grid } from '../../stores.js';

export default function recursiveDivision() {
	let matrix = [];
	grid.subscribe((m) => {
		matrix = m;
	});
	let nodesInOrder = [];
	let columns = matrix[0].length;
	let rows = matrix.length;
	if (columns % 2) columns--;
	if (rows % 2) rows--;
	//top left-right
	for (let c = 0; c < columns; c++) nodesInOrder.push(matrix[0][c]);
	//right top-down
	for (let r = 0; r < rows; r++) nodesInOrder.push(matrix[r][columns]);
	//button left-right
	for (let c = columns - 1; c >= 0; c--) nodesInOrder.push(matrix[rows - 1][c]);
	//left button-top
	for (let r = rows - 1; r >= 0; r--) nodesInOrder.push(matrix[r][0]);

	function rdm(colStart, colEnd, rowStart, rowEnd) {
		if (Math.abs(colStart - colEnd) <= 2 || Math.abs(rowStart - rowEnd) <= 2) return;
		let cols = colEnd - colStart;
		let rows = rowEnd - rowStart;
		let divCols = true;
		if (rows > cols) divCols = false;
		else if (rows == cols) divCols = Math.random() < 0.5;
		let div = divCols ? randomBetween(colStart, colEnd) : randomBetween(rowStart, rowEnd);
		let open = divCols ? randomBetween(rowStart, rowEnd) : randomBetween(colStart, colEnd);
		if (divCols) {
			for (let r = rowStart; r <= rowEnd; r++) {
				if (r != open) nodesInOrder.push(matrix[div][r]);
			}
		} else {
			for (let c = colStart; c < colEnd; c++)
				if (c != open) {
					nodesInOrder.push(matrix[c][div]);
				}
		}
		if (divCols) return rdm(1, div, rowStart, rowEnd);
		else return rdm(1, colEnd, rowStart, div);
	}

	rdm(1, rows, 1, columns);

	function randomBetween(start, end) {
		let random = Math.floor(Math.random() * (start - end + 1)) + end;
		if (random % 2) return randomBetween(start, end);
		return random;
	}

	nodesInOrder.forEach((n) => {
		n.type = 'wall';
	});
	grid.forceUpdate();
}
