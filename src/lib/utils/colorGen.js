function()



function hexColorToFloatColor(hex) {
	return [
		parseInt(hex.substring(0, 2), 16) / 255,
		parseInt(hex.substring(2, 4), 16) / 255,
		parseInt(hex.substring(4, 6), 16) / 255
	];
}
function lerp(colors, value) {
	return [
		colors[0][0] + (colors[1][0] - colors[0][0]) * value,
		colors[0][1] + (colors[1][1] - colors[0][1]) * value,
		colors[0][2] + (colors[1][2] - colors[0][2]) * value
	];
}
