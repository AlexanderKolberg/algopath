import { grid, unsolvable, longest, end, start } from '../stores.js';
import { onDestroy } from 'svelte';
import { get } from 'svelte/store';

const distance = (x1, y1, x2, y2) => Math.hypot(x2 - x1, y2 - y1);

export default function astar() {
	let gridValue;

	const unsubscribe = grid.subscribe((value) => {
		gridValue = value;
	});

	let startValue = get(start);
	let endValue = get(end);

	console.log(startValue);
	console.log(endValue);
	let startNode = gridValue[startValue.row][startValue.colum];
	let endNode = gridValue[endValue.row][endValue.colum];

	let openSet = [];
	let closedSet = [];

	openSet.push(startNode);
	while (openSet.length) {
		let winner = openSet[0];
		for (let n of openSet) {
			if (n.f < winner.f) winner = n;
		}
		let current = winner;
		if (current == endNode) {
			longest.set(current.distance);
			while (current !== null) {
				console.log(current.previousNode);
				current.isShortestPath = true;
				current = current.previousNode;
			}
			break;
		}
		openSet = openSet.filter((n) => n != current);
		closedSet.push(current);
		let neighbors = getNeighbors(current);
		for (let neighbor of neighbors) {
			if (!closedSet.includes(neighbor)) {
				let tempG = current.distance + 1;
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
		}
		grid.forceUpdate();
	}

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
				//gridValue[row][colum].isUnvisited &&
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
