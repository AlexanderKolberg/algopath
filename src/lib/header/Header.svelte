<script>
	import { activeDrawer, animationSpeed, reset } from '$lib/board/stores.js';
	import Button from './buttons/Button.svelte';
	import Status from './Status.svelte';
	import SolveButton from './buttons/SolveButton.svelte';
	import MazeButton from './buttons/MazeButton.svelte';
	import RoundButton from './buttons/RoundButton.svelte';
	import Cat from '$lib/icons/Cat.svelte';
	import Wall from '$lib/icons/Wall.svelte';
	import Logs from '$lib/icons/Logs.svelte';
</script>

<header>
	<div>
		<SolveButton />
		<MazeButton />
		<Button on:click={reset}>Clear</Button>
	</div>
	<div>
		<RoundButton on:click={() => ($activeDrawer = 'wall')}
			><Wall
				fill="var({$activeDrawer == 'wall' ? '--button-selected' : '--button-fg-color'})"
			/></RoundButton
		>
		<RoundButton on:click={() => ($activeDrawer = 'cat')}
			><Cat
				fill="var({$activeDrawer == 'cat' ? '--button-selected' : '--button-fg-color'})"
			/></RoundButton
		>
		<RoundButton on:click={() => ($activeDrawer = 'logs')}
			><Logs
				fill="var({$activeDrawer == 'logs' ? '--button-selected' : '--button-fg-color'})"
			/></RoundButton
		>
		<label>
			Animation Speed
			<input type="range" bind:value={$animationSpeed} min={1} max={50} />
		</label>
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
		align-items: center;
		height: 50px;
		background-color: var(--bg-color);
		color: var(--button-fg-color);
	}
	input {
		accent-color: var(--button-bg-color);
	}
	label {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
