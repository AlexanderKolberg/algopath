import { writable } from 'svelte/store';
let gridColumns = 0;
let gridRows = 0;

function ini(columns, rows) {
	gridColumns = columns;
	gridRows = rows;
	return newGrid(columns, rows);
}

function newGrid(columns, rows) {
	let grid = [...Array(columns)].map(() => [...Array(rows).fill(null)]);
	let centerX = Math.floor(grid.length / 2);
	let centerY = Math.floor(grid[0].length / 2);
	grid[centerX - 5][centerY] = 'start';
	grid[centerX + 5][centerY] = 'target';
	return grid;
}

function createGrid() {
	const { subscribe, set } = writable([]);
	return {
		subscribe,
		init: (columns, rows) => set(ini(columns, rows)),
		set,
		reset: () => set(newGrid(gridColumns, gridRows))
	};
}

export const grid = createGrid();
