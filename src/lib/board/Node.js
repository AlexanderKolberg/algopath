export default class Node {
	constructor(row, colum) {
		this.distance = Infinity;
		this.type = 'empty';
		this.isUnvisited = true;
		this.row = row;
		this.colum = colum;
		this.previousNode = null;
		this.isShortestPath = false;
	}
}
