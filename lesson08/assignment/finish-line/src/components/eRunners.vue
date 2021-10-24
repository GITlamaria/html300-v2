<template>
 <div>
     <b-jumbotron fluid header="Current Record Holders"></b-jumbotron>
     
 <div class="row">
    
    <!--iterate through the races array to display data for each card -->
    <b-card class="cards col-md-6 text-right" img-height="350"
    v-for="(race, races) in races" :key='races'
          
          :title="race.firstName + ' ' + race.lastName"
          :sub-title="race.country"
          :header="'Race:  ' + race.race + '  *  ' + 'Year:  ' + race.year + '  *  ' + 'Time:  ' + race.time"
          :img-src="race.image"

        >
</b-card>
  </div>
  </div>
</template>

<script>
export default {
 
  data() {
    return {

     

      /* array of objects */
        races: [
            {
                gender: "Female",
                firstName: "Tirunesh",
                lastName: "Dibaba",
                race: "5K",
                time: "14:06.62",
                year: "2020",
                country: "Ethiopia",
                image: [
                require('@/assets/images/5k_female.jpg'),
                ],
            },
            {
                gender: "Male",
                firstName: "Joshua",
                lastName: "Cheptegei",
                race: "5K",
                time: "12:35.36",
                year: "2020",
                country: "Uganda",
                image: [
                require('@/assets/images/5k_male.jpg'),
                ],
            },
            {
                gender: "Female",
                firstName: "Sifan",
                lastName: "Hassan",
                race: "10K",
                time: "29:06.82",
                year: "2021",
                country: "Ethiopia",
                image: [
                require('@/assets/images/10k_female.jpg'),
                ],
            },
            {
                gender: "Male",
                firstName: "Joshua",
                lastName: "Cheptegei",
                race: "10K",
                time: "26:11.00",
                year: "2020",
                country: "Uganda",
                image: [
                require('@/assets/images/10k_male.jpg'),
                ],
            },
            {
                gender: "Female",
                firstName: "Ababel ",
                lastName: "Yeshaneh ",
                race: "Half-Marathon",
                time: "1:04:31",
                year: "2021",
                country: "Ethiopia",
                image: [
                require('@/assets/images/half_female.jpg'),
                ],
            },
            {
                gender: "Male",
                firstName: "Kibiwott",
                lastName: "Kandie",
                race: "Half-Marathon",
                time: "57:32:00",
                year: "2020",
                country: "Kenya",
                image: [
                require('@/assets/images/half_male.jpg'),
                ],
            },
            {
                gender: "Female",
                firstName: "Mary ",
                lastName: "Keitany ",
                race: "Full-Marathon",
                time: "2:17:01",
                year: "2017",
                country: "Kenya",
                image: [
                require('@/assets/images/full_female.jpg'),
                ],
            },
            {
                gender: "Male",
                firstName: "Eliud ",
                lastName: "Kipchoge",
                race: "Full-Marathon",
                time: "2:01:39",
                year: "2018",
                country: "Kenya",
                image: [
                require('@/assets/images/full_male.jpg'),
                ],
            }
      ],
    }
  }
}
</script>

<!-- link to stylesheet -->
<style src="@/assets/styles/appStyle.css" />

