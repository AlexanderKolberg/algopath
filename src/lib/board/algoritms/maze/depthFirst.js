import { grid } from '../../grid.js';

export default function mazeGen() {
	grid.allWall();
	let matrix = [];
	grid.subscribe((m) => {
		matrix = m;
	});

	let visited = [];
	console.log(matrix);
	let unvisited = matrix
		.filter((_, i) => i % 2 == 1)
		.flat()
		.filter((_, i) => i % 2 == 1);

	console.log(unvisited);
	let current = unvisited.shift();
	let i = 0;
	while (unvisited.length && i < 1000) {
		i++;
		current.type = 'empty';
		current.isUnvisited2 = false;
		let neighbors = getNeighbors(current);
		unvisited = unvisited.filter((n) => n != current);
		if (neighbors.length) {
			visited.push(current);
			let neighbor = neighbors[Math.floor(Math.random() * neighbors.length)];
			removeWall(current, neighbor);
			current = neighbor;
		} else current = visited.pop();
	}
	console.log(unvisited.length);
	function getNeighbors(n) {
		let c = n.colum;
		let r = n.row;
		let neighbors = [];
		let validNode = (row, colum) => {
			return (
				row > 0 &&
				row < matrix.length - 1 &&
				colum > 0 &&
				colum < matrix[0].length - 1 &&
				matrix[row][colum].isUnvisited2
			);
		};
		if (validNode(r, c - 2)) neighbors.push(matrix[r][c - 2]);
		if (validNode(r, c + 2)) neighbors.push(matrix[r][c + 2]);
		if (validNode(r - 2, c)) neighbors.push(matrix[r - 2][c]);
		if (validNode(r + 2, c)) neighbors.push(matrix[r + 2][c]);
		return neighbors;
	}
	function removeWall(current, neighbor) {
		if (current.row > neighbor.row) matrix[current.row - 1][current.colum].type = 'empty';
		if (current.row < neighbor.row) matrix[current.row + 1][current.colum].type = 'empty';
		if (current.colum > neighbor.colum) matrix[current.row][current.colum - 1].type = 'empty';
		if (current.colum < neighbor.colum) matrix[current.row][current.colum + 1].type = 'empty';
	}
	grid.set(matrix);
}
