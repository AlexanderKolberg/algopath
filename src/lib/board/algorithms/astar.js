import { grid, end, start } from '../stores.js';
import { get } from 'svelte/store';
import { getNeighbors, setClearPath } from './utils.js';
import pathAnimation from '../animations/pathfinders/pathAnimation.js';

const distance = (x1, y1, x2, y2) => Math.hypot(x2 - x1, y2 - y1);

export default function astar() {
	let gridValue = get(grid);
	gridValue = setClearPath(gridValue);
	grid.set(gridValue);
	let startValue = get(start);
	let endValue = get(end);

	let nodesInOrder = [];
	let shortestPath = [];
	let unsolvable = false;

	let startNode = gridValue[startValue.row][startValue.column];
	let endNode = gridValue[endValue.row][endValue.column];

	let openSet = [];

	openSet.push(startNode);
	nodesInOrder.push(startNode);

	while (openSet.length) {
		let winner = openSet[0];
		for (let node of openSet) {
			if (node.f < winner.f) winner = node;
		}
		let current = winner;
		if (current == endNode) {
			while (current !== null) {
				shortestPath.unshift(current);
				current = current.previousNode;
			}
			break;
		}
		openSet = openSet.filter((n) => n != current);
		current.isUnvisited = false;
		let neighbors = getNeighbors(gridValue, current);
		for (let neighbor of neighbors) {
			nodesInOrder.push(neighbor);
			let tempG = current.distance + neighbor.obstacle;
			if (openSet.includes(neighbor)) {
				if (tempG < neighbor.distance + neighbor.obstacle) {
					neighbor.distance = tempG;
				}
			} else {
				neighbor.distance = tempG;
				openSet.push(neighbor);
			}
			neighbor.previousNode = current;
			neighbor.h = distance(neighbor.column, neighbor.row, endNode.column, endNode.row);
			neighbor.f = neighbor.distance + neighbor.h;
		}
	}
	pathAnimation(nodesInOrder, shortestPath, unsolvable);
}
