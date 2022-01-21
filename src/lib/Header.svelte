<script>
  import { grid } from './board/grid.js';
  import dijkstra from './board/algoritms/dijkstra.js';
  import mazeGen from './board/algoritms/maze/depthFirst.js';
  import Button from './Button.svelte';
  import ButtonWdrop from './ButtonWdrop.svelte';
  
</script>

<header>
  <nav>
    <ButtonWdrop on:click={dijkstra}>Solve Maze width Dijkstra</ButtonWdrop>
    <Button on:click={mazeGen}>Draw maze with DFS</Button>
    <Button on:click={grid.reset}>Clear grid</Button>
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
    background-color: #0f233e;
  }
  div{
    color: white;
    cursor: pointer;
  }
</style>