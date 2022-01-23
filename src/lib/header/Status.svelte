<script>
  import {unsolvable} from '$lib/board/stores.js'
</script>

<div>
  {#if $unsolvable}
    <span class="red" >No path</span>
  {:else}
    Draw a maze or generate one with one of the maze algoritms
  {/if}
</div>


<style>
div{
  display: flex;
  align-content: center;
  justify-content: center;
  height: 25px;
}
.red{
  color: red;
}
</style>