<template>
    <div class="e-runners"> 
        
        <b-card class="race-card" 
            :title="race.firstName + ' ' + race.lastName + ', ' + race.country"  
        >
            <!-- embed the ImageComponent -->
            <ImageComponent :img-data="race" />
            <div class="race-details">
                <b-row>
                    <b-col>
                        Race:  {{race.race}}        <!-- bind to race prop in race object -->
                    </b-col>
                    <b-col>
                        Time:  {{race.time}}        <!-- bind to time prop in race object -->
                    </b-col>
                    <b-col>
                        Year:  {{race.year}}        <!-- bind to year prop in race object -->
                    </b-col>
                </b-row> 
            </div>
        </b-card> 
    </div>
</template>


<script>

//import component
import ImageComponent from './ImageComponent.vue'

export default {
    //set properties
    name: 'race',
    props: ['race'],
   
    //register component
    components: {
    ImageComponent,
    },
}

</script>

<!-- link to global styles page -->
<style src="@/assets/styles/appStyle.css" />


