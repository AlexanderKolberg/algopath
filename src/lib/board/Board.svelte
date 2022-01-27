<script>
	import { activeDrawer, grid } from './stores.js';
	import Cell from '$lib/board/Cell.svelte';
	import { onMount } from 'svelte';

	let innerHeight;
	let innerWidth;
	onMount(() => {
		let colums = Math.floor(innerWidth / 30);
		let rows = Math.floor((innerHeight - 50) / 30);
		grid.init(colums, rows);
	});

	let dragNode = null;
	function mouseHandler(event, row, collum) {
		if (event.buttons != 1 || dragNode !== null) return;
		let currentValue = $grid[row][collum].type;
		if (currentValue == 'empty') {
			$grid[row][collum].type = $activeDrawer;
			$grid[row][collum].setType($activeDrawer);
		} else if (!['start', 'target'].includes(currentValue)) {
			$grid[row][collum].type = 'empty';
			$grid[row][collum].setType('empty');
		}
	}
	function mouseLeaveHandler(event, row, collum) {
		if (event.buttons != 1) return;
		let currentValue = $grid[row][collum].type;
		if (['start', 'target'].includes(currentValue)) {
			dragNode = { row, collum, type: currentValue };
		}
	}
	function mouseEnterHandler(event, row, collum) {
		if (event.buttons != 1 || $grid[row][collum].type !== 'empty') return;
		$grid[dragNode.row][dragNode.collum].type = 'empty';
		$grid[dragNode.row][dragNode.collum].setType('empty');
		$grid[row][collum].type = dragNode.type;
		$grid[row][collum].setType(dragNode.type);
		dragNode = null;
	}
</script>

<svelte:window bind:innerHeight bind:innerWidth />

<div class="board" on:mouseleave={(dragNode = null)} on:mouseup={(dragNode = null)}>
	{#each $grid as row, r}
		<div>
			{#each row as node, c}
				<Cell
					{node}
					on:mousedown={(event) => mouseHandler(event, r, c)}
					on:mouseover={(event) => mouseHandler(event, r, c)}
					on:mouseleave={(event) => mouseLeaveHandler(event, r, c)}
					on:mouseenter={(event) => mouseEnterHandler(event, r, c)}
				/>
			{/each}
		</div>
	{/each}
</div>

<style>
	.board {
		display: flex;
	}
</style>
