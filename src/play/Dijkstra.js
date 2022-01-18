let grid = [
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 1, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 2, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0]
];

let start = [1, 1];
let current = start;
let cols = grid[0].length;
let rows = grid.length;

let unvisited = [];
let visited = [];

while (unvisited.length) {
	visited.push(current);
}

function getNeighbours(p) {
	const n = [];
	const [x, y] = p;
	if (x < cols - 1) n.push([x + 1, y]);
	if (x > 0) n.push([x - 1, y]);
	if (y < rows - 1) n.push([x, y + 1]);
	if (y > 0) n.push([x, y - 1]);
	return n;
}

let differenceX = [0, 0, 1, -1];
let differenceY = [-1, 1, 0, 0];

for (let i = 0; i < 4; i++) {}
