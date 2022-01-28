import { grid, longest, status } from '../stores.js';
import { get } from 'svelte/store';
import { setClearPath } from './utils.js';

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
		let neighbors = getNeighbors(current);
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

	function getNeighbors(node) {
		let c = node.colum;
		let r = node.row;
		let neighbors = [];
		let validNode = (row, colum) => {
			return (
				row >= 0 &&
				row < gridValue.length &&
				colum >= 0 &&
				colum < gridValue[0].length &&
				gridValue[row][colum].isUnvisited &&
				gridValue[row][colum].type != 'wall'
			);
		};
		if (validNode(r, c - 1)) neighbors.push(gridValue[r][c - 1]);
		if (validNode(r, c + 1)) neighbors.push(gridValue[r][c + 1]);
		if (validNode(r - 1, c)) neighbors.push(gridValue[r - 1][c]);
		if (validNode(r + 1, c)) neighbors.push(gridValue[r + 1][c]);
		return neighbors;
	}
}
