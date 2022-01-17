<script context="module">
  import Viewport from 'svelte-viewport-info'
</script>
<div 
  on:mousedown={()=> (mousedown = true)} 
  on:mouseup={() => (mousedown = false)}
  
 class="board">
      {#each grid as row, i}
        <div class="row">
          {#each row as cell, k}
            <div
              class={`cell ${cell}`} 
              on:mouseover={() => (mousedown ? grid[i][k] = "wall" : '')}
              />
          {/each}
        </div>
      {/each}
</div>

<script>
  import { onMount } from 'svelte';
  let mousedown = false
  let rows = 0
  let colums = 0
  let grid = []
  onMount(async () => {
  colums = Math.floor(Viewport.Width/20)
  rows = Math.floor(Viewport.Height/20)
  grid = [...Array(colums)].map(() => [...Array(rows)])
  })
</script>

<style>
  .board{
    display: flex;
  }
  .cell{
    border: solid 1px;
    height: 20px;
    aspect-ratio: 1;
  }
  .wall{
    background: black;
  }
</style>