export default class Node {
	constructor(row, colum, type = 'empty') {
		this.distance = Infinity;
		this.type = type;
		this.isUnvisited = true;
		this.row = row;
		this.colum = colum;
		this.previousNode = null;
		this.isShortestPath = false;
		this.isUnvisited2 = true;
		this.setStart = () => {
			this.distance = 0;
			this.type = 'start';
		};
	}
}
