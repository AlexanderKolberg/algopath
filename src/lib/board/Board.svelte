<script>
  import { grid } from './grid.js';
  import Node from '$lib/board/Node.svelte';
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
    let isMouseDown = (mousedown || down)
    if (!isMouseDown) return
    let currentValue = $grid[row][collum]
    if (currentValue === null){
      $grid[row][collum] = 'wall'
    }
    else if(currentValue === 'wall'){
      $grid[row][collum] = null
    }
  }
</script>

<svelte:window bind:innerHeight={innerHeight} bind:innerWidth={innerWidth} />

<div class="board"
  on:mousedown={()=> (mousedown = true)} 
  on:mouseup={() => (mousedown = false)}
  on:mouseleave={() => (mousedown = false)}
  >
      {#each $grid as row, i}
        <div>
          {#each row as cell, k}
            <Node type={cell}
            on:mouseover={() => (mouseHandler(i, k))}
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