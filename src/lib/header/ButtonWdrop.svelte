<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	
	export let dropdownList

	function changeAlgoritm(algoritm) {
		dispatch('algoritm', {
			text: algoritm
		});
	}
</script>

<div class="outline">
	<div on:click class="button">
		<slot></slot>
	</div>
	<div class="dropdown">
		<svg width="20" height="20" fill="white"><path d="M12,16a2.5,2.5,0,0,1-1.768-.731L4.939,9.975,7.061,7.854,12,12.793l4.939-4.939,2.122,2.121-5.293,5.293A2.5,2.5,0,0,1,12,16Z"/></svg>
		<div class="dropdown-content">
			<ul>
				{#each dropdownList as item}
					<li on:click={() => changeAlgoritm(item)}>{item}</li>
				{/each}
			</ul>
		</div>
	</div>
</div>

<style>
	.outline{
	color: #fff;
	background-color: #333;
	border-radius: 5px;
	border: none;
  cursor: pointer;
	display: flex;
	align-items: center;
	}
	.button{
		padding: 8px;
	}
	.dropdown {
	padding: 8px;
  position: relative;
  display: inline-block;
	border-left: #335 solid 1px;
	margin-left: 3px;
}

.dropdown-content {
  display: none;
  position: absolute;
	transform: translateX(-100%);
	background-color: rgb(175, 174, 174);
	border-radius: 10px;
	color: black;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px 16px;
  z-index: 1;
	
}
.dropdown:hover .dropdown-content {
  display: block;
}
</style>