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
export default {
    
    data() {
        return {
           styleObject: {
                color: 'red',
                fontSize: '30px'
            },
            isActive: false
        }
    },
    props: {
        imgData: {
            type: Object,
 
        },
       
    },
    methods: {
        toggleClass: function(){
            this.isActive = !this.isActive;
    }
            
    }
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
