
<template>
  <div class="home">
    <b-jumbotron header="Top 5 scary movies" class="title" text-variant="warning">
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

<!-- link to stylesheet -->
<style src="@/assets/styles/appStyle.css" />
