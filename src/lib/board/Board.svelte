<script>
	import { activeDrawer, grid } from './stores.js';
	import Cell from '$lib/board/Cell.svelte';
	import { onMount } from 'svelte';

	let height;
	let width;
	onMount(() => {
		let colums = Math.floor(width / 30);
		let rows = Math.floor(height / 30);
		grid.init(colums, rows);
	});

	const setNodeType = (row, collum, type) => {
		$grid[row][collum].setType(type);
		$grid[row][collum] = $grid[row][collum];
	};

	let dragNode = null;
	const mouseHandler = (event, row, collum) => {
		if (event.buttons != 1 || dragNode !== null) return;
		let currentValue = $grid[row][collum].type;
		if (currentValue == 'empty') {
			setNodeType(row, collum, $activeDrawer);
		} else if (!['start', 'target'].includes(currentValue)) {
			setNodeType(row, collum, 'empty');
		}
	};
	const mouseLeaveHandler = (event, row, collum) => {
		if (event.buttons != 1) return;
		let currentValue = $grid[row][collum].type;
		if (['start', 'target'].includes(currentValue)) {
			dragNode = { row, collum, type: currentValue };
		}
	};
	const mouseEnterHandler = (event, row, collum) => {
		if (event.buttons != 1 || $grid[row][collum].type !== 'empty' || dragNode == null) return;
		setNodeType(dragNode.row, dragNode.collum, 'empty');
		setNodeType(row, collum, dragNode.type);
		dragNode = null;
	};
</script>

<div
	class="board"
	bind:clientWidth={width}
	bind:clientHeight={height}
	on:mouseleave={(dragNode = null)}
	on:mouseup={(dragNode = null)}
>
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
		flex: 1 1 auto;
	}
</style>
