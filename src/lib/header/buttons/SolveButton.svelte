<script>
	import ButtonWdrop from './ButtonWdropdown.svelte';
	import dijkstra from '$lib/board/algoritms/dijkstra.js';
	import astar from '$lib/board/algoritms/astar.js';
	let algoList = ['Dijkstra', 'A*'];
	let activeAlgo = 'Dijkstra';
	function changeAlgo(event) {
		activeAlgo = event.detail.text;
	}
	function clickHandler() {
		if (activeAlgo == 'Dijkstra') dijkstra();
		if (activeAlgo == 'A*') astar();
	}
</script>

<ButtonWdrop
	style="width:170px"
	dropdownList={algoList}
	on:click={clickHandler}
	on:algoritm={changeAlgo}>Solve with {activeAlgo}</ButtonWdrop
>
