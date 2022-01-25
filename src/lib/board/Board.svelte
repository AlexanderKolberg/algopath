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

	let mousedown = false;
	function mouseHandler(row, collum, down) {
		if (!down) return;
		let currentValue = $grid[row][collum].type;
		if (currentValue == 'empty') {
			$grid[row][collum].type = $activeDrawer;
			$grid[row][collum].setType($activeDrawer);
		} else if (!['start', 'target'].includes(currentValue)) {
			$grid[row][collum].type = 'empty';
			$grid[row][collum].setType('empty');
		}
	}
</script>

<svelte:window bind:innerHeight bind:innerWidth />

<div
	class="board"
	on:mousedown={() => (mousedown = true)}
	on:mouseup={() => (mousedown = false)}
	on:mouseleave={() => (mousedown = false)}
	on:dragstart={() => (mousedown = false)}
>
	{#each $grid as row, i}
		<div>
			{#each row as node, k}
				<Cell
					{node}
					on:mouseover={() => mouseHandler(i, k, mousedown)}
					on:mousedown={() => mouseHandler(i, k, true)}
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
