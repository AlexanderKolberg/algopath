export function setAllWalls(grid) {
	grid = grid.map((row) =>
		row.map((node) => {
			node.type = 'wall';
			node.ini();
			return node;
		})
	);
	return grid;
}

export function setClearGrid(grid) {
	grid = grid.map((row) =>
		row.map((node) => {
			node.type = 'empty';
			node.ini();
			return node;
		})
	);
	return grid;
}

export function setClearPath(grid) {
	grid = grid.map((row) =>
		row.map((node) => {
			if (!['start', 'target', 'wall', 'cat', 'logs'].includes(node.type)) {
				node.type = 'empty';
			}
			node.ini();
			return node;
		})
	);
	return grid;
}
export function randomBetween(start, end) {
	return Math.floor(Math.random() * (start - end + 1)) + end;
}
// export function setRandomStartEnd(grid) {
// 	const rows = grid.length;
// 	const columns = grid[0].length;
// 	const point = () => ({ row: () => randomBetween(0, rows), col: () => randomBetween(0, columns) });
// 	const pointChecker
// }

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
