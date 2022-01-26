import { get } from 'svelte/store';
import { grid } from '../../stores.js';

export default function recursiveDivision() {
	let matrix = get(grid);
	let nodesInOrder = [];
	let columns = matrix.length;
	let rows = matrix[0].length;

	if (!(columns % 2)) columns--;
	if (!(rows % 2)) rows--;
	(function addOuterWalls() {
		for (let r = 0; r < rows; r++) nodesInOrder.push(matrix[0][r]);
		for (let c = 0; c < columns; c++) nodesInOrder.push(matrix[c][rows - 1]);
		for (let r = rows - 1; r >= 0; r--) nodesInOrder.push(matrix[columns - 1][r]);
		for (let c = columns - 1; c >= 0; c--) nodesInOrder.push(matrix[c][0]);
	})();
	division(1, columns - 1, 1, rows - 1);
	function division(columnStart, columnEnd, rowStart, rowEnd) {
		let columns = Math.abs(columnStart - columnEnd);
		let rows = Math.abs(rowStart - rowEnd);
		let divideColumns = getDivideColumns(columns, rows);
		if ((divideColumns && rows < 3) || (!divideColumns && columns < 3)) return;
		let wall = divideColumns
			? randomEvenBetween(columnStart, columnEnd)
			: randomEvenBetween(rowStart, rowEnd);
		let open = divideColumns
			? randomOddBetween(rowStart, rowEnd)
			: randomOddBetween(columnStart, columnEnd);
		if (divideColumns) {
			for (let r = rowStart; r < rowEnd; r++) {
				if (r != open) nodesInOrder.push(matrix[wall][r]);
			}
			division(wall, columnEnd, rowStart, rowEnd);
			division(columnStart, wall, rowStart, rowEnd);
		} else {
			for (let c = columnStart; c < columnEnd; c++) {
				if (c != open) nodesInOrder.push(matrix[c][wall]);
			}
			division(columnStart, columnEnd, rowStart, wall);
			division(columnStart, columnEnd, wall, rowEnd);
		}
	}
	const example = async () => {
		for (const node of nodesInOrder) {
			await setDigger(node);
		}
		grid.forceUpdate();
	};

	const setDigger = (node) => {
		return new Promise((resolve) => {
			setTimeout(() => {
				node.type = 'wall';
				grid.forceUpdate();
				resolve();
			}, 30);
		});
	};
	example();
}

function getDivideColumns(columns, rows) {
	if (rows > columns) return false;
	else if (rows < columns) return true;
	else if (rows == columns) return Math.random() < 0.5;
}

function randomOddBetween(start, end) {
	let random = Math.floor(Math.random() * (start - end + 1)) + end;
	if (!(random % 2)) return randomOddBetween(start, end);
	return random;
}
function randomEvenBetween(start, end) {
	let random = Math.floor(Math.random() * (start - end + 1)) + end;
	if (random % 2) return randomEvenBetween(start, end);
	return random;
}
