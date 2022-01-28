import { grid } from '../stores.js';
import { get } from 'svelte/store';
import { getNeighbors, setClearPath } from './utils.js';
import pathAnimation from '../animations/pathfinders/pathAnimation.js';

export default function dijkstra() {
	let gridValue = get(grid);
	gridValue = setClearPath(gridValue);

	let unvisited = gridValue.flat();
	let current;
	let nodesInOrder = [];
	let shortestPath = [];
	let unsolvable = false;

	while (unvisited.length) {
		unvisited.sort((a, b) => a.distance - b.distance);
		if (unvisited[0].distance == Infinity) {
			unsolvable = true;
			break;
		}
		current = unvisited.shift();
		nodesInOrder.push(current);
		if (current.type == 'wall') continue;
		let neighbors = getNeighbors(gridValue, current);
		neighbors.forEach((neighbor) => {
			let distance = current.distance + neighbor.obstacle;
			neighbor.distance = Math.min(neighbor.distance, distance);
			neighbor.previousNode = current;
			nodesInOrder.push(neighbor);
		});
		current.isUnvisited = false;
		if (current.type == 'target') {
			while (current !== null) {
				shortestPath.unshift(current);
				current = current.previousNode;
			}
			break;
		}
	}
	pathAnimation(nodesInOrder, shortestPath, unsolvable);
}
