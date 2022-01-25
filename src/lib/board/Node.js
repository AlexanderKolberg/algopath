import { start, end } from './stores.js';

export default class Node {
	constructor(row, colum, type = 'empty') {
		this.row = row;
		this.colum = colum;
		this.setType(type);
		this.ini();
	}
	setType(type) {
		this.type = type;
		this.obstacle = 1;
		if (type == 'start') {
			this.distance = 0;
			start.set({ row: this.row, colum: this.colum });
		}
		if (type == 'target') {
			end.set({ row: this.row, colum: this.colum });
		}
		if (type == 'logs') this.obstacle = 2;
		if (type == 'cat') this.obstacle = 3;
	}
	ini() {
		this.h = Infinity;
		this.f = Infinity;
		this.distance = this.type == 'start' ? 0 : Infinity;
		this.isUnvisited = true;
		this.previousNode = null;
		this.isShortestPath = false;
		this.isUnvisited2 = true;
	}
}
