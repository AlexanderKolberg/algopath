import { setClearPath } from '$lib/board/algorithms/utils';
import { grid, status } from '$lib/board/stores';
import { get } from 'svelte/store';
import { wait } from '../utils';
import driveShortestPath from './driveShortestPath';

export default async function pathAnimation(checkedNodes, shortestPath, unsolvable) {
	let gridValue = get(grid);
	status.set('inProgress');
	grid.set(setClearPath(gridValue));
	for (let node of checkedNodes) {
		await wait();
		node.classes = 'checked';
		grid.forceUpdate();
	}
	if (unsolvable) {
		status.set('unsolvable');
		return;
	}
	for (let node of shortestPath) {
		await wait();
		node.classes = 'shortestPath';
		grid.forceUpdate();
	}
	driveShortestPath(shortestPath);
	status.set('solved');
}
