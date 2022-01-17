let grid = [
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 1, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 2, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0]
];

let current;
let unvisited = grid.map((r) =>
	r.map((c) => {
		if (c == 0) return Infinity;
		if (c == 1) {
			current = [r, c];
			return 0;
		}
	})
);
