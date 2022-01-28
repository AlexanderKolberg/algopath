import { setAllWalls } from '$lib/board/algorithms/utils';
import { animationSpeed, grid, status } from '$lib/board/stores';
import { get } from 'svelte/store';
export default async function depthFirstAnimation(nodes) {
	status.set('inProgress');
	grid.set(setAllWalls(get(grid)));
	for (let node of nodes) {
		let speed = get(animationSpeed);
		await new Promise((resolve) => setTimeout(resolve, speed));
		node.type = 'digger';
		grid.forceUpdate();
		await new Promise((resolve) => setTimeout(resolve, speed));
		node.type = 'empty';
		grid.forceUpdate();
	}
	nodes[Math.floor(Math.random() * nodes.length)].setType('start');
	nodes[Math.floor(Math.random() * nodes.length)].setType('target');
	status.set('done');
}
