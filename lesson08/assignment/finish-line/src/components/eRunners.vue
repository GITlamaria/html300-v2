<template>
 <b-container>
     <b-jumbotron fluid header="Current Record Holders"></b-jumbotron>
        <div>
            <!-- <Race v-bind:class="{alert: showAlert }" v-for="race in races" :key="race.id" :race="race" -->
              <Race v-for="race in races" :key="race.id" :race="race"
        />
        </div>
  </b-container>
</template>

<script>

// import Image from './Delete_Image.vue'
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
      // showAlert: true


    }
  },

  methods: {
    

    }
  }


</script>

<!-- link to stylesheet -->
<!--style src="@/assets/styles/appStyle.css" /-->
<style scoped>
  .setBackground {
    background: "blue";
  }

  button {
    width: 4rem;
    height: 2rem;
  }
</style>


