import { grid } from '../../stores.js';

export default function mazeGen() {
	grid.allWall();
	let matrix = [];
	grid.subscribe((m) => {
		matrix = m;
	});

	let visitedInOrder = []; //All visited, for animation

	let visited = [];
	let current = matrix[1][1];
	visitedInOrder.push(current);

	do {
		current.isUnvisited2 = false;
		let [neighbors, walls] = getNeighbors(current);
		if (neighbors.length) {
			visited.push(current);
			let rng = Math.floor(Math.random() * neighbors.length);
			let neighbor = neighbors[rng];
			visitedInOrder.push(walls[rng]);
			visitedInOrder.push(neighbor);
			current = neighbor;
		} else {
			current = visited.pop();
			visitedInOrder.push(current);
		}
	} while (visited.length);

	function getNeighbors(n) {
		let c = n.colum;
		let r = n.row;
		let neighbors = [];
		let walls = [];
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

	function validNode(row, colum) {
		return (
			row > 0 &&
			row < matrix.length - 1 &&
			colum > 0 &&
			colum < matrix[0].length - 1 &&
			matrix[row][colum].isUnvisited2
		);
	}

	visitedInOrder.forEach((n, i) => {
		setTimeout(() => {
			n.type = 'digger';
			grid.forceUpdate();
		}, i * 11);
	});
	//visitedInOrder[Math.floor(Math.random() * visitedInOrder.length)].setStart();
	//visitedInOrder[Math.floor(Math.random() * visitedInOrder.length)].type = 'target';
}
