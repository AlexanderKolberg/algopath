<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<script>
	import { longest, animationSpeed } from './stores.js';
	import Start from '$lib/icons/Start.svelte';
	import Cat from '$lib/icons/Cat.svelte';
	import Logs from '$lib/icons/Logs.svelte';
	import Target from '$lib/icons/Target.svelte';

	export let node;
	$: dist = Infinity;
	$: sp = false;
	$: if (node.distance < Infinity && node.distance > 0)
		setTimeout(() => (dist = 'checked'), node.distance * 200);
	else dist = Infinity;
	$: if (node.isShortestPath) {
		setTimeout(() => (sp = true), node.distance * 200 + $longest * 200);
	} else sp = false;
</script>

<div class={`${node.type} ${dist}`} class:sp on:mouseover on:mousedown on:mouseleave on:mouseenter>
	{#if node.type == 'start'}
		<Start />
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
		border: solid 1px lightgrey;
		height: 30px;
		aspect-ratio: 1;
		/* cursor: url('../images/wall.png'),pointer; */
	}
	.wall {
		background-color: grey;
		/* transition: background-color 1s; */
	}
	.digger {
		background: red;
	}
	@keyframes color-me-in {
		0% {
			background: white;
		}
		100% {
			background: rgb(57, 99, 57);
		}
	}

	.checked {
		background: rgb(57, 99, 57);
		/*animation: color-me-in .5s; */
	}
	.sp {
		background-color: rgb(162, 231, 162);
		transition: background-color 2s;
	}
</style>
