import { grid, longest, end, start } from '../stores.js';
import { get } from 'svelte/store';
import { getNeighbors, setClearPath } from './utils.js';

const distance = (x1, y1, x2, y2) => Math.hypot(x2 - x1, y2 - y1);

export default function astar() {
	let gridValue = get(grid);
	gridValue = setClearPath(gridValue);
	grid.set(gridValue);
	let startValue = get(start);
	let endValue = get(end);

	let startNode = gridValue[startValue.row][startValue.colum];
	let endNode = gridValue[endValue.row][endValue.colum];

	let openSet = [];

	openSet.push(startNode);

	while (openSet.length) {
		let winner = openSet[0];
		for (let node of openSet) {
			if (node.f < winner.f) winner = node;
		}
		let current = winner;
		if (current == endNode) {
			longest.set(current.distance);
			while (current !== null) {
				current.isShortestPath = true;
				current = current.previousNode;
			}
			break;
		}
		openSet = openSet.filter((n) => n != current);
		current.isUnvisited = false;
		let neighbors = getNeighbors(gridValue, current);
		for (let neighbor of neighbors) {
			let tempG = current.distance + neighbor.obstacle;
			if (openSet.includes(neighbor)) {
				if (tempG < neighbor.distance) {
					neighbor.distance = tempG;
				}
			} else {
				neighbor.distance = tempG;
				openSet.push(neighbor);
			}
			neighbor.previousNode = current;
			neighbor.h = distance(neighbor.colum, neighbor.row, endNode.colum, endNode.row);
			neighbor.f = neighbor.distance + neighbor.h;
		}
		grid.forceUpdate();
	}
}
