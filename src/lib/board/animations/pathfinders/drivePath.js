export default function drivePath(nodes) {
	const start = document.getElementById('start');
	let road = path(nodes);
	let time = nodes.length * 100;
	let oldStyle = start.style.cssText;
	start.style.cssText += `offset-path: path('${road}'); animation: move ${time}ms ease-in-out;`;
	start.onanimationend = () => {
		start.style.cssText = oldStyle;
	};
}

function path(nodes) {
	let row = nodes[0].row;
	let column = nodes[0].column;
	nodes.shift();
	let arr = [];
	let hor = 15;
	let vert = 15;
	for (let node of nodes) {
		hor += (node.row - row) * 30;
		vert += (node.column - column) * 30;
		arr.push(`${hor},${vert}`);
		row = node.row;
		column = node.column;
	}
	return `M15,15 ${arr.join(' ')}`;
}
