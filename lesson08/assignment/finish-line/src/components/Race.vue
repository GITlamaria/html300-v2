<template>
    <div > 
        
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
    color: blue;
    border-top: 3px solid blue;
}
.card {
    background-color: #f1f3eb; 
    margin-top: 2rem;

    /* padding: 2rem; */
    
}
.race-details {
    margin-bottom: 2rem;
}

</style>
