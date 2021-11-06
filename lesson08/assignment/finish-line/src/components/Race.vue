<template>
    <div class="e-runners"> 
        
        <b-card class="race-card" 
            :title="race.firstName + ' ' + race.lastName + ', ' + race.country"
           
        >
            <ImageComponent :img-data="race" />
            <div class="race-details">

                <b-row>
                    <b-col>
                        Race:  {{race.race}}
                    </b-col>
                    <b-col>
                        Time:  {{race.time}}
                    </b-col>
                    <b-col>
                        Year:  {{race.year}}
                    </b-col>
                
                </b-row> 
                <div>     
                </div>
            </div>
        </b-card> 
    </div>
</template>


<script>

import ImageComponent from './ImageComponent.vue'

export default {
    name: 'race',
    props: ['race'],
   


    //register component
    components: {
    ImageComponent,
    },

    methods: {
        
    },

    data() {
        return {

            // styleObject: {
            //     color: 'red',
            //     fontSize: '30px'
            // }
            // status: 'success'
           
        }
    }
}

</script>



<style scoped>
    .race-details {
        display: flex;
        flex-direction: column;
        color: #00008B;
        border-top: 3px solid blue;
        margin-bottom: 2rem;
    }

    .race-card {
        background-color: white;
        margin-top: 2rem;
        color: #00008B;
    }

</style>

