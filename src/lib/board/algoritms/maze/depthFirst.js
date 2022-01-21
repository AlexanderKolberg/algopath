import { grid } from '../../grid.js';

export default function mazeGen() {
	grid.allWall();
	let matrix = [];
	grid.subscribe((m) => {
		matrix = m;
	});

	let visited = [];
	let unvisited = matrix
		.filter((_, i) => i % 2 == 1)
		.flat()
		.filter((_, i) => i % 2 == 1);
	let current = unvisited.shift();

	let visitedInOrder = [];
	visited.push(current);
	while (visited.length) {
		visitedInOrder.push(current);
		current.isUnvisited2 = false;
		unvisited = unvisited.filter((n) => n != current);
		let [neighbors, walls] = getNeighbors(current);
		if (neighbors.length) {
			visited.push(current);
			let rng = Math.floor(Math.random() * neighbors.length);
			let neighbor = neighbors[rng];
			visitedInOrder.push(walls[rng]);
			current = neighbor;
		} else current = visited.pop();
	}
	function getNeighbors(n) {
		let c = n.colum;
		let r = n.row;
		let neighbors = [];
		let walls = [];
		let validNode = (row, colum) => {
			return (
				row > 0 &&
				row < matrix.length - 1 &&
				colum > 0 &&
				colum < matrix[0].length - 1 &&
				matrix[row][colum].isUnvisited2
			);
		};
		if (validNode(r, c - 2)) {
			neighbors.push(matrix[r][c - 2]);
			walls.push(matrix[r][c - 1]);
		}
		if (validNode(r, c + 2)) {
			neighbors.push(matrix[r][c + 2]);
			walls.push(matrix[r][c + 1]);
		}
		if (validNode(r - 2, c)) {
			neighbors.push(matrix[r - 2][c]);
			walls.push(matrix[r - 1][c]);
		}
		if (validNode(r + 2, c)) {
			neighbors.push(matrix[r + 2][c]);
			walls.push(matrix[r + 1][c]);
		}
		return [neighbors, walls];
	}
	visitedInOrder.forEach((n) => (n.type = 'empty'));
	visitedInOrder[Math.floor(Math.random() * visitedInOrder.length)].setStart();
	visitedInOrder[Math.floor(Math.random() * visitedInOrder.length)].type = 'target';
}
