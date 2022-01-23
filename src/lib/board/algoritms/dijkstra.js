import { grid, unsolvable, longest } from '../stores.js';
import { onDestroy } from 'svelte';

export default function dijkstra() {
	let gridValue;

	const unsubscribe = grid.subscribe((value) => {
		gridValue = value;
	});

	let unvisited = gridValue.flat();
	let current;

	while (unvisited.length) {
		unvisited.sort((a, b) => a.distance - b.distance);
		if (unvisited[0].distance == Infinity) {
			unsolvable.set(true);
			break;
		}
		current = unvisited.shift();
		if (current.type == 'wall') continue;
		let neighbors = getNeighbors(current);
		let distance = current.distance + 1;
		neighbors.forEach((node) => {
			node.distance = Math.min(node.distance, distance);
			node.previousNode = current;
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
	onDestroy(unsubscribe);

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
