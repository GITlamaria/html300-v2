
<template>
  <b-container class="home">
    <b-row>
      <b-col cols="3">
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
        <b-jumbotron header="Crossing the Finish Line!" />
        <b-row>
          <b-col>
            <b-card class="m text-left" border-variant="primary" :img-src="imageFriend" :img-alt="altFriend" img-right >
              <h3> {{ titleFriend }}</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat vel temporibus ducimus eligendi quos obcaecati eos earum quia saepe dolor delectus aut quas rem, quo veritatis? Veniam laborum, nam modi, tenetur velit alias dolorum incidunt dolor rem sed neque dicta ipsa eius amet atque eveniet iusto quod facere exercitationem laudantium.
              </p>
            </b-card>

            <!-- <h2> {{ friendTitle }}</h2>
            <b-img v-bind="friendProps" rounded right>
            </b-img> -->
          </b-col>
        </b-row>
        <b-row>
          <b-col>

            <b-card :img-src="imageSolo" :img-alt="altSolo" img-left>
              <h3> {{ titleSolo }}</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit error quia doloremque ut perferendis. Vero sit voluptatem, saepe animi officiis ea molestias ab, sed sint eum, voluptatibus omnis reprehenderit? Perspiciatis pariatur omnis quisquam. Veritatis asperiores rerum aperiam nemo animi repudiandae enim culpa, esse assumenda. Quos adipisci soluta nam dolore commodi.

              </p>
            </b-card>
            <!-- <h2>{{ soloTitle }}</h2>
            <b-img v-bind="soloProps" rounded left>
            </b-img> -->
          </b-col>
        </b-row>
        <b-row>
          <b-col>

            <b-card :img-src="imageSmile" :img-alt="altSmile" img-center class="text-center">
              <h3> {{ titleSmile }}</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dolore eligendi quis, consectetur nesciunt, deserunt voluptas alias in accusantium soluta id nemo delectus veritatis autem architecto obcaecati porro quidem! Laboriosam inventore mollitia libero quaerat velit! Quis dolorum molestias doloribus vero libero, impedit repellat ipsam voluptas odit sunt quia atque a!
              </p>
            </b-card>
            <!-- <h2>{{ funTitle }}</h2>
            <b-img v-bind="funProps" rounded center>
            </b-img> -->
          </b-col>
        </b-row>
      </b-col>
    </b-row>
   
  </b-container>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {

    //  friendProps: {
        titleFriend: "Bond With a Friend",
        altFriend: "2 people running",
        imageFriend:  [require('@/assets/images/run-friend.jpeg')],

        titleSolo: "Bond With a Friend",
        altSolo: "2 people running",
        imageSolo:  [require('@/assets/images/run-solo.jpg')],
        
        titleSmile: "Bond With a Friend",
        altSmile: "2 people running",
        imageSmile:  [require('@/assets/images/run-smile.jpeg')],
        
    

      /* array of objects */
      //   runners: [
      //     {
      //     description: "Let your mind wonder...",
      //     image: [
      //     require('@/assets/images/run-solo.jpg'),
      //     ],
      //   },
      //   {
      //     description: "Bond with a friend...",
      //     image: [
      //       require('@/assets/images/run-friend.jpeg'),
      //     ],
      //   },
      //   {
      //     description: "What a Feeling...",
      //     image: [
      //       require('@/assets/images/run-smile.jpeg'),
      //     ],
      //   },

      // ],

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
