import mazeAnimation from '$lib/board/animations/maze/mazeAnimation.js';
import { get } from 'svelte/store';
import { grid } from '../../stores.js';

export default function randomMaze() {
	let gridValue = get(grid);
	let nodesInOrder = [];
	gridValue.forEach((row) =>
		row.forEach((node) => {
			if (Math.random() > 0.7 && !['start', 'target'].includes(node.type)) nodesInOrder.push(node);
		})
	);
	mazeAnimation(nodesInOrder);
}
