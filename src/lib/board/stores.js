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
	grid[centerX - 5][centerY].setStart();
	grid[centerX + 5][centerY].setEnd();
	return grid;
}

function justWalls(columns, rows) {
	let grid = [...Array(columns)].map((_, row) =>
		[...Array(rows)].map((_, colum) => new Node(row, colum, 'wall'))
	);
	return grid;
}
function setClearPath(grid) {
	grid = grid.map((r) =>
		r.map((n) => {
			if (!['start', 'target', 'wall'].includes(n.type)) {
				n.type = 'empty';
			}
			n.ini();
			if (n.type == 'start') n.setStart();
			if (n.type == 'target') n.setEnd();
			return n;
		})
	);
	return grid;
}

function createGrid() {
	const { subscribe, set, update } = writable([]);
	return {
		subscribe,
		init: (columns, rows) => set(ini(columns, rows)),
		set,
		reset: () => set(newGrid(gridColumns, gridRows)),
		allWall: () => set(justWalls(gridColumns, gridRows)),
		forceUpdate: () => update((n) => n),
		clearPath: () => update((n) => setClearPath(n))
	};
}

export const reset = () => {
	grid.reset();
	unsolvable.set(false);
};

export const grid = createGrid();
export const unsolvable = writable(false);
export const longest = writable(0);
export const start = writable({ row: undefined, colum: undefined });
export const end = writable({ row: undefined, colum: undefined });
export const activeDrawer = writable('wall');
export const animationSpeed = writable('15');
