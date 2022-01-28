export function setClearPath(grid) {
	grid = grid.map((r) =>
		r.map((n) => {
			if (!['start', 'target', 'wall', 'cat', 'log'].includes(n.type)) {
				n.type = 'empty';
			}
			n.ini();
			return n;
		})
	);
	return grid;
}
