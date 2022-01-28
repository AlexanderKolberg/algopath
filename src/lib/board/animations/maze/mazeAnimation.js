import { setClearGrid } from '$lib/board/algorithms/utils';
import { animationSpeed, grid, status } from '$lib/board/stores';
import { get } from 'svelte/store';

export default async function mazeAnimation(nodes) {
	status.set('inProgress');
	let gridValue = get(grid);
	grid.set(setClearGrid(gridValue));
	for (let node of nodes) {
		let speed = get(animationSpeed);
		await new Promise((resolve) => setTimeout(resolve, speed));
		node.type = 'wall';
		grid.forceUpdate();
	}
	const columns = gridValue[0].length;
	const rows = gridValue.length;
	randomEmptyNode(gridValue, rows, columns).setType('start');
	randomEmptyNode(gridValue, rows, columns).setType('target');
	status.set('done');
}

function randomEmptyNode(grid, rows, columns) {
	const random = (max) => Math.floor(Math.random() * max);
	const _rows = random(rows);
	const _columns = random(columns);
	if (grid[_rows][_columns].type != 'empty') return randomEmptyNode(grid, rows, columns);
	return grid[_rows][_columns];
}
