<button on:click><slot /></button>

<style>
	button {
		color: var(--button-fg-color);
		background-color: var(--button-bg-color);
		height: var(--button-height);
		border: none;
		cursor: pointer;
		border-radius: var(--button-border-radius);
		border: var(--button-border);
	}
</style>
