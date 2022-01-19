import { grid } from '../grid.js';

export default function dijkstra() {
	let matrix = [];
	grid.subscribe((m) => {
		matrix = m;
	});
	let unvisited = matrix.flat();
	let current;
	while (unvisited.length) {
		sortUnvisited();
		current = unvisited.shift();
		if (current.type == 'wall') continue;
		let neighbors = getNeighbors(current);
		let distance = current.distance + 1;
		neighbors.forEach((n) => {
			n.distance = Math.min(n.distance, distance);
			n.previousNode = current;
		});
		current.isUnvisited = false;
		if (current.type == 'target') break;
	}
	//let newMap = matrix.map((r) => r.map((n) => (n.distance != Infinity ? n.distance : 'A')));
	//console.log(newMap.map((r) => r.join('')).join('\n'));

	function getNeighbors(n) {
		let c = n.colum;
		let r = n.row;
		let neighbors = [];
		let validNode = (row, colum) => {
			return (
				row >= 0 &&
				row < matrix.length &&
				colum >= 0 &&
				colum < matrix[0].length &&
				matrix[row][colum].isUnvisited &&
				matrix[row][colum].type != 'wall'
			);
		};
		if (validNode(r, c - 1)) neighbors.push(matrix[r][c - 1]);
		if (validNode(r, c + 1)) neighbors.push(matrix[r][c + 1]);
		if (validNode(r - 1, c)) neighbors.push(matrix[r - 1][c]);
		if (validNode(r + 1, c)) neighbors.push(matrix[r + 1][c]);
		return neighbors;
	}
	function sortUnvisited() {
		unvisited.sort((a, b) => a.distance - b.distance);
	}

	while (current !== null) {
		current.isShortestPath = true;
		current = current.previousNode;
	}
	grid.set(matrix);
}
