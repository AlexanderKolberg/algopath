<script>
  import { reset } from '$lib/board/stores.js';
  import dijkstra from '$lib/board/algoritms/dijkstra.js';
  import mazeGen from '$lib/board/algoritms/maze/depthFirst.js';
  import Button from './Button.svelte';
  import ButtonWdrop from './ButtonWdrop.svelte';
  import recursiveDivision from '$lib/board/algoritms/maze/recursivedivision.js';
  import Status from './Status.svelte';
  import randomMaze from '$lib/board/algoritms/maze/randomMaze.js';
  import astar from '$lib/board/algoritms/astar.js';
  
  
</script>

<header>
  <nav>
    <ButtonWdrop on:click={dijkstra}>Solve with Dijkstra</ButtonWdrop>
    <ButtonWdrop on:click={mazeGen}>Draw maze with DFS</ButtonWdrop>
    <Button on:click={reset}>Clear</Button>
    <Button on:click={recursiveDivision}>Test</Button>
    <Button on:click={randomMaze}>Random</Button>
    <Button on:click={astar}>A*</Button>
  </nav>
</header>
<Status />


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