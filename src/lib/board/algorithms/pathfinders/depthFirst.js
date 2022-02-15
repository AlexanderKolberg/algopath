import { gridStore, startStore } from '$lib/board/stores';
import { get } from 'svelte/store';
import { getNeighbors, setClearPath } from '../utils';

export default function depthFirstPath() {
	let grid = get(gridStore);
	grid = setClearPath(grid);

	let visited = [];
	let visitedInOrder = [];

	let startNode = get(startStore);
	let current = grid[startNode.row][startNode.column];
	visitedInOrder.push(current);
	visited.push(current);

	do {
		if (current.type == 'wall') continue;
		current.visited = true;
		let neighbors = getNeighbors(current);
		if (neighbors.length) {
			visited.push(current);
			let rng = Math.floor(Math.random() * neighbors.length);
			let neighbor = neighbors[rng];
			visitedInOrder.push(neighbor);
			current = neighbor;
		} else {
			current = visited.pop();
			visitedInOrder.push(current);
		}
		if (current.type == 'target') {
			break;
		}
	} while (visited.length);
}
