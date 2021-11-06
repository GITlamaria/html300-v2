
<template>
  <b-container fluid class="home">
    <b-row>
      <b-col class="clubs" cols="3">
          <!-- Running Clubs - left pane -->

     <b-row>
       <b-col>
        <b-button v-b-toggle.collapse class="clubs">PNW Running Clubs</b-button>
       </b-col>
     </b-row>
        <b-col>
          <b-collapse visible id="collapse">
            <b-card class="clubs">
                <!-- iterate through the clubs array to fill the collapsible menu -->
                <p v-for="(club, key) in clubs" :key="club.id">
                  <b-row>
                    <b-col>
                      <a :href="club.link">{{key}}</a>
                    </b-col>
                  </b-row>
                </p>
            </b-card>
          </b-collapse>
        </b-col>
      </b-col>

      <b-col cols="9" class="home-main">
        <b-row  class="r1">
          <b-col>
            <b-card class="friend" :img-src="imageFriend" :img-alt="altFriend" img-left rounded>
              <h3> {{ titleFriend }}</h3>
              <b-card-body>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat vel temporibus ducimus eligendi quos obcaecati eos earum quia saepe dolor delectus aut quas rem, quo veritatis? Veniam laborum, nam modi, tenetur velit alias dolorum incidunt dolor rem sed neque dicta ipsa eius amet atque eveniet iusto quod facere exercitationem laudantium.
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>

        <b-row class="r2">
          <b-col>
            <b-card class="solo" :img-src="imageSolo" :img-alt="altSolo" img-right>
              <h3> {{ titleSolo }}</h3>
              <b-card-body>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae quasi inventore dignissimos, repellat hic temporibus repudiandae laudantium fuga saepe praesentium ab porro, nisi, esse doloribus quas cumque. Eius quos doloribus suscipit enim veritatis fugiat tenetur quo! Ex labore voluptatem, voluptatum atque impedit illum error, reiciendis magnam et ullam a sint.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat maiores ea provident illo facilis consequatur incidunt cupiditate, inventore similique voluptates, sapiente laudantium eum commodi veritatis quae ipsum repellendus quisquam ipsa.
              </p>
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>

        <b-row class="r3">
          <b-col>
            <b-card class="smile" :img-src="imageSmile" :img-alt="altSmile" img-left>
              <h3> {{ titleSmile }}</h3>
              <b-card-body>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dolore eligendi quis, consectetur nesciunt, deserunt voluptas alias in accusantium soluta id nemo delectus veritatis autem architecto obcaecati porro quidem! Laboriosam inventore mollitia libero quaerat velit! Quis dolorum molestias doloribus vero libero, impedit repellat ipsam voluptas odit sunt quia atque a!
              </p>
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>
      </b-col>
    </b-row> 
  </b-container>
</template>

<script>

export default {
  

  components: {
    
  },
  
  data() {
    return {
     

            titleFriend: "Bond With a Friend",
            altFriend: "2 people running",
            imageFriend:  require('../assets/images/run-friend.jpeg'),
        
            titleSolo: "Let your mind wonder...",
            altSolo: "1 person running",
            imageSolo:  require('../assets/images/run-solo.jpg'),
      
            titleSmile: "What a Feeling...",
            altSmile: "happy kid running",
            imageSmile:  require('../assets/images/run-smile.jpeg'),
                
            
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

        showAlert: true
    }
  }
}
</script>

<!-- link to stylesheet -->
<style src="@/assets/styles/appStyle.css" />
<style scoped>
.home-main {
      background-image: url('../assets/images/main-content.jpeg'); 
      background-size: cover;
      background-position: center;
}
</style> 

