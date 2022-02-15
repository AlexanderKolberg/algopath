import depthFirst from '$lib/board/animations/pathfinders/depthFirst';
import drivePath from '$lib/board/animations/pathfinders/drivePath';
import { gridStore, startStore } from '$lib/board/stores';
import { get } from 'svelte/store';
import { getNeighbors, setClearPath } from '../utils';

let direction = ['top', 'right', 'bottom', 'left'][Math.floor(Math.random() * 4)];

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
		let neighbors = getNeighbors(grid, current);
		if (neighbors.length) {
			visited.push(current);
			let neighbor = getNeighbor(current, neighbors);
			console.log(neighbor);
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
	depthFirst(visitedInOrder);
}

function getNeighbor(current, neighbors) {
	let row = current.row;
	let column = current.column;
	if (direction == 'top') row--;
	if (direction == 'right') column++;
	if (direction == 'bottom') row++;
	if (direction == 'left') column--;

	let neighbor = neighbors.find((e) => e.row == row && e.column == column);
	console.log(neighbors);
	console.log(neighbor);
	if (neighbor != undefined) return neighbor;
	direction = ['top', 'right', 'bottom', 'left'][Math.floor(Math.random() * 4)];
	return getNeighbor(current, neighbors);
}
