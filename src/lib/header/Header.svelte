<script>
	import { reset } from '$lib/board/stores.js';
	import Button from './buttons/Button.svelte';
	import Status from './Status.svelte';
	import SolveButton from './buttons/SolveButton.svelte';
	import MazeButton from './buttons/MazeButton.svelte';
	import Glider from './buttons/Glider.svelte';
	import RoundButton from './buttons/RoundButton.svelte';
	import Map from '$lib/icons/map.svelte';
	import ObsticalSelector from './buttons/ObsticalSelector.svelte';
</script>

<header>
	<SolveButton />
	<MazeButton />
	<ObsticalSelector />
	<Button on:click={reset}>Clear</Button>
	<Glider />
	<RoundButton>?</RoundButton>
</header>
<Status />

<style>
	header {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
		height: 50px;
		background-color: var(--header-bg-color);
		color: var(--button-fg-color);
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	}
</style>
