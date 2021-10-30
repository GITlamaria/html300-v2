<template>
    <div >
        <!-- <div class="product-inner">
            <div class="product-text-wrap">
                <h2 class="bg-text">{{ race.bg-text }}</h2>
            </div>
            <div class="race-image-wrap">
                <h1>{{ Race.time }}</h1>
                <b-img :img-src="race.src" class="image" />
            </div>
        </div> -->


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

<script>

export default {
    name: 'race',
    props: ['race']
}
</script>
