<script>
	import { createEventDispatcher, onMount } from 'svelte';
	import { scale } from 'svelte/transition';
	import Arrow from '$lib/icons/Arrow.svelte';

	export let dropdownList;

	const dispatch = createEventDispatcher();
	let show = false;
	let menu = null;

	onMount(() => {
		const handleOutsideClick = (event) => {
			if (show && !menu.contains(event.target)) {
				show = false;
			}
		};
		document.addEventListener('click', handleOutsideClick, false);

		return () => {
			document.removeEventListener('click', handleOutsideClick, false);
		};
	});

	function changeAlgoritm(algoritm) {
		dispatch('algoritm', {
			text: algoritm
		});
	}
</script>

<div class="outline" bind:this={menu}>
	<div on:click class="button">
		<slot />
	</div>
	<div class="dropdown" on:click={() => (show = !show)}><Arrow /></div>
	{#if show}
		<div
			class="dropdown-content"
			in:scale={{ duration: 100, start: 0.95 }}
			out:scale={{ duration: 75, start: 0.95 }}
		>
			<ul>
				{#each dropdownList as item}
					<li on:click={() => changeAlgoritm(item)}>{item}</li>
				{/each}
			</ul>
		</div>
	{/if}
</div>

<style>
	.outline {
		color: #fff;
		background-color: #333;
		border-radius: 5px;
		border: none;
		cursor: pointer;
		display: flex;
		align-items: center;
		position: relative;
	}
	.button {
		padding: 8px;
	}
	.dropdown {
		padding: 8px;
		border-left: white solid 1px;
		margin-left: 3px;
	}

	.dropdown-content {
		position: absolute;
		transform: translateY(57%);
		background-color: rgb(175, 174, 174);
		border-radius: 10px;
		color: black;
		min-width: 160px;
		box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
		padding: 12px 16px;
		z-index: 1;
	}
	li {
		list-style-type: none;
	}
	li:hover {
		background-color: #335;
	}
</style>
