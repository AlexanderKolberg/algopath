<script>
	import { reset, statusStore } from '$lib/board/stores.js';
	import Button from './buttons/Button.svelte';
	import Status from './Status.svelte';
	import SolveButton from './buttons/SolveButton.svelte';
	import MazeButton from './buttons/MazeButton.svelte';
	import Glider from './buttons/Glider.svelte';
	import ObsticalSelector from './buttons/ObsticalSelector.svelte';
	import HelpButton from './buttons/HelpButton.svelte';
	let status;
	function setStatus(action) {
		status = $statusStore;
		$statusStore = `${action}`;
	}
	function resetStatus() {
		$statusStore = status;
	}
</script>

<header>
	<SolveButton />
	<MazeButton />
	<ObsticalSelector />
	<Button on:click={reset} on:mouseenter={() => setStatus('Clear grid')} on:mouseleave={resetStatus}
		>Clear</Button
	>
	<Glider />
	<HelpButton />
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
