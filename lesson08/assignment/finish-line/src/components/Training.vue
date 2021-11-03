<template>
    <b-container> 
        <b-card v-for="athlete in athletes" :key="athlete.titleFriend" >
            <!-- Embed the Images component -->
            <Images color="green" 
                :imageSource="image"
                :imageAlt="athlete.alt"
                :imageTitle="athlete.title"
                
                />
        </b-card>      
    </b-container>
</template>

<script>
//import the images component
import Images from './Images.vue'

export default {
    components: {
        //register the Images componet
        Images,
    },
    data() {
        return {
            athletes: [
                {
                    title: "Bond With a Friend",
                    alt: "2 people running",
                    image:  require('../assets/images/run-friend.jpeg')
                },
                {
                    title: "Let your mind wonder...",
                    alt: "2 people running",
                    image:  require('../assets/images/run-solo.jpg')
                },   
                {
                    title: "What a Feeling...",
                    alt: "2 people running",
                    image:  require('../assets/images/run-smile.jpeg')
                },
            ]
        }
    }
}

</script>

