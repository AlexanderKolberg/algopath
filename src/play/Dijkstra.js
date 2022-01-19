class Node {
	constructor(row, colum) {
		this.distance = Infinity;
		this.type = 'Empty';
		this.isUnvisited = true;
		this.row = row;
		this.colum = colum;
	}
}

let grid = [...Array(10)].map((_, row) => [...Array(10)].map((_, col) => new Node(row, col)));

grid[1][1].distance = 0;
grid[5][5].type = 'end';

let unvisited = grid.flat();

while (unvisited.length) {
	sortUnvisited();
	let current = unvisited[0];
	let neighbors = getNeighbors(current);
	let distance = current.distance + 1;
	neighbors.forEach((n) => {
		n.distance = Math.min(n.distance, distance);
	});
	current.isUnvisited = false;
	if (current.type == 'end') break;
	unvisited.shift();
}

let newMap = grid.map((r) => r.map((n) => (n.distance != Infinity ? n.distance : 'A')));
console.log(newMap.map((r) => r.join('')).join('\n'));

function getNeighbors(n) {
	let c = n.colum;
	let r = n.row;
	let neighbors = [];
	if (c - 1 >= 0 && grid[r][c - 1].isUnvisited) neighbors.push(grid[r][c - 1]);
	if (c + 1 < grid[0].length && grid[r][c + 1].isUnvisited) neighbors.push(grid[r][c + 1]);
	if (r - 1 >= 0 && grid[r - 1][c].isUnvisited) neighbors.push(grid[r - 1][c]);
	if (r + 1 < grid.length && grid[r + 1][c].isUnvisited) neighbors.push(grid[r + 1][c]);
	return neighbors;
}

function sortUnvisited() {
	unvisited.sort((a, b) => a.distance - b.distance);
}
