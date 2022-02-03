<script>
	import { activeObstacleStore, reset } from '$lib/board/stores.js';
	import Button from './buttons/Button.svelte';
	import Status from './Status.svelte';
	import SolveButton from './buttons/SolveButton.svelte';
	import MazeButton from './buttons/MazeButton.svelte';
	import RoundButton from './buttons/RoundButton.svelte';
	import Cat from '$lib/icons/Cat.svelte';
	import Wall from '$lib/icons/Wall.svelte';
	import Logs from '$lib/icons/Logs.svelte';
	import Glider from './buttons/Glider.svelte';
</script>

<header>
	<div>
		<SolveButton />
		<MazeButton />
		<Button on:click={reset}>Clear</Button>
	</div>
	<div>
		<RoundButton on:click={() => ($activeObstacleStore = 'wall')}
			><Wall
				fill="var({$activeObstacleStore == 'wall' ? '--button-selected' : '--button-fg-color'})"
			/></RoundButton
		>
		<RoundButton on:click={() => ($activeObstacleStore = 'cat')}
			><Cat
				fill="var({$activeObstacleStore == 'cat' ? '--button-selected' : '--button-fg-color'})"
			/></RoundButton
		>
		<RoundButton on:click={() => ($activeObstacleStore = 'logs')}
			><Logs
				fill="var({$activeObstacleStore == 'logs' ? '--button-selected' : '--button-fg-color'})"
			/></RoundButton
		>
		<Glider />
		<RoundButton>?</RoundButton>
	</div>
</header>
<Status />

<style>
	div {
		display: flex;
		align-items: center;
		gap: 10px;
	}
	header {
		display: flex;
		justify-content: space-around;
		/* align-items: center; */
		height: 50px;
		background-color: var(--header-bg-color);
		color: var(--button-fg-color);
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	}
</style>
