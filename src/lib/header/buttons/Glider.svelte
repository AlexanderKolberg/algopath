<script>
	import { animationSpeedStore } from '$lib/board/stores';
	let minValue = 0;
	let maxValue = 100;
	let value = 50;
	const onChange = () => ($animationSpeedStore = maxValue - value);
</script>

<label>
	Animation Speed
	<input type="range" bind:value min={minValue} max={maxValue} on:change={onChange} />
</label>

<style>
	input {
		accent-color: var(--button-bg-color);
	}
	label {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
