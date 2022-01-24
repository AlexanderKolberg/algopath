import { start, end } from './stores.js';

export default class Node {
	constructor(row, colum, type = 'empty') {
		this.g = Infinity;
		this.h = Infinity;
		this.f = Infinity;
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
			this.g = 0;
			this.type = 'start';
			start.set({ row: this.row, colum: this.colum });
		};
		this.setEnd = () => {
			this.type = 'target';
			end.set({ row: this.row, colum: this.colum });
		};
	}
}
