<script>
  import { grid } from './board/grid.js';
</script>

<header>
  <nav>
    <div on:click={grid.reset}>
      Clear grid
    </div>
    <div>
      Draw random maze
    </div>
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
  }
</style>