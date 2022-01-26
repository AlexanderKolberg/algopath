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
	<nav>
		<SolveButton />
		<MazeButton />
		<Button on:click={reset}>Clear</Button>
		<RoundButton on:click={() => ($activeDrawer = 'wall')}><Wall /></RoundButton>
		<RoundButton on:click={() => ($activeDrawer = 'cat')}><Cat /></RoundButton>
		<RoundButton on:click={() => ($activeDrawer = 'logs')}><Logs /></RoundButton>
		<label>
			Animation Speed
			<input type="range" bind:value={$animationSpeed} min={1} max={50} />
		</label>
	</nav>
</header>
<Status />

<style>
	nav {
		display: flex;
		gap: 10px;
	}
	header {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 50px;
		background-color: #727478;
	}
</style>
