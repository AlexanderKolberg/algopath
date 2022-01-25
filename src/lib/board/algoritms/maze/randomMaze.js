import { grid } from '../../stores.js';

export default function randomMaze() {
	let matrix = [];
	grid.subscribe((m) => {
		matrix = m;
	});

	matrix.forEach((r) =>
		r.forEach((n) => {
			if (Math.random() > 0.7 && !['start', 'target'].includes(n.type)) n.type = 'wall';
		})
	);
	grid.forceUpdate();
}
