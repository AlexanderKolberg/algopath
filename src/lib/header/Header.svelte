<script>
	import { reset } from '$lib/board/stores.js';
	import Button from './buttons/Button.svelte';
	import Status from './Status.svelte';
	import SolveButton from './buttons/SolveButton.svelte';
	import MazeButton from './buttons/MazeButton.svelte';
	import RoundButton from './buttons/RoundButton.svelte';
	import Cat from './buttons/icons/Cat.svelte';
	import Wall from './buttons/icons/Wall.svelte';
	import Logs from './buttons/icons/Logs.svelte';
</script>

<header>
	<nav>
		<SolveButton />
		<MazeButton />
		<Button on:click={reset}>Clear</Button>
		<RoundButton><Wall /></RoundButton>
		<RoundButton><Cat /></RoundButton>
		<RoundButton><Logs /></RoundButton>
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
