<script>
	import { activeObstacleStore, gridStore } from './stores.js';
	import Cell from '$lib/board/Cell.svelte';
	import { onMount } from 'svelte';

	let height;
	let width;
	onMount(() => {
		let columns = Math.floor(width / 30);
		let rows = Math.floor(height / 30);
		gridStore.init(columns, rows);
	});

	const setNodeType = (row, column, type) => {
		$gridStore[row][column].setType(type);
		$gridStore[row][column] = $gridStore[row][column];
	};

	let dragNode = null;
	const mouseHandler = (event, row, column) => {
		if (event.buttons != 1 || dragNode !== null) return;
		let currentValue = $gridStore[row][column].type;
		if (currentValue == 'empty') {
			setNodeType(row, column, $activeObstacleStore);
		} else if (!['start', 'target'].includes(currentValue)) {
			setNodeType(row, column, 'empty');
		}
	};
	const mouseLeaveHandler = (event, row, column) => {
		if (event.buttons != 1) return;
		let currentValue = $gridStore[row][column].type;
		if (['start', 'target'].includes(currentValue)) {
			dragNode = { row, column, type: currentValue };
		}
	};
	const mouseEnterHandler = (event, row, column) => {
		if (event.buttons != 1 || $gridStore[row][column].type !== 'empty' || dragNode == null) return;
		setNodeType(dragNode.row, dragNode.column, 'empty');
		setNodeType(row, column, dragNode.type);
		dragNode = null;
	};
</script>

<div class="container" bind:clientWidth={width} bind:clientHeight={height}>
	<div class="board" on:mouseleave={(dragNode = null)} on:mouseup={(dragNode = null)}>
		{#each $gridStore as row, r}
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
</div>

<style>
	.container {
		flex: 1 1 auto;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.board {
		display: flex;
		border-left: 1px solid;
		border-top: 1px solid;
		border-color: lightgrey;
	}
</style>
