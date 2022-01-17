<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<script>
  export let type
</script>

<div class={`${type}`} on:mouseover on:mousedown></div>

<style>
  div{
    border: solid 1px black;
    height: 30px;
    aspect-ratio: 1;
    /* cursor: url('../images/wall.png'),pointer; */
  }
  .wall{
    background: black;
  }
  .start{
    background-image: url(../images/arrow.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 22px 22px;
  }
  .target{
    background-image: url(../images/target.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 25px 25px;
  }
</style>