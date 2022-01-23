<script>
  import { reset } from '$lib/board/stores.js';
  import dijkstra from '$lib/board/algoritms/dijkstra.js';
  import mazeGen from '$lib/board/algoritms/maze/depthFirst.js';
  import Button from './Button.svelte';
  import ButtonWdrop from './ButtonWdrop.svelte';
  import recursiveDivision from '$lib/board/algoritms/maze/recursivedivision.js'
</script>

<header>
  <nav>
    <ButtonWdrop on:click={dijkstra}>Solve with Dijkstra</ButtonWdrop>
    <ButtonWdrop on:click={mazeGen}>Draw maze with DFS</ButtonWdrop>
    <Button on:click={reset}>Clear</Button>
    <Button on:click={recursiveDivision}>Test</Button>
  </nav>
</header>


<style>
  nav{
    display: flex;
    gap: 10px
  }
  header{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    background-color: #727478;
  }
</style>