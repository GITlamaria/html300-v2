<template>
<!-- Image Component -->
    <div>
        <img class="image-component" 
        :class="[isActive ? 'blueBorder' : 'noBorder']"
        @click="toggleClass()"
        :src="imgData.src" 
        :alt="imgData.alt"
        >
            <div>
                <h2>{{imgData.title}}</h2>
            </div>
    </div>
</template>

<script>

//import border mixin
import ApplyBorder from './mixins/border'
export default {
    
    //use the mixin in this component
    mixins: [ApplyBorder],
    
 
    props: {
        imgData: {
            type: Object,
        },
       
    },
}
</script>

<style scoped>
.image-component {
    width: 100%;
    height: 300px;
    object-fit: fill;
    border-radius: 8px;
}

.blueBorder {
    border: 2px solid blue;
}
.noBorder {
    border: 1px solid none;
}
</style>
