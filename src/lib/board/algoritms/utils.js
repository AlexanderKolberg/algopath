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

export function getNeighbors(grid, node) {
	let c = node.colum;
	let r = node.row;
	let neighbors = [];
	let validNode = (row, colum) => {
		return (
			row >= 0 &&
			row < grid.length &&
			colum >= 0 &&
			colum < grid[0].length &&
			grid[row][colum].isUnvisited &&
			grid[row][colum].type != 'wall'
		);
	};
	if (validNode(r, c - 1)) neighbors.push(grid[r][c - 1]);
	if (validNode(r, c + 1)) neighbors.push(grid[r][c + 1]);
	if (validNode(r - 1, c)) neighbors.push(grid[r - 1][c]);
	if (validNode(r + 1, c)) neighbors.push(grid[r + 1][c]);
	return neighbors;
}
