import depthFirstAnimation from '$lib/board/animations/maze/depthFirstAnimation.js';
import { get } from 'svelte/store';
import { grid } from '../../stores.js';
import { setClearGrid } from '../utils.js';

export default function depthFirst() {
	let matrix = setClearGrid(get(grid));

	let visitedInOrder = []; //All visited, for animation

	let visited = [];
	let current = matrix[1][1];
	visitedInOrder.push(current);

	do {
		current.isUnvisited = false;
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
	depthFirstAnimation(visitedInOrder);

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
			matrix[row][colum].isUnvisited
		);
	}
}
