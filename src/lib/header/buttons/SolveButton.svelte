<script>
	import ButtonWdrop from './ButtonWdropdown.svelte';
	import dijkstra from '$lib/board/algorithms/pathfinders/dijkstra.js';
	import astar from '$lib/board/algorithms/pathfinders/astar.js';
	import depthFirstPath from '$lib/board/algorithms/pathfinders/depthFirst';
	let algoList = ['Dijkstra', 'A*', 'Depth First'];
	let activeAlgo = 'Dijkstra';
	function changeAlgo(event) {
		activeAlgo = event.detail.text;
	}
	function clickHandler() {
		if (activeAlgo == 'Dijkstra') dijkstra();
		if (activeAlgo == 'A*') astar();
		if (activeAlgo == 'Depth First') depthFirstPath();
	}
</script>

<ButtonWdrop
	style="width:180px"
	dropdownList={algoList}
	on:click={clickHandler}
	on:algoritm={changeAlgo}>Solve with {activeAlgo}</ButtonWdrop
>
