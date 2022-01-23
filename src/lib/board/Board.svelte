<script>
  import { grid } from './stores.js';
  import Cell from '$lib/board/Cell.svelte';
  import { onMount } from 'svelte';
  
  let innerHeight;
  let innerWidth;
  onMount(() => {
    let colums = Math.floor(innerWidth/30)
    let rows = Math.floor((innerHeight-50)/30)
    grid.init(colums, rows)
  })

  let mousedown = false;
  function mouseHandler(row, collum, down){
    if (!down) return
    let currentValue = $grid[row][collum].type
    if (currentValue === 'empty'){
      $grid[row][collum].type = 'wall'
    }
    else if(currentValue === 'wall'){
      $grid[row][collum].type = 'empty'
    }
  }
</script>

<svelte:window bind:innerHeight={innerHeight} bind:innerWidth={innerWidth} />

<div class="board"
  on:mousedown={()=> (mousedown = true)} 
  on:mouseup={() => (mousedown = false)}
  on:mouseleave={() => (mousedown = false)}
  on:dragstart={() => (mousedown = false)}
  >
      {#each $grid as row, i}
        <div>
          {#each row as node, k}
            <Cell node={node}
            on:mouseover={() => (mouseHandler(i, k, mousedown))}
            on:mousedown={() => (mouseHandler(i, k, true))} />
          {/each}
        </div>
      {/each}
</div>

<style>
  .board{
    display: flex;
  }
</style>