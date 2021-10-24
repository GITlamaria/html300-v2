
<template>
  <div class="home">
    
      <!-- <h2 v-if="hidden">To find out...click the <mark>'Images'</mark> link on the navigation bar!</h2>  
      <h2 v-else>Click the button!</h2>
    </b-jumbotron>

    <b-button @click="hidden = !hidden" class="home-button" v-b-tooltip.hover.bottomright="'Bwahahahahaha!'" pill variant="warning">Beware</b-button> -->

    <b-container fluid>
        <b-row>
            <b-col cols="2">
                <b-container class="container">
     <b-row>
       <b-col>
        <b-button v-b-toggle.collapse class="clubs">PNW Running Clubs</b-button>
       </b-col>
     </b-row>
        <b-col>
          <b-collapse visible id="collapse">
            <b-card class="clubs">
              <ul>
                <!-- iterate through the clubs array to fill the collapsible menu -->
                <li v-for="(club, key) in clubs" :key="club.id">
                  
                  <a :v-bind:href="club.link">{{key}}</a>
                  
                  </li>
              </ul>
            </b-card>
          </b-collapse>
        </b-col>
   </b-container> 
            
            </b-col>
            <b-col cols="10" fluid-grow>
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

      /* clubs object */
      clubs: {
        
        'Club Northwest': {id: 1, 
            link: "https://www.clubnorthwest.org/",
            image: [
            require('@/assets/images/Club+Northwest+logo_transparent.png'), 
            ]},

        'Running in the USA': {id: 2,  
            link: "https://www.runningintheusa.com/club/list/wa",
            image: [
            require('@/assets/images/run-usa.gif'), 
            ]},

        'Seattle Running Club': {id: 2,    
            link: "https://seattlerunningclub.org",
            image: [
            require('@/assets/images/seattle-running.png'), 
            ]},

        'Cascade Run Club Seattle': {id: 2,   
            link: "https://cascaderunclub.com/locations/cascade-run-club-seattle",
            image: [
            require('@/assets/images/run-cascade.png'), 
            ]},

        'Sonic Boom Running Club': {id: 2,     
            link: "https://sonicboomrunningclub.com/",
            image: [
            require('@/assets/images/sonic-boom.jpg'), 
            ]},
        },
    }
  }
}
</script>

<!-- link to stylesheet -->
<style src="@/assets/styles/appStyle.css" />
