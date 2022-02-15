import { setClearPath } from '$lib/board/algorithms/utils';
import { animationSpeedStore, gridStore, statusStore } from '$lib/board/stores';
import { get } from 'svelte/store';
import drivePath from './drivePath';
export default async function depthFirst(nodes) {
	let grid = get(gridStore);
	gridStore.set(setClearPath(grid));
	statusStore.set('inProgress');

	let waitTime = get(animationSpeedStore) * 15;
	let lastTime = Date.now();
	let offsetTime = 0; //For keeping track of delay's in the event loop

	drivePath(nodes);
	console.log(waitTime);
	for (let node of nodes) {
		await new Promise((resolve) => setTimeout(resolve, waitTime - offsetTime));
		if (node.classes != '') {
			node.classes = 'checked2';
		} else {
			node.classes = 'checked';
		}
		gridStore.forceUpdate();
		let time = Date.now();
		offsetTime = time - waitTime - lastTime;
		lastTime = time;
	}
	statusStore.set('done');
}
