
<template>
  <div class="home">
    
      <!-- <h2 v-if="hidden">To find out...click the <mark>'Images'</mark> link on the navigation bar!</h2>  
      <h2 v-else>Click the button!</h2>
    </b-jumbotron>

    <b-button @click="hidden = !hidden" class="home-button" v-b-tooltip.hover.bottomright="'Bwahahahahaha!'" pill variant="warning">Beware</b-button> -->

    <b-container fluid>
        <b-row>
            <b-col cols="2">
                <h3>
                    run clubs
                </h3>
            
            </b-col>
            <b-col cols="10">
                <b-jumbotron header="Crossing the Finish Line!"/>
                <b-carousel
                        id="runner-carousel"
                        v-model="slide"
                        indicators
                        :interval="4000">

                        <!-- iterate through the runners array to display the images in the carousel -->
                        <b-carousel-slide class="runner-slide" v-for="(runner, index) in runners" :key='index'
                            :img-src="runner.image"
                            :caption="runner.description">
                        </b-carousel-slide>
                </b-carousel>
            </b-col>
        </b-row>
    </b-container>
  </div>

</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      /* array of objects */
        runners: [
          {
          description: "Let your mind wonder...",
          image: [
          require('@/assets/images/run-solo.jpg'),
          ],
        },
        {
          description: "Bond with a friend...",
          image: [
            require('@/assets/images/run-friend.jpeg'),
          ],
        },
        {
          description: "What a Feeling...",
          image: [
            require('@/assets/images/run-smile.jpeg'),
          ],
        },

      ],
    }
  }
}
</script>

<!-- link to stylesheet -->
<style src="@/assets/styles/appStyle.css" />
