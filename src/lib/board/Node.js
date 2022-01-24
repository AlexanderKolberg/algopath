import { start, end } from './stores.js';

export default class Node {
	constructor(row, colum, type = 'empty') {
		this.row = row;
		this.colum = colum;
		this.type = type;
		this.ini();
	}
	ini() {
		this.g = Infinity;
		this.h = Infinity;
		this.f = Infinity;
		this.distance = Infinity;
		this.isUnvisited = true;
		this.previousNode = null;
		this.isShortestPath = false;
		this.isUnvisited2 = true;
	}
	setStart() {
		this.distance = 0;
		this.g = 0;
		this.type = 'start';
		start.set({ row: this.row, colum: this.colum });
	}
	setEnd() {
		this.type = 'target';
		end.set({ row: this.row, colum: this.colum });
	}
}
