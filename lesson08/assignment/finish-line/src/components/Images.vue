<template>
    <!-- <h1>{{ text }}</h1> -->
   
    <b-img fluid @click="onClick()" class="cards col-md-6 text-right" 
    :style="{border: 'border'}"

    
    :alt="alt" 
    :title="text" 
    :srcset="image" />
    
 
</template>

<script>


//export component
export default {
    name: 'Images',

    props: {
       
        text: String,
        alt: String,
        image: Object,

    },

    methods: {
        onClick() {
            console.log('click')
        }

    }
    }
</script>
