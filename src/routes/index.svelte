<script context="module">
  import Viewport from 'svelte-viewport-info'
</script>
<div 
  on:mousedown={()=> (mousedown = true)} 
  on:mouseup={() => (mousedown = false)}
  on:mouseleave={() => (mousedown = false)}
 class="board">
      {#each grid as row, i}
        <div>
          {#each row as cell, k}
            <Node type={cell}
            on:mouseover={() => (mouseHandler(i, k))}
            on:mousedown={() => (mouseHandler(i, k, true))} />
          {/each}
        </div>
      {/each}
</div>

<script>
  import Node from '../lib/Node.svelte';
  import { onMount } from 'svelte';
  let mousedown = false
  let rows = 0
  let colums = 0
  let grid = []
  onMount(async () => {
    colums = Math.floor(Viewport.Width/30)
    rows = Math.floor((Viewport.Height-50)/30)
    grid = [...Array(colums)].map(() => [...Array(rows).fill(null)])
    let centerX = Math.floor(grid.length/2)
    let centerY = Math.floor(grid[0].length/2)
    grid[centerX - 10][centerY] = 'start'
    grid[centerX + 10][centerY] = 'target'
  })
function mouseHandler(row, collum, down){
  let isMouseDown = (mousedown || down)
  if (!isMouseDown) return
  let currentValue = grid[row][collum]
  if (currentValue === null){
    grid[row][collum] = 'wall'
  }
  else if(currentValue === 'wall'){
    grid[row][collum] = null
  }
}
</script>

<style>
  .board{
    display: flex;
  }
</style>