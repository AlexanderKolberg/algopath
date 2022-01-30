import { setClearPath } from '$lib/board/algorithms/utils';
import { gridStore, statusStore } from '$lib/board/stores';
import { get } from 'svelte/store';
import { wait } from '../utils';
import driveShortestPath from './driveShortestPath';

export default async function pathAnimation(checkedNodes, shortestPath, unsolvable) {
	let grid = get(gridStore);
	statusStore.set('inProgress');
	gridStore.set(setClearPath(grid));
	for (let node of checkedNodes) {
		await wait();
		node.classes = 'checked';
		gridStore.forceUpdate();
	}
	if (unsolvable) {
		statusStore.set('unsolvable');
		return;
	}
	for (let node of shortestPath) {
		await wait();
		node.classes = 'shortestPath';
		gridStore.forceUpdate();
	}
	driveShortestPath(shortestPath);
	statusStore.set('solved');
}
