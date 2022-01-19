<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<script>
  export let type
  export let distance
  export let shortesPath
</script>

<div class={`${type} d${distance} ${shortesPath ? 'shortesPath' : ''}`} on:mouseover on:mousedown></div>

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

.d0{background: #00c2ff;}
.d1{background: #00c4ff;}
.d2{background: #01bfff;}
.d3{background: #11bdff;}
.d4{background: #21baff;}
.d5{background: #2fb7ff;}
.d6{background: #3db4ff;}
.d7{background: #4ab0ff;}
.d8{background: #57adff;}
.d9{background: #64a9ff;}
.d10{background: #70a5ff;}
.d11{background: #7ca1ff;}
.d12{background: #889cff;}
.d13{background: #9497ff;}
.d14{background: #9f92ff;}
.d15{background: #aa8dff;}
.d16{background: #b587ff;}
.d17{background: #bf81fd;}
.d18{background: #c97bf8;}
.d19{background: #d374f1;}
.d20{background: #dc6dea;}
.d21{background: #e465e2;}
.d22{background: #ec5dda;}
.d23{background: #f355d1;}
.d24{background: #fa4bc8;}
.d25{background: #ff42bd;}
.d26{background: #ff37b3;}
.d27{background: #ff2aa8;}
.d28{background: #ff1a9d;}
.d29{background: #ff0091;}
.d30{background: #ff0085;}
.d31{background: #ff0079;}
.d32{background: #ff006c;}
.d33{background: #ff0060;}
.d34{background: #ff0053;}
.d35{background: #ff0046;}
.d36{background: #ff0039;}
.d37{background: #ff002b;}
.d38{background: #ff001a;}
.d39{background: #ff0000;}

  .start{
    background-image: url(../../images/arrow.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 22px 22px;
  }

.target{
  background-image: url(../../images/target.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 25px 25px;
}
.shortesPath{
    background-color: yellow;
    transition: background-color 2s;
  }

</style>