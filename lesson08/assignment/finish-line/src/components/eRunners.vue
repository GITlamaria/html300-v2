<template>
 <b-container>
     <div class="row">
       <!-- iterate through the races array -->
        <div class="col-md-6" v-for="race in races" :key="race.id" >
              <!-- embed the Race component -->
              <Race :race="race" />
        </div>
     </div>
  </b-container>
</template>

<script>

// import component
import Race from './Race.vue'

export default {
  //register component
  components: {
    Race,
  },

  data() {
      return {
        /* array of objects */      
        races: [
              {
                id: "1",
                  gender: "Female",
                  firstName: "Tirunesh",
                  lastName: "Dibaba",
                  race: "5K",
                  time: "14:06.62",
                  year: "2020",
                  country: "Ethiopia",
                  src: require('@/assets/images/5k_female.jpg'),
                  
              },
              {
                id: "2",
                  gender: "Male",
                  firstName: "Joshua",
                  lastName: "Cheptegei",
                  race: "5K",
                  time: "12:35.36",
                  year: "2020",
                  country: "Uganda",
                  src: 
                  require('@/assets/images/5k_male.jpg'),
                  
              },
              {
                id: "3",
                  gender: "Female",
                  firstName: "Sifan",
                  lastName: "Hassan",
                  race: "10K",
                  time: "29:06.82",
                  year: "2021",
                  country: "Ethiopia",
                  src: 
                  require('@/assets/images/10k_female.jpg'),
                  
              },
              {
                  id: "4",
                  gender: "Male",
                  firstName: "Joshua",
                  lastName: "Cheptegei",
                  race: "10K",
                  time: "26:11.00",
                  year: "2020",
                  country: "Uganda",
                  src: 
                  require('@/assets/images/10k_male.jpg'),
                  
    
              },
              {
                  id: "5",
                  gender: "Female",
                  firstName: "Ababel",
                  lastName: "Yeshaneh",
                  race: "Half-Marathon",
                  time: "1:04:31",
                  year: "2021",
                  country: "Ethiopia",
                  src: 
                  require('@/assets/images/half_female.jpg'),
                  
              },
              {
                  id: "6",
                  gender: "Male",
                  firstName: "Kibiwott",
                  lastName: "Kandie",
                  race: "Half-Marathon",
                  time: "57:32:00",
                  year: "2020",
                  country: "Kenya",
                  src: 
                  require('@/assets/images/half_male.jpg'),
                  
              },
              {
                  id: "7",
                  gender: "Female",
                  firstName: "Mary",
                  lastName: "Keitany",
                  race: "Full-Marathon",
                  time: "2:17:01",
                  year: "2017",
                  country: "Kenya",
                  src: 
                  require('@/assets/images/full_female.jpg'),
                  
              },
              {
                  id: "8",
                  gender: "Male",
                  firstName: "Eliud ",
                  lastName: "Kipchoge",
                  race: "Full-Marathon",
                  time: "2:01:39",
                  year: "2018",
                  country: "Kenya",
                  src: 
                  require('@/assets/images/full_male.jpg'),
                  
              }
        ],
      }
    },
  }

</script>

<!-- link to global stylesheet -->
<style src="@/assets/styles/appStyle.css" />

