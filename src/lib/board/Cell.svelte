<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<script>
  import { grid } from './grid.js';
  import Start from '$lib/board/Start.svelte';
  export let type
  export let distance
  export let shortesPath
  $: dist = Infinity
  $: sp = false
  $: if (distance < Infinity) setTimeout(() => dist = 'checked', distance * 200)
  else dist = Infinity
  $: if (shortesPath) setTimeout(() => sp = true, (distance * 200) + grid.getLong() * 200)
     else sp = false
</script>

<div class={`${type} ${dist}`} class:sp on:mouseover on:mousedown>
{#if type == 'start'}
  <Start />
{/if}
</div>

<style>
  div{
    border: solid 1px black;
    height: 30px;
    aspect-ratio: 1;
    /* cursor: url('../images/wall.png'),pointer; */
  }
  .wall{
    background-color: grey;
    transition: background-color 1s;
  }
  .digger{
    background: red;
  }


.checked{background: green;}


.target{
  background-image: url(../../images/target.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 25px 25px;
}
.sp{
    background-color: yellow;
    transition: background-color 2s;
  }

</style>