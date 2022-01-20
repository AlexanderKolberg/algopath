import { writable } from 'svelte/store';
import Node from './Node.js';
let gridColumns = 0;
let gridRows = 0;

function ini(columns, rows) {
	gridColumns = columns;
	gridRows = rows;
	return newGrid(columns, rows);
}

function newGrid(columns, rows) {
	let grid = [...Array(columns)].map((_, row) =>
		[...Array(rows)].map((_, colum) => new Node(row, colum))
	);
	let centerX = Math.floor(grid.length / 2);
	let centerY = Math.floor(grid[0].length / 2);
	grid[centerX - 5][centerY].type = 'start';
	grid[centerX - 5][centerY].distance = 0;
	grid[centerX + 5][centerY].type = 'target';
	return grid;
}

function justWalls(columns, rows) {
	let grid = [...Array(columns)].map((_, row) =>
		[...Array(rows)].map((_, colum) => new Node(row, colum, 'wall'))
	);
	return grid;
}

function createGrid() {
	const { subscribe, set } = writable([]);
	return {
		subscribe,
		init: (columns, rows) => set(ini(columns, rows)),
		set,
		reset: () => set(newGrid(gridColumns, gridRows)),
		allWall: () => set(justWalls(gridColumns, gridRows))
	};
}

export const grid = createGrid();
