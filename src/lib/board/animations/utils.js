import { get } from 'svelte/store';
import { animationSpeed } from '../stores';

export async function wait(factor = 1) {
	let speed = get(animationSpeed);
	await new Promise((resolve) => setTimeout(resolve, speed * factor));
}
