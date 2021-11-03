<template>
    <div >  
        <b-card class="card"
            :title="race.firstName + ' ' + race.lastName + ', ' + race.country"
            :img-src="race.src"
            :img-alt="race.gender + 'Runner'"
            
        >
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

// import Image from './Image.vue'

export default {
    name: 'race',
    props: ['race'],


//register component
components: {
//   Image,
},
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
    width: 600px;
    /* padding: 2rem; */
    
}
.race-details {
    margin-bottom: 2rem;
}

</style>
