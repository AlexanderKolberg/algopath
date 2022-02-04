<script>
	import GroupButton from './GroupButton.svelte';
	import Mountain from '$lib/icons/Mountain.svelte';
	import Wall from '$lib/icons/Wall.svelte';
	import Logs from '$lib/icons/Logs.svelte';
	import { activeObstacleStore } from '$lib/board/stores.js';
</script>

<div>
	<GroupButton
		type="left"
		on:click={() => ($activeObstacleStore = 'wall')}
		active={$activeObstacleStore == 'wall' ? 'buttonSelected' : ''}
		><Wall fill="var(--button-fg-color)" /></GroupButton
	>
	<GroupButton
		on:click={() => ($activeObstacleStore = 'logs')}
		active={$activeObstacleStore == 'logs' ? 'buttonSelected' : ''}
		><Logs fill="var(--button-fg-color)" /></GroupButton
	>
	<GroupButton
		type="right"
		on:click={() => ($activeObstacleStore = 'mountain')}
		active={$activeObstacleStore == 'mountain' ? 'buttonSelected' : ''}
		><Mountain fill="var(--button-fg-color)" /></GroupButton
	>
</div>

<style>
	div {
		display: flex;
		gap: 0;
	}
</style>
