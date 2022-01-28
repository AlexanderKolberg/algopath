<script>
	import { status } from '$lib/board/stores.js';
</script>

<div>
	{#if $status == ''}
		Draw a maze or generate one with one of the maze algoritms
	{:else if $status == 'solved'}
		Maze solved
	{:else if $status == 'unsolvable'}
		<span class="red">No path</span>
	{/if}
</div>

<style>
	div {
		display: flex;
		align-content: center;
		justify-content: center;
		height: 25px;
	}
	.red {
		color: red;
	}
</style>
