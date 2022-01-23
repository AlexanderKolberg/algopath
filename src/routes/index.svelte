<script>
  import Header from '$lib/header/Header.svelte';
  import Board from '$lib/board/Board.svelte'
  import {unsolvable} from '$lib/board/stores.js'
</script>

<Header />
{#if $unsolvable}
  <div>No path</div>
{/if}
<Board />