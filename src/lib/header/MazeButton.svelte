<script>
  import ButtonWdrop from './ButtonWdrop.svelte';
  import depthFirst from '$lib/board/algoritms/maze/depthFirst.js';
  import randomMaze from '$lib/board/algoritms/maze/randomMaze.js';
  import recursiveDivision from '$lib/board/algoritms/maze/recursivedivision.js';

  let algoList = ['Depth First', 'Random', 'Recursive Division']
  let activeAlgo = 'Depth First'
  function changeAlgo(event){
    activeAlgo = event.detail.text
  }
  function clickHandler(){
    if (activeAlgo == 'Depth First') depthFirst()
    if (activeAlgo == 'Random') randomMaze()
    if (activeAlgo == 'Recursive Division') recursiveDivision()
  }
</script>

<ButtonWdrop
 dropdownList={algoList}
 on:click={clickHandler} 
 on:algoritm={changeAlgo}>{activeAlgo} Maze</ButtonWdrop>