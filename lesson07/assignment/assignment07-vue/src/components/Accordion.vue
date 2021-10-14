<template>
 <div>
   <b-container fluid="md" class="container">
     <b-row>
       <b-col>
        <b-button v-b-toggle.collapse-3 class="halloween">Halloween Activities</b-button>
       </b-col>
     </b-row>
        <b-col>
          <b-collapse visible id="collapse-3">
            <b-card class="h-activities">
              <ul>
                <!-- interpolate data from the activities array -->
                <li v-for="(data, index) in activities" :key='index'>{{ data.activity }}</li>
              </ul>
            </b-card>
          </b-collapse>
        </b-col>
   </b-container> 
</div>
</template>

<script>
export default {
  name: 'Accordion',
  data() {
    return {
      /* create an array of objects */
      activities: [
        { "activity": "Carve Pumpkins"},
        { "activity": "Go to a Haunted House"},
        { "activity": "Eat Candy Corn"},
        { "activity": "Watch Scary Movies"},
        { "activity": "Wear a Halloween Costume"}
        ],
    }
  }
}
</script>

<!-- link to stylesheet -->
<style src="@/assets/styles/appStyle.css" />
 