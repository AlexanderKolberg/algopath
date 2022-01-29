<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<script>
	import Start from '$lib/icons/Start.svelte';
	import Cat from '$lib/icons/Cat.svelte';
	import Logs from '$lib/icons/Logs.svelte';
	import Target from '$lib/icons/Target.svelte';

	export let node;
</script>

<div class={`${node.type} ${node.classes}`} on:mouseover on:mousedown on:mouseleave on:mouseenter>
	{#if node.type == 'start'}
		<Start id="start" />
	{:else if node.type == 'cat'}
		<Cat width="20px" height="20px" fill="black" />
	{:else if node.type == 'logs'}
		<Logs width="20px" height="20px" fill="black" />
	{:else if node.type == 'target'}
		<Target />
	{/if}
</div>

<style>
	div {
		border-right: solid 1px;
		border-bottom: solid 1px;
		border-color: lightgrey;
		height: 30px;
		aspect-ratio: 1;
	}

	.wall {
		background-color: grey;
		/* transition: background-color 1s; */
	}
	.digger {
		background: red;
	}

	.checked {
		background: rgb(57, 99, 57);
		/* animation: color-me-in 0.5s; */
	}
	.shortestPath {
		background-color: rgb(162, 231, 162);
		transition: background-color 2s;
	}
</style>
