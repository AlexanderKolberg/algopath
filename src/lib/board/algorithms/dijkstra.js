import { grid, longest, status } from '../stores.js';
import { get } from 'svelte/store';
import { getNeighbors, setClearPath } from './utils.js';

export default function dijkstra() {
	let gridValue = get(grid);
	gridValue = setClearPath(gridValue);
	let unvisited = gridValue.flat();
	let current;

	while (unvisited.length) {
		unvisited.sort((a, b) => a.distance - b.distance);
		if (unvisited[0].distance == Infinity) {
			status.set('unsolvable');
			break;
		}
		current = unvisited.shift();
		if (current.type == 'wall') continue;
		let neighbors = getNeighbors(gridValue, current);
		neighbors.forEach((neighbor) => {
			let distance = current.distance + neighbor.obstacle;
			neighbor.distance = Math.min(neighbor.distance, distance);
			neighbor.previousNode = current;
		});
		current.isUnvisited = false;
		if (current.type == 'target') {
			longest.set(current.distance);
			while (current !== null) {
				current.isShortestPath = true;
				current = current.previousNode;
			}
			break;
		}
	}
	grid.set(gridValue);
	status.set('solved');
}
