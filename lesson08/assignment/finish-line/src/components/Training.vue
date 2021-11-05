<template>
    <div class="container"> 
        <!-- <b-card v-for="athlete in athletes" :key="athlete.titleFriend" > -->
            <!-- Embed the Images component -->
            <!-- <Images color="green" 
                :imageSource="image"
                :imageAlt="athlete.alt"
                :imageTitle="athlete.title"
                
                /> -->
        <!-- </b-card>       -->
        <div>
            <div class="row">
                <div class="col-md-4" v-for="(athlete, i) in athletes" :key="i">
                    <ImageComponent :img-data="athlete" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//import the images component
// import Images from './Images.vue'
import ImageComponent from './ImageComponent.vue'

export default {
    components: {
        //register the Images componet
        // Images,
        ImageComponent,
    },

    data() {
        return {
            // books: [
            //     {
            //         'author': 'David Deustch',
            //         'title': 'The beginning of Infinity',
            //         'description': 'A book on philosphy about the origins of man',
            //         src: require('@/assets/images/5k_male.jpg')
            //     },
            //     {
            //         'author': 'Paul Coelho',
            //         'title': 'The Alchemist',
            //         'description': 'The true search for one\'s treasure',
            //         'img_url': 'https://placeimg.com/640/480/any'
            //     },
            //     {
            //         'author': 'Susan Kaye Quinn',
            //         'title': 'Open Minds',
            //         'description': 'Sci-Fi Futuristic book about mind reading',
            //         'img_url': 'https://placeimg.com/640/480/any'
            //     },
            //     {
            //         'author': 'Robert Kiyosaki',
            //         'title': 'Rich Dad, Poor Dad',
            //         'description': 'Motivational book on wealth building',
            //         'img_url': 'https://placeimg.com/640/480/any'
            //     },
            //     {
            //         'author': 'Dan Brown',
            //         'title': 'The Da Vinci Code',
            //         'description': 'Conspiracy theories about secrets of the holy grail',
            //         'img_url': 'https://placeimg.com/640/480/any'
            //     },
            //     {
            //         'author': 'Arthur Hailey',
            //         'title': 'The money changers',
            //         'description': 'Travel back in time and experience the banking system',
            //         'img_url': 'https://placeimg.com/640/480/any'
            //     },
            // ]

athletes: [
                {
                    title: "Bond With a Friend",
                    alt: "2 people running",
                    // image:  require('../assets/images/run-friend.jpeg')
                    src: require('@/assets/images/5k_male.jpg')
                },
                // {
                //     title: "Let your mind wonder...",
                //     alt: "2 people running",
                //     image:  require('../assets/images/run-solo.jpg')
                // },   
                // {
                //     title: "What a Feeling...",
                //     alt: "2 people running",
                //     image:  require('../assets/images/run-smile.jpeg')
                // },
            ]

        }
    }
    /* data() {
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
    } */
}

</script>

