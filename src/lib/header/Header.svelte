<script>
  import { reset } from '$lib/board/stores.js';
  import Button from './Button.svelte';
  import Status from './Status.svelte';
  import SolveButton from './SolveButton.svelte';
  import MazeButton from './MazeButton.svelte';
</script>

<header>
  <nav>
    <SolveButton />
    <MazeButton />
    <Button on:click={reset}>Clear</Button>
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