<script>
  let arr = new Array(400)
</script>

<div class="board">

  {#each arr as a}
  <div class="cell"></div>
  {/each}
</div>

<style>
  .board{
    display: flex;
    flex-wrap: wrap;
  }
  .cell{
    border: solid 1px;
    height: 20px;
    aspect-ratio: 1;
  }
</style>