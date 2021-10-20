
<template>
  <div class="home">
    <b-jumbotron header="Top 5 scary movies" class="title">
      <h2 v-if="hidden">To find out...click the <mark>'Images'</mark> link on the navigation bar!</h2>  
      <h2 v-else>Click the button!</h2>
    </b-jumbotron>

    <b-button @click="hidden = !hidden" class="home-button" v-b-tooltip.hover.bottomright="'Bwahahahahaha!'" pill variant="warning">Beware</b-button>

  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
    hidden: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .title {
    color: #000000;
  }
  .home {
    background-color: #512888;
    
    
  }
  mark {
    background-color: #512888;
    color: #adff2f;
    font-style: italic;
  }
  h2 {
    color: #EB6123;
  }
  .home-button {
    width: 10rem;
    margin-top: 1rem;
    float: right;
  }
  body {
    background-color: red;
  }
  

</style>
