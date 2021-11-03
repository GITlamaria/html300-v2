<template>
    <div>
        <button  v-on:click="onClick()" >hello</button>
        <h3>{{imageTitle}}</h3>
        <b-img class="imageComponent" 
        :style="{background: color}" 
        :alt="{alt: imageAlt}" 
        :src="{src: imageSource}"
        >
        </b-img>
    </div>
</template>

<script>

export default {
    name: 'Images',
    props: {
        imageTitle: String,
        text: String,
        color: String,
        imageSource: Object,
        imageAlt: String,
    },
    methods: {
        onClick() {
            console.log('click')
        }
    }
}
</script>
